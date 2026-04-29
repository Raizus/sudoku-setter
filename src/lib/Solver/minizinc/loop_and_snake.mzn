% -------------------------------------------------------------------------------- % 
% ------ CELL CENTER LOOP CONSTRAINTS -------------------------------------------- %

function var int: grid_graph_h_degree_f(
    array[int,int] of var bool: edge_h,
    int: i, int: j
) = let {
    set of int: cols = index_set_2of2(edge_h);
} in (
    (if in_bounds_2d(i, j-1, edge_h) then bool2int(edge_h[i, j-1]) else 0 endif)   % left
    + (if in_bounds_2d(i, j, edge_h) then bool2int(edge_h[i, j])   else 0 endif)   % right
);

function var int: grid_graph_v_degree_f(
    array[int,int] of var bool: edge_v,
    int: i, int: j
) = let {
    set of int: rows = index_set_1of2(edge_v);
} in (
    (if in_bounds_2d(i-1, j, edge_v) then bool2int(edge_v[i-1, j]) else 0 endif)   % up
    + (if in_bounds_2d(i, j, edge_v) then bool2int(edge_v[i, j])   else 0 endif)  % down
);

function var int: grid_graph_degree_f(
    array[int,int] of var bool: edge_h, 
    array[int,int] of var bool: edge_v, 
    int: i, int: j
) = (
    grid_graph_h_degree_f(edge_h, i, j) + grid_graph_v_degree_f(edge_v, i, j)
);

predicate assert_graph_edges_p(
    array[int, int] of var $$T: loop_nodes,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,    
) = let {
    set of int: rows = index_set_1of2(loop_nodes);
    set of int: cols = index_set_2of2(loop_nodes);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
} in (
    % Assert edge index sets match expected dimensions
    assert(rows_h = rows,   "edges_h row index mismatch")
    /\
    assert(cols_h = min(cols)..max(cols)-1, "edges_h col index mismatch")
    /\
    assert(rows_v = min(rows)..max(rows)-1, "edges_v row index mismatch")
    /\
    assert(cols_v = cols,   "edges_v col index mismatch")
);

predicate edge_in_path_graph_p(
    tuple(int, int): coord1,
    tuple(int, int): coord2,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    int: r1 = coord1.1; int: c1 = coord1.2;
    int: r2 = coord2.1; int: c2 = coord2.2;
    bool: is_adjacent = test_orth_adjacent_2d(r1, c1, r2, c2);
    int: dr = abs(r1-r2);
    int: dc = abs(c1-c2);
} in (
    is_adjacent -> (
        (dr = 1 /\ dc = 0 /\ edges_v[min(r1,r2),c1])
        \/
        (dr = 0 /\ dc = 1 /\ edges_h[r1,min(c1,c2)])
    )
);

predicate graph_edges_p(
    array[int, int] of var bool: nodes,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: rows = index_set_1of2(nodes);
    set of int: cols = index_set_2of2(nodes);

    int: r_min = min(rows); int: r_max = max(rows);
    int: c_min = min(cols); int: c_max = max(cols);
    int: n_rows = card(rows); int: n_cols = card(cols);
    int: N = n_rows * n_cols;

    set of int: edges_h_cols = c_min..c_max-1;
    set of int: edges_v_rows = r_min..r_max-1;

    % Build flat from/to arrays for all grid edges (both h and v)
    int: E_h = n_rows * (n_cols - 1);
    int: E_v = (n_rows - 1) * n_cols;
    int: E = E_h + E_v;

    array[1..E] of int: from =
        [coords_to_id_f(i, j, nodes) | i in rows, j in edges_h_cols] ++
        [coords_to_id_f(i, j, nodes) | i in edges_v_rows, j in cols];

    array[1..E] of int: to =
        [coords_to_id_f(i, j+1, nodes) | i in rows, j in edges_h_cols] ++
        [coords_to_id_f(i+1, j, nodes) | i in edges_v_rows, j in cols];

    % Flat node and edge bool arrays for connected
    array[1..N] of var bool: ns = array1d(nodes);
    array[1..E] of var bool: es = array1d(edges_h) ++ array1d(edges_v);
} in (
    assert_graph_edges_p(nodes, edges_h, edges_v)
    /\
    % Horizontal edges: only active if both endpoint nodes are active
    forall(i in rows, j in edges_h_cols)(
        edges_h[i,j] -> (nodes[i,j] /\ nodes[i,j+1])
    )
    /\
    % Vertical edges: only active if both endpoint nodes are active
    forall(i in edges_v_rows, j in cols)(
        edges_v[i,j] -> (nodes[i,j] /\ nodes[i+1,j])
    )
    /\
    % The active subgraph must be connected
    connected(from, to, ns, es)
);

