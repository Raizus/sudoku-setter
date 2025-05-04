var jI=Object.defineProperty;var KI=(t,e,n)=>e in t?jI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>KI(t,typeof e!="symbol"?e+"":e,n);import{c as $u,o as VI,p as XI,q as cd,a as L,s as te,u as ke,t as ue,d as be,v as qI,m as ZI}from"./disclose-version.eswIe671.js";import{i as fe}from"./legacy.CBYIjwbu.js";import{l as Kh,h as on,k as As,y as Vh,v as ws,R as QI,V as JI,U as ey,g as Fu,i as Xh,K as qh,a0 as ty,j as ny,u as qg,B as ry,aJ as ud,z as oy,x as iy,a2 as dd,ar as Zh,A as Zg,aK as sy,a3 as ay,a8 as ly,m as cy,c as Y,r as P,p as ae,s as $,t as Q,a as le,aL as N,aM as we,Z as d,av as X,_ as O,$ as D,f as oe,aC as _o,aN as Gu,al as it,aO as vu,ak as Qg}from"./utils.Bp9j5Uj0.js";import{s as Ve,i as J,a as me,b as $o,m as Qh}from"./store.D4OU4dvo.js";import{s as ho,u as uy,a as dy,b as _y,c as fy,e as gy,f as hy,g as vy,h as py,t as my}from"./global.Bod0hR-p.js";import{w as It,g as Ne,d as Br}from"./index.DYJKv3QC.js";import{e as Je,i as pt}from"./each.BoOPhUgK.js";import{i as Ey,p as U}from"./props.DtgsZciY.js";import{b as Fo,c as Jh}from"./this.DLpfsf4C.js";import{s as at}from"./render.CTsB0KRz.js";import{s as x,r as fn,a as Cy,c as by,b as wy,d as ev}from"./attributes.CiNh_L_I.js";import{a as Iy,o as tv}from"./index-client.BnGHJMPg.js";import{b as Jg}from"./paths.B0sl77EA.js";function yy(t,e,n,r,o){var i=t,a="",c;Kh(()=>{if(a===(a=e()??"")){on&&As();return}c!==void 0&&(qh(c),c=void 0),a!==""&&(c=Vh(()=>{if(on){ws.data;for(var u=As(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=QI(u);if(u===null)throw JI(),ey;$u(ws,_),i=Fu(u);return}var g=a+"",v=VI(g);$u(Xh(v),v.lastChild),i.before(v)}))})}function gt(t,e,n,r,o){var c;on&&As();var i=(c=e.$$slots)==null?void 0:c[n],a=!1;i===!0&&(i=e[n==="default"?"children":n],a=!0),i===void 0||i(t,a?()=>r:r)}function nv(t,e,n,r,o,i){let a=on;on&&As();var c,u,_=null;on&&ws.nodeType===1&&(_=ws,As());var g=on?ws:t,v;Kh(()=>{const h=e()||null;var m=h==="svg"?ud:null;h!==c&&(v&&(h===null?oy(v,()=>{v=null,u=null}):h===u?iy(v):qh(v)),h&&h!==u&&(v=Vh(()=>{if(_=on?_:m?document.createElementNS(m,h):document.createElement(h),$u(_,_),r){on&&XI(h)&&_.append(document.createComment(""));var E=on?Xh(_):_.appendChild(ny());on&&(E===null?qg(!1):Fu(E)),r(_,E)}ry.nodes_end=_,g.before(_)})),c=h,c&&(u=c))},ty),a&&(qg(!0),Fu(g))}function Rs(t,e,n){var r=t.__className,o=rv(e);on&&t.getAttribute("class")===o?t.__className=o:(r!==o||on&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function Oy(t,e,n){var r=t.__className,o=rv(e);on&&t.className===o?t.__className=o:(r!==o||on&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function rv(t,e){return(t??"")+""}function vt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Zn(t,e,n=e){var r=sy();cd(t,"input",o=>{var i=o?t.defaultValue:t.value;if(i=mu(t)?Eu(i):i,n(i),r&&i!==(i=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=i??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(on&&t.defaultValue!==t.value||ay(e)==null&&t.value)&&n(mu(t)?Eu(t.value):t.value),dd(()=>{var o=e();mu(t)&&o===Eu(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const pu=new Set;function wl(t,e,n,r,o=r){var i=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),cd(n,"change",()=>{var _=n.__value;i&&(_=eh(a,_,n.checked)),o(_)},()=>o(i?[]:null)),dd(()=>{var _=r();if(on&&n.defaultChecked!==n.checked){c=!0;return}i?(_=_||[],n.checked=_.includes(n.__value)):n.checked=Ey(n.__value,_)}),Zh(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),pu.has(a)||(pu.add(a),Zg(()=>{a.sort((_,g)=>_.compareDocumentPosition(g)===4?-1:1),pu.delete(a)})),Zg(()=>{if(c){var _;if(i)_=eh(a,_,n.checked);else{var g=a.find(v=>v.checked);_=g==null?void 0:g.__value}o(_)}})}function eh(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function mu(t){var e=t.type;return e==="number"||e==="range"}function Eu(t){return t===""?null:+t}function xy(t,e,n=e){cd(t,"change",()=>{n(t.files)}),dd(()=>{t.files=e()})}function rt(t,e,n){var r=ly(t,e);r&&r.set&&(t[e]=n,Zh(()=>{t[e]=null}))}function Ay(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Gn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Cu(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Ly(t,e){var i;var n=(i=t.$$events)==null?void 0:i[e.type],r=cy(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}var bi=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(bi||{}),_d=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(_d||{}),ov=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.HEXED_SUDOKU="Hexed Sudoku",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t))(ov||{}),fd=(t=>(t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t))(fd||{}),iv=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(iv||{}),sv=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.INDEXER_CELLS="Indexer Cells",t))(sv||{}),av=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.NEXUS="Nexus",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.FILLOMINO="Fillomino",t.LITS="LITS",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(av||{}),lv=(t=>(t.PENTOMINO_TILLING="Pentomino Tilling",t.PENTOMINO_TILLING_NO_EMPTY_CELLS="Pentomino Tilling No Empty Cells",t))(lv||{}),cv=(t=>(t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t))(cv||{}),uv=(t=>(t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t))(uv||{}),dv=(t=>(t.NURIMISAKI="Nurimisaki",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t))(dv||{}),_v=(t=>(t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t))(_v||{}),fv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(fv||{}),gv=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(gv||{}),hv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(hv||{}),vv=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(vv||{}),pv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(pv||{}),Il=(t=>(t.FOG_LIGHTS="Fog Lights",t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Il||{}),gd=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(gd||{}),hd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(hd||{}),vd=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(vd||{}),pd=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(pd||{}),md=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(md||{}),Ed=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(Ed||{}),Cd=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Cd||{}),bd=(t=>(t.CLONE_REGION="Clone Region",t))(bd||{}),wd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(wd||{}),Id=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Id||{}),yd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(yd||{}),Od=(t=>(t.MAZE_WALL="Maze Wall",t))(Od||{}),xd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(xd||{}),Ad=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Ad||{}),mv=(t=>(t.PEN_TOOL="Pen Tool",t))(mv||{});const Dy={...av,...hv,...vv,...gv,...pv,...fv,..._v,...dv,...uv,...cv,...lv},Ld={...iv,...fd,...ov,...Dy,...sv},Ev={...Il,...gd,...hd,...vd,...pd,...md,...Ed,...Cd,...bd,...wd,...Id,...yd,...Od,...xd},f={..._d,...Ld,...Ev,...Ad,...mv};var W=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.GLOBAL_NURIMISAKI_CONSTRAINTS="Global Nurimisaki Constraints",t.GLOBAL_NURIKABE_CONSTRAINTS="Global Nurikabe Constraints",t.GLOBAL_YIN_YANG_CONSTRAINTS="Global Yin Yang Constraints",t.GLOBAL_SHIKAKU_CONSTRAINTS="Global Shikaku Constraints",t.DIAGONAL_CONSTRAINTS="Diagonal Constraints",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(W||{});function Ry(t){return Object.values(fd).includes(t)}function Cv(t){return Object.values(Ld).includes(t)}function Ny(t){return Object.values(Ev).includes(t)}function Sy(t){return Object.values(Ad).includes(t)}function ky(t){return Ny(t)||Sy(t)||Cv(t)}function yl(t){return Object.values(Il).includes(t)||t===f.COSMETIC_CELL_CENTER_SHAPE}function Ho(t){return Object.values(gd).includes(t)||t===f.COSMETIC_CELL_ARROW}function wi(t){return Object.values(hd).includes(t)||t===f.COSMETIC_CELL_MULTI_ARROW}function Dd(t){return yl(t)||Ho(t)||wi(t)}function Ii(t){return Object.values(vd).includes(t)||t===f.COSMETIC_EDGE}function Ns(t){return Object.values(pd).includes(t)||t===f.COSMETIC_CORNER}function yi(t){return Object.values(md).includes(t)||t===f.COSMETIC_LINE||t===f.COSMETIC_LINE_WITH_POLYGON_ENDS||t===f.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Oi(t){return Object.values(Ed).includes(t)||t===f.COSMETIC_ARROW}function xi(t){return Object.values(Cd).includes(t)||t===f.COSMETIC_CAGE}function Ss(t){return Object.values(yd).includes(t)}function bv(t){return Object.values(Od).includes(t)}function ks(t){return Object.values(bd).includes(t)}function Hr(t){const e=Object.values(wd),n=Object.values(Id);return e.includes(t)||n.includes(t)||t===f.COSMETIC_OUTSIDE_DIRECTION}function Ty(t){return Object.values(xd).includes(t)}function Rd(t){return Object.values(_d).includes(t)}function My(t){return Hr(t)||Dd(t)||yi(t)||Oi(t)||xi(t)||ks(t)}const Uy=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],$y=["Simple Global Constraint","Diagonal Constraints","Value Modifier Constraint","Undetermined Regions Constraint",...Uy,"Cosmetic Tool"];function wv(t){for(const e of Object.values(f))if(e===t)return e}function Iv(t,e){return Object.values(e).includes(t)}var H=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(H||{});function pn(t,e,n){n!==void 0&&(t[e]=n)}function Fy(t){var e,n,r,o,i,a,c,u,_,g,v,h,m,E,w;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(i=t.inset)!=null&&i.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(g=t.strokeDasharray)!=null&&g.editable||(v=t.strokeDashoffset)!=null&&v.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(w=t.displayValue)!=null&&w.editable)}function Pu(t){var n,r,o,i,a,c,u,_,g,v,h,m,E,w,b,I,A,k,M,G,z,T,j;const e={type:t.type};return pn(e,"n",(n=t.n)==null?void 0:n.value),pn(e,"r",(r=t.r)==null?void 0:r.value),pn(e,"height",(o=t.height)==null?void 0:o.value),pn(e,"width",(i=t.width)==null?void 0:i.value),pn(e,"inset",(a=t.inset)==null?void 0:a.value),pn(e,"angle",(c=t.angle)==null?void 0:c.value),pn(e,"fill",(u=t.fill)==null?void 0:u.value),pn(e,"stroke",(_=t.stroke)==null?void 0:_.value),pn(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),pn(e,"strokeDasharray",(v=t.strokeDasharray)==null?void 0:v.value),pn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),pn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),pn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),pn(e,"opacity",(w=t.opacity)==null?void 0:w.value),pn(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(I=t.linePathOptions)==null?void 0:I.shortenHead)==null?void 0:A.value,shortenTail:(M=(k=t.linePathOptions)==null?void 0:k.shortenTail)==null?void 0:M.value,bezierRounding:(z=(G=t.linePathOptions)==null?void 0:G.bezierRounding)==null?void 0:z.value,closeLoops:(j=(T=t.linePathOptions)==null?void 0:T.closeLoops)==null?void 0:j.value}),e}function Gy(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const th={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},nh={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},rh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},sl={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Wu={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Ts={type:"Line",strokeWidth:.125,stroke:"gray"},Nd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},yv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Py={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},oh={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},ih={strokeWidth:.02,stroke:"black"},Ol=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,tr=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Ai=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,Wy=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,sn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Li=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Sd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Te=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Hy=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,zy=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,By=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Di=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Yy=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,jy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Ky=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function Ov(t){return Ho(t)?Hy():wi(t)?zy():t===f.XV?jy():Ii(t)?By():xi(t)?Ol():Oi(t)?Ai():Hr(t)?Wy():yi(t)?Te():ks(t)?Ky():""}var pe=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(pe||{}),Rt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Rt||{}),An=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(An||{}),Le=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(Le||{}),xn=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(xn||{});function Vy(t){if(yl(t)||Ho(t)||wi(t)||yi(t)||Ii(t)||Ns(t)||xi(t)||Hr(t)||Ss(t))return Le;if(Oi(t))return An;if(ks(t))return xn}function Xy(t){if(yl(t)||Ho(t)||wi(t)||yi(t)||Ii(t)||Ns(t)||xi(t)||Hr(t)||Ss(t)||Oi(t)||ks(t))return"Dynamic"}const Ms=[W.ARROW_CONSTRAINT,W.LOCAL_CONSTRAINT,W.ARROW_TOOL,W.LOCAL_ELEMENT],qy={inputOptions:{type:pe.ARROW},toolId:f.ARROW,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Ai(),tags:[],categories:Ms}},Zy={inputOptions:{type:pe.ARROW},toolId:f.AVERAGE_ARROW,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Ai(),tags:[],categories:Ms}},Qy={inputOptions:{type:pe.ARROW,allowSelfIntersection:!0},toolId:f.BULBOUS_ARROW,shape:{type:H.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:Ai(),tags:[],categories:Ms}};pe.ARROW,f.SQUARE_ROOT_ARROW,H.LINE,Ai();const Jy={inputOptions:{type:pe.ARROW},toolId:f.CHAOS_CONSTRUCTION_ARROW,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:Ai(),tags:[],categories:Ms}};function eO(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function tO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function nO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function rO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function oO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const iO={Delete:null,Backspace:null};function sO(t,e=10){if(t in iO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function aO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function lO(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function cO(t){const e={KeyZ:f.DIGIT,KeyX:f.CORNER_PM,KeyC:f.CENTER_PM,KeyV:f.HIGHLIGHTS};return t in e?e[t]:f.DIGIT}function uO(t){let e;return t.altKey?e=f.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=f.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=f.CENTER_PM:e=f.HIGHLIGHTS,e}function xv(t){return t==="Backspace"}function Ri(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||xv(t.key))}function dO(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function _O(t){return dO(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function fO(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function zo(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,i=(e==null?void 0:e.maxLength)??3;if(t.length>i)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Yr(t,e,n){if(t===void 0)return t;let r=t;return xv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const kd=[W.CAGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.CAGE_TOOL,W.LOCAL_ELEMENT],nr=[W.CAGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.CAGE_TOOL,W.LOCAL_ELEMENT];function Av(t,e=5){return zo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Lv(t,e,n){return Yr(t,e,n)}const Pn={type:H.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},xl={type:pe.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},rr={...xl,valueUpdater:(t,e)=>Lv(t,e,Av)},gO={inputOptions:rr,toolId:f.KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:tr(),tags:[],categories:nr}},hO={inputOptions:rr,toolId:f.UNIQUE_DIGITS_CAGE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:tr(),tags:[],categories:nr}},vO={inputOptions:rr,toolId:f.INVERTED_KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:tr(),tags:[],categories:nr}},pO={inputOptions:rr,toolId:f.SUM_CAGE,shape:Pn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:tr(),tags:[],categories:nr}},mO={inputOptions:xl,toolId:f.SUM_CAGE_LOOK_AND_SAY,shape:Pn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Ol(),tags:[],categories:kd}},EO={inputOptions:xl,toolId:f.PARITY_BALANCE_CAGE,shape:Pn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Ol(),tags:[],categories:kd}},CO={inputOptions:rr,toolId:f.DIVISIBLE_KILLER_CAGE,shape:Pn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:tr(),tags:[],categories:nr}},bO={inputOptions:rr,toolId:f.SPOTLIGHT_CAGE,shape:Pn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:tr(),tags:[],categories:nr}},wO={inputOptions:xl,toolId:f.PUTTERIA_CAGE,shape:Pn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Ol(),tags:[],categories:kd}},IO={inputOptions:rr,toolId:f.MULTISET_CAGE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:tr(),tags:[],categories:nr}},yO={inputOptions:rr,toolId:f.VAULTED_CAGE,shape:Pn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:tr(),tags:[],categories:nr}},OO={inputOptions:rr,toolId:f.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Pn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:tr(),tags:[],categories:nr}},xO={inputOptions:rr,toolId:f.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Pn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:tr(),tags:[],categories:nr}},AO={inputOptions:rr,toolId:f.DOUBLERS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:tr(),tags:[],categories:nr}},LO={inputOptions:rr,toolId:f.NEGATORS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:tr(),tags:[],categories:nr}},DO={inputOptions:{type:pe.SELECTION},toolId:f.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[W.CELL_INPUT_TOOL]}},RO={inputOptions:{type:pe.SELECTION},toolId:f.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[W.CELL_INPUT_TOOL]}},NO={inputOptions:{type:pe.SELECTION},toolId:f.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[W.CELL_INPUT_TOOL]}},SO={inputOptions:{type:pe.SELECTION},toolId:f.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[W.CELL_INPUT_TOOL]}},kO={inputOptions:{type:pe.SELECTION},toolId:f.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[W.CELL_INPUT_TOOL]}},TO={inputOptions:{type:pe.SELECTION},toolId:f.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[W.CELL_INPUT_TOOL]}},MO={inputOptions:{type:pe.SELECTION},toolId:f.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[W.CELL_INPUT_TOOL]}},UO={inputOptions:{type:pe.PEN},toolId:f.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},$O={type:pe.CENTER_CORNER_OR_EDGE,targets:Rt.CLOSEST},Td=[W.LOCAL_CONSTRAINT,W.CENTER_CORNER_EDGE_CONSTRAINT,W.LOCAL_ELEMENT];f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,H.CIRCLE,Sd();const FO={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:Rt.CLOSEST,valueUpdater:(t,e)=>Yr(t,e,()=>!0),defaultValue:""},toolId:f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Sd(),tags:[],categories:Td}},GO={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:Rt.CORNER_OR_EDGE,valueUpdater:(t,e)=>Yr(t,e,()=>!0),defaultValue:""},toolId:f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Sd(),tags:[],categories:Td}},PO={inputOptions:{type:pe.CLONE},toolId:f.CLONE_REGION,shape:{type:H.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[W.CLONE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT]}},Al=[W.CORNER_CONSTRAINT,W.LOCAL_CONSTRAINT,W.CORNER_TOOL,W.LOCAL_ELEMENT],Md=[W.CORNER_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.CORNER_TOOL,W.LOCAL_ELEMENT];function Dv(t,e=3){return zo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Rv(t,e,n){return Yr(t,e,n)}function WO(t,e){function n(){return!0}return Yr(t,e,n)}const Ud={type:pe.CORNER,defaultValue:"",valueUpdater:(t,e)=>Rv(t,e,Dv)},HO={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>WO(t,e),defaultValue:""},toolId:f.QUADRUPLE,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Yy(),categories:Md}},zO={inputOptions:Ud,toolId:f.CORNER_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Di(),categories:Md}},BO={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:H.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Di(),categories:Al}},YO={inputOptions:Ud,toolId:f.CORNER_EVEN_COUNT,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Di(),categories:Al}};f.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,H.CIRCLE,Di();const jO={inputOptions:{type:pe.CORNER,defaultValue:"X"},toolId:f.PRODUCT_SQUARE,shape:{type:H.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Di(),categories:Al}},KO={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:f.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Di(),categories:Al}},Ll=[W.EDGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.EDGE_TOOL,W.LOCAL_ELEMENT],or=[W.EDGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.EDGE_TOOL,W.LOCAL_ELEMENT],Us=.15,Nv=.02,Bo={type:H.CIRCLE,r:{editable:!0,value:Us,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Nv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},$d={type:H.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function VO(t,e=1){return zo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Sv(t,e=3){return zo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function XO(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Fd(t,e,n){return Yr(t,e,n)}function qO(t,e){return t===void 0?"V":XO(e)?e.toUpperCase():t}function ZO(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function kv(t,e){return t===void 0?"<":ZO(e)?e:t}const $s={type:pe.EDGE,valueUpdater:(t,e)=>Fd(t,e,Sv)},QO={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Fd(t,e,VO)},toolId:f.RATIO,negative_constraints:[{toolId:f.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:H.CIRCLE,r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:or}},JO={inputOptions:$s,toolId:f.DIFFERENCE,negative_constraints:[{toolId:f.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:Bo,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:or}},ex={inputOptions:$s,toolId:f.EDGE_SUM,shape:{...Bo,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:or}},tx={inputOptions:{type:pe.EDGE,defaultValue:"V",valueUpdater:qO},toolId:f.XV,negative_constraints:[{toolId:f.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:f.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:f.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:H.TEXT_ONLY,r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:or}},nx={inputOptions:{type:pe.EDGE,valueUpdater:kv,defaultValue:"<"},toolId:f.EDGE_INEQUALITY,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:or}},rx={inputOptions:$s,toolId:f.EDGE_PRODUCT,shape:{...Bo,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:or}},ox={inputOptions:$s,toolId:f.EDGE_MODULO,shape:{...Bo,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:or}},ix={inputOptions:$s,toolId:f.EDGE_FACTOR,shape:{...Bo,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:or}},sx={inputOptions:{type:pe.EDGE},toolId:f.XY_DIFFERENCES,negative_constraints:[{toolId:f.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:H.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:Nv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:or}},ax={inputOptions:{type:pe.EDGE},toolId:f.YIN_YANG_WHITE_KROPKI,shape:Bo,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:or}},lx={inputOptions:{type:pe.EDGE},toolId:f.YIN_YANG_KROPKI,negative_constraints:[{toolId:f.ALL_YIN_YANG_KROPKI_GIVEN,description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given."}],shape:{type:H.CIRCLE,r:{editable:!1,value:Us},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:or}},cx={inputOptions:{type:pe.EDGE},toolId:f.FILLOMINO_REGION_BORDER,shape:$d,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Ll}},ux={inputOptions:{type:pe.EDGE},toolId:f.UNKNOWN_REGION_BORDER,shape:$d,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ll}},dx={inputOptions:{type:pe.EDGE},toolId:f.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:$d,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ll}},_x={inputOptions:{type:pe.EDGE},toolId:f.EDGE_CAVE_ONE_OF_EACH,shape:Bo,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Ll}},fx={inputOptions:{type:pe.EDGE,valueUpdater:kv,defaultValue:"<"},toolId:f.ONE_WAY_DOOR,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:or}},Ni=[W.OUTSIDE_CORNER_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.OUTSIDE_CORNER_TOOL,W.OUTSIDE_DIRECTION_TOOL,W.LOCAL_ELEMENT];function gx(t,e=5){return zo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Tv(t,e,n){return Yr(t,e,n)}const Si={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},ki={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Tv(t,e,gx),defaultValue:"",cornerOrEdge:Rt.CORNER},hx={inputOptions:ki,toolId:f.LITTLE_KILLER_SUM,shape:Si,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Li(),tags:[],categories:Ni}},vx={inputOptions:ki,toolId:f.LITTLE_KILLER_PRODUCT,shape:Si,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Li(),tags:[],categories:Ni}},px={inputOptions:ki,toolId:f.LITTLE_KILLER_LOOK_AND_SAY,shape:Si,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Li(),tags:[],categories:Ni}},mx={inputOptions:ki,toolId:f.X_OMIT_LITTLE_KILLER_SUM,shape:Si,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Li(),tags:[],categories:Ni}},Ex={inputOptions:ki,toolId:f.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:Si,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Li(),tags:[],categories:Ni}},Cx={inputOptions:ki,toolId:f.NEGATORS_LITTLE_KILLER_SUM,shape:Si,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Li(),tags:[],categories:Ni}},an=[W.OUTSIDE_EDGE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.TYPABLE_TOOL,W.OUTSIDE_EDGE_TOOL,W.OUTSIDE_DIRECTION_TOOL,W.LOCAL_ELEMENT];function Ti(t,e=5){return zo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Fs(t,e,n){return Yr(t,e,n)}const ln={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Wn={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Ti),defaultValue:"",cornerOrEdge:Rt.EDGE},bx={inputOptions:Wn,toolId:f.SANDWICH_SUM,shape:ln,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:sn(),tags:[],categories:an}},wx={inputOptions:{...Wn,cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.MYSTERY_SANDWICH_SUM,shape:ln,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:sn(),tags:[],categories:an}},Ix={inputOptions:Wn,toolId:f.SANDWICH_SUM_XOR_X_SUM,shape:ln,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:sn(),tags:[],categories:an}},yx={inputOptions:Wn,toolId:f.X_SUM,shape:ln,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:sn(),tags:[],categories:an}},Ox={inputOptions:Wn,toolId:f.SHORTSIGHTED_X_SUM,shape:ln,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:sn(),tags:[],categories:an}},xx={inputOptions:Wn,toolId:f.SHIFTED_X_SUM,shape:ln,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:sn(),tags:[],categories:an}},Ax={inputOptions:Wn,toolId:f.BROKEN_X_SUM,shape:ln,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:sn(),tags:[],categories:an}},Lx={inputOptions:Wn,toolId:f.X_SUM_SKYSCRAPERS,shape:ln,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:sn(),tags:[],categories:an}},Dx={inputOptions:Wn,toolId:f.BATTLEFIELD,shape:ln,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:sn(),tags:[],categories:an}},Rx={inputOptions:Wn,toolId:f.SKYSCRAPERS,shape:ln,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:sn(),tags:[],categories:an}},Nx={inputOptions:Wn,toolId:f.X_INDEX,shape:ln,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:sn(),tags:[],categories:an}},Sx={inputOptions:Wn,toolId:f.RISING_STREAK,shape:ln,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:sn(),tags:[],categories:an}},kx={inputOptions:Wn,toolId:f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:ln,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:sn(),tags:[],categories:an}},Tx={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Ti),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.OUTSIDE_CONSECUTIVE_SUM,shape:ln,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:sn(),tags:[],categories:an}},Mx={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Ti),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.LOOPWICHES,shape:ln,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:sn(),tags:[],categories:an}},Ux={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Ti),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:ln,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:sn(),tags:[],categories:an}},$x={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Ti),defaultValue:"",cornerOrEdge:Rt.EDGE},toolId:f.PENTOMINO_BORDER_COUNT,shape:ln,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:sn(),tags:[],categories:an}},Fx={inputOptions:{type:pe.SINGLE_CELL},toolId:f.COSMETIC_CELL_CENTER_SHAPE,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},Gx={inputOptions:{type:pe.SINGLE_CELL_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_ARROW,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},Px={inputOptions:{type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.COSMETIC_CELL_MULTI_ARROW,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},Wx={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Fd(t,e,Sv),defaultValue:""},toolId:f.COSMETIC_EDGE,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.LOCAL_ELEMENT]}},Hx={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>Rv(t,e,Dv),defaultValue:""},toolId:f.COSMETIC_CORNER,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.LOCAL_ELEMENT]}},zx={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},Bx={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},Yx={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:f.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_ELEMENT]}},jx={inputOptions:{type:pe.CAGE,valueUpdater:(t,e)=>Lv(t,e,Av),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:f.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.LOCAL_ELEMENT]}},Kx={inputOptions:{type:pe.ARROW},toolId:f.COSMETIC_ARROW,shape:{type:H.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT]}},Vx={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Tv(t,e,Ti),defaultValue:"",cornerOrEdge:Rt.CORNER_OR_EDGE},toolId:f.COSMETIC_OUTSIDE_DIRECTION,shape:{type:H.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[W.COSMETIC_TOOL,W.TYPABLE_TOOL,W.OUTSIDE_DIRECTION_TOOL,W.LOCAL_ELEMENT]}},Mi=[W.LOCAL_ELEMENT,W.DIAGONAL_CONSTRAINTS],Xx={toolId:f.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},qx={toolId:f.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},Zx={toolId:f.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},Qx={toolId:f.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},Jx={toolId:f.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},eA={toolId:f.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},tA={toolId:f.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},nA={toolId:f.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},rA={toolId:f.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},oA={toolId:f.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},iA={toolId:f.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},sA={toolId:f.NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Mi}},aA={toolId:f.POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Mi}},lA={toolId:f.NEGATIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Mi}},cA={toolId:f.POSITIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Mi}},uA={toolId:f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Mi}},dA={toolId:f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Mi}},_A={toolId:f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},fA={toolId:f.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},gA={toolId:f.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}},hA={toolId:f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[W.LOCAL_ELEMENT,W.SIMPLE_GLOBAL_CONSTRAINT]}};f.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,W.LOCAL_ELEMENT,W.NEGATIVE_CONSTRAINT;f.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,W.LOCAL_ELEMENT,W.NEGATIVE_CONSTRAINT;const vA={toolId:f.CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},pA={toolId:f.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},mA={toolId:f.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},EA={toolId:f.YIN_YANG,negative_constraints:[{toolId:f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded)."},{toolId:f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5."}],meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},CA={toolId:f.NURIMISAKI,negative_constraints:[{toolId:f.NURIMISAKI_PATH_GERMAN_WHISPERS,description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5."}],meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},bA={toolId:f.NURIKABE,negative_constraints:[{toolId:f.NURIKABE_NO_REPEATS_IN_ISLANDS,description:"Digits may not repeat within a nurikabe island."}],meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},wA={toolId:f.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},IA={toolId:f.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},yA={toolId:f.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},OA={toolId:f.SHIKAKU,negative_constraints:[{toolId:f.SHIKAKU_NO_REPEATS_IN_REGION,description:"Digits cannot repeat within a shikaku region."}],meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},xA={toolId:f.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},AA={toolId:f.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},LA={toolId:f.CELL_CENTER_LOOP_NO_TOUCHING,negative_constraints:[{toolId:f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit."},{toolId:f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,description:"Adjacent cells along a loop differ by 5 or more."},{toolId:f.NOT_LOOP_SIZED_REGIONS,description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N."},{toolId:f.MODULAR_LOOP,description:"Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}."}],meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},DA={toolId:f.MAZE_DIRECTED_PATH,negative_constraints:[{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,description:"Any two adjacent cells along the correct path must sum to a prime number."},{toolId:f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4."},{toolId:f.DIRECTED_PATH_IS_PARITY_LINE,description:"The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit."},{toolId:f.DIRECTED_PATH_IS_REGION_SUM_LINE,description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum."},{toolId:f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number."}],meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},RA={toolId:f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[W.GLOBAL_CONSTRAINT,W.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},NA={toolId:f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[W.GLOBAL_CONSTRAINT,W.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},SA={toolId:f.CAVE,negative_constraints:[{toolId:f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells."},{toolId:f.CAVE_WALLS_ARE_EVEN,description:"Cave walls must contain even digits."},{toolId:f.CAVE_CELLS_ARE_ODD,description:"Cave cells must contain odd digits."},{toolId:f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,description:"There is exactly one digit that does not appear anywhere in the cave."},{toolId:f.RENBAN_CAVES,description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell."},{toolId:f.CAVE_LITS,description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."}],meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},kA={toolId:f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},TA={toolId:f.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},MA={toolId:f.GALAXIES,negative_constraints:[{toolId:f.EVERY_CELL_BELONGS_TO_A_GALAXY,description:"Every cell in the grid belongs to a galaxy."},{toolId:f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,description:"No 2x2 area may belong entirely to one galaxy."},{toolId:f.TWO_SYMMETRIC_GALAXIES,description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"},{toolId:f.ONE_GALAXY_IS_A_GERMAN_WHISPERS,description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5."}],meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},UA={toolId:f.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},$A={toolId:f.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},FA={toolId:f.CONNECT_FOUR,negative_constraints:[{toolId:f.CONNECT_FOUR_DRAW,description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow."},{toolId:f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit)."},{toolId:f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,description:"Two orthogonally adjacent yellow discs must have a difference of at least 3."}],meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},GA={toolId:f.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},PA={toolId:f.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[W.LOCAL_ELEMENT,W.UNDETERMINED_REGIONS_CONSTRAINT]}},We=[W.LINE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.LINE_TOOL,W.LOCAL_ELEMENT],jr=[W.LINE_CONSTRAINT,W.LOCAL_CONSTRAINT,W.DOUBLE_ENDED_LINE_CONSTRAINT,W.LINE_TOOL,W.LOCAL_ELEMENT],Gs={description:"",usage:Te(),tags:[],categories:We},Tt={type:pe.LINE,allowSelfIntersection:!0},Jt={type:pe.LINE,allowSelfIntersection:!1},WA={inputOptions:Jt,toolId:f.THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Numbers along a thermometer must increase from the bulb end."}},HA={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:f.CUSTOM_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},zA={inputOptions:Jt,toolId:f.FUZZY_THERMOMETER,shape:{type:H.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},BA={inputOptions:Jt,toolId:f.SLOW_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},YA={inputOptions:Jt,toolId:f.ROW_CYCLE_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Gs,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},jA={inputOptions:Tt,toolId:f.PALINDROME,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Te(),tags:[],categories:We}},KA={inputOptions:Tt,toolId:f.RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Te(),tags:[],categories:We}},VA={inputOptions:Tt,toolId:f.DOUBLE_RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Te(),tags:[],categories:We}},XA={inputOptions:Tt,toolId:f.RENRENBANBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Te(),tags:[],categories:We}},qA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.N_CONSECUTIVE_RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:We}},ZA={inputOptions:Tt,toolId:f.NABNER_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:We}},QA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.WHISPERS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Te(),tags:[],categories:We}},JA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.DUTCH_WHISPERS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Te(),tags:[],categories:We}},eL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Te(),tags:[],categories:We}},tL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_WHISPERS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Te(),tags:[],categories:We}},nL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.RENBAN_OR_NABNER_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Te(),tags:[],categories:We}},rL={inputOptions:Jt,toolId:f.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Te(),tags:[],categories:We}},oL={inputOptions:Jt,toolId:f.INDEX_LINE,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Te(),tags:[],categories:We}},iL={inputOptions:Tt,toolId:f.UNIQUE_VALUES_LINE,shape:{type:H.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Te(),tags:[],categories:We}},sL={inputOptions:Tt,toolId:f.REGION_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Te(),tags:[],categories:We}},aL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Te(),tags:[],categories:We}},lL={inputOptions:Jt,toolId:f.ARITHMETIC_SEQUENCE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Te(),tags:[],categories:We}},cL={inputOptions:Tt,toolId:f.SAME_PARITY_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Te(),tags:[],categories:We}},uL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:We}},dL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.UNIMODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Te(),tags:[],categories:We}},_L={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.MODULAR_OR_UNIMODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Te(),tags:[],categories:We}},fL={inputOptions:Tt,toolId:f.ODD_EVEN_OSCILLATOR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Te(),tags:[],categories:We}},gL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.HIGH_LOW_OSCILLATOR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Te(),tags:[],categories:We}},hL={inputOptions:Tt,toolId:f.ENTROPIC_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Te(),tags:[],categories:We}},vL={inputOptions:Tt,toolId:f.ENTROPIC_OR_MODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Te(),tags:[],categories:We}},pL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_COLUMN_IS_X_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Te(),tags:[],categories:We}},mL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.INDEXING_ROW_IS_X_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Te(),tags:[],categories:We}},EL={inputOptions:Jt,toolId:f.REPEATED_DIGITS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Te(),tags:[],categories:We}},CL={inputOptions:Jt,toolId:f.SUPERFUZZY_ARROW,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Te(),tags:[],categories:We}},bL={inputOptions:Tt,toolId:f.AMBIGUOUS_ARROW,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Te(),tags:[],categories:We}},wL={inputOptions:Jt,toolId:f.HEADLESS_ARROW,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Te(),tags:[],categories:We}},IL={inputOptions:Tt,toolId:f.XV_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Te(),tags:[],categories:We}},yL={inputOptions:Jt,toolId:f.ROW_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Te(),tags:[],categories:We}},OL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.AT_LEAST_X_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Te(),tags:[],categories:We}},xL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Te(),tags:[],categories:We}};f.ADJACENT_CELL_SUM_IS_PRIME_LINE,H.LINE,Te();const AL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:f.PRODUCT_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Te(),tags:[],categories:We}},LL={inputOptions:Tt,toolId:f.ADJACENT_MULTIPLES_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Te(),tags:[],categories:We}},DL={inputOptions:Tt,toolId:f.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Te(),tags:[],categories:We}},RL={inputOptions:Jt,toolId:f.LOOK_AND_SAY_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Te(),tags:[],categories:We}},NL={inputOptions:Jt,toolId:f.ZIPPER_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Te(),tags:[],categories:We}},SL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:f.SEGMENTED_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Te(),tags:[],categories:We}},kL={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Te(),tags:[],categories:We}},TL={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Te(),tags:[],categories:We}};f.THERMO_OR_AVERAGE_ARROW,H.THERMO_WITH_CIRCLE,Te();const ML={inputOptions:Jt,toolId:f.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:H.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Te(),tags:[],categories:We}},UL={inputOptions:Jt,toolId:f.PEAPODS,shape:{type:H.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Te(),tags:[],categories:We}},$L={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:f.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Te(),tags:[],categories:We}},FL={inputOptions:Tt,toolId:f.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Te(),tags:[],categories:We}},GL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:f.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Te(),tags:[],categories:We}},PL={inputOptions:Tt,toolId:f.YIN_YANG_REGION_SUM_LINE,negative_constraints:[{toolId:f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,description:"All lines must cross colours at least once."}],shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Te(),tags:[],categories:We}},WL={inputOptions:Jt,toolId:f.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Te(),tags:[],categories:We}},HL={inputOptions:Jt,toolId:f.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Te(),tags:[],categories:We}},zL={inputOptions:Tt,toolId:f.BETWEEN_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Te(),tags:[],categories:jr}},BL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:f.LOCKOUT_LINE,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Te(),tags:[],categories:jr}},YL={inputOptions:Tt,toolId:f.TIGHTROPE_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Te(),tags:[],categories:jr}},jL={inputOptions:Tt,toolId:f.PARITY_COUNT_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Te(),tags:[],categories:jr}},KL={inputOptions:Tt,toolId:f.DOUBLE_ARROW_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Te(),categories:jr}},VL={inputOptions:Tt,toolId:f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Te(),tags:[],categories:jr}},XL={inputOptions:Tt,toolId:f.SPLIT_PEAS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Te(),tags:[],categories:jr}},qL={inputOptions:Jt,toolId:f.DOUBLERS_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Te(),tags:[],categories:We}},ZL={inputOptions:Tt,toolId:f.DOUBLERS_BETWEEN_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:jr}},QL={inputOptions:Tt,toolId:f.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Te(),tags:[],categories:jr}},je=[W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.SINGLE_CELL_SHAPE_TOOL,W.LOCAL_ELEMENT],Yo=[W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.SINGLE_CELL_COLOR_TOOL,W.LOCAL_ELEMENT],Mv=[W.SINGLE_CELL_ARROW_TOOL,W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT],Dl={type:H.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},jo={type:H.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Rl(t,e=3){return zo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function JL(t){return t===""||t==="1"||t==="2"||t==="3"}function Ps(t,e,n){return Yr(t,e,n)}const et={type:pe.SINGLE_CELL},vo={type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Rl),defaultValue:""},Uv={type:pe.SINGLE_CELL_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},eD={inputOptions:et,toolId:f.ODD,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:je}},tD={inputOptions:et,toolId:f.EVEN,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:je}},nD={inputOptions:et,toolId:f.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:Yo}},rD={inputOptions:et,toolId:f.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:Yo}},oD={inputOptions:et,toolId:f.ODD_MINESWEEPER,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},iD={inputOptions:et,toolId:f.EVEN_MINESWEEPER,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},sD={inputOptions:et,toolId:f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:je}},aD={inputOptions:et,toolId:f.WATCHTOWER,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},lD={inputOptions:et,toolId:f.NOT_WATCHTOWER,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},cD={inputOptions:vo,toolId:f.FARSIGHT,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:je}},uD={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Rl),defaultValue:"9"},toolId:f.RADAR,negative_constraints:[{toolId:f.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:je}},dD={inputOptions:et,toolId:f.ORTHOGONAL_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:je}},_D={inputOptions:et,toolId:f.INDEXING_COLUMN,negative_constraints:[{toolId:f.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Yo}},fD={inputOptions:et,toolId:f.INDEXING_ROW,negative_constraints:[{toolId:f.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Yo}},gD={inputOptions:et,toolId:f.LOW_DIGIT,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Yo}},hD={inputOptions:et,toolId:f.HIGH_DIGIT,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Yo}},vD={inputOptions:et,toolId:f.FRIENDLY_CELL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Yo}},pD={inputOptions:et,toolId:f.DIAGONALLY_ADJACENT_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:je}},mD={inputOptions:et,toolId:f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:je}},ED={inputOptions:et,toolId:f.SANDWICH_ROW_COL_COUNT,shape:jo,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:je}},CD={inputOptions:et,toolId:f.COUNTING_CIRCLES,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:je}},bD={inputOptions:et,toolId:f.REVERSE_COUNTING_CIRCLES,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:je}},wD={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,JL),defaultValue:""},toolId:f.COLORED_COUNTING_CIRCLES,shape:jo,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:je}},ID={inputOptions:et,toolId:f.UNIQUE_CELLS,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:je}},yD={inputOptions:et,toolId:f.SEEN_EVEN_COUNT,shape:Dl,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},OD={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Rl),defaultValue:"5"},toolId:f.CELL_KNIGHT_WHISPERS,shape:jo,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:je}},xD={inputOptions:et,toolId:f.SEEN_ODD_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},AD={inputOptions:et,toolId:f.YIN_YANG_MINESWEEPER,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:je}},LD={inputOptions:et,toolId:f.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},DD={inputOptions:et,toolId:f.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},RD={inputOptions:et,toolId:f.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:Dl,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:je}},ND={inputOptions:et,toolId:f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:je}},SD={inputOptions:et,toolId:f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:H.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:je}},kD={inputOptions:et,toolId:f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:je}},TD={inputOptions:et,toolId:f.SEEN_REGION_BORDERS_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:je}},MD={inputOptions:et,toolId:f.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:je}},UD={inputOptions:et,toolId:f.SASHIGANE_BEND_REGION_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:je}},$D={inputOptions:Uv,toolId:f.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Mv}},FD={inputOptions:Uv,toolId:f.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Mv}},GD={inputOptions:vo,toolId:f.SASHIGANE_REGION_SUM,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:je}},PD={inputOptions:et,toolId:f.CELL_ON_THE_LOOP,shape:Dl,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:je}},WD={inputOptions:et,toolId:f.CELL_NOT_ON_THE_LOOP,shape:jo,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:je}},HD={inputOptions:et,toolId:f.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:je}},zD={inputOptions:vo,toolId:f.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:je}},BD={inputOptions:et,toolId:f.CAVE_CLUE,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:je}},YD={inputOptions:vo,toolId:f.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:je}},jD={inputOptions:vo,toolId:f.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:je}},KD={inputOptions:vo,toolId:f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:jo,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:je}},VD={inputOptions:et,toolId:f.DIRECTED_PATH_START,shape:{type:H.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:je}},XD={inputOptions:et,toolId:f.DIRECTED_PATH_END,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:je}},qD={inputOptions:vo,toolId:f.TELEPORT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:je}},ZD={inputOptions:vo,toolId:f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:je}},QD={inputOptions:et,toolId:f.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...Dl,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:je}},JD={inputOptions:et,toolId:f.NURIKABE_ISLAND_SIZE_CELL,shape:jo,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:je}},eR={inputOptions:et,toolId:f.CONNECT_FOUR_YELLOW,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:je}},tR={inputOptions:et,toolId:f.CONENCT_FOUR_RED,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:je}},nR={inputOptions:et,toolId:f.SHIKAKU_REGION_SIZE,shape:jo,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:je}},rR={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Rl),defaultValue:"?"},toolId:f.SHIKAKU_REGION_SUM,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:je}},oR={inputOptions:et,toolId:f.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:je}},vr=[W.SINGLE_CELL_CONSTRAINT,W.LOCAL_CONSTRAINT,W.SINGLE_CELL_MULTIARROW_TOOL,W.LOCAL_ELEMENT],Kr={type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},pr={type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Rt.CORNER_OR_EDGE},iR={inputOptions:pr,toolId:f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:Kr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:vr}},sR={inputOptions:pr,toolId:f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:Kr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:vr}},aR={inputOptions:pr,toolId:f.LOOP_CELL_COUNT_ARROWS,shape:Kr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:vr}},lR={inputOptions:pr,toolId:f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:Kr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:vr}},cR={inputOptions:pr,toolId:f.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:Kr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:vr}},uR={inputOptions:pr,toolId:f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:Kr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:vr}},dR={inputOptions:pr,toolId:f.COLD_ARROWS,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:vr}},_R={inputOptions:pr,toolId:f.HOT_ARROWS,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:vr}},fR={inputOptions:pr,toolId:f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:Kr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:vr}},gR={inputOptions:pr,toolId:f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:Kr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:vr}},hR={inputOptions:pr,toolId:f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:Kr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:vr}},vR={toolId:f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[W.LOCAL_CONSTRAINT,W.VALUED_GLOBAL_CONSTRAINT]}},pR={toolId:f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[W.LOCAL_CONSTRAINT,W.VALUED_GLOBAL_CONSTRAINT]}},mR={toolId:f.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[W.LOCAL_CONSTRAINT,W.VALUED_GLOBAL_CONSTRAINT]}},ER={toolId:f.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[W.LOCAL_CONSTRAINT,W.VALUED_GLOBAL_CONSTRAINT]}};f.VAMPIRE_AND_PREY,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;f.MARKED_CELLS,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;const CR={toolId:f.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}},bR={toolId:f.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}};f.HOT_CELLS,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;f.COLD_CELLS,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;f.DECREMENT_FOUNTAIN,W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT;const wR={toolId:f.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}},IR={toolId:f.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[W.LOCAL_ELEMENT,W.VALUE_MODIFIER_CONSTRAINT]}},yR=[W.CORNER_LINE_CONSTRAINT,W.CORNER_LINE_TOOL,W.LOCAL_CONSTRAINT,W.LOCAL_ELEMENT],OR={inputOptions:{type:pe.CORNER_LINE},toolId:f.MAZE_WALL,shape:{type:H.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:yR}},Pt={[f.GIVEN]:DO,[f.DIGIT]:RO,[f.REGIONS]:NO,[f.OUTSIDE]:MO,[f.CORNER_PM]:SO,[f.CENTER_PM]:kO,[f.HIGHLIGHTS]:TO,[f.PEN_TOOL]:UO,[f.SUDOKU_RULES_DO_NOT_APPLY]:Xx,[f.LEAVE_EMPTY_CELLS_EMPTY]:qx,[f.LITS]:PA,[f.HEXED_SUDOKU]:Zx,[f.FILLOMINO]:GA,[f.ANTIKNIGHT]:Qx,[f.ANTI_LONG_KNIGHT]:eA,[f.ANTIKING]:tA,[f.ANTI_GIRAFFE]:Jx,[f.DISJOINT_GROUPS]:nA,[f.TANGO]:rA,[f.NONCONSECUTIVE]:oA,[f.NONRATIO]:iA,[f.ANTI_ENTROPY]:fA,[f.GLOBAL_INDEXING_COLUMN]:gA,[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:hA,[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:_A,[f.NEGATIVE_DIAGONAL]:sA,[f.POSITIVE_DIAGONAL]:aA,[f.NEGATIVE_ANTIDIAGONAL]:lA,[f.POSITIVE_ANTIDIAGONAL]:cA,[f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:uA,[f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:dA,[f.DOUBLERS]:CR,[f.NEGATORS]:bR,[f.NEXUS]:wR,[f.INDEXER_CELLS]:IR,[f.CHAOS_CONSTRUCTION]:vA,[f.NUMBERED_CHAOS_CONSTRUCTION]:pA,[f.CHAOS_CONSTRUCTION_SUGURU]:mA,[f.YIN_YANG]:EA,[f.NURIMISAKI]:CA,[f.NURIKABE]:bA,[f.TWO_CONTIGUOUS_REGIONS]:wA,[f.SASHIGANE]:IA,[f.NORINORI]:yA,[f.SHIKAKU]:OA,[f.GOLDILOCKS_ZONE]:AA,[f.CELL_CENTER_LOOP_NO_TOUCHING]:LA,[f.CAVE]:SA,[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:kA,[f.GALAXIES]:MA,[f.PENTOMINO_TILLING]:UA,[f.LITS_BLACK_WHITE_STAR_BATTLE]:$A,[f.NORINORI_STAR_BATTLE]:xA,[f.MAZE_DIRECTED_PATH]:DA,[f.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:RA,[f.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:NA,[f.CONNECT_FOUR]:FA,[f.FOG_LIGHTS]:oR,[f.ODD]:eD,[f.EVEN]:tD,[f.MINIMUM]:nD,[f.MAXIMUM]:rD,[f.ODD_MINESWEEPER]:oD,[f.EVEN_MINESWEEPER]:iD,[f.WATCHTOWER]:aD,[f.NOT_WATCHTOWER]:lD,[f.FARSIGHT]:cD,[f.RADAR]:uD,[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:sD,[f.ORTHOGONAL_SUM]:dD,[f.DIAGONALLY_ADJACENT_SUM]:pD,[f.INDEXING_COLUMN]:_D,[f.INDEXING_ROW]:fD,[f.LOW_DIGIT]:gD,[f.HIGH_DIGIT]:hD,[f.FRIENDLY_CELL]:vD,[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:mD,[f.SANDWICH_ROW_COL_COUNT]:ED,[f.COUNTING_CIRCLES]:CD,[f.REVERSE_COUNTING_CIRCLES]:bD,[f.COLORED_COUNTING_CIRCLES]:wD,[f.UNIQUE_CELLS]:ID,[f.SEEN_EVEN_COUNT]:yD,[f.SEEN_ODD_COUNT]:xD,[f.CELL_KNIGHT_WHISPERS]:OD,[f.YIN_YANG_MINESWEEPER]:AD,[f.YIN_YANG_SEEN_UNSHADED_CELLS]:LD,[f.YIN_YANG_SEEN_SHADED_CELLS]:DD,[f.YIN_YANG_SEEN_SAME_SHADE_CELLS]:RD,[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:ND,[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:SD,[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:kD,[f.SEEN_REGION_BORDERS_COUNT]:TD,[f.NURIMISAKI_UNSHADED_ENDPOINTS]:MD,[f.SASHIGANE_BEND_REGION_COUNT]:UD,[f.SASHIGANE_REGION_SUM]:GD,[f.CELL_ON_THE_LOOP]:PD,[f.CELL_NOT_ON_THE_LOOP]:WD,[f.COUNT_LOOP_NEIGHBOUR_CELLS]:HD,[f.CAVE_CLUE]:BD,[f.TWILIGHT_CAVE_FILLOMINO_CLUE]:zD,[f.YIN_YANG_FILLOMINO_PARITY]:TA,[f.SHIKAKU_REGION_SIZE]:nR,[f.SHIKAKU_REGION_SUM]:rR,[f.CHAOS_CONSTRUCTION_CHESS_SUMS]:YD,[f.CHAOS_CONSTRUCTION_ARROW_KNOTS]:jD,[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:KD,[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:ZD,[f.DIRECTED_PATH_START]:VD,[f.DIRECTED_PATH_END]:XD,[f.TELEPORT]:qD,[f.CONNECT_FOUR_YELLOW]:eR,[f.CONENCT_FOUR_RED]:tR,[f.SASHIGANE_ARROW_POINTS_TO_BEND]:$D,[f.THERMO_SIGHTLINE_LOOP_ARROW]:FD,[f.HOT_ARROWS]:_R,[f.COLD_ARROWS]:dR,[f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:uR,[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:lR,[f.YIN_YANG_COUNT_SHADED_CELLS]:cR,[f.LOOP_CELL_COUNT_ARROWS]:aR,[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:sR,[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:iR,[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:fR,[f.NURIKABE_SEEN_WATERWAY_CELLS]:QD,[f.NURIKABE_ISLAND_SIZE_CELL]:JD,[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:gR,[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:hR,[f.DIFFERENCE]:JO,[f.RATIO]:QO,[f.XV]:tx,[f.EDGE_INEQUALITY]:nx,[f.EDGE_SUM]:ex,[f.EDGE_PRODUCT]:rx,[f.EDGE_MODULO]:ox,[f.EDGE_FACTOR]:ix,[f.XY_DIFFERENCES]:sx,[f.YIN_YANG_WHITE_KROPKI]:ax,[f.YIN_YANG_KROPKI]:lx,[f.FILLOMINO_REGION_BORDER]:cx,[f.UNKNOWN_REGION_BORDER]:ux,[f.CHAOS_CONSTRUCTION_SUGURU_BORDER]:dx,[f.EDGE_CAVE_ONE_OF_EACH]:_x,[f.ONE_WAY_DOOR]:fx,[f.QUADRUPLE]:HO,[f.CORNER_SUM]:zO,[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:BO,[f.CORNER_EVEN_COUNT]:YO,[f.PRODUCT_SQUARE]:jO,[f.EQUAL_DIAGONAL_DIFFERENCES]:KO,[f.THERMOMETER]:WA,[f.FUZZY_THERMOMETER]:zA,[f.SLOW_THERMOMETER]:BA,[f.CUSTOM_THERMOMETER]:HA,[f.ROW_CYCLE_THERMOMETER]:YA,[f.PALINDROME]:jA,[f.RENBAN_LINE]:KA,[f.DOUBLE_RENBAN_LINE]:VA,[f.RENRENBANBAN_LINE]:XA,[f.N_CONSECUTIVE_RENBAN_LINE]:qA,[f.NABNER_LINE]:ZA,[f.WHISPERS_LINE]:QA,[f.DUTCH_WHISPERS]:JA,[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:eL,[f.RENBAN_OR_WHISPERS_LINE]:tL,[f.RENBAN_OR_NABNER_LINE]:nL,[f.OUT_OF_ORDER_CONSECUTIVE_LINE]:rL,[f.INDEX_LINE]:oL,[f.UNIQUE_VALUES_LINE]:iL,[f.REPEATED_DIGITS_LINE]:EL,[f.REGION_SUM_LINE]:sL,[f.SUM_LINE]:aL,[f.XV_LINE]:IL,[f.ROW_SUM_LINE]:yL,[f.AT_LEAST_X_LINE]:OL,[f.SUPERFUZZY_ARROW]:CL,[f.AMBIGUOUS_ARROW]:bL,[f.HEADLESS_ARROW]:wL,[f.N_CONSECUTIVE_FUZZY_SUM_LINE]:xL,[f.PRODUCT_LINE]:AL,[f.ADJACENT_MULTIPLES_LINE]:LL,[f.ADJACENT_DIFFERENCES_COUNT_LINE]:DL,[f.LOOK_AND_SAY_LINE]:RL,[f.ARITHMETIC_SEQUENCE_LINE]:lL,[f.ZIPPER_LINE]:NL,[f.SEGMENTED_SUM_LINE]:SL,[f.SEGMENTED_SUM_AND_RENBAN_LINE]:kL,[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:TL,[f.SAME_PARITY_LINE]:cL,[f.MODULAR_LINE]:uL,[f.UNIMODULAR_LINE]:dL,[f.MODULAR_OR_UNIMODULAR_LINE]:_L,[f.ODD_EVEN_OSCILLATOR_LINE]:fL,[f.HIGH_LOW_OSCILLATOR_LINE]:gL,[f.ENTROPIC_LINE]:hL,[f.ENTROPIC_OR_MODULAR_LINE]:vL,[f.INDEXING_COLUMN_IS_X_LINE]:pL,[f.INDEXING_ROW_IS_X_LINE]:mL,[f.INDEXER_CELLS_REGION_SUBSET_LINE]:ML,[f.PEAPODS]:UL,[f.YIN_YANG_INDEXING_LINE_COLORING]:WL,[f.YIN_YANG_SHADED_WHISPERS_LINE]:$L,[f.YIN_YANG_UNSHADED_ENTROPIC_LINE]:FL,[f.YIN_YANG_UNSHADED_MODULAR_LINE]:GL,[f.YIN_YANG_REGION_SUM_LINE]:PL,[f.GOLDILOCKS_ZONE_REGION_SUM]:HL,[f.BETWEEN_LINE]:zL,[f.LOCKOUT_LINE]:BL,[f.PARITY_COUNT_LINE]:jL,[f.TIGHTROPE_LINE]:YL,[f.DOUBLE_ARROW_LINE]:KL,[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:VL,[f.SPLIT_PEAS]:XL,[f.DOUBLERS_THERMOMETER]:qL,[f.DOUBLERS_BETWEEN_LINE]:ZL,[f.DOUBLERS_DOUBLE_ARROW_LINE]:QL,[f.ARROW]:qy,[f.CHAOS_CONSTRUCTION_ARROW]:Jy,[f.AVERAGE_ARROW]:Zy,[f.BULBOUS_ARROW]:Qy,[f.MAZE_WALL]:OR,[f.KILLER_CAGE]:gO,[f.UNIQUE_DIGITS_CAGE]:hO,[f.INVERTED_KILLER_CAGE]:vO,[f.SUM_CAGE]:pO,[f.SUM_CAGE_LOOK_AND_SAY]:mO,[f.PARITY_BALANCE_CAGE]:EO,[f.DIVISIBLE_KILLER_CAGE]:CO,[f.SPOTLIGHT_CAGE]:bO,[f.PUTTERIA_CAGE]:wO,[f.MULTISET_CAGE]:IO,[f.VAULTED_CAGE]:yO,[f.YIN_YANG_ANTITHESIS_KILLER_CAGE]:OO,[f.YIN_YANG_BREAKEVEN_KILLER_CAGE]:xO,[f.DOUBLERS_KILLER_CAGE]:AO,[f.NEGATORS_KILLER_CAGE]:LO,[f.CLONE_REGION]:PO,[f.SANDWICH_SUM]:bx,[f.MYSTERY_SANDWICH_SUM]:wx,[f.X_SUM]:yx,[f.SHORTSIGHTED_X_SUM]:Ox,[f.SHIFTED_X_SUM]:xx,[f.BROKEN_X_SUM]:Ax,[f.X_SUM_SKYSCRAPERS]:Lx,[f.BATTLEFIELD]:Dx,[f.SKYSCRAPERS]:Rx,[f.X_INDEX]:Nx,[f.SANDWICH_SUM_XOR_X_SUM]:Ix,[f.RISING_STREAK]:Sx,[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:kx,[f.OUTSIDE_CONSECUTIVE_SUM]:Tx,[f.LOOPWICHES]:Mx,[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:Ux,[f.PENTOMINO_BORDER_COUNT]:$x,[f.LITTLE_KILLER_SUM]:hx,[f.LITTLE_KILLER_PRODUCT]:vx,[f.LITTLE_KILLER_LOOK_AND_SAY]:px,[f.LITTLE_KILLER_REGION_SUM_PRODUCT]:Ex,[f.X_OMIT_LITTLE_KILLER_SUM]:mx,[f.NEGATORS_LITTLE_KILLER_SUM]:Cx,[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:FO,[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:GO,[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:vR,[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:pR,[f.FORBIDDEN_KNIGHT_SUM]:mR,[f.LITS_MAX_TETROMINO_SUM]:ER,[f.COSMETIC_CELL_CENTER_SHAPE]:Fx,[f.COSMETIC_CELL_ARROW]:Gx,[f.COSMETIC_CELL_MULTI_ARROW]:Px,[f.COSMETIC_EDGE]:Wx,[f.COSMETIC_CORNER]:Hx,[f.COSMETIC_LINE]:zx,[f.COSMETIC_LINE_WITH_CIRCLE_ENDS]:Bx,[f.COSMETIC_LINE_WITH_POLYGON_ENDS]:Yx,[f.COSMETIC_ARROW]:Kx,[f.COSMETIC_CAGE]:jx,[f.COSMETIC_OUTSIDE_DIRECTION]:Vx};class Go extends Map{constructor(){super()}setConstraint(e,n){return Cv(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Go;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Go;if(!e)return n;for(const[r,o]of Object.entries(e)){const i=wv(r);i!==void 0&&Iv(i,Ld)&&typeof o=="boolean"&&o&&n.setConstraint(i,o)}return n}}var Pe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Pe||{});function $v(t){if(!(t in Pe))throw Error(" not a key in DIRECTION");return Pe[t]}function Ze(t,e){return t.r===e.r&&t.c===e.c}function Fv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function xR(t,e){return{r:t.r*e,c:t.c*e}}function AR(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Ws(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ze(t,e)}function LR(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function al(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function $t(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Nl(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function DR(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function ll(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function RR(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const NR=new Map([[6,Pe.N],[2,Pe.S],[0,Pe.E],[4,Pe.W],[7,Pe.NE],[5,Pe.NW],[1,Pe.SE],[3,Pe.SW]]);function vi(t){t=t%8;const e=NR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const SR=new Map([[Pe.N,{r:-1,c:0}],[Pe.S,{r:1,c:0}],[Pe.E,{r:0,c:1}],[Pe.W,{r:0,c:-1}],[Pe.NE,{r:-1,c:1}],[Pe.NW,{r:-1,c:-1}],[Pe.SE,{r:1,c:1}],[Pe.SW,{r:1,c:-1}]]);function Hs(t){const e=SR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function sh(t,e){const n=Hs(e);return Fv(t,n)}function cl(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Gv(t,e,n=!1){const r=t.some(i=>Ze(i,e)),o=n?t.some(i=>Ws(i,e)):t.some(i=>LR(i,e));if(!r&&o){const i=[...t,e];return al(i),i}return t}function Ba(t){return`R${t.r+1}C${t.c+1}`}function Gd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}function kR(t){const e=t.split("R")[1].split("C"),n=parseFloat(e[0])-1,r=parseFloat(e[1])-1;return{r:n,c:r}}var Ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ms={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var TR=ms.exports,ah;function MR(){return ah||(ah=1,function(t,e){(function(){var n,r="4.17.21",o=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,g="__lodash_placeholder__",v=1,h=2,m=4,E=1,w=2,b=1,I=2,A=4,k=8,M=16,G=32,z=64,T=128,j=256,ee=512,ce=30,Z="...",ne=800,he=16,re=1,ge=2,Ie=3,ye=1/0,Me=9007199254740991,Se=17976931348623157e292,Xe=NaN,qe=4294967295,mt=qe-1,Lt=qe>>>1,Wt=[["ary",T],["bind",b],["bindKey",I],["curry",k],["curryRight",M],["flip",ee],["partial",G],["partialRight",z],["rearg",j]],yt="[object Arguments]",Ot="[object Array]",Yt="[object AsyncFunction]",Dn="[object Boolean]",lr="[object Date]",Eo="[object DOMException]",Rr="[object Error]",Nr="[object Function]",Ge="[object GeneratorFunction]",Oe="[object Map]",Ue="[object Number]",Fe="[object Null]",St="[object Object]",ea="[object Promise]",ta="[object Proxy]",Co="[object RegExp]",Cn="[object Set]",bo="[object String]",wo="[object Symbol]",ec="[object Undefined]",Io="[object WeakMap]",tc="[object WeakSet]",Ke="[object ArrayBuffer]",bn="[object DataView]",Vo="[object Float32Array]",Xo="[object Float64Array]",Cr="[object Int8Array]",Vi="[object Int16Array]",Xi="[object Int32Array]",qi="[object Uint8Array]",Zi="[object Uint8ClampedArray]",nc="[object Uint16Array]",rc="[object Uint32Array]",fm=/\b__p \+= '';/g,gm=/\b(__p \+=) '' \+/g,hm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,C_=/&(?:amp|lt|gt|quot|#39);/g,b_=/[&<>"']/g,vm=RegExp(C_.source),pm=RegExp(b_.source),mm=/<%-([\s\S]+?)%>/g,Em=/<%([\s\S]+?)%>/g,w_=/<%=([\s\S]+?)%>/g,Cm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bm=/^\w*$/,wm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oc=/[\\^$.*+?()[\]{}|]/g,Im=RegExp(oc.source),ic=/^\s+/,ym=/\s/,Om=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,xm=/\{\n\/\* \[wrapped with (.+)\] \*/,Am=/,? & /,Lm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Dm=/[()=,{}\[\]\/\s]/,Rm=/\\(\\)?/g,Nm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,I_=/\w*$/,Sm=/^[-+]0x[0-9a-f]+$/i,km=/^0b[01]+$/i,Tm=/^\[object .+?Constructor\]$/,Mm=/^0o[0-7]+$/i,Um=/^(?:0|[1-9]\d*)$/,$m=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,na=/($^)/,Fm=/['\n\r\u2028\u2029\\]/g,ra="\\ud800-\\udfff",Gm="\\u0300-\\u036f",Pm="\\ufe20-\\ufe2f",Wm="\\u20d0-\\u20ff",y_=Gm+Pm+Wm,O_="\\u2700-\\u27bf",x_="a-z\\xdf-\\xf6\\xf8-\\xff",Hm="\\xac\\xb1\\xd7\\xf7",zm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bm="\\u2000-\\u206f",Ym=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",A_="A-Z\\xc0-\\xd6\\xd8-\\xde",L_="\\ufe0e\\ufe0f",D_=Hm+zm+Bm+Ym,sc="['’]",jm="["+ra+"]",R_="["+D_+"]",oa="["+y_+"]",N_="\\d+",Km="["+O_+"]",S_="["+x_+"]",k_="[^"+ra+D_+N_+O_+x_+A_+"]",ac="\\ud83c[\\udffb-\\udfff]",Vm="(?:"+oa+"|"+ac+")",T_="[^"+ra+"]",lc="(?:\\ud83c[\\udde6-\\uddff]){2}",cc="[\\ud800-\\udbff][\\udc00-\\udfff]",qo="["+A_+"]",M_="\\u200d",U_="(?:"+S_+"|"+k_+")",Xm="(?:"+qo+"|"+k_+")",$_="(?:"+sc+"(?:d|ll|m|re|s|t|ve))?",F_="(?:"+sc+"(?:D|LL|M|RE|S|T|VE))?",G_=Vm+"?",P_="["+L_+"]?",qm="(?:"+M_+"(?:"+[T_,lc,cc].join("|")+")"+P_+G_+")*",Zm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",W_=P_+G_+qm,Jm="(?:"+[Km,lc,cc].join("|")+")"+W_,e1="(?:"+[T_+oa+"?",oa,lc,cc,jm].join("|")+")",t1=RegExp(sc,"g"),n1=RegExp(oa,"g"),uc=RegExp(ac+"(?="+ac+")|"+e1+W_,"g"),r1=RegExp([qo+"?"+S_+"+"+$_+"(?="+[R_,qo,"$"].join("|")+")",Xm+"+"+F_+"(?="+[R_,qo+U_,"$"].join("|")+")",qo+"?"+U_+"+"+$_,qo+"+"+F_,Qm,Zm,N_,Jm].join("|"),"g"),o1=RegExp("["+M_+ra+y_+L_+"]"),i1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,s1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],a1=-1,Ut={};Ut[Vo]=Ut[Xo]=Ut[Cr]=Ut[Vi]=Ut[Xi]=Ut[qi]=Ut[Zi]=Ut[nc]=Ut[rc]=!0,Ut[yt]=Ut[Ot]=Ut[Ke]=Ut[Dn]=Ut[bn]=Ut[lr]=Ut[Rr]=Ut[Nr]=Ut[Oe]=Ut[Ue]=Ut[St]=Ut[Co]=Ut[Cn]=Ut[bo]=Ut[Io]=!1;var kt={};kt[yt]=kt[Ot]=kt[Ke]=kt[bn]=kt[Dn]=kt[lr]=kt[Vo]=kt[Xo]=kt[Cr]=kt[Vi]=kt[Xi]=kt[Oe]=kt[Ue]=kt[St]=kt[Co]=kt[Cn]=kt[bo]=kt[wo]=kt[qi]=kt[Zi]=kt[nc]=kt[rc]=!0,kt[Rr]=kt[Nr]=kt[Io]=!1;var l1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},c1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},d1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},_1=parseFloat,f1=parseInt,H_=typeof Ya=="object"&&Ya&&Ya.Object===Object&&Ya,g1=typeof self=="object"&&self&&self.Object===Object&&self,nn=H_||g1||Function("return this")(),dc=e&&!e.nodeType&&e,yo=dc&&!0&&t&&!t.nodeType&&t,z_=yo&&yo.exports===dc,_c=z_&&H_.process,Hn=function(){try{var V=yo&&yo.require&&yo.require("util").types;return V||_c&&_c.binding&&_c.binding("util")}catch{}}(),B_=Hn&&Hn.isArrayBuffer,Y_=Hn&&Hn.isDate,j_=Hn&&Hn.isMap,K_=Hn&&Hn.isRegExp,V_=Hn&&Hn.isSet,X_=Hn&&Hn.isTypedArray;function Rn(V,se,ie){switch(ie.length){case 0:return V.call(se);case 1:return V.call(se,ie[0]);case 2:return V.call(se,ie[0],ie[1]);case 3:return V.call(se,ie[0],ie[1],ie[2])}return V.apply(se,ie)}function h1(V,se,ie,De){for(var tt=-1,Et=V==null?0:V.length;++tt<Et;){var Xt=V[tt];se(De,Xt,ie(Xt),V)}return De}function zn(V,se){for(var ie=-1,De=V==null?0:V.length;++ie<De&&se(V[ie],ie,V)!==!1;);return V}function v1(V,se){for(var ie=V==null?0:V.length;ie--&&se(V[ie],ie,V)!==!1;);return V}function q_(V,se){for(var ie=-1,De=V==null?0:V.length;++ie<De;)if(!se(V[ie],ie,V))return!1;return!0}function Qr(V,se){for(var ie=-1,De=V==null?0:V.length,tt=0,Et=[];++ie<De;){var Xt=V[ie];se(Xt,ie,V)&&(Et[tt++]=Xt)}return Et}function ia(V,se){var ie=V==null?0:V.length;return!!ie&&Zo(V,se,0)>-1}function fc(V,se,ie){for(var De=-1,tt=V==null?0:V.length;++De<tt;)if(ie(se,V[De]))return!0;return!1}function Ft(V,se){for(var ie=-1,De=V==null?0:V.length,tt=Array(De);++ie<De;)tt[ie]=se(V[ie],ie,V);return tt}function Jr(V,se){for(var ie=-1,De=se.length,tt=V.length;++ie<De;)V[tt+ie]=se[ie];return V}function gc(V,se,ie,De){var tt=-1,Et=V==null?0:V.length;for(De&&Et&&(ie=V[++tt]);++tt<Et;)ie=se(ie,V[tt],tt,V);return ie}function p1(V,se,ie,De){var tt=V==null?0:V.length;for(De&&tt&&(ie=V[--tt]);tt--;)ie=se(ie,V[tt],tt,V);return ie}function hc(V,se){for(var ie=-1,De=V==null?0:V.length;++ie<De;)if(se(V[ie],ie,V))return!0;return!1}var m1=vc("length");function E1(V){return V.split("")}function C1(V){return V.match(Lm)||[]}function Z_(V,se,ie){var De;return ie(V,function(tt,Et,Xt){if(se(tt,Et,Xt))return De=Et,!1}),De}function sa(V,se,ie,De){for(var tt=V.length,Et=ie+(De?1:-1);De?Et--:++Et<tt;)if(se(V[Et],Et,V))return Et;return-1}function Zo(V,se,ie){return se===se?S1(V,se,ie):sa(V,Q_,ie)}function b1(V,se,ie,De){for(var tt=ie-1,Et=V.length;++tt<Et;)if(De(V[tt],se))return tt;return-1}function Q_(V){return V!==V}function J_(V,se){var ie=V==null?0:V.length;return ie?mc(V,se)/ie:Xe}function vc(V){return function(se){return se==null?n:se[V]}}function pc(V){return function(se){return V==null?n:V[se]}}function ef(V,se,ie,De,tt){return tt(V,function(Et,Xt,Dt){ie=De?(De=!1,Et):se(ie,Et,Xt,Dt)}),ie}function w1(V,se){var ie=V.length;for(V.sort(se);ie--;)V[ie]=V[ie].value;return V}function mc(V,se){for(var ie,De=-1,tt=V.length;++De<tt;){var Et=se(V[De]);Et!==n&&(ie=ie===n?Et:ie+Et)}return ie}function Ec(V,se){for(var ie=-1,De=Array(V);++ie<V;)De[ie]=se(ie);return De}function I1(V,se){return Ft(se,function(ie){return[ie,V[ie]]})}function tf(V){return V&&V.slice(0,sf(V)+1).replace(ic,"")}function Nn(V){return function(se){return V(se)}}function Cc(V,se){return Ft(se,function(ie){return V[ie]})}function Qi(V,se){return V.has(se)}function nf(V,se){for(var ie=-1,De=V.length;++ie<De&&Zo(se,V[ie],0)>-1;);return ie}function rf(V,se){for(var ie=V.length;ie--&&Zo(se,V[ie],0)>-1;);return ie}function y1(V,se){for(var ie=V.length,De=0;ie--;)V[ie]===se&&++De;return De}var O1=pc(l1),x1=pc(c1);function A1(V){return"\\"+d1[V]}function L1(V,se){return V==null?n:V[se]}function Qo(V){return o1.test(V)}function D1(V){return i1.test(V)}function R1(V){for(var se,ie=[];!(se=V.next()).done;)ie.push(se.value);return ie}function bc(V){var se=-1,ie=Array(V.size);return V.forEach(function(De,tt){ie[++se]=[tt,De]}),ie}function of(V,se){return function(ie){return V(se(ie))}}function eo(V,se){for(var ie=-1,De=V.length,tt=0,Et=[];++ie<De;){var Xt=V[ie];(Xt===se||Xt===g)&&(V[ie]=g,Et[tt++]=ie)}return Et}function aa(V){var se=-1,ie=Array(V.size);return V.forEach(function(De){ie[++se]=De}),ie}function N1(V){var se=-1,ie=Array(V.size);return V.forEach(function(De){ie[++se]=[De,De]}),ie}function S1(V,se,ie){for(var De=ie-1,tt=V.length;++De<tt;)if(V[De]===se)return De;return-1}function k1(V,se,ie){for(var De=ie+1;De--;)if(V[De]===se)return De;return De}function Jo(V){return Qo(V)?M1(V):m1(V)}function cr(V){return Qo(V)?U1(V):E1(V)}function sf(V){for(var se=V.length;se--&&ym.test(V.charAt(se)););return se}var T1=pc(u1);function M1(V){for(var se=uc.lastIndex=0;uc.test(V);)++se;return se}function U1(V){return V.match(uc)||[]}function $1(V){return V.match(r1)||[]}var F1=function V(se){se=se==null?nn:ei.defaults(nn.Object(),se,ei.pick(nn,s1));var ie=se.Array,De=se.Date,tt=se.Error,Et=se.Function,Xt=se.Math,Dt=se.Object,wc=se.RegExp,G1=se.String,Bn=se.TypeError,la=ie.prototype,P1=Et.prototype,ti=Dt.prototype,ca=se["__core-js_shared__"],ua=P1.toString,wt=ti.hasOwnProperty,W1=0,af=function(){var s=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),da=ti.toString,H1=ua.call(Dt),z1=nn._,B1=wc("^"+ua.call(wt).replace(oc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_a=z_?se.Buffer:n,to=se.Symbol,fa=se.Uint8Array,lf=_a?_a.allocUnsafe:n,ga=of(Dt.getPrototypeOf,Dt),cf=Dt.create,uf=ti.propertyIsEnumerable,ha=la.splice,df=to?to.isConcatSpreadable:n,Ji=to?to.iterator:n,Oo=to?to.toStringTag:n,va=function(){try{var s=Ro(Dt,"defineProperty");return s({},"",{}),s}catch{}}(),Y1=se.clearTimeout!==nn.clearTimeout&&se.clearTimeout,j1=De&&De.now!==nn.Date.now&&De.now,K1=se.setTimeout!==nn.setTimeout&&se.setTimeout,pa=Xt.ceil,ma=Xt.floor,Ic=Dt.getOwnPropertySymbols,V1=_a?_a.isBuffer:n,_f=se.isFinite,X1=la.join,q1=of(Dt.keys,Dt),qt=Xt.max,un=Xt.min,Z1=De.now,Q1=se.parseInt,ff=Xt.random,J1=la.reverse,yc=Ro(se,"DataView"),es=Ro(se,"Map"),Oc=Ro(se,"Promise"),ni=Ro(se,"Set"),ts=Ro(se,"WeakMap"),ns=Ro(Dt,"create"),Ea=ts&&new ts,ri={},eE=No(yc),tE=No(es),nE=No(Oc),rE=No(ni),oE=No(ts),Ca=to?to.prototype:n,rs=Ca?Ca.valueOf:n,gf=Ca?Ca.toString:n;function R(s){if(Ht(s)&&!nt(s)&&!(s instanceof _t)){if(s instanceof Yn)return s;if(wt.call(s,"__wrapped__"))return hg(s)}return new Yn(s)}var oi=function(){function s(){}return function(l){if(!Gt(l))return{};if(cf)return cf(l);s.prototype=l;var p=new s;return s.prototype=n,p}}();function ba(){}function Yn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}R.templateSettings={escape:mm,evaluate:Em,interpolate:w_,variable:"",imports:{_:R}},R.prototype=ba.prototype,R.prototype.constructor=R,Yn.prototype=oi(ba.prototype),Yn.prototype.constructor=Yn;function _t(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=qe,this.__views__=[]}function iE(){var s=new _t(this.__wrapped__);return s.__actions__=wn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=wn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=wn(this.__views__),s}function sE(){if(this.__filtered__){var s=new _t(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function aE(){var s=this.__wrapped__.value(),l=this.__dir__,p=nt(s),C=l<0,y=p?s.length:0,S=E0(0,y,this.__views__),F=S.start,B=S.end,q=B-F,de=C?B:F-1,_e=this.__iteratees__,ve=_e.length,xe=0,$e=un(q,this.__takeCount__);if(!p||!C&&y==q&&$e==q)return Ff(s,this.__actions__);var Be=[];e:for(;q--&&xe<$e;){de+=l;for(var st=-1,Ye=s[de];++st<ve;){var dt=_e[st],ft=dt.iteratee,Tn=dt.type,vn=ft(Ye);if(Tn==ge)Ye=vn;else if(!vn){if(Tn==re)continue e;break e}}Be[xe++]=Ye}return Be}_t.prototype=oi(ba.prototype),_t.prototype.constructor=_t;function xo(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function lE(){this.__data__=ns?ns(null):{},this.size=0}function cE(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function uE(s){var l=this.__data__;if(ns){var p=l[s];return p===u?n:p}return wt.call(l,s)?l[s]:n}function dE(s){var l=this.__data__;return ns?l[s]!==n:wt.call(l,s)}function _E(s,l){var p=this.__data__;return this.size+=this.has(s)?0:1,p[s]=ns&&l===n?u:l,this}xo.prototype.clear=lE,xo.prototype.delete=cE,xo.prototype.get=uE,xo.prototype.has=dE,xo.prototype.set=_E;function Sr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function fE(){this.__data__=[],this.size=0}function gE(s){var l=this.__data__,p=wa(l,s);if(p<0)return!1;var C=l.length-1;return p==C?l.pop():ha.call(l,p,1),--this.size,!0}function hE(s){var l=this.__data__,p=wa(l,s);return p<0?n:l[p][1]}function vE(s){return wa(this.__data__,s)>-1}function pE(s,l){var p=this.__data__,C=wa(p,s);return C<0?(++this.size,p.push([s,l])):p[C][1]=l,this}Sr.prototype.clear=fE,Sr.prototype.delete=gE,Sr.prototype.get=hE,Sr.prototype.has=vE,Sr.prototype.set=pE;function kr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function mE(){this.size=0,this.__data__={hash:new xo,map:new(es||Sr),string:new xo}}function EE(s){var l=Ta(this,s).delete(s);return this.size-=l?1:0,l}function CE(s){return Ta(this,s).get(s)}function bE(s){return Ta(this,s).has(s)}function wE(s,l){var p=Ta(this,s),C=p.size;return p.set(s,l),this.size+=p.size==C?0:1,this}kr.prototype.clear=mE,kr.prototype.delete=EE,kr.prototype.get=CE,kr.prototype.has=bE,kr.prototype.set=wE;function Ao(s){var l=-1,p=s==null?0:s.length;for(this.__data__=new kr;++l<p;)this.add(s[l])}function IE(s){return this.__data__.set(s,u),this}function yE(s){return this.__data__.has(s)}Ao.prototype.add=Ao.prototype.push=IE,Ao.prototype.has=yE;function ur(s){var l=this.__data__=new Sr(s);this.size=l.size}function OE(){this.__data__=new Sr,this.size=0}function xE(s){var l=this.__data__,p=l.delete(s);return this.size=l.size,p}function AE(s){return this.__data__.get(s)}function LE(s){return this.__data__.has(s)}function DE(s,l){var p=this.__data__;if(p instanceof Sr){var C=p.__data__;if(!es||C.length<o-1)return C.push([s,l]),this.size=++p.size,this;p=this.__data__=new kr(C)}return p.set(s,l),this.size=p.size,this}ur.prototype.clear=OE,ur.prototype.delete=xE,ur.prototype.get=AE,ur.prototype.has=LE,ur.prototype.set=DE;function hf(s,l){var p=nt(s),C=!p&&So(s),y=!p&&!C&&so(s),S=!p&&!C&&!y&&li(s),F=p||C||y||S,B=F?Ec(s.length,G1):[],q=B.length;for(var de in s)(l||wt.call(s,de))&&!(F&&(de=="length"||y&&(de=="offset"||de=="parent")||S&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||$r(de,q)))&&B.push(de);return B}function vf(s){var l=s.length;return l?s[Uc(0,l-1)]:n}function RE(s,l){return Ma(wn(s),Lo(l,0,s.length))}function NE(s){return Ma(wn(s))}function xc(s,l,p){(p!==n&&!dr(s[l],p)||p===n&&!(l in s))&&Tr(s,l,p)}function os(s,l,p){var C=s[l];(!(wt.call(s,l)&&dr(C,p))||p===n&&!(l in s))&&Tr(s,l,p)}function wa(s,l){for(var p=s.length;p--;)if(dr(s[p][0],l))return p;return-1}function SE(s,l,p,C){return no(s,function(y,S,F){l(C,y,p(y),F)}),C}function pf(s,l){return s&&wr(l,en(l),s)}function kE(s,l){return s&&wr(l,yn(l),s)}function Tr(s,l,p){l=="__proto__"&&va?va(s,l,{configurable:!0,enumerable:!0,value:p,writable:!0}):s[l]=p}function Ac(s,l){for(var p=-1,C=l.length,y=ie(C),S=s==null;++p<C;)y[p]=S?n:au(s,l[p]);return y}function Lo(s,l,p){return s===s&&(p!==n&&(s=s<=p?s:p),l!==n&&(s=s>=l?s:l)),s}function jn(s,l,p,C,y,S){var F,B=l&v,q=l&h,de=l&m;if(p&&(F=y?p(s,C,y,S):p(s)),F!==n)return F;if(!Gt(s))return s;var _e=nt(s);if(_e){if(F=b0(s),!B)return wn(s,F)}else{var ve=dn(s),xe=ve==Nr||ve==Ge;if(so(s))return Wf(s,B);if(ve==St||ve==yt||xe&&!y){if(F=q||xe?{}:sg(s),!B)return q?u0(s,kE(F,s)):c0(s,pf(F,s))}else{if(!kt[ve])return y?s:{};F=w0(s,ve,B)}}S||(S=new ur);var $e=S.get(s);if($e)return $e;S.set(s,F),Mg(s)?s.forEach(function(Ye){F.add(jn(Ye,l,p,Ye,s,S))}):kg(s)&&s.forEach(function(Ye,dt){F.set(dt,jn(Ye,l,p,dt,s,S))});var Be=de?q?Kc:jc:q?yn:en,st=_e?n:Be(s);return zn(st||s,function(Ye,dt){st&&(dt=Ye,Ye=s[dt]),os(F,dt,jn(Ye,l,p,dt,s,S))}),F}function TE(s){var l=en(s);return function(p){return mf(p,s,l)}}function mf(s,l,p){var C=p.length;if(s==null)return!C;for(s=Dt(s);C--;){var y=p[C],S=l[y],F=s[y];if(F===n&&!(y in s)||!S(F))return!1}return!0}function Ef(s,l,p){if(typeof s!="function")throw new Bn(a);return ds(function(){s.apply(n,p)},l)}function is(s,l,p,C){var y=-1,S=ia,F=!0,B=s.length,q=[],de=l.length;if(!B)return q;p&&(l=Ft(l,Nn(p))),C?(S=fc,F=!1):l.length>=o&&(S=Qi,F=!1,l=new Ao(l));e:for(;++y<B;){var _e=s[y],ve=p==null?_e:p(_e);if(_e=C||_e!==0?_e:0,F&&ve===ve){for(var xe=de;xe--;)if(l[xe]===ve)continue e;q.push(_e)}else S(l,ve,C)||q.push(_e)}return q}var no=jf(br),Cf=jf(Dc,!0);function ME(s,l){var p=!0;return no(s,function(C,y,S){return p=!!l(C,y,S),p}),p}function Ia(s,l,p){for(var C=-1,y=s.length;++C<y;){var S=s[C],F=l(S);if(F!=null&&(B===n?F===F&&!kn(F):p(F,B)))var B=F,q=S}return q}function UE(s,l,p,C){var y=s.length;for(p=ot(p),p<0&&(p=-p>y?0:y+p),C=C===n||C>y?y:ot(C),C<0&&(C+=y),C=p>C?0:$g(C);p<C;)s[p++]=l;return s}function bf(s,l){var p=[];return no(s,function(C,y,S){l(C,y,S)&&p.push(C)}),p}function rn(s,l,p,C,y){var S=-1,F=s.length;for(p||(p=y0),y||(y=[]);++S<F;){var B=s[S];l>0&&p(B)?l>1?rn(B,l-1,p,C,y):Jr(y,B):C||(y[y.length]=B)}return y}var Lc=Kf(),wf=Kf(!0);function br(s,l){return s&&Lc(s,l,en)}function Dc(s,l){return s&&wf(s,l,en)}function ya(s,l){return Qr(l,function(p){return Fr(s[p])})}function Do(s,l){l=oo(l,s);for(var p=0,C=l.length;s!=null&&p<C;)s=s[Ir(l[p++])];return p&&p==C?s:n}function If(s,l,p){var C=l(s);return nt(s)?C:Jr(C,p(s))}function gn(s){return s==null?s===n?ec:Fe:Oo&&Oo in Dt(s)?m0(s):N0(s)}function Rc(s,l){return s>l}function $E(s,l){return s!=null&&wt.call(s,l)}function FE(s,l){return s!=null&&l in Dt(s)}function GE(s,l,p){return s>=un(l,p)&&s<qt(l,p)}function Nc(s,l,p){for(var C=p?fc:ia,y=s[0].length,S=s.length,F=S,B=ie(S),q=1/0,de=[];F--;){var _e=s[F];F&&l&&(_e=Ft(_e,Nn(l))),q=un(_e.length,q),B[F]=!p&&(l||y>=120&&_e.length>=120)?new Ao(F&&_e):n}_e=s[0];var ve=-1,xe=B[0];e:for(;++ve<y&&de.length<q;){var $e=_e[ve],Be=l?l($e):$e;if($e=p||$e!==0?$e:0,!(xe?Qi(xe,Be):C(de,Be,p))){for(F=S;--F;){var st=B[F];if(!(st?Qi(st,Be):C(s[F],Be,p)))continue e}xe&&xe.push(Be),de.push($e)}}return de}function PE(s,l,p,C){return br(s,function(y,S,F){l(C,p(y),S,F)}),C}function ss(s,l,p){l=oo(l,s),s=ug(s,l);var C=s==null?s:s[Ir(Vn(l))];return C==null?n:Rn(C,s,p)}function yf(s){return Ht(s)&&gn(s)==yt}function WE(s){return Ht(s)&&gn(s)==Ke}function HE(s){return Ht(s)&&gn(s)==lr}function as(s,l,p,C,y){return s===l?!0:s==null||l==null||!Ht(s)&&!Ht(l)?s!==s&&l!==l:zE(s,l,p,C,as,y)}function zE(s,l,p,C,y,S){var F=nt(s),B=nt(l),q=F?Ot:dn(s),de=B?Ot:dn(l);q=q==yt?St:q,de=de==yt?St:de;var _e=q==St,ve=de==St,xe=q==de;if(xe&&so(s)){if(!so(l))return!1;F=!0,_e=!1}if(xe&&!_e)return S||(S=new ur),F||li(s)?rg(s,l,p,C,y,S):v0(s,l,q,p,C,y,S);if(!(p&E)){var $e=_e&&wt.call(s,"__wrapped__"),Be=ve&&wt.call(l,"__wrapped__");if($e||Be){var st=$e?s.value():s,Ye=Be?l.value():l;return S||(S=new ur),y(st,Ye,p,C,S)}}return xe?(S||(S=new ur),p0(s,l,p,C,y,S)):!1}function BE(s){return Ht(s)&&dn(s)==Oe}function Sc(s,l,p,C){var y=p.length,S=y,F=!C;if(s==null)return!S;for(s=Dt(s);y--;){var B=p[y];if(F&&B[2]?B[1]!==s[B[0]]:!(B[0]in s))return!1}for(;++y<S;){B=p[y];var q=B[0],de=s[q],_e=B[1];if(F&&B[2]){if(de===n&&!(q in s))return!1}else{var ve=new ur;if(C)var xe=C(de,_e,q,s,l,ve);if(!(xe===n?as(_e,de,E|w,C,ve):xe))return!1}}return!0}function Of(s){if(!Gt(s)||x0(s))return!1;var l=Fr(s)?B1:Tm;return l.test(No(s))}function YE(s){return Ht(s)&&gn(s)==Co}function jE(s){return Ht(s)&&dn(s)==Cn}function KE(s){return Ht(s)&&Wa(s.length)&&!!Ut[gn(s)]}function xf(s){return typeof s=="function"?s:s==null?On:typeof s=="object"?nt(s)?Df(s[0],s[1]):Lf(s):Vg(s)}function kc(s){if(!us(s))return q1(s);var l=[];for(var p in Dt(s))wt.call(s,p)&&p!="constructor"&&l.push(p);return l}function VE(s){if(!Gt(s))return R0(s);var l=us(s),p=[];for(var C in s)C=="constructor"&&(l||!wt.call(s,C))||p.push(C);return p}function Tc(s,l){return s<l}function Af(s,l){var p=-1,C=In(s)?ie(s.length):[];return no(s,function(y,S,F){C[++p]=l(y,S,F)}),C}function Lf(s){var l=Xc(s);return l.length==1&&l[0][2]?lg(l[0][0],l[0][1]):function(p){return p===s||Sc(p,s,l)}}function Df(s,l){return Zc(s)&&ag(l)?lg(Ir(s),l):function(p){var C=au(p,s);return C===n&&C===l?lu(p,s):as(l,C,E|w)}}function Oa(s,l,p,C,y){s!==l&&Lc(l,function(S,F){if(y||(y=new ur),Gt(S))XE(s,l,F,p,Oa,C,y);else{var B=C?C(Jc(s,F),S,F+"",s,l,y):n;B===n&&(B=S),xc(s,F,B)}},yn)}function XE(s,l,p,C,y,S,F){var B=Jc(s,p),q=Jc(l,p),de=F.get(q);if(de){xc(s,p,de);return}var _e=S?S(B,q,p+"",s,l,F):n,ve=_e===n;if(ve){var xe=nt(q),$e=!xe&&so(q),Be=!xe&&!$e&&li(q);_e=q,xe||$e||Be?nt(B)?_e=B:jt(B)?_e=wn(B):$e?(ve=!1,_e=Wf(q,!0)):Be?(ve=!1,_e=Hf(q,!0)):_e=[]:_s(q)||So(q)?(_e=B,So(B)?_e=Fg(B):(!Gt(B)||Fr(B))&&(_e=sg(q))):ve=!1}ve&&(F.set(q,_e),y(_e,q,C,S,F),F.delete(q)),xc(s,p,_e)}function Rf(s,l){var p=s.length;if(p)return l+=l<0?p:0,$r(l,p)?s[l]:n}function Nf(s,l,p){l.length?l=Ft(l,function(S){return nt(S)?function(F){return Do(F,S.length===1?S[0]:S)}:S}):l=[On];var C=-1;l=Ft(l,Nn(ze()));var y=Af(s,function(S,F,B){var q=Ft(l,function(de){return de(S)});return{criteria:q,index:++C,value:S}});return w1(y,function(S,F){return l0(S,F,p)})}function qE(s,l){return Sf(s,l,function(p,C){return lu(s,C)})}function Sf(s,l,p){for(var C=-1,y=l.length,S={};++C<y;){var F=l[C],B=Do(s,F);p(B,F)&&ls(S,oo(F,s),B)}return S}function ZE(s){return function(l){return Do(l,s)}}function Mc(s,l,p,C){var y=C?b1:Zo,S=-1,F=l.length,B=s;for(s===l&&(l=wn(l)),p&&(B=Ft(s,Nn(p)));++S<F;)for(var q=0,de=l[S],_e=p?p(de):de;(q=y(B,_e,q,C))>-1;)B!==s&&ha.call(B,q,1),ha.call(s,q,1);return s}function kf(s,l){for(var p=s?l.length:0,C=p-1;p--;){var y=l[p];if(p==C||y!==S){var S=y;$r(y)?ha.call(s,y,1):Gc(s,y)}}return s}function Uc(s,l){return s+ma(ff()*(l-s+1))}function QE(s,l,p,C){for(var y=-1,S=qt(pa((l-s)/(p||1)),0),F=ie(S);S--;)F[C?S:++y]=s,s+=p;return F}function $c(s,l){var p="";if(!s||l<1||l>Me)return p;do l%2&&(p+=s),l=ma(l/2),l&&(s+=s);while(l);return p}function lt(s,l){return eu(cg(s,l,On),s+"")}function JE(s){return vf(ci(s))}function e0(s,l){var p=ci(s);return Ma(p,Lo(l,0,p.length))}function ls(s,l,p,C){if(!Gt(s))return s;l=oo(l,s);for(var y=-1,S=l.length,F=S-1,B=s;B!=null&&++y<S;){var q=Ir(l[y]),de=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(y!=F){var _e=B[q];de=C?C(_e,q,B):n,de===n&&(de=Gt(_e)?_e:$r(l[y+1])?[]:{})}os(B,q,de),B=B[q]}return s}var Tf=Ea?function(s,l){return Ea.set(s,l),s}:On,t0=va?function(s,l){return va(s,"toString",{configurable:!0,enumerable:!1,value:uu(l),writable:!0})}:On;function n0(s){return Ma(ci(s))}function Kn(s,l,p){var C=-1,y=s.length;l<0&&(l=-l>y?0:y+l),p=p>y?y:p,p<0&&(p+=y),y=l>p?0:p-l>>>0,l>>>=0;for(var S=ie(y);++C<y;)S[C]=s[C+l];return S}function r0(s,l){var p;return no(s,function(C,y,S){return p=l(C,y,S),!p}),!!p}function xa(s,l,p){var C=0,y=s==null?C:s.length;if(typeof l=="number"&&l===l&&y<=Lt){for(;C<y;){var S=C+y>>>1,F=s[S];F!==null&&!kn(F)&&(p?F<=l:F<l)?C=S+1:y=S}return y}return Fc(s,l,On,p)}function Fc(s,l,p,C){var y=0,S=s==null?0:s.length;if(S===0)return 0;l=p(l);for(var F=l!==l,B=l===null,q=kn(l),de=l===n;y<S;){var _e=ma((y+S)/2),ve=p(s[_e]),xe=ve!==n,$e=ve===null,Be=ve===ve,st=kn(ve);if(F)var Ye=C||Be;else de?Ye=Be&&(C||xe):B?Ye=Be&&xe&&(C||!$e):q?Ye=Be&&xe&&!$e&&(C||!st):$e||st?Ye=!1:Ye=C?ve<=l:ve<l;Ye?y=_e+1:S=_e}return un(S,mt)}function Mf(s,l){for(var p=-1,C=s.length,y=0,S=[];++p<C;){var F=s[p],B=l?l(F):F;if(!p||!dr(B,q)){var q=B;S[y++]=F===0?0:F}}return S}function Uf(s){return typeof s=="number"?s:kn(s)?Xe:+s}function Sn(s){if(typeof s=="string")return s;if(nt(s))return Ft(s,Sn)+"";if(kn(s))return gf?gf.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function ro(s,l,p){var C=-1,y=ia,S=s.length,F=!0,B=[],q=B;if(p)F=!1,y=fc;else if(S>=o){var de=l?null:g0(s);if(de)return aa(de);F=!1,y=Qi,q=new Ao}else q=l?[]:B;e:for(;++C<S;){var _e=s[C],ve=l?l(_e):_e;if(_e=p||_e!==0?_e:0,F&&ve===ve){for(var xe=q.length;xe--;)if(q[xe]===ve)continue e;l&&q.push(ve),B.push(_e)}else y(q,ve,p)||(q!==B&&q.push(ve),B.push(_e))}return B}function Gc(s,l){return l=oo(l,s),s=ug(s,l),s==null||delete s[Ir(Vn(l))]}function $f(s,l,p,C){return ls(s,l,p(Do(s,l)),C)}function Aa(s,l,p,C){for(var y=s.length,S=C?y:-1;(C?S--:++S<y)&&l(s[S],S,s););return p?Kn(s,C?0:S,C?S+1:y):Kn(s,C?S+1:0,C?y:S)}function Ff(s,l){var p=s;return p instanceof _t&&(p=p.value()),gc(l,function(C,y){return y.func.apply(y.thisArg,Jr([C],y.args))},p)}function Pc(s,l,p){var C=s.length;if(C<2)return C?ro(s[0]):[];for(var y=-1,S=ie(C);++y<C;)for(var F=s[y],B=-1;++B<C;)B!=y&&(S[y]=is(S[y]||F,s[B],l,p));return ro(rn(S,1),l,p)}function Gf(s,l,p){for(var C=-1,y=s.length,S=l.length,F={};++C<y;){var B=C<S?l[C]:n;p(F,s[C],B)}return F}function Wc(s){return jt(s)?s:[]}function Hc(s){return typeof s=="function"?s:On}function oo(s,l){return nt(s)?s:Zc(s,l)?[s]:gg(bt(s))}var o0=lt;function io(s,l,p){var C=s.length;return p=p===n?C:p,!l&&p>=C?s:Kn(s,l,p)}var Pf=Y1||function(s){return nn.clearTimeout(s)};function Wf(s,l){if(l)return s.slice();var p=s.length,C=lf?lf(p):new s.constructor(p);return s.copy(C),C}function zc(s){var l=new s.constructor(s.byteLength);return new fa(l).set(new fa(s)),l}function i0(s,l){var p=l?zc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.byteLength)}function s0(s){var l=new s.constructor(s.source,I_.exec(s));return l.lastIndex=s.lastIndex,l}function a0(s){return rs?Dt(rs.call(s)):{}}function Hf(s,l){var p=l?zc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.length)}function zf(s,l){if(s!==l){var p=s!==n,C=s===null,y=s===s,S=kn(s),F=l!==n,B=l===null,q=l===l,de=kn(l);if(!B&&!de&&!S&&s>l||S&&F&&q&&!B&&!de||C&&F&&q||!p&&q||!y)return 1;if(!C&&!S&&!de&&s<l||de&&p&&y&&!C&&!S||B&&p&&y||!F&&y||!q)return-1}return 0}function l0(s,l,p){for(var C=-1,y=s.criteria,S=l.criteria,F=y.length,B=p.length;++C<F;){var q=zf(y[C],S[C]);if(q){if(C>=B)return q;var de=p[C];return q*(de=="desc"?-1:1)}}return s.index-l.index}function Bf(s,l,p,C){for(var y=-1,S=s.length,F=p.length,B=-1,q=l.length,de=qt(S-F,0),_e=ie(q+de),ve=!C;++B<q;)_e[B]=l[B];for(;++y<F;)(ve||y<S)&&(_e[p[y]]=s[y]);for(;de--;)_e[B++]=s[y++];return _e}function Yf(s,l,p,C){for(var y=-1,S=s.length,F=-1,B=p.length,q=-1,de=l.length,_e=qt(S-B,0),ve=ie(_e+de),xe=!C;++y<_e;)ve[y]=s[y];for(var $e=y;++q<de;)ve[$e+q]=l[q];for(;++F<B;)(xe||y<S)&&(ve[$e+p[F]]=s[y++]);return ve}function wn(s,l){var p=-1,C=s.length;for(l||(l=ie(C));++p<C;)l[p]=s[p];return l}function wr(s,l,p,C){var y=!p;p||(p={});for(var S=-1,F=l.length;++S<F;){var B=l[S],q=C?C(p[B],s[B],B,p,s):n;q===n&&(q=s[B]),y?Tr(p,B,q):os(p,B,q)}return p}function c0(s,l){return wr(s,qc(s),l)}function u0(s,l){return wr(s,og(s),l)}function La(s,l){return function(p,C){var y=nt(p)?h1:SE,S=l?l():{};return y(p,s,ze(C,2),S)}}function ii(s){return lt(function(l,p){var C=-1,y=p.length,S=y>1?p[y-1]:n,F=y>2?p[2]:n;for(S=s.length>3&&typeof S=="function"?(y--,S):n,F&&hn(p[0],p[1],F)&&(S=y<3?n:S,y=1),l=Dt(l);++C<y;){var B=p[C];B&&s(l,B,C,S)}return l})}function jf(s,l){return function(p,C){if(p==null)return p;if(!In(p))return s(p,C);for(var y=p.length,S=l?y:-1,F=Dt(p);(l?S--:++S<y)&&C(F[S],S,F)!==!1;);return p}}function Kf(s){return function(l,p,C){for(var y=-1,S=Dt(l),F=C(l),B=F.length;B--;){var q=F[s?B:++y];if(p(S[q],q,S)===!1)break}return l}}function d0(s,l,p){var C=l&b,y=cs(s);function S(){var F=this&&this!==nn&&this instanceof S?y:s;return F.apply(C?p:this,arguments)}return S}function Vf(s){return function(l){l=bt(l);var p=Qo(l)?cr(l):n,C=p?p[0]:l.charAt(0),y=p?io(p,1).join(""):l.slice(1);return C[s]()+y}}function si(s){return function(l){return gc(jg(Yg(l).replace(t1,"")),s,"")}}function cs(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var p=oi(s.prototype),C=s.apply(p,l);return Gt(C)?C:p}}function _0(s,l,p){var C=cs(s);function y(){for(var S=arguments.length,F=ie(S),B=S,q=ai(y);B--;)F[B]=arguments[B];var de=S<3&&F[0]!==q&&F[S-1]!==q?[]:eo(F,q);if(S-=de.length,S<p)return Jf(s,l,Da,y.placeholder,n,F,de,n,n,p-S);var _e=this&&this!==nn&&this instanceof y?C:s;return Rn(_e,this,F)}return y}function Xf(s){return function(l,p,C){var y=Dt(l);if(!In(l)){var S=ze(p,3);l=en(l),p=function(B){return S(y[B],B,y)}}var F=s(l,p,C);return F>-1?y[S?l[F]:F]:n}}function qf(s){return Ur(function(l){var p=l.length,C=p,y=Yn.prototype.thru;for(s&&l.reverse();C--;){var S=l[C];if(typeof S!="function")throw new Bn(a);if(y&&!F&&ka(S)=="wrapper")var F=new Yn([],!0)}for(C=F?C:p;++C<p;){S=l[C];var B=ka(S),q=B=="wrapper"?Vc(S):n;q&&Qc(q[0])&&q[1]==(T|k|G|j)&&!q[4].length&&q[9]==1?F=F[ka(q[0])].apply(F,q[3]):F=S.length==1&&Qc(S)?F[B]():F.thru(S)}return function(){var de=arguments,_e=de[0];if(F&&de.length==1&&nt(_e))return F.plant(_e).value();for(var ve=0,xe=p?l[ve].apply(this,de):_e;++ve<p;)xe=l[ve].call(this,xe);return xe}})}function Da(s,l,p,C,y,S,F,B,q,de){var _e=l&T,ve=l&b,xe=l&I,$e=l&(k|M),Be=l&ee,st=xe?n:cs(s);function Ye(){for(var dt=arguments.length,ft=ie(dt),Tn=dt;Tn--;)ft[Tn]=arguments[Tn];if($e)var vn=ai(Ye),Mn=y1(ft,vn);if(C&&(ft=Bf(ft,C,y,$e)),S&&(ft=Yf(ft,S,F,$e)),dt-=Mn,$e&&dt<de){var Kt=eo(ft,vn);return Jf(s,l,Da,Ye.placeholder,p,ft,Kt,B,q,de-dt)}var _r=ve?p:this,Pr=xe?_r[s]:s;return dt=ft.length,B?ft=S0(ft,B):Be&&dt>1&&ft.reverse(),_e&&q<dt&&(ft.length=q),this&&this!==nn&&this instanceof Ye&&(Pr=st||cs(Pr)),Pr.apply(_r,ft)}return Ye}function Zf(s,l){return function(p,C){return PE(p,s,l(C),{})}}function Ra(s,l){return function(p,C){var y;if(p===n&&C===n)return l;if(p!==n&&(y=p),C!==n){if(y===n)return C;typeof p=="string"||typeof C=="string"?(p=Sn(p),C=Sn(C)):(p=Uf(p),C=Uf(C)),y=s(p,C)}return y}}function Bc(s){return Ur(function(l){return l=Ft(l,Nn(ze())),lt(function(p){var C=this;return s(l,function(y){return Rn(y,C,p)})})})}function Na(s,l){l=l===n?" ":Sn(l);var p=l.length;if(p<2)return p?$c(l,s):l;var C=$c(l,pa(s/Jo(l)));return Qo(l)?io(cr(C),0,s).join(""):C.slice(0,s)}function f0(s,l,p,C){var y=l&b,S=cs(s);function F(){for(var B=-1,q=arguments.length,de=-1,_e=C.length,ve=ie(_e+q),xe=this&&this!==nn&&this instanceof F?S:s;++de<_e;)ve[de]=C[de];for(;q--;)ve[de++]=arguments[++B];return Rn(xe,y?p:this,ve)}return F}function Qf(s){return function(l,p,C){return C&&typeof C!="number"&&hn(l,p,C)&&(p=C=n),l=Gr(l),p===n?(p=l,l=0):p=Gr(p),C=C===n?l<p?1:-1:Gr(C),QE(l,p,C,s)}}function Sa(s){return function(l,p){return typeof l=="string"&&typeof p=="string"||(l=Xn(l),p=Xn(p)),s(l,p)}}function Jf(s,l,p,C,y,S,F,B,q,de){var _e=l&k,ve=_e?F:n,xe=_e?n:F,$e=_e?S:n,Be=_e?n:S;l|=_e?G:z,l&=~(_e?z:G),l&A||(l&=-4);var st=[s,l,y,$e,ve,Be,xe,B,q,de],Ye=p.apply(n,st);return Qc(s)&&dg(Ye,st),Ye.placeholder=C,_g(Ye,s,l)}function Yc(s){var l=Xt[s];return function(p,C){if(p=Xn(p),C=C==null?0:un(ot(C),292),C&&_f(p)){var y=(bt(p)+"e").split("e"),S=l(y[0]+"e"+(+y[1]+C));return y=(bt(S)+"e").split("e"),+(y[0]+"e"+(+y[1]-C))}return l(p)}}var g0=ni&&1/aa(new ni([,-0]))[1]==ye?function(s){return new ni(s)}:fu;function eg(s){return function(l){var p=dn(l);return p==Oe?bc(l):p==Cn?N1(l):I1(l,s(l))}}function Mr(s,l,p,C,y,S,F,B){var q=l&I;if(!q&&typeof s!="function")throw new Bn(a);var de=C?C.length:0;if(de||(l&=-97,C=y=n),F=F===n?F:qt(ot(F),0),B=B===n?B:ot(B),de-=y?y.length:0,l&z){var _e=C,ve=y;C=y=n}var xe=q?n:Vc(s),$e=[s,l,p,C,y,_e,ve,S,F,B];if(xe&&D0($e,xe),s=$e[0],l=$e[1],p=$e[2],C=$e[3],y=$e[4],B=$e[9]=$e[9]===n?q?0:s.length:qt($e[9]-de,0),!B&&l&(k|M)&&(l&=-25),!l||l==b)var Be=d0(s,l,p);else l==k||l==M?Be=_0(s,l,B):(l==G||l==(b|G))&&!y.length?Be=f0(s,l,p,C):Be=Da.apply(n,$e);var st=xe?Tf:dg;return _g(st(Be,$e),s,l)}function tg(s,l,p,C){return s===n||dr(s,ti[p])&&!wt.call(C,p)?l:s}function ng(s,l,p,C,y,S){return Gt(s)&&Gt(l)&&(S.set(l,s),Oa(s,l,n,ng,S),S.delete(l)),s}function h0(s){return _s(s)?n:s}function rg(s,l,p,C,y,S){var F=p&E,B=s.length,q=l.length;if(B!=q&&!(F&&q>B))return!1;var de=S.get(s),_e=S.get(l);if(de&&_e)return de==l&&_e==s;var ve=-1,xe=!0,$e=p&w?new Ao:n;for(S.set(s,l),S.set(l,s);++ve<B;){var Be=s[ve],st=l[ve];if(C)var Ye=F?C(st,Be,ve,l,s,S):C(Be,st,ve,s,l,S);if(Ye!==n){if(Ye)continue;xe=!1;break}if($e){if(!hc(l,function(dt,ft){if(!Qi($e,ft)&&(Be===dt||y(Be,dt,p,C,S)))return $e.push(ft)})){xe=!1;break}}else if(!(Be===st||y(Be,st,p,C,S))){xe=!1;break}}return S.delete(s),S.delete(l),xe}function v0(s,l,p,C,y,S,F){switch(p){case bn:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case Ke:return!(s.byteLength!=l.byteLength||!S(new fa(s),new fa(l)));case Dn:case lr:case Ue:return dr(+s,+l);case Rr:return s.name==l.name&&s.message==l.message;case Co:case bo:return s==l+"";case Oe:var B=bc;case Cn:var q=C&E;if(B||(B=aa),s.size!=l.size&&!q)return!1;var de=F.get(s);if(de)return de==l;C|=w,F.set(s,l);var _e=rg(B(s),B(l),C,y,S,F);return F.delete(s),_e;case wo:if(rs)return rs.call(s)==rs.call(l)}return!1}function p0(s,l,p,C,y,S){var F=p&E,B=jc(s),q=B.length,de=jc(l),_e=de.length;if(q!=_e&&!F)return!1;for(var ve=q;ve--;){var xe=B[ve];if(!(F?xe in l:wt.call(l,xe)))return!1}var $e=S.get(s),Be=S.get(l);if($e&&Be)return $e==l&&Be==s;var st=!0;S.set(s,l),S.set(l,s);for(var Ye=F;++ve<q;){xe=B[ve];var dt=s[xe],ft=l[xe];if(C)var Tn=F?C(ft,dt,xe,l,s,S):C(dt,ft,xe,s,l,S);if(!(Tn===n?dt===ft||y(dt,ft,p,C,S):Tn)){st=!1;break}Ye||(Ye=xe=="constructor")}if(st&&!Ye){var vn=s.constructor,Mn=l.constructor;vn!=Mn&&"constructor"in s&&"constructor"in l&&!(typeof vn=="function"&&vn instanceof vn&&typeof Mn=="function"&&Mn instanceof Mn)&&(st=!1)}return S.delete(s),S.delete(l),st}function Ur(s){return eu(cg(s,n,mg),s+"")}function jc(s){return If(s,en,qc)}function Kc(s){return If(s,yn,og)}var Vc=Ea?function(s){return Ea.get(s)}:fu;function ka(s){for(var l=s.name+"",p=ri[l],C=wt.call(ri,l)?p.length:0;C--;){var y=p[C],S=y.func;if(S==null||S==s)return y.name}return l}function ai(s){var l=wt.call(R,"placeholder")?R:s;return l.placeholder}function ze(){var s=R.iteratee||du;return s=s===du?xf:s,arguments.length?s(arguments[0],arguments[1]):s}function Ta(s,l){var p=s.__data__;return O0(l)?p[typeof l=="string"?"string":"hash"]:p.map}function Xc(s){for(var l=en(s),p=l.length;p--;){var C=l[p],y=s[C];l[p]=[C,y,ag(y)]}return l}function Ro(s,l){var p=L1(s,l);return Of(p)?p:n}function m0(s){var l=wt.call(s,Oo),p=s[Oo];try{s[Oo]=n;var C=!0}catch{}var y=da.call(s);return C&&(l?s[Oo]=p:delete s[Oo]),y}var qc=Ic?function(s){return s==null?[]:(s=Dt(s),Qr(Ic(s),function(l){return uf.call(s,l)}))}:gu,og=Ic?function(s){for(var l=[];s;)Jr(l,qc(s)),s=ga(s);return l}:gu,dn=gn;(yc&&dn(new yc(new ArrayBuffer(1)))!=bn||es&&dn(new es)!=Oe||Oc&&dn(Oc.resolve())!=ea||ni&&dn(new ni)!=Cn||ts&&dn(new ts)!=Io)&&(dn=function(s){var l=gn(s),p=l==St?s.constructor:n,C=p?No(p):"";if(C)switch(C){case eE:return bn;case tE:return Oe;case nE:return ea;case rE:return Cn;case oE:return Io}return l});function E0(s,l,p){for(var C=-1,y=p.length;++C<y;){var S=p[C],F=S.size;switch(S.type){case"drop":s+=F;break;case"dropRight":l-=F;break;case"take":l=un(l,s+F);break;case"takeRight":s=qt(s,l-F);break}}return{start:s,end:l}}function C0(s){var l=s.match(xm);return l?l[1].split(Am):[]}function ig(s,l,p){l=oo(l,s);for(var C=-1,y=l.length,S=!1;++C<y;){var F=Ir(l[C]);if(!(S=s!=null&&p(s,F)))break;s=s[F]}return S||++C!=y?S:(y=s==null?0:s.length,!!y&&Wa(y)&&$r(F,y)&&(nt(s)||So(s)))}function b0(s){var l=s.length,p=new s.constructor(l);return l&&typeof s[0]=="string"&&wt.call(s,"index")&&(p.index=s.index,p.input=s.input),p}function sg(s){return typeof s.constructor=="function"&&!us(s)?oi(ga(s)):{}}function w0(s,l,p){var C=s.constructor;switch(l){case Ke:return zc(s);case Dn:case lr:return new C(+s);case bn:return i0(s,p);case Vo:case Xo:case Cr:case Vi:case Xi:case qi:case Zi:case nc:case rc:return Hf(s,p);case Oe:return new C;case Ue:case bo:return new C(s);case Co:return s0(s);case Cn:return new C;case wo:return a0(s)}}function I0(s,l){var p=l.length;if(!p)return s;var C=p-1;return l[C]=(p>1?"& ":"")+l[C],l=l.join(p>2?", ":" "),s.replace(Om,`{
/* [wrapped with `+l+`] */
`)}function y0(s){return nt(s)||So(s)||!!(df&&s&&s[df])}function $r(s,l){var p=typeof s;return l=l??Me,!!l&&(p=="number"||p!="symbol"&&Um.test(s))&&s>-1&&s%1==0&&s<l}function hn(s,l,p){if(!Gt(p))return!1;var C=typeof l;return(C=="number"?In(p)&&$r(l,p.length):C=="string"&&l in p)?dr(p[l],s):!1}function Zc(s,l){if(nt(s))return!1;var p=typeof s;return p=="number"||p=="symbol"||p=="boolean"||s==null||kn(s)?!0:bm.test(s)||!Cm.test(s)||l!=null&&s in Dt(l)}function O0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Qc(s){var l=ka(s),p=R[l];if(typeof p!="function"||!(l in _t.prototype))return!1;if(s===p)return!0;var C=Vc(p);return!!C&&s===C[0]}function x0(s){return!!af&&af in s}var A0=ca?Fr:hu;function us(s){var l=s&&s.constructor,p=typeof l=="function"&&l.prototype||ti;return s===p}function ag(s){return s===s&&!Gt(s)}function lg(s,l){return function(p){return p==null?!1:p[s]===l&&(l!==n||s in Dt(p))}}function L0(s){var l=Ga(s,function(C){return p.size===_&&p.clear(),C}),p=l.cache;return l}function D0(s,l){var p=s[1],C=l[1],y=p|C,S=y<(b|I|T),F=C==T&&p==k||C==T&&p==j&&s[7].length<=l[8]||C==(T|j)&&l[7].length<=l[8]&&p==k;if(!(S||F))return s;C&b&&(s[2]=l[2],y|=p&b?0:A);var B=l[3];if(B){var q=s[3];s[3]=q?Bf(q,B,l[4]):B,s[4]=q?eo(s[3],g):l[4]}return B=l[5],B&&(q=s[5],s[5]=q?Yf(q,B,l[6]):B,s[6]=q?eo(s[5],g):l[6]),B=l[7],B&&(s[7]=B),C&T&&(s[8]=s[8]==null?l[8]:un(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=y,s}function R0(s){var l=[];if(s!=null)for(var p in Dt(s))l.push(p);return l}function N0(s){return da.call(s)}function cg(s,l,p){return l=qt(l===n?s.length-1:l,0),function(){for(var C=arguments,y=-1,S=qt(C.length-l,0),F=ie(S);++y<S;)F[y]=C[l+y];y=-1;for(var B=ie(l+1);++y<l;)B[y]=C[y];return B[l]=p(F),Rn(s,this,B)}}function ug(s,l){return l.length<2?s:Do(s,Kn(l,0,-1))}function S0(s,l){for(var p=s.length,C=un(l.length,p),y=wn(s);C--;){var S=l[C];s[C]=$r(S,p)?y[S]:n}return s}function Jc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var dg=fg(Tf),ds=K1||function(s,l){return nn.setTimeout(s,l)},eu=fg(t0);function _g(s,l,p){var C=l+"";return eu(s,I0(C,k0(C0(C),p)))}function fg(s){var l=0,p=0;return function(){var C=Z1(),y=he-(C-p);if(p=C,y>0){if(++l>=ne)return arguments[0]}else l=0;return s.apply(n,arguments)}}function Ma(s,l){var p=-1,C=s.length,y=C-1;for(l=l===n?C:l;++p<l;){var S=Uc(p,y),F=s[S];s[S]=s[p],s[p]=F}return s.length=l,s}var gg=L0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(wm,function(p,C,y,S){l.push(y?S.replace(Rm,"$1"):C||p)}),l});function Ir(s){if(typeof s=="string"||kn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function No(s){if(s!=null){try{return ua.call(s)}catch{}try{return s+""}catch{}}return""}function k0(s,l){return zn(Wt,function(p){var C="_."+p[0];l&p[1]&&!ia(s,C)&&s.push(C)}),s.sort()}function hg(s){if(s instanceof _t)return s.clone();var l=new Yn(s.__wrapped__,s.__chain__);return l.__actions__=wn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function T0(s,l,p){(p?hn(s,l,p):l===n)?l=1:l=qt(ot(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var y=0,S=0,F=ie(pa(C/l));y<C;)F[S++]=Kn(s,y,y+=l);return F}function M0(s){for(var l=-1,p=s==null?0:s.length,C=0,y=[];++l<p;){var S=s[l];S&&(y[C++]=S)}return y}function U0(){var s=arguments.length;if(!s)return[];for(var l=ie(s-1),p=arguments[0],C=s;C--;)l[C-1]=arguments[C];return Jr(nt(p)?wn(p):[p],rn(l,1))}var $0=lt(function(s,l){return jt(s)?is(s,rn(l,1,jt,!0)):[]}),F0=lt(function(s,l){var p=Vn(l);return jt(p)&&(p=n),jt(s)?is(s,rn(l,1,jt,!0),ze(p,2)):[]}),G0=lt(function(s,l){var p=Vn(l);return jt(p)&&(p=n),jt(s)?is(s,rn(l,1,jt,!0),n,p):[]});function P0(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:ot(l),Kn(s,l<0?0:l,C)):[]}function W0(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:ot(l),l=C-l,Kn(s,0,l<0?0:l)):[]}function H0(s,l){return s&&s.length?Aa(s,ze(l,3),!0,!0):[]}function z0(s,l){return s&&s.length?Aa(s,ze(l,3),!0):[]}function B0(s,l,p,C){var y=s==null?0:s.length;return y?(p&&typeof p!="number"&&hn(s,l,p)&&(p=0,C=y),UE(s,l,p,C)):[]}function vg(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:ot(p);return y<0&&(y=qt(C+y,0)),sa(s,ze(l,3),y)}function pg(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=C-1;return p!==n&&(y=ot(p),y=p<0?qt(C+y,0):un(y,C-1)),sa(s,ze(l,3),y,!0)}function mg(s){var l=s==null?0:s.length;return l?rn(s,1):[]}function Y0(s){var l=s==null?0:s.length;return l?rn(s,ye):[]}function j0(s,l){var p=s==null?0:s.length;return p?(l=l===n?1:ot(l),rn(s,l)):[]}function K0(s){for(var l=-1,p=s==null?0:s.length,C={};++l<p;){var y=s[l];C[y[0]]=y[1]}return C}function Eg(s){return s&&s.length?s[0]:n}function V0(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:ot(p);return y<0&&(y=qt(C+y,0)),Zo(s,l,y)}function X0(s){var l=s==null?0:s.length;return l?Kn(s,0,-1):[]}var q0=lt(function(s){var l=Ft(s,Wc);return l.length&&l[0]===s[0]?Nc(l):[]}),Z0=lt(function(s){var l=Vn(s),p=Ft(s,Wc);return l===Vn(p)?l=n:p.pop(),p.length&&p[0]===s[0]?Nc(p,ze(l,2)):[]}),Q0=lt(function(s){var l=Vn(s),p=Ft(s,Wc);return l=typeof l=="function"?l:n,l&&p.pop(),p.length&&p[0]===s[0]?Nc(p,n,l):[]});function J0(s,l){return s==null?"":X1.call(s,l)}function Vn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function eC(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=C;return p!==n&&(y=ot(p),y=y<0?qt(C+y,0):un(y,C-1)),l===l?k1(s,l,y):sa(s,Q_,y,!0)}function tC(s,l){return s&&s.length?Rf(s,ot(l)):n}var nC=lt(Cg);function Cg(s,l){return s&&s.length&&l&&l.length?Mc(s,l):s}function rC(s,l,p){return s&&s.length&&l&&l.length?Mc(s,l,ze(p,2)):s}function oC(s,l,p){return s&&s.length&&l&&l.length?Mc(s,l,n,p):s}var iC=Ur(function(s,l){var p=s==null?0:s.length,C=Ac(s,l);return kf(s,Ft(l,function(y){return $r(y,p)?+y:y}).sort(zf)),C});function sC(s,l){var p=[];if(!(s&&s.length))return p;var C=-1,y=[],S=s.length;for(l=ze(l,3);++C<S;){var F=s[C];l(F,C,s)&&(p.push(F),y.push(C))}return kf(s,y),p}function tu(s){return s==null?s:J1.call(s)}function aC(s,l,p){var C=s==null?0:s.length;return C?(p&&typeof p!="number"&&hn(s,l,p)?(l=0,p=C):(l=l==null?0:ot(l),p=p===n?C:ot(p)),Kn(s,l,p)):[]}function lC(s,l){return xa(s,l)}function cC(s,l,p){return Fc(s,l,ze(p,2))}function uC(s,l){var p=s==null?0:s.length;if(p){var C=xa(s,l);if(C<p&&dr(s[C],l))return C}return-1}function dC(s,l){return xa(s,l,!0)}function _C(s,l,p){return Fc(s,l,ze(p,2),!0)}function fC(s,l){var p=s==null?0:s.length;if(p){var C=xa(s,l,!0)-1;if(dr(s[C],l))return C}return-1}function gC(s){return s&&s.length?Mf(s):[]}function hC(s,l){return s&&s.length?Mf(s,ze(l,2)):[]}function vC(s){var l=s==null?0:s.length;return l?Kn(s,1,l):[]}function pC(s,l,p){return s&&s.length?(l=p||l===n?1:ot(l),Kn(s,0,l<0?0:l)):[]}function mC(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:ot(l),l=C-l,Kn(s,l<0?0:l,C)):[]}function EC(s,l){return s&&s.length?Aa(s,ze(l,3),!1,!0):[]}function CC(s,l){return s&&s.length?Aa(s,ze(l,3)):[]}var bC=lt(function(s){return ro(rn(s,1,jt,!0))}),wC=lt(function(s){var l=Vn(s);return jt(l)&&(l=n),ro(rn(s,1,jt,!0),ze(l,2))}),IC=lt(function(s){var l=Vn(s);return l=typeof l=="function"?l:n,ro(rn(s,1,jt,!0),n,l)});function yC(s){return s&&s.length?ro(s):[]}function OC(s,l){return s&&s.length?ro(s,ze(l,2)):[]}function xC(s,l){return l=typeof l=="function"?l:n,s&&s.length?ro(s,n,l):[]}function nu(s){if(!(s&&s.length))return[];var l=0;return s=Qr(s,function(p){if(jt(p))return l=qt(p.length,l),!0}),Ec(l,function(p){return Ft(s,vc(p))})}function bg(s,l){if(!(s&&s.length))return[];var p=nu(s);return l==null?p:Ft(p,function(C){return Rn(l,n,C)})}var AC=lt(function(s,l){return jt(s)?is(s,l):[]}),LC=lt(function(s){return Pc(Qr(s,jt))}),DC=lt(function(s){var l=Vn(s);return jt(l)&&(l=n),Pc(Qr(s,jt),ze(l,2))}),RC=lt(function(s){var l=Vn(s);return l=typeof l=="function"?l:n,Pc(Qr(s,jt),n,l)}),NC=lt(nu);function SC(s,l){return Gf(s||[],l||[],os)}function kC(s,l){return Gf(s||[],l||[],ls)}var TC=lt(function(s){var l=s.length,p=l>1?s[l-1]:n;return p=typeof p=="function"?(s.pop(),p):n,bg(s,p)});function wg(s){var l=R(s);return l.__chain__=!0,l}function MC(s,l){return l(s),s}function Ua(s,l){return l(s)}var UC=Ur(function(s){var l=s.length,p=l?s[0]:0,C=this.__wrapped__,y=function(S){return Ac(S,s)};return l>1||this.__actions__.length||!(C instanceof _t)||!$r(p)?this.thru(y):(C=C.slice(p,+p+(l?1:0)),C.__actions__.push({func:Ua,args:[y],thisArg:n}),new Yn(C,this.__chain__).thru(function(S){return l&&!S.length&&S.push(n),S}))});function $C(){return wg(this)}function FC(){return new Yn(this.value(),this.__chain__)}function GC(){this.__values__===n&&(this.__values__=Ug(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function PC(){return this}function WC(s){for(var l,p=this;p instanceof ba;){var C=hg(p);C.__index__=0,C.__values__=n,l?y.__wrapped__=C:l=C;var y=C;p=p.__wrapped__}return y.__wrapped__=s,l}function HC(){var s=this.__wrapped__;if(s instanceof _t){var l=s;return this.__actions__.length&&(l=new _t(this)),l=l.reverse(),l.__actions__.push({func:Ua,args:[tu],thisArg:n}),new Yn(l,this.__chain__)}return this.thru(tu)}function zC(){return Ff(this.__wrapped__,this.__actions__)}var BC=La(function(s,l,p){wt.call(s,p)?++s[p]:Tr(s,p,1)});function YC(s,l,p){var C=nt(s)?q_:ME;return p&&hn(s,l,p)&&(l=n),C(s,ze(l,3))}function jC(s,l){var p=nt(s)?Qr:bf;return p(s,ze(l,3))}var KC=Xf(vg),VC=Xf(pg);function XC(s,l){return rn($a(s,l),1)}function qC(s,l){return rn($a(s,l),ye)}function ZC(s,l,p){return p=p===n?1:ot(p),rn($a(s,l),p)}function Ig(s,l){var p=nt(s)?zn:no;return p(s,ze(l,3))}function yg(s,l){var p=nt(s)?v1:Cf;return p(s,ze(l,3))}var QC=La(function(s,l,p){wt.call(s,p)?s[p].push(l):Tr(s,p,[l])});function JC(s,l,p,C){s=In(s)?s:ci(s),p=p&&!C?ot(p):0;var y=s.length;return p<0&&(p=qt(y+p,0)),Ha(s)?p<=y&&s.indexOf(l,p)>-1:!!y&&Zo(s,l,p)>-1}var eb=lt(function(s,l,p){var C=-1,y=typeof l=="function",S=In(s)?ie(s.length):[];return no(s,function(F){S[++C]=y?Rn(l,F,p):ss(F,l,p)}),S}),tb=La(function(s,l,p){Tr(s,p,l)});function $a(s,l){var p=nt(s)?Ft:Af;return p(s,ze(l,3))}function nb(s,l,p,C){return s==null?[]:(nt(l)||(l=l==null?[]:[l]),p=C?n:p,nt(p)||(p=p==null?[]:[p]),Nf(s,l,p))}var rb=La(function(s,l,p){s[p?0:1].push(l)},function(){return[[],[]]});function ob(s,l,p){var C=nt(s)?gc:ef,y=arguments.length<3;return C(s,ze(l,4),p,y,no)}function ib(s,l,p){var C=nt(s)?p1:ef,y=arguments.length<3;return C(s,ze(l,4),p,y,Cf)}function sb(s,l){var p=nt(s)?Qr:bf;return p(s,Pa(ze(l,3)))}function ab(s){var l=nt(s)?vf:JE;return l(s)}function lb(s,l,p){(p?hn(s,l,p):l===n)?l=1:l=ot(l);var C=nt(s)?RE:e0;return C(s,l)}function cb(s){var l=nt(s)?NE:n0;return l(s)}function ub(s){if(s==null)return 0;if(In(s))return Ha(s)?Jo(s):s.length;var l=dn(s);return l==Oe||l==Cn?s.size:kc(s).length}function db(s,l,p){var C=nt(s)?hc:r0;return p&&hn(s,l,p)&&(l=n),C(s,ze(l,3))}var _b=lt(function(s,l){if(s==null)return[];var p=l.length;return p>1&&hn(s,l[0],l[1])?l=[]:p>2&&hn(l[0],l[1],l[2])&&(l=[l[0]]),Nf(s,rn(l,1),[])}),Fa=j1||function(){return nn.Date.now()};function fb(s,l){if(typeof l!="function")throw new Bn(a);return s=ot(s),function(){if(--s<1)return l.apply(this,arguments)}}function Og(s,l,p){return l=p?n:l,l=s&&l==null?s.length:l,Mr(s,T,n,n,n,n,l)}function xg(s,l){var p;if(typeof l!="function")throw new Bn(a);return s=ot(s),function(){return--s>0&&(p=l.apply(this,arguments)),s<=1&&(l=n),p}}var ru=lt(function(s,l,p){var C=b;if(p.length){var y=eo(p,ai(ru));C|=G}return Mr(s,C,l,p,y)}),Ag=lt(function(s,l,p){var C=b|I;if(p.length){var y=eo(p,ai(Ag));C|=G}return Mr(l,C,s,p,y)});function Lg(s,l,p){l=p?n:l;var C=Mr(s,k,n,n,n,n,n,l);return C.placeholder=Lg.placeholder,C}function Dg(s,l,p){l=p?n:l;var C=Mr(s,M,n,n,n,n,n,l);return C.placeholder=Dg.placeholder,C}function Rg(s,l,p){var C,y,S,F,B,q,de=0,_e=!1,ve=!1,xe=!0;if(typeof s!="function")throw new Bn(a);l=Xn(l)||0,Gt(p)&&(_e=!!p.leading,ve="maxWait"in p,S=ve?qt(Xn(p.maxWait)||0,l):S,xe="trailing"in p?!!p.trailing:xe);function $e(Kt){var _r=C,Pr=y;return C=y=n,de=Kt,F=s.apply(Pr,_r),F}function Be(Kt){return de=Kt,B=ds(dt,l),_e?$e(Kt):F}function st(Kt){var _r=Kt-q,Pr=Kt-de,Xg=l-_r;return ve?un(Xg,S-Pr):Xg}function Ye(Kt){var _r=Kt-q,Pr=Kt-de;return q===n||_r>=l||_r<0||ve&&Pr>=S}function dt(){var Kt=Fa();if(Ye(Kt))return ft(Kt);B=ds(dt,st(Kt))}function ft(Kt){return B=n,xe&&C?$e(Kt):(C=y=n,F)}function Tn(){B!==n&&Pf(B),de=0,C=q=y=B=n}function vn(){return B===n?F:ft(Fa())}function Mn(){var Kt=Fa(),_r=Ye(Kt);if(C=arguments,y=this,q=Kt,_r){if(B===n)return Be(q);if(ve)return Pf(B),B=ds(dt,l),$e(q)}return B===n&&(B=ds(dt,l)),F}return Mn.cancel=Tn,Mn.flush=vn,Mn}var gb=lt(function(s,l){return Ef(s,1,l)}),hb=lt(function(s,l,p){return Ef(s,Xn(l)||0,p)});function vb(s){return Mr(s,ee)}function Ga(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Bn(a);var p=function(){var C=arguments,y=l?l.apply(this,C):C[0],S=p.cache;if(S.has(y))return S.get(y);var F=s.apply(this,C);return p.cache=S.set(y,F)||S,F};return p.cache=new(Ga.Cache||kr),p}Ga.Cache=kr;function Pa(s){if(typeof s!="function")throw new Bn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function pb(s){return xg(2,s)}var mb=o0(function(s,l){l=l.length==1&&nt(l[0])?Ft(l[0],Nn(ze())):Ft(rn(l,1),Nn(ze()));var p=l.length;return lt(function(C){for(var y=-1,S=un(C.length,p);++y<S;)C[y]=l[y].call(this,C[y]);return Rn(s,this,C)})}),ou=lt(function(s,l){var p=eo(l,ai(ou));return Mr(s,G,n,l,p)}),Ng=lt(function(s,l){var p=eo(l,ai(Ng));return Mr(s,z,n,l,p)}),Eb=Ur(function(s,l){return Mr(s,j,n,n,n,l)});function Cb(s,l){if(typeof s!="function")throw new Bn(a);return l=l===n?l:ot(l),lt(s,l)}function bb(s,l){if(typeof s!="function")throw new Bn(a);return l=l==null?0:qt(ot(l),0),lt(function(p){var C=p[l],y=io(p,0,l);return C&&Jr(y,C),Rn(s,this,y)})}function wb(s,l,p){var C=!0,y=!0;if(typeof s!="function")throw new Bn(a);return Gt(p)&&(C="leading"in p?!!p.leading:C,y="trailing"in p?!!p.trailing:y),Rg(s,l,{leading:C,maxWait:l,trailing:y})}function Ib(s){return Og(s,1)}function yb(s,l){return ou(Hc(l),s)}function Ob(){if(!arguments.length)return[];var s=arguments[0];return nt(s)?s:[s]}function xb(s){return jn(s,m)}function Ab(s,l){return l=typeof l=="function"?l:n,jn(s,m,l)}function Lb(s){return jn(s,v|m)}function Db(s,l){return l=typeof l=="function"?l:n,jn(s,v|m,l)}function Rb(s,l){return l==null||mf(s,l,en(l))}function dr(s,l){return s===l||s!==s&&l!==l}var Nb=Sa(Rc),Sb=Sa(function(s,l){return s>=l}),So=yf(function(){return arguments}())?yf:function(s){return Ht(s)&&wt.call(s,"callee")&&!uf.call(s,"callee")},nt=ie.isArray,kb=B_?Nn(B_):WE;function In(s){return s!=null&&Wa(s.length)&&!Fr(s)}function jt(s){return Ht(s)&&In(s)}function Tb(s){return s===!0||s===!1||Ht(s)&&gn(s)==Dn}var so=V1||hu,Mb=Y_?Nn(Y_):HE;function Ub(s){return Ht(s)&&s.nodeType===1&&!_s(s)}function $b(s){if(s==null)return!0;if(In(s)&&(nt(s)||typeof s=="string"||typeof s.splice=="function"||so(s)||li(s)||So(s)))return!s.length;var l=dn(s);if(l==Oe||l==Cn)return!s.size;if(us(s))return!kc(s).length;for(var p in s)if(wt.call(s,p))return!1;return!0}function Fb(s,l){return as(s,l)}function Gb(s,l,p){p=typeof p=="function"?p:n;var C=p?p(s,l):n;return C===n?as(s,l,n,p):!!C}function iu(s){if(!Ht(s))return!1;var l=gn(s);return l==Rr||l==Eo||typeof s.message=="string"&&typeof s.name=="string"&&!_s(s)}function Pb(s){return typeof s=="number"&&_f(s)}function Fr(s){if(!Gt(s))return!1;var l=gn(s);return l==Nr||l==Ge||l==Yt||l==ta}function Sg(s){return typeof s=="number"&&s==ot(s)}function Wa(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Me}function Gt(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Ht(s){return s!=null&&typeof s=="object"}var kg=j_?Nn(j_):BE;function Wb(s,l){return s===l||Sc(s,l,Xc(l))}function Hb(s,l,p){return p=typeof p=="function"?p:n,Sc(s,l,Xc(l),p)}function zb(s){return Tg(s)&&s!=+s}function Bb(s){if(A0(s))throw new tt(i);return Of(s)}function Yb(s){return s===null}function jb(s){return s==null}function Tg(s){return typeof s=="number"||Ht(s)&&gn(s)==Ue}function _s(s){if(!Ht(s)||gn(s)!=St)return!1;var l=ga(s);if(l===null)return!0;var p=wt.call(l,"constructor")&&l.constructor;return typeof p=="function"&&p instanceof p&&ua.call(p)==H1}var su=K_?Nn(K_):YE;function Kb(s){return Sg(s)&&s>=-9007199254740991&&s<=Me}var Mg=V_?Nn(V_):jE;function Ha(s){return typeof s=="string"||!nt(s)&&Ht(s)&&gn(s)==bo}function kn(s){return typeof s=="symbol"||Ht(s)&&gn(s)==wo}var li=X_?Nn(X_):KE;function Vb(s){return s===n}function Xb(s){return Ht(s)&&dn(s)==Io}function qb(s){return Ht(s)&&gn(s)==tc}var Zb=Sa(Tc),Qb=Sa(function(s,l){return s<=l});function Ug(s){if(!s)return[];if(In(s))return Ha(s)?cr(s):wn(s);if(Ji&&s[Ji])return R1(s[Ji]());var l=dn(s),p=l==Oe?bc:l==Cn?aa:ci;return p(s)}function Gr(s){if(!s)return s===0?s:0;if(s=Xn(s),s===ye||s===-1/0){var l=s<0?-1:1;return l*Se}return s===s?s:0}function ot(s){var l=Gr(s),p=l%1;return l===l?p?l-p:l:0}function $g(s){return s?Lo(ot(s),0,qe):0}function Xn(s){if(typeof s=="number")return s;if(kn(s))return Xe;if(Gt(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Gt(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=tf(s);var p=km.test(s);return p||Mm.test(s)?f1(s.slice(2),p?2:8):Sm.test(s)?Xe:+s}function Fg(s){return wr(s,yn(s))}function Jb(s){return s?Lo(ot(s),-9007199254740991,Me):s===0?s:0}function bt(s){return s==null?"":Sn(s)}var ew=ii(function(s,l){if(us(l)||In(l)){wr(l,en(l),s);return}for(var p in l)wt.call(l,p)&&os(s,p,l[p])}),Gg=ii(function(s,l){wr(l,yn(l),s)}),za=ii(function(s,l,p,C){wr(l,yn(l),s,C)}),tw=ii(function(s,l,p,C){wr(l,en(l),s,C)}),nw=Ur(Ac);function rw(s,l){var p=oi(s);return l==null?p:pf(p,l)}var ow=lt(function(s,l){s=Dt(s);var p=-1,C=l.length,y=C>2?l[2]:n;for(y&&hn(l[0],l[1],y)&&(C=1);++p<C;)for(var S=l[p],F=yn(S),B=-1,q=F.length;++B<q;){var de=F[B],_e=s[de];(_e===n||dr(_e,ti[de])&&!wt.call(s,de))&&(s[de]=S[de])}return s}),iw=lt(function(s){return s.push(n,ng),Rn(Pg,n,s)});function sw(s,l){return Z_(s,ze(l,3),br)}function aw(s,l){return Z_(s,ze(l,3),Dc)}function lw(s,l){return s==null?s:Lc(s,ze(l,3),yn)}function cw(s,l){return s==null?s:wf(s,ze(l,3),yn)}function uw(s,l){return s&&br(s,ze(l,3))}function dw(s,l){return s&&Dc(s,ze(l,3))}function _w(s){return s==null?[]:ya(s,en(s))}function fw(s){return s==null?[]:ya(s,yn(s))}function au(s,l,p){var C=s==null?n:Do(s,l);return C===n?p:C}function gw(s,l){return s!=null&&ig(s,l,$E)}function lu(s,l){return s!=null&&ig(s,l,FE)}var hw=Zf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=da.call(l)),s[l]=p},uu(On)),vw=Zf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=da.call(l)),wt.call(s,l)?s[l].push(p):s[l]=[p]},ze),pw=lt(ss);function en(s){return In(s)?hf(s):kc(s)}function yn(s){return In(s)?hf(s,!0):VE(s)}function mw(s,l){var p={};return l=ze(l,3),br(s,function(C,y,S){Tr(p,l(C,y,S),C)}),p}function Ew(s,l){var p={};return l=ze(l,3),br(s,function(C,y,S){Tr(p,y,l(C,y,S))}),p}var Cw=ii(function(s,l,p){Oa(s,l,p)}),Pg=ii(function(s,l,p,C){Oa(s,l,p,C)}),bw=Ur(function(s,l){var p={};if(s==null)return p;var C=!1;l=Ft(l,function(S){return S=oo(S,s),C||(C=S.length>1),S}),wr(s,Kc(s),p),C&&(p=jn(p,v|h|m,h0));for(var y=l.length;y--;)Gc(p,l[y]);return p});function ww(s,l){return Wg(s,Pa(ze(l)))}var Iw=Ur(function(s,l){return s==null?{}:qE(s,l)});function Wg(s,l){if(s==null)return{};var p=Ft(Kc(s),function(C){return[C]});return l=ze(l),Sf(s,p,function(C,y){return l(C,y[0])})}function yw(s,l,p){l=oo(l,s);var C=-1,y=l.length;for(y||(y=1,s=n);++C<y;){var S=s==null?n:s[Ir(l[C])];S===n&&(C=y,S=p),s=Fr(S)?S.call(s):S}return s}function Ow(s,l,p){return s==null?s:ls(s,l,p)}function xw(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:ls(s,l,p,C)}var Hg=eg(en),zg=eg(yn);function Aw(s,l,p){var C=nt(s),y=C||so(s)||li(s);if(l=ze(l,4),p==null){var S=s&&s.constructor;y?p=C?new S:[]:Gt(s)?p=Fr(S)?oi(ga(s)):{}:p={}}return(y?zn:br)(s,function(F,B,q){return l(p,F,B,q)}),p}function Lw(s,l){return s==null?!0:Gc(s,l)}function Dw(s,l,p){return s==null?s:$f(s,l,Hc(p))}function Rw(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:$f(s,l,Hc(p),C)}function ci(s){return s==null?[]:Cc(s,en(s))}function Nw(s){return s==null?[]:Cc(s,yn(s))}function Sw(s,l,p){return p===n&&(p=l,l=n),p!==n&&(p=Xn(p),p=p===p?p:0),l!==n&&(l=Xn(l),l=l===l?l:0),Lo(Xn(s),l,p)}function kw(s,l,p){return l=Gr(l),p===n?(p=l,l=0):p=Gr(p),s=Xn(s),GE(s,l,p)}function Tw(s,l,p){if(p&&typeof p!="boolean"&&hn(s,l,p)&&(l=p=n),p===n&&(typeof l=="boolean"?(p=l,l=n):typeof s=="boolean"&&(p=s,s=n)),s===n&&l===n?(s=0,l=1):(s=Gr(s),l===n?(l=s,s=0):l=Gr(l)),s>l){var C=s;s=l,l=C}if(p||s%1||l%1){var y=ff();return un(s+y*(l-s+_1("1e-"+((y+"").length-1))),l)}return Uc(s,l)}var Mw=si(function(s,l,p){return l=l.toLowerCase(),s+(p?Bg(l):l)});function Bg(s){return cu(bt(s).toLowerCase())}function Yg(s){return s=bt(s),s&&s.replace($m,O1).replace(n1,"")}function Uw(s,l,p){s=bt(s),l=Sn(l);var C=s.length;p=p===n?C:Lo(ot(p),0,C);var y=p;return p-=l.length,p>=0&&s.slice(p,y)==l}function $w(s){return s=bt(s),s&&pm.test(s)?s.replace(b_,x1):s}function Fw(s){return s=bt(s),s&&Im.test(s)?s.replace(oc,"\\$&"):s}var Gw=si(function(s,l,p){return s+(p?"-":"")+l.toLowerCase()}),Pw=si(function(s,l,p){return s+(p?" ":"")+l.toLowerCase()}),Ww=Vf("toLowerCase");function Hw(s,l,p){s=bt(s),l=ot(l);var C=l?Jo(s):0;if(!l||C>=l)return s;var y=(l-C)/2;return Na(ma(y),p)+s+Na(pa(y),p)}function zw(s,l,p){s=bt(s),l=ot(l);var C=l?Jo(s):0;return l&&C<l?s+Na(l-C,p):s}function Bw(s,l,p){s=bt(s),l=ot(l);var C=l?Jo(s):0;return l&&C<l?Na(l-C,p)+s:s}function Yw(s,l,p){return p||l==null?l=0:l&&(l=+l),Q1(bt(s).replace(ic,""),l||0)}function jw(s,l,p){return(p?hn(s,l,p):l===n)?l=1:l=ot(l),$c(bt(s),l)}function Kw(){var s=arguments,l=bt(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var Vw=si(function(s,l,p){return s+(p?"_":"")+l.toLowerCase()});function Xw(s,l,p){return p&&typeof p!="number"&&hn(s,l,p)&&(l=p=n),p=p===n?qe:p>>>0,p?(s=bt(s),s&&(typeof l=="string"||l!=null&&!su(l))&&(l=Sn(l),!l&&Qo(s))?io(cr(s),0,p):s.split(l,p)):[]}var qw=si(function(s,l,p){return s+(p?" ":"")+cu(l)});function Zw(s,l,p){return s=bt(s),p=p==null?0:Lo(ot(p),0,s.length),l=Sn(l),s.slice(p,p+l.length)==l}function Qw(s,l,p){var C=R.templateSettings;p&&hn(s,l,p)&&(l=n),s=bt(s),l=za({},l,C,tg);var y=za({},l.imports,C.imports,tg),S=en(y),F=Cc(y,S),B,q,de=0,_e=l.interpolate||na,ve="__p += '",xe=wc((l.escape||na).source+"|"+_e.source+"|"+(_e===w_?Nm:na).source+"|"+(l.evaluate||na).source+"|$","g"),$e="//# sourceURL="+(wt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++a1+"]")+`
`;s.replace(xe,function(Ye,dt,ft,Tn,vn,Mn){return ft||(ft=Tn),ve+=s.slice(de,Mn).replace(Fm,A1),dt&&(B=!0,ve+=`' +
__e(`+dt+`) +
'`),vn&&(q=!0,ve+=`';
`+vn+`;
__p += '`),ft&&(ve+=`' +
((__t = (`+ft+`)) == null ? '' : __t) +
'`),de=Mn+Ye.length,Ye}),ve+=`';
`;var Be=wt.call(l,"variable")&&l.variable;if(!Be)ve=`with (obj) {
`+ve+`
}
`;else if(Dm.test(Be))throw new tt(c);ve=(q?ve.replace(fm,""):ve).replace(gm,"$1").replace(hm,"$1;"),ve="function("+(Be||"obj")+`) {
`+(Be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ve+`return __p
}`;var st=Kg(function(){return Et(S,$e+"return "+ve).apply(n,F)});if(st.source=ve,iu(st))throw st;return st}function Jw(s){return bt(s).toLowerCase()}function eI(s){return bt(s).toUpperCase()}function tI(s,l,p){if(s=bt(s),s&&(p||l===n))return tf(s);if(!s||!(l=Sn(l)))return s;var C=cr(s),y=cr(l),S=nf(C,y),F=rf(C,y)+1;return io(C,S,F).join("")}function nI(s,l,p){if(s=bt(s),s&&(p||l===n))return s.slice(0,sf(s)+1);if(!s||!(l=Sn(l)))return s;var C=cr(s),y=rf(C,cr(l))+1;return io(C,0,y).join("")}function rI(s,l,p){if(s=bt(s),s&&(p||l===n))return s.replace(ic,"");if(!s||!(l=Sn(l)))return s;var C=cr(s),y=nf(C,cr(l));return io(C,y).join("")}function oI(s,l){var p=ce,C=Z;if(Gt(l)){var y="separator"in l?l.separator:y;p="length"in l?ot(l.length):p,C="omission"in l?Sn(l.omission):C}s=bt(s);var S=s.length;if(Qo(s)){var F=cr(s);S=F.length}if(p>=S)return s;var B=p-Jo(C);if(B<1)return C;var q=F?io(F,0,B).join(""):s.slice(0,B);if(y===n)return q+C;if(F&&(B+=q.length-B),su(y)){if(s.slice(B).search(y)){var de,_e=q;for(y.global||(y=wc(y.source,bt(I_.exec(y))+"g")),y.lastIndex=0;de=y.exec(_e);)var ve=de.index;q=q.slice(0,ve===n?B:ve)}}else if(s.indexOf(Sn(y),B)!=B){var xe=q.lastIndexOf(y);xe>-1&&(q=q.slice(0,xe))}return q+C}function iI(s){return s=bt(s),s&&vm.test(s)?s.replace(C_,T1):s}var sI=si(function(s,l,p){return s+(p?" ":"")+l.toUpperCase()}),cu=Vf("toUpperCase");function jg(s,l,p){return s=bt(s),l=p?n:l,l===n?D1(s)?$1(s):C1(s):s.match(l)||[]}var Kg=lt(function(s,l){try{return Rn(s,n,l)}catch(p){return iu(p)?p:new tt(p)}}),aI=Ur(function(s,l){return zn(l,function(p){p=Ir(p),Tr(s,p,ru(s[p],s))}),s});function lI(s){var l=s==null?0:s.length,p=ze();return s=l?Ft(s,function(C){if(typeof C[1]!="function")throw new Bn(a);return[p(C[0]),C[1]]}):[],lt(function(C){for(var y=-1;++y<l;){var S=s[y];if(Rn(S[0],this,C))return Rn(S[1],this,C)}})}function cI(s){return TE(jn(s,v))}function uu(s){return function(){return s}}function uI(s,l){return s==null||s!==s?l:s}var dI=qf(),_I=qf(!0);function On(s){return s}function du(s){return xf(typeof s=="function"?s:jn(s,v))}function fI(s){return Lf(jn(s,v))}function gI(s,l){return Df(s,jn(l,v))}var hI=lt(function(s,l){return function(p){return ss(p,s,l)}}),vI=lt(function(s,l){return function(p){return ss(s,p,l)}});function _u(s,l,p){var C=en(l),y=ya(l,C);p==null&&!(Gt(l)&&(y.length||!C.length))&&(p=l,l=s,s=this,y=ya(l,en(l)));var S=!(Gt(p)&&"chain"in p)||!!p.chain,F=Fr(s);return zn(y,function(B){var q=l[B];s[B]=q,F&&(s.prototype[B]=function(){var de=this.__chain__;if(S||de){var _e=s(this.__wrapped__),ve=_e.__actions__=wn(this.__actions__);return ve.push({func:q,args:arguments,thisArg:s}),_e.__chain__=de,_e}return q.apply(s,Jr([this.value()],arguments))})}),s}function pI(){return nn._===this&&(nn._=z1),this}function fu(){}function mI(s){return s=ot(s),lt(function(l){return Rf(l,s)})}var EI=Bc(Ft),CI=Bc(q_),bI=Bc(hc);function Vg(s){return Zc(s)?vc(Ir(s)):ZE(s)}function wI(s){return function(l){return s==null?n:Do(s,l)}}var II=Qf(),yI=Qf(!0);function gu(){return[]}function hu(){return!1}function OI(){return{}}function xI(){return""}function AI(){return!0}function LI(s,l){if(s=ot(s),s<1||s>Me)return[];var p=qe,C=un(s,qe);l=ze(l),s-=qe;for(var y=Ec(C,l);++p<s;)l(p);return y}function DI(s){return nt(s)?Ft(s,Ir):kn(s)?[s]:wn(gg(bt(s)))}function RI(s){var l=++W1;return bt(s)+l}var NI=Ra(function(s,l){return s+l},0),SI=Yc("ceil"),kI=Ra(function(s,l){return s/l},1),TI=Yc("floor");function MI(s){return s&&s.length?Ia(s,On,Rc):n}function UI(s,l){return s&&s.length?Ia(s,ze(l,2),Rc):n}function $I(s){return J_(s,On)}function FI(s,l){return J_(s,ze(l,2))}function GI(s){return s&&s.length?Ia(s,On,Tc):n}function PI(s,l){return s&&s.length?Ia(s,ze(l,2),Tc):n}var WI=Ra(function(s,l){return s*l},1),HI=Yc("round"),zI=Ra(function(s,l){return s-l},0);function BI(s){return s&&s.length?mc(s,On):0}function YI(s,l){return s&&s.length?mc(s,ze(l,2)):0}return R.after=fb,R.ary=Og,R.assign=ew,R.assignIn=Gg,R.assignInWith=za,R.assignWith=tw,R.at=nw,R.before=xg,R.bind=ru,R.bindAll=aI,R.bindKey=Ag,R.castArray=Ob,R.chain=wg,R.chunk=T0,R.compact=M0,R.concat=U0,R.cond=lI,R.conforms=cI,R.constant=uu,R.countBy=BC,R.create=rw,R.curry=Lg,R.curryRight=Dg,R.debounce=Rg,R.defaults=ow,R.defaultsDeep=iw,R.defer=gb,R.delay=hb,R.difference=$0,R.differenceBy=F0,R.differenceWith=G0,R.drop=P0,R.dropRight=W0,R.dropRightWhile=H0,R.dropWhile=z0,R.fill=B0,R.filter=jC,R.flatMap=XC,R.flatMapDeep=qC,R.flatMapDepth=ZC,R.flatten=mg,R.flattenDeep=Y0,R.flattenDepth=j0,R.flip=vb,R.flow=dI,R.flowRight=_I,R.fromPairs=K0,R.functions=_w,R.functionsIn=fw,R.groupBy=QC,R.initial=X0,R.intersection=q0,R.intersectionBy=Z0,R.intersectionWith=Q0,R.invert=hw,R.invertBy=vw,R.invokeMap=eb,R.iteratee=du,R.keyBy=tb,R.keys=en,R.keysIn=yn,R.map=$a,R.mapKeys=mw,R.mapValues=Ew,R.matches=fI,R.matchesProperty=gI,R.memoize=Ga,R.merge=Cw,R.mergeWith=Pg,R.method=hI,R.methodOf=vI,R.mixin=_u,R.negate=Pa,R.nthArg=mI,R.omit=bw,R.omitBy=ww,R.once=pb,R.orderBy=nb,R.over=EI,R.overArgs=mb,R.overEvery=CI,R.overSome=bI,R.partial=ou,R.partialRight=Ng,R.partition=rb,R.pick=Iw,R.pickBy=Wg,R.property=Vg,R.propertyOf=wI,R.pull=nC,R.pullAll=Cg,R.pullAllBy=rC,R.pullAllWith=oC,R.pullAt=iC,R.range=II,R.rangeRight=yI,R.rearg=Eb,R.reject=sb,R.remove=sC,R.rest=Cb,R.reverse=tu,R.sampleSize=lb,R.set=Ow,R.setWith=xw,R.shuffle=cb,R.slice=aC,R.sortBy=_b,R.sortedUniq=gC,R.sortedUniqBy=hC,R.split=Xw,R.spread=bb,R.tail=vC,R.take=pC,R.takeRight=mC,R.takeRightWhile=EC,R.takeWhile=CC,R.tap=MC,R.throttle=wb,R.thru=Ua,R.toArray=Ug,R.toPairs=Hg,R.toPairsIn=zg,R.toPath=DI,R.toPlainObject=Fg,R.transform=Aw,R.unary=Ib,R.union=bC,R.unionBy=wC,R.unionWith=IC,R.uniq=yC,R.uniqBy=OC,R.uniqWith=xC,R.unset=Lw,R.unzip=nu,R.unzipWith=bg,R.update=Dw,R.updateWith=Rw,R.values=ci,R.valuesIn=Nw,R.without=AC,R.words=jg,R.wrap=yb,R.xor=LC,R.xorBy=DC,R.xorWith=RC,R.zip=NC,R.zipObject=SC,R.zipObjectDeep=kC,R.zipWith=TC,R.entries=Hg,R.entriesIn=zg,R.extend=Gg,R.extendWith=za,_u(R,R),R.add=NI,R.attempt=Kg,R.camelCase=Mw,R.capitalize=Bg,R.ceil=SI,R.clamp=Sw,R.clone=xb,R.cloneDeep=Lb,R.cloneDeepWith=Db,R.cloneWith=Ab,R.conformsTo=Rb,R.deburr=Yg,R.defaultTo=uI,R.divide=kI,R.endsWith=Uw,R.eq=dr,R.escape=$w,R.escapeRegExp=Fw,R.every=YC,R.find=KC,R.findIndex=vg,R.findKey=sw,R.findLast=VC,R.findLastIndex=pg,R.findLastKey=aw,R.floor=TI,R.forEach=Ig,R.forEachRight=yg,R.forIn=lw,R.forInRight=cw,R.forOwn=uw,R.forOwnRight=dw,R.get=au,R.gt=Nb,R.gte=Sb,R.has=gw,R.hasIn=lu,R.head=Eg,R.identity=On,R.includes=JC,R.indexOf=V0,R.inRange=kw,R.invoke=pw,R.isArguments=So,R.isArray=nt,R.isArrayBuffer=kb,R.isArrayLike=In,R.isArrayLikeObject=jt,R.isBoolean=Tb,R.isBuffer=so,R.isDate=Mb,R.isElement=Ub,R.isEmpty=$b,R.isEqual=Fb,R.isEqualWith=Gb,R.isError=iu,R.isFinite=Pb,R.isFunction=Fr,R.isInteger=Sg,R.isLength=Wa,R.isMap=kg,R.isMatch=Wb,R.isMatchWith=Hb,R.isNaN=zb,R.isNative=Bb,R.isNil=jb,R.isNull=Yb,R.isNumber=Tg,R.isObject=Gt,R.isObjectLike=Ht,R.isPlainObject=_s,R.isRegExp=su,R.isSafeInteger=Kb,R.isSet=Mg,R.isString=Ha,R.isSymbol=kn,R.isTypedArray=li,R.isUndefined=Vb,R.isWeakMap=Xb,R.isWeakSet=qb,R.join=J0,R.kebabCase=Gw,R.last=Vn,R.lastIndexOf=eC,R.lowerCase=Pw,R.lowerFirst=Ww,R.lt=Zb,R.lte=Qb,R.max=MI,R.maxBy=UI,R.mean=$I,R.meanBy=FI,R.min=GI,R.minBy=PI,R.stubArray=gu,R.stubFalse=hu,R.stubObject=OI,R.stubString=xI,R.stubTrue=AI,R.multiply=WI,R.nth=tC,R.noConflict=pI,R.noop=fu,R.now=Fa,R.pad=Hw,R.padEnd=zw,R.padStart=Bw,R.parseInt=Yw,R.random=Tw,R.reduce=ob,R.reduceRight=ib,R.repeat=jw,R.replace=Kw,R.result=yw,R.round=HI,R.runInContext=V,R.sample=ab,R.size=ub,R.snakeCase=Vw,R.some=db,R.sortedIndex=lC,R.sortedIndexBy=cC,R.sortedIndexOf=uC,R.sortedLastIndex=dC,R.sortedLastIndexBy=_C,R.sortedLastIndexOf=fC,R.startCase=qw,R.startsWith=Zw,R.subtract=zI,R.sum=BI,R.sumBy=YI,R.template=Qw,R.times=LI,R.toFinite=Gr,R.toInteger=ot,R.toLength=$g,R.toLower=Jw,R.toNumber=Xn,R.toSafeInteger=Jb,R.toString=bt,R.toUpper=eI,R.trim=tI,R.trimEnd=nI,R.trimStart=rI,R.truncate=oI,R.unescape=iI,R.uniqueId=RI,R.upperCase=sI,R.upperFirst=cu,R.each=Ig,R.eachRight=yg,R.first=Eg,_u(R,function(){var s={};return br(R,function(l,p){wt.call(R.prototype,p)||(s[p]=l)}),s}(),{chain:!1}),R.VERSION=r,zn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){R[s].placeholder=R}),zn(["drop","take"],function(s,l){_t.prototype[s]=function(p){p=p===n?1:qt(ot(p),0);var C=this.__filtered__&&!l?new _t(this):this.clone();return C.__filtered__?C.__takeCount__=un(p,C.__takeCount__):C.__views__.push({size:un(p,qe),type:s+(C.__dir__<0?"Right":"")}),C},_t.prototype[s+"Right"]=function(p){return this.reverse()[s](p).reverse()}}),zn(["filter","map","takeWhile"],function(s,l){var p=l+1,C=p==re||p==Ie;_t.prototype[s]=function(y){var S=this.clone();return S.__iteratees__.push({iteratee:ze(y,3),type:p}),S.__filtered__=S.__filtered__||C,S}}),zn(["head","last"],function(s,l){var p="take"+(l?"Right":"");_t.prototype[s]=function(){return this[p](1).value()[0]}}),zn(["initial","tail"],function(s,l){var p="drop"+(l?"":"Right");_t.prototype[s]=function(){return this.__filtered__?new _t(this):this[p](1)}}),_t.prototype.compact=function(){return this.filter(On)},_t.prototype.find=function(s){return this.filter(s).head()},_t.prototype.findLast=function(s){return this.reverse().find(s)},_t.prototype.invokeMap=lt(function(s,l){return typeof s=="function"?new _t(this):this.map(function(p){return ss(p,s,l)})}),_t.prototype.reject=function(s){return this.filter(Pa(ze(s)))},_t.prototype.slice=function(s,l){s=ot(s);var p=this;return p.__filtered__&&(s>0||l<0)?new _t(p):(s<0?p=p.takeRight(-s):s&&(p=p.drop(s)),l!==n&&(l=ot(l),p=l<0?p.dropRight(-l):p.take(l-s)),p)},_t.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},_t.prototype.toArray=function(){return this.take(qe)},br(_t.prototype,function(s,l){var p=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),y=R[C?"take"+(l=="last"?"Right":""):l],S=C||/^find/.test(l);y&&(R.prototype[l]=function(){var F=this.__wrapped__,B=C?[1]:arguments,q=F instanceof _t,de=B[0],_e=q||nt(F),ve=function(dt){var ft=y.apply(R,Jr([dt],B));return C&&xe?ft[0]:ft};_e&&p&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var xe=this.__chain__,$e=!!this.__actions__.length,Be=S&&!xe,st=q&&!$e;if(!S&&_e){F=st?F:new _t(this);var Ye=s.apply(F,B);return Ye.__actions__.push({func:Ua,args:[ve],thisArg:n}),new Yn(Ye,xe)}return Be&&st?s.apply(this,B):(Ye=this.thru(ve),Be?C?Ye.value()[0]:Ye.value():Ye)})}),zn(["pop","push","shift","sort","splice","unshift"],function(s){var l=la[s],p=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);R.prototype[s]=function(){var y=arguments;if(C&&!this.__chain__){var S=this.value();return l.apply(nt(S)?S:[],y)}return this[p](function(F){return l.apply(nt(F)?F:[],y)})}}),br(_t.prototype,function(s,l){var p=R[l];if(p){var C=p.name+"";wt.call(ri,C)||(ri[C]=[]),ri[C].push({name:l,func:p})}}),ri[Da(n,I).name]=[{name:"wrapper",func:n}],_t.prototype.clone=iE,_t.prototype.reverse=sE,_t.prototype.value=aE,R.prototype.at=UC,R.prototype.chain=$C,R.prototype.commit=FC,R.prototype.next=GC,R.prototype.plant=WC,R.prototype.reverse=HC,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=zC,R.prototype.first=R.prototype.head,Ji&&(R.prototype[Ji]=PC),R},ei=F1();yo?((yo.exports=ei)._=ei,dc._=ei):nn._=ei}).call(TR)}(ms,ms.exports)),ms.exports}var Nt=MR();function zr(t){return Array.isArray?Array.isArray(t):Hv(t)==="[object Array]"}function UR(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function $R(t){return t==null?"":UR(t)}function xr(t){return typeof t=="string"}function Pv(t){return typeof t=="number"}function FR(t){return t===!0||t===!1||GR(t)&&Hv(t)=="[object Boolean]"}function Wv(t){return typeof t=="object"}function GR(t){return Wv(t)&&t!==null}function $n(t){return t!=null}function bu(t){return!t.trim().length}function Hv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const PR="Incorrect 'index' type",WR=t=>`Invalid value for key ${t}`,HR=t=>`Pattern length exceeds max of ${t}.`,zR=t=>`Missing ${t} property in key`,BR=t=>`Property 'weight' in key '${t}' must be a positive integer`,lh=Object.prototype.hasOwnProperty;class YR{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=zv(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function zv(t){let e=null,n=null,r=null,o=1,i=null;if(xr(t)||zr(t))r=t,e=ch(t),n=Hu(t);else{if(!lh.call(t,"name"))throw new Error(zR("name"));const a=t.name;if(r=a,lh.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(BR(a));e=ch(a),n=Hu(a),i=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:i}}function ch(t){return zr(t)?t:t.split(".")}function Hu(t){return zr(t)?t.join("."):t}function jR(t,e){let n=[],r=!1;const o=(i,a,c)=>{if($n(i))if(!a[c])n.push(i);else{let u=a[c];const _=i[u];if(!$n(_))return;if(c===a.length-1&&(xr(_)||Pv(_)||FR(_)))n.push($R(_));else if(zr(_)){r=!0;for(let g=0,v=_.length;g<v;g+=1)o(_[g],a,c+1)}else a.length&&o(_,a,c+1)}};return o(t,xr(e)?e.split("."):e,0),r?n:n[0]}const KR={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},VR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},XR={location:0,threshold:.6,distance:100},qR={useExtendedSearch:!1,getFn:jR,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Qe={...VR,...KR,...XR,...qR};const ZR=/[^ ]+/g;function QR(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const i=o.match(ZR).length;if(n.has(i))return n.get(i);const a=1/Math.pow(i,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(i,c),c},clear(){n.clear()}}}class Pd{constructor({getFn:e=Qe.getFn,fieldNormWeight:n=Qe.fieldNormWeight}={}){this.norm=QR(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,xr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();xr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!$n(e)||bu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,i)=>{let a=o.getFn?o.getFn(e):this.getFn(e,o.path);if($n(a)){if(zr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:g}=u.pop();if($n(g))if(xr(g)&&!bu(g)){let v={v:g,i:_,n:this.norm.get(g)};c.push(v)}else zr(g)&&g.forEach((v,h)=>{u.push({nestedArrIndex:h,value:v})})}r.$[i]=c}else if(xr(a)&&!bu(a)){let c={v:a,n:this.norm.get(a)};r.$[i]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Bv(t,e,{getFn:n=Qe.getFn,fieldNormWeight:r=Qe.fieldNormWeight}={}){const o=new Pd({getFn:n,fieldNormWeight:r});return o.setKeys(t.map(zv)),o.setSources(e),o.create(),o}function JR(t,{getFn:e=Qe.getFn,fieldNormWeight:n=Qe.fieldNormWeight}={}){const{keys:r,records:o}=t,i=new Pd({getFn:e,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(o),i}function ja(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Qe.distance,ignoreLocation:i=Qe.ignoreLocation}={}){const a=e/t.length;if(i)return a;const c=Math.abs(r-n);return o?a+c/o:c?1:a}function eN(t=[],e=Qe.minMatchCharLength){let n=[],r=-1,o=-1,i=0;for(let a=t.length;i<a;i+=1){let c=t[i];c&&r===-1?r=i:!c&&r!==-1&&(o=i-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[i-1]&&i-r>=e&&n.push([r,i-1]),n}const To=32;function tN(t,e,n,{location:r=Qe.location,distance:o=Qe.distance,threshold:i=Qe.threshold,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:c=Qe.minMatchCharLength,includeMatches:u=Qe.includeMatches,ignoreLocation:_=Qe.ignoreLocation}={}){if(e.length>To)throw new Error(HR(To));const g=e.length,v=t.length,h=Math.max(0,Math.min(r,v));let m=i,E=h;const w=c>1||u,b=w?Array(v):[];let I;for(;(I=t.indexOf(e,E))>-1;){let T=ja(e,{currentLocation:I,expectedLocation:h,distance:o,ignoreLocation:_});if(m=Math.min(T,m),E=I+g,w){let j=0;for(;j<g;)b[I+j]=1,j+=1}}E=-1;let A=[],k=1,M=g+v;const G=1<<g-1;for(let T=0;T<g;T+=1){let j=0,ee=M;for(;j<ee;)ja(e,{errors:T,currentLocation:h+ee,expectedLocation:h,distance:o,ignoreLocation:_})<=m?j=ee:M=ee,ee=Math.floor((M-j)/2+j);M=ee;let ce=Math.max(1,h-ee+1),Z=a?v:Math.min(h+ee,v)+g,ne=Array(Z+2);ne[Z+1]=(1<<T)-1;for(let re=Z;re>=ce;re-=1){let ge=re-1,Ie=n[t.charAt(ge)];if(w&&(b[ge]=+!!Ie),ne[re]=(ne[re+1]<<1|1)&Ie,T&&(ne[re]|=(A[re+1]|A[re])<<1|1|A[re+1]),ne[re]&G&&(k=ja(e,{errors:T,currentLocation:ge,expectedLocation:h,distance:o,ignoreLocation:_}),k<=m)){if(m=k,E=ge,E<=h)break;ce=Math.max(1,2*h-E)}}if(ja(e,{errors:T+1,currentLocation:h,expectedLocation:h,distance:o,ignoreLocation:_})>m)break;A=ne}const z={isMatch:E>=0,score:Math.max(.001,k)};if(w){const T=eN(b,c);T.length?u&&(z.indices=T):z.isMatch=!1}return z}function nN(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class Yv{constructor(e,{location:n=Qe.location,threshold:r=Qe.threshold,distance:o=Qe.distance,includeMatches:i=Qe.includeMatches,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:c=Qe.minMatchCharLength,isCaseSensitive:u=Qe.isCaseSensitive,ignoreLocation:_=Qe.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(h,m)=>{this.chunks.push({pattern:h,alphabet:nN(h),startIndex:m})},v=this.pattern.length;if(v>To){let h=0;const m=v%To,E=v-m;for(;h<E;)g(this.pattern.substr(h,To),h),h+=To;if(m){const w=v-To;g(this.pattern.substr(w),w)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:o,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let g=[],v=0,h=!1;this.chunks.forEach(({pattern:E,alphabet:w,startIndex:b})=>{const{isMatch:I,score:A,indices:k}=tN(e,E,w,{location:o+b,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});I&&(h=!0),v+=A,I&&k&&(g=[...g,...k])});let m={isMatch:h,score:h?v/this.chunks.length:1};return h&&r&&(m.indices=g),m}}class po{constructor(e){this.pattern=e}static isMultiMatch(e){return uh(e,this.multiRegex)}static isSingleMatch(e){return uh(e,this.singleRegex)}search(){}}function uh(t,e){const n=t.match(e);return n?n[1]:null}class rN extends po{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class oN extends po{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class iN extends po{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class sN extends po{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class aN extends po{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class lN extends po{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class jv extends po{constructor(e,{location:n=Qe.location,threshold:r=Qe.threshold,distance:o=Qe.distance,includeMatches:i=Qe.includeMatches,findAllMatches:a=Qe.findAllMatches,minMatchCharLength:c=Qe.minMatchCharLength,isCaseSensitive:u=Qe.isCaseSensitive,ignoreLocation:_=Qe.ignoreLocation}={}){super(e),this._bitapSearch=new Yv(e,{location:n,threshold:r,distance:o,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Kv extends po{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+i,o.push([r,n-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const zu=[rN,Kv,iN,sN,lN,aN,oN,jv],dh=zu.length,cN=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,uN="|";function dN(t,e={}){return t.split(uN).map(n=>{let r=n.trim().split(cN).filter(i=>i&&!!i.trim()),o=[];for(let i=0,a=r.length;i<a;i+=1){const c=r[i];let u=!1,_=-1;for(;!u&&++_<dh;){const g=zu[_];let v=g.isMultiMatch(c);v&&(o.push(new g(v,e)),u=!0)}if(!u)for(_=-1;++_<dh;){const g=zu[_];let v=g.isSingleMatch(c);if(v){o.push(new g(v,e));break}}}return o})}const _N=new Set([jv.type,Kv.type]);class fN{constructor(e,{isCaseSensitive:n=Qe.isCaseSensitive,includeMatches:r=Qe.includeMatches,minMatchCharLength:o=Qe.minMatchCharLength,ignoreLocation:i=Qe.ignoreLocation,findAllMatches:a=Qe.findAllMatches,location:c=Qe.location,threshold:u=Qe.threshold,distance:_=Qe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:a,ignoreLocation:i,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=dN(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const g=n[u];a.length=0,i=0;for(let v=0,h=g.length;v<h;v+=1){const m=g[v],{isMatch:E,indices:w,score:b}=m.search(e);if(E){if(i+=1,c+=b,r){const I=m.constructor.type;_N.has(I)?a=[...a,...w]:a.push(w)}}else{c=0,i=0,a.length=0;break}}if(i){let v={isMatch:!0,score:c/i};return r&&(v.indices=a),v}}return{isMatch:!1,score:1}}}const Bu=[];function gN(...t){Bu.push(...t)}function Yu(t,e){for(let n=0,r=Bu.length;n<r;n+=1){let o=Bu[n];if(o.condition(t,e))return new o(t,e)}return new Yv(t,e)}const ul={AND:"$and",OR:"$or"},ju={PATH:"$path",PATTERN:"$val"},Ku=t=>!!(t[ul.AND]||t[ul.OR]),hN=t=>!!t[ju.PATH],vN=t=>!zr(t)&&Wv(t)&&!Ku(t),_h=t=>({[ul.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Vv(t,e,{auto:n=!0}={}){const r=o=>{let i=Object.keys(o);const a=hN(o);if(!a&&i.length>1&&!Ku(o))return r(_h(o));if(vN(o)){const u=a?o[ju.PATH]:i[0],_=a?o[ju.PATTERN]:o[u];if(!xr(_))throw new Error(WR(u));const g={keyId:Hu(u),pattern:_};return n&&(g.searcher=Yu(_,e)),g}let c={children:[],operator:i[0]};return i.forEach(u=>{const _=o[u];zr(_)&&_.forEach(g=>{c.children.push(r(g))})}),c};return Ku(t)||(t=_h(t)),r(t)}function pN(t,{ignoreFieldNorm:e=Qe.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:i,score:a})=>{const c=o?o.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:i))}),n.score=r})}function mN(t,e){const n=t.matches;e.matches=[],$n(n)&&n.forEach(r=>{if(!$n(r.indices)||!r.indices.length)return;const{indices:o,value:i}=r;let a={indices:o,value:i};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function EN(t,e){e.score=t.score}function CN(t,e,{includeMatches:n=Qe.includeMatches,includeScore:r=Qe.includeScore}={}){const o=[];return n&&o.push(mN),r&&o.push(EN),t.map(i=>{const{idx:a}=i,c={item:e[a],refIndex:a};return o.length&&o.forEach(u=>{u(i,c)}),c})}class Ui{constructor(e,n={},r){this.options={...Qe,...n},this.options.useExtendedSearch,this._keyStore=new YR(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Pd))throw new Error(PR);this._myIndex=n||Bv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){$n(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,o-=1,n.push(i))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:i,sortFn:a,ignoreFieldNorm:c}=this.options;let u=xr(e)?xr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return pN(u,{ignoreFieldNorm:c}),i&&u.sort(a),Pv(n)&&n>-1&&(u=u.slice(0,n)),CN(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=Yu(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:i,i:a,n:c})=>{if(!$n(i))return;const{isMatch:u,score:_,indices:g}=n.searchIn(i);u&&o.push({item:i,idx:a,matches:[{score:_,value:i,norm:c,indices:g}]})}),o}_searchLogical(e){const n=Vv(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:v,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(v),value:this._myIndex.getValueForItemAtKeyId(u,v),searcher:h});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const g=[];for(let v=0,h=c.children.length;v<h;v+=1){const m=c.children[v],E=r(m,u,_);if(E.length)g.push(...E);else if(c.operator===ul.AND)return[]}return g},o=this._myIndex.records,i={},a=[];return o.forEach(({$:c,i:u})=>{if($n(c)){let _=r(n,c,u);_.length&&(i[u]||(i[u]={idx:u,item:c,matches:[]},a.push(i[u])),_.forEach(({matches:g})=>{i[u].matches.push(...g)}))}}),a}_searchObjectList(e){const n=Yu(e,this.options),{keys:r,records:o}=this._myIndex,i=[];return o.forEach(({$:a,i:c})=>{if(!$n(a))return;let u=[];r.forEach((_,g)=>{u.push(...this._findMatches({key:_,value:a[g],searcher:n}))}),u.length&&i.push({idx:c,item:a,matches:u})}),i}_findMatches({key:e,value:n,searcher:r}){if(!$n(n))return[];let o=[];if(zr(n))n.forEach(({v:i,i:a,n:c})=>{if(!$n(i))return;const{isMatch:u,score:_,indices:g}=r.searchIn(i);u&&o.push({score:_,key:e,value:i,idx:a,norm:c,indices:g})});else{const{v:i,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(i);c&&o.push({score:u,key:e,value:i,norm:a,indices:_})}return o}}Ui.version="7.0.0";Ui.createIndex=Bv;Ui.parseIndex=JR;Ui.config=Qe;Ui.parseQuery=Vv;gN(fN);function pi(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function bN(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function wN(t){return new Ui(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function IN(t,e,n){const r=bN(e,n);return t.length===0?r:wN(r).search(t).map(o=>o.item)}function yN(t,e){return pi(t,e).shape}function cn(t,e){const n=yN(t,e);return n?Pu(n):void 0}function Sl(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Gd(e)}function ON(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return kR(e)}function xN(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function zs(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Gd(o)})}function AN(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Gd(i)})})}function Vr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function Xv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return $v(e)}function LN(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return $v(r)})}function DN(t,e){const n=t.shape;return n===void 0?void 0:{...cn(e,Pt),...n}}function qv(t,e,n){return{toolId:t,cells:e,value:n}}function RN(t,e){const n=zs(e,"cells"),r=Vr(e);return qv(t,n,r)}function Zv(t,e,n){const r=n?t.length-2:0;return t.findIndex((i,a)=>Ze(i,e)&&a>=r)}function NN(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:Ws(r[o-1],e)))return t;const a=Zv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function Qv(t,e){return{toolId:t,cells:e,lines:[]}}function SN(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),al(n),{...t,cells:n};const r=n.some(i=>Ze(i,e)),o=n.some(i=>Ws(i,e));return n.length>0&&!r&&o?(n.push(e),al(n),{...t,cells:n}):t}function kN(t,e,n){const r=t.cells.some(_=>Ze(_,e)),o=t.lines.length;if(o===0&&!r)return t;if(o===0&&r)return Vu(t,e);const i=t.lines[o-1],a=i.length;if(a===0&&!r)return t;if(a===0&&r)return Vu(t,e);const c=Zv(i,e,!1);return(i.length===0?!0:Ws(i[a-1],e))?c>=0?(i.length=c+1,{...t,lines:[...t.lines.slice(0,o-1),i]}):!r||n?(i.push(e),{...t,lines:[...t.lines.slice(0,o-1),i]}):t:t}function Vu(t,e){return t.cells.some(r=>Ze(r,e))?{...t,lines:[...t.lines,[e]]}:t}function TN(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function MN(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function UN(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function $N(t,e){const n=zs(e,"cells"),r=AN(e),o=Qv(t,n);return o.lines=r,o}function Jv(t,e,n=""){return{toolId:t,cells:e,value:n}}function FN(t,e,n=!1){const r=Gv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function GN(t,e){return{...t,value:e}}function PN(t,e){const n=zs(e,"cells"),r=Vr(e);return Jv(t,n,r)}function Xu(t,e,n){return{toolId:t,cells:e,value:n}}function WN(t,e){const n=zs(e,"cells"),r=Vr(e);return Xu(t,n,r)}function qu(t,e,n){return{toolId:t,cells:e,value:n}}function HN(t,e){const n=zs(e,"cells"),r=Vr(e);return qu(t,n,r)}function Zu(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function zN(t,e){const n=Sl(e),r=Xv(e),o=Vr(e);return Zu(t,n,r,o)}function Qu(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function BN(t,e){const n=Sl(e),r=Vr(e);return Qu(t,n,r)}function Ju(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function YN(t,e){const n=Sl(e),r=Xv(e);return Ju(t,n,r)}function ed(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function jN(t,e){const n=Sl(e),r=LN(e),o=ed(t,n,Pe.N);return o.directions=r,o}function td(t,e,n=""){return{toolId:t,cell:e,value:n}}function KN(t,e){const n=ON(e),r=Vr(e);return td(t,n,r)}function VN(t,e=""){return{toolId:t,value:e}}function XN(t,e){const n=Vr(e);return VN(t,n)}function qN(t,e,n=""){return{toolId:t,coords:e,value:n}}function ZN(t,e){const n=xN(e,"coords"),r=Vr(e);return qN(t,n,r)}function Bs(t,e){return{...t,value:e}}class $i extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r||!r.constraints)return null;const o=r.constraints[n];return o||null}getConstraint2(e){for(const n of this.values()){if(!n.constraints)continue;const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const o=this.get(e);!o||!o.constraints||(o.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);!r||!r.constraints||r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const o=this.get(e);!o||!o.constraints||o.constraints[n]&&(o.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];if(r.constraints)for(const a of Object.values(r.constraints))o.push(rS(a));const i={tool_id:n,constraints:o};if(r.negative_constraints)for(const[a,c]of Object.entries(r.negative_constraints))c&&(i.negative_constraints||(i.negative_constraints={}),i.negative_constraints[a]=c);e[n]=i}return e}static fromJson(e){const n=new $i;if(!e)return n;for(const r of Object.values(e)){const o=r.tool_id;if(typeof o!="string")throw TypeError("tool_id_str must be of type string.");const i=wv(o);if(i===void 0||!Object.keys(Pt).includes(i))continue;n.addToDict(i);const a=n.get(i);if(!a)continue;const c=r.negative_constraints;if(c){a.negative_constraints={};for(const[_,g]of Object.entries(c))a.negative_constraints[_]=g}const u=r.constraints;for(const _ of u){let g=null;if(Iv(i,Il)?g=BN(i,_):Ho(i)?g=YN(i,_):wi(i)?g=jN(i,_):Ii(i)?g=HN(i,_):Ns(i)?g=WN(i,_):yi(i)?g=RN(i,_):bv(i)?g=ZN(i,_):Oi(i)?g=$N(i,_):xi(i)?g=PN(i,_):Hr(i)?g=zN(i,_):Ty(i)?g=XN(i,_):Ss(i)&&(g=KN(i,_)),g!==null){const v=Nt.uniqueId(),h=DN(_,i);g.shape=h,n.addConstraint(i,v,g)}}}return n}}function gi(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints)){const i=o[1],a=o[0];if(Ze(i.cell,n))return[a,i]}return null}function fh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(n.every(c=>i.cells.some(u=>Ze(c,u))))return o}return null}function gh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints)){const i=o[1],a=i.cells[i.cells.length-1];if(Ze(n,a))return o}return null}function QN(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(i.cells.some(c=>Ze(c,n)))return[o[0],i]}return null}function JN(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints))if(o[1].cells.some(c=>Ze(c,n)))return o;return null}function hh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(i.cells.some(c=>Ze(c,n)))return[o[0],i]}return null}function eS(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const[o,i]of Object.entries(r.constraints)){const a=i,c=a.lines.findIndex(u=>u.some((_,g)=>Ze(_,n)&&g>0));if(c>=0)return{id:o,arrow:a,matchLineIdx:c}}return null}function vh(t,e,n,r){const o=t.get(e);if(!o||!o.constraints)return null;for(const i of Object.entries(o.constraints)){const a=i[1],c=i[0];if(Ze(n,a.cell)&&r===a.direction)return[c,a]}return null}function ph(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints)){const i=o[1],a=o[0];if(Ze(n,i.cell))return[a,i]}return null}function tS(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(i.cells.some(c=>Ze(c,n))||i.cells2.some(c=>Ze(c,n)))return[o[0],i]}return null}function nS(t,e){const n=t.get(e),r=new Set;if(!n||!n.constraints)return r;for(const o of Object.entries(n.constraints)){const i=o[1];r.add(i.value)}return r}function rS(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ba(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ba(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>Ba(o)));e.lines=n}if("cell"in t){const n=Ba(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=cn(t.toolId,Pt),r=Gy(t.shape,n);r&&(e.shape=r)}return e}function mh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function ep(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function nd(t){const e=new Option().style;return e.color=t,e.color!==""}function wu(t){return ep(t)||nd(t)?t:nd(`#${t}`)?`#${t}`:void 0}function dl(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function tp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function _l(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}function oS(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Eh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function iS(t){return t in Eh?Eh[t]:null}function np(t,e,n){if(n===null)return null;const r=iS(n);if(r===null)return null;const[o,i]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/i)}function Iu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class sS{constructor(e,n){Ee(this,"r");Ee(this,"c");Ee(this,"outside",!1);Ee(this,"value",null);Ee(this,"given",!1);Ee(this,"region",null);Ee(this,"centerMarks",[]);Ee(this,"cornerMarks",[]);Ee(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Iu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Iu(this.cornerMarks,e))}enterHighlight(e){this.highlights=Iu(this.highlights,e)}enterCell(e,n,r=!1){n===f.GIVEN?this.enterGiven(e,r):n===f.DIGIT?this.enterValue(e,r):n===f.CORNER_PM?this.enterCornerPM(e):n===f.CENTER_PM?this.enterCenterPM(e):n===f.HIGHLIGHTS?this.enterHighlight(e):n===f.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==np(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Fi{constructor(e,n){Ee(this,"nCols");Ee(this,"nRows");Ee(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const i=[];for(let a=0;a<n;a++){const c=new sS(o,a);if(r){const u=np(o,a,e);c.region=u}i.push(c)}this.grid.push(i)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[i,a]=[e.r+o[0],e.c+o[1]],c=this.getCell(i,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const i=e.r+o[0],a=e.c+o[1],c=this.getCell(i,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const i=e.r+o[0],a=e.c+o[1],c=this.getCell(i,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return tp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),i=o.length;if(e<0||e>=i||![...r.values()].every(c=>c===i))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:i,c:a}=Hs(r);let[c,u]=[e+i,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];o.push(_),[c,u]=[c+i,u+a]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let i=0;i<this.nCols;i++){const a=this.getCell(r,i);if(!a)continue;const c=a==null?void 0:a.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new Fi(e,n);for(let i=0;i<e;i++)for(let a=0;a<n;a++){const c=r[i][a],u=o.getCell(i,a);u&&Object.assign(u,c)}return o}}function aS(t){const e=t.grid,n=t.elementsDict,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),a=Nt.range(1,i+1);t.valid_digits&&!oS(a,t.valid_digits)&&(o.valid_digits=t.valid_digits),o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(o.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(o.local_constraints=u),o}function lS(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,o=t.valid_digits,i=t.grid,a=Fi.fromJSON(e,n,i),c=Math.min(a.nRows,a.nRows);let u=Nt.range(1,c+1);o!==void 0&&(u=o);const _=t.solution,g=t.local_constraints,v=$i.fromJson(g),h=t.bool_constraints,m=Go.fromJson(h);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,elementsDict:v,globalConstraints:m}}function Pz(){const t=new Fi(9,9),e=new $i,n=new Go;return{grid:t,solution:void 0,valid_digits:Nt.range(1,10),puzzleMeta:{},elementsDict:e,globalConstraints:n}}var Es=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Es||{});const cS=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),uS=()=>({type:"CLEAR"}),dS=t=>({type:"DRAG",payload:t}),rd=t=>({type:"SET",payload:t}),_S=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Wd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Or=(t,e,n)=>{const r=[...t];return al(r),{cells:r,lastCell:e,mode:n}};function fS(t,e,n){if(e===null)return Wd();if(n==="RESETTING")return Or([e],e,"SELECTING");const r=t.cells.findIndex(o=>Ze(e,o));if(n==="SELECTING")return r!==-1?t:Or([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),Or(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Or([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),Or(o,null,"DESELECTING")}return t}function gS(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ze(e,r));if(t.mode==="SELECTING")return n!==-1?t:Or([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Or(r,null,t.mode)}return t}function hS(t,e){return{...t,cells:e}}function vS(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>Ze(e,o))!==-1?Or([...t.cells],e,"SELECTING"):Or([...t.cells,e],e,"SELECTING"):Or([e],e,t.mode)}function rp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Wd();case"SET":return hS(t,e.payload);case"CLICK":return fS(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return gS(t,e.payload);case"ARROW_KEY":return vS(t,e.payload.cell,e.payload.selectionMode);default:return t}}function fi(t,e){return Ze(t.p1,e.p1)&&Ze(t.p2,e.p2)||Ze(t.p1,e.p2)&&Ze(t.p2,e.p1)}function pS(t,e){return Ze(t.p1,e.p2)&&Ze(t.p2,e.p1)}function op(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ze(t,e)}class kl{constructor(){Ee(this,"edgeMarkers",[]);Ee(this,"cellMarkers",[]);Ee(this,"lineMarkers",[]);Ee(this,"draftLine",[]);Ee(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ze(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ze(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ze(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ze(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>Ze(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>Ze(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>Ze(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>Ze(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ze(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>Ze(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const i={...e,colorId:n,marker:"O"};this.cellMarkers[r]=i}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>fi(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>fi(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&pS(r,e)&&this.draftLine.splice(n,1)}onDrag(e){op(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(i=>fi(i,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(i=>fi(i,r));if(o!==-1){const i=this.lineMarkers.splice(o,1);n.push(i[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new kl;return Object.assign(e,this),e}}const Ch=t=>({type:"ADD_EDGE_MARKER",payload:t}),bh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Ka=t=>({type:"ADD_CELL_MARKER",payload:t}),mS=t=>({type:"SET_CELL_MARKERS",payload:t}),wh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),ES=t=>({type:"DRAG",payload:t}),Ls=t=>({type:"ADD_LINE_MARKERS",payload:t}),Ih=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),Hd=()=>({type:"RESET"});function CS(t,e){switch(e.type){case"RESET":return new kl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function ip(){return{_undoStack:[],_redoStack:[]}}const Gi=It(ip());function bS(){Gi.update(()=>ip())}function qn(t,e=!0){Gi.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function wS(t,e=!0){Gi.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function sp(){Gi.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function ap(){Gi.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const fl=It(new kl);function Dr(t){fl.update(e=>CS(e,t))}const gl=It(1);function ko(t,e){return{execute:()=>{Dr(t)},unExecute:()=>{Dr(e)}}}const Po=It(Wd());function di(t){t&&Po.update(e=>rp(e,t))}function yh(t){t&&Po.update(e=>rp(e,t))}function IS(t,e){return{execute:()=>{yh(t)},unExecute:()=>{yh(e)}}}const mi=It(null),Tl=It(bi.SETTING),od=It(!1),Qt=It(f.DIGIT),lp=It(f.DIGIT),zd=It(Nt.range(1,10)),En=It(new Fi(9,9)),Qn=It(Ne(En).getAllCells()),Xr=It({}),Ml=It(new Go),ct=It(new $i),Bt=It(null),Pi=It(void 0),Ul=It(void 0);function yS(t){Xr.update(()=>t)}function Wi(t){Bt.update(()=>t)}function Bd(t){Pi.update(()=>t)}function Lr(t){Ne(Qt)!==t&&(Qt.update(()=>t),Wi(null))}function OS(){const t=Ne(lp);t&&Lr(t)}function id(t){lp.update(()=>t)}function xS(t){Ne(Qt)===t&&Lr(f.DIGIT)}function AS(t){ct.update(e=>(e.removeFromDict(t),e)),Bd(void 0)}function Zt(t,e,n){ct.update(r=>(r.updateConstraint(t,e,n),r)),Wi({id:e,constraint:n})}function yu(t){const e=Ne(Bt);if(t=t?{...t}:void 0,Bd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Zt(r,e.id,n)}function mo(t,e){const r=Ne(ct).get(e);if(!r||!r.constraints)return;const o=r.constraints[t];o&&Wi({id:t,constraint:o})}function LS(t,e,n){const r=new Fi(t,e);En.update(()=>r),zd.update(()=>n),ct.update(()=>new $i),Ml.update(()=>new Go),Xr.update(()=>({})),Yd(void 0),Qn.update(()=>r.getAllCells())}function DS(t){En.update(()=>t.grid),Xr.update(()=>t.puzzleMeta),Yd(t.solution),zd.update(()=>t.valid_digits),ct.update(()=>t.elementsDict),Ml.update(()=>t.globalConstraints),Qn.update(()=>t.grid.getAllCells())}function cp(){const t=Ne(En);t.resetValues(),En.update(()=>t),Qn.update(()=>t.getAllCells()),Dr(Hd())}function hl(){bS(),Dr(Hd()),Lr(f.DIGIT);const t=uS();di(t),Bd(void 0),Wi(null)}const up=Br([ho,Qt,Tl],([t,e,n])=>{const r=t.hideFog;return e===f.FOG_LIGHTS&&!r&&n===bi.SETTING}),Ys=Br([En,Xr,Ml,ct,Ul,zd],([t,e,n,r,o,i])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:i,globalConstraints:n,elementsDict:r}));function Yd(t){Ul.update(()=>t)}var RS=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function jd(t){var e=RS();L(t,e)}var NS=ue('<button class="remove-button svelte-17rdl63"><!></button>');function SS(t,e){let n=U(e,"onTrash",8,()=>{});var r=NS(),o=Y(r);jd(o),P(r),ke("click",r,Gn(function(...i){var a;(a=n())==null||a.apply(this,i)})),L(t,r)}var kS=ue('<input type="radio" class="radio-select-button svelte-3561wl">'),TS=ue('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function Oh(t,e){var ee,ce;ae(e,!1);const n=Ve(),r=()=>me(Qt,"$toolStore",n),o=[];let i=U(e,"elementInfo",8),a=U(e,"onClick",12,void 0),c=U(e,"onTrash",8,void 0);const u=i().toolId,_=i().permanent??!1,g=((ee=i().menu)==null?void 0:ee.name)??i().toolId,v=!((ce=i().meta)!=null&&ce.categories.includes(W.GLOBAL_CONSTRAINT)),h=`label-${g}`;v&&a(()=>{Lr(u)});function m(){var re,ge;const Z=(re=i().meta)==null?void 0:re.description,ne=((ge=i().meta)==null?void 0:ge.usage)??Ov(u);let he;return Z&&Z.length&&(he=Z),ne.length&&(he?he=he+`

`+ne:he=ne),he}fe();var E=TS(),w=Y(E);{var b=Z=>{var ne=kS();fn(ne),x(ne,"id",h),ne.value=(ne.__value=u)==null?"":u,wl(o,[],ne,()=>r(),he=>$o(Qt,he)),L(Z,ne)};J(w,Z=>{v&&Z(b)})}var I=$(w,2);Q(()=>x(I,"title",m())),x(I,"aria-labelledby",h);var A=Y(I),k=Y(A),M=Y(k);{var G=Z=>{SS(Z,{get onTrash(){return c()}})};J(M,Z=>{_||Z(G)})}P(k);var z=$(k,2);x(z,"for",h),z.textContent=g,P(A);var T=$(A,2),j=Y(T);gt(j,e,"default",{}),P(T),P(I),P(E),Q(()=>vt(E,"checked",u===r())),ke("click",I,Gn(function(...Z){var ne;(ne=a())==null||ne.apply(this,Z)})),L(t,E),le()}var MS=ue('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function US(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var o=MS(),i=Y(o),a=Y(i,!0);P(i);var c=$(i,2);P(o),Q(()=>at(a,n())),ke("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),L(t,o)}var $S=ue('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function qr(t,e){ae(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),o=D();function i(){n(!1),d(o).close()}N(()=>(d(o),X(n())),()=>{d(o)&&n()&&d(o).showModal()}),N(()=>(d(o),X(n())),()=>{d(o)&&!n()&&d(o).close()}),we();var a=$S(),c=Y(a),u=Y(c);US(u,{get title(){return r()},closeCb:i});var _=$(u,2),g=Y(_),v=Y(g);gt(v,e,"default",{}),P(g),P(_),P(c),P(a),Fo(a,h=>O(o,h),()=>d(o)),ke("click",c,Gn(function(h){Ly.call(this,e,h)})),ke("close",a,()=>{n(!1)}),ke("click",a,Ay(Gn(()=>d(o).close()))),L(t,a),le()}var FS=ue('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function GS(t,e){ae(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),o=D(null);N(()=>(X(r()),d(o)),()=>{r()&&d(o)&&d(o).focus()}),we();var i=FS(),a=$(Y(i),2);fn(a),x(a,"spellcheck",!1),Fo(a,c=>O(o,c),()=>d(o)),P(i),Zn(a,n),L(t,i),le()}var PS=ue('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function WS(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),o=U(e,"title",8);qr(t,{get title(){return o()},get showModal(){return n()},set showModal(i){n(i)},children:(i,a)=>{var c=PS(),u=Y(c);GS(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var _=$(u,2),g=Y(_),v=Y(g);gt(v,e,"default",{}),P(g),P(_),P(c),L(i,c)},$$slots:{default:!0},$$legacy:!0})}var HS=ue('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function Kd(t,e){let n=U(e,"isOpen",8,!0);var r=HS(),o=Y(r);gt(o,e,"default",{}),P(r),Q(()=>{x(r,"aria-expanded",n()),vt(r,"closed",!n())}),L(t,r)}var zS=ue('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),BS=ue('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function co(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),o=U(e,"isCollapsible",8,!1);var i=be(),a=oe(i);{var c=_=>{var g=zS(),v=Y(g),h=Y(v),m=Y(h,!0);P(h),P(v);var E=$(v,2),w=Y(E);gt(w,e,"default",{}),P(E),P(g),Q(()=>at(m,n())),L(_,g)},u=_=>{var g=BS(),v=Y(g),h=Y(v),m=Y(h,!0);P(h),P(v);var E=$(v,2),w=Y(E);gt(w,e,"default",{});var b=$(w,2);P(E),P(g),Q(()=>{at(m,n()),vt(b,"open",r())}),ke("click",g,()=>r(!r())),L(_,g)};J(a,_=>{o()?_(u,!1):_(c)})}L(t,i)}var YS=ue('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),jS=ue('<ol class="svelte-cd45on"></ol>'),KS=ue("<!> <!>",1);function VS(t,e){ae(e,!1);const n=D();let r=U(e,"category",8),o=U(e,"addTool",8),i=U(e,"searchResults",8),a=D(!0);N(()=>(X(i()),X(r())),()=>{O(n,i().filter(g=>{var v,h;return(h=(v=g.info.meta)==null?void 0:v.categories)==null?void 0:h.includes(r())}))}),we(),fe();var c=be(),u=oe(c);{var _=g=>{var v=KS(),h=oe(v);co(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return d(a)},set isOpen(E){O(a,E)},$$legacy:!0});var m=$(h,2);Kd(m,{get isOpen(){return d(a)},children:(E,w)=>{var b=jS();Je(b,5,()=>d(n),pt,(I,A)=>{let k=()=>d(A).key,M=()=>d(A).info;var G=YS(),z=Y(G),T=Y(z,!0);P(z),P(G),Q(()=>{var j;x(z,"title",(j=M().meta)==null?void 0:j.description),at(T,k())}),ke("click",z,()=>{o()(k())}),L(I,G)}),P(b),L(E,b)},$$slots:{default:!0}}),L(g,v)};J(u,g=>{d(n).length&&g(_)})}L(t,c),le()}function XS(t,e){ae(e,!1);const n=D();let r=U(e,"searchPattern",8,""),o=U(e,"addTool",8),i=U(e,"categories",8),a=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);N(()=>(X(r()),X(a()),X(c())),()=>{O(n,IN(r(),a(),c()))}),we(),fe();var u=be(),_=oe(u);Je(_,1,i,pt,(g,v)=>{VS(g,{get category(){return d(v)},get searchResults(){return d(n)},get addTool(){return o()}})}),L(t,u),le()}var qS=ue('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function $l(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var o=qS();x(o,"tabindex",0);var i=Y(o),a=Y(i);gt(a,e,"add-button",{}),P(i);var c=$(i,2),u=Y(c),_=Y(u);gt(_,e,"title-icon",{}),P(u);var g=$(u);P(c);var v=$(c,2),h=Y(v);P(v),P(o),Q(()=>{at(g,` ${r()??""}`),vt(h,"open",n())}),ke("click",o,()=>n(!n())),ke("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),L(t,o)}var ZS=ue('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function QS(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),o=U(e,"showModal",12);function i(){o(!o())}$l(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=ZS();ke("click",u,Gn(()=>i())),L(a,u)},"title-icon":(a,c)=>{var u=be(),_=oe(u);gt(_,e,"title-icon",{}),L(a,u)}},$$legacy:!0})}var JS=ue('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),e2=ue('<div class="panel-container svelte-hixu4"><!> <!></div>');function Fl(t,e){let n=U(e,"isOpen",8,!0);var r=e2(),o=Y(r);gt(o,e,"panel-header",{});var i=$(o,2);Kd(i,{get isOpen(){return n()},children:(a,c)=>{var u=JS(),_=Y(u);gt(_,e,"panel-content",{}),P(u),L(a,u)},$$slots:{default:!0}}),P(r),L(t,r)}var t2=ue("<!> <!>",1);function n2(t,e){ae(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),o=U(e,"onAddTool",8),i=U(e,"elementHandlerFilterFunc",8),a=U(e,"elementHandlers",8),c=D(!0),u=D(!1),_=D("");const g=v=>{O(u,!1),O(c,!0),o()(v)};fe(),Fl(t,{get isOpen(){return d(c)},set isOpen(v){O(c,v)},$$slots:{"panel-header":(v,h)=>{var m=t2(),E=oe(m);QS(E,{get title(){return r()},get isOpen(){return d(c)},set isOpen(b){O(c,b)},get showModal(){return d(u)},set showModal(b){O(u,b)},$$slots:{"title-icon":(b,I)=>{var A=be(),k=oe(A);gt(k,e,"title-icon",{}),L(b,A)}},$$legacy:!0});var w=$(E,2);WS(w,{get title(){return r()},get showModal(){return d(u)},set showModal(b){O(u,b)},get searchPattern(){return d(_)},set searchPattern(b){O(_,b)},children:(b,I)=>{XS(b,{get searchPattern(){return d(_)},get categories(){return n()},get filterFunc(){return i()},addTool:g,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),L(v,m)},"panel-content":(v,h)=>{var m=be(),E=oe(m);gt(E,e,"panel-content",{}),L(v,m)}},$$legacy:!0}),le()}var _i=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(_i||{});const Vd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Xd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),r2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),o2=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),xh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function i2(t){ct.update(e=>(e.addToDict(t),e))}function js(t,e){const n=Ne(Pi);n&&(e.shape={...n}),ct.update(r=>(r.addConstraint(e.toolId,t,e),r)),Wi({id:t,constraint:e})}function qd(t,e){e&&ct.update(n=>(n.removeConstraint(t,e),n))}function dp(t,e){ct.update(n=>(n.setElement(t,e),n))}function Ah(t){t.type===_i.ADD_LOCAL_CONSTRAINT?js(t.payload.id,t.payload.constraint):t.type===_i.REMOVE_LOCAL_CONSTRAINT?qd(t.payload.tool,t.payload.id):t.type===_i.REMOVE_LOCAL_CONSTRAINT_GROUP?AS(t.payload.tool):t.type===_i.RESTORE_ELEMENT?dp(t.payload.tool,t.payload.constraints):t.type===_i.UPDATE_LOCAL_CONSTRAINT&&Zt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ks(t,e){return{execute:()=>{Ah(t)},unExecute:()=>{Ah(e)}}}var s2=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function a2(t){var e=s2();L(t,e)}var l2=ue('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function c2(t,e){ae(e,!1);const n=Ve(),r=()=>me(mi,"$svgRefStore",n),o=()=>me(ct,"$localConstraintsStore",n),i=()=>me(Bt,"$currentConstraintStore",n),a=D();let c=U(e,"constraint_id",8),u=U(e,"tool_id",8);function _(){mo(c(),u()),r()&&r().focus()}function g(){const I=o().getConstraint(u(),c());if(!I)return;const A=Xd(c(),u()),k=Vd(c(),I),M=Ks(A,k);qn(M)}N(()=>i(),()=>{var I;O(a,(I=i())==null?void 0:I.id)}),we(),fe();var v=l2(),h=Y(v),m=Y(h);P(h);var E=$(h,2),w=Y(E),b=Y(w);jd(b),P(w),P(E),P(v),Q(()=>{vt(v,"active",c()===d(a)),at(m,`ID: ${c()??""}`)}),ke("click",w,Gn(g)),ke("click",v,_),L(t,v),le()}var u2=ue('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function d2(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=D(),i=D();let a=U(e,"tool_id",8),c=U(e,"neg_tool_id",8),u=U(e,"description",8);function _(){d(o)&&(d(o).negative_constraints||Gu(o,d(o).negative_constraints={}),Gu(o,d(o).negative_constraints[c()]=!d(i)),dp(a(),d(o)),O(i,!d(i)))}N(()=>(r(),X(a())),()=>{O(o,r().get(a()))}),N(()=>(d(o),X(c())),()=>{var w;O(i,(w=d(o))!=null&&w.negative_constraints?!!d(o).negative_constraints[c()]:!1)}),we(),fe();var g=u2(),v=Y(g),h=Y(v);_o(2),P(v);var m=$(v,2),E=Y(m,!0);P(m),P(g),Q(()=>{x(g,"title",u()),vt(v,"checked",d(i)),vt(h,"checked",d(i)),at(E,c())}),ke("click",h,_),L(t,g),le()}var _2=ue('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function f2(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=D();let i=U(e,"tool_id",8);N(()=>(r(),X(i())),()=>{O(o,r().get(i()))}),we(),fe();var a=be(),c=oe(a);{var u=_=>{var g=_2(),v=Y(g);Je(v,5,()=>Object.entries(d(o).constraints),h=>h[0],(h,m)=>{c2(h,{get constraint_id(){return d(m)[0]},get tool_id(){return i()}})}),P(v),P(g),L(_,g)};J(c,_=>{d(o)&&d(o).constraints&&Object.entries(d(o).constraints).length&&_(u)})}L(t,a),le()}class Re{constructor(e,n){Ee(this,"x");Ee(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Re(this.x+e.x,this.y+e.y)}subtract(e){return new Re(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Re(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Re(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function _p(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Ln=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new Re(o.x,o.y)};function Za(t,e){const n=Nl(t),r=new Re(n.c+.5,n.r+.5),o=t.distance(r);return e===void 0||o<e?{cell:n,dist:o}:null}function g2(t,e){const n=Nl(t),r=new Re(n.c+.5,n.r+.5),o=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:o}}function Qa(t,e){const n=Nl(t),r=DR(n),i=r.map(_=>new Re(_.c,_.r)).map(_=>_.distance(t)),a=i.indexOf(Math.min(...i)),c=r[a],u=i[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function Ja(t,e){const n=Nl(t),r=RR(n),i=r.map(_=>new Re(_.c,_.r)).map(_=>_.distance(t)),a=i.indexOf(Math.min(...i)),c=r[a],u=i[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function Is(t,e,n){const r=Za(t);if(!r)return null;const o=Ja(t);if(!o)return null;const i=Qa(t);if(!i)return null;const a=g2(t);if(!a)return null;let c,u;e===Rt.CORNER?(c=i.corner,u="corner"):e===Rt.EDGE?(c=o.edge,u="edge"):e===Rt.CELL_CENTER?(c=a.cellCenter,u="cell center"):e===Rt.CORNER_OR_EDGE?i.dist<o.dist?(c=i.corner,u="corner"):(c=o.edge,u="edge"):e===Rt.CORNER_OR_CENTER?i.dist<a.dist?(c=i.corner,u="corner"):(c=a.cellCenter,u="cell center"):e===Rt.EDGE_OR_CENTER?o.dist<a.dist?(c=o.edge,u="edge"):(c=a.cellCenter,u="cell center"):o.dist<i.dist&&o.dist<a.dist?(c=o.edge,u="edge"):i.dist<o.dist&&i.dist<a.dist?(c=i.corner,u="corner"):(c=a.cellCenter,u="cell center");const g=new Re(c.c,c.r).subtract(t).length(),v=u==="edge"?2*o.idx:2*i.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:o.edge,corner:i.corner,dist:g,closest:c,type:u,edgeIdx:o.idx,cornerIdx:i.idx,direction:v}}class Hi{constructor(e=.4){Ee(this,"onTap",null);Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onMove",null);Ee(this,"_prevPoint",null);Ee(this,"_prevCell",null);Ee(this,"_lastPointerDownTime",0);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_tapCount",0);Ee(this,"_lastTapPosition",null);Ee(this,"_lastTapTime",0);Ee(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Ln(e,n);if(!r)return;this._prevPoint=r;const o=Za(r);if(!o)return;const i=o.cell;this._prevCell=i,this._lastPointerDownTime=e.timeStamp;const a={event:e,cell:i,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){const r=Ln(e,n);if(!r)return;let o;this._isDown&&(o=this._drag_margin);const i=Za(r,o);if(!i)return;const a=i.cell;if(this._prevCell&&Ze(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const c={event:e,cell:a,tapCount:this._tapCount};this.onMove&&this.onMove(c),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(c)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Ln(e,n);if(!r)return;const o=Za(r,void 0);if(!o)return;const i=o.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:i,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:i,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Lh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(i=>{const a=new Set(i.highlights);return n.difference(a).size===0}).map(i=>i.toCoords())}function h2(t,e){const n=t.value;return e.getAllCells().filter(i=>i.value===n).map(i=>i.toCoords())}function Dh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(i=>{if(i.value!==null)return!1;const a=new Set(i.cornerMarks);return n.difference(a).size===0}).map(i=>i.toCoords())}function Rh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(i=>{if(i.value!==null)return!1;const a=new Set(i.centerMarks);return n.difference(a).size===0}).map(i=>i.toCoords())}function v2(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===f.HIGHLIGHTS&&o.highlights.length?Lh(o,e):o.value!==null?h2(o,e):n===f.CORNER_PM&&o.cornerMarks.length?Dh(o,e):n===f.CENTER_PM&&o.centerMarks.length?Rh(o,e):o.cornerMarks.length?Dh(o,e):o.centerMarks.length?Rh(o,e):o.highlights.length?Lh(o,e):r:r}function mr(t,e,n,r=!1){if(!(t&&e))return;const o=Vd(t,e),i=Xd(t,n),a=Ks(o,i);qn(a,r)}function hr(t,e,n,r=!0){if(!(t&&e))return;const o=Xd(t,n),i=Vd(t,e),a=Ks(o,i);qn(a,r)}function sd(t,e,n,r,o=!1){if(!(t&&n&&e))return;const i=xh(r,t,n),a=xh(r,t,e),c=Ks(i,a);qn(c,o)}function p2(t,e,n,r){const o=new Hi,i={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,g=!1,v=An.DYNAMIC;function h(E){_=!1;const w=E.cell;if($t(E.cell,i)){if(v===An.DYNAMIC){const I=Ne(ct),A=eS(I,n,w);if(A){const M=UN(A.arrow,A.matchLineIdx);sd(A.id,A.arrow,M,n,!0),g=!0;return}const k=hh(I,n,w);if(!k)_=!0,v=An.EDIT_BULB,u=null,a=null;else{v=An.EDIT_ARROWS,u=k[0],a=k[1],a=Vu(a,w),Zt(n,u,a);return}}if(v===An.EDIT_BULB&&!u){u=Nt.uniqueId(),a=Qv(n,[w]),js(u,a);return}else v===An.EDIT_BULB&&u&&a?(a=SN(a,w),Zt(n,u,a)):v===An.EDIT_ARROWS&&u&&a&&(a=kN(a,w,r==null?void 0:r.allowSelfIntersection),Zt(n,u,a))}}return o.onDragStart=E=>{v=An.DYNAMIC,h(E)},o.onDrag=E=>{h(E)},o.onDragEnd=()=>{if(g){g=!1;return}v===An.EDIT_ARROWS&&u&&a?TN(a)?(a=MN(a),Zt(n,u,a)):(sd(u,c,a,n),c=a):v===An.EDIT_BULB&&(mr(u,a,n),c=a),v=An.DYNAMIC},o.onTap=E=>{if(_)return;const w=E.cell,b=Ne(ct);if(hh(b,n,w)){hr(u,a,n);return}},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:E=>{o.pointerMove(E,t)},pointerUp:E=>{o.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function m2(t,e,n,r){const o=new Hi,i={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(h){return!!$t(h.cell,i)}function g(h){if(!u||!c)throw"UNREACHABLE";const m=h.cell;_(h)&&(c=NN(c,m,a),Zt(n,u,c))}return o.onDragStart=h=>{Ne(zt)!==Le.DELETE&&(u=Nt.uniqueId(),c=qv(n,[],r==null?void 0:r.defaultValue),js(u,c),g(h))},o.onDrag=h=>{g(h)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?qd(n,u):u&&c&&mr(u,c,n,!1),u=null},o.onTap=h=>{if(Ne(zt)===Le.ADD_EDIT)return;const E=h.cell,w=Ne(ct),b=JN(w,n,E);if(b){const[I,A]=b;hr(I,A,n)}},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const E2=Br(ct,t=>{const e=[];for(const[n,r]of t.entries())My(n)&&e.push(r);return e});function zi(t){return Br(ct,n=>{const r=[];for(const[o,i]of n.entries())t(o)&&r.push(i);return r})}const Zd=zi(Dd),fp=Br(Zd,t=>{const e=t.find(r=>r.tool_id===f.FOG_LIGHTS);return e?e.constraints:{}}),C2=Br(Zd,t=>{const e=t.find(r=>r.tool_id===f.MINIMUM);return e?e.constraints:{}}),b2=Br(Zd,t=>{const e=t.find(r=>r.tool_id===f.MAXIMUM);return e?e.constraints:{}}),w2=zi(Ii),I2=zi(Ss),y2=zi(Ns),O2=zi(bv),x2=zi(Ry),el=It(void 0),tl=It(void 0),nl=It(void 0),rl=It(void 0),ol=It(void 0),Cs=It(void 0),il=It(void 0);Br([ct,Qt],([t,e])=>{const n=e;return t.get(n)});function A2(t,e,n,r){const o=new Hi,i={nRows:e.nRows,nCols:e.nCols};function a(_){const g=Ne(ct),v=_.cell;if(!$t(_.cell,i))return;let m=Ne(zt);const E=gi(g,n,v);if(m===Le.DYNAMIC&&(m=E?Le.DELETE:Le.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&gi(g,r.oppositeConstraintId,v)))if(E&&m===Le.DELETE){const[w,b]=E;hr(w,b,n)}else if(!E&&m===Le.ADD_EDIT){const w=Qu(n,v,r==null?void 0:r.defaultValue),b=Nt.uniqueId();mr(b,w,n,!0)}else E&&m===Le.ADD_EDIT&&mo(E[0],n)}o.onDragStart=_=>{a(_)},o.onDrag=_=>{a(_)},o.onMove=_=>{if(!$t(_.cell,i)){el.set(void 0);return}const v=Qu(n,_.cell,r==null?void 0:r.defaultValue),h=Ne(Pi);h&&(v.shape={...h});const m=Ne(zt),E=Ne(ct),w=gi(E,n,_.cell);if(!w&&m===Le.DELETE){el.set(void 0);return}let b="add",I;w&&(m===Le.DELETE||m===Le.DYNAMIC)&&(b="remove",I=w[0]);const A={tool:v,match_id:I,mode:b};el.set(A)};function c(_){const g=Ne(Bt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Ri(_)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,_.key);m!==void 0&&m!==v.value&&(v=Bs(v,m),Zt(n,h,v))}return{pointerDown:_=>{_.button===0&&o.pointerDown(_,t)},pointerMove:_=>{o.pointerMove(_,t)},pointerUp:_=>{o.pointerUp(_,t)},keyDown:_=>{c(_)},keyUp:()=>{}}}class Gl{constructor(e){Ee(this,"onDragStart",null);Ee(this,"onMove",null);Ee(this,"feature");Ee(this,"_prevCoord",null);Ee(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=Ln(e,n);if(!r)return;const o=Is(r,this.feature);if(!o)return;const i={event:e,...o};this._prevCoord=o.closest,this._prevCellCoord=o.cell,this.onDragStart&&this.onDragStart(i)}pointerMove(e,n){const r=Ln(e,n);if(!r)return;const o=Is(r,this.feature);if(!o||this._prevCoord&&Ze(o.closest,this._prevCoord)&&this._prevCellCoord&&Ze(this._prevCellCoord,o.cell))return;const i={event:e,...o};this._prevCoord=o.closest,this._prevCellCoord=o.cell,this.onMove&&this.onMove(i)}}function L2(t,e,n,r){const o=(r==null?void 0:r.targets)??Rt.CLOSEST,i=new Gl(o),a={nRows:e.nRows,nCols:e.nCols};function c(g){const v=Ne(ct),h=g.cell,m=g.closest;let E=Ne(zt);if(!$t(h,a))return;const b=ph(v,n,m);if(E===Le.DYNAMIC&&(E=b?Le.DELETE:Le.ADD_EDIT),b&&E===Le.DELETE){const I=b[0];hr(I,b[1],n)}else if(!b&&E===Le.ADD_EDIT){const I=td(n,m,""),A=Nt.uniqueId();mr(A,I,n,!0)}else b&&E===Le.ADD_EDIT&&mo(b[0],n)}function u(g){const v=Ne(Bt);if(!v)return;let h=v.constraint;const m=v.id;if(h.value===void 0||!Ri(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Bs(h,E),Zt(n,m,h))}return i.onDragStart=g=>{c(g)},i.onMove=g=>{if(!$t(g.cell,a)){il.set(void 0);return}const h=Ne(zt),m=td(n,g.closest,""),E=Ne(Pi);E&&(m.shape={...E});const w=Ne(ct),b=ph(w,n,g.closest);if(!b&&h===Le.DELETE){il.set(void 0);return}let I="add",A;b&&(h===Le.DYNAMIC||h===Le.DELETE)&&(I="remove",A=b[0]);const k={tool:m,match_id:A,mode:I};il.set(k)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function D2(t,e,n,r){const o=(r==null?void 0:r.cornerOrEdge)??Rt.CORNER_OR_EDGE,i=new Gl(o),a={nRows:e.nRows,nCols:e.nCols};function c(g){const v=Ne(ct),h=g.cell,m=g.direction,E=vi(m);if($t(h,a))return;const b=sh(h,E);if(!$t(b,a))return;let A=Ne(zt);const k=vh(v,n,h,E);if(A===Le.DYNAMIC&&(A=k?Le.DELETE:Le.ADD_EDIT),k&&A===Le.DELETE){const[M,G]=k;hr(M,G,n)}else if(!k&&A===Le.ADD_EDIT){const M=Zu(n,h,E,""),G=Nt.uniqueId();mr(G,M,n,!0)}else k&&A===Le.ADD_EDIT&&mo(k[0],n)}function u(g){const v=Ne(Bt);if(!v)return;let h=v.constraint;const m=v.id;if(h.value===void 0||!Ri(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Bs(h,E),Zt(n,m,h))}return i.onDragStart=g=>{c(g)},i.onMove=g=>{if($t(g.cell,a)){Cs.set(void 0);return}const h=vi(g.direction),m=sh(g.cell,h);if(!$t(m,a)){Cs.set(void 0);return}const w=Ne(zt),b=Ne(ct);if(!vh(b,n,g.cell,h)&&w===Le.DELETE){Cs.set(void 0);return}const A=Zu(n,g.cell,h,"");Cs.set(A)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function R2(t,e,n,r){const o=new Hi,i={nRows:e.nRows,nCols:e.nCols};let a=null,c=null;function u(v){const h=Ne(ct),m=v.cell;if(!$t(v.cell,i))return;let w=Ne(zt);const b=QN(h,n,m);if(b&&(v.event.shiftKey||w===Le.ADD_EDIT)&&(c=b[0],a=b[1],Wi({id:c,constraint:a}),w=Le.ADD_EDIT),w===Le.DYNAMIC&&(w=b?Le.DELETE:Le.ADD_EDIT),b&&w===Le.DELETE){hr(b[0],b[1],n);return}if(!a&&w===Le.ADD_EDIT){a=Jv(n,[m]),c=Nt.uniqueId(),js(c,a);return}else if(a&&c&&w===Le.ADD_EDIT){const I=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=FN(a,m,I),Zt(n,c,a);return}}function _(v){const h=Ne(Bt);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!Ri(v)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(m==null?void 0:m.value,v.key);w!==void 0&&w!==m.value&&(m=GN(m,w),Zt(n,E,m))}return o.onDragStart=v=>{c=null,a=null,u(v)},o.onDrag=v=>{u(v)},o.onDragEnd=()=>{c&&a&&mr(c,a,n,!1),c=null},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:v=>{o.pointerMove(v,t)},pointerUp:v=>{o.pointerUp(v,t)},keyDown:v=>{_(v)},keyUp:()=>{}}}var fr=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(fr||{});const N2=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),gp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),S2=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),k2=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),T2=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),M2=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Ou=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),U2=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),xu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Pl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function $2(t,e,n){if(e===f.DIGIT){const r=t.map(a=>a.value),o=N2(t,n),i=gp(t,r);return[o,i]}if(e===f.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),i=S2(t,n),a=k2(t,r,o);return[i,a]}if(e===f.REGIONS){const r=t.map(a=>a.region),o=T2(t,n),i=M2(t,r);return[o,i]}if(e===f.HIGHLIGHTS&&n!==null){const r=xu(t,n),o=xu(t,n);return[r,o]}if(e===f.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),o=xu(t,n),i=Pl(t,r);return[o,i]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n!==null){const r=Ou(t,n,e),o=Ou(t,n,e);return[r,o]}if((e===f.CORNER_PM||e===f.CENTER_PM)&&n===null){let r=[];e===f.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const o=Ou(t,n,e),i=U2(t,r,e);return[o,i]}}function fs(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),Qn.update(o=>o)}function Ei(t){switch(t.type){case fr.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;fs(e,f.DIGIT,n,!0);break}case fr.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;fs(e,f.GIVEN,n,!0);break}case fr.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;fs(e,f.REGIONS,n,!0);break}case fr.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;fs(e,f.HIGHLIGHTS,n,!0);break}case fr.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;fs(e,r,n,!0);break}case fr.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Qn.update(r=>r);break}case fr.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];Qn.update(o=>o);break}case fr.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Qn.update(r=>r);break}case fr.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Qn.update(r=>r);break}case fr.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===f.CENTER_PM?e[o].centerMarks=r[o]:n===f.CORNER_PM&&(e[o].cornerMarks=r[o]);Qn.update(o=>o);break}}}function F2(t,e){return{execute:()=>{Ei(t)},unExecute:()=>{Ei(e)}}}const ui=new Hi;function Nh(t,e){return t.shiftKey?Es.SELECTING:t.ctrlKey||t.metaKey||e?Es.DYNAMIC:t.altKey?Es.DESELECTING:Es.RESETTING}function ad(t,e,n,r,o=!1){switch(e){case f.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case f.DIGIT:return t.filter(a=>!(o&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case f.CORNER_PM:return t.filter(a=>!(o&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case f.CENTER_PM:return t.filter(a=>!(o&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case f.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function G2(t,e){const n=[e,f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],r=o=>o===f.CORNER_PM||o===f.CENTER_PM||o===f.DIGIT;for(const o of n){const i=ad(t,o,"any",-1,r(o));if(i.length)return{tool:o,cells:i}}return{tool:e,cells:[]}}function Au(t,e,n,r){const o=$2(e,n,r);if(o){const i=o[0],a=o[1],c=F2(i,a),u=rd(t),g=[IS(u,u),c];wS(g)}}function P2(t,e,n){const r=[f.DIGIT,f.CORNER_PM,f.CENTER_PM,f.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};ui.onTap=m=>{if(m.tapCount!==2)return;const w=$t(m.cell,o)?m.cell:null;if(!w)return;const b=v2(w,e,n),I=rd(b);di(I)},ui.onDragStart=m=>{const E=$t(m.cell,o),w=Ne(od),b=Nh(m.event,w),I=E?m.cell:null,A=cS(I,b);di(A)},ui.onDrag=m=>{const w=$t(m.cell,o)?m.cell:null,b=dS(w);di(b)};function i(m){if(!rO(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),w=rd(E);return di(w),!0}function a(m){if(!lO(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=uO(m);return Lr(E),!0}return m.type==="keyup"?(OS(),!0):!1}function c(m){if(!aO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),w=r[(E+1)%r.length];return Lr(w),id(w),!0}else{const E=cO(m.code);return Lr(E),id(E),!0}}function u(m){if(!_O(m))return!1;const E=Ne(Po).lastCell;let w=null;if(E!==null){const[A,k]=fO(m),[M,G]=[mh(E.r+k,0,o.nRows-1),mh(E.c+A,0,o.nCols-1)];w={r:M,c:G}}else w={r:0,c:0};const b=Nh(m,!1),I=_S(w,b);return di(I),!0}function _(m){const E=sO(m);if(E===void 0)return!1;const w=Ne(Po).cells,b=[];if(w.forEach(I=>{const A=e.getCell(I.r,I.c);A&&b.push(A)}),E===null){const{tool:I,cells:A}=G2(b,n);if(A.length)return Au(w,A,I,E),!0}else{let I=ad(b,n,"different",E,!0);if(I.length)return Au(w,I,n,E),!0;if(I=ad(b,n,"equal",E,!0),I.length)return Au(w,I,n,E),!0}return!1}function g(m){return m.repeat?!1:_(m.key)}const v=Nt.throttle(m=>{ui.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&ui.pointerDown(m,t)},pointerMove(m){v(m)},pointerUp(m){ui.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(i(m)||u(m)||g(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function W2(t,e,n,r){const o=[Pe.N,Pe.NE,Pe.E,Pe.SE,Pe.S,Pe.SW,Pe.W,Pe.NW],i=new Gl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(h){const m=Ne(ct),E=h.cell;if(!$t(h.cell,a))return;let b=Ne(zt);h.event.altKey&&(b=Le.DELETE);const I=gi(m,n,E),A=vi(h.direction);!I&&b!==Le.DELETE?(c=Ju(n,E,A),u=Nt.uniqueId(),mr(u,c,n,!0)):I&&(I[1].direction===A&&b===Le.ADD_EDIT?([u,c]=I,mo(I[0],n)):I[1].direction===A&&b===Le.DYNAMIC||b===Le.DELETE?hr(I[0],I[1],n):(u=I[0],c={...I[1],direction:A},Zt(n,I[0],c)))}function g(h){if(!oO(h))return;const m=Ne(Bt);if(!m)return;const E=m.id,w=m.constraint;if(!Ho(w.toolId))return;const I=(o.indexOf(w.direction)+1)%o.length;c={...w,direction:o[I]},Zt(n,E,c)}return i.onDragStart=h=>{_(h)},i.onMove=h=>{if(!$t(h.cell,a)){tl.set(void 0);return}const E=vi(h.direction),w=Ju(n,h.cell,E),b=Ne(zt),I=Ne(ct),A=gi(I,n,h.cell);if(!A&&b===Le.DELETE){tl.set(void 0);return}let k="add",M;A&&(b===Le.DELETE||A[1].direction===E&&b===Le.DYNAMIC)&&(k="remove",M=A[0]);const G={tool:w,match_id:M,mode:k};tl.set(G)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:()=>{},keyDown:h=>{g(h)},keyUp:()=>{}}}function H2(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function z2(t,e,n,r){const o=new Gl(r.cornerOrEdge),i={nRows:e.nRows,nCols:e.nCols};let a=null,c=null;function u(g){const v=Ne(ct),h=g.cell;if(!$t(g.cell,i))return;let E=Ne(zt);E===Le.DYNAMIC&&g.event.altKey&&(E=Le.DELETE);const w=vi(g.direction),b=gi(v,n,h);if(!b&&E!==Le.DELETE)a=ed(n,h,w),c=Nt.uniqueId(),mr(c,a,n,!0);else if(b)if(b[1].directions.includes(w)&&E!==Le.DELETE&&([c,a]=b,mo(b[0],n)),b&&E===Le.DELETE)hr(b[0],b[1],n);else{const I=H2(b[1].directions,w);I.length>0?(c=b[0],a={...b[1],directions:I},Zt(n,b[0],a)):hr(b[0],b[1],n)}}return o.onDragStart=g=>{u(g)},o.onMove=g=>{if(!$t(g.cell,i)){nl.set(void 0);return}const h=vi(g.direction),m=ed(n,g.cell,h);if(Ne(zt)===Le.DELETE){nl.set(void 0);return}nl.set(m)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class B2{constructor(e){Ee(this,"onDragStart",null);Ee(this,"onMove",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"_prevCoord",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Ln(e,n);if(!r)return;const o=Ja(r,this._margin);if(!o)return;this._prevCoord=o.edge;const i={event:e,coord:o.edge};this.onDragStart&&this.onDragStart(i)}pointerMove(e,n){const r=Ln(e,n);if(!r)return;const o=Ja(r,this._margin);if(!o||this._prevCoord&&Ze(o.edge,this._prevCoord))return;const i={event:e,coord:o.edge};this._prevCoord=o.edge,this.onMove&&this.onMove(i),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(i)}pointerUp(e,n){const r=Ln(e,n);if(!r)return;const o=Ja(r,this._margin);if(!o)return;const i={event:e,coord:o.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(i)),this._isTap&&this.onTap&&this.onTap(i)}}function Y2(t,e,n,r){const o=new B2,i={nRows:e.nRows,nCols:e.nCols};function a(_){const g=Ne(ct),v=_.coord;let h=Ne(zt);const m=cl(v);if(!m.every(b=>$t(b,i)))return;let w=null;if(w=fh(g,n,m),h===Le.DYNAMIC&&(h=w?Le.DELETE:Le.ADD_EDIT),w&&h===Le.DELETE){const b=w[0];hr(b,w[1],n)}else if(!w&&h===Le.ADD_EDIT){const b=(r==null?void 0:r.defaultValue)??"",I=qu(n,m,b),A=Nt.uniqueId();mr(A,I,n,!0)}else w&&h===Le.ADD_EDIT&&mo(w[0],n)}function c(_){const g=Ne(Bt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Ri(_)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,_.key);m!==void 0&&m!==v.value&&(v=Bs(v,m),Zt(n,h,v))}return o.onDragStart=_=>{a(_)},o.onMove=_=>{if(!$t(_.coord,i)){rl.set(void 0);return}const v=Ne(zt),h=cl(_.coord),m=(r==null?void 0:r.defaultValue)??"",E=qu(n,h,m),w=Ne(Pi);w&&(E.shape={...w});const b=Ne(ct),I=fh(b,n,h);if(!I&&v===Le.DELETE){rl.set(void 0);return}let A="add",k;I&&(v===Le.DYNAMIC||v===Le.DELETE)&&(A="remove",k=I[0]);const M={tool:E,match_id:k,mode:A};rl.set(M)},{pointerDown:_=>{_.button===0&&o.pointerDown(_,t)},pointerMove:_=>{o.pointerMove(_,t)},pointerUp:_=>{o.pointerUp(_,t)},keyDown:_=>{c(_)},keyUp:()=>{}}}class j2{constructor(){Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"onMove",null);Ee(this,"_prevCoord",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Ln(e,n);if(!r)return;const i=this._prevCoord===null?void 0:this._margin,a=Qa(r,i);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){const r=Ln(e,n);if(!r)return;const o=Qa(r,this._margin);if(!o||this._prevCoord&&Ze(o.corner,this._prevCoord))return;const i={event:e,coord:o.corner};this._prevCoord=o.corner,this.onMove&&this.onMove(i),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(i)}pointerUp(e,n){const r=Ln(e,n);if(!r)return;const o=Qa(r,this._margin);if(!o)return;const i={event:e,coord:o.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(i)),this._isTap&&this.onTap&&this.onTap(i)}}function K2(t,e,n,r){const o=new j2,i={nRows:e.nRows,nCols:e.nCols};function a(_){const g=Ne(ct),v=_.coord;let h=Ne(zt);const m=ll(v);if(!m.every(b=>$t(b,i)))return;let w=null;if(w=gh(g,n,v),h===Le.DYNAMIC&&(h=w?Le.DELETE:Le.ADD_EDIT),w&&h===Le.DELETE){const b=w[0];hr(b,w[1],n)}else if(!w&&h===Le.ADD_EDIT){const b=Xu(n,m,r==null?void 0:r.defaultValue),I=Nt.uniqueId();mr(I,b,n,!0)}else w&&h===Le.ADD_EDIT&&mo(w[0],n)}function c(_){const g=Ne(Bt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Ri(_)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,_.key);m!==void 0&&m!==v.value&&(v=Bs(v,m),Zt(n,h,v))}return o.onDragStart=_=>{a(_)},o.onMove=_=>{if(!$t(_.coord,i)){ol.set(void 0);return}const v=Ne(zt),h=ll(_.coord),m=Xu(n,h,r==null?void 0:r.defaultValue),E=Ne(Pi);E&&(m.shape={...E});const w=Ne(ct),b=gh(w,n,_.coord);if(!b&&v===Le.DELETE){ol.set(void 0);return}let I="add",A;b&&(v===Le.DYNAMIC||v===Le.DELETE)&&(I="remove",A=b[0]);const k={tool:m,match_id:A,mode:I};ol.set(k)},{pointerDown:_=>{_.button===0&&o.pointerDown(_,t)},pointerMove:_=>{o.pointerMove(_,t)},pointerUp:_=>{o.pointerUp(_,t)},keyDown:_=>{c(_)},keyUp:()=>{}}}class V2{constructor(){Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"_prevType",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Ln(e,n);if(!r)return;const o=Is(r,Rt.CLOSEST);if(!o)return;const i={coords:o.closest,type:o.type};this._prevType=o.type,this._prevCoords=o.closest,this.onDragStart&&this.onDragStart(i)}pointerMove(e,n){if(!this._isDown)return;const r=Ln(e,n);if(!r)return;const o=Is(r,Rt.CLOSEST);if(!o||this._prevCoords&&Ze(this._prevCoords,o.closest))return;this._isTap=!1;const i={coords:o.closest,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&op(this._prevCoords,o.closest)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(i);else return;this._prevType=o.type,this._prevCoords=o.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Ln(e,n);if(!r)return;const o=Is(r,Rt.CLOSEST);if(!o)return;const i={coords:o.closest,type:o.type};this._isTap&&this._prevCoords&&Ze(this._prevCoords,o.closest)&&(this.onTap&&this.onTap(i),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function X2(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new V2;return r.onTap=i=>{const a=i.coords,c=Ne(gl),u=Ne(fl);if(i.type==="cell center"){if(!AR(a,n))return;const g=u.getCellMarker(a);if(g)if(g.marker==="X"){const v={...a,colorId:c,marker:"O"},h=Ka(v),m=Ka(g),E=ko(h,m);qn(E)}else{const v=wh(a),h=Ka(g),m=ko(v,h);qn(m)}else{const v={...a,colorId:c,marker:"X"},h=Ka(v),m=wh(a),E=ko(h,m);qn(E)}}else if(i.type==="edge"){const _=u.getEdgeMarker(a);if(_){const g=bh(a),v=Ch(_),h=ko(g,v);qn(h)}else{const g={...a,colorId:c},v=Ch(g),h=bh(a),m=ko(v,h);qn(m)}}},r.onDrag=i=>{const a=i.coords,c=Ne(gl);if(i.type==="cell center"||i.type==="corner"){const u={p1:i.prevCoords,p2:a,colorId:c},_=ES(u);Dr(_)}},r.onDragEnd=()=>{const i=Ne(fl);if(i.mode==="add"){const a=i.draftLine.filter(c=>!i.lineMarkers.some(u=>fi(c,u)));if(a.length){const c=Ls(a),u=Ih(a),_=ko(c,u);qn(_)}}else{const a=i.lineMarkers.filter(c=>i.draftLine.some(u=>fi(c,u)));if(a.length){const c=Ih(a),u=Ls(a),_=ko(c,u);qn(_)}}},{blur(){},pointerDown(i){r.pointerDown(i,t)},pointerMove(i){r.pointerMove(i,t)},pointerUp(i){r.pointerUp(i,t)},keyDown(){},keyUp(){}}}function q2(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function Z2(t,e){const n=Gv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function Q2(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function J2(t){for(let e=0;;e++){const n=Q2(e);if(!t.has(n))return n}}function ek(t,e,n){const r=new Hi,o={nRows:e.nRows,nCols:e.nCols};let i=null,a=null,c=null,u=null,_="cells2",g=Ne(zt);function v(m){const E=Ne(ct),w=m.cell;if(!$t(m.cell,o))return;const I=tS(E,n,w);if(I?(c=I[0],i=I[1],g===xn.DYNAMIC&&(g=xn.MOVE),g===xn.MOVE&&(g=xn.MOVE,u=w,_=i.cells2.some(k=>Ze(k,w))?"cells2":"cells")):g===xn.DYNAMIC&&(g=xn.SELECT),g===xn.SELECT&&c===null){c=Nt.uniqueId();const A=nS(E,n),k=J2(A);i=q2(n,[w],k),js(c,i);return}else if(g===xn.SELECT&&c&&i){i=Z2(i,w),Zt(n,c,i);return}else if(g===xn.MOVE&&c&&i&&u){const A={r:w.r-u.r,c:w.c-u.c},M=(_==="cells2"?i.cells2:i.cells).map(z=>({r:z.r+A.r,c:z.c+A.c}));if(!M.every(z=>$t(z,o)))return;_==="cells"?i={...i,cells:M}:i={...i,cells2:M},u=w,Zt(n,c,i)}}return r.onDragStart=m=>{g=Ne(zt),c=null,i=null,u=null,v(m)},r.onDrag=m=>{v(m)},r.onDragEnd=()=>{c&&i&&(g===xn.SELECT?mr(c,i,n):g===xn.MOVE&&sd(c,a,i,n),a=i)},r.onTap=()=>{c&&g!==xn.SELECT&&(qd(n,c),c=null,i=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function tk(t){if(t.type===pe.SELECTION)return function(n,r,o){return P2(n,r,o)};if(t.type===pe.SINGLE_CELL){let e=function(r,o,i){return A2(r,o,i,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_ARROW){let e=function(r,o,i){return W2(r,o,i,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_MULTI_ARROW){let e=function(r,o,i){return z2(r,o,i,n)};const n=t;return e}else if(t.type===pe.EDGE){let e=function(r,o,i){return Y2(r,o,i,n)};const n=t;return e}else if(t.type===pe.CORNER){let e=function(r,o,i){return K2(r,o,i,n)};const n=t;return e}else if(t.type===pe.LINE){let e=function(r,o,i){return m2(r,o,i,n)};const n=t;return e}else if(t.type===pe.ARROW){let e=function(r,o,i){return p2(r,o,i,n)};const n=t;return e}else if(t.type===pe.CAGE){let e=function(r,o,i){return R2(r,o,i,n)};const n=t;return e}else{if(t.type===pe.CLONE)return function(n,r,o){return ek(n,r,o)};if(t.type===pe.CENTER_CORNER_OR_EDGE){let e=function(r,o,i){return L2(r,o,i,n)};const n=t;return e}else if(t.type===pe.OUTSIDE_DIRECTION){let e=function(r,o,i){return D2(r,o,i,n)};const n=t;return e}else if(t.type===pe.PEN)return function(n,r){return X2(n,r)}}}const hp=Br([mi,En,Qt],([t,e,n])=>{const r=pi(n,Pt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const o=r.inputOptions,i=o?tk(o):void 0;return i?i(t,e,n):void 0});It(Le.DYNAMIC);It(An.DYNAMIC);const zt=It(void 0);var nk=ue('<button class="form-button svelte-yu5gtn" role="switch"> </button>'),rk=ue('<div class="tool-buttons svelte-yu5gtn"></div>');function ok(t,e){ae(e,!1);const n=Ve(),r=()=>me(zt,"$toolModeStore",n),o=D(),i=D();let a=U(e,"tool_id",8);function c(v){$o(zt,v)}$o(zt,Xy(a())),N(()=>X(a()),()=>{O(o,Vy(a()))}),N(()=>r(),()=>{O(i,r())}),we(),fe();var u=be(),_=oe(u);{var g=v=>{var h=rk();Je(h,5,()=>Object.values(d(o)),pt,(m,E)=>{var w=nk(),b=Y(w,!0);P(w),Q(()=>{x(w,"aria-checked",d(E)===d(i)),vt(w,"selected",d(E)===d(i)),at(b,d(E))}),ke("click",w,()=>c(d(E))),L(m,w)}),P(h),L(v,h)};J(_,v=>{d(o)&&v(g)})}L(t,u),le()}var ik=ue('<div class="editor-wrapper svelte-rpxajb"><div class="editor svelte-rpxajb"><div class="editor-layout svelte-rpxajb"><!> <!> <!></div></div></div>');function sk(t,e){ae(e,!1);let n=U(e,"tool_id",8);const o=Pt[n()].negative_constraints;fe();var i=ik(),a=Y(i),c=Y(a),u=Y(c);{var _=h=>{var m=be(),E=oe(m);Je(E,1,()=>o,pt,(w,b)=>{d2(w,{get tool_id(){return n()},get neg_tool_id(){return d(b).toolId},get description(){return d(b).description}})}),L(h,m)};J(u,h=>{o&&h(_)})}var g=$(u,2);ok(g,{get tool_id(){return n()}});var v=$(g,2);f2(v,{get tool_id(){return n()}}),P(c),P(a),P(i),L(t,i),le()}var ak=ue('<div class="element-button-wrapper svelte-8ay9bc"><div class="constraints-ui svelte-8ay9bc"><div class="header svelte-8ay9bc"><div class="element-icon-container svelte-8ay9bc"></div> <div class="element-name svelte-8ay9bc"></div> <button class="form-button icon header-button svelte-8ay9bc"><!></button></div> <!></div></div>');function lk(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=()=>me(Qt,"$toolStore",n),i=D();let a=U(e,"tool_id",8),c=U(e,"elementHandlers",8),u=D(!1),_=a();function g(){d(u)?Lr(f.DIGIT):Lr(a())}function v(){xS(a());const G=r().get(a());if(!G)return;const z=r2(a()),T=o2(a(),G),j=Ks(z,T);qn(j)}function h(){var j,ee;const G=(j=d(i).meta)==null?void 0:j.description,z=((ee=d(i).meta)==null?void 0:ee.usage)??Ov(a());let T;return G&&G.length&&(T=G),z.length&&(T?T=T+`

`+z:T=z),T}N(()=>(X(a()),X(c())),()=>{O(i,pi(a(),c()))}),N(()=>(X(a()),o()),()=>{O(u,a()===o())}),we(),fe();var m=ak(),E=Y(m);vt(E,"clickable",!0);var w=Y(E);Q(()=>x(w,"title",h()));var b=$(Y(w),2);b.textContent=_;var I=$(b,2),A=Y(I);jd(A),P(I),P(w);var k=$(w,2);{var M=G=>{sk(G,{get tool_id(){return a()}})};J(k,G=>{d(u)&&G(M)})}P(E),P(m),Q(()=>vt(E,"selected",d(u))),ke("click",I,Gn(v)),ke("click",w,g),L(t,m),le()}var ck=ue("<!> <!> <!>",1);function uk(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=D();let i=U(e,"elementHandlers",8);const a=$y,c=u=>{i2(u),Lr(u)};N(()=>(r(),W),()=>{O(o,(u,_)=>{var h;const g=r().has(u);return!!((h=_.meta)!=null&&h.categories.includes(W.LOCAL_ELEMENT))&&!g})}),we(),fe(),n2(t,{title:"Elements",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return d(o)},get elementHandlers(){return i()},$$slots:{"title-icon":(u,_)=>{a2(u)},"panel-content":(u,_)=>{var g=ck(),v=oe(g),h=it(()=>pi(f.GIVEN,i()));Oh(v,{get elementInfo(){return d(h)}});var m=$(v,2),E=it(()=>pi(f.REGIONS,i()));Oh(m,{get elementInfo(){return d(E)}});var w=$(m,2);Je(w,1,()=>r().entries(),([b,I])=>b,(b,I)=>{let A=()=>d(I)[0];var k=be(),M=oe(k);{var G=z=>{lk(z,{get tool_id(){return A()},get elementHandlers(){return i()}})};J(M,z=>{ky(A())&&z(G)})}L(b,k)}),L(u,g)}}}),le()}var dk=ue('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Lu(t,e){ae(e,!1);const n=D();let r=U(e,"value",8),o=U(e,"onChangeCb",8,void 0),i=D(void 0);function a(m){const E=wu(m);E&&o()&&o()(E)}N(()=>X(r()),()=>{O(n,r())}),N(()=>(d(n),wu),()=>{nd(d(n))&&O(i,wu(d(n)))}),we(),fe();var c=dk(),u=Y(c);const _=it(()=>ep(d(n)));var g=Y(u);fn(g),P(u);var v=$(u,2),h=$(Y(v),2);fn(h),x(h,"spellcheck",!1),x(h,"maxlength",30),P(v),P(c),Q(()=>{x(u,"style",`--choosen-color: ${d(i)??""}`),vt(u,"transparent",d(_))}),Zn(g,()=>d(n),m=>O(n,m)),ke("change",g,()=>a(d(n))),Zn(h,()=>d(n),m=>O(n,m)),ke("input",h,()=>a(d(n))),L(t,c),le()}var _k=ue('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ys(t,e){let n=U(e,"name",8);var r=_k(),o=Y(r),i=Y(o,!0);P(o);var a=$(o,2);gt(a,e,"default",{}),P(r),Q(()=>at(i,n())),L(t,r)}var fk=ue('<input class="control-slider svelte-1rsuho6" type="range">');function gk(t,e){ae(e,!1);let n=U(e,"min",8),r=U(e,"max",8),o=U(e,"value",12),i=U(e,"step",24,()=>(r()-n())/10),a=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);fe();var u=fk();fn(u),Q(()=>{x(u,"min",n()),x(u,"max",r()),x(u,"step",i())}),Zn(u,o),ke("change",u,()=>{a()&&a()(o())}),ke("input",u,()=>{c()&&c()(o())}),L(t,u),le()}function ao(t,e){let n=U(e,"name",8),r=U(e,"value",12),o=U(e,"min",8),i=U(e,"max",8),a=U(e,"step",24,()=>(i()-o())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);ys(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,g)=>{gk(_,{get min(){return o()},get max(){return i()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(v){r(v)},$$legacy:!0})},$$slots:{default:!0}})}var hk=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function vk(t){var e=hk();L(t,e)}var pk=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function mk(t){var e=pk();L(t,e)}var Ek=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function Ck(t){var e=Ek();L(t,e)}var bk=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function wk(t){var e=bk();L(t,e)}var Ik=ue('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function yk(t,e){ae(e,!1);const n=[];let r=U(e,"value",8),o=U(e,"selectedShape",12),i=U(e,"title",8),a=U(e,"updateShapeCb",8,void 0);fe();var c=Ik(),u=Y(c);fn(u);var _,g=$(u,2);gt(g,e,"default",{}),P(c),Q(()=>{x(c,"title",i()),vt(c,"active",r()===o()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),wl(n,[],u,()=>(r(),o()),o),ke("change",u,()=>a()&&a()(r())),L(t,c),le()}var Ok=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function xk(t){var e=Ok(),n=Y(e);x(n,"cx",480),x(n,"cy",-480),x(n,"rx",480),x(n,"ry",300),P(e),L(t,e)}var Ak=ue('<div class="icon-wrapper svelte-18euf14"><!></div>'),Lk=ue('<div class="radio-container svelte-18euf14"></div>');function Dk(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),o=U(e,"possibleShapes",8),i=U(e,"updateShapeCb",8,void 0);const a=new Map([[H.CIRCLE,Ck],[H.ELLIPSE,xk],[H.SQUARE,mk],[H.RECTANGLE,vk],[H.POLYGON,wk]]);fe(),ys(t,{get name(){return n()},children:(c,u)=>{var _=Lk();Je(_,5,o,pt,(g,v)=>{yk(g,{get title(){return d(v)},get value(){return d(v)},get selectedShape(){return r()},get updateShapeCb(){return i()},children:(h,m)=>{var E=be(),w=oe(E);{var b=I=>{var A=Ak(),k=Y(A);Jh(k,()=>a.get(d(v)),(M,G)=>{G(M,{})}),P(A),L(I,A)};J(w,I=>{a.has(d(v))&&I(b)})}L(h,E)},$$slots:{default:!0}})}),P(_),L(c,_)},$$slots:{default:!0}}),le()}var Rk=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function Nk(t){var e=Rk();L(t,e)}var Sk=ue('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),kk=ue("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Tk(t,e){ae(e,!1);const n=Ve(),r=()=>me(Qt,"$toolStore",n),o=()=>me(Bt,"$currentConstraintStore",n),i=D(),a=D(),c=D();let u=D(!0),_=U(e,"elementHandlers",8);function g(b,I){const A=(b==null?void 0:b.shape)??(I?Pu(I):void 0);return yu(A),A}function v(b,I){d(c)&&(Gu(c,d(c)[b]=I),yu(d(c)))}function h(){d(a)&&(O(c,Pu(d(a))),yu(d(c)))}function m(b){return b&&[H.CIRCLE,H.SQUARE,H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function w(b){return b&&[H.ELLIPSE,H.RECTANGLE].includes(b)}N(()=>(r(),X(_())),()=>{O(i,pi(r(),_()))}),N(()=>d(i),()=>{O(a,d(i).shape)}),N(()=>(o(),d(a)),()=>{var b;O(c,g(((b=o())==null?void 0:b.constraint)??null,d(a)))}),we(),fe(),Fl(t,{get isOpen(){return d(u)},set isOpen(b){O(u,b)},$$slots:{"panel-header":(b,I)=>{$l(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return d(u)},set isOpen(A){O(u,A)},$$slots:{"title-icon":(A,k)=>{Nk(A)}},$$legacy:!0})},"panel-content":(b,I)=>{var A=be(),k=oe(A);{var M=G=>{var z=kk(),T=oe(z);{var j=Ge=>{var Oe=Sk();ke("click",Oe,h),L(Ge,Oe)};J(T,Ge=>{Fy(d(a))&&Ge(j)})}var ee=$(T,2);{var ce=Ge=>{Dk(Ge,{get possibleShapes(){return d(a).allowedTypes},name:"Shape",get selectedShape(){return d(c).type},updateShapeCb:Oe=>v("type",Oe)})};J(ee,Ge=>{var Oe;d(a).allowedTypes&&d(a).allowedTypes.length&&((Oe=d(c))!=null&&Oe.type)&&Ge(ce)})}var Z=$(ee,2);{var ne=Ge=>{var Oe=it(()=>d(a).n.lb??3),Ue=it(()=>d(a).n.ub??10);ao(Ge,{name:"Number of Sides",get value(){return d(c).n},get min(){return d(Oe)},get max(){return d(Ue)},step:1,onChangeCb:Fe=>v("n",Fe)})};J(Z,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.n)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.n)!=null&&Fe.editable)&&E(d(c).type)&&Ge(ne)})}var he=$(Z,2);{var re=Ge=>{var Oe=it(()=>d(a).r.lb??0),Ue=it(()=>d(a).r.ub??1),Fe=it(()=>d(a).r.step??.05);ao(Ge,{name:"Radius",get value(){return d(c).r},get min(){return d(Oe)},get max(){return d(Ue)},get step(){return d(Fe)},onChangeCb:St=>v("r",St)})};J(he,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.r)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.r)!=null&&Fe.editable)&&m(d(c).type)&&Ge(re)})}var ge=$(he,2);{var Ie=Ge=>{var Oe=it(()=>d(a).width.lb??0),Ue=it(()=>d(a).width.ub??1),Fe=it(()=>d(a).width.step??.05);ao(Ge,{name:"Width",get value(){return d(c).width},get min(){return d(Oe)},get max(){return d(Ue)},get step(){return d(Fe)},onChangeCb:St=>v("width",St)})};J(ge,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.width)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.width)!=null&&Fe.editable)&&w(d(c).type)&&Ge(Ie)})}var ye=$(ge,2);{var Me=Ge=>{var Oe=it(()=>d(a).height.lb??0),Ue=it(()=>d(a).height.ub??1),Fe=it(()=>d(a).height.step??.05);ao(Ge,{name:"Height",get value(){return d(c).height},get min(){return d(Oe)},get max(){return d(Ue)},get step(){return d(Fe)},onChangeCb:St=>v("height",St)})};J(ye,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.height)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.height)!=null&&Fe.editable)&&w(d(c).type)&&Ge(Me)})}var Se=$(ye,2);{var Xe=Ge=>{var Oe=it(()=>d(a).angle.lb??0),Ue=it(()=>d(a).angle.ub??360),Fe=it(()=>d(a).angle.step??15);ao(Ge,{name:"Angle",get value(){return d(c).angle},get min(){return d(Oe)},get max(){return d(Ue)},get step(){return d(Fe)},onChangeCb:St=>v("angle",St)})};J(Se,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.angle)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.angle)!=null&&Fe.editable)&&Ge(Xe)})}var qe=$(Se,2);{var mt=Ge=>{var Oe=it(()=>d(a).inset.lb??0),Ue=it(()=>d(a).inset.ub??.5),Fe=it(()=>d(a).inset.step??.01);ao(Ge,{name:"Inset",get value(){return d(c).inset},get min(){return d(Oe)},get max(){return d(Ue)},get step(){return d(Fe)},onChangeCb:St=>v("inset",St)})};J(qe,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.inset)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.inset)!=null&&Fe.editable)&&Ge(mt)})}var Lt=$(qe,2);{var Wt=Ge=>{ys(Ge,{name:"Stroke",children:(Oe,Ue)=>{Lu(Oe,{get value(){return d(c).stroke},onChangeCb:Fe=>v("stroke",Fe)})},$$slots:{default:!0}})};J(Lt,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.stroke)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.stroke)!=null&&Fe.editable)&&Ge(Wt)})}var yt=$(Lt,2);{var Ot=Ge=>{var Oe=it(()=>d(a).strokeWidth.lb??0),Ue=it(()=>d(a).strokeWidth.ub??.8),Fe=it(()=>d(a).strokeWidth.step??.01);ao(Ge,{name:"Stroke Width",get value(){return d(c).strokeWidth},get min(){return d(Oe)},get max(){return d(Ue)},get step(){return d(Fe)},onChangeCb:St=>v("strokeWidth",St)})};J(yt,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.strokeWidth)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.strokeWidth)!=null&&Fe.editable)&&Ge(Ot)})}var Yt=$(yt,2);{var Dn=Ge=>{var Oe=it(()=>d(a).strokeDasharray.lb??0),Ue=it(()=>d(a).strokeDasharray.ub??1),Fe=it(()=>d(a).strokeDasharray.step??.01);ao(Ge,{name:"Stroke Dasharray",get value(){return d(c).strokeDasharray},get min(){return d(Oe)},get max(){return d(Ue)},get step(){return d(Fe)},onChangeCb:St=>v("strokeDasharray",St)})};J(Yt,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.strokeDasharray)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.strokeDasharray)!=null&&Fe.editable)&&Ge(Dn)})}var lr=$(Yt,2);{var Eo=Ge=>{ys(Ge,{name:"Fill",children:(Oe,Ue)=>{Lu(Oe,{get value(){return d(c).fill},onChangeCb:Fe=>v("fill",Fe)})},$$slots:{default:!0}})};J(lr,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.fill)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.fill)!=null&&Fe.editable)&&Ge(Eo)})}var Rr=$(lr,2);{var Nr=Ge=>{ys(Ge,{name:"Font Color",children:(Oe,Ue)=>{Lu(Oe,{get value(){return d(c).fontColor},onChangeCb:Fe=>v("fontColor",Fe)})},$$slots:{default:!0}})};J(Rr,Ge=>{var Oe,Ue,Fe;((Oe=d(c))==null?void 0:Oe.fontColor)!==void 0&&((Fe=(Ue=d(a))==null?void 0:Ue.fontColor)!=null&&Fe.editable)&&Ge(Nr)})}L(G,z)};J(k,G=>{d(a)&&G(M)})}L(b,A)}},$$legacy:!0}),le()}var Mk=ue('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function Vs(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var o=Mk(),i=Y(o),a=Y(i);gt(a,e,"default",{}),P(i),P(o),Q(()=>x(o,"title",r())),ke("click",o,Gn(function(...c){var u;(u=n())==null||u.apply(this,c)})),L(t,o)}var Uk=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function $k(t){var e=Uk();L(t,e)}var Fk=ue('<div class="buttons-container svelte-kc00rw"><!></div>');function Wl(t,e){var n=Fk(),r=Y(n);gt(r,e,"default",{}),P(n),L(t,n)}var Gk=ue('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),Pk=ue('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),Wk=ue('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function Hk(t,e){ae(e,!1);const n=Ve(),r=()=>me(Xr,"$puzzleMetaStore",n),o=()=>me(Ml,"$globalConstraintsStore",n),i=()=>me(ct,"$localConstraintsStore",n);let a=U(e,"showModal",12,!1),c=D(""),u=D(""),_=D(""),g=D(""),v=D("");function h(){a(!1)}function m(){const I=d(u)?E(d(u)):["Anonymous"],k={title:d(c)?d(c):"Sudoku",authors:I,ruleset:d(_),ctcYoutubeUrl:d(g),ctcUrl:d(v)};yS(k),a(!1)}function E(I){return I.split(/\s*[;]\s*/)}function w(){var z,T,j,ee;let I="";const A=Pt,k=o();!!k.get(f.SUDOKU_RULES_DO_NOT_APPLY)?I+=`Sudoku rules do not apply.

`:I+=`Sudoku rules apply.

`;for(const[ce,Z]of k.entries())if(ce!==f.SUDOKU_RULES_DO_NOT_APPLY&&Z){const ne=A[ce],he=((z=ne.menu)==null?void 0:z.name)??ne.toolId,re=(T=ne.meta)==null?void 0:T.description;I+=`**${he}**: ${re}

`}const G=i();for(const[ce,Z]of G.entries())if(Object.keys(Z).length>0){const he=A[ce],re=((j=he.menu)==null?void 0:j.name)??he.toolId,ge=(ee=he.meta)==null?void 0:ee.description;I+=`**${re}**: ${ge}

`}return I.trim()}function b(){const I=w();O(_,I)}N(()=>(X(a()),r(),dl),()=>{if(!a()){const I=r().authors;O(c,r().title??""),O(u,I?dl(I,"; ","; "):""),O(_,r().ruleset??""),O(g,r().ctcYoutubeUrl??""),O(v,r().ctcUrl??"")}}),we(),fe(),qr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(I){a(I)},children:(I,A)=>{var k=Wk(),M=Y(k);co(M,{title:"Title"});var G=$(M,2);fn(G);var z=$(G,2);co(z,{title:"Authors"});var T=$(z,2);fn(T);var j=$(T,2);co(j,{title:"Ruleset",children:(ge,Ie)=>{var ye=Gk();ke("click",ye,b),L(ge,ye)},$$slots:{default:!0}});var ee=$(j,2);qI(ee),x(ee,"rows",8);var ce=$(ee,2);co(ce,{title:"CTC Link"});var Z=$(ce,2);fn(Z);var ne=$(Z,2);co(ne,{title:"CTC Youtube Link"});var he=$(ne,2);fn(he);var re=$(he,2);Wl(re,{children:(ge,Ie)=>{var ye=Pk(),Me=oe(ye),Se=$(Me,2);ke("click",Me,m),ke("click",Se,h),L(ge,ye)},$$slots:{default:!0}}),P(k),Zn(G,()=>d(c),ge=>O(c,ge)),Zn(T,()=>d(u),ge=>O(u,ge)),Zn(ee,()=>d(_),ge=>O(_,ge)),Zn(Z,()=>d(v),ge=>O(v,ge)),Zn(he,()=>d(g),ge=>O(g,ge)),L(I,k)},$$slots:{default:!0},$$legacy:!0}),le()}var zk=ue("<!> <!>",1);function Bk(t){let e=D(!1);function n(){O(e,!0)}var r=zk(),o=oe(r);Vs(o,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{$k(a)},$$slots:{default:!0}});var i=$(o,2);Hk(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var Yk=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function jk(t){var e=Yk();L(t,e)}var Kk=ue('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function Vk(t,e){ae(e,!1);let n=D(null),r=D(null);function o(){var i;(i=d(n))==null||i.click()}N(()=>(d(r),hl),()=>{if(d(r)&&d(r).length){const i=d(r)[0],a=new FileReader;a.readAsText(i),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),g=lS(_);console.log(g),DS(g),hl()}},a.onerror=function(){alert(a.error)}}}),we(),fe(),Vs(t,{title:"Open Puzzle",clickCb:o,children:(i,a)=>{var c=Kk(),u=oe(c);jk(u);var _=$(u,2);Fo(_,g=>O(n,g),()=>d(n)),xy(_,()=>d(r),g=>O(r,g)),L(i,c)},$$slots:{default:!0}}),le()}var Xk=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function qk(t){var e=Xk();L(t,e)}var Zk=ue('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Sh(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"min",8),o=U(e,"max",8),i=U(e,"value",12),a=U(e,"step",24,()=>(o()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);fe();var _=Zk(),g=Y(_),v=Y(g);P(g);var h=$(g,2);fn(h),P(_),Q(()=>{at(v,`${n()??""}: ${i()??""}`),x(h,"min",r()),x(h,"max",o()),x(h,"step",a())}),Zn(h,i),ke("change",h,()=>{c()&&c()(i())}),ke("input",h,()=>{u()&&u()(i())}),L(t,_),le()}var Qk=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),Jk=ue('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function eT(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);const r=4,o=20;let i=D(9),a=D(9),c=D(""),u=D(Nt.range(1,10));function _(){n(!1)}function g(){hl(),LS(d(a),d(i),d(u).sort()),n(!1)}function v(E){return E.map(b=>String(b)).join(",")}function h(){const E=Math.min(Math.max(d(a),d(i)),9);O(u,Nt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&O(u,E.replaceAll(" ","").split(",").map(Number))}fe(),qr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,w)=>{var b=Jk(),I=Y(b);Sh(I,{name:"Width",min:r,max:o,step:1,onInputCb:h,get value(){return d(i)},set value(T){O(i,T)},$$legacy:!0});var A=$(I,2);Sh(A,{name:"Height",min:r,max:o,step:1,onInputCb:h,get value(){return d(a)},set value(T){O(a,T)},$$legacy:!0});var k=$(A,2),M=it(()=>`Allowed Digits (for the solver): ${v(d(u))}`);co(k,{get title(){return d(M)}});var G=$(k,2);fn(G),Q(()=>x(G,"placeholder",v(d(u))));var z=$(G,2);Wl(z,{children:(T,j)=>{var ee=Qk(),ce=oe(ee),Z=$(ce,2);ke("click",ce,g),ke("click",Z,_),L(T,ee)},$$slots:{default:!0}}),P(b),Zn(G,()=>d(c),T=>O(c,T)),ke("input",G,()=>m(d(c))),L(E,b)},$$slots:{default:!0},$$legacy:!0}),le()}var tT=ue("<!> <!>",1);function nT(t){let e=D(!1);function n(){O(e,!0)}var r=tT(),o=oe(r);Vs(o,{title:"New Puzzle",clickCb:n,children:(a,c)=>{qk(a)},$$slots:{default:!0}});var i=$(o,2);eT(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var rT=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function oT(t){var e=rT();L(t,e)}var iT=ue('<button class="modal-button">Cancel</button>'),sT=ue('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function aT(t,e){ae(e,!1);const n=Ve(),r=()=>me(mi,"$svgRefStore",n),o=()=>me(Xr,"$puzzleMetaStore",n),i=()=>me(Ys,"$puzzleStore",n),a=D();let c=U(e,"showModal",12,!1);function u(b){const I=getComputedStyle(b);let A="";for(let k of I){const M=I.getPropertyValue(k);M&&(A+=`${k}:${M};`)}return A}function _(b){const I=b.cloneNode(!0);(I instanceof SVGElement||I instanceof HTMLElement)&&(I.style.cssText=u(b));const A=b.childNodes;for(let k=0;k<A.length;k++){const M=A[k];if(M instanceof Element){const G=_(M);I.replaceChild(G,I.childNodes[k])}}return I}function g(b){if(!b)return;const I=_(b),A=_l(o()),M=new XMLSerializer().serializeToString(I),G=new Image,z=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),T=URL.createObjectURL(z);G.onload=()=>{const j=b.getBoundingClientRect(),ee=j.width,ce=j.height,Z=document.createElement("canvas"),ne=window.devicePixelRatio||1;Z.width=ee*ne,Z.height=ce*ne;const he=Z.getContext("2d");he&&(he.scale(ne,ne),he.drawImage(G,0,0,ee,ce),Z.toBlob(re=>{if(!re)return;const ge=URL.createObjectURL(re),Ie=document.createElement("a");Ie.href=ge,Ie.download=A,Ie.click(),URL.revokeObjectURL(ge)}))},G.src=T}function v(b,I="download.svg"){if(!b)return;const A=_(b);let M=new XMLSerializer().serializeToString(A);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const G=new Blob([M],{type:"image/svg+xml"}),z=URL.createObjectURL(G),T=document.createElement("a");T.href=z,T.download=I,T.click(),URL.revokeObjectURL(z)}const h=b=>{const I=aS(i());return JSON.stringify(I,null,b)},m=()=>{function b(k,M,G){var z=document.createElement("a"),T=new Blob([k],{type:G});z.href=URL.createObjectURL(T),z.download=M,z.click(),URL.revokeObjectURL(z.href)}const I=h(2),A=_l(o());b(I,`${A}.json`,"text/plain")};function E(){c(!1)}const w=1;N(()=>r(),()=>{O(a,r())}),we(),fe(),qr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,I)=>{var A=sT(),k=Y(A),M=Y(k),G=Y(M),z=$(G,2),T=$(z,2);P(M);var j=$(M,2),ee=$(Y(j),2),ce=Y(ee);x(ce,"width",400*w),x(ce,"height",300*w),P(ee),P(j),P(k);var Z=$(k,2);Wl(Z,{children:(ne,he)=>{var re=iT();ke("click",re,E),L(ne,re)},$$slots:{default:!0}}),P(A),ke("click",G,m),ke("click",z,()=>g(d(a))),ke("click",T,()=>v(d(a))),L(b,A)},$$slots:{default:!0},$$legacy:!0}),le()}var lT=ue("<!> <!>",1);function cT(t){let e=D(!1);function n(){O(e,!0)}var r=lT(),o=oe(r);Vs(o,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{oT(a)},$$slots:{default:!0}});var i=$(o,2);aT(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var uT=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function vp(t){var e=uT();L(t,e)}var dT=ue('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),_T=ue('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Va(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var o=_T(),i=Y(o);co(i,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=$(i,2);Kd(a,{get isOpen(){return r()},children:(c,u)=>{var _=dT(),g=Y(_);gt(g,e,"default",{}),P(_),L(c,_)},$$slots:{default:!0}}),P(o),L(t,o)}var fT=ue('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function gT(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),o=U(e,"disabled",8,!1);var i=fT(),a=Y(i);fn(a),_o(2),P(i),Q(()=>{vt(i,"disabled",o()),Cy(a,n()),a.disabled=o()}),ke("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),L(t,i)}var hT=ue('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function lo(t,e){ae(e,!1);let n=U(e,"value",8),r=U(e,"name",8),o=U(e,"updateCb",8,void 0),i=U(e,"disabled",8,!1);function a(){i()||o()&&o()(!n())}fe();var c=hT(),u=Y(c);gT(u,{get value(){return n()},onClickCb:a,get disabled(){return i()}});var _=$(u,2),g=Y(_,!0);P(_),P(c),Q(()=>{vt(c,"disabled",i()),at(g,r())}),ke("click",_,Gn(a)),L(t,c),le()}var vT=ue("<!> <!>",1),pT=ue("<!> <!> <!>",1),mT=ue("<!> <!>",1),ET=ue('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function pp(t,e){ae(e,!1);const n=Ve(),r=()=>me(ho,"$settingsStore",n),o=()=>me(Tl,"$gameModeStore",n),i=D();let a=U(e,"showModal",12,!1);N(()=>r(),()=>{O(i,r())}),we(),fe(),qr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=ET(),g=Y(_);Va(g,{title:"General",children:(w,b)=>{lo(w,{get value(){return d(i).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:uy})},$$slots:{default:!0}});var v=$(g,2);Va(v,{title:"Tools",children:(w,b)=>{var I=vT(),A=oe(I);lo(A,{get value(){return d(i).penToolActive},name:"Pen Tool",updateCb:dy});var k=$(A,2);lo(k,{disabled:!0,get value(){return d(i).letterToolActive},name:"Letter Tool",updateCb:_y}),L(w,I)},$$slots:{default:!0}});var h=$(v,2);Va(h,{title:"Gameplay",children:(w,b)=>{var I=pT(),A=oe(I);lo(A,{name:"Check Conflicts",get value(){return d(i).checkConflicts},updateCb:fy});var k=$(A,2);lo(k,{name:"Highlight Pencilmark Conflicts",get value(){return d(i).highlightPencilmarkConflicts},updateCb:gy});var M=$(k,2);lo(M,{name:"Highlight Cells Seen By Selection",get value(){return d(i).highlightCellsSeenBySelection},updateCb:hy}),L(w,I)},$$slots:{default:!0}});var m=$(h,2);{var E=w=>{Va(w,{title:"Setting Mode Display",children:(b,I)=>{var A=mT(),k=oe(A);lo(k,{name:"Hide Fog",get value(){return d(i).hideFog},updateCb:vy});var M=$(k,2);lo(M,{name:"Show Solution",get value(){return d(i).showSolution},updateCb:py}),L(b,A)},$$slots:{default:!0}})};J(m,w=>{o()===bi.SETTING&&w(E)})}P(_),L(c,_)},$$slots:{default:!0},$$legacy:!0}),le()}var CT=ue("<!> <!>",1);function bT(t){let e=D(!1);function n(){O(e,!0)}var r=CT(),o=oe(r);Vs(o,{title:"Settings",clickCb:n,children:(a,c)=>{vp(a)},$$slots:{default:!0}});var i=$(o,2);pp(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var wT=ue('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function IT(t){var e=wT(),n=Y(e);nT(n);var r=$(n,2);cT(r);var o=$(r,2);Vk(o,{});var i=$(o,2);Bk(i);var a=$(i,2);bT(a),P(e),L(t,e)}var yT=ue('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function OT(t,e){ae(e,!1);let n=D(!1);function r(){const o=Ne(En),i=[];for(let a=0;a<o.nRows;a++){const c=[];for(let u=0;u<o.nCols;u++){const _=o.getCell(a,u);if(!_)continue;const g=_.value;c.push(g)}i.push(c)}Yd(i)}fe(),Fl(t,{get isOpen(){return d(n)},set isOpen(o){O(n,o)},$$slots:{"panel-header":(o,i)=>{$l(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return d(n)},set isOpen(a){O(n,a)},$$legacy:!0})},"panel-content":(o,i)=>{var a=yT();ke("click",a,r),L(o,a)}},$$legacy:!0}),le()}const xT={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function AT(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],i=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[i,o]};if(o==="<"||o==="<=")return{upper_bound:[i,o]}}if(r=n.exec(t),r){const o=r[1],i=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[i,o==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function LT(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function DT(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function RT(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function mp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function NT(t,e){const n=LT(t);if(n)return{type:"number",parsed:parseInt(n)};const r=DT(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=RT(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const i=AT(t);if(e.allow_interval&&i)return{type:"interval",parsed:i};const a=mp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var K=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(K||{});function ut(t,e){return`${e}[${t.r},${t.c}]`}function Bi(t,e){return t.map(r=>ut(r,e))}function Ce(t,e){return"["+Bi(t,e).join(",")+"]"}function Ae(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function Ct(t){return t.map(n=>Ae(n))}function Mo(t){return`constraint alldifferent([${t.join(",")}]);
`}function Mt(t,e){return t&&(t=`
% ${e}
`+t),t}function Qd(t,e){const n=[Pe.N,Pe.S,Pe.W,Pe.E],r=[];for(const o of n){const i=t.getCellsInDirection(e.r,e.c,o);r.push(i)}return r}function Jd(t,e,n=void 0){n||(n=[Pe.N,Pe.S,Pe.W,Pe.E]);const r=[];for(const o of n){const i=t.getCellsInDirection(e.r,e.c,o),a="["+Ct(i).join(",")+"]";r.push(a)}return r}function He(t,e,n,r){let o="";const i=n.constraints;if(!i)return o;for(const[a,c]of Object.entries(i)){const u=r(t,e,a,c);o+=u}return o}function ir(t,e,n,r){let o="";const i=n.tool_id,a=r.get(i);if(a){const c=a(t,e,n);o+=c}return o}class ST{constructor(e){Ee(this,"model_str","");Ee(this,"used_vars");Ee(this,"puzzle");Ee(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=xT){const o=NT(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let i="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(i+=`var int: ${c};
`,this.addVariable(c)),[i,c]}if(!n)return null;if(this.hasVariable(n)||(i+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];i+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];i+=`constraint ${n} ${_} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";i+=`constraint member(${u}, ${n});
`}if(o.type==="var_list"){const c=o.parsed,u="["+c.join(",")+"]";for(const _ of c){const g=parseInt(_);Number.isNaN(g)&&!this.hasVariable(_)&&(i+=`var int: ${_};
`,this.addVariable(_))}i+=`constraint member(${u}, ${n});
`}return[i,n]}}function kT(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,i=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,_=0,g=0;for(let I=0;I<e.length;I++){const A=e[I].trim(),k=A.match(r),M=A.match(o),G=A.match(i),z=A.match(a);if(!c&&(k||M||G||z)){c={name:(k||M||G||z)[1],startLine:I,content:[e[I]],type:k?"function":M?"predicate":G?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,_=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[I]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,_+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&_===0&&g===0&&A.endsWith(";"))){n[c.name]={...c,endLine:I};let T=c.startLine;for(;T>0&&e[T-1].trim().startsWith("%");)T-=1;n[c.name].startLine=T,c=null}}function v(I){const A=[],k=I.match(r),M=I.match(o),G=I.match(i);for(const z of Object.keys(n)){const T=n[z].type;if(T==="function"||T==="test"||T==="predicate"){if(k||M||G)continue;new RegExp(`\\b${z}\\s*\\(`,"g").test(I)&&A.push(z)}else if(T==="variable"){const j=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${z}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(I.match(j))continue;new RegExp(`\\b${z}\\b`,"g").test(I)&&A.push(z)}}return A}const h=new Set;for(const I of e)v(I).forEach(k=>h.add(k));const m=Object.values(n).filter(I=>!h.has(I.name)).map(I=>({start:I.startLine,end:I.endLine}));m.sort((I,A)=>A.start-I.start);const E=[...e];for(const I of m)E.splice(I.start,I.end-I.start+1);const w=[];let b=!1;for(const I of E)I.trim()===""?b||(w.push(I),b=!0):(w.push(I),b=!1);return w.join(`
`)}function kh(t){let e=t,n=e.length;for(;e=kT(e),e.length!=n;)n=e.length;return e}function Ep(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function TT(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),o=Math.max(...n),i=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const g=e.getCell(c,_);!g||g.region===null?u.push(r-1):u.push(g.region)}i.push(u)}const a=Ep(i);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${o}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function e_(t){const e=new Map;for(const n of t){const r=n.value??"",o=e.get(r);if(!o){e.set(r,[n]);continue}o.push(n)}return e}function tn(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*Zr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Xs(t,e){return[...Object.values(t)].find(o=>{const i=o.cell;if(e.c===i.c&&e.r===i.r)return o})}function Cp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function bp(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function t_(t,e,n,r){const o=t.grid;let i="";if(!!!t.elementsDict.get(f.CHAOS_CONSTRUCTION)){i+=`
% Exactly ${e} per region 
`;const u=o.getUsedRegions();for(const _ of u){const g=o.getRegion(_),v=Ce(g,r);i+=`constraint count_eq(${v}, ${n}, ${e});
`}}return i}function hi(t,e,n,r){let o=Cp(e,n,r);return o+=bp(e,n,r),o+=t_(t,e,n,r),o}function MT(t,e){const r=t.puzzle.grid,o=e.tool_id,i=r.getPositiveDiagonal(),a=Ct(i);let c=`
% ${o}
`;return c+=Mo(a),c}function UT(t,e){const r=t.puzzle.grid,o=e.tool_id,i=r.getNegativeDiagonal(),a=Ct(i);let c=`
% ${o}
`;return c+=Mo(a),c}function $T(t,e){const r=t.puzzle.grid,o=e.tool_id,i=r.getPositiveDiagonal(),c="["+Ct(i).join(",")+"]";let u=`
% ${o}
`;return u+=`constraint count_unique_values(${c}) == 3;
`,u}function FT(t,e){const r=t.puzzle.grid,o=e.tool_id,i=r.getNegativeDiagonal(),c="["+Ct(i).join(",")+"]";let u=`
% ${o}
`;return u+=`constraint count_unique_values(${c}) == 3;
`,u}function GT(t,e){const r=t.puzzle.grid,o=e.tool_id,[i,a]=[r.nRows,r.nCols];if(i!==a)return"";let c=`
% ${o}
`;const u=r.getPositiveDiagonal();for(const _ of u){const[g,v]=[_.r,_.c];for(let h=0;h<g;h++){const m=r.getCell(h,v),E=r.getCell(g,v+(g-h));if(!m||!E)continue;const w=Ae(m),b=Ae(E),A=`constraint is_unimodular_line(${`[${w}, ${b}]`}, 2);
`;c+=A}}return c}function PT(t,e){const r=t.puzzle.grid,o=e.tool_id,[i,a]=[r.nRows,r.nCols];if(i!==a)return"";let c=`
% ${o}
`;const u=r.getNegativeDiagonal();for(const _ of u){const[g,v]=[_.r,_.c];for(let h=0;h<g;h++){const m=r.getCell(h,v),E=r.getCell(g,v-(g-h));if(!m||!E)continue;const w=Ae(m),b=Ae(E),A=`constraint is_unimodular_line(${`[${w}, ${b}]`}, 2);
`;c+=A}}return c}function WT(t,e){const r=t.puzzle.grid;let i=`
% ${e.tool_id}
`;const a=[...r.getUsedRegions()].length;for(let c=0;c<a;c++){const u=r.getDisjointGroup(c),v=`constraint alldifferent(${`[${Ct(u).join(",")}]`});
`;i+=v}return i}function HT(t,e){const r=t.puzzle.grid;let i=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getNeighboorCells(a).filter(m=>m.r+m.c>=a.r+a.c),_=Ae(a),v=`[${Ct(u).join(",")}]`,h=`constraint different_from_group_p(${_}, ${v});
`;i+=h}return i}function zT(t,e){const r=t.puzzle.grid;let i=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const u=r.getCellsByKnightMove(a).filter(m=>m.r>=a.r||m.c>=a.c),_=Ae(a),v=`[${Ct(u).join(",")}]`,h=`constraint different_from_group_p(${_}, ${v});
`;i+=h}return i}function BT(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_giraffe_p(board);
`,r=Mt(r,`${n}`),r}function YT(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_long_knight_p(board);
`,r=Mt(r,`${n}`),r}function jT(t,e){const n=e.tool_id;let r="";return r+=`constraint tango_p(board);
`,r=Mt(r,`${n}`),r}function KT(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_entropy_p(board);
`,r=Mt(r,`${n}`),r}function VT(t,e){const r=t.puzzle.grid;let i=`
% ${e.tool_id}
`;for(const[a,c]of Zr(r)){const u=Ae(a),_=Ae(c),g=`constraint not consecutive_p(${u}, ${_});
`;i+=g}return i}function XT(t,e){const r=t.puzzle.grid;let i=`
% ${e.tool_id}
`;for(const[a,c]of Zr(r)){const u=Ae(a),_=Ae(c),g=`constraint not ratio_p(${u}, ${_}, 2);
`;i+=g}return i}function qT(t,e){const r=t.puzzle.grid;let i=`
% ${e.tool_id}
`;for(const a of r.getAllCells()){const c=r.getRow(a.r),_=`[${Ct(c).join(",")}]`,g=a.c+1,v=`constraint indexing_column_p(${_}, ${g});
`;i+=v}return i}function ZT(t,e){const n=e.tool_id;let r="";return r+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,r+=`constraint odd_even_grid_p(board, even_odd_grid);
`,r+=`constraint connected_region(even_odd_grid, 1);
`,r=Mt(r,`${n}`),r}function QT(t,e){const n=e.tool_id;let r="";return r+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,r=Mt(r,`${n}`),r}function JT(t,e){const n=e.tool_id;let r="";return r+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,r=Mt(r,`${n}`),r}function e3(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;let i="";const a=n.grid.getUsedRegions();for(const c of a){const u=r.getRegion(c),_=[...new Set(u.map(v=>v.r))],g=[...new Set(u.map(v=>v.c))];for(const v of g){const h=u.filter(E=>E.c===v),m=Ce(h,K.BOARD);i+=`constraint entropy_and_modularity_set_p(${m});
`}for(const v of _){const h=u.filter(E=>E.r===v),m=Ce(h,K.BOARD);i+=`constraint entropy_and_modularity_set_p(${m});
`}}return i=Mt(i,`${o}`),i}function t3(t){const e=t.elementsDict;if(!!e.get(f.SUDOKU_RULES_DO_NOT_APPLY))return"";const r=t.grid;let o="";o+=`
% row constraints (digits do not repeat on rows)
`;const i=r.nRows;for(let u=0;u<i;u++){const _=r.getRow(u),g=Ct(_),v=Mo(g);o+=v}o+=`
% col constraints (digits do not repeat on cols)
`;const a=r.nCols;for(let u=0;u<a;u++){const _=r.getCol(u),g=Ct(_),v=Mo(g);o+=v}if(!!!e.get(f.CHAOS_CONSTRUCTION)){o+=`
% region constraints (digits do not repeat on regions)
`;const u=r.getUsedRegions();for(const _ of u){const g=r.getRegion(_),v=Ct(g),h=Mo(v);o+=h}}return o}function n3(t){const e=t.elementsDict,n=f.HEXED_SUDOKU;if(!!!e.get(n))return"";let o=`
% ${n}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const r3=new Map([[f.POSITIVE_DIAGONAL,MT],[f.NEGATIVE_DIAGONAL,UT],[f.POSITIVE_ANTIDIAGONAL,$T],[f.NEGATIVE_ANTIDIAGONAL,FT],[f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,GT],[f.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,PT],[f.ANTIKING,HT],[f.ANTIKNIGHT,zT],[f.ANTI_LONG_KNIGHT,YT],[f.ANTI_GIRAFFE,BT],[f.DISJOINT_GROUPS,WT],[f.TANGO,jT],[f.NONCONSECUTIVE,VT],[f.NONRATIO,XT],[f.ANTI_ENTROPY,KT],[f.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,e3],[f.GLOBAL_INDEXING_COLUMN,qT],[f.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,ZT],[f.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,QT],[f.YIN_YANG_FILLOMINO_PARITY,JT]]);function o3(t,e){let n="";const r=e.tool_id,o=r3.get(r);if(o){const i=o(t,e);n+=i}return n}function wp(t,e){const r=e.cells.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return Ct(r)}function Ip(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return`[${Ct(n.slice(1)).join(",")}]`}function yp(t,e,n){let r="";const i="["+wp(t,e).join(",")+"]";for(const a of e.lines){const c=Ip(t,a);r+=`constraint ${n}(${i}, ${c});
`}return r}function Op(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=yp(t,i,n);r+=a}return r}function i3(t,e,n){return Op(e,n,"arrow_p")}function s3(t,e,n){return Op(e,n,"bulbous_arrow_p")}function a3(t,e,n,r){let o="";const i=wp(e,r);if(i.length===1){const a=i[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${Ip(e,u)}, ${a});
`;o+=g}}return o}function l3(t,e,n){return He(t,e,n,a3)}function c3(t,e,n,r){let o="";const i=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=Ce(i,K.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=Ce(u.slice(1),K.UNKNOWN_REGIONS);o+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return o+=yp(e,r,"arrow_p"),o}function u3(t,e,n){return He(t,e,n,c3)}const d3=new Map([[f.ARROW,i3],[f.AVERAGE_ARROW,l3],[f.BULBOUS_ARROW,s3],[f.CHAOS_CONSTRUCTION_ARROW,u3]]);function _3(t,e,n){return ir(t,e,n,d3)}function fo(t,e){const n=tn(t,e.cells);return Ct(n)}function f3(t,e,n){const o=`[${fo(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function xp(t,e,n,r){let o="";const i=n.constraints;if(!i)return o;for(const a of Object.values(i)){const c=f3(e,a,r);o+=c}return o}function Hl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function g3(t,e,n,r,o){const a=`[${fo(e,r).join(",")}]`,c=r.value,u=Hl(t,c,n);if(!u)return"";const _=u[1];let g=u[0];return g+=`constraint ${o}(${a}, ${_});
`,g}function n_(t,e,n,r){let o="";const i=n.constraints;if(!i)return o;for(const[a,c]of Object.entries(i)){const u=g3(t,e,a,c,r);o+=u}return o}function h3(t,e,n,r){const o=fo(e,r),i=`[${o.join(",")}]`,a=r.value;if(!a)return Mo(o);const c=Hl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${i}, ${u});
`,_}function v3(t,e,n){return He(t,e,n,h3)}function p3(t,e,n,r){const o=fo(e,r),i=`[${o.join(",")}]`,a=r.value;if(!a)return Mo(o);const c=Hl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${i}, ${u});
`,_}function m3(t,e,n){return He(t,e,n,p3)}function E3(t,e,n){return n_(t,e,n,"sum_cage_p")}function C3(t,e,n){return xp(t,e,n,"parity_balance_cage_p")}function b3(t,e,n){return xp(t,e,n,"sum_cage_look_and_say_p")}function w3(t,e,n){return n_(t,e,n,"divisible_killer_cage_p")}function I3(t,e,n){return n_(t,e,n,"spotlight_cage_p")}function y3(t,e,n,r){const i=`[${fo(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${i}, ${c}, ALLOWED_DIGITS);
`}return""}function O3(t,e,n){return He(t,e,n,y3)}function x3(t,e,n,r){const i=`[${fo(e,r).join(",")}]`,a=r.value;let c="";const u=Hl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${i}) == ${m};
`}const _=r.cells,g=tn(e,_),v=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(w=>{!g.includes(w)&&!v.includes(w)&&v.push(w)});const h=Ce(v,K.BOARD);return c+=`constraint vaulted_cage_p(${i}, ${h});
`,c}function A3(t,e,n){return He(t,e,n,x3)}function L3(t,e,n,r,o){const i=tn(e,r.cells),a=Ce(i,K.BOARD),c=Ce(i,K.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${o}(${a}, ${c}, ${_});
`}return""}function Ap(t,e,n,r){let o="";const i=n.constraints;if(!i)return o;for(const[a,c]of Object.entries(i)){const u=L3(t,e,a,c,r);o+=u}return o}function D3(t,e,n){return Ap(t,e,n,"yin_yang_antithesis_killer_cage_p")}function R3(t,e,n){return Ap(t,e,n,"yin_yang_breakeven_killer_cage_p")}function N3(t,e,n,r){const o=tn(e,r.cells),i=Ce(o,K.BOARD),a=Ce(o,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${i}, ${a}, ${u});
`}return""}function S3(t,e,n){return He(t,e,n,N3)}function k3(t,e,n,r){const o=tn(e,r.cells),i=Ce(o,K.BOARD),a=Ce(o,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${i}, ${a}, ${u});
`}return""}function T3(t,e,n){return He(t,e,n,k3)}function M3(t,e,n){let r="";const o=n.constraints;if(!o)return r;const i=e_(Object.values(o));for(const a of i.values())if(!(a.length<=1))for(const[c,u]of a.flatMap((_,g)=>a.slice(g+1).map(v=>[_,v]))){const g=`[${fo(e,c).join(",")}]`,h=`[${fo(e,u).join(",")}]`;r+=`constraint multisets_equal_p(${g}, ${h});
`}return r}const U3=new Map([[f.KILLER_CAGE,v3],[f.INVERTED_KILLER_CAGE,m3],[f.SUM_CAGE,E3],[f.PARITY_BALANCE_CAGE,C3],[f.SUM_CAGE_LOOK_AND_SAY,b3],[f.DIVISIBLE_KILLER_CAGE,w3],[f.SPOTLIGHT_CAGE,I3],[f.UNIQUE_DIGITS_CAGE,O3],[f.VAULTED_CAGE,A3],[f.YIN_YANG_ANTITHESIS_KILLER_CAGE,D3],[f.YIN_YANG_BREAKEVEN_KILLER_CAGE,R3],[f.DOUBLERS_KILLER_CAGE,S3],[f.NEGATORS_KILLER_CAGE,T3],[f.MULTISET_CAGE,M3]]);function $3(t,e,n){return ir(t,e,n,U3)}function F3(t,e,n,r){const o=e.r+.5,i=e.c+.5,a=n-o,c=r-i,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function G3(t,e){const n=[],r=[],o=[];for(const i of t.getAllCells()){const a=F3(t,i,e.r,e.c);a&&!n.includes(a)?(n.push(i),r.push(a)):r.includes(i)||o.push(i)}return[n,r,o]}function P3(t,e,n){let r="";const o=n.constraints;if(!o)return r;const i=[...Object.values(o)];for(let _=0;_<i.length;_++){const g=i[_],v=g.cell,h=_+1,[m,E,w]=G3(e,v),b=Ce(m,K.GALAXY_REGIONS),I=Ce(E,K.GALAXY_REGIONS),A=Ce(w,K.GALAXY_REGIONS);r+=`% galaxy ${h}
`,r+=`constraint galaxy_center_p(${b}, ${I}, ${A}, ${h});
`,r+=`constraint connected_region(${K.GALAXY_REGIONS}, ${h});
`;const k=g.value;if(!k)continue;const M=parseInt(k);r+=`constraint galaxy_sum_p(${K.BOARD}, ${K.GALAXY_REGIONS}, ${M}, ${h});
`}if(!i.length)return r;const a=e.nCols*e.nRows,u=`${i.length+1}..${a}`;return r+=`
constraint order_remaining_galaxies_p(${K.GALAXY_REGIONS}, ${u});
`,r}function W3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function H3(t,e,n,r){const o=r.cell,[i,a]=[o.r,o.c],c=r.value,u=W3(t,c,n);if(!u)return"";const _=u[1];let g=u[0],v=[];if(i%1===0&&a%1===0?v=ll(o).map(w=>e.getCell(w.r,w.c)).filter(w=>w!==void 0):(i%1===.5&&a%1===0||i%1===0&&a%1===.5)&&(v=cl(o).map(w=>e.getCell(w.r,w.c)).filter(w=>w!==void 0)),!v.length)return"";const h=Ce(v,K.BOARD),m=Ce(v,K.YIN_YANG);return g+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${_};
`,g}function z3(t,e,n){return He(t,e,n,H3)}const B3=new Map([[f.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,z3],[f.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,P3]]);function Y3(t,e,n){return ir(t,e,n,B3)}function Th(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return Ct(n)}function j3(t,e){const r="["+Th(t,e.cells).join(",")+"]",i="["+Th(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${i});
`}function K3(t,e,n){let r="";const o=n.constraints;if(!o)return r;for(const i of Object.values(o)){const a=j3(e,i);r+=a}return r}const V3=new Map([[f.CLONE_REGION,K3]]);function X3(t,e,n){return ir(t,e,n,V3)}function r_(t,e){const n=tn(t,e.cells);return Ct(n)}function q3(t,e,n){const o=`[${r_(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function o_(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=q3(t,i,n);r+=a}return r}function Z3(t,e,n,r,o,i=""){const c=`[${r_(e,r).join(",")}]`;let u=r.value;if(u||(u=i),u){const _=parseInt(u);return`constraint ${o}(${c}, ${_});
`}return""}function Lp(t,e,n,r,o=""){let i="";const a=n.constraints;if(!a)return i;for(const[c,u]of Object.entries(a)){const _=Z3(t,e,c,u,r,o);i+=_}return i}function Q3(t,e,n,r){const i=`[${r_(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=mp(a);if(!c)return"";let u="";for(const g of c){const v=parseInt(g);Number.isNaN(v)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${i}, ${_});
`,u}function J3(t,e,n){let r="";const o=n.constraints;if(!o)return r;for(const[i,a]of Object.entries(o)){const c=Q3(t,e,i,a);r+=c}return r}function e5(t,e,n){return Lp(t,e,n,"corner_sum_p")}function t5(t,e,n){return Lp(t,e,n,"corner_even_count_p")}function n5(t,e,n){return o_(e,n,"corner_sum_of_three_equals_the_other_p")}function r5(t,e,n){return o_(e,n,"equal_diagonal_differences_p")}function o5(t,e,n){return o_(e,n,"product_square_p")}const i5=new Map([[f.QUADRUPLE,J3],[f.CORNER_SUM,e5],[f.CORNER_EVEN_COUNT,t5],[f.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,n5],[f.PRODUCT_SQUARE,o5],[f.EQUAL_DIAGONAL_DIFFERENCES,r5]]);function s5(t,e,n){return ir(t,e,n,i5)}function qs(t,e,n){return[...Object.values(t)].find(i=>{const a=i.cells[0],c=i.cells[1];if(e.c===a.c&&e.r===a.r&&n.c===c.c&&n.r===c.r||e.c===c.c&&e.r===c.r&&n.c===a.c&&n.r===a.r)return i})}function zl(t,e){const n=tn(t,e.cells);return Ct(n)}function a5(t,e,n){const r=zl(t,e),[o,i]=r;return`constraint ${n}(${o}, ${i});
`}function l5(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=a5(t,i,n);r+=a}return r}function c5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function u5(t,e,n,r,o,i=""){var m;const a=zl(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:i,g=c5(t,_,n);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint ${o}(${c}, ${u}, ${v});
`,h}function Bl(t,e,n,r,o=""){let i="";const a=n.constraints;if(!a)return i;for(const[c,u]of Object.entries(a)){const _=u5(t,e,c,u,r,o);i+=_}return i}function d5(t,e){const n=zl(t,e),[r,o]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${o} = 5;
`:`constraint ${r} + ${o} = 10;
`}function _5(t,e,n){let r="";const o=n.constraints;for(const u of Object.values(o)){const _=d5(e,u);r+=_}if(!n.negative_constraints)return r;const i=!!n.negative_constraints[f.NEGATIVE_V_CONSTRAINT],a=!!n.negative_constraints[f.NEGATIVE_X_CONSTRAINT],c=!!n.negative_constraints[f.NEGATIVE_XV_CONSTRAINT];if(!i&&!a&&!c)return r;for(const[u,_]of Zr(e)){const g=qs(o,u,_),v=Ae(u),h=Ae(_);if(i&&(!g||g.value!=="V"&&g.value!=="v")){const m=`constraint ${v} + ${h} != 5;
`;r+=m}else if(a&&(!g||g.value!=="X"&&g.value!=="x")){const m=`constraint ${v} + ${h} != 10;
`;r+=m}else if(c&&!g){const m=`constraint ${v} + ${h} != 5 /\\ (${v} + ${h} != 10);
`;r+=m}}return r}function f5(t,e,n){let r=Bl(t,e,n,"ratio_p","2");if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_RATIOS_GIVEN])return r;const i=n.constraints;let a=[];i&&(a=Object.values(i).map(u=>u.value).map(u=>u||"2")),a.length===0&&a.push("2");const c=[...new Set(a)];console.log("values",c),r+=`
% ${f.ALL_RATIOS_GIVEN}
`;for(const[u,_]of Zr(e)){if(qs(i,u,_))continue;const v=Ae(u),h=Ae(_);for(const m of c){const E=parseInt(m),w=`constraint not ratio_p(${v}, ${h}, ${E});
`;r+=w}}return r}function g5(t,e,n){let r=Bl(t,e,n,"abs_difference","1");if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_DIFFERENCES_GIVEN])return r;const i=n.constraints;let a=[];i&&(a=Object.values(i).map(u=>u.value).map(u=>u||"1")),a.length===0&&a.push("1");const c=[...new Set(a)];r+=`
% ${f.ALL_DIFFERENCES_GIVEN}
`;for(const[u,_]of Zr(e)){if(qs(i,u,_))continue;const v=Ae(u),h=Ae(_);for(const m of c){const E=parseInt(m),w=`constraint abs(${v} - ${h}) != ${E};
`;r+=w}}return r}function h5(t,e){const n=zl(t,e),[r,o]=n,i=e.value;return i==="<"?`constraint ${r} < ${o};
`:i===">"?`constraint ${r} > ${o};
`:""}function Mh(t,e,n){let r="";const o=n.constraints;if(!o)return r;for(const i of Object.values(o)){const a=h5(e,i);r+=a}return r}function v5(t,e,n){return Bl(t,e,n,"edge_sum_p")}function p5(t,e,n){return Bl(t,e,n,"edge_modulo_p")}function m5(t,e,n){return l5(e,n,"edge_factor_p")}function Dp(t,e,n){const r=Ae(e),o=Ae(n);let i="";if(e.r==n.r){const u=t.getRow(e.r)[0];i=Ae(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];i=Ae(u)}return i?`xy_differences_p(${r}, ${o}, ${i});
`:""}function E5(t,e){const n=tn(t,e.cells),[r,o]=n,i=Dp(t,r,o);return i.length===0?"":`constraint ${i}`}function C5(t,e,n){const r=n.constraints;let o="";for(const a of Object.values(r)){const c=E5(e,a);o+=c}if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_XY_DIFFERENCES_GIVEN])return o;o+=`
% ${f.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[a,c]of Zr(e)){if(qs(r,a,c))continue;const _=Dp(e,a,c);if(_.length===0)continue;const g=`constraint not ${_}`;o+=g}return o}function b5(t,e,n){const r=tn(t,e.cells),[o,i]=Ct(r),a=Bi(r,K.YIN_YANG),[c,u]=a;return`constraint ${n}(${o}, ${i}, ${c}, ${u});
`}function Rp(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=b5(t,i,n);r+=a}return r}function w5(t,e,n){let r=Rp(e,n,"yin_yang_kropki_p");if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_YIN_YANG_KROPKI_GIVEN])return r;const i=n.constraints;r+=`
% ${f.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[a,c]of Zr(e)){if(qs(i,a,c))continue;const _=Ae(a),g=Ae(c),v=ut(a,K.YIN_YANG),h=ut(c,K.YIN_YANG),m=`constraint not yin_yang_kropki_p(${_}, ${g}, ${v}, ${h});
`;r+=m}return r}function I5(t,e,n){return Rp(e,n,"yin_yang_white_kropki_p")}function y5(t,e,n){const r=tn(t,e.cells),o=Bi(r,n),[i,a]=o;return`constraint ${i} != ${a};
`}function Yl(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=y5(t,i,n);r+=a}return r}function O5(t,e,n){return Yl(e,n,K.UNKNOWN_REGIONS)}function x5(t,e,n){return Yl(e,n,K.FILLOMINO_REGIONS)}function A5(t,e,n){return Yl(e,n,K.SUGURU_REGIONS)}function L5(t,e,n){return Yl(e,n,K.CAVE_SHADING)}const D5=new Map([[f.XV,_5],[f.DIFFERENCE,g5],[f.RATIO,f5],[f.EDGE_INEQUALITY,Mh],[f.ONE_WAY_DOOR,Mh],[f.EDGE_SUM,v5],[f.EDGE_MODULO,p5],[f.EDGE_FACTOR,m5],[f.XY_DIFFERENCES,C5],[f.YIN_YANG_KROPKI,w5],[f.YIN_YANG_WHITE_KROPKI,I5],[f.FILLOMINO_REGION_BORDER,x5],[f.UNKNOWN_REGION_BORDER,O5],[f.CHAOS_CONSTRUCTION_SUGURU_BORDER,A5],[f.EDGE_CAVE_ONE_OF_EACH,L5]]);function R5(t,e,n){return ir(t,e,n,D5)}function N5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`line_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function jl(t,e,n=!1){let r=tn(t,e.cells);return n&&(r=[...new Set(r)]),Ct(r)}function S5(t,e,n,r=!1){const i=`[${jl(t,e,r).join(",")}]`;return`constraint ${n}(${i});
`}function ht(t,e,n,r=!1){let o="";const i=e.constraints;if(!i)return o;for(const a of Object.values(i)){const c=S5(t,a,n,r);o+=c}return o}function k5(t,e,n,r,o,i=""){var h;const c=`[${jl(e,r).join(",")}]`,u=(h=r.value)!=null&&h.length?r.value:i,_=N5(t,u,n);if(!_)return"";const g=_[1];let v=_[0];return v+=`constraint ${o}(${c}, ${g});
`,v}function sr(t,e,n,r,o=""){let i="";const a=n.constraints;if(!a)return i;for(const[c,u]of Object.entries(a)){const _=k5(t,e,c,u,r,o);i+=_}return i}function T5(t,e,n,r=""){let i=e.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),a=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),a=!0);const u=`[${Ct(i).join(",")}]`;let _=e.value;_||(_=r);const g=parseInt(_);return`constraint ${n}(${u}, ${g}, ${a});
`}function i_(t,e,n,r=""){let o="";const i=e.constraints;if(!i)return o;for(const[a,c]of Object.entries(i)){const u=T5(t,c,n,r);o+=u}return o}function M5(t,e,n){return ht(e,n,"renban",!0)}function U5(t,e,n){return ht(e,n,"double_renban_p",!0)}function $5(t,e,n){return ht(e,n,"renrenbanban_p",!0)}function F5(t,e,n){return ht(e,n,"knabner_p",!0)}function G5(t,e,n){return ht(e,n,"renban_or_nabner_line_p",!0)}function P5(t,e,n){return ht(e,n,"out_of_order_consecutive_line_p")}function W5(t,e,n){return sr(t,e,n,"whispers","5")}function H5(t,e,n){return sr(t,e,n,"whispers","4")}function z5(t,e,n){return ht(e,n,"strictly_increasing")}function B5(t,e,n){return ht(e,n,"fuzzy_thermo_p")}function Y5(t,e,n){return ht(e,n,"increasing")}function j5(t,e,n){return sr(t,e,n,"custom_thermo_p")}function K5(t,e,n){return ht(e,n,"palindrome")}function V5(t,e,n){return sr(t,e,n,"sum_line_p")}function X5(t,e,n){return ht(e,n,"xv_line_p")}function q5(t,e,n){return sr(t,e,n,"at_least_x_line_p","10")}function Z5(t,e,n){return sr(t,e,n,"product_line_p")}function Q5(t,e,n){return sr(t,e,n,"maximum_adjacent_difference_line_p","2")}function J5(t,e,n){return ht(e,n,"adjacent_multiples_line_p")}function eM(t,e,n){return ht(e,n,"index_line_p")}function tM(t,e,n){return ht(e,n,"zipper_line_p")}function nM(t,e,n){return i_(e,n,"segmented_sum_line_p")}function rM(t,e,n){return ht(e,n,"segmented_sum_and_renban_line_p")}function oM(t,e,n){return i_(e,n,"n_consecutive_renban_line_p")}function iM(t,e,n){return i_(e,n,"n_consecutive_fuzzy_sum_line_p")}function sM(t,e,n){const r=tn(t,n.cells);let o="";const i=[];for(let c=0;c<r.length;c++){const u=r[c],_=t.getRow(u.r),g=Ce(_,K.BOARD),v=`cycle_${e}_${c}`;i.push(v);const h=u.c+1;o+=`var int: ${v} = cycle_order_f(${g}, ${h});
`}const a="["+i.join(",")+"]";return o+=`constraint strictly_increasing(${a});
`,o}function aM(t,e,n){let r="";const o=n.constraints;if(!o)return r;for(const[i,a]of Object.entries(o)){const c=sM(e,i,a);r+=c}return r}function lM(t,e,n){return ht(e,n,"adjacent_differences_count_line_p")}function cM(t,e,n){return ht(e,n,"same_parity_line_p")}function uM(t,e,n){return sr(t,e,n,"renban_or_whispers_p","5")}function dM(t,e,n){return ht(e,n,"alldifferent",!0)}function _M(t,e,n){return ht(e,n,"repeated_digits_line_p")}function fM(t,e,n){return ht(e,n,"superfuzzy_arrow_p")}function gM(t,e,n){return ht(e,n,"ambiguous_arrow_p",!0)}function hM(t,e,n){return ht(e,n,"headless_arrow_p")}function vM(t,e,n){return sr(t,e,n,"unimodular_line_p","3")}function pM(t,e,n){return sr(t,e,n,"modular_line_p","3")}function mM(t,e,n){return sr(t,e,n,"modular_or_unimodular_line_p","3")}function EM(t,e,n){return ht(e,n,"arithmetic_sequence_line_p")}function CM(t,e,n){return ht(e,n,"odd_even_oscillator_line_p")}function bM(t,e,n){return sr(t,e,n,"high_low_oscillator_line_p","5")}function wM(t,e,n){return ht(e,n,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function IM(t,e,n){return ht(e,n,"look_and_say_line_p",!0)}function yM(t,e){const n=tn(t,e.cells);function r(_){const g=[];let v=null;for(const h of _)h.r!=v?(g.push([h]),v=h.r):g[g.length-1].push(h);return g}const o=r(n);if(o.length<2)return"";const i=o[0],c=`[${Ct(i).join(",")}]`;let u="";for(let _=1;_<o.length;_++){const g=o[_],h=`[${Ct(g).join(",")}]`;u+=`constraint sum(${h}) == sum(${c});
`}return u}function OM(t,e,n){let r="";const o=n.constraints;if(!o)return r;for(const i of Object.values(o)){const a=yM(e,i);r+=a}return r}function xM(t,e,n){return ht(e,n,"between_line_p")}function AM(t,e,n){return ht(e,n,"tightrope_line_p")}function LM(t,e,n){return ht(e,n,"double_arrow_p")}function DM(t,e,n){return ht(e,n,"split_peas_p")}function RM(t,e,n){return ht(e,n,"parity_count_line_p")}function NM(t,e,n){return ht(e,n,"product_of_ends_equals_sum_of_line_p")}function Np(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const i=o.region;n!==i&&(r.length&&e.push(r),r=[]),r.push(o),n=i}return r.length&&e.push(r),e}function SM(t,e,n,r){let o="";const i=tn(e,r.cells),a=Np(i);if(!a.length)return"";const c=`sum_line_${n}`;o+=`var int: ${c};
`;for(const u of a){const g=`constraint sum(${Ce(u,K.BOARD)}) == ${c};
`;o+=g}return o}function kM(t,e,n){return He(t,e,n,SM)}function TM(t,e,n,r){return`constraint entropic_line_p(${`[${jl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function MM(t,e,n){return He(t,e,n,TM)}function UM(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${jl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function $M(t,e,n){return He(t,e,n,UM)}function FM(t,e,n){return ht(e,n,"peapods_p")}function GM(t,e,n,r,o,i=""){const a=tn(e,r.cells),c=Ce(a,K.BOARD),u=Ce(a,K.YIN_YANG);let _=r.value;_||(_=i);const g=parseInt(_);return`constraint ${o}(${c}, ${u}, ${g});
`}function Sp(t,e,n,r,o=""){let i="";const a=n.constraints;if(!a)return i;for(const[c,u]of Object.entries(a)){const _=GM(t,e,c,u,r,o);i+=_}return i}function PM(t,e,n){return Sp(t,e,n,"yin_yang_shaded_whispers_line_p","5")}function WM(t,e,n){return Sp(t,e,n,"yin_yang_unshaded_modular_line_p","3")}function HM(t,e,n){const r=tn(t,e.cells),o=Ce(r,K.BOARD),i=Ce(r,K.YIN_YANG);return`constraint ${n}(${o}, ${i});
`}function s_(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=HM(t,i,n);r+=a}return r}function zM(t,e,n){return s_(e,n,"yin_yang_unshaded_entropic_line_p")}function BM(t,e,n){return s_(e,n,"yin_yang_indexing_line_coloring_p")}function YM(t,e){const n=t.grid,o=t.elementsDict.get(f.YIN_YANG_REGION_SUM_LINE);if(!o||!o.constraints)return"";let i=`
% ${e}
`;for(const a of Object.values(o.constraints)){const u=a.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),_=Ce(u,K.YIN_YANG);i+=`constraint count_unique_values(${_}) >= 2;
`}return i}function jM(t,e,n){let r=s_(e,n,"yin_yang_region_sum_line_p");return n.negative_constraints&&!!n.negative_constraints[f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]&&(r+=YM(t.puzzle,f.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE)),r}function KM(t,e,n){const r=tn(t,e.cells),o=Ce(r,K.VALUES_GRID);return`constraint ${n}(${o});
`}function a_(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=KM(t,i,n);r+=a}return r}function VM(t,e,n){return a_(e,n,"between_line_p")}function XM(t,e,n){return a_(e,n,"double_arrow_p")}function qM(t,e,n){return a_(e,n,"strictly_increasing")}function ZM(t,e,n,r){const o=tn(e,r.cells),i=Np(o);if(i.sort((_,g)=>g.length-_.length),i.length<=1)return"";let a="";const c=i[0],u=Ce(c,K.VALUES_GRID);for(const _ of i.slice(1)){const g=Ce(_,K.VALUES_GRID),v=`constraint subset_p(${u}, ${g});
`;a+=v}return a}function QM(t,e,n){return He(t,e,n,ZM)}const JM=new Map([[f.THERMOMETER,z5],[f.FUZZY_THERMOMETER,B5],[f.SLOW_THERMOMETER,Y5],[f.CUSTOM_THERMOMETER,j5],[f.RENBAN_LINE,M5],[f.DOUBLE_RENBAN_LINE,U5],[f.RENRENBANBAN_LINE,$5],[f.NABNER_LINE,F5],[f.WHISPERS_LINE,W5],[f.DUTCH_WHISPERS,H5],[f.RENBAN_OR_WHISPERS_LINE,uM],[f.RENBAN_OR_NABNER_LINE,G5],[f.OUT_OF_ORDER_CONSECUTIVE_LINE,P5],[f.N_CONSECUTIVE_RENBAN_LINE,oM],[f.PALINDROME,K5],[f.SUM_LINE,V5],[f.PRODUCT_LINE,Z5],[f.XV_LINE,X5],[f.AT_LEAST_X_LINE,q5],[f.MAXIMUM_ADJACENT_DIFFERENCE_LINE,Q5],[f.SAME_PARITY_LINE,cM],[f.ADJACENT_MULTIPLES_LINE,J5],[f.ADJACENT_DIFFERENCES_COUNT_LINE,lM],[f.LOOK_AND_SAY_LINE,IM],[f.ROW_SUM_LINE,OM],[f.INDEX_LINE,eM],[f.ZIPPER_LINE,tM],[f.SEGMENTED_SUM_LINE,nM],[f.SEGMENTED_SUM_AND_RENBAN_LINE,rM],[f.N_CONSECUTIVE_FUZZY_SUM_LINE,iM],[f.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,wM],[f.SUPERFUZZY_ARROW,fM],[f.AMBIGUOUS_ARROW,gM],[f.HEADLESS_ARROW,hM],[f.ARITHMETIC_SEQUENCE_LINE,EM],[f.ODD_EVEN_OSCILLATOR_LINE,CM],[f.HIGH_LOW_OSCILLATOR_LINE,bM],[f.UNIQUE_VALUES_LINE,dM],[f.REPEATED_DIGITS_LINE,_M],[f.UNIMODULAR_LINE,vM],[f.MODULAR_LINE,pM],[f.MODULAR_OR_UNIMODULAR_LINE,mM],[f.REGION_SUM_LINE,kM],[f.ENTROPIC_LINE,MM],[f.ENTROPIC_OR_MODULAR_LINE,$M],[f.ROW_CYCLE_THERMOMETER,aM],[f.PEAPODS,FM],[f.BETWEEN_LINE,xM],[f.TIGHTROPE_LINE,AM],[f.DOUBLE_ARROW_LINE,LM],[f.SPLIT_PEAS,DM],[f.PARITY_COUNT_LINE,RM],[f.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,NM],[f.DOUBLERS_BETWEEN_LINE,VM],[f.DOUBLERS_DOUBLE_ARROW_LINE,XM],[f.DOUBLERS_THERMOMETER,qM],[f.INDEXER_CELLS_REGION_SUBSET_LINE,QM],[f.YIN_YANG_SHADED_WHISPERS_LINE,PM],[f.YIN_YANG_UNSHADED_ENTROPIC_LINE,zM],[f.YIN_YANG_UNSHADED_MODULAR_LINE,WM],[f.YIN_YANG_REGION_SUM_LINE,jM],[f.YIN_YANG_INDEXING_LINE_COLORING,BM]]);function eU(t,e,n){return ir(t,e,n,JM)}function Kl(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return Ct(o)}function Yi(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let i="";return(!r||r.outside)&&(i=`R${n.r}C${n.c}`,i=i.replace("-","m")),e||(e=i),t.getOrSetSharedVar(e,i,o)}function tU(t,e,n,r){const o=n.cell,i=e.getCell(o.r,o.c),c=`[${Kl(e,n).join(",")}]`,u=n.value,_=Yi(t,u,o,i);if(!_)return"";const g=_[1];let v=_[0];return v+=`constraint ${r}(${c}, ${g});
`,v}function ar(t,e,n,r){let o="";const i=n.constraints;if(!i)return o;for(const a of Object.values(i)){const c=tU(t,e,a,r);o+=c}return o}function nU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),c=`[${Kl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,g=Math.min(..._),v=Math.max(..._),h=Yi(t,u,o,i);if(!h)return"";const m=h[1];let E=h[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${g}, ${v});
`,E}function rU(t,e,n){return He(t,e,n,nU)}function oU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),c=`[${Kl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,g=Math.min(..._),v=Math.max(..._),h=Yi(t,u,o,i);if(!h)return"";const m=h[1];let E=h[0];const w=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${w} = sandwich_sum_p(${c}, ${m}, ${g}, ${v});
`,E+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${w}, ${b});
`,E}function iU(t,e,n){return He(t,e,n,oU)}function sU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),a=Kl(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,g=Yi(t,_,o,i);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint x_index_p(${c}, ${u}, ${v});
`,h}function aU(t,e,n){return He(t,e,n,sU)}function lU(t,e,n){return ar(t,e,n,"x_sum_p")}function cU(t,e,n){return ar(t,e,n,"shortsighted_x_sum_p")}function uU(t,e,n){return ar(t,e,n,"broken_x_sum_p")}function dU(t,e,n){return ar(t,e,n,"shifted_x_sum_p")}function _U(t,e,n){return ar(t,e,n,"skyscrapers_p")}function fU(t,e,n){return ar(t,e,n,"x_sum_skyscrapers_p")}function gU(t,e,n){return ar(t,e,n,"battlefield_p")}function hU(t,e,n){return ar(t,e,n,"rising_streak_p")}function vU(t,e,n){return ar(t,e,n,"outside_consecutive_sum_p")}function pU(t,e,n,r){const o=r.cell,i=r.direction,a=e.getCellsInDirection(o.r,o.c,i),c=Ce(a,K.BOARD),u=Ce(a,K.CELL_CENTER_LOOP),_=r.value;if(_){const g=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${g});
`}return""}function mU(t,e,n){return He(t,e,n,pU)}function EU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),a=r.direction,c=e.getCellsInDirection(o.r,o.c,a),u=Ce(c,K.BOARD),_=Ce(c,K.UNKNOWN_REGIONS),g=r.value,v=Yi(t,g,o,i);if(!v)return"";const h=v[1];let m=v[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${h});
`,m}function CU(t,e,n){let r="";const o=n.constraints;if(!o)return r;for(const[i,a]of Object.entries(o)){const c=EU(t,e,i,a);r+=c}return r}function bU(t,e,n){return ar(t,e,n,"little_killer_sum_p")}function wU(t,e,n){return ar(t,e,n,"little_killer_product_p")}function IU(t,e,n){return ar(t,e,n,"x_omit_little_killer_sum_p")}function yU(t,e,n,r){const o=r.cell,i=r.direction,a=e.getCellsInDirection(o.r,o.c,i),c=Ce(a,K.BOARD),u=Ce(a,K.YIN_YANG),_=r.value;if(_){const g=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${g});
`}return""}function OU(t,e,n){return He(t,e,n,yU)}function xU(t,e,n,r){const o=r.cell,i=r.direction,a=e.getCellsInDirection(o.r,o.c,i),c=Ce(a,K.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}function AU(t,e,n){return He(t,e,n,xU)}function LU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),a=r.direction,c=e.getCellsInDirection(o.r,o.c,a),u=Ce(c,K.PENTOMINO_REGIONS),_=r.value,g=Yi(t,_,o,i);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint pentomino_border_count_p(${u}, ${v});
`,h}function DU(t,e,n){return He(t,e,n,LU)}const RU=new Map([[f.SANDWICH_SUM,rU],[f.X_SUM,lU],[f.SHORTSIGHTED_X_SUM,cU],[f.BROKEN_X_SUM,uU],[f.SHIFTED_X_SUM,dU],[f.SKYSCRAPERS,_U],[f.X_SUM_SKYSCRAPERS,fU],[f.X_INDEX,aU],[f.BATTLEFIELD,gU],[f.SANDWICH_SUM_XOR_X_SUM,iU],[f.RISING_STREAK,hU],[f.OUTSIDE_CONSECUTIVE_SUM,vU],[f.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,OU],[f.LOOPWICHES,mU],[f.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,CU],[f.PENTOMINO_BORDER_COUNT,DU],[f.LITTLE_KILLER_SUM,bU],[f.LITTLE_KILLER_PRODUCT,wU],[f.X_OMIT_LITTLE_KILLER_SUM,IU],[f.NEGATORS_LITTLE_KILLER_SUM,AU]]);function NU(t,e,n){return ir(t,e,n,RU)}function kp(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=n(t,i);r+=a}return r}function SU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let i=t.getCellsInDirection(r.r,r.c,o);i=[r,...i];const a=Ce(i,K.SASHIGANE),c=Ce(i,K.SASHIGANE_BENDS),u=Ae(r),_=ut(r,K.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function kU(t,e,n){return kp(e,n,SU)}function TU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,i=t.getCellsInDirection(r.r,r.c,o),c="["+Ct(i).join(",")+"]",u=Ce(i,K.CELL_CENTER_LOOP),_=Ae(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}function MU(t,e,n){return kp(e,n,TU)}const UU=new Map([[f.SASHIGANE_ARROW_POINTS_TO_BEND,kU],[f.THERMO_SIGHTLINE_LOOP_ARROW,MU]]);function $U(t,e,n){return ir(t,e,n,UU)}function FU(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ae(o);return`constraint ${n}(${i});
`}function Tp(t,e,n,r){let o="";const i=n.constraints;if(!i)return o;for(const a of Object.values(i)){const c=FU(e,a,r);o+=c}return o}const GU={allow_var:!0,allow_interval:!0,allow_int_list:!1};function l_(t,e,n,r=GU){const o=`cell_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function PU(t,e,n,r=""){const o=e.cell,i=t.getCell(o.r,o.c);if(!i)return"";const a=Ae(i);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function Mp(t,e,n,r,o=""){let i="";const a=n.constraints;if(!a)return i;for(const c of Object.values(a)){const u=PU(e,c,r,o);i+=u}return i}function Vl(t,e,n,r){const o=e.cell,i=t.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),u=Qd(t,i).map(v=>Ce(v,n)),_=ut(i,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function c_(t,e,n,r){let o="";const i=e.constraints;if(!i)return o;for(const a of Object.values(i)){const c=Vl(t,a,n,r);o+=c}return o}function WU(t,e,n){return Tp(t,e,n,"odd_p")}function HU(t,e,n){return Tp(t,e,n,"even_p")}function zU(t,e,n){return Mp(t,e,n,"low_digit_p","5")}function BU(t,e,n){return Mp(t,e,n,"high_digit_p","5")}function YU(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ae(o),a=t.getNeighboorCells(o),c=Ce(a,K.BOARD);return`constraint ${n}(${c}) == ${i};
`}function Up(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=YU(t,i,n);r+=a}return r}function jU(t,e,n){return Up(e,n,"odd_count")}function KU(t,e,n){return Up(e,n,"even_count")}function VU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getNeighboorCells(i);c.push(i);const u=Ce(c,K.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function XU(t,e,n){return He(t,e,n,VU)}function qU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getOrthogonallyAdjacentCells(i);return`constraint sum_p(${Ce(c,K.BOARD)}, ${a});
`}function ZU(t,e,n){return He(t,e,n,qU)}function QU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getDiagonallyAdjacentCells(i);return`constraint sum_p(${Ce(c,K.BOARD)}, ${a});
`}function JU(t,e,n){return He(t,e,n,QU)}function e$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=e.getRow(i.r),c=Ce(a,K.BOARD),u=i.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function t$(t,e,n){let r=He(t,e,n,e$);if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_INDEXING_COLUMN_GIVEN])return r;const i=n.constraints;r+=`
% ${f.ALL_INDEXING_COLUMN_GIVEN}
`;for(const a of e.getAllCells()){if(Xs(i,a))continue;const u=e.getRow(a.r),_=Ce(u,K.BOARD),g=a.c+1,v=`constraint not indexing_column_p(${_}, ${g});
`;r+=v}return r}function n$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=e.getCol(i.c),c=Ce(a,K.BOARD),u=i.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function r$(t,e,n){let r=He(t,e,n,n$);if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_INDEXING_ROW_GIVEN])return r;const i=n.constraints;r+=`
% ${f.ALL_INDEXING_ROW_GIVEN}
`;for(const a of e.getAllCells()){if(Xs(i,a))continue;const u=e.getCol(a.c),_=Ce(u,K.BOARD),g=a.r+1,v=`constraint not indexing_column_p(${_}, ${g});
`;r+=v}return r}function o$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=i.r+1,u=i.c+1;if(i.region!==null){const g=i.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${g};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function i$(t,e,n){return He(t,e,n,o$)}function s$(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const a=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),_=e.getCell(o.r,o.c+1);if(!a||!c||!u||!_)return"";const g=Ae(a),v=Ae(c),h=Ae(u),m=Ae(_);return`constraint groups_opposite_parity_p([${g},${v}], [${h},${m}]);
`}function a$(t,e,n){return He(t,e,n,s$)}function l$(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ae(o),[a,c,u,_]=Jd(t,o);return`constraint ${n}(${i}, ${a}, ${c}, ${u}, ${_});
`}function u_(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=l$(t,i,n);r+=a}return r}function c$(t,e,n){return u_(e,n,"is_watchtower_p")}function u$(t,e,n){return u_(e,n,"is_not_watchtower_p")}function d$(t,e,n){return u_(e,n,"farsight_p")}function _$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),[c,u,_,g]=Jd(e,i);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${g}, 9);
`}function f$(t,e,n){let r=He(t,e,n,_$);if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_RADARS_GIVEN])return r;const i=n.constraints;r+=`
% ${f.ALL_RADARS_GIVEN}
`;for(const a of e.getAllCells()){if(Xs(i,a))continue;const u=Ae(a),[_,g,v,h]=Jd(e,a),m=`constraint not radar_p(${u}, ${_}, ${g}, ${v}, ${h}, 9);
`;r+=m}return r}function g$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getRow(i.r),u=e.getCol(i.c),_=Ce(c,K.BOARD),g=Ce(u,K.BOARD),[v,h]=[i.r+1,i.c+1];return`constraint sandwich_row_col_count_p(${_}, ${g}, ${v}, ${h}, ${a});
`}function h$(t,e,n){return He(t,e,n,g$)}function $p(t,e,n){const r=e.constraints,o=Object.values(r);let i="";const a=o.map(u=>u.cell),c=new Set(a.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of o){const _=u.cell,g=t.getCell(_.r,_.c);if(!g)continue;const v=Ae(g),h=t.getOrthogonallyAdjacentCells(g).filter(w=>!c.has(w)),m=Ce(h,K.BOARD),E=`constraint ${n}(${m}, ${v});
`;i+=E}return i}function v$(t,e,n){return $p(e,n,"maximum_p")}function p$(t,e,n){return $p(e,n,"minimum_p")}function m$(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(g=>g.cell),c=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),_=`${Ct([...c]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${_}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function E$(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(m=>m.cell),c=new Set(a.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m)),u=e.getAllCells().filter(m=>!c.has(m)),g=`${Ct([...c]).join(`,
	`)}`,h=`${Ct([...u]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${g}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${h}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function C$(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(h=>h.cell),c=new Set(a.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h)),_=`${Ct([...c]).join(`,
	`)}`,v=`${Bi([...c],K.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${K.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${K.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const h of e.getAllCells()){if(c.has(h))continue;const m=ut(h,K.COUNTING_CIRCLES_COLORS);i+=`constraint ${m} == 0;
`}for(const h of o){const m=h.cell,E=e.getCell(m.r,m.c);if(!E)continue;const w=Ae(E),b=ut(E,K.COUNTING_CIRCLES_COLORS),I=h.value;I?i+=`constraint ${b} == ${I};
`:i+=`constraint ${b} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${w}, ${b}) == ${w};
`}return i+=`
`,i}function b$(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(g=>g.cell),c=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),_=`${Ct([...c]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${_}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function w$(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ae(o),c=Qd(t,o).map(_=>Ce(_,K.BOARD));return`constraint ${n}(${c.join(", ")}, ${i});
`}function Fp(t,e,n){let r="";const o=e.constraints;if(!o)return r;for(const i of Object.values(o)){const a=w$(t,i,n);r+=a}return r}function I$(t,e,n){return Fp(e,n,"seen_even_count_p")}function y$(t,e,n){return Fp(e,n,"seen_odd_count_p")}function O$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getCellsByKnightMove(i),u=Ce(c,K.BOARD),_=r.value??"5",g=l_(t,_,n);if(!g)return"";let v="";const h=g[1];return v+=g[0],v+=`constraint cell_knights_whisper_p(${a}, ${u}, ${h});
`,v}function x$(t,e,n){return He(t,e,n,O$)}function A$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getNeighboorCells(i),u=[i,...c];return`constraint yin_yang_minesweeper_p(${Ce(u,K.YIN_YANG)}, ${a});
`}function L$(t,e,n){return He(t,e,n,A$)}function D$(t,e,n){return c_(e,n,K.YIN_YANG,"yin_yang_seen_unshaded_p")}function R$(t,e,n){return c_(e,n,K.YIN_YANG,"yin_yang_seen_shaded_p")}function N$(t,e,n){return c_(e,n,K.YIN_YANG,"yin_yang_seen_same_shade_p")}function S$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=ut(i,K.YIN_YANG),u=e.getOrthogonallyAdjacentCells(i),_=Ce(u,K.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function k$(t,e,n){return He(t,e,n,S$)}function T$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getNeighboorCells(i);return`constraint count(${Ce(c,K.YIN_YANG)}, 1) == ${a};
`}function M$(t,e,n){return He(t,e,n,T$)}function U$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=`two_contiguous_regions[${i.r},${i.c}]`,u=e.getRow(i.r),_=e.getCol(i.c),g=Ce(u,K.TWO_CONTIGUOUS_REGIONS),v=Ce(_,K.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${v}, ${a}, ${c});
`}function $$(t,e,n){return He(t,e,n,U$)}function F$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getRow(i.r),u=e.getCol(i.c),_=Ce(c,K.UNKNOWN_REGIONS),g=Ce(u,K.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${g}, ${a});
`}function G$(t,e,n){return He(t,e,n,F$)}function P$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=ut(i,K.NURIMISAKI),c=e.getOrthogonallyAdjacentCells(i);let _=`constraint nurimisaki_unshaded_endpoint_p(${Ce(c,K.NURIMISAKI)}, ${a});
`;return _+=Vl(e,r,K.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function W$(t,e,n){let r=He(t,e,n,P$);if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return r;const i=n.constraints;r+=`
% ${f.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const a of e.getAllCells()){if(Xs(i,a))continue;const u=ut(a,K.NURIMISAKI),_=e.getOrthogonallyAdjacentCells(a),v=`constraint not nurimisaki_unshaded_endpoint_p(${Ce(_,K.NURIMISAKI)}, ${u});
`;r+=v}return r}function H$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=ut(i,K.SASHIGANE),u=ut(i,K.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function z$(t,e,n){return He(t,e,n,H$)}function B$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=ut(i,K.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function Y$(t,e,n){return He(t,e,n,B$)}function j$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint ${ut(i,K.CELL_CENTER_LOOP)} == 1;
`:""}function K$(t,e,n){return He(t,e,n,j$)}function V$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint ${ut(i,K.CELL_CENTER_LOOP)} == 0;
`:""}function X$(t,e,n){return He(t,e,n,V$)}function q$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=e.getNeighboorCells(i),u=[i,...c];return`constraint sum(${Ce(u,K.CELL_CENTER_LOOP)}) == ${a};
`}function Z$(t,e,n){return He(t,e,n,q$)}function Q$(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=ut(i,K.CAVE_SHADING),u=Qd(e,i),_=[];for(const v of u){const h=Ce(v,K.CAVE_SHADING);_.push(h)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function J$(t,e,n){return He(t,e,n,Q$)}function eF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Ae(i),g=ut(i,K.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const v=e.getNeighboorCells(i),h=Ce(v,K.BOARD),m=Ce(v,K.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const E=e.getCellsByKnightMove(i),w=Ce(E,K.BOARD),b=Ce(E,K.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${w}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const I=[Pe.NE,Pe.NW,Pe.SE,Pe.SW],A=[];for(const G of I)e.getCellsInDirection(i.r,i.c,G).forEach(T=>A.push(T));const k=Ce(A,K.BOARD),M=Ce(A,K.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${M}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function tF(t,e,n){return He(t,e,n,eF)}function nF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Ae(i),g=ut(i,K.UNKNOWN_REGIONS),v=e.getOrthogonallyAdjacentCells(i),h=Ce(v,K.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${g}) >= ${c};
`;const m=[Pe.N,Pe.S,Pe.E,Pe.W],E=[];for(const w of m){const b=e.getCellsInDirection(i.r,i.c,w);if(!b.length)continue;const I=Ce(b,K.BOARD),A=Ce(b,K.UNKNOWN_REGIONS),k=`in_arrow_${n}_${w}`,M=`in_arrow_${n}_${w}[1]`;E.push(M),u+=`array[index_set(${I})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${I}, ${A}, ${k}, ${_}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function rF(t,e,n){return He(t,e,n,nF)}function oF(t,e,n,r){return Vl(e,r,K.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function iF(t,e,n){return He(t,e,n,oF)}function sF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint dpath_source == ${i.r*e.nCols+i.c+1};
`:""}function aF(t,e,n){return He(t,e,n,sF)}function lF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint dpath_target == ${i.r*e.nCols+i.c+1};
`:""}function cF(t,e,n){return He(t,e,n,lF)}function uF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint connect_four_red_p(${ut(i,K.CONNECT_FOUR)});
`:""}function dF(t,e,n){return He(t,e,n,uF)}function _F(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint connect_four_yellow_p(${ut(i,K.CONNECT_FOUR)});
`:""}function fF(t,e,n){return He(t,e,n,_F)}function gF(t,e,n){let r="",o=0;const i=n.constraints;for(const[a,c]of Object.entries(i)){const u=c.cell,_=e.getCell(u.r,u.c);if(!_)continue;const g=c.value;if(!g)continue;const v=l_(t,g,a);if(!v)continue;const h=v[1];r+=v[0];const m=ut(_,K.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${K.BOARD}, ${K.NURIKABE_REGIONS}, ${m}, ${h});
`,o+=1}return r+=`constraint count_unique_values(array1d(${K.NURIKABE_REGIONS})) == ${o+1};
`,r}function hF(t,e,n,r){return Vl(e,r,K.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function vF(t,e,n){return He(t,e,n,hF)}function pF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ae(i),c=ut(i,K.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${K.NURIKABE_REGIONS}, ${c}, ${a});
`}function mF(t,e,n){return He(t,e,n,pF)}function EF(t,e,n){let r="";const o=n.constraints,i=e_(Object.values(o));for(const _ of i.values())if(!(_.length<=1))for(const[g,v]of _.flatMap((h,m)=>_.slice(m+1).map(E=>[h,E]))){const h=g.cell,m=v.cell,E=e.getCell(h.r,h.c),w=e.getCell(m.r,m.c);if(!E||!w)continue;const b=ut(E,K.BOARD),I=ut(w,K.BOARD);r+=`constraint ${b} == ${I};
`}const c=[...i.values()].map(_=>_[0].cell).map(_=>e.getCell(_.r,_.c)).filter(_=>_!==void 0),u=Ce(c,K.BOARD);return r+=`constraint alldifferent(${u});
`,r}function CF(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(g=>g.cell),c=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),_=`${Bi([...c],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${_}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const g of Object.values(r)){const v=g.cell,h=e.getCell(v.r,v.c);if(!h)continue;const m=Ae(h),E=ut(h,K.SHIKAKU_REGIONS),w=ut(h,K.SHIKAKU_WIDTH),b=ut(h,K.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${K.SHIKAKU_REGIONS}, ${E}, ${m}, ${w}, ${b});
`}return i}function bF(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(v=>v.cell),c=new Set(a.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v)),_=`${Bi([...c],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${_}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const g={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[v,h]of Object.entries(r)){const m=h.cell,E=e.getCell(m.r,m.c);if(!E)continue;const w=ut(E,K.SHIKAKU_REGIONS),b=h.value??"",I=l_(t,b,v,g);if(!I)continue;const A=I[1];i+=I[0],i+=`constraint shikaku_region_sum_p(${K.BOARD}, ${K.SHIKAKU_REGIONS}, ${w}, ${A});
`}return i}const wF=new Map([[f.ODD,WU],[f.EVEN,HU],[f.LOW_DIGIT,zU],[f.HIGH_DIGIT,BU],[f.ODD_MINESWEEPER,jU],[f.EVEN_MINESWEEPER,KU],[f.DIAGONALLY_ADJACENT_SUM,JU],[f.ORTHOGONAL_SUM,ZU],[f.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,XU],[f.FRIENDLY_CELL,i$],[f.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,a$],[f.WATCHTOWER,c$],[f.NOT_WATCHTOWER,u$],[f.FARSIGHT,d$],[f.RADAR,f$],[f.INDEXING_COLUMN,t$],[f.INDEXING_ROW,r$],[f.SANDWICH_ROW_COL_COUNT,h$],[f.SEEN_EVEN_COUNT,I$],[f.SEEN_ODD_COUNT,y$],[f.CELL_KNIGHT_WHISPERS,x$],[f.YIN_YANG_MINESWEEPER,L$],[f.YIN_YANG_SEEN_UNSHADED_CELLS,D$],[f.YIN_YANG_SEEN_SHADED_CELLS,R$],[f.YIN_YANG_SEEN_SAME_SHADE_CELLS,N$],[f.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,k$],[f.YIN_YANG_SHADED_NEIGHBOURS_COUNT,M$],[f.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,$$],[f.SEEN_REGION_BORDERS_COUNT,G$],[f.NURIMISAKI_UNSHADED_ENDPOINTS,W$],[f.NURIKABE_SEEN_WATERWAY_CELLS,vF],[f.NURIKABE_ISLAND_SIZE_CELL,mF],[f.SASHIGANE_BEND_REGION_COUNT,z$],[f.SASHIGANE_REGION_SUM,Y$],[f.CELL_ON_THE_LOOP,K$],[f.CELL_NOT_ON_THE_LOOP,X$],[f.COUNT_LOOP_NEIGHBOUR_CELLS,Z$],[f.CAVE_CLUE,J$],[f.CHAOS_CONSTRUCTION_CHESS_SUMS,tF],[f.CHAOS_CONSTRUCTION_ARROW_KNOTS,rF],[f.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,iF],[f.DIRECTED_PATH_START,aF],[f.DIRECTED_PATH_END,cF],[f.CONENCT_FOUR_RED,dF],[f.CONNECT_FOUR_YELLOW,fF],[f.MAXIMUM,v$],[f.MINIMUM,p$],[f.COUNTING_CIRCLES,m$],[f.REVERSE_COUNTING_CIRCLES,E$],[f.COLORED_COUNTING_CIRCLES,C$],[f.UNIQUE_CELLS,b$],[f.SHIKAKU_REGION_SIZE,CF],[f.SHIKAKU_REGION_SUM,bF],[f.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,gF],[f.TELEPORT,EF]]);function IF(t,e,n){return ir(t,e,n,wF)}function Er(t,e,n,r){let o="";const i=n.constraints;if(!i)return o;for(const a of Object.values(i)){const c=r(e,a);o+=c}return o}function yF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=ut(r,K.UNKNOWN_REGIONS),a=e.directions,c=[];for(const g of a){const v=t.getCellsInDirection(r.r,r.c,g),h=Ce(v,K.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(g=>`count_different(${g}, ${i})`).join(" + ")} == ${o};
`}function OF(t,e,n){return Er(t,e,n,yF)}function xF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=ut(r,K.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=Ce(_,K.BOARD),v=Ce(_,K.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${i}, ${g}, ${v}) == ${o};
`}return c}function AF(t,e,n){return Er(t,e,n,xF)}function LF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=e.directions;let a="";for(const c of i){const u=t.getCellsInDirection(r.r,r.c,c),_=Ce(u,K.YIN_YANG);a+=`constraint count(${_}, 1) == ${o};
`}return a}function DF(t,e,n){let r=Er(t,e,n,LF);if(!n.negative_constraints||!!!n.negative_constraints[f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return r;const i=n.constraints;r+=`
% ${f.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const a of e.getAllCells()){const c=Xs(i,a),u=c?c.directions:[],_=Ae(a),g=[Pe.E,Pe.N,Pe.S,Pe.W];for(const v of g){if(u.includes(v))continue;const h=e.getCellsInDirection(a.r,a.c,v),m=Ce(h,K.YIN_YANG);r+=`constraint count(${m}, 1) != ${_};
`}}return r}function RF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=ut(r,K.YIN_YANG),a=e.directions,c=[];for(const _ of a){const g=t.getCellsInDirection(r.r,r.c,_),v=Ce(g,K.YIN_YANG),h=Ce(g,K.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${i}, ${v}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function NF(t,e,n){return Er(t,e,n,RF)}function SF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=e.directions,a=[];for(const u of i){const _=t.getCellsInDirection(r.r,r.c,u),v=`count(${Ce(_,K.NURIKABE_SHADING)}, 1)`;a.push(v)}return`constraint ${a.join(" + ")} = ${o};
`}function kF(t,e,n){return Er(t,e,n,SF)}function TF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=e.directions,a=[];for(const u of i){const _=t.getCellsInDirection(r.r,r.c,u),v=`count_loop_vars_f(${Ce(_,K.CELL_CENTER_LOOP)})`;a.push(v)}return a.length?`constraint ${a.join(" + ")} = ${o};
`:""}function MF(t,e,n){return Er(t,e,n,TF)}function UF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=ut(r,K.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const g=t.getCellsInDirection(r.r,r.c,_),h=`count(${Ce(g,K.GALAXY_REGIONS)}, ${i})`;c.push(h)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function $F(t,e,n){return Er(t,e,n,UF)}function FF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=e.directions;let a="";for(const c of i){const u=t.getCellsInDirection(r.r,r.c,c),g="["+Ct(u).join(",")+"]";a+=`constraint hot_arrows_p(${g}, ${o});
`}return a}function GF(t,e,n){return Er(t,e,n,FF)}function PF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=e.directions;let a="";for(const c of i){const u=t.getCellsInDirection(r.r,r.c,c),_=Ce(u,K.BOARD);a+=`constraint cold_arrows_p(${_}, ${o});
`}return a}function WF(t,e,n){return Er(t,e,n,PF)}function HF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=ut(r,K.CONNECT_FOUR),a=e.directions,c=[];for(const g of a){const v=t.getCellsInDirection(r.r,r.c,g);c.push(...v)}return c.length===0?"":`constraint count(${Ce(c,K.CONNECT_FOUR)}, ${i}) == ${o};
`}function zF(t,e,n){return Er(t,e,n,HF)}function BF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ae(r),i=ut(r,K.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),g=Ce(_,K.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${o}, ${i}, ${g});
`}return c}function YF(t,e,n){return Er(t,e,n,BF)}const jF=new Map([[f.HOT_ARROWS,GF],[f.COLD_ARROWS,WF],[f.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,OF],[f.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,AF],[f.LOOP_CELL_COUNT_ARROWS,MF],[f.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,NF],[f.YIN_YANG_COUNT_SHADED_CELLS,DF],[f.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,$F],[f.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,kF],[f.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,zF],[f.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,YF]]);function KF(t,e,n){return ir(t,e,n,jF)}function VF(t){let e="";return e+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,e=Mt(e,`${t}`),e}function XF(t){let e="";return e+=`constraint cave_walls_are_even_p(board, cave_shading);
`,e=Mt(e,`${t}`),e}function qF(t){let e="";return e+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,e=Mt(e,`${t}`),e}function ZF(t){let e="";return e+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,e=Mt(e,`${t}`),e}function QF(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${i});
`,u+=`constraint lits_shading_ids_p(${i}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${i});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const g of _){const v=r.getRegion(g),m=`constraint count_eq(${Ce(v,K.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function JF(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=K.CAVE_SHADING,a=K.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${i}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${K.BOARD}, ${c});
`,u}function eG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(w=>w.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.CAVE_SHADING,c=K.CAVE_REGIONS;let u=`
% ${o}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint cave_p(${a}, ${c});
`,!e.negative_constraints)return u;const _=!!e.negative_constraints[f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED],g=!!e.negative_constraints[f.CAVE_CELLS_ARE_ODD],v=!!e.negative_constraints[f.CAVE_WALLS_ARE_EVEN],h=!!e.negative_constraints[f.CAVE_LITS],m=!!e.negative_constraints[f.RENBAN_CAVES],E=!!e.negative_constraints[f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE];return _&&(u+=qF(f.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED)),g&&(u+=VF(f.CAVE_CELLS_ARE_ODD)),v&&(u+=XF(f.CAVE_WALLS_ARE_EVEN)),h&&(u+=QF(t,f.CAVE_LITS)),m&&(u+=JF(t,f.RENBAN_CAVES)),E&&(u+=ZF(f.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE)),u}function tG(t){let e="";return e+=`constraint connect_four_draw_p(${K.CONNECT_FOUR});
`,e=Mt(e,`${t}`),e}function nG(t){let e="";return e+=`constraint connect_four_adjacent_reds_different_parity_p(${K.BOARD}, ${K.CONNECT_FOUR});
`,e=Mt(e,`${t}`),e}function rG(t){let e="";return e+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${K.BOARD}, ${K.CONNECT_FOUR}, 3);
`,e=Mt(e,`${t}`),e}function oG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(v=>v.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a="connect_four";let c=`
% ${o}
`;if(c+=`% 1 - Red, 2 - Yellow
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${a};
`,!e.negative_constraints)return c;const u=!!e.negative_constraints[f.CONNECT_FOUR_DRAW],_=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3],g=!!e.negative_constraints[f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];return u&&(c+=tG(f.CONNECT_FOUR_DRAW)),_&&(c+=rG(f.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3)),g&&(c+=nG(f.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY)),c}function iG(t){let e="";return e+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,e=Mt(e,`${t}`),e}function sG(t){let e="";return e+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,e=Mt(e,`${t}`),e}function aG(t){let e="";return e+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,e=Mt(e,`${t}`),e}function lG(t){let e="";return e+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,e=Mt(e,`${t}`),e}function cG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.GALAXY_REGIONS,c=K.GALAXY_SIZES,u=r.nCols*r.nRows;let _=`
% ${o}
`;if(_+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${a};
`,_+=`constraint galaxy_restrict_numbering_p(${a});
`,_+=`array[0..${u}] of var 0..${u}: ${c};
`,_+=`constraint galaxy_sizes_p(${a}, ${c});
`,_+=`constraint adjacent_galaxies_not_size_leq_3_p(${a}, ${c});
`,_+=`constraint gallaxy_connected_regions_p(${a});
`,!e.negative_constraints)return _;const g=!!e.negative_constraints[f.EVERY_CELL_BELONGS_TO_A_GALAXY],v=!!e.negative_constraints[f.TWO_SYMMETRIC_GALAXIES],h=!!e.negative_constraints[f.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY],m=!!e.negative_constraints[f.ONE_GALAXY_IS_A_GERMAN_WHISPERS];return g&&(_+=iG(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),h&&(_+=sG(f.EVERY_CELL_BELONGS_TO_A_GALAXY)),v&&(_+=aG(f.TWO_SYMMETRIC_GALAXIES)),m&&(_+=lG(f.TWO_SYMMETRIC_GALAXIES)),_}function uG(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,e}function dG(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,e}function _G(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i=`
% ${e}
`;return i+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,i+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,i+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,i}function fG(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i=`
% ${e}
`;return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, false);
`,i+=`constraint modular_loop_p(board, cell_center_loop);
`,i}function gG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(m=>m.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=e.negative_constraints,c=a?!!a[f.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:!1;let u=`
% ${o}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,u+=`constraint cell_center_loop_p(cell_center_loop, ${c});
`,!a)return u;const _=!!a[f.NOT_LOOP_SIZED_REGIONS],g=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS],v=!!a[f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES],h=!!a[f.MODULAR_LOOP];return g&&(u+=dG(f.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS)),v&&(u+=uG(f.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES)),_&&(u+=_G(t,f.NOT_LOOP_SIZED_REGIONS)),h&&(u+=fG(t,f.MODULAR_LOOP)),u}function hG(t){let e="";return e+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,e=Mt(e,`${t}`),e}function vG(t){let e="";return e+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,e=Mt(e,`${t}`),e}function pG(t){let e="";return e+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,e=Mt(e,`${t}`),e}function mG(t){let e="";return e+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,e=Mt(e,`${t}`),e}function EG(t,e){let n="";const i="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${i});
`,n=Mt(n,`${e}`),n}function Vt(t,e,n){return t*n+e+1}function CG(t){const e=t.grid;function n(c,u){const _=[],g=Vt(c.r,c.c,e.nCols);for(let v=-1;v<=1;v++){const h=Vt(u.r+v,u.c,e.nCols);_.push([g,h]),_.push([h,g])}return _}function r(c,u){const _=[],g=Vt(c.r,c.c,e.nCols);for(let v=-1;v<=1;v++){const h=Vt(u.r,u.c+v,e.nCols);_.push([g,h]),_.push([h,g])}return _}const o=[],a=t.elementsDict.get(f.MAZE_WALL);if(!a||!a.constraints)return o;for(const c of Object.values(a.constraints)){const u=c.coords;if(u.length===1){const _=u[0],v=ll(_).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let h=Vt(v[0].r,v[0].c,e.nCols),m=Vt(v[3].r,v[3].c,e.nCols);o.push([h,m]),o.push([m,h]),h=Vt(v[1].r,v[1].c,e.nCols),m=Vt(v[2].r,v[2].c,e.nCols),o.push([h,m]),o.push([m,h])}for(let _=0;_<u.length-1;_++){const g=xR(Fv(u[_],u[_+1]),.5),h=cl(g).map(w=>e.getCell(w.r,w.c)).filter(w=>w!==void 0);if(h.length!==2)continue;const[m,E]=h;if(m.r===E.r){let w=n(m,E);o.push(...w),w=n(E,m),o.push(...w)}else if(m.c===E.c){let w=r(m,E);o.push(...w),w=r(E,m),o.push(...w)}}}return o}function bG(t){const e=t.grid,n=[],o=t.elementsDict.get(f.ONE_WAY_DOOR);if(!o||!o.constraints)return n;for(const i of Object.values(o.constraints)){const c=i.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,g=i.value,v=Vt(u.r,u.c,e.nCols),h=Vt(_.r,_.c,e.nCols);g==="<"?n.push([v,h]):g===">"&&n.push([h,v])}return n}function wG(t){const e=[];for(const n of t.getAllCells()){const r=Vt(n.r,n.c,t.nCols),o=t.getNeighboorCells(n);for(const i of o){const a=Vt(i.r,i.c,t.nCols);e.push([r,a])}}return e}function IG(t){const e=t.grid,n=[],r=[],i=t.elementsDict.get(f.TELEPORT),a=i?Object.values(i):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(i){const _=e_(a);let g=1;for(const v of _.values())if(!(v.length<=1)){for(const[h,m]of v.flatMap((E,w)=>v.slice(w+1).map(b=>[E,b]))){const E=Vt(h.cell.r,h.cell.c,e.nCols),w=Vt(m.cell.r,m.cell.c,e.nCols);n.push([E,w]),n.push([w,E]),u[h.cell.r][h.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const h of v){const m=Vt(h.cell.r,h.cell.c,e.nCols);r.push(m)}g++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function yG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(T=>T.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";let a="",c=wG(r);const u=CG(n),_=bG(n);u.push(..._);const g=n.elementsDict;c=c.filter(T=>!u.some(j=>T[0]===j[0]&&T[1]===j[1]));const v=IG(n);if(v.tp_edges.length){c.push(...v.tp_edges);const T=Ep(v.tp_arr),j=v.tp_count;a+=`
% teleports grid
`,a+=`array[ROW_IDXS, COL_IDXS] of 0..${j}: teleports = array2d(ROW_IDXS, COL_IDXS, ${T});
`}t.edge_list=c,console.log(c);const h=r.nRows*r.nCols,m=c.length,E="["+c.map(T=>T[0]).join(",")+"]",w="["+c.map(T=>T[1]).join(",")+"]";a+=`array[int] of int: dpath_from = ${E};
`,a+=`array[int] of int: dpath_to = ${w};
`,a+=`var 1..${h}: dpath_source;
`,a+=`var 1..${h}: dpath_target;
`,a+=`array[1..${h}] of var bool: dpath_ns;
`,a+=`array[1..${m}] of var bool: dpath_es;
`,a+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,a+=`
% Direct Path no crossings
`;for(let T=0;T<r.nRows-1;T++)for(let j=0;j<r.nCols-1;j++){const ee=r.getCell(T,j),ce=r.getCell(T,j+1),Z=r.getCell(T+1,j),ne=r.getCell(T+1,j+1);if(!ee||!ce||!Z||!ne)continue;const he=Vt(ee.r,ee.c,r.nCols),re=Vt(ce.r,ce.c,r.nCols),ge=Vt(Z.r,Z.c,r.nCols),Ie=Vt(ne.r,ne.c,r.nCols),Me=[[he,Ie],[Ie,he],[re,ge],[ge,re]].map(Se=>c.findIndex(Xe=>Se[0]===Xe[0]&&Se[1]===Xe[1])).filter(Se=>Se!==-1);if(Me.length){const Se=Me.map(Xe=>`dpath_es[${Xe+1}]`).join(",");a+=`constraint sum([${Se}]) <= 1;
`}}const b=g.get(f.TELEPORT),I=b?Object.values(b):[];if(v.tp_count>0){a+=`
% At most 1 edge per teleporter
`;for(const T of I){const j=T.cell,ee=r.getCell(j.r,j.c);if(!ee)continue;const ce=r.getNeighboorCells(ee),Z=Vt(ee.r,ee.c,r.nCols),ne=[];for(const re of ce){if(I.some(ye=>ye.cell.r===re.r&&ye.cell.c==re.c&&ye.value===T.value))continue;const Ie=Vt(re.r,re.c,r.nCols);ne.push([Z,Ie]),ne.push([Ie,Z])}const he=ne.map(re=>c.findIndex(ge=>re[0]===ge[0]&&re[1]===ge[1])).filter(re=>re!==-1);if(he.length){const re=he.map(ge=>`dpath_es[${ge+1}]`).join(",");a+=`constraint sum([${re}]) <= 1;
`}}}if(!e.negative_constraints)return a;const A=!!e.negative_constraints[f.DIRECTED_PATH_IS_PARITY_LINE],k=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS],M=!!e.negative_constraints[f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME],G=!!e.negative_constraints[f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME],z=!!e.negative_constraints[f.DIRECTED_PATH_IS_REGION_SUM_LINE];return M&&(a+=hG(f.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME)),A&&(a+=mG(f.DIRECTED_PATH_IS_PARITY_LINE)),k&&(a+=vG(f.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS)),G&&(a+=EG(n,f.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME)),z&&(a+=pG(f.DIRECTED_PATH_IS_REGION_SUM_LINE)),a}function OG(t,e){const n=t.grid;let r=`
% ${e}
`;const o=K.YIN_YANG;for(const[i,a]of Zr(n)){const c=Ae(i),u=Ae(a),_=`${o}[${i.r},${i.c}]`,g=`${o}[${a.r},${a.c}]`,v=`constraint (${_} == 1 /\\ ${g} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=v}return r}function xG(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const i=r.getNeighboorCells(o).filter(_=>o.region!==null&&_.region===o.region),a=ut(o,K.BOARD),c=ut(o,K.YIN_YANG),u=Ce(i,K.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=Mt(n,`${e}`),n}function AG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${o} not implemented when there are cells outisde the grid.`),"";let a=`
% ${o}
`;if(a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,a+=`constraint yin_yang_p(yin_yang);
`,!e.negative_constraints)return a;const c=!!e.negative_constraints[f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED],u=!!e.negative_constraints[f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS];return c&&(a+=xG(n,f.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED)),u&&(a+=OG(n,f.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS)),a}function LG(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,i]of Zr(n)){const a=Ae(o),c=Ae(i),u=ut(o,K.NURIMISAKI),_=ut(i,K.NURIMISAKI),g=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=g}return r}function DG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${o} not implemented when there are cells outisde the grid.`),"";let a=`
% ${o}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,a+=`constraint nurimisaki_p(nurimisaki);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIMISAKI_PATH_GERMAN_WHISPERS]&&(a+=LG(n,f.NURIMISAKI_PATH_GERMAN_WHISPERS)),a}function RG(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,i}function NG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${o} not implemented when there are cells outisde the grid.`),"";let a=`
% ${o}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,a+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,e.negative_constraints&&!!e.negative_constraints[f.NURIKABE_NO_REPEATS_IN_ISLANDS]&&(a+=RG(t,f.NURIKABE_NO_REPEATS_IN_ISLANDS)),a}function SG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${o} not implemented when there are cells outisde the grid.`),"";let a=`
% ${o}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,a+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,a}function kG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${o} not implemented when there are cells outisde the grid.`),"";const a=Math.max(r.nCols,r.nRows),u="["+Nt.range(1,a+1).join(",")+"]";let _=`
% ${o}
`;return _+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: unknown_regions;
`,_+=`constraint chaos_construction_p(unknown_regions, ${u}, ${a});
`,_+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,_}function TG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(v=>v.outside))return console.warn(`${o} not implemented when there are cells outisde the grid.`),"";const a=K.UNKNOWN_REGIONS,c=Math.max(r.nCols,r.nRows),_="["+Nt.range(1,c+1).join(",")+"]";let g=`
% ${o}
`;return g+=`array[ROW_IDXS, COL_IDXS] of var 1..${c}: ${a};
`,g+=`constraint numbered_chaos_construction_p(${K.BOARD}, ${a}, ${_}, ${c});
`,g+=`constraint no_repeats_in_unknown_regions_p(${K.BOARD}, ${a}, ALLOWED_DIGITS, ${_});
`,g}function MG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${o} not implemented when there are cells outisde the grid.`),"";let a=`
% ${o}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,a+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,a+=`constraint sashigane_adjacency_p(sashigane);
`,a+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,a+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,a+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,a}function UG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.FILLOMINO_REGIONS;let c=`
% ${o}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint fillomino_p(board, ${a});
`,c}function $G(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`constraint shikaku_no_repeats_in_regions_p(${K.BOARD}, ${K.SHIKAKU_REGIONS});
`,i}function FG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(v=>v.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.SHIKAKU_REGIONS;let c=`
% ${o}
`;const u=r.nRows,_=r.nCols;return c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${K.SHIKAKU_HEIGHT};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..${_}: ${K.SHIKAKU_WIDTH};
`,c+=`constraint shikaku_p(${a}, ${K.SHIKAKU_WIDTH}, ${K.SHIKAKU_HEIGHT});
`,e.negative_constraints&&!!e.negative_constraints[f.SHIKAKU_NO_REPEATS_IN_REGION]&&(c+=$G(t,f.SHIKAKU_NO_REPEATS_IN_REGION)),c}function GG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";let a=`
% ${o}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,a+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,a}function PG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";let a=`
% ${o}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint goldilocks_zone_p(goldilocks_regions);
`,a+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,a}function WG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=12,c=K.PENTOMINO_REGIONS;let u=`
% ${o}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${a}: ${c};
`,u+=`constraint pentomino_tilling_p(${c});
`,u}function HG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.LITS_SHADING,c=K.LITS_REGIONS,u=K.LITS_GRID,_=K.BOARD_REGIONS,g=[...r.getUsedRegions()];g.sort();const v=Math.min(...g),h=Math.max(...g);let m=`
% ${o}
`;m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${c};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..${g.length}: ${u};
`,m+=`constraint lits_shading_p(${a});
`,m+=`constraint lits_shading_ids_p(${a}, ${c});
`,m+=`constraint lits_region_and_ids_p(${_}, ${c});
`,m+=`constraint lits_tetromino_shapes_p(${c});
`,m+=`constraint lits_grid_p(${u}, ${_}, ${a}, ${v}..${h});
`,g.length&&(m+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const E of g){const w=r.getRegion(E),I=`constraint count_eq(${Ce(w,K.LITS_SHADING)}, 1, 4);
`;m+=I}return m}function zG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.NORINORI_SHADING;let c=`
% ${o}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=`constraint norinori_p(${K.BOARD_REGIONS}, ${a});
`,r.getUsedRegions().size&&(c+=`
% Exactly 2 shaded cells per region (known regions)
`),c+=t_(n,2,1,K.NORINORI_SHADING),c}function BG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(_=>_.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.NORINORI_SHADING,c=K.STAR_BATTLE;let u=`
% ${o}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${c};
`,u+=bp(2,1,c),u+=Cp(2,1,c),u+=t_(n,1,1,c),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${c});
`,u+=`
% Stars cannot be placed on shaded Norinori cells
`,u+=`constraint norinori_star_battle_not_on_shaded_p(${a}, ${c});
`,u}function YG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.LITS_SHADING,c=K.STAR_BATTLE,u=K.LITS_WHITE_BLACK_STAR_BATTLE;let _=`
% ${o}
`;return _+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${c};
`,_+=hi(n,2,1,K.STAR_BATTLE),_+=`
% Star battle stars can't touch orthogonally or diagonally
`,_+=`constraint star_battle_no_touching_p(${c});
`,_+=`
`,_+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${u};
`,_+=`
% 1 white star per row, column, region
`,_+=hi(n,1,1,K.LITS_WHITE_BLACK_STAR_BATTLE),_+=`
% 1 black star per row, column, region
`,_+=hi(n,1,2,K.LITS_WHITE_BLACK_STAR_BATTLE),_+=`constraint black_and_white_star_battle_p(${c}, ${u});
`,_+=`constraint lits_black_and_white_star_battle_p(${a}, ${u});
`,_}function jG(t,e){const r=t.puzzle.grid,o=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.SUGURU_REGIONS;let c=`
% ${o}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint chaos_construction_suguru_p(board, ${a});
`,c}const KG=new Map([[f.CAVE,eG],[f.CONNECT_FOUR,oG],[f.GALAXIES,cG],[f.CELL_CENTER_LOOP_NO_TOUCHING,gG],[f.MAZE_DIRECTED_PATH,yG],[f.YIN_YANG,AG],[f.NURIMISAKI,DG],[f.NURIKABE,NG],[f.SHIKAKU,FG],[f.PENTOMINO_TILLING,WG],[f.CHAOS_CONSTRUCTION,kG],[f.NUMBERED_CHAOS_CONSTRUCTION,TG],[f.CHAOS_CONSTRUCTION_SUGURU,jG],[f.TWO_CONTIGUOUS_REGIONS,SG],[f.NORINORI,zG],[f.NORINORI_STAR_BATTLE,BG],[f.SASHIGANE,MG],[f.LITS,HG],[f.LITS_BLACK_WHITE_STAR_BATTLE,YG],[f.FILLOMINO,UG],[f.NEXUS,GG],[f.GOLDILOCKS_ZONE,PG]]);function VG(t,e){let n="";const r=e.tool_id,o=KG.get(r);if(o){const i=o(t,e);n+=i}return n}function XG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(c=>c.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";let a=`
% ${o}
`;return a+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,a+=hi(n,1,!0,K.DOUBLERS),a+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,a}function qG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a="negators_grid";let c=`
% ${o}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,c+=hi(n,1,!0,K.NEGATORS),c+=`
constraint one_of_each_digit_p(board, ${a}, ALLOWED_DIGITS);
`,c+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${a});
`,c}function ZG(t,e){const n=t.puzzle,r=n.grid,o=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${o} not implemented when there are cells outside the grid.`),"";const a=K.INDEXER_CELLS_GRID;let c=`
% ${o}
`;return c+=`array[ROW_IDXS, COL_IDXS] of var bool: ${a};
`,c+=hi(n,2,!0,a),c+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,c+=`constraint indexer_cells_p(board, ${a}, values_grid);
`,c}function QG(t,e,n,r){const o=r.value;return o?`constraint forbidden_adjacent_sum_p(board, ${parseInt(o)});
`:""}function JG(t,e,n){return He(t,e,n,QG)}function e8(t,e,n,r){const o=r.value;return o?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(o)});
`:""}function t8(t,e,n){return He(t,e,n,e8)}function n8(t,e,n,r){const o=r.value;return o?`constraint forbidden_knight_sum_p(board, ${parseInt(o)});
`:""}function r8(t,e,n){return He(t,e,n,n8)}function o8(t,e,n,r){const o=r.value;if(!o)return"";const i=parseInt(o),a=[...e.getUsedRegions()];a.sort();const c=a.length;return`constraint lits_max_tetromino_sum_p(${K.BOARD}, ${K.LITS_GRID}, ${i}, 0..${c});
`}function i8(t,e,n){return He(t,e,n,o8)}const s8=new Map([[f.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,JG],[f.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,t8],[f.FORBIDDEN_KNIGHT_SUM,r8],[f.LITS_MAX_TETROMINO_SUM,i8]]);function a8(t,e,n){return ir(t,e,n,s8)}const l8=[Y3,IF,$U,KF,R5,s5,eU,_3,$3,NU,X3,a8],c8=new Map([[f.DOUBLERS,XG],[f.NEGATORS,qG],[f.INDEXER_CELLS,ZG]]);function u8(t,e){let n="";const r=e.tool_id,o=c8.get(r);if(o){const i=o(t,e);n+=i}return n}function d8(t,e){let n="";const r=t.elementsDict,o=t.grid;for(const i of r.values())n+=VG(e,i);for(const i of r.values())n+=u8(e,i);for(const[i,a]of r.entries())for(const c of l8){let u=c(e,o,a);u=Mt(u,`${i}`),n+=u}for(const i of r.values())n+=o3(e,i);return n}function _8(){return`
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

`}function f8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const i=`constraint ${Ae(r)} = ${r.value};
`;n+=i}return n.length&&(n=`
% Given Digits
`+n),n}function Gp(t,e=!1){const n=t.grid;let r=t.valid_digits;const o=new ST(t),[i,a]=[n.nRows,n.nCols],c=i*a;o.add(`include "globals.mzn";
`),o.add(`include "alldifferent.mzn";

`),o.add(_8());let _=`1..${Math.max(i,a)}`;const g=t.elementsDict,v=!!g.get(f.FILLOMINO),h=!!g.get(f.HEXED_SUDOKU);return v?_=`1..${c}`:h?r=[...Nt.range(1,16)]:r&&(_="{"+r.join(",")+"}"),o.add(`set of int: ROW_IDXS = 0..${i-1};
`),o.add(`set of int: COL_IDXS = 0..${a-1};
`),o.add(`set of int: ALLOWED_DIGITS = ${_};
`),o.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),TT(o,n),o.add(f8(t)),o.add(t3(t)),o.add(n3(t)),o.add(d8(t,o)),e?o.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):o.add(`
solve satisfy;`),o}const Uh=encodeURIComponent("4.4.2");let yr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Uo=[];let Du;function bs(){if(!Du){const e=`importScripts(${JSON.stringify(yr.workerURL)});`;Du=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Du);t.postMessage({wasmURL:yr.wasmURL?yr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Uh}`,yr.workerURL).toString(),dataURL:yr.dataURL?yr.dataURL.toString():new URL(`./minizinc.data?version=${Uh}`,yr.workerURL).toString()}),Uo.push({worker:t,runCount:0})}function Pp(){for(;Uo.length<yr.numWorkers;)bs()}async function g8(t){if(yr={...yr,...t},Uo.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Pp(),await Promise.race(Uo.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class d_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new d_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Pp();const o=[];let i=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;i={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:a,runCount:c}=Uo.pop();return a.postMessage({jsonStream:!0,files:i,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:i,runCount:a}=this._run(["--model-check-only"],o.options),c=[];i.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Uo.push({worker:i,runCount:a}):(i.terminate(),bs()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:i,runCount:a}=this._run(["--model-interface-only"],o.options),c=[];let u=null;i.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?Uo.push({worker:i,runCount:a}):(i.terminate(),bs()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const i=["-c","--fzn",o],{worker:a}=this._run(i,n.options,[o]);bs();let c={},u=!1,_=null;return a.onmessage=g=>{if(c[g.data.type])for(const v of c[g.data.type])v(g.data);switch(g.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,v){c[g]?c[g].add(v):c[g]=new Set([v])},off(g,v){c[g]&&c[g].delete(v)},then(g,v){const h=m=>{if(m.code===0)g(m.outputFiles[o]);else{const E=_?{message:_.message,...m}:m;if(!v)throw E;v(E)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);bs();let i=null,a={},c=!1,u=null,_={},g="UNKNOWN";return o.onmessage=v=>{if(a[v.data.type])for(const h of a[v.data.type])h(v.data);switch(v.data.type){case"exit":o.terminate(),c=!0,a={};break;case"error":i||(i=v.data);break;case"statistics":_={..._,...v.data.statistics};break;case"solution":u=v.data,g="SATISFIED";break;case"status":g=v.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),a.exit)for(const v of a.exit)v({type:"exit",code:null});a={}}},on(v,h){a[v]?a[v].add(h):a[v]=new Set([h])},off(v,h){a[v]&&a[v].delete(h)},then(v,h){const m=E=>{if(E.code===0)v({status:g,solution:u,statistics:_});else{const w=i?{message:i.message,...E}:E;if(!h)throw w;h(w)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var h8=ue('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function v8(t,e){ae(e,!1);const n=Ve(),r=()=>me(Xr,"$puzzleMetaStore",n);let o=U(e,"showModal",12,!1);function i(v,h,m){var E=document.createElement("a"),w=new Blob([v],{type:m});E.href=URL.createObjectURL(w),E.download=h,E.click(),URL.revokeObjectURL(E.href)}function a(){const v=Ne(Ys);return Gp(v).model_str}function c(){const v=a();navigator.clipboard.writeText(v)}function u(){const v=a(),h=kh(v);navigator.clipboard.writeText(h)}function _(){const v=_l(r()),h=a();i(h,`${v}.mzn`,"text/plain")}function g(){const v=_l(r()),h=a(),m=kh(h);i(m,`${v}.mzn`,"text/plain")}fe(),qr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(v){o(v)},children:(v,h)=>{var m=h8(),E=Y(m),w=$(E,2),b=$(w,2),I=$(b,2),A=$(I,2),k=$(Y(A));x(k,"href","https://play.minizinc.dev/"),_o(),P(A),P(m),ke("click",E,c),ke("click",w,u),ke("click",b,_),ke("click",I,g),L(v,m)},$$slots:{default:!0},$$legacy:!0}),le()}function ji(t,e,n){const r=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const g=Number(c[u]),v=n.get(g);v!==void 0&&(r.push(_),o.push([v]))}}const i=Pl(r,o);Ei(i)}function p8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],i=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const E=[];o.push(E),a(h,m,t[h][m])}function a(h,m,E){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==E||(r[h][m]=!0,o[o.length-1].push([h,m]),a(h+1,m,E),a(h-1,m,E),a(h,m+1,E),a(h,m-1,E))}const c=Array(o.length).fill(0).map(()=>new Set);function u(h,m){for(const[E,w]of h)for(const[b,I]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+b,k=w+I;if(m.some(([M,G])=>M===A&&G===k))return!0}return!1}for(let h=0;h<o.length;h++)for(let m=h+1;m<o.length;m++)u(o[h],o[m])&&(c[h].add(m),c[m].add(h));const _=[1,4,7,9],g=new Array(o.length).fill(0);function v(h,m){for(const E of c[h])if(g[E]===m)return!1;return!0}for(let h=0;h<o.length;h++)for(const m of _)if(v(h,m)){g[h]=m;break}for(let h=0;h<o.length;h++)for(const[m,E]of o[h])i[m][E]=g[h];return i}function m8(t,e){const n=e.grid,o=!!e.elementsDict.get(f.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const a=[],c=[];for(let _=0;_<i.length;_++){const g=i[_];for(let v=0;v<g.length;v++){const h=n.getCell(_,v);if(!h||h.given||o&&!h.given&&h.value===null)continue;const m=g[v];a.push(h),c.push(m)}}const u=gp(a,c);Ei(u)}function E8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const i=t[o];if(i!==void 0){ji(i,e,r);return}}}function C8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const i=t[o];if(i!==void 0){ji(i,e,r);return}}}function b8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const g=c[u];o.push([g])}}const i=Pl(r,o);Ei(i)}function w8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;ji(n,e,new Map([[0,4],[1,7],[2,9]]))}function I8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;ji(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function y8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;ji(n,e,new Map([[1,7],[2,4],[3,9]]))}function O8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;ji(n,e,new Map([[1,7],[2,8]]))}function x8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[i,a]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<o.length;g++){const v=o[g];for(let h=0;h<v.length-1;h++){const m=e.getCell(g,h),E=e.getCell(g,h+1);if(!m||!E)continue;const w=v[h],b=v[h+1];if(w===b)continue;const I={colorId:c,p1:{r:g,c:h+1},p2:{r:g+1,c:h+1}};u.push(I)}}for(let g=0;g<a;g++)for(let v=0;v<i-1;v++){const h=e.getCell(v,g),m=e.getCell(v+1,g);if(!h||!m)continue;const E=o[v][g],w=o[v+1][g];if(E===w)continue;const b={colorId:c,p1:{r:v+1,c:g},p2:{r:v+1,c:g+1}};u.push(b)}const _=Ls(u);Dr(_);return}}function A8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const i=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const g=e.getCell(c,_);if(g)for(const v of e.getOrthogonallyAdjacentCells(g)){if(!v||!(v.r>g.r||v.c>g.c))continue;const h=o[g.r][g.c],m=o[v.r][v.c];if(!(h===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:v.r+.5,c:v.c+.5}};i.push(E)}}}const a=Ls(i);Dr(a);return}}function L8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const i=p8(o);if(!i)return;const a=[],c=[];for(let _=0;_<i.length;_++){const g=i[_];for(let v=0;v<g.length;v++){const h=e.getCell(_,v);if(!h)continue;a.push(h);const m=g[v];c.push([m])}}const u=Pl(a,c);Ei(u);return}}function D8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const o=t[r];if(o===void 0)continue;const i=[];for(let c=0;c<o.length;c++){const u=o[c];for(let _=0;_<u.length;_++){const g=e.getCell(c,_);if(!g)continue;const v=o[g.r][g.c];if(v===0)continue;const m={colorId:v===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};i.push(m)}}const a=mS(i);Dr(a);return}}function R8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,o=e.puzzle.grid,i=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[g,v]=_,[h,m]=[Math.floor((g-1)/o.nCols),(g-1)%o.nCols],[E,w]=[Math.floor((v-1)/o.nCols),(v-1)%o.nCols];if(!Ws({r:h,c:m},{r:E,c:w}))continue;const A={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:E+.5,c:w+.5}};i.push(A)}const a=Ls(i);Dr(a)}function N8(t,e){const n=e.puzzle,r=n.grid;Dr(Hd()),m8(t,n),b8(t,r),x8(t,r),w8(t,r),I8(t,r),A8(t,r),C8(t,r),L8(t,r),E8(t,r),D8(t,r),y8(t,r),R8(t,e),O8(t,r)}function S8(){const{subscribe:t,set:e}=It(0),n=100;let r=Date.now(),o,i=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-i,o=setInterval(()=>{i=Date.now()-r,e(i)},n))},stop:()=>{a&&(a=!1,clearInterval(o),i=Date.now()-r)},reset:()=>{a=!1,clearInterval(o),i=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:i})}}var k8=ue('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function T8(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ys,"$puzzleStore",n),o=()=>me(En,"$gridStore",n),i=()=>me(I,"$timer",n),a=D(),c=D(),u=D(),_=D();let g=D(!0),v=D(!1),h=D(null),m=D(100),E=D("100"),w=D(null),b=D("IDLE");const I=S8();function A(j){return j===null?"":String(j)}function k(j){const ee=Math.floor(j/6e4),ce=Math.floor(j%6e4/1e3),Z=Math.floor(j%1e3/100),ne=ce.toString().padStart(2,"0");return`${ee}:${ne}.${Z}`}function M(){O(v,!0)}function G(j){const ee=parseInt(j);typeof ee=="number"&&ee>=1&&O(m,ee)}async function z(){O(w,0),O(b,"SOLVING...");const j=new d_;cp();const ee=Gp(d(a));j.addFile("test.mzn",ee.model_str),I.reset(),I.start(),O(h,j.solve({options:{solver:"chuffed","num-solutions":d(m)}})),d(h).on("solution",ce=>{const Z=ce.output.json;ce.type==="solution"&&d(w)!==null&&O(w,d(w)+1),N8(Z,ee)}),d(h).on("error",ce=>{O(u,"Solve"),O(b,"ERROR"),console.log(ce.message),I.stop(),d(h)&&d(h).cancel()}),d(h).on("warning",ce=>{O(b,"WARNING"),console.log(ce.message)}),d(h).then(ce=>{O(b,ce.status),O(u,"Solve"),I.stop()})}function T(){d(h)===null||!d(h).isRunning()?z():d(h)!==null&&d(h).isRunning()&&(O(b,"IDLE"),O(u,"Solve"),I.stop(),d(h).cancel())}N(()=>r(),()=>{O(a,r())}),N(()=>o(),()=>{O(c,o())}),N(()=>{},()=>{O(u,"Solve")}),N(()=>i(),()=>{O(_,i())}),N(()=>d(h),()=>{d(h)&&(d(h)!==null&&d(h).isRunning()?O(u,"Stop"):O(u,"Solve"))}),we(),fe(),Fl(t,{get isOpen(){return d(g)},set isOpen(j){O(g,j)},$$slots:{"panel-header":(j,ee)=>{$l(j,{slot:"panel-header",title:"Solver",get isOpen(){return d(g)},set isOpen(ce){O(g,ce)},$$legacy:!0})},"panel-content":(j,ee)=>{var ce=k8(),Z=oe(ce),ne=$(Z,2);v8(ne,{get showModal(){return d(v)},set showModal(yt){O(v,yt)},$$legacy:!0});var he=$(ne,2),re=Y(he,!0);P(he);var ge=$(he,2),Ie=Y(ge,!0);P(ge);var ye=$(ge,2),Me=Y(ye);fn(Me),x(Me,"min",1),x(Me,"max",200),x(Me,"step",1),P(ye);var Se=$(ye,2),Xe=Y(Se,!0);Q(()=>at(Xe,`Solution Count: ${A(d(w))}`)),P(Se);var qe=$(Se,2),mt=Y(qe,!0);Q(()=>at(mt,`Elapsed Time: ${k(d(_))}`)),P(qe);var Lt=$(qe,2),Wt=Y(Lt,!0);P(Lt),Q(()=>{at(re,d(u)),at(Ie,`Max. Solutions: ${d(m)}`),at(Wt,`Status: ${d(b)}`)}),ke("click",Z,M),ke("click",he,T),Zn(Me,()=>d(E),yt=>O(E,yt)),ke("input",Me,()=>G(d(E))),L(j,ce)}},$$legacy:!0}),le()}var M8=ue('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!></div></div>');function U8(t){var e=M8(),n=Y(e);IT(n);var r=$(n,2),o=Y(r);T8(o,{});var i=$(o,2);uk(i,{elementHandlers:Pt});var a=$(i,2);Tk(a,{elementHandlers:Pt});var c=$(a,2);OT(c,{}),P(r),P(e),L(t,e)}var $8=te('<path class="cursor svelte-zsq70u"></path>');function F8(t,e){ae(e,!1);const n=Ve(),r=()=>me(Qt,"$toolStore",n),o=()=>me(Po,"$selectionStore",n),i=D(),a=D(),c=.25;function u(g){if(!g)return"";const[v,h]=[g.c,g.r];return`M${v},${h}L${v+c},${h}L${v},${h+c}Z`}N(()=>r(),()=>{O(i,Rd(r()))}),N(()=>o(),()=>{O(a,u(o().lastCell))}),we(),fe();var _=$8();Q(()=>{x(_,"d",d(a)),x(_,"visibility",d(i)?"visible":"hidden")}),L(t,_),le()}var G8=te('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function P8(t,e){ae(e,!1);let n=U(e,"gridShape",8);fe();var r=G8(),o=Y(r);x(o,"x",0),x(o,"y",0),P(r),Q(()=>{x(o,"width",n().nCols),x(o,"height",n().nRows)}),L(t,r),le()}var W8=te('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),H8=te('<g class="grid-lines"></g>');function z8(t,e){ae(e,!1);const n=Ve(),r=()=>me(En,"$gridStore",n),o=D();N(()=>r(),()=>{O(o,r().getAllCells())}),we(),fe();var i=H8();Je(i,5,()=>d(o),pt,(a,c)=>{var u=W8();x(u,"width",1),x(u,"height",1),Q(()=>{x(u,"x",d(c).c),x(u,"y",d(c).r)}),L(a,u)}),P(i),L(t,i),le()}function B8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function Y8(t){const e=new Map;function n(r,o){const i=e.get(o);if(i!=null&&i.has(r)){i.delete(r),i.size<=0&&e.delete(o);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(o)}for(const r of t){const o=B8(r),i=o.length;for(let a=0;a<i;a++){const c=o[a%i],u=o[(a+1)%i],_=JSON.stringify(c),g=JSON.stringify(u);n(_,g)}}return e}function j8(t,e=0,n=!1){const r=[],o=Y8(t);if(o.size<=0)return r;const i=new Set;for(;o.size>0;){const a=Array.from(o.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const g=Array.from(u)[0];let v=JSON.parse(g),h=g;const m=[];do{const E=o.get(h);if(E===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const w=new Re(_.c,_.r),b=new Re(v.c,v.r);let I=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,k=null;for(const ne of E){const he=JSON.parse(ne),re=new Re(he.c,he.r),ge=b.subtract(w),Ie=re.subtract(b),ye=ge.perpDotProduct(Ie);I<ye!=n&&(I=ye,k=he,A=ne)}if(n&&E.size>1&&i.add(h),k===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&o.delete(h);const M=e*(v.c-_.c),G=e*(k.c-v.c),z=e*(_.r-v.r),T=e*(v.r-k.r),j=T+I*G,ee=M+I*z,ce=new Re(v.c+j,v.r+ee),Z=4;i.has(h)?(m.push(new Re(ce.x-Z*M,ce.y-Z*G)),m.push(new Re(ce.x-Z*z,ce.y-Z*T))):m.push(ce),_=v,v=k,h=A}while(h!==g);r.push(m)}return r}function Ci(t,e=0,n=!1){return j8(t,e,n).map(i=>Ki(i,!0)).join("")}const K8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5)];function V8(t,e,n=K8){if(e===1)return n;const r=[],o=n.length,i=0,a=360/e,c=t*a+i,u=(t+1)*a+i,_=c/(360/o),g=u/(360/o),v=Math.floor(_)%o,h=Math.ceil(_)%o,m=n[v].lerp(n[h],_%1),E=Math.floor(g)%o,w=Math.ceil(g)%o,b=n[E].lerp(n[w],g%1);r.push(m);for(let A=Math.ceil(_);A<=Math.floor(g);A++)r.push(n[A%o]);r.push(b);const I=new Re(0,0);return r.push(I),r}function Wp(t,e,n=new Re(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const i=Math.cos(Math.PI/e),a=r?t:t/i,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+o*2*Math.PI),g=a*Math.sin(u/e*2*Math.PI+o*2*Math.PI),v=n.add(new Re(_,g));c.push(v)}return c}function Ki(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:i})=>`${o},${i}`).join("L")+n}function go(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){const i=t.map(g=>new Re(g.x,g.y));if(r&&i.length>1){const g=i[i.length-1];for(let h=0;h<i.length-1;h++)if(g.equals(i[h])){i.push(i[h+1]);break}const v=i[0];for(let h=1;h<i.length;h++)if(v.equals(i[h])){i.unshift(i[h-1]);break}}if(i.length===1)i.push(i[0]);else{if(e){let g=i[1].subtract(i[0]);g=g.normalise(),g=g.scale(e),i[0]=i[0].add(g)}if(n){const g=i.length;let v=i[g-2].subtract(i[g-1]);v=v.normalise(),v=v.scale(n),i[g-1]=i[g-1].add(v)}}if(!o)return Ki(i);const a=i[0],c=["M",`${a.x},${a.y}`],u=i.length;for(let g=2;g<u;g++){const v=i[g-2],h=i[g-1],m=i[g];let E=v.subtract(h).normalise();E=E.scale(o),E=E.add(h);let w=m.subtract(h).normalise();w=w.scale(o),w=w.add(h),c.push(`L${E.x},${E.y} Q ${h.x},${h.y} ${w.x},${w.y}`)}const _=i[u-1];return c.push(`L${_.x},${_.y}`),c.join(" ")}function vl(t,e={}){const n=Xl(t);return go(n,e)}function er(t){return new Re(t.c+.5,t.r+.5)}function Xl(t){return t.map(n=>er(n))}const X8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5),new Re(0,-.5),new Re(0,.5),new Re(-.5,0),new Re(.5,0)];function q8(t,e){const n=X8[t];return n.subtract(n.scale(e))}function Hp(t,e){const n=[new Re(t.c-e,t.r-e),new Re(t.c+e,t.r+e)],r=[new Re(t.c-e,t.r+e),new Re(t.c+e,t.r-e)];return[n,r].map(i=>Ki(i,!1)).join("")}const Z8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function ql(t,e="none"){return Z8.get(t)||e}function Q8(t,e,n){let r=[];function i(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Re(-.12,-.32),new Re(0,-.4),new Re(.12,-.32)]:a=[new Re(-.12,-.4),new Re(0,-.32),new Re(.12,-.4)],r=[a,i(a,90),i(a,180),i(a,270)],r=r.map(c=>c.map(u=>{const _=new Re(n+.5,e+.5);return u.add(_)})),r}function __(t,e){const n=[new Re(-t,0),new Re(0,0),new Re(0,t)],o={[Pe.NE]:0,[Pe.E]:Math.PI/4,[Pe.SE]:Math.PI/2,[Pe.S]:3*Math.PI/4,[Pe.SW]:Math.PI,[Pe.W]:5*Math.PI/4,[Pe.NW]:3*Math.PI/2,[Pe.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(o))}function J8(t,e){const r=Hs(e),o=new Re(r.c,r.r).normalise().scale(.3),i=er(t),a=i.subtract(o),c=i.add(o);return[a,c]}function eP(t,e){const r=J8(t,e);let o=__(.2,e);o=o.map(u=>u.add(r[1]));const i=go(r),a=go(o);return i+a}function tP(t,e){const r=Hs(e),o=new Re(r.c,r.r),a=er(t).add(o.scale(.4));return[a.subtract(o.normalise().scale(.2)),a]}function Ru(t,e){const r=tP(t,e);let o=__(.1,e);o=o.map(u=>u.add(r[1]));const i=go(r),a=go(o);return i+a}var nP=te('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),rP=te('<g class="regions-border"></g>');function oP(t,e){ae(e,!1);const n=Ve(),r=()=>me(Qn,"$cellsStore",n),o=D(),i=D();function a(u,_){return u.filter(h=>h.region===_).map(h=>({r:h.r,c:h.c}))}N(()=>r(),()=>{O(o,r())}),N(()=>d(o),()=>{O(i,new Set(d(o).map(u=>u.region).filter(u=>u!==null)))}),we(),fe();var c=rP();Je(c,5,()=>d(i),pt,(u,_)=>{var g=nP();Q(()=>x(g,"d",Ci(a(d(o),d(_)),0,!1))),Q(()=>x(g,"id",`region-${d(_)??""}`)),L(u,g)}),P(c),L(t,c),le()}var iP=te('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function sP(t,e){ae(e,!1);const n=Ve(),r=()=>me(Po,"$selectionStore",n),o=()=>me(Qt,"$toolStore",n),i=D(),a=D(),c=D(),u=D(),_=D(),g=D();let v=U(e,"boundingBox",8);const h=.06,m=.05,E="#080808",w="#b2b2b2";N(()=>X(v()),()=>{O(i,v().x)}),N(()=>X(v()),()=>{O(a,v().y)}),N(()=>r(),()=>{O(c,r().cells)}),N(()=>d(c),()=>{O(u,Ci(d(c),0))}),N(()=>d(c),()=>{O(_,Ci(d(c),h))}),N(()=>o(),()=>{O(g,Rd(o()))}),we(),fe();var b=iP(),I=Y(b),A=Y(I);x(A,"stdDeviation",m),_o(),P(I);var k=$(I),M=Y(k);x(M,"fill",w);var G=$(M);x(G,"fill",E),P(k);var z=$(k);P(b),Q(()=>{x(b,"visibility",d(g)?"visible":"hidden"),x(k,"x",d(i)),x(k,"y",d(a)),x(M,"x",d(i)),x(M,"y",d(a)),x(G,"d",d(_)),x(z,"d",d(u))}),L(t,b),le()}var aP=te('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function lP(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"grid",8);N(()=>X(o()),()=>{O(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),N(()=>d(n),()=>{O(r,Ci(d(n),0))}),we(),fe();var i=aP(),a=Y(i);P(i),Q(()=>x(a,"d",d(r))),L(t,i),le()}function cP(t,e){const n=t.getRow(e.r);return new Set(n)}function uP(t,e){const n=t.getCol(e.c);return new Set(n)}function dP(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function _P(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function fP(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function gP(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function hP(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function vP(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function pP(t,e,n){let r=new Set;const i=n.cells.map(v=>t.getCell(v.r,v.c)).filter(v=>v!==void 0),a=i.length,c=[i[0],i[a-1]],u=i.slice(1,a-1),_=c.findIndex(v=>v===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const v=c.filter((h,m)=>m!==_);r=new Set([...r,...v])}return r}return u.findIndex(v=>v===e)!==-1&&(r=new Set([...r,...c])),r}function mP(t,e,n){let r=new Set;const i=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!i.find(u=>u===e))return r;const c=i.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function EP(t,e,n){let r=new Set;const i=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!i.find(u=>u===e))return r;const c=i.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function CP(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(!!e.get(f.ANTIKNIGHT)&&(r=r.union(_P(t,o))),!!e.get(f.ANTIKING)&&(r=r.union(fP(t,o))),!!e.get(f.DISJOINT_GROUPS)&&(r=r.union(gP(t,o))),!!e.get(f.NEGATIVE_DIAGONAL)&&(r=r.union(vP(t,o))),!!e.get(f.POSITIVE_DIAGONAL)&&(r=r.union(hP(t,o)))),r}function Nu(t,e,n,r,o){if(e.tool_id!==r||!e.constraints)return o;for(const i of Object.values(e.constraints)){const a=EP(t,n,i);o=new Set([...o,...a])}return o}function bP(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;for(const i of e.values()){const a=i.tool_id;if(i.constraints){if(a===f.BETWEEN_LINE)for(const c of Object.values(i.constraints)){const u=pP(t,o,c);r=new Set([...r,...u])}else if(a===f.RENBAN_LINE)for(const c of Object.values(i.constraints)){const u=mP(t,o,c);r=new Set([...r,...u])}r=Nu(t,i,o,f.KILLER_CAGE,r),r=Nu(t,i,o,f.PARITY_BALANCE_CAGE,r),r=Nu(t,i,o,f.SPOTLIGHT_CAGE,r)}}return r}function zp(t,e){let n=new Set;const r=t.grid,o=t.elementsDict;!o.get(f.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...cP(r,e),...uP(r,e),...dP(r,e)])),n=new Set([...n,...CP(r,o,e)]),n=new Set([...n,...bP(r,o,e)]);const a=r.getCell(e.r,e.c);return a&&n.delete(a),n}function wP(t,e){const n=[];if(e.length==0)return[];for(const i of e)n.push(zp(t,i));const r=n.reduce((i,a)=>i.intersection(a)),o=[];for(const i of r)o.push(i.toCoords());return o}var IP=te('<tspan class="svelte-xct9ah"> </tspan>'),yP=te('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function OP(t,e){ae(e,!1);const n=D();let r=U(e,"cell",8),o=U(e,"seen_values",8);const i=.25;function a(g){return o().find(h=>h===g)!==void 0}N(()=>X(r()),()=>{O(n,er({r:r().r,c:r().c}))}),we(),fe();var c=be(),u=oe(c);{var _=g=>{var v=yP(),h=Y(v);x(h,"font-size",i),Je(h,5,()=>r().centerMarks,pt,(m,E)=>{var w=IP();const b=it(()=>a(d(E)));Q(()=>vt(w,"conflict",d(b)));var I=Y(w,!0);P(w),Q(()=>at(I,d(E))),L(m,w)}),P(h),P(v),Q(()=>{x(h,"x",d(n).x),x(h,"y",d(n).y),x(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),L(g,v)};J(u,g=>{r().centerMarks.length&&g(_)})}L(t,c),le()}var xP=te('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),AP=te('<g class="corner-marks-group"></g>');function LP(t,e){ae(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const o=.25,i=.28;function a(v){const h=v.cornerMarks.slice(0,8),m=er({r:v.r,c:v.c});return h.map((E,w)=>{const b=q8(w,i);return{pos:m.add(b),value:E,idx:w}})}function c(v){return r().find(m=>m===v)!==void 0}fe();var u=be(),_=oe(u);{var g=v=>{var h=AP();Je(h,5,()=>a(n()),pt,(m,E)=>{let w=()=>d(E).pos,b=()=>d(E).value;var I=xP();x(I,"font-size",o);const A=it(()=>c(b()));var k=Y(I,!0);P(I),Q(()=>{x(I,"x",w().x),x(I,"y",w().y),vt(I,"conflict",d(A)),at(k,b())}),L(m,I)}),P(h),L(v,h)};J(_,v=>{n().cornerMarks.length&&v(g)})}L(t,u),le()}var DP=te('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),RP=te('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),NP=te("<!><!>",1),SP=te('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function kP(t,e){ae(e,!1);const n=Ve(),r=()=>me(ho,"$settingsStore",n),o=()=>me(Ys,"$puzzleStore",n),i=()=>me(Qt,"$toolStore",n),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"cell",8);const E=.8,w=400;function b(M,G){if(!M)return[];let T=[...zp(d(g),G.toCoords())].map(j=>j.value).filter(j=>j!==null);return T=[...new Set(T)],T}N(()=>X(m()),()=>{O(a,m().value)}),N(()=>X(m()),()=>{O(c,m().given)}),N(()=>X(m()),()=>{O(u,er({r:m().r,c:m().c}))}),N(()=>r(),()=>{O(_,r().highlightPencilmarkConflicts)}),N(()=>o(),()=>{O(g,o())}),N(()=>r(),()=>{O(v,r().showSolution)}),N(()=>(d(_),X(m())),()=>{O(h,b(d(_),m()))}),we(),fe();var I=be(),A=oe(I);{var k=M=>{var G=SP(),z=Y(G);{var T=ee=>{var ce=be(),Z=oe(ce);{var ne=he=>{var re=DP();x(re,"font-size",E),x(re,"font-weight",w);var ge=Y(re,!0);P(re),Q(()=>{x(re,"x",d(u).x),x(re,"y",d(u).y),at(ge,m().region)}),L(he,re)};J(Z,he=>{m().region!==null&&he(ne)})}L(ee,ce)},j=ee=>{var ce=be(),Z=oe(ce);{var ne=re=>{var ge=RP();x(ge,"font-size",E),x(ge,"font-weight",w);var Ie=Y(ge,!0);P(ge),Q(()=>{x(ge,"x",d(u).x),x(ge,"y",d(u).y),vt(ge,"given",d(c)),at(Ie,d(a))}),L(re,ge)},he=re=>{var ge=NP(),Ie=oe(ge);LP(Ie,{get cell(){return m()},get seen_values(){return d(h)}});var ye=$(Ie);OP(ye,{get cell(){return m()},get seen_values(){return d(h)}}),L(re,ge)};J(Z,re=>{d(a)!==null?re(ne):re(he,!1)},!0)}L(ee,ce)};J(z,ee=>{i()===f.REGIONS?ee(T):ee(j,!1)})}P(G),Q(()=>vt(G,"hide-given",m().given)),L(M,G)};J(A,M=>{d(v)||M(k)})}L(t,I),le()}var TP=te("<path></path>"),MP=te('<g class="highlights-group"></g>');function UP(t,e){ae(e,!1);const n=Ve(),r=()=>me(Qt,"$toolStore",n);let o=U(e,"cell",8);function i(_){const g=er({r:o().r,c:o().c}),v=o().highlights.length;return o().highlights.map((m,E)=>{let w=V8(E,v);w=w.map(I=>I.add(g));const b=Ki(w,!0);return{colorId:m,d:b}})}fe();var a=be(),c=oe(a);{var u=_=>{var g=be(),v=oe(g);{var h=m=>{var E=MP();Je(E,5,()=>i(o()),pt,(w,b)=>{let I=()=>d(b).colorId,A=()=>d(b).d;var k=TP();Q(()=>{Rs(k,`highlight-wedge color-${I()??""} svelte-1ynpdsm`),x(k,"d",A())}),L(w,k)}),P(E),L(m,E)};J(v,m=>{o().highlights.length&&m(h)})}L(_,g)};J(c,_=>{r()!==f.REGIONS&&_(u)})}L(t,a),le()}var $P=te('<path class="cell-marker" fill="none"></path>'),FP=te('<circle fill="none" opacity="0.9"></circle>');function GP(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"marker",8);const i=.3,a=.08;N(()=>X(o()),()=>{O(n,Hp(o(),i))}),N(()=>X(o()),()=>{O(r,ql(o().colorId,"black"))}),we(),fe();var c=be(),u=oe(c);{var _=v=>{var h=$P();x(h,"stroke-width",a),Q(()=>{x(h,"d",d(n)),x(h,"stroke",d(r))}),L(v,h)},g=v=>{var h=FP();x(h,"r",i),x(h,"stroke-width",a),Q(()=>{Rs(h,`cell-marker color-${o().colorId??""}`),x(h,"cx",o().c),x(h,"cy",o().r),x(h,"stroke",d(r))}),L(v,h)};J(u,v=>{o().marker==="X"?v(_):v(g,!1)})}L(t,c),le()}var PP=te('<g class="cell-markers"></g>');function WP(t,e){let n=U(e,"markers",8);var r=PP();Je(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,i)=>{GP(o,{get marker(){return d(i)}})}),P(r),L(t,r)}var HP=te('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function zP(t,e){ae(e,!1);const n=D();let r=U(e,"draftLineMarker",8);const o=.2;function i(u){return u.map(g=>[new Re(g.p1.c,g.p1.r),new Re(g.p2.c,g.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?ql(_,"black"):"darkred"}N(()=>X(r()),()=>{O(n,Ki(i(r().draftLine)))}),we(),fe();var c=HP();Q(()=>x(c,"stroke",a(r()))),x(c,"stroke-width",o),x(c,"opacity",.5),Q(()=>x(c,"d",d(n))),L(t,c),le()}var BP=te('<path fill="none" opacity="0.9"></path>');function YP(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"marker",8);const i=.08,a=.04;N(()=>X(o()),()=>{O(n,Hp(o(),i))}),N(()=>X(o()),()=>{O(r,ql(o().colorId,"black"))}),we(),fe();var c=BP();x(c,"stroke-width",a),Q(()=>{x(c,"d",d(n)),Rs(c,`edge-marker color-${o().colorId??""}`),x(c,"stroke",d(r))}),L(t,c),le()}var jP=te('<g class="edge-markers"></g>');function KP(t,e){let n=U(e,"markers",8);var r=jP();Je(r,5,n,o=>`${o.r}, ${o.c}`,(o,i)=>{YP(o,{get marker(){return d(i)}})}),P(r),L(t,r)}var VP=te('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),XP=te('<g class="line-markers svelte-yha19m"></g>');function qP(t,e){ae(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function i(c){return ql(c,"black")}fe();var a=XP();Je(a,5,n,c=>o(c),(c,u)=>{var _=VP();x(_,"stroke-width",r),Q(()=>x(_,"stroke",i(d(u).colorId))),Q(()=>{x(_,"x1",d(u).p1.c),x(_,"y1",d(u).p1.r),x(_,"x2",d(u).p2.c),x(_,"y2",d(u).p2.r),Rs(_,`line-marker color-${d(u).colorId??""} svelte-yha19m`)}),L(c,_)}),P(a),L(t,a),le()}var ZP=te('<g class="pen-tool"><!><!><!><!></g>');function QP(t,e){ae(e,!1);const n=Ve(),r=()=>me(fl,"$penToolStore",n),o=D();N(()=>r(),()=>{O(o,{draftLine:r().draftLine,mode:r().mode})}),we(),fe();var i=ZP(),a=Y(i);qP(a,{get lineMarkers(){return r().lineMarkers}});var c=$(a);KP(c,{get markers(){return r().edgeMarkers}});var u=$(c);WP(u,{get markers(){return r().cellMarkers}});var _=$(u);zP(_,{get draftLineMarker(){return d(o)}}),P(i),L(t,i),le()}var JP=te("<path></path>");function Wr(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D(),u=D(),_=D();let g=U(e,"cells",8),v=U(e,"shape",8,Nd);const h="square";N(()=>X(v()),()=>{O(n,v().inset??.06)}),N(()=>X(v()),()=>{O(r,v().stroke??"black")}),N(()=>X(v()),()=>{O(o,v().strokeWidth??.03)}),N(()=>X(v()),()=>{O(i,v().strokeDasharray??.08)}),N(()=>X(v()),()=>{O(a,v().fill??"none")}),N(()=>X(v()),()=>{O(c,v().connectDiag??!0)}),N(()=>(X(g()),d(n),d(c)),()=>{O(u,Ci(g(),d(n),d(c)))}),N(()=>X(v()),()=>{O(_,v().strokeLinejoin??"miter")}),we(),fe();var m=JP();x(m,"stroke-linecap",h),Q(()=>{x(m,"d",d(u)),x(m,"stroke",d(r)),x(m,"stroke-width",d(o)),x(m,"fill",d(a)),x(m,"stroke-dasharray",d(i)),x(m,"stroke-linejoin",d(_))}),L(t,m),le()}var e4=te('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function t4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Po,"$selectionStore",n),o=()=>me(ho,"$settingsStore",n),i=()=>me(Ys,"$puzzleStore",n),a=()=>me(Qt,"$toolStore",n),c=D(),u=D(),_=D(),g=D(),v={type:H.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,I){return b.length?wP(d(_),b):[]}N(()=>r(),()=>{O(c,r().cells)}),N(()=>o(),()=>{O(u,o().highlightCellsSeenBySelection)}),N(()=>i(),()=>{O(_,i())}),N(()=>a(),()=>{O(g,Rd(a()))}),we(),fe();var m=be(),E=oe(m);{var w=b=>{var I=e4(),A=Y(I),k=it(()=>h(d(c),d(_)));Wr(A,{get cells(){return d(k)},shape:v}),P(I),L(b,I)};J(E,b=>{d(u)&&d(g)&&b(w)})}L(t,m),le()}function Zl(t){const e=[],n=t.map(i=>i.value).filter(i=>i!==null),o=[...tp(n).entries()].filter(([,i])=>i>1).map(([i])=>i);return e.push(...t.filter(i=>i.value!==null&&o.includes(i.value))),e}function n4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Zl(r))}return new Set(e)}function r4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Zl(r))}return new Set(e)}function o4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Zl(r))}return new Set(e)}function i4(t){const e=[],n=t.getFilledCells();for(const r of n){const i=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);i.length&&(e.push(r),e.push(...i))}return new Set(e)}function s4(t){const e=[],n=t.getFilledCells();for(const r of n){const i=t.getNeighboorCells(r).filter(a=>a.value===r.value);i.length&&(e.push(r),e.push(...i))}return new Set(e)}function a4(t){const e=[],n=t.getFilledCells();for(const r of n){const i=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);i.length&&(e.push(r),e.push(...i))}return new Set(e)}function l4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),i=Zl(o);i.length&&e.push(...i)}return new Set(e)}function c4(t,e){let n=new Set;if(!e.get(f.SUDOKU_RULES_DO_NOT_APPLY)){const u=new Set([...n4(t),...r4(t),...o4(t)]);n=n.union(u)}return!!e.get(f.ANTIKNIGHT)&&(n=n.union(i4(t))),!!e.get(f.ANTIKING)&&(n=n.union(s4(t))),!!e.get(f.NONCONSECUTIVE)&&(n=n.union(a4(t))),!!e.get(f.DISJOINT_GROUPS)&&(n=n.union(l4(t))),n}function u4(t,e){return[...new Set([...c4(t,e)])]}var d4=te('<rect class="conflict svelte-4mp6ok"></rect>'),_4=te('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function f4(t,e){ae(e,!1);const n=Ve(),r=()=>me(ho,"$settingsStore",n),o=()=>me(En,"$gridStore",n),i=()=>me(ct,"$localConstraintsStore",n),a=()=>me(Qn,"$cellsStore",n),c=D(),u=D(),_=D(),g=D();H.CAGE;function v(w){return u4(d(u),d(_)).map(A=>A.toCoords())}N(()=>r(),()=>{O(c,r().checkConflicts)}),N(()=>o(),()=>{O(u,o())}),N(()=>i(),()=>{O(_,i())}),N(()=>a(),()=>{O(g,a())}),we(),fe();var h=be(),m=oe(h);{var E=w=>{var b=_4();Je(b,5,()=>v(d(g)),pt,(I,A)=>{var k=d4();x(k,"width",1),x(k,"height",1),Q(()=>{x(k,"x",d(A).c),x(k,"y",d(A).r)}),L(I,k)}),P(b),L(w,b)};J(m,w=>{d(c)&&w(E)})}L(t,h),le()}var g4=te('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1cxyg7s"><use class="fog-edge-1 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-2 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-3 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-4 svelte-1cxyg7s" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1cxyg7s"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1cxyg7s"><rect class="fog-mask-white svelte-1cxyg7s"></rect><g class="fog-mask-black svelte-1cxyg7s"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1cxyg7s"></rect><rect class="fog-mask-black svelte-1cxyg7s" mask="url(#fog-mask-fog)"></rect></mask></defs>');function h4(t,e){ae(e,!1);const n=Ve(),r=()=>me(up,"$showFogStore",n),o=()=>me(Ul,"$solutionStore",n),i=()=>me(En,"$gridStore",n),a=()=>me(fp,"$fogLightsStore",n),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"boundingBox",8),E=U(e,"gridShape",8);function w(re){const ge=[];if(!re)return ge;for(const Ie of Object.entries(re)){const ye=Ie[1].cell,Me=d(_).getCell(ye.r,ye.c);Me&&ge.push(Me)}return ge}function b(re,ge){const Ie=w(ge);return[...re.getAllCells().filter(Xe=>!Ie.includes(Xe))].map(Xe=>Xe.toCoords())}N(()=>r(),()=>{O(c,r())}),N(()=>o(),()=>{O(u,o())}),N(()=>i(),()=>{O(_,i())}),N(()=>a(),()=>{O(g,a())}),N(()=>(d(_),d(g)),()=>{O(v,b(d(_),d(g)))}),N(()=>d(v),()=>{O(h,Ci(d(v),0))}),we(),fe();var I=g4(),A=Y(I),k=Y(A);P(A);var M=$(A),G=Y(M);x(G,"stroke-width",.4);var z=$(G);x(z,"stroke-width",.3);var T=$(z);x(T,"stroke-width",.2);var j=$(T);x(j,"stroke-width",.1),_o(),P(M);var ee=$(M),ce=Y(ee);_o(),P(ee);var Z=$(ee),ne=Y(Z),he=$(ne);x(he,"x",0),x(he,"y",0),P(Z),P(I),Q(()=>{x(k,"d",d(h)),vt(M,"disabled",!d(c)),vt(ee,"disabled",!d(c)),x(ce,"x",m().x),x(ce,"y",m().y),x(ce,"width",m().width),x(ce,"height",m().height),x(ne,"x",m().x),x(ne,"y",m().y),x(ne,"width",m().width),x(ne,"height",m().height),x(he,"width",E().nCols),x(he,"height",E().nRows)}),L(t,I),le()}var v4=te('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function p4(t,e){ae(e,!1);const n=Ve(),r=()=>me(up,"$showFogStore",n),o=D();let i=U(e,"gridShape",8);N(()=>r(),()=>{O(o,r())}),we(),fe();var a=v4(),c=Y(a);x(c,"x",0),x(c,"y",0),P(a),Q(()=>{x(a,"visibility",d(o)?"visible":"hidden"),x(c,"width",i().nCols),x(c,"height",i().nRows)}),L(t,a),le()}var m4=te('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function E4(t,e){ae(e,!1);const n=D();let r=U(e,"r",8),o=U(e,"c",8),i=U(e,"val",8);const a=.8,c=400;N(()=>(X(r()),X(o())),()=>{O(n,er({r:r(),c:o()}))}),we(),fe();var u=be(),_=oe(u);{var g=v=>{var h=m4();x(h,"font-size",a),x(h,"font-weight",c);var m=Y(h,!0);P(h),Q(()=>{x(h,"x",d(n).x),x(h,"y",d(n).y),at(m,i())}),L(v,h)};J(_,v=>{i()!==null&&v(g)})}L(t,u),le()}var C4=te('<g class="solution-layer"></g>');function b4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ul,"$solutionStore",n),o=()=>me(ho,"$settingsStore",n),i=()=>me(Tl,"$gameModeStore",n),a=D(),c=D(),u=D();N(()=>r(),()=>{O(a,r())}),N(()=>o(),()=>{O(c,o().showSolution)}),N(()=>i(),()=>{O(u,i())}),we(),fe();var _=be(),g=oe(_);{var v=h=>{var m=C4();Je(m,5,()=>d(a),pt,(E,w,b)=>{var I=be(),A=oe(I);Je(A,1,()=>d(w),pt,(k,M,G)=>{E4(k,{r:b,c:G,get val(){return d(M)}})}),L(E,I)}),P(m),L(h,m)};J(g,h=>{d(a)&&d(c)&&d(u)===bi.SETTING&&h(v)})}L(t,_),le()}var w4=te('<g class="element-group"></g>'),I4=te('<g mask="url(#fog-mask-fog)"></g>');function Xa(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),o=U(e,"Component",8);var i=I4();Je(i,5,n,pt,(a,c)=>{var u=be(),_=oe(u);{var g=v=>{var h=w4();Je(h,5,()=>Object.entries(d(c).constraints),m=>m[0],(m,E)=>{o()(m,{get tool(){return d(E)[1]},get c_id(){return d(E)[0]}})}),P(h),Q(()=>x(h,"data-toolId",d(c).tool_id)),L(v,h)};J(_,v=>{d(c).constraints&&v(g)})}L(a,u)}),P(i),Q(()=>Rs(i,by(r()))),L(t,i)}var y4=te('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),O4=te('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),x4=te('<g class="quadruple-text"><!></g>');function A4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D();let c=U(e,"cornerTool",8);const u=c().cells,_=new Re(u[u.length-1].c,u[u.length-1].r),g=cn(c().toolId,Pt)??Wu;N(()=>X(c()),()=>{O(n,c().value)}),N(()=>X(c()),()=>{O(r,c().shape??g)}),N(()=>d(r),()=>{var E;O(o,((E=d(r))==null?void 0:E.fontSize)??.2)}),N(()=>d(r),()=>{var E;O(i,((E=d(r))==null?void 0:E.fontColor)??"black")}),N(()=>d(n),()=>{var E;O(a,d(n)?(E=d(n))==null?void 0:E.split(","):[])}),we(),fe();var v=be(),h=oe(v);{var m=E=>{var w=x4(),b=Y(w);{var I=k=>{var M=y4(),G=Y(M,!0);Q(()=>at(G,d(a).join(" "))),P(M),Q(()=>{x(M,"x",_.x),x(M,"y",_.y),x(M,"font-size",d(o)),x(M,"fill",d(i))}),L(k,M)},A=k=>{var M=O4(),G=oe(M),z=Y(G,!0);Q(()=>at(z,d(a).slice(0,2).join(" "))),P(G);var T=$(G),j=Y(T,!0);Q(()=>at(j,d(a).slice(2).join(" "))),P(T),Q(()=>{x(G,"x",_.x),x(G,"y",_.y),x(G,"dy",-d(o)/2),x(G,"font-size",d(o)),x(G,"fill",d(i)),x(T,"x",_.x),x(T,"y",_.y),x(T,"dy",d(o)/2),x(T,"font-size",d(o)),x(T,"fill",d(i))}),L(k,M)};J(b,k=>{d(a).length<=2?k(I):k(A,!1)})}P(w),Q(()=>x(w,"data-count",d(a).length)),L(E,w)};J(h,E=>{d(n)&&E(m)})}L(t,v),le()}var L4=te("<circle></circle>");function gr(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D();let u=U(e,"x",8),_=U(e,"y",8),g=U(e,"shape",8);N(()=>X(g()),()=>{O(n,g().r??.35)}),N(()=>X(g()),()=>{O(r,g().stroke??"black")}),N(()=>X(g()),()=>{var h;O(o,(h=g())==null?void 0:h.opacity)}),N(()=>X(g()),()=>{O(i,g().strokeWidth??.02)}),N(()=>X(g()),()=>{O(a,g().fill??"none")}),N(()=>X(g()),()=>{O(c,g().strokeDasharray??0)}),we(),fe();var v=L4();Q(()=>{x(v,"cx",u()),x(v,"cy",_()),x(v,"r",d(n)),x(v,"stroke",d(r)),x(v,"stroke-width",d(i)),x(v,"fill",d(a)),x(v,"opacity",d(o)),x(v,"stroke-dasharray",d(c))}),L(t,v),le()}var D4=te("<ellipse></ellipse>");function R4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D(),u=D();let _=U(e,"cx",8),g=U(e,"cy",8),v=U(e,"shape",8);N(()=>X(v()),()=>{O(n,v().width??.5)}),N(()=>X(v()),()=>{O(r,v().height??.5)}),N(()=>X(v()),()=>{O(o,v().stroke??"black")}),N(()=>X(v()),()=>{var m;O(i,(m=v())==null?void 0:m.opacity)}),N(()=>X(v()),()=>{O(a,v().strokeWidth??.02)}),N(()=>X(v()),()=>{O(c,v().fill??"none")}),N(()=>X(v()),()=>{O(u,v().angle??0)}),we(),fe();var h=D4();Q(()=>{x(h,"cx",_()),x(h,"cy",g()),x(h,"rx",d(n)/2),x(h,"ry",d(r)/2),x(h,"stroke",d(o)),x(h,"stroke-width",d(a)),x(h,"fill",d(c)),x(h,"opacity",d(i)),x(h,"transform",`rotate(${d(u)}, ${_()}, ${g()} )`)}),L(t,h),le()}var N4=te("<polygon></polygon>");function pl(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D(),u=D(),_=D();let g=U(e,"cx",8),v=U(e,"cy",8),h=U(e,"shape",8);N(()=>X(h()),()=>{O(n,h().n??3)}),N(()=>X(h()),()=>{O(r,h().r??.5)}),N(()=>(d(r),d(n),X(g()),X(v())),()=>{O(o,Wp(d(r),d(n),new Re(g(),v())))}),N(()=>d(o),()=>{O(i,d(o).map(E=>`${E.x},${E.y}`).join(" "))}),N(()=>X(h()),()=>{O(a,h().stroke??"black")}),N(()=>X(h()),()=>{O(c,h().strokeWidth??.02)}),N(()=>X(h()),()=>{O(u,h().fill??"none")}),N(()=>X(h()),()=>{O(_,h().angle??0)}),we(),fe();var m=N4();Q(()=>{x(m,"points",d(i)),x(m,"stroke",d(a)),x(m,"stroke-width",d(c)),x(m,"fill",d(u)),x(m,"transform",`rotate(${d(_)}, ${g()}, ${v()} )`)}),L(t,m),le()}var S4=te("<rect></rect>");function k4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D(),u=D();let _=U(e,"cx",8),g=U(e,"cy",8),v=U(e,"shape",8);N(()=>X(v()),()=>{O(n,v().width??.5)}),N(()=>X(v()),()=>{O(r,v().height??.5)}),N(()=>(X(_()),d(n)),()=>{O(o,_()-d(n)/2)}),N(()=>(X(g()),d(r)),()=>{O(i,g()-d(r)/2)}),N(()=>X(v()),()=>{O(a,v().stroke||"black")}),N(()=>X(v()),()=>{O(c,v().strokeWidth||.023)}),N(()=>X(v()),()=>{O(u,v().fill||"none")}),we(),fe();var h=S4();Q(()=>{x(h,"x",d(o)),x(h,"y",d(i)),x(h,"width",d(n)),x(h,"height",d(r)),x(h,"stroke",d(a)),x(h,"stroke-width",d(c)),x(h,"fill",d(u))}),L(t,h),le()}var T4=te("<rect></rect>");function M4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"cx",8),E=U(e,"cy",8),w=U(e,"shape",8);N(()=>X(w()),()=>{O(n,w().r??.5)}),N(()=>(X(m()),d(n)),()=>{O(r,m()-d(n))}),N(()=>(X(E()),d(n)),()=>{O(o,E()-d(n))}),N(()=>d(n),()=>{O(i,2*d(n))}),N(()=>d(n),()=>{O(a,2*d(n))}),N(()=>X(w()),()=>{O(c,w().stroke??"black")}),N(()=>X(w()),()=>{O(u,w().strokeWidth??.02)}),N(()=>X(w()),()=>{O(_,w().fill??"none")}),N(()=>X(w()),()=>{O(g,w().angle??0)}),N(()=>X(w()),()=>{O(v,w().strokeDasharray??0)}),N(()=>X(w()),()=>{O(h,w().opacity??1)}),we(),fe();var b=T4();Q(()=>{x(b,"x",d(r)),x(b,"y",d(o)),x(b,"width",d(i)),x(b,"height",d(a)),x(b,"stroke",d(c)),x(b,"stroke-width",d(u)),x(b,"fill",d(_)),x(b,"transform",`rotate(${d(g)}, ${m()}, ${E()})`),x(b,"stroke-dasharray",d(v)),x(b,"opacity",d(h))}),L(t,b),le()}function Ar(t,e){ae(e,!1);const n=D();let r=U(e,"cx",8),o=U(e,"cy",8),i=U(e,"shape",8);N(()=>(X(i()),H),()=>{var g;O(n,((g=i())==null?void 0:g.type)??H.CIRCLE)}),we(),fe();var a=be(),c=oe(a);{var u=g=>{gr(g,{get x(){return r()},get y(){return o()},get shape(){return i()}})},_=g=>{var v=be(),h=oe(v);{var m=w=>{R4(w,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},E=w=>{var b=be(),I=oe(b);{var A=M=>{M4(M,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},k=M=>{var G=be(),z=oe(G);{var T=ee=>{k4(ee,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},j=ee=>{var ce=be(),Z=oe(ce);{var ne=re=>{pl(re,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},he=re=>{gr(re,{get x(){return r()},get y(){return o()},get shape(){return i()}})};J(Z,re=>{d(n)===H.POLYGON?re(ne):re(he,!1)},!0)}L(ee,ce)};J(z,ee=>{d(n)===H.RECTANGLE?ee(T):ee(j,!1)},!0)}L(M,G)};J(I,M=>{d(n)===H.SQUARE?M(A):M(k,!1)},!0)}L(w,b)};J(h,w=>{d(n)===H.ELLIPSE?w(m):w(E,!1)},!0)}L(g,v)};J(c,g=>{d(n)===H.CIRCLE?g(u):g(_,!1)})}L(t,a),le()}var U4=te('<text text-anchor="middle" dominant-baseline="central"> </text>'),$4=te('<g class="corner-tool"><!><!><!></g>');function Bp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function w(k,M){return M===H.TEXT_ONLY?k.value?k.value:"-":k.value??""}N(()=>r(),()=>{var k;O(o,(k=r())==null?void 0:k.id)}),N(()=>(X(m()),Wu),()=>{O(i,cn(m().toolId,Pt)??Wu)}),N(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),N(()=>(d(a),H),()=>{var k;O(c,((k=d(a))==null?void 0:k.type)??H.CIRCLE)}),N(()=>d(a),()=>{var k;O(u,((k=d(a))==null?void 0:k.fontSize)??.2)}),N(()=>d(a),()=>{var k;O(_,((k=d(a))==null?void 0:k.fontColor)??"black")}),N(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),N(()=>X(m()),()=>{O(v,m().cells)}),N(()=>d(v),()=>{O(h,new Re(d(v)[d(v).length-1].c,d(v)[d(v).length-1].r))}),we(),fe();var b=be(),I=oe(b);{var A=k=>{var M=$4(),G=Y(M);{var z=Z=>{Ar(Z,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(g)}})};J(G,Z=>{E()&&E()===d(o)&&Z(z)})}var T=$(G);Ar(T,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(a)}});var j=$(T);{var ee=Z=>{A4(Z,{get cornerTool(){return m()}})},ce=Z=>{var ne=U4(),he=Y(ne,!0);Q(()=>at(he,w(m(),d(c)))),P(ne),Q(()=>{x(ne,"x",d(h).x),x(ne,"y",d(h).y),x(ne,"font-size",d(u)),x(ne,"fill",d(_))}),L(Z,ne)};J(j,Z=>{m().toolId===f.QUADRUPLE?Z(ee):Z(ce,!1)})}P(M),L(k,M)};J(I,k=>{d(v).length===4&&k(A)})}L(t,b),le()}var F4=te('<g class="corner-tool"><!></g>');function G4(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var o=be(),i=oe(o);{var a=c=>{var u=F4(),_=Y(u);Bp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),Q(()=>x(u,"id",`c-${r()}`)),L(c,u)};J(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var P4=te('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ds(t,e){ae(e,!1);const n=D();let r=U(e,"value",8,""),o=U(e,"fontSize",8,.2),i=U(e,"x",8),a=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),_=U(e,"fontWeight",8,400),g=D(null),v=D(null);function h(A,k,M){const G=["TL","TR"].includes(M),T=["TL","BL"].includes(M)?A+.05:A,j=k;return new Re(T,j)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}Iy(()=>{if(!d(g)||!d(v))return;const A=d(g).getBBox();d(v).setAttribute("x",String(A.x)),d(v).setAttribute("y",String(A.y+A.height*.1)),d(v).setAttribute("width",String(A.width)),d(v).setAttribute("height",String(A.height*.8))}),N(()=>(X(i()),X(a()),X(c())),()=>{O(n,h(i(),a(),c()))}),we(),fe();var w=be(),b=oe(w);{var I=A=>{var k=P4(),M=oe(k);Fo(M,T=>O(v,T),()=>d(v));var G=$(M);Q(()=>x(G,"text-anchor",m(c()))),Q(()=>x(G,"dominant-baseline",E(c())));var z=Y(G,!0);P(G),Fo(G,T=>O(g,T),()=>d(g)),Q(()=>{var T,j;x(G,"x",(T=d(n))==null?void 0:T.x),x(G,"y",(j=d(n))==null?void 0:j.y),x(G,"font-size",o()),x(G,"fill",u()),x(G,"font-weight",_()),at(z,r())}),L(A,k)};J(b,A=>{r().length&&A(I)})}L(t,w),le()}var W4=te('<text text-anchor="middle" dominant-baseline="central"> </text>'),H4=te("<!><!><!>",1);function Yp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function w(T,j){return j===H.TEXT_ONLY?T.value?T.value:"-":T.value??""}N(()=>r(),()=>{var T;O(o,(T=r())==null?void 0:T.id)}),N(()=>(X(m()),sl),()=>{O(i,cn(m().toolId,Pt)??sl)}),N(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),N(()=>d(a),()=>{O(c,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),N(()=>X(m()),()=>{O(u,m().cell)}),N(()=>(d(a),H),()=>{var T;O(_,((T=d(a))==null?void 0:T.type)||H.CIRCLE)}),N(()=>d(a),()=>{var T;O(g,((T=d(a))==null?void 0:T.fontSize)??.2)}),N(()=>d(a),()=>{var T;O(v,((T=d(a))==null?void 0:T.fontColor)??"black")}),N(()=>d(u),()=>{O(h,d(u).r%1===.5&&d(u).c%1===.5)}),we(),fe();var b=H4(),I=oe(b);{var A=T=>{Ar(T,{get cx(){return d(u).c},get cy(){return d(u).r},get shape(){return d(c)}})};J(I,T=>{E()===d(o)&&T(A)})}var k=$(I);Ar(k,{get cx(){return d(u).c},get cy(){return d(u).r},get shape(){return d(a)}});var M=$(k);{var G=T=>{var j=it(()=>w(m(),d(_))),ee=it(()=>Math.floor(d(u).c)),ce=it(()=>Math.floor(d(u).r));Ds(T,{get value(){return d(j)},get x(){return d(ee)},get y(){return d(ce)},position:"TL",get fontColor(){return d(v)}})},z=T=>{var j=W4(),ee=Y(j,!0);Q(()=>at(ee,w(m(),d(_)))),P(j),Q(()=>{x(j,"x",d(u).c),x(j,"y",d(u).r),x(j,"font-size",d(g)),x(j,"fill",d(v))}),L(T,j)};J(M,T=>{d(h)?T(G):T(z,!1)})}L(t,b),le()}var z4=te('<g class="center-corner-or-edge-tool"><!></g>');function B4(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var o=be(),i=oe(o);{var a=c=>{var u=z4(),_=Y(u);Yp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),Q(()=>x(u,"id",`c-${r()}`)),L(c,u)};J(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var Y4=te('<rect stroke="none" fill="#5373ea80"></rect>'),j4=te('<rect stroke="none" fill="#5373ea66"></rect>'),K4=te('<path fill="none" stroke-linecap="round"></path><!>',1),V4=te('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function $h(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=()=>me(En,"$gridStore",n),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D(),m=D(),E=D(),w=D();let b=U(e,"tool",8),I=U(e,"c_id",8,void 0);const A=.03;function k(re){return re.value&&re.value.length?re.value:"-"}function M(re,ge){const Ie=Hs(ge),ye=new Re(Ie.c,Ie.r).scale(.5),Me=er(re),Se=Me.add(ye.scale(.5)),Xe=Me.add(ye.scale(.8));return[Se,Xe]}function G(re,ge){const ye=M(re,ge);let Me=__(.08,ge);Me=Me.map(mt=>mt.add(ye[1]));const Se=go(ye),Xe=go(Me);return Se+Xe}N(()=>r(),()=>{var re;O(i,(re=r())==null?void 0:re.id)}),N(()=>X(b()),()=>{O(a,b().cell)}),N(()=>d(a),()=>{O(c,er(d(a)))}),N(()=>(o(),X(b())),()=>{O(u,o().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),N(()=>(X(b()),oh),()=>{O(_,cn(b().toolId,Pt)??oh)}),N(()=>(X(b()),d(_)),()=>{O(g,b().shape??d(_))}),N(()=>d(g),()=>{var re;O(v,((re=d(g))==null?void 0:re.fontSize)??.5)}),N(()=>d(g),()=>{var re;O(h,((re=d(g))==null?void 0:re.fontColor)??"var(--text-primary-color)")}),N(()=>d(g),()=>{var re;O(m,((re=d(g))==null?void 0:re.stroke)??"var(--text-primary-color)")}),N(()=>d(g),()=>{O(E,{...d(g),stroke:"var(--constraint-selected-color)",strokeWidth:A+.07})}),N(()=>(d(a),X(b())),()=>{O(w,G(d(a),b().direction))}),we(),fe();var z=V4(),T=Y(z);{var j=re=>{var ge=be(),Ie=oe(ge);Je(Ie,1,()=>d(u),pt,(ye,Me)=>{var Se=Y4();x(Se,"width",1),x(Se,"height",1),Q(()=>{x(Se,"x",d(Me).c),x(Se,"y",d(Me).r)}),L(ye,Se)}),L(re,ge)};J(T,re=>{I()===void 0&&re(j)})}var ee=$(T);{var ce=re=>{var ge=K4(),Ie=oe(ge),ye=$(Ie);Je(ye,1,()=>d(u),pt,(Me,Se)=>{var Xe=j4();x(Xe,"width",1),x(Xe,"height",1),Q(()=>{x(Xe,"x",d(Se).c),x(Xe,"y",d(Se).r)}),L(Me,Xe)}),Q(()=>{x(Ie,"d",d(w)),x(Ie,"stroke",d(E).stroke),x(Ie,"stroke-width",d(E).strokeWidth)}),L(re,ge)};J(ee,re=>{I()&&I()===d(i)&&re(ce)})}var Z=$(ee);x(Z,"stroke-width",A);var ne=$(Z),he=Y(ne,!0);Q(()=>at(he,k(b()))),P(ne),P(z),Q(()=>{x(Z,"d",d(w)),x(Z,"stroke",d(m)),x(ne,"x",d(c).x),x(ne,"y",d(c).y),x(ne,"font-size",d(v)),x(ne,"fill",d(h))}),L(t,z),le()}var X4=te('<g class="outside-direction-tool"><!></g>'),q4=te('<g class="outside-direction-preview"><!></g>');function jp(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var o=be(),i=oe(o);{var a=u=>{var _=X4(),g=Y(_);$h(g,{get tool(){return n()},get c_id(){return r()}}),P(_),Q(()=>x(_,"data-id",`${r()}`)),L(u,_)},c=u=>{var _=q4();x(_,"opacity",.5);var g=Y(_);$h(g,{get tool(){return n()}}),P(_),L(u,_)};J(i,u=>{r()!==void 0?u(a):u(c,!1)})}L(t,o)}var Z4=te('<path fill="none"></path>');function uo(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D();let u=U(e,"linePoints",8),_=U(e,"shape",8,void 0);const g="round",v="round";N(()=>X(_()),()=>{var m;O(n,((m=_())==null?void 0:m.stroke)??"gray")}),N(()=>X(_()),()=>{var m;O(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),N(()=>X(_()),()=>{var m;O(o,((m=_())==null?void 0:m.strokeDasharray)??0)}),N(()=>X(_()),()=>{var m;O(i,((m=_())==null?void 0:m.strokeDashoffset)??0)}),N(()=>X(_()),()=>{var m,E,w,b,I,A,k,M;O(a,{shortenHead:((E=(m=_())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(w=_())==null?void 0:w.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((A=(I=_())==null?void 0:I.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((M=(k=_())==null?void 0:k.linePathOptions)==null?void 0:M.closeLoops)??!1})}),N(()=>(X(u()),d(a)),()=>{O(c,go(u(),d(a)))}),we(),fe();var h=Z4();x(h,"stroke-linejoin",g),x(h,"stroke-linecap",v),Q(()=>{x(h,"d",d(c)),x(h,"stroke",d(n)),x(h,"stroke-width",d(r)),x(h,"stroke-dasharray",d(o)),x(h,"stroke-dashoffset",d(i))}),L(t,h),le()}var Q4=ue("<!> <!> <!>",1);function J4(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D();let c=U(e,"linePoints",8),u=U(e,"shape",8);function _(b){const I=Nt.cloneDeep(b);return I.r=I.r||.2,I.strokeWidth=0,I.opacity=1,I}N(()=>X(c()),()=>{O(n,c().length)}),N(()=>(d(n),X(c())),()=>{O(r,d(n)>1&&c()[0].equals(c()[d(n)-1]))}),N(()=>(d(n),X(c())),()=>{O(o,d(n)>=0?c()[0]:void 0)}),N(()=>(d(n),X(c())),()=>{O(i,d(n)>=0?c()[d(n)-1]:void 0)}),N(()=>X(u()),()=>{O(a,_(u()))}),we(),fe();var g=Q4(),v=oe(g);uo(v,{get linePoints(){return c()},get shape(){return u()}});var h=$(v,2);{var m=b=>{gr(b,{get x(){return d(o).x},get y(){return d(o).y},get shape(){return d(a)}})};J(h,b=>{!d(r)&&d(o)&&b(m)})}var E=$(h,2);{var w=b=>{gr(b,{get x(){return d(i).x},get y(){return d(i).y},get shape(){return d(a)}})};J(E,b=>{!d(r)&&d(i)&&b(w)})}L(t,g),le()}var e6=te('<g class="corner-line-tool"><!></g>');function t6(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D();let a=U(e,"tool",8);const c=cn(a().toolId,Pt)??Ts;N(()=>(X(a()),Re),()=>{O(n,a().coords.map(h=>new Re(h.c,h.r)))}),N(()=>X(a()),()=>{O(r,a().shape??c)}),N(()=>(d(r),H),()=>{var h;O(o,((h=d(r))==null?void 0:h.type)||H.LINE)}),N(()=>d(r),()=>{var h;O(i,((h=d(r))==null?void 0:h.opacity)??1)}),we(),fe();var u=e6(),_=Y(u);{var g=h=>{J4(h,{get linePoints(){return d(n)},get shape(){return d(r)}})},v=h=>{uo(h,{get linePoints(){return d(n)},get shape(){return d(r)}})};J(_,h=>{d(o)===H.MAZE_WALL?h(g):h(v,!1)})}P(u),Q(()=>x(u,"opacity",d(i))),L(t,u),le()}var n6=te('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Fh(t,e){ae(e,!1);const n=D(),r=D(),o=D();let i=U(e,"shape",8),a=U(e,"coords",8);const[c,u]=a(),_=u.c,g=c.c===u.c?u.c+1:u.c,v=u.r,h=c.r===u.r?u.r+1:u.r;N(()=>X(i()),()=>{O(n,i().stroke??"black")}),N(()=>X(i()),()=>{var E;O(r,(E=i())==null?void 0:E.opacity)}),N(()=>X(i()),()=>{O(o,i().strokeWidth??.02)}),we(),fe();var m=n6();x(m,"x1",_),x(m,"x2",g),x(m,"y1",v),x(m,"y2",h),Q(()=>{x(m,"stroke",d(n)),x(m,"stroke-width",d(o)),x(m,"opacity",d(r))}),L(t,m),le()}var r6=te("<!><!>",1),o6=te("<!><!>",1),i6=te("<!><!>",1),s6=te("<!><!>",1),a6=te('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function Kp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);function w(M,G){return G===H.TEXT_ONLY?M.value?M.value:"-":M.value??""}function b(M){if(M!==f.EDGE_INEQUALITY&&M!==f.ONE_WAY_DOOR)return 0;const G=er(d(v)[0]);return er(d(v)[1]).subtract(G).angle()/(2*Math.PI)*360}N(()=>r(),()=>{var M;O(o,(M=r())==null?void 0:M.id)}),N(()=>(X(m()),sl),()=>{O(i,cn(m().toolId,Pt)??sl)}),N(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),N(()=>(d(a),H),()=>{var M;O(c,((M=d(a))==null?void 0:M.type)||H.CIRCLE)}),N(()=>d(a),()=>{var M;O(u,((M=d(a))==null?void 0:M.fontSize)??.2)}),N(()=>d(a),()=>{var M;O(_,((M=d(a))==null?void 0:M.fontColor)??"black")}),N(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),N(()=>X(m()),()=>{O(v,m().cells)}),N(()=>d(v),()=>{O(h,_p(Xl(d(v))))}),we(),fe();var I=be(),A=oe(I);{var k=M=>{var G=a6(),z=oe(G);{var T=Z=>{var ne=r6(),he=oe(ne);{var re=Ie=>{gr(Ie,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(g)}})};J(he,Ie=>{E()&&E()===d(o)&&Ie(re)})}var ge=$(he);gr(ge,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(a)}}),L(Z,ne)},j=Z=>{var ne=be(),he=oe(ne);{var re=Ie=>{var ye=o6(),Me=oe(ye);{var Se=qe=>{gr(qe,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(g)}})};J(Me,qe=>{E()&&E()===d(o)&&qe(Se)})}var Xe=$(Me);gr(Xe,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(a)}}),L(Ie,ye)},ge=Ie=>{var ye=be(),Me=oe(ye);{var Se=qe=>{var mt=i6(),Lt=oe(mt);{var Wt=Ot=>{Fh(Ot,{get coords(){return d(v)},get shape(){return d(g)}})};J(Lt,Ot=>{E()&&E()===d(o)&&Ot(Wt)})}var yt=$(Lt);Fh(yt,{get coords(){return d(v)},get shape(){return d(a)}}),L(qe,mt)},Xe=qe=>{var mt=s6(),Lt=oe(mt);{var Wt=Ot=>{Ar(Ot,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(g)}})};J(Lt,Ot=>{E()&&E()===d(o)&&Ot(Wt)})}var yt=$(Lt);Ar(yt,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(a)}}),L(qe,mt)};J(Me,qe=>{d(c)===H.BORDER_LINE?qe(Se):qe(Xe,!1)},!0)}L(Ie,ye)};J(he,Ie=>{d(c)===H.TEXT_ONLY?Ie(re):Ie(ge,!1)},!0)}L(Z,ne)};J(z,Z=>{m().toolId===f.EDGE_INEQUALITY||m().toolId===f.ONE_WAY_DOOR?Z(T):Z(j,!1)})}var ee=$(z);Q(()=>x(ee,"transform",`rotate(${b(m().toolId)}, ${d(h).x}, ${d(h).y} )`));var ce=Y(ee,!0);Q(()=>at(ce,w(m(),d(c)))),P(ee),Q(()=>{x(ee,"x",d(h).x),x(ee,"y",d(h).y),x(ee,"font-size",d(u)),x(ee,"fill",d(_))}),L(M,G)};J(A,M=>{d(v).length===2&&M(k)})}L(t,I),le()}var l6=te('<g class="edge-tool"><!></g>');function c6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var o=be(),i=oe(o);{var a=c=>{var u=l6(),_=Y(u);Kp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),Q(()=>x(u,"id",`c-${r()}`)),L(c,u)};J(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var u6=te('<path fill="none" stroke-linecap="round"></path>'),d6=te('<path fill="none" stroke-linecap="round"></path>'),_6=te('<path fill="none" stroke-linecap="round"></path>'),f6=te("<!><!><!>",1);function Gh(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D();let _=U(e,"tool",8),g=U(e,"c_id",8,void 0);N(()=>r(),()=>{var I;O(o,(I=r())==null?void 0:I.id)}),N(()=>(X(_()),rh),()=>{O(i,cn(_().toolId,Pt)??rh)}),N(()=>(X(_()),d(i)),()=>{O(a,_().shape??d(i))}),N(()=>d(a),()=>{O(c,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.03:.03})}),N(()=>d(a),()=>{O(u,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.05:.05})}),we(),fe();var v=f6(),h=oe(v);{var m=I=>{var A=be(),k=oe(A);Je(k,1,()=>_().directions,pt,(M,G)=>{var z=u6();Q(()=>x(z,"d",Ru(_().cell,d(G)))),Q(()=>{x(z,"stroke",d(c).stroke),x(z,"stroke-width",d(c).strokeWidth)}),L(M,z)}),L(I,A)};J(h,I=>{I(m)})}var E=$(h);{var w=I=>{var A=be(),k=oe(A);Je(k,1,()=>_().directions,pt,(M,G)=>{var z=d6();Q(()=>x(z,"d",Ru(_().cell,d(G)))),Q(()=>{x(z,"stroke",d(u).stroke),x(z,"stroke-width",d(u).strokeWidth)}),L(M,z)}),L(I,A)};J(E,I=>{g()&&g()===d(o)&&I(w)})}var b=$(E);Je(b,1,()=>_().directions,pt,(I,A)=>{var k=_6();Q(()=>x(k,"d",Ru(_().cell,d(A)))),Q(()=>{x(k,"stroke",d(a).stroke),x(k,"stroke-width",d(a).strokeWidth)}),L(I,k)}),L(t,v),le()}var g6=te('<g class="single-cell-multi-arrow-tool"><!></g>'),h6=te('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function Vp(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var o=be(),i=oe(o);{var a=u=>{var _=g6(),g=Y(_);Gh(g,{get tool(){return n()},get c_id(){return r()}}),P(_),Q(()=>x(_,"data-id",`${r()}`)),L(u,_)},c=u=>{var _=h6();x(_,"opacity",.5);var g=Y(_);Gh(g,{get tool(){return n()}}),P(_),L(u,_)};J(i,u=>{r()!==void 0?u(a):u(c,!1)})}L(t,o)}var v6=te('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function p6(t){var e=v6(),n=Y(e);x(n,"opacity",.5),P(e),L(t,e)}var m6=te('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function E6(t,e){ae(e,!1);const n=D();let r=U(e,"tool",8);U(e,"c_id",8,void 0),N(()=>X(r()),()=>{O(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),we(),fe();var o=m6();Q(()=>x(o,"transform",`translate(${d(n).x} ${d(n).y})`)),L(t,o),le()}var C6=te('<g class="fog-lights-layer svelte-1t48yul"></g>');function b6(t,e){ae(e,!1);const n=Ve(),r=()=>me(Qt,"$toolStore",n),o=D();let i=U(e,"element",8);N(()=>r(),()=>{O(o,r())}),we(),fe();var a=C6();Je(a,5,()=>Object.entries(i()),c=>c[0],(c,u)=>{E6(c,{get tool(){return d(u)[1]},get c_id(){return d(u)[0]}})}),P(a),Q(()=>vt(a,"inactive",d(o)!==f.FOG_LIGHTS)),L(t,a),le()}var w6=te('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function Ql(t,e){ae(e,!1);const n=D(),r=D(),o=D();let i=U(e,"cx",8),a=U(e,"cy",8),c=U(e,"c_id",8);N(()=>X(c()),()=>{O(n,document.getElementById(`c-${c()}`))}),N(()=>d(n),()=>{var v;O(r,(v=d(n))==null?void 0:v.getBBox())}),N(()=>d(r),()=>{O(o,d(r)?Math.max(d(r).width,d(r).height):void 0)}),we();var u=be(),_=oe(u);{var g=v=>{var h=w6(),m=Y(h);x(m,"stroke-width",.6),P(h),Q(()=>x(h,"transform",`translate(${i()}, ${a()}) scale(${d(o)*.6})`)),L(v,h)};J(_,v=>{d(o)&&v(g)})}L(t,u),le()}var I6=te('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),y6=te('<g class="edge-tool-preview"><!></g>');function O6(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D();let c=U(e,"tool_preview",8);N(()=>X(c()),()=>{O(n,c().tool)}),N(()=>X(c()),()=>{O(r,c().mode)}),N(()=>X(c()),()=>{O(o,c().match_id)}),N(()=>d(n),()=>{O(i,d(n).cells)}),N(()=>d(i),()=>{O(a,_p(Xl(d(i))))}),we(),fe();var u=be(),_=oe(u);{var g=h=>{var m=I6();x(m,"opacity",.5);var E=Y(m);Ql(E,{get cx(){return d(a).x},get cy(){return d(a).y},get c_id(){return d(o)}}),P(m),L(h,m)},v=h=>{var m=y6();x(m,"opacity",.5);var E=Y(m);Kp(E,{get tool(){return d(n)}}),P(m),L(h,m)};J(_,h=>{d(r)==="remove"&&d(o)?h(g):h(v,!1)})}L(t,u),le()}var x6=te('<g class="corner-tool-remove-preview"><!></g>'),A6=te('<g class="corner-tool-preview"><!></g>');function L6(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D();let c=U(e,"tool_preview",8);N(()=>X(c()),()=>{O(n,c().tool)}),N(()=>X(c()),()=>{O(r,c().mode)}),N(()=>X(c()),()=>{O(o,c().match_id)}),N(()=>d(n),()=>{O(i,d(n).cells)}),N(()=>d(i),()=>{O(a,new Re(d(i)[d(i).length-1].c,d(i)[d(i).length-1].r))}),we(),fe();var u=be(),_=oe(u);{var g=h=>{var m=x6();x(m,"opacity",.5);var E=Y(m);Ql(E,{get cx(){return d(a).x},get cy(){return d(a).y},get c_id(){return d(o)}}),P(m),L(h,m)},v=h=>{var m=A6();x(m,"opacity",.5);var E=Y(m);Bp(E,{get tool(){return d(n)}}),P(m),L(h,m)};J(_,h=>{d(r)==="remove"&&d(o)?h(g):h(v,!1)})}L(t,u),le()}var D6=te('<path fill="none" stroke-linecap="round"></path>'),R6=te('<path fill="none" stroke-linecap="round"></path>'),N6=te('<!><!><path fill="none" stroke-linecap="round"></path>',1);function Xp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D();let h=U(e,"tool",8),m=U(e,"c_id",8,void 0);N(()=>r(),()=>{var M;O(o,(M=r())==null?void 0:M.id)}),N(()=>(X(h()),nh),()=>{O(i,cn(h().toolId,Pt)??nh)}),N(()=>(X(h()),d(i)),()=>{O(a,h().shape??d(i))}),N(()=>d(a),()=>{O(c,d(a).strokeWidth??.1)}),N(()=>d(a),()=>{O(u,d(a).stroke??"black")}),N(()=>d(a),()=>{O(_,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.05:.05})}),N(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),N(()=>X(h()),()=>{O(v,eP(h().cell,h().direction))}),we(),fe();var E=N6(),w=oe(E);{var b=M=>{var G=D6();Q(()=>{x(G,"d",d(v)),x(G,"stroke",d(_).stroke),x(G,"stroke-width",d(_).strokeWidth)}),L(M,G)};J(w,M=>{M(b)})}var I=$(w);{var A=M=>{var G=R6();Q(()=>{x(G,"d",d(v)),x(G,"stroke",d(g).stroke),x(G,"stroke-width",d(g).strokeWidth)}),L(M,G)};J(I,M=>{m()&&m()===d(o)&&M(A)})}var k=$(I);Q(()=>{x(k,"d",d(v)),x(k,"stroke",d(u)),x(k,"stroke-width",d(c))}),L(t,E),le()}var S6=te('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),k6=te('<g class="single-cell-arrow-tool-preview"><!></g>');function T6(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D();let a=U(e,"tool_preview",8);N(()=>X(a()),()=>{O(n,a().tool)}),N(()=>X(a()),()=>{O(r,a().mode)}),N(()=>X(a()),()=>{O(o,a().match_id)}),N(()=>d(n),()=>{O(i,{x:d(n).cell.c+.5,y:d(n).cell.r+.5})}),we(),fe();var c=be(),u=oe(c);{var _=v=>{var h=S6();x(h,"opacity",.5);var m=Y(h);Ql(m,{get cx(){return d(i).x},get cy(){return d(i).y},get c_id(){return d(o)}}),P(h),L(v,h)},g=v=>{var h=k6();x(h,"opacity",.5);var m=Y(h);Xp(m,{get tool(){return d(n)}}),P(h),L(v,h)};J(u,v=>{d(r)==="remove"&&d(o)?v(_):v(g,!1)})}L(t,c),le()}var M6=ue("<!> <!>",1);function qp(t,e){ae(e,!1);const n=D(),r=D();let o=U(e,"cells",8),i=U(e,"shape",8,Nd),a=U(e,"value",8,void 0);N(()=>X(o()),()=>{O(n,o()[0])}),N(()=>d(n),()=>{O(r,new Re(d(n).c,d(n).r))}),we(),fe();var c=M6(),u=oe(c);Wr(u,{get cells(){return o()},get shape(){return i()}});var _=$(u,2);{var g=v=>{Ds(v,{get value(){return a()},get x(){return d(r).x},get y(){return d(r).y},position:"TL"})};J(_,v=>{a()&&a().length&&v(g)})}L(t,c),le()}var U6=te('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Ph(t,e){ae(e,!1);const n=Ve(),r=()=>me(C2,"$minimumConstraintsStore",n),o=()=>me(b2,"$maximumConstraintsStore",n),i=D(),a=D(),c=D();let u=U(e,"coord",8),_=U(e,"minOrMax",8);function g(b,I){const A=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let M=0;M<k.length;M++){let G=k[M];const z={r:b.r+G[1],c:b.c+G[0]};A[M]=!Object.values(I).some(T=>Ze(z,T.cell))}return A}function v(b,I){let A=Q8(_(),b.r,b.c);const k=g(b,I);return A=A.filter((G,z)=>k[z]),A.map(G=>Ki(G,!1)).join("")}function h(b,I){return _()==="max"?I:b}N(()=>X(u()),()=>{O(i,u().c)}),N(()=>X(u()),()=>{O(a,u().r)}),N(()=>(r(),o()),()=>{O(c,h(r(),o()))}),we(),fe();var m=U6(),E=Y(m);x(E,"width",1),x(E,"height",1);var w=$(E);Q(()=>x(w,"d",v(u(),d(c)))),P(m),Q(()=>{x(E,"x",d(i)),x(E,"y",d(a))}),L(t,m),le()}var $6=te("<circle></circle>");function F6(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D();let u=U(e,"x",8),_=U(e,"y",8),g=U(e,"value",8),v=U(e,"shape",8);N(()=>X(v()),()=>{O(n,v().r??.35)}),N(()=>X(v()),()=>{O(r,v().stroke??"black")}),N(()=>X(v()),()=>{var m;O(o,(m=v())==null?void 0:m.opacity)}),N(()=>X(v()),()=>{O(i,v().strokeWidth??.02)}),N(()=>X(g()),()=>{O(a,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),N(()=>X(v()),()=>{O(c,v().strokeDasharray??0)}),we(),fe();var h=$6();Q(()=>{x(h,"cx",u()),x(h,"cy",_()),x(h,"r",d(n)),x(h,"stroke",d(r)),x(h,"stroke-width",d(i)),x(h,"fill",d(a)),x(h,"opacity",d(o)),x(h,"stroke-dasharray",d(c))}),L(t,h),le()}var G6=te("<!><!>",1),P6=te("<!><!>",1),W6=te("<!><!><!>",1),H6=te('<g class="single-cell-tool"><!><!></g>');function Zp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"tool",8),E=U(e,"c_id",8,void 0);N(()=>r(),()=>{var G;O(o,(G=r())==null?void 0:G.id)}),N(()=>(X(m()),th),()=>{O(i,cn(m().toolId,Pt)??th)}),N(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),N(()=>(d(a),H),()=>{var G;O(c,((G=d(a))==null?void 0:G.type)||H.CIRCLE)}),N(()=>d(a),()=>{O(u,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.06:.06})}),N(()=>d(a),()=>{O(_,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),N(()=>X(m()),()=>{O(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),N(()=>X(m()),()=>{O(v,new Re(m().cell.c,m().cell.r))}),N(()=>X(m()),()=>{O(h,m().value)}),we(),fe();var w=H6(),b=Y(w);{var I=G=>{Ph(G,{get coord(){return m().cell},minOrMax:"min"})},A=G=>{var z=be(),T=oe(z);{var j=ce=>{Ph(ce,{get coord(){return m().cell},minOrMax:"max"})},ee=ce=>{var Z=be(),ne=oe(Z);{var he=ge=>{var Ie=G6(),ye=oe(Ie);{var Me=Xe=>{Ar(Xe,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(_)}})};J(ye,Xe=>{E()&&E()===d(o)&&Xe(Me)})}var Se=$(ye);F6(Se,{get x(){return d(g).x},get y(){return d(g).y},get value(){return d(h)},get shape(){return d(a)}}),L(ge,Ie)},re=ge=>{var Ie=be(),ye=oe(Ie);{var Me=Xe=>{var qe=P6(),mt=oe(qe);{var Lt=Ot=>{var Yt=it(()=>[m().cell]);Wr(Ot,{get cells(){return d(Yt)},get shape(){return d(_)}})};J(mt,Ot=>{E()&&E()===d(o)&&Ot(Lt)})}var Wt=$(mt),yt=it(()=>[m().cell]);qp(Wt,{get cells(){return d(yt)},get shape(){return d(a)},get value(){return m().value}}),L(Xe,qe)},Se=Xe=>{var qe=W6(),mt=oe(qe);{var Lt=Yt=>{Ar(Yt,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(u)}})};J(mt,Yt=>{Yt(Lt)})}var Wt=$(mt);{var yt=Yt=>{Ar(Yt,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(_)}})};J(Wt,Yt=>{E()&&E()===d(o)&&Yt(yt)})}var Ot=$(Wt);Ar(Ot,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(a)}}),L(Xe,qe)};J(ye,Xe=>{d(c)===H.CAGE?Xe(Me):Xe(Se,!1)},!0)}L(ge,Ie)};J(ne,ge=>{m().toolId===f.COLORED_COUNTING_CIRCLES?ge(he):ge(re,!1)},!0)}L(ce,Z)};J(T,ce=>{m().toolId===f.MAXIMUM?ce(j):ce(ee,!1)},!0)}L(G,z)};J(b,G=>{m().toolId===f.MINIMUM?G(I):G(A,!1)})}var k=$(b);{var M=G=>{Ds(G,{get value(){return d(h)},get x(){return d(v).x},get y(){return d(v).y},position:"TL"})};J(k,G=>{d(c)!==H.CAGE&&m().toolId!==f.COLORED_COUNTING_CIRCLES&&d(h)&&G(M)})}P(w),Q(()=>x(w,"data-id",`${E()}`)),L(t,w),le()}var z6=te('<g class="single-cell-tool-preview"><!></g>');function B6(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D();let a=U(e,"tool_preview",8);N(()=>X(a()),()=>{O(n,a().tool)}),N(()=>X(a()),()=>{O(r,a().mode)}),N(()=>X(a()),()=>{O(o,a().match_id)}),N(()=>d(n),()=>{O(i,{x:d(n).cell.c+.5,y:d(n).cell.r+.5})}),we(),fe();var c=z6();x(c,"opacity",.5);var u=Y(c);Zp(u,{get tool(){return d(n)}}),P(c),L(t,c),le()}var Y6=te('<g class="single-cell-arrow-tool"><!></g>');function j6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var o=be(),i=oe(o);{var a=c=>{var u=Y6(),_=Y(u);Xp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),Q(()=>x(u,"id",`c-${r()}`)),L(c,u)};J(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var K6=te('<g class="single-cell-tool"><!></g>');function V6(t,e){let n=U(e,"tool",8),r=U(e,"c_id",8,void 0);var o=be(),i=oe(o);{var a=c=>{var u=K6(),_=Y(u);Zp(_,{get tool(){return n()},get c_id(){return r()}}),P(u),Q(()=>x(u,"id",`c-${r()}`)),L(c,u)};J(i,c=>{r()!==void 0&&c(a)})}L(t,o)}function X6(t,e){ae(e,!1);let n=U(e,"tool",8),r=U(e,"c_id",8);fe();var o=be(),i=oe(o);{var a=c=>{var u=be(),_=oe(u);{var g=h=>{j6(h,{get tool(){return n()},get c_id(){return r()}})},v=h=>{var m=be(),E=oe(m);{var w=I=>{Vp(I,{get tool(){return n()},get c_id(){return r()}})},b=I=>{var A=be(),k=oe(A);{var M=G=>{V6(G,{get tool(){return n()},get c_id(){return r()}})};J(k,G=>{n().type==="SIMPLE"&&G(M)},!0)}L(I,A)};J(E,I=>{n().type==="MULTIARROW"?I(w):I(b,!1)},!0)}L(h,m)};J(_,h=>{n().type==="ARROW"?h(g):h(v,!1)})}L(c,u)};J(i,c=>{n().toolId!==f.FOG_LIGHTS&&c(a)})}L(t,o),le()}var q6=ue("<!> <!> <!>",1);function Su(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D();let a=U(e,"linePoints",8),c=U(e,"shape",8,Ts);function u(b){var k;const I=Nt.cloneDeep(b);I.r=I.r||.2;const A=I.r;return I.strokeDasharray=b.strokeDasharray,I.opacity=1,I.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(k=I.linePathOptions)==null?void 0:k.bezierRounding},I}N(()=>X(a()),()=>{O(n,a().length)}),N(()=>(d(n),X(a())),()=>{O(r,d(n)>=0?a()[0]:void 0)}),N(()=>(d(n),X(a())),()=>{O(o,d(n)>=0?a()[d(n)-1]:void 0)}),N(()=>X(c()),()=>{O(i,u(c()))}),we(),fe();var _=q6(),g=oe(_);{var v=b=>{gr(b,{get x(){return d(r).x},get y(){return d(r).y},get shape(){return d(i)}})};J(g,b=>{d(r)&&b(v)})}var h=$(g,2);{var m=b=>{uo(b,{get linePoints(){return a()},get shape(){return d(i)}})};J(h,b=>{d(n)>1&&b(m)})}var E=$(h,2);{var w=b=>{gr(b,{get x(){return d(o).x},get y(){return d(o).y},get shape(){return d(i)}})};J(E,b=>{d(o)&&b(w)})}L(t,_),le()}var Z6=ue("<!> <!> <!>",1);function ku(t,e){ae(e,!1);const n=D(),r=D(),o=D();let i=U(e,"linePoints",8),a=U(e,"shape",12,Ts);const c=4,u=.5;function _(M,G){const z=G.r??u,T=G.n??c,j=G.angle??0,ee=Wp(z,T,new Re(0,0),!0,0),ce=(T+(M-j/360)*T%T)%T,Z=Math.floor(ce)%T,ne=Math.ceil(ce)%T;return ee[Z].lerp(ee[ne],ce%1).length()}function g(M){if(d(n)<=1)return 0;const G=i()[0],T=i()[1].subtract(G).angle()/(2*Math.PI);return _(T,M)}function v(M){if(d(n)<=1)return 0;const G=i()[d(n)-1],T=i()[d(n)-2].subtract(G).angle()/(2*Math.PI);return _(T,M)}function h(M){var z;const G=Nt.cloneDeep(M);return G.r=G.r||u,G.opacity=1,G.linePathOptions={shortenHead:g(G),shortenTail:v(G),bezierRounding:(z=G.linePathOptions)==null?void 0:z.bezierRounding},G}N(()=>X(i()),()=>{O(n,i().length)}),N(()=>(d(n),X(i())),()=>{O(r,d(n)>=0?i()[0]:void 0)}),N(()=>(d(n),X(i())),()=>{O(o,d(n)>=0?i()[d(n)-1]:void 0)}),N(()=>X(a()),()=>{a(h(a()))}),we(),fe();var m=Z6(),E=oe(m);{var w=M=>{pl(M,{get cx(){return d(r).x},get cy(){return d(r).y},get shape(){return a()}})};J(E,M=>{d(r)&&M(w)})}var b=$(E,2);{var I=M=>{uo(M,{get linePoints(){return i()},get shape(){return a()}})};J(b,M=>{d(n)>1&&M(I)})}var A=$(b,2);{var k=M=>{pl(M,{get cx(){return d(o).x},get cy(){return d(o).y},get shape(){return a()}})};J(A,M=>{d(o)&&M(k)})}L(t,m),le()}var Q6=ue("<!> <!>",1);function Tu(t,e){ae(e,!1);const n=D();let r=U(e,"linePoints",8),o=U(e,"shape",8,Ts);function i(m){var b,I,A;const E=Nt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const w=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||w,shortenTail:(I=E.linePathOptions)==null?void 0:I.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function a(m){var b,I,A;const E=Nt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const w=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||w,shortenTail:(I=E.linePathOptions)==null?void 0:I.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}N(()=>X(r()),()=>{O(n,r().length>0?r()[0]:void 0)}),we(),fe();var c=Q6(),u=oe(c);{var _=m=>{var E=it(()=>i(o()));uo(m,{get linePoints(){return r()},get shape(){return d(E)}})};J(u,m=>{r().length>1&&m(_)})}var g=$(u,2);{var v=m=>{var E=it(()=>i(o()));gr(m,{get x(){return d(n).x},get y(){return d(n).y},get shape(){return d(E)}})},h=m=>{var E=be(),w=oe(E);{var b=I=>{var A=it(()=>a(o()));pl(I,{get cx(){return d(n).x},get cy(){return d(n).y},get shape(){return d(A)}})};J(w,I=>{d(n)&&I(b)},!0)}L(m,E)};J(g,m=>{d(n)&&o().type===H.THERMO_WITH_CIRCLE?m(v):m(h,!1)})}L(t,c),le()}var J6=te("<!><!><!>",1),e9=te("<!><!><!>",1),t9=te("<!><!><!>",1),n9=te("<!><!><!>",1),r9=te('<g class="line-tool"><!></g>');function o9(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D();let v=U(e,"tool",8),h=U(e,"c_id",8);const m=cn(v().toolId,Pt)??Ts;N(()=>r(),()=>{var A;O(o,(A=r())==null?void 0:A.id)}),N(()=>X(v()),()=>{O(i,Xl(v().cells))}),N(()=>X(v()),()=>{O(a,v().shape??m)}),N(()=>(d(a),H),()=>{var A;O(c,((A=d(a))==null?void 0:A.type)||H.LINE)}),N(()=>d(a),()=>{var A;O(u,((A=d(a))==null?void 0:A.opacity)??1)}),N(()=>d(a),()=>{O(_,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.06:.06})}),N(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),we(),fe();var E=r9(),w=Y(E);{var b=A=>{var k=J6(),M=oe(k);{var G=ee=>{Su(ee,{get linePoints(){return d(i)},get shape(){return d(_)}})};J(M,ee=>{ee(G)})}var z=$(M);{var T=ee=>{Su(ee,{get linePoints(){return d(i)},get shape(){return d(g)}})};J(z,ee=>{h()===d(o)&&ee(T)})}var j=$(z);Su(j,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(A,k)},I=A=>{var k=be(),M=oe(k);{var G=T=>{var j=e9(),ee=oe(j);{var ce=re=>{ku(re,{get linePoints(){return d(i)},get shape(){return d(_)}})};J(ee,re=>{re(ce)})}var Z=$(ee);{var ne=re=>{ku(re,{get linePoints(){return d(i)},get shape(){return d(g)}})};J(Z,re=>{h()===d(o)&&re(ne)})}var he=$(Z);ku(he,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(T,j)},z=T=>{var j=be(),ee=oe(j);{var ce=ne=>{var he=t9(),re=oe(he);{var ge=Se=>{Tu(Se,{get linePoints(){return d(i)},get shape(){return d(_)}})};J(re,Se=>{Se(ge)})}var Ie=$(re);{var ye=Se=>{Tu(Se,{get linePoints(){return d(i)},get shape(){return d(g)}})};J(Ie,Se=>{h()===d(o)&&Se(ye)})}var Me=$(Ie);Tu(Me,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(ne,he)},Z=ne=>{var he=n9(),re=oe(he);{var ge=Se=>{uo(Se,{get linePoints(){return d(i)},get shape(){return d(_)}})};J(re,Se=>{Se(ge)})}var Ie=$(re);{var ye=Se=>{uo(Se,{get linePoints(){return d(i)},get shape(){return d(g)}})};J(Ie,Se=>{h()===d(o)&&Se(ye)})}var Me=$(Ie);uo(Me,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(ne,he)};J(ee,ne=>{d(c)===H.THERMO_WITH_CIRCLE||d(c)===H.THERMO_WITH_POLYGON?ne(ce):ne(Z,!1)},!0)}L(T,j)};J(M,T=>{d(c)===H.LINE_WITH_POLYGON_ENDS?T(G):T(z,!1)},!0)}L(A,k)};J(w,A=>{d(c)===H.LINE_WITH_CIRCLE_ENDS?A(b):A(I,!1)})}P(E),Q(()=>x(E,"opacity",d(u))),L(t,E),le()}var i9=te('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function Qp(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),o=U(e,"strokeWidth",8),i=U(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=i9();x(u,"viewBox","0 0 1 1"),x(u,"refX",a),x(u,"refY",a),x(u,"markerWidth",1),x(u,"markerHeight",1);var _=Y(u);x(_,"d",c),P(u),Q(()=>{x(u,"id",r()),x(_,"stroke-width",o()),x(_,"stroke",i())}),L(t,u)}var s9=te('<path class="arrow-line" fill="none"></path>'),a9=te('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function l9(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D();let m=U(e,"tool",8),E=U(e,"arrowId",8);const w=cn(m().toolId,Pt)??yv,b="round",I="round",A=crypto.randomUUID(),k=`arrow-mask-${E()}-${A}`,M=`arrow-marker-${E()}-${A}`;N(()=>X(m()),()=>{O(n,m().shape??w)}),N(()=>d(n),()=>{var Z;O(r,((Z=d(n))==null?void 0:Z.r)??.4)}),N(()=>d(n),()=>{var Z;O(o,((Z=d(n))==null?void 0:Z.stroke)??"gray")}),N(()=>d(n),()=>{var Z;O(i,((Z=d(n))==null?void 0:Z.strokeWidth)??.1)}),N(()=>d(n),()=>{var Z;O(a,((Z=d(n))==null?void 0:Z.strokeDasharray)??0)}),N(()=>d(n),()=>{var Z;O(c,((Z=d(n))==null?void 0:Z.opacity)??.8)}),N(()=>(d(r),d(n)),()=>{var Z,ne,he,re;O(u,{shortenHead:d(r),shortenTail:((ne=(Z=d(n))==null?void 0:Z.linePathOptions)==null?void 0:ne.shortenTail)??.2,bezierRounding:((re=(he=d(n))==null?void 0:he.linePathOptions)==null?void 0:re.bezierRounding)??.4})}),N(()=>d(n),()=>{var Z;O(_,((Z=d(n))==null?void 0:Z.fill)??"none")}),N(()=>d(n),()=>{var Z;O(g,((Z=d(n))==null?void 0:Z.inset)??.2)}),N(()=>d(g),()=>{O(v,{...w,strokeDasharray:0,strokeLinejoin:"round",inset:d(g)})}),N(()=>X(m()),()=>{O(h,vl(m().cells))}),we(),fe();var G=a9(),z=oe(G);x(z,"id",k);var T=$(Y(z));P(z);var j=$(z);Qp(j,{id:M,l:.2,get strokeWidth(){return d(i)},get stroke(){return d(o)}});var ee=$(j);Wr(ee,{get cells(){return m().cells},get shape(){return d(v)}});var ce=$(ee);Je(ce,1,()=>m().lines,pt,(Z,ne)=>{var he=be(),re=oe(he);{var ge=Ie=>{var ye=s9();Q(()=>x(ye,"d",vl(d(ne),d(u)))),x(ye,"stroke-linejoin",b),x(ye,"stroke-linecap",I),x(ye,"marker-end",`url(#${M??""})`),Q(()=>{x(ye,"stroke",d(o)),x(ye,"stroke-width",d(i)),x(ye,"opacity",d(c)),x(ye,"stroke-dasharray",d(a))}),L(Ie,ye)};J(re,Ie=>{d(ne).length>1&&Ie(ge)})}L(Z,he)}),Q(()=>{x(T,"stroke-width",2*d(r)-d(i)),x(T,"d",d(h))}),L(t,G),le()}var c9=te('<path class="arrow-line" fill="none"></path>'),u9=te('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function Mu(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D(),a=D(),c=D();let u=U(e,"tool",8),_=U(e,"c_id",8),g=U(e,"shape",8);const v="round",h="round",m=crypto.randomUUID(),E=`arrow-mask-${_()}-${m}`,w=`arrow-marker-${_()}-${m}`;N(()=>X(g()),()=>{var z;O(n,((z=g())==null?void 0:z.r)??.4)}),N(()=>X(g()),()=>{var z;O(r,((z=g())==null?void 0:z.stroke)??"gray")}),N(()=>X(g()),()=>{var z;O(o,((z=g())==null?void 0:z.strokeWidth)??.1)}),N(()=>X(g()),()=>{var z;O(i,((z=g())==null?void 0:z.strokeDasharray)??0)}),N(()=>(d(n),X(g())),()=>{var z,T,j,ee;O(a,{shortenHead:d(n),shortenTail:((T=(z=g())==null?void 0:z.linePathOptions)==null?void 0:T.shortenTail)??.2,bezierRounding:((ee=(j=g())==null?void 0:j.linePathOptions)==null?void 0:ee.bezierRounding)??.4})}),N(()=>X(u()),()=>{O(c,vl(u().cells))}),we(),fe();var b=u9(),I=oe(b);x(I,"id",E);var A=$(Y(I));P(I);var k=$(I);Qp(k,{id:w,l:.2,get strokeWidth(){return d(o)},get stroke(){return d(r)}});var M=$(k);x(M,"mask",`url(#${E??""})`);var G=$(M);Je(G,1,()=>u().lines,pt,(z,T)=>{var j=be(),ee=oe(j);{var ce=Z=>{var ne=c9();Q(()=>x(ne,"d",vl(d(T),d(a)))),x(ne,"stroke-linejoin",v),x(ne,"stroke-linecap",h),x(ne,"marker-end",`url(#${w??""})`),Q(()=>{x(ne,"stroke",d(r)),x(ne,"stroke-width",d(o)),x(ne,"stroke-dasharray",d(i))}),L(Z,ne)};J(ee,Z=>{d(T).length>1&&Z(ce)})}L(z,j)}),Q(()=>{x(A,"stroke-width",2*d(n)-d(o)),x(A,"d",d(c)),x(M,"d",d(c)),x(M,"stroke-width",2*d(n)+d(o)),x(M,"stroke",d(r))}),L(t,b),le()}var d9=te("<!><!><!>",1),_9=te('<g class="arrow-tool"><!></g>');function f9(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D();let u=U(e,"tool",8),_=U(e,"c_id",8);const g=cn(u().toolId,Pt)??yv;N(()=>X(u()),()=>{O(o,u().shape??g)}),N(()=>d(o),()=>{O(i,{...d(o),stroke:"var(--grid-background-color)",strokeWidth:d(o).strokeWidth?d(o).strokeWidth+.06:.06})}),N(()=>d(o),()=>{O(a,{...d(o),stroke:"var(--constraint-selected-color)",strokeWidth:d(o).strokeWidth?d(o).strokeWidth+.07:.07})}),N(()=>r(),()=>{var w;O(c,(w=r())==null?void 0:w.id)}),we(),fe();var v=_9(),h=Y(v);{var m=w=>{l9(w,{get tool(){return u()},get arrowId(){return _()}})},E=w=>{var b=d9(),I=oe(b);{var A=z=>{Mu(z,{get tool(){return u()},get c_id(){return _()},get shape(){return d(i)}})};J(I,z=>{z(A)})}var k=$(I);{var M=z=>{Mu(z,{get tool(){return u()},get c_id(){return _()},get shape(){return d(a)}})};J(k,z=>{_()===d(c)&&z(M)})}var G=$(k);Mu(G,{get tool(){return u()},get c_id(){return _()},get shape(){return d(o)}}),L(w,b)};J(h,w=>{d(o).type===H.BULBOUS_ARROW?w(m):w(E,!1)})}P(v),L(t,v),le()}var g9=te('<g class="cage-tool"><!><!></g>');function h9(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D();let c=U(e,"tool",8),u=U(e,"c_id",8);const _=cn(c().toolId,Pt)??Nd;N(()=>X(c()),()=>{O(o,c().shape??_)}),N(()=>r(),()=>{var E;O(i,(E=r())==null?void 0:E.id)}),N(()=>d(o),()=>{O(a,{...d(o),stroke:"var(--constraint-selected-color)",strokeWidth:d(o).strokeWidth?d(o).strokeWidth+.07:.07})}),we(),fe();var g=g9(),v=Y(g);{var h=E=>{Wr(E,{get cells(){return c().cells},get shape(){return d(a)}})};J(v,E=>{u()===d(i)&&E(h)})}var m=$(v);qp(m,{get cells(){return c().cells},get shape(){return d(o)},get value(){return c().value}}),P(g),L(t,g),le()}var v9=te("<!><!>",1),p9=te('<g class="clone-tool"><!><!><!><!><!></g>');function m9(t,e){ae(e,!1);const n=Ve(),r=()=>me(Bt,"$currentConstraintStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D(),m=D();let E=U(e,"tool",8),w=U(e,"c_id",8);const b=cn(E().toolId,Pt)??Py,I=800,A=E().value;N(()=>r(),()=>{var ce;O(o,(ce=r())==null?void 0:ce.id)}),N(()=>X(E()),()=>{O(i,E().shape??b)}),N(()=>d(i),()=>{O(a,{...d(i),stroke:"var(--constraint-selected-color)",strokeWidth:d(i).strokeWidth?d(i).strokeWidth+.07:.07})}),N(()=>d(i),()=>{O(c,d(i).inset??.15)}),N(()=>d(i),()=>{O(u,d(i).strokeWidth??.07)}),N(()=>d(i),()=>{O(_,d(i).fontColor??d(i).stroke??"black")}),N(()=>X(E()),()=>{O(g,E().cells[E().cells.length-1])}),N(()=>X(E()),()=>{O(v,E().cells2[E().cells2.length-1])}),N(()=>(d(g),d(c)),()=>{O(h,new Re(d(g).c+1-d(c)-.05,d(g).r+1-d(c)-.05))}),N(()=>(d(v),d(c)),()=>{O(m,new Re(d(v).c+1-d(c)-.05,d(v).r+1-d(c)-.05))}),we(),fe();var k=p9(),M=Y(k);{var G=ce=>{var Z=v9(),ne=oe(Z);Wr(ne,{get cells(){return E().cells},get shape(){return d(a)}});var he=$(ne);Wr(he,{get cells(){return E().cells2},get shape(){return d(a)}}),L(ce,Z)};J(M,ce=>{w()===d(o)&&ce(G)})}var z=$(M);Wr(z,{get cells(){return E().cells},get shape(){return d(i)}});var T=$(z);Ds(T,{value:A,get x(){return d(h).x},get y(){return d(h).y},position:"BR",get fontColor(){return d(_)},fontWeight:I});var j=$(T);Wr(j,{get cells(){return E().cells2},get shape(){return d(i)}});var ee=$(j);Ds(ee,{value:A,get x(){return d(m).x},get y(){return d(m).y},position:"BR",get fontColor(){return d(_)},fontWeight:I}),P(k),L(t,k),le()}var E9=te('<g class="element-group"></g>'),C9=te('<g class="element-group"></g>'),b9=te('<g class="element-group"></g>'),w9=te('<g class="element-group"></g>'),I9=te('<g class="element-group"></g>'),y9=te('<g class="element-group"></g>');function O9(t,e){ae(e,!1);const n=Ve(),r=()=>me(E2,"$underlayElementsStore",n),o=D();N(()=>r(),()=>{O(o,r())}),we(),fe();var i=be(),a=oe(i);Je(a,1,()=>d(o),pt,(c,u)=>{var _=be(),g=oe(_);{var v=h=>{var m=be(),E=oe(m);{var w=I=>{var A=E9();Je(A,5,()=>Object.entries(d(u).constraints),k=>k[0],(k,M)=>{X6(k,{get tool(){return d(M)[1]},get c_id(){return d(M)[0]}})}),P(A),Q(()=>x(A,"data-toolId",d(u).tool_id)),L(I,A)},b=I=>{var A=be(),k=oe(A);{var M=z=>{var T=C9();Je(T,5,()=>Object.entries(d(u).constraints),j=>j[0],(j,ee)=>{o9(j,{get tool(){return d(ee)[1]},get c_id(){return d(ee)[0]}})}),P(T),Q(()=>x(T,"data-toolId",d(u).tool_id)),L(z,T)},G=z=>{var T=be(),j=oe(T);{var ee=Z=>{var ne=b9();Je(ne,5,()=>Object.entries(d(u).constraints),he=>he[0],(he,re)=>{f9(he,{get tool(){return d(re)[1]},get c_id(){return d(re)[0]}})}),P(ne),Q(()=>x(ne,"data-toolId",d(u).tool_id)),L(Z,ne)},ce=Z=>{var ne=be(),he=oe(ne);{var re=Ie=>{var ye=w9();Je(ye,5,()=>Object.entries(d(u).constraints),Me=>Me[0],(Me,Se)=>{h9(Me,{get tool(){return d(Se)[1]},get c_id(){return d(Se)[0]}})}),P(ye),Q(()=>x(ye,"data-toolId",d(u).tool_id)),L(Ie,ye)},ge=Ie=>{var ye=be(),Me=oe(ye);{var Se=qe=>{var mt=I9();Je(mt,5,()=>Object.entries(d(u).constraints),Lt=>Lt[0],(Lt,Wt)=>{m9(Lt,{get tool(){return d(Wt)[1]},get c_id(){return d(Wt)[0]}})}),P(mt),Q(()=>x(mt,"data-toolId",d(u).tool_id)),L(qe,mt)},Xe=qe=>{var mt=be(),Lt=oe(mt);{var Wt=yt=>{var Ot=y9();Je(Ot,5,()=>Object.entries(d(u).constraints),Yt=>Yt[0],(Yt,Dn)=>{jp(Yt,{get tool(){return d(Dn)[1]},get c_id(){return d(Dn)[0]}})}),P(Ot),Q(()=>x(Ot,"data-toolId",d(u).tool_id)),L(yt,Ot)};J(Lt,yt=>{Hr(d(u).tool_id)&&yt(Wt)},!0)}L(qe,mt)};J(Me,qe=>{ks(d(u).tool_id)?qe(Se):qe(Xe,!1)},!0)}L(Ie,ye)};J(he,Ie=>{xi(d(u).tool_id)?Ie(re):Ie(ge,!1)},!0)}L(Z,ne)};J(j,Z=>{Oi(d(u).tool_id)?Z(ee):Z(ce,!1)},!0)}L(z,T)};J(k,z=>{yi(d(u).tool_id)?z(M):z(G,!1)},!0)}L(I,A)};J(E,I=>{Dd(d(u).tool_id)?I(w):I(b,!1)})}L(h,m)};J(g,h=>{d(u).constraints&&h(v)})}L(c,_)}),L(t,i),le()}var x9=te('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),A9=te('<g class="center-corner-or-edge-tool-preview"><!></g>');function L9(t,e){ae(e,!1);const n=D(),r=D(),o=D(),i=D();let a=U(e,"tool_preview",8);N(()=>X(a()),()=>{O(n,a().tool)}),N(()=>X(a()),()=>{O(r,a().mode)}),N(()=>X(a()),()=>{O(o,a().match_id)}),N(()=>d(n),()=>{O(i,d(n).cell)}),we(),fe();var c=be(),u=oe(c);{var _=v=>{var h=x9();x(h,"opacity",.5);var m=Y(h);Ql(m,{get cx(){return d(i).c},get cy(){return d(i).r},get c_id(){return d(o)}}),P(h),L(v,h)},g=v=>{var h=A9();x(h,"opacity",.5);var m=Y(h);Yp(m,{get tool(){return d(n)}}),P(h),L(v,h)};J(u,v=>{d(r)==="remove"&&d(o)?v(_):v(g,!1)})}L(t,c),le()}var D9=te('<line class="positive-diagonal"></line>'),R9=te('<line class="negative-diagonal"></line>'),N9=te('<g class="element-group"><!></g>');function S9(t,e){ae(e,!1);const n=Ve(),r=()=>me(En,"$gridStore",n),o=D(),i=D(),a=D(),c=D(),u=D(),_=D(),g=D(),v=D(),h=D(),m=D();let E=U(e,"element",8);const w=0,b=0,I=0,A=0;N(()=>X(E()),()=>{O(o,E().tool_id)}),N(()=>(X(E()),ih),()=>{O(i,cn(E().tool_id,Pt)??ih)}),N(()=>d(i),()=>{var T;O(a,((T=d(i))==null?void 0:T.strokeWidth)??.02)}),N(()=>d(i),()=>{var T;O(c,((T=d(i))==null?void 0:T.stroke)??"black")}),N(()=>r(),()=>{O(u,r())}),N(()=>(d(o),f),()=>{O(_,d(o)===f.POSITIVE_DIAGONAL||d(o)===f.POSITIVE_ANTIDIAGONAL||d(o)===f.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL)}),N(()=>d(u),()=>{O(g,d(u).nCols)}),N(()=>d(u),()=>{O(v,d(u).nRows)}),N(()=>d(u),()=>{O(h,d(u).nCols)}),N(()=>d(u),()=>{O(m,d(u).nRows)}),we(),fe();var k=N9(),M=Y(k);{var G=T=>{var j=D9();x(j,"x2",A),x(j,"y1",I),Q(()=>{x(j,"x1",d(g)),x(j,"y2",d(v)),x(j,"stroke",d(c)),x(j,"stroke-width",d(a))}),L(T,j)},z=T=>{var j=R9();x(j,"x1",w),x(j,"y1",b),Q(()=>{x(j,"x2",d(h)),x(j,"y2",d(m)),x(j,"stroke",d(c)),x(j,"stroke-width",d(a))}),L(T,j)};J(M,T=>{d(_)?T(G):T(z,!1)})}P(k),Q(()=>x(k,"data-toolId",E().tool_id)),L(t,k),le()}function k9(t,e){ae(e,!1);const n=Ve(),r=()=>me(x2,"$diagonalElementsStore",n),o=D();N(()=>r(),()=>{O(o,r())}),we();var i=be(),a=oe(i);Je(a,1,()=>d(o),pt,(c,u)=>{S9(c,{get element(){return d(u)}})}),L(t,i),le()}var T9=te('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function M9(t,e){ae(e,!1);const n=Ve(),r=()=>me(En,"$gridStore",n),o=()=>me(ct,"$localConstraintsStore",n),i=()=>me(Qt,"$toolStore",n),a=()=>me(Qn,"$cellsStore",n),c=()=>me(fp,"$fogLightsStore",n),u=()=>me(O2,"$cornerLineToolsStore",n),_=()=>me(w2,"$edgeToolsStore",n),g=()=>me(y2,"$cornerToolsStore",n),v=()=>me(I2,"$centerCornerOrEdgeToolsStore",n),h=()=>me(Cs,"$outsideDirectionToolPreviewStore",n),m=()=>me(el,"$simpleCellToolPreviewStore",n),E=()=>me(tl,"$singleCellArrowPreviewStore",n),w=()=>me(nl,"$singleCellMultiArrowPreviewStore",n),b=()=>me(rl,"$edgeToolPreviewStore",n),I=()=>me(ol,"$cornerToolPreviewStore",n),A=()=>me(il,"$centerCornerOrEdgeToolPreviewStore",n),k=D(),M=D(),G=D();let z=U(e,"svgRef",12,null);function T(){for(const[Ke,bn]of o().entries()){if(!Hr(Ke))continue;if(Object.entries(bn.constraints).some(([Xo,Cr])=>!$t(Cr.cell,d(M))))return!0}return!1}function j(Ke,bn){const Vo=T(),Xo=Hr(bn),Cr=Vo||Xo?1:.2,Vi=-Cr,Xi=-Cr,qi=Ke.nCols+2*Cr,Zi=Ke.nRows+2*Cr;return{x:Vi,y:Xi,width:qi,height:Zi}}function ee(Ke){return`${Ke.x} ${Ke.y} ${Ke.width} ${Ke.height}`}N(()=>r(),()=>{O(k,r())}),N(()=>d(k),()=>{O(M,{nRows:d(k).nRows,nCols:d(k).nCols})}),N(()=>(d(M),i()),()=>{O(G,j(d(M),i()))}),we(),fe();var ce=T9();Q(()=>x(ce,"viewBox",ee(d(G))));var Z=Y(ce);p6(Z);var ne=$(Z);h4(ne,{get boundingBox(){return d(G)},get gridShape(){return d(M)}});var he=$(ne);p4(he,{get gridShape(){return d(M)}});var re=$(he);lP(re,{get grid(){return r()}});var ge=$(re);P8(ge,{get gridShape(){return d(M)}});var Ie=$(ge);Je(Ie,5,a,pt,(Ke,bn)=>{UP(Ke,{get cell(){return d(bn)}})}),P(Ie);var ye=$(Ie);t4(ye,{});var Me=$(ye);b6(Me,{get element(){return c()}});var Se=$(Me);O9(Se,{});var Xe=$(Se);z8(Xe,{});var qe=$(Xe);k9(qe,{});var mt=$(qe);oP(mt,{});var Lt=$(mt);Xa(Lt,{get elements(){return u()},g_name:"corner-line-tools-layer",Component:t6});var Wt=$(Lt);sP(Wt,{get boundingBox(){return d(G)}});var yt=$(Wt);F8(yt,{});var Ot=$(yt);Xa(Ot,{get elements(){return _()},g_name:"edge-tools-layer",Component:c6});var Yt=$(Ot);Xa(Yt,{get elements(){return g()},g_name:"corner-tools-layer",Component:G4});var Dn=$(Yt);Xa(Dn,{get elements(){return v()},g_name:"center-corner-edge-tools-layer",Component:B4});var lr=$(Dn);QP(lr,{});var Eo=$(lr);Je(Eo,5,a,pt,(Ke,bn)=>{kP(Ke,{get cell(){return d(bn)}})}),P(Eo);var Rr=$(Eo);b4(Rr,{});var Nr=$(Rr);f4(Nr,{});var Ge=$(Nr);{var Oe=Ke=>{jp(Ke,{get tool(){return h()}})};J(Ge,Ke=>{Hr(i())&&h()&&Ke(Oe)})}var Ue=$(Ge);{var Fe=Ke=>{B6(Ke,{get tool_preview(){return m()}})};J(Ue,Ke=>{yl(i())&&i()!==f.FOG_LIGHTS&&m()&&Ke(Fe)})}var St=$(Ue);{var ea=Ke=>{T6(Ke,{get tool_preview(){return E()}})};J(St,Ke=>{Ho(i())&&E()&&Ke(ea)})}var ta=$(St);{var Co=Ke=>{Vp(Ke,{get tool(){return w()}})};J(ta,Ke=>{wi(i())&&w()&&Ke(Co)})}var Cn=$(ta);{var bo=Ke=>{O6(Ke,{get tool_preview(){return b()}})};J(Cn,Ke=>{Ii(i())&&b()&&Ke(bo)})}var wo=$(Cn);{var ec=Ke=>{L6(Ke,{get tool_preview(){return I()}})};J(wo,Ke=>{Ns(i())&&I()&&Ke(ec)})}var Io=$(wo);{var tc=Ke=>{L9(Ke,{get tool_preview(){return A()}})};J(Io,Ke=>{Ss(i())&&A()&&Ke(tc)})}P(ce),Fo(ce,Ke=>z(Ke),()=>z()),L(t,ce),le()}function U9(t){return eO(t)?(my(),!0):!1}function $9(t){return tO(t)?(sp(),!0):!1}function F9(t){return nO(t)?(ap(),!0):!1}function Uu(t){(U9(t)||$9(t)||F9(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var G9=ue('<div class="board-container svelte-m3kzqm" tabindex="-1"><!></div>');function P9(t,e){ae(e,!1);const n=Ve(),r=()=>me(hp,"$InputHandlerStore",n),o=()=>me(mi,"$svgRefStore",n),i=D();let a=D(null);function c(h){return m=>{h&&d(i)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===d(a))&&h(m)}}N(()=>r(),()=>{O(i,r())}),we();var u=G9();ke("keydown",vu,function(...h){Uu==null||Uu.apply(this,h)});var _=Qg(()=>{var h;return c((h=d(i))==null?void 0:h.keyDown)});ke("keydown",vu,function(...h){var m;(m=d(_))==null||m.apply(this,h)});var g=Qg(()=>{var h;return c((h=d(i))==null?void 0:h.keyUp)});ke("keyup",vu,function(...h){var m;(m=d(g))==null||m.apply(this,h)});var v=Y(u);M9(v,{get svgRef(){return Qh(),o()},set svgRef(h){$o(mi,h)},$$legacy:!0}),P(u),Fo(u,h=>O(a,h),()=>d(a)),ke("pointerdown",u,Cu(Gn(h=>{var m;h.currentTarget.focus(),(m=d(i))==null||m.pointerDown(h)})),!0),ke("pointermove",u,Cu(Gn(h=>{var m;h.currentTarget.focus(),(m=d(i))==null||m.pointerMove(h)})),!0),ke("pointerup",u,Cu(Gn(h=>{var m;h.currentTarget.focus(),(m=d(i))==null||m.pointerUp(h)})),!0),L(t,u),le()}var W9=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function H9(t){var e=W9();L(t,e)}var z9=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function B9(t){var e=z9();L(t,e)}var Y9=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function j9(t){var e=Y9();L(t,e)}var K9=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function V9(t){var e=K9();L(t,e)}var X9=ue('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function q9(t,e){ae(e,!1);const n=Ve(),r=()=>me(Gi,"$commandHistoryStore",n),o=()=>me(od,"$selectOnStore",n),i=D(),a=D();function c(){sp()}function u(){ap()}function _(){console.log("check")}function g(){$o(od,!o())}N(()=>r(),()=>{O(i,r()._undoStack.length===0)}),N(()=>r(),()=>{O(a,r()._redoStack.length===0)}),we(),fe();var v=X9(),h=Y(v),m=Y(h);V9(m),P(h);var E=$(h,2),w=Y(E);B9(w),P(E);var b=$(E,2);b.disabled=!0;var I=Y(b);H9(I),P(b);var A=$(b,2),k=Y(A);j9(k),P(A),P(v),Q(()=>{h.disabled=d(i),E.disabled=d(a),x(A,"aria-checked",o()),vt(A,"active",o())}),ke("click",h,c),ke("click",E,u),ke("click",b,_),ke("click",A,g),L(t,v),le()}var Z9=ue('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),Q9=ue('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),J9=ue('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),eW=ue('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function tW(t,e){ae(e,!1);const n=Ve(),r=()=>me(ho,"$settingsStore",n),o=()=>me(gl,"$penColorStore",n),i=()=>me(hp,"$InputHandlerStore",n),a=D(),c=D(),u=[];let _=U(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],v=["A","B","C","D","E","F","G","H","I","O"];let h=D(!1);function m(T){return T?v:g}function E(T){return[f.DIGIT,f.CENTER_PM,f.CORNER_PM,f.GIVEN].includes(T)}function w(T){const j=T.currentTarget;if(!j)return;const ee=j.getAttribute("aria-checked");O(h,ee!=="true")}N(()=>r(),()=>{O(a,r().penToolActive)}),N(()=>r(),()=>{O(c,r().letterToolActive)}),we(),fe();var b=eW(),I=Y(b);{var A=T=>{var j=be(),ee=oe(j);Je(ee,1,()=>g,pt,(ce,Z)=>{var ne=Z9(),he=Y(ne);fn(he);var re;_o(2),P(ne),Q(()=>{x(ne,"data-value",d(Z)),vt(ne,"active",o()===d(Z)),re!==(re=d(Z))&&(he.value=(he.__value=d(Z))==null?"":d(Z))}),wl(u,[],he,()=>(d(Z),o()),ge=>$o(gl,ge)),L(ce,ne)}),L(T,j)},k=T=>{var j=be(),ee=oe(j);Je(ee,1,()=>m(d(h)),pt,(ce,Z)=>{var ne=Q9(),he=Y(ne),re=Y(he,!0);P(he),_o(2),P(ne),Q(()=>{wy(ne,d(Z)),at(re,d(Z))}),ke("click",ne,function(...ge){var Ie;(Ie=i()&&i().padClick)==null||Ie.apply(this,ge)}),L(ce,ne)}),L(T,j)};J(I,T=>{_()===f.PEN_TOOL&&d(a)?T(A):T(k,!1)})}var M=$(I,2);{var G=T=>{var j=J9();Q(()=>{x(j,"aria-checked",d(h)),vt(j,"letter-checked",d(h)),vt(j,"num-checked",!d(h))}),ke("click",j,w),L(T,j)};J(M,T=>{d(c)&&E(_())&&T(G)})}var z=$(M,2);P(b),Q(()=>{vt(b,"digit",_()===f.DIGIT),vt(b,"center",_()===f.CENTER_PM),vt(b,"corner",_()===f.CORNER_PM),vt(b,"color",_()===f.HIGHLIGHTS),vt(b,"pen",_()===f.PEN_TOOL),vt(z,"letter-tool",d(c))}),ke("click",z,function(...T){var j;(j=i()&&i().padClick)==null||j.apply(this,T)}),L(t,b),le()}var nW=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function rW(t){var e=nW();L(t,e)}var oW=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function iW(t){var e=oW();L(t,e)}var sW=ue('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function gs(t,e){ae(e,!1);const n=[];let r=U(e,"selectedTool",12),o=U(e,"value",8),i=U(e,"title",8,void 0);function a(){id(o())}fe();var c=sW(),u=Y(c);fn(u);var _,g=$(u,2);gt(g,e,"default",{}),P(c),Q(()=>{x(c,"title",i()),vt(c,"active",o()===r()),_!==(_=o())&&(u.value=(u.__value=o())==null?"":o())}),wl(n,[],u,()=>(o(),r()),r),ke("change",u,a),L(t,c),le()}var aW=ue('<span aria-hidden="true">1</span>'),lW=ue('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),cW=ue('<span aria-hidden="true" style="font-size: 50%">123</span>'),uW=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),dW=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),_W=ue('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function fW(t,e){ae(e,!1);const n=Ve(),r=()=>me(ho,"$settingsStore",n);let o=U(e,"selectedTool",12);fe();var i=_W(),a=Y(i);gs(a,{get value(){return f.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=aW();L(h,E)},$$slots:{default:!0},$$legacy:!0});var c=$(a,2);gs(c,{get value(){return f.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=lW();L(h,E)},$$slots:{default:!0},$$legacy:!0});var u=$(c,2);gs(u,{get value(){return f.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=cW();L(h,E)},$$slots:{default:!0},$$legacy:!0});var _=$(u,2);gs(_,{get value(){return f.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=uW(),w=Y(E);rW(w),P(E),L(h,E)},$$slots:{default:!0},$$legacy:!0});var g=$(_,2);{var v=h=>{gs(h,{get value(){return f.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,E)=>{var w=dW(),b=Y(w);iW(b),P(w),L(m,w)},$$slots:{default:!0},$$legacy:!0})};J(g,h=>{r().penToolActive&&h(v)})}P(i),L(t,i),le()}var gW=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function hW(t){var e=gW();L(t,e)}var vW=ue('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Zs(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var o=vW(),i=Y(o),a=Y(i);gt(a,e,"default",{}),P(i),P(o),Q(()=>x(o,"title",n())),ke("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),L(t,o)}var pW=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),mW=ue('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function EW(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function o(){cp(),hl(),n(!1)}fe(),qr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(i){n(i)},children:(i,a)=>{var c=mW(),u=$(Y(c),2);Wl(u,{children:(_,g)=>{var v=pW(),h=oe(v),m=$(h,2);ke("click",h,o),ke("click",m,r),L(_,v)},$$slots:{default:!0}}),P(c),L(i,c)},$$slots:{default:!0},$$legacy:!0}),le()}var CW=ue("<!> <!>",1);function bW(t){let e=D(!1);function n(){O(e,!0)}var r=CW(),o=oe(r);Zs(o,{title:"Restart",clickCb:n,children:(a,c)=>{hW(a)},$$slots:{default:!0}});var i=$(o,2);EW(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var wW=ue('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function hs(t,e){let n=U(e,"title",8);var r=wW(),o=Y(r),i=Y(o,!0);P(o);var a=$(o,2);gt(a,e,"default",{}),P(r),Q(()=>at(i,n())),L(t,r)}var IW=ue('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function mn(t,e){let n=U(e,"description",8);var r=IW(),o=Y(r),i=Y(o,!0);P(o);var a=$(o,2),c=Y(a);gt(c,e,"default",{}),P(a),P(r),Q(()=>at(i,n())),L(t,r)}var yW=ue('<div class="shortcut svelte-1cgt5u5"> </div>');function _n(t,e){let n=U(e,"shortcut",8);var r=yW(),o=Y(r,!0);P(r),Q(()=>at(o,n())),L(t,r)}var OW=ue("<p></p>"),xW=ue("<!> <!> <!> <!>",1),AW=ue("<!> or <!>",1),LW=ue("<!> <!> <!> <!> <!> <!> <!> <!>",1),DW=ue("<!> <!>",1),RW=ue('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function NW(t,e){let n=U(e,"showModal",12,!1);qr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var i=RW(),a=Y(i);hs(a,{title:"Setting Instructions",children:(v,h)=>{var m=OW();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",L(v,m)},$$slots:{default:!0}});var c=$(a,2);hs(c,{title:"General",children:(v,h)=>{mn(v,{description:"Toggle Darkmode",children:(m,E)=>{_n(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=$(c,2);hs(u,{title:"Selection",children:(v,h)=>{var m=xW(),E=oe(m);mn(E,{description:"Select cells",children:(A,k)=>{_n(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var w=$(E,2);mn(w,{description:"Add to current selection",children:(A,k)=>{_n(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=$(w,2);mn(b,{description:"Remove from current selection",children:(A,k)=>{_n(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var I=$(b,2);mn(I,{description:"Add or remove from current selection",children:(A,k)=>{_n(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}});var _=$(u,2);hs(_,{title:"Change Tool",children:(v,h)=>{var m=LW(),E=oe(m);mn(E,{description:"Cycle Tool",children:(z,T)=>{_n(z,{shortcut:"Space"})},$$slots:{default:!0}});var w=$(E,2);mn(w,{description:"Change to Digit Tool",children:(z,T)=>{_n(z,{shortcut:"Z"})},$$slots:{default:!0}});var b=$(w,2);mn(b,{description:"Change to Corner Pencilmark Tool",children:(z,T)=>{_n(z,{shortcut:"X"})},$$slots:{default:!0}});var I=$(b,2);mn(I,{description:"Change to Center Pencilmark Tool",children:(z,T)=>{_n(z,{shortcut:"C"})},$$slots:{default:!0}});var A=$(I,2);mn(A,{description:"Change to Highlights Tool",children:(z,T)=>{_n(z,{shortcut:"V"})},$$slots:{default:!0}});var k=$(A,2);mn(k,{description:"Quickshift To Corner Pencilmark Tool",children:(z,T)=>{_n(z,{shortcut:"Shift"})},$$slots:{default:!0}});var M=$(k,2);mn(M,{description:"Quickshift To Center Pencilmark Tool",children:(z,T)=>{_n(z,{shortcut:"Ctrl"})},$$slots:{default:!0}});var G=$(M,2);mn(G,{description:"Quickshift To Highlights Tool",children:(z,T)=>{var j=AW(),ee=oe(j);_n(ee,{shortcut:"Shift + Ctrl"});var ce=$(ee,2);_n(ce,{shortcut:"Alt"}),L(z,j)},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}});var g=$(_,2);hs(g,{title:"Undo/Redo",children:(v,h)=>{var m=DW(),E=oe(m);mn(E,{description:"Undo",children:(b,I)=>{_n(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var w=$(E,2);mn(w,{description:"Redo",children:(b,I)=>{_n(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}}),P(i),L(r,i)},$$slots:{default:!0},$$legacy:!0})}var SW=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function kW(t){var e=SW();L(t,e)}var TW=ue("<!> <!>",1);function MW(t){let e=D(!1);function n(){O(e,!0)}var r=TW(),o=oe(r);Zs(o,{title:"Info",clickCb:n,children:(a,c)=>{kW(a)},$$slots:{default:!0}});var i=$(o,2);NW(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var UW=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function $W(t){var e=UW();L(t,e)}var FW=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function GW(t){var e=FW();L(t,e)}function PW(t){let e=D(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function i(){n()?o():r(),O(e,!d(e))}Zs(t,{title:"Fullscreen",clickCb:i,children:(a,c)=>{var u=be(),_=oe(u);{var g=h=>{GW(h)},v=h=>{$W(h)};J(_,h=>{d(e)?h(g):h(v,!1)})}L(a,u)},$$slots:{default:!0}})}function Jp(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),o=U(e,"options",8);fe();var i=be(),a=oe(i);{var c=u=>{var _=be(),g=oe(_);Jh(g,()=>r()[n().type],(v,h)=>{h(v,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,E)=>{var w=be(),b=oe(w);{var I=k=>{ml(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},A=k=>{var M=ZI();Q(()=>at(M,n().raw)),L(k,M)};J(b,k=>{"tokens"in n()&&n().tokens?k(I):k(A,!1)})}L(m,w)},$$slots:{default:!0}})}),L(u,_)};J(a,u=>{r()[n().type]&&u(c)})}L(t,i),le()}function ml(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),o=U(e,"options",8);var i=be(),a=oe(i);{var c=u=>{var _=be(),g=oe(_);Je(g,1,n,pt,(v,h)=>{Jp(v,{get token(){return d(h)},get renderers(){return r()},get options(){return o()}})}),L(u,_)};J(a,u=>{n()&&u(c)})}L(t,i)}function em(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function tm(t){return t.startsWith("/")||t.startsWith("#")}function WW(t,e){return e.slug(t).replace(/--+/g,"-")}function HW(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;let i=D();N(()=>(X(n()),X(r())),()=>{O(i,WW(n().text,r().slugger))}),we(),fe();var a=be(),c=oe(a);return nv(c,()=>`h${n().depth}`,!1,(u,_)=>{let g;Q(()=>g=ev(u,g,{id:d(i)},void 0,u.namespaceURI===ud,u.nodeName.includes("-")));var v=be(),h=oe(v);gt(h,e,"default",{}),L(_,v)}),L(t,a),rt(e,"renderers",o),le({renderers:o})}var zW=ue("<blockquote><!></blockquote>");function BW(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=zW(),a=Y(i);return gt(a,e,"default",{}),P(i),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}function YW(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),o=U(e,"renderers",8),i=D();N(()=>X(n()),()=>{O(i,n().ordered?"ol":"ul")}),we(),fe();var a=be(),c=oe(a);nv(c,()=>d(i),!1,(u,_)=>{let g;Q(()=>g=ev(u,g,{start:n().start||1},void 0,u.namespaceURI===ud,u.nodeName.includes("-")));var v=be(),h=oe(v);Je(h,1,()=>n().items,pt,(m,E)=>{var w=it(()=>({...d(E)}));Jp(m,{get token(){return d(w)},get options(){return r()},get renderers(){return o()}})}),L(_,v)}),L(t,a),le()}var jW=ue("<li><!></li>");function KW(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=jW(),a=Y(i);return gt(a,e,"default",{}),P(i),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var VW=ue("<br>");function XW(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=VW();return L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var qW=ue("<pre><code> </code></pre>");function ZW(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;fe();var i=qW(),a=Y(i),c=Y(a,!0);return P(a),P(i),Q(()=>{Oy(a,`lang-${n().lang}`),at(c,n().text)}),L(t,i),rt(e,"options",r),rt(e,"renderers",o),le({options:r,renderers:o})}var QW=ue("<code> </code>");function JW(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;fe();var i=QW(),a=Y(i,!0);return Q(()=>at(a,n().raw.slice(1,n().raw.length-1))),P(i),L(t,i),rt(e,"options",r),rt(e,"renderers",o),le({options:r,renderers:o})}var eH=ue('<th scope="col"><!></th>'),tH=ue("<td><!></td>"),nH=ue("<tr></tr>"),rH=ue("<table><thead><tr></tr></thead><tbody></tbody></table>");function oH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),o=U(e,"renderers",8);fe();var i=rH(),a=Y(i),c=Y(a);Je(c,5,()=>n().header,pt,(_,g)=>{var v=eH(),h=Y(v);ml(h,{get tokens(){return d(g).tokens},get options(){return r()},get renderers(){return o()}}),P(v),L(_,v)}),P(c),P(a);var u=$(a);Je(u,5,()=>n().rows,pt,(_,g)=>{var v=nH();Je(v,5,()=>d(g),pt,(h,m)=>{var E=tH(),w=Y(E);ml(w,{get tokens(){return d(m).tokens},get options(){return r()},get renderers(){return o()}}),P(E),L(h,E)}),P(v),L(_,v)}),P(u),P(i),L(t,i),le()}function iH(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,o=void 0;fe();var i=be(),a=oe(i);return yy(a,()=>n().text),L(t,i),rt(e,"options",r),rt(e,"renderers",o),le({options:r,renderers:o})}var sH=ue("<p><!></p>");function aH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=sH(),a=Y(i);return gt(a,e,"default",{}),P(i),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var lH=ue("<a><!></a>");function cH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;fe();var i=lH();Q(()=>x(i,"href",tm(n().href)?em(r().baseUrl,n().href):n().href));var a=Y(i);return gt(a,e,"default",{}),P(i),Q(()=>x(i,"title",n().title)),L(t,i),rt(e,"renderers",o),le({renderers:o})}function uH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=be(),a=oe(i);return gt(a,e,"default",{}),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var dH=ue("<dfn><!></dfn>");function _H(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=dH(),a=Y(i);return gt(a,e,"default",{}),P(i),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var fH=ue("<del><!></del>");function gH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=fH(),a=Y(i);return gt(a,e,"default",{}),P(i),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var hH=ue("<em><!></em>");function vH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=hH(),a=Y(i);return gt(a,e,"default",{}),P(i),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var pH=ue("<hr>");function mH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=pH();return L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var EH=ue("<strong><!></strong>");function CH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=EH(),a=Y(i);return gt(a,e,"default",{}),P(i),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}var bH=ue('<img class="markdown-image svelte-z38cge">');function wH(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const o=void 0;fe();var i=bH();return Q(()=>x(i,"src",tm(n().href)?em(r().baseUrl,n().href):n().href)),Q(()=>{x(i,"title",n().title),x(i,"alt",n().text)}),L(t,i),rt(e,"renderers",o),le({renderers:o})}function Wh(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=be(),a=oe(i);return gt(a,e,"default",{}),L(t,i),rt(e,"token",n),rt(e,"options",r),rt(e,"renderers",o),le({token:n,options:r,renderers:o})}const IH=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,yH=Object.hasOwnProperty;class OH{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=xH(e,n===!0);const i=o;for(;yH.call(r.occurrences,o);)r.occurrences[i]++,o=i+"-"+r.occurrences[i];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function xH(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(IH,"").replace(/ /g,"-"))}function f_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ko=f_();function nm(t){Ko=t}const rm=/[&<>"']/,AH=new RegExp(rm.source,"g"),om=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,LH=new RegExp(om.source,"g"),DH={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hh=t=>DH[t];function Un(t,e){if(e){if(rm.test(t))return t.replace(AH,Hh)}else if(om.test(t))return t.replace(LH,Hh);return t}const RH=/(^|[^\[])\^/g;function At(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(RH,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,e)};return r}function zh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Os={exec:()=>null};function Bh(t,e){const n=t.replace(/\|/g,(i,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function vs(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function NH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Yh(t,e,n,r){const o=e.href,i=e.title?Un(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:i,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:i,text:Un(a)}}function SH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const i=o.match(/^\s+/);if(i===null)return o;const[a]=i;return a.length>=r.length?o.slice(r.length):o}).join(`
`)}class El{constructor(e){Ee(this,"options");Ee(this,"rules");Ee(this,"lexer");this.options=e||Ko}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:vs(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=SH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=vs(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:vs(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=vs(n[0],`
`).split(`
`),o="",i="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const g=u.join(`
`),v=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${g}`:g,i=i?`${i}
${v}`:v;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,a,!0),this.lexer.state.top=h,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,w=E.raw+`
`+r.join(`
`),b=this.blockquote(w);a[a.length-1]=b,o=o.substring(0,o.length-E.raw.length)+b.raw,i=i.substring(0,i.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,w=E.raw+`
`+r.join(`
`),b=this.list(w);a[a.length-1]=b,o=o.substring(0,o.length-m.raw.length)+b.raw,i=i.substring(0,i.length-E.raw.length)+b.raw,r=w.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:a,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const o=r.length>1,i={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",g="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let v=n[2].split(`
`,1)[0].replace(/^\t+/,I=>" ".repeat(3*I.length)),h=e.split(`
`,1)[0],m=!v.trim(),E=0;if(this.options.pedantic?(E=2,g=v.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=v.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(h)&&(_+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const I=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const z=e.split(`
`,1)[0];let T;if(h=z,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),T=h):T=h.replace(/\t/g,"    "),k.test(h)||M.test(h)||G.test(h)||I.test(h)||A.test(h))break;if(T.search(/[^ ]/)>=E||!h.trim())g+=`
`+T.slice(E);else{if(m||v.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(v)||M.test(v)||A.test(v))break;g+=`
`+h}!m&&!h.trim()&&(m=!0),_+=z+`
`,e=e.substring(z.length+1),v=T.slice(E)}}i.loose||(c?i.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let w=null,b;this.options.gfm&&(w=/^\[[ xX]\] /.exec(g),w&&(b=w[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:_,task:!!w,checked:b,loose:!1,text:g,tokens:[]}),i.raw+=_}i.items[i.items.length-1].raw=i.items[i.items.length-1].raw.trimEnd(),i.items[i.items.length-1].text=i.items[i.items.length-1].text.trimEnd(),i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){const _=i.items[u].tokens.filter(v=>v.type==="space"),g=_.length>0&&_.some(v=>/\n.*\n/.test(v.raw));i.loose=g}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:i}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Bh(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),i=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of i)a.rows.push(Bh(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Un(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=vs(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=NH(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],i="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);a&&(o=a[1],i=a[3])}else i=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),Yh(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),i=n[o.toLowerCase()];if(!i){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Yh(r,i,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...o[0]].length-1;let c,u,_=a,g=0;const v=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,n=n.slice(-1*e.length+a);(o=v.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){_+=u;continue}else if((o[5]||o[6])&&a%3&&!((a+u)%3)){g+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+g);const h=[...o[0]][0].length,m=e.slice(0,a+o.index+h+u);if(Math.min(a,u)%2){const w=m.slice(1,-1);return{type:"em",raw:m,text:w,tokens:this.lexer.inlineTokens(w)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return o&&i&&(r=r.substring(1,r.length-1)),r=Un(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=Un(n[1]),o="mailto:"+r):(r=Un(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,i;if(n[2]==="@")o=Un(n[0]),i="mailto:"+o;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);o=Un(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:o,href:i,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Un(n[0]),{type:"text",raw:n[0],text:r}}}}const kH=/^(?:[ \t]*(?:\n|$))+/,TH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,MH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,UH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,im=/(?:[*+-]|\d{1,9}[.)])/,sm=At(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,im).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),g_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$H=/^[^\n]+/,h_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,FH=At(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",h_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),GH=At(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,im).getRegex(),Jl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",v_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,PH=At("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",v_).replace("tag",Jl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),am=At(g_).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jl).getRegex(),WH=At(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",am).getRegex(),p_={blockquote:WH,code:TH,def:FH,fences:MH,heading:UH,hr:Qs,html:PH,lheading:sm,list:GH,newline:kH,paragraph:am,table:Os,text:$H},jh=At("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jl).getRegex(),HH={...p_,table:jh,paragraph:At(g_).replace("hr",Qs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",jh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jl).getRegex()},zH={...p_,html:At(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",v_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Os,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:At(g_).replace("hr",Qs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,BH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,cm=/^( {2,}|\\)\n(?!\s*$)/,YH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Js="\\p{P}\\p{S}",jH=At(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Js).getRegex(),KH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,VH=At(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Js).getRegex(),XH=At("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Js).getRegex(),qH=At("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Js).getRegex(),ZH=At(/\\([punct])/,"gu").replace(/punct/g,Js).getRegex(),QH=At(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),JH=At(v_).replace("(?:-->|$)","-->").getRegex(),ez=At("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",JH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,tz=At(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Cl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),um=At(/^!?\[(label)\]\[(ref)\]/).replace("label",Cl).replace("ref",h_).getRegex(),dm=At(/^!?\[(ref)\](?:\[\])?/).replace("ref",h_).getRegex(),nz=At("reflink|nolink(?!\\()","g").replace("reflink",um).replace("nolink",dm).getRegex(),m_={_backpedal:Os,anyPunctuation:ZH,autolink:QH,blockSkip:KH,br:cm,code:BH,del:Os,emStrongLDelim:VH,emStrongRDelimAst:XH,emStrongRDelimUnd:qH,escape:lm,link:tz,nolink:dm,punctuation:jH,reflink:um,reflinkSearch:nz,tag:ez,text:YH,url:Os},rz={...m_,link:At(/^!?\[(label)\]\((.*?)\)/).replace("label",Cl).getRegex(),reflink:At(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cl).getRegex()},ld={...m_,escape:At(lm).replace("])","~|])").getRegex(),url:At(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},oz={...ld,br:At(cm).replace("{2,}","*").getRegex(),text:At(ld.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},qa={normal:p_,gfm:HH,pedantic:zH},ps={normal:m_,gfm:ld,breaks:oz,pedantic:rz};class Fn{constructor(e){Ee(this,"tokens");Ee(this,"options");Ee(this,"state");Ee(this,"tokenizer");Ee(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ko,this.options.tokenizer=this.options.tokenizer||new El,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:qa.normal,inline:ps.normal};this.options.pedantic?(n.block=qa.pedantic,n.inline=ps.pedantic):this.options.gfm&&(n.block=qa.gfm,this.options.breaks?n.inline=ps.breaks:n.inline=ps.gfm),this.tokenizer.rules=n}static get rules(){return{block:qa,inline:ps}}static lex(e,n){return new Fn(n).lex(e)}static lexInline(e,n){return new Fn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,i,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+o.raw,i.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(g=>{_=g.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){i=n[n.length-1],r&&(i==null?void 0:i.type)==="paragraph"?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(o),r=a.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,i,a=e,c,u,_;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const v=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},v),typeof h=="number"&&h>=0&&(g=Math.min(g,h))}),g<1/0&&g>=0&&(i=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class bl{constructor(e){Ee(this,"options");Ee(this,"parser");this.options=e||Ko}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const o=(a=(n||"").match(/^\S*/))==null?void 0:a[0],i=e.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+Un(o)+'">'+(r?i:Un(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:Un(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let o="";for(let c=0;c<e.items.length;c++){const u=e.items[c];o+=this.listitem(u)}const i=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+i+a+`>
`+o+"</"+i+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let i=0;i<e.header.length;i++)r+=this.tablecell(e.header[i]);n+=this.tablerow({text:r});let o="";for(let i=0;i<e.rows.length;i++){const a=e.rows[i];r="";for(let c=0;c<a.length;c++)r+=this.tablecell(a[c]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),i=zh(e);if(i===null)return o;e=i;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+o+"</a>",a}image({href:e,title:n,text:r}){const o=zh(e);if(o===null)return r;e=o;let i=`<img src="${e}" alt="${r}"`;return n&&(i+=` title="${n}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class E_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Jn{constructor(e){Ee(this,"options");Ee(this,"renderer");Ee(this,"textRenderer");this.options=e||Ko,this.options.renderer=this.options.renderer||new bl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new E_}static parse(e,n){return new Jn(n).parse(e)}static parseInline(e,n){return new Jn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const i=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const c=i,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=i;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const i=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=c||"";continue}}const a=i;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class xs{constructor(e){Ee(this,"options");Ee(this,"block");this.options=e||Ko}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Fn.lex:Fn.lexInline}provideParser(){return this.block?Jn.parse:Jn.parseInline}}Ee(xs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class iz{constructor(...e){Ee(this,"defaults",f_());Ee(this,"options",this.setOptions);Ee(this,"parse",this.parseMarkdown(!0));Ee(this,"parseInline",this.parseMarkdown(!1));Ee(this,"Parser",Jn);Ee(this,"Renderer",bl);Ee(this,"TextRenderer",E_);Ee(this,"Lexer",Fn);Ee(this,"Tokenizer",El);Ee(this,"Hooks",xs);this.use(...e)}walkTokens(e,n){var o,i;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(i=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&i[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const a=n.renderers[i.name];a?n.renderers[i.name]=function(...c){let u=i.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[i.level];a?a.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),o.extensions=n),r.renderer){const i=this.defaults.renderer||new bl(this.defaults);for(const a in r.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=i[c];i[c]=(...g)=>{let v=u.apply(i,g);return v===!1&&(v=_.apply(i,g)),v||""}}o.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new El(this.defaults);for(const a in r.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=i[c];i[c]=(...g)=>{let v=u.apply(i,g);return v===!1&&(v=_.apply(i,g)),v}}o.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new xs;for(const a in r.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=i[c];xs.passThroughHooks.has(a)?i[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(i,g)).then(h=>_.call(i,h));const v=u.call(i,g);return _.call(i,v)}:i[c]=(...g)=>{let v=u.apply(i,g);return v===!1&&(v=_.apply(i,g)),v}}o.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,a=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),i&&(u=u.concat(i.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Fn.lex(e,n??this.defaults)}parser(e,n){return Jn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const i={...o},a={...this.defaults,...i},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&i.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Fn.lex:Fn.lexInline,_=a.hooks?a.hooks.provideParser():e?Jn.parse:Jn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(g=>u(g,a)).then(g=>a.hooks?a.hooks.processAllTokens(g):g).then(g=>a.walkTokens?Promise.all(this.walkTokens(g,a.walkTokens)).then(()=>g):g).then(g=>_(g,a)).then(g=>a.hooks?a.hooks.postprocess(g):g).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let g=u(r,a);a.hooks&&(g=a.hooks.processAllTokens(g)),a.walkTokens&&this.walkTokens(g,a.walkTokens);let v=_(g,a);return a.hooks&&(v=a.hooks.postprocess(v)),v}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+Un(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const Wo=new iz;function xt(t,e){return Wo.parse(t,e)}xt.options=xt.setOptions=function(t){return Wo.setOptions(t),xt.defaults=Wo.defaults,nm(xt.defaults),xt};xt.getDefaults=f_;xt.defaults=Ko;xt.use=function(...t){return Wo.use(...t),xt.defaults=Wo.defaults,nm(xt.defaults),xt};xt.walkTokens=function(t,e){return Wo.walkTokens(t,e)};xt.parseInline=Wo.parseInline;xt.Parser=Jn;xt.parser=Jn.parse;xt.Renderer=bl;xt.TextRenderer=E_;xt.Lexer=Fn;xt.lexer=Fn.lex;xt.Tokenizer=El;xt.Hooks=xs;xt.parse=xt;xt.options;xt.setOptions;xt.use;xt.walkTokens;xt.parseInline;Jn.parse;Fn.lex;function sz(t){return new Fn().lex(t)}const az=()=>({heading:HW,blockquote:BW,list:YW,list_item:KW,br:XW,code:ZW,codespan:JW,table:oH,html:iH,paragraph:aH,link:cH,text:uH,def:_H,del:gH,em:vH,hr:mH,strong:CH,image:wH,space:Wh,escape:Wh}),lz=()=>({baseUrl:"/",slugger:new OH});function cz(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},tv(()=>{console.warn=t})}function _m(t,e){ae(e,!1),cz();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),o=U(e,"renderers",24,()=>({})),i=D(),a=D(),c=D();N(()=>(X(n()),X(o()),X(r())),()=>{O(i,sz(n())),O(a,{...az(),...o()}),O(c,{...lz(),...r()})}),we(),fe(),ml(t,{get tokens(){return d(i)},get renderers(){return d(a)},get options(){return d(c)}}),le()}var uz=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),dz=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),_z=ue('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function fz(t,e){ae(e,!1);const n=Ve(),r=()=>me(Xr,"$puzzleMetaStore",n),o=D();let i=U(e,"showModal",12,!1);function a(u){return u?dl(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}N(()=>r(),()=>{O(o,r())}),we(),fe(),qr(t,{title:"Rules",get showModal(){return i()},set showModal(u){i(u)},children:(u,_)=>{var g=_z(),v=Y(g),h=Y(v,!0);P(v);var m=$(v,2),E=Y(m);Q(()=>at(E,`by ${a(d(o).authors)??""}`)),P(m);var w=$(m,2),b=Y(w),I=it(()=>c(d(o).ruleset));_m(b,{get source(){return d(I)}}),P(w);var A=$(w,2);{var k=z=>{var T=uz(),j=$(oe(T),2);Q(()=>x(j,"href",d(o).ctcUrl)),L(z,T)};J(A,z=>{var T,j;(j=(T=d(o))==null?void 0:T.ctcUrl)!=null&&j.length&&z(k)})}var M=$(A,2);{var G=z=>{var T=dz(),j=$(oe(T),2);Q(()=>x(j,"href",d(o).ctcYoutubeUrl)),L(z,T)};J(M,z=>{var T,j;(j=(T=d(o))==null?void 0:T.ctcYoutubeUrl)!=null&&j.length&&z(G)})}P(g),Q(()=>{var z;return at(h,((z=d(o))==null?void 0:z.title)||"Puzzle")}),L(u,g)},$$slots:{default:!0},$$legacy:!0}),le()}var gz=te('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function hz(t){var e=gz();L(t,e)}var vz=ue("<!> <!>",1);function pz(t){let e=D(!1);function n(){O(e,!0)}var r=vz(),o=oe(r);Zs(o,{title:"Rules",clickCb:n,children:(a,c)=>{hz(a)},$$slots:{default:!0}});var i=$(o,2);fz(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var mz=ue("<!> <!>",1);function Ez(t){let e=D(!1);function n(){O(e,!0)}var r=mz(),o=oe(r);Zs(o,{title:"Settings",clickCb:n,children:(a,c)=>{vp(a)},$$slots:{default:!0}});var i=$(o,2);pp(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var Cz=ue('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!> <!></div>');function bz(t){var e=Cz(),n=Y(e);Ez(n);var r=$(n,2);pz(r);var o=$(r,2);PW(o);var i=$(o,2);MW(i);var a=$(i,2);bW(a),P(e),L(t,e)}var wz=ue('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function Iz(t,e){ae(e,!1);const n=Ve(),r=()=>me(mi,"$svgRefStore",n),o=()=>me(Xr,"$puzzleMetaStore",n),i=()=>me(Qt,"$toolStore",n),a=D(),c=D();function u(){r()&&r().focus()}function _(Z){return Z?dl(Z," & ",", "):"Anonymous"}function g(Z){return Z&&Z.length?Z:"Normal sudoku rules apply."}N(()=>o(),()=>{O(a,o().title??"Sudoku")}),N(()=>o(),()=>{O(c,_(o().authors))}),we(),fe();var v=wz(),h=Y(v),m=Y(h),E=Y(m),w=Y(E,!0);P(E);var b=$(E,2),I=Y(b);P(b),P(m);var A=$(m,2),k=Y(A),M=it(()=>g(o().ruleset));_m(k,{get source(){return d(M)}}),P(A),P(h);var G=$(h,2),z=Y(G);bz(z);var T=$(z,2),j=Y(T);q9(j,{});var ee=$(j,2);tW(ee,{get selectedTool(){return i()}});var ce=$(ee,2);fW(ce,{get selectedTool(){return Qh(),i()},set selectedTool(Z){$o(Qt,Z)},$$legacy:!0}),P(T),P(G),P(v),Q(()=>{at(w,d(a)),at(I,`by ${d(c)??""}`)}),ke("click",G,Gn(()=>{u()})),L(t,v),le()}var yz=ue('<div class="left-panel svelte-fwyvr2"><!></div>'),Oz=ue('<div class="game svelte-fwyvr2"><!> <div class="center-panel svelte-fwyvr2"><!></div> <div class="right-panel svelte-fwyvr2"><!></div></div>');function Wz(t,e){ae(e,!1);const n=Ve(),r=()=>me(Tl,"$gameModeStore",n),o=D();tv(async()=>{const h=window.location.origin,m=Jg===""?h:`${h}/${Jg}`;try{await g8({workerURL:`${m}/minizinc-worker.js`,wasmURL:`${m}/minizinc.wasm`,dataURL:`${m}/minizinc.data`})}catch(E){const w="Failed to initialize MiniZinc: "+E.message;console.log(w)}}),N(()=>r(),()=>{O(o,r())}),we(),fe();var i=Oz(),a=Y(i);{var c=h=>{var m=yz(),E=Y(m);U8(E),P(m),L(h,m)};J(a,h=>{d(o)===bi.SETTING&&h(c)})}var u=$(a,2),_=Y(u);P9(_,{}),P(u);var g=$(u,2),v=Y(g);Iz(v,{}),P(g),P(i),L(t,i),le()}export{Wz as G,Pz as b,lS as p,hl as r,DS as s};
