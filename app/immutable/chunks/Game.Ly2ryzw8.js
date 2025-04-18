var wb=Object.defineProperty;var yb=(t,e,n)=>e in t?wb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ce=(t,e,n)=>yb(t,typeof e!="symbol"?e+"":e,n);import{c as yu,o as Lb,p as Ab,q as nd,a as N,s as ne,u as Me,t as ce,d as Se,v as Sb,m as Nb}from"./disclose-version.MO2MFdNj.js";import{i as pe}from"./legacy.sN80Fe4S.js";import{l as Ph,h as sn,k as Is,y as Hh,v as ps,R as xb,V as Rb,U as Tb,g as Lu,i as Bh,F as Wh,a0 as Db,j as kb,u as Pg,A as Gb,aJ as rd,z as Mb,x as Ub,a2 as id,ar as zh,J as Hg,aK as $b,a3 as Fb,a8 as Pb,m as Hb,c as V,r as W,p as ue,s as M,t as te,a as de,Z as f,al as qe,aL as D,_ as y,aM as be,$ as R,av as Q,f as se,aN as Bb,aC as Ri,aO as ru,ak as Bg}from"./utils.DP-F0xIN.js";import{s as Ye,i as re,a as he,b as ws,m as Yh}from"./store.LjYb6QFI.js";import{s as di,u as Wb,a as zb,b as Yb,c as jb,e as Kb,f as Vb,g as Xb,h as qb,t as Zb}from"./global.DKHZCW4A.js";import{e as lt,i as It}from"./each.BW2jvj41.js";import{i as Qb,p as U}from"./props.DNCAbpfG.js";import{w as Rt,g as st,d as $i}from"./index.C8uZp8ho.js";import{s as L,r as an,a as jh,c as Jb,b as ew,d as Kh}from"./attributes.H32U76MF.js";import{s as ot}from"./render.3Jdrsfl8.js";import{b as Ti,c as Vh}from"./this.DYGG7ZR8.js";import{a as tw,o as Xh}from"./index-client.jiOaxa6s.js";import{b as Wg}from"./paths.C8z8WrbZ.js";function nw(t,e,n,r,i){var o=t,a="",c;Ph(()=>{if(a===(a=e()??"")){sn&&Is();return}c!==void 0&&(Wh(c),c=void 0),a!==""&&(c=Hh(()=>{if(sn){ps.data;for(var u=Is(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=xb(u);if(u===null)throw Rb(),Tb;yu(ps,_),o=Lu(u);return}var h=a+"",g=Lb(h);yu(Bh(g),g.lastChild),o.before(g)}))})}function gt(t,e,n,r,i){var c;sn&&Is();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function qh(t,e,n,r,i,o){let a=sn;sn&&Is();var c,u,_=null;sn&&ps.nodeType===1&&(_=ps,Is());var h=sn?ps:t,g;Ph(()=>{const v=e()||null;var m=v==="svg"?rd:null;v!==c&&(g&&(v===null?Mb(g,()=>{g=null,u=null}):v===u?Ub(g):Wh(g)),v&&v!==u&&(g=Hh(()=>{if(_=sn?_:m?document.createElementNS(m,v):document.createElement(v),yu(_,_),r){sn&&Ab(v)&&_.append(document.createComment(""));var E=sn?Bh(_):_.appendChild(kb());sn&&(E===null?Pg(!1):Lu(E)),r(_,E)}Gb.nodes_end=_,h.before(_)})),c=v,c&&(u=c))},Db),a&&(Pg(!0),Lu(h))}function ys(t,e,n){var r=t.__className,i=Zh(e);sn&&t.getAttribute("class")===i?t.__className=i:(r!==i||sn&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function rw(t,e,n){var r=t.__className,i=Zh(e);sn&&t.className===i?t.__className=i:(r!==i||sn&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Zh(t,e){return(t??"")+""}function wt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Vn(t,e,n=e){var r=$b();nd(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=ou(t)?su(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(sn&&t.defaultValue!==t.value||Fb(e)==null&&t.value)&&n(ou(t)?su(t.value):t.value),id(()=>{var i=e();ou(t)&&i===su(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const iu=new Set;function dl(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),nd(n,"change",()=>{var _=n.__value;o&&(_=zg(a,_,n.checked)),i(_)},()=>i(o?[]:null)),id(()=>{var _=r();if(sn&&n.defaultChecked!==n.checked){c=!0;return}o?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Qb(n.__value,_)}),zh(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),iu.has(a)||(iu.add(a),Hg(()=>{a.sort((_,h)=>_.compareDocumentPosition(h)===4?-1:1),iu.delete(a)})),Hg(()=>{if(c){var _;if(o)_=zg(a,_,n.checked);else{var h=a.find(g=>g.checked);_=h==null?void 0:h.__value}i(_)}})}function zg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function ou(t){var e=t.type;return e==="number"||e==="range"}function su(t){return t===""?null:+t}function iw(t,e,n=e){nd(t,"change",()=>{n(t.files)}),id(()=>{t.files=e()})}function Je(t,e,n){var r=Pb(t,e);r&&r.set&&(t[e]=n,zh(()=>{t[e]=null}))}function ow(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Zn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function au(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function sw(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=Hb(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var Io=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Io||{}),od=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(od||{}),Qh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Qh||{}),Jh=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(Jh||{}),ep=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(ep||{}),tp=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(tp||{}),np=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(np||{}),rp=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(rp||{}),ip=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(ip||{}),op=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(op||{}),sp=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(sp||{}),_l=(t=>(t.FOG_LIGHTS="Fog Lights",t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(_l||{}),sd=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(sd||{}),ad=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(ad||{}),ld=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(ld||{}),cd=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(cd||{}),ud=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(ud||{}),dd=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(dd||{}),_d=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(_d||{}),fd=(t=>(t.CLONE_REGION="Clone Region",t))(fd||{}),gd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(gd||{}),hd=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(hd||{}),pd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(pd||{}),vd=(t=>(t.MAZE_WALL="Maze Wall",t))(vd||{}),md=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(md||{}),Ed=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Ed||{}),ap=(t=>(t.PEN_TOOL="Pen Tool",t))(ap||{});const Cd={...Qh,...Jh,...ep,...rp,...ip,...np,...op,...sp,...tp},lp={..._l,...sd,...ad,...ld,...cd,...ud,...dd,..._d,...fd,...gd,...hd,...pd,...vd,...md},d={...od,...Cd,...lp,...Ed,...ap};var x=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(x||{});function aw(t){return Object.values(Cd).includes(t)}function lw(t){return Object.values(lp).includes(t)}function cp(t){return Object.values(_l).includes(t)||t===d.COSMETIC_CELL_CENTER_SHAPE}function fl(t){return Object.values(sd).includes(t)||t===d.COSMETIC_CELL_ARROW}function gl(t){return Object.values(ad).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function cw(t){return cp(t)||fl(t)||gl(t)}function hl(t){return Object.values(ld).includes(t)||t===d.COSMETIC_EDGE}function Id(t){return Object.values(cd).includes(t)||t===d.COSMETIC_CORNER}function Od(t){return Object.values(ud).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function bd(t){return Object.values(dd).includes(t)||t===d.COSMETIC_ARROW}function wd(t){return Object.values(_d).includes(t)||t===d.COSMETIC_CAGE}function up(t){return Object.values(pd).includes(t)}function dp(t){return Object.values(vd).includes(t)}function _p(t){return Object.values(fd).includes(t)}function go(t){const e=Object.values(gd),n=Object.values(hd);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function uw(t){return Object.values(md).includes(t)}function dw(t){return Object.values(Ed).includes(t)}function yd(t){return Object.values(od).includes(t)}const _w=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],fw=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function fp(t){for(const e of Object.values(d))if(e===t)return e}function gp(t,e){return Object.values(e).includes(t)}var B=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(B||{});function hn(t,e,n){n!==void 0&&(t[e]=n)}function gw(t){var e,n,r,i,o,a,c,u,_,h,g,v,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(h=t.strokeDasharray)!=null&&h.editable||(g=t.strokeDashoffset)!=null&&g.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function Au(t){var n,r,i,o,a,c,u,_,h,g,v,m,E,I,O,b,S,k,G,F,Y,H,j;const e={type:t.type};return hn(e,"n",(n=t.n)==null?void 0:n.value),hn(e,"r",(r=t.r)==null?void 0:r.value),hn(e,"height",(i=t.height)==null?void 0:i.value),hn(e,"width",(o=t.width)==null?void 0:o.value),hn(e,"inset",(a=t.inset)==null?void 0:a.value),hn(e,"angle",(c=t.angle)==null?void 0:c.value),hn(e,"fill",(u=t.fill)==null?void 0:u.value),hn(e,"stroke",(_=t.stroke)==null?void 0:_.value),hn(e,"strokeWidth",(h=t.strokeWidth)==null?void 0:h.value),hn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),hn(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),hn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),hn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),hn(e,"opacity",(I=t.opacity)==null?void 0:I.value),hn(e,"displayValue",(O=t.displayValue)==null?void 0:O.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(S=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:S.value,shortenTail:(G=(k=t.linePathOptions)==null?void 0:k.shortenTail)==null?void 0:G.value,bezierRounding:(Y=(F=t.linePathOptions)==null?void 0:F.bezierRounding)==null?void 0:Y.value,closeLoops:(j=(H=t.linePathOptions)==null?void 0:H.closeLoops)==null?void 0:j.value}),e}function hw(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const Yg={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},jg={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},Kg={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Su={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Nu={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ls={type:"Line",strokeWidth:.125,stroke:"gray"},Ld={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},hp={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},pw={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},Vg={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var P=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(P||{});const pl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,Ln=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Oo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,vw=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Qt=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,bo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ad=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,mw=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,Ew=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Cw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,wo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Iw=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,Ow=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,bw=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function ww(t){return fl(t)?mw():gl(t)?Ew():t===d.XV?Ow():hl(t)?Cw():wd(t)?pl():bd(t)?Oo():go(t)?vw():Od(t)?De():_p(t)?bw():""}var ve=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(ve||{}),yt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(yt||{});const yw={inputOptions:{type:ve.ARROW},toolId:d.ARROW,order:P.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},Lw={inputOptions:{type:ve.ARROW},toolId:d.AVERAGE_ARROW,order:P.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}},Aw={inputOptions:{type:ve.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:P.ARROW_TOOLS,shape:{type:B.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}};ve.ARROW,d.SQUARE_ROOT_ARROW,P.ARROW_TOOLS,B.LINE,Oo(),x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL;const Sw={inputOptions:{type:ve.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:P.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:Oo(),tags:[],categories:[x.ARROW_CONSTRAINT,x.LOCAL_CONSTRAINT,x.ARROW_TOOL]}};function Nw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function xw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function Rw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function Tw(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function Dw(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const kw={Delete:null,Backspace:null};function Gw(t,e=10){if(t in kw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function Mw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function Uw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function $w(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function Fw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function pp(t){return t==="Backspace"}function yo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||pp(t.key))}function Pw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function Hw(t){return Pw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function Bw(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Fi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Ur(t,e,n){if(t===void 0)return t;let r=t;return pp(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Sd=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CAGE_TOOL],An=[x.CAGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CAGE_TOOL];function vp(t,e=5){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function mp(t,e,n){return Ur(t,e,n)}const En={type:B.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},vl={type:ve.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},Sn={...vl,valueUpdater:(t,e)=>mp(t,e,vp)},Ww={inputOptions:Sn,toolId:d.KILLER_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:Ln(),tags:[],categories:An}},zw={inputOptions:Sn,toolId:d.UNIQUE_DIGITS_CAGE,order:P.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:Ln(),tags:[],categories:An}},Yw={inputOptions:Sn,toolId:d.INVERTED_KILLER_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:Ln(),tags:[],categories:An}},jw={inputOptions:Sn,toolId:d.SUM_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:Ln(),tags:[],categories:An}},Kw={inputOptions:vl,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:P.CAGE_TOOLS,shape:En,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:pl(),tags:[],categories:Sd}},Vw={inputOptions:vl,toolId:d.PARITY_BALANCE_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:pl(),tags:[],categories:Sd}},Xw={inputOptions:Sn,toolId:d.DIVISIBLE_KILLER_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:Ln(),tags:[],categories:An}},qw={inputOptions:Sn,toolId:d.SPOTLIGHT_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:Ln(),tags:[],categories:An}},Zw={inputOptions:vl,toolId:d.PUTTERIA_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:pl(),tags:[],categories:Sd}};d.KILLER_CAGE_LOOK_AND_SAY,P.CAGE_TOOLS,Ln();const Qw={inputOptions:Sn,toolId:d.MULTISET_CAGE,order:P.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:Ln(),tags:[],categories:An}},Jw={inputOptions:Sn,toolId:d.VAULTED_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:Ln(),tags:[],categories:An}};d.AQUARIUM_CAGE,P.CAGE_TOOLS,Ln();const ey={inputOptions:Sn,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:Ln(),tags:[],categories:An}},ty={inputOptions:Sn,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:Ln(),tags:[],categories:An}},ny={inputOptions:Sn,toolId:d.DOUBLERS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:Ln(),tags:[],categories:An}},ry={inputOptions:Sn,toolId:d.NEGATORS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:En,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:Ln(),tags:[],categories:An}},iy={inputOptions:{type:ve.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},oy={inputOptions:{type:ve.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[x.CELL_INPUT_TOOL]}},sy={inputOptions:{type:ve.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[x.CELL_INPUT_TOOL]}},ay={inputOptions:{type:ve.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},ly={inputOptions:{type:ve.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[x.CELL_INPUT_TOOL]}},cy={inputOptions:{type:ve.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[x.CELL_INPUT_TOOL]}},uy={inputOptions:{type:ve.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[x.CELL_INPUT_TOOL]}},dy={inputOptions:{type:ve.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},_y={type:ve.CENTER_CORNER_OR_EDGE,targets:yt.CLOSEST};d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,P.OUTSIDE_TOOLS,B.CIRCLE,Ad(),x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT;const fy={inputOptions:{type:ve.CENTER_CORNER_OR_EDGE,targets:yt.CLOSEST,valueUpdater:(t,e)=>Ur(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:P.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Ad(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}},gy={inputOptions:{type:ve.CENTER_CORNER_OR_EDGE,targets:yt.CORNER_OR_EDGE,valueUpdater:(t,e)=>Ur(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:P.OUTSIDE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Ad(),tags:[],categories:[x.LOCAL_CONSTRAINT,x.CENTER_CORNER_EDGE_CONSTRAINT]}},hy={inputOptions:{type:ve.CLONE},toolId:d.CLONE_REGION,order:P.CAGE_TOOLS,shape:{type:B.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[x.CLONE_CONSTRAINT,x.LOCAL_CONSTRAINT]}};function Ep(t,e=3){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Cp(t,e,n){return Ur(t,e,n)}function py(t,e){function n(){return!0}return Ur(t,e,n)}const Nd={type:ve.CORNER,defaultValue:"",valueUpdater:(t,e)=>Cp(t,e,Ep)},vy={inputOptions:{type:ve.CORNER,valueUpdater:(t,e)=>py(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:P.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Iw(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},my={inputOptions:Nd,toolId:d.CORNER_SUM,order:P.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:wo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL]}},Ey={inputOptions:{type:ve.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:P.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:wo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},Cy={inputOptions:Nd,toolId:d.CORNER_EVEN_COUNT,order:P.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:wo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,P.CORNER_TOOLS,B.CIRCLE,wo(),x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.CORNER_TOOL;const Iy={inputOptions:{type:ve.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:P.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:wo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},Oy={inputOptions:{type:ve.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:P.CORNER_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:wo(),categories:[x.CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.CORNER_TOOL]}},ml=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.EDGE_TOOL],Fn=[x.EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.EDGE_TOOL],As=.15,Ip=.02,_i={type:B.CIRCLE,r:{editable:!0,value:As,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Ip,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},xd={type:B.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function by(t,e=1){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Op(t,e=3){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function wy(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Rd(t,e,n){return Ur(t,e,n)}function yy(t,e){return t===void 0?"V":wy(e)?e.toUpperCase():t}function Ly(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function bp(t,e){return t===void 0?"<":Ly(e)?e:t}const Lo={type:ve.EDGE,valueUpdater:(t,e)=>Rd(t,e,Op)},Ay={inputOptions:{type:ve.EDGE,valueUpdater:(t,e)=>Rd(t,e,by)},toolId:d.RATIO,order:P.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:As},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Fn}},Sy={inputOptions:Lo,toolId:d.DIFFERENCE,order:P.EDGE_TOOLS,shape:_i,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Fn}},Ny={inputOptions:Lo,toolId:d.EDGE_SUM,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Fn}},xy={inputOptions:{type:ve.EDGE,defaultValue:"V",valueUpdater:yy},toolId:d.XV,order:P.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:As},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Fn}},Ry={inputOptions:{type:ve.EDGE,valueUpdater:bp,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:P.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Fn}},Ty={inputOptions:Lo,toolId:d.EDGE_PRODUCT,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Fn}},Dy={inputOptions:Lo,toolId:d.EDGE_MODULO,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Fn}},ky={inputOptions:Lo,toolId:d.EDGE_FACTOR,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Fn}},Gy={inputOptions:{type:ve.EDGE},toolId:d.XY_DIFFERENCES,order:P.EDGE_TOOLS,shape:{type:B.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:As},strokeWidth:{editable:!1,value:Ip,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Fn}},My={inputOptions:{type:ve.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:P.EDGE_TOOLS,shape:_i,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Fn}},Uy={inputOptions:{type:ve.EDGE},toolId:d.YIN_YANG_KROPKI,order:P.EDGE_TOOLS,shape:{type:B.CIRCLE,r:{editable:!1,value:As},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Fn}},$y={inputOptions:{type:ve.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:P.EDGE_TOOLS,shape:xd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:ml}},Fy={inputOptions:{type:ve.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:P.EDGE_TOOLS,shape:xd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:ml}},Py={inputOptions:{type:ve.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:P.EDGE_TOOLS,shape:xd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:ml}},Hy={inputOptions:{type:ve.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:P.EDGE_TOOLS,shape:_i,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:ml}},By={inputOptions:{type:ve.EDGE,valueUpdater:bp,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:P.EDGE_TOOLS,shape:{type:B.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Fn}};d.CUSTOM_EDGE_CONSTRAINT,P.EDGE_TOOLS;const Ao=[x.OUTSIDE_CORNER_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_CORNER_TOOL,x.OUTSIDE_DIRECTION_TOOL];function Wy(t,e=5){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function wp(t,e,n){return Ur(t,e,n)}const So={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},No={type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>wp(t,e,Wy),defaultValue:"",cornerOrEdge:yt.CORNER},zy={inputOptions:No,toolId:d.LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:bo(),tags:[],categories:Ao}},Yy={inputOptions:No,toolId:d.LITTLE_KILLER_PRODUCT,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:bo(),tags:[],categories:Ao}},jy={inputOptions:No,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:bo(),tags:[],categories:Ao}},Ky={inputOptions:No,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:bo(),tags:[],categories:Ao}},Vy={inputOptions:No,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:bo(),tags:[],categories:Ao}},Xy={inputOptions:No,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:bo(),tags:[],categories:Ao}},Jt=[x.OUTSIDE_EDGE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_EDGE_TOOL,x.OUTSIDE_DIRECTION_TOOL];function xo(t,e=5){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ss(t,e,n){return Ur(t,e,n)}const en={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Nn={type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:yt.EDGE},qy={inputOptions:Nn,toolId:d.SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:Qt(),tags:[],categories:Jt}},Zy={inputOptions:{...Nn,cornerOrEdge:yt.CORNER_OR_EDGE},toolId:d.MYSTERY_SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:Qt(),tags:[],categories:Jt}},Qy={inputOptions:Nn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:Qt(),tags:[],categories:Jt}},Jy={inputOptions:Nn,toolId:d.X_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:Qt(),tags:[],categories:Jt}},eL={inputOptions:Nn,toolId:d.SHORTSIGHTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:Qt(),tags:[],categories:Jt}},tL={inputOptions:Nn,toolId:d.SHIFTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:Qt(),tags:[],categories:Jt}},nL={inputOptions:Nn,toolId:d.BROKEN_X_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:Qt(),tags:[],categories:Jt}},rL={inputOptions:Nn,toolId:d.X_SUM_SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:Qt(),tags:[],categories:Jt}},iL={inputOptions:Nn,toolId:d.BATTLEFIELD,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:Qt(),tags:[],categories:Jt}},oL={inputOptions:Nn,toolId:d.SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:Qt(),tags:[],categories:Jt}},sL={inputOptions:Nn,toolId:d.X_INDEX,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:Qt(),tags:[],categories:Jt}},aL={inputOptions:Nn,toolId:d.RISING_STREAK,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:Qt(),tags:[],categories:Jt}};d.ROW_OR_COLUMN_RANK,P.OUTSIDE_TOOLS,Qt();const lL={inputOptions:Nn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:Qt(),tags:[],categories:Jt}},cL={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:yt.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:Qt(),tags:[],categories:Jt}},uL={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:yt.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:Qt(),tags:[],categories:Jt}},dL={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:yt.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:Qt(),tags:[],categories:Jt}},_L={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:yt.EDGE},toolId:d.PENTOMINO_BORDER_COUNT,order:P.OUTSIDE_TOOLS,shape:en,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:Qt(),tags:[],categories:Jt}},fL={inputOptions:{type:ve.SINGLE_CELL},toolId:d.COSMETIC_CELL_CENTER_SHAPE,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},gL={inputOptions:{type:ve.SINGLE_CELL_ARROW,cornerOrEdge:yt.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},hL={inputOptions:{type:ve.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:yt.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},pL={inputOptions:{type:ve.EDGE,valueUpdater:(t,e)=>Rd(t,e,Op),defaultValue:""},toolId:d.COSMETIC_EDGE,order:P.EDGE_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},vL={inputOptions:{type:ve.CORNER,valueUpdater:(t,e)=>Cp(t,e,Ep),defaultValue:""},toolId:d.COSMETIC_CORNER,order:P.CORNER_TOOLS,shape:{type:B.CIRCLE,allowedTypes:[B.CIRCLE,B.ELLIPSE,B.SQUARE,B.RECTANGLE,B.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},mL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},EL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},CL={inputOptions:{type:ve.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL]}},IL={inputOptions:{type:ve.CAGE,valueUpdater:(t,e)=>mp(t,e,vp),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:P.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.TYPABLE_TOOL]}},OL={inputOptions:{type:ve.ARROW},toolId:d.COSMETIC_ARROW,order:P.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT]}},bL={inputOptions:{type:ve.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>wp(t,e,xo),defaultValue:"",cornerOrEdge:yt.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:P.ARROW_TOOLS,shape:{type:B.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[x.COSMETIC_TOOL,x.LOCAL_CONSTRAINT,x.TYPABLE_TOOL,x.OUTSIDE_DIRECTION_TOOL]}},Ro=[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT,x.DIAGONAL_CONSTRAINT],wL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},yL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},LL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},AL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},SL={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},NL={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},xL={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},RL={toolId:d.ANTI_LONG_KNIGHT,order:0,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},TL={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},DL={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},kL={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},GL={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},ML={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},UL={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Ro}},$L={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Ro}},FL={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Ro}},PL={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Ro}},HL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Ro}},BL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Ro}},WL={toolId:d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,order:0,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},zL={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},YL={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},jL={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.SIMPLE_GLOBAL_CONSTRAINT]}},KL={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},VL={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},XL={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},qL={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},ZL={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},QL={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},JL={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},eA={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},tA={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},nA={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},rA={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}};d.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT;d.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT;const iA={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},oA={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},sA={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.NEGATIVE_CONSTRAINT]}},aA={toolId:d.CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},lA={toolId:d.NUMBERED_CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},cA={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},uA={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},dA={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},_A={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},fA={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},gA={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},hA={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},pA={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},vA={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},mA={toolId:d.NORINORI,order:0,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},EA={toolId:d.SHIKAKU,order:0,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},CA={toolId:d.SHIKAKU_NO_REPEATS_IN_REGION,order:0,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},IA={toolId:d.NORINORI_STAR_BATTLE,order:0,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},OA={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},bA={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},wA={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},yA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},LA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},AA={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},SA={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_LOOP_CONSTRAINTS]}},NA={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},xA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},RA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},TA={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},DA={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},kA={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},GA={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},MA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},UA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},$A={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},FA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},PA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},HA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},BA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},WA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},zA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CAVE_CONSTRAINTS]}},YA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},jA={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},KA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},VA={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},XA={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},qA={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_GALAXY_CONSTRAINTS]}},ZA={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},QA={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},JA={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.UNDETERMINED_REGIONS_CONSTRAINT]}},eS={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},tS={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},nS={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},rS={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Pe=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.LINE_TOOL],$r=[x.LINE_CONSTRAINT,x.LOCAL_CONSTRAINT,x.DOUBLE_ENDED_LINE_CONSTRAINT,x.LINE_TOOL],Ns={description:"",usage:De(),tags:[],categories:Pe},Nt={type:ve.LINE,allowSelfIntersection:!0},Xt={type:ve.LINE,allowSelfIntersection:!1},iS={inputOptions:Xt,toolId:d.THERMOMETER,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Numbers along a thermometer must increase from the bulb end."}},oS={inputOptions:{type:ve.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},sS={inputOptions:Xt,toolId:d.FUZZY_THERMOMETER,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},aS={inputOptions:Xt,toolId:d.SLOW_THERMOMETER,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},lS={inputOptions:Xt,toolId:d.ROW_CYCLE_THERMOMETER,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},cS={inputOptions:Nt,toolId:d.PALINDROME,order:P.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:Pe}},uS={inputOptions:Nt,toolId:d.RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:Pe}},dS={inputOptions:Nt,toolId:d.DOUBLE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:Pe}},_S={inputOptions:Nt,toolId:d.RENRENBANBAN_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:Pe}},fS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Pe}},gS={inputOptions:Nt,toolId:d.NABNER_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},hS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:Pe}},pS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:Pe}},vS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:Pe}},mS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:Pe}},ES={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},CS={inputOptions:Xt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:Pe}},IS={inputOptions:Xt,toolId:d.INDEX_LINE,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:Pe}},OS={inputOptions:Nt,toolId:d.UNIQUE_VALUES_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:Pe}},bS={inputOptions:Nt,toolId:d.REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:Pe}},wS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:Pe}},yS={inputOptions:Xt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:Pe}},LS={inputOptions:Nt,toolId:d.SAME_PARITY_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:Pe}},AS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},SS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:Pe}},NS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:Pe}},xS={inputOptions:Nt,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:Pe}},RS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:Pe}},TS={inputOptions:Nt,toolId:d.ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:Pe}},DS={inputOptions:Nt,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:Pe}},kS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:Pe}},GS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:Pe}},MS={inputOptions:Xt,toolId:d.REPEATED_DIGITS_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:Pe}},US={inputOptions:Xt,toolId:d.SUPERFUZZY_ARROW,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:Pe}},$S={inputOptions:Nt,toolId:d.AMBIGUOUS_ARROW,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:De(),tags:[],categories:Pe}},FS={inputOptions:Xt,toolId:d.HEADLESS_ARROW,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:Pe}},PS={inputOptions:Nt,toolId:d.XV_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:Pe}},HS={inputOptions:Xt,toolId:d.ROW_SUM_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:Pe}},BS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:Pe}},WS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:Pe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,P.LINE_TOOLS,B.LINE,De();const zS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:Pe}},YS={inputOptions:Nt,toolId:d.ADJACENT_MULTIPLES_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:Pe}},jS={inputOptions:Nt,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:Pe}},KS={inputOptions:Xt,toolId:d.LOOK_AND_SAY_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:Pe}},VS={inputOptions:Xt,toolId:d.ZIPPER_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:Pe}},XS={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:Pe}},qS={inputOptions:{type:ve.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:De(),tags:[],categories:Pe}},ZS={inputOptions:{type:ve.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:De(),tags:[],categories:Pe}};d.THERMO_OR_AVERAGE_ARROW,P.LINE_TOOLS,B.THERMO_WITH_CIRCLE,De();const QS={inputOptions:Xt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:De(),tags:[],categories:Pe}},JS={inputOptions:Xt,toolId:d.PEAPODS,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:De(),tags:[],categories:Pe}},eN={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:Pe}},tN={inputOptions:Nt,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:Pe}},nN={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},rN={inputOptions:Nt,toolId:d.YIN_YANG_REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:Pe}},iN={inputOptions:Xt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:Pe}},oN={inputOptions:Xt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:P.LINE_TOOLS,shape:{type:B.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:Pe}},sN={inputOptions:Nt,toolId:d.BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:$r}},aN={inputOptions:{type:ve.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:$r}},lN={inputOptions:Nt,toolId:d.TIGHTROPE_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:$r}},cN={inputOptions:Nt,toolId:d.PARITY_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:$r}},uN={inputOptions:Nt,toolId:d.DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:$r}},dN={inputOptions:Nt,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:$r}},_N={inputOptions:Nt,toolId:d.SPLIT_PEAS,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:$r}},fN={inputOptions:Xt,toolId:d.DOUBLERS_THERMOMETER,order:P.LINE_TOOLS,shape:{type:B.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:Pe}},gN={inputOptions:Nt,toolId:d.DOUBLERS_BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:$r}},hN={inputOptions:Nt,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:B.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:$r}},ze=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_SHAPE_TOOL],To=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_COLOR_TOOL],El={type:B.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Pi={type:B.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Cl(t,e=3){return Fi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function pN(t){return t===""||t==="1"||t==="2"||t==="3"}function xs(t,e,n){return Ur(t,e,n)}const Ke={type:ve.SINGLE_CELL},fi={type:ve.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,Cl),defaultValue:""},yp={type:ve.SINGLE_CELL_ARROW,cornerOrEdge:yt.CORNER_OR_EDGE},vN={inputOptions:Ke,toolId:d.ODD,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:ze}},mN={inputOptions:Ke,toolId:d.EVEN,order:P.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:ze}},EN={inputOptions:Ke,toolId:d.MINIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},CN={inputOptions:Ke,toolId:d.MAXIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}};d.PRIME_CELL,P.CELL_COLOR_TOOL;const IN={inputOptions:Ke,toolId:d.ODD_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},ON={inputOptions:Ke,toolId:d.EVEN_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},bN={inputOptions:Ke,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ze}},wN={inputOptions:Ke,toolId:d.WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},yN={inputOptions:Ke,toolId:d.NOT_WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},LN={inputOptions:fi,toolId:d.FARSIGHT,order:P.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ze}},AN={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,Cl),defaultValue:"9"},toolId:d.RADAR,order:P.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ze}},SN={inputOptions:Ke,toolId:d.ORTHOGONAL_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ze}},NN={inputOptions:Ke,toolId:d.INDEXING_COLUMN,order:P.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:To}},xN={inputOptions:Ke,toolId:d.INDEXING_ROW,order:P.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:To}},RN={inputOptions:Ke,toolId:d.LOW_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:To}},TN={inputOptions:Ke,toolId:d.HIGH_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:To}},DN={inputOptions:Ke,toolId:d.FRIENDLY_CELL,order:P.CELL_COLOR_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:To}},kN={inputOptions:Ke,toolId:d.DIAGONALLY_ADJACENT_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ze}},GN={inputOptions:Ke,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ze}},MN={inputOptions:Ke,toolId:d.SANDWICH_ROW_COL_COUNT,order:P.CELL_SHAPE_TOOL,shape:Pi,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ze}},UN={inputOptions:Ke,toolId:d.COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ze}},$N={inputOptions:Ke,toolId:d.REVERSE_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:ze}},FN={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,pN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:Pi,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:ze}},PN={inputOptions:Ke,toolId:d.UNIQUE_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ze}},HN={inputOptions:Ke,toolId:d.SEEN_EVEN_COUNT,order:P.CELL_SHAPE_TOOL,shape:El,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},BN={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,Cl),defaultValue:"5"},toolId:d.CELL_KNIGHT_WHISPERS,order:P.CELL_SHAPE_TOOL,shape:Pi,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:ze}},WN={inputOptions:Ke,toolId:d.SEEN_ODD_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},zN={inputOptions:Ke,toolId:d.YIN_YANG_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ze}},YN={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},jN={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},KN={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:P.CELL_SHAPE_TOOL,shape:El,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ze}},VN={inputOptions:Ke,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:B.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ze}},XN={inputOptions:Ke,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:ze}},qN={inputOptions:Ke,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ze}},ZN={inputOptions:Ke,toolId:d.SEEN_REGION_BORDERS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ze}},QN={inputOptions:Ke,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ze}},JN={inputOptions:Ke,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ze}},ex={inputOptions:yp,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:P.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},tx={inputOptions:yp,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[x.SINGLE_CELL_ARROW_TOOL,x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT]}},nx={inputOptions:fi,toolId:d.SASHIGANE_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ze}},rx={inputOptions:Ke,toolId:d.CELL_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:El,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ze}},ix={inputOptions:Ke,toolId:d.CELL_NOT_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Pi,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ze}},ox={inputOptions:Ke,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ze}},sx={inputOptions:fi,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ze}},ax={inputOptions:Ke,toolId:d.CAVE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ze}},lx={inputOptions:fi,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ze}},cx={inputOptions:fi,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ze}},ux={inputOptions:fi,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:Pi,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:ze}},dx={inputOptions:Ke,toolId:d.DIRECTED_PATH_START,order:P.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:ze}},_x={inputOptions:Ke,toolId:d.DIRECTED_PATH_END,order:P.CELL_SHAPE_TOOL,shape:{type:B.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:ze}},fx={inputOptions:fi,toolId:d.TELEPORT,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:ze}},gx={inputOptions:fi,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:ze}},hx={inputOptions:Ke,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:P.CELL_SHAPE_TOOL,shape:{...El,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:ze}},px={inputOptions:Ke,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:P.CELL_SHAPE_TOOL,shape:Pi,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:ze}},vx={inputOptions:Ke,toolId:d.CONNECT_FOUR_YELLOW,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:ze}},mx={inputOptions:Ke,toolId:d.CONENCT_FOUR_RED,order:P.CELL_SHAPE_TOOL,shape:{type:B.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:ze}},Ex={inputOptions:Ke,toolId:d.SHIKAKU_REGION_SIZE,order:P.CELL_SHAPE_TOOL,shape:Pi,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:ze}},Cx={inputOptions:{type:ve.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,Cl),defaultValue:"?"},toolId:d.SHIKAKU_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:B.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:ze}},Ix={inputOptions:Ke,toolId:d.FOG_LIGHTS,order:P.CELL_SHAPE_TOOL,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:ze}},lr=[x.SINGLE_CELL_CONSTRAINT,x.LOCAL_CONSTRAINT,x.SINGLE_CELL_MULTIARROW_TOOL],Fr={type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},cr={type:ve.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:yt.CORNER_OR_EDGE},Ox={inputOptions:cr,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:lr}},bx={inputOptions:cr,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:lr}},wx={inputOptions:cr,toolId:d.LOOP_CELL_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:lr}},yx={inputOptions:cr,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:lr}},Lx={inputOptions:cr,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:lr}},Ax={inputOptions:cr,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:lr}},Sx={inputOptions:cr,toolId:d.COLD_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:lr}},Nx={inputOptions:cr,toolId:d.HOT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:B.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:lr}},xx={inputOptions:cr,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:lr}},Rx={inputOptions:cr,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:lr}},Tx={inputOptions:cr,toolId:d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:lr}},Dx={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},kx={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},Gx={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}},Mx={toolId:d.LITS_MAX_TETROMINO_SUM,order:0,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[x.LOCAL_CONSTRAINT,x.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const Ux={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},$x={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT;const Fx={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},Px={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[x.GLOBAL_CONSTRAINT,x.VALUE_MODIFIER_CONSTRAINT]}},Hx=[x.CORNER_LINE_CONSTRAINT,x.CORNER_LINE_TOOL,x.LOCAL_CONSTRAINT],Bx={inputOptions:{type:ve.CORNER_LINE},toolId:d.MAZE_WALL,order:P.EDGE_TOOLS,shape:{type:B.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:Hx}},$t={[d.GIVEN]:iy,[d.DIGIT]:oy,[d.REGIONS]:sy,[d.OUTSIDE]:uy,[d.CORNER_PM]:ay,[d.CENTER_PM]:ly,[d.HIGHLIGHTS]:cy,[d.PEN_TOOL]:dy,[d.SUDOKU_RULES_DO_NOT_APPLY]:wL,[d.LEAVE_EMPTY_CELLS_EMPTY]:yL,[d.LITS]:SL,[d.HEXED_SUDOKU]:LL,[d.FILLOMINO]:AL,[d.ANTIKNIGHT]:NL,[d.ANTI_LONG_KNIGHT]:RL,[d.ANTIKING]:TL,[d.ANTI_GIRAFFE]:xL,[d.DISJOINT_GROUPS]:DL,[d.TANGO]:kL,[d.NONCONSECUTIVE]:GL,[d.NONRATIO]:ML,[d.ANTI_ENTROPY]:zL,[d.GLOBAL_INDEXING_COLUMN]:YL,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:jL,[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:WL,[d.NEGATIVE_DIAGONAL]:UL,[d.POSITIVE_DIAGONAL]:$L,[d.NEGATIVE_ANTIDIAGONAL]:FL,[d.POSITIVE_ANTIDIAGONAL]:PL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:HL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:BL,[d.ALL_RATIOS_GIVEN]:KL,[d.ALL_DIFFERENCES_GIVEN]:VL,[d.ALL_X_GIVEN]:XL,[d.ALL_V_GIVEN]:qL,[d.ALL_XV_GIVEN]:ZL,[d.ALL_RADARS_GIVEN]:QL,[d.ALL_XY_DIFFERENCES_GIVEN]:JL,[d.ALL_INDEXING_COLUMN_GIVEN]:eA,[d.ALL_INDEXING_ROW_GIVEN]:tA,[d.ALL_YIN_YANG_KROPKI_GIVEN]:nA,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:rA,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:oA,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:sA,[d.CAVE_CELLS_ARE_ODD]:BA,[d.CAVE_WALLS_ARE_EVEN]:HA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:FA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:PA,[d.DOUBLERS]:Ux,[d.NEGATORS]:$x,[d.NEXUS]:Fx,[d.INDEXER_CELLS]:Px,[d.CHAOS_CONSTRUCTION]:aA,[d.NUMBERED_CHAOS_CONSTRUCTION]:lA,[d.CHAOS_CONSTRUCTION_SUGURU]:cA,[d.YIN_YANG]:uA,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:dA,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:_A,[d.NURIMISAKI]:fA,[d.NURIKABE]:gA,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:hA,[d.TWO_CONTIGUOUS_REGIONS]:pA,[d.SASHIGANE]:vA,[d.NORINORI]:mA,[d.SHIKAKU]:EA,[d.SHIKAKU_NO_REPEATS_IN_REGION]:CA,[d.GOLDILOCKS_ZONE]:OA,[d.CELL_CENTER_LOOP_NO_TOUCHING]:bA,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:wA,[d.NOT_LOOP_SIZED_REGIONS]:AA,[d.MODULAR_LOOP]:SA,[d.CAVE]:UA,[d.CAVE_LITS]:WA,[d.RENBAN_CAVES]:zA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:$A,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:iA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:yA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:LA,[d.GALAXIES]:jA,[d.TWO_SYMMETRIC_GALAXIES]:XA,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:KA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:VA,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:qA,[d.PENTOMINO_TILLING]:ZA,[d.TILLING_NO_EMPTY_CELLS]:QA,[d.LITS_BLACK_WHITE_STAR_BATTLE]:JA,[d.NORINORI_STAR_BATTLE]:IA,[d.MAZE_DIRECTED_PATH]:NA,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:xA,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:kA,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:RA,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:DA,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:GA,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:MA,[d.DIRECTED_PATH_IS_PARITY_LINE]:TA,[d.CONNECT_FOUR]:eS,[d.CONNECT_FOUR_DRAW]:tS,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:nS,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:rS,[d.FOG_LIGHTS]:Ix,[d.ODD]:vN,[d.EVEN]:mN,[d.MINIMUM]:EN,[d.MAXIMUM]:CN,[d.ODD_MINESWEEPER]:IN,[d.EVEN_MINESWEEPER]:ON,[d.WATCHTOWER]:wN,[d.NOT_WATCHTOWER]:yN,[d.FARSIGHT]:LN,[d.RADAR]:AN,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:bN,[d.ORTHOGONAL_SUM]:SN,[d.DIAGONALLY_ADJACENT_SUM]:kN,[d.INDEXING_COLUMN]:NN,[d.INDEXING_ROW]:xN,[d.LOW_DIGIT]:RN,[d.HIGH_DIGIT]:TN,[d.FRIENDLY_CELL]:DN,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:GN,[d.SANDWICH_ROW_COL_COUNT]:MN,[d.COUNTING_CIRCLES]:UN,[d.REVERSE_COUNTING_CIRCLES]:$N,[d.COLORED_COUNTING_CIRCLES]:FN,[d.UNIQUE_CELLS]:PN,[d.SEEN_EVEN_COUNT]:HN,[d.SEEN_ODD_COUNT]:WN,[d.CELL_KNIGHT_WHISPERS]:BN,[d.YIN_YANG_MINESWEEPER]:zN,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:YN,[d.YIN_YANG_SEEN_SHADED_CELLS]:jN,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:KN,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:VN,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:XN,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:qN,[d.SEEN_REGION_BORDERS_COUNT]:ZN,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:QN,[d.SASHIGANE_BEND_REGION_COUNT]:JN,[d.SASHIGANE_REGION_SUM]:nx,[d.CELL_ON_THE_LOOP]:rx,[d.CELL_NOT_ON_THE_LOOP]:ix,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:ox,[d.CAVE_CLUE]:ax,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:sx,[d.YIN_YANG_FILLOMINO_PARITY]:YA,[d.SHIKAKU_REGION_SIZE]:Ex,[d.SHIKAKU_REGION_SUM]:Cx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:lx,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:cx,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:ux,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:gx,[d.DIRECTED_PATH_START]:dx,[d.DIRECTED_PATH_END]:_x,[d.TELEPORT]:fx,[d.CONNECT_FOUR_YELLOW]:vx,[d.CONENCT_FOUR_RED]:mx,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:ex,[d.THERMO_SIGHTLINE_LOOP_ARROW]:tx,[d.HOT_ARROWS]:Nx,[d.COLD_ARROWS]:Sx,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:Ax,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:yx,[d.YIN_YANG_COUNT_SHADED_CELLS]:Lx,[d.LOOP_CELL_COUNT_ARROWS]:wx,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:bx,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:Ox,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:xx,[d.NURIKABE_SEEN_WATERWAY_CELLS]:hx,[d.NURIKABE_ISLAND_SIZE_CELL]:px,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:Rx,[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:Tx,[d.DIFFERENCE]:Sy,[d.RATIO]:Ay,[d.XV]:xy,[d.EDGE_INEQUALITY]:Ry,[d.EDGE_SUM]:Ny,[d.EDGE_PRODUCT]:Ty,[d.EDGE_MODULO]:Dy,[d.EDGE_FACTOR]:ky,[d.XY_DIFFERENCES]:Gy,[d.YIN_YANG_WHITE_KROPKI]:My,[d.YIN_YANG_KROPKI]:Uy,[d.FILLOMINO_REGION_BORDER]:$y,[d.UNKNOWN_REGION_BORDER]:Fy,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:Py,[d.EDGE_CAVE_ONE_OF_EACH]:Hy,[d.ONE_WAY_DOOR]:By,[d.QUADRUPLE]:vy,[d.CORNER_SUM]:my,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:Ey,[d.CORNER_EVEN_COUNT]:Cy,[d.PRODUCT_SQUARE]:Iy,[d.EQUAL_DIAGONAL_DIFFERENCES]:Oy,[d.THERMOMETER]:iS,[d.FUZZY_THERMOMETER]:sS,[d.SLOW_THERMOMETER]:aS,[d.CUSTOM_THERMOMETER]:oS,[d.ROW_CYCLE_THERMOMETER]:lS,[d.PALINDROME]:cS,[d.RENBAN_LINE]:uS,[d.DOUBLE_RENBAN_LINE]:dS,[d.RENRENBANBAN_LINE]:_S,[d.N_CONSECUTIVE_RENBAN_LINE]:fS,[d.NABNER_LINE]:gS,[d.WHISPERS_LINE]:hS,[d.DUTCH_WHISPERS]:pS,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:vS,[d.RENBAN_OR_WHISPERS_LINE]:mS,[d.RENBAN_OR_NABNER_LINE]:ES,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:CS,[d.INDEX_LINE]:IS,[d.UNIQUE_VALUES_LINE]:OS,[d.REPEATED_DIGITS_LINE]:MS,[d.REGION_SUM_LINE]:bS,[d.SUM_LINE]:wS,[d.XV_LINE]:PS,[d.ROW_SUM_LINE]:HS,[d.AT_LEAST_X_LINE]:BS,[d.SUPERFUZZY_ARROW]:US,[d.AMBIGUOUS_ARROW]:$S,[d.HEADLESS_ARROW]:FS,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:WS,[d.PRODUCT_LINE]:zS,[d.ADJACENT_MULTIPLES_LINE]:YS,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:jS,[d.LOOK_AND_SAY_LINE]:KS,[d.ARITHMETIC_SEQUENCE_LINE]:yS,[d.ZIPPER_LINE]:VS,[d.SEGMENTED_SUM_LINE]:XS,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:qS,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:ZS,[d.SAME_PARITY_LINE]:LS,[d.MODULAR_LINE]:AS,[d.UNIMODULAR_LINE]:SS,[d.MODULAR_OR_UNIMODULAR_LINE]:NS,[d.ODD_EVEN_OSCILLATOR_LINE]:xS,[d.HIGH_LOW_OSCILLATOR_LINE]:RS,[d.ENTROPIC_LINE]:TS,[d.ENTROPIC_OR_MODULAR_LINE]:DS,[d.INDEXING_COLUMN_IS_X_LINE]:kS,[d.INDEXING_ROW_IS_X_LINE]:GS,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:QS,[d.PEAPODS]:JS,[d.YIN_YANG_INDEXING_LINE_COLORING]:iN,[d.YIN_YANG_SHADED_WHISPERS_LINE]:eN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:tN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:nN,[d.YIN_YANG_REGION_SUM_LINE]:rN,[d.GOLDILOCKS_ZONE_REGION_SUM]:oN,[d.BETWEEN_LINE]:sN,[d.LOCKOUT_LINE]:aN,[d.PARITY_COUNT_LINE]:cN,[d.TIGHTROPE_LINE]:lN,[d.DOUBLE_ARROW_LINE]:uN,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:dN,[d.SPLIT_PEAS]:_N,[d.DOUBLERS_THERMOMETER]:fN,[d.DOUBLERS_BETWEEN_LINE]:gN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:hN,[d.ARROW]:yw,[d.CHAOS_CONSTRUCTION_ARROW]:Sw,[d.AVERAGE_ARROW]:Lw,[d.BULBOUS_ARROW]:Aw,[d.MAZE_WALL]:Bx,[d.KILLER_CAGE]:Ww,[d.UNIQUE_DIGITS_CAGE]:zw,[d.INVERTED_KILLER_CAGE]:Yw,[d.SUM_CAGE]:jw,[d.SUM_CAGE_LOOK_AND_SAY]:Kw,[d.PARITY_BALANCE_CAGE]:Vw,[d.DIVISIBLE_KILLER_CAGE]:Xw,[d.SPOTLIGHT_CAGE]:qw,[d.PUTTERIA_CAGE]:Zw,[d.MULTISET_CAGE]:Qw,[d.VAULTED_CAGE]:Jw,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:ey,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:ty,[d.DOUBLERS_KILLER_CAGE]:ny,[d.NEGATORS_KILLER_CAGE]:ry,[d.CLONE_REGION]:hy,[d.SANDWICH_SUM]:qy,[d.MYSTERY_SANDWICH_SUM]:Zy,[d.X_SUM]:Jy,[d.SHORTSIGHTED_X_SUM]:eL,[d.SHIFTED_X_SUM]:tL,[d.BROKEN_X_SUM]:nL,[d.X_SUM_SKYSCRAPERS]:rL,[d.BATTLEFIELD]:iL,[d.SKYSCRAPERS]:oL,[d.X_INDEX]:sL,[d.SANDWICH_SUM_XOR_X_SUM]:Qy,[d.RISING_STREAK]:aL,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:lL,[d.OUTSIDE_CONSECUTIVE_SUM]:cL,[d.LOOPWICHES]:uL,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:dL,[d.PENTOMINO_BORDER_COUNT]:_L,[d.LITTLE_KILLER_SUM]:zy,[d.LITTLE_KILLER_PRODUCT]:Yy,[d.LITTLE_KILLER_LOOK_AND_SAY]:jy,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:Vy,[d.X_OMIT_LITTLE_KILLER_SUM]:Ky,[d.NEGATORS_LITTLE_KILLER_SUM]:Xy,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:fy,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:gy,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:Dx,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:kx,[d.FORBIDDEN_KNIGHT_SUM]:Gx,[d.LITS_MAX_TETROMINO_SUM]:Mx,[d.COSMETIC_CELL_CENTER_SHAPE]:fL,[d.COSMETIC_CELL_ARROW]:gL,[d.COSMETIC_CELL_MULTI_ARROW]:hL,[d.COSMETIC_EDGE]:pL,[d.COSMETIC_CORNER]:vL,[d.COSMETIC_LINE]:mL,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:EL,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:CL,[d.COSMETIC_ARROW]:OL,[d.COSMETIC_CAGE]:IL,[d.COSMETIC_OUTSIDE_DIRECTION]:bL};class Di extends Map{constructor(){super()}setConstraint(e,n){return aw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Di;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Di;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=fp(r);o!==void 0&&gp(o,Cd)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var Fe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Fe||{});function Lp(t){if(!(t in Fe))throw Error(" not a key in DIRECTION");return Fe[t]}function je(t,e){return t.r===e.r&&t.c===e.c}function Ap(t,e){return{r:t.r+e.r,c:t.c+e.c}}function Wx(t,e){return{r:t.r*e,c:t.c*e}}function zx(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Rs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!je(t,e)}function Yx(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Va(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function kt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Il(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function jx(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Xa(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function Kx(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const Vx=new Map([[6,Fe.N],[2,Fe.S],[0,Fe.E],[4,Fe.W],[7,Fe.NE],[5,Fe.NW],[1,Fe.SE],[3,Fe.SW]]);function po(t){t=t%8;const e=Vx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const Xx=new Map([[Fe.N,{r:-1,c:0}],[Fe.S,{r:1,c:0}],[Fe.E,{r:0,c:1}],[Fe.W,{r:0,c:-1}],[Fe.NE,{r:-1,c:1}],[Fe.NW,{r:-1,c:-1}],[Fe.SE,{r:1,c:1}],[Fe.SW,{r:1,c:-1}]]);function Ts(t){const e=Xx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Xg(t,e){const n=Ts(e);return Ap(t,n)}function qa(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Sp(t,e,n=!1){const r=t.some(o=>je(o,e)),i=n?t.some(o=>Rs(o,e)):t.some(o=>Yx(o,e));if(!r&&i){const o=[...t,e];return Va(o),o}return t}function Ua(t){return`R${t.r+1}C${t.c+1}`}function Td(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var qx=fs.exports,qg;function Zx(){return qg||(qg=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,h="__lodash_placeholder__",g=1,v=2,m=4,E=1,I=2,O=1,b=2,S=4,k=8,G=16,F=32,Y=64,H=128,j=256,J=512,le=30,Z="...",ie=800,me=16,oe=1,Ee=2,Ne=3,xe=1/0,Le=9007199254740991,Oe=17976931348623157e292,et=NaN,tt=4294967295,Gt=tt-1,Pt=tt>>>1,tn=[["ary",H],["bind",O],["bindKey",b],["curry",k],["curryRight",G],["flip",J],["partial",F],["partialRight",Y],["rearg",j]],Tt="[object Arguments]",Mt="[object Array]",nn="[object AsyncFunction]",dr="[object Boolean]",er="[object Date]",Yi="[object DOMException]",Or="[object Error]",br="[object Function]",$e="[object GeneratorFunction]",we="[object Map]",ke="[object Number]",Ue="[object Null]",At="[object Object]",Bo="[object Promise]",Ys="[object Proxy]",wr="[object RegExp]",Cn="[object Set]",Yr="[object String]",vi="[object Symbol]",Hl="[object Undefined]",jr="[object WeakMap]",Bl="[object WeakSet]",Kr="[object ArrayBuffer]",Vr="[object DataView]",ji="[object Float32Array]",Wo="[object Float64Array]",Ki="[object Int8Array]",zo="[object Int16Array]",Yo="[object Int32Array]",jo="[object Uint8Array]",Ze="[object Uint8ClampedArray]",tr="[object Uint16Array]",Vi="[object Uint32Array]",js=/\b__p \+= '';/g,Xr=/\b(__p \+=) '' \+/g,Wl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ks=/&(?:amp|lt|gt|quot|#39);/g,Vs=/[&<>"']/g,zl=RegExp(Ks.source),Xv=RegExp(Vs.source),qv=/<%-([\s\S]+?)%>/g,Zv=/<%([\s\S]+?)%>/g,__=/<%=([\s\S]+?)%>/g,Qv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jv=/^\w*$/,em=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yl=/[\\^$.*+?()[\]{}|]/g,tm=RegExp(Yl.source),jl=/^\s+/,nm=/\s/,rm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,im=/\{\n\/\* \[wrapped with (.+)\] \*/,om=/,? & /,sm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,am=/[()=,{}\[\]\/\s]/,lm=/\\(\\)?/g,cm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,f_=/\w*$/,um=/^[-+]0x[0-9a-f]+$/i,dm=/^0b[01]+$/i,_m=/^\[object .+?Constructor\]$/,fm=/^0o[0-7]+$/i,gm=/^(?:0|[1-9]\d*)$/,hm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xs=/($^)/,pm=/['\n\r\u2028\u2029\\]/g,qs="\\ud800-\\udfff",vm="\\u0300-\\u036f",mm="\\ufe20-\\ufe2f",Em="\\u20d0-\\u20ff",g_=vm+mm+Em,h_="\\u2700-\\u27bf",p_="a-z\\xdf-\\xf6\\xf8-\\xff",Cm="\\xac\\xb1\\xd7\\xf7",Im="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Om="\\u2000-\\u206f",bm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",v_="A-Z\\xc0-\\xd6\\xd8-\\xde",m_="\\ufe0e\\ufe0f",E_=Cm+Im+Om+bm,Kl="['’]",wm="["+qs+"]",C_="["+E_+"]",Zs="["+g_+"]",I_="\\d+",ym="["+h_+"]",O_="["+p_+"]",b_="[^"+qs+E_+I_+h_+p_+v_+"]",Vl="\\ud83c[\\udffb-\\udfff]",Lm="(?:"+Zs+"|"+Vl+")",w_="[^"+qs+"]",Xl="(?:\\ud83c[\\udde6-\\uddff]){2}",ql="[\\ud800-\\udbff][\\udc00-\\udfff]",Xi="["+v_+"]",y_="\\u200d",L_="(?:"+O_+"|"+b_+")",Am="(?:"+Xi+"|"+b_+")",A_="(?:"+Kl+"(?:d|ll|m|re|s|t|ve))?",S_="(?:"+Kl+"(?:D|LL|M|RE|S|T|VE))?",N_=Lm+"?",x_="["+m_+"]?",Sm="(?:"+y_+"(?:"+[w_,Xl,ql].join("|")+")"+x_+N_+")*",Nm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",R_=x_+N_+Sm,Rm="(?:"+[ym,Xl,ql].join("|")+")"+R_,Tm="(?:"+[w_+Zs+"?",Zs,Xl,ql,wm].join("|")+")",Dm=RegExp(Kl,"g"),km=RegExp(Zs,"g"),Zl=RegExp(Vl+"(?="+Vl+")|"+Tm+R_,"g"),Gm=RegExp([Xi+"?"+O_+"+"+A_+"(?="+[C_,Xi,"$"].join("|")+")",Am+"+"+S_+"(?="+[C_,Xi+L_,"$"].join("|")+")",Xi+"?"+L_+"+"+A_,Xi+"+"+S_,xm,Nm,I_,Rm].join("|"),"g"),Mm=RegExp("["+y_+qs+g_+m_+"]"),Um=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$m=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Fm=-1,xt={};xt[ji]=xt[Wo]=xt[Ki]=xt[zo]=xt[Yo]=xt[jo]=xt[Ze]=xt[tr]=xt[Vi]=!0,xt[Tt]=xt[Mt]=xt[Kr]=xt[dr]=xt[Vr]=xt[er]=xt[Or]=xt[br]=xt[we]=xt[ke]=xt[At]=xt[wr]=xt[Cn]=xt[Yr]=xt[jr]=!1;var St={};St[Tt]=St[Mt]=St[Kr]=St[Vr]=St[dr]=St[er]=St[ji]=St[Wo]=St[Ki]=St[zo]=St[Yo]=St[we]=St[ke]=St[At]=St[wr]=St[Cn]=St[Yr]=St[vi]=St[jo]=St[Ze]=St[tr]=St[Vi]=!0,St[Or]=St[br]=St[jr]=!1;var Pm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Hm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Wm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},zm=parseFloat,Ym=parseInt,T_=typeof $a=="object"&&$a&&$a.Object===Object&&$a,jm=typeof self=="object"&&self&&self.Object===Object&&self,rn=T_||jm||Function("return this")(),Ql=e&&!e.nodeType&&e,mi=Ql&&!0&&t&&!t.nodeType&&t,D_=mi&&mi.exports===Ql,Jl=D_&&T_.process,Pn=function(){try{var X=mi&&mi.require&&mi.require("util").types;return X||Jl&&Jl.binding&&Jl.binding("util")}catch{}}(),k_=Pn&&Pn.isArrayBuffer,G_=Pn&&Pn.isDate,M_=Pn&&Pn.isMap,U_=Pn&&Pn.isRegExp,$_=Pn&&Pn.isSet,F_=Pn&&Pn.isTypedArray;function xn(X,ae,ee){switch(ee.length){case 0:return X.call(ae);case 1:return X.call(ae,ee[0]);case 2:return X.call(ae,ee[0],ee[1]);case 3:return X.call(ae,ee[0],ee[1],ee[2])}return X.apply(ae,ee)}function Km(X,ae,ee,Re){for(var Xe=-1,pt=X==null?0:X.length;++Xe<pt;){var jt=X[Xe];ae(Re,jt,ee(jt),X)}return Re}function Hn(X,ae){for(var ee=-1,Re=X==null?0:X.length;++ee<Re&&ae(X[ee],ee,X)!==!1;);return X}function Vm(X,ae){for(var ee=X==null?0:X.length;ee--&&ae(X[ee],ee,X)!==!1;);return X}function P_(X,ae){for(var ee=-1,Re=X==null?0:X.length;++ee<Re;)if(!ae(X[ee],ee,X))return!1;return!0}function qr(X,ae){for(var ee=-1,Re=X==null?0:X.length,Xe=0,pt=[];++ee<Re;){var jt=X[ee];ae(jt,ee,X)&&(pt[Xe++]=jt)}return pt}function Qs(X,ae){var ee=X==null?0:X.length;return!!ee&&qi(X,ae,0)>-1}function ec(X,ae,ee){for(var Re=-1,Xe=X==null?0:X.length;++Re<Xe;)if(ee(ae,X[Re]))return!0;return!1}function Dt(X,ae){for(var ee=-1,Re=X==null?0:X.length,Xe=Array(Re);++ee<Re;)Xe[ee]=ae(X[ee],ee,X);return Xe}function Zr(X,ae){for(var ee=-1,Re=ae.length,Xe=X.length;++ee<Re;)X[Xe+ee]=ae[ee];return X}function tc(X,ae,ee,Re){var Xe=-1,pt=X==null?0:X.length;for(Re&&pt&&(ee=X[++Xe]);++Xe<pt;)ee=ae(ee,X[Xe],Xe,X);return ee}function Xm(X,ae,ee,Re){var Xe=X==null?0:X.length;for(Re&&Xe&&(ee=X[--Xe]);Xe--;)ee=ae(ee,X[Xe],Xe,X);return ee}function nc(X,ae){for(var ee=-1,Re=X==null?0:X.length;++ee<Re;)if(ae(X[ee],ee,X))return!0;return!1}var qm=rc("length");function Zm(X){return X.split("")}function Qm(X){return X.match(sm)||[]}function H_(X,ae,ee){var Re;return ee(X,function(Xe,pt,jt){if(ae(Xe,pt,jt))return Re=pt,!1}),Re}function Js(X,ae,ee,Re){for(var Xe=X.length,pt=ee+(Re?1:-1);Re?pt--:++pt<Xe;)if(ae(X[pt],pt,X))return pt;return-1}function qi(X,ae,ee){return ae===ae?u1(X,ae,ee):Js(X,B_,ee)}function Jm(X,ae,ee,Re){for(var Xe=ee-1,pt=X.length;++Xe<pt;)if(Re(X[Xe],ae))return Xe;return-1}function B_(X){return X!==X}function W_(X,ae){var ee=X==null?0:X.length;return ee?oc(X,ae)/ee:et}function rc(X){return function(ae){return ae==null?n:ae[X]}}function ic(X){return function(ae){return X==null?n:X[ae]}}function z_(X,ae,ee,Re,Xe){return Xe(X,function(pt,jt,bt){ee=Re?(Re=!1,pt):ae(ee,pt,jt,bt)}),ee}function e1(X,ae){var ee=X.length;for(X.sort(ae);ee--;)X[ee]=X[ee].value;return X}function oc(X,ae){for(var ee,Re=-1,Xe=X.length;++Re<Xe;){var pt=ae(X[Re]);pt!==n&&(ee=ee===n?pt:ee+pt)}return ee}function sc(X,ae){for(var ee=-1,Re=Array(X);++ee<X;)Re[ee]=ae(ee);return Re}function t1(X,ae){return Dt(ae,function(ee){return[ee,X[ee]]})}function Y_(X){return X&&X.slice(0,X_(X)+1).replace(jl,"")}function Rn(X){return function(ae){return X(ae)}}function ac(X,ae){return Dt(ae,function(ee){return X[ee]})}function Ko(X,ae){return X.has(ae)}function j_(X,ae){for(var ee=-1,Re=X.length;++ee<Re&&qi(ae,X[ee],0)>-1;);return ee}function K_(X,ae){for(var ee=X.length;ee--&&qi(ae,X[ee],0)>-1;);return ee}function n1(X,ae){for(var ee=X.length,Re=0;ee--;)X[ee]===ae&&++Re;return Re}var r1=ic(Pm),i1=ic(Hm);function o1(X){return"\\"+Wm[X]}function s1(X,ae){return X==null?n:X[ae]}function Zi(X){return Mm.test(X)}function a1(X){return Um.test(X)}function l1(X){for(var ae,ee=[];!(ae=X.next()).done;)ee.push(ae.value);return ee}function lc(X){var ae=-1,ee=Array(X.size);return X.forEach(function(Re,Xe){ee[++ae]=[Xe,Re]}),ee}function V_(X,ae){return function(ee){return X(ae(ee))}}function Qr(X,ae){for(var ee=-1,Re=X.length,Xe=0,pt=[];++ee<Re;){var jt=X[ee];(jt===ae||jt===h)&&(X[ee]=h,pt[Xe++]=ee)}return pt}function ea(X){var ae=-1,ee=Array(X.size);return X.forEach(function(Re){ee[++ae]=Re}),ee}function c1(X){var ae=-1,ee=Array(X.size);return X.forEach(function(Re){ee[++ae]=[Re,Re]}),ee}function u1(X,ae,ee){for(var Re=ee-1,Xe=X.length;++Re<Xe;)if(X[Re]===ae)return Re;return-1}function d1(X,ae,ee){for(var Re=ee+1;Re--;)if(X[Re]===ae)return Re;return Re}function Qi(X){return Zi(X)?f1(X):qm(X)}function nr(X){return Zi(X)?g1(X):Zm(X)}function X_(X){for(var ae=X.length;ae--&&nm.test(X.charAt(ae)););return ae}var _1=ic(Bm);function f1(X){for(var ae=Zl.lastIndex=0;Zl.test(X);)++ae;return ae}function g1(X){return X.match(Zl)||[]}function h1(X){return X.match(Gm)||[]}var p1=function X(ae){ae=ae==null?rn:Ji.defaults(rn.Object(),ae,Ji.pick(rn,$m));var ee=ae.Array,Re=ae.Date,Xe=ae.Error,pt=ae.Function,jt=ae.Math,bt=ae.Object,cc=ae.RegExp,v1=ae.String,Bn=ae.TypeError,ta=ee.prototype,m1=pt.prototype,eo=bt.prototype,na=ae["__core-js_shared__"],ra=m1.toString,Et=eo.hasOwnProperty,E1=0,q_=function(){var s=/[^.]+$/.exec(na&&na.keys&&na.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),ia=eo.toString,C1=ra.call(bt),I1=rn._,O1=cc("^"+ra.call(Et).replace(Yl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),oa=D_?ae.Buffer:n,Jr=ae.Symbol,sa=ae.Uint8Array,Z_=oa?oa.allocUnsafe:n,aa=V_(bt.getPrototypeOf,bt),Q_=bt.create,J_=eo.propertyIsEnumerable,la=ta.splice,ef=Jr?Jr.isConcatSpreadable:n,Vo=Jr?Jr.iterator:n,Ei=Jr?Jr.toStringTag:n,ca=function(){try{var s=wi(bt,"defineProperty");return s({},"",{}),s}catch{}}(),b1=ae.clearTimeout!==rn.clearTimeout&&ae.clearTimeout,w1=Re&&Re.now!==rn.Date.now&&Re.now,y1=ae.setTimeout!==rn.setTimeout&&ae.setTimeout,ua=jt.ceil,da=jt.floor,uc=bt.getOwnPropertySymbols,L1=oa?oa.isBuffer:n,tf=ae.isFinite,A1=ta.join,S1=V_(bt.keys,bt),Kt=jt.max,ln=jt.min,N1=Re.now,x1=ae.parseInt,nf=jt.random,R1=ta.reverse,dc=wi(ae,"DataView"),Xo=wi(ae,"Map"),_c=wi(ae,"Promise"),to=wi(ae,"Set"),qo=wi(ae,"WeakMap"),Zo=wi(bt,"create"),_a=qo&&new qo,no={},T1=yi(dc),D1=yi(Xo),k1=yi(_c),G1=yi(to),M1=yi(qo),fa=Jr?Jr.prototype:n,Qo=fa?fa.valueOf:n,rf=fa?fa.toString:n;function A(s){if(Ft(s)&&!Qe(s)&&!(s instanceof ct)){if(s instanceof Wn)return s;if(Et.call(s,"__wrapped__"))return og(s)}return new Wn(s)}var ro=function(){function s(){}return function(l){if(!Ut(l))return{};if(Q_)return Q_(l);s.prototype=l;var p=new s;return s.prototype=n,p}}();function ga(){}function Wn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}A.templateSettings={escape:qv,evaluate:Zv,interpolate:__,variable:"",imports:{_:A}},A.prototype=ga.prototype,A.prototype.constructor=A,Wn.prototype=ro(ga.prototype),Wn.prototype.constructor=Wn;function ct(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=tt,this.__views__=[]}function U1(){var s=new ct(this.__wrapped__);return s.__actions__=In(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=In(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=In(this.__views__),s}function $1(){if(this.__filtered__){var s=new ct(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function F1(){var s=this.__wrapped__.value(),l=this.__dir__,p=Qe(s),C=l<0,w=p?s.length:0,T=Z0(0,w,this.__views__),$=T.start,z=T.end,q=z-$,_e=C?z:$-1,fe=this.__iteratees__,ge=fe.length,Ae=0,Ge=ln(q,this.__takeCount__);if(!p||!C&&w==q&&Ge==q)return Sf(s,this.__actions__);var Be=[];e:for(;q--&&Ae<Ge;){_e+=l;for(var rt=-1,We=s[_e];++rt<ge;){var at=fe[rt],dt=at.iteratee,kn=at.type,gn=dt(We);if(kn==Ee)We=gn;else if(!gn){if(kn==oe)continue e;break e}}Be[Ae++]=We}return Be}ct.prototype=ro(ga.prototype),ct.prototype.constructor=ct;function Ci(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function P1(){this.__data__=Zo?Zo(null):{},this.size=0}function H1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function B1(s){var l=this.__data__;if(Zo){var p=l[s];return p===u?n:p}return Et.call(l,s)?l[s]:n}function W1(s){var l=this.__data__;return Zo?l[s]!==n:Et.call(l,s)}function z1(s,l){var p=this.__data__;return this.size+=this.has(s)?0:1,p[s]=Zo&&l===n?u:l,this}Ci.prototype.clear=P1,Ci.prototype.delete=H1,Ci.prototype.get=B1,Ci.prototype.has=W1,Ci.prototype.set=z1;function yr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function Y1(){this.__data__=[],this.size=0}function j1(s){var l=this.__data__,p=ha(l,s);if(p<0)return!1;var C=l.length-1;return p==C?l.pop():la.call(l,p,1),--this.size,!0}function K1(s){var l=this.__data__,p=ha(l,s);return p<0?n:l[p][1]}function V1(s){return ha(this.__data__,s)>-1}function X1(s,l){var p=this.__data__,C=ha(p,s);return C<0?(++this.size,p.push([s,l])):p[C][1]=l,this}yr.prototype.clear=Y1,yr.prototype.delete=j1,yr.prototype.get=K1,yr.prototype.has=V1,yr.prototype.set=X1;function Lr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function q1(){this.size=0,this.__data__={hash:new Ci,map:new(Xo||yr),string:new Ci}}function Z1(s){var l=Aa(this,s).delete(s);return this.size-=l?1:0,l}function Q1(s){return Aa(this,s).get(s)}function J1(s){return Aa(this,s).has(s)}function e0(s,l){var p=Aa(this,s),C=p.size;return p.set(s,l),this.size+=p.size==C?0:1,this}Lr.prototype.clear=q1,Lr.prototype.delete=Z1,Lr.prototype.get=Q1,Lr.prototype.has=J1,Lr.prototype.set=e0;function Ii(s){var l=-1,p=s==null?0:s.length;for(this.__data__=new Lr;++l<p;)this.add(s[l])}function t0(s){return this.__data__.set(s,u),this}function n0(s){return this.__data__.has(s)}Ii.prototype.add=Ii.prototype.push=t0,Ii.prototype.has=n0;function rr(s){var l=this.__data__=new yr(s);this.size=l.size}function r0(){this.__data__=new yr,this.size=0}function i0(s){var l=this.__data__,p=l.delete(s);return this.size=l.size,p}function o0(s){return this.__data__.get(s)}function s0(s){return this.__data__.has(s)}function a0(s,l){var p=this.__data__;if(p instanceof yr){var C=p.__data__;if(!Xo||C.length<i-1)return C.push([s,l]),this.size=++p.size,this;p=this.__data__=new Lr(C)}return p.set(s,l),this.size=p.size,this}rr.prototype.clear=r0,rr.prototype.delete=i0,rr.prototype.get=o0,rr.prototype.has=s0,rr.prototype.set=a0;function of(s,l){var p=Qe(s),C=!p&&Li(s),w=!p&&!C&&ii(s),T=!p&&!C&&!w&&ao(s),$=p||C||w||T,z=$?sc(s.length,v1):[],q=z.length;for(var _e in s)(l||Et.call(s,_e))&&!($&&(_e=="length"||w&&(_e=="offset"||_e=="parent")||T&&(_e=="buffer"||_e=="byteLength"||_e=="byteOffset")||xr(_e,q)))&&z.push(_e);return z}function sf(s){var l=s.length;return l?s[bc(0,l-1)]:n}function l0(s,l){return Sa(In(s),Oi(l,0,s.length))}function c0(s){return Sa(In(s))}function fc(s,l,p){(p!==n&&!ir(s[l],p)||p===n&&!(l in s))&&Ar(s,l,p)}function Jo(s,l,p){var C=s[l];(!(Et.call(s,l)&&ir(C,p))||p===n&&!(l in s))&&Ar(s,l,p)}function ha(s,l){for(var p=s.length;p--;)if(ir(s[p][0],l))return p;return-1}function u0(s,l,p,C){return ei(s,function(w,T,$){l(C,w,p(w),$)}),C}function af(s,l){return s&&fr(l,qt(l),s)}function d0(s,l){return s&&fr(l,bn(l),s)}function Ar(s,l,p){l=="__proto__"&&ca?ca(s,l,{configurable:!0,enumerable:!0,value:p,writable:!0}):s[l]=p}function gc(s,l){for(var p=-1,C=l.length,w=ee(C),T=s==null;++p<C;)w[p]=T?n:Vc(s,l[p]);return w}function Oi(s,l,p){return s===s&&(p!==n&&(s=s<=p?s:p),l!==n&&(s=s>=l?s:l)),s}function zn(s,l,p,C,w,T){var $,z=l&g,q=l&v,_e=l&m;if(p&&($=w?p(s,C,w,T):p(s)),$!==n)return $;if(!Ut(s))return s;var fe=Qe(s);if(fe){if($=J0(s),!z)return In(s,$)}else{var ge=cn(s),Ae=ge==br||ge==$e;if(ii(s))return Rf(s,z);if(ge==At||ge==Tt||Ae&&!w){if($=q||Ae?{}:qf(s),!z)return q?B0(s,d0($,s)):H0(s,af($,s))}else{if(!St[ge])return w?s:{};$=eE(s,ge,z)}}T||(T=new rr);var Ge=T.get(s);if(Ge)return Ge;T.set(s,$),yg(s)?s.forEach(function(We){$.add(zn(We,l,p,We,s,T))}):bg(s)&&s.forEach(function(We,at){$.set(at,zn(We,l,p,at,s,T))});var Be=_e?q?kc:Dc:q?bn:qt,rt=fe?n:Be(s);return Hn(rt||s,function(We,at){rt&&(at=We,We=s[at]),Jo($,at,zn(We,l,p,at,s,T))}),$}function _0(s){var l=qt(s);return function(p){return lf(p,s,l)}}function lf(s,l,p){var C=p.length;if(s==null)return!C;for(s=bt(s);C--;){var w=p[C],T=l[w],$=s[w];if($===n&&!(w in s)||!T($))return!1}return!0}function cf(s,l,p){if(typeof s!="function")throw new Bn(a);return ss(function(){s.apply(n,p)},l)}function es(s,l,p,C){var w=-1,T=Qs,$=!0,z=s.length,q=[],_e=l.length;if(!z)return q;p&&(l=Dt(l,Rn(p))),C?(T=ec,$=!1):l.length>=i&&(T=Ko,$=!1,l=new Ii(l));e:for(;++w<z;){var fe=s[w],ge=p==null?fe:p(fe);if(fe=C||fe!==0?fe:0,$&&ge===ge){for(var Ae=_e;Ae--;)if(l[Ae]===ge)continue e;q.push(fe)}else T(l,ge,C)||q.push(fe)}return q}var ei=Mf(_r),uf=Mf(pc,!0);function f0(s,l){var p=!0;return ei(s,function(C,w,T){return p=!!l(C,w,T),p}),p}function pa(s,l,p){for(var C=-1,w=s.length;++C<w;){var T=s[C],$=l(T);if($!=null&&(z===n?$===$&&!Dn($):p($,z)))var z=$,q=T}return q}function g0(s,l,p,C){var w=s.length;for(p=nt(p),p<0&&(p=-p>w?0:w+p),C=C===n||C>w?w:nt(C),C<0&&(C+=w),C=p>C?0:Ag(C);p<C;)s[p++]=l;return s}function df(s,l){var p=[];return ei(s,function(C,w,T){l(C,w,T)&&p.push(C)}),p}function on(s,l,p,C,w){var T=-1,$=s.length;for(p||(p=nE),w||(w=[]);++T<$;){var z=s[T];l>0&&p(z)?l>1?on(z,l-1,p,C,w):Zr(w,z):C||(w[w.length]=z)}return w}var hc=Uf(),_f=Uf(!0);function _r(s,l){return s&&hc(s,l,qt)}function pc(s,l){return s&&_f(s,l,qt)}function va(s,l){return qr(l,function(p){return Rr(s[p])})}function bi(s,l){l=ni(l,s);for(var p=0,C=l.length;s!=null&&p<C;)s=s[gr(l[p++])];return p&&p==C?s:n}function ff(s,l,p){var C=l(s);return Qe(s)?C:Zr(C,p(s))}function _n(s){return s==null?s===n?Hl:Ue:Ei&&Ei in bt(s)?q0(s):cE(s)}function vc(s,l){return s>l}function h0(s,l){return s!=null&&Et.call(s,l)}function p0(s,l){return s!=null&&l in bt(s)}function v0(s,l,p){return s>=ln(l,p)&&s<Kt(l,p)}function mc(s,l,p){for(var C=p?ec:Qs,w=s[0].length,T=s.length,$=T,z=ee(T),q=1/0,_e=[];$--;){var fe=s[$];$&&l&&(fe=Dt(fe,Rn(l))),q=ln(fe.length,q),z[$]=!p&&(l||w>=120&&fe.length>=120)?new Ii($&&fe):n}fe=s[0];var ge=-1,Ae=z[0];e:for(;++ge<w&&_e.length<q;){var Ge=fe[ge],Be=l?l(Ge):Ge;if(Ge=p||Ge!==0?Ge:0,!(Ae?Ko(Ae,Be):C(_e,Be,p))){for($=T;--$;){var rt=z[$];if(!(rt?Ko(rt,Be):C(s[$],Be,p)))continue e}Ae&&Ae.push(Be),_e.push(Ge)}}return _e}function m0(s,l,p,C){return _r(s,function(w,T,$){l(C,p(w),T,$)}),C}function ts(s,l,p){l=ni(l,s),s=eg(s,l);var C=s==null?s:s[gr(jn(l))];return C==null?n:xn(C,s,p)}function gf(s){return Ft(s)&&_n(s)==Tt}function E0(s){return Ft(s)&&_n(s)==Kr}function C0(s){return Ft(s)&&_n(s)==er}function ns(s,l,p,C,w){return s===l?!0:s==null||l==null||!Ft(s)&&!Ft(l)?s!==s&&l!==l:I0(s,l,p,C,ns,w)}function I0(s,l,p,C,w,T){var $=Qe(s),z=Qe(l),q=$?Mt:cn(s),_e=z?Mt:cn(l);q=q==Tt?At:q,_e=_e==Tt?At:_e;var fe=q==At,ge=_e==At,Ae=q==_e;if(Ae&&ii(s)){if(!ii(l))return!1;$=!0,fe=!1}if(Ae&&!fe)return T||(T=new rr),$||ao(s)?Kf(s,l,p,C,w,T):V0(s,l,q,p,C,w,T);if(!(p&E)){var Ge=fe&&Et.call(s,"__wrapped__"),Be=ge&&Et.call(l,"__wrapped__");if(Ge||Be){var rt=Ge?s.value():s,We=Be?l.value():l;return T||(T=new rr),w(rt,We,p,C,T)}}return Ae?(T||(T=new rr),X0(s,l,p,C,w,T)):!1}function O0(s){return Ft(s)&&cn(s)==we}function Ec(s,l,p,C){var w=p.length,T=w,$=!C;if(s==null)return!T;for(s=bt(s);w--;){var z=p[w];if($&&z[2]?z[1]!==s[z[0]]:!(z[0]in s))return!1}for(;++w<T;){z=p[w];var q=z[0],_e=s[q],fe=z[1];if($&&z[2]){if(_e===n&&!(q in s))return!1}else{var ge=new rr;if(C)var Ae=C(_e,fe,q,s,l,ge);if(!(Ae===n?ns(fe,_e,E|I,C,ge):Ae))return!1}}return!0}function hf(s){if(!Ut(s)||iE(s))return!1;var l=Rr(s)?O1:_m;return l.test(yi(s))}function b0(s){return Ft(s)&&_n(s)==wr}function w0(s){return Ft(s)&&cn(s)==Cn}function y0(s){return Ft(s)&&ka(s.length)&&!!xt[_n(s)]}function pf(s){return typeof s=="function"?s:s==null?wn:typeof s=="object"?Qe(s)?Ef(s[0],s[1]):mf(s):$g(s)}function Cc(s){if(!os(s))return S1(s);var l=[];for(var p in bt(s))Et.call(s,p)&&p!="constructor"&&l.push(p);return l}function L0(s){if(!Ut(s))return lE(s);var l=os(s),p=[];for(var C in s)C=="constructor"&&(l||!Et.call(s,C))||p.push(C);return p}function Ic(s,l){return s<l}function vf(s,l){var p=-1,C=On(s)?ee(s.length):[];return ei(s,function(w,T,$){C[++p]=l(w,T,$)}),C}function mf(s){var l=Mc(s);return l.length==1&&l[0][2]?Qf(l[0][0],l[0][1]):function(p){return p===s||Ec(p,s,l)}}function Ef(s,l){return $c(s)&&Zf(l)?Qf(gr(s),l):function(p){var C=Vc(p,s);return C===n&&C===l?Xc(p,s):ns(l,C,E|I)}}function ma(s,l,p,C,w){s!==l&&hc(l,function(T,$){if(w||(w=new rr),Ut(T))A0(s,l,$,p,ma,C,w);else{var z=C?C(Pc(s,$),T,$+"",s,l,w):n;z===n&&(z=T),fc(s,$,z)}},bn)}function A0(s,l,p,C,w,T,$){var z=Pc(s,p),q=Pc(l,p),_e=$.get(q);if(_e){fc(s,p,_e);return}var fe=T?T(z,q,p+"",s,l,$):n,ge=fe===n;if(ge){var Ae=Qe(q),Ge=!Ae&&ii(q),Be=!Ae&&!Ge&&ao(q);fe=q,Ae||Ge||Be?Qe(z)?fe=z:Ht(z)?fe=In(z):Ge?(ge=!1,fe=Rf(q,!0)):Be?(ge=!1,fe=Tf(q,!0)):fe=[]:as(q)||Li(q)?(fe=z,Li(z)?fe=Sg(z):(!Ut(z)||Rr(z))&&(fe=qf(q))):ge=!1}ge&&($.set(q,fe),w(fe,q,C,T,$),$.delete(q)),fc(s,p,fe)}function Cf(s,l){var p=s.length;if(p)return l+=l<0?p:0,xr(l,p)?s[l]:n}function If(s,l,p){l.length?l=Dt(l,function(T){return Qe(T)?function($){return bi($,T.length===1?T[0]:T)}:T}):l=[wn];var C=-1;l=Dt(l,Rn(He()));var w=vf(s,function(T,$,z){var q=Dt(l,function(_e){return _e(T)});return{criteria:q,index:++C,value:T}});return e1(w,function(T,$){return P0(T,$,p)})}function S0(s,l){return Of(s,l,function(p,C){return Xc(s,C)})}function Of(s,l,p){for(var C=-1,w=l.length,T={};++C<w;){var $=l[C],z=bi(s,$);p(z,$)&&rs(T,ni($,s),z)}return T}function N0(s){return function(l){return bi(l,s)}}function Oc(s,l,p,C){var w=C?Jm:qi,T=-1,$=l.length,z=s;for(s===l&&(l=In(l)),p&&(z=Dt(s,Rn(p)));++T<$;)for(var q=0,_e=l[T],fe=p?p(_e):_e;(q=w(z,fe,q,C))>-1;)z!==s&&la.call(z,q,1),la.call(s,q,1);return s}function bf(s,l){for(var p=s?l.length:0,C=p-1;p--;){var w=l[p];if(p==C||w!==T){var T=w;xr(w)?la.call(s,w,1):Lc(s,w)}}return s}function bc(s,l){return s+da(nf()*(l-s+1))}function x0(s,l,p,C){for(var w=-1,T=Kt(ua((l-s)/(p||1)),0),$=ee(T);T--;)$[C?T:++w]=s,s+=p;return $}function wc(s,l){var p="";if(!s||l<1||l>Le)return p;do l%2&&(p+=s),l=da(l/2),l&&(s+=s);while(l);return p}function it(s,l){return Hc(Jf(s,l,wn),s+"")}function R0(s){return sf(lo(s))}function T0(s,l){var p=lo(s);return Sa(p,Oi(l,0,p.length))}function rs(s,l,p,C){if(!Ut(s))return s;l=ni(l,s);for(var w=-1,T=l.length,$=T-1,z=s;z!=null&&++w<T;){var q=gr(l[w]),_e=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(w!=$){var fe=z[q];_e=C?C(fe,q,z):n,_e===n&&(_e=Ut(fe)?fe:xr(l[w+1])?[]:{})}Jo(z,q,_e),z=z[q]}return s}var wf=_a?function(s,l){return _a.set(s,l),s}:wn,D0=ca?function(s,l){return ca(s,"toString",{configurable:!0,enumerable:!1,value:Zc(l),writable:!0})}:wn;function k0(s){return Sa(lo(s))}function Yn(s,l,p){var C=-1,w=s.length;l<0&&(l=-l>w?0:w+l),p=p>w?w:p,p<0&&(p+=w),w=l>p?0:p-l>>>0,l>>>=0;for(var T=ee(w);++C<w;)T[C]=s[C+l];return T}function G0(s,l){var p;return ei(s,function(C,w,T){return p=l(C,w,T),!p}),!!p}function Ea(s,l,p){var C=0,w=s==null?C:s.length;if(typeof l=="number"&&l===l&&w<=Pt){for(;C<w;){var T=C+w>>>1,$=s[T];$!==null&&!Dn($)&&(p?$<=l:$<l)?C=T+1:w=T}return w}return yc(s,l,wn,p)}function yc(s,l,p,C){var w=0,T=s==null?0:s.length;if(T===0)return 0;l=p(l);for(var $=l!==l,z=l===null,q=Dn(l),_e=l===n;w<T;){var fe=da((w+T)/2),ge=p(s[fe]),Ae=ge!==n,Ge=ge===null,Be=ge===ge,rt=Dn(ge);if($)var We=C||Be;else _e?We=Be&&(C||Ae):z?We=Be&&Ae&&(C||!Ge):q?We=Be&&Ae&&!Ge&&(C||!rt):Ge||rt?We=!1:We=C?ge<=l:ge<l;We?w=fe+1:T=fe}return ln(T,Gt)}function yf(s,l){for(var p=-1,C=s.length,w=0,T=[];++p<C;){var $=s[p],z=l?l($):$;if(!p||!ir(z,q)){var q=z;T[w++]=$===0?0:$}}return T}function Lf(s){return typeof s=="number"?s:Dn(s)?et:+s}function Tn(s){if(typeof s=="string")return s;if(Qe(s))return Dt(s,Tn)+"";if(Dn(s))return rf?rf.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function ti(s,l,p){var C=-1,w=Qs,T=s.length,$=!0,z=[],q=z;if(p)$=!1,w=ec;else if(T>=i){var _e=l?null:j0(s);if(_e)return ea(_e);$=!1,w=Ko,q=new Ii}else q=l?[]:z;e:for(;++C<T;){var fe=s[C],ge=l?l(fe):fe;if(fe=p||fe!==0?fe:0,$&&ge===ge){for(var Ae=q.length;Ae--;)if(q[Ae]===ge)continue e;l&&q.push(ge),z.push(fe)}else w(q,ge,p)||(q!==z&&q.push(ge),z.push(fe))}return z}function Lc(s,l){return l=ni(l,s),s=eg(s,l),s==null||delete s[gr(jn(l))]}function Af(s,l,p,C){return rs(s,l,p(bi(s,l)),C)}function Ca(s,l,p,C){for(var w=s.length,T=C?w:-1;(C?T--:++T<w)&&l(s[T],T,s););return p?Yn(s,C?0:T,C?T+1:w):Yn(s,C?T+1:0,C?w:T)}function Sf(s,l){var p=s;return p instanceof ct&&(p=p.value()),tc(l,function(C,w){return w.func.apply(w.thisArg,Zr([C],w.args))},p)}function Ac(s,l,p){var C=s.length;if(C<2)return C?ti(s[0]):[];for(var w=-1,T=ee(C);++w<C;)for(var $=s[w],z=-1;++z<C;)z!=w&&(T[w]=es(T[w]||$,s[z],l,p));return ti(on(T,1),l,p)}function Nf(s,l,p){for(var C=-1,w=s.length,T=l.length,$={};++C<w;){var z=C<T?l[C]:n;p($,s[C],z)}return $}function Sc(s){return Ht(s)?s:[]}function Nc(s){return typeof s=="function"?s:wn}function ni(s,l){return Qe(s)?s:$c(s,l)?[s]:ig(vt(s))}var M0=it;function ri(s,l,p){var C=s.length;return p=p===n?C:p,!l&&p>=C?s:Yn(s,l,p)}var xf=b1||function(s){return rn.clearTimeout(s)};function Rf(s,l){if(l)return s.slice();var p=s.length,C=Z_?Z_(p):new s.constructor(p);return s.copy(C),C}function xc(s){var l=new s.constructor(s.byteLength);return new sa(l).set(new sa(s)),l}function U0(s,l){var p=l?xc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.byteLength)}function $0(s){var l=new s.constructor(s.source,f_.exec(s));return l.lastIndex=s.lastIndex,l}function F0(s){return Qo?bt(Qo.call(s)):{}}function Tf(s,l){var p=l?xc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.length)}function Df(s,l){if(s!==l){var p=s!==n,C=s===null,w=s===s,T=Dn(s),$=l!==n,z=l===null,q=l===l,_e=Dn(l);if(!z&&!_e&&!T&&s>l||T&&$&&q&&!z&&!_e||C&&$&&q||!p&&q||!w)return 1;if(!C&&!T&&!_e&&s<l||_e&&p&&w&&!C&&!T||z&&p&&w||!$&&w||!q)return-1}return 0}function P0(s,l,p){for(var C=-1,w=s.criteria,T=l.criteria,$=w.length,z=p.length;++C<$;){var q=Df(w[C],T[C]);if(q){if(C>=z)return q;var _e=p[C];return q*(_e=="desc"?-1:1)}}return s.index-l.index}function kf(s,l,p,C){for(var w=-1,T=s.length,$=p.length,z=-1,q=l.length,_e=Kt(T-$,0),fe=ee(q+_e),ge=!C;++z<q;)fe[z]=l[z];for(;++w<$;)(ge||w<T)&&(fe[p[w]]=s[w]);for(;_e--;)fe[z++]=s[w++];return fe}function Gf(s,l,p,C){for(var w=-1,T=s.length,$=-1,z=p.length,q=-1,_e=l.length,fe=Kt(T-z,0),ge=ee(fe+_e),Ae=!C;++w<fe;)ge[w]=s[w];for(var Ge=w;++q<_e;)ge[Ge+q]=l[q];for(;++$<z;)(Ae||w<T)&&(ge[Ge+p[$]]=s[w++]);return ge}function In(s,l){var p=-1,C=s.length;for(l||(l=ee(C));++p<C;)l[p]=s[p];return l}function fr(s,l,p,C){var w=!p;p||(p={});for(var T=-1,$=l.length;++T<$;){var z=l[T],q=C?C(p[z],s[z],z,p,s):n;q===n&&(q=s[z]),w?Ar(p,z,q):Jo(p,z,q)}return p}function H0(s,l){return fr(s,Uc(s),l)}function B0(s,l){return fr(s,Vf(s),l)}function Ia(s,l){return function(p,C){var w=Qe(p)?Km:u0,T=l?l():{};return w(p,s,He(C,2),T)}}function io(s){return it(function(l,p){var C=-1,w=p.length,T=w>1?p[w-1]:n,$=w>2?p[2]:n;for(T=s.length>3&&typeof T=="function"?(w--,T):n,$&&fn(p[0],p[1],$)&&(T=w<3?n:T,w=1),l=bt(l);++C<w;){var z=p[C];z&&s(l,z,C,T)}return l})}function Mf(s,l){return function(p,C){if(p==null)return p;if(!On(p))return s(p,C);for(var w=p.length,T=l?w:-1,$=bt(p);(l?T--:++T<w)&&C($[T],T,$)!==!1;);return p}}function Uf(s){return function(l,p,C){for(var w=-1,T=bt(l),$=C(l),z=$.length;z--;){var q=$[s?z:++w];if(p(T[q],q,T)===!1)break}return l}}function W0(s,l,p){var C=l&O,w=is(s);function T(){var $=this&&this!==rn&&this instanceof T?w:s;return $.apply(C?p:this,arguments)}return T}function $f(s){return function(l){l=vt(l);var p=Zi(l)?nr(l):n,C=p?p[0]:l.charAt(0),w=p?ri(p,1).join(""):l.slice(1);return C[s]()+w}}function oo(s){return function(l){return tc(Mg(Gg(l).replace(Dm,"")),s,"")}}function is(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var p=ro(s.prototype),C=s.apply(p,l);return Ut(C)?C:p}}function z0(s,l,p){var C=is(s);function w(){for(var T=arguments.length,$=ee(T),z=T,q=so(w);z--;)$[z]=arguments[z];var _e=T<3&&$[0]!==q&&$[T-1]!==q?[]:Qr($,q);if(T-=_e.length,T<p)return Wf(s,l,Oa,w.placeholder,n,$,_e,n,n,p-T);var fe=this&&this!==rn&&this instanceof w?C:s;return xn(fe,this,$)}return w}function Ff(s){return function(l,p,C){var w=bt(l);if(!On(l)){var T=He(p,3);l=qt(l),p=function(z){return T(w[z],z,w)}}var $=s(l,p,C);return $>-1?w[T?l[$]:$]:n}}function Pf(s){return Nr(function(l){var p=l.length,C=p,w=Wn.prototype.thru;for(s&&l.reverse();C--;){var T=l[C];if(typeof T!="function")throw new Bn(a);if(w&&!$&&La(T)=="wrapper")var $=new Wn([],!0)}for(C=$?C:p;++C<p;){T=l[C];var z=La(T),q=z=="wrapper"?Gc(T):n;q&&Fc(q[0])&&q[1]==(H|k|F|j)&&!q[4].length&&q[9]==1?$=$[La(q[0])].apply($,q[3]):$=T.length==1&&Fc(T)?$[z]():$.thru(T)}return function(){var _e=arguments,fe=_e[0];if($&&_e.length==1&&Qe(fe))return $.plant(fe).value();for(var ge=0,Ae=p?l[ge].apply(this,_e):fe;++ge<p;)Ae=l[ge].call(this,Ae);return Ae}})}function Oa(s,l,p,C,w,T,$,z,q,_e){var fe=l&H,ge=l&O,Ae=l&b,Ge=l&(k|G),Be=l&J,rt=Ae?n:is(s);function We(){for(var at=arguments.length,dt=ee(at),kn=at;kn--;)dt[kn]=arguments[kn];if(Ge)var gn=so(We),Gn=n1(dt,gn);if(C&&(dt=kf(dt,C,w,Ge)),T&&(dt=Gf(dt,T,$,Ge)),at-=Gn,Ge&&at<_e){var Bt=Qr(dt,gn);return Wf(s,l,Oa,We.placeholder,p,dt,Bt,z,q,_e-at)}var or=ge?p:this,Dr=Ae?or[s]:s;return at=dt.length,z?dt=uE(dt,z):Be&&at>1&&dt.reverse(),fe&&q<at&&(dt.length=q),this&&this!==rn&&this instanceof We&&(Dr=rt||is(Dr)),Dr.apply(or,dt)}return We}function Hf(s,l){return function(p,C){return m0(p,s,l(C),{})}}function ba(s,l){return function(p,C){var w;if(p===n&&C===n)return l;if(p!==n&&(w=p),C!==n){if(w===n)return C;typeof p=="string"||typeof C=="string"?(p=Tn(p),C=Tn(C)):(p=Lf(p),C=Lf(C)),w=s(p,C)}return w}}function Rc(s){return Nr(function(l){return l=Dt(l,Rn(He())),it(function(p){var C=this;return s(l,function(w){return xn(w,C,p)})})})}function wa(s,l){l=l===n?" ":Tn(l);var p=l.length;if(p<2)return p?wc(l,s):l;var C=wc(l,ua(s/Qi(l)));return Zi(l)?ri(nr(C),0,s).join(""):C.slice(0,s)}function Y0(s,l,p,C){var w=l&O,T=is(s);function $(){for(var z=-1,q=arguments.length,_e=-1,fe=C.length,ge=ee(fe+q),Ae=this&&this!==rn&&this instanceof $?T:s;++_e<fe;)ge[_e]=C[_e];for(;q--;)ge[_e++]=arguments[++z];return xn(Ae,w?p:this,ge)}return $}function Bf(s){return function(l,p,C){return C&&typeof C!="number"&&fn(l,p,C)&&(p=C=n),l=Tr(l),p===n?(p=l,l=0):p=Tr(p),C=C===n?l<p?1:-1:Tr(C),x0(l,p,C,s)}}function ya(s){return function(l,p){return typeof l=="string"&&typeof p=="string"||(l=Kn(l),p=Kn(p)),s(l,p)}}function Wf(s,l,p,C,w,T,$,z,q,_e){var fe=l&k,ge=fe?$:n,Ae=fe?n:$,Ge=fe?T:n,Be=fe?n:T;l|=fe?F:Y,l&=~(fe?Y:F),l&S||(l&=-4);var rt=[s,l,w,Ge,ge,Be,Ae,z,q,_e],We=p.apply(n,rt);return Fc(s)&&tg(We,rt),We.placeholder=C,ng(We,s,l)}function Tc(s){var l=jt[s];return function(p,C){if(p=Kn(p),C=C==null?0:ln(nt(C),292),C&&tf(p)){var w=(vt(p)+"e").split("e"),T=l(w[0]+"e"+(+w[1]+C));return w=(vt(T)+"e").split("e"),+(w[0]+"e"+(+w[1]-C))}return l(p)}}var j0=to&&1/ea(new to([,-0]))[1]==xe?function(s){return new to(s)}:eu;function zf(s){return function(l){var p=cn(l);return p==we?lc(l):p==Cn?c1(l):t1(l,s(l))}}function Sr(s,l,p,C,w,T,$,z){var q=l&b;if(!q&&typeof s!="function")throw new Bn(a);var _e=C?C.length:0;if(_e||(l&=-97,C=w=n),$=$===n?$:Kt(nt($),0),z=z===n?z:nt(z),_e-=w?w.length:0,l&Y){var fe=C,ge=w;C=w=n}var Ae=q?n:Gc(s),Ge=[s,l,p,C,w,fe,ge,T,$,z];if(Ae&&aE(Ge,Ae),s=Ge[0],l=Ge[1],p=Ge[2],C=Ge[3],w=Ge[4],z=Ge[9]=Ge[9]===n?q?0:s.length:Kt(Ge[9]-_e,0),!z&&l&(k|G)&&(l&=-25),!l||l==O)var Be=W0(s,l,p);else l==k||l==G?Be=z0(s,l,z):(l==F||l==(O|F))&&!w.length?Be=Y0(s,l,p,C):Be=Oa.apply(n,Ge);var rt=Ae?wf:tg;return ng(rt(Be,Ge),s,l)}function Yf(s,l,p,C){return s===n||ir(s,eo[p])&&!Et.call(C,p)?l:s}function jf(s,l,p,C,w,T){return Ut(s)&&Ut(l)&&(T.set(l,s),ma(s,l,n,jf,T),T.delete(l)),s}function K0(s){return as(s)?n:s}function Kf(s,l,p,C,w,T){var $=p&E,z=s.length,q=l.length;if(z!=q&&!($&&q>z))return!1;var _e=T.get(s),fe=T.get(l);if(_e&&fe)return _e==l&&fe==s;var ge=-1,Ae=!0,Ge=p&I?new Ii:n;for(T.set(s,l),T.set(l,s);++ge<z;){var Be=s[ge],rt=l[ge];if(C)var We=$?C(rt,Be,ge,l,s,T):C(Be,rt,ge,s,l,T);if(We!==n){if(We)continue;Ae=!1;break}if(Ge){if(!nc(l,function(at,dt){if(!Ko(Ge,dt)&&(Be===at||w(Be,at,p,C,T)))return Ge.push(dt)})){Ae=!1;break}}else if(!(Be===rt||w(Be,rt,p,C,T))){Ae=!1;break}}return T.delete(s),T.delete(l),Ae}function V0(s,l,p,C,w,T,$){switch(p){case Vr:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case Kr:return!(s.byteLength!=l.byteLength||!T(new sa(s),new sa(l)));case dr:case er:case ke:return ir(+s,+l);case Or:return s.name==l.name&&s.message==l.message;case wr:case Yr:return s==l+"";case we:var z=lc;case Cn:var q=C&E;if(z||(z=ea),s.size!=l.size&&!q)return!1;var _e=$.get(s);if(_e)return _e==l;C|=I,$.set(s,l);var fe=Kf(z(s),z(l),C,w,T,$);return $.delete(s),fe;case vi:if(Qo)return Qo.call(s)==Qo.call(l)}return!1}function X0(s,l,p,C,w,T){var $=p&E,z=Dc(s),q=z.length,_e=Dc(l),fe=_e.length;if(q!=fe&&!$)return!1;for(var ge=q;ge--;){var Ae=z[ge];if(!($?Ae in l:Et.call(l,Ae)))return!1}var Ge=T.get(s),Be=T.get(l);if(Ge&&Be)return Ge==l&&Be==s;var rt=!0;T.set(s,l),T.set(l,s);for(var We=$;++ge<q;){Ae=z[ge];var at=s[Ae],dt=l[Ae];if(C)var kn=$?C(dt,at,Ae,l,s,T):C(at,dt,Ae,s,l,T);if(!(kn===n?at===dt||w(at,dt,p,C,T):kn)){rt=!1;break}We||(We=Ae=="constructor")}if(rt&&!We){var gn=s.constructor,Gn=l.constructor;gn!=Gn&&"constructor"in s&&"constructor"in l&&!(typeof gn=="function"&&gn instanceof gn&&typeof Gn=="function"&&Gn instanceof Gn)&&(rt=!1)}return T.delete(s),T.delete(l),rt}function Nr(s){return Hc(Jf(s,n,lg),s+"")}function Dc(s){return ff(s,qt,Uc)}function kc(s){return ff(s,bn,Vf)}var Gc=_a?function(s){return _a.get(s)}:eu;function La(s){for(var l=s.name+"",p=no[l],C=Et.call(no,l)?p.length:0;C--;){var w=p[C],T=w.func;if(T==null||T==s)return w.name}return l}function so(s){var l=Et.call(A,"placeholder")?A:s;return l.placeholder}function He(){var s=A.iteratee||Qc;return s=s===Qc?pf:s,arguments.length?s(arguments[0],arguments[1]):s}function Aa(s,l){var p=s.__data__;return rE(l)?p[typeof l=="string"?"string":"hash"]:p.map}function Mc(s){for(var l=qt(s),p=l.length;p--;){var C=l[p],w=s[C];l[p]=[C,w,Zf(w)]}return l}function wi(s,l){var p=s1(s,l);return hf(p)?p:n}function q0(s){var l=Et.call(s,Ei),p=s[Ei];try{s[Ei]=n;var C=!0}catch{}var w=ia.call(s);return C&&(l?s[Ei]=p:delete s[Ei]),w}var Uc=uc?function(s){return s==null?[]:(s=bt(s),qr(uc(s),function(l){return J_.call(s,l)}))}:tu,Vf=uc?function(s){for(var l=[];s;)Zr(l,Uc(s)),s=aa(s);return l}:tu,cn=_n;(dc&&cn(new dc(new ArrayBuffer(1)))!=Vr||Xo&&cn(new Xo)!=we||_c&&cn(_c.resolve())!=Bo||to&&cn(new to)!=Cn||qo&&cn(new qo)!=jr)&&(cn=function(s){var l=_n(s),p=l==At?s.constructor:n,C=p?yi(p):"";if(C)switch(C){case T1:return Vr;case D1:return we;case k1:return Bo;case G1:return Cn;case M1:return jr}return l});function Z0(s,l,p){for(var C=-1,w=p.length;++C<w;){var T=p[C],$=T.size;switch(T.type){case"drop":s+=$;break;case"dropRight":l-=$;break;case"take":l=ln(l,s+$);break;case"takeRight":s=Kt(s,l-$);break}}return{start:s,end:l}}function Q0(s){var l=s.match(im);return l?l[1].split(om):[]}function Xf(s,l,p){l=ni(l,s);for(var C=-1,w=l.length,T=!1;++C<w;){var $=gr(l[C]);if(!(T=s!=null&&p(s,$)))break;s=s[$]}return T||++C!=w?T:(w=s==null?0:s.length,!!w&&ka(w)&&xr($,w)&&(Qe(s)||Li(s)))}function J0(s){var l=s.length,p=new s.constructor(l);return l&&typeof s[0]=="string"&&Et.call(s,"index")&&(p.index=s.index,p.input=s.input),p}function qf(s){return typeof s.constructor=="function"&&!os(s)?ro(aa(s)):{}}function eE(s,l,p){var C=s.constructor;switch(l){case Kr:return xc(s);case dr:case er:return new C(+s);case Vr:return U0(s,p);case ji:case Wo:case Ki:case zo:case Yo:case jo:case Ze:case tr:case Vi:return Tf(s,p);case we:return new C;case ke:case Yr:return new C(s);case wr:return $0(s);case Cn:return new C;case vi:return F0(s)}}function tE(s,l){var p=l.length;if(!p)return s;var C=p-1;return l[C]=(p>1?"& ":"")+l[C],l=l.join(p>2?", ":" "),s.replace(rm,`{
/* [wrapped with `+l+`] */
`)}function nE(s){return Qe(s)||Li(s)||!!(ef&&s&&s[ef])}function xr(s,l){var p=typeof s;return l=l??Le,!!l&&(p=="number"||p!="symbol"&&gm.test(s))&&s>-1&&s%1==0&&s<l}function fn(s,l,p){if(!Ut(p))return!1;var C=typeof l;return(C=="number"?On(p)&&xr(l,p.length):C=="string"&&l in p)?ir(p[l],s):!1}function $c(s,l){if(Qe(s))return!1;var p=typeof s;return p=="number"||p=="symbol"||p=="boolean"||s==null||Dn(s)?!0:Jv.test(s)||!Qv.test(s)||l!=null&&s in bt(l)}function rE(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Fc(s){var l=La(s),p=A[l];if(typeof p!="function"||!(l in ct.prototype))return!1;if(s===p)return!0;var C=Gc(p);return!!C&&s===C[0]}function iE(s){return!!q_&&q_ in s}var oE=na?Rr:nu;function os(s){var l=s&&s.constructor,p=typeof l=="function"&&l.prototype||eo;return s===p}function Zf(s){return s===s&&!Ut(s)}function Qf(s,l){return function(p){return p==null?!1:p[s]===l&&(l!==n||s in bt(p))}}function sE(s){var l=Ta(s,function(C){return p.size===_&&p.clear(),C}),p=l.cache;return l}function aE(s,l){var p=s[1],C=l[1],w=p|C,T=w<(O|b|H),$=C==H&&p==k||C==H&&p==j&&s[7].length<=l[8]||C==(H|j)&&l[7].length<=l[8]&&p==k;if(!(T||$))return s;C&O&&(s[2]=l[2],w|=p&O?0:S);var z=l[3];if(z){var q=s[3];s[3]=q?kf(q,z,l[4]):z,s[4]=q?Qr(s[3],h):l[4]}return z=l[5],z&&(q=s[5],s[5]=q?Gf(q,z,l[6]):z,s[6]=q?Qr(s[5],h):l[6]),z=l[7],z&&(s[7]=z),C&H&&(s[8]=s[8]==null?l[8]:ln(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=w,s}function lE(s){var l=[];if(s!=null)for(var p in bt(s))l.push(p);return l}function cE(s){return ia.call(s)}function Jf(s,l,p){return l=Kt(l===n?s.length-1:l,0),function(){for(var C=arguments,w=-1,T=Kt(C.length-l,0),$=ee(T);++w<T;)$[w]=C[l+w];w=-1;for(var z=ee(l+1);++w<l;)z[w]=C[w];return z[l]=p($),xn(s,this,z)}}function eg(s,l){return l.length<2?s:bi(s,Yn(l,0,-1))}function uE(s,l){for(var p=s.length,C=ln(l.length,p),w=In(s);C--;){var T=l[C];s[C]=xr(T,p)?w[T]:n}return s}function Pc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var tg=rg(wf),ss=y1||function(s,l){return rn.setTimeout(s,l)},Hc=rg(D0);function ng(s,l,p){var C=l+"";return Hc(s,tE(C,dE(Q0(C),p)))}function rg(s){var l=0,p=0;return function(){var C=N1(),w=me-(C-p);if(p=C,w>0){if(++l>=ie)return arguments[0]}else l=0;return s.apply(n,arguments)}}function Sa(s,l){var p=-1,C=s.length,w=C-1;for(l=l===n?C:l;++p<l;){var T=bc(p,w),$=s[T];s[T]=s[p],s[p]=$}return s.length=l,s}var ig=sE(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(em,function(p,C,w,T){l.push(w?T.replace(lm,"$1"):C||p)}),l});function gr(s){if(typeof s=="string"||Dn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function yi(s){if(s!=null){try{return ra.call(s)}catch{}try{return s+""}catch{}}return""}function dE(s,l){return Hn(tn,function(p){var C="_."+p[0];l&p[1]&&!Qs(s,C)&&s.push(C)}),s.sort()}function og(s){if(s instanceof ct)return s.clone();var l=new Wn(s.__wrapped__,s.__chain__);return l.__actions__=In(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function _E(s,l,p){(p?fn(s,l,p):l===n)?l=1:l=Kt(nt(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var w=0,T=0,$=ee(ua(C/l));w<C;)$[T++]=Yn(s,w,w+=l);return $}function fE(s){for(var l=-1,p=s==null?0:s.length,C=0,w=[];++l<p;){var T=s[l];T&&(w[C++]=T)}return w}function gE(){var s=arguments.length;if(!s)return[];for(var l=ee(s-1),p=arguments[0],C=s;C--;)l[C-1]=arguments[C];return Zr(Qe(p)?In(p):[p],on(l,1))}var hE=it(function(s,l){return Ht(s)?es(s,on(l,1,Ht,!0)):[]}),pE=it(function(s,l){var p=jn(l);return Ht(p)&&(p=n),Ht(s)?es(s,on(l,1,Ht,!0),He(p,2)):[]}),vE=it(function(s,l){var p=jn(l);return Ht(p)&&(p=n),Ht(s)?es(s,on(l,1,Ht,!0),n,p):[]});function mE(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:nt(l),Yn(s,l<0?0:l,C)):[]}function EE(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:nt(l),l=C-l,Yn(s,0,l<0?0:l)):[]}function CE(s,l){return s&&s.length?Ca(s,He(l,3),!0,!0):[]}function IE(s,l){return s&&s.length?Ca(s,He(l,3),!0):[]}function OE(s,l,p,C){var w=s==null?0:s.length;return w?(p&&typeof p!="number"&&fn(s,l,p)&&(p=0,C=w),g0(s,l,p,C)):[]}function sg(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=p==null?0:nt(p);return w<0&&(w=Kt(C+w,0)),Js(s,He(l,3),w)}function ag(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=C-1;return p!==n&&(w=nt(p),w=p<0?Kt(C+w,0):ln(w,C-1)),Js(s,He(l,3),w,!0)}function lg(s){var l=s==null?0:s.length;return l?on(s,1):[]}function bE(s){var l=s==null?0:s.length;return l?on(s,xe):[]}function wE(s,l){var p=s==null?0:s.length;return p?(l=l===n?1:nt(l),on(s,l)):[]}function yE(s){for(var l=-1,p=s==null?0:s.length,C={};++l<p;){var w=s[l];C[w[0]]=w[1]}return C}function cg(s){return s&&s.length?s[0]:n}function LE(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=p==null?0:nt(p);return w<0&&(w=Kt(C+w,0)),qi(s,l,w)}function AE(s){var l=s==null?0:s.length;return l?Yn(s,0,-1):[]}var SE=it(function(s){var l=Dt(s,Sc);return l.length&&l[0]===s[0]?mc(l):[]}),NE=it(function(s){var l=jn(s),p=Dt(s,Sc);return l===jn(p)?l=n:p.pop(),p.length&&p[0]===s[0]?mc(p,He(l,2)):[]}),xE=it(function(s){var l=jn(s),p=Dt(s,Sc);return l=typeof l=="function"?l:n,l&&p.pop(),p.length&&p[0]===s[0]?mc(p,n,l):[]});function RE(s,l){return s==null?"":A1.call(s,l)}function jn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function TE(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var w=C;return p!==n&&(w=nt(p),w=w<0?Kt(C+w,0):ln(w,C-1)),l===l?d1(s,l,w):Js(s,B_,w,!0)}function DE(s,l){return s&&s.length?Cf(s,nt(l)):n}var kE=it(ug);function ug(s,l){return s&&s.length&&l&&l.length?Oc(s,l):s}function GE(s,l,p){return s&&s.length&&l&&l.length?Oc(s,l,He(p,2)):s}function ME(s,l,p){return s&&s.length&&l&&l.length?Oc(s,l,n,p):s}var UE=Nr(function(s,l){var p=s==null?0:s.length,C=gc(s,l);return bf(s,Dt(l,function(w){return xr(w,p)?+w:w}).sort(Df)),C});function $E(s,l){var p=[];if(!(s&&s.length))return p;var C=-1,w=[],T=s.length;for(l=He(l,3);++C<T;){var $=s[C];l($,C,s)&&(p.push($),w.push(C))}return bf(s,w),p}function Bc(s){return s==null?s:R1.call(s)}function FE(s,l,p){var C=s==null?0:s.length;return C?(p&&typeof p!="number"&&fn(s,l,p)?(l=0,p=C):(l=l==null?0:nt(l),p=p===n?C:nt(p)),Yn(s,l,p)):[]}function PE(s,l){return Ea(s,l)}function HE(s,l,p){return yc(s,l,He(p,2))}function BE(s,l){var p=s==null?0:s.length;if(p){var C=Ea(s,l);if(C<p&&ir(s[C],l))return C}return-1}function WE(s,l){return Ea(s,l,!0)}function zE(s,l,p){return yc(s,l,He(p,2),!0)}function YE(s,l){var p=s==null?0:s.length;if(p){var C=Ea(s,l,!0)-1;if(ir(s[C],l))return C}return-1}function jE(s){return s&&s.length?yf(s):[]}function KE(s,l){return s&&s.length?yf(s,He(l,2)):[]}function VE(s){var l=s==null?0:s.length;return l?Yn(s,1,l):[]}function XE(s,l,p){return s&&s.length?(l=p||l===n?1:nt(l),Yn(s,0,l<0?0:l)):[]}function qE(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:nt(l),l=C-l,Yn(s,l<0?0:l,C)):[]}function ZE(s,l){return s&&s.length?Ca(s,He(l,3),!1,!0):[]}function QE(s,l){return s&&s.length?Ca(s,He(l,3)):[]}var JE=it(function(s){return ti(on(s,1,Ht,!0))}),eC=it(function(s){var l=jn(s);return Ht(l)&&(l=n),ti(on(s,1,Ht,!0),He(l,2))}),tC=it(function(s){var l=jn(s);return l=typeof l=="function"?l:n,ti(on(s,1,Ht,!0),n,l)});function nC(s){return s&&s.length?ti(s):[]}function rC(s,l){return s&&s.length?ti(s,He(l,2)):[]}function iC(s,l){return l=typeof l=="function"?l:n,s&&s.length?ti(s,n,l):[]}function Wc(s){if(!(s&&s.length))return[];var l=0;return s=qr(s,function(p){if(Ht(p))return l=Kt(p.length,l),!0}),sc(l,function(p){return Dt(s,rc(p))})}function dg(s,l){if(!(s&&s.length))return[];var p=Wc(s);return l==null?p:Dt(p,function(C){return xn(l,n,C)})}var oC=it(function(s,l){return Ht(s)?es(s,l):[]}),sC=it(function(s){return Ac(qr(s,Ht))}),aC=it(function(s){var l=jn(s);return Ht(l)&&(l=n),Ac(qr(s,Ht),He(l,2))}),lC=it(function(s){var l=jn(s);return l=typeof l=="function"?l:n,Ac(qr(s,Ht),n,l)}),cC=it(Wc);function uC(s,l){return Nf(s||[],l||[],Jo)}function dC(s,l){return Nf(s||[],l||[],rs)}var _C=it(function(s){var l=s.length,p=l>1?s[l-1]:n;return p=typeof p=="function"?(s.pop(),p):n,dg(s,p)});function _g(s){var l=A(s);return l.__chain__=!0,l}function fC(s,l){return l(s),s}function Na(s,l){return l(s)}var gC=Nr(function(s){var l=s.length,p=l?s[0]:0,C=this.__wrapped__,w=function(T){return gc(T,s)};return l>1||this.__actions__.length||!(C instanceof ct)||!xr(p)?this.thru(w):(C=C.slice(p,+p+(l?1:0)),C.__actions__.push({func:Na,args:[w],thisArg:n}),new Wn(C,this.__chain__).thru(function(T){return l&&!T.length&&T.push(n),T}))});function hC(){return _g(this)}function pC(){return new Wn(this.value(),this.__chain__)}function vC(){this.__values__===n&&(this.__values__=Lg(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function mC(){return this}function EC(s){for(var l,p=this;p instanceof ga;){var C=og(p);C.__index__=0,C.__values__=n,l?w.__wrapped__=C:l=C;var w=C;p=p.__wrapped__}return w.__wrapped__=s,l}function CC(){var s=this.__wrapped__;if(s instanceof ct){var l=s;return this.__actions__.length&&(l=new ct(this)),l=l.reverse(),l.__actions__.push({func:Na,args:[Bc],thisArg:n}),new Wn(l,this.__chain__)}return this.thru(Bc)}function IC(){return Sf(this.__wrapped__,this.__actions__)}var OC=Ia(function(s,l,p){Et.call(s,p)?++s[p]:Ar(s,p,1)});function bC(s,l,p){var C=Qe(s)?P_:f0;return p&&fn(s,l,p)&&(l=n),C(s,He(l,3))}function wC(s,l){var p=Qe(s)?qr:df;return p(s,He(l,3))}var yC=Ff(sg),LC=Ff(ag);function AC(s,l){return on(xa(s,l),1)}function SC(s,l){return on(xa(s,l),xe)}function NC(s,l,p){return p=p===n?1:nt(p),on(xa(s,l),p)}function fg(s,l){var p=Qe(s)?Hn:ei;return p(s,He(l,3))}function gg(s,l){var p=Qe(s)?Vm:uf;return p(s,He(l,3))}var xC=Ia(function(s,l,p){Et.call(s,p)?s[p].push(l):Ar(s,p,[l])});function RC(s,l,p,C){s=On(s)?s:lo(s),p=p&&!C?nt(p):0;var w=s.length;return p<0&&(p=Kt(w+p,0)),Ga(s)?p<=w&&s.indexOf(l,p)>-1:!!w&&qi(s,l,p)>-1}var TC=it(function(s,l,p){var C=-1,w=typeof l=="function",T=On(s)?ee(s.length):[];return ei(s,function($){T[++C]=w?xn(l,$,p):ts($,l,p)}),T}),DC=Ia(function(s,l,p){Ar(s,p,l)});function xa(s,l){var p=Qe(s)?Dt:vf;return p(s,He(l,3))}function kC(s,l,p,C){return s==null?[]:(Qe(l)||(l=l==null?[]:[l]),p=C?n:p,Qe(p)||(p=p==null?[]:[p]),If(s,l,p))}var GC=Ia(function(s,l,p){s[p?0:1].push(l)},function(){return[[],[]]});function MC(s,l,p){var C=Qe(s)?tc:z_,w=arguments.length<3;return C(s,He(l,4),p,w,ei)}function UC(s,l,p){var C=Qe(s)?Xm:z_,w=arguments.length<3;return C(s,He(l,4),p,w,uf)}function $C(s,l){var p=Qe(s)?qr:df;return p(s,Da(He(l,3)))}function FC(s){var l=Qe(s)?sf:R0;return l(s)}function PC(s,l,p){(p?fn(s,l,p):l===n)?l=1:l=nt(l);var C=Qe(s)?l0:T0;return C(s,l)}function HC(s){var l=Qe(s)?c0:k0;return l(s)}function BC(s){if(s==null)return 0;if(On(s))return Ga(s)?Qi(s):s.length;var l=cn(s);return l==we||l==Cn?s.size:Cc(s).length}function WC(s,l,p){var C=Qe(s)?nc:G0;return p&&fn(s,l,p)&&(l=n),C(s,He(l,3))}var zC=it(function(s,l){if(s==null)return[];var p=l.length;return p>1&&fn(s,l[0],l[1])?l=[]:p>2&&fn(l[0],l[1],l[2])&&(l=[l[0]]),If(s,on(l,1),[])}),Ra=w1||function(){return rn.Date.now()};function YC(s,l){if(typeof l!="function")throw new Bn(a);return s=nt(s),function(){if(--s<1)return l.apply(this,arguments)}}function hg(s,l,p){return l=p?n:l,l=s&&l==null?s.length:l,Sr(s,H,n,n,n,n,l)}function pg(s,l){var p;if(typeof l!="function")throw new Bn(a);return s=nt(s),function(){return--s>0&&(p=l.apply(this,arguments)),s<=1&&(l=n),p}}var zc=it(function(s,l,p){var C=O;if(p.length){var w=Qr(p,so(zc));C|=F}return Sr(s,C,l,p,w)}),vg=it(function(s,l,p){var C=O|b;if(p.length){var w=Qr(p,so(vg));C|=F}return Sr(l,C,s,p,w)});function mg(s,l,p){l=p?n:l;var C=Sr(s,k,n,n,n,n,n,l);return C.placeholder=mg.placeholder,C}function Eg(s,l,p){l=p?n:l;var C=Sr(s,G,n,n,n,n,n,l);return C.placeholder=Eg.placeholder,C}function Cg(s,l,p){var C,w,T,$,z,q,_e=0,fe=!1,ge=!1,Ae=!0;if(typeof s!="function")throw new Bn(a);l=Kn(l)||0,Ut(p)&&(fe=!!p.leading,ge="maxWait"in p,T=ge?Kt(Kn(p.maxWait)||0,l):T,Ae="trailing"in p?!!p.trailing:Ae);function Ge(Bt){var or=C,Dr=w;return C=w=n,_e=Bt,$=s.apply(Dr,or),$}function Be(Bt){return _e=Bt,z=ss(at,l),fe?Ge(Bt):$}function rt(Bt){var or=Bt-q,Dr=Bt-_e,Fg=l-or;return ge?ln(Fg,T-Dr):Fg}function We(Bt){var or=Bt-q,Dr=Bt-_e;return q===n||or>=l||or<0||ge&&Dr>=T}function at(){var Bt=Ra();if(We(Bt))return dt(Bt);z=ss(at,rt(Bt))}function dt(Bt){return z=n,Ae&&C?Ge(Bt):(C=w=n,$)}function kn(){z!==n&&xf(z),_e=0,C=q=w=z=n}function gn(){return z===n?$:dt(Ra())}function Gn(){var Bt=Ra(),or=We(Bt);if(C=arguments,w=this,q=Bt,or){if(z===n)return Be(q);if(ge)return xf(z),z=ss(at,l),Ge(q)}return z===n&&(z=ss(at,l)),$}return Gn.cancel=kn,Gn.flush=gn,Gn}var jC=it(function(s,l){return cf(s,1,l)}),KC=it(function(s,l,p){return cf(s,Kn(l)||0,p)});function VC(s){return Sr(s,J)}function Ta(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Bn(a);var p=function(){var C=arguments,w=l?l.apply(this,C):C[0],T=p.cache;if(T.has(w))return T.get(w);var $=s.apply(this,C);return p.cache=T.set(w,$)||T,$};return p.cache=new(Ta.Cache||Lr),p}Ta.Cache=Lr;function Da(s){if(typeof s!="function")throw new Bn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function XC(s){return pg(2,s)}var qC=M0(function(s,l){l=l.length==1&&Qe(l[0])?Dt(l[0],Rn(He())):Dt(on(l,1),Rn(He()));var p=l.length;return it(function(C){for(var w=-1,T=ln(C.length,p);++w<T;)C[w]=l[w].call(this,C[w]);return xn(s,this,C)})}),Yc=it(function(s,l){var p=Qr(l,so(Yc));return Sr(s,F,n,l,p)}),Ig=it(function(s,l){var p=Qr(l,so(Ig));return Sr(s,Y,n,l,p)}),ZC=Nr(function(s,l){return Sr(s,j,n,n,n,l)});function QC(s,l){if(typeof s!="function")throw new Bn(a);return l=l===n?l:nt(l),it(s,l)}function JC(s,l){if(typeof s!="function")throw new Bn(a);return l=l==null?0:Kt(nt(l),0),it(function(p){var C=p[l],w=ri(p,0,l);return C&&Zr(w,C),xn(s,this,w)})}function eI(s,l,p){var C=!0,w=!0;if(typeof s!="function")throw new Bn(a);return Ut(p)&&(C="leading"in p?!!p.leading:C,w="trailing"in p?!!p.trailing:w),Cg(s,l,{leading:C,maxWait:l,trailing:w})}function tI(s){return hg(s,1)}function nI(s,l){return Yc(Nc(l),s)}function rI(){if(!arguments.length)return[];var s=arguments[0];return Qe(s)?s:[s]}function iI(s){return zn(s,m)}function oI(s,l){return l=typeof l=="function"?l:n,zn(s,m,l)}function sI(s){return zn(s,g|m)}function aI(s,l){return l=typeof l=="function"?l:n,zn(s,g|m,l)}function lI(s,l){return l==null||lf(s,l,qt(l))}function ir(s,l){return s===l||s!==s&&l!==l}var cI=ya(vc),uI=ya(function(s,l){return s>=l}),Li=gf(function(){return arguments}())?gf:function(s){return Ft(s)&&Et.call(s,"callee")&&!J_.call(s,"callee")},Qe=ee.isArray,dI=k_?Rn(k_):E0;function On(s){return s!=null&&ka(s.length)&&!Rr(s)}function Ht(s){return Ft(s)&&On(s)}function _I(s){return s===!0||s===!1||Ft(s)&&_n(s)==dr}var ii=L1||nu,fI=G_?Rn(G_):C0;function gI(s){return Ft(s)&&s.nodeType===1&&!as(s)}function hI(s){if(s==null)return!0;if(On(s)&&(Qe(s)||typeof s=="string"||typeof s.splice=="function"||ii(s)||ao(s)||Li(s)))return!s.length;var l=cn(s);if(l==we||l==Cn)return!s.size;if(os(s))return!Cc(s).length;for(var p in s)if(Et.call(s,p))return!1;return!0}function pI(s,l){return ns(s,l)}function vI(s,l,p){p=typeof p=="function"?p:n;var C=p?p(s,l):n;return C===n?ns(s,l,n,p):!!C}function jc(s){if(!Ft(s))return!1;var l=_n(s);return l==Or||l==Yi||typeof s.message=="string"&&typeof s.name=="string"&&!as(s)}function mI(s){return typeof s=="number"&&tf(s)}function Rr(s){if(!Ut(s))return!1;var l=_n(s);return l==br||l==$e||l==nn||l==Ys}function Og(s){return typeof s=="number"&&s==nt(s)}function ka(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Le}function Ut(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Ft(s){return s!=null&&typeof s=="object"}var bg=M_?Rn(M_):O0;function EI(s,l){return s===l||Ec(s,l,Mc(l))}function CI(s,l,p){return p=typeof p=="function"?p:n,Ec(s,l,Mc(l),p)}function II(s){return wg(s)&&s!=+s}function OI(s){if(oE(s))throw new Xe(o);return hf(s)}function bI(s){return s===null}function wI(s){return s==null}function wg(s){return typeof s=="number"||Ft(s)&&_n(s)==ke}function as(s){if(!Ft(s)||_n(s)!=At)return!1;var l=aa(s);if(l===null)return!0;var p=Et.call(l,"constructor")&&l.constructor;return typeof p=="function"&&p instanceof p&&ra.call(p)==C1}var Kc=U_?Rn(U_):b0;function yI(s){return Og(s)&&s>=-9007199254740991&&s<=Le}var yg=$_?Rn($_):w0;function Ga(s){return typeof s=="string"||!Qe(s)&&Ft(s)&&_n(s)==Yr}function Dn(s){return typeof s=="symbol"||Ft(s)&&_n(s)==vi}var ao=F_?Rn(F_):y0;function LI(s){return s===n}function AI(s){return Ft(s)&&cn(s)==jr}function SI(s){return Ft(s)&&_n(s)==Bl}var NI=ya(Ic),xI=ya(function(s,l){return s<=l});function Lg(s){if(!s)return[];if(On(s))return Ga(s)?nr(s):In(s);if(Vo&&s[Vo])return l1(s[Vo]());var l=cn(s),p=l==we?lc:l==Cn?ea:lo;return p(s)}function Tr(s){if(!s)return s===0?s:0;if(s=Kn(s),s===xe||s===-1/0){var l=s<0?-1:1;return l*Oe}return s===s?s:0}function nt(s){var l=Tr(s),p=l%1;return l===l?p?l-p:l:0}function Ag(s){return s?Oi(nt(s),0,tt):0}function Kn(s){if(typeof s=="number")return s;if(Dn(s))return et;if(Ut(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Ut(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=Y_(s);var p=dm.test(s);return p||fm.test(s)?Ym(s.slice(2),p?2:8):um.test(s)?et:+s}function Sg(s){return fr(s,bn(s))}function RI(s){return s?Oi(nt(s),-9007199254740991,Le):s===0?s:0}function vt(s){return s==null?"":Tn(s)}var TI=io(function(s,l){if(os(l)||On(l)){fr(l,qt(l),s);return}for(var p in l)Et.call(l,p)&&Jo(s,p,l[p])}),Ng=io(function(s,l){fr(l,bn(l),s)}),Ma=io(function(s,l,p,C){fr(l,bn(l),s,C)}),DI=io(function(s,l,p,C){fr(l,qt(l),s,C)}),kI=Nr(gc);function GI(s,l){var p=ro(s);return l==null?p:af(p,l)}var MI=it(function(s,l){s=bt(s);var p=-1,C=l.length,w=C>2?l[2]:n;for(w&&fn(l[0],l[1],w)&&(C=1);++p<C;)for(var T=l[p],$=bn(T),z=-1,q=$.length;++z<q;){var _e=$[z],fe=s[_e];(fe===n||ir(fe,eo[_e])&&!Et.call(s,_e))&&(s[_e]=T[_e])}return s}),UI=it(function(s){return s.push(n,jf),xn(xg,n,s)});function $I(s,l){return H_(s,He(l,3),_r)}function FI(s,l){return H_(s,He(l,3),pc)}function PI(s,l){return s==null?s:hc(s,He(l,3),bn)}function HI(s,l){return s==null?s:_f(s,He(l,3),bn)}function BI(s,l){return s&&_r(s,He(l,3))}function WI(s,l){return s&&pc(s,He(l,3))}function zI(s){return s==null?[]:va(s,qt(s))}function YI(s){return s==null?[]:va(s,bn(s))}function Vc(s,l,p){var C=s==null?n:bi(s,l);return C===n?p:C}function jI(s,l){return s!=null&&Xf(s,l,h0)}function Xc(s,l){return s!=null&&Xf(s,l,p0)}var KI=Hf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=ia.call(l)),s[l]=p},Zc(wn)),VI=Hf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=ia.call(l)),Et.call(s,l)?s[l].push(p):s[l]=[p]},He),XI=it(ts);function qt(s){return On(s)?of(s):Cc(s)}function bn(s){return On(s)?of(s,!0):L0(s)}function qI(s,l){var p={};return l=He(l,3),_r(s,function(C,w,T){Ar(p,l(C,w,T),C)}),p}function ZI(s,l){var p={};return l=He(l,3),_r(s,function(C,w,T){Ar(p,w,l(C,w,T))}),p}var QI=io(function(s,l,p){ma(s,l,p)}),xg=io(function(s,l,p,C){ma(s,l,p,C)}),JI=Nr(function(s,l){var p={};if(s==null)return p;var C=!1;l=Dt(l,function(T){return T=ni(T,s),C||(C=T.length>1),T}),fr(s,kc(s),p),C&&(p=zn(p,g|v|m,K0));for(var w=l.length;w--;)Lc(p,l[w]);return p});function eO(s,l){return Rg(s,Da(He(l)))}var tO=Nr(function(s,l){return s==null?{}:S0(s,l)});function Rg(s,l){if(s==null)return{};var p=Dt(kc(s),function(C){return[C]});return l=He(l),Of(s,p,function(C,w){return l(C,w[0])})}function nO(s,l,p){l=ni(l,s);var C=-1,w=l.length;for(w||(w=1,s=n);++C<w;){var T=s==null?n:s[gr(l[C])];T===n&&(C=w,T=p),s=Rr(T)?T.call(s):T}return s}function rO(s,l,p){return s==null?s:rs(s,l,p)}function iO(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:rs(s,l,p,C)}var Tg=zf(qt),Dg=zf(bn);function oO(s,l,p){var C=Qe(s),w=C||ii(s)||ao(s);if(l=He(l,4),p==null){var T=s&&s.constructor;w?p=C?new T:[]:Ut(s)?p=Rr(T)?ro(aa(s)):{}:p={}}return(w?Hn:_r)(s,function($,z,q){return l(p,$,z,q)}),p}function sO(s,l){return s==null?!0:Lc(s,l)}function aO(s,l,p){return s==null?s:Af(s,l,Nc(p))}function lO(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:Af(s,l,Nc(p),C)}function lo(s){return s==null?[]:ac(s,qt(s))}function cO(s){return s==null?[]:ac(s,bn(s))}function uO(s,l,p){return p===n&&(p=l,l=n),p!==n&&(p=Kn(p),p=p===p?p:0),l!==n&&(l=Kn(l),l=l===l?l:0),Oi(Kn(s),l,p)}function dO(s,l,p){return l=Tr(l),p===n?(p=l,l=0):p=Tr(p),s=Kn(s),v0(s,l,p)}function _O(s,l,p){if(p&&typeof p!="boolean"&&fn(s,l,p)&&(l=p=n),p===n&&(typeof l=="boolean"?(p=l,l=n):typeof s=="boolean"&&(p=s,s=n)),s===n&&l===n?(s=0,l=1):(s=Tr(s),l===n?(l=s,s=0):l=Tr(l)),s>l){var C=s;s=l,l=C}if(p||s%1||l%1){var w=nf();return ln(s+w*(l-s+zm("1e-"+((w+"").length-1))),l)}return bc(s,l)}var fO=oo(function(s,l,p){return l=l.toLowerCase(),s+(p?kg(l):l)});function kg(s){return qc(vt(s).toLowerCase())}function Gg(s){return s=vt(s),s&&s.replace(hm,r1).replace(km,"")}function gO(s,l,p){s=vt(s),l=Tn(l);var C=s.length;p=p===n?C:Oi(nt(p),0,C);var w=p;return p-=l.length,p>=0&&s.slice(p,w)==l}function hO(s){return s=vt(s),s&&Xv.test(s)?s.replace(Vs,i1):s}function pO(s){return s=vt(s),s&&tm.test(s)?s.replace(Yl,"\\$&"):s}var vO=oo(function(s,l,p){return s+(p?"-":"")+l.toLowerCase()}),mO=oo(function(s,l,p){return s+(p?" ":"")+l.toLowerCase()}),EO=$f("toLowerCase");function CO(s,l,p){s=vt(s),l=nt(l);var C=l?Qi(s):0;if(!l||C>=l)return s;var w=(l-C)/2;return wa(da(w),p)+s+wa(ua(w),p)}function IO(s,l,p){s=vt(s),l=nt(l);var C=l?Qi(s):0;return l&&C<l?s+wa(l-C,p):s}function OO(s,l,p){s=vt(s),l=nt(l);var C=l?Qi(s):0;return l&&C<l?wa(l-C,p)+s:s}function bO(s,l,p){return p||l==null?l=0:l&&(l=+l),x1(vt(s).replace(jl,""),l||0)}function wO(s,l,p){return(p?fn(s,l,p):l===n)?l=1:l=nt(l),wc(vt(s),l)}function yO(){var s=arguments,l=vt(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var LO=oo(function(s,l,p){return s+(p?"_":"")+l.toLowerCase()});function AO(s,l,p){return p&&typeof p!="number"&&fn(s,l,p)&&(l=p=n),p=p===n?tt:p>>>0,p?(s=vt(s),s&&(typeof l=="string"||l!=null&&!Kc(l))&&(l=Tn(l),!l&&Zi(s))?ri(nr(s),0,p):s.split(l,p)):[]}var SO=oo(function(s,l,p){return s+(p?" ":"")+qc(l)});function NO(s,l,p){return s=vt(s),p=p==null?0:Oi(nt(p),0,s.length),l=Tn(l),s.slice(p,p+l.length)==l}function xO(s,l,p){var C=A.templateSettings;p&&fn(s,l,p)&&(l=n),s=vt(s),l=Ma({},l,C,Yf);var w=Ma({},l.imports,C.imports,Yf),T=qt(w),$=ac(w,T),z,q,_e=0,fe=l.interpolate||Xs,ge="__p += '",Ae=cc((l.escape||Xs).source+"|"+fe.source+"|"+(fe===__?cm:Xs).source+"|"+(l.evaluate||Xs).source+"|$","g"),Ge="//# sourceURL="+(Et.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Fm+"]")+`
`;s.replace(Ae,function(We,at,dt,kn,gn,Gn){return dt||(dt=kn),ge+=s.slice(_e,Gn).replace(pm,o1),at&&(z=!0,ge+=`' +
__e(`+at+`) +
'`),gn&&(q=!0,ge+=`';
`+gn+`;
__p += '`),dt&&(ge+=`' +
((__t = (`+dt+`)) == null ? '' : __t) +
'`),_e=Gn+We.length,We}),ge+=`';
`;var Be=Et.call(l,"variable")&&l.variable;if(!Be)ge=`with (obj) {
`+ge+`
}
`;else if(am.test(Be))throw new Xe(c);ge=(q?ge.replace(js,""):ge).replace(Xr,"$1").replace(Wl,"$1;"),ge="function("+(Be||"obj")+`) {
`+(Be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var rt=Ug(function(){return pt(T,Ge+"return "+ge).apply(n,$)});if(rt.source=ge,jc(rt))throw rt;return rt}function RO(s){return vt(s).toLowerCase()}function TO(s){return vt(s).toUpperCase()}function DO(s,l,p){if(s=vt(s),s&&(p||l===n))return Y_(s);if(!s||!(l=Tn(l)))return s;var C=nr(s),w=nr(l),T=j_(C,w),$=K_(C,w)+1;return ri(C,T,$).join("")}function kO(s,l,p){if(s=vt(s),s&&(p||l===n))return s.slice(0,X_(s)+1);if(!s||!(l=Tn(l)))return s;var C=nr(s),w=K_(C,nr(l))+1;return ri(C,0,w).join("")}function GO(s,l,p){if(s=vt(s),s&&(p||l===n))return s.replace(jl,"");if(!s||!(l=Tn(l)))return s;var C=nr(s),w=j_(C,nr(l));return ri(C,w).join("")}function MO(s,l){var p=le,C=Z;if(Ut(l)){var w="separator"in l?l.separator:w;p="length"in l?nt(l.length):p,C="omission"in l?Tn(l.omission):C}s=vt(s);var T=s.length;if(Zi(s)){var $=nr(s);T=$.length}if(p>=T)return s;var z=p-Qi(C);if(z<1)return C;var q=$?ri($,0,z).join(""):s.slice(0,z);if(w===n)return q+C;if($&&(z+=q.length-z),Kc(w)){if(s.slice(z).search(w)){var _e,fe=q;for(w.global||(w=cc(w.source,vt(f_.exec(w))+"g")),w.lastIndex=0;_e=w.exec(fe);)var ge=_e.index;q=q.slice(0,ge===n?z:ge)}}else if(s.indexOf(Tn(w),z)!=z){var Ae=q.lastIndexOf(w);Ae>-1&&(q=q.slice(0,Ae))}return q+C}function UO(s){return s=vt(s),s&&zl.test(s)?s.replace(Ks,_1):s}var $O=oo(function(s,l,p){return s+(p?" ":"")+l.toUpperCase()}),qc=$f("toUpperCase");function Mg(s,l,p){return s=vt(s),l=p?n:l,l===n?a1(s)?h1(s):Qm(s):s.match(l)||[]}var Ug=it(function(s,l){try{return xn(s,n,l)}catch(p){return jc(p)?p:new Xe(p)}}),FO=Nr(function(s,l){return Hn(l,function(p){p=gr(p),Ar(s,p,zc(s[p],s))}),s});function PO(s){var l=s==null?0:s.length,p=He();return s=l?Dt(s,function(C){if(typeof C[1]!="function")throw new Bn(a);return[p(C[0]),C[1]]}):[],it(function(C){for(var w=-1;++w<l;){var T=s[w];if(xn(T[0],this,C))return xn(T[1],this,C)}})}function HO(s){return _0(zn(s,g))}function Zc(s){return function(){return s}}function BO(s,l){return s==null||s!==s?l:s}var WO=Pf(),zO=Pf(!0);function wn(s){return s}function Qc(s){return pf(typeof s=="function"?s:zn(s,g))}function YO(s){return mf(zn(s,g))}function jO(s,l){return Ef(s,zn(l,g))}var KO=it(function(s,l){return function(p){return ts(p,s,l)}}),VO=it(function(s,l){return function(p){return ts(s,p,l)}});function Jc(s,l,p){var C=qt(l),w=va(l,C);p==null&&!(Ut(l)&&(w.length||!C.length))&&(p=l,l=s,s=this,w=va(l,qt(l)));var T=!(Ut(p)&&"chain"in p)||!!p.chain,$=Rr(s);return Hn(w,function(z){var q=l[z];s[z]=q,$&&(s.prototype[z]=function(){var _e=this.__chain__;if(T||_e){var fe=s(this.__wrapped__),ge=fe.__actions__=In(this.__actions__);return ge.push({func:q,args:arguments,thisArg:s}),fe.__chain__=_e,fe}return q.apply(s,Zr([this.value()],arguments))})}),s}function XO(){return rn._===this&&(rn._=I1),this}function eu(){}function qO(s){return s=nt(s),it(function(l){return Cf(l,s)})}var ZO=Rc(Dt),QO=Rc(P_),JO=Rc(nc);function $g(s){return $c(s)?rc(gr(s)):N0(s)}function eb(s){return function(l){return s==null?n:bi(s,l)}}var tb=Bf(),nb=Bf(!0);function tu(){return[]}function nu(){return!1}function rb(){return{}}function ib(){return""}function ob(){return!0}function sb(s,l){if(s=nt(s),s<1||s>Le)return[];var p=tt,C=ln(s,tt);l=He(l),s-=tt;for(var w=sc(C,l);++p<s;)l(p);return w}function ab(s){return Qe(s)?Dt(s,gr):Dn(s)?[s]:In(ig(vt(s)))}function lb(s){var l=++E1;return vt(s)+l}var cb=ba(function(s,l){return s+l},0),ub=Tc("ceil"),db=ba(function(s,l){return s/l},1),_b=Tc("floor");function fb(s){return s&&s.length?pa(s,wn,vc):n}function gb(s,l){return s&&s.length?pa(s,He(l,2),vc):n}function hb(s){return W_(s,wn)}function pb(s,l){return W_(s,He(l,2))}function vb(s){return s&&s.length?pa(s,wn,Ic):n}function mb(s,l){return s&&s.length?pa(s,He(l,2),Ic):n}var Eb=ba(function(s,l){return s*l},1),Cb=Tc("round"),Ib=ba(function(s,l){return s-l},0);function Ob(s){return s&&s.length?oc(s,wn):0}function bb(s,l){return s&&s.length?oc(s,He(l,2)):0}return A.after=YC,A.ary=hg,A.assign=TI,A.assignIn=Ng,A.assignInWith=Ma,A.assignWith=DI,A.at=kI,A.before=pg,A.bind=zc,A.bindAll=FO,A.bindKey=vg,A.castArray=rI,A.chain=_g,A.chunk=_E,A.compact=fE,A.concat=gE,A.cond=PO,A.conforms=HO,A.constant=Zc,A.countBy=OC,A.create=GI,A.curry=mg,A.curryRight=Eg,A.debounce=Cg,A.defaults=MI,A.defaultsDeep=UI,A.defer=jC,A.delay=KC,A.difference=hE,A.differenceBy=pE,A.differenceWith=vE,A.drop=mE,A.dropRight=EE,A.dropRightWhile=CE,A.dropWhile=IE,A.fill=OE,A.filter=wC,A.flatMap=AC,A.flatMapDeep=SC,A.flatMapDepth=NC,A.flatten=lg,A.flattenDeep=bE,A.flattenDepth=wE,A.flip=VC,A.flow=WO,A.flowRight=zO,A.fromPairs=yE,A.functions=zI,A.functionsIn=YI,A.groupBy=xC,A.initial=AE,A.intersection=SE,A.intersectionBy=NE,A.intersectionWith=xE,A.invert=KI,A.invertBy=VI,A.invokeMap=TC,A.iteratee=Qc,A.keyBy=DC,A.keys=qt,A.keysIn=bn,A.map=xa,A.mapKeys=qI,A.mapValues=ZI,A.matches=YO,A.matchesProperty=jO,A.memoize=Ta,A.merge=QI,A.mergeWith=xg,A.method=KO,A.methodOf=VO,A.mixin=Jc,A.negate=Da,A.nthArg=qO,A.omit=JI,A.omitBy=eO,A.once=XC,A.orderBy=kC,A.over=ZO,A.overArgs=qC,A.overEvery=QO,A.overSome=JO,A.partial=Yc,A.partialRight=Ig,A.partition=GC,A.pick=tO,A.pickBy=Rg,A.property=$g,A.propertyOf=eb,A.pull=kE,A.pullAll=ug,A.pullAllBy=GE,A.pullAllWith=ME,A.pullAt=UE,A.range=tb,A.rangeRight=nb,A.rearg=ZC,A.reject=$C,A.remove=$E,A.rest=QC,A.reverse=Bc,A.sampleSize=PC,A.set=rO,A.setWith=iO,A.shuffle=HC,A.slice=FE,A.sortBy=zC,A.sortedUniq=jE,A.sortedUniqBy=KE,A.split=AO,A.spread=JC,A.tail=VE,A.take=XE,A.takeRight=qE,A.takeRightWhile=ZE,A.takeWhile=QE,A.tap=fC,A.throttle=eI,A.thru=Na,A.toArray=Lg,A.toPairs=Tg,A.toPairsIn=Dg,A.toPath=ab,A.toPlainObject=Sg,A.transform=oO,A.unary=tI,A.union=JE,A.unionBy=eC,A.unionWith=tC,A.uniq=nC,A.uniqBy=rC,A.uniqWith=iC,A.unset=sO,A.unzip=Wc,A.unzipWith=dg,A.update=aO,A.updateWith=lO,A.values=lo,A.valuesIn=cO,A.without=oC,A.words=Mg,A.wrap=nI,A.xor=sC,A.xorBy=aC,A.xorWith=lC,A.zip=cC,A.zipObject=uC,A.zipObjectDeep=dC,A.zipWith=_C,A.entries=Tg,A.entriesIn=Dg,A.extend=Ng,A.extendWith=Ma,Jc(A,A),A.add=cb,A.attempt=Ug,A.camelCase=fO,A.capitalize=kg,A.ceil=ub,A.clamp=uO,A.clone=iI,A.cloneDeep=sI,A.cloneDeepWith=aI,A.cloneWith=oI,A.conformsTo=lI,A.deburr=Gg,A.defaultTo=BO,A.divide=db,A.endsWith=gO,A.eq=ir,A.escape=hO,A.escapeRegExp=pO,A.every=bC,A.find=yC,A.findIndex=sg,A.findKey=$I,A.findLast=LC,A.findLastIndex=ag,A.findLastKey=FI,A.floor=_b,A.forEach=fg,A.forEachRight=gg,A.forIn=PI,A.forInRight=HI,A.forOwn=BI,A.forOwnRight=WI,A.get=Vc,A.gt=cI,A.gte=uI,A.has=jI,A.hasIn=Xc,A.head=cg,A.identity=wn,A.includes=RC,A.indexOf=LE,A.inRange=dO,A.invoke=XI,A.isArguments=Li,A.isArray=Qe,A.isArrayBuffer=dI,A.isArrayLike=On,A.isArrayLikeObject=Ht,A.isBoolean=_I,A.isBuffer=ii,A.isDate=fI,A.isElement=gI,A.isEmpty=hI,A.isEqual=pI,A.isEqualWith=vI,A.isError=jc,A.isFinite=mI,A.isFunction=Rr,A.isInteger=Og,A.isLength=ka,A.isMap=bg,A.isMatch=EI,A.isMatchWith=CI,A.isNaN=II,A.isNative=OI,A.isNil=wI,A.isNull=bI,A.isNumber=wg,A.isObject=Ut,A.isObjectLike=Ft,A.isPlainObject=as,A.isRegExp=Kc,A.isSafeInteger=yI,A.isSet=yg,A.isString=Ga,A.isSymbol=Dn,A.isTypedArray=ao,A.isUndefined=LI,A.isWeakMap=AI,A.isWeakSet=SI,A.join=RE,A.kebabCase=vO,A.last=jn,A.lastIndexOf=TE,A.lowerCase=mO,A.lowerFirst=EO,A.lt=NI,A.lte=xI,A.max=fb,A.maxBy=gb,A.mean=hb,A.meanBy=pb,A.min=vb,A.minBy=mb,A.stubArray=tu,A.stubFalse=nu,A.stubObject=rb,A.stubString=ib,A.stubTrue=ob,A.multiply=Eb,A.nth=DE,A.noConflict=XO,A.noop=eu,A.now=Ra,A.pad=CO,A.padEnd=IO,A.padStart=OO,A.parseInt=bO,A.random=_O,A.reduce=MC,A.reduceRight=UC,A.repeat=wO,A.replace=yO,A.result=nO,A.round=Cb,A.runInContext=X,A.sample=FC,A.size=BC,A.snakeCase=LO,A.some=WC,A.sortedIndex=PE,A.sortedIndexBy=HE,A.sortedIndexOf=BE,A.sortedLastIndex=WE,A.sortedLastIndexBy=zE,A.sortedLastIndexOf=YE,A.startCase=SO,A.startsWith=NO,A.subtract=Ib,A.sum=Ob,A.sumBy=bb,A.template=xO,A.times=sb,A.toFinite=Tr,A.toInteger=nt,A.toLength=Ag,A.toLower=RO,A.toNumber=Kn,A.toSafeInteger=RI,A.toString=vt,A.toUpper=TO,A.trim=DO,A.trimEnd=kO,A.trimStart=GO,A.truncate=MO,A.unescape=UO,A.uniqueId=lb,A.upperCase=$O,A.upperFirst=qc,A.each=fg,A.eachRight=gg,A.first=cg,Jc(A,function(){var s={};return _r(A,function(l,p){Et.call(A.prototype,p)||(s[p]=l)}),s}(),{chain:!1}),A.VERSION=r,Hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){A[s].placeholder=A}),Hn(["drop","take"],function(s,l){ct.prototype[s]=function(p){p=p===n?1:Kt(nt(p),0);var C=this.__filtered__&&!l?new ct(this):this.clone();return C.__filtered__?C.__takeCount__=ln(p,C.__takeCount__):C.__views__.push({size:ln(p,tt),type:s+(C.__dir__<0?"Right":"")}),C},ct.prototype[s+"Right"]=function(p){return this.reverse()[s](p).reverse()}}),Hn(["filter","map","takeWhile"],function(s,l){var p=l+1,C=p==oe||p==Ne;ct.prototype[s]=function(w){var T=this.clone();return T.__iteratees__.push({iteratee:He(w,3),type:p}),T.__filtered__=T.__filtered__||C,T}}),Hn(["head","last"],function(s,l){var p="take"+(l?"Right":"");ct.prototype[s]=function(){return this[p](1).value()[0]}}),Hn(["initial","tail"],function(s,l){var p="drop"+(l?"":"Right");ct.prototype[s]=function(){return this.__filtered__?new ct(this):this[p](1)}}),ct.prototype.compact=function(){return this.filter(wn)},ct.prototype.find=function(s){return this.filter(s).head()},ct.prototype.findLast=function(s){return this.reverse().find(s)},ct.prototype.invokeMap=it(function(s,l){return typeof s=="function"?new ct(this):this.map(function(p){return ts(p,s,l)})}),ct.prototype.reject=function(s){return this.filter(Da(He(s)))},ct.prototype.slice=function(s,l){s=nt(s);var p=this;return p.__filtered__&&(s>0||l<0)?new ct(p):(s<0?p=p.takeRight(-s):s&&(p=p.drop(s)),l!==n&&(l=nt(l),p=l<0?p.dropRight(-l):p.take(l-s)),p)},ct.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},ct.prototype.toArray=function(){return this.take(tt)},_r(ct.prototype,function(s,l){var p=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),w=A[C?"take"+(l=="last"?"Right":""):l],T=C||/^find/.test(l);w&&(A.prototype[l]=function(){var $=this.__wrapped__,z=C?[1]:arguments,q=$ instanceof ct,_e=z[0],fe=q||Qe($),ge=function(at){var dt=w.apply(A,Zr([at],z));return C&&Ae?dt[0]:dt};fe&&p&&typeof _e=="function"&&_e.length!=1&&(q=fe=!1);var Ae=this.__chain__,Ge=!!this.__actions__.length,Be=T&&!Ae,rt=q&&!Ge;if(!T&&fe){$=rt?$:new ct(this);var We=s.apply($,z);return We.__actions__.push({func:Na,args:[ge],thisArg:n}),new Wn(We,Ae)}return Be&&rt?s.apply(this,z):(We=this.thru(ge),Be?C?We.value()[0]:We.value():We)})}),Hn(["pop","push","shift","sort","splice","unshift"],function(s){var l=ta[s],p=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);A.prototype[s]=function(){var w=arguments;if(C&&!this.__chain__){var T=this.value();return l.apply(Qe(T)?T:[],w)}return this[p](function($){return l.apply(Qe($)?$:[],w)})}}),_r(ct.prototype,function(s,l){var p=A[l];if(p){var C=p.name+"";Et.call(no,C)||(no[C]=[]),no[C].push({name:l,func:p})}}),no[Oa(n,b).name]=[{name:"wrapper",func:n}],ct.prototype.clone=U1,ct.prototype.reverse=$1,ct.prototype.value=F1,A.prototype.at=gC,A.prototype.chain=hC,A.prototype.commit=pC,A.prototype.next=vC,A.prototype.plant=EC,A.prototype.reverse=CC,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=IC,A.prototype.first=A.prototype.head,Vo&&(A.prototype[Vo]=mC),A},Ji=p1();mi?((mi.exports=Ji)._=Ji,Ql._=Ji):rn._=Ji}).call(qx)}(fs,fs.exports)),fs.exports}var Lt=Zx();function Mr(t){return Array.isArray?Array.isArray(t):Rp(t)==="[object Array]"}function Qx(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Jx(t){return t==null?"":Qx(t)}function mr(t){return typeof t=="string"}function Np(t){return typeof t=="number"}function eR(t){return t===!0||t===!1||tR(t)&&Rp(t)=="[object Boolean]"}function xp(t){return typeof t=="object"}function tR(t){return xp(t)&&t!==null}function Un(t){return t!=null}function lu(t){return!t.trim().length}function Rp(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const nR="Incorrect 'index' type",rR=t=>`Invalid value for key ${t}`,iR=t=>`Pattern length exceeds max of ${t}.`,oR=t=>`Missing ${t} property in key`,sR=t=>`Property 'weight' in key '${t}' must be a positive integer`,Zg=Object.prototype.hasOwnProperty;class aR{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Tp(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Tp(t){let e=null,n=null,r=null,i=1,o=null;if(mr(t)||Mr(t))r=t,e=Qg(t),n=xu(t);else{if(!Zg.call(t,"name"))throw new Error(oR("name"));const a=t.name;if(r=a,Zg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(sR(a));e=Qg(a),n=xu(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Qg(t){return Mr(t)?t:t.split(".")}function xu(t){return Mr(t)?t.join("."):t}function lR(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Un(o))if(!a[c])n.push(o);else{let u=a[c];const _=o[u];if(!Un(_))return;if(c===a.length-1&&(mr(_)||Np(_)||eR(_)))n.push(Jx(_));else if(Mr(_)){r=!0;for(let h=0,g=_.length;h<g;h+=1)i(_[h],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,mr(e)?e.split("."):e,0),r?n:n[0]}const cR={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},uR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},dR={location:0,threshold:.6,distance:100},_R={useExtendedSearch:!1,getFn:lR,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ve={...uR,...cR,...dR,..._R};const fR=/[^ ]+/g;function gR(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(fR).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class Dd{constructor({getFn:e=Ve.getFn,fieldNormWeight:n=Ve.fieldNormWeight}={}){this.norm=gR(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,mr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();mr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Un(e)||lu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Un(a)){if(Mr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:h}=u.pop();if(Un(h))if(mr(h)&&!lu(h)){let g={v:h,i:_,n:this.norm.get(h)};c.push(g)}else Mr(h)&&h.forEach((g,v)=>{u.push({nestedArrIndex:v,value:g})})}r.$[o]=c}else if(mr(a)&&!lu(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Dp(t,e,{getFn:n=Ve.getFn,fieldNormWeight:r=Ve.fieldNormWeight}={}){const i=new Dd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Tp)),i.setSources(e),i.create(),i}function hR(t,{getFn:e=Ve.getFn,fieldNormWeight:n=Ve.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Dd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Fa(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ve.distance,ignoreLocation:o=Ve.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function pR(t=[],e=Ve.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Si=32;function vR(t,e,n,{location:r=Ve.location,distance:i=Ve.distance,threshold:o=Ve.threshold,findAllMatches:a=Ve.findAllMatches,minMatchCharLength:c=Ve.minMatchCharLength,includeMatches:u=Ve.includeMatches,ignoreLocation:_=Ve.ignoreLocation}={}){if(e.length>Si)throw new Error(iR(Si));const h=e.length,g=t.length,v=Math.max(0,Math.min(r,g));let m=o,E=v;const I=c>1||u,O=I?Array(g):[];let b;for(;(b=t.indexOf(e,E))>-1;){let H=Fa(e,{currentLocation:b,expectedLocation:v,distance:i,ignoreLocation:_});if(m=Math.min(H,m),E=b+h,I){let j=0;for(;j<h;)O[b+j]=1,j+=1}}E=-1;let S=[],k=1,G=h+g;const F=1<<h-1;for(let H=0;H<h;H+=1){let j=0,J=G;for(;j<J;)Fa(e,{errors:H,currentLocation:v+J,expectedLocation:v,distance:i,ignoreLocation:_})<=m?j=J:G=J,J=Math.floor((G-j)/2+j);G=J;let le=Math.max(1,v-J+1),Z=a?g:Math.min(v+J,g)+h,ie=Array(Z+2);ie[Z+1]=(1<<H)-1;for(let oe=Z;oe>=le;oe-=1){let Ee=oe-1,Ne=n[t.charAt(Ee)];if(I&&(O[Ee]=+!!Ne),ie[oe]=(ie[oe+1]<<1|1)&Ne,H&&(ie[oe]|=(S[oe+1]|S[oe])<<1|1|S[oe+1]),ie[oe]&F&&(k=Fa(e,{errors:H,currentLocation:Ee,expectedLocation:v,distance:i,ignoreLocation:_}),k<=m)){if(m=k,E=Ee,E<=v)break;le=Math.max(1,2*v-E)}}if(Fa(e,{errors:H+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:_})>m)break;S=ie}const Y={isMatch:E>=0,score:Math.max(.001,k)};if(I){const H=pR(O,c);H.length?u&&(Y.indices=H):Y.isMatch=!1}return Y}function mR(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class kp{constructor(e,{location:n=Ve.location,threshold:r=Ve.threshold,distance:i=Ve.distance,includeMatches:o=Ve.includeMatches,findAllMatches:a=Ve.findAllMatches,minMatchCharLength:c=Ve.minMatchCharLength,isCaseSensitive:u=Ve.isCaseSensitive,ignoreLocation:_=Ve.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(v,m)=>{this.chunks.push({pattern:v,alphabet:mR(v),startIndex:m})},g=this.pattern.length;if(g>Si){let v=0;const m=g%Si,E=g-m;for(;v<E;)h(this.pattern.substr(v,Si),v),v+=Si;if(m){const I=g-Si;h(this.pattern.substr(I),I)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let h=[],g=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:O})=>{const{isMatch:b,score:S,indices:k}=vR(e,E,I,{location:i+O,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});b&&(v=!0),g+=S,b&&k&&(h=[...h,...k])});let m={isMatch:v,score:v?g/this.chunks.length:1};return v&&r&&(m.indices=h),m}}class gi{constructor(e){this.pattern=e}static isMultiMatch(e){return Jg(e,this.multiRegex)}static isSingleMatch(e){return Jg(e,this.singleRegex)}search(){}}function Jg(t,e){const n=t.match(e);return n?n[1]:null}class ER extends gi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class CR extends gi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class IR extends gi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class OR extends gi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class bR extends gi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class wR extends gi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Gp extends gi{constructor(e,{location:n=Ve.location,threshold:r=Ve.threshold,distance:i=Ve.distance,includeMatches:o=Ve.includeMatches,findAllMatches:a=Ve.findAllMatches,minMatchCharLength:c=Ve.minMatchCharLength,isCaseSensitive:u=Ve.isCaseSensitive,ignoreLocation:_=Ve.ignoreLocation}={}){super(e),this._bitapSearch=new kp(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Mp extends gi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Ru=[ER,Mp,IR,OR,wR,bR,CR,Gp],eh=Ru.length,yR=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,LR="|";function AR(t,e={}){return t.split(LR).map(n=>{let r=n.trim().split(yR).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,_=-1;for(;!u&&++_<eh;){const h=Ru[_];let g=h.isMultiMatch(c);g&&(i.push(new h(g,e)),u=!0)}if(!u)for(_=-1;++_<eh;){const h=Ru[_];let g=h.isSingleMatch(c);if(g){i.push(new h(g,e));break}}}return i})}const SR=new Set([Gp.type,Mp.type]);class NR{constructor(e,{isCaseSensitive:n=Ve.isCaseSensitive,includeMatches:r=Ve.includeMatches,minMatchCharLength:i=Ve.minMatchCharLength,ignoreLocation:o=Ve.ignoreLocation,findAllMatches:a=Ve.findAllMatches,location:c=Ve.location,threshold:u=Ve.threshold,distance:_=Ve.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=AR(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const h=n[u];a.length=0,o=0;for(let g=0,v=h.length;g<v;g+=1){const m=h[g],{isMatch:E,indices:I,score:O}=m.search(e);if(E){if(o+=1,c+=O,r){const b=m.constructor.type;SR.has(b)?a=[...a,...I]:a.push(I)}}else{c=0,o=0,a.length=0;break}}if(o){let g={isMatch:!0,score:c/o};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const Tu=[];function xR(...t){Tu.push(...t)}function Du(t,e){for(let n=0,r=Tu.length;n<r;n+=1){let i=Tu[n];if(i.condition(t,e))return new i(t,e)}return new kp(t,e)}const Za={AND:"$and",OR:"$or"},ku={PATH:"$path",PATTERN:"$val"},Gu=t=>!!(t[Za.AND]||t[Za.OR]),RR=t=>!!t[ku.PATH],TR=t=>!Mr(t)&&xp(t)&&!Gu(t),th=t=>({[Za.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Up(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=RR(i);if(!a&&o.length>1&&!Gu(i))return r(th(i));if(TR(i)){const u=a?i[ku.PATH]:o[0],_=a?i[ku.PATTERN]:i[u];if(!mr(_))throw new Error(rR(u));const h={keyId:xu(u),pattern:_};return n&&(h.searcher=Du(_,e)),h}let c={children:[],operator:o[0]};return o.forEach(u=>{const _=i[u];Mr(_)&&_.forEach(h=>{c.children.push(r(h))})}),c};return Gu(t)||(t=th(t)),r(t)}function DR(t,{ignoreFieldNorm:e=Ve.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function kR(t,e){const n=t.matches;e.matches=[],Un(n)&&n.forEach(r=>{if(!Un(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function GR(t,e){e.score=t.score}function MR(t,e,{includeMatches:n=Ve.includeMatches,includeScore:r=Ve.includeScore}={}){const i=[];return n&&i.push(kR),r&&i.push(GR),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class Do{constructor(e,n={},r){this.options={...Ve,...n},this.options.useExtendedSearch,this._keyStore=new aR(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Dd))throw new Error(nR);this._myIndex=n||Dp(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Un(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=mr(e)?mr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return DR(u,{ignoreFieldNorm:c}),o&&u.sort(a),Np(n)&&n>-1&&(u=u.slice(0,n)),MR(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Du(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Un(o))return;const{isMatch:u,score:_,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:_,value:o,norm:c,indices:h}]})}),i}_searchLogical(e){const n=Up(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:v});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const h=[];for(let g=0,v=c.children.length;g<v;g+=1){const m=c.children[g],E=r(m,u,_);if(E.length)h.push(...E);else if(c.operator===Za.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Un(c)){let _=r(n,c,u);_.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),_.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=Du(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Un(a))return;let u=[];r.forEach((_,h)=>{u.push(...this._findMatches({key:_,value:a[h],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Un(n))return[];let i=[];if(Mr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Un(o))return;const{isMatch:u,score:_,indices:h}=r.searchIn(o);u&&i.push({score:_,key:e,value:o,idx:a,norm:c,indices:h})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:_})}return i}}Do.version="7.0.0";Do.createIndex=Dp;Do.parseIndex=hR;Do.config=Ve;Do.parseQuery=Up;xR(NR);function ki(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function UR(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function $R(t){return new Do(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function FR(t,e,n){const r=UR(e,n);return t.length===0?r:$R(r).search(t).map(i=>i.item)}function PR(t,e){return ki(t,e).shape}function dn(t,e){const n=PR(t,e);return n?Au(n):void 0}function Ds(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Td(e)}function HR(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function ks(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Td(i)})}function BR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Td(o)})})}function Pr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function $p(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Lp(e)}function WR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Lp(r)})}function zR(t,e){const n=t.shape;return n===void 0?void 0:{...dn(e,$t),...n}}function Fp(t,e,n){return{toolId:t,cells:e,value:n}}function YR(t,e){const n=ks(e,"cells"),r=Pr(e);return Fp(t,n,r)}function Pp(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>je(o,e)&&a>=r)}function jR(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Rs(r[i-1],e)))return t;const a=Pp(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function Hp(t,e){return{toolId:t,cells:e,lines:[]}}function KR(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Va(n),{...t,cells:n};const r=n.some(o=>je(o,e)),i=n.some(o=>Rs(o,e));return n.length>0&&!r&&i?(n.push(e),Va(n),{...t,cells:n}):t}function VR(t,e,n){const r=t.cells.some(_=>je(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return Mu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return Mu(t,e);const c=Pp(o,e,!1);return(o.length===0?!0:Rs(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function Mu(t,e){return t.cells.some(r=>je(r,e))?{...t,lines:[...t.lines,[e]]}:t}function XR(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function qR(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function ZR(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function QR(t,e){const n=ks(e,"cells"),r=BR(e),i=Hp(t,n);return i.lines=r,i}function Bp(t,e,n=""){return{toolId:t,cells:e,value:n}}function JR(t,e,n=!1){const r=Sp(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function eT(t,e){return{...t,value:e}}function tT(t,e){const n=ks(e,"cells"),r=Pr(e);return Bp(t,n,r)}function Uu(t,e,n){return{toolId:t,cells:e,value:n}}function nT(t,e){const n=ks(e,"cells"),r=Pr(e);return Uu(t,n,r)}function $u(t,e,n){return{toolId:t,cells:e,value:n}}function rT(t,e){const n=ks(e,"cells"),r=Pr(e);return $u(t,n,r)}function Fu(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function iT(t,e){const n=Ds(e),r=$p(e),i=Pr(e);return Fu(t,n,r,i)}function Pu(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function oT(t,e){const n=Ds(e),r=Pr(e);return Pu(t,n,r)}function Hu(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function sT(t,e){const n=Ds(e),r=$p(e);return Hu(t,n,r)}function Bu(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function aT(t,e){const n=Ds(e),r=WR(e),i=Bu(t,n,Fe.N);return i.directions=r,i}function Wp(t,e,n=""){return{toolId:t,cell:e,value:n}}function lT(t,e){const n=Ds(e),r=Pr(e);return Wp(t,n,r)}function cT(t,e=""){return{toolId:t,value:e}}function uT(t,e){const n=Pr(e);return cT(t,n)}function dT(t,e,n=""){return{toolId:t,coords:e,value:n}}function _T(t,e){const n=HR(e,"coords"),r=Pr(e);return dT(t,n,r)}function Gs(t,e){return{...t,value:e}}class ko extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(IT(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new ko;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=fp(r);if(o===void 0||!Object.keys($t).includes(o))continue;const a=i;for(const c of a){let u=null;if(gp(o,_l)?u=oT(o,c):fl(o)?u=sT(o,c):gl(o)?u=aT(o,c):hl(o)?u=rT(o,c):Id(o)?u=nT(o,c):Od(o)?u=YR(o,c):dp(o)?u=_T(o,c):bd(o)?u=QR(o,c):wd(o)?u=tT(o,c):go(o)?u=iT(o,c):uw(o)?u=uT(o,c):up(o)&&(u=lT(o,c)),u!==null){n.addToDict(o);const _=Lt.uniqueId(),h=zR(c,o);u.shape=h,n.addConstraint(o,_,u)}}}return n}}function Qa(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(je(o.cell,n))return[a,o]}return null}function fT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>je(c,u))))return i}return null}function gT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(je(n,a))return i}return null}function nh(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>je(c,n)))return[i[0],o]}return null}function hT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>je(c,n)))return i;return null}function rh(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>je(c,n)))return[i[0],o]}return null}function pT(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((_,h)=>je(_,n)&&h>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function vT(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(je(n,a.cell)&&r===a.direction)return c}return null}function mT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(je(n,o.cell))return a}return null}function ET(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>je(c,n))||o.cells2.some(c=>je(c,n)))return[i[0],o]}return null}function CT(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function IT(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ua(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ua(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Ua(i)));e.lines=n}if("cell"in t){const n=Ua(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=dn(t.toolId,$t),r=hw(t.shape,n);r&&(e.shape=r)}return e}function ih(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function zp(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Wu(t){const e=new Option().style;return e.color=t,e.color!==""}function cu(t){return zp(t)||Wu(t)?t:Wu(`#${t}`)?`#${t}`:void 0}function Ja(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Yp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function el(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function OT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const oh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function bT(t){return t in oh?oh[t]:null}function jp(t,e,n){if(n===null)return null;const r=bT(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function uu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class wT{constructor(e,n){Ce(this,"r");Ce(this,"c");Ce(this,"outside",!1);Ce(this,"value",null);Ce(this,"given",!1);Ce(this,"region",null);Ce(this,"centerMarks",[]);Ce(this,"cornerMarks",[]);Ce(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=uu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=uu(this.cornerMarks,e))}enterHighlight(e){this.highlights=uu(this.highlights,e)}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==jp(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Go{constructor(e,n){Ce(this,"nCols");Ce(this,"nRows");Ce(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new wT(i,a);if(r){const u=jp(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Yp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=Ts(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Go(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function yT(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=Lt.range(1,o+1);t.valid_digits&&!OT(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function LT(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=Go.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=Lt.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,h=t.local_constraints,g=ko.fromJson(h),v=t.bool_constraints,m=Di.fromJson(v);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function g7(){const t=new Go(9,9),e=new ko,n=new Di;return{grid:t,solution:void 0,valid_digits:Lt.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var gs=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(gs||{});const AT=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),ST=()=>({type:"CLEAR"}),NT=t=>({type:"DRAG",payload:t}),zu=t=>({type:"SET",payload:t}),xT=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),kd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),vr=(t,e,n)=>{const r=[...t];return Va(r),{cells:r,lastCell:e,mode:n}};function RT(t,e,n){if(e===null)return kd();if(n==="RESETTING")return vr([e],e,"SELECTING");const r=t.cells.findIndex(i=>je(e,i));if(n==="SELECTING")return r!==-1?t:vr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),vr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return vr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),vr(i,null,"DESELECTING")}return t}function TT(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>je(e,r));if(t.mode==="SELECTING")return n!==-1?t:vr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),vr(r,null,t.mode)}return t}function DT(t,e){return{...t,cells:e}}function kT(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>je(e,i))!==-1?vr([...t.cells],e,"SELECTING"):vr([...t.cells,e],e,"SELECTING"):vr([e],e,t.mode)}function Kp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return kd();case"SET":return DT(t,e.payload);case"CLICK":return RT(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return TT(t,e.payload);case"ARROW_KEY":return kT(t,e.payload.cell,e.payload.selectionMode);default:return t}}function fo(t,e){return je(t.p1,e.p1)&&je(t.p2,e.p2)||je(t.p1,e.p2)&&je(t.p2,e.p1)}function GT(t,e){return je(t.p1,e.p2)&&je(t.p2,e.p1)}function Vp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!je(t,e)}class Ol{constructor(){Ce(this,"edgeMarkers",[]);Ce(this,"cellMarkers",[]);Ce(this,"lineMarkers",[]);Ce(this,"draftLine",[]);Ce(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>je(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>je(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>je(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>je(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>je(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>je(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>je(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>je(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>je(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>je(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>fo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>fo(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&GT(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Vp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>fo(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>fo(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Ol;return Object.assign(e,this),e}}const sh=t=>({type:"ADD_EDGE_MARKER",payload:t}),ah=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Pa=t=>({type:"ADD_CELL_MARKER",payload:t}),MT=t=>({type:"SET_CELL_MARKERS",payload:t}),lh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),UT=t=>({type:"DRAG",payload:t}),Os=t=>({type:"ADD_LINE_MARKERS",payload:t}),ch=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),Gd=()=>({type:"RESET"});function $T(t,e){switch(e.type){case"RESET":return new Ol;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Xp(){return{_undoStack:[],_redoStack:[]}}const Mo=Rt(Xp());function FT(){Mo.update(()=>Xp())}function vn(t,e=!0){Mo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function PT(t,e=!0){Mo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function qp(){Mo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Zp(){Mo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const tl=Rt(new Ol);function Cr(t){tl.update(e=>$T(e,t))}const nl=Rt(1);function Ai(t,e){return{execute:()=>{Cr(t)},unExecute:()=>{Cr(e)}}}const Gi=Rt(kd());function uo(t){t&&Gi.update(e=>Kp(e,t))}function uh(t){t&&Gi.update(e=>Kp(e,t))}function HT(t,e){return{execute:()=>{uh(t)},unExecute:()=>{uh(e)}}}const vo=Rt(null),bl=Rt(Io.SETTING),Yu=Rt(!1),Zt=Rt(d.DIGIT),Qp=Rt(d.DIGIT),Md=Rt(Lt.range(1,10)),mn=Rt(new Go(9,9)),Xn=Rt(st(mn).getAllCells()),Hr=Rt({}),Br=Rt(new Di),mt=Rt(new ko),zt=Rt(null),Ms=Rt(void 0),wl=Rt(void 0);function BT(t){Hr.update(()=>t)}function Uo(t){zt.update(()=>t)}function Ud(t){Ms.update(()=>t)}function Gr(t){st(Zt)!==t&&(Zt.update(()=>t),Uo(null))}function WT(){const t=st(Qp);t&&Gr(t)}function ju(t){Qp.update(()=>t)}function zT(t){st(Zt)===t&&Gr(d.DIGIT)}function YT(t){mt.update(e=>(e.removeFromDict(t),e)),Ud(void 0)}function Vt(t,e,n){mt.update(r=>(r.updateConstraint(t,e,n),r)),Uo({id:e,constraint:n})}function du(t){const e=st(zt);if(t=t?{...t}:void 0,Ud(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Vt(r,e.id,n)}function jT(t,e){const r=st(mt).get(e);if(!r)return;const i=r[t];i&&Uo({id:t,constraint:i})}function KT(t,e,n){const r=new Go(t,e);mn.update(()=>r),Md.update(()=>n),mt.update(()=>new ko),Br.update(()=>new Di),Hr.update(()=>({})),$d(void 0),Xn.update(()=>r.getAllCells())}function VT(t){mn.update(()=>t.grid),Hr.update(()=>t.puzzleMeta),$d(t.solution),Md.update(()=>t.valid_digits),mt.update(()=>t.localConstraints),Br.update(()=>t.globalConstraints),Xn.update(()=>t.grid.getAllCells())}function Jp(){const t=st(mn);t.resetValues(),mn.update(()=>t),Xn.update(()=>t.getAllCells()),Cr(Gd())}function rl(){FT(),Cr(Gd()),Gr(d.DIGIT);const t=ST();uo(t),Ud(void 0),Uo(null)}const ev=$i([di,Zt,bl],([t,e,n])=>{const r=t.hideFog;return e===d.FOG_LIGHTS&&!r&&n===Io.SETTING}),Us=$i([mn,Hr,Br,mt,wl,Md],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function $d(t){wl.update(()=>t)}var _o=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(_o||{});const Fd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Pd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),XT=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),qT=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),dh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function tv(t){mt.update(e=>(e.addToDict(t),e))}function hi(t,e){const n=st(Ms);n&&(e.shape={...n}),mt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Uo({id:t,constraint:e})}function Mi(t,e){e&&mt.update(n=>(n.removeConstraint(t,e),n))}function ZT(t,e){mt.update(n=>(n.setConstraints(t,e),n))}function _h(t){t.type===_o.ADD_LOCAL_CONSTRAINT?hi(t.payload.id,t.payload.constraint):t.type===_o.REMOVE_LOCAL_CONSTRAINT?Mi(t.payload.tool,t.payload.id):t.type===_o.REMOVE_LOCAL_CONSTRAINT_GROUP?YT(t.payload.tool):t.type===_o.RESTORE_LOCAL_CONSTRAINT_GROUP?ZT(t.payload.tool,t.payload.constraints):t.type===_o.UPDATE_LOCAL_CONSTRAINT&&Vt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function $s(t,e){return{execute:()=>{_h(t)},unExecute:()=>{_h(e)}}}var QT=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function nv(t){var e=QT();N(t,e)}var JT=ce('<button class="remove-button svelte-17rdl63"><!></button>');function e2(t,e){let n=U(e,"onTrash",8,()=>{});var r=JT(),i=V(r);nv(i),W(r),Me("click",r,Zn(function(...o){var a;(a=n())==null||a.apply(this,o)})),N(t,r)}var t2=ce('<input type="radio" class="radio-select-button svelte-3561wl">'),n2=ce('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function il(t,e){var J,le;ue(e,!1);const n=Ye(),r=()=>he(Zt,"$toolStore",n),i=[];let o=U(e,"elementInfo",8),a=U(e,"onClick",12,void 0),c=U(e,"onTrash",8,void 0);const u=o().toolId,_=o().permanent??!1,h=((J=o().menu)==null?void 0:J.name)??o().toolId,g=!((le=o().meta)!=null&&le.categories.includes(x.GLOBAL_CONSTRAINT)),v=`label-${h}`;g&&a(()=>{Gr(u)});function m(){var oe,Ee;const Z=(oe=o().meta)==null?void 0:oe.description,ie=((Ee=o().meta)==null?void 0:Ee.usage)??ww(u);let me;return Z&&Z.length&&(me=Z),ie.length&&(me?me=me+`

`+ie:me=ie),me}pe();var E=n2(),I=V(E);{var O=Z=>{var ie=t2();an(ie),L(ie,"id",v),ie.value=(ie.__value=u)==null?"":u,dl(i,[],ie,()=>r(),me=>ws(Zt,me)),N(Z,ie)};re(I,Z=>{g&&Z(O)})}var b=M(I,2);te(()=>L(b,"title",m())),L(b,"aria-labelledby",v);var S=V(b),k=V(S),G=V(k);{var F=Z=>{e2(Z,{get onTrash(){return c()}})};re(G,Z=>{_||Z(F)})}W(k);var Y=M(k,2);L(Y,"for",v),Y.textContent=h,W(S);var H=M(S,2),j=V(H);gt(j,e,"default",{}),W(H),W(b),W(E),te(()=>wt(E,"checked",u===r())),Me("click",b,Zn(function(...Z){var ie;(ie=a())==null||ie.apply(this,Z)})),N(t,E),de()}function rv(t,e){ue(e,!1);const n=Ye(),r=()=>he(mt,"$localConstraintsStore",n);let i=U(e,"toolId",8),o=U(e,"elementHandlers",8);const a=()=>{zT(i());const u=r().get(i());if(!u)return;const _=XT(i()),h=qT(i(),u),g=$s(_,h);vn(g)};pe();var c=qe(()=>ki(i(),o()));il(t,{get elementInfo(){return f(c)},onTrash:a}),de()}var r2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function i2(t){var e=r2();N(t,e)}var o2=ce('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function yl(t,e){let n=U(e,"isOpen",8,!0);var r=o2(),i=V(r);gt(i,e,"default",{}),W(r),te(()=>{L(r,"aria-expanded",n()),wt(r,"closed",!n())}),N(t,r)}var s2=ce('<div class="constraint-button svelte-fgm6t3"><div class="left-side svelte-fgm6t3"> </div> <div class="right-side svelte-fgm6t3"><button class="remove-constraint-button svelte-fgm6t3"><!></button></div></div>');function a2(t,e){ue(e,!1);const n=Ye(),r=()=>he(vo,"$svgRefStore",n),i=()=>he(mt,"$localConstraintsStore",n),o=()=>he(zt,"$currentConstraintStore",n),a=R();let c=U(e,"constraintId",8),u=U(e,"toolId",8);function _(){jT(c(),u()),r()&&r().focus()}function h(){const b=i().getConstraint(u(),c());if(!b)return;const S=Pd(c(),u()),k=Fd(c(),b),G=$s(S,k);vn(G)}D(()=>o(),()=>{var b;y(a,(b=o())==null?void 0:b.id)}),be(),pe();var g=s2(),v=V(g),m=V(v);W(v);var E=M(v,2),I=V(E),O=V(I);nv(O),W(I),W(E),W(g),te(()=>{wt(g,"active",c()===f(a)),ot(m,`ID: ${c()??""}`)}),Me("click",I,Zn(h)),Me("click",g,_),N(t,g),de()}var l2=ce('<div class="constraint-list svelte-w5npcu"></div>');function iv(t,e){ue(e,!1);const n=Ye(),r=()=>he(mt,"$localConstraintsStore",n),i=()=>he(Zt,"$toolStore",n),o=R();let a=U(e,"toolId",8);D(()=>(r(),Q(a())),()=>{y(o,r().get(a()))}),be(),pe();var c=Se(),u=se(c);{var _=h=>{var g=qe(()=>a()===i());yl(h,{get isOpen(){return f(g)},children:(v,m)=>{var E=l2();lt(E,5,()=>Object.entries(f(o)),I=>I[0],(I,O)=>{a2(I,{get constraintId(){return f(O)[0]},get toolId(){return a()}})}),W(E),N(v,E)},$$slots:{default:!0}})};re(u,h=>{f(o)&&Object.entries(f(o)).length&&h(_)})}N(t,c),de()}var c2=ce('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function u2(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var i=c2(),o=V(i),a=V(o,!0);W(o);var c=M(o,2);W(i),te(()=>ot(a,n())),Me("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),N(t,i)}var d2=ce('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Wr(t,e){ue(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),i=R();function o(){n(!1),f(i).close()}D(()=>(f(i),Q(n())),()=>{f(i)&&n()&&f(i).showModal()}),D(()=>(f(i),Q(n())),()=>{f(i)&&!n()&&f(i).close()}),be();var a=d2(),c=V(a),u=V(c);u2(u,{get title(){return r()},closeCb:o});var _=M(u,2),h=V(_),g=V(h);gt(g,e,"default",{}),W(h),W(_),W(c),W(a),Ti(a,v=>y(i,v),()=>f(i)),Me("click",c,Zn(function(v){sw.call(this,e,v)})),Me("close",a,()=>{n(!1)}),Me("click",a,ow(Zn(()=>f(i).close()))),N(t,a),de()}var _2=ce('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function f2(t,e){ue(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),i=R(null);D(()=>(Q(r()),f(i)),()=>{r()&&f(i)&&f(i).focus()}),be();var o=_2(),a=M(V(o),2);an(a),L(a,"spellcheck",!1),Ti(a,c=>y(i,c),()=>f(i)),W(o),Vn(a,n),N(t,o),de()}var g2=ce('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function h2(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),i=U(e,"title",8);Wr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=g2(),u=V(c);f2(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var _=M(u,2),h=V(_),g=V(h);gt(g,e,"default",{}),W(h),W(_),W(c),N(o,c)},$$slots:{default:!0},$$legacy:!0})}var p2=ce('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),v2=ce('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function ai(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),i=U(e,"isCollapsible",8,!1);var o=Se(),a=se(o);{var c=_=>{var h=p2(),g=V(h),v=V(g),m=V(v,!0);W(v),W(g);var E=M(g,2),I=V(E);gt(I,e,"default",{}),W(E),W(h),te(()=>ot(m,n())),N(_,h)},u=_=>{var h=v2(),g=V(h),v=V(g),m=V(v,!0);W(v),W(g);var E=M(g,2),I=V(E);gt(I,e,"default",{});var O=M(I,2);W(E),W(h),te(()=>{ot(m,n()),wt(O,"open",r())}),Me("click",h,()=>r(!r())),N(_,h)};re(a,_=>{i()?_(u,!1):_(c)})}N(t,o)}var m2=ce('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),E2=ce('<ol class="svelte-cd45on"></ol>'),C2=ce("<!> <!>",1);function I2(t,e){ue(e,!1);const n=R();let r=U(e,"category",8),i=U(e,"addTool",8),o=U(e,"searchResults",8),a=R(!0);D(()=>(Q(o()),Q(r())),()=>{y(n,o().filter(h=>{var g,v;return(v=(g=h.info.meta)==null?void 0:g.categories)==null?void 0:v.includes(r())}))}),be(),pe();var c=Se(),u=se(c);{var _=h=>{var g=C2(),v=se(g);ai(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return f(a)},set isOpen(E){y(a,E)},$$legacy:!0});var m=M(v,2);yl(m,{get isOpen(){return f(a)},children:(E,I)=>{var O=E2();lt(O,5,()=>f(n),It,(b,S)=>{let k=()=>f(S).key,G=()=>f(S).info;var F=m2(),Y=V(F),H=V(Y,!0);W(Y),W(F),te(()=>{var j;L(Y,"title",(j=G().meta)==null?void 0:j.description),ot(H,k())}),Me("click",Y,()=>{i()(k())}),N(b,F)}),W(O),N(E,O)},$$slots:{default:!0}}),N(h,g)};re(u,h=>{f(n).length&&h(_)})}N(t,c),de()}function O2(t,e){ue(e,!1);const n=R();let r=U(e,"searchPattern",8,""),i=U(e,"addTool",8),o=U(e,"categories",8),a=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);D(()=>(Q(r()),Q(a()),Q(c())),()=>{y(n,FR(r(),a(),c()))}),be(),pe();var u=Se(),_=se(u);lt(_,1,o,It,(h,g)=>{I2(h,{get category(){return f(g)},get searchResults(){return f(n)},get addTool(){return i()}})}),N(t,u),de()}var b2=ce('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Ll(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var i=b2();L(i,"tabindex",0);var o=V(i),a=V(o);gt(a,e,"add-button",{}),W(o);var c=M(o,2),u=V(c),_=V(u);gt(_,e,"title-icon",{}),W(u);var h=M(u);W(c);var g=M(c,2),v=V(g);W(g),W(i),te(()=>{ot(h,` ${r()??""}`),wt(v,"open",n())}),Me("click",i,()=>n(!n())),Me("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),N(t,i)}var w2=ce('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function y2(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),i=U(e,"showModal",12);function o(){i(!i())}Ll(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=w2();Me("click",u,Zn(()=>o())),N(a,u)},"title-icon":(a,c)=>{var u=Se(),_=se(u);gt(_,e,"title-icon",{}),N(a,u)}},$$legacy:!0})}var L2=ce('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),A2=ce('<div class="panel-container svelte-hixu4"><!> <!></div>');function Al(t,e){let n=U(e,"isOpen",8,!0);var r=A2(),i=V(r);gt(i,e,"panel-header",{});var o=M(i,2);yl(o,{get isOpen(){return n()},children:(a,c)=>{var u=L2(),_=V(u);gt(_,e,"panel-content",{}),W(u),N(a,u)},$$slots:{default:!0}}),W(r),N(t,r)}var S2=ce("<!> <!>",1);function Hd(t,e){ue(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),i=U(e,"onAddTool",8),o=U(e,"elementHandlerFilterFunc",8),a=U(e,"elementHandlers",8),c=R(!0),u=R(!1),_=R("");const h=g=>{y(u,!1),y(c,!0),i()(g)};pe(),Al(t,{get isOpen(){return f(c)},set isOpen(g){y(c,g)},$$slots:{"panel-header":(g,v)=>{var m=S2(),E=se(m);y2(E,{get title(){return r()},get isOpen(){return f(c)},set isOpen(O){y(c,O)},get showModal(){return f(u)},set showModal(O){y(u,O)},$$slots:{"title-icon":(O,b)=>{var S=Se(),k=se(S);gt(k,e,"title-icon",{}),N(O,S)}},$$legacy:!0});var I=M(E,2);h2(I,{get title(){return r()},get showModal(){return f(u)},set showModal(O){y(u,O)},get searchPattern(){return f(_)},set searchPattern(O){y(_,O)},children:(O,b)=>{O2(O,{get searchPattern(){return f(_)},get categories(){return n()},get filterFunc(){return o()},addTool:h,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),N(g,m)},"panel-content":(g,v)=>{var m=Se(),E=se(m);gt(E,e,"panel-content",{}),N(g,m)}},$$legacy:!0}),de()}var N2=ce("<!> <!>",1);function x2(t,e){ue(e,!1);const n=Ye(),r=()=>he(mt,"$localConstraintsStore",n),i=R();let o=U(e,"elementHandlers",8);const a=[x.COSMETIC_TOOL],c=u=>{tv(u),Gr(u)};D(()=>(r(),x),()=>{y(i,(u,_)=>{var v;const h=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(x.COSMETIC_TOOL))&&!h})}),be(),pe(),Hd(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return f(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{i2(u)},"panel-content":(u,_)=>{var h=Se(),g=se(h);lt(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>f(m)[0];var I=Se(),O=se(I);{var b=S=>{var k=N2(),G=se(k);rv(G,{get toolId(){return E()},get elementHandlers(){return o()}});var F=M(G,2);iv(F,{get toolId(){return E()}}),N(S,k)};re(O,S=>{dw(E())&&S(b)})}N(v,I)}),N(u,h)}}}),de()}var ov=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(ov||{});const Wa=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),sv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function R2(t,e){Br.update(n=>n.setConstraint(t,e))}function T2(t){Br.update(e=>e.removeConstraint(t))}function fh(t){t.type===ov.REMOVE_GLOBAL_CONSTRAINT?T2(t.payload):R2(t.payload.tool,t.payload.value)}function Ku(t,e){return{execute:()=>{fh(t)},unExecute:()=>{fh(e)}}}var D2=ce('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function k2(t,e){let n=U(e,"value",8,!1);var r=D2(),i=V(r);an(i),W(r),te(()=>jh(i,n())),N(t,r)}function G2(t,e){ue(e,!1);let n=U(e,"toolId",8),r=U(e,"value",8,!1),i=U(e,"elementHandlers",8);const o=()=>{const u=Wa(n(),!r()),_=Wa(n(),r()),h=Ku(u,_);vn(h)},a=()=>{const u=sv(n()),_=Wa(n(),r()),h=Ku(u,_);vn(h)};pe();var c=qe(()=>ki(n(),i()));il(t,{get elementInfo(){return f(c)},onClick:o,onTrash:a,children:(u,_)=>{k2(u,{get value(){return r()}})},$$slots:{default:!0}}),de()}var M2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function U2(t){var e=M2();N(t,e)}function $2(t,e){ue(e,!1);const n=Ye(),r=()=>he(Br,"$globalConstraintsStore",n),i=R();let o=U(e,"elementHandlers",8);const a=fw,c=u=>{const _=Wa(u,!0),h=sv(u),g=Ku(_,h);vn(g)};D(()=>r(),()=>{y(i,(u,_)=>{var v;const h=!!((v=_.meta)!=null&&v.categories.includes(x.GLOBAL_CONSTRAINT)),g=r().has(u);return h&&!g})}),be(),pe(),Hd(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return f(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{U2(u)},"panel-content":(u,_)=>{var h=Se(),g=se(h);lt(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>f(m)[0],I=()=>f(m)[1];G2(v,{get toolId(){return E()},get value(){return I()},get elementHandlers(){return o()}})}),N(u,h)}}}),de()}var F2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function P2(t){var e=F2();N(t,e)}var H2=ce("<!> <!>",1),B2=ce("<!> <!> <!>",1);function W2(t,e){ue(e,!1);const n=Ye(),r=()=>he(mt,"$localConstraintsStore",n),i=R();let o=U(e,"elementHandlers",8);const a=_w,c=u=>{tv(u),Gr(u)};D(()=>(r(),x),()=>{y(i,(u,_)=>{var v;const h=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(x.LOCAL_CONSTRAINT))&&!h})}),be(),pe(),Hd(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return f(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{P2(u)},"panel-content":(u,_)=>{var h=B2(),g=se(h),v=qe(()=>ki(d.GIVEN,o()));il(g,{get elementInfo(){return f(v)}});var m=M(g,2),E=qe(()=>ki(d.REGIONS,o()));il(m,{get elementInfo(){return f(E)}});var I=M(m,2);lt(I,1,()=>r().entries(),([O,b])=>O,(O,b)=>{let S=()=>f(b)[0];var k=Se(),G=se(k);{var F=Y=>{var H=H2(),j=se(H);rv(j,{get toolId(){return S()},get elementHandlers(){return o()}});var J=M(j,2);iv(J,{get toolId(){return S()}}),N(Y,H)};re(G,Y=>{lw(S())&&Y(F)})}N(O,k)}),N(u,h)}}}),de()}var z2=ce('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function _u(t,e){ue(e,!1);const n=R();let r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0),o=R(void 0);function a(m){const E=cu(m);E&&i()&&i()(E)}D(()=>Q(r()),()=>{y(n,r())}),D(()=>(f(n),cu),()=>{Wu(f(n))&&y(o,cu(f(n)))}),be(),pe();var c=z2(),u=V(c);const _=qe(()=>zp(f(n)));var h=V(u);an(h),W(u);var g=M(u,2),v=M(V(g),2);an(v),L(v,"spellcheck",!1),L(v,"maxlength",30),W(g),W(c),te(()=>{L(u,"style",`--choosen-color: ${f(o)??""}`),wt(u,"transparent",f(_))}),Vn(h,()=>f(n),m=>y(n,m)),Me("change",h,()=>a(f(n))),Vn(v,()=>f(n),m=>y(n,m)),Me("input",v,()=>a(f(n))),N(t,c),de()}var Y2=ce('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function vs(t,e){let n=U(e,"name",8);var r=Y2(),i=V(r),o=V(i,!0);W(i);var a=M(i,2);gt(a,e,"default",{}),W(r),te(()=>ot(o,n())),N(t,r)}var j2=ce('<input class="control-slider svelte-1rsuho6" type="range">');function K2(t,e){ue(e,!1);let n=U(e,"min",8),r=U(e,"max",8),i=U(e,"value",12),o=U(e,"step",24,()=>(r()-n())/10),a=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);pe();var u=j2();an(u),te(()=>{L(u,"min",n()),L(u,"max",r()),L(u,"step",o())}),Vn(u,i),Me("change",u,()=>{a()&&a()(i())}),Me("input",u,()=>{c()&&c()(i())}),N(t,u),de()}function oi(t,e){let n=U(e,"name",8),r=U(e,"value",12),i=U(e,"min",8),o=U(e,"max",8),a=U(e,"step",24,()=>(o()-i())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);vs(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,h)=>{K2(_,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var V2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function X2(t){var e=V2();N(t,e)}var q2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function Z2(t){var e=q2();N(t,e)}var Q2=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function J2(t){var e=Q2();N(t,e)}var eD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function tD(t){var e=eD();N(t,e)}var nD=ce('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function rD(t,e){ue(e,!1);const n=[];let r=U(e,"value",8),i=U(e,"selectedShape",12),o=U(e,"title",8),a=U(e,"updateShapeCb",8,void 0);pe();var c=nD(),u=V(c);an(u);var _,h=M(u,2);gt(h,e,"default",{}),W(c),te(()=>{L(c,"title",o()),wt(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),dl(n,[],u,()=>(r(),i()),i),Me("change",u,()=>a()&&a()(r())),N(t,c),de()}var iD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function oD(t){var e=iD(),n=V(e);L(n,"cx",480),L(n,"cy",-480),L(n,"rx",480),L(n,"ry",300),W(e),N(t,e)}var sD=ce('<div class="icon-wrapper svelte-18euf14"><!></div>'),aD=ce('<div class="radio-container svelte-18euf14"></div>');function lD(t,e){ue(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),i=U(e,"possibleShapes",8),o=U(e,"updateShapeCb",8,void 0);const a=new Map([[B.CIRCLE,J2],[B.ELLIPSE,oD],[B.SQUARE,Z2],[B.RECTANGLE,X2],[B.POLYGON,tD]]);pe(),vs(t,{get name(){return n()},children:(c,u)=>{var _=aD();lt(_,5,i,It,(h,g)=>{rD(h,{get title(){return f(g)},get value(){return f(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var E=Se(),I=se(E);{var O=b=>{var S=sD(),k=V(S);Vh(k,()=>a.get(f(g)),(G,F)=>{F(G,{})}),W(S),N(b,S)};re(I,b=>{a.has(f(g))&&b(O)})}N(v,E)},$$slots:{default:!0}})}),W(_),N(c,_)},$$slots:{default:!0}}),de()}var cD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function uD(t){var e=cD();N(t,e)}var dD=ce('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),_D=ce("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function fD(t,e){ue(e,!1);const n=Ye(),r=()=>he(Zt,"$toolStore",n),i=()=>he(zt,"$currentConstraintStore",n),o=R(),a=R(),c=R();let u=R(!0),_=U(e,"elementHandlers",8);function h(O,b){const S=(O==null?void 0:O.shape)??(b?Au(b):void 0);return du(S),S}function g(O,b){f(c)&&(Bb(c,f(c)[O]=b),du(f(c)))}function v(){f(a)&&(y(c,Au(f(a))),du(f(c)))}function m(O){return O&&[B.CIRCLE,B.SQUARE,B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function E(O){return O&&[B.POLYGON,B.LINE_WITH_POLYGON_ENDS].includes(O)}function I(O){return O&&[B.ELLIPSE,B.RECTANGLE].includes(O)}D(()=>(r(),Q(_())),()=>{y(o,ki(r(),_()))}),D(()=>f(o),()=>{y(a,f(o).shape)}),D(()=>(i(),f(a)),()=>{var O;y(c,h(((O=i())==null?void 0:O.constraint)??null,f(a)))}),be(),pe(),Al(t,{get isOpen(){return f(u)},set isOpen(O){y(u,O)},$$slots:{"panel-header":(O,b)=>{Ll(O,{slot:"panel-header",title:"Shape Editor",get isOpen(){return f(u)},set isOpen(S){y(u,S)},$$slots:{"title-icon":(S,k)=>{uD(S)}},$$legacy:!0})},"panel-content":(O,b)=>{var S=Se(),k=se(S);{var G=F=>{var Y=_D(),H=se(Y);{var j=$e=>{var we=dD();Me("click",we,v),N($e,we)};re(H,$e=>{gw(f(a))&&$e(j)})}var J=M(H,2);{var le=$e=>{lD($e,{get possibleShapes(){return f(a).allowedTypes},name:"Shape",get selectedShape(){return f(c).type},updateShapeCb:we=>g("type",we)})};re(J,$e=>{var we;f(a).allowedTypes&&f(a).allowedTypes.length&&((we=f(c))!=null&&we.type)&&$e(le)})}var Z=M(J,2);{var ie=$e=>{var we=qe(()=>f(a).n.lb??3),ke=qe(()=>f(a).n.ub??10);oi($e,{name:"Number of Sides",get value(){return f(c).n},get min(){return f(we)},get max(){return f(ke)},step:1,onChangeCb:Ue=>g("n",Ue)})};re(Z,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.n)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.n)!=null&&Ue.editable)&&E(f(c).type)&&$e(ie)})}var me=M(Z,2);{var oe=$e=>{var we=qe(()=>f(a).r.lb??0),ke=qe(()=>f(a).r.ub??1),Ue=qe(()=>f(a).r.step??.05);oi($e,{name:"Radius",get value(){return f(c).r},get min(){return f(we)},get max(){return f(ke)},get step(){return f(Ue)},onChangeCb:At=>g("r",At)})};re(me,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.r)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.r)!=null&&Ue.editable)&&m(f(c).type)&&$e(oe)})}var Ee=M(me,2);{var Ne=$e=>{var we=qe(()=>f(a).width.lb??0),ke=qe(()=>f(a).width.ub??1),Ue=qe(()=>f(a).width.step??.05);oi($e,{name:"Width",get value(){return f(c).width},get min(){return f(we)},get max(){return f(ke)},get step(){return f(Ue)},onChangeCb:At=>g("width",At)})};re(Ee,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.width)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.width)!=null&&Ue.editable)&&I(f(c).type)&&$e(Ne)})}var xe=M(Ee,2);{var Le=$e=>{var we=qe(()=>f(a).height.lb??0),ke=qe(()=>f(a).height.ub??1),Ue=qe(()=>f(a).height.step??.05);oi($e,{name:"Height",get value(){return f(c).height},get min(){return f(we)},get max(){return f(ke)},get step(){return f(Ue)},onChangeCb:At=>g("height",At)})};re(xe,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.height)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.height)!=null&&Ue.editable)&&I(f(c).type)&&$e(Le)})}var Oe=M(xe,2);{var et=$e=>{var we=qe(()=>f(a).angle.lb??0),ke=qe(()=>f(a).angle.ub??360),Ue=qe(()=>f(a).angle.step??15);oi($e,{name:"Angle",get value(){return f(c).angle},get min(){return f(we)},get max(){return f(ke)},get step(){return f(Ue)},onChangeCb:At=>g("angle",At)})};re(Oe,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.angle)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.angle)!=null&&Ue.editable)&&$e(et)})}var tt=M(Oe,2);{var Gt=$e=>{var we=qe(()=>f(a).inset.lb??0),ke=qe(()=>f(a).inset.ub??.5),Ue=qe(()=>f(a).inset.step??.01);oi($e,{name:"Inset",get value(){return f(c).inset},get min(){return f(we)},get max(){return f(ke)},get step(){return f(Ue)},onChangeCb:At=>g("inset",At)})};re(tt,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.inset)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.inset)!=null&&Ue.editable)&&$e(Gt)})}var Pt=M(tt,2);{var tn=$e=>{vs($e,{name:"Stroke",children:(we,ke)=>{_u(we,{get value(){return f(c).stroke},onChangeCb:Ue=>g("stroke",Ue)})},$$slots:{default:!0}})};re(Pt,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.stroke)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.stroke)!=null&&Ue.editable)&&$e(tn)})}var Tt=M(Pt,2);{var Mt=$e=>{var we=qe(()=>f(a).strokeWidth.lb??0),ke=qe(()=>f(a).strokeWidth.ub??.8),Ue=qe(()=>f(a).strokeWidth.step??.01);oi($e,{name:"Stroke Width",get value(){return f(c).strokeWidth},get min(){return f(we)},get max(){return f(ke)},get step(){return f(Ue)},onChangeCb:At=>g("strokeWidth",At)})};re(Tt,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.strokeWidth)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.strokeWidth)!=null&&Ue.editable)&&$e(Mt)})}var nn=M(Tt,2);{var dr=$e=>{var we=qe(()=>f(a).strokeDasharray.lb??0),ke=qe(()=>f(a).strokeDasharray.ub??1),Ue=qe(()=>f(a).strokeDasharray.step??.01);oi($e,{name:"Stroke Dasharray",get value(){return f(c).strokeDasharray},get min(){return f(we)},get max(){return f(ke)},get step(){return f(Ue)},onChangeCb:At=>g("strokeDasharray",At)})};re(nn,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.strokeDasharray)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.strokeDasharray)!=null&&Ue.editable)&&$e(dr)})}var er=M(nn,2);{var Yi=$e=>{vs($e,{name:"Fill",children:(we,ke)=>{_u(we,{get value(){return f(c).fill},onChangeCb:Ue=>g("fill",Ue)})},$$slots:{default:!0}})};re(er,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.fill)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.fill)!=null&&Ue.editable)&&$e(Yi)})}var Or=M(er,2);{var br=$e=>{vs($e,{name:"Font Color",children:(we,ke)=>{_u(we,{get value(){return f(c).fontColor},onChangeCb:Ue=>g("fontColor",Ue)})},$$slots:{default:!0}})};re(Or,$e=>{var we,ke,Ue;((we=f(c))==null?void 0:we.fontColor)!==void 0&&((Ue=(ke=f(a))==null?void 0:ke.fontColor)!=null&&Ue.editable)&&$e(br)})}N(F,Y)};re(k,F=>{f(a)&&F(G)})}N(O,S)}},$$legacy:!0}),de()}var gD=ce('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Fs(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var i=gD(),o=V(i),a=V(o);gt(a,e,"default",{}),W(o),W(i),te(()=>L(i,"title",r())),Me("click",i,Zn(function(...c){var u;(u=n())==null||u.apply(this,c)})),N(t,i)}var hD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function pD(t){var e=hD();N(t,e)}var vD=ce('<div class="buttons-container svelte-kc00rw"><!></div>');function Sl(t,e){var n=vD(),r=V(n);gt(r,e,"default",{}),W(n),N(t,n)}var mD=ce('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),ED=ce('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),CD=ce('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function ID(t,e){ue(e,!1);const n=Ye(),r=()=>he(Hr,"$puzzleMetaStore",n),i=()=>he(Br,"$globalConstraintsStore",n),o=()=>he(mt,"$localConstraintsStore",n);let a=U(e,"showModal",12,!1),c=R(""),u=R(""),_=R(""),h=R(""),g=R("");function v(){a(!1)}function m(){const b=f(u)?E(f(u)):["Anonymous"],k={title:f(c)?f(c):"Sudoku",authors:b,ruleset:f(_),ctcYoutubeUrl:f(h),ctcUrl:f(g)};BT(k),a(!1)}function E(b){return b.split(/\s*[;]\s*/)}function I(){var Y,H,j,J;let b="";const S=$t,k=i();!!k.get(d.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules do not apply.

`:b+=`Sudoku rules apply.

`;for(const[le,Z]of k.entries())if(le!==d.SUDOKU_RULES_DO_NOT_APPLY&&Z){const ie=S[le],me=((Y=ie.menu)==null?void 0:Y.name)??ie.toolId,oe=(H=ie.meta)==null?void 0:H.description;b+=`**${me}**: ${oe}

`}const F=o();for(const[le,Z]of F.entries())if(Object.keys(Z).length>0){const me=S[le],oe=((j=me.menu)==null?void 0:j.name)??me.toolId,Ee=(J=me.meta)==null?void 0:J.description;b+=`**${oe}**: ${Ee}

`}return b.trim()}function O(){const b=I();y(_,b)}D(()=>(Q(a()),r(),Ja),()=>{if(!a()){const b=r().authors;y(c,r().title??""),y(u,b?Ja(b,"; ","; "):""),y(_,r().ruleset??""),y(h,r().ctcYoutubeUrl??""),y(g,r().ctcUrl??"")}}),be(),pe(),Wr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(b){a(b)},children:(b,S)=>{var k=CD(),G=V(k);ai(G,{title:"Title"});var F=M(G,2);an(F);var Y=M(F,2);ai(Y,{title:"Authors"});var H=M(Y,2);an(H);var j=M(H,2);ai(j,{title:"Ruleset",children:(Ee,Ne)=>{var xe=mD();Me("click",xe,O),N(Ee,xe)},$$slots:{default:!0}});var J=M(j,2);Sb(J),L(J,"rows",8);var le=M(J,2);ai(le,{title:"CTC Link"});var Z=M(le,2);an(Z);var ie=M(Z,2);ai(ie,{title:"CTC Youtube Link"});var me=M(ie,2);an(me);var oe=M(me,2);Sl(oe,{children:(Ee,Ne)=>{var xe=ED(),Le=se(xe),Oe=M(Le,2);Me("click",Le,m),Me("click",Oe,v),N(Ee,xe)},$$slots:{default:!0}}),W(k),Vn(F,()=>f(c),Ee=>y(c,Ee)),Vn(H,()=>f(u),Ee=>y(u,Ee)),Vn(J,()=>f(_),Ee=>y(_,Ee)),Vn(Z,()=>f(g),Ee=>y(g,Ee)),Vn(me,()=>f(h),Ee=>y(h,Ee)),N(b,k)},$$slots:{default:!0},$$legacy:!0}),de()}var OD=ce("<!> <!>",1);function bD(t){let e=R(!1);function n(){y(e,!0)}var r=OD(),i=se(r);Fs(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{pD(a)},$$slots:{default:!0}});var o=M(i,2);ID(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var wD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function yD(t){var e=wD();N(t,e)}var LD=ce('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function AD(t,e){ue(e,!1);let n=R(null),r=R(null);function i(){var o;(o=f(n))==null||o.click()}D(()=>(f(r),rl),()=>{if(f(r)&&f(r).length){const o=f(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),h=LT(_);console.log(h),VT(h),rl()}},a.onerror=function(){alert(a.error)}}}),be(),pe(),Fs(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=LD(),u=se(c);yD(u);var _=M(u,2);Ti(_,h=>y(n,h),()=>f(n)),iw(_,()=>f(r),h=>y(r,h)),N(o,c)},$$slots:{default:!0}}),de()}var SD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function ND(t){var e=SD();N(t,e)}var xD=ce('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function gh(t,e){ue(e,!1);let n=U(e,"name",8),r=U(e,"min",8),i=U(e,"max",8),o=U(e,"value",12),a=U(e,"step",24,()=>(i()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);pe();var _=xD(),h=V(_),g=V(h);W(h);var v=M(h,2);an(v),W(_),te(()=>{ot(g,`${n()??""}: ${o()??""}`),L(v,"min",r()),L(v,"max",i()),L(v,"step",a())}),Vn(v,o),Me("change",v,()=>{c()&&c()(o())}),Me("input",v,()=>{u()&&u()(o())}),N(t,_),de()}var RD=ce('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),TD=ce('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function DD(t,e){ue(e,!1);let n=U(e,"showModal",12,!1);const r=4,i=20;let o=R(9),a=R(9),c=R(""),u=R(Lt.range(1,10));function _(){n(!1)}function h(){rl(),KT(f(a),f(o),f(u).sort()),n(!1)}function g(E){return E.map(O=>String(O)).join(",")}function v(){const E=Math.min(Math.max(f(a),f(o)),9);y(u,Lt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&y(u,E.replaceAll(" ","").split(",").map(Number))}pe(),Wr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var O=TD(),b=V(O);gh(b,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return f(o)},set value(H){y(o,H)},$$legacy:!0});var S=M(b,2);gh(S,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return f(a)},set value(H){y(a,H)},$$legacy:!0});var k=M(S,2),G=qe(()=>`Allowed Digits (for the solver): ${g(f(u))}`);ai(k,{get title(){return f(G)}});var F=M(k,2);an(F),te(()=>L(F,"placeholder",g(f(u))));var Y=M(F,2);Sl(Y,{children:(H,j)=>{var J=RD(),le=se(J),Z=M(le,2);Me("click",le,h),Me("click",Z,_),N(H,J)},$$slots:{default:!0}}),W(O),Vn(F,()=>f(c),H=>y(c,H)),Me("input",F,()=>m(f(c))),N(E,O)},$$slots:{default:!0},$$legacy:!0}),de()}var kD=ce("<!> <!>",1);function GD(t){let e=R(!1);function n(){y(e,!0)}var r=kD(),i=se(r);Fs(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{ND(a)},$$slots:{default:!0}});var o=M(i,2);DD(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var MD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function UD(t){var e=MD();N(t,e)}var $D=ce('<button class="modal-button">Cancel</button>'),FD=ce('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function PD(t,e){ue(e,!1);const n=Ye(),r=()=>he(vo,"$svgRefStore",n),i=()=>he(Hr,"$puzzleMetaStore",n),o=()=>he(Us,"$puzzleStore",n),a=R();let c=U(e,"showModal",12,!1);function u(O){const b=getComputedStyle(O);let S="";for(let k of b){const G=b.getPropertyValue(k);G&&(S+=`${k}:${G};`)}return S}function _(O){const b=O.cloneNode(!0);(b instanceof SVGElement||b instanceof HTMLElement)&&(b.style.cssText=u(O));const S=O.childNodes;for(let k=0;k<S.length;k++){const G=S[k];if(G instanceof Element){const F=_(G);b.replaceChild(F,b.childNodes[k])}}return b}function h(O){if(!O)return;const b=_(O),S=el(i()),G=new XMLSerializer().serializeToString(b),F=new Image,Y=new Blob([G],{type:"image/svg+xml;charset=utf-8"}),H=URL.createObjectURL(Y);F.onload=()=>{const j=O.getBoundingClientRect(),J=j.width,le=j.height,Z=document.createElement("canvas"),ie=window.devicePixelRatio||1;Z.width=J*ie,Z.height=le*ie;const me=Z.getContext("2d");me&&(me.scale(ie,ie),me.drawImage(F,0,0,J,le),Z.toBlob(oe=>{if(!oe)return;const Ee=URL.createObjectURL(oe),Ne=document.createElement("a");Ne.href=Ee,Ne.download=S,Ne.click(),URL.revokeObjectURL(Ee)}))},F.src=H}function g(O,b="download.svg"){if(!O)return;const S=_(O);let G=new XMLSerializer().serializeToString(S);G.includes("<?xml")||(G=`<?xml version="1.0" standalone="no"?>\r
`+G);const F=new Blob([G],{type:"image/svg+xml"}),Y=URL.createObjectURL(F),H=document.createElement("a");H.href=Y,H.download=b,H.click(),URL.revokeObjectURL(Y)}const v=O=>{const b=yT(o());return JSON.stringify(b,null,O)},m=()=>{function O(k,G,F){var Y=document.createElement("a"),H=new Blob([k],{type:F});Y.href=URL.createObjectURL(H),Y.download=G,Y.click(),URL.revokeObjectURL(Y.href)}const b=v(2),S=el(i());O(b,`${S}.json`,"text/plain")};function E(){c(!1)}const I=1;D(()=>r(),()=>{y(a,r())}),be(),pe(),Wr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(O){c(O)},children:(O,b)=>{var S=FD(),k=V(S),G=V(k),F=V(G),Y=M(F,2),H=M(Y,2);W(G);var j=M(G,2),J=M(V(j),2),le=V(J);L(le,"width",400*I),L(le,"height",300*I),W(J),W(j),W(k);var Z=M(k,2);Sl(Z,{children:(ie,me)=>{var oe=$D();Me("click",oe,E),N(ie,oe)},$$slots:{default:!0}}),W(S),Me("click",F,m),Me("click",Y,()=>h(f(a))),Me("click",H,()=>g(f(a))),N(O,S)},$$slots:{default:!0},$$legacy:!0}),de()}var HD=ce("<!> <!>",1);function BD(t){let e=R(!1);function n(){y(e,!0)}var r=HD(),i=se(r);Fs(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{UD(a)},$$slots:{default:!0}});var o=M(i,2);PD(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var WD=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function av(t){var e=WD();N(t,e)}var zD=ce('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),YD=ce('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Ha(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var i=YD(),o=V(i);ai(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=M(o,2);yl(a,{get isOpen(){return r()},children:(c,u)=>{var _=zD(),h=V(_);gt(h,e,"default",{}),W(_),N(c,_)},$$slots:{default:!0}}),W(i),N(t,i)}var jD=ce('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function KD(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),i=U(e,"disabled",8,!1);var o=jD(),a=V(o);an(a),Ri(2),W(o),te(()=>{wt(o,"disabled",i()),jh(a,n()),a.disabled=i()}),Me("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,o)}var VD=ce('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function si(t,e){ue(e,!1);let n=U(e,"value",8),r=U(e,"name",8),i=U(e,"updateCb",8,void 0),o=U(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}pe();var c=VD(),u=V(c);KD(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var _=M(u,2),h=V(_,!0);W(_),W(c),te(()=>{wt(c,"disabled",o()),ot(h,r())}),Me("click",_,Zn(a)),N(t,c),de()}var XD=ce("<!> <!>",1),qD=ce("<!> <!> <!>",1),ZD=ce("<!> <!>",1),QD=ce('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function lv(t,e){ue(e,!1);const n=Ye(),r=()=>he(di,"$settingsStore",n),i=()=>he(bl,"$gameModeStore",n),o=R();let a=U(e,"showModal",12,!1);D(()=>r(),()=>{y(o,r())}),be(),pe(),Wr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=QD(),h=V(_);Ha(h,{title:"General",children:(I,O)=>{si(I,{get value(){return f(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:Wb})},$$slots:{default:!0}});var g=M(h,2);Ha(g,{title:"Tools",children:(I,O)=>{var b=XD(),S=se(b);si(S,{get value(){return f(o).penToolActive},name:"Pen Tool",updateCb:zb});var k=M(S,2);si(k,{disabled:!0,get value(){return f(o).letterToolActive},name:"Letter Tool",updateCb:Yb}),N(I,b)},$$slots:{default:!0}});var v=M(g,2);Ha(v,{title:"Gameplay",children:(I,O)=>{var b=qD(),S=se(b);si(S,{name:"Check Conflicts",get value(){return f(o).checkConflicts},updateCb:jb});var k=M(S,2);si(k,{name:"Highlight Pencilmark Conflicts",get value(){return f(o).highlightPencilmarkConflicts},updateCb:Kb});var G=M(k,2);si(G,{name:"Highlight Cells Seen By Selection",get value(){return f(o).highlightCellsSeenBySelection},updateCb:Vb}),N(I,b)},$$slots:{default:!0}});var m=M(v,2);{var E=I=>{Ha(I,{title:"Setting Mode Display",children:(O,b)=>{var S=ZD(),k=se(S);si(k,{name:"Hide Fog",get value(){return f(o).hideFog},updateCb:Xb});var G=M(k,2);si(G,{name:"Show Solution",get value(){return f(o).showSolution},updateCb:qb}),N(O,S)},$$slots:{default:!0}})};re(m,I=>{i()===Io.SETTING&&I(E)})}W(_),N(c,_)},$$slots:{default:!0},$$legacy:!0}),de()}var JD=ce("<!> <!>",1);function ek(t){let e=R(!1);function n(){y(e,!0)}var r=JD(),i=se(r);Fs(i,{title:"Settings",clickCb:n,children:(a,c)=>{av(a)},$$slots:{default:!0}});var o=M(i,2);lv(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var tk=ce('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function nk(t){var e=tk(),n=V(e);GD(n);var r=M(n,2);BD(r);var i=M(r,2);AD(i,{});var o=M(i,2);bD(o);var a=M(o,2);ek(a),W(e),N(t,e)}var rk=ce('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function ik(t,e){ue(e,!1);let n=R(!1);function r(){const i=st(mn),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const h=_.value;c.push(h)}o.push(c)}$d(o)}pe(),Al(t,{get isOpen(){return f(n)},set isOpen(i){y(n,i)},$$slots:{"panel-header":(i,o)=>{Ll(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return f(n)},set isOpen(a){y(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=rk();Me("click",a,r),N(i,a)}},$$legacy:!0}),de()}const ok={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function sk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function ak(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function lk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function ck(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function cv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function uk(t,e){const n=ak(t);if(n)return{type:"number",parsed:parseInt(n)};const r=lk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=ck(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=sk(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=cv(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var K=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(K||{});function ft(t,e){return`${e}[${t.r},${t.c}]`}function Hi(t,e){return t.map(r=>ft(r,e))}function Ie(t,e){return"["+Hi(t,e).join(",")+"]"}function ye(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function ut(t){return t.map(n=>ye(n))}function Ni(t){return`constraint alldifferent([${t.join(",")}]);
`}function _t(t,e){return t&&(t=`
% ${e}
`+t),t}function Nl(t,e){const n=[Fe.N,Fe.S,Fe.W,Fe.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function Bd(t,e,n=void 0){n||(n=[Fe.N,Fe.S,Fe.W,Fe.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+ut(o).join(",")+"]";r.push(a)}return r}function xl(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class dk{constructor(e){Ce(this,"model_str","");Ce(this,"used_vars");Ce(this,"puzzle");Ce(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=ok){const i=uk(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];o+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];o+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const c=i.parsed,u="["+c.join(",")+"]";for(const _ of c){const h=parseInt(_);Number.isNaN(h)&&!this.hasVariable(_)&&(o+=`var int: ${_};
`,this.addVariable(_))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function _k(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,_=0,h=0;for(let b=0;b<e.length;b++){const S=e[b].trim(),k=S.match(r),G=S.match(i),F=S.match(o),Y=S.match(a);if(!c&&(k||G||F||Y)){c={name:(k||G||F||Y)[1],startLine:b,content:[e[b]],type:k?"function":G?"predicate":F?"test":"variable"},u=(S.match(/\(/g)||[]).length-(S.match(/\)/g)||[]).length,_=(S.match(/\{/g)||[]).length-(S.match(/\}/g)||[]).length,h=(S.match(/\[/g)||[]).length-(S.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[b]),u+=(S.match(/\(/g)||[]).length-(S.match(/\)/g)||[]).length,_+=(S.match(/\{/g)||[]).length-(S.match(/\}/g)||[]).length,h+=(S.match(/\[/g)||[]).length-(S.match(/\]/g)||[]).length,u===0&&_===0&&h===0&&S.endsWith(";"))){n[c.name]={...c,endLine:b};let H=c.startLine;for(;H>0&&e[H-1].trim().startsWith("%");)H-=1;n[c.name].startLine=H,c=null}}function g(b){const S=[],k=b.match(r),G=b.match(i),F=b.match(o);for(const Y of Object.keys(n)){const H=n[Y].type;if(H==="function"||H==="test"||H==="predicate"){if(k||G||F)continue;new RegExp(`\\b${Y}\\s*\\(`,"g").test(b)&&S.push(Y)}else if(H==="variable"){const j=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${Y}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(b.match(j))continue;new RegExp(`\\b${Y}\\b`,"g").test(b)&&S.push(Y)}}return S}const v=new Set;for(const b of e)g(b).forEach(k=>v.add(k));console.log("usedDefinitions",v);const m=Object.values(n).filter(b=>!v.has(b.name)).map(b=>({start:b.startLine,end:b.endLine}));m.sort((b,S)=>S.start-b.start);const E=[...e];for(const b of m)E.splice(b.start,b.end-b.start+1);const I=[];let O=!1;for(const b of E)b.trim()===""?O||(I.push(b),O=!0):(I.push(b),O=!1);return I.join(`
`)}function hh(t){let e=t,n=e.length;for(;e=_k(e),e.length!=n;)n=e.length;return e}function uv(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function fk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const h=e.getCell(c,_);!h||h.region===null?u.push(r-1):u.push(h.region)}o.push(u)}const a=uv(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Wd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Yt(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function gk(t,e){const r=t.grid.getPositiveDiagonal(),i=ut(r);let o=Ni(i);return o=`
% Positive Diagonal Constraint
`+o,o}function hk(t,e){const r=t.grid.getNegativeDiagonal(),i=ut(r);let o=Ni(i);return o=`
% Negative Diagonal Constraint
`+o,o}function pk(t,e){const r=t.grid.getPositiveDiagonal(),o="["+ut(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function vk(t,e){const r=t.grid.getNegativeDiagonal(),o="["+ut(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function mk(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let h=0;h<u;h++){const g=n.getCell(h,_),v=n.getCell(u,_+(u-h));if(!g||!v)continue;const m=ye(g),E=ye(v),O=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=O}}return o}function Ek(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let h=0;h<u;h++){const g=n.getCell(h,_),v=n.getCell(u,_-(u-h));if(!g||!v)continue;const m=ye(g),E=ye(v),O=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=O}}return o}function Ck(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),_=`constraint alldifferent(${`[${ut(a).join(",")}]`});
`;r+=_}return r}function Ik(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=ye(i),_=`[${ut(a).join(",")}]`,h=`constraint different_from_group_p(${c}, ${_});
`;r+=h}return r}function Ok(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=ye(i),_=`[${ut(a).join(",")}]`,h=`constraint different_from_group_p(${c}, ${_});
`;r+=h}return r}function bk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=_t(n,`${e}`),n}function wk(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=_t(n,`${e}`),n}function yk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=_t(n,`${e}`),n}function Lk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=_t(n,`${e}`),n}function*zr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Ak(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of zr(n)){const a=ye(i),c=ye(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function Sk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of zr(n)){const a=ye(i),c=ye(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function Nk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${ut(o).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function xk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function Rk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function Tk(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=_t(n,`${e}`),n}function fu(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),h=c.value;(e===d.ALL_V_GIVEN&&(h==="v"||h==="V")||e===d.ALL_X_GIVEN&&(h==="x"||h==="X")||e===d.ALL_XV_GIVEN)&&o.push(_)}let a="";for(const[c,u]of zr(n)){if(o.find(v=>v.has(c)&&v.has(u)))continue;const h=ye(c),g=ye(u);if(e===d.ALL_V_GIVEN){const v=`constraint ${h} + ${g} != 5;
`;a+=v}else if(e===d.ALL_X_GIVEN){const v=`constraint ${h} + ${g} != 10;
`;a+=v}else{const v=`constraint ${h} + ${g} != 5 /\\ (${h} + ${g} != 10);
`;a+=v}}return a=_t(a,`${e}`),a}function mo(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function Dk(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=mo(n,i);let a="";for(const[c,u]of zr(n)){if(o.find(E=>E.has(c)&&E.has(u)))continue;const h=ye(c),g=ye(u);let v="";if(c.r==u.r){const I=n.getRow(c.r)[0];v=ye(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];v=ye(I)}if(!v)continue;const m=`constraint abs(${h} - ${g}) != ${v};
`;a+=m}return a=_t(a,`${e}`),a}function kk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=mo(n,i);a=[...a,...mo(n,o)];let c=[];i&&(c=Object.values(i).map(h=>h.value).map(h=>h||"1"));const u=[...new Set(c)];let _="";for(const[h,g]of zr(n)){if(a.find(I=>I.has(h)&&I.has(g)))continue;const m=ye(h),E=ye(g);for(const I of u){const O=parseInt(I),b=`constraint abs(${m} - ${E}) != ${O};
`;_+=b}}return _=_t(_,`${e}`),_}function Gk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=mo(n,i);a=[...a,...mo(n,o)];let c=[];i&&(c=Object.values(i).map(h=>h.value).map(h=>h||"2"));const u=[...new Set(c)];let _="";for(const[h,g]of zr(n)){if(a.find(I=>I.has(h)&&I.has(g)))continue;const m=ye(h),E=ye(g);for(const I of u){const O=parseInt(I),b=`constraint not ratio_p(${m}, ${E}, ${O});
`;_+=b}}return _=_t(_,`${e}`),_}function Mk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=mo(n,i);let a="";for(const[c,u]of zr(n)){if(o.find(I=>I.has(c)&&I.has(u)))continue;const h=ye(c),g=ye(u),v=ft(c,K.YIN_YANG),m=ft(u,K.YIN_YANG),E=`constraint not yin_yang_kropki_p(${h}, ${g}, ${v}, ${m});
`;a+=E}return a=_t(a,`${e}`),a}function Uk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,_){return u.find(h=>h.cell.r===_.r&&h.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(o,u),h=_?_.directions:[],g=ye(u),v=[Fe.E,Fe.N,Fe.S,Fe.W];for(const m of v){if(h.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),I=Ie(E,K.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=_t(c,`${e}`),c}function zd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function $k(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=zd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=n.getRow(c.r),g=`[${ut(_).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${g}, ${v});
`;a+=m}return a=_t(a,`${e}`),a}function Fk(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=zd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=ye(c),[h,g,v,m]=Bd(n,c),E=`constraint not radar_p(${_}, ${h}, ${g}, ${v}, ${m}, 9);
`;a+=E}return a=_t(a,`${e}`),a}function Pk(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=zd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=v}return a=_t(a,`${e}`),a}function Hk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of zr(n)){const a=ye(i),c=ye(o),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${o.r},${o.c}]`,h=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=h}return r}function Bk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h),_=Ie(u,K.YIN_YANG);o+=`constraint count_unique_values(${_}) >= 2;
`}return o}function Wk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=K.YIN_YANG;for(const[o,a]of zr(n)){const c=ye(o),u=ye(a),_=`${i}[${o.r},${o.c}]`,h=`${i}[${a.r},${a.c}]`,g=`constraint (${_} == 1 /\\ ${h} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function zk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=_t(n,`${e}`),n}function Yk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=_t(n,`${e}`),n}function jk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function Kk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function Vk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=_t(n,`${e}`),n}function Xk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=_t(n,`${e}`),n}function qk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function Zk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function Qk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function Jk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=_t(n,`${e}`),n}function e3(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=ft(i,K.BOARD),c=ft(i,K.YIN_YANG),u=Ie(o,K.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=_t(n,`${e}`),n}function t3(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function n3(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function r3(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function i3(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function o3(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=_t(n,`${e}`),n}function s3(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function a3(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=_t(n,`${e}`),n}function l3(t,e){let n="";const r=t.grid,i=t.grid.getUsedRegions();for(const o of i){const a=r.getRegion(o),c=[...new Set(a.map(_=>_.r))],u=[...new Set(a.map(_=>_.c))];for(const _ of u){const h=a.filter(v=>v.c===_),g=Ie(h,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}for(const _ of c){const h=a.filter(v=>v.r===_),g=Ie(h,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}}return n=_t(n,`${e}`),n}function c3(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=ut(u),h=Ni(_);r+=h}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),_=ut(u),h=Ni(_);r+=h}if(!e.get(d.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),h=ut(_),g=Ni(h);r+=g}}return r}function u3(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const d3=new Map([[d.POSITIVE_DIAGONAL,gk],[d.NEGATIVE_DIAGONAL,hk],[d.POSITIVE_ANTIDIAGONAL,pk],[d.NEGATIVE_ANTIDIAGONAL,vk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,mk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,Ek],[d.ANTIKING,Ik],[d.ANTIKNIGHT,Ok],[d.ANTI_LONG_KNIGHT,wk],[d.ANTI_GIRAFFE,bk],[d.DISJOINT_GROUPS,Ck],[d.TANGO,yk],[d.NONCONSECUTIVE,Ak],[d.NONRATIO,Sk],[d.ANTI_ENTROPY,Lk],[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,l3],[d.GLOBAL_INDEXING_COLUMN,Nk],[d.ALL_V_GIVEN,fu],[d.ALL_X_GIVEN,fu],[d.ALL_XV_GIVEN,fu],[d.ALL_DIFFERENCES_GIVEN,kk],[d.ALL_RATIOS_GIVEN,Gk],[d.ALL_XY_DIFFERENCES_GIVEN,Dk],[d.ALL_YIN_YANG_KROPKI_GIVEN,Mk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,Uk],[d.ALL_INDEXING_COLUMN_GIVEN,$k],[d.ALL_RADARS_GIVEN,Fk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Pk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Hk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Bk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,Tk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,xk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,Rk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,zk],[d.CAVE_CELLS_ARE_ODD,jk],[d.CAVE_WALLS_ARE_EVEN,Kk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,Vk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Xk],[d.YIN_YANG_FILLOMINO_PARITY,Yk],[d.TWO_SYMMETRIC_GALAXIES,Qk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,qk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Zk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Jk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,e3],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,Wk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,t3],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,a3],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,n3],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,r3],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,i3],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,o3],[d.DIRECTED_PATH_IS_PARITY_LINE,s3]]);function _3(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=d3.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function Yd(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return ut(r)}function jd(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${ut(n.slice(1)).join(",")}]`}function dv(t,e,n,r){let i="";const a="["+Yd(e,r).join(",")+"]";for(const c of r.lines){const u=jd(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function f3(t,e,n,r){let i="";const o=Yd(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const h=`constraint average_arrow_p(${jd(e,u)}, ${a});
`;i+=h}}return i}function g3(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=Ie(o,K.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=Ie(u.slice(1),K.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return i+=dv(t,e,n,r),i}function h3(t,e,n,r){let i="";const a="["+Yd(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=jd(e,u),h=`constraint bulbous_arrow_p(${a}, ${_});
`;i+=h}return i}const p3=new Map([[d.ARROW,dv],[d.AVERAGE_ARROW,f3],[d.BULBOUS_ARROW,h3],[d.CHAOS_CONSTRUCTION_ARROW,g3]]);function v3(t,e,n,r){let i="";const o=p3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function ci(t,e){const n=Yt(t,e.cells);return ut(n)}function _v(t,e,n){const i=`[${ci(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Rl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Kd(t,e,n,r,i){const a=`[${ci(e,r).join(",")}]`,c=r.value,u=Rl(t,c,n);if(!u)return"";const _=u[1];let h=u[0];return h+=`constraint ${i}(${a}, ${_});
`,h}function m3(t,e,n,r){const i=ci(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ni(i);const c=Rl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${o}, ${u});
`,_}function E3(t,e,n,r){const i=ci(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ni(i);const c=Rl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${o}, ${u});
`,_}function C3(t,e,n,r){return Kd(t,e,n,r,"sum_cage_p")}function I3(t,e,n,r){return _v(e,r,"parity_balance_cage_p")}function O3(t,e,n,r){return _v(e,r,"sum_cage_look_and_say_p")}function b3(t,e,n,r){return Kd(t,e,n,r,"divisible_killer_cage_p")}function w3(t,e,n,r){return Kd(t,e,n,r,"spotlight_cage_p")}function y3(t,e,n,r){const o=`[${ci(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function L3(t,e,n,r){const o=`[${ci(e,r).join(",")}]`,a=r.value;let c="";const u=Rl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const _=r.cells,h=Yt(e,_),g=[];for(const m of h)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!h.includes(I)&&!g.includes(I)&&g.push(I)});const v=Ie(g,K.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${v});
`,c}function fv(t,e,n,r,i){const o=Yt(e,r.cells),a=Ie(o,K.BOARD),c=Ie(o,K.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${a}, ${c}, ${_});
`}return""}function A3(t,e,n,r){return fv(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function S3(t,e,n,r){return fv(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function N3(t,e,n,r){const i=Yt(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function x3(t,e,n,r){const i=Yt(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function R3(t,e){let n="";const r=Wd(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${ci(t,o).join(",")}]`,h=`[${ci(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${h});
`}return n}const T3=new Map([[d.KILLER_CAGE,m3],[d.INVERTED_KILLER_CAGE,E3],[d.SUM_CAGE,C3],[d.PARITY_BALANCE_CAGE,I3],[d.SUM_CAGE_LOOK_AND_SAY,O3],[d.DIVISIBLE_KILLER_CAGE,b3],[d.SPOTLIGHT_CAGE,w3],[d.UNIQUE_DIGITS_CAGE,y3],[d.VAULTED_CAGE,L3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,A3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,S3],[d.DOUBLERS_KILLER_CAGE,N3],[d.NEGATORS_KILLER_CAGE,x3]]);function D3(t,e,n,r){let i="";const o=T3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=R3(e,a);i+=c}return i}function k3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function G3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=k3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function M3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,h=c+1,[g,v,m]=G3(e,_),E=Ie(g,K.GALAXY_REGIONS),I=Ie(v,K.GALAXY_REGIONS),O=Ie(m,K.GALAXY_REGIONS);r+=`% galaxy ${h}
`,r+=`constraint galaxy_center_p(${E}, ${I}, ${O}, ${h});
`,r+=`constraint connected_region(${K.GALAXY_REGIONS}, ${h});
`;const b=u.value;if(!b)continue;const S=parseInt(b);r+=`constraint galaxy_sum_p(${K.BOARD}, ${K.GALAXY_REGIONS}, ${S}, ${h});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${K.GALAXY_REGIONS}, ${a});
`,r}function U3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function $3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=U3(t,c,n);if(!u)return"";const _=u[1];let h=u[0],g=[];if(o%1===0&&a%1===0?g=Xa(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(g=qa(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const v=Ie(g,K.BOARD),m=Ie(g,K.YIN_YANG);return h+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${_};
`,h}const F3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,$3]]),P3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,M3]]);function H3(t,e,n,r){let i="";const o=P3.get(n),a=F3.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function ph(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return ut(n)}function B3(t,e){const r="["+ph(t,e.cells).join(",")+"]",o="["+ph(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const W3=new Map([[d.CLONE_REGION,B3]]);function z3(t,e,n,r){return xl(e,n,r,W3)}function Vd(t,e){const n=Yt(t,e.cells);return ut(n)}function Xd(t,e,n){const i=`[${Vd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function gv(t,e,n,r=""){const o=`[${Vd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function Y3(t,e,n,r){const o=`[${Vd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=cv(a);if(!c)return"";let u="";for(const h of c){const g=parseInt(h);Number.isNaN(g)&&!t.hasVariable(h)&&(u+=`var int: ${h};
`,t.addVariable(h))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${_});
`,u}function j3(t,e,n,r){return gv(e,r,"corner_sum_p")}function K3(t,e,n,r){return gv(e,r,"corner_even_count_p")}function V3(t,e,n,r){return Xd(e,r,"corner_sum_of_three_equals_the_other_p")}function X3(t,e,n,r){return Xd(e,r,"equal_diagonal_differences_p")}function q3(t,e,n,r){return Xd(e,r,"product_square_p")}const Z3=new Map([[d.QUADRUPLE,Y3],[d.CORNER_SUM,j3],[d.CORNER_EVEN_COUNT,K3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,V3],[d.PRODUCT_SQUARE,q3],[d.EQUAL_DIAGONAL_DIFFERENCES,X3]]);function Q3(t,e,n,r){let i="";const o=Z3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Tl(t,e){const n=Yt(t,e.cells);return ut(n)}function J3(t,e,n){const r=Tl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function e5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Dl(t,e,n,r,i,o=""){var m;const a=Tl(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:o,h=e5(t,_,n);if(!h)return"";const g=h[1];let v=h[0];return v+=`constraint ${i}(${c}, ${u}, ${g});
`,v}function t5(t,e,n,r){const i=Tl(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function n5(t,e,n,r){return Dl(t,e,n,r,"ratio_p","2")}function r5(t,e,n,r){return Dl(t,e,n,r,"abs_difference","1")}function vh(t,e,n,r){const i=Tl(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function i5(t,e,n,r){return Dl(t,e,n,r,"edge_sum_p")}function o5(t,e,n,r){return Dl(t,e,n,r,"edge_modulo_p")}function s5(t,e,n,r){return J3(e,r,"edge_factor_p")}function a5(t,e,n,r){const i=Yt(e,r.cells),[o,a]=ut(i),[c,u]=i;let _="";if(c.r==u.r){const v=e.getRow(c.r)[0];_=ye(v)}else if(c.c==u.c){const v=e.getCol(c.c)[0];_=ye(v)}return _?`constraint abs(${o} - ${a}) == ${_};
`:""}function l5(t,e,n,r){const i=Yt(e,r.cells),[o,a]=ut(i),c=Hi(i,K.YIN_YANG),[u,_]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${_});
`}function c5(t,e,n,r){const i=Yt(e,r.cells),[o,a]=ut(i),c=Hi(i,K.YIN_YANG),[u,_]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${_});
`}function kl(t,e,n){const r=Yt(t,e.cells),i=Hi(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function u5(t,e,n,r){return kl(e,r,K.UNKNOWN_REGIONS)}function d5(t,e,n,r){return kl(e,r,K.FILLOMINO_REGIONS)}function _5(t,e,n,r){return kl(e,r,K.SUGURU_REGIONS)}function f5(t,e,n,r){return kl(e,r,K.CAVE_SHADING)}const g5=new Map([[d.XV,t5],[d.DIFFERENCE,r5],[d.RATIO,n5],[d.EDGE_INEQUALITY,vh],[d.ONE_WAY_DOOR,vh],[d.EDGE_SUM,i5],[d.EDGE_MODULO,o5],[d.EDGE_FACTOR,s5],[d.XY_DIFFERENCES,a5],[d.YIN_YANG_KROPKI,l5],[d.YIN_YANG_WHITE_KROPKI,c5],[d.FILLOMINO_REGION_BORDER,d5],[d.UNKNOWN_REGION_BORDER,u5],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,_5],[d.EDGE_CAVE_ONE_OF_EACH,f5]]);function h5(t,e,n,r){let i="";const o=g5.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function p5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Ps(t,e,n=!1){let r=Yt(t,e.cells);return n&&(r=[...new Set(r)]),ut(r)}function ht(t,e,n,r=!1){const o=`[${Ps(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function ur(t,e,n,r,i,o=""){var v;const c=`[${Ps(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,_=p5(t,u,n);if(!_)return"";const h=_[1];let g=_[0];return g+=`constraint ${i}(${c}, ${h});
`,g}function qd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${ut(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${o});
`}function v5(t,e,n,r){return ht(e,r,"renban",!0)}function m5(t,e,n,r){return ht(e,r,"double_renban_p",!0)}function E5(t,e,n,r){return ht(e,r,"renrenbanban_p",!0)}function C5(t,e,n,r){return ht(e,r,"knabner_p",!0)}function I5(t,e,n,r){return ht(e,r,"renban_or_nabner_line_p",!0)}function O5(t,e,n,r){return ht(e,r,"out_of_order_consecutive_line_p")}function b5(t,e,n,r){return ur(t,e,n,r,"whispers","5")}function w5(t,e,n,r){return`constraint whispers(${`[${Ps(e,r).join(",")}]`}, 4);
`}function y5(t,e,n,r){return ht(e,r,"strictly_increasing")}function L5(t,e,n,r){return ht(e,r,"fuzzy_thermo_p")}function A5(t,e,n,r){return ht(e,r,"increasing")}function S5(t,e,n,r){return ur(t,e,n,r,"custom_thermo_p")}function N5(t,e,n,r){return ht(e,r,"palindrome")}function x5(t,e,n,r){return ur(t,e,n,r,"sum_line_p")}function R5(t,e,n,r){return ht(e,r,"xv_line_p")}function T5(t,e,n,r){return ur(t,e,n,r,"at_least_x_line_p","10")}function D5(t,e,n,r){return ur(t,e,n,r,"product_line_p")}function k5(t,e,n,r){return ur(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function G5(t,e,n,r){return ht(e,r,"adjacent_multiples_line_p")}function M5(t,e,n,r){return ht(e,r,"index_line_p")}function U5(t,e,n,r){return ht(e,r,"zipper_line_p")}function $5(t,e,n,r){return qd(e,r,"segmented_sum_line_p")}function F5(t,e,n,r){return ht(e,r,"segmented_sum_and_renban_line_p")}function P5(t,e,n,r){return qd(e,r,"n_consecutive_renban_line_p")}function H5(t,e,n,r){return qd(e,r,"n_consecutive_fuzzy_sum_line_p")}function B5(t,e,n,r){const i=Yt(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const _=i[u],h=e.getRow(_.r),g=Ie(h,K.BOARD),v=`cycle_${n}_${u}`;a.push(v);const m=_.c+1;o+=`var int: ${v} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function W5(t,e,n,r){return ht(e,r,"adjacent_differences_count_line_p")}function z5(t,e,n,r){return ht(e,r,"same_parity_line_p")}function Y5(t,e,n,r){return ur(t,e,n,r,"renban_or_whispers_p","5")}function j5(t,e,n,r){return ht(e,r,"alldifferent",!0)}function K5(t,e,n,r){return ht(e,r,"repeated_digits_line_p")}function V5(t,e,n,r){return ht(e,r,"superfuzzy_arrow_p")}function X5(t,e,n,r){return ht(e,r,"ambiguous_arrow_p",!0)}function q5(t,e,n,r){return ht(e,r,"headless_arrow_p")}function Z5(t,e,n,r){return ur(t,e,n,r,"unimodular_line_p","3")}function Q5(t,e,n,r){return ur(t,e,n,r,"modular_line_p","3")}function J5(t,e,n,r){return ur(t,e,n,r,"modular_or_unimodular_line_p","3")}function eG(t,e,n,r){return ht(e,r,"arithmetic_sequence_line_p")}function tG(t,e,n,r){return ht(e,r,"odd_even_oscillator_line_p")}function nG(t,e,n,r){return ur(t,e,n,r,"high_low_oscillator_line_p","5")}function rG(t,e,n,r){return ht(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function iG(t,e,n,r){return ht(e,r,"look_and_say_line_p",!0)}function oG(t,e,n,r){const i=Yt(e,r.cells);function o(g){const v=[];let m=null;for(const E of g)E.r!=m?(v.push([E]),m=E.r):v[v.length-1].push(E);return v}const a=o(i);if(a.length<2)return"";const c=a[0],_=`[${ut(c).join(",")}]`;let h="";for(let g=1;g<a.length;g++){const v=a[g],E=`[${ut(v).join(",")}]`;h+=`constraint sum(${E}) == sum(${_});
`}return h}function sG(t,e,n,r){return ht(e,r,"between_line_p")}function aG(t,e,n,r){return ht(e,r,"tightrope_line_p")}function lG(t,e,n,r){return ht(e,r,"double_arrow_p")}function cG(t,e,n,r){return ht(e,r,"split_peas_p")}function uG(t,e,n,r){return ht(e,r,"parity_count_line_p")}function dG(t,e,n,r){return ht(e,r,"product_of_ends_equals_sum_of_line_p")}function hv(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function _G(t,e,n,r){let i="";const o=Yt(e,r.cells),a=hv(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const h=`constraint sum(${Ie(u,K.BOARD)}) == ${c};
`;i+=h}return i}function fG(t,e,n,r){return`constraint entropic_line_p(${`[${Ps(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function gG(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Ps(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function hG(t,e,n,r){return ht(e,r,"peapods_p")}function pG(t,e,n,r){const i=Yt(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function vG(t,e,n,r){const i=Yt(e,r.cells),o=Ie(i,K.BOARD),a=Ie(i,K.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function Zd(t,e,n){const r=Yt(t,e.cells),i=Ie(r,K.BOARD),o=Ie(r,K.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function mG(t,e,n,r){return Zd(e,r,"yin_yang_unshaded_entropic_line_p")}function EG(t,e,n,r){return Zd(e,r,"yin_yang_indexing_line_coloring_p")}function CG(t,e,n,r){return Zd(e,r,"yin_yang_region_sum_line_p")}function IG(t,e,n,r){const i=Yt(e,r.cells),o=Ie(i,K.VALUES_GRID),a=Ie(i,K.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function Qd(t,e,n){const r=Yt(t,e.cells),i=Ie(r,K.VALUES_GRID);return`constraint ${n}(${i});
`}function OG(t,e,n,r){return Qd(e,r,"between_line_p")}function bG(t,e,n,r){return Qd(e,r,"double_arrow_p")}function wG(t,e,n,r){return Qd(e,r,"strictly_increasing")}function yG(t,e,n,r){const i=Yt(e,r.cells),o=hv(i);if(o.sort((_,h)=>h.length-_.length),o.length<=1)return"";let a="";const c=o[0],u=Ie(c,K.VALUES_GRID);for(const _ of o.slice(1)){const h=Ie(_,K.VALUES_GRID),g=`constraint subset_p(${u}, ${h});
`;a+=g}return a}const LG=new Map([[d.THERMOMETER,y5],[d.FUZZY_THERMOMETER,L5],[d.SLOW_THERMOMETER,A5],[d.CUSTOM_THERMOMETER,S5],[d.RENBAN_LINE,v5],[d.DOUBLE_RENBAN_LINE,m5],[d.RENRENBANBAN_LINE,E5],[d.NABNER_LINE,C5],[d.WHISPERS_LINE,b5],[d.DUTCH_WHISPERS,w5],[d.RENBAN_OR_WHISPERS_LINE,Y5],[d.RENBAN_OR_NABNER_LINE,I5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,O5],[d.N_CONSECUTIVE_RENBAN_LINE,P5],[d.PALINDROME,N5],[d.SUM_LINE,x5],[d.PRODUCT_LINE,D5],[d.XV_LINE,R5],[d.AT_LEAST_X_LINE,T5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,k5],[d.SAME_PARITY_LINE,z5],[d.ADJACENT_MULTIPLES_LINE,G5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,W5],[d.LOOK_AND_SAY_LINE,iG],[d.ROW_SUM_LINE,oG],[d.INDEX_LINE,M5],[d.ZIPPER_LINE,U5],[d.SEGMENTED_SUM_LINE,$5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,F5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,H5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,rG],[d.SUPERFUZZY_ARROW,V5],[d.AMBIGUOUS_ARROW,X5],[d.HEADLESS_ARROW,q5],[d.ARITHMETIC_SEQUENCE_LINE,eG],[d.ODD_EVEN_OSCILLATOR_LINE,tG],[d.HIGH_LOW_OSCILLATOR_LINE,nG],[d.UNIQUE_VALUES_LINE,j5],[d.REPEATED_DIGITS_LINE,K5],[d.UNIMODULAR_LINE,Z5],[d.MODULAR_LINE,Q5],[d.MODULAR_OR_UNIMODULAR_LINE,J5],[d.REGION_SUM_LINE,_G],[d.ENTROPIC_LINE,fG],[d.ENTROPIC_OR_MODULAR_LINE,gG],[d.ROW_CYCLE_THERMOMETER,B5],[d.PEAPODS,hG],[d.BETWEEN_LINE,sG],[d.TIGHTROPE_LINE,aG],[d.DOUBLE_ARROW_LINE,lG],[d.SPLIT_PEAS,cG],[d.PARITY_COUNT_LINE,uG],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,dG],[d.DOUBLERS_THERMOMETER,wG],[d.DOUBLERS_BETWEEN_LINE,OG],[d.DOUBLERS_DOUBLE_ARROW_LINE,bG],[d.INDEXER_CELLS_REGION_SUBSET_LINE,yG],[d.YIN_YANG_SHADED_WHISPERS_LINE,pG],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,mG],[d.YIN_YANG_UNSHADED_MODULAR_LINE,vG],[d.YIN_YANG_REGION_SUM_LINE,CG],[d.YIN_YANG_INDEXING_LINE_COLORING,EG],[d.GOLDILOCKS_ZONE_REGION_SUM,IG]]);function AG(t,e,n,r){let i="";const o=LG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Hs(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return ut(i)}function Bi(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function Jn(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,n).join(",")}]`,u=n.value,_=Bi(t,u,i,o);if(!_)return"";const h=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${h});
`,g}function SG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,h=Math.min(..._),g=Math.max(..._),v=Bi(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${h}, ${g});
`,E}function NG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,h=Math.min(..._),g=Math.max(..._),v=Bi(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];const I=`var_bool_${n}_0`,O=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${h}, ${g});
`,E+=`var bool: ${O} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${O});
`,E}function xG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Hs(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,h=Bi(t,_,i,o);if(!h)return"";const g=h[1];let v=h[0];return v+=`constraint x_index_p(${c}, ${u}, ${g});
`,v}function RG(t,e,n,r){return Jn(t,e,r,"x_sum_p")}function TG(t,e,n,r){return Jn(t,e,r,"shortsighted_x_sum_p")}function DG(t,e,n,r){return Jn(t,e,r,"broken_x_sum_p")}function kG(t,e,n,r){return Jn(t,e,r,"shifted_x_sum_p")}function GG(t,e,n,r){return Jn(t,e,r,"skyscrapers_p")}function MG(t,e,n,r){return Jn(t,e,r,"x_sum_skyscrapers_p")}function UG(t,e,n,r){return Jn(t,e,r,"battlefield_p")}function $G(t,e,n,r){return Jn(t,e,r,"rising_streak_p")}function FG(t,e,n,r){return Jn(t,e,r,"outside_consecutive_sum_p")}function PG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ie(a,K.BOARD),u=Ie(a,K.CELL_CENTER_LOOP),_=r.value;if(_){const h=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${h});
`}return""}function HG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Ie(c,K.BOARD),_=Ie(c,K.UNKNOWN_REGIONS),h=r.value,g=Bi(t,h,i,o);if(!g)return"";const v=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${v});
`,m}function BG(t,e,n,r){return Jn(t,e,r,"little_killer_sum_p")}function WG(t,e,n,r){return Jn(t,e,r,"little_killer_product_p")}function zG(t,e,n,r){return Jn(t,e,r,"x_omit_little_killer_sum_p")}function YG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ie(a,K.BOARD),u=Ie(a,K.YIN_YANG),_=r.value;if(_){const h=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${h});
`}return""}function jG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=Ie(a,K.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}function KG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=Ie(c,K.PENTOMINO_REGIONS),_=r.value,h=Bi(t,_,i,o);if(!h)return"";const g=h[1];let v=h[0];return v+=`constraint pentomino_border_count_p(${u}, ${g});
`,v}function VG(t,e,n){let r="";const i="mystery_sandwich_a",o="mystery_sandwich_b";r+=`var int: ${i};
`,r+=`var int: ${o};
`,r+=`constraint member(ALLOWED_DIGITS, ${i});
`,r+=`constraint member(ALLOWED_DIGITS, ${o});
`,r+=`constraint ${i} <= ${o};
`;for(const a of Object.values(n)){const c=a.cell,u=e.getCell(c.r,c.c),h=`[${Hs(e,a).join(",")}]`,g=a.value??"",v=Bi(t,g,c,u);if(!v)continue;const m=v[1];r+=v[0],r+=`constraint sandwich_sum_p(${h}, ${m}, ${i}, ${o});
`}return r}const XG=new Map([[d.SANDWICH_SUM,SG],[d.X_SUM,RG],[d.SHORTSIGHTED_X_SUM,TG],[d.BROKEN_X_SUM,DG],[d.SHIFTED_X_SUM,kG],[d.SKYSCRAPERS,GG],[d.X_SUM_SKYSCRAPERS,MG],[d.X_INDEX,xG],[d.BATTLEFIELD,UG],[d.SANDWICH_SUM_XOR_X_SUM,NG],[d.RISING_STREAK,$G],[d.OUTSIDE_CONSECUTIVE_SUM,FG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,YG],[d.LOOPWICHES,PG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,HG],[d.PENTOMINO_BORDER_COUNT,KG],[d.LITTLE_KILLER_SUM,BG],[d.LITTLE_KILLER_PRODUCT,WG],[d.X_OMIT_LITTLE_KILLER_SUM,zG],[d.NEGATORS_LITTLE_KILLER_SUM,jG]]),qG=new Map([[d.MYSTERY_SANDWICH_SUM,VG]]);function ZG(t,e,n,r){let i="";const o=XG.get(n),a=qG.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function QG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=Ie(o,K.SASHIGANE),c=Ie(o,K.SASHIGANE_BENDS),u=ye(r),_=ft(r,K.SASHIGANE);let h=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return h+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,h}function JG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+ut(o).join(",")+"]",u=Ie(o,K.CELL_CENTER_LOOP),_=ye(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const eM=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,QG],[d.THERMO_SIGHTLINE_LOOP_ARROW,JG]]);function tM(t,e,n,r){return xl(e,n,r,eM)}function pv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=ye(i);return`constraint ${n}(${o});
`}const nM={allow_var:!0,allow_interval:!0,allow_int_list:!1};function Jd(t,e,n,r=nM){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function vv(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=ye(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function $o(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=ye(o),u=Nl(t,o).map(g=>Ie(g,n)),_=ft(o,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function rM(t,e,n,r){return pv(e,r,"odd_p")}function iM(t,e,n,r){return pv(e,r,"even_p")}function oM(t,e,n,r){return vv(e,r,"low_digit_p","5")}function sM(t,e,n,r){return vv(e,r,"high_digit_p","5")}function mv(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=ye(i),a=t.getNeighboorCells(i),c=Ie(a,K.BOARD);return`constraint ${n}(${c}) == ${o};
`}function aM(t,e,n,r){return mv(e,r,"odd_count")}function lM(t,e,n,r){return mv(e,r,"even_count")}function cM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getNeighboorCells(o);c.push(o);const u=Ie(c,K.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function uM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${Ie(c,K.BOARD)}, ${a});
`}function dM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${Ie(c,K.BOARD)}, ${a});
`}function _M(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=Ie(a,K.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function fM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=Ie(a,K.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function gM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=o.r+1,u=o.c+1;if(o.region!==null){const h=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${h};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function hM(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const h=ye(a),g=ye(c),v=ye(u),m=ye(_);return`constraint groups_opposite_parity_p([${h},${g}], [${v},${m}]);
`}function e_(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=ye(i),[a,c,u,_]=Bd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${_});
`}function pM(t,e,n,r){return e_(e,r,"is_watchtower_p")}function vM(t,e,n,r){return e_(e,r,"is_not_watchtower_p")}function mM(t,e,n,r){return e_(e,r,"farsight_p")}function EM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),[c,u,_,h]=Bd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${h}, 9);
`}function CM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getRow(o.r),u="["+ut(c).join(",")+"]",_=e.getCol(o.c),h="["+ut(_).join(",")+"]",[g,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${h}, ${g}, ${v}, ${a});
`}function Ev(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const h=ye(_),g=t.getOrthogonallyAdjacentCells(_).filter(E=>!a.has(E)),v=Ie(g,K.BOARD),m=`constraint ${n}(${v}, ${h});
`;i+=m}return i}function IM(t,e,n){return Ev(e,n,"maximum_p")}function OM(t,e,n){return Ev(e,n,"minimum_p")}function bM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${ut([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function wM(t,e,n){const r=Object.values(n);let i="";const o=r.map(v=>v.cell),a=new Set(o.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v)),c=e.getAllCells().filter(v=>!a.has(v)),_=`${ut([...a]).join(`,
	`)}`,g=`${ut([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function yM(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${ut([...a]).join(`,
	`)}`,h=`${Hi([...a],K.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${K.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${h}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${K.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const v=ft(g,K.COUNTING_CIRCLES_COLORS);i+=`constraint ${v} == 0;
`}for(const g of r){const v=g.cell,m=e.getCell(v.r,v.c);if(!m)continue;const E=ye(m),I=ft(m,K.COUNTING_CIRCLES_COLORS),O=g.value;O?i+=`constraint ${I} == ${O};
`:i+=`constraint ${I} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${I}) == ${E};
`}return i+=`
`,i}function LM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${ut([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function AM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o);return`constraint seen_even_count_p(${Nl(e,o).map(h=>Ie(h,K.BOARD)).join(", ")}, ${a});
`}function SM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o);return`constraint seen_odd_count_p(${Nl(e,o).map(h=>Ie(h,K.BOARD)).join(", ")}, ${a});
`}function NM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getCellsByKnightMove(o),u=Ie(c,K.BOARD),_=r.value??"5",h=Jd(t,_,n);if(!h)return"";let g="";const v=h[1];return g+=h[0],g+=`constraint cell_knights_whisper_p(${a}, ${u}, ${v});
`,g}function xM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${Ie(u,K.YIN_YANG)}, ${a});
`}function RM(t,e,n,r){return $o(e,r,K.YIN_YANG,"yin_yang_seen_unshaded_p")}function TM(t,e,n,r){return $o(e,r,K.YIN_YANG,"yin_yang_seen_shaded_p")}function DM(t,e,n,r){return $o(e,r,K.YIN_YANG,"yin_yang_seen_same_shade_p")}function kM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=ft(o,K.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),_=Ie(u,K.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function GM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getNeighboorCells(o);return`constraint count(${Ie(c,K.YIN_YANG)}, 1) == ${a};
`}function MM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),_=e.getCol(o.c),h=Ie(u,K.TWO_CONTIGUOUS_REGIONS),g=Ie(_,K.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${h}, ${g}, ${a}, ${c});
`}function UM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getRow(o.r),u=e.getCol(o.c),_=Ie(c,K.UNKNOWN_REGIONS),h=Ie(u,K.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${h}, ${a});
`}function $M(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let _=`constraint nurimisaki_unshaded_endpoint_p(${Ie(c,K.NURIMISAKI)}, ${a});
`;return _+=$o(e,r,K.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function FM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=ft(o,K.SASHIGANE),u=ft(o,K.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function PM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ft(o,K.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function HM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${ft(o,K.CELL_CENTER_LOOP)} == 1;
`:""}function BM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${ft(o,K.CELL_CENTER_LOOP)} == 0;
`:""}function WM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${Ie(u,K.CELL_CENTER_LOOP)}) == ${a};
`}function zM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=ft(o,K.CAVE_SHADING),u=Nl(e,o),_=[];for(const g of u){const v=Ie(g,K.CAVE_SHADING);_.push(v)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function YM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=ye(o),h=ft(o,K.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),v=Ie(g,K.BOARD),m=Ie(g,K.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${h});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const E=e.getCellsByKnightMove(o),I=Ie(E,K.BOARD),O=Ie(E,K.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${O}, ${h});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const b=[Fe.NE,Fe.NW,Fe.SE,Fe.SW],S=[];for(const F of b)e.getCellsInDirection(o.r,o.c,F).forEach(H=>S.push(H));const k=Ie(S,K.BOARD),G=Ie(S,K.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${G}, ${h});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function jM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=ye(o),h=ft(o,K.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),v=Ie(g,K.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${h}) >= ${c};
`;const m=[Fe.N,Fe.S,Fe.E,Fe.W],E=[];for(const I of m){const O=e.getCellsInDirection(o.r,o.c,I);if(!O.length)continue;const b=Ie(O,K.BOARD),S=Ie(O,K.UNKNOWN_REGIONS),k=`in_arrow_${n}_${I}`,G=`in_arrow_${n}_${I}[1]`;E.push(G),u+=`array[index_set(${b})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${b}, ${S}, ${k}, ${_}, ${h});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function KM(t,e,n,r){return $o(e,r,K.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function VM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function XM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function qM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${ft(o,K.CONNECT_FOUR)});
`:""}function ZM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${ft(o,K.CONNECT_FOUR)});
`:""}function QM(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const h=Jd(t,_,o);if(!h)continue;const g=h[1];r+=h[0];const v=ft(u,K.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${K.BOARD}, ${K.NURIKABE_REGIONS}, ${v}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${K.NURIKABE_REGIONS})) == ${i+1};
`,r}function JM(t,e,n,r){return $o(e,r,K.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function eU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ye(o),c=ft(o,K.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${K.NURIKABE_REGIONS}, ${c}, ${a});
`}function tU(t,e,n){let r="";const i=Wd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,h]of u.flatMap((g,v)=>u.slice(v+1).map(m=>[g,m]))){const g=_.cell,v=h.cell,m=e.getCell(g.r,g.c),E=e.getCell(v.r,v.c);if(!m||!E)continue;const I=ft(m,K.BOARD),O=ft(E,K.BOARD);r+=`constraint ${I} == ${O};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=Ie(a,K.BOARD);return r+=`constraint alldifferent(${c});
`,r}function nU(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${Hi([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const _ of Object.values(n)){const h=_.cell,g=e.getCell(h.r,h.c);if(!g)continue;const v=ye(g),m=ft(g,K.SHIKAKU_REGIONS),E=ft(g,K.SHIKAKU_WIDTH),I=ft(g,K.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${K.SHIKAKU_REGIONS}, ${m}, ${v}, ${E}, ${I});
`}return i}function rU(t,e,n){const r=Object.values(n);let i="";const o=r.map(h=>h.cell),a=new Set(o.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h)),u=`${Hi([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const _={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[h,g]of Object.entries(n)){const v=g.cell,m=e.getCell(v.r,v.c);if(!m)continue;const E=ft(m,K.SHIKAKU_REGIONS),I=g.value??"",O=Jd(t,I,h,_);if(!O)continue;const b=O[1];i+=O[0],i+=`constraint shikaku_region_sum_p(${K.BOARD}, ${K.SHIKAKU_REGIONS}, ${E}, ${b});
`}return i}const iU=new Map([[d.ODD,rM],[d.EVEN,iM],[d.LOW_DIGIT,oM],[d.HIGH_DIGIT,sM],[d.ODD_MINESWEEPER,aM],[d.EVEN_MINESWEEPER,lM],[d.DIAGONALLY_ADJACENT_SUM,dM],[d.ORTHOGONAL_SUM,uM],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,cM],[d.FRIENDLY_CELL,gM],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,hM],[d.WATCHTOWER,pM],[d.NOT_WATCHTOWER,vM],[d.FARSIGHT,mM],[d.RADAR,EM],[d.INDEXING_COLUMN,_M],[d.INDEXING_ROW,fM],[d.SANDWICH_ROW_COL_COUNT,CM],[d.SEEN_EVEN_COUNT,AM],[d.SEEN_ODD_COUNT,SM],[d.CELL_KNIGHT_WHISPERS,NM],[d.YIN_YANG_MINESWEEPER,xM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,RM],[d.YIN_YANG_SEEN_SHADED_CELLS,TM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,DM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,kM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,GM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,MM],[d.SEEN_REGION_BORDERS_COUNT,UM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,$M],[d.NURIKABE_SEEN_WATERWAY_CELLS,JM],[d.NURIKABE_ISLAND_SIZE_CELL,eU],[d.SASHIGANE_BEND_REGION_COUNT,FM],[d.SASHIGANE_REGION_SUM,PM],[d.CELL_ON_THE_LOOP,HM],[d.CELL_NOT_ON_THE_LOOP,BM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,WM],[d.CAVE_CLUE,zM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,YM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,jM],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,KM],[d.DIRECTED_PATH_START,VM],[d.DIRECTED_PATH_END,XM],[d.CONENCT_FOUR_RED,qM],[d.CONNECT_FOUR_YELLOW,ZM]]),oU=new Map([[d.MAXIMUM,IM],[d.MINIMUM,OM],[d.COUNTING_CIRCLES,bM],[d.REVERSE_COUNTING_CIRCLES,wM],[d.COLORED_COUNTING_CIRCLES,yM],[d.UNIQUE_CELLS,LM],[d.SHIKAKU_REGION_SIZE,nU],[d.SHIKAKU_REGION_SUM,rU],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,QM],[d.TELEPORT,tU]]);function sU(t,e,n,r){let i="";const o=iU.get(n),a=oU.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function aU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=ft(r,K.UNKNOWN_REGIONS),a=e.directions,c=[];for(const h of a){const g=t.getCellsInDirection(r.r,r.c,h),v=Ie(g,K.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(h=>`count_different(${h}, ${o})`).join(" + ")} == ${i};
`}function lU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=ft(r,K.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),h=Ie(_,K.BOARD),g=Ie(_,K.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${h}, ${g}) == ${i};
`}return c}function cU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=Ie(u,K.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function uU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=ft(r,K.YIN_YANG),a=e.directions,c=[];for(const _ of a){const h=t.getCellsInDirection(r.r,r.c,_),g=Ie(h,K.YIN_YANG),v=Ie(h,K.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function dU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${Ie(_,K.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function _U(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${Ie(_,K.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function fU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=ft(r,K.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const h=t.getCellsInDirection(r.r,r.c,_),v=`count(${Ie(h,K.GALAXY_REGIONS)}, ${o})`;c.push(v)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function gU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),h="["+ut(u).join(",")+"]";a+=`constraint hot_arrows_p(${h}, ${i});
`}return a}function hU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=Ie(u,K.BOARD);a+=`constraint cold_arrows_p(${_}, ${i});
`}return a}function pU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=ft(r,K.CONNECT_FOUR),a=e.directions,c=[];for(const h of a){const g=t.getCellsInDirection(r.r,r.c,h);c.push(...g)}return c.length===0?"":`constraint count(${Ie(c,K.CONNECT_FOUR)}, ${o}) == ${i};
`}function vU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=ye(r),o=ft(r,K.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),h=Ie(_,K.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${h});
`}return c}const mU=new Map([[d.HOT_ARROWS,gU],[d.COLD_ARROWS,hU],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,aU],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,lU],[d.LOOP_CELL_COUNT_ARROWS,_U],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,uU],[d.YIN_YANG_COUNT_SHADED_CELLS,cU],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,fU],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,dU],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,pU],[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,vU]]);function EU(t,e,n,r){return xl(e,n,r,mU)}function CU(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function IU(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function OU(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}function bU(t,e){const n=e.value;if(!n)return"";const r=parseInt(n),i=[...t.getUsedRegions()];i.sort();const o=i.length;return`constraint lits_max_tetromino_sum_p(${K.BOARD}, ${K.LITS_GRID}, ${r}, 0..${o});
`}const wU=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,CU],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,IU],[d.FORBIDDEN_KNIGHT_SUM,OU],[d.LITS_MAX_TETROMINO_SUM,bU]]);function yU(t,e,n,r){return xl(e,n,r,wU)}const LU=[H3,sU,tM,EU,h5,Q3,AG,v3,D3,ZG,z3,yU];function AU(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of LU){let u=c(e,i,o,a);u=_t(u,`${o}`),n+=u}return n}function SU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function NU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function xU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function RU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function TU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function DU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows),a=Lt.range(1,o+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${o}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${o});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function kU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(h=>h.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=K.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=Lt.range(1,a+1);let u="";const _="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${o};
`,u+=`constraint numbered_chaos_construction_p(${K.BOARD}, ${o}, ${_}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${K.BOARD}, ${o}, ALLOWED_DIGITS, ${_});
`,u}function GU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function MU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function UU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function $U(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function FU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function Cv(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function Iv(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function t_(t,e,n,r){const i=t.grid;let o="";if(!t.globalConstraints.get(d.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const _ of u){const h=i.getRegion(_),g=Ie(h,r);o+=`constraint count_eq(${g}, ${n}, ${e});
`}}return o}function ho(t,e,n,r){let i=Cv(e,n,r);return i+=Iv(e,n,r),i+=t_(t,e,n,r),i}function PU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=ho(n,1,!0,K.DOUBLERS),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function HU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=ho(n,1,!0,K.NEGATORS),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function BU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function WU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=ho(n,2,!0,o),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function zU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${K.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${K.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${o}, ${K.SHIKAKU_WIDTH}, ${K.SHIKAKU_HEIGHT});
`,a}function YU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${K.BOARD}, ${K.SHIKAKU_REGIONS});
`,o}function jU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function KU(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${K.BOARD}, ${c});
`,u}function VU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.GALAXY_REGIONS,a=K.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function XU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function qU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function ZU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=12,a=K.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function QU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.LITS_GRID,u=K.BOARD_REGIONS,_=[...r.getUsedRegions()];_.sort();const h=Math.min(..._),g=Math.max(..._);let v="";v+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,v+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,v+=`array[ROW_IDXS, COL_IDXS] of var 0..${_.length}: ${c};
`,v+=`constraint lits_shading_p(${o});
`,v+=`constraint lits_shading_ids_p(${o}, ${a});
`,v+=`constraint lits_region_and_ids_p(${u}, ${a});
`,v+=`constraint lits_tetromino_shapes_p(${a});
`,v+=`constraint lits_grid_p(${c}, ${u}, ${o}, ${h}..${g});
`,_.length&&(v+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of _){const E=r.getRegion(m),O=`constraint count_eq(${Ie(E,K.LITS_SHADING)}, 1, 4);
`;v+=O}return v}function JU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,a+=`constraint norinori_p(${K.BOARD_REGIONS}, ${o});
`,r.getUsedRegions().size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`),a+=t_(n,2,1,K.NORINORI_SHADING),a}function e$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(h=>h.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const h of _){const g=r.getRegion(h),m=`constraint count_eq(${Ie(g,K.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function t$(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.STAR_BATTLE,c=K.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=ho(n,2,1,K.STAR_BATTLE),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=ho(n,1,1,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`
% 1 black star per row, column, region
`,u+=ho(n,1,2,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${o}, ${c});
`,u}function n$(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING,a=K.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=Iv(2,1,a),c+=Cv(2,1,a),c+=t_(n,1,1,a),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${o}, ${a});
`,c}function Wt(t,e,n){return t*n+e+1}function r$(t){const e=t.grid;function n(c,u){const _=[],h=Wt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Wt(u.r+g,u.c,e.nCols);_.push([h,v]),_.push([v,h])}return _}function r(c,u){const _=[],h=Wt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Wt(u.r,u.c+g,e.nCols);_.push([h,v]),_.push([v,h])}return _}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=Xa(_).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let v=Wt(g[0].r,g[0].c,e.nCols),m=Wt(g[3].r,g[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Wt(g[1].r,g[1].c,e.nCols),m=Wt(g[2].r,g[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let _=0;_<u.length-1;_++){const h=Wx(Ap(u[_],u[_+1]),.5),v=qa(h).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(v.length!==2)continue;const[m,E]=v;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function i$(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,h=o.value,g=Wt(u.r,u.c,e.nCols),v=Wt(_.r,_.c,e.nCols);h==="<"?n.push([g,v]):h===">"&&n.push([v,g])}return n}function o$(t){const e=[];for(const n of t.getAllCells()){const r=Wt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Wt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function s$(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const _=Wd(a);let h=1;for(const g of _.values())if(!(g.length<=1)){for(const[v,m]of g.flatMap((E,I)=>g.slice(I+1).map(O=>[E,O]))){const E=Wt(v.cell.r,v.cell.c,e.nCols),I=Wt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[v.cell.r][v.cell.c]=h,u[m.cell.r][m.cell.c]=h}for(const v of g){const m=Wt(v.cell.r,v.cell.c,e.nCols);r.push(m)}h++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function a$(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(b=>b.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=o$(r);const c=r$(n),u=i$(n);c.push(...u);const _=n.localConstraints;a=a.filter(b=>!c.some(S=>b[0]===S[0]&&b[1]===S[1]));const h=s$(n);if(h.tp_edges.length){a.push(...h.tp_edges);const b=uv(h.tp_arr),S=h.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${S}: teleports = array2d(ROW_IDXS, COL_IDXS, ${b});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,v=a.length,m="["+a.map(b=>b[0]).join(",")+"]",E="["+a.map(b=>b[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${E};
`,o+=`var 1..${g}: dpath_source;
`,o+=`var 1..${g}: dpath_target;
`,o+=`array[1..${g}] of var bool: dpath_ns;
`,o+=`array[1..${v}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let b=0;b<r.nRows-1;b++)for(let S=0;S<r.nCols-1;S++){const k=r.getCell(b,S),G=r.getCell(b,S+1),F=r.getCell(b+1,S),Y=r.getCell(b+1,S+1);if(!k||!G||!F||!Y)continue;const H=Wt(k.r,k.c,r.nCols),j=Wt(G.r,G.c,r.nCols),J=Wt(F.r,F.c,r.nCols),le=Wt(Y.r,Y.c,r.nCols),ie=[[H,le],[le,H],[j,J],[J,j]].map(me=>a.findIndex(oe=>me[0]===oe[0]&&me[1]===oe[1])).filter(me=>me!==-1);if(ie.length){const me=ie.map(oe=>`dpath_es[${oe+1}]`).join(",");o+=`constraint sum([${me}]) <= 1;
`}}const I=_.get(d.TELEPORT),O=I?Object.values(I):[];if(h.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const b of O){const S=b.cell,k=r.getCell(S.r,S.c);if(!k)continue;const G=r.getNeighboorCells(k),F=Wt(k.r,k.c,r.nCols),Y=[];for(const j of G){if(O.some(Z=>Z.cell.r===j.r&&Z.cell.c==j.c&&Z.value===b.value))continue;const le=Wt(j.r,j.c,r.nCols);Y.push([F,le]),Y.push([le,F])}const H=Y.map(j=>a.findIndex(J=>j[0]===J[0]&&j[1]===J[1])).filter(j=>j!==-1);if(H.length){const j=H.map(J=>`dpath_es[${J+1}]`).join(",");o+=`constraint sum([${j}]) <= 1;
`}}}return o}function l$(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function c$(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function u$(t,e){let n="";return n+=`constraint connect_four_draw_p(${K.CONNECT_FOUR});
`,n}function d$(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${K.BOARD}, ${K.CONNECT_FOUR});
`,n}function _$(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${K.BOARD}, ${K.CONNECT_FOUR}, 3);
`,n}const f$=new Map([[d.FILLOMINO,BU],[d.CAVE,jU],[d.GALAXIES,VU],[d.YIN_YANG,SU],[d.SHIKAKU,zU],[d.SHIKAKU_NO_REPEATS_IN_REGION,YU],[d.NORINORI,JU],[d.NURIMISAKI,NU],[d.NURIKABE,xU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,RU],[d.TWO_CONTIGUOUS_REGIONS,TU],[d.CHAOS_CONSTRUCTION,DU],[d.NUMBERED_CHAOS_CONSTRUCTION,kU],[d.SASHIGANE,GU],[d.CELL_CENTER_LOOP_NO_TOUCHING,MU],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,UU],[d.NOT_LOOP_SIZED_REGIONS,$U],[d.MODULAR_LOOP,FU],[d.DOUBLERS,PU],[d.NEGATORS,HU],[d.GOLDILOCKS_ZONE,qU],[d.NEXUS,XU],[d.INDEXER_CELLS,WU],[d.PENTOMINO_TILLING,ZU],[d.LITS,QU],[d.CAVE_LITS,e$],[d.LITS_BLACK_WHITE_STAR_BATTLE,t$],[d.NORINORI_STAR_BATTLE,n$],[d.RENBAN_CAVES,KU],[d.MAZE_DIRECTED_PATH,a$],[d.CHAOS_CONSTRUCTION_SUGURU,l$],[d.CONNECT_FOUR,c$],[d.CONNECT_FOUR_DRAW,u$],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,d$],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,_$]]);function g$(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=f$.get(i);if(!a)continue;let c=a(t,i);c=_t(c,`${i}`),e+=c}return e}function h$(){return`
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
    array[int] of var 0..1: labels) =
    unknown_regions_region_sum_line_p(arr, labels);

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
) =
    assert(index_set_1of2(regions) = index_set_1of2(bends) /\\
       index_set_2of2(regions) = index_set_2of2(bends),
       "regions and bends must have same dimensions") /\\
    forall(i in index_set_1of2(regions)) (
        forall(j in index_set_2of2(regions)) (
            not bends[i,j] -> 
                let {
                    % Up direction arrays (decreasing range)
                    array[int] of var int: up_regions = 
                        [regions[k,j] | k in reverse(min(index_set_1of2(regions))..i)];
                    array[int] of var bool: up_bends = 
                        [bends[k,j] | k in reverse(min(index_set_1of2(regions))..i)];
                    
                    % Down direction arrays
                    array[int] of var int: down_regions = 
                        [regions[k,j] | k in i..max(index_set_1of2(regions))];
                    array[int] of var bool: down_bends = 
                        [bends[k,j] | k in i..max(index_set_1of2(regions))];
                    
                    % Left direction arrays (decreasing range)
                    array[int] of var int: left_regions = 
                        [regions[i,k] | k in reverse(min(index_set_2of2(regions))..j)];
                    array[int] of var bool: left_bends = 
                        [bends[i,k] | k in reverse(min(index_set_2of2(regions))..j)];
                    
                    % Right direction arrays
                    array[int] of var int: right_regions = 
                        [regions[i,k] | k in j..max(index_set_2of2(regions))];
                    array[int] of var bool: right_bends = 
                        [bends[i,k] | k in j..max(index_set_2of2(regions))];
                } in
                % Exactly one direction should satisfy the auxiliary predicate
                bool2int(sashigane_links_to_bends_aux_p(up_regions, up_bends)) +
                bool2int(sashigane_links_to_bends_aux_p(down_regions, down_bends)) +
                bool2int(sashigane_links_to_bends_aux_p(left_regions, left_bends)) +
                bool2int(sashigane_links_to_bends_aux_p(right_regions, right_bends)) = 1
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
predicate cell_center_loop_p(array[int, int] of var 0..1: grid, bool: no_diag_touch) =
    let {
        set of int: rows = index_set_1of2(grid);
        set of int: cols = index_set_2of2(grid);
    } in (
        connected_region(grid, 1) /\\
        % no diagonal touching
        (if no_diag_touch then
            cell_center_loop_no_diagonal_touching_p(grid)
        else
            true
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

`}function p$(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${ye(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function Ov(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new dk(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(h$());let _=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?_=`1..${c}`:t.globalConstraints.get(d.HEXED_SUDOKU)?r=[...Lt.range(1,16)]:r&&(_="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${_};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),fk(i,n),i.add(p$(t)),i.add(c3(t)),i.add(u3(t)),i.add(g$(i)),i.add(AU(t,i)),i.add(_3(t)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const mh=encodeURIComponent("4.4.2");let pr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const xi=[];let gu;function hs(){if(!gu){const e=`importScripts(${JSON.stringify(pr.workerURL)});`;gu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(gu);t.postMessage({wasmURL:pr.wasmURL?pr.wasmURL.toString():new URL(`./minizinc.wasm?version=${mh}`,pr.workerURL).toString(),dataURL:pr.dataURL?pr.dataURL.toString():new URL(`./minizinc.data?version=${mh}`,pr.workerURL).toString()}),xi.push({worker:t,runCount:0})}function bv(){for(;xi.length<pr.numWorkers;)hs()}async function v$(t){if(pr={...pr,...t},xi.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");bv(),await Promise.race(xi.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class n_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new n_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){bv();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=xi.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?xi.push({worker:o,runCount:a}):(o.terminate(),hs()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?xi.push({worker:o,runCount:a}):(o.terminate(),hs()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);hs();let c={},u=!1,_=null;return a.onmessage=h=>{if(c[h.data.type])for(const g of c[h.data.type])g(h.data);switch(h.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=h.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const h of c.exit)h({type:"exit",code:null});c={}}},on(h,g){c[h]?c[h].add(g):c[h]=new Set([g])},off(h,g){c[h]&&c[h].delete(g)},then(h,g){const v=m=>{if(m.code===0)h(m.outputFiles[i]);else{const E=_?{message:_.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);hs();let o=null,a={},c=!1,u=null,_={},h="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const v of a[g.data.type])v(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,h="SATISFIED";break;case"status":h=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,v){a[g]?a[g].add(v):a[g]=new Set([v])},off(g,v){a[g]&&a[g].delete(v)},then(g,v){const m=E=>{if(E.code===0)g({status:h,solution:u,statistics:_});else{const I=o?{message:o.message,...E}:E;if(!v)throw I;v(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var m$=ce('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function E$(t,e){ue(e,!1);const n=Ye(),r=()=>he(Hr,"$puzzleMetaStore",n);let i=U(e,"showModal",12,!1);function o(g,v,m){var E=document.createElement("a"),I=new Blob([g],{type:m});E.href=URL.createObjectURL(I),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function a(){const g=st(Us);return Ov(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),v=hh(g);navigator.clipboard.writeText(v)}function _(){const g=el(r()),v=a();o(v,`${g}.mzn`,"text/plain")}function h(){const g=el(r()),v=a(),m=hh(v);o(m,`${g}.mzn`,"text/plain")}pe(),Wr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,v)=>{var m=m$(),E=V(m),I=M(E,2),O=M(I,2),b=M(O,2),S=M(b,2),k=M(V(S));L(k,"href","https://play.minizinc.dev/"),Ri(),W(S),W(m),Me("click",E,c),Me("click",I,u),Me("click",O,_),Me("click",b,h),N(g,m)},$$slots:{default:!0},$$legacy:!0}),de()}var sr=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(sr||{});const C$=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),wv=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),I$=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),O$=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),b$=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),w$=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),hu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),y$=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),pu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Gl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function L$(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=C$(t,n),o=wv(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=I$(t,n),a=O$(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=b$(t,n),o=w$(t,r);return[i,o]}if(e===d.HIGHLIGHTS&&n!==null){const r=pu(t,n),i=pu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=pu(t,n),o=Gl(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=hu(t,n,e),i=hu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=hu(t,n,e),o=y$(t,r,e);return[i,o]}}function ls(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Xn.update(i=>i)}function Eo(t){switch(t.type){case sr.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ls(e,d.DIGIT,n,!0);break}case sr.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ls(e,d.GIVEN,n,!0);break}case sr.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ls(e,d.REGIONS,n,!0);break}case sr.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ls(e,d.HIGHLIGHTS,n,!0);break}case sr.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ls(e,r,n,!0);break}case sr.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Xn.update(r=>r);break}case sr.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Xn.update(i=>i);break}case sr.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Xn.update(r=>r);break}case sr.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Xn.update(r=>r);break}case sr.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);Xn.update(i=>i);break}}}function A$(t,e){return{execute:()=>{Eo(t)},unExecute:()=>{Eo(e)}}}function Fo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const h=Number(c[u]),g=n.get(h);g!==void 0&&(r.push(_),i.push([g]))}}const o=Gl(r,i);Eo(o)}function S$(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];i.push(E),a(v,m,t[v][m])}function a(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,i[i.length-1].push([v,m]),a(v+1,m,E),a(v-1,m,E),a(v,m+1,E),a(v,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,I]of v)for(const[O,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const S=E+O,k=I+b;if(m.some(([G,F])=>G===S&&F===k))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(c[v].add(m),c[m].add(v));const _=[1,4,7,9],h=new Array(i.length).fill(0);function g(v,m){for(const E of c[v])if(h[E]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of _)if(g(v,m)){h[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,E]of i[v])o[m][E]=h[v];return o}function N$(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const _=i[u];for(let h=0;h<_.length;h++){const g=n.getCell(u,h);if(!g||g.given||r&&!g.given&&g.value===null)continue;const v=_[h];o.push(g),a.push(v)}}const c=wv(o,a);Eo(c)}function x$(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Fo(o,e,r);return}}}function R$(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Fo(o,e,r);return}}}function T$(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const h=c[u];i.push([h])}}const o=Gl(r,i);Eo(o)}function D$(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Fo(n,e,new Map([[0,4],[1,7],[2,9]]))}function k$(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Fo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function G$(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Fo(n,e,new Map([[1,7],[2,4],[3,9]]))}function M$(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Fo(n,e,new Map([[1,7],[2,8]]))}function U$(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let h=0;h<i.length;h++){const g=i[h];for(let v=0;v<g.length-1;v++){const m=e.getCell(h,v),E=e.getCell(h,v+1);if(!m||!E)continue;const I=g[v],O=g[v+1];if(I===O)continue;const b={colorId:c,p1:{r:h,c:v+1},p2:{r:h+1,c:v+1}};u.push(b)}}for(let h=0;h<a;h++)for(let g=0;g<o-1;g++){const v=e.getCell(g,h),m=e.getCell(g+1,h);if(!v||!m)continue;const E=i[g][h],I=i[g+1][h];if(E===I)continue;const O={colorId:c,p1:{r:g+1,c:h},p2:{r:g+1,c:h+1}};u.push(O)}const _=Os(u);Cr(_);return}}function $$(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const h=e.getCell(c,_);if(h)for(const g of e.getOrthogonallyAdjacentCells(h)){if(!g||!(g.r>h.r||g.c>h.c))continue;const v=i[h.r][h.c],m=i[g.r][g.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:h.r+.5,c:h.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(E)}}}const a=Os(o);Cr(a);return}}function F$(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=S$(i);if(!o)return;const a=[],c=[];for(let _=0;_<o.length;_++){const h=o[_];for(let g=0;g<h.length;g++){const v=e.getCell(_,g);if(!v)continue;a.push(v);const m=h[g];c.push([m])}}const u=Gl(a,c);Eo(u);return}}function P$(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const h=e.getCell(c,_);if(!h)continue;const g=i[h.r][h.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:h.r+.5,c:h.c+.5};o.push(m)}}const a=MT(o);Cr(a);return}}function H$(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[h,g]=_,[v,m]=[Math.floor((h-1)/i.nCols),(h-1)%i.nCols],[E,I]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!Rs({r:v,c:m},{r:E,c:I}))continue;const S={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(S)}const a=Os(o);Cr(a)}function B$(t,e){const n=e.puzzle,r=n.grid;Cr(Gd()),N$(t,n),T$(t,r),U$(t,r),D$(t,r),k$(t,r),$$(t,r),R$(t,r),F$(t,r),x$(t,r),P$(t,r),G$(t,r),H$(t,e),M$(t,r)}function W$(){const{subscribe:t,set:e}=Rt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var z$=ce('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function Y$(t,e){ue(e,!1);const n=Ye(),r=()=>he(Us,"$puzzleStore",n),i=()=>he(mn,"$gridStore",n),o=()=>he(b,"$timer",n),a=R(),c=R(),u=R(),_=R();let h=R(!0),g=R(!1),v=R(null),m=R(100),E=R("100"),I=R(null),O=R("IDLE");const b=W$();function S(j){return j===null?"":String(j)}function k(j){const J=Math.floor(j/6e4),le=Math.floor(j%6e4/1e3),Z=Math.floor(j%1e3/100),ie=le.toString().padStart(2,"0");return`${J}:${ie}.${Z}`}function G(){y(g,!0)}function F(j){const J=parseInt(j);typeof J=="number"&&J>=1&&y(m,J)}async function Y(){y(I,0),y(O,"SOLVING...");const j=new n_;Jp();const J=Ov(f(a));j.addFile("test.mzn",J.model_str),b.reset(),b.start(),y(v,j.solve({options:{solver:"chuffed","num-solutions":f(m)}})),f(v).on("solution",le=>{const Z=le.output.json;le.type==="solution"&&f(I)!==null&&y(I,f(I)+1),B$(Z,J)}),f(v).on("error",le=>{y(u,"Solve"),y(O,"ERROR"),console.log(le.message),b.stop(),f(v)&&f(v).cancel()}),f(v).on("warning",le=>{y(O,"WARNING"),console.log(le.message)}),f(v).then(le=>{y(O,le.status),y(u,"Solve"),b.stop()})}function H(){f(v)===null||!f(v).isRunning()?Y():f(v)!==null&&f(v).isRunning()&&(y(O,"IDLE"),y(u,"Solve"),b.stop(),f(v).cancel())}D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i())}),D(()=>{},()=>{y(u,"Solve")}),D(()=>o(),()=>{y(_,o())}),D(()=>f(v),()=>{f(v)&&(f(v)!==null&&f(v).isRunning()?y(u,"Stop"):y(u,"Solve"))}),be(),pe(),Al(t,{get isOpen(){return f(h)},set isOpen(j){y(h,j)},$$slots:{"panel-header":(j,J)=>{Ll(j,{slot:"panel-header",title:"Solver",get isOpen(){return f(h)},set isOpen(le){y(h,le)},$$legacy:!0})},"panel-content":(j,J)=>{var le=z$(),Z=se(le),ie=M(Z,2);E$(ie,{get showModal(){return f(g)},set showModal(Tt){y(g,Tt)},$$legacy:!0});var me=M(ie,2),oe=V(me,!0);W(me);var Ee=M(me,2),Ne=V(Ee,!0);W(Ee);var xe=M(Ee,2),Le=V(xe);an(Le),L(Le,"min",1),L(Le,"max",200),L(Le,"step",1),W(xe);var Oe=M(xe,2),et=V(Oe,!0);te(()=>ot(et,`Solution Count: ${S(f(I))}`)),W(Oe);var tt=M(Oe,2),Gt=V(tt,!0);te(()=>ot(Gt,`Elapsed Time: ${k(f(_))}`)),W(tt);var Pt=M(tt,2),tn=V(Pt,!0);W(Pt),te(()=>{ot(oe,f(u)),ot(Ne,`Max. Solutions: ${f(m)}`),ot(tn,`Status: ${f(O)}`)}),Me("click",Z,G),Me("click",me,H),Vn(Le,()=>f(E),Tt=>y(E,Tt)),Me("input",Le,()=>F(f(E))),N(j,le)}},$$legacy:!0}),de()}var j$=ce('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!> <!></div></div>');function K$(t){var e=j$(),n=V(e),r=V(n);nk(r);var i=M(r,2);Y$(i,{});var o=M(i,2);$2(o,{elementHandlers:$t});var a=M(o,2);W2(a,{elementHandlers:$t});var c=M(a,2);x2(c,{elementHandlers:$t});var u=M(c,2);fD(u,{elementHandlers:$t});var _=M(u,2);ik(_,{}),W(n),W(e),N(t,e)}class Te{constructor(e,n){Ce(this,"x");Ce(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Te(this.x+e.x,this.y+e.y)}subtract(e){return new Te(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Te(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Te(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function V$(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const yn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Te(i.x,i.y)};function za(t,e){const n=Il(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function X$(t,e){const n=Il(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Ya(t,e){const n=Il(t),r=jx(n),o=r.map(_=>new Te(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function ja(t,e){const n=Il(t),r=Kx(n),o=r.map(_=>new Te(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function ms(t,e,n){const r=za(t);if(!r)return null;const i=ja(t);if(!i)return null;const o=Ya(t);if(!o)return null;const a=X$(t);if(!a)return null;let c,u;e===yt.CORNER?(c=o.corner,u="corner"):e===yt.EDGE?(c=i.edge,u="edge"):e===yt.CELL_CENTER?(c=a.cellCenter,u="cell center"):e===yt.CORNER_OR_EDGE?o.dist<i.dist?(c=o.corner,u="corner"):(c=i.edge,u="edge"):e===yt.CORNER_OR_CENTER?o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center"):e===yt.EDGE_OR_CENTER?i.dist<a.dist?(c=i.edge,u="edge"):(c=a.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<a.dist?(c=i.edge,u="edge"):o.dist<i.dist&&o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center");const h=new Te(c.c,c.r).subtract(t).length(),g=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:i.edge,corner:o.corner,dist:h,closest:c,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:g}}class Po{constructor(e=.4){Ce(this,"onTap",null);Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onMove",null);Ce(this,"_prevPoint",null);Ce(this,"_prevCell",null);Ce(this,"_lastPointerDownTime",0);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_tapCount",0);Ce(this,"_lastTapPosition",null);Ce(this,"_lastTapTime",0);Ce(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=yn(e,n);if(!i)return;this._prevPoint=i;const o=r?void 0:this._margin,a=za(i,o);if(!a)return;const c=a.cell;this._prevCell=c,this._lastPointerDownTime=e.timeStamp;const u={event:e,cell:c,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(u)}pointerMove(e,n){const r=yn(e,n);if(!r)return;const i=za(r,this._margin);if(!i)return;const o=i.cell;if(this._prevCell&&je(this._prevCell,o))return;this._prevCell=o,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:o,tapCount:this._tapCount};this.onMove&&this.onMove(a),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=yn(e,n);if(!r)return;const i=za(r,void 0);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Eh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function q$(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Ch(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Ih(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Z$(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Eh(i,e):i.value!==null?q$(i,e):n===d.CORNER_PM&&i.cornerMarks.length?Ch(i,e):n===d.CENTER_PM&&i.centerMarks.length?Ih(i,e):i.cornerMarks.length?Ch(i,e):i.centerMarks.length?Ih(i,e):i.highlights.length?Eh(i,e):r:r}function pi(t,e,n,r=!1){if(!(t&&e))return;const i=Fd(t,e),o=Pd(t,n),a=$s(i,o);vn(a,r)}function Wi(t,e,n,r=!0){if(!(t&&e))return;const i=Pd(t,n),o=Fd(t,e),a=$s(i,o);vn(a,r)}function Vu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=dh(r,t,n),a=dh(r,t,e),c=$s(o,a);vn(c,i)}function Q$(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,h=!1,g;(I=>{I.DYNAMIC="DYNAMIC",I.BULB="BULB",I.BODY="BODY"})(g||(g={}));let v="DYNAMIC";function m(I){_=!1;const O=I.cell;if(kt(I.cell,o)){if(v==="DYNAMIC"){const S=st(mt),k=pT(S,n,O);if(k){const F=ZR(k.arrow,k.matchLineIdx);Vu(k.id,k.arrow,F,n,!0),h=!0;return}const G=rh(S,n,O);if(!G)_=!0,v="BULB",u=null,a=null;else{v="BODY",u=G[0],a=G[1],a=Mu(a,O),Vt(n,u,a);return}}if(v==="BULB"&&!u){u=Lt.uniqueId(),a=Hp(n,[O]),hi(u,a);return}else v==="BULB"&&u&&a?(a=KR(a,O),Vt(n,u,a)):v==="BODY"&&u&&a&&(a=VR(a,O,r==null?void 0:r.allowSelfIntersection),Vt(n,u,a))}}return i.onDragStart=I=>{v="DYNAMIC",m(I)},i.onDrag=I=>{m(I)},i.onDragEnd=()=>{if(h){h=!1;return}v==="BODY"&&u&&a?XR(a)?(a=qR(a),Vt(n,u,a)):(Vu(u,c,a,n),c=a):v==="BULB"&&(pi(u,a,n),c=a),v="DYNAMIC"},i.onTap=I=>{if(_)return;const O=I.cell,b=st(mt);if(rh(b,n,O)){Wi(u,a,n);return}},{pointerDown:I=>{I.button===0&&i.pointerDown(I,t)},pointerMove:I=>{i.pointerMove(I,t)},pointerUp:I=>{i.pointerUp(I,t)},keyDown:()=>{},keyUp:()=>{}}}function J$(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const v=g.cell;kt(g.cell,o)&&(c=jR(c,v,a),Vt(n,u,c))}return i.onDragStart=g=>{u=Lt.uniqueId(),c=Fp(n,[],r==null?void 0:r.defaultValue),hi(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?Mi(n,u):u&&c&&pi(u,c,n,!1),u=null},i.onTap=g=>{const v=g.cell,m=st(mt),E=hT(m,n,v);if(E){const[I,O]=E;Wi(I,O,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function Ir(t){return $i(mt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,element:o});return r})}const Ml=Ir(cw),yv=$i(Ml,t=>{const e=t.find(r=>r.toolId===d.FOG_LIGHTS);return e?e.element:{}}),e8=$i(Ml,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),t8=$i(Ml,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),n8=Ir(hl),r8=Ir(up),i8=Ir(Id),o8=Ir(Od),s8=Ir(dp),a8=Ir(bd),l8=Ir(wd),c8=Ir(_p),u8=Ir(go),Xu=Rt(void 0),qu=Rt(void 0),Zu=Rt(void 0),Qu=Rt(void 0),Ju=Rt(void 0),Ka=Rt(void 0);function d8(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=st(mt),m=g.cell;if(!kt(g.cell,o))return;const I=Qa(v,n,m);if(c===0&&(c=I?2:1),!(r!=null&&r.oppositeConstraintId&&Qa(v,r.oppositeConstraintId,m))){if(I&&c===2){const[O,b]=I;Wi(O,b,n)}else if(c===1){const O=Pu(n,m,r==null?void 0:r.defaultValue),b=Lt.uniqueId();pi(b,O,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)},i.onMove=g=>{if(!kt(g.cell,o)){Xu.set(void 0);return}const m=Pu(n,g.cell,r==null?void 0:r.defaultValue),E=st(Ms);E&&(m.shape={...E}),Xu.set(m)};function _(g){const v=st(zt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!yo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Gs(m,I),Vt(n,E,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class Ul{constructor(e){Ce(this,"onDragStart",null);Ce(this,"onMove",null);Ce(this,"feature");Ce(this,"_prevCoord",null);Ce(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=yn(e,n);if(!r)return;const i=ms(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=yn(e,n);if(!r)return;const i=ms(r,this.feature);if(!i||this._prevCoord&&je(i.closest,this._prevCoord)&&this._prevCellCoord&&je(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function _8(t,e,n,r){const i=(r==null?void 0:r.targets)??yt.CLOSEST,o=new Ul(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=st(mt),E=v.cell,I=v.closest;if(!kt(E,a))return;const b=mT(m,n,I);if(b){Mi(n,b);return}c=Wp(n,I,""),u=Lt.uniqueId(),hi(u,c)}function h(v){const m=st(zt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!yo(v)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(E==null?void 0:E.value,v.key);O!==void 0&&O!==E.value&&(E=Gs(E,O),Vt(n,I,E))}return o.onDragStart=v=>{_(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{h(v)},keyUp:()=>{}}}function f8(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??yt.CORNER_OR_EDGE,o=new Ul(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=st(mt),E=v.cell,I=v.direction,O=po(I);if(kt(E,a))return;const S=Xg(E,O);if(!kt(S,a))return;const G=vT(m,n,E,O);if(G){Mi(n,G);return}c=Fu(n,E,O,""),u=Lt.uniqueId(),hi(u,c)}function h(v){const m=st(zt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!yo(v)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(E==null?void 0:E.value,v.key);O!==void 0&&O!==E.value&&(E=Gs(E,O),Vt(n,I,E))}return o.onDragStart=v=>{_(v)},o.onMove=v=>{if(kt(v.cell,a)){Ka.set(void 0);return}const E=po(v.direction),I=Xg(v.cell,E);if(!kt(I,a)){Ka.set(void 0);return}const b=Fu(n,v.cell,E,"");Ka.set(b)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:v=>{o.pointerMove(v,t)},pointerUp:()=>{},keyDown:v=>{h(v)},keyUp:()=>{}}}function g8(t,e,n,r){const i=new Po,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function h(m){const E=st(mt),I=m.cell;if(kt(m.cell,o)){if(m.event.shiftKey){const b=nh(E,n,I);b&&(c=b[0],a=b[1],Uo({id:c,constraint:a}),_=1)}if(_===0){const b=nh(E,n,I);if(_=b?2:1,b){Wi(b[0],b[1],n);return}}if(!a&&_===1){a=Bp(n,[I]),c=Lt.uniqueId(),hi(c,a);return}else if(a&&c&&_===1){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=JR(a,I,b),Vt(n,c,a);return}}}function g(m){const E=st(zt);if(!E)return;let I=E.constraint;const O=E.id;if(I.value===void 0||!yo(m)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(I==null?void 0:I.value,m.key);b!==void 0&&b!==I.value&&(I=eT(I,b),Vt(n,O,I))}return i.onDragStart=m=>{c=null,a=null,_=0,h(m)},i.onDrag=m=>{h(m)},i.onDragEnd=()=>{c&&a&&pi(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const co=new Po;function Oh(t,e){return t.shiftKey?gs.SELECTING:t.ctrlKey||t.metaKey||e?gs.DYNAMIC:t.altKey?gs.DESELECTING:gs.RESETTING}function ed(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function h8(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=ed(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function vu(t,e,n,r){const i=L$(e,n,r);if(i){const o=i[0],a=i[1],c=A$(o,a),u=zu(t),h=[HT(u,u),c];PT(h)}}function p8(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};co.onTap=m=>{if(m.tapCount!==2)return;const I=kt(m.cell,i)?m.cell:null;if(!I)return;const O=Z$(I,e,n),b=zu(O);uo(b)},co.onDragStart=m=>{const E=kt(m.cell,i),I=st(Yu),O=Oh(m.event,I),b=E?m.cell:null,S=AT(b,O);uo(S)},co.onDrag=m=>{const I=kt(m.cell,i)?m.cell:null,O=NT(I);uo(O)};function o(m){if(!Tw(m))return!1;const E=e.getAllCells().map(O=>({r:O.r,c:O.c})),I=zu(E);return uo(I),!0}function a(m){if(!Uw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=Fw(m);return Gr(E),!0}return m.type==="keyup"?(WT(),!0):!1}function c(m){if(!Mw(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Gr(I),ju(I),!0}else{const E=$w(m.code);return Gr(E),ju(E),!0}}function u(m){if(!Hw(m))return!1;const E=st(Gi).lastCell;let I=null;if(E!==null){const[S,k]=Bw(m),[G,F]=[ih(E.r+k,0,i.nRows-1),ih(E.c+S,0,i.nCols-1)];I={r:G,c:F}}else I={r:0,c:0};const O=Oh(m,!1),b=xT(I,O);return uo(b),!0}function _(m){const E=Gw(m);if(E===void 0)return!1;const I=st(Gi).cells,O=[];if(I.forEach(b=>{const S=e.getCell(b.r,b.c);S&&O.push(S)}),E===null){const{tool:b,cells:S}=h8(O,n);if(S.length)return vu(I,S,b,E),!0}else{let b=ed(O,n,"different",E,!0);if(b.length)return vu(I,b,n,E),!0;if(b=ed(O,n,"equal",E,!0),b.length)return vu(I,b,n,E),!0}return!1}function h(m){return m.repeat?!1:_(m.key)}const g=Lt.throttle(m=>{co.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&co.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){co.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||h(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function v8(t,e,n,r){const i=[Fe.N,Fe.NE,Fe.E,Fe.SE,Fe.S,Fe.SW,Fe.W,Fe.NW],o=new Ul(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(_||(_={}));let h=0;function g(E){const I=st(mt),O=E.cell;if(!kt(E.cell,a))return;E.event.altKey&&(h=2);const S=Qa(I,n,O),k=po(E.direction);if(S){[u,c]=S,c.direction===k||h===2?Wi(u,c,n):(c={...c,direction:k},Vt(n,u,c));return}else h!==2&&(c=Hu(n,O,k),u=Lt.uniqueId(),pi(u,c,n,!0))}function v(E){if(!c||!u||!Dw(E))return;const O=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[O]},Vt(n,u,c)}return o.onDragStart=E=>{h=0,g(E)},o.onMove=E=>{if(!kt(E.cell,a)){qu.set(void 0);return}const O=po(E.direction),b=Hu(n,E.cell,O);qu.set(b)},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:E=>{o.pointerMove(E,t)},pointerUp:()=>{},keyDown:E=>{v(E)},keyUp:()=>{}}}function m8(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function E8(t,e,n,r){const i=new Ul(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function h(v){const m=st(mt),E=v.cell;if(!kt(v.cell,o))return;v.event.altKey&&(_=2);const O=po(v.direction),b=Qa(m,n,E);if(b){if(c=b[0],a=b[1],_===2)Mi(n,b[0]);else{const S=m8(a.directions,O);S.length?(a={...a,directions:S},Vt(n,c,a)):Mi(n,c)}return}else _!==2&&(a=Bu(n,E,O),c=Lt.uniqueId(),hi(c,a))}return i.onDragStart=v=>{_=0,h(v)},i.onMove=v=>{if(!kt(v.cell,o)){Zu.set(void 0);return}const E=po(v.direction),I=Bu(n,v.cell,E);Zu.set(I)},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:v=>{i.pointerMove(v,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class C8{constructor(){Ce(this,"onDragStart",null);Ce(this,"onMove",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"_prevCoord",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=yn(e,n);if(!r)return;const i=ja(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=yn(e,n);if(!r)return;const i=ja(r,this._margin);if(!i||this._prevCoord&&je(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=yn(e,n);if(!r)return;const i=ja(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function I8(t,e,n,r){const i=new C8,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=st(mt),m=g.coord,E=qa(m);if(!E.every(b=>kt(b,o)))return;let O=null;if(c===0&&(O=fT(v,n,E),c=O?2:1),O&&c===2){const b=O[0];Wi(b,O[1],n)}else if(c===1){const b=(r==null?void 0:r.defaultValue)??"",S=$u(n,E,b),k=Lt.uniqueId();pi(k,S,n,!0)}}function _(g){const v=st(zt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!yo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Gs(m,I),Vt(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},i.onMove=g=>{if(!kt(g.coord,o)){Qu.set(void 0);return}const m=qa(g.coord),E=(r==null?void 0:r.defaultValue)??"",I=$u(n,m,E),O=st(Ms);O&&(I.shape={...O}),Qu.set(I)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class O8{constructor(){Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"onMove",null);Ce(this,"_prevCoord",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=yn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=Ya(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){const r=yn(e,n);if(!r)return;const i=Ya(r,this._margin);if(!i||this._prevCoord&&je(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=yn(e,n);if(!r)return;const i=Ya(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function b8(t,e,n,r){const i=new O8,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=st(mt),m=g.coord,E=Xa(m);if(!E.every(b=>kt(b,o)))return;let O=null;if(c===0&&(O=gT(v,n,m),c=O?2:1),O&&c===2){const b=O[0];Wi(b,O[1],n);return}else if(c===1){const b=Uu(n,E,r==null?void 0:r.defaultValue),S=Lt.uniqueId();pi(S,b,n,!0)}}function _(g){const v=st(zt);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!yo(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=Gs(m,I),Vt(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},i.onMove=g=>{if(!kt(g.coord,o)){Ju.set(void 0);return}const m=Xa(g.coord),E=Uu(n,m,r==null?void 0:r.defaultValue),I=st(Ms);I&&(E.shape={...I}),Ju.set(E)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class w8{constructor(){Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"_prevType",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=yn(e,n);if(!r)return;const i=ms(r,yt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=yn(e,n);if(!r)return;const i=ms(r,yt.CLOSEST);if(!i||this._prevCoords&&je(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&Vp(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=yn(e,n);if(!r)return;const i=ms(r,yt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&je(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function y8(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new w8;return r.onTap=o=>{const a=o.coords,c=st(nl),u=st(tl);if(o.type==="cell center"){if(!zx(a,n))return;const h=u.getCellMarker(a);if(h)if(h.marker==="X"){const g={...a,colorId:c,marker:"O"},v=Pa(g),m=Pa(h),E=Ai(v,m);vn(E)}else{const g=lh(a),v=Pa(h),m=Ai(g,v);vn(m)}else{const g={...a,colorId:c,marker:"X"},v=Pa(g),m=lh(a),E=Ai(v,m);vn(E)}}else if(o.type==="edge"){const _=u.getEdgeMarker(a);if(_){const h=ah(a),g=sh(_),v=Ai(h,g);vn(v)}else{const h={...a,colorId:c},g=sh(h),v=ah(a),m=Ai(g,v);vn(m)}}},r.onDrag=o=>{const a=o.coords,c=st(nl);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},_=UT(u);Cr(_)}},r.onDragEnd=()=>{const o=st(tl);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>fo(c,u)));if(a.length){const c=Os(a),u=ch(a),_=Ai(c,u);vn(_)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>fo(c,u)));if(a.length){const c=ch(a),u=Os(a),_=Ai(c,u);vn(_)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function L8(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function A8(t,e){const n=Sp(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function S8(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function N8(t){for(let e=0;;e++){const n=S8(e);if(!t.has(n))return n}}function x8(t,e,n){const r=new Po,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,_="cells2",h;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(h||(h={}));let g=0;function v(E){const I=st(mt),O=E.cell;if(!kt(E.cell,i))return;const S=ET(I,n,O);if(g===0&&(S?(c=S[0],o=S[1],g=2,u=O,_=o.cells2.some(G=>je(G,O))?"cells2":"cells"):g=1),g===1&&c===null){c=Lt.uniqueId();const k=CT(I,n),G=N8(k);o=L8(n,[O],G),hi(c,o);return}else if(g===1&&c&&o){o=A8(o,O),Vt(n,c,o);return}else if(g===2&&c&&o&&u){const k={r:O.r-u.r,c:O.c-u.c},F=(_==="cells2"?o.cells2:o.cells).map(H=>({r:H.r+k.r,c:H.c+k.c}));if(!F.every(H=>kt(H,i)))return;_==="cells"?o={...o,cells:F}:o={...o,cells2:F},u=O,Vt(n,c,o)}}return r.onDragStart=E=>{c=null,o=null,g=0,u=null,v(E)},r.onDrag=E=>{v(E)},r.onDragEnd=()=>{c&&o&&(g===1?pi(c,o,n):g===2&&Vu(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==1&&(Mi(n,c),c=null,o=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function R8(t){if(t.type===ve.SELECTION)return function(n,r,i){return p8(n,r,i)};if(t.type===ve.SINGLE_CELL){let e=function(r,i,o){return d8(r,i,o,n)};const n=t;return e}else if(t.type===ve.SINGLE_CELL_ARROW){let e=function(r,i,o){return v8(r,i,o,n)};const n=t;return e}else if(t.type===ve.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return E8(r,i,o,n)};const n=t;return e}else if(t.type===ve.EDGE){let e=function(r,i,o){return I8(r,i,o,n)};const n=t;return e}else if(t.type===ve.CORNER){let e=function(r,i,o){return b8(r,i,o,n)};const n=t;return e}else if(t.type===ve.LINE){let e=function(r,i,o){return J$(r,i,o,n)};const n=t;return e}else if(t.type===ve.ARROW){let e=function(r,i,o){return Q$(r,i,o,n)};const n=t;return e}else if(t.type===ve.CAGE){let e=function(r,i,o){return g8(r,i,o,n)};const n=t;return e}else{if(t.type===ve.CLONE)return function(n,r,i){return x8(n,r,i)};if(t.type===ve.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return _8(r,i,o,n)};const n=t;return e}else if(t.type===ve.OUTSIDE_DIRECTION){let e=function(r,i,o){return f8(r,i,o,n)};const n=t;return e}else if(t.type===ve.PEN)return function(n,r){return y8(n,r)}}}const Lv=$i([vo,mn,Zt],([t,e,n])=>{const r=ki(n,$t);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?R8(i):void 0;return o?o(t,e,n):void 0});function T8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function D8(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=T8(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],_=JSON.stringify(c),h=JSON.stringify(u);n(_,h)}}return e}function k8(t,e=0,n=!1){const r=[],i=D8(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const h=Array.from(u)[0];let g=JSON.parse(h),v=h;const m=[];do{const E=i.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const I=new Te(_.c,_.r),O=new Te(g.c,g.r);let b=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,S=null,k=null;for(const ie of E){const me=JSON.parse(ie),oe=new Te(me.c,me.r),Ee=O.subtract(I),Ne=oe.subtract(O),xe=Ee.perpDotProduct(Ne);b<xe!=n&&(b=xe,k=me,S=ie)}if(n&&E.size>1&&o.add(v),k===null||S===null)throw new Error("Corner with no adjacencies found");E.delete(S),E.size<=0&&i.delete(v);const G=e*(g.c-_.c),F=e*(k.c-g.c),Y=e*(_.r-g.r),H=e*(g.r-k.r),j=H+b*F,J=G+b*Y,le=new Te(g.c+j,g.r+J),Z=4;o.has(v)?(m.push(new Te(le.x-Z*G,le.y-Z*F)),m.push(new Te(le.x-Z*Y,le.y-Z*H))):m.push(le),_=g,g=k,v=S}while(v!==h);r.push(m)}return r}function Co(t,e=0,n=!1){return k8(t,e,n).map(o=>Ho(o,!0)).join("")}const G8=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5)];function M8(t,e,n=G8){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,_=c/(360/i),h=u/(360/i),g=Math.floor(_)%i,v=Math.ceil(_)%i,m=n[g].lerp(n[v],_%1),E=Math.floor(h)%i,I=Math.ceil(h)%i,O=n[E].lerp(n[I],h%1);r.push(m);for(let S=Math.ceil(_);S<=Math.floor(h);S++)r.push(n[S%i]);r.push(O);const b=new Te(0,0);return r.push(b),r}function Av(t,e,n=new Te(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),h=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Te(_,h));c.push(g)}return c}function Ho(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function ui(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(h=>new Te(h.x,h.y));if(r&&o.length>1){const h=o[o.length-1];for(let v=0;v<o.length-1;v++)if(h.equals(o[v])){o.push(o[v+1]);break}const g=o[0];for(let v=1;v<o.length;v++)if(g.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let h=o[1].subtract(o[0]);h=h.normalise(),h=h.scale(e),o[0]=o[0].add(h)}if(n){const h=o.length;let g=o[h-2].subtract(o[h-1]);g=g.normalise(),g=g.scale(n),o[h-1]=o[h-1].add(g)}}if(!i)return Ho(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let h=2;h<u;h++){const g=o[h-2],v=o[h-1],m=o[h];let E=g.subtract(v).normalise();E=E.scale(i),E=E.add(v);let I=m.subtract(v).normalise();I=I.scale(i),I=I.add(v),c.push(`L${E.x},${E.y} Q ${v.x},${v.y} ${I.x},${I.y}`)}const _=o[u-1];return c.push(`L${_.x},${_.y}`),c.join(" ")}function ol(t,e={}){const n=r_(t);return ui(n,e)}function Qn(t){return new Te(t.c+.5,t.r+.5)}function r_(t){return t.map(n=>Qn(n))}const U8=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5),new Te(0,-.5),new Te(0,.5),new Te(-.5,0),new Te(.5,0)];function $8(t,e){const n=U8[t];return n.subtract(n.scale(e))}function Sv(t,e){const n=[new Te(t.c-e,t.r-e),new Te(t.c+e,t.r+e)],r=[new Te(t.c-e,t.r+e),new Te(t.c+e,t.r-e)];return[n,r].map(o=>Ho(o,!1)).join("")}const F8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function $l(t,e="none"){return F8.get(t)||e}function P8(t,e,n){let r=[];function o(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Te(-.12,-.32),new Te(0,-.4),new Te(.12,-.32)]:a=[new Te(-.12,-.4),new Te(0,-.32),new Te(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const _=new Te(n+.5,e+.5);return u.add(_)})),r}function i_(t,e){const n=[new Te(-t,0),new Te(0,0),new Te(0,t)],i={[Fe.NE]:0,[Fe.E]:Math.PI/4,[Fe.SE]:Math.PI/2,[Fe.S]:3*Math.PI/4,[Fe.SW]:Math.PI,[Fe.W]:5*Math.PI/4,[Fe.NW]:3*Math.PI/2,[Fe.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}function H8(t,e){const r=Ts(e),i=new Te(r.c,r.r).normalise().scale(.3),o=Qn(t),a=o.subtract(i),c=o.add(i);return[a,c]}function B8(t,e){const r=H8(t,e);let i=i_(.2,e);i=i.map(u=>u.add(r[1]));const o=ui(r),a=ui(i);return o+a}function W8(t,e){const r=Ts(e),i=new Te(r.c,r.r),a=Qn(t).add(i.scale(.4));return[a.subtract(i.normalise().scale(.2)),a]}function mu(t,e){const r=W8(t,e);let i=i_(.1,e);i=i.map(u=>u.add(r[1]));const o=ui(r),a=ui(i);return o+a}var z8=ne('<path fill="none" stroke-linecap="round"></path>'),Y8=ne('<path fill="none" stroke-linecap="round"></path>'),j8=ne('<!><!><path fill="none" stroke-linecap="round"></path>',1);function bh(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R();let v=U(e,"tool",8),m=U(e,"c_id",8,void 0);D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>(Q(v()),jg),()=>{y(o,dn(v().toolId,$t)??jg)}),D(()=>(Q(v()),f(o)),()=>{y(a,v().shape??f(o))}),D(()=>f(a),()=>{y(c,f(a).strokeWidth??.1)}),D(()=>f(a),()=>{y(u,f(a).stroke??"black")}),D(()=>f(a),()=>{y(_,{...f(a),stroke:"var(--grid-background-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.05:.05})}),D(()=>f(a),()=>{y(h,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.07:.07})}),D(()=>Q(v()),()=>{y(g,B8(v().cell,v().direction))}),be(),pe();var E=j8(),I=se(E);{var O=G=>{var F=z8();te(()=>{L(F,"d",f(g)),L(F,"stroke",f(_).stroke),L(F,"stroke-width",f(_).strokeWidth)}),N(G,F)};re(I,G=>{G(O)})}var b=M(I);{var S=G=>{var F=Y8();te(()=>{L(F,"d",f(g)),L(F,"stroke",f(h).stroke),L(F,"stroke-width",f(h).strokeWidth)}),N(G,F)};re(b,G=>{m()&&m()===f(i)&&G(S)})}var k=M(b);te(()=>{L(k,"d",f(g)),L(k,"stroke",f(u)),L(k,"stroke-width",f(c))}),N(t,E),de()}var K8=ne('<g class="single-cell-arrow-tool"><!></g>'),V8=ne('<g class="single-cell-arrow-tool-preview"><!></g>');function Nv(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Se(),o=se(i);{var a=u=>{var _=K8(),h=V(_);bh(h,{get tool(){return n()},get c_id(){return r()}}),W(_),te(()=>L(_,"data-id",`${r()}`)),N(u,_)},c=u=>{var _=V8();L(_,"opacity",.5);var h=V(_);bh(h,{get tool(){return n()}}),W(_),N(u,_)};re(o,u=>{r()!==void 0?u(a):u(c,!1)})}N(t,i)}var X8=ne('<path class="cursor svelte-zsq70u"></path>');function q8(t,e){ue(e,!1);const n=Ye(),r=()=>he(Zt,"$toolStore",n),i=()=>he(Gi,"$selectionStore",n),o=R(),a=R(),c=.25;function u(h){if(!h)return"";const[g,v]=[h.c,h.r];return`M${g},${v}L${g+c},${v}L${g},${v+c}Z`}D(()=>r(),()=>{y(o,yd(r()))}),D(()=>i(),()=>{y(a,u(i().lastCell))}),be(),pe();var _=X8();te(()=>{L(_,"d",f(a)),L(_,"visibility",f(o)?"visible":"hidden")}),N(t,_),de()}var Z8=ne('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function Q8(t,e){ue(e,!1);let n=U(e,"gridShape",8);pe();var r=Z8(),i=V(r);L(i,"x",0),L(i,"y",0),W(r),te(()=>{L(i,"width",n().nCols),L(i,"height",n().nRows)}),N(t,r),de()}var J8=ne('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),eF=ne('<g class="grid-lines"></g>');function tF(t,e){ue(e,!1);const n=Ye(),r=()=>he(mn,"$gridStore",n),i=R();D(()=>r(),()=>{y(i,r().getAllCells())}),be(),pe();var o=eF();lt(o,5,()=>f(i),It,(a,c)=>{var u=J8();L(u,"width",1),L(u,"height",1),te(()=>{L(u,"x",f(c).c),L(u,"y",f(c).r)}),N(a,u)}),W(o),N(t,o),de()}var nF=ne('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),rF=ne('<g class="regions-border"></g>');function iF(t,e){ue(e,!1);const n=Ye(),r=()=>he(Xn,"$cellsStore",n),i=R(),o=R();function a(u,_){return u.filter(v=>v.region===_).map(v=>({r:v.r,c:v.c}))}D(()=>r(),()=>{y(i,r())}),D(()=>f(i),()=>{y(o,new Set(f(i).map(u=>u.region).filter(u=>u!==null)))}),be(),pe();var c=rF();lt(c,5,()=>f(o),It,(u,_)=>{var h=nF();te(()=>L(h,"d",Co(a(f(i),f(_)),0,!1))),te(()=>L(h,"id",`region-${f(_)??""}`)),N(u,h)}),W(c),N(t,c),de()}var oF=ne('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function sF(t,e){ue(e,!1);const n=Ye(),r=()=>he(Gi,"$selectionStore",n),i=()=>he(Zt,"$toolStore",n),o=R(),a=R(),c=R(),u=R(),_=R(),h=R();let g=U(e,"boundingBox",8);const v=.06,m=.05,E="#080808",I="#b2b2b2";D(()=>Q(g()),()=>{y(o,g().x)}),D(()=>Q(g()),()=>{y(a,g().y)}),D(()=>r(),()=>{y(c,r().cells)}),D(()=>f(c),()=>{y(u,Co(f(c),0))}),D(()=>f(c),()=>{y(_,Co(f(c),v))}),D(()=>i(),()=>{y(h,yd(i()))}),be(),pe();var O=oF(),b=V(O),S=V(b);L(S,"stdDeviation",m),Ri(),W(b);var k=M(b),G=V(k);L(G,"fill",I);var F=M(G);L(F,"fill",E),W(k);var Y=M(k);W(O),te(()=>{L(O,"visibility",f(h)?"visible":"hidden"),L(k,"x",f(o)),L(k,"y",f(a)),L(G,"x",f(o)),L(G,"y",f(a)),L(F,"d",f(_)),L(Y,"d",f(u))}),N(t,O),de()}var aF=ne('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function lF(t,e){ue(e,!1);const n=R(),r=R();let i=U(e,"grid",8);D(()=>Q(i()),()=>{y(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>f(n),()=>{y(r,Co(f(n),0))}),be(),pe();var o=aF(),a=V(o);W(o),te(()=>L(a,"d",f(r))),N(t,o),de()}function cF(t,e){const n=t.getRow(e.r);return new Set(n)}function uF(t,e){const n=t.getCol(e.c);return new Set(n)}function dF(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function _F(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function fF(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function gF(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function hF(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function pF(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function vF(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((v,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function mF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function EF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function CF(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(_F(t,i))),e.get(d.ANTIKING)&&(r=r.union(fF(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(gF(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(pF(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(hF(t,i)))),r}function Eu(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=EF(t,n,c);i=new Set([...i,...u])}return i}function IF(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],_=vF(t,i,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=mF(t,i,u);r=new Set([...r,..._])}return r=Eu(t,e,i,d.KILLER_CAGE,r),r=Eu(t,e,i,d.PARITY_BALANCE_CAGE,r),r=Eu(t,e,i,d.SPOTLIGHT_CAGE,r),r}function xv(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...cF(i,e),...uF(i,e),...dF(i,e)])),n=new Set([...n,...CF(i,r,e)]),n=new Set([...n,...IF(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function OF(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(xv(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var bF=ne('<tspan class="svelte-xct9ah"> </tspan>'),wF=ne('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function yF(t,e){ue(e,!1);const n=R();let r=U(e,"cell",8),i=U(e,"seen_values",8);const o=.25;function a(h){return i().find(v=>v===h)!==void 0}D(()=>Q(r()),()=>{y(n,Qn({r:r().r,c:r().c}))}),be(),pe();var c=Se(),u=se(c);{var _=h=>{var g=wF(),v=V(g);L(v,"font-size",o),lt(v,5,()=>r().centerMarks,It,(m,E)=>{var I=bF();const O=qe(()=>a(f(E)));te(()=>wt(I,"conflict",f(O)));var b=V(I,!0);W(I),te(()=>ot(b,f(E))),N(m,I)}),W(v),W(g),te(()=>{L(v,"x",f(n).x),L(v,"y",f(n).y),L(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),N(h,g)};re(u,h=>{r().centerMarks.length&&h(_)})}N(t,c),de()}var LF=ne('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),AF=ne('<g class="corner-marks-group"></g>');function SF(t,e){ue(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const i=.25,o=.28;function a(g){const v=g.cornerMarks.slice(0,8),m=Qn({r:g.r,c:g.c});return v.map((E,I)=>{const O=$8(I,o);return{pos:m.add(O),value:E,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}pe();var u=Se(),_=se(u);{var h=g=>{var v=AF();lt(v,5,()=>a(n()),It,(m,E)=>{let I=()=>f(E).pos,O=()=>f(E).value;var b=LF();L(b,"font-size",i);const S=qe(()=>c(O()));var k=V(b,!0);W(b),te(()=>{L(b,"x",I().x),L(b,"y",I().y),wt(b,"conflict",f(S)),ot(k,O())}),N(m,b)}),W(v),N(g,v)};re(_,g=>{n().cornerMarks.length&&g(h)})}N(t,u),de()}var NF=ne('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),xF=ne('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),RF=ne("<!><!>",1),TF=ne('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function DF(t,e){ue(e,!1);const n=Ye(),r=()=>he(di,"$settingsStore",n),i=()=>he(Us,"$puzzleStore",n),o=()=>he(Zt,"$toolStore",n),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R();let m=U(e,"cell",8);const E=.8,I=400;function O(G,F){if(!G)return[];let H=[...xv(f(h),F.toCoords())].map(j=>j.value).filter(j=>j!==null);return H=[...new Set(H)],H}D(()=>Q(m()),()=>{y(a,m().value)}),D(()=>Q(m()),()=>{y(c,m().given)}),D(()=>Q(m()),()=>{y(u,Qn({r:m().r,c:m().c}))}),D(()=>r(),()=>{y(_,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{y(h,i())}),D(()=>r(),()=>{y(g,r().showSolution)}),D(()=>(f(_),Q(m())),()=>{y(v,O(f(_),m()))}),be(),pe();var b=Se(),S=se(b);{var k=G=>{var F=TF(),Y=V(F);{var H=J=>{var le=Se(),Z=se(le);{var ie=me=>{var oe=NF();L(oe,"font-size",E),L(oe,"font-weight",I);var Ee=V(oe,!0);W(oe),te(()=>{L(oe,"x",f(u).x),L(oe,"y",f(u).y),ot(Ee,m().region)}),N(me,oe)};re(Z,me=>{m().region!==null&&me(ie)})}N(J,le)},j=J=>{var le=Se(),Z=se(le);{var ie=oe=>{var Ee=xF();L(Ee,"font-size",E),L(Ee,"font-weight",I);var Ne=V(Ee,!0);W(Ee),te(()=>{L(Ee,"x",f(u).x),L(Ee,"y",f(u).y),wt(Ee,"given",f(c)),ot(Ne,f(a))}),N(oe,Ee)},me=oe=>{var Ee=RF(),Ne=se(Ee);SF(Ne,{get cell(){return m()},get seen_values(){return f(v)}});var xe=M(Ne);yF(xe,{get cell(){return m()},get seen_values(){return f(v)}}),N(oe,Ee)};re(Z,oe=>{f(a)!==null?oe(ie):oe(me,!1)},!0)}N(J,le)};re(Y,J=>{o()===d.REGIONS?J(H):J(j,!1)})}W(F),te(()=>wt(F,"hide-given",m().given)),N(G,F)};re(S,G=>{f(g)||G(k)})}N(t,b),de()}var kF=ne("<path></path>"),GF=ne('<g class="highlights-group"></g>');function MF(t,e){ue(e,!1);const n=Ye(),r=()=>he(Zt,"$toolStore",n);let i=U(e,"cell",8);function o(_){const h=Qn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let I=M8(E,g);I=I.map(b=>b.add(h));const O=Ho(I,!0);return{colorId:m,d:O}})}pe();var a=Se(),c=se(a);{var u=_=>{var h=Se(),g=se(h);{var v=m=>{var E=GF();lt(E,5,()=>o(i()),It,(I,O)=>{let b=()=>f(O).colorId,S=()=>f(O).d;var k=kF();te(()=>{ys(k,`highlight-wedge color-${b()??""} svelte-1ynpdsm`),L(k,"d",S())}),N(I,k)}),W(E),N(m,E)};re(g,m=>{i().highlights.length&&m(v)})}N(_,h)};re(c,_=>{r()!==d.REGIONS&&_(u)})}N(t,a),de()}var UF=ne('<path class="cell-marker" fill="none"></path>'),$F=ne('<circle fill="none" opacity="0.9"></circle>');function FF(t,e){ue(e,!1);const n=R(),r=R();let i=U(e,"marker",8);const o=.3,a=.08;D(()=>Q(i()),()=>{y(n,Sv(i(),o))}),D(()=>Q(i()),()=>{y(r,$l(i().colorId,"black"))}),be(),pe();var c=Se(),u=se(c);{var _=g=>{var v=UF();L(v,"stroke-width",a),te(()=>{L(v,"d",f(n)),L(v,"stroke",f(r))}),N(g,v)},h=g=>{var v=$F();L(v,"r",o),L(v,"stroke-width",a),te(()=>{ys(v,`cell-marker color-${i().colorId??""}`),L(v,"cx",i().c),L(v,"cy",i().r),L(v,"stroke",f(r))}),N(g,v)};re(u,g=>{i().marker==="X"?g(_):g(h,!1)})}N(t,c),de()}var PF=ne('<g class="cell-markers"></g>');function HF(t,e){let n=U(e,"markers",8);var r=PF();lt(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{FF(i,{get marker(){return f(o)}})}),W(r),N(t,r)}var BF=ne('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function WF(t,e){ue(e,!1);const n=R();let r=U(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(h=>[new Te(h.p1.c,h.p1.r),new Te(h.p2.c,h.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?$l(_,"black"):"darkred"}D(()=>Q(r()),()=>{y(n,Ho(o(r().draftLine)))}),be(),pe();var c=BF();te(()=>L(c,"stroke",a(r()))),L(c,"stroke-width",i),L(c,"opacity",.5),te(()=>L(c,"d",f(n))),N(t,c),de()}var zF=ne('<path fill="none" opacity="0.9"></path>');function YF(t,e){ue(e,!1);const n=R(),r=R();let i=U(e,"marker",8);const o=.08,a=.04;D(()=>Q(i()),()=>{y(n,Sv(i(),o))}),D(()=>Q(i()),()=>{y(r,$l(i().colorId,"black"))}),be(),pe();var c=zF();L(c,"stroke-width",a),te(()=>{L(c,"d",f(n)),ys(c,`edge-marker color-${i().colorId??""}`),L(c,"stroke",f(r))}),N(t,c),de()}var jF=ne('<g class="edge-markers"></g>');function KF(t,e){let n=U(e,"markers",8);var r=jF();lt(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{YF(i,{get marker(){return f(o)}})}),W(r),N(t,r)}var VF=ne('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),XF=ne('<g class="line-markers svelte-yha19m"></g>');function qF(t,e){ue(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return $l(c,"black")}pe();var a=XF();lt(a,5,n,c=>i(c),(c,u)=>{var _=VF();L(_,"stroke-width",r),te(()=>L(_,"stroke",o(f(u).colorId))),te(()=>{L(_,"x1",f(u).p1.c),L(_,"y1",f(u).p1.r),L(_,"x2",f(u).p2.c),L(_,"y2",f(u).p2.r),ys(_,`line-marker color-${f(u).colorId??""} svelte-yha19m`)}),N(c,_)}),W(a),N(t,a),de()}var ZF=ne('<g class="pen-tool"><!><!><!><!></g>');function QF(t,e){ue(e,!1);const n=Ye(),r=()=>he(tl,"$penToolStore",n),i=R();D(()=>r(),()=>{y(i,{draftLine:r().draftLine,mode:r().mode})}),be(),pe();var o=ZF(),a=V(o);qF(a,{get lineMarkers(){return r().lineMarkers}});var c=M(a);KF(c,{get markers(){return r().edgeMarkers}});var u=M(c);HF(u,{get markers(){return r().cellMarkers}});var _=M(u);WF(_,{get draftLineMarker(){return f(i)}}),W(o),N(t,o),de()}var JF=ne("<path></path>");function kr(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R();let h=U(e,"cells",8),g=U(e,"shape",8,Ld);const v="square";D(()=>Q(g()),()=>{y(n,g().inset??.06)}),D(()=>Q(g()),()=>{y(r,g().stroke??"black")}),D(()=>Q(g()),()=>{y(i,g().strokeWidth??.03)}),D(()=>Q(g()),()=>{y(o,g().strokeDasharray??.08)}),D(()=>Q(g()),()=>{y(a,g().fill??"none")}),D(()=>Q(g()),()=>{y(c,g().connectDiag??!0)}),D(()=>(Q(h()),f(n),f(c)),()=>{y(u,Co(h(),f(n),f(c)))}),D(()=>Q(g()),()=>{y(_,g().strokeLinejoin??"miter")}),be(),pe();var m=JF();L(m,"stroke-linecap",v),te(()=>{L(m,"d",f(u)),L(m,"stroke",f(r)),L(m,"stroke-width",f(i)),L(m,"fill",f(a)),L(m,"stroke-dasharray",f(o)),L(m,"stroke-linejoin",f(_))}),N(t,m),de()}var e4=ne('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function t4(t,e){ue(e,!1);const n=Ye(),r=()=>he(Gi,"$selectionStore",n),i=()=>he(di,"$settingsStore",n),o=()=>he(Us,"$puzzleStore",n),a=()=>he(Zt,"$toolStore",n),c=R(),u=R(),_=R(),h=R(),g={type:B.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(O,b){return O.length?OF(f(_),O):[]}D(()=>r(),()=>{y(c,r().cells)}),D(()=>i(),()=>{y(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{y(_,o())}),D(()=>a(),()=>{y(h,yd(a()))}),be(),pe();var m=Se(),E=se(m);{var I=O=>{var b=e4(),S=V(b),k=qe(()=>v(f(c),f(_)));kr(S,{get cells(){return f(k)},shape:g}),W(b),N(O,b)};re(E,O=>{f(u)&&f(h)&&O(I)})}N(t,m),de()}function Fl(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...Yp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function n4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Fl(r))}return new Set(e)}function r4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Fl(r))}return new Set(e)}function i4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Fl(r))}return new Set(e)}function o4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function s4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function a4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function l4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Fl(i);o.length&&e.push(...o)}return new Set(e)}function c4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...n4(t),...r4(t),...i4(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(o4(t))),e.get(d.ANTIKING)&&(n=n.union(s4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(a4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(l4(t))),n}function u4(t,e){return[...new Set([...c4(t,e)])]}var d4=ne('<rect class="conflict svelte-4mp6ok"></rect>'),_4=ne('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function f4(t,e){ue(e,!1);const n=Ye(),r=()=>he(di,"$settingsStore",n),i=()=>he(mn,"$gridStore",n),o=()=>he(Br,"$globalConstraintsStore",n),a=()=>he(Xn,"$cellsStore",n),c=R(),u=R(),_=R(),h=R();B.CAGE;function g(I){return u4(f(u),f(_)).map(S=>S.toCoords())}D(()=>r(),()=>{y(c,r().checkConflicts)}),D(()=>i(),()=>{y(u,i())}),D(()=>o(),()=>{y(_,o())}),D(()=>a(),()=>{y(h,a())}),be(),pe();var v=Se(),m=se(v);{var E=I=>{var O=_4();lt(O,5,()=>g(f(h)),It,(b,S)=>{var k=d4();L(k,"width",1),L(k,"height",1),te(()=>{L(k,"x",f(S).c),L(k,"y",f(S).r)}),N(b,k)}),W(O),N(I,O)};re(m,I=>{f(c)&&I(E)})}N(t,v),de()}var g4=ne('<line class="diag svelte-ylotlw"></line>'),h4=ne('<line class="antidiag svelte-ylotlw"></line>'),p4=ne('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),v4=ne('<line class="diag svelte-ylotlw"></line>'),m4=ne('<line class="antidiag svelte-ylotlw"></line>'),E4=ne('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),C4=ne('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function I4(t,e){ue(e,!1);const n=Ye(),r=()=>he(Br,"$globalConstraintsStore",n),i=()=>he(mn,"$gridStore",n),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R(),m=R(),E=R(),I=R(),O=R(),b=0,S=0,k=0,G=0;D(()=>r(),()=>{y(o,r())}),D(()=>(f(o),d),()=>{y(a,!!f(o).get(d.POSITIVE_DIAGONAL))}),D(()=>(f(o),d),()=>{y(c,!!f(o).get(d.NEGATIVE_DIAGONAL))}),D(()=>(f(o),d),()=>{y(u,!!f(o).get(d.NEGATIVE_ANTIDIAGONAL))}),D(()=>(f(o),d),()=>{y(_,!!f(o).get(d.POSITIVE_ANTIDIAGONAL))}),D(()=>(f(o),d),()=>{y(h,!!f(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),D(()=>(f(o),d),()=>{y(g,!!f(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),D(()=>i(),()=>{y(v,i())}),D(()=>f(v),()=>{y(m,f(v).nCols)}),D(()=>f(v),()=>{y(E,f(v).nRows)}),D(()=>f(v),()=>{y(I,f(v).nCols)}),D(()=>f(v),()=>{y(O,f(v).nRows)}),be(),pe();var F=C4(),Y=V(F);{var H=Le=>{var Oe=g4();L(Oe,"x1",b),L(Oe,"y1",S),te(()=>{L(Oe,"x2",f(I)),L(Oe,"y2",f(O))}),N(Le,Oe)};re(Y,Le=>{f(c)&&Le(H)})}var j=M(Y);{var J=Le=>{var Oe=h4();L(Oe,"x1",b),L(Oe,"y1",S),te(()=>{L(Oe,"x2",f(I)),L(Oe,"y2",f(O))}),N(Le,Oe)};re(j,Le=>{f(u)&&Le(J)})}var le=M(j);{var Z=Le=>{var Oe=p4();L(Oe,"x1",b),L(Oe,"y1",S),te(()=>{L(Oe,"x2",f(I)),L(Oe,"y2",f(O))}),N(Le,Oe)};re(le,Le=>{f(h)&&Le(Z)})}var ie=M(le);{var me=Le=>{var Oe=v4();L(Oe,"x2",G),L(Oe,"y1",k),te(()=>{L(Oe,"x1",f(m)),L(Oe,"y2",f(E))}),N(Le,Oe)};re(ie,Le=>{f(a)&&Le(me)})}var oe=M(ie);{var Ee=Le=>{var Oe=m4();L(Oe,"x2",G),L(Oe,"y1",k),te(()=>{L(Oe,"x1",f(m)),L(Oe,"y2",f(E))}),N(Le,Oe)};re(oe,Le=>{f(_)&&Le(Ee)})}var Ne=M(oe);{var xe=Le=>{var Oe=E4();L(Oe,"x2",G),L(Oe,"y1",k),te(()=>{L(Oe,"x1",f(m)),L(Oe,"y2",f(E))}),N(Le,Oe)};re(Ne,Le=>{f(g)&&Le(xe)})}W(F),N(t,F),de()}var O4=ne('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1cxyg7s"><use class="fog-edge-1 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-2 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-3 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-4 svelte-1cxyg7s" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1cxyg7s"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1cxyg7s"><rect class="fog-mask-white svelte-1cxyg7s"></rect><g class="fog-mask-black svelte-1cxyg7s"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1cxyg7s"></rect><rect class="fog-mask-black svelte-1cxyg7s" mask="url(#fog-mask-fog)"></rect></mask></defs>');function b4(t,e){ue(e,!1);const n=Ye(),r=()=>he(ev,"$showFogStore",n),i=()=>he(wl,"$solutionStore",n),o=()=>he(mn,"$gridStore",n),a=()=>he(yv,"$fogLightsStore",n),c=R(),u=R(),_=R(),h=R(),g=R(),v=R();let m=U(e,"boundingBox",8),E=U(e,"gridShape",8);function I(oe){const Ee=[];if(!oe)return Ee;for(const Ne of Object.entries(oe)){const xe=Ne[1].cell,Le=f(_).getCell(xe.r,xe.c);Le&&Ee.push(Le)}return Ee}function O(oe,Ee){const Ne=I(Ee);return[...oe.getAllCells().filter(et=>!Ne.includes(et))].map(et=>et.toCoords())}D(()=>r(),()=>{y(c,r())}),D(()=>i(),()=>{y(u,i())}),D(()=>o(),()=>{y(_,o())}),D(()=>a(),()=>{y(h,a())}),D(()=>(f(_),f(h)),()=>{y(g,O(f(_),f(h)))}),D(()=>f(g),()=>{y(v,Co(f(g),0))}),be(),pe();var b=O4(),S=V(b),k=V(S);W(S);var G=M(S),F=V(G);L(F,"stroke-width",.4);var Y=M(F);L(Y,"stroke-width",.3);var H=M(Y);L(H,"stroke-width",.2);var j=M(H);L(j,"stroke-width",.1),Ri(),W(G);var J=M(G),le=V(J);Ri(),W(J);var Z=M(J),ie=V(Z),me=M(ie);L(me,"x",0),L(me,"y",0),W(Z),W(b),te(()=>{L(k,"d",f(v)),wt(G,"disabled",!f(c)),wt(J,"disabled",!f(c)),L(le,"x",m().x),L(le,"y",m().y),L(le,"width",m().width),L(le,"height",m().height),L(ie,"x",m().x),L(ie,"y",m().y),L(ie,"width",m().width),L(ie,"height",m().height),L(me,"width",E().nCols),L(me,"height",E().nRows)}),N(t,b),de()}var w4=ne('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function y4(t,e){ue(e,!1);const n=Ye(),r=()=>he(ev,"$showFogStore",n),i=R();let o=U(e,"gridShape",8);D(()=>r(),()=>{y(i,r())}),D(()=>f(i),()=>{console.log(f(i))}),be(),pe();var a=w4(),c=V(a);L(c,"x",0),L(c,"y",0),W(a),te(()=>{L(a,"visibility",f(i)?"visible":"hidden"),L(c,"width",o().nCols),L(c,"height",o().nRows)}),N(t,a),de()}var L4=ne('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function A4(t,e){ue(e,!1);const n=R();let r=U(e,"r",8),i=U(e,"c",8),o=U(e,"val",8);const a=.8,c=400;D(()=>(Q(r()),Q(i())),()=>{y(n,Qn({r:r(),c:i()}))}),be(),pe();var u=Se(),_=se(u);{var h=g=>{var v=L4();L(v,"font-size",a),L(v,"font-weight",c);var m=V(v,!0);W(v),te(()=>{L(v,"x",f(n).x),L(v,"y",f(n).y),ot(m,o())}),N(g,v)};re(_,g=>{o()!==null&&g(h)})}N(t,u),de()}var S4=ne('<g class="solution-layer"></g>');function N4(t,e){ue(e,!1);const n=Ye(),r=()=>he(wl,"$solutionStore",n),i=()=>he(di,"$settingsStore",n),o=()=>he(bl,"$gameModeStore",n),a=R(),c=R(),u=R();D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i().showSolution)}),D(()=>o(),()=>{y(u,o())}),be(),pe();var _=Se(),h=se(_);{var g=v=>{var m=S4();lt(m,5,()=>f(a),It,(E,I,O)=>{var b=Se(),S=se(b);lt(S,1,()=>f(I),It,(k,G,F)=>{A4(k,{r:O,c:F,get val(){return f(G)}})}),N(E,b)}),W(m),N(v,m)};re(h,v=>{f(a)&&f(c)&&f(u)===Io.SETTING&&v(g)})}N(t,_),de()}var x4=ne('<g class="element-group"></g>'),R4=ne('<g mask="url(#fog-mask-fog)"></g>');function hr(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),i=U(e,"Component",8);var o=R4();lt(o,5,n,It,(a,c)=>{let u=()=>f(c).toolId,_=()=>f(c).element;var h=x4();lt(h,5,()=>Object.entries(_()),g=>g[0],(g,v)=>{i()(g,{get tool(){return f(v)[1]},get c_id(){return f(v)[0]}})}),W(h),te(()=>L(h,"data-toolId",u())),N(a,h)}),W(o),te(()=>ys(o,Jb(r()))),N(t,o)}var T4=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),D4=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),k4=ne('<g class="quadruple-text"><!></g>');function G4(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R();let c=U(e,"cornerTool",8);const u=c().cells,_=new Te(u[u.length-1].c,u[u.length-1].r),h=dn(c().toolId,$t)??Nu;D(()=>Q(c()),()=>{y(n,c().value)}),D(()=>Q(c()),()=>{y(r,c().shape??h)}),D(()=>f(r),()=>{var E;y(i,((E=f(r))==null?void 0:E.fontSize)??.2)}),D(()=>f(r),()=>{var E;y(o,((E=f(r))==null?void 0:E.fontColor)??"black")}),D(()=>f(n),()=>{var E;y(a,f(n)?(E=f(n))==null?void 0:E.split(","):[])}),be(),pe();var g=Se(),v=se(g);{var m=E=>{var I=k4(),O=V(I);{var b=k=>{var G=T4(),F=V(G,!0);te(()=>ot(F,f(a).join(" "))),W(G),te(()=>{L(G,"x",_.x),L(G,"y",_.y),L(G,"font-size",f(i)),L(G,"fill",f(o))}),N(k,G)},S=k=>{var G=D4(),F=se(G),Y=V(F,!0);te(()=>ot(Y,f(a).slice(0,2).join(" "))),W(F);var H=M(F),j=V(H,!0);te(()=>ot(j,f(a).slice(2).join(" "))),W(H),te(()=>{L(F,"x",_.x),L(F,"y",_.y),L(F,"dy",-f(i)/2),L(F,"font-size",f(i)),L(F,"fill",f(o)),L(H,"x",_.x),L(H,"y",_.y),L(H,"dy",f(i)/2),L(H,"font-size",f(i)),L(H,"fill",f(o))}),N(k,G)};re(O,k=>{f(a).length<=2?k(b):k(S,!1)})}W(I),te(()=>L(I,"data-count",f(a).length)),N(E,I)};re(v,E=>{f(n)&&E(m)})}N(t,g),de()}var M4=ne("<circle></circle>");function ar(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=U(e,"x",8),_=U(e,"y",8),h=U(e,"shape",8);D(()=>Q(h()),()=>{y(n,h().r??.35)}),D(()=>Q(h()),()=>{y(r,h().stroke??"black")}),D(()=>Q(h()),()=>{var v;y(i,(v=h())==null?void 0:v.opacity)}),D(()=>Q(h()),()=>{y(o,h().strokeWidth??.02)}),D(()=>Q(h()),()=>{y(a,h().fill??"none")}),D(()=>Q(h()),()=>{y(c,h().strokeDasharray??0)}),be(),pe();var g=M4();te(()=>{L(g,"cx",u()),L(g,"cy",_()),L(g,"r",f(n)),L(g,"stroke",f(r)),L(g,"stroke-width",f(o)),L(g,"fill",f(a)),L(g,"opacity",f(i)),L(g,"stroke-dasharray",f(c))}),N(t,g),de()}var U4=ne("<ellipse></ellipse>");function $4(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R();let _=U(e,"cx",8),h=U(e,"cy",8),g=U(e,"shape",8);D(()=>Q(g()),()=>{y(n,g().width??.5)}),D(()=>Q(g()),()=>{y(r,g().height??.5)}),D(()=>Q(g()),()=>{y(i,g().stroke??"black")}),D(()=>Q(g()),()=>{var m;y(o,(m=g())==null?void 0:m.opacity)}),D(()=>Q(g()),()=>{y(a,g().strokeWidth??.02)}),D(()=>Q(g()),()=>{y(c,g().fill??"none")}),D(()=>Q(g()),()=>{y(u,g().angle??0)}),be(),pe();var v=U4();te(()=>{L(v,"cx",_()),L(v,"cy",h()),L(v,"rx",f(n)/2),L(v,"ry",f(r)/2),L(v,"stroke",f(i)),L(v,"stroke-width",f(a)),L(v,"fill",f(c)),L(v,"opacity",f(o)),L(v,"transform",`rotate(${f(u)}, ${_()}, ${h()} )`)}),N(t,v),de()}var F4=ne("<polygon></polygon>");function sl(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R();let h=U(e,"cx",8),g=U(e,"cy",8),v=U(e,"shape",8);D(()=>Q(v()),()=>{y(n,v().n??3)}),D(()=>Q(v()),()=>{y(r,v().r??.5)}),D(()=>(f(r),f(n),Q(h()),Q(g())),()=>{y(i,Av(f(r),f(n),new Te(h(),g())))}),D(()=>f(i),()=>{y(o,f(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>Q(v()),()=>{y(a,v().stroke??"black")}),D(()=>Q(v()),()=>{y(c,v().strokeWidth??.02)}),D(()=>Q(v()),()=>{y(u,v().fill??"none")}),D(()=>Q(v()),()=>{y(_,v().angle??0)}),be(),pe();var m=F4();te(()=>{L(m,"points",f(o)),L(m,"stroke",f(a)),L(m,"stroke-width",f(c)),L(m,"fill",f(u)),L(m,"transform",`rotate(${f(_)}, ${h()}, ${g()} )`)}),N(t,m),de()}var P4=ne("<rect></rect>");function H4(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R();let _=U(e,"cx",8),h=U(e,"cy",8),g=U(e,"shape",8);D(()=>Q(g()),()=>{y(n,g().width??.5)}),D(()=>Q(g()),()=>{y(r,g().height??.5)}),D(()=>(Q(_()),f(n)),()=>{y(i,_()-f(n)/2)}),D(()=>(Q(h()),f(r)),()=>{y(o,h()-f(r)/2)}),D(()=>Q(g()),()=>{y(a,g().stroke||"black")}),D(()=>Q(g()),()=>{y(c,g().strokeWidth||.023)}),D(()=>Q(g()),()=>{y(u,g().fill||"none")}),be(),pe();var v=P4();te(()=>{L(v,"x",f(i)),L(v,"y",f(o)),L(v,"width",f(n)),L(v,"height",f(r)),L(v,"stroke",f(a)),L(v,"stroke-width",f(c)),L(v,"fill",f(u))}),N(t,v),de()}var B4=ne("<rect></rect>");function W4(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R();let m=U(e,"cx",8),E=U(e,"cy",8),I=U(e,"shape",8);D(()=>Q(I()),()=>{y(n,I().r??.5)}),D(()=>(Q(m()),f(n)),()=>{y(r,m()-f(n))}),D(()=>(Q(E()),f(n)),()=>{y(i,E()-f(n))}),D(()=>f(n),()=>{y(o,2*f(n))}),D(()=>f(n),()=>{y(a,2*f(n))}),D(()=>Q(I()),()=>{y(c,I().stroke??"black")}),D(()=>Q(I()),()=>{y(u,I().strokeWidth??.02)}),D(()=>Q(I()),()=>{y(_,I().fill??"none")}),D(()=>Q(I()),()=>{y(h,I().angle??0)}),D(()=>Q(I()),()=>{y(g,I().strokeDasharray??0)}),D(()=>Q(I()),()=>{y(v,I().opacity??1)}),be(),pe();var O=B4();te(()=>{L(O,"x",f(r)),L(O,"y",f(i)),L(O,"width",f(o)),L(O,"height",f(a)),L(O,"stroke",f(c)),L(O,"stroke-width",f(u)),L(O,"fill",f(_)),L(O,"transform",`rotate(${f(h)}, ${m()}, ${E()})`),L(O,"stroke-dasharray",f(g)),L(O,"opacity",f(v))}),N(t,O),de()}function Er(t,e){ue(e,!1);const n=R();let r=U(e,"cx",8),i=U(e,"cy",8),o=U(e,"shape",8);D(()=>(Q(o()),B),()=>{var h;y(n,((h=o())==null?void 0:h.type)??B.CIRCLE)}),be(),pe();var a=Se(),c=se(a);{var u=h=>{ar(h,{get x(){return r()},get y(){return i()},get shape(){return o()}})},_=h=>{var g=Se(),v=se(g);{var m=I=>{$4(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var O=Se(),b=se(O);{var S=G=>{W4(G,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},k=G=>{var F=Se(),Y=se(F);{var H=J=>{H4(J,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},j=J=>{var le=Se(),Z=se(le);{var ie=oe=>{sl(oe,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},me=oe=>{ar(oe,{get x(){return r()},get y(){return i()},get shape(){return o()}})};re(Z,oe=>{f(n)===B.POLYGON?oe(ie):oe(me,!1)},!0)}N(J,le)};re(Y,J=>{f(n)===B.RECTANGLE?J(H):J(j,!1)},!0)}N(G,F)};re(b,G=>{f(n)===B.SQUARE?G(S):G(k,!1)},!0)}N(I,O)};re(v,I=>{f(n)===B.ELLIPSE?I(m):I(E,!1)},!0)}N(h,g)};re(c,h=>{f(n)===B.CIRCLE?h(u):h(_,!1)})}N(t,a),de()}var z4=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),Y4=ne('<g class="corner-tool"><!><!><!></g>');function wh(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(k,G){return G===B.TEXT_ONLY?k.value?k.value:"-":k.value??""}D(()=>r(),()=>{var k;y(i,(k=r())==null?void 0:k.id)}),D(()=>(Q(m()),Nu),()=>{y(o,dn(m().toolId,$t)??Nu)}),D(()=>(Q(m()),f(o)),()=>{y(a,m().shape??f(o))}),D(()=>(f(a),B),()=>{var k;y(c,((k=f(a))==null?void 0:k.type)??B.CIRCLE)}),D(()=>f(a),()=>{var k;y(u,((k=f(a))==null?void 0:k.fontSize)??.2)}),D(()=>f(a),()=>{var k;y(_,((k=f(a))==null?void 0:k.fontColor)??"black")}),D(()=>f(a),()=>{y(h,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.07:.07})}),D(()=>Q(m()),()=>{y(g,m().cells)}),D(()=>f(g),()=>{y(v,new Te(f(g)[f(g).length-1].c,f(g)[f(g).length-1].r))}),be(),pe();var O=Se(),b=se(O);{var S=k=>{var G=Y4(),F=V(G);{var Y=Z=>{Er(Z,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(h)}})};re(F,Z=>{E()&&E()===f(i)&&Z(Y)})}var H=M(F);Er(H,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(a)}});var j=M(H);{var J=Z=>{G4(Z,{get cornerTool(){return m()}})},le=Z=>{var ie=z4(),me=V(ie,!0);te(()=>ot(me,I(m(),f(c)))),W(ie),te(()=>{L(ie,"x",f(v).x),L(ie,"y",f(v).y),L(ie,"font-size",f(u)),L(ie,"fill",f(_))}),N(Z,ie)};re(j,Z=>{m().toolId===d.QUADRUPLE?Z(J):Z(le,!1)})}W(G),N(k,G)};re(b,k=>{f(g).length===4&&k(S)})}N(t,O),de()}var j4=ne('<g class="corner-tool"><!></g>'),K4=ne('<g class="corner-tool-preview"><!></g>');function yh(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Se(),o=se(i);{var a=u=>{var _=j4(),h=V(_);wh(h,{get tool(){return n()},get c_id(){return r()}}),W(_),te(()=>L(_,"data-id",`${r()}`)),N(u,_)},c=u=>{var _=K4();L(_,"opacity",.5);var h=V(_);wh(h,{get tool(){return n()}}),W(_),N(u,_)};re(o,u=>{r()!==void 0?u(a):u(c,!1)})}N(t,i)}var V4=ne('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function bs(t,e){ue(e,!1);const n=R();let r=U(e,"value",8,""),i=U(e,"fontSize",8,.2),o=U(e,"x",8),a=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),_=U(e,"fontWeight",8,400),h=R(null),g=R(null);function v(S,k,G){const F=["TL","TR"].includes(G),H=["TL","BL"].includes(G)?S+.05:S,j=k;return new Te(H,j)}function m(S){return["TL","BL"].includes(S)?"start":"end"}function E(S){return["TL","TR"].includes(S)?"text-before-edge":""}tw(()=>{if(!f(h)||!f(g))return;const S=f(h).getBBox();f(g).setAttribute("x",String(S.x)),f(g).setAttribute("y",String(S.y+S.height*.1)),f(g).setAttribute("width",String(S.width)),f(g).setAttribute("height",String(S.height*.8))}),D(()=>(Q(o()),Q(a()),Q(c())),()=>{y(n,v(o(),a(),c()))}),be(),pe();var I=Se(),O=se(I);{var b=S=>{var k=V4(),G=se(k);Ti(G,H=>y(g,H),()=>f(g));var F=M(G);te(()=>L(F,"text-anchor",m(c()))),te(()=>L(F,"dominant-baseline",E(c())));var Y=V(F,!0);W(F),Ti(F,H=>y(h,H),()=>f(h)),te(()=>{var H,j;L(F,"x",(H=f(n))==null?void 0:H.x),L(F,"y",(j=f(n))==null?void 0:j.y),L(F,"font-size",i()),L(F,"fill",u()),L(F,"font-weight",_()),ot(Y,r())}),N(S,k)};re(O,S=>{r().length&&S(b)})}N(t,I),de()}var X4=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),q4=ne('<g class="center-corner-or-edge-tool"><!><!><!></g>');function Z4(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R();let v=U(e,"tool",8),m=U(e,"c_id",8);const E=v().cell,I=dn(v().toolId,$t)??Su;function O(j,J){return J===B.TEXT_ONLY?j.value?j.value:"-":j.value??""}D(()=>r(),()=>{var j;y(i,(j=r())==null?void 0:j.id)}),D(()=>Q(v()),()=>{y(o,v().shape??I)}),D(()=>f(o),()=>{y(a,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),D(()=>{},()=>{y(c,E)}),D(()=>(f(o),B),()=>{var j;y(u,((j=f(o))==null?void 0:j.type)||B.CIRCLE)}),D(()=>f(o),()=>{var j;y(_,((j=f(o))==null?void 0:j.fontSize)??.2)}),D(()=>f(o),()=>{var j;y(h,((j=f(o))==null?void 0:j.fontColor)??"black")}),D(()=>f(c),()=>{y(g,f(c).r%1===.5&&f(c).c%1===.5)}),be(),pe();var b=q4(),S=V(b);{var k=j=>{Er(j,{get cx(){return f(c).c},get cy(){return f(c).r},get shape(){return f(a)}})};re(S,j=>{m()===f(i)&&j(k)})}var G=M(S);Er(G,{get cx(){return f(c).c},get cy(){return f(c).r},get shape(){return f(o)}});var F=M(G);{var Y=j=>{var J=qe(()=>O(v(),f(u))),le=qe(()=>Math.floor(f(c).c)),Z=qe(()=>Math.floor(f(c).r));bs(j,{get value(){return f(J)},get x(){return f(le)},get y(){return f(Z)},position:"TL",get fontColor(){return f(h)}})},H=j=>{var J=X4(),le=V(J,!0);te(()=>ot(le,O(v(),f(u)))),W(J),te(()=>{L(J,"x",f(c).c),L(J,"y",f(c).r),L(J,"font-size",f(_)),L(J,"fill",f(h))}),N(j,J)};re(F,j=>{f(g)?j(Y):j(H,!1)})}W(b),N(t,b),de()}var Q4=ne('<path fill="none"></path>');function li(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=U(e,"linePoints",8),_=U(e,"shape",8,void 0);const h="round",g="round";D(()=>Q(_()),()=>{var m;y(n,((m=_())==null?void 0:m.stroke)??"gray")}),D(()=>Q(_()),()=>{var m;y(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),D(()=>Q(_()),()=>{var m;y(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),D(()=>Q(_()),()=>{var m;y(o,((m=_())==null?void 0:m.strokeDashoffset)??0)}),D(()=>Q(_()),()=>{var m,E,I,O,b,S,k,G;y(a,{shortenHead:((E=(m=_())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((O=(I=_())==null?void 0:I.linePathOptions)==null?void 0:O.shortenTail)??.2,bezierRounding:((S=(b=_())==null?void 0:b.linePathOptions)==null?void 0:S.bezierRounding)??.2,closeLoops:((G=(k=_())==null?void 0:k.linePathOptions)==null?void 0:G.closeLoops)??!1})}),D(()=>(Q(u()),f(a)),()=>{y(c,ui(u(),f(a)))}),be(),pe();var v=Q4();L(v,"stroke-linejoin",h),L(v,"stroke-linecap",g),te(()=>{L(v,"d",f(c)),L(v,"stroke",f(n)),L(v,"stroke-width",f(r)),L(v,"stroke-dasharray",f(i)),L(v,"stroke-dashoffset",f(o))}),N(t,v),de()}var J4=ce("<!> <!> <!>",1);function Cu(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R();let a=U(e,"linePoints",8),c=U(e,"shape",8,Ls);function u(O){var k;const b=Lt.cloneDeep(O);b.r=b.r||.2;const S=b.r;return b.strokeDasharray=O.strokeDasharray,b.opacity=1,b.linePathOptions={shortenHead:S,shortenTail:S,bezierRounding:(k=b.linePathOptions)==null?void 0:k.bezierRounding},b}D(()=>Q(a()),()=>{y(n,a().length)}),D(()=>(f(n),Q(a())),()=>{y(r,f(n)>=0?a()[0]:void 0)}),D(()=>(f(n),Q(a())),()=>{y(i,f(n)>=0?a()[f(n)-1]:void 0)}),D(()=>Q(c()),()=>{y(o,u(c()))}),be(),pe();var _=J4(),h=se(_);{var g=O=>{ar(O,{get x(){return f(r).x},get y(){return f(r).y},get shape(){return f(o)}})};re(h,O=>{f(r)&&O(g)})}var v=M(h,2);{var m=O=>{li(O,{get linePoints(){return a()},get shape(){return f(o)}})};re(v,O=>{f(n)>1&&O(m)})}var E=M(v,2);{var I=O=>{ar(O,{get x(){return f(i).x},get y(){return f(i).y},get shape(){return f(o)}})};re(E,O=>{f(i)&&O(I)})}N(t,_),de()}var eP=ce("<!> <!> <!>",1);function Iu(t,e){ue(e,!1);const n=R(),r=R(),i=R();let o=U(e,"linePoints",8),a=U(e,"shape",12,Ls);const c=4,u=.5;function _(G,F){const Y=F.r??u,H=F.n??c,j=F.angle??0,J=Av(Y,H,new Te(0,0),!0,0),le=(H+(G-j/360)*H%H)%H,Z=Math.floor(le)%H,ie=Math.ceil(le)%H;return J[Z].lerp(J[ie],le%1).length()}function h(G){if(f(n)<=1)return 0;const F=o()[0],H=o()[1].subtract(F).angle()/(2*Math.PI);return _(H,G)}function g(G){if(f(n)<=1)return 0;const F=o()[f(n)-1],H=o()[f(n)-2].subtract(F).angle()/(2*Math.PI);return _(H,G)}function v(G){var Y;const F=Lt.cloneDeep(G);return F.r=F.r||u,F.opacity=1,F.linePathOptions={shortenHead:h(F),shortenTail:g(F),bezierRounding:(Y=F.linePathOptions)==null?void 0:Y.bezierRounding},F}D(()=>Q(o()),()=>{y(n,o().length)}),D(()=>(f(n),Q(o())),()=>{y(r,f(n)>=0?o()[0]:void 0)}),D(()=>(f(n),Q(o())),()=>{y(i,f(n)>=0?o()[f(n)-1]:void 0)}),D(()=>Q(a()),()=>{a(v(a()))}),be(),pe();var m=eP(),E=se(m);{var I=G=>{sl(G,{get cx(){return f(r).x},get cy(){return f(r).y},get shape(){return a()}})};re(E,G=>{f(r)&&G(I)})}var O=M(E,2);{var b=G=>{li(G,{get linePoints(){return o()},get shape(){return a()}})};re(O,G=>{f(n)>1&&G(b)})}var S=M(O,2);{var k=G=>{sl(G,{get cx(){return f(i).x},get cy(){return f(i).y},get shape(){return a()}})};re(S,G=>{f(i)&&G(k)})}N(t,m),de()}var tP=ce("<!> <!>",1);function Ou(t,e){ue(e,!1);const n=R();let r=U(e,"linePoints",8),i=U(e,"shape",8,Ls);function o(m){var O,b,S;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((O=E.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(S=E.linePathOptions)==null?void 0:S.bezierRounding},E}function a(m){var O,b,S;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((O=E.linePathOptions)==null?void 0:O.shortenHead)||I,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(S=E.linePathOptions)==null?void 0:S.bezierRounding},E}D(()=>Q(r()),()=>{y(n,r().length>0?r()[0]:void 0)}),be(),pe();var c=tP(),u=se(c);{var _=m=>{var E=qe(()=>o(i()));li(m,{get linePoints(){return r()},get shape(){return f(E)}})};re(u,m=>{r().length>1&&m(_)})}var h=M(u,2);{var g=m=>{var E=qe(()=>o(i()));ar(m,{get x(){return f(n).x},get y(){return f(n).y},get shape(){return f(E)}})},v=m=>{var E=Se(),I=se(E);{var O=b=>{var S=qe(()=>a(i()));sl(b,{get cx(){return f(n).x},get cy(){return f(n).y},get shape(){return f(S)}})};re(I,b=>{f(n)&&b(O)},!0)}N(m,E)};re(h,m=>{f(n)&&i().type===B.THERMO_WITH_CIRCLE?m(g):m(v,!1)})}N(t,c),de()}var nP=ne("<!><!><!>",1),rP=ne("<!><!><!>",1),iP=ne("<!><!><!>",1),oP=ne("<!><!><!>",1),sP=ne('<g class="line-tool"><!></g>');function aP(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R();let g=U(e,"tool",8),v=U(e,"c_id",8);const m=dn(g().toolId,$t)??Ls;D(()=>r(),()=>{var S;y(i,(S=r())==null?void 0:S.id)}),D(()=>Q(g()),()=>{y(o,r_(g().cells))}),D(()=>Q(g()),()=>{y(a,g().shape??m)}),D(()=>(f(a),B),()=>{var S;y(c,((S=f(a))==null?void 0:S.type)||B.LINE)}),D(()=>f(a),()=>{var S;y(u,((S=f(a))==null?void 0:S.opacity)??1)}),D(()=>f(a),()=>{y(_,{...f(a),stroke:"var(--grid-background-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.06:.06})}),D(()=>f(a),()=>{y(h,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.07:.07})}),be(),pe();var E=sP(),I=V(E);{var O=S=>{var k=nP(),G=se(k);{var F=J=>{Cu(J,{get linePoints(){return f(o)},get shape(){return f(_)}})};re(G,J=>{J(F)})}var Y=M(G);{var H=J=>{Cu(J,{get linePoints(){return f(o)},get shape(){return f(h)}})};re(Y,J=>{v()===f(i)&&J(H)})}var j=M(Y);Cu(j,{get linePoints(){return f(o)},get shape(){return f(a)}}),N(S,k)},b=S=>{var k=Se(),G=se(k);{var F=H=>{var j=rP(),J=se(j);{var le=oe=>{Iu(oe,{get linePoints(){return f(o)},get shape(){return f(_)}})};re(J,oe=>{oe(le)})}var Z=M(J);{var ie=oe=>{Iu(oe,{get linePoints(){return f(o)},get shape(){return f(h)}})};re(Z,oe=>{v()===f(i)&&oe(ie)})}var me=M(Z);Iu(me,{get linePoints(){return f(o)},get shape(){return f(a)}}),N(H,j)},Y=H=>{var j=Se(),J=se(j);{var le=ie=>{var me=iP(),oe=se(me);{var Ee=Oe=>{Ou(Oe,{get linePoints(){return f(o)},get shape(){return f(_)}})};re(oe,Oe=>{Oe(Ee)})}var Ne=M(oe);{var xe=Oe=>{Ou(Oe,{get linePoints(){return f(o)},get shape(){return f(h)}})};re(Ne,Oe=>{v()===f(i)&&Oe(xe)})}var Le=M(Ne);Ou(Le,{get linePoints(){return f(o)},get shape(){return f(a)}}),N(ie,me)},Z=ie=>{var me=oP(),oe=se(me);{var Ee=Oe=>{li(Oe,{get linePoints(){return f(o)},get shape(){return f(_)}})};re(oe,Oe=>{Oe(Ee)})}var Ne=M(oe);{var xe=Oe=>{li(Oe,{get linePoints(){return f(o)},get shape(){return f(h)}})};re(Ne,Oe=>{v()===f(i)&&Oe(xe)})}var Le=M(Ne);li(Le,{get linePoints(){return f(o)},get shape(){return f(a)}}),N(ie,me)};re(J,ie=>{f(c)===B.THERMO_WITH_CIRCLE||f(c)===B.THERMO_WITH_POLYGON?ie(le):ie(Z,!1)},!0)}N(H,j)};re(G,H=>{f(c)===B.LINE_WITH_POLYGON_ENDS?H(F):H(Y,!1)},!0)}N(S,k)};re(I,S=>{f(c)===B.LINE_WITH_CIRCLE_ENDS?S(O):S(b,!1)})}W(E),te(()=>L(E,"opacity",f(u))),N(t,E),de()}var lP=ce("<!> <!>",1);function Rv(t,e){ue(e,!1);const n=R(),r=R();let i=U(e,"cells",8),o=U(e,"shape",8,Ld),a=U(e,"value",8,void 0);D(()=>Q(i()),()=>{y(n,i()[0])}),D(()=>f(n),()=>{y(r,new Te(f(n).c,f(n).r))}),be(),pe();var c=lP(),u=se(c);kr(u,{get cells(){return i()},get shape(){return o()}});var _=M(u,2);{var h=g=>{bs(g,{get value(){return a()},get x(){return f(r).x},get y(){return f(r).y},position:"TL"})};re(_,g=>{a()&&a().length&&g(h)})}N(t,c),de()}var cP=ne('<g class="cage-tool"><!><!></g>');function uP(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R();let c=U(e,"tool",8),u=U(e,"c_id",8);const _=dn(c().toolId,$t)??Ld;D(()=>Q(c()),()=>{y(i,c().shape??_)}),D(()=>r(),()=>{var E;y(o,(E=r())==null?void 0:E.id)}),D(()=>f(i),()=>{y(a,{...f(i),stroke:"var(--constraint-selected-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.07:.07})}),be(),pe();var h=cP(),g=V(h);{var v=E=>{kr(E,{get cells(){return c().cells},get shape(){return f(a)}})};re(g,E=>{u()===f(o)&&E(v)})}var m=M(g);Rv(m,{get cells(){return c().cells},get shape(){return f(i)},get value(){return c().value}}),W(h),N(t,h),de()}var dP=ne("<!><!>",1),_P=ne('<g class="clone-tool"><!><!><!><!><!></g>');function fP(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R(),m=R();let E=U(e,"tool",8),I=U(e,"c_id",8);const O=dn(E().toolId,$t)??pw,b=800,S=E().value;D(()=>r(),()=>{var le;y(i,(le=r())==null?void 0:le.id)}),D(()=>Q(E()),()=>{y(o,E().shape??O)}),D(()=>f(o),()=>{y(a,{...f(o),stroke:"var(--constraint-selected-color)",strokeWidth:f(o).strokeWidth?f(o).strokeWidth+.07:.07})}),D(()=>f(o),()=>{y(c,f(o).inset??.15)}),D(()=>f(o),()=>{y(u,f(o).strokeWidth??.07)}),D(()=>f(o),()=>{y(_,f(o).fontColor??f(o).stroke??"black")}),D(()=>Q(E()),()=>{y(h,E().cells[E().cells.length-1])}),D(()=>Q(E()),()=>{y(g,E().cells2[E().cells2.length-1])}),D(()=>(f(h),f(c)),()=>{y(v,new Te(f(h).c+1-f(c)-.05,f(h).r+1-f(c)-.05))}),D(()=>(f(g),f(c)),()=>{y(m,new Te(f(g).c+1-f(c)-.05,f(g).r+1-f(c)-.05))}),be(),pe();var k=_P(),G=V(k);{var F=le=>{var Z=dP(),ie=se(Z);kr(ie,{get cells(){return E().cells},get shape(){return f(a)}});var me=M(ie);kr(me,{get cells(){return E().cells2},get shape(){return f(a)}}),N(le,Z)};re(G,le=>{I()===f(i)&&le(F)})}var Y=M(G);kr(Y,{get cells(){return E().cells},get shape(){return f(o)}});var H=M(Y);bs(H,{value:S,get x(){return f(v).x},get y(){return f(v).y},position:"BR",get fontColor(){return f(_)},fontWeight:b});var j=M(H);kr(j,{get cells(){return E().cells2},get shape(){return f(o)}});var J=M(j);bs(J,{value:S,get x(){return f(m).x},get y(){return f(m).y},position:"BR",get fontColor(){return f(_)},fontWeight:b}),W(k),N(t,k),de()}var gP=ne('<rect stroke="none" fill="#5373ea80"></rect>'),hP=ne('<rect stroke="none" fill="#5373ea66"></rect>'),pP=ne('<path fill="none" stroke-linecap="round"></path><!>',1),vP=ne('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function Lh(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=()=>he(mn,"$gridStore",n),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R(),m=R(),E=R(),I=R();let O=U(e,"tool",8),b=U(e,"c_id",8,void 0);const S=.03;function k(oe){return oe.value&&oe.value.length?oe.value:"-"}function G(oe,Ee){const Ne=Ts(Ee),xe=new Te(Ne.c,Ne.r).scale(.5),Le=Qn(oe),Oe=Le.add(xe.scale(.5)),et=Le.add(xe.scale(.8));return[Oe,et]}function F(oe,Ee){const xe=G(oe,Ee);let Le=i_(.08,Ee);Le=Le.map(Gt=>Gt.add(xe[1]));const Oe=ui(xe),et=ui(Le);return Oe+et}D(()=>r(),()=>{var oe;y(o,(oe=r())==null?void 0:oe.id)}),D(()=>Q(O()),()=>{y(a,O().cell)}),D(()=>f(a),()=>{y(c,Qn(f(a)))}),D(()=>(i(),Q(O())),()=>{y(u,i().getCellsInDirection(O().cell.r,O().cell.c,O().direction))}),D(()=>(Q(O()),Vg),()=>{y(_,dn(O().toolId,$t)??Vg)}),D(()=>(Q(O()),f(_)),()=>{y(h,O().shape??f(_))}),D(()=>f(h),()=>{var oe;y(g,((oe=f(h))==null?void 0:oe.fontSize)??.5)}),D(()=>f(h),()=>{var oe;y(v,((oe=f(h))==null?void 0:oe.fontColor)??"var(--text-primary-color)")}),D(()=>f(h),()=>{var oe;y(m,((oe=f(h))==null?void 0:oe.stroke)??"var(--text-primary-color)")}),D(()=>f(h),()=>{y(E,{...f(h),stroke:"var(--constraint-selected-color)",strokeWidth:S+.07})}),D(()=>(f(a),Q(O())),()=>{y(I,F(f(a),O().direction))}),be(),pe();var Y=vP(),H=V(Y);{var j=oe=>{var Ee=Se(),Ne=se(Ee);lt(Ne,1,()=>f(u),It,(xe,Le)=>{var Oe=gP();L(Oe,"width",1),L(Oe,"height",1),te(()=>{L(Oe,"x",f(Le).c),L(Oe,"y",f(Le).r)}),N(xe,Oe)}),N(oe,Ee)};re(H,oe=>{b()===void 0&&oe(j)})}var J=M(H);{var le=oe=>{var Ee=pP(),Ne=se(Ee),xe=M(Ne);lt(xe,1,()=>f(u),It,(Le,Oe)=>{var et=hP();L(et,"width",1),L(et,"height",1),te(()=>{L(et,"x",f(Oe).c),L(et,"y",f(Oe).r)}),N(Le,et)}),te(()=>{L(Ne,"d",f(I)),L(Ne,"stroke",f(E).stroke),L(Ne,"stroke-width",f(E).strokeWidth)}),N(oe,Ee)};re(J,oe=>{b()&&b()===f(o)&&oe(le)})}var Z=M(J);L(Z,"stroke-width",S);var ie=M(Z),me=V(ie,!0);te(()=>ot(me,k(O()))),W(ie),W(Y),te(()=>{L(Z,"d",f(I)),L(Z,"stroke",f(m)),L(ie,"x",f(c).x),L(ie,"y",f(c).y),L(ie,"font-size",f(g)),L(ie,"fill",f(v))}),N(t,Y),de()}var mP=ne('<g class="outside-direction-tool"><!></g>'),EP=ne('<g class="outside-direction-preview"><!></g>');function Ah(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Se(),o=se(i);{var a=u=>{var _=mP(),h=V(_);Lh(h,{get tool(){return n()},get c_id(){return r()}}),W(_),te(()=>L(_,"data-id",`${r()}`)),N(u,_)},c=u=>{var _=EP();L(_,"opacity",.5);var h=V(_);Lh(h,{get tool(){return n()}}),W(_),N(u,_)};re(o,u=>{r()!==void 0?u(a):u(c,!1)})}N(t,i)}var CP=ce("<!> <!> <!>",1);function IP(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R();let c=U(e,"linePoints",8),u=U(e,"shape",8);function _(O){const b=Lt.cloneDeep(O);return b.r=b.r||.2,b.strokeWidth=0,b.opacity=1,b}D(()=>Q(c()),()=>{y(n,c().length)}),D(()=>(f(n),Q(c())),()=>{y(r,f(n)>1&&c()[0].equals(c()[f(n)-1]))}),D(()=>(f(n),Q(c())),()=>{y(i,f(n)>=0?c()[0]:void 0)}),D(()=>(f(n),Q(c())),()=>{y(o,f(n)>=0?c()[f(n)-1]:void 0)}),D(()=>Q(u()),()=>{y(a,_(u()))}),be(),pe();var h=CP(),g=se(h);li(g,{get linePoints(){return c()},get shape(){return u()}});var v=M(g,2);{var m=O=>{ar(O,{get x(){return f(i).x},get y(){return f(i).y},get shape(){return f(a)}})};re(v,O=>{!f(r)&&f(i)&&O(m)})}var E=M(v,2);{var I=O=>{ar(O,{get x(){return f(o).x},get y(){return f(o).y},get shape(){return f(a)}})};re(E,O=>{!f(r)&&f(o)&&O(I)})}N(t,h),de()}var OP=ne('<g class="corner-line-tool"><!></g>');function bP(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R();let a=U(e,"tool",8);const c=dn(a().toolId,$t)??Ls;D(()=>(Q(a()),Te),()=>{y(n,a().coords.map(v=>new Te(v.c,v.r)))}),D(()=>Q(a()),()=>{y(r,a().shape??c)}),D(()=>(f(r),B),()=>{var v;y(i,((v=f(r))==null?void 0:v.type)||B.LINE)}),D(()=>f(r),()=>{var v;y(o,((v=f(r))==null?void 0:v.opacity)??1)}),be(),pe();var u=OP(),_=V(u);{var h=v=>{IP(v,{get linePoints(){return f(n)},get shape(){return f(r)}})},g=v=>{li(v,{get linePoints(){return f(n)},get shape(){return f(r)}})};re(_,v=>{f(i)===B.MAZE_WALL?v(h):v(g,!1)})}W(u),te(()=>L(u,"opacity",f(o))),N(t,u),de()}var wP=ne('<path fill="none" stroke-linecap="round"></path>'),yP=ne('<path fill="none" stroke-linecap="round"></path>'),LP=ne('<path fill="none" stroke-linecap="round"></path>'),AP=ne("<!><!><!>",1);function Sh(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R();let _=U(e,"tool",8),h=U(e,"c_id",8,void 0);D(()=>r(),()=>{var b;y(i,(b=r())==null?void 0:b.id)}),D(()=>(Q(_()),Kg),()=>{y(o,dn(_().toolId,$t)??Kg)}),D(()=>(Q(_()),f(o)),()=>{y(a,_().shape??f(o))}),D(()=>f(a),()=>{y(c,{...f(a),stroke:"var(--grid-background-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.03:.03})}),D(()=>f(a),()=>{y(u,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.05:.05})}),be(),pe();var g=AP(),v=se(g);{var m=b=>{var S=Se(),k=se(S);lt(k,1,()=>_().directions,It,(G,F)=>{var Y=wP();te(()=>L(Y,"d",mu(_().cell,f(F)))),te(()=>{L(Y,"stroke",f(c).stroke),L(Y,"stroke-width",f(c).strokeWidth)}),N(G,Y)}),N(b,S)};re(v,b=>{b(m)})}var E=M(v);{var I=b=>{var S=Se(),k=se(S);lt(k,1,()=>_().directions,It,(G,F)=>{var Y=yP();te(()=>L(Y,"d",mu(_().cell,f(F)))),te(()=>{L(Y,"stroke",f(u).stroke),L(Y,"stroke-width",f(u).strokeWidth)}),N(G,Y)}),N(b,S)};re(E,b=>{h()&&h()===f(i)&&b(I)})}var O=M(E);lt(O,1,()=>_().directions,It,(b,S)=>{var k=LP();te(()=>L(k,"d",mu(_().cell,f(S)))),te(()=>{L(k,"stroke",f(a).stroke),L(k,"stroke-width",f(a).strokeWidth)}),N(b,k)}),N(t,g),de()}var SP=ne('<g class="single-cell-multi-arrow-tool"><!></g>'),NP=ne('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function Tv(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Se(),o=se(i);{var a=u=>{var _=SP(),h=V(_);Sh(h,{get tool(){return n()},get c_id(){return r()}}),W(_),te(()=>L(_,"data-id",`${r()}`)),N(u,_)},c=u=>{var _=NP();L(_,"opacity",.5);var h=V(_);Sh(h,{get tool(){return n()}}),W(_),N(u,_)};re(o,u=>{r()!==void 0?u(a):u(c,!1)})}N(t,i)}var xP=ne('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Nh(t,e){ue(e,!1);const n=Ye(),r=()=>he(e8,"$minimumConstraintsStore",n),i=()=>he(t8,"$maximumConstraintsStore",n),o=R(),a=R(),c=R();let u=U(e,"coord",8),_=U(e,"minOrMax",8);function h(O,b){const S=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let G=0;G<k.length;G++){let F=k[G];const Y={r:O.r+F[1],c:O.c+F[0]};S[G]=!Object.values(b).some(H=>je(Y,H.cell))}return S}function g(O,b){let S=P8(_(),O.r,O.c);const k=h(O,b);return S=S.filter((F,Y)=>k[Y]),S.map(F=>Ho(F,!1)).join("")}function v(O,b){return _()==="max"?b:O}D(()=>Q(u()),()=>{y(o,u().c)}),D(()=>Q(u()),()=>{y(a,u().r)}),D(()=>(r(),i()),()=>{y(c,v(r(),i()))}),be(),pe();var m=xP(),E=V(m);L(E,"width",1),L(E,"height",1);var I=M(E);te(()=>L(I,"d",g(u(),f(c)))),W(m),te(()=>{L(E,"x",f(o)),L(E,"y",f(a))}),N(t,m),de()}var RP=ne("<circle></circle>");function TP(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=U(e,"x",8),_=U(e,"y",8),h=U(e,"value",8),g=U(e,"shape",8);D(()=>Q(g()),()=>{y(n,g().r??.35)}),D(()=>Q(g()),()=>{y(r,g().stroke??"black")}),D(()=>Q(g()),()=>{var m;y(i,(m=g())==null?void 0:m.opacity)}),D(()=>Q(g()),()=>{y(o,g().strokeWidth??.02)}),D(()=>Q(h()),()=>{y(a,h()==="1"?"var(--constraint-color-red)":h()==="2"?"var(--constraint-color-green)":h()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>Q(g()),()=>{y(c,g().strokeDasharray??0)}),be(),pe();var v=RP();te(()=>{L(v,"cx",u()),L(v,"cy",_()),L(v,"r",f(n)),L(v,"stroke",f(r)),L(v,"stroke-width",f(o)),L(v,"fill",f(a)),L(v,"opacity",f(i)),L(v,"stroke-dasharray",f(c))}),N(t,v),de()}var DP=ne("<!><!>",1),kP=ne("<!><!>",1),GP=ne("<!><!><!>",1),MP=ne('<g class="single-cell-tool"><!><!></g>');function xh(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);D(()=>r(),()=>{var F;y(i,(F=r())==null?void 0:F.id)}),D(()=>(Q(m()),Yg),()=>{y(o,dn(m().toolId,$t)??Yg)}),D(()=>(Q(m()),f(o)),()=>{y(a,m().shape??f(o))}),D(()=>(f(a),B),()=>{var F;y(c,((F=f(a))==null?void 0:F.type)||B.CIRCLE)}),D(()=>f(a),()=>{y(u,{...f(a),stroke:"var(--grid-background-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.06:.06})}),D(()=>f(a),()=>{y(_,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.07:.07})}),D(()=>Q(m()),()=>{y(h,{x:m().cell.c+.5,y:m().cell.r+.5})}),D(()=>Q(m()),()=>{y(g,new Te(m().cell.c,m().cell.r))}),D(()=>Q(m()),()=>{y(v,m().value)}),be(),pe();var I=MP(),O=V(I);{var b=F=>{Nh(F,{get coord(){return m().cell},minOrMax:"min"})},S=F=>{var Y=Se(),H=se(Y);{var j=le=>{Nh(le,{get coord(){return m().cell},minOrMax:"max"})},J=le=>{var Z=Se(),ie=se(Z);{var me=Ee=>{var Ne=DP(),xe=se(Ne);{var Le=et=>{Er(et,{get cx(){return f(h).x},get cy(){return f(h).y},get shape(){return f(_)}})};re(xe,et=>{E()&&E()===f(i)&&et(Le)})}var Oe=M(xe);TP(Oe,{get x(){return f(h).x},get y(){return f(h).y},get value(){return f(v)},get shape(){return f(a)}}),N(Ee,Ne)},oe=Ee=>{var Ne=Se(),xe=se(Ne);{var Le=et=>{var tt=kP(),Gt=se(tt);{var Pt=Mt=>{var nn=qe(()=>[m().cell]);kr(Mt,{get cells(){return f(nn)},get shape(){return f(_)}})};re(Gt,Mt=>{E()&&E()===f(i)&&Mt(Pt)})}var tn=M(Gt),Tt=qe(()=>[m().cell]);Rv(tn,{get cells(){return f(Tt)},get shape(){return f(a)},get value(){return m().value}}),N(et,tt)},Oe=et=>{var tt=GP(),Gt=se(tt);{var Pt=nn=>{Er(nn,{get cx(){return f(h).x},get cy(){return f(h).y},get shape(){return f(u)}})};re(Gt,nn=>{nn(Pt)})}var tn=M(Gt);{var Tt=nn=>{Er(nn,{get cx(){return f(h).x},get cy(){return f(h).y},get shape(){return f(_)}})};re(tn,nn=>{E()&&E()===f(i)&&nn(Tt)})}var Mt=M(tn);Er(Mt,{get cx(){return f(h).x},get cy(){return f(h).y},get shape(){return f(a)}}),N(et,tt)};re(xe,et=>{f(c)===B.CAGE?et(Le):et(Oe,!1)},!0)}N(Ee,Ne)};re(ie,Ee=>{m().toolId===d.COLORED_COUNTING_CIRCLES?Ee(me):Ee(oe,!1)},!0)}N(le,Z)};re(H,le=>{m().toolId===d.MAXIMUM?le(j):le(J,!1)},!0)}N(F,Y)};re(O,F=>{m().toolId===d.MINIMUM?F(b):F(S,!1)})}var k=M(O);{var G=F=>{bs(F,{get value(){return f(v)},get x(){return f(g).x},get y(){return f(g).y},position:"TL"})};re(k,F=>{f(c)!==B.CAGE&&m().toolId!==d.COLORED_COUNTING_CIRCLES&&f(v)&&F(G)})}W(I),te(()=>L(I,"data-id",`${E()}`)),N(t,I),de()}var UP=ne('<g class="single-cell-tool"><!></g>'),$P=ne('<g class="single-cell-tool-preview"><!></g>');function Dv(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Se(),o=se(i);{var a=u=>{var _=UP(),h=V(_);xh(h,{get tool(){return n()},get c_id(){return r()}}),W(_),te(()=>L(_,"data-id",`${r()}`)),N(u,_)},c=u=>{var _=$P();L(_,"opacity",.5);var h=V(_);xh(h,{get tool(){return n()}}),W(_),N(u,_)};re(o,u=>{r()!==void 0?u(a):u(c,!1)})}N(t,i)}function FP(t,e){ue(e,!1);let n=U(e,"tool",8),r=U(e,"c_id",8);pe();var i=Se(),o=se(i);{var a=c=>{var u=Se(),_=se(u);{var h=v=>{Nv(v,{get tool(){return n()},get c_id(){return r()}})},g=v=>{var m=Se(),E=se(m);{var I=b=>{Tv(b,{get tool(){return n()},get c_id(){return r()}})},O=b=>{var S=Se(),k=se(S);{var G=F=>{Dv(F,{get tool(){return n()},get c_id(){return r()}})};re(k,F=>{n().type==="SIMPLE"&&F(G)},!0)}N(b,S)};re(E,b=>{n().type==="MULTIARROW"?b(I):b(O,!1)},!0)}N(v,m)};re(_,v=>{n().type==="ARROW"?v(h):v(g,!1)})}N(c,u)};re(o,c=>{n().toolId!==d.FOG_LIGHTS&&c(a)})}N(t,i),de()}var PP=ne('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function kv(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),i=U(e,"strokeWidth",8),o=U(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=PP();L(u,"viewBox","0 0 1 1"),L(u,"refX",a),L(u,"refY",a),L(u,"markerWidth",1),L(u,"markerHeight",1);var _=V(u);L(_,"d",c),W(u),te(()=>{L(u,"id",r()),L(_,"stroke-width",i()),L(_,"stroke",o())}),N(t,u)}var HP=ne('<path class="arrow-line" fill="none"></path>'),BP=ne('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function WP(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R();let m=U(e,"tool",8),E=U(e,"arrowId",8);const I=dn(m().toolId,$t)??hp,O="round",b="round",S=crypto.randomUUID(),k=`arrow-mask-${E()}-${S}`,G=`arrow-marker-${E()}-${S}`;D(()=>Q(m()),()=>{y(n,m().shape??I)}),D(()=>f(n),()=>{var Z;y(r,((Z=f(n))==null?void 0:Z.r)??.4)}),D(()=>f(n),()=>{var Z;y(i,((Z=f(n))==null?void 0:Z.stroke)??"gray")}),D(()=>f(n),()=>{var Z;y(o,((Z=f(n))==null?void 0:Z.strokeWidth)??.1)}),D(()=>f(n),()=>{var Z;y(a,((Z=f(n))==null?void 0:Z.strokeDasharray)??0)}),D(()=>f(n),()=>{var Z;y(c,((Z=f(n))==null?void 0:Z.opacity)??.8)}),D(()=>(f(r),f(n)),()=>{var Z,ie,me,oe;y(u,{shortenHead:f(r),shortenTail:((ie=(Z=f(n))==null?void 0:Z.linePathOptions)==null?void 0:ie.shortenTail)??.2,bezierRounding:((oe=(me=f(n))==null?void 0:me.linePathOptions)==null?void 0:oe.bezierRounding)??.4})}),D(()=>f(n),()=>{var Z;y(_,((Z=f(n))==null?void 0:Z.fill)??"none")}),D(()=>f(n),()=>{var Z;y(h,((Z=f(n))==null?void 0:Z.inset)??.2)}),D(()=>f(h),()=>{y(g,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:f(h)})}),D(()=>Q(m()),()=>{y(v,ol(m().cells))}),be(),pe();var F=BP(),Y=se(F);L(Y,"id",k);var H=M(V(Y));W(Y);var j=M(Y);kv(j,{id:G,l:.2,get strokeWidth(){return f(o)},get stroke(){return f(i)}});var J=M(j);kr(J,{get cells(){return m().cells},get shape(){return f(g)}});var le=M(J);lt(le,1,()=>m().lines,It,(Z,ie)=>{var me=Se(),oe=se(me);{var Ee=Ne=>{var xe=HP();te(()=>L(xe,"d",ol(f(ie),f(u)))),L(xe,"stroke-linejoin",O),L(xe,"stroke-linecap",b),L(xe,"marker-end",`url(#${G??""})`),te(()=>{L(xe,"stroke",f(i)),L(xe,"stroke-width",f(o)),L(xe,"opacity",f(c)),L(xe,"stroke-dasharray",f(a))}),N(Ne,xe)};re(oe,Ne=>{f(ie).length>1&&Ne(Ee)})}N(Z,me)}),te(()=>{L(H,"stroke-width",2*f(r)-f(o)),L(H,"d",f(v))}),N(t,F),de()}var zP=ne('<path class="arrow-line" fill="none"></path>'),YP=ne('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function bu(t,e){ue(e,!1);const n=R(),r=R(),i=R(),o=R(),a=R(),c=R();let u=U(e,"tool",8),_=U(e,"c_id",8),h=U(e,"shape",8);const g="round",v="round",m=crypto.randomUUID(),E=`arrow-mask-${_()}-${m}`,I=`arrow-marker-${_()}-${m}`;D(()=>Q(h()),()=>{var Y;y(n,((Y=h())==null?void 0:Y.r)??.4)}),D(()=>Q(h()),()=>{var Y;y(r,((Y=h())==null?void 0:Y.stroke)??"gray")}),D(()=>Q(h()),()=>{var Y;y(i,((Y=h())==null?void 0:Y.strokeWidth)??.1)}),D(()=>Q(h()),()=>{var Y;y(o,((Y=h())==null?void 0:Y.strokeDasharray)??0)}),D(()=>(f(n),Q(h())),()=>{var Y,H,j,J;y(a,{shortenHead:f(n),shortenTail:((H=(Y=h())==null?void 0:Y.linePathOptions)==null?void 0:H.shortenTail)??.2,bezierRounding:((J=(j=h())==null?void 0:j.linePathOptions)==null?void 0:J.bezierRounding)??.4})}),D(()=>Q(u()),()=>{y(c,ol(u().cells))}),be(),pe();var O=YP(),b=se(O);L(b,"id",E);var S=M(V(b));W(b);var k=M(b);kv(k,{id:I,l:.2,get strokeWidth(){return f(i)},get stroke(){return f(r)}});var G=M(k);L(G,"mask",`url(#${E??""})`);var F=M(G);lt(F,1,()=>u().lines,It,(Y,H)=>{var j=Se(),J=se(j);{var le=Z=>{var ie=zP();te(()=>L(ie,"d",ol(f(H),f(a)))),L(ie,"stroke-linejoin",g),L(ie,"stroke-linecap",v),L(ie,"marker-end",`url(#${I??""})`),te(()=>{L(ie,"stroke",f(r)),L(ie,"stroke-width",f(i)),L(ie,"stroke-dasharray",f(o))}),N(Z,ie)};re(J,Z=>{f(H).length>1&&Z(le)})}N(Y,j)}),te(()=>{L(S,"stroke-width",2*f(n)-f(i)),L(S,"d",f(c)),L(G,"d",f(c)),L(G,"stroke-width",2*f(n)+f(i)),L(G,"stroke",f(r))}),N(t,O),de()}var jP=ne("<!><!><!>",1),KP=ne('<g class="arrow-tool"><!></g>');function VP(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R();let u=U(e,"tool",8),_=U(e,"c_id",8);const h=dn(u().toolId,$t)??hp;D(()=>Q(u()),()=>{y(i,u().shape??h)}),D(()=>f(i),()=>{y(o,{...f(i),stroke:"var(--grid-background-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.06:.06})}),D(()=>f(i),()=>{y(a,{...f(i),stroke:"var(--constraint-selected-color)",strokeWidth:f(i).strokeWidth?f(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;y(c,(I=r())==null?void 0:I.id)}),be(),pe();var g=KP(),v=V(g);{var m=I=>{WP(I,{get tool(){return u()},get arrowId(){return _()}})},E=I=>{var O=jP(),b=se(O);{var S=Y=>{bu(Y,{get tool(){return u()},get c_id(){return _()},get shape(){return f(o)}})};re(b,Y=>{Y(S)})}var k=M(b);{var G=Y=>{bu(Y,{get tool(){return u()},get c_id(){return _()},get shape(){return f(a)}})};re(k,Y=>{_()===f(c)&&Y(G)})}var F=M(k);bu(F,{get tool(){return u()},get c_id(){return _()},get shape(){return f(i)}}),N(I,O)};re(v,I=>{f(i).type===B.BULBOUS_ARROW?I(m):I(E,!1)})}W(g),N(t,g),de()}var XP=ne('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Rh(t,e){ue(e,!1);const n=R(),r=R(),i=R();let o=U(e,"shape",8),a=U(e,"coords",8);const[c,u]=a(),_=u.c,h=c.c===u.c?u.c+1:u.c,g=u.r,v=c.r===u.r?u.r+1:u.r;D(()=>Q(o()),()=>{y(n,o().stroke??"black")}),D(()=>Q(o()),()=>{var E;y(r,(E=o())==null?void 0:E.opacity)}),D(()=>Q(o()),()=>{y(i,o().strokeWidth??.02)}),be(),pe();var m=XP();L(m,"x1",_),L(m,"x2",h),L(m,"y1",g),L(m,"y2",v),te(()=>{L(m,"stroke",f(n)),L(m,"stroke-width",f(i)),L(m,"opacity",f(r))}),N(t,m),de()}var qP=ne("<!><!>",1),ZP=ne("<!><!>",1),QP=ne("<!><!>",1),JP=ne("<!><!>",1),e6=ne('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function Th(t,e){ue(e,!1);const n=Ye(),r=()=>he(zt,"$currentConstraintStore",n),i=R(),o=R(),a=R(),c=R(),u=R(),_=R(),h=R(),g=R(),v=R();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function I(G,F){return F===B.TEXT_ONLY?G.value?G.value:"-":G.value??""}function O(G){if(G!==d.EDGE_INEQUALITY&&G!==d.ONE_WAY_DOOR)return 0;const F=Qn(f(g)[0]);return Qn(f(g)[1]).subtract(F).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>(Q(m()),Su),()=>{y(o,dn(m().toolId,$t)??Su)}),D(()=>(Q(m()),f(o)),()=>{y(a,m().shape??f(o))}),D(()=>(f(a),B),()=>{var G;y(c,((G=f(a))==null?void 0:G.type)||B.CIRCLE)}),D(()=>f(a),()=>{var G;y(u,((G=f(a))==null?void 0:G.fontSize)??.2)}),D(()=>f(a),()=>{var G;y(_,((G=f(a))==null?void 0:G.fontColor)??"black")}),D(()=>f(a),()=>{y(h,{...f(a),stroke:"var(--constraint-selected-color)",strokeWidth:f(a).strokeWidth?f(a).strokeWidth+.07:.07})}),D(()=>Q(m()),()=>{y(g,m().cells)}),D(()=>f(g),()=>{y(v,V$(r_(f(g))))}),be(),pe();var b=Se(),S=se(b);{var k=G=>{var F=e6(),Y=se(F);{var H=Z=>{var ie=qP(),me=se(ie);{var oe=Ne=>{ar(Ne,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(h)}})};re(me,Ne=>{E()&&E()===f(i)&&Ne(oe)})}var Ee=M(me);ar(Ee,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(a)}}),N(Z,ie)},j=Z=>{var ie=Se(),me=se(ie);{var oe=Ne=>{var xe=ZP(),Le=se(xe);{var Oe=tt=>{ar(tt,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(h)}})};re(Le,tt=>{E()&&E()===f(i)&&tt(Oe)})}var et=M(Le);ar(et,{get x(){return f(v).x},get y(){return f(v).y},get shape(){return f(a)}}),N(Ne,xe)},Ee=Ne=>{var xe=Se(),Le=se(xe);{var Oe=tt=>{var Gt=QP(),Pt=se(Gt);{var tn=Mt=>{Rh(Mt,{get coords(){return f(g)},get shape(){return f(h)}})};re(Pt,Mt=>{E()&&E()===f(i)&&Mt(tn)})}var Tt=M(Pt);Rh(Tt,{get coords(){return f(g)},get shape(){return f(a)}}),N(tt,Gt)},et=tt=>{var Gt=JP(),Pt=se(Gt);{var tn=Mt=>{Er(Mt,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(h)}})};re(Pt,Mt=>{E()&&E()===f(i)&&Mt(tn)})}var Tt=M(Pt);Er(Tt,{get cx(){return f(v).x},get cy(){return f(v).y},get shape(){return f(a)}}),N(tt,Gt)};re(Le,tt=>{f(c)===B.BORDER_LINE?tt(Oe):tt(et,!1)},!0)}N(Ne,xe)};re(me,Ne=>{f(c)===B.TEXT_ONLY?Ne(oe):Ne(Ee,!1)},!0)}N(Z,ie)};re(Y,Z=>{m().toolId===d.EDGE_INEQUALITY||m().toolId===d.ONE_WAY_DOOR?Z(H):Z(j,!1)})}var J=M(Y);te(()=>L(J,"transform",`rotate(${O(m().toolId)}, ${f(v).x}, ${f(v).y} )`));var le=V(J,!0);te(()=>ot(le,I(m(),f(c)))),W(J),te(()=>{L(J,"x",f(v).x),L(J,"y",f(v).y),L(J,"font-size",f(u)),L(J,"fill",f(_))}),N(G,F)};re(S,G=>{f(g).length===2&&G(k)})}N(t,b),de()}var t6=ne('<g class="edge-tool"><!></g>'),n6=ne('<g class="edge-tool-preview"><!></g>');function Dh(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var i=Se(),o=se(i);{var a=u=>{var _=t6(),h=V(_);Th(h,{get tool(){return n()},get c_id(){return r()}}),W(_),te(()=>L(_,"data-id",`${r()}`)),N(u,_)},c=u=>{var _=n6();L(_,"opacity",.5);var h=V(_);Th(h,{get tool(){return n()}}),W(_),N(u,_)};re(o,u=>{r()!==void 0?u(a):u(c,!1)})}N(t,i)}var r6=ne('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function i6(t){var e=r6(),n=V(e);L(n,"opacity",.5),W(e),N(t,e)}var o6=ne('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function s6(t,e){ue(e,!1);const n=R();let r=U(e,"tool",8);U(e,"c_id",8,void 0),D(()=>Q(r()),()=>{y(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),be(),pe();var i=o6();te(()=>L(i,"transform",`translate(${f(n).x} ${f(n).y})`)),N(t,i),de()}var a6=ne('<g class="fog-lights-layer svelte-1t48yul"></g>');function l6(t,e){ue(e,!1);const n=Ye(),r=()=>he(Zt,"$toolStore",n),i=R();let o=U(e,"element",8);D(()=>r(),()=>{y(i,r())}),be(),pe();var a=a6();lt(a,5,()=>Object.entries(o()),c=>c[0],(c,u)=>{s6(c,{get tool(){return f(u)[1]},get c_id(){return f(u)[0]}})}),W(a),te(()=>wt(a,"inactive",f(i)!==d.FOG_LIGHTS)),N(t,a),de()}var c6=ne('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!></svg>');function u6(t,e){ue(e,!1);const n=Ye(),r=()=>he(mn,"$gridStore",n),i=()=>he(mt,"$localConstraintsStore",n),o=()=>he(Zt,"$toolStore",n),a=()=>he(Xn,"$cellsStore",n),c=()=>he(yv,"$fogLightsStore",n),u=()=>he(u8,"$outsideDirectionToolsStore",n),_=()=>he(Ml,"$singleCellToolsStore",n),h=()=>he(l8,"$cageToolsStore",n),g=()=>he(o8,"$lineToolsStore",n),v=()=>he(c8,"$cloneToolsStore",n),m=()=>he(a8,"$arrowToolsStore",n),E=()=>he(s8,"$cornerLineToolsStore",n),I=()=>he(n8,"$edgeToolsStore",n),O=()=>he(i8,"$cornerToolsStore",n),b=()=>he(r8,"$centerCornerOrEdgeToolsStore",n),S=()=>he(Xu,"$simpleCellToolPreviewStore",n),k=()=>he(qu,"$singleCellArrowPreviewStore",n),G=()=>he(Zu,"$singleCellMultiArrowPreviewStore",n),F=()=>he(Qu,"$edgeToolPreviewStore",n),Y=()=>he(Ju,"$cornerToolPreviewStore",n),H=()=>he(Ka,"$outsideDirectionToolPreviewStore",n),j=R(),J=R(),le=R();let Z=U(e,"svgRef",12,null);function ie(){for(const[Ze,tr]of i().entries()){if(!go(Ze))continue;if(Object.entries(tr).some(([js,Xr])=>!kt(Xr.cell,f(J))))return!0}return!1}function me(Ze,tr){const Vi=ie(),js=go(tr),Xr=Vi||js?1:.2,Wl=-Xr,Ks=-Xr,Vs=Ze.nCols+2*Xr,zl=Ze.nRows+2*Xr;return{x:Wl,y:Ks,width:Vs,height:zl}}function oe(Ze){return`${Ze.x} ${Ze.y} ${Ze.width} ${Ze.height}`}D(()=>r(),()=>{y(j,r())}),D(()=>f(j),()=>{y(J,{nRows:f(j).nRows,nCols:f(j).nCols})}),D(()=>(f(J),o()),()=>{y(le,me(f(J),o()))}),be(),pe();var Ee=c6();te(()=>L(Ee,"viewBox",oe(f(le))));var Ne=V(Ee);i6(Ne);var xe=M(Ne);b4(xe,{get boundingBox(){return f(le)},get gridShape(){return f(J)}});var Le=M(xe);y4(Le,{get gridShape(){return f(J)}});var Oe=M(Le);lF(Oe,{get grid(){return r()}});var et=M(Oe);Q8(et,{get gridShape(){return f(J)}});var tt=M(et);lt(tt,5,a,It,(Ze,tr)=>{MF(Ze,{get cell(){return f(tr)}})}),W(tt);var Gt=M(tt);t4(Gt,{});var Pt=M(Gt);l6(Pt,{get element(){return c()}});var tn=M(Pt);hr(tn,{get elements(){return u()},g_name:"outside-direction-tools-layer",Component:Ah});var Tt=M(tn);hr(Tt,{get elements(){return _()},g_name:"single-cell-tools-layer",Component:FP});var Mt=M(Tt);hr(Mt,{get elements(){return h()},g_name:"cage-tools-layer",Component:uP});var nn=M(Mt);hr(nn,{get elements(){return g()},g_name:"line-tools-layer",Component:aP});var dr=M(nn);hr(dr,{get elements(){return v()},g_name:"clone-tools-layer",Component:fP});var er=M(dr);hr(er,{get elements(){return m()},g_name:"arrow-tools-layer",Component:VP});var Yi=M(er);tF(Yi,{});var Or=M(Yi);I4(Or,{});var br=M(Or);iF(br,{});var $e=M(br);hr($e,{get elements(){return E()},g_name:"corner-line-tools-layer",Component:bP});var we=M($e);sF(we,{get boundingBox(){return f(le)}});var ke=M(we);q8(ke,{});var Ue=M(ke);hr(Ue,{get elements(){return I()},g_name:"edge-tools-layer",Component:Dh});var At=M(Ue);hr(At,{get elements(){return O()},g_name:"corner-tools-layer",Component:yh});var Bo=M(At);hr(Bo,{get elements(){return b()},g_name:"center-corner-edge-tools-layer",Component:Z4});var Ys=M(Bo);QF(Ys,{});var wr=M(Ys);lt(wr,5,a,It,(Ze,tr)=>{DF(Ze,{get cell(){return f(tr)}})}),W(wr);var Cn=M(wr);N4(Cn,{});var Yr=M(Cn);f4(Yr,{});var vi=M(Yr);{var Hl=Ze=>{Dv(Ze,{get tool(){return S()}})};re(vi,Ze=>{cp(o())&&o()!==d.FOG_LIGHTS&&S()&&Ze(Hl)})}var jr=M(vi);{var Bl=Ze=>{Nv(Ze,{get tool(){return k()}})};re(jr,Ze=>{fl(o())&&k()&&Ze(Bl)})}var Kr=M(jr);{var Vr=Ze=>{Tv(Ze,{get tool(){return G()}})};re(Kr,Ze=>{gl(o())&&G()&&Ze(Vr)})}var ji=M(Kr);{var Wo=Ze=>{Dh(Ze,{get tool(){return F()}})};re(ji,Ze=>{hl(o())&&F()&&Ze(Wo)})}var Ki=M(ji);{var zo=Ze=>{yh(Ze,{get tool(){return Y()}})};re(Ki,Ze=>{Id(o())&&Y()&&Ze(zo)})}var Yo=M(Ki);{var jo=Ze=>{Ah(Ze,{get tool(){return H()}})};re(Yo,Ze=>{go(o())&&H()&&Ze(jo)})}W(Ee),Ti(Ee,Ze=>Z(Ze),()=>Z()),N(t,Ee),de()}function d6(t){return Nw(t)?(Zb(),!0):!1}function _6(t){return xw(t)?(qp(),!0):!1}function f6(t){return Rw(t)?(Zp(),!0):!1}function wu(t){(d6(t)||_6(t)||f6(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var g6=ce('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function h6(t,e){ue(e,!1);const n=Ye(),r=()=>he(Lv,"$InputHandlerStore",n),i=()=>he(vo,"$svgRefStore",n),o=R();let a=R(null);function c(v){return m=>{v&&f(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===f(a))&&v(m)}}D(()=>r(),()=>{y(o,r())}),be();var u=g6();Me("keydown",ru,function(...v){wu==null||wu.apply(this,v)});var _=Bg(()=>{var v;return c((v=f(o))==null?void 0:v.keyDown)});Me("keydown",ru,function(...v){var m;(m=f(_))==null||m.apply(this,v)});var h=Bg(()=>{var v;return c((v=f(o))==null?void 0:v.keyUp)});Me("keyup",ru,function(...v){var m;(m=f(h))==null||m.apply(this,v)});var g=V(u);u6(g,{get svgRef(){return Yh(),i()},set svgRef(v){ws(vo,v)},$$legacy:!0}),W(u),Ti(u,v=>y(a,v),()=>f(a)),Me("pointerdown",u,au(Zn(v=>{var m;v.currentTarget.focus(),(m=f(o))==null||m.pointerDown(v)})),!0),Me("pointermove",u,au(Zn(v=>{var m;v.currentTarget.focus(),(m=f(o))==null||m.pointerMove(v)})),!0),Me("pointerup",u,au(Zn(v=>{var m;v.currentTarget.focus(),(m=f(o))==null||m.pointerUp(v)})),!0),N(t,u),de()}var p6=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function v6(t){var e=p6();N(t,e)}var m6=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function E6(t){var e=m6();N(t,e)}var C6=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function I6(t){var e=C6();N(t,e)}var O6=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function b6(t){var e=O6();N(t,e)}var w6=ce('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function y6(t,e){ue(e,!1);const n=Ye(),r=()=>he(Mo,"$commandHistoryStore",n),i=()=>he(Yu,"$selectOnStore",n),o=R(),a=R();function c(){qp()}function u(){Zp()}function _(){console.log("check")}function h(){ws(Yu,!i())}D(()=>r(),()=>{y(o,r()._undoStack.length===0)}),D(()=>r(),()=>{y(a,r()._redoStack.length===0)}),be(),pe();var g=w6(),v=V(g),m=V(v);b6(m),W(v);var E=M(v,2),I=V(E);E6(I),W(E);var O=M(E,2);O.disabled=!0;var b=V(O);v6(b),W(O);var S=M(O,2),k=V(S);I6(k),W(S),W(g),te(()=>{v.disabled=f(o),E.disabled=f(a),L(S,"aria-checked",i()),wt(S,"active",i())}),Me("click",v,c),Me("click",E,u),Me("click",O,_),Me("click",S,h),N(t,g),de()}var L6=ce('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),A6=ce('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),S6=ce('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),N6=ce('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function x6(t,e){ue(e,!1);const n=Ye(),r=()=>he(di,"$settingsStore",n),i=()=>he(nl,"$penColorStore",n),o=()=>he(Lv,"$InputHandlerStore",n),a=R(),c=R(),u=[];let _=U(e,"selectedTool",8);const h=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let v=R(!1);function m(H){return H?g:h}function E(H){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(H)}function I(H){const j=H.currentTarget;if(!j)return;const J=j.getAttribute("aria-checked");y(v,J!=="true")}D(()=>r(),()=>{y(a,r().penToolActive)}),D(()=>r(),()=>{y(c,r().letterToolActive)}),be(),pe();var O=N6(),b=V(O);{var S=H=>{var j=Se(),J=se(j);lt(J,1,()=>h,It,(le,Z)=>{var ie=L6(),me=V(ie);an(me);var oe;Ri(2),W(ie),te(()=>{L(ie,"data-value",f(Z)),wt(ie,"active",i()===f(Z)),oe!==(oe=f(Z))&&(me.value=(me.__value=f(Z))==null?"":f(Z))}),dl(u,[],me,()=>(f(Z),i()),Ee=>ws(nl,Ee)),N(le,ie)}),N(H,j)},k=H=>{var j=Se(),J=se(j);lt(J,1,()=>m(f(v)),It,(le,Z)=>{var ie=A6(),me=V(ie),oe=V(me,!0);W(me),Ri(2),W(ie),te(()=>{ew(ie,f(Z)),ot(oe,f(Z))}),Me("click",ie,function(...Ee){var Ne;(Ne=o()&&o().padClick)==null||Ne.apply(this,Ee)}),N(le,ie)}),N(H,j)};re(b,H=>{_()===d.PEN_TOOL&&f(a)?H(S):H(k,!1)})}var G=M(b,2);{var F=H=>{var j=S6();te(()=>{L(j,"aria-checked",f(v)),wt(j,"letter-checked",f(v)),wt(j,"num-checked",!f(v))}),Me("click",j,I),N(H,j)};re(G,H=>{f(c)&&E(_())&&H(F)})}var Y=M(G,2);W(O),te(()=>{wt(O,"digit",_()===d.DIGIT),wt(O,"center",_()===d.CENTER_PM),wt(O,"corner",_()===d.CORNER_PM),wt(O,"color",_()===d.HIGHLIGHTS),wt(O,"pen",_()===d.PEN_TOOL),wt(Y,"letter-tool",f(c))}),Me("click",Y,function(...H){var j;(j=o()&&o().padClick)==null||j.apply(this,H)}),N(t,O),de()}var R6=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function T6(t){var e=R6();N(t,e)}var D6=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function k6(t){var e=D6();N(t,e)}var G6=ce('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function cs(t,e){ue(e,!1);const n=[];let r=U(e,"selectedTool",12),i=U(e,"value",8),o=U(e,"title",8,void 0);function a(){ju(i())}pe();var c=G6(),u=V(c);an(u);var _,h=M(u,2);gt(h,e,"default",{}),W(c),te(()=>{L(c,"title",o()),wt(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),dl(n,[],u,()=>(i(),r()),r),Me("change",u,a),N(t,c),de()}var M6=ce('<span aria-hidden="true">1</span>'),U6=ce('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),$6=ce('<span aria-hidden="true" style="font-size: 50%">123</span>'),F6=ce('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),P6=ce('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),H6=ce('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function B6(t,e){ue(e,!1);const n=Ye(),r=()=>he(di,"$settingsStore",n);let i=U(e,"selectedTool",12);pe();var o=H6(),a=V(o);cs(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=M6();N(v,E)},$$slots:{default:!0},$$legacy:!0});var c=M(a,2);cs(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=U6();N(v,E)},$$slots:{default:!0},$$legacy:!0});var u=M(c,2);cs(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=$6();N(v,E)},$$slots:{default:!0},$$legacy:!0});var _=M(u,2);cs(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=F6(),I=V(E);T6(I),W(E),N(v,E)},$$slots:{default:!0},$$legacy:!0});var h=M(_,2);{var g=v=>{cs(v,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=P6(),O=V(I);k6(O),W(I),N(m,I)},$$slots:{default:!0},$$legacy:!0})};re(h,v=>{r().penToolActive&&v(g)})}W(o),N(t,o),de()}var W6=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function z6(t){var e=W6();N(t,e)}var Y6=ce('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Bs(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var i=Y6(),o=V(i),a=V(o);gt(a,e,"default",{}),W(o),W(i),te(()=>L(i,"title",n())),Me("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),N(t,i)}var j6=ce('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),K6=ce('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function V6(t,e){ue(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function i(){Jp(),rl(),n(!1)}pe(),Wr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=K6(),u=M(V(c),2);Sl(u,{children:(_,h)=>{var g=j6(),v=se(g),m=M(v,2);Me("click",v,i),Me("click",m,r),N(_,g)},$$slots:{default:!0}}),W(c),N(o,c)},$$slots:{default:!0},$$legacy:!0}),de()}var X6=ce("<!> <!>",1);function q6(t){let e=R(!1);function n(){y(e,!0)}var r=X6(),i=se(r);Bs(i,{title:"Restart",clickCb:n,children:(a,c)=>{z6(a)},$$slots:{default:!0}});var o=M(i,2);V6(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var Z6=ce('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function us(t,e){let n=U(e,"title",8);var r=Z6(),i=V(r),o=V(i,!0);W(i);var a=M(i,2);gt(a,e,"default",{}),W(r),te(()=>ot(o,n())),N(t,r)}var Q6=ce('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function pn(t,e){let n=U(e,"description",8);var r=Q6(),i=V(r),o=V(i,!0);W(i);var a=M(i,2),c=V(a);gt(c,e,"default",{}),W(a),W(r),te(()=>ot(o,n())),N(t,r)}var J6=ce('<div class="shortcut svelte-1cgt5u5"> </div>');function un(t,e){let n=U(e,"shortcut",8);var r=J6(),i=V(r,!0);W(r),te(()=>ot(i,n())),N(t,r)}var e9=ce("<p></p>"),t9=ce("<!> <!> <!> <!>",1),n9=ce("<!> or <!>",1),r9=ce("<!> <!> <!> <!> <!> <!> <!> <!>",1),i9=ce("<!> <!>",1),o9=ce('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function s9(t,e){let n=U(e,"showModal",12,!1);Wr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=o9(),a=V(o);us(a,{title:"Setting Instructions",children:(g,v)=>{var m=e9();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",N(g,m)},$$slots:{default:!0}});var c=M(a,2);us(c,{title:"General",children:(g,v)=>{pn(g,{description:"Toggle Darkmode",children:(m,E)=>{un(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=M(c,2);us(u,{title:"Selection",children:(g,v)=>{var m=t9(),E=se(m);pn(E,{description:"Select cells",children:(S,k)=>{un(S,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=M(E,2);pn(I,{description:"Add to current selection",children:(S,k)=>{un(S,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var O=M(I,2);pn(O,{description:"Remove from current selection",children:(S,k)=>{un(S,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var b=M(O,2);pn(b,{description:"Add or remove from current selection",children:(S,k)=>{un(S,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var _=M(u,2);us(_,{title:"Change Tool",children:(g,v)=>{var m=r9(),E=se(m);pn(E,{description:"Cycle Tool",children:(Y,H)=>{un(Y,{shortcut:"Space"})},$$slots:{default:!0}});var I=M(E,2);pn(I,{description:"Change to Digit Tool",children:(Y,H)=>{un(Y,{shortcut:"Z"})},$$slots:{default:!0}});var O=M(I,2);pn(O,{description:"Change to Corner Pencilmark Tool",children:(Y,H)=>{un(Y,{shortcut:"X"})},$$slots:{default:!0}});var b=M(O,2);pn(b,{description:"Change to Center Pencilmark Tool",children:(Y,H)=>{un(Y,{shortcut:"C"})},$$slots:{default:!0}});var S=M(b,2);pn(S,{description:"Change to Highlights Tool",children:(Y,H)=>{un(Y,{shortcut:"V"})},$$slots:{default:!0}});var k=M(S,2);pn(k,{description:"Quickshift To Corner Pencilmark Tool",children:(Y,H)=>{un(Y,{shortcut:"Shift"})},$$slots:{default:!0}});var G=M(k,2);pn(G,{description:"Quickshift To Center Pencilmark Tool",children:(Y,H)=>{un(Y,{shortcut:"Ctrl"})},$$slots:{default:!0}});var F=M(G,2);pn(F,{description:"Quickshift To Highlights Tool",children:(Y,H)=>{var j=n9(),J=se(j);un(J,{shortcut:"Shift + Ctrl"});var le=M(J,2);un(le,{shortcut:"Alt"}),N(Y,j)},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}});var h=M(_,2);us(h,{title:"Undo/Redo",children:(g,v)=>{var m=i9(),E=se(m);pn(E,{description:"Undo",children:(O,b)=>{un(O,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=M(E,2);pn(I,{description:"Redo",children:(O,b)=>{un(O,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),N(g,m)},$$slots:{default:!0}}),W(o),N(r,o)},$$slots:{default:!0},$$legacy:!0})}var a9=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function l9(t){var e=a9();N(t,e)}var c9=ce("<!> <!>",1);function u9(t){let e=R(!1);function n(){y(e,!0)}var r=c9(),i=se(r);Bs(i,{title:"Info",clickCb:n,children:(a,c)=>{l9(a)},$$slots:{default:!0}});var o=M(i,2);s9(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var d9=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function _9(t){var e=d9();N(t,e)}var f9=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function g9(t){var e=f9();N(t,e)}function h9(t){let e=R(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),y(e,!f(e))}Bs(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=Se(),_=se(u);{var h=v=>{g9(v)},g=v=>{_9(v)};re(_,v=>{f(e)?v(h):v(g,!1)})}N(a,u)},$$slots:{default:!0}})}function Gv(t,e){ue(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),i=U(e,"options",8);pe();var o=Se(),a=se(o);{var c=u=>{var _=Se(),h=se(_);Vh(h,()=>r()[n().type],(g,v)=>{v(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=Se(),O=se(I);{var b=k=>{al(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},S=k=>{var G=Nb();te(()=>ot(G,n().raw)),N(k,G)};re(O,k=>{"tokens"in n()&&n().tokens?k(b):k(S,!1)})}N(m,I)},$$slots:{default:!0}})}),N(u,_)};re(a,u=>{r()[n().type]&&u(c)})}N(t,o),de()}function al(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),i=U(e,"options",8);var o=Se(),a=se(o);{var c=u=>{var _=Se(),h=se(_);lt(h,1,n,It,(g,v)=>{Gv(g,{get token(){return f(v)},get renderers(){return r()},get options(){return i()}})}),N(u,_)};re(a,u=>{n()&&u(c)})}N(t,o)}function Mv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function Uv(t){return t.startsWith("/")||t.startsWith("#")}function p9(t,e){return e.slug(t).replace(/--+/g,"-")}function v9(t,e){ue(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;let o=R();D(()=>(Q(n()),Q(r())),()=>{y(o,p9(n().text,r().slugger))}),be(),pe();var a=Se(),c=se(a);return qh(c,()=>`h${n().depth}`,!1,(u,_)=>{let h;te(()=>h=Kh(u,h,{id:f(o)},void 0,u.namespaceURI===rd,u.nodeName.includes("-")));var g=Se(),v=se(g);gt(v,e,"default",{}),N(_,g)}),N(t,a),Je(e,"renderers",i),de({renderers:i})}var m9=ce("<blockquote><!></blockquote>");function E9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=m9(),a=V(o);return gt(a,e,"default",{}),W(o),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}function C9(t,e){ue(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8),o=R();D(()=>Q(n()),()=>{y(o,n().ordered?"ol":"ul")}),be(),pe();var a=Se(),c=se(a);qh(c,()=>f(o),!1,(u,_)=>{let h;te(()=>h=Kh(u,h,{start:n().start||1},void 0,u.namespaceURI===rd,u.nodeName.includes("-")));var g=Se(),v=se(g);lt(v,1,()=>n().items,It,(m,E)=>{var I=qe(()=>({...f(E)}));Gv(m,{get token(){return f(I)},get options(){return r()},get renderers(){return i()}})}),N(_,g)}),N(t,a),de()}var I9=ce("<li><!></li>");function O9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=I9(),a=V(o);return gt(a,e,"default",{}),W(o),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var b9=ce("<br>");function w9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=b9();return N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var y9=ce("<pre><code> </code></pre>");function L9(t,e){ue(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;pe();var o=y9(),a=V(o),c=V(a,!0);return W(a),W(o),te(()=>{rw(a,`lang-${n().lang}`),ot(c,n().text)}),N(t,o),Je(e,"options",r),Je(e,"renderers",i),de({options:r,renderers:i})}var A9=ce("<code> </code>");function S9(t,e){ue(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;pe();var o=A9(),a=V(o,!0);return te(()=>ot(a,n().raw.slice(1,n().raw.length-1))),W(o),N(t,o),Je(e,"options",r),Je(e,"renderers",i),de({options:r,renderers:i})}var N9=ce('<th scope="col"><!></th>'),x9=ce("<td><!></td>"),R9=ce("<tr></tr>"),T9=ce("<table><thead><tr></tr></thead><tbody></tbody></table>");function D9(t,e){ue(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8);pe();var o=T9(),a=V(o),c=V(a);lt(c,5,()=>n().header,It,(_,h)=>{var g=N9(),v=V(g);al(v,{get tokens(){return f(h).tokens},get options(){return r()},get renderers(){return i()}}),W(g),N(_,g)}),W(c),W(a);var u=M(a);lt(u,5,()=>n().rows,It,(_,h)=>{var g=R9();lt(g,5,()=>f(h),It,(v,m)=>{var E=x9(),I=V(E);al(I,{get tokens(){return f(m).tokens},get options(){return r()},get renderers(){return i()}}),W(E),N(v,E)}),W(g),N(_,g)}),W(u),W(o),N(t,o),de()}function k9(t,e){ue(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;pe();var o=Se(),a=se(o);return nw(a,()=>n().text),N(t,o),Je(e,"options",r),Je(e,"renderers",i),de({options:r,renderers:i})}var G9=ce("<p><!></p>");function M9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=G9(),a=V(o);return gt(a,e,"default",{}),W(o),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var U9=ce("<a><!></a>");function $9(t,e){ue(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;pe();var o=U9();te(()=>L(o,"href",Uv(n().href)?Mv(r().baseUrl,n().href):n().href));var a=V(o);return gt(a,e,"default",{}),W(o),te(()=>L(o,"title",n().title)),N(t,o),Je(e,"renderers",i),de({renderers:i})}function F9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=se(o);return gt(a,e,"default",{}),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var P9=ce("<dfn><!></dfn>");function H9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=P9(),a=V(o);return gt(a,e,"default",{}),W(o),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var B9=ce("<del><!></del>");function W9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=B9(),a=V(o);return gt(a,e,"default",{}),W(o),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var z9=ce("<em><!></em>");function Y9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=z9(),a=V(o);return gt(a,e,"default",{}),W(o),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var j9=ce("<hr>");function K9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=j9();return N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var V9=ce("<strong><!></strong>");function X9(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=V9(),a=V(o);return gt(a,e,"default",{}),W(o),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}var q9=ce('<img class="markdown-image svelte-z38cge">');function Z9(t,e){ue(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;pe();var o=q9();return te(()=>L(o,"src",Uv(n().href)?Mv(r().baseUrl,n().href):n().href)),te(()=>{L(o,"title",n().title),L(o,"alt",n().text)}),N(t,o),Je(e,"renderers",i),de({renderers:i})}function kh(t,e){ue(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=se(o);return gt(a,e,"default",{}),N(t,o),Je(e,"token",n),Je(e,"options",r),Je(e,"renderers",i),de({token:n,options:r,renderers:i})}const Q9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,J9=Object.hasOwnProperty;class eH{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=tH(e,n===!0);const o=i;for(;J9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function tH(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(Q9,"").replace(/ /g,"-"))}function o_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let zi=o_();function $v(t){zi=t}const Fv=/[&<>"']/,nH=new RegExp(Fv.source,"g"),Pv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,rH=new RegExp(Pv.source,"g"),iH={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gh=t=>iH[t];function Mn(t,e){if(e){if(Fv.test(t))return t.replace(nH,Gh)}else if(Pv.test(t))return t.replace(rH,Gh);return t}const oH=/(^|[^\[])\^/g;function Ot(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(oH,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Mh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Es={exec:()=>null};function Uh(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function ds(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function sH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function $h(t,e,n,r){const i=e.href,o=e.title?Mn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:Mn(a)}}function aH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class ll{constructor(e){Ce(this,"options");Ce(this,"rules");Ce(this,"lexer");this.options=e||zi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ds(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=aH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=ds(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:ds(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=ds(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const h=u.join(`
`),g=h.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${h}`:h,o=o?`${o}
${g}`:g;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=v,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),O=this.blockquote(I);a[a.length-1]=O,i=i.substring(0,i.length-E.raw.length)+O.raw,o=o.substring(0,o.length-E.text.length)+O.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),O=this.list(I);a[a.length-1]=O,i=i.substring(0,i.length-m.raw.length)+O.raw,o=o.substring(0,o.length-E.raw.length)+O.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",h="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),v=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,h=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,h=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(_+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),S=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),F=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let H;if(v=Y,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),H=v):H=v.replace(/\t/g,"    "),k.test(v)||G.test(v)||F.test(v)||b.test(v)||S.test(v))break;if(H.search(/[^ ]/)>=E||!v.trim())h+=`
`+H.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(g)||G.test(g)||S.test(g))break;h+=`
`+v}!m&&!v.trim()&&(m=!0),_+=Y+`
`,e=e.substring(Y.length+1),g=H.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let I=null,O;this.options.gfm&&(I=/^\[[ xX]\] /.exec(h),I&&(O=I[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:_,task:!!I,checked:O,loose:!1,text:h,tokens:[]}),o.raw+=_}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const _=o.items[u].tokens.filter(g=>g.type==="space"),h=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));o.loose=h}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Uh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(Uh(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Mn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=ds(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=sH(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),$h(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return $h(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,h=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){h+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+h);const v=[...i[0]][0].length,m=e.slice(0,a+i.index+v+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Mn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Mn(n[1]),i="mailto:"+r):(r=Mn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Mn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Mn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Mn(n[0]),{type:"text",raw:n[0],text:r}}}}const lH=/^(?:[ \t]*(?:\n|$))+/,cH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,uH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ws=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,dH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Hv=/(?:[*+-]|\d{1,9}[.)])/,Bv=Ot(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Hv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),s_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,_H=/^[^\n]+/,a_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,fH=Ot(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",a_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gH=Ot(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Hv).getRegex(),Pl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",l_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,hH=Ot("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",l_).replace("tag",Pl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Wv=Ot(s_).replace("hr",Ws).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pl).getRegex(),pH=Ot(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Wv).getRegex(),c_={blockquote:pH,code:cH,def:fH,fences:uH,heading:dH,hr:Ws,html:hH,lheading:Bv,list:gH,newline:lH,paragraph:Wv,table:Es,text:_H},Fh=Ot("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ws).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pl).getRegex(),vH={...c_,table:Fh,paragraph:Ot(s_).replace("hr",Ws).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Fh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pl).getRegex()},mH={...c_,html:Ot(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",l_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Es,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ot(s_).replace("hr",Ws).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Bv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,EH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yv=/^( {2,}|\\)\n(?!\s*$)/,CH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,zs="\\p{P}\\p{S}",IH=Ot(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,zs).getRegex(),OH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,bH=Ot(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,zs).getRegex(),wH=Ot("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,zs).getRegex(),yH=Ot("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,zs).getRegex(),LH=Ot(/\\([punct])/,"gu").replace(/punct/g,zs).getRegex(),AH=Ot(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),SH=Ot(l_).replace("(?:-->|$)","-->").getRegex(),NH=Ot("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",SH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),cl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,xH=Ot(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",cl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jv=Ot(/^!?\[(label)\]\[(ref)\]/).replace("label",cl).replace("ref",a_).getRegex(),Kv=Ot(/^!?\[(ref)\](?:\[\])?/).replace("ref",a_).getRegex(),RH=Ot("reflink|nolink(?!\\()","g").replace("reflink",jv).replace("nolink",Kv).getRegex(),u_={_backpedal:Es,anyPunctuation:LH,autolink:AH,blockSkip:OH,br:Yv,code:EH,del:Es,emStrongLDelim:bH,emStrongRDelimAst:wH,emStrongRDelimUnd:yH,escape:zv,link:xH,nolink:Kv,punctuation:IH,reflink:jv,reflinkSearch:RH,tag:NH,text:CH,url:Es},TH={...u_,link:Ot(/^!?\[(label)\]\((.*?)\)/).replace("label",cl).getRegex(),reflink:Ot(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",cl).getRegex()},td={...u_,escape:Ot(zv).replace("])","~|])").getRegex(),url:Ot(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},DH={...td,br:Ot(Yv).replace("{2,}","*").getRegex(),text:Ot(td.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ba={normal:c_,gfm:vH,pedantic:mH},_s={normal:u_,gfm:td,breaks:DH,pedantic:TH};class $n{constructor(e){Ce(this,"tokens");Ce(this,"options");Ce(this,"state");Ce(this,"tokenizer");Ce(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||zi,this.options.tokenizer=this.options.tokenizer||new ll,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ba.normal,inline:_s.normal};this.options.pedantic?(n.block=Ba.pedantic,n.inline=_s.pedantic):this.options.gfm&&(n.block=Ba.gfm,this.options.breaks?n.inline=_s.breaks:n.inline=_s.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ba,inline:_s}}static lex(e,n){return new $n(n).lex(e)}static lexInline(e,n){return new $n(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(h=>{_=h.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,_;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)h.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(r=h.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const g=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},g),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(o=e.substring(0,h+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}}class ul{constructor(e){Ce(this,"options");Ce(this,"parser");this.options=e||zi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Mn(i)+'">'+(r?o:Mn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Mn(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let i="";for(let c=0;c<e.items.length;c++){const u=e.items[c];i+=this.listitem(u)}const o=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+o+a+`>
`+i+"</"+o+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let o=0;o<e.header.length;o++)r+=this.tablecell(e.header[o]);n+=this.tablerow({text:r});let i="";for(let o=0;o<e.rows.length;o++){const a=e.rows[o];r="";for(let c=0;c<a.length;c++)r+=this.tablecell(a[c]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Mh(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Mh(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class d_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class qn{constructor(e){Ce(this,"options");Ce(this,"renderer");Ce(this,"textRenderer");this.options=e||zi,this.options.renderer=this.options.renderer||new ul,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new d_}static parse(e,n){return new qn(n).parse(e)}static parseInline(e,n){return new qn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class Cs{constructor(e){Ce(this,"options");Ce(this,"block");this.options=e||zi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?$n.lex:$n.lexInline}provideParser(){return this.block?qn.parse:qn.parseInline}}Ce(Cs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class kH{constructor(...e){Ce(this,"defaults",o_());Ce(this,"options",this.setOptions);Ce(this,"parse",this.parseMarkdown(!0));Ce(this,"parseInline",this.parseMarkdown(!1));Ce(this,"Parser",qn);Ce(this,"Renderer",ul);Ce(this,"TextRenderer",d_);Ce(this,"Lexer",$n);Ce(this,"Tokenizer",ll);Ce(this,"Hooks",Cs);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new ul(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=o[c];o[c]=(...h)=>{let g=u.apply(o,h);return g===!1&&(g=_.apply(o,h)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new ll(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=o[c];o[c]=(...h)=>{let g=u.apply(o,h);return g===!1&&(g=_.apply(o,h)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new Cs;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=o[c];Cs.passThroughHooks.has(a)?o[c]=h=>{if(this.defaults.async)return Promise.resolve(u.call(o,h)).then(v=>_.call(o,v));const g=u.call(o,h);return _.call(o,g)}:o[c]=(...h)=>{let g=u.apply(o,h);return g===!1&&(g=_.apply(o,h)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return $n.lex(e,n??this.defaults)}parser(e,n){return qn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?$n.lex:$n.lexInline,_=a.hooks?a.hooks.provideParser():e?qn.parse:qn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(h=>u(h,a)).then(h=>a.hooks?a.hooks.processAllTokens(h):h).then(h=>a.walkTokens?Promise.all(this.walkTokens(h,a.walkTokens)).then(()=>h):h).then(h=>_(h,a)).then(h=>a.hooks?a.hooks.postprocess(h):h).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let h=u(r,a);a.hooks&&(h=a.hooks.processAllTokens(h)),a.walkTokens&&this.walkTokens(h,a.walkTokens);let g=_(h,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(h){return c(h)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Mn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Ui=new kH;function Ct(t,e){return Ui.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Ui.setOptions(t),Ct.defaults=Ui.defaults,$v(Ct.defaults),Ct};Ct.getDefaults=o_;Ct.defaults=zi;Ct.use=function(...t){return Ui.use(...t),Ct.defaults=Ui.defaults,$v(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Ui.walkTokens(t,e)};Ct.parseInline=Ui.parseInline;Ct.Parser=qn;Ct.parser=qn.parse;Ct.Renderer=ul;Ct.TextRenderer=d_;Ct.Lexer=$n;Ct.lexer=$n.lex;Ct.Tokenizer=ll;Ct.Hooks=Cs;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;qn.parse;$n.lex;function GH(t){return new $n().lex(t)}const MH=()=>({heading:v9,blockquote:E9,list:C9,list_item:O9,br:w9,code:L9,codespan:S9,table:D9,html:k9,paragraph:M9,link:$9,text:F9,def:H9,del:W9,em:Y9,hr:K9,strong:X9,image:Z9,space:kh,escape:kh}),UH=()=>({baseUrl:"/",slugger:new eH});function $H(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},Xh(()=>{console.warn=t})}function Vv(t,e){ue(e,!1),$H();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),i=U(e,"renderers",24,()=>({})),o=R(),a=R(),c=R();D(()=>(Q(n()),Q(i()),Q(r())),()=>{y(o,GH(n())),y(a,{...MH(),...i()}),y(c,{...UH(),...r()})}),be(),pe(),al(t,{get tokens(){return f(o)},get renderers(){return f(a)},get options(){return f(c)}}),de()}var FH=ce('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),PH=ce('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),HH=ce('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function BH(t,e){ue(e,!1);const n=Ye(),r=()=>he(Hr,"$puzzleMetaStore",n),i=R();let o=U(e,"showModal",12,!1);function a(u){return u?Ja(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{y(i,r())}),be(),pe(),Wr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,_)=>{var h=HH(),g=V(h),v=V(g,!0);W(g);var m=M(g,2),E=V(m);te(()=>ot(E,`by ${a(f(i).authors)??""}`)),W(m);var I=M(m,2),O=V(I),b=qe(()=>c(f(i).ruleset));Vv(O,{get source(){return f(b)}}),W(I);var S=M(I,2);{var k=Y=>{var H=FH(),j=M(se(H),2);te(()=>L(j,"href",f(i).ctcUrl)),N(Y,H)};re(S,Y=>{var H,j;(j=(H=f(i))==null?void 0:H.ctcUrl)!=null&&j.length&&Y(k)})}var G=M(S,2);{var F=Y=>{var H=PH(),j=M(se(H),2);te(()=>L(j,"href",f(i).ctcYoutubeUrl)),N(Y,H)};re(G,Y=>{var H,j;(j=(H=f(i))==null?void 0:H.ctcYoutubeUrl)!=null&&j.length&&Y(F)})}W(h),te(()=>{var Y;return ot(v,((Y=f(i))==null?void 0:Y.title)||"Puzzle")}),N(u,h)},$$slots:{default:!0},$$legacy:!0}),de()}var WH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function zH(t){var e=WH();N(t,e)}var YH=ce("<!> <!>",1);function jH(t){let e=R(!1);function n(){y(e,!0)}var r=YH(),i=se(r);Bs(i,{title:"Rules",clickCb:n,children:(a,c)=>{zH(a)},$$slots:{default:!0}});var o=M(i,2);BH(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var KH=ce("<!> <!>",1);function VH(t){let e=R(!1);function n(){y(e,!0)}var r=KH(),i=se(r);Bs(i,{title:"Settings",clickCb:n,children:(a,c)=>{av(a)},$$slots:{default:!0}});var o=M(i,2);lv(o,{get showModal(){return f(e)},set showModal(a){y(e,a)},$$legacy:!0}),N(t,r)}var XH=ce('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function qH(t){var e=XH(),n=V(e);VH(n);var r=M(n,2);jH(r);var i=M(r,2);h9(i);var o=M(i,2);u9(o);var a=M(o,2);q6(a),W(e),N(t,e)}var ZH=ce('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function QH(t,e){ue(e,!1);const n=Ye(),r=()=>he(vo,"$svgRefStore",n),i=()=>he(Hr,"$puzzleMetaStore",n),o=()=>he(Zt,"$toolStore",n),a=R(),c=R();function u(){r()&&r().focus()}function _(Z){return Z?Ja(Z," & ",", "):"Anonymous"}function h(Z){return Z&&Z.length?Z:"Normal sudoku rules apply."}D(()=>i(),()=>{y(a,i().title??"Sudoku")}),D(()=>i(),()=>{y(c,_(i().authors))}),be(),pe();var g=ZH(),v=V(g),m=V(v),E=V(m),I=V(E,!0);W(E);var O=M(E,2),b=V(O);W(O),W(m);var S=M(m,2),k=V(S),G=qe(()=>h(i().ruleset));Vv(k,{get source(){return f(G)}}),W(S),W(v);var F=M(v,2),Y=V(F);qH(Y);var H=M(Y,2),j=V(H);x6(j,{get selectedTool(){return o()}});var J=M(j,2);B6(J,{get selectedTool(){return Yh(),o()},set selectedTool(Z){ws(Zt,Z)},$$legacy:!0}),W(H);var le=M(H,2);y6(le,{}),W(F),W(g),te(()=>{ot(I,f(a)),ot(b,`by ${f(c)??""}`)}),Me("click",F,Zn(()=>{u()})),N(t,g),de()}var JH=ce('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function h7(t,e){ue(e,!1);const n=Ye(),r=()=>he(bl,"$gameModeStore",n),i=R();Xh(async()=>{const m=window.location.origin,E=Wg===""?m:`${m}/${Wg}`;try{await v$({workerURL:`${E}/minizinc-worker.js`,wasmURL:`${E}/minizinc.wasm`,dataURL:`${E}/minizinc.data`})}catch(I){const O="Failed to initialize MiniZinc: "+I.message;console.log(O)}}),D(()=>r(),()=>{y(i,r())}),be(),pe();var o=JH(),a=V(o),c=V(a);{var u=m=>{K$(m)};re(c,m=>{f(i)===Io.SETTING&&m(u)})}var _=M(c,2),h=V(_);h6(h,{}),W(_);var g=M(_,2),v=V(g);QH(v,{}),W(g),W(a),W(o),N(t,o),de()}export{h7 as G,g7 as b,LT as p,rl as r,VT as s};