predicate loop_edges_p(
    array[int, int] of var bool: loop_nodes,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: rows = index_set_1of2(loop_nodes);
    set of int: cols = index_set_2of2(loop_nodes);
} in (
    % For every node: if false -> all incident edges false
    %                 if true  -> exactly 2 incident edges true (loop condition)
    forall(i in rows, j in cols)(
        let {
            var int: deg = grid_graph_degree_f(edges_h, edges_v, i ,j);
        } in (
            if loop_nodes[i,j] then deg = 2 else deg = 0 endif
        )
    )
);

predicate path_no_diagonal_touching_p(array[int, int] of var bool: loop_nodes) = let {
        set of int: rows = index_set_1of2(loop_nodes);
        set of int: cols = index_set_2of2(loop_nodes);
    } in (
        % no crossing 1's and 0's because it implies the the loop is touching diagonally
        % [1, 0]    or  [0, 1]
        % [0, 1]        [1, 0]
        forall(r in rows where r < max(rows), c in cols where c < max(cols))(
            (loop_nodes[r,c] == true /\ loop_nodes[r+1, c+1] == true -> loop_nodes[r+1,c] == true \/ loop_nodes[r, c+1] == true)
        ) /\
        forall(r in rows where r < max(rows), c in cols where c < max(cols))(
            (loop_nodes[r,c+1] == true /\ loop_nodes[r+1, c] == true -> loop_nodes[r,c] == true \/ loop_nodes[r+1, c+1] == true)
        )
    );

predicate cell_center_loop_no_orthogonal_touching_p(
    array[int, int] of var bool: loop_nodes
) = let {
    set of int: rows = index_set_1of2(loop_nodes);
    set of int: cols = index_set_2of2(loop_nodes);
} in (
    forall(i in rows, j in cols)(
        let {
            array[int] of tuple(int, int): idxs = orth_adjacent_idxs_in_bounds(i, j, loop_nodes);
        } in (
            (not loop_nodes[i,j]) \/ 
            (loop_nodes[i,j] /\ sum(b in idxs)(bool2int(loop_nodes[b.1, b.2])) = 2)
        )
    )
);

predicate cell_center_loop_regions_p(
    array[int, int] of var bool: loop_nodes, % loop / non-loop cells
    array[int, int] of var int: regions
) = let {
        set of int: rows = index_set_1of2(loop_nodes);
        set of int: cols = index_set_2of2(loop_nodes);
        int: n_rows = length(rows);
        int: n_cols = length(cols);
        int: g_size = n_rows * n_cols;
    } in (
    % shaded cells (1 = loop) correspond to region 0
    forall(r in rows, c in cols) (
        loop_nodes[r,c] = true <-> regions[r, c] = 0
    )
    
    /\ forall(r in rows, c in cols) (
        loop_nodes[r,c] = false <-> regions[r, c] != 0
    )
    
    /\ shaded_adjacent_neighbours_same_region_p(loop_nodes, regions)

    /\ cave_floodfill_p(regions)
);

predicate not_loop_sized_regions_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: regions, 
    set of int: allowed
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n = length(allowed);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    set of int: ids = 0..g_size;
    array[ids] of var 0..g_size: sizes;
} in (
    % Each area's size is the number of cells in that area.
    forall (id in ids) (
        sizes[id] = sum (r in rows, c in cols) (regions[r, c] = id)
    ) /\
    % for all non loop cells
    forall(r in rows, c in cols where regions[r,c] != 0) (
        let {
            var int: id = regions[r, c];
            var int: size = sizes[id];
            int: min_v = min(allowed);
        } in (
            (id == 0) \/
            % each non loop region must have size of at most n,
            % and contain the digits between min_v and size
            (size <= n /\ grid[r, c] >= min_v /\ grid[r, c] <= size /\
                % values in the same region must be different
                forall(r2 in rows, c2 in cols where regions[r2,c2] = id /\ (r2 != r \/ c2 != c))(
                    grid[r2,c2] != grid[r,c]
                )
            )
        )
    )
);

