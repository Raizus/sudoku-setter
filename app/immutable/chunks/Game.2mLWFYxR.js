var Yw=Object.defineProperty;var jw=(t,e,n)=>e in t?Yw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>jw(t,typeof e!="symbol"?e+"":e,n);import{c as Fu,o as Kw,p as Vw,q as _d,a as L,t as ue,s as J,u as ke,d as we,v as Xw,m as qw}from"./disclose-version.eswIe671.js";import{i as fe}from"./legacy.CBYIjwbu.js";import{l as Vh,h as on,k as xs,y as Xh,v as Is,R as Zw,V as Qw,U as Jw,g as $u,i as qh,K as Zh,a0 as ey,j as ty,u as Qg,B as ny,aJ as fd,z as ry,x as oy,a2 as gd,ar as Qh,A as Jg,aK as iy,a3 as sy,a8 as ay,m as ly,c as Y,r as B,t as Q,p as ae,s as U,a as le,Z as d,al as rt,aL as S,aM as Ie,av as X,_ as O,$ as N,f as oe,aC as fo,aN as Pu,aO as pu,ak as eh}from"./utils.Bp9j5Uj0.js";import{s as Ve,i as ee,a as me,b as Fo,m as Jh}from"./store.D4OU4dvo.js";import{s as vo,u as cy,a as uy,b as dy,c as _y,e as fy,f as gy,g as hy,h as vy,t as py}from"./global.Bod0hR-p.js";import{e as Qe,i as mt}from"./each.BoOPhUgK.js";import{i as my,p as G}from"./props.DtgsZciY.js";import{w as It,g as Te,d as zr}from"./index.DYJKv3QC.js";import{r as sn,a as ev,s as A,c as Ey,b as Cy,d as tv}from"./attributes.CiNh_L_I.js";import{b as $o,c as nv}from"./this.DLpfsf4C.js";import{s as at}from"./render.CTsB0KRz.js";import{a as by,o as rv}from"./index-client.BnGHJMPg.js";import{b as th}from"./paths.DbAVhoAv.js";function Iy(t,e,n,r,o){var i=t,a="",c;Vh(()=>{if(a===(a=e()??"")){on&&xs();return}c!==void 0&&(Zh(c),c=void 0),a!==""&&(c=Xh(()=>{if(on){Is.data;for(var u=xs(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=Zw(u);if(u===null)throw Qw(),Jw;Fu(Is,f),i=$u(u);return}var g=a+"",v=Kw(g);Fu(qh(v),v.lastChild),i.before(v)}))})}function gt(t,e,n,r,o){var c;on&&xs();var i=(c=e.$$slots)==null?void 0:c[n],a=!1;i===!0&&(i=e[n==="default"?"children":n],a=!0),i===void 0||i(t,a?()=>r:r)}function ov(t,e,n,r,o,i){let a=on;on&&xs();var c,u,f=null;on&&Is.nodeType===1&&(f=Is,xs());var g=on?Is:t,v;Vh(()=>{const h=e()||null;var m=h==="svg"?fd:null;h!==c&&(v&&(h===null?ry(v,()=>{v=null,u=null}):h===u?oy(v):Zh(v)),h&&h!==u&&(v=Xh(()=>{if(f=on?f:m?document.createElementNS(m,h):document.createElement(h),Fu(f,f),r){on&&Vw(h)&&f.append(document.createComment(""));var E=on?qh(f):f.appendChild(ty());on&&(E===null?Qg(!1):$u(E)),r(f,E)}ny.nodes_end=f,g.before(f)})),c=h,c&&(u=c))},ey),a&&(Qg(!0),$u(g))}function Rs(t,e,n){var r=t.__className,o=iv(e);on&&t.getAttribute("class")===o?t.__className=o:(r!==o||on&&t.getAttribute("class")!==o)&&(o===""?t.removeAttribute("class"):t.setAttribute("class",o),t.__className=o)}function wy(t,e,n){var r=t.__className,o=iv(e);on&&t.className===o?t.__className=o:(r!==o||on&&t.className!==o)&&(e==null?t.removeAttribute("class"):t.className=o,t.__className=o)}function iv(t,e){return(t??"")+""}function vt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function qn(t,e,n=e){var r=iy();_d(t,"input",o=>{var i=o?t.defaultValue:t.value;if(i=Eu(t)?Cu(i):i,n(i),r&&i!==(i=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=i??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(on&&t.defaultValue!==t.value||sy(e)==null&&t.value)&&n(Eu(t)?Cu(t.value):t.value),gd(()=>{var o=e();Eu(t)&&o===Cu(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}const mu=new Set;function Ol(t,e,n,r,o=r){var i=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),_d(n,"change",()=>{var f=n.__value;i&&(f=nh(a,f,n.checked)),o(f)},()=>o(i?[]:null)),gd(()=>{var f=r();if(on&&n.defaultChecked!==n.checked){c=!0;return}i?(f=f||[],n.checked=f.includes(n.__value)):n.checked=my(n.__value,f)}),Qh(()=>{var f=a.indexOf(n);f!==-1&&a.splice(f,1)}),mu.has(a)||(mu.add(a),Jg(()=>{a.sort((f,g)=>f.compareDocumentPosition(g)===4?-1:1),mu.delete(a)})),Jg(()=>{if(c){var f;if(i)f=nh(a,f,n.checked);else{var g=a.find(v=>v.checked);f=g==null?void 0:g.__value}o(f)}})}function nh(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function Eu(t){var e=t.type;return e==="number"||e==="range"}function Cu(t){return t===""?null:+t}function yy(t,e,n=e){_d(t,"change",()=>{n(t.files)}),gd(()=>{t.files=e()})}function ot(t,e,n){var r=ay(t,e);r&&r.set&&(t[e]=n,Qh(()=>{t[e]=null}))}function Oy(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function $n(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function bu(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Ay(t,e){var i;var n=(i=t.$$events)==null?void 0:i[e.type],r=ly(n)?n.slice():n==null?[]:[n];for(var o of r)o.call(this,e)}var Ii=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Ii||{}),hd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(hd||{}),sv=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(sv||{}),av=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(av||{}),lv=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(lv||{}),cv=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(cv||{}),uv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(uv||{}),dv=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(dv||{}),_v=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(_v||{}),fv=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(fv||{}),gv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(gv||{}),Al=(t=>(t.FOG_LIGHTS="Fog Lights",t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Al||{}),vd=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(vd||{}),pd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(pd||{}),md=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(md||{}),Ed=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Ed||{}),Cd=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Cd||{}),bd=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(bd||{}),Id=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Id||{}),wd=(t=>(t.CLONE_REGION="Clone Region",t))(wd||{}),yd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(yd||{}),Od=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Od||{}),Ad=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Ad||{}),xd=(t=>(t.MAZE_WALL="Maze Wall",t))(xd||{}),Ld=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Ld||{}),Nd=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Nd||{}),hv=(t=>(t.PEN_TOOL="Pen Tool",t))(hv||{});const Rd={...sv,...av,...lv,...dv,..._v,...uv,...fv,...gv,...cv},vv={...Al,...vd,...pd,...md,...Ed,...Cd,...bd,...Id,...wd,...yd,...Od,...Ad,...xd,...Ld},_={...hd,...Rd,...vv,...Nd,...hv};var k=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(k||{});function xy(t){return Object.values(Rd).includes(t)}function Ly(t){return Object.values(vv).includes(t)}function Ny(t){return Object.values(Nd).includes(t)}function Ry(t){return Ly(t)||Ny(t)}function xl(t){return Object.values(Al).includes(t)||t===_.COSMETIC_CELL_CENTER_SHAPE}function zo(t){return Object.values(vd).includes(t)||t===_.COSMETIC_CELL_ARROW}function wi(t){return Object.values(pd).includes(t)||t===_.COSMETIC_CELL_MULTI_ARROW}function Sd(t){return xl(t)||zo(t)||wi(t)}function yi(t){return Object.values(md).includes(t)||t===_.COSMETIC_EDGE}function Ss(t){return Object.values(Ed).includes(t)||t===_.COSMETIC_CORNER}function Oi(t){return Object.values(Cd).includes(t)||t===_.COSMETIC_LINE||t===_.COSMETIC_LINE_WITH_POLYGON_ENDS||t===_.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Ai(t){return Object.values(bd).includes(t)||t===_.COSMETIC_ARROW}function xi(t){return Object.values(Id).includes(t)||t===_.COSMETIC_CAGE}function Ds(t){return Object.values(Ad).includes(t)}function pv(t){return Object.values(xd).includes(t)}function Ts(t){return Object.values(wd).includes(t)}function Hr(t){const e=Object.values(yd),n=Object.values(Od);return e.includes(t)||n.includes(t)||t===_.COSMETIC_OUTSIDE_DIRECTION}function Sy(t){return Object.values(Ld).includes(t)}function Dd(t){return Object.values(hd).includes(t)}function Dy(t){return Hr(t)||Sd(t)||Oi(t)||Ai(t)||xi(t)||Ts(t)}const Ty=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],ky=[...Ty,"Cosmetic Tool"],My=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function mv(t){for(const e of Object.values(_))if(e===t)return e}function Ev(t,e){return Object.values(e).includes(t)}var H=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(H||{});function pn(t,e,n){n!==void 0&&(t[e]=n)}function Gy(t){var e,n,r,o,i,a,c,u,f,g,v,h,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(o=t.width)!=null&&o.editable||(i=t.inset)!=null&&i.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(f=t.strokeWidth)!=null&&f.editable||(g=t.strokeDasharray)!=null&&g.editable||(v=t.strokeDashoffset)!=null&&v.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function Bu(t){var n,r,o,i,a,c,u,f,g,v,h,m,E,I,b,w,x,T,M,$,W,F,K;const e={type:t.type};return pn(e,"n",(n=t.n)==null?void 0:n.value),pn(e,"r",(r=t.r)==null?void 0:r.value),pn(e,"height",(o=t.height)==null?void 0:o.value),pn(e,"width",(i=t.width)==null?void 0:i.value),pn(e,"inset",(a=t.inset)==null?void 0:a.value),pn(e,"angle",(c=t.angle)==null?void 0:c.value),pn(e,"fill",(u=t.fill)==null?void 0:u.value),pn(e,"stroke",(f=t.stroke)==null?void 0:f.value),pn(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),pn(e,"strokeDasharray",(v=t.strokeDasharray)==null?void 0:v.value),pn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),pn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),pn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),pn(e,"opacity",(I=t.opacity)==null?void 0:I.value),pn(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(x=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:x.value,shortenTail:(M=(T=t.linePathOptions)==null?void 0:T.shortenTail)==null?void 0:M.value,bezierRounding:(W=($=t.linePathOptions)==null?void 0:$.bezierRounding)==null?void 0:W.value,closeLoops:(K=(F=t.linePathOptions)==null?void 0:F.closeLoops)==null?void 0:K.value}),e}function Uy(t,e){const n={};if(e===void 0)return t;for(const o in t)o!=="linePathOptions"&&t[o]!==e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0}const rh={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},oh={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},ih={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},cl={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Hu={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ks={type:"Line",strokeWidth:.125,stroke:"gray"},Td={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Cv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Fy={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},sh={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},Ll=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,er=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Li=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,$y=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,an=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Ni=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,kd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Me=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Py=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,By=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Hy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Ri=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Wy=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,zy=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Yy=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function bv(t){return zo(t)?Py():wi(t)?By():t===_.XV?zy():yi(t)?Hy():xi(t)?Ll():Ai(t)?Li():Hr(t)?$y():Oi(t)?Me():Ts(t)?Yy():""}var pe=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(pe||{}),xt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(xt||{}),Ln=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Ln||{}),Re=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(Re||{}),xn=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(xn||{});function jy(t){if(xl(t)||zo(t)||wi(t)||Oi(t)||yi(t)||Ss(t)||xi(t)||Hr(t)||Ds(t))return Re;if(Ai(t))return Ln;if(Ts(t))return xn}function Ky(t){if(xl(t)||zo(t)||wi(t)||Oi(t)||yi(t)||Ss(t)||xi(t)||Hr(t)||Ds(t)||Ai(t)||Ts(t))return"Dynamic"}const Ms=[k.ARROW_CONSTRAINT,k.LOCAL_CONSTRAINT,k.ARROW_TOOL,k.LOCAL_ELEMENT],Vy={inputOptions:{type:pe.ARROW},toolId:_.ARROW,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Li(),tags:[],categories:Ms}},Xy={inputOptions:{type:pe.ARROW},toolId:_.AVERAGE_ARROW,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Li(),tags:[],categories:Ms}},qy={inputOptions:{type:pe.ARROW,allowSelfIntersection:!0},toolId:_.BULBOUS_ARROW,shape:{type:H.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:Li(),tags:[],categories:Ms}};pe.ARROW,_.SQUARE_ROOT_ARROW,H.LINE,Li();const Zy={inputOptions:{type:pe.ARROW},toolId:_.CHAOS_CONSTRUCTION_ARROW,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:Li(),tags:[],categories:Ms}};function Qy(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function Jy(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function eO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function tO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function nO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const rO={Delete:null,Backspace:null};function oO(t,e=10){if(t in rO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function iO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function sO(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function aO(t){const e={KeyZ:_.DIGIT,KeyX:_.CORNER_PM,KeyC:_.CENTER_PM,KeyV:_.HIGHLIGHTS};return t in e?e[t]:_.DIGIT}function lO(t){let e;return t.altKey?e=_.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=_.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=_.CENTER_PM:e=_.HIGHLIGHTS,e}function Iv(t){return t==="Backspace"}function Si(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Iv(t.key))}function cO(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function uO(t){return cO(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function dO(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Yo(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,o=(e==null?void 0:e.allowNegatives)??!0,i=(e==null?void 0:e.maxLength)??3;if(t.length>i)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=o?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,f=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${f.source}$`,"i").test(t))}function Yr(t,e,n){if(t===void 0)return t;let r=t;return Iv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Md=[k.CAGE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.CAGE_TOOL,k.LOCAL_ELEMENT],tr=[k.CAGE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.TYPABLE_TOOL,k.CAGE_TOOL,k.LOCAL_ELEMENT];function wv(t,e=5){return Yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function yv(t,e,n){return Yr(t,e,n)}const Pn={type:H.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},Nl={type:pe.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},nr={...Nl,valueUpdater:(t,e)=>yv(t,e,wv)},_O={inputOptions:nr,toolId:_.KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:er(),tags:[],categories:tr}},fO={inputOptions:nr,toolId:_.UNIQUE_DIGITS_CAGE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:er(),tags:[],categories:tr}},gO={inputOptions:nr,toolId:_.INVERTED_KILLER_CAGE,shape:Pn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:er(),tags:[],categories:tr}},hO={inputOptions:nr,toolId:_.SUM_CAGE,shape:Pn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:er(),tags:[],categories:tr}},vO={inputOptions:Nl,toolId:_.SUM_CAGE_LOOK_AND_SAY,shape:Pn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Ll(),tags:[],categories:Md}},pO={inputOptions:Nl,toolId:_.PARITY_BALANCE_CAGE,shape:Pn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Ll(),tags:[],categories:Md}},mO={inputOptions:nr,toolId:_.DIVISIBLE_KILLER_CAGE,shape:Pn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:er(),tags:[],categories:tr}},EO={inputOptions:nr,toolId:_.SPOTLIGHT_CAGE,shape:Pn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:er(),tags:[],categories:tr}},CO={inputOptions:Nl,toolId:_.PUTTERIA_CAGE,shape:Pn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Ll(),tags:[],categories:Md}},bO={inputOptions:nr,toolId:_.MULTISET_CAGE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:er(),tags:[],categories:tr}},IO={inputOptions:nr,toolId:_.VAULTED_CAGE,shape:Pn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:er(),tags:[],categories:tr}},wO={inputOptions:nr,toolId:_.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Pn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:er(),tags:[],categories:tr}},yO={inputOptions:nr,toolId:_.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Pn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:er(),tags:[],categories:tr}},OO={inputOptions:nr,toolId:_.DOUBLERS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:er(),tags:[],categories:tr}},AO={inputOptions:nr,toolId:_.NEGATORS_KILLER_CAGE,shape:Pn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:er(),tags:[],categories:tr}},xO={inputOptions:{type:pe.SELECTION},toolId:_.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[k.CELL_INPUT_TOOL]}},LO={inputOptions:{type:pe.SELECTION},toolId:_.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[k.CELL_INPUT_TOOL]}},NO={inputOptions:{type:pe.SELECTION},toolId:_.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[k.CELL_INPUT_TOOL]}},RO={inputOptions:{type:pe.SELECTION},toolId:_.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[k.CELL_INPUT_TOOL]}},SO={inputOptions:{type:pe.SELECTION},toolId:_.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[k.CELL_INPUT_TOOL]}},DO={inputOptions:{type:pe.SELECTION},toolId:_.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[k.CELL_INPUT_TOOL]}},TO={inputOptions:{type:pe.SELECTION},toolId:_.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[k.CELL_INPUT_TOOL]}},kO={inputOptions:{type:pe.PEN},toolId:_.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},MO={type:pe.CENTER_CORNER_OR_EDGE,targets:xt.CLOSEST},Gd=[k.LOCAL_CONSTRAINT,k.CENTER_CORNER_EDGE_CONSTRAINT,k.LOCAL_ELEMENT];_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,H.CIRCLE,kd();const GO={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:xt.CLOSEST,valueUpdater:(t,e)=>Yr(t,e,()=>!0),defaultValue:""},toolId:_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:kd(),tags:[],categories:Gd}},UO={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:xt.CORNER_OR_EDGE,valueUpdater:(t,e)=>Yr(t,e,()=>!0),defaultValue:""},toolId:_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:kd(),tags:[],categories:Gd}},FO={inputOptions:{type:pe.CLONE},toolId:_.CLONE_REGION,shape:{type:H.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[k.CLONE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.LOCAL_ELEMENT]}},Rl=[k.CORNER_CONSTRAINT,k.LOCAL_CONSTRAINT,k.CORNER_TOOL,k.LOCAL_ELEMENT],Ud=[k.CORNER_CONSTRAINT,k.LOCAL_CONSTRAINT,k.TYPABLE_TOOL,k.CORNER_TOOL,k.LOCAL_ELEMENT];function Ov(t,e=3){return Yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Av(t,e,n){return Yr(t,e,n)}function $O(t,e){function n(){return!0}return Yr(t,e,n)}const Fd={type:pe.CORNER,defaultValue:"",valueUpdater:(t,e)=>Av(t,e,Ov)},PO={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>$O(t,e),defaultValue:""},toolId:_.QUADRUPLE,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Wy(),categories:Ud}},BO={inputOptions:Fd,toolId:_.CORNER_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Ri(),categories:Ud}},HO={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:H.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Ri(),categories:Rl}},WO={inputOptions:Fd,toolId:_.CORNER_EVEN_COUNT,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Ri(),categories:Rl}};_.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,H.CIRCLE,Ri();const zO={inputOptions:{type:pe.CORNER,defaultValue:"X"},toolId:_.PRODUCT_SQUARE,shape:{type:H.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Ri(),categories:Rl}},YO={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:_.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Ri(),categories:Rl}},Sl=[k.EDGE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.EDGE_TOOL,k.LOCAL_ELEMENT],rr=[k.EDGE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.TYPABLE_TOOL,k.EDGE_TOOL,k.LOCAL_ELEMENT],Gs=.15,xv=.02,jo={type:H.CIRCLE,r:{editable:!0,value:Gs,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:xv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},$d={type:H.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function jO(t,e=1){return Yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Lv(t,e=3){return Yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function KO(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Pd(t,e,n){return Yr(t,e,n)}function VO(t,e){return t===void 0?"V":KO(e)?e.toUpperCase():t}function XO(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Nv(t,e){return t===void 0?"<":XO(e)?e:t}const Us={type:pe.EDGE,valueUpdater:(t,e)=>Pd(t,e,Lv)},qO={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Pd(t,e,jO)},toolId:_.RATIO,negative_constraints:[{toolId:_.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:H.CIRCLE,r:{editable:!1,value:Gs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:rr}},ZO={inputOptions:Us,toolId:_.DIFFERENCE,negative_constraints:[{toolId:_.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:jo,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:rr}},QO={inputOptions:Us,toolId:_.EDGE_SUM,shape:{...jo,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:rr}},JO={inputOptions:{type:pe.EDGE,defaultValue:"V",valueUpdater:VO},toolId:_.XV,negative_constraints:[{toolId:_.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:_.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:_.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:H.TEXT_ONLY,r:{editable:!1,value:Gs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:rr}},eA={inputOptions:{type:pe.EDGE,valueUpdater:Nv,defaultValue:"<"},toolId:_.EDGE_INEQUALITY,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:rr}},tA={inputOptions:Us,toolId:_.EDGE_PRODUCT,shape:{...jo,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:rr}},nA={inputOptions:Us,toolId:_.EDGE_MODULO,shape:{...jo,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:rr}},rA={inputOptions:Us,toolId:_.EDGE_FACTOR,shape:{...jo,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:rr}},oA={inputOptions:{type:pe.EDGE},toolId:_.XY_DIFFERENCES,negative_constraints:[{toolId:_.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:H.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Gs},strokeWidth:{editable:!1,value:xv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:rr}},iA={inputOptions:{type:pe.EDGE},toolId:_.YIN_YANG_WHITE_KROPKI,shape:jo,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:rr}},sA={inputOptions:{type:pe.EDGE},toolId:_.YIN_YANG_KROPKI,negative_constraints:[{toolId:_.ALL_YIN_YANG_KROPKI_GIVEN,description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given."}],shape:{type:H.CIRCLE,r:{editable:!1,value:Gs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:rr}},aA={inputOptions:{type:pe.EDGE},toolId:_.FILLOMINO_REGION_BORDER,shape:$d,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Sl}},lA={inputOptions:{type:pe.EDGE},toolId:_.UNKNOWN_REGION_BORDER,shape:$d,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Sl}},cA={inputOptions:{type:pe.EDGE},toolId:_.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:$d,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Sl}},uA={inputOptions:{type:pe.EDGE},toolId:_.EDGE_CAVE_ONE_OF_EACH,shape:jo,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Sl}},dA={inputOptions:{type:pe.EDGE,valueUpdater:Nv,defaultValue:"<"},toolId:_.ONE_WAY_DOOR,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:rr}},Di=[k.OUTSIDE_CORNER_CONSTRAINT,k.LOCAL_CONSTRAINT,k.TYPABLE_TOOL,k.OUTSIDE_CORNER_TOOL,k.OUTSIDE_DIRECTION_TOOL,k.LOCAL_ELEMENT];function _A(t,e=5){return Yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Rv(t,e,n){return Yr(t,e,n)}const Ti={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},ki={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Rv(t,e,_A),defaultValue:"",cornerOrEdge:xt.CORNER},fA={inputOptions:ki,toolId:_.LITTLE_KILLER_SUM,shape:Ti,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Ni(),tags:[],categories:Di}},gA={inputOptions:ki,toolId:_.LITTLE_KILLER_PRODUCT,shape:Ti,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Ni(),tags:[],categories:Di}},hA={inputOptions:ki,toolId:_.LITTLE_KILLER_LOOK_AND_SAY,shape:Ti,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Ni(),tags:[],categories:Di}},vA={inputOptions:ki,toolId:_.X_OMIT_LITTLE_KILLER_SUM,shape:Ti,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Ni(),tags:[],categories:Di}},pA={inputOptions:ki,toolId:_.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:Ti,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Ni(),tags:[],categories:Di}},mA={inputOptions:ki,toolId:_.NEGATORS_LITTLE_KILLER_SUM,shape:Ti,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Ni(),tags:[],categories:Di}},ln=[k.OUTSIDE_EDGE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.TYPABLE_TOOL,k.OUTSIDE_EDGE_TOOL,k.OUTSIDE_DIRECTION_TOOL,k.LOCAL_ELEMENT];function Mi(t,e=5){return Yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Fs(t,e,n){return Yr(t,e,n)}const cn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Bn={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Mi),defaultValue:"",cornerOrEdge:xt.EDGE},EA={inputOptions:Bn,toolId:_.SANDWICH_SUM,shape:cn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:an(),tags:[],categories:ln}},CA={inputOptions:{...Bn,cornerOrEdge:xt.CORNER_OR_EDGE},toolId:_.MYSTERY_SANDWICH_SUM,shape:cn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:an(),tags:[],categories:ln}},bA={inputOptions:Bn,toolId:_.SANDWICH_SUM_XOR_X_SUM,shape:cn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:an(),tags:[],categories:ln}},IA={inputOptions:Bn,toolId:_.X_SUM,shape:cn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:an(),tags:[],categories:ln}},wA={inputOptions:Bn,toolId:_.SHORTSIGHTED_X_SUM,shape:cn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:an(),tags:[],categories:ln}},yA={inputOptions:Bn,toolId:_.SHIFTED_X_SUM,shape:cn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:an(),tags:[],categories:ln}},OA={inputOptions:Bn,toolId:_.BROKEN_X_SUM,shape:cn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:an(),tags:[],categories:ln}},AA={inputOptions:Bn,toolId:_.X_SUM_SKYSCRAPERS,shape:cn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:an(),tags:[],categories:ln}},xA={inputOptions:Bn,toolId:_.BATTLEFIELD,shape:cn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:an(),tags:[],categories:ln}},LA={inputOptions:Bn,toolId:_.SKYSCRAPERS,shape:cn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:an(),tags:[],categories:ln}},NA={inputOptions:Bn,toolId:_.X_INDEX,shape:cn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:an(),tags:[],categories:ln}},RA={inputOptions:Bn,toolId:_.RISING_STREAK,shape:cn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:an(),tags:[],categories:ln}},SA={inputOptions:Bn,toolId:_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:cn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:an(),tags:[],categories:ln}},DA={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Mi),defaultValue:"",cornerOrEdge:xt.CORNER_OR_EDGE},toolId:_.OUTSIDE_CONSECUTIVE_SUM,shape:cn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:an(),tags:[],categories:ln}},TA={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Mi),defaultValue:"",cornerOrEdge:xt.CORNER_OR_EDGE},toolId:_.LOOPWICHES,shape:cn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:an(),tags:[],categories:ln}},kA={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Mi),defaultValue:"",cornerOrEdge:xt.CORNER_OR_EDGE},toolId:_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:cn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:an(),tags:[],categories:ln}},MA={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fs(t,e,Mi),defaultValue:"",cornerOrEdge:xt.EDGE},toolId:_.PENTOMINO_BORDER_COUNT,shape:cn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:an(),tags:[],categories:ln}},GA={inputOptions:{type:pe.SINGLE_CELL},toolId:_.COSMETIC_CELL_CENTER_SHAPE,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.LOCAL_ELEMENT]}},UA={inputOptions:{type:pe.SINGLE_CELL_ARROW,cornerOrEdge:xt.CORNER_OR_EDGE},toolId:_.COSMETIC_CELL_ARROW,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.LOCAL_ELEMENT]}},FA={inputOptions:{type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:xt.CORNER_OR_EDGE},toolId:_.COSMETIC_CELL_MULTI_ARROW,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.LOCAL_ELEMENT]}},$A={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Pd(t,e,Lv),defaultValue:""},toolId:_.COSMETIC_EDGE,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.TYPABLE_TOOL,k.LOCAL_ELEMENT]}},PA={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>Av(t,e,Ov),defaultValue:""},toolId:_.COSMETIC_CORNER,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.TYPABLE_TOOL,k.LOCAL_ELEMENT]}},BA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:_.COSMETIC_LINE,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.LOCAL_ELEMENT]}},HA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:_.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.LOCAL_ELEMENT]}},WA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:_.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.LOCAL_ELEMENT]}},zA={inputOptions:{type:pe.CAGE,valueUpdater:(t,e)=>yv(t,e,wv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:_.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.TYPABLE_TOOL,k.LOCAL_ELEMENT]}},YA={inputOptions:{type:pe.ARROW},toolId:_.COSMETIC_ARROW,shape:{type:H.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.LOCAL_CONSTRAINT,k.LOCAL_ELEMENT]}},jA={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Rv(t,e,Mi),defaultValue:"",cornerOrEdge:xt.CORNER_OR_EDGE},toolId:_.COSMETIC_OUTSIDE_DIRECTION,shape:{type:H.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[k.COSMETIC_TOOL,k.TYPABLE_TOOL,k.OUTSIDE_DIRECTION_TOOL,k.LOCAL_ELEMENT]}},Gi=[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT,k.DIAGONAL_CONSTRAINT],KA={toolId:_.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},VA={toolId:_.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},XA={toolId:_.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},qA={toolId:_.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},ZA={toolId:_.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},QA={toolId:_.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},JA={toolId:_.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},ex={toolId:_.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},tx={toolId:_.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},nx={toolId:_.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},rx={toolId:_.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},ox={toolId:_.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},ix={toolId:_.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},sx={toolId:_.NEGATIVE_DIAGONAL,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Gi}},ax={toolId:_.POSITIVE_DIAGONAL,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Gi}},lx={toolId:_.NEGATIVE_ANTIDIAGONAL,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Gi}},cx={toolId:_.POSITIVE_ANTIDIAGONAL,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Gi}},ux={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Gi}},dx={toolId:_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Gi}},_x={toolId:_.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},fx={toolId:_.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},gx={toolId:_.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}},hx={toolId:_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.SIMPLE_GLOBAL_CONSTRAINT]}};_.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,k.GLOBAL_CONSTRAINT,k.NEGATIVE_CONSTRAINT;_.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,k.GLOBAL_CONSTRAINT,k.NEGATIVE_CONSTRAINT;const vx={toolId:_.NURIMISAKI_PATH_GERMAN_WHISPERS,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.NEGATIVE_CONSTRAINT]}},px={toolId:_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.NEGATIVE_CONSTRAINT]}},mx={toolId:_.CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Ex={toolId:_.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Cx={toolId:_.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},bx={toolId:_.YIN_YANG,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Ix={toolId:_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},wx={toolId:_.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},yx={toolId:_.NURIMISAKI,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Ox={toolId:_.NURIKABE,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Ax={toolId:_.NURIKABE_NO_REPEATS_IN_ISLANDS,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},xx={toolId:_.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Lx={toolId:_.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Nx={toolId:_.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Rx={toolId:_.SHIKAKU,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Sx={toolId:_.SHIKAKU_NO_REPEATS_IN_REGION,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Dx={toolId:_.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},Tx={toolId:_.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},kx={toolId:_.CELL_CENTER_LOOP_NO_TOUCHING,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_LOOP_CONSTRAINTS]}},Mx={toolId:_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_LOOP_CONSTRAINTS]}},Gx={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_LOOP_CONSTRAINTS]}},Ux={toolId:_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_LOOP_CONSTRAINTS]}},Fx={toolId:_.NOT_LOOP_SIZED_REGIONS,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_LOOP_CONSTRAINTS]}},$x={toolId:_.MODULAR_LOOP,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_LOOP_CONSTRAINTS]}},Px={toolId:_.MAZE_DIRECTED_PATH,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Bx={toolId:_.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Hx={toolId:_.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Wx={toolId:_.DIRECTED_PATH_IS_PARITY_LINE,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},zx={toolId:_.DIRECTED_PATH_IS_REGION_SUM_LINE,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Yx={toolId:_.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},jx={toolId:_.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Kx={toolId:_.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Vx={toolId:_.CAVE,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CAVE_CONSTRAINTS]}},Xx={toolId:_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},qx={toolId:_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CAVE_CONSTRAINTS]}},Zx={toolId:_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CAVE_CONSTRAINTS]}},Qx={toolId:_.CAVE_WALLS_ARE_EVEN,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CAVE_CONSTRAINTS]}},Jx={toolId:_.CAVE_CELLS_ARE_ODD,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CAVE_CONSTRAINTS]}},eL={toolId:_.CAVE_LITS,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CAVE_CONSTRAINTS]}},tL={toolId:_.RENBAN_CAVES,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CAVE_CONSTRAINTS]}},nL={toolId:_.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},rL={toolId:_.GALAXIES,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_GALAXY_CONSTRAINTS]}},oL={toolId:_.EVERY_CELL_BELONGS_TO_A_GALAXY,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_GALAXY_CONSTRAINTS]}},iL={toolId:_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_GALAXY_CONSTRAINTS]}},sL={toolId:_.TWO_SYMMETRIC_GALAXIES,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_GALAXY_CONSTRAINTS]}},aL={toolId:_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_GALAXY_CONSTRAINTS]}},lL={toolId:_.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},cL={toolId:_.TILLING_NO_EMPTY_CELLS,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},uL={toolId:_.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.UNDETERMINED_REGIONS_CONSTRAINT]}},dL={toolId:_.CONNECT_FOUR,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},_L={toolId:_.CONNECT_FOUR_DRAW,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},fL={toolId:_.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},gL={toolId:_.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Be=[k.LINE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.LINE_TOOL,k.LOCAL_ELEMENT],jr=[k.LINE_CONSTRAINT,k.LOCAL_CONSTRAINT,k.DOUBLE_ENDED_LINE_CONSTRAINT,k.LINE_TOOL,k.LOCAL_ELEMENT],$s={description:"",usage:Me(),tags:[],categories:Be},St={type:pe.LINE,allowSelfIntersection:!0},Qt={type:pe.LINE,allowSelfIntersection:!1},hL={inputOptions:Qt,toolId:_.THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a thermometer must increase from the bulb end."}},vL={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:_.CUSTOM_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},pL={inputOptions:Qt,toolId:_.FUZZY_THERMOMETER,shape:{type:H.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},mL={inputOptions:Qt,toolId:_.SLOW_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},EL={inputOptions:Qt,toolId:_.ROW_CYCLE_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...$s,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},CL={inputOptions:St,toolId:_.PALINDROME,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Me(),tags:[],categories:Be}},bL={inputOptions:St,toolId:_.RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Me(),tags:[],categories:Be}},IL={inputOptions:St,toolId:_.DOUBLE_RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Me(),tags:[],categories:Be}},wL={inputOptions:St,toolId:_.RENRENBANBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Me(),tags:[],categories:Be}},yL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.N_CONSECUTIVE_RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Be}},OL={inputOptions:St,toolId:_.NABNER_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Me(),tags:[],categories:Be}},AL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.WHISPERS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Me(),tags:[],categories:Be}},xL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:_.DUTCH_WHISPERS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Me(),tags:[],categories:Be}},LL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Me(),tags:[],categories:Be}},NL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.RENBAN_OR_WHISPERS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Me(),tags:[],categories:Be}},RL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.RENBAN_OR_NABNER_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Me(),tags:[],categories:Be}},SL={inputOptions:Qt,toolId:_.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Me(),tags:[],categories:Be}},DL={inputOptions:Qt,toolId:_.INDEX_LINE,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Me(),tags:[],categories:Be}},TL={inputOptions:St,toolId:_.UNIQUE_VALUES_LINE,shape:{type:H.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Me(),tags:[],categories:Be}},kL={inputOptions:St,toolId:_.REGION_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Me(),tags:[],categories:Be}},ML={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:_.SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Me(),tags:[],categories:Be}},GL={inputOptions:Qt,toolId:_.ARITHMETIC_SEQUENCE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Me(),tags:[],categories:Be}},UL={inputOptions:St,toolId:_.SAME_PARITY_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Me(),tags:[],categories:Be}},FL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.MODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Me(),tags:[],categories:Be}},$L={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.UNIMODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Me(),tags:[],categories:Be}},PL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.MODULAR_OR_UNIMODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Me(),tags:[],categories:Be}},BL={inputOptions:St,toolId:_.ODD_EVEN_OSCILLATOR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Me(),tags:[],categories:Be}},HL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.HIGH_LOW_OSCILLATOR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Me(),tags:[],categories:Be}},WL={inputOptions:St,toolId:_.ENTROPIC_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Me(),tags:[],categories:Be}},zL={inputOptions:St,toolId:_.ENTROPIC_OR_MODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Me(),tags:[],categories:Be}},YL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.INDEXING_COLUMN_IS_X_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Me(),tags:[],categories:Be}},jL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.INDEXING_ROW_IS_X_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Me(),tags:[],categories:Be}},KL={inputOptions:Qt,toolId:_.REPEATED_DIGITS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Me(),tags:[],categories:Be}},VL={inputOptions:Qt,toolId:_.SUPERFUZZY_ARROW,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Me(),tags:[],categories:Be}},XL={inputOptions:St,toolId:_.AMBIGUOUS_ARROW,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Me(),tags:[],categories:Be}},qL={inputOptions:Qt,toolId:_.HEADLESS_ARROW,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Me(),tags:[],categories:Be}},ZL={inputOptions:St,toolId:_.XV_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Me(),tags:[],categories:Be}},QL={inputOptions:Qt,toolId:_.ROW_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Me(),tags:[],categories:Be}},JL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:_.AT_LEAST_X_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Me(),tags:[],categories:Be}},eN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Me(),tags:[],categories:Be}};_.ADJACENT_CELL_SUM_IS_PRIME_LINE,H.LINE,Me();const tN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:_.PRODUCT_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Me(),tags:[],categories:Be}},nN={inputOptions:St,toolId:_.ADJACENT_MULTIPLES_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Me(),tags:[],categories:Be}},rN={inputOptions:St,toolId:_.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Me(),tags:[],categories:Be}},oN={inputOptions:Qt,toolId:_.LOOK_AND_SAY_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Me(),tags:[],categories:Be}},iN={inputOptions:Qt,toolId:_.ZIPPER_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Me(),tags:[],categories:Be}},sN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:_.SEGMENTED_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Me(),tags:[],categories:Be}},aN={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:_.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Me(),tags:[],categories:Be}},lN={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:_.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Me(),tags:[],categories:Be}};_.THERMO_OR_AVERAGE_ARROW,H.THERMO_WITH_CIRCLE,Me();const cN={inputOptions:Qt,toolId:_.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:H.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Me(),tags:[],categories:Be}},uN={inputOptions:Qt,toolId:_.PEAPODS,shape:{type:H.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Me(),tags:[],categories:Be}},dN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:_.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Me(),tags:[],categories:Be}},_N={inputOptions:St,toolId:_.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Me(),tags:[],categories:Be}},fN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:_.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Me(),tags:[],categories:Be}},gN={inputOptions:St,toolId:_.YIN_YANG_REGION_SUM_LINE,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Me(),tags:[],categories:Be}},hN={inputOptions:Qt,toolId:_.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Me(),tags:[],categories:Be}},vN={inputOptions:Qt,toolId:_.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Me(),tags:[],categories:Be}},pN={inputOptions:St,toolId:_.BETWEEN_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Me(),tags:[],categories:jr}},mN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:_.LOCKOUT_LINE,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Me(),tags:[],categories:jr}},EN={inputOptions:St,toolId:_.TIGHTROPE_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Me(),tags:[],categories:jr}},CN={inputOptions:St,toolId:_.PARITY_COUNT_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Me(),tags:[],categories:jr}},bN={inputOptions:St,toolId:_.DOUBLE_ARROW_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Me(),categories:jr}},IN={inputOptions:St,toolId:_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Me(),tags:[],categories:jr}},wN={inputOptions:St,toolId:_.SPLIT_PEAS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Me(),tags:[],categories:jr}},yN={inputOptions:Qt,toolId:_.DOUBLERS_THERMOMETER,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Me(),tags:[],categories:Be}},ON={inputOptions:St,toolId:_.DOUBLERS_BETWEEN_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Me(),tags:[],categories:jr}},AN={inputOptions:St,toolId:_.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Me(),tags:[],categories:jr}},je=[k.SINGLE_CELL_CONSTRAINT,k.LOCAL_CONSTRAINT,k.SINGLE_CELL_SHAPE_TOOL,k.LOCAL_ELEMENT],Ko=[k.SINGLE_CELL_CONSTRAINT,k.LOCAL_CONSTRAINT,k.SINGLE_CELL_COLOR_TOOL,k.LOCAL_ELEMENT],Sv=[k.SINGLE_CELL_ARROW_TOOL,k.SINGLE_CELL_CONSTRAINT,k.LOCAL_CONSTRAINT,k.LOCAL_ELEMENT],Dl={type:H.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Vo={type:H.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Tl(t,e=3){return Yo(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function xN(t){return t===""||t==="1"||t==="2"||t==="3"}function Ps(t,e,n){return Yr(t,e,n)}const Je={type:pe.SINGLE_CELL},po={type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Tl),defaultValue:""},Dv={type:pe.SINGLE_CELL_ARROW,cornerOrEdge:xt.CORNER_OR_EDGE},LN={inputOptions:Je,toolId:_.ODD,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:je}},NN={inputOptions:Je,toolId:_.EVEN,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:je}},RN={inputOptions:Je,toolId:_.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:Ko}},SN={inputOptions:Je,toolId:_.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:Ko}},DN={inputOptions:Je,toolId:_.ODD_MINESWEEPER,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},TN={inputOptions:Je,toolId:_.EVEN_MINESWEEPER,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je}},kN={inputOptions:Je,toolId:_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:je}},MN={inputOptions:Je,toolId:_.WATCHTOWER,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},GN={inputOptions:Je,toolId:_.NOT_WATCHTOWER,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je}},UN={inputOptions:po,toolId:_.FARSIGHT,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:je}},FN={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Tl),defaultValue:"9"},toolId:_.RADAR,negative_constraints:[{toolId:_.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:je}},$N={inputOptions:Je,toolId:_.ORTHOGONAL_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:je}},PN={inputOptions:Je,toolId:_.INDEXING_COLUMN,negative_constraints:[{toolId:_.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Ko}},BN={inputOptions:Je,toolId:_.INDEXING_ROW,negative_constraints:[{toolId:_.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Ko}},HN={inputOptions:Je,toolId:_.LOW_DIGIT,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Ko}},WN={inputOptions:Je,toolId:_.HIGH_DIGIT,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Ko}},zN={inputOptions:Je,toolId:_.FRIENDLY_CELL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Ko}},YN={inputOptions:Je,toolId:_.DIAGONALLY_ADJACENT_SUM,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:je}},jN={inputOptions:Je,toolId:_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:je}},KN={inputOptions:Je,toolId:_.SANDWICH_ROW_COL_COUNT,shape:Vo,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:je}},VN={inputOptions:Je,toolId:_.COUNTING_CIRCLES,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:je}},XN={inputOptions:Je,toolId:_.REVERSE_COUNTING_CIRCLES,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:je}},qN={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,xN),defaultValue:""},toolId:_.COLORED_COUNTING_CIRCLES,shape:Vo,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:je}},ZN={inputOptions:Je,toolId:_.UNIQUE_CELLS,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:je}},QN={inputOptions:Je,toolId:_.SEEN_EVEN_COUNT,shape:Dl,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},JN={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Tl),defaultValue:"5"},toolId:_.CELL_KNIGHT_WHISPERS,shape:Vo,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:je}},eR={inputOptions:Je,toolId:_.SEEN_ODD_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je}},tR={inputOptions:Je,toolId:_.YIN_YANG_MINESWEEPER,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:je}},nR={inputOptions:Je,toolId:_.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},rR={inputOptions:Je,toolId:_.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je}},oR={inputOptions:Je,toolId:_.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:Dl,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:je}},iR={inputOptions:Je,toolId:_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:je}},sR={inputOptions:Je,toolId:_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:H.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:je}},aR={inputOptions:Je,toolId:_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:je}},lR={inputOptions:Je,toolId:_.SEEN_REGION_BORDERS_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:je}},cR={inputOptions:Je,toolId:_.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:je}},uR={inputOptions:Je,toolId:_.SASHIGANE_BEND_REGION_COUNT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:je}},dR={inputOptions:Dv,toolId:_.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Sv}},_R={inputOptions:Dv,toolId:_.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Sv}},fR={inputOptions:po,toolId:_.SASHIGANE_REGION_SUM,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:je}},gR={inputOptions:Je,toolId:_.CELL_ON_THE_LOOP,shape:Dl,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:je}},hR={inputOptions:Je,toolId:_.CELL_NOT_ON_THE_LOOP,shape:Vo,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:je}},vR={inputOptions:Je,toolId:_.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:je}},pR={inputOptions:po,toolId:_.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:je}},mR={inputOptions:Je,toolId:_.CAVE_CLUE,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:je}},ER={inputOptions:po,toolId:_.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:je}},CR={inputOptions:po,toolId:_.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:je}},bR={inputOptions:po,toolId:_.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:Vo,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:je}},IR={inputOptions:Je,toolId:_.DIRECTED_PATH_START,shape:{type:H.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:je}},wR={inputOptions:Je,toolId:_.DIRECTED_PATH_END,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:je}},yR={inputOptions:po,toolId:_.TELEPORT,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:je}},OR={inputOptions:po,toolId:_.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:je}},AR={inputOptions:Je,toolId:_.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...Dl,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:je}},xR={inputOptions:Je,toolId:_.NURIKABE_ISLAND_SIZE_CELL,shape:Vo,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:je}},LR={inputOptions:Je,toolId:_.CONNECT_FOUR_YELLOW,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:je}},NR={inputOptions:Je,toolId:_.CONENCT_FOUR_RED,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:je}},RR={inputOptions:Je,toolId:_.SHIKAKU_REGION_SIZE,shape:Vo,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:je}},SR={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>Ps(t,e,Tl),defaultValue:"?"},toolId:_.SHIKAKU_REGION_SUM,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:je}},DR={inputOptions:Je,toolId:_.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:je}},hr=[k.SINGLE_CELL_CONSTRAINT,k.LOCAL_CONSTRAINT,k.SINGLE_CELL_MULTIARROW_TOOL,k.LOCAL_ELEMENT],Kr={type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},vr={type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:xt.CORNER_OR_EDGE},TR={inputOptions:vr,toolId:_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:Kr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:hr}},kR={inputOptions:vr,toolId:_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:Kr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:hr}},MR={inputOptions:vr,toolId:_.LOOP_CELL_COUNT_ARROWS,shape:Kr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:hr}},GR={inputOptions:vr,toolId:_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:Kr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:hr}},UR={inputOptions:vr,toolId:_.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:Kr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:hr}},FR={inputOptions:vr,toolId:_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:Kr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:hr}},$R={inputOptions:vr,toolId:_.COLD_ARROWS,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:hr}},PR={inputOptions:vr,toolId:_.HOT_ARROWS,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:hr}},BR={inputOptions:vr,toolId:_.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:Kr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:hr}},HR={inputOptions:vr,toolId:_.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:Kr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:hr}},WR={inputOptions:vr,toolId:_.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:Kr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:hr}},zR={toolId:_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[k.LOCAL_CONSTRAINT,k.VALUED_GLOBAL_CONSTRAINT]}},YR={toolId:_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[k.LOCAL_CONSTRAINT,k.VALUED_GLOBAL_CONSTRAINT]}},jR={toolId:_.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[k.LOCAL_CONSTRAINT,k.VALUED_GLOBAL_CONSTRAINT]}},KR={toolId:_.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[k.LOCAL_CONSTRAINT,k.VALUED_GLOBAL_CONSTRAINT]}};_.VAMPIRE_AND_PREY,k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT;_.MARKED_CELLS,k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT;const VR={toolId:_.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT]}},XR={toolId:_.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT]}};_.HOT_CELLS,k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT;_.COLD_CELLS,k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT;_.DECREMENT_FOUNTAIN,k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT;const qR={toolId:_.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT]}},ZR={toolId:_.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[k.GLOBAL_CONSTRAINT,k.VALUE_MODIFIER_CONSTRAINT]}},QR=[k.CORNER_LINE_CONSTRAINT,k.CORNER_LINE_TOOL,k.LOCAL_CONSTRAINT,k.LOCAL_ELEMENT],JR={inputOptions:{type:pe.CORNER_LINE},toolId:_.MAZE_WALL,shape:{type:H.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:QR}},Pt={[_.GIVEN]:xO,[_.DIGIT]:LO,[_.REGIONS]:NO,[_.OUTSIDE]:TO,[_.CORNER_PM]:RO,[_.CENTER_PM]:SO,[_.HIGHLIGHTS]:DO,[_.PEN_TOOL]:kO,[_.SUDOKU_RULES_DO_NOT_APPLY]:KA,[_.LEAVE_EMPTY_CELLS_EMPTY]:VA,[_.LITS]:ZA,[_.HEXED_SUDOKU]:XA,[_.FILLOMINO]:qA,[_.ANTIKNIGHT]:QA,[_.ANTI_LONG_KNIGHT]:ex,[_.ANTIKING]:tx,[_.ANTI_GIRAFFE]:JA,[_.DISJOINT_GROUPS]:nx,[_.TANGO]:rx,[_.NONCONSECUTIVE]:ox,[_.NONRATIO]:ix,[_.ANTI_ENTROPY]:fx,[_.GLOBAL_INDEXING_COLUMN]:gx,[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:hx,[_.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:_x,[_.NEGATIVE_DIAGONAL]:sx,[_.POSITIVE_DIAGONAL]:ax,[_.NEGATIVE_ANTIDIAGONAL]:lx,[_.POSITIVE_ANTIDIAGONAL]:cx,[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:ux,[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:dx,[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:px,[_.CAVE_CELLS_ARE_ODD]:Jx,[_.CAVE_WALLS_ARE_EVEN]:Qx,[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:qx,[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:Zx,[_.DOUBLERS]:VR,[_.NEGATORS]:XR,[_.NEXUS]:qR,[_.INDEXER_CELLS]:ZR,[_.CHAOS_CONSTRUCTION]:mx,[_.NUMBERED_CHAOS_CONSTRUCTION]:Ex,[_.CHAOS_CONSTRUCTION_SUGURU]:Cx,[_.YIN_YANG]:bx,[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Ix,[_.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:wx,[_.NURIMISAKI]:yx,[_.NURIKABE]:Ox,[_.NURIKABE_NO_REPEATS_IN_ISLANDS]:Ax,[_.TWO_CONTIGUOUS_REGIONS]:xx,[_.SASHIGANE]:Lx,[_.NORINORI]:Nx,[_.SHIKAKU]:Rx,[_.SHIKAKU_NO_REPEATS_IN_REGION]:Sx,[_.GOLDILOCKS_ZONE]:Tx,[_.CELL_CENTER_LOOP_NO_TOUCHING]:kx,[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Mx,[_.NOT_LOOP_SIZED_REGIONS]:Fx,[_.MODULAR_LOOP]:$x,[_.CAVE]:Vx,[_.CAVE_LITS]:eL,[_.RENBAN_CAVES]:tL,[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:Xx,[_.NURIMISAKI_PATH_GERMAN_WHISPERS]:vx,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:Gx,[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:Ux,[_.GALAXIES]:rL,[_.TWO_SYMMETRIC_GALAXIES]:sL,[_.EVERY_CELL_BELONGS_TO_A_GALAXY]:oL,[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:iL,[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:aL,[_.PENTOMINO_TILLING]:lL,[_.TILLING_NO_EMPTY_CELLS]:cL,[_.LITS_BLACK_WHITE_STAR_BATTLE]:uL,[_.NORINORI_STAR_BATTLE]:Dx,[_.MAZE_DIRECTED_PATH]:Px,[_.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:Bx,[_.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:Yx,[_.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:Hx,[_.DIRECTED_PATH_IS_REGION_SUM_LINE]:zx,[_.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:jx,[_.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:Kx,[_.DIRECTED_PATH_IS_PARITY_LINE]:Wx,[_.CONNECT_FOUR]:dL,[_.CONNECT_FOUR_DRAW]:_L,[_.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:fL,[_.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:gL,[_.FOG_LIGHTS]:DR,[_.ODD]:LN,[_.EVEN]:NN,[_.MINIMUM]:RN,[_.MAXIMUM]:SN,[_.ODD_MINESWEEPER]:DN,[_.EVEN_MINESWEEPER]:TN,[_.WATCHTOWER]:MN,[_.NOT_WATCHTOWER]:GN,[_.FARSIGHT]:UN,[_.RADAR]:FN,[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:kN,[_.ORTHOGONAL_SUM]:$N,[_.DIAGONALLY_ADJACENT_SUM]:YN,[_.INDEXING_COLUMN]:PN,[_.INDEXING_ROW]:BN,[_.LOW_DIGIT]:HN,[_.HIGH_DIGIT]:WN,[_.FRIENDLY_CELL]:zN,[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:jN,[_.SANDWICH_ROW_COL_COUNT]:KN,[_.COUNTING_CIRCLES]:VN,[_.REVERSE_COUNTING_CIRCLES]:XN,[_.COLORED_COUNTING_CIRCLES]:qN,[_.UNIQUE_CELLS]:ZN,[_.SEEN_EVEN_COUNT]:QN,[_.SEEN_ODD_COUNT]:eR,[_.CELL_KNIGHT_WHISPERS]:JN,[_.YIN_YANG_MINESWEEPER]:tR,[_.YIN_YANG_SEEN_UNSHADED_CELLS]:nR,[_.YIN_YANG_SEEN_SHADED_CELLS]:rR,[_.YIN_YANG_SEEN_SAME_SHADE_CELLS]:oR,[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:iR,[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:sR,[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:aR,[_.SEEN_REGION_BORDERS_COUNT]:lR,[_.NURIMISAKI_UNSHADED_ENDPOINTS]:cR,[_.SASHIGANE_BEND_REGION_COUNT]:uR,[_.SASHIGANE_REGION_SUM]:fR,[_.CELL_ON_THE_LOOP]:gR,[_.CELL_NOT_ON_THE_LOOP]:hR,[_.COUNT_LOOP_NEIGHBOUR_CELLS]:vR,[_.CAVE_CLUE]:mR,[_.TWILIGHT_CAVE_FILLOMINO_CLUE]:pR,[_.YIN_YANG_FILLOMINO_PARITY]:nL,[_.SHIKAKU_REGION_SIZE]:RR,[_.SHIKAKU_REGION_SUM]:SR,[_.CHAOS_CONSTRUCTION_CHESS_SUMS]:ER,[_.CHAOS_CONSTRUCTION_ARROW_KNOTS]:CR,[_.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:bR,[_.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:OR,[_.DIRECTED_PATH_START]:IR,[_.DIRECTED_PATH_END]:wR,[_.TELEPORT]:yR,[_.CONNECT_FOUR_YELLOW]:LR,[_.CONENCT_FOUR_RED]:NR,[_.SASHIGANE_ARROW_POINTS_TO_BEND]:dR,[_.THERMO_SIGHTLINE_LOOP_ARROW]:_R,[_.HOT_ARROWS]:PR,[_.COLD_ARROWS]:$R,[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:FR,[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:GR,[_.YIN_YANG_COUNT_SHADED_CELLS]:UR,[_.LOOP_CELL_COUNT_ARROWS]:MR,[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:kR,[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:TR,[_.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:BR,[_.NURIKABE_SEEN_WATERWAY_CELLS]:AR,[_.NURIKABE_ISLAND_SIZE_CELL]:xR,[_.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:HR,[_.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:WR,[_.DIFFERENCE]:ZO,[_.RATIO]:qO,[_.XV]:JO,[_.EDGE_INEQUALITY]:eA,[_.EDGE_SUM]:QO,[_.EDGE_PRODUCT]:tA,[_.EDGE_MODULO]:nA,[_.EDGE_FACTOR]:rA,[_.XY_DIFFERENCES]:oA,[_.YIN_YANG_WHITE_KROPKI]:iA,[_.YIN_YANG_KROPKI]:sA,[_.FILLOMINO_REGION_BORDER]:aA,[_.UNKNOWN_REGION_BORDER]:lA,[_.CHAOS_CONSTRUCTION_SUGURU_BORDER]:cA,[_.EDGE_CAVE_ONE_OF_EACH]:uA,[_.ONE_WAY_DOOR]:dA,[_.QUADRUPLE]:PO,[_.CORNER_SUM]:BO,[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:HO,[_.CORNER_EVEN_COUNT]:WO,[_.PRODUCT_SQUARE]:zO,[_.EQUAL_DIAGONAL_DIFFERENCES]:YO,[_.THERMOMETER]:hL,[_.FUZZY_THERMOMETER]:pL,[_.SLOW_THERMOMETER]:mL,[_.CUSTOM_THERMOMETER]:vL,[_.ROW_CYCLE_THERMOMETER]:EL,[_.PALINDROME]:CL,[_.RENBAN_LINE]:bL,[_.DOUBLE_RENBAN_LINE]:IL,[_.RENRENBANBAN_LINE]:wL,[_.N_CONSECUTIVE_RENBAN_LINE]:yL,[_.NABNER_LINE]:OL,[_.WHISPERS_LINE]:AL,[_.DUTCH_WHISPERS]:xL,[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:LL,[_.RENBAN_OR_WHISPERS_LINE]:NL,[_.RENBAN_OR_NABNER_LINE]:RL,[_.OUT_OF_ORDER_CONSECUTIVE_LINE]:SL,[_.INDEX_LINE]:DL,[_.UNIQUE_VALUES_LINE]:TL,[_.REPEATED_DIGITS_LINE]:KL,[_.REGION_SUM_LINE]:kL,[_.SUM_LINE]:ML,[_.XV_LINE]:ZL,[_.ROW_SUM_LINE]:QL,[_.AT_LEAST_X_LINE]:JL,[_.SUPERFUZZY_ARROW]:VL,[_.AMBIGUOUS_ARROW]:XL,[_.HEADLESS_ARROW]:qL,[_.N_CONSECUTIVE_FUZZY_SUM_LINE]:eN,[_.PRODUCT_LINE]:tN,[_.ADJACENT_MULTIPLES_LINE]:nN,[_.ADJACENT_DIFFERENCES_COUNT_LINE]:rN,[_.LOOK_AND_SAY_LINE]:oN,[_.ARITHMETIC_SEQUENCE_LINE]:GL,[_.ZIPPER_LINE]:iN,[_.SEGMENTED_SUM_LINE]:sN,[_.SEGMENTED_SUM_AND_RENBAN_LINE]:aN,[_.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:lN,[_.SAME_PARITY_LINE]:UL,[_.MODULAR_LINE]:FL,[_.UNIMODULAR_LINE]:$L,[_.MODULAR_OR_UNIMODULAR_LINE]:PL,[_.ODD_EVEN_OSCILLATOR_LINE]:BL,[_.HIGH_LOW_OSCILLATOR_LINE]:HL,[_.ENTROPIC_LINE]:WL,[_.ENTROPIC_OR_MODULAR_LINE]:zL,[_.INDEXING_COLUMN_IS_X_LINE]:YL,[_.INDEXING_ROW_IS_X_LINE]:jL,[_.INDEXER_CELLS_REGION_SUBSET_LINE]:cN,[_.PEAPODS]:uN,[_.YIN_YANG_INDEXING_LINE_COLORING]:hN,[_.YIN_YANG_SHADED_WHISPERS_LINE]:dN,[_.YIN_YANG_UNSHADED_ENTROPIC_LINE]:_N,[_.YIN_YANG_UNSHADED_MODULAR_LINE]:fN,[_.YIN_YANG_REGION_SUM_LINE]:gN,[_.GOLDILOCKS_ZONE_REGION_SUM]:vN,[_.BETWEEN_LINE]:pN,[_.LOCKOUT_LINE]:mN,[_.PARITY_COUNT_LINE]:CN,[_.TIGHTROPE_LINE]:EN,[_.DOUBLE_ARROW_LINE]:bN,[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:IN,[_.SPLIT_PEAS]:wN,[_.DOUBLERS_THERMOMETER]:yN,[_.DOUBLERS_BETWEEN_LINE]:ON,[_.DOUBLERS_DOUBLE_ARROW_LINE]:AN,[_.ARROW]:Vy,[_.CHAOS_CONSTRUCTION_ARROW]:Zy,[_.AVERAGE_ARROW]:Xy,[_.BULBOUS_ARROW]:qy,[_.MAZE_WALL]:JR,[_.KILLER_CAGE]:_O,[_.UNIQUE_DIGITS_CAGE]:fO,[_.INVERTED_KILLER_CAGE]:gO,[_.SUM_CAGE]:hO,[_.SUM_CAGE_LOOK_AND_SAY]:vO,[_.PARITY_BALANCE_CAGE]:pO,[_.DIVISIBLE_KILLER_CAGE]:mO,[_.SPOTLIGHT_CAGE]:EO,[_.PUTTERIA_CAGE]:CO,[_.MULTISET_CAGE]:bO,[_.VAULTED_CAGE]:IO,[_.YIN_YANG_ANTITHESIS_KILLER_CAGE]:wO,[_.YIN_YANG_BREAKEVEN_KILLER_CAGE]:yO,[_.DOUBLERS_KILLER_CAGE]:OO,[_.NEGATORS_KILLER_CAGE]:AO,[_.CLONE_REGION]:FO,[_.SANDWICH_SUM]:EA,[_.MYSTERY_SANDWICH_SUM]:CA,[_.X_SUM]:IA,[_.SHORTSIGHTED_X_SUM]:wA,[_.SHIFTED_X_SUM]:yA,[_.BROKEN_X_SUM]:OA,[_.X_SUM_SKYSCRAPERS]:AA,[_.BATTLEFIELD]:xA,[_.SKYSCRAPERS]:LA,[_.X_INDEX]:NA,[_.SANDWICH_SUM_XOR_X_SUM]:bA,[_.RISING_STREAK]:RA,[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:SA,[_.OUTSIDE_CONSECUTIVE_SUM]:DA,[_.LOOPWICHES]:TA,[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:kA,[_.PENTOMINO_BORDER_COUNT]:MA,[_.LITTLE_KILLER_SUM]:fA,[_.LITTLE_KILLER_PRODUCT]:gA,[_.LITTLE_KILLER_LOOK_AND_SAY]:hA,[_.LITTLE_KILLER_REGION_SUM_PRODUCT]:pA,[_.X_OMIT_LITTLE_KILLER_SUM]:vA,[_.NEGATORS_LITTLE_KILLER_SUM]:mA,[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:GO,[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:UO,[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:zR,[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:YR,[_.FORBIDDEN_KNIGHT_SUM]:jR,[_.LITS_MAX_TETROMINO_SUM]:KR,[_.COSMETIC_CELL_CENTER_SHAPE]:GA,[_.COSMETIC_CELL_ARROW]:UA,[_.COSMETIC_CELL_MULTI_ARROW]:FA,[_.COSMETIC_EDGE]:$A,[_.COSMETIC_CORNER]:PA,[_.COSMETIC_LINE]:BA,[_.COSMETIC_LINE_WITH_CIRCLE_ENDS]:HA,[_.COSMETIC_LINE_WITH_POLYGON_ENDS]:WA,[_.COSMETIC_ARROW]:YA,[_.COSMETIC_CAGE]:zA,[_.COSMETIC_OUTSIDE_DIRECTION]:jA};class Po extends Map{constructor(){super()}setConstraint(e,n){return xy(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Po;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Po;if(!e)return n;for(const[r,o]of Object.entries(e)){const i=mv(r);i!==void 0&&Ev(i,Rd)&&typeof o=="boolean"&&o&&n.setConstraint(i,o)}return n}}var Pe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Pe||{});function Tv(t){if(!(t in Pe))throw Error(" not a key in DIRECTION");return Pe[t]}function qe(t,e){return t.r===e.r&&t.c===e.c}function kv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function eS(t,e){return{r:t.r*e,c:t.c*e}}function tS(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Bs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!qe(t,e)}function nS(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function ul(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Mt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function kl(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function rS(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function dl(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function oS(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const iS=new Map([[6,Pe.N],[2,Pe.S],[0,Pe.E],[4,Pe.W],[7,Pe.NE],[5,Pe.NW],[1,Pe.SE],[3,Pe.SW]]);function mi(t){t=t%8;const e=iS.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const sS=new Map([[Pe.N,{r:-1,c:0}],[Pe.S,{r:1,c:0}],[Pe.E,{r:0,c:1}],[Pe.W,{r:0,c:-1}],[Pe.NE,{r:-1,c:1}],[Pe.NW,{r:-1,c:-1}],[Pe.SE,{r:1,c:1}],[Pe.SW,{r:1,c:-1}]]);function Hs(t){const e=sS.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function ah(t,e){const n=Hs(e);return kv(t,n)}function _l(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Mv(t,e,n=!1){const r=t.some(i=>qe(i,e)),o=n?t.some(i=>Bs(i,e)):t.some(i=>nS(i,e));if(!r&&o){const i=[...t,e];return ul(i),i}return t}function ja(t){return`R${t.r+1}C${t.c+1}`}function Bd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ms={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var aS=ms.exports,lh;function lS(){return lh||(lh=1,function(t,e){(function(){var n,r="4.17.21",o=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,g="__lodash_placeholder__",v=1,h=2,m=4,E=1,I=2,b=1,w=2,x=4,T=8,M=16,$=32,W=64,F=128,K=256,te=512,se=30,Z="...",ne=800,ge=16,ie=1,ve=2,Ae=3,Le=1/0,ye=9007199254740991,Ce=17976931348623157e292,Xe=NaN,et=4294967295,wt=et-1,Tt=et>>>1,Kt=[["ary",F],["bind",b],["bindKey",w],["curry",T],["curryRight",M],["flip",te],["partial",$],["partialRight",W],["rearg",K]],Gt="[object Arguments]",Ft="[object Array]",tn="[object AsyncFunction]",Er="[object Boolean]",ar="[object Date]",Co="[object DOMException]",Rr="[object Error]",Sr="[object Function]",$e="[object GeneratorFunction]",Oe="[object Map]",Ge="[object Number]",Fe="[object Null]",Nt="[object Object]",na="[object Promise]",ra="[object Proxy]",bo="[object RegExp]",bn="[object Set]",Io="[object String]",wo="[object Symbol]",tc="[object Undefined]",yo="[object WeakMap]",nc="[object WeakSet]",Ke="[object ArrayBuffer]",In="[object DataView]",qo="[object Float32Array]",Zo="[object Float64Array]",Cr="[object Int8Array]",Vi="[object Int16Array]",Xi="[object Int32Array]",qi="[object Uint8Array]",Zi="[object Uint8ClampedArray]",rc="[object Uint16Array]",oc="[object Uint32Array]",_m=/\b__p \+= '';/g,fm=/\b(__p \+=) '' \+/g,gm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,I_=/&(?:amp|lt|gt|quot|#39);/g,w_=/[&<>"']/g,hm=RegExp(I_.source),vm=RegExp(w_.source),pm=/<%-([\s\S]+?)%>/g,mm=/<%([\s\S]+?)%>/g,y_=/<%=([\s\S]+?)%>/g,Em=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cm=/^\w*$/,bm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ic=/[\\^$.*+?()[\]{}|]/g,Im=RegExp(ic.source),sc=/^\s+/,wm=/\s/,ym=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Om=/\{\n\/\* \[wrapped with (.+)\] \*/,Am=/,? & /,xm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Lm=/[()=,{}\[\]\/\s]/,Nm=/\\(\\)?/g,Rm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,O_=/\w*$/,Sm=/^[-+]0x[0-9a-f]+$/i,Dm=/^0b[01]+$/i,Tm=/^\[object .+?Constructor\]$/,km=/^0o[0-7]+$/i,Mm=/^(?:0|[1-9]\d*)$/,Gm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,oa=/($^)/,Um=/['\n\r\u2028\u2029\\]/g,ia="\\ud800-\\udfff",Fm="\\u0300-\\u036f",$m="\\ufe20-\\ufe2f",Pm="\\u20d0-\\u20ff",A_=Fm+$m+Pm,x_="\\u2700-\\u27bf",L_="a-z\\xdf-\\xf6\\xf8-\\xff",Bm="\\xac\\xb1\\xd7\\xf7",Hm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Wm="\\u2000-\\u206f",zm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",N_="A-Z\\xc0-\\xd6\\xd8-\\xde",R_="\\ufe0e\\ufe0f",S_=Bm+Hm+Wm+zm,ac="['’]",Ym="["+ia+"]",D_="["+S_+"]",sa="["+A_+"]",T_="\\d+",jm="["+x_+"]",k_="["+L_+"]",M_="[^"+ia+S_+T_+x_+L_+N_+"]",lc="\\ud83c[\\udffb-\\udfff]",Km="(?:"+sa+"|"+lc+")",G_="[^"+ia+"]",cc="(?:\\ud83c[\\udde6-\\uddff]){2}",uc="[\\ud800-\\udbff][\\udc00-\\udfff]",Qo="["+N_+"]",U_="\\u200d",F_="(?:"+k_+"|"+M_+")",Vm="(?:"+Qo+"|"+M_+")",$_="(?:"+ac+"(?:d|ll|m|re|s|t|ve))?",P_="(?:"+ac+"(?:D|LL|M|RE|S|T|VE))?",B_=Km+"?",H_="["+R_+"]?",Xm="(?:"+U_+"(?:"+[G_,cc,uc].join("|")+")"+H_+B_+")*",qm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",W_=H_+B_+Xm,Qm="(?:"+[jm,cc,uc].join("|")+")"+W_,Jm="(?:"+[G_+sa+"?",sa,cc,uc,Ym].join("|")+")",e1=RegExp(ac,"g"),t1=RegExp(sa,"g"),dc=RegExp(lc+"(?="+lc+")|"+Jm+W_,"g"),n1=RegExp([Qo+"?"+k_+"+"+$_+"(?="+[D_,Qo,"$"].join("|")+")",Vm+"+"+P_+"(?="+[D_,Qo+F_,"$"].join("|")+")",Qo+"?"+F_+"+"+$_,Qo+"+"+P_,Zm,qm,T_,Qm].join("|"),"g"),r1=RegExp("["+U_+ia+A_+R_+"]"),o1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,i1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],s1=-1,kt={};kt[qo]=kt[Zo]=kt[Cr]=kt[Vi]=kt[Xi]=kt[qi]=kt[Zi]=kt[rc]=kt[oc]=!0,kt[Gt]=kt[Ft]=kt[Ke]=kt[Er]=kt[In]=kt[ar]=kt[Rr]=kt[Sr]=kt[Oe]=kt[Ge]=kt[Nt]=kt[bo]=kt[bn]=kt[Io]=kt[yo]=!1;var Rt={};Rt[Gt]=Rt[Ft]=Rt[Ke]=Rt[In]=Rt[Er]=Rt[ar]=Rt[qo]=Rt[Zo]=Rt[Cr]=Rt[Vi]=Rt[Xi]=Rt[Oe]=Rt[Ge]=Rt[Nt]=Rt[bo]=Rt[bn]=Rt[Io]=Rt[wo]=Rt[qi]=Rt[Zi]=Rt[rc]=Rt[oc]=!0,Rt[Rr]=Rt[Sr]=Rt[yo]=!1;var a1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},l1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},u1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},d1=parseFloat,_1=parseInt,z_=typeof Ka=="object"&&Ka&&Ka.Object===Object&&Ka,f1=typeof self=="object"&&self&&self.Object===Object&&self,nn=z_||f1||Function("return this")(),_c=e&&!e.nodeType&&e,Oo=_c&&!0&&t&&!t.nodeType&&t,Y_=Oo&&Oo.exports===_c,fc=Y_&&z_.process,Hn=function(){try{var V=Oo&&Oo.require&&Oo.require("util").types;return V||fc&&fc.binding&&fc.binding("util")}catch{}}(),j_=Hn&&Hn.isArrayBuffer,K_=Hn&&Hn.isDate,V_=Hn&&Hn.isMap,X_=Hn&&Hn.isRegExp,q_=Hn&&Hn.isSet,Z_=Hn&&Hn.isTypedArray;function Rn(V,ce,re){switch(re.length){case 0:return V.call(ce);case 1:return V.call(ce,re[0]);case 2:return V.call(ce,re[0],re[1]);case 3:return V.call(ce,re[0],re[1],re[2])}return V.apply(ce,re)}function g1(V,ce,re,Se){for(var tt=-1,pt=V==null?0:V.length;++tt<pt;){var Vt=V[tt];ce(Se,Vt,re(Vt),V)}return Se}function Wn(V,ce){for(var re=-1,Se=V==null?0:V.length;++re<Se&&ce(V[re],re,V)!==!1;);return V}function h1(V,ce){for(var re=V==null?0:V.length;re--&&ce(V[re],re,V)!==!1;);return V}function Q_(V,ce){for(var re=-1,Se=V==null?0:V.length;++re<Se;)if(!ce(V[re],re,V))return!1;return!0}function Jr(V,ce){for(var re=-1,Se=V==null?0:V.length,tt=0,pt=[];++re<Se;){var Vt=V[re];ce(Vt,re,V)&&(pt[tt++]=Vt)}return pt}function aa(V,ce){var re=V==null?0:V.length;return!!re&&Jo(V,ce,0)>-1}function gc(V,ce,re){for(var Se=-1,tt=V==null?0:V.length;++Se<tt;)if(re(ce,V[Se]))return!0;return!1}function Ut(V,ce){for(var re=-1,Se=V==null?0:V.length,tt=Array(Se);++re<Se;)tt[re]=ce(V[re],re,V);return tt}function eo(V,ce){for(var re=-1,Se=ce.length,tt=V.length;++re<Se;)V[tt+re]=ce[re];return V}function hc(V,ce,re,Se){var tt=-1,pt=V==null?0:V.length;for(Se&&pt&&(re=V[++tt]);++tt<pt;)re=ce(re,V[tt],tt,V);return re}function v1(V,ce,re,Se){var tt=V==null?0:V.length;for(Se&&tt&&(re=V[--tt]);tt--;)re=ce(re,V[tt],tt,V);return re}function vc(V,ce){for(var re=-1,Se=V==null?0:V.length;++re<Se;)if(ce(V[re],re,V))return!0;return!1}var p1=pc("length");function m1(V){return V.split("")}function E1(V){return V.match(xm)||[]}function J_(V,ce,re){var Se;return re(V,function(tt,pt,Vt){if(ce(tt,pt,Vt))return Se=pt,!1}),Se}function la(V,ce,re,Se){for(var tt=V.length,pt=re+(Se?1:-1);Se?pt--:++pt<tt;)if(ce(V[pt],pt,V))return pt;return-1}function Jo(V,ce,re){return ce===ce?S1(V,ce,re):la(V,ef,re)}function C1(V,ce,re,Se){for(var tt=re-1,pt=V.length;++tt<pt;)if(Se(V[tt],ce))return tt;return-1}function ef(V){return V!==V}function tf(V,ce){var re=V==null?0:V.length;return re?Ec(V,ce)/re:Xe}function pc(V){return function(ce){return ce==null?n:ce[V]}}function mc(V){return function(ce){return V==null?n:V[ce]}}function nf(V,ce,re,Se,tt){return tt(V,function(pt,Vt,At){re=Se?(Se=!1,pt):ce(re,pt,Vt,At)}),re}function b1(V,ce){var re=V.length;for(V.sort(ce);re--;)V[re]=V[re].value;return V}function Ec(V,ce){for(var re,Se=-1,tt=V.length;++Se<tt;){var pt=ce(V[Se]);pt!==n&&(re=re===n?pt:re+pt)}return re}function Cc(V,ce){for(var re=-1,Se=Array(V);++re<V;)Se[re]=ce(re);return Se}function I1(V,ce){return Ut(ce,function(re){return[re,V[re]]})}function rf(V){return V&&V.slice(0,lf(V)+1).replace(sc,"")}function Sn(V){return function(ce){return V(ce)}}function bc(V,ce){return Ut(ce,function(re){return V[re]})}function Qi(V,ce){return V.has(ce)}function of(V,ce){for(var re=-1,Se=V.length;++re<Se&&Jo(ce,V[re],0)>-1;);return re}function sf(V,ce){for(var re=V.length;re--&&Jo(ce,V[re],0)>-1;);return re}function w1(V,ce){for(var re=V.length,Se=0;re--;)V[re]===ce&&++Se;return Se}var y1=mc(a1),O1=mc(l1);function A1(V){return"\\"+u1[V]}function x1(V,ce){return V==null?n:V[ce]}function ei(V){return r1.test(V)}function L1(V){return o1.test(V)}function N1(V){for(var ce,re=[];!(ce=V.next()).done;)re.push(ce.value);return re}function Ic(V){var ce=-1,re=Array(V.size);return V.forEach(function(Se,tt){re[++ce]=[tt,Se]}),re}function af(V,ce){return function(re){return V(ce(re))}}function to(V,ce){for(var re=-1,Se=V.length,tt=0,pt=[];++re<Se;){var Vt=V[re];(Vt===ce||Vt===g)&&(V[re]=g,pt[tt++]=re)}return pt}function ca(V){var ce=-1,re=Array(V.size);return V.forEach(function(Se){re[++ce]=Se}),re}function R1(V){var ce=-1,re=Array(V.size);return V.forEach(function(Se){re[++ce]=[Se,Se]}),re}function S1(V,ce,re){for(var Se=re-1,tt=V.length;++Se<tt;)if(V[Se]===ce)return Se;return-1}function D1(V,ce,re){for(var Se=re+1;Se--;)if(V[Se]===ce)return Se;return Se}function ti(V){return ei(V)?k1(V):p1(V)}function lr(V){return ei(V)?M1(V):m1(V)}function lf(V){for(var ce=V.length;ce--&&wm.test(V.charAt(ce)););return ce}var T1=mc(c1);function k1(V){for(var ce=dc.lastIndex=0;dc.test(V);)++ce;return ce}function M1(V){return V.match(dc)||[]}function G1(V){return V.match(n1)||[]}var U1=function V(ce){ce=ce==null?nn:ni.defaults(nn.Object(),ce,ni.pick(nn,i1));var re=ce.Array,Se=ce.Date,tt=ce.Error,pt=ce.Function,Vt=ce.Math,At=ce.Object,wc=ce.RegExp,F1=ce.String,zn=ce.TypeError,ua=re.prototype,$1=pt.prototype,ri=At.prototype,da=ce["__core-js_shared__"],_a=$1.toString,bt=ri.hasOwnProperty,P1=0,cf=function(){var s=/[^.]+$/.exec(da&&da.keys&&da.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),fa=ri.toString,B1=_a.call(At),H1=nn._,W1=wc("^"+_a.call(bt).replace(ic,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ga=Y_?ce.Buffer:n,no=ce.Symbol,ha=ce.Uint8Array,uf=ga?ga.allocUnsafe:n,va=af(At.getPrototypeOf,At),df=At.create,_f=ri.propertyIsEnumerable,pa=ua.splice,ff=no?no.isConcatSpreadable:n,Ji=no?no.iterator:n,Ao=no?no.toStringTag:n,ma=function(){try{var s=So(At,"defineProperty");return s({},"",{}),s}catch{}}(),z1=ce.clearTimeout!==nn.clearTimeout&&ce.clearTimeout,Y1=Se&&Se.now!==nn.Date.now&&Se.now,j1=ce.setTimeout!==nn.setTimeout&&ce.setTimeout,Ea=Vt.ceil,Ca=Vt.floor,yc=At.getOwnPropertySymbols,K1=ga?ga.isBuffer:n,gf=ce.isFinite,V1=ua.join,X1=af(At.keys,At),Xt=Vt.max,un=Vt.min,q1=Se.now,Z1=ce.parseInt,hf=Vt.random,Q1=ua.reverse,Oc=So(ce,"DataView"),es=So(ce,"Map"),Ac=So(ce,"Promise"),oi=So(ce,"Set"),ts=So(ce,"WeakMap"),ns=So(At,"create"),ba=ts&&new ts,ii={},J1=Do(Oc),eE=Do(es),tE=Do(Ac),nE=Do(oi),rE=Do(ts),Ia=no?no.prototype:n,rs=Ia?Ia.valueOf:n,vf=Ia?Ia.toString:n;function R(s){if(Bt(s)&&!nt(s)&&!(s instanceof dt)){if(s instanceof Yn)return s;if(bt.call(s,"__wrapped__"))return pg(s)}return new Yn(s)}var si=function(){function s(){}return function(l){if(!$t(l))return{};if(df)return df(l);s.prototype=l;var p=new s;return s.prototype=n,p}}();function wa(){}function Yn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}R.templateSettings={escape:pm,evaluate:mm,interpolate:y_,variable:"",imports:{_:R}},R.prototype=wa.prototype,R.prototype.constructor=R,Yn.prototype=si(wa.prototype),Yn.prototype.constructor=Yn;function dt(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=et,this.__views__=[]}function oE(){var s=new dt(this.__wrapped__);return s.__actions__=wn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=wn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=wn(this.__views__),s}function iE(){if(this.__filtered__){var s=new dt(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function sE(){var s=this.__wrapped__.value(),l=this.__dir__,p=nt(s),C=l<0,y=p?s.length:0,D=m0(0,y,this.__views__),P=D.start,z=D.end,q=z-P,de=C?z:P-1,_e=this.__iteratees__,he=_e.length,xe=0,Ue=un(q,this.__takeCount__);if(!p||!C&&y==q&&Ue==q)return Pf(s,this.__actions__);var ze=[];e:for(;q--&&xe<Ue;){de+=l;for(var st=-1,Ye=s[de];++st<he;){var ut=_e[st],ft=ut.iteratee,kn=ut.type,vn=ft(Ye);if(kn==ve)Ye=vn;else if(!vn){if(kn==ie)continue e;break e}}ze[xe++]=Ye}return ze}dt.prototype=si(wa.prototype),dt.prototype.constructor=dt;function xo(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function aE(){this.__data__=ns?ns(null):{},this.size=0}function lE(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function cE(s){var l=this.__data__;if(ns){var p=l[s];return p===u?n:p}return bt.call(l,s)?l[s]:n}function uE(s){var l=this.__data__;return ns?l[s]!==n:bt.call(l,s)}function dE(s,l){var p=this.__data__;return this.size+=this.has(s)?0:1,p[s]=ns&&l===n?u:l,this}xo.prototype.clear=aE,xo.prototype.delete=lE,xo.prototype.get=cE,xo.prototype.has=uE,xo.prototype.set=dE;function Dr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function _E(){this.__data__=[],this.size=0}function fE(s){var l=this.__data__,p=ya(l,s);if(p<0)return!1;var C=l.length-1;return p==C?l.pop():pa.call(l,p,1),--this.size,!0}function gE(s){var l=this.__data__,p=ya(l,s);return p<0?n:l[p][1]}function hE(s){return ya(this.__data__,s)>-1}function vE(s,l){var p=this.__data__,C=ya(p,s);return C<0?(++this.size,p.push([s,l])):p[C][1]=l,this}Dr.prototype.clear=_E,Dr.prototype.delete=fE,Dr.prototype.get=gE,Dr.prototype.has=hE,Dr.prototype.set=vE;function Tr(s){var l=-1,p=s==null?0:s.length;for(this.clear();++l<p;){var C=s[l];this.set(C[0],C[1])}}function pE(){this.size=0,this.__data__={hash:new xo,map:new(es||Dr),string:new xo}}function mE(s){var l=Ga(this,s).delete(s);return this.size-=l?1:0,l}function EE(s){return Ga(this,s).get(s)}function CE(s){return Ga(this,s).has(s)}function bE(s,l){var p=Ga(this,s),C=p.size;return p.set(s,l),this.size+=p.size==C?0:1,this}Tr.prototype.clear=pE,Tr.prototype.delete=mE,Tr.prototype.get=EE,Tr.prototype.has=CE,Tr.prototype.set=bE;function Lo(s){var l=-1,p=s==null?0:s.length;for(this.__data__=new Tr;++l<p;)this.add(s[l])}function IE(s){return this.__data__.set(s,u),this}function wE(s){return this.__data__.has(s)}Lo.prototype.add=Lo.prototype.push=IE,Lo.prototype.has=wE;function cr(s){var l=this.__data__=new Dr(s);this.size=l.size}function yE(){this.__data__=new Dr,this.size=0}function OE(s){var l=this.__data__,p=l.delete(s);return this.size=l.size,p}function AE(s){return this.__data__.get(s)}function xE(s){return this.__data__.has(s)}function LE(s,l){var p=this.__data__;if(p instanceof Dr){var C=p.__data__;if(!es||C.length<o-1)return C.push([s,l]),this.size=++p.size,this;p=this.__data__=new Tr(C)}return p.set(s,l),this.size=p.size,this}cr.prototype.clear=yE,cr.prototype.delete=OE,cr.prototype.get=AE,cr.prototype.has=xE,cr.prototype.set=LE;function pf(s,l){var p=nt(s),C=!p&&To(s),y=!p&&!C&&ao(s),D=!p&&!C&&!y&&ui(s),P=p||C||y||D,z=P?Cc(s.length,F1):[],q=z.length;for(var de in s)(l||bt.call(s,de))&&!(P&&(de=="length"||y&&(de=="offset"||de=="parent")||D&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Ur(de,q)))&&z.push(de);return z}function mf(s){var l=s.length;return l?s[Uc(0,l-1)]:n}function NE(s,l){return Ua(wn(s),No(l,0,s.length))}function RE(s){return Ua(wn(s))}function xc(s,l,p){(p!==n&&!ur(s[l],p)||p===n&&!(l in s))&&kr(s,l,p)}function os(s,l,p){var C=s[l];(!(bt.call(s,l)&&ur(C,p))||p===n&&!(l in s))&&kr(s,l,p)}function ya(s,l){for(var p=s.length;p--;)if(ur(s[p][0],l))return p;return-1}function SE(s,l,p,C){return ro(s,function(y,D,P){l(C,y,p(y),P)}),C}function Ef(s,l){return s&&Ir(l,Jt(l),s)}function DE(s,l){return s&&Ir(l,On(l),s)}function kr(s,l,p){l=="__proto__"&&ma?ma(s,l,{configurable:!0,enumerable:!0,value:p,writable:!0}):s[l]=p}function Lc(s,l){for(var p=-1,C=l.length,y=re(C),D=s==null;++p<C;)y[p]=D?n:lu(s,l[p]);return y}function No(s,l,p){return s===s&&(p!==n&&(s=s<=p?s:p),l!==n&&(s=s>=l?s:l)),s}function jn(s,l,p,C,y,D){var P,z=l&v,q=l&h,de=l&m;if(p&&(P=y?p(s,C,y,D):p(s)),P!==n)return P;if(!$t(s))return s;var _e=nt(s);if(_e){if(P=C0(s),!z)return wn(s,P)}else{var he=dn(s),xe=he==Sr||he==$e;if(ao(s))return Wf(s,z);if(he==Nt||he==Gt||xe&&!y){if(P=q||xe?{}:lg(s),!z)return q?c0(s,DE(P,s)):l0(s,Ef(P,s))}else{if(!Rt[he])return y?s:{};P=b0(s,he,z)}}D||(D=new cr);var Ue=D.get(s);if(Ue)return Ue;D.set(s,P),Ug(s)?s.forEach(function(Ye){P.add(jn(Ye,l,p,Ye,s,D))}):Mg(s)&&s.forEach(function(Ye,ut){P.set(ut,jn(Ye,l,p,ut,s,D))});var ze=de?q?Vc:Kc:q?On:Jt,st=_e?n:ze(s);return Wn(st||s,function(Ye,ut){st&&(ut=Ye,Ye=s[ut]),os(P,ut,jn(Ye,l,p,ut,s,D))}),P}function TE(s){var l=Jt(s);return function(p){return Cf(p,s,l)}}function Cf(s,l,p){var C=p.length;if(s==null)return!C;for(s=At(s);C--;){var y=p[C],D=l[y],P=s[y];if(P===n&&!(y in s)||!D(P))return!1}return!0}function bf(s,l,p){if(typeof s!="function")throw new zn(a);return ds(function(){s.apply(n,p)},l)}function is(s,l,p,C){var y=-1,D=aa,P=!0,z=s.length,q=[],de=l.length;if(!z)return q;p&&(l=Ut(l,Sn(p))),C?(D=gc,P=!1):l.length>=o&&(D=Qi,P=!1,l=new Lo(l));e:for(;++y<z;){var _e=s[y],he=p==null?_e:p(_e);if(_e=C||_e!==0?_e:0,P&&he===he){for(var xe=de;xe--;)if(l[xe]===he)continue e;q.push(_e)}else D(l,he,C)||q.push(_e)}return q}var ro=Vf(br),If=Vf(Rc,!0);function kE(s,l){var p=!0;return ro(s,function(C,y,D){return p=!!l(C,y,D),p}),p}function Oa(s,l,p){for(var C=-1,y=s.length;++C<y;){var D=s[C],P=l(D);if(P!=null&&(z===n?P===P&&!Tn(P):p(P,z)))var z=P,q=D}return q}function ME(s,l,p,C){var y=s.length;for(p=it(p),p<0&&(p=-p>y?0:y+p),C=C===n||C>y?y:it(C),C<0&&(C+=y),C=p>C?0:$g(C);p<C;)s[p++]=l;return s}function wf(s,l){var p=[];return ro(s,function(C,y,D){l(C,y,D)&&p.push(C)}),p}function rn(s,l,p,C,y){var D=-1,P=s.length;for(p||(p=w0),y||(y=[]);++D<P;){var z=s[D];l>0&&p(z)?l>1?rn(z,l-1,p,C,y):eo(y,z):C||(y[y.length]=z)}return y}var Nc=Xf(),yf=Xf(!0);function br(s,l){return s&&Nc(s,l,Jt)}function Rc(s,l){return s&&yf(s,l,Jt)}function Aa(s,l){return Jr(l,function(p){return Fr(s[p])})}function Ro(s,l){l=io(l,s);for(var p=0,C=l.length;s!=null&&p<C;)s=s[wr(l[p++])];return p&&p==C?s:n}function Of(s,l,p){var C=l(s);return nt(s)?C:eo(C,p(s))}function gn(s){return s==null?s===n?tc:Fe:Ao&&Ao in At(s)?p0(s):R0(s)}function Sc(s,l){return s>l}function GE(s,l){return s!=null&&bt.call(s,l)}function UE(s,l){return s!=null&&l in At(s)}function FE(s,l,p){return s>=un(l,p)&&s<Xt(l,p)}function Dc(s,l,p){for(var C=p?gc:aa,y=s[0].length,D=s.length,P=D,z=re(D),q=1/0,de=[];P--;){var _e=s[P];P&&l&&(_e=Ut(_e,Sn(l))),q=un(_e.length,q),z[P]=!p&&(l||y>=120&&_e.length>=120)?new Lo(P&&_e):n}_e=s[0];var he=-1,xe=z[0];e:for(;++he<y&&de.length<q;){var Ue=_e[he],ze=l?l(Ue):Ue;if(Ue=p||Ue!==0?Ue:0,!(xe?Qi(xe,ze):C(de,ze,p))){for(P=D;--P;){var st=z[P];if(!(st?Qi(st,ze):C(s[P],ze,p)))continue e}xe&&xe.push(ze),de.push(Ue)}}return de}function $E(s,l,p,C){return br(s,function(y,D,P){l(C,p(y),D,P)}),C}function ss(s,l,p){l=io(l,s),s=_g(s,l);var C=s==null?s:s[wr(Vn(l))];return C==null?n:Rn(C,s,p)}function Af(s){return Bt(s)&&gn(s)==Gt}function PE(s){return Bt(s)&&gn(s)==Ke}function BE(s){return Bt(s)&&gn(s)==ar}function as(s,l,p,C,y){return s===l?!0:s==null||l==null||!Bt(s)&&!Bt(l)?s!==s&&l!==l:HE(s,l,p,C,as,y)}function HE(s,l,p,C,y,D){var P=nt(s),z=nt(l),q=P?Ft:dn(s),de=z?Ft:dn(l);q=q==Gt?Nt:q,de=de==Gt?Nt:de;var _e=q==Nt,he=de==Nt,xe=q==de;if(xe&&ao(s)){if(!ao(l))return!1;P=!0,_e=!1}if(xe&&!_e)return D||(D=new cr),P||ui(s)?ig(s,l,p,C,y,D):h0(s,l,q,p,C,y,D);if(!(p&E)){var Ue=_e&&bt.call(s,"__wrapped__"),ze=he&&bt.call(l,"__wrapped__");if(Ue||ze){var st=Ue?s.value():s,Ye=ze?l.value():l;return D||(D=new cr),y(st,Ye,p,C,D)}}return xe?(D||(D=new cr),v0(s,l,p,C,y,D)):!1}function WE(s){return Bt(s)&&dn(s)==Oe}function Tc(s,l,p,C){var y=p.length,D=y,P=!C;if(s==null)return!D;for(s=At(s);y--;){var z=p[y];if(P&&z[2]?z[1]!==s[z[0]]:!(z[0]in s))return!1}for(;++y<D;){z=p[y];var q=z[0],de=s[q],_e=z[1];if(P&&z[2]){if(de===n&&!(q in s))return!1}else{var he=new cr;if(C)var xe=C(de,_e,q,s,l,he);if(!(xe===n?as(_e,de,E|I,C,he):xe))return!1}}return!0}function xf(s){if(!$t(s)||O0(s))return!1;var l=Fr(s)?W1:Tm;return l.test(Do(s))}function zE(s){return Bt(s)&&gn(s)==bo}function YE(s){return Bt(s)&&dn(s)==bn}function jE(s){return Bt(s)&&Wa(s.length)&&!!kt[gn(s)]}function Lf(s){return typeof s=="function"?s:s==null?An:typeof s=="object"?nt(s)?Sf(s[0],s[1]):Rf(s):qg(s)}function kc(s){if(!us(s))return X1(s);var l=[];for(var p in At(s))bt.call(s,p)&&p!="constructor"&&l.push(p);return l}function KE(s){if(!$t(s))return N0(s);var l=us(s),p=[];for(var C in s)C=="constructor"&&(l||!bt.call(s,C))||p.push(C);return p}function Mc(s,l){return s<l}function Nf(s,l){var p=-1,C=yn(s)?re(s.length):[];return ro(s,function(y,D,P){C[++p]=l(y,D,P)}),C}function Rf(s){var l=qc(s);return l.length==1&&l[0][2]?ug(l[0][0],l[0][1]):function(p){return p===s||Tc(p,s,l)}}function Sf(s,l){return Qc(s)&&cg(l)?ug(wr(s),l):function(p){var C=lu(p,s);return C===n&&C===l?cu(p,s):as(l,C,E|I)}}function xa(s,l,p,C,y){s!==l&&Nc(l,function(D,P){if(y||(y=new cr),$t(D))VE(s,l,P,p,xa,C,y);else{var z=C?C(eu(s,P),D,P+"",s,l,y):n;z===n&&(z=D),xc(s,P,z)}},On)}function VE(s,l,p,C,y,D,P){var z=eu(s,p),q=eu(l,p),de=P.get(q);if(de){xc(s,p,de);return}var _e=D?D(z,q,p+"",s,l,P):n,he=_e===n;if(he){var xe=nt(q),Ue=!xe&&ao(q),ze=!xe&&!Ue&&ui(q);_e=q,xe||Ue||ze?nt(z)?_e=z:zt(z)?_e=wn(z):Ue?(he=!1,_e=Wf(q,!0)):ze?(he=!1,_e=zf(q,!0)):_e=[]:_s(q)||To(q)?(_e=z,To(z)?_e=Pg(z):(!$t(z)||Fr(z))&&(_e=lg(q))):he=!1}he&&(P.set(q,_e),y(_e,q,C,D,P),P.delete(q)),xc(s,p,_e)}function Df(s,l){var p=s.length;if(p)return l+=l<0?p:0,Ur(l,p)?s[l]:n}function Tf(s,l,p){l.length?l=Ut(l,function(D){return nt(D)?function(P){return Ro(P,D.length===1?D[0]:D)}:D}):l=[An];var C=-1;l=Ut(l,Sn(We()));var y=Nf(s,function(D,P,z){var q=Ut(l,function(de){return de(D)});return{criteria:q,index:++C,value:D}});return b1(y,function(D,P){return a0(D,P,p)})}function XE(s,l){return kf(s,l,function(p,C){return cu(s,C)})}function kf(s,l,p){for(var C=-1,y=l.length,D={};++C<y;){var P=l[C],z=Ro(s,P);p(z,P)&&ls(D,io(P,s),z)}return D}function qE(s){return function(l){return Ro(l,s)}}function Gc(s,l,p,C){var y=C?C1:Jo,D=-1,P=l.length,z=s;for(s===l&&(l=wn(l)),p&&(z=Ut(s,Sn(p)));++D<P;)for(var q=0,de=l[D],_e=p?p(de):de;(q=y(z,_e,q,C))>-1;)z!==s&&pa.call(z,q,1),pa.call(s,q,1);return s}function Mf(s,l){for(var p=s?l.length:0,C=p-1;p--;){var y=l[p];if(p==C||y!==D){var D=y;Ur(y)?pa.call(s,y,1):Pc(s,y)}}return s}function Uc(s,l){return s+Ca(hf()*(l-s+1))}function ZE(s,l,p,C){for(var y=-1,D=Xt(Ea((l-s)/(p||1)),0),P=re(D);D--;)P[C?D:++y]=s,s+=p;return P}function Fc(s,l){var p="";if(!s||l<1||l>ye)return p;do l%2&&(p+=s),l=Ca(l/2),l&&(s+=s);while(l);return p}function lt(s,l){return tu(dg(s,l,An),s+"")}function QE(s){return mf(di(s))}function JE(s,l){var p=di(s);return Ua(p,No(l,0,p.length))}function ls(s,l,p,C){if(!$t(s))return s;l=io(l,s);for(var y=-1,D=l.length,P=D-1,z=s;z!=null&&++y<D;){var q=wr(l[y]),de=p;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(y!=P){var _e=z[q];de=C?C(_e,q,z):n,de===n&&(de=$t(_e)?_e:Ur(l[y+1])?[]:{})}os(z,q,de),z=z[q]}return s}var Gf=ba?function(s,l){return ba.set(s,l),s}:An,e0=ma?function(s,l){return ma(s,"toString",{configurable:!0,enumerable:!1,value:du(l),writable:!0})}:An;function t0(s){return Ua(di(s))}function Kn(s,l,p){var C=-1,y=s.length;l<0&&(l=-l>y?0:y+l),p=p>y?y:p,p<0&&(p+=y),y=l>p?0:p-l>>>0,l>>>=0;for(var D=re(y);++C<y;)D[C]=s[C+l];return D}function n0(s,l){var p;return ro(s,function(C,y,D){return p=l(C,y,D),!p}),!!p}function La(s,l,p){var C=0,y=s==null?C:s.length;if(typeof l=="number"&&l===l&&y<=Tt){for(;C<y;){var D=C+y>>>1,P=s[D];P!==null&&!Tn(P)&&(p?P<=l:P<l)?C=D+1:y=D}return y}return $c(s,l,An,p)}function $c(s,l,p,C){var y=0,D=s==null?0:s.length;if(D===0)return 0;l=p(l);for(var P=l!==l,z=l===null,q=Tn(l),de=l===n;y<D;){var _e=Ca((y+D)/2),he=p(s[_e]),xe=he!==n,Ue=he===null,ze=he===he,st=Tn(he);if(P)var Ye=C||ze;else de?Ye=ze&&(C||xe):z?Ye=ze&&xe&&(C||!Ue):q?Ye=ze&&xe&&!Ue&&(C||!st):Ue||st?Ye=!1:Ye=C?he<=l:he<l;Ye?y=_e+1:D=_e}return un(D,wt)}function Uf(s,l){for(var p=-1,C=s.length,y=0,D=[];++p<C;){var P=s[p],z=l?l(P):P;if(!p||!ur(z,q)){var q=z;D[y++]=P===0?0:P}}return D}function Ff(s){return typeof s=="number"?s:Tn(s)?Xe:+s}function Dn(s){if(typeof s=="string")return s;if(nt(s))return Ut(s,Dn)+"";if(Tn(s))return vf?vf.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function oo(s,l,p){var C=-1,y=aa,D=s.length,P=!0,z=[],q=z;if(p)P=!1,y=gc;else if(D>=o){var de=l?null:f0(s);if(de)return ca(de);P=!1,y=Qi,q=new Lo}else q=l?[]:z;e:for(;++C<D;){var _e=s[C],he=l?l(_e):_e;if(_e=p||_e!==0?_e:0,P&&he===he){for(var xe=q.length;xe--;)if(q[xe]===he)continue e;l&&q.push(he),z.push(_e)}else y(q,he,p)||(q!==z&&q.push(he),z.push(_e))}return z}function Pc(s,l){return l=io(l,s),s=_g(s,l),s==null||delete s[wr(Vn(l))]}function $f(s,l,p,C){return ls(s,l,p(Ro(s,l)),C)}function Na(s,l,p,C){for(var y=s.length,D=C?y:-1;(C?D--:++D<y)&&l(s[D],D,s););return p?Kn(s,C?0:D,C?D+1:y):Kn(s,C?D+1:0,C?y:D)}function Pf(s,l){var p=s;return p instanceof dt&&(p=p.value()),hc(l,function(C,y){return y.func.apply(y.thisArg,eo([C],y.args))},p)}function Bc(s,l,p){var C=s.length;if(C<2)return C?oo(s[0]):[];for(var y=-1,D=re(C);++y<C;)for(var P=s[y],z=-1;++z<C;)z!=y&&(D[y]=is(D[y]||P,s[z],l,p));return oo(rn(D,1),l,p)}function Bf(s,l,p){for(var C=-1,y=s.length,D=l.length,P={};++C<y;){var z=C<D?l[C]:n;p(P,s[C],z)}return P}function Hc(s){return zt(s)?s:[]}function Wc(s){return typeof s=="function"?s:An}function io(s,l){return nt(s)?s:Qc(s,l)?[s]:vg(Ct(s))}var r0=lt;function so(s,l,p){var C=s.length;return p=p===n?C:p,!l&&p>=C?s:Kn(s,l,p)}var Hf=z1||function(s){return nn.clearTimeout(s)};function Wf(s,l){if(l)return s.slice();var p=s.length,C=uf?uf(p):new s.constructor(p);return s.copy(C),C}function zc(s){var l=new s.constructor(s.byteLength);return new ha(l).set(new ha(s)),l}function o0(s,l){var p=l?zc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.byteLength)}function i0(s){var l=new s.constructor(s.source,O_.exec(s));return l.lastIndex=s.lastIndex,l}function s0(s){return rs?At(rs.call(s)):{}}function zf(s,l){var p=l?zc(s.buffer):s.buffer;return new s.constructor(p,s.byteOffset,s.length)}function Yf(s,l){if(s!==l){var p=s!==n,C=s===null,y=s===s,D=Tn(s),P=l!==n,z=l===null,q=l===l,de=Tn(l);if(!z&&!de&&!D&&s>l||D&&P&&q&&!z&&!de||C&&P&&q||!p&&q||!y)return 1;if(!C&&!D&&!de&&s<l||de&&p&&y&&!C&&!D||z&&p&&y||!P&&y||!q)return-1}return 0}function a0(s,l,p){for(var C=-1,y=s.criteria,D=l.criteria,P=y.length,z=p.length;++C<P;){var q=Yf(y[C],D[C]);if(q){if(C>=z)return q;var de=p[C];return q*(de=="desc"?-1:1)}}return s.index-l.index}function jf(s,l,p,C){for(var y=-1,D=s.length,P=p.length,z=-1,q=l.length,de=Xt(D-P,0),_e=re(q+de),he=!C;++z<q;)_e[z]=l[z];for(;++y<P;)(he||y<D)&&(_e[p[y]]=s[y]);for(;de--;)_e[z++]=s[y++];return _e}function Kf(s,l,p,C){for(var y=-1,D=s.length,P=-1,z=p.length,q=-1,de=l.length,_e=Xt(D-z,0),he=re(_e+de),xe=!C;++y<_e;)he[y]=s[y];for(var Ue=y;++q<de;)he[Ue+q]=l[q];for(;++P<z;)(xe||y<D)&&(he[Ue+p[P]]=s[y++]);return he}function wn(s,l){var p=-1,C=s.length;for(l||(l=re(C));++p<C;)l[p]=s[p];return l}function Ir(s,l,p,C){var y=!p;p||(p={});for(var D=-1,P=l.length;++D<P;){var z=l[D],q=C?C(p[z],s[z],z,p,s):n;q===n&&(q=s[z]),y?kr(p,z,q):os(p,z,q)}return p}function l0(s,l){return Ir(s,Zc(s),l)}function c0(s,l){return Ir(s,sg(s),l)}function Ra(s,l){return function(p,C){var y=nt(p)?g1:SE,D=l?l():{};return y(p,s,We(C,2),D)}}function ai(s){return lt(function(l,p){var C=-1,y=p.length,D=y>1?p[y-1]:n,P=y>2?p[2]:n;for(D=s.length>3&&typeof D=="function"?(y--,D):n,P&&hn(p[0],p[1],P)&&(D=y<3?n:D,y=1),l=At(l);++C<y;){var z=p[C];z&&s(l,z,C,D)}return l})}function Vf(s,l){return function(p,C){if(p==null)return p;if(!yn(p))return s(p,C);for(var y=p.length,D=l?y:-1,P=At(p);(l?D--:++D<y)&&C(P[D],D,P)!==!1;);return p}}function Xf(s){return function(l,p,C){for(var y=-1,D=At(l),P=C(l),z=P.length;z--;){var q=P[s?z:++y];if(p(D[q],q,D)===!1)break}return l}}function u0(s,l,p){var C=l&b,y=cs(s);function D(){var P=this&&this!==nn&&this instanceof D?y:s;return P.apply(C?p:this,arguments)}return D}function qf(s){return function(l){l=Ct(l);var p=ei(l)?lr(l):n,C=p?p[0]:l.charAt(0),y=p?so(p,1).join(""):l.slice(1);return C[s]()+y}}function li(s){return function(l){return hc(Vg(Kg(l).replace(e1,"")),s,"")}}function cs(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var p=si(s.prototype),C=s.apply(p,l);return $t(C)?C:p}}function d0(s,l,p){var C=cs(s);function y(){for(var D=arguments.length,P=re(D),z=D,q=ci(y);z--;)P[z]=arguments[z];var de=D<3&&P[0]!==q&&P[D-1]!==q?[]:to(P,q);if(D-=de.length,D<p)return tg(s,l,Sa,y.placeholder,n,P,de,n,n,p-D);var _e=this&&this!==nn&&this instanceof y?C:s;return Rn(_e,this,P)}return y}function Zf(s){return function(l,p,C){var y=At(l);if(!yn(l)){var D=We(p,3);l=Jt(l),p=function(z){return D(y[z],z,y)}}var P=s(l,p,C);return P>-1?y[D?l[P]:P]:n}}function Qf(s){return Gr(function(l){var p=l.length,C=p,y=Yn.prototype.thru;for(s&&l.reverse();C--;){var D=l[C];if(typeof D!="function")throw new zn(a);if(y&&!P&&Ma(D)=="wrapper")var P=new Yn([],!0)}for(C=P?C:p;++C<p;){D=l[C];var z=Ma(D),q=z=="wrapper"?Xc(D):n;q&&Jc(q[0])&&q[1]==(F|T|$|K)&&!q[4].length&&q[9]==1?P=P[Ma(q[0])].apply(P,q[3]):P=D.length==1&&Jc(D)?P[z]():P.thru(D)}return function(){var de=arguments,_e=de[0];if(P&&de.length==1&&nt(_e))return P.plant(_e).value();for(var he=0,xe=p?l[he].apply(this,de):_e;++he<p;)xe=l[he].call(this,xe);return xe}})}function Sa(s,l,p,C,y,D,P,z,q,de){var _e=l&F,he=l&b,xe=l&w,Ue=l&(T|M),ze=l&te,st=xe?n:cs(s);function Ye(){for(var ut=arguments.length,ft=re(ut),kn=ut;kn--;)ft[kn]=arguments[kn];if(Ue)var vn=ci(Ye),Mn=w1(ft,vn);if(C&&(ft=jf(ft,C,y,Ue)),D&&(ft=Kf(ft,D,P,Ue)),ut-=Mn,Ue&&ut<de){var Yt=to(ft,vn);return tg(s,l,Sa,Ye.placeholder,p,ft,Yt,z,q,de-ut)}var dr=he?p:this,Pr=xe?dr[s]:s;return ut=ft.length,z?ft=S0(ft,z):ze&&ut>1&&ft.reverse(),_e&&q<ut&&(ft.length=q),this&&this!==nn&&this instanceof Ye&&(Pr=st||cs(Pr)),Pr.apply(dr,ft)}return Ye}function Jf(s,l){return function(p,C){return $E(p,s,l(C),{})}}function Da(s,l){return function(p,C){var y;if(p===n&&C===n)return l;if(p!==n&&(y=p),C!==n){if(y===n)return C;typeof p=="string"||typeof C=="string"?(p=Dn(p),C=Dn(C)):(p=Ff(p),C=Ff(C)),y=s(p,C)}return y}}function Yc(s){return Gr(function(l){return l=Ut(l,Sn(We())),lt(function(p){var C=this;return s(l,function(y){return Rn(y,C,p)})})})}function Ta(s,l){l=l===n?" ":Dn(l);var p=l.length;if(p<2)return p?Fc(l,s):l;var C=Fc(l,Ea(s/ti(l)));return ei(l)?so(lr(C),0,s).join(""):C.slice(0,s)}function _0(s,l,p,C){var y=l&b,D=cs(s);function P(){for(var z=-1,q=arguments.length,de=-1,_e=C.length,he=re(_e+q),xe=this&&this!==nn&&this instanceof P?D:s;++de<_e;)he[de]=C[de];for(;q--;)he[de++]=arguments[++z];return Rn(xe,y?p:this,he)}return P}function eg(s){return function(l,p,C){return C&&typeof C!="number"&&hn(l,p,C)&&(p=C=n),l=$r(l),p===n?(p=l,l=0):p=$r(p),C=C===n?l<p?1:-1:$r(C),ZE(l,p,C,s)}}function ka(s){return function(l,p){return typeof l=="string"&&typeof p=="string"||(l=Xn(l),p=Xn(p)),s(l,p)}}function tg(s,l,p,C,y,D,P,z,q,de){var _e=l&T,he=_e?P:n,xe=_e?n:P,Ue=_e?D:n,ze=_e?n:D;l|=_e?$:W,l&=~(_e?W:$),l&x||(l&=-4);var st=[s,l,y,Ue,he,ze,xe,z,q,de],Ye=p.apply(n,st);return Jc(s)&&fg(Ye,st),Ye.placeholder=C,gg(Ye,s,l)}function jc(s){var l=Vt[s];return function(p,C){if(p=Xn(p),C=C==null?0:un(it(C),292),C&&gf(p)){var y=(Ct(p)+"e").split("e"),D=l(y[0]+"e"+(+y[1]+C));return y=(Ct(D)+"e").split("e"),+(y[0]+"e"+(+y[1]-C))}return l(p)}}var f0=oi&&1/ca(new oi([,-0]))[1]==Le?function(s){return new oi(s)}:gu;function ng(s){return function(l){var p=dn(l);return p==Oe?Ic(l):p==bn?R1(l):I1(l,s(l))}}function Mr(s,l,p,C,y,D,P,z){var q=l&w;if(!q&&typeof s!="function")throw new zn(a);var de=C?C.length:0;if(de||(l&=-97,C=y=n),P=P===n?P:Xt(it(P),0),z=z===n?z:it(z),de-=y?y.length:0,l&W){var _e=C,he=y;C=y=n}var xe=q?n:Xc(s),Ue=[s,l,p,C,y,_e,he,D,P,z];if(xe&&L0(Ue,xe),s=Ue[0],l=Ue[1],p=Ue[2],C=Ue[3],y=Ue[4],z=Ue[9]=Ue[9]===n?q?0:s.length:Xt(Ue[9]-de,0),!z&&l&(T|M)&&(l&=-25),!l||l==b)var ze=u0(s,l,p);else l==T||l==M?ze=d0(s,l,z):(l==$||l==(b|$))&&!y.length?ze=_0(s,l,p,C):ze=Sa.apply(n,Ue);var st=xe?Gf:fg;return gg(st(ze,Ue),s,l)}function rg(s,l,p,C){return s===n||ur(s,ri[p])&&!bt.call(C,p)?l:s}function og(s,l,p,C,y,D){return $t(s)&&$t(l)&&(D.set(l,s),xa(s,l,n,og,D),D.delete(l)),s}function g0(s){return _s(s)?n:s}function ig(s,l,p,C,y,D){var P=p&E,z=s.length,q=l.length;if(z!=q&&!(P&&q>z))return!1;var de=D.get(s),_e=D.get(l);if(de&&_e)return de==l&&_e==s;var he=-1,xe=!0,Ue=p&I?new Lo:n;for(D.set(s,l),D.set(l,s);++he<z;){var ze=s[he],st=l[he];if(C)var Ye=P?C(st,ze,he,l,s,D):C(ze,st,he,s,l,D);if(Ye!==n){if(Ye)continue;xe=!1;break}if(Ue){if(!vc(l,function(ut,ft){if(!Qi(Ue,ft)&&(ze===ut||y(ze,ut,p,C,D)))return Ue.push(ft)})){xe=!1;break}}else if(!(ze===st||y(ze,st,p,C,D))){xe=!1;break}}return D.delete(s),D.delete(l),xe}function h0(s,l,p,C,y,D,P){switch(p){case In:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case Ke:return!(s.byteLength!=l.byteLength||!D(new ha(s),new ha(l)));case Er:case ar:case Ge:return ur(+s,+l);case Rr:return s.name==l.name&&s.message==l.message;case bo:case Io:return s==l+"";case Oe:var z=Ic;case bn:var q=C&E;if(z||(z=ca),s.size!=l.size&&!q)return!1;var de=P.get(s);if(de)return de==l;C|=I,P.set(s,l);var _e=ig(z(s),z(l),C,y,D,P);return P.delete(s),_e;case wo:if(rs)return rs.call(s)==rs.call(l)}return!1}function v0(s,l,p,C,y,D){var P=p&E,z=Kc(s),q=z.length,de=Kc(l),_e=de.length;if(q!=_e&&!P)return!1;for(var he=q;he--;){var xe=z[he];if(!(P?xe in l:bt.call(l,xe)))return!1}var Ue=D.get(s),ze=D.get(l);if(Ue&&ze)return Ue==l&&ze==s;var st=!0;D.set(s,l),D.set(l,s);for(var Ye=P;++he<q;){xe=z[he];var ut=s[xe],ft=l[xe];if(C)var kn=P?C(ft,ut,xe,l,s,D):C(ut,ft,xe,s,l,D);if(!(kn===n?ut===ft||y(ut,ft,p,C,D):kn)){st=!1;break}Ye||(Ye=xe=="constructor")}if(st&&!Ye){var vn=s.constructor,Mn=l.constructor;vn!=Mn&&"constructor"in s&&"constructor"in l&&!(typeof vn=="function"&&vn instanceof vn&&typeof Mn=="function"&&Mn instanceof Mn)&&(st=!1)}return D.delete(s),D.delete(l),st}function Gr(s){return tu(dg(s,n,Cg),s+"")}function Kc(s){return Of(s,Jt,Zc)}function Vc(s){return Of(s,On,sg)}var Xc=ba?function(s){return ba.get(s)}:gu;function Ma(s){for(var l=s.name+"",p=ii[l],C=bt.call(ii,l)?p.length:0;C--;){var y=p[C],D=y.func;if(D==null||D==s)return y.name}return l}function ci(s){var l=bt.call(R,"placeholder")?R:s;return l.placeholder}function We(){var s=R.iteratee||_u;return s=s===_u?Lf:s,arguments.length?s(arguments[0],arguments[1]):s}function Ga(s,l){var p=s.__data__;return y0(l)?p[typeof l=="string"?"string":"hash"]:p.map}function qc(s){for(var l=Jt(s),p=l.length;p--;){var C=l[p],y=s[C];l[p]=[C,y,cg(y)]}return l}function So(s,l){var p=x1(s,l);return xf(p)?p:n}function p0(s){var l=bt.call(s,Ao),p=s[Ao];try{s[Ao]=n;var C=!0}catch{}var y=fa.call(s);return C&&(l?s[Ao]=p:delete s[Ao]),y}var Zc=yc?function(s){return s==null?[]:(s=At(s),Jr(yc(s),function(l){return _f.call(s,l)}))}:hu,sg=yc?function(s){for(var l=[];s;)eo(l,Zc(s)),s=va(s);return l}:hu,dn=gn;(Oc&&dn(new Oc(new ArrayBuffer(1)))!=In||es&&dn(new es)!=Oe||Ac&&dn(Ac.resolve())!=na||oi&&dn(new oi)!=bn||ts&&dn(new ts)!=yo)&&(dn=function(s){var l=gn(s),p=l==Nt?s.constructor:n,C=p?Do(p):"";if(C)switch(C){case J1:return In;case eE:return Oe;case tE:return na;case nE:return bn;case rE:return yo}return l});function m0(s,l,p){for(var C=-1,y=p.length;++C<y;){var D=p[C],P=D.size;switch(D.type){case"drop":s+=P;break;case"dropRight":l-=P;break;case"take":l=un(l,s+P);break;case"takeRight":s=Xt(s,l-P);break}}return{start:s,end:l}}function E0(s){var l=s.match(Om);return l?l[1].split(Am):[]}function ag(s,l,p){l=io(l,s);for(var C=-1,y=l.length,D=!1;++C<y;){var P=wr(l[C]);if(!(D=s!=null&&p(s,P)))break;s=s[P]}return D||++C!=y?D:(y=s==null?0:s.length,!!y&&Wa(y)&&Ur(P,y)&&(nt(s)||To(s)))}function C0(s){var l=s.length,p=new s.constructor(l);return l&&typeof s[0]=="string"&&bt.call(s,"index")&&(p.index=s.index,p.input=s.input),p}function lg(s){return typeof s.constructor=="function"&&!us(s)?si(va(s)):{}}function b0(s,l,p){var C=s.constructor;switch(l){case Ke:return zc(s);case Er:case ar:return new C(+s);case In:return o0(s,p);case qo:case Zo:case Cr:case Vi:case Xi:case qi:case Zi:case rc:case oc:return zf(s,p);case Oe:return new C;case Ge:case Io:return new C(s);case bo:return i0(s);case bn:return new C;case wo:return s0(s)}}function I0(s,l){var p=l.length;if(!p)return s;var C=p-1;return l[C]=(p>1?"& ":"")+l[C],l=l.join(p>2?", ":" "),s.replace(ym,`{
/* [wrapped with `+l+`] */
`)}function w0(s){return nt(s)||To(s)||!!(ff&&s&&s[ff])}function Ur(s,l){var p=typeof s;return l=l??ye,!!l&&(p=="number"||p!="symbol"&&Mm.test(s))&&s>-1&&s%1==0&&s<l}function hn(s,l,p){if(!$t(p))return!1;var C=typeof l;return(C=="number"?yn(p)&&Ur(l,p.length):C=="string"&&l in p)?ur(p[l],s):!1}function Qc(s,l){if(nt(s))return!1;var p=typeof s;return p=="number"||p=="symbol"||p=="boolean"||s==null||Tn(s)?!0:Cm.test(s)||!Em.test(s)||l!=null&&s in At(l)}function y0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Jc(s){var l=Ma(s),p=R[l];if(typeof p!="function"||!(l in dt.prototype))return!1;if(s===p)return!0;var C=Xc(p);return!!C&&s===C[0]}function O0(s){return!!cf&&cf in s}var A0=da?Fr:vu;function us(s){var l=s&&s.constructor,p=typeof l=="function"&&l.prototype||ri;return s===p}function cg(s){return s===s&&!$t(s)}function ug(s,l){return function(p){return p==null?!1:p[s]===l&&(l!==n||s in At(p))}}function x0(s){var l=Ba(s,function(C){return p.size===f&&p.clear(),C}),p=l.cache;return l}function L0(s,l){var p=s[1],C=l[1],y=p|C,D=y<(b|w|F),P=C==F&&p==T||C==F&&p==K&&s[7].length<=l[8]||C==(F|K)&&l[7].length<=l[8]&&p==T;if(!(D||P))return s;C&b&&(s[2]=l[2],y|=p&b?0:x);var z=l[3];if(z){var q=s[3];s[3]=q?jf(q,z,l[4]):z,s[4]=q?to(s[3],g):l[4]}return z=l[5],z&&(q=s[5],s[5]=q?Kf(q,z,l[6]):z,s[6]=q?to(s[5],g):l[6]),z=l[7],z&&(s[7]=z),C&F&&(s[8]=s[8]==null?l[8]:un(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=y,s}function N0(s){var l=[];if(s!=null)for(var p in At(s))l.push(p);return l}function R0(s){return fa.call(s)}function dg(s,l,p){return l=Xt(l===n?s.length-1:l,0),function(){for(var C=arguments,y=-1,D=Xt(C.length-l,0),P=re(D);++y<D;)P[y]=C[l+y];y=-1;for(var z=re(l+1);++y<l;)z[y]=C[y];return z[l]=p(P),Rn(s,this,z)}}function _g(s,l){return l.length<2?s:Ro(s,Kn(l,0,-1))}function S0(s,l){for(var p=s.length,C=un(l.length,p),y=wn(s);C--;){var D=l[C];s[C]=Ur(D,p)?y[D]:n}return s}function eu(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var fg=hg(Gf),ds=j1||function(s,l){return nn.setTimeout(s,l)},tu=hg(e0);function gg(s,l,p){var C=l+"";return tu(s,I0(C,D0(E0(C),p)))}function hg(s){var l=0,p=0;return function(){var C=q1(),y=ge-(C-p);if(p=C,y>0){if(++l>=ne)return arguments[0]}else l=0;return s.apply(n,arguments)}}function Ua(s,l){var p=-1,C=s.length,y=C-1;for(l=l===n?C:l;++p<l;){var D=Uc(p,y),P=s[D];s[D]=s[p],s[p]=P}return s.length=l,s}var vg=x0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(bm,function(p,C,y,D){l.push(y?D.replace(Nm,"$1"):C||p)}),l});function wr(s){if(typeof s=="string"||Tn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Do(s){if(s!=null){try{return _a.call(s)}catch{}try{return s+""}catch{}}return""}function D0(s,l){return Wn(Kt,function(p){var C="_."+p[0];l&p[1]&&!aa(s,C)&&s.push(C)}),s.sort()}function pg(s){if(s instanceof dt)return s.clone();var l=new Yn(s.__wrapped__,s.__chain__);return l.__actions__=wn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function T0(s,l,p){(p?hn(s,l,p):l===n)?l=1:l=Xt(it(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var y=0,D=0,P=re(Ea(C/l));y<C;)P[D++]=Kn(s,y,y+=l);return P}function k0(s){for(var l=-1,p=s==null?0:s.length,C=0,y=[];++l<p;){var D=s[l];D&&(y[C++]=D)}return y}function M0(){var s=arguments.length;if(!s)return[];for(var l=re(s-1),p=arguments[0],C=s;C--;)l[C-1]=arguments[C];return eo(nt(p)?wn(p):[p],rn(l,1))}var G0=lt(function(s,l){return zt(s)?is(s,rn(l,1,zt,!0)):[]}),U0=lt(function(s,l){var p=Vn(l);return zt(p)&&(p=n),zt(s)?is(s,rn(l,1,zt,!0),We(p,2)):[]}),F0=lt(function(s,l){var p=Vn(l);return zt(p)&&(p=n),zt(s)?is(s,rn(l,1,zt,!0),n,p):[]});function $0(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:it(l),Kn(s,l<0?0:l,C)):[]}function P0(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:it(l),l=C-l,Kn(s,0,l<0?0:l)):[]}function B0(s,l){return s&&s.length?Na(s,We(l,3),!0,!0):[]}function H0(s,l){return s&&s.length?Na(s,We(l,3),!0):[]}function W0(s,l,p,C){var y=s==null?0:s.length;return y?(p&&typeof p!="number"&&hn(s,l,p)&&(p=0,C=y),ME(s,l,p,C)):[]}function mg(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:it(p);return y<0&&(y=Xt(C+y,0)),la(s,We(l,3),y)}function Eg(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=C-1;return p!==n&&(y=it(p),y=p<0?Xt(C+y,0):un(y,C-1)),la(s,We(l,3),y,!0)}function Cg(s){var l=s==null?0:s.length;return l?rn(s,1):[]}function z0(s){var l=s==null?0:s.length;return l?rn(s,Le):[]}function Y0(s,l){var p=s==null?0:s.length;return p?(l=l===n?1:it(l),rn(s,l)):[]}function j0(s){for(var l=-1,p=s==null?0:s.length,C={};++l<p;){var y=s[l];C[y[0]]=y[1]}return C}function bg(s){return s&&s.length?s[0]:n}function K0(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=p==null?0:it(p);return y<0&&(y=Xt(C+y,0)),Jo(s,l,y)}function V0(s){var l=s==null?0:s.length;return l?Kn(s,0,-1):[]}var X0=lt(function(s){var l=Ut(s,Hc);return l.length&&l[0]===s[0]?Dc(l):[]}),q0=lt(function(s){var l=Vn(s),p=Ut(s,Hc);return l===Vn(p)?l=n:p.pop(),p.length&&p[0]===s[0]?Dc(p,We(l,2)):[]}),Z0=lt(function(s){var l=Vn(s),p=Ut(s,Hc);return l=typeof l=="function"?l:n,l&&p.pop(),p.length&&p[0]===s[0]?Dc(p,n,l):[]});function Q0(s,l){return s==null?"":V1.call(s,l)}function Vn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function J0(s,l,p){var C=s==null?0:s.length;if(!C)return-1;var y=C;return p!==n&&(y=it(p),y=y<0?Xt(C+y,0):un(y,C-1)),l===l?D1(s,l,y):la(s,ef,y,!0)}function eC(s,l){return s&&s.length?Df(s,it(l)):n}var tC=lt(Ig);function Ig(s,l){return s&&s.length&&l&&l.length?Gc(s,l):s}function nC(s,l,p){return s&&s.length&&l&&l.length?Gc(s,l,We(p,2)):s}function rC(s,l,p){return s&&s.length&&l&&l.length?Gc(s,l,n,p):s}var oC=Gr(function(s,l){var p=s==null?0:s.length,C=Lc(s,l);return Mf(s,Ut(l,function(y){return Ur(y,p)?+y:y}).sort(Yf)),C});function iC(s,l){var p=[];if(!(s&&s.length))return p;var C=-1,y=[],D=s.length;for(l=We(l,3);++C<D;){var P=s[C];l(P,C,s)&&(p.push(P),y.push(C))}return Mf(s,y),p}function nu(s){return s==null?s:Q1.call(s)}function sC(s,l,p){var C=s==null?0:s.length;return C?(p&&typeof p!="number"&&hn(s,l,p)?(l=0,p=C):(l=l==null?0:it(l),p=p===n?C:it(p)),Kn(s,l,p)):[]}function aC(s,l){return La(s,l)}function lC(s,l,p){return $c(s,l,We(p,2))}function cC(s,l){var p=s==null?0:s.length;if(p){var C=La(s,l);if(C<p&&ur(s[C],l))return C}return-1}function uC(s,l){return La(s,l,!0)}function dC(s,l,p){return $c(s,l,We(p,2),!0)}function _C(s,l){var p=s==null?0:s.length;if(p){var C=La(s,l,!0)-1;if(ur(s[C],l))return C}return-1}function fC(s){return s&&s.length?Uf(s):[]}function gC(s,l){return s&&s.length?Uf(s,We(l,2)):[]}function hC(s){var l=s==null?0:s.length;return l?Kn(s,1,l):[]}function vC(s,l,p){return s&&s.length?(l=p||l===n?1:it(l),Kn(s,0,l<0?0:l)):[]}function pC(s,l,p){var C=s==null?0:s.length;return C?(l=p||l===n?1:it(l),l=C-l,Kn(s,l<0?0:l,C)):[]}function mC(s,l){return s&&s.length?Na(s,We(l,3),!1,!0):[]}function EC(s,l){return s&&s.length?Na(s,We(l,3)):[]}var CC=lt(function(s){return oo(rn(s,1,zt,!0))}),bC=lt(function(s){var l=Vn(s);return zt(l)&&(l=n),oo(rn(s,1,zt,!0),We(l,2))}),IC=lt(function(s){var l=Vn(s);return l=typeof l=="function"?l:n,oo(rn(s,1,zt,!0),n,l)});function wC(s){return s&&s.length?oo(s):[]}function yC(s,l){return s&&s.length?oo(s,We(l,2)):[]}function OC(s,l){return l=typeof l=="function"?l:n,s&&s.length?oo(s,n,l):[]}function ru(s){if(!(s&&s.length))return[];var l=0;return s=Jr(s,function(p){if(zt(p))return l=Xt(p.length,l),!0}),Cc(l,function(p){return Ut(s,pc(p))})}function wg(s,l){if(!(s&&s.length))return[];var p=ru(s);return l==null?p:Ut(p,function(C){return Rn(l,n,C)})}var AC=lt(function(s,l){return zt(s)?is(s,l):[]}),xC=lt(function(s){return Bc(Jr(s,zt))}),LC=lt(function(s){var l=Vn(s);return zt(l)&&(l=n),Bc(Jr(s,zt),We(l,2))}),NC=lt(function(s){var l=Vn(s);return l=typeof l=="function"?l:n,Bc(Jr(s,zt),n,l)}),RC=lt(ru);function SC(s,l){return Bf(s||[],l||[],os)}function DC(s,l){return Bf(s||[],l||[],ls)}var TC=lt(function(s){var l=s.length,p=l>1?s[l-1]:n;return p=typeof p=="function"?(s.pop(),p):n,wg(s,p)});function yg(s){var l=R(s);return l.__chain__=!0,l}function kC(s,l){return l(s),s}function Fa(s,l){return l(s)}var MC=Gr(function(s){var l=s.length,p=l?s[0]:0,C=this.__wrapped__,y=function(D){return Lc(D,s)};return l>1||this.__actions__.length||!(C instanceof dt)||!Ur(p)?this.thru(y):(C=C.slice(p,+p+(l?1:0)),C.__actions__.push({func:Fa,args:[y],thisArg:n}),new Yn(C,this.__chain__).thru(function(D){return l&&!D.length&&D.push(n),D}))});function GC(){return yg(this)}function UC(){return new Yn(this.value(),this.__chain__)}function FC(){this.__values__===n&&(this.__values__=Fg(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function $C(){return this}function PC(s){for(var l,p=this;p instanceof wa;){var C=pg(p);C.__index__=0,C.__values__=n,l?y.__wrapped__=C:l=C;var y=C;p=p.__wrapped__}return y.__wrapped__=s,l}function BC(){var s=this.__wrapped__;if(s instanceof dt){var l=s;return this.__actions__.length&&(l=new dt(this)),l=l.reverse(),l.__actions__.push({func:Fa,args:[nu],thisArg:n}),new Yn(l,this.__chain__)}return this.thru(nu)}function HC(){return Pf(this.__wrapped__,this.__actions__)}var WC=Ra(function(s,l,p){bt.call(s,p)?++s[p]:kr(s,p,1)});function zC(s,l,p){var C=nt(s)?Q_:kE;return p&&hn(s,l,p)&&(l=n),C(s,We(l,3))}function YC(s,l){var p=nt(s)?Jr:wf;return p(s,We(l,3))}var jC=Zf(mg),KC=Zf(Eg);function VC(s,l){return rn($a(s,l),1)}function XC(s,l){return rn($a(s,l),Le)}function qC(s,l,p){return p=p===n?1:it(p),rn($a(s,l),p)}function Og(s,l){var p=nt(s)?Wn:ro;return p(s,We(l,3))}function Ag(s,l){var p=nt(s)?h1:If;return p(s,We(l,3))}var ZC=Ra(function(s,l,p){bt.call(s,p)?s[p].push(l):kr(s,p,[l])});function QC(s,l,p,C){s=yn(s)?s:di(s),p=p&&!C?it(p):0;var y=s.length;return p<0&&(p=Xt(y+p,0)),za(s)?p<=y&&s.indexOf(l,p)>-1:!!y&&Jo(s,l,p)>-1}var JC=lt(function(s,l,p){var C=-1,y=typeof l=="function",D=yn(s)?re(s.length):[];return ro(s,function(P){D[++C]=y?Rn(l,P,p):ss(P,l,p)}),D}),eb=Ra(function(s,l,p){kr(s,p,l)});function $a(s,l){var p=nt(s)?Ut:Nf;return p(s,We(l,3))}function tb(s,l,p,C){return s==null?[]:(nt(l)||(l=l==null?[]:[l]),p=C?n:p,nt(p)||(p=p==null?[]:[p]),Tf(s,l,p))}var nb=Ra(function(s,l,p){s[p?0:1].push(l)},function(){return[[],[]]});function rb(s,l,p){var C=nt(s)?hc:nf,y=arguments.length<3;return C(s,We(l,4),p,y,ro)}function ob(s,l,p){var C=nt(s)?v1:nf,y=arguments.length<3;return C(s,We(l,4),p,y,If)}function ib(s,l){var p=nt(s)?Jr:wf;return p(s,Ha(We(l,3)))}function sb(s){var l=nt(s)?mf:QE;return l(s)}function ab(s,l,p){(p?hn(s,l,p):l===n)?l=1:l=it(l);var C=nt(s)?NE:JE;return C(s,l)}function lb(s){var l=nt(s)?RE:t0;return l(s)}function cb(s){if(s==null)return 0;if(yn(s))return za(s)?ti(s):s.length;var l=dn(s);return l==Oe||l==bn?s.size:kc(s).length}function ub(s,l,p){var C=nt(s)?vc:n0;return p&&hn(s,l,p)&&(l=n),C(s,We(l,3))}var db=lt(function(s,l){if(s==null)return[];var p=l.length;return p>1&&hn(s,l[0],l[1])?l=[]:p>2&&hn(l[0],l[1],l[2])&&(l=[l[0]]),Tf(s,rn(l,1),[])}),Pa=Y1||function(){return nn.Date.now()};function _b(s,l){if(typeof l!="function")throw new zn(a);return s=it(s),function(){if(--s<1)return l.apply(this,arguments)}}function xg(s,l,p){return l=p?n:l,l=s&&l==null?s.length:l,Mr(s,F,n,n,n,n,l)}function Lg(s,l){var p;if(typeof l!="function")throw new zn(a);return s=it(s),function(){return--s>0&&(p=l.apply(this,arguments)),s<=1&&(l=n),p}}var ou=lt(function(s,l,p){var C=b;if(p.length){var y=to(p,ci(ou));C|=$}return Mr(s,C,l,p,y)}),Ng=lt(function(s,l,p){var C=b|w;if(p.length){var y=to(p,ci(Ng));C|=$}return Mr(l,C,s,p,y)});function Rg(s,l,p){l=p?n:l;var C=Mr(s,T,n,n,n,n,n,l);return C.placeholder=Rg.placeholder,C}function Sg(s,l,p){l=p?n:l;var C=Mr(s,M,n,n,n,n,n,l);return C.placeholder=Sg.placeholder,C}function Dg(s,l,p){var C,y,D,P,z,q,de=0,_e=!1,he=!1,xe=!0;if(typeof s!="function")throw new zn(a);l=Xn(l)||0,$t(p)&&(_e=!!p.leading,he="maxWait"in p,D=he?Xt(Xn(p.maxWait)||0,l):D,xe="trailing"in p?!!p.trailing:xe);function Ue(Yt){var dr=C,Pr=y;return C=y=n,de=Yt,P=s.apply(Pr,dr),P}function ze(Yt){return de=Yt,z=ds(ut,l),_e?Ue(Yt):P}function st(Yt){var dr=Yt-q,Pr=Yt-de,Zg=l-dr;return he?un(Zg,D-Pr):Zg}function Ye(Yt){var dr=Yt-q,Pr=Yt-de;return q===n||dr>=l||dr<0||he&&Pr>=D}function ut(){var Yt=Pa();if(Ye(Yt))return ft(Yt);z=ds(ut,st(Yt))}function ft(Yt){return z=n,xe&&C?Ue(Yt):(C=y=n,P)}function kn(){z!==n&&Hf(z),de=0,C=q=y=z=n}function vn(){return z===n?P:ft(Pa())}function Mn(){var Yt=Pa(),dr=Ye(Yt);if(C=arguments,y=this,q=Yt,dr){if(z===n)return ze(q);if(he)return Hf(z),z=ds(ut,l),Ue(q)}return z===n&&(z=ds(ut,l)),P}return Mn.cancel=kn,Mn.flush=vn,Mn}var fb=lt(function(s,l){return bf(s,1,l)}),gb=lt(function(s,l,p){return bf(s,Xn(l)||0,p)});function hb(s){return Mr(s,te)}function Ba(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new zn(a);var p=function(){var C=arguments,y=l?l.apply(this,C):C[0],D=p.cache;if(D.has(y))return D.get(y);var P=s.apply(this,C);return p.cache=D.set(y,P)||D,P};return p.cache=new(Ba.Cache||Tr),p}Ba.Cache=Tr;function Ha(s){if(typeof s!="function")throw new zn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function vb(s){return Lg(2,s)}var pb=r0(function(s,l){l=l.length==1&&nt(l[0])?Ut(l[0],Sn(We())):Ut(rn(l,1),Sn(We()));var p=l.length;return lt(function(C){for(var y=-1,D=un(C.length,p);++y<D;)C[y]=l[y].call(this,C[y]);return Rn(s,this,C)})}),iu=lt(function(s,l){var p=to(l,ci(iu));return Mr(s,$,n,l,p)}),Tg=lt(function(s,l){var p=to(l,ci(Tg));return Mr(s,W,n,l,p)}),mb=Gr(function(s,l){return Mr(s,K,n,n,n,l)});function Eb(s,l){if(typeof s!="function")throw new zn(a);return l=l===n?l:it(l),lt(s,l)}function Cb(s,l){if(typeof s!="function")throw new zn(a);return l=l==null?0:Xt(it(l),0),lt(function(p){var C=p[l],y=so(p,0,l);return C&&eo(y,C),Rn(s,this,y)})}function bb(s,l,p){var C=!0,y=!0;if(typeof s!="function")throw new zn(a);return $t(p)&&(C="leading"in p?!!p.leading:C,y="trailing"in p?!!p.trailing:y),Dg(s,l,{leading:C,maxWait:l,trailing:y})}function Ib(s){return xg(s,1)}function wb(s,l){return iu(Wc(l),s)}function yb(){if(!arguments.length)return[];var s=arguments[0];return nt(s)?s:[s]}function Ob(s){return jn(s,m)}function Ab(s,l){return l=typeof l=="function"?l:n,jn(s,m,l)}function xb(s){return jn(s,v|m)}function Lb(s,l){return l=typeof l=="function"?l:n,jn(s,v|m,l)}function Nb(s,l){return l==null||Cf(s,l,Jt(l))}function ur(s,l){return s===l||s!==s&&l!==l}var Rb=ka(Sc),Sb=ka(function(s,l){return s>=l}),To=Af(function(){return arguments}())?Af:function(s){return Bt(s)&&bt.call(s,"callee")&&!_f.call(s,"callee")},nt=re.isArray,Db=j_?Sn(j_):PE;function yn(s){return s!=null&&Wa(s.length)&&!Fr(s)}function zt(s){return Bt(s)&&yn(s)}function Tb(s){return s===!0||s===!1||Bt(s)&&gn(s)==Er}var ao=K1||vu,kb=K_?Sn(K_):BE;function Mb(s){return Bt(s)&&s.nodeType===1&&!_s(s)}function Gb(s){if(s==null)return!0;if(yn(s)&&(nt(s)||typeof s=="string"||typeof s.splice=="function"||ao(s)||ui(s)||To(s)))return!s.length;var l=dn(s);if(l==Oe||l==bn)return!s.size;if(us(s))return!kc(s).length;for(var p in s)if(bt.call(s,p))return!1;return!0}function Ub(s,l){return as(s,l)}function Fb(s,l,p){p=typeof p=="function"?p:n;var C=p?p(s,l):n;return C===n?as(s,l,n,p):!!C}function su(s){if(!Bt(s))return!1;var l=gn(s);return l==Rr||l==Co||typeof s.message=="string"&&typeof s.name=="string"&&!_s(s)}function $b(s){return typeof s=="number"&&gf(s)}function Fr(s){if(!$t(s))return!1;var l=gn(s);return l==Sr||l==$e||l==tn||l==ra}function kg(s){return typeof s=="number"&&s==it(s)}function Wa(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=ye}function $t(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Bt(s){return s!=null&&typeof s=="object"}var Mg=V_?Sn(V_):WE;function Pb(s,l){return s===l||Tc(s,l,qc(l))}function Bb(s,l,p){return p=typeof p=="function"?p:n,Tc(s,l,qc(l),p)}function Hb(s){return Gg(s)&&s!=+s}function Wb(s){if(A0(s))throw new tt(i);return xf(s)}function zb(s){return s===null}function Yb(s){return s==null}function Gg(s){return typeof s=="number"||Bt(s)&&gn(s)==Ge}function _s(s){if(!Bt(s)||gn(s)!=Nt)return!1;var l=va(s);if(l===null)return!0;var p=bt.call(l,"constructor")&&l.constructor;return typeof p=="function"&&p instanceof p&&_a.call(p)==B1}var au=X_?Sn(X_):zE;function jb(s){return kg(s)&&s>=-9007199254740991&&s<=ye}var Ug=q_?Sn(q_):YE;function za(s){return typeof s=="string"||!nt(s)&&Bt(s)&&gn(s)==Io}function Tn(s){return typeof s=="symbol"||Bt(s)&&gn(s)==wo}var ui=Z_?Sn(Z_):jE;function Kb(s){return s===n}function Vb(s){return Bt(s)&&dn(s)==yo}function Xb(s){return Bt(s)&&gn(s)==nc}var qb=ka(Mc),Zb=ka(function(s,l){return s<=l});function Fg(s){if(!s)return[];if(yn(s))return za(s)?lr(s):wn(s);if(Ji&&s[Ji])return N1(s[Ji]());var l=dn(s),p=l==Oe?Ic:l==bn?ca:di;return p(s)}function $r(s){if(!s)return s===0?s:0;if(s=Xn(s),s===Le||s===-1/0){var l=s<0?-1:1;return l*Ce}return s===s?s:0}function it(s){var l=$r(s),p=l%1;return l===l?p?l-p:l:0}function $g(s){return s?No(it(s),0,et):0}function Xn(s){if(typeof s=="number")return s;if(Tn(s))return Xe;if($t(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=$t(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=rf(s);var p=Dm.test(s);return p||km.test(s)?_1(s.slice(2),p?2:8):Sm.test(s)?Xe:+s}function Pg(s){return Ir(s,On(s))}function Qb(s){return s?No(it(s),-9007199254740991,ye):s===0?s:0}function Ct(s){return s==null?"":Dn(s)}var Jb=ai(function(s,l){if(us(l)||yn(l)){Ir(l,Jt(l),s);return}for(var p in l)bt.call(l,p)&&os(s,p,l[p])}),Bg=ai(function(s,l){Ir(l,On(l),s)}),Ya=ai(function(s,l,p,C){Ir(l,On(l),s,C)}),eI=ai(function(s,l,p,C){Ir(l,Jt(l),s,C)}),tI=Gr(Lc);function nI(s,l){var p=si(s);return l==null?p:Ef(p,l)}var rI=lt(function(s,l){s=At(s);var p=-1,C=l.length,y=C>2?l[2]:n;for(y&&hn(l[0],l[1],y)&&(C=1);++p<C;)for(var D=l[p],P=On(D),z=-1,q=P.length;++z<q;){var de=P[z],_e=s[de];(_e===n||ur(_e,ri[de])&&!bt.call(s,de))&&(s[de]=D[de])}return s}),oI=lt(function(s){return s.push(n,og),Rn(Hg,n,s)});function iI(s,l){return J_(s,We(l,3),br)}function sI(s,l){return J_(s,We(l,3),Rc)}function aI(s,l){return s==null?s:Nc(s,We(l,3),On)}function lI(s,l){return s==null?s:yf(s,We(l,3),On)}function cI(s,l){return s&&br(s,We(l,3))}function uI(s,l){return s&&Rc(s,We(l,3))}function dI(s){return s==null?[]:Aa(s,Jt(s))}function _I(s){return s==null?[]:Aa(s,On(s))}function lu(s,l,p){var C=s==null?n:Ro(s,l);return C===n?p:C}function fI(s,l){return s!=null&&ag(s,l,GE)}function cu(s,l){return s!=null&&ag(s,l,UE)}var gI=Jf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=fa.call(l)),s[l]=p},du(An)),hI=Jf(function(s,l,p){l!=null&&typeof l.toString!="function"&&(l=fa.call(l)),bt.call(s,l)?s[l].push(p):s[l]=[p]},We),vI=lt(ss);function Jt(s){return yn(s)?pf(s):kc(s)}function On(s){return yn(s)?pf(s,!0):KE(s)}function pI(s,l){var p={};return l=We(l,3),br(s,function(C,y,D){kr(p,l(C,y,D),C)}),p}function mI(s,l){var p={};return l=We(l,3),br(s,function(C,y,D){kr(p,y,l(C,y,D))}),p}var EI=ai(function(s,l,p){xa(s,l,p)}),Hg=ai(function(s,l,p,C){xa(s,l,p,C)}),CI=Gr(function(s,l){var p={};if(s==null)return p;var C=!1;l=Ut(l,function(D){return D=io(D,s),C||(C=D.length>1),D}),Ir(s,Vc(s),p),C&&(p=jn(p,v|h|m,g0));for(var y=l.length;y--;)Pc(p,l[y]);return p});function bI(s,l){return Wg(s,Ha(We(l)))}var II=Gr(function(s,l){return s==null?{}:XE(s,l)});function Wg(s,l){if(s==null)return{};var p=Ut(Vc(s),function(C){return[C]});return l=We(l),kf(s,p,function(C,y){return l(C,y[0])})}function wI(s,l,p){l=io(l,s);var C=-1,y=l.length;for(y||(y=1,s=n);++C<y;){var D=s==null?n:s[wr(l[C])];D===n&&(C=y,D=p),s=Fr(D)?D.call(s):D}return s}function yI(s,l,p){return s==null?s:ls(s,l,p)}function OI(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:ls(s,l,p,C)}var zg=ng(Jt),Yg=ng(On);function AI(s,l,p){var C=nt(s),y=C||ao(s)||ui(s);if(l=We(l,4),p==null){var D=s&&s.constructor;y?p=C?new D:[]:$t(s)?p=Fr(D)?si(va(s)):{}:p={}}return(y?Wn:br)(s,function(P,z,q){return l(p,P,z,q)}),p}function xI(s,l){return s==null?!0:Pc(s,l)}function LI(s,l,p){return s==null?s:$f(s,l,Wc(p))}function NI(s,l,p,C){return C=typeof C=="function"?C:n,s==null?s:$f(s,l,Wc(p),C)}function di(s){return s==null?[]:bc(s,Jt(s))}function RI(s){return s==null?[]:bc(s,On(s))}function SI(s,l,p){return p===n&&(p=l,l=n),p!==n&&(p=Xn(p),p=p===p?p:0),l!==n&&(l=Xn(l),l=l===l?l:0),No(Xn(s),l,p)}function DI(s,l,p){return l=$r(l),p===n?(p=l,l=0):p=$r(p),s=Xn(s),FE(s,l,p)}function TI(s,l,p){if(p&&typeof p!="boolean"&&hn(s,l,p)&&(l=p=n),p===n&&(typeof l=="boolean"?(p=l,l=n):typeof s=="boolean"&&(p=s,s=n)),s===n&&l===n?(s=0,l=1):(s=$r(s),l===n?(l=s,s=0):l=$r(l)),s>l){var C=s;s=l,l=C}if(p||s%1||l%1){var y=hf();return un(s+y*(l-s+d1("1e-"+((y+"").length-1))),l)}return Uc(s,l)}var kI=li(function(s,l,p){return l=l.toLowerCase(),s+(p?jg(l):l)});function jg(s){return uu(Ct(s).toLowerCase())}function Kg(s){return s=Ct(s),s&&s.replace(Gm,y1).replace(t1,"")}function MI(s,l,p){s=Ct(s),l=Dn(l);var C=s.length;p=p===n?C:No(it(p),0,C);var y=p;return p-=l.length,p>=0&&s.slice(p,y)==l}function GI(s){return s=Ct(s),s&&vm.test(s)?s.replace(w_,O1):s}function UI(s){return s=Ct(s),s&&Im.test(s)?s.replace(ic,"\\$&"):s}var FI=li(function(s,l,p){return s+(p?"-":"")+l.toLowerCase()}),$I=li(function(s,l,p){return s+(p?" ":"")+l.toLowerCase()}),PI=qf("toLowerCase");function BI(s,l,p){s=Ct(s),l=it(l);var C=l?ti(s):0;if(!l||C>=l)return s;var y=(l-C)/2;return Ta(Ca(y),p)+s+Ta(Ea(y),p)}function HI(s,l,p){s=Ct(s),l=it(l);var C=l?ti(s):0;return l&&C<l?s+Ta(l-C,p):s}function WI(s,l,p){s=Ct(s),l=it(l);var C=l?ti(s):0;return l&&C<l?Ta(l-C,p)+s:s}function zI(s,l,p){return p||l==null?l=0:l&&(l=+l),Z1(Ct(s).replace(sc,""),l||0)}function YI(s,l,p){return(p?hn(s,l,p):l===n)?l=1:l=it(l),Fc(Ct(s),l)}function jI(){var s=arguments,l=Ct(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var KI=li(function(s,l,p){return s+(p?"_":"")+l.toLowerCase()});function VI(s,l,p){return p&&typeof p!="number"&&hn(s,l,p)&&(l=p=n),p=p===n?et:p>>>0,p?(s=Ct(s),s&&(typeof l=="string"||l!=null&&!au(l))&&(l=Dn(l),!l&&ei(s))?so(lr(s),0,p):s.split(l,p)):[]}var XI=li(function(s,l,p){return s+(p?" ":"")+uu(l)});function qI(s,l,p){return s=Ct(s),p=p==null?0:No(it(p),0,s.length),l=Dn(l),s.slice(p,p+l.length)==l}function ZI(s,l,p){var C=R.templateSettings;p&&hn(s,l,p)&&(l=n),s=Ct(s),l=Ya({},l,C,rg);var y=Ya({},l.imports,C.imports,rg),D=Jt(y),P=bc(y,D),z,q,de=0,_e=l.interpolate||oa,he="__p += '",xe=wc((l.escape||oa).source+"|"+_e.source+"|"+(_e===y_?Rm:oa).source+"|"+(l.evaluate||oa).source+"|$","g"),Ue="//# sourceURL="+(bt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++s1+"]")+`
`;s.replace(xe,function(Ye,ut,ft,kn,vn,Mn){return ft||(ft=kn),he+=s.slice(de,Mn).replace(Um,A1),ut&&(z=!0,he+=`' +
__e(`+ut+`) +
'`),vn&&(q=!0,he+=`';
`+vn+`;
__p += '`),ft&&(he+=`' +
((__t = (`+ft+`)) == null ? '' : __t) +
'`),de=Mn+Ye.length,Ye}),he+=`';
`;var ze=bt.call(l,"variable")&&l.variable;if(!ze)he=`with (obj) {
`+he+`
}
`;else if(Lm.test(ze))throw new tt(c);he=(q?he.replace(_m,""):he).replace(fm,"$1").replace(gm,"$1;"),he="function("+(ze||"obj")+`) {
`+(ze?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var st=Xg(function(){return pt(D,Ue+"return "+he).apply(n,P)});if(st.source=he,su(st))throw st;return st}function QI(s){return Ct(s).toLowerCase()}function JI(s){return Ct(s).toUpperCase()}function ew(s,l,p){if(s=Ct(s),s&&(p||l===n))return rf(s);if(!s||!(l=Dn(l)))return s;var C=lr(s),y=lr(l),D=of(C,y),P=sf(C,y)+1;return so(C,D,P).join("")}function tw(s,l,p){if(s=Ct(s),s&&(p||l===n))return s.slice(0,lf(s)+1);if(!s||!(l=Dn(l)))return s;var C=lr(s),y=sf(C,lr(l))+1;return so(C,0,y).join("")}function nw(s,l,p){if(s=Ct(s),s&&(p||l===n))return s.replace(sc,"");if(!s||!(l=Dn(l)))return s;var C=lr(s),y=of(C,lr(l));return so(C,y).join("")}function rw(s,l){var p=se,C=Z;if($t(l)){var y="separator"in l?l.separator:y;p="length"in l?it(l.length):p,C="omission"in l?Dn(l.omission):C}s=Ct(s);var D=s.length;if(ei(s)){var P=lr(s);D=P.length}if(p>=D)return s;var z=p-ti(C);if(z<1)return C;var q=P?so(P,0,z).join(""):s.slice(0,z);if(y===n)return q+C;if(P&&(z+=q.length-z),au(y)){if(s.slice(z).search(y)){var de,_e=q;for(y.global||(y=wc(y.source,Ct(O_.exec(y))+"g")),y.lastIndex=0;de=y.exec(_e);)var he=de.index;q=q.slice(0,he===n?z:he)}}else if(s.indexOf(Dn(y),z)!=z){var xe=q.lastIndexOf(y);xe>-1&&(q=q.slice(0,xe))}return q+C}function ow(s){return s=Ct(s),s&&hm.test(s)?s.replace(I_,T1):s}var iw=li(function(s,l,p){return s+(p?" ":"")+l.toUpperCase()}),uu=qf("toUpperCase");function Vg(s,l,p){return s=Ct(s),l=p?n:l,l===n?L1(s)?G1(s):E1(s):s.match(l)||[]}var Xg=lt(function(s,l){try{return Rn(s,n,l)}catch(p){return su(p)?p:new tt(p)}}),sw=Gr(function(s,l){return Wn(l,function(p){p=wr(p),kr(s,p,ou(s[p],s))}),s});function aw(s){var l=s==null?0:s.length,p=We();return s=l?Ut(s,function(C){if(typeof C[1]!="function")throw new zn(a);return[p(C[0]),C[1]]}):[],lt(function(C){for(var y=-1;++y<l;){var D=s[y];if(Rn(D[0],this,C))return Rn(D[1],this,C)}})}function lw(s){return TE(jn(s,v))}function du(s){return function(){return s}}function cw(s,l){return s==null||s!==s?l:s}var uw=Qf(),dw=Qf(!0);function An(s){return s}function _u(s){return Lf(typeof s=="function"?s:jn(s,v))}function _w(s){return Rf(jn(s,v))}function fw(s,l){return Sf(s,jn(l,v))}var gw=lt(function(s,l){return function(p){return ss(p,s,l)}}),hw=lt(function(s,l){return function(p){return ss(s,p,l)}});function fu(s,l,p){var C=Jt(l),y=Aa(l,C);p==null&&!($t(l)&&(y.length||!C.length))&&(p=l,l=s,s=this,y=Aa(l,Jt(l)));var D=!($t(p)&&"chain"in p)||!!p.chain,P=Fr(s);return Wn(y,function(z){var q=l[z];s[z]=q,P&&(s.prototype[z]=function(){var de=this.__chain__;if(D||de){var _e=s(this.__wrapped__),he=_e.__actions__=wn(this.__actions__);return he.push({func:q,args:arguments,thisArg:s}),_e.__chain__=de,_e}return q.apply(s,eo([this.value()],arguments))})}),s}function vw(){return nn._===this&&(nn._=H1),this}function gu(){}function pw(s){return s=it(s),lt(function(l){return Df(l,s)})}var mw=Yc(Ut),Ew=Yc(Q_),Cw=Yc(vc);function qg(s){return Qc(s)?pc(wr(s)):qE(s)}function bw(s){return function(l){return s==null?n:Ro(s,l)}}var Iw=eg(),ww=eg(!0);function hu(){return[]}function vu(){return!1}function yw(){return{}}function Ow(){return""}function Aw(){return!0}function xw(s,l){if(s=it(s),s<1||s>ye)return[];var p=et,C=un(s,et);l=We(l),s-=et;for(var y=Cc(C,l);++p<s;)l(p);return y}function Lw(s){return nt(s)?Ut(s,wr):Tn(s)?[s]:wn(vg(Ct(s)))}function Nw(s){var l=++P1;return Ct(s)+l}var Rw=Da(function(s,l){return s+l},0),Sw=jc("ceil"),Dw=Da(function(s,l){return s/l},1),Tw=jc("floor");function kw(s){return s&&s.length?Oa(s,An,Sc):n}function Mw(s,l){return s&&s.length?Oa(s,We(l,2),Sc):n}function Gw(s){return tf(s,An)}function Uw(s,l){return tf(s,We(l,2))}function Fw(s){return s&&s.length?Oa(s,An,Mc):n}function $w(s,l){return s&&s.length?Oa(s,We(l,2),Mc):n}var Pw=Da(function(s,l){return s*l},1),Bw=jc("round"),Hw=Da(function(s,l){return s-l},0);function Ww(s){return s&&s.length?Ec(s,An):0}function zw(s,l){return s&&s.length?Ec(s,We(l,2)):0}return R.after=_b,R.ary=xg,R.assign=Jb,R.assignIn=Bg,R.assignInWith=Ya,R.assignWith=eI,R.at=tI,R.before=Lg,R.bind=ou,R.bindAll=sw,R.bindKey=Ng,R.castArray=yb,R.chain=yg,R.chunk=T0,R.compact=k0,R.concat=M0,R.cond=aw,R.conforms=lw,R.constant=du,R.countBy=WC,R.create=nI,R.curry=Rg,R.curryRight=Sg,R.debounce=Dg,R.defaults=rI,R.defaultsDeep=oI,R.defer=fb,R.delay=gb,R.difference=G0,R.differenceBy=U0,R.differenceWith=F0,R.drop=$0,R.dropRight=P0,R.dropRightWhile=B0,R.dropWhile=H0,R.fill=W0,R.filter=YC,R.flatMap=VC,R.flatMapDeep=XC,R.flatMapDepth=qC,R.flatten=Cg,R.flattenDeep=z0,R.flattenDepth=Y0,R.flip=hb,R.flow=uw,R.flowRight=dw,R.fromPairs=j0,R.functions=dI,R.functionsIn=_I,R.groupBy=ZC,R.initial=V0,R.intersection=X0,R.intersectionBy=q0,R.intersectionWith=Z0,R.invert=gI,R.invertBy=hI,R.invokeMap=JC,R.iteratee=_u,R.keyBy=eb,R.keys=Jt,R.keysIn=On,R.map=$a,R.mapKeys=pI,R.mapValues=mI,R.matches=_w,R.matchesProperty=fw,R.memoize=Ba,R.merge=EI,R.mergeWith=Hg,R.method=gw,R.methodOf=hw,R.mixin=fu,R.negate=Ha,R.nthArg=pw,R.omit=CI,R.omitBy=bI,R.once=vb,R.orderBy=tb,R.over=mw,R.overArgs=pb,R.overEvery=Ew,R.overSome=Cw,R.partial=iu,R.partialRight=Tg,R.partition=nb,R.pick=II,R.pickBy=Wg,R.property=qg,R.propertyOf=bw,R.pull=tC,R.pullAll=Ig,R.pullAllBy=nC,R.pullAllWith=rC,R.pullAt=oC,R.range=Iw,R.rangeRight=ww,R.rearg=mb,R.reject=ib,R.remove=iC,R.rest=Eb,R.reverse=nu,R.sampleSize=ab,R.set=yI,R.setWith=OI,R.shuffle=lb,R.slice=sC,R.sortBy=db,R.sortedUniq=fC,R.sortedUniqBy=gC,R.split=VI,R.spread=Cb,R.tail=hC,R.take=vC,R.takeRight=pC,R.takeRightWhile=mC,R.takeWhile=EC,R.tap=kC,R.throttle=bb,R.thru=Fa,R.toArray=Fg,R.toPairs=zg,R.toPairsIn=Yg,R.toPath=Lw,R.toPlainObject=Pg,R.transform=AI,R.unary=Ib,R.union=CC,R.unionBy=bC,R.unionWith=IC,R.uniq=wC,R.uniqBy=yC,R.uniqWith=OC,R.unset=xI,R.unzip=ru,R.unzipWith=wg,R.update=LI,R.updateWith=NI,R.values=di,R.valuesIn=RI,R.without=AC,R.words=Vg,R.wrap=wb,R.xor=xC,R.xorBy=LC,R.xorWith=NC,R.zip=RC,R.zipObject=SC,R.zipObjectDeep=DC,R.zipWith=TC,R.entries=zg,R.entriesIn=Yg,R.extend=Bg,R.extendWith=Ya,fu(R,R),R.add=Rw,R.attempt=Xg,R.camelCase=kI,R.capitalize=jg,R.ceil=Sw,R.clamp=SI,R.clone=Ob,R.cloneDeep=xb,R.cloneDeepWith=Lb,R.cloneWith=Ab,R.conformsTo=Nb,R.deburr=Kg,R.defaultTo=cw,R.divide=Dw,R.endsWith=MI,R.eq=ur,R.escape=GI,R.escapeRegExp=UI,R.every=zC,R.find=jC,R.findIndex=mg,R.findKey=iI,R.findLast=KC,R.findLastIndex=Eg,R.findLastKey=sI,R.floor=Tw,R.forEach=Og,R.forEachRight=Ag,R.forIn=aI,R.forInRight=lI,R.forOwn=cI,R.forOwnRight=uI,R.get=lu,R.gt=Rb,R.gte=Sb,R.has=fI,R.hasIn=cu,R.head=bg,R.identity=An,R.includes=QC,R.indexOf=K0,R.inRange=DI,R.invoke=vI,R.isArguments=To,R.isArray=nt,R.isArrayBuffer=Db,R.isArrayLike=yn,R.isArrayLikeObject=zt,R.isBoolean=Tb,R.isBuffer=ao,R.isDate=kb,R.isElement=Mb,R.isEmpty=Gb,R.isEqual=Ub,R.isEqualWith=Fb,R.isError=su,R.isFinite=$b,R.isFunction=Fr,R.isInteger=kg,R.isLength=Wa,R.isMap=Mg,R.isMatch=Pb,R.isMatchWith=Bb,R.isNaN=Hb,R.isNative=Wb,R.isNil=Yb,R.isNull=zb,R.isNumber=Gg,R.isObject=$t,R.isObjectLike=Bt,R.isPlainObject=_s,R.isRegExp=au,R.isSafeInteger=jb,R.isSet=Ug,R.isString=za,R.isSymbol=Tn,R.isTypedArray=ui,R.isUndefined=Kb,R.isWeakMap=Vb,R.isWeakSet=Xb,R.join=Q0,R.kebabCase=FI,R.last=Vn,R.lastIndexOf=J0,R.lowerCase=$I,R.lowerFirst=PI,R.lt=qb,R.lte=Zb,R.max=kw,R.maxBy=Mw,R.mean=Gw,R.meanBy=Uw,R.min=Fw,R.minBy=$w,R.stubArray=hu,R.stubFalse=vu,R.stubObject=yw,R.stubString=Ow,R.stubTrue=Aw,R.multiply=Pw,R.nth=eC,R.noConflict=vw,R.noop=gu,R.now=Pa,R.pad=BI,R.padEnd=HI,R.padStart=WI,R.parseInt=zI,R.random=TI,R.reduce=rb,R.reduceRight=ob,R.repeat=YI,R.replace=jI,R.result=wI,R.round=Bw,R.runInContext=V,R.sample=sb,R.size=cb,R.snakeCase=KI,R.some=ub,R.sortedIndex=aC,R.sortedIndexBy=lC,R.sortedIndexOf=cC,R.sortedLastIndex=uC,R.sortedLastIndexBy=dC,R.sortedLastIndexOf=_C,R.startCase=XI,R.startsWith=qI,R.subtract=Hw,R.sum=Ww,R.sumBy=zw,R.template=ZI,R.times=xw,R.toFinite=$r,R.toInteger=it,R.toLength=$g,R.toLower=QI,R.toNumber=Xn,R.toSafeInteger=Qb,R.toString=Ct,R.toUpper=JI,R.trim=ew,R.trimEnd=tw,R.trimStart=nw,R.truncate=rw,R.unescape=ow,R.uniqueId=Nw,R.upperCase=iw,R.upperFirst=uu,R.each=Og,R.eachRight=Ag,R.first=bg,fu(R,function(){var s={};return br(R,function(l,p){bt.call(R.prototype,p)||(s[p]=l)}),s}(),{chain:!1}),R.VERSION=r,Wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){R[s].placeholder=R}),Wn(["drop","take"],function(s,l){dt.prototype[s]=function(p){p=p===n?1:Xt(it(p),0);var C=this.__filtered__&&!l?new dt(this):this.clone();return C.__filtered__?C.__takeCount__=un(p,C.__takeCount__):C.__views__.push({size:un(p,et),type:s+(C.__dir__<0?"Right":"")}),C},dt.prototype[s+"Right"]=function(p){return this.reverse()[s](p).reverse()}}),Wn(["filter","map","takeWhile"],function(s,l){var p=l+1,C=p==ie||p==Ae;dt.prototype[s]=function(y){var D=this.clone();return D.__iteratees__.push({iteratee:We(y,3),type:p}),D.__filtered__=D.__filtered__||C,D}}),Wn(["head","last"],function(s,l){var p="take"+(l?"Right":"");dt.prototype[s]=function(){return this[p](1).value()[0]}}),Wn(["initial","tail"],function(s,l){var p="drop"+(l?"":"Right");dt.prototype[s]=function(){return this.__filtered__?new dt(this):this[p](1)}}),dt.prototype.compact=function(){return this.filter(An)},dt.prototype.find=function(s){return this.filter(s).head()},dt.prototype.findLast=function(s){return this.reverse().find(s)},dt.prototype.invokeMap=lt(function(s,l){return typeof s=="function"?new dt(this):this.map(function(p){return ss(p,s,l)})}),dt.prototype.reject=function(s){return this.filter(Ha(We(s)))},dt.prototype.slice=function(s,l){s=it(s);var p=this;return p.__filtered__&&(s>0||l<0)?new dt(p):(s<0?p=p.takeRight(-s):s&&(p=p.drop(s)),l!==n&&(l=it(l),p=l<0?p.dropRight(-l):p.take(l-s)),p)},dt.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},dt.prototype.toArray=function(){return this.take(et)},br(dt.prototype,function(s,l){var p=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),y=R[C?"take"+(l=="last"?"Right":""):l],D=C||/^find/.test(l);y&&(R.prototype[l]=function(){var P=this.__wrapped__,z=C?[1]:arguments,q=P instanceof dt,de=z[0],_e=q||nt(P),he=function(ut){var ft=y.apply(R,eo([ut],z));return C&&xe?ft[0]:ft};_e&&p&&typeof de=="function"&&de.length!=1&&(q=_e=!1);var xe=this.__chain__,Ue=!!this.__actions__.length,ze=D&&!xe,st=q&&!Ue;if(!D&&_e){P=st?P:new dt(this);var Ye=s.apply(P,z);return Ye.__actions__.push({func:Fa,args:[he],thisArg:n}),new Yn(Ye,xe)}return ze&&st?s.apply(this,z):(Ye=this.thru(he),ze?C?Ye.value()[0]:Ye.value():Ye)})}),Wn(["pop","push","shift","sort","splice","unshift"],function(s){var l=ua[s],p=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);R.prototype[s]=function(){var y=arguments;if(C&&!this.__chain__){var D=this.value();return l.apply(nt(D)?D:[],y)}return this[p](function(P){return l.apply(nt(P)?P:[],y)})}}),br(dt.prototype,function(s,l){var p=R[l];if(p){var C=p.name+"";bt.call(ii,C)||(ii[C]=[]),ii[C].push({name:l,func:p})}}),ii[Sa(n,w).name]=[{name:"wrapper",func:n}],dt.prototype.clone=oE,dt.prototype.reverse=iE,dt.prototype.value=sE,R.prototype.at=MC,R.prototype.chain=GC,R.prototype.commit=UC,R.prototype.next=FC,R.prototype.plant=PC,R.prototype.reverse=BC,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=HC,R.prototype.first=R.prototype.head,Ji&&(R.prototype[Ji]=$C),R},ni=U1();Oo?((Oo.exports=ni)._=ni,_c._=ni):nn._=ni}).call(aS)}(ms,ms.exports)),ms.exports}var Lt=lS();function Wr(t){return Array.isArray?Array.isArray(t):Fv(t)==="[object Array]"}function cS(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function uS(t){return t==null?"":cS(t)}function Ar(t){return typeof t=="string"}function Gv(t){return typeof t=="number"}function dS(t){return t===!0||t===!1||_S(t)&&Fv(t)=="[object Boolean]"}function Uv(t){return typeof t=="object"}function _S(t){return Uv(t)&&t!==null}function Un(t){return t!=null}function Iu(t){return!t.trim().length}function Fv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const fS="Incorrect 'index' type",gS=t=>`Invalid value for key ${t}`,hS=t=>`Pattern length exceeds max of ${t}.`,vS=t=>`Missing ${t} property in key`,pS=t=>`Property 'weight' in key '${t}' must be a positive integer`,ch=Object.prototype.hasOwnProperty;class mS{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let o=$v(r);this._keys.push(o),this._keyMap[o.id]=o,n+=o.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function $v(t){let e=null,n=null,r=null,o=1,i=null;if(Ar(t)||Wr(t))r=t,e=uh(t),n=Wu(t);else{if(!ch.call(t,"name"))throw new Error(vS("name"));const a=t.name;if(r=a,ch.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(pS(a));e=uh(a),n=Wu(a),i=t.getFn}return{path:e,id:n,weight:o,src:r,getFn:i}}function uh(t){return Wr(t)?t:t.split(".")}function Wu(t){return Wr(t)?t.join("."):t}function ES(t,e){let n=[],r=!1;const o=(i,a,c)=>{if(Un(i))if(!a[c])n.push(i);else{let u=a[c];const f=i[u];if(!Un(f))return;if(c===a.length-1&&(Ar(f)||Gv(f)||dS(f)))n.push(uS(f));else if(Wr(f)){r=!0;for(let g=0,v=f.length;g<v;g+=1)o(f[g],a,c+1)}else a.length&&o(f,a,c+1)}};return o(t,Ar(e)?e.split("."):e,0),r?n:n[0]}const CS={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},bS={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},IS={location:0,threshold:.6,distance:100},wS={useExtendedSearch:!1,getFn:ES,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ze={...bS,...CS,...IS,...wS};const yS=/[^ ]+/g;function OS(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(o){const i=o.match(yS).length;if(n.has(i))return n.get(i);const a=1/Math.pow(i,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(i,c),c},clear(){n.clear()}}}class Hd{constructor({getFn:e=Ze.getFn,fieldNormWeight:n=Ze.fieldNormWeight}={}){this.norm=OS(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Ar(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Ar(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Un(e)||Iu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((o,i)=>{let a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Un(a)){if(Wr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:g}=u.pop();if(Un(g))if(Ar(g)&&!Iu(g)){let v={v:g,i:f,n:this.norm.get(g)};c.push(v)}else Wr(g)&&g.forEach((v,h)=>{u.push({nestedArrIndex:h,value:v})})}r.$[i]=c}else if(Ar(a)&&!Iu(a)){let c={v:a,n:this.norm.get(a)};r.$[i]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Pv(t,e,{getFn:n=Ze.getFn,fieldNormWeight:r=Ze.fieldNormWeight}={}){const o=new Hd({getFn:n,fieldNormWeight:r});return o.setKeys(t.map($v)),o.setSources(e),o.create(),o}function AS(t,{getFn:e=Ze.getFn,fieldNormWeight:n=Ze.fieldNormWeight}={}){const{keys:r,records:o}=t,i=new Hd({getFn:e,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(o),i}function Va(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:o=Ze.distance,ignoreLocation:i=Ze.ignoreLocation}={}){const a=e/t.length;if(i)return a;const c=Math.abs(r-n);return o?a+c/o:c?1:a}function xS(t=[],e=Ze.minMatchCharLength){let n=[],r=-1,o=-1,i=0;for(let a=t.length;i<a;i+=1){let c=t[i];c&&r===-1?r=i:!c&&r!==-1&&(o=i-1,o-r+1>=e&&n.push([r,o]),r=-1)}return t[i-1]&&i-r>=e&&n.push([r,i-1]),n}const Mo=32;function LS(t,e,n,{location:r=Ze.location,distance:o=Ze.distance,threshold:i=Ze.threshold,findAllMatches:a=Ze.findAllMatches,minMatchCharLength:c=Ze.minMatchCharLength,includeMatches:u=Ze.includeMatches,ignoreLocation:f=Ze.ignoreLocation}={}){if(e.length>Mo)throw new Error(hS(Mo));const g=e.length,v=t.length,h=Math.max(0,Math.min(r,v));let m=i,E=h;const I=c>1||u,b=I?Array(v):[];let w;for(;(w=t.indexOf(e,E))>-1;){let F=Va(e,{currentLocation:w,expectedLocation:h,distance:o,ignoreLocation:f});if(m=Math.min(F,m),E=w+g,I){let K=0;for(;K<g;)b[w+K]=1,K+=1}}E=-1;let x=[],T=1,M=g+v;const $=1<<g-1;for(let F=0;F<g;F+=1){let K=0,te=M;for(;K<te;)Va(e,{errors:F,currentLocation:h+te,expectedLocation:h,distance:o,ignoreLocation:f})<=m?K=te:M=te,te=Math.floor((M-K)/2+K);M=te;let se=Math.max(1,h-te+1),Z=a?v:Math.min(h+te,v)+g,ne=Array(Z+2);ne[Z+1]=(1<<F)-1;for(let ie=Z;ie>=se;ie-=1){let ve=ie-1,Ae=n[t.charAt(ve)];if(I&&(b[ve]=+!!Ae),ne[ie]=(ne[ie+1]<<1|1)&Ae,F&&(ne[ie]|=(x[ie+1]|x[ie])<<1|1|x[ie+1]),ne[ie]&$&&(T=Va(e,{errors:F,currentLocation:ve,expectedLocation:h,distance:o,ignoreLocation:f}),T<=m)){if(m=T,E=ve,E<=h)break;se=Math.max(1,2*h-E)}}if(Va(e,{errors:F+1,currentLocation:h,expectedLocation:h,distance:o,ignoreLocation:f})>m)break;x=ne}const W={isMatch:E>=0,score:Math.max(.001,T)};if(I){const F=xS(b,c);F.length?u&&(W.indices=F):W.isMatch=!1}return W}function NS(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const o=t.charAt(n);e[o]=(e[o]||0)|1<<r-n-1}return e}class Bv{constructor(e,{location:n=Ze.location,threshold:r=Ze.threshold,distance:o=Ze.distance,includeMatches:i=Ze.includeMatches,findAllMatches:a=Ze.findAllMatches,minMatchCharLength:c=Ze.minMatchCharLength,isCaseSensitive:u=Ze.isCaseSensitive,ignoreLocation:f=Ze.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:o,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(h,m)=>{this.chunks.push({pattern:h,alphabet:NS(h),startIndex:m})},v=this.pattern.length;if(v>Mo){let h=0;const m=v%Mo,E=v-m;for(;h<E;)g(this.pattern.substr(h,Mo),h),h+=Mo;if(m){const I=v-Mo;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:o,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options;let g=[],v=0,h=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:w,score:x,indices:T}=LS(e,E,I,{location:o+b,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});w&&(h=!0),v+=x,w&&T&&(g=[...g,...T])});let m={isMatch:h,score:h?v/this.chunks.length:1};return h&&r&&(m.indices=g),m}}class mo{constructor(e){this.pattern=e}static isMultiMatch(e){return dh(e,this.multiRegex)}static isSingleMatch(e){return dh(e,this.singleRegex)}search(){}}function dh(t,e){const n=t.match(e);return n?n[1]:null}class RS extends mo{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class SS extends mo{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class DS extends mo{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class TS extends mo{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class kS extends mo{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class MS extends mo{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Hv extends mo{constructor(e,{location:n=Ze.location,threshold:r=Ze.threshold,distance:o=Ze.distance,includeMatches:i=Ze.includeMatches,findAllMatches:a=Ze.findAllMatches,minMatchCharLength:c=Ze.minMatchCharLength,isCaseSensitive:u=Ze.isCaseSensitive,ignoreLocation:f=Ze.ignoreLocation}={}){super(e),this._bitapSearch=new Bv(e,{location:n,threshold:r,distance:o,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Wv extends mo{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const o=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+i,o.push([r,n-1]);const a=!!o.length;return{isMatch:a,score:a?0:1,indices:o}}}const zu=[RS,Wv,DS,TS,MS,kS,SS,Hv],_h=zu.length,GS=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,US="|";function FS(t,e={}){return t.split(US).map(n=>{let r=n.trim().split(GS).filter(i=>i&&!!i.trim()),o=[];for(let i=0,a=r.length;i<a;i+=1){const c=r[i];let u=!1,f=-1;for(;!u&&++f<_h;){const g=zu[f];let v=g.isMultiMatch(c);v&&(o.push(new g(v,e)),u=!0)}if(!u)for(f=-1;++f<_h;){const g=zu[f];let v=g.isSingleMatch(c);if(v){o.push(new g(v,e));break}}}return o})}const $S=new Set([Hv.type,Wv.type]);class PS{constructor(e,{isCaseSensitive:n=Ze.isCaseSensitive,includeMatches:r=Ze.includeMatches,minMatchCharLength:o=Ze.minMatchCharLength,ignoreLocation:i=Ze.ignoreLocation,findAllMatches:a=Ze.findAllMatches,location:c=Ze.location,threshold:u=Ze.threshold,distance:f=Ze.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:o,findAllMatches:a,ignoreLocation:i,location:c,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=FS(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,a=[],c=0;for(let u=0,f=n.length;u<f;u+=1){const g=n[u];a.length=0,i=0;for(let v=0,h=g.length;v<h;v+=1){const m=g[v],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(i+=1,c+=b,r){const w=m.constructor.type;$S.has(w)?a=[...a,...I]:a.push(I)}}else{c=0,i=0,a.length=0;break}}if(i){let v={isMatch:!0,score:c/i};return r&&(v.indices=a),v}}return{isMatch:!1,score:1}}}const Yu=[];function BS(...t){Yu.push(...t)}function ju(t,e){for(let n=0,r=Yu.length;n<r;n+=1){let o=Yu[n];if(o.condition(t,e))return new o(t,e)}return new Bv(t,e)}const fl={AND:"$and",OR:"$or"},Ku={PATH:"$path",PATTERN:"$val"},Vu=t=>!!(t[fl.AND]||t[fl.OR]),HS=t=>!!t[Ku.PATH],WS=t=>!Wr(t)&&Uv(t)&&!Vu(t),fh=t=>({[fl.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function zv(t,e,{auto:n=!0}={}){const r=o=>{let i=Object.keys(o);const a=HS(o);if(!a&&i.length>1&&!Vu(o))return r(fh(o));if(WS(o)){const u=a?o[Ku.PATH]:i[0],f=a?o[Ku.PATTERN]:o[u];if(!Ar(f))throw new Error(gS(u));const g={keyId:Wu(u),pattern:f};return n&&(g.searcher=ju(f,e)),g}let c={children:[],operator:i[0]};return i.forEach(u=>{const f=o[u];Wr(f)&&f.forEach(g=>{c.children.push(r(g))})}),c};return Vu(t)||(t=fh(t)),r(t)}function zS(t,{ignoreFieldNorm:e=Ze.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:o,norm:i,score:a})=>{const c=o?o.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:i))}),n.score=r})}function YS(t,e){const n=t.matches;e.matches=[],Un(n)&&n.forEach(r=>{if(!Un(r.indices)||!r.indices.length)return;const{indices:o,value:i}=r;let a={indices:o,value:i};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function jS(t,e){e.score=t.score}function KS(t,e,{includeMatches:n=Ze.includeMatches,includeScore:r=Ze.includeScore}={}){const o=[];return n&&o.push(YS),r&&o.push(jS),t.map(i=>{const{idx:a}=i,c={item:e[a],refIndex:a};return o.length&&o.forEach(u=>{u(i,c)}),c})}class Ui{constructor(e,n={},r){this.options={...Ze,...n},this.options.useExtendedSearch,this._keyStore=new mS(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Hd))throw new Error(fS);this._myIndex=n||Pv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Un(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,o=this._docs.length;r<o;r+=1){const i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,o-=1,n.push(i))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:o,shouldSort:i,sortFn:a,ignoreFieldNorm:c}=this.options;let u=Ar(e)?Ar(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return zS(u,{ignoreFieldNorm:c}),i&&u.sort(a),Gv(n)&&n>-1&&(u=u.slice(0,n)),KS(u,this._docs,{includeMatches:r,includeScore:o})}_searchStringList(e){const n=ju(e,this.options),{records:r}=this._myIndex,o=[];return r.forEach(({v:i,i:a,n:c})=>{if(!Un(i))return;const{isMatch:u,score:f,indices:g}=n.searchIn(i);u&&o.push({item:i,idx:a,matches:[{score:f,value:i,norm:c,indices:g}]})}),o}_searchLogical(e){const n=zv(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:v,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(v),value:this._myIndex.getValueForItemAtKeyId(u,v),searcher:h});return m&&m.length?[{idx:f,item:u,matches:m}]:[]}const g=[];for(let v=0,h=c.children.length;v<h;v+=1){const m=c.children[v],E=r(m,u,f);if(E.length)g.push(...E);else if(c.operator===fl.AND)return[]}return g},o=this._myIndex.records,i={},a=[];return o.forEach(({$:c,i:u})=>{if(Un(c)){let f=r(n,c,u);f.length&&(i[u]||(i[u]={idx:u,item:c,matches:[]},a.push(i[u])),f.forEach(({matches:g})=>{i[u].matches.push(...g)}))}}),a}_searchObjectList(e){const n=ju(e,this.options),{keys:r,records:o}=this._myIndex,i=[];return o.forEach(({$:a,i:c})=>{if(!Un(a))return;let u=[];r.forEach((f,g)=>{u.push(...this._findMatches({key:f,value:a[g],searcher:n}))}),u.length&&i.push({idx:c,item:a,matches:u})}),i}_findMatches({key:e,value:n,searcher:r}){if(!Un(n))return[];let o=[];if(Wr(n))n.forEach(({v:i,i:a,n:c})=>{if(!Un(i))return;const{isMatch:u,score:f,indices:g}=r.searchIn(i);u&&o.push({score:f,key:e,value:i,idx:a,norm:c,indices:g})});else{const{v:i,n:a}=n,{isMatch:c,score:u,indices:f}=r.searchIn(i);c&&o.push({score:u,key:e,value:i,norm:a,indices:f})}return o}}Ui.version="7.0.0";Ui.createIndex=Pv;Ui.parseIndex=AS;Ui.config=Ze;Ui.parseQuery=zv;BS(PS);function Bo(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function VS(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function XS(t){return new Ui(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function qS(t,e,n){const r=VS(e,n);return t.length===0?r:XS(r).search(t).map(o=>o.item)}function ZS(t,e){return Bo(t,e).shape}function fn(t,e){const n=ZS(t,e);return n?Bu(n):void 0}function Ws(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Bd(e)}function QS(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function zs(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Bd(o)})}function JS(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Bd(i)})})}function Vr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function Yv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Tv(e)}function eD(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Tv(r)})}function tD(t,e){const n=t.shape;return n===void 0?void 0:{...fn(e,Pt),...n}}function jv(t,e,n){return{toolId:t,cells:e,value:n}}function nD(t,e){const n=zs(e,"cells"),r=Vr(e);return jv(t,n,r)}function Kv(t,e,n){const r=n?t.length-2:0;return t.findIndex((i,a)=>qe(i,e)&&a>=r)}function rD(t,e,n){const r=[...t.cells],o=r.length;if(!(o===0?!0:Bs(r[o-1],e)))return t;const a=Kv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function Vv(t,e){return{toolId:t,cells:e,lines:[]}}function oD(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),ul(n),{...t,cells:n};const r=n.some(i=>qe(i,e)),o=n.some(i=>Bs(i,e));return n.length>0&&!r&&o?(n.push(e),ul(n),{...t,cells:n}):t}function iD(t,e,n){const r=t.cells.some(f=>qe(f,e)),o=t.lines.length;if(o===0&&!r)return t;if(o===0&&r)return Xu(t,e);const i=t.lines[o-1],a=i.length;if(a===0&&!r)return t;if(a===0&&r)return Xu(t,e);const c=Kv(i,e,!1);return(i.length===0?!0:Bs(i[a-1],e))?c>=0?(i.length=c+1,{...t,lines:[...t.lines.slice(0,o-1),i]}):!r||n?(i.push(e),{...t,lines:[...t.lines.slice(0,o-1),i]}):t:t}function Xu(t,e){return t.cells.some(r=>qe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function sD(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function aD(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function lD(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function cD(t,e){const n=zs(e,"cells"),r=JS(e),o=Vv(t,n);return o.lines=r,o}function Xv(t,e,n=""){return{toolId:t,cells:e,value:n}}function uD(t,e,n=!1){const r=Mv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function dD(t,e){return{...t,value:e}}function _D(t,e){const n=zs(e,"cells"),r=Vr(e);return Xv(t,n,r)}function qu(t,e,n){return{toolId:t,cells:e,value:n}}function fD(t,e){const n=zs(e,"cells"),r=Vr(e);return qu(t,n,r)}function Zu(t,e,n){return{toolId:t,cells:e,value:n}}function gD(t,e){const n=zs(e,"cells"),r=Vr(e);return Zu(t,n,r)}function Qu(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function hD(t,e){const n=Ws(e),r=Yv(e),o=Vr(e);return Qu(t,n,r,o)}function Ju(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function vD(t,e){const n=Ws(e),r=Vr(e);return Ju(t,n,r)}function ed(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function pD(t,e){const n=Ws(e),r=Yv(e);return ed(t,n,r)}function td(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function mD(t,e){const n=Ws(e),r=eD(e),o=td(t,n,Pe.N);return o.directions=r,o}function nd(t,e,n=""){return{toolId:t,cell:e,value:n}}function ED(t,e){const n=Ws(e),r=Vr(e);return nd(t,n,r)}function CD(t,e=""){return{toolId:t,value:e}}function bD(t,e){const n=Vr(e);return CD(t,n)}function ID(t,e,n=""){return{toolId:t,coords:e,value:n}}function wD(t,e){const n=QS(e,"coords"),r=Vr(e);return ID(t,n,r)}function Ys(t,e){return{...t,value:e}}class Fi extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const o=r.constraints[n];return o||null}getConstraint2(e){for(const n of this.values()){const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const o=this.get(e);o&&(o.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const o=this.get(e);o&&o.constraints[n]&&(o.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const o=[];for(const a of Object.values(r.constraints))o.push(ND(a));const i={tool_id:n,constraints:o};if(r.negative_constraints)for(const[a,c]of Object.entries(r.negative_constraints))c&&(i.negative_constraints||(i.negative_constraints={}),i.negative_constraints[a]=c);i.constraints.length&&(e[n]=i)}return e}static fromJson(e){const n=new Fi;if(!e)return n;for(const r of Object.values(e)){const o=r.tool_id;if(typeof o!="string")throw TypeError("tool_id_str must be of type string.");const i=mv(o);if(i===void 0||!Object.keys(Pt).includes(i))continue;n.addToDict(i);const a=n.get(i);if(!a)continue;const c=r.negative_constraints;if(c){a.negative_constraints={};for(const[f,g]of Object.entries(c))a.negative_constraints[f]=g}const u=r.constraints;for(const f of u){let g=null;if(Ev(i,Al)?g=vD(i,f):zo(i)?g=pD(i,f):wi(i)?g=mD(i,f):yi(i)?g=gD(i,f):Ss(i)?g=fD(i,f):Oi(i)?g=nD(i,f):pv(i)?g=wD(i,f):Ai(i)?g=cD(i,f):xi(i)?g=_D(i,f):Hr(i)?g=hD(i,f):Sy(i)?g=bD(i,f):Ds(i)&&(g=ED(i,f)),g!==null){const v=Lt.uniqueId(),h=tD(f,i);g.shape=h,n.addConstraint(i,v,g)}}}return n}}function vi(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints)){const i=o[1],a=o[0];if(qe(i.cell,n))return[a,i]}return null}function gh(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(n.every(c=>i.cells.some(u=>qe(c,u))))return o}return null}function hh(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints)){const i=o[1],a=i.cells[i.cells.length-1];if(qe(n,a))return o}return null}function yD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(i.cells.some(c=>qe(c,n)))return[o[0],i]}return null}function OD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints))if(o[1].cells.some(c=>qe(c,n)))return o;return null}function vh(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(i.cells.some(c=>qe(c,n)))return[o[0],i]}return null}function AD(t,e,n){const r=t.get(e);if(!r)return null;for(const[o,i]of Object.entries(r.constraints)){const a=i,c=a.lines.findIndex(u=>u.some((f,g)=>qe(f,n)&&g>0));if(c>=0)return{id:o,arrow:a,matchLineIdx:c}}return null}function ph(t,e,n,r){const o=t.get(e);if(!o)return null;for(const i of Object.entries(o.constraints)){const a=i[1],c=i[0];if(qe(n,a.cell)&&r===a.direction)return[c,a]}return null}function mh(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints)){const i=o[1],a=o[0];if(qe(n,i.cell))return[a,i]}return null}function xD(t,e,n){const r=t.get(e);if(!r)return null;for(const o of Object.entries(r.constraints)){const i=o[1];if(i.cells.some(c=>qe(c,n))||i.cells2.some(c=>qe(c,n)))return[o[0],i]}return null}function LD(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const o of Object.entries(n.constraints)){const i=o[1];r.add(i.value)}return r}function ND(t){const e={};if("cells"in t){const n=t.cells.map(r=>ja(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ja(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(o=>ja(o)));e.lines=n}if("cell"in t){const n=ja(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=fn(t.toolId,Pt),r=Uy(t.shape,n);r&&(e.shape=r)}return e}function Eh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function qv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function rd(t){const e=new Option().style;return e.color=t,e.color!==""}function wu(t){return qv(t)||rd(t)?t:rd(`#${t}`)?`#${t}`:void 0}function gl(t,e,n=", "){if(!t.length)return"";const r=t.map(o=>String(o));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Zv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function hl(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let o=`${e}_by_${r}`;return o=o.replaceAll(/[\W]/g,""),o}function RD(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Ch={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function SD(t){return t in Ch?Ch[t]:null}function Qv(t,e,n){if(n===null)return null;const r=SD(n);if(r===null)return null;const[o,i]=[r.h,r.w];return Math.floor(t/o)*o+Math.floor(e/i)}function yu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(o=>o===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class DD{constructor(e,n){Ee(this,"r");Ee(this,"c");Ee(this,"outside",!1);Ee(this,"value",null);Ee(this,"given",!1);Ee(this,"region",null);Ee(this,"centerMarks",[]);Ee(this,"cornerMarks",[]);Ee(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=yu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=yu(this.cornerMarks,e))}enterHighlight(e){this.highlights=yu(this.highlights,e)}enterCell(e,n,r=!1){n===_.GIVEN?this.enterGiven(e,r):n===_.DIGIT?this.enterValue(e,r):n===_.CORNER_PM?this.enterCornerPM(e):n===_.CENTER_PM?this.enterCenterPM(e):n===_.HIGHLIGHTS?this.enterHighlight(e):n===_.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Qv(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class $i{constructor(e,n){Ee(this,"nCols");Ee(this,"nRows");Ee(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let o=0;o<e;o++){const i=[];for(let a=0;a<n;a++){const c=new DD(o,a);if(r){const u=Qv(o,a,e);c.region=u}i.push(c)}this.grid.push(i)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const o=r[e];o.outside||n.push(o)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const o of r){const[i,a]=[e.r+o[0],e.c+o[1]],c=this.getCell(i,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const o of r){const i=e.r+o[0],a=e.c+o[1],c=this.getCell(i,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const o of r){const i=e.r+o[0],a=e.c+o[1],c=this.getCell(i,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Zv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),o=[...r.keys()].sort(),i=o.length;if(e<0||e>=i||![...r.values()].every(c=>c===i))return n;for(const c of o){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const o=[],{r:i,c:a}=Hs(r);let[c,u]=[e+i,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const f=this.grid[c][u];o.push(f),[c,u]=[c+i,u+a]}return o}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const o=[];for(let i=0;i<this.nCols;i++){const a=this.getCell(r,i);if(!a)continue;const c=a==null?void 0:a.toJson(n);o.push(c)}e.push(o)}return e}static fromJSON(e,n,r){const o=new $i(e,n);for(let i=0;i<e;i++)for(let a=0;a<n;a++){const c=r[i][a],u=o.getCell(i,a);u&&Object.assign(u,c)}return o}}function TD(t){const e=t.grid,n=t.elementsDict,r=t.globalConstraints,o={};o.puzzleInfo=t.puzzleMeta,o.nRows=e.nRows,o.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),a=Lt.range(1,i+1);t.valid_digits&&!RD(a,t.valid_digits)&&(o.valid_digits=t.valid_digits),o.grid=e.toJSON(),t.solution&&(o.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(o.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(o.local_constraints=u),o}function kD(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,o=t.valid_digits,i=t.grid,a=$i.fromJSON(e,n,i),c=Math.min(a.nRows,a.nRows);let u=Lt.range(1,c+1);o!==void 0&&(u=o);const f=t.solution,g=t.local_constraints,v=Fi.fromJson(g),h=t.bool_constraints,m=Po.fromJson(h);return{puzzleMeta:r,solution:f,grid:a,valid_digits:u,elementsDict:v,globalConstraints:m}}function IW(){const t=new $i(9,9),e=new Fi,n=new Po;return{grid:t,solution:void 0,valid_digits:Lt.range(1,10),puzzleMeta:{},elementsDict:e,globalConstraints:n}}var Es=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Es||{});const MD=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),GD=()=>({type:"CLEAR"}),UD=t=>({type:"DRAG",payload:t}),od=t=>({type:"SET",payload:t}),FD=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Wd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Or=(t,e,n)=>{const r=[...t];return ul(r),{cells:r,lastCell:e,mode:n}};function $D(t,e,n){if(e===null)return Wd();if(n==="RESETTING")return Or([e],e,"SELECTING");const r=t.cells.findIndex(o=>qe(e,o));if(n==="SELECTING")return r!==-1?t:Or([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const o=[...t.cells];return o.splice(r,1),Or(o,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Or([...t.cells,e],e,"SELECTING");const o=[...t.cells];return o.splice(r,1),Or(o,null,"DESELECTING")}return t}function PD(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>qe(e,r));if(t.mode==="SELECTING")return n!==-1?t:Or([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Or(r,null,t.mode)}return t}function BD(t,e){return{...t,cells:e}}function HD(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(o=>qe(e,o))!==-1?Or([...t.cells],e,"SELECTING"):Or([...t.cells,e],e,"SELECTING"):Or([e],e,t.mode)}function Jv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Wd();case"SET":return BD(t,e.payload);case"CLICK":return $D(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return PD(t,e.payload);case"ARROW_KEY":return HD(t,e.payload.cell,e.payload.selectionMode);default:return t}}function hi(t,e){return qe(t.p1,e.p1)&&qe(t.p2,e.p2)||qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function WD(t,e){return qe(t.p1,e.p2)&&qe(t.p2,e.p1)}function ep(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!qe(t,e)}class Ml{constructor(){Ee(this,"edgeMarkers",[]);Ee(this,"cellMarkers",[]);Ee(this,"lineMarkers",[]);Ee(this,"draftLine",[]);Ee(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>qe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>qe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>qe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>qe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(o=>qe(o,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>qe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(o=>qe(o,e));if(r===-1){const o={...e,colorId:n,marker:"X"};this.edgeMarkers.push(o)}else if(this.cellMarkers[r].marker==="X"){const i={...e,colorId:n,marker:"O"};this.cellMarkers[r]=i}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>hi(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(o=>hi(e,o)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&WD(r,e)&&this.draftLine.splice(n,1)}onDrag(e){ep(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(i=>hi(i,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const o=this.lineMarkers.findIndex(i=>hi(i,r));if(o!==-1){const i=this.lineMarkers.splice(o,1);n.push(i[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Ml;return Object.assign(e,this),e}}const bh=t=>({type:"ADD_EDGE_MARKER",payload:t}),Ih=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Xa=t=>({type:"ADD_CELL_MARKER",payload:t}),zD=t=>({type:"SET_CELL_MARKERS",payload:t}),wh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),YD=t=>({type:"DRAG",payload:t}),Ls=t=>({type:"ADD_LINE_MARKERS",payload:t}),yh=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),zd=()=>({type:"RESET"});function jD(t,e){switch(e.type){case"RESET":return new Ml;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function tp(){return{_undoStack:[],_redoStack:[]}}const Pi=It(tp());function KD(){Pi.update(()=>tp())}function En(t,e=!0){Pi.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function VD(t,e=!0){Pi.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function np(){Pi.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function rp(){Pi.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const vl=It(new Ml);function Nr(t){vl.update(e=>jD(e,t))}const pl=It(1);function ko(t,e){return{execute:()=>{Nr(t)},unExecute:()=>{Nr(e)}}}const Ho=It(Wd());function fi(t){t&&Ho.update(e=>Jv(e,t))}function Oh(t){t&&Ho.update(e=>Jv(e,t))}function XD(t,e){return{execute:()=>{Oh(t)},unExecute:()=>{Oh(e)}}}const Ei=It(null),Gl=It(Ii.SETTING),id=It(!1),Zt=It(_.DIGIT),op=It(_.DIGIT),Yd=It(Lt.range(1,10)),Cn=It(new $i(9,9)),Zn=It(Te(Cn).getAllCells()),Xr=It({}),qr=It(new Po),ct=It(new Fi),Wt=It(null),Bi=It(void 0),Ul=It(void 0);function qD(t){Xr.update(()=>t)}function Hi(t){Wt.update(()=>t)}function jd(t){Bi.update(()=>t)}function Lr(t){Te(Zt)!==t&&(Zt.update(()=>t),Hi(null))}function ZD(){const t=Te(op);t&&Lr(t)}function sd(t){op.update(()=>t)}function QD(t){Te(Zt)===t&&Lr(_.DIGIT)}function JD(t){ct.update(e=>(e.removeFromDict(t),e)),jd(void 0)}function qt(t,e,n){ct.update(r=>(r.updateConstraint(t,e,n),r)),Hi({id:e,constraint:n})}function Ou(t){const e=Te(Wt);if(t=t?{...t}:void 0,jd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;qt(r,e.id,n)}function Eo(t,e){const r=Te(ct).get(e);if(!r)return;const o=r.constraints[t];o&&Hi({id:t,constraint:o})}function e2(t,e,n){const r=new $i(t,e);Cn.update(()=>r),Yd.update(()=>n),ct.update(()=>new Fi),qr.update(()=>new Po),Xr.update(()=>({})),Kd(void 0),Zn.update(()=>r.getAllCells())}function t2(t){Cn.update(()=>t.grid),Xr.update(()=>t.puzzleMeta),Kd(t.solution),Yd.update(()=>t.valid_digits),ct.update(()=>t.elementsDict),qr.update(()=>t.globalConstraints),Zn.update(()=>t.grid.getAllCells())}function ip(){const t=Te(Cn);t.resetValues(),Cn.update(()=>t),Zn.update(()=>t.getAllCells()),Nr(zd())}function ml(){KD(),Nr(zd()),Lr(_.DIGIT);const t=GD();fi(t),jd(void 0),Hi(null)}const sp=zr([vo,Zt,Gl],([t,e,n])=>{const r=t.hideFog;return e===_.FOG_LIGHTS&&!r&&n===Ii.SETTING}),js=zr([Cn,Xr,qr,ct,Ul,Yd],([t,e,n,r,o,i])=>({grid:t,solution:o,puzzleMeta:e,valid_digits:i,globalConstraints:n,elementsDict:r}));function Kd(t){Ul.update(()=>t)}var ap=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(ap||{});const Ja=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),lp=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function n2(t,e){qr.update(n=>n.setConstraint(t,e))}function r2(t){qr.update(e=>e.removeConstraint(t))}function Ah(t){t.type===ap.REMOVE_GLOBAL_CONSTRAINT?r2(t.payload):n2(t.payload.tool,t.payload.value)}function ad(t,e){return{execute:()=>{Ah(t)},unExecute:()=>{Ah(e)}}}var o2=ue('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function i2(t,e){let n=G(e,"value",8,!1);var r=o2(),o=Y(r);sn(o),B(r),Q(()=>ev(o,n())),L(t,r)}var s2=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Vd(t){var e=s2();L(t,e)}var a2=ue('<button class="remove-button svelte-17rdl63"><!></button>');function l2(t,e){let n=G(e,"onTrash",8,()=>{});var r=a2(),o=Y(r);Vd(o),B(r),ke("click",r,$n(function(...i){var a;(a=n())==null||a.apply(this,i)})),L(t,r)}var c2=ue('<input type="radio" class="radio-select-button svelte-3561wl">'),u2=ue('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ld(t,e){var te,se;ae(e,!1);const n=Ve(),r=()=>me(Zt,"$toolStore",n),o=[];let i=G(e,"elementInfo",8),a=G(e,"onClick",12,void 0),c=G(e,"onTrash",8,void 0);const u=i().toolId,f=i().permanent??!1,g=((te=i().menu)==null?void 0:te.name)??i().toolId,v=!((se=i().meta)!=null&&se.categories.includes(k.GLOBAL_CONSTRAINT)),h=`label-${g}`;v&&a(()=>{Lr(u)});function m(){var ie,ve;const Z=(ie=i().meta)==null?void 0:ie.description,ne=((ve=i().meta)==null?void 0:ve.usage)??bv(u);let ge;return Z&&Z.length&&(ge=Z),ne.length&&(ge?ge=ge+`

`+ne:ge=ne),ge}fe();var E=u2(),I=Y(E);{var b=Z=>{var ne=c2();sn(ne),A(ne,"id",h),ne.value=(ne.__value=u)==null?"":u,Ol(o,[],ne,()=>r(),ge=>Fo(Zt,ge)),L(Z,ne)};ee(I,Z=>{v&&Z(b)})}var w=U(I,2);Q(()=>A(w,"title",m())),A(w,"aria-labelledby",h);var x=Y(w),T=Y(x),M=Y(T);{var $=Z=>{l2(Z,{get onTrash(){return c()}})};ee(M,Z=>{f||Z($)})}B(T);var W=U(T,2);A(W,"for",h),W.textContent=g,B(x);var F=U(x,2),K=Y(F);gt(K,e,"default",{}),B(F),B(w),B(E),Q(()=>vt(E,"checked",u===r())),ke("click",w,$n(function(...Z){var ne;(ne=a())==null||ne.apply(this,Z)})),L(t,E),le()}function d2(t,e){ae(e,!1);let n=G(e,"toolId",8),r=G(e,"value",8,!1),o=G(e,"elementHandlers",8);const i=()=>{const u=Ja(n(),!r()),f=Ja(n(),r()),g=ad(u,f);En(g)},a=()=>{const u=lp(n()),f=Ja(n(),r()),g=ad(u,f);En(g)};fe();var c=rt(()=>Bo(n(),o()));ld(t,{get elementInfo(){return d(c)},onClick:i,onTrash:a,children:(u,f)=>{i2(u,{get value(){return r()}})},$$slots:{default:!0}}),le()}var _2=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function f2(t){var e=_2();L(t,e)}var g2=ue('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function h2(t,e){let n=G(e,"title",8),r=G(e,"closeCb",8);var o=g2(),i=Y(o),a=Y(i,!0);B(i);var c=U(i,2);B(o),Q(()=>at(a,n())),ke("click",c,function(...u){var f;(f=r())==null||f.apply(this,u)}),L(t,o)}var v2=ue('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Zr(t,e){ae(e,!1);let n=G(e,"showModal",12),r=G(e,"title",8),o=N();function i(){n(!1),d(o).close()}S(()=>(d(o),X(n())),()=>{d(o)&&n()&&d(o).showModal()}),S(()=>(d(o),X(n())),()=>{d(o)&&!n()&&d(o).close()}),Ie();var a=v2(),c=Y(a),u=Y(c);h2(u,{get title(){return r()},closeCb:i});var f=U(u,2),g=Y(f),v=Y(g);gt(v,e,"default",{}),B(g),B(f),B(c),B(a),$o(a,h=>O(o,h),()=>d(o)),ke("click",c,$n(function(h){Ay.call(this,e,h)})),ke("close",a,()=>{n(!1)}),ke("click",a,Oy($n(()=>d(o).close()))),L(t,a),le()}var p2=ue('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function m2(t,e){ae(e,!1);let n=G(e,"searchPattern",12,""),r=G(e,"showModal",8),o=N(null);S(()=>(X(r()),d(o)),()=>{r()&&d(o)&&d(o).focus()}),Ie();var i=p2(),a=U(Y(i),2);sn(a),A(a,"spellcheck",!1),$o(a,c=>O(o,c),()=>d(o)),B(i),qn(a,n),L(t,i),le()}var E2=ue('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function C2(t,e){let n=G(e,"showModal",12),r=G(e,"searchPattern",12,""),o=G(e,"title",8);Zr(t,{get title(){return o()},get showModal(){return n()},set showModal(i){n(i)},children:(i,a)=>{var c=E2(),u=Y(c);m2(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var f=U(u,2),g=Y(f),v=Y(g);gt(v,e,"default",{}),B(g),B(f),B(c),L(i,c)},$$slots:{default:!0},$$legacy:!0})}var b2=ue('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function Xd(t,e){let n=G(e,"isOpen",8,!0);var r=b2(),o=Y(r);gt(o,e,"default",{}),B(r),Q(()=>{A(r,"aria-expanded",n()),vt(r,"closed",!n())}),L(t,r)}var I2=ue('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),w2=ue('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function uo(t,e){let n=G(e,"title",8),r=G(e,"isOpen",12,!0),o=G(e,"isCollapsible",8,!1);var i=we(),a=oe(i);{var c=f=>{var g=I2(),v=Y(g),h=Y(v),m=Y(h,!0);B(h),B(v);var E=U(v,2),I=Y(E);gt(I,e,"default",{}),B(E),B(g),Q(()=>at(m,n())),L(f,g)},u=f=>{var g=w2(),v=Y(g),h=Y(v),m=Y(h,!0);B(h),B(v);var E=U(v,2),I=Y(E);gt(I,e,"default",{});var b=U(I,2);B(E),B(g),Q(()=>{at(m,n()),vt(b,"open",r())}),ke("click",g,()=>r(!r())),L(f,g)};ee(a,f=>{o()?f(u,!1):f(c)})}L(t,i)}var y2=ue('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),O2=ue('<ol class="svelte-cd45on"></ol>'),A2=ue("<!> <!>",1);function x2(t,e){ae(e,!1);const n=N();let r=G(e,"category",8),o=G(e,"addTool",8),i=G(e,"searchResults",8),a=N(!0);S(()=>(X(i()),X(r())),()=>{O(n,i().filter(g=>{var v,h;return(h=(v=g.info.meta)==null?void 0:v.categories)==null?void 0:h.includes(r())}))}),Ie(),fe();var c=we(),u=oe(c);{var f=g=>{var v=A2(),h=oe(v);uo(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return d(a)},set isOpen(E){O(a,E)},$$legacy:!0});var m=U(h,2);Xd(m,{get isOpen(){return d(a)},children:(E,I)=>{var b=O2();Qe(b,5,()=>d(n),mt,(w,x)=>{let T=()=>d(x).key,M=()=>d(x).info;var $=y2(),W=Y($),F=Y(W,!0);B(W),B($),Q(()=>{var K;A(W,"title",(K=M().meta)==null?void 0:K.description),at(F,T())}),ke("click",W,()=>{o()(T())}),L(w,$)}),B(b),L(E,b)},$$slots:{default:!0}}),L(g,v)};ee(u,g=>{d(n).length&&g(f)})}L(t,c),le()}function L2(t,e){ae(e,!1);const n=N();let r=G(e,"searchPattern",8,""),o=G(e,"addTool",8),i=G(e,"categories",8),a=G(e,"filterFunc",8),c=G(e,"elementHandlers",8);S(()=>(X(r()),X(a()),X(c())),()=>{O(n,qS(r(),a(),c()))}),Ie(),fe();var u=we(),f=oe(u);Qe(f,1,i,mt,(g,v)=>{x2(g,{get category(){return d(v)},get searchResults(){return d(n)},get addTool(){return o()}})}),L(t,u),le()}var N2=ue('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Fl(t,e){let n=G(e,"isOpen",12),r=G(e,"title",8);var o=N2();A(o,"tabindex",0);var i=Y(o),a=Y(i);gt(a,e,"add-button",{}),B(i);var c=U(i,2),u=Y(c),f=Y(u);gt(f,e,"title-icon",{}),B(u);var g=U(u);B(c);var v=U(c,2),h=Y(v);B(v),B(o),Q(()=>{at(g,` ${r()??""}`),vt(h,"open",n())}),ke("click",o,()=>n(!n())),ke("keydown",o,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),L(t,o)}var R2=ue('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function S2(t,e){let n=G(e,"isOpen",12),r=G(e,"title",8),o=G(e,"showModal",12);function i(){o(!o())}Fl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=R2();ke("click",u,$n(()=>i())),L(a,u)},"title-icon":(a,c)=>{var u=we(),f=oe(u);gt(f,e,"title-icon",{}),L(a,u)}},$$legacy:!0})}var D2=ue('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),T2=ue('<div class="panel-container svelte-hixu4"><!> <!></div>');function $l(t,e){let n=G(e,"isOpen",8,!0);var r=T2(),o=Y(r);gt(o,e,"panel-header",{});var i=U(o,2);Xd(i,{get isOpen(){return n()},children:(a,c)=>{var u=D2(),f=Y(u);gt(f,e,"panel-content",{}),B(u),L(a,u)},$$slots:{default:!0}}),B(r),L(t,r)}var k2=ue("<!> <!>",1);function cp(t,e){ae(e,!1);let n=G(e,"categories",8),r=G(e,"title",8),o=G(e,"onAddTool",8),i=G(e,"elementHandlerFilterFunc",8),a=G(e,"elementHandlers",8),c=N(!0),u=N(!1),f=N("");const g=v=>{O(u,!1),O(c,!0),o()(v)};fe(),$l(t,{get isOpen(){return d(c)},set isOpen(v){O(c,v)},$$slots:{"panel-header":(v,h)=>{var m=k2(),E=oe(m);S2(E,{get title(){return r()},get isOpen(){return d(c)},set isOpen(b){O(c,b)},get showModal(){return d(u)},set showModal(b){O(u,b)},$$slots:{"title-icon":(b,w)=>{var x=we(),T=oe(x);gt(T,e,"title-icon",{}),L(b,x)}},$$legacy:!0});var I=U(E,2);C2(I,{get title(){return r()},get showModal(){return d(u)},set showModal(b){O(u,b)},get searchPattern(){return d(f)},set searchPattern(b){O(f,b)},children:(b,w)=>{L2(b,{get searchPattern(){return d(f)},get categories(){return n()},get filterFunc(){return i()},addTool:g,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),L(v,m)},"panel-content":(v,h)=>{var m=we(),E=oe(m);gt(E,e,"panel-content",{}),L(v,m)}},$$legacy:!0}),le()}function M2(t,e){ae(e,!1);const n=Ve(),r=()=>me(qr,"$globalConstraintsStore",n),o=N();let i=G(e,"elementHandlers",8);const a=My,c=u=>{const f=Ja(u,!0),g=lp(u),v=ad(f,g);En(v)};S(()=>r(),()=>{O(o,(u,f)=>{var h;const g=!!((h=f.meta)!=null&&h.categories.includes(k.GLOBAL_CONSTRAINT)),v=r().has(u);return g&&!v})}),Ie(),fe(),cp(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return d(o)},get elementHandlers(){return i()},$$slots:{"title-icon":(u,f)=>{f2(u)},"panel-content":(u,f)=>{var g=we(),v=oe(g);Qe(v,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let E=()=>d(m)[0],I=()=>d(m)[1];d2(h,{get toolId(){return E()},get value(){return I()},get elementHandlers(){return i()}})}),L(u,g)}}}),le()}var gi=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(gi||{});const qd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Zd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),G2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),U2=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),xh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function F2(t){ct.update(e=>(e.addToDict(t),e))}function Ks(t,e){const n=Te(Bi);n&&(e.shape={...n}),ct.update(r=>(r.addConstraint(e.toolId,t,e),r)),Hi({id:t,constraint:e})}function Qd(t,e){e&&ct.update(n=>(n.removeConstraint(t,e),n))}function up(t,e){ct.update(n=>(n.setElement(t,e),n))}function Lh(t){t.type===gi.ADD_LOCAL_CONSTRAINT?Ks(t.payload.id,t.payload.constraint):t.type===gi.REMOVE_LOCAL_CONSTRAINT?Qd(t.payload.tool,t.payload.id):t.type===gi.REMOVE_LOCAL_CONSTRAINT_GROUP?JD(t.payload.tool):t.type===gi.RESTORE_ELEMENT?up(t.payload.tool,t.payload.constraints):t.type===gi.UPDATE_LOCAL_CONSTRAINT&&qt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Vs(t,e){return{execute:()=>{Lh(t)},unExecute:()=>{Lh(e)}}}var $2=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function P2(t){var e=$2();L(t,e)}var B2=ue('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function H2(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ei,"$svgRefStore",n),o=()=>me(ct,"$localConstraintsStore",n),i=()=>me(Wt,"$currentConstraintStore",n),a=N();let c=G(e,"constraint_id",8),u=G(e,"tool_id",8);function f(){Eo(c(),u()),r()&&r().focus()}function g(){const w=o().getConstraint(u(),c());if(!w)return;const x=Zd(c(),u()),T=qd(c(),w),M=Vs(x,T);En(M)}S(()=>i(),()=>{var w;O(a,(w=i())==null?void 0:w.id)}),Ie(),fe();var v=B2(),h=Y(v),m=Y(h);B(h);var E=U(h,2),I=Y(E),b=Y(I);Vd(b),B(I),B(E),B(v),Q(()=>{vt(v,"active",c()===d(a)),at(m,`ID: ${c()??""}`)}),ke("click",I,$n(g)),ke("click",v,f),L(t,v),le()}var W2=ue('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function z2(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=N(),i=N();let a=G(e,"tool_id",8),c=G(e,"neg_tool_id",8),u=G(e,"description",8);function f(){d(o)&&(d(o).negative_constraints||Pu(o,d(o).negative_constraints={}),Pu(o,d(o).negative_constraints[c()]=!d(i)),up(a(),d(o)),O(i,!d(i)))}S(()=>(r(),X(a())),()=>{O(o,r().get(a()))}),S(()=>(d(o),X(c())),()=>{var I;O(i,(I=d(o))!=null&&I.negative_constraints?!!d(o).negative_constraints[c()]:!1)}),Ie(),fe();var g=W2(),v=Y(g),h=Y(v);fo(2),B(v);var m=U(v,2),E=Y(m,!0);B(m),B(g),Q(()=>{A(g,"title",u()),vt(v,"checked",d(i)),vt(h,"checked",d(i)),at(E,c())}),ke("click",h,f),L(t,g),le()}var Y2=ue('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function j2(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=N();let i=G(e,"tool_id",8);S(()=>(r(),X(i())),()=>{O(o,r().get(i()))}),Ie(),fe();var a=we(),c=oe(a);{var u=f=>{var g=Y2(),v=Y(g);Qe(v,5,()=>Object.entries(d(o).constraints),h=>h[0],(h,m)=>{H2(h,{get constraint_id(){return d(m)[0]},get tool_id(){return i()}})}),B(v),B(g),L(f,g)};ee(c,f=>{d(o)&&Object.entries(d(o).constraints).length&&f(u)})}L(t,a),le()}class De{constructor(e,n){Ee(this,"x");Ee(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new De(this.x+e.x,this.y+e.y)}subtract(e){return new De(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new De(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new De(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function dp(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Nn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const o=n.matrixTransform(r.inverse());return new De(o.x,o.y)};function el(t,e){const n=kl(t),r=new De(n.c+.5,n.r+.5),o=t.distance(r);return e===void 0||o<e?{cell:n,dist:o}:null}function K2(t,e){const n=kl(t),r=new De(n.c+.5,n.r+.5),o=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:o}}function tl(t,e){const n=kl(t),r=rS(n),i=r.map(f=>new De(f.c,f.r)).map(f=>f.distance(t)),a=i.indexOf(Math.min(...i)),c=r[a],u=i[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function nl(t,e){const n=kl(t),r=oS(n),i=r.map(f=>new De(f.c,f.r)).map(f=>f.distance(t)),a=i.indexOf(Math.min(...i)),c=r[a],u=i[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function ws(t,e,n){const r=el(t);if(!r)return null;const o=nl(t);if(!o)return null;const i=tl(t);if(!i)return null;const a=K2(t);if(!a)return null;let c,u;e===xt.CORNER?(c=i.corner,u="corner"):e===xt.EDGE?(c=o.edge,u="edge"):e===xt.CELL_CENTER?(c=a.cellCenter,u="cell center"):e===xt.CORNER_OR_EDGE?i.dist<o.dist?(c=i.corner,u="corner"):(c=o.edge,u="edge"):e===xt.CORNER_OR_CENTER?i.dist<a.dist?(c=i.corner,u="corner"):(c=a.cellCenter,u="cell center"):e===xt.EDGE_OR_CENTER?o.dist<a.dist?(c=o.edge,u="edge"):(c=a.cellCenter,u="cell center"):o.dist<i.dist&&o.dist<a.dist?(c=o.edge,u="edge"):i.dist<o.dist&&i.dist<a.dist?(c=i.corner,u="corner"):(c=a.cellCenter,u="cell center");const g=new De(c.c,c.r).subtract(t).length(),v=u==="edge"?2*o.idx:2*i.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:o.edge,corner:i.corner,dist:g,closest:c,type:u,edgeIdx:o.idx,cornerIdx:i.idx,direction:v}}class Wi{constructor(e=.4){Ee(this,"onTap",null);Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onMove",null);Ee(this,"_prevPoint",null);Ee(this,"_prevCell",null);Ee(this,"_lastPointerDownTime",0);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_tapCount",0);Ee(this,"_lastTapPosition",null);Ee(this,"_lastTapTime",0);Ee(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;this._prevPoint=r;const o=el(r);if(!o)return;const i=o.cell;this._prevCell=i,this._lastPointerDownTime=e.timeStamp;const a={event:e,cell:i,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(a)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;let o;this._isDown&&(o=this._drag_margin);const i=el(r,o);if(!i)return;const a=i.cell;if(this._prevCell&&qe(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const c={event:e,cell:a,tapCount:this._tapCount};this.onMove&&this.onMove(c),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(c)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Nn(e,n);if(!r)return;const o=el(r,void 0);if(!o)return;const i=o.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:i,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:i,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Nh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(i=>{const a=new Set(i.highlights);return n.difference(a).size===0}).map(i=>i.toCoords())}function V2(t,e){const n=t.value;return e.getAllCells().filter(i=>i.value===n).map(i=>i.toCoords())}function Rh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(i=>{if(i.value!==null)return!1;const a=new Set(i.cornerMarks);return n.difference(a).size===0}).map(i=>i.toCoords())}function Sh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(i=>{if(i.value!==null)return!1;const a=new Set(i.centerMarks);return n.difference(a).size===0}).map(i=>i.toCoords())}function X2(t,e,n){const r=[t],o=e.getCell(t.r,t.c);return o?n===_.HIGHLIGHTS&&o.highlights.length?Nh(o,e):o.value!==null?V2(o,e):n===_.CORNER_PM&&o.cornerMarks.length?Rh(o,e):n===_.CENTER_PM&&o.centerMarks.length?Sh(o,e):o.cornerMarks.length?Rh(o,e):o.centerMarks.length?Sh(o,e):o.highlights.length?Nh(o,e):r:r}function pr(t,e,n,r=!1){if(!(t&&e))return;const o=qd(t,e),i=Zd(t,n),a=Vs(o,i);En(a,r)}function gr(t,e,n,r=!0){if(!(t&&e))return;const o=Zd(t,n),i=qd(t,e),a=Vs(o,i);En(a,r)}function cd(t,e,n,r,o=!1){if(!(t&&n&&e))return;const i=xh(r,t,n),a=xh(r,t,e),c=Vs(i,a);En(c,o)}function q2(t,e,n,r){const o=new Wi,i={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,f=!1,g=!1,v=Ln.DYNAMIC;function h(E){f=!1;const I=E.cell;if(Mt(E.cell,i)){if(v===Ln.DYNAMIC){const w=Te(ct),x=AD(w,n,I);if(x){const M=lD(x.arrow,x.matchLineIdx);cd(x.id,x.arrow,M,n,!0),g=!0;return}const T=vh(w,n,I);if(!T)f=!0,v=Ln.EDIT_BULB,u=null,a=null;else{v=Ln.EDIT_ARROWS,u=T[0],a=T[1],a=Xu(a,I),qt(n,u,a);return}}if(v===Ln.EDIT_BULB&&!u){u=Lt.uniqueId(),a=Vv(n,[I]),Ks(u,a);return}else v===Ln.EDIT_BULB&&u&&a?(a=oD(a,I),qt(n,u,a)):v===Ln.EDIT_ARROWS&&u&&a&&(a=iD(a,I,r==null?void 0:r.allowSelfIntersection),qt(n,u,a))}}return o.onDragStart=E=>{v=Ln.DYNAMIC,h(E)},o.onDrag=E=>{h(E)},o.onDragEnd=()=>{if(g){g=!1;return}v===Ln.EDIT_ARROWS&&u&&a?sD(a)?(a=aD(a),qt(n,u,a)):(cd(u,c,a,n),c=a):v===Ln.EDIT_BULB&&(pr(u,a,n),c=a),v=Ln.DYNAMIC},o.onTap=E=>{if(f)return;const I=E.cell,b=Te(ct);if(vh(b,n,I)){gr(u,a,n);return}},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:E=>{o.pointerMove(E,t)},pointerUp:E=>{o.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function Z2(t,e,n,r){const o=new Wi,i={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function f(h){return!!Mt(h.cell,i)}function g(h){if(!u||!c)throw"UNREACHABLE";const m=h.cell;f(h)&&(c=rD(c,m,a),qt(n,u,c))}return o.onDragStart=h=>{Te(Ht)!==Re.DELETE&&(u=Lt.uniqueId(),c=jv(n,[],r==null?void 0:r.defaultValue),Ks(u,c),g(h))},o.onDrag=h=>{g(h)},o.onDragEnd=()=>{u&&c&&c.cells.length<=1?Qd(n,u):u&&c&&pr(u,c,n,!1),u=null},o.onTap=h=>{if(Te(Ht)===Re.ADD_EDIT)return;const E=h.cell,I=Te(ct),b=OD(I,n,E);if(b){const[w,x]=b;gr(w,x,n)}},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:h=>{o.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const Q2=zr(ct,t=>{const e=[];for(const[n,r]of t.entries())Dy(n)&&e.push(r);return e});function Xs(t){return zr(ct,n=>{const r=[];for(const[o,i]of n.entries())t(o)&&r.push({toolId:o,constraints:i.constraints});return r})}const Jd=Xs(Sd),_p=zr(Jd,t=>{const e=t.find(r=>r.toolId===_.FOG_LIGHTS);return e?e.constraints:{}}),J2=zr(Jd,t=>{const e=t.find(r=>r.toolId===_.MINIMUM);return e?e.constraints:{}}),eT=zr(Jd,t=>{const e=t.find(r=>r.toolId===_.MAXIMUM);return e?e.constraints:{}}),tT=Xs(yi),nT=Xs(Ds),rT=Xs(Ss),oT=Xs(pv),rl=It(void 0),ol=It(void 0),il=It(void 0),sl=It(void 0),al=It(void 0),Cs=It(void 0),ll=It(void 0);zr([ct,Zt],([t,e])=>{const n=e;return t.get(n)});function iT(t,e,n,r){const o=new Wi,i={nRows:e.nRows,nCols:e.nCols};function a(f){const g=Te(ct),v=f.cell;if(!Mt(f.cell,i))return;let m=Te(Ht);const E=vi(g,n,v);if(m===Re.DYNAMIC&&(m=E?Re.DELETE:Re.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&vi(g,r.oppositeConstraintId,v)))if(E&&m===Re.DELETE){const[I,b]=E;gr(I,b,n)}else if(!E&&m===Re.ADD_EDIT){const I=Ju(n,v,r==null?void 0:r.defaultValue),b=Lt.uniqueId();pr(b,I,n,!0)}else E&&m===Re.ADD_EDIT&&Eo(E[0],n)}o.onDragStart=f=>{a(f)},o.onDrag=f=>{a(f)},o.onMove=f=>{if(!Mt(f.cell,i)){rl.set(void 0);return}const v=Ju(n,f.cell,r==null?void 0:r.defaultValue),h=Te(Bi);h&&(v.shape={...h});const m=Te(Ht),E=Te(ct),I=vi(E,n,f.cell);if(!I&&m===Re.DELETE){rl.set(void 0);return}let b="add",w;I&&(m===Re.DELETE||m===Re.DYNAMIC)&&(b="remove",w=I[0]);const x={tool:v,match_id:w,mode:b};rl.set(x)};function c(f){const g=Te(Wt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Si(f)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,f.key);m!==void 0&&m!==v.value&&(v=Ys(v,m),qt(n,h,v))}return{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:f=>{c(f)},keyUp:()=>{}}}class Pl{constructor(e){Ee(this,"onDragStart",null);Ee(this,"onMove",null);Ee(this,"feature");Ee(this,"_prevCoord",null);Ee(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=Nn(e,n);if(!r)return;const o=ws(r,this.feature);if(!o)return;const i={event:e,...o};this._prevCoord=o.closest,this._prevCellCoord=o.cell,this.onDragStart&&this.onDragStart(i)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;const o=ws(r,this.feature);if(!o||this._prevCoord&&qe(o.closest,this._prevCoord)&&this._prevCellCoord&&qe(this._prevCellCoord,o.cell))return;const i={event:e,...o};this._prevCoord=o.closest,this._prevCellCoord=o.cell,this.onMove&&this.onMove(i)}}function sT(t,e,n,r){const o=(r==null?void 0:r.targets)??xt.CLOSEST,i=new Pl(o),a={nRows:e.nRows,nCols:e.nCols};function c(g){const v=Te(ct),h=g.cell,m=g.closest;let E=Te(Ht);if(!Mt(h,a))return;const b=mh(v,n,m);if(E===Re.DYNAMIC&&(E=b?Re.DELETE:Re.ADD_EDIT),b&&E===Re.DELETE){const w=b[0];gr(w,b[1],n)}else if(!b&&E===Re.ADD_EDIT){const w=nd(n,m,""),x=Lt.uniqueId();pr(x,w,n,!0)}else b&&E===Re.ADD_EDIT&&Eo(b[0],n)}function u(g){const v=Te(Wt);if(!v)return;let h=v.constraint;const m=v.id;if(h.value===void 0||!Si(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Ys(h,E),qt(n,m,h))}return i.onDragStart=g=>{c(g)},i.onMove=g=>{if(!Mt(g.cell,a)){ll.set(void 0);return}const h=Te(Ht),m=nd(n,g.closest,""),E=Te(Bi);E&&(m.shape={...E});const I=Te(ct),b=mh(I,n,g.closest);if(!b&&h===Re.DELETE){ll.set(void 0);return}let w="add",x;b&&(h===Re.DYNAMIC||h===Re.DELETE)&&(w="remove",x=b[0]);const T={tool:m,match_id:x,mode:w};ll.set(T)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function aT(t,e,n,r){const o=(r==null?void 0:r.cornerOrEdge)??xt.CORNER_OR_EDGE,i=new Pl(o),a={nRows:e.nRows,nCols:e.nCols};function c(g){const v=Te(ct),h=g.cell,m=g.direction,E=mi(m);if(Mt(h,a))return;const b=ah(h,E);if(!Mt(b,a))return;let x=Te(Ht);const T=ph(v,n,h,E);if(x===Re.DYNAMIC&&(x=T?Re.DELETE:Re.ADD_EDIT),T&&x===Re.DELETE){const[M,$]=T;gr(M,$,n)}else if(!T&&x===Re.ADD_EDIT){const M=Qu(n,h,E,""),$=Lt.uniqueId();pr($,M,n,!0)}else T&&x===Re.ADD_EDIT&&Eo(T[0],n)}function u(g){const v=Te(Wt);if(!v)return;let h=v.constraint;const m=v.id;if(h.value===void 0||!Si(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Ys(h,E),qt(n,m,h))}return i.onDragStart=g=>{c(g)},i.onMove=g=>{if(Mt(g.cell,a)){Cs.set(void 0);return}const h=mi(g.direction),m=ah(g.cell,h);if(!Mt(m,a)){Cs.set(void 0);return}const I=Te(Ht),b=Te(ct);if(!ph(b,n,g.cell,h)&&I===Re.DELETE){Cs.set(void 0);return}const x=Qu(n,g.cell,h,"");Cs.set(x)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:()=>{},keyDown:g=>{u(g)},keyUp:()=>{}}}function lT(t,e,n,r){const o=new Wi,i={nRows:e.nRows,nCols:e.nCols};let a=null,c=null;function u(v){const h=Te(ct),m=v.cell;if(!Mt(v.cell,i))return;let I=Te(Ht);const b=yD(h,n,m);if(b&&(v.event.shiftKey||I===Re.ADD_EDIT)&&(c=b[0],a=b[1],Hi({id:c,constraint:a}),I=Re.ADD_EDIT),I===Re.DYNAMIC&&(I=b?Re.DELETE:Re.ADD_EDIT),b&&I===Re.DELETE){gr(b[0],b[1],n);return}if(!a&&I===Re.ADD_EDIT){a=Xv(n,[m]),c=Lt.uniqueId(),Ks(c,a);return}else if(a&&c&&I===Re.ADD_EDIT){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=uD(a,m,w),qt(n,c,a);return}}function f(v){const h=Te(Wt);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!Si(v)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,v.key);I!==void 0&&I!==m.value&&(m=dD(m,I),qt(n,E,m))}return o.onDragStart=v=>{c=null,a=null,u(v)},o.onDrag=v=>{u(v)},o.onDragEnd=()=>{c&&a&&pr(c,a,n,!1),c=null},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:v=>{o.pointerMove(v,t)},pointerUp:v=>{o.pointerUp(v,t)},keyDown:v=>{f(v)},keyUp:()=>{}}}var _r=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(_r||{});const cT=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),fp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),uT=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),dT=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),_T=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),fT=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Au=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),gT=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),xu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Bl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function hT(t,e,n){if(e===_.DIGIT){const r=t.map(a=>a.value),o=cT(t,n),i=fp(t,r);return[o,i]}if(e===_.GIVEN){const r=t.map(c=>c.value),o=t.map(c=>c.given),i=uT(t,n),a=dT(t,r,o);return[i,a]}if(e===_.REGIONS){const r=t.map(a=>a.region),o=_T(t,n),i=fT(t,r);return[o,i]}if(e===_.HIGHLIGHTS&&n!==null){const r=xu(t,n),o=xu(t,n);return[r,o]}if(e===_.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),o=xu(t,n),i=Bl(t,r);return[o,i]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n!==null){const r=Au(t,n,e),o=Au(t,n,e);return[r,o]}if((e===_.CORNER_PM||e===_.CENTER_PM)&&n===null){let r=[];e===_.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const o=Au(t,n,e),i=gT(t,r,e);return[o,i]}}function fs(t,e,n,r){t.forEach(o=>{o.enterCell(n,e,r)}),Zn.update(o=>o)}function Ci(t){switch(t.type){case _r.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;fs(e,_.DIGIT,n,!0);break}case _r.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;fs(e,_.GIVEN,n,!0);break}case _r.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;fs(e,_.REGIONS,n,!0);break}case _r.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;fs(e,_.HIGHLIGHTS,n,!0);break}case _r.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;fs(e,r,n,!0);break}case _r.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Zn.update(r=>r);break}case _r.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let o=0;o<e.length;o++)e[o].value=n[o],e[o].given=r[o];Zn.update(o=>o);break}case _r.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Zn.update(r=>r);break}case _r.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Zn.update(r=>r);break}case _r.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let o=0;o<e.length;o++)n===_.CENTER_PM?e[o].centerMarks=r[o]:n===_.CORNER_PM&&(e[o].cornerMarks=r[o]);Zn.update(o=>o);break}}}function vT(t,e){return{execute:()=>{Ci(t)},unExecute:()=>{Ci(e)}}}const _i=new Wi;function Dh(t,e){return t.shiftKey?Es.SELECTING:t.ctrlKey||t.metaKey||e?Es.DYNAMIC:t.altKey?Es.DESELECTING:Es.RESETTING}function ud(t,e,n,r,o=!1){switch(e){case _.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case _.DIGIT:return t.filter(a=>!(o&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case _.CORNER_PM:return t.filter(a=>!(o&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case _.CENTER_PM:return t.filter(a=>!(o&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case _.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function pT(t,e){const n=[e,_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],r=o=>o===_.CORNER_PM||o===_.CENTER_PM||o===_.DIGIT;for(const o of n){const i=ud(t,o,"any",-1,r(o));if(i.length)return{tool:o,cells:i}}return{tool:e,cells:[]}}function Lu(t,e,n,r){const o=hT(e,n,r);if(o){const i=o[0],a=o[1],c=vT(i,a),u=od(t),g=[XD(u,u),c];VD(g)}}function mT(t,e,n){const r=[_.DIGIT,_.CORNER_PM,_.CENTER_PM,_.HIGHLIGHTS],o={nRows:e.nRows,nCols:e.nCols};_i.onTap=m=>{if(m.tapCount!==2)return;const I=Mt(m.cell,o)?m.cell:null;if(!I)return;const b=X2(I,e,n),w=od(b);fi(w)},_i.onDragStart=m=>{const E=Mt(m.cell,o),I=Te(id),b=Dh(m.event,I),w=E?m.cell:null,x=MD(w,b);fi(x)},_i.onDrag=m=>{const I=Mt(m.cell,o)?m.cell:null,b=UD(I);fi(b)};function i(m){if(!tO(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=od(E);return fi(I),!0}function a(m){if(!sO(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=lO(m);return Lr(E),!0}return m.type==="keyup"?(ZD(),!0):!1}function c(m){if(!iO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return Lr(I),sd(I),!0}else{const E=aO(m.code);return Lr(E),sd(E),!0}}function u(m){if(!uO(m))return!1;const E=Te(Ho).lastCell;let I=null;if(E!==null){const[x,T]=dO(m),[M,$]=[Eh(E.r+T,0,o.nRows-1),Eh(E.c+x,0,o.nCols-1)];I={r:M,c:$}}else I={r:0,c:0};const b=Dh(m,!1),w=FD(I,b);return fi(w),!0}function f(m){const E=oO(m);if(E===void 0)return!1;const I=Te(Ho).cells,b=[];if(I.forEach(w=>{const x=e.getCell(w.r,w.c);x&&b.push(x)}),E===null){const{tool:w,cells:x}=pT(b,n);if(x.length)return Lu(I,x,w,E),!0}else{let w=ud(b,n,"different",E,!0);if(w.length)return Lu(I,w,n,E),!0;if(w=ud(b,n,"equal",E,!0),w.length)return Lu(I,w,n,E),!0}return!1}function g(m){return m.repeat?!1:f(m.key)}const v=Lt.throttle(m=>{_i.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&_i.pointerDown(m,t)},pointerMove(m){v(m)},pointerUp(m){_i.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(i(m)||u(m)||g(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){f(m.currentTarget.value)}}}function ET(t,e,n,r){const o=[Pe.N,Pe.NE,Pe.E,Pe.SE,Pe.S,Pe.SW,Pe.W,Pe.NW],i=new Pl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(h){const m=Te(ct),E=h.cell;if(!Mt(h.cell,a))return;let b=Te(Ht);h.event.altKey&&(b=Re.DELETE);const w=vi(m,n,E),x=mi(h.direction);!w&&b!==Re.DELETE?(c=ed(n,E,x),u=Lt.uniqueId(),pr(u,c,n,!0)):w&&(w[1].direction===x&&b===Re.ADD_EDIT?([u,c]=w,Eo(w[0],n)):w[1].direction===x&&b===Re.DYNAMIC||b===Re.DELETE?gr(w[0],w[1],n):(u=w[0],c={...w[1],direction:x},qt(n,w[0],c)))}function g(h){if(!nO(h))return;const m=Te(Wt);if(!m)return;const E=m.id,I=m.constraint;if(!zo(I.toolId))return;const w=(o.indexOf(I.direction)+1)%o.length;c={...I,direction:o[w]},qt(n,E,c)}return i.onDragStart=h=>{f(h)},i.onMove=h=>{if(!Mt(h.cell,a)){ol.set(void 0);return}const E=mi(h.direction),I=ed(n,h.cell,E),b=Te(Ht),w=Te(ct),x=vi(w,n,h.cell);if(!x&&b===Re.DELETE){ol.set(void 0);return}let T="add",M;x&&(b===Re.DELETE||x[1].direction===E&&b===Re.DYNAMIC)&&(T="remove",M=x[0]);const $={tool:I,match_id:M,mode:T};ol.set($)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:()=>{},keyDown:h=>{g(h)},keyUp:()=>{}}}function CT(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function bT(t,e,n,r){const o=new Pl(r.cornerOrEdge),i={nRows:e.nRows,nCols:e.nCols};let a=null,c=null;function u(g){const v=Te(ct),h=g.cell;if(!Mt(g.cell,i))return;let E=Te(Ht);E===Re.DYNAMIC&&g.event.altKey&&(E=Re.DELETE);const I=mi(g.direction),b=vi(v,n,h);if(!b&&E!==Re.DELETE)a=td(n,h,I),c=Lt.uniqueId(),pr(c,a,n,!0);else if(b)if(b[1].directions.includes(I)&&E!==Re.DELETE&&([c,a]=b,Eo(b[0],n)),b&&E===Re.DELETE)gr(b[0],b[1],n);else{const w=CT(b[1].directions,I);w.length>0?(c=b[0],a={...b[1],directions:w},qt(n,b[0],a)):gr(b[0],b[1],n)}}return o.onDragStart=g=>{u(g)},o.onMove=g=>{if(!Mt(g.cell,i)){il.set(void 0);return}const h=mi(g.direction),m=td(n,g.cell,h);if(Te(Ht)===Re.DELETE){il.set(void 0);return}il.set(m)},{pointerDown:g=>{g.button===0&&o.pointerDown(g,t)},pointerMove:g=>{o.pointerMove(g,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class IT{constructor(e){Ee(this,"onDragStart",null);Ee(this,"onMove",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"_prevCoord",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;const o=nl(r,this._margin);if(!o)return;this._prevCoord=o.edge;const i={event:e,coord:o.edge};this.onDragStart&&this.onDragStart(i)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;const o=nl(r,this._margin);if(!o||this._prevCoord&&qe(o.edge,this._prevCoord))return;const i={event:e,coord:o.edge};this._prevCoord=o.edge,this.onMove&&this.onMove(i),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(i)}pointerUp(e,n){const r=Nn(e,n);if(!r)return;const o=nl(r,this._margin);if(!o)return;const i={event:e,coord:o.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(i)),this._isTap&&this.onTap&&this.onTap(i)}}function wT(t,e,n,r){const o=new IT,i={nRows:e.nRows,nCols:e.nCols};function a(f){const g=Te(ct),v=f.coord;let h=Te(Ht);const m=_l(v);if(!m.every(b=>Mt(b,i)))return;let I=null;if(I=gh(g,n,m),h===Re.DYNAMIC&&(h=I?Re.DELETE:Re.ADD_EDIT),I&&h===Re.DELETE){const b=I[0];gr(b,I[1],n)}else if(!I&&h===Re.ADD_EDIT){const b=(r==null?void 0:r.defaultValue)??"",w=Zu(n,m,b),x=Lt.uniqueId();pr(x,w,n,!0)}else I&&h===Re.ADD_EDIT&&Eo(I[0],n)}function c(f){const g=Te(Wt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Si(f)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,f.key);m!==void 0&&m!==v.value&&(v=Ys(v,m),qt(n,h,v))}return o.onDragStart=f=>{a(f)},o.onMove=f=>{if(!Mt(f.coord,i)){sl.set(void 0);return}const v=Te(Ht),h=_l(f.coord),m=(r==null?void 0:r.defaultValue)??"",E=Zu(n,h,m),I=Te(Bi);I&&(E.shape={...I});const b=Te(ct),w=gh(b,n,h);if(!w&&v===Re.DELETE){sl.set(void 0);return}let x="add",T;w&&(v===Re.DYNAMIC||v===Re.DELETE)&&(x="remove",T=w[0]);const M={tool:E,match_id:T,mode:x};sl.set(M)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:f=>{c(f)},keyUp:()=>{}}}class yT{constructor(){Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"onMove",null);Ee(this,"_prevCoord",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;const i=this._prevCoord===null?void 0:this._margin,a=tl(r,i);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){const r=Nn(e,n);if(!r)return;const o=tl(r,this._margin);if(!o||this._prevCoord&&qe(o.corner,this._prevCoord))return;const i={event:e,coord:o.corner};this._prevCoord=o.corner,this.onMove&&this.onMove(i),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(i)}pointerUp(e,n){const r=Nn(e,n);if(!r)return;const o=tl(r,this._margin);if(!o)return;const i={event:e,coord:o.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(i)),this._isTap&&this.onTap&&this.onTap(i)}}function OT(t,e,n,r){const o=new yT,i={nRows:e.nRows,nCols:e.nCols};function a(f){const g=Te(ct),v=f.coord;let h=Te(Ht);const m=dl(v);if(!m.every(b=>Mt(b,i)))return;let I=null;if(I=hh(g,n,v),h===Re.DYNAMIC&&(h=I?Re.DELETE:Re.ADD_EDIT),I&&h===Re.DELETE){const b=I[0];gr(b,I[1],n)}else if(!I&&h===Re.ADD_EDIT){const b=qu(n,m,r==null?void 0:r.defaultValue),w=Lt.uniqueId();pr(w,b,n,!0)}else I&&h===Re.ADD_EDIT&&Eo(I[0],n)}function c(f){const g=Te(Wt);if(!g)return;let v=g.constraint;const h=g.id;if(v.value===void 0||!Si(f)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(v==null?void 0:v.value,f.key);m!==void 0&&m!==v.value&&(v=Ys(v,m),qt(n,h,v))}return o.onDragStart=f=>{a(f)},o.onMove=f=>{if(!Mt(f.coord,i)){al.set(void 0);return}const v=Te(Ht),h=dl(f.coord),m=qu(n,h,r==null?void 0:r.defaultValue),E=Te(Bi);E&&(m.shape={...E});const I=Te(ct),b=hh(I,n,f.coord);if(!b&&v===Re.DELETE){al.set(void 0);return}let w="add",x;b&&(v===Re.DYNAMIC||v===Re.DELETE)&&(w="remove",x=b[0]);const T={tool:m,match_id:x,mode:w};al.set(T)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:f=>{o.pointerUp(f,t)},keyDown:f=>{c(f)},keyUp:()=>{}}}class AT{constructor(){Ee(this,"onDragStart",null);Ee(this,"onDrag",null);Ee(this,"onDragEnd",null);Ee(this,"onTap",null);Ee(this,"_prevType",null);Ee(this,"_isDown",!1);Ee(this,"_isTap",!1);Ee(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Nn(e,n);if(!r)return;const o=ws(r,xt.CLOSEST);if(!o)return;const i={coords:o.closest,type:o.type};this._prevType=o.type,this._prevCoords=o.closest,this.onDragStart&&this.onDragStart(i)}pointerMove(e,n){if(!this._isDown)return;const r=Nn(e,n);if(!r)return;const o=ws(r,xt.CLOSEST);if(!o||this._prevCoords&&qe(this._prevCoords,o.closest))return;this._isTap=!1;const i={coords:o.closest,prevCoords:this._prevCoords,type:o.type};if(this._prevCoords&&ep(this._prevCoords,o.closest)&&(o.type==="cell center"||o.type==="corner"))this.onDrag&&this.onDrag(i);else return;this._prevType=o.type,this._prevCoords=o.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Nn(e,n);if(!r)return;const o=ws(r,xt.CLOSEST);if(!o)return;const i={coords:o.closest,type:o.type};this._isTap&&this._prevCoords&&qe(this._prevCoords,o.closest)&&(this.onTap&&this.onTap(i),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function xT(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new AT;return r.onTap=i=>{const a=i.coords,c=Te(pl),u=Te(vl);if(i.type==="cell center"){if(!tS(a,n))return;const g=u.getCellMarker(a);if(g)if(g.marker==="X"){const v={...a,colorId:c,marker:"O"},h=Xa(v),m=Xa(g),E=ko(h,m);En(E)}else{const v=wh(a),h=Xa(g),m=ko(v,h);En(m)}else{const v={...a,colorId:c,marker:"X"},h=Xa(v),m=wh(a),E=ko(h,m);En(E)}}else if(i.type==="edge"){const f=u.getEdgeMarker(a);if(f){const g=Ih(a),v=bh(f),h=ko(g,v);En(h)}else{const g={...a,colorId:c},v=bh(g),h=Ih(a),m=ko(v,h);En(m)}}},r.onDrag=i=>{const a=i.coords,c=Te(pl);if(i.type==="cell center"||i.type==="corner"){const u={p1:i.prevCoords,p2:a,colorId:c},f=YD(u);Nr(f)}},r.onDragEnd=()=>{const i=Te(vl);if(i.mode==="add"){const a=i.draftLine.filter(c=>!i.lineMarkers.some(u=>hi(c,u)));if(a.length){const c=Ls(a),u=yh(a),f=ko(c,u);En(f)}}else{const a=i.lineMarkers.filter(c=>i.draftLine.some(u=>hi(c,u)));if(a.length){const c=yh(a),u=Ls(a),f=ko(c,u);En(f)}}},{blur(){},pointerDown(i){r.pointerDown(i,t)},pointerMove(i){r.pointerMove(i,t)},pointerUp(i){r.pointerUp(i,t)},keyDown(){},keyUp(){}}}function LT(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function NT(t,e){const n=Mv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function RT(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function ST(t){for(let e=0;;e++){const n=RT(e);if(!t.has(n))return n}}function DT(t,e,n){const r=new Wi,o={nRows:e.nRows,nCols:e.nCols};let i=null,a=null,c=null,u=null,f="cells2",g=Te(Ht);function v(m){const E=Te(ct),I=m.cell;if(!Mt(m.cell,o))return;const w=xD(E,n,I);if(w?(c=w[0],i=w[1],g===xn.DYNAMIC&&(g=xn.MOVE),g===xn.MOVE&&(g=xn.MOVE,u=I,f=i.cells2.some(T=>qe(T,I))?"cells2":"cells")):g===xn.DYNAMIC&&(g=xn.SELECT),g===xn.SELECT&&c===null){c=Lt.uniqueId();const x=LD(E,n),T=ST(x);i=LT(n,[I],T),Ks(c,i);return}else if(g===xn.SELECT&&c&&i){i=NT(i,I),qt(n,c,i);return}else if(g===xn.MOVE&&c&&i&&u){const x={r:I.r-u.r,c:I.c-u.c},M=(f==="cells2"?i.cells2:i.cells).map(W=>({r:W.r+x.r,c:W.c+x.c}));if(!M.every(W=>Mt(W,o)))return;f==="cells"?i={...i,cells:M}:i={...i,cells2:M},u=I,qt(n,c,i)}}return r.onDragStart=m=>{g=Te(Ht),c=null,i=null,u=null,v(m)},r.onDrag=m=>{v(m)},r.onDragEnd=()=>{c&&i&&(g===xn.SELECT?pr(c,i,n):g===xn.MOVE&&cd(c,a,i,n),a=i)},r.onTap=()=>{c&&g!==xn.SELECT&&(Qd(n,c),c=null,i=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function TT(t){if(t.type===pe.SELECTION)return function(n,r,o){return mT(n,r,o)};if(t.type===pe.SINGLE_CELL){let e=function(r,o,i){return iT(r,o,i,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_ARROW){let e=function(r,o,i){return ET(r,o,i,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_MULTI_ARROW){let e=function(r,o,i){return bT(r,o,i,n)};const n=t;return e}else if(t.type===pe.EDGE){let e=function(r,o,i){return wT(r,o,i,n)};const n=t;return e}else if(t.type===pe.CORNER){let e=function(r,o,i){return OT(r,o,i,n)};const n=t;return e}else if(t.type===pe.LINE){let e=function(r,o,i){return Z2(r,o,i,n)};const n=t;return e}else if(t.type===pe.ARROW){let e=function(r,o,i){return q2(r,o,i,n)};const n=t;return e}else if(t.type===pe.CAGE){let e=function(r,o,i){return lT(r,o,i,n)};const n=t;return e}else{if(t.type===pe.CLONE)return function(n,r,o){return DT(n,r,o)};if(t.type===pe.CENTER_CORNER_OR_EDGE){let e=function(r,o,i){return sT(r,o,i,n)};const n=t;return e}else if(t.type===pe.OUTSIDE_DIRECTION){let e=function(r,o,i){return aT(r,o,i,n)};const n=t;return e}else if(t.type===pe.PEN)return function(n,r){return xT(n,r)}}}const gp=zr([Ei,Cn,Zt],([t,e,n])=>{const r=Bo(n,Pt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const o=r.inputOptions,i=o?TT(o):void 0;return i?i(t,e,n):void 0});It(Re.DYNAMIC);It(Ln.DYNAMIC);const Ht=It(void 0);var kT=ue('<button class="form-button svelte-yu5gtn" role="switch"> </button>'),MT=ue('<div class="tool-buttons svelte-yu5gtn"></div>');function GT(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ht,"$toolModeStore",n),o=N(),i=N();let a=G(e,"tool_id",8);function c(v){Fo(Ht,v)}Fo(Ht,Ky(a())),S(()=>X(a()),()=>{O(o,jy(a()))}),S(()=>r(),()=>{O(i,r())}),Ie(),fe();var u=we(),f=oe(u);{var g=v=>{var h=MT();Qe(h,5,()=>Object.values(d(o)),mt,(m,E)=>{var I=kT(),b=Y(I,!0);B(I),Q(()=>{A(I,"aria-checked",d(E)===d(i)),vt(I,"selected",d(E)===d(i)),at(b,d(E))}),ke("click",I,()=>c(d(E))),L(m,I)}),B(h),L(v,h)};ee(f,v=>{d(o)&&v(g)})}L(t,u),le()}var UT=ue('<div class="editor-wrapper svelte-rpxajb"><div class="editor svelte-rpxajb"><div class="editor-layout svelte-rpxajb"><!> <!> <!></div></div></div>');function FT(t,e){ae(e,!1);let n=G(e,"tool_id",8);const o=Pt[n()].negative_constraints;fe();var i=UT(),a=Y(i),c=Y(a),u=Y(c);{var f=h=>{var m=we(),E=oe(m);Qe(E,1,()=>o,mt,(I,b)=>{z2(I,{get tool_id(){return n()},get neg_tool_id(){return d(b).toolId},get description(){return d(b).description}})}),L(h,m)};ee(u,h=>{o&&h(f)})}var g=U(u,2);GT(g,{get tool_id(){return n()}});var v=U(g,2);j2(v,{get tool_id(){return n()}}),B(c),B(a),B(i),L(t,i),le()}var $T=ue('<div class="element-button-wrapper svelte-8ay9bc"><div class="constraints-ui svelte-8ay9bc"><div class="header svelte-8ay9bc"><div class="element-icon-container svelte-8ay9bc"></div> <div class="element-name svelte-8ay9bc"></div> <button class="form-button icon header-button svelte-8ay9bc"><!></button></div> <!></div></div>');function PT(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=()=>me(Zt,"$toolStore",n),i=N();let a=G(e,"tool_id",8),c=G(e,"elementHandlers",8),u=N(!1),f=a();function g(){d(u)?Lr(_.DIGIT):Lr(a())}function v(){QD(a());const $=r().get(a());if(!$)return;const W=G2(a()),F=U2(a(),$),K=Vs(W,F);En(K)}function h(){var K,te;const $=(K=d(i).meta)==null?void 0:K.description,W=((te=d(i).meta)==null?void 0:te.usage)??bv(a());let F;return $&&$.length&&(F=$),W.length&&(F?F=F+`

`+W:F=W),F}S(()=>(X(a()),X(c())),()=>{O(i,Bo(a(),c()))}),S(()=>(X(a()),o()),()=>{O(u,a()===o())}),Ie(),fe();var m=$T(),E=Y(m);vt(E,"clickable",!0);var I=Y(E);Q(()=>A(I,"title",h()));var b=U(Y(I),2);b.textContent=f;var w=U(b,2),x=Y(w);Vd(x),B(w),B(I);var T=U(I,2);{var M=$=>{FT($,{get tool_id(){return a()}})};ee(T,$=>{d(u)&&$(M)})}B(E),B(m),Q(()=>vt(E,"selected",d(u))),ke("click",w,$n(v)),ke("click",I,g),L(t,m),le()}var BT=ue("<!> <!> <!>",1);function HT(t,e){ae(e,!1);const n=Ve(),r=()=>me(ct,"$localConstraintsStore",n),o=N();let i=G(e,"elementHandlers",8);const a=ky,c=u=>{F2(u),Lr(u)};S(()=>(r(),k),()=>{O(o,(u,f)=>{var h;const g=r().has(u);return!!((h=f.meta)!=null&&h.categories.includes(k.LOCAL_ELEMENT))&&!g})}),Ie(),fe(),cp(t,{title:"Local Elements",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return d(o)},get elementHandlers(){return i()},$$slots:{"title-icon":(u,f)=>{P2(u)},"panel-content":(u,f)=>{var g=BT(),v=oe(g),h=rt(()=>Bo(_.GIVEN,i()));ld(v,{get elementInfo(){return d(h)}});var m=U(v,2),E=rt(()=>Bo(_.REGIONS,i()));ld(m,{get elementInfo(){return d(E)}});var I=U(m,2);Qe(I,1,()=>r().entries(),([b,w])=>b,(b,w)=>{let x=()=>d(w)[0];var T=we(),M=oe(T);{var $=W=>{PT(W,{get tool_id(){return x()},get elementHandlers(){return i()}})};ee(M,W=>{Ry(x())&&W($)})}L(b,T)}),L(u,g)}}}),le()}var WT=ue('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Nu(t,e){ae(e,!1);const n=N();let r=G(e,"value",8),o=G(e,"onChangeCb",8,void 0),i=N(void 0);function a(m){const E=wu(m);E&&o()&&o()(E)}S(()=>X(r()),()=>{O(n,r())}),S(()=>(d(n),wu),()=>{rd(d(n))&&O(i,wu(d(n)))}),Ie(),fe();var c=WT(),u=Y(c);const f=rt(()=>qv(d(n)));var g=Y(u);sn(g),B(u);var v=U(u,2),h=U(Y(v),2);sn(h),A(h,"spellcheck",!1),A(h,"maxlength",30),B(v),B(c),Q(()=>{A(u,"style",`--choosen-color: ${d(i)??""}`),vt(u,"transparent",d(f))}),qn(g,()=>d(n),m=>O(n,m)),ke("change",g,()=>a(d(n))),qn(h,()=>d(n),m=>O(n,m)),ke("input",h,()=>a(d(n))),L(t,c),le()}var zT=ue('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ys(t,e){let n=G(e,"name",8);var r=zT(),o=Y(r),i=Y(o,!0);B(o);var a=U(o,2);gt(a,e,"default",{}),B(r),Q(()=>at(i,n())),L(t,r)}var YT=ue('<input class="control-slider svelte-1rsuho6" type="range">');function jT(t,e){ae(e,!1);let n=G(e,"min",8),r=G(e,"max",8),o=G(e,"value",12),i=G(e,"step",24,()=>(r()-n())/10),a=G(e,"onChangeCb",8,void 0),c=G(e,"onInputCb",8,void 0);fe();var u=YT();sn(u),Q(()=>{A(u,"min",n()),A(u,"max",r()),A(u,"step",i())}),qn(u,o),ke("change",u,()=>{a()&&a()(o())}),ke("input",u,()=>{c()&&c()(o())}),L(t,u),le()}function lo(t,e){let n=G(e,"name",8),r=G(e,"value",12),o=G(e,"min",8),i=G(e,"max",8),a=G(e,"step",24,()=>(i()-o())/10),c=G(e,"onChangeCb",8,void 0),u=G(e,"onInputCb",8,void 0);ys(t,{get name(){return`${n()??""}: ${r()??""}`},children:(f,g)=>{jT(f,{get min(){return o()},get max(){return i()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(v){r(v)},$$legacy:!0})},$$slots:{default:!0}})}var KT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function VT(t){var e=KT();L(t,e)}var XT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function qT(t){var e=XT();L(t,e)}var ZT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function QT(t){var e=ZT();L(t,e)}var JT=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function ek(t){var e=JT();L(t,e)}var tk=ue('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function nk(t,e){ae(e,!1);const n=[];let r=G(e,"value",8),o=G(e,"selectedShape",12),i=G(e,"title",8),a=G(e,"updateShapeCb",8,void 0);fe();var c=tk(),u=Y(c);sn(u);var f,g=U(u,2);gt(g,e,"default",{}),B(c),Q(()=>{A(c,"title",i()),vt(c,"active",r()===o()),f!==(f=r())&&(u.value=(u.__value=r())==null?"":r())}),Ol(n,[],u,()=>(r(),o()),o),ke("change",u,()=>a()&&a()(r())),L(t,c),le()}var rk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function ok(t){var e=rk(),n=Y(e);A(n,"cx",480),A(n,"cy",-480),A(n,"rx",480),A(n,"ry",300),B(e),L(t,e)}var ik=ue('<div class="icon-wrapper svelte-18euf14"><!></div>'),sk=ue('<div class="radio-container svelte-18euf14"></div>');function ak(t,e){ae(e,!1);let n=G(e,"name",8),r=G(e,"selectedShape",8),o=G(e,"possibleShapes",8),i=G(e,"updateShapeCb",8,void 0);const a=new Map([[H.CIRCLE,QT],[H.ELLIPSE,ok],[H.SQUARE,qT],[H.RECTANGLE,VT],[H.POLYGON,ek]]);fe(),ys(t,{get name(){return n()},children:(c,u)=>{var f=sk();Qe(f,5,o,mt,(g,v)=>{nk(g,{get title(){return d(v)},get value(){return d(v)},get selectedShape(){return r()},get updateShapeCb(){return i()},children:(h,m)=>{var E=we(),I=oe(E);{var b=w=>{var x=ik(),T=Y(x);nv(T,()=>a.get(d(v)),(M,$)=>{$(M,{})}),B(x),L(w,x)};ee(I,w=>{a.has(d(v))&&w(b)})}L(h,E)},$$slots:{default:!0}})}),B(f),L(c,f)},$$slots:{default:!0}}),le()}var lk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function ck(t){var e=lk();L(t,e)}var uk=ue('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),dk=ue("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function _k(t,e){ae(e,!1);const n=Ve(),r=()=>me(Zt,"$toolStore",n),o=()=>me(Wt,"$currentConstraintStore",n),i=N(),a=N(),c=N();let u=N(!0),f=G(e,"elementHandlers",8);function g(b,w){const x=(b==null?void 0:b.shape)??(w?Bu(w):void 0);return Ou(x),x}function v(b,w){d(c)&&(Pu(c,d(c)[b]=w),Ou(d(c)))}function h(){d(a)&&(O(c,Bu(d(a))),Ou(d(c)))}function m(b){return b&&[H.CIRCLE,H.SQUARE,H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[H.ELLIPSE,H.RECTANGLE].includes(b)}S(()=>(r(),X(f())),()=>{O(i,Bo(r(),f()))}),S(()=>d(i),()=>{O(a,d(i).shape)}),S(()=>(o(),d(a)),()=>{var b;O(c,g(((b=o())==null?void 0:b.constraint)??null,d(a)))}),Ie(),fe(),$l(t,{get isOpen(){return d(u)},set isOpen(b){O(u,b)},$$slots:{"panel-header":(b,w)=>{Fl(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return d(u)},set isOpen(x){O(u,x)},$$slots:{"title-icon":(x,T)=>{ck(x)}},$$legacy:!0})},"panel-content":(b,w)=>{var x=we(),T=oe(x);{var M=$=>{var W=dk(),F=oe(W);{var K=$e=>{var Oe=uk();ke("click",Oe,h),L($e,Oe)};ee(F,$e=>{Gy(d(a))&&$e(K)})}var te=U(F,2);{var se=$e=>{ak($e,{get possibleShapes(){return d(a).allowedTypes},name:"Shape",get selectedShape(){return d(c).type},updateShapeCb:Oe=>v("type",Oe)})};ee(te,$e=>{var Oe;d(a).allowedTypes&&d(a).allowedTypes.length&&((Oe=d(c))!=null&&Oe.type)&&$e(se)})}var Z=U(te,2);{var ne=$e=>{var Oe=rt(()=>d(a).n.lb??3),Ge=rt(()=>d(a).n.ub??10);lo($e,{name:"Number of Sides",get value(){return d(c).n},get min(){return d(Oe)},get max(){return d(Ge)},step:1,onChangeCb:Fe=>v("n",Fe)})};ee(Z,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.n)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.n)!=null&&Fe.editable)&&E(d(c).type)&&$e(ne)})}var ge=U(Z,2);{var ie=$e=>{var Oe=rt(()=>d(a).r.lb??0),Ge=rt(()=>d(a).r.ub??1),Fe=rt(()=>d(a).r.step??.05);lo($e,{name:"Radius",get value(){return d(c).r},get min(){return d(Oe)},get max(){return d(Ge)},get step(){return d(Fe)},onChangeCb:Nt=>v("r",Nt)})};ee(ge,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.r)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.r)!=null&&Fe.editable)&&m(d(c).type)&&$e(ie)})}var ve=U(ge,2);{var Ae=$e=>{var Oe=rt(()=>d(a).width.lb??0),Ge=rt(()=>d(a).width.ub??1),Fe=rt(()=>d(a).width.step??.05);lo($e,{name:"Width",get value(){return d(c).width},get min(){return d(Oe)},get max(){return d(Ge)},get step(){return d(Fe)},onChangeCb:Nt=>v("width",Nt)})};ee(ve,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.width)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.width)!=null&&Fe.editable)&&I(d(c).type)&&$e(Ae)})}var Le=U(ve,2);{var ye=$e=>{var Oe=rt(()=>d(a).height.lb??0),Ge=rt(()=>d(a).height.ub??1),Fe=rt(()=>d(a).height.step??.05);lo($e,{name:"Height",get value(){return d(c).height},get min(){return d(Oe)},get max(){return d(Ge)},get step(){return d(Fe)},onChangeCb:Nt=>v("height",Nt)})};ee(Le,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.height)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.height)!=null&&Fe.editable)&&I(d(c).type)&&$e(ye)})}var Ce=U(Le,2);{var Xe=$e=>{var Oe=rt(()=>d(a).angle.lb??0),Ge=rt(()=>d(a).angle.ub??360),Fe=rt(()=>d(a).angle.step??15);lo($e,{name:"Angle",get value(){return d(c).angle},get min(){return d(Oe)},get max(){return d(Ge)},get step(){return d(Fe)},onChangeCb:Nt=>v("angle",Nt)})};ee(Ce,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.angle)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.angle)!=null&&Fe.editable)&&$e(Xe)})}var et=U(Ce,2);{var wt=$e=>{var Oe=rt(()=>d(a).inset.lb??0),Ge=rt(()=>d(a).inset.ub??.5),Fe=rt(()=>d(a).inset.step??.01);lo($e,{name:"Inset",get value(){return d(c).inset},get min(){return d(Oe)},get max(){return d(Ge)},get step(){return d(Fe)},onChangeCb:Nt=>v("inset",Nt)})};ee(et,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.inset)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.inset)!=null&&Fe.editable)&&$e(wt)})}var Tt=U(et,2);{var Kt=$e=>{ys($e,{name:"Stroke",children:(Oe,Ge)=>{Nu(Oe,{get value(){return d(c).stroke},onChangeCb:Fe=>v("stroke",Fe)})},$$slots:{default:!0}})};ee(Tt,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.stroke)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.stroke)!=null&&Fe.editable)&&$e(Kt)})}var Gt=U(Tt,2);{var Ft=$e=>{var Oe=rt(()=>d(a).strokeWidth.lb??0),Ge=rt(()=>d(a).strokeWidth.ub??.8),Fe=rt(()=>d(a).strokeWidth.step??.01);lo($e,{name:"Stroke Width",get value(){return d(c).strokeWidth},get min(){return d(Oe)},get max(){return d(Ge)},get step(){return d(Fe)},onChangeCb:Nt=>v("strokeWidth",Nt)})};ee(Gt,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.strokeWidth)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.strokeWidth)!=null&&Fe.editable)&&$e(Ft)})}var tn=U(Gt,2);{var Er=$e=>{var Oe=rt(()=>d(a).strokeDasharray.lb??0),Ge=rt(()=>d(a).strokeDasharray.ub??1),Fe=rt(()=>d(a).strokeDasharray.step??.01);lo($e,{name:"Stroke Dasharray",get value(){return d(c).strokeDasharray},get min(){return d(Oe)},get max(){return d(Ge)},get step(){return d(Fe)},onChangeCb:Nt=>v("strokeDasharray",Nt)})};ee(tn,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.strokeDasharray)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.strokeDasharray)!=null&&Fe.editable)&&$e(Er)})}var ar=U(tn,2);{var Co=$e=>{ys($e,{name:"Fill",children:(Oe,Ge)=>{Nu(Oe,{get value(){return d(c).fill},onChangeCb:Fe=>v("fill",Fe)})},$$slots:{default:!0}})};ee(ar,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.fill)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.fill)!=null&&Fe.editable)&&$e(Co)})}var Rr=U(ar,2);{var Sr=$e=>{ys($e,{name:"Font Color",children:(Oe,Ge)=>{Nu(Oe,{get value(){return d(c).fontColor},onChangeCb:Fe=>v("fontColor",Fe)})},$$slots:{default:!0}})};ee(Rr,$e=>{var Oe,Ge,Fe;((Oe=d(c))==null?void 0:Oe.fontColor)!==void 0&&((Fe=(Ge=d(a))==null?void 0:Ge.fontColor)!=null&&Fe.editable)&&$e(Sr)})}L($,W)};ee(T,$=>{d(a)&&$(M)})}L(b,x)}},$$legacy:!0}),le()}var fk=ue('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function qs(t,e){let n=G(e,"clickCb",8),r=G(e,"title",8);var o=fk(),i=Y(o),a=Y(i);gt(a,e,"default",{}),B(i),B(o),Q(()=>A(o,"title",r())),ke("click",o,$n(function(...c){var u;(u=n())==null||u.apply(this,c)})),L(t,o)}var gk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function hk(t){var e=gk();L(t,e)}var vk=ue('<div class="buttons-container svelte-kc00rw"><!></div>');function Hl(t,e){var n=vk(),r=Y(n);gt(r,e,"default",{}),B(n),L(t,n)}var pk=ue('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),mk=ue('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),Ek=ue('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function Ck(t,e){ae(e,!1);const n=Ve(),r=()=>me(Xr,"$puzzleMetaStore",n),o=()=>me(qr,"$globalConstraintsStore",n),i=()=>me(ct,"$localConstraintsStore",n);let a=G(e,"showModal",12,!1),c=N(""),u=N(""),f=N(""),g=N(""),v=N("");function h(){a(!1)}function m(){const w=d(u)?E(d(u)):["Anonymous"],T={title:d(c)?d(c):"Sudoku",authors:w,ruleset:d(f),ctcYoutubeUrl:d(g),ctcUrl:d(v)};qD(T),a(!1)}function E(w){return w.split(/\s*[;]\s*/)}function I(){var W,F,K,te;let w="";const x=Pt,T=o();!!T.get(_.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[se,Z]of T.entries())if(se!==_.SUDOKU_RULES_DO_NOT_APPLY&&Z){const ne=x[se],ge=((W=ne.menu)==null?void 0:W.name)??ne.toolId,ie=(F=ne.meta)==null?void 0:F.description;w+=`**${ge}**: ${ie}

`}const $=i();for(const[se,Z]of $.entries())if(Object.keys(Z).length>0){const ge=x[se],ie=((K=ge.menu)==null?void 0:K.name)??ge.toolId,ve=(te=ge.meta)==null?void 0:te.description;w+=`**${ie}**: ${ve}

`}return w.trim()}function b(){const w=I();O(f,w)}S(()=>(X(a()),r(),gl),()=>{if(!a()){const w=r().authors;O(c,r().title??""),O(u,w?gl(w,"; ","; "):""),O(f,r().ruleset??""),O(g,r().ctcYoutubeUrl??""),O(v,r().ctcUrl??"")}}),Ie(),fe(),Zr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,x)=>{var T=Ek(),M=Y(T);uo(M,{title:"Title"});var $=U(M,2);sn($);var W=U($,2);uo(W,{title:"Authors"});var F=U(W,2);sn(F);var K=U(F,2);uo(K,{title:"Ruleset",children:(ve,Ae)=>{var Le=pk();ke("click",Le,b),L(ve,Le)},$$slots:{default:!0}});var te=U(K,2);Xw(te),A(te,"rows",8);var se=U(te,2);uo(se,{title:"CTC Link"});var Z=U(se,2);sn(Z);var ne=U(Z,2);uo(ne,{title:"CTC Youtube Link"});var ge=U(ne,2);sn(ge);var ie=U(ge,2);Hl(ie,{children:(ve,Ae)=>{var Le=mk(),ye=oe(Le),Ce=U(ye,2);ke("click",ye,m),ke("click",Ce,h),L(ve,Le)},$$slots:{default:!0}}),B(T),qn($,()=>d(c),ve=>O(c,ve)),qn(F,()=>d(u),ve=>O(u,ve)),qn(te,()=>d(f),ve=>O(f,ve)),qn(Z,()=>d(v),ve=>O(v,ve)),qn(ge,()=>d(g),ve=>O(g,ve)),L(w,T)},$$slots:{default:!0},$$legacy:!0}),le()}var bk=ue("<!> <!>",1);function Ik(t){let e=N(!1);function n(){O(e,!0)}var r=bk(),o=oe(r);qs(o,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{hk(a)},$$slots:{default:!0}});var i=U(o,2);Ck(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var wk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function yk(t){var e=wk();L(t,e)}var Ok=ue('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function Ak(t,e){ae(e,!1);let n=N(null),r=N(null);function o(){var i;(i=d(n))==null||i.click()}S(()=>(d(r),ml),()=>{if(d(r)&&d(r).length){const i=d(r)[0],a=new FileReader;a.readAsText(i),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const f=JSON.parse(u),g=kD(f);console.log(g),t2(g),ml()}},a.onerror=function(){alert(a.error)}}}),Ie(),fe(),qs(t,{title:"Open Puzzle",clickCb:o,children:(i,a)=>{var c=Ok(),u=oe(c);yk(u);var f=U(u,2);$o(f,g=>O(n,g),()=>d(n)),yy(f,()=>d(r),g=>O(r,g)),L(i,c)},$$slots:{default:!0}}),le()}var xk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function Lk(t){var e=xk();L(t,e)}var Nk=ue('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Th(t,e){ae(e,!1);let n=G(e,"name",8),r=G(e,"min",8),o=G(e,"max",8),i=G(e,"value",12),a=G(e,"step",24,()=>(o()-r())/10),c=G(e,"onChangeCb",8,void 0),u=G(e,"onInputCb",8,void 0);fe();var f=Nk(),g=Y(f),v=Y(g);B(g);var h=U(g,2);sn(h),B(f),Q(()=>{at(v,`${n()??""}: ${i()??""}`),A(h,"min",r()),A(h,"max",o()),A(h,"step",a())}),qn(h,i),ke("change",h,()=>{c()&&c()(i())}),ke("input",h,()=>{u()&&u()(i())}),L(t,f),le()}var Rk=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),Sk=ue('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function Dk(t,e){ae(e,!1);let n=G(e,"showModal",12,!1);const r=4,o=20;let i=N(9),a=N(9),c=N(""),u=N(Lt.range(1,10));function f(){n(!1)}function g(){ml(),e2(d(a),d(i),d(u).sort()),n(!1)}function v(E){return E.map(b=>String(b)).join(",")}function h(){const E=Math.min(Math.max(d(a),d(i)),9);O(u,Lt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&O(u,E.replaceAll(" ","").split(",").map(Number))}fe(),Zr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=Sk(),w=Y(b);Th(w,{name:"Width",min:r,max:o,step:1,onInputCb:h,get value(){return d(i)},set value(F){O(i,F)},$$legacy:!0});var x=U(w,2);Th(x,{name:"Height",min:r,max:o,step:1,onInputCb:h,get value(){return d(a)},set value(F){O(a,F)},$$legacy:!0});var T=U(x,2),M=rt(()=>`Allowed Digits (for the solver): ${v(d(u))}`);uo(T,{get title(){return d(M)}});var $=U(T,2);sn($),Q(()=>A($,"placeholder",v(d(u))));var W=U($,2);Hl(W,{children:(F,K)=>{var te=Rk(),se=oe(te),Z=U(se,2);ke("click",se,g),ke("click",Z,f),L(F,te)},$$slots:{default:!0}}),B(b),qn($,()=>d(c),F=>O(c,F)),ke("input",$,()=>m(d(c))),L(E,b)},$$slots:{default:!0},$$legacy:!0}),le()}var Tk=ue("<!> <!>",1);function kk(t){let e=N(!1);function n(){O(e,!0)}var r=Tk(),o=oe(r);qs(o,{title:"New Puzzle",clickCb:n,children:(a,c)=>{Lk(a)},$$slots:{default:!0}});var i=U(o,2);Dk(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var Mk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function Gk(t){var e=Mk();L(t,e)}var Uk=ue('<button class="modal-button">Cancel</button>'),Fk=ue('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function $k(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ei,"$svgRefStore",n),o=()=>me(Xr,"$puzzleMetaStore",n),i=()=>me(js,"$puzzleStore",n),a=N();let c=G(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let x="";for(let T of w){const M=w.getPropertyValue(T);M&&(x+=`${T}:${M};`)}return x}function f(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const x=b.childNodes;for(let T=0;T<x.length;T++){const M=x[T];if(M instanceof Element){const $=f(M);w.replaceChild($,w.childNodes[T])}}return w}function g(b){if(!b)return;const w=f(b),x=hl(o()),M=new XMLSerializer().serializeToString(w),$=new Image,W=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),F=URL.createObjectURL(W);$.onload=()=>{const K=b.getBoundingClientRect(),te=K.width,se=K.height,Z=document.createElement("canvas"),ne=window.devicePixelRatio||1;Z.width=te*ne,Z.height=se*ne;const ge=Z.getContext("2d");ge&&(ge.scale(ne,ne),ge.drawImage($,0,0,te,se),Z.toBlob(ie=>{if(!ie)return;const ve=URL.createObjectURL(ie),Ae=document.createElement("a");Ae.href=ve,Ae.download=x,Ae.click(),URL.revokeObjectURL(ve)}))},$.src=F}function v(b,w="download.svg"){if(!b)return;const x=f(b);let M=new XMLSerializer().serializeToString(x);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const $=new Blob([M],{type:"image/svg+xml"}),W=URL.createObjectURL($),F=document.createElement("a");F.href=W,F.download=w,F.click(),URL.revokeObjectURL(W)}const h=b=>{const w=TD(i());return JSON.stringify(w,null,b)},m=()=>{function b(T,M,$){var W=document.createElement("a"),F=new Blob([T],{type:$});W.href=URL.createObjectURL(F),W.download=M,W.click(),URL.revokeObjectURL(W.href)}const w=h(2),x=hl(o());b(w,`${x}.json`,"text/plain")};function E(){c(!1)}const I=1;S(()=>r(),()=>{O(a,r())}),Ie(),fe(),Zr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var x=Fk(),T=Y(x),M=Y(T),$=Y(M),W=U($,2),F=U(W,2);B(M);var K=U(M,2),te=U(Y(K),2),se=Y(te);A(se,"width",400*I),A(se,"height",300*I),B(te),B(K),B(T);var Z=U(T,2);Hl(Z,{children:(ne,ge)=>{var ie=Uk();ke("click",ie,E),L(ne,ie)},$$slots:{default:!0}}),B(x),ke("click",$,m),ke("click",W,()=>g(d(a))),ke("click",F,()=>v(d(a))),L(b,x)},$$slots:{default:!0},$$legacy:!0}),le()}var Pk=ue("<!> <!>",1);function Bk(t){let e=N(!1);function n(){O(e,!0)}var r=Pk(),o=oe(r);qs(o,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{Gk(a)},$$slots:{default:!0}});var i=U(o,2);$k(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var Hk=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function hp(t){var e=Hk();L(t,e)}var Wk=ue('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),zk=ue('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function qa(t,e){let n=G(e,"title",8),r=G(e,"isOpen",12,!0);var o=zk(),i=Y(o);uo(i,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=U(i,2);Xd(a,{get isOpen(){return r()},children:(c,u)=>{var f=Wk(),g=Y(f);gt(g,e,"default",{}),B(f),L(c,f)},$$slots:{default:!0}}),B(o),L(t,o)}var Yk=ue('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function jk(t,e){let n=G(e,"value",8),r=G(e,"onClickCb",8),o=G(e,"disabled",8,!1);var i=Yk(),a=Y(i);sn(a),fo(2),B(i),Q(()=>{vt(i,"disabled",o()),ev(a,n()),a.disabled=o()}),ke("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),L(t,i)}var Kk=ue('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function co(t,e){ae(e,!1);let n=G(e,"value",8),r=G(e,"name",8),o=G(e,"updateCb",8,void 0),i=G(e,"disabled",8,!1);function a(){i()||o()&&o()(!n())}fe();var c=Kk(),u=Y(c);jk(u,{get value(){return n()},onClickCb:a,get disabled(){return i()}});var f=U(u,2),g=Y(f,!0);B(f),B(c),Q(()=>{vt(c,"disabled",i()),at(g,r())}),ke("click",f,$n(a)),L(t,c),le()}var Vk=ue("<!> <!>",1),Xk=ue("<!> <!> <!>",1),qk=ue("<!> <!>",1),Zk=ue('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function vp(t,e){ae(e,!1);const n=Ve(),r=()=>me(vo,"$settingsStore",n),o=()=>me(Gl,"$gameModeStore",n),i=N();let a=G(e,"showModal",12,!1);S(()=>r(),()=>{O(i,r())}),Ie(),fe(),Zr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var f=Zk(),g=Y(f);qa(g,{title:"General",children:(I,b)=>{co(I,{get value(){return d(i).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:cy})},$$slots:{default:!0}});var v=U(g,2);qa(v,{title:"Tools",children:(I,b)=>{var w=Vk(),x=oe(w);co(x,{get value(){return d(i).penToolActive},name:"Pen Tool",updateCb:uy});var T=U(x,2);co(T,{disabled:!0,get value(){return d(i).letterToolActive},name:"Letter Tool",updateCb:dy}),L(I,w)},$$slots:{default:!0}});var h=U(v,2);qa(h,{title:"Gameplay",children:(I,b)=>{var w=Xk(),x=oe(w);co(x,{name:"Check Conflicts",get value(){return d(i).checkConflicts},updateCb:_y});var T=U(x,2);co(T,{name:"Highlight Pencilmark Conflicts",get value(){return d(i).highlightPencilmarkConflicts},updateCb:fy});var M=U(T,2);co(M,{name:"Highlight Cells Seen By Selection",get value(){return d(i).highlightCellsSeenBySelection},updateCb:gy}),L(I,w)},$$slots:{default:!0}});var m=U(h,2);{var E=I=>{qa(I,{title:"Setting Mode Display",children:(b,w)=>{var x=qk(),T=oe(x);co(T,{name:"Hide Fog",get value(){return d(i).hideFog},updateCb:hy});var M=U(T,2);co(M,{name:"Show Solution",get value(){return d(i).showSolution},updateCb:vy}),L(b,x)},$$slots:{default:!0}})};ee(m,I=>{o()===Ii.SETTING&&I(E)})}B(f),L(c,f)},$$slots:{default:!0},$$legacy:!0}),le()}var Qk=ue("<!> <!>",1);function Jk(t){let e=N(!1);function n(){O(e,!0)}var r=Qk(),o=oe(r);qs(o,{title:"Settings",clickCb:n,children:(a,c)=>{hp(a)},$$slots:{default:!0}});var i=U(o,2);vp(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var e3=ue('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function t3(t){var e=e3(),n=Y(e);kk(n);var r=U(n,2);Bk(r);var o=U(r,2);Ak(o,{});var i=U(o,2);Ik(i);var a=U(i,2);Jk(a),B(e),L(t,e)}var n3=ue('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function r3(t,e){ae(e,!1);let n=N(!1);function r(){const o=Te(Cn),i=[];for(let a=0;a<o.nRows;a++){const c=[];for(let u=0;u<o.nCols;u++){const f=o.getCell(a,u);if(!f)continue;const g=f.value;c.push(g)}i.push(c)}Kd(i)}fe(),$l(t,{get isOpen(){return d(n)},set isOpen(o){O(n,o)},$$slots:{"panel-header":(o,i)=>{Fl(o,{slot:"panel-header",title:"Other Tools",get isOpen(){return d(n)},set isOpen(a){O(n,a)},$$legacy:!0})},"panel-content":(o,i)=>{var a=n3();ke("click",a,r),L(o,a)}},$$legacy:!0}),le()}const o3={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function i3(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const o=r[1],i=parseInt(r[2],10);if(o===">"||o===">=")return{lower_bound:[i,o]};if(o==="<"||o==="<=")return{upper_bound:[i,o]}}if(r=n.exec(t),r){const o=r[1],i=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[i,o==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function s3(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function a3(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function l3(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function pp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function c3(t,e){const n=s3(t);if(n)return{type:"number",parsed:parseInt(n)};const r=a3(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const o=l3(t);if(e.allow_int_list&&o)return{type:"number_list",parsed:o};const i=i3(t);if(e.allow_interval&&i)return{type:"interval",parsed:i};const a=pp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var j=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(j||{});function _t(t,e){return`${e}[${t.r},${t.c}]`}function zi(t,e){return t.map(r=>_t(r,e))}function be(t,e){return"["+zi(t,e).join(",")+"]"}function Ne(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function Et(t){return t.map(n=>Ne(n))}function Go(t){return`constraint alldifferent([${t.join(",")}]);
`}function Dt(t,e){return t&&(t=`
% ${e}
`+t),t}function e_(t,e){const n=[Pe.N,Pe.S,Pe.W,Pe.E],r=[];for(const o of n){const i=t.getCellsInDirection(e.r,e.c,o);r.push(i)}return r}function t_(t,e,n=void 0){n||(n=[Pe.N,Pe.S,Pe.W,Pe.E]);const r=[];for(const o of n){const i=t.getCellsInDirection(e.r,e.c,o),a="["+Et(i).join(",")+"]";r.push(a)}return r}function He(t,e,n,r){const o=n.constraints;let i="";for(const[a,c]of Object.entries(o)){const u=r(t,e,a,c);i+=u}return i}function or(t,e,n,r){let o="";const i=n.tool_id,a=r.get(i);if(a){const c=a(t,e,n);o+=c}return o}class u3{constructor(e){Ee(this,"model_str","");Ee(this,"used_vars");Ee(this,"puzzle");Ee(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=o3){const o=c3(e,r);if(!o)return null;if(o.type==="number"){const c=o.parsed;return["",String(c)]}let i="";if(o.type==="variable"){const c=o.parsed;return this.hasVariable(c)||(i+=`var int: ${c};
`,this.addVariable(c)),[i,c]}if(!n)return null;if(this.hasVariable(n)||(i+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const c=o.parsed;if(c.lower_bound){const u=c.lower_bound[0],f=c.lower_bound[1];i+=`constraint ${n} ${f} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],f=c.upper_bound[1];i+=`constraint ${n} ${f} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";i+=`constraint member(${u}, ${n});
`}if(o.type==="var_list"){const c=o.parsed,u="["+c.join(",")+"]";for(const f of c){const g=parseInt(f);Number.isNaN(g)&&!this.hasVariable(f)&&(i+=`var int: ${f};
`,this.addVariable(f))}i+=`constraint member(${u}, ${n});
`}return[i,n]}}function d3(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,o=/^predicate\s+(\w+)\s*\(/,i=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,f=0,g=0;for(let w=0;w<e.length;w++){const x=e[w].trim(),T=x.match(r),M=x.match(o),$=x.match(i),W=x.match(a);if(!c&&(T||M||$||W)){c={name:(T||M||$||W)[1],startLine:w,content:[e[w]],type:T?"function":M?"predicate":$?"test":"variable"},u=(x.match(/\(/g)||[]).length-(x.match(/\)/g)||[]).length,f=(x.match(/\{/g)||[]).length-(x.match(/\}/g)||[]).length,g=(x.match(/\[/g)||[]).length-(x.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[w]),u+=(x.match(/\(/g)||[]).length-(x.match(/\)/g)||[]).length,f+=(x.match(/\{/g)||[]).length-(x.match(/\}/g)||[]).length,g+=(x.match(/\[/g)||[]).length-(x.match(/\]/g)||[]).length,u===0&&f===0&&g===0&&x.endsWith(";"))){n[c.name]={...c,endLine:w};let F=c.startLine;for(;F>0&&e[F-1].trim().startsWith("%");)F-=1;n[c.name].startLine=F,c=null}}function v(w){const x=[],T=w.match(r),M=w.match(o),$=w.match(i);for(const W of Object.keys(n)){const F=n[W].type;if(F==="function"||F==="test"||F==="predicate"){if(T||M||$)continue;new RegExp(`\\b${W}\\s*\\(`,"g").test(w)&&x.push(W)}else if(F==="variable"){const K=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${W}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(w.match(K))continue;new RegExp(`\\b${W}\\b`,"g").test(w)&&x.push(W)}}return x}const h=new Set;for(const w of e)v(w).forEach(T=>h.add(T));console.log("usedDefinitions",h);const m=Object.values(n).filter(w=>!h.has(w.name)).map(w=>({start:w.startLine,end:w.endLine}));m.sort((w,x)=>x.start-w.start);const E=[...e];for(const w of m)E.splice(w.start,w.end-w.start+1);const I=[];let b=!1;for(const w of E)w.trim()===""?b||(I.push(w),b=!0):(I.push(w),b=!1);return I.join(`
`)}function kh(t){let e=t,n=e.length;for(;e=d3(e),e.length!=n;)n=e.length;return e}function mp(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(o=>o.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function _3(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),o=Math.max(...n),i=[];for(let c=0;c<e.nRows;c++){const u=[];for(let f=0;f<e.nCols;f++){const g=e.getCell(c,f);!g||g.region===null?u.push(r-1):u.push(g.region)}i.push(u)}const a=mp(i);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${o}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function n_(t){const e=new Map;for(const n of t){const r=n.value??"",o=e.get(r);if(!o){e.set(r,[n]);continue}o.push(n)}return e}function en(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*Qr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Zs(t,e){return[...Object.values(t)].find(o=>{const i=o.cell;if(e.c===i.c&&e.r===i.r)return o})}function f3(t,e){const r=t.grid.getPositiveDiagonal(),o=Et(r);let i=Go(o);return i=`
% Positive Diagonal Constraint
`+i,i}function g3(t,e){const r=t.grid.getNegativeDiagonal(),o=Et(r);let i=Go(o);return i=`
% Negative Diagonal Constraint
`+i,i}function h3(t,e){const r=t.grid.getPositiveDiagonal(),i="["+Et(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${i}) == 3;
`,a}function v3(t,e){const r=t.grid.getNegativeDiagonal(),i="["+Et(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${i}) == 3;
`,a}function p3(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let i="";const a=n.getPositiveDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let g=0;g<u;g++){const v=n.getCell(g,f),h=n.getCell(u,f+(u-g));if(!v||!h)continue;const m=Ne(v),E=Ne(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;i+=b}}return i}function m3(t,e){const n=t.grid,[r,o]=[n.nRows,n.nCols];if(r!==o)return"";let i="";const a=n.getNegativeDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let g=0;g<u;g++){const v=n.getCell(g,f),h=n.getCell(u,f-(u-g));if(!v||!h)continue;const m=Ne(v),E=Ne(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;i+=b}}return i}function E3(t,e){const n=t.grid;let r=`
% ${e}
`;const o=[...n.getUsedRegions()].length;for(let i=0;i<o;i++){const a=n.getDisjointGroup(i),f=`constraint alldifferent(${`[${Et(a).join(",")}]`});
`;r+=f}return r}function C3(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getNeighboorCells(o).filter(v=>v.r+v.c>=o.r+o.c),c=Ne(o),f=`[${Et(a).join(",")}]`,g=`constraint different_from_group_p(${c}, ${f});
`;r+=g}return r}function b3(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const a=n.getCellsByKnightMove(o).filter(v=>v.r>=o.r||v.c>=o.c),c=Ne(o),f=`[${Et(a).join(",")}]`,g=`constraint different_from_group_p(${c}, ${f});
`;r+=g}return r}function I3(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=Dt(n,`${e}`),n}function w3(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=Dt(n,`${e}`),n}function y3(t,e){let n="";return n+=`constraint tango_p(board);
`,n=Dt(n,`${e}`),n}function O3(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=Dt(n,`${e}`),n}function A3(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,i]of Qr(n)){const a=Ne(o),c=Ne(i),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function x3(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,i]of Qr(n)){const a=Ne(o),c=Ne(i),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function L3(t,e){const n=t.grid;let r=`
% ${e}
`;for(const o of n.getAllCells()){const i=n.getRow(o.r),c=`[${Et(i).join(",")}]`,u=o.c+1,f=`constraint indexing_column_p(${c}, ${u});
`;r+=f}return r}function N3(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function R3(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function S3(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=Dt(n,`${e}`),n}function D3(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[o,i]of Qr(n)){const a=Ne(o),c=Ne(i),u=`nurimisaki[${o.r},${o.c}]`,f=`nurimisaki[${i.r},${i.c}]`,g=`constraint (${u} == 0 /\\ ${f} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=g}return r}function T3(t,e){const n=t.grid,o=t.elementsDict.get(_.YIN_YANG_REGION_SUM_LINE);if(!o)return"";let i=`
% ${e}
`;for(const a of Object.values(o)){const u=a.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),f=be(u,j.YIN_YANG);i+=`constraint count_unique_values(${f}) >= 2;
`}return i}function k3(t,e){const n=t.grid;let r=`
% ${e}
`;const o=j.YIN_YANG;for(const[i,a]of Qr(n)){const c=Ne(i),u=Ne(a),f=`${o}[${i.r},${i.c}]`,g=`${o}[${a.r},${a.c}]`,v=`constraint (${f} == 1 /\\ ${g} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=v}return r}function M3(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=Dt(n,`${e}`),n}function G3(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=Dt(n,`${e}`),n}function U3(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=Dt(n,`${e}`),n}function F3(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=Dt(n,`${e}`),n}function $3(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=Dt(n,`${e}`),n}function P3(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=Dt(n,`${e}`),n}function B3(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=Dt(n,`${e}`),n}function H3(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=Dt(n,`${e}`),n}function W3(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=Dt(n,`${e}`),n}function z3(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=Dt(n,`${e}`),n}function Y3(t,e){let n="";const r=t.grid;for(const o of r.getAllCells()){const i=r.getNeighboorCells(o).filter(f=>o.region!==null&&f.region===o.region),a=_t(o,j.BOARD),c=_t(o,j.YIN_YANG),u=be(i,j.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=Dt(n,`${e}`),n}function j3(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=Dt(n,`${e}`),n}function K3(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=Dt(n,`${e}`),n}function V3(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=Dt(n,`${e}`),n}function X3(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=Dt(n,`${e}`),n}function q3(t,e){let n="";const r=t.grid,i=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=i.length?Math.max(...i):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=Dt(n,`${e}`),n}function Z3(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=Dt(n,`${e}`),n}function Q3(t,e){let n="";const i="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${i});
`,n=Dt(n,`${e}`),n}function J3(t,e){let n="";const r=t.grid,o=t.grid.getUsedRegions();for(const i of o){const a=r.getRegion(i),c=[...new Set(a.map(f=>f.r))],u=[...new Set(a.map(f=>f.c))];for(const f of u){const g=a.filter(h=>h.c===f),v=be(g,j.BOARD);n+=`constraint entropy_and_modularity_set_p(${v});
`}for(const f of c){const g=a.filter(h=>h.r===f),v=be(g,j.BOARD);n+=`constraint entropy_and_modularity_set_p(${v});
`}}return n=Dt(n,`${e}`),n}function e5(t){const e=t.globalConstraints;if(e.get(_.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const o=n.nRows;for(let c=0;c<o;c++){const u=n.getRow(c),f=Et(u),g=Go(f);r+=g}r+=`
% col constraints (digits do not repeat on cols)
`;const i=n.nCols;for(let c=0;c<i;c++){const u=n.getCol(c),f=Et(u),g=Go(f);r+=g}if(!e.get(_.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const f=n.getRegion(u),g=Et(f),v=Go(g);r+=v}}return r}function t5(t){const e=_.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let o=`
% ${e}
`;return o+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,o}const n5=new Map([[_.POSITIVE_DIAGONAL,f3],[_.NEGATIVE_DIAGONAL,g3],[_.POSITIVE_ANTIDIAGONAL,h3],[_.NEGATIVE_ANTIDIAGONAL,v3],[_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,p3],[_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,m3],[_.ANTIKING,C3],[_.ANTIKNIGHT,b3],[_.ANTI_LONG_KNIGHT,w3],[_.ANTI_GIRAFFE,I3],[_.DISJOINT_GROUPS,E3],[_.TANGO,y3],[_.NONCONSECUTIVE,A3],[_.NONRATIO,x3],[_.ANTI_ENTROPY,O3],[_.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,J3],[_.GLOBAL_INDEXING_COLUMN,L3],[_.NURIMISAKI_PATH_GERMAN_WHISPERS,D3],[_.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,T3],[_.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,S3],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,N3],[_.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,R3],[_.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,M3],[_.CAVE_CELLS_ARE_ODD,U3],[_.CAVE_WALLS_ARE_EVEN,F3],[_.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,$3],[_.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,P3],[_.YIN_YANG_FILLOMINO_PARITY,G3],[_.TWO_SYMMETRIC_GALAXIES,W3],[_.EVERY_CELL_BELONGS_TO_A_GALAXY,B3],[_.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,H3],[_.ONE_GALAXY_IS_A_GERMAN_WHISPERS,z3],[_.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,Y3],[_.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,k3],[_.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,j3],[_.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Q3],[_.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,K3],[_.DIRECTED_PATH_IS_REGION_SUM_LINE,V3],[_.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,X3],[_.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,q3],[_.DIRECTED_PATH_IS_PARITY_LINE,Z3]]);function r5(t){let e="";const n=t.globalConstraints;for(const[r,o]of n.entries()){if(!o)continue;const i=n5.get(r);if(!i)continue;const a=i(t,r);e+=a}return e}function Ep(t,e){const r=e.cells.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return Et(r)}function Cp(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return`[${Et(n.slice(1)).join(",")}]`}function bp(t,e,n){let r="";const i="["+Ep(t,e).join(",")+"]";for(const a of e.lines){const c=Cp(t,a);r+=`constraint ${n}(${i}, ${c});
`}return r}function Ip(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=bp(t,i,n);o+=a}return o}function o5(t,e,n){return Ip(e,n,"arrow_p")}function i5(t,e,n){return Ip(e,n,"bulbous_arrow_p")}function s5(t,e,n,r){let o="";const i=Ep(e,r);if(i.length===1){const a=i[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${Cp(e,u)}, ${a});
`;o+=g}}return o}function a5(t,e,n){return He(t,e,n,s5)}function l5(t,e,n,r){let o="";const i=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=be(i,j.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f));for(const u of c){if(u.length<=1)continue;const f=be(u.slice(1),j.UNKNOWN_REGIONS);o+=`constraint chaos_construction_arrow_p(${a}, ${f});
`}return o+=bp(e,r,"arrow_p"),o}function c5(t,e,n){return He(t,e,n,l5)}const u5=new Map([[_.ARROW,o5],[_.AVERAGE_ARROW,a5],[_.BULBOUS_ARROW,i5],[_.CHAOS_CONSTRUCTION_ARROW,c5]]);function d5(t,e,n){return or(t,e,n,u5)}function go(t,e){const n=en(t,e.cells);return Et(n)}function _5(t,e,n){const o=`[${go(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function wp(t,e,n,r){const o=n.constraints;let i="";for(const a of Object.values(o)){const c=_5(e,a,r);i+=c}return i}function Wl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},o=`cage_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function f5(t,e,n,r,o){const a=`[${go(e,r).join(",")}]`,c=r.value,u=Wl(t,c,n);if(!u)return"";const f=u[1];let g=u[0];return g+=`constraint ${o}(${a}, ${f});
`,g}function r_(t,e,n,r){const o=n.constraints;let i="";for(const[a,c]of Object.entries(o)){const u=f5(t,e,a,c,r);i+=u}return i}function g5(t,e,n,r){const o=go(e,r),i=`[${o.join(",")}]`,a=r.value;if(!a)return Go(o);const c=Wl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint killer_cage(${i}, ${u});
`,f}function h5(t,e,n){return He(t,e,n,g5)}function v5(t,e,n,r){const o=go(e,r),i=`[${o.join(",")}]`,a=r.value;if(!a)return Go(o);const c=Wl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint inverted_killer_cage_p(${i}, ${u});
`,f}function p5(t,e,n){return He(t,e,n,v5)}function m5(t,e,n){return r_(t,e,n,"sum_cage_p")}function E5(t,e,n){return wp(t,e,n,"parity_balance_cage_p")}function C5(t,e,n){return wp(t,e,n,"sum_cage_look_and_say_p")}function b5(t,e,n){return r_(t,e,n,"divisible_killer_cage_p")}function I5(t,e,n){return r_(t,e,n,"spotlight_cage_p")}function w5(t,e,n,r){const i=`[${go(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${i}, ${c}, ALLOWED_DIGITS);
`}return""}function y5(t,e,n){return He(t,e,n,w5)}function O5(t,e,n,r){const i=`[${go(e,r).join(",")}]`,a=r.value;let c="";const u=Wl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${i}) == ${m};
`}const f=r.cells,g=en(e,f),v=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!v.includes(I)&&v.push(I)});const h=be(v,j.BOARD);return c+=`constraint vaulted_cage_p(${i}, ${h});
`,c}function A5(t,e,n){return He(t,e,n,O5)}function x5(t,e,n,r,o){const i=en(e,r.cells),a=be(i,j.BOARD),c=be(i,j.YIN_YANG),u=r.value;if(u){const f=parseInt(u);return`constraint ${o}(${a}, ${c}, ${f});
`}return""}function yp(t,e,n,r){const o=n.constraints;let i="";for(const[a,c]of Object.entries(o)){const u=x5(t,e,a,c,r);i+=u}return i}function L5(t,e,n){return yp(t,e,n,"yin_yang_antithesis_killer_cage_p")}function N5(t,e,n){return yp(t,e,n,"yin_yang_breakeven_killer_cage_p")}function R5(t,e,n,r){const o=en(e,r.cells),i=be(o,j.BOARD),a=be(o,j.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${i}, ${a}, ${u});
`}return""}function S5(t,e,n){return He(t,e,n,R5)}function D5(t,e,n,r){const o=en(e,r.cells),i=be(o,j.BOARD),a=be(o,j.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${i}, ${a}, ${u});
`}return""}function T5(t,e,n){return He(t,e,n,D5)}function k5(t,e,n){let r="";const o=n.constraints,i=n_(Object.values(o));for(const a of i.values())if(!(a.length<=1))for(const[c,u]of a.flatMap((f,g)=>a.slice(g+1).map(v=>[f,v]))){const g=`[${go(e,c).join(",")}]`,h=`[${go(e,u).join(",")}]`;r+=`constraint multisets_equal_p(${g}, ${h});
`}return r}const M5=new Map([[_.KILLER_CAGE,h5],[_.INVERTED_KILLER_CAGE,p5],[_.SUM_CAGE,m5],[_.PARITY_BALANCE_CAGE,E5],[_.SUM_CAGE_LOOK_AND_SAY,C5],[_.DIVISIBLE_KILLER_CAGE,b5],[_.SPOTLIGHT_CAGE,I5],[_.UNIQUE_DIGITS_CAGE,y5],[_.VAULTED_CAGE,A5],[_.YIN_YANG_ANTITHESIS_KILLER_CAGE,L5],[_.YIN_YANG_BREAKEVEN_KILLER_CAGE,N5],[_.DOUBLERS_KILLER_CAGE,S5],[_.NEGATORS_KILLER_CAGE,T5],[_.MULTISET_CAGE,k5]]);function G5(t,e,n){return or(t,e,n,M5)}function U5(t,e,n,r){const o=e.r+.5,i=e.c+.5,a=n-o,c=r-i,u=Math.floor(n+a),f=Math.floor(r+c);return t.getCell(u,f)}function F5(t,e){const n=[],r=[],o=[];for(const i of t.getAllCells()){const a=U5(t,i,e.r,e.c);a&&!n.includes(a)?(n.push(i),r.push(a)):r.includes(i)||o.push(i)}return[n,r,o]}function $5(t,e,n){let r="";const o=n.constraints,i=[...Object.values(o)];for(let f=0;f<i.length;f++){const g=i[f],v=g.cell,h=f+1,[m,E,I]=F5(e,v),b=be(m,j.GALAXY_REGIONS),w=be(E,j.GALAXY_REGIONS),x=be(I,j.GALAXY_REGIONS);r+=`% galaxy ${h}
`,r+=`constraint galaxy_center_p(${b}, ${w}, ${x}, ${h});
`,r+=`constraint connected_region(${j.GALAXY_REGIONS}, ${h});
`;const T=g.value;if(!T)continue;const M=parseInt(T);r+=`constraint galaxy_sum_p(${j.BOARD}, ${j.GALAXY_REGIONS}, ${M}, ${h});
`}if(!i.length)return r;const a=e.nCols*e.nRows,u=`${i.length+1}..${a}`;return r+=`
constraint order_remaining_galaxies_p(${j.GALAXY_REGIONS}, ${u});
`,r}function P5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function B5(t,e,n,r){const o=r.cell,[i,a]=[o.r,o.c],c=r.value,u=P5(t,c,n);if(!u)return"";const f=u[1];let g=u[0],v=[];if(i%1===0&&a%1===0?v=dl(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(i%1===.5&&a%1===0||i%1===0&&a%1===.5)&&(v=_l(o).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!v.length)return"";const h=be(v,j.BOARD),m=be(v,j.YIN_YANG);return g+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${f};
`,g}function H5(t,e,n){return He(t,e,n,B5)}const W5=new Map([[_.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,H5],[_.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,$5]]);function z5(t,e,n){return or(t,e,n,W5)}function Mh(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return Et(n)}function Y5(t,e){const r="["+Mh(t,e.cells).join(",")+"]",i="["+Mh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${i});
`}function j5(t,e,n){const r=n.constraints;let o="";for(const i of Object.values(r)){const a=Y5(e,i);o+=a}return o}const K5=new Map([[_.CLONE_REGION,j5]]);function V5(t,e,n){return or(t,e,n,K5)}function o_(t,e){const n=en(t,e.cells);return Et(n)}function X5(t,e,n){const o=`[${o_(t,e).join(",")}]`;return`constraint ${n}(${o});
`}function i_(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=X5(t,i,n);o+=a}return o}function q5(t,e,n,r,o,i=""){const c=`[${o_(e,r).join(",")}]`;let u=r.value;if(u||(u=i),u){const f=parseInt(u);return`constraint ${o}(${c}, ${f});
`}return""}function Op(t,e,n,r,o=""){const i=n.constraints;let a="";for(const[c,u]of Object.entries(i)){const f=q5(t,e,c,u,r,o);a+=f}return a}function Z5(t,e,n,r){const i=`[${o_(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=pp(a);if(!c)return"";let u="";for(const g of c){const v=parseInt(g);Number.isNaN(v)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const f="["+c.join(",")+"]";return u+=`constraint quadruple_p(${i}, ${f});
`,u}function Q5(t,e,n){const r=n.constraints;let o="";for(const[i,a]of Object.entries(r)){const c=Z5(t,e,i,a);o+=c}return o}function J5(t,e,n){return Op(t,e,n,"corner_sum_p")}function eM(t,e,n){return Op(t,e,n,"corner_even_count_p")}function tM(t,e,n){return i_(e,n,"corner_sum_of_three_equals_the_other_p")}function nM(t,e,n){return i_(e,n,"equal_diagonal_differences_p")}function rM(t,e,n){return i_(e,n,"product_square_p")}const oM=new Map([[_.QUADRUPLE,Q5],[_.CORNER_SUM,J5],[_.CORNER_EVEN_COUNT,eM],[_.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,tM],[_.PRODUCT_SQUARE,rM],[_.EQUAL_DIAGONAL_DIFFERENCES,nM]]);function iM(t,e,n){return or(t,e,n,oM)}function Qs(t,e,n){return[...Object.values(t)].find(i=>{const a=i.cells[0],c=i.cells[1];if(e.c===a.c&&e.r===a.r&&n.c===c.c&&n.r===c.r||e.c===c.c&&e.r===c.r&&n.c===a.c&&n.r===a.r)return i})}function zl(t,e){const n=en(t,e.cells);return Et(n)}function sM(t,e,n){const r=zl(t,e),[o,i]=r;return`constraint ${n}(${o}, ${i});
`}function aM(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=sM(t,i,n);o+=a}return o}function lM(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`edge_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function cM(t,e,n,r,o,i=""){var m;const a=zl(e,r),[c,u]=a,f=(m=r.value)!=null&&m.length?r.value:i,g=lM(t,f,n);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint ${o}(${c}, ${u}, ${v});
`,h}function Yl(t,e,n,r,o=""){const i=n.constraints;let a="";for(const[c,u]of Object.entries(i)){const f=cM(t,e,c,u,r,o);a+=f}return a}function uM(t,e){const n=zl(t,e),[r,o]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${o} = 5;
`:`constraint ${r} + ${o} = 10;
`}function dM(t,e,n){const r=n.constraints;let o="";for(const u of Object.values(r)){const f=uM(e,u);o+=f}if(!n.negative_constraints)return o;const i=!!n.negative_constraints[_.NEGATIVE_V_CONSTRAINT],a=!!n.negative_constraints[_.NEGATIVE_X_CONSTRAINT],c=!!n.negative_constraints[_.NEGATIVE_XV_CONSTRAINT];if(!i&&!a&&!c)return o;for(const[u,f]of Qr(e)){const g=Qs(r,u,f),v=Ne(u),h=Ne(f);if(i&&(!g||g.value!=="V"&&g.value!=="v")){const m=`constraint ${v} + ${h} != 5;
`;o+=m}else if(a&&(!g||g.value!=="X"&&g.value!=="x")){const m=`constraint ${v} + ${h} != 10;
`;o+=m}else if(c&&!g){const m=`constraint ${v} + ${h} != 5 /\\ (${v} + ${h} != 10);
`;o+=m}}return o}function _M(t,e,n){let r=Yl(t,e,n,"ratio_p","2");if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_RATIOS_GIVEN])return r;const i=n.constraints;let a=[];i&&(a=Object.values(i).map(u=>u.value).map(u=>u||"2")),a.length===0&&a.push("2");const c=[...new Set(a)];console.log("values",c),r+=`
% ${_.ALL_RATIOS_GIVEN}
`;for(const[u,f]of Qr(e)){if(Qs(i,u,f))continue;const v=Ne(u),h=Ne(f);for(const m of c){const E=parseInt(m),I=`constraint not ratio_p(${v}, ${h}, ${E});
`;r+=I}}return r}function fM(t,e,n){let r=Yl(t,e,n,"abs_difference","1");if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_DIFFERENCES_GIVEN])return r;const i=n.constraints;let a=[];i&&(a=Object.values(i).map(u=>u.value).map(u=>u||"1")),a.length===0&&a.push("1");const c=[...new Set(a)];r+=`
% ${_.ALL_DIFFERENCES_GIVEN}
`;for(const[u,f]of Qr(e)){if(Qs(i,u,f))continue;const v=Ne(u),h=Ne(f);for(const m of c){const E=parseInt(m),I=`constraint abs(${v} - ${h}) != ${E};
`;r+=I}}return r}function gM(t,e){const n=zl(t,e),[r,o]=n,i=e.value;return i==="<"?`constraint ${r} < ${o};
`:i===">"?`constraint ${r} > ${o};
`:""}function Gh(t,e,n){const r=n.constraints;let o="";for(const i of Object.values(r)){const a=gM(e,i);o+=a}return o}function hM(t,e,n){return Yl(t,e,n,"edge_sum_p")}function vM(t,e,n){return Yl(t,e,n,"edge_modulo_p")}function pM(t,e,n){return aM(e,n,"edge_factor_p")}function Ap(t,e,n){const r=Ne(e),o=Ne(n);let i="";if(e.r==n.r){const u=t.getRow(e.r)[0];i=Ne(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];i=Ne(u)}return i?`xy_differences_p(${r}, ${o}, ${i});
`:""}function mM(t,e){const n=en(t,e.cells),[r,o]=n,i=Ap(t,r,o);return i.length===0?"":`constraint ${i}`}function EM(t,e,n){const r=n.constraints;let o="";for(const a of Object.values(r)){const c=mM(e,a);o+=c}if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_XY_DIFFERENCES_GIVEN])return o;o+=`
% ${_.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[a,c]of Qr(e)){if(Qs(r,a,c))continue;const f=Ap(e,a,c);if(f.length===0)continue;const g=`constraint not ${f}`;o+=g}return o}function CM(t,e,n){const r=en(t,e.cells),[o,i]=Et(r),a=zi(r,j.YIN_YANG),[c,u]=a;return`constraint ${n}(${o}, ${i}, ${c}, ${u});
`}function xp(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=CM(t,i,n);o+=a}return o}function bM(t,e,n){let r=xp(e,n,"yin_yang_kropki_p");if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_YIN_YANG_KROPKI_GIVEN])return r;const i=n.constraints;r+=`
% ${_.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[a,c]of Qr(e)){if(Qs(i,a,c))continue;const f=Ne(a),g=Ne(c),v=_t(a,j.YIN_YANG),h=_t(c,j.YIN_YANG),m=`constraint not yin_yang_kropki_p(${f}, ${g}, ${v}, ${h});
`;r+=m}return r}function IM(t,e,n){return xp(e,n,"yin_yang_white_kropki_p")}function wM(t,e,n){const r=en(t,e.cells),o=zi(r,n),[i,a]=o;return`constraint ${i} != ${a};
`}function jl(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=wM(t,i,n);o+=a}return o}function yM(t,e,n){return jl(e,n,j.UNKNOWN_REGIONS)}function OM(t,e,n){return jl(e,n,j.FILLOMINO_REGIONS)}function AM(t,e,n){return jl(e,n,j.SUGURU_REGIONS)}function xM(t,e,n){return jl(e,n,j.CAVE_SHADING)}const LM=new Map([[_.XV,dM],[_.DIFFERENCE,fM],[_.RATIO,_M],[_.EDGE_INEQUALITY,Gh],[_.ONE_WAY_DOOR,Gh],[_.EDGE_SUM,hM],[_.EDGE_MODULO,vM],[_.EDGE_FACTOR,pM],[_.XY_DIFFERENCES,EM],[_.YIN_YANG_KROPKI,bM],[_.YIN_YANG_WHITE_KROPKI,IM],[_.FILLOMINO_REGION_BORDER,OM],[_.UNKNOWN_REGION_BORDER,yM],[_.CHAOS_CONSTRUCTION_SUGURU_BORDER,AM],[_.EDGE_CAVE_ONE_OF_EACH,xM]]);function NM(t,e,n){return or(t,e,n,LM)}function RM(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},o=`line_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function Kl(t,e,n=!1){let r=en(t,e.cells);return n&&(r=[...new Set(r)]),Et(r)}function SM(t,e,n,r=!1){const i=`[${Kl(t,e,r).join(",")}]`;return`constraint ${n}(${i});
`}function ht(t,e,n,r=!1){const o=e.constraints;let i="";for(const a of Object.values(o)){const c=SM(t,a,n,r);i+=c}return i}function DM(t,e,n,r,o,i=""){var h;const c=`[${Kl(e,r).join(",")}]`,u=(h=r.value)!=null&&h.length?r.value:i,f=RM(t,u,n);if(!f)return"";const g=f[1];let v=f[0];return v+=`constraint ${o}(${c}, ${g});
`,v}function ir(t,e,n,r,o=""){const i=n.constraints;let a="";for(const[c,u]of Object.entries(i)){const f=DM(t,e,c,u,r,o);a+=f}return a}function TM(t,e,n,r=""){let i=e.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),a=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),a=!0);const u=`[${Et(i).join(",")}]`;let f=e.value;f||(f=r);const g=parseInt(f);return`constraint ${n}(${u}, ${g}, ${a});
`}function s_(t,e,n,r=""){const o=e.constraints;let i="";for(const[a,c]of Object.entries(o)){const u=TM(t,c,n,r);i+=u}return i}function kM(t,e,n){return ht(e,n,"renban",!0)}function MM(t,e,n){return ht(e,n,"double_renban_p",!0)}function GM(t,e,n){return ht(e,n,"renrenbanban_p",!0)}function UM(t,e,n){return ht(e,n,"knabner_p",!0)}function FM(t,e,n){return ht(e,n,"renban_or_nabner_line_p",!0)}function $M(t,e,n){return ht(e,n,"out_of_order_consecutive_line_p")}function PM(t,e,n){return ir(t,e,n,"whispers","5")}function BM(t,e,n){return ir(t,e,n,"whispers","4")}function HM(t,e,n){return ht(e,n,"strictly_increasing")}function WM(t,e,n){return ht(e,n,"fuzzy_thermo_p")}function zM(t,e,n){return ht(e,n,"increasing")}function YM(t,e,n){return ir(t,e,n,"custom_thermo_p")}function jM(t,e,n){return ht(e,n,"palindrome")}function KM(t,e,n){return ir(t,e,n,"sum_line_p")}function VM(t,e,n){return ht(e,n,"xv_line_p")}function XM(t,e,n){return ir(t,e,n,"at_least_x_line_p","10")}function qM(t,e,n){return ir(t,e,n,"product_line_p")}function ZM(t,e,n){return ir(t,e,n,"maximum_adjacent_difference_line_p","2")}function QM(t,e,n){return ht(e,n,"adjacent_multiples_line_p")}function JM(t,e,n){return ht(e,n,"index_line_p")}function eG(t,e,n){return ht(e,n,"zipper_line_p")}function tG(t,e,n){return s_(e,n,"segmented_sum_line_p")}function nG(t,e,n){return ht(e,n,"segmented_sum_and_renban_line_p")}function rG(t,e,n){return s_(e,n,"n_consecutive_renban_line_p")}function oG(t,e,n){return s_(e,n,"n_consecutive_fuzzy_sum_line_p")}function iG(t,e,n){const r=en(t,n.cells);let o="";const i=[];for(let c=0;c<r.length;c++){const u=r[c],f=t.getRow(u.r),g=be(f,j.BOARD),v=`cycle_${e}_${c}`;i.push(v);const h=u.c+1;o+=`var int: ${v} = cycle_order_f(${g}, ${h});
`}const a="["+i.join(",")+"]";return o+=`constraint strictly_increasing(${a});
`,o}function sG(t,e,n){const r=n.constraints;let o="";for(const[i,a]of Object.entries(r)){const c=iG(e,i,a);o+=c}return o}function aG(t,e,n){return ht(e,n,"adjacent_differences_count_line_p")}function lG(t,e,n){return ht(e,n,"same_parity_line_p")}function cG(t,e,n){return ir(t,e,n,"renban_or_whispers_p","5")}function uG(t,e,n){return ht(e,n,"alldifferent",!0)}function dG(t,e,n){return ht(e,n,"repeated_digits_line_p")}function _G(t,e,n){return ht(e,n,"superfuzzy_arrow_p")}function fG(t,e,n){return ht(e,n,"ambiguous_arrow_p",!0)}function gG(t,e,n){return ht(e,n,"headless_arrow_p")}function hG(t,e,n){return ir(t,e,n,"unimodular_line_p","3")}function vG(t,e,n){return ir(t,e,n,"modular_line_p","3")}function pG(t,e,n){return ir(t,e,n,"modular_or_unimodular_line_p","3")}function mG(t,e,n){return ht(e,n,"arithmetic_sequence_line_p")}function EG(t,e,n){return ht(e,n,"odd_even_oscillator_line_p")}function CG(t,e,n){return ir(t,e,n,"high_low_oscillator_line_p","5")}function bG(t,e,n){return ht(e,n,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function IG(t,e,n){return ht(e,n,"look_and_say_line_p",!0)}function wG(t,e){const n=en(t,e.cells);function r(f){const g=[];let v=null;for(const h of f)h.r!=v?(g.push([h]),v=h.r):g[g.length-1].push(h);return g}const o=r(n);if(o.length<2)return"";const i=o[0],c=`[${Et(i).join(",")}]`;let u="";for(let f=1;f<o.length;f++){const g=o[f],h=`[${Et(g).join(",")}]`;u+=`constraint sum(${h}) == sum(${c});
`}return u}function yG(t,e,n){const r=n.constraints;let o="";for(const i of Object.values(r)){const a=wG(e,i);o+=a}return o}function OG(t,e,n){return ht(e,n,"between_line_p")}function AG(t,e,n){return ht(e,n,"tightrope_line_p")}function xG(t,e,n){return ht(e,n,"double_arrow_p")}function LG(t,e,n){return ht(e,n,"split_peas_p")}function NG(t,e,n){return ht(e,n,"parity_count_line_p")}function RG(t,e,n){return ht(e,n,"product_of_ends_equals_sum_of_line_p")}function Lp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const o of t){const i=o.region;n!==i&&(r.length&&e.push(r),r=[]),r.push(o),n=i}return r.length&&e.push(r),e}function SG(t,e,n,r){let o="";const i=en(e,r.cells),a=Lp(i);if(!a.length)return"";const c=`sum_line_${n}`;o+=`var int: ${c};
`;for(const u of a){const g=`constraint sum(${be(u,j.BOARD)}) == ${c};
`;o+=g}return o}function DG(t,e,n){return He(t,e,n,SG)}function TG(t,e,n,r){return`constraint entropic_line_p(${`[${Kl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function kG(t,e,n){return He(t,e,n,TG)}function MG(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Kl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function GG(t,e,n){return He(t,e,n,MG)}function UG(t,e,n){return ht(e,n,"peapods_p")}function FG(t,e,n,r,o,i=""){const a=en(e,r.cells),c=be(a,j.BOARD),u=be(a,j.YIN_YANG);let f=r.value;f||(f=i);const g=parseInt(f);return`constraint ${o}(${c}, ${u}, ${g});
`}function Np(t,e,n,r,o=""){const i=n.constraints;let a="";for(const[c,u]of Object.entries(i)){const f=FG(t,e,c,u,r,o);a+=f}return a}function $G(t,e,n){return Np(t,e,n,"yin_yang_shaded_whispers_line_p","5")}function PG(t,e,n){return Np(t,e,n,"yin_yang_unshaded_modular_line_p","3")}function BG(t,e,n){const r=en(t,e.cells),o=be(r,j.BOARD),i=be(r,j.YIN_YANG);return`constraint ${n}(${o}, ${i});
`}function a_(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=BG(t,i,n);o+=a}return o}function HG(t,e,n){return a_(e,n,"yin_yang_unshaded_entropic_line_p")}function WG(t,e,n){return a_(e,n,"yin_yang_indexing_line_coloring_p")}function zG(t,e,n){return a_(e,n,"yin_yang_region_sum_line_p")}function YG(t,e,n){const r=en(t,e.cells),o=be(r,j.VALUES_GRID);return`constraint ${n}(${o});
`}function l_(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=YG(t,i,n);o+=a}return o}function jG(t,e,n){return l_(e,n,"between_line_p")}function KG(t,e,n){return l_(e,n,"double_arrow_p")}function VG(t,e,n){return l_(e,n,"strictly_increasing")}function XG(t,e,n,r){const o=en(e,r.cells),i=Lp(o);if(i.sort((f,g)=>g.length-f.length),i.length<=1)return"";let a="";const c=i[0],u=be(c,j.VALUES_GRID);for(const f of i.slice(1)){const g=be(f,j.VALUES_GRID),v=`constraint subset_p(${u}, ${g});
`;a+=v}return a}function qG(t,e,n){return He(t,e,n,XG)}const ZG=new Map([[_.THERMOMETER,HM],[_.FUZZY_THERMOMETER,WM],[_.SLOW_THERMOMETER,zM],[_.CUSTOM_THERMOMETER,YM],[_.RENBAN_LINE,kM],[_.DOUBLE_RENBAN_LINE,MM],[_.RENRENBANBAN_LINE,GM],[_.NABNER_LINE,UM],[_.WHISPERS_LINE,PM],[_.DUTCH_WHISPERS,BM],[_.RENBAN_OR_WHISPERS_LINE,cG],[_.RENBAN_OR_NABNER_LINE,FM],[_.OUT_OF_ORDER_CONSECUTIVE_LINE,$M],[_.N_CONSECUTIVE_RENBAN_LINE,rG],[_.PALINDROME,jM],[_.SUM_LINE,KM],[_.PRODUCT_LINE,qM],[_.XV_LINE,VM],[_.AT_LEAST_X_LINE,XM],[_.MAXIMUM_ADJACENT_DIFFERENCE_LINE,ZM],[_.SAME_PARITY_LINE,lG],[_.ADJACENT_MULTIPLES_LINE,QM],[_.ADJACENT_DIFFERENCES_COUNT_LINE,aG],[_.LOOK_AND_SAY_LINE,IG],[_.ROW_SUM_LINE,yG],[_.INDEX_LINE,JM],[_.ZIPPER_LINE,eG],[_.SEGMENTED_SUM_LINE,tG],[_.SEGMENTED_SUM_AND_RENBAN_LINE,nG],[_.N_CONSECUTIVE_FUZZY_SUM_LINE,oG],[_.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,bG],[_.SUPERFUZZY_ARROW,_G],[_.AMBIGUOUS_ARROW,fG],[_.HEADLESS_ARROW,gG],[_.ARITHMETIC_SEQUENCE_LINE,mG],[_.ODD_EVEN_OSCILLATOR_LINE,EG],[_.HIGH_LOW_OSCILLATOR_LINE,CG],[_.UNIQUE_VALUES_LINE,uG],[_.REPEATED_DIGITS_LINE,dG],[_.UNIMODULAR_LINE,hG],[_.MODULAR_LINE,vG],[_.MODULAR_OR_UNIMODULAR_LINE,pG],[_.REGION_SUM_LINE,DG],[_.ENTROPIC_LINE,kG],[_.ENTROPIC_OR_MODULAR_LINE,GG],[_.ROW_CYCLE_THERMOMETER,sG],[_.PEAPODS,UG],[_.BETWEEN_LINE,OG],[_.TIGHTROPE_LINE,AG],[_.DOUBLE_ARROW_LINE,xG],[_.SPLIT_PEAS,LG],[_.PARITY_COUNT_LINE,NG],[_.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,RG],[_.DOUBLERS_BETWEEN_LINE,jG],[_.DOUBLERS_DOUBLE_ARROW_LINE,KG],[_.DOUBLERS_THERMOMETER,VG],[_.INDEXER_CELLS_REGION_SUBSET_LINE,qG],[_.YIN_YANG_SHADED_WHISPERS_LINE,$G],[_.YIN_YANG_UNSHADED_ENTROPIC_LINE,HG],[_.YIN_YANG_UNSHADED_MODULAR_LINE,PG],[_.YIN_YANG_REGION_SUM_LINE,zG],[_.YIN_YANG_INDEXING_LINE_COLORING,WG]]);function QG(t,e,n){return or(t,e,n,ZG)}function Vl(t,e){const n=e.cell,r=e.direction,o=t.getCellsInDirection(n.r,n.c,r);return Et(o)}function Yi(t,e,n,r){const o={allow_var:!0,allow_interval:!0,allow_int_list:!1};let i="";return(!r||r.outside)&&(i=`R${n.r}C${n.c}`,i=i.replace("-","m")),e||(e=i),t.getOrSetSharedVar(e,i,o)}function JG(t,e,n,r){const o=n.cell,i=e.getCell(o.r,o.c),c=`[${Vl(e,n).join(",")}]`,u=n.value,f=Yi(t,u,o,i);if(!f)return"";const g=f[1];let v=f[0];return v+=`constraint ${r}(${c}, ${g});
`,v}function sr(t,e,n,r){const o=n.constraints;let i="";for(const a of Object.values(o)){const c=JG(t,e,a,r);i+=c}return i}function eU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),c=`[${Vl(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,g=Math.min(...f),v=Math.max(...f),h=Yi(t,u,o,i);if(!h)return"";const m=h[1];let E=h[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${g}, ${v});
`,E}function tU(t,e,n){return He(t,e,n,eU)}function nU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),c=`[${Vl(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,g=Math.min(...f),v=Math.max(...f),h=Yi(t,u,o,i);if(!h)return"";const m=h[1];let E=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${g}, ${v});
`,E+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function rU(t,e,n){return He(t,e,n,nU)}function oU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),a=Vl(e,r),c=`[${a.join(",")}]`,u=a[0],f=r.value,g=Yi(t,f,o,i);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint x_index_p(${c}, ${u}, ${v});
`,h}function iU(t,e,n){return He(t,e,n,oU)}function sU(t,e,n){return sr(t,e,n,"x_sum_p")}function aU(t,e,n){return sr(t,e,n,"shortsighted_x_sum_p")}function lU(t,e,n){return sr(t,e,n,"broken_x_sum_p")}function cU(t,e,n){return sr(t,e,n,"shifted_x_sum_p")}function uU(t,e,n){return sr(t,e,n,"skyscrapers_p")}function dU(t,e,n){return sr(t,e,n,"x_sum_skyscrapers_p")}function _U(t,e,n){return sr(t,e,n,"battlefield_p")}function fU(t,e,n){return sr(t,e,n,"rising_streak_p")}function gU(t,e,n){return sr(t,e,n,"outside_consecutive_sum_p")}function hU(t,e,n,r){const o=r.cell,i=r.direction,a=e.getCellsInDirection(o.r,o.c,i),c=be(a,j.BOARD),u=be(a,j.CELL_CENTER_LOOP),f=r.value;if(f){const g=parseInt(f);return`constraint loopwhiches_p(${c}, ${u}, ${g});
`}return""}function vU(t,e,n){return He(t,e,n,hU)}function pU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),a=r.direction,c=e.getCellsInDirection(o.r,o.c,a),u=be(c,j.BOARD),f=be(c,j.UNKNOWN_REGIONS),g=r.value,v=Yi(t,g,o,i);if(!v)return"";const h=v[1];let m=v[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${f}, ${h});
`,m}function mU(t,e,n){const r=n.constraints;let o="";for(const[i,a]of Object.entries(r)){const c=pU(t,e,i,a);o+=c}return o}function EU(t,e,n){return sr(t,e,n,"little_killer_sum_p")}function CU(t,e,n){return sr(t,e,n,"little_killer_product_p")}function bU(t,e,n){return sr(t,e,n,"x_omit_little_killer_sum_p")}function IU(t,e,n,r){const o=r.cell,i=r.direction,a=e.getCellsInDirection(o.r,o.c,i),c=be(a,j.BOARD),u=be(a,j.YIN_YANG),f=r.value;if(f){const g=parseInt(f);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${g});
`}return""}function wU(t,e,n){return He(t,e,n,IU)}function yU(t,e,n,r){const o=r.cell,i=r.direction,a=e.getCellsInDirection(o.r,o.c,i),c=be(a,j.VALUES_GRID),u=r.value;if(u){const f=parseInt(u);return`constraint little_killer_sum_p(${c}, ${f});
`}return""}function OU(t,e,n){return He(t,e,n,yU)}function AU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c),a=r.direction,c=e.getCellsInDirection(o.r,o.c,a),u=be(c,j.PENTOMINO_REGIONS),f=r.value,g=Yi(t,f,o,i);if(!g)return"";const v=g[1];let h=g[0];return h+=`constraint pentomino_border_count_p(${u}, ${v});
`,h}function xU(t,e,n){return He(t,e,n,AU)}const LU=new Map([[_.SANDWICH_SUM,tU],[_.X_SUM,sU],[_.SHORTSIGHTED_X_SUM,aU],[_.BROKEN_X_SUM,lU],[_.SHIFTED_X_SUM,cU],[_.SKYSCRAPERS,uU],[_.X_SUM_SKYSCRAPERS,dU],[_.X_INDEX,iU],[_.BATTLEFIELD,_U],[_.SANDWICH_SUM_XOR_X_SUM,rU],[_.RISING_STREAK,fU],[_.OUTSIDE_CONSECUTIVE_SUM,gU],[_.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,wU],[_.LOOPWICHES,vU],[_.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,mU],[_.PENTOMINO_BORDER_COUNT,xU],[_.LITTLE_KILLER_SUM,EU],[_.LITTLE_KILLER_PRODUCT,CU],[_.X_OMIT_LITTLE_KILLER_SUM,bU],[_.NEGATORS_LITTLE_KILLER_SUM,OU]]);function NU(t,e,n){return or(t,e,n,LU)}function Rp(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=n(t,i);o+=a}return o}function RU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction;let i=t.getCellsInDirection(r.r,r.c,o);i=[r,...i];const a=be(i,j.SASHIGANE),c=be(i,j.SASHIGANE_BENDS),u=Ne(r),f=_t(r,j.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${f}, ${a}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function SU(t,e,n){return Rp(e,n,RU)}function DU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=e.direction,i=t.getCellsInDirection(r.r,r.c,o),c="["+Et(i).join(",")+"]",u=be(i,j.CELL_CENTER_LOOP),f=Ne(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${f});
`}function TU(t,e,n){return Rp(e,n,DU)}const kU=new Map([[_.SASHIGANE_ARROW_POINTS_TO_BEND,SU],[_.THERMO_SIGHTLINE_LOOP_ARROW,TU]]);function MU(t,e,n){return or(t,e,n,kU)}function GU(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ne(o);return`constraint ${n}(${i});
`}function Sp(t,e,n,r){const o=n.constraints;let i="";for(const a of Object.values(o)){const c=GU(e,a,r);i+=c}return i}const UU={allow_var:!0,allow_interval:!0,allow_int_list:!1};function c_(t,e,n,r=UU){const o=`cell_var_${n}`;return t.getOrSetSharedVar(e,o,r)}function FU(t,e,n,r=""){const o=e.cell,i=t.getCell(o.r,o.c);if(!i)return"";const a=Ne(i);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function Dp(t,e,n,r,o=""){const i=n.constraints;let a="";for(const c of Object.values(i)){const u=FU(e,c,r,o);a+=u}return a}function Xl(t,e,n,r){const o=e.cell,i=t.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),u=e_(t,i).map(v=>be(v,n)),f=_t(i,n);return`constraint ${r}(${u.join(", ")}, ${f}, ${a});
`}function u_(t,e,n,r){const o=e.constraints;let i="";for(const a of Object.values(o)){const c=Xl(t,a,n,r);i+=c}return i}function $U(t,e,n){return Sp(t,e,n,"odd_p")}function PU(t,e,n){return Sp(t,e,n,"even_p")}function BU(t,e,n){return Dp(t,e,n,"low_digit_p","5")}function HU(t,e,n){return Dp(t,e,n,"high_digit_p","5")}function WU(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ne(o),a=t.getNeighboorCells(o),c=be(a,j.BOARD);return`constraint ${n}(${c}) == ${i};
`}function Tp(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=WU(t,i,n);o+=a}return o}function zU(t,e,n){return Tp(e,n,"odd_count")}function YU(t,e,n){return Tp(e,n,"even_count")}function jU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getNeighboorCells(i);c.push(i);const u=be(c,j.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function KU(t,e,n){return He(t,e,n,jU)}function VU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getOrthogonallyAdjacentCells(i);return`constraint sum_p(${be(c,j.BOARD)}, ${a});
`}function XU(t,e,n){return He(t,e,n,VU)}function qU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getDiagonallyAdjacentCells(i);return`constraint sum_p(${be(c,j.BOARD)}, ${a});
`}function ZU(t,e,n){return He(t,e,n,qU)}function QU(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=e.getRow(i.r),c=be(a,j.BOARD),u=i.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function JU(t,e,n){let r=He(t,e,n,QU);if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_INDEXING_COLUMN_GIVEN])return r;const i=n.constraints;r+=`
% ${_.ALL_INDEXING_COLUMN_GIVEN}
`;for(const a of e.getAllCells()){if(Zs(i,a))continue;const u=e.getRow(a.r),f=be(u,j.BOARD),g=a.c+1,v=`constraint not indexing_column_p(${f}, ${g});
`;r+=v}return r}function e8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=e.getCol(i.c),c=be(a,j.BOARD),u=i.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function t8(t,e,n){let r=He(t,e,n,e8);if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_INDEXING_ROW_GIVEN])return r;const i=n.constraints;r+=`
% ${_.ALL_INDEXING_ROW_GIVEN}
`;for(const a of e.getAllCells()){if(Zs(i,a))continue;const u=e.getCol(a.c),f=be(u,j.BOARD),g=a.r+1,v=`constraint not indexing_column_p(${f}, ${g});
`;r+=v}return r}function n8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=i.r+1,u=i.c+1;if(i.region!==null){const g=i.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${g};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function r8(t,e,n){return He(t,e,n,n8)}function o8(t,e,n,r){const o=r.cell;if(!e.getCell(o.r,o.c))return"";const a=e.getCell(o.r-1,o.c),c=e.getCell(o.r+1,o.c),u=e.getCell(o.r,o.c-1),f=e.getCell(o.r,o.c+1);if(!a||!c||!u||!f)return"";const g=Ne(a),v=Ne(c),h=Ne(u),m=Ne(f);return`constraint groups_opposite_parity_p([${g},${v}], [${h},${m}]);
`}function i8(t,e,n){return He(t,e,n,o8)}function s8(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ne(o),[a,c,u,f]=t_(t,o);return`constraint ${n}(${i}, ${a}, ${c}, ${u}, ${f});
`}function d_(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=s8(t,i,n);o+=a}return o}function a8(t,e,n){return d_(e,n,"is_watchtower_p")}function l8(t,e,n){return d_(e,n,"is_not_watchtower_p")}function c8(t,e,n){return d_(e,n,"farsight_p")}function u8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),[c,u,f,g]=t_(e,i);return`constraint radar_p(${a}, ${c}, ${u}, ${f}, ${g}, 9);
`}function d8(t,e,n){let r=He(t,e,n,u8);if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_RADARS_GIVEN])return r;const i=n.constraints;r+=`
% ${_.ALL_RADARS_GIVEN}
`;for(const a of e.getAllCells()){if(Zs(i,a))continue;const u=Ne(a),[f,g,v,h]=t_(e,a),m=`constraint not radar_p(${u}, ${f}, ${g}, ${v}, ${h}, 9);
`;r+=m}return r}function _8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getRow(i.r),u=e.getCol(i.c),f=be(c,j.BOARD),g=be(u,j.BOARD),[v,h]=[i.r+1,i.c+1];return`constraint sandwich_row_col_count_p(${f}, ${g}, ${v}, ${h}, ${a});
`}function f8(t,e,n){return He(t,e,n,_8)}function kp(t,e,n){const r=e.constraints,o=Object.values(r);let i="";const a=o.map(u=>u.cell),c=new Set(a.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of o){const f=u.cell,g=t.getCell(f.r,f.c);if(!g)continue;const v=Ne(g),h=t.getOrthogonallyAdjacentCells(g).filter(I=>!c.has(I)),m=be(h,j.BOARD),E=`constraint ${n}(${m}, ${v});
`;i+=E}return i}function g8(t,e,n){return kp(e,n,"maximum_p")}function h8(t,e,n){return kp(e,n,"minimum_p")}function v8(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(g=>g.cell),c=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),f=`${Et([...c]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${f}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function p8(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(m=>m.cell),c=new Set(a.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m)),u=e.getAllCells().filter(m=>!c.has(m)),g=`${Et([...c]).join(`,
	`)}`,h=`${Et([...u]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${g}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${h}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function m8(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(h=>h.cell),c=new Set(a.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h)),f=`${Et([...c]).join(`,
	`)}`,v=`${zi([...c],j.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${j.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${f}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${j.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const h of e.getAllCells()){if(c.has(h))continue;const m=_t(h,j.COUNTING_CIRCLES_COLORS);i+=`constraint ${m} == 0;
`}for(const h of o){const m=h.cell,E=e.getCell(m.r,m.c);if(!E)continue;const I=Ne(E),b=_t(E,j.COUNTING_CIRCLES_COLORS),w=h.value;w?i+=`constraint ${b} == ${w};
`:i+=`constraint ${b} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${I}, ${b}) == ${I};
`}return i+=`
`,i}function E8(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(g=>g.cell),c=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),f=`${Et([...c]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${f}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function C8(t,e,n){const r=e.cell,o=t.getCell(r.r,r.c);if(!o)return"";const i=Ne(o),c=e_(t,o).map(f=>be(f,j.BOARD));return`constraint ${n}(${c.join(", ")}, ${i});
`}function Mp(t,e,n){const r=e.constraints;let o="";for(const i of Object.values(r)){const a=C8(t,i,n);o+=a}return o}function b8(t,e,n){return Mp(e,n,"seen_even_count_p")}function I8(t,e,n){return Mp(e,n,"seen_odd_count_p")}function w8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getCellsByKnightMove(i),u=be(c,j.BOARD),f=r.value??"5",g=c_(t,f,n);if(!g)return"";let v="";const h=g[1];return v+=g[0],v+=`constraint cell_knights_whisper_p(${a}, ${u}, ${h});
`,v}function y8(t,e,n){return He(t,e,n,w8)}function O8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getNeighboorCells(i),u=[i,...c];return`constraint yin_yang_minesweeper_p(${be(u,j.YIN_YANG)}, ${a});
`}function A8(t,e,n){return He(t,e,n,O8)}function x8(t,e,n){return u_(e,n,j.YIN_YANG,"yin_yang_seen_unshaded_p")}function L8(t,e,n){return u_(e,n,j.YIN_YANG,"yin_yang_seen_shaded_p")}function N8(t,e,n){return u_(e,n,j.YIN_YANG,"yin_yang_seen_same_shade_p")}function R8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=_t(i,j.YIN_YANG),u=e.getOrthogonallyAdjacentCells(i),f=be(u,j.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${f});
`}function S8(t,e,n){return He(t,e,n,R8)}function D8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getNeighboorCells(i);return`constraint count(${be(c,j.YIN_YANG)}, 1) == ${a};
`}function T8(t,e,n){return He(t,e,n,D8)}function k8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=`two_contiguous_regions[${i.r},${i.c}]`,u=e.getRow(i.r),f=e.getCol(i.c),g=be(u,j.TWO_CONTIGUOUS_REGIONS),v=be(f,j.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${v}, ${a}, ${c});
`}function M8(t,e,n){return He(t,e,n,k8)}function G8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getRow(i.r),u=e.getCol(i.c),f=be(c,j.UNKNOWN_REGIONS),g=be(u,j.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${f}, ${g}, ${a});
`}function U8(t,e,n){return He(t,e,n,G8)}function F8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=_t(i,j.NURIMISAKI),c=e.getOrthogonallyAdjacentCells(i);let f=`constraint nurimisaki_unshaded_endpoint_p(${be(c,j.NURIMISAKI)}, ${a});
`;return f+=Xl(e,r,j.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),f}function $8(t,e,n){let r=He(t,e,n,F8);if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return r;const i=n.constraints;r+=`
% ${_.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const a of e.getAllCells()){if(Zs(i,a))continue;const u=_t(a,j.NURIMISAKI),f=e.getOrthogonallyAdjacentCells(a),v=`constraint not nurimisaki_unshaded_endpoint_p(${be(f,j.NURIMISAKI)}, ${u});
`;r+=v}return r}function P8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=_t(i,j.SASHIGANE),u=_t(i,j.SASHIGANE_BENDS);let f=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return f+=`constraint ${u} = true;
`,f}function B8(t,e,n){return He(t,e,n,P8)}function H8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=_t(i,j.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function W8(t,e,n){return He(t,e,n,H8)}function z8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint ${_t(i,j.CELL_CENTER_LOOP)} == 1;
`:""}function Y8(t,e,n){return He(t,e,n,z8)}function j8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint ${_t(i,j.CELL_CENTER_LOOP)} == 0;
`:""}function K8(t,e,n){return He(t,e,n,j8)}function V8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=e.getNeighboorCells(i),u=[i,...c];return`constraint sum(${be(u,j.CELL_CENTER_LOOP)}) == ${a};
`}function X8(t,e,n){return He(t,e,n,V8)}function q8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=_t(i,j.CAVE_SHADING),u=e_(e,i),f=[];for(const v of u){const h=be(v,j.CAVE_SHADING);f.push(h)}return`constraint cave_clue_p(${a}, ${c}, ${f[0]}, ${f[1]}, ${f[2]}, ${f[3]});
`}function Z8(t,e,n){return He(t,e,n,q8)}function Q8(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=Ne(i),g=_t(i,j.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const v=e.getNeighboorCells(i),h=be(v,j.BOARD),m=be(v,j.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${f});
`;const E=e.getCellsByKnightMove(i),I=be(E,j.BOARD),b=be(E,j.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${f});
`;const w=[Pe.NE,Pe.NW,Pe.SE,Pe.SW],x=[];for(const $ of w)e.getCellsInDirection(i.r,i.c,$).forEach(F=>x.push(F));const T=be(x,j.BOARD),M=be(x,j.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${T}, ${M}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${f});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function J8(t,e,n){return He(t,e,n,Q8)}function eF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=Ne(i),g=_t(i,j.UNKNOWN_REGIONS),v=e.getOrthogonallyAdjacentCells(i),h=be(v,j.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${g}) >= ${c};
`;const m=[Pe.N,Pe.S,Pe.E,Pe.W],E=[];for(const I of m){const b=e.getCellsInDirection(i.r,i.c,I);if(!b.length)continue;const w=be(b,j.BOARD),x=be(b,j.UNKNOWN_REGIONS),T=`in_arrow_${n}_${I}`,M=`in_arrow_${n}_${I}[1]`;E.push(M),u+=`array[index_set(${w})] of var bool: ${T};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${x}, ${T}, ${f}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function tF(t,e,n){return He(t,e,n,eF)}function nF(t,e,n,r){return Xl(e,r,j.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function rF(t,e,n){return He(t,e,n,nF)}function oF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint dpath_source == ${i.r*e.nCols+i.c+1};
`:""}function iF(t,e,n){return He(t,e,n,oF)}function sF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint dpath_target == ${i.r*e.nCols+i.c+1};
`:""}function aF(t,e,n){return He(t,e,n,sF)}function lF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint connect_four_red_p(${_t(i,j.CONNECT_FOUR)});
`:""}function cF(t,e,n){return He(t,e,n,lF)}function uF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);return i?`constraint connect_four_yellow_p(${_t(i,j.CONNECT_FOUR)});
`:""}function dF(t,e,n){return He(t,e,n,uF)}function _F(t,e,n){let r="",o=0;const i=n.constraints;for(const[a,c]of Object.entries(i)){const u=c.cell,f=e.getCell(u.r,u.c);if(!f)continue;const g=c.value;if(!g)continue;const v=c_(t,g,a);if(!v)continue;const h=v[1];r+=v[0];const m=_t(f,j.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${j.BOARD}, ${j.NURIKABE_REGIONS}, ${m}, ${h});
`,o+=1}return r+=`constraint count_unique_values(array1d(${j.NURIKABE_REGIONS})) == ${o+1};
`,r}function fF(t,e,n,r){return Xl(e,r,j.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function gF(t,e,n){return He(t,e,n,fF)}function hF(t,e,n,r){const o=r.cell,i=e.getCell(o.r,o.c);if(!i)return"";const a=Ne(i),c=_t(i,j.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${j.NURIKABE_REGIONS}, ${c}, ${a});
`}function vF(t,e,n){return He(t,e,n,hF)}function pF(t,e,n){let r="";const o=n.constraints,i=n_(Object.values(o));for(const f of i.values())if(!(f.length<=1))for(const[g,v]of f.flatMap((h,m)=>f.slice(m+1).map(E=>[h,E]))){const h=g.cell,m=v.cell,E=e.getCell(h.r,h.c),I=e.getCell(m.r,m.c);if(!E||!I)continue;const b=_t(E,j.BOARD),w=_t(I,j.BOARD);r+=`constraint ${b} == ${w};
`}const c=[...i.values()].map(f=>f[0].cell).map(f=>e.getCell(f.r,f.c)).filter(f=>f!==void 0),u=be(c,j.BOARD);return r+=`constraint alldifferent(${u});
`,r}function mF(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(g=>g.cell),c=new Set(a.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),f=`${zi([...c],j.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${f}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${j.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const g of Object.values(r)){const v=g.cell,h=e.getCell(v.r,v.c);if(!h)continue;const m=Ne(h),E=_t(h,j.SHIKAKU_REGIONS),I=_t(h,j.SHIKAKU_WIDTH),b=_t(h,j.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${j.SHIKAKU_REGIONS}, ${E}, ${m}, ${I}, ${b});
`}return i}function EF(t,e,n){const r=n.constraints,o=Object.values(r);let i="";const a=o.map(v=>v.cell),c=new Set(a.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v)),f=`${zi([...c],j.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${f}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${j.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const g={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[v,h]of Object.entries(r)){const m=h.cell,E=e.getCell(m.r,m.c);if(!E)continue;const I=_t(E,j.SHIKAKU_REGIONS),b=h.value??"",w=c_(t,b,v,g);if(!w)continue;const x=w[1];i+=w[0],i+=`constraint shikaku_region_sum_p(${j.BOARD}, ${j.SHIKAKU_REGIONS}, ${I}, ${x});
`}return i}const CF=new Map([[_.ODD,$U],[_.EVEN,PU],[_.LOW_DIGIT,BU],[_.HIGH_DIGIT,HU],[_.ODD_MINESWEEPER,zU],[_.EVEN_MINESWEEPER,YU],[_.DIAGONALLY_ADJACENT_SUM,ZU],[_.ORTHOGONAL_SUM,XU],[_.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,KU],[_.FRIENDLY_CELL,r8],[_.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,i8],[_.WATCHTOWER,a8],[_.NOT_WATCHTOWER,l8],[_.FARSIGHT,c8],[_.RADAR,d8],[_.INDEXING_COLUMN,JU],[_.INDEXING_ROW,t8],[_.SANDWICH_ROW_COL_COUNT,f8],[_.SEEN_EVEN_COUNT,b8],[_.SEEN_ODD_COUNT,I8],[_.CELL_KNIGHT_WHISPERS,y8],[_.YIN_YANG_MINESWEEPER,A8],[_.YIN_YANG_SEEN_UNSHADED_CELLS,x8],[_.YIN_YANG_SEEN_SHADED_CELLS,L8],[_.YIN_YANG_SEEN_SAME_SHADE_CELLS,N8],[_.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,S8],[_.YIN_YANG_SHADED_NEIGHBOURS_COUNT,T8],[_.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,M8],[_.SEEN_REGION_BORDERS_COUNT,U8],[_.NURIMISAKI_UNSHADED_ENDPOINTS,$8],[_.NURIKABE_SEEN_WATERWAY_CELLS,gF],[_.NURIKABE_ISLAND_SIZE_CELL,vF],[_.SASHIGANE_BEND_REGION_COUNT,B8],[_.SASHIGANE_REGION_SUM,W8],[_.CELL_ON_THE_LOOP,Y8],[_.CELL_NOT_ON_THE_LOOP,K8],[_.COUNT_LOOP_NEIGHBOUR_CELLS,X8],[_.CAVE_CLUE,Z8],[_.CHAOS_CONSTRUCTION_CHESS_SUMS,J8],[_.CHAOS_CONSTRUCTION_ARROW_KNOTS,tF],[_.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,rF],[_.DIRECTED_PATH_START,iF],[_.DIRECTED_PATH_END,aF],[_.CONENCT_FOUR_RED,cF],[_.CONNECT_FOUR_YELLOW,dF],[_.MAXIMUM,g8],[_.MINIMUM,h8],[_.COUNTING_CIRCLES,v8],[_.REVERSE_COUNTING_CIRCLES,p8],[_.COLORED_COUNTING_CIRCLES,m8],[_.UNIQUE_CELLS,E8],[_.SHIKAKU_REGION_SIZE,mF],[_.SHIKAKU_REGION_SUM,EF],[_.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,_F],[_.TELEPORT,pF]]);function bF(t,e,n){return or(t,e,n,CF)}function mr(t,e,n,r){const o=n.constraints;let i="";for(const a of Object.values(o)){const c=r(e,a);i+=c}return i}function IF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=_t(r,j.UNKNOWN_REGIONS),a=e.directions,c=[];for(const g of a){const v=t.getCellsInDirection(r.r,r.c,g),h=be(v,j.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(g=>`count_different(${g}, ${i})`).join(" + ")} == ${o};
`}function wF(t,e,n){return mr(t,e,n,IF)}function yF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=_t(r,j.YIN_YANG),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),g=be(f,j.BOARD),v=be(f,j.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${i}, ${g}, ${v}) == ${o};
`}return c}function OF(t,e,n){return mr(t,e,n,yF)}function AF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=e.directions;let a="";for(const c of i){const u=t.getCellsInDirection(r.r,r.c,c),f=be(u,j.YIN_YANG);a+=`constraint count(${f}, 1) == ${o};
`}return a}function xF(t,e,n){let r=mr(t,e,n,AF);if(!n.negative_constraints||!!!n.negative_constraints[_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return r;const i=n.constraints;r+=`
% ${_.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const a of e.getAllCells()){const c=Zs(i,a),u=c?c.directions:[],f=Ne(a),g=[Pe.E,Pe.N,Pe.S,Pe.W];for(const v of g){if(u.includes(v))continue;const h=e.getCellsInDirection(a.r,a.c,v),m=be(h,j.YIN_YANG);r+=`constraint count(${m}, 1) != ${f};
`}}return r}function LF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=_t(r,j.YIN_YANG),a=e.directions,c=[];for(const f of a){const g=t.getCellsInDirection(r.r,r.c,f),v=be(g,j.YIN_YANG),h=be(g,j.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${i}, ${v}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${o};
`:""}function NF(t,e,n){return mr(t,e,n,LF)}function RF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=e.directions,a=[];for(const u of i){const f=t.getCellsInDirection(r.r,r.c,u),v=`count(${be(f,j.NURIKABE_SHADING)}, 1)`;a.push(v)}return`constraint ${a.join(" + ")} = ${o};
`}function SF(t,e,n){return mr(t,e,n,RF)}function DF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=e.directions,a=[];for(const u of i){const f=t.getCellsInDirection(r.r,r.c,u),v=`count_loop_vars_f(${be(f,j.CELL_CENTER_LOOP)})`;a.push(v)}return a.length?`constraint ${a.join(" + ")} = ${o};
`:""}function TF(t,e,n){return mr(t,e,n,DF)}function kF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=_t(r,j.GALAXY_REGIONS),a=e.directions,c=[];for(const f of a){const g=t.getCellsInDirection(r.r,r.c,f),h=`count(${be(g,j.GALAXY_REGIONS)}, ${i})`;c.push(h)}return c.length?`constraint ${c.join(" + ")} = ${o};
`:""}function MF(t,e,n){return mr(t,e,n,kF)}function GF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=e.directions;let a="";for(const c of i){const u=t.getCellsInDirection(r.r,r.c,c),g="["+Et(u).join(",")+"]";a+=`constraint hot_arrows_p(${g}, ${o});
`}return a}function UF(t,e,n){return mr(t,e,n,GF)}function FF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=e.directions;let a="";for(const c of i){const u=t.getCellsInDirection(r.r,r.c,c),f=be(u,j.BOARD);a+=`constraint cold_arrows_p(${f}, ${o});
`}return a}function $F(t,e,n){return mr(t,e,n,FF)}function PF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=_t(r,j.CONNECT_FOUR),a=e.directions,c=[];for(const g of a){const v=t.getCellsInDirection(r.r,r.c,g);c.push(...v)}return c.length===0?"":`constraint count(${be(c,j.CONNECT_FOUR)}, ${i}) == ${o};
`}function BF(t,e,n){return mr(t,e,n,PF)}function HF(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const o=Ne(r),i=_t(r,j.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),g=be(f,j.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${o}, ${i}, ${g});
`}return c}function WF(t,e,n){return mr(t,e,n,HF)}const zF=new Map([[_.HOT_ARROWS,UF],[_.COLD_ARROWS,$F],[_.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,wF],[_.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,OF],[_.LOOP_CELL_COUNT_ARROWS,TF],[_.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,NF],[_.YIN_YANG_COUNT_SHADED_CELLS,xF],[_.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,MF],[_.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,SF],[_.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,BF],[_.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,WF]]);function YF(t,e,n){return or(t,e,n,zF)}function jF(t,e,n,r){const o=r.value;return o?`constraint forbidden_adjacent_sum_p(board, ${parseInt(o)});
`:""}function KF(t,e,n){return He(t,e,n,jF)}function VF(t,e,n,r){const o=r.value;return o?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(o)});
`:""}function XF(t,e,n){return He(t,e,n,VF)}function qF(t,e,n,r){const o=r.value;return o?`constraint forbidden_knight_sum_p(board, ${parseInt(o)});
`:""}function ZF(t,e,n){return He(t,e,n,qF)}function QF(t,e,n,r){const o=r.value;if(!o)return"";const i=parseInt(o),a=[...e.getUsedRegions()];a.sort();const c=a.length;return`constraint lits_max_tetromino_sum_p(${j.BOARD}, ${j.LITS_GRID}, ${i}, 0..${c});
`}function JF(t,e,n){return He(t,e,n,QF)}const e$=new Map([[_.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,KF],[_.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,XF],[_.FORBIDDEN_KNIGHT_SUM,ZF],[_.LITS_MAX_TETROMINO_SUM,JF]]);function t$(t,e,n){return or(t,e,n,e$)}const n$=[z5,bF,MU,YF,NM,iM,QG,d5,G5,NU,V5,t$];function r$(t,e){let n="";const r=t.elementsDict,o=t.grid;for(const[i,a]of r.entries())for(const c of n$){let u=c(e,o,a);u=Dt(u,`${i}`),n+=u}return n}function o$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,i+=`constraint yin_yang_p(yin_yang);
`,i}function i$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,i+=`constraint nurimisaki_p(nurimisaki);
`,i}function s$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,i+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,i+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,i}function a$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,i}function l$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`
% Two Contiguous Regions
`,i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,i+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,i}function c$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const i=Math.max(r.nCols,r.nRows),a=Lt.range(1,i+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${i}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${i});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function u$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const i=j.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=Lt.range(1,a+1);let u="";const f="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${i};
`,u+=`constraint numbered_chaos_construction_p(${j.BOARD}, ${i}, ${f}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${j.BOARD}, ${i}, ALLOWED_DIGITS, ${f});
`,u}function d$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,i+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,i+=`constraint sashigane_adjacency_p(sashigane);
`,i+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,i+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,i+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,i}function _$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, true);
`,i}function f$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, false);
`,i}function g$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,i+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,i+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,i}function h$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,i+=`constraint cell_center_loop_p(cell_center_loop, false);
`,i+=`constraint modular_loop_p(board, cell_center_loop);
`,i}function Gp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function Up(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function __(t,e,n,r){const o=t.grid;let i="";if(!t.globalConstraints.get(_.CHAOS_CONSTRUCTION)){i+=`
% Exactly ${e} per region 
`;const u=o.getUsedRegions();for(const f of u){const g=o.getRegion(f),v=be(g,r);i+=`constraint count_eq(${v}, ${n}, ${e});
`}}return i}function pi(t,e,n,r){let o=Gp(e,n,r);return o+=Up(e,n,r),o+=__(t,e,n,r),o}function v$(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,i+=pi(n,1,!0,j.DOUBLERS),i+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,i+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,i}function p$(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${i};
`,a+=pi(n,1,!0,j.NEGATORS),a+=`
constraint one_of_each_digit_p(board, ${i}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${i});
`,a}function m$(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${i};
`,a+=`constraint fillomino_p(board, ${i});
`,a}function E$(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${i};
`,a+=pi(n,2,!0,i),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${i}, values_grid);
`,a}function C$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${i};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${j.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${j.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${i}, ${j.SHIKAKU_WIDTH}, ${j.SHIKAKU_HEIGHT});
`,a}function b$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let i="";return i+=`constraint shikaku_no_repeats_in_regions_p(${j.BOARD}, ${j.SHIKAKU_REGIONS});
`,i}function I$(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.CAVE_SHADING,a=j.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${i}, ${a});
`,c}function w$(t,e){if(t.puzzle.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.CAVE_SHADING,a=j.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${i}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${j.BOARD}, ${c});
`,u}function y$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.GALAXY_REGIONS,a=j.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${i};
`,u+=`constraint galaxy_restrict_numbering_p(${i});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${i}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${i}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${i});
`,u}function O$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,i+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,i}function A$(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="";return i+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,i+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,i+=`constraint goldilocks_zone_p(goldilocks_regions);
`,i+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,i}function x$(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=12,a=j.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${i}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function L$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.LITS_SHADING,a=j.LITS_REGIONS,c=j.LITS_GRID,u=j.BOARD_REGIONS,f=[...r.getUsedRegions()];f.sort();const g=Math.min(...f),v=Math.max(...f);let h="";h+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,h+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,h+=`array[ROW_IDXS, COL_IDXS] of var 0..${f.length}: ${c};
`,h+=`constraint lits_shading_p(${i});
`,h+=`constraint lits_shading_ids_p(${i}, ${a});
`,h+=`constraint lits_region_and_ids_p(${u}, ${a});
`,h+=`constraint lits_tetromino_shapes_p(${a});
`,h+=`constraint lits_grid_p(${c}, ${u}, ${i}, ${g}..${v});
`,f.length&&(h+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of f){const E=r.getRegion(m),b=`constraint count_eq(${be(E,j.LITS_SHADING)}, 1, 4);
`;h+=b}return h}function N$(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.NORINORI_SHADING;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,a+=`constraint norinori_p(${j.BOARD_REGIONS}, ${i});
`,r.getUsedRegions().size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`),a+=__(n,2,1,j.NORINORI_SHADING),a}function R$(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.LITS_SHADING,a=j.LITS_REGIONS,c=j.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${i};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${i});
`,u+=`constraint lits_shading_ids_p(${i}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${i});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const f=r.getUsedRegions();f.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const g of f){const v=r.getRegion(g),m=`constraint count_eq(${be(v,j.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function S$(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.LITS_SHADING,a=j.STAR_BATTLE,c=j.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=pi(n,2,1,j.STAR_BATTLE),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=pi(n,1,1,j.LITS_WHITE_BLACK_STAR_BATTLE),u+=`
% 1 black star per row, column, region
`,u+=pi(n,1,2,j.LITS_WHITE_BLACK_STAR_BATTLE),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${i}, ${c});
`,u}function D$(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i=j.NORINORI_SHADING,a=j.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=Up(2,1,a),c+=Gp(2,1,a),c+=__(n,1,1,a),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${i}, ${a});
`,c}function jt(t,e,n){return t*n+e+1}function T$(t){const e=t.grid;function n(c,u){const f=[],g=jt(c.r,c.c,e.nCols);for(let v=-1;v<=1;v++){const h=jt(u.r+v,u.c,e.nCols);f.push([g,h]),f.push([h,g])}return f}function r(c,u){const f=[],g=jt(c.r,c.c,e.nCols);for(let v=-1;v<=1;v++){const h=jt(u.r,u.c+v,e.nCols);f.push([g,h]),f.push([h,g])}return f}const o=[],a=t.elementsDict.get(_.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const f=u[0],v=dl(f).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let h=jt(v[0].r,v[0].c,e.nCols),m=jt(v[3].r,v[3].c,e.nCols);o.push([h,m]),o.push([m,h]),h=jt(v[1].r,v[1].c,e.nCols),m=jt(v[2].r,v[2].c,e.nCols),o.push([h,m]),o.push([m,h])}for(let f=0;f<u.length-1;f++){const g=eS(kv(u[f],u[f+1]),.5),h=_l(g).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(h.length!==2)continue;const[m,E]=h;if(m.r===E.r){let I=n(m,E);o.push(...I),I=n(E,m),o.push(...I)}else if(m.c===E.c){let I=r(m,E);o.push(...I),I=r(E,m),o.push(...I)}}}return o}function k$(t){const e=t.grid,n=[],o=t.elementsDict.get(_.ONE_WAY_DOOR);if(o)for(const i of Object.values(o)){const c=i.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,f]=c,g=i.value,v=jt(u.r,u.c,e.nCols),h=jt(f.r,f.c,e.nCols);g==="<"?n.push([v,h]):g===">"&&n.push([h,v])}return n}function M$(t){const e=[];for(const n of t.getAllCells()){const r=jt(n.r,n.c,t.nCols),o=t.getNeighboorCells(n);for(const i of o){const a=jt(i.r,i.c,t.nCols);e.push([r,a])}}return e}function G$(t){const e=t.grid,n=[],r=[],i=t.elementsDict.get(_.TELEPORT),a=i?Object.values(i):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(i){const f=n_(a);let g=1;for(const v of f.values())if(!(v.length<=1)){for(const[h,m]of v.flatMap((E,I)=>v.slice(I+1).map(b=>[E,b]))){const E=jt(h.cell.r,h.cell.c,e.nCols),I=jt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[h.cell.r][h.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const h of v){const m=jt(h.cell.r,h.cell.c,e.nCols);r.push(m)}g++}c=f.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function U$(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let i="",a=M$(r);const c=T$(n),u=k$(n);c.push(...u);const f=n.elementsDict;a=a.filter(w=>!c.some(x=>w[0]===x[0]&&w[1]===x[1]));const g=G$(n);if(g.tp_edges.length){a.push(...g.tp_edges);const w=mp(g.tp_arr),x=g.tp_count;i+=`
% teleports grid
`,i+=`array[ROW_IDXS, COL_IDXS] of 0..${x}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const v=r.nRows*r.nCols,h=a.length,m="["+a.map(w=>w[0]).join(",")+"]",E="["+a.map(w=>w[1]).join(",")+"]";i+=`array[int] of int: dpath_from = ${m};
`,i+=`array[int] of int: dpath_to = ${E};
`,i+=`var 1..${v}: dpath_source;
`,i+=`var 1..${v}: dpath_target;
`,i+=`array[1..${v}] of var bool: dpath_ns;
`,i+=`array[1..${h}] of var bool: dpath_es;
`,i+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,i+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let x=0;x<r.nCols-1;x++){const T=r.getCell(w,x),M=r.getCell(w,x+1),$=r.getCell(w+1,x),W=r.getCell(w+1,x+1);if(!T||!M||!$||!W)continue;const F=jt(T.r,T.c,r.nCols),K=jt(M.r,M.c,r.nCols),te=jt($.r,$.c,r.nCols),se=jt(W.r,W.c,r.nCols),ne=[[F,se],[se,F],[K,te],[te,K]].map(ge=>a.findIndex(ie=>ge[0]===ie[0]&&ge[1]===ie[1])).filter(ge=>ge!==-1);if(ne.length){const ge=ne.map(ie=>`dpath_es[${ie+1}]`).join(",");i+=`constraint sum([${ge}]) <= 1;
`}}const I=f.get(_.TELEPORT),b=I?Object.values(I):[];if(g.tp_count>0){i+=`
% At most 1 edge per teleporter
`;for(const w of b){const x=w.cell,T=r.getCell(x.r,x.c);if(!T)continue;const M=r.getNeighboorCells(T),$=jt(T.r,T.c,r.nCols),W=[];for(const K of M){if(b.some(Z=>Z.cell.r===K.r&&Z.cell.c==K.c&&Z.value===w.value))continue;const se=jt(K.r,K.c,r.nCols);W.push([$,se]),W.push([se,$])}const F=W.map(K=>a.findIndex(te=>K[0]===te[0]&&K[1]===te[1])).filter(K=>K!==-1);if(F.length){const K=F.map(te=>`dpath_es[${te+1}]`).join(",");i+=`constraint sum([${K}]) <= 1;
`}}}return i}function F$(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${i};
`,a+=`constraint chaos_construction_suguru_p(board, ${i});
`,a}function $$(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const i="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${i};
`,a}function P$(t,e){let n="";return n+=`constraint connect_four_draw_p(${j.CONNECT_FOUR});
`,n}function B$(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${j.BOARD}, ${j.CONNECT_FOUR});
`,n}function H$(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${j.BOARD}, ${j.CONNECT_FOUR}, 3);
`,n}const W$=new Map([[_.FILLOMINO,m$],[_.CAVE,I$],[_.GALAXIES,y$],[_.YIN_YANG,o$],[_.SHIKAKU,C$],[_.SHIKAKU_NO_REPEATS_IN_REGION,b$],[_.NORINORI,N$],[_.NURIMISAKI,i$],[_.NURIKABE,s$],[_.NURIKABE_NO_REPEATS_IN_ISLANDS,a$],[_.TWO_CONTIGUOUS_REGIONS,l$],[_.CHAOS_CONSTRUCTION,c$],[_.NUMBERED_CHAOS_CONSTRUCTION,u$],[_.SASHIGANE,d$],[_.CELL_CENTER_LOOP_NO_TOUCHING,_$],[_.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,f$],[_.NOT_LOOP_SIZED_REGIONS,g$],[_.MODULAR_LOOP,h$],[_.DOUBLERS,v$],[_.NEGATORS,p$],[_.GOLDILOCKS_ZONE,A$],[_.NEXUS,O$],[_.INDEXER_CELLS,E$],[_.PENTOMINO_TILLING,x$],[_.LITS,L$],[_.CAVE_LITS,R$],[_.LITS_BLACK_WHITE_STAR_BATTLE,S$],[_.NORINORI_STAR_BATTLE,D$],[_.RENBAN_CAVES,w$],[_.MAZE_DIRECTED_PATH,U$],[_.CHAOS_CONSTRUCTION_SUGURU,F$],[_.CONNECT_FOUR,$$],[_.CONNECT_FOUR_DRAW,P$],[_.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,B$],[_.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,H$]]);function z$(t){let e="";const r=t.puzzle.globalConstraints;for(const[o,i]of r.entries()){if(!i)continue;const a=W$.get(o);if(!a)continue;let c=a(t,o);c=Dt(c,`${o}`),e+=c}return e}function Y$(){return`
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

`}function j$(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const i=`constraint ${Ne(r)} = ${r.value};
`;n+=i}return n.length&&(n=`
% Given Digits
`+n),n}function Fp(t,e=!1){const n=t.grid;let r=t.valid_digits;const o=new u3(t),[i,a]=[n.nRows,n.nCols],c=i*a;o.add(`include "globals.mzn";
`),o.add(`include "alldifferent.mzn";

`),o.add(Y$());let f=`1..${Math.max(i,a)}`;return!!t.globalConstraints.get(_.FILLOMINO)?f=`1..${c}`:t.globalConstraints.get(_.HEXED_SUDOKU)?r=[...Lt.range(1,16)]:r&&(f="{"+r.join(",")+"}"),o.add(`set of int: ROW_IDXS = 0..${i-1};
`),o.add(`set of int: COL_IDXS = 0..${a-1};
`),o.add(`set of int: ALLOWED_DIGITS = ${f};
`),o.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),_3(o,n),o.add(j$(t)),o.add(e5(t)),o.add(t5(t)),o.add(z$(o)),o.add(r$(t,o)),o.add(r5(t)),e?o.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):o.add(`
solve satisfy;`),o}const Uh=encodeURIComponent("4.4.2");let yr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Uo=[];let Ru;function bs(){if(!Ru){const e=`importScripts(${JSON.stringify(yr.workerURL)});`;Ru=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Ru);t.postMessage({wasmURL:yr.wasmURL?yr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Uh}`,yr.workerURL).toString(),dataURL:yr.dataURL?yr.dataURL.toString():new URL(`./minizinc.data?version=${Uh}`,yr.workerURL).toString()}),Uo.push({worker:t,runCount:0})}function $p(){for(;Uo.length<yr.numWorkers;)bs()}async function K$(t){if(yr={...yr,...t},Uo.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");$p(),await Promise.race(Uo.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class f_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new f_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){$p();const o=[];let i=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;i={...this.vfs,[u]:JSON.stringify(n)},o.push(u)}let{worker:a,runCount:c}=Uo.pop();return a.postMessage({jsonStream:!0,files:i,args:[...o,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const o={...e},{worker:i,runCount:a}=this._run(["--model-check-only"],o.options),c=[];i.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Uo.push({worker:i,runCount:a}):(i.terminate(),bs()),n(c)}}})}interface(e){return new Promise((n,r)=>{const o={...e},{worker:i,runCount:a}=this._run(["--model-interface-only"],o.options),c=[];let u=null;i.onmessage=f=>{switch(f.data.type){case"error":c.push(f.data);break;case"interface":u=f.data;break;case"exit":a<10?Uo.push({worker:i,runCount:a}):(i.terminate(),bs()),f.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,o=`_fzn_${r++}.fzn`;for(;o in this.vfs;)o=`_fzn_${r++}.fzn`;const i=["-c","--fzn",o],{worker:a}=this._run(i,n.options,[o]);bs();let c={},u=!1,f=null;return a.onmessage=g=>{if(c[g.data.type])for(const v of c[g.data.type])v(g.data);switch(g.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":f||(f=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,v){c[g]?c[g].add(v):c[g]=new Set([v])},off(g,v){c[g]&&c[g].delete(v)},then(g,v){const h=m=>{if(m.code===0)g(m.outputFiles[o]);else{const E=f?{message:f.message,...m}:m;if(!v)throw E;v(E)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:o}=this._run(r,n.options);bs();let i=null,a={},c=!1,u=null,f={},g="UNKNOWN";return o.onmessage=v=>{if(a[v.data.type])for(const h of a[v.data.type])h(v.data);switch(v.data.type){case"exit":o.terminate(),c=!0,a={};break;case"error":i||(i=v.data);break;case"statistics":f={...f,...v.data.statistics};break;case"solution":u=v.data,g="SATISFIED";break;case"status":g=v.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,o.terminate(),a.exit)for(const v of a.exit)v({type:"exit",code:null});a={}}},on(v,h){a[v]?a[v].add(h):a[v]=new Set([h])},off(v,h){a[v]&&a[v].delete(h)},then(v,h){const m=E=>{if(E.code===0)v({status:g,solution:u,statistics:f});else{const I=i?{message:i.message,...E}:E;if(!h)throw I;h(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var V$=ue('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function X$(t,e){ae(e,!1);const n=Ve(),r=()=>me(Xr,"$puzzleMetaStore",n);let o=G(e,"showModal",12,!1);function i(v,h,m){var E=document.createElement("a"),I=new Blob([v],{type:m});E.href=URL.createObjectURL(I),E.download=h,E.click(),URL.revokeObjectURL(E.href)}function a(){const v=Te(js);return Fp(v).model_str}function c(){const v=a();navigator.clipboard.writeText(v)}function u(){const v=a(),h=kh(v);navigator.clipboard.writeText(h)}function f(){const v=hl(r()),h=a();i(h,`${v}.mzn`,"text/plain")}function g(){const v=hl(r()),h=a(),m=kh(h);i(m,`${v}.mzn`,"text/plain")}fe(),Zr(t,{title:"Minizinc File",get showModal(){return o()},set showModal(v){o(v)},children:(v,h)=>{var m=V$(),E=Y(m),I=U(E,2),b=U(I,2),w=U(b,2),x=U(w,2),T=U(Y(x));A(T,"href","https://play.minizinc.dev/"),fo(),B(x),B(m),ke("click",E,c),ke("click",I,u),ke("click",b,f),ke("click",w,g),L(v,m)},$$slots:{default:!0},$$legacy:!0}),le()}function ji(t,e,n){const r=[],o=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;const g=Number(c[u]),v=n.get(g);v!==void 0&&(r.push(f),o.push([v]))}}const i=Bl(r,o);Ci(i)}function q$(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),o=[],i=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const E=[];o.push(E),a(h,m,t[h][m])}function a(h,m,E){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==E||(r[h][m]=!0,o[o.length-1].push([h,m]),a(h+1,m,E),a(h-1,m,E),a(h,m+1,E),a(h,m-1,E))}const c=Array(o.length).fill(0).map(()=>new Set);function u(h,m){for(const[E,I]of h)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=E+b,T=I+w;if(m.some(([M,$])=>M===x&&$===T))return!0}return!1}for(let h=0;h<o.length;h++)for(let m=h+1;m<o.length;m++)u(o[h],o[m])&&(c[h].add(m),c[m].add(h));const f=[1,4,7,9],g=new Array(o.length).fill(0);function v(h,m){for(const E of c[h])if(g[E]===m)return!1;return!0}for(let h=0;h<o.length;h++)for(const m of f)if(v(h,m)){g[h]=m;break}for(let h=0;h<o.length;h++)for(const[m,E]of o[h])i[m][E]=g[h];return i}function Z$(t,e){const n=e.grid,r=e.globalConstraints.get(_.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const i=[],a=[];for(let u=0;u<o.length;u++){const f=o[u];for(let g=0;g<f.length;g++){const v=n.getCell(u,g);if(!v||v.given||r&&!v.given&&v.value===null)continue;const h=f[g];i.push(v),a.push(h)}}const c=fp(i,a);Ci(c)}function Q$(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const o of n){const i=t[o];if(i!==void 0){ji(i,e,r);return}}}function J$(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const o of n){const i=t[o];if(i!==void 0){ji(i,e,r);return}}}function e4(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],o=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;r.push(f);const g=c[u];o.push([g])}}const i=Bl(r,o);Ci(i)}function t4(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;ji(n,e,new Map([[0,4],[1,7],[2,9]]))}function n4(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;ji(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function r4(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;ji(n,e,new Map([[1,7],[2,4],[3,9]]))}function o4(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;ji(n,e,new Map([[1,7],[2,8]]))}function i4(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const[i,a]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<o.length;g++){const v=o[g];for(let h=0;h<v.length-1;h++){const m=e.getCell(g,h),E=e.getCell(g,h+1);if(!m||!E)continue;const I=v[h],b=v[h+1];if(I===b)continue;const w={colorId:c,p1:{r:g,c:h+1},p2:{r:g+1,c:h+1}};u.push(w)}}for(let g=0;g<a;g++)for(let v=0;v<i-1;v++){const h=e.getCell(v,g),m=e.getCell(v+1,g);if(!h||!m)continue;const E=o[v][g],I=o[v+1][g];if(E===I)continue;const b={colorId:c,p1:{r:v+1,c:g},p2:{r:v+1,c:g+1}};u.push(b)}const f=Ls(u);Nr(f);return}}function s4(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const o=t[r];if(o===void 0)continue;const i=[];for(let c=0;c<o.length;c++){const u=o[c];for(let f=0;f<u.length;f++){const g=e.getCell(c,f);if(g)for(const v of e.getOrthogonallyAdjacentCells(g)){if(!v||!(v.r>g.r||v.c>g.c))continue;const h=o[g.r][g.c],m=o[v.r][v.c];if(!(h===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:v.r+.5,c:v.c+.5}};i.push(E)}}}const a=Ls(i);Nr(a);return}}function a4(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const o=t[r];if(o===void 0)continue;const i=q$(o);if(!i)return;const a=[],c=[];for(let f=0;f<i.length;f++){const g=i[f];for(let v=0;v<g.length;v++){const h=e.getCell(f,v);if(!h)continue;a.push(h);const m=g[v];c.push([m])}}const u=Bl(a,c);Ci(u);return}}function l4(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const o=t[r];if(o===void 0)continue;const i=[];for(let c=0;c<o.length;c++){const u=o[c];for(let f=0;f<u.length;f++){const g=e.getCell(c,f);if(!g)continue;const v=o[g.r][g.c];if(v===0)continue;const m={colorId:v===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};i.push(m)}}const a=zD(i);Nr(a);return}}function c4(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,o=e.puzzle.grid,i=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const f=r[c],[g,v]=f,[h,m]=[Math.floor((g-1)/o.nCols),(g-1)%o.nCols],[E,I]=[Math.floor((v-1)/o.nCols),(v-1)%o.nCols];if(!Bs({r:h,c:m},{r:E,c:I}))continue;const x={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};i.push(x)}const a=Ls(i);Nr(a)}function u4(t,e){const n=e.puzzle,r=n.grid;Nr(zd()),Z$(t,n),e4(t,r),i4(t,r),t4(t,r),n4(t,r),s4(t,r),J$(t,r),a4(t,r),Q$(t,r),l4(t,r),r4(t,r),c4(t,e),o4(t,r)}function d4(){const{subscribe:t,set:e}=It(0),n=100;let r=Date.now(),o,i=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-i,o=setInterval(()=>{i=Date.now()-r,e(i)},n))},stop:()=>{a&&(a=!1,clearInterval(o),i=Date.now()-r)},reset:()=>{a=!1,clearInterval(o),i=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:i})}}var _4=ue('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function f4(t,e){ae(e,!1);const n=Ve(),r=()=>me(js,"$puzzleStore",n),o=()=>me(Cn,"$gridStore",n),i=()=>me(w,"$timer",n),a=N(),c=N(),u=N(),f=N();let g=N(!0),v=N(!1),h=N(null),m=N(100),E=N("100"),I=N(null),b=N("IDLE");const w=d4();function x(K){return K===null?"":String(K)}function T(K){const te=Math.floor(K/6e4),se=Math.floor(K%6e4/1e3),Z=Math.floor(K%1e3/100),ne=se.toString().padStart(2,"0");return`${te}:${ne}.${Z}`}function M(){O(v,!0)}function $(K){const te=parseInt(K);typeof te=="number"&&te>=1&&O(m,te)}async function W(){O(I,0),O(b,"SOLVING...");const K=new f_;ip();const te=Fp(d(a));K.addFile("test.mzn",te.model_str),w.reset(),w.start(),O(h,K.solve({options:{solver:"chuffed","num-solutions":d(m)}})),d(h).on("solution",se=>{const Z=se.output.json;se.type==="solution"&&d(I)!==null&&O(I,d(I)+1),u4(Z,te)}),d(h).on("error",se=>{O(u,"Solve"),O(b,"ERROR"),console.log(se.message),w.stop(),d(h)&&d(h).cancel()}),d(h).on("warning",se=>{O(b,"WARNING"),console.log(se.message)}),d(h).then(se=>{O(b,se.status),O(u,"Solve"),w.stop()})}function F(){d(h)===null||!d(h).isRunning()?W():d(h)!==null&&d(h).isRunning()&&(O(b,"IDLE"),O(u,"Solve"),w.stop(),d(h).cancel())}S(()=>r(),()=>{O(a,r())}),S(()=>o(),()=>{O(c,o())}),S(()=>{},()=>{O(u,"Solve")}),S(()=>i(),()=>{O(f,i())}),S(()=>d(h),()=>{d(h)&&(d(h)!==null&&d(h).isRunning()?O(u,"Stop"):O(u,"Solve"))}),Ie(),fe(),$l(t,{get isOpen(){return d(g)},set isOpen(K){O(g,K)},$$slots:{"panel-header":(K,te)=>{Fl(K,{slot:"panel-header",title:"Solver",get isOpen(){return d(g)},set isOpen(se){O(g,se)},$$legacy:!0})},"panel-content":(K,te)=>{var se=_4(),Z=oe(se),ne=U(Z,2);X$(ne,{get showModal(){return d(v)},set showModal(Gt){O(v,Gt)},$$legacy:!0});var ge=U(ne,2),ie=Y(ge,!0);B(ge);var ve=U(ge,2),Ae=Y(ve,!0);B(ve);var Le=U(ve,2),ye=Y(Le);sn(ye),A(ye,"min",1),A(ye,"max",200),A(ye,"step",1),B(Le);var Ce=U(Le,2),Xe=Y(Ce,!0);Q(()=>at(Xe,`Solution Count: ${x(d(I))}`)),B(Ce);var et=U(Ce,2),wt=Y(et,!0);Q(()=>at(wt,`Elapsed Time: ${T(d(f))}`)),B(et);var Tt=U(et,2),Kt=Y(Tt,!0);B(Tt),Q(()=>{at(ie,d(u)),at(Ae,`Max. Solutions: ${d(m)}`),at(Kt,`Status: ${d(b)}`)}),ke("click",Z,M),ke("click",ge,F),qn(ye,()=>d(E),Gt=>O(E,Gt)),ke("input",ye,()=>$(d(E))),L(K,se)}},$$legacy:!0}),le()}var g4=ue('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!> <!></div></div>');function h4(t){var e=g4(),n=Y(e);t3(n);var r=U(n,2),o=Y(r);f4(o,{});var i=U(o,2);M2(i,{elementHandlers:Pt});var a=U(i,2);HT(a,{elementHandlers:Pt});var c=U(a,2);_k(c,{elementHandlers:Pt});var u=U(c,2);r3(u,{}),B(r),B(e),L(t,e)}var v4=J('<path class="cursor svelte-zsq70u"></path>');function p4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Zt,"$toolStore",n),o=()=>me(Ho,"$selectionStore",n),i=N(),a=N(),c=.25;function u(g){if(!g)return"";const[v,h]=[g.c,g.r];return`M${v},${h}L${v+c},${h}L${v},${h+c}Z`}S(()=>r(),()=>{O(i,Dd(r()))}),S(()=>o(),()=>{O(a,u(o().lastCell))}),Ie(),fe();var f=v4();Q(()=>{A(f,"d",d(a)),A(f,"visibility",d(i)?"visible":"hidden")}),L(t,f),le()}var m4=J('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function E4(t,e){ae(e,!1);let n=G(e,"gridShape",8);fe();var r=m4(),o=Y(r);A(o,"x",0),A(o,"y",0),B(r),Q(()=>{A(o,"width",n().nCols),A(o,"height",n().nRows)}),L(t,r),le()}var C4=J('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),b4=J('<g class="grid-lines"></g>');function I4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Cn,"$gridStore",n),o=N();S(()=>r(),()=>{O(o,r().getAllCells())}),Ie(),fe();var i=b4();Qe(i,5,()=>d(o),mt,(a,c)=>{var u=C4();A(u,"width",1),A(u,"height",1),Q(()=>{A(u,"x",d(c).c),A(u,"y",d(c).r)}),L(a,u)}),B(i),L(t,i),le()}function w4(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function y4(t){const e=new Map;function n(r,o){const i=e.get(o);if(i!=null&&i.has(r)){i.delete(r),i.size<=0&&e.delete(o);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(o)}for(const r of t){const o=w4(r),i=o.length;for(let a=0;a<i;a++){const c=o[a%i],u=o[(a+1)%i],f=JSON.stringify(c),g=JSON.stringify(u);n(f,g)}}return e}function O4(t,e=0,n=!1){const r=[],o=y4(t);if(o.size<=0)return r;const i=new Set;for(;o.size>0;){const a=Array.from(o.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let f=JSON.parse(c);const g=Array.from(u)[0];let v=JSON.parse(g),h=g;const m=[];do{const E=o.get(h);if(E===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new De(f.c,f.r),b=new De(v.c,v.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,T=null;for(const ne of E){const ge=JSON.parse(ne),ie=new De(ge.c,ge.r),ve=b.subtract(I),Ae=ie.subtract(b),Le=ve.perpDotProduct(Ae);w<Le!=n&&(w=Le,T=ge,x=ne)}if(n&&E.size>1&&i.add(h),T===null||x===null)throw new Error("Corner with no adjacencies found");E.delete(x),E.size<=0&&o.delete(h);const M=e*(v.c-f.c),$=e*(T.c-v.c),W=e*(f.r-v.r),F=e*(v.r-T.r),K=F+w*$,te=M+w*W,se=new De(v.c+K,v.r+te),Z=4;i.has(h)?(m.push(new De(se.x-Z*M,se.y-Z*$)),m.push(new De(se.x-Z*W,se.y-Z*F))):m.push(se),f=v,v=T,h=x}while(h!==g);r.push(m)}return r}function bi(t,e=0,n=!1){return O4(t,e,n).map(i=>Ki(i,!0)).join("")}const A4=[new De(-.5,-.5),new De(.5,-.5),new De(.5,.5),new De(-.5,.5)];function x4(t,e,n=A4){if(e===1)return n;const r=[],o=n.length,i=0,a=360/e,c=t*a+i,u=(t+1)*a+i,f=c/(360/o),g=u/(360/o),v=Math.floor(f)%o,h=Math.ceil(f)%o,m=n[v].lerp(n[h],f%1),E=Math.floor(g)%o,I=Math.ceil(g)%o,b=n[E].lerp(n[I],g%1);r.push(m);for(let x=Math.ceil(f);x<=Math.floor(g);x++)r.push(n[x%o]);r.push(b);const w=new De(0,0);return r.push(w),r}function Pp(t,e,n=new De(0,0),r=!0,o=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const i=Math.cos(Math.PI/e),a=r?t:t/i,c=[];for(let u=0;u<e;u++){const f=a*Math.cos(u/e*2*Math.PI+o*2*Math.PI),g=a*Math.sin(u/e*2*Math.PI+o*2*Math.PI),v=n.add(new De(f,g));c.push(v)}return c}function Ki(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:o,y:i})=>`${o},${i}`).join("L")+n}function ho(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:o}={}){const i=t.map(g=>new De(g.x,g.y));if(r&&i.length>1){const g=i[i.length-1];for(let h=0;h<i.length-1;h++)if(g.equals(i[h])){i.push(i[h+1]);break}const v=i[0];for(let h=1;h<i.length;h++)if(v.equals(i[h])){i.unshift(i[h-1]);break}}if(i.length===1)i.push(i[0]);else{if(e){let g=i[1].subtract(i[0]);g=g.normalise(),g=g.scale(e),i[0]=i[0].add(g)}if(n){const g=i.length;let v=i[g-2].subtract(i[g-1]);v=v.normalise(),v=v.scale(n),i[g-1]=i[g-1].add(v)}}if(!o)return Ki(i);const a=i[0],c=["M",`${a.x},${a.y}`],u=i.length;for(let g=2;g<u;g++){const v=i[g-2],h=i[g-1],m=i[g];let E=v.subtract(h).normalise();E=E.scale(o),E=E.add(h);let I=m.subtract(h).normalise();I=I.scale(o),I=I.add(h),c.push(`L${E.x},${E.y} Q ${h.x},${h.y} ${I.x},${I.y}`)}const f=i[u-1];return c.push(`L${f.x},${f.y}`),c.join(" ")}function El(t,e={}){const n=ql(t);return ho(n,e)}function Jn(t){return new De(t.c+.5,t.r+.5)}function ql(t){return t.map(n=>Jn(n))}const L4=[new De(-.5,-.5),new De(.5,-.5),new De(.5,.5),new De(-.5,.5),new De(0,-.5),new De(0,.5),new De(-.5,0),new De(.5,0)];function N4(t,e){const n=L4[t];return n.subtract(n.scale(e))}function Bp(t,e){const n=[new De(t.c-e,t.r-e),new De(t.c+e,t.r+e)],r=[new De(t.c-e,t.r+e),new De(t.c+e,t.r-e)];return[n,r].map(i=>Ki(i,!1)).join("")}const R4=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Zl(t,e="none"){return R4.get(t)||e}function S4(t,e,n){let r=[];function i(c,u){return c.map(f=>f.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new De(-.12,-.32),new De(0,-.4),new De(.12,-.32)]:a=[new De(-.12,-.4),new De(0,-.32),new De(.12,-.4)],r=[a,i(a,90),i(a,180),i(a,270)],r=r.map(c=>c.map(u=>{const f=new De(n+.5,e+.5);return u.add(f)})),r}function g_(t,e){const n=[new De(-t,0),new De(0,0),new De(0,t)],o={[Pe.NE]:0,[Pe.E]:Math.PI/4,[Pe.SE]:Math.PI/2,[Pe.S]:3*Math.PI/4,[Pe.SW]:Math.PI,[Pe.W]:5*Math.PI/4,[Pe.NW]:3*Math.PI/2,[Pe.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(o))}function D4(t,e){const r=Hs(e),o=new De(r.c,r.r).normalise().scale(.3),i=Jn(t),a=i.subtract(o),c=i.add(o);return[a,c]}function T4(t,e){const r=D4(t,e);let o=g_(.2,e);o=o.map(u=>u.add(r[1]));const i=ho(r),a=ho(o);return i+a}function k4(t,e){const r=Hs(e),o=new De(r.c,r.r),a=Jn(t).add(o.scale(.4));return[a.subtract(o.normalise().scale(.2)),a]}function Su(t,e){const r=k4(t,e);let o=g_(.1,e);o=o.map(u=>u.add(r[1]));const i=ho(r),a=ho(o);return i+a}var M4=J('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),G4=J('<g class="regions-border"></g>');function U4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Zn,"$cellsStore",n),o=N(),i=N();function a(u,f){return u.filter(h=>h.region===f).map(h=>({r:h.r,c:h.c}))}S(()=>r(),()=>{O(o,r())}),S(()=>d(o),()=>{O(i,new Set(d(o).map(u=>u.region).filter(u=>u!==null)))}),Ie(),fe();var c=G4();Qe(c,5,()=>d(i),mt,(u,f)=>{var g=M4();Q(()=>A(g,"d",bi(a(d(o),d(f)),0,!1))),Q(()=>A(g,"id",`region-${d(f)??""}`)),L(u,g)}),B(c),L(t,c),le()}var F4=J('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function $4(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ho,"$selectionStore",n),o=()=>me(Zt,"$toolStore",n),i=N(),a=N(),c=N(),u=N(),f=N(),g=N();let v=G(e,"boundingBox",8);const h=.06,m=.05,E="#080808",I="#b2b2b2";S(()=>X(v()),()=>{O(i,v().x)}),S(()=>X(v()),()=>{O(a,v().y)}),S(()=>r(),()=>{O(c,r().cells)}),S(()=>d(c),()=>{O(u,bi(d(c),0))}),S(()=>d(c),()=>{O(f,bi(d(c),h))}),S(()=>o(),()=>{O(g,Dd(o()))}),Ie(),fe();var b=F4(),w=Y(b),x=Y(w);A(x,"stdDeviation",m),fo(),B(w);var T=U(w),M=Y(T);A(M,"fill",I);var $=U(M);A($,"fill",E),B(T);var W=U(T);B(b),Q(()=>{A(b,"visibility",d(g)?"visible":"hidden"),A(T,"x",d(i)),A(T,"y",d(a)),A(M,"x",d(i)),A(M,"y",d(a)),A($,"d",d(f)),A(W,"d",d(u))}),L(t,b),le()}var P4=J('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function B4(t,e){ae(e,!1);const n=N(),r=N();let o=G(e,"grid",8);S(()=>X(o()),()=>{O(n,o().getAllCells().map(c=>({r:c.r,c:c.c})))}),S(()=>d(n),()=>{O(r,bi(d(n),0))}),Ie(),fe();var i=P4(),a=Y(i);B(i),Q(()=>A(a,"d",d(r))),L(t,i),le()}function H4(t,e){const n=t.getRow(e.r);return new Set(n)}function W4(t,e){const n=t.getCol(e.c);return new Set(n)}function z4(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,o=t.getRegion(r);return new Set(o)}function Y4(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function j4(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function K4(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),o=new Set(r);return o.delete(e),o}function V4(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(o=>o===e)?new Set(r):n}function X4(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(o=>o===e)?new Set(r):n}function q4(t,e,n){let r=new Set;const i=n.cells.map(v=>t.getCell(v.r,v.c)).filter(v=>v!==void 0),a=i.length,c=[i[0],i[a-1]],u=i.slice(1,a-1),f=c.findIndex(v=>v===e);if(f!==-1){if(r=new Set([...r,...u]),u.length>0){const v=c.filter((h,m)=>m!==f);r=new Set([...r,...v])}return r}return u.findIndex(v=>v===e)!==-1&&(r=new Set([...r,...c])),r}function Z4(t,e,n){let r=new Set;const i=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!i.find(u=>u===e))return r;const c=i.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function Q4(t,e,n){let r=new Set;const i=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!i.find(u=>u===e))return r;const c=i.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function J4(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);return o&&(e.get(_.ANTIKNIGHT)&&(r=r.union(Y4(t,o))),e.get(_.ANTIKING)&&(r=r.union(j4(t,o))),e.get(_.DISJOINT_GROUPS)&&(r=r.union(K4(t,o))),e.get(_.NEGATIVE_DIAGONAL)&&(r=r.union(X4(t,o))),e.get(_.POSITIVE_DIAGONAL)&&(r=r.union(V4(t,o)))),r}function Du(t,e,n,r,o){if(e.tool_id===r)for(const i of Object.values(e.constraints)){const a=Q4(t,n,i);o=new Set([...o,...a])}return o}function e6(t,e,n){let r=new Set;const o=t.getCell(n.r,n.c);if(!o)return r;for(const i of e.values()){const a=i.tool_id;if(a===_.BETWEEN_LINE)for(const c of Object.values(i.constraints)){const u=q4(t,o,c);r=new Set([...r,...u])}else if(a===_.RENBAN_LINE)for(const c of Object.values(i.constraints)){const u=Z4(t,o,c);r=new Set([...r,...u])}r=Du(t,i,o,_.KILLER_CAGE,r),r=Du(t,i,o,_.PARITY_BALANCE_CAGE,r),r=Du(t,i,o,_.SPOTLIGHT_CAGE,r)}return r}function Hp(t,e){let n=new Set;const r=t.globalConstraints,o=t.grid,i=t.elementsDict;if(!r)return n;r.get(_.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...H4(o,e),...W4(o,e),...z4(o,e)])),n=new Set([...n,...J4(o,r,e)]),n=new Set([...n,...e6(o,i,e)]);const a=o.getCell(e.r,e.c);return a&&n.delete(a),n}function t6(t,e){const n=[];if(e.length==0)return[];for(const i of e)n.push(Hp(t,i));const r=n.reduce((i,a)=>i.intersection(a)),o=[];for(const i of r)o.push(i.toCoords());return o}var n6=J('<tspan class="svelte-xct9ah"> </tspan>'),r6=J('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function o6(t,e){ae(e,!1);const n=N();let r=G(e,"cell",8),o=G(e,"seen_values",8);const i=.25;function a(g){return o().find(h=>h===g)!==void 0}S(()=>X(r()),()=>{O(n,Jn({r:r().r,c:r().c}))}),Ie(),fe();var c=we(),u=oe(c);{var f=g=>{var v=r6(),h=Y(v);A(h,"font-size",i),Qe(h,5,()=>r().centerMarks,mt,(m,E)=>{var I=n6();const b=rt(()=>a(d(E)));Q(()=>vt(I,"conflict",d(b)));var w=Y(I,!0);B(I),Q(()=>at(w,d(E))),L(m,I)}),B(h),B(v),Q(()=>{A(h,"x",d(n).x),A(h,"y",d(n).y),A(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),L(g,v)};ee(u,g=>{r().centerMarks.length&&g(f)})}L(t,c),le()}var i6=J('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),s6=J('<g class="corner-marks-group"></g>');function a6(t,e){ae(e,!1);let n=G(e,"cell",8),r=G(e,"seen_values",8);const o=.25,i=.28;function a(v){const h=v.cornerMarks.slice(0,8),m=Jn({r:v.r,c:v.c});return h.map((E,I)=>{const b=N4(I,i);return{pos:m.add(b),value:E,idx:I}})}function c(v){return r().find(m=>m===v)!==void 0}fe();var u=we(),f=oe(u);{var g=v=>{var h=s6();Qe(h,5,()=>a(n()),mt,(m,E)=>{let I=()=>d(E).pos,b=()=>d(E).value;var w=i6();A(w,"font-size",o);const x=rt(()=>c(b()));var T=Y(w,!0);B(w),Q(()=>{A(w,"x",I().x),A(w,"y",I().y),vt(w,"conflict",d(x)),at(T,b())}),L(m,w)}),B(h),L(v,h)};ee(f,v=>{n().cornerMarks.length&&v(g)})}L(t,u),le()}var l6=J('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),c6=J('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),u6=J("<!><!>",1),d6=J('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function _6(t,e){ae(e,!1);const n=Ve(),r=()=>me(vo,"$settingsStore",n),o=()=>me(js,"$puzzleStore",n),i=()=>me(Zt,"$toolStore",n),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"cell",8);const E=.8,I=400;function b(M,$){if(!M)return[];let F=[...Hp(d(g),$.toCoords())].map(K=>K.value).filter(K=>K!==null);return F=[...new Set(F)],F}S(()=>X(m()),()=>{O(a,m().value)}),S(()=>X(m()),()=>{O(c,m().given)}),S(()=>X(m()),()=>{O(u,Jn({r:m().r,c:m().c}))}),S(()=>r(),()=>{O(f,r().highlightPencilmarkConflicts)}),S(()=>o(),()=>{O(g,o())}),S(()=>r(),()=>{O(v,r().showSolution)}),S(()=>(d(f),X(m())),()=>{O(h,b(d(f),m()))}),Ie(),fe();var w=we(),x=oe(w);{var T=M=>{var $=d6(),W=Y($);{var F=te=>{var se=we(),Z=oe(se);{var ne=ge=>{var ie=l6();A(ie,"font-size",E),A(ie,"font-weight",I);var ve=Y(ie,!0);B(ie),Q(()=>{A(ie,"x",d(u).x),A(ie,"y",d(u).y),at(ve,m().region)}),L(ge,ie)};ee(Z,ge=>{m().region!==null&&ge(ne)})}L(te,se)},K=te=>{var se=we(),Z=oe(se);{var ne=ie=>{var ve=c6();A(ve,"font-size",E),A(ve,"font-weight",I);var Ae=Y(ve,!0);B(ve),Q(()=>{A(ve,"x",d(u).x),A(ve,"y",d(u).y),vt(ve,"given",d(c)),at(Ae,d(a))}),L(ie,ve)},ge=ie=>{var ve=u6(),Ae=oe(ve);a6(Ae,{get cell(){return m()},get seen_values(){return d(h)}});var Le=U(Ae);o6(Le,{get cell(){return m()},get seen_values(){return d(h)}}),L(ie,ve)};ee(Z,ie=>{d(a)!==null?ie(ne):ie(ge,!1)},!0)}L(te,se)};ee(W,te=>{i()===_.REGIONS?te(F):te(K,!1)})}B($),Q(()=>vt($,"hide-given",m().given)),L(M,$)};ee(x,M=>{d(v)||M(T)})}L(t,w),le()}var f6=J("<path></path>"),g6=J('<g class="highlights-group"></g>');function h6(t,e){ae(e,!1);const n=Ve(),r=()=>me(Zt,"$toolStore",n);let o=G(e,"cell",8);function i(f){const g=Jn({r:o().r,c:o().c}),v=o().highlights.length;return o().highlights.map((m,E)=>{let I=x4(E,v);I=I.map(w=>w.add(g));const b=Ki(I,!0);return{colorId:m,d:b}})}fe();var a=we(),c=oe(a);{var u=f=>{var g=we(),v=oe(g);{var h=m=>{var E=g6();Qe(E,5,()=>i(o()),mt,(I,b)=>{let w=()=>d(b).colorId,x=()=>d(b).d;var T=f6();Q(()=>{Rs(T,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),A(T,"d",x())}),L(I,T)}),B(E),L(m,E)};ee(v,m=>{o().highlights.length&&m(h)})}L(f,g)};ee(c,f=>{r()!==_.REGIONS&&f(u)})}L(t,a),le()}var v6=J('<path class="cell-marker" fill="none"></path>'),p6=J('<circle fill="none" opacity="0.9"></circle>');function m6(t,e){ae(e,!1);const n=N(),r=N();let o=G(e,"marker",8);const i=.3,a=.08;S(()=>X(o()),()=>{O(n,Bp(o(),i))}),S(()=>X(o()),()=>{O(r,Zl(o().colorId,"black"))}),Ie(),fe();var c=we(),u=oe(c);{var f=v=>{var h=v6();A(h,"stroke-width",a),Q(()=>{A(h,"d",d(n)),A(h,"stroke",d(r))}),L(v,h)},g=v=>{var h=p6();A(h,"r",i),A(h,"stroke-width",a),Q(()=>{Rs(h,`cell-marker color-${o().colorId??""}`),A(h,"cx",o().c),A(h,"cy",o().r),A(h,"stroke",d(r))}),L(v,h)};ee(u,v=>{o().marker==="X"?v(f):v(g,!1)})}L(t,c),le()}var E6=J('<g class="cell-markers"></g>');function C6(t,e){let n=G(e,"markers",8);var r=E6();Qe(r,5,n,o=>`${o.r}, ${o.c}, ${o.marker}`,(o,i)=>{m6(o,{get marker(){return d(i)}})}),B(r),L(t,r)}var b6=J('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function I6(t,e){ae(e,!1);const n=N();let r=G(e,"draftLineMarker",8);const o=.2;function i(u){return u.map(g=>[new De(g.p1.c,g.p1.r),new De(g.p2.c,g.p2.r)]).flat()}function a(u){const f=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Zl(f,"black"):"darkred"}S(()=>X(r()),()=>{O(n,Ki(i(r().draftLine)))}),Ie(),fe();var c=b6();Q(()=>A(c,"stroke",a(r()))),A(c,"stroke-width",o),A(c,"opacity",.5),Q(()=>A(c,"d",d(n))),L(t,c),le()}var w6=J('<path fill="none" opacity="0.9"></path>');function y6(t,e){ae(e,!1);const n=N(),r=N();let o=G(e,"marker",8);const i=.08,a=.04;S(()=>X(o()),()=>{O(n,Bp(o(),i))}),S(()=>X(o()),()=>{O(r,Zl(o().colorId,"black"))}),Ie(),fe();var c=w6();A(c,"stroke-width",a),Q(()=>{A(c,"d",d(n)),Rs(c,`edge-marker color-${o().colorId??""}`),A(c,"stroke",d(r))}),L(t,c),le()}var O6=J('<g class="edge-markers"></g>');function A6(t,e){let n=G(e,"markers",8);var r=O6();Qe(r,5,n,o=>`${o.r}, ${o.c}`,(o,i)=>{y6(o,{get marker(){return d(i)}})}),B(r),L(t,r)}var x6=J('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),L6=J('<g class="line-markers svelte-yha19m"></g>');function N6(t,e){ae(e,!1);let n=G(e,"lineMarkers",8);const r=.09;function o(c){return JSON.stringify(c)}function i(c){return Zl(c,"black")}fe();var a=L6();Qe(a,5,n,c=>o(c),(c,u)=>{var f=x6();A(f,"stroke-width",r),Q(()=>A(f,"stroke",i(d(u).colorId))),Q(()=>{A(f,"x1",d(u).p1.c),A(f,"y1",d(u).p1.r),A(f,"x2",d(u).p2.c),A(f,"y2",d(u).p2.r),Rs(f,`line-marker color-${d(u).colorId??""} svelte-yha19m`)}),L(c,f)}),B(a),L(t,a),le()}var R6=J('<g class="pen-tool"><!><!><!><!></g>');function S6(t,e){ae(e,!1);const n=Ve(),r=()=>me(vl,"$penToolStore",n),o=N();S(()=>r(),()=>{O(o,{draftLine:r().draftLine,mode:r().mode})}),Ie(),fe();var i=R6(),a=Y(i);N6(a,{get lineMarkers(){return r().lineMarkers}});var c=U(a);A6(c,{get markers(){return r().edgeMarkers}});var u=U(c);C6(u,{get markers(){return r().cellMarkers}});var f=U(u);I6(f,{get draftLineMarker(){return d(o)}}),B(i),L(t,i),le()}var D6=J("<path></path>");function Br(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N(),u=N(),f=N();let g=G(e,"cells",8),v=G(e,"shape",8,Td);const h="square";S(()=>X(v()),()=>{O(n,v().inset??.06)}),S(()=>X(v()),()=>{O(r,v().stroke??"black")}),S(()=>X(v()),()=>{O(o,v().strokeWidth??.03)}),S(()=>X(v()),()=>{O(i,v().strokeDasharray??.08)}),S(()=>X(v()),()=>{O(a,v().fill??"none")}),S(()=>X(v()),()=>{O(c,v().connectDiag??!0)}),S(()=>(X(g()),d(n),d(c)),()=>{O(u,bi(g(),d(n),d(c)))}),S(()=>X(v()),()=>{O(f,v().strokeLinejoin??"miter")}),Ie(),fe();var m=D6();A(m,"stroke-linecap",h),Q(()=>{A(m,"d",d(u)),A(m,"stroke",d(r)),A(m,"stroke-width",d(o)),A(m,"fill",d(a)),A(m,"stroke-dasharray",d(i)),A(m,"stroke-linejoin",d(f))}),L(t,m),le()}var T6=J('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function k6(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ho,"$selectionStore",n),o=()=>me(vo,"$settingsStore",n),i=()=>me(js,"$puzzleStore",n),a=()=>me(Zt,"$toolStore",n),c=N(),u=N(),f=N(),g=N(),v={type:H.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,w){return b.length?t6(d(f),b):[]}S(()=>r(),()=>{O(c,r().cells)}),S(()=>o(),()=>{O(u,o().highlightCellsSeenBySelection)}),S(()=>i(),()=>{O(f,i())}),S(()=>a(),()=>{O(g,Dd(a()))}),Ie(),fe();var m=we(),E=oe(m);{var I=b=>{var w=T6(),x=Y(w),T=rt(()=>h(d(c),d(f)));Br(x,{get cells(){return d(T)},shape:v}),B(w),L(b,w)};ee(E,b=>{d(u)&&d(g)&&b(I)})}L(t,m),le()}function Ql(t){const e=[],n=t.map(i=>i.value).filter(i=>i!==null),o=[...Zv(n).entries()].filter(([,i])=>i>1).map(([i])=>i);return e.push(...t.filter(i=>i.value!==null&&o.includes(i.value))),e}function M6(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Ql(r))}return new Set(e)}function G6(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Ql(r))}return new Set(e)}function U6(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Ql(r))}return new Set(e)}function F6(t){const e=[],n=t.getFilledCells();for(const r of n){const i=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);i.length&&(e.push(r),e.push(...i))}return new Set(e)}function $6(t){const e=[],n=t.getFilledCells();for(const r of n){const i=t.getNeighboorCells(r).filter(a=>a.value===r.value);i.length&&(e.push(r),e.push(...i))}return new Set(e)}function P6(t){const e=[],n=t.getFilledCells();for(const r of n){const i=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);i.length&&(e.push(r),e.push(...i))}return new Set(e)}function B6(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const o=t.getDisjointGroup(r),i=Ql(o);i.length&&e.push(...i)}return new Set(e)}function H6(t,e){let n=new Set;if(!e.get(_.SUDOKU_RULES_DO_NOT_APPLY)){const o=new Set([...M6(t),...G6(t),...U6(t)]);n=n.union(o)}return e.get(_.ANTIKNIGHT)&&(n=n.union(F6(t))),e.get(_.ANTIKING)&&(n=n.union($6(t))),e.get(_.NONCONSECUTIVE)&&(n=n.union(P6(t))),e.get(_.DISJOINT_GROUPS)&&(n=n.union(B6(t))),n}function W6(t,e){return[...new Set([...H6(t,e)])]}var z6=J('<rect class="conflict svelte-4mp6ok"></rect>'),Y6=J('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function j6(t,e){ae(e,!1);const n=Ve(),r=()=>me(vo,"$settingsStore",n),o=()=>me(Cn,"$gridStore",n),i=()=>me(qr,"$globalConstraintsStore",n),a=()=>me(Zn,"$cellsStore",n),c=N(),u=N(),f=N(),g=N();H.CAGE;function v(I){return W6(d(u),d(f)).map(x=>x.toCoords())}S(()=>r(),()=>{O(c,r().checkConflicts)}),S(()=>o(),()=>{O(u,o())}),S(()=>i(),()=>{O(f,i())}),S(()=>a(),()=>{O(g,a())}),Ie(),fe();var h=we(),m=oe(h);{var E=I=>{var b=Y6();Qe(b,5,()=>v(d(g)),mt,(w,x)=>{var T=z6();A(T,"width",1),A(T,"height",1),Q(()=>{A(T,"x",d(x).c),A(T,"y",d(x).r)}),L(w,T)}),B(b),L(I,b)};ee(m,I=>{d(c)&&I(E)})}L(t,h),le()}var K6=J('<line class="diag svelte-ylotlw"></line>'),V6=J('<line class="antidiag svelte-ylotlw"></line>'),X6=J('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),q6=J('<line class="diag svelte-ylotlw"></line>'),Z6=J('<line class="antidiag svelte-ylotlw"></line>'),Q6=J('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),J6=J('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function eP(t,e){ae(e,!1);const n=Ve(),r=()=>me(qr,"$globalConstraintsStore",n),o=()=>me(Cn,"$gridStore",n),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N(),m=N(),E=N(),I=N(),b=N(),w=0,x=0,T=0,M=0;S(()=>r(),()=>{O(i,r())}),S(()=>(d(i),_),()=>{O(a,!!d(i).get(_.POSITIVE_DIAGONAL))}),S(()=>(d(i),_),()=>{O(c,!!d(i).get(_.NEGATIVE_DIAGONAL))}),S(()=>(d(i),_),()=>{O(u,!!d(i).get(_.NEGATIVE_ANTIDIAGONAL))}),S(()=>(d(i),_),()=>{O(f,!!d(i).get(_.POSITIVE_ANTIDIAGONAL))}),S(()=>(d(i),_),()=>{O(g,!!d(i).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),S(()=>(d(i),_),()=>{O(v,!!d(i).get(_.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),S(()=>o(),()=>{O(h,o())}),S(()=>d(h),()=>{O(m,d(h).nCols)}),S(()=>d(h),()=>{O(E,d(h).nRows)}),S(()=>d(h),()=>{O(I,d(h).nCols)}),S(()=>d(h),()=>{O(b,d(h).nRows)}),Ie(),fe();var $=J6(),W=Y($);{var F=ye=>{var Ce=K6();A(Ce,"x1",w),A(Ce,"y1",x),Q(()=>{A(Ce,"x2",d(I)),A(Ce,"y2",d(b))}),L(ye,Ce)};ee(W,ye=>{d(c)&&ye(F)})}var K=U(W);{var te=ye=>{var Ce=V6();A(Ce,"x1",w),A(Ce,"y1",x),Q(()=>{A(Ce,"x2",d(I)),A(Ce,"y2",d(b))}),L(ye,Ce)};ee(K,ye=>{d(u)&&ye(te)})}var se=U(K);{var Z=ye=>{var Ce=X6();A(Ce,"x1",w),A(Ce,"y1",x),Q(()=>{A(Ce,"x2",d(I)),A(Ce,"y2",d(b))}),L(ye,Ce)};ee(se,ye=>{d(g)&&ye(Z)})}var ne=U(se);{var ge=ye=>{var Ce=q6();A(Ce,"x2",M),A(Ce,"y1",T),Q(()=>{A(Ce,"x1",d(m)),A(Ce,"y2",d(E))}),L(ye,Ce)};ee(ne,ye=>{d(a)&&ye(ge)})}var ie=U(ne);{var ve=ye=>{var Ce=Z6();A(Ce,"x2",M),A(Ce,"y1",T),Q(()=>{A(Ce,"x1",d(m)),A(Ce,"y2",d(E))}),L(ye,Ce)};ee(ie,ye=>{d(f)&&ye(ve)})}var Ae=U(ie);{var Le=ye=>{var Ce=Q6();A(Ce,"x2",M),A(Ce,"y1",T),Q(()=>{A(Ce,"x1",d(m)),A(Ce,"y2",d(E))}),L(ye,Ce)};ee(Ae,ye=>{d(v)&&ye(Le)})}B($),L(t,$),le()}var tP=J('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1cxyg7s"><use class="fog-edge-1 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-2 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-3 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-4 svelte-1cxyg7s" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1cxyg7s"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1cxyg7s"><rect class="fog-mask-white svelte-1cxyg7s"></rect><g class="fog-mask-black svelte-1cxyg7s"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1cxyg7s"></rect><rect class="fog-mask-black svelte-1cxyg7s" mask="url(#fog-mask-fog)"></rect></mask></defs>');function nP(t,e){ae(e,!1);const n=Ve(),r=()=>me(sp,"$showFogStore",n),o=()=>me(Ul,"$solutionStore",n),i=()=>me(Cn,"$gridStore",n),a=()=>me(_p,"$fogLightsStore",n),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"boundingBox",8),E=G(e,"gridShape",8);function I(ie){const ve=[];if(!ie)return ve;for(const Ae of Object.entries(ie)){const Le=Ae[1].cell,ye=d(f).getCell(Le.r,Le.c);ye&&ve.push(ye)}return ve}function b(ie,ve){const Ae=I(ve);return[...ie.getAllCells().filter(Xe=>!Ae.includes(Xe))].map(Xe=>Xe.toCoords())}S(()=>r(),()=>{O(c,r())}),S(()=>o(),()=>{O(u,o())}),S(()=>i(),()=>{O(f,i())}),S(()=>a(),()=>{O(g,a())}),S(()=>(d(f),d(g)),()=>{O(v,b(d(f),d(g)))}),S(()=>d(v),()=>{O(h,bi(d(v),0))}),Ie(),fe();var w=tP(),x=Y(w),T=Y(x);B(x);var M=U(x),$=Y(M);A($,"stroke-width",.4);var W=U($);A(W,"stroke-width",.3);var F=U(W);A(F,"stroke-width",.2);var K=U(F);A(K,"stroke-width",.1),fo(),B(M);var te=U(M),se=Y(te);fo(),B(te);var Z=U(te),ne=Y(Z),ge=U(ne);A(ge,"x",0),A(ge,"y",0),B(Z),B(w),Q(()=>{A(T,"d",d(h)),vt(M,"disabled",!d(c)),vt(te,"disabled",!d(c)),A(se,"x",m().x),A(se,"y",m().y),A(se,"width",m().width),A(se,"height",m().height),A(ne,"x",m().x),A(ne,"y",m().y),A(ne,"width",m().width),A(ne,"height",m().height),A(ge,"width",E().nCols),A(ge,"height",E().nRows)}),L(t,w),le()}var rP=J('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function oP(t,e){ae(e,!1);const n=Ve(),r=()=>me(sp,"$showFogStore",n),o=N();let i=G(e,"gridShape",8);S(()=>r(),()=>{O(o,r())}),Ie(),fe();var a=rP(),c=Y(a);A(c,"x",0),A(c,"y",0),B(a),Q(()=>{A(a,"visibility",d(o)?"visible":"hidden"),A(c,"width",i().nCols),A(c,"height",i().nRows)}),L(t,a),le()}var iP=J('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function sP(t,e){ae(e,!1);const n=N();let r=G(e,"r",8),o=G(e,"c",8),i=G(e,"val",8);const a=.8,c=400;S(()=>(X(r()),X(o())),()=>{O(n,Jn({r:r(),c:o()}))}),Ie(),fe();var u=we(),f=oe(u);{var g=v=>{var h=iP();A(h,"font-size",a),A(h,"font-weight",c);var m=Y(h,!0);B(h),Q(()=>{A(h,"x",d(n).x),A(h,"y",d(n).y),at(m,i())}),L(v,h)};ee(f,v=>{i()!==null&&v(g)})}L(t,u),le()}var aP=J('<g class="solution-layer"></g>');function lP(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ul,"$solutionStore",n),o=()=>me(vo,"$settingsStore",n),i=()=>me(Gl,"$gameModeStore",n),a=N(),c=N(),u=N();S(()=>r(),()=>{O(a,r())}),S(()=>o(),()=>{O(c,o().showSolution)}),S(()=>i(),()=>{O(u,i())}),Ie(),fe();var f=we(),g=oe(f);{var v=h=>{var m=aP();Qe(m,5,()=>d(a),mt,(E,I,b)=>{var w=we(),x=oe(w);Qe(x,1,()=>d(I),mt,(T,M,$)=>{sP(T,{r:b,c:$,get val(){return d(M)}})}),L(E,w)}),B(m),L(h,m)};ee(g,h=>{d(a)&&d(c)&&d(u)===Ii.SETTING&&h(v)})}L(t,f),le()}var cP=J('<g class="element-group"></g>'),uP=J('<g mask="url(#fog-mask-fog)"></g>');function Za(t,e){let n=G(e,"elements",8),r=G(e,"g_name",8),o=G(e,"Component",8);var i=uP();Qe(i,5,n,mt,(a,c)=>{let u=()=>d(c).toolId,f=()=>d(c).constraints;var g=cP();Qe(g,5,()=>Object.entries(f()),v=>v[0],(v,h)=>{o()(v,{get tool(){return d(h)[1]},get c_id(){return d(h)[0]}})}),B(g),Q(()=>A(g,"data-toolId",u())),L(a,g)}),B(i),Q(()=>Rs(i,Ey(r()))),L(t,i)}var dP=J('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),_P=J('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),fP=J('<g class="quadruple-text"><!></g>');function gP(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N();let c=G(e,"cornerTool",8);const u=c().cells,f=new De(u[u.length-1].c,u[u.length-1].r),g=fn(c().toolId,Pt)??Hu;S(()=>X(c()),()=>{O(n,c().value)}),S(()=>X(c()),()=>{O(r,c().shape??g)}),S(()=>d(r),()=>{var E;O(o,((E=d(r))==null?void 0:E.fontSize)??.2)}),S(()=>d(r),()=>{var E;O(i,((E=d(r))==null?void 0:E.fontColor)??"black")}),S(()=>d(n),()=>{var E;O(a,d(n)?(E=d(n))==null?void 0:E.split(","):[])}),Ie(),fe();var v=we(),h=oe(v);{var m=E=>{var I=fP(),b=Y(I);{var w=T=>{var M=dP(),$=Y(M,!0);Q(()=>at($,d(a).join(" "))),B(M),Q(()=>{A(M,"x",f.x),A(M,"y",f.y),A(M,"font-size",d(o)),A(M,"fill",d(i))}),L(T,M)},x=T=>{var M=_P(),$=oe(M),W=Y($,!0);Q(()=>at(W,d(a).slice(0,2).join(" "))),B($);var F=U($),K=Y(F,!0);Q(()=>at(K,d(a).slice(2).join(" "))),B(F),Q(()=>{A($,"x",f.x),A($,"y",f.y),A($,"dy",-d(o)/2),A($,"font-size",d(o)),A($,"fill",d(i)),A(F,"x",f.x),A(F,"y",f.y),A(F,"dy",d(o)/2),A(F,"font-size",d(o)),A(F,"fill",d(i))}),L(T,M)};ee(b,T=>{d(a).length<=2?T(w):T(x,!1)})}B(I),Q(()=>A(I,"data-count",d(a).length)),L(E,I)};ee(h,E=>{d(n)&&E(m)})}L(t,v),le()}var hP=J("<circle></circle>");function fr(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N();let u=G(e,"x",8),f=G(e,"y",8),g=G(e,"shape",8);S(()=>X(g()),()=>{O(n,g().r??.35)}),S(()=>X(g()),()=>{O(r,g().stroke??"black")}),S(()=>X(g()),()=>{var h;O(o,(h=g())==null?void 0:h.opacity)}),S(()=>X(g()),()=>{O(i,g().strokeWidth??.02)}),S(()=>X(g()),()=>{O(a,g().fill??"none")}),S(()=>X(g()),()=>{O(c,g().strokeDasharray??0)}),Ie(),fe();var v=hP();Q(()=>{A(v,"cx",u()),A(v,"cy",f()),A(v,"r",d(n)),A(v,"stroke",d(r)),A(v,"stroke-width",d(i)),A(v,"fill",d(a)),A(v,"opacity",d(o)),A(v,"stroke-dasharray",d(c))}),L(t,v),le()}var vP=J("<ellipse></ellipse>");function pP(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N(),u=N();let f=G(e,"cx",8),g=G(e,"cy",8),v=G(e,"shape",8);S(()=>X(v()),()=>{O(n,v().width??.5)}),S(()=>X(v()),()=>{O(r,v().height??.5)}),S(()=>X(v()),()=>{O(o,v().stroke??"black")}),S(()=>X(v()),()=>{var m;O(i,(m=v())==null?void 0:m.opacity)}),S(()=>X(v()),()=>{O(a,v().strokeWidth??.02)}),S(()=>X(v()),()=>{O(c,v().fill??"none")}),S(()=>X(v()),()=>{O(u,v().angle??0)}),Ie(),fe();var h=vP();Q(()=>{A(h,"cx",f()),A(h,"cy",g()),A(h,"rx",d(n)/2),A(h,"ry",d(r)/2),A(h,"stroke",d(o)),A(h,"stroke-width",d(a)),A(h,"fill",d(c)),A(h,"opacity",d(i)),A(h,"transform",`rotate(${d(u)}, ${f()}, ${g()} )`)}),L(t,h),le()}var mP=J("<polygon></polygon>");function Cl(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N(),u=N(),f=N();let g=G(e,"cx",8),v=G(e,"cy",8),h=G(e,"shape",8);S(()=>X(h()),()=>{O(n,h().n??3)}),S(()=>X(h()),()=>{O(r,h().r??.5)}),S(()=>(d(r),d(n),X(g()),X(v())),()=>{O(o,Pp(d(r),d(n),new De(g(),v())))}),S(()=>d(o),()=>{O(i,d(o).map(E=>`${E.x},${E.y}`).join(" "))}),S(()=>X(h()),()=>{O(a,h().stroke??"black")}),S(()=>X(h()),()=>{O(c,h().strokeWidth??.02)}),S(()=>X(h()),()=>{O(u,h().fill??"none")}),S(()=>X(h()),()=>{O(f,h().angle??0)}),Ie(),fe();var m=mP();Q(()=>{A(m,"points",d(i)),A(m,"stroke",d(a)),A(m,"stroke-width",d(c)),A(m,"fill",d(u)),A(m,"transform",`rotate(${d(f)}, ${g()}, ${v()} )`)}),L(t,m),le()}var EP=J("<rect></rect>");function CP(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N(),u=N();let f=G(e,"cx",8),g=G(e,"cy",8),v=G(e,"shape",8);S(()=>X(v()),()=>{O(n,v().width??.5)}),S(()=>X(v()),()=>{O(r,v().height??.5)}),S(()=>(X(f()),d(n)),()=>{O(o,f()-d(n)/2)}),S(()=>(X(g()),d(r)),()=>{O(i,g()-d(r)/2)}),S(()=>X(v()),()=>{O(a,v().stroke||"black")}),S(()=>X(v()),()=>{O(c,v().strokeWidth||.023)}),S(()=>X(v()),()=>{O(u,v().fill||"none")}),Ie(),fe();var h=EP();Q(()=>{A(h,"x",d(o)),A(h,"y",d(i)),A(h,"width",d(n)),A(h,"height",d(r)),A(h,"stroke",d(a)),A(h,"stroke-width",d(c)),A(h,"fill",d(u))}),L(t,h),le()}var bP=J("<rect></rect>");function IP(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"cx",8),E=G(e,"cy",8),I=G(e,"shape",8);S(()=>X(I()),()=>{O(n,I().r??.5)}),S(()=>(X(m()),d(n)),()=>{O(r,m()-d(n))}),S(()=>(X(E()),d(n)),()=>{O(o,E()-d(n))}),S(()=>d(n),()=>{O(i,2*d(n))}),S(()=>d(n),()=>{O(a,2*d(n))}),S(()=>X(I()),()=>{O(c,I().stroke??"black")}),S(()=>X(I()),()=>{O(u,I().strokeWidth??.02)}),S(()=>X(I()),()=>{O(f,I().fill??"none")}),S(()=>X(I()),()=>{O(g,I().angle??0)}),S(()=>X(I()),()=>{O(v,I().strokeDasharray??0)}),S(()=>X(I()),()=>{O(h,I().opacity??1)}),Ie(),fe();var b=bP();Q(()=>{A(b,"x",d(r)),A(b,"y",d(o)),A(b,"width",d(i)),A(b,"height",d(a)),A(b,"stroke",d(c)),A(b,"stroke-width",d(u)),A(b,"fill",d(f)),A(b,"transform",`rotate(${d(g)}, ${m()}, ${E()})`),A(b,"stroke-dasharray",d(v)),A(b,"opacity",d(h))}),L(t,b),le()}function xr(t,e){ae(e,!1);const n=N();let r=G(e,"cx",8),o=G(e,"cy",8),i=G(e,"shape",8);S(()=>(X(i()),H),()=>{var g;O(n,((g=i())==null?void 0:g.type)??H.CIRCLE)}),Ie(),fe();var a=we(),c=oe(a);{var u=g=>{fr(g,{get x(){return r()},get y(){return o()},get shape(){return i()}})},f=g=>{var v=we(),h=oe(v);{var m=I=>{pP(I,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},E=I=>{var b=we(),w=oe(b);{var x=M=>{IP(M,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},T=M=>{var $=we(),W=oe($);{var F=te=>{CP(te,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},K=te=>{var se=we(),Z=oe(se);{var ne=ie=>{Cl(ie,{get cx(){return r()},get cy(){return o()},get shape(){return i()}})},ge=ie=>{fr(ie,{get x(){return r()},get y(){return o()},get shape(){return i()}})};ee(Z,ie=>{d(n)===H.POLYGON?ie(ne):ie(ge,!1)},!0)}L(te,se)};ee(W,te=>{d(n)===H.RECTANGLE?te(F):te(K,!1)},!0)}L(M,$)};ee(w,M=>{d(n)===H.SQUARE?M(x):M(T,!1)},!0)}L(I,b)};ee(h,I=>{d(n)===H.ELLIPSE?I(m):I(E,!1)},!0)}L(g,v)};ee(c,g=>{d(n)===H.CIRCLE?g(u):g(f,!1)})}L(t,a),le()}var wP=J('<text text-anchor="middle" dominant-baseline="central"> </text>'),yP=J('<g class="corner-tool"><!><!><!></g>');function Wp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);function I(T,M){return M===H.TEXT_ONLY?T.value?T.value:"-":T.value??""}S(()=>r(),()=>{var T;O(o,(T=r())==null?void 0:T.id)}),S(()=>(X(m()),Hu),()=>{O(i,fn(m().toolId,Pt)??Hu)}),S(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),S(()=>(d(a),H),()=>{var T;O(c,((T=d(a))==null?void 0:T.type)??H.CIRCLE)}),S(()=>d(a),()=>{var T;O(u,((T=d(a))==null?void 0:T.fontSize)??.2)}),S(()=>d(a),()=>{var T;O(f,((T=d(a))==null?void 0:T.fontColor)??"black")}),S(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),S(()=>X(m()),()=>{O(v,m().cells)}),S(()=>d(v),()=>{O(h,new De(d(v)[d(v).length-1].c,d(v)[d(v).length-1].r))}),Ie(),fe();var b=we(),w=oe(b);{var x=T=>{var M=yP(),$=Y(M);{var W=Z=>{xr(Z,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(g)}})};ee($,Z=>{E()&&E()===d(o)&&Z(W)})}var F=U($);xr(F,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(a)}});var K=U(F);{var te=Z=>{gP(Z,{get cornerTool(){return m()}})},se=Z=>{var ne=wP(),ge=Y(ne,!0);Q(()=>at(ge,I(m(),d(c)))),B(ne),Q(()=>{A(ne,"x",d(h).x),A(ne,"y",d(h).y),A(ne,"font-size",d(u)),A(ne,"fill",d(f))}),L(Z,ne)};ee(K,Z=>{m().toolId===_.QUADRUPLE?Z(te):Z(se,!1)})}B(M),L(T,M)};ee(w,T=>{d(v).length===4&&T(x)})}L(t,b),le()}var OP=J('<g class="corner-tool"><!></g>');function AP(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var o=we(),i=oe(o);{var a=c=>{var u=OP(),f=Y(u);Wp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),Q(()=>A(u,"id",`c-${r()}`)),L(c,u)};ee(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var xP=J('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ns(t,e){ae(e,!1);const n=N();let r=G(e,"value",8,""),o=G(e,"fontSize",8,.2),i=G(e,"x",8),a=G(e,"y",8),c=G(e,"position",8,"TL"),u=G(e,"fontColor",8,"var(--text-primary-color)"),f=G(e,"fontWeight",8,400),g=N(null),v=N(null);function h(x,T,M){const $=["TL","TR"].includes(M),F=["TL","BL"].includes(M)?x+.05:x,K=T;return new De(F,K)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function E(x){return["TL","TR"].includes(x)?"text-before-edge":""}by(()=>{if(!d(g)||!d(v))return;const x=d(g).getBBox();d(v).setAttribute("x",String(x.x)),d(v).setAttribute("y",String(x.y+x.height*.1)),d(v).setAttribute("width",String(x.width)),d(v).setAttribute("height",String(x.height*.8))}),S(()=>(X(i()),X(a()),X(c())),()=>{O(n,h(i(),a(),c()))}),Ie(),fe();var I=we(),b=oe(I);{var w=x=>{var T=xP(),M=oe(T);$o(M,F=>O(v,F),()=>d(v));var $=U(M);Q(()=>A($,"text-anchor",m(c()))),Q(()=>A($,"dominant-baseline",E(c())));var W=Y($,!0);B($),$o($,F=>O(g,F),()=>d(g)),Q(()=>{var F,K;A($,"x",(F=d(n))==null?void 0:F.x),A($,"y",(K=d(n))==null?void 0:K.y),A($,"font-size",o()),A($,"fill",u()),A($,"font-weight",f()),at(W,r())}),L(x,T)};ee(b,x=>{r().length&&x(w)})}L(t,I),le()}var LP=J('<text text-anchor="middle" dominant-baseline="central"> </text>'),NP=J("<!><!><!>",1);function zp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);function I(F,K){return K===H.TEXT_ONLY?F.value?F.value:"-":F.value??""}S(()=>r(),()=>{var F;O(o,(F=r())==null?void 0:F.id)}),S(()=>(X(m()),cl),()=>{O(i,fn(m().toolId,Pt)??cl)}),S(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),S(()=>d(a),()=>{O(c,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),S(()=>X(m()),()=>{O(u,m().cell)}),S(()=>(d(a),H),()=>{var F;O(f,((F=d(a))==null?void 0:F.type)||H.CIRCLE)}),S(()=>d(a),()=>{var F;O(g,((F=d(a))==null?void 0:F.fontSize)??.2)}),S(()=>d(a),()=>{var F;O(v,((F=d(a))==null?void 0:F.fontColor)??"black")}),S(()=>d(u),()=>{O(h,d(u).r%1===.5&&d(u).c%1===.5)}),Ie(),fe();var b=NP(),w=oe(b);{var x=F=>{xr(F,{get cx(){return d(u).c},get cy(){return d(u).r},get shape(){return d(c)}})};ee(w,F=>{E()===d(o)&&F(x)})}var T=U(w);xr(T,{get cx(){return d(u).c},get cy(){return d(u).r},get shape(){return d(a)}});var M=U(T);{var $=F=>{var K=rt(()=>I(m(),d(f))),te=rt(()=>Math.floor(d(u).c)),se=rt(()=>Math.floor(d(u).r));Ns(F,{get value(){return d(K)},get x(){return d(te)},get y(){return d(se)},position:"TL",get fontColor(){return d(v)}})},W=F=>{var K=LP(),te=Y(K,!0);Q(()=>at(te,I(m(),d(f)))),B(K),Q(()=>{A(K,"x",d(u).c),A(K,"y",d(u).r),A(K,"font-size",d(g)),A(K,"fill",d(v))}),L(F,K)};ee(M,F=>{d(h)?F($):F(W,!1)})}L(t,b),le()}var RP=J('<g class="center-corner-or-edge-tool"><!></g>');function SP(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var o=we(),i=oe(o);{var a=c=>{var u=RP(),f=Y(u);zp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),Q(()=>A(u,"id",`c-${r()}`)),L(c,u)};ee(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var DP=J('<rect stroke="none" fill="#5373ea80"></rect>'),TP=J('<rect stroke="none" fill="#5373ea66"></rect>'),kP=J('<path fill="none" stroke-linecap="round"></path><!>',1),MP=J('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function Fh(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=()=>me(Cn,"$gridStore",n),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N(),m=N(),E=N(),I=N();let b=G(e,"tool",8),w=G(e,"c_id",8,void 0);const x=.03;function T(ie){return ie.value&&ie.value.length?ie.value:"-"}function M(ie,ve){const Ae=Hs(ve),Le=new De(Ae.c,Ae.r).scale(.5),ye=Jn(ie),Ce=ye.add(Le.scale(.5)),Xe=ye.add(Le.scale(.8));return[Ce,Xe]}function $(ie,ve){const Le=M(ie,ve);let ye=g_(.08,ve);ye=ye.map(wt=>wt.add(Le[1]));const Ce=ho(Le),Xe=ho(ye);return Ce+Xe}S(()=>r(),()=>{var ie;O(i,(ie=r())==null?void 0:ie.id)}),S(()=>X(b()),()=>{O(a,b().cell)}),S(()=>d(a),()=>{O(c,Jn(d(a)))}),S(()=>(o(),X(b())),()=>{O(u,o().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),S(()=>(X(b()),sh),()=>{O(f,fn(b().toolId,Pt)??sh)}),S(()=>(X(b()),d(f)),()=>{O(g,b().shape??d(f))}),S(()=>d(g),()=>{var ie;O(v,((ie=d(g))==null?void 0:ie.fontSize)??.5)}),S(()=>d(g),()=>{var ie;O(h,((ie=d(g))==null?void 0:ie.fontColor)??"var(--text-primary-color)")}),S(()=>d(g),()=>{var ie;O(m,((ie=d(g))==null?void 0:ie.stroke)??"var(--text-primary-color)")}),S(()=>d(g),()=>{O(E,{...d(g),stroke:"var(--constraint-selected-color)",strokeWidth:x+.07})}),S(()=>(d(a),X(b())),()=>{O(I,$(d(a),b().direction))}),Ie(),fe();var W=MP(),F=Y(W);{var K=ie=>{var ve=we(),Ae=oe(ve);Qe(Ae,1,()=>d(u),mt,(Le,ye)=>{var Ce=DP();A(Ce,"width",1),A(Ce,"height",1),Q(()=>{A(Ce,"x",d(ye).c),A(Ce,"y",d(ye).r)}),L(Le,Ce)}),L(ie,ve)};ee(F,ie=>{w()===void 0&&ie(K)})}var te=U(F);{var se=ie=>{var ve=kP(),Ae=oe(ve),Le=U(Ae);Qe(Le,1,()=>d(u),mt,(ye,Ce)=>{var Xe=TP();A(Xe,"width",1),A(Xe,"height",1),Q(()=>{A(Xe,"x",d(Ce).c),A(Xe,"y",d(Ce).r)}),L(ye,Xe)}),Q(()=>{A(Ae,"d",d(I)),A(Ae,"stroke",d(E).stroke),A(Ae,"stroke-width",d(E).strokeWidth)}),L(ie,ve)};ee(te,ie=>{w()&&w()===d(i)&&ie(se)})}var Z=U(te);A(Z,"stroke-width",x);var ne=U(Z),ge=Y(ne,!0);Q(()=>at(ge,T(b()))),B(ne),B(W),Q(()=>{A(Z,"d",d(I)),A(Z,"stroke",d(m)),A(ne,"x",d(c).x),A(ne,"y",d(c).y),A(ne,"font-size",d(v)),A(ne,"fill",d(h))}),L(t,W),le()}var GP=J('<g class="outside-direction-tool"><!></g>'),UP=J('<g class="outside-direction-preview"><!></g>');function Yp(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var o=we(),i=oe(o);{var a=u=>{var f=GP(),g=Y(f);Fh(g,{get tool(){return n()},get c_id(){return r()}}),B(f),Q(()=>A(f,"data-id",`${r()}`)),L(u,f)},c=u=>{var f=UP();A(f,"opacity",.5);var g=Y(f);Fh(g,{get tool(){return n()}}),B(f),L(u,f)};ee(i,u=>{r()!==void 0?u(a):u(c,!1)})}L(t,o)}var FP=J('<path fill="none"></path>');function _o(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N();let u=G(e,"linePoints",8),f=G(e,"shape",8,void 0);const g="round",v="round";S(()=>X(f()),()=>{var m;O(n,((m=f())==null?void 0:m.stroke)??"gray")}),S(()=>X(f()),()=>{var m;O(r,((m=f())==null?void 0:m.strokeWidth)??.1)}),S(()=>X(f()),()=>{var m;O(o,((m=f())==null?void 0:m.strokeDasharray)??0)}),S(()=>X(f()),()=>{var m;O(i,((m=f())==null?void 0:m.strokeDashoffset)??0)}),S(()=>X(f()),()=>{var m,E,I,b,w,x,T,M;O(a,{shortenHead:((E=(m=f())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=f())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((x=(w=f())==null?void 0:w.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:((M=(T=f())==null?void 0:T.linePathOptions)==null?void 0:M.closeLoops)??!1})}),S(()=>(X(u()),d(a)),()=>{O(c,ho(u(),d(a)))}),Ie(),fe();var h=FP();A(h,"stroke-linejoin",g),A(h,"stroke-linecap",v),Q(()=>{A(h,"d",d(c)),A(h,"stroke",d(n)),A(h,"stroke-width",d(r)),A(h,"stroke-dasharray",d(o)),A(h,"stroke-dashoffset",d(i))}),L(t,h),le()}var $P=ue("<!> <!> <!>",1);function PP(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N();let c=G(e,"linePoints",8),u=G(e,"shape",8);function f(b){const w=Lt.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}S(()=>X(c()),()=>{O(n,c().length)}),S(()=>(d(n),X(c())),()=>{O(r,d(n)>1&&c()[0].equals(c()[d(n)-1]))}),S(()=>(d(n),X(c())),()=>{O(o,d(n)>=0?c()[0]:void 0)}),S(()=>(d(n),X(c())),()=>{O(i,d(n)>=0?c()[d(n)-1]:void 0)}),S(()=>X(u()),()=>{O(a,f(u()))}),Ie(),fe();var g=$P(),v=oe(g);_o(v,{get linePoints(){return c()},get shape(){return u()}});var h=U(v,2);{var m=b=>{fr(b,{get x(){return d(o).x},get y(){return d(o).y},get shape(){return d(a)}})};ee(h,b=>{!d(r)&&d(o)&&b(m)})}var E=U(h,2);{var I=b=>{fr(b,{get x(){return d(i).x},get y(){return d(i).y},get shape(){return d(a)}})};ee(E,b=>{!d(r)&&d(i)&&b(I)})}L(t,g),le()}var BP=J('<g class="corner-line-tool"><!></g>');function HP(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N();let a=G(e,"tool",8);const c=fn(a().toolId,Pt)??ks;S(()=>(X(a()),De),()=>{O(n,a().coords.map(h=>new De(h.c,h.r)))}),S(()=>X(a()),()=>{O(r,a().shape??c)}),S(()=>(d(r),H),()=>{var h;O(o,((h=d(r))==null?void 0:h.type)||H.LINE)}),S(()=>d(r),()=>{var h;O(i,((h=d(r))==null?void 0:h.opacity)??1)}),Ie(),fe();var u=BP(),f=Y(u);{var g=h=>{PP(h,{get linePoints(){return d(n)},get shape(){return d(r)}})},v=h=>{_o(h,{get linePoints(){return d(n)},get shape(){return d(r)}})};ee(f,h=>{d(o)===H.MAZE_WALL?h(g):h(v,!1)})}B(u),Q(()=>A(u,"opacity",d(i))),L(t,u),le()}var WP=J('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function $h(t,e){ae(e,!1);const n=N(),r=N(),o=N();let i=G(e,"shape",8),a=G(e,"coords",8);const[c,u]=a(),f=u.c,g=c.c===u.c?u.c+1:u.c,v=u.r,h=c.r===u.r?u.r+1:u.r;S(()=>X(i()),()=>{O(n,i().stroke??"black")}),S(()=>X(i()),()=>{var E;O(r,(E=i())==null?void 0:E.opacity)}),S(()=>X(i()),()=>{O(o,i().strokeWidth??.02)}),Ie(),fe();var m=WP();A(m,"x1",f),A(m,"x2",g),A(m,"y1",v),A(m,"y2",h),Q(()=>{A(m,"stroke",d(n)),A(m,"stroke-width",d(o)),A(m,"opacity",d(r))}),L(t,m),le()}var zP=J("<!><!>",1),YP=J("<!><!>",1),jP=J("<!><!>",1),KP=J("<!><!>",1),VP=J('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function jp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);function I(M,$){return $===H.TEXT_ONLY?M.value?M.value:"-":M.value??""}function b(M){if(M!==_.EDGE_INEQUALITY&&M!==_.ONE_WAY_DOOR)return 0;const $=Jn(d(v)[0]);return Jn(d(v)[1]).subtract($).angle()/(2*Math.PI)*360}S(()=>r(),()=>{var M;O(o,(M=r())==null?void 0:M.id)}),S(()=>(X(m()),cl),()=>{O(i,fn(m().toolId,Pt)??cl)}),S(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),S(()=>(d(a),H),()=>{var M;O(c,((M=d(a))==null?void 0:M.type)||H.CIRCLE)}),S(()=>d(a),()=>{var M;O(u,((M=d(a))==null?void 0:M.fontSize)??.2)}),S(()=>d(a),()=>{var M;O(f,((M=d(a))==null?void 0:M.fontColor)??"black")}),S(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),S(()=>X(m()),()=>{O(v,m().cells)}),S(()=>d(v),()=>{O(h,dp(ql(d(v))))}),Ie(),fe();var w=we(),x=oe(w);{var T=M=>{var $=VP(),W=oe($);{var F=Z=>{var ne=zP(),ge=oe(ne);{var ie=Ae=>{fr(Ae,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(g)}})};ee(ge,Ae=>{E()&&E()===d(o)&&Ae(ie)})}var ve=U(ge);fr(ve,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(a)}}),L(Z,ne)},K=Z=>{var ne=we(),ge=oe(ne);{var ie=Ae=>{var Le=YP(),ye=oe(Le);{var Ce=et=>{fr(et,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(g)}})};ee(ye,et=>{E()&&E()===d(o)&&et(Ce)})}var Xe=U(ye);fr(Xe,{get x(){return d(h).x},get y(){return d(h).y},get shape(){return d(a)}}),L(Ae,Le)},ve=Ae=>{var Le=we(),ye=oe(Le);{var Ce=et=>{var wt=jP(),Tt=oe(wt);{var Kt=Ft=>{$h(Ft,{get coords(){return d(v)},get shape(){return d(g)}})};ee(Tt,Ft=>{E()&&E()===d(o)&&Ft(Kt)})}var Gt=U(Tt);$h(Gt,{get coords(){return d(v)},get shape(){return d(a)}}),L(et,wt)},Xe=et=>{var wt=KP(),Tt=oe(wt);{var Kt=Ft=>{xr(Ft,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(g)}})};ee(Tt,Ft=>{E()&&E()===d(o)&&Ft(Kt)})}var Gt=U(Tt);xr(Gt,{get cx(){return d(h).x},get cy(){return d(h).y},get shape(){return d(a)}}),L(et,wt)};ee(ye,et=>{d(c)===H.BORDER_LINE?et(Ce):et(Xe,!1)},!0)}L(Ae,Le)};ee(ge,Ae=>{d(c)===H.TEXT_ONLY?Ae(ie):Ae(ve,!1)},!0)}L(Z,ne)};ee(W,Z=>{m().toolId===_.EDGE_INEQUALITY||m().toolId===_.ONE_WAY_DOOR?Z(F):Z(K,!1)})}var te=U(W);Q(()=>A(te,"transform",`rotate(${b(m().toolId)}, ${d(h).x}, ${d(h).y} )`));var se=Y(te,!0);Q(()=>at(se,I(m(),d(c)))),B(te),Q(()=>{A(te,"x",d(h).x),A(te,"y",d(h).y),A(te,"font-size",d(u)),A(te,"fill",d(f))}),L(M,$)};ee(x,M=>{d(v).length===2&&M(T)})}L(t,w),le()}var XP=J('<g class="edge-tool"><!></g>');function qP(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var o=we(),i=oe(o);{var a=c=>{var u=XP(),f=Y(u);jp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),Q(()=>A(u,"id",`c-${r()}`)),L(c,u)};ee(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var ZP=J('<path fill="none" stroke-linecap="round"></path>'),QP=J('<path fill="none" stroke-linecap="round"></path>'),JP=J('<path fill="none" stroke-linecap="round"></path>'),e9=J("<!><!><!>",1);function Ph(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N();let f=G(e,"tool",8),g=G(e,"c_id",8,void 0);S(()=>r(),()=>{var w;O(o,(w=r())==null?void 0:w.id)}),S(()=>(X(f()),ih),()=>{O(i,fn(f().toolId,Pt)??ih)}),S(()=>(X(f()),d(i)),()=>{O(a,f().shape??d(i))}),S(()=>d(a),()=>{O(c,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.03:.03})}),S(()=>d(a),()=>{O(u,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.05:.05})}),Ie(),fe();var v=e9(),h=oe(v);{var m=w=>{var x=we(),T=oe(x);Qe(T,1,()=>f().directions,mt,(M,$)=>{var W=ZP();Q(()=>A(W,"d",Su(f().cell,d($)))),Q(()=>{A(W,"stroke",d(c).stroke),A(W,"stroke-width",d(c).strokeWidth)}),L(M,W)}),L(w,x)};ee(h,w=>{w(m)})}var E=U(h);{var I=w=>{var x=we(),T=oe(x);Qe(T,1,()=>f().directions,mt,(M,$)=>{var W=QP();Q(()=>A(W,"d",Su(f().cell,d($)))),Q(()=>{A(W,"stroke",d(u).stroke),A(W,"stroke-width",d(u).strokeWidth)}),L(M,W)}),L(w,x)};ee(E,w=>{g()&&g()===d(o)&&w(I)})}var b=U(E);Qe(b,1,()=>f().directions,mt,(w,x)=>{var T=JP();Q(()=>A(T,"d",Su(f().cell,d(x)))),Q(()=>{A(T,"stroke",d(a).stroke),A(T,"stroke-width",d(a).strokeWidth)}),L(w,T)}),L(t,v),le()}var t9=J('<g class="single-cell-multi-arrow-tool"><!></g>'),n9=J('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function Kp(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var o=we(),i=oe(o);{var a=u=>{var f=t9(),g=Y(f);Ph(g,{get tool(){return n()},get c_id(){return r()}}),B(f),Q(()=>A(f,"data-id",`${r()}`)),L(u,f)},c=u=>{var f=n9();A(f,"opacity",.5);var g=Y(f);Ph(g,{get tool(){return n()}}),B(f),L(u,f)};ee(i,u=>{r()!==void 0?u(a):u(c,!1)})}L(t,o)}var r9=J('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function o9(t){var e=r9(),n=Y(e);A(n,"opacity",.5),B(e),L(t,e)}var i9=J('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function s9(t,e){ae(e,!1);const n=N();let r=G(e,"tool",8);G(e,"c_id",8,void 0),S(()=>X(r()),()=>{O(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),Ie(),fe();var o=i9();Q(()=>A(o,"transform",`translate(${d(n).x} ${d(n).y})`)),L(t,o),le()}var a9=J('<g class="fog-lights-layer svelte-1t48yul"></g>');function l9(t,e){ae(e,!1);const n=Ve(),r=()=>me(Zt,"$toolStore",n),o=N();let i=G(e,"element",8);S(()=>r(),()=>{O(o,r())}),Ie(),fe();var a=a9();Qe(a,5,()=>Object.entries(i()),c=>c[0],(c,u)=>{s9(c,{get tool(){return d(u)[1]},get c_id(){return d(u)[0]}})}),B(a),Q(()=>vt(a,"inactive",d(o)!==_.FOG_LIGHTS)),L(t,a),le()}var c9=J('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function Jl(t,e){ae(e,!1);const n=N(),r=N(),o=N();let i=G(e,"cx",8),a=G(e,"cy",8),c=G(e,"c_id",8);S(()=>X(c()),()=>{O(n,document.getElementById(`c-${c()}`))}),S(()=>d(n),()=>{var v;O(r,(v=d(n))==null?void 0:v.getBBox())}),S(()=>d(r),()=>{O(o,d(r)?Math.max(d(r).width,d(r).height):void 0)}),Ie();var u=we(),f=oe(u);{var g=v=>{var h=c9(),m=Y(h);A(m,"stroke-width",.6),B(h),Q(()=>A(h,"transform",`translate(${i()}, ${a()}) scale(${d(o)*.6})`)),L(v,h)};ee(f,v=>{d(o)&&v(g)})}L(t,u),le()}var u9=J('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),d9=J('<g class="edge-tool-preview"><!></g>');function _9(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N();let c=G(e,"tool_preview",8);S(()=>X(c()),()=>{O(n,c().tool)}),S(()=>X(c()),()=>{O(r,c().mode)}),S(()=>X(c()),()=>{O(o,c().match_id)}),S(()=>d(n),()=>{O(i,d(n).cells)}),S(()=>d(i),()=>{O(a,dp(ql(d(i))))}),Ie(),fe();var u=we(),f=oe(u);{var g=h=>{var m=u9();A(m,"opacity",.5);var E=Y(m);Jl(E,{get cx(){return d(a).x},get cy(){return d(a).y},get c_id(){return d(o)}}),B(m),L(h,m)},v=h=>{var m=d9();A(m,"opacity",.5);var E=Y(m);jp(E,{get tool(){return d(n)}}),B(m),L(h,m)};ee(f,h=>{d(r)==="remove"&&d(o)?h(g):h(v,!1)})}L(t,u),le()}var f9=J('<g class="corner-tool-remove-preview"><!></g>'),g9=J('<g class="corner-tool-preview"><!></g>');function h9(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N();let c=G(e,"tool_preview",8);S(()=>X(c()),()=>{O(n,c().tool)}),S(()=>X(c()),()=>{O(r,c().mode)}),S(()=>X(c()),()=>{O(o,c().match_id)}),S(()=>d(n),()=>{O(i,d(n).cells)}),S(()=>d(i),()=>{O(a,new De(d(i)[d(i).length-1].c,d(i)[d(i).length-1].r))}),Ie(),fe();var u=we(),f=oe(u);{var g=h=>{var m=f9();A(m,"opacity",.5);var E=Y(m);Jl(E,{get cx(){return d(a).x},get cy(){return d(a).y},get c_id(){return d(o)}}),B(m),L(h,m)},v=h=>{var m=g9();A(m,"opacity",.5);var E=Y(m);Wp(E,{get tool(){return d(n)}}),B(m),L(h,m)};ee(f,h=>{d(r)==="remove"&&d(o)?h(g):h(v,!1)})}L(t,u),le()}var v9=J('<path fill="none" stroke-linecap="round"></path>'),p9=J('<path fill="none" stroke-linecap="round"></path>'),m9=J('<!><!><path fill="none" stroke-linecap="round"></path>',1);function Vp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N();let h=G(e,"tool",8),m=G(e,"c_id",8,void 0);S(()=>r(),()=>{var M;O(o,(M=r())==null?void 0:M.id)}),S(()=>(X(h()),oh),()=>{O(i,fn(h().toolId,Pt)??oh)}),S(()=>(X(h()),d(i)),()=>{O(a,h().shape??d(i))}),S(()=>d(a),()=>{O(c,d(a).strokeWidth??.1)}),S(()=>d(a),()=>{O(u,d(a).stroke??"black")}),S(()=>d(a),()=>{O(f,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.05:.05})}),S(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),S(()=>X(h()),()=>{O(v,T4(h().cell,h().direction))}),Ie(),fe();var E=m9(),I=oe(E);{var b=M=>{var $=v9();Q(()=>{A($,"d",d(v)),A($,"stroke",d(f).stroke),A($,"stroke-width",d(f).strokeWidth)}),L(M,$)};ee(I,M=>{M(b)})}var w=U(I);{var x=M=>{var $=p9();Q(()=>{A($,"d",d(v)),A($,"stroke",d(g).stroke),A($,"stroke-width",d(g).strokeWidth)}),L(M,$)};ee(w,M=>{m()&&m()===d(o)&&M(x)})}var T=U(w);Q(()=>{A(T,"d",d(v)),A(T,"stroke",d(u)),A(T,"stroke-width",d(c))}),L(t,E),le()}var E9=J('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),C9=J('<g class="single-cell-arrow-tool-preview"><!></g>');function b9(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N();let a=G(e,"tool_preview",8);S(()=>X(a()),()=>{O(n,a().tool)}),S(()=>X(a()),()=>{O(r,a().mode)}),S(()=>X(a()),()=>{O(o,a().match_id)}),S(()=>d(n),()=>{O(i,{x:d(n).cell.c+.5,y:d(n).cell.r+.5})}),Ie(),fe();var c=we(),u=oe(c);{var f=v=>{var h=E9();A(h,"opacity",.5);var m=Y(h);Jl(m,{get cx(){return d(i).x},get cy(){return d(i).y},get c_id(){return d(o)}}),B(h),L(v,h)},g=v=>{var h=C9();A(h,"opacity",.5);var m=Y(h);Vp(m,{get tool(){return d(n)}}),B(h),L(v,h)};ee(u,v=>{d(r)==="remove"&&d(o)?v(f):v(g,!1)})}L(t,c),le()}var I9=ue("<!> <!>",1);function Xp(t,e){ae(e,!1);const n=N(),r=N();let o=G(e,"cells",8),i=G(e,"shape",8,Td),a=G(e,"value",8,void 0);S(()=>X(o()),()=>{O(n,o()[0])}),S(()=>d(n),()=>{O(r,new De(d(n).c,d(n).r))}),Ie(),fe();var c=I9(),u=oe(c);Br(u,{get cells(){return o()},get shape(){return i()}});var f=U(u,2);{var g=v=>{Ns(v,{get value(){return a()},get x(){return d(r).x},get y(){return d(r).y},position:"TL"})};ee(f,v=>{a()&&a().length&&v(g)})}L(t,c),le()}var w9=J('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Bh(t,e){ae(e,!1);const n=Ve(),r=()=>me(J2,"$minimumConstraintsStore",n),o=()=>me(eT,"$maximumConstraintsStore",n),i=N(),a=N(),c=N();let u=G(e,"coord",8),f=G(e,"minOrMax",8);function g(b,w){const x=[!0,!0,!0,!0];let T=[[0,-1],[1,0],[0,1],[-1,0]];for(let M=0;M<T.length;M++){let $=T[M];const W={r:b.r+$[1],c:b.c+$[0]};x[M]=!Object.values(w).some(F=>qe(W,F.cell))}return x}function v(b,w){let x=S4(f(),b.r,b.c);const T=g(b,w);return x=x.filter(($,W)=>T[W]),x.map($=>Ki($,!1)).join("")}function h(b,w){return f()==="max"?w:b}S(()=>X(u()),()=>{O(i,u().c)}),S(()=>X(u()),()=>{O(a,u().r)}),S(()=>(r(),o()),()=>{O(c,h(r(),o()))}),Ie(),fe();var m=w9(),E=Y(m);A(E,"width",1),A(E,"height",1);var I=U(E);Q(()=>A(I,"d",v(u(),d(c)))),B(m),Q(()=>{A(E,"x",d(i)),A(E,"y",d(a))}),L(t,m),le()}var y9=J("<circle></circle>");function O9(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N();let u=G(e,"x",8),f=G(e,"y",8),g=G(e,"value",8),v=G(e,"shape",8);S(()=>X(v()),()=>{O(n,v().r??.35)}),S(()=>X(v()),()=>{O(r,v().stroke??"black")}),S(()=>X(v()),()=>{var m;O(o,(m=v())==null?void 0:m.opacity)}),S(()=>X(v()),()=>{O(i,v().strokeWidth??.02)}),S(()=>X(g()),()=>{O(a,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),S(()=>X(v()),()=>{O(c,v().strokeDasharray??0)}),Ie(),fe();var h=y9();Q(()=>{A(h,"cx",u()),A(h,"cy",f()),A(h,"r",d(n)),A(h,"stroke",d(r)),A(h,"stroke-width",d(i)),A(h,"fill",d(a)),A(h,"opacity",d(o)),A(h,"stroke-dasharray",d(c))}),L(t,h),le()}var A9=J("<!><!>",1),x9=J("<!><!>",1),L9=J("<!><!><!>",1),N9=J('<g class="single-cell-tool"><!><!></g>');function qp(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"tool",8),E=G(e,"c_id",8,void 0);S(()=>r(),()=>{var $;O(o,($=r())==null?void 0:$.id)}),S(()=>(X(m()),rh),()=>{O(i,fn(m().toolId,Pt)??rh)}),S(()=>(X(m()),d(i)),()=>{O(a,m().shape??d(i))}),S(()=>(d(a),H),()=>{var $;O(c,(($=d(a))==null?void 0:$.type)||H.CIRCLE)}),S(()=>d(a),()=>{O(u,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.06:.06})}),S(()=>d(a),()=>{O(f,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),S(()=>X(m()),()=>{O(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),S(()=>X(m()),()=>{O(v,new De(m().cell.c,m().cell.r))}),S(()=>X(m()),()=>{O(h,m().value)}),Ie(),fe();var I=N9(),b=Y(I);{var w=$=>{Bh($,{get coord(){return m().cell},minOrMax:"min"})},x=$=>{var W=we(),F=oe(W);{var K=se=>{Bh(se,{get coord(){return m().cell},minOrMax:"max"})},te=se=>{var Z=we(),ne=oe(Z);{var ge=ve=>{var Ae=A9(),Le=oe(Ae);{var ye=Xe=>{xr(Xe,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(f)}})};ee(Le,Xe=>{E()&&E()===d(o)&&Xe(ye)})}var Ce=U(Le);O9(Ce,{get x(){return d(g).x},get y(){return d(g).y},get value(){return d(h)},get shape(){return d(a)}}),L(ve,Ae)},ie=ve=>{var Ae=we(),Le=oe(Ae);{var ye=Xe=>{var et=x9(),wt=oe(et);{var Tt=Ft=>{var tn=rt(()=>[m().cell]);Br(Ft,{get cells(){return d(tn)},get shape(){return d(f)}})};ee(wt,Ft=>{E()&&E()===d(o)&&Ft(Tt)})}var Kt=U(wt),Gt=rt(()=>[m().cell]);Xp(Kt,{get cells(){return d(Gt)},get shape(){return d(a)},get value(){return m().value}}),L(Xe,et)},Ce=Xe=>{var et=L9(),wt=oe(et);{var Tt=tn=>{xr(tn,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(u)}})};ee(wt,tn=>{tn(Tt)})}var Kt=U(wt);{var Gt=tn=>{xr(tn,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(f)}})};ee(Kt,tn=>{E()&&E()===d(o)&&tn(Gt)})}var Ft=U(Kt);xr(Ft,{get cx(){return d(g).x},get cy(){return d(g).y},get shape(){return d(a)}}),L(Xe,et)};ee(Le,Xe=>{d(c)===H.CAGE?Xe(ye):Xe(Ce,!1)},!0)}L(ve,Ae)};ee(ne,ve=>{m().toolId===_.COLORED_COUNTING_CIRCLES?ve(ge):ve(ie,!1)},!0)}L(se,Z)};ee(F,se=>{m().toolId===_.MAXIMUM?se(K):se(te,!1)},!0)}L($,W)};ee(b,$=>{m().toolId===_.MINIMUM?$(w):$(x,!1)})}var T=U(b);{var M=$=>{Ns($,{get value(){return d(h)},get x(){return d(v).x},get y(){return d(v).y},position:"TL"})};ee(T,$=>{d(c)!==H.CAGE&&m().toolId!==_.COLORED_COUNTING_CIRCLES&&d(h)&&$(M)})}B(I),Q(()=>A(I,"data-id",`${E()}`)),L(t,I),le()}var R9=J('<g class="single-cell-tool-preview"><!></g>');function S9(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N();let a=G(e,"tool_preview",8);S(()=>X(a()),()=>{O(n,a().tool)}),S(()=>X(a()),()=>{O(r,a().mode)}),S(()=>X(a()),()=>{O(o,a().match_id)}),S(()=>d(n),()=>{O(i,{x:d(n).cell.c+.5,y:d(n).cell.r+.5})}),Ie(),fe();var c=R9();A(c,"opacity",.5);var u=Y(c);qp(u,{get tool(){return d(n)}}),B(c),L(t,c),le()}var D9=J('<g class="single-cell-arrow-tool"><!></g>');function T9(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var o=we(),i=oe(o);{var a=c=>{var u=D9(),f=Y(u);Vp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),Q(()=>A(u,"id",`c-${r()}`)),L(c,u)};ee(i,c=>{r()!==void 0&&c(a)})}L(t,o)}var k9=J('<g class="single-cell-tool"><!></g>');function M9(t,e){let n=G(e,"tool",8),r=G(e,"c_id",8,void 0);var o=we(),i=oe(o);{var a=c=>{var u=k9(),f=Y(u);qp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),Q(()=>A(u,"id",`c-${r()}`)),L(c,u)};ee(i,c=>{r()!==void 0&&c(a)})}L(t,o)}function G9(t,e){ae(e,!1);let n=G(e,"tool",8),r=G(e,"c_id",8);fe();var o=we(),i=oe(o);{var a=c=>{var u=we(),f=oe(u);{var g=h=>{T9(h,{get tool(){return n()},get c_id(){return r()}})},v=h=>{var m=we(),E=oe(m);{var I=w=>{Kp(w,{get tool(){return n()},get c_id(){return r()}})},b=w=>{var x=we(),T=oe(x);{var M=$=>{M9($,{get tool(){return n()},get c_id(){return r()}})};ee(T,$=>{n().type==="SIMPLE"&&$(M)},!0)}L(w,x)};ee(E,w=>{n().type==="MULTIARROW"?w(I):w(b,!1)},!0)}L(h,m)};ee(f,h=>{n().type==="ARROW"?h(g):h(v,!1)})}L(c,u)};ee(i,c=>{n().toolId!==_.FOG_LIGHTS&&c(a)})}L(t,o),le()}var U9=ue("<!> <!> <!>",1);function Tu(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N();let a=G(e,"linePoints",8),c=G(e,"shape",8,ks);function u(b){var T;const w=Lt.cloneDeep(b);w.r=w.r||.2;const x=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(T=w.linePathOptions)==null?void 0:T.bezierRounding},w}S(()=>X(a()),()=>{O(n,a().length)}),S(()=>(d(n),X(a())),()=>{O(r,d(n)>=0?a()[0]:void 0)}),S(()=>(d(n),X(a())),()=>{O(o,d(n)>=0?a()[d(n)-1]:void 0)}),S(()=>X(c()),()=>{O(i,u(c()))}),Ie(),fe();var f=U9(),g=oe(f);{var v=b=>{fr(b,{get x(){return d(r).x},get y(){return d(r).y},get shape(){return d(i)}})};ee(g,b=>{d(r)&&b(v)})}var h=U(g,2);{var m=b=>{_o(b,{get linePoints(){return a()},get shape(){return d(i)}})};ee(h,b=>{d(n)>1&&b(m)})}var E=U(h,2);{var I=b=>{fr(b,{get x(){return d(o).x},get y(){return d(o).y},get shape(){return d(i)}})};ee(E,b=>{d(o)&&b(I)})}L(t,f),le()}var F9=ue("<!> <!> <!>",1);function ku(t,e){ae(e,!1);const n=N(),r=N(),o=N();let i=G(e,"linePoints",8),a=G(e,"shape",12,ks);const c=4,u=.5;function f(M,$){const W=$.r??u,F=$.n??c,K=$.angle??0,te=Pp(W,F,new De(0,0),!0,0),se=(F+(M-K/360)*F%F)%F,Z=Math.floor(se)%F,ne=Math.ceil(se)%F;return te[Z].lerp(te[ne],se%1).length()}function g(M){if(d(n)<=1)return 0;const $=i()[0],F=i()[1].subtract($).angle()/(2*Math.PI);return f(F,M)}function v(M){if(d(n)<=1)return 0;const $=i()[d(n)-1],F=i()[d(n)-2].subtract($).angle()/(2*Math.PI);return f(F,M)}function h(M){var W;const $=Lt.cloneDeep(M);return $.r=$.r||u,$.opacity=1,$.linePathOptions={shortenHead:g($),shortenTail:v($),bezierRounding:(W=$.linePathOptions)==null?void 0:W.bezierRounding},$}S(()=>X(i()),()=>{O(n,i().length)}),S(()=>(d(n),X(i())),()=>{O(r,d(n)>=0?i()[0]:void 0)}),S(()=>(d(n),X(i())),()=>{O(o,d(n)>=0?i()[d(n)-1]:void 0)}),S(()=>X(a()),()=>{a(h(a()))}),Ie(),fe();var m=F9(),E=oe(m);{var I=M=>{Cl(M,{get cx(){return d(r).x},get cy(){return d(r).y},get shape(){return a()}})};ee(E,M=>{d(r)&&M(I)})}var b=U(E,2);{var w=M=>{_o(M,{get linePoints(){return i()},get shape(){return a()}})};ee(b,M=>{d(n)>1&&M(w)})}var x=U(b,2);{var T=M=>{Cl(M,{get cx(){return d(o).x},get cy(){return d(o).y},get shape(){return a()}})};ee(x,M=>{d(o)&&M(T)})}L(t,m),le()}var $9=ue("<!> <!>",1);function Mu(t,e){ae(e,!1);const n=N();let r=G(e,"linePoints",8),o=G(e,"shape",8,ks);function i(m){var b,w,x;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}function a(m){var b,w,x;const E=Lt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}S(()=>X(r()),()=>{O(n,r().length>0?r()[0]:void 0)}),Ie(),fe();var c=$9(),u=oe(c);{var f=m=>{var E=rt(()=>i(o()));_o(m,{get linePoints(){return r()},get shape(){return d(E)}})};ee(u,m=>{r().length>1&&m(f)})}var g=U(u,2);{var v=m=>{var E=rt(()=>i(o()));fr(m,{get x(){return d(n).x},get y(){return d(n).y},get shape(){return d(E)}})},h=m=>{var E=we(),I=oe(E);{var b=w=>{var x=rt(()=>a(o()));Cl(w,{get cx(){return d(n).x},get cy(){return d(n).y},get shape(){return d(x)}})};ee(I,w=>{d(n)&&w(b)},!0)}L(m,E)};ee(g,m=>{d(n)&&o().type===H.THERMO_WITH_CIRCLE?m(v):m(h,!1)})}L(t,c),le()}var P9=J("<!><!><!>",1),B9=J("<!><!><!>",1),H9=J("<!><!><!>",1),W9=J("<!><!><!>",1),z9=J('<g class="line-tool"><!></g>');function Y9(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N();let v=G(e,"tool",8),h=G(e,"c_id",8);const m=fn(v().toolId,Pt)??ks;S(()=>r(),()=>{var x;O(o,(x=r())==null?void 0:x.id)}),S(()=>X(v()),()=>{O(i,ql(v().cells))}),S(()=>X(v()),()=>{O(a,v().shape??m)}),S(()=>(d(a),H),()=>{var x;O(c,((x=d(a))==null?void 0:x.type)||H.LINE)}),S(()=>d(a),()=>{var x;O(u,((x=d(a))==null?void 0:x.opacity)??1)}),S(()=>d(a),()=>{O(f,{...d(a),stroke:"var(--grid-background-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.06:.06})}),S(()=>d(a),()=>{O(g,{...d(a),stroke:"var(--constraint-selected-color)",strokeWidth:d(a).strokeWidth?d(a).strokeWidth+.07:.07})}),Ie(),fe();var E=z9(),I=Y(E);{var b=x=>{var T=P9(),M=oe(T);{var $=te=>{Tu(te,{get linePoints(){return d(i)},get shape(){return d(f)}})};ee(M,te=>{te($)})}var W=U(M);{var F=te=>{Tu(te,{get linePoints(){return d(i)},get shape(){return d(g)}})};ee(W,te=>{h()===d(o)&&te(F)})}var K=U(W);Tu(K,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(x,T)},w=x=>{var T=we(),M=oe(T);{var $=F=>{var K=B9(),te=oe(K);{var se=ie=>{ku(ie,{get linePoints(){return d(i)},get shape(){return d(f)}})};ee(te,ie=>{ie(se)})}var Z=U(te);{var ne=ie=>{ku(ie,{get linePoints(){return d(i)},get shape(){return d(g)}})};ee(Z,ie=>{h()===d(o)&&ie(ne)})}var ge=U(Z);ku(ge,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(F,K)},W=F=>{var K=we(),te=oe(K);{var se=ne=>{var ge=H9(),ie=oe(ge);{var ve=Ce=>{Mu(Ce,{get linePoints(){return d(i)},get shape(){return d(f)}})};ee(ie,Ce=>{Ce(ve)})}var Ae=U(ie);{var Le=Ce=>{Mu(Ce,{get linePoints(){return d(i)},get shape(){return d(g)}})};ee(Ae,Ce=>{h()===d(o)&&Ce(Le)})}var ye=U(Ae);Mu(ye,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(ne,ge)},Z=ne=>{var ge=W9(),ie=oe(ge);{var ve=Ce=>{_o(Ce,{get linePoints(){return d(i)},get shape(){return d(f)}})};ee(ie,Ce=>{Ce(ve)})}var Ae=U(ie);{var Le=Ce=>{_o(Ce,{get linePoints(){return d(i)},get shape(){return d(g)}})};ee(Ae,Ce=>{h()===d(o)&&Ce(Le)})}var ye=U(Ae);_o(ye,{get linePoints(){return d(i)},get shape(){return d(a)}}),L(ne,ge)};ee(te,ne=>{d(c)===H.THERMO_WITH_CIRCLE||d(c)===H.THERMO_WITH_POLYGON?ne(se):ne(Z,!1)},!0)}L(F,K)};ee(M,F=>{d(c)===H.LINE_WITH_POLYGON_ENDS?F($):F(W,!1)},!0)}L(x,T)};ee(I,x=>{d(c)===H.LINE_WITH_CIRCLE_ENDS?x(b):x(w,!1)})}B(E),Q(()=>A(E,"opacity",d(u))),L(t,E),le()}var j9=J('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function Zp(t,e){let n=G(e,"l",8,.2),r=G(e,"id",8),o=G(e,"strokeWidth",8),i=G(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=j9();A(u,"viewBox","0 0 1 1"),A(u,"refX",a),A(u,"refY",a),A(u,"markerWidth",1),A(u,"markerHeight",1);var f=Y(u);A(f,"d",c),B(u),Q(()=>{A(u,"id",r()),A(f,"stroke-width",o()),A(f,"stroke",i())}),L(t,u)}var K9=J('<path class="arrow-line" fill="none"></path>'),V9=J('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function X9(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N();let m=G(e,"tool",8),E=G(e,"arrowId",8);const I=fn(m().toolId,Pt)??Cv,b="round",w="round",x=crypto.randomUUID(),T=`arrow-mask-${E()}-${x}`,M=`arrow-marker-${E()}-${x}`;S(()=>X(m()),()=>{O(n,m().shape??I)}),S(()=>d(n),()=>{var Z;O(r,((Z=d(n))==null?void 0:Z.r)??.4)}),S(()=>d(n),()=>{var Z;O(o,((Z=d(n))==null?void 0:Z.stroke)??"gray")}),S(()=>d(n),()=>{var Z;O(i,((Z=d(n))==null?void 0:Z.strokeWidth)??.1)}),S(()=>d(n),()=>{var Z;O(a,((Z=d(n))==null?void 0:Z.strokeDasharray)??0)}),S(()=>d(n),()=>{var Z;O(c,((Z=d(n))==null?void 0:Z.opacity)??.8)}),S(()=>(d(r),d(n)),()=>{var Z,ne,ge,ie;O(u,{shortenHead:d(r),shortenTail:((ne=(Z=d(n))==null?void 0:Z.linePathOptions)==null?void 0:ne.shortenTail)??.2,bezierRounding:((ie=(ge=d(n))==null?void 0:ge.linePathOptions)==null?void 0:ie.bezierRounding)??.4})}),S(()=>d(n),()=>{var Z;O(f,((Z=d(n))==null?void 0:Z.fill)??"none")}),S(()=>d(n),()=>{var Z;O(g,((Z=d(n))==null?void 0:Z.inset)??.2)}),S(()=>d(g),()=>{O(v,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:d(g)})}),S(()=>X(m()),()=>{O(h,El(m().cells))}),Ie(),fe();var $=V9(),W=oe($);A(W,"id",T);var F=U(Y(W));B(W);var K=U(W);Zp(K,{id:M,l:.2,get strokeWidth(){return d(i)},get stroke(){return d(o)}});var te=U(K);Br(te,{get cells(){return m().cells},get shape(){return d(v)}});var se=U(te);Qe(se,1,()=>m().lines,mt,(Z,ne)=>{var ge=we(),ie=oe(ge);{var ve=Ae=>{var Le=K9();Q(()=>A(Le,"d",El(d(ne),d(u)))),A(Le,"stroke-linejoin",b),A(Le,"stroke-linecap",w),A(Le,"marker-end",`url(#${M??""})`),Q(()=>{A(Le,"stroke",d(o)),A(Le,"stroke-width",d(i)),A(Le,"opacity",d(c)),A(Le,"stroke-dasharray",d(a))}),L(Ae,Le)};ee(ie,Ae=>{d(ne).length>1&&Ae(ve)})}L(Z,ge)}),Q(()=>{A(F,"stroke-width",2*d(r)-d(i)),A(F,"d",d(h))}),L(t,$),le()}var q9=J('<path class="arrow-line" fill="none"></path>'),Z9=J('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function Gu(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N(),a=N(),c=N();let u=G(e,"tool",8),f=G(e,"c_id",8),g=G(e,"shape",8);const v="round",h="round",m=crypto.randomUUID(),E=`arrow-mask-${f()}-${m}`,I=`arrow-marker-${f()}-${m}`;S(()=>X(g()),()=>{var W;O(n,((W=g())==null?void 0:W.r)??.4)}),S(()=>X(g()),()=>{var W;O(r,((W=g())==null?void 0:W.stroke)??"gray")}),S(()=>X(g()),()=>{var W;O(o,((W=g())==null?void 0:W.strokeWidth)??.1)}),S(()=>X(g()),()=>{var W;O(i,((W=g())==null?void 0:W.strokeDasharray)??0)}),S(()=>(d(n),X(g())),()=>{var W,F,K,te;O(a,{shortenHead:d(n),shortenTail:((F=(W=g())==null?void 0:W.linePathOptions)==null?void 0:F.shortenTail)??.2,bezierRounding:((te=(K=g())==null?void 0:K.linePathOptions)==null?void 0:te.bezierRounding)??.4})}),S(()=>X(u()),()=>{O(c,El(u().cells))}),Ie(),fe();var b=Z9(),w=oe(b);A(w,"id",E);var x=U(Y(w));B(w);var T=U(w);Zp(T,{id:I,l:.2,get strokeWidth(){return d(o)},get stroke(){return d(r)}});var M=U(T);A(M,"mask",`url(#${E??""})`);var $=U(M);Qe($,1,()=>u().lines,mt,(W,F)=>{var K=we(),te=oe(K);{var se=Z=>{var ne=q9();Q(()=>A(ne,"d",El(d(F),d(a)))),A(ne,"stroke-linejoin",v),A(ne,"stroke-linecap",h),A(ne,"marker-end",`url(#${I??""})`),Q(()=>{A(ne,"stroke",d(r)),A(ne,"stroke-width",d(o)),A(ne,"stroke-dasharray",d(i))}),L(Z,ne)};ee(te,Z=>{d(F).length>1&&Z(se)})}L(W,K)}),Q(()=>{A(x,"stroke-width",2*d(n)-d(o)),A(x,"d",d(c)),A(M,"d",d(c)),A(M,"stroke-width",2*d(n)+d(o)),A(M,"stroke",d(r))}),L(t,b),le()}var Q9=J("<!><!><!>",1),J9=J('<g class="arrow-tool"><!></g>');function e7(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N();let u=G(e,"tool",8),f=G(e,"c_id",8);const g=fn(u().toolId,Pt)??Cv;S(()=>X(u()),()=>{O(o,u().shape??g)}),S(()=>d(o),()=>{O(i,{...d(o),stroke:"var(--grid-background-color)",strokeWidth:d(o).strokeWidth?d(o).strokeWidth+.06:.06})}),S(()=>d(o),()=>{O(a,{...d(o),stroke:"var(--constraint-selected-color)",strokeWidth:d(o).strokeWidth?d(o).strokeWidth+.07:.07})}),S(()=>r(),()=>{var I;O(c,(I=r())==null?void 0:I.id)}),Ie(),fe();var v=J9(),h=Y(v);{var m=I=>{X9(I,{get tool(){return u()},get arrowId(){return f()}})},E=I=>{var b=Q9(),w=oe(b);{var x=W=>{Gu(W,{get tool(){return u()},get c_id(){return f()},get shape(){return d(i)}})};ee(w,W=>{W(x)})}var T=U(w);{var M=W=>{Gu(W,{get tool(){return u()},get c_id(){return f()},get shape(){return d(a)}})};ee(T,W=>{f()===d(c)&&W(M)})}var $=U(T);Gu($,{get tool(){return u()},get c_id(){return f()},get shape(){return d(o)}}),L(I,b)};ee(h,I=>{d(o).type===H.BULBOUS_ARROW?I(m):I(E,!1)})}B(v),L(t,v),le()}var t7=J('<g class="cage-tool"><!><!></g>');function n7(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N();let c=G(e,"tool",8),u=G(e,"c_id",8);const f=fn(c().toolId,Pt)??Td;S(()=>X(c()),()=>{O(o,c().shape??f)}),S(()=>r(),()=>{var E;O(i,(E=r())==null?void 0:E.id)}),S(()=>d(o),()=>{O(a,{...d(o),stroke:"var(--constraint-selected-color)",strokeWidth:d(o).strokeWidth?d(o).strokeWidth+.07:.07})}),Ie(),fe();var g=t7(),v=Y(g);{var h=E=>{Br(E,{get cells(){return c().cells},get shape(){return d(a)}})};ee(v,E=>{u()===d(i)&&E(h)})}var m=U(v);Xp(m,{get cells(){return c().cells},get shape(){return d(o)},get value(){return c().value}}),B(g),L(t,g),le()}var r7=J("<!><!>",1),o7=J('<g class="clone-tool"><!><!><!><!><!></g>');function i7(t,e){ae(e,!1);const n=Ve(),r=()=>me(Wt,"$currentConstraintStore",n),o=N(),i=N(),a=N(),c=N(),u=N(),f=N(),g=N(),v=N(),h=N(),m=N();let E=G(e,"tool",8),I=G(e,"c_id",8);const b=fn(E().toolId,Pt)??Fy,w=800,x=E().value;S(()=>r(),()=>{var se;O(o,(se=r())==null?void 0:se.id)}),S(()=>X(E()),()=>{O(i,E().shape??b)}),S(()=>d(i),()=>{O(a,{...d(i),stroke:"var(--constraint-selected-color)",strokeWidth:d(i).strokeWidth?d(i).strokeWidth+.07:.07})}),S(()=>d(i),()=>{O(c,d(i).inset??.15)}),S(()=>d(i),()=>{O(u,d(i).strokeWidth??.07)}),S(()=>d(i),()=>{O(f,d(i).fontColor??d(i).stroke??"black")}),S(()=>X(E()),()=>{O(g,E().cells[E().cells.length-1])}),S(()=>X(E()),()=>{O(v,E().cells2[E().cells2.length-1])}),S(()=>(d(g),d(c)),()=>{O(h,new De(d(g).c+1-d(c)-.05,d(g).r+1-d(c)-.05))}),S(()=>(d(v),d(c)),()=>{O(m,new De(d(v).c+1-d(c)-.05,d(v).r+1-d(c)-.05))}),Ie(),fe();var T=o7(),M=Y(T);{var $=se=>{var Z=r7(),ne=oe(Z);Br(ne,{get cells(){return E().cells},get shape(){return d(a)}});var ge=U(ne);Br(ge,{get cells(){return E().cells2},get shape(){return d(a)}}),L(se,Z)};ee(M,se=>{I()===d(o)&&se($)})}var W=U(M);Br(W,{get cells(){return E().cells},get shape(){return d(i)}});var F=U(W);Ns(F,{value:x,get x(){return d(h).x},get y(){return d(h).y},position:"BR",get fontColor(){return d(f)},fontWeight:w});var K=U(F);Br(K,{get cells(){return E().cells2},get shape(){return d(i)}});var te=U(K);Ns(te,{value:x,get x(){return d(m).x},get y(){return d(m).y},position:"BR",get fontColor(){return d(f)},fontWeight:w}),B(T),L(t,T),le()}var s7=J('<g class="element-group"></g>'),a7=J('<g class="element-group"></g>'),l7=J('<g class="element-group"></g>'),c7=J('<g class="element-group"></g>'),u7=J('<g class="element-group"></g>'),d7=J('<g class="element-group"></g>');function _7(t,e){ae(e,!1);const n=Ve(),r=()=>me(Q2,"$underlayElementsStore",n),o=N();S(()=>r(),()=>{O(o,r())}),Ie(),fe();var i=we(),a=oe(i);Qe(a,1,()=>d(o),mt,(c,u)=>{var f=we(),g=oe(f);{var v=m=>{var E=s7();Qe(E,5,()=>Object.entries(d(u).constraints),I=>I[0],(I,b)=>{G9(I,{get tool(){return d(b)[1]},get c_id(){return d(b)[0]}})}),B(E),Q(()=>A(E,"data-toolId",d(u).tool_id)),L(m,E)},h=m=>{var E=we(),I=oe(E);{var b=x=>{var T=a7();Qe(T,5,()=>Object.entries(d(u).constraints),M=>M[0],(M,$)=>{Y9(M,{get tool(){return d($)[1]},get c_id(){return d($)[0]}})}),B(T),Q(()=>A(T,"data-toolId",d(u).tool_id)),L(x,T)},w=x=>{var T=we(),M=oe(T);{var $=F=>{var K=l7();Qe(K,5,()=>Object.entries(d(u).constraints),te=>te[0],(te,se)=>{e7(te,{get tool(){return d(se)[1]},get c_id(){return d(se)[0]}})}),B(K),Q(()=>A(K,"data-toolId",d(u).tool_id)),L(F,K)},W=F=>{var K=we(),te=oe(K);{var se=ne=>{var ge=c7();Qe(ge,5,()=>Object.entries(d(u).constraints),ie=>ie[0],(ie,ve)=>{n7(ie,{get tool(){return d(ve)[1]},get c_id(){return d(ve)[0]}})}),B(ge),Q(()=>A(ge,"data-toolId",d(u).tool_id)),L(ne,ge)},Z=ne=>{var ge=we(),ie=oe(ge);{var ve=Le=>{var ye=u7();Qe(ye,5,()=>Object.entries(d(u).constraints),Ce=>Ce[0],(Ce,Xe)=>{i7(Ce,{get tool(){return d(Xe)[1]},get c_id(){return d(Xe)[0]}})}),B(ye),Q(()=>A(ye,"data-toolId",d(u).tool_id)),L(Le,ye)},Ae=Le=>{var ye=we(),Ce=oe(ye);{var Xe=et=>{var wt=d7();Qe(wt,5,()=>Object.entries(d(u).constraints),Tt=>Tt[0],(Tt,Kt)=>{Yp(Tt,{get tool(){return d(Kt)[1]},get c_id(){return d(Kt)[0]}})}),B(wt),Q(()=>A(wt,"data-toolId",d(u).tool_id)),L(et,wt)};ee(Ce,et=>{Hr(d(u).tool_id)&&et(Xe)},!0)}L(Le,ye)};ee(ie,Le=>{Ts(d(u).tool_id)?Le(ve):Le(Ae,!1)},!0)}L(ne,ge)};ee(te,ne=>{xi(d(u).tool_id)?ne(se):ne(Z,!1)},!0)}L(F,K)};ee(M,F=>{Ai(d(u).tool_id)?F($):F(W,!1)},!0)}L(x,T)};ee(I,x=>{Oi(d(u).tool_id)?x(b):x(w,!1)},!0)}L(m,E)};ee(g,m=>{Sd(d(u).tool_id)?m(v):m(h,!1)})}L(c,f)}),L(t,i),le()}var f7=J('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),g7=J('<g class="center-corner-or-edge-tool-preview"><!></g>');function h7(t,e){ae(e,!1);const n=N(),r=N(),o=N(),i=N();let a=G(e,"tool_preview",8);S(()=>X(a()),()=>{O(n,a().tool)}),S(()=>X(a()),()=>{O(r,a().mode)}),S(()=>X(a()),()=>{O(o,a().match_id)}),S(()=>d(n),()=>{O(i,d(n).cell)}),Ie(),fe();var c=we(),u=oe(c);{var f=v=>{var h=f7();A(h,"opacity",.5);var m=Y(h);Jl(m,{get cx(){return d(i).c},get cy(){return d(i).r},get c_id(){return d(o)}}),B(h),L(v,h)},g=v=>{var h=g7();A(h,"opacity",.5);var m=Y(h);zp(m,{get tool(){return d(n)}}),B(h),L(v,h)};ee(u,v=>{d(r)==="remove"&&d(o)?v(f):v(g,!1)})}L(t,c),le()}var v7=J('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function p7(t,e){ae(e,!1);const n=Ve(),r=()=>me(Cn,"$gridStore",n),o=()=>me(ct,"$localConstraintsStore",n),i=()=>me(Zt,"$toolStore",n),a=()=>me(Zn,"$cellsStore",n),c=()=>me(_p,"$fogLightsStore",n),u=()=>me(oT,"$cornerLineToolsStore",n),f=()=>me(tT,"$edgeToolsStore",n),g=()=>me(rT,"$cornerToolsStore",n),v=()=>me(nT,"$centerCornerOrEdgeToolsStore",n),h=()=>me(Cs,"$outsideDirectionToolPreviewStore",n),m=()=>me(rl,"$simpleCellToolPreviewStore",n),E=()=>me(ol,"$singleCellArrowPreviewStore",n),I=()=>me(il,"$singleCellMultiArrowPreviewStore",n),b=()=>me(sl,"$edgeToolPreviewStore",n),w=()=>me(al,"$cornerToolPreviewStore",n),x=()=>me(ll,"$centerCornerOrEdgeToolPreviewStore",n),T=N(),M=N(),$=N();let W=G(e,"svgRef",12,null);function F(){for(const[Ke,In]of o().entries()){if(!Hr(Ke))continue;if(Object.entries(In.constraints).some(([Zo,Cr])=>!Mt(Cr.cell,d(M))))return!0}return!1}function K(Ke,In){const qo=F(),Zo=Hr(In),Cr=qo||Zo?1:.2,Vi=-Cr,Xi=-Cr,qi=Ke.nCols+2*Cr,Zi=Ke.nRows+2*Cr;return{x:Vi,y:Xi,width:qi,height:Zi}}function te(Ke){return`${Ke.x} ${Ke.y} ${Ke.width} ${Ke.height}`}S(()=>r(),()=>{O(T,r())}),S(()=>d(T),()=>{O(M,{nRows:d(T).nRows,nCols:d(T).nCols})}),S(()=>(d(M),i()),()=>{O($,K(d(M),i()))}),Ie(),fe();var se=v7();Q(()=>A(se,"viewBox",te(d($))));var Z=Y(se);o9(Z);var ne=U(Z);nP(ne,{get boundingBox(){return d($)},get gridShape(){return d(M)}});var ge=U(ne);oP(ge,{get gridShape(){return d(M)}});var ie=U(ge);B4(ie,{get grid(){return r()}});var ve=U(ie);E4(ve,{get gridShape(){return d(M)}});var Ae=U(ve);Qe(Ae,5,a,mt,(Ke,In)=>{h6(Ke,{get cell(){return d(In)}})}),B(Ae);var Le=U(Ae);k6(Le,{});var ye=U(Le);l9(ye,{get element(){return c()}});var Ce=U(ye);_7(Ce,{});var Xe=U(Ce);I4(Xe,{});var et=U(Xe);eP(et,{});var wt=U(et);U4(wt,{});var Tt=U(wt);Za(Tt,{get elements(){return u()},g_name:"corner-line-tools-layer",Component:HP});var Kt=U(Tt);$4(Kt,{get boundingBox(){return d($)}});var Gt=U(Kt);p4(Gt,{});var Ft=U(Gt);Za(Ft,{get elements(){return f()},g_name:"edge-tools-layer",Component:qP});var tn=U(Ft);Za(tn,{get elements(){return g()},g_name:"corner-tools-layer",Component:AP});var Er=U(tn);Za(Er,{get elements(){return v()},g_name:"center-corner-edge-tools-layer",Component:SP});var ar=U(Er);S6(ar,{});var Co=U(ar);Qe(Co,5,a,mt,(Ke,In)=>{_6(Ke,{get cell(){return d(In)}})}),B(Co);var Rr=U(Co);lP(Rr,{});var Sr=U(Rr);j6(Sr,{});var $e=U(Sr);{var Oe=Ke=>{Yp(Ke,{get tool(){return h()}})};ee($e,Ke=>{Hr(i())&&h()&&Ke(Oe)})}var Ge=U($e);{var Fe=Ke=>{S9(Ke,{get tool_preview(){return m()}})};ee(Ge,Ke=>{xl(i())&&i()!==_.FOG_LIGHTS&&m()&&Ke(Fe)})}var Nt=U(Ge);{var na=Ke=>{b9(Ke,{get tool_preview(){return E()}})};ee(Nt,Ke=>{zo(i())&&E()&&Ke(na)})}var ra=U(Nt);{var bo=Ke=>{Kp(Ke,{get tool(){return I()}})};ee(ra,Ke=>{wi(i())&&I()&&Ke(bo)})}var bn=U(ra);{var Io=Ke=>{_9(Ke,{get tool_preview(){return b()}})};ee(bn,Ke=>{yi(i())&&b()&&Ke(Io)})}var wo=U(bn);{var tc=Ke=>{h9(Ke,{get tool_preview(){return w()}})};ee(wo,Ke=>{Ss(i())&&w()&&Ke(tc)})}var yo=U(wo);{var nc=Ke=>{h7(Ke,{get tool_preview(){return x()}})};ee(yo,Ke=>{Ds(i())&&x()&&Ke(nc)})}B(se),$o(se,Ke=>W(Ke),()=>W()),L(t,se),le()}function m7(t){return Qy(t)?(py(),!0):!1}function E7(t){return Jy(t)?(np(),!0):!1}function C7(t){return eO(t)?(rp(),!0):!1}function Uu(t){(m7(t)||E7(t)||C7(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var b7=ue('<div class="board-container svelte-m3kzqm" tabindex="-1"><!></div>');function I7(t,e){ae(e,!1);const n=Ve(),r=()=>me(gp,"$InputHandlerStore",n),o=()=>me(Ei,"$svgRefStore",n),i=N();let a=N(null);function c(h){return m=>{h&&d(i)!==null&&(document.activeElement===o()||document.activeElement===document.body||document.activeElement===d(a))&&h(m)}}S(()=>r(),()=>{O(i,r())}),Ie();var u=b7();ke("keydown",pu,function(...h){Uu==null||Uu.apply(this,h)});var f=eh(()=>{var h;return c((h=d(i))==null?void 0:h.keyDown)});ke("keydown",pu,function(...h){var m;(m=d(f))==null||m.apply(this,h)});var g=eh(()=>{var h;return c((h=d(i))==null?void 0:h.keyUp)});ke("keyup",pu,function(...h){var m;(m=d(g))==null||m.apply(this,h)});var v=Y(u);p7(v,{get svgRef(){return Jh(),o()},set svgRef(h){Fo(Ei,h)},$$legacy:!0}),B(u),$o(u,h=>O(a,h),()=>d(a)),ke("pointerdown",u,bu($n(h=>{var m;h.currentTarget.focus(),(m=d(i))==null||m.pointerDown(h)})),!0),ke("pointermove",u,bu($n(h=>{var m;h.currentTarget.focus(),(m=d(i))==null||m.pointerMove(h)})),!0),ke("pointerup",u,bu($n(h=>{var m;h.currentTarget.focus(),(m=d(i))==null||m.pointerUp(h)})),!0),L(t,u),le()}var w7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function y7(t){var e=w7();L(t,e)}var O7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function A7(t){var e=O7();L(t,e)}var x7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function L7(t){var e=x7();L(t,e)}var N7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function R7(t){var e=N7();L(t,e)}var S7=ue('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function D7(t,e){ae(e,!1);const n=Ve(),r=()=>me(Pi,"$commandHistoryStore",n),o=()=>me(id,"$selectOnStore",n),i=N(),a=N();function c(){np()}function u(){rp()}function f(){console.log("check")}function g(){Fo(id,!o())}S(()=>r(),()=>{O(i,r()._undoStack.length===0)}),S(()=>r(),()=>{O(a,r()._redoStack.length===0)}),Ie(),fe();var v=S7(),h=Y(v),m=Y(h);R7(m),B(h);var E=U(h,2),I=Y(E);A7(I),B(E);var b=U(E,2);b.disabled=!0;var w=Y(b);y7(w),B(b);var x=U(b,2),T=Y(x);L7(T),B(x),B(v),Q(()=>{h.disabled=d(i),E.disabled=d(a),A(x,"aria-checked",o()),vt(x,"active",o())}),ke("click",h,c),ke("click",E,u),ke("click",b,f),ke("click",x,g),L(t,v),le()}var T7=ue('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),k7=ue('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),M7=ue('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),G7=ue('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function U7(t,e){ae(e,!1);const n=Ve(),r=()=>me(vo,"$settingsStore",n),o=()=>me(pl,"$penColorStore",n),i=()=>me(gp,"$InputHandlerStore",n),a=N(),c=N(),u=[];let f=G(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],v=["A","B","C","D","E","F","G","H","I","O"];let h=N(!1);function m(F){return F?v:g}function E(F){return[_.DIGIT,_.CENTER_PM,_.CORNER_PM,_.GIVEN].includes(F)}function I(F){const K=F.currentTarget;if(!K)return;const te=K.getAttribute("aria-checked");O(h,te!=="true")}S(()=>r(),()=>{O(a,r().penToolActive)}),S(()=>r(),()=>{O(c,r().letterToolActive)}),Ie(),fe();var b=G7(),w=Y(b);{var x=F=>{var K=we(),te=oe(K);Qe(te,1,()=>g,mt,(se,Z)=>{var ne=T7(),ge=Y(ne);sn(ge);var ie;fo(2),B(ne),Q(()=>{A(ne,"data-value",d(Z)),vt(ne,"active",o()===d(Z)),ie!==(ie=d(Z))&&(ge.value=(ge.__value=d(Z))==null?"":d(Z))}),Ol(u,[],ge,()=>(d(Z),o()),ve=>Fo(pl,ve)),L(se,ne)}),L(F,K)},T=F=>{var K=we(),te=oe(K);Qe(te,1,()=>m(d(h)),mt,(se,Z)=>{var ne=k7(),ge=Y(ne),ie=Y(ge,!0);B(ge),fo(2),B(ne),Q(()=>{Cy(ne,d(Z)),at(ie,d(Z))}),ke("click",ne,function(...ve){var Ae;(Ae=i()&&i().padClick)==null||Ae.apply(this,ve)}),L(se,ne)}),L(F,K)};ee(w,F=>{f()===_.PEN_TOOL&&d(a)?F(x):F(T,!1)})}var M=U(w,2);{var $=F=>{var K=M7();Q(()=>{A(K,"aria-checked",d(h)),vt(K,"letter-checked",d(h)),vt(K,"num-checked",!d(h))}),ke("click",K,I),L(F,K)};ee(M,F=>{d(c)&&E(f())&&F($)})}var W=U(M,2);B(b),Q(()=>{vt(b,"digit",f()===_.DIGIT),vt(b,"center",f()===_.CENTER_PM),vt(b,"corner",f()===_.CORNER_PM),vt(b,"color",f()===_.HIGHLIGHTS),vt(b,"pen",f()===_.PEN_TOOL),vt(W,"letter-tool",d(c))}),ke("click",W,function(...F){var K;(K=i()&&i().padClick)==null||K.apply(this,F)}),L(t,b),le()}var F7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function $7(t){var e=F7();L(t,e)}var P7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function B7(t){var e=P7();L(t,e)}var H7=ue('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function gs(t,e){ae(e,!1);const n=[];let r=G(e,"selectedTool",12),o=G(e,"value",8),i=G(e,"title",8,void 0);function a(){sd(o())}fe();var c=H7(),u=Y(c);sn(u);var f,g=U(u,2);gt(g,e,"default",{}),B(c),Q(()=>{A(c,"title",i()),vt(c,"active",o()===r()),f!==(f=o())&&(u.value=(u.__value=o())==null?"":o())}),Ol(n,[],u,()=>(o(),r()),r),ke("change",u,a),L(t,c),le()}var W7=ue('<span aria-hidden="true">1</span>'),z7=ue('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),Y7=ue('<span aria-hidden="true" style="font-size: 50%">123</span>'),j7=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),K7=ue('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),V7=ue('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function X7(t,e){ae(e,!1);const n=Ve(),r=()=>me(vo,"$settingsStore",n);let o=G(e,"selectedTool",12);fe();var i=V7(),a=Y(i);gs(a,{get value(){return _.DIGIT},title:"Digit",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=W7();L(h,E)},$$slots:{default:!0},$$legacy:!0});var c=U(a,2);gs(c,{get value(){return _.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=z7();L(h,E)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);gs(u,{get value(){return _.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=Y7();L(h,E)},$$slots:{default:!0},$$legacy:!0});var f=U(u,2);gs(f,{get value(){return _.HIGHLIGHTS},title:"Highlights",get selectedTool(){return o()},set selectedTool(h){o(h)},children:(h,m)=>{var E=j7(),I=Y(E);$7(I),B(E),L(h,E)},$$slots:{default:!0},$$legacy:!0});var g=U(f,2);{var v=h=>{gs(h,{get value(){return _.PEN_TOOL},title:"Pen Tool",get selectedTool(){return o()},set selectedTool(m){o(m)},children:(m,E)=>{var I=K7(),b=Y(I);B7(b),B(I),L(m,I)},$$slots:{default:!0},$$legacy:!0})};ee(g,h=>{r().penToolActive&&h(v)})}B(i),L(t,i),le()}var q7=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function Z7(t){var e=q7();L(t,e)}var Q7=ue('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Js(t,e){let n=G(e,"title",8,void 0),r=G(e,"clickCb",8,void 0);var o=Q7(),i=Y(o),a=Y(i);gt(a,e,"default",{}),B(i),B(o),Q(()=>A(o,"title",n())),ke("click",o,function(...c){var u;(u=r())==null||u.apply(this,c)}),L(t,o)}var J7=ue('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),eB=ue('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function tB(t,e){ae(e,!1);let n=G(e,"showModal",12,!1);function r(){n(!1)}function o(){ip(),ml(),n(!1)}fe(),Zr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(i){n(i)},children:(i,a)=>{var c=eB(),u=U(Y(c),2);Hl(u,{children:(f,g)=>{var v=J7(),h=oe(v),m=U(h,2);ke("click",h,o),ke("click",m,r),L(f,v)},$$slots:{default:!0}}),B(c),L(i,c)},$$slots:{default:!0},$$legacy:!0}),le()}var nB=ue("<!> <!>",1);function rB(t){let e=N(!1);function n(){O(e,!0)}var r=nB(),o=oe(r);Js(o,{title:"Restart",clickCb:n,children:(a,c)=>{Z7(a)},$$slots:{default:!0}});var i=U(o,2);tB(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var oB=ue('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function hs(t,e){let n=G(e,"title",8);var r=oB(),o=Y(r),i=Y(o,!0);B(o);var a=U(o,2);gt(a,e,"default",{}),B(r),Q(()=>at(i,n())),L(t,r)}var iB=ue('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function mn(t,e){let n=G(e,"description",8);var r=iB(),o=Y(r),i=Y(o,!0);B(o);var a=U(o,2),c=Y(a);gt(c,e,"default",{}),B(a),B(r),Q(()=>at(i,n())),L(t,r)}var sB=ue('<div class="shortcut svelte-1cgt5u5"> </div>');function _n(t,e){let n=G(e,"shortcut",8);var r=sB(),o=Y(r,!0);B(r),Q(()=>at(o,n())),L(t,r)}var aB=ue("<p></p>"),lB=ue("<!> <!> <!> <!>",1),cB=ue("<!> or <!>",1),uB=ue("<!> <!> <!> <!> <!> <!> <!> <!>",1),dB=ue("<!> <!>",1),_B=ue('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function fB(t,e){let n=G(e,"showModal",12,!1);Zr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,o)=>{var i=_B(),a=Y(i);hs(a,{title:"Setting Instructions",children:(v,h)=>{var m=aB();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",L(v,m)},$$slots:{default:!0}});var c=U(a,2);hs(c,{title:"General",children:(v,h)=>{mn(v,{description:"Toggle Darkmode",children:(m,E)=>{_n(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=U(c,2);hs(u,{title:"Selection",children:(v,h)=>{var m=lB(),E=oe(m);mn(E,{description:"Select cells",children:(x,T)=>{_n(x,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=U(E,2);mn(I,{description:"Add to current selection",children:(x,T)=>{_n(x,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=U(I,2);mn(b,{description:"Remove from current selection",children:(x,T)=>{_n(x,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=U(b,2);mn(w,{description:"Add or remove from current selection",children:(x,T)=>{_n(x,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}});var f=U(u,2);hs(f,{title:"Change Tool",children:(v,h)=>{var m=uB(),E=oe(m);mn(E,{description:"Cycle Tool",children:(W,F)=>{_n(W,{shortcut:"Space"})},$$slots:{default:!0}});var I=U(E,2);mn(I,{description:"Change to Digit Tool",children:(W,F)=>{_n(W,{shortcut:"Z"})},$$slots:{default:!0}});var b=U(I,2);mn(b,{description:"Change to Corner Pencilmark Tool",children:(W,F)=>{_n(W,{shortcut:"X"})},$$slots:{default:!0}});var w=U(b,2);mn(w,{description:"Change to Center Pencilmark Tool",children:(W,F)=>{_n(W,{shortcut:"C"})},$$slots:{default:!0}});var x=U(w,2);mn(x,{description:"Change to Highlights Tool",children:(W,F)=>{_n(W,{shortcut:"V"})},$$slots:{default:!0}});var T=U(x,2);mn(T,{description:"Quickshift To Corner Pencilmark Tool",children:(W,F)=>{_n(W,{shortcut:"Shift"})},$$slots:{default:!0}});var M=U(T,2);mn(M,{description:"Quickshift To Center Pencilmark Tool",children:(W,F)=>{_n(W,{shortcut:"Ctrl"})},$$slots:{default:!0}});var $=U(M,2);mn($,{description:"Quickshift To Highlights Tool",children:(W,F)=>{var K=cB(),te=oe(K);_n(te,{shortcut:"Shift + Ctrl"});var se=U(te,2);_n(se,{shortcut:"Alt"}),L(W,K)},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}});var g=U(f,2);hs(g,{title:"Undo/Redo",children:(v,h)=>{var m=dB(),E=oe(m);mn(E,{description:"Undo",children:(b,w)=>{_n(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=U(E,2);mn(I,{description:"Redo",children:(b,w)=>{_n(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),L(v,m)},$$slots:{default:!0}}),B(i),L(r,i)},$$slots:{default:!0},$$legacy:!0})}var gB=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function hB(t){var e=gB();L(t,e)}var vB=ue("<!> <!>",1);function pB(t){let e=N(!1);function n(){O(e,!0)}var r=vB(),o=oe(r);Js(o,{title:"Info",clickCb:n,children:(a,c)=>{hB(a)},$$slots:{default:!0}});var i=U(o,2);fB(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var mB=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function EB(t){var e=mB();L(t,e)}var CB=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function bB(t){var e=CB();L(t,e)}function IB(t){let e=N(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function o(){document.exitFullscreen()}function i(){n()?o():r(),O(e,!d(e))}Js(t,{title:"Fullscreen",clickCb:i,children:(a,c)=>{var u=we(),f=oe(u);{var g=h=>{bB(h)},v=h=>{EB(h)};ee(f,h=>{d(e)?h(g):h(v,!1)})}L(a,u)},$$slots:{default:!0}})}function Qp(t,e){ae(e,!1);let n=G(e,"token",8),r=G(e,"renderers",8),o=G(e,"options",8);fe();var i=we(),a=oe(i);{var c=u=>{var f=we(),g=oe(f);nv(g,()=>r()[n().type],(v,h)=>{h(v,{get token(){return n()},get options(){return o()},get renderers(){return r()},children:(m,E)=>{var I=we(),b=oe(I);{var w=T=>{bl(T,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return o()}})},x=T=>{var M=qw();Q(()=>at(M,n().raw)),L(T,M)};ee(b,T=>{"tokens"in n()&&n().tokens?T(w):T(x,!1)})}L(m,I)},$$slots:{default:!0}})}),L(u,f)};ee(a,u=>{r()[n().type]&&u(c)})}L(t,i),le()}function bl(t,e){let n=G(e,"tokens",8),r=G(e,"renderers",8),o=G(e,"options",8);var i=we(),a=oe(i);{var c=u=>{var f=we(),g=oe(f);Qe(g,1,n,mt,(v,h)=>{Qp(v,{get token(){return d(h)},get renderers(){return r()},get options(){return o()}})}),L(u,f)};ee(a,u=>{n()&&u(c)})}L(t,i)}function Jp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function em(t){return t.startsWith("/")||t.startsWith("#")}function wB(t,e){return e.slug(t).replace(/--+/g,"-")}function yB(t,e){ae(e,!1);let n=G(e,"token",8),r=G(e,"options",8);const o=void 0;let i=N();S(()=>(X(n()),X(r())),()=>{O(i,wB(n().text,r().slugger))}),Ie(),fe();var a=we(),c=oe(a);return ov(c,()=>`h${n().depth}`,!1,(u,f)=>{let g;Q(()=>g=tv(u,g,{id:d(i)},void 0,u.namespaceURI===fd,u.nodeName.includes("-")));var v=we(),h=oe(v);gt(h,e,"default",{}),L(f,v)}),L(t,a),ot(e,"renderers",o),le({renderers:o})}var OB=ue("<blockquote><!></blockquote>");function AB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=OB(),a=Y(i);return gt(a,e,"default",{}),B(i),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}function xB(t,e){ae(e,!1);let n=G(e,"token",8),r=G(e,"options",8),o=G(e,"renderers",8),i=N();S(()=>X(n()),()=>{O(i,n().ordered?"ol":"ul")}),Ie(),fe();var a=we(),c=oe(a);ov(c,()=>d(i),!1,(u,f)=>{let g;Q(()=>g=tv(u,g,{start:n().start||1},void 0,u.namespaceURI===fd,u.nodeName.includes("-")));var v=we(),h=oe(v);Qe(h,1,()=>n().items,mt,(m,E)=>{var I=rt(()=>({...d(E)}));Qp(m,{get token(){return d(I)},get options(){return r()},get renderers(){return o()}})}),L(f,v)}),L(t,a),le()}var LB=ue("<li><!></li>");function NB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=LB(),a=Y(i);return gt(a,e,"default",{}),B(i),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var RB=ue("<br>");function SB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=RB();return L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var DB=ue("<pre><code> </code></pre>");function TB(t,e){ae(e,!1);let n=G(e,"token",8);const r=void 0,o=void 0;fe();var i=DB(),a=Y(i),c=Y(a,!0);return B(a),B(i),Q(()=>{wy(a,`lang-${n().lang}`),at(c,n().text)}),L(t,i),ot(e,"options",r),ot(e,"renderers",o),le({options:r,renderers:o})}var kB=ue("<code> </code>");function MB(t,e){ae(e,!1);let n=G(e,"token",8);const r=void 0,o=void 0;fe();var i=kB(),a=Y(i,!0);return Q(()=>at(a,n().raw.slice(1,n().raw.length-1))),B(i),L(t,i),ot(e,"options",r),ot(e,"renderers",o),le({options:r,renderers:o})}var GB=ue('<th scope="col"><!></th>'),UB=ue("<td><!></td>"),FB=ue("<tr></tr>"),$B=ue("<table><thead><tr></tr></thead><tbody></tbody></table>");function PB(t,e){ae(e,!1);let n=G(e,"token",8),r=G(e,"options",8),o=G(e,"renderers",8);fe();var i=$B(),a=Y(i),c=Y(a);Qe(c,5,()=>n().header,mt,(f,g)=>{var v=GB(),h=Y(v);bl(h,{get tokens(){return d(g).tokens},get options(){return r()},get renderers(){return o()}}),B(v),L(f,v)}),B(c),B(a);var u=U(a);Qe(u,5,()=>n().rows,mt,(f,g)=>{var v=FB();Qe(v,5,()=>d(g),mt,(h,m)=>{var E=UB(),I=Y(E);bl(I,{get tokens(){return d(m).tokens},get options(){return r()},get renderers(){return o()}}),B(E),L(h,E)}),B(v),L(f,v)}),B(u),B(i),L(t,i),le()}function BB(t,e){ae(e,!1);let n=G(e,"token",8);const r=void 0,o=void 0;fe();var i=we(),a=oe(i);return Iy(a,()=>n().text),L(t,i),ot(e,"options",r),ot(e,"renderers",o),le({options:r,renderers:o})}var HB=ue("<p><!></p>");function WB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=HB(),a=Y(i);return gt(a,e,"default",{}),B(i),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var zB=ue("<a><!></a>");function YB(t,e){ae(e,!1);let n=G(e,"token",8),r=G(e,"options",8);const o=void 0;fe();var i=zB();Q(()=>A(i,"href",em(n().href)?Jp(r().baseUrl,n().href):n().href));var a=Y(i);return gt(a,e,"default",{}),B(i),Q(()=>A(i,"title",n().title)),L(t,i),ot(e,"renderers",o),le({renderers:o})}function jB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=we(),a=oe(i);return gt(a,e,"default",{}),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var KB=ue("<dfn><!></dfn>");function VB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=KB(),a=Y(i);return gt(a,e,"default",{}),B(i),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var XB=ue("<del><!></del>");function qB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=XB(),a=Y(i);return gt(a,e,"default",{}),B(i),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var ZB=ue("<em><!></em>");function QB(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=ZB(),a=Y(i);return gt(a,e,"default",{}),B(i),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var JB=ue("<hr>");function eH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=JB();return L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var tH=ue("<strong><!></strong>");function nH(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=tH(),a=Y(i);return gt(a,e,"default",{}),B(i),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}var rH=ue('<img class="markdown-image svelte-z38cge">');function oH(t,e){ae(e,!1);let n=G(e,"token",8),r=G(e,"options",8);const o=void 0;fe();var i=rH();return Q(()=>A(i,"src",em(n().href)?Jp(r().baseUrl,n().href):n().href)),Q(()=>{A(i,"title",n().title),A(i,"alt",n().text)}),L(t,i),ot(e,"renderers",o),le({renderers:o})}function Hh(t,e){ae(e,!1);const n=void 0,r=void 0,o=void 0;var i=we(),a=oe(i);return gt(a,e,"default",{}),L(t,i),ot(e,"token",n),ot(e,"options",r),ot(e,"renderers",o),le({token:n,options:r,renderers:o})}const iH=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,sH=Object.hasOwnProperty;class aH{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let o=lH(e,n===!0);const i=o;for(;sH.call(r.occurrences,o);)r.occurrences[i]++,o=i+"-"+r.occurrences[i];return r.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function lH(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(iH,"").replace(/ /g,"-"))}function h_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Xo=h_();function tm(t){Xo=t}const nm=/[&<>"']/,cH=new RegExp(nm.source,"g"),rm=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,uH=new RegExp(rm.source,"g"),dH={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wh=t=>dH[t];function Gn(t,e){if(e){if(nm.test(t))return t.replace(cH,Wh)}else if(rm.test(t))return t.replace(uH,Wh);return t}const _H=/(^|[^\[])\^/g;function Ot(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(o,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(_H,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,e)};return r}function zh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Os={exec:()=>null};function Yh(t,e){const n=t.replace(/\|/g,(i,a,c)=>{let u=!1,f=a;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function vs(t,e,n){const r=t.length;if(r===0)return"";let o=0;for(;o<r&&t.charAt(r-o-1)===e;)o++;return t.slice(0,r-o)}function fH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function jh(t,e,n,r){const o=e.href,i=e.title?Gn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:o,title:i,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:o,title:i,text:Gn(a)}}function gH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(o=>{const i=o.match(/^\s+/);if(i===null)return o;const[a]=i;return a.length>=r.length?o.slice(r.length):o}).join(`
`)}class Il{constructor(e){Ee(this,"options");Ee(this,"rules");Ee(this,"lexer");this.options=e||Xo}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:vs(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],o=gH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:o}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const o=vs(r,"#");(this.options.pedantic||!o||/ $/.test(o))&&(r=o.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:vs(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=vs(n[0],`
`).split(`
`),o="",i="";const a=[];for(;r.length>0;){let c=!1;const u=[];let f;for(f=0;f<r.length;f++)if(/^ {0,3}>/.test(r[f]))u.push(r[f]),c=!0;else if(!c)u.push(r[f]);else break;r=r.slice(f);const g=u.join(`
`),v=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${g}`:g,i=i?`${i}
${v}`:v;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,a,!0),this.lexer.state.top=h,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,o=o.substring(0,o.length-E.raw.length)+b.raw,i=i.substring(0,i.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,o=o.substring(0,o.length-m.raw.length)+b.raw,i=i.substring(0,i.length-E.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:a,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const o=r.length>1,i={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,f="",g="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;f=n[0],e=e.substring(f.length);let v=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),h=e.split(`
`,1)[0],m=!v.trim(),E=0;if(this.options.pedantic?(E=2,g=v.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=v.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(h)&&(f+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),$=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const W=e.split(`
`,1)[0];let F;if(h=W,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),F=h):F=h.replace(/\t/g,"    "),T.test(h)||M.test(h)||$.test(h)||w.test(h)||x.test(h))break;if(F.search(/[^ ]/)>=E||!h.trim())g+=`
`+F.slice(E);else{if(m||v.replace(/\t/g,"    ").search(/[^ ]/)>=4||T.test(v)||M.test(v)||x.test(v))break;g+=`
`+h}!m&&!h.trim()&&(m=!0),f+=W+`
`,e=e.substring(W.length+1),v=F.slice(E)}}i.loose||(c?i.loose=!0:/\n[ \t]*\n[ \t]*$/.test(f)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(b=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:f,task:!!I,checked:b,loose:!1,text:g,tokens:[]}),i.raw+=f}i.items[i.items.length-1].raw=i.items[i.items.length-1].raw.trimEnd(),i.items[i.items.length-1].text=i.items[i.items.length-1].text.trimEnd(),i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){const f=i.items[u].tokens.filter(v=>v.type==="space"),g=f.length>0&&f.some(v=>/\n.*\n/.test(v.raw));i.loose=g}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),o=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:o,title:i}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Yh(n[1]),o=n[2].replace(/^\||\| *$/g,"").split("|"),i=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of i)a.rows.push(Yh(c,a.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[f]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Gn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=vs(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=fH(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let o=n[2],i="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);a&&(o=a[1],i=a[3])}else i=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(r)?o=o.slice(1):o=o.slice(1,-1)),jh(n,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const o=(r[2]||r[1]).replace(/\s+/g," "),i=n[o.toLowerCase()];if(!i){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return jh(r,i,r[0],this.lexer)}}emStrong(e,n,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...o[0]].length-1;let c,u,f=a,g=0;const v=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,n=n.slice(-1*e.length+a);(o=v.exec(n))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(u=[...c].length,o[3]||o[4]){f+=u;continue}else if((o[5]||o[6])&&a%3&&!((a+u)%3)){g+=u;continue}if(f-=u,f>0)continue;u=Math.min(u,u+f+g);const h=[...o[0]][0].length,m=e.slice(0,a+o.index+h+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const o=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return o&&i&&(r=r.substring(1,r.length-1)),r=Gn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,o;return n[2]==="@"?(r=Gn(n[1]),o="mailto:"+r):(r=Gn(n[1]),o=r),{type:"link",raw:n[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let o,i;if(n[2]==="@")o=Gn(n[0]),i="mailto:"+o;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);o=Gn(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:o,href:i,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Gn(n[0]),{type:"text",raw:n[0],text:r}}}}const hH=/^(?:[ \t]*(?:\n|$))+/,vH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,pH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ea=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,mH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,om=/(?:[*+-]|\d{1,9}[.)])/,im=Ot(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,om).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),v_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,EH=/^[^\n]+/,p_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,CH=Ot(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",p_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),bH=Ot(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,om).getRegex(),ec="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",m_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,IH=Ot("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",m_).replace("tag",ec).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),sm=Ot(v_).replace("hr",ea).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex(),wH=Ot(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",sm).getRegex(),E_={blockquote:wH,code:vH,def:CH,fences:pH,heading:mH,hr:ea,html:IH,lheading:im,list:bH,newline:hH,paragraph:sm,table:Os,text:EH},Kh=Ot("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ea).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex(),yH={...E_,table:Kh,paragraph:Ot(v_).replace("hr",ea).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Kh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ec).getRegex()},OH={...E_,html:Ot(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",m_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Os,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ot(v_).replace("hr",ea).replace("heading",` *#{1,6} *[^
]`).replace("lheading",im).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},am=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,AH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,lm=/^( {2,}|\\)\n(?!\s*$)/,xH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ta="\\p{P}\\p{S}",LH=Ot(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ta).getRegex(),NH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,RH=Ot(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ta).getRegex(),SH=Ot("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ta).getRegex(),DH=Ot("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ta).getRegex(),TH=Ot(/\\([punct])/,"gu").replace(/punct/g,ta).getRegex(),kH=Ot(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),MH=Ot(m_).replace("(?:-->|$)","-->").getRegex(),GH=Ot("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",MH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),wl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,UH=Ot(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",wl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),cm=Ot(/^!?\[(label)\]\[(ref)\]/).replace("label",wl).replace("ref",p_).getRegex(),um=Ot(/^!?\[(ref)\](?:\[\])?/).replace("ref",p_).getRegex(),FH=Ot("reflink|nolink(?!\\()","g").replace("reflink",cm).replace("nolink",um).getRegex(),C_={_backpedal:Os,anyPunctuation:TH,autolink:kH,blockSkip:NH,br:lm,code:AH,del:Os,emStrongLDelim:RH,emStrongRDelimAst:SH,emStrongRDelimUnd:DH,escape:am,link:UH,nolink:um,punctuation:LH,reflink:cm,reflinkSearch:FH,tag:GH,text:xH,url:Os},$H={...C_,link:Ot(/^!?\[(label)\]\((.*?)\)/).replace("label",wl).getRegex(),reflink:Ot(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",wl).getRegex()},dd={...C_,escape:Ot(am).replace("])","~|])").getRegex(),url:Ot(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},PH={...dd,br:Ot(lm).replace("{2,}","*").getRegex(),text:Ot(dd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Qa={normal:E_,gfm:yH,pedantic:OH},ps={normal:C_,gfm:dd,breaks:PH,pedantic:$H};class Fn{constructor(e){Ee(this,"tokens");Ee(this,"options");Ee(this,"state");Ee(this,"tokenizer");Ee(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Xo,this.options.tokenizer=this.options.tokenizer||new Il,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Qa.normal,inline:ps.normal};this.options.pedantic?(n.block=Qa.pedantic,n.inline=ps.pedantic):this.options.gfm&&(n.block=Qa.gfm,this.options.breaks?n.inline=ps.breaks:n.inline=ps.gfm),this.tokenizer.rules=n}static get rules(){return{block:Qa,inline:ps}}static lex(e,n){return new Fn(n).lex(e)}static lexInline(e,n){return new Fn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,i,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))){if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length),o.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(o);continue}if(o=this.tokenizer.fences(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.heading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.hr(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.blockquote(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.list(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.html(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+o.raw,i.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.lheading(e)){e=e.substring(o.raw.length),n.push(o);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let f;this.options.extensions.startBlock.forEach(g=>{f=g.call({lexer:this},u),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(o=this.tokenizer.paragraph(a))){i=n[n.length-1],r&&(i==null?void 0:i.type)==="paragraph"?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(o),r=a.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+o.raw,i.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(o);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,o,i,a=e,c,u,f;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(f=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),o=n[n.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,f)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const v=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},v),typeof h=="number"&&h>=0&&(g=Math.min(g,h))}),g<1/0&&g>=0&&(i=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(f=r.raw.slice(-1)),u=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class yl{constructor(e){Ee(this,"options");Ee(this,"parser");this.options=e||Xo}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const o=(a=(n||"").match(/^\S*/))==null?void 0:a[0],i=e.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+Gn(o)+'">'+(r?i:Gn(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:Gn(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const o=this.parser.parseInline(r),i=zh(e);if(i===null)return o;e=i;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+o+"</a>",a}image({href:e,title:n,text:r}){const o=zh(e);if(o===null)return r;e=o;let i=`<img src="${e}" alt="${r}"`;return n&&(i+=` title="${n}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class b_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Qn{constructor(e){Ee(this,"options");Ee(this,"renderer");Ee(this,"textRenderer");this.options=e||Xo,this.options.renderer=this.options.renderer||new yl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new b_}static parse(e,n){return new Qn(n).parse(e)}static parseInline(e,n){return new Qn(n).parseInline(e)}parse(e,n=!0){let r="";for(let o=0;o<e.length;o++){const i=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const c=i,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=i;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let o=0;o<e.length;o++){const i=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=c||"";continue}}const a=i;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class As{constructor(e){Ee(this,"options");Ee(this,"block");this.options=e||Xo}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Fn.lex:Fn.lexInline}provideParser(){return this.block?Qn.parse:Qn.parseInline}}Ee(As,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class BH{constructor(...e){Ee(this,"defaults",h_());Ee(this,"options",this.setOptions);Ee(this,"parse",this.parseMarkdown(!0));Ee(this,"parseInline",this.parseMarkdown(!1));Ee(this,"Parser",Qn);Ee(this,"Renderer",yl);Ee(this,"TextRenderer",b_);Ee(this,"Lexer",Fn);Ee(this,"Tokenizer",Il);Ee(this,"Hooks",As);this.use(...e)}walkTokens(e,n){var o,i;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const f of u)r=r.concat(this.walkTokens(f.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(i=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&i[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const f=c[u].flat(1/0);r=r.concat(this.walkTokens(f,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const a=n.renderers[i.name];a?n.renderers[i.name]=function(...c){let u=i.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[i.level];a?a.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),o.extensions=n),r.renderer){const i=this.defaults.renderer||new yl(this.defaults);for(const a in r.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],f=i[c];i[c]=(...g)=>{let v=u.apply(i,g);return v===!1&&(v=f.apply(i,g)),v||""}}o.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new Il(this.defaults);for(const a in r.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],f=i[c];i[c]=(...g)=>{let v=u.apply(i,g);return v===!1&&(v=f.apply(i,g)),v}}o.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new As;for(const a in r.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],f=i[c];As.passThroughHooks.has(a)?i[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(i,g)).then(h=>f.call(i,h));const v=u.call(i,g);return f.call(i,v)}:i[c]=(...g)=>{let v=u.apply(i,g);return v===!1&&(v=f.apply(i,g)),v}}o.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,a=r.walkTokens;o.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),i&&(u=u.concat(i.call(this,c))),u}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Fn.lex(e,n??this.defaults)}parser(e,n){return Qn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,o)=>{const i={...o},a={...this.defaults,...i},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&i.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Fn.lex:Fn.lexInline,f=a.hooks?a.hooks.provideParser():e?Qn.parse:Qn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(g=>u(g,a)).then(g=>a.hooks?a.hooks.processAllTokens(g):g).then(g=>a.walkTokens?Promise.all(this.walkTokens(g,a.walkTokens)).then(()=>g):g).then(g=>f(g,a)).then(g=>a.hooks?a.hooks.postprocess(g):g).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let g=u(r,a);a.hooks&&(g=a.hooks.processAllTokens(g)),a.walkTokens&&this.walkTokens(g,a.walkTokens);let v=f(g,a);return a.hooks&&(v=a.hooks.postprocess(v)),v}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+Gn(r.message+"",!0)+"</pre>";return n?Promise.resolve(o):o}if(n)return Promise.reject(r);throw r}}}const Wo=new BH;function yt(t,e){return Wo.parse(t,e)}yt.options=yt.setOptions=function(t){return Wo.setOptions(t),yt.defaults=Wo.defaults,tm(yt.defaults),yt};yt.getDefaults=h_;yt.defaults=Xo;yt.use=function(...t){return Wo.use(...t),yt.defaults=Wo.defaults,tm(yt.defaults),yt};yt.walkTokens=function(t,e){return Wo.walkTokens(t,e)};yt.parseInline=Wo.parseInline;yt.Parser=Qn;yt.parser=Qn.parse;yt.Renderer=yl;yt.TextRenderer=b_;yt.Lexer=Fn;yt.lexer=Fn.lex;yt.Tokenizer=Il;yt.Hooks=As;yt.parse=yt;yt.options;yt.setOptions;yt.use;yt.walkTokens;yt.parseInline;Qn.parse;Fn.lex;function HH(t){return new Fn().lex(t)}const WH=()=>({heading:yB,blockquote:AB,list:xB,list_item:NB,br:SB,code:TB,codespan:MB,table:PB,html:BB,paragraph:WB,link:YB,text:jB,def:VB,del:qB,em:QB,hr:eH,strong:nH,image:oH,space:Hh,escape:Hh}),zH=()=>({baseUrl:"/",slugger:new aH});function YH(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},rv(()=>{console.warn=t})}function dm(t,e){ae(e,!1),YH();let n=G(e,"source",8),r=G(e,"options",24,()=>({})),o=G(e,"renderers",24,()=>({})),i=N(),a=N(),c=N();S(()=>(X(n()),X(o()),X(r())),()=>{O(i,HH(n())),O(a,{...WH(),...o()}),O(c,{...zH(),...r()})}),Ie(),fe(),bl(t,{get tokens(){return d(i)},get renderers(){return d(a)},get options(){return d(c)}}),le()}var jH=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),KH=ue('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),VH=ue('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function XH(t,e){ae(e,!1);const n=Ve(),r=()=>me(Xr,"$puzzleMetaStore",n),o=N();let i=G(e,"showModal",12,!1);function a(u){return u?gl(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}S(()=>r(),()=>{O(o,r())}),Ie(),fe(),Zr(t,{title:"Rules",get showModal(){return i()},set showModal(u){i(u)},children:(u,f)=>{var g=VH(),v=Y(g),h=Y(v,!0);B(v);var m=U(v,2),E=Y(m);Q(()=>at(E,`by ${a(d(o).authors)??""}`)),B(m);var I=U(m,2),b=Y(I),w=rt(()=>c(d(o).ruleset));dm(b,{get source(){return d(w)}}),B(I);var x=U(I,2);{var T=W=>{var F=jH(),K=U(oe(F),2);Q(()=>A(K,"href",d(o).ctcUrl)),L(W,F)};ee(x,W=>{var F,K;(K=(F=d(o))==null?void 0:F.ctcUrl)!=null&&K.length&&W(T)})}var M=U(x,2);{var $=W=>{var F=KH(),K=U(oe(F),2);Q(()=>A(K,"href",d(o).ctcYoutubeUrl)),L(W,F)};ee(M,W=>{var F,K;(K=(F=d(o))==null?void 0:F.ctcYoutubeUrl)!=null&&K.length&&W($)})}B(g),Q(()=>{var W;return at(h,((W=d(o))==null?void 0:W.title)||"Puzzle")}),L(u,g)},$$slots:{default:!0},$$legacy:!0}),le()}var qH=J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function ZH(t){var e=qH();L(t,e)}var QH=ue("<!> <!>",1);function JH(t){let e=N(!1);function n(){O(e,!0)}var r=QH(),o=oe(r);Js(o,{title:"Rules",clickCb:n,children:(a,c)=>{ZH(a)},$$slots:{default:!0}});var i=U(o,2);XH(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var eW=ue("<!> <!>",1);function tW(t){let e=N(!1);function n(){O(e,!0)}var r=eW(),o=oe(r);Js(o,{title:"Settings",clickCb:n,children:(a,c)=>{hp(a)},$$slots:{default:!0}});var i=U(o,2);vp(i,{get showModal(){return d(e)},set showModal(a){O(e,a)},$$legacy:!0}),L(t,r)}var nW=ue('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!> <!></div>');function rW(t){var e=nW(),n=Y(e);tW(n);var r=U(n,2);JH(r);var o=U(r,2);IB(o);var i=U(o,2);pB(i);var a=U(i,2);rB(a),B(e),L(t,e)}var oW=ue('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function iW(t,e){ae(e,!1);const n=Ve(),r=()=>me(Ei,"$svgRefStore",n),o=()=>me(Xr,"$puzzleMetaStore",n),i=()=>me(Zt,"$toolStore",n),a=N(),c=N();function u(){r()&&r().focus()}function f(Z){return Z?gl(Z," & ",", "):"Anonymous"}function g(Z){return Z&&Z.length?Z:"Normal sudoku rules apply."}S(()=>o(),()=>{O(a,o().title??"Sudoku")}),S(()=>o(),()=>{O(c,f(o().authors))}),Ie(),fe();var v=oW(),h=Y(v),m=Y(h),E=Y(m),I=Y(E,!0);B(E);var b=U(E,2),w=Y(b);B(b),B(m);var x=U(m,2),T=Y(x),M=rt(()=>g(o().ruleset));dm(T,{get source(){return d(M)}}),B(x),B(h);var $=U(h,2),W=Y($);rW(W);var F=U(W,2),K=Y(F);D7(K,{});var te=U(K,2);U7(te,{get selectedTool(){return i()}});var se=U(te,2);X7(se,{get selectedTool(){return Jh(),i()},set selectedTool(Z){Fo(Zt,Z)},$$legacy:!0}),B(F),B($),B(v),Q(()=>{at(I,d(a)),at(w,`by ${d(c)??""}`)}),ke("click",$,$n(()=>{u()})),L(t,v),le()}var sW=ue('<div class="left-panel svelte-fwyvr2"><!></div>'),aW=ue('<div class="game svelte-fwyvr2"><!> <div class="center-panel svelte-fwyvr2"><!></div> <div class="right-panel svelte-fwyvr2"><!></div></div>');function wW(t,e){ae(e,!1);const n=Ve(),r=()=>me(Gl,"$gameModeStore",n),o=N();rv(async()=>{const h=window.location.origin,m=th===""?h:`${h}/${th}`;try{await K$({workerURL:`${m}/minizinc-worker.js`,wasmURL:`${m}/minizinc.wasm`,dataURL:`${m}/minizinc.data`})}catch(E){const I="Failed to initialize MiniZinc: "+E.message;console.log(I)}}),S(()=>r(),()=>{O(o,r())}),Ie(),fe();var i=aW(),a=Y(i);{var c=h=>{var m=sW(),E=Y(m);h4(E),B(m),L(h,m)};ee(a,h=>{d(o)===Ii.SETTING&&h(c)})}var u=U(a,2),f=Y(u);I7(f,{}),B(u);var g=U(u,2),v=Y(g);iW(v,{}),B(g),B(i),L(t,i),le()}export{wW as G,IW as b,kD as p,ml as r,t2 as s};
