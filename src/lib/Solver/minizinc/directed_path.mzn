% -------------------------------------------------------------------------------- % 
% ------ DIRECTED PATH ----------------------------------------------------------- %

function var int: dpath_out_degree_f(
    int: i, int: j,
    array[int, int] of var bool: edges_l,
    array[int, int] of var bool: edges_r,
    array[int, int] of var bool: edges_u,
    array[int, int] of var bool: edges_d,
    array[int, int] of var bool: edges_ul,
    array[int, int] of var bool: edges_ur,
    array[int, int] of var bool: edges_dl,
    array[int, int] of var bool: edges_dr,
) = let {
    var 0..1: has_left = bool2int(if  in_bounds_2d(i,   j-1, edges_l) then edges_l[i, j-1] else false endif);
    var 0..1: has_right = bool2int(if in_bounds_2d(i,   j,   edges_r) then edges_r[i, j] else false endif);
    var 0..1: has_up = bool2int(if    in_bounds_2d(i-1, j,   edges_u) then edges_u[i-1, j] else false endif);
    var 0..1: has_down = bool2int(if  in_bounds_2d(i,   j,   edges_d) then edges_d[i, j] else false endif);
    var 0..1: has_ul = bool2int(if    in_bounds_2d(i-1, j-1, edges_ul) then edges_ul[i-1, j-1] else false endif);
    var 0..1: has_ur = bool2int(if    in_bounds_2d(i-1, j,   edges_ur) then edges_ur[i-1, j] else false endif);
    var 0..1: has_dl = bool2int(if    in_bounds_2d(i,   j-1, edges_dl) then edges_dl[i, j-1] else false endif);
    var 0..1: has_dr = bool2int(if    in_bounds_2d(i,   j,   edges_dr) then edges_dr[i, j] else false endif);
} in (
    has_left + has_right + has_up + has_down + has_ul + has_ur + has_dl + has_dr
);

function var int: dpath_in_degree_f(
    int: i, int: j,
    array[int, int] of var bool: edges_l,
    array[int, int] of var bool: edges_r,
    array[int, int] of var bool: edges_u,
    array[int, int] of var bool: edges_d,
    array[int, int] of var bool: edges_ul,
    array[int, int] of var bool: edges_ur,
    array[int, int] of var bool: edges_dl,
    array[int, int] of var bool: edges_dr,
) = let {
    var 0..1: from_left = bool2int(if  in_bounds_2d(i,   j-1, edges_r) then  edges_r[i, j-1] else false endif);
    var 0..1: from_right = bool2int(if in_bounds_2d(i,   j,   edges_l) then  edges_l[i, j] else false endif);
    var 0..1: from_up = bool2int(if    in_bounds_2d(i-1, j,   edges_d) then  edges_d[i-1, j] else false endif);
    var 0..1: from_down = bool2int(if  in_bounds_2d(i,   j,   edges_u) then  edges_u[i, j] else false endif);
    var 0..1: from_ul = bool2int(if    in_bounds_2d(i-1, j-1, edges_dr) then edges_dr[i-1, j-1] else false endif);
    var 0..1: from_ur = bool2int(if    in_bounds_2d(i-1, j,   edges_dl) then edges_dl[i-1, j] else false endif);
    var 0..1: from_dl = bool2int(if    in_bounds_2d(i,   j-1, edges_ur) then edges_dl[i, j-1] else false endif);
    var 0..1: from_dr = bool2int(if    in_bounds_2d(i,   j,   edges_ul) then edges_ul[i, j] else false endif);
} in (
    from_left + from_right + from_up + from_down + from_ul + from_ur + from_dl + from_dr
);