predicate adjacent_loop_cells_are_multiples_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: loop_nodes
) =
    assert(index_sets_agree(grid, loop_nodes), "grid and loop_nodes must have the same indexes.")
    /\ forall(i in index_set_1of2(grid), j in index_set_2of2(grid))(
        % Right neighbor
        (j < max(index_set_2of2(grid)) ->
            (loop_nodes[i,j] = true /\ loop_nodes[i,j+1] = true ->
                multiples_p(grid[i,j], grid[i,j+1]))
        ) /\
        % Down neighbor
        (i < max(index_set_1of2(grid)) ->
            (loop_nodes[i,j] = true /\ loop_nodes[i+1,j] = true ->
                multiples_p(grid[i,j], grid[i+1,j]))
        )
    );

predicate connected_path_nodes_are_multiples_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
} in (
    % if two nodes are connected then abs(grid[r1,c1]-grid[r2,c2]) >= 5
    % Horizontal edges: if edge is active, adjacent nodes differ by >= 5
    forall(i in rows_h, j in cols_h)(
        edges_h[i,j] -> multiples_p(grid[i,j], grid[i,j+1])
    )
    /\
    % Vertical edges: if edge is active, adjacent nodes differ by >= 5
    forall(i in rows_v, j in cols_v)(
        edges_v[i,j] -> multiples_p(grid[i+1,j], grid[i,j])
    )
);

predicate adjacent_loop_cells_are_german_whispers_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: loop_nodes
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, loop_nodes), "grid and loop_nodes must have the same indexes.")
    /\ region_whispers_p(grid, loop_nodes, 1, 5)
);

predicate connected_path_nodes_are_german_whispers_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
} in (
    % if two nodes are connected then abs(grid[r1,c1]-grid[r2,c2]) >= 5
    % Horizontal edges: if edge is active, adjacent nodes differ by >= 5
    forall(i in rows_h, j in cols_h)(
        edges_h[i,j] -> abs(grid[i,j] - grid[i,j+1]) >= 5
    )
    /\
    % Vertical edges: if edge is active, adjacent nodes differ by >= 5
    forall(i in rows_v, j in cols_v)(
        edges_v[i,j] -> abs(grid[i,j] - grid[i+1,j]) >= 5
    )
);

predicate connected_path_nodes_forbidden_adjacent_sum_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
    var int: val
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
} in (
    assert_graph_edges_p(grid, edges_h, edges_v)
    /\
    % if two nodes are connected then grid[r1,c1]+grid[r2,c2] != val
    % Horizontal edges
    forall(i in rows_h, j in cols_h)(
        edges_h[i,j] -> grid[i,j] + grid[i,j+1] != val
    )
    /\
    % Vertical edges
    forall(i in rows_v, j in cols_v)(
        edges_v[i,j] -> grid[i,j] + grid[i+1,j] != val
    )
);

predicate connected_path_visits_every_cell_except_x_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: loop_nodes,
    var int: val
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, loop_nodes), "grid and loop_nodes must have the same indexes.")
    /\ 
    forall(r in rows, c in cols)(
        (loop_nodes[r,c] /\ grid[r,c] != val) \/ (not loop_nodes[r,c] /\ grid[r,c] == val)
    )
);

predicate connected_path_nodes_parity_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
} in (
    % if two nodes are connected then they have different parity
    % Horizontal edges: if edge is active, adjacent nodes have different parity
    forall(i in rows_h, j in cols_h)(
        edges_h[i,j] -> different_parity_p(grid[i,j], grid[i,j+1])
    )
    /\
    % Vertical edges: if edge is active, adjacent nodes have different parity
    forall(i in rows_v, j in cols_v)(
        edges_v[i,j] -> different_parity_p(grid[i,j], grid[i+1,j])
    )
);
    
function var int: count_loop_vars_f(array[int] of var bool: arr) =
    sum(i in index_set(arr))(bool2int(arr[i] != 0));

% A digit on the loop indicates how many times that digit appears on the loop.
predicate counting_loop_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: loop_nodes
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, loop_nodes), "grid and loop_nodes must have the same indexes.")
    /\ forall(i in rows, j in cols)(
        loop_nodes[i,j] == true -> conditional_count_f(array1d(grid), array1d(loop_nodes), grid[i,j], loop_nodes[i,j]) = grid[i,j]
    )
);

