var jw=Object.defineProperty;var Kw=(t,e,n)=>e in t?jw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>Kw(t,typeof e!="symbol"?e+"":e,n);import{c as zu,o as Vw,p as Xw,q as fd,s as De,a as N,t as ce,d as Ce,u as J,v as qw,m as Zw}from"./disclose-version.BMjGnY8r.js";import{i as fe}from"./legacy.CBYIjwbu.js";import{l as Vh,h as ln,k as Is,y as Xh,v as ps,R as Qw,V as Jw,U as ey,g as Hu,i as qh,K as Zh,a0 as ty,j as ny,u as Qg,B as ry,aJ as gd,z as iy,x as oy,a2 as hd,ar as Qh,A as Jg,aK as sy,a3 as ay,a8 as ly,m as cy,c as K,r as H,s as $,t as ee,p as ae,aL as D,aM as ye,a as le,Z as _,av as X,_ as O,$ as L,f as ne,aC as di,aN as Wu,al as dt,aO as Cu,ak as eh}from"./utils.Bp9j5Uj0.js";import{i as Q,s as Xe,a as pe,b as fo,m as Jh}from"./store.D4OU4dvo.js";import{s as Wr,u as uy,a as dy,b as _y,c as fy,e as gy,f as hy,g as vy,h as py,t as my}from"./global.Bod0hR-p.js";import{e as Qe,i as mt}from"./each.BoOPhUgK.js";import{i as Ey,p as M}from"./props.DtgsZciY.js";import{w as Rt,g as xe,d as Fn}from"./index.DYJKv3QC.js";import{b as Ti,c as ev}from"./this.DLpfsf4C.js";import{s as ct}from"./render.BDhmuNhf.js";import{r as En,s as x,a as Cy,c as by,b as Iy,d as tv}from"./attributes.BQB_fdHO.js";import{a as wy,o as nv}from"./index-client.BnGHJMPg.js";import{b as th}from"./paths.D_MdcDXu.js";function yy(t,e,n,r,i){var o=t,a="",l;Vh(()=>{if(a===(a=e()??"")){ln&&Is();return}l!==void 0&&(Zh(l),l=void 0),a!==""&&(l=Xh(()=>{if(ln){ps.data;for(var u=Is(),d=u;u!==null&&(u.nodeType!==8||u.data!=="");)d=u,u=Qw(u);if(u===null)throw Jw(),ey;zu(ps,d),o=Hu(u);return}var g=a+"",h=Vw(g);zu(qh(h),h.lastChild),o.before(h)}))})}function Et(t,e,n,r,i){var l;ln&&Is();var o=(l=e.$$slots)==null?void 0:l[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function rv(t,e,n,r,i,o){let a=ln;ln&&Is();var l,u,d=null;ln&&ps.nodeType===1&&(d=ps,Is());var g=ln?ps:t,h;Vh(()=>{const v=e()||null;var m=v==="svg"?gd:null;v!==l&&(h&&(v===null?iy(h,()=>{h=null,u=null}):v===u?oy(h):Zh(h)),v&&v!==u&&(h=Xh(()=>{if(d=ln?d:m?document.createElementNS(m,v):document.createElement(v),zu(d,d),r){ln&&Xw(v)&&d.append(document.createComment(""));var E=ln?qh(d):d.appendChild(ny());ln&&(E===null?Qg(!1):Hu(E)),r(d,E)}ry.nodes_end=d,g.before(d)})),l=v,l&&(u=l))},ty),a&&(Qg(!0),Hu(g))}function Os(t,e,n){var r=t.__className,i=iv(e);ln&&t.getAttribute("class")===i?t.__className=i:(r!==i||ln&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function Oy(t,e,n){var r=t.__className,i=iv(e);ln&&t.className===i?t.__className=i:(r!==i||ln&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function iv(t,e){return(t??"")+""}function Ot(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function er(t,e,n=e){var r=sy();fd(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=Iu(t)?wu(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(l,t.value.length))}}),(ln&&t.defaultValue!==t.value||ay(e)==null&&t.value)&&n(Iu(t)?wu(t.value):t.value),hd(()=>{var i=e();Iu(t)&&i===wu(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const bu=new Set;function vd(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let l=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),fd(n,"change",()=>{var d=n.__value;o&&(d=nh(a,d,n.checked)),i(d)},()=>i(o?[]:null)),hd(()=>{var d=r();if(ln&&n.defaultChecked!==n.checked){l=!0;return}o?(d=d||[],n.checked=d.includes(n.__value)):n.checked=Ey(n.__value,d)}),Qh(()=>{var d=a.indexOf(n);d!==-1&&a.splice(d,1)}),bu.has(a)||(bu.add(a),Jg(()=>{a.sort((d,g)=>d.compareDocumentPosition(g)===4?-1:1),bu.delete(a)})),Jg(()=>{if(l){var d;if(o)d=nh(a,d,n.checked);else{var g=a.find(h=>h.checked);d=g==null?void 0:g.__value}i(d)}})}function nh(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Iu(t){var e=t.type;return e==="number"||e==="range"}function wu(t){return t===""?null:+t}function Ay(t,e,n=e){fd(t,"change",()=>{n(t.files)}),hd(()=>{t.files=e()})}function it(t,e,n){var r=ly(t,e);r&&r.set&&(t[e]=n,Qh(()=>{t[e]=null}))}function xy(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Un(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function io(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Ly(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=cy(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var Ui=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Ui||{}),pd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(pd||{}),ov=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.HEXED_SUDOKU="Hexed Sudoku",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t))(ov||{}),md=(t=>(t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.PARITY_MIRROR_POSITIVE_DIAGONAL="Parity Mirror Positive Diagonal",t.PARITY_MIRROR_NEGATIVE_DIAGONAL="Parity Mirror Negative Diagonal",t))(md||{}),sv=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(sv||{}),av=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.INDEXER_CELLS="Indexer Cells",t))(av||{}),lv=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.NEXUS="Nexus",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.FILLOMINO="Fillomino",t.LITS="LITS",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(lv||{}),cv=(t=>(t.PENTOMINO_TILLING="Pentomino Tilling",t.PENTOMINO_TILLING_NO_EMPTY_CELLS="Pentomino Tilling No Empty Cells",t))(cv||{}),uv=(t=>(t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t))(uv||{}),dv=(t=>(t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t))(dv||{}),_v=(t=>(t.NURIMISAKI="Nurimisaki",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t))(_v||{}),fv=(t=>(t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION="Ying Yang Identical Digits Diagonally Belong To Same The Region",t))(fv||{}),gv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(gv||{}),hv=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(hv||{}),vv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.CAVE_WALL_SUGURU="Cave Wall Suguru",t.CAVE_CELLS_FILLOMINO="Cave Cells Fillomino",t))(vv||{}),pv=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(pv||{}),mv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(mv||{}),Cl=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.YIN_YANG_LABELED_SHADE_CELL="Yin Yang Labeled Shade Cell",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE="Cave Shaded Region Size Unshaded Seen Orthogonally Clue",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Cl||{}),Ed=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Ed||{}),Cd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Cells Not In The Same Region Arrows",t.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Seen Cells In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(Cd||{}),bd=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.COMBINED_EDGE_CONSTRAINT="Combined Edge Constraint",t))(bd||{}),Id=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Id||{}),wd=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(wd||{}),yd=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(yd||{}),Od=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Od||{}),Ad=(t=>(t.CLONE_REGION="Clone Region",t))(Ad||{}),xd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.CHAOS_CONSTRUCTION_X_INDEX_REGION="Chaos Construction X-Index Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(xd||{}),Ld=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Ld||{}),Nd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Nd||{}),Sd=(t=>(t.MAZE_WALL="Maze Wall",t))(Sd||{}),Dd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Dd||{}),Rd=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Rd||{}),Ev=(t=>(t.FOG_LIGHTS="Fog Lights",t.CUSTOM_FOG_CLEARING="Custom Fog Clearing",t.FOG_CLEARING_ITSELF="Fog Clearing Itself",t.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS="Fog Clearing Orthogonal Neighbours",t.FOG_CLEARING_DIAGONAL_NEIGHBOURS="Fog Clearing Diagonal Neighbours",t.FOG_CLEARING_CONTAINING_ROW="Fog Clearing Containing Row",t.FOG_CLEARING_CONTAINING_COLUMN="Fog Clearing Containing Column",t.FOG_CLEARING_KNIGHTS_MOVE="Fog Clearing Knights Move",t))(Ev||{}),Cv=(t=>(t.PEN_TOOL="Pen Tool",t))(Cv||{});const Ny={...lv,...vv,...pv,...hv,...mv,...gv,...fv,..._v,...dv,...uv,...cv},bv={...sv,...md,...ov,...Ny,...av},Iv={...Cl,...Ed,...Cd,...bd,...Id,...wd,...yd,...Od,...Ad,...xd,...Ld,...Nd,...Sd,...Dd,...Ev},f={...pd,...bv,...Iv,...Rd,...Cv};var z=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.GLOBAL_NURIMISAKI_CONSTRAINTS="Global Nurimisaki Constraints",t.GLOBAL_NURIKABE_CONSTRAINTS="Global Nurikabe Constraints",t.GLOBAL_YIN_YANG_CONSTRAINTS="Global Yin Yang Constraints",t.GLOBAL_SHIKAKU_CONSTRAINTS="Global Shikaku Constraints",t.DIAGONAL_CONSTRAINTS="Diagonal Constraints",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.FOG_TOOL="Fog Tool",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(z||{});function Sy(t){return Object.values(md).includes(t)}function Dy(t){return Object.values(bv).includes(t)}function wv(t){return Object.values(Iv).includes(t)}function Ry(t){return Object.values(Rd).includes(t)}function Ty(t){return wv(t)||Ry(t)||Dy(t)}function bl(t){return Object.values(Cl).includes(t)||t===f.COSMETIC_CELL_CENTER_SHAPE||t===f.FOG_LIGHTS}function Gi(t){return Object.values(Ed).includes(t)||t===f.COSMETIC_CELL_ARROW}function Eo(t){return Object.values(Cd).includes(t)||t===f.COSMETIC_CELL_MULTI_ARROW}function Td(t){return bl(t)||Gi(t)||Eo(t)}function Co(t){return Object.values(bd).includes(t)||t===f.COSMETIC_EDGE}function As(t){return Object.values(Id).includes(t)||t===f.COSMETIC_CORNER}function bo(t){return Object.values(wd).includes(t)||t===f.COSMETIC_LINE||t===f.COSMETIC_LINE_WITH_POLYGON_ENDS||t===f.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Io(t){return Object.values(yd).includes(t)||t===f.COSMETIC_ARROW}function wo(t){return Object.values(Od).includes(t)||t===f.COSMETIC_CAGE}function xs(t){return Object.values(Nd).includes(t)}function yv(t){return Object.values(Sd).includes(t)}function Ls(t){return Object.values(Ad).includes(t)}function Br(t){const e=Object.values(xd),n=Object.values(Ld);return e.includes(t)||n.includes(t)||t===f.COSMETIC_OUTSIDE_DIRECTION}function ky(t){return Object.values(Dd).includes(t)}function kd(t){return Object.values(pd).includes(t)}function My(t){return Br(t)||Td(t)||bo(t)||Io(t)||wo(t)||Ls(t)}const Uy=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Gy=["Simple Global Constraint","Diagonal Constraints","Value Modifier Constraint","Undetermined Regions Constraint",...Uy,"Fog Tool","Cosmetic Tool"];function $y(t){for(const e of Object.values(f))if(e===t)return e}function Fy(t,e){return Object.values(e).includes(t)}var W=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(W||{});function pn(t,e,n){n!==void 0&&(t[e]=n)}function Py(t){var e,n,r,i,o,a,l,u,d,g,h,v,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(l=t.fill)!=null&&l.editable||(u=t.stroke)!=null&&u.editable||(d=t.strokeWidth)!=null&&d.editable||(g=t.strokeDasharray)!=null&&g.editable||(h=t.strokeDashoffset)!=null&&h.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function Bu(t){var n,r,i,o,a,l,u,d,g,h,v,m,E,I,b,w,A,T,U,P,Y,k,G;const e={type:t.type};return pn(e,"n",(n=t.n)==null?void 0:n.value),pn(e,"r",(r=t.r)==null?void 0:r.value),pn(e,"height",(i=t.height)==null?void 0:i.value),pn(e,"width",(o=t.width)==null?void 0:o.value),pn(e,"inset",(a=t.inset)==null?void 0:a.value),pn(e,"angle",(l=t.angle)==null?void 0:l.value),pn(e,"fill",(u=t.fill)==null?void 0:u.value),pn(e,"stroke",(d=t.stroke)==null?void 0:d.value),pn(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),pn(e,"strokeDasharray",(h=t.strokeDasharray)==null?void 0:h.value),pn(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),pn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),pn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),pn(e,"opacity",(I=t.opacity)==null?void 0:I.value),pn(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:A.value,shortenTail:(U=(T=t.linePathOptions)==null?void 0:T.shortenTail)==null?void 0:U.value,bezierRounding:(Y=(P=t.linePathOptions)==null?void 0:P.bezierRounding)==null?void 0:Y.value,closeLoops:(G=(k=t.linePathOptions)==null?void 0:k.closeLoops)==null?void 0:G.value}),e}function zy(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const rh={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},ih={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},oh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},il={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Yu={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ns={type:"Line",strokeWidth:.125,stroke:"gray"},Md={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Ov={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Hy={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},sh={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},ah={strokeWidth:.02,stroke:"black"},Il=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,rr=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,yo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,Wy=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,tn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Oo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ud=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ge=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,By=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,Yy=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,jy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Ao=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Ky=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,Vy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Xy=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function qy(t){return Gi(t)?By():Eo(t)?Yy():t===f.XV?Vy():Co(t)?jy():wo(t)?Il():Io(t)?yo():Br(t)?Wy():bo(t)?Ge():Ls(t)?Xy():""}var ve=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(ve||{}),Lt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Lt||{}),Tn=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Tn||{}),Re=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(Re||{}),An=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(An||{});function Zy(t){if(bl(t)||Gi(t)||Eo(t)||bo(t)||Co(t)||As(t)||wo(t)||Br(t)||xs(t))return Re;if(Io(t))return Tn;if(Ls(t))return An}function Qy(t){if(bl(t)||Gi(t)||Eo(t)||bo(t)||Co(t)||As(t)||wo(t)||Br(t)||xs(t)||Io(t)||Ls(t))return"Dynamic"}const Ss=[z.ARROW_CONSTRAINT,z.LOCAL_CONSTRAINT,z.ARROW_TOOL,z.LOCAL_ELEMENT],Jy={inputOptions:{type:ve.ARROW},toolId:f.ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:yo(),tags:[],categories:Ss}},eO={inputOptions:{type:ve.ARROW},toolId:f.AVERAGE_ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:yo(),tags:[],categories:Ss}},tO={inputOptions:{type:ve.ARROW,allowSelfIntersection:!0},toolId:f.BULBOUS_ARROW,shape:{type:W.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:yo(),tags:[],categories:Ss}};ve.ARROW,f.SQUARE_ROOT_ARROW,W.LINE,yo();const nO={inputOptions:{type:ve.ARROW},toolId:f.CHAOS_CONSTRUCTION_ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:yo(),tags:[],categories:Ss}};function rO(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function iO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function oO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function sO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function aO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const lO={Delete:null,Backspace:null};function cO(t,e=10){if(t in lO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function uO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function dO(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function _O(t){const e={KeyZ:f.DIGIT,KeyX:f.CORNER_PM,KeyC:f.CENTER_PM,KeyV:f.HIGHLIGHTS};return t in e?e[t]:f.DIGIT}function fO(t){let e;return t.altKey?e=f.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=f.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=f.CENTER_PM:e=f.HIGHLIGHTS,e}function Av(t){return t==="Backspace"}function xo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Av(t.key))}function gO(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function hO(t){return gO(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function vO(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function $i(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),l=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,d=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${l.source}${d.source}$`,"i").test(t))}function Yr(t,e,n){if(t===void 0)return t;let r=t;return Av(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Gd=[z.CAGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.CAGE_TOOL,z.LOCAL_ELEMENT],ir=[z.CAGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.CAGE_TOOL,z.LOCAL_ELEMENT];function xv(t,e=5){return $i(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Lv(t,e,n){return Yr(t,e,n)}const Pn={type:W.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},wl={type:ve.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},or={...wl,valueUpdater:(t,e)=>Lv(t,e,xv)},pO={inputOptions:or,toolId:f.KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:rr(),tags:[],categories:ir}},mO={inputOptions:or,toolId:f.UNIQUE_DIGITS_CAGE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:rr(),tags:[],categories:ir}},EO={inputOptions:or,toolId:f.INVERTED_KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:rr(),tags:[],categories:ir}},CO={inputOptions:or,toolId:f.SUM_CAGE,shape:Pn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:rr(),tags:[],categories:ir}},bO={inputOptions:wl,toolId:f.SUM_CAGE_LOOK_AND_SAY,shape:Pn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Il(),tags:[],categories:Gd}},IO={inputOptions:wl,toolId:f.PARITY_BALANCE_CAGE,shape:Pn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Il(),tags:[],categories:Gd}},wO={inputOptions:or,toolId:f.DIVISIBLE_KILLER_CAGE,shape:Pn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:rr(),tags:[],categories:ir}},yO={inputOptions:or,toolId:f.SPOTLIGHT_CAGE,shape:Pn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:rr(),tags:[],categories:ir}},OO={inputOptions:wl,toolId:f.PUTTERIA_CAGE,shape:Pn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Il(),tags:[],categories:Gd}},AO={inputOptions:or,toolId:f.MULTISET_CAGE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:rr(),tags:[],categories:ir}},xO={inputOptions:or,toolId:f.VAULTED_CAGE,shape:Pn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:rr(),tags:[],categories:ir}},LO={inputOptions:or,toolId:f.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Pn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:rr(),tags:[],categories:ir}},NO={inputOptions:or,toolId:f.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Pn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:rr(),tags:[],categories:ir}},SO={inputOptions:or,toolId:f.DOUBLERS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:rr(),tags:[],categories:ir}},DO={inputOptions:or,toolId:f.NEGATORS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:rr(),tags:[],categories:ir}},RO={inputOptions:{type:ve.SELECTION},toolId:f.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[z.CELL_INPUT_TOOL]}},TO={inputOptions:{type:ve.SELECTION},toolId:f.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[z.CELL_INPUT_TOOL]}},kO={inputOptions:{type:ve.SELECTION},toolId:f.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[z.CELL_INPUT_TOOL]}},MO={inputOptions:{type:ve.SELECTION},toolId:f.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[z.CELL_INPUT_TOOL]}},UO={inputOptions:{type:ve.SELECTION},toolId:f.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[z.CELL_INPUT_TOOL]}},GO={inputOptions:{type:ve.SELECTION},toolId:f.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[z.CELL_INPUT_TOOL]}},$O={inputOptions:{type:ve.SELECTION},toolId:f.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[z.CELL_INPUT_TOOL]}},FO={inputOptions:{type:ve.PEN},toolId:f.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},PO={type:ve.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST},$d=[z.LOCAL_CONSTRAINT,z.CENTER_CORNER_EDGE_CONSTRAINT,z.LOCAL_ELEMENT];f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,W.CIRCLE,Ud();const zO={inputOptions:{type:ve.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST,valueUpdater:(t,e)=>Yr(t,e,()=>!0),defaultValue:""},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Ud(),tags:[],categories:$d}},HO={inputOptions:{type:ve.CENTER_CORNER_OR_EDGE,targets:Lt.CORNER_OR_EDGE,valueUpdater:(t,e)=>Yr(t,e,()=>!0),defaultValue:""},toolId:f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Ud(),tags:[],categories:$d}},WO={inputOptions:{type:ve.CLONE},toolId:f.CLONE_REGION,shape:{type:W.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[z.CLONE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT]}},yl=[z.CORNER_CONSTRAINT,z.LOCAL_CONSTRAINT,z.CORNER_TOOL,z.LOCAL_ELEMENT],Fd=[z.CORNER_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.CORNER_TOOL,z.LOCAL_ELEMENT];function Nv(t,e=3){return $i(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Sv(t,e,n){return Yr(t,e,n)}function BO(t,e){function n(){return!0}return Yr(t,e,n)}const Pd={type:ve.CORNER,defaultValue:"",valueUpdater:(t,e)=>Sv(t,e,Nv)},YO={inputOptions:{type:ve.CORNER,valueUpdater:(t,e)=>BO(t,e),defaultValue:""},toolId:f.QUADRUPLE,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Ky(),categories:Fd}},jO={inputOptions:Pd,toolId:f.CORNER_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Ao(),categories:Fd}},KO={inputOptions:{type:ve.CORNER,defaultValue:""},toolId:f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:W.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Ao(),categories:yl}},VO={inputOptions:Pd,toolId:f.CORNER_EVEN_COUNT,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Ao(),categories:yl}};f.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,W.CIRCLE,Ao();const XO={inputOptions:{type:ve.CORNER,defaultValue:"X"},toolId:f.PRODUCT_SQUARE,shape:{type:W.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Ao(),categories:yl}},qO={inputOptions:{type:ve.CORNER,defaultValue:""},toolId:f.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Ao(),categories:yl}},Ol=[z.EDGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.EDGE_TOOL,z.LOCAL_ELEMENT],sr=[z.EDGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.EDGE_TOOL,z.LOCAL_ELEMENT],Ds=.15,Dv=.02,Fi={type:W.CIRCLE,r:{editable:!0,value:Ds,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Dv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},zd={type:W.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function ZO(t,e=1){return $i(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Rv(t,e=3){return $i(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function QO(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Hd(t,e,n){return Yr(t,e,n)}function JO(t,e){return t===void 0?"V":QO(e)?e.toUpperCase():t}function eA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Tv(t,e){return t===void 0?"<":eA(e)?e:t}const Rs={type:ve.EDGE,valueUpdater:(t,e)=>Hd(t,e,Rv)},tA={inputOptions:{type:ve.EDGE,valueUpdater:(t,e)=>Hd(t,e,ZO)},toolId:f.RATIO,negative_constraints:[{toolId:f.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:W.CIRCLE,r:{editable:!1,value:Ds},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:sr}},nA={inputOptions:Rs,toolId:f.DIFFERENCE,negative_constraints:[{toolId:f.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:Fi,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:sr}},rA={inputOptions:Rs,toolId:f.EDGE_SUM,shape:{...Fi,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:sr}},iA={inputOptions:{type:ve.EDGE,defaultValue:"V",valueUpdater:JO},toolId:f.XV,negative_constraints:[{toolId:f.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:f.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:f.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:W.TEXT_ONLY,r:{editable:!1,value:Ds},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:sr}},oA={inputOptions:{type:ve.EDGE,valueUpdater:Tv,defaultValue:"<"},toolId:f.EDGE_INEQUALITY,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:sr}},sA={inputOptions:Rs,toolId:f.EDGE_PRODUCT,shape:{...Fi,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:sr}},aA={inputOptions:Rs,toolId:f.EDGE_MODULO,shape:{...Fi,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:sr}},lA={inputOptions:Rs,toolId:f.EDGE_FACTOR,shape:{...Fi,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:sr}},cA={inputOptions:{type:ve.EDGE},toolId:f.XY_DIFFERENCES,negative_constraints:[{toolId:f.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:W.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Ds},strokeWidth:{editable:!1,value:Dv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:sr}},uA={inputOptions:{type:ve.EDGE},toolId:f.YIN_YANG_WHITE_KROPKI,shape:Fi,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:sr}},dA={inputOptions:{type:ve.EDGE},toolId:f.YIN_YANG_KROPKI,negative_constraints:[{toolId:f.ALL_YIN_YANG_KROPKI_GIVEN,description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given."}],shape:{type:W.CIRCLE,r:{editable:!1,value:Ds},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:sr}},_A={inputOptions:{type:ve.EDGE},toolId:f.FILLOMINO_REGION_BORDER,shape:zd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Ol}},fA={inputOptions:{type:ve.EDGE},toolId:f.UNKNOWN_REGION_BORDER,shape:zd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ol}},gA={inputOptions:{type:ve.EDGE},toolId:f.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:zd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ol}},hA={inputOptions:{type:ve.EDGE},toolId:f.EDGE_CAVE_ONE_OF_EACH,shape:Fi,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Ol}},vA={inputOptions:{type:ve.EDGE,valueUpdater:Tv,defaultValue:"<"},toolId:f.ONE_WAY_DOOR,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:sr}},Lo=[z.OUTSIDE_CORNER_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.OUTSIDE_CORNER_TOOL,z.OUTSIDE_DIRECTION_TOOL,z.LOCAL_ELEMENT];function pA(t,e=5){return $i(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function kv(t,e,n){return Yr(t,e,n)}const No={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},So={type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>kv(t,e,pA),defaultValue:"",cornerOrEdge:Lt.CORNER},mA={inputOptions:So,toolId:f.LITTLE_KILLER_SUM,shape:No,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Oo(),tags:[],categories:Lo}},EA={inputOptions:So,toolId:f.LITTLE_KILLER_PRODUCT,shape:No,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Oo(),tags:[],categories:Lo}},CA={inputOptions:So,toolId:f.LITTLE_KILLER_LOOK_AND_SAY,shape:No,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Oo(),tags:[],categories:Lo}},bA={inputOptions:So,toolId:f.X_OMIT_LITTLE_KILLER_SUM,shape:No,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Oo(),tags:[],categories:Lo}},IA={inputOptions:So,toolId:f.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:No,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Oo(),tags:[],categories:Lo}},wA={inputOptions:So,toolId:f.NEGATORS_LITTLE_KILLER_SUM,shape:No,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Oo(),tags:[],categories:Lo}},nn=[z.OUTSIDE_EDGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.OUTSIDE_EDGE_TOOL,z.OUTSIDE_DIRECTION_TOOL,z.LOCAL_ELEMENT];function Do(t,e=5){return $i(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ts(t,e,n){return Yr(t,e,n)}const rn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},zn={type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ts(t,e,Do),defaultValue:"",cornerOrEdge:Lt.EDGE},yA={inputOptions:zn,toolId:f.SANDWICH_SUM,shape:rn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:tn(),tags:[],categories:nn}},OA={inputOptions:{...zn,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.MYSTERY_SANDWICH_SUM,shape:rn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:tn(),tags:[],categories:nn}},AA={inputOptions:zn,toolId:f.SANDWICH_SUM_XOR_X_SUM,shape:rn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:tn(),tags:[],categories:nn}},xA={inputOptions:zn,toolId:f.X_SUM,shape:rn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:tn(),tags:[],categories:nn}},LA={inputOptions:zn,toolId:f.SHORTSIGHTED_X_SUM,shape:rn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:tn(),tags:[],categories:nn}},NA={inputOptions:zn,toolId:f.SHIFTED_X_SUM,shape:rn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:tn(),tags:[],categories:nn}},SA={inputOptions:zn,toolId:f.BROKEN_X_SUM,shape:rn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:tn(),tags:[],categories:nn}},DA={inputOptions:zn,toolId:f.X_SUM_SKYSCRAPERS,shape:rn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:tn(),tags:[],categories:nn}},RA={inputOptions:zn,toolId:f.BATTLEFIELD,shape:rn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:tn(),tags:[],categories:nn}},TA={inputOptions:zn,toolId:f.SKYSCRAPERS,shape:rn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:tn(),tags:[],categories:nn}},kA={inputOptions:zn,toolId:f.X_INDEX,shape:rn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:tn(),tags:[],categories:nn}},MA={inputOptions:zn,toolId:f.RISING_STREAK,shape:rn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:tn(),tags:[],categories:nn}},UA={inputOptions:zn,toolId:f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:rn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:tn(),tags:[],categories:nn}},GA={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ts(t,e,Do),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.OUTSIDE_CONSECUTIVE_SUM,shape:rn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:tn(),tags:[],categories:nn}},$A={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ts(t,e,Do),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.LOOPWICHES,shape:rn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:tn(),tags:[],categories:nn}},FA={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ts(t,e,Do),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:rn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:tn(),tags:[],categories:nn}},PA={inputOptions:{type:ve.OUTSIDE_DIRECTION,defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_X_INDEX_REGION,shape:rn,meta:{description:"Clues outside the grid indicate the first N cells pointing in that direction are in the same region - followed by a region border - where N is the first digit seen by the clue.",usage:tn(),tags:[],categories:nn}},zA={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ts(t,e,Do),defaultValue:"",cornerOrEdge:Lt.EDGE},toolId:f.PENTOMINO_BORDER_COUNT,shape:rn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:tn(),tags:[],categories:nn}},HA={inputOptions:{type:ve.SINGLE_CELL},toolId:f.COSMETIC_CELL_CENTER_SHAPE,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},WA={inputOptions:{type:ve.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},BA={inputOptions:{type:ve.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_MULTI_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},YA={inputOptions:{type:ve.EDGE,valueUpdater:(t,e)=>Hd(t,e,Rv),defaultValue:""},toolId:f.COSMETIC_EDGE,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.LOCAL_ELEMENT]}},jA={inputOptions:{type:ve.CORNER,valueUpdater:(t,e)=>Sv(t,e,Nv),defaultValue:""},toolId:f.COSMETIC_CORNER,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.LOCAL_ELEMENT]}},KA={inputOptions:{type:ve.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},VA={inputOptions:{type:ve.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},XA={inputOptions:{type:ve.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},qA={inputOptions:{type:ve.CAGE,valueUpdater:(t,e)=>Lv(t,e,xv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:f.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.LOCAL_ELEMENT]}},ZA={inputOptions:{type:ve.ARROW},toolId:f.COSMETIC_ARROW,shape:{type:W.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT]}},QA={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>kv(t,e,Do),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:f.COSMETIC_OUTSIDE_DIRECTION,shape:{type:W.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.OUTSIDE_DIRECTION_TOOL,z.LOCAL_ELEMENT]}},Ro=[z.LOCAL_ELEMENT,z.DIAGONAL_CONSTRAINTS],JA={toolId:f.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},ex={toolId:f.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},tx={toolId:f.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},nx={toolId:f.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:f.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:f.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:f.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:f.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},ax={toolId:f.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},lx={toolId:f.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},cx={toolId:f.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},ux={toolId:f.NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Ro}},dx={toolId:f.POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Ro}},_x={toolId:f.NEGATIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Ro}},fx={toolId:f.POSITIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Ro}},gx={toolId:f.PARITY_MIRROR_NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Ro}},hx={toolId:f.PARITY_MIRROR_POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Ro}},vx={toolId:f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},px={toolId:f.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},mx={toolId:f.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},Ex={toolId:f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}},Cx={toolId:f.CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},bx={toolId:f.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Ix={toolId:f.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},wx={toolId:f.YIN_YANG,negative_constraints:[{toolId:f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded)."},{toolId:f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5."},{toolId:f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION,description:"Identical digits which see each other by a bishops move (diagonally) must be the same color."}],meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},yx={toolId:f.NURIMISAKI,negative_constraints:[{toolId:f.NURIMISAKI_PATH_GERMAN_WHISPERS,description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5."}],meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:f.NURIKABE,negative_constraints:[{toolId:f.NURIKABE_NO_REPEATS_IN_ISLANDS,description:"Digits may not repeat within a nurikabe island."}],meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Ax={toolId:f.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},xx={toolId:f.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:f.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Nx={toolId:f.SHIKAKU,negative_constraints:[{toolId:f.SHIKAKU_NO_REPEATS_IN_REGION,description:"Digits cannot repeat within a shikaku region."}],meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Sx={toolId:f.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Dx={toolId:f.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Rx={toolId:f.CELL_CENTER_LOOP_NO_TOUCHING,negative_constraints:[{toolId:f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,description:"Adjacent cells along a loop differ by 5 or more."},{toolId:f.NOT_LOOP_SIZED_REGIONS,description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N."},{toolId:f.MODULAR_LOOP,description:"Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}."}],meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Tx={toolId:f.MAZE_DIRECTED_PATH,negative_constraints:[{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,description:"Any two adjacent cells along the correct path must sum to a prime number."},{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4."},{toolId:f.DIRECTED_PATH_IS_PARITY_LINE,description:"The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit."},{toolId:f.DIRECTED_PATH_IS_REGION_SUM_LINE,description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum."},{toolId:f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number."}],meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},kx={toolId:f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[z.GLOBAL_CONSTRAINT,z.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Mx={toolId:f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[z.GLOBAL_CONSTRAINT,z.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Ux={toolId:f.CAVE,negative_constraints:[{toolId:f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells."},{toolId:f.CAVE_WALLS_ARE_EVEN,description:"Cave walls must contain even digits."},{toolId:f.CAVE_CELLS_ARE_ODD,description:"Cave cells must contain odd digits."},{toolId:f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,description:"There is exactly one digit that does not appear anywhere in the cave."},{toolId:f.RENBAN_CAVES,description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell."},{toolId:f.CAVE_LITS,description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."},{toolId:f.CAVE_WALL_SUGURU,description:"Each orthogonally connected group of shaded (wall) cells contains the digits 1-N (where N is the size of the group). Suguru digits may not repeat in a row, column, or shaded group."},{toolId:f.CAVE_CELLS_FILLOMINO,description:"Divide unshaded cells into polyominoes and fill each cell with a digit equal to the size of its polyomino. Polyominoes of the same size may not share an edge."}],meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Gx={toolId:f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},$x={toolId:f.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Fx={toolId:f.GALAXIES,negative_constraints:[{toolId:f.EVERY_CELL_BELONGS_TO_A_GALAXY,description:"Every cell in the grid belongs to a galaxy."},{toolId:f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,description:"No 2x2 area may belong entirely to one galaxy."},{toolId:f.TWO_SYMMETRIC_GALAXIES,description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"},{toolId:f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5."}],meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Px={toolId:f.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},zx={toolId:f.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Hx={toolId:f.CONNECT_FOUR,negative_constraints:[{toolId:f.CONNECT_FOUR_DRAW,description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow."},{toolId:f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit)."},{toolId:f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,description:"Two orthogonally adjacent yellow discs must have a difference of at least 3."}],meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Wx={toolId:f.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Bx={toolId:f.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]}},Be=[z.LINE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.LINE_TOOL,z.LOCAL_ELEMENT],jr=[z.LINE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.DOUBLE_ENDED_LINE_CONSTRAINT,z.LINE_TOOL,z.LOCAL_ELEMENT],ks={description:"",usage:Ge(),tags:[],categories:Be},Gt={type:ve.LINE,allowSelfIntersection:!0},Qt={type:ve.LINE,allowSelfIntersection:!1},Yx={inputOptions:Qt,toolId:f.THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ks,description:"Numbers along a thermometer must increase from the bulb end."}},jx={inputOptions:{type:ve.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:f.CUSTOM_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ks,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},Kx={inputOptions:Qt,toolId:f.FUZZY_THERMOMETER,shape:{type:W.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...ks,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},Vx={inputOptions:Qt,toolId:f.SLOW_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ks,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},Xx={inputOptions:Qt,toolId:f.ROW_CYCLE_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ks,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},qx={inputOptions:Gt,toolId:f.PALINDROME,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Ge(),tags:[],categories:Be}},Zx={inputOptions:Gt,toolId:f.RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Ge(),tags:[],categories:Be}},Qx={inputOptions:Gt,toolId:f.DOUBLE_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Ge(),tags:[],categories:Be}},Jx={inputOptions:Gt,toolId:f.RENRENBANBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Ge(),tags:[],categories:Be}},eL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.N_CONSECUTIVE_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Be}},tL={inputOptions:Gt,toolId:f.NABNER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Be}},nL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Ge(),tags:[],categories:Be}},rL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.DUTCH_WHISPERS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Ge(),tags:[],categories:Be}},iL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Ge(),tags:[],categories:Be}},oL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Ge(),tags:[],categories:Be}},sL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_NABNER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Ge(),tags:[],categories:Be}},aL={inputOptions:Qt,toolId:f.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Ge(),tags:[],categories:Be}},lL={inputOptions:Qt,toolId:f.INDEX_LINE,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Ge(),tags:[],categories:Be}},cL={inputOptions:Gt,toolId:f.UNIQUE_VALUES_LINE,shape:{type:W.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Ge(),tags:[],categories:Be}},uL={inputOptions:Gt,toolId:f.REGION_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Ge(),tags:[],categories:Be}},dL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Ge(),tags:[],categories:Be}},_L={inputOptions:Qt,toolId:f.ARITHMETIC_SEQUENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Ge(),tags:[],categories:Be}},fL={inputOptions:Gt,toolId:f.SAME_PARITY_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Ge(),tags:[],categories:Be}},gL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Be}},hL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.UNIMODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Ge(),tags:[],categories:Be}},vL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_OR_UNIMODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Ge(),tags:[],categories:Be}},pL={inputOptions:Gt,toolId:f.ODD_EVEN_OSCILLATOR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Ge(),tags:[],categories:Be}},mL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.HIGH_LOW_OSCILLATOR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Ge(),tags:[],categories:Be}},EL={inputOptions:Gt,toolId:f.ENTROPIC_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Ge(),tags:[],categories:Be}},CL={inputOptions:Gt,toolId:f.ENTROPIC_OR_MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Ge(),tags:[],categories:Be}},bL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_COLUMN_IS_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Ge(),tags:[],categories:Be}},IL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_ROW_IS_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Ge(),tags:[],categories:Be}},wL={inputOptions:Qt,toolId:f.REPEATED_DIGITS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Ge(),tags:[],categories:Be}},yL={inputOptions:Qt,toolId:f.SUPERFUZZY_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Ge(),tags:[],categories:Be}},OL={inputOptions:Gt,toolId:f.AMBIGUOUS_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Ge(),tags:[],categories:Be}},AL={inputOptions:Qt,toolId:f.HEADLESS_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Ge(),tags:[],categories:Be}},xL={inputOptions:Gt,toolId:f.XV_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Ge(),tags:[],categories:Be}},LL={inputOptions:Qt,toolId:f.ROW_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Ge(),tags:[],categories:Be}},NL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.AT_LEAST_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Ge(),tags:[],categories:Be}},SL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Ge(),tags:[],categories:Be}};f.ADJACENT_CELL_SUM_IS_PRIME_LINE,W.LINE,Ge();const DL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.PRODUCT_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Ge(),tags:[],categories:Be}},RL={inputOptions:Gt,toolId:f.ADJACENT_MULTIPLES_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Ge(),tags:[],categories:Be}},TL={inputOptions:Gt,toolId:f.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Ge(),tags:[],categories:Be}},kL={inputOptions:Qt,toolId:f.LOOK_AND_SAY_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Ge(),tags:[],categories:Be}},ML={inputOptions:Qt,toolId:f.ZIPPER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Ge(),tags:[],categories:Be}},UL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.SEGMENTED_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Ge(),tags:[],categories:Be}},GL={inputOptions:{type:ve.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Ge(),tags:[],categories:Be}},$L={inputOptions:{type:ve.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Ge(),tags:[],categories:Be}};f.THERMO_OR_AVERAGE_ARROW,W.THERMO_WITH_CIRCLE,Ge();const FL={inputOptions:Qt,toolId:f.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:W.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Ge(),tags:[],categories:Be}},PL={inputOptions:Qt,toolId:f.PEAPODS,shape:{type:W.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Ge(),tags:[],categories:Be}},zL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Ge(),tags:[],categories:Be}},HL={inputOptions:Gt,toolId:f.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Ge(),tags:[],categories:Be}},WL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Ge(),tags:[],categories:Be}},BL={inputOptions:Gt,toolId:f.YIN_YANG_REGION_SUM_LINE,negative_constraints:[{toolId:f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,description:"All lines must cross colours at least once."}],shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Ge(),tags:[],categories:Be}},YL={inputOptions:Qt,toolId:f.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Ge(),tags:[],categories:Be}},jL={inputOptions:Qt,toolId:f.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Ge(),tags:[],categories:Be}},KL={inputOptions:Gt,toolId:f.BETWEEN_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Ge(),tags:[],categories:jr}},VL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.LOCKOUT_LINE,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Ge(),tags:[],categories:jr}},XL={inputOptions:Gt,toolId:f.TIGHTROPE_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Ge(),tags:[],categories:jr}},qL={inputOptions:Gt,toolId:f.PARITY_COUNT_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Ge(),tags:[],categories:jr}},ZL={inputOptions:Gt,toolId:f.DOUBLE_ARROW_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Ge(),categories:jr}},QL={inputOptions:Gt,toolId:f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Ge(),tags:[],categories:jr}},JL={inputOptions:Gt,toolId:f.SPLIT_PEAS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Ge(),tags:[],categories:jr}},eN={inputOptions:Qt,toolId:f.DOUBLERS_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Ge(),tags:[],categories:Be}},tN={inputOptions:Gt,toolId:f.DOUBLERS_BETWEEN_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:jr}},nN={inputOptions:Gt,toolId:f.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Ge(),tags:[],categories:jr}},je=[z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.SINGLE_CELL_SHAPE_TOOL,z.LOCAL_ELEMENT],Pi=[z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.SINGLE_CELL_COLOR_TOOL,z.LOCAL_ELEMENT],Mv=[z.SINGLE_CELL_ARROW_TOOL,z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT],Al={type:W.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},gi={type:W.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function xl(t,e=3){return $i(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function rN(t){return t===""||t==="1"||t==="2"||t==="3"}function Ms(t,e,n){return Yr(t,e,n)}const Je={type:ve.SINGLE_CELL},Kr={type:ve.SINGLE_CELL,valueUpdater:(t,e)=>Ms(t,e,xl),defaultValue:""},Uv={type:ve.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},iN={inputOptions:Je,toolId:f.ODD,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:je}},oN={inputOptions:Je,toolId:f.EVEN,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:je}},sN={inputOptions:Je,toolId:f.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:Pi}},aN={inputOptions:Je,toolId:f.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:Pi}},lN={inputOptions:Je,toolId:f.ODD_MINESWEEPER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},cN={inputOptions:Je,toolId:f.EVEN_MINESWEEPER,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},uN={inputOptions:Je,toolId:f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:je}},dN={inputOptions:Je,toolId:f.WATCHTOWER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},_N={inputOptions:Je,toolId:f.NOT_WATCHTOWER,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},fN={inputOptions:Kr,toolId:f.FARSIGHT,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:je}},gN={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>Ms(t,e,xl),defaultValue:"9"},toolId:f.RADAR,negative_constraints:[{toolId:f.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:je}},hN={inputOptions:Je,toolId:f.ORTHOGONAL_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:je}},vN={inputOptions:Je,toolId:f.INDEXING_COLUMN,negative_constraints:[{toolId:f.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Pi}},pN={inputOptions:Je,toolId:f.INDEXING_ROW,negative_constraints:[{toolId:f.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Pi}},mN={inputOptions:Je,toolId:f.LOW_DIGIT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Pi}},EN={inputOptions:Je,toolId:f.HIGH_DIGIT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Pi}},CN={inputOptions:Je,toolId:f.FRIENDLY_CELL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Pi}},bN={inputOptions:Je,toolId:f.DIAGONALLY_ADJACENT_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:je}},IN={inputOptions:Je,toolId:f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:je}},wN={inputOptions:Je,toolId:f.SANDWICH_ROW_COL_COUNT,shape:gi,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:je}},yN={inputOptions:Je,toolId:f.COUNTING_CIRCLES,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:je}},ON={inputOptions:Je,toolId:f.REVERSE_COUNTING_CIRCLES,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:je}},AN={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>Ms(t,e,rN),defaultValue:""},toolId:f.COLORED_COUNTING_CIRCLES,shape:gi,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:je}},xN={inputOptions:Je,toolId:f.UNIQUE_CELLS,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:je}},LN={inputOptions:Je,toolId:f.SEEN_EVEN_COUNT,shape:Al,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},NN={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>Ms(t,e,xl),defaultValue:"5"},toolId:f.CELL_KNIGHT_WHISPERS,shape:gi,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:je}},SN={inputOptions:Je,toolId:f.SEEN_ODD_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},DN={inputOptions:Je,toolId:f.YIN_YANG_MINESWEEPER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:je}},RN={inputOptions:Je,toolId:f.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},TN={inputOptions:Je,toolId:f.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},kN={inputOptions:Je,toolId:f.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:Al,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:je}},MN={inputOptions:Je,toolId:f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:je}},UN={inputOptions:Je,toolId:f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:W.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:je}},GN={inputOptions:Kr,toolId:f.YIN_YANG_LABELED_SHADE_CELL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"Cells in cages with the same label have the yin yang shading.",tags:[],categories:je}},$N={inputOptions:Je,toolId:f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:je}},FN={inputOptions:Je,toolId:f.SEEN_REGION_BORDERS_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:je}},PN={inputOptions:Je,toolId:f.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:je}},zN={inputOptions:Je,toolId:f.SASHIGANE_BEND_REGION_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:je}},HN={inputOptions:Uv,toolId:f.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Mv}},WN={inputOptions:Uv,toolId:f.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Mv}},BN={inputOptions:Kr,toolId:f.SASHIGANE_REGION_SUM,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:je}},YN={inputOptions:Je,toolId:f.CELL_ON_THE_LOOP,shape:Al,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:je}},jN={inputOptions:Je,toolId:f.CELL_NOT_ON_THE_LOOP,shape:gi,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:je}},KN={inputOptions:Je,toolId:f.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:je}},VN={inputOptions:Kr,toolId:f.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:je}},XN={inputOptions:Je,toolId:f.CAVE_CLUE,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:je}},qN={inputOptions:Je,toolId:f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,shape:gi,meta:{description:"An unshaded circled clue (cave) indicates the total number of unshaded cells seen in the four orthogonal directions, including the clue cell. A shaded circle clue (wall) indicates the size of the shaded region.",tags:[],categories:je}},ZN={inputOptions:Kr,toolId:f.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:je}},QN={inputOptions:Kr,toolId:f.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:je}},JN={inputOptions:Kr,toolId:f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:gi,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:je}},eS={inputOptions:Je,toolId:f.DIRECTED_PATH_START,shape:{type:W.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:je}},tS={inputOptions:Je,toolId:f.DIRECTED_PATH_END,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:je}},nS={inputOptions:Kr,toolId:f.TELEPORT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:je}},rS={inputOptions:Kr,toolId:f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:je}},iS={inputOptions:Je,toolId:f.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...Al,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:je}},oS={inputOptions:Je,toolId:f.NURIKABE_ISLAND_SIZE_CELL,shape:gi,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:je}},sS={inputOptions:Je,toolId:f.CONNECT_FOUR_YELLOW,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:je}},aS={inputOptions:Je,toolId:f.CONENCT_FOUR_RED,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:je}},lS={inputOptions:Je,toolId:f.SHIKAKU_REGION_SIZE,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,description:"Each shikaku region contains exactly one circle where a digit in a circle indicates the number of cells in its region."}],shape:gi,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:je}},cS={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>Ms(t,e,xl),defaultValue:"?"},toolId:f.SHIKAKU_REGION_SUM,negative_constraints:[{toolId:f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,description:"Each shikaku region contains exactly one shikaku region sum clue, and each clue indicates the sum of the digits in its shikaku region."}],shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:je}},uS={inputOptions:{type:ve.SINGLE_CELL},toolId:f.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:[z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT,z.FOG_TOOL]}},dS={toolId:f.CUSTOM_FOG_CLEARING,negative_constraints:[{toolId:f.FOG_CLEARING_ITSELF,description:"On cell input, clear itself."},{toolId:f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS,description:"On cell input, clear orthogonal neighbours."},{toolId:f.FOG_CLEARING_DIAGONAL_NEIGHBOURS,description:"On cell input, clear diagonal neighbours."},{toolId:f.FOG_CLEARING_CONTAINING_ROW,description:"On cell input, clear containing row."},{toolId:f.FOG_CLEARING_CONTAINING_COLUMN,description:"On cell input, clear containing column."},{toolId:f.FOG_CLEARING_KNIGHTS_MOVE,description:"On cell input, clear cells a knight's move away."}],meta:{description:"",tags:[],categories:[z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT,z.FOG_TOOL]}},ar=[z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.SINGLE_CELL_MULTIARROW_TOOL,z.LOCAL_ELEMENT],Nr={type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},lr={type:ve.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},_S={inputOptions:lr,toolId:f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:Nr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:ar}},fS={inputOptions:lr,toolId:f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:Nr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:ar}},gS={inputOptions:lr,toolId:f.LOOP_CELL_COUNT_ARROWS,shape:Nr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:ar}},hS={inputOptions:lr,toolId:f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:Nr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:ar}},vS={inputOptions:lr,toolId:f.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:Nr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:ar}},pS={inputOptions:lr,toolId:f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:Nr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:ar}},mS={inputOptions:lr,toolId:f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,shape:Nr,meta:{description:"A digit in a cell with arrow(s) gives the total number of cells in the same region as the arrow cell in all indicated directions combined (this count includes the arrow cell itself.) Cells in different regions to the arrow cell immediately block vision (and therefore prevent any cells further along the arrow's path in that direction from contributing to the arrow cell's count).",tags:[],categories:ar}},ES={inputOptions:lr,toolId:f.COLD_ARROWS,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:ar}},CS={inputOptions:lr,toolId:f.HOT_ARROWS,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:ar}},bS={inputOptions:lr,toolId:f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:Nr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:ar}},IS={inputOptions:lr,toolId:f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:Nr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:ar}},wS={inputOptions:lr,toolId:f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:Nr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:ar}},yS={toolId:f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[z.LOCAL_CONSTRAINT,z.VALUED_GLOBAL_CONSTRAINT]}},OS={toolId:f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[z.LOCAL_CONSTRAINT,z.VALUED_GLOBAL_CONSTRAINT]}},AS={toolId:f.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[z.LOCAL_CONSTRAINT,z.VALUED_GLOBAL_CONSTRAINT]}},xS={toolId:f.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[z.LOCAL_CONSTRAINT,z.VALUED_GLOBAL_CONSTRAINT]}};f.VAMPIRE_AND_PREY,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;f.MARKED_CELLS,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;const LS={toolId:f.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]}},NS={toolId:f.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]}};f.HOT_CELLS,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;f.COLD_CELLS,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;f.DECREMENT_FOUNTAIN,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;const SS={toolId:f.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]}},DS={toolId:f.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]}},RS=[z.CORNER_LINE_CONSTRAINT,z.CORNER_LINE_TOOL,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT],TS={inputOptions:{type:ve.CORNER_LINE},toolId:f.MAZE_WALL,shape:{type:W.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:RS}},Ht={[f.GIVEN]:RO,[f.DIGIT]:TO,[f.REGIONS]:kO,[f.OUTSIDE]:$O,[f.CORNER_PM]:MO,[f.CENTER_PM]:UO,[f.HIGHLIGHTS]:GO,[f.PEN_TOOL]:FO,[f.SUDOKU_RULES_DO_NOT_APPLY]:JA,[f.LEAVE_EMPTY_CELLS_EMPTY]:ex,[f.LITS]:Bx,[f.HEXED_SUDOKU]:tx,[f.FILLOMINO]:Wx,[f.ANTIKNIGHT]:nx,[f.ANTI_LONG_KNIGHT]:ix,[f.ANTIKING]:ox,[f.ANTI_GIRAFFE]:rx,[f.DISJOINT_GROUPS]:sx,[f.TANGO]:ax,[f.NONCONSECUTIVE]:lx,[f.NONRATIO]:cx,[f.ANTI_ENTROPY]:px,[f.GLOBAL_INDEXING_COLUMN]:mx,[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:Ex,[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:vx,[f.NEGATIVE_DIAGONAL]:ux,[f.POSITIVE_DIAGONAL]:dx,[f.NEGATIVE_ANTIDIAGONAL]:_x,[f.POSITIVE_ANTIDIAGONAL]:fx,[f.PARITY_MIRROR_NEGATIVE_DIAGONAL]:gx,[f.PARITY_MIRROR_POSITIVE_DIAGONAL]:hx,[f.DOUBLERS]:LS,[f.NEGATORS]:NS,[f.NEXUS]:SS,[f.INDEXER_CELLS]:DS,[f.CHAOS_CONSTRUCTION]:Cx,[f.NUMBERED_CHAOS_CONSTRUCTION]:bx,[f.CHAOS_CONSTRUCTION_SUGURU]:Ix,[f.YIN_YANG]:wx,[f.NURIMISAKI]:yx,[f.NURIKABE]:Ox,[f.TWO_CONTIGUOUS_REGIONS]:Ax,[f.SASHIGANE]:xx,[f.NORINORI]:Lx,[f.SHIKAKU]:Nx,[f.GOLDILOCKS_ZONE]:Dx,[f.CELL_CENTER_LOOP_NO_TOUCHING]:Rx,[f.CAVE]:Ux,[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:Gx,[f.GALAXIES]:Fx,[f.PENTOMINO_TILLING]:Px,[f.LITS_BLACK_WHITE_STAR_BATTLE]:zx,[f.NORINORI_STAR_BATTLE]:Sx,[f.MAZE_DIRECTED_PATH]:Tx,[f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:kx,[f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:Mx,[f.CONNECT_FOUR]:Hx,[f.ODD]:iN,[f.EVEN]:oN,[f.MINIMUM]:sN,[f.MAXIMUM]:aN,[f.ODD_MINESWEEPER]:lN,[f.EVEN_MINESWEEPER]:cN,[f.WATCHTOWER]:dN,[f.NOT_WATCHTOWER]:_N,[f.FARSIGHT]:fN,[f.RADAR]:gN,[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:uN,[f.ORTHOGONAL_SUM]:hN,[f.DIAGONALLY_ADJACENT_SUM]:bN,[f.INDEXING_COLUMN]:vN,[f.INDEXING_ROW]:pN,[f.LOW_DIGIT]:mN,[f.HIGH_DIGIT]:EN,[f.FRIENDLY_CELL]:CN,[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:IN,[f.SANDWICH_ROW_COL_COUNT]:wN,[f.COUNTING_CIRCLES]:yN,[f.REVERSE_COUNTING_CIRCLES]:ON,[f.COLORED_COUNTING_CIRCLES]:AN,[f.UNIQUE_CELLS]:xN,[f.SEEN_EVEN_COUNT]:LN,[f.SEEN_ODD_COUNT]:SN,[f.CELL_KNIGHT_WHISPERS]:NN,[f.YIN_YANG_MINESWEEPER]:DN,[f.YIN_YANG_SEEN_UNSHADED_CELLS]:RN,[f.YIN_YANG_SEEN_SHADED_CELLS]:TN,[f.YIN_YANG_SEEN_SAME_SHADE_CELLS]:kN,[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:MN,[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:UN,[f.YIN_YANG_LABELED_SHADE_CELL]:GN,[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:$N,[f.SEEN_REGION_BORDERS_COUNT]:FN,[f.NURIMISAKI_UNSHADED_ENDPOINTS]:PN,[f.SASHIGANE_BEND_REGION_COUNT]:zN,[f.SASHIGANE_REGION_SUM]:BN,[f.CELL_ON_THE_LOOP]:YN,[f.CELL_NOT_ON_THE_LOOP]:jN,[f.COUNT_LOOP_NEIGHBOUR_CELLS]:KN,[f.CAVE_CLUE]:XN,[f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE]:qN,[f.TWILIGHT_CAVE_FILLOMINO_CLUE]:VN,[f.YIN_YANG_FILLOMINO_PARITY]:$x,[f.SHIKAKU_REGION_SIZE]:lS,[f.SHIKAKU_REGION_SUM]:cS,[f.CHAOS_CONSTRUCTION_CHESS_SUMS]:ZN,[f.CHAOS_CONSTRUCTION_ARROW_KNOTS]:QN,[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:JN,[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:rS,[f.DIRECTED_PATH_START]:eS,[f.DIRECTED_PATH_END]:tS,[f.TELEPORT]:nS,[f.CONNECT_FOUR_YELLOW]:sS,[f.CONENCT_FOUR_RED]:aS,[f.SASHIGANE_ARROW_POINTS_TO_BEND]:HN,[f.THERMO_SIGHTLINE_LOOP_ARROW]:WN,[f.HOT_ARROWS]:CS,[f.COLD_ARROWS]:ES,[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:pS,[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS]:mS,[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:hS,[f.YIN_YANG_COUNT_SHADED_CELLS]:vS,[f.LOOP_CELL_COUNT_ARROWS]:gS,[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:fS,[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:_S,[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:bS,[f.NURIKABE_SEEN_WATERWAY_CELLS]:iS,[f.NURIKABE_ISLAND_SIZE_CELL]:oS,[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:IS,[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:wS,[f.DIFFERENCE]:nA,[f.RATIO]:tA,[f.XV]:iA,[f.EDGE_INEQUALITY]:oA,[f.EDGE_SUM]:rA,[f.EDGE_PRODUCT]:sA,[f.EDGE_MODULO]:aA,[f.EDGE_FACTOR]:lA,[f.XY_DIFFERENCES]:cA,[f.YIN_YANG_WHITE_KROPKI]:uA,[f.YIN_YANG_KROPKI]:dA,[f.FILLOMINO_REGION_BORDER]:_A,[f.UNKNOWN_REGION_BORDER]:fA,[f.CHAOS_CONSTRUCTION_SUGURU_BORDER]:gA,[f.EDGE_CAVE_ONE_OF_EACH]:hA,[f.ONE_WAY_DOOR]:vA,[f.QUADRUPLE]:YO,[f.CORNER_SUM]:jO,[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:KO,[f.CORNER_EVEN_COUNT]:VO,[f.PRODUCT_SQUARE]:XO,[f.EQUAL_DIAGONAL_DIFFERENCES]:qO,[f.THERMOMETER]:Yx,[f.FUZZY_THERMOMETER]:Kx,[f.SLOW_THERMOMETER]:Vx,[f.CUSTOM_THERMOMETER]:jx,[f.ROW_CYCLE_THERMOMETER]:Xx,[f.PALINDROME]:qx,[f.RENBAN_LINE]:Zx,[f.DOUBLE_RENBAN_LINE]:Qx,[f.RENRENBANBAN_LINE]:Jx,[f.N_CONSECUTIVE_RENBAN_LINE]:eL,[f.NABNER_LINE]:tL,[f.WHISPERS_LINE]:nL,[f.DUTCH_WHISPERS]:rL,[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:iL,[f.RENBAN_OR_WHISPERS_LINE]:oL,[f.RENBAN_OR_NABNER_LINE]:sL,[f.OUT_OF_ORDER_CONSECUTIVE_LINE]:aL,[f.INDEX_LINE]:lL,[f.UNIQUE_VALUES_LINE]:cL,[f.REPEATED_DIGITS_LINE]:wL,[f.REGION_SUM_LINE]:uL,[f.SUM_LINE]:dL,[f.XV_LINE]:xL,[f.ROW_SUM_LINE]:LL,[f.AT_LEAST_X_LINE]:NL,[f.SUPERFUZZY_ARROW]:yL,[f.AMBIGUOUS_ARROW]:OL,[f.HEADLESS_ARROW]:AL,[f.N_CONSECUTIVE_FUZZY_SUM_LINE]:SL,[f.PRODUCT_LINE]:DL,[f.ADJACENT_MULTIPLES_LINE]:RL,[f.ADJACENT_DIFFERENCES_COUNT_LINE]:TL,[f.LOOK_AND_SAY_LINE]:kL,[f.ARITHMETIC_SEQUENCE_LINE]:_L,[f.ZIPPER_LINE]:ML,[f.SEGMENTED_SUM_LINE]:UL,[f.SEGMENTED_SUM_AND_RENBAN_LINE]:GL,[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:$L,[f.SAME_PARITY_LINE]:fL,[f.MODULAR_LINE]:gL,[f.UNIMODULAR_LINE]:hL,[f.MODULAR_OR_UNIMODULAR_LINE]:vL,[f.ODD_EVEN_OSCILLATOR_LINE]:pL,[f.HIGH_LOW_OSCILLATOR_LINE]:mL,[f.ENTROPIC_LINE]:EL,[f.ENTROPIC_OR_MODULAR_LINE]:CL,[f.INDEXING_COLUMN_IS_X_LINE]:bL,[f.INDEXING_ROW_IS_X_LINE]:IL,[f.INDEXER_CELLS_REGION_SUBSET_LINE]:FL,[f.PEAPODS]:PL,[f.YIN_YANG_INDEXING_LINE_COLORING]:YL,[f.YIN_YANG_SHADED_WHISPERS_LINE]:zL,[f.YIN_YANG_UNSHADED_ENTROPIC_LINE]:HL,[f.YIN_YANG_UNSHADED_MODULAR_LINE]:WL,[f.YIN_YANG_REGION_SUM_LINE]:BL,[f.GOLDILOCKS_ZONE_REGION_SUM]:jL,[f.BETWEEN_LINE]:KL,[f.LOCKOUT_LINE]:VL,[f.PARITY_COUNT_LINE]:qL,[f.TIGHTROPE_LINE]:XL,[f.DOUBLE_ARROW_LINE]:ZL,[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:QL,[f.SPLIT_PEAS]:JL,[f.DOUBLERS_THERMOMETER]:eN,[f.DOUBLERS_BETWEEN_LINE]:tN,[f.DOUBLERS_DOUBLE_ARROW_LINE]:nN,[f.ARROW]:Jy,[f.CHAOS_CONSTRUCTION_ARROW]:nO,[f.AVERAGE_ARROW]:eO,[f.BULBOUS_ARROW]:tO,[f.MAZE_WALL]:TS,[f.KILLER_CAGE]:pO,[f.UNIQUE_DIGITS_CAGE]:mO,[f.INVERTED_KILLER_CAGE]:EO,[f.SUM_CAGE]:CO,[f.SUM_CAGE_LOOK_AND_SAY]:bO,[f.PARITY_BALANCE_CAGE]:IO,[f.DIVISIBLE_KILLER_CAGE]:wO,[f.SPOTLIGHT_CAGE]:yO,[f.PUTTERIA_CAGE]:OO,[f.MULTISET_CAGE]:AO,[f.VAULTED_CAGE]:xO,[f.YIN_YANG_ANTITHESIS_KILLER_CAGE]:LO,[f.YIN_YANG_BREAKEVEN_KILLER_CAGE]:NO,[f.DOUBLERS_KILLER_CAGE]:SO,[f.NEGATORS_KILLER_CAGE]:DO,[f.CLONE_REGION]:WO,[f.SANDWICH_SUM]:yA,[f.MYSTERY_SANDWICH_SUM]:OA,[f.X_SUM]:xA,[f.SHORTSIGHTED_X_SUM]:LA,[f.SHIFTED_X_SUM]:NA,[f.BROKEN_X_SUM]:SA,[f.X_SUM_SKYSCRAPERS]:DA,[f.BATTLEFIELD]:RA,[f.SKYSCRAPERS]:TA,[f.X_INDEX]:kA,[f.SANDWICH_SUM_XOR_X_SUM]:AA,[f.RISING_STREAK]:MA,[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:UA,[f.OUTSIDE_CONSECUTIVE_SUM]:GA,[f.LOOPWICHES]:$A,[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:FA,[f.CHAOS_CONSTRUCTION_X_INDEX_REGION]:PA,[f.PENTOMINO_BORDER_COUNT]:zA,[f.LITTLE_KILLER_SUM]:mA,[f.LITTLE_KILLER_PRODUCT]:EA,[f.LITTLE_KILLER_LOOK_AND_SAY]:CA,[f.LITTLE_KILLER_REGION_SUM_PRODUCT]:IA,[f.X_OMIT_LITTLE_KILLER_SUM]:bA,[f.NEGATORS_LITTLE_KILLER_SUM]:wA,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:zO,[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:HO,[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:yS,[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:OS,[f.FORBIDDEN_KNIGHT_SUM]:AS,[f.LITS_MAX_TETROMINO_SUM]:xS,[f.FOG_LIGHTS]:uS,[f.CUSTOM_FOG_CLEARING]:dS,[f.COSMETIC_CELL_CENTER_SHAPE]:HA,[f.COSMETIC_CELL_ARROW]:WA,[f.COSMETIC_CELL_MULTI_ARROW]:BA,[f.COSMETIC_EDGE]:YA,[f.COSMETIC_CORNER]:jA,[f.COSMETIC_LINE]:KA,[f.COSMETIC_LINE_WITH_CIRCLE_ENDS]:VA,[f.COSMETIC_LINE_WITH_POLYGON_ENDS]:XA,[f.COSMETIC_ARROW]:ZA,[f.COSMETIC_CAGE]:qA,[f.COSMETIC_OUTSIDE_DIRECTION]:QA};var We=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(We||{});function Gv(t){if(!(t in We))throw Error(" not a key in DIRECTION");return We[t]}function qe(t,e){return t.r===e.r&&t.c===e.c}function $v(t,e){return{r:t.r+e.r,c:t.c+e.c}}function kS(t,e){return{r:t.r*e,c:t.c*e}}function MS(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Us(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!qe(t,e)}function US(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function ol(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Ft(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ll(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function GS(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function sl(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function $S(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const FS=new Map([[6,We.N],[2,We.S],[0,We.E],[4,We.W],[7,We.NE],[5,We.NW],[1,We.SE],[3,We.SW]]);function go(t){t=t%8;const e=FS.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const PS=new Map([[We.N,{r:-1,c:0}],[We.S,{r:1,c:0}],[We.E,{r:0,c:1}],[We.W,{r:0,c:-1}],[We.NE,{r:-1,c:1}],[We.NW,{r:-1,c:-1}],[We.SE,{r:1,c:1}],[We.SW,{r:1,c:-1}]]);function Gs(t){const e=PS.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function lh(t,e){const n=Gs(e);return $v(t,n)}function al(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Fv(t,e,n=!1){const r=t.some(o=>qe(o,e)),i=n?t.some(o=>Us(o,e)):t.some(o=>US(o,e));if(!r&&i){const o=[...t,e];return ol(o),o}return t}function Ha(t){return`R${t.r+1}C${t.c+1}`}function Wd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}function zS(t){const e=t.split("R")[1].split("C"),n=parseFloat(e[0])-1,r=parseFloat(e[1])-1;return{r:n,c:r}}var Wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var HS=fs.exports,ch;function WS(){return ch||(ch=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",d=500,g="__lodash_placeholder__",h=1,v=2,m=4,E=1,I=2,b=1,w=2,A=4,T=8,U=16,P=32,Y=64,k=128,G=256,te=512,ie=30,oe="...",ue=800,be=16,Z=1,Ee=2,we=3,Ne=1/0,Fe=9007199254740991,Le=17976931348623157e292,Me=NaN,Ue=4294967295,at=Ue-1,_t=Ue>>>1,wt=[["ary",k],["bind",b],["bindKey",w],["curry",T],["curryRight",U],["flip",te],["partial",P],["partialRight",Y],["rearg",G]],ft="[object Arguments]",xt="[object Array]",Ct="[object AsyncFunction]",Wn="[object Boolean]",Bn="[object Date]",pi="[object DOMException]",Cr="[object Error]",Sr="[object Function]",Pe="[object GeneratorFunction]",Ie="[object Map]",Se="[object Number]",ze="[object Null]",Mt="[object Object]",Qs="[object Promise]",Js="[object Proxy]",mi="[object RegExp]",bn="[object Set]",Ei="[object String]",Hi="[object Symbol]",Ql="[object Undefined]",et="[object WeakMap]",Yo="[object WeakSet]",jo="[object ArrayBuffer]",Wi="[object DataView]",Jl="[object Float32Array]",ec="[object Float64Array]",tc="[object Int8Array]",nc="[object Int16Array]",rc="[object Int32Array]",ic="[object Uint8Array]",oc="[object Uint8ClampedArray]",sc="[object Uint16Array]",ac="[object Uint32Array]",fm=/\b__p \+= '';/g,gm=/\b(__p \+=) '' \+/g,hm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,I_=/&(?:amp|lt|gt|quot|#39);/g,w_=/[&<>"']/g,vm=RegExp(I_.source),pm=RegExp(w_.source),mm=/<%-([\s\S]+?)%>/g,Em=/<%([\s\S]+?)%>/g,y_=/<%=([\s\S]+?)%>/g,Cm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bm=/^\w*$/,Im=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lc=/[\\^$.*+?()[\]{}|]/g,wm=RegExp(lc.source),cc=/^\s+/,ym=/\s/,Om=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Am=/\{\n\/\* \[wrapped with (.+)\] \*/,xm=/,? & /,Lm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Nm=/[()=,{}\[\]\/\s]/,Sm=/\\(\\)?/g,Dm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,O_=/\w*$/,Rm=/^[-+]0x[0-9a-f]+$/i,Tm=/^0b[01]+$/i,km=/^\[object .+?Constructor\]$/,Mm=/^0o[0-7]+$/i,Um=/^(?:0|[1-9]\d*)$/,Gm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ea=/($^)/,$m=/['\n\r\u2028\u2029\\]/g,ta="\\ud800-\\udfff",Fm="\\u0300-\\u036f",Pm="\\ufe20-\\ufe2f",zm="\\u20d0-\\u20ff",A_=Fm+Pm+zm,x_="\\u2700-\\u27bf",L_="a-z\\xdf-\\xf6\\xf8-\\xff",Hm="\\xac\\xb1\\xd7\\xf7",Wm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bm="\\u2000-\\u206f",Ym=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",N_="A-Z\\xc0-\\xd6\\xd8-\\xde",S_="\\ufe0e\\ufe0f",D_=Hm+Wm+Bm+Ym,uc="['’]",jm="["+ta+"]",R_="["+D_+"]",na="["+A_+"]",T_="\\d+",Km="["+x_+"]",k_="["+L_+"]",M_="[^"+ta+D_+T_+x_+L_+N_+"]",dc="\\ud83c[\\udffb-\\udfff]",Vm="(?:"+na+"|"+dc+")",U_="[^"+ta+"]",_c="(?:\\ud83c[\\udde6-\\uddff]){2}",fc="[\\ud800-\\udbff][\\udc00-\\udfff]",Bi="["+N_+"]",G_="\\u200d",$_="(?:"+k_+"|"+M_+")",Xm="(?:"+Bi+"|"+M_+")",F_="(?:"+uc+"(?:d|ll|m|re|s|t|ve))?",P_="(?:"+uc+"(?:D|LL|M|RE|S|T|VE))?",z_=Vm+"?",H_="["+S_+"]?",qm="(?:"+G_+"(?:"+[U_,_c,fc].join("|")+")"+H_+z_+")*",Zm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",W_=H_+z_+qm,Jm="(?:"+[Km,_c,fc].join("|")+")"+W_,e1="(?:"+[U_+na+"?",na,_c,fc,jm].join("|")+")",t1=RegExp(uc,"g"),n1=RegExp(na,"g"),gc=RegExp(dc+"(?="+dc+")|"+e1+W_,"g"),r1=RegExp([Bi+"?"+k_+"+"+F_+"(?="+[R_,Bi,"$"].join("|")+")",Xm+"+"+P_+"(?="+[R_,Bi+$_,"$"].join("|")+")",Bi+"?"+$_+"+"+F_,Bi+"+"+P_,Qm,Zm,T_,Jm].join("|"),"g"),i1=RegExp("["+G_+ta+A_+S_+"]"),o1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,s1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],a1=-1,$t={};$t[Jl]=$t[ec]=$t[tc]=$t[nc]=$t[rc]=$t[ic]=$t[oc]=$t[sc]=$t[ac]=!0,$t[ft]=$t[xt]=$t[jo]=$t[Wn]=$t[Wi]=$t[Bn]=$t[Cr]=$t[Sr]=$t[Ie]=$t[Se]=$t[Mt]=$t[mi]=$t[bn]=$t[Ei]=$t[et]=!1;var Ut={};Ut[ft]=Ut[xt]=Ut[jo]=Ut[Wi]=Ut[Wn]=Ut[Bn]=Ut[Jl]=Ut[ec]=Ut[tc]=Ut[nc]=Ut[rc]=Ut[Ie]=Ut[Se]=Ut[Mt]=Ut[mi]=Ut[bn]=Ut[Ei]=Ut[Hi]=Ut[ic]=Ut[oc]=Ut[sc]=Ut[ac]=!0,Ut[Cr]=Ut[Sr]=Ut[et]=!1;var l1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},c1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},d1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},_1=parseFloat,f1=parseInt,B_=typeof Wa=="object"&&Wa&&Wa.Object===Object&&Wa,g1=typeof self=="object"&&self&&self.Object===Object&&self,sn=B_||g1||Function("return this")(),hc=e&&!e.nodeType&&e,Ci=hc&&!0&&t&&!t.nodeType&&t,Y_=Ci&&Ci.exports===hc,vc=Y_&&B_.process,Yn=function(){try{var V=Ci&&Ci.require&&Ci.require("util").types;return V||vc&&vc.binding&&vc.binding("util")}catch{}}(),j_=Yn&&Yn.isArrayBuffer,K_=Yn&&Yn.isDate,V_=Yn&&Yn.isMap,X_=Yn&&Yn.isRegExp,q_=Yn&&Yn.isSet,Z_=Yn&&Yn.isTypedArray;function xn(V,se,re){switch(re.length){case 0:return V.call(se);case 1:return V.call(se,re[0]);case 2:return V.call(se,re[0],re[1]);case 3:return V.call(se,re[0],re[1],re[2])}return V.apply(se,re)}function h1(V,se,re,Te){for(var tt=-1,bt=V==null?0:V.length;++tt<bt;){var Xt=V[tt];se(Te,Xt,re(Xt),V)}return Te}function jn(V,se){for(var re=-1,Te=V==null?0:V.length;++re<Te&&se(V[re],re,V)!==!1;);return V}function v1(V,se){for(var re=V==null?0:V.length;re--&&se(V[re],re,V)!==!1;);return V}function Q_(V,se){for(var re=-1,Te=V==null?0:V.length;++re<Te;)if(!se(V[re],re,V))return!1;return!0}function Qr(V,se){for(var re=-1,Te=V==null?0:V.length,tt=0,bt=[];++re<Te;){var Xt=V[re];se(Xt,re,V)&&(bt[tt++]=Xt)}return bt}function ra(V,se){var re=V==null?0:V.length;return!!re&&Yi(V,se,0)>-1}function pc(V,se,re){for(var Te=-1,tt=V==null?0:V.length;++Te<tt;)if(re(se,V[Te]))return!0;return!1}function Pt(V,se){for(var re=-1,Te=V==null?0:V.length,tt=Array(Te);++re<Te;)tt[re]=se(V[re],re,V);return tt}function Jr(V,se){for(var re=-1,Te=se.length,tt=V.length;++re<Te;)V[tt+re]=se[re];return V}function mc(V,se,re,Te){var tt=-1,bt=V==null?0:V.length;for(Te&&bt&&(re=V[++tt]);++tt<bt;)re=se(re,V[tt],tt,V);return re}function p1(V,se,re,Te){var tt=V==null?0:V.length;for(Te&&tt&&(re=V[--tt]);tt--;)re=se(re,V[tt],tt,V);return re}function Ec(V,se){for(var re=-1,Te=V==null?0:V.length;++re<Te;)if(se(V[re],re,V))return!0;return!1}var m1=Cc("length");function E1(V){return V.split("")}function C1(V){return V.match(Lm)||[]}function J_(V,se,re){var Te;return re(V,function(tt,bt,Xt){if(se(tt,bt,Xt))return Te=bt,!1}),Te}function ia(V,se,re,Te){for(var tt=V.length,bt=re+(Te?1:-1);Te?bt--:++bt<tt;)if(se(V[bt],bt,V))return bt;return-1}function Yi(V,se,re){return se===se?R1(V,se,re):ia(V,ef,re)}function b1(V,se,re,Te){for(var tt=re-1,bt=V.length;++tt<bt;)if(Te(V[tt],se))return tt;return-1}function ef(V){return V!==V}function tf(V,se){var re=V==null?0:V.length;return re?Ic(V,se)/re:Me}function Cc(V){return function(se){return se==null?n:se[V]}}function bc(V){return function(se){return V==null?n:V[se]}}function nf(V,se,re,Te,tt){return tt(V,function(bt,Xt,Tt){re=Te?(Te=!1,bt):se(re,bt,Xt,Tt)}),re}function I1(V,se){var re=V.length;for(V.sort(se);re--;)V[re]=V[re].value;return V}function Ic(V,se){for(var re,Te=-1,tt=V.length;++Te<tt;){var bt=se(V[Te]);bt!==n&&(re=re===n?bt:re+bt)}return re}function wc(V,se){for(var re=-1,Te=Array(V);++re<V;)Te[re]=se(re);return Te}function w1(V,se){return Pt(se,function(re){return[re,V[re]]})}function rf(V){return V&&V.slice(0,lf(V)+1).replace(cc,"")}function Ln(V){return function(se){return V(se)}}function yc(V,se){return Pt(se,function(re){return V[re]})}function Ko(V,se){return V.has(se)}function of(V,se){for(var re=-1,Te=V.length;++re<Te&&Yi(se,V[re],0)>-1;);return re}function sf(V,se){for(var re=V.length;re--&&Yi(se,V[re],0)>-1;);return re}function y1(V,se){for(var re=V.length,Te=0;re--;)V[re]===se&&++Te;return Te}var O1=bc(l1),A1=bc(c1);function x1(V){return"\\"+d1[V]}function L1(V,se){return V==null?n:V[se]}function ji(V){return i1.test(V)}function N1(V){return o1.test(V)}function S1(V){for(var se,re=[];!(se=V.next()).done;)re.push(se.value);return re}function Oc(V){var se=-1,re=Array(V.size);return V.forEach(function(Te,tt){re[++se]=[tt,Te]}),re}function af(V,se){return function(re){return V(se(re))}}function ei(V,se){for(var re=-1,Te=V.length,tt=0,bt=[];++re<Te;){var Xt=V[re];(Xt===se||Xt===g)&&(V[re]=g,bt[tt++]=re)}return bt}function oa(V){var se=-1,re=Array(V.size);return V.forEach(function(Te){re[++se]=Te}),re}function D1(V){var se=-1,re=Array(V.size);return V.forEach(function(Te){re[++se]=[Te,Te]}),re}function R1(V,se,re){for(var Te=re-1,tt=V.length;++Te<tt;)if(V[Te]===se)return Te;return-1}function T1(V,se,re){for(var Te=re+1;Te--;)if(V[Te]===se)return Te;return Te}function Ki(V){return ji(V)?M1(V):m1(V)}function _r(V){return ji(V)?U1(V):E1(V)}function lf(V){for(var se=V.length;se--&&ym.test(V.charAt(se)););return se}var k1=bc(u1);function M1(V){for(var se=gc.lastIndex=0;gc.test(V);)++se;return se}function U1(V){return V.match(gc)||[]}function G1(V){return V.match(r1)||[]}var $1=function V(se){se=se==null?sn:Vi.defaults(sn.Object(),se,Vi.pick(sn,s1));var re=se.Array,Te=se.Date,tt=se.Error,bt=se.Function,Xt=se.Math,Tt=se.Object,Ac=se.RegExp,F1=se.String,Kn=se.TypeError,sa=re.prototype,P1=bt.prototype,Xi=Tt.prototype,aa=se["__core-js_shared__"],la=P1.toString,At=Xi.hasOwnProperty,z1=0,cf=function(){var s=/[^.]+$/.exec(aa&&aa.keys&&aa.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),ca=Xi.toString,H1=la.call(Tt),W1=sn._,B1=Ac("^"+la.call(At).replace(lc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ua=Y_?se.Buffer:n,ti=se.Symbol,da=se.Uint8Array,uf=ua?ua.allocUnsafe:n,_a=af(Tt.getPrototypeOf,Tt),df=Tt.create,_f=Xi.propertyIsEnumerable,fa=sa.splice,ff=ti?ti.isConcatSpreadable:n,Vo=ti?ti.iterator:n,bi=ti?ti.toStringTag:n,ga=function(){try{var s=Ai(Tt,"defineProperty");return s({},"",{}),s}catch{}}(),Y1=se.clearTimeout!==sn.clearTimeout&&se.clearTimeout,j1=Te&&Te.now!==sn.Date.now&&Te.now,K1=se.setTimeout!==sn.setTimeout&&se.setTimeout,ha=Xt.ceil,va=Xt.floor,xc=Tt.getOwnPropertySymbols,V1=ua?ua.isBuffer:n,gf=se.isFinite,X1=sa.join,q1=af(Tt.keys,Tt),qt=Xt.max,un=Xt.min,Z1=Te.now,Q1=se.parseInt,hf=Xt.random,J1=sa.reverse,Lc=Ai(se,"DataView"),Xo=Ai(se,"Map"),Nc=Ai(se,"Promise"),qi=Ai(se,"Set"),qo=Ai(se,"WeakMap"),Zo=Ai(Tt,"create"),pa=qo&&new qo,Zi={},eE=xi(Lc),tE=xi(Xo),nE=xi(Nc),rE=xi(qi),iE=xi(qo),ma=ti?ti.prototype:n,Qo=ma?ma.valueOf:n,vf=ma?ma.toString:n;function S(s){if(Wt(s)&&!nt(s)&&!(s instanceof ht)){if(s instanceof Vn)return s;if(At.call(s,"__wrapped__"))return pg(s)}return new Vn(s)}var Qi=function(){function s(){}return function(c){if(!zt(c))return{};if(df)return df(c);s.prototype=c;var p=new s;return s.prototype=n,p}}();function Ea(){}function Vn(s,c){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=n}S.templateSettings={escape:mm,evaluate:Em,interpolate:y_,variable:"",imports:{_:S}},S.prototype=Ea.prototype,S.prototype.constructor=S,Vn.prototype=Qi(Ea.prototype),Vn.prototype.constructor=Vn;function ht(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ue,this.__views__=[]}function oE(){var s=new ht(this.__wrapped__);return s.__actions__=In(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=In(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=In(this.__views__),s}function sE(){if(this.__filtered__){var s=new ht(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function aE(){var s=this.__wrapped__.value(),c=this.__dir__,p=nt(s),C=c<0,y=p?s.length:0,R=E0(0,y,this.__views__),F=R.start,j=R.end,q=j-F,de=C?j:F-1,_e=this.__iteratees__,ge=_e.length,Ae=0,$e=un(q,this.__takeCount__);if(!p||!C&&y==q&&$e==q)return Pf(s,this.__actions__);var Ke=[];e:for(;q--&&Ae<$e;){de+=c;for(var lt=-1,Ve=s[de];++lt<ge;){var gt=_e[lt],vt=gt.iteratee,Dn=gt.type,vn=vt(Ve);if(Dn==Ee)Ve=vn;else if(!vn){if(Dn==Z)continue e;break e}}Ke[Ae++]=Ve}return Ke}ht.prototype=Qi(Ea.prototype),ht.prototype.constructor=ht;function Ii(s){var c=-1,p=s==null?0:s.length;for(this.clear();++c<p;){var C=s[c];this.set(C[0],C[1])}}function lE(){this.__data__=Zo?Zo(null):{},this.size=0}function cE(s){var c=this.has(s)&&delete this.__data__[s];return this.size-=c?1:0,c}function uE(s){var c=this.__data__;if(Zo){var p=c[s];return p===u?n:p}return At.call(c,s)?c[s]:n}function dE(s){var c=this.__data__;return Zo?c[s]!==n:At.call(c,s)}function _E(s,c){var p=this.__data__;return this.size+=this.has(s)?0:1,p[s]=Zo&&c===n?u:c,this}Ii.prototype.clear=lE,Ii.prototype.delete=cE,Ii.prototype.get=uE,Ii.prototype.has=dE,Ii.prototype.set=_E;function Dr(s){var c=-1,p=s==null?0:s.length;for(this.clear();++c<p;){var C=s[c];this.set(C[0],C[1])}}function fE(){this.__data__=[],this.size=0}function gE(s){var c=this.__data__,p=Ca(c,s);if(p<0)return!1;var C=c.length-1;return p==C?c.pop():fa.call(c,p,1),--this.size,!0}function hE(s){var c=this.__data__,p=Ca(c,s);return p<0?n:c[p][1]}function vE(s){return Ca(this.__data__,s)>-1}function pE(s,c){var p=this.__data__,C=Ca(p,s);return C<0?(++this.size,p.push([s,c])):p[C][1]=c,this}Dr.prototype.clear=fE,Dr.prototype.delete=gE,Dr.prototype.get=hE,Dr.prototype.has=vE,Dr.prototype.set=pE;function Rr(s){var c=-1,p=s==null?0:s.length;for(this.clear();++c<p;){var C=s[c];this.set(C[0],C[1])}}function mE(){this.size=0,this.__data__={hash:new Ii,map:new(Xo||Dr),string:new Ii}}function EE(s){var c=Ra(this,s).delete(s);return this.size-=c?1:0,c}function CE(s){return Ra(this,s).get(s)}function bE(s){return Ra(this,s).has(s)}function IE(s,c){var p=Ra(this,s),C=p.size;return p.set(s,c),this.size+=p.size==C?0:1,this}Rr.prototype.clear=mE,Rr.prototype.delete=EE,Rr.prototype.get=CE,Rr.prototype.has=bE,Rr.prototype.set=IE;function wi(s){var c=-1,p=s==null?0:s.length;for(this.__data__=new Rr;++c<p;)this.add(s[c])}function wE(s){return this.__data__.set(s,u),this}function yE(s){return this.__data__.has(s)}wi.prototype.add=wi.prototype.push=wE,wi.prototype.has=yE;function fr(s){var c=this.__data__=new Dr(s);this.size=c.size}function OE(){this.__data__=new Dr,this.size=0}function AE(s){var c=this.__data__,p=c.delete(s);return this.size=c.size,p}function xE(s){return this.__data__.get(s)}function LE(s){return this.__data__.has(s)}function NE(s,c){var p=this.__data__;if(p instanceof Dr){var C=p.__data__;if(!Xo||C.length<i-1)return C.push([s,c]),this.size=++p.size,this;p=this.__data__=new Rr(C)}return p.set(s,c),this.size=p.size,this}fr.prototype.clear=OE,fr.prototype.delete=AE,fr.prototype.get=xE,fr.prototype.has=LE,fr.prototype.set=NE;function pf(s,c){var p=nt(s),C=!p&&Li(s),y=!p&&!C&&si(s),R=!p&&!C&&!y&&no(s),F=p||C||y||R,j=F?wc(s.length,F1):[],q=j.length;for(var de in s)(c||At.call(s,de))&&!(F&&(de=="length"||y&&(de=="offset"||de=="parent")||R&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Ur(de,q)))&&j.push(de);return j}function mf(s){var c=s.length;return c?s[Pc(0,c-1)]:n}function SE(s,c){return Ta(In(s),yi(c,0,s.length))}function DE(s){return Ta(In(s))}function Sc(s,c,p){(p!==n&&!gr(s[c],p)||p===n&&!(c in s))&&Tr(s,c,p)}function Jo(s,c,p){var C=s[c];(!(At.call(s,c)&&gr(C,p))||p===n&&!(c in s))&&Tr(s,c,p)}function Ca(s,c){for(var p=s.length;p--;)if(gr(s[p][0],c))return p;return-1}function RE(s,c,p,C){return ni(s,function(y,R,F){c(C,y,p(y),F)}),C}function Ef(s,c){return s&&Ir(c,Jt(c),s)}function TE(s,c){return s&&Ir(c,yn(c),s)}function Tr(s,c,p){c=="__proto__"&&ga?ga(s,c,{configurable:!0,enumerable:!0,value:p,writable:!0}):s[c]=p}function Dc(s,c){for(var p=-1,C=c.length,y=re(C),R=s==null;++p<C;)y[p]=R?n:du(s,c[p]);return y}function yi(s,c,p){return s===s&&(p!==n&&(s=s<=p?s:p),c!==n&&(s=s>=c?s:c)),s}function Xn(s,c,p,C,y,R){var F,j=c&h,q=c&v,de=c&m;if(p&&(F=y?p(s,C,y,R):p(s)),F!==n)return F;if(!zt(s))return s;var _e=nt(s);if(_e){if(F=b0(s),!j)return In(s,F)}else{var ge=dn(s),Ae=ge==Sr||ge==Pe;if(si(s))return Wf(s,j);if(ge==Mt||ge==ft||Ae&&!y){if(F=q||Ae?{}:lg(s),!j)return q?u0(s,TE(F,s)):c0(s,Ef(F,s))}else{if(!Ut[ge])return y?s:{};F=I0(s,ge,j)}}R||(R=new fr);var $e=R.get(s);if($e)return $e;R.set(s,F),Gg(s)?s.forEach(function(Ve){F.add(Xn(Ve,c,p,Ve,s,R))}):Mg(s)&&s.forEach(function(Ve,gt){F.set(gt,Xn(Ve,c,p,gt,s,R))});var Ke=de?q?Zc:qc:q?yn:Jt,lt=_e?n:Ke(s);return jn(lt||s,function(Ve,gt){lt&&(gt=Ve,Ve=s[gt]),Jo(F,gt,Xn(Ve,c,p,gt,s,R))}),F}function kE(s){var c=Jt(s);return function(p){return Cf(p,s,c)}}function Cf(s,c,p){var C=p.length;if(s==null)return!C;for(s=Tt(s);C--;){var y=p[C],R=c[y],F=s[y];if(F===n&&!(y in s)||!R(F))return!1}return!0}function bf(s,c,p){if(typeof s!="function")throw new Kn(a);return ss(function(){s.apply(n,p)},c)}function es(s,c,p,C){var y=-1,R=ra,F=!0,j=s.length,q=[],de=c.length;if(!j)return q;p&&(c=Pt(c,Ln(p))),C?(R=pc,F=!1):c.length>=i&&(R=Ko,F=!1,c=new wi(c));e:for(;++y<j;){var _e=s[y],ge=p==null?_e:p(_e);if(_e=C||_e!==0?_e:0,F&&ge===ge){for(var Ae=de;Ae--;)if(c[Ae]===ge)continue e;q.push(_e)}else R(c,ge,C)||q.push(_e)}return q}var ni=Vf(br),If=Vf(Tc,!0);function ME(s,c){var p=!0;return ni(s,function(C,y,R){return p=!!c(C,y,R),p}),p}function ba(s,c,p){for(var C=-1,y=s.length;++C<y;){var R=s[C],F=c(R);if(F!=null&&(j===n?F===F&&!Sn(F):p(F,j)))var j=F,q=R}return q}function UE(s,c,p,C){var y=s.length;for(p=ot(p),p<0&&(p=-p>y?0:y+p),C=C===n||C>y?y:ot(C),C<0&&(C+=y),C=p>C?0:Fg(C);p<C;)s[p++]=c;return s}function wf(s,c){var p=[];return ni(s,function(C,y,R){c(C,y,R)&&p.push(C)}),p}function an(s,c,p,C,y){var R=-1,F=s.length;for(p||(p=y0),y||(y=[]);++R<F;){var j=s[R];c>0&&p(j)?c>1?an(j,c-1,p,C,y):Jr(y,j):C||(y[y.length]=j)}return y}var Rc=Xf(),yf=Xf(!0);function br(s,c){return s&&Rc(s,c,Jt)}function Tc(s,c){return s&&yf(s,c,Jt)}function Ia(s,c){return Qr(c,function(p){return Gr(s[p])})}function Oi(s,c){c=ii(c,s);for(var p=0,C=c.length;s!=null&&p<C;)s=s[wr(c[p++])];return p&&p==C?s:n}function Of(s,c,p){var C=c(s);return nt(s)?C:Jr(C,p(s))}function gn(s){return s==null?s===n?Ql:ze:bi&&bi in Tt(s)?m0(s):D0(s)}function kc(s,c){return s>c}function GE(s,c){return s!=null&&At.call(s,c)}function $E(s,c){return s!=null&&c in Tt(s)}function FE(s,c,p){return s>=un(c,p)&&s<qt(c,p)}function Mc(s,c,p){for(var C=p?pc:ra,y=s[0].length,R=s.length,F=R,j=re(R),q=1/0,de=[];F--;){var _e=s[F];F&&c&&(_e=Pt(_e,Ln(c))),q=un(_e.length,q),j[F]=!p&&(c||y>=120&&_e.length>=120)?new wi(F&&_e):n}_e=s[0];var ge=-1,Ae=j[0];e:for(;++ge<y&&de.length<q;){var $e=_e[ge],Ke=c?c($e):$e;if($e=p||$e!==0?$e:0,!(Ae?Ko(Ae,Ke):C(de,Ke,p))){for(F=R;--F;){var lt=j[F];if(!(lt?Ko(lt,Ke):C(s[F],Ke,p)))continue e}Ae&&Ae.push(Ke),de.push($e)}}return de}function PE(s,c,p,C){return br(s,function(y,R,F){c(C,p(y),R,F)}),C}function ts(s,c,p){c=ii(c,s),s=_g(s,c);var C=s==null?s:s[wr(Zn(c))];return C==null?n:xn(C,s,p)}function Af(s){return Wt(s)&&gn(s)==ft}function zE(s){return Wt(s)&&gn(s)==jo}function HE(s){return Wt(s)&&gn(s)==Bn}function ns(s,c,p,C,y){return s===c?!0:s==null||c==null||!Wt(s)&&!Wt(c)?s!==s&&c!==c:WE(s,c,p,C,ns,y)}function WE(s,c,p,C,y,R){var F=nt(s),j=nt(c),q=F?xt:dn(s),de=j?xt:dn(c);q=q==ft?Mt:q,de=de==ft?Mt:de;var _e=q==Mt,ge=de==Mt,Ae=q==de;if(Ae&&si(s)){if(!si(c))return!1;F=!0,_e=!1}if(Ae&&!_e)return R||(R=new fr),F||no(s)?og(s,c,p,C,y,R):v0(s,c,q,p,C,y,R);if(!(p&E)){var $e=_e&&At.call(s,"__wrapped__"),Ke=ge&&At.call(c,"__wrapped__");if($e||Ke){var lt=$e?s.value():s,Ve=Ke?c.value():c;return R||(R=new fr),y(lt,Ve,p,C,R)}}return Ae?(R||(R=new fr),p0(s,c,p,C,y,R)):!1}function BE(s){return Wt(s)&&dn(s)==Ie}function Uc(s,c,p,C){var y=p.length,R=y,F=!C;if(s==null)return!R;for(s=Tt(s);y--;){var j=p[y];if(F&&j[2]?j[1]!==s[j[0]]:!(j[0]in s))return!1}for(;++y<R;){j=p[y];var q=j[0],de=s[q],_e=j[1];if(F&&j[2]){if(de===n&&!(q in s))return!1}else{var ge=new fr;if(C)var Ae=C(de,_e,q,s,c,ge);if(!(Ae===n?ns(_e,de,E|I,C,ge):Ae))return!1}}return!0}function xf(s){if(!zt(s)||A0(s))return!1;var c=Gr(s)?B1:km;return c.test(xi(s))}function YE(s){return Wt(s)&&gn(s)==mi}function jE(s){return Wt(s)&&dn(s)==bn}function KE(s){return Wt(s)&&Fa(s.length)&&!!$t[gn(s)]}function Lf(s){return typeof s=="function"?s:s==null?On:typeof s=="object"?nt(s)?Df(s[0],s[1]):Sf(s):qg(s)}function Gc(s){if(!os(s))return q1(s);var c=[];for(var p in Tt(s))At.call(s,p)&&p!="constructor"&&c.push(p);return c}function VE(s){if(!zt(s))return S0(s);var c=os(s),p=[];for(var C in s)C=="constructor"&&(c||!At.call(s,C))||p.push(C);return p}function $c(s,c){return s<c}function Nf(s,c){var p=-1,C=wn(s)?re(s.length):[];return ni(s,function(y,R,F){C[++p]=c(y,R,F)}),C}function Sf(s){var c=Jc(s);return c.length==1&&c[0][2]?ug(c[0][0],c[0][1]):function(p){return p===s||Uc(p,s,c)}}function Df(s,c){return tu(s)&&cg(c)?ug(wr(s),c):function(p){var C=du(p,s);return C===n&&C===c?_u(p,s):ns(c,C,E|I)}}function wa(s,c,p,C,y){s!==c&&Rc(c,function(R,F){if(y||(y=new fr),zt(R))XE(s,c,F,p,wa,C,y);else{var j=C?C(ru(s,F),R,F+"",s,c,y):n;j===n&&(j=R),Sc(s,F,j)}},yn)}function XE(s,c,p,C,y,R,F){var j=ru(s,p),q=ru(c,p),de=F.get(q);if(de){Sc(s,p,de);return}var _e=R?R(j,q,p+"",s,c,F):n,ge=_e===n;if(ge){var Ae=nt(q),$e=!Ae&&si(q),Ke=!Ae&&!$e&&no(q);_e=q,Ae||$e||Ke?nt(j)?_e=j:jt(j)?_e=In(j):$e?(ge=!1,_e=Wf(q,!0)):Ke?(ge=!1,_e=Bf(q,!0)):_e=[]:as(q)||Li(q)?(_e=j,Li(j)?_e=Pg(j):(!zt(j)||Gr(j))&&(_e=lg(q))):ge=!1}ge&&(F.set(q,_e),y(_e,q,C,R,F),F.delete(q)),Sc(s,p,_e)}function Rf(s,c){var p=s.length;if(p)return c+=c<0?p:0,Ur(c,p)?s[c]:n}function Tf(s,c,p){c.length?c=Pt(c,function(R){return nt(R)?function(F){return Oi(F,R.length===1?R[0]:R)}:R}):c=[On];var C=-1;c=Pt(c,Ln(Ye()));var y=Nf(s,function(R,F,j){var q=Pt(c,function(de){return de(R)});return{criteria:q,index:++C,value:R}});return I1(y,function(R,F){return l0(R,F,p)})}function qE(s,c){return kf(s,c,function(p,C){return _u(s,C)})}function kf(s,c,p){for(var C=-1,y=c.length,R={};++C<y;){var F=c[C],j=Oi(s,F);p(j,F)&&rs(R,ii(F,s),j)}return R}function ZE(s){return function(c){return Oi(c,s)}}function Fc(s,c,p,C){var y=C?b1:Yi,R=-1,F=c.length,j=s;for(s===c&&(c=In(c)),p&&(j=Pt(s,Ln(p)));++R<F;)for(var q=0,de=c[R],_e=p?p(de):de;(q=y(j,_e,q,C))>-1;)j!==s&&fa.call(j,q,1),fa.call(s,q,1);return s}function Mf(s,c){for(var p=s?c.length:0,C=p-1;p--;){var y=c[p];if(p==C||y!==R){var R=y;Ur(y)?fa.call(s,y,1):Wc(s,y)}}return s}function Pc(s,c){return s+va(hf()*(c-s+1))}function QE(s,c,p,C){for(var y=-1,R=qt(ha((c-s)/(p||1)),0),F=re(R);R--;)F[C?R:++y]=s,s+=p;return F}function zc(s,c){var p="";if(!s||c<1||c>Fe)return p;do c%2&&(p+=s),c=va(c/2),c&&(s+=s);while(c);return p}function ut(s,c){return iu(dg(s,c,On),s+"")}function JE(s){return mf(ro(s))}function e0(s,c){var p=ro(s);return Ta(p,yi(c,0,p.length))}function rs(s,c,p,C){if(!zt(s))return s;c=ii(c,s);for(var y=-1,R=c.length,F=R-1,j=s;j!=null&&++y<R;){var q=wr(c[y]),de=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(y!=F){var _e=j[q];de=C?C(_e,q,j):n,de===n&&(de=zt(_e)?_e:Ur(c[y+1])?[]:{})}Jo(j,q,de),j=j[q]}return s}var Uf=pa?function(s,c){return pa.set(s,c),s}:On,t0=ga?function(s,c){return ga(s,"toString",{configurable:!0,enumerable:!1,value:gu(c),writable:!0})}:On;function n0(s){return Ta(ro(s))}function qn(s,c,p){var C=-1,y=s.length;c<0&&(c=-c>y?0:y+c),p=p>y?y:p,p<0&&(p+=y),y=c>p?0:p-c>>>0,c>>>=0;for(var R=re(y);++C<y;)R[C]=s[C+c];return R}function r0(s,c){var p;return ni(s,function(C,y,R){return p=c(C,y,R),!p}),!!p}function ya(s,c,p){var C=0,y=s==null?C:s.length;if(typeof c=="number"&&c===c&&y<=_t){for(;C<y;){var R=C+y>>>1,F=s[R];F!==null&&!Sn(F)&&(p?F<=c:F<c)?C=R+1:y=R}return y}return Hc(s,c,On,p)}function Hc(s,c,p,C){var y=0,R=s==null?0:s.length;if(R===0)return 0;c=p(c);for(var F=c!==c,j=c===null,q=Sn(c),de=c===n;y<R;){var _e=va((y+R)/2),ge=p(s[_e]),Ae=ge!==n,$e=ge===null,Ke=ge===ge,lt=Sn(ge);if(F)var Ve=C||Ke;else de?Ve=Ke&&(C||Ae):j?Ve=Ke&&Ae&&(C||!$e):q?Ve=Ke&&Ae&&!$e&&(C||!lt):$e||lt?Ve=!1:Ve=C?ge<=c:ge<c;Ve?y=_e+1:R=_e}return un(R,at)}function Gf(s,c){for(var p=-1,C=s.length,y=0,R=[];++p<C;){var F=s[p],j=c?c(F):F;if(!p||!gr(j,q)){var q=j;R[y++]=F===0?0:F}}return R}function $f(s){return typeof s=="number"?s:Sn(s)?Me:+s}function Nn(s){if(typeof s=="string")return s;if(nt(s))return Pt(s,Nn)+"";if(Sn(s))return vf?vf.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function ri(s,c,p){var C=-1,y=ra,R=s.length,F=!0,j=[],q=j;if(p)F=!1,y=pc;else if(R>=i){var de=c?null:g0(s);if(de)return oa(de);F=!1,y=Ko,q=new wi}else q=c?[]:j;e:for(;++C<R;){var _e=s[C],ge=c?c(_e):_e;if(_e=p||_e!==0?_e:0,F&&ge===ge){for(var Ae=q.length;Ae--;)if(q[Ae]===ge)continue e;c&&q.push(ge),j.push(_e)}else y(q,ge,p)||(q!==j&&q.push(ge),j.push(_e))}return j}function Wc(s,c){return c=ii(c,s),s=_g(s,c),s==null||delete s[wr(Zn(c))]}function Ff(s,c,p,C){return rs(s,c,p(Oi(s,c)),C)}function Oa(s,c,p,C){for(var y=s.length,R=C?y:-1;(C?R--:++R<y)&&c(s[R],R,s););return p?qn(s,C?0:R,C?R+1:y):qn(s,C?R+1:0,C?y:R)}function Pf(s,c){var p=s;return p instanceof ht&&(p=p.value()),mc(c,function(C,y){return y.func.apply(y.thisArg,Jr([C],y.args))},p)}function Bc(s,c,p){var C=s.length;if(C<2)return C?ri(s[0]):[];for(var y=-1,R=re(C);++y<C;)for(var F=s[y],j=-1;++j<C;)j!=y&&(R[y]=es(R[y]||F,s[j],c,p));return ri(an(R,1),c,p)}function zf(s,c,p){for(var C=-1,y=s.length,R=c.length,F={};++C<y;){var j=C<R?c[C]:n;p(F,s[C],j)}return F}function Yc(s){return jt(s)?s:[]}function jc(s){return typeof s=="function"?s:On}function ii(s,c){return nt(s)?s:tu(s,c)?[s]:vg(yt(s))}var i0=ut;function oi(s,c,p){var C=s.length;return p=p===n?C:p,!c&&p>=C?s:qn(s,c,p)}var Hf=Y1||function(s){return sn.clearTimeout(s)};function Wf(s,c){if(c)return s.slice();var p=s.length,C=uf?uf(p):new s.constructor(p);return s.copy(C),C}function Kc(s){var c=new s.constructor(s.byteLength);return new da(c).set(new da(s)),c}function o0(s,c){var p=c?Kc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.byteLength)}function s0(s){var c=new s.constructor(s.source,O_.exec(s));return c.lastIndex=s.lastIndex,c}function a0(s){return Qo?Tt(Qo.call(s)):{}}function Bf(s,c){var p=c?Kc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.length)}function Yf(s,c){if(s!==c){var p=s!==n,C=s===null,y=s===s,R=Sn(s),F=c!==n,j=c===null,q=c===c,de=Sn(c);if(!j&&!de&&!R&&s>c||R&&F&&q&&!j&&!de||C&&F&&q||!p&&q||!y)return 1;if(!C&&!R&&!de&&s<c||de&&p&&y&&!C&&!R||j&&p&&y||!F&&y||!q)return-1}return 0}function l0(s,c,p){for(var C=-1,y=s.criteria,R=c.criteria,F=y.length,j=p.length;++C<F;){var q=Yf(y[C],R[C]);if(q){if(C>=j)return q;var de=p[C];return q*(de=="desc"?-1:1)}}return s.index-c.index}function jf(s,c,p,C){for(var y=-1,R=s.length,F=p.length,j=-1,q=c.length,de=qt(R-F,0),_e=re(q+de),ge=!C;++j<q;)_e[j]=c[j];for(;++y<F;)(ge||y<R)&&(_e[p[y]]=s[y]);for(;de--;)_e[j++]=s[y++];return _e}function Kf(s,c,p,C){for(var y=-1,R=s.length,F=-1,j=p.length,q=-1,de=c.length,_e=qt(R-j,0),ge=re(_e+de),Ae=!C;++y<_e;)ge[y]=s[y];for(var $e=y;++q<de;)ge[$e+q]=c[q];for(;++F<j;)(Ae||y<R)&&(ge[$e+p[F]]=s[y++]);return ge}function In(s,c){var p=-1,C=s.length;for(c||(c=re(C));++p<C;)c[p]=s[p];return c}function Ir(s,c,p,C){var y=!p;p||(p={});for(var R=-1,F=c.length;++R<F;){var j=c[R],q=C?C(p[j],s[j],j,p,s):n;q===n&&(q=s[j]),y?Tr(p,j,q):Jo(p,j,q)}return p}function c0(s,c){return Ir(s,eu(s),c)}function u0(s,c){return Ir(s,sg(s),c)}function Aa(s,c){return function(p,C){var y=nt(p)?h1:RE,R=c?c():{};return y(p,s,Ye(C,2),R)}}function Ji(s){return ut(function(c,p){var C=-1,y=p.length,R=y>1?p[y-1]:n,F=y>2?p[2]:n;for(R=s.length>3&&typeof R=="function"?(y--,R):n,F&&hn(p[0],p[1],F)&&(R=y<3?n:R,y=1),c=Tt(c);++C<y;){var j=p[C];j&&s(c,j,C,R)}return c})}function Vf(s,c){return function(p,C){if(p==null)return p;if(!wn(p))return s(p,C);for(var y=p.length,R=c?y:-1,F=Tt(p);(c?R--:++R<y)&&C(F[R],R,F)!==!1;);return p}}function Xf(s){return function(c,p,C){for(var y=-1,R=Tt(c),F=C(c),j=F.length;j--;){var q=F[s?j:++y];if(p(R[q],q,R)===!1)break}return c}}function d0(s,c,p){var C=c&b,y=is(s);function R(){var F=this&&this!==sn&&this instanceof R?y:s;return F.apply(C?p:this,arguments)}return R}function qf(s){return function(c){c=yt(c);var p=ji(c)?_r(c):n,C=p?p[0]:c.charAt(0),y=p?oi(p,1).join(""):c.slice(1);return C[s]()+y}}function eo(s){return function(c){return mc(Vg(Kg(c).replace(t1,"")),s,"")}}function is(s){return function(){var c=arguments;switch(c.length){case 0:return new s;case 1:return new s(c[0]);case 2:return new s(c[0],c[1]);case 3:return new s(c[0],c[1],c[2]);case 4:return new s(c[0],c[1],c[2],c[3]);case 5:return new s(c[0],c[1],c[2],c[3],c[4]);case 6:return new s(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new s(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var p=Qi(s.prototype),C=s.apply(p,c);return zt(C)?C:p}}function _0(s,c,p){var C=is(s);function y(){for(var R=arguments.length,F=re(R),j=R,q=to(y);j--;)F[j]=arguments[j];var de=R<3&&F[0]!==q&&F[R-1]!==q?[]:ei(F,q);if(R-=de.length,R<p)return tg(s,c,xa,y.placeholder,n,F,de,n,n,p-R);var _e=this&&this!==sn&&this instanceof y?C:s;return xn(_e,this,F)}return y}function Zf(s){return function(c,p,C){var y=Tt(c);if(!wn(c)){var R=Ye(p,3);c=Jt(c),p=function(j){return R(y[j],j,y)}}var F=s(c,p,C);return F>-1?y[R?c[F]:F]:n}}function Qf(s){return Mr(function(c){var p=c.length,C=p,y=Vn.prototype.thru;for(s&&c.reverse();C--;){var R=c[C];if(typeof R!="function")throw new Kn(a);if(y&&!F&&Da(R)=="wrapper")var F=new Vn([],!0)}for(C=F?C:p;++C<p;){R=c[C];var j=Da(R),q=j=="wrapper"?Qc(R):n;q&&nu(q[0])&&q[1]==(k|T|P|G)&&!q[4].length&&q[9]==1?F=F[Da(q[0])].apply(F,q[3]):F=R.length==1&&nu(R)?F[j]():F.thru(R)}return function(){var de=arguments,_e=de[0];if(F&&de.length==1&&nt(_e))return F.plant(_e).value();for(var ge=0,Ae=p?c[ge].apply(this,de):_e;++ge<p;)Ae=c[ge].call(this,Ae);return Ae}})}function xa(s,c,p,C,y,R,F,j,q,de){var _e=c&k,ge=c&b,Ae=c&w,$e=c&(T|U),Ke=c&te,lt=Ae?n:is(s);function Ve(){for(var gt=arguments.length,vt=re(gt),Dn=gt;Dn--;)vt[Dn]=arguments[Dn];if($e)var vn=to(Ve),Rn=y1(vt,vn);if(C&&(vt=jf(vt,C,y,$e)),R&&(vt=Kf(vt,R,F,$e)),gt-=Rn,$e&&gt<de){var Kt=ei(vt,vn);return tg(s,c,xa,Ve.placeholder,p,vt,Kt,j,q,de-gt)}var hr=ge?p:this,Fr=Ae?hr[s]:s;return gt=vt.length,j?vt=R0(vt,j):Ke&&gt>1&&vt.reverse(),_e&&q<gt&&(vt.length=q),this&&this!==sn&&this instanceof Ve&&(Fr=lt||is(Fr)),Fr.apply(hr,vt)}return Ve}function Jf(s,c){return function(p,C){return PE(p,s,c(C),{})}}function La(s,c){return function(p,C){var y;if(p===n&&C===n)return c;if(p!==n&&(y=p),C!==n){if(y===n)return C;typeof p=="string"||typeof C=="string"?(p=Nn(p),C=Nn(C)):(p=$f(p),C=$f(C)),y=s(p,C)}return y}}function Vc(s){return Mr(function(c){return c=Pt(c,Ln(Ye())),ut(function(p){var C=this;return s(c,function(y){return xn(y,C,p)})})})}function Na(s,c){c=c===n?" ":Nn(c);var p=c.length;if(p<2)return p?zc(c,s):c;var C=zc(c,ha(s/Ki(c)));return ji(c)?oi(_r(C),0,s).join(""):C.slice(0,s)}function f0(s,c,p,C){var y=c&b,R=is(s);function F(){for(var j=-1,q=arguments.length,de=-1,_e=C.length,ge=re(_e+q),Ae=this&&this!==sn&&this instanceof F?R:s;++de<_e;)ge[de]=C[de];for(;q--;)ge[de++]=arguments[++j];return xn(Ae,y?p:this,ge)}return F}function eg(s){return function(c,p,C){return C&&typeof C!="number"&&hn(c,p,C)&&(p=C=n),c=$r(c),p===n?(p=c,c=0):p=$r(p),C=C===n?c<p?1:-1:$r(C),QE(c,p,C,s)}}function Sa(s){return function(c,p){return typeof c=="string"&&typeof p=="string"||(c=Qn(c),p=Qn(p)),s(c,p)}}function tg(s,c,p,C,y,R,F,j,q,de){var _e=c&T,ge=_e?F:n,Ae=_e?n:F,$e=_e?R:n,Ke=_e?n:R;c|=_e?P:Y,c&=~(_e?Y:P),c&A||(c&=-4);var lt=[s,c,y,$e,ge,Ke,Ae,j,q,de],Ve=p.apply(n,lt);return nu(s)&&fg(Ve,lt),Ve.placeholder=C,gg(Ve,s,c)}function Xc(s){var c=Xt[s];return function(p,C){if(p=Qn(p),C=C==null?0:un(ot(C),292),C&&gf(p)){var y=(yt(p)+"e").split("e"),R=c(y[0]+"e"+(+y[1]+C));return y=(yt(R)+"e").split("e"),+(y[0]+"e"+(+y[1]-C))}return c(p)}}var g0=qi&&1/oa(new qi([,-0]))[1]==Ne?function(s){return new qi(s)}:pu;function ng(s){return function(c){var p=dn(c);return p==Ie?Oc(c):p==bn?D1(c):w1(c,s(c))}}function kr(s,c,p,C,y,R,F,j){var q=c&w;if(!q&&typeof s!="function")throw new Kn(a);var de=C?C.length:0;if(de||(c&=-97,C=y=n),F=F===n?F:qt(ot(F),0),j=j===n?j:ot(j),de-=y?y.length:0,c&Y){var _e=C,ge=y;C=y=n}var Ae=q?n:Qc(s),$e=[s,c,p,C,y,_e,ge,R,F,j];if(Ae&&N0($e,Ae),s=$e[0],c=$e[1],p=$e[2],C=$e[3],y=$e[4],j=$e[9]=$e[9]===n?q?0:s.length:qt($e[9]-de,0),!j&&c&(T|U)&&(c&=-25),!c||c==b)var Ke=d0(s,c,p);else c==T||c==U?Ke=_0(s,c,j):(c==P||c==(b|P))&&!y.length?Ke=f0(s,c,p,C):Ke=xa.apply(n,$e);var lt=Ae?Uf:fg;return gg(lt(Ke,$e),s,c)}function rg(s,c,p,C){return s===n||gr(s,Xi[p])&&!At.call(C,p)?c:s}function ig(s,c,p,C,y,R){return zt(s)&&zt(c)&&(R.set(c,s),wa(s,c,n,ig,R),R.delete(c)),s}function h0(s){return as(s)?n:s}function og(s,c,p,C,y,R){var F=p&E,j=s.length,q=c.length;if(j!=q&&!(F&&q>j))return!1;var de=R.get(s),_e=R.get(c);if(de&&_e)return de==c&&_e==s;var ge=-1,Ae=!0,$e=p&I?new wi:n;for(R.set(s,c),R.set(c,s);++ge<j;){var Ke=s[ge],lt=c[ge];if(C)var Ve=F?C(lt,Ke,ge,c,s,R):C(Ke,lt,ge,s,c,R);if(Ve!==n){if(Ve)continue;Ae=!1;break}if($e){if(!Ec(c,function(gt,vt){if(!Ko($e,vt)&&(Ke===gt||y(Ke,gt,p,C,R)))return $e.push(vt)})){Ae=!1;break}}else if(!(Ke===lt||y(Ke,lt,p,C,R))){Ae=!1;break}}return R.delete(s),R.delete(c),Ae}function v0(s,c,p,C,y,R,F){switch(p){case Wi:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case jo:return!(s.byteLength!=c.byteLength||!R(new da(s),new da(c)));case Wn:case Bn:case Se:return gr(+s,+c);case Cr:return s.name==c.name&&s.message==c.message;case mi:case Ei:return s==c+"";case Ie:var j=Oc;case bn:var q=C&E;if(j||(j=oa),s.size!=c.size&&!q)return!1;var de=F.get(s);if(de)return de==c;C|=I,F.set(s,c);var _e=og(j(s),j(c),C,y,R,F);return F.delete(s),_e;case Hi:if(Qo)return Qo.call(s)==Qo.call(c)}return!1}function p0(s,c,p,C,y,R){var F=p&E,j=qc(s),q=j.length,de=qc(c),_e=de.length;if(q!=_e&&!F)return!1;for(var ge=q;ge--;){var Ae=j[ge];if(!(F?Ae in c:At.call(c,Ae)))return!1}var $e=R.get(s),Ke=R.get(c);if($e&&Ke)return $e==c&&Ke==s;var lt=!0;R.set(s,c),R.set(c,s);for(var Ve=F;++ge<q;){Ae=j[ge];var gt=s[Ae],vt=c[Ae];if(C)var Dn=F?C(vt,gt,Ae,c,s,R):C(gt,vt,Ae,s,c,R);if(!(Dn===n?gt===vt||y(gt,vt,p,C,R):Dn)){lt=!1;break}Ve||(Ve=Ae=="constructor")}if(lt&&!Ve){var vn=s.constructor,Rn=c.constructor;vn!=Rn&&"constructor"in s&&"constructor"in c&&!(typeof vn=="function"&&vn instanceof vn&&typeof Rn=="function"&&Rn instanceof Rn)&&(lt=!1)}return R.delete(s),R.delete(c),lt}function Mr(s){return iu(dg(s,n,Cg),s+"")}function qc(s){return Of(s,Jt,eu)}function Zc(s){return Of(s,yn,sg)}var Qc=pa?function(s){return pa.get(s)}:pu;function Da(s){for(var c=s.name+"",p=Zi[c],C=At.call(Zi,c)?p.length:0;C--;){var y=p[C],R=y.func;if(R==null||R==s)return y.name}return c}function to(s){var c=At.call(S,"placeholder")?S:s;return c.placeholder}function Ye(){var s=S.iteratee||hu;return s=s===hu?Lf:s,arguments.length?s(arguments[0],arguments[1]):s}function Ra(s,c){var p=s.__data__;return O0(c)?p[typeof c=="string"?"string":"hash"]:p.map}function Jc(s){for(var c=Jt(s),p=c.length;p--;){var C=c[p],y=s[C];c[p]=[C,y,cg(y)]}return c}function Ai(s,c){var p=L1(s,c);return xf(p)?p:n}function m0(s){var c=At.call(s,bi),p=s[bi];try{s[bi]=n;var C=!0}catch{}var y=ca.call(s);return C&&(c?s[bi]=p:delete s[bi]),y}var eu=xc?function(s){return s==null?[]:(s=Tt(s),Qr(xc(s),function(c){return _f.call(s,c)}))}:mu,sg=xc?function(s){for(var c=[];s;)Jr(c,eu(s)),s=_a(s);return c}:mu,dn=gn;(Lc&&dn(new Lc(new ArrayBuffer(1)))!=Wi||Xo&&dn(new Xo)!=Ie||Nc&&dn(Nc.resolve())!=Qs||qi&&dn(new qi)!=bn||qo&&dn(new qo)!=et)&&(dn=function(s){var c=gn(s),p=c==Mt?s.constructor:n,C=p?xi(p):"";if(C)switch(C){case eE:return Wi;case tE:return Ie;case nE:return Qs;case rE:return bn;case iE:return et}return c});function E0(s,c,p){for(var C=-1,y=p.length;++C<y;){var R=p[C],F=R.size;switch(R.type){case"drop":s+=F;break;case"dropRight":c-=F;break;case"take":c=un(c,s+F);break;case"takeRight":s=qt(s,c-F);break}}return{start:s,end:c}}function C0(s){var c=s.match(Am);return c?c[1].split(xm):[]}function ag(s,c,p){c=ii(c,s);for(var C=-1,y=c.length,R=!1;++C<y;){var F=wr(c[C]);if(!(R=s!=null&&p(s,F)))break;s=s[F]}return R||++C!=y?R:(y=s==null?0:s.length,!!y&&Fa(y)&&Ur(F,y)&&(nt(s)||Li(s)))}function b0(s){var c=s.length,p=new s.constructor(c);return c&&typeof s[0]=="string"&&At.call(s,"index")&&(p.index=s.index,p.input=s.input),p}function lg(s){return typeof s.constructor=="function"&&!os(s)?Qi(_a(s)):{}}function I0(s,c,p){var C=s.constructor;switch(c){case jo:return Kc(s);case Wn:case Bn:return new C(+s);case Wi:return o0(s,p);case Jl:case ec:case tc:case nc:case rc:case ic:case oc:case sc:case ac:return Bf(s,p);case Ie:return new C;case Se:case Ei:return new C(s);case mi:return s0(s);case bn:return new C;case Hi:return a0(s)}}function w0(s,c){var p=c.length;if(!p)return s;var C=p-1;return c[C]=(p>1?"& ":"")+c[C],c=c.join(p>2?", ":" "),s.replace(Om,`{
/* [wrapped with `+c+`] */
`)}function y0(s){return nt(s)||Li(s)||!!(ff&&s&&s[ff])}function Ur(s,c){var p=typeof s;return c=c??Fe,!!c&&(p=="number"||p!="symbol"&&Um.test(s))&&s>-1&&s%1==0&&s<c}function hn(s,c,p){if(!zt(p))return!1;var C=typeof c;return(C=="number"?wn(p)&&Ur(c,p.length):C=="string"&&c in p)?gr(p[c],s):!1}function tu(s,c){if(nt(s))return!1;var p=typeof s;return p=="number"||p=="symbol"||p=="boolean"||s==null||Sn(s)?!0:bm.test(s)||!Cm.test(s)||c!=null&&s in Tt(c)}function O0(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function nu(s){var c=Da(s),p=S[c];if(typeof p!="function"||!(c in ht.prototype))return!1;if(s===p)return!0;var C=Qc(p);return!!C&&s===C[0]}function A0(s){return!!cf&&cf in s}var x0=aa?Gr:Eu;function os(s){var c=s&&s.constructor,p=typeof c=="function"&&c.prototype||Xi;return s===p}function cg(s){return s===s&&!zt(s)}function ug(s,c){return function(p){return p==null?!1:p[s]===c&&(c!==n||s in Tt(p))}}function L0(s){var c=Ga(s,function(C){return p.size===d&&p.clear(),C}),p=c.cache;return c}function N0(s,c){var p=s[1],C=c[1],y=p|C,R=y<(b|w|k),F=C==k&&p==T||C==k&&p==G&&s[7].length<=c[8]||C==(k|G)&&c[7].length<=c[8]&&p==T;if(!(R||F))return s;C&b&&(s[2]=c[2],y|=p&b?0:A);var j=c[3];if(j){var q=s[3];s[3]=q?jf(q,j,c[4]):j,s[4]=q?ei(s[3],g):c[4]}return j=c[5],j&&(q=s[5],s[5]=q?Kf(q,j,c[6]):j,s[6]=q?ei(s[5],g):c[6]),j=c[7],j&&(s[7]=j),C&k&&(s[8]=s[8]==null?c[8]:un(s[8],c[8])),s[9]==null&&(s[9]=c[9]),s[0]=c[0],s[1]=y,s}function S0(s){var c=[];if(s!=null)for(var p in Tt(s))c.push(p);return c}function D0(s){return ca.call(s)}function dg(s,c,p){return c=qt(c===n?s.length-1:c,0),function(){for(var C=arguments,y=-1,R=qt(C.length-c,0),F=re(R);++y<R;)F[y]=C[c+y];y=-1;for(var j=re(c+1);++y<c;)j[y]=C[y];return j[c]=p(F),xn(s,this,j)}}function _g(s,c){return c.length<2?s:Oi(s,qn(c,0,-1))}function R0(s,c){for(var p=s.length,C=un(c.length,p),y=In(s);C--;){var R=c[C];s[C]=Ur(R,p)?y[R]:n}return s}function ru(s,c){if(!(c==="constructor"&&typeof s[c]=="function")&&c!="__proto__")return s[c]}var fg=hg(Uf),ss=K1||function(s,c){return sn.setTimeout(s,c)},iu=hg(t0);function gg(s,c,p){var C=c+"";return iu(s,w0(C,T0(C0(C),p)))}function hg(s){var c=0,p=0;return function(){var C=Z1(),y=be-(C-p);if(p=C,y>0){if(++c>=ue)return arguments[0]}else c=0;return s.apply(n,arguments)}}function Ta(s,c){var p=-1,C=s.length,y=C-1;for(c=c===n?C:c;++p<c;){var R=Pc(p,y),F=s[R];s[R]=s[p],s[p]=F}return s.length=c,s}var vg=L0(function(s){var c=[];return s.charCodeAt(0)===46&&c.push(""),s.replace(Im,function(p,C,y,R){c.push(y?R.replace(Sm,"$1"):C||p)}),c});function wr(s){if(typeof s=="string"||Sn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function xi(s){if(s!=null){try{return la.call(s)}catch{}try{return s+""}catch{}}return""}function T0(s,c){return jn(wt,function(p){var C="_."+p[0];c&p[1]&&!ra(s,C)&&s.push(C)}),s.sort()}function pg(s){if(s instanceof ht)return s.clone();var c=new Vn(s.__wrapped__,s.__chain__);return c.__actions__=In(s.__actions__),c.__index__=s.__index__,c.__values__=s.__values__,c}function k0(s,c,p){(p?hn(s,c,p):c===n)?c=1:c=qt(ot(c),0);var C=s==null?0:s.length;if(!C||c<1)return[];for(var y=0,R=0,F=re(ha(C/c));y<C;)F[R++]=qn(s,y,y+=c);return F}function M0(s){for(var c=-1,p=s==null?0:s.length,C=0,y=[];++c<p;){var R=s[c];R&&(y[C++]=R)}return y}function U0(){var s=arguments.length;if(!s)return[];for(var c=re(s-1),p=arguments[0],C=s;C--;)c[C-1]=arguments[C];return Jr(nt(p)?In(p):[p],an(c,1))}var G0=ut(function(s,c){return jt(s)?es(s,an(c,1,jt,!0)):[]}),$0=ut(function(s,c){var p=Zn(c);return jt(p)&&(p=n),jt(s)?es(s,an(c,1,jt,!0),Ye(p,2)):[]}),F0=ut(function(s,c){var p=Zn(c);return jt(p)&&(p=n),jt(s)?es(s,an(c,1,jt,!0),n,p):[]});function P0(s,c,p){var C=s==null?0:s.length;return C?(c=p||c===n?1:ot(c),qn(s,c<0?0:c,C)):[]}function z0(s,c,p){var C=s==null?0:s.length;return C?(c=p||c===n?1:ot(c),c=C-c,qn(s,0,c<0?0:c)):[]}function H0(s,c){return s&&s.length?Oa(s,Ye(c,3),!0,!0):[]}function W0(s,c){return s&&s.length?Oa(s,Ye(c,3),!0):[]}function B0(s,c,p,C){var y=s==null?0:s.length;return y?(p&&typeof p!="number"&&hn(s,c,p)&&(p=0,C=y),UE(s,c,p,C)):[]}function mg(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:ot(p);return y<0&&(y=qt(C+y,0)),ia(s,Ye(c,3),y)}function Eg(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=C-1;return p!==n&&(y=ot(p),y=p<0?qt(C+y,0):un(y,C-1)),ia(s,Ye(c,3),y,!0)}function Cg(s){var c=s==null?0:s.length;return c?an(s,1):[]}function Y0(s){var c=s==null?0:s.length;return c?an(s,Ne):[]}function j0(s,c){var p=s==null?0:s.length;return p?(c=c===n?1:ot(c),an(s,c)):[]}function K0(s){for(var c=-1,p=s==null?0:s.length,C={};++c<p;){var y=s[c];C[y[0]]=y[1]}return C}function bg(s){return s&&s.length?s[0]:n}function V0(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:ot(p);return y<0&&(y=qt(C+y,0)),Yi(s,c,y)}function X0(s){var c=s==null?0:s.length;return c?qn(s,0,-1):[]}var q0=ut(function(s){var c=Pt(s,Yc);return c.length&&c[0]===s[0]?Mc(c):[]}),Z0=ut(function(s){var c=Zn(s),p=Pt(s,Yc);return c===Zn(p)?c=n:p.pop(),p.length&&p[0]===s[0]?Mc(p,Ye(c,2)):[]}),Q0=ut(function(s){var c=Zn(s),p=Pt(s,Yc);return c=typeof c=="function"?c:n,c&&p.pop(),p.length&&p[0]===s[0]?Mc(p,n,c):[]});function J0(s,c){return s==null?"":X1.call(s,c)}function Zn(s){var c=s==null?0:s.length;return c?s[c-1]:n}function eC(s,c,p){var C=s==null?0:s.length;if(!C)return-1;var y=C;return p!==n&&(y=ot(p),y=y<0?qt(C+y,0):un(y,C-1)),c===c?T1(s,c,y):ia(s,ef,y,!0)}function tC(s,c){return s&&s.length?Rf(s,ot(c)):n}var nC=ut(Ig);function Ig(s,c){return s&&s.length&&c&&c.length?Fc(s,c):s}function rC(s,c,p){return s&&s.length&&c&&c.length?Fc(s,c,Ye(p,2)):s}function iC(s,c,p){return s&&s.length&&c&&c.length?Fc(s,c,n,p):s}var oC=Mr(function(s,c){var p=s==null?0:s.length,C=Dc(s,c);return Mf(s,Pt(c,function(y){return Ur(y,p)?+y:y}).sort(Yf)),C});function sC(s,c){var p=[];if(!(s&&s.length))return p;var C=-1,y=[],R=s.length;for(c=Ye(c,3);++C<R;){var F=s[C];c(F,C,s)&&(p.push(F),y.push(C))}return Mf(s,y),p}function ou(s){return s==null?s:J1.call(s)}function aC(s,c,p){var C=s==null?0:s.length;return C?(p&&typeof p!="number"&&hn(s,c,p)?(c=0,p=C):(c=c==null?0:ot(c),p=p===n?C:ot(p)),qn(s,c,p)):[]}function lC(s,c){return ya(s,c)}function cC(s,c,p){return Hc(s,c,Ye(p,2))}function uC(s,c){var p=s==null?0:s.length;if(p){var C=ya(s,c);if(C<p&&gr(s[C],c))return C}return-1}function dC(s,c){return ya(s,c,!0)}function _C(s,c,p){return Hc(s,c,Ye(p,2),!0)}function fC(s,c){var p=s==null?0:s.length;if(p){var C=ya(s,c,!0)-1;if(gr(s[C],c))return C}return-1}function gC(s){return s&&s.length?Gf(s):[]}function hC(s,c){return s&&s.length?Gf(s,Ye(c,2)):[]}function vC(s){var c=s==null?0:s.length;return c?qn(s,1,c):[]}function pC(s,c,p){return s&&s.length?(c=p||c===n?1:ot(c),qn(s,0,c<0?0:c)):[]}function mC(s,c,p){var C=s==null?0:s.length;return C?(c=p||c===n?1:ot(c),c=C-c,qn(s,c<0?0:c,C)):[]}function EC(s,c){return s&&s.length?Oa(s,Ye(c,3),!1,!0):[]}function CC(s,c){return s&&s.length?Oa(s,Ye(c,3)):[]}var bC=ut(function(s){return ri(an(s,1,jt,!0))}),IC=ut(function(s){var c=Zn(s);return jt(c)&&(c=n),ri(an(s,1,jt,!0),Ye(c,2))}),wC=ut(function(s){var c=Zn(s);return c=typeof c=="function"?c:n,ri(an(s,1,jt,!0),n,c)});function yC(s){return s&&s.length?ri(s):[]}function OC(s,c){return s&&s.length?ri(s,Ye(c,2)):[]}function AC(s,c){return c=typeof c=="function"?c:n,s&&s.length?ri(s,n,c):[]}function su(s){if(!(s&&s.length))return[];var c=0;return s=Qr(s,function(p){if(jt(p))return c=qt(p.length,c),!0}),wc(c,function(p){return Pt(s,Cc(p))})}function wg(s,c){if(!(s&&s.length))return[];var p=su(s);return c==null?p:Pt(p,function(C){return xn(c,n,C)})}var xC=ut(function(s,c){return jt(s)?es(s,c):[]}),LC=ut(function(s){return Bc(Qr(s,jt))}),NC=ut(function(s){var c=Zn(s);return jt(c)&&(c=n),Bc(Qr(s,jt),Ye(c,2))}),SC=ut(function(s){var c=Zn(s);return c=typeof c=="function"?c:n,Bc(Qr(s,jt),n,c)}),DC=ut(su);function RC(s,c){return zf(s||[],c||[],Jo)}function TC(s,c){return zf(s||[],c||[],rs)}var kC=ut(function(s){var c=s.length,p=c>1?s[c-1]:n;return p=typeof p=="function"?(s.pop(),p):n,wg(s,p)});function yg(s){var c=S(s);return c.__chain__=!0,c}function MC(s,c){return c(s),s}function ka(s,c){return c(s)}var UC=Mr(function(s){var c=s.length,p=c?s[0]:0,C=this.__wrapped__,y=function(R){return Dc(R,s)};return c>1||this.__actions__.length||!(C instanceof ht)||!Ur(p)?this.thru(y):(C=C.slice(p,+p+(c?1:0)),C.__actions__.push({func:ka,args:[y],thisArg:n}),new Vn(C,this.__chain__).thru(function(R){return c&&!R.length&&R.push(n),R}))});function GC(){return yg(this)}function $C(){return new Vn(this.value(),this.__chain__)}function FC(){this.__values__===n&&(this.__values__=$g(this.value()));var s=this.__index__>=this.__values__.length,c=s?n:this.__values__[this.__index__++];return{done:s,value:c}}function PC(){return this}function zC(s){for(var c,p=this;p instanceof Ea;){var C=pg(p);C.__index__=0,C.__values__=n,c?y.__wrapped__=C:c=C;var y=C;p=p.__wrapped__}return y.__wrapped__=s,c}function HC(){var s=this.__wrapped__;if(s instanceof ht){var c=s;return this.__actions__.length&&(c=new ht(this)),c=c.reverse(),c.__actions__.push({func:ka,args:[ou],thisArg:n}),new Vn(c,this.__chain__)}return this.thru(ou)}function WC(){return Pf(this.__wrapped__,this.__actions__)}var BC=Aa(function(s,c,p){At.call(s,p)?++s[p]:Tr(s,p,1)});function YC(s,c,p){var C=nt(s)?Q_:ME;return p&&hn(s,c,p)&&(c=n),C(s,Ye(c,3))}function jC(s,c){var p=nt(s)?Qr:wf;return p(s,Ye(c,3))}var KC=Zf(mg),VC=Zf(Eg);function XC(s,c){return an(Ma(s,c),1)}function qC(s,c){return an(Ma(s,c),Ne)}function ZC(s,c,p){return p=p===n?1:ot(p),an(Ma(s,c),p)}function Og(s,c){var p=nt(s)?jn:ni;return p(s,Ye(c,3))}function Ag(s,c){var p=nt(s)?v1:If;return p(s,Ye(c,3))}var QC=Aa(function(s,c,p){At.call(s,p)?s[p].push(c):Tr(s,p,[c])});function JC(s,c,p,C){s=wn(s)?s:ro(s),p=p&&!C?ot(p):0;var y=s.length;return p<0&&(p=qt(y+p,0)),Pa(s)?p<=y&&s.indexOf(c,p)>-1:!!y&&Yi(s,c,p)>-1}var eb=ut(function(s,c,p){var C=-1,y=typeof c=="function",R=wn(s)?re(s.length):[];return ni(s,function(F){R[++C]=y?xn(c,F,p):ts(F,c,p)}),R}),tb=Aa(function(s,c,p){Tr(s,p,c)});function Ma(s,c){var p=nt(s)?Pt:Nf;return p(s,Ye(c,3))}function nb(s,c,p,C){return s==null?[]:(nt(c)||(c=c==null?[]:[c]),p=C?n:p,nt(p)||(p=p==null?[]:[p]),Tf(s,c,p))}var rb=Aa(function(s,c,p){s[p?0:1].push(c)},function(){return[[],[]]});function ib(s,c,p){var C=nt(s)?mc:nf,y=arguments.length<3;return C(s,Ye(c,4),p,y,ni)}function ob(s,c,p){var C=nt(s)?p1:nf,y=arguments.length<3;return C(s,Ye(c,4),p,y,If)}function sb(s,c){var p=nt(s)?Qr:wf;return p(s,$a(Ye(c,3)))}function ab(s){var c=nt(s)?mf:JE;return c(s)}function lb(s,c,p){(p?hn(s,c,p):c===n)?c=1:c=ot(c);var C=nt(s)?SE:e0;return C(s,c)}function cb(s){var c=nt(s)?DE:n0;return c(s)}function ub(s){if(s==null)return 0;if(wn(s))return Pa(s)?Ki(s):s.length;var c=dn(s);return c==Ie||c==bn?s.size:Gc(s).length}function db(s,c,p){var C=nt(s)?Ec:r0;return p&&hn(s,c,p)&&(c=n),C(s,Ye(c,3))}var _b=ut(function(s,c){if(s==null)return[];var p=c.length;return p>1&&hn(s,c[0],c[1])?c=[]:p>2&&hn(c[0],c[1],c[2])&&(c=[c[0]]),Tf(s,an(c,1),[])}),Ua=j1||function(){return sn.Date.now()};function fb(s,c){if(typeof c!="function")throw new Kn(a);return s=ot(s),function(){if(--s<1)return c.apply(this,arguments)}}function xg(s,c,p){return c=p?n:c,c=s&&c==null?s.length:c,kr(s,k,n,n,n,n,c)}function Lg(s,c){var p;if(typeof c!="function")throw new Kn(a);return s=ot(s),function(){return--s>0&&(p=c.apply(this,arguments)),s<=1&&(c=n),p}}var au=ut(function(s,c,p){var C=b;if(p.length){var y=ei(p,to(au));C|=P}return kr(s,C,c,p,y)}),Ng=ut(function(s,c,p){var C=b|w;if(p.length){var y=ei(p,to(Ng));C|=P}return kr(c,C,s,p,y)});function Sg(s,c,p){c=p?n:c;var C=kr(s,T,n,n,n,n,n,c);return C.placeholder=Sg.placeholder,C}function Dg(s,c,p){c=p?n:c;var C=kr(s,U,n,n,n,n,n,c);return C.placeholder=Dg.placeholder,C}function Rg(s,c,p){var C,y,R,F,j,q,de=0,_e=!1,ge=!1,Ae=!0;if(typeof s!="function")throw new Kn(a);c=Qn(c)||0,zt(p)&&(_e=!!p.leading,ge="maxWait"in p,R=ge?qt(Qn(p.maxWait)||0,c):R,Ae="trailing"in p?!!p.trailing:Ae);function $e(Kt){var hr=C,Fr=y;return C=y=n,de=Kt,F=s.apply(Fr,hr),F}function Ke(Kt){return de=Kt,j=ss(gt,c),_e?$e(Kt):F}function lt(Kt){var hr=Kt-q,Fr=Kt-de,Zg=c-hr;return ge?un(Zg,R-Fr):Zg}function Ve(Kt){var hr=Kt-q,Fr=Kt-de;return q===n||hr>=c||hr<0||ge&&Fr>=R}function gt(){var Kt=Ua();if(Ve(Kt))return vt(Kt);j=ss(gt,lt(Kt))}function vt(Kt){return j=n,Ae&&C?$e(Kt):(C=y=n,F)}function Dn(){j!==n&&Hf(j),de=0,C=q=y=j=n}function vn(){return j===n?F:vt(Ua())}function Rn(){var Kt=Ua(),hr=Ve(Kt);if(C=arguments,y=this,q=Kt,hr){if(j===n)return Ke(q);if(ge)return Hf(j),j=ss(gt,c),$e(q)}return j===n&&(j=ss(gt,c)),F}return Rn.cancel=Dn,Rn.flush=vn,Rn}var gb=ut(function(s,c){return bf(s,1,c)}),hb=ut(function(s,c,p){return bf(s,Qn(c)||0,p)});function vb(s){return kr(s,te)}function Ga(s,c){if(typeof s!="function"||c!=null&&typeof c!="function")throw new Kn(a);var p=function(){var C=arguments,y=c?c.apply(this,C):C[0],R=p.cache;if(R.has(y))return R.get(y);var F=s.apply(this,C);return p.cache=R.set(y,F)||R,F};return p.cache=new(Ga.Cache||Rr),p}Ga.Cache=Rr;function $a(s){if(typeof s!="function")throw new Kn(a);return function(){var c=arguments;switch(c.length){case 0:return!s.call(this);case 1:return!s.call(this,c[0]);case 2:return!s.call(this,c[0],c[1]);case 3:return!s.call(this,c[0],c[1],c[2])}return!s.apply(this,c)}}function pb(s){return Lg(2,s)}var mb=i0(function(s,c){c=c.length==1&&nt(c[0])?Pt(c[0],Ln(Ye())):Pt(an(c,1),Ln(Ye()));var p=c.length;return ut(function(C){for(var y=-1,R=un(C.length,p);++y<R;)C[y]=c[y].call(this,C[y]);return xn(s,this,C)})}),lu=ut(function(s,c){var p=ei(c,to(lu));return kr(s,P,n,c,p)}),Tg=ut(function(s,c){var p=ei(c,to(Tg));return kr(s,Y,n,c,p)}),Eb=Mr(function(s,c){return kr(s,G,n,n,n,c)});function Cb(s,c){if(typeof s!="function")throw new Kn(a);return c=c===n?c:ot(c),ut(s,c)}function bb(s,c){if(typeof s!="function")throw new Kn(a);return c=c==null?0:qt(ot(c),0),ut(function(p){var C=p[c],y=oi(p,0,c);return C&&Jr(y,C),xn(s,this,y)})}function Ib(s,c,p){var C=!0,y=!0;if(typeof s!="function")throw new Kn(a);return zt(p)&&(C="leading"in p?!!p.leading:C,y="trailing"in p?!!p.trailing:y),Rg(s,c,{leading:C,maxWait:c,trailing:y})}function wb(s){return xg(s,1)}function yb(s,c){return lu(jc(c),s)}function Ob(){if(!arguments.length)return[];var s=arguments[0];return nt(s)?s:[s]}function Ab(s){return Xn(s,m)}function xb(s,c){return c=typeof c=="function"?c:n,Xn(s,m,c)}function Lb(s){return Xn(s,h|m)}function Nb(s,c){return c=typeof c=="function"?c:n,Xn(s,h|m,c)}function Sb(s,c){return c==null||Cf(s,c,Jt(c))}function gr(s,c){return s===c||s!==s&&c!==c}var Db=Sa(kc),Rb=Sa(function(s,c){return s>=c}),Li=Af(function(){return arguments}())?Af:function(s){return Wt(s)&&At.call(s,"callee")&&!_f.call(s,"callee")},nt=re.isArray,Tb=j_?Ln(j_):zE;function wn(s){return s!=null&&Fa(s.length)&&!Gr(s)}function jt(s){return Wt(s)&&wn(s)}function kb(s){return s===!0||s===!1||Wt(s)&&gn(s)==Wn}var si=V1||Eu,Mb=K_?Ln(K_):HE;function Ub(s){return Wt(s)&&s.nodeType===1&&!as(s)}function Gb(s){if(s==null)return!0;if(wn(s)&&(nt(s)||typeof s=="string"||typeof s.splice=="function"||si(s)||no(s)||Li(s)))return!s.length;var c=dn(s);if(c==Ie||c==bn)return!s.size;if(os(s))return!Gc(s).length;for(var p in s)if(At.call(s,p))return!1;return!0}function $b(s,c){return ns(s,c)}function Fb(s,c,p){p=typeof p=="function"?p:n;var C=p?p(s,c):n;return C===n?ns(s,c,n,p):!!C}function cu(s){if(!Wt(s))return!1;var c=gn(s);return c==Cr||c==pi||typeof s.message=="string"&&typeof s.name=="string"&&!as(s)}function Pb(s){return typeof s=="number"&&gf(s)}function Gr(s){if(!zt(s))return!1;var c=gn(s);return c==Sr||c==Pe||c==Ct||c==Js}function kg(s){return typeof s=="number"&&s==ot(s)}function Fa(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Fe}function zt(s){var c=typeof s;return s!=null&&(c=="object"||c=="function")}function Wt(s){return s!=null&&typeof s=="object"}var Mg=V_?Ln(V_):BE;function zb(s,c){return s===c||Uc(s,c,Jc(c))}function Hb(s,c,p){return p=typeof p=="function"?p:n,Uc(s,c,Jc(c),p)}function Wb(s){return Ug(s)&&s!=+s}function Bb(s){if(x0(s))throw new tt(o);return xf(s)}function Yb(s){return s===null}function jb(s){return s==null}function Ug(s){return typeof s=="number"||Wt(s)&&gn(s)==Se}function as(s){if(!Wt(s)||gn(s)!=Mt)return!1;var c=_a(s);if(c===null)return!0;var p=At.call(c,"constructor")&&c.constructor;return typeof p=="function"&&p instanceof p&&la.call(p)==H1}var uu=X_?Ln(X_):YE;function Kb(s){return kg(s)&&s>=-9007199254740991&&s<=Fe}var Gg=q_?Ln(q_):jE;function Pa(s){return typeof s=="string"||!nt(s)&&Wt(s)&&gn(s)==Ei}function Sn(s){return typeof s=="symbol"||Wt(s)&&gn(s)==Hi}var no=Z_?Ln(Z_):KE;function Vb(s){return s===n}function Xb(s){return Wt(s)&&dn(s)==et}function qb(s){return Wt(s)&&gn(s)==Yo}var Zb=Sa($c),Qb=Sa(function(s,c){return s<=c});function $g(s){if(!s)return[];if(wn(s))return Pa(s)?_r(s):In(s);if(Vo&&s[Vo])return S1(s[Vo]());var c=dn(s),p=c==Ie?Oc:c==bn?oa:ro;return p(s)}function $r(s){if(!s)return s===0?s:0;if(s=Qn(s),s===Ne||s===-1/0){var c=s<0?-1:1;return c*Le}return s===s?s:0}function ot(s){var c=$r(s),p=c%1;return c===c?p?c-p:c:0}function Fg(s){return s?yi(ot(s),0,Ue):0}function Qn(s){if(typeof s=="number")return s;if(Sn(s))return Me;if(zt(s)){var c=typeof s.valueOf=="function"?s.valueOf():s;s=zt(c)?c+"":c}if(typeof s!="string")return s===0?s:+s;s=rf(s);var p=Tm.test(s);return p||Mm.test(s)?f1(s.slice(2),p?2:8):Rm.test(s)?Me:+s}function Pg(s){return Ir(s,yn(s))}function Jb(s){return s?yi(ot(s),-9007199254740991,Fe):s===0?s:0}function yt(s){return s==null?"":Nn(s)}var eI=Ji(function(s,c){if(os(c)||wn(c)){Ir(c,Jt(c),s);return}for(var p in c)At.call(c,p)&&Jo(s,p,c[p])}),zg=Ji(function(s,c){Ir(c,yn(c),s)}),za=Ji(function(s,c,p,C){Ir(c,yn(c),s,C)}),tI=Ji(function(s,c,p,C){Ir(c,Jt(c),s,C)}),nI=Mr(Dc);function rI(s,c){var p=Qi(s);return c==null?p:Ef(p,c)}var iI=ut(function(s,c){s=Tt(s);var p=-1,C=c.length,y=C>2?c[2]:n;for(y&&hn(c[0],c[1],y)&&(C=1);++p<C;)for(var R=c[p],F=yn(R),j=-1,q=F.length;++j<q;){var de=F[j],_e=s[de];(_e===n||gr(_e,Xi[de])&&!At.call(s,de))&&(s[de]=R[de])}return s}),oI=ut(function(s){return s.push(n,ig),xn(Hg,n,s)});function sI(s,c){return J_(s,Ye(c,3),br)}function aI(s,c){return J_(s,Ye(c,3),Tc)}function lI(s,c){return s==null?s:Rc(s,Ye(c,3),yn)}function cI(s,c){return s==null?s:yf(s,Ye(c,3),yn)}function uI(s,c){return s&&br(s,Ye(c,3))}function dI(s,c){return s&&Tc(s,Ye(c,3))}function _I(s){return s==null?[]:Ia(s,Jt(s))}function fI(s){return s==null?[]:Ia(s,yn(s))}function du(s,c,p){var C=s==null?n:Oi(s,c);return C===n?p:C}function gI(s,c){return s!=null&&ag(s,c,GE)}function _u(s,c){return s!=null&&ag(s,c,$E)}var hI=Jf(function(s,c,p){c!=null&&typeof c.toString!="function"&&(c=ca.call(c)),s[c]=p},gu(On)),vI=Jf(function(s,c,p){c!=null&&typeof c.toString!="function"&&(c=ca.call(c)),At.call(s,c)?s[c].push(p):s[c]=[p]},Ye),pI=ut(ts);function Jt(s){return wn(s)?pf(s):Gc(s)}function yn(s){return wn(s)?pf(s,!0):VE(s)}function mI(s,c){var p={};return c=Ye(c,3),br(s,function(C,y,R){Tr(p,c(C,y,R),C)}),p}function EI(s,c){var p={};return c=Ye(c,3),br(s,function(C,y,R){Tr(p,y,c(C,y,R))}),p}var CI=Ji(function(s,c,p){wa(s,c,p)}),Hg=Ji(function(s,c,p,C){wa(s,c,p,C)}),bI=Mr(function(s,c){var p={};if(s==null)return p;var C=!1;c=Pt(c,function(R){return R=ii(R,s),C||(C=R.length>1),R}),Ir(s,Zc(s),p),C&&(p=Xn(p,h|v|m,h0));for(var y=c.length;y--;)Wc(p,c[y]);return p});function II(s,c){return Wg(s,$a(Ye(c)))}var wI=Mr(function(s,c){return s==null?{}:qE(s,c)});function Wg(s,c){if(s==null)return{};var p=Pt(Zc(s),function(C){return[C]});return c=Ye(c),kf(s,p,function(C,y){return c(C,y[0])})}function yI(s,c,p){c=ii(c,s);var C=-1,y=c.length;for(y||(y=1,s=n);++C<y;){var R=s==null?n:s[wr(c[C])];R===n&&(C=y,R=p),s=Gr(R)?R.call(s):R}return s}function OI(s,c,p){return s==null?s:rs(s,c,p)}function AI(s,c,p,C){return C=typeof C=="function"?C:n,s==null?s:rs(s,c,p,C)}var Bg=ng(Jt),Yg=ng(yn);function xI(s,c,p){var C=nt(s),y=C||si(s)||no(s);if(c=Ye(c,4),p==null){var R=s&&s.constructor;y?p=C?new R:[]:zt(s)?p=Gr(R)?Qi(_a(s)):{}:p={}}return(y?jn:br)(s,function(F,j,q){return c(p,F,j,q)}),p}function LI(s,c){return s==null?!0:Wc(s,c)}function NI(s,c,p){return s==null?s:Ff(s,c,jc(p))}function SI(s,c,p,C){return C=typeof C=="function"?C:n,s==null?s:Ff(s,c,jc(p),C)}function ro(s){return s==null?[]:yc(s,Jt(s))}function DI(s){return s==null?[]:yc(s,yn(s))}function RI(s,c,p){return p===n&&(p=c,c=n),p!==n&&(p=Qn(p),p=p===p?p:0),c!==n&&(c=Qn(c),c=c===c?c:0),yi(Qn(s),c,p)}function TI(s,c,p){return c=$r(c),p===n?(p=c,c=0):p=$r(p),s=Qn(s),FE(s,c,p)}function kI(s,c,p){if(p&&typeof p!="boolean"&&hn(s,c,p)&&(c=p=n),p===n&&(typeof c=="boolean"?(p=c,c=n):typeof s=="boolean"&&(p=s,s=n)),s===n&&c===n?(s=0,c=1):(s=$r(s),c===n?(c=s,s=0):c=$r(c)),s>c){var C=s;s=c,c=C}if(p||s%1||c%1){var y=hf();return un(s+y*(c-s+_1("1e-"+((y+"").length-1))),c)}return Pc(s,c)}var MI=eo(function(s,c,p){return c=c.toLowerCase(),s+(p?jg(c):c)});function jg(s){return fu(yt(s).toLowerCase())}function Kg(s){return s=yt(s),s&&s.replace(Gm,O1).replace(n1,"")}function UI(s,c,p){s=yt(s),c=Nn(c);var C=s.length;p=p===n?C:yi(ot(p),0,C);var y=p;return p-=c.length,p>=0&&s.slice(p,y)==c}function GI(s){return s=yt(s),s&&pm.test(s)?s.replace(w_,A1):s}function $I(s){return s=yt(s),s&&wm.test(s)?s.replace(lc,"\\$&"):s}var FI=eo(function(s,c,p){return s+(p?"-":"")+c.toLowerCase()}),PI=eo(function(s,c,p){return s+(p?" ":"")+c.toLowerCase()}),zI=qf("toLowerCase");function HI(s,c,p){s=yt(s),c=ot(c);var C=c?Ki(s):0;if(!c||C>=c)return s;var y=(c-C)/2;return Na(va(y),p)+s+Na(ha(y),p)}function WI(s,c,p){s=yt(s),c=ot(c);var C=c?Ki(s):0;return c&&C<c?s+Na(c-C,p):s}function BI(s,c,p){s=yt(s),c=ot(c);var C=c?Ki(s):0;return c&&C<c?Na(c-C,p)+s:s}function YI(s,c,p){return p||c==null?c=0:c&&(c=+c),Q1(yt(s).replace(cc,""),c||0)}function jI(s,c,p){return(p?hn(s,c,p):c===n)?c=1:c=ot(c),zc(yt(s),c)}function KI(){var s=arguments,c=yt(s[0]);return s.length<3?c:c.replace(s[1],s[2])}var VI=eo(function(s,c,p){return s+(p?"_":"")+c.toLowerCase()});function XI(s,c,p){return p&&typeof p!="number"&&hn(s,c,p)&&(c=p=n),p=p===n?Ue:p>>>0,p?(s=yt(s),s&&(typeof c=="string"||c!=null&&!uu(c))&&(c=Nn(c),!c&&ji(s))?oi(_r(s),0,p):s.split(c,p)):[]}var qI=eo(function(s,c,p){return s+(p?" ":"")+fu(c)});function ZI(s,c,p){return s=yt(s),p=p==null?0:yi(ot(p),0,s.length),c=Nn(c),s.slice(p,p+c.length)==c}function QI(s,c,p){var C=S.templateSettings;p&&hn(s,c,p)&&(c=n),s=yt(s),c=za({},c,C,rg);var y=za({},c.imports,C.imports,rg),R=Jt(y),F=yc(y,R),j,q,de=0,_e=c.interpolate||ea,ge="__p += '",Ae=Ac((c.escape||ea).source+"|"+_e.source+"|"+(_e===y_?Dm:ea).source+"|"+(c.evaluate||ea).source+"|$","g"),$e="//# sourceURL="+(At.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++a1+"]")+`
`;s.replace(Ae,function(Ve,gt,vt,Dn,vn,Rn){return vt||(vt=Dn),ge+=s.slice(de,Rn).replace($m,x1),gt&&(j=!0,ge+=`' +
__e(`+gt+`) +
'`),vn&&(q=!0,ge+=`';
`+vn+`;
__p += '`),vt&&(ge+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),de=Rn+Ve.length,Ve}),ge+=`';
`;var Ke=At.call(c,"variable")&&c.variable;if(!Ke)ge=`with (obj) {
`+ge+`
}
`;else if(Nm.test(Ke))throw new tt(l);ge=(q?ge.replace(fm,""):ge).replace(gm,"$1").replace(hm,"$1;"),ge="function("+(Ke||"obj")+`) {
`+(Ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(j?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var lt=Xg(function(){return bt(R,$e+"return "+ge).apply(n,F)});if(lt.source=ge,cu(lt))throw lt;return lt}function JI(s){return yt(s).toLowerCase()}function ew(s){return yt(s).toUpperCase()}function tw(s,c,p){if(s=yt(s),s&&(p||c===n))return rf(s);if(!s||!(c=Nn(c)))return s;var C=_r(s),y=_r(c),R=of(C,y),F=sf(C,y)+1;return oi(C,R,F).join("")}function nw(s,c,p){if(s=yt(s),s&&(p||c===n))return s.slice(0,lf(s)+1);if(!s||!(c=Nn(c)))return s;var C=_r(s),y=sf(C,_r(c))+1;return oi(C,0,y).join("")}function rw(s,c,p){if(s=yt(s),s&&(p||c===n))return s.replace(cc,"");if(!s||!(c=Nn(c)))return s;var C=_r(s),y=of(C,_r(c));return oi(C,y).join("")}function iw(s,c){var p=ie,C=oe;if(zt(c)){var y="separator"in c?c.separator:y;p="length"in c?ot(c.length):p,C="omission"in c?Nn(c.omission):C}s=yt(s);var R=s.length;if(ji(s)){var F=_r(s);R=F.length}if(p>=R)return s;var j=p-Ki(C);if(j<1)return C;var q=F?oi(F,0,j).join(""):s.slice(0,j);if(y===n)return q+C;if(F&&(j+=q.length-j),uu(y)){if(s.slice(j).search(y)){var de,_e=q;for(y.global||(y=Ac(y.source,yt(O_.exec(y))+"g")),y.lastIndex=0;de=y.exec(_e);)var ge=de.index;q=q.slice(0,ge===n?j:ge)}}else if(s.indexOf(Nn(y),j)!=j){var Ae=q.lastIndexOf(y);Ae>-1&&(q=q.slice(0,Ae))}return q+C}function ow(s){return s=yt(s),s&&vm.test(s)?s.replace(I_,k1):s}var sw=eo(function(s,c,p){return s+(p?" ":"")+c.toUpperCase()}),fu=qf("toUpperCase");function Vg(s,c,p){return s=yt(s),c=p?n:c,c===n?N1(s)?G1(s):C1(s):s.match(c)||[]}var Xg=ut(function(s,c){try{return xn(s,n,c)}catch(p){return cu(p)?p:new tt(p)}}),aw=Mr(function(s,c){return jn(c,function(p){p=wr(p),Tr(s,p,au(s[p],s))}),s});function lw(s){var c=s==null?0:s.length,p=Ye();return s=c?Pt(s,function(C){if(typeof C[1]!="function")throw new Kn(a);return[p(C[0]),C[1]]}):[],ut(function(C){for(var y=-1;++y<c;){var R=s[y];if(xn(R[0],this,C))return xn(R[1],this,C)}})}function cw(s){return kE(Xn(s,h))}function gu(s){return function(){return s}}function uw(s,c){return s==null||s!==s?c:s}var dw=Qf(),_w=Qf(!0);function On(s){return s}function hu(s){return Lf(typeof s=="function"?s:Xn(s,h))}function fw(s){return Sf(Xn(s,h))}function gw(s,c){return Df(s,Xn(c,h))}var hw=ut(function(s,c){return function(p){return ts(p,s,c)}}),vw=ut(function(s,c){return function(p){return ts(s,p,c)}});function vu(s,c,p){var C=Jt(c),y=Ia(c,C);p==null&&!(zt(c)&&(y.length||!C.length))&&(p=c,c=s,s=this,y=Ia(c,Jt(c)));var R=!(zt(p)&&"chain"in p)||!!p.chain,F=Gr(s);return jn(y,function(j){var q=c[j];s[j]=q,F&&(s.prototype[j]=function(){var de=this.__chain__;if(R||de){var _e=s(this.__wrapped__),ge=_e.__actions__=In(this.__actions__);return ge.push({func:q,args:arguments,thisArg:s}),_e.__chain__=de,_e}return q.apply(s,Jr([this.value()],arguments))})}),s}function pw(){return sn._===this&&(sn._=W1),this}function pu(){}function mw(s){return s=ot(s),ut(function(c){return Rf(c,s)})}var Ew=Vc(Pt),Cw=Vc(Q_),bw=Vc(Ec);function qg(s){return tu(s)?Cc(wr(s)):ZE(s)}function Iw(s){return function(c){return s==null?n:Oi(s,c)}}var ww=eg(),yw=eg(!0);function mu(){return[]}function Eu(){return!1}function Ow(){return{}}function Aw(){return""}function xw(){return!0}function Lw(s,c){if(s=ot(s),s<1||s>Fe)return[];var p=Ue,C=un(s,Ue);c=Ye(c),s-=Ue;for(var y=wc(C,c);++p<s;)c(p);return y}function Nw(s){return nt(s)?Pt(s,wr):Sn(s)?[s]:In(vg(yt(s)))}function Sw(s){var c=++z1;return yt(s)+c}var Dw=La(function(s,c){return s+c},0),Rw=Xc("ceil"),Tw=La(function(s,c){return s/c},1),kw=Xc("floor");function Mw(s){return s&&s.length?ba(s,On,kc):n}function Uw(s,c){return s&&s.length?ba(s,Ye(c,2),kc):n}function Gw(s){return tf(s,On)}function $w(s,c){return tf(s,Ye(c,2))}function Fw(s){return s&&s.length?ba(s,On,$c):n}function Pw(s,c){return s&&s.length?ba(s,Ye(c,2),$c):n}var zw=La(function(s,c){return s*c},1),Hw=Xc("round"),Ww=La(function(s,c){return s-c},0);function Bw(s){return s&&s.length?Ic(s,On):0}function Yw(s,c){return s&&s.length?Ic(s,Ye(c,2)):0}return S.after=fb,S.ary=xg,S.assign=eI,S.assignIn=zg,S.assignInWith=za,S.assignWith=tI,S.at=nI,S.before=Lg,S.bind=au,S.bindAll=aw,S.bindKey=Ng,S.castArray=Ob,S.chain=yg,S.chunk=k0,S.compact=M0,S.concat=U0,S.cond=lw,S.conforms=cw,S.constant=gu,S.countBy=BC,S.create=rI,S.curry=Sg,S.curryRight=Dg,S.debounce=Rg,S.defaults=iI,S.defaultsDeep=oI,S.defer=gb,S.delay=hb,S.difference=G0,S.differenceBy=$0,S.differenceWith=F0,S.drop=P0,S.dropRight=z0,S.dropRightWhile=H0,S.dropWhile=W0,S.fill=B0,S.filter=jC,S.flatMap=XC,S.flatMapDeep=qC,S.flatMapDepth=ZC,S.flatten=Cg,S.flattenDeep=Y0,S.flattenDepth=j0,S.flip=vb,S.flow=dw,S.flowRight=_w,S.fromPairs=K0,S.functions=_I,S.functionsIn=fI,S.groupBy=QC,S.initial=X0,S.intersection=q0,S.intersectionBy=Z0,S.intersectionWith=Q0,S.invert=hI,S.invertBy=vI,S.invokeMap=eb,S.iteratee=hu,S.keyBy=tb,S.keys=Jt,S.keysIn=yn,S.map=Ma,S.mapKeys=mI,S.mapValues=EI,S.matches=fw,S.matchesProperty=gw,S.memoize=Ga,S.merge=CI,S.mergeWith=Hg,S.method=hw,S.methodOf=vw,S.mixin=vu,S.negate=$a,S.nthArg=mw,S.omit=bI,S.omitBy=II,S.once=pb,S.orderBy=nb,S.over=Ew,S.overArgs=mb,S.overEvery=Cw,S.overSome=bw,S.partial=lu,S.partialRight=Tg,S.partition=rb,S.pick=wI,S.pickBy=Wg,S.property=qg,S.propertyOf=Iw,S.pull=nC,S.pullAll=Ig,S.pullAllBy=rC,S.pullAllWith=iC,S.pullAt=oC,S.range=ww,S.rangeRight=yw,S.rearg=Eb,S.reject=sb,S.remove=sC,S.rest=Cb,S.reverse=ou,S.sampleSize=lb,S.set=OI,S.setWith=AI,S.shuffle=cb,S.slice=aC,S.sortBy=_b,S.sortedUniq=gC,S.sortedUniqBy=hC,S.split=XI,S.spread=bb,S.tail=vC,S.take=pC,S.takeRight=mC,S.takeRightWhile=EC,S.takeWhile=CC,S.tap=MC,S.throttle=Ib,S.thru=ka,S.toArray=$g,S.toPairs=Bg,S.toPairsIn=Yg,S.toPath=Nw,S.toPlainObject=Pg,S.transform=xI,S.unary=wb,S.union=bC,S.unionBy=IC,S.unionWith=wC,S.uniq=yC,S.uniqBy=OC,S.uniqWith=AC,S.unset=LI,S.unzip=su,S.unzipWith=wg,S.update=NI,S.updateWith=SI,S.values=ro,S.valuesIn=DI,S.without=xC,S.words=Vg,S.wrap=yb,S.xor=LC,S.xorBy=NC,S.xorWith=SC,S.zip=DC,S.zipObject=RC,S.zipObjectDeep=TC,S.zipWith=kC,S.entries=Bg,S.entriesIn=Yg,S.extend=zg,S.extendWith=za,vu(S,S),S.add=Dw,S.attempt=Xg,S.camelCase=MI,S.capitalize=jg,S.ceil=Rw,S.clamp=RI,S.clone=Ab,S.cloneDeep=Lb,S.cloneDeepWith=Nb,S.cloneWith=xb,S.conformsTo=Sb,S.deburr=Kg,S.defaultTo=uw,S.divide=Tw,S.endsWith=UI,S.eq=gr,S.escape=GI,S.escapeRegExp=$I,S.every=YC,S.find=KC,S.findIndex=mg,S.findKey=sI,S.findLast=VC,S.findLastIndex=Eg,S.findLastKey=aI,S.floor=kw,S.forEach=Og,S.forEachRight=Ag,S.forIn=lI,S.forInRight=cI,S.forOwn=uI,S.forOwnRight=dI,S.get=du,S.gt=Db,S.gte=Rb,S.has=gI,S.hasIn=_u,S.head=bg,S.identity=On,S.includes=JC,S.indexOf=V0,S.inRange=TI,S.invoke=pI,S.isArguments=Li,S.isArray=nt,S.isArrayBuffer=Tb,S.isArrayLike=wn,S.isArrayLikeObject=jt,S.isBoolean=kb,S.isBuffer=si,S.isDate=Mb,S.isElement=Ub,S.isEmpty=Gb,S.isEqual=$b,S.isEqualWith=Fb,S.isError=cu,S.isFinite=Pb,S.isFunction=Gr,S.isInteger=kg,S.isLength=Fa,S.isMap=Mg,S.isMatch=zb,S.isMatchWith=Hb,S.isNaN=Wb,S.isNative=Bb,S.isNil=jb,S.isNull=Yb,S.isNumber=Ug,S.isObject=zt,S.isObjectLike=Wt,S.isPlainObject=as,S.isRegExp=uu,S.isSafeInteger=Kb,S.isSet=Gg,S.isString=Pa,S.isSymbol=Sn,S.isTypedArray=no,S.isUndefined=Vb,S.isWeakMap=Xb,S.isWeakSet=qb,S.join=J0,S.kebabCase=FI,S.last=Zn,S.lastIndexOf=eC,S.lowerCase=PI,S.lowerFirst=zI,S.lt=Zb,S.lte=Qb,S.max=Mw,S.maxBy=Uw,S.mean=Gw,S.meanBy=$w,S.min=Fw,S.minBy=Pw,S.stubArray=mu,S.stubFalse=Eu,S.stubObject=Ow,S.stubString=Aw,S.stubTrue=xw,S.multiply=zw,S.nth=tC,S.noConflict=pw,S.noop=pu,S.now=Ua,S.pad=HI,S.padEnd=WI,S.padStart=BI,S.parseInt=YI,S.random=kI,S.reduce=ib,S.reduceRight=ob,S.repeat=jI,S.replace=KI,S.result=yI,S.round=Hw,S.runInContext=V,S.sample=ab,S.size=ub,S.snakeCase=VI,S.some=db,S.sortedIndex=lC,S.sortedIndexBy=cC,S.sortedIndexOf=uC,S.sortedLastIndex=dC,S.sortedLastIndexBy=_C,S.sortedLastIndexOf=fC,S.startCase=qI,S.startsWith=ZI,S.subtract=Ww,S.sum=Bw,S.sumBy=Yw,S.template=QI,S.times=Lw,S.toFinite=$r,S.toInteger=ot,S.toLength=Fg,S.toLower=JI,S.toNumber=Qn,S.toSafeInteger=Jb,S.toString=yt,S.toUpper=ew,S.trim=tw,S.trimEnd=nw,S.trimStart=rw,S.truncate=iw,S.unescape=ow,S.uniqueId=Sw,S.upperCase=sw,S.upperFirst=fu,S.each=Og,S.eachRight=Ag,S.first=bg,vu(S,function(){var s={};return br(S,function(c,p){At.call(S.prototype,p)||(s[p]=c)}),s}(),{chain:!1}),S.VERSION=r,jn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){S[s].placeholder=S}),jn(["drop","take"],function(s,c){ht.prototype[s]=function(p){p=p===n?1:qt(ot(p),0);var C=this.__filtered__&&!c?new ht(this):this.clone();return C.__filtered__?C.__takeCount__=un(p,C.__takeCount__):C.__views__.push({size:un(p,Ue),type:s+(C.__dir__<0?"Right":"")}),C},ht.prototype[s+"Right"]=function(p){return this.reverse()[s](p).reverse()}}),jn(["filter","map","takeWhile"],function(s,c){var p=c+1,C=p==Z||p==we;ht.prototype[s]=function(y){var R=this.clone();return R.__iteratees__.push({iteratee:Ye(y,3),type:p}),R.__filtered__=R.__filtered__||C,R}}),jn(["head","last"],function(s,c){var p="take"+(c?"Right":"");ht.prototype[s]=function(){return this[p](1).value()[0]}}),jn(["initial","tail"],function(s,c){var p="drop"+(c?"":"Right");ht.prototype[s]=function(){return this.__filtered__?new ht(this):this[p](1)}}),ht.prototype.compact=function(){return this.filter(On)},ht.prototype.find=function(s){return this.filter(s).head()},ht.prototype.findLast=function(s){return this.reverse().find(s)},ht.prototype.invokeMap=ut(function(s,c){return typeof s=="function"?new ht(this):this.map(function(p){return ts(p,s,c)})}),ht.prototype.reject=function(s){return this.filter($a(Ye(s)))},ht.prototype.slice=function(s,c){s=ot(s);var p=this;return p.__filtered__&&(s>0||c<0)?new ht(p):(s<0?p=p.takeRight(-s):s&&(p=p.drop(s)),c!==n&&(c=ot(c),p=c<0?p.dropRight(-c):p.take(c-s)),p)},ht.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},ht.prototype.toArray=function(){return this.take(Ue)},br(ht.prototype,function(s,c){var p=/^(?:filter|find|map|reject)|While$/.test(c),C=/^(?:head|last)$/.test(c),y=S[C?"take"+(c=="last"?"Right":""):c],R=C||/^find/.test(c);y&&(S.prototype[c]=function(){var F=this.__wrapped__,j=C?[1]:arguments,q=F instanceof ht,de=j[0],_e=q||nt(F),ge=function(gt){var vt=y.apply(S,Jr([gt],j));return C&&Ae?vt[0]:vt};_e&&p&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var Ae=this.__chain__,$e=!!this.__actions__.length,Ke=R&&!Ae,lt=q&&!$e;if(!R&&_e){F=lt?F:new ht(this);var Ve=s.apply(F,j);return Ve.__actions__.push({func:ka,args:[ge],thisArg:n}),new Vn(Ve,Ae)}return Ke&&lt?s.apply(this,j):(Ve=this.thru(ge),Ke?C?Ve.value()[0]:Ve.value():Ve)})}),jn(["pop","push","shift","sort","splice","unshift"],function(s){var c=sa[s],p=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);S.prototype[s]=function(){var y=arguments;if(C&&!this.__chain__){var R=this.value();return c.apply(nt(R)?R:[],y)}return this[p](function(F){return c.apply(nt(F)?F:[],y)})}}),br(ht.prototype,function(s,c){var p=S[c];if(p){var C=p.name+"";At.call(Zi,C)||(Zi[C]=[]),Zi[C].push({name:c,func:p})}}),Zi[xa(n,w).name]=[{name:"wrapper",func:n}],ht.prototype.clone=oE,ht.prototype.reverse=sE,ht.prototype.value=aE,S.prototype.at=UC,S.prototype.chain=GC,S.prototype.commit=$C,S.prototype.next=FC,S.prototype.plant=zC,S.prototype.reverse=HC,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=WC,S.prototype.first=S.prototype.head,Vo&&(S.prototype[Vo]=PC),S},Vi=$1();Ci?((Ci.exports=Vi)._=Vi,hc._=Vi):sn._=Vi}).call(HS)}(fs,fs.exports)),fs.exports}var St=WS();function Hr(t){return Array.isArray?Array.isArray(t):Hv(t)==="[object Array]"}function BS(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function YS(t){return t==null?"":BS(t)}function Ar(t){return typeof t=="string"}function Pv(t){return typeof t=="number"}function jS(t){return t===!0||t===!1||KS(t)&&Hv(t)=="[object Boolean]"}function zv(t){return typeof t=="object"}function KS(t){return zv(t)&&t!==null}function Mn(t){return t!=null}function yu(t){return!t.trim().length}function Hv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const VS="Incorrect 'index' type",XS=t=>`Invalid value for key ${t}`,qS=t=>`Pattern length exceeds max of ${t}.`,ZS=t=>`Missing ${t} property in key`,QS=t=>`Property 'weight' in key '${t}' must be a positive integer`,uh=Object.prototype.hasOwnProperty;class JS{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Wv(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Wv(t){let e=null,n=null,r=null,i=1,o=null;if(Ar(t)||Hr(t))r=t,e=dh(t),n=ju(t);else{if(!uh.call(t,"name"))throw new Error(ZS("name"));const a=t.name;if(r=a,uh.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(QS(a));e=dh(a),n=ju(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function dh(t){return Hr(t)?t:t.split(".")}function ju(t){return Hr(t)?t.join("."):t}function eD(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(Mn(o))if(!a[l])n.push(o);else{let u=a[l];const d=o[u];if(!Mn(d))return;if(l===a.length-1&&(Ar(d)||Pv(d)||jS(d)))n.push(YS(d));else if(Hr(d)){r=!0;for(let g=0,h=d.length;g<h;g+=1)i(d[g],a,l+1)}else a.length&&i(d,a,l+1)}};return i(t,Ar(e)?e.split("."):e,0),r?n:n[0]}const tD={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},nD={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},rD={location:0,threshold:.6,distance:100},iD={useExtendedSearch:!1,getFn:eD,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ze={...nD,...tD,...rD,...iD};const oD=/[^ ]+/g;function sD(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(oD).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Bd{constructor({getFn:e=Ze.getFn,fieldNormWeight:n=Ze.fieldNormWeight}={}){this.norm=sD(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Ar(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Ar(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Mn(e)||yu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Mn(a)){if(Hr(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:d,value:g}=u.pop();if(Mn(g))if(Ar(g)&&!yu(g)){let h={v:g,i:d,n:this.norm.get(g)};l.push(h)}else Hr(g)&&g.forEach((h,v)=>{u.push({nestedArrIndex:v,value:h})})}r.$[o]=l}else if(Ar(a)&&!yu(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Bv(t,e,{getFn:n=Ze.getFn,fieldNormWeight:r=Ze.fieldNormWeight}={}){const i=new Bd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Wv)),i.setSources(e),i.create(),i}function aD(t,{getFn:e=Ze.getFn,fieldNormWeight:n=Ze.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Bd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ba(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ze.distance,ignoreLocation:o=Ze.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function lD(t=[],e=Ze.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Si=32;function cD(t,e,n,{location:r=Ze.location,distance:i=Ze.distance,threshold:o=Ze.threshold,findAllMatches:a=Ze.findAllMatches,minMatchCharLength:l=Ze.minMatchCharLength,includeMatches:u=Ze.includeMatches,ignoreLocation:d=Ze.ignoreLocation}={}){if(e.length>Si)throw new Error(qS(Si));const g=e.length,h=t.length,v=Math.max(0,Math.min(r,h));let m=o,E=v;const I=l>1||u,b=I?Array(h):[];let w;for(;(w=t.indexOf(e,E))>-1;){let k=Ba(e,{currentLocation:w,expectedLocation:v,distance:i,ignoreLocation:d});if(m=Math.min(k,m),E=w+g,I){let G=0;for(;G<g;)b[w+G]=1,G+=1}}E=-1;let A=[],T=1,U=g+h;const P=1<<g-1;for(let k=0;k<g;k+=1){let G=0,te=U;for(;G<te;)Ba(e,{errors:k,currentLocation:v+te,expectedLocation:v,distance:i,ignoreLocation:d})<=m?G=te:U=te,te=Math.floor((U-G)/2+G);U=te;let ie=Math.max(1,v-te+1),oe=a?h:Math.min(v+te,h)+g,ue=Array(oe+2);ue[oe+1]=(1<<k)-1;for(let Z=oe;Z>=ie;Z-=1){let Ee=Z-1,we=n[t.charAt(Ee)];if(I&&(b[Ee]=+!!we),ue[Z]=(ue[Z+1]<<1|1)&we,k&&(ue[Z]|=(A[Z+1]|A[Z])<<1|1|A[Z+1]),ue[Z]&P&&(T=Ba(e,{errors:k,currentLocation:Ee,expectedLocation:v,distance:i,ignoreLocation:d}),T<=m)){if(m=T,E=Ee,E<=v)break;ie=Math.max(1,2*v-E)}}if(Ba(e,{errors:k+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:d})>m)break;A=ue}const Y={isMatch:E>=0,score:Math.max(.001,T)};if(I){const k=lD(b,l);k.length?u&&(Y.indices=k):Y.isMatch=!1}return Y}function uD(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Yv{constructor(e,{location:n=Ze.location,threshold:r=Ze.threshold,distance:i=Ze.distance,includeMatches:o=Ze.includeMatches,findAllMatches:a=Ze.findAllMatches,minMatchCharLength:l=Ze.minMatchCharLength,isCaseSensitive:u=Ze.isCaseSensitive,ignoreLocation:d=Ze.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(v,m)=>{this.chunks.push({pattern:v,alphabet:uD(v),startIndex:m})},h=this.pattern.length;if(h>Si){let v=0;const m=h%Si,E=h-m;for(;v<E;)g(this.pattern.substr(v,Si),v),v+=Si;if(m){const I=h-Si;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:d}=this.options;let g=[],h=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:w,score:A,indices:T}=cD(e,E,I,{location:i+b,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:d});w&&(v=!0),h+=A,w&&T&&(g=[...g,...T])});let m={isMatch:v,score:v?h/this.chunks.length:1};return v&&r&&(m.indices=g),m}}class hi{constructor(e){this.pattern=e}static isMultiMatch(e){return _h(e,this.multiRegex)}static isSingleMatch(e){return _h(e,this.singleRegex)}search(){}}function _h(t,e){const n=t.match(e);return n?n[1]:null}class dD extends hi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class _D extends hi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class fD extends hi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class gD extends hi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class hD extends hi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class vD extends hi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class jv extends hi{constructor(e,{location:n=Ze.location,threshold:r=Ze.threshold,distance:i=Ze.distance,includeMatches:o=Ze.includeMatches,findAllMatches:a=Ze.findAllMatches,minMatchCharLength:l=Ze.minMatchCharLength,isCaseSensitive:u=Ze.isCaseSensitive,ignoreLocation:d=Ze.ignoreLocation}={}){super(e),this._bitapSearch=new Yv(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Kv extends hi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Ku=[dD,Kv,fD,gD,vD,hD,_D,jv],fh=Ku.length,pD=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,mD="|";function ED(t,e={}){return t.split(mD).map(n=>{let r=n.trim().split(pD).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,d=-1;for(;!u&&++d<fh;){const g=Ku[d];let h=g.isMultiMatch(l);h&&(i.push(new g(h,e)),u=!0)}if(!u)for(d=-1;++d<fh;){const g=Ku[d];let h=g.isSingleMatch(l);if(h){i.push(new g(h,e));break}}}return i})}const CD=new Set([jv.type,Kv.type]);class bD{constructor(e,{isCaseSensitive:n=Ze.isCaseSensitive,includeMatches:r=Ze.includeMatches,minMatchCharLength:i=Ze.minMatchCharLength,ignoreLocation:o=Ze.ignoreLocation,findAllMatches:a=Ze.findAllMatches,location:l=Ze.location,threshold:u=Ze.threshold,distance:d=Ze.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=ED(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],l=0;for(let u=0,d=n.length;u<d;u+=1){const g=n[u];a.length=0,o=0;for(let h=0,v=g.length;h<v;h+=1){const m=g[h],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(o+=1,l+=b,r){const w=m.constructor.type;CD.has(w)?a=[...a,...I]:a.push(I)}}else{l=0,o=0,a.length=0;break}}if(o){let h={isMatch:!0,score:l/o};return r&&(h.indices=a),h}}return{isMatch:!1,score:1}}}const Vu=[];function ID(...t){Vu.push(...t)}function Xu(t,e){for(let n=0,r=Vu.length;n<r;n+=1){let i=Vu[n];if(i.condition(t,e))return new i(t,e)}return new Yv(t,e)}const ll={AND:"$and",OR:"$or"},qu={PATH:"$path",PATTERN:"$val"},Zu=t=>!!(t[ll.AND]||t[ll.OR]),wD=t=>!!t[qu.PATH],yD=t=>!Hr(t)&&zv(t)&&!Zu(t),gh=t=>({[ll.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Vv(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=wD(i);if(!a&&o.length>1&&!Zu(i))return r(gh(i));if(yD(i)){const u=a?i[qu.PATH]:o[0],d=a?i[qu.PATTERN]:i[u];if(!Ar(d))throw new Error(XS(u));const g={keyId:ju(u),pattern:d};return n&&(g.searcher=Xu(d,e)),g}let l={children:[],operator:o[0]};return o.forEach(u=>{const d=i[u];Hr(d)&&d.forEach(g=>{l.children.push(r(g))})}),l};return Zu(t)||(t=gh(t)),r(t)}function OD(t,{ignoreFieldNorm:e=Ze.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function AD(t,e){const n=t.matches;e.matches=[],Mn(n)&&n.forEach(r=>{if(!Mn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function xD(t,e){e.score=t.score}function LD(t,e,{includeMatches:n=Ze.includeMatches,includeScore:r=Ze.includeScore}={}){const i=[];return n&&i.push(AD),r&&i.push(xD),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class To{constructor(e,n={},r){this.options={...Ze,...n},this.options.useExtendedSearch,this._keyStore=new JS(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Bd))throw new Error(VS);this._myIndex=n||Bv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Mn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=Ar(e)?Ar(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return OD(u,{ignoreFieldNorm:l}),o&&u.sort(a),Pv(n)&&n>-1&&(u=u.slice(0,n)),LD(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Xu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!Mn(o))return;const{isMatch:u,score:d,indices:g}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:d,value:o,norm:l,indices:g}]})}),i}_searchLogical(e){const n=Vv(e,this.options),r=(l,u,d)=>{if(!l.children){const{keyId:h,searcher:v}=l,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(u,h),searcher:v});return m&&m.length?[{idx:d,item:u,matches:m}]:[]}const g=[];for(let h=0,v=l.children.length;h<v;h+=1){const m=l.children[h],E=r(m,u,d);if(E.length)g.push(...E);else if(l.operator===ll.AND)return[]}return g},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(Mn(l)){let d=r(n,l,u);d.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),d.forEach(({matches:g})=>{o[u].matches.push(...g)}))}}),a}_searchObjectList(e){const n=Xu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!Mn(a))return;let u=[];r.forEach((d,g)=>{u.push(...this._findMatches({key:d,value:a[g],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Mn(n))return[];let i=[];if(Hr(n))n.forEach(({v:o,i:a,n:l})=>{if(!Mn(o))return;const{isMatch:u,score:d,indices:g}=r.searchIn(o);u&&i.push({score:d,key:e,value:o,idx:a,norm:l,indices:g})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:d}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:d})}return i}}To.version="7.0.0";To.createIndex=Bv;To.parseIndex=aD;To.config=Ze;To.parseQuery=Vv;ID(bD);function Nl(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function ND(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function SD(t){return new To(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function DD(t,e,n){const r=ND(e,n);return t.length===0?r:SD(r).search(t).map(i=>i.item)}function RD(t,e){return Nl(t,e).shape}function cn(t,e){const n=RD(t,e);return n?Bu(n):void 0}function Sl(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Wd(e)}function TD(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return zS(e)}function kD(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function $s(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Wd(i)})}function MD(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Wd(o)})})}function Vr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function Xv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Gv(e)}function UD(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Gv(r)})}function GD(t,e){const n=t.shape;return n===void 0?void 0:{...cn(e,Ht),...n}}function qv(t,e,n){return{toolId:t,cells:e,value:n}}function $D(t,e){const n=$s(e,"cells"),r=Vr(e);return qv(t,n,r)}function Zv(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>qe(o,e)&&a>=r)}function FD(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Us(r[i-1],e)))return t;const a=Zv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function Qv(t,e){return{toolId:t,cells:e,lines:[]}}function PD(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),ol(n),{...t,cells:n};const r=n.some(o=>qe(o,e)),i=n.some(o=>Us(o,e));return n.length>0&&!r&&i?(n.push(e),ol(n),{...t,cells:n}):t}function zD(t,e,n){const r=t.cells.some(d=>qe(d,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return Qu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return Qu(t,e);const l=Zv(o,e,!1);return(o.length===0?!0:Us(o[a-1],e))?l>=0?(o.length=l+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function Qu(t,e){return t.cells.some(r=>qe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function HD(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function WD(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function BD(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function YD(t,e){const n=$s(e,"cells"),r=MD(e),i=Qv(t,n);return i.lines=r,i}function Jv(t,e,n=""){return{toolId:t,cells:e,value:n}}function jD(t,e,n=!1){const r=Fv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function KD(t,e){return{...t,value:e}}function VD(t,e){const n=$s(e,"cells"),r=Vr(e);return Jv(t,n,r)}function Ju(t,e,n){return{toolId:t,cells:e,value:n}}function XD(t,e){const n=$s(e,"cells"),r=Vr(e);return Ju(t,n,r)}function ed(t,e,n){return{toolId:t,cells:e,value:n}}function qD(t,e){const n=$s(e,"cells"),r=Vr(e);return ed(t,n,r)}function td(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function ZD(t,e){const n=Sl(e),r=Xv(e),i=Vr(e);return td(t,n,r,i)}function nd(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function QD(t,e){const n=Sl(e),r=Vr(e);return nd(t,n,r)}function rd(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function JD(t,e){const n=Sl(e),r=Xv(e);return rd(t,n,r)}function id(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function eR(t,e){const n=Sl(e),r=UD(e),i=id(t,n,We.N);return i.directions=r,i}function od(t,e,n=""){return{toolId:t,cell:e,value:n}}function tR(t,e){const n=TD(e),r=Vr(e);return od(t,n,r)}function nR(t,e=""){return{toolId:t,value:e}}function rR(t,e){const n=Vr(e);return nR(t,n)}function iR(t,e,n=""){return{toolId:t,coords:e,value:n}}function oR(t,e){const n=kD(e,"coords"),r=Vr(e);return iR(t,n,r)}function Fs(t,e){return{...t,value:e}}class ko extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r||!r.constraints)return null;const i=r.constraints[n];return i||null}getConstraint2(e){for(const n of this.values()){if(!n.constraints)continue;const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const i=this.get(e);!i||!i.constraints||(i.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);!r||!r.constraints||r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const i=this.get(e);!i||!i.constraints||i.constraints[n]&&(i.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];if(r.constraints)for(const a of Object.values(r.constraints))i.push(dR(a));const o={tool_id:n,constraints:i};if(r.negative_constraints)for(const[a,l]of Object.entries(r.negative_constraints))l&&(o.negative_constraints||(o.negative_constraints={}),o.negative_constraints[a]=l);e[n]=o}return e}static fromJson(e){const n=new ko;if(!e)return n;for(const r of Object.values(e)){const i=r.tool_id;if(typeof i!="string")throw TypeError("tool_id_str must be of type string.");const o=$y(i);if(o===void 0||!Object.keys(Ht).includes(o))continue;n.addToDict(o);const a=n.get(o);if(!a)continue;const l=r.negative_constraints;if(l){a.negative_constraints={};for(const[d,g]of Object.entries(l))a.negative_constraints[d]=g}const u=r.constraints;for(const d of u){let g=null;if(Fy(o,Cl)?g=QD(o,d):Gi(o)?g=JD(o,d):Eo(o)?g=eR(o,d):Co(o)?g=qD(o,d):As(o)?g=XD(o,d):bo(o)?g=$D(o,d):yv(o)?g=oR(o,d):Io(o)?g=YD(o,d):wo(o)?g=VD(o,d):Br(o)?g=ZD(o,d):ky(o)?g=rR(o,d):xs(o)&&(g=tR(o,d)),g!==null){const h=St.uniqueId(),v=GD(d,o);g.shape=v,n.addConstraint(o,h,g)}}}return n}}function uo(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=i[0];if(qe(o.cell,n))return[a,o]}return null}function hh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(n.every(l=>o.cells.some(u=>qe(l,u))))return i}return null}function vh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=o.cells[o.cells.length-1];if(qe(n,a))return i}return null}function sR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>qe(l,n)))return[i[0],o]}return null}function aR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints))if(i[1].cells.some(l=>qe(l,n)))return i;return null}function ph(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>qe(l,n)))return[i[0],o]}return null}function lR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const[i,o]of Object.entries(r.constraints)){const a=o,l=a.lines.findIndex(u=>u.some((d,g)=>qe(d,n)&&g>0));if(l>=0)return{id:i,arrow:a,matchLineIdx:l}}return null}function mh(t,e,n,r){const i=t.get(e);if(!i||!i.constraints)return null;for(const o of Object.entries(i.constraints)){const a=o[1],l=o[0];if(qe(n,a.cell)&&r===a.direction)return[l,a]}return null}function Eh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],a=i[0];if(qe(n,o.cell))return[a,o]}return null}function cR(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>qe(l,n))||o.cells2.some(l=>qe(l,n)))return[i[0],o]}return null}function uR(t,e){const n=t.get(e),r=new Set;if(!n||!n.constraints)return r;for(const i of Object.entries(n.constraints)){const o=i[1];r.add(o.value)}return r}function dR(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ha(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ha(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Ha(i)));e.lines=n}if("cell"in t){const n=Ha(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=cn(t.toolId,Ht),r=zy(t.shape,n);r&&(e.shape=r)}return e}function Ch(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function ep(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function sd(t){const e=new Option().style;return e.color=t,e.color!==""}function Ou(t){return ep(t)||sd(t)?t:sd(`#${t}`)?`#${t}`:void 0}function cl(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}const _R=t=>btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function pB(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");for(;e.length%4!==0;)e+="=";return atob(e)}function tp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function ul(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function fR(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const bh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function gR(t){return t in bh?bh[t]:null}function np(t,e,n){if(n===null)return null;const r=gR(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Au(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class hR{constructor(e,n){he(this,"r");he(this,"c");he(this,"outside",!1);he(this,"value",null);he(this,"given",!1);he(this,"region",null);he(this,"centerMarks",[]);he(this,"cornerMarks",[]);he(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Au(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Au(this.cornerMarks,e))}enterHighlight(e){this.highlights=Au(this.highlights,e)}enterCell(e,n,r=!1){n===f.GIVEN?this.enterGiven(e,r):n===f.DIGIT?this.enterValue(e,r):n===f.CORNER_PM?this.enterCornerPM(e):n===f.CENTER_PM?this.enterCenterPM(e):n===f.HIGHLIGHTS?this.enterHighlight(e):n===f.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==np(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Mo{constructor(e,n){he(this,"nCols");he(this,"nRows");he(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const l=new hR(i,a);if(r){const u=np(i,a,e);l.region=u}o.push(l)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],l=this.getCell(o,a);l&&!l.outside&&n.push(l)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],l=this.getCell(o,a);l&&!l.outside&&n.push(l)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],l=this.getCell(o,a);l&&!l.outside&&n.push(l)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return tp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(l=>l===o))return n;for(const l of i){const u=this.getRegion(l);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=Gs(r);let[l,u]=[e+o,n+a];for(;0<=l&&l<this.nRows&&0<=u&&u<this.nCols;){const d=this.grid[l][u];i.push(d),[l,u]=[l+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const l=a==null?void 0:a.toJson(n);i.push(l)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Mo(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const l=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,l)}return i}}function vR(t){const e=t.grid,n=t.elementsDict,r={};r.puzzleInfo=t.puzzleMeta,r.nRows=e.nRows,r.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),o=St.range(1,i+1);t.valid_digits&&!fR(o,t.valid_digits)&&(r.valid_digits=t.valid_digits),r.grid=e.toJSON(),t.solution&&(r.solution=t.solution);const a=n.toJSON();return Object.keys(a).length&&(r.local_constraints=a),r}function pR(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo;let i={};r&&(i=r);const o=t.valid_digits,a=t.grid,l=Mo.fromJSON(e,n,a),u=Math.min(l.nRows,l.nRows);let d=St.range(1,u+1);o!==void 0&&(d=o);const g=t.solution,h=t.local_constraints,v=ko.fromJson(h);return{puzzleMeta:i,solution:g,grid:l,valid_digits:d,elementsDict:v}}function mB(){const t=new Mo(9,9),e=new ko;return{grid:t,solution:void 0,valid_digits:St.range(1,10),puzzleMeta:{},elementsDict:e}}var gs=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(gs||{});const mR=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),ER=()=>({type:"CLEAR"}),CR=t=>({type:"DRAG",payload:t}),ad=t=>({type:"SET",payload:t}),bR=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Yd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Or=(t,e,n)=>{const r=[...t];return ol(r),{cells:r,lastCell:e,mode:n}};function IR(t,e,n){if(e===null)return Yd();if(n==="RESETTING")return Or([e],e,"SELECTING");const r=t.cells.findIndex(i=>qe(e,i));if(n==="SELECTING")return r!==-1?t:Or([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),Or(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Or([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),Or(i,null,"DESELECTING")}return t}function wR(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>qe(e,r));if(t.mode==="SELECTING")return n!==-1?t:Or([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Or(r,null,t.mode)}return t}function yR(t,e){return{...t,cells:e}}function OR(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>qe(e,i))!==-1?Or([...t.cells],e,"SELECTING"):Or([...t.cells,e],e,"SELECTING"):Or([e],e,t.mode)}function rp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Yd();case"SET":return yR(t,e.payload);case"CLICK":return IR(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return wR(t,e.payload);case"ARROW_KEY":return OR(t,e.payload.cell,e.payload.selectionMode);default:return t}}function co(t,e){return qe(t.p1,e.p1)&&qe(t.p2,e.p2)||qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function AR(t,e){return qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function ip(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!qe(t,e)}class Dl{constructor(){he(this,"edgeMarkers",[]);he(this,"cellMarkers",[]);he(this,"lineMarkers",[]);he(this,"draftLine",[]);he(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>qe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>qe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>qe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>qe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>qe(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>qe(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>qe(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>qe(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>qe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>qe(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>co(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>co(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&AR(r,e)&&this.draftLine.splice(n,1)}onDrag(e){ip(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>co(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>co(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Dl;return Object.assign(e,this),e}}const Ih=t=>({type:"ADD_EDGE_MARKER",payload:t}),wh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Ya=t=>({type:"ADD_CELL_MARKER",payload:t}),xR=t=>({type:"SET_CELL_MARKERS",payload:t}),yh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),LR=t=>({type:"DRAG",payload:t}),ws=t=>({type:"ADD_LINE_MARKERS",payload:t}),Oh=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),jd=()=>({type:"RESET"});function NR(t,e){switch(e.type){case"RESET":return new Dl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function op(){return{_undoStack:[],_redoStack:[]}}const Uo=Rt(op());function SR(){Uo.update(()=>op())}function Jn(t,e=!0){Uo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function DR(t,e=!0){Uo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function sp(){Uo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function ap(){Uo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const dl=Rt(new Dl);function Lr(t){dl.update(e=>NR(e,t))}const _l=Rt(1);function Ni(t,e){return{execute:()=>{Lr(t)},unExecute:()=>{Lr(e)}}}const ki=Rt(Yd());function ao(t){t&&ki.update(e=>rp(e,t))}function Ah(t){t&&ki.update(e=>rp(e,t))}function RR(t,e){return{execute:()=>{Ah(t)},unExecute:()=>{Ah(e)}}}const ho=Rt(null),Ps=Rt(Ui.SETTING),ld=Rt(!1),en=Rt(f.DIGIT),lp=Rt(f.DIGIT),Kd=Rt(St.range(1,10)),fn=Rt(new Mo(9,9)),Gn=Rt(xe(fn).getAllCells()),Xr=Rt({}),st=Rt(new ko),Yt=Rt(null),Go=Rt(void 0),Rl=Rt(void 0);function TR(t){Xr.update(()=>t)}function $o(t){Yt.update(()=>t)}function Vd(t){Go.update(()=>t)}function zr(t){xe(en)!==t&&(en.update(()=>t),$o(null))}function kR(){const t=xe(lp);t&&zr(t)}function cd(t){lp.update(()=>t)}function MR(t){xe(en)===t&&zr(f.DIGIT)}function UR(t){st.update(e=>(e.removeFromDict(t),e)),Vd(void 0)}function Zt(t,e,n){st.update(r=>(r.updateConstraint(t,e,n),r)),$o({id:e,constraint:n})}function xu(t){const e=xe(Yt);if(t=t?{...t}:void 0,Vd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Zt(r,e.id,n)}function vi(t,e){const r=xe(st).get(e);if(!r||!r.constraints)return;const i=r.constraints[t];i&&$o({id:t,constraint:i})}function GR(t,e,n){const r=new Mo(t,e);fn.update(()=>r),Kd.update(()=>n),st.update(()=>new ko),Xr.update(()=>({})),qd(void 0),Gn.update(()=>r.getAllCells())}function $R(t){fn.update(()=>t.grid),Xr.update(()=>t.puzzleMeta),qd(t.solution),Kd.update(()=>t.valid_digits),st.update(()=>t.elementsDict),Gn.update(()=>t.grid.getAllCells())}function cp(){const t=xe(fn);t.resetValues(),fn.update(()=>t),Gn.update(()=>t.getAllCells()),Lr(jd())}function fl(){SR(),Lr(jd()),zr(f.DIGIT);const t=ER();ao(t),Vd(void 0),$o(null)}const FR=Fn(st,t=>{for(const e of t.values()){const n=e.tool_id;if(n===f.FOG_LIGHTS||n===f.CUSTOM_FOG_CLEARING)return!0}return!1}),Xd=Fn([Wr,FR,Ps,en],([t,e,n,r])=>{const i=t.hideFog,o=e,a=r,l=a===f.DIGIT||a===f.CORNER_PM||a===f.CENTER_PM||a===f.HIGHLIGHTS||a===f.PEN_TOOL;return!i&&o&&(l||n===Ui.SOLVING)});Fn([Wr,Ps],([t,e])=>!t.hideFog&&e===Ui.SETTING);const zs=Fn([fn,Xr,st,Rl,Kd],([t,e,n,r,i])=>({grid:t,solution:r,puzzleMeta:e,valid_digits:i,elementsDict:n}));function qd(t){Rl.update(()=>t)}var PR=ce('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function zR(t,e){let n=M(e,"title",8),r=M(e,"closeCb",8);var i=PR(),o=K(i),a=K(o,!0);H(o);var l=$(o,2);H(i),ee(()=>ct(a,n())),De("click",l,function(...u){var d;(d=r())==null||d.apply(this,u)}),N(t,i)}var HR=ce('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function qr(t,e){ae(e,!1);let n=M(e,"showModal",12),r=M(e,"title",8),i=L();function o(){n(!1),_(i).close()}D(()=>(_(i),X(n())),()=>{_(i)&&n()&&_(i).showModal()}),D(()=>(_(i),X(n())),()=>{_(i)&&!n()&&_(i).close()}),ye();var a=HR(),l=K(a),u=K(l);zR(u,{get title(){return r()},closeCb:o});var d=$(u,2),g=K(d),h=K(g);Et(h,e,"default",{}),H(g),H(d),H(l),H(a),Ti(a,v=>O(i,v),()=>_(i)),De("click",l,Un(function(v){Ly.call(this,e,v)})),De("close",a,()=>{n(!1)}),De("click",a,xy(Un(()=>_(i).close()))),N(t,a),le()}var WR=ce('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function BR(t,e){ae(e,!1);let n=M(e,"searchPattern",12,""),r=M(e,"showModal",8),i=L(null);D(()=>(X(r()),_(i)),()=>{r()&&_(i)&&_(i).focus()}),ye();var o=WR(),a=$(K(o),2);En(a),x(a,"spellcheck",!1),Ti(a,l=>O(i,l),()=>_(i)),H(o),er(a,n),N(t,o),le()}var YR=ce('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function jR(t,e){let n=M(e,"showModal",12),r=M(e,"searchPattern",12,""),i=M(e,"title",8);qr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var l=YR(),u=K(l);BR(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var d=$(u,2),g=K(d),h=K(g);Et(h,e,"default",{}),H(g),H(d),H(l),N(o,l)},$$slots:{default:!0},$$legacy:!0})}var KR=ce('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function Zd(t,e){let n=M(e,"isOpen",8,!0);var r=KR(),i=K(r);Et(i,e,"default",{}),H(r),ee(()=>{x(r,"aria-expanded",n()),Ot(r,"closed",!n())}),N(t,r)}var VR=ce('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),XR=ce('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function ci(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0),i=M(e,"isCollapsible",8,!1);var o=Ce(),a=ne(o);{var l=d=>{var g=VR(),h=K(g),v=K(h),m=K(v,!0);H(v),H(h);var E=$(h,2),I=K(E);Et(I,e,"default",{}),H(E),H(g),ee(()=>ct(m,n())),N(d,g)},u=d=>{var g=XR(),h=K(g),v=K(h),m=K(v,!0);H(v),H(h);var E=$(h,2),I=K(E);Et(I,e,"default",{});var b=$(I,2);H(E),H(g),ee(()=>{ct(m,n()),Ot(b,"open",r())}),De("click",g,()=>r(!r())),N(d,g)};Q(a,d=>{i()?d(u,!1):d(l)})}N(t,o)}var qR=ce('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),ZR=ce('<ol class="svelte-cd45on"></ol>'),QR=ce("<!> <!>",1);function JR(t,e){ae(e,!1);const n=L();let r=M(e,"category",8),i=M(e,"addTool",8),o=M(e,"searchResults",8),a=L(!0);D(()=>(X(o()),X(r())),()=>{O(n,o().filter(g=>{var h,v;return(v=(h=g.info.meta)==null?void 0:h.categories)==null?void 0:v.includes(r())}))}),ye(),fe();var l=Ce(),u=ne(l);{var d=g=>{var h=QR(),v=ne(h);ci(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return _(a)},set isOpen(E){O(a,E)},$$legacy:!0});var m=$(v,2);Zd(m,{get isOpen(){return _(a)},children:(E,I)=>{var b=ZR();Qe(b,5,()=>_(n),mt,(w,A)=>{let T=()=>_(A).key,U=()=>_(A).info;var P=qR(),Y=K(P),k=K(Y,!0);H(Y),H(P),ee(()=>{var G;x(Y,"title",(G=U().meta)==null?void 0:G.description),ct(k,T())}),De("click",Y,()=>{i()(T())}),N(w,P)}),H(b),N(E,b)},$$slots:{default:!0}}),N(g,h)};Q(u,g=>{_(n).length&&g(d)})}N(t,l),le()}function e2(t,e){ae(e,!1);const n=L();let r=M(e,"searchPattern",8,""),i=M(e,"addTool",8),o=M(e,"categories",8),a=M(e,"filterFunc",8),l=M(e,"elementHandlers",8);D(()=>(X(r()),X(a()),X(l())),()=>{O(n,DD(r(),a(),l()))}),ye(),fe();var u=Ce(),d=ne(u);Qe(d,1,o,mt,(g,h)=>{JR(g,{get category(){return _(h)},get searchResults(){return _(n)},get addTool(){return i()}})}),N(t,u),le()}var t2=ce('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Tl(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8);var i=t2();x(i,"tabindex",0);var o=K(i),a=K(o);Et(a,e,"add-button",{}),H(o);var l=$(o,2),u=K(l),d=K(u);Et(d,e,"title-icon",{}),H(u);var g=$(u);H(l);var h=$(l,2),v=K(h);H(h),H(i),ee(()=>{ct(g,` ${r()??""}`),Ot(v,"open",n())}),De("click",i,()=>n(!n())),De("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,i)}var n2=ce('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function r2(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8),i=M(e,"showModal",12);function o(){i(!i())}Tl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,l)=>{var u=n2();De("click",u,Un(()=>o())),N(a,u)},"title-icon":(a,l)=>{var u=Ce(),d=ne(u);Et(d,e,"title-icon",{}),N(a,u)}},$$legacy:!0})}var i2=ce('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),o2=ce('<div class="panel-container svelte-hixu4"><!> <!></div>');function kl(t,e){let n=M(e,"isOpen",8,!0);var r=o2(),i=K(r);Et(i,e,"panel-header",{});var o=$(i,2);Zd(o,{get isOpen(){return n()},children:(a,l)=>{var u=i2(),d=K(u);Et(d,e,"panel-content",{}),H(u),N(a,u)},$$slots:{default:!0}}),H(r),N(t,r)}var s2=ce("<!> <!>",1);function a2(t,e){ae(e,!1);let n=M(e,"categories",8),r=M(e,"title",8),i=M(e,"onAddTool",8),o=M(e,"elementHandlerFilterFunc",8),a=M(e,"elementHandlers",8),l=L(!0),u=L(!1),d=L("");const g=h=>{O(u,!1),O(l,!0),i()(h)};fe(),kl(t,{get isOpen(){return _(l)},set isOpen(h){O(l,h)},$$slots:{"panel-header":(h,v)=>{var m=s2(),E=ne(m);r2(E,{get title(){return r()},get isOpen(){return _(l)},set isOpen(b){O(l,b)},get showModal(){return _(u)},set showModal(b){O(u,b)},$$slots:{"title-icon":(b,w)=>{var A=Ce(),T=ne(A);Et(T,e,"title-icon",{}),N(b,A)}},$$legacy:!0});var I=$(E,2);jR(I,{get title(){return r()},get showModal(){return _(u)},set showModal(b){O(u,b)},get searchPattern(){return _(d)},set searchPattern(b){O(d,b)},children:(b,w)=>{e2(b,{get searchPattern(){return _(d)},get categories(){return n()},get filterFunc(){return o()},addTool:g,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),N(h,m)},"panel-content":(h,v)=>{var m=Ce(),E=ne(m);Et(E,e,"panel-content",{}),N(h,m)}},$$legacy:!0}),le()}var l2=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function c2(t){var e=l2();N(t,e)}var lo=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(lo||{});const Qd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Jd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),u2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),d2=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),xh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function _2(t){st.update(e=>(e.addToDict(t),e))}function Hs(t,e){const n=xe(Go);n&&(e.shape={...n}),st.update(r=>(r.addConstraint(e.toolId,t,e),r)),$o({id:t,constraint:e})}function e_(t,e){e&&st.update(n=>(n.removeConstraint(t,e),n))}function up(t,e){st.update(n=>(n.setElement(t,e),n))}function Lh(t){t.type===lo.ADD_LOCAL_CONSTRAINT?Hs(t.payload.id,t.payload.constraint):t.type===lo.REMOVE_LOCAL_CONSTRAINT?e_(t.payload.tool,t.payload.id):t.type===lo.REMOVE_LOCAL_CONSTRAINT_GROUP?UR(t.payload.tool):t.type===lo.RESTORE_ELEMENT?up(t.payload.tool,t.payload.constraints):t.type===lo.UPDATE_LOCAL_CONSTRAINT&&Zt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ws(t,e){return{execute:()=>{Lh(t)},unExecute:()=>{Lh(e)}}}var f2=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function dp(t){var e=f2();N(t,e)}var g2=ce('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function h2(t,e){ae(e,!1);const n=Xe(),r=()=>pe(st,"$elementsDictStore",n),i=L(),o=L();let a=M(e,"tool_id",8),l=M(e,"neg_tool_id",8),u=M(e,"description",8);function d(){_(i)&&(_(i).negative_constraints||Wu(i,_(i).negative_constraints={}),Wu(i,_(i).negative_constraints[l()]=!_(o)),up(a(),_(i)),O(o,!_(o)))}D(()=>(r(),X(a())),()=>{O(i,r().get(a()))}),D(()=>(_(i),X(l())),()=>{var I;O(o,(I=_(i))!=null&&I.negative_constraints?!!_(i).negative_constraints[l()]:!1)}),ye(),fe();var g=g2(),h=K(g),v=K(h);di(2),H(h);var m=$(h,2),E=K(m,!0);H(m),H(g),ee(()=>{x(g,"title",u()),Ot(h,"checked",_(o)),Ot(v,"checked",_(o)),ct(E,l())}),De("click",v,d),N(t,g),le()}var v2=ce('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function p2(t,e){ae(e,!1);const n=Xe(),r=()=>pe(ho,"$svgRefStore",n),i=()=>pe(st,"$elementsDictStore",n),o=()=>pe(Yt,"$currentConstraintStore",n),a=L();let l=M(e,"constraint_id",8),u=M(e,"tool_id",8);function d(){vi(l(),u()),r()&&r().focus()}function g(){const w=i().getConstraint(u(),l());if(!w)return;const A=Jd(l(),u()),T=Qd(l(),w),U=Ws(A,T);Jn(U)}D(()=>o(),()=>{var w;O(a,(w=o())==null?void 0:w.id)}),ye(),fe();var h=v2(),v=K(h),m=K(v);H(v);var E=$(v,2),I=K(E),b=K(I);dp(b),H(I),H(E),H(h),ee(()=>{Ot(h,"active",l()===_(a)),ct(m,`ID: ${l()??""}`)}),De("click",I,Un(g)),De("click",h,d),N(t,h),le()}var m2=ce('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function E2(t,e){ae(e,!1);const n=Xe(),r=()=>pe(st,"$elementsDictStore",n),i=L();let o=M(e,"tool_id",8);D(()=>(r(),X(o())),()=>{O(i,r().get(o()))}),ye(),fe();var a=Ce(),l=ne(a);{var u=d=>{var g=m2(),h=K(g);Qe(h,5,()=>Object.entries(_(i).constraints),v=>v[0],(v,m)=>{p2(v,{get constraint_id(){return _(m)[0]},get tool_id(){return o()}})}),H(h),H(g),N(d,g)};Q(l,d=>{_(i)&&_(i).constraints&&Object.entries(_(i).constraints).length&&d(u)})}N(t,a),le()}class ke{constructor(e,n){he(this,"x");he(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new ke(this.x+e.x,this.y+e.y)}subtract(e){return new ke(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new ke(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new ke(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function _p(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Cn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new ke(i.x,i.y)};function Xa(t,e){const n=Ll(t),r=new ke(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function C2(t,e){const n=Ll(t),r=new ke(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function qa(t,e){const n=Ll(t),r=GS(n),o=r.map(d=>new ke(d.c,d.r)).map(d=>d.distance(t)),a=o.indexOf(Math.min(...o)),l=r[a],u=o[a];return e===void 0||u<e?{corner:l,dist:u,idx:a}:null}function Za(t,e){const n=Ll(t),r=$S(n),o=r.map(d=>new ke(d.c,d.r)).map(d=>d.distance(t)),a=o.indexOf(Math.min(...o)),l=r[a],u=o[a];return e===void 0||u<e?{edge:l,dist:u,idx:a}:null}function ms(t,e,n){const r=Xa(t);if(!r)return null;const i=Za(t);if(!i)return null;const o=qa(t);if(!o)return null;const a=C2(t);if(!a)return null;let l,u;e===Lt.CORNER?(l=o.corner,u="corner"):e===Lt.EDGE?(l=i.edge,u="edge"):e===Lt.CELL_CENTER?(l=a.cellCenter,u="cell center"):e===Lt.CORNER_OR_EDGE?o.dist<i.dist?(l=o.corner,u="corner"):(l=i.edge,u="edge"):e===Lt.CORNER_OR_CENTER?o.dist<a.dist?(l=o.corner,u="corner"):(l=a.cellCenter,u="cell center"):e===Lt.EDGE_OR_CENTER?i.dist<a.dist?(l=i.edge,u="edge"):(l=a.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<a.dist?(l=i.edge,u="edge"):o.dist<i.dist&&o.dist<a.dist?(l=o.corner,u="corner"):(l=a.cellCenter,u="cell center");const g=new ke(l.c,l.r).subtract(t).length(),h=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:i.edge,corner:o.corner,dist:g,closest:l,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:h}}class Fo{constructor(e=.4){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"_prevPoint",null);he(this,"_prevCell",null);he(this,"_lastPointerDownTime",0);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_tapCount",0);he(this,"_lastTapPosition",null);he(this,"_lastTapTime",0);he(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Cn(e,n);if(!r)return;this._prevPoint=r;const i=Xa(r);if(!i)return;const o=i.cell;this._prevCell=o,this._lastPointerDownTime=e.timeStamp;const a={event:e,cell:o,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){const r=Cn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=Xa(r,i);if(!o)return;const a=o.cell;if(this._prevCell&&qe(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const l={event:e,cell:a,tapCount:this._tapCount};this.onMove&&this.onMove(l),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(l)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Cn(e,n);if(!r)return;const i=Xa(r,void 0);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const l=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,l>0&&l<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Nh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function b2(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Sh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Dh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function I2(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===f.HIGHLIGHTS&&i.highlights.length?Nh(i,e):i.value!==null?b2(i,e):n===f.CORNER_PM&&i.cornerMarks.length?Sh(i,e):n===f.CENTER_PM&&i.centerMarks.length?Dh(i,e):i.cornerMarks.length?Sh(i,e):i.centerMarks.length?Dh(i,e):i.highlights.length?Nh(i,e):r:r}function Er(t,e,n,r=!1){if(!(t&&e))return;const i=Qd(t,e),o=Jd(t,n),a=Ws(i,o);Jn(a,r)}function mr(t,e,n,r=!0){if(!(t&&e))return;const i=Jd(t,n),o=Qd(t,e),a=Ws(i,o);Jn(a,r)}function ud(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=xh(r,t,n),a=xh(r,t,e),l=Ws(o,a);Jn(l,i)}function w2(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols};let a=null,l=null,u=null,d=!1,g=!1,h=Tn.DYNAMIC;function v(E){d=!1;const I=E.cell;if(Ft(E.cell,o)){if(h===Tn.DYNAMIC){const w=xe(st),A=lR(w,n,I);if(A){const U=BD(A.arrow,A.matchLineIdx);ud(A.id,A.arrow,U,n,!0),g=!0;return}const T=ph(w,n,I);if(!T)d=!0,h=Tn.EDIT_BULB,u=null,a=null;else{h=Tn.EDIT_ARROWS,u=T[0],a=T[1],a=Qu(a,I),Zt(n,u,a);return}}if(h===Tn.EDIT_BULB&&!u){u=St.uniqueId(),a=Qv(n,[I]),Hs(u,a);return}else h===Tn.EDIT_BULB&&u&&a?(a=PD(a,I),Zt(n,u,a)):h===Tn.EDIT_ARROWS&&u&&a&&(a=zD(a,I,r==null?void 0:r.allowSelfIntersection),Zt(n,u,a))}}return i.onDragStart=E=>{h=Tn.DYNAMIC,v(E)},i.onDrag=E=>{v(E)},i.onDragEnd=()=>{if(g){g=!1;return}h===Tn.EDIT_ARROWS&&u&&a?HD(a)?(a=WD(a),Zt(n,u,a)):(ud(u,l,a,n),l=a):h===Tn.EDIT_BULB&&(Er(u,a,n),l=a),h=Tn.DYNAMIC},i.onTap=E=>{if(d)return;const I=E.cell,b=xe(st);if(ph(b,n,I)){mr(u,a,n);return}},{pointerDown:E=>{E.button===0&&i.pointerDown(E,t)},pointerMove:E=>{i.pointerMove(E,t)},pointerUp:E=>{i.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function y2(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let l=null,u=null;function d(v){return!!Ft(v.cell,o)}function g(v){if(!u||!l)throw"UNREACHABLE";const m=v.cell;d(v)&&(l=FD(l,m,a),Zt(n,u,l))}return i.onDragStart=v=>{xe(Bt)!==Re.DELETE&&(u=St.uniqueId(),l=qv(n,[],r==null?void 0:r.defaultValue),Hs(u,l),g(v))},i.onDrag=v=>{g(v)},i.onDragEnd=()=>{u&&l&&l.cells.length<=1?e_(n,u):u&&l&&Er(u,l,n,!1),u=null},i.onTap=v=>{if(xe(Bt)===Re.ADD_EDIT)return;const E=v.cell,I=xe(st),b=aR(I,n,E);if(b){const[w,A]=b;mr(w,A,n)}},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:v=>{i.pointerMove(v,t)},pointerUp:v=>{i.pointerUp(v,t)},keyDown:()=>{},keyUp:()=>{}}}const O2=Fn(st,t=>{const e=[];for(const[n,r]of t.entries())My(n)&&e.push(r);return e});function Po(t){return Fn(st,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push(o);return r})}const t_=Po(Td),fp=Fn(t_,t=>{const e=t.find(r=>r.tool_id===f.FOG_LIGHTS);return e?e.constraints:{}}),A2=Fn(st,t=>{for(const e of t.values())if(e.tool_id===f.CUSTOM_FOG_CLEARING)return e}),x2=Fn(t_,t=>{const e=t.find(r=>r.tool_id===f.MINIMUM);return e?e.constraints:{}}),L2=Fn(t_,t=>{const e=t.find(r=>r.tool_id===f.MAXIMUM);return e?e.constraints:{}}),N2=Po(Co),S2=Po(xs),D2=Po(As),R2=Po(yv),T2=Po(Sy),Qa=Rt(void 0),Ja=Rt(void 0),el=Rt(void 0),tl=Rt(void 0),nl=Rt(void 0),hs=Rt(void 0),rl=Rt(void 0);Fn([st,en],([t,e])=>{const n=e;return t.get(n)});function k2(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols};function a(d){const g=xe(st),h=d.cell;if(!Ft(d.cell,o))return;let m=xe(Bt);const E=uo(g,n,h);if(m===Re.DYNAMIC&&(m=E?Re.DELETE:Re.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&uo(g,r.oppositeConstraintId,h)))if(E&&m===Re.DELETE){const[I,b]=E;mr(I,b,n)}else if(!E&&m===Re.ADD_EDIT){const I=nd(n,h,r==null?void 0:r.defaultValue),b=St.uniqueId();Er(b,I,n,!0)}else E&&m===Re.ADD_EDIT&&vi(E[0],n)}i.onDragStart=d=>{a(d)},i.onDrag=d=>{a(d)},i.onMove=d=>{if(!Ft(d.cell,o)){Qa.set(void 0);return}const h=nd(n,d.cell,r==null?void 0:r.defaultValue),v=xe(Go);v&&(h.shape={...v});const m=xe(Bt),E=xe(st),I=uo(E,n,d.cell);if(!I&&m===Re.DELETE){Qa.set(void 0);return}let b="add",w;I&&(m===Re.DELETE||m===Re.DYNAMIC)&&(b="remove",w=I[0]);const A={tool:h,match_id:w,mode:b};Qa.set(A)};function l(d){const g=xe(Yt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!xo(d)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Fs(h,m),Zt(n,v,h))}return{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class Ml{constructor(e){he(this,"onDragStart",null);he(this,"onMove",null);he(this,"feature");he(this,"_prevCoord",null);he(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=Cn(e,n);if(!r)return;const i=ms(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=Cn(e,n);if(!r)return;const i=ms(r,this.feature);if(!i||this._prevCoord&&qe(i.closest,this._prevCoord)&&this._prevCellCoord&&qe(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function M2(t,e,n,r){const i=(r==null?void 0:r.targets)??Lt.CLOSEST,o=new Ml(i),a={nRows:e.nRows,nCols:e.nCols};function l(g){const h=xe(st),v=g.cell,m=g.closest;let E=xe(Bt);if(!Ft(v,a))return;const b=Eh(h,n,m);if(E===Re.DYNAMIC&&(E=b?Re.DELETE:Re.ADD_EDIT),b&&E===Re.DELETE){const w=b[0];mr(w,b[1],n)}else if(!b&&E===Re.ADD_EDIT){const w=od(n,m,""),A=St.uniqueId();Er(A,w,n,!0)}else b&&E===Re.ADD_EDIT&&vi(b[0],n)}function u(g){const h=xe(Yt);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!xo(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=Fs(v,E),Zt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if(!Ft(g.cell,a)){rl.set(void 0);return}const v=xe(Bt),m=od(n,g.closest,""),E=xe(Go);E&&(m.shape={...E});const I=xe(st),b=Eh(I,n,g.closest);if(!b&&v===Re.DELETE){rl.set(void 0);return}let w="add",A;b&&(v===Re.DYNAMIC||v===Re.DELETE)&&(w="remove",A=b[0]);const T={tool:m,match_id:A,mode:w};rl.set(T)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function U2(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Lt.CORNER_OR_EDGE,o=new Ml(i),a={nRows:e.nRows,nCols:e.nCols};function l(g){const h=xe(st),v=g.cell,m=g.direction,E=go(m);if(Ft(v,a))return;const b=lh(v,E);if(!Ft(b,a))return;let A=xe(Bt);const T=mh(h,n,v,E);if(A===Re.DYNAMIC&&(A=T?Re.DELETE:Re.ADD_EDIT),T&&A===Re.DELETE){const[U,P]=T;mr(U,P,n)}else if(!T&&A===Re.ADD_EDIT){const U=td(n,v,E,""),P=St.uniqueId();Er(P,U,n,!0)}else T&&A===Re.ADD_EDIT&&vi(T[0],n)}function u(g){const h=xe(Yt);if(!h)return;let v=h.constraint;const m=h.id;if(v.value===void 0||!xo(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(v==null?void 0:v.value,g.key);E!==void 0&&E!==v.value&&(v=Fs(v,E),Zt(n,m,v))}return o.onDragStart=g=>{l(g)},o.onMove=g=>{if(Ft(g.cell,a)){hs.set(void 0);return}const v=go(g.direction),m=lh(g.cell,v);if(!Ft(m,a)){hs.set(void 0);return}const I=xe(Bt),b=xe(st);if(!mh(b,n,g.cell,v)&&I===Re.DELETE){hs.set(void 0);return}const A=td(n,g.cell,v,"");hs.set(A)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function G2(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols};let a=null,l=null;function u(h){const v=xe(st),m=h.cell;if(!Ft(h.cell,o))return;let I=xe(Bt);const b=sR(v,n,m);if(b&&(h.event.shiftKey||I===Re.ADD_EDIT)&&(l=b[0],a=b[1],$o({id:l,constraint:a}),I=Re.ADD_EDIT),I===Re.DYNAMIC&&(I=b?Re.DELETE:Re.ADD_EDIT),b&&I===Re.DELETE){mr(b[0],b[1],n);return}if(!a&&I===Re.ADD_EDIT){a=Jv(n,[m]),l=St.uniqueId(),Hs(l,a);return}else if(a&&l&&I===Re.ADD_EDIT){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=jD(a,m,w),Zt(n,l,a);return}}function d(h){const v=xe(Yt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!xo(h)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,h.key);I!==void 0&&I!==m.value&&(m=KD(m,I),Zt(n,E,m))}return i.onDragStart=h=>{l=null,a=null,u(h)},i.onDrag=h=>{u(h)},i.onDragEnd=()=>{l&&a&&Er(l,a,n,!1),l=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:h=>{d(h)},keyUp:()=>{}}}var vr=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(vr||{});const $2=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),gp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),F2=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),P2=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),z2=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),H2=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Lu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),W2=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Nu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Ul=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function B2(t,e,n){if(e===f.DIGIT){const r=t.map(a=>a.value),i=$2(t,n),o=gp(t,r);return[i,o]}if(e===f.GIVEN){const r=t.map(l=>l.value),i=t.map(l=>l.given),o=F2(t,n),a=P2(t,r,i);return[o,a]}if(e===f.REGIONS){const r=t.map(a=>a.region),i=z2(t,n),o=H2(t,r);return[i,o]}if(e===f.HIGHLIGHTS&&n!==null){const r=Nu(t,n),i=Nu(t,n);return[r,i]}if(e===f.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=Nu(t,n),o=Ul(t,r);return[i,o]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n!==null){const r=Lu(t,n,e),i=Lu(t,n,e);return[r,i]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n===null){let r=[];e===f.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=Lu(t,n,e),o=W2(t,r,e);return[i,o]}}function ls(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Gn.update(i=>i)}function vo(t){switch(t.type){case vr.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ls(e,f.DIGIT,n,!0);break}case vr.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ls(e,f.GIVEN,n,!0);break}case vr.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ls(e,f.REGIONS,n,!0);break}case vr.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ls(e,f.HIGHLIGHTS,n,!0);break}case vr.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ls(e,r,n,!0);break}case vr.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Gn.update(r=>r);break}case vr.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Gn.update(i=>i);break}case vr.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Gn.update(r=>r);break}case vr.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Gn.update(r=>r);break}case vr.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===f.CENTER_PM?e[i].centerMarks=r[i]:n===f.CORNER_PM&&(e[i].cornerMarks=r[i]);Gn.update(i=>i);break}}}function Y2(t,e){return{execute:()=>{vo(t)},unExecute:()=>{vo(e)}}}const oo=new Fo;function Rh(t,e){return t.shiftKey?gs.SELECTING:t.ctrlKey||t.metaKey||e?gs.DYNAMIC:t.altKey?gs.DESELECTING:gs.RESETTING}function dd(t,e,n,r,i=!1){switch(e){case f.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case f.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case f.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case f.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case f.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function j2(t,e){const n=[e,f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],r=i=>i===f.CORNER_PM||i===f.CENTER_PM||i===f.DIGIT;for(const i of n){const o=dd(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function Su(t,e,n,r){const i=B2(e,n,r);if(i){const o=i[0],a=i[1],l=Y2(o,a),u=ad(t),g=[RR(u,u),l];DR(g)}}function K2(t,e,n){const r=[f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};oo.onTap=m=>{if(m.tapCount!==2)return;const I=Ft(m.cell,i)?m.cell:null;if(!I)return;const b=I2(I,e,n),w=ad(b);ao(w)},oo.onDragStart=m=>{const E=Ft(m.cell,i),I=xe(ld),b=Rh(m.event,I),w=E?m.cell:null,A=mR(w,b);ao(A)},oo.onDrag=m=>{const I=Ft(m.cell,i)?m.cell:null,b=CR(I);ao(b)};function o(m){if(!sO(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=ad(E);return ao(I),!0}function a(m){if(!dO(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=fO(m);return zr(E),!0}return m.type==="keyup"?(kR(),!0):!1}function l(m){if(!uO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return zr(I),cd(I),!0}else{const E=_O(m.code);return zr(E),cd(E),!0}}function u(m){if(!hO(m))return!1;const E=xe(ki).lastCell;let I=null;if(E!==null){const[A,T]=vO(m),[U,P]=[Ch(E.r+T,0,i.nRows-1),Ch(E.c+A,0,i.nCols-1)];I={r:U,c:P}}else I={r:0,c:0};const b=Rh(m,!1),w=bR(I,b);return ao(w),!0}function d(m){const E=cO(m);if(E===void 0)return!1;const I=xe(ki).cells,b=[];if(I.forEach(w=>{const A=e.getCell(w.r,w.c);A&&b.push(A)}),E===null){const{tool:w,cells:A}=j2(b,n);if(A.length)return Su(I,A,w,E),!0}else{let w=dd(b,n,"different",E,!0);if(w.length)return Su(I,w,n,E),!0;if(w=dd(b,n,"equal",E,!0),w.length)return Su(I,w,n,E),!0}return!1}function g(m){return m.repeat?!1:d(m.key)}const h=St.throttle(m=>{oo.pointerMove(m,t)},10);return{pointerDown(m){m.button===0&&oo.pointerDown(m,t)},pointerMove(m){h(m)},pointerUp(m){oo.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||g(m)||a(m)||l(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){d(m.currentTarget.value)}}}function V2(t,e,n,r){const i=[We.N,We.NE,We.E,We.SE,We.S,We.SW,We.W,We.NW],o=new Ml(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let l=null,u=null;function d(v){const m=xe(st),E=v.cell;if(!Ft(v.cell,a))return;let b=xe(Bt);v.event.altKey&&(b=Re.DELETE);const w=uo(m,n,E),A=go(v.direction);!w&&b!==Re.DELETE?(l=rd(n,E,A),u=St.uniqueId(),Er(u,l,n,!0)):w&&(w[1].direction===A&&b===Re.ADD_EDIT?([u,l]=w,vi(w[0],n)):w[1].direction===A&&b===Re.DYNAMIC||b===Re.DELETE?mr(w[0],w[1],n):(u=w[0],l={...w[1],direction:A},Zt(n,w[0],l)))}function g(v){if(!aO(v))return;const m=xe(Yt);if(!m)return;const E=m.id,I=m.constraint;if(!Gi(I.toolId))return;const w=(i.indexOf(I.direction)+1)%i.length;l={...I,direction:i[w]},Zt(n,E,l)}return o.onDragStart=v=>{d(v)},o.onMove=v=>{if(!Ft(v.cell,a)){Ja.set(void 0);return}const E=go(v.direction),I=rd(n,v.cell,E),b=xe(Bt),w=xe(st),A=uo(w,n,v.cell);if(!A&&b===Re.DELETE){Ja.set(void 0);return}let T="add",U;A&&(b===Re.DELETE||A[1].direction===E&&b===Re.DYNAMIC)&&(T="remove",U=A[0]);const P={tool:I,match_id:U,mode:T};Ja.set(P)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:v=>{o.pointerMove(v,t)},pointerUp:()=>{},keyDown:v=>{g(v)},keyUp:()=>{}}}function X2(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function q2(t,e,n,r){const i=new Ml(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,l=null;function u(g){const h=xe(st),v=g.cell;if(!Ft(g.cell,o))return;let E=xe(Bt);E===Re.DYNAMIC&&g.event.altKey&&(E=Re.DELETE);const I=go(g.direction),b=uo(h,n,v);if(!b&&E!==Re.DELETE)a=id(n,v,I),l=St.uniqueId(),Er(l,a,n,!0);else if(b)if(b[1].directions.includes(I)&&E!==Re.DELETE&&([l,a]=b,vi(b[0],n)),b&&E===Re.DELETE)mr(b[0],b[1],n);else{const w=X2(b[1].directions,I);w.length>0?(l=b[0],a={...b[1],directions:w},Zt(n,b[0],a)):mr(b[0],b[1],n)}}return i.onDragStart=g=>{u(g)},i.onMove=g=>{if(!Ft(g.cell,o)){el.set(void 0);return}const v=go(g.direction),m=id(n,g.cell,v);if(xe(Bt)===Re.DELETE){el.set(void 0);return}el.set(m)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class Z2{constructor(e){he(this,"onDragStart",null);he(this,"onMove",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevCoord",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Cn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=Cn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i||this._prevCoord&&qe(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Cn(e,n);if(!r)return;const i=Za(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function Q2(t,e,n,r){const i=new Z2,o={nRows:e.nRows,nCols:e.nCols};function a(d){const g=xe(st),h=d.coord;let v=xe(Bt);const m=al(h);if(!m.every(b=>Ft(b,o)))return;let I=null;if(I=hh(g,n,m),v===Re.DYNAMIC&&(v=I?Re.DELETE:Re.ADD_EDIT),I&&v===Re.DELETE){const b=I[0];mr(b,I[1],n)}else if(!I&&v===Re.ADD_EDIT){const b=(r==null?void 0:r.defaultValue)??"",w=ed(n,m,b),A=St.uniqueId();Er(A,w,n,!0)}else I&&v===Re.ADD_EDIT&&vi(I[0],n)}function l(d){const g=xe(Yt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!xo(d)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Fs(h,m),Zt(n,v,h))}return i.onDragStart=d=>{a(d)},i.onMove=d=>{if(!Ft(d.coord,o)){tl.set(void 0);return}const h=xe(Bt),v=al(d.coord),m=(r==null?void 0:r.defaultValue)??"",E=ed(n,v,m),I=xe(Go);I&&(E.shape={...I});const b=xe(st),w=hh(b,n,v);if(!w&&h===Re.DELETE){tl.set(void 0);return}let A="add",T;w&&(h===Re.DYNAMIC||h===Re.DELETE)&&(A="remove",T=w[0]);const U={tool:E,match_id:T,mode:A};tl.set(U)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class J2{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"onMove",null);he(this,"_prevCoord",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Cn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=qa(r,o);if(!a)return;this._prevCoord=a.corner;const l={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(l)}pointerMove(e,n){const r=Cn(e,n);if(!r)return;const i=qa(r,this._margin);if(!i||this._prevCoord&&qe(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Cn(e,n);if(!r)return;const i=qa(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function eT(t,e,n,r){const i=new J2,o={nRows:e.nRows,nCols:e.nCols};function a(d){const g=xe(st),h=d.coord;let v=xe(Bt);const m=sl(h);if(!m.every(b=>Ft(b,o)))return;let I=null;if(I=vh(g,n,h),v===Re.DYNAMIC&&(v=I?Re.DELETE:Re.ADD_EDIT),I&&v===Re.DELETE){const b=I[0];mr(b,I[1],n)}else if(!I&&v===Re.ADD_EDIT){const b=Ju(n,m,r==null?void 0:r.defaultValue),w=St.uniqueId();Er(w,b,n,!0)}else I&&v===Re.ADD_EDIT&&vi(I[0],n)}function l(d){const g=xe(Yt);if(!g)return;let h=g.constraint;const v=g.id;if(h.value===void 0||!xo(d)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(h==null?void 0:h.value,d.key);m!==void 0&&m!==h.value&&(h=Fs(h,m),Zt(n,v,h))}return i.onDragStart=d=>{a(d)},i.onMove=d=>{if(!Ft(d.coord,o)){nl.set(void 0);return}const h=xe(Bt),v=sl(d.coord),m=Ju(n,v,r==null?void 0:r.defaultValue),E=xe(Go);E&&(m.shape={...E});const I=xe(st),b=vh(I,n,d.coord);if(!b&&h===Re.DELETE){nl.set(void 0);return}let w="add",A;b&&(h===Re.DYNAMIC||h===Re.DELETE)&&(w="remove",A=b[0]);const T={tool:m,match_id:A,mode:w};nl.set(T)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class tT{constructor(){he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onTap",null);he(this,"_prevType",null);he(this,"_isDown",!1);he(this,"_isTap",!1);he(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Cn(e,n);if(!r)return;const i=ms(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Cn(e,n);if(!r)return;const i=ms(r,Lt.CLOSEST);if(!i||this._prevCoords&&qe(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&ip(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Cn(e,n);if(!r)return;const i=ms(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&qe(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function nT(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new tT;return r.onTap=o=>{const a=o.coords,l=xe(_l),u=xe(dl);if(o.type==="cell center"){if(!MS(a,n))return;const g=u.getCellMarker(a);if(g)if(g.marker==="X"){const h={...a,colorId:l,marker:"O"},v=Ya(h),m=Ya(g),E=Ni(v,m);Jn(E)}else{const h=yh(a),v=Ya(g),m=Ni(h,v);Jn(m)}else{const h={...a,colorId:l,marker:"X"},v=Ya(h),m=yh(a),E=Ni(v,m);Jn(E)}}else if(o.type==="edge"){const d=u.getEdgeMarker(a);if(d){const g=wh(a),h=Ih(d),v=Ni(g,h);Jn(v)}else{const g={...a,colorId:l},h=Ih(g),v=wh(a),m=Ni(h,v);Jn(m)}}},r.onDrag=o=>{const a=o.coords,l=xe(_l);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:l},d=LR(u);Lr(d)}},r.onDragEnd=()=>{const o=xe(dl);if(o.mode==="add"){const a=o.draftLine.filter(l=>!o.lineMarkers.some(u=>co(l,u)));if(a.length){const l=ws(a),u=Oh(a),d=Ni(l,u);Jn(d)}}else{const a=o.lineMarkers.filter(l=>o.draftLine.some(u=>co(l,u)));if(a.length){const l=Oh(a),u=ws(a),d=Ni(l,u);Jn(d)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function rT(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function iT(t,e){const n=Fv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function oT(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function sT(t){for(let e=0;;e++){const n=oT(e);if(!t.has(n))return n}}function aT(t,e,n){const r=new Fo,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,l=null,u=null,d="cells2",g=xe(Bt);function h(m){const E=xe(st),I=m.cell;if(!Ft(m.cell,i))return;const w=cR(E,n,I);if(w?(l=w[0],o=w[1],g===An.DYNAMIC&&(g=An.MOVE),g===An.MOVE&&(g=An.MOVE,u=I,d=o.cells2.some(T=>qe(T,I))?"cells2":"cells")):g===An.DYNAMIC&&(g=An.SELECT),g===An.SELECT&&l===null){l=St.uniqueId();const A=uR(E,n),T=sT(A);o=rT(n,[I],T),Hs(l,o);return}else if(g===An.SELECT&&l&&o){o=iT(o,I),Zt(n,l,o);return}else if(g===An.MOVE&&l&&o&&u){const A={r:I.r-u.r,c:I.c-u.c},U=(d==="cells2"?o.cells2:o.cells).map(Y=>({r:Y.r+A.r,c:Y.c+A.c}));if(!U.every(Y=>Ft(Y,i)))return;d==="cells"?o={...o,cells:U}:o={...o,cells2:U},u=I,Zt(n,l,o)}}return r.onDragStart=m=>{g=xe(Bt),l=null,o=null,u=null,h(m)},r.onDrag=m=>{h(m)},r.onDragEnd=()=>{l&&o&&(g===An.SELECT?Er(l,o,n):g===An.MOVE&&ud(l,a,o,n),a=o)},r.onTap=()=>{l&&g!==An.SELECT&&(e_(n,l),l=null,o=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function lT(t){if(t.type===ve.SELECTION)return function(n,r,i){return K2(n,r,i)};if(t.type===ve.SINGLE_CELL){let e=function(r,i,o){return k2(r,i,o,n)};const n=t;return e}else if(t.type===ve.SINGLE_CELL_ARROW){let e=function(r,i,o){return V2(r,i,o,n)};const n=t;return e}else if(t.type===ve.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return q2(r,i,o,n)};const n=t;return e}else if(t.type===ve.EDGE){let e=function(r,i,o){return Q2(r,i,o,n)};const n=t;return e}else if(t.type===ve.CORNER){let e=function(r,i,o){return eT(r,i,o,n)};const n=t;return e}else if(t.type===ve.LINE){let e=function(r,i,o){return y2(r,i,o,n)};const n=t;return e}else if(t.type===ve.ARROW){let e=function(r,i,o){return w2(r,i,o,n)};const n=t;return e}else if(t.type===ve.CAGE){let e=function(r,i,o){return G2(r,i,o,n)};const n=t;return e}else{if(t.type===ve.CLONE)return function(n,r,i){return aT(n,r,i)};if(t.type===ve.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return M2(r,i,o,n)};const n=t;return e}else if(t.type===ve.OUTSIDE_DIRECTION){let e=function(r,i,o){return U2(r,i,o,n)};const n=t;return e}else if(t.type===ve.PEN)return function(n,r){return nT(n,r)}}}const hp=Fn([ho,fn,en],([t,e,n])=>{const r=Nl(n,Ht);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?lT(i):void 0;return o?o(t,e,n):void 0}),Bt=Rt(void 0);var cT=ce('<button class="form-button svelte-yu5gtn" role="switch"> </button>'),uT=ce('<div class="tool-buttons svelte-yu5gtn"></div>');function dT(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Bt,"$toolModeStore",n),i=L(),o=L();let a=M(e,"tool_id",8);function l(h){fo(Bt,h)}fo(Bt,Qy(a())),D(()=>X(a()),()=>{O(i,Zy(a()))}),D(()=>r(),()=>{O(o,r())}),ye(),fe();var u=Ce(),d=ne(u);{var g=h=>{var v=uT();Qe(v,5,()=>Object.values(_(i)),mt,(m,E)=>{var I=cT(),b=K(I,!0);H(I),ee(()=>{x(I,"aria-checked",_(E)===_(o)),Ot(I,"selected",_(E)===_(o)),ct(b,_(E))}),De("click",I,()=>l(_(E))),N(m,I)}),H(v),N(h,v)};Q(d,h=>{_(i)&&h(g)})}N(t,u),le()}var _T=ce('<div class="editor-wrapper svelte-v0t6hq"><div class="editor svelte-v0t6hq"><div class="editor-layout svelte-v0t6hq"><div class="bool-constraints-container svelte-v0t6hq"><!></div> <!> <!></div></div></div>');function fT(t,e){ae(e,!1);let n=M(e,"tool_id",8);const i=Ht[n()].negative_constraints,o=!!(i&&Object.keys(i).length>0),l=wv(n())||o;fe();var u=Ce(),d=ne(u);{var g=h=>{var v=_T(),m=K(v),E=K(m),I=K(E),b=K(I);{var w=U=>{var P=Ce(),Y=ne(P);Qe(Y,1,()=>i,mt,(k,G)=>{h2(k,{get tool_id(){return n()},get neg_tool_id(){return _(G).toolId},get description(){return _(G).description}})}),N(U,P)};Q(b,U=>{i&&U(w)})}H(I);var A=$(I,2);dT(A,{get tool_id(){return n()}});var T=$(A,2);E2(T,{get tool_id(){return n()}}),H(E),H(m),H(v),N(h,v)};Q(d,h=>{l&&h(g)})}N(t,u),le()}var gT=ce('<button class="form-button icon header-button svelte-8ay9bc"><!></button>'),hT=ce('<div class="element-button-wrapper svelte-8ay9bc"><div class="constraints-ui svelte-8ay9bc"><div class="header svelte-8ay9bc"><div class="element-icon-container svelte-8ay9bc"></div> <div class="element-name svelte-8ay9bc"></div> <!></div> <!></div></div>');function Du(t,e){ae(e,!1);const n=Xe(),r=()=>pe(st,"$elementsDictStore",n),i=()=>pe(en,"$toolStore",n),o=L();let a=M(e,"tool_id",8),l=M(e,"elementHandlers",8);const u=!!l()[a()].permanent;let d=L(!1),g=a();function h(){_(d)?zr(f.DIGIT):zr(a())}function v(){MR(a());const Y=r().get(a());if(!Y)return;const k=u2(a()),G=d2(a(),Y),te=Ws(k,G);Jn(te)}function m(){var te,ie;const Y=(te=_(o).meta)==null?void 0:te.description,k=((ie=_(o).meta)==null?void 0:ie.usage)??qy(a());let G;return Y&&Y.length&&(G=Y),k.length&&(G?G=G+`

`+k:G=k),G}D(()=>(X(a()),X(l())),()=>{O(o,Nl(a(),l()))}),D(()=>(X(a()),i()),()=>{O(d,a()===i())}),ye(),fe();var E=hT(),I=K(E);Ot(I,"clickable",!0);var b=K(I);ee(()=>x(b,"title",m()));var w=$(K(b),2);w.textContent=g;var A=$(w,2);{var T=Y=>{var k=gT(),G=K(k);dp(G),H(k),De("click",k,Un(v)),N(Y,k)};Q(A,Y=>{u||Y(T)})}H(b);var U=$(b,2);{var P=Y=>{fT(Y,{get tool_id(){return a()}})};Q(U,Y=>{_(d)&&Y(P)})}H(I),H(E),ee(()=>Ot(I,"selected",_(d))),De("click",b,h),N(t,E),le()}var vT=ce("<!> <!> <!>",1);function pT(t,e){ae(e,!1);const n=Xe(),r=()=>pe(st,"$elementsDictStore",n),i=L();let o=M(e,"elementHandlers",8);const a=Gy,l=u=>{_2(u),zr(u)};D(()=>(r(),z),()=>{O(i,(u,d)=>{var v;const g=r().has(u);return!!((v=d.meta)!=null&&v.categories.includes(z.LOCAL_ELEMENT))&&!g})}),ye(),fe(),a2(t,{title:"Elements",onAddTool:l,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,d)=>{c2(u)},"panel-content":(u,d)=>{var g=vT(),h=ne(g);Du(h,{get tool_id(){return f.GIVEN},get elementHandlers(){return o()}});var v=$(h,2);Du(v,{get tool_id(){return f.REGIONS},get elementHandlers(){return o()}});var m=$(v,2);Qe(m,1,()=>r().entries(),([E,I])=>E,(E,I)=>{let b=()=>_(I)[0];var w=Ce(),A=ne(w);{var T=U=>{Du(U,{get tool_id(){return b()},get elementHandlers(){return o()}})};Q(A,U=>{Ty(b())&&U(T)})}N(E,w)}),N(u,g)}}}),le()}var mT=ce('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Ru(t,e){ae(e,!1);const n=L();let r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0),o=L(void 0);function a(m){const E=Ou(m);E&&i()&&i()(E)}D(()=>X(r()),()=>{O(n,r())}),D(()=>(_(n),Ou),()=>{sd(_(n))&&O(o,Ou(_(n)))}),ye(),fe();var l=mT(),u=K(l);const d=dt(()=>ep(_(n)));var g=K(u);En(g),H(u);var h=$(u,2),v=$(K(h),2);En(v),x(v,"spellcheck",!1),x(v,"maxlength",30),H(h),H(l),ee(()=>{x(u,"style",`--choosen-color: ${_(o)??""}`),Ot(u,"transparent",_(d))}),er(g,()=>_(n),m=>O(n,m)),De("change",g,()=>a(_(n))),er(v,()=>_(n),m=>O(n,m)),De("input",v,()=>a(_(n))),N(t,l),le()}var ET=ce('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function Es(t,e){let n=M(e,"name",8);var r=ET(),i=K(r),o=K(i,!0);H(i);var a=$(i,2);Et(a,e,"default",{}),H(r),ee(()=>ct(o,n())),N(t,r)}var CT=ce('<input class="control-slider svelte-1rsuho6" type="range">');function bT(t,e){ae(e,!1);let n=M(e,"min",8),r=M(e,"max",8),i=M(e,"value",12),o=M(e,"step",24,()=>(r()-n())/10),a=M(e,"onChangeCb",8,void 0),l=M(e,"onInputCb",8,void 0);fe();var u=CT();En(u),ee(()=>{x(u,"min",n()),x(u,"max",r()),x(u,"step",o())}),er(u,i),De("change",u,()=>{a()&&a()(i())}),De("input",u,()=>{l()&&l()(i())}),N(t,u),le()}function ai(t,e){let n=M(e,"name",8),r=M(e,"value",12),i=M(e,"min",8),o=M(e,"max",8),a=M(e,"step",24,()=>(o()-i())/10),l=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);Es(t,{get name(){return`${n()??""}: ${r()??""}`},children:(d,g)=>{bT(d,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return l()},get onInputCb(){return u()},get value(){return r()},set value(h){r(h)},$$legacy:!0})},$$slots:{default:!0}})}var IT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function wT(t){var e=IT();N(t,e)}var yT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function OT(t){var e=yT();N(t,e)}var AT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function xT(t){var e=AT();N(t,e)}var LT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function NT(t){var e=LT();N(t,e)}var ST=ce('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function DT(t,e){ae(e,!1);const n=[];let r=M(e,"value",8),i=M(e,"selectedShape",12),o=M(e,"title",8),a=M(e,"updateShapeCb",8,void 0);fe();var l=ST(),u=K(l);En(u);var d,g=$(u,2);Et(g,e,"default",{}),H(l),ee(()=>{x(l,"title",o()),Ot(l,"active",r()===i()),d!==(d=r())&&(u.value=(u.__value=r())==null?"":r())}),vd(n,[],u,()=>(r(),i()),i),De("change",u,()=>a()&&a()(r())),N(t,l),le()}var RT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function TT(t){var e=RT(),n=K(e);x(n,"cx",480),x(n,"cy",-480),x(n,"rx",480),x(n,"ry",300),H(e),N(t,e)}var kT=ce('<div class="icon-wrapper svelte-18euf14"><!></div>'),MT=ce('<div class="radio-container svelte-18euf14"></div>');function UT(t,e){ae(e,!1);let n=M(e,"name",8),r=M(e,"selectedShape",8),i=M(e,"possibleShapes",8),o=M(e,"updateShapeCb",8,void 0);const a=new Map([[W.CIRCLE,xT],[W.ELLIPSE,TT],[W.SQUARE,OT],[W.RECTANGLE,wT],[W.POLYGON,NT]]);fe(),Es(t,{get name(){return n()},children:(l,u)=>{var d=MT();Qe(d,5,i,mt,(g,h)=>{DT(g,{get title(){return _(h)},get value(){return _(h)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var E=Ce(),I=ne(E);{var b=w=>{var A=kT(),T=K(A);ev(T,()=>a.get(_(h)),(U,P)=>{P(U,{})}),H(A),N(w,A)};Q(I,w=>{a.has(_(h))&&w(b)})}N(v,E)},$$slots:{default:!0}})}),H(d),N(l,d)},$$slots:{default:!0}}),le()}var GT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function $T(t){var e=GT();N(t,e)}var FT=ce('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),PT=ce("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function zT(t,e){ae(e,!1);const n=Xe(),r=()=>pe(en,"$toolStore",n),i=()=>pe(Yt,"$currentConstraintStore",n),o=L(),a=L(),l=L();let u=L(!0),d=M(e,"elementHandlers",8);function g(b,w){const A=(b==null?void 0:b.shape)??(w?Bu(w):void 0);return xu(A),A}function h(b,w){_(l)&&(Wu(l,_(l)[b]=w),xu(_(l)))}function v(){_(a)&&(O(l,Bu(_(a))),xu(_(l)))}function m(b){return b&&[W.CIRCLE,W.SQUARE,W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[W.ELLIPSE,W.RECTANGLE].includes(b)}D(()=>(r(),X(d())),()=>{O(o,Nl(r(),d()))}),D(()=>_(o),()=>{O(a,_(o).shape)}),D(()=>(i(),_(a)),()=>{var b;O(l,g(((b=i())==null?void 0:b.constraint)??null,_(a)))}),ye(),fe(),kl(t,{get isOpen(){return _(u)},set isOpen(b){O(u,b)},$$slots:{"panel-header":(b,w)=>{Tl(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return _(u)},set isOpen(A){O(u,A)},$$slots:{"title-icon":(A,T)=>{$T(A)}},$$legacy:!0})},"panel-content":(b,w)=>{var A=Ce(),T=ne(A);{var U=P=>{var Y=PT(),k=ne(Y);{var G=Pe=>{var Ie=FT();De("click",Ie,v),N(Pe,Ie)};Q(k,Pe=>{Py(_(a))&&Pe(G)})}var te=$(k,2);{var ie=Pe=>{UT(Pe,{get possibleShapes(){return _(a).allowedTypes},name:"Shape",get selectedShape(){return _(l).type},updateShapeCb:Ie=>h("type",Ie)})};Q(te,Pe=>{var Ie;_(a).allowedTypes&&_(a).allowedTypes.length&&((Ie=_(l))!=null&&Ie.type)&&Pe(ie)})}var oe=$(te,2);{var ue=Pe=>{var Ie=dt(()=>_(a).n.lb??3),Se=dt(()=>_(a).n.ub??10);ai(Pe,{name:"Number of Sides",get value(){return _(l).n},get min(){return _(Ie)},get max(){return _(Se)},step:1,onChangeCb:ze=>h("n",ze)})};Q(oe,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.n)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.n)!=null&&ze.editable)&&E(_(l).type)&&Pe(ue)})}var be=$(oe,2);{var Z=Pe=>{var Ie=dt(()=>_(a).r.lb??0),Se=dt(()=>_(a).r.ub??1),ze=dt(()=>_(a).r.step??.05);ai(Pe,{name:"Radius",get value(){return _(l).r},get min(){return _(Ie)},get max(){return _(Se)},get step(){return _(ze)},onChangeCb:Mt=>h("r",Mt)})};Q(be,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.r)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.r)!=null&&ze.editable)&&m(_(l).type)&&Pe(Z)})}var Ee=$(be,2);{var we=Pe=>{var Ie=dt(()=>_(a).width.lb??0),Se=dt(()=>_(a).width.ub??1),ze=dt(()=>_(a).width.step??.05);ai(Pe,{name:"Width",get value(){return _(l).width},get min(){return _(Ie)},get max(){return _(Se)},get step(){return _(ze)},onChangeCb:Mt=>h("width",Mt)})};Q(Ee,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.width)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.width)!=null&&ze.editable)&&I(_(l).type)&&Pe(we)})}var Ne=$(Ee,2);{var Fe=Pe=>{var Ie=dt(()=>_(a).height.lb??0),Se=dt(()=>_(a).height.ub??1),ze=dt(()=>_(a).height.step??.05);ai(Pe,{name:"Height",get value(){return _(l).height},get min(){return _(Ie)},get max(){return _(Se)},get step(){return _(ze)},onChangeCb:Mt=>h("height",Mt)})};Q(Ne,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.height)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.height)!=null&&ze.editable)&&I(_(l).type)&&Pe(Fe)})}var Le=$(Ne,2);{var Me=Pe=>{var Ie=dt(()=>_(a).angle.lb??0),Se=dt(()=>_(a).angle.ub??360),ze=dt(()=>_(a).angle.step??15);ai(Pe,{name:"Angle",get value(){return _(l).angle},get min(){return _(Ie)},get max(){return _(Se)},get step(){return _(ze)},onChangeCb:Mt=>h("angle",Mt)})};Q(Le,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.angle)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.angle)!=null&&ze.editable)&&Pe(Me)})}var Ue=$(Le,2);{var at=Pe=>{var Ie=dt(()=>_(a).inset.lb??0),Se=dt(()=>_(a).inset.ub??.5),ze=dt(()=>_(a).inset.step??.01);ai(Pe,{name:"Inset",get value(){return _(l).inset},get min(){return _(Ie)},get max(){return _(Se)},get step(){return _(ze)},onChangeCb:Mt=>h("inset",Mt)})};Q(Ue,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.inset)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.inset)!=null&&ze.editable)&&Pe(at)})}var _t=$(Ue,2);{var wt=Pe=>{Es(Pe,{name:"Stroke",children:(Ie,Se)=>{Ru(Ie,{get value(){return _(l).stroke},onChangeCb:ze=>h("stroke",ze)})},$$slots:{default:!0}})};Q(_t,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.stroke)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.stroke)!=null&&ze.editable)&&Pe(wt)})}var ft=$(_t,2);{var xt=Pe=>{var Ie=dt(()=>_(a).strokeWidth.lb??0),Se=dt(()=>_(a).strokeWidth.ub??.8),ze=dt(()=>_(a).strokeWidth.step??.01);ai(Pe,{name:"Stroke Width",get value(){return _(l).strokeWidth},get min(){return _(Ie)},get max(){return _(Se)},get step(){return _(ze)},onChangeCb:Mt=>h("strokeWidth",Mt)})};Q(ft,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.strokeWidth)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.strokeWidth)!=null&&ze.editable)&&Pe(xt)})}var Ct=$(ft,2);{var Wn=Pe=>{var Ie=dt(()=>_(a).strokeDasharray.lb??0),Se=dt(()=>_(a).strokeDasharray.ub??1),ze=dt(()=>_(a).strokeDasharray.step??.01);ai(Pe,{name:"Stroke Dasharray",get value(){return _(l).strokeDasharray},get min(){return _(Ie)},get max(){return _(Se)},get step(){return _(ze)},onChangeCb:Mt=>h("strokeDasharray",Mt)})};Q(Ct,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.strokeDasharray)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.strokeDasharray)!=null&&ze.editable)&&Pe(Wn)})}var Bn=$(Ct,2);{var pi=Pe=>{Es(Pe,{name:"Fill",children:(Ie,Se)=>{Ru(Ie,{get value(){return _(l).fill},onChangeCb:ze=>h("fill",ze)})},$$slots:{default:!0}})};Q(Bn,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.fill)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.fill)!=null&&ze.editable)&&Pe(pi)})}var Cr=$(Bn,2);{var Sr=Pe=>{Es(Pe,{name:"Font Color",children:(Ie,Se)=>{Ru(Ie,{get value(){return _(l).fontColor},onChangeCb:ze=>h("fontColor",ze)})},$$slots:{default:!0}})};Q(Cr,Pe=>{var Ie,Se,ze;((Ie=_(l))==null?void 0:Ie.fontColor)!==void 0&&((ze=(Se=_(a))==null?void 0:Se.fontColor)!=null&&ze.editable)&&Pe(Sr)})}N(P,Y)};Q(T,P=>{_(a)&&P(U)})}N(b,A)}},$$legacy:!0}),le()}var HT=ce('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function Bs(t,e){let n=M(e,"clickCb",8),r=M(e,"title",8);var i=HT(),o=K(i),a=K(o);Et(a,e,"default",{}),H(o),H(i),ee(()=>x(i,"title",r())),De("click",i,Un(function(...l){var u;(u=n())==null||u.apply(this,l)})),N(t,i)}var WT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function BT(t){var e=WT();N(t,e)}var YT=ce('<div class="buttons-container svelte-kc00rw"><!></div>');function Gl(t,e){var n=YT(),r=K(n);Et(r,e,"default",{}),H(n),N(t,n)}var jT=ce('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),KT=ce('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),VT=ce('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function XT(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Xr,"$puzzleMetaStore",n),i=()=>pe(st,"$elementsDictStore",n);let o=M(e,"showModal",12,!1),a=L(""),l=L(""),u=L(""),d=L(""),g=L("");function h(){o(!1)}function v(){const b=_(l)?m(_(l)):["Anonymous"],A={title:_(a)?_(a):"Sudoku",authors:b,ruleset:_(u),ctcYoutubeUrl:_(d),ctcUrl:_(g)};TR(A),o(!1)}function m(b){return b.split(/\s*[;]\s*/)}function E(){var U,P,Y;let b="";const w=Ht,A=i();!A.get(f.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules apply.

`:b+=`Sudoku rules do not apply.

`;for(const[k,G]of A.entries()){if(k===f.SUDOKU_RULES_DO_NOT_APPLY)continue;const te=w[k],ie=((U=te.menu)==null?void 0:U.name)??te.toolId,oe=(P=te.meta)==null?void 0:P.description;if(b+=`**${ie}**: ${oe}

`,!!G.negative_constraints)for(const[ue,be]of Object.entries(G.negative_constraints)){if(!be)continue;const Z=(Y=te.negative_constraints)==null?void 0:Y.find(Ne=>Ne.toolId===ue);if(!Z)continue;const Ee=ue,we=Z.description;b+=` - **${Ee}**: ${we}

`}}return b.trim()}function I(){const b=E();O(u,b)}D(()=>(X(o()),r(),cl),()=>{if(!o()){const b=r().authors;O(a,r().title??""),O(l,b?cl(b,"; ","; "):""),O(u,r().ruleset??""),O(d,r().ctcYoutubeUrl??""),O(g,r().ctcUrl??"")}}),ye(),fe(),qr(t,{title:"Edit Puzzle Meta",get showModal(){return o()},set showModal(b){o(b)},children:(b,w)=>{var A=VT(),T=K(A);ci(T,{title:"Title"});var U=$(T,2);En(U);var P=$(U,2);ci(P,{title:"Authors"});var Y=$(P,2);En(Y);var k=$(Y,2);ci(k,{title:"Ruleset",children:(Z,Ee)=>{var we=jT();De("click",we,I),N(Z,we)},$$slots:{default:!0}});var G=$(k,2);qw(G),x(G,"rows",8);var te=$(G,2);ci(te,{title:"CTC Link"});var ie=$(te,2);En(ie);var oe=$(ie,2);ci(oe,{title:"CTC Youtube Link"});var ue=$(oe,2);En(ue);var be=$(ue,2);Gl(be,{children:(Z,Ee)=>{var we=KT(),Ne=ne(we),Fe=$(Ne,2);De("click",Ne,v),De("click",Fe,h),N(Z,we)},$$slots:{default:!0}}),H(A),er(U,()=>_(a),Z=>O(a,Z)),er(Y,()=>_(l),Z=>O(l,Z)),er(G,()=>_(u),Z=>O(u,Z)),er(ie,()=>_(g),Z=>O(g,Z)),er(ue,()=>_(d),Z=>O(d,Z)),N(b,A)},$$slots:{default:!0},$$legacy:!0}),le()}var qT=ce("<!> <!>",1);function ZT(t){let e=L(!1);function n(){O(e,!0)}var r=qT(),i=ne(r);Bs(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,l)=>{BT(a)},$$slots:{default:!0}});var o=$(i,2);XT(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var QT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function JT(t){var e=QT();N(t,e)}var ek=ce('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function tk(t,e){ae(e,!1);let n=L(null),r=L(null);function i(){var o;(o=_(n))==null||o.click()}D(()=>(_(r),fl),()=>{if(_(r)&&_(r).length){const o=_(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(l){if(l.target||alert(a.error),l.target&&l.target.result){const u=l.target.result;if(typeof u!="string")return;const d=JSON.parse(u),g=pR(d);console.log(g),$R(g),fl()}},a.onerror=function(){alert(a.error)}}}),ye(),fe(),Bs(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var l=ek(),u=ne(l);JT(u);var d=$(u,2);Ti(d,g=>O(n,g),()=>_(n)),Ay(d,()=>_(r),g=>O(r,g)),N(o,l)},$$slots:{default:!0}}),le()}var nk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function rk(t){var e=nk();N(t,e)}var ik=ce('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Th(t,e){ae(e,!1);let n=M(e,"name",8),r=M(e,"min",8),i=M(e,"max",8),o=M(e,"value",12),a=M(e,"step",24,()=>(i()-r())/10),l=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);fe();var d=ik(),g=K(d),h=K(g);H(g);var v=$(g,2);En(v),H(d),ee(()=>{ct(h,`${n()??""}: ${o()??""}`),x(v,"min",r()),x(v,"max",i()),x(v,"step",a())}),er(v,o),De("change",v,()=>{l()&&l()(o())}),De("input",v,()=>{u()&&u()(o())}),N(t,d),le()}var ok=ce('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),sk=ce('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function ak(t,e){ae(e,!1);let n=M(e,"showModal",12,!1);const r=4,i=20;let o=L(9),a=L(9),l=L(""),u=L(St.range(1,10));function d(){n(!1)}function g(){fl(),GR(_(a),_(o),_(u).sort()),n(!1)}function h(E){return E.map(b=>String(b)).join(",")}function v(){const E=Math.min(Math.max(_(a),_(o)),9);O(u,St.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&O(u,E.replaceAll(" ","").split(",").map(Number))}fe(),qr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=sk(),w=K(b);Th(w,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return _(o)},set value(k){O(o,k)},$$legacy:!0});var A=$(w,2);Th(A,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return _(a)},set value(k){O(a,k)},$$legacy:!0});var T=$(A,2),U=dt(()=>`Allowed Digits (for the solver): ${h(_(u))}`);ci(T,{get title(){return _(U)}});var P=$(T,2);En(P),ee(()=>x(P,"placeholder",h(_(u))));var Y=$(P,2);Gl(Y,{children:(k,G)=>{var te=ok(),ie=ne(te),oe=$(ie,2);De("click",ie,g),De("click",oe,d),N(k,te)},$$slots:{default:!0}}),H(b),er(P,()=>_(l),k=>O(l,k)),De("input",P,()=>m(_(l))),N(E,b)},$$slots:{default:!0},$$legacy:!0}),le()}var lk=ce("<!> <!>",1);function ck(t){let e=L(!1);function n(){O(e,!0)}var r=lk(),i=ne(r);Bs(i,{title:"New Puzzle",clickCb:n,children:(a,l)=>{rk(a)},$$slots:{default:!0}});var o=$(i,2);ak(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var uk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function dk(t){var e=uk();N(t,e)}var _k=ce('<button class="modal-button">Cancel</button>'),fk=ce('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button> <button class="modal-button">Copy Link</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function gk(t,e){ae(e,!1);const n=Xe(),r=()=>pe(ho,"$svgRefStore",n),i=()=>pe(Xr,"$puzzleMetaStore",n),o=()=>pe(zs,"$puzzleStore",n),a=L();let l=M(e,"showModal",12,!1);function u(w){const A=getComputedStyle(w);let T="";for(let U of A){const P=A.getPropertyValue(U);P&&(T+=`${U}:${P};`)}return T}function d(w){const A=w.cloneNode(!0);(A instanceof SVGElement||A instanceof HTMLElement)&&(A.style.cssText=u(w));const T=w.childNodes;for(let U=0;U<T.length;U++){const P=T[U];if(P instanceof Element){const Y=d(P);A.replaceChild(Y,A.childNodes[U])}}return A}function g(w){if(!w)return;const A=d(w),T=ul(i()),P=new XMLSerializer().serializeToString(A),Y=new Image,k=new Blob([P],{type:"image/svg+xml;charset=utf-8"}),G=URL.createObjectURL(k);Y.onload=()=>{const te=w.getBoundingClientRect(),ie=te.width,oe=te.height,ue=document.createElement("canvas"),be=window.devicePixelRatio||1;ue.width=ie*be,ue.height=oe*be;const Z=ue.getContext("2d");Z&&(Z.scale(be,be),Z.drawImage(Y,0,0,ie,oe),ue.toBlob(Ee=>{if(!Ee)return;const we=URL.createObjectURL(Ee),Ne=document.createElement("a");Ne.href=we,Ne.download=T,Ne.click(),URL.revokeObjectURL(we)}))},Y.src=G}function h(w,A="download.svg"){if(!w)return;const T=d(w);let P=new XMLSerializer().serializeToString(T);P.includes("<?xml")||(P=`<?xml version="1.0" standalone="no"?>\r
`+P);const Y=new Blob([P],{type:"image/svg+xml"}),k=URL.createObjectURL(Y),G=document.createElement("a");G.href=k,G.download=A,G.click(),URL.revokeObjectURL(k)}const v=w=>{const A=vR(o());return JSON.stringify(A,null,w)},m=()=>{function w(U,P,Y){var k=document.createElement("a"),G=new Blob([U],{type:Y});k.href=URL.createObjectURL(G),k.download=P,k.click(),URL.revokeObjectURL(k.href)}const A=v(2),T=ul(i());w(A,`${T}.json`,"text/plain")},E=()=>{const w=v(0),A=_R(w),T=`${window.location.host}/encpuzzle/${A}`;navigator.clipboard.writeText(T)};function I(){l(!1)}const b=1;D(()=>r(),()=>{O(a,r())}),ye(),fe(),qr(t,{title:"Save Puzzle",get showModal(){return l()},set showModal(w){l(w)},children:(w,A)=>{var T=fk(),U=K(T),P=K(U),Y=K(P),k=$(Y,2),G=$(k,2),te=$(G,2);H(P);var ie=$(P,2),oe=$(K(ie),2),ue=K(oe);x(ue,"width",400*b),x(ue,"height",300*b),H(oe),H(ie),H(U);var be=$(U,2);Gl(be,{children:(Z,Ee)=>{var we=_k();De("click",we,I),N(Z,we)},$$slots:{default:!0}}),H(T),De("click",Y,m),De("click",k,()=>g(_(a))),De("click",G,()=>h(_(a))),De("click",te,E),N(w,T)},$$slots:{default:!0},$$legacy:!0}),le()}var hk=ce("<!> <!>",1);function vk(t){let e=L(!1);function n(){O(e,!0)}var r=hk(),i=ne(r);Bs(i,{title:"Save Puzzle",clickCb:n,children:(a,l)=>{dk(a)},$$slots:{default:!0}});var o=$(i,2);gk(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var pk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function vp(t){var e=pk();N(t,e)}var mk=ce('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),Ek=ce('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function ja(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0);var i=Ek(),o=K(i);ci(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(l){r(l)},$$legacy:!0});var a=$(o,2);Zd(a,{get isOpen(){return r()},children:(l,u)=>{var d=mk(),g=K(d);Et(g,e,"default",{}),H(d),N(l,d)},$$slots:{default:!0}}),H(i),N(t,i)}var Ck=ce('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function bk(t,e){let n=M(e,"value",8),r=M(e,"onClickCb",8),i=M(e,"disabled",8,!1);var o=Ck(),a=K(o);En(a),di(2),H(o),ee(()=>{Ot(o,"disabled",i()),Cy(a,n()),a.disabled=i()}),De("change",a,function(...l){var u;(u=r())==null||u.apply(this,l)}),N(t,o)}var Ik=ce('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function li(t,e){ae(e,!1);let n=M(e,"value",8),r=M(e,"name",8),i=M(e,"updateCb",8,void 0),o=M(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}fe();var l=Ik(),u=K(l);bk(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var d=$(u,2),g=K(d,!0);H(d),H(l),ee(()=>{Ot(l,"disabled",o()),ct(g,r())}),De("click",d,Un(a)),N(t,l),le()}var wk=ce("<!> <!>",1),yk=ce("<!> <!> <!>",1),Ok=ce("<!> <!>",1),Ak=ce('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function pp(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Wr,"$settingsStore",n),i=()=>pe(Ps,"$gameModeStore",n),o=L();let a=M(e,"showModal",12,!1);D(()=>r(),()=>{O(o,r())}),ye(),fe(),qr(t,{title:"Settings",get showModal(){return a()},set showModal(l){a(l)},children:(l,u)=>{var d=Ak(),g=K(d);ja(g,{title:"General",children:(I,b)=>{li(I,{get value(){return _(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:uy})},$$slots:{default:!0}});var h=$(g,2);ja(h,{title:"Tools",children:(I,b)=>{var w=wk(),A=ne(w);li(A,{get value(){return _(o).penToolActive},name:"Pen Tool",updateCb:dy});var T=$(A,2);li(T,{disabled:!0,get value(){return _(o).letterToolActive},name:"Letter Tool",updateCb:_y}),N(I,w)},$$slots:{default:!0}});var v=$(h,2);ja(v,{title:"Gameplay",children:(I,b)=>{var w=yk(),A=ne(w);li(A,{name:"Check Conflicts",get value(){return _(o).checkConflicts},updateCb:fy});var T=$(A,2);li(T,{name:"Highlight Pencilmark Conflicts",get value(){return _(o).highlightPencilmarkConflicts},updateCb:gy});var U=$(T,2);li(U,{name:"Highlight Cells Seen By Selection",get value(){return _(o).highlightCellsSeenBySelection},updateCb:hy}),N(I,w)},$$slots:{default:!0}});var m=$(v,2);{var E=I=>{ja(I,{title:"Setting Mode Display",children:(b,w)=>{var A=Ok(),T=ne(A);li(T,{name:"Hide Fog",get value(){return _(o).hideFog},updateCb:vy});var U=$(T,2);li(U,{name:"Show Solution",get value(){return _(o).showSolution},updateCb:py}),N(b,A)},$$slots:{default:!0}})};Q(m,I=>{i()===Ui.SETTING&&I(E)})}H(d),N(l,d)},$$slots:{default:!0},$$legacy:!0}),le()}var xk=ce("<!> <!>",1);function Lk(t){let e=L(!1);function n(){O(e,!0)}var r=xk(),i=ne(r);Bs(i,{title:"Settings",clickCb:n,children:(a,l)=>{vp(a)},$$slots:{default:!0}});var o=$(i,2);pp(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var Nk=ce('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function Sk(t){var e=Nk(),n=K(e);ck(n);var r=$(n,2);vk(r);var i=$(r,2);tk(i,{});var o=$(i,2);ZT(o);var a=$(o,2);Lk(a),H(e),N(t,e)}var Dk=ce('<button class="entry-panel-button svelte-yhctjt" title="Set current cell values as the puzzle solution">Set Solution</button>');function Rk(t,e){ae(e,!1);let n=L(!1);function r(){const i=xe(fn),o=[];for(let a=0;a<i.nRows;a++){const l=[];for(let u=0;u<i.nCols;u++){const d=i.getCell(a,u);if(!d)continue;const g=d.value;l.push(g)}o.push(l)}qd(o)}fe(),kl(t,{get isOpen(){return _(n)},set isOpen(i){O(n,i)},$$slots:{"panel-header":(i,o)=>{Tl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return _(n)},set isOpen(a){O(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=Dk();De("click",a,r),N(i,a)}},$$legacy:!0}),le()}const Tk={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function kk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),l=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,l==="]"?"<=":"<"]}}return null}function Mk(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function Uk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function Gk(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function mp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function $k(t,e){const n=Mk(t);if(n)return{type:"number",parsed:parseInt(n)};const r=Uk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=Gk(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=kk(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=mp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var B=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.CAVE_CELLS_FILLOMINO_REGIONS="cave_cells_fillomino_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(B||{});function rt(t,e){return`${e}[${t.r},${t.c}]`}function zo(t,e){return t.map(r=>rt(r,e))}function me(t,e){return"["+zo(t,e).join(",")+"]"}function Oe(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function It(t){return t.map(n=>Oe(n))}function Di(t){return`constraint alldifferent([${t.join(",")}]);
`}function kt(t,e){return t&&(t=`
% ${e}
`+t),t}function $l(t,e){const n=[We.N,We.S,We.W,We.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function n_(t,e,n=void 0){n||(n=[We.N,We.S,We.W,We.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+It(o).join(",")+"]";r.push(a)}return r}function He(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const[a,l]of Object.entries(i)){const u=n(t,o,a,l);r+=u}return r}function Hn(t,e,n){let r="";const i=e.tool_id,o=n.get(i);if(o){const a=o(t,e);r+=a}return r}class Fk{constructor(e){he(this,"model_str","");he(this,"used_vars");he(this,"puzzle");he(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=Tk){const i=$k(e,r);if(!i)return null;if(i.type==="number"){const l=i.parsed;return["",String(l)]}let o="";if(i.type==="variable"){const l=i.parsed;return this.hasVariable(l)||(o+=`var int: ${l};
`,this.addVariable(l)),[o,l]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const l=i.parsed;if(l.lower_bound){const u=l.lower_bound[0],d=l.lower_bound[1];o+=`constraint ${n} ${d} ${u};
`}if(l.upper_bound){const u=l.upper_bound[0],d=l.upper_bound[1];o+=`constraint ${n} ${d} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const l=i.parsed,u="["+l.join(",")+"]";for(const d of l){const g=parseInt(d);Number.isNaN(g)&&!this.hasVariable(d)&&(o+=`var int: ${d};
`,this.addVariable(d))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function Pk(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let l=null,u=0,d=0,g=0;for(let w=0;w<e.length;w++){const A=e[w].trim(),T=A.match(r),U=A.match(i),P=A.match(o),Y=A.match(a);if(!l&&(T||U||P||Y)){l={name:(T||U||P||Y)[1],startLine:w,content:[e[w]],type:T?"function":U?"predicate":P?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(l&&(l.content.push(e[w]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,d+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&d===0&&g===0&&A.endsWith(";"))){n[l.name]={...l,endLine:w};let k=l.startLine;for(;k>0&&e[k-1].trim().startsWith("%");)k-=1;n[l.name].startLine=k,l=null}}function h(w){const A=[],T=w.match(r),U=w.match(i),P=w.match(o);for(const Y of Object.keys(n)){const k=n[Y].type;if(k==="function"||k==="test"||k==="predicate"){if(T||U||P)continue;new RegExp(`\\b${Y}\\s*\\(`,"g").test(w)&&A.push(Y)}else if(k==="variable"){const G=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${Y}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(w.match(G))continue;new RegExp(`\\b${Y}\\b`,"g").test(w)&&A.push(Y)}}return A}const v=new Set;for(const w of e)h(w).forEach(T=>v.add(T));const m=Object.values(n).filter(w=>!v.has(w.name)).map(w=>({start:w.startLine,end:w.endLine}));m.sort((w,A)=>A.start-w.start);const E=[...e];for(const w of m)E.splice(w.start,w.end-w.start+1);const I=[];let b=!1;for(const w of E)w.trim()===""?b||(I.push(w),b=!0):(I.push(w),b=!1);return I.join(`
`)}function kh(t){let e=t,n=e.length;for(;e=Pk(e),e.length!=n;)n=e.length;return e}function Ep(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function zk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let l=0;l<e.nRows;l++){const u=[];for(let d=0;d<e.nCols;d++){const g=e.getCell(l,d);!g||g.region===null?u.push(r-1):u.push(g.region)}o.push(u)}const a=Ep(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Fl(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function on(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*Zr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Ys(t,e){return[...Object.values(t)].find(i=>{const o=i.cell;if(e.c===o.c&&e.r===o.r)return i})}function Cp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function bp(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function r_(t,e,n,r){const i=t.grid;let o="";if(!!!t.elementsDict.get(f.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const d of u){const g=i.getRegion(d),h=me(g,r);o+=`constraint count_eq(${h}, ${n}, ${e});
`}}return o}function _o(t,e,n,r){let i=Cp(e,n,r);return i+=bp(e,n,r),i+=r_(t,e,n,r),i}function Hk(t,e){const n=e.tool_id,r=t.puzzle.grid,i=t.puzzle.valid_digits,o=Math.min(...i);let a="";for(const l of r.getAllCells()){if(l.value!==null)continue;const u=rt(l,B.BOARD);a+=`constraint ${u} == ${o};
`}return a=kt(a,`${n}`),a}function Wk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),a=It(o);let l=`
% ${i}
`;return l+=Di(a),l}function Bk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),a=It(o);let l=`
% ${i}
`;return l+=Di(a),l}function Yk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),l="["+It(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function jk(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),l="["+It(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}function Kk(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,a]=[r.nRows,r.nCols];if(o!==a)return"";let l=`
% ${i}
`;const u=r.getPositiveDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h+(g-v));if(!m||!E)continue;const I=Oe(m),b=Oe(E),A=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;l+=A}}return l}function Vk(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,a]=[r.nRows,r.nCols];if(o!==a)return"";let l=`
% ${i}
`;const u=r.getNegativeDiagonal();for(const d of u){const[g,h]=[d.r,d.c];for(let v=0;v<g;v++){const m=r.getCell(v,h),E=r.getCell(g,h-(g-v));if(!m||!E)continue;const I=Oe(m),b=Oe(E),A=`constraint is_unimodular_line(${`[${I}, ${b}]`}, 2);
`;l+=A}}return l}function Xk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;const a=[...r.getUsedRegions()].length;for(let l=0;l<a;l++){const u=r.getDisjointGroup(l),h=`constraint alldifferent(${`[${It(u).join(",")}]`});
`;o+=h}return o}function qk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getNeighboorCells(a).filter(m=>m.r+m.c>=a.r+a.c),d=Oe(a),h=`[${It(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function Zk(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getCellsByKnightMove(a).filter(m=>m.r>=a.r||m.c>=a.c),d=Oe(a),h=`[${It(u).join(",")}]`,v=`constraint different_from_group_p(${d}, ${h});
`;o+=v}return o}function Qk(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_giraffe_p(board);
`,r=kt(r,`${n}`),r}function Jk(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_long_knight_p(board);
`,r=kt(r,`${n}`),r}function eM(t,e){const n=e.tool_id;let r="";return r+=`constraint tango_p(board);
`,r=kt(r,`${n}`),r}function tM(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_entropy_p(board);
`,r=kt(r,`${n}`),r}function nM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[a,l]of Zr(r)){const u=Oe(a),d=Oe(l),g=`constraint not consecutive_p(${u}, ${d});
`;o+=g}return o}function rM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[a,l]of Zr(r)){const u=Oe(a),d=Oe(l),g=`constraint not ratio_p(${u}, ${d}, 2);
`;o+=g}return o}function iM(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const l=r.getRow(a.r),d=`[${It(l).join(",")}]`,g=a.c+1,h=`constraint indexing_column_p(${d}, ${g});
`;o+=h}return o}function oM(t,e){const n=e.tool_id;let r="";return r+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,r+=`constraint odd_even_grid_p(board, even_odd_grid);
`,r+=`constraint connected_region(even_odd_grid, 1);
`,r=kt(r,`${n}`),r}function sM(t,e){const n=e.tool_id;let r="";return r+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,r=kt(r,`${n}`),r}function aM(t,e){const n=e.tool_id;let r="";return r+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,r=kt(r,`${n}`),r}function lM(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;let o="";const a=n.grid.getUsedRegions();for(const l of a){const u=r.getRegion(l),d=[...new Set(u.map(h=>h.r))],g=[...new Set(u.map(h=>h.c))];for(const h of g){const v=u.filter(E=>E.c===h),m=me(v,B.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}for(const h of d){const v=u.filter(E=>E.r===h),m=me(v,B.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}}return o=kt(o,`${i}`),o}function cM(t){const e=t.elementsDict;if(!!e.get(f.SUDOKU_RULES_DO_NOT_APPLY))return"";const r=t.grid;let i="";i+=`
% row constraints (digits do not repeat on rows)
`;const o=r.nRows;for(let u=0;u<o;u++){const d=r.getRow(u),g=It(d),h=Di(g);i+=h}i+=`
% col constraints (digits do not repeat on cols)
`;const a=r.nCols;for(let u=0;u<a;u++){const d=r.getCol(u),g=It(d),h=Di(g);i+=h}if(!!!e.get(f.CHAOS_CONSTRUCTION)){i+=`
% region constraints (digits do not repeat on regions)
`;const u=r.getUsedRegions();for(const d of u){const g=r.getRegion(d),h=It(g),v=Di(h);i+=v}}return i}function uM(t){const e=t.elementsDict,n=f.HEXED_SUDOKU;if(!!!e.get(n))return"";let i=`
% ${n}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const dM=new Map([[f.LEAVE_EMPTY_CELLS_EMPTY,Hk],[f.POSITIVE_DIAGONAL,Wk],[f.NEGATIVE_DIAGONAL,Bk],[f.POSITIVE_ANTIDIAGONAL,Yk],[f.NEGATIVE_ANTIDIAGONAL,jk],[f.PARITY_MIRROR_POSITIVE_DIAGONAL,Kk],[f.PARITY_MIRROR_NEGATIVE_DIAGONAL,Vk],[f.ANTIKING,qk],[f.ANTIKNIGHT,Zk],[f.ANTI_LONG_KNIGHT,Jk],[f.ANTI_GIRAFFE,Qk],[f.DISJOINT_GROUPS,Xk],[f.TANGO,eM],[f.NONCONSECUTIVE,nM],[f.NONRATIO,rM],[f.ANTI_ENTROPY,tM],[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,lM],[f.GLOBAL_INDEXING_COLUMN,iM],[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,oM],[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,sM],[f.YIN_YANG_FILLOMINO_PARITY,aM]]);function _M(t,e){let n="";const r=e.tool_id,i=dM.get(r);if(i){const o=i(t,e);n+=o}return n}function Ip(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return It(r)}function wp(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${It(n.slice(1)).join(",")}]`}function yp(t,e,n){let r="";const o="["+Ip(t,e).join(",")+"]";for(const a of e.lines){const l=wp(t,a);r+=`constraint ${n}(${o}, ${l});
`}return r}function Op(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=yp(t,o,n);r+=a}return r}function fM(t,e){const n=t.puzzle.grid;return Op(n,e,"arrow_p")}function gM(t,e){const n=t.puzzle.grid;return Op(n,e,"bulbous_arrow_p")}function hM(t,e,n,r){let i="";const o=Ip(e,r);if(o.length===1){const a=o[0],l=r.lines;for(const u of l){const g=`constraint average_arrow_p(${wp(e,u)}, ${a});
`;i+=g}}return i}function vM(t,e){return He(t,e,hM)}function pM(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=me(o,B.UNKNOWN_REGIONS),l=r.lines.map(u=>u.map(d=>e.getCell(d.r,d.c)).filter(d=>!!d));for(const u of l){if(u.length<=1)continue;const d=me(u.slice(1),B.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${d});
`}return i+=yp(e,r,"arrow_p"),i}function mM(t,e){return He(t,e,pM)}const EM=new Map([[f.ARROW,fM],[f.AVERAGE_ARROW,vM],[f.BULBOUS_ARROW,gM],[f.CHAOS_CONSTRUCTION_ARROW,mM]]);function CM(t,e){return Hn(t,e,EM)}function _i(t,e){const n=on(t,e.cells);return It(n)}function bM(t,e,n){const i=`[${_i(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Ap(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=bM(o,a,n);r+=l}return r}function Pl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function IM(t,e,n,r){const i=t.puzzle.grid,a=`[${_i(i,n).join(",")}]`,l=n.value,u=Pl(t,l,e);if(!u)return"";const d=u[1];let g=u[0];return g+=`constraint ${r}(${a}, ${d});
`,g}function i_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const[o,a]of Object.entries(i)){const l=IM(t,o,a,n);r+=l}return r}function wM(t,e,n,r){const i=_i(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Di(i);const l=Pl(t,a,n);if(!l)return"";const u=l[1];let d=l[0];return d+=`constraint killer_cage(${o}, ${u});
`,d}function yM(t,e){return He(t,e,wM)}function OM(t,e,n,r){const i=_i(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Di(i);const l=Pl(t,a,n);if(!l)return"";const u=l[1];let d=l[0];return d+=`constraint inverted_killer_cage_p(${o}, ${u});
`,d}function AM(t,e){return He(t,e,OM)}function xM(t,e){return i_(t,e,"sum_cage_p")}function LM(t,e){return Ap(t,e,"parity_balance_cage_p")}function NM(t,e){return Ap(t,e,"sum_cage_look_and_say_p")}function SM(t,e){return i_(t,e,"divisible_killer_cage_p")}function DM(t,e){return i_(t,e,"spotlight_cage_p")}function RM(t,e,n,r){const o=`[${_i(e,r).join(",")}]`,a=r.value;if(a){const l=parseInt(a);return`constraint unique_values_cage_p(${o}, ${l}, ALLOWED_DIGITS);
`}return""}function TM(t,e){return He(t,e,RM)}function kM(t,e,n,r){const o=`[${_i(e,r).join(",")}]`,a=r.value;let l="";const u=Pl(t,a,n);if(u){const m=u[1];l+=u[0],l+=`constraint sum(${o}) == ${m};
`}const d=r.cells,g=on(e,d),h=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!h.includes(I)&&h.push(I)});const v=me(h,B.BOARD);return l+=`constraint vaulted_cage_p(${o}, ${v});
`,l}function MM(t,e){return He(t,e,kM)}function UM(t,e,n,r,i){const o=on(e,r.cells),a=me(o,B.BOARD),l=me(o,B.YIN_YANG),u=r.value;if(u){const d=parseInt(u);return`constraint ${i}(${a}, ${l}, ${d});
`}return""}function xp(t,e,n,r){let i="";const o=n.constraints;if(!o)return i;for(const[a,l]of Object.entries(o)){const u=UM(t,e,a,l,r);i+=u}return i}function GM(t,e){const n=t.puzzle.grid;return xp(t,n,e,"yin_yang_antithesis_killer_cage_p")}function $M(t,e){const n=t.puzzle.grid;return xp(t,n,e,"yin_yang_breakeven_killer_cage_p")}function FM(t,e,n,r){const i=on(e,r.cells),o=me(i,B.BOARD),a=me(i,B.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function PM(t,e){return He(t,e,FM)}function zM(t,e,n,r){const i=on(e,r.cells),o=me(i,B.BOARD),a=me(i,B.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function HM(t,e){return He(t,e,zM)}function WM(t,e){let n="";const r=e.constraints;if(!r)return n;const i=Fl(Object.values(r)),o=t.puzzle.grid;for(const a of i.values())if(!(a.length<=1))for(const[l,u]of a.flatMap((d,g)=>a.slice(g+1).map(h=>[d,h]))){const g=`[${_i(o,l).join(",")}]`,v=`[${_i(o,u).join(",")}]`;n+=`constraint multisets_equal_p(${g}, ${v});
`}return n}const BM=new Map([[f.KILLER_CAGE,yM],[f.INVERTED_KILLER_CAGE,AM],[f.SUM_CAGE,xM],[f.PARITY_BALANCE_CAGE,LM],[f.SUM_CAGE_LOOK_AND_SAY,NM],[f.DIVISIBLE_KILLER_CAGE,SM],[f.SPOTLIGHT_CAGE,DM],[f.UNIQUE_DIGITS_CAGE,TM],[f.VAULTED_CAGE,MM],[f.YIN_YANG_ANTITHESIS_KILLER_CAGE,GM],[f.YIN_YANG_BREAKEVEN_KILLER_CAGE,$M],[f.DOUBLERS_KILLER_CAGE,PM],[f.NEGATORS_KILLER_CAGE,HM],[f.MULTISET_CAGE,WM]]);function YM(t,e){return Hn(t,e,BM)}function jM(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,l=r-o,u=Math.floor(n+a),d=Math.floor(r+l);return t.getCell(u,d)}function KM(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=jM(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function VM(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;for(let d=0;d<i.length;d++){const g=i[d],h=g.cell,v=d+1,[m,E,I]=KM(o,h),b=me(m,B.GALAXY_REGIONS),w=me(E,B.GALAXY_REGIONS),A=me(I,B.GALAXY_REGIONS);n+=`% galaxy ${v}
`,n+=`constraint galaxy_center_p(${b}, ${w}, ${A}, ${v});
`,n+=`constraint connected_region(${B.GALAXY_REGIONS}, ${v});
`;const T=g.value;if(!T)continue;const U=parseInt(T);n+=`constraint galaxy_sum_p(${B.BOARD}, ${B.GALAXY_REGIONS}, ${U}, ${v});
`}if(!i.length)return n;const a=o.nCols*o.nRows,u=`${i.length+1}..${a}`;return n+=`
constraint order_remaining_galaxies_p(${B.GALAXY_REGIONS}, ${u});
`,n}function XM(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function qM(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],l=r.value,u=XM(t,l,n);if(!u)return"";const d=u[1];let g=u[0],h=[];if(o%1===0&&a%1===0?h=sl(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(h=al(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!h.length)return"";const v=me(h,B.BOARD),m=me(h,B.YIN_YANG);return g+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${d};
`,g}function ZM(t,e){return He(t,e,qM)}const QM=new Map([[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,ZM],[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,VM]]);function JM(t,e){return Hn(t,e,QM)}function Mh(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return It(n)}function e3(t,e){const r="["+Mh(t,e.cells).join(",")+"]",o="["+Mh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}function t3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=e3(i,o);n+=a}return n}const n3=new Map([[f.CLONE_REGION,t3]]);function r3(t,e){return Hn(t,e,n3)}function o_(t,e){const n=on(t,e.cells);return It(n)}function i3(t,e,n){const i=`[${o_(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function s_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=i3(t,o,n);r+=a}return r}function o3(t,e,n,r,i,o=""){const l=`[${o_(e,r).join(",")}]`;let u=r.value;if(u||(u=o),u){const d=parseInt(u);return`constraint ${i}(${l}, ${d});
`}return""}function Lp(t,e,n,r,i=""){let o="";const a=n.constraints;if(!a)return o;for(const[l,u]of Object.entries(a)){const d=o3(t,e,l,u,r,i);o+=d}return o}function s3(t,e,n,r){const o=`[${o_(e,r).join(",")}]`,a=r.value;if(!a)return"";const l=mp(a);if(!l)return"";let u="";for(const g of l){const h=parseInt(g);Number.isNaN(h)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const d="["+l.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${d});
`,u}function a3(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,a]of Object.entries(r)){const l=s3(t,i,o,a);n+=l}return n}function l3(t,e){const n=t.puzzle.grid;return Lp(t,n,e,"corner_sum_p")}function c3(t,e){const n=t.puzzle.grid;return Lp(t,n,e,"corner_even_count_p")}function u3(t,e){const n=t.puzzle.grid;return s_(n,e,"corner_sum_of_three_equals_the_other_p")}function d3(t,e){const n=t.puzzle.grid;return s_(n,e,"equal_diagonal_differences_p")}function _3(t,e){const n=t.puzzle.grid;return s_(n,e,"product_square_p")}const f3=new Map([[f.QUADRUPLE,a3],[f.CORNER_SUM,l3],[f.CORNER_EVEN_COUNT,c3],[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,u3],[f.PRODUCT_SQUARE,_3],[f.EQUAL_DIAGONAL_DIFFERENCES,d3]]);function g3(t,e){return Hn(t,e,f3)}function js(t,e,n){return[...Object.values(t)].find(o=>{const a=o.cells[0],l=o.cells[1];if(e.c===a.c&&e.r===a.r&&n.c===l.c&&n.r===l.r||e.c===l.c&&e.r===l.r&&n.c===a.c&&n.r===a.r)return o})}function zl(t,e){const n=on(t,e.cells);return It(n)}function h3(t,e,n){const r=zl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function v3(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=h3(t,o,n);r+=a}return r}function p3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function m3(t,e,n,r,i,o=""){var m;const a=zl(e,r),[l,u]=a,d=(m=r.value)!=null&&m.length?r.value:o,g=p3(t,d,n);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint ${i}(${l}, ${u}, ${h});
`,v}function Hl(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=m3(t,a,l,u,n,r);i+=d}return i}function E3(t,e){const n=zl(t,e),[r,i]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${i} = 5;
`:`constraint ${r} + ${i} = 10;
`}function C3(t,e){let n="";const r=e.constraints,i=t.puzzle.grid;for(const u of Object.values(r)){const d=E3(i,u);n+=d}if(!e.negative_constraints)return n;const o=!!e.negative_constraints[f.NEGATIVE_V_CONSTRAINT],a=!!e.negative_constraints[f.NEGATIVE_X_CONSTRAINT],l=!!e.negative_constraints[f.NEGATIVE_XV_CONSTRAINT];if(!o&&!a&&!l)return n;for(const[u,d]of Zr(i)){const g=js(r,u,d),h=Oe(u),v=Oe(d);if(o&&(!g||g.value!=="V"&&g.value!=="v")){const m=`constraint ${h} + ${v} != 5;
`;n+=m}else if(a&&(!g||g.value!=="X"&&g.value!=="x")){const m=`constraint ${h} + ${v} != 10;
`;n+=m}else if(l&&!g){const m=`constraint ${h} + ${v} != 5 /\\ (${h} + ${v} != 10);
`;n+=m}}return n}function b3(t,e){const n=t.puzzle.grid;let r=Hl(t,e,"ratio_p","2");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RATIOS_GIVEN])return r;const o=e.constraints;let a=[];o&&(a=Object.values(o).map(u=>u.value).map(u=>u||"2")),a.length===0&&a.push("2");const l=[...new Set(a)];console.log("values",l),r+=`
% ${f.ALL_RATIOS_GIVEN}
`;for(const[u,d]of Zr(n)){if(js(o,u,d))continue;const h=Oe(u),v=Oe(d);for(const m of l){const E=parseInt(m),I=`constraint not ratio_p(${h}, ${v}, ${E});
`;r+=I}}return r}function I3(t,e){const n=t.puzzle.grid;let r=Hl(t,e,"abs_difference","1");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_DIFFERENCES_GIVEN])return r;const o=e.constraints;let a=[];o&&(a=Object.values(o).map(u=>u.value).map(u=>u||"1")),a.length===0&&a.push("1");const l=[...new Set(a)];r+=`
% ${f.ALL_DIFFERENCES_GIVEN}
`;for(const[u,d]of Zr(n)){if(js(o,u,d))continue;const h=Oe(u),v=Oe(d);for(const m of l){const E=parseInt(m),I=`constraint abs(${h} - ${v}) != ${E};
`;r+=I}}return r}function w3(t,e){const n=zl(t,e),[r,i]=n,o=e.value;return o==="<"?`constraint ${r} < ${i};
`:o===">"?`constraint ${r} > ${i};
`:""}function Uh(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=w3(i,o);n+=a}return n}function y3(t,e){return Hl(t,e,"edge_sum_p")}function O3(t,e){return Hl(t,e,"edge_modulo_p")}function A3(t,e){const n=t.puzzle.grid;return v3(n,e,"edge_factor_p")}function Np(t,e,n){const r=Oe(e),i=Oe(n);let o="";if(e.r==n.r){const u=t.getRow(e.r)[0];o=Oe(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];o=Oe(u)}return o?`xy_differences_p(${r}, ${i}, ${o});
`:""}function x3(t,e){const n=on(t,e.cells),[r,i]=n,o=Np(t,r,i);return o.length===0?"":`constraint ${o}`}function L3(t,e){const n=e.constraints,r=t.puzzle.grid;let i="";for(const a of Object.values(n)){const l=x3(r,a);i+=l}if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_XY_DIFFERENCES_GIVEN])return i;i+=`
% ${f.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[a,l]of Zr(r)){if(js(n,a,l))continue;const d=Np(r,a,l);if(d.length===0)continue;const g=`constraint not ${d}`;i+=g}return i}function N3(t,e,n){const r=on(t,e.cells),[i,o]=It(r),a=zo(r,B.YIN_YANG),[l,u]=a;return`constraint ${n}(${i}, ${o}, ${l}, ${u});
`}function Sp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=N3(t,o,n);r+=a}return r}function S3(t,e){const n=t.puzzle.grid;let r=Sp(n,e,"yin_yang_kropki_p");if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_KROPKI_GIVEN])return r;const o=e.constraints;r+=`
% ${f.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[a,l]of Zr(n)){if(js(o,a,l))continue;const d=Oe(a),g=Oe(l),h=rt(a,B.YIN_YANG),v=rt(l,B.YIN_YANG),m=`constraint not yin_yang_kropki_p(${d}, ${g}, ${h}, ${v});
`;r+=m}return r}function D3(t,e){const n=t.puzzle.grid;return Sp(n,e,"yin_yang_white_kropki_p")}function R3(t,e,n){const r=on(t,e.cells),i=zo(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function Wl(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=R3(t,o,n);r+=a}return r}function T3(t,e){const n=t.puzzle.grid;return Wl(n,e,B.UNKNOWN_REGIONS)}function k3(t,e){const n=t.puzzle.grid;return Wl(n,e,B.FILLOMINO_REGIONS)}function M3(t,e){const n=t.puzzle.grid;return Wl(n,e,B.SUGURU_REGIONS)}function U3(t,e){const n=t.puzzle.grid;return Wl(n,e,B.CAVE_SHADING)}const G3=new Map([[f.XV,C3],[f.DIFFERENCE,I3],[f.RATIO,b3],[f.EDGE_INEQUALITY,Uh],[f.ONE_WAY_DOOR,Uh],[f.EDGE_SUM,y3],[f.EDGE_MODULO,O3],[f.EDGE_FACTOR,A3],[f.XY_DIFFERENCES,L3],[f.YIN_YANG_KROPKI,S3],[f.YIN_YANG_WHITE_KROPKI,D3],[f.FILLOMINO_REGION_BORDER,k3],[f.UNKNOWN_REGION_BORDER,T3],[f.CHAOS_CONSTRUCTION_SUGURU_BORDER,M3],[f.EDGE_CAVE_ONE_OF_EACH,U3]]);function $3(t,e){return Hn(t,e,G3)}function F3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Bl(t,e,n=!1){let r=on(t,e.cells);return n&&(r=[...new Set(r)]),It(r)}function P3(t,e,n,r=!1){const o=`[${Bl(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function pt(t,e,n,r=!1){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const l of Object.values(o)){const u=P3(a,l,n,r);i+=u}return i}function z3(t,e,n,r,i,o=""){var v;const l=`[${Bl(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,d=F3(t,u,n);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${i}(${l}, ${g});
`,h}function cr(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=z3(t,a,l,u,n,r);i+=d}return i}function H3(t,e,n,r=""){let o=e.cells.map(v=>t.getCell(v.r,v.c)).filter(v=>!!v),a=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),a=!0);const u=`[${It(o).join(",")}]`;let d=e.value;d||(d=r);const g=parseInt(d);return`constraint ${n}(${u}, ${g}, ${a});
`}function a_(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=H3(a,u,n,r);i+=d}return i}function W3(t,e){return pt(t,e,"renban",!0)}function B3(t,e){return pt(t,e,"double_renban_p",!0)}function Y3(t,e){return pt(t,e,"renrenbanban_p",!0)}function j3(t,e){return pt(t,e,"knabner_p",!0)}function K3(t,e){return pt(t,e,"renban_or_nabner_line_p",!0)}function V3(t,e){return pt(t,e,"out_of_order_consecutive_line_p")}function X3(t,e){return cr(t,e,"whispers","5")}function q3(t,e){return cr(t,e,"whispers","4")}function Z3(t,e){return pt(t,e,"strictly_increasing")}function Q3(t,e){return pt(t,e,"fuzzy_thermo_p")}function J3(t,e){return pt(t,e,"increasing")}function e5(t,e){return cr(t,e,"custom_thermo_p")}function t5(t,e){return pt(t,e,"palindrome")}function n5(t,e){return cr(t,e,"sum_line_p")}function r5(t,e){return pt(t,e,"xv_line_p")}function i5(t,e){return cr(t,e,"at_least_x_line_p","10")}function o5(t,e){return cr(t,e,"product_line_p")}function s5(t,e){return cr(t,e,"maximum_adjacent_difference_line_p","2")}function a5(t,e){return pt(t,e,"adjacent_multiples_line_p")}function l5(t,e){return pt(t,e,"index_line_p")}function c5(t,e){return pt(t,e,"zipper_line_p")}function u5(t,e){return a_(t,e,"segmented_sum_line_p")}function d5(t,e){return pt(t,e,"segmented_sum_and_renban_line_p")}function _5(t,e){return a_(t,e,"n_consecutive_renban_line_p")}function f5(t,e){return a_(t,e,"n_consecutive_fuzzy_sum_line_p")}function g5(t,e,n){const r=on(t,n.cells);let i="";const o=[];for(let l=0;l<r.length;l++){const u=r[l],d=t.getRow(u.r),g=me(d,B.BOARD),h=`cycle_${e}_${l}`;o.push(h);const v=u.c+1;i+=`var int: ${h} = cycle_order_f(${g}, ${v});
`}const a="["+o.join(",")+"]";return i+=`constraint strictly_increasing(${a});
`,i}function h5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,a]of Object.entries(r)){const l=g5(i,o,a);n+=l}return n}function v5(t,e){return pt(t,e,"adjacent_differences_count_line_p")}function p5(t,e){return pt(t,e,"same_parity_line_p")}function m5(t,e){return cr(t,e,"renban_or_whispers_p","5")}function E5(t,e){return pt(t,e,"alldifferent",!0)}function C5(t,e){return pt(t,e,"repeated_digits_line_p")}function b5(t,e){return pt(t,e,"superfuzzy_arrow_p")}function I5(t,e){return pt(t,e,"ambiguous_arrow_p",!0)}function w5(t,e){return pt(t,e,"headless_arrow_p")}function y5(t,e){return cr(t,e,"unimodular_line_p","3")}function O5(t,e){return cr(t,e,"modular_line_p","3")}function A5(t,e){return cr(t,e,"modular_or_unimodular_line_p","3")}function x5(t,e){return pt(t,e,"arithmetic_sequence_line_p")}function L5(t,e){return pt(t,e,"odd_even_oscillator_line_p")}function N5(t,e){return cr(t,e,"high_low_oscillator_line_p","5")}function S5(t,e){return pt(t,e,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function D5(t,e){return pt(t,e,"look_and_say_line_p",!0)}function R5(t,e){const n=on(t,e.cells);function r(d){const g=[];let h=null;for(const v of d)v.r!=h?(g.push([v]),h=v.r):g[g.length-1].push(v);return g}const i=r(n);if(i.length<2)return"";const o=i[0],l=`[${It(o).join(",")}]`;let u="";for(let d=1;d<i.length;d++){const g=i[d],v=`[${It(g).join(",")}]`;u+=`constraint sum(${v}) == sum(${l});
`}return u}function T5(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const a=R5(i,o);n+=a}return n}function k5(t,e){return pt(t,e,"between_line_p")}function M5(t,e){return pt(t,e,"tightrope_line_p")}function U5(t,e){return pt(t,e,"double_arrow_p")}function G5(t,e){return pt(t,e,"split_peas_p")}function $5(t,e){return pt(t,e,"parity_count_line_p")}function F5(t,e){return pt(t,e,"product_of_ends_equals_sum_of_line_p")}function Dp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function P5(t,e,n,r){let i="";const o=on(e,r.cells),a=Dp(o);if(!a.length)return"";const l=`sum_line_${n}`;i+=`var int: ${l};
`;for(const u of a){const g=`constraint sum(${me(u,B.BOARD)}) == ${l};
`;i+=g}return i}function z5(t,e){return He(t,e,P5)}function H5(t,e,n,r){return`constraint entropic_line_p(${`[${Bl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function W5(t,e){return He(t,e,H5)}function B5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Bl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function Y5(t,e){return He(t,e,B5)}function j5(t,e){return pt(t,e,"peapods_p")}function K5(t,e,n,r,i=""){const o=t.puzzle.grid,a=on(o,n.cells),l=me(a,B.BOARD),u=me(a,B.YIN_YANG);let d=n.value;d||(d=i);const g=parseInt(d);return`constraint ${r}(${l}, ${u}, ${g});
`}function Rp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;for(const[a,l]of Object.entries(o)){const u=K5(t,a,l,n,r);i+=u}return i}function V5(t,e){return Rp(t,e,"yin_yang_shaded_whispers_line_p","5")}function X5(t,e){return Rp(t,e,"yin_yang_unshaded_modular_line_p","3")}function q5(t,e,n){const r=on(t,e.cells),i=me(r,B.BOARD),o=me(r,B.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function l_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=q5(o,a,n);r+=l}return r}function Z5(t,e){return l_(t,e,"yin_yang_unshaded_entropic_line_p")}function Q5(t,e){return l_(t,e,"yin_yang_indexing_line_coloring_p")}function J5(t,e){const n=t.grid,i=t.elementsDict.get(f.YIN_YANG_REGION_SUM_LINE);if(!i||!i.constraints)return"";let o=`
% ${e}
`;for(const a of Object.values(i.constraints)){const u=a.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),d=me(u,B.YIN_YANG);o+=`constraint count_unique_values(${d}) >= 2;
`}return o}function eU(t,e){let n=l_(t,e,"yin_yang_region_sum_line_p");return e.negative_constraints&&!!e.negative_constraints[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]&&(n+=J5(t.puzzle,f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE)),n}function tU(t,e,n){const r=t.puzzle.grid,i=on(r,e.cells),o=me(i,B.VALUES_GRID);return`constraint ${n}(${o});
`}function c_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=tU(t,o,n);r+=a}return r}function nU(t,e){return c_(t,e,"between_line_p")}function rU(t,e){return c_(t,e,"double_arrow_p")}function iU(t,e){return c_(t,e,"strictly_increasing")}function oU(t,e,n,r){const i=on(e,r.cells),o=Dp(i);if(o.sort((d,g)=>g.length-d.length),o.length<=1)return"";let a="";const l=o[0],u=me(l,B.VALUES_GRID);for(const d of o.slice(1)){const g=me(d,B.VALUES_GRID),h=`constraint subset_p(${u}, ${g});
`;a+=h}return a}function sU(t,e){return He(t,e,oU)}const aU=new Map([[f.THERMOMETER,Z3],[f.FUZZY_THERMOMETER,Q3],[f.SLOW_THERMOMETER,J3],[f.CUSTOM_THERMOMETER,e5],[f.RENBAN_LINE,W3],[f.DOUBLE_RENBAN_LINE,B3],[f.RENRENBANBAN_LINE,Y3],[f.NABNER_LINE,j3],[f.WHISPERS_LINE,X3],[f.DUTCH_WHISPERS,q3],[f.RENBAN_OR_WHISPERS_LINE,m5],[f.RENBAN_OR_NABNER_LINE,K3],[f.OUT_OF_ORDER_CONSECUTIVE_LINE,V3],[f.N_CONSECUTIVE_RENBAN_LINE,_5],[f.PALINDROME,t5],[f.SUM_LINE,n5],[f.PRODUCT_LINE,o5],[f.XV_LINE,r5],[f.AT_LEAST_X_LINE,i5],[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,s5],[f.SAME_PARITY_LINE,p5],[f.ADJACENT_MULTIPLES_LINE,a5],[f.ADJACENT_DIFFERENCES_COUNT_LINE,v5],[f.LOOK_AND_SAY_LINE,D5],[f.ROW_SUM_LINE,T5],[f.INDEX_LINE,l5],[f.ZIPPER_LINE,c5],[f.SEGMENTED_SUM_LINE,u5],[f.SEGMENTED_SUM_AND_RENBAN_LINE,d5],[f.N_CONSECUTIVE_FUZZY_SUM_LINE,f5],[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,S5],[f.SUPERFUZZY_ARROW,b5],[f.AMBIGUOUS_ARROW,I5],[f.HEADLESS_ARROW,w5],[f.ARITHMETIC_SEQUENCE_LINE,x5],[f.ODD_EVEN_OSCILLATOR_LINE,L5],[f.HIGH_LOW_OSCILLATOR_LINE,N5],[f.UNIQUE_VALUES_LINE,E5],[f.REPEATED_DIGITS_LINE,C5],[f.UNIMODULAR_LINE,y5],[f.MODULAR_LINE,O5],[f.MODULAR_OR_UNIMODULAR_LINE,A5],[f.REGION_SUM_LINE,z5],[f.ENTROPIC_LINE,W5],[f.ENTROPIC_OR_MODULAR_LINE,Y5],[f.ROW_CYCLE_THERMOMETER,h5],[f.PEAPODS,j5],[f.BETWEEN_LINE,k5],[f.TIGHTROPE_LINE,M5],[f.DOUBLE_ARROW_LINE,U5],[f.SPLIT_PEAS,G5],[f.PARITY_COUNT_LINE,$5],[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,F5],[f.DOUBLERS_BETWEEN_LINE,nU],[f.DOUBLERS_DOUBLE_ARROW_LINE,rU],[f.DOUBLERS_THERMOMETER,iU],[f.INDEXER_CELLS_REGION_SUBSET_LINE,sU],[f.YIN_YANG_SHADED_WHISPERS_LINE,V5],[f.YIN_YANG_UNSHADED_ENTROPIC_LINE,Z5],[f.YIN_YANG_UNSHADED_MODULAR_LINE,X5],[f.YIN_YANG_REGION_SUM_LINE,eU],[f.YIN_YANG_INDEXING_LINE_COLORING,Q5]]);function lU(t,e){return Hn(t,e,aU)}function Yl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return It(i)}function Ho(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function cU(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),l=`[${Yl(e,n).join(",")}]`,u=n.value,d=Ho(t,u,i,o);if(!d)return"";const g=d[1];let h=d[0];return h+=`constraint ${r}(${l}, ${g});
`,h}function ur(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=cU(t,o,a,n);r+=l}return r}function uU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Yl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Ho(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E}function dU(t,e){return He(t,e,uU)}function _U(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Yl(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,g=Math.min(...d),h=Math.max(...d),v=Ho(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${l}, ${m}, ${g}, ${h});
`,E+=`var bool: ${b} = x_sum_p(${l}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function fU(t,e){return He(t,e,_U)}function gU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Yl(e,r),l=`[${a.join(",")}]`,u=a[0],d=r.value,g=Ho(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint x_index_p(${l}, ${u}, ${h});
`,v}function hU(t,e){return He(t,e,gU)}function vU(t,e){return ur(t,e,"x_sum_p")}function pU(t,e){return ur(t,e,"shortsighted_x_sum_p")}function mU(t,e){return ur(t,e,"broken_x_sum_p")}function EU(t,e){return ur(t,e,"shifted_x_sum_p")}function CU(t,e){return ur(t,e,"skyscrapers_p")}function bU(t,e){return ur(t,e,"x_sum_skyscrapers_p")}function IU(t,e){return ur(t,e,"battlefield_p")}function wU(t,e){return ur(t,e,"rising_streak_p")}function yU(t,e){return ur(t,e,"outside_consecutive_sum_p")}function OU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=me(a,B.BOARD),u=me(a,B.CELL_CENTER_LOOP),d=r.value;if(d){const g=parseInt(d);return`constraint loopwhiches_p(${l}, ${u}, ${g});
`}return""}function AU(t,e){return He(t,e,OU)}function xU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,l=e.getCellsInDirection(i.r,i.c,a),u=me(l,B.BOARD),d=me(l,B.UNKNOWN_REGIONS),g=r.value,h=Ho(t,g,i,o);if(!h)return"";const v=h[1];let m=h[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${d}, ${v});
`,m}function LU(t,e){return He(t,e,xU)}function NU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=a[0],u=rt(l,B.BOARD),d=me(a,B.UNKNOWN_REGIONS);return`constraint chaos_construction_x_index_region_p(${u}, ${d});
`}function SU(t,e){return He(t,e,NU)}function DU(t,e){return ur(t,e,"little_killer_sum_p")}function RU(t,e){return ur(t,e,"little_killer_product_p")}function TU(t,e){return ur(t,e,"x_omit_little_killer_sum_p")}function kU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=me(a,B.BOARD),u=me(a,B.YIN_YANG),d=r.value;if(d){const g=parseInt(d);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${l}, ${u}, ${g});
`}return""}function MU(t,e){return He(t,e,kU)}function UU(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),l=me(a,B.VALUES_GRID),u=r.value;if(u){const d=parseInt(u);return`constraint little_killer_sum_p(${l}, ${d});
`}return""}function GU(t,e){return He(t,e,UU)}function $U(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,l=e.getCellsInDirection(i.r,i.c,a),u=me(l,B.PENTOMINO_REGIONS),d=r.value,g=Ho(t,d,i,o);if(!g)return"";const h=g[1];let v=g[0];return v+=`constraint pentomino_border_count_p(${u}, ${h});
`,v}function FU(t,e){return He(t,e,$U)}const PU=new Map([[f.SANDWICH_SUM,dU],[f.X_SUM,vU],[f.SHORTSIGHTED_X_SUM,pU],[f.BROKEN_X_SUM,mU],[f.SHIFTED_X_SUM,EU],[f.SKYSCRAPERS,CU],[f.X_SUM_SKYSCRAPERS,bU],[f.X_INDEX,hU],[f.BATTLEFIELD,IU],[f.SANDWICH_SUM_XOR_X_SUM,fU],[f.RISING_STREAK,wU],[f.OUTSIDE_CONSECUTIVE_SUM,yU],[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,MU],[f.LOOPWICHES,AU],[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,LU],[f.CHAOS_CONSTRUCTION_X_INDEX_REGION,SU],[f.PENTOMINO_BORDER_COUNT,FU],[f.LITTLE_KILLER_SUM,DU],[f.LITTLE_KILLER_PRODUCT,RU],[f.X_OMIT_LITTLE_KILLER_SUM,TU],[f.NEGATORS_LITTLE_KILLER_SUM,GU]]);function zU(t,e){return Hn(t,e,PU)}function Tp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=n(o,a);r+=l}return r}function HU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=me(o,B.SASHIGANE),l=me(o,B.SASHIGANE_BENDS),u=Oe(r),d=rt(r,B.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${d}, ${a}, ${l});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function WU(t,e){return Tp(t,e,HU)}function BU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+It(o).join(",")+"]",u=me(o,B.CELL_CENTER_LOOP),d=Oe(r);return`constraint thermo_sightline_loop_arrow_p(${l}, ${u}, ${d});
`}function YU(t,e){return Tp(t,e,BU)}const jU=new Map([[f.SASHIGANE_ARROW_POINTS_TO_BEND,WU],[f.THERMO_SIGHTLINE_LOOP_ARROW,YU]]);function KU(t,e){return Hn(t,e,jU)}function VU(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Oe(i);return`constraint ${n}(${o});
`}function kp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=VU(o,a,n);r+=l}return r}const XU={allow_var:!0,allow_interval:!0,allow_int_list:!1};function u_(t,e,n,r=XU){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function qU(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Oe(o);let l=e.value;if(l||(l=r),!l)return"";const u=parseInt(l);return`constraint ${n}(${a}, ${u});
`}function Mp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const l of Object.values(o)){const u=qU(a,l,n,r);i+=u}return i}function jl(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),u=$l(t,o).map(h=>me(h,n)),d=rt(o,n);return`constraint ${r}(${u.join(", ")}, ${d}, ${a});
`}function d_(t,e,n,r){let i="";const o=e.constraints;if(!o)return i;const a=t.puzzle.grid;for(const l of Object.values(o)){const u=jl(a,l,n,r);i+=u}return i}function ZU(t,e){return kp(t,e,"odd_p")}function QU(t,e){return kp(t,e,"even_p")}function JU(t,e){return Mp(t,e,"low_digit_p","5")}function eG(t,e){return Mp(t,e,"high_digit_p","5")}function tG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Oe(i),a=t.getNeighboorCells(i),l=me(a,B.BOARD);return`constraint ${n}(${l}) == ${o};
`}function Up(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=tG(o,a,n);r+=l}return r}function nG(t,e){return Up(t,e,"odd_count")}function rG(t,e){return Up(t,e,"even_count")}function iG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getNeighboorCells(o);l.push(o);const u=me(l,B.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function oG(t,e){return He(t,e,iG)}function sG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${me(l,B.BOARD)}, ${a});
`}function aG(t,e){return He(t,e,sG)}function lG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${me(l,B.BOARD)}, ${a});
`}function cG(t,e){return He(t,e,lG)}function uG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),l=me(a,B.BOARD),u=o.c+1;return`constraint indexing_column_p(${l}, ${u});
`}function dG(t,e){let n=He(t,e,uG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_COLUMN_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_COLUMN_GIVEN}
`;for(const a of o.getAllCells()){if(Ys(i,a))continue;const u=o.getRow(a.r),d=me(u,B.BOARD),g=a.c+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function _G(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),l=me(a,B.BOARD),u=o.r+1;return`constraint indexing_column_p(${l}, ${u});
`}function fG(t,e){let n=He(t,e,_G);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_INDEXING_ROW_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_INDEXING_ROW_GIVEN}
`;for(const a of o.getAllCells()){if(Ys(i,a))continue;const u=o.getCol(a.c),d=me(u,B.BOARD),g=a.r+1,h=`constraint not indexing_column_p(${d}, ${g});
`;n+=h}return n}function gG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=o.r+1,u=o.c+1;if(o.region!==null){const g=o.region+1;return`constraint ${a} == ${l} \\/ ${a} == ${u} \\/ ${a} == ${g};
`}return`constraint ${a} == ${l} \\/ ${a} == ${u};
`}function hG(t,e){return He(t,e,gG)}function vG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),l=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),d=e.getCell(i.r,i.c+1);if(!a||!l||!u||!d)return"";const g=Oe(a),h=Oe(l),v=Oe(u),m=Oe(d);return`constraint groups_opposite_parity_p([${g},${h}], [${v},${m}]);
`}function pG(t,e){return He(t,e,vG)}function mG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Oe(i),[a,l,u,d]=n_(t,i);return`constraint ${n}(${o}, ${a}, ${l}, ${u}, ${d});
`}function __(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=mG(o,a,n);r+=l}return r}function EG(t,e){return __(t,e,"is_watchtower_p")}function CG(t,e){return __(t,e,"is_not_watchtower_p")}function bG(t,e){return __(t,e,"farsight_p")}function IG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),[l,u,d,g]=n_(e,o);return`constraint radar_p(${a}, ${l}, ${u}, ${d}, ${g}, 9);
`}function wG(t,e){let n=He(t,e,IG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_RADARS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_RADARS_GIVEN}
`;for(const a of o.getAllCells()){if(Ys(i,a))continue;const u=Oe(a),[d,g,h,v]=n_(o,a),m=`constraint not radar_p(${u}, ${d}, ${g}, ${h}, ${v}, 9);
`;n+=m}return n}function yG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=me(l,B.BOARD),g=me(u,B.BOARD),[h,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${d}, ${g}, ${h}, ${v}, ${a});
`}function OG(t,e){return He(t,e,yG)}function Gp(t,e,n){const r=e.constraints,i=Object.values(r);let o="";const a=i.map(u=>u.cell),l=new Set(a.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of i){const d=u.cell,g=t.getCell(d.r,d.c);if(!g)continue;const h=Oe(g),v=t.getOrthogonallyAdjacentCells(g).filter(I=>!l.has(I)),m=me(v,B.BOARD),E=`constraint ${n}(${m}, ${h});
`;o+=E}return o}function AG(t,e){const n=t.puzzle.grid;return Gp(n,e,"maximum_p")}function xG(t,e){const n=t.puzzle.grid;return Gp(n,e,"minimum_p")}function LG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(g=>g.cell),l=new Set(a.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${It([...l]).join(`,
	`)}`;return o+=`array[int] of var int: counting_circles = [
	${d}
];
`,o+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,o}function NG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(m=>m.cell),l=new Set(a.map(m=>n.getCell(m.r,m.c)).filter(m=>!!m)),u=n.getAllCells().filter(m=>!l.has(m)),g=`${It([...l]).join(`,
	`)}`,v=`${It([...u]).join(`,
	`)}`;return o+=`array[int] of var int: reverse_counting_circles = [
	${g}
];
`,o+=`array[int] of var int: not_reverse_counting_circles = [
	${v}
];
`,o+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,o}function SG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(v=>v.cell),l=new Set(a.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${It([...l]).join(`,
	`)}`,h=`${zo([...l],B.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${B.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${d}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${h}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${B.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const v of n.getAllCells()){if(l.has(v))continue;const m=rt(v,B.COUNTING_CIRCLES_COLORS);o+=`constraint ${m} == 0;
`}for(const v of i){const m=v.cell,E=n.getCell(m.r,m.c);if(!E)continue;const I=Oe(E),b=rt(E,B.COUNTING_CIRCLES_COLORS),w=v.value;w?o+=`constraint ${b} == ${w};
`:o+=`constraint ${b} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${I}, ${b}) == ${I};
`}return o+=`
`,o}function DG(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(g=>g.cell),l=new Set(a.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${It([...l]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${d}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}function RG(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Oe(i),l=$l(t,i).map(d=>me(d,B.BOARD));return`constraint ${n}(${l.join(", ")}, ${o});
`}function $p(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const a=RG(t,o,n);r+=a}return r}function TG(t,e){const n=t.puzzle.grid;return $p(n,e,"seen_even_count_p")}function kG(t,e){const n=t.puzzle.grid;return $p(n,e,"seen_odd_count_p")}function MG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getCellsByKnightMove(o),u=me(l,B.BOARD),d=r.value??"5",g=u_(t,d,n);if(!g)return"";let h="";const v=g[1];return h+=g[0],h+=`constraint cell_knights_whisper_p(${a}, ${u}, ${v});
`,h}function UG(t,e){return He(t,e,MG)}function GG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint yin_yang_minesweeper_p(${me(u,B.YIN_YANG)}, ${a});
`}function $G(t,e){return He(t,e,GG)}function FG(t,e){return d_(t,e,B.YIN_YANG,"yin_yang_seen_unshaded_p")}function PG(t,e){return d_(t,e,B.YIN_YANG,"yin_yang_seen_shaded_p")}function zG(t,e){return d_(t,e,B.YIN_YANG,"yin_yang_seen_same_shade_p")}function HG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=rt(o,B.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),d=me(u,B.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${l}, ${d});
`}function WG(t,e){return He(t,e,HG)}function BG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getNeighboorCells(o);return`constraint count(${me(l,B.YIN_YANG)}, 1) == ${a};
`}function YG(t,e){return He(t,e,BG)}function jG(t,e){let n=`
% ${e.tool_id}
`;const r=e.constraints,i=Fl(Object.values(r)),o=t.puzzle.grid;for(const a of i.values()){if(a.length<=1)continue;const u=a.map(g=>g.cell).map(g=>o.getCell(g.r,g.c)).filter(g=>g!==void 0),d=me(u,B.YIN_YANG);n+=`constraint all_equal(${d});
`}return n}function KG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),d=e.getCol(o.c),g=me(u,B.TWO_CONTIGUOUS_REGIONS),h=me(d,B.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${h}, ${a}, ${l});
`}function VG(t,e){return He(t,e,KG)}function XG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getRow(o.r),u=e.getCol(o.c),d=me(l,B.UNKNOWN_REGIONS),g=me(u,B.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${d}, ${g}, ${a});
`}function qG(t,e){return He(t,e,XG)}function ZG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=rt(o,B.NURIMISAKI),l=e.getOrthogonallyAdjacentCells(o);let d=`constraint nurimisaki_unshaded_endpoint_p(${me(l,B.NURIMISAKI)}, ${a});
`;return d+=jl(e,r,B.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),d}function QG(t,e){let n=He(t,e,ZG);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const a of o.getAllCells()){if(Ys(i,a))continue;const u=rt(a,B.NURIMISAKI),d=o.getOrthogonallyAdjacentCells(a),h=`constraint not nurimisaki_unshaded_endpoint_p(${me(d,B.NURIMISAKI)}, ${u});
`;n+=h}return n}function JG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=rt(o,B.SASHIGANE),u=rt(o,B.SASHIGANE_BENDS);let d=`constraint sashigane_bend_region_count_p(${a}, ${l}, sashigane);
`;return d+=`constraint ${u} = true;
`,d}function e$(t,e){return He(t,e,JG)}function t$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=rt(o,B.SASHIGANE),l=r.value;if(!l)return"";const u=parseInt(l);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function n$(t,e){return He(t,e,t$)}function r$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${rt(o,B.CELL_CENTER_LOOP)} == 1;
`:""}function i$(t,e){return He(t,e,r$)}function o$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${rt(o,B.CELL_CENTER_LOOP)} == 0;
`:""}function s$(t,e){return He(t,e,o$)}function a$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint sum(${me(u,B.CELL_CENTER_LOOP)}) == ${a};
`}function l$(t,e){return He(t,e,a$)}function c$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=rt(o,B.CAVE_SHADING),u=$l(e,o),d=[];for(const h of u){const v=me(h,B.CAVE_SHADING);d.push(v)}return`constraint cave_clue_p(${a}, ${l}, ${d[0]}, ${d[1]}, ${d[2]}, ${d[3]});
`}function u$(t,e){return He(t,e,c$)}function d$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=rt(o,B.CAVE_SHADING),u=rt(o,B.CAVE_REGIONS),d=$l(e,o),g=[];for(const v of d){const m=me(v,B.CAVE_SHADING);g.push(m)}return`constraint cave_shaded_region_size_unshaded_seen_orthogonally_clue_p(${a}, ${l}, ${u}, ${B.CAVE_REGIONS}, ${g[0]}, ${g[1]}, ${g[2]}, ${g[3]});
`}function _$(t,e){return He(t,e,d$)}function f$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const l=parseInt(a);let u="";const d=Oe(o),g=rt(o,B.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const h=e.getNeighboorCells(o),v=me(h,B.BOARD),m=me(h,B.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${d});
`;const E=e.getCellsByKnightMove(o),I=me(E,B.BOARD),b=me(E,B.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${d});
`;const w=[We.NE,We.NW,We.SE,We.SW],A=[];for(const P of w)e.getCellsInDirection(o.r,o.c,P).forEach(k=>A.push(k));const T=me(A,B.BOARD),U=me(A,B.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${U}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${d});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${l};
`,u}function g$(t,e){return He(t,e,f$)}function h$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const l=parseInt(a);let u="";const d=Oe(o),g=rt(o,B.UNKNOWN_REGIONS),h=e.getOrthogonallyAdjacentCells(o),v=me(h,B.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${g}) >= ${l};
`;const m=[We.N,We.S,We.E,We.W],E=[];for(const I of m){const b=e.getCellsInDirection(o.r,o.c,I);if(!b.length)continue;const w=me(b,B.BOARD),A=me(b,B.UNKNOWN_REGIONS),T=`in_arrow_${n}_${I}`,U=`in_arrow_${n}_${I}[1]`;E.push(U),u+=`array[index_set(${w})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${A}, ${T}, ${d}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${l};
`,u}function v$(t,e){return He(t,e,h$)}function p$(t,e,n,r){return jl(e,r,B.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function m$(t,e){return He(t,e,p$)}function E$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function C$(t,e){return He(t,e,E$)}function b$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function I$(t,e){return He(t,e,b$)}function w$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${rt(o,B.CONNECT_FOUR)});
`:""}function y$(t,e){return He(t,e,w$)}function O$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${rt(o,B.CONNECT_FOUR)});
`:""}function A$(t,e){return He(t,e,O$)}function x$(t,e){let n="";const r=e.constraints,i=t.puzzle.grid,o=Object.values(r).map(d=>d.cell),a=new Set(o.map(d=>i.getCell(d.r,d.c)).filter(d=>!!d)),l=me([...a],B.NURIKABE_REGIONS);n+=`constraint all_different(${l});
`;let u=0;for(const[d,g]of Object.entries(r)){const h=g.cell,v=i.getCell(h.r,h.c);if(!v)continue;const m=g.value;if(!m)continue;const E=u_(t,m,d);if(!E)continue;const I=E[1];n+=E[0];const b=rt(v,B.NURIKABE_REGIONS);n+=`constraint nurikabe_island_product_of_sum_and_size_p(${B.BOARD}, ${B.NURIKABE_REGIONS}, ${b}, ${I});
`,u+=1}return n+=`constraint count_unique_values(array1d(${B.NURIKABE_REGIONS})) == ${u+1};
`,n}function L$(t,e,n,r){return jl(e,r,B.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function N$(t,e){return He(t,e,L$)}function S$(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Oe(o),l=rt(o,B.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${B.NURIKABE_REGIONS}, ${l}, ${a});
`}function D$(t,e){return He(t,e,S$)}function R$(t,e){let n="";const r=e.constraints,i=Fl(Object.values(r)),o=t.puzzle.grid;for(const d of i.values())if(!(d.length<=1))for(const[g,h]of d.flatMap((v,m)=>d.slice(m+1).map(E=>[v,E]))){const v=g.cell,m=h.cell,E=o.getCell(v.r,v.c),I=o.getCell(m.r,m.c);if(!E||!I)continue;const b=rt(E,B.BOARD),w=rt(I,B.BOARD);n+=`constraint ${b} == ${w};
`}const l=[...i.values()].map(d=>d[0].cell).map(d=>o.getCell(d.r,d.c)).filter(d=>d!==void 0),u=me(l,B.BOARD);return n+=`constraint alldifferent(${u});
`,n}function T$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(h=>h.cell),l=new Set(a.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),d=`${zo([...l],B.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_size_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_size_clues);
`;for(const h of Object.values(r)){const v=h.cell,m=n.getCell(v.r,v.c);if(!m)continue;const E=Oe(m),I=rt(m,B.SHIKAKU_REGIONS),b=rt(m,B.SHIKAKU_WIDTH),w=rt(m,B.SHIKAKU_HEIGHT);o+=`constraint shikaku_region_size_p(${B.SHIKAKU_REGIONS}, ${I}, ${E}, ${b}, ${w});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${B.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`),o}function k$(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const a=i.map(v=>v.cell),l=new Set(a.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v)),d=`${zo([...l],B.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_sum_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_sum_clues);
`;const g={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[v,m]of Object.entries(r)){const E=m.cell,I=n.getCell(E.r,E.c);if(!I)continue;const b=rt(I,B.SHIKAKU_REGIONS),w=m.value??"",A=u_(t,w,v,g);if(!A)continue;const T=A[1];o+=A[0],o+=`constraint shikaku_region_sum_p(${B.BOARD}, ${B.SHIKAKU_REGIONS}, ${b}, ${T});
`}return e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE]&&(o+=`
% ${f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${B.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`),o}const M$=new Map([[f.ODD,ZU],[f.EVEN,QU],[f.LOW_DIGIT,JU],[f.HIGH_DIGIT,eG],[f.ODD_MINESWEEPER,nG],[f.EVEN_MINESWEEPER,rG],[f.DIAGONALLY_ADJACENT_SUM,cG],[f.ORTHOGONAL_SUM,aG],[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,oG],[f.FRIENDLY_CELL,hG],[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,pG],[f.WATCHTOWER,EG],[f.NOT_WATCHTOWER,CG],[f.FARSIGHT,bG],[f.RADAR,wG],[f.INDEXING_COLUMN,dG],[f.INDEXING_ROW,fG],[f.SANDWICH_ROW_COL_COUNT,OG],[f.SEEN_EVEN_COUNT,TG],[f.SEEN_ODD_COUNT,kG],[f.CELL_KNIGHT_WHISPERS,UG],[f.YIN_YANG_MINESWEEPER,$G],[f.YIN_YANG_SEEN_UNSHADED_CELLS,FG],[f.YIN_YANG_SEEN_SHADED_CELLS,PG],[f.YIN_YANG_SEEN_SAME_SHADE_CELLS,zG],[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,WG],[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,YG],[f.YIN_YANG_LABELED_SHADE_CELL,jG],[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,VG],[f.SEEN_REGION_BORDERS_COUNT,qG],[f.NURIMISAKI_UNSHADED_ENDPOINTS,QG],[f.NURIKABE_SEEN_WATERWAY_CELLS,N$],[f.NURIKABE_ISLAND_SIZE_CELL,D$],[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,x$],[f.SASHIGANE_BEND_REGION_COUNT,e$],[f.SASHIGANE_REGION_SUM,n$],[f.CELL_ON_THE_LOOP,i$],[f.CELL_NOT_ON_THE_LOOP,s$],[f.COUNT_LOOP_NEIGHBOUR_CELLS,l$],[f.CAVE_CLUE,u$],[f.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,_$],[f.CHAOS_CONSTRUCTION_CHESS_SUMS,g$],[f.CHAOS_CONSTRUCTION_ARROW_KNOTS,v$],[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,m$],[f.DIRECTED_PATH_START,C$],[f.DIRECTED_PATH_END,I$],[f.CONENCT_FOUR_RED,y$],[f.CONNECT_FOUR_YELLOW,A$],[f.MAXIMUM,AG],[f.MINIMUM,xG],[f.COUNTING_CIRCLES,LG],[f.REVERSE_COUNTING_CIRCLES,NG],[f.COLORED_COUNTING_CIRCLES,SG],[f.UNIQUE_CELLS,DG],[f.SHIKAKU_REGION_SIZE,T$],[f.SHIKAKU_REGION_SUM,k$],[f.TELEPORT,R$]]);function U$(t,e){return Hn(t,e,M$)}function dr(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const a of Object.values(i)){const l=n(o,a);r+=l}return r}function G$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=rt(r,B.UNKNOWN_REGIONS),a=e.directions,l=[];for(const g of a){const h=t.getCellsInDirection(r.r,r.c,g),v=me(h,B.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_different(${g}, ${o})`).join(" + ")} == ${i};
`}function $$(t,e){return dr(t,e,G$)}function F$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=rt(r,B.UNKNOWN_REGIONS),a=e.directions,l=[];for(const g of a){const h=t.getCellsInDirection(r.r,r.c,g),v=me(h,B.UNKNOWN_REGIONS);l.push(v)}return`constraint ${l.map(g=>`count_uninterrupted(${g}, ${o})`).join(" + ")} + 1 == ${i};
`}function P$(t,e){return dr(t,e,F$)}function z$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=rt(r,B.YIN_YANG),a=e.directions;let l="";for(const u of a){const d=t.getCellsInDirection(r.r,r.c,u),g=me(d,B.BOARD),h=me(d,B.YIN_YANG);l+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${g}, ${h}) == ${i};
`}return l}function H$(t,e){return dr(t,e,z$)}function W$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=e.directions;let a="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=me(u,B.YIN_YANG);a+=`constraint count(${d}, 1) == ${i};
`}return a}function B$(t,e){let n=dr(t,e,W$);if(!e.negative_constraints||!!!e.negative_constraints[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const a of o.getAllCells()){const l=Ys(i,a),u=l?l.directions:[],d=Oe(a),g=[We.E,We.N,We.S,We.W];for(const h of g){if(u.includes(h))continue;const v=o.getCellsInDirection(a.r,a.c,h),m=me(v,B.YIN_YANG);n+=`constraint count(${m}, 1) != ${d};
`}}return n}function Y$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=rt(r,B.YIN_YANG),a=e.directions,l=[];for(const d of a){const g=t.getCellsInDirection(r.r,r.c,d),h=me(g,B.YIN_YANG),v=me(g,B.FILLOMINO_REGIONS);l.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${h}, ${v})`)}return l.length?`constraint ${l.join(" + ")} == ${i};
`:""}function j$(t,e){return dr(t,e,Y$)}function K$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=e.directions,a=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count(${me(d,B.NURIKABE_SHADING)}, 1)`;a.push(h)}return`constraint ${a.join(" + ")} = ${i};
`}function V$(t,e){return dr(t,e,K$)}function X$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=e.directions,a=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),h=`count_loop_vars_f(${me(d,B.CELL_CENTER_LOOP)})`;a.push(h)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function q$(t,e){return dr(t,e,X$)}function Z$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=rt(r,B.GALAXY_REGIONS),a=e.directions,l=[];for(const d of a){const g=t.getCellsInDirection(r.r,r.c,d),v=`count(${me(g,B.GALAXY_REGIONS)}, ${o})`;l.push(v)}return l.length?`constraint ${l.join(" + ")} = ${i};
`:""}function Q$(t,e){return dr(t,e,Z$)}function J$(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=e.directions;let a="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),g="["+It(u).join(",")+"]";a+=`constraint hot_arrows_p(${g}, ${i});
`}return a}function eF(t,e){return dr(t,e,J$)}function tF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=e.directions;let a="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=me(u,B.BOARD);a+=`constraint cold_arrows_p(${d}, ${i});
`}return a}function nF(t,e){return dr(t,e,tF)}function rF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=rt(r,B.CONNECT_FOUR),a=e.directions,l=[];for(const g of a){const h=t.getCellsInDirection(r.r,r.c,g);l.push(...h)}return l.length===0?"":`constraint count(${me(l,B.CONNECT_FOUR)}, ${o}) == ${i};
`}function iF(t,e){return dr(t,e,rF)}function oF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Oe(r),o=rt(r,B.UNKNOWN_REGIONS),a=e.directions;let l="";for(const u of a){const d=t.getCellsInDirection(r.r,r.c,u),g=me(d,B.UNKNOWN_REGIONS);l+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${g});
`}return l}function sF(t,e){return dr(t,e,oF)}const aF=new Map([[f.HOT_ARROWS,eF],[f.COLD_ARROWS,nF],[f.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,$$],[f.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,P$],[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,H$],[f.LOOP_CELL_COUNT_ARROWS,q$],[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,j$],[f.YIN_YANG_COUNT_SHADED_CELLS,B$],[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,Q$],[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,V$],[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,iF],[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,sF]]);function lF(t,e){return Hn(t,e,aF)}function cF(t){let e="";return e+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,e=kt(e,`${t}`),e}function uF(t){let e="";return e+=`constraint cave_walls_are_even_p(board, cave_shading);
`,e=kt(e,`${t}`),e}function dF(t){let e="";return e+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,e=kt(e,`${t}`),e}function _F(t){let e="";return e+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,e=kt(e,`${t}`),e}function fF(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=B.LITS_SHADING,a=B.LITS_REGIONS,l=B.CAVE_REGIONS;let u=`
% ${e}
`;u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${l}, ${a});
`,u+=`constraint lits_4_per_region_p(${l}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const d=r.getUsedRegions();d.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const g of d){const h=r.getRegion(g),m=`constraint count_eq(${me(h,B.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function gF(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=B.CAVE_SHADING,a=B.BOARD_REGIONS,l="renban_cave_regions";let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${l});
`,u+=`constraint renban_caves_p(${B.BOARD}, ${l});
`,u}function hF(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=B.BOARD,a=B.CAVE_REGIONS;let l=`
% ${e}
`;return l+=`constraint cave_wall_suguru_p(${o}, ${a});
`,l}function vF(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=B.BOARD,a=B.CAVE_SHADING,l=B.CAVE_CELLS_FILLOMINO_REGIONS;let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_cells_fillomino_p(${o}, ${a}, ${l});
`,u}function pF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(w=>w.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.CAVE_SHADING,l=B.CAVE_REGIONS;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_p(${a}, ${l});
`,e.negative_constraints&&(!!e.negative_constraints[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]&&(u+=dF(f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED)),!!e.negative_constraints[f.CAVE_CELLS_ARE_ODD]&&(u+=cF(f.CAVE_CELLS_ARE_ODD)),!!e.negative_constraints[f.CAVE_WALLS_ARE_EVEN]&&(u+=uF(f.CAVE_WALLS_ARE_EVEN)),!!e.negative_constraints[f.CAVE_LITS]&&(u+=fF(t,f.CAVE_LITS)),!!e.negative_constraints[f.RENBAN_CAVES]&&(u+=gF(t,f.RENBAN_CAVES)),!!e.negative_constraints[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]&&(u+=_F(f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE)),!!e.negative_constraints[f.CAVE_WALL_SUGURU]&&(u+=hF(t,f.CAVE_WALL_SUGURU)),!!e.negative_constraints[f.CAVE_CELLS_FILLOMINO]&&(u+=vF(t,f.CAVE_CELLS_FILLOMINO))),u}function mF(t){let e="";return e+=`constraint connect_four_draw_p(${B.CONNECT_FOUR});
`,e=kt(e,`${t}`),e}function EF(t){let e="";return e+=`constraint connect_four_adjacent_reds_different_parity_p(${B.BOARD}, ${B.CONNECT_FOUR});
`,e=kt(e,`${t}`),e}function CF(t){let e="";return e+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${B.BOARD}, ${B.CONNECT_FOUR}, 3);
`,e=kt(e,`${t}`),e}function bF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a="connect_four";let l=`
% ${i}
`;if(l+=`% 1 - Red, 2 - Yellow
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${a};
`,!e.negative_constraints)return l;const u=!!e.negative_constraints[f.CONNECT_FOUR_DRAW],d=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3],g=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];return u&&(l+=mF(f.CONNECT_FOUR_DRAW)),d&&(l+=CF(f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3)),g&&(l+=EF(f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY)),l}function IF(t){let e="";return e+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function wF(t){let e="";return e+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function yF(t){let e="";return e+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,e=kt(e,`${t}`),e}function OF(t){let e="";return e+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,e=kt(e,`${t}`),e}function AF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.GALAXY_REGIONS,l=B.GALAXY_SIZES,u=r.nCols*r.nRows;let d=`
% ${i}
`;if(d+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${a};
`,d+=`constraint galaxy_restrict_numbering_p(${a});
`,d+=`array[0..${u}] of var 0..${u}: ${l};
`,d+=`constraint galaxy_sizes_p(${a}, ${l});
`,d+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${l});
`,d+=`constraint gallaxy_connected_regions_p(${a});
`,!e.negative_constraints)return d;const g=!!e.negative_constraints[f.EVERY_CELL_BELONGS_TO_A_GALAXY],h=!!e.negative_constraints[f.TWO_SYMMETRIC_GALAXIES],v=!!e.negative_constraints[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY],m=!!e.negative_constraints[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS];return g&&(d+=IF(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),v&&(d+=wF(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),h&&(d+=yF(f.TWO_SYMMETRIC_GALAXIES)),m&&(d+=OF(f.TWO_SYMMETRIC_GALAXIES)),d}function xF(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,e}function LF(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,e}function NF(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function SF(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function DF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(m=>m.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=e.negative_constraints,l=a?!!a[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:!1;let u=`
% ${i}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,u+=`constraint cell_center_loop_p(cell_center_loop, ${l});
`,!a)return u;const d=!!a[f.NOT_LOOP_SIZED_REGIONS],g=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS],h=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES],v=!!a[f.MODULAR_LOOP];return g&&(u+=LF(f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS)),h&&(u+=xF(f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES)),d&&(u+=NF(t,f.NOT_LOOP_SIZED_REGIONS)),v&&(u+=SF(t,f.MODULAR_LOOP)),u}function RF(t){let e="";return e+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function TF(t){let e="";return e+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function kF(t){let e="";return e+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,e=kt(e,`${t}`),e}function MF(t){let e="";return e+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,e=kt(e,`${t}`),e}function UF(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=kt(n,`${e}`),n}function Vt(t,e,n){return t*n+e+1}function GF(t){const e=t.grid;function n(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r+h,u.c,e.nCols);d.push([g,v]),d.push([v,g])}return d}function r(l,u){const d=[],g=Vt(l.r,l.c,e.nCols);for(let h=-1;h<=1;h++){const v=Vt(u.r,u.c+h,e.nCols);d.push([g,v]),d.push([v,g])}return d}const i=[],a=t.elementsDict.get(f.MAZE_WALL);if(!a||!a.constraints)return i;for(const l of Object.values(a.constraints)){const u=l.coords;if(u.length===1){const d=u[0],h=sl(d).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let v=Vt(h[0].r,h[0].c,e.nCols),m=Vt(h[3].r,h[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Vt(h[1].r,h[1].c,e.nCols),m=Vt(h[2].r,h[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let d=0;d<u.length-1;d++){const g=kS($v(u[d],u[d+1]),.5),v=al(g).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(v.length!==2)continue;const[m,E]=v;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function $F(t){const e=t.grid,n=[],i=t.elementsDict.get(f.ONE_WAY_DOOR);if(!i||!i.constraints)return n;for(const o of Object.values(i.constraints)){const l=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,d]=l,g=o.value,h=Vt(u.r,u.c,e.nCols),v=Vt(d.r,d.c,e.nCols);g==="<"?n.push([h,v]):g===">"&&n.push([v,h])}return n}function FF(t){const e=[];for(const n of t.getAllCells()){const r=Vt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Vt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function PF(t){const e=t.grid,n=[],r=[],o=t.elementsDict.get(f.TELEPORT),a=o?Object.values(o):[];let l=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const d=Fl(a);let g=1;for(const h of d.values())if(!(h.length<=1)){for(const[v,m]of h.flatMap((E,I)=>h.slice(I+1).map(b=>[E,b]))){const E=Vt(v.cell.r,v.cell.c,e.nCols),I=Vt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[v.cell.r][v.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const v of h){const m=Vt(v.cell.r,v.cell.c,e.nCols);r.push(m)}g++}l=d.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:l}}function zF(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(k=>k.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a="",l=FF(r);const u=GF(n),d=$F(n);u.push(...d);const g=n.elementsDict;l=l.filter(k=>!u.some(G=>k[0]===G[0]&&k[1]===G[1]));const h=PF(n);if(h.tp_edges.length){l.push(...h.tp_edges);const k=Ep(h.tp_arr),G=h.tp_count;a+=`
% teleports grid
`,a+=`array[ROW_IDXS, COL_IDXS] of 0..${G}: teleports = array2d(ROW_IDXS, COL_IDXS, ${k});
`}t.edge_list=l,console.log(l);const v=r.nRows*r.nCols,m=l.length,E="["+l.map(k=>k[0]).join(",")+"]",I="["+l.map(k=>k[1]).join(",")+"]";a+=`array[int] of int: dpath_from = ${E};
`,a+=`array[int] of int: dpath_to = ${I};
`,a+=`var 1..${v}: dpath_source;
`,a+=`var 1..${v}: dpath_target;
`,a+=`array[1..${v}] of var bool: dpath_ns;
`,a+=`array[1..${m}] of var bool: dpath_es;
`,a+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,a+=`
% Direct Path no crossings
`;for(let k=0;k<r.nRows-1;k++)for(let G=0;G<r.nCols-1;G++){const te=r.getCell(k,G),ie=r.getCell(k,G+1),oe=r.getCell(k+1,G),ue=r.getCell(k+1,G+1);if(!te||!ie||!oe||!ue)continue;const be=Vt(te.r,te.c,r.nCols),Z=Vt(ie.r,ie.c,r.nCols),Ee=Vt(oe.r,oe.c,r.nCols),we=Vt(ue.r,ue.c,r.nCols),Fe=[[be,we],[we,be],[Z,Ee],[Ee,Z]].map(Le=>l.findIndex(Me=>Le[0]===Me[0]&&Le[1]===Me[1])).filter(Le=>Le!==-1);if(Fe.length){const Le=Fe.map(Me=>`dpath_es[${Me+1}]`).join(",");a+=`constraint sum([${Le}]) <= 1;
`}}const b=g.get(f.TELEPORT),w=b?Object.values(b):[];if(h.tp_count>0){a+=`
% At most 1 edge per teleporter
`;for(const k of w){const G=k.cell,te=r.getCell(G.r,G.c);if(!te)continue;const ie=r.getNeighboorCells(te),oe=Vt(te.r,te.c,r.nCols),ue=[];for(const Z of ie){if(w.some(Ne=>Ne.cell.r===Z.r&&Ne.cell.c==Z.c&&Ne.value===k.value))continue;const we=Vt(Z.r,Z.c,r.nCols);ue.push([oe,we]),ue.push([we,oe])}const be=ue.map(Z=>l.findIndex(Ee=>Z[0]===Ee[0]&&Z[1]===Ee[1])).filter(Z=>Z!==-1);if(be.length){const Z=be.map(Ee=>`dpath_es[${Ee+1}]`).join(",");a+=`constraint sum([${Z}]) <= 1;
`}}}if(!e.negative_constraints)return a;const A=!!e.negative_constraints[f.DIRECTED_PATH_IS_PARITY_LINE],T=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS],U=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME],P=!!e.negative_constraints[f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME],Y=!!e.negative_constraints[f.DIRECTED_PATH_IS_REGION_SUM_LINE];return U&&(a+=RF(f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME)),A&&(a+=MF(f.DIRECTED_PATH_IS_PARITY_LINE)),T&&(a+=TF(f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS)),P&&(a+=UF(n,f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME)),Y&&(a+=kF(f.DIRECTED_PATH_IS_REGION_SUM_LINE)),a}function HF(t,e){const n=t.grid;let r=`
% ${e}
`;const i=B.YIN_YANG;for(const[o,a]of Zr(n)){const l=Oe(o),u=Oe(a),d=`${i}[${o.r},${o.c}]`,g=`${i}[${a.r},${a.c}]`,h=`constraint (${d} == 1 /\\ ${g} == 1) -> abs(${l} - ${u}) >= 5;
`;r+=h}return r}function WF(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(d=>i.region!==null&&d.region===i.region),a=rt(i,B.BOARD),l=rt(i,B.YIN_YANG),u=me(o,B.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${l}, ${u});
`}return n=kt(n,`${e}`),n}function BF(t){let e=`
% ${t}
`;return e+=`constraint yin_yang_identical_digits_diagonally_belong_to_same_region_p(${B.BOARD}, ${B.YIN_YANG});
`,e}function YF(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,e.negative_constraints&&(!!e.negative_constraints[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]&&(a+=WF(n,f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED)),!!e.negative_constraints[f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]&&(a+=HF(n,f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS)),!!e.negative_constraints[f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION]&&(a+=BF(f.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION))),a}function jF(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Zr(n)){const a=Oe(i),l=Oe(o),u=rt(i,B.NURIMISAKI),d=rt(o,B.NURIMISAKI),g=`constraint (${u} == 0 /\\ ${d} == 0) -> abs(${a} - ${l}) >= 5;
`;r+=g}return r}function KF(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIMISAKI_PATH_GERMAN_WHISPERS]&&(a+=jF(n,f.NURIMISAKI_PATH_GERMAN_WHISPERS)),a}function VF(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function XF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,a+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIKABE_NO_REPEATS_IN_ISLANDS]&&(a+=VF(t,f.NURIKABE_NO_REPEATS_IN_ISLANDS)),a}function qF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function ZF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows),u="["+St.range(1,a+1).join(",")+"]";let d="";return d+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: unknown_regions;
`,d+=`constraint chaos_construction_p(unknown_regions, ${u}, ${a});
`,d+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,d}function QF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const a=B.UNKNOWN_REGIONS,l=Math.max(r.nCols,r.nRows),d="["+St.range(1,l+1).join(",")+"]";let g=`
% ${i}
`;return g+=`array[ROW_IDXS, COL_IDXS] of var 1..${l}: ${a};
`,g+=`constraint numbered_chaos_construction_p(${B.BOARD}, ${a}, ${d}, ${l});
`,g+=`constraint no_repeats_in_unknown_regions_p(${B.BOARD}, ${a}, ALLOWED_DIGITS, ${d});
`,g}function JF(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function e8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.FILLOMINO_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,l+=`constraint fillomino_p(board, ${a});
`,l}function t8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${B.BOARD}, ${B.SHIKAKU_REGIONS});
`,o}function n8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(h=>h.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.SHIKAKU_REGIONS;let l=`
% ${i}
`;const u=r.nRows,d=r.nCols;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${B.SHIKAKU_HEIGHT};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${d}: ${B.SHIKAKU_WIDTH};
`,l+=`constraint shikaku_p(${a}, ${B.SHIKAKU_WIDTH}, ${B.SHIKAKU_HEIGHT});
`,e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_NO_REPEATS_IN_REGION]&&(l+=t8(t,f.SHIKAKU_NO_REPEATS_IN_REGION)),l}function r8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function i8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function o8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=12,l=B.PENTOMINO_REGIONS;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: ${l};
`,u+=`constraint pentomino_tilling_p(${l});
`,u}function s8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.LITS_SHADING,l=B.LITS_REGIONS,u=B.LITS_GRID,d=B.BOARD_REGIONS,g=[...r.getUsedRegions()];g.sort();const h=Math.min(...g),v=Math.max(...g);let m=`
% ${i}
`;m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${l};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..${g.length}: ${u};
`,m+=`constraint lits_shading_p(${a});
`,m+=`constraint lits_shading_ids_p(${a}, ${l});
`,m+=`constraint lits_region_and_ids_p(${d}, ${l});
`,m+=`constraint lits_tetromino_shapes_p(${l});
`,m+=`constraint lits_grid_p(${u}, ${d}, ${a}, ${h}..${v});
`,g.length&&(m+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const E of g){const I=r.getRegion(E),w=`constraint count_eq(${me(I,B.LITS_SHADING)}, 1, 4);
`;m+=w}return m}function a8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.NORINORI_SHADING;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,l+=`constraint norinori_p(${B.BOARD_REGIONS}, ${a});
`,r.getUsedRegions().size&&(l+=`
% Exactly 2 shaded cells per region (known regions)
`),l+=r_(n,2,1,B.NORINORI_SHADING),l}function l8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.NORINORI_SHADING,l=B.STAR_BATTLE;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,u+=bp(2,1,l),u+=Cp(2,1,l),u+=r_(n,1,1,l),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${l});
`,u+=`
% Stars cannot be placed on shaded Norinori cells
`,u+=`constraint norinori_star_battle_not_on_shaded_p(${a}, ${l});
`,u}function c8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.LITS_SHADING,l=B.STAR_BATTLE,u=B.LITS_WHITE_BLACK_STAR_BATTLE;let d=`
% ${i}
`;return d+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,d+=_o(n,2,1,B.STAR_BATTLE),d+=`
% Star battle stars can't touch orthogonally or diagonally
`,d+=`constraint star_battle_no_touching_p(${l});
`,d+=`
`,d+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${u};
`,d+=`
% 1 white star per row, column, region
`,d+=_o(n,1,1,B.LITS_WHITE_BLACK_STAR_BATTLE),d+=`
% 1 black star per row, column, region
`,d+=_o(n,1,2,B.LITS_WHITE_BLACK_STAR_BATTLE),d+=`constraint black_and_white_star_battle_p(${l}, ${u});
`,d+=`constraint lits_black_and_white_star_battle_p(${a}, ${u});
`,d}function u8(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.SUGURU_REGIONS;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,l+=`constraint chaos_construction_suguru_p(board, ${a});
`,l}const d8=new Map([[f.CAVE,pF],[f.CONNECT_FOUR,bF],[f.GALAXIES,AF],[f.CELL_CENTER_LOOP_NO_TOUCHING,DF],[f.MAZE_DIRECTED_PATH,zF],[f.YIN_YANG,YF],[f.NURIMISAKI,KF],[f.NURIKABE,XF],[f.SHIKAKU,n8],[f.PENTOMINO_TILLING,o8],[f.CHAOS_CONSTRUCTION,ZF],[f.NUMBERED_CHAOS_CONSTRUCTION,QF],[f.CHAOS_CONSTRUCTION_SUGURU,u8],[f.TWO_CONTIGUOUS_REGIONS,qF],[f.NORINORI,a8],[f.NORINORI_STAR_BATTLE,l8],[f.SASHIGANE,JF],[f.LITS,s8],[f.LITS_BLACK_WHITE_STAR_BATTLE,c8],[f.FILLOMINO,e8],[f.NEXUS,r8],[f.GOLDILOCKS_ZONE,i8]]);function _8(t,e){let n="";const r=e.tool_id,i=d8.get(r);if(i){const o=i(t,e);n+=o}return n}function f8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let a=`
% ${i}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=_o(n,1,!0,B.DOUBLERS),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function g8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,l+=_o(n,1,!0,B.NEGATORS),l+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,l+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,l}function h8(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const a=B.INDEXER_CELLS_GRID;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,l+=_o(n,2,!0,a),l+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,l+=`constraint indexer_cells_p(board, ${a}, values_grid);
`,l}function v8(t,e,n,r){const i=r.value;return i?`constraint forbidden_adjacent_sum_p(board, ${parseInt(i)});
`:""}function p8(t,e){return He(t,e,v8)}function m8(t,e,n,r){const i=r.value;return i?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(i)});
`:""}function E8(t,e){return He(t,e,m8)}function C8(t,e,n,r){const i=r.value;return i?`constraint forbidden_knight_sum_p(board, ${parseInt(i)});
`:""}function b8(t,e){return He(t,e,C8)}function I8(t,e,n,r){const i=r.value;if(!i)return"";const o=parseInt(i),a=[...e.getUsedRegions()];a.sort();const l=a.length;return`constraint lits_max_tetromino_sum_p(${B.BOARD}, ${B.LITS_GRID}, ${o}, 0..${l});
`}function w8(t,e){return He(t,e,I8)}const y8=new Map([[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,p8],[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,E8],[f.FORBIDDEN_KNIGHT_SUM,b8],[f.LITS_MAX_TETROMINO_SUM,w8]]);function O8(t,e){return Hn(t,e,y8)}const A8=new Map([[f.DOUBLERS,f8],[f.NEGATORS,g8],[f.INDEXER_CELLS,h8]]),x8=[_8,L8,JM,U$,KU,lF,$3,g3,lU,CM,YM,zU,r3,O8,_M];function L8(t,e){return Hn(t,e,A8)}function N8(t,e){let n="";const r=t.elementsDict;for(const[i,o]of r.entries())for(const a of x8){let l=a(e,o);l=kt(l,`${i}`),n+=l}return n}function S8(){return`
`+`
array[int] of array[int] of tuple(int, int): P3_I = [
    [(0, 0), (0, 1), (0, 2)],
    [(0, 0), (1, 0), (2, 0)],
];

array[int] of array[int] of tuple(int, int): P3_L = [
    [(0, 0), (1, 0), (1, 1)],
    [(0, 1), (1, 0), (1, 1)],
    [(0, 0), (0, 1), (1, 0)],
    [(0, 0), (0, 1), (1, 1)],
];

array[int] of array[int] of tuple(int, int): P4_O = [
    [(0, 0), (0, 1), (1, 0), (1, 1)]
];

array[int] of array[int] of tuple(int, int): P4_I = [
    [(0, 0), (0, 1), (0, 2), (0, 3)],
    [(0, 0), (1, 0), (2, 0), (3, 0)],
];

array[int] of array[int] of tuple(int, int): P4_T = [
    [(0, 0), (0, 1), (0, 2), (1, 1)],
    [(0, 1), (1, 0), (1, 1), (1, 2)],
    [(0, 0), (1, 0), (2, 0), (1, 1)],
    [(1, 0), (0, 1), (1, 1), (2, 1)],
];

array[int] of array[int] of tuple(int, int): P4_S = [
    [(0, 1), (0, 2), (1, 0), (1, 1)],
    [(0, 0), (0, 1), (1, 1), (1, 2)],
    [(1, 0), (2, 0), (0, 1), (1, 1)],
    [(0, 0), (1, 0), (1, 1), (2, 1)],
];

array[int] of array[int] of tuple(int, int): P4_L = [
    [(0, 0), (0, 1), (0, 2), (1, 0)],
    [(0, 0), (0, 1), (0, 2), (1, 2)],
    [(0, 0), (1, 0), (1, 1), (1, 2)],
    [(0, 2), (1, 0), (1, 1), (1, 2)],
    [(0, 0), (1, 0), (2, 0), (0, 1)],
    [(0, 0), (1, 0), (2, 0), (2, 1)],
    [(0, 0), (0, 1), (1, 1), (2, 1)],
    [(2, 0), (0, 1), (1, 1), (2, 1)],
];

array[int] of array[int] of tuple(int, int): P5_I = [
    [(0, 0), (0, 1), (0, 2), (0, 3), (0, 4)],
    [(0, 0), (1, 0), (2, 0), (3, 0), (4, 0)],
];

array[int] of array[int] of tuple(int, int): P5_X = [
    [(0, 1), (1, 0), (1, 1), (1, 2), (2, 1)]
];

array[int] of array[int] of tuple(int, int): P5_T = [
    [(0,0), (0,1), (0,2), (1,1), (2,1)],
    [(0,2), (1,0), (1,1), (1,2), (2,2)],
    [(0,1), (1,1), (2,0), (2,1), (2,2)],
    [(0,0), (1,0), (1,1), (1,2), (2,0)],
];

array[int] of array[int] of tuple(int, int): P5_U = [
    [(0,0), (0,2), (1,0), (1,1), (1,2)],
    [(0,0), (0,1), (1,0), (2,0), (2,1)],
    [(0,0), (0,1), (0,2), (1,0), (1,2)],
    [(0,0), (0,1), (1,1), (2,0), (2,1)],
];

array[int] of array[int] of tuple(int, int): P5_V = [
    [(0,0), (0,1), (0,2), (1,0), (2,0)],
    [(0,0), (0,1), (0,2), (1,2), (2,2)],
    [(0,0), (1,0), (2,0), (2,1), (2,2)],
    [(0,2), (1,2), (2,0), (2,1), (2,2)],
];

array[int] of array[int] of tuple(int, int): P5_W = [
    [(0,1), (0,2), (1,0), (1,1), (2,0)],
    [(0,0), (0,1), (1,1), (1,2), (2,2)],
    [(0,0), (1,0), (1,1), (2,1), (2,2)],
    [(0,2), (1,1), (1,2), (2,0), (2,1)],
];

array[int] of array[int] of tuple(int, int): P5_Z = [
    [(0,0), (0,1), (1,1), (2,1), (2,2)],
    [(0,1), (0,2), (1,1), (2,0), (2,1)],
    [(0,2), (1,0), (1,1), (1,2), (2,0)],
    [(0,0), (1,0), (1,1), (1,2), (2,2)],
];

array[int] of array[int] of tuple(int, int): P5_F = [
    [(0,1), (0,2), (1,0), (1,1), (2,1)],
    [(0,1), (1,0), (1,1), (1,2), (2,2)],
    [(0,0), (1,0), (1,1), (1,2), (2,1)],
    [(0,1), (1,1), (1,2), (2,1), (2,0)],
    [(0,1), (1,0), (1,1), (1,2), (2,0)],
    [(0,0), (0,1), (1,1), (1,2), (2,1)],
    [(0,1), (1,0), (1,1), (2,1), (2,2)],
    [(0,2), (1,0), (1,1), (1,2), (2,1)],
];

array[int] of array[int] of tuple(int, int): P5_L = [
    [(0,0), (0,1), (0,2), (0,3), (1,3)],
    [(0,0), (0,1), (0,2), (0,3), (1,0)],
    [(0,0), (1,0), (1,1), (1,2), (1,3)],
    [(0,3), (1,0), (1,1), (1,2), (1,3)],
    [(0,0), (0,1), (1,0), (2,0), (3,0)],
    [(0,0), (1,0), (2,0), (3,0), (3,1)],
    [(0,1), (1,1), (2,1), (3,0), (3,1)],
    [(0,0), (0,1), (1,1), (2,1), (3,1)],
];

array[int] of array[int] of tuple(int, int): P5_N = [
    [(0,1), (0,2), (0,3), (1,0), (1,1)],
    [(0,0), (0,1), (0,2), (1,2), (1,3)],
    [(0,0), (1,0), (2,0), (2,1), (3,1)],
    [(0,1), (1,1), (2,0), (2,1), (3,0)],
    [(0,0), (1,0), (1,1), (2,1), (3,1)],
    [(0,1), (1,0), (1,1), (2,0), (3,0)],
    [(0,2), (0,3), (1,0), (1,1), (1,2)],
    [(0,0), (0,1), (1,1), (1,2), (1,3)],
];

array[int] of array[int] of tuple(int, int): P5_P = [
    [(0,0), (0,1), (0,2), (1,0), (1,1)],
    [(0,0), (0,1), (0,2), (1,1), (1,2)],
    [(0,0), (0,1), (1,0), (1,1), (2,1)],
    [(0,0), (0,1), (1,0), (1,1), (2,0)],
    [(0,0), (1,0), (1,1), (2,0), (2,1)],
    [(0,1), (1,0), (1,1), (2,0), (2,1)],
    [(0,1), (0,2), (1,0), (1,1), (1,2)],
    [(0,0), (0,1), (1,0), (1,1), (1,2)],
];

array[int] of array[int] of tuple(int, int): P5_Y = [
    [(0,0), (1,0), (2,0), (3,0), (2,1)],
    [(0,0), (1,0), (2,0), (3,0), (1,1)],
    [(1,0), (0,1), (1,1), (2,1), (3,1)],
    [(2,0), (0,1), (1,1), (2,1), (3,1)],
    [(0,0), (0,1), (0,2), (0,3), (1,1)],
    [(0,0), (0,1), (0,2), (0,3), (1,2)],
    [(0,1), (1,0), (1,1), (1,2), (1,3)],
    [(0,2), (1,0), (1,1), (1,2), (1,3)],
];

`+`predicate orth_adjacent_2d(
    var int: r1, var int: c1, 
    var int: r2, var int: c2
) = let {
    var int: d1 = abs(r2-r1);
    var int: d2 = abs(c2-c1);
} in d1 <= 1 /\\ d2 <= 1 /\\ d1 + d2 = 1;

predicate diag_adjacent_2d(
    var int: r1, var int: c1, 
    var int: r2, var int: c2
) = let {
    var int: d1 = abs(r2-r1);
    var int: d2 = abs(c2-c1);
} in d1 = 1 /\\ d2 = 1;

predicate orth_or_diag_adjacent_2d(
    var int: r1, var int: c1, 
    var int: r2, var int: c2
) = orth_adjacent_2d(r1,c1,r2,c2) \\/ diag_adjacent_2d(r1,c1,r2,c2);

% (r, c) is in bounds if it is on the board.
test in_bounds_2d(int: r, int: c, array[int, int] of var int: grid) = 
    r in index_set_1of2(grid) /\\ c in index_set_2of2(grid);

% (r2, c2) is before (r1, c1) if it is above it or to the left.
test is_before(int: r1, int: c1, int: r2, int: c2) =
    ( r2 < r1 \\/ ( r2 = r1 /\\  c2 < c1 ));

% (r2, c2) is after (r1, c1) if it is below it or to the right.
test is_after(int: r1, int: c1, int: r2, int: c2) =
    ( r2 > r1 \\/  ( r2 = r1 /\\  c2 > c1 ));

`+`function array[1..4] of tuple(int, int): orth_adjacent_idxs(int: r, int: c) =
    [(r-1,c),(r+1,c),(r,c-1),(r,c+1)];

function array[1..8] of tuple(int, int): orth_or_diag_adjacent_idxs(int: r, int: c) =
    [(r-1,c-1),(r-1,c),(r-1,c+1),(r,c-1),(r,c+1),(r+1,c-1),(r+1,c),(r+1,c+1)];
    
function var int: odd_count(array[int] of var int: arr) =
    sum(i in index_set(arr))(bool2int(arr[i] mod 2 = 1));

function var int: even_count(array[int] of var int: arr) =
    sum(i in index_set(arr))(bool2int(arr[i] mod 2 = 0));

function var bool: are_all_even(array[int] of var int: arr) =
    forall(i in index_set(arr))(arr[i] mod 2 = 0);
	
function var bool: are_all_odd(array[int] of var int: arr) =
    forall(i in index_set(arr))(arr[i] mod 2 = 1);
	
function var int: count_unique_values(array[int] of var int: arr) =
    if length(index_set(arr)) = 0 then 0
    else
        let {
            set of int: indices = index_set(arr);
            % Create an auxiliary array to keep track of whether each element is unique
            array[indices] of var bool: is_unique = 
                [ forall(j in indices where j < i) (arr[i] != arr[j]) | i in indices ];
        } in
        sum(i in index_set(arr))(bool2int(is_unique[i]))
    endif;

function array[int] of var bool: sandwich_bools_f(array[int] of var int: arr, var int: a, var int: b) =
    [exists(j in index_set(arr) where j < i)(
         exists(k in index_set(arr) where k > i)(
             (arr[j] == a /\\ arr[k] == b) \\/ (arr[j] == b /\\ arr[k] == a)
         )
    ) | i in index_set(arr)];
    
function var int: sandwich_bools_sum(array[int] of var bool: arr) =
    sum(i in index_set(arr))(bool2int(arr[i]));
    
predicate count_uninterrupted_counts_p(array[int] of var $$T: arr, array[int] of var bool: counts, var $$T: x) = 
    forall(i in index_set(arr)) (
        if arr[i] != x \\/ (i > min(index_set(arr)) /\\ not counts[i-1]) then
          counts[i] = false
        else 
          counts[i] = true
        endif
    );

function var int: count_uninterrupted(
    array[int] of var int: arr, 
    var int: x
) = (
    if length(arr) == 0 then
        0
    else 
        let {
            % Get array bounds
            array[index_set(arr)] of var bool: counts,
            constraint count_uninterrupted_counts_p(arr, counts, x)
        } in sum(counts)
    endif
);

function var int: count_seen_orth_directions_f(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val
) = 
  count_uninterrupted(arr1, val) + count_uninterrupted(arr2, val) + count_uninterrupted(arr3, val) + count_uninterrupted(arr4, val);
    
function var int: count_different(array[int] of var int: arr, var int: x) =
    let {
        % Create array of boolean variables for counting
        array[index_set(arr)] of var bool: counts = [ arr[i] != x | i in index_set(arr) ];
    } in sum(counts);
     
function var int: conditional_count_f(array[int] of var int: arr, array[int] of var int: labels, var int: x, var int: label) =
    let {
        constraint assert(
            index_set(arr) = index_set(labels),
            "Arrays must have same index set"
        )
    } in
    sum(i in index_set(arr))(
        bool2int(arr[i] = x /\\ labels[i] = label)
    );

function var int: count_transitions_f(array[int] of var int: arr) =
    if length(arr) <= 1 then 
        0 
    else 
        sum(i in min(index_set(arr))..max(index_set(arr))-1)(
            bool2int(arr[i] != arr[i+1])
        )
    endif;

function var int: conditional_sum_f(
    array[int] of var int: arr,
    array[int] of var $$T: labels,
    var $$T: label
) = let {
    constraint assert(
        index_set(arr) = index_set(labels),
        "Arrays must have same index set"
    )
} in sum(i in index_set(arr) where labels[i] == label)(arr[i]);

function array[int] of var $$T: rotate_right_f(array[int] of var $$T: arr, int: x) =
    let {
        set of int: idxs = index_set(arr);
        int: n = length(arr);
        % Normalize x to be within array bounds
        int: shift = x mod n;
    } in
    array1d(idxs, [
        arr[1 + ((i - 1 - shift + n) mod n)] | i in idxs
    ]);
    
% adjacent cells belonging to the same region with given 'label' are whispers
predicate region_whispers_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
    var int: label,
    var int: val
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    forall(r in rows, c in cols where c < max(cols))(
        regions[r,c] == regions[r,c+1] /\\ regions[r,c] = label ->
        abs(grid[r,c] - grid[r,c+1]) >= val
    ) /\\
    forall(r in rows, c in cols where r < max(rows))(
        regions[r,c] == regions[r+1,c] /\\ regions[r,c] = label ->
        abs(grid[r,c] - grid[r+1,c]) >= val
    )
);

% Rotates a 2D array 90 degrees clockwise
function array[int,int] of var int: rotate_2d(array[int,int] of var int: arr) = 
    let {
        % Get dimensions of input array
        set of int: rows = index_set_1of2(arr);
        set of int: cols = index_set_2of2(arr);
        int: min_row = min(rows);
        int: max_row = max(rows);
        int: min_col = min(cols);
        int: max_col = max(cols);
    } in (
        % For each position in result array, map to corresponding position in input array
        % New row becomes old column
        % New column becomes reversed old row
        array2d(min_col..max_col, min_row..max_row,
            [arr[max_row - (j - min_row), i] | i in min_col..max_col, j in min_row..max_row]
        )
    );

% Flips a 2D array horizontally (left to right)
function array[int,int] of var int: flip_2d_horizontal(array[int,int] of var int: arr) =
    let {
        % Get dimensions of input array
        set of int: rows = index_set_1of2(arr);
        set of int: cols = index_set_2of2(arr);
        int: min_row = min(rows);
        int: max_row = max(rows);
        int: min_col = min(cols);
        int: max_col = max(cols);
    } in (
        % For each position, map to mirrored column position
        array2d(min_row..max_row, min_col..max_col,
            [arr[i, max_col - (j - min_col)] | i in min_row..max_row, j in min_col..max_col]
        )
    );

% Flips a 2D array vertically (top to bottom)
function array[int,int] of var int: flip_2d_vertical(array[int,int] of var int: arr) =
    let {
        % Get dimensions of input array
        set of int: rows = index_set_1of2(arr);
        set of int: cols = index_set_2of2(arr);
        int: min_row = min(rows);
        int: max_row = max(rows);
        int: min_col = min(cols);
        int: max_col = max(cols);
    } in (
        % For each position, map to mirrored row position
        array2d(min_row..max_row, min_col..max_col,
            [arr[max_row - (i - min_row), j] | i in min_row..max_row, j in min_col..max_col]
        )
    );
    
function array[int,int] of var int: rotate_2d_i(
    array[int,int] of var int: arr,
    int: i
) = let {
    % Get dimensions of input array
    set of int: rows = index_set_1of2(arr);
    set of int: cols = index_set_2of2(arr);
    int: min_row = min(rows);
    int: max_row = max(rows);
    int: min_col = min(cols);
    int: max_col = max(cols);
    
    % Normalize rotations to 0-3 range since 4 rotations = original array
    int: rotations = i mod 4;

    % Apply rotations based on normalized count
    array[int,int] of var int: result = 
        if rotations = 0 then
            arr
        elseif rotations = 1 then
            rotate_2d(arr)
        elseif rotations = 2 then
            rotate_2d(rotate_2d(arr))
        else  % rotations = 3
            rotate_2d(rotate_2d(rotate_2d(arr)))
        endif;
} in result;

function var int: first_idx(array[int] of var int: arr, var int: x) =
    if length(arr) = 0 then
        -1
    else
        let {
            % For each position, is it the first occurrence?
            array[index_set(arr)] of var bool: is_first = [
                arr[i] = x /\\
                forall(j in min(index_set(arr))..i-1)(arr[j] != x)
                | i in index_set(arr)
            ]
        } in
        if exists(i in index_set(arr))(is_first[i]) then
            min([i | i in index_set(arr) where is_first[i]])
        else
            -1
        endif
    endif;
    
function array[int] of var int: entropic_group_f(
    array[int] of var int: arr,
) = let {
    set of int: group1 = {1, 2, 3};
    set of int: group2 = {4, 5, 6};
    set of int: group3 = {7, 8, 9};
} in [
    if arr[i] in group1 then 1
    elseif arr[i] in group2 then 2
    elseif arr[i] in group3 then 3
    else 0
    endif | i in index_set(arr)    
];

`+`function array[int] of int: grid_to_graph_from_edges(array[int,int] of var int: grid) = 
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
        int: width = max(cols) - min(cols) + 1;
        int: height = max(rows) - min(rows) + 1;

        % Calculate number of edges
        int: num_edges = (width-1)*height + (height-1)*width;
    } in
        % Horizontal edges first, then vertical edges
        [ if i <= (width-1)*height then
            % Horizontal edges
            let {
                int: r = (i-1) div (width-1),
                int: c = (i-1) mod (width-1)
            } in r*width + c + 1
          else
            % Vertical edges
            let {
                int: remaining = i - (width-1)*height,
                int: c = (remaining-1) div (height-1),
                int: r = (remaining-1) mod (height-1)
            } in r*width + c + 1
          endif
          | i in 1..num_edges];

function array[int] of int: grid_to_graph_to_edges(array[int,int] of var int: grid) = 
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
        int: width = max(cols) - min(cols) + 1;
        int: height = max(rows) - min(rows) + 1;

        % Calculate number of edges
        int: num_edges = (width-1)*height + (height-1)*width;
    } in
        % Horizontal edges first, then vertical edges
        [ if i <= (width-1)*height then
            % Horizontal edges
            let {
                int: r = (i-1) div (width-1),
                int: c = (i-1) mod (width-1)
            } in r*width + c + 2
          else
              % Vertical edges
              let {
                  int: remaining = i - (width-1)*height,
                  int: c = (remaining-1) div (height-1),
                  int: r = (remaining-1) mod (height-1)
              } in (r+1)*width + c + 1
          endif | i in 1..num_edges];

predicate graph_edges_connected_region_p(array[int,int] of var int: grid, array[int] of var bool: es, var int: x) = 
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
        int: width = max(cols) - min(cols) + 1;
        int: height = max(rows) - min(rows) + 1;
        
        % Calculate number of edges
        int: num_edges = (width-1)*height + (height-1)*width;
    } in
        % Set edge conditions
        forall(i in 1..num_edges) (
            if i <= (width-1)*height then
                % Horizontal edges
                let {
                    int: r = (i-1) div (width-1) + min(rows),
                    int: c = (i-1) mod (width-1) + min(cols)
                } in es[i] = (grid[r,c] = x /\\ grid[r,c+1] = x)
            else
                % Vertical edges
                let {
                    int: remaining = i - (width-1)*height,
                    int: c = (remaining-1) div (height-1) + min(cols),
                    int: r = (remaining-1) mod (height-1) + min(rows)
                } in es[i] = (grid[r,c] = x /\\ grid[r+1,c] = x)
            endif
        );

predicate connected_region(array[int,int] of var int: grid, var int: x) =
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
        int: width = max(cols) - min(cols) + 1;
        int: height = max(rows) - min(rows) + 1;
        
        % Create nodes array (flattened grid)
        array[1..width*height] of var bool: ns = 
            [grid[r,c] = x | r in rows, c in cols];
        
        % Calculate number of edges
        int: num_edges = (width-1)*height + (height-1)*width;
        
        % Create and initialize edge arrays
        array[1..num_edges] of int: from = grid_to_graph_from_edges(grid);
        array[1..num_edges] of int: to = grid_to_graph_to_edges(grid);
        array[1..num_edges] of var bool: es
      
    } in (
        graph_edges_connected_region_p(grid, es, x) /\\
        % Apply connected constraint
        connected(from, to, ns, es)
    );
    
% Function to check if a point is in the object
function bool: in_object(
    array[int] of tuple(int,int): object,
    tuple(int, int): point
) =  exists(i in index_set(object))(object[i].1 == point.1 /\\ object[i].2 == point.2);

function array[int] of tuple(int,int): neighbour_frontier_f(
    array[int] of tuple(int,int): object
) = let {
    % Directions for orthogonal neighbors (up, right, down, left)
    array[1..4] of tuple(int,int): directions = [(0,1), (1,0), (0,-1), (-1,0)],
    
    % Generate all potential neighbors
    array[int] of tuple(int,int): all_neighbors = [
      (object[i].1 + directions[d].1, object[i].2 + directions[d].2) 
      | i in index_set(object), d in 1..4
    ],
    
    % Filter to keep only neighbors not in the original object
    array[int] of tuple(int,int): valid_neighbors = [
        all_neighbors[i] | i in index_set(all_neighbors) where not in_object(object, all_neighbors[i])
    ],
    
    % Remove duplicates by maintaining indices of unique elements
    array[int] of int: unique_indices = [
        i | i in index_set(valid_neighbors) 
            where not exists(j in 1..i-1)(
                valid_neighbors[j].1 == valid_neighbors[i].1 /\\ 
                valid_neighbors[j].2 == valid_neighbors[i].2
            )
    ],
    
    % Create final result array using the unique indices
    array[1..length(unique_indices)] of tuple(int,int): result = [
      valid_neighbors[unique_indices[i]] | i in 1..length(unique_indices)
    ]
} in result;

`+`predicate exactly_n_in_row_p(
    array[int, int] of var $$T: grid,
    int: row,
    var $$T: target,
    var int: n
) = let {
    set of int: cols = index_set_2of2(grid);
    array[int] of var int: row_vars = [grid[row, c] | c in cols];
} in (
    count_eq(row_vars, target, n)
);

predicate exactly_n_in_column_p(
    array[int, int] of var $$T: grid,
    int: column,
    var $$T: target,
    var int: n
) = let {
    set of int: rows = index_set_1of2(grid);
    array[int] of var int: col_vars = [grid[r, column] | r in rows];
} in (
    count_eq(col_vars, target, n)
);

predicate exactly_n_per_row_p(
    array[int, int] of var $$T: grid,
    var $$T: target,
    var int: n
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(r in rows)(
        let {
            array[int] of var int: row_vars = [grid[r, c] | c in cols];
        } in count_eq(row_vars, target, n)
    )
);

predicate exactly_n_per_column_p(
    array[int, int] of var $$T: grid,
    var $$T: target,
    var int: n
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(c in cols)(
        let {
            array[int] of var int: col_vars = [grid[r, c] | r in rows];
        } in count_eq(col_vars, target, n)
    )
);

predicate multisets_equal_p(array[int] of var int: arr1, array[int] of var int: arr2) =
	forall(i in index_set(arr1)) (
		let {
			var int: count1 = count(arr1, arr1[i]),
			var int: count2 = count(arr2, arr1[i]),
		} in count1 == count2
	);

predicate all_equal_to_p(array[int] of var int: arr, var int: val) =
    forall(v in arr)(v = val);

predicate different_parity_p(var int: val1, var int: val2) = (
    (val1 mod 2) != (val2 mod 2)
);

predicate different_from_group_p(var int: a, array[int] of var int: arr) =
    forall(i in index_set(arr))(a != arr[i]);

predicate regular_distance_p(array[int] of var int: arr, var int: dist) =
	forall(i in index_set(arr) where i < max(index_set(arr))) (
		arr[i+1] - arr[i] == dist
	);

predicate sum_p(array[int] of var int: arr, var int: val) =
    sum(arr) == val;

predicate maximum_p(array[int] of var int: arr, var int: max_val) =
    forall(i in index_set(arr))(arr[i] < max_val);

predicate minimum_p(array[int] of var int: arr, var int: min_val) =
    forall(i in index_set(arr))(arr[i] > min_val);

predicate unknown_regions_region_sum_line_p(array[int] of var int: arr, array[int] of var int: labels) =
    % Ensure arrays have same size
    index_set(arr) = index_set(labels) /\\
    let {
        % Find start indices of each segment
        array[index_set(arr)] of var bool: is_start = [
            i = min(index_set(arr)) \\/ 
            labels[i] != labels[i-1]
            | i in index_set(arr)
        ],
        % Find end indices of each segment
        array[index_set(arr)] of var bool: is_end = [
            i = max(index_set(arr)) \\/ 
            labels[i] != labels[i+1]
            | i in index_set(arr)
        ],
        var int: sum_var;
    } in
    % All segments must sum to the same value
    forall(i in index_set(arr) where is_start[i])(
        sum(k in i..min([l | l in index_set(arr) where is_end[l] /\\ l >= i]))(arr[k]) =
        sum_var
    );

predicate one_of_each_digit_p(
    array[int, int] of var int: grid, 
    array[int, int] of var bool: labels, 
    set of int: digits
) =
    forall(val in digits) (
        conditional_count_f(array1d(grid), array1d(labels), val, true) == 1
    );

predicate multiples_p(var int: a, var int: b) =
    % (a mod b = 0 \\/ b mod a = 0)
    let {
      var int: larger = max([a,b]),
      var int: smaller = min([a,b])
    } in larger mod smaller == 0;

predicate shading_2x2_allowed_p(
    array[int, int] of var 0..1: shading,
    set of int: allowed
) = (
    % For each possible 2x2 square in the grid
    forall(r in index_set_1of2(shading) where r < max(index_set_1of2(shading)),
           c in index_set_2of2(shading) where c < max(index_set_2of2(shading)))(
        % Sum of the 2x2 area must be in allowed
        let {
            var int: square_sum = shading[r,c] + shading[r+1,c] + shading[r,c+1] + shading[r+1,c+1]
        } in (square_sum in allowed)
    )
);
    
predicate conditional_strictly_increasing_p(
    array[int] of var int: arr,
    array[int] of var $$T: labels,
    var $$T: label
) =
    % Get array index set
    let {
        set of int: idx = index_set(arr)
    } in
    % Elements must be strictly increasing when their labels match the given label
    assert(index_sets_agree(arr, labels), "arr and labels must have the same indexes")
    /\\ forall(i,j in idx where i < j) (
        (labels[i] = label /\\ labels[j] = label) -> arr[i] < arr[j]
    );
    
predicate is_prime_p(var int: val) = let {
    set of int: primes = {
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 
        79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 
        167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 
        257, 263, 269, 271
    }
} in member(primes, val);
 
% Predicate to check if ms2 is a subset of ms1 (multiset subset)
predicate subset_p(
    array[int] of var int: ms1,
    array[int] of var int: ms2
) = forall(elem in ms2) (
    % Count occurrences of elem in ms2
    sum([1 | i in index_set(ms2) where ms2[i] == elem]) <=
    % Count occurrences of elem in ms1
    sum([1 | i in index_set(ms1) where ms1[i] == elem])
);

`+`predicate odd_p(var int: x) =
    x mod 2 = 1;

predicate even_p(var int: x) =
    x mod 2 = 0;

predicate low_digit_p(var int: x, var int: val) =
    x < val;

predicate high_digit_p(var int: x, var int: val) =
    x > val;

predicate groups_opposite_parity_p(array[int] of var int: arr1, array[int] of var int: arr2) =
    (are_all_even(arr1) /\\ are_all_odd(arr2)) \\/
    (are_all_even(arr2) /\\ are_all_odd(arr1));

predicate count_same_parity_p(var int: a, array[int] of var int: arr) =
    (odd_p(a) /\\ odd_count(arr) == a) \\/ (even_p(a) /\\ even_count(arr) == a);

function var int: count_watchtower_f(var int: watchtower, array[int] of var int: arr) =
    if length(arr) == 0 then
        0
    else 
        let {
            int: start_index = min(index_set(arr)),
            int: end_index = max(index_set(arr))
        } in
        sum(i in index_set(arr))(
            bool2int(
                arr[i] <= watchtower /\\
                forall(j in start_index..i-1)(arr[j] <= watchtower)
            )
        )
  endif;
	
function var int: watchtower_sum_f(
	var int: watchtower, 
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4
) = 
	  count_watchtower_f(watchtower, arr1) + count_watchtower_f(watchtower, arr2) + count_watchtower_f(watchtower, arr3) + count_watchtower_f(watchtower, arr4) + 1;

predicate is_watchtower_p(
	var int: watchtower, 
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4
) = 
	watchtower_sum_f(watchtower, arr1, arr2, arr3, arr4) == watchtower;

predicate is_not_watchtower_p(
	var int: watchtower, 
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4
) = 
	watchtower_sum_f(watchtower, arr1, arr2, arr3, arr4) != watchtower;

function var bool: farsight_f(array[int] of var int: arr, var int: val) =
    if length(arr) = 0 then
        false
    else 
        val >= min(index_set(arr)) /\\ val <= max(index_set(arr)) /\\ (abs(arr[val] - val) = 1)
    endif;

predicate farsight_p(
	var int: val, 
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4
) = farsight_f(arr1, val) \\/ farsight_f(arr2, val) \\/ farsight_f(arr3, val) \\/ farsight_f(arr4, val);	

predicate indexing_column_p(array[int] of var int: row, var int: y) =
    let {
        var int: x = row[y]
    } in
        x in index_set(row) /\\ row[x] == y;
        
predicate sandwich_row_col_count_p(
    array[int] of var int: row_arr, 
    array[int] of var int: col_arr,
    var int: r,
    var int: c,
    var int: val
) = let {
    array[int] of var bool: row_bools = sandwich_bools_f(row_arr, 1, 9),
    array[int] of var bool: col_bools = sandwich_bools_f(col_arr, 1, 9),
    var int: row_count = sandwich_bools_sum(row_bools),
    var int: col_count = sandwich_bools_sum(col_bools),
    var bool: in_row = c in index_set(row_bools) /\\ row_bools[c],
    var bool: in_col = r in index_set(col_bools) /\\ col_bools[r],
    var int: in_both = if in_row /\\ in_col then 1 else 0 endif
} in (row_count + col_count - in_both) == val;
	 
function var int: radar_distance_f(array[int] of var int: arr, var int: x) =
    if length(index_set(arr)) = 0 \\/ forall(i in index_set(arr))(arr[i] != x) then
        -1
    else
        min(i in index_set(arr) where arr[i] = x)(i)
    endif;

function var int: min_non_negative(array[int] of var int: arr) =
    if length(index_set(arr)) = 0 \\/ forall(i in index_set(arr))(arr[i] < 0) then
        -1
    else
        min(i in index_set(arr) where arr[i] >= 0)(arr[i])
    endif;

predicate radar_p(
	var int: val, 
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
	var int: x
) = let {
	var int: dist1 = radar_distance_f(arr1, x),
	var int: dist2 = radar_distance_f(arr2, x),  
	var int: dist3 = radar_distance_f(arr3, x),
	var int: dist4 = radar_distance_f(arr4, x),
	var int: min_dist = min_non_negative([dist1, dist2, dist3, dist4])
} in min_dist == val;

predicate counting_circles_p(
    array[int] of var int: circles,
    set of int: allowed
) = let {
    int: n = length(circles);
    set of int: allowed_inds = index_set(allowed);
    array[allowed_inds] of var bool: used_vals;
} in (
    % the sum of unique values in circles is equal to the number of circles
    n = conditional_sum_f(allowed, used_vals, true) 
    /\\ forall(i in allowed_inds)(
        let {
            int: value = allowed_inds[i];
            var bool: used = used_vals[i];
        } in (
            (not used -> forall(circle in circles)(
                circle != value
            )) /\\
            (used -> exists(circle in circles)(
                circle == value
            ))
        )
    )
    /\\ forall(circle in circles)(
        count(circles, circle) == circle
    )
);

predicate reverse_counting_circles_p(
    array[int] of var int: circles,
    array[int] of var int: not_circles
) = forall(circle in circles)(
    count(not_circles, circle) == circle
);

predicate colored_counting_circles_adjacent_p(
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    forall(r in rows, c in cols)(
        regions[r,c] != 0 -> forall(idx in orth_adjacent_idxs(r, c))(
            if in_bounds_2d(idx.1, idx.2, regions) then
                regions[idx.1, idx.2] != regions[r, c]
            else 
                true
            endif
        )
    )
);

predicate seen_modular_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val,
    var int: n,
    var int: rem
) = let {
    % counts the number of seen uninterrupted values with remainder mod n = rem,
    % for each of the arrays plus val, and the total count must be equal to val
    array[int] of var bool: _arr1 = [x mod n == rem | x in arr1];
    array[int] of var bool: _arr2 = [x mod n == rem | x in arr2];
    array[int] of var bool: _arr3 = [x mod n == rem | x in arr3];
    array[int] of var bool: _arr4 = [x mod n == rem | x in arr4];
    var int: val_rem = bool2int(val mod n == rem);
} in (
    count_seen_orth_directions_f(_arr1, _arr2, _arr3, _arr4, true) + val_rem == val
);

predicate seen_even_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val
) = seen_modular_count_p(arr1, arr2, arr3, arr4, val, 2, 0);

predicate seen_odd_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: val
) = seen_modular_count_p(arr1, arr2, arr3, arr4, val, 2, 1);
 
predicate cell_knights_whisper_p(
    var int: cell, 
    array[int] of var int: knights_cells, 
    var int: value
) = forall(cell2 in knights_cells)(
    abs(cell2 - cell) >= value
);

`+`predicate cold_arrows_p(
    array[int] of var int: arr, 
    var int: cell_var
) = let {
    int: n = length(arr)
} in (
    cell_var <= n /\\
    arr[cell_var] < cell_var
);

predicate hot_arrows_p(
    array[int] of var int: arr, 
    var int: cell_var
) = let {
    int: n = length(arr)
} in (
    cell_var <= n /\\
    arr[cell_var] > cell_var
);

`+`predicate consecutive_p(var int: a, var int: b) = 
    abs(a - b) = 1;

predicate abs_difference(var int: a, var int: b, var int: d) =
	abs(a - b) = d;

predicate ratio_p(var int: a, var int: b, var int: r) =
    (a = r * b) \\/ (b = r * a);

predicate edge_sum_p(var int: a, var int: b, var int: val) =
    a + b == val;

predicate edge_modulo_p(var int: a, var int: b, var int: rem) =
    let {
      var int: larger = max([a,b]),
      var int: smaller = min([a,b])
    } in 
    larger mod smaller == rem;

predicate edge_factor_p(var int: a, var int: b) =
    multiples_p(a, b);
    
predicate xy_differences_p(var int: cell1, var int: cell2, var int: first_cell) =
    abs(cell1 - cell2) == first_cell;

`+`predicate quadruple_p(
    array[int] of var int: arr,
    array[int] of var int: values
) =
    forall(i in index_set(values)) (
        count(arr, values[i]) == count(values, values[i])
    );
    
predicate corner_sum_p(array[int] of var int: arr, var int: val) =
	sum(arr) == val;
	
predicate corner_sum_of_three_equals_the_other_p(array[int] of var int: arr) =
	exists(i in index_set(arr)) (
    	arr[i] == sum(j in index_set(arr) where j != i) (arr[j])
	);

predicate corner_even_count_p(array[int] of var int: arr, var int: val) =
	even_count(arr) == val;
    
predicate product_square_p(array[int] of var int: arr) =
    assert(length(arr) == 4, "Array must have length 4.") /\\
    arr[1] * arr[4] = arr[2] * arr[3];
    
predicate equal_diagonal_differences_p(array[int] of var int: arr) =
    assert(length(arr) == 4, "Array must have length 4.") /\\
    abs(arr[1] - arr[4]) = abs(arr[2] - arr[3]);

`+`predicate fuzzy_thermo_p(array[int] of var int: arr) =
    strictly_increasing(arr) \\/ strictly_decreasing(arr);
    
predicate custom_thermo_p(
    array[int] of var int: arr,
    var int: val
) = let {
    set of int: idxs = index_set(arr);
} in forall(i in idxs where i>min(idxs))(
    arr[i] - arr[i-1] >= val
);

predicate renban(array[int] of var int: arr) =
    alldifferent(arr) /\\
    % Ensure the absolute difference between min and max is n-1
    max(arr) - min(arr) == card(index_set(arr)) - 1;

predicate whispers(array[int] of var int: arr, var int: d) =
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        abs(arr[i] - arr[i + 1]) >= d
    );

predicate palindrome(array[int] of var int: arr) =
    forall(i in index_set(arr) where i <= (min(index_set(arr)) + max(index_set(arr))) div 2) (
        arr[i] == arr[max(index_set(arr)) - (i - min(index_set(arr)))]
    );

predicate repeated_digits_line_p(array[int] of var int: arr) =
    let {
        var int: count;
    } in forall(i in index_set(arr)) (
        count(arr, arr[i]) == count
    ) /\\ count >= 2;

predicate xv_line_p(array[int] of var int: arr) =
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        let {
            int: next_index = i + 1
        } in
        arr[i] + arr[next_index] = 5 \\/ arr[i] + arr[next_index] = 10
    );

predicate at_least_x_line_p(array[int] of var int: arr, var int: x) =
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        let {
            int: next_index = i + 1
        } in
        arr[i] + arr[next_index] >= x
    );

predicate adjacent_multiples_line_p(array[int] of var int: arr) =
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        multiples_p(arr[i], arr[i + 1])
    );

predicate adjacent_differences_count_line_p(array[int] of var int: arr) =
    let {
        array[int] of var int: differences = [abs(arr[i] - arr[i+1]) | i in index_set(arr) where i < max(index_set(arr))];
    } in forall(i in index_set(differences))(
        count(differences, differences[i]) == differences[i]
    );

predicate index_line_p(array[int] of var int: arr) = 
    forall(i in index_set(arr)) (
        element(arr[i], arr, i)
    );

predicate same_parity_line_p(array[int] of var int: arr) =
	are_all_even(arr) \\/ are_all_odd(arr);

predicate arithmetic_sequence_line_p(array[int] of var int: arr) =
    let {
        var int: x  % Difference between consecutive elements
    } in
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        arr[i] - arr[i + 1] = x
    );

predicate out_of_order_consecutive_line_p(
    array[int] of var int: arr
) =
    let {
        array[int] of var int: differences = [
            arr[i] - arr[i+1] | i in index_set(arr) where i < max(index_set(arr))
        ];
    } in renban(arr) /\\ not all_equal(differences);

predicate zipper_line_p(array[int] of var int: arr) =
    let {
        int: n = length(arr);
        int: mid = (n + 1) div 2;
        % For even length arrays, this variable will hold the sum value
        var int: target_sum = if n mod 2 = 1 then arr[mid] else arr[mid] + arr[mid+1] endif;
    } in
    if n mod 2 = 1 then
        % Odd length case - sum to middle element
        forall(i in 1..mid-1)(
            arr[i] + arr[n-i+1] = arr[mid]
        )
    else
        % Even length case - all pairs sum to same value
        forall(i in 1..n div 2)(
            arr[i] + arr[n-i+1] = target_sum
        )
    endif;

predicate odd_even_oscillator_line_p(array[int] of var int: arr) =
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        (arr[i] mod 2 = 0 /\\ arr[i + 1] mod 2 = 1) \\/
        (arr[i] mod 2 = 1 /\\ arr[i + 1] mod 2 = 0)
    );

predicate high_low_oscillator_line_p(array[int] of var int: arr, var int: x) =
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        (arr[i] < x /\\ arr[i + 1] > x) \\/
        (arr[i] > x /\\ arr[i + 1] < x)
    );

predicate maximum_adjacent_difference_line_p(array[int] of var int: arr, var int: a) =
    forall(i in index_set(arr) where i < max(index_set(arr))) (
        abs(arr[i] - arr[i + 1]) <= a
    );

predicate sum_line_p(array[int] of var int: arr, var int: val) =
    let {
        int: start_idx = min(index_set(arr)),
        int: end_idx = max(index_set(arr))
    } in
    val = sum(i in start_idx..end_idx)(arr[i]);

predicate product_line_p(array[int] of var int: arr, var int: val) =
    let {
        int: start_idx = min(index_set(arr)),
        int: end_idx = max(index_set(arr))
    } in
    val = product(i in start_idx..end_idx)(arr[i]);

function var bool: is_unimodular_line(array[int] of var int: arr, var int: n) =
    let {
        int: start_idx = min(index_set(arr)),
        int: end_idx = max(index_set(arr)),  
        var int: x
    } in
    forall(i in start_idx..end_idx)(arr[i] mod n = x);

predicate unimodular_line_p(array[int] of var int: arr, var int: n) =
	is_unimodular_line(arr, n);	

predicate modular_line_p(array[int] of var int: arr, int: n) =
    forall(start in index_set(arr) where start + n - 1 <= max(index_set(arr))) (
        let {
            array[1..n] of var 0..n-1: remainders = 
                [arr[start + i] mod n | i in 0..n-1]
        } in
        alldifferent(remainders)
    );

predicate modular_or_unimodular_line_p(array[int] of var int: arr, int: n) =
	unimodular_line_p(arr, n) \\/ modular_line_p(arr, n);

function array[int] of var int: remainders_f(array[int] of var int: arr, var int: n) = 
    [arr[i] mod n | i in index_set(arr)];

predicate _n_consecutive_fuzzy_sum_line_p(
    array[int] of var int: arr,
    int: n
) = let {
    int: start_idx = min(index_set(arr)),
    int: end_idx = max(index_set(arr))
} in forall(i in start_idx..end_idx - n + 1) (
    exists(k in i..i + n - 1) (
        arr[k] = sum(j in i..i + n - 1 where j != k)(arr[j])
    )
);

predicate n_consecutive_fuzzy_sum_line_p(
    array[int] of var int: arr,
    int: n,
    bool: circular
) = (
    if circular then
        let {
            int: min_i = min(index_set(arr));
            int: max_i = max(index_set(arr));
            int: idx2 = min([max_i, min_i+n-1]);
            array[int] of var int: new_arr = arr ++ arr[min_i..idx2];
        } in ( 
            forall(start in index_set(new_arr) where start + n - 1 <= max(index_set(new_arr))) (
                let {
                    array[start..start + n - 1] of var int: slice = new_arr[start..start + n - 1]
                } in _n_consecutive_fuzzy_sum_line_p(new_arr, n)
            )
        )
    else
        _n_consecutive_fuzzy_sum_line_p(arr, n)
    endif
);


predicate superfuzzy_arrow_p(array[int] of var int: arr) =
    let {
        int: n = card(index_set(arr)),  % Size of the array
        int: first_index = min(index_set(arr)),  % First index of the array
        int: last_index = max(index_set(arr)),   % Last index of the array
        array[first_index + 1 .. last_index - 1] of var int: middle_values = arr[first_index + 1 .. last_index - 1]
    } in
    (
        % Case 1: One of the ends is equal to the sum of all other values
        (arr[first_index] = sum(i in first_index + 1 .. last_index)(arr[i]))
        \\/
        (arr[last_index] = sum(i in first_index .. last_index - 1)(arr[i]))
        \\/
        % Case 2: A middle value divides the array into two segments with equal sums
        exists(b in first_index + 1 .. last_index - 1)(
            arr[b] = sum(i in first_index .. b - 1)(arr[i])
            /\\
            arr[b] = sum(i in b + 1 .. last_index)(arr[i])
        )
    );

predicate ambiguous_arrow_p(array[int] of var int: arr) = let{
    set of int: idxs = index_set(arr)
} in (
    exists(i in idxs)(
        arr[i] == sum(j in idxs where j != i)(arr[j])
    )
);

predicate headless_arrow_p(array[int] of var int: arr) =
    let {
        int: min_i = min(index_set(arr));
        int: max_i = max(index_set(arr));
    } in
        (arr[min_i] = sum(i in index_set(arr) where i != min_i)(arr[i])) \\/ 
        (arr[max_i] = sum(i in index_set(arr) where i != max_i)(arr[i]));

predicate double_renban_p(array[int] of var int: arr) =
    let {
        int: n = length(index_set(arr)) div 2,  % Half the length of the array
        array[1..n] of var int: group1,        % First group
        array[1..n] of var int: group2         % Second group
    } in
    length(arr) mod 2 = 0 /\\
    group1[1] <= group2[1] /\\
    regular_distance_p(group1, 1) /\\
    regular_distance_p(group2, 1) /\\
    multisets_equal_p(arr, [group1[i] | i in 1..n] ++ [group2[i] | i in 1..n]);

predicate renrenbanban_p(array[int] of var int: arr) =
    let {
        var int: unique_count = count_unique_values(arr),
        var int: start = min(arr),
        var int: end = max(arr)
    } in
        end == start + unique_count - 1 /\\
        
        forall(i in index_set(arr)) (
            count(arr, arr[i]) >= 2
        ) /\\
        
        forall(i in index_set(arr)) (
            arr[i] >= start /\\ arr[i] <= end
        );

predicate knabner_p(array[int] of var int: arr) =
    % Ensure all elements in the array are different
    alldifferent(arr) /\\
    
    % For all distinct pairs of indices (i, j), the values at arr[i] and arr[j]
    % are not consecutive.
    forall(i in index_set(arr), j in index_set(arr) where i != j)(
        abs(arr[i] - arr[j]) != 1
    );

predicate renban_or_nabner_line_p(array[int] of var int: arr) =
    knabner_p(arr) \\/ renban(arr);

predicate renban_or_whispers_p(array[int] of var int: arr, var int: val) = 
	renban(arr) \\/ whispers(arr, val);

predicate n_consecutive_renban_line_p(array[int] of var int: arr, int: n, bool: circular) =
    % Ensure that each slice of size n satisfies the renban constraint
    if circular then
        let {
            int: min_i = min(index_set(arr));
            int: max_i = max(index_set(arr));
            int: idx2 = min([max_i, min_i+n-1]);
            array[int] of var int: new_arr = arr ++ arr[min_i..idx2];
        } in ( 
            forall(start in index_set(new_arr) where start + n - 1 <= max(index_set(new_arr))) (
                let {
                    array[start..start + n - 1] of var int: slice = new_arr[start..start + n - 1]
                } in renban(slice)
            )
        )
    else
        forall(start in index_set(arr) where start + n - 1 <= max(index_set(arr))) (
            let {
                array[start..start + n - 1] of var int: slice = arr[start..start + n - 1]
            } in renban(slice)
        )
    endif;
    
predicate entropic_line_p(
    array[int] of var int: arr,
    set of int: group1,
    set of int: group2,
    set of int: group3
) =
    % Every sequence of 3 must contain one from each group
    forall(i in min(index_set(arr))..max(index_set(arr))-2)(
        exists(j in 0..2)(arr[i+j] in group1) /\\
        exists(j in 0..2)(arr[i+j] in group2) /\\
        exists(j in 0..2)(arr[i+j] in group3)
    )
    /\\
    % Same mod 3 indices belong to same group
    forall(i,j in index_set(arr))(
        (i mod 3 = j mod 3) ->
        ((arr[i] in group1 <-> arr[j] in group1) /\\
         (arr[i] in group2 <-> arr[j] in group2) /\\
         (arr[i] in group3 <-> arr[j] in group3))
    );
    
predicate entropic_or_modular_line_p(
    array[int] of var int: arr,
    set of int: group1,
    set of int: group2,
    set of int: group3,
    int: val
) =
    entropic_line_p(arr, group1, group2, group3) \\/ modular_line_p(arr, val);
    
predicate look_and_say_line_p(array[int] of var int: arr) =
    length(arr) >= 2 /\\
    let {
        var int: first = arr[min(index_set(arr))];
        var int: last = arr[max(index_set(arr))]
    } in count(arr, first) == last /\\ count(arr, last) == first;

predicate segmented_sum_line_not_circular_p(array[int] of var int: arr, var int: val) =
    let {
        set of int: idxs = index_set(arr);
        int: n = length(arr);
        % split_after[i] is true if we split after position i
        array[idxs] of var bool: split_after;
        % segment_sum[i] is sum from position i to next split (or end)
        array[idxs] of var int: segment_sum;
    } in (
    split_after[max(idxs)] = 0 
    % Calculate running sum for each position
    /\\ forall(i in idxs)(
        segment_sum[i] = 
            if i = min(idxs) then
                arr[i]
            else 
                arr[i] +
                if split_after[i-1] then 
                    0 
                else 
                    segment_sum[i-1]
                endif
            endif
    ) /\\
    % Each segment must sum to val
    forall(i in idxs)(
        % If this is start of segment (first pos or after split), sum must be val
        i = max(idxs) \\/ (i < max(idxs) /\\ split_after[i]) -> segment_sum[i] = val
    )
);

predicate segmented_sum_line_circular_p(
    array[int] of var int: arr, 
    var int: val
    ) =
    let {
        set of int: idxs = index_set(arr);
        int: min_i = max(idxs);
        int: max_i = max(idxs);
    } in (
        exists(i in 0..max_i-1)(
            let {
                array[int] of var int: new_arr = rotate_right_f(arr, i)
            } in segmented_sum_line_not_circular_p(new_arr, val)
        )
    );

predicate segmented_sum_line_p(array[int] of var int: arr, var int: val, bool: circular) =
    if circular then
        segmented_sum_line_circular_p(arr, val)
    else
        segmented_sum_line_not_circular_p(arr, val)
    endif;
    
function var int: cycle_order_f(
    array[int] of var int: arr, 
    var int: start
) = let {
    set of int: idxs = index_set(arr);
    int: min_i = min(idxs);
    int: max_i = max(idxs);
    array[min_i..max_i+1] of var int: transitions;
    constraint transitions[min_i] = arr[start];
    constraint forall(i in idxs)(
        transitions[i+1] = arr[transitions[i]]
    );
    var int: target_idx = first_idx(transitions, start)
} in target_idx;
 
predicate segmented_sum_and_renban_line_p(
    array[int] of var int: arr
) = let {
    set of int: idxs = index_set(arr);
    int: n = length(arr);
    % split_after[i] is true if we split after position i
    array[idxs] of var bool: split_after;
    array[idxs] of var 1..n: segments;
    array[idxs] of var 0..n: segment_sizes;
    
    array[idxs] of var int: segment_sum;
    var int: sum_var;
} in (
    split_after[max(idxs)] = 0
    /\\ sum(i in idxs)(split_after[i]) >= 1
    /\\ segments[min(idxs)] = 1
    /\\ forall(i in idxs where i > min(idxs))(
        (split_after[i-1] -> segments[i] = segments[i-1] + 1) /\\
        (not split_after[i-1] -> segments[i] = segments[i-1])
    )
    % Calculate running sum for each position
    /\\ forall(i in idxs)(
        segment_sum[i] = 
            if i = min(idxs) then
                arr[i]
            else 
                arr[i] +
                if split_after[i-1] then 
                    0 
                else 
                    segment_sum[i-1]
                endif
            endif
    )
    % Each segment must sum to val
    /\\ forall(i in idxs)(
        % If this is start of segment (first pos or after split), sum must be val
        i = max(idxs) \\/ (i < max(idxs) /\\ split_after[i]) -> segment_sum[i] = sum_var
    )
    % segment sizes
    /\\ forall(i in idxs)(
        segment_sizes[i] == sum(j in idxs)(bool2int(segments[i] == segments[j]))
    )
    % each segment must be a renban
    /\\ forall(i,j in idxs where j>i)(
        segments[i] == segments[j] -> arr[i] != arr[j] /\\ abs(arr[i] - arr[j]) <= segment_sizes[i] - 1
    )
);

predicate adjacent_cells_are_multiples_of_difference_line_p(
    array[int] of var int: arr
) = let {
    set of int: idxs = index_set(arr);
} in (
    forall(i in idxs where i < max(idxs))(
        let {
            var int: absdiff = abs(arr[i] - arr[i+1]);
        } in arr[i] mod absdiff == 0 /\\ arr[i+1] mod absdiff == 0
    )
);

predicate peapods_p(
    array[int] of var int: arr
) = let {
    int: idx1 = min(index_set(arr)),
    var int: sum_var = sum(i in index_set(arr) where i != idx1)(arr[i])
} in 10 * arr[idx1] + arr[idx1] = sum_var;

`+`
predicate between_line_p(array[int] of var int: arr) =
    let {
        int: start_index = min(index_set(arr)), 
        int: end_index = max(index_set(arr))    
    } in
    % Enforce one of the two conditions
    (forall(j in index_set(arr) where j > start_index /\\ j < end_index)(
        arr[start_index] < arr[j] /\\ arr[j] < arr[end_index]
    ))
    \\/
    (forall(j in index_set(arr) where j > start_index /\\ j < end_index)(
        arr[end_index] < arr[j] /\\ arr[j] < arr[start_index]
    ));

predicate tightrope_line_p(array[int] of var int: arr) =
    let {
        int: n = card(index_set(arr))  % Size of the array
    } in
    arr[min(index_set(arr))] = arr[max(index_set(arr))] /\\
    forall(i in index_set(arr) where i != min(index_set(arr)) /\\ i != max(index_set(arr))) (
        arr[i] != arr[min(index_set(arr))]
    );

predicate double_arrow_p(array[int] of var int: arr) =
    let {
        int: first_index = min(index_set(arr)), 
        int: last_index = max(index_set(arr))   
    } in
    arr[first_index] + arr[last_index] = 
    sum(i in index_set(arr) where i != first_index /\\ i != last_index)(arr[i]);
	
predicate split_peas_p(array[int] of var int: arr) =
    let {
        int: first_index = min(index_set(arr)), 
        int: last_index = max(index_set(arr)),
        var int: sum_var = sum(i in index_set(arr) where i != first_index /\\ i != last_index)(arr[i])
    } in
    10 * arr[first_index] + arr[last_index] = sum_var \\/ arr[first_index] + 10 * arr[last_index] = sum_var;

predicate parity_count_line_p(array[int] of var int: arr) =
    let {
		int: first_index = min(index_set(arr)),
        int: last_index = max(index_set(arr)),
        var int: odd_count_line = odd_count(arr),  
        var int: even_count_line = even_count(arr) 
    } in
    (odd_count_line == arr[first_index] /\\ even_count_line == arr[last_index]) \\/
    (odd_count_line == arr[last_index] /\\ even_count_line == arr[first_index]);

predicate product_of_ends_equals_sum_of_line_p(array[int] of var int: arr) =
    let {
        int: start_index = min(index_set(arr)),  % Start index of the array
        int: end_index = max(index_set(arr))    % End index of the array
    } in
    % Constraint: Product of the first and last elements equals the sum of all other elements
    arr[start_index] * arr[end_index] = 
    sum(i in index_set(arr) where i != start_index /\\ i != end_index)(arr[i]);

predicate lockout_line_p(array[int] of var int: arr, var int: x) =
    let {
        int: start_index = min(index_set(arr)), 
        int: end_index = max(index_set(arr)),   
        var int: a = arr[start_index],          
        var int: b = arr[end_index],            
        var int: lower_bound = min(a, b),        % Lower bound of the interval
        var int: upper_bound = max(a, b)         % Upper bound of the interval
    } in
    % Constraint: Absolute difference between the first and last elements must be at least x
    abs(a - b) >= x /\\
    % Constraint: All middle elements must be outside the interval [lower_bound, upper_bound]
    forall(i in index_set(arr) where i != start_index /\\ i != end_index)(
        arr[i] < lower_bound \\/ arr[i] > upper_bound
    );

`+`predicate arrow_p(
    array[int] of var int: pill,
    array[int] of var int: arrow
) = let {
    set of int: idxs = index_set(pill);
    int: n = max(idxs);
    array[int] of var int: pill_values = [pow(10, i-1)*pill[n-i+1] | i in idxs];
    var int: arrow_val = sum(pill_values);
} in (
    arrow_val == sum(arrow)
);
    
predicate average_arrow_p(array[int] of var int: arr, var int: val) =
	sum(arr) == val * length(arr);
    
predicate average_arrow_or_thermometer_p(
    array[int] of var int: arr
) = let {
    set of int: idxs = index_set(arr);
    var int: first = arr[min(idxs)];
    array[int] of var int: arr2 = [arr[i] | i in idxs where i > min(idxs)];
} in (
    strictly_increasing(arr) /\\ average_arrow_p(arr2, first)
);

predicate bulbous_arrow_p(
    array[int] of var int: bulb,
    array[int] of var int: arrow
) = (
    sum(bulb) == sum(arrow)
);

`+`predicate killer_cage(array[int] of var int: arr, var int: val) =
    alldifferent(arr) /\\
    sum(arr) == val;

predicate inverted_killer_cage_p(array[int] of var int: arr, var int: val) =
    let {
        var int: max_val = max(arr);
        array[int] of var int: arr2 = 
            [if arr[i] == max_val then -max_val else arr[i] endif 
            | i in index_set(arr)]
    } in alldifferent(arr) /\\ sum(arr2) == val;

predicate sum_cage_p(array[int] of var int: arr, var int: val) =
    sum(arr) == val;

predicate sum_cage_look_and_say_p(array[int] of var int: arr) = 
    let {
        var int: sum_var = sum(arr);
        var int: units_digit = sum_var mod 10;
        var int: tens_digit = sum_var div 10;
    } in count(arr, units_digit) == tens_digit;

predicate parity_balance_cage_p(array[int] of var int: arr) =
    let {
        var int: odd_sum = sum(i in index_set(arr) where arr[i] mod 2 = 1)(arr[i]);
        var int: even_sum = sum(i in index_set(arr) where arr[i] mod 2 = 0)(arr[i]);
    } in
    alldifferent(arr) /\\ odd_sum = even_sum;

predicate divisible_killer_cage_p(array[int] of var int: arr, var int: val) =
    sum(arr) mod val == 0;

predicate spotlight_cage_p(array[int] of var int: arr, var int: val) =
    alldifferent(arr) /\\ member(arr, val);

predicate unique_values_cage_p(array[int] of var int: arr, var int: val, set of int: allowed) =
    let {
        array[index_set(allowed)] of var bool: used_vals = [
          exists(i in index_set(arr))(
            arr[i] = v
          )
        | v in allowed]
    } in sum(used_vals) = val;
     
predicate vaulted_cage_p(
    array[int] of var int: cage,
    array[int] of var int: neighbours
) = forall(cell_v in neighbours)(
    not member(cage, cell_v)
);

`+`function var int: sandwich_sum(array[int] of var int: arr, var int: a, var int: b) =
    sum(i in index_set(arr)) (arr[i] * bool2int(sandwich_bools_f(arr, a, b)[i]));

predicate sandwich_sum_p(array[int] of var int: arr, var int: val, var int: a, var int: b) =
    val == sandwich_sum(arr, a, b);

function var int: x_sum_f(array[int] of var int: arr, var int: x) =
    let {
        set of int: idxs = index_set(arr);
    } in
    sum(i in idxs where i <= min(idxs) + x - 1)(arr[i]);

predicate x_sum_p(
    array[int] of var int: arr,
    var int: val
) = let {
    int: min_i = min(index_set(arr));
    var int: first = arr[min_i];
} in x_sum_f(arr, first) == val;
	
predicate shortsighted_x_sum_p(
    array[int] of var int: arr,
    var int: val
) = let {
    int: min_i = min(index_set(arr));
    var int: first = arr[min_i];
} in x_sum_f(arr, first) == val \\/ x_sum_f(arr, first-1) == val;

predicate broken_x_sum_p(
    array[int] of var int: arr,
    var int: val
) = let {
    int: min_i = min(index_set(arr));
    var int: first = arr[min_i];
} in x_sum_f(arr, first-1) == val \\/ x_sum_f(arr, first+1) == val;

function var int: shifted_x_sum_f(array[int] of var int: arr, var int: n) =
    let {
        int: size = card(index_set(arr)),
        int: start_index = min(index_set(arr)),
        var int: x = arr[n]
    } in
	    sum(i in index_set(arr) where i >= n /\\ i < n + x)(arr[i]);

% sum(arr[n:n+x]), n = arr[1], x = arr[n]
predicate shifted_x_sum_p(
    array[int] of var int: arr,
    var int: val
) = (
    if length(arr) == 0 then
        false
    else
        let {
            set of int: idxs = index_set(arr);
            int: min_i = min(idxs);
            int: l = card(idxs);
            var int: first = arr[min_i]
        } in (first in idxs /\\ first + arr[first] - 1 <= l) /\\
            shifted_x_sum_f(arr, first) == val
    endif
);


function var int: skyscrapers_count(array[int] of var int: arr) =
    sum(i in index_set(arr)) (
        bool2int(forall(j in index_set(arr) where j < i)(arr[j] < arr[i]))
    );

predicate skyscrapers_p(array[int] of var int: arr, var int: val) =
		skyscrapers_count(arr) == val;
		
function var int: x_sum_skyscrapers_count(array[int] of var int: arr) =
    let {
        var int: x = skyscrapers_count(arr)  % Compute the number of visible skyscrapers
    } in
    % Sum the first x elements
    x_sum_f(arr, x);

predicate x_sum_skyscrapers_p(array[int] of var int: arr, var int: val) =
		x_sum_skyscrapers_count(arr) == val;

function array[int] of var bool: battlefield_bools(array[int] of var int: arr, var int: x, var int: y) =
	let {
        int: start_index = min(index_set(arr)),
        int: end_index = max(index_set(arr))
    } in
	[(start_index + x - 1 < i /\\ i < end_index - y + 1) \\/ (start_index + x - 1 >= i /\\ i >= end_index - y + 1) | i in index_set(arr)];
	
function var int: battlefield_sum(array[int] of var int: arr, var int: x, var int: y) =
    let {
        array[int] of var bool: bools = battlefield_bools(arr, x, y)
    } in
    sum(i in index_set(arr))(arr[i] * bool2int(bools[i]));
	
predicate battlefield_p(array[int] of var int: arr, var int: val) =
    let {
        var int: x = arr[min(index_set(arr))], 
        var int: y = arr[max(index_set(arr))]  
    } in
    battlefield_sum(arr, x, y) == val;

predicate x_index_p(array[int] of var int: arr, var int: x, var int: val) =
    x in index_set(arr) /\\ arr[x] == val;
	
predicate streak_lengths_p(array[int] of var int: arr, array[int] of var int: streak_lengths) =
    forall(i in index_set(arr)) (
        if i > 1 /\\ arr[i] - arr[i-1] == 1 then 
          streak_lengths[i] = streak_lengths[i-1] + 1
        else 
          streak_lengths[i] = 1
        endif
    );
	
predicate rising_streak_p(array[int] of var int: arr, var int: val) =
    let {
		array[index_set(arr)] of var int: streak_lengths;
    } in streak_lengths_p(arr, streak_lengths) /\\ max(streak_lengths) >= val;
    
predicate outside_consecutive_sum_p(array[int] of var int: arr, var int: val) = 
    let {
        int: n = length(arr);
        int: min_i = min(index_set(arr));
        int: max_i = max(index_set(arr));
        array[1..n] of var bool: has_consecutive = [
            % First element - only check forward
            if i = min_i then
                abs(arr[min_i] - arr[min_i+1]) = 1
            % Last element - only check backward
            elseif i = max_i then
                abs(arr[max_i] - arr[max_i-1]) = 1
            % Middle elements - check both directions
            else
                abs(arr[i] - arr[i-1]) = 1 \\/ abs(arr[i] - arr[i+1]) = 1
            endif
            | i in 1..n
        ];
    } in
    sum(i in 1..n where has_consecutive[i])(arr[i]) = val;
    
predicate chaos_construction_sum_of_first_each_region_p(
    array[int] of var int: cell_vars,
    array[int] of var int: regions,
    var int: val
) = let {
    set of int: idxs = index_set(regions);
    array[int] of var bool: first_bools = [
        not exists(j in idxs where j<i)(
            regions[j] = regions[i]
        )
    | i in idxs];
} in (
    assert(index_sets_agree(cell_vars, regions), "cell_vars and regions must have the same indexes")
    /\\ conditional_sum_f(cell_vars, first_bools, true) = val
    /\\ conditional_strictly_increasing_p(cell_vars, first_bools, true)
);

predicate chaos_construction_x_index_region_p(
    var int: first_cell,
    array[int] of var int: regions
) = let {
    set of int: idxs = index_set(regions);
    var int: first_region = regions[min(idxs)];
} in (
    forall(i in idxs)(
        (i <= first_cell -> regions[i] == first_region)
        /\\ (i == first_cell + 1 -> regions[i] != first_region)
    )
);

`+`predicate little_killer_sum_p(array[int] of var int: arr, var int: val) =
	sum(arr) == val;

predicate little_killer_product_p(array[int] of var int: arr, var int: val) =
	product(arr) == val;
	
predicate x_omit_little_killer_sum_p(array[int] of var int: arr, var int: val) =
	let {
        % default indexing starts at 1!!
		var int: x = arr[min(index_set(arr))]
	} in x >= min(index_set(arr)) /\\ x <= max(index_set(arr)) /\\ sum(i in index_set(arr) where i != x)(arr[i]) == val;

`+`predicate clone_region_p(array[int] of var int: arr1, array[int] of var int: arr2) =
    length(index_set(arr1)) = length(index_set(arr2)) /\\
    forall(i in index_set(arr1))(arr1[i] = arr2[i]);

`+`predicate forbidden_adjacent_sum_p(
    array[int, int] of var int: grid,
    var int: val
) = forall(i in index_set_1of2(grid), j in index_set_2of2(grid))(
        % Right neighbor
        (j < max(index_set_2of2(grid)) -> grid[i,j] + grid[i,j+1] != val) /\\
        % Down neighbor
        (i < max(index_set_1of2(grid)) -> grid[i,j] + grid[i+1,j] != val)
    );

predicate minimum_diagonally_adjacent_difference(array[int, int] of var int: grid, var int: val) =
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
    } in
    % Check all diagonal pairs
    forall(r in rows where r < max(rows), c in cols where c < max(cols))(
        % Bottom-right diagonal
        abs(grid[r,c] - grid[r+1,c+1]) >= val /\\
        % Bottom-left diagonal (if not in first column)
        (c > min(cols) -> abs(grid[r,c] - grid[r+1,c-1]) >= val)
    );
    
predicate forbidden_knight_sum_p(
    array[int, int] of var int: grid,
    var int: val
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in
% Check all possible knight moves from each cell
forall(r in rows, c in cols)(
    (in_bounds_2d(r-1, c-2, grid) -> grid[r,c] + grid[r-1,c-2] != val) /\\
    (in_bounds_2d(r-1, c+2, grid) -> grid[r,c] + grid[r-1,c+2] != val) /\\
    (in_bounds_2d(r+1, c-2, grid) -> grid[r,c] + grid[r+1,c-2] != val) /\\
    (in_bounds_2d(r+1, c+2, grid) -> grid[r,c] + grid[r+1,c+2] != val) /\\
    (in_bounds_2d(r-2, c-1, grid) -> grid[r,c] + grid[r-2,c-1] != val) /\\
    (in_bounds_2d(r-2, c+1, grid) -> grid[r,c] + grid[r-2,c+1] != val) /\\
    (in_bounds_2d(r+2, c-1, grid) -> grid[r,c] + grid[r+2,c-1] != val) /\\
    (in_bounds_2d(r+2, c+1, grid) -> grid[r,c] + grid[r+2,c+1] != val)
);

`+`predicate yin_yang_no_crossings(array[int, int] of var 0..1: grid) =
    % For each possible 2x2 square in the grid
    forall(r in index_set_1of2(grid) where r < max(index_set_1of2(grid)),
           c in index_set_2of2(grid) where c < max(index_set_2of2(grid)))(
		% no crossing 1's and 0's because it implies the grid is not connected
        % [1, 0]    or  [0, 1]
        % [0, 1]        [1, 0]
        (grid[r,c] == grid[r+1, c+1] -> grid[r+1,c] != grid[r, c+1]) /\\
		(grid[r+1,c] == grid[r, c+1] -> grid[r,c] != grid[r+1, c+1])
    );

predicate yin_yang_p(array[int, int] of var 0..1: shading) =
	connected_region(shading, 0)
    /\\ connected_region(shading, 1)
    /\\ shading_2x2_allowed_p(shading, 1..3)
	/\\ yin_yang_no_crossings(shading);
	
predicate yin_yang_antithesis_killer_cage_p(
	array[int] of var int: arr, 
	array[int] of var 0..1: shading, 
	var int: val
) = 
    let {
        % Arrays must have same index set
        constraint assert(
            index_set(arr) = index_set(shading),
            "Arrays must have same index set"
        );
        
        % Calculate sums for each label
        var int: sum_zeros = sum(i in index_set(arr) where shading[i] == 0)(
            arr[i]
        );
        var int: sum_ones = sum(i in index_set(arr) where shading[i] == 1)(
            arr[i]
        );
    } in
    (sum_zeros - sum_ones = val) /\\ alldifferent(arr);
    
predicate yin_yang_minesweeper_p(array[int] of var int: yin_yang_vars, var int: cell_var) =
    let {
        int: start_idx = min(index_set(yin_yang_vars))
    } in
    % cell is unshaded
    yin_yang_vars[start_idx] == 0 /\\
    % sum of all shaded in the neighborhood is equal to the value in the cell
    count_eq(yin_yang_vars, 1, cell_var);
    
predicate yin_yang_breakeven_killer_cage_p(
	array[int] of var int: arr, 
	array[int] of var 0..1: shading, 
	var int: val
) = 
    let {
        % Arrays must have same index set
        constraint assert(
            index_set(arr) = index_set(shading),
            "Arrays must have same index set"
        );
    } in
    alldifferent(arr) /\\
    (sum(arr) = val) /\\ 
    forall(i in index_set(arr))(
        % shaded cells are even
        shading[i] == 1 <-> arr[i] mod 2 == 0
        % unshaded cells are odd
        % shading[i] == 0 <-> arr[i] mod 2 == 1
    );

predicate yin_yang_seen_unshaded_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: yin_yang_var,
	var int: cell_var,
) = let {
    var int: count_cell = if yin_yang_var == 0 then 1 else 0 endif;
} in (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 0) + count_cell == cell_var /\\
    yin_yang_var == 0
);

predicate yin_yang_seen_shaded_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: yin_yang_var,
	var int: cell_var,
) = let {
    var int: count_cell = if yin_yang_var == 1 then 1 else 0 endif;
} in (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 1) + count_cell == cell_var /\\
    yin_yang_var == 1
);

predicate yin_yang_seen_same_shade_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: yin_yang_var,
	var int: cell_var,
) = (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, yin_yang_var) + 1 == cell_var
);

predicate yin_yang_adjacent_same_shade_count_p(
	var int: cell_var,
    var int: yin_yang_var,
    array[int] of var int: adj_yin_yang
) =  count(adj_yin_yang, yin_yang_var) == cell_var;

predicate outside_edge_yin_yang_sum_of_shaded_p(
    array[int] of var int: cells, 
    array[int] of var int: yin_yang_vars, 
    var int: val
) =  
    index_set(cells) = index_set(yin_yang_vars) /\\
    sum(i in index_set(cells) where yin_yang_vars[i] == 1)(cells[i]) == val;

predicate yin_yang_white_kropki_p(var int: cell1, var int: cell2, var int: yin_yang1, var int: yin_yang2) =
    yin_yang1 == yin_yang2 /\\ consecutive_p(cell1, cell2);    

predicate yin_yang_kropki_p(var int: cell1, var int: cell2, var int: yin_yang1, var int: yin_yang2) =
(
    yin_yang1 == yin_yang2 /\\ (
        % unshaded pair -> ratio
        (yin_yang1 == 0 /\\ ratio_p(cell1, cell2, 2)) \\/
        % shaded pair -> consecutive
        (yin_yang1 == 1 /\\ consecutive_p(cell1, cell2))
    )
);

predicate yin_yang_indexing_line_coloring_p(array[int] of var int: arr, array[int] of var 0..1: labels) =
    % Ensure arrays have same size
    assert(
        index_set(arr) = index_set(labels),
        "Arrays must have same index set"
    )
    /\\ index_line_p(arr)
    % Elements that reference themselves should be dark
    /\\ forall(i in index_set(arr))(
        arr[i] == i <-> labels[i] == 0
    );

predicate yin_yang_shaded_whispers_line_p(array[int] of var int: arr, array[int] of var 0..1: labels, var int: x) =
    % Ensure arrays have same size
    index_set(arr) = index_set(labels)
    /\\
    % For adjacent elements labeled with 1, enforce minimum difference
    forall(i in min(index_set(arr))..max(index_set(arr))-1)(
        (labels[i] = 1 /\\ labels[i+1] = 1) ->
        abs(arr[i] - arr[i+1]) >= x
    );
    
predicate yin_yang_unshaded_entropic_line_p(
    array[int] of var int: arr,
    array[int] of var 0..1: labels
) =
    % Ensure arrays have same size
    index_set(arr) = index_set(labels)
    /\\
    % For three consecutive unshaded elements, enforce entropic constraint
    forall(i in min(index_set(arr))..max(index_set(arr))-2)(
        (labels[i] = 0 /\\ labels[i+1] = 0 /\\ labels[i+2] = 0) ->
        entropic_line_p([arr[i], arr[i+1], arr[i+2]], {1,2,3}, {4,5,6}, {7,8,9})
    )
    /\\
    % For two consecutive unshaded elements, they must be from different groups
    forall(i in min(index_set(arr))..max(index_set(arr))-1)(
        (labels[i] = 0 /\\ labels[i+1] = 0) ->
        (
            not (arr[i] in {1,2,3} /\\ arr[i+1] in {1,2,3}) /\\
            not (arr[i] in {4,5,6} /\\ arr[i+1] in {4,5,6}) /\\
            not (arr[i] in {7,8,9} /\\ arr[i+1] in {7,8,9})
        )
    );
    
predicate yin_yang_unshaded_modular_line_p(
    array[int] of var int: arr,
    array[int] of var 0..1: labels,
    int: val
) =
    % Ensure arrays have same size
    index_set(arr) = index_set(labels)
    /\\
    % For three consecutive unshaded elements, enforce modular constraint
    forall(i in min(index_set(arr))..max(index_set(arr))-2)(
        (labels[i] = 0 /\\ labels[i+1] = 0 /\\ labels[i+2] = 0) ->
        modular_line_p([arr[i], arr[i+1], arr[i+2]], val)
    )
    /\\
    % For two consecutive unshaded elements, they must be from different groups
    forall(i in min(index_set(arr))..max(index_set(arr))-1)(
        (labels[i] = 0 /\\ labels[i+1] = 0) -> arr[i] mod val != arr[i+1] mod val
    );

predicate yin_yang_region_sum_line_p(
    array[int] of var int: arr,
    array[int] of var 0..1: labels
) = (
    unknown_regions_region_sum_line_p(arr, labels)
);

function var int: yin_yang_sum_of_opposite_color_f(
    var int: yin_yang_var, 
    array[int] of var int: arr, 
    array[int] of var 0..1: labels
) = let {
    constraint assert(
        index_set(arr) = index_set(labels),
        "Arrays must have same index set"
    )
} in (
    if yin_yang_var == 1 then 
        conditional_sum_f(arr, labels, 0)
    else
        conditional_sum_f(arr, labels, 1)
    endif
);

function var int: yin_yang_count_unique_fillominoes_same_shading_f(
    var 0..1: yin_yang_var,
    array[int] of var 0..1: shading,
    array[int] of var int: regions % fillomino regions
) = let {
    set of int: idxs = index_set(shading);
    array[idxs] of var bool: count_bools = [
        % same shading
        shading[i] == yin_yang_var /\\
        % must be the first of that region to be seen to count
        not exists(j in idxs where j<i) (
            regions[j] == regions[i]
        )
    | i in idxs];
} in sum(count_bools);
 
predicate yin_yang_neighbour_greater_than_one_within_region_shaded(
    var int: cell_var,
    var 0..1: shading,
    array[int] of var int: neighbours
) = count(neighbours, cell_var-1) >= 1 <-> shading = 1;
 
predicate yin_yang_shaded_cells_are_german_whispers_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: shading
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);    
} in (
    assert(index_sets_agree(grid, shading), "grid and shading must have the same indexes")
    % adjacent shaded cells must be german whispers (horiz adjacent)
    /\\ forall (r in rows, c in cols where c > 0) (
        (shading[r,c] = 1 /\\ shading[r, c - 1] = 1) -> abs(grid[r,c] - grid[r, c-1]) >= 5
    ) /\\
    % adjacent shaded cells must be german whispers (vertical adjacent)
    forall (r in rows, c in cols where r > 0) (
        (shading[r,c] = 1 /\\ shading[r-1, c] = 1) -> abs(grid[r,c] - grid[r-1, c]) >= 5
    )
);

predicate yin_yang_identical_digits_diagonally_belong_to_same_region_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: shading
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, shading), "grid and shading must have the same indexes") /\\
    forall(r1 in rows, c1 in cols, r2 in rows, c2 in cols where 
        r1 != r2 /\\ c1 != c2 /\\              % Different positions
        abs(r1 - r2) = abs(c1 - c2) /\\       % On same diagonal (bishop's move)
        grid[r1, c1] = grid[r2, c2]          % Same digit
    ) (
        shading[r1, c1] = shading[r2, c2]    % Must have same shading
    )
);

`+`predicate two_contiguous_regions_p(array[int, int] of var 0..1: grid) =
	connected_region(grid, 0) /\\
    connected_region(grid, 1);

predicate two_contiguous_regions_row_col_opposite_set_count_p(
    array[int] of var int: row_vars,
    array[int] of var int: col_vars, 
    var int: cell_var,
    var int: region_var,
) =
    count_different(row_vars, region_var) + count_different(col_vars, region_var) == cell_var;

`+`function array[int] of var int: regions_idxs_f(
    array[int, int] of var int: regions,
    int: n_regions
) =
    [first_idx(array1d(regions), reg_i) | reg_i in 0..(n_regions-1)];

predicate unknown_regions_ordering_p(array[int, int] of var int: regions, int: n_regions) = 
    let {
        array[int] of var int: regions_idxs = regions_idxs_f(regions, n_regions);
    } in (
        strictly_increasing(regions_idxs)
    );
    
predicate chaos_construction_p(
    array[int, int] of var int: regions,
    array[int] of int: reg_idxs,
    int: region_size,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    forall (reg_i in reg_idxs) (
        connected_region(regions, reg_i)
        % each region has exactly n_regions cells
        /\\ count(array1d(regions), reg_i) = region_size
    )
    % order regions lexicographically
    /\\ value_precede_chain(reg_idxs, array1d(regions))
);
    
predicate no_repeats_in_unknown_regions_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: regions,
    set of int: allowed_vals,
    array[int] of int: reg_idxs,
) =
    forall(reg_i in reg_idxs) (
        % for each region, the counts of each digit is at most 1
        forall(val in allowed_vals) (
            conditional_count_f(array1d(grid), array1d(regions), val, reg_i) <= 1
        )
    );

predicate numbered_chaos_construction_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
    array[int] of int: reg_idxs,
    int: region_size,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    
} in (
    assert(index_sets_agree(grid, regions), "grid and regions must have the same indexes")
    /\\ forall (reg_i in reg_idxs) (
        connected_region(regions, reg_i)
        % each region has exactly n_regions cells
        /\\ count(array1d(regions), reg_i) = region_size
    )
    % numbered regions
    /\\ forall(r in rows, c in cols) (
        not exists(r2 in rows, c2 in cols where is_before(r,c,r2,c2)) (
            regions[r2,c2] == regions[r,c]
        ) -> regions[r,c] = grid[r,c]
    )
);

predicate next_numbered_region_distance_arrow_p(
    var int: cell_var,
    var int: cell_region,
    array[int] of var int: region_cells_in_dir
) = let {
    int: n = length(region_cells_in_dir);
} in (
    cell_var <= n
    /\\ region_cells_in_dir[cell_var] == cell_region + 1
);

predicate unknown_regions_seen_region_border_count_p(
    array[int] of var int: row_region_vars, 
    array[int] of var int: col_region_vars, 
    var int: cell
) = count_transitions_f(row_region_vars) + count_transitions_f(col_region_vars) == cell;
 

predicate chaos_construction_arrow_knots_in_arrow_p(
    array[int] of var bool: in_arrow
) = let {
    set of int: idxs = index_set(in_arrow);
} in forall(i in idxs) (
    exists(j in idxs where j<i)(
        in_arrow[j] = false
    ) -> in_arrow[i] = false
);

predicate chaos_construction_arrow_knots_p(
    array[int] of var int: arr,
    array[int] of var int: regions,
    array[int] of var bool: in_arrow,
    var int: cell_var,
    var int: target_region
) = (
    if length(arr) = 0 then
        true
    else
        let {
            set of int: idxs = index_set(arr);
            int: min_i = min(idxs);
            var int: arrow_sum = conditional_sum_f(arr, in_arrow, true)
        } in (
            chaos_construction_arrow_knots_in_arrow_p(in_arrow) /\\
            if sum(in_arrow) > 0 then
                arrow_sum == cell_var /\\
                % cells in arrow are part of the same region as the circle
                forall(i in idxs) (
                    in_arrow[i] -> regions[i] == target_region
                ) /\\
                % If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.
                forall(i in idxs where i > min_i) (
                    not in_arrow[i] /\\ in_arrow[i-1] -> regions[i] != target_region
                )
            else
                true
            endif
        )
    endif
);
    
predicate chaos_costruction_seen_same_region_count_p(
	array[int] of var int: arr1,
	array[int] of var int: arr2,
	array[int] of var int: arr3,
	array[int] of var int: arr4,
    var int: cell_region,
    var int: val,
) =
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, cell_region) + 1 == val;

predicate chaos_construction_arrow_p(
	array[int] of var int: circle_regions,
	array[int] of var int: arrow_regions
) = let {
    set of int: idxs1 = index_set(circle_regions);
    set of int: idxs2 = index_set(arrow_regions);
} in (
    all_equal(arrow_regions) /\\ 
    all_equal(circle_regions) /\\ 
    circle_regions[min(idxs1)] != arrow_regions[min(idxs2)]
);

`+`predicate nurimisaki_p(array[int, int] of var int: grid) =
	connected_region(grid, 0)
    /\\ shading_2x2_allowed_p(grid, 1..3);

predicate nurimisaki_unshaded_endpoint_p(array[int] of var int: adj_cells, var int: nurimisaki_cell) = 
    count(adj_cells, 0) == 1 /\\ nurimisaki_cell == 0;
    
predicate nurimisaki_count_uninterrupted_unshaded_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: nurimisaki_var,
	var int: cell_var,
) = let {
    var int: count_cell = if nurimisaki_var == 0 then 1 else 0 endif
} in (
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 0) + count_cell == cell_var
);

`+`predicate odd_even_grid_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: labels
) =
    assert(index_set_1of2(grid) = index_set_1of2(labels) /\\
       index_set_2of2(grid) = index_set_2of2(labels),
       "Grid and labels must have same dimensions") /\\
    forall(i in index_set_1of2(grid)) (
        forall(j in index_set_2of2(grid)) (
            if grid[i, j] mod 2 == 0 then labels[i,j] == 0 else labels[i,j] == 1 endif
        )
    );

`+`function array[int,int] of var int: doublers_value_grid_f(
    array[int,int] of var int: grid,
    array[int,int] of var bool: labels
) =  let {
    constraint assert(index_set_1of2(grid) = index_set_1of2(labels) /\\
       index_set_2of2(grid) = index_set_2of2(labels),
       "Grid and labels must have same dimensions")
} in
    array2d(index_set_1of2(grid), index_set_2of2(grid),
        [if labels[i,j] then 2*grid[i,j] else grid[i,j] endif
         | i in index_set_1of2(grid), j in index_set_2of2(grid)]);

function array[int,int] of var int: negators_value_grid_f(
    array[int,int] of var int: grid,
    array[int,int] of var bool: labels
) =  let {
    constraint assert(index_set_1of2(grid) = index_set_1of2(labels) /\\
       index_set_2of2(grid) = index_set_2of2(labels),
       "Grid and labels must have same dimensions")
} in
    array2d(index_set_1of2(grid), index_set_2of2(grid),
        [if labels[i,j] then -1*grid[i,j] else grid[i,j] endif
         | i in index_set_1of2(grid), j in index_set_2of2(grid)]);

predicate doublers_killer_cage_p(
    array[int] of var int: cells_vars,
    array[int] of var int: value_vars,
    var int: val
) =
    alldifferent(cells_vars) /\\ sum(value_vars) == val;
    
predicate negators_killer_cage_p(
    array[int] of var int: cells_vars,
    array[int] of var int: value_vars,
    var int: val
) =
    alldifferent(cells_vars) /\\ sum(value_vars) == val;
    
function tuple(var int, var int): first_two_true_indexes(array[int] of var bool: arr) =
    let {
        % Find the first index where the element is true
        var int: first_index = min([i | i in index_set(arr) where arr[i] == true]);
        % Find the second index where the element is true
        var int: second_index = min([i | i in index_set(arr) where arr[i] == true /\\ i > first_index]);
    } in
    (first_index, second_index);

predicate indexer_cells_p(
    array[int, int] of var int: board,
    array[int, int] of var bool: indexer_grid,
    array[int, int] of var int: values_grid,
) = let {
    set of int: rows = index_set_1of2(indexer_grid);
    set of int: cols = index_set_2of2(indexer_grid);
} in (
    assert(index_sets_agree(board, indexer_grid), "board and indexer_grid must have the same indexes") /\\
    assert(index_sets_agree(board, values_grid), "board and values_grid must have the same indexes") /\\
    % if not a indexer cell, the cell value is equal to its digit
    forall(r in rows, c in cols)(
        not indexer_grid[r,c] -> values_grid[r,c] = board[r,c]
    ) /\\
    % there are two indexers per row, one indexes the row and the other the column
    forall(r in rows)(
        let {
            array[int] of var bool: row_bools = indexer_grid[r,..];
            % extract the indexes of the two cells
            tuple(var int, var int): t1 = first_two_true_indexes(row_bools);
            var int: c1 = t1.1;
            var int: c2 = t1.2;
            var int: val1 = board[r, c1];
            var int: val2 = board[r, c2];
            % this assumes board is 0-indexed and board values start at 1
            var int: idx1 = val1 - 1;
            var int: idx2 = val2 - 1;
        } in (
            (idx1 in cols /\\ indexer_grid[r, idx1] /\\ idx1 == c2 /\\ values_grid[r, c1] = board[r, idx1]
             /\\ idx2 in rows /\\ indexer_grid[idx2, c2] /\\ values_grid[r, c2] = board[idx2, c2])
            \\/
            (idx2 in cols /\\ indexer_grid[r, idx2] /\\ idx2 == c1 /\\ values_grid[r, c2] = board[r, idx2]
             /\\ idx1 in rows /\\ indexer_grid[idx1, c1] /\\ values_grid[r, c1] = board[idx1, c1])
        )
    )
    /\\
    % there are two indexers per row, one indexes the row and the other the column
    forall(c in cols)(
        let {
            array[int] of var bool: col_bools = indexer_grid[..,c];
            % extract the indexes of the two cells
            tuple(var int, var int): t1 = first_two_true_indexes(col_bools);
            var int: r1 = t1.1;
            var int: r2 = t1.2;
            var int: val1 = board[r1, c];
            var int: val2 = board[r2, c];
            % this assumes board is 0-indexed and board values start at 1
            var int: idx1 = val1 - 1;
            var int: idx2 = val2 - 1;
        } in (
            (idx1 in rows /\\ indexer_grid[idx1, c] /\\ idx1 == r2 /\\ values_grid[r1, c] = board[idx1, c]
             /\\ idx2 in cols /\\ indexer_grid[r2, idx2] /\\ values_grid[r2, c] = board[r2, idx2])
            \\/
            (idx2 in rows /\\ indexer_grid[idx2, c] /\\ idx2 == r1 /\\ values_grid[r2, c] = board[idx2, c]
             /\\ idx1 in cols /\\ indexer_grid[r1, idx1] /\\ values_grid[r1, c] = board[r1, idx1])
        )
    )
);

`+`% Helper function to count orthogonally adjacent cells with same value
function var int: count_same_adjacent(
    array[int, int] of var int: grid, 
    int: r, 
    int: c
) = let {
    set of int: rows = index_set_1of2(grid),
    set of int: cols = index_set_2of2(grid),
} in sum([
        if r-1 in rows then grid[r-1,c] = grid[r,c] else false endif,
        if r+1 in rows then grid[r+1,c] = grid[r,c] else false endif,
        if c-1 in cols then grid[r,c-1] = grid[r,c] else false endif,
        if c+1 in cols then grid[r,c+1] = grid[r,c] else false endif
    ]);

% Helper function to count vertically adjacent cells with same value
function var int: count_vertical_adjacent_same(
    array[int, int] of var int: grid, 
    int: r, 
    int: c
) = let {
    set of int: rows = index_set_1of2(grid),
} in sum([
        if r-1 in rows then grid[r-1,c] = grid[r,c] else false endif,
        if r+1 in rows then grid[r+1,c] = grid[r,c] else false endif
    ]);

% Helper function to count horizontally adjacent cells with same value
function var int: count_horizontal_adjacent_same(
    array[int, int] of var int: grid, 
    int: r, 
    int: c
) = let {
    set of int: cols = index_set_2of2(grid),
} in sum([
        if c-1 in cols then grid[r,c-1] = grid[r,c] else false endif,
        if c+1 in cols then grid[r,c+1] = grid[r,c] else false endif
    ]);

% Helper function to check if cell has exactly one adjacent in both directions
function var bool: is_sashigane_bend(
    array[int, int] of var int: grid, 
    int: r, 
    int: c
) =
    count_vertical_adjacent_same(grid, r,c) = 1 /\\ count_horizontal_adjacent_same(grid, r, c) = 1;

% Calculate flattened index for a position
function int: flat_index(int: r, int: c, set of int: rows, set of int: cols) =
    (r - min(rows)) * card(cols) + (c - min(cols)) + 1;

predicate sashigane_bend_bools_p(
    array[int, int] of var int: regions, 
    array[int, int] of var bool: bends
) =
    assert(index_set_1of2(regions) = index_set_1of2(bends) /\\
       index_set_2of2(regions) = index_set_2of2(bends),
       "regions and bends must have same dimensions") /\\
    forall(i in index_set_1of2(regions)) (
        forall(j in index_set_2of2(regions)) (
            is_sashigane_bend(regions, i, j) <-> bends[i, j] == true
        )
    );  

predicate sashigane_adjacency_p(array[int, int] of var int: regions) = 
    let {
        set of int: ROWS = index_set_1of2(regions);
        set of int: COLS = index_set_2of2(regions);
    } in
    % Constraint 1: Each element has 1-2 orthogonally adjacent same values
    forall(r in ROWS, c in COLS)(
        let {
            var int: adj_count = count_same_adjacent(regions, r, c)
        } in
        adj_count >= 1 /\\ adj_count <= 2
    ) /\\
    forall(r in ROWS, c in COLS)(
        not is_sashigane_bend(regions, r,c) -> (count_horizontal_adjacent_same(regions, r, c) == 0 \\/ count_vertical_adjacent_same(regions, r, c) == 0)
    ) /\\
    forall(r in ROWS, c in COLS)(
        is_sashigane_bend(regions, r,c) -> regions[r,c] = flat_index(r, c, ROWS, COLS)
    );

predicate sashigane_links_to_bends_aux_p(
    array[int] of var int: sashigane_vars,
    array[int] of var bool: sashigane_bend_vars,
) = let {
    constraint assert(index_set(sashigane_vars) = index_set(sashigane_bend_vars),
        "Arrays must have same index set"),
    int: min_i = min(index_set(sashigane_vars)),
    array[int] of var bool: bools = [ 
        forall(j in index_set(sashigane_vars) where j<=i)(
            sashigane_vars[j] == sashigane_vars[min_i]
        ) /\\ sashigane_bend_vars[i] == true
        | i in index_set(sashigane_vars)];
} in exists(i in index_set(bools))(bools[i]);


predicate sashigane_links_to_bends(
    array[int, int] of var int: regions,
    array[int, int] of var bool: bends
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);  
} in (
    assert(index_sets_agree(regions, bends), "regions and bends must have same dimensions") /\\
    forall(i in rows, j in cols) (
        not bends[i,j] -> (
            let {
                % Up direction arrays (decreasing range)
                array[int] of int: idxs_up = [i-k | k in 0..(i-min(rows))];
                array[int] of var int: up_regions = [regions[k,j] | k in idxs_up];
                array[int] of var bool: up_bends = [bends[k,j] | k in idxs_up];
                
                % Down direction arrays
                array[int] of int: idxs_down = [k | k in i..max(rows)];
                array[int] of var int: down_regions = [regions[k,j] | k in idxs_down];
                array[int] of var bool: down_bends = [bends[k,j] | k in idxs_down];
                
                % Left direction arrays (decreasing range)
                array[int] of int: idxs_left = [j-k | k in 0..(j-min(cols))];
                array[int] of var int: left_regions = [regions[i,k] | k in idxs_left];
                array[int] of var bool: left_bends = [bends[i,k] | k in idxs_left];
                
                % Right direction arrays
                array[int] of int: idxs_right = [k | k in j..max(cols)];
                array[int] of var int: right_regions = [regions[i,k] | k in idxs_right];
                array[int] of var bool: right_bends = [bends[i,k] | k in idxs_right];
            } in
            % Exactly one direction should satisfy the auxiliary predicate
            bool2int(sashigane_links_to_bends_aux_p(up_regions, up_bends)) +
            bool2int(sashigane_links_to_bends_aux_p(down_regions, down_bends)) +
            bool2int(sashigane_links_to_bends_aux_p(left_regions, left_bends)) +
            bool2int(sashigane_links_to_bends_aux_p(right_regions, right_bends)) = 1
        )
    )
);


predicate sashigane_no_repeats_in_each_region_p(
    array[int, int] of var int: cells_grid, 
    array[int, int] of var int: regions,
    set of int: allowed_vals
) = let {
    set of int: ROWS = index_set_1of2(regions);
    set of int: COLS = index_set_2of2(regions);
} in forall(r in ROWS, c in COLS)(
        is_sashigane_bend(regions, r,c) -> forall(val in allowed_vals) (
            conditional_count_f(array1d(cells_grid), array1d(regions), val, regions[r,c]) <= 1
        )
    );

predicate sashigane_bend_region_count_p(
    var int: cell_var,
    var int: region_var,
    array[int, int] of var int: regions
) = count(array1d(regions), region_var) == cell_var;


predicate sashigane_arrow_points_to_bend_p(
    var int: cell_var,
    var int: sashigane_var,
    array[int] of var int: sashigane_vars,
    array[int] of var bool: bend_vars,
) = 
    cell_var >= min(index_set(sashigane_vars)) /\\ 
    cell_var <= max(index_set(sashigane_vars)) /\\
    % cells that belong to the same sashigane region
    forall(i in index_set(sashigane_vars) where i<=cell_var) (
        sashigane_vars[i] = sashigane_var
    ) /\\
    % cells that do not belong to the same sashigane region
    forall(i in index_set(sashigane_vars) where i>cell_var) (
        sashigane_vars[i] != sashigane_var
    ) /\\
    % cells closer than cell_var are not bends
    forall(i in index_set(bend_vars) where i<cell_var) (
        bend_vars[i] = false
    ) /\\
    % cell at distance of cell_var is a bend
    element(cell_var, bend_vars, true);

`+`predicate cell_center_loop_no_diagonal_touching_p(array[int, int] of var 0..1: grid) = let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
    } in (
        % no crossing 1's and 0's because it implies the the loop is touching diagonally
        % [1, 0]    or  [0, 1]
        % [0, 1]        [1, 0]
        forall(r in rows where r < max(rows), c in cols where c < max(cols))(
            (grid[r,c] == 1 /\\ grid[r+1, c+1] == 1 -> grid[r+1,c] == 1 \\/ grid[r, c+1] ==1)
        ) /\\
        forall(r in rows where r < max(rows), c in cols where c < max(cols))(
            (grid[r,c+1] == 1 /\\ grid[r+1, c] == 1 -> grid[r,c] == 1 \\/ grid[r+1, c+1] ==1)
        )
    );

% draw a 1-cell wide loop of orthogonally connected cells which does not branch or touch itself, even diagonally
predicate cell_center_loop_p(array[int, int] of var 0..1: grid, bool: diag_touch) =
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
    } in (
        connected_region(grid, 1) /\\
        % no diagonal touching
        (if diag_touch then
            true
        else
            cell_center_loop_no_diagonal_touching_p(grid)
        endif) /\\
        % If cell is on the loop then then there are exactly two edges attached to it
        % Count orthogonally adjacent 1s (must be exactly 2)
        forall(i in rows, j in cols)(
            if grid[i,j] = 1 then
                sum([
                    if i-1 in rows then grid[i-1,j] else 0 endif +  % Up
                    if i+1 in rows then grid[i+1,j] else 0 endif +  % Down
                    if j-1 in cols then grid[i,j-1] else 0 endif +  % Left
                    if j+1 in cols then grid[i,j+1] else 0 endif    % Right
                    ]) = 2
            else
                true
            endif
        )
    );

predicate cell_center_loop_regions_p(
    array[int, int] of var 0..1: shading, % loop / non-loop cells
    array[int, int] of var int: regions
) = let {
        set of int: rows = index_set_1of2(shading);
        set of int: cols = index_set_2of2(shading);
        int: n_rows = length(rows);
        int: n_cols = length(cols);
        int: g_size = n_rows * n_cols;
    } in (
    % shaded cells (1 = loop) correspond to region 0
    forall(r in rows, c in cols) (
        shading[r,c] = 1 <-> regions[r, c] = 0
    )
    
    /\\ forall(r in rows, c in cols) (
        shading[r,c] = 0 <-> regions[r, c] != 0
    )
    
    % adjacent unshaded cells must belong to the same region (horiz adjacent)
    /\\ forall (r in rows, c in cols where c > 0) (
        let { 
            var int: id1 = regions[r, c - 1], 
            var int: id2 = regions[r, c] 
        } in (shading[r,c] = 0 /\\ shading[r, c - 1] = 0) -> id1 = id2
    )
    
    % adjacent unshaded cells must belong to the same region (vertical adjacent)
    /\\ forall (r in rows, c in cols where r > 0) (
        let { var int: id1 = regions[r - 1, c], var int: id2 = regions[r, c] } in
        (shading[r,c] = 0 /\\ shading[r - 1, c] = 0) -> id1 = id2
    )

    /\\ cave_floodfill_p(regions)
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
    ) /\\
    % for all non loop cells
    forall(r in rows, c in cols where regions[r,c] != 0) (
        let {
            var int: id = regions[r, c];
            var int: size = sizes[id];
            int: min_v = min(allowed);
        } in (
            (id == 0) \\/
            % each non loop region must have size of at most n,
            % and contain the digits between min_v and size
            (size <= n /\\ grid[r, c] >= min_v /\\ grid[r, c] <= size /\\
                % values in the same region must be different
                forall(r2 in rows, c2 in cols where regions[r2,c2] = id /\\ (r2 != r \\/ c2 != c))(
                    grid[r2,c2] != grid[r,c]
                )
            )
        )
    )
);

predicate adjacent_loop_cells_are_multiples_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: labels
) =
    assert(index_set_1of2(grid) = index_set_1of2(labels) /\\
       index_set_2of2(grid) = index_set_2of2(labels),
       "grid and labels must have same dimensions") /\\
    forall(i in index_set_1of2(grid), j in index_set_2of2(grid))(
        % Right neighbor
        (j < max(index_set_2of2(grid)) ->
            (labels[i,j] = 1 /\\ labels[i,j+1] = 1 ->
                multiples_p(grid[i,j], grid[i,j+1]))
        ) /\\
        % Down neighbor
        (i < max(index_set_1of2(grid)) ->
            (labels[i,j] = 1 /\\ labels[i+1,j] = 1 ->
                multiples_p(grid[i,j], grid[i+1,j]))
        )
    );

predicate adjacent_loop_cells_are_german_whispers_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: labels
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(rows = index_set_1of2(labels) /\\ cols = index_set_2of2(labels),
       "grid and labels must have same dimensions") /\\
    region_whispers_p(grid, labels, 1, 5)
);
    
function var int: count_loop_vars_f(array[int] of var 0..1: arr) =
    sum(i in index_set(arr))(bool2int(arr[i] != 0));
    
predicate modular_loop_aux_p(
    array[int] of var int: arr, 
    array[int] of var 0..1: labels
) = let {
    set of int: idxs = index_set(arr)
} in (
    if all_equal(labels) /\\ labels[min(idxs)] = 1 then
        modular_line_p(arr, 3)
    else
        true
    endif
);

predicate modular_loop_p(
    array[int,int] of var int: grid, 
    array[int,int] of var 0..1: loop
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(r in rows where r < max(rows), c in cols where c < max(cols)) (
        modular_loop_aux_p([grid[r, c], grid[r, c+1], grid[r+1, c+1]], [loop[r, c], loop[r, c+1], loop[r+1, c+1]]) /\\
        modular_loop_aux_p([grid[r+1, c], grid[r, c], grid[r, c+1]], [loop[r+1, c], loop[r, c], loop[r, c+1]]) /\\
        modular_loop_aux_p([grid[r, c], grid[r+1, c], grid[r+1, c+1]], [loop[r, c], loop[r+1, c], loop[r+1, c+1]]) /\\
        modular_loop_aux_p([grid[r, c+1], grid[r+1, c+1], grid[r+1, c]], [loop[r, c+1], loop[r+1, c+1], loop[r+1, c]])
    ) /\\
    forall(r in rows where r < max(rows) - 1, c in cols where c < max(cols) - 1) (
        modular_loop_aux_p([grid[r, c+1], grid[r+1, c+1], grid[r+2, c+1]], [loop[r, c+1], loop[r+1, c+1], loop[r+2, c+1]]) /\\
        modular_loop_aux_p([grid[r+1, c], grid[r+1, c+1], grid[r+1, c+2]], [loop[r+1, c], loop[r+1, c+1], loop[r+1, c+2]])
    )
);

predicate thermo_sightline_loop_arrow_p(
    array[int] of var int: arr, 
    array[int] of var 0..1: labels, 
    var int: cell_var
) = let {
        % Get array bounds
        set of int: idxs = index_set(arr);
        int: min_i = min(idxs);
        array[index_set(arr)] of var bool: counts;
        constraint count_uninterrupted_counts_p(labels, counts, 1);
    } in (
        % cell value is the number of seen loop cells
        cell_var == sum(counts) /\\
        % digits increase along loop cells seen by arrow, starting at by the cell_var
        (counts[min_i] /\\ cell_var < arr[min_i]) /\\
        forall(i in idxs where i < max(idxs))(
            counts[i] /\\ counts[i+1] -> arr[i] < arr[i+1]
        )
);

predicate loopwhiches_p(
    array[int] of var int: arr, 
    array[int] of var 0..1: labels, 
    var int: val
) = let {
    set of int: idxs = index_set(arr);
    array[idxs] of var bool: sandwiched = [
        exists(j in idxs where j<i)(
            labels[j] == 1
        ) /\\
        exists(k in idxs where k>i)(
            labels[k] == 1
        )
    | i in idxs]
} in (
    conditional_sum_f(arr, sandwiched, true) == val
);

`+`function array[int, int] of var int: same_before_f(array[int, int] of var int: area) =
    let {
        set of int: rows = index_set_1of2(area);
        set of int: cols = index_set_2of2(area);
    } in (
        array2d(rows, cols, 
            [ sum([ bool2int(area[r2, c2] = area[r1, c1]) 
                | r2 in rows, c2 in cols where is_before(r1, c1, r2, c2)
            ]) | r1 in rows, c1 in cols ])
    );

predicate same_before_p(
    array[int, int] of var int: area,
    array[int, int] of var int: same_before
) =
    let {
        set of int: rows = index_set_1of2(area);
        set of int: cols = index_set_2of2(area);
    } in forall (r1 in rows, c1 in cols) (
        same_before[r1, c1] = sum([ bool2int(area[r2, c2] = area[r1, c1]) 
            | r2 in rows, c2 in cols where is_before(r1, c1, r2, c2)])
    );

predicate floodfill_p(
    array[int, int] of var int: regions,
    array[int, int] of var int: when,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions); 
} in (
    % Improved connectivity constraint with earlier propagation
    forall(r in rows, c in cols where when[r, c] > 1) (
        exists(t in orth_adjacent_idxs(r, c) where in_bounds_2d(t.1, t.2, regions)) (
            regions[r, c] = regions[t.1, t.2] /\\ when[r, c] = when[t.1, t.2] + 1
        )
    )
    
    % Restrict floodfill growth to ensure unique solution
    /\\ forall(r in rows, c in cols where when[r, c] > 1) (
        when[r, c] = 1 + min([when[t.1, t.2] | 
            t in orth_adjacent_idxs(r, c) where in_bounds_2d(t.1, t.2, regions) /\\ regions[r, c] = regions[t.1, t.2]])
    ) 
);

predicate fillomino_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    set of int: time = 1..g_size;
    array[rows, cols] of var time: when;
    set of int: ids = 0..g_size;
    array[ids] of var 0..g_size: size;
} in (
    % 1. Each cell's region size matches its value
    forall (r in rows, c in cols) (
        grid[r, c] = size[regions[r, c]]
    )

    % 2. Symmetry breaking: canonical numbering of regions (reduces search space, tested)
    /\\ forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1) /\\
        regions[r, c] >= 0
    )

    % 3. regions of size 1
    /\\ forall(r in rows, c in cols)(
        grid[r,c] == 1 -> regions[r, c] = (r * n_cols + c + 1) /\\ when[r,c] == 1
    )
    /\\ forall(r in rows, c in cols)(
        grid[r,c] == 1 -> forall(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            regions[r,c] != regions[t.1, t.2] /\\ grid[t.1,t.2] != 1
        )
    )

    % 4. small optimization to reduce search space
    /\\ forall(r in rows, c in cols, r2 in rows, c2 in cols where is_after(r,c,r2,c2)) (
        abs(r2-r) + abs(c2-c) >= grid[r,c] -> regions[r, c] != (r2) * n_cols + c2 + 1
    )

    % 5. Fix the roots (redundant but speeds up search)
    /\\ forall(r in rows, c in cols) (
        not exists(r2 in rows, c2 in cols where is_before(r,c,r2,c2)) (
            regions[r2,c2] == regions[r,c]
        ) -> regions[r,c] = (r * n_cols + c + 1)
    )

    % 6. lex-order roots
    /\\ forall(r in rows, c in cols where regions[r, c] == (r * n_cols + c + 1)) (
        forall(r2 in rows, c2 in cols) (
            (regions[r2, c2] = regions[r, c]) -> (r2 > r \\/ (r2 = r /\\ c2 >= c))
        )
    )

    % 7. Adjacent cells in the same region have the same value and in different regions have different values
    /\\ forall(r1 in rows, c1 in cols) (
        forall(t in orth_adjacent_idxs(r1,c1) where in_bounds_2d(t.1, t.2, regions))(
            (regions[r1, c1] != regions[t.1, t.2]) = (grid[r1, c1] != grid[t.1, t.2])
        )
    )

    % 8. Each region's size equals the count of its cells
    /\\ forall(id in ids where exists(r in rows, c in cols)(regions[r, c] = id)) (
        size[id] = sum(r in rows, c in cols)(bool2int(regions[r, c] = id))
    )

    % all cells with a value equal to 2 must have exactly 1 neighbour equal to it
    /\\ forall(r in rows, c in cols where grid[r,c] == 2)(
        sum(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            grid[r,c] == grid[t.1,t.2]
        ) == 1
    )

    % all cells with a value greater than 2 must have at least a neighbour equal to it
    /\\ forall(r in rows, c in cols where grid[r,c] > 2)(
        exists(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            grid[r,c] == grid[t.1,t.2]
        )
    )
    
    % floodfill - necessary to make sure each region is connected
    % root fix
    /\\ forall(r in rows, c in cols)(
        when[r,c] == 1 <-> regions[r, c] = (r * n_cols + c + 1)
    )

    % Upper bound on when values
    % Optimisation: the "when" label is actually the 'distance' of a cell in a
    % region from the region "root".  This distance cannot be larger than the size
    % of the region.
    /\\ forall(r in rows, c in cols) (
        when[r, c] >= 1 /\\ when[r, c] <= grid[r, c] /\\ when[r, c] <= size[regions[r, c]]
    )

    /\\ floodfill_p(regions, when)
);

predicate yin_yang_fillomino_parity_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: shading % yin yang shading
) = (
    forall(r in index_set_1of2(grid), c in index_set_2of2(grid))(
        grid[r,c] mod 2 = 0 <-> shading[r,c] = 0
    ) /\\
    forall(r in index_set_1of2(grid), c in index_set_2of2(grid))(
        grid[r,c] mod 2 = 1 <-> shading[r,c] = 1
    )
);

`+`% test if element is on the edge of the grid
test on_edge_2d(int: r, int: c, array[int, int] of var int: grid) = 
    let {
        int: min_r = min(index_set_1of2(grid));
        int: max_r = max(index_set_1of2(grid));
        int: min_c = min(index_set_2of2(grid));
        int: max_c = max(index_set_2of2(grid));
    } in r = min_r \\/ r = max_r \\/ c = min_c \\/ c = max_c;

predicate cave_floodfill_p(
    array[int, int] of var int: regions,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    array [rows, cols] of var 0..g_size: same_before;
    array[rows, cols] of var 0..g_size: when;
} in (
    same_before_p(regions, same_before)
    /\\ forall (r in rows, c in cols) (
        if same_before[r,c] = 0 /\\ regions[r, c] != 0 then
            % 0-indexing arrays!!!!
            when[r,c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1
        else
            true
        endif
    )

    % region 0 is ignored because its handled elsewhere
    /\\ forall (r in rows, c in cols) (
        regions[r, c] = 0 -> when[r,c] = 0
    )

    /\\ forall (r in rows, c in cols) (
        regions[r, c] > 0 -> when[r,c] >= 1
    )
    
    /\\ floodfill_p(regions, when)
    
    /\\ forall(r in rows, c in cols where when[r, c] == 1)(
        regions[r, c] = (r) * n_cols + c + 1
    )
    
    % Symmetry breaking: canonical numbering of regions
    /\\ forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
    )
);

predicate cave_nurikabe_helper_p(
    array[int, int] of var 0..1: shading, 
    array[int, int] of var int: regions
) =  let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
    % water cells / cave cells (= 0), must be all orthogonally connected
    connected_region(shading, 0) /\\
    sum(r in rows, c in cols)(bool2int(shading[r,c] = 0)) > 1 /\\
    % label shading = 0 region with 0
    forall(r in rows, c in cols) (
        shading[r,c] = 0 <-> regions[r, c] = 0
    ) /\\
    forall(r in rows, c in cols) (
        shading[r,c] = 1 <-> regions[r, c] != 0
    ) /\\
    
    % adjacent shading = 1 cells must belong to the same region (horiz adjacent)
    forall (r in rows, c in cols where c > min(cols)) (
        let { 
            var int: id1 = regions[r, c - 1], 
            var int: id2 = regions[r, c] 
        } in (shading[r,c] = 1 /\\ shading[r, c - 1] = 1) -> id1 = id2
    ) /\\
    
    % adjacent shading = 1 cells must belong to the same region (vertical adjacent)
    forall (r in rows, c in cols where r > min(rows)) (
        let { var int: id1 = regions[r - 1, c], var int: id2 = regions[r, c] } in
        (shading[r,c] = 1 /\\ shading[r - 1, c] = 1) -> id1 = id2
    ) /\\
    % we need to remove ambiguity from the region numbering 
    % use the numbering each region by the id of the first element of that region
    cave_floodfill_p(regions)
);

predicate cave_p(
    array[int, int] of var 0..1: shading, 
    array[int, int] of var int: regions
) =  let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
    cave_nurikabe_helper_p(shading, regions)
    % for each region not equal to 0 (cave wall), there must be at least one cell that is on the edge of the grid
    /\\ forall(r in rows, c in cols where regions[r,c] != 0)(
        exists(r2 in rows, c2 in cols)(regions[r2,c2] = regions[r,c] /\\ on_edge_2d(r2, c2, regions))
    )
);


predicate twilight_cave_fillomino_region_shading(
    array[int, int] of var 0..1: shading,
    array[int, int] of var int: regions,
) = let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
    forall (r in rows, c in cols where c > 0) (
        (regions[r, c] == regions[r, c - 1]) -> (shading[r, c] == shading[r, c - 1])
    ) /\\
    forall (r in rows, c in cols where r > 0) (
        (regions[r, c] == regions[r - 1, c]) -> (shading[r, c] == shading[r - 1, c])
    )
);

predicate twilight_cave_fillomino_shaded_clue(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions, % these are the cave regions
    var int: target_region,
    var int: val
) = sum(r in index_set_1of2(grid), 
        c in index_set_1of2(grid)
        where regions[r, c] == target_region
        )(grid[r,c]) == val;

predicate twilight_cave_fillomino_unshaded_clue(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions, % these are the fillomino regions
    var int: target_region, % the target fillomino region
    var int: val
) = sum(r in index_set_1of2(grid), 
        c in index_set_1of2(grid)
        where regions[r, c] == target_region
        )(grid[r,c]) == val;

predicate cave_cells_are_odd_p(
    array[int,int] of var int: grid, 
    array[int,int] of var 0..1: shading
) = forall(r in index_set_1of2(grid), c in index_set_1of2(grid)) (
    shading[r,c] = 0 <-> grid[r,c] mod 2 = 1
);

predicate cave_walls_are_even_p(
    array[int,int] of var int: grid, 
    array[int,int] of var 0..1: shading
) = forall(r in index_set_1of2(grid), c in index_set_1of2(grid)) (
    shading[r,c] = 1 <-> grid[r,c] mod 2 = 0
);

function var int: cave_clue_f(
	array[int] of var 0..1: shading1, 
	array[int] of var 0..1: shading2, 
	array[int] of var 0..1: shading3, 
	array[int] of var 0..1: shading4,
    var 0..1: cell_shading
) = (
    count_uninterrupted(shading1, cell_shading) + count_uninterrupted(shading2, cell_shading) + count_uninterrupted(shading3, cell_shading) + count_uninterrupted(shading4, cell_shading)
);

predicate cave_clue_p(
    var int: cell_var,
    var 0..1: cell_shading,
	array[int] of var 0..1: shading1, 
	array[int] of var 0..1: shading2, 
	array[int] of var 0..1: shading3, 
	array[int] of var 0..1: shading4
) = let {
    var int: count_cell = if cell_shading == 0 then 1 else 0 endif;
} in (
    cell_shading = 0 /\\
    cave_clue_f(shading1, shading2, shading3, shading4, cell_shading) + count_cell == cell_var
);

predicate one_digit_does_not_appear_in_cave_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: shading,
    set of int: allowed
) = 
    let {
        array[index_set(allowed)] of var bool: in_cave = [
            not exists(r in index_set_1of2(grid), c in index_set_2of2(grid))(
                shading[r,c] == 0 /\\ grid[r,c] = allowed[i]
            )
        | i in index_set(allowed)];
    } in sum(in_cave) == 1;

predicate renban_cave_regions_p(
    array[int, int] of var 0..1: shading, % cave shading
    array[int, int] of var int: regions, % sudoku regions
    array[int, int] of var int: renban_cave_regions
) = let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
    % walls (shading = 1) don't matter for the renban <-> label walls with 0
    forall(r in rows, c in cols) (
        shading[r,c] = 1 <-> renban_cave_regions[r, c] = 0
    )
    /\\ forall(r in rows, c in cols) (
        shading[r,c] = 0 <-> renban_cave_regions[r, c] != 0
    ) 
    % adjacent cells must belong to the same renban region only if they're both cave cells and belong to the same sudoku region
    % horizontal adjacent
    /\\ forall (r in rows, c in cols where c > min(cols)) (
        let { 
            var int: cave1 = shading[r, c], 
            var int: cave2 = shading[r, c - 1],
            var int: region1 = regions[r, c],
            var int: region2 = regions[r, c - 1],
        } in 
        ((cave1 = 0 /\\ cave2 = 0 /\\ region1 == region2) -> renban_cave_regions[r,c] = renban_cave_regions[r,c-1])
        /\\ ((cave1 = 0 /\\ cave2 = 0 /\\ region1 != region2) -> renban_cave_regions[r,c] != renban_cave_regions[r,c-1])
    )
    % vertical adjacent
    /\\ forall (r in rows, c in cols where r > min(rows)) (
        let { 
            var int: cave1 = shading[r - 1, c], 
            var int: cave2 = shading[r, c],
            var int: region1 = regions[r-1, c],
            var int: region2 = regions[r, c],
        } in
        ((cave1 = 0 /\\ cave2 = 0 /\\ region1 == region2) -> renban_cave_regions[r-1,c] = renban_cave_regions[r,c])
        /\\ ((cave1 = 0 /\\ cave2 = 0 /\\ region1 != region2) -> renban_cave_regions[r-1,c] != renban_cave_regions[r,c])
    ) 
    % we need to remove ambiguity from the region numbering 
    % use the numbering each region by the id of the first element of that region
    /\\ cave_floodfill_p(renban_cave_regions)
);

predicate renban_caves_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions, % renban cave regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    set of int: ids = 0..g_size;
    array[ids] of var 0..g_size: sizes;
} in (
    % Each area's size is the number of cells in that area.
    forall (id in ids) (
        sizes[id] = sum (r in rows, c in cols) (regions[r, c] = id)
    ) 
    /\\ forall(r in rows, c in cols)(
        forall(r2 in rows, c2 in cols where is_after(r, c, r2, c2))(
            let {
                var int: id1 = regions[r, c];
                var int: id2 = regions[r2, c2];
            } in
            id1 != 0 /\\ id2 != 0 /\\ id1 == id2 -> abs(grid[r,c] - grid[r2, c2]) <= sizes[id1] - 1
        )
    )
);

predicate cave_shaded_region_size_unshaded_seen_orthogonally_clue_p(
    var int: cell_var,
    var 0..1: cell_shading,
    var int: cave_region,
	array[int, int] of var int: regions,
	array[int] of var 0..1: shading1, 
	array[int] of var 0..1: shading2, 
	array[int] of var 0..1: shading3, 
	array[int] of var 0..1: shading4
) = (
    (cell_shading = 0 -> cave_clue_f(shading1, shading2, shading3, shading4, cell_shading) + 1 == cell_var)
    /\\ (cell_shading = 1 -> cell_var == count(array1d(regions), cave_region))
);

predicate cave_wall_suguru_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: cave_regions
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);  
} in (
    assert(index_sets_agree(grid, cave_regions), "grid and cave_regions must have the same indexes.")

    % digits in the same region are different
    /\\ forall(r in rows, c in cols, r2 in rows, c2 in cols where is_after(r, c, r2, c2))(
        cave_regions[r,c] != 0 /\\ cave_regions[r,c] == cave_regions[r2,c2] -> grid[r,c] != grid[r2,c2]
    )

    % no repeats in row and column for wall regions (shaded)
    /\\ forall(r in rows, c in cols where cave_regions[r,c] != 0)(
        forall(r2 in rows where r2 != r /\\ cave_regions[r2,c] != 0)(
            grid[r,c] != grid[r2,c]
        )
        /\\ forall(c2 in cols where c2 != c /\\ cave_regions[r,c2] != 0)(
            grid[r,c] != grid[r,c2]
        )
    )
);

predicate cave_cells_fillomino_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: cave_shading,
    array[int, int] of var int: cave_fillomino_grid,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    array[rows, cols] of var 0..g_size: when;
    set of int: ids = 0..g_size;
    array[ids] of var 0..g_size: size;
} in (
    assert(index_sets_agree(grid, cave_shading), "grid and cave_shading must have the same indexes.")
    /\\ assert(index_sets_agree(grid, cave_fillomino_grid), "grid and cave_fillomino_grid must have the same indexes.")
    % cave walls (shading = 1) are not part of the fillomino
    /\\ forall(r in rows, c in cols)(
        (cave_shading[r,c] == 1 -> cave_fillomino_grid[r,c] == 0 /\\ when[r,c] == 0)
        /\\ (cave_shading[r,c] == 0 -> cave_fillomino_grid[r,c] != 0 /\\ when[r,c] > 0)
    )
    % 2. Symmetry breaking: canonical numbering of regions (reduces search space, tested)
    /\\ forall(r in rows, c in cols) (
        cave_fillomino_grid[r, c] <= (r * n_cols + c + 1) /\\
        cave_fillomino_grid[r, c] >= 0
    )

    % 3. regions of size 1
    /\\ forall(r in rows, c in cols where cave_shading[r,c] == 0)(
        grid[r,c] == 1 -> cave_fillomino_grid[r, c] = (r * n_cols + c + 1) /\\ when[r,c] == 1
    )
    /\\ forall(r in rows, c in cols where cave_shading[r,c] == 0 /\\ grid[r,c] == 1)(
        forall(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            cave_fillomino_grid[r,c] != cave_fillomino_grid[t.1, t.2]
        )
    )

    % 7. Adjacent cells in the same region have the same value and in different regions have different values
    /\\ forall(r1 in rows, c1 in cols where cave_shading[r1,c1] == 0) (
        forall(t in orth_adjacent_idxs(r1,c1) where in_bounds_2d(t.1, t.2, cave_fillomino_grid) /\\ cave_shading[t.1,t.2] == 0)(
            (cave_fillomino_grid[r1, c1] != cave_fillomino_grid[t.1, t.2]) = (grid[r1, c1] != grid[t.1, t.2])
        )
    )

    % 8. Each region's size equals the count of its cells
    /\\ forall(id in ids where exists(r in rows, c in cols)(cave_fillomino_grid[r, c] = id)) (
        size[id] = sum(r in rows, c in cols)(bool2int(cave_fillomino_grid[r, c] = id))
    )
    % 9. Each cell's region size matches its value
    /\\ forall (r in rows, c in cols where cave_shading[r,c] == 0) (
        grid[r, c] = size[cave_fillomino_grid[r, c]]
    )

    % 6. lex-order roots
    /\\ forall(r in rows, c in cols where cave_fillomino_grid[r, c] == (r * n_cols + c + 1)) (
        forall(r2 in rows, c2 in cols) (
            (cave_fillomino_grid[r2, c2] = cave_fillomino_grid[r, c]) -> (r2 > r \\/ (r2 = r /\\ c2 >= c))
        )
    )

    % floodfill - necessary to make sure each region is connected
    % root fix
    /\\ forall(r in rows, c in cols)(
        when[r,c] == 1 <-> cave_fillomino_grid[r, c] = (r * n_cols + c + 1)
    )

    % Upper bound on when values
    % Optimisation: the "when" label is actually the 'distance' of a cell in a
    % region from the region "root".  This distance cannot be larger than the size
    % of the region.
    /\\ forall(r in rows, c in cols where cave_shading[r,c] == 0) (
        when[r, c] >= 1 /\\ when[r, c] <= grid[r, c] /\\ when[r, c] <= size[cave_fillomino_grid[r, c]]
    )

    /\\ floodfill_p(cave_fillomino_grid, when)
);

`+`predicate every_cell_is_in_a_galaxy_p(
    array[int, int] of var int: regions
) = forall(r in index_set_1of2(regions), c in index_set_2of2(regions))(
    regions[r,c] != 0
);

predicate no_2x2_belongs_to_one_galaxy_p(
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in forall(r in rows where r < max(rows), c in cols where c < max(cols))(
      let {
          var bool: all_eq = all_equal([regions[r,c], regions[r,c+1], regions[r+1,c], regions[r+1,c+1]]);
      } in (regions[r,c] = 0 /\\ all_eq) \\/ not all_eq
);

predicate gallaxy_connected_regions_p(
    array[int, int] of var int: regions
) =  let {
        set of int: rows = index_set_1of2(regions);
        set of int: cols = index_set_2of2(regions);
        int: n_rows = length(rows);
        int: n_cols = length(cols);
        int: g_size = n_rows * n_cols;
        array [rows, cols] of var 0..g_size: same_before;
        array[rows, cols] of var 0..g_size: when;
    } in (
    % we need to remove ambiguity from the region numbering 
    % use the numbering each region by the id of the first element of that region
    same_before_p(regions, same_before) /\\
    forall (r in rows, c in cols) (
        if same_before[r,c] = 0 /\\ regions[r, c] != 0 then
            when[r,c] = 1
        else
            true
        endif
    )

    /\\ forall (r in rows, c in cols) (
        regions[r, c] = 0 -> when[r,c] = 0
    )

    /\\forall (r in rows, c in cols) (
        regions[r, c] != 0 -> when[r,c] >= 1
    )
    % floodfilling
    /\\ floodfill_p(regions, when)
    /\\ forall (r in rows, c in cols where when[r, c] = 1)(
        same_before[r,c] == 0
    )
);

predicate two_symmetric_galaxies_p(
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: min_r = min(rows);
    int: max_r = max(rows);
    int: min_c = min(cols);
    int: max_c = max(cols);
} in (
    forall(r in rows, c in cols)(
        (regions[r, c] = 1 \\/ regions[r, c] = 2) /\\
        regions[r, c] = regions[max_r-r+min_r, max_c-c+min_c] % rotationally symmetric
    ) /\\
    connected_region(regions, 1) /\\ 
    connected_region(regions, 2) /\\
    regions[min_r, min_c] = 1 % fix galaxy numbering
);

predicate one_galaxy_is_german_whispers(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    var 1..2: target;
} in (
    region_whispers_p(grid, regions, target, 5)
);

predicate galaxy_center_p(
    array[int] of var int: group,
    array[int] of var int: mapped_group,
    array[int] of var int: not_in_galaxy,
    int: galaxy_id
) = let {
    set of int: idxs = index_set(group);
} in (
    assert(index_sets_agree(group, mapped_group), "group and mapped group must have the same indexes.")
    /\\ forall(cell in not_in_galaxy) (cell != galaxy_id)
    /\\ forall(i in idxs)(
        group[i] == galaxy_id <-> mapped_group[i] == galaxy_id
    ) /\\
    count(group, galaxy_id) >= 1 /\\ count(mapped_group, galaxy_id) >= 1
);

predicate galaxy_sum_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
    var int: val,
    var int: galaxy_id
) = conditional_sum_f(array1d(grid), array1d(regions), galaxy_id) == val;
 
predicate galaxy_sizes_p(
    array[int, int] of var int: regions,
    array[int] of var int: sizes,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    set of int: ids = index_set(sizes);
} in (
    sizes[0] = 0 /\\
    forall(g_id in ids where g_id > 0)(
        sizes[g_id] = sum(r in rows, c in cols)(bool2int(regions[r,c] == g_id))
    )
);

predicate adjacent_galaxies_not_size_leq_3_p(
    array[int, int] of var int: regions,
    array[int] of var int: sizes,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    set of int: ids = index_set(sizes);
} in (
    % if two galaxies have equal size <=3 then they have the same shape,
    % so these regions cannot be next to each other
    forall (r in rows, c in cols where c < max(cols)) (
        let { 
            var ids: id1 = regions[r, c], 
            var ids: id2 = regions[r, c+1] 
        } in
        (id1 != 0 /\\ id2 != 0 /\\ id1 != id2 /\\ sizes[id1]<=3 /\\ sizes[id2]<=3) -> sizes[id1] != sizes[id2]
    ) /\\
    forall (r in rows, c in cols where r < max(rows)) (
        let { 
            var ids: id1 = regions[r, c], 
            var ids: id2 = regions[r+1, c] 
        } in
        (id1 != 0 /\\ id2 != 0 /\\ id1 != id2 /\\ sizes[id1]<=3 /\\ sizes[id2]<=3) -> sizes[id1] != sizes[id2]
    )
);

predicate order_remaining_galaxies_p(
    array[int, int] of var int: regions,
    set of int: reg_idxs,
) = value_precede_chain(reg_idxs, array1d(regions));
 
predicate galaxy_restrict_numbering_p(
    array[int, int] of var int: regions
) = let{
    var bool: has_0 = member(array1d(regions), 0);
    var int: num_galaxies = count_unique_values(array1d(regions)) - bool2int(has_0);
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in forall(r in rows, c in cols)(
    regions[r,c] <= num_galaxies
);

function array[1..2] of var int: bounds_1of2(array[int,int] of var int: regions, var int: val) =
  let {
    % Get array dimensions
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: min_row = min(rows);
    int: max_row = max(rows);

    % Create array of boolean variables indicating if value exists in each row
    array[rows] of var bool: row_has_val;
    constraint forall(r in rows)(
        row_has_val[r] = (exists(c in cols) (regions[r,c] = val))
    );
    
    % Find minimum row where value exists
    var int: result_lb = min([
      if row_has_val[r] then r else max(rows) + 1 endif | r in rows
    ]);
    var int: result_ub = max([
      if row_has_val[r] then r else min(rows) - 1 endif | r in rows
    ]);

    var int: row_lb = if result_lb > max(rows) then min_row - 1 else result_lb endif;
    var int: row_ub = if result_ub < min(rows) then min_row - 1 else result_ub endif;
    
  } in [row_lb, row_ub];

function array[1..2] of var int: bounds_2of2(array[int,int] of var int: regions, var int: val) =
  let {
    % Get array dimensions
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: min_col = min(cols);
    
    % Create array of boolean variables indicating if value exists in each col
    array[cols] of var bool: col_has_val;
    constraint forall(c in cols)(
        col_has_val[c] = (exists(r in rows) (regions[r,c] = val))
    );
    
    % Find minimum row where value exists
    var int: result_lb = min([
      if col_has_val[c] then c else max(cols) + 1 endif | c in cols
    ]);
    var int: result_ub = max([
      if col_has_val[c] then c else min(cols) - 1 endif | c in cols
    ]);

    var int: col_lb = if result_lb > max(cols) then min_col - 1 else result_lb endif;
    var int: col_ub = if result_ub < min(cols) then min_col - 1 else result_ub endif;
    
  } in [col_lb, col_ub];

predicate galaxy_180_symmetry_p(
    array[int, int] of var int: regions,
    array[int] of var int: sizes,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    set of int: ids = index_set(sizes);
} in (
    forall(g_id in ids where g_id > 0)(
        sizes[g_id] > 2 -> let {
            array[1..2] of var int: height_bounds = bounds_1of2(regions, g_id);
            array[1..2] of var int: width_bounds = bounds_2of2(regions, g_id);
            var int: r_lb = height_bounds[1];
            var int: r_ub = height_bounds[2];
            var int: c_lb = width_bounds[1];
            var int: c_ub = width_bounds[2];
        } in forall(r in rows, c in cols where r >= r_lb /\\ r <= (r_lb+r_ub) div 2 /\\ c >= c_lb /\\ c <= (c_lb+c_ub) div 2 ) (
            regions[r, c] == g_id <-> regions[r_ub - (r - r_lb), c_ub - (c - c_lb)] == g_id
        )
    )
);

`+`predicate goldilocks_zone_p(
    array[int, int] of var 0..2: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
	connected_region(regions, 0) /\\
    connected_region(regions, 1) /\\
    connected_region(regions, 2) /\\
    forall(r in rows where r < max(rows), c in cols where c < max(cols))(
        not all_equal([regions[r,c], regions[r,c+1], regions[r+1,c], regions[r+1,c+1]])
    )
);

predicate goldilocks_values_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: values,
    array[int, int] of var 0..2: regions
) = let {
    set of int: rows = index_set_1of2(values);
    set of int: cols = index_set_2of2(values);
} in (
    forall(r in rows, c in cols)(
        % just right zone
        (regions[r,c] == 0 /\\ values[r,c] = grid[r,c]) \\/
        % hot zone
        (regions[r,c] == 1 /\\ values[r,c] = grid[r,c] + 1) \\/
        % cold zone
        (regions[r,c] == 2 /\\ values[r,c] = grid[r,c] - 1)
    )
);

predicate goldilocks_zone_region_sum_p(
    array[int] of var int: arr,
    array[int] of var int: regions
) = let {
    int: min_i = min(index_set(regions));
    int: max_i = max(index_set(regions));
} in (
    unknown_regions_region_sum_line_p(arr, regions) /\\
    regions[min_i] != regions[max_i]
);

`+`predicate antiking_p(
    array[int, int] of var int: grid
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);  
} in (
    forall(r in rows, c in cols)(
        forall(i,j in -1..1 where is_after(r,c, r+i,c+j) /\\ in_bounds_2d(r+i, c+j, grid))(
            grid[r,c] != grid[r+i,c+j]
        )
    )
);

predicate anti_long_knight_p(
    array[int, int] of var int: grid
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);  
} in (
    forall(r in rows, c in cols)(
        forall(dr, dc in [-3,-1,1,3]
            where abs(dr) + abs(dc) == 4
            /\\ is_after(r,c, r+dr,c+dc)
            /\\ in_bounds_2d(r+dr, c+dc, grid)
        )(
            grid[r,c] != grid[r+dr,c+dc]
        )
    )
);

predicate anti_giraffe_p(array[int, int] of var int: grid) =
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
    } in
    % Check all possible giraffe moves from each cell
    forall(r in rows, c in cols)(
        (in_bounds_2d(r-1, c-4, grid) -> grid[r,c] != grid[r-1,c-4]) /\\
        (in_bounds_2d(r-1, c+4, grid) -> grid[r,c] != grid[r-1,c+4]) /\\
        (in_bounds_2d(r+1, c-4, grid) -> grid[r,c] != grid[r+1,c-4]) /\\
        (in_bounds_2d(r+1, c+4, grid) -> grid[r,c] != grid[r+1,c+4]) /\\
        (in_bounds_2d(r-4, c-1, grid) -> grid[r,c] != grid[r-4,c-1]) /\\
        (in_bounds_2d(r-4, c+1, grid) -> grid[r,c] != grid[r-4,c+1]) /\\
        (in_bounds_2d(r+4, c-1, grid) -> grid[r,c] != grid[r+4,c-1]) /\\
        (in_bounds_2d(r+4, c+1, grid) -> grid[r,c] != grid[r+4,c+1])
    );

predicate hexed_sudoku_p(array[int, int] of var int: grid, set of int: allowed) =
    let {
        array[index_set(allowed)] of var bool: used_vals = [
          exists(r in index_set_1of2(grid), c in index_set_2of2(grid))(
            grid[r,c] = allowed[i]
          )
        | i in index_set(allowed)]
    } in sum(used_vals) = 9;

predicate nexus_p(
    array[int, int] of var int: grid, 
    array[int, int] of var bool: labels,
    set of int: values
) = let {
    % Get index sets
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    var int: label_row;
    var int: label_col;
} in (
    count(array1d(labels), true) = 1 /\\
    forall(r in rows, c in cols)(
        (labels[r,c] -> label_row = r /\\ label_col = c)
    ) /\\
    forall(v in values)(
        sum(r in rows, c in cols where abs(r - label_row) + abs(c - label_col) = v)(
            bool2int(grid[r,c] = v)
        ) = grid[label_row, label_col]
    )
);

predicate tango_p(array[int, int] of var int: grid) =
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
    } in (
        % No three consecutive cells horizontally can be all odd or all even
        forall(r in rows, c in min(cols)..max(cols)-2)(
            % Not all odd
            not (grid[r,c] mod 2 = 1 /\\ 
                 grid[r,c+1] mod 2 = 1 /\\ 
                 grid[r,c+2] mod 2 = 1) /\\
            % Not all even
            not (grid[r,c] mod 2 = 0 /\\ 
                 grid[r,c+1] mod 2 = 0 /\\ 
                 grid[r,c+2] mod 2 = 0)
        ) /\\
        % No three consecutive cells vertically can be all odd or all even
        forall(r in min(rows)..max(rows)-2, c in cols)(
            % Not all odd
            not (grid[r,c] mod 2 = 1 /\\ 
                 grid[r+1,c] mod 2 = 1 /\\ 
                 grid[r+2,c] mod 2 = 1) /\\
            % Not all even
            not (grid[r,c] mod 2 = 0 /\\ 
                 grid[r+1,c] mod 2 = 0 /\\ 
                 grid[r+2,c] mod 2 = 0)
        )
    );
    
predicate anti_entropy_aux_p(var int: val1, var int: val2) = let {
    set of int: group1 = {1,2,3};
    set of int: group2 = {4,5,6};
    set of int: group3 = {7,8,9};  
} in (
    ((val1 in group1) /\\ (val2 in group2 \\/ val2 in group3)) \\/
    ((val1 in group2) /\\ (val2 in group1 \\/ val2 in group3)) \\/
    ((val1 in group3) /\\ (val2 in group1 \\/ val2 in group2))
);

predicate anti_entropy_p(
    array[int, int] of var int: grid
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(r in rows, c in cols where r > min(rows))(
        anti_entropy_aux_p(grid[r-1,c], grid[r, c])
    ) /\\
    forall(r in rows, c in cols where c > min(cols))(
        anti_entropy_aux_p(grid[r,c-1], grid[r, c])
    )
);

predicate max_grid_val_p(
    array[int, int] of var int: grid,
    var int: val,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(r in rows, c in cols)(
        grid[r,c] <= val
    )
);

predicate val_not_in_grid_p(
    array[int, int] of var int: grid,
    var int: val,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(r in rows, c in cols)(
        grid[r,c] != val
    )
);

predicate entropy_and_modularity_set_p(
    array[int] of var int: arr
) = let {
    int: n = 3;
    array[int] of var int: remainders = [x mod n | x in arr];
    var bool: all_equal_rem = all_equal(remainders);
    var bool: all_different_rem = all_different(remainders);
    array[int] of var int: entropy = entropic_group_f(arr);
    var bool: same_entropy = forall(x in entropy)(x > 0) /\\ all_equal(entropy);
    var bool: different_entropy = forall(x in entropy)(x > 0) /\\ all_different(entropy);
} in (
    (all_equal_rem \\/ all_different_rem) /\\ (same_entropy \\/ different_entropy)
);

`+`predicate lits_shading_p(array[int, int] of var 0..1: shading) =
    connected_region(shading, 1)
    /\\ shading_2x2_allowed_p(shading, 0..3);

predicate lits_shading_ids_p(
    array[int, int] of var 0..1: shading, 
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
    assert(index_sets_agree(shading, ids_grid), "shading and ids_grid must have the same indexes.")
    % shaded regions must belong to one tetromino
    /\\ forall(r in rows, c in cols)(
        shading[r,c] = 0 <-> ids_grid[r,c] = 0
    )
    /\\ forall(r in rows, c in cols)(
        shading[r,c] = 1 <-> ids_grid[r,c] != 0
    )
);

predicate lits_region_and_ids_p(
    array[int, int] of var int: regions, 
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    % Shade one tetromino in each region. 
    % No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape.
    assert(index_sets_agree(regions, ids_grid), "regions and ids_grid must have the same indexes.")

    % if adjacent cells are in different regions than ids cannot be the same (unless they're both zero)
    % horizontally adjacent
    /\\ forall (r in rows, c in cols where c > min(cols)) (
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r,c-1] } in (
            regions[r,c] != regions[r,c-1] -> ((id1 = 0 /\\ id2 = 0) \\/ (id1 != id2))
        )
    )
    % vertically adjacent
    /\\ forall (r in rows, c in cols where r > min(rows)) (
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r-1,c] } in
        regions[r,c] != regions[r-1,c] -> ((id1 = 0 /\\ id2 = 0) \\/ (id1 != id2))
    )

    % two cells in the same region cannot have different ids (except 0)
    /\\ forall(r in rows, c in cols)(
            forall(r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
                let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r2,c2]} in 
                    regions[r,c] == regions[r2,c2] -> id1 = 0 \\/ id2 = 0 \\/ id1 = id2
          )
    )

    % non zero ids cannot be alone (must have at least one adjacent cell equal to it)
    /\\ forall (r in rows, c in cols)(
        ids_grid[r,c] != 0 -> count_same_adjacent(ids_grid, r, c) >= 1
    )

    % non zero ids cannot be in dominoes
    % horizontal dominoes
    /\\ forall(r in rows, c in cols where c>min(cols))(
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r,c-1] } in (
            (id1 != 0 /\\ id2 != 0 /\\ id1 == id2) -> 
                count_same_adjacent(ids_grid, r, c) + count_same_adjacent(ids_grid, r, c-1) > 2
        )
    )
    % vertical dominoes
    /\\ forall(r in rows, c in cols where r>min(rows))(
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r-1,c] } in (
            (id1 != 0 /\\ id2 != 0 /\\ id1 == id2) -> 
                count_same_adjacent(ids_grid, r, c) + count_same_adjacent(ids_grid, r-1, c) > 2
        )
    )
);

predicate lits_4_per_region_p(
    array[int, int] of var int: regions,
    array[int, int] of var 0..1: shading
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
} in (
    forall(id1 in 0..g_size)(
        let { 
            var int: count_in_reg = conditional_count_f(array1d(shading), array1d(regions), 1, id1);
            var int: reg_size = count(array1d(regions), id1);
        } in
            reg_size > 0 -> count_in_reg = 4
    )
);

predicate check_lits_tetra_p(array[int] of var int: poliomino, var int: val) = 
    (all_equal(poliomino) /\\ exists(id1 in poliomino)(id1 != 0)) -> all_equal_to_p(poliomino, val);
    
function array[int] of var int: get_n_omino(
    array[int, int] of var int: ids_grid,
    tuple(int, int): tl_anchor,
    array[int] of tuple(int, int): rel_coords,
) = [ids_grid[tl_anchor.1 + t.1, tl_anchor.2 + t.2] | t in rel_coords];

predicate lits_o_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r < max(rows), c in cols where c < max(cols))(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r+1,c], ids_grid[r+1,c+1]];
        } in check_lits_tetra_p(tetra, 5)
    )  
);

predicate check_lits_tetras_p(
    array[int, int] of var int: ids_grid,
    array[int] of array[int] of tuple(int, int): all_coords,
    var int: val,
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);    
} in (
    forall(i in index_set(all_coords)) (
        let {
            array[int] of tuple(int, int): coords = all_coords[i];
            int: max_dr = max(t in coords)(t.1);
            int: max_dc = max(t in coords)(t.2);
        } in (
            forall(r in rows where r <= max(rows) - max_dr, c in cols where c <= max(cols) - max_dc)(
                let {
                    array[int] of var int: tetra = get_n_omino(ids_grid, (r,c), coords);
                } in check_lits_tetra_p(tetra, val)
            )
        )
    )  
);

predicate lits_tetromino_shapes_p(array[int, int] of var int: ids_grid) = (
    check_lits_tetras_p(ids_grid, P4_I, 2)
    /\\ check_lits_tetras_p(ids_grid, P4_T, 3)
    /\\ check_lits_tetras_p(ids_grid, P4_S, 4)
    /\\ check_lits_tetras_p(ids_grid, P4_L, 1)
);

predicate lits_grid_p(
    array[int, int] of var int: lits_grid, 
    array[int, int] of var int: regions, 
    array[int, int] of var 0..1: shading,
    set of int: region_ids
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    int: min_region = min(region_ids);
    int: offset = if min_region <= 0 then -min_region + 1 else 0 endif;
} in (
    % each tetromino has a different id > 0
    assert(index_sets_agree(regions, shading), "regions and shading must have the same indexes.")
    /\\ assert(index_sets_agree(regions, lits_grid), "regions and lits_grid must have the same indexes.")
    /\\ forall(r in rows, c in cols)(
        (shading[r,c] == 1 /\\ lits_grid[r,c] = regions[r,c] + offset) \\/
        (shading[r,c] == 0 /\\ lits_grid[r,c] = 0)
    )
);

predicate lits_max_tetromino_sum_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: lits_grid,
    var int: val,
    set of int: region_ids
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, lits_grid), "grid and lits_grid must have the same indexes.")
    /\\ forall(r_id in region_ids where r_id > 0)(
        exists(r in rows, c in cols)(lits_grid[r,c] == r_id) -> conditional_sum_f(array1d(grid), array1d(lits_grid), r_id) <= val
    )
);

`+`predicate check_pentominos_tilling_p(
    array[int, int] of var int: pentomino_regions,
    % array[int, int] of var int: pentomino_anchors,
    array[int] of array[int] of tuple(int, int): all_coords, % relative coordinates of all possible orientations of a given pentomino
    int: val, % pentomino id
) = let {
    set of int: rows = index_set_1of2(pentomino_regions);
    set of int: cols = index_set_2of2(pentomino_regions);
} in (
    forall(i in index_set(all_coords)) (
        let {
            array[int] of tuple(int, int): rel_coords = all_coords[i];
            array[int] of tuple(int, int): rel_neighbour = neighbour_frontier_f(rel_coords);
            int: max_dr = max(t in rel_coords)(t.1);
            int: max_dc = max(t in rel_coords)(t.2);
        } in (
            forall(r in rows where r <= max(rows) - max_dr, c in cols where c <= max(cols) - max_dc)(
                let {
                    array[int] of tuple(int, int): abs_coords = [(r + t.1, c + t.2) | t in rel_coords];
                    array[int] of tuple(int, int): abs_neighbour = [(r + t.1, c + t.2) | t in rel_neighbour];
                    array[int] of var int: pentomino = [pentomino_regions[t.1, t.2] | t in abs_coords];
                    array[int] of var int: neighbour = [
                        pentomino_regions[t.1, t.2] | t in abs_neighbour 
                            where in_bounds_2d(t.1, t.2, pentomino_regions)
                    ];
                    var bool: all_equal_cells = all_equal(pentomino);
                    var bool: has_filled_cell = exists(id1 in pentomino)(id1 != 0);
                    var bool: is_pentomino = all_equal_to_p(pentomino, val);
                } in (
                    all_equal_cells /\\ has_filled_cell -> is_pentomino /\\ count_eq(neighbour, val, 0)
                    % /\\ pentomino_anchors[r,c] == val
                )
            )
        )
    )
);

predicate forbidden_poliomino_config_p(
    array[int, int] of var int: poliomino_regions,
    array[int] of array[int] of tuple(int, int): all_coords, % relative coordinates of all possible orientations of a given pentomino
) = let {
    set of int: rows = index_set_1of2(poliomino_regions);
    set of int: cols = index_set_2of2(poliomino_regions);
} in (
    forall(i in index_set(all_coords)) (
        let {
            array[int] of tuple(int, int): rel_coords = all_coords[i];
            array[int] of tuple(int, int): rel_neighbour = neighbour_frontier_f(rel_coords);
            int: max_dr = max(t in rel_coords)(t.1);
            int: max_dc = max(t in rel_coords)(t.2);
        } in (
            forall(r in rows where r <= max(rows) - max_dr, c in cols where c <= max(cols) - max_dc)(
                let {
                    array[int] of tuple(int, int): abs_coords = [(r + t.1, c + t.2) | t in rel_coords];
                    array[int] of tuple(int, int): abs_neighbour = [(r + t.1, c + t.2) | t in rel_neighbour];
                    array[int] of var int: poliomino = [poliomino_regions[t.1, t.2] | t in abs_coords];
                    array[int] of var int: neighbour = [
                        poliomino_regions[t.1, t.2] | t in abs_neighbour 
                            where in_bounds_2d(t.1, t.2, poliomino_regions)
                    ];
                    var bool: all_equal_cells = all_equal(poliomino);
                    var bool: has_filled_cell = exists(id1 in poliomino)(id1 != 0);
                } in (
                    all_equal_cells /\\ has_filled_cell -> count(neighbour, poliomino[1]) > 0
                )
            )
        )
    )
);

predicate pentomino_tilling_p(
    array[int, int] of var int: pentomino_regions,
) = let {
    set of int: rows = index_set_1of2(pentomino_regions);
    set of int: cols = index_set_2of2(pentomino_regions);
    set of int: PENTOMINOES = 1..12;
    int: gsize = length(rows) * length(cols);
    int: total_pentominos = gsize div 5;
} in (
    assert(gsize mod 5 == 0, "grid size (gsize) must be divisible by 5")

    % all cells belong to a pentomino
    /\\ forall(r in rows, c in cols)(
        pentomino_regions[r,c] != 0
    )

    % non zero ids cannot be alone (must have at least one adjacent cell equal to it)
    /\\ forall (r in rows, c in cols)(
        pentomino_regions[r,c] != 0 -> count_same_adjacent(pentomino_regions, r, c) >= 1
    )

    % non zero ids cannot be in dominoes
    % horizontal dominoes
    /\\ forall(r in rows, c in cols where c>min(cols))(
        let { var int: id1 = pentomino_regions[r,c], var int: id2 = pentomino_regions[r,c-1] } in (
            (id1 != 0 /\\ id2 != 0 /\\ id1 == id2) -> 
                count_same_adjacent(pentomino_regions, r, c) + count_same_adjacent(pentomino_regions, r, c-1) > 2
        )
    )
    % vertical dominoes
    /\\ forall(r in rows, c in cols where r>min(rows))(
        let { var int: id1 = pentomino_regions[r,c], var int: id2 = pentomino_regions[r-1,c] } in (
            (id1 != 0 /\\ id2 != 0 /\\ id1 == id2) -> 
                count_same_adjacent(pentomino_regions, r, c) + count_same_adjacent(pentomino_regions, r-1, c) > 2
        )
    )

    % triomino - forbidden configurations
    /\\ forbidden_poliomino_config_p(pentomino_regions, P3_I)
    /\\ forbidden_poliomino_config_p(pentomino_regions, P3_L)

    % tetromino - forbidden configurations
    /\\ forbidden_poliomino_config_p(pentomino_regions, P4_L)
    /\\ forbidden_poliomino_config_p(pentomino_regions, P4_I)
    /\\ forbidden_poliomino_config_p(pentomino_regions, P4_T)
    /\\ forbidden_poliomino_config_p(pentomino_regions, P4_S)
    /\\ forbidden_poliomino_config_p(pentomino_regions, P4_O)

    % f
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_F, 1)
    % i
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_I, 2)
    % l
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_L, 3)
    % n
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_N, 4)
    % p
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_P, 5)
    % t
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_T, 6)
    % u
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_U, 7)
    % v
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_V, 8)
    % w
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_W, 9)
    % x
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_X, 10)
    % y
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_Y, 11)
    % z
    /\\ check_pentominos_tilling_p(pentomino_regions, P5_Z, 12)
);

predicate pentomino_border_count_p(
    array[int] of var int: regions,
    var int: val
) = count_transitions_f(regions) == val;

predicate tilling_region_no_empty_cells_p(
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in forall(r in rows, c in cols)(regions[r,c] != 0);

`+`predicate black_and_white_star_battle_p(
    array[int, int] of var 0..1: star_battle_grid,
    array[int, int] of var 0..2: white_black_grid
) = let {
    set of int: rows = index_set_1of2(star_battle_grid);
    set of int: cols = index_set_2of2(star_battle_grid);
} in (
    assert(index_sets_agree(star_battle_grid, white_black_grid), "star_battle_grid and white_black_grid must have the same indexes.")
    /\\ forall(r in rows, c in cols)(
        star_battle_grid[r,c] = 0 <-> white_black_grid[r, c] = 0
    )
    /\\ forall(r in rows, c in cols)(
        star_battle_grid[r,c] = 1 <-> white_black_grid[r, c] != 0
    )
);

predicate lits_black_and_white_star_battle_p(
    array[int, int] of var 0..1: lits_shading_grid,
    array[int, int] of var 0..2: white_black_grid,
) = let {
    set of int: rows = index_set_1of2(lits_shading_grid);
    set of int: cols = index_set_2of2(lits_shading_grid);
} in (
    assert(index_sets_agree(lits_shading_grid, white_black_grid), "lits_shading_grid and white_black_grid must have the same indexes.")
    % white star
    /\\ forall(r in rows, c in cols)(
        white_black_grid[r,c] = 1 -> lits_shading_grid[r,c] = 0
    )
    % black star
    /\\ forall(r in rows, c in cols)(
        white_black_grid[r,c] = 2 -> lits_shading_grid[r,c] = 1
    )
);

predicate star_battle_no_touching_p(
    array[int, int] of var 0..1: star_battle_grid
) = let {
    set of int: rows = index_set_1of2(star_battle_grid);
    set of int: cols = index_set_2of2(star_battle_grid);
} in (
    % if element is star, then adjacent elements cannot be 1
    forall(r in rows, c in cols)(
        star_battle_grid[r,c] = 1 -> forall(
            idx in orth_or_diag_adjacent_idxs(r, c)
            where in_bounds_2d(idx.1, idx.2, star_battle_grid)
        )(
            star_battle_grid[idx.1, idx.2] = 0
        )
    )
);

`+`function tuple(var int, var int): idx_to_coord2d(var int: n, int: n_cols) = let {
    var int: r1 = (n - 1) div n_cols;
    var int: c1 = (n - 1) mod n_cols;
} in (r1, c1);

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
            tuple(var int, var int): t1 = idx_to_coord2d(n1, n_cols);
            tuple(var int, var int): t2 = idx_to_coord2d(n2, n_cols);
            var int: sum_var;
        } in (
            sum_var = grid[t1.1,t1.2] + grid[t2.1,t2.2] /\\
            is_prime_p(sum_var)
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
    tuple(var int, var int): tsource = idx_to_coord2d(source, n_cols);
    var int: sum_var;
} in (
    rsl_labels[tsource.1, tsource.2] = 1
    % set region sum line labels for nodes not in the path
    /\\ forall(k in n_idxs)(
        not ns[k] -> let {
            tuple(var int, var int): t1 = idx_to_coord2d(k, n_cols);
        } in (rsl_labels[t1.1, t1.2] = 0)
    )
    % set region sum line labels for nodes connected by an edge
    /\\ forall(k in e_idxs)(
        es[k] -> let {
            int: n1 = from[k];
            int: n2 = to[k];
            tuple(var int, var int): t1 = idx_to_coord2d(n1, n_cols);
            tuple(var int, var int): t2 = idx_to_coord2d(n2, n_cols);
        } in (
            (regions[t1.1, t1.2] == regions[t2.1, t2.2] -> rsl_labels[t1.1, t1.2] == rsl_labels[t2.1, t2.2]) /\\
            (regions[t1.1, t1.2] != regions[t2.1, t2.2] -> rsl_labels[t2.1, t2.2] == rsl_labels[t1.1, t1.2] + 1)
        )
    )
    % region sum line
    /\\ forall(label in 1..n_cols*n_rows)(
        exists(r in rows, c in cols)(rsl_labels[r,c]==label) ->
            sum_var = conditional_sum_f(array1d(grid), array1d(rsl_labels), label)
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
               region_bools[i] = (regions_1d[i] == reg /\\ ns[i])
           ) 
           /\\ sum_var = conditional_sum_f(array1d(grid), region_bools, true)
           /\\ is_prime_p(sum_var)
       )
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
    tuple(var int, var int): tsource = idx_to_coord2d(source, n_cols);
} in (
    regions[tsource.1, tsource.2] = 1
    % set region labels for nodes not in the path
    /\\ forall(k in n_idxs)(
        not ns[k] -> let {
            tuple(var int, var int): t1 = idx_to_coord2d(k, n_cols);
        } in (regions[t1.1, t1.2] = 0)
    )
    % set region labels for nodes connected by an edge
    /\\ forall(k in e_idxs)(
        es[k] -> let {
            int: n1 = from[k];
            int: n2 = to[k];
            tuple(var int, var int): t1 = idx_to_coord2d(n1, n_cols);
            tuple(var int, var int): t2 = idx_to_coord2d(n2, n_cols);
            var bool: is_tp = teleports[t1.1, t1.2] != 0 /\\ teleports[t2.1, t2.2] != 0 /\\ teleports[t1.1, t1.2] = teleports[t2.1, t2.2]
        } in (
            (not is_tp -> regions[t1.1, t1.2] == regions[t2.1, t2.2]) /\\
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
    /\\ forall(label in 1..2)(
        sum_var = conditional_sum_f(array1d(grid), array1d(rsl_labels), label)
    )
    % /\\ forall(label in 1..n_cols*n_rows)(
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

    tuple(var int, var int): tsource = idx_to_coord2d(source, n_cols);
    set of int: ids = 1..g_size;
    array[ids] of var 0..max_reg_size: sizes;
} in (
    directed_path_teleport_segments_p(region_labels, teleports, from, to, ns, es, source)
    /\\ forall (id in ids) (
        sizes[id] = sum (r in rows, c in cols) (region_labels[r, c] = id)
    )
    % renban line
    /\\ forall(r in rows, c in cols)(
        forall(r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
            let {
                var int: id1 = region_labels[r, c];
                var int: id2 = region_labels[r2, c2];
            } in
            id1 != 0 /\\ id2 != 0 /\\ id1 == id2 -> grid[r,c] != grid[r2, c2] /\\ abs(grid[r,c] - grid[r2, c2]) <= sizes[id1] - 1
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

`+`predicate nurikabe_p(
    array[int, int] of var 0..1: shading, 
    array[int, int] of var int: regions
) =  let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);
} in (
    cave_nurikabe_helper_p(shading, regions)
    % no 2x2 region can be all water (all zeros)
    /\\ shading_2x2_allowed_p(shading, 1..4)
);

predicate nurikabe_no_repeats_in_islands_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, regions), "grid and regions must have the same indexes")
    /\\ forall(r in rows, c in cols)(
        forall(r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
            regions[r,c] == regions[r2,c2] /\\ regions[r,c] != 0 /\\ regions[r2,c2] != 0 -> grid[r,c] != grid[r2,c2]
        )
    )
);

predicate nurikabe_island_product_of_sum_and_size_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
    var int: region,
    var int: prod_val
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    var int: size;
    var int: island_sum;
} in (
    assert(index_sets_agree(grid, regions), "grid and regions must have the same indexes")
    % is island and not water
    /\\ region != 0
    /\\ size = count(array1d(regions), region)
    /\\ island_sum = conditional_sum_f(array1d(grid), array1d(regions), region)
    /\\ prod_val = size * island_sum
);

predicate nurikabe_seen_waterway_cells_p(
	array[int] of var int: arr1, 
	array[int] of var int: arr2, 
	array[int] of var int: arr3, 
	array[int] of var int: arr4,
    var int: nurikabe_var,
	var int: cell_var,
) = (
    % count seen water cells plus itself (also water)
    count_seen_orth_directions_f(arr1, arr2, arr3, arr4, 0) + 1 == cell_var /\\
    nurikabe_var == 0 % water cell
);

predicate nurikabe_island_size_cell_p(
    array[int, int] of var int: regions,
    var int: region,
    var int: cell_value
) = (
    region != 0    % is island and not water
    /\\ cell_value = count(array1d(regions), region)
);

`+`
predicate suguru_regions_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: regions
) = let {
    % 0-indexing arrays!!!! 
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    set of int: ids = 1..g_size;
    set of int: time = 1..g_size;
    array[rows, cols] of var time: when;
    array[rows, cols] of var int: same_before;
    array[ids] of var 0..g_size: size;
} in (
    % Each cell contains the a number less or equal to the region's size.
    forall (r in rows, c in cols) (
        grid[r, c] <= size[regions[r, c]]
    )
    % Each region's size is the number of cells in that region.
    /\\ forall (id in ids) (
        size[id] = sum (r in rows, c in cols) (bool2int(regions[r, c] = id))
    )

    % Each region of size N must have N in it
    /\\ forall (id in ids)(
        size[id] > 0 -> exists(r in rows, c in cols)(
            regions[r,c] == id /\\ grid[r,c] == size[id]
        )
    )
    
    % Optimisation: the "when" label is actually the distance of a cell in a
    % region from the region "root".  This distance cannot be larger than the size
    % of the region.
    /\\ forall (r in rows, c in cols) (
        when[r, c] <= size[regions[r, c]]
    )
    
    % Optimisation: fix unambiguous "roots" at time 1, the id of the
    % region will be the 'index' of the first element of that region
    /\\ same_before_p(regions, same_before) 
    /\\ forall (r in rows, c in cols where grid[r, c] != 0) (
        if same_before[r,c] = 0 then
            when[r,c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1
        else
            true
        endif
    )

    /\\ floodfill_p(regions, when)

    /\\ forall(r in rows, c in cols where when[r, c] == 1)(
        regions[r, c] = (r) * n_cols + c + 1
    )

    % Symmetry breaking: canonical numbering of regions
    /\\ forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
    )
);

predicate chaos_construction_suguru_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);  
} in (
    antiking_p(grid)
    /\\ suguru_regions_p(grid, regions)
    % digits in the same region are different
    /\\ forall(r in rows, c in cols)(
        forall(r2 in rows, c2 in cols where is_after(r, c, r2, c2))(
            regions[r,c] == regions[r2,c2] -> grid[r,c] != grid[r2,c2]
        )
    )
);

`+`predicate connect_four_draw_p(
    array[int, int] of var int: grid
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: max_r = max(rows);
    int: min_r = min(rows);
    int: max_c = max(cols);
    int: min_c = min(cols);
} in (
    % all cells filled
    forall(r in rows, c in cols)(
        grid[r,c] != 0
    )

    % same number of yellow and red discs
    /\\ count(array1d(grid), 1) == count(array1d(grid), 2)

    % no four in a line in rows
    /\\ forall(r in rows, c in cols where c <= max_c-3)(
        not all_equal([grid[r,c], grid[r,c+1], grid[r,c+2], grid[r,c+3]])
    )
    
    % no four in a line in cols
    /\\ forall(r in rows, c in cols where r <= max_r-3)(
        not all_equal([grid[r,c], grid[r+1,c], grid[r+2,c], grid[r+3,c]])
    )

    % no four in a line in positive diagonals
    /\\ forall(c in cols where c <= max_c-3)(
        forall(r in rows where r <= max_r-3)(
            not all_equal([grid[r,c], grid[r+1,c+1], grid[r+2,c+2], grid[r+3,c+3]])
        )          
    )

    % no four in a line in negative diagonals
    /\\ forall(c in cols where c >= min_c+3)(
        forall(r in rows where r <= max_r-3)(
            not all_equal([grid[r,c], grid[r+1,c-1], grid[r+2,c-2], grid[r+3,c-3]])
        )          
    )
);

predicate connect_four_adjacent_reds_different_parity_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    % adjacent horizontally
    forall(r in rows, c in cols where c<max(cols))(
        regions[r,c] == 1 /\\ regions[r, c+1] == 1 -> different_parity_p(grid[r,c], grid[r,c+1])
    )

    % adjacent vertically
    /\\ forall(r in rows, c in cols where r<max(rows))(
        regions[r,c] == 1 /\\ regions[r+1, c] == 1 -> different_parity_p(grid[r,c], grid[r+1,c])
    )
);

predicate connect_four_adjacent_yellows_difference_at_least_x_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
    var int: val
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    % adjacent horizontally
    forall(r in rows, c in cols where c<max(cols))(
        regions[r,c] == 2 /\\ regions[r, c+1] == 2 -> abs(grid[r,c] - grid[r,c+1]) >= val
    )

    % adjacent vertically
    /\\ forall(r in rows, c in cols where r<max(rows))(
        regions[r,c] == 2 /\\ regions[r+1, c] == 2 -> abs(grid[r,c] - grid[r+1,c]) >= val
    )
);

predicate connect_four_red_p(
    var 0..2: cell
) = cell == 1;

predicate connect_four_yellow_p(
    var 0..2: cell
) = cell == 2;

`+`predicate norinori_p(
    array[int, int] of var int: regions,
    array[int, int] of var 0..1: shading
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);    
} in (
    assert(index_sets_agree(regions, shading), "regions and shading must have the same indexes.")
    % Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).
    /\\ forall(r in rows, c in cols)(
        % if a cell is shaded it has exactly 1 shaded neighbour (is part of a domino)
        shading[r,c] = 1 -> sum(
          [ shading[idx.1, idx.2] | idx in orth_adjacent_idxs(r, c) where in_bounds_2d(idx.1, idx.2, shading) ]
        ) == 1
    )
);

predicate norinori_star_battle_not_on_shaded_p(
    array[int, int] of var 0..1: shading,
    array[int, int] of var 0..1: star_battle_grid
) = let {
    set of int: rows = index_set_1of2(shading);
    set of int: cols = index_set_2of2(shading);    
} in (
    assert(index_sets_agree(shading, star_battle_grid), "shading and star_battle_grid must have the same indexes.")
    /\\ forall(r in rows, c in cols)(
        shading[r,c] == 1 -> star_battle_grid[r,c] == 0
    )
);

`+`predicate shikaku_p(
    array[int, int] of var int: shikaku_grid,
    array[int, int] of var int: shikaku_width,
    array[int, int] of var int: shikaku_height
) = let {
    set of int: rows = index_set_1of2(shikaku_grid),
    set of int: cols = index_set_2of2(shikaku_grid),
    int: min_r = min(rows);
    int: min_c = min(cols);
    int: max_r = max(rows);
    int: max_c = max(cols);
    int: n_rows = length(rows);
    int: n_cols = length(cols);
    int: g_size = n_rows * n_cols;
    array[int] of int: reg_idxs = [i | i in 0..(g_size)];
    array[rows, cols] of var rows: min_row,
    array[rows, cols] of var rows: max_row,
    array[rows, cols] of var cols: min_col,
    array[rows, cols] of var cols: max_col,
} in (
    forall(r in rows, c in cols) (
        shikaku_grid[r, c] >= 0 /\\
        shikaku_grid[r, c] <= g_size
    )
    % order regions lexicographically
    % /\\ value_precede_chain(reg_idxs, array1d(shikaku_grid))
    /\\ forall(r1 in rows, c1 in cols, r2 in rows, c2 in cols where is_after(r1,c1,r2,c2))(
        shikaku_grid[r1, c1] == shikaku_grid[r2, c2] -> (
            min_row[r1,c1] == min_row[r2,c2] /\\
            min_col[r1,c1] == min_col[r2,c2] /\\
            max_row[r1,c1] == max_row[r2,c2] /\\
            max_col[r1,c1] == max_col[r2,c2] /\\
            min_row[r1,c1] <= r2 /\\
            min_col[r1,c1] <= c2 /\\
            max_row[r1,c1] >= r1 /\\
            max_col[r1,c1] >= c1 /\\
            shikaku_width[r1,c1] == shikaku_width[r2,c2] /\\
            shikaku_height[r1,c1] == shikaku_height[r2,c2]
        )
    )
    % first cell
    /\\ shikaku_grid[min_r, min_c] = (min_r * n_cols + min_c + 1)
    % first row
    /\\ forall(c in cols where c > min_c)(
        shikaku_grid[min_r, c] != shikaku_grid[min_r, c-1] -> (
            min_row[min_r, c] == min_r /\\ 
            min_col[min_r, c] = c /\\
            shikaku_grid[min_r, c] = (min_r * n_cols + c + 1)
        )
    )
    % first col
    /\\ forall(r in rows where r > min_r)(
        shikaku_grid[r, min_c] != shikaku_grid[r-1, min_c] -> (
            min_row[r, min_c] == r /\\ 
            min_col[r, min_c] = min_c /\\
            shikaku_grid[r, min_c] = (r * n_cols + min_c + 1)
        )
    )
    % rest of the grid, min row and col
    /\\ forall(r in rows, c in cols where r > min_r /\\ c > min_c)(
        (shikaku_grid[r, c] != shikaku_grid[r-1, c] -> min_row[r, c] == r) /\\
        (shikaku_grid[r, c] != shikaku_grid[r, c-1] -> min_col[r, c] = c) /\\
        (shikaku_grid[r, c] != shikaku_grid[r-1, c] /\\ shikaku_grid[r, c] != shikaku_grid[r, c-1] -> shikaku_grid[r, c] = (r * n_cols + c + 1))
    )
    % rest of the grid, max row and col
    /\\ forall(r in rows, c in cols where r < max_r /\\ c < max_c)(
        (shikaku_grid[r, c] != shikaku_grid[r+1, c] -> max_row[r, c] == r) /\\
        (shikaku_grid[r, c] != shikaku_grid[r, c+1] -> max_col[r, c] = c)
    )
    % All cells within the rectangle are part of the region
    /\\ forall(r1 in rows, c1 in cols, r2 in rows, c2 in cols) (
        (r2 >= min_row[r1,c1] /\\ r2 <= max_row[r1,c1] /\\
            c2 >= min_col[r1,c1] /\\ c2 <= max_col[r1,c1]) 
        -> (shikaku_grid[r2,c2] == shikaku_grid[r1,c1])
    )
    % regions width and height
    /\\ forall(r in rows, c in cols)(
        shikaku_height[r,c] = max_row[r,c] - min_row[r,c] + 1 /\\
        shikaku_width[r,c] = max_col[r,c] - min_col[r,c] + 1
    )
);

predicate shikaku_no_repeats_in_regions_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, regions), "grid and regions must have the same indexes")
    /\\ forall(r in rows, c in cols)(
        forall(r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
            regions[r,c] == regions[r2,c2] -> grid[r,c] != grid[r2,c2]
        )
    )
);

predicate shikaku_region_size_p(
    array[int, int] of var int: shikaku_grid,
    var int: shikaku_region, 
    var int: size,
    var int: width,
    var int: height    
) = (
    count(array1d(shikaku_grid), shikaku_region) == size /\\
    size == width * height
);

predicate shikaku_each_region_contains_one_circle_p(
    array[int, int] of var int: regions,
    array[int] of var int: circles,
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    forall(r in rows, c in cols)(
        regions[r,c] in circles
    )
);

predicate shikaku_region_sum_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions,
    var int: region_var,
    var int: sum_var
) = (
    assert(index_sets_agree(grid, regions), "grid and regions must have the same indexes.")
    /\\ conditional_sum_f(array1d(grid), array1d(regions), region_var) == sum_var
);

`}function D8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${Oe(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function Fp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new Fk(t),[o,a]=[n.nRows,n.nCols],l=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(S8());let d=`1..${Math.max(o,a)}`;const g=t.elementsDict,h=!!g.get(f.FILLOMINO),v=!!g.get(f.HEXED_SUDOKU);return h?d=`1..${l}`:v?r=[...St.range(1,16)]:r&&(d="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${d};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),zk(i,n),i.add(D8(t)),i.add(cM(t)),i.add(uM(t)),i.add(N8(t,i)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Gh=encodeURIComponent("4.4.2");let yr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ri=[];let Tu;function vs(){if(!Tu){const e=`importScripts(${JSON.stringify(yr.workerURL)});`;Tu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Tu);t.postMessage({wasmURL:yr.wasmURL?yr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Gh}`,yr.workerURL).toString(),dataURL:yr.dataURL?yr.dataURL.toString():new URL(`./minizinc.data?version=${Gh}`,yr.workerURL).toString()}),Ri.push({worker:t,runCount:0})}function Pp(){for(;Ri.length<yr.numWorkers;)vs()}async function R8(t){if(yr={...yr,...t},Ri.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Pp(),await Promise.race(Ri.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class f_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new f_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Pp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:l}=Ri.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:l+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),l=[];o.onmessage=u=>{switch(u.data.type){case"error":l.push(u.data);break;case"exit":a<10?Ri.push({worker:o,runCount:a}):(o.terminate(),vs()),n(l)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),l=[];let u=null;o.onmessage=d=>{switch(d.data.type){case"error":l.push(d.data);break;case"interface":u=d.data;break;case"exit":a<10?Ri.push({worker:o,runCount:a}):(o.terminate(),vs()),d.data.code===0?n(u):r(l)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);vs();let l={},u=!1,d=null;return a.onmessage=g=>{if(l[g.data.type])for(const h of l[g.data.type])h(g.data);switch(g.data.type){case"exit":a.terminate(),u=!0,l={};break;case"error":d||(d=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),l.exit)for(const g of l.exit)g({type:"exit",code:null});l={}}},on(g,h){l[g]?l[g].add(h):l[g]=new Set([h])},off(g,h){l[g]&&l[g].delete(h)},then(g,h){const v=m=>{if(m.code===0)g(m.outputFiles[i]);else{const E=d?{message:d.message,...m}:m;if(!h)throw E;h(E)}};l.exit?l.exit.add(v):l.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);vs();let o=null,a={},l=!1,u=null,d={},g="UNKNOWN";return i.onmessage=h=>{if(a[h.data.type])for(const v of a[h.data.type])v(h.data);switch(h.data.type){case"exit":i.terminate(),l=!0,a={};break;case"error":o||(o=h.data);break;case"statistics":d={...d,...h.data.statistics};break;case"solution":u=h.data,g="SATISFIED";break;case"status":g=h.data.status}},{isRunning:()=>!l,cancel(){if(!l){if(l=!0,i.terminate(),a.exit)for(const h of a.exit)h({type:"exit",code:null});a={}}},on(h,v){a[h]?a[h].add(v):a[h]=new Set([v])},off(h,v){a[h]&&a[h].delete(v)},then(h,v){const m=E=>{if(E.code===0)h({status:g,solution:u,statistics:d});else{const I=o?{message:o.message,...E}:E;if(!v)throw I;v(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var T8=ce('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function k8(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Xr,"$puzzleMetaStore",n);let i=M(e,"showModal",12,!1);function o(h,v,m){var E=document.createElement("a"),I=new Blob([h],{type:m});E.href=URL.createObjectURL(I),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function a(){const h=xe(zs);return Fp(h).model_str}function l(){const h=a();navigator.clipboard.writeText(h)}function u(){const h=a(),v=kh(h);navigator.clipboard.writeText(v)}function d(){const h=ul(r()),v=a();o(v,`${h}.mzn`,"text/plain")}function g(){const h=ul(r()),v=a(),m=kh(v);o(m,`${h}.mzn`,"text/plain")}fe(),qr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(h){i(h)},children:(h,v)=>{var m=T8(),E=K(m),I=$(E,2),b=$(I,2),w=$(b,2),A=$(w,2),T=$(K(A));x(T,"href","https://play.minizinc.dev/"),di(),H(A),H(m),De("click",E,l),De("click",I,u),De("click",b,d),De("click",w,g),N(h,m)},$$slots:{default:!0},$$legacy:!0}),le()}function Wo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const l=t[a];for(let u=0;u<l.length;u++){const d=e.getCell(a,u);if(!d)continue;const g=Number(l[u]),h=n.get(g);h!==void 0&&(r.push(d),i.push([h]))}}const o=Ul(r,i);vo(o)}function M8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];i.push(E),a(v,m,t[v][m])}function a(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,i[i.length-1].push([v,m]),a(v+1,m,E),a(v-1,m,E),a(v,m+1,E),a(v,m-1,E))}const l=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,I]of v)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+b,T=I+w;if(m.some(([U,P])=>U===A&&P===T))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(l[v].add(m),l[m].add(v));const d=[1,4,7,9],g=new Array(i.length).fill(0);function h(v,m){for(const E of l[v])if(g[E]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of d)if(h(v,m)){g[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,E]of i[v])o[m][E]=g[v];return o}function U8(t,e){const n=e.grid,i=!!e.elementsDict.get(f.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const a=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=n.getCell(d,h);if(!v||v.given||i&&!v.given&&v.value===null)continue;const m=g[h];a.push(v),l.push(m)}}const u=gp(a,l);vo(u)}function G8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Wo(o,e,r);return}}}function $8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Wo(o,e,r);return}}}function F8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const l=n[a];for(let u=0;u<l.length;u++){const d=e.getCell(a,u);if(!d)continue;r.push(d);const g=l[u];i.push([g])}}const o=Ul(r,i);vo(o)}function P8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Wo(n,e,new Map([[0,4],[1,7],[2,9]]))}function z8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Wo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function H8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Wo(n,e,new Map([[1,7],[2,4],[3,9]]))}function W8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Wo(n,e,new Map([[1,7],[2,8]]))}function B8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],l=3,u=[];for(let g=0;g<i.length;g++){const h=i[g];for(let v=0;v<h.length-1;v++){const m=e.getCell(g,v),E=e.getCell(g,v+1);if(!m||!E)continue;const I=h[v],b=h[v+1];if(I===b)continue;const w={colorId:l,p1:{r:g,c:v+1},p2:{r:g+1,c:v+1}};u.push(w)}}for(let g=0;g<a;g++)for(let h=0;h<o-1;h++){const v=e.getCell(h,g),m=e.getCell(h+1,g);if(!v||!m)continue;const E=i[h][g],I=i[h+1][g];if(E===I)continue;const b={colorId:l,p1:{r:h+1,c:g},p2:{r:h+1,c:g+1}};u.push(b)}const d=ws(u);Lr(d);return}}function Y8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(g)for(const h of e.getOrthogonallyAdjacentCells(g)){if(!h||!(h.r>g.r||h.c>g.c))continue;const v=i[g.r][g.c],m=i[h.r][h.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:h.r+.5,c:h.c+.5}};o.push(E)}}}const a=ws(o);Lr(a);return}}function j8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=M8(i);if(!o)return;const a=[],l=[];for(let d=0;d<o.length;d++){const g=o[d];for(let h=0;h<g.length;h++){const v=e.getCell(d,h);if(!v)continue;a.push(v);const m=g[h];l.push([m])}}const u=Ul(a,l);vo(u);return}}function K8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const g=e.getCell(l,d);if(!g)continue;const h=i[g.r][g.c];if(h===0)continue;const m={colorId:h===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};o.push(m)}}const a=xR(o);Lr(a);return}}function V8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let l=0;l<n.length;l++){if(!n[l])continue;const d=r[l],[g,h]=d,[v,m]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols],[E,I]=[Math.floor((h-1)/i.nCols),(h-1)%i.nCols];if(!Us({r:v,c:m},{r:E,c:I}))continue;const A={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(A)}const a=ws(o);Lr(a)}function X8(t,e){const n=e.puzzle,r=n.grid;Lr(jd()),U8(t,n),F8(t,r),B8(t,r),P8(t,r),z8(t,r),Y8(t,r),$8(t,r),j8(t,r),G8(t,r),K8(t,r),H8(t,r),V8(t,e),W8(t,r)}function q8(){const{subscribe:t,set:e}=Rt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var Z8=ce('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function Q8(t,e){ae(e,!1);const n=Xe(),r=()=>pe(zs,"$puzzleStore",n),i=()=>pe(fn,"$gridStore",n),o=()=>pe(w,"$timer",n),a=L(),l=L(),u=L(),d=L();let g=L(!0),h=L(!1),v=L(null),m=L(100),E=L("100"),I=L(null),b=L("IDLE");const w=q8();function A(G){return G===null?"":String(G)}function T(G){const te=Math.floor(G/6e4),ie=Math.floor(G%6e4/1e3),oe=Math.floor(G%1e3/100),ue=ie.toString().padStart(2,"0");return`${te}:${ue}.${oe}`}function U(){O(h,!0)}function P(G){const te=parseInt(G);typeof te=="number"&&te>=1&&O(m,te)}async function Y(){O(I,0),O(b,"SOLVING...");const G=new f_;cp();const te=Fp(_(a));G.addFile("test.mzn",te.model_str),w.reset(),w.start(),O(v,G.solve({options:{solver:"chuffed","num-solutions":_(m)}})),_(v).on("solution",ie=>{const oe=ie.output.json;ie.type==="solution"&&_(I)!==null&&O(I,_(I)+1),X8(oe,te)}),_(v).on("error",ie=>{O(u,"Solve"),O(b,"ERROR"),console.log(ie.message),w.stop(),_(v)&&_(v).cancel()}),_(v).on("warning",ie=>{O(b,"WARNING"),console.log(ie.message)}),_(v).then(ie=>{O(b,ie.status),O(u,"Solve"),w.stop()})}function k(){_(v)===null||!_(v).isRunning()?Y():_(v)!==null&&_(v).isRunning()&&(O(b,"IDLE"),O(u,"Solve"),w.stop(),_(v).cancel())}D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(l,i())}),D(()=>{},()=>{O(u,"Solve")}),D(()=>o(),()=>{O(d,o())}),D(()=>_(v),()=>{_(v)&&(_(v)!==null&&_(v).isRunning()?O(u,"Stop"):O(u,"Solve"))}),ye(),fe(),kl(t,{get isOpen(){return _(g)},set isOpen(G){O(g,G)},$$slots:{"panel-header":(G,te)=>{Tl(G,{slot:"panel-header",title:"Solver",get isOpen(){return _(g)},set isOpen(ie){O(g,ie)},$$legacy:!0})},"panel-content":(G,te)=>{var ie=Z8(),oe=ne(ie),ue=$(oe,2);k8(ue,{get showModal(){return _(h)},set showModal(ft){O(h,ft)},$$legacy:!0});var be=$(ue,2),Z=K(be,!0);H(be);var Ee=$(be,2),we=K(Ee,!0);H(Ee);var Ne=$(Ee,2),Fe=K(Ne);En(Fe),x(Fe,"min",1),x(Fe,"max",200),x(Fe,"step",1),H(Ne);var Le=$(Ne,2),Me=K(Le,!0);ee(()=>ct(Me,`Solution Count: ${A(_(I))}`)),H(Le);var Ue=$(Le,2),at=K(Ue,!0);ee(()=>ct(at,`Elapsed Time: ${T(_(d))}`)),H(Ue);var _t=$(Ue,2),wt=K(_t,!0);H(_t),ee(()=>{ct(Z,_(u)),ct(we,`Max. Solutions: ${_(m)}`),ct(wt,`Status: ${_(b)}`)}),De("click",oe,U),De("click",be,k),er(Fe,()=>_(E),ft=>O(E,ft)),De("input",Fe,()=>P(_(E))),N(G,ie)}},$$legacy:!0}),le()}var J8=ce('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!></div></div>');function eP(t){var e=J8(),n=K(e);Sk(n);var r=$(n,2),i=K(r);Q8(i,{});var o=$(i,2);pT(o,{elementHandlers:Ht});var a=$(o,2);zT(a,{elementHandlers:Ht});var l=$(a,2);Rk(l,{}),H(r),H(e),N(t,e)}var tP=J('<path class="cursor svelte-zsq70u"></path>');function nP(t,e){ae(e,!1);const n=Xe(),r=()=>pe(en,"$toolStore",n),i=()=>pe(ki,"$selectionStore",n),o=L(),a=L(),l=.25;function u(g){if(!g)return"";const[h,v]=[g.c,g.r];return`M${h},${v}L${h+l},${v}L${h},${v+l}Z`}D(()=>r(),()=>{O(o,kd(r()))}),D(()=>i(),()=>{O(a,u(i().lastCell))}),ye(),fe();var d=tP();ee(()=>{x(d,"d",_(a)),x(d,"visibility",_(o)?"visible":"hidden")}),N(t,d),le()}var rP=J('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function iP(t,e){ae(e,!1);let n=M(e,"gridShape",8);fe();var r=rP(),i=K(r);x(i,"x",0),x(i,"y",0),H(r),ee(()=>{x(i,"width",n().nCols),x(i,"height",n().nRows)}),N(t,r),le()}var oP=J('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),sP=J('<g class="grid-lines"></g>');function aP(t,e){ae(e,!1);const n=Xe(),r=()=>pe(fn,"$gridStore",n),i=L();D(()=>r(),()=>{O(i,r().getAllCells())}),ye(),fe();var o=sP();Qe(o,5,()=>_(i),mt,(a,l)=>{var u=oP();x(u,"width",1),x(u,"height",1),ee(()=>{x(u,"x",_(l).c),x(u,"y",_(l).r)}),N(a,u)}),H(o),N(t,o),le()}function lP(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function cP(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=lP(r),o=i.length;for(let a=0;a<o;a++){const l=i[a%o],u=i[(a+1)%o],d=JSON.stringify(l),g=JSON.stringify(u);n(d,g)}}return e}function uP(t,e=0,n=!1){const r=[],i=cP(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[l,u]=a;let d=JSON.parse(l);const g=Array.from(u)[0];let h=JSON.parse(g),v=g;const m=[];do{const E=i.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new ke(d.c,d.r),b=new ke(h.c,h.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,T=null;for(const ue of E){const be=JSON.parse(ue),Z=new ke(be.c,be.r),Ee=b.subtract(I),we=Z.subtract(b),Ne=Ee.perpDotProduct(we);w<Ne!=n&&(w=Ne,T=be,A=ue)}if(n&&E.size>1&&o.add(v),T===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(v);const U=e*(h.c-d.c),P=e*(T.c-h.c),Y=e*(d.r-h.r),k=e*(h.r-T.r),G=k+w*P,te=U+w*Y,ie=new ke(h.c+G,h.r+te),oe=4;o.has(v)?(m.push(new ke(ie.x-oe*U,ie.y-oe*P)),m.push(new ke(ie.x-oe*Y,ie.y-oe*k))):m.push(ie),d=h,h=T,v=A}while(v!==g);r.push(m)}return r}function po(t,e=0,n=!1){return uP(t,e,n).map(o=>Bo(o,!0)).join("")}const dP=[new ke(-.5,-.5),new ke(.5,-.5),new ke(.5,.5),new ke(-.5,.5)];function _P(t,e,n=dP){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,l=t*a+o,u=(t+1)*a+o,d=l/(360/i),g=u/(360/i),h=Math.floor(d)%i,v=Math.ceil(d)%i,m=n[h].lerp(n[v],d%1),E=Math.floor(g)%i,I=Math.ceil(g)%i,b=n[E].lerp(n[I],g%1);r.push(m);for(let A=Math.ceil(d);A<=Math.floor(g);A++)r.push(n[A%i]);r.push(b);const w=new ke(0,0);return r.push(w),r}function zp(t,e,n=new ke(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,l=[];for(let u=0;u<e;u++){const d=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),h=n.add(new ke(d,g));l.push(h)}return l}function Bo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function fi(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(g=>new ke(g.x,g.y));if(r&&o.length>1){const g=o[o.length-1];for(let v=0;v<o.length-1;v++)if(g.equals(o[v])){o.push(o[v+1]);break}const h=o[0];for(let v=1;v<o.length;v++)if(h.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let g=o[1].subtract(o[0]);g=g.normalise(),g=g.scale(e),o[0]=o[0].add(g)}if(n){const g=o.length;let h=o[g-2].subtract(o[g-1]);h=h.normalise(),h=h.scale(n),o[g-1]=o[g-1].add(h)}}if(!i)return Bo(o);const a=o[0],l=["M",`${a.x},${a.y}`],u=o.length;for(let g=2;g<u;g++){const h=o[g-2],v=o[g-1],m=o[g];let E=h.subtract(v).normalise();E=E.scale(i),E=E.add(v);let I=m.subtract(v).normalise();I=I.scale(i),I=I.add(v),l.push(`L${E.x},${E.y} Q ${v.x},${v.y} ${I.x},${I.y}`)}const d=o[u-1];return l.push(`L${d.x},${d.y}`),l.join(" ")}function gl(t,e={}){const n=Kl(t);return fi(n,e)}function nr(t){return new ke(t.c+.5,t.r+.5)}function Kl(t){return t.map(n=>nr(n))}function fP(t){const e=Math.min(...t.map(a=>a.r)),n=Math.max(...t.map(a=>a.r)),r=Math.min(...t.map(a=>a.c)),i=Math.max(...t.map(a=>a.c));return{x:r,y:e,width:i+1,height:n+1}}const gP=[new ke(-.5,-.5),new ke(.5,-.5),new ke(.5,.5),new ke(-.5,.5),new ke(0,-.5),new ke(0,.5),new ke(-.5,0),new ke(.5,0)];function hP(t,e){const n=gP[t];return n.subtract(n.scale(e))}function Hp(t,e){const n=[new ke(t.c-e,t.r-e),new ke(t.c+e,t.r+e)],r=[new ke(t.c-e,t.r+e),new ke(t.c+e,t.r-e)];return[n,r].map(o=>Bo(o,!1)).join("")}const vP=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Vl(t,e="none"){return vP.get(t)||e}function pP(t,e,n){let r=[];function o(l,u){return l.map(d=>d.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new ke(-.12,-.32),new ke(0,-.4),new ke(.12,-.32)]:a=[new ke(-.12,-.4),new ke(0,-.32),new ke(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(l=>l.map(u=>{const d=new ke(n+.5,e+.5);return u.add(d)})),r}function g_(t,e){const n=[new ke(-t,0),new ke(0,0),new ke(0,t)],i={[We.NE]:0,[We.E]:Math.PI/4,[We.SE]:Math.PI/2,[We.S]:3*Math.PI/4,[We.SW]:Math.PI,[We.W]:5*Math.PI/4,[We.NW]:3*Math.PI/2,[We.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}function mP(t,e){const r=Gs(e),i=new ke(r.c,r.r).normalise().scale(.3),o=nr(t),a=o.subtract(i),l=o.add(i);return[a,l]}function EP(t,e){const r=mP(t,e);let i=g_(.2,e);i=i.map(u=>u.add(r[1]));const o=fi(r),a=fi(i);return o+a}function CP(t,e){const r=Gs(e),i=new ke(r.c,r.r),a=nr(t).add(i.scale(.4));return[a.subtract(i.normalise().scale(.2)),a]}function ku(t,e){const r=CP(t,e);let i=g_(.1,e);i=i.map(u=>u.add(r[1]));const o=fi(r),a=fi(i);return o+a}var bP=J('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),IP=J('<g class="regions-border"></g>');function wP(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Gn,"$cellsStore",n),i=L(),o=L();function a(u,d){return u.filter(v=>v.region===d).map(v=>({r:v.r,c:v.c}))}D(()=>r(),()=>{O(i,r())}),D(()=>_(i),()=>{O(o,new Set(_(i).map(u=>u.region).filter(u=>u!==null)))}),ye(),fe();var l=IP();Qe(l,5,()=>_(o),mt,(u,d)=>{var g=bP();ee(()=>x(g,"d",po(a(_(i),_(d)),0,!1))),ee(()=>x(g,"id",`region-${_(d)??""}`)),N(u,g)}),H(l),N(t,l),le()}var yP=J('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse"><rect></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function OP(t,e){ae(e,!1);const n=Xe(),r=()=>pe(ki,"$selectionStore",n),i=()=>pe(en,"$toolStore",n),o=L(),a=L(),l=L(),u=L();let d=M(e,"gridShape",8);const g=.06,h=.05,v="#080808",m="#b2b2b2";D(()=>r(),()=>{O(o,r().cells)}),D(()=>_(o),()=>{O(a,po(_(o),0))}),D(()=>_(o),()=>{O(l,po(_(o),g))}),D(()=>i(),()=>{O(u,kd(i()))}),ye(),fe();var E=yP(),I=K(E),b=K(I);x(b,"stdDeviation",h),di(),H(I);var w=$(I);x(w,"x",0),x(w,"y",0);var A=K(w);x(A,"x",0),x(A,"y",0),x(A,"fill",m);var T=$(A);x(T,"fill",v),H(w);var U=$(w);H(E),ee(()=>{x(E,"visibility",_(u)?"visible":"hidden"),x(w,"width",d().nCols),x(w,"height",d().nRows),x(A,"width",d().nCols),x(A,"height",d().nRows),x(T,"d",_(l)),x(U,"d",_(a))}),N(t,E),le()}var AP=J('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function xP(t,e){ae(e,!1);const n=L(),r=L();let i=M(e,"grid",8);D(()=>X(i()),()=>{O(n,i().getAllCells().map(l=>({r:l.r,c:l.c})))}),D(()=>_(n),()=>{O(r,po(_(n),0))}),ye(),fe();var o=AP(),a=K(o);H(o),ee(()=>x(a,"d",_(r))),N(t,o),le()}function LP(t,e){const n=t.getRow(e.r);return new Set(n)}function NP(t,e){const n=t.getCol(e.c);return new Set(n)}function SP(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function DP(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function RP(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function TP(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function kP(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function MP(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function UP(t,e,n){let r=new Set;const o=n.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>h!==void 0),a=o.length,l=[o[0],o[a-1]],u=o.slice(1,a-1),d=l.findIndex(h=>h===e);if(d!==-1){if(r=new Set([...r,...u]),u.length>0){const h=l.filter((v,m)=>m!==d);r=new Set([...r,...h])}return r}return u.findIndex(h=>h===e)!==-1&&(r=new Set([...r,...l])),r}function GP(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function $P(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function FP(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(!!e.get(f.ANTIKNIGHT)&&(r=r.union(DP(t,i))),!!e.get(f.ANTIKING)&&(r=r.union(RP(t,i))),!!e.get(f.DISJOINT_GROUPS)&&(r=r.union(TP(t,i))),!!e.get(f.NEGATIVE_DIAGONAL)&&(r=r.union(MP(t,i))),!!e.get(f.POSITIVE_DIAGONAL)&&(r=r.union(kP(t,i)))),r}function Mu(t,e,n,r,i){if(e.tool_id!==r||!e.constraints)return i;for(const o of Object.values(e.constraints)){const a=$P(t,n,o);i=new Set([...i,...a])}return i}function PP(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;for(const o of e.values()){const a=o.tool_id;if(o.constraints){if(a===f.BETWEEN_LINE)for(const l of Object.values(o.constraints)){const u=UP(t,i,l);r=new Set([...r,...u])}else if(a===f.RENBAN_LINE)for(const l of Object.values(o.constraints)){const u=GP(t,i,l);r=new Set([...r,...u])}r=Mu(t,o,i,f.KILLER_CAGE,r),r=Mu(t,o,i,f.PARITY_BALANCE_CAGE,r),r=Mu(t,o,i,f.SPOTLIGHT_CAGE,r)}}return r}function Wp(t,e){let n=new Set;const r=t.grid,i=t.elementsDict;!i.get(f.SUDOKU_RULES_DO_NOT_APPLY)&&(n=new Set([...LP(r,e),...NP(r,e),...SP(r,e)])),n=new Set([...n,...FP(r,i,e)]),n=new Set([...n,...PP(r,i,e)]);const a=r.getCell(e.r,e.c);return a&&n.delete(a),n}function zP(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(Wp(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var HP=J('<tspan class="svelte-xct9ah"> </tspan>'),WP=J('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function BP(t,e){ae(e,!1);const n=L();let r=M(e,"cell",8),i=M(e,"seen_values",8);const o=.25;function a(g){return i().find(v=>v===g)!==void 0}D(()=>X(r()),()=>{O(n,nr({r:r().r,c:r().c}))}),ye(),fe();var l=Ce(),u=ne(l);{var d=g=>{var h=WP(),v=K(h);x(v,"font-size",o),Qe(v,5,()=>r().centerMarks,mt,(m,E)=>{var I=HP();const b=dt(()=>a(_(E)));ee(()=>Ot(I,"conflict",_(b)));var w=K(I,!0);H(I),ee(()=>ct(w,_(E))),N(m,I)}),H(v),H(h),ee(()=>{x(v,"x",_(n).x),x(v,"y",_(n).y),x(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(g,h)};Q(u,g=>{r().centerMarks.length&&g(d)})}N(t,l),le()}var YP=J('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),jP=J('<g class="corner-marks-group"></g>');function KP(t,e){ae(e,!1);let n=M(e,"cell",8),r=M(e,"seen_values",8);const i=.25,o=.28;function a(h){const v=h.cornerMarks.slice(0,8),m=nr({r:h.r,c:h.c});return v.map((E,I)=>{const b=hP(I,o);return{pos:m.add(b),value:E,idx:I}})}function l(h){return r().find(m=>m===h)!==void 0}fe();var u=Ce(),d=ne(u);{var g=h=>{var v=jP();Qe(v,5,()=>a(n()),mt,(m,E)=>{let I=()=>_(E).pos,b=()=>_(E).value;var w=YP();x(w,"font-size",i);const A=dt(()=>l(b()));var T=K(w,!0);H(w),ee(()=>{x(w,"x",I().x),x(w,"y",I().y),Ot(w,"conflict",_(A)),ct(T,b())}),N(m,w)}),H(v),N(h,v)};Q(d,h=>{n().cornerMarks.length&&h(g)})}N(t,u),le()}var VP=J('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),XP=J('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),qP=J("<!><!>",1),ZP=J('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function QP(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Wr,"$settingsStore",n),i=()=>pe(zs,"$puzzleStore",n),o=()=>pe(en,"$toolStore",n),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=M(e,"cell",8);const E=.8,I=400;function b(U,P){if(!U)return[];let k=[...Wp(_(g),P.toCoords())].map(G=>G.value).filter(G=>G!==null);return k=[...new Set(k)],k}D(()=>X(m()),()=>{O(a,m().value)}),D(()=>X(m()),()=>{O(l,m().given)}),D(()=>X(m()),()=>{O(u,nr({r:m().r,c:m().c}))}),D(()=>r(),()=>{O(d,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{O(g,i())}),D(()=>r(),()=>{O(h,r().showSolution)}),D(()=>(_(d),X(m())),()=>{O(v,b(_(d),m()))}),ye(),fe();var w=Ce(),A=ne(w);{var T=U=>{var P=ZP(),Y=K(P);{var k=te=>{var ie=Ce(),oe=ne(ie);{var ue=be=>{var Z=VP();x(Z,"font-size",E),x(Z,"font-weight",I);var Ee=K(Z,!0);H(Z),ee(()=>{x(Z,"x",_(u).x),x(Z,"y",_(u).y),ct(Ee,m().region)}),N(be,Z)};Q(oe,be=>{m().region!==null&&be(ue)})}N(te,ie)},G=te=>{var ie=Ce(),oe=ne(ie);{var ue=Z=>{var Ee=XP();x(Ee,"font-size",E),x(Ee,"font-weight",I);var we=K(Ee,!0);H(Ee),ee(()=>{x(Ee,"x",_(u).x),x(Ee,"y",_(u).y),Ot(Ee,"given",_(l)),ct(we,_(a))}),N(Z,Ee)},be=Z=>{var Ee=qP(),we=ne(Ee);KP(we,{get cell(){return m()},get seen_values(){return _(v)}});var Ne=$(we);BP(Ne,{get cell(){return m()},get seen_values(){return _(v)}}),N(Z,Ee)};Q(oe,Z=>{_(a)!==null?Z(ue):Z(be,!1)},!0)}N(te,ie)};Q(Y,te=>{o()===f.REGIONS?te(k):te(G,!1)})}H(P),ee(()=>Ot(P,"hide-given",m().given)),N(U,P)};Q(A,U=>{_(h)||U(T)})}N(t,w),le()}var JP=J("<path></path>"),e4=J('<g class="highlights-group"></g>');function t4(t,e){ae(e,!1);const n=Xe(),r=()=>pe(en,"$toolStore",n);let i=M(e,"cell",8);function o(d){const g=nr({r:i().r,c:i().c}),h=i().highlights.length;return i().highlights.map((m,E)=>{let I=_P(E,h);I=I.map(w=>w.add(g));const b=Bo(I,!0);return{colorId:m,d:b}})}fe();var a=Ce(),l=ne(a);{var u=d=>{var g=Ce(),h=ne(g);{var v=m=>{var E=e4();Qe(E,5,()=>o(i()),mt,(I,b)=>{let w=()=>_(b).colorId,A=()=>_(b).d;var T=JP();ee(()=>{Os(T,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),x(T,"d",A())}),N(I,T)}),H(E),N(m,E)};Q(h,m=>{i().highlights.length&&m(v)})}N(d,g)};Q(l,d=>{r()!==f.REGIONS&&d(u)})}N(t,a),le()}var n4=J('<path class="cell-marker" fill="none"></path>'),r4=J('<circle fill="none" opacity="0.9"></circle>');function i4(t,e){ae(e,!1);const n=L(),r=L();let i=M(e,"marker",8);const o=.3,a=.08;D(()=>X(i()),()=>{O(n,Hp(i(),o))}),D(()=>X(i()),()=>{O(r,Vl(i().colorId,"black"))}),ye(),fe();var l=Ce(),u=ne(l);{var d=h=>{var v=n4();x(v,"stroke-width",a),ee(()=>{x(v,"d",_(n)),x(v,"stroke",_(r))}),N(h,v)},g=h=>{var v=r4();x(v,"r",o),x(v,"stroke-width",a),ee(()=>{Os(v,`cell-marker color-${i().colorId??""}`),x(v,"cx",i().c),x(v,"cy",i().r),x(v,"stroke",_(r))}),N(h,v)};Q(u,h=>{i().marker==="X"?h(d):h(g,!1)})}N(t,l),le()}var o4=J('<g class="cell-markers"></g>');function s4(t,e){let n=M(e,"markers",8);var r=o4();Qe(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{i4(i,{get marker(){return _(o)}})}),H(r),N(t,r)}var a4=J('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function l4(t,e){ae(e,!1);const n=L();let r=M(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(g=>[new ke(g.p1.c,g.p1.r),new ke(g.p2.c,g.p2.r)]).flat()}function a(u){const d=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Vl(d,"black"):"darkred"}D(()=>X(r()),()=>{O(n,Bo(o(r().draftLine)))}),ye(),fe();var l=a4();ee(()=>x(l,"stroke",a(r()))),x(l,"stroke-width",i),x(l,"opacity",.5),ee(()=>x(l,"d",_(n))),N(t,l),le()}var c4=J('<path fill="none" opacity="0.9"></path>');function u4(t,e){ae(e,!1);const n=L(),r=L();let i=M(e,"marker",8);const o=.08,a=.04;D(()=>X(i()),()=>{O(n,Hp(i(),o))}),D(()=>X(i()),()=>{O(r,Vl(i().colorId,"black"))}),ye(),fe();var l=c4();x(l,"stroke-width",a),ee(()=>{x(l,"d",_(n)),Os(l,`edge-marker color-${i().colorId??""}`),x(l,"stroke",_(r))}),N(t,l),le()}var d4=J('<g class="edge-markers"></g>');function _4(t,e){let n=M(e,"markers",8);var r=d4();Qe(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{u4(i,{get marker(){return _(o)}})}),H(r),N(t,r)}var f4=J('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),g4=J('<g class="line-markers svelte-yha19m"></g>');function h4(t,e){ae(e,!1);let n=M(e,"lineMarkers",8);const r=.09;function i(l){return JSON.stringify(l)}function o(l){return Vl(l,"black")}fe();var a=g4();Qe(a,5,n,l=>i(l),(l,u)=>{var d=f4();x(d,"stroke-width",r),ee(()=>x(d,"stroke",o(_(u).colorId))),ee(()=>{x(d,"x1",_(u).p1.c),x(d,"y1",_(u).p1.r),x(d,"x2",_(u).p2.c),x(d,"y2",_(u).p2.r),Os(d,`line-marker color-${_(u).colorId??""} svelte-yha19m`)}),N(l,d)}),H(a),N(t,a),le()}var v4=J('<g class="pen-tool"><!><!><!><!></g>');function p4(t,e){ae(e,!1);const n=Xe(),r=()=>pe(dl,"$penToolStore",n),i=L();D(()=>r(),()=>{O(i,{draftLine:r().draftLine,mode:r().mode})}),ye(),fe();var o=v4(),a=K(o);h4(a,{get lineMarkers(){return r().lineMarkers}});var l=$(a);_4(l,{get markers(){return r().edgeMarkers}});var u=$(l);s4(u,{get markers(){return r().cellMarkers}});var d=$(u);l4(d,{get draftLineMarker(){return _(i)}}),H(o),N(t,o),le()}var m4=J("<path></path>");function Pr(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L();let g=M(e,"cells",8),h=M(e,"shape",8,Md);const v="square";D(()=>X(h()),()=>{O(n,h().inset??.06)}),D(()=>X(h()),()=>{O(r,h().stroke??"black")}),D(()=>X(h()),()=>{O(i,h().strokeWidth??.03)}),D(()=>X(h()),()=>{O(o,h().strokeDasharray??.08)}),D(()=>X(h()),()=>{O(a,h().fill??"none")}),D(()=>X(h()),()=>{O(l,h().connectDiag??!0)}),D(()=>(X(g()),_(n),_(l)),()=>{O(u,po(g(),_(n),_(l)))}),D(()=>X(h()),()=>{O(d,h().strokeLinejoin??"miter")}),ye(),fe();var m=m4();x(m,"stroke-linecap",v),ee(()=>{x(m,"d",_(u)),x(m,"stroke",_(r)),x(m,"stroke-width",_(i)),x(m,"fill",_(a)),x(m,"stroke-dasharray",_(o)),x(m,"stroke-linejoin",_(d))}),N(t,m),le()}var E4=J('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function C4(t,e){ae(e,!1);const n=Xe(),r=()=>pe(ki,"$selectionStore",n),i=()=>pe(Wr,"$settingsStore",n),o=()=>pe(zs,"$puzzleStore",n),a=()=>pe(en,"$toolStore",n),l=L(),u=L(),d=L(),g=L(),h={type:W.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(b,w){return b.length?zP(_(d),b):[]}D(()=>r(),()=>{O(l,r().cells)}),D(()=>i(),()=>{O(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{O(d,o())}),D(()=>a(),()=>{O(g,kd(a()))}),ye(),fe();var m=Ce(),E=ne(m);{var I=b=>{var w=E4(),A=K(w),T=dt(()=>v(_(l),_(d)));Pr(A,{get cells(){return _(T)},shape:h}),H(w),N(b,w)};Q(E,b=>{_(u)&&_(g)&&b(I)})}N(t,m),le()}function Xl(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...tp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function b4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Xl(r))}return new Set(e)}function I4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Xl(r))}return new Set(e)}function w4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Xl(r))}return new Set(e)}function y4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function O4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function A4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function x4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Xl(i);o.length&&e.push(...o)}return new Set(e)}function L4(t,e){let n=new Set;if(!e.get(f.SUDOKU_RULES_DO_NOT_APPLY)){const u=new Set([...b4(t),...I4(t),...w4(t)]);n=n.union(u)}return!!e.get(f.ANTIKNIGHT)&&(n=n.union(y4(t))),!!e.get(f.ANTIKING)&&(n=n.union(O4(t))),!!e.get(f.NONCONSECUTIVE)&&(n=n.union(A4(t))),!!e.get(f.DISJOINT_GROUPS)&&(n=n.union(x4(t))),n}function N4(t,e){return[...new Set([...L4(t,e)])]}var S4=J('<rect class="conflict svelte-4mp6ok"></rect>'),D4=J('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function R4(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Wr,"$settingsStore",n),i=()=>pe(fn,"$gridStore",n),o=()=>pe(st,"$elementsDictStore",n),a=()=>pe(Gn,"$cellsStore",n),l=L(),u=L(),d=L(),g=L();W.CAGE;function h(I){return N4(_(u),_(d)).map(A=>A.toCoords())}D(()=>r(),()=>{O(l,r().checkConflicts)}),D(()=>i(),()=>{O(u,i())}),D(()=>o(),()=>{O(d,o())}),D(()=>a(),()=>{O(g,a())}),ye(),fe();var v=Ce(),m=ne(v);{var E=I=>{var b=D4();Qe(b,5,()=>h(_(g)),mt,(w,A)=>{var T=S4();x(T,"width",1),x(T,"height",1),ee(()=>{x(T,"x",_(A).c),x(T,"y",_(A).r)}),N(w,T)}),H(b),N(I,b)};Q(m,I=>{_(l)&&I(E)})}N(t,v),le()}var T4=J('<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-10r4p2i"><rect class="fog-mask-white svelte-10r4p2i"></rect><g class="fog-mask-black svelte-10r4p2i"><use href="#fog-edge"></use></g></mask>'),k4=J('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge"><use class="fog-edge-1 svelte-10r4p2i" href="#fog-shape"></use><use class="fog-edge-2 svelte-10r4p2i" href="#fog-shape"></use><use class="fog-edge-3 svelte-10r4p2i" href="#fog-shape"></use><use class="fog-edge-4 svelte-10r4p2i" href="#fog-shape"></use><use href="#fog-shape"></use></g><!><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-10r4p2i"></rect><rect class="fog-mask-black svelte-10r4p2i" mask="url(#fog-mask-fog)"></rect></mask></defs>');function M4(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Xd,"$enableFogMaskStore",n),i=()=>pe(Rl,"$solutionStore",n),o=()=>pe(fn,"$gridStore",n),a=()=>pe(fp,"$fogLightsStore",n),l=()=>pe(A2,"$customFogClearingStore",n),u=()=>pe(Gn,"$cellsStore",n),d=L(),g=L(),h=L(),v=L(),m=L(),E=L(),I=L(),b=L();let w=M(e,"gridShape",8);function A(Le){const Me=[];if(!Le)return Me;for(const Ue of Object.entries(Le)){const at=Ue[1].cell,_t=_(h).getCell(at.r,at.c);_t&&Me.push(_t)}return Me}function T(Le){const Me=[];for(const Ue of Le)Ue.value!==null&&!Ue.given&&Me.push(Ue);return Me}function U(Le,Me){const Ue=[];if(Me)for(const at of Le){const _t=Me[at.r][at.c];_t!==null&&at.value===_t&&!at.given&&Ue.push(at)}return Ue}function P(Le,Me,Ue){const at=A(Me);let _t=new Set(Le);_t=_t.difference(new Set(at));let wt=T(Le);_(g)&&(wt=U(wt,_(g)));const ft=Ue==null?void 0:Ue.negative_constraints;if(ft){const Ct=new Set;!!ft[f.FOG_CLEARING_ITSELF]&&wt.forEach(Ie=>Ct.add(Ie)),!!ft[f.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS]&&wt.forEach(Ie=>_(h).getOrthogonallyAdjacentCells(Ie).forEach(Se=>Ct.add(Se))),!!ft[f.FOG_CLEARING_DIAGONAL_NEIGHBOURS]&&wt.forEach(Ie=>_(h).getDiagonallyAdjacentCells(Ie).forEach(Se=>Ct.add(Se))),!!ft[f.FOG_CLEARING_CONTAINING_ROW]&&wt.forEach(Ie=>_(h).getRow(Ie.r).forEach(Se=>Ct.add(Se))),!!ft[f.FOG_CLEARING_CONTAINING_COLUMN]&&wt.forEach(Ie=>_(h).getCol(Ie.c).forEach(Se=>Ct.add(Se))),!!ft[f.FOG_CLEARING_KNIGHTS_MOVE]&&wt.forEach(Ie=>_(h).getCellsByKnightMove(Ie).forEach(Se=>Ct.add(Se))),_t=_t.difference(Ct)}return[..._t].map(Ct=>Ct.toCoords())}D(()=>r(),()=>{O(d,!r())}),D(()=>i(),()=>{O(g,i())}),D(()=>o(),()=>{O(h,o())}),D(()=>a(),()=>{O(v,a())}),D(()=>l(),()=>{O(m,l())}),D(()=>u(),()=>{O(I,u())}),D(()=>(_(I),_(v),_(m)),()=>{O(b,P(_(I),_(v),_(m)))}),D(()=>_(b),()=>{O(E,po(_(b),0))}),ye(),fe();var Y=k4(),k=K(Y),G=K(k);H(k);var te=$(k),ie=K(te);x(ie,"stroke-width",.4);var oe=$(ie);x(oe,"stroke-width",.3);var ue=$(oe);x(ue,"stroke-width",.2);var be=$(ue);x(be,"stroke-width",.1),di(),H(te);var Z=$(te);{var Ee=Le=>{var Me=T4(),Ue=K(Me);x(Ue,"x",0),x(Ue,"y",0),di(),H(Me),ee(()=>{Ot(Me,"disabled",_(d)),x(Ue,"width",w().nCols),x(Ue,"height",w().nRows)}),N(Le,Me)};Q(Z,Le=>{_(d)||Le(Ee)})}var we=$(Z),Ne=K(we);x(Ne,"x",0),x(Ne,"y",0);var Fe=$(Ne);x(Fe,"x",0),x(Fe,"y",0),H(we),H(Y),ee(()=>{x(G,"d",_(E)),x(Ne,"width",w().nCols),x(Ne,"height",w().nRows),x(Fe,"width",w().nCols),x(Fe,"height",w().nRows)}),N(t,Y),le()}var U4=J('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function G4(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Xd,"$enableFogMaskStore",n),i=L();let o=M(e,"gridShape",8);D(()=>r(),()=>{O(i,r())}),ye(),fe();var a=U4(),l=K(a);x(l,"x",0),x(l,"y",0),H(a),ee(()=>{x(l,"width",o().nCols),x(l,"height",o().nRows)}),N(t,a),le()}var $4=J('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function F4(t,e){ae(e,!1);const n=L();let r=M(e,"r",8),i=M(e,"c",8),o=M(e,"val",8);const a=.8,l=400;D(()=>(X(r()),X(i())),()=>{O(n,nr({r:r(),c:i()}))}),ye(),fe();var u=Ce(),d=ne(u);{var g=h=>{var v=$4();x(v,"font-size",a),x(v,"font-weight",l);var m=K(v,!0);H(v),ee(()=>{x(v,"x",_(n).x),x(v,"y",_(n).y),ct(m,o())}),N(h,v)};Q(d,h=>{o()!==null&&h(g)})}N(t,u),le()}var P4=J('<g class="solution-layer"></g>');function z4(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Rl,"$solutionStore",n),i=()=>pe(Wr,"$settingsStore",n),o=()=>pe(Ps,"$gameModeStore",n),a=L(),l=L(),u=L();D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(l,i().showSolution)}),D(()=>o(),()=>{O(u,o())}),ye(),fe();var d=Ce(),g=ne(d);{var h=v=>{var m=P4();Qe(m,5,()=>_(a),mt,(E,I,b)=>{var w=Ce(),A=ne(w);Qe(A,1,()=>_(I),mt,(T,U,P)=>{F4(T,{r:b,c:P,get val(){return _(U)}})}),N(E,w)}),H(m),N(v,m)};Q(g,v=>{_(a)&&_(l)&&_(u)===Ui.SETTING&&v(h)})}N(t,d),le()}var H4=J('<g class="element-group"></g>'),W4=J("<g></g>");function Ka(t,e){let n=M(e,"elements",8),r=M(e,"g_name",8),i=M(e,"Component",8);var o=W4();Qe(o,5,n,mt,(a,l)=>{var u=Ce(),d=ne(u);{var g=h=>{var v=H4();Qe(v,5,()=>Object.entries(_(l).constraints),m=>m[0],(m,E)=>{i()(m,{get tool(){return _(E)[1]},get c_id(){return _(E)[0]}})}),H(v),ee(()=>x(v,"data-toolId",_(l).tool_id)),N(h,v)};Q(d,h=>{_(l).constraints&&h(g)})}N(a,u)}),H(o),ee(()=>Os(o,by(r()))),N(t,o)}var B4=J('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),Y4=J('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),j4=J('<g class="quadruple-text"><!></g>');function K4(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=M(e,"cornerTool",8);const u=l().cells,d=new ke(u[u.length-1].c,u[u.length-1].r),g=cn(l().toolId,Ht)??Yu;D(()=>X(l()),()=>{O(n,l().value)}),D(()=>X(l()),()=>{O(r,l().shape??g)}),D(()=>_(r),()=>{var E;O(i,((E=_(r))==null?void 0:E.fontSize)??.2)}),D(()=>_(r),()=>{var E;O(o,((E=_(r))==null?void 0:E.fontColor)??"black")}),D(()=>_(n),()=>{var E;O(a,_(n)?(E=_(n))==null?void 0:E.split(","):[])}),ye(),fe();var h=Ce(),v=ne(h);{var m=E=>{var I=j4(),b=K(I);{var w=T=>{var U=B4(),P=K(U,!0);ee(()=>ct(P,_(a).join(" "))),H(U),ee(()=>{x(U,"x",d.x),x(U,"y",d.y),x(U,"font-size",_(i)),x(U,"fill",_(o))}),N(T,U)},A=T=>{var U=Y4(),P=ne(U),Y=K(P,!0);ee(()=>ct(Y,_(a).slice(0,2).join(" "))),H(P);var k=$(P),G=K(k,!0);ee(()=>ct(G,_(a).slice(2).join(" "))),H(k),ee(()=>{x(P,"x",d.x),x(P,"y",d.y),x(P,"dy",-_(i)/2),x(P,"font-size",_(i)),x(P,"fill",_(o)),x(k,"x",d.x),x(k,"y",d.y),x(k,"dy",_(i)/2),x(k,"font-size",_(i)),x(k,"fill",_(o))}),N(T,U)};Q(b,T=>{_(a).length<=2?T(w):T(A,!1)})}H(I),ee(()=>x(I,"data-count",_(a).length)),N(E,I)};Q(v,E=>{_(n)&&E(m)})}N(t,h),le()}var V4=J("<circle></circle>");function pr(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L();let u=M(e,"x",8),d=M(e,"y",8),g=M(e,"shape",8);D(()=>X(g()),()=>{O(n,g().r??.35)}),D(()=>X(g()),()=>{O(r,g().stroke??"black")}),D(()=>X(g()),()=>{var v;O(i,(v=g())==null?void 0:v.opacity)}),D(()=>X(g()),()=>{O(o,g().strokeWidth??.02)}),D(()=>X(g()),()=>{O(a,g().fill??"none")}),D(()=>X(g()),()=>{O(l,g().strokeDasharray??0)}),ye(),fe();var h=V4();ee(()=>{x(h,"cx",u()),x(h,"cy",d()),x(h,"r",_(n)),x(h,"stroke",_(r)),x(h,"stroke-width",_(o)),x(h,"fill",_(a)),x(h,"opacity",_(i)),x(h,"stroke-dasharray",_(l))}),N(t,h),le()}var X4=J("<ellipse></ellipse>");function q4(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L();let d=M(e,"cx",8),g=M(e,"cy",8),h=M(e,"shape",8);D(()=>X(h()),()=>{O(n,h().width??.5)}),D(()=>X(h()),()=>{O(r,h().height??.5)}),D(()=>X(h()),()=>{O(i,h().stroke??"black")}),D(()=>X(h()),()=>{var m;O(o,(m=h())==null?void 0:m.opacity)}),D(()=>X(h()),()=>{O(a,h().strokeWidth??.02)}),D(()=>X(h()),()=>{O(l,h().fill??"none")}),D(()=>X(h()),()=>{O(u,h().angle??0)}),ye(),fe();var v=X4();ee(()=>{x(v,"cx",d()),x(v,"cy",g()),x(v,"rx",_(n)/2),x(v,"ry",_(r)/2),x(v,"stroke",_(i)),x(v,"stroke-width",_(a)),x(v,"fill",_(l)),x(v,"opacity",_(o)),x(v,"transform",`rotate(${_(u)}, ${d()}, ${g()} )`)}),N(t,v),le()}var Z4=J("<polygon></polygon>");function hl(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L();let g=M(e,"cx",8),h=M(e,"cy",8),v=M(e,"shape",8);D(()=>X(v()),()=>{O(n,v().n??3)}),D(()=>X(v()),()=>{O(r,v().r??.5)}),D(()=>(_(r),_(n),X(g()),X(h())),()=>{O(i,zp(_(r),_(n),new ke(g(),h())))}),D(()=>_(i),()=>{O(o,_(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>X(v()),()=>{O(a,v().stroke??"black")}),D(()=>X(v()),()=>{O(l,v().strokeWidth??.02)}),D(()=>X(v()),()=>{O(u,v().fill??"none")}),D(()=>X(v()),()=>{O(d,v().angle??0)}),ye(),fe();var m=Z4();ee(()=>{x(m,"points",_(o)),x(m,"stroke",_(a)),x(m,"stroke-width",_(l)),x(m,"fill",_(u)),x(m,"transform",`rotate(${_(d)}, ${g()}, ${h()} )`)}),N(t,m),le()}var Q4=J("<rect></rect>");function J4(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L();let d=M(e,"cx",8),g=M(e,"cy",8),h=M(e,"shape",8);D(()=>X(h()),()=>{O(n,h().width??.5)}),D(()=>X(h()),()=>{O(r,h().height??.5)}),D(()=>(X(d()),_(n)),()=>{O(i,d()-_(n)/2)}),D(()=>(X(g()),_(r)),()=>{O(o,g()-_(r)/2)}),D(()=>X(h()),()=>{O(a,h().stroke||"black")}),D(()=>X(h()),()=>{O(l,h().strokeWidth||.023)}),D(()=>X(h()),()=>{O(u,h().fill||"none")}),ye(),fe();var v=Q4();ee(()=>{x(v,"x",_(i)),x(v,"y",_(o)),x(v,"width",_(n)),x(v,"height",_(r)),x(v,"stroke",_(a)),x(v,"stroke-width",_(l)),x(v,"fill",_(u))}),N(t,v),le()}var e6=J("<rect></rect>");function t6(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=M(e,"cx",8),E=M(e,"cy",8),I=M(e,"shape",8);D(()=>X(I()),()=>{O(n,I().r??.5)}),D(()=>(X(m()),_(n)),()=>{O(r,m()-_(n))}),D(()=>(X(E()),_(n)),()=>{O(i,E()-_(n))}),D(()=>_(n),()=>{O(o,2*_(n))}),D(()=>_(n),()=>{O(a,2*_(n))}),D(()=>X(I()),()=>{O(l,I().stroke??"black")}),D(()=>X(I()),()=>{O(u,I().strokeWidth??.02)}),D(()=>X(I()),()=>{O(d,I().fill??"none")}),D(()=>X(I()),()=>{O(g,I().angle??0)}),D(()=>X(I()),()=>{O(h,I().strokeDasharray??0)}),D(()=>X(I()),()=>{O(v,I().opacity??1)}),ye(),fe();var b=e6();ee(()=>{x(b,"x",_(r)),x(b,"y",_(i)),x(b,"width",_(o)),x(b,"height",_(a)),x(b,"stroke",_(l)),x(b,"stroke-width",_(u)),x(b,"fill",_(d)),x(b,"transform",`rotate(${_(g)}, ${m()}, ${E()})`),x(b,"stroke-dasharray",_(h)),x(b,"opacity",_(v))}),N(t,b),le()}function xr(t,e){ae(e,!1);const n=L();let r=M(e,"cx",8),i=M(e,"cy",8),o=M(e,"shape",8);D(()=>(X(o()),W),()=>{var g;O(n,((g=o())==null?void 0:g.type)??W.CIRCLE)}),ye(),fe();var a=Ce(),l=ne(a);{var u=g=>{pr(g,{get x(){return r()},get y(){return i()},get shape(){return o()}})},d=g=>{var h=Ce(),v=ne(h);{var m=I=>{q4(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var b=Ce(),w=ne(b);{var A=U=>{t6(U,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},T=U=>{var P=Ce(),Y=ne(P);{var k=te=>{J4(te,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},G=te=>{var ie=Ce(),oe=ne(ie);{var ue=Z=>{hl(Z,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},be=Z=>{pr(Z,{get x(){return r()},get y(){return i()},get shape(){return o()}})};Q(oe,Z=>{_(n)===W.POLYGON?Z(ue):Z(be,!1)},!0)}N(te,ie)};Q(Y,te=>{_(n)===W.RECTANGLE?te(k):te(G,!1)},!0)}N(U,P)};Q(w,U=>{_(n)===W.SQUARE?U(A):U(T,!1)},!0)}N(I,b)};Q(v,I=>{_(n)===W.ELLIPSE?I(m):I(E,!1)},!0)}N(g,h)};Q(l,g=>{_(n)===W.CIRCLE?g(u):g(d,!1)})}N(t,a),le()}var n6=J('<text text-anchor="middle" dominant-baseline="central"> </text>'),r6=J('<g class="corner-tool"><!><!><!></g>');function Bp(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function I(T,U){return U===W.TEXT_ONLY?T.value?T.value:"-":T.value??""}D(()=>r(),()=>{var T;O(i,(T=r())==null?void 0:T.id)}),D(()=>(X(m()),Yu),()=>{O(o,cn(m().toolId,Ht)??Yu)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var T;O(l,((T=_(a))==null?void 0:T.type)??W.CIRCLE)}),D(()=>_(a),()=>{var T;O(u,((T=_(a))==null?void 0:T.fontSize)??.2)}),D(()=>_(a),()=>{var T;O(d,((T=_(a))==null?void 0:T.fontColor)??"black")}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(h,m().cells)}),D(()=>_(h),()=>{O(v,new ke(_(h)[_(h).length-1].c,_(h)[_(h).length-1].r))}),ye(),fe();var b=Ce(),w=ne(b);{var A=T=>{var U=r6(),P=K(U);{var Y=oe=>{xr(oe,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(g)}})};Q(P,oe=>{E()&&E()===_(i)&&oe(Y)})}var k=$(P);xr(k,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(a)}});var G=$(k);{var te=oe=>{K4(oe,{get cornerTool(){return m()}})},ie=oe=>{var ue=n6(),be=K(ue,!0);ee(()=>ct(be,I(m(),_(l)))),H(ue),ee(()=>{x(ue,"x",_(v).x),x(ue,"y",_(v).y),x(ue,"font-size",_(u)),x(ue,"fill",_(d))}),N(oe,ue)};Q(G,oe=>{m().toolId===f.QUADRUPLE?oe(te):oe(ie,!1)})}H(U),N(T,U)};Q(w,T=>{_(h).length===4&&T(A)})}N(t,b),le()}var i6=J('<g class="corner-tool"><!></g>');function o6(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ce(),o=ne(i);{var a=l=>{var u=i6(),d=K(u);Bp(d,{get tool(){return n()},get c_id(){return r()}}),H(u),ee(()=>x(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}N(t,i)}var s6=J('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function ys(t,e){ae(e,!1);const n=L();let r=M(e,"value",8,""),i=M(e,"fontSize",8,.2),o=M(e,"x",8),a=M(e,"y",8),l=M(e,"position",8,"TL"),u=M(e,"fontColor",8,"var(--text-primary-color)"),d=M(e,"fontWeight",8,400),g=L(null),h=L(null);function v(A,T,U){const P=["TL","TR"].includes(U),k=["TL","BL"].includes(U)?A+.05:A,G=T;return new ke(k,G)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}wy(()=>{if(!_(g)||!_(h))return;const A=_(g).getBBox();_(h).setAttribute("x",String(A.x)),_(h).setAttribute("y",String(A.y+A.height*.1)),_(h).setAttribute("width",String(A.width)),_(h).setAttribute("height",String(A.height*.8))}),D(()=>(X(o()),X(a()),X(l())),()=>{O(n,v(o(),a(),l()))}),ye(),fe();var I=Ce(),b=ne(I);{var w=A=>{var T=s6(),U=ne(T);Ti(U,k=>O(h,k),()=>_(h));var P=$(U);ee(()=>x(P,"text-anchor",m(l()))),ee(()=>x(P,"dominant-baseline",E(l())));var Y=K(P,!0);H(P),Ti(P,k=>O(g,k),()=>_(g)),ee(()=>{var k,G;x(P,"x",(k=_(n))==null?void 0:k.x),x(P,"y",(G=_(n))==null?void 0:G.y),x(P,"font-size",i()),x(P,"fill",u()),x(P,"font-weight",d()),ct(Y,r())}),N(A,T)};Q(b,A=>{r().length&&A(w)})}N(t,I),le()}var a6=J('<text text-anchor="middle" dominant-baseline="central"> </text>'),l6=J("<!><!><!>",1);function Yp(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function I(k,G){return G===W.TEXT_ONLY?k.value?k.value:"-":k.value??""}D(()=>r(),()=>{var k;O(i,(k=r())==null?void 0:k.id)}),D(()=>(X(m()),il),()=>{O(o,cn(m().toolId,Ht)??il)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>_(a),()=>{O(l,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(u,m().cell)}),D(()=>(_(a),W),()=>{var k;O(d,((k=_(a))==null?void 0:k.type)||W.CIRCLE)}),D(()=>_(a),()=>{var k;O(g,((k=_(a))==null?void 0:k.fontSize)??.2)}),D(()=>_(a),()=>{var k;O(h,((k=_(a))==null?void 0:k.fontColor)??"black")}),D(()=>_(u),()=>{O(v,_(u).r%1===.5&&_(u).c%1===.5)}),ye(),fe();var b=l6(),w=ne(b);{var A=k=>{xr(k,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(l)}})};Q(w,k=>{E()===_(i)&&k(A)})}var T=$(w);xr(T,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(a)}});var U=$(T);{var P=k=>{var G=dt(()=>I(m(),_(d))),te=dt(()=>Math.floor(_(u).c)),ie=dt(()=>Math.floor(_(u).r));ys(k,{get value(){return _(G)},get x(){return _(te)},get y(){return _(ie)},position:"TL",get fontColor(){return _(h)}})},Y=k=>{var G=a6(),te=K(G,!0);ee(()=>ct(te,I(m(),_(d)))),H(G),ee(()=>{x(G,"x",_(u).c),x(G,"y",_(u).r),x(G,"font-size",_(g)),x(G,"fill",_(h))}),N(k,G)};Q(U,k=>{_(v)?k(P):k(Y,!1)})}N(t,b),le()}var c6=J('<g class="center-corner-or-edge-tool"><!></g>');function u6(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ce(),o=ne(i);{var a=l=>{var u=c6(),d=K(u);Yp(d,{get tool(){return n()},get c_id(){return r()}}),H(u),ee(()=>x(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}N(t,i)}var d6=J('<rect stroke="none" fill="#5373ea80"></rect>'),_6=J('<rect stroke="none" fill="#5373ea66"></rect>'),f6=J('<path fill="none" stroke-linecap="round"></path><!>',1),g6=J('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function $h(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=()=>pe(fn,"$gridStore",n),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L(),m=L(),E=L(),I=L();let b=M(e,"tool",8),w=M(e,"c_id",8,void 0);const A=.03;function T(Z){return Z.value&&Z.value.length?Z.value:"-"}function U(Z,Ee){const we=Gs(Ee),Ne=new ke(we.c,we.r).scale(.5),Fe=nr(Z),Le=Fe.add(Ne.scale(.5)),Me=Fe.add(Ne.scale(.8));return[Le,Me]}function P(Z,Ee){const Ne=U(Z,Ee);let Fe=g_(.08,Ee);Fe=Fe.map(at=>at.add(Ne[1]));const Le=fi(Ne),Me=fi(Fe);return Le+Me}D(()=>r(),()=>{var Z;O(o,(Z=r())==null?void 0:Z.id)}),D(()=>X(b()),()=>{O(a,b().cell)}),D(()=>_(a),()=>{O(l,nr(_(a)))}),D(()=>(i(),X(b())),()=>{O(u,i().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),D(()=>(X(b()),sh),()=>{O(d,cn(b().toolId,Ht)??sh)}),D(()=>(X(b()),_(d)),()=>{O(g,b().shape??_(d))}),D(()=>_(g),()=>{var Z;O(h,((Z=_(g))==null?void 0:Z.fontSize)??.5)}),D(()=>_(g),()=>{var Z;O(v,((Z=_(g))==null?void 0:Z.fontColor)??"var(--text-primary-color)")}),D(()=>_(g),()=>{var Z;O(m,((Z=_(g))==null?void 0:Z.stroke)??"var(--text-primary-color)")}),D(()=>_(g),()=>{O(E,{..._(g),stroke:"var(--constraint-selected-color)",strokeWidth:A+.07})}),D(()=>(_(a),X(b())),()=>{O(I,P(_(a),b().direction))}),ye(),fe();var Y=g6(),k=K(Y);{var G=Z=>{var Ee=Ce(),we=ne(Ee);Qe(we,1,()=>_(u),mt,(Ne,Fe)=>{var Le=d6();x(Le,"width",1),x(Le,"height",1),ee(()=>{x(Le,"x",_(Fe).c),x(Le,"y",_(Fe).r)}),N(Ne,Le)}),N(Z,Ee)};Q(k,Z=>{w()===void 0&&Z(G)})}var te=$(k);{var ie=Z=>{var Ee=f6(),we=ne(Ee),Ne=$(we);Qe(Ne,1,()=>_(u),mt,(Fe,Le)=>{var Me=_6();x(Me,"width",1),x(Me,"height",1),ee(()=>{x(Me,"x",_(Le).c),x(Me,"y",_(Le).r)}),N(Fe,Me)}),ee(()=>{x(we,"d",_(I)),x(we,"stroke",_(E).stroke),x(we,"stroke-width",_(E).strokeWidth)}),N(Z,Ee)};Q(te,Z=>{w()&&w()===_(o)&&Z(ie)})}var oe=$(te);x(oe,"stroke-width",A);var ue=$(oe),be=K(ue,!0);ee(()=>ct(be,T(b()))),H(ue),H(Y),ee(()=>{x(oe,"d",_(I)),x(oe,"stroke",_(m)),x(ue,"x",_(l).x),x(ue,"y",_(l).y),x(ue,"font-size",_(h)),x(ue,"fill",_(v))}),N(t,Y),le()}var h6=J('<g class="outside-direction-tool"><!></g>'),v6=J('<g class="outside-direction-preview"><!></g>');function jp(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ce(),o=ne(i);{var a=u=>{var d=h6(),g=K(d);$h(g,{get tool(){return n()},get c_id(){return r()}}),H(d),ee(()=>x(d,"data-id",`${r()}`)),N(u,d)},l=u=>{var d=v6();x(d,"opacity",.5);var g=K(d);$h(g,{get tool(){return n()}}),H(d),N(u,d)};Q(o,u=>{r()!==void 0?u(a):u(l,!1)})}N(t,i)}var p6=J('<path fill="none"></path>');function ui(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L();let u=M(e,"linePoints",8),d=M(e,"shape",8,void 0);const g="round",h="round";D(()=>X(d()),()=>{var m;O(n,((m=d())==null?void 0:m.stroke)??"gray")}),D(()=>X(d()),()=>{var m;O(r,((m=d())==null?void 0:m.strokeWidth)??.1)}),D(()=>X(d()),()=>{var m;O(i,((m=d())==null?void 0:m.strokeDasharray)??0)}),D(()=>X(d()),()=>{var m;O(o,((m=d())==null?void 0:m.strokeDashoffset)??0)}),D(()=>X(d()),()=>{var m,E,I,b,w,A,T,U;O(a,{shortenHead:((E=(m=d())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=d())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((A=(w=d())==null?void 0:w.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((U=(T=d())==null?void 0:T.linePathOptions)==null?void 0:U.closeLoops)??!1})}),D(()=>(X(u()),_(a)),()=>{O(l,fi(u(),_(a)))}),ye(),fe();var v=p6();x(v,"stroke-linejoin",g),x(v,"stroke-linecap",h),ee(()=>{x(v,"d",_(l)),x(v,"stroke",_(n)),x(v,"stroke-width",_(r)),x(v,"stroke-dasharray",_(i)),x(v,"stroke-dashoffset",_(o))}),N(t,v),le()}var m6=ce("<!> <!> <!>",1);function E6(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=M(e,"linePoints",8),u=M(e,"shape",8);function d(b){const w=St.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}D(()=>X(l()),()=>{O(n,l().length)}),D(()=>(_(n),X(l())),()=>{O(r,_(n)>1&&l()[0].equals(l()[_(n)-1]))}),D(()=>(_(n),X(l())),()=>{O(i,_(n)>=0?l()[0]:void 0)}),D(()=>(_(n),X(l())),()=>{O(o,_(n)>=0?l()[_(n)-1]:void 0)}),D(()=>X(u()),()=>{O(a,d(u()))}),ye(),fe();var g=m6(),h=ne(g);ui(h,{get linePoints(){return l()},get shape(){return u()}});var v=$(h,2);{var m=b=>{pr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(a)}})};Q(v,b=>{!_(r)&&_(i)&&b(m)})}var E=$(v,2);{var I=b=>{pr(b,{get x(){return _(o).x},get y(){return _(o).y},get shape(){return _(a)}})};Q(E,b=>{!_(r)&&_(o)&&b(I)})}N(t,g),le()}var C6=J('<g class="corner-line-tool"><!></g>');function b6(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L();let a=M(e,"tool",8);const l=cn(a().toolId,Ht)??Ns;D(()=>(X(a()),ke),()=>{O(n,a().coords.map(v=>new ke(v.c,v.r)))}),D(()=>X(a()),()=>{O(r,a().shape??l)}),D(()=>(_(r),W),()=>{var v;O(i,((v=_(r))==null?void 0:v.type)||W.LINE)}),D(()=>_(r),()=>{var v;O(o,((v=_(r))==null?void 0:v.opacity)??1)}),ye(),fe();var u=C6(),d=K(u);{var g=v=>{E6(v,{get linePoints(){return _(n)},get shape(){return _(r)}})},h=v=>{ui(v,{get linePoints(){return _(n)},get shape(){return _(r)}})};Q(d,v=>{_(i)===W.MAZE_WALL?v(g):v(h,!1)})}H(u),ee(()=>x(u,"opacity",_(o))),N(t,u),le()}var I6=J('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Fh(t,e){ae(e,!1);const n=L(),r=L(),i=L();let o=M(e,"shape",8),a=M(e,"coords",8);const[l,u]=a(),d=u.c,g=l.c===u.c?u.c+1:u.c,h=u.r,v=l.r===u.r?u.r+1:u.r;D(()=>X(o()),()=>{O(n,o().stroke??"black")}),D(()=>X(o()),()=>{var E;O(r,(E=o())==null?void 0:E.opacity)}),D(()=>X(o()),()=>{O(i,o().strokeWidth??.02)}),ye(),fe();var m=I6();x(m,"x1",d),x(m,"x2",g),x(m,"y1",h),x(m,"y2",v),ee(()=>{x(m,"stroke",_(n)),x(m,"stroke-width",_(i)),x(m,"opacity",_(r))}),N(t,m),le()}var w6=J("<!><!>",1),y6=J("<!><!>",1),O6=J("<!><!>",1),A6=J("<!><!>",1),x6=J('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function Kp(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function I(U,P){return P===W.TEXT_ONLY?U.value?U.value:"-":U.value??""}function b(U){if(U!==f.EDGE_INEQUALITY&&U!==f.ONE_WAY_DOOR)return 0;const P=nr(_(h)[0]);return nr(_(h)[1]).subtract(P).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var U;O(i,(U=r())==null?void 0:U.id)}),D(()=>(X(m()),il),()=>{O(o,cn(m().toolId,Ht)??il)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var U;O(l,((U=_(a))==null?void 0:U.type)||W.CIRCLE)}),D(()=>_(a),()=>{var U;O(u,((U=_(a))==null?void 0:U.fontSize)??.2)}),D(()=>_(a),()=>{var U;O(d,((U=_(a))==null?void 0:U.fontColor)??"black")}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(h,m().cells)}),D(()=>_(h),()=>{O(v,_p(Kl(_(h))))}),ye(),fe();var w=Ce(),A=ne(w);{var T=U=>{var P=x6(),Y=ne(P);{var k=oe=>{var ue=w6(),be=ne(ue);{var Z=we=>{pr(we,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(g)}})};Q(be,we=>{E()&&E()===_(i)&&we(Z)})}var Ee=$(be);pr(Ee,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(a)}}),N(oe,ue)},G=oe=>{var ue=Ce(),be=ne(ue);{var Z=we=>{var Ne=y6(),Fe=ne(Ne);{var Le=Ue=>{pr(Ue,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(g)}})};Q(Fe,Ue=>{E()&&E()===_(i)&&Ue(Le)})}var Me=$(Fe);pr(Me,{get x(){return _(v).x},get y(){return _(v).y},get shape(){return _(a)}}),N(we,Ne)},Ee=we=>{var Ne=Ce(),Fe=ne(Ne);{var Le=Ue=>{var at=O6(),_t=ne(at);{var wt=xt=>{Fh(xt,{get coords(){return _(h)},get shape(){return _(g)}})};Q(_t,xt=>{E()&&E()===_(i)&&xt(wt)})}var ft=$(_t);Fh(ft,{get coords(){return _(h)},get shape(){return _(a)}}),N(Ue,at)},Me=Ue=>{var at=A6(),_t=ne(at);{var wt=xt=>{xr(xt,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(g)}})};Q(_t,xt=>{E()&&E()===_(i)&&xt(wt)})}var ft=$(_t);xr(ft,{get cx(){return _(v).x},get cy(){return _(v).y},get shape(){return _(a)}}),N(Ue,at)};Q(Fe,Ue=>{_(l)===W.BORDER_LINE?Ue(Le):Ue(Me,!1)},!0)}N(we,Ne)};Q(be,we=>{_(l)===W.TEXT_ONLY?we(Z):we(Ee,!1)},!0)}N(oe,ue)};Q(Y,oe=>{m().toolId===f.EDGE_INEQUALITY||m().toolId===f.ONE_WAY_DOOR?oe(k):oe(G,!1)})}var te=$(Y);ee(()=>x(te,"transform",`rotate(${b(m().toolId)}, ${_(v).x}, ${_(v).y} )`));var ie=K(te,!0);ee(()=>ct(ie,I(m(),_(l)))),H(te),ee(()=>{x(te,"x",_(v).x),x(te,"y",_(v).y),x(te,"font-size",_(u)),x(te,"fill",_(d))}),N(U,P)};Q(A,U=>{_(h).length===2&&U(T)})}N(t,w),le()}var L6=J('<g class="edge-tool"><!></g>');function N6(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ce(),o=ne(i);{var a=l=>{var u=L6(),d=K(u);Kp(d,{get tool(){return n()},get c_id(){return r()}}),H(u),ee(()=>x(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}N(t,i)}var S6=J('<path fill="none" stroke-linecap="round"></path>'),D6=J('<path fill="none" stroke-linecap="round"></path>'),R6=J('<path fill="none" stroke-linecap="round"></path>'),T6=J("<!><!><!>",1);function Ph(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L();let d=M(e,"tool",8),g=M(e,"c_id",8,void 0);D(()=>r(),()=>{var w;O(i,(w=r())==null?void 0:w.id)}),D(()=>(X(d()),oh),()=>{O(o,cn(d().toolId,Ht)??oh)}),D(()=>(X(d()),_(o)),()=>{O(a,d().shape??_(o))}),D(()=>_(a),()=>{O(l,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.03:.03})}),D(()=>_(a),()=>{O(u,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),ye(),fe();var h=T6(),v=ne(h);{var m=w=>{var A=Ce(),T=ne(A);Qe(T,1,()=>d().directions,mt,(U,P)=>{var Y=S6();ee(()=>x(Y,"d",ku(d().cell,_(P)))),ee(()=>{x(Y,"stroke",_(l).stroke),x(Y,"stroke-width",_(l).strokeWidth)}),N(U,Y)}),N(w,A)};Q(v,w=>{w(m)})}var E=$(v);{var I=w=>{var A=Ce(),T=ne(A);Qe(T,1,()=>d().directions,mt,(U,P)=>{var Y=D6();ee(()=>x(Y,"d",ku(d().cell,_(P)))),ee(()=>{x(Y,"stroke",_(u).stroke),x(Y,"stroke-width",_(u).strokeWidth)}),N(U,Y)}),N(w,A)};Q(E,w=>{g()&&g()===_(i)&&w(I)})}var b=$(E);Qe(b,1,()=>d().directions,mt,(w,A)=>{var T=R6();ee(()=>x(T,"d",ku(d().cell,_(A)))),ee(()=>{x(T,"stroke",_(a).stroke),x(T,"stroke-width",_(a).strokeWidth)}),N(w,T)}),N(t,h),le()}var k6=J('<g class="single-cell-multi-arrow-tool"><!></g>'),M6=J('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function Vp(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ce(),o=ne(i);{var a=u=>{var d=k6(),g=K(d);Ph(g,{get tool(){return n()},get c_id(){return r()}}),H(d),ee(()=>x(d,"data-id",`${r()}`)),N(u,d)},l=u=>{var d=M6();x(d,"opacity",.5);var g=K(d);Ph(g,{get tool(){return n()}}),H(d),N(u,d)};Q(o,u=>{r()!==void 0?u(a):u(l,!1)})}N(t,i)}var U6=J('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function G6(t){var e=U6(),n=K(e);x(n,"opacity",.5),H(e),N(t,e)}var $6=J('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function F6(t,e){ae(e,!1);const n=L();let r=M(e,"tool",8);M(e,"c_id",8,void 0),D(()=>X(r()),()=>{O(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),ye(),fe();var i=$6();ee(()=>x(i,"transform",`translate(${_(n).x} ${_(n).y})`)),N(t,i),le()}var P6=J('<g class="fog-lights-layer svelte-17myswq"></g>');function z6(t,e){ae(e,!1);const n=Xe(),r=()=>pe(en,"$toolStore",n),i=()=>pe(Xd,"$enableFogMaskStore",n),o=L(),a=L();let l=M(e,"element",8);D(()=>r(),()=>{O(o,r())}),D(()=>i(),()=>{O(a,!i())}),ye(),fe();var u=Ce(),d=ne(u);{var g=h=>{var v=P6();Qe(v,5,()=>Object.entries(l()),m=>m[0],(m,E)=>{F6(m,{get tool(){return _(E)[1]},get c_id(){return _(E)[0]}})}),H(v),ee(()=>Ot(v,"inactive",_(o)!==f.FOG_LIGHTS)),N(h,v)};Q(d,h=>{_(a)&&h(g)})}N(t,u),le()}var H6=J('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function ql(t,e){ae(e,!1);const n=L(),r=L(),i=L();let o=M(e,"cx",8),a=M(e,"cy",8),l=M(e,"c_id",8);D(()=>X(l()),()=>{O(n,document.getElementById(`c-${l()}`))}),D(()=>_(n),()=>{var h;O(r,(h=_(n))==null?void 0:h.getBBox())}),D(()=>_(r),()=>{O(i,_(r)?Math.max(_(r).width,_(r).height):void 0)}),ye();var u=Ce(),d=ne(u);{var g=h=>{var v=H6(),m=K(v);x(m,"stroke-width",.6),H(v),ee(()=>x(v,"transform",`translate(${o()}, ${a()}) scale(${_(i)*.6})`)),N(h,v)};Q(d,h=>{_(i)&&h(g)})}N(t,u),le()}var W6=J('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),B6=J('<g class="edge-tool-preview"><!></g>');function Y6(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=M(e,"tool_preview",8);D(()=>X(l()),()=>{O(n,l().tool)}),D(()=>X(l()),()=>{O(r,l().mode)}),D(()=>X(l()),()=>{O(i,l().match_id)}),D(()=>_(n),()=>{O(o,_(n).cells)}),D(()=>_(o),()=>{O(a,_p(Kl(_(o))))}),ye(),fe();var u=Ce(),d=ne(u);{var g=v=>{var m=W6();x(m,"opacity",.5);var E=K(m);ql(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),H(m),N(v,m)},h=v=>{var m=B6();x(m,"opacity",.5);var E=K(m);Kp(E,{get tool(){return _(n)}}),H(m),N(v,m)};Q(d,v=>{_(r)==="remove"&&_(i)?v(g):v(h,!1)})}N(t,u),le()}var j6=J('<g class="corner-tool-remove-preview"><!></g>'),K6=J('<g class="corner-tool-preview"><!></g>');function V6(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L();let l=M(e,"tool_preview",8);D(()=>X(l()),()=>{O(n,l().tool)}),D(()=>X(l()),()=>{O(r,l().mode)}),D(()=>X(l()),()=>{O(i,l().match_id)}),D(()=>_(n),()=>{O(o,_(n).cells)}),D(()=>_(o),()=>{O(a,new ke(_(o)[_(o).length-1].c,_(o)[_(o).length-1].r))}),ye(),fe();var u=Ce(),d=ne(u);{var g=v=>{var m=j6();x(m,"opacity",.5);var E=K(m);ql(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),H(m),N(v,m)},h=v=>{var m=K6();x(m,"opacity",.5);var E=K(m);Bp(E,{get tool(){return _(n)}}),H(m),N(v,m)};Q(d,v=>{_(r)==="remove"&&_(i)?v(g):v(h,!1)})}N(t,u),le()}var X6=J('<path fill="none" stroke-linecap="round"></path>'),q6=J('<path fill="none" stroke-linecap="round"></path>'),Z6=J('<!><!><path fill="none" stroke-linecap="round"></path>',1);function Xp(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L();let v=M(e,"tool",8),m=M(e,"c_id",8,void 0);D(()=>r(),()=>{var U;O(i,(U=r())==null?void 0:U.id)}),D(()=>(X(v()),ih),()=>{O(o,cn(v().toolId,Ht)??ih)}),D(()=>(X(v()),_(o)),()=>{O(a,v().shape??_(o))}),D(()=>_(a),()=>{O(l,_(a).strokeWidth??.1)}),D(()=>_(a),()=>{O(u,_(a).stroke??"black")}),D(()=>_(a),()=>{O(d,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(v()),()=>{O(h,EP(v().cell,v().direction))}),ye(),fe();var E=Z6(),I=ne(E);{var b=U=>{var P=X6();ee(()=>{x(P,"d",_(h)),x(P,"stroke",_(d).stroke),x(P,"stroke-width",_(d).strokeWidth)}),N(U,P)};Q(I,U=>{U(b)})}var w=$(I);{var A=U=>{var P=q6();ee(()=>{x(P,"d",_(h)),x(P,"stroke",_(g).stroke),x(P,"stroke-width",_(g).strokeWidth)}),N(U,P)};Q(w,U=>{m()&&m()===_(i)&&U(A)})}var T=$(w);ee(()=>{x(T,"d",_(h)),x(T,"stroke",_(u)),x(T,"stroke-width",_(l))}),N(t,E),le()}var Q6=J('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),J6=J('<g class="single-cell-arrow-tool-preview"><!></g>');function ez(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L();let a=M(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>_(n),()=>{O(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),ye(),fe();var l=Ce(),u=ne(l);{var d=h=>{var v=Q6();x(v,"opacity",.5);var m=K(v);ql(m,{get cx(){return _(o).x},get cy(){return _(o).y},get c_id(){return _(i)}}),H(v),N(h,v)},g=h=>{var v=J6();x(v,"opacity",.5);var m=K(v);Xp(m,{get tool(){return _(n)}}),H(v),N(h,v)};Q(u,h=>{_(r)==="remove"&&_(i)?h(d):h(g,!1)})}N(t,l),le()}var tz=ce("<!> <!>",1);function qp(t,e){ae(e,!1);const n=L(),r=L();let i=M(e,"cells",8),o=M(e,"shape",8,Md),a=M(e,"value",8,void 0);D(()=>X(i()),()=>{O(n,i()[0])}),D(()=>_(n),()=>{O(r,new ke(_(n).c,_(n).r))}),ye(),fe();var l=tz(),u=ne(l);Pr(u,{get cells(){return i()},get shape(){return o()}});var d=$(u,2);{var g=h=>{ys(h,{get value(){return a()},get x(){return _(r).x},get y(){return _(r).y},position:"TL"})};Q(d,h=>{a()&&a().length&&h(g)})}N(t,l),le()}var nz=J('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function zh(t,e){ae(e,!1);const n=Xe(),r=()=>pe(x2,"$minimumConstraintsStore",n),i=()=>pe(L2,"$maximumConstraintsStore",n),o=L(),a=L(),l=L();let u=M(e,"coord",8),d=M(e,"minOrMax",8);function g(b,w){const A=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];for(let U=0;U<T.length;U++){let P=T[U];const Y={r:b.r+P[1],c:b.c+P[0]};A[U]=!Object.values(w).some(k=>qe(Y,k.cell))}return A}function h(b,w){let A=pP(d(),b.r,b.c);const T=g(b,w);return A=A.filter((P,Y)=>T[Y]),A.map(P=>Bo(P,!1)).join("")}function v(b,w){return d()==="max"?w:b}D(()=>X(u()),()=>{O(o,u().c)}),D(()=>X(u()),()=>{O(a,u().r)}),D(()=>(r(),i()),()=>{O(l,v(r(),i()))}),ye(),fe();var m=nz(),E=K(m);x(E,"width",1),x(E,"height",1);var I=$(E);ee(()=>x(I,"d",h(u(),_(l)))),H(m),ee(()=>{x(E,"x",_(o)),x(E,"y",_(a))}),N(t,m),le()}var rz=J("<circle></circle>");function iz(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L();let u=M(e,"x",8),d=M(e,"y",8),g=M(e,"value",8),h=M(e,"shape",8);D(()=>X(h()),()=>{O(n,h().r??.35)}),D(()=>X(h()),()=>{O(r,h().stroke??"black")}),D(()=>X(h()),()=>{var m;O(i,(m=h())==null?void 0:m.opacity)}),D(()=>X(h()),()=>{O(o,h().strokeWidth??.02)}),D(()=>X(g()),()=>{O(a,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>X(h()),()=>{O(l,h().strokeDasharray??0)}),ye(),fe();var v=rz();ee(()=>{x(v,"cx",u()),x(v,"cy",d()),x(v,"r",_(n)),x(v,"stroke",_(r)),x(v,"stroke-width",_(o)),x(v,"fill",_(a)),x(v,"opacity",_(i)),x(v,"stroke-dasharray",_(l))}),N(t,v),le()}var oz=J("<!><!>",1),sz=J("<!><!>",1),az=J("<!><!><!>",1),lz=J('<g class="single-cell-tool"><!><!></g>');function Zp(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);D(()=>r(),()=>{var P;O(i,(P=r())==null?void 0:P.id)}),D(()=>(X(m()),rh),()=>{O(o,cn(m().toolId,Ht)??rh)}),D(()=>(X(m()),_(o)),()=>{O(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var P;O(l,((P=_(a))==null?void 0:P.type)||W.CIRCLE)}),D(()=>_(a),()=>{O(u,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{O(d,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>X(m()),()=>{O(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),D(()=>X(m()),()=>{O(h,new ke(m().cell.c,m().cell.r))}),D(()=>X(m()),()=>{O(v,m().value)}),ye(),fe();var I=lz(),b=K(I);{var w=P=>{zh(P,{get coord(){return m().cell},minOrMax:"min"})},A=P=>{var Y=Ce(),k=ne(Y);{var G=ie=>{zh(ie,{get coord(){return m().cell},minOrMax:"max"})},te=ie=>{var oe=Ce(),ue=ne(oe);{var be=Ee=>{var we=oz(),Ne=ne(we);{var Fe=Me=>{xr(Me,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(d)}})};Q(Ne,Me=>{E()&&E()===_(i)&&Me(Fe)})}var Le=$(Ne);iz(Le,{get x(){return _(g).x},get y(){return _(g).y},get value(){return _(v)},get shape(){return _(a)}}),N(Ee,we)},Z=Ee=>{var we=Ce(),Ne=ne(we);{var Fe=Me=>{var Ue=sz(),at=ne(Ue);{var _t=xt=>{var Ct=dt(()=>[m().cell]);Pr(xt,{get cells(){return _(Ct)},get shape(){return _(d)}})};Q(at,xt=>{E()&&E()===_(i)&&xt(_t)})}var wt=$(at),ft=dt(()=>[m().cell]);qp(wt,{get cells(){return _(ft)},get shape(){return _(a)},get value(){return m().value}}),N(Me,Ue)},Le=Me=>{var Ue=az(),at=ne(Ue);{var _t=Ct=>{xr(Ct,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(u)}})};Q(at,Ct=>{Ct(_t)})}var wt=$(at);{var ft=Ct=>{xr(Ct,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(d)}})};Q(wt,Ct=>{E()&&E()===_(i)&&Ct(ft)})}var xt=$(wt);xr(xt,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(a)}}),N(Me,Ue)};Q(Ne,Me=>{_(l)===W.CAGE?Me(Fe):Me(Le,!1)},!0)}N(Ee,we)};Q(ue,Ee=>{m().toolId===f.COLORED_COUNTING_CIRCLES?Ee(be):Ee(Z,!1)},!0)}N(ie,oe)};Q(k,ie=>{m().toolId===f.MAXIMUM?ie(G):ie(te,!1)},!0)}N(P,Y)};Q(b,P=>{m().toolId===f.MINIMUM?P(w):P(A,!1)})}var T=$(b);{var U=P=>{ys(P,{get value(){return _(v)},get x(){return _(h).x},get y(){return _(h).y},position:"TL"})};Q(T,P=>{_(l)!==W.CAGE&&m().toolId!==f.COLORED_COUNTING_CIRCLES&&_(v)&&P(U)})}H(I),ee(()=>x(I,"data-id",`${E()}`)),N(t,I),le()}var cz=J('<g class="single-cell-tool-preview"><!></g>');function uz(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L();let a=M(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>_(n),()=>{O(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),ye(),fe();var l=cz();x(l,"opacity",.5);var u=K(l);Zp(u,{get tool(){return _(n)}}),H(l),N(t,l),le()}var dz=J('<g class="single-cell-arrow-tool"><!></g>');function _z(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ce(),o=ne(i);{var a=l=>{var u=dz(),d=K(u);Xp(d,{get tool(){return n()},get c_id(){return r()}}),H(u),ee(()=>x(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}N(t,i)}var fz=J('<g class="single-cell-tool"><!></g>');function gz(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ce(),o=ne(i);{var a=l=>{var u=fz(),d=K(u);Zp(d,{get tool(){return n()},get c_id(){return r()}}),H(u),ee(()=>x(u,"id",`c-${r()}`)),N(l,u)};Q(o,l=>{r()!==void 0&&l(a)})}N(t,i)}function hz(t,e){ae(e,!1);let n=M(e,"tool",8),r=M(e,"c_id",8);fe();var i=Ce(),o=ne(i);{var a=l=>{var u=Ce(),d=ne(u);{var g=v=>{_z(v,{get tool(){return n()},get c_id(){return r()}})},h=v=>{var m=Ce(),E=ne(m);{var I=w=>{Vp(w,{get tool(){return n()},get c_id(){return r()}})},b=w=>{var A=Ce(),T=ne(A);{var U=P=>{gz(P,{get tool(){return n()},get c_id(){return r()}})};Q(T,P=>{n().type==="SIMPLE"&&P(U)},!0)}N(w,A)};Q(E,w=>{n().type==="MULTIARROW"?w(I):w(b,!1)},!0)}N(v,m)};Q(d,v=>{n().type==="ARROW"?v(g):v(h,!1)})}N(l,u)};Q(o,l=>{n().toolId!==f.FOG_LIGHTS&&l(a)})}N(t,i),le()}var vz=ce("<!> <!> <!>",1);function Uu(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L();let a=M(e,"linePoints",8),l=M(e,"shape",8,Ns);function u(b){var T;const w=St.cloneDeep(b);w.r=w.r||.2;const A=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(T=w.linePathOptions)==null?void 0:T.bezierRounding},w}D(()=>X(a()),()=>{O(n,a().length)}),D(()=>(_(n),X(a())),()=>{O(r,_(n)>=0?a()[0]:void 0)}),D(()=>(_(n),X(a())),()=>{O(i,_(n)>=0?a()[_(n)-1]:void 0)}),D(()=>X(l()),()=>{O(o,u(l()))}),ye(),fe();var d=vz(),g=ne(d);{var h=b=>{pr(b,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})};Q(g,b=>{_(r)&&b(h)})}var v=$(g,2);{var m=b=>{ui(b,{get linePoints(){return a()},get shape(){return _(o)}})};Q(v,b=>{_(n)>1&&b(m)})}var E=$(v,2);{var I=b=>{pr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(o)}})};Q(E,b=>{_(i)&&b(I)})}N(t,d),le()}var pz=ce("<!> <!> <!>",1);function Gu(t,e){ae(e,!1);const n=L(),r=L(),i=L();let o=M(e,"linePoints",8),a=M(e,"shape",12,Ns);const l=4,u=.5;function d(U,P){const Y=P.r??u,k=P.n??l,G=P.angle??0,te=zp(Y,k,new ke(0,0),!0,0),ie=(k+(U-G/360)*k%k)%k,oe=Math.floor(ie)%k,ue=Math.ceil(ie)%k;return te[oe].lerp(te[ue],ie%1).length()}function g(U){if(_(n)<=1)return 0;const P=o()[0],k=o()[1].subtract(P).angle()/(2*Math.PI);return d(k,U)}function h(U){if(_(n)<=1)return 0;const P=o()[_(n)-1],k=o()[_(n)-2].subtract(P).angle()/(2*Math.PI);return d(k,U)}function v(U){var Y;const P=St.cloneDeep(U);return P.r=P.r||u,P.opacity=1,P.linePathOptions={shortenHead:g(P),shortenTail:h(P),bezierRounding:(Y=P.linePathOptions)==null?void 0:Y.bezierRounding},P}D(()=>X(o()),()=>{O(n,o().length)}),D(()=>(_(n),X(o())),()=>{O(r,_(n)>=0?o()[0]:void 0)}),D(()=>(_(n),X(o())),()=>{O(i,_(n)>=0?o()[_(n)-1]:void 0)}),D(()=>X(a()),()=>{a(v(a()))}),ye(),fe();var m=pz(),E=ne(m);{var I=U=>{hl(U,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return a()}})};Q(E,U=>{_(r)&&U(I)})}var b=$(E,2);{var w=U=>{ui(U,{get linePoints(){return o()},get shape(){return a()}})};Q(b,U=>{_(n)>1&&U(w)})}var A=$(b,2);{var T=U=>{hl(U,{get cx(){return _(i).x},get cy(){return _(i).y},get shape(){return a()}})};Q(A,U=>{_(i)&&U(T)})}N(t,m),le()}var mz=ce("<!> <!>",1);function $u(t,e){ae(e,!1);const n=L();let r=M(e,"linePoints",8),i=M(e,"shape",8,Ns);function o(m){var b,w,A;const E=St.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function a(m){var b,w,A;const E=St.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}D(()=>X(r()),()=>{O(n,r().length>0?r()[0]:void 0)}),ye(),fe();var l=mz(),u=ne(l);{var d=m=>{var E=dt(()=>o(i()));ui(m,{get linePoints(){return r()},get shape(){return _(E)}})};Q(u,m=>{r().length>1&&m(d)})}var g=$(u,2);{var h=m=>{var E=dt(()=>o(i()));pr(m,{get x(){return _(n).x},get y(){return _(n).y},get shape(){return _(E)}})},v=m=>{var E=Ce(),I=ne(E);{var b=w=>{var A=dt(()=>a(i()));hl(w,{get cx(){return _(n).x},get cy(){return _(n).y},get shape(){return _(A)}})};Q(I,w=>{_(n)&&w(b)},!0)}N(m,E)};Q(g,m=>{_(n)&&i().type===W.THERMO_WITH_CIRCLE?m(h):m(v,!1)})}N(t,l),le()}var Ez=J("<!><!><!>",1),Cz=J("<!><!><!>",1),bz=J("<!><!><!>",1),Iz=J("<!><!><!>",1),wz=J('<g class="line-tool"><!></g>');function yz(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L();let h=M(e,"tool",8),v=M(e,"c_id",8);const m=cn(h().toolId,Ht)??Ns;D(()=>r(),()=>{var A;O(i,(A=r())==null?void 0:A.id)}),D(()=>X(h()),()=>{O(o,Kl(h().cells))}),D(()=>X(h()),()=>{O(a,h().shape??m)}),D(()=>(_(a),W),()=>{var A;O(l,((A=_(a))==null?void 0:A.type)||W.LINE)}),D(()=>_(a),()=>{var A;O(u,((A=_(a))==null?void 0:A.opacity)??1)}),D(()=>_(a),()=>{O(d,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{O(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),ye(),fe();var E=wz(),I=K(E);{var b=A=>{var T=Ez(),U=ne(T);{var P=te=>{Uu(te,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(U,te=>{te(P)})}var Y=$(U);{var k=te=>{Uu(te,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(Y,te=>{v()===_(i)&&te(k)})}var G=$(Y);Uu(G,{get linePoints(){return _(o)},get shape(){return _(a)}}),N(A,T)},w=A=>{var T=Ce(),U=ne(T);{var P=k=>{var G=Cz(),te=ne(G);{var ie=Z=>{Gu(Z,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(te,Z=>{Z(ie)})}var oe=$(te);{var ue=Z=>{Gu(Z,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(oe,Z=>{v()===_(i)&&Z(ue)})}var be=$(oe);Gu(be,{get linePoints(){return _(o)},get shape(){return _(a)}}),N(k,G)},Y=k=>{var G=Ce(),te=ne(G);{var ie=ue=>{var be=bz(),Z=ne(be);{var Ee=Le=>{$u(Le,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,Le=>{Le(Ee)})}var we=$(Z);{var Ne=Le=>{$u(Le,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(we,Le=>{v()===_(i)&&Le(Ne)})}var Fe=$(we);$u(Fe,{get linePoints(){return _(o)},get shape(){return _(a)}}),N(ue,be)},oe=ue=>{var be=Iz(),Z=ne(be);{var Ee=Le=>{ui(Le,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,Le=>{Le(Ee)})}var we=$(Z);{var Ne=Le=>{ui(Le,{get linePoints(){return _(o)},get shape(){return _(g)}})};Q(we,Le=>{v()===_(i)&&Le(Ne)})}var Fe=$(we);ui(Fe,{get linePoints(){return _(o)},get shape(){return _(a)}}),N(ue,be)};Q(te,ue=>{_(l)===W.THERMO_WITH_CIRCLE||_(l)===W.THERMO_WITH_POLYGON?ue(ie):ue(oe,!1)},!0)}N(k,G)};Q(U,k=>{_(l)===W.LINE_WITH_POLYGON_ENDS?k(P):k(Y,!1)},!0)}N(A,T)};Q(I,A=>{_(l)===W.LINE_WITH_CIRCLE_ENDS?A(b):A(w,!1)})}H(E),ee(()=>x(E,"opacity",_(u))),N(t,E),le()}var Oz=J('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function Qp(t,e){let n=M(e,"l",8,.2),r=M(e,"id",8),i=M(e,"strokeWidth",8),o=M(e,"stroke",8,"black");const a=.5,l=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=Oz();x(u,"viewBox","0 0 1 1"),x(u,"refX",a),x(u,"refY",a),x(u,"markerWidth",1),x(u,"markerHeight",1);var d=K(u);x(d,"d",l),H(u),ee(()=>{x(u,"id",r()),x(d,"stroke-width",i()),x(d,"stroke",o())}),N(t,u)}var Az=J('<path class="arrow-line" fill="none"></path>'),xz=J("<!><!><!>",1);function Lz(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L();let m=M(e,"tool",8),E=M(e,"arrowId",8);const I=cn(m().toolId,Ht)??Ov,b="round",w="round",A=crypto.randomUUID(),T=`arrow-marker-${E()}-${A}`;D(()=>X(m()),()=>{O(n,m().shape??I)}),D(()=>_(n),()=>{var G;O(r,((G=_(n))==null?void 0:G.r)??.4)}),D(()=>_(n),()=>{var G;O(i,((G=_(n))==null?void 0:G.stroke)??"gray")}),D(()=>_(n),()=>{var G;O(o,((G=_(n))==null?void 0:G.strokeWidth)??.1)}),D(()=>_(n),()=>{var G;O(a,((G=_(n))==null?void 0:G.strokeDasharray)??0)}),D(()=>_(n),()=>{var G;O(l,((G=_(n))==null?void 0:G.opacity)??.8)}),D(()=>(_(r),_(n)),()=>{var G,te,ie,oe;O(u,{shortenHead:_(r),shortenTail:((te=(G=_(n))==null?void 0:G.linePathOptions)==null?void 0:te.shortenTail)??.2,bezierRounding:((oe=(ie=_(n))==null?void 0:ie.linePathOptions)==null?void 0:oe.bezierRounding)??.4})}),D(()=>_(n),()=>{var G;O(d,((G=_(n))==null?void 0:G.fill)??"none")}),D(()=>_(n),()=>{var G;O(g,((G=_(n))==null?void 0:G.inset)??.2)}),D(()=>_(g),()=>{O(h,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:_(g)})}),D(()=>X(m()),()=>{O(v,gl(m().cells))}),ye(),fe();var U=xz(),P=ne(U);Qp(P,{id:T,l:.2,get strokeWidth(){return _(o)},get stroke(){return _(i)}});var Y=$(P);Pr(Y,{get cells(){return m().cells},get shape(){return _(h)}});var k=$(Y);Qe(k,1,()=>m().lines,mt,(G,te)=>{var ie=Ce(),oe=ne(ie);{var ue=be=>{var Z=Az();ee(()=>x(Z,"d",gl(_(te),_(u)))),x(Z,"stroke-linejoin",b),x(Z,"stroke-linecap",w),x(Z,"marker-end",`url(#${T??""})`),ee(()=>{x(Z,"stroke",_(i)),x(Z,"stroke-width",_(o)),x(Z,"opacity",_(l)),x(Z,"stroke-dasharray",_(a))}),N(be,Z)};Q(oe,be=>{_(te).length>1&&be(ue)})}N(G,ie)}),N(t,U),le()}var Nz=J('<path class="arrow-line" fill="none"></path>'),Sz=J('<mask maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><path class="arrow-bulb svelte-8t4zyo" stroke="white" fill="none"></path><path class="arrow-bulb svelte-8t4zyo" stroke="black" fill="none"></path></mask><!><path class="arrow-bulb svelte-8t4zyo"></path><!>',1);function Fu(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L(),a=L(),l=L(),u=L();let d=M(e,"tool",8),g=M(e,"c_id",8),h=M(e,"shape",8);const v="round",m="round",E=crypto.randomUUID(),I=`arrow-mask-${g()}-${E}`,b=`arrow-marker-${g()}-${E}`;D(()=>X(h()),()=>{var G;O(n,((G=h())==null?void 0:G.r)??.4)}),D(()=>X(h()),()=>{var G;O(r,((G=h())==null?void 0:G.stroke)??"gray")}),D(()=>X(h()),()=>{var G;O(i,((G=h())==null?void 0:G.strokeWidth)??.1)}),D(()=>X(h()),()=>{var G;O(o,((G=h())==null?void 0:G.strokeDasharray)??0)}),D(()=>(_(n),X(h())),()=>{var G,te,ie,oe;O(a,{shortenHead:_(n),shortenTail:((te=(G=h())==null?void 0:G.linePathOptions)==null?void 0:te.shortenTail)??.2,bezierRounding:((oe=(ie=h())==null?void 0:ie.linePathOptions)==null?void 0:oe.bezierRounding)??.4})}),D(()=>X(d()),()=>{O(l,gl(d().cells))}),D(()=>X(d()),()=>{O(u,fP(d().cells))}),ye(),fe();var w=Sz(),A=ne(w);x(A,"id",I);var T=K(A),U=$(T);H(A);var P=$(A);Qp(P,{id:b,l:.2,get strokeWidth(){return _(i)},get stroke(){return _(r)}});var Y=$(P);x(Y,"mask",`url(#${I??""})`);var k=$(Y);Qe(k,1,()=>d().lines,mt,(G,te)=>{var ie=Ce(),oe=ne(ie);{var ue=be=>{var Z=Nz();ee(()=>x(Z,"d",gl(_(te),_(a)))),x(Z,"stroke-linejoin",v),x(Z,"stroke-linecap",m),x(Z,"marker-end",`url(#${b??""})`),ee(()=>{x(Z,"stroke",_(r)),x(Z,"stroke-width",_(i)),x(Z,"stroke-dasharray",_(o))}),N(be,Z)};Q(oe,be=>{_(te).length>1&&be(ue)})}N(G,ie)}),ee(()=>{x(A,"x",_(u).x),x(A,"y",_(u).y),x(A,"width",_(u).width),x(A,"height",_(u).height),x(T,"stroke-width",2*_(n)+_(i)),x(T,"d",_(l)),x(U,"stroke-width",2*_(n)-_(i)),x(U,"d",_(l)),x(Y,"d",_(l)),x(Y,"stroke-width",2*_(n)+_(i)),x(Y,"stroke",_(r))}),N(t,w),le()}var Dz=J("<!><!><!>",1),Rz=J('<g class="arrow-tool"><!></g>');function Tz(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L();let u=M(e,"tool",8),d=M(e,"c_id",8);const g=cn(u().toolId,Ht)??Ov;D(()=>X(u()),()=>{O(i,u().shape??g)}),D(()=>_(i),()=>{O(o,{..._(i),stroke:"var(--grid-background-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.06:.06})}),D(()=>_(i),()=>{O(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;O(l,(I=r())==null?void 0:I.id)}),ye(),fe();var h=Rz(),v=K(h);{var m=I=>{Lz(I,{get tool(){return u()},get arrowId(){return d()}})},E=I=>{var b=Dz(),w=ne(b);{var A=Y=>{Fu(Y,{get tool(){return u()},get c_id(){return d()},get shape(){return _(o)}})};Q(w,Y=>{Y(A)})}var T=$(w);{var U=Y=>{Fu(Y,{get tool(){return u()},get c_id(){return d()},get shape(){return _(a)}})};Q(T,Y=>{d()===_(l)&&Y(U)})}var P=$(T);Fu(P,{get tool(){return u()},get c_id(){return d()},get shape(){return _(i)}}),N(I,b)};Q(v,I=>{_(i).type===W.BULBOUS_ARROW?I(m):I(E,!1)})}H(h),N(t,h),le()}var kz=J('<g class="cage-tool"><!><!></g>');function Mz(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L();let l=M(e,"tool",8),u=M(e,"c_id",8);const d=cn(l().toolId,Ht)??Md;D(()=>X(l()),()=>{O(i,l().shape??d)}),D(()=>r(),()=>{var E;O(o,(E=r())==null?void 0:E.id)}),D(()=>_(i),()=>{O(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),ye(),fe();var g=kz(),h=K(g);{var v=E=>{Pr(E,{get cells(){return l().cells},get shape(){return _(a)}})};Q(h,E=>{u()===_(o)&&E(v)})}var m=$(h);qp(m,{get cells(){return l().cells},get shape(){return _(i)},get value(){return l().value}}),H(g),N(t,g),le()}var Uz=J("<!><!>",1),Gz=J('<g class="clone-tool"><!><!><!><!><!></g>');function $z(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Yt,"$currentConstraintStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L(),m=L();let E=M(e,"tool",8),I=M(e,"c_id",8);const b=cn(E().toolId,Ht)??Hy,w=800,A=E().value;D(()=>r(),()=>{var ie;O(i,(ie=r())==null?void 0:ie.id)}),D(()=>X(E()),()=>{O(o,E().shape??b)}),D(()=>_(o),()=>{O(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>_(o),()=>{O(l,_(o).inset??.15)}),D(()=>_(o),()=>{O(u,_(o).strokeWidth??.07)}),D(()=>_(o),()=>{O(d,_(o).fontColor??_(o).stroke??"black")}),D(()=>X(E()),()=>{O(g,E().cells[E().cells.length-1])}),D(()=>X(E()),()=>{O(h,E().cells2[E().cells2.length-1])}),D(()=>(_(g),_(l)),()=>{O(v,new ke(_(g).c+1-_(l)-.05,_(g).r+1-_(l)-.05))}),D(()=>(_(h),_(l)),()=>{O(m,new ke(_(h).c+1-_(l)-.05,_(h).r+1-_(l)-.05))}),ye(),fe();var T=Gz(),U=K(T);{var P=ie=>{var oe=Uz(),ue=ne(oe);Pr(ue,{get cells(){return E().cells},get shape(){return _(a)}});var be=$(ue);Pr(be,{get cells(){return E().cells2},get shape(){return _(a)}}),N(ie,oe)};Q(U,ie=>{I()===_(i)&&ie(P)})}var Y=$(U);Pr(Y,{get cells(){return E().cells},get shape(){return _(o)}});var k=$(Y);ys(k,{value:A,get x(){return _(v).x},get y(){return _(v).y},position:"BR",get fontColor(){return _(d)},fontWeight:w});var G=$(k);Pr(G,{get cells(){return E().cells2},get shape(){return _(o)}});var te=$(G);ys(te,{value:A,get x(){return _(m).x},get y(){return _(m).y},position:"BR",get fontColor(){return _(d)},fontWeight:w}),H(T),N(t,T),le()}var Fz=J('<g class="element-group"></g>'),Pz=J('<g class="element-group"></g>'),zz=J('<g class="element-group"></g>'),Hz=J('<g class="element-group"></g>'),Wz=J('<g class="element-group"></g>'),Bz=J('<g class="element-group"></g>'),Yz=J('<g class="underlay-layer"></g>');function jz(t,e){ae(e,!1);const n=Xe(),r=()=>pe(O2,"$underlayElementsStore",n),i=L();D(()=>r(),()=>{O(i,r())}),ye(),fe();var o=Yz();Qe(o,5,()=>_(i),mt,(a,l)=>{var u=Ce(),d=ne(u);{var g=h=>{var v=Ce(),m=ne(v);{var E=b=>{var w=Fz();Qe(w,5,()=>Object.entries(_(l).constraints),A=>A[0],(A,T)=>{hz(A,{get tool(){return _(T)[1]},get c_id(){return _(T)[0]}})}),H(w),ee(()=>x(w,"data-toolId",_(l).tool_id)),N(b,w)},I=b=>{var w=Ce(),A=ne(w);{var T=P=>{var Y=Pz();Qe(Y,5,()=>Object.entries(_(l).constraints),k=>k[0],(k,G)=>{yz(k,{get tool(){return _(G)[1]},get c_id(){return _(G)[0]}})}),H(Y),ee(()=>x(Y,"data-toolId",_(l).tool_id)),N(P,Y)},U=P=>{var Y=Ce(),k=ne(Y);{var G=ie=>{var oe=zz();Qe(oe,5,()=>Object.entries(_(l).constraints),ue=>ue[0],(ue,be)=>{Tz(ue,{get tool(){return _(be)[1]},get c_id(){return _(be)[0]}})}),H(oe),ee(()=>x(oe,"data-toolId",_(l).tool_id)),N(ie,oe)},te=ie=>{var oe=Ce(),ue=ne(oe);{var be=Ee=>{var we=Hz();Qe(we,5,()=>Object.entries(_(l).constraints),Ne=>Ne[0],(Ne,Fe)=>{Mz(Ne,{get tool(){return _(Fe)[1]},get c_id(){return _(Fe)[0]}})}),H(we),ee(()=>x(we,"data-toolId",_(l).tool_id)),N(Ee,we)},Z=Ee=>{var we=Ce(),Ne=ne(we);{var Fe=Me=>{var Ue=Wz();Qe(Ue,5,()=>Object.entries(_(l).constraints),at=>at[0],(at,_t)=>{$z(at,{get tool(){return _(_t)[1]},get c_id(){return _(_t)[0]}})}),H(Ue),ee(()=>x(Ue,"data-toolId",_(l).tool_id)),N(Me,Ue)},Le=Me=>{var Ue=Ce(),at=ne(Ue);{var _t=wt=>{var ft=Bz();Qe(ft,5,()=>Object.entries(_(l).constraints),xt=>xt[0],(xt,Ct)=>{jp(xt,{get tool(){return _(Ct)[1]},get c_id(){return _(Ct)[0]}})}),H(ft),ee(()=>x(ft,"data-toolId",_(l).tool_id)),N(wt,ft)};Q(at,wt=>{Br(_(l).tool_id)&&wt(_t)},!0)}N(Me,Ue)};Q(Ne,Me=>{Ls(_(l).tool_id)?Me(Fe):Me(Le,!1)},!0)}N(Ee,we)};Q(ue,Ee=>{wo(_(l).tool_id)?Ee(be):Ee(Z,!1)},!0)}N(ie,oe)};Q(k,ie=>{Io(_(l).tool_id)?ie(G):ie(te,!1)},!0)}N(P,Y)};Q(A,P=>{bo(_(l).tool_id)?P(T):P(U,!1)},!0)}N(b,w)};Q(m,b=>{Td(_(l).tool_id)?b(E):b(I,!1)})}N(h,v)};Q(d,h=>{_(l).constraints&&h(g)})}N(a,u)}),H(o),N(t,o),le()}var Kz=J('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),Vz=J('<g class="center-corner-or-edge-tool-preview"><!></g>');function Xz(t,e){ae(e,!1);const n=L(),r=L(),i=L(),o=L();let a=M(e,"tool_preview",8);D(()=>X(a()),()=>{O(n,a().tool)}),D(()=>X(a()),()=>{O(r,a().mode)}),D(()=>X(a()),()=>{O(i,a().match_id)}),D(()=>_(n),()=>{O(o,_(n).cell)}),ye(),fe();var l=Ce(),u=ne(l);{var d=h=>{var v=Kz();x(v,"opacity",.5);var m=K(v);ql(m,{get cx(){return _(o).c},get cy(){return _(o).r},get c_id(){return _(i)}}),H(v),N(h,v)},g=h=>{var v=Vz();x(v,"opacity",.5);var m=K(v);Yp(m,{get tool(){return _(n)}}),H(v),N(h,v)};Q(u,h=>{_(r)==="remove"&&_(i)?h(d):h(g,!1)})}N(t,l),le()}var qz=J('<line class="positive-diagonal"></line>'),Zz=J('<line class="negative-diagonal"></line>'),Qz=J('<g class="element-group"><!></g>');function Jz(t,e){ae(e,!1);const n=Xe(),r=()=>pe(fn,"$gridStore",n),i=L(),o=L(),a=L(),l=L(),u=L(),d=L(),g=L(),h=L(),v=L(),m=L();let E=M(e,"element",8);const I=0,b=0,w=0,A=0;D(()=>X(E()),()=>{O(i,E().tool_id)}),D(()=>(X(E()),ah),()=>{O(o,cn(E().tool_id,Ht)??ah)}),D(()=>_(o),()=>{var k;O(a,((k=_(o))==null?void 0:k.strokeWidth)??.02)}),D(()=>_(o),()=>{var k;O(l,((k=_(o))==null?void 0:k.stroke)??"black")}),D(()=>r(),()=>{O(u,r())}),D(()=>(_(i),f),()=>{O(d,_(i)===f.POSITIVE_DIAGONAL||_(i)===f.POSITIVE_ANTIDIAGONAL||_(i)===f.PARITY_MIRROR_POSITIVE_DIAGONAL)}),D(()=>_(u),()=>{O(g,_(u).nCols)}),D(()=>_(u),()=>{O(h,_(u).nRows)}),D(()=>_(u),()=>{O(v,_(u).nCols)}),D(()=>_(u),()=>{O(m,_(u).nRows)}),ye(),fe();var T=Qz(),U=K(T);{var P=k=>{var G=qz();x(G,"x2",A),x(G,"y1",w),ee(()=>{x(G,"x1",_(g)),x(G,"y2",_(h)),x(G,"stroke",_(l)),x(G,"stroke-width",_(a))}),N(k,G)},Y=k=>{var G=Zz();x(G,"x1",I),x(G,"y1",b),ee(()=>{x(G,"x2",_(v)),x(G,"y2",_(m)),x(G,"stroke",_(l)),x(G,"stroke-width",_(a))}),N(k,G)};Q(U,k=>{_(d)?k(P):k(Y,!1)})}H(T),ee(()=>x(T,"data-toolId",E().tool_id)),N(t,T),le()}function eH(t,e){ae(e,!1);const n=Xe(),r=()=>pe(T2,"$diagonalElementsStore",n),i=L();D(()=>r(),()=>{O(i,r())}),ye();var o=Ce(),a=ne(o);Qe(a,1,()=>_(i),mt,(l,u)=>{Jz(l,{get element(){return _(u)}})}),N(t,o),le()}function tH(t,e){for(const[n,r]of t.entries()){if(!Br(n))continue;if(Object.values(r.constraints).some(o=>!Ft(o.cell,e)))return!0}return!1}function nH(t,e,n,r){const i=n.zoom_factor;if(r<1){const o=e.x+e.width/2,a=e.y+e.height/2,l=e.width/i,u=e.height/i,d=o-l/2,g=a-u/2;return{x:d,y:g,height:u,width:l}}else if(r>1){const o=e.width/i,a=e.height/i,l=t.x,u=t.width,d=t.y,g=t.height,h=e.x+e.width/2,v=e.y+e.height/2,m=(h+n.point.x)/2,E=(v+n.point.y)/2;let I=m-o/2,b=E-a/2;return I<l&&(I=l),b<d&&(b=d),I+o>u&&(I=u-o),b+a>g&&(b=g-a),{x:I,y:b,height:a,width:o}}return e}const mo=Rt(1),Ks=Fn([st,en,fn],([t,e,n])=>{const r={nRows:n.nRows,nCols:n.nCols},i=tH(t,r),o=Br(e),a=i||o?1:.2,l=-a,u=-a,d=r.nCols+2*a,g=r.nRows+2*a;return{x:l,y:u,width:d,height:g}}),Vs=Rt(xe(Ks));function rH(){mo.set(1),Vs.set(xe(Ks))}function iH(t){if(!t.ctrl)return;const e=xe(mo),n=.5,r=2,i=t.zoom_factor;let o=e*i;if(o=Math.max(n,Math.min(r,o)),mo.set(o),o===e)return;const a=xe(Ks);Vs.update(l=>nH(a,l,t,o))}function oH(t){if(t.ctrl)return;const e=xe(mo),n=xe(Ks);if(e<1)return;const r=-(t.delta>0?1:t.delta<0?-1:0),i=n.y,o=i+n.height;Vs.update(a=>{const l=.5*r*e;let u=a.y+l;return u<i&&(u=i),u+a.height>o&&(u=o-a.height),{x:a.x,y:u,height:a.height,width:a.width}})}function sH(t){const e=xe(mo),n=xe(Ks);if(e<1)return;const r=t.point,i=n.x,o=i+n.width,a=n.y,l=a+n.height;Vs.update(u=>{let d=u.x-.012/e*r.x,g=u.y-.012*1/e*r.y;return g<a&&(g=a),g+u.height>l&&(g=l-u.height),d<i&&(d=i),d+u.width>o&&(d=o-u.width),{x:d,y:g,height:u.height,width:u.width}})}var aH=J('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function lH(t,e){ae(e,!1);const n=Xe(),r=()=>pe(fn,"$gridStore",n),i=()=>pe(Vs,"$boundingBoxStore",n),o=()=>pe(Gn,"$cellsStore",n),a=()=>pe(fp,"$fogLightsStore",n),l=()=>pe(R2,"$cornerLineToolsStore",n),u=()=>pe(N2,"$edgeToolsStore",n),d=()=>pe(D2,"$cornerToolsStore",n),g=()=>pe(S2,"$centerCornerOrEdgeToolsStore",n),h=()=>pe(en,"$toolStore",n),v=()=>pe(hs,"$outsideDirectionToolPreviewStore",n),m=()=>pe(Qa,"$simpleCellToolPreviewStore",n),E=()=>pe(Ja,"$singleCellArrowPreviewStore",n),I=()=>pe(el,"$singleCellMultiArrowPreviewStore",n),b=()=>pe(tl,"$edgeToolPreviewStore",n),w=()=>pe(nl,"$cornerToolPreviewStore",n),A=()=>pe(rl,"$centerCornerOrEdgeToolPreviewStore",n),T=L(),U=L(),P=L();let Y=M(e,"svgRef",12,null);function k(et){return`${et.x} ${et.y} ${et.width} ${et.height}`}D(()=>r(),()=>{O(T,r())}),D(()=>_(T),()=>{O(U,{nRows:_(T).nRows,nCols:_(T).nCols})}),D(()=>i(),()=>{O(P,i())}),ye(),fe();var G=aH();ee(()=>x(G,"viewBox",k(_(P))));var te=K(G);G6(te);var ie=$(te);M4(ie,{get gridShape(){return _(U)}});var oe=$(ie);G4(oe,{get gridShape(){return _(U)}});var ue=$(oe);xP(ue,{get grid(){return r()}});var be=$(ue);iP(be,{get gridShape(){return _(U)}});var Z=$(be);Qe(Z,5,o,mt,(et,Yo)=>{t4(et,{get cell(){return _(Yo)}})}),H(Z);var Ee=$(Z);C4(Ee,{});var we=$(Ee);z6(we,{get element(){return a()}});var Ne=$(we);jz(Ne,{});var Fe=$(Ne);aP(Fe,{});var Le=$(Fe);eH(Le,{});var Me=$(Le);wP(Me,{});var Ue=$(Me);Ka(Ue,{get elements(){return l()},g_name:"corner-line-tools-layer",Component:b6});var at=$(Ue);OP(at,{get gridShape(){return _(U)}});var _t=$(at);nP(_t,{});var wt=$(_t);Ka(wt,{get elements(){return u()},g_name:"edge-tools-layer",Component:N6});var ft=$(wt);Ka(ft,{get elements(){return d()},g_name:"corner-tools-layer",Component:o6});var xt=$(ft);Ka(xt,{get elements(){return g()},g_name:"center-corner-edge-tools-layer",Component:u6});var Ct=$(xt);p4(Ct,{});var Wn=$(Ct);Qe(Wn,5,o,mt,(et,Yo)=>{QP(et,{get cell(){return _(Yo)}})}),H(Wn);var Bn=$(Wn);z4(Bn,{});var pi=$(Bn);R4(pi,{});var Cr=$(pi);{var Sr=et=>{jp(et,{get tool(){return v()}})};Q(Cr,et=>{Br(h())&&v()&&et(Sr)})}var Pe=$(Cr);{var Ie=et=>{uz(et,{get tool_preview(){return m()}})};Q(Pe,et=>{bl(h())&&h()!==f.FOG_LIGHTS&&m()&&et(Ie)})}var Se=$(Pe);{var ze=et=>{ez(et,{get tool_preview(){return E()}})};Q(Se,et=>{Gi(h())&&E()&&et(ze)})}var Mt=$(Se);{var Qs=et=>{Vp(et,{get tool(){return I()}})};Q(Mt,et=>{Eo(h())&&I()&&et(Qs)})}var Js=$(Mt);{var mi=et=>{Y6(et,{get tool_preview(){return b()}})};Q(Js,et=>{Co(h())&&b()&&et(mi)})}var bn=$(Js);{var Ei=et=>{V6(et,{get tool_preview(){return w()}})};Q(bn,et=>{As(h())&&w()&&et(Ei)})}var Hi=$(bn);{var Ql=et=>{Xz(et,{get tool_preview(){return A()}})};Q(Hi,et=>{xs(h())&&A()&&et(Ql)})}H(G),Ti(G,et=>Y(et),()=>Y()),N(t,G),le()}function cH(t){return rO(t)?(my(),!0):!1}function uH(t){return iO(t)?(sp(),!0):!1}function dH(t){return oO(t)?(ap(),!0):!1}function Pu(t){(cH(t)||uH(t)||dH(t))&&(t.stopImmediatePropagation(),t.preventDefault())}function _H(t,e){if(!e)return;const n=Cn(t,e);if(!n)return;const r=t.ctrlKey,i=-t.deltaY,o=i>0?1.1:i<0?1/1.1:0;return{event:t,point:n,ctrl:r,zoom_factor:o,delta:i}}class fH{constructor(){he(this,"onTap",null);he(this,"onDragStart",null);he(this,"onDrag",null);he(this,"onDragEnd",null);he(this,"onMove",null);he(this,"onWheel",null);he(this,"_isDown",!1);he(this,"_lastPoint",null)}pointerDown(e,n){if(e.button!==1||!n)return;const r=new ke(e.clientX,e.clientY);if(r&&(this._isDown=!0,this._lastPoint=r,this.onDragStart)){const i={event:e,point:r};this.onDragStart(i)}}pointerMove(e,n){if(!this._isDown||!n)return;const r=new ke(e.clientX,e.clientY);if(!r||!this._lastPoint)return;const i=r.subtract(this._lastPoint),o={event:e,point:i};this._lastPoint=r,this.onDrag&&this.onDrag(o)}pointerUp(e){e.button===1&&(this._isDown&&(this._isDown=!1,this.onDragEnd&&this.onDragEnd()),this._lastPoint=null)}wheel(e,n){const r=_H(e,n);r&&this.onWheel&&this.onWheel(r)}}const so=new fH;function gH(t){so.onDrag=r=>{sH(r)},so.onWheel=r=>{iH(r),oH(r)};const e=St.throttle(r=>{so.pointerMove(r,t)},10);return{pointerDown(r){r.button===1&&r.preventDefault(),so.pointerDown(r,t)},pointerMove(r){e(r)},pointerUp(r){so.pointerUp(r)},keyUp(){},keyDown(){},wheelEvent(r){so.wheel(r,t)}}}var hH=ce('<button class="form-button zoom-reset svelte-11c686j">Reset zoom</button>'),vH=ce('<div class="board-container svelte-11c686j" tabindex="-1"><!> <!></div>');function pH(t,e){ae(e,!1);const n=Xe(),r=()=>pe(hp,"$InputHandlerStore",n),i=()=>pe(ho,"$svgRefStore",n),o=()=>pe(mo,"$currentScaleStore",n),a=L(),l=L();let u=L(null);function d(w){return A=>{w&&_(a)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===_(u))&&w(A)}}function g(){rH()}D(()=>r(),()=>{O(a,r())}),D(()=>i(),()=>{O(l,gH(i()))}),ye(),fe();var h=vH();De("keydown",Cu,function(...w){Pu==null||Pu.apply(this,w)});var v=eh(()=>{var w;return d((w=_(a))==null?void 0:w.keyDown)});De("keydown",Cu,function(...w){var A;(A=_(v))==null||A.apply(this,w)});var m=eh(()=>{var w;return d((w=_(a))==null?void 0:w.keyUp)});De("keyup",Cu,function(...w){var A;(A=_(m))==null||A.apply(this,w)});var E=K(h);lH(E,{get svgRef(){return Jh(),i()},set svgRef(w){fo(ho,w)},$$legacy:!0});var I=$(E,2);{var b=w=>{var A=hH();De("click",A,io(Un(g)),!0),N(w,A)};Q(I,w=>{o()!==1&&w(b)})}H(h),Ti(h,w=>O(u,w),()=>_(u)),De("pointerdown",h,io(w=>{_(l).pointerDown(w)}),!0),De("pointermove",h,w=>{_(l).pointerMove(w)},!0),De("pointerup",h,w=>{_(l).pointerUp(w)},!0),De("pointercancel",h,w=>{_(l).pointerUp(w)},!0),De("wheel",h,io(Un(w=>{w.currentTarget.focus(),_(l).wheelEvent&&_(l).wheelEvent(w)})),!0),De("pointerdown",h,io(Un(w=>{var A;w.currentTarget.focus(),(A=_(a))==null||A.pointerDown(w)})),!0),De("pointermove",h,io(Un(w=>{var A;w.currentTarget.focus(),(A=_(a))==null||A.pointerMove(w)})),!0),De("pointerup",h,io(Un(w=>{var A;w.currentTarget.focus(),(A=_(a))==null||A.pointerUp(w)})),!0),N(t,h),le()}var mH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function EH(t){var e=mH();N(t,e)}var CH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function bH(t){var e=CH();N(t,e)}var IH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function wH(t){var e=IH();N(t,e)}var yH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function OH(t){var e=yH();N(t,e)}var AH=ce('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function xH(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Uo,"$commandHistoryStore",n),i=()=>pe(ld,"$selectOnStore",n),o=L(),a=L();function l(){sp()}function u(){ap()}function d(){console.log("check")}function g(){fo(ld,!i())}D(()=>r(),()=>{O(o,r()._undoStack.length===0)}),D(()=>r(),()=>{O(a,r()._redoStack.length===0)}),ye(),fe();var h=AH(),v=K(h),m=K(v);OH(m),H(v);var E=$(v,2),I=K(E);bH(I),H(E);var b=$(E,2);b.disabled=!0;var w=K(b);EH(w),H(b);var A=$(b,2),T=K(A);wH(T),H(A),H(h),ee(()=>{v.disabled=_(o),E.disabled=_(a),x(A,"aria-checked",i()),Ot(A,"active",i())}),De("click",v,l),De("click",E,u),De("click",b,d),De("click",A,g),N(t,h),le()}var LH=ce('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),NH=ce('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),SH=ce('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),DH=ce('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function RH(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Wr,"$settingsStore",n),i=()=>pe(_l,"$penColorStore",n),o=()=>pe(hp,"$InputHandlerStore",n),a=L(),l=L(),u=[];let d=M(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],h=["A","B","C","D","E","F","G","H","I","O"];let v=L(!1);function m(k){return k?h:g}function E(k){return[f.DIGIT,f.CENTER_PM,f.CORNER_PM,f.GIVEN].includes(k)}function I(k){const G=k.currentTarget;if(!G)return;const te=G.getAttribute("aria-checked");O(v,te!=="true")}D(()=>r(),()=>{O(a,r().penToolActive)}),D(()=>r(),()=>{O(l,r().letterToolActive)}),ye(),fe();var b=DH(),w=K(b);{var A=k=>{var G=Ce(),te=ne(G);Qe(te,1,()=>g,mt,(ie,oe)=>{var ue=LH(),be=K(ue);En(be);var Z;di(2),H(ue),ee(()=>{x(ue,"data-value",_(oe)),Ot(ue,"active",i()===_(oe)),Z!==(Z=_(oe))&&(be.value=(be.__value=_(oe))==null?"":_(oe))}),vd(u,[],be,()=>(_(oe),i()),Ee=>fo(_l,Ee)),N(ie,ue)}),N(k,G)},T=k=>{var G=Ce(),te=ne(G);Qe(te,1,()=>m(_(v)),mt,(ie,oe)=>{var ue=NH(),be=K(ue),Z=K(be,!0);H(be),di(2),H(ue),ee(()=>{Iy(ue,_(oe)),ct(Z,_(oe))}),De("click",ue,function(...Ee){var we;(we=o()&&o().padClick)==null||we.apply(this,Ee)}),N(ie,ue)}),N(k,G)};Q(w,k=>{d()===f.PEN_TOOL&&_(a)?k(A):k(T,!1)})}var U=$(w,2);{var P=k=>{var G=SH();ee(()=>{x(G,"aria-checked",_(v)),Ot(G,"letter-checked",_(v)),Ot(G,"num-checked",!_(v))}),De("click",G,I),N(k,G)};Q(U,k=>{_(l)&&E(d())&&k(P)})}var Y=$(U,2);H(b),ee(()=>{Ot(b,"digit",d()===f.DIGIT),Ot(b,"center",d()===f.CENTER_PM),Ot(b,"corner",d()===f.CORNER_PM),Ot(b,"color",d()===f.HIGHLIGHTS),Ot(b,"pen",d()===f.PEN_TOOL),Ot(Y,"letter-tool",_(l))}),De("click",Y,function(...k){var G;(G=o()&&o().padClick)==null||G.apply(this,k)}),N(t,b),le()}var TH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function kH(t){var e=TH();N(t,e)}var MH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function UH(t){var e=MH();N(t,e)}var GH=ce('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function cs(t,e){ae(e,!1);const n=[];let r=M(e,"selectedTool",12),i=M(e,"value",8),o=M(e,"title",8,void 0);function a(){cd(i())}fe();var l=GH(),u=K(l);En(u);var d,g=$(u,2);Et(g,e,"default",{}),H(l),ee(()=>{x(l,"title",o()),Ot(l,"active",i()===r()),d!==(d=i())&&(u.value=(u.__value=i())==null?"":i())}),vd(n,[],u,()=>(i(),r()),r),De("change",u,a),N(t,l),le()}var $H=ce('<span aria-hidden="true">1</span>'),FH=ce('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),PH=ce('<span aria-hidden="true" style="font-size: 50%">123</span>'),zH=ce('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),HH=ce('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),WH=ce('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function BH(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Wr,"$settingsStore",n);let i=M(e,"selectedTool",12);fe();var o=WH(),a=K(o);cs(a,{get value(){return f.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=$H();N(v,E)},$$slots:{default:!0},$$legacy:!0});var l=$(a,2);cs(l,{get value(){return f.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=FH();N(v,E)},$$slots:{default:!0},$$legacy:!0});var u=$(l,2);cs(u,{get value(){return f.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=PH();N(v,E)},$$slots:{default:!0},$$legacy:!0});var d=$(u,2);cs(d,{get value(){return f.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=zH(),I=K(E);kH(I),H(E),N(v,E)},$$slots:{default:!0},$$legacy:!0});var g=$(d,2);{var h=v=>{cs(v,{get value(){return f.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=HH(),b=K(I);UH(b),H(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};Q(g,v=>{r().penToolActive&&v(h)})}H(o),N(t,o),le()}var YH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function jH(t){var e=YH();N(t,e)}var KH=ce('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Xs(t,e){let n=M(e,"title",8,void 0),r=M(e,"clickCb",8,void 0);var i=KH(),o=K(i),a=K(o);Et(a,e,"default",{}),H(o),H(i),ee(()=>x(i,"title",n())),De("click",i,function(...l){var u;(u=r())==null||u.apply(this,l)}),N(t,i)}var VH=ce('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),XH=ce('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function qH(t,e){ae(e,!1);let n=M(e,"showModal",12,!1);function r(){n(!1)}function i(){cp(),fl(),n(!1)}fe(),qr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var l=XH(),u=$(K(l),2);Gl(u,{children:(d,g)=>{var h=VH(),v=ne(h),m=$(v,2);De("click",v,i),De("click",m,r),N(d,h)},$$slots:{default:!0}}),H(l),N(o,l)},$$slots:{default:!0},$$legacy:!0}),le()}var ZH=ce("<!> <!>",1);function QH(t){let e=L(!1);function n(){O(e,!0)}var r=ZH(),i=ne(r);Xs(i,{title:"Restart",clickCb:n,children:(a,l)=>{jH(a)},$$slots:{default:!0}});var o=$(i,2);qH(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var JH=ce('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function us(t,e){let n=M(e,"title",8);var r=JH(),i=K(r),o=K(i,!0);H(i);var a=$(i,2);Et(a,e,"default",{}),H(r),ee(()=>ct(o,n())),N(t,r)}var eW=ce('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function mn(t,e){let n=M(e,"description",8);var r=eW(),i=K(r),o=K(i,!0);H(i);var a=$(i,2),l=K(a);Et(l,e,"default",{}),H(a),H(r),ee(()=>ct(o,n())),N(t,r)}var tW=ce('<div class="shortcut svelte-1cgt5u5"> </div>');function _n(t,e){let n=M(e,"shortcut",8);var r=tW(),i=K(r,!0);H(r),ee(()=>ct(i,n())),N(t,r)}var nW=ce("<p></p>"),rW=ce("<!> <!> <!> <!>",1),iW=ce("<!> or <!>",1),oW=ce("<!> <!> <!> <!> <!> <!> <!> <!>",1),sW=ce("<!> <!>",1),aW=ce('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function lW(t,e){let n=M(e,"showModal",12,!1);qr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=aW(),a=K(o);us(a,{title:"Setting Instructions",children:(h,v)=>{var m=nW();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",N(h,m)},$$slots:{default:!0}});var l=$(a,2);us(l,{title:"General",children:(h,v)=>{mn(h,{description:"Toggle Darkmode",children:(m,E)=>{_n(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=$(l,2);us(u,{title:"Selection",children:(h,v)=>{var m=rW(),E=ne(m);mn(E,{description:"Select cells",children:(A,T)=>{_n(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=$(E,2);mn(I,{description:"Add to current selection",children:(A,T)=>{_n(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=$(I,2);mn(b,{description:"Remove from current selection",children:(A,T)=>{_n(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=$(b,2);mn(w,{description:"Add or remove from current selection",children:(A,T)=>{_n(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(h,m)},$$slots:{default:!0}});var d=$(u,2);us(d,{title:"Change Tool",children:(h,v)=>{var m=oW(),E=ne(m);mn(E,{description:"Cycle Tool",children:(Y,k)=>{_n(Y,{shortcut:"Space"})},$$slots:{default:!0}});var I=$(E,2);mn(I,{description:"Change to Digit Tool",children:(Y,k)=>{_n(Y,{shortcut:"Z"})},$$slots:{default:!0}});var b=$(I,2);mn(b,{description:"Change to Corner Pencilmark Tool",children:(Y,k)=>{_n(Y,{shortcut:"X"})},$$slots:{default:!0}});var w=$(b,2);mn(w,{description:"Change to Center Pencilmark Tool",children:(Y,k)=>{_n(Y,{shortcut:"C"})},$$slots:{default:!0}});var A=$(w,2);mn(A,{description:"Change to Highlights Tool",children:(Y,k)=>{_n(Y,{shortcut:"V"})},$$slots:{default:!0}});var T=$(A,2);mn(T,{description:"Quickshift To Corner Pencilmark Tool",children:(Y,k)=>{_n(Y,{shortcut:"Shift"})},$$slots:{default:!0}});var U=$(T,2);mn(U,{description:"Quickshift To Center Pencilmark Tool",children:(Y,k)=>{_n(Y,{shortcut:"Ctrl"})},$$slots:{default:!0}});var P=$(U,2);mn(P,{description:"Quickshift To Highlights Tool",children:(Y,k)=>{var G=iW(),te=ne(G);_n(te,{shortcut:"Shift + Ctrl"});var ie=$(te,2);_n(ie,{shortcut:"Alt"}),N(Y,G)},$$slots:{default:!0}}),N(h,m)},$$slots:{default:!0}});var g=$(d,2);us(g,{title:"Undo/Redo",children:(h,v)=>{var m=sW(),E=ne(m);mn(E,{description:"Undo",children:(b,w)=>{_n(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=$(E,2);mn(I,{description:"Redo",children:(b,w)=>{_n(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(h,m)},$$slots:{default:!0}}),H(o),N(r,o)},$$slots:{default:!0},$$legacy:!0})}var cW=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function uW(t){var e=cW();N(t,e)}var dW=ce("<!> <!>",1);function _W(t){let e=L(!1);function n(){O(e,!0)}var r=dW(),i=ne(r);Xs(i,{title:"Info",clickCb:n,children:(a,l)=>{uW(a)},$$slots:{default:!0}});var o=$(i,2);lW(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var fW=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function gW(t){var e=fW();N(t,e)}var hW=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function vW(t){var e=hW();N(t,e)}function pW(t){let e=L(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),O(e,!_(e))}Xs(t,{title:"Fullscreen",clickCb:o,children:(a,l)=>{var u=Ce(),d=ne(u);{var g=v=>{vW(v)},h=v=>{gW(v)};Q(d,v=>{_(e)?v(g):v(h,!1)})}N(a,u)},$$slots:{default:!0}})}function Jp(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"renderers",8),i=M(e,"options",8);fe();var o=Ce(),a=ne(o);{var l=u=>{var d=Ce(),g=ne(d);ev(g,()=>r()[n().type],(h,v)=>{v(h,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=Ce(),b=ne(I);{var w=T=>{vl(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=T=>{var U=Zw();ee(()=>ct(U,n().raw)),N(T,U)};Q(b,T=>{"tokens"in n()&&n().tokens?T(w):T(A,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,d)};Q(a,u=>{r()[n().type]&&u(l)})}N(t,o),le()}function vl(t,e){let n=M(e,"tokens",8),r=M(e,"renderers",8),i=M(e,"options",8);var o=Ce(),a=ne(o);{var l=u=>{var d=Ce(),g=ne(d);Qe(g,1,n,mt,(h,v)=>{Jp(h,{get token(){return _(v)},get renderers(){return r()},get options(){return i()}})}),N(u,d)};Q(a,u=>{n()&&u(l)})}N(t,o)}function em(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function tm(t){return t.startsWith("/")||t.startsWith("#")}function mW(t,e){return e.slug(t).replace(/--+/g,"-")}function EW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;let o=L();D(()=>(X(n()),X(r())),()=>{O(o,mW(n().text,r().slugger))}),ye(),fe();var a=Ce(),l=ne(a);return rv(l,()=>`h${n().depth}`,!1,(u,d)=>{let g;ee(()=>g=tv(u,g,{id:_(o)},void 0,u.namespaceURI===gd,u.nodeName.includes("-")));var h=Ce(),v=ne(h);Et(v,e,"default",{}),N(d,h)}),N(t,a),it(e,"renderers",i),le({renderers:i})}var CW=ce("<blockquote><!></blockquote>");function bW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=CW(),a=K(o);return Et(a,e,"default",{}),H(o),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}function IW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8),o=L();D(()=>X(n()),()=>{O(o,n().ordered?"ol":"ul")}),ye(),fe();var a=Ce(),l=ne(a);rv(l,()=>_(o),!1,(u,d)=>{let g;ee(()=>g=tv(u,g,{start:n().start||1},void 0,u.namespaceURI===gd,u.nodeName.includes("-")));var h=Ce(),v=ne(h);Qe(v,1,()=>n().items,mt,(m,E)=>{var I=dt(()=>({..._(E)}));Jp(m,{get token(){return _(I)},get options(){return r()},get renderers(){return i()}})}),N(d,h)}),N(t,a),le()}var wW=ce("<li><!></li>");function yW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=wW(),a=K(o);return Et(a,e,"default",{}),H(o),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var OW=ce("<br>");function AW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=OW();return N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var xW=ce("<pre><code> </code></pre>");function LW(t,e){ae(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;fe();var o=xW(),a=K(o),l=K(a,!0);return H(a),H(o),ee(()=>{Oy(a,`lang-${n().lang}`),ct(l,n().text)}),N(t,o),it(e,"options",r),it(e,"renderers",i),le({options:r,renderers:i})}var NW=ce("<code> </code>");function SW(t,e){ae(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;fe();var o=NW(),a=K(o,!0);return ee(()=>ct(a,n().raw.slice(1,n().raw.length-1))),H(o),N(t,o),it(e,"options",r),it(e,"renderers",i),le({options:r,renderers:i})}var DW=ce('<th scope="col"><!></th>'),RW=ce("<td><!></td>"),TW=ce("<tr></tr>"),kW=ce("<table><thead><tr></tr></thead><tbody></tbody></table>");function MW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8);fe();var o=kW(),a=K(o),l=K(a);Qe(l,5,()=>n().header,mt,(d,g)=>{var h=DW(),v=K(h);vl(v,{get tokens(){return _(g).tokens},get options(){return r()},get renderers(){return i()}}),H(h),N(d,h)}),H(l),H(a);var u=$(a);Qe(u,5,()=>n().rows,mt,(d,g)=>{var h=TW();Qe(h,5,()=>_(g),mt,(v,m)=>{var E=RW(),I=K(E);vl(I,{get tokens(){return _(m).tokens},get options(){return r()},get renderers(){return i()}}),H(E),N(v,E)}),H(h),N(d,h)}),H(u),H(o),N(t,o),le()}function UW(t,e){ae(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;fe();var o=Ce(),a=ne(o);return yy(a,()=>n().text),N(t,o),it(e,"options",r),it(e,"renderers",i),le({options:r,renderers:i})}var GW=ce("<p><!></p>");function $W(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=GW(),a=K(o);return Et(a,e,"default",{}),H(o),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var FW=ce("<a><!></a>");function PW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;fe();var o=FW();ee(()=>x(o,"href",tm(n().href)?em(r().baseUrl,n().href):n().href));var a=K(o);return Et(a,e,"default",{}),H(o),ee(()=>x(o,"title",n().title)),N(t,o),it(e,"renderers",i),le({renderers:i})}function zW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ce(),a=ne(o);return Et(a,e,"default",{}),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var HW=ce("<dfn><!></dfn>");function WW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=HW(),a=K(o);return Et(a,e,"default",{}),H(o),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var BW=ce("<del><!></del>");function YW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=BW(),a=K(o);return Et(a,e,"default",{}),H(o),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var jW=ce("<em><!></em>");function KW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=jW(),a=K(o);return Et(a,e,"default",{}),H(o),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var VW=ce("<hr>");function XW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=VW();return N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var qW=ce("<strong><!></strong>");function ZW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=qW(),a=K(o);return Et(a,e,"default",{}),H(o),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}var QW=ce('<img class="markdown-image svelte-z38cge">');function JW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;fe();var o=QW();return ee(()=>x(o,"src",tm(n().href)?em(r().baseUrl,n().href):n().href)),ee(()=>{x(o,"title",n().title),x(o,"alt",n().text)}),N(t,o),it(e,"renderers",i),le({renderers:i})}function Hh(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ce(),a=ne(o);return Et(a,e,"default",{}),N(t,o),it(e,"token",n),it(e,"options",r),it(e,"renderers",i),le({token:n,options:r,renderers:i})}const e9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,t9=Object.hasOwnProperty;class n9{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=r9(e,n===!0);const o=i;for(;t9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function r9(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(e9,"").replace(/ /g,"-"))}function h_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let zi=h_();function nm(t){zi=t}const rm=/[&<>"']/,i9=new RegExp(rm.source,"g"),im=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,o9=new RegExp(im.source,"g"),s9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wh=t=>s9[t];function kn(t,e){if(e){if(rm.test(t))return t.replace(i9,Wh)}else if(im.test(t))return t.replace(o9,Wh);return t}const a9=/(^|[^\[])\^/g;function Dt(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(a9,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Bh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Cs={exec:()=>null};function Yh(t,e){const n=t.replace(/\|/g,(o,a,l)=>{let u=!1,d=a;for(;--d>=0&&l[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function ds(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function l9(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function jh(t,e,n,r){const i=e.href,o=e.title?kn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:o,text:kn(a)}}function c9(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class pl{constructor(e){he(this,"options");he(this,"rules");he(this,"lexer");this.options=e||zi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ds(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=c9(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=ds(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ds(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=ds(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let l=!1;const u=[];let d;for(d=0;d<r.length;d++)if(/^ {0,3}>/.test(r[d]))u.push(r[d]),l=!0;else if(!l)u.push(r[d]);else break;r=r.slice(d);const g=u.join(`
`),h=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,o=o?`${o}
${h}`:h;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,a,!0),this.lexer.state.top=v,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,i=i.substring(0,i.length-E.raw.length)+b.raw,o=o.substring(0,o.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,o=o.substring(0,o.length-E.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;e;){let u=!1,d="",g="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;d=n[0],e=e.substring(d.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),v=e.split(`
`,1)[0],m=!h.trim(),E=0;if(this.options.pedantic?(E=2,g=h.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=h.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(d+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),U=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),P=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let k;if(v=Y,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),k=v):k=v.replace(/\t/g,"    "),T.test(v)||U.test(v)||P.test(v)||w.test(v)||A.test(v))break;if(k.search(/[^ ]/)>=E||!v.trim())g+=`
`+k.slice(E);else{if(m||h.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(h)||U.test(h)||A.test(h))break;g+=`
`+v}!m&&!v.trim()&&(m=!0),d+=Y+`
`,e=e.substring(Y.length+1),h=k.slice(E)}}o.loose||(l?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(d)&&(l=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(b=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:d,task:!!I,checked:b,loose:!1,text:g,tokens:[]}),o.raw+=d}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const d=o.items[u].tokens.filter(h=>h.type==="space"),g=d.length>0&&d.some(h=>/\n.*\n/.test(h.raw));o.loose=g}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Yh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?a.align.push("right"):/^ *:-+: *$/.test(l)?a.align.push("center"):/^ *:-+ *$/.test(l)?a.align.push("left"):a.align.push(null);for(let l=0;l<r.length;l++)a.header.push({text:r[l],tokens:this.lexer.inline(r[l]),header:!0,align:a.align[l]});for(const l of o)a.rows.push(Yh(l,a.header.length).map((u,d)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[d]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:kn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=ds(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=l9(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),jh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return jh(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let l,u,d=a,g=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+a);(i=h.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(u=[...l].length,i[3]||i[4]){d+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){g+=u;continue}if(d-=u,d>0)continue;u=Math.min(u,u+d+g);const v=[...i[0]][0].length,m=e.slice(0,a+i.index+v+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=kn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=kn(n[1]),i="mailto:"+r):(r=kn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=kn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=kn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=kn(n[0]),{type:"text",raw:n[0],text:r}}}}const u9=/^(?:[ \t]*(?:\n|$))+/,d9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,_9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,qs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,f9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,om=/(?:[*+-]|\d{1,9}[.)])/,sm=Dt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,om).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),v_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,g9=/^[^\n]+/,p_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,h9=Dt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",p_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),v9=Dt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,om).getRegex(),Zl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",m_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,p9=Dt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",m_).replace("tag",Zl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),am=Dt(v_).replace("hr",qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zl).getRegex(),m9=Dt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",am).getRegex(),E_={blockquote:m9,code:d9,def:h9,fences:_9,heading:f9,hr:qs,html:p9,lheading:sm,list:v9,newline:u9,paragraph:am,table:Cs,text:g9},Kh=Dt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zl).getRegex(),E9={...E_,table:Kh,paragraph:Dt(v_).replace("hr",qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Kh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Zl).getRegex()},C9={...E_,html:Dt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",m_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Cs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Dt(v_).replace("hr",qs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,b9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,cm=/^( {2,}|\\)\n(?!\s*$)/,I9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Zs="\\p{P}\\p{S}",w9=Dt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Zs).getRegex(),y9=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,O9=Dt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Zs).getRegex(),A9=Dt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Zs).getRegex(),x9=Dt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Zs).getRegex(),L9=Dt(/\\([punct])/,"gu").replace(/punct/g,Zs).getRegex(),N9=Dt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),S9=Dt(m_).replace("(?:-->|$)","-->").getRegex(),D9=Dt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",S9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ml=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,R9=Dt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ml).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),um=Dt(/^!?\[(label)\]\[(ref)\]/).replace("label",ml).replace("ref",p_).getRegex(),dm=Dt(/^!?\[(ref)\](?:\[\])?/).replace("ref",p_).getRegex(),T9=Dt("reflink|nolink(?!\\()","g").replace("reflink",um).replace("nolink",dm).getRegex(),C_={_backpedal:Cs,anyPunctuation:L9,autolink:N9,blockSkip:y9,br:cm,code:b9,del:Cs,emStrongLDelim:O9,emStrongRDelimAst:A9,emStrongRDelimUnd:x9,escape:lm,link:R9,nolink:dm,punctuation:w9,reflink:um,reflinkSearch:T9,tag:D9,text:I9,url:Cs},k9={...C_,link:Dt(/^!?\[(label)\]\((.*?)\)/).replace("label",ml).getRegex(),reflink:Dt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ml).getRegex()},_d={...C_,escape:Dt(lm).replace("])","~|])").getRegex(),url:Dt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},M9={..._d,br:Dt(cm).replace("{2,}","*").getRegex(),text:Dt(_d.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Va={normal:E_,gfm:E9,pedantic:C9},_s={normal:C_,gfm:_d,breaks:M9,pedantic:k9};class $n{constructor(e){he(this,"tokens");he(this,"options");he(this,"state");he(this,"tokenizer");he(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||zi,this.options.tokenizer=this.options.tokenizer||new pl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Va.normal,inline:_s.normal};this.options.pedantic?(n.block=Va.pedantic,n.inline=_s.pedantic):this.options.gfm&&(n.block=Va.gfm,this.options.breaks?n.inline=_s.breaks:n.inline=_s.gfm),this.tokenizer.rules=n}static get rules(){return{block:Va,inline:_s}}static lex(e,n){return new $n(n).lex(e)}static lexInline(e,n){return new $n(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const u=e.slice(1);let d;this.options.extensions.startBlock.forEach(g=>{d=g.call({lexer:this},u),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(a=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,l,u,d;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)g.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,l.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(d=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,d)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const h=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},h),typeof v=="number"&&v>=0&&(g=Math.min(g,v))}),g<1/0&&g>=0&&(o=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(d=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class El{constructor(e){he(this,"options");he(this,"parser");this.options=e||zi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+kn(i)+'">'+(r?o:kn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:kn(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let i="";for(let l=0;l<e.items.length;l++){const u=e.items[l];i+=this.listitem(u)}const o=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+o+a+`>
`+i+"</"+o+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let o=0;o<e.header.length;o++)r+=this.tablecell(e.header[o]);n+=this.tablerow({text:r});let i="";for(let o=0;o<e.rows.length;o++){const a=e.rows[o];r="";for(let l=0;l<a.length;l++)r+=this.tablecell(a[l]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Bh(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Bh(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class b_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class tr{constructor(e){he(this,"options");he(this,"renderer");he(this,"textRenderer");this.options=e||zi,this.options.renderer=this.options.renderer||new El,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new b_}static parse(e,n){return new tr(n).parse(e)}static parseInline(e,n){return new tr(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=o,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let l=a,u=this.renderer.text(l);for(;i+1<e.length&&e[i+1].type==="text";)l=e[++i],u+=`
`+this.renderer.text(l);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=l||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}}class bs{constructor(e){he(this,"options");he(this,"block");this.options=e||zi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?$n.lex:$n.lexInline}provideParser(){return this.block?tr.parse:tr.parseInline}}he(bs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class U9{constructor(...e){he(this,"defaults",h_());he(this,"options",this.setOptions);he(this,"parse",this.parseMarkdown(!0));he(this,"parseInline",this.parseMarkdown(!1));he(this,"Parser",tr);he(this,"Renderer",El);he(this,"TextRenderer",b_);he(this,"Lexer",$n);he(this,"Tokenizer",pl);he(this,"Hooks",bs);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const l=a;for(const u of l.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of l.rows)for(const d of u)r=r.concat(this.walkTokens(d.tokens,n));break}case"list":{const l=a;r=r.concat(this.walkTokens(l.items,n));break}default:{const l=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(u=>{const d=l[u].flat(1/0);r=r.concat(this.walkTokens(d,n))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...l){let u=o.renderer.apply(this,l);return u===!1&&(u=a.apply(this,l)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new El(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const l=a,u=r.renderer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new pl(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const l=a,u=r.tokenizer[l],d=o[l];o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new bs;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const l=a,u=r.hooks[l],d=o[l];bs.passThroughHooks.has(a)?o[l]=g=>{if(this.defaults.async)return Promise.resolve(u.call(o,g)).then(v=>d.call(o,v));const h=u.call(o,g);return d.call(o,h)}:o[l]=(...g)=>{let h=u.apply(o,g);return h===!1&&(h=d.apply(o,g)),h}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(l){let u=[];return u.push(a.call(this,l)),o&&(u=u.concat(o.call(this,l))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return $n.lex(e,n??this.defaults)}parser(e,n){return tr.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},l=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?$n.lex:$n.lexInline,d=a.hooks?a.hooks.provideParser():e?tr.parse:tr.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(g=>u(g,a)).then(g=>a.hooks?a.hooks.processAllTokens(g):g).then(g=>a.walkTokens?Promise.all(this.walkTokens(g,a.walkTokens)).then(()=>g):g).then(g=>d(g,a)).then(g=>a.hooks?a.hooks.postprocess(g):g).catch(l);try{a.hooks&&(r=a.hooks.preprocess(r));let g=u(r,a);a.hooks&&(g=a.hooks.processAllTokens(g)),a.walkTokens&&this.walkTokens(g,a.walkTokens);let h=d(g,a);return a.hooks&&(h=a.hooks.postprocess(h)),h}catch(g){return l(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+kn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Mi=new U9;function Nt(t,e){return Mi.parse(t,e)}Nt.options=Nt.setOptions=function(t){return Mi.setOptions(t),Nt.defaults=Mi.defaults,nm(Nt.defaults),Nt};Nt.getDefaults=h_;Nt.defaults=zi;Nt.use=function(...t){return Mi.use(...t),Nt.defaults=Mi.defaults,nm(Nt.defaults),Nt};Nt.walkTokens=function(t,e){return Mi.walkTokens(t,e)};Nt.parseInline=Mi.parseInline;Nt.Parser=tr;Nt.parser=tr.parse;Nt.Renderer=El;Nt.TextRenderer=b_;Nt.Lexer=$n;Nt.lexer=$n.lex;Nt.Tokenizer=pl;Nt.Hooks=bs;Nt.parse=Nt;Nt.options;Nt.setOptions;Nt.use;Nt.walkTokens;Nt.parseInline;tr.parse;$n.lex;function G9(t){return new $n().lex(t)}const $9=()=>({heading:EW,blockquote:bW,list:IW,list_item:yW,br:AW,code:LW,codespan:SW,table:MW,html:UW,paragraph:$W,link:PW,text:zW,def:WW,del:YW,em:KW,hr:XW,strong:ZW,image:JW,space:Hh,escape:Hh}),F9=()=>({baseUrl:"/",slugger:new n9});function P9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},nv(()=>{console.warn=t})}function _m(t,e){ae(e,!1),P9();let n=M(e,"source",8),r=M(e,"options",24,()=>({})),i=M(e,"renderers",24,()=>({})),o=L(),a=L(),l=L();D(()=>(X(n()),X(i()),X(r())),()=>{O(o,G9(n())),O(a,{...$9(),...i()}),O(l,{...F9(),...r()})}),ye(),fe(),vl(t,{get tokens(){return _(o)},get renderers(){return _(a)},get options(){return _(l)}}),le()}var z9=ce('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),H9=ce('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),W9=ce('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function B9(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Xr,"$puzzleMetaStore",n),i=L();let o=M(e,"showModal",12,!1);function a(u){return u?cl(u," & ",", "):"Anonymous"}function l(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{O(i,r())}),ye(),fe(),qr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,d)=>{var g=W9(),h=K(g),v=K(h,!0);H(h);var m=$(h,2),E=K(m);ee(()=>ct(E,`by ${a(_(i).authors)??""}`)),H(m);var I=$(m,2),b=K(I),w=dt(()=>l(_(i).ruleset));_m(b,{get source(){return _(w)}}),H(I);var A=$(I,2);{var T=Y=>{var k=z9(),G=$(ne(k),2);ee(()=>x(G,"href",_(i).ctcUrl)),N(Y,k)};Q(A,Y=>{var k,G;(G=(k=_(i))==null?void 0:k.ctcUrl)!=null&&G.length&&Y(T)})}var U=$(A,2);{var P=Y=>{var k=H9(),G=$(ne(k),2);ee(()=>x(G,"href",_(i).ctcYoutubeUrl)),N(Y,k)};Q(U,Y=>{var k,G;(G=(k=_(i))==null?void 0:k.ctcYoutubeUrl)!=null&&G.length&&Y(P)})}H(g),ee(()=>{var Y;return ct(v,((Y=_(i))==null?void 0:Y.title)||"Puzzle")}),N(u,g)},$$slots:{default:!0},$$legacy:!0}),le()}var Y9=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function j9(t){var e=Y9();N(t,e)}var K9=ce("<!> <!>",1);function V9(t){let e=L(!1);function n(){O(e,!0)}var r=K9(),i=ne(r);Xs(i,{title:"Rules",clickCb:n,children:(a,l)=>{j9(a)},$$slots:{default:!0}});var o=$(i,2);B9(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var X9=ce("<!> <!>",1);function q9(t){let e=L(!1);function n(){O(e,!0)}var r=X9(),i=ne(r);Xs(i,{title:"Settings",clickCb:n,children:(a,l)=>{vp(a)},$$slots:{default:!0}});var o=$(i,2);pp(o,{get showModal(){return _(e)},set showModal(a){O(e,a)},$$legacy:!0}),N(t,r)}var Z9=ce('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!> <!></div>');function Q9(t){var e=Z9(),n=K(e);q9(n);var r=$(n,2);V9(r);var i=$(r,2);pW(i);var o=$(i,2);_W(o);var a=$(o,2);QH(a),H(e),N(t,e)}var J9=ce('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function eB(t,e){ae(e,!1);const n=Xe(),r=()=>pe(ho,"$svgRefStore",n),i=()=>pe(Xr,"$puzzleMetaStore",n),o=()=>pe(en,"$toolStore",n),a=L(),l=L();function u(){r()&&r().focus()}function d(oe){return oe?cl(oe," & ",", "):"Anonymous"}function g(oe){return oe&&oe.length?oe:"Normal sudoku rules apply."}D(()=>i(),()=>{O(a,i().title??"Sudoku")}),D(()=>i(),()=>{O(l,d(i().authors))}),ye(),fe();var h=J9(),v=K(h),m=K(v),E=K(m),I=K(E,!0);H(E);var b=$(E,2),w=K(b);H(b),H(m);var A=$(m,2),T=K(A),U=dt(()=>g(i().ruleset));_m(T,{get source(){return _(U)}}),H(A),H(v);var P=$(v,2),Y=K(P);Q9(Y);var k=$(Y,2),G=K(k);xH(G,{});var te=$(G,2);RH(te,{get selectedTool(){return o()}});var ie=$(te,2);BH(ie,{get selectedTool(){return Jh(),o()},set selectedTool(oe){fo(en,oe)},$$legacy:!0}),H(k),H(P),H(h),ee(()=>{ct(I,_(a)),ct(w,`by ${_(l)??""}`)}),De("click",P,Un(()=>{u()})),N(t,h),le()}var tB=ce('<div class="left-panel svelte-fwyvr2"><!></div>'),nB=ce('<div class="game svelte-fwyvr2"><!> <div class="center-panel svelte-fwyvr2"><!></div> <div class="right-panel svelte-fwyvr2"><!></div></div>');function EB(t,e){ae(e,!1);const n=Xe(),r=()=>pe(Ps,"$gameModeStore",n),i=L();nv(async()=>{const v=window.location.origin,m=th===""?v:`${v}/${th}`;try{await R8({workerURL:`${m}/minizinc-worker.js`,wasmURL:`${m}/minizinc.wasm`,dataURL:`${m}/minizinc.data`})}catch(E){const I="Failed to initialize MiniZinc: "+E.message;console.log(I)}}),D(()=>r(),()=>{O(i,r())}),ye(),fe();var o=nB(),a=K(o);{var l=v=>{var m=tB(),E=K(m);eP(E),H(m),N(v,m)};Q(a,v=>{_(i)===Ui.SETTING&&v(l)})}var u=$(a,2),d=K(u);pH(d,{}),H(u);var g=$(u,2),h=K(g);eB(h,{}),H(g),H(o),N(t,o),le()}export{EB as G,mB as b,pB as d,pR as p,fl as r,$R as s};