function array[int] of int: directed_path_from_all_f(
    array[int, int] of var bool: nodes,
    array[int, int] of var bool: edges_l,
    array[int, int] of var bool: edges_r,
    array[int, int] of var bool: edges_u,
    array[int, int] of var bool: edges_d,
    array[int, int] of var bool: edges_ul,
    array[int, int] of var bool: edges_ur,
    array[int, int] of var bool: edges_dl,
    array[int, int] of var bool: edges_dr,
) = let { 
    set of int: rows = index_set_1of2(nodes);
    set of int: cols = index_set_2of2(nodes);
    int: N = card(rows) * card(cols);
    % --- Flat from/to arrays for all directed edge types ---

    int: min_rows = min(rows);
    int: max_rows = max(rows);
    int: min_cols = min(cols);
    int: max_cols = max(cols);
    % --- Flat from/to arrays for all directed edge types ---

    set of int: lr_cols = min_cols..max_cols-1;
    set of int: ud_rows = min_rows..max_rows-1;
    set of int: diag_cols = min_cols+1..max_cols;

    % Leftward: (i,j+1) -> (i,j)
    array[int] of int: from_l = [coords_to_id_f(i, j+1, nodes) | i in rows,   j in lr_cols];

    % Rightward: (i,j) -> (i,j+1)
    array[int] of int: from_r = [coords_to_id_f(i, j, nodes)   | i in rows,   j in lr_cols];

    % Upward: (i+1,j) -> (i,j)
    array[int] of int: from_u = [coords_to_id_f(i+1, j, nodes) | i in ud_rows, j in cols];

    % Downward: (i,j) -> (i+1,j)
    array[int] of int: from_d = [coords_to_id_f(i, j, nodes)   | i in ud_rows, j in cols];

    % Diagonal up-left: (i+1,j+1) -> (i,j)
    array[int] of int: from_ul = [coords_to_id_f(i+1, j+1, nodes) | i in ud_rows, j in lr_cols];

    % Diagonal up-right: (i+1,j-1) -> (i,j), same index space as dl
    array[int] of int: from_ur = [coords_to_id_f(i+1, j-1, nodes) | i in ud_rows, j in diag_cols];

    % Diagonal down-left: (i,j) -> (i+1,j-1), indexed by top node (i,j), j in 2..cols
    array[int] of int: from_dl = [coords_to_id_f(i, j, nodes)     | i in ud_rows, j in diag_cols];

    % Diagonal down-right: (i,j) -> (i+1,j+1)
    array[int] of int: from_dr = [coords_to_id_f(i, j, nodes)     | i in ud_rows, j in lr_cols];

    % Shortcuts (both directions)
    % array[int] of int: from_sc_fwd = sc_from;
    % array[int] of int: to_sc_fwd   = sc_to;
    % array[int] of int: from_sc_bwd = sc_to;
    % array[int] of int: to_sc_bwd   = sc_from;

    % --- Concatenate everything ---
    array[int] of int: from_all = array1d(
        from_r ++ from_l ++ from_d ++ from_u ++
        from_dr ++ from_ul ++ from_dl ++ from_ur
    );
        %++ from_sc_fwd ++ from_sc_bwd;
} in (from_all);

function array[int] of int: directed_path_to_all_f(
    array[int, int] of var bool: nodes,
    array[int, int] of var bool: edges_l,
    array[int, int] of var bool: edges_r,
    array[int, int] of var bool: edges_u,
    array[int, int] of var bool: edges_d,
    array[int, int] of var bool: edges_ul,
    array[int, int] of var bool: edges_ur,
    array[int, int] of var bool: edges_dl,
    array[int, int] of var bool: edges_dr,
) = let { 
    set of int: rows = index_set_1of2(nodes);
    set of int: cols = index_set_2of2(nodes);
    int: N = card(rows) * card(cols);
    % --- Flat from/to arrays for all directed edge types ---

    int: min_rows = min(rows);
    int: max_rows = max(rows);
    int: min_cols = min(cols);
    int: max_cols = max(cols);
    % --- Flat from/to arrays for all directed edge types ---

    set of int: lr_cols = min_cols..max_cols-1;
    set of int: ud_rows = min_rows..max_rows-1;
    set of int: diag_cols = min_cols+1..max_cols;

    % Leftward: (i,j+1) -> (i,j)
    array[int] of int: to_l   = [coords_to_id_f(i, j, nodes)   | i in rows,   j in lr_cols];

    % Rightward: (i,j) -> (i,j+1)
    array[int] of int: to_r   = [coords_to_id_f(i, j+1, nodes) | i in rows,   j in lr_cols];

    % Upward: (i+1,j) -> (i,j)
    array[int] of int: to_u   = [coords_to_id_f(i, j, nodes)   | i in ud_rows, j in cols];

    % Downward: (i,j) -> (i+1,j)
    array[int] of int: to_d   = [coords_to_id_f(i+1, j, nodes) | i in ud_rows, j in cols];

    % Diagonal up-left: (i+1,j+1) -> (i,j)
    array[int] of int: to_ul   = [coords_to_id_f(i, j, nodes)     | i in ud_rows, j in lr_cols];

    % Diagonal up-right: (i+1,j-1) -> (i,j), same index space as dl
    array[int] of int: to_ur   = [coords_to_id_f(i, j, nodes)     | i in ud_rows, j in diag_cols];

    % Diagonal down-left: (i,j) -> (i+1,j-1), indexed by top node (i,j), j in 2..cols
    array[int] of int: to_dl   = [coords_to_id_f(i+1, j-1, nodes) | i in ud_rows, j in diag_cols];

    % Diagonal down-right: (i,j) -> (i+1,j+1)
    array[int] of int: to_dr   = [coords_to_id_f(i+1, j+1, nodes) | i in ud_rows, j in lr_cols];

    % Shortcuts (both directions)
    % array[int] of int: from_sc_fwd = sc_from;
    % array[int] of int: to_sc_fwd   = sc_to;
    % array[int] of int: from_sc_bwd = sc_to;
    % array[int] of int: to_sc_bwd   = sc_from;

    % --- Concatenate everything ---
    array[int] of int: to_all = array1d(
        to_r ++ to_l ++ to_d ++ to_u ++
        to_dr ++ to_ul ++ to_dl ++ to_ur
    );
        %++ to_sc_fwd ++ to_sc_bwd;
} in (to_all);