predicate modular_loop_aux_p(
    array[int] of var int: arr, 
    array[int] of var 0..1: loop_nodes
) = let {
    set of int: idxs = index_set(arr)
} in (
    if all_equal(loop_nodes) /\ loop_nodes[min(idxs)] = 1 then
        modular_line_p(arr, 3)
    else
        true
    endif
);

predicate modular_loop_p(
    array[int,int] of var int: grid, 
    array[int,int] of var 0..1: loop_nodes
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(r in rows where r < max(rows), c in cols where c < max(cols)) (
        modular_loop_aux_p([grid[r, c], grid[r, c+1], grid[r+1, c+1]], [loop_nodes[r, c], loop_nodes[r, c+1], loop_nodes[r+1, c+1]]) /\
        modular_loop_aux_p([grid[r+1, c], grid[r, c], grid[r, c+1]], [loop_nodes[r+1, c], loop_nodes[r, c], loop_nodes[r, c+1]]) /\
        modular_loop_aux_p([grid[r, c], grid[r+1, c], grid[r+1, c+1]], [loop_nodes[r, c], loop_nodes[r+1, c], loop_nodes[r+1, c+1]]) /\
        modular_loop_aux_p([grid[r, c+1], grid[r+1, c+1], grid[r+1, c]], [loop_nodes[r, c+1], loop_nodes[r+1, c+1], loop_nodes[r+1, c]])
    ) /\
    forall(r in rows where r < max(rows) - 1, c in cols where c < max(cols) - 1) (
        modular_loop_aux_p([grid[r, c+1], grid[r+1, c+1], grid[r+2, c+1]], [loop_nodes[r, c+1], loop_nodes[r+1, c+1], loop_nodes[r+2, c+1]]) /\
        modular_loop_aux_p([grid[r+1, c], grid[r+1, c+1], grid[r+1, c+2]], [loop_nodes[r+1, c], loop_nodes[r+1, c+1], loop_nodes[r+1, c+2]])
    )
);

predicate thermo_sightline_loop_arrow_p(
    array[int] of var int: arr, 
    array[int] of var bool: loop_nodes, 
    var int: cell_var
) = let {
    % Get array bounds
    set of int: idxs = index_set(arr);
    int: min_i = min(idxs);
    array[index_set(arr)] of var bool: counts;
    constraint count_uninterrupted_counts_p(loop_nodes, counts, true);
} in (
    % cell value is the number of seen loop cells
    cell_var == sum(counts) /\
    % digits increase along loop cells seen by arrow, starting at by the cell_var
    (counts[min_i] /\ cell_var < arr[min_i]) /\
    forall(i in idxs where i < max(idxs))(
        counts[i] /\ counts[i+1] -> arr[i] < arr[i+1]
    )
);

predicate loopwhiches_p(
    array[int] of var int: arr, 
    array[int] of var bool: loop_nodes, 
    var int: val
) = let {
    set of int: idxs = index_set(arr);
    array[idxs] of var bool: sandwiched = [
        exists(j in idxs where j<i)(
            loop_nodes[j] == true
        ) /\
        exists(k in idxs where k>i)(
            loop_nodes[k] == true
        )
    | i in idxs]
} in (
    conditional_sum_f(arr, sandwiched, true) == val
);

predicate internal_loop_skyscrapers_p(
    array[int] of var int: cell_vars,
    array[int] of var bool: loop_vars,
    var int: value
) = (
    value == conditional_skyscrapers_f(cell_vars, loop_vars, true)
);

predicate loop_pointer_arrow_p(
    var int: circle_var,
    var int: tip_var,
    array[int] of var int: direction_vars,
    array[int] of var int: direction_loop_vars,
) = (
    assert(index_sets_agree(direction_vars, direction_loop_vars), "direction_vars and direction_loop_vars must have the same indexes.")
    % arrow tip points to cell containing digit in arrow bulb
    % digit on arrow tip is the distance to the pointed cell
    /\ direction_vars[tip_var] = circle_var
    % pointed cell is on the loop
    /\ direction_loop_vars[tip_var] = 1
);