function array[int] of var bool: directed_path_edges_f(
    array[int, int] of var bool: nodes,
    array[int, int] of var bool: edges_l,
    array[int, int] of var bool: edges_r,
    array[int, int] of var bool: edges_u,
    array[int, int] of var bool: edges_d,
    array[int, int] of var bool: edges_ul,
    array[int, int] of var bool: edges_ur,
    array[int, int] of var bool: edges_dl,
    array[int, int] of var bool: edges_dr,
    % array[int] of var bool: edges_sc_fwd,
    % array[int] of var bool: edges_sc_bwd,
) = let {
    set of int: rows = index_set_1of2(nodes);
    set of int: cols = index_set_2of2(nodes);
    int: N = card(rows) * card(cols);
    % --- Flat from/to arrays for all directed edge types ---

    int: min_rows = min(rows);
    int: max_rows = max(rows);
    int: min_cols = min(cols);
    int: max_cols = max(cols);
    % --- Flat from/to arrays for all directed edge types ---

    array[int] of var bool: es = array1d(
        [edges_r[i,j] | i in index_set_1of2(edges_r), j in index_set_2of2(edges_r)]  ++
        [edges_l[i,j] | i in index_set_1of2(edges_l), j in index_set_2of2(edges_l)]  ++
        [edges_d[i,j] | i in index_set_1of2(edges_d), j in index_set_2of2(edges_d)]  ++
        [edges_u[i,j] | i in index_set_1of2(edges_u), j in index_set_2of2(edges_u)]  ++
        [edges_dr[i,j] | i in index_set_1of2(edges_dr), j in index_set_2of2(edges_dr)] ++
        [edges_ul[i,j] | i in index_set_1of2(edges_ul), j in index_set_2of2(edges_ul)] ++
        [edges_dl[i,j] | i in index_set_1of2(edges_dl), j in index_set_2of2(edges_dl)] ++
        [edges_ur[i,j] | i in index_set_1of2(edges_ur), j in index_set_2of2(edges_ur)]
    );
        % [edges_sc_fwd[k] | k in 1..num_shortcuts]         ++
        % [edges_sc_bwd[k] | k in 1..num_shortcuts];
} in (es);

function array[int] of var bool: directed_path_nodes_f(
    array[int, int] of var bool: nodes,
) = let {
    array[int] of var bool: ns = array1d(nodes);
} in (ns);

predicate directed_path_p(
    var int: dpath_source,
    var int: dpath_target,
    array[int] of int: from_all,
    array[int] of int: to_all,
    array[int] of var bool: ns,
    array[int] of var bool: es,
) = let {
    % int: source_n = coords_to_id_f(source_r, source_c, nodes);
    % int: target_n = coords_to_id_f(target_r, target_c, nodes);
    
} in (
    assert(index_sets_agree(from_all, to_all), "from_all and to_all must have the same indexes") /\
    assert(index_sets_agree(from_all, es), "from_all (\(index_set(from_all))) and es (\(index_set(es))) must have the same indexes") /\
    dpath(from_all, to_all, dpath_source, dpath_target, ns, es)
);