predicate counting_circles_loop_or_non_loop_p(
    array[int] of var int: circle_vars,
    array[int] of var bool: loop_nodes,
    set of int: allowed
) = let {
    int: n = length(circle_vars);
    set of int: idxs = index_set(circle_vars);
    set of int: allowed_inds = index_set(allowed);
    array[allowed_inds] of var bool: used_vals_on_loop;
    array[allowed_inds] of var bool: used_vals_not_on_loop;
} in (
    assert(index_sets_agree(circle_vars, loop_nodes), "circle_vars and loop_nodes must have the same indexes.")

    % the sum of unique values in circles is equal to the number of circles
    /\ (
    conditional_sum_f(allowed, used_vals_on_loop, true) + 
    conditional_sum_f(allowed, used_vals_not_on_loop, true) = n
    )

    /\ forall(i in allowed_inds)(
        let {
            int: value = allowed_inds[i];
            var bool: used_on_loop = used_vals_on_loop[i];
            var bool: used_not_on_loop = used_vals_not_on_loop[i];
        } in (
            (not used_on_loop -> forall(j in idxs where loop_nodes[j] == true)(
                circle_vars[j] != value
            ))
            /\ (used_on_loop -> exists(j in idxs where loop_nodes[j] == true)(
                circle_vars[j] == value
            ))
            /\ (not used_not_on_loop -> forall(j in idxs where loop_nodes[j] == false)(
                circle_vars[j] != value
            ))
            /\ (used_not_on_loop -> exists(j in idxs where loop_nodes[j] == false)(
                circle_vars[j] == value
            ))
        )
    )

    /\ forall(i in idxs)(
        conditional_count_f(circle_vars, loop_nodes, circle_vars[i], loop_nodes[i]) = circle_vars[i]
    )
);

function var int: count_loop_turns_f(
    array[int] of tuple(int, int): coords,
    array[int, int] of var bool: loop_nodes,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,   
) = let {
    set of int: rows = index_set_1of2(loop_nodes);
    set of int: cols = index_set_2of2(loop_nodes);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
    constraint assert(rows_h = rows,   "edges_h row index mismatch");
    constraint assert(cols_h = min(cols)..max(cols)-1, "edges_h col index mismatch");
    constraint assert(rows_v = min(rows)..max(rows)-1, "edges_v row index mismatch");
    constraint assert(cols_v = cols,   "edges_v col index mismatch");
} in (
    sum(k in index_set(coords))(
        let {
            int: r = coords[k].1;
            int: c = coords[k].2;

            var int: h_count = grid_graph_h_degree_f(edges_h, r, c);
            var int: v_count = grid_graph_v_degree_f(edges_v, r, c);
        } in
            bool2int(loop_nodes[r,c] /\ h_count = 1 /\ v_count = 1)
    )
);

predicate edge_loop_p(var bool: loop_var_1, var bool: loop_var_2) = 
    loop_var_1 /\ loop_var_2;

predicate edge_mid_loop_segment_p(
    tuple(int, int): coord1,
    tuple(int, int): coord2,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v
) = let {
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);

    int: r1 = coord1.1; int: c1 = coord1.2;
    int: r2 = coord2.1; int: c2 = coord2.2;
} in (
    assert(test_orth_adjacent_2d(r1, c1, r2, c2), "coord1 and coord2 must be adjacent")
    /\
    if c1 = c2 then
        % Vertical adjacency: coord1 is above coord2 (r1 < r2)
        % The connecting edge is edges_v[min(r1,r2), c1]
        assert(r1<r2, "coord1 must be above coord2")
        /\ edges_v[r1, c1]
        /\ (
        let {
            % Run of consecutive true edges above r1 (going upward from r1-1)
            var int: run_above = sum(k in min(rows_v)..r1-1)(
                bool2int(forall(m in k..r1-1)(edges_v[m, c1]))
            );
            % Run of consecutive true edges below r2 (going downward from r2)
            var int: run_below = sum(k in r2..max(rows_v))(
                bool2int(forall(m in r2..k)(edges_v[m, c1]))
            );
        } in
            run_above = run_below
        )
    else
        % Horizontal adjacency: coord1 is left of coord2 (c1 < c2)
        % The connecting edge is edges_h[r1, min(c1,c2)]
        assert(c1<c2, "coord1 must be to the left of coord2")
        /\ edges_h[r1, c1]
        /\
        let {
            % Run of consecutive true edges left of c1 (going leftward from c1-1)
            var int: run_left = sum(k in min(cols_h)..c1-1)(
                bool2int(forall(m in k..c1-1)(edges_h[r1, m]))
            );
            % Run of consecutive true edges right of c2 (going rightward from c2)
            var int: run_right = sum(k in c2..max(cols_h))(
                bool2int(forall(m in c2..k)(edges_h[r1, m]))
            );
        } in
            run_left = run_right
    endif
);

predicate loop_cells_p(
    array[int] of var bool: loop_nodes,
) = (
    forall(node in loop_nodes)(node = true)
);

% Sum of grid values from (r,c) going in direction (dr,dc),
% up to and including the first turn node.
% A turn node is one where the perpendicular edges are active.
% edges_v indexed rows_v x cols_v, edges_h indexed rows_h x cols_h.

predicate path_is_turn_p(
    int: r, int: c,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v    
) = let {
    var bool: has_left  = (in_bounds_2d(r, c-1, edges_h) /\ edges_h[r, c-1]);  % edge to the left
    var bool: has_right = (in_bounds_2d(r, c, edges_h)  /\ edges_h[r, c]);    % edge to the right
    var bool: has_up    = (in_bounds_2d(r-1, c, edges_v) /\ edges_v[r-1, c]);  % edge upward
    var bool: has_down  = (in_bounds_2d(r, c, edges_v)  /\ edges_v[r, c]);    % edge downward
} in (
    (has_left xor has_right) /\ (has_up xor has_down)
);

function var int: arm_sum_f(
    int: r, int: c,
    int: dr, int: dc,
    array[int, int] of var int: grid,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v
) = let {
    set of int: rows_g  = index_set_1of2(grid);
    set of int: cols_g  = index_set_2of2(grid);
    set of int: rows_v  = index_set_1of2(edges_v);
    set of int: cols_v  = index_set_2of2(edges_v);
    set of int: rows_h  = index_set_1of2(edges_h);
    set of int: cols_h  = index_set_2of2(edges_h);
    int: max_steps      = max(card(rows_g), card(cols_g));

    % For step k (1-indexed), the node is at (r + k*dr, c + k*dc)
    % Its contribution to the arm sum is grid[rk,ck] iff all nodes
    % at steps 1..(k-1) are NOT turns (i.e., this node is reachable
    % before encountering a turn), AND this node is in bounds.
    % We include the turn node itself in the sum.
} in (
    sum(k in 1..max_steps )(
        let {
            int: rk = r + k * dr;
            int: ck = c + k * dc;
        } in
        if rk in rows_g /\ ck in cols_g then
            % node is reachable if all previous nodes were not turns
            let {
                var bool: reachable = (k = 1) \/ forall(m in 1..k-1)(
                    let { int: rm = r + m*dr; int: cm = c + m*dc; } in
                    not path_is_turn_p(rm, cm, edges_h, edges_v)
                );
            } in
            % contribute grid value if reachable (whether or not this is the turn)
            % but only up to and including the first turn
            bool2int(reachable) * grid[rk, ck]
        else
            0
        endif
    )
);