predicate direct_path_adjacent_sum_is_prime(
    array[int, int] of var int: grid,
    array[int] of int: from,
    array[int] of int: to,
    array[int] of var bool: es
) = let {
    set of int: e_idxs = index_set(es);
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_cols = length(cols);
} in (
    forall(k in e_idxs)(
        es[k] -> let {
            int: n1 = from[k];
            int: n2 = to[k];
            tuple(var int, var int): t1 = id_to_coords_f(n1, grid);
            tuple(var int, var int): t2 = id_to_coords_f(n2, grid);
            var int: sum_var;
        } in (
            sum_var = grid[t1.1,t1.2] + grid[t2.1,t2.2] /\
            is_prime_p(sum_var)
        )
    )
);

predicate directed_path_sum_path_cells_in_region_is_prime_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
    array[int] of var bool: ns,
    set of int: region_vals
) = let {
    array[int] of var int: regions_1d = array1d(regions);
    set of int: idxs = index_set(regions_1d);
} in (
   forall(reg in region_vals)(
       let {
           array[idxs] of var bool: region_bools;
           var int: sum_var;
       } in (
           forall(i in idxs)(
               region_bools[i] = (regions_1d[i] == reg /\ ns[i])
           ) 
           /\ sum_var = conditional_sum_f(array1d(grid), region_bools, true)
           /\ is_prime_p(sum_var)
       )
   )
);

predicate directed_path_is_region_sum_line_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions, % sudoku regions
    array[int] of int: from,
    array[int] of int: to,
    array[int] of var bool: ns,
    array[int] of var bool: es,
    var int: source
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_cols = length(cols);
    int: n_rows = length(rows);
    array[rows, cols] of var 0..(n_cols*n_rows): rsl_labels; % region sum lines labels

    set of int: e_idxs = index_set(es);
    set of int: n_idxs = index_set(ns);
    tuple(var int, var int): tsource = id_to_coords_f(source, grid);
    var int: sum_var;
} in (
    rsl_labels[tsource.1, tsource.2] = 1
    % set region sum line labels for nodes not in the path
    /\ forall(k in n_idxs)(
        not ns[k] -> let {
            tuple(var int, var int): t1 = id_to_coords_f(k, grid);
        } in (rsl_labels[t1.1, t1.2] = 0)
    )
    % set region sum line labels for nodes connected by an edge
    /\ forall(k in e_idxs)(
        es[k] -> let {
            int: n1 = from[k];
            int: n2 = to[k];
            tuple(var int, var int): t1 = id_to_coords_f(n1, grid);
            tuple(var int, var int): t2 = id_to_coords_f(n2, grid);
        } in (
            % two connected cells in the same region belong to the same region sum line segment
            (regions[t1.1, t1.2] == regions[t2.1, t2.2] -> rsl_labels[t1.1, t1.2] == rsl_labels[t2.1, t2.2]) 
            /\
            % two connected cells in different regions: the target cell (n2) is in the next region sum line segment
            (regions[t1.1, t1.2] != regions[t2.1, t2.2] -> rsl_labels[t2.1, t2.2] == rsl_labels[t1.1, t1.2] + 1)
        )
    )
    % region sum line
    /\ forall(label in 1..n_cols*n_rows)(
        exists(r in rows, c in cols)(rsl_labels[r,c]==label) ->
            sum_var = conditional_sum_f(array1d(grid), array1d(rsl_labels), label)
    )
);

predicate direct_path_adjacent_dutch_whispers(
    array[int, int] of var int: grid,
    array[int] of int: from,
    array[int] of int: to,
    array[int] of var bool: es
) = let {
    set of int: e_idxs = index_set(es);
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_cols = length(cols);
} in (
    forall(k in e_idxs)(
        es[k] -> let {
            int: n1 = from[k];
            int: n2 = to[k];
            int: r1 = (n1 - 1) div n_cols;
            int: c1 = (n1 - 1) mod n_cols;
            int: r2 = (n2 - 1) div n_cols;
            int: c2 = (n2 - 1) mod n_cols;
        } in (
            abs(grid[r1,c1] - grid[r2,c2]) >= 4
        )
    )
);