predicate balanced_loop_segment_sum_p(
    tuple(int, int): coord,
    array[int, int] of var int: grid,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
    var int: sum_var
) = let {
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);

    int: r = coord.1; int: c = coord.2;

    % Active edges at this node
    var bool: has_left  = (in_bounds_2d(r, c-1, edges_h) /\ edges_h[r, c-1]);  % edge to the left
    var bool: has_right = (in_bounds_2d(r, c, edges_h)  /\ edges_h[r, c]);    % edge to the right
    var bool: has_up    = (in_bounds_2d(r-1, c, edges_v) /\ edges_v[r-1, c]);  % edge upward
    var bool: has_down  = (in_bounds_2d(r, c, edges_v)  /\ edges_v[r, c]);    % edge downward
} in (
    % coord is a loop node and 
    % The two loop segments extending from both sides of coord must be balanced ie the sum of the digits (of grid) up to and including the digit in the cell containing the first turn must be the same.
    % we don't know the path the loop takes through the cell, it could be vertical, horizontal, or it could form a corner at the coord, so we need to consider all the options
    % straight horizontal: arms go left and right
    (has_left /\ has_right /\ not has_up /\ not has_down /\
        arm_sum_f(r, c, 0, -1, grid, edges_h, edges_v) = sum_var
        /\
        arm_sum_f(r, c, 0,  1, grid, edges_h, edges_v) = sum_var
    )
    \/ 
    % straight vertical: arms go up and down
    (has_up /\ has_down /\ not has_left /\ not has_right /\
        arm_sum_f(r, c, -1, 0, grid, edges_h, edges_v) = sum_var
        /\
        arm_sum_f(r, c,  1, 0, grid, edges_h, edges_v) = sum_var
    )
    \/ 
    % corner up-right: arms go up and right
    (has_up /\ has_right /\ not has_left /\ not has_down /\
        arm_sum_f(r, c, -1, 0, grid, edges_h, edges_v) = sum_var
        /\
        arm_sum_f(r, c,  0, 1, grid, edges_h, edges_v) = sum_var
    )
    \/
    % corner up-left: arms go up and left
    (has_up /\ has_left /\ not has_right /\ not has_down /\
        arm_sum_f(r, c, -1,  0, grid, edges_h, edges_v) = sum_var
        /\ 
        arm_sum_f(r, c,  0, -1, grid, edges_h, edges_v) = sum_var
    )
    \/
    % corner down-right: arms go down and right
    (has_down /\ has_right /\ not has_left /\ not has_up /\
        arm_sum_f(r, c, 1, 0, grid, edges_h, edges_v) = sum_var
        /\
        arm_sum_f(r, c, 0, 1, grid, edges_h, edges_v) = sum_var
    )
    \/
    % corner down-left: arms go down and left
    (has_down /\ has_left /\ not has_right /\ not has_up /\
      arm_sum_f(r, c,  1,  0, grid, edges_h, edges_v) = sum_var
      /\
      arm_sum_f(r, c,  0, -1, grid, edges_h, edges_v) = sum_var
    )
);

predicate balanced_loop_segment_sum_2_p(
    tuple(int, int): coord,
    array[int, int] of var int: grid,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: rows_v = index_set_1of2(edges_v);
    set of int: cols_v = index_set_2of2(edges_v);
    set of int: rows_h = index_set_1of2(edges_h);
    set of int: cols_h = index_set_2of2(edges_h);

    int: r = coord.1; int: c = coord.2;

    % Active edges at this node
    var bool: has_left  = (in_bounds_2d(r, c-1, edges_h) /\ edges_h[r, c-1]);  % edge to the left
    var bool: has_right = (in_bounds_2d(r, c, edges_h)  /\ edges_h[r, c]);    % edge to the right
    var bool: has_up    = (in_bounds_2d(r-1, c, edges_v) /\ edges_v[r-1, c]);  % edge upward
    var bool: has_down  = (in_bounds_2d(r, c, edges_v)  /\ edges_v[r, c]);    % edge downward
} in (
    % coord is a loop node and 
    % The two loop segments extending from both sides of coord must be balanced ie the sum of the digits (of grid) up to and including the digit in the cell containing the first turn must be the same.
    % we don't know the path the loop takes through the cell, it could be vertical, horizontal, or it could form a corner at the coord, so we need to consider all the options
    % straight horizontal: arms go left and right
    (has_left /\ has_right /\ not has_up /\ not has_down /\
        arm_sum_f(r, c, 0, -1, grid, edges_h, edges_v) = 
        arm_sum_f(r, c, 0,  1, grid, edges_h, edges_v)
    )
    \/ 
    % straight vertical: arms go up and down
    (has_up /\ has_down /\ not has_left /\ not has_right /\
        arm_sum_f(r, c, -1, 0, grid, edges_h, edges_v) = 
        arm_sum_f(r, c,  1, 0, grid, edges_h, edges_v)
    )
    \/ 
    % corner up-right: arms go up and right
    (has_up /\ has_right /\ not has_left /\ not has_down /\
        arm_sum_f(r, c, -1, 0, grid, edges_h, edges_v) = 
        arm_sum_f(r, c,  0, 1, grid, edges_h, edges_v)
    )
    \/
    % corner up-left: arms go up and left
    (has_up /\ has_left /\ not has_right /\ not has_down /\
        arm_sum_f(r, c, -1,  0, grid, edges_h, edges_v) = 
        arm_sum_f(r, c,  0, -1, grid, edges_h, edges_v) 
    )
    \/
    % corner down-right: arms go down and right
    (has_down /\ has_right /\ not has_left /\ not has_up /\
        arm_sum_f(r, c, 1, 0, grid, edges_h, edges_v) = 
        arm_sum_f(r, c, 0, 1, grid, edges_h, edges_v)
    )
    \/
    % corner down-left: arms go down and left
    (has_down /\ has_left /\ not has_right /\ not has_up /\
      arm_sum_f(r, c,  1,  0, grid, edges_h, edges_v) = 
      arm_sum_f(r, c,  0, -1, grid, edges_h, edges_v)
    )
);

% -------------------------------------------------------------------------------- % 
% ------ SNAKE CONSTRAINTS ------------------------------------------------------- %

predicate snake_edges_p(
    array[int, int] of var bool: snake_nodes,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: rows = index_set_1of2(snake_nodes);
    set of int: cols = index_set_1of2(snake_nodes);
    array[rows, cols] of var int: node_degree = array2d(
        rows,
        cols,
        [grid_graph_degree_f(edges_h, edges_v, r, c) | r in rows, c in cols]
    );
} in (
    % For every node: if false -> all incident edges false
    %                 if true  -> exactly 2 incident edges true (loop condition)
    forall(r in rows, c in cols)(
        if snake_nodes[r,c] then 
            node_degree[r, c] = 2 \/ node_degree[r,c] = 1
        else
            node_degree[r, c] = 0
        endif
    )
    % only 2 endpoints
    /\ count(array1d(node_degree), 1) = 2
);

predicate snake_no_orthogonal_touching_p(
    array[int, int] of var bool: snake_nodes
) = let {
    set of int: rows = index_set_1of2(snake_nodes);
    set of int: cols = index_set_2of2(snake_nodes);
} in (
    forall(i in rows, j in cols)(
        let {
            array[int] of tuple(int, int): idxs = orth_adjacent_idxs_in_bounds(i, j, snake_nodes);
        } in (
            (not snake_nodes[i,j]) \/ 
            (snake_nodes[i,j] /\ sum(b in idxs)(bool2int(snake_nodes[b.1, b.2])) <= 2)
        )
    )
);

predicate count_snake_cells_p(
    var int: cell_var,
    array[int] of var bool: snake_vars
) = (
    sum(snake_vars) = cell_var
);

predicate path_same_segment_sum_in_region_p(
    array[int] of tuple(int,int): coords, % coords in the same region
    array[int] of var int: values, % grid values
    array[int, int] of var bool: nodes,
    array[int, int] of var bool: edges_h,
    array[int, int] of var bool: edges_v,
) = let {
    set of int: idxs = index_set(coords);
    int: n = length(idxs);
    set of int: rows = index_set_1of2(nodes);
    set of int: cols = index_set_2of2(nodes);

    var int: sum_var;
    array[idxs] of var 0..n: labels;
} in (
    assert(index_sets_agree(coords, values), "coords and values must have the same indexes.")
    /\
    % has at least 2 segments
    exists(i in idxs)(labels[i] == 1) /\ exists(i in idxs)(labels[i] == 2)
    /\
    % Requires that i precedes i+1 in the array x for all positive i 
    % (to avoid permutating label values)
    seq_precede_chain(labels)
    /\
    % non-path cells labeled with 0, path cells not 0
    forall(i in idxs)(
        let {
            tuple(int, int): n1 = coords[i];
            int: r1 = n1.1; int: c1 = n1.2;
        } in (
            (not nodes[r1,c1] /\ labels[i] = 0)
            \/
            (nodes[r1,c1] /\ labels[i] != 0)
        )
    )
    /\
    % if two cells are adjacent they have the same label
    forall(i in idxs, j in idxs where j != i)(
        let {
            tuple(int, int): n1 = coords[i];
            tuple(int, int): n2 = coords[j];
            int: r1 = n1.1; int: c1 = n1.2;
            int: r2 = n2.1; int: c2 = n2.2;
            var bool: v_adj = (vert_adjacent_2d(r1, c1, r2, c2) /\ r1 < r2 /\ edges_v[r1,c1]);
            var bool: h_adj = (horiz_adjacent_2d(r1, c1, r2, c2) /\ c1 < c2 /\ edges_h[r1,c1]);
        } in (
            (v_adj \/ h_adj) -> labels[i] == labels[j]
        )
    )
    % segment sum
    /\ forall(i in 1..n) (
        exists([labels[j] = i | j in idxs]) ->
            sum_var = conditional_sum_f(values, labels, i)
    )
);