predicate directed_path_teleport_segments_p(
    array[int, int] of var int: regions,
    array[int, int] of var int: teleports,
    array[int] of int: from,
    array[int] of int: to,
    array[int] of var bool: ns,
    array[int] of var bool: es,
    var int: source
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: n_cols = length(cols);
    int: n_rows = length(rows);
    set of int: n_idxs = index_set(ns);
    set of int: e_idxs = index_set(es);
    tuple(var int, var int): tsource = id_to_coords_f(source, regions);
} in (
    regions[tsource.1, tsource.2] = 1
    % set region labels for nodes not in the path
    /\ forall(k in n_idxs)(
        not ns[k] -> let {
            tuple(var int, var int): t1 = id_to_coords_f(k, regions);
        } in (regions[t1.1, t1.2] = 0)
    )
    % set region labels for nodes connected by an edge
    /\ forall(k in e_idxs)(
        es[k] -> let {
            int: n1 = from[k];
            int: n2 = to[k];
            tuple(var int, var int): t1 = id_to_coords_f(n1, regions);
            tuple(var int, var int): t2 = id_to_coords_f(n2, regions);
            var bool: is_tp = teleports[t1.1, t1.2] != 0 /\ teleports[t2.1, t2.2] != 0 /\ teleports[t1.1, t1.2] = teleports[t2.1, t2.2]
        } in (
            (not is_tp -> regions[t1.1, t1.2] == regions[t2.1, t2.2]) /\
            (is_tp -> regions[t2.1, t2.2] == regions[t1.1, t1.2] + 1)
        )
    )
);

predicate directed_path_teleport_segments_sum_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: teleports,    
    array[int] of int: from,
    array[int] of int: to,
    array[int] of var bool: ns,
    array[int] of var bool: es,
    var int: source
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_cols = length(cols);
    int: n_rows = length(rows);
    array[rows, cols] of var 0..(n_cols*n_rows): rsl_labels; % region sum lines labels
    var int: sum_var;
} in (
    directed_path_teleport_segments_p(rsl_labels, teleports, from, to, ns, es, source)
    % region sum line
    /\ forall(label in 1..2)(
        sum_var = conditional_sum_f(array1d(grid), array1d(rsl_labels), label)
    )
    % /\ forall(label in 1..n_cols*n_rows)(
    %     exists(r in rows, c in cols)(rsl_labels[r,c]==label) ->
    %         sum_var = conditional_sum_f(array1d(grid), array1d(rsl_labels), label)
    % )
);

predicate directed_path_teleport_renban_segments_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: teleports,
    array[int] of int: from,
    array[int] of int: to,
    array[int] of var bool: ns,
    array[int] of var bool: es,
    var int: source,
    int: max_reg_size
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_cols = length(cols);
    int: n_rows = length(rows);
    int: g_size = n_rows * n_cols;
    array[rows, cols] of var 0..(n_cols*n_rows): region_labels;

    tuple(var int, var int): tsource = id_to_coords_f(source, grid);
    set of int: ids = 1..g_size;
    array[ids] of var 0..max_reg_size: sizes;
} in (
    directed_path_teleport_segments_p(region_labels, teleports, from, to, ns, es, source)
    /\ forall (id in ids) (
        sizes[id] = sum (r in rows, c in cols) (region_labels[r, c] = id)
    )
    % renban line
    /\ forall(r in rows, c in cols)(
        forall(r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
            let {
                var int: id1 = region_labels[r, c];
                var int: id2 = region_labels[r2, c2];
            } in
            id1 != 0 /\ id2 != 0 /\ id1 == id2 -> grid[r,c] != grid[r2, c2] /\ abs(grid[r,c] - grid[r2, c2]) <= sizes[id1] - 1
        )
    )
);

predicate directed_path_is_parity_line_p(
    array[int, int] of var int: grid,
    array[int] of int: from,
    array[int] of int: to,
    array[int] of var bool: es
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_cols = length(cols);
    int: n_rows = length(rows);
    int: g_size = n_rows * n_cols;
    set of int: idxs = index_set(from);
    array[int] of var int: grid1d = array1d(grid);
} in (
    forall(i in idxs)(
        let {
            int: n1 = from[i];
            int: n2 = to[i];
            var bool: in_edge = es[i];
            var int: cell1 = grid1d[n1];
            var int: cell2 = grid1d[n2];
        } in (
            in_edge -> different_parity_p(cell1, cell2)
        )
    )
);

