var cI=Object.defineProperty;var uI=(t,e,n)=>e in t?cI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pe=(t,e,n)=>uI(t,typeof e!="symbol"?e+"":e,n);import{c as Xu,o as dI,p as _I,q as wd,s as Re,a as D,t as ce,d as Ee,u as ne,v as fI,m as gI}from"./disclose-version.X1mjziy_.js";import{i as he}from"./legacy.CL9GlO2d.js";import{l as av,h as ln,k as Rs,y as lv,v as xs,R as hI,V as vI,U as pI,g as Zu,i as cv,K as uv,a0 as mI,j as EI,u as uh,B as bI,aK as yd,z as CI,x as wI,a2 as Id,as as dv,A as dh,aL as yI,a3 as II,a8 as OI,m as xI,c as Y,r as P,s as F,t as J,p as ae,aM as L,aN as Ce,a as le,Z as _,aw as V,_ as I,$ as A,f as ee,aD as Vr,aO as Sr,aG as AI,al as gt,aP as Lu,ak as _h}from"./utils.FBOUsyea.js";import{s as We,a as ge,i as Q,b as Co,m as _v}from"./store.CwWqV19U.js";import{s as Ln,u as lr,r as SI,t as DI}from"./global.z6zTwcYi.js";import{e as Qe,i as mt}from"./each.CQzofs9j.js";import{i as LI,p as M,s as RI}from"./props.CDZpVoAy.js";import{w as Lt,g as Ne,d as qn}from"./index.XPG9yTa8.js";import{b as qr,c as Od}from"./this.CumUjykt.js";import{s as rt}from"./render.C06zU-KV.js";import{r as cn,s as S,a as Qu,b as NI,c as kI,d as fv}from"./attributes.nocA7ieE.js";import{o as xd,a as TI}from"./index-client.Dk2x2RJG.js";import{b as fh}from"./paths.C7691CZC.js";function MI(t,e,n,r,i){var o=t,s="",l;av(()=>{if(s===(s=e()??"")){ln&&Rs();return}l!==void 0&&(uv(l),l=void 0),s!==""&&(l=lv(()=>{if(ln){xs.data;for(var u=Rs(),d=u;u!==null&&(u.nodeType!==8||u.data!=="");)d=u,u=hI(u);if(u===null)throw vI(),pI;Xu(xs,d),o=Zu(u);return}var f=s+"",g=dI(f);Xu(cv(g),g.lastChild),o.before(g)}))})}function Ot(t,e,n,r,i){var l;ln&&Rs();var o=(l=e.$$slots)==null?void 0:l[n],s=!1;o===!0&&(o=e[n==="default"?"children":n],s=!0),o===void 0||o(t,s?()=>r:r)}function gv(t,e,n,r,i,o){let s=ln;ln&&Rs();var l,u,d=null;ln&&xs.nodeType===1&&(d=xs,Rs());var f=ln?xs:t,g;av(()=>{const h=e()||null;var m=h==="svg"?yd:null;h!==l&&(g&&(h===null?CI(g,()=>{g=null,u=null}):h===u?wI(g):uv(g)),h&&h!==u&&(g=lv(()=>{if(d=ln?d:m?document.createElementNS(m,h):document.createElement(h),Xu(d,d),r){ln&&_I(h)&&d.append(document.createComment(""));var E=ln?cv(d):d.appendChild(EI());ln&&(E===null?uh(!1):Zu(E)),r(d,E)}bI.nodes_end=d,f.before(d)})),l=h,l&&(u=l))},mI),s&&(uh(!0),Zu(f))}function ks(t,e,n){var r=t.__className,i=vv(e);ln&&t.getAttribute("class")===i?t.__className=i:(r!==i||ln&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function hv(t,e,n){var r=t.__className,i=vv(e);ln&&t.className===i?t.__className=i:(r!==i||ln&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function vv(t,e){return(t??"")+""}function Et(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function cr(t,e,n=e){var r=yI();wd(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=Nu(t)?ku(o):o,n(o),r&&o!==(o=e())){var s=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(l,t.value.length))}}),(ln&&t.defaultValue!==t.value||II(e)==null&&t.value)&&n(Nu(t)?ku(t.value):t.value),Id(()=>{var i=e();Nu(t)&&i===ku(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Ru=new Set;function Ad(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",s=t;let l=!1;if(e!==null)for(var u of e)s=s[u]??(s[u]=[]);s.push(n),wd(n,"change",()=>{var d=n.__value;o&&(d=gh(s,d,n.checked)),i(d)},()=>i(o?[]:null)),Id(()=>{var d=r();if(ln&&n.defaultChecked!==n.checked){l=!0;return}o?(d=d||[],n.checked=d.includes(n.__value)):n.checked=LI(n.__value,d)}),dv(()=>{var d=s.indexOf(n);d!==-1&&s.splice(d,1)}),Ru.has(s)||(Ru.add(s),dh(()=>{s.sort((d,f)=>d.compareDocumentPosition(f)===4?-1:1),Ru.delete(s)})),dh(()=>{if(l){var d;if(o)d=gh(s,d,n.checked);else{var f=s.find(g=>g.checked);d=f==null?void 0:f.__value}i(d)}})}function gh(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Nu(t){var e=t.type;return e==="number"||e==="range"}function ku(t){return t===""?null:+t}function $I(t,e,n=e){wd(t,"change",()=>{n(t.files)}),Id(()=>{t.files=e()})}function st(t,e,n){var r=OI(t,e);r&&r.set&&(t[e]=n,dv(()=>{t[e]=null}))}function UI(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Cn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function _o(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function GI(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=xI(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var Do=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Do||{}),Sd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(Sd||{}),pv=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.HEXED_SUDOKU="Hexed Sudoku",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.CONSECUTIVE_CLOSE_NEIGHBORS="Consecutive Close Neighbors",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NOT_ALL_ODD_IN_A_2X2_SQUARE="Not All Odd In A 2x2 Square",t))(pv||{}),Dd=(t=>(t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.PARITY_MIRROR_POSITIVE_DIAGONAL="Parity Mirror Positive Diagonal",t.PARITY_MIRROR_NEGATIVE_DIAGONAL="Parity Mirror Negative Diagonal",t))(Dd||{}),mv=(t=>(t.NEGATIVE_CONSTRAINT="Negative Constraint",t.NEGATIVE_V_CONSTRAINT="Negative V Constraint",t.NEGATIVE_X_CONSTRAINT="Negative X Constraint",t.NEGATIVE_XV_CONSTRAINT="Negative XV Constraint",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_CAGE_TOTALS_ARE_DIFFERENT="All Cage Totals Are Different",t.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE="Adjacent Cage Totals Are Consecutive",t.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT="Adjacent Cage Totals Are Different",t.DISTINCT_RENBANS="Distinct Renbans",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_SQUARES_GIVEN="All Squares Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.ALL_GALAXY_CENTERS_GIVEN="All Galaxy Centers Given",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(mv||{}),Ev=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.INDEXER_CELLS="Indexer Cells",t))(Ev||{}),bv=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION="Chaos Construction 2x2 Does Not Belong To The Same Region",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SHADED_BOUNDARIES="Shaded Boundaries",t.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN="Shaded Boundaries Adjacent Cell Sum Is Even",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.NEXUS="Nexus",t.STAR_BATTLE="Star Battle",t.ONE_STAR_PER_GALAXY="One Star Per Galaxy",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.FILLOMINO="Fillomino",t.LITS="LITS",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.BUILD_YOUR_OWN_KILLER_CAGES="Build Your Own Killer Cages",t))(bv||{}),Cv=(t=>(t.PENTOMINO_TILLING="Pentomino Tilling",t.PENTOMINO_TILLING_NO_EMPTY_CELLS="Pentomino Tilling No Empty Cells",t))(Cv||{}),wv=(t=>(t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t))(wv||{}),yv=(t=>(t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t))(yv||{}),Iv=(t=>(t.NURIMISAKI="Nurimisaki",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t))(Iv||{}),Ov=(t=>(t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION="Ying Yang Identical Digits Diagonally Belong To Same The Region",t.YIN_YANG_CHAOS_CONSTRUCTION_FULLY_SHADED_OR_FULLY_UNSHADED="Yin Yang Chaos Construction Fully Shaded Or Fully Unshaded",t))(Ov||{}),xv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(xv||{}),Av=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY="Digits Do Not Repeat In A Galaxy",t))(Av||{}),Sv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t.CAVE_WALL_SUGURU="Cave Wall Suguru",t.CAVE_CELLS_FILLOMINO="Cave Cells Fillomino",t))(Sv||{}),Dv=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Dv||{}),Lv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t.LOOP_PARITY="Loop Parity",t))(Lv||{}),Ol=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_SHADED_CELL="Yin Yang Shaded Cell",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.YIN_YANG_LABELED_SHADE_CELL="Yin Yang Labeled Shade Cell",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE="Cave Shaded Region Size Unshaded Seen Orthogonally Clue",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT="Chaos Construction Neighbour Cells Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.BYOK_CAGE_SIZE="BYOK Cage Size",t.BYOK_NOT_CAGE_CELL="BYOK Not Cage Cell",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Ol||{}),Ld=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t.INTERNAL_LOOP_SKYSCRAPERS="Internal Loop Skyscrapers",t.SKYSCRAPERS_ARROW="Skyscrapers Arrow",t))(Ld||{}),Rd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Cells Not In The Same Region Arrows",t.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS="Chaos Construction Count Seen Cells In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_COMBINED_SHADED_CELLS_COUNT_EXCEPT_ITSELF="Yin Yang Combined Shaded Cells Count Except Itself",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS="Shaded Boundaries Combined Count Arrows",t))(Rd||{}),Nd=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.COMBINED_EDGE_CONSTRAINT="Combined Edge Constraint",t))(Nd||{}),kd=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Chaos Construction Corner Cells Belong To Exactly Three Regions",t.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_SAME_REGION="Chaos Construction Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t.DIFFERENT_CORNER_DIAGONAL_SUMS="Different Corner Diagonal Sums",t))(kd||{}),Td=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE="Yin Yang Californian Mountain Snake",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Td||{}),Md=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t.LOOP_POINTER_ARROW="Loop Pointer Arrow",t))(Md||{}),$d=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.VAULTED_KILLER_CAGE="Vaulted Killer Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))($d||{}),Ud=(t=>(t.CLONE_REGION="Clone Region",t))(Ud||{}),Gd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.CHAOS_CONSTRUCTION_X_SUM_REGION_BORDERS="Chaos Construction X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.CHAOS_CONSTRUCTION_X_INDEX_REGION="Chaos Construction X-Index Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(Gd||{}),Fd=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Fd||{}),zd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(zd||{}),Pd=(t=>(t.MAZE_WALL="Maze Wall",t))(Pd||{}),Bd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Bd||{}),Rv=(t=>(t.VARIABLE_CONSTRAINT="Variable Constraint",t))(Rv||{}),Hd=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Hd||{}),Nv=(t=>(t.FOG_LIGHTS="Fog Lights",t.CUSTOM_FOG_CLEARING="Custom Fog Clearing",t.FOG_CLEARING_ITSELF="Fog Clearing Itself",t.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS="Fog Clearing Orthogonal Neighbours",t.FOG_CLEARING_DIAGONAL_NEIGHBOURS="Fog Clearing Diagonal Neighbours",t.FOG_CLEARING_CONTAINING_ROW="Fog Clearing Containing Row",t.FOG_CLEARING_CONTAINING_COLUMN="Fog Clearing Containing Column",t.FOG_CLEARING_KNIGHTS_MOVE="Fog Clearing Knights Move",t))(Nv||{}),kv=(t=>(t.PEN_TOOL="Pen Tool",t))(kv||{});const FI={...bv,...Sv,...Dv,...Av,...Lv,...xv,...Ov,...Iv,...yv,...wv,...Cv},Tv={...mv,...Dd,...pv,...FI,...Ev},Mv={...Ol,...Ld,...Rd,...Nd,...kd,...Td,...Md,...$d,...Ud,...Gd,...Fd,...zd,...Pd,...Bd,...Rv,...Nv},v={...Sd,...Tv,...Mv,...Hd,...kv};var z=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.GLOBAL_NURIMISAKI_CONSTRAINTS="Global Nurimisaki Constraints",t.GLOBAL_NURIKABE_CONSTRAINTS="Global Nurikabe Constraints",t.GLOBAL_YIN_YANG_CONSTRAINTS="Global Yin Yang Constraints",t.GLOBAL_SHIKAKU_CONSTRAINTS="Global Shikaku Constraints",t.DIAGONAL_CONSTRAINTS="Diagonal Constraints",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.OTHER_CONSTRAINTS="Other Constraints",t.FOG_TOOL="Fog Tool",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(z||{});function zI(t){return Object.values(Dd).includes(t)}function PI(t){return Object.values(Tv).includes(t)}function $v(t){return Object.values(Mv).includes(t)}function BI(t){return Object.values(Hd).includes(t)}function HI(t){return $v(t)||BI(t)||PI(t)}function xl(t){return Object.values(Ol).includes(t)||t===v.COSMETIC_CELL_CENTER_SHAPE||t===v.FOG_LIGHTS}function Hi(t){return Object.values(Ld).includes(t)||t===v.COSMETIC_CELL_ARROW}function Lo(t){return Object.values(Rd).includes(t)||t===v.COSMETIC_CELL_MULTI_ARROW}function Wd(t){return xl(t)||Hi(t)||Lo(t)}function Ro(t){return Object.values(Nd).includes(t)||t===v.COSMETIC_EDGE}function Ts(t){return Object.values(kd).includes(t)||t===v.COSMETIC_CORNER}function No(t){return Object.values(Td).includes(t)||t===v.COSMETIC_LINE||t===v.COSMETIC_LINE_WITH_POLYGON_ENDS||t===v.COSMETIC_LINE_WITH_CIRCLE_ENDS}function ko(t){return Object.values(Md).includes(t)||t===v.COSMETIC_ARROW}function To(t){return Object.values($d).includes(t)||t===v.COSMETIC_CAGE}function Ms(t){return Object.values(zd).includes(t)}function Uv(t){return Object.values(Pd).includes(t)}function $s(t){return Object.values(Ud).includes(t)}function Zr(t){const e=Object.values(Gd),n=Object.values(Fd);return e.includes(t)||n.includes(t)||t===v.COSMETIC_OUTSIDE_DIRECTION}function Yd(t){return Object.values(Bd).includes(t)}function jd(t){return Object.values(Sd).includes(t)}function WI(t){return Zr(t)||Wd(t)||No(t)||ko(t)||To(t)||$s(t)}const YI=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint","Valued Global Constraint","Other Constraints"],jI=["Simple Global Constraint","Diagonal Constraints","Value Modifier Constraint","Undetermined Regions Constraint",...YI,"Fog Tool","Cosmetic Tool"];function KI(t){for(const e of Object.values(v))if(e===t)return e}function VI(t,e){return Object.values(e).includes(t)}var W=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(W||{});function En(t,e,n){n!==void 0&&(t[e]=n)}function qI(t){var e,n,r,i,o,s,l,u,d,f,g,h,m,E,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(s=t.angle)!=null&&s.editable||(l=t.fill)!=null&&l.editable||(u=t.stroke)!=null&&u.editable||(d=t.strokeWidth)!=null&&d.editable||(f=t.strokeDasharray)!=null&&f.editable||(g=t.strokeDashoffset)!=null&&g.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(C=t.displayValue)!=null&&C.editable)}function Ju(t){var n,r,i,o,s,l,u,d,f,g,h,m,E,C,w,y,x,N,T,G,K,U,H;const e={type:t.type};return En(e,"n",(n=t.n)==null?void 0:n.value),En(e,"r",(r=t.r)==null?void 0:r.value),En(e,"height",(i=t.height)==null?void 0:i.value),En(e,"width",(o=t.width)==null?void 0:o.value),En(e,"inset",(s=t.inset)==null?void 0:s.value),En(e,"angle",(l=t.angle)==null?void 0:l.value),En(e,"fill",(u=t.fill)==null?void 0:u.value),En(e,"stroke",(d=t.stroke)==null?void 0:d.value),En(e,"strokeWidth",(f=t.strokeWidth)==null?void 0:f.value),En(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),En(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),En(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),En(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),En(e,"opacity",(C=t.opacity)==null?void 0:C.value),En(e,"displayValue",(w=t.displayValue)==null?void 0:w.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(x=(y=t.linePathOptions)==null?void 0:y.shortenHead)==null?void 0:x.value,shortenTail:(T=(N=t.linePathOptions)==null?void 0:N.shortenTail)==null?void 0:T.value,bezierRounding:(K=(G=t.linePathOptions)==null?void 0:G.bezierRounding)==null?void 0:K.value,closeLoops:(H=(U=t.linePathOptions)==null?void 0:U.closeLoops)==null?void 0:H.value}),e}function XI(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const hh={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},vh={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},ph={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},ll={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ed={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Us={type:"Line",strokeWidth:.125,stroke:"gray"},Kd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Gv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},ZI={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},mh={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"},Eh={strokeWidth:.02,stroke:"black"},Al=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,Xn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,Wi=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,QI=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,en=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Mo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Vd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Fe=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,JI=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,eO=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,tO=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,gi=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,nO=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,rO=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,iO=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function oO(t){return Hi(t)?JI():Lo(t)?eO():t===v.XV?rO():Ro(t)?tO():To(t)?Al():ko(t)?Wi():Zr(t)?QI():No(t)?Fe():$s(t)?iO():""}var fe=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.VALUE_TOOL=13]="VALUE_TOOL",t[t.PEN=14]="PEN",t))(fe||{}),Dt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Dt||{}),Pn=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Pn||{}),Me=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(Me||{}),Dn=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(Dn||{}),qd=(t=>(t.CREATE="Create",t))(qd||{});function sO(t){if(xl(t)||Hi(t)||Lo(t)||No(t)||Ro(t)||Ts(t)||To(t)||Zr(t)||Ms(t))return Me;if(ko(t))return Pn;if($s(t))return Dn;if(Yd(t)||t===v.VARIABLE_CONSTRAINT)return qd}function aO(t){if(xl(t)||Hi(t)||Lo(t)||No(t)||Ro(t)||Ts(t)||To(t)||Zr(t)||Ms(t)||ko(t)||$s(t))return"Dynamic"}var Te=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Te||{});function Fv(t){if(!(t in Te))throw Error(" not a key in DIRECTION");return Te[t]}const lO={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function cO(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function uO(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),s=parseInt(r[3],10),l=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[s,l==="]"?"<=":"<"]}}return null}function dO(t){t=t.trim();const e=/^(>|>=|<|<=)\s*([a-zA-Z][a-zA-Z0-9]*)$/,n=/^([[\]])([a-zA-Z][a-zA-Z0-9]*),\s*([a-zA-Z][a-zA-Z0-9]*)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=r[2];if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=r[2],s=r[3],l=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[s,l==="]"?"<=":"<"]}}return null}function _O(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function fO(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function zv(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function gO(t,e){const n=_O(t);if(n)return{type:"number",parsed:parseInt(n)};const r=cO(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=fO(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=uO(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const s=dO(t);if(e.allow_interval&&s)return{type:"variable_interval",parsed:s};const l=zv(t);return e.allow_var_list&&l?{type:"var_list",parsed:l}:null}var $=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.CAVE_CELLS_FILLOMINO_REGIONS="cave_cells_fillomino_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t.BYOKC_GRID="byokc_grid",t.SHADED_BOUNDARIES_REGIONS="shaded_boundaries_regions",t.SHADED_BOUNDARIES_VERTICAL="shaded_boundaries_vertical",t.SHADED_BOUNDARIES_HORIZONTAL="shaded_boundaries_horizontal",t))($||{});function Ve(t,e){return`${e}[${t.r},${t.c}]`}function $o(t,e){return t.map(r=>Ve(r,e))}function ve(t,e){return"["+$o(t,e).join(",")+"]"}function Se(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function Ct(t){return t.map(n=>Se(n))}function mo(t){return`constraint alldifferent([${t.join(",")}]);
`}function Zt(t,e){return t&&(t=`
% ${e}
`+t),t}function Sl(t,e){const n=[Te.N,Te.S,Te.W,Te.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function Xd(t,e,n=void 0){n||(n=[Te.N,Te.S,Te.W,Te.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),s="["+Ct(o).join(",")+"]";r.push(s)}return r}class hO{constructor(e){pe(this,"model_str","");pe(this,"used_vars");pe(this,"puzzle");pe(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=lO){let i="";if(e.length===0&&n.length>0){const l=n;return this.hasVariable(l)||(i+=`var int: ${l};
`,this.addVariable(l)),[i,l]}const o=gO(e,r);if(!o)return null;if(o.type==="number"){const l=o.parsed;return["",String(l)]}if(o.type==="variable"){const l=o.parsed;return this.hasVariable(l)||(i+=`var int: ${l};
`,this.addVariable(l)),[i,l]}if(!n)return null;if(this.hasVariable(n)||(i+=`var int: ${n};
`,this.addVariable(n)),o.type==="interval"){const l=o.parsed;if(l.lower_bound){const u=l.lower_bound[0],d=l.lower_bound[1];i+=`constraint ${n} ${d} ${u};
`}if(l.upper_bound){const u=l.upper_bound[0],d=l.upper_bound[1];i+=`constraint ${n} ${d} ${u};
`}}if(o.type==="variable_interval"){const l=o.parsed;if(l.lower_bound){const u=l.lower_bound[0],d=l.lower_bound[1];this.hasVariable(u)||(i+=`var int: ${u};
`,this.addVariable(u)),i+=`constraint ${n} ${d} ${u};
`}if(l.upper_bound){const u=l.upper_bound[0],d=l.upper_bound[1];this.hasVariable(u)||(i+=`var int: ${u};
`,this.addVariable(u)),i+=`constraint ${n} ${d} ${u};
`}}if(o.type==="number_list"){const u="{"+o.parsed.join(",")+"}";i+=`constraint member(${u}, ${n});
`}if(o.type==="var_list"){const l=o.parsed,u="["+l.join(",")+"]";for(const d of l){const f=parseInt(d);Number.isNaN(f)&&!this.hasVariable(d)&&(i+=`var int: ${d};
`,this.addVariable(d))}i+=`constraint member(${u}, ${n});
`}return[i,n]}}function ze(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const[s,l]of Object.entries(i)){const u=n(t,o,s,l);r+=u}return r}function vO(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,s=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let l=null,u=0,d=0,f=0;for(let y=0;y<e.length;y++){const x=e[y].trim(),N=x.match(r),T=x.match(i),G=x.match(o),K=x.match(s);if(!l&&(N||T||G||K)){l={name:(N||T||G||K)[1],startLine:y,content:[e[y]],type:N?"function":T?"predicate":G?"test":"variable"},u=(x.match(/\(/g)||[]).length-(x.match(/\)/g)||[]).length,d=(x.match(/\{/g)||[]).length-(x.match(/\}/g)||[]).length,f=(x.match(/\[/g)||[]).length-(x.match(/\]/g)||[]).length;continue}if(l&&(l.content.push(e[y]),u+=(x.match(/\(/g)||[]).length-(x.match(/\)/g)||[]).length,d+=(x.match(/\{/g)||[]).length-(x.match(/\}/g)||[]).length,f+=(x.match(/\[/g)||[]).length-(x.match(/\]/g)||[]).length,u===0&&d===0&&f===0&&x.endsWith(";"))){n[l.name]={...l,endLine:y};let U=l.startLine;for(;U>0&&e[U-1].trim().startsWith("%");)U-=1;n[l.name].startLine=U,l=null}}function g(y){const x=[],N=y.match(r),T=y.match(i),G=y.match(o);for(const K of Object.keys(n)){const U=n[K].type;if(U==="function"||U==="test"||U==="predicate"){if(N||T||G)continue;new RegExp(`\\b${K}\\s*\\(`,"g").test(y)&&x.push(K)}else if(U==="variable"){const H=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${K}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(y.match(H))continue;new RegExp(`\\b${K}\\b`,"g").test(y)&&x.push(K)}}return x}const h=new Set;for(const y of e)g(y).forEach(N=>h.add(N));const m=Object.values(n).filter(y=>!h.has(y.name)).map(y=>({start:y.startLine,end:y.endLine}));m.sort((y,x)=>x.start-y.start);const E=[...e];for(const y of m)E.splice(y.start,y.end-y.start+1);const C=[];let w=!1;for(const y of E)y.trim()===""?w||(C.push(y),w=!0):(C.push(y),w=!1);return C.join(`
`)}function bh(t){let e=t,n=e.length;for(;e=vO(e),e.length!=n;)n=e.length;return e}function Pv(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function pO(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let l=0;l<e.nRows;l++){const u=[];for(let d=0;d<e.nCols;d++){const f=e.getCell(l,d);!f||f.region===null?u.push(r-1):u.push(f.region)}o.push(u)}const s=Pv(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${s});
`)}}function Dl(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Ft(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function*Qr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Uo(t,e){return[...Object.values(t)].find(i=>{const o=i.cell;if(e.c===o.c&&e.r===o.r)return i})}function Zd(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function Qd(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function Ll(t,e,n,r){const i=t.grid;let o="";if(!!!t.elementsDict.get(v.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const d of u){const f=i.getRegion(d),g=ve(f,r);o+=`constraint count_eq(${g}, ${n}, ${e});
`}}return o}function Eo(t,e,n,r){let i=Zd(e,n,r);return i+=Qd(e,n,r),i+=Ll(t,e,n,r),i}function Je(t,e){return t.r===e.r&&t.c===e.c}function Bv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function mO(t,e){return{r:t.r*e,c:t.c*e}}function EO(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Gs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Je(t,e)}function bO(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function cl(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Gt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Rl(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function CO(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function ul(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function wO(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const yO=new Map([[6,Te.N],[2,Te.S],[0,Te.E],[4,Te.W],[7,Te.NE],[5,Te.NW],[1,Te.SE],[3,Te.SW]]);function wo(t){t=t%8;const e=yO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const IO=new Map([[Te.N,{r:-1,c:0}],[Te.S,{r:1,c:0}],[Te.E,{r:0,c:1}],[Te.W,{r:0,c:-1}],[Te.NE,{r:-1,c:1}],[Te.NW,{r:-1,c:-1}],[Te.SE,{r:1,c:1}],[Te.SW,{r:1,c:-1}]]);function Fs(t){const e=IO.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function OO(t){if(t.r===0&&t.c==1)return Te.E;if(t.r===0&&t.c==-1)return Te.W;if(t.r===1&&t.c==0)return Te.S;if(t.r===-1&&t.c==0)return Te.N;if(t.r===1&&t.c==1)return Te.SE;if(t.r===1&&t.c==-1)return Te.SW;if(t.r===-1&&t.c==1)return Te.NE;if(t.r===-1&&t.c==-1)return Te.NW;throw Error("delta is not a valid direction.")}function Ch(t,e){const n=Fs(e);return Bv(t,n)}function dl(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Hv(t,e,n=!1){const r=t.some(o=>Je(o,e)),i=n?t.some(o=>Gs(o,e)):t.some(o=>bO(o,e));if(!r&&i){const o=[...t,e];return cl(o),o}return t}function Ya(t){return`R${t.r+1}C${t.c+1}`}function Jd(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}function xO(t){const e=t.split("R")[1].split("C"),n=parseFloat(e[0])-1,r=parseFloat(e[1])-1;return{r:n,c:r}}const Go=[z.ARROW_CONSTRAINT,z.LOCAL_CONSTRAINT,z.ARROW_TOOL,z.LOCAL_ELEMENT];function Wv(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return Ct(r)}function Yv(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${Ct(n.slice(1)).join(",")}]`}function _l(t,e,n){let r="";const o="["+Wv(t,e).join(",")+"]";for(const s of e.lines){const l=Yv(t,s);r+=`constraint ${n}(${o}, ${l});
`}return r}function jv(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=_l(t,o,n);r+=s}return r}function AO(t,e){const n=t.puzzle.grid;return jv(n,e,"arrow_p")}const SO={inputOptions:{type:fe.ARROW},toolId:v.ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:Wi(),tags:[],categories:Go},solver_func:AO};function DO(t,e,n,r){let i="";const o=Wv(e,r);if(o.length===1){const s=o[0],l=r.lines;for(const u of l){const f=`constraint average_arrow_p(${Yv(e,u)}, ${s});
`;i+=f}}return i}function LO(t,e){return ze(t,e,DO)}const RO={inputOptions:{type:fe.ARROW},toolId:v.AVERAGE_ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:Wi(),tags:[],categories:Go},solver_func:LO};function NO(t,e){const n=t.puzzle.grid;return jv(n,e,"bulbous_arrow_p")}const kO={inputOptions:{type:fe.ARROW,allowSelfIntersection:!0},toolId:v.BULBOUS_ARROW,shape:{type:W.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:Wi(),tags:[],categories:Go},solver_func:NO};fe.ARROW,v.SQUARE_ROOT_ARROW,W.LINE,Wi();function TO(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),s=ve(o,$.UNKNOWN_REGIONS),l=r.lines.map(u=>u.map(d=>e.getCell(d.r,d.c)).filter(d=>!!d));for(const u of l){if(u.length<=1)continue;const d=ve(u.slice(1),$.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${s}, ${d});
`}return i+=_l(e,r,"arrow_p"),i}function MO(t,e){return ze(t,e,TO)}const $O={inputOptions:{type:fe.ARROW},toolId:v.CHAOS_CONSTRUCTION_ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:Wi(),tags:[],categories:Go},solver_func:MO};function UO(t,e,n,r){let i="";const o=r.cells.map(d=>e.getCell(d.r,d.c)).filter(d=>!!d);if(o.length!=1)return i;const s=Ve(o[0],$.BOARD),l=Ve(o[0],$.CELL_CENTER_LOOP),u=r.lines.map(d=>d.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f));i+=`constraint ${l} == 1;
`,i+=_l(e,r,"arrow_p");for(const d of u){if(d.length<=1)continue;const f=d[d.length-1],g=Ve(f,$.BOARD),h=d[d.length-2],m={r:f.r-h.r,c:f.c-h.c},E=OO(m),C=e.getCellsInDirection(f.r,f.c,E),w=ve(C,$.BOARD),y=ve(C,$.CELL_CENTER_LOOP);i+=`constraint loop_pointer_arrow_p(${s}, ${g}, ${w}, ${y});
`}return i+=_l(e,r,"arrow_p"),i}function GO(t,e){return ze(t,e,UO)}const FO={inputOptions:{type:fe.ARROW},toolId:v.LOOP_POINTER_ARROW,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:` - Digits along an arrow must sum to the digit in that arrow's bulb, and all bulbs are on the loop.
 - Additionally, arrow tips point towards a cell containing the digit within the arrow's bulb, and this cell with the pointed-to digit is also on the loop.
 - The digit in the arrow tip indicates the distance from the arrow tip to the pointed-to cell. There may be other instances of the same digit between this cell and the arrow tip.`,usage:Wi(),tags:[],categories:Go},solver_func:GO};function zO(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function PO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function BO(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function HO(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function WO(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const YO={Delete:null,Backspace:null};function jO(t,e=10){if(t in YO)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function KO(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function VO(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function qO(t){const e={KeyZ:v.DIGIT,KeyX:v.CORNER_PM,KeyC:v.CENTER_PM,KeyV:v.HIGHLIGHTS};return t in e?e[t]:v.DIGIT}function XO(t){let e;return t.altKey?e=v.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=v.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=v.CENTER_PM:e=v.HIGHLIGHTS,e}function Kv(t){return t==="Backspace"}function Fo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t)||Kv(t))}function ZO(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function QO(t){return ZO(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function JO(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function hi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const s=n?/(?:<|>|>=|<=)?/:RegExp(""),l=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,d=/[0-9]*/;return!!(r&&RegExp(`^${s.source}${u.source}$`,"i").test(t)||RegExp(`^${s.source}${l.source}${d.source}$`,"i").test(t))}function vi(t,e,n){if(t===void 0)return t;let r=t;return Kv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}function wh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Vv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function td(t){const e=new Option().style;return e.color=t,e.color!==""}function Tu(t){return Vv(t)||td(t)?t:td(`#${t}`)?`#${t}`:void 0}function fl(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}const ex=t=>btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function p7(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");for(;e.length%4!==0;)e+="=";return atob(e)}function qv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function gl(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function tx(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function*e_(t,e){if(!(e<0||e>t.length)){if(e===0){yield[];return}for(let n=0;n<=t.length-e;n++){const r=t[n],i=t.slice(n+1);for(const o of e_(i,e-1))yield[r,...o]}}}function Xv(t,e){const n=[];for(const r of t)e.getOrthogonallyAdjacentCells(r).forEach(o=>{!t.includes(o)&&!n.includes(o)&&n.push(o)});return n}function yh(t,e){const n=e.constraints,r=new Map;if(!n)return r;const i=[...Object.entries(n)];for(const[o,s]of e_(i,2)){const l=o[0],u=s[0],d=Ft(t,o[1].cells),f=new Set(Ft(t,s[1].cells));if(!Xv(d,t).some(C=>f.has(C)))continue;const m=r.get(l);m?m.add(u):r.set(l,new Set([u]));const E=r.get(u);E?E.add(l):r.set(u,new Set([l]))}return r}function _i(t,e){const n=Ft(t,e.cells);return Ct(n)}function nx(t,e,n){const i=`[${_i(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Zv(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=nx(o,s,n);r+=l}return r}function vo(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Qv(t,e,n,r){const i=t.puzzle.grid,s=`[${_i(i,n).join(",")}]`,l=n.value,u=vo(t,l,e);if(!u)return["",""];const d=u[1];let f=u[0];return f+=`constraint ${r}(${s}, ${d});
`,[f,d]}function Nl(t,e,n){let r="";const i=e.constraints;if(!i)return[r,[]];const o=[];for(const[s,l]of Object.entries(i)){const u=Qv(t,s,l,n);r+=u[0],o.push(u[1])}return[r,o]}const t_=[z.CAGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.CAGE_TOOL,z.LOCAL_ELEMENT],Zn=[z.CAGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.CAGE_TOOL,z.LOCAL_ELEMENT];function Jv(t,e=5){return hi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ep(t,e,n){return vi(t,e,n)}const Rn={type:W.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},kl={type:fe.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},Qn={...kl,valueUpdater:(t,e)=>ep(t,e,Jv)};function rx(t,e){const n=Nl(t,e,"killer_cage");let r=n[0];const i=n[1];if(!e.negative_constraints)return r;const o=!!e.negative_constraints[v.ALL_CAGE_TOTALS_ARE_DIFFERENT],s=!!e.negative_constraints[v.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE],l=!!e.negative_constraints[v.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT];if(o&&(r+=`
% ${v.ALL_CAGE_TOTALS_ARE_DIFFERENT}
`,r+=`constraint all_different([${i.join(", ")}]);
`),s){const u=yh(t.puzzle.grid,e);r+=`
% ${v.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE}
`;for(const[d,f]of u.entries())for(const g of f){const h=vo(t,"",d);if(!h)continue;const m=h[1];r+=h[0];const E=vo(t,"",g);if(!E)continue;const C=E[1];r+=E[0],r+=`constraint abs(${m} - ${C}) == 1;
`}}if(l){const u=yh(t.puzzle.grid,e);r+=`
% ${v.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT}
`;for(const[d,f]of u.entries())for(const g of f){const h=vo(t,"",d);if(!h)continue;const m=h[1];r+=h[0];const E=vo(t,"",g);if(!E)continue;const C=E[1];r+=E[0],r+=`constraint ${m} != ${C};
`}}return r}const ix={inputOptions:Qn,toolId:v.KILLER_CAGE,negative_constraints:[{toolId:v.ALL_CAGE_TOTALS_ARE_DIFFERENT,description:"All Killer Cage totals are different."},{toolId:v.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE,description:"Adjacent Killer Cages have consecutive sums."},{toolId:v.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT,description:"Killer Cages that share an edge have different totals."}],shape:Rn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:Xn(),tags:[],categories:Zn},solver_func:rx};function ox(t,e,n,r){const o=`[${_i(e,r).join(",")}]`,s=r.value;if(s){const l=parseInt(s);return`constraint unique_values_cage_p(${o}, ${l}, ALLOWED_DIGITS);
`}return""}function sx(t,e){return ze(t,e,ox)}const ax={inputOptions:Qn,toolId:v.UNIQUE_DIGITS_CAGE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:Xn(),tags:[],categories:Zn},solver_func:sx};function lx(t,e,n,r){const i=_i(e,r),o=`[${i.join(",")}]`,s=r.value;if(!s)return mo(i);const l=vo(t,s,n);if(!l)return"";const u=l[1];let d=l[0];return d+=`constraint inverted_killer_cage_p(${o}, ${u});
`,d}function cx(t,e){return ze(t,e,lx)}const ux={inputOptions:Qn,toolId:v.INVERTED_KILLER_CAGE,shape:Rn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:Xn(),tags:[],categories:Zn},solver_func:cx};function dx(t,e){return Nl(t,e,"sum_cage_p")[0]}const _x={inputOptions:Qn,toolId:v.SUM_CAGE,shape:Rn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:Xn(),tags:[],categories:Zn},solver_func:dx};function fx(t,e){return Zv(t,e,"sum_cage_look_and_say_p")}const gx={inputOptions:kl,toolId:v.SUM_CAGE_LOOK_AND_SAY,shape:Rn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Al(),tags:[],categories:t_},solver_func:fx};function hx(t,e){return Zv(t,e,"parity_balance_cage_p")}const vx={inputOptions:kl,toolId:v.PARITY_BALANCE_CAGE,shape:Rn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Al(),tags:[],categories:t_},solver_func:hx};function px(t,e){return Nl(t,e,"divisible_killer_cage_p")[0]}const mx={inputOptions:Qn,toolId:v.DIVISIBLE_KILLER_CAGE,shape:Rn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:Xn(),tags:[],categories:Zn},solver_func:px};function Ex(t,e){return Nl(t,e,"spotlight_cage_p")[0]}const bx={inputOptions:Qn,toolId:v.SPOTLIGHT_CAGE,shape:Rn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:Xn(),tags:[],categories:Zn},solver_func:Ex},Cx={inputOptions:kl,toolId:v.PUTTERIA_CAGE,shape:Rn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Al(),tags:[],categories:t_}};function wx(t,e){let n="";const r=e.constraints;if(!r)return n;const i=Dl(Object.values(r)),o=t.puzzle.grid;for(const s of i.values())if(!(s.length<=1))for(const[l,u]of s.flatMap((d,f)=>s.slice(f+1).map(g=>[d,g]))){const f=`[${_i(o,l).join(",")}]`,h=`[${_i(o,u).join(",")}]`;n+=`constraint multisets_equal_p(${f}, ${h});
`}return n}const yx={inputOptions:Qn,toolId:v.MULTISET_CAGE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:Xn(),tags:[],categories:Zn},solver_func:wx};function tp(t,e,n,r){const o=`[${_i(e,r).join(",")}]`;let l=Qv(t,n,r,"sum_cage_p")[0];const u=r.cells,d=Ft(e,u),f=Xv(d,e),g=ve(f,$.BOARD);return l+=`constraint vaulted_cage_p(${o}, ${g});
`,l}function Ix(t,e){return ze(t,e,tp)}const Ox={inputOptions:Qn,toolId:v.VAULTED_CAGE,shape:Rn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:Xn(),tags:[],categories:Zn},solver_func:Ix};function xx(t,e,n,r){let s=`constraint all_different(${`[${_i(e,r).join(",")}]`});
`;return s+=tp(t,e,n,r),s}function Ax(t,e){return ze(t,e,xx)}const Sx={inputOptions:Qn,toolId:v.VAULTED_KILLER_CAGE,shape:Rn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). Digits in a cage may not appear in any cell orthogonally adjacent to that cage.",usage:Xn(),tags:[],categories:Zn},solver_func:Ax};function Dx(t,e,n,r,i){const o=Ft(e,r.cells),s=ve(o,$.BOARD),l=ve(o,$.YIN_YANG),u=r.value;if(u){const d=parseInt(u);return`constraint ${i}(${s}, ${l}, ${d});
`}return""}function np(t,e,n,r){let i="";const o=n.constraints;if(!o)return i;for(const[s,l]of Object.entries(o)){const u=Dx(t,e,s,l,r);i+=u}return i}function Lx(t,e){const n=t.puzzle.grid;return np(t,n,e,"yin_yang_antithesis_killer_cage_p")}const Rx={inputOptions:Qn,toolId:v.YIN_YANG_ANTITHESIS_KILLER_CAGE,shape:Rn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:Xn(),tags:[],categories:Zn},solver_func:Lx};function Nx(t,e){const n=t.puzzle.grid;return np(t,n,e,"yin_yang_breakeven_killer_cage_p")}const kx={inputOptions:Qn,toolId:v.YIN_YANG_BREAKEVEN_KILLER_CAGE,shape:Rn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:Xn(),tags:[],categories:Zn},solver_func:Nx};function Tx(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,$.BOARD),s=ve(i,$.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint doublers_killer_cage_p(${o}, ${s}, ${u});
`}return""}function Mx(t,e){return ze(t,e,Tx)}const $x={inputOptions:Qn,toolId:v.DOUBLERS_KILLER_CAGE,shape:Rn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:Xn(),tags:[],categories:Zn},solver_func:Mx};function Ux(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,$.BOARD),s=ve(i,$.VALUES_GRID),l=r.value;if(l){const u=parseInt(l);return`constraint negators_killer_cage_p(${o}, ${s}, ${u});
`}return""}function Gx(t,e){return ze(t,e,Ux)}const Fx={inputOptions:Qn,toolId:v.NEGATORS_KILLER_CAGE,shape:Rn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:Xn(),tags:[],categories:Zn},solver_func:Gx},zx={inputOptions:{type:fe.SELECTION},toolId:v.GIVEN,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[z.CELL_INPUT_TOOL]}},Px={inputOptions:{type:fe.SELECTION},toolId:v.DIGIT,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[z.CELL_INPUT_TOOL]}},Bx={inputOptions:{type:fe.SELECTION},toolId:v.REGIONS,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[z.CELL_INPUT_TOOL]}},Hx={inputOptions:{type:fe.SELECTION},toolId:v.CORNER_PM,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[z.CELL_INPUT_TOOL]}},Wx={inputOptions:{type:fe.SELECTION},toolId:v.CENTER_PM,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[z.CELL_INPUT_TOOL]}},Yx={inputOptions:{type:fe.SELECTION},toolId:v.HIGHLIGHTS,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[z.CELL_INPUT_TOOL]}},jx={inputOptions:{type:fe.SELECTION},toolId:v.OUTSIDE,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[z.CELL_INPUT_TOOL]}},Kx={inputOptions:{type:fe.PEN},toolId:v.PEN_TOOL,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},Vx={type:fe.CENTER_CORNER_OR_EDGE,targets:Dt.CLOSEST},n_=[z.LOCAL_CONSTRAINT,z.CENTER_CORNER_EDGE_CONSTRAINT,z.LOCAL_ELEMENT];function qx(t,e,n,r){const i=e.r+.5,o=e.c+.5,s=n-i,l=r-o,u=Math.floor(n+s),d=Math.floor(r+l);return t.getCell(u,d)}function rp(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const s=qx(t,o,e.r,e.c);s&&!n.includes(s)?(n.push(o),r.push(s)):r.includes(o)||i.push(o)}return[n,r,i]}function Xx(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Zx(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;let s=0;for(let u=0;u<i.length;u++){const f=i[u].cell,g=u+1,[h,m,E]=rp(o,f),C=ve(h,$.GALAXY_REGIONS),w=ve(m,$.GALAXY_REGIONS),y=ve(E,$.GALAXY_REGIONS);n+=`% galaxy ${g}
`,n+=`constraint galaxy_center_p(${C}, ${w}, ${y}, ${g});
`,n+=`constraint connected_region(${$.GALAXY_REGIONS}, ${g});
`,s+=1}if(!i.length||!e.negative_constraints)return n;if(!!e.negative_constraints[v.ALL_GALAXY_CENTERS_GIVEN])n+=`
constraint all_galaxy_centers_given_p(${$.GALAXY_REGIONS}, ${s});
`;else{const u=o.nCols*o.nRows,f=`${s+1}..${u}`;n+=`
constraint order_remaining_galaxies_p(${$.GALAXY_REGIONS}, ${f});
`}return n}const Qx={inputOptions:Vx,toolId:v.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,negative_constraints:[{toolId:v.ALL_GALAXY_CENTERS_GIVEN,description:"All galaxy centers are given."}],shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The dots in the grid are centers of 180 degree rotationally symmetric 'galaxies' (non-overlapping set of orthogonally connected cells).",usage:Vd(),tags:[],categories:n_},solver_func:Zx};function Jx(t,e){let n="";const r=e.constraints;if(!r)return n;const i=[...Object.values(r)],o=t.puzzle.grid;for(let d=0;d<i.length;d++){const f=i[d],g=f.cell,h=d+1,[m,E,C]=rp(o,g),w=ve(m,$.GALAXY_REGIONS),y=ve(E,$.GALAXY_REGIONS),x=ve(C,$.GALAXY_REGIONS);n+=`% galaxy ${h}
`,n+=`constraint galaxy_center_p(${w}, ${y}, ${x}, ${h});
`,n+=`constraint connected_region(${$.GALAXY_REGIONS}, ${h});
`;const N=f.value;if(!N)continue;const T=parseInt(N);n+=`constraint galaxy_sum_p(${$.BOARD}, ${$.GALAXY_REGIONS}, ${T}, ${h});
`}if(!i.length)return n;const s=o.nCols*o.nRows,u=`${i.length+1}..${s}`;return n+=`
constraint order_remaining_galaxies_p(${$.GALAXY_REGIONS}, ${u});
`,n}const eA={inputOptions:{type:fe.CENTER_CORNER_OR_EDGE,targets:Dt.CLOSEST,valueUpdater:(t,e)=>vi(t,e,()=>!0),defaultValue:""},toolId:v.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Vd(),tags:[],categories:n_},solver_func:Jx};function tA(t,e,n,r){const i=r.cell,[o,s]=[i.r,i.c],l=r.value,u=Xx(t,l,n);if(!u)return"";const d=u[1];let f=u[0],g=[];if(o%1===0&&s%1===0?g=ul(i).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0):(o%1===.5&&s%1===0||o%1===0&&s%1===.5)&&(g=dl(i).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0)),!g.length)return"";const h=ve(g,$.BOARD),m=ve(g,$.YIN_YANG);return f+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${d};
`,f}function nA(t,e){return ze(t,e,tA)}const rA={inputOptions:{type:fe.CENTER_CORNER_OR_EDGE,targets:Dt.CORNER_OR_EDGE,valueUpdater:(t,e)=>vi(t,e,()=>!0),defaultValue:""},toolId:v.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Vd(),tags:[],categories:n_},solver_func:nA};function Ih(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return Ct(n)}function iA(t,e){const r="["+Ih(t,e.cells).join(",")+"]",o="["+Ih(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}function oA(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=iA(i,o);n+=s}return n}const sA={inputOptions:{type:fe.CLONE},toolId:v.CLONE_REGION,shape:{type:W.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[z.CLONE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT]},solver_func:oA},Yi=[z.CORNER_CONSTRAINT,z.LOCAL_CONSTRAINT,z.CORNER_TOOL,z.LOCAL_ELEMENT],ip=[z.CORNER_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.CORNER_TOOL,z.LOCAL_ELEMENT];function op(t,e=3){return hi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function sp(t,e,n){return vi(t,e,n)}function aA(t,e){function n(){return!0}return vi(t,e,n)}const Tl={type:fe.CORNER,defaultValue:"",valueUpdater:(t,e)=>sp(t,e,op)};function r_(t,e){const n=Ft(t,e.cells);return Ct(n)}function lA(t,e,n){const i=`[${r_(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Ml(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=lA(t,o,n);r+=s}return r}function cA(t,e,n,r,i,o=""){const l=`[${r_(e,r).join(",")}]`;let u=r.value;if(u||(u=o),u){const d=parseInt(u);return`constraint ${i}(${l}, ${d});
`}return""}function ap(t,e,n,r,i=""){let o="";const s=n.constraints;if(!s)return o;for(const[l,u]of Object.entries(s)){const d=cA(t,e,l,u,r,i);o+=d}return o}function uA(t,e,n,r){const o=`[${r_(e,r).join(",")}]`,s=r.value;if(!s)return"";const l=zv(s);if(!l)return"";let u="";for(const f of l){const g=parseInt(f);Number.isNaN(g)&&!t.hasVariable(f)&&(u+=`var int: ${f};
`,t.addVariable(f))}const d="["+l.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${d});
`,u}function dA(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,s]of Object.entries(r)){const l=uA(t,i,o,s);n+=l}return n}const _A={inputOptions:{type:fe.CORNER,valueUpdater:(t,e)=>aA(t,e),defaultValue:""},toolId:v.QUADRUPLE,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:nO(),categories:ip},solver_func:dA};function fA(t,e){const n=t.puzzle.grid;return ap(t,n,e,"corner_sum_p")}const gA={inputOptions:Tl,toolId:v.CORNER_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:gi(),categories:ip},solver_func:fA};function hA(t,e){const n=t.puzzle.grid;return Ml(n,e,"corner_sum_of_three_equals_the_other_p")}const vA={inputOptions:{type:fe.CORNER,defaultValue:""},toolId:v.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,shape:{type:W.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:gi(),categories:Yi},solver_func:hA};function pA(t,e){const n=t.puzzle.grid;return ap(t,n,e,"corner_even_count_p")}const mA={inputOptions:Tl,toolId:v.CORNER_EVEN_COUNT,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:gi(),categories:Yi},solver_func:pA};function EA(t,e,n,r){const i=Ft(e,r.cells);return`constraint chaos_construction_regions_count(${ve(i,$.UNKNOWN_REGIONS)}, 3);
`}function bA(t,e){return ze(t,e,EA)}const CA={inputOptions:Tl,toolId:v.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,shape:{type:W.SQUARE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"black"}},meta:{description:"The 4 cells surrounding a black square belong to exactly three different regions.",tags:[],usage:gi(),categories:Yi},solver_func:bA};function wA(t,e,n,r){const i=Ft(e,r.cells);return`constraint chaos_construction_regions_count(${ve(i,$.UNKNOWN_REGIONS)}, 1);
`}function yA(t,e){return ze(t,e,wA)}const IA={inputOptions:Tl,toolId:v.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_SAME_REGION,shape:{type:W.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The 4 cells surrounding a circle must belong to the same region.",tags:[],usage:gi(),categories:Yi},solver_func:yA};function OA(t,e){const n=t.puzzle.grid;return Ml(n,e,"product_square_p")}const xA={inputOptions:{type:fe.CORNER,defaultValue:"X"},toolId:v.PRODUCT_SQUARE,shape:{type:W.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:gi(),categories:Yi},solver_func:OA};function AA(t,e){const n=t.puzzle.grid;return Ml(n,e,"equal_diagonal_differences_p")}const SA={inputOptions:{type:fe.CORNER,defaultValue:""},toolId:v.EQUAL_DIAGONAL_DIFFERENCES,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:gi(),categories:Yi},solver_func:AA};function DA(t,e){const n=t.puzzle.grid;return Ml(n,e,"different_corner_diagonal_sums_p")}const LA={inputOptions:{type:fe.CORNER,defaultValue:""},toolId:v.DIFFERENT_CORNER_DIAGONAL_SUMS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the sum of the two digits in its positive diagonal is different than the sum of the two digits in its negative diagonal.",tags:[],usage:gi(),categories:Yi},solver_func:DA},$l=[z.EDGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.EDGE_TOOL,z.LOCAL_ELEMENT],dr=[z.EDGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.EDGE_TOOL,z.LOCAL_ELEMENT],zs=.15,lp=.02,ji={type:W.CIRCLE,r:{editable:!0,value:zs,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:lp,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},i_={type:W.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function RA(t,e=1){return hi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function cp(t,e=3){return hi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function NA(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function o_(t,e,n){return vi(t,e,n)}function kA(t,e){return t===void 0?"V":NA(e)?e.toUpperCase():t}function TA(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function up(t,e){return t===void 0?"<":TA(e)?e:t}const Ps={type:fe.EDGE,valueUpdater:(t,e)=>o_(t,e,cp)};function Bs(t,e,n){return[...Object.values(t)].find(o=>{const s=o.cells[0],l=o.cells[1];if(e.c===s.c&&e.r===s.r&&n.c===l.c&&n.r===l.r||e.c===l.c&&e.r===l.r&&n.c===s.c&&n.r===s.r)return o})}function Ul(t,e){const n=Ft(t,e.cells);return Ct(n)}function MA(t,e,n){const r=Ul(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function $A(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=MA(t,o,n);r+=s}return r}function UA(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function GA(t,e,n,r,i,o=""){var m;const s=Ul(e,r),[l,u]=s,d=(m=r.value)!=null&&m.length?r.value:o,f=UA(t,d,n);if(!f)return"";const g=f[1];let h=f[0];return h+=`constraint ${i}(${l}, ${u}, ${g});
`,h}function Gl(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=GA(t,s,l,u,n,r);i+=d}return i}function FA(t,e){const n=t.puzzle.grid;let r=Gl(t,e,"ratio_p","2");if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_RATIOS_GIVEN])return r;const o=e.constraints;let s=[];o&&(s=Object.values(o).map(u=>u.value).map(u=>u||"2")),s.length===0&&s.push("2");const l=[...new Set(s)];console.log("values",l),r+=`
% ${v.ALL_RATIOS_GIVEN}
`;for(const[u,d]of Qr(n)){if(Bs(o,u,d))continue;const g=Se(u),h=Se(d);for(const m of l){const E=parseInt(m),C=`constraint not ratio_p(${g}, ${h}, ${E});
`;r+=C}}return r}const zA={inputOptions:{type:fe.EDGE,valueUpdater:(t,e)=>o_(t,e,RA)},toolId:v.RATIO,negative_constraints:[{toolId:v.ALL_RATIOS_GIVEN,description:"All Ratios are given."}],shape:{type:W.CIRCLE,r:{editable:!1,value:zs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:dr},solver_func:FA};function PA(t,e){const n=t.puzzle.grid;let r=Gl(t,e,"abs_difference","1");if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_DIFFERENCES_GIVEN])return r;const o=e.constraints;let s=[];o&&(s=Object.values(o).map(u=>u.value).map(u=>u||"1")),s.length===0&&s.push("1");const l=[...new Set(s)];r+=`
% ${v.ALL_DIFFERENCES_GIVEN}
`;for(const[u,d]of Qr(n)){if(Bs(o,u,d))continue;const g=Se(u),h=Se(d);for(const m of l){const E=parseInt(m),C=`constraint abs(${g} - ${h}) != ${E};
`;r+=C}}return r}const BA={inputOptions:Ps,toolId:v.DIFFERENCE,negative_constraints:[{toolId:v.ALL_DIFFERENCES_GIVEN,description:"All Differences are given."}],shape:ji,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:dr},solver_func:PA};function HA(t,e){return Gl(t,e,"edge_sum_p")}const WA={inputOptions:Ps,toolId:v.EDGE_SUM,shape:{...ji,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:dr},solver_func:HA};function YA(t,e){const n=Ul(t,e),[r,i]=n;return e.value==="V"||e.value==="v"?`constraint ${r} + ${i} = 5;
`:`constraint ${r} + ${i} = 10;
`}function jA(t,e){let n="";const r=e.constraints,i=t.puzzle.grid;for(const u of Object.values(r)){const d=YA(i,u);n+=d}if(!e.negative_constraints)return n;const o=!!e.negative_constraints[v.NEGATIVE_V_CONSTRAINT],s=!!e.negative_constraints[v.NEGATIVE_X_CONSTRAINT],l=!!e.negative_constraints[v.NEGATIVE_XV_CONSTRAINT];if(!o&&!s&&!l)return n;for(const[u,d]of Qr(i)){const f=Bs(r,u,d),g=Se(u),h=Se(d);if(o&&(!f||f.value!=="V"&&f.value!=="v")){const m=`constraint ${g} + ${h} != 5;
`;n+=m}else if(s&&(!f||f.value!=="X"&&f.value!=="x")){const m=`constraint ${g} + ${h} != 10;
`;n+=m}else if(l&&!f){const m=`constraint ${g} + ${h} != 5 /\\ (${g} + ${h} != 10);
`;n+=m}}return n}const KA={inputOptions:{type:fe.EDGE,defaultValue:"V",valueUpdater:kA},toolId:v.XV,negative_constraints:[{toolId:v.NEGATIVE_V_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V cannot sum to 5."},{toolId:v.NEGATIVE_X_CONSTRAINT,description:"All pairs of adjacent cells not joined with an X cannot sum to 10."},{toolId:v.NEGATIVE_XV_CONSTRAINT,description:"All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10."}],shape:{type:W.TEXT_ONLY,r:{editable:!1,value:zs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:dr},solver_func:jA};function VA(t,e){const n=Ul(t,e),[r,i]=n,o=e.value;return o==="<"?`constraint ${r} < ${i};
`:o===">"?`constraint ${r} > ${i};
`:""}function dp(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=VA(i,o);n+=s}return n}const qA={inputOptions:{type:fe.EDGE,valueUpdater:up,defaultValue:"<"},toolId:v.EDGE_INEQUALITY,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:dr},solver_func:dp},XA={inputOptions:Ps,toolId:v.EDGE_PRODUCT,shape:{...ji,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:dr}};function ZA(t,e){return Gl(t,e,"edge_modulo_p")}const QA={inputOptions:Ps,toolId:v.EDGE_MODULO,shape:{...ji,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:dr},solver_func:ZA};function JA(t,e){const n=t.puzzle.grid;return $A(n,e,"edge_factor_p")}const eS={inputOptions:Ps,toolId:v.EDGE_FACTOR,shape:{...ji,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:dr},solver_func:JA};function _p(t,e,n){const r=Se(e),i=Se(n);let o="";if(e.r==n.r){const u=t.getRow(e.r)[0];o=Se(u)}else if(e.c==n.c){const u=t.getCol(e.c)[0];o=Se(u)}return o?`xy_differences_p(${r}, ${i}, ${o});
`:""}function tS(t,e){const n=Ft(t,e.cells),[r,i]=n,o=_p(t,r,i);return o.length===0?"":`constraint ${o}`}function nS(t,e){const n=e.constraints,r=t.puzzle.grid;let i="";for(const s of Object.values(n)){const l=tS(r,s);i+=l}if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_XY_DIFFERENCES_GIVEN])return i;i+=`
% ${v.ALL_XY_DIFFERENCES_GIVEN}
`;for(const[s,l]of Qr(r)){if(Bs(n,s,l))continue;const d=_p(r,s,l);if(d.length===0)continue;const f=`constraint not ${d}`;i+=f}return i}const rS={inputOptions:{type:fe.EDGE},toolId:v.XY_DIFFERENCES,negative_constraints:[{toolId:v.ALL_XY_DIFFERENCES_GIVEN,description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given."}],shape:{type:W.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:zs},strokeWidth:{editable:!1,value:lp,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:dr},solver_func:nS};function iS(t,e,n){const r=Ft(t,e.cells),[i,o]=Ct(r),s=$o(r,$.YIN_YANG),[l,u]=s;return`constraint ${n}(${i}, ${o}, ${l}, ${u});
`}function fp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=iS(t,o,n);r+=s}return r}function oS(t,e){const n=t.puzzle.grid;let r=fp(n,e,"yin_yang_kropki_p");if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_YIN_YANG_KROPKI_GIVEN])return r;const o=e.constraints;r+=`
% ${v.ALL_YIN_YANG_KROPKI_GIVEN}
`;for(const[s,l]of Qr(n)){if(Bs(o,s,l))continue;const d=Se(s),f=Se(l),g=Ve(s,$.YIN_YANG),h=Ve(l,$.YIN_YANG),m=`constraint not yin_yang_kropki_p(${d}, ${f}, ${g}, ${h});
`;r+=m}return r}const sS={inputOptions:{type:fe.EDGE},toolId:v.YIN_YANG_KROPKI,negative_constraints:[{toolId:v.ALL_YIN_YANG_KROPKI_GIVEN,description:"All such dots are given."}],shape:{type:W.CIRCLE,r:{editable:!1,value:zs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:dr},solver_func:oS};function aS(t,e){const n=t.puzzle.grid;return fp(n,e,"yin_yang_white_kropki_p")}const lS={inputOptions:{type:fe.EDGE},toolId:v.YIN_YANG_WHITE_KROPKI,shape:ji,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:dr},solver_func:aS};function cS(t,e,n){const r=Ft(t,e.cells),i=$o(r,n),[o,s]=i;return`constraint ${o} != ${s};
`}function Fl(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=cS(t,o,n);r+=s}return r}function uS(t,e){const n=t.puzzle.grid;return Fl(n,e,$.UNKNOWN_REGIONS)}const dS={inputOptions:{type:fe.EDGE},toolId:v.UNKNOWN_REGION_BORDER,shape:i_,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:$l},solver_func:uS};function _S(t,e){const n=t.puzzle.grid;return Fl(n,e,$.FILLOMINO_REGIONS)}const fS={inputOptions:{type:fe.EDGE},toolId:v.FILLOMINO_REGION_BORDER,shape:i_,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:$l},solver_func:_S};function gS(t,e){const n=t.puzzle.grid;return Fl(n,e,$.SUGURU_REGIONS)}const hS={inputOptions:{type:fe.EDGE},toolId:v.CHAOS_CONSTRUCTION_SUGURU_BORDER,shape:i_,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:$l},solver_func:gS};function vS(t,e){const n=t.puzzle.grid;return Fl(n,e,$.CAVE_SHADING)}const pS={inputOptions:{type:fe.EDGE},toolId:v.EDGE_CAVE_ONE_OF_EACH,shape:ji,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:$l},solver_func:vS},mS={inputOptions:{type:fe.EDGE,valueUpdater:up,defaultValue:"<"},toolId:v.ONE_WAY_DOOR,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:dr},solver_func:dp};function pi(t,e=5){return hi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function mi(t,e,n){return vi(t,e,n)}const zt={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}};function Hs(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return Ct(i)}function Ei(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function ES(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),l=`[${Hs(e,n).join(",")}]`,u=n.value,d=Ei(t,u,i,o);if(!d)return"";const f=d[1];let g=d[0];return g+=`constraint ${r}(${l}, ${f});
`,g}function _r(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=ES(t,o,s,n);r+=l}return r}const bS={inputOptions:{type:fe.SINGLE_CELL},toolId:v.COSMETIC_CELL_CENTER_SHAPE,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},CS={inputOptions:{type:fe.SINGLE_CELL_ARROW,cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.COSMETIC_CELL_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},wS={inputOptions:{type:fe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.COSMETIC_CELL_MULTI_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},yS={inputOptions:{type:fe.EDGE,valueUpdater:(t,e)=>o_(t,e,cp),defaultValue:""},toolId:v.COSMETIC_EDGE,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.LOCAL_ELEMENT]}},IS={inputOptions:{type:fe.CORNER,valueUpdater:(t,e)=>sp(t,e,op),defaultValue:""},toolId:v.COSMETIC_CORNER,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.LOCAL_ELEMENT]}},OS={inputOptions:{type:fe.LINE,allowSelfIntersection:!0},toolId:v.COSMETIC_LINE,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},xS={inputOptions:{type:fe.LINE,allowSelfIntersection:!0},toolId:v.COSMETIC_LINE_WITH_CIRCLE_ENDS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},AS={inputOptions:{type:fe.LINE,allowSelfIntersection:!0},toolId:v.COSMETIC_LINE_WITH_POLYGON_ENDS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_ELEMENT]}},SS={inputOptions:{type:fe.CAGE,valueUpdater:(t,e)=>ep(t,e,Jv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:v.COSMETIC_CAGE,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.LOCAL_ELEMENT]}},DS={inputOptions:{type:fe.ARROW},toolId:v.COSMETIC_ARROW,shape:{type:W.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT]}},LS={inputOptions:{type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.COSMETIC_OUTSIDE_DIRECTION,shape:{type:W.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[z.COSMETIC_TOOL,z.TYPABLE_TOOL,z.OUTSIDE_DIRECTION_TOOL,z.LOCAL_ELEMENT]}},zo=[z.LOCAL_ELEMENT,z.DIAGONAL_CONSTRAINTS],RS={toolId:v.SUDOKU_RULES_DO_NOT_APPLY,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}};function NS(t,e){const n=e.tool_id,r=t.puzzle.grid,i=t.puzzle.valid_digits,o=Math.min(...i);let s="";for(const l of r.getAllCells()){if(l.value!==null)continue;const u=Ve(l,$.BOARD);s+=`constraint ${u} == ${o};
`}return s=Zt(s,`${n}`),s}const kS={toolId:v.LEAVE_EMPTY_CELLS_EMPTY,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:NS},TS={toolId:v.HEXED_SUDOKU,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]}};function MS(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const u=r.getCellsByKnightMove(s).filter(m=>m.r>=s.r||m.c>=s.c),d=Se(s),g=`[${Ct(u).join(",")}]`,h=`constraint different_from_group_p(${d}, ${g});
`;o+=h}return o}const $S={toolId:v.ANTIKNIGHT,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:MS};function US(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_giraffe_p(board);
`,r=Zt(r,`${n}`),r}const GS={toolId:v.ANTI_GIRAFFE,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:US};function FS(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_long_knight_p(board);
`,r=Zt(r,`${n}`),r}const zS={toolId:v.ANTI_LONG_KNIGHT,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:FS};function PS(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const u=r.getNeighboorCells(s).filter(m=>m.r+m.c>=s.r+s.c),d=Se(s),g=`[${Ct(u).join(",")}]`,h=`constraint different_from_group_p(${d}, ${g});
`;o+=h}return o}const BS={toolId:v.ANTIKING,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:PS};function HS(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;const s=[...r.getUsedRegions()].length;for(let l=0;l<s;l++){const u=r.getDisjointGroup(l),g=`constraint alldifferent(${`[${Ct(u).join(",")}]`});
`;o+=g}return o}const WS={toolId:v.DISJOINT_GROUPS,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:HS};function YS(t,e){const n=e.tool_id;let r="";return r+=`constraint tango_p(board);
`,r=Zt(r,`${n}`),r}const jS={toolId:v.TANGO,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:YS};function KS(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[s,l]of Qr(r)){const u=Se(s),d=Se(l),f=`constraint not consecutive_p(${u}, ${d});
`;o+=f}return o}const VS={toolId:v.NONCONSECUTIVE,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:KS};function qS(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const[s,l]of Qr(r)){const u=Se(s),d=Se(l),f=`constraint not ratio_p(${u}, ${d}, 2);
`;o+=f}return o}const XS={toolId:v.NONRATIO,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:qS};function ZS(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;let o="";const s=n.grid.getUsedRegions();for(const l of s){const u=r.getRegion(l),d=[...new Set(u.map(g=>g.r))],f=[...new Set(u.map(g=>g.c))];for(const g of f){const h=u.filter(E=>E.c===g),m=ve(h,$.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}for(const g of d){const h=u.filter(E=>E.r===g),m=ve(h,$.BOARD);o+=`constraint entropy_and_modularity_set_p(${m});
`}}return o=Zt(o,`${i}`),o}const QS={toolId:v.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:ZS};function JS(t,e){const n=e.tool_id;let r="";return r+=`constraint anti_entropy_p(board);
`,r=Zt(r,`${n}`),r}const eD={toolId:v.ANTI_ENTROPY,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:JS};function tD(){return`constraint global_entropy_p(board);
`}const nD={toolId:v.GLOBAL_ENTROPY,meta:{description:"Consider the low digits (1, 2, 3), middle digits (4, 5, 6) and high digits (7, 8, 9) as three different groups. Each 2x2 box in the grid has to contain at least one digit of each group.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:tD};function rD(t,e){const r=t.puzzle.grid;let o=`
% ${e.tool_id}
`;for(const s of r.getAllCells()){const l=r.getRow(s.r),d=`[${Ct(l).join(",")}]`,f=s.c+1,g=`constraint indexing_column_p(${d}, ${f});
`;o+=g}return o}const iD={toolId:v.GLOBAL_INDEXING_COLUMN,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:rD};function oD(t,e){const n=e.tool_id;let r="";return r+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,r+=`constraint odd_even_grid_p(board, even_odd_grid);
`,r+=`constraint connected_region(even_odd_grid, 1);
`,r=Zt(r,`${n}`),r}const sD={toolId:v.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:oD};function aD(){return`constraint not_all_odd_in_2x2_square_p(board);
`}const lD={toolId:v.NOT_ALL_ODD_IN_A_2X2_SQUARE,meta:{description:"For every 2x2 square in the grid, not all digits can be odd (at least one must be even).",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:aD};function cD(){let t="";return t+=`constraint consecutive_close_neighbors_p(board);
`,t}const uD={toolId:v.CONSECUTIVE_CLOSE_NEIGHBORS,meta:{description:"Every number must share a side with at least one other consecutive number. For example, 2 must share a side with either a 1 or a 3 (possibly both).",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:cD};function dD(){return`constraint yin_yang_chaos_construction_same_shading_p(${$.UNKNOWN_REGIONS}, ${$.YIN_YANG});
`}const _D={toolId:v.YIN_YANG_CHAOS_CONSTRUCTION_FULLY_SHADED_OR_FULLY_UNSHADED,meta:{description:"Each unknown region is either fully shaded or fully unshaded (with yin yang shading).",tags:[],categories:[z.LOCAL_ELEMENT,z.SIMPLE_GLOBAL_CONSTRAINT]},solver_func:dD};function fD(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),s=Ct(o);let l=`
% ${i}
`;return l+=mo(s),l}const gD={toolId:v.NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:zo},solver_func:fD};function hD(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),s=Ct(o);let l=`
% ${i}
`;return l+=mo(s),l}const vD={toolId:v.POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"black"}},meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:zo},solver_func:hD};function pD(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getNegativeDiagonal(),l="["+Ct(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}const mD={toolId:v.NEGATIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:zo},solver_func:pD};function ED(t,e){const r=t.puzzle.grid,i=e.tool_id,o=r.getPositiveDiagonal(),l="["+Ct(o).join(",")+"]";let u=`
% ${i}
`;return u+=`constraint count_unique_values(${l}) == 3;
`,u}const bD={toolId:v.POSITIVE_ANTIDIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"rgb(169, 0, 169)"}},meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:zo},solver_func:ED};function CD(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,s]=[r.nRows,r.nCols];if(o!==s)return"";let l=`
% ${i}
`;const u=r.getNegativeDiagonal();for(const d of u){const[f,g]=[d.r,d.c];for(let h=0;h<f;h++){const m=r.getCell(h,g),E=r.getCell(f,g-(f-h));if(!m||!E)continue;const C=Se(m),w=Se(E),x=`constraint is_unimodular_line(${`[${C}, ${w}]`}, 2);
`;l+=x}}return l}const wD={toolId:v.PARITY_MIRROR_NEGATIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:zo},solver_func:CD};function yD(t,e){const r=t.puzzle.grid,i=e.tool_id,[o,s]=[r.nRows,r.nCols];if(o!==s)return"";let l=`
% ${i}
`;const u=r.getPositiveDiagonal();for(const d of u){const[f,g]=[d.r,d.c];for(let h=0;h<f;h++){const m=r.getCell(h,g),E=r.getCell(f,g+(f-h));if(!m||!E)continue;const C=Se(m),w=Se(E),x=`constraint is_unimodular_line(${`[${C}, ${w}]`}, 2);
`;l+=x}}return l}const ID={toolId:v.PARITY_MIRROR_POSITIVE_DIAGONAL,shape:{strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"}},meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:zo},solver_func:yD};var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ws={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var OD=ws.exports,Oh;function xD(){return Oh||(Oh=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",d=500,f="__lodash_placeholder__",g=1,h=2,m=4,E=1,C=2,w=1,y=2,x=4,N=8,T=16,G=32,K=64,U=128,H=256,re=512,te=30,oe="...",se=800,we=16,Z=1,ye=2,be=3,Ie=1/0,Oe=9007199254740991,Ae=17976931348623157e292,De=NaN,Ge=4294967295,ot=Ge-1,lt=Ge>>>1,ct=[["ary",U],["bind",w],["bindKey",y],["curry",N],["curryRight",T],["flip",re],["partial",G],["partialRight",K],["rearg",H]],_t="[object Arguments]",wt="[object Array]",yt="[object AsyncFunction]",yn="[object Boolean]",dn="[object Date]",yr="[object DOMException]",Ir="[object Error]",Ur="[object Function]",Be="[object GeneratorFunction]",xe="[object Map]",ke="[object Number]",He="[object Null]",Tt="[object Object]",ta="[object Promise]",na="[object Proxy]",Ii="[object RegExp]",In="[object Set]",Oi="[object String]",qi="[object Symbol]",lc="[object Undefined]",tt="[object WeakMap]",es="[object WeakSet]",ts="[object ArrayBuffer]",Xi="[object DataView]",cc="[object Float32Array]",uc="[object Float64Array]",dc="[object Int8Array]",_c="[object Int16Array]",fc="[object Int32Array]",gc="[object Uint8Array]",hc="[object Uint8ClampedArray]",vc="[object Uint16Array]",pc="[object Uint32Array]",Lm=/\b__p \+= '';/g,Rm=/\b(__p \+=) '' \+/g,Nm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,T_=/&(?:amp|lt|gt|quot|#39);/g,M_=/[&<>"']/g,km=RegExp(T_.source),Tm=RegExp(M_.source),Mm=/<%-([\s\S]+?)%>/g,$m=/<%([\s\S]+?)%>/g,$_=/<%=([\s\S]+?)%>/g,Um=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gm=/^\w*$/,Fm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mc=/[\\^$.*+?()[\]{}|]/g,zm=RegExp(mc.source),Ec=/^\s+/,Pm=/\s/,Bm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Hm=/\{\n\/\* \[wrapped with (.+)\] \*/,Wm=/,? & /,Ym=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jm=/[()=,{}\[\]\/\s]/,Km=/\\(\\)?/g,Vm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,U_=/\w*$/,qm=/^[-+]0x[0-9a-f]+$/i,Xm=/^0b[01]+$/i,Zm=/^\[object .+?Constructor\]$/,Qm=/^0o[0-7]+$/i,Jm=/^(?:0|[1-9]\d*)$/,e1=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ra=/($^)/,t1=/['\n\r\u2028\u2029\\]/g,ia="\\ud800-\\udfff",n1="\\u0300-\\u036f",r1="\\ufe20-\\ufe2f",i1="\\u20d0-\\u20ff",G_=n1+r1+i1,F_="\\u2700-\\u27bf",z_="a-z\\xdf-\\xf6\\xf8-\\xff",o1="\\xac\\xb1\\xd7\\xf7",s1="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",a1="\\u2000-\\u206f",l1=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",P_="A-Z\\xc0-\\xd6\\xd8-\\xde",B_="\\ufe0e\\ufe0f",H_=o1+s1+a1+l1,bc="['’]",c1="["+ia+"]",W_="["+H_+"]",oa="["+G_+"]",Y_="\\d+",u1="["+F_+"]",j_="["+z_+"]",K_="[^"+ia+H_+Y_+F_+z_+P_+"]",Cc="\\ud83c[\\udffb-\\udfff]",d1="(?:"+oa+"|"+Cc+")",V_="[^"+ia+"]",wc="(?:\\ud83c[\\udde6-\\uddff]){2}",yc="[\\ud800-\\udbff][\\udc00-\\udfff]",Zi="["+P_+"]",q_="\\u200d",X_="(?:"+j_+"|"+K_+")",_1="(?:"+Zi+"|"+K_+")",Z_="(?:"+bc+"(?:d|ll|m|re|s|t|ve))?",Q_="(?:"+bc+"(?:D|LL|M|RE|S|T|VE))?",J_=d1+"?",ef="["+B_+"]?",f1="(?:"+q_+"(?:"+[V_,wc,yc].join("|")+")"+ef+J_+")*",g1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",h1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tf=ef+J_+f1,v1="(?:"+[u1,wc,yc].join("|")+")"+tf,p1="(?:"+[V_+oa+"?",oa,wc,yc,c1].join("|")+")",m1=RegExp(bc,"g"),E1=RegExp(oa,"g"),Ic=RegExp(Cc+"(?="+Cc+")|"+p1+tf,"g"),b1=RegExp([Zi+"?"+j_+"+"+Z_+"(?="+[W_,Zi,"$"].join("|")+")",_1+"+"+Q_+"(?="+[W_,Zi+X_,"$"].join("|")+")",Zi+"?"+X_+"+"+Z_,Zi+"+"+Q_,h1,g1,Y_,v1].join("|"),"g"),C1=RegExp("["+q_+ia+G_+B_+"]"),w1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,y1=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],I1=-1,Ut={};Ut[cc]=Ut[uc]=Ut[dc]=Ut[_c]=Ut[fc]=Ut[gc]=Ut[hc]=Ut[vc]=Ut[pc]=!0,Ut[_t]=Ut[wt]=Ut[ts]=Ut[yn]=Ut[Xi]=Ut[dn]=Ut[Ir]=Ut[Ur]=Ut[xe]=Ut[ke]=Ut[Tt]=Ut[Ii]=Ut[In]=Ut[Oi]=Ut[tt]=!1;var Mt={};Mt[_t]=Mt[wt]=Mt[ts]=Mt[Xi]=Mt[yn]=Mt[dn]=Mt[cc]=Mt[uc]=Mt[dc]=Mt[_c]=Mt[fc]=Mt[xe]=Mt[ke]=Mt[Tt]=Mt[Ii]=Mt[In]=Mt[Oi]=Mt[qi]=Mt[gc]=Mt[hc]=Mt[vc]=Mt[pc]=!0,Mt[Ir]=Mt[Ur]=Mt[tt]=!1;var O1={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},x1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},A1={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},S1={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},D1=parseFloat,L1=parseInt,nf=typeof ja=="object"&&ja&&ja.Object===Object&&ja,R1=typeof self=="object"&&self&&self.Object===Object&&self,sn=nf||R1||Function("return this")(),Oc=e&&!e.nodeType&&e,xi=Oc&&!0&&t&&!t.nodeType&&t,rf=xi&&xi.exports===Oc,xc=rf&&nf.process,er=function(){try{var q=xi&&xi.require&&xi.require("util").types;return q||xc&&xc.binding&&xc.binding("util")}catch{}}(),of=er&&er.isArrayBuffer,sf=er&&er.isDate,af=er&&er.isMap,lf=er&&er.isRegExp,cf=er&&er.isSet,uf=er&&er.isTypedArray;function Mn(q,ue,ie){switch(ie.length){case 0:return q.call(ue);case 1:return q.call(ue,ie[0]);case 2:return q.call(ue,ie[0],ie[1]);case 3:return q.call(ue,ie[0],ie[1],ie[2])}return q.apply(ue,ie)}function N1(q,ue,ie,$e){for(var nt=-1,It=q==null?0:q.length;++nt<It;){var Qt=q[nt];ue($e,Qt,ie(Qt),q)}return $e}function tr(q,ue){for(var ie=-1,$e=q==null?0:q.length;++ie<$e&&ue(q[ie],ie,q)!==!1;);return q}function k1(q,ue){for(var ie=q==null?0:q.length;ie--&&ue(q[ie],ie,q)!==!1;);return q}function df(q,ue){for(var ie=-1,$e=q==null?0:q.length;++ie<$e;)if(!ue(q[ie],ie,q))return!1;return!0}function ti(q,ue){for(var ie=-1,$e=q==null?0:q.length,nt=0,It=[];++ie<$e;){var Qt=q[ie];ue(Qt,ie,q)&&(It[nt++]=Qt)}return It}function sa(q,ue){var ie=q==null?0:q.length;return!!ie&&Qi(q,ue,0)>-1}function Ac(q,ue,ie){for(var $e=-1,nt=q==null?0:q.length;++$e<nt;)if(ie(ue,q[$e]))return!0;return!1}function Pt(q,ue){for(var ie=-1,$e=q==null?0:q.length,nt=Array($e);++ie<$e;)nt[ie]=ue(q[ie],ie,q);return nt}function ni(q,ue){for(var ie=-1,$e=ue.length,nt=q.length;++ie<$e;)q[nt+ie]=ue[ie];return q}function Sc(q,ue,ie,$e){var nt=-1,It=q==null?0:q.length;for($e&&It&&(ie=q[++nt]);++nt<It;)ie=ue(ie,q[nt],nt,q);return ie}function T1(q,ue,ie,$e){var nt=q==null?0:q.length;for($e&&nt&&(ie=q[--nt]);nt--;)ie=ue(ie,q[nt],nt,q);return ie}function Dc(q,ue){for(var ie=-1,$e=q==null?0:q.length;++ie<$e;)if(ue(q[ie],ie,q))return!0;return!1}var M1=Lc("length");function $1(q){return q.split("")}function U1(q){return q.match(Ym)||[]}function _f(q,ue,ie){var $e;return ie(q,function(nt,It,Qt){if(ue(nt,It,Qt))return $e=It,!1}),$e}function aa(q,ue,ie,$e){for(var nt=q.length,It=ie+($e?1:-1);$e?It--:++It<nt;)if(ue(q[It],It,q))return It;return-1}function Qi(q,ue,ie){return ue===ue?q1(q,ue,ie):aa(q,ff,ie)}function G1(q,ue,ie,$e){for(var nt=ie-1,It=q.length;++nt<It;)if($e(q[nt],ue))return nt;return-1}function ff(q){return q!==q}function gf(q,ue){var ie=q==null?0:q.length;return ie?Nc(q,ue)/ie:De}function Lc(q){return function(ue){return ue==null?n:ue[q]}}function Rc(q){return function(ue){return q==null?n:q[ue]}}function hf(q,ue,ie,$e,nt){return nt(q,function(It,Qt,kt){ie=$e?($e=!1,It):ue(ie,It,Qt,kt)}),ie}function F1(q,ue){var ie=q.length;for(q.sort(ue);ie--;)q[ie]=q[ie].value;return q}function Nc(q,ue){for(var ie,$e=-1,nt=q.length;++$e<nt;){var It=ue(q[$e]);It!==n&&(ie=ie===n?It:ie+It)}return ie}function kc(q,ue){for(var ie=-1,$e=Array(q);++ie<q;)$e[ie]=ue(ie);return $e}function z1(q,ue){return Pt(ue,function(ie){return[ie,q[ie]]})}function vf(q){return q&&q.slice(0,bf(q)+1).replace(Ec,"")}function $n(q){return function(ue){return q(ue)}}function Tc(q,ue){return Pt(ue,function(ie){return q[ie]})}function ns(q,ue){return q.has(ue)}function pf(q,ue){for(var ie=-1,$e=q.length;++ie<$e&&Qi(ue,q[ie],0)>-1;);return ie}function mf(q,ue){for(var ie=q.length;ie--&&Qi(ue,q[ie],0)>-1;);return ie}function P1(q,ue){for(var ie=q.length,$e=0;ie--;)q[ie]===ue&&++$e;return $e}var B1=Rc(O1),H1=Rc(x1);function W1(q){return"\\"+S1[q]}function Y1(q,ue){return q==null?n:q[ue]}function Ji(q){return C1.test(q)}function j1(q){return w1.test(q)}function K1(q){for(var ue,ie=[];!(ue=q.next()).done;)ie.push(ue.value);return ie}function Mc(q){var ue=-1,ie=Array(q.size);return q.forEach(function($e,nt){ie[++ue]=[nt,$e]}),ie}function Ef(q,ue){return function(ie){return q(ue(ie))}}function ri(q,ue){for(var ie=-1,$e=q.length,nt=0,It=[];++ie<$e;){var Qt=q[ie];(Qt===ue||Qt===f)&&(q[ie]=f,It[nt++]=ie)}return It}function la(q){var ue=-1,ie=Array(q.size);return q.forEach(function($e){ie[++ue]=$e}),ie}function V1(q){var ue=-1,ie=Array(q.size);return q.forEach(function($e){ie[++ue]=[$e,$e]}),ie}function q1(q,ue,ie){for(var $e=ie-1,nt=q.length;++$e<nt;)if(q[$e]===ue)return $e;return-1}function X1(q,ue,ie){for(var $e=ie+1;$e--;)if(q[$e]===ue)return $e;return $e}function eo(q){return Ji(q)?Q1(q):M1(q)}function hr(q){return Ji(q)?J1(q):$1(q)}function bf(q){for(var ue=q.length;ue--&&Pm.test(q.charAt(ue)););return ue}var Z1=Rc(A1);function Q1(q){for(var ue=Ic.lastIndex=0;Ic.test(q);)++ue;return ue}function J1(q){return q.match(Ic)||[]}function eE(q){return q.match(b1)||[]}var tE=function q(ue){ue=ue==null?sn:to.defaults(sn.Object(),ue,to.pick(sn,y1));var ie=ue.Array,$e=ue.Date,nt=ue.Error,It=ue.Function,Qt=ue.Math,kt=ue.Object,$c=ue.RegExp,nE=ue.String,nr=ue.TypeError,ca=ie.prototype,rE=It.prototype,no=kt.prototype,ua=ue["__core-js_shared__"],da=rE.toString,St=no.hasOwnProperty,iE=0,Cf=function(){var a=/[^.]+$/.exec(ua&&ua.keys&&ua.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),_a=no.toString,oE=da.call(kt),sE=sn._,aE=$c("^"+da.call(St).replace(mc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fa=rf?ue.Buffer:n,ii=ue.Symbol,ga=ue.Uint8Array,wf=fa?fa.allocUnsafe:n,ha=Ef(kt.getPrototypeOf,kt),yf=kt.create,If=no.propertyIsEnumerable,va=ca.splice,Of=ii?ii.isConcatSpreadable:n,rs=ii?ii.iterator:n,Ai=ii?ii.toStringTag:n,pa=function(){try{var a=Ni(kt,"defineProperty");return a({},"",{}),a}catch{}}(),lE=ue.clearTimeout!==sn.clearTimeout&&ue.clearTimeout,cE=$e&&$e.now!==sn.Date.now&&$e.now,uE=ue.setTimeout!==sn.setTimeout&&ue.setTimeout,ma=Qt.ceil,Ea=Qt.floor,Uc=kt.getOwnPropertySymbols,dE=fa?fa.isBuffer:n,xf=ue.isFinite,_E=ca.join,fE=Ef(kt.keys,kt),Jt=Qt.max,_n=Qt.min,gE=$e.now,hE=ue.parseInt,Af=Qt.random,vE=ca.reverse,Gc=Ni(ue,"DataView"),is=Ni(ue,"Map"),Fc=Ni(ue,"Promise"),ro=Ni(ue,"Set"),os=Ni(ue,"WeakMap"),ss=Ni(kt,"create"),ba=os&&new os,io={},pE=ki(Gc),mE=ki(is),EE=ki(Fc),bE=ki(ro),CE=ki(os),Ca=ii?ii.prototype:n,as=Ca?Ca.valueOf:n,Sf=Ca?Ca.toString:n;function R(a){if(Yt(a)&&!it(a)&&!(a instanceof vt)){if(a instanceof rr)return a;if(St.call(a,"__wrapped__"))return Dg(a)}return new rr(a)}var oo=function(){function a(){}return function(c){if(!Ht(c))return{};if(yf)return yf(c);a.prototype=c;var p=new a;return a.prototype=n,p}}();function wa(){}function rr(a,c){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=n}R.templateSettings={escape:Mm,evaluate:$m,interpolate:$_,variable:"",imports:{_:R}},R.prototype=wa.prototype,R.prototype.constructor=R,rr.prototype=oo(wa.prototype),rr.prototype.constructor=rr;function vt(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ge,this.__views__=[]}function wE(){var a=new vt(this.__wrapped__);return a.__actions__=On(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=On(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=On(this.__views__),a}function yE(){if(this.__filtered__){var a=new vt(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function IE(){var a=this.__wrapped__.value(),c=this.__dir__,p=it(a),b=c<0,O=p?a.length:0,k=$0(0,O,this.__views__),B=k.start,j=k.end,X=j-B,de=b?j:B-1,_e=this.__iteratees__,me=_e.length,Le=0,Pe=_n(X,this.__takeCount__);if(!p||!b&&O==X&&Pe==X)return Qf(a,this.__actions__);var qe=[];e:for(;X--&&Le<Pe;){de+=c;for(var dt=-1,Xe=a[de];++dt<me;){var ht=_e[dt],pt=ht.iteratee,Fn=ht.type,mn=pt(Xe);if(Fn==ye)Xe=mn;else if(!mn){if(Fn==Z)continue e;break e}}qe[Le++]=Xe}return qe}vt.prototype=oo(wa.prototype),vt.prototype.constructor=vt;function Si(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var b=a[c];this.set(b[0],b[1])}}function OE(){this.__data__=ss?ss(null):{},this.size=0}function xE(a){var c=this.has(a)&&delete this.__data__[a];return this.size-=c?1:0,c}function AE(a){var c=this.__data__;if(ss){var p=c[a];return p===u?n:p}return St.call(c,a)?c[a]:n}function SE(a){var c=this.__data__;return ss?c[a]!==n:St.call(c,a)}function DE(a,c){var p=this.__data__;return this.size+=this.has(a)?0:1,p[a]=ss&&c===n?u:c,this}Si.prototype.clear=OE,Si.prototype.delete=xE,Si.prototype.get=AE,Si.prototype.has=SE,Si.prototype.set=DE;function Gr(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var b=a[c];this.set(b[0],b[1])}}function LE(){this.__data__=[],this.size=0}function RE(a){var c=this.__data__,p=ya(c,a);if(p<0)return!1;var b=c.length-1;return p==b?c.pop():va.call(c,p,1),--this.size,!0}function NE(a){var c=this.__data__,p=ya(c,a);return p<0?n:c[p][1]}function kE(a){return ya(this.__data__,a)>-1}function TE(a,c){var p=this.__data__,b=ya(p,a);return b<0?(++this.size,p.push([a,c])):p[b][1]=c,this}Gr.prototype.clear=LE,Gr.prototype.delete=RE,Gr.prototype.get=NE,Gr.prototype.has=kE,Gr.prototype.set=TE;function Fr(a){var c=-1,p=a==null?0:a.length;for(this.clear();++c<p;){var b=a[c];this.set(b[0],b[1])}}function ME(){this.size=0,this.__data__={hash:new Si,map:new(is||Gr),string:new Si}}function $E(a){var c=Ma(this,a).delete(a);return this.size-=c?1:0,c}function UE(a){return Ma(this,a).get(a)}function GE(a){return Ma(this,a).has(a)}function FE(a,c){var p=Ma(this,a),b=p.size;return p.set(a,c),this.size+=p.size==b?0:1,this}Fr.prototype.clear=ME,Fr.prototype.delete=$E,Fr.prototype.get=UE,Fr.prototype.has=GE,Fr.prototype.set=FE;function Di(a){var c=-1,p=a==null?0:a.length;for(this.__data__=new Fr;++c<p;)this.add(a[c])}function zE(a){return this.__data__.set(a,u),this}function PE(a){return this.__data__.has(a)}Di.prototype.add=Di.prototype.push=zE,Di.prototype.has=PE;function vr(a){var c=this.__data__=new Gr(a);this.size=c.size}function BE(){this.__data__=new Gr,this.size=0}function HE(a){var c=this.__data__,p=c.delete(a);return this.size=c.size,p}function WE(a){return this.__data__.get(a)}function YE(a){return this.__data__.has(a)}function jE(a,c){var p=this.__data__;if(p instanceof Gr){var b=p.__data__;if(!is||b.length<i-1)return b.push([a,c]),this.size=++p.size,this;p=this.__data__=new Fr(b)}return p.set(a,c),this.size=p.size,this}vr.prototype.clear=BE,vr.prototype.delete=HE,vr.prototype.get=WE,vr.prototype.has=YE,vr.prototype.set=jE;function Df(a,c){var p=it(a),b=!p&&Ti(a),O=!p&&!b&&ci(a),k=!p&&!b&&!O&&co(a),B=p||b||O||k,j=B?kc(a.length,nE):[],X=j.length;for(var de in a)(c||St.call(a,de))&&!(B&&(de=="length"||O&&(de=="offset"||de=="parent")||k&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Hr(de,X)))&&j.push(de);return j}function Lf(a){var c=a.length;return c?a[Xc(0,c-1)]:n}function KE(a,c){return $a(On(a),Li(c,0,a.length))}function VE(a){return $a(On(a))}function zc(a,c,p){(p!==n&&!pr(a[c],p)||p===n&&!(c in a))&&zr(a,c,p)}function ls(a,c,p){var b=a[c];(!(St.call(a,c)&&pr(b,p))||p===n&&!(c in a))&&zr(a,c,p)}function ya(a,c){for(var p=a.length;p--;)if(pr(a[p][0],c))return p;return-1}function qE(a,c,p,b){return oi(a,function(O,k,B){c(b,O,p(O),B)}),b}function Rf(a,c){return a&&xr(c,rn(c),a)}function XE(a,c){return a&&xr(c,An(c),a)}function zr(a,c,p){c=="__proto__"&&pa?pa(a,c,{configurable:!0,enumerable:!0,value:p,writable:!0}):a[c]=p}function Pc(a,c){for(var p=-1,b=c.length,O=ie(b),k=a==null;++p<b;)O[p]=k?n:Cu(a,c[p]);return O}function Li(a,c,p){return a===a&&(p!==n&&(a=a<=p?a:p),c!==n&&(a=a>=c?a:c)),a}function ir(a,c,p,b,O,k){var B,j=c&g,X=c&h,de=c&m;if(p&&(B=O?p(a,b,O,k):p(a)),B!==n)return B;if(!Ht(a))return a;var _e=it(a);if(_e){if(B=G0(a),!j)return On(a,B)}else{var me=fn(a),Le=me==Ur||me==Be;if(ci(a))return tg(a,j);if(me==Tt||me==_t||Le&&!O){if(B=X||Le?{}:bg(a),!j)return X?A0(a,XE(B,a)):x0(a,Rf(B,a))}else{if(!Mt[me])return O?a:{};B=F0(a,me,j)}}k||(k=new vr);var Pe=k.get(a);if(Pe)return Pe;k.set(a,B),qg(a)?a.forEach(function(Xe){B.add(ir(Xe,c,p,Xe,a,k))}):Kg(a)&&a.forEach(function(Xe,ht){B.set(ht,ir(Xe,c,p,ht,a,k))});var qe=de?X?au:su:X?An:rn,dt=_e?n:qe(a);return tr(dt||a,function(Xe,ht){dt&&(ht=Xe,Xe=a[ht]),ls(B,ht,ir(Xe,c,p,ht,a,k))}),B}function ZE(a){var c=rn(a);return function(p){return Nf(p,a,c)}}function Nf(a,c,p){var b=p.length;if(a==null)return!b;for(a=kt(a);b--;){var O=p[b],k=c[O],B=a[O];if(B===n&&!(O in a)||!k(B))return!1}return!0}function kf(a,c,p){if(typeof a!="function")throw new nr(s);return hs(function(){a.apply(n,p)},c)}function cs(a,c,p,b){var O=-1,k=sa,B=!0,j=a.length,X=[],de=c.length;if(!j)return X;p&&(c=Pt(c,$n(p))),b?(k=Ac,B=!1):c.length>=i&&(k=ns,B=!1,c=new Di(c));e:for(;++O<j;){var _e=a[O],me=p==null?_e:p(_e);if(_e=b||_e!==0?_e:0,B&&me===me){for(var Le=de;Le--;)if(c[Le]===me)continue e;X.push(_e)}else k(c,me,b)||X.push(_e)}return X}var oi=sg(Or),Tf=sg(Hc,!0);function QE(a,c){var p=!0;return oi(a,function(b,O,k){return p=!!c(b,O,k),p}),p}function Ia(a,c,p){for(var b=-1,O=a.length;++b<O;){var k=a[b],B=c(k);if(B!=null&&(j===n?B===B&&!Gn(B):p(B,j)))var j=B,X=k}return X}function JE(a,c,p,b){var O=a.length;for(p=ut(p),p<0&&(p=-p>O?0:O+p),b=b===n||b>O?O:ut(b),b<0&&(b+=O),b=p>b?0:Zg(b);p<b;)a[p++]=c;return a}function Mf(a,c){var p=[];return oi(a,function(b,O,k){c(b,O,k)&&p.push(b)}),p}function an(a,c,p,b,O){var k=-1,B=a.length;for(p||(p=P0),O||(O=[]);++k<B;){var j=a[k];c>0&&p(j)?c>1?an(j,c-1,p,b,O):ni(O,j):b||(O[O.length]=j)}return O}var Bc=ag(),$f=ag(!0);function Or(a,c){return a&&Bc(a,c,rn)}function Hc(a,c){return a&&$f(a,c,rn)}function Oa(a,c){return ti(c,function(p){return Wr(a[p])})}function Ri(a,c){c=ai(c,a);for(var p=0,b=c.length;a!=null&&p<b;)a=a[Ar(c[p++])];return p&&p==b?a:n}function Uf(a,c,p){var b=c(a);return it(a)?b:ni(b,p(a))}function vn(a){return a==null?a===n?lc:He:Ai&&Ai in kt(a)?M0(a):V0(a)}function Wc(a,c){return a>c}function e0(a,c){return a!=null&&St.call(a,c)}function t0(a,c){return a!=null&&c in kt(a)}function n0(a,c,p){return a>=_n(c,p)&&a<Jt(c,p)}function Yc(a,c,p){for(var b=p?Ac:sa,O=a[0].length,k=a.length,B=k,j=ie(k),X=1/0,de=[];B--;){var _e=a[B];B&&c&&(_e=Pt(_e,$n(c))),X=_n(_e.length,X),j[B]=!p&&(c||O>=120&&_e.length>=120)?new Di(B&&_e):n}_e=a[0];var me=-1,Le=j[0];e:for(;++me<O&&de.length<X;){var Pe=_e[me],qe=c?c(Pe):Pe;if(Pe=p||Pe!==0?Pe:0,!(Le?ns(Le,qe):b(de,qe,p))){for(B=k;--B;){var dt=j[B];if(!(dt?ns(dt,qe):b(a[B],qe,p)))continue e}Le&&Le.push(qe),de.push(Pe)}}return de}function r0(a,c,p,b){return Or(a,function(O,k,B){c(b,p(O),k,B)}),b}function us(a,c,p){c=ai(c,a),a=Ig(a,c);var b=a==null?a:a[Ar(sr(c))];return b==null?n:Mn(b,a,p)}function Gf(a){return Yt(a)&&vn(a)==_t}function i0(a){return Yt(a)&&vn(a)==ts}function o0(a){return Yt(a)&&vn(a)==dn}function ds(a,c,p,b,O){return a===c?!0:a==null||c==null||!Yt(a)&&!Yt(c)?a!==a&&c!==c:s0(a,c,p,b,ds,O)}function s0(a,c,p,b,O,k){var B=it(a),j=it(c),X=B?wt:fn(a),de=j?wt:fn(c);X=X==_t?Tt:X,de=de==_t?Tt:de;var _e=X==Tt,me=de==Tt,Le=X==de;if(Le&&ci(a)){if(!ci(c))return!1;B=!0,_e=!1}if(Le&&!_e)return k||(k=new vr),B||co(a)?pg(a,c,p,b,O,k):k0(a,c,X,p,b,O,k);if(!(p&E)){var Pe=_e&&St.call(a,"__wrapped__"),qe=me&&St.call(c,"__wrapped__");if(Pe||qe){var dt=Pe?a.value():a,Xe=qe?c.value():c;return k||(k=new vr),O(dt,Xe,p,b,k)}}return Le?(k||(k=new vr),T0(a,c,p,b,O,k)):!1}function a0(a){return Yt(a)&&fn(a)==xe}function jc(a,c,p,b){var O=p.length,k=O,B=!b;if(a==null)return!k;for(a=kt(a);O--;){var j=p[O];if(B&&j[2]?j[1]!==a[j[0]]:!(j[0]in a))return!1}for(;++O<k;){j=p[O];var X=j[0],de=a[X],_e=j[1];if(B&&j[2]){if(de===n&&!(X in a))return!1}else{var me=new vr;if(b)var Le=b(de,_e,X,a,c,me);if(!(Le===n?ds(_e,de,E|C,b,me):Le))return!1}}return!0}function Ff(a){if(!Ht(a)||H0(a))return!1;var c=Wr(a)?aE:Zm;return c.test(ki(a))}function l0(a){return Yt(a)&&vn(a)==Ii}function c0(a){return Yt(a)&&fn(a)==In}function u0(a){return Yt(a)&&Ba(a.length)&&!!Ut[vn(a)]}function zf(a){return typeof a=="function"?a:a==null?Sn:typeof a=="object"?it(a)?Hf(a[0],a[1]):Bf(a):lh(a)}function Kc(a){if(!gs(a))return fE(a);var c=[];for(var p in kt(a))St.call(a,p)&&p!="constructor"&&c.push(p);return c}function d0(a){if(!Ht(a))return K0(a);var c=gs(a),p=[];for(var b in a)b=="constructor"&&(c||!St.call(a,b))||p.push(b);return p}function Vc(a,c){return a<c}function Pf(a,c){var p=-1,b=xn(a)?ie(a.length):[];return oi(a,function(O,k,B){b[++p]=c(O,k,B)}),b}function Bf(a){var c=cu(a);return c.length==1&&c[0][2]?wg(c[0][0],c[0][1]):function(p){return p===a||jc(p,a,c)}}function Hf(a,c){return du(a)&&Cg(c)?wg(Ar(a),c):function(p){var b=Cu(p,a);return b===n&&b===c?wu(p,a):ds(c,b,E|C)}}function xa(a,c,p,b,O){a!==c&&Bc(c,function(k,B){if(O||(O=new vr),Ht(k))_0(a,c,B,p,xa,b,O);else{var j=b?b(fu(a,B),k,B+"",a,c,O):n;j===n&&(j=k),zc(a,B,j)}},An)}function _0(a,c,p,b,O,k,B){var j=fu(a,p),X=fu(c,p),de=B.get(X);if(de){zc(a,p,de);return}var _e=k?k(j,X,p+"",a,c,B):n,me=_e===n;if(me){var Le=it(X),Pe=!Le&&ci(X),qe=!Le&&!Pe&&co(X);_e=X,Le||Pe||qe?it(j)?_e=j:Kt(j)?_e=On(j):Pe?(me=!1,_e=tg(X,!0)):qe?(me=!1,_e=ng(X,!0)):_e=[]:vs(X)||Ti(X)?(_e=j,Ti(j)?_e=Qg(j):(!Ht(j)||Wr(j))&&(_e=bg(X))):me=!1}me&&(B.set(X,_e),O(_e,X,b,k,B),B.delete(X)),zc(a,p,_e)}function Wf(a,c){var p=a.length;if(p)return c+=c<0?p:0,Hr(c,p)?a[c]:n}function Yf(a,c,p){c.length?c=Pt(c,function(k){return it(k)?function(B){return Ri(B,k.length===1?k[0]:k)}:k}):c=[Sn];var b=-1;c=Pt(c,$n(Ke()));var O=Pf(a,function(k,B,j){var X=Pt(c,function(de){return de(k)});return{criteria:X,index:++b,value:k}});return F1(O,function(k,B){return O0(k,B,p)})}function f0(a,c){return jf(a,c,function(p,b){return wu(a,b)})}function jf(a,c,p){for(var b=-1,O=c.length,k={};++b<O;){var B=c[b],j=Ri(a,B);p(j,B)&&_s(k,ai(B,a),j)}return k}function g0(a){return function(c){return Ri(c,a)}}function qc(a,c,p,b){var O=b?G1:Qi,k=-1,B=c.length,j=a;for(a===c&&(c=On(c)),p&&(j=Pt(a,$n(p)));++k<B;)for(var X=0,de=c[k],_e=p?p(de):de;(X=O(j,_e,X,b))>-1;)j!==a&&va.call(j,X,1),va.call(a,X,1);return a}function Kf(a,c){for(var p=a?c.length:0,b=p-1;p--;){var O=c[p];if(p==b||O!==k){var k=O;Hr(O)?va.call(a,O,1):Jc(a,O)}}return a}function Xc(a,c){return a+Ea(Af()*(c-a+1))}function h0(a,c,p,b){for(var O=-1,k=Jt(ma((c-a)/(p||1)),0),B=ie(k);k--;)B[b?k:++O]=a,a+=p;return B}function Zc(a,c){var p="";if(!a||c<1||c>Oe)return p;do c%2&&(p+=a),c=Ea(c/2),c&&(a+=a);while(c);return p}function ft(a,c){return gu(yg(a,c,Sn),a+"")}function v0(a){return Lf(uo(a))}function p0(a,c){var p=uo(a);return $a(p,Li(c,0,p.length))}function _s(a,c,p,b){if(!Ht(a))return a;c=ai(c,a);for(var O=-1,k=c.length,B=k-1,j=a;j!=null&&++O<k;){var X=Ar(c[O]),de=p;if(X==="__proto__"||X==="constructor"||X==="prototype")return a;if(O!=B){var _e=j[X];de=b?b(_e,X,j):n,de===n&&(de=Ht(_e)?_e:Hr(c[O+1])?[]:{})}ls(j,X,de),j=j[X]}return a}var Vf=ba?function(a,c){return ba.set(a,c),a}:Sn,m0=pa?function(a,c){return pa(a,"toString",{configurable:!0,enumerable:!1,value:Iu(c),writable:!0})}:Sn;function E0(a){return $a(uo(a))}function or(a,c,p){var b=-1,O=a.length;c<0&&(c=-c>O?0:O+c),p=p>O?O:p,p<0&&(p+=O),O=c>p?0:p-c>>>0,c>>>=0;for(var k=ie(O);++b<O;)k[b]=a[b+c];return k}function b0(a,c){var p;return oi(a,function(b,O,k){return p=c(b,O,k),!p}),!!p}function Aa(a,c,p){var b=0,O=a==null?b:a.length;if(typeof c=="number"&&c===c&&O<=lt){for(;b<O;){var k=b+O>>>1,B=a[k];B!==null&&!Gn(B)&&(p?B<=c:B<c)?b=k+1:O=k}return O}return Qc(a,c,Sn,p)}function Qc(a,c,p,b){var O=0,k=a==null?0:a.length;if(k===0)return 0;c=p(c);for(var B=c!==c,j=c===null,X=Gn(c),de=c===n;O<k;){var _e=Ea((O+k)/2),me=p(a[_e]),Le=me!==n,Pe=me===null,qe=me===me,dt=Gn(me);if(B)var Xe=b||qe;else de?Xe=qe&&(b||Le):j?Xe=qe&&Le&&(b||!Pe):X?Xe=qe&&Le&&!Pe&&(b||!dt):Pe||dt?Xe=!1:Xe=b?me<=c:me<c;Xe?O=_e+1:k=_e}return _n(k,ot)}function qf(a,c){for(var p=-1,b=a.length,O=0,k=[];++p<b;){var B=a[p],j=c?c(B):B;if(!p||!pr(j,X)){var X=j;k[O++]=B===0?0:B}}return k}function Xf(a){return typeof a=="number"?a:Gn(a)?De:+a}function Un(a){if(typeof a=="string")return a;if(it(a))return Pt(a,Un)+"";if(Gn(a))return Sf?Sf.call(a):"";var c=a+"";return c=="0"&&1/a==-1/0?"-0":c}function si(a,c,p){var b=-1,O=sa,k=a.length,B=!0,j=[],X=j;if(p)B=!1,O=Ac;else if(k>=i){var de=c?null:R0(a);if(de)return la(de);B=!1,O=ns,X=new Di}else X=c?[]:j;e:for(;++b<k;){var _e=a[b],me=c?c(_e):_e;if(_e=p||_e!==0?_e:0,B&&me===me){for(var Le=X.length;Le--;)if(X[Le]===me)continue e;c&&X.push(me),j.push(_e)}else O(X,me,p)||(X!==j&&X.push(me),j.push(_e))}return j}function Jc(a,c){return c=ai(c,a),a=Ig(a,c),a==null||delete a[Ar(sr(c))]}function Zf(a,c,p,b){return _s(a,c,p(Ri(a,c)),b)}function Sa(a,c,p,b){for(var O=a.length,k=b?O:-1;(b?k--:++k<O)&&c(a[k],k,a););return p?or(a,b?0:k,b?k+1:O):or(a,b?k+1:0,b?O:k)}function Qf(a,c){var p=a;return p instanceof vt&&(p=p.value()),Sc(c,function(b,O){return O.func.apply(O.thisArg,ni([b],O.args))},p)}function eu(a,c,p){var b=a.length;if(b<2)return b?si(a[0]):[];for(var O=-1,k=ie(b);++O<b;)for(var B=a[O],j=-1;++j<b;)j!=O&&(k[O]=cs(k[O]||B,a[j],c,p));return si(an(k,1),c,p)}function Jf(a,c,p){for(var b=-1,O=a.length,k=c.length,B={};++b<O;){var j=b<k?c[b]:n;p(B,a[b],j)}return B}function tu(a){return Kt(a)?a:[]}function nu(a){return typeof a=="function"?a:Sn}function ai(a,c){return it(a)?a:du(a,c)?[a]:Sg(xt(a))}var C0=ft;function li(a,c,p){var b=a.length;return p=p===n?b:p,!c&&p>=b?a:or(a,c,p)}var eg=lE||function(a){return sn.clearTimeout(a)};function tg(a,c){if(c)return a.slice();var p=a.length,b=wf?wf(p):new a.constructor(p);return a.copy(b),b}function ru(a){var c=new a.constructor(a.byteLength);return new ga(c).set(new ga(a)),c}function w0(a,c){var p=c?ru(a.buffer):a.buffer;return new a.constructor(p,a.byteOffset,a.byteLength)}function y0(a){var c=new a.constructor(a.source,U_.exec(a));return c.lastIndex=a.lastIndex,c}function I0(a){return as?kt(as.call(a)):{}}function ng(a,c){var p=c?ru(a.buffer):a.buffer;return new a.constructor(p,a.byteOffset,a.length)}function rg(a,c){if(a!==c){var p=a!==n,b=a===null,O=a===a,k=Gn(a),B=c!==n,j=c===null,X=c===c,de=Gn(c);if(!j&&!de&&!k&&a>c||k&&B&&X&&!j&&!de||b&&B&&X||!p&&X||!O)return 1;if(!b&&!k&&!de&&a<c||de&&p&&O&&!b&&!k||j&&p&&O||!B&&O||!X)return-1}return 0}function O0(a,c,p){for(var b=-1,O=a.criteria,k=c.criteria,B=O.length,j=p.length;++b<B;){var X=rg(O[b],k[b]);if(X){if(b>=j)return X;var de=p[b];return X*(de=="desc"?-1:1)}}return a.index-c.index}function ig(a,c,p,b){for(var O=-1,k=a.length,B=p.length,j=-1,X=c.length,de=Jt(k-B,0),_e=ie(X+de),me=!b;++j<X;)_e[j]=c[j];for(;++O<B;)(me||O<k)&&(_e[p[O]]=a[O]);for(;de--;)_e[j++]=a[O++];return _e}function og(a,c,p,b){for(var O=-1,k=a.length,B=-1,j=p.length,X=-1,de=c.length,_e=Jt(k-j,0),me=ie(_e+de),Le=!b;++O<_e;)me[O]=a[O];for(var Pe=O;++X<de;)me[Pe+X]=c[X];for(;++B<j;)(Le||O<k)&&(me[Pe+p[B]]=a[O++]);return me}function On(a,c){var p=-1,b=a.length;for(c||(c=ie(b));++p<b;)c[p]=a[p];return c}function xr(a,c,p,b){var O=!p;p||(p={});for(var k=-1,B=c.length;++k<B;){var j=c[k],X=b?b(p[j],a[j],j,p,a):n;X===n&&(X=a[j]),O?zr(p,j,X):ls(p,j,X)}return p}function x0(a,c){return xr(a,uu(a),c)}function A0(a,c){return xr(a,mg(a),c)}function Da(a,c){return function(p,b){var O=it(p)?N1:qE,k=c?c():{};return O(p,a,Ke(b,2),k)}}function so(a){return ft(function(c,p){var b=-1,O=p.length,k=O>1?p[O-1]:n,B=O>2?p[2]:n;for(k=a.length>3&&typeof k=="function"?(O--,k):n,B&&pn(p[0],p[1],B)&&(k=O<3?n:k,O=1),c=kt(c);++b<O;){var j=p[b];j&&a(c,j,b,k)}return c})}function sg(a,c){return function(p,b){if(p==null)return p;if(!xn(p))return a(p,b);for(var O=p.length,k=c?O:-1,B=kt(p);(c?k--:++k<O)&&b(B[k],k,B)!==!1;);return p}}function ag(a){return function(c,p,b){for(var O=-1,k=kt(c),B=b(c),j=B.length;j--;){var X=B[a?j:++O];if(p(k[X],X,k)===!1)break}return c}}function S0(a,c,p){var b=c&w,O=fs(a);function k(){var B=this&&this!==sn&&this instanceof k?O:a;return B.apply(b?p:this,arguments)}return k}function lg(a){return function(c){c=xt(c);var p=Ji(c)?hr(c):n,b=p?p[0]:c.charAt(0),O=p?li(p,1).join(""):c.slice(1);return b[a]()+O}}function ao(a){return function(c){return Sc(sh(oh(c).replace(m1,"")),a,"")}}function fs(a){return function(){var c=arguments;switch(c.length){case 0:return new a;case 1:return new a(c[0]);case 2:return new a(c[0],c[1]);case 3:return new a(c[0],c[1],c[2]);case 4:return new a(c[0],c[1],c[2],c[3]);case 5:return new a(c[0],c[1],c[2],c[3],c[4]);case 6:return new a(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var p=oo(a.prototype),b=a.apply(p,c);return Ht(b)?b:p}}function D0(a,c,p){var b=fs(a);function O(){for(var k=arguments.length,B=ie(k),j=k,X=lo(O);j--;)B[j]=arguments[j];var de=k<3&&B[0]!==X&&B[k-1]!==X?[]:ri(B,X);if(k-=de.length,k<p)return fg(a,c,La,O.placeholder,n,B,de,n,n,p-k);var _e=this&&this!==sn&&this instanceof O?b:a;return Mn(_e,this,B)}return O}function cg(a){return function(c,p,b){var O=kt(c);if(!xn(c)){var k=Ke(p,3);c=rn(c),p=function(j){return k(O[j],j,O)}}var B=a(c,p,b);return B>-1?O[k?c[B]:B]:n}}function ug(a){return Br(function(c){var p=c.length,b=p,O=rr.prototype.thru;for(a&&c.reverse();b--;){var k=c[b];if(typeof k!="function")throw new nr(s);if(O&&!B&&Ta(k)=="wrapper")var B=new rr([],!0)}for(b=B?b:p;++b<p;){k=c[b];var j=Ta(k),X=j=="wrapper"?lu(k):n;X&&_u(X[0])&&X[1]==(U|N|G|H)&&!X[4].length&&X[9]==1?B=B[Ta(X[0])].apply(B,X[3]):B=k.length==1&&_u(k)?B[j]():B.thru(k)}return function(){var de=arguments,_e=de[0];if(B&&de.length==1&&it(_e))return B.plant(_e).value();for(var me=0,Le=p?c[me].apply(this,de):_e;++me<p;)Le=c[me].call(this,Le);return Le}})}function La(a,c,p,b,O,k,B,j,X,de){var _e=c&U,me=c&w,Le=c&y,Pe=c&(N|T),qe=c&re,dt=Le?n:fs(a);function Xe(){for(var ht=arguments.length,pt=ie(ht),Fn=ht;Fn--;)pt[Fn]=arguments[Fn];if(Pe)var mn=lo(Xe),zn=P1(pt,mn);if(b&&(pt=ig(pt,b,O,Pe)),k&&(pt=og(pt,k,B,Pe)),ht-=zn,Pe&&ht<de){var Vt=ri(pt,mn);return fg(a,c,La,Xe.placeholder,p,pt,Vt,j,X,de-ht)}var mr=me?p:this,jr=Le?mr[a]:a;return ht=pt.length,j?pt=q0(pt,j):qe&&ht>1&&pt.reverse(),_e&&X<ht&&(pt.length=X),this&&this!==sn&&this instanceof Xe&&(jr=dt||fs(jr)),jr.apply(mr,pt)}return Xe}function dg(a,c){return function(p,b){return r0(p,a,c(b),{})}}function Ra(a,c){return function(p,b){var O;if(p===n&&b===n)return c;if(p!==n&&(O=p),b!==n){if(O===n)return b;typeof p=="string"||typeof b=="string"?(p=Un(p),b=Un(b)):(p=Xf(p),b=Xf(b)),O=a(p,b)}return O}}function iu(a){return Br(function(c){return c=Pt(c,$n(Ke())),ft(function(p){var b=this;return a(c,function(O){return Mn(O,b,p)})})})}function Na(a,c){c=c===n?" ":Un(c);var p=c.length;if(p<2)return p?Zc(c,a):c;var b=Zc(c,ma(a/eo(c)));return Ji(c)?li(hr(b),0,a).join(""):b.slice(0,a)}function L0(a,c,p,b){var O=c&w,k=fs(a);function B(){for(var j=-1,X=arguments.length,de=-1,_e=b.length,me=ie(_e+X),Le=this&&this!==sn&&this instanceof B?k:a;++de<_e;)me[de]=b[de];for(;X--;)me[de++]=arguments[++j];return Mn(Le,O?p:this,me)}return B}function _g(a){return function(c,p,b){return b&&typeof b!="number"&&pn(c,p,b)&&(p=b=n),c=Yr(c),p===n?(p=c,c=0):p=Yr(p),b=b===n?c<p?1:-1:Yr(b),h0(c,p,b,a)}}function ka(a){return function(c,p){return typeof c=="string"&&typeof p=="string"||(c=ar(c),p=ar(p)),a(c,p)}}function fg(a,c,p,b,O,k,B,j,X,de){var _e=c&N,me=_e?B:n,Le=_e?n:B,Pe=_e?k:n,qe=_e?n:k;c|=_e?G:K,c&=~(_e?K:G),c&x||(c&=-4);var dt=[a,c,O,Pe,me,qe,Le,j,X,de],Xe=p.apply(n,dt);return _u(a)&&Og(Xe,dt),Xe.placeholder=b,xg(Xe,a,c)}function ou(a){var c=Qt[a];return function(p,b){if(p=ar(p),b=b==null?0:_n(ut(b),292),b&&xf(p)){var O=(xt(p)+"e").split("e"),k=c(O[0]+"e"+(+O[1]+b));return O=(xt(k)+"e").split("e"),+(O[0]+"e"+(+O[1]-b))}return c(p)}}var R0=ro&&1/la(new ro([,-0]))[1]==Ie?function(a){return new ro(a)}:Au;function gg(a){return function(c){var p=fn(c);return p==xe?Mc(c):p==In?V1(c):z1(c,a(c))}}function Pr(a,c,p,b,O,k,B,j){var X=c&y;if(!X&&typeof a!="function")throw new nr(s);var de=b?b.length:0;if(de||(c&=-97,b=O=n),B=B===n?B:Jt(ut(B),0),j=j===n?j:ut(j),de-=O?O.length:0,c&K){var _e=b,me=O;b=O=n}var Le=X?n:lu(a),Pe=[a,c,p,b,O,_e,me,k,B,j];if(Le&&j0(Pe,Le),a=Pe[0],c=Pe[1],p=Pe[2],b=Pe[3],O=Pe[4],j=Pe[9]=Pe[9]===n?X?0:a.length:Jt(Pe[9]-de,0),!j&&c&(N|T)&&(c&=-25),!c||c==w)var qe=S0(a,c,p);else c==N||c==T?qe=D0(a,c,j):(c==G||c==(w|G))&&!O.length?qe=L0(a,c,p,b):qe=La.apply(n,Pe);var dt=Le?Vf:Og;return xg(dt(qe,Pe),a,c)}function hg(a,c,p,b){return a===n||pr(a,no[p])&&!St.call(b,p)?c:a}function vg(a,c,p,b,O,k){return Ht(a)&&Ht(c)&&(k.set(c,a),xa(a,c,n,vg,k),k.delete(c)),a}function N0(a){return vs(a)?n:a}function pg(a,c,p,b,O,k){var B=p&E,j=a.length,X=c.length;if(j!=X&&!(B&&X>j))return!1;var de=k.get(a),_e=k.get(c);if(de&&_e)return de==c&&_e==a;var me=-1,Le=!0,Pe=p&C?new Di:n;for(k.set(a,c),k.set(c,a);++me<j;){var qe=a[me],dt=c[me];if(b)var Xe=B?b(dt,qe,me,c,a,k):b(qe,dt,me,a,c,k);if(Xe!==n){if(Xe)continue;Le=!1;break}if(Pe){if(!Dc(c,function(ht,pt){if(!ns(Pe,pt)&&(qe===ht||O(qe,ht,p,b,k)))return Pe.push(pt)})){Le=!1;break}}else if(!(qe===dt||O(qe,dt,p,b,k))){Le=!1;break}}return k.delete(a),k.delete(c),Le}function k0(a,c,p,b,O,k,B){switch(p){case Xi:if(a.byteLength!=c.byteLength||a.byteOffset!=c.byteOffset)return!1;a=a.buffer,c=c.buffer;case ts:return!(a.byteLength!=c.byteLength||!k(new ga(a),new ga(c)));case yn:case dn:case ke:return pr(+a,+c);case Ir:return a.name==c.name&&a.message==c.message;case Ii:case Oi:return a==c+"";case xe:var j=Mc;case In:var X=b&E;if(j||(j=la),a.size!=c.size&&!X)return!1;var de=B.get(a);if(de)return de==c;b|=C,B.set(a,c);var _e=pg(j(a),j(c),b,O,k,B);return B.delete(a),_e;case qi:if(as)return as.call(a)==as.call(c)}return!1}function T0(a,c,p,b,O,k){var B=p&E,j=su(a),X=j.length,de=su(c),_e=de.length;if(X!=_e&&!B)return!1;for(var me=X;me--;){var Le=j[me];if(!(B?Le in c:St.call(c,Le)))return!1}var Pe=k.get(a),qe=k.get(c);if(Pe&&qe)return Pe==c&&qe==a;var dt=!0;k.set(a,c),k.set(c,a);for(var Xe=B;++me<X;){Le=j[me];var ht=a[Le],pt=c[Le];if(b)var Fn=B?b(pt,ht,Le,c,a,k):b(ht,pt,Le,a,c,k);if(!(Fn===n?ht===pt||O(ht,pt,p,b,k):Fn)){dt=!1;break}Xe||(Xe=Le=="constructor")}if(dt&&!Xe){var mn=a.constructor,zn=c.constructor;mn!=zn&&"constructor"in a&&"constructor"in c&&!(typeof mn=="function"&&mn instanceof mn&&typeof zn=="function"&&zn instanceof zn)&&(dt=!1)}return k.delete(a),k.delete(c),dt}function Br(a){return gu(yg(a,n,Ng),a+"")}function su(a){return Uf(a,rn,uu)}function au(a){return Uf(a,An,mg)}var lu=ba?function(a){return ba.get(a)}:Au;function Ta(a){for(var c=a.name+"",p=io[c],b=St.call(io,c)?p.length:0;b--;){var O=p[b],k=O.func;if(k==null||k==a)return O.name}return c}function lo(a){var c=St.call(R,"placeholder")?R:a;return c.placeholder}function Ke(){var a=R.iteratee||Ou;return a=a===Ou?zf:a,arguments.length?a(arguments[0],arguments[1]):a}function Ma(a,c){var p=a.__data__;return B0(c)?p[typeof c=="string"?"string":"hash"]:p.map}function cu(a){for(var c=rn(a),p=c.length;p--;){var b=c[p],O=a[b];c[p]=[b,O,Cg(O)]}return c}function Ni(a,c){var p=Y1(a,c);return Ff(p)?p:n}function M0(a){var c=St.call(a,Ai),p=a[Ai];try{a[Ai]=n;var b=!0}catch{}var O=_a.call(a);return b&&(c?a[Ai]=p:delete a[Ai]),O}var uu=Uc?function(a){return a==null?[]:(a=kt(a),ti(Uc(a),function(c){return If.call(a,c)}))}:Su,mg=Uc?function(a){for(var c=[];a;)ni(c,uu(a)),a=ha(a);return c}:Su,fn=vn;(Gc&&fn(new Gc(new ArrayBuffer(1)))!=Xi||is&&fn(new is)!=xe||Fc&&fn(Fc.resolve())!=ta||ro&&fn(new ro)!=In||os&&fn(new os)!=tt)&&(fn=function(a){var c=vn(a),p=c==Tt?a.constructor:n,b=p?ki(p):"";if(b)switch(b){case pE:return Xi;case mE:return xe;case EE:return ta;case bE:return In;case CE:return tt}return c});function $0(a,c,p){for(var b=-1,O=p.length;++b<O;){var k=p[b],B=k.size;switch(k.type){case"drop":a+=B;break;case"dropRight":c-=B;break;case"take":c=_n(c,a+B);break;case"takeRight":a=Jt(a,c-B);break}}return{start:a,end:c}}function U0(a){var c=a.match(Hm);return c?c[1].split(Wm):[]}function Eg(a,c,p){c=ai(c,a);for(var b=-1,O=c.length,k=!1;++b<O;){var B=Ar(c[b]);if(!(k=a!=null&&p(a,B)))break;a=a[B]}return k||++b!=O?k:(O=a==null?0:a.length,!!O&&Ba(O)&&Hr(B,O)&&(it(a)||Ti(a)))}function G0(a){var c=a.length,p=new a.constructor(c);return c&&typeof a[0]=="string"&&St.call(a,"index")&&(p.index=a.index,p.input=a.input),p}function bg(a){return typeof a.constructor=="function"&&!gs(a)?oo(ha(a)):{}}function F0(a,c,p){var b=a.constructor;switch(c){case ts:return ru(a);case yn:case dn:return new b(+a);case Xi:return w0(a,p);case cc:case uc:case dc:case _c:case fc:case gc:case hc:case vc:case pc:return ng(a,p);case xe:return new b;case ke:case Oi:return new b(a);case Ii:return y0(a);case In:return new b;case qi:return I0(a)}}function z0(a,c){var p=c.length;if(!p)return a;var b=p-1;return c[b]=(p>1?"& ":"")+c[b],c=c.join(p>2?", ":" "),a.replace(Bm,`{
/* [wrapped with `+c+`] */
`)}function P0(a){return it(a)||Ti(a)||!!(Of&&a&&a[Of])}function Hr(a,c){var p=typeof a;return c=c??Oe,!!c&&(p=="number"||p!="symbol"&&Jm.test(a))&&a>-1&&a%1==0&&a<c}function pn(a,c,p){if(!Ht(p))return!1;var b=typeof c;return(b=="number"?xn(p)&&Hr(c,p.length):b=="string"&&c in p)?pr(p[c],a):!1}function du(a,c){if(it(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||Gn(a)?!0:Gm.test(a)||!Um.test(a)||c!=null&&a in kt(c)}function B0(a){var c=typeof a;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?a!=="__proto__":a===null}function _u(a){var c=Ta(a),p=R[c];if(typeof p!="function"||!(c in vt.prototype))return!1;if(a===p)return!0;var b=lu(p);return!!b&&a===b[0]}function H0(a){return!!Cf&&Cf in a}var W0=ua?Wr:Du;function gs(a){var c=a&&a.constructor,p=typeof c=="function"&&c.prototype||no;return a===p}function Cg(a){return a===a&&!Ht(a)}function wg(a,c){return function(p){return p==null?!1:p[a]===c&&(c!==n||a in kt(p))}}function Y0(a){var c=za(a,function(b){return p.size===d&&p.clear(),b}),p=c.cache;return c}function j0(a,c){var p=a[1],b=c[1],O=p|b,k=O<(w|y|U),B=b==U&&p==N||b==U&&p==H&&a[7].length<=c[8]||b==(U|H)&&c[7].length<=c[8]&&p==N;if(!(k||B))return a;b&w&&(a[2]=c[2],O|=p&w?0:x);var j=c[3];if(j){var X=a[3];a[3]=X?ig(X,j,c[4]):j,a[4]=X?ri(a[3],f):c[4]}return j=c[5],j&&(X=a[5],a[5]=X?og(X,j,c[6]):j,a[6]=X?ri(a[5],f):c[6]),j=c[7],j&&(a[7]=j),b&U&&(a[8]=a[8]==null?c[8]:_n(a[8],c[8])),a[9]==null&&(a[9]=c[9]),a[0]=c[0],a[1]=O,a}function K0(a){var c=[];if(a!=null)for(var p in kt(a))c.push(p);return c}function V0(a){return _a.call(a)}function yg(a,c,p){return c=Jt(c===n?a.length-1:c,0),function(){for(var b=arguments,O=-1,k=Jt(b.length-c,0),B=ie(k);++O<k;)B[O]=b[c+O];O=-1;for(var j=ie(c+1);++O<c;)j[O]=b[O];return j[c]=p(B),Mn(a,this,j)}}function Ig(a,c){return c.length<2?a:Ri(a,or(c,0,-1))}function q0(a,c){for(var p=a.length,b=_n(c.length,p),O=On(a);b--;){var k=c[b];a[b]=Hr(k,p)?O[k]:n}return a}function fu(a,c){if(!(c==="constructor"&&typeof a[c]=="function")&&c!="__proto__")return a[c]}var Og=Ag(Vf),hs=uE||function(a,c){return sn.setTimeout(a,c)},gu=Ag(m0);function xg(a,c,p){var b=c+"";return gu(a,z0(b,X0(U0(b),p)))}function Ag(a){var c=0,p=0;return function(){var b=gE(),O=we-(b-p);if(p=b,O>0){if(++c>=se)return arguments[0]}else c=0;return a.apply(n,arguments)}}function $a(a,c){var p=-1,b=a.length,O=b-1;for(c=c===n?b:c;++p<c;){var k=Xc(p,O),B=a[k];a[k]=a[p],a[p]=B}return a.length=c,a}var Sg=Y0(function(a){var c=[];return a.charCodeAt(0)===46&&c.push(""),a.replace(Fm,function(p,b,O,k){c.push(O?k.replace(Km,"$1"):b||p)}),c});function Ar(a){if(typeof a=="string"||Gn(a))return a;var c=a+"";return c=="0"&&1/a==-1/0?"-0":c}function ki(a){if(a!=null){try{return da.call(a)}catch{}try{return a+""}catch{}}return""}function X0(a,c){return tr(ct,function(p){var b="_."+p[0];c&p[1]&&!sa(a,b)&&a.push(b)}),a.sort()}function Dg(a){if(a instanceof vt)return a.clone();var c=new rr(a.__wrapped__,a.__chain__);return c.__actions__=On(a.__actions__),c.__index__=a.__index__,c.__values__=a.__values__,c}function Z0(a,c,p){(p?pn(a,c,p):c===n)?c=1:c=Jt(ut(c),0);var b=a==null?0:a.length;if(!b||c<1)return[];for(var O=0,k=0,B=ie(ma(b/c));O<b;)B[k++]=or(a,O,O+=c);return B}function Q0(a){for(var c=-1,p=a==null?0:a.length,b=0,O=[];++c<p;){var k=a[c];k&&(O[b++]=k)}return O}function J0(){var a=arguments.length;if(!a)return[];for(var c=ie(a-1),p=arguments[0],b=a;b--;)c[b-1]=arguments[b];return ni(it(p)?On(p):[p],an(c,1))}var eb=ft(function(a,c){return Kt(a)?cs(a,an(c,1,Kt,!0)):[]}),tb=ft(function(a,c){var p=sr(c);return Kt(p)&&(p=n),Kt(a)?cs(a,an(c,1,Kt,!0),Ke(p,2)):[]}),nb=ft(function(a,c){var p=sr(c);return Kt(p)&&(p=n),Kt(a)?cs(a,an(c,1,Kt,!0),n,p):[]});function rb(a,c,p){var b=a==null?0:a.length;return b?(c=p||c===n?1:ut(c),or(a,c<0?0:c,b)):[]}function ib(a,c,p){var b=a==null?0:a.length;return b?(c=p||c===n?1:ut(c),c=b-c,or(a,0,c<0?0:c)):[]}function ob(a,c){return a&&a.length?Sa(a,Ke(c,3),!0,!0):[]}function sb(a,c){return a&&a.length?Sa(a,Ke(c,3),!0):[]}function ab(a,c,p,b){var O=a==null?0:a.length;return O?(p&&typeof p!="number"&&pn(a,c,p)&&(p=0,b=O),JE(a,c,p,b)):[]}function Lg(a,c,p){var b=a==null?0:a.length;if(!b)return-1;var O=p==null?0:ut(p);return O<0&&(O=Jt(b+O,0)),aa(a,Ke(c,3),O)}function Rg(a,c,p){var b=a==null?0:a.length;if(!b)return-1;var O=b-1;return p!==n&&(O=ut(p),O=p<0?Jt(b+O,0):_n(O,b-1)),aa(a,Ke(c,3),O,!0)}function Ng(a){var c=a==null?0:a.length;return c?an(a,1):[]}function lb(a){var c=a==null?0:a.length;return c?an(a,Ie):[]}function cb(a,c){var p=a==null?0:a.length;return p?(c=c===n?1:ut(c),an(a,c)):[]}function ub(a){for(var c=-1,p=a==null?0:a.length,b={};++c<p;){var O=a[c];b[O[0]]=O[1]}return b}function kg(a){return a&&a.length?a[0]:n}function db(a,c,p){var b=a==null?0:a.length;if(!b)return-1;var O=p==null?0:ut(p);return O<0&&(O=Jt(b+O,0)),Qi(a,c,O)}function _b(a){var c=a==null?0:a.length;return c?or(a,0,-1):[]}var fb=ft(function(a){var c=Pt(a,tu);return c.length&&c[0]===a[0]?Yc(c):[]}),gb=ft(function(a){var c=sr(a),p=Pt(a,tu);return c===sr(p)?c=n:p.pop(),p.length&&p[0]===a[0]?Yc(p,Ke(c,2)):[]}),hb=ft(function(a){var c=sr(a),p=Pt(a,tu);return c=typeof c=="function"?c:n,c&&p.pop(),p.length&&p[0]===a[0]?Yc(p,n,c):[]});function vb(a,c){return a==null?"":_E.call(a,c)}function sr(a){var c=a==null?0:a.length;return c?a[c-1]:n}function pb(a,c,p){var b=a==null?0:a.length;if(!b)return-1;var O=b;return p!==n&&(O=ut(p),O=O<0?Jt(b+O,0):_n(O,b-1)),c===c?X1(a,c,O):aa(a,ff,O,!0)}function mb(a,c){return a&&a.length?Wf(a,ut(c)):n}var Eb=ft(Tg);function Tg(a,c){return a&&a.length&&c&&c.length?qc(a,c):a}function bb(a,c,p){return a&&a.length&&c&&c.length?qc(a,c,Ke(p,2)):a}function Cb(a,c,p){return a&&a.length&&c&&c.length?qc(a,c,n,p):a}var wb=Br(function(a,c){var p=a==null?0:a.length,b=Pc(a,c);return Kf(a,Pt(c,function(O){return Hr(O,p)?+O:O}).sort(rg)),b});function yb(a,c){var p=[];if(!(a&&a.length))return p;var b=-1,O=[],k=a.length;for(c=Ke(c,3);++b<k;){var B=a[b];c(B,b,a)&&(p.push(B),O.push(b))}return Kf(a,O),p}function hu(a){return a==null?a:vE.call(a)}function Ib(a,c,p){var b=a==null?0:a.length;return b?(p&&typeof p!="number"&&pn(a,c,p)?(c=0,p=b):(c=c==null?0:ut(c),p=p===n?b:ut(p)),or(a,c,p)):[]}function Ob(a,c){return Aa(a,c)}function xb(a,c,p){return Qc(a,c,Ke(p,2))}function Ab(a,c){var p=a==null?0:a.length;if(p){var b=Aa(a,c);if(b<p&&pr(a[b],c))return b}return-1}function Sb(a,c){return Aa(a,c,!0)}function Db(a,c,p){return Qc(a,c,Ke(p,2),!0)}function Lb(a,c){var p=a==null?0:a.length;if(p){var b=Aa(a,c,!0)-1;if(pr(a[b],c))return b}return-1}function Rb(a){return a&&a.length?qf(a):[]}function Nb(a,c){return a&&a.length?qf(a,Ke(c,2)):[]}function kb(a){var c=a==null?0:a.length;return c?or(a,1,c):[]}function Tb(a,c,p){return a&&a.length?(c=p||c===n?1:ut(c),or(a,0,c<0?0:c)):[]}function Mb(a,c,p){var b=a==null?0:a.length;return b?(c=p||c===n?1:ut(c),c=b-c,or(a,c<0?0:c,b)):[]}function $b(a,c){return a&&a.length?Sa(a,Ke(c,3),!1,!0):[]}function Ub(a,c){return a&&a.length?Sa(a,Ke(c,3)):[]}var Gb=ft(function(a){return si(an(a,1,Kt,!0))}),Fb=ft(function(a){var c=sr(a);return Kt(c)&&(c=n),si(an(a,1,Kt,!0),Ke(c,2))}),zb=ft(function(a){var c=sr(a);return c=typeof c=="function"?c:n,si(an(a,1,Kt,!0),n,c)});function Pb(a){return a&&a.length?si(a):[]}function Bb(a,c){return a&&a.length?si(a,Ke(c,2)):[]}function Hb(a,c){return c=typeof c=="function"?c:n,a&&a.length?si(a,n,c):[]}function vu(a){if(!(a&&a.length))return[];var c=0;return a=ti(a,function(p){if(Kt(p))return c=Jt(p.length,c),!0}),kc(c,function(p){return Pt(a,Lc(p))})}function Mg(a,c){if(!(a&&a.length))return[];var p=vu(a);return c==null?p:Pt(p,function(b){return Mn(c,n,b)})}var Wb=ft(function(a,c){return Kt(a)?cs(a,c):[]}),Yb=ft(function(a){return eu(ti(a,Kt))}),jb=ft(function(a){var c=sr(a);return Kt(c)&&(c=n),eu(ti(a,Kt),Ke(c,2))}),Kb=ft(function(a){var c=sr(a);return c=typeof c=="function"?c:n,eu(ti(a,Kt),n,c)}),Vb=ft(vu);function qb(a,c){return Jf(a||[],c||[],ls)}function Xb(a,c){return Jf(a||[],c||[],_s)}var Zb=ft(function(a){var c=a.length,p=c>1?a[c-1]:n;return p=typeof p=="function"?(a.pop(),p):n,Mg(a,p)});function $g(a){var c=R(a);return c.__chain__=!0,c}function Qb(a,c){return c(a),a}function Ua(a,c){return c(a)}var Jb=Br(function(a){var c=a.length,p=c?a[0]:0,b=this.__wrapped__,O=function(k){return Pc(k,a)};return c>1||this.__actions__.length||!(b instanceof vt)||!Hr(p)?this.thru(O):(b=b.slice(p,+p+(c?1:0)),b.__actions__.push({func:Ua,args:[O],thisArg:n}),new rr(b,this.__chain__).thru(function(k){return c&&!k.length&&k.push(n),k}))});function eC(){return $g(this)}function tC(){return new rr(this.value(),this.__chain__)}function nC(){this.__values__===n&&(this.__values__=Xg(this.value()));var a=this.__index__>=this.__values__.length,c=a?n:this.__values__[this.__index__++];return{done:a,value:c}}function rC(){return this}function iC(a){for(var c,p=this;p instanceof wa;){var b=Dg(p);b.__index__=0,b.__values__=n,c?O.__wrapped__=b:c=b;var O=b;p=p.__wrapped__}return O.__wrapped__=a,c}function oC(){var a=this.__wrapped__;if(a instanceof vt){var c=a;return this.__actions__.length&&(c=new vt(this)),c=c.reverse(),c.__actions__.push({func:Ua,args:[hu],thisArg:n}),new rr(c,this.__chain__)}return this.thru(hu)}function sC(){return Qf(this.__wrapped__,this.__actions__)}var aC=Da(function(a,c,p){St.call(a,p)?++a[p]:zr(a,p,1)});function lC(a,c,p){var b=it(a)?df:QE;return p&&pn(a,c,p)&&(c=n),b(a,Ke(c,3))}function cC(a,c){var p=it(a)?ti:Mf;return p(a,Ke(c,3))}var uC=cg(Lg),dC=cg(Rg);function _C(a,c){return an(Ga(a,c),1)}function fC(a,c){return an(Ga(a,c),Ie)}function gC(a,c,p){return p=p===n?1:ut(p),an(Ga(a,c),p)}function Ug(a,c){var p=it(a)?tr:oi;return p(a,Ke(c,3))}function Gg(a,c){var p=it(a)?k1:Tf;return p(a,Ke(c,3))}var hC=Da(function(a,c,p){St.call(a,p)?a[p].push(c):zr(a,p,[c])});function vC(a,c,p,b){a=xn(a)?a:uo(a),p=p&&!b?ut(p):0;var O=a.length;return p<0&&(p=Jt(O+p,0)),Ha(a)?p<=O&&a.indexOf(c,p)>-1:!!O&&Qi(a,c,p)>-1}var pC=ft(function(a,c,p){var b=-1,O=typeof c=="function",k=xn(a)?ie(a.length):[];return oi(a,function(B){k[++b]=O?Mn(c,B,p):us(B,c,p)}),k}),mC=Da(function(a,c,p){zr(a,p,c)});function Ga(a,c){var p=it(a)?Pt:Pf;return p(a,Ke(c,3))}function EC(a,c,p,b){return a==null?[]:(it(c)||(c=c==null?[]:[c]),p=b?n:p,it(p)||(p=p==null?[]:[p]),Yf(a,c,p))}var bC=Da(function(a,c,p){a[p?0:1].push(c)},function(){return[[],[]]});function CC(a,c,p){var b=it(a)?Sc:hf,O=arguments.length<3;return b(a,Ke(c,4),p,O,oi)}function wC(a,c,p){var b=it(a)?T1:hf,O=arguments.length<3;return b(a,Ke(c,4),p,O,Tf)}function yC(a,c){var p=it(a)?ti:Mf;return p(a,Pa(Ke(c,3)))}function IC(a){var c=it(a)?Lf:v0;return c(a)}function OC(a,c,p){(p?pn(a,c,p):c===n)?c=1:c=ut(c);var b=it(a)?KE:p0;return b(a,c)}function xC(a){var c=it(a)?VE:E0;return c(a)}function AC(a){if(a==null)return 0;if(xn(a))return Ha(a)?eo(a):a.length;var c=fn(a);return c==xe||c==In?a.size:Kc(a).length}function SC(a,c,p){var b=it(a)?Dc:b0;return p&&pn(a,c,p)&&(c=n),b(a,Ke(c,3))}var DC=ft(function(a,c){if(a==null)return[];var p=c.length;return p>1&&pn(a,c[0],c[1])?c=[]:p>2&&pn(c[0],c[1],c[2])&&(c=[c[0]]),Yf(a,an(c,1),[])}),Fa=cE||function(){return sn.Date.now()};function LC(a,c){if(typeof c!="function")throw new nr(s);return a=ut(a),function(){if(--a<1)return c.apply(this,arguments)}}function Fg(a,c,p){return c=p?n:c,c=a&&c==null?a.length:c,Pr(a,U,n,n,n,n,c)}function zg(a,c){var p;if(typeof c!="function")throw new nr(s);return a=ut(a),function(){return--a>0&&(p=c.apply(this,arguments)),a<=1&&(c=n),p}}var pu=ft(function(a,c,p){var b=w;if(p.length){var O=ri(p,lo(pu));b|=G}return Pr(a,b,c,p,O)}),Pg=ft(function(a,c,p){var b=w|y;if(p.length){var O=ri(p,lo(Pg));b|=G}return Pr(c,b,a,p,O)});function Bg(a,c,p){c=p?n:c;var b=Pr(a,N,n,n,n,n,n,c);return b.placeholder=Bg.placeholder,b}function Hg(a,c,p){c=p?n:c;var b=Pr(a,T,n,n,n,n,n,c);return b.placeholder=Hg.placeholder,b}function Wg(a,c,p){var b,O,k,B,j,X,de=0,_e=!1,me=!1,Le=!0;if(typeof a!="function")throw new nr(s);c=ar(c)||0,Ht(p)&&(_e=!!p.leading,me="maxWait"in p,k=me?Jt(ar(p.maxWait)||0,c):k,Le="trailing"in p?!!p.trailing:Le);function Pe(Vt){var mr=b,jr=O;return b=O=n,de=Vt,B=a.apply(jr,mr),B}function qe(Vt){return de=Vt,j=hs(ht,c),_e?Pe(Vt):B}function dt(Vt){var mr=Vt-X,jr=Vt-de,ch=c-mr;return me?_n(ch,k-jr):ch}function Xe(Vt){var mr=Vt-X,jr=Vt-de;return X===n||mr>=c||mr<0||me&&jr>=k}function ht(){var Vt=Fa();if(Xe(Vt))return pt(Vt);j=hs(ht,dt(Vt))}function pt(Vt){return j=n,Le&&b?Pe(Vt):(b=O=n,B)}function Fn(){j!==n&&eg(j),de=0,b=X=O=j=n}function mn(){return j===n?B:pt(Fa())}function zn(){var Vt=Fa(),mr=Xe(Vt);if(b=arguments,O=this,X=Vt,mr){if(j===n)return qe(X);if(me)return eg(j),j=hs(ht,c),Pe(X)}return j===n&&(j=hs(ht,c)),B}return zn.cancel=Fn,zn.flush=mn,zn}var RC=ft(function(a,c){return kf(a,1,c)}),NC=ft(function(a,c,p){return kf(a,ar(c)||0,p)});function kC(a){return Pr(a,re)}function za(a,c){if(typeof a!="function"||c!=null&&typeof c!="function")throw new nr(s);var p=function(){var b=arguments,O=c?c.apply(this,b):b[0],k=p.cache;if(k.has(O))return k.get(O);var B=a.apply(this,b);return p.cache=k.set(O,B)||k,B};return p.cache=new(za.Cache||Fr),p}za.Cache=Fr;function Pa(a){if(typeof a!="function")throw new nr(s);return function(){var c=arguments;switch(c.length){case 0:return!a.call(this);case 1:return!a.call(this,c[0]);case 2:return!a.call(this,c[0],c[1]);case 3:return!a.call(this,c[0],c[1],c[2])}return!a.apply(this,c)}}function TC(a){return zg(2,a)}var MC=C0(function(a,c){c=c.length==1&&it(c[0])?Pt(c[0],$n(Ke())):Pt(an(c,1),$n(Ke()));var p=c.length;return ft(function(b){for(var O=-1,k=_n(b.length,p);++O<k;)b[O]=c[O].call(this,b[O]);return Mn(a,this,b)})}),mu=ft(function(a,c){var p=ri(c,lo(mu));return Pr(a,G,n,c,p)}),Yg=ft(function(a,c){var p=ri(c,lo(Yg));return Pr(a,K,n,c,p)}),$C=Br(function(a,c){return Pr(a,H,n,n,n,c)});function UC(a,c){if(typeof a!="function")throw new nr(s);return c=c===n?c:ut(c),ft(a,c)}function GC(a,c){if(typeof a!="function")throw new nr(s);return c=c==null?0:Jt(ut(c),0),ft(function(p){var b=p[c],O=li(p,0,c);return b&&ni(O,b),Mn(a,this,O)})}function FC(a,c,p){var b=!0,O=!0;if(typeof a!="function")throw new nr(s);return Ht(p)&&(b="leading"in p?!!p.leading:b,O="trailing"in p?!!p.trailing:O),Wg(a,c,{leading:b,maxWait:c,trailing:O})}function zC(a){return Fg(a,1)}function PC(a,c){return mu(nu(c),a)}function BC(){if(!arguments.length)return[];var a=arguments[0];return it(a)?a:[a]}function HC(a){return ir(a,m)}function WC(a,c){return c=typeof c=="function"?c:n,ir(a,m,c)}function YC(a){return ir(a,g|m)}function jC(a,c){return c=typeof c=="function"?c:n,ir(a,g|m,c)}function KC(a,c){return c==null||Nf(a,c,rn(c))}function pr(a,c){return a===c||a!==a&&c!==c}var VC=ka(Wc),qC=ka(function(a,c){return a>=c}),Ti=Gf(function(){return arguments}())?Gf:function(a){return Yt(a)&&St.call(a,"callee")&&!If.call(a,"callee")},it=ie.isArray,XC=of?$n(of):i0;function xn(a){return a!=null&&Ba(a.length)&&!Wr(a)}function Kt(a){return Yt(a)&&xn(a)}function ZC(a){return a===!0||a===!1||Yt(a)&&vn(a)==yn}var ci=dE||Du,QC=sf?$n(sf):o0;function JC(a){return Yt(a)&&a.nodeType===1&&!vs(a)}function ew(a){if(a==null)return!0;if(xn(a)&&(it(a)||typeof a=="string"||typeof a.splice=="function"||ci(a)||co(a)||Ti(a)))return!a.length;var c=fn(a);if(c==xe||c==In)return!a.size;if(gs(a))return!Kc(a).length;for(var p in a)if(St.call(a,p))return!1;return!0}function tw(a,c){return ds(a,c)}function nw(a,c,p){p=typeof p=="function"?p:n;var b=p?p(a,c):n;return b===n?ds(a,c,n,p):!!b}function Eu(a){if(!Yt(a))return!1;var c=vn(a);return c==Ir||c==yr||typeof a.message=="string"&&typeof a.name=="string"&&!vs(a)}function rw(a){return typeof a=="number"&&xf(a)}function Wr(a){if(!Ht(a))return!1;var c=vn(a);return c==Ur||c==Be||c==yt||c==na}function jg(a){return typeof a=="number"&&a==ut(a)}function Ba(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=Oe}function Ht(a){var c=typeof a;return a!=null&&(c=="object"||c=="function")}function Yt(a){return a!=null&&typeof a=="object"}var Kg=af?$n(af):a0;function iw(a,c){return a===c||jc(a,c,cu(c))}function ow(a,c,p){return p=typeof p=="function"?p:n,jc(a,c,cu(c),p)}function sw(a){return Vg(a)&&a!=+a}function aw(a){if(W0(a))throw new nt(o);return Ff(a)}function lw(a){return a===null}function cw(a){return a==null}function Vg(a){return typeof a=="number"||Yt(a)&&vn(a)==ke}function vs(a){if(!Yt(a)||vn(a)!=Tt)return!1;var c=ha(a);if(c===null)return!0;var p=St.call(c,"constructor")&&c.constructor;return typeof p=="function"&&p instanceof p&&da.call(p)==oE}var bu=lf?$n(lf):l0;function uw(a){return jg(a)&&a>=-9007199254740991&&a<=Oe}var qg=cf?$n(cf):c0;function Ha(a){return typeof a=="string"||!it(a)&&Yt(a)&&vn(a)==Oi}function Gn(a){return typeof a=="symbol"||Yt(a)&&vn(a)==qi}var co=uf?$n(uf):u0;function dw(a){return a===n}function _w(a){return Yt(a)&&fn(a)==tt}function fw(a){return Yt(a)&&vn(a)==es}var gw=ka(Vc),hw=ka(function(a,c){return a<=c});function Xg(a){if(!a)return[];if(xn(a))return Ha(a)?hr(a):On(a);if(rs&&a[rs])return K1(a[rs]());var c=fn(a),p=c==xe?Mc:c==In?la:uo;return p(a)}function Yr(a){if(!a)return a===0?a:0;if(a=ar(a),a===Ie||a===-1/0){var c=a<0?-1:1;return c*Ae}return a===a?a:0}function ut(a){var c=Yr(a),p=c%1;return c===c?p?c-p:c:0}function Zg(a){return a?Li(ut(a),0,Ge):0}function ar(a){if(typeof a=="number")return a;if(Gn(a))return De;if(Ht(a)){var c=typeof a.valueOf=="function"?a.valueOf():a;a=Ht(c)?c+"":c}if(typeof a!="string")return a===0?a:+a;a=vf(a);var p=Xm.test(a);return p||Qm.test(a)?L1(a.slice(2),p?2:8):qm.test(a)?De:+a}function Qg(a){return xr(a,An(a))}function vw(a){return a?Li(ut(a),-9007199254740991,Oe):a===0?a:0}function xt(a){return a==null?"":Un(a)}var pw=so(function(a,c){if(gs(c)||xn(c)){xr(c,rn(c),a);return}for(var p in c)St.call(c,p)&&ls(a,p,c[p])}),Jg=so(function(a,c){xr(c,An(c),a)}),Wa=so(function(a,c,p,b){xr(c,An(c),a,b)}),mw=so(function(a,c,p,b){xr(c,rn(c),a,b)}),Ew=Br(Pc);function bw(a,c){var p=oo(a);return c==null?p:Rf(p,c)}var Cw=ft(function(a,c){a=kt(a);var p=-1,b=c.length,O=b>2?c[2]:n;for(O&&pn(c[0],c[1],O)&&(b=1);++p<b;)for(var k=c[p],B=An(k),j=-1,X=B.length;++j<X;){var de=B[j],_e=a[de];(_e===n||pr(_e,no[de])&&!St.call(a,de))&&(a[de]=k[de])}return a}),ww=ft(function(a){return a.push(n,vg),Mn(eh,n,a)});function yw(a,c){return _f(a,Ke(c,3),Or)}function Iw(a,c){return _f(a,Ke(c,3),Hc)}function Ow(a,c){return a==null?a:Bc(a,Ke(c,3),An)}function xw(a,c){return a==null?a:$f(a,Ke(c,3),An)}function Aw(a,c){return a&&Or(a,Ke(c,3))}function Sw(a,c){return a&&Hc(a,Ke(c,3))}function Dw(a){return a==null?[]:Oa(a,rn(a))}function Lw(a){return a==null?[]:Oa(a,An(a))}function Cu(a,c,p){var b=a==null?n:Ri(a,c);return b===n?p:b}function Rw(a,c){return a!=null&&Eg(a,c,e0)}function wu(a,c){return a!=null&&Eg(a,c,t0)}var Nw=dg(function(a,c,p){c!=null&&typeof c.toString!="function"&&(c=_a.call(c)),a[c]=p},Iu(Sn)),kw=dg(function(a,c,p){c!=null&&typeof c.toString!="function"&&(c=_a.call(c)),St.call(a,c)?a[c].push(p):a[c]=[p]},Ke),Tw=ft(us);function rn(a){return xn(a)?Df(a):Kc(a)}function An(a){return xn(a)?Df(a,!0):d0(a)}function Mw(a,c){var p={};return c=Ke(c,3),Or(a,function(b,O,k){zr(p,c(b,O,k),b)}),p}function $w(a,c){var p={};return c=Ke(c,3),Or(a,function(b,O,k){zr(p,O,c(b,O,k))}),p}var Uw=so(function(a,c,p){xa(a,c,p)}),eh=so(function(a,c,p,b){xa(a,c,p,b)}),Gw=Br(function(a,c){var p={};if(a==null)return p;var b=!1;c=Pt(c,function(k){return k=ai(k,a),b||(b=k.length>1),k}),xr(a,au(a),p),b&&(p=ir(p,g|h|m,N0));for(var O=c.length;O--;)Jc(p,c[O]);return p});function Fw(a,c){return th(a,Pa(Ke(c)))}var zw=Br(function(a,c){return a==null?{}:f0(a,c)});function th(a,c){if(a==null)return{};var p=Pt(au(a),function(b){return[b]});return c=Ke(c),jf(a,p,function(b,O){return c(b,O[0])})}function Pw(a,c,p){c=ai(c,a);var b=-1,O=c.length;for(O||(O=1,a=n);++b<O;){var k=a==null?n:a[Ar(c[b])];k===n&&(b=O,k=p),a=Wr(k)?k.call(a):k}return a}function Bw(a,c,p){return a==null?a:_s(a,c,p)}function Hw(a,c,p,b){return b=typeof b=="function"?b:n,a==null?a:_s(a,c,p,b)}var nh=gg(rn),rh=gg(An);function Ww(a,c,p){var b=it(a),O=b||ci(a)||co(a);if(c=Ke(c,4),p==null){var k=a&&a.constructor;O?p=b?new k:[]:Ht(a)?p=Wr(k)?oo(ha(a)):{}:p={}}return(O?tr:Or)(a,function(B,j,X){return c(p,B,j,X)}),p}function Yw(a,c){return a==null?!0:Jc(a,c)}function jw(a,c,p){return a==null?a:Zf(a,c,nu(p))}function Kw(a,c,p,b){return b=typeof b=="function"?b:n,a==null?a:Zf(a,c,nu(p),b)}function uo(a){return a==null?[]:Tc(a,rn(a))}function Vw(a){return a==null?[]:Tc(a,An(a))}function qw(a,c,p){return p===n&&(p=c,c=n),p!==n&&(p=ar(p),p=p===p?p:0),c!==n&&(c=ar(c),c=c===c?c:0),Li(ar(a),c,p)}function Xw(a,c,p){return c=Yr(c),p===n?(p=c,c=0):p=Yr(p),a=ar(a),n0(a,c,p)}function Zw(a,c,p){if(p&&typeof p!="boolean"&&pn(a,c,p)&&(c=p=n),p===n&&(typeof c=="boolean"?(p=c,c=n):typeof a=="boolean"&&(p=a,a=n)),a===n&&c===n?(a=0,c=1):(a=Yr(a),c===n?(c=a,a=0):c=Yr(c)),a>c){var b=a;a=c,c=b}if(p||a%1||c%1){var O=Af();return _n(a+O*(c-a+D1("1e-"+((O+"").length-1))),c)}return Xc(a,c)}var Qw=ao(function(a,c,p){return c=c.toLowerCase(),a+(p?ih(c):c)});function ih(a){return yu(xt(a).toLowerCase())}function oh(a){return a=xt(a),a&&a.replace(e1,B1).replace(E1,"")}function Jw(a,c,p){a=xt(a),c=Un(c);var b=a.length;p=p===n?b:Li(ut(p),0,b);var O=p;return p-=c.length,p>=0&&a.slice(p,O)==c}function ey(a){return a=xt(a),a&&Tm.test(a)?a.replace(M_,H1):a}function ty(a){return a=xt(a),a&&zm.test(a)?a.replace(mc,"\\$&"):a}var ny=ao(function(a,c,p){return a+(p?"-":"")+c.toLowerCase()}),ry=ao(function(a,c,p){return a+(p?" ":"")+c.toLowerCase()}),iy=lg("toLowerCase");function oy(a,c,p){a=xt(a),c=ut(c);var b=c?eo(a):0;if(!c||b>=c)return a;var O=(c-b)/2;return Na(Ea(O),p)+a+Na(ma(O),p)}function sy(a,c,p){a=xt(a),c=ut(c);var b=c?eo(a):0;return c&&b<c?a+Na(c-b,p):a}function ay(a,c,p){a=xt(a),c=ut(c);var b=c?eo(a):0;return c&&b<c?Na(c-b,p)+a:a}function ly(a,c,p){return p||c==null?c=0:c&&(c=+c),hE(xt(a).replace(Ec,""),c||0)}function cy(a,c,p){return(p?pn(a,c,p):c===n)?c=1:c=ut(c),Zc(xt(a),c)}function uy(){var a=arguments,c=xt(a[0]);return a.length<3?c:c.replace(a[1],a[2])}var dy=ao(function(a,c,p){return a+(p?"_":"")+c.toLowerCase()});function _y(a,c,p){return p&&typeof p!="number"&&pn(a,c,p)&&(c=p=n),p=p===n?Ge:p>>>0,p?(a=xt(a),a&&(typeof c=="string"||c!=null&&!bu(c))&&(c=Un(c),!c&&Ji(a))?li(hr(a),0,p):a.split(c,p)):[]}var fy=ao(function(a,c,p){return a+(p?" ":"")+yu(c)});function gy(a,c,p){return a=xt(a),p=p==null?0:Li(ut(p),0,a.length),c=Un(c),a.slice(p,p+c.length)==c}function hy(a,c,p){var b=R.templateSettings;p&&pn(a,c,p)&&(c=n),a=xt(a),c=Wa({},c,b,hg);var O=Wa({},c.imports,b.imports,hg),k=rn(O),B=Tc(O,k),j,X,de=0,_e=c.interpolate||ra,me="__p += '",Le=$c((c.escape||ra).source+"|"+_e.source+"|"+(_e===$_?Vm:ra).source+"|"+(c.evaluate||ra).source+"|$","g"),Pe="//# sourceURL="+(St.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++I1+"]")+`
`;a.replace(Le,function(Xe,ht,pt,Fn,mn,zn){return pt||(pt=Fn),me+=a.slice(de,zn).replace(t1,W1),ht&&(j=!0,me+=`' +
__e(`+ht+`) +
'`),mn&&(X=!0,me+=`';
`+mn+`;
__p += '`),pt&&(me+=`' +
((__t = (`+pt+`)) == null ? '' : __t) +
'`),de=zn+Xe.length,Xe}),me+=`';
`;var qe=St.call(c,"variable")&&c.variable;if(!qe)me=`with (obj) {
`+me+`
}
`;else if(jm.test(qe))throw new nt(l);me=(X?me.replace(Lm,""):me).replace(Rm,"$1").replace(Nm,"$1;"),me="function("+(qe||"obj")+`) {
`+(qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(j?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+me+`return __p
}`;var dt=ah(function(){return It(k,Pe+"return "+me).apply(n,B)});if(dt.source=me,Eu(dt))throw dt;return dt}function vy(a){return xt(a).toLowerCase()}function py(a){return xt(a).toUpperCase()}function my(a,c,p){if(a=xt(a),a&&(p||c===n))return vf(a);if(!a||!(c=Un(c)))return a;var b=hr(a),O=hr(c),k=pf(b,O),B=mf(b,O)+1;return li(b,k,B).join("")}function Ey(a,c,p){if(a=xt(a),a&&(p||c===n))return a.slice(0,bf(a)+1);if(!a||!(c=Un(c)))return a;var b=hr(a),O=mf(b,hr(c))+1;return li(b,0,O).join("")}function by(a,c,p){if(a=xt(a),a&&(p||c===n))return a.replace(Ec,"");if(!a||!(c=Un(c)))return a;var b=hr(a),O=pf(b,hr(c));return li(b,O).join("")}function Cy(a,c){var p=te,b=oe;if(Ht(c)){var O="separator"in c?c.separator:O;p="length"in c?ut(c.length):p,b="omission"in c?Un(c.omission):b}a=xt(a);var k=a.length;if(Ji(a)){var B=hr(a);k=B.length}if(p>=k)return a;var j=p-eo(b);if(j<1)return b;var X=B?li(B,0,j).join(""):a.slice(0,j);if(O===n)return X+b;if(B&&(j+=X.length-j),bu(O)){if(a.slice(j).search(O)){var de,_e=X;for(O.global||(O=$c(O.source,xt(U_.exec(O))+"g")),O.lastIndex=0;de=O.exec(_e);)var me=de.index;X=X.slice(0,me===n?j:me)}}else if(a.indexOf(Un(O),j)!=j){var Le=X.lastIndexOf(O);Le>-1&&(X=X.slice(0,Le))}return X+b}function wy(a){return a=xt(a),a&&km.test(a)?a.replace(T_,Z1):a}var yy=ao(function(a,c,p){return a+(p?" ":"")+c.toUpperCase()}),yu=lg("toUpperCase");function sh(a,c,p){return a=xt(a),c=p?n:c,c===n?j1(a)?eE(a):U1(a):a.match(c)||[]}var ah=ft(function(a,c){try{return Mn(a,n,c)}catch(p){return Eu(p)?p:new nt(p)}}),Iy=Br(function(a,c){return tr(c,function(p){p=Ar(p),zr(a,p,pu(a[p],a))}),a});function Oy(a){var c=a==null?0:a.length,p=Ke();return a=c?Pt(a,function(b){if(typeof b[1]!="function")throw new nr(s);return[p(b[0]),b[1]]}):[],ft(function(b){for(var O=-1;++O<c;){var k=a[O];if(Mn(k[0],this,b))return Mn(k[1],this,b)}})}function xy(a){return ZE(ir(a,g))}function Iu(a){return function(){return a}}function Ay(a,c){return a==null||a!==a?c:a}var Sy=ug(),Dy=ug(!0);function Sn(a){return a}function Ou(a){return zf(typeof a=="function"?a:ir(a,g))}function Ly(a){return Bf(ir(a,g))}function Ry(a,c){return Hf(a,ir(c,g))}var Ny=ft(function(a,c){return function(p){return us(p,a,c)}}),ky=ft(function(a,c){return function(p){return us(a,p,c)}});function xu(a,c,p){var b=rn(c),O=Oa(c,b);p==null&&!(Ht(c)&&(O.length||!b.length))&&(p=c,c=a,a=this,O=Oa(c,rn(c)));var k=!(Ht(p)&&"chain"in p)||!!p.chain,B=Wr(a);return tr(O,function(j){var X=c[j];a[j]=X,B&&(a.prototype[j]=function(){var de=this.__chain__;if(k||de){var _e=a(this.__wrapped__),me=_e.__actions__=On(this.__actions__);return me.push({func:X,args:arguments,thisArg:a}),_e.__chain__=de,_e}return X.apply(a,ni([this.value()],arguments))})}),a}function Ty(){return sn._===this&&(sn._=sE),this}function Au(){}function My(a){return a=ut(a),ft(function(c){return Wf(c,a)})}var $y=iu(Pt),Uy=iu(df),Gy=iu(Dc);function lh(a){return du(a)?Lc(Ar(a)):g0(a)}function Fy(a){return function(c){return a==null?n:Ri(a,c)}}var zy=_g(),Py=_g(!0);function Su(){return[]}function Du(){return!1}function By(){return{}}function Hy(){return""}function Wy(){return!0}function Yy(a,c){if(a=ut(a),a<1||a>Oe)return[];var p=Ge,b=_n(a,Ge);c=Ke(c),a-=Ge;for(var O=kc(b,c);++p<a;)c(p);return O}function jy(a){return it(a)?Pt(a,Ar):Gn(a)?[a]:On(Sg(xt(a)))}function Ky(a){var c=++iE;return xt(a)+c}var Vy=Ra(function(a,c){return a+c},0),qy=ou("ceil"),Xy=Ra(function(a,c){return a/c},1),Zy=ou("floor");function Qy(a){return a&&a.length?Ia(a,Sn,Wc):n}function Jy(a,c){return a&&a.length?Ia(a,Ke(c,2),Wc):n}function eI(a){return gf(a,Sn)}function tI(a,c){return gf(a,Ke(c,2))}function nI(a){return a&&a.length?Ia(a,Sn,Vc):n}function rI(a,c){return a&&a.length?Ia(a,Ke(c,2),Vc):n}var iI=Ra(function(a,c){return a*c},1),oI=ou("round"),sI=Ra(function(a,c){return a-c},0);function aI(a){return a&&a.length?Nc(a,Sn):0}function lI(a,c){return a&&a.length?Nc(a,Ke(c,2)):0}return R.after=LC,R.ary=Fg,R.assign=pw,R.assignIn=Jg,R.assignInWith=Wa,R.assignWith=mw,R.at=Ew,R.before=zg,R.bind=pu,R.bindAll=Iy,R.bindKey=Pg,R.castArray=BC,R.chain=$g,R.chunk=Z0,R.compact=Q0,R.concat=J0,R.cond=Oy,R.conforms=xy,R.constant=Iu,R.countBy=aC,R.create=bw,R.curry=Bg,R.curryRight=Hg,R.debounce=Wg,R.defaults=Cw,R.defaultsDeep=ww,R.defer=RC,R.delay=NC,R.difference=eb,R.differenceBy=tb,R.differenceWith=nb,R.drop=rb,R.dropRight=ib,R.dropRightWhile=ob,R.dropWhile=sb,R.fill=ab,R.filter=cC,R.flatMap=_C,R.flatMapDeep=fC,R.flatMapDepth=gC,R.flatten=Ng,R.flattenDeep=lb,R.flattenDepth=cb,R.flip=kC,R.flow=Sy,R.flowRight=Dy,R.fromPairs=ub,R.functions=Dw,R.functionsIn=Lw,R.groupBy=hC,R.initial=_b,R.intersection=fb,R.intersectionBy=gb,R.intersectionWith=hb,R.invert=Nw,R.invertBy=kw,R.invokeMap=pC,R.iteratee=Ou,R.keyBy=mC,R.keys=rn,R.keysIn=An,R.map=Ga,R.mapKeys=Mw,R.mapValues=$w,R.matches=Ly,R.matchesProperty=Ry,R.memoize=za,R.merge=Uw,R.mergeWith=eh,R.method=Ny,R.methodOf=ky,R.mixin=xu,R.negate=Pa,R.nthArg=My,R.omit=Gw,R.omitBy=Fw,R.once=TC,R.orderBy=EC,R.over=$y,R.overArgs=MC,R.overEvery=Uy,R.overSome=Gy,R.partial=mu,R.partialRight=Yg,R.partition=bC,R.pick=zw,R.pickBy=th,R.property=lh,R.propertyOf=Fy,R.pull=Eb,R.pullAll=Tg,R.pullAllBy=bb,R.pullAllWith=Cb,R.pullAt=wb,R.range=zy,R.rangeRight=Py,R.rearg=$C,R.reject=yC,R.remove=yb,R.rest=UC,R.reverse=hu,R.sampleSize=OC,R.set=Bw,R.setWith=Hw,R.shuffle=xC,R.slice=Ib,R.sortBy=DC,R.sortedUniq=Rb,R.sortedUniqBy=Nb,R.split=_y,R.spread=GC,R.tail=kb,R.take=Tb,R.takeRight=Mb,R.takeRightWhile=$b,R.takeWhile=Ub,R.tap=Qb,R.throttle=FC,R.thru=Ua,R.toArray=Xg,R.toPairs=nh,R.toPairsIn=rh,R.toPath=jy,R.toPlainObject=Qg,R.transform=Ww,R.unary=zC,R.union=Gb,R.unionBy=Fb,R.unionWith=zb,R.uniq=Pb,R.uniqBy=Bb,R.uniqWith=Hb,R.unset=Yw,R.unzip=vu,R.unzipWith=Mg,R.update=jw,R.updateWith=Kw,R.values=uo,R.valuesIn=Vw,R.without=Wb,R.words=sh,R.wrap=PC,R.xor=Yb,R.xorBy=jb,R.xorWith=Kb,R.zip=Vb,R.zipObject=qb,R.zipObjectDeep=Xb,R.zipWith=Zb,R.entries=nh,R.entriesIn=rh,R.extend=Jg,R.extendWith=Wa,xu(R,R),R.add=Vy,R.attempt=ah,R.camelCase=Qw,R.capitalize=ih,R.ceil=qy,R.clamp=qw,R.clone=HC,R.cloneDeep=YC,R.cloneDeepWith=jC,R.cloneWith=WC,R.conformsTo=KC,R.deburr=oh,R.defaultTo=Ay,R.divide=Xy,R.endsWith=Jw,R.eq=pr,R.escape=ey,R.escapeRegExp=ty,R.every=lC,R.find=uC,R.findIndex=Lg,R.findKey=yw,R.findLast=dC,R.findLastIndex=Rg,R.findLastKey=Iw,R.floor=Zy,R.forEach=Ug,R.forEachRight=Gg,R.forIn=Ow,R.forInRight=xw,R.forOwn=Aw,R.forOwnRight=Sw,R.get=Cu,R.gt=VC,R.gte=qC,R.has=Rw,R.hasIn=wu,R.head=kg,R.identity=Sn,R.includes=vC,R.indexOf=db,R.inRange=Xw,R.invoke=Tw,R.isArguments=Ti,R.isArray=it,R.isArrayBuffer=XC,R.isArrayLike=xn,R.isArrayLikeObject=Kt,R.isBoolean=ZC,R.isBuffer=ci,R.isDate=QC,R.isElement=JC,R.isEmpty=ew,R.isEqual=tw,R.isEqualWith=nw,R.isError=Eu,R.isFinite=rw,R.isFunction=Wr,R.isInteger=jg,R.isLength=Ba,R.isMap=Kg,R.isMatch=iw,R.isMatchWith=ow,R.isNaN=sw,R.isNative=aw,R.isNil=cw,R.isNull=lw,R.isNumber=Vg,R.isObject=Ht,R.isObjectLike=Yt,R.isPlainObject=vs,R.isRegExp=bu,R.isSafeInteger=uw,R.isSet=qg,R.isString=Ha,R.isSymbol=Gn,R.isTypedArray=co,R.isUndefined=dw,R.isWeakMap=_w,R.isWeakSet=fw,R.join=vb,R.kebabCase=ny,R.last=sr,R.lastIndexOf=pb,R.lowerCase=ry,R.lowerFirst=iy,R.lt=gw,R.lte=hw,R.max=Qy,R.maxBy=Jy,R.mean=eI,R.meanBy=tI,R.min=nI,R.minBy=rI,R.stubArray=Su,R.stubFalse=Du,R.stubObject=By,R.stubString=Hy,R.stubTrue=Wy,R.multiply=iI,R.nth=mb,R.noConflict=Ty,R.noop=Au,R.now=Fa,R.pad=oy,R.padEnd=sy,R.padStart=ay,R.parseInt=ly,R.random=Zw,R.reduce=CC,R.reduceRight=wC,R.repeat=cy,R.replace=uy,R.result=Pw,R.round=oI,R.runInContext=q,R.sample=IC,R.size=AC,R.snakeCase=dy,R.some=SC,R.sortedIndex=Ob,R.sortedIndexBy=xb,R.sortedIndexOf=Ab,R.sortedLastIndex=Sb,R.sortedLastIndexBy=Db,R.sortedLastIndexOf=Lb,R.startCase=fy,R.startsWith=gy,R.subtract=sI,R.sum=aI,R.sumBy=lI,R.template=hy,R.times=Yy,R.toFinite=Yr,R.toInteger=ut,R.toLength=Zg,R.toLower=vy,R.toNumber=ar,R.toSafeInteger=vw,R.toString=xt,R.toUpper=py,R.trim=my,R.trimEnd=Ey,R.trimStart=by,R.truncate=Cy,R.unescape=wy,R.uniqueId=Ky,R.upperCase=yy,R.upperFirst=yu,R.each=Ug,R.eachRight=Gg,R.first=kg,xu(R,function(){var a={};return Or(R,function(c,p){St.call(R.prototype,p)||(a[p]=c)}),a}(),{chain:!1}),R.VERSION=r,tr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){R[a].placeholder=R}),tr(["drop","take"],function(a,c){vt.prototype[a]=function(p){p=p===n?1:Jt(ut(p),0);var b=this.__filtered__&&!c?new vt(this):this.clone();return b.__filtered__?b.__takeCount__=_n(p,b.__takeCount__):b.__views__.push({size:_n(p,Ge),type:a+(b.__dir__<0?"Right":"")}),b},vt.prototype[a+"Right"]=function(p){return this.reverse()[a](p).reverse()}}),tr(["filter","map","takeWhile"],function(a,c){var p=c+1,b=p==Z||p==be;vt.prototype[a]=function(O){var k=this.clone();return k.__iteratees__.push({iteratee:Ke(O,3),type:p}),k.__filtered__=k.__filtered__||b,k}}),tr(["head","last"],function(a,c){var p="take"+(c?"Right":"");vt.prototype[a]=function(){return this[p](1).value()[0]}}),tr(["initial","tail"],function(a,c){var p="drop"+(c?"":"Right");vt.prototype[a]=function(){return this.__filtered__?new vt(this):this[p](1)}}),vt.prototype.compact=function(){return this.filter(Sn)},vt.prototype.find=function(a){return this.filter(a).head()},vt.prototype.findLast=function(a){return this.reverse().find(a)},vt.prototype.invokeMap=ft(function(a,c){return typeof a=="function"?new vt(this):this.map(function(p){return us(p,a,c)})}),vt.prototype.reject=function(a){return this.filter(Pa(Ke(a)))},vt.prototype.slice=function(a,c){a=ut(a);var p=this;return p.__filtered__&&(a>0||c<0)?new vt(p):(a<0?p=p.takeRight(-a):a&&(p=p.drop(a)),c!==n&&(c=ut(c),p=c<0?p.dropRight(-c):p.take(c-a)),p)},vt.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},vt.prototype.toArray=function(){return this.take(Ge)},Or(vt.prototype,function(a,c){var p=/^(?:filter|find|map|reject)|While$/.test(c),b=/^(?:head|last)$/.test(c),O=R[b?"take"+(c=="last"?"Right":""):c],k=b||/^find/.test(c);O&&(R.prototype[c]=function(){var B=this.__wrapped__,j=b?[1]:arguments,X=B instanceof vt,de=j[0],_e=X||it(B),me=function(ht){var pt=O.apply(R,ni([ht],j));return b&&Le?pt[0]:pt};_e&&p&&typeof de=="function"&&de.length!=1&&(X=_e=!1);var Le=this.__chain__,Pe=!!this.__actions__.length,qe=k&&!Le,dt=X&&!Pe;if(!k&&_e){B=dt?B:new vt(this);var Xe=a.apply(B,j);return Xe.__actions__.push({func:Ua,args:[me],thisArg:n}),new rr(Xe,Le)}return qe&&dt?a.apply(this,j):(Xe=this.thru(me),qe?b?Xe.value()[0]:Xe.value():Xe)})}),tr(["pop","push","shift","sort","splice","unshift"],function(a){var c=ca[a],p=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",b=/^(?:pop|shift)$/.test(a);R.prototype[a]=function(){var O=arguments;if(b&&!this.__chain__){var k=this.value();return c.apply(it(k)?k:[],O)}return this[p](function(B){return c.apply(it(B)?B:[],O)})}}),Or(vt.prototype,function(a,c){var p=R[c];if(p){var b=p.name+"";St.call(io,b)||(io[b]=[]),io[b].push({name:c,func:p})}}),io[La(n,y).name]=[{name:"wrapper",func:n}],vt.prototype.clone=wE,vt.prototype.reverse=yE,vt.prototype.value=IE,R.prototype.at=Jb,R.prototype.chain=eC,R.prototype.commit=tC,R.prototype.next=nC,R.prototype.plant=iC,R.prototype.reverse=oC,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=sC,R.prototype.first=R.prototype.head,rs&&(R.prototype[rs]=rC),R},to=tE();xi?((xi.exports=to)._=to,Oc._=to):sn._=to}).call(OD)}(ws,ws.exports)),ws.exports}var At=xD();function AD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=Math.max(r.nCols,r.nRows),u="["+At.range(1,s+1).join(",")+"]";let d="";return d+=`array[ROW_IDXS, COL_IDXS] of var 1..${s}: unknown_regions;
`,d+=`constraint chaos_construction_p(unknown_regions, ${u}, ${s});
`,d+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,e.negative_constraints&&!!e.negative_constraints[v.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION]&&(d+=`constraint chaos_construction_no_2x2_belongs_to_one_region_p(unknown_regions);
`),d}const SD={toolId:v.CHAOS_CONSTRUCTION,negative_constraints:[{toolId:v.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION,description:"Regions cannot cover any 2x2 section of the grid."}],meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:AD};function DD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=$.UNKNOWN_REGIONS,l=Math.max(r.nCols,r.nRows),d="["+At.range(1,l+1).join(",")+"]";let f="";return f+=`array[ROW_IDXS, COL_IDXS] of var 1..${l}: ${s};
`,f+=`constraint numbered_chaos_construction_p(${$.BOARD}, ${s}, ${d}, ${l});
`,f+=`constraint no_repeats_in_unknown_regions_p(${$.BOARD}, ${s}, ALLOWED_DIGITS, ${d});
`,f}const LD={toolId:v.NUMBERED_CHAOS_CONSTRUCTION,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:DD};function RD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.SUGURU_REGIONS;let l="";return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint chaos_construction_suguru_p(board, ${s});
`,l}const ND={toolId:v.CHAOS_CONSTRUCTION_SUGURU,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:RD};function kD(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Qr(n)){const s=Se(i),l=Se(o),u=Ve(i,$.NURIMISAKI),d=Ve(o,$.NURIMISAKI),f=`constraint (${u} == 0 /\\ ${d} == 0) -> abs(${s} - ${l}) >= 5;
`;r+=f}return r}function TD(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,s+=`constraint nurimisaki_p(nurimisaki);
`,e.negative_constraints&&!!e.negative_constraints[v.NURIMISAKI_PATH_GERMAN_WHISPERS]&&(s+=kD(n,v.NURIMISAKI_PATH_GERMAN_WHISPERS)),s}const MD={toolId:v.NURIMISAKI,negative_constraints:[{toolId:v.NURIMISAKI_PATH_GERMAN_WHISPERS,description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5."}],meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:TD};function $D(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function UD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,s+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,e.negative_constraints&&!!e.negative_constraints[v.NURIKABE_NO_REPEATS_IN_ISLANDS]&&(s+=$D(t,v.NURIKABE_NO_REPEATS_IN_ISLANDS)),s}const GD={toolId:v.NURIKABE,negative_constraints:[{toolId:v.NURIKABE_NO_REPEATS_IN_ISLANDS,description:"Digits may not repeat within a nurikabe island."}],meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:UD};function FD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,s+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,s}const zD={toolId:v.TWO_CONTIGUOUS_REGIONS,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:FD};function PD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,s+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,s+=`constraint sashigane_adjacency_p(sashigane);
`,s+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,s+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,s+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,s}const BD={toolId:v.SASHIGANE,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:PD};function HD(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.NORINORI_SHADING;let l="";return l+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,l+=`constraint norinori_p(${$.BOARD_REGIONS}, ${s});
`,r.getUsedRegions().size&&(l+=`
% Exactly 2 shaded cells per region (known regions)
`),l+=Ll(n,2,1,$.NORINORI_SHADING),l}const WD={toolId:v.NORINORI,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:HD};function YD(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${$.BOARD}, ${$.SHIKAKU_REGIONS});
`,o}function jD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.SHIKAKU_REGIONS;let l="";const u=r.nRows,d=r.nCols;return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${$.SHIKAKU_HEIGHT};
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..${d}: ${$.SHIKAKU_WIDTH};
`,l+=`constraint shikaku_p(${s}, ${$.SHIKAKU_WIDTH}, ${$.SHIKAKU_HEIGHT});
`,e.negative_constraints&&!!e.negative_constraints[v.SHIKAKU_NO_REPEATS_IN_REGION]&&(l+=YD(t,v.SHIKAKU_NO_REPEATS_IN_REGION)),l}const KD={toolId:v.SHIKAKU,negative_constraints:[{toolId:v.SHIKAKU_NO_REPEATS_IN_REGION,description:"Digits cannot repeat within a shikaku region."}],meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:jD};function VD(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.NORINORI_SHADING,l=$.STAR_BATTLE;let u=`
% ${i}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,u+=Qd(2,1,l),u+=Zd(2,1,l),u+=Ll(n,1,1,l),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${l});
`,u+=`
% Stars cannot be placed on shaded Norinori cells
`,u+=`constraint norinori_star_battle_not_on_shaded_p(${s}, ${l});
`,u}const qD={toolId:v.NORINORI_STAR_BATTLE,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:VD};function XD(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,s+=`constraint goldilocks_zone_p(goldilocks_regions);
`,s+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,s}const ZD={toolId:v.GOLDILOCKS_ZONE,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:XD};function QD(){let t="";return t+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,t}const JD={toolId:v.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:QD};function e2(){let t="";return t+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,t}const t2={toolId:v.YIN_YANG_FILLOMINO_PARITY,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:e2};function n2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(d=>d.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=12,l=$.PENTOMINO_REGIONS;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: ${l};
`,u+=`constraint pentomino_tilling_p(${l});
`,u}const r2={toolId:v.PENTOMINO_TILLING,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:n2};function i2(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(f=>f.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.LITS_SHADING,l=$.STAR_BATTLE,u=$.LITS_WHITE_BLACK_STAR_BATTLE;let d=`
% ${i}
`;return d+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${l};
`,d+=Eo(n,2,1,$.STAR_BATTLE),d+=`
% Star battle stars can't touch orthogonally or diagonally
`,d+=`constraint star_battle_no_touching_p(${l});
`,d+=`
`,d+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${u};
`,d+=`
% 1 white star per row, column, region
`,d+=Eo(n,1,1,$.LITS_WHITE_BLACK_STAR_BATTLE),d+=`
% 1 black star per row, column, region
`,d+=Eo(n,1,2,$.LITS_WHITE_BLACK_STAR_BATTLE),d+=`constraint black_and_white_star_battle_p(${l}, ${u});
`,d+=`constraint lits_black_and_white_star_battle_p(${s}, ${u});
`,d}const o2={toolId:v.LITS_BLACK_WHITE_STAR_BATTLE,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:i2};function s2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.FILLOMINO_REGIONS;let l="";return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint fillomino_p(board, ${s});
`,l}const a2={toolId:v.FILLOMINO,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:s2};function l2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.LITS_SHADING,l=$.LITS_REGIONS,u=$.LITS_GRID,d=$.BOARD_REGIONS,f=[...r.getUsedRegions()];f.sort();const g=Math.min(...f),h=Math.max(...f);let m="";m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${l};
`,m+=`array[ROW_IDXS, COL_IDXS] of var 0..${f.length}: ${u};
`,m+=`constraint lits_shading_p(${s});
`,m+=`constraint lits_shading_ids_p(${s}, ${l});
`,m+=`constraint lits_region_and_ids_p(${d}, ${l});
`,m+=`constraint lits_tetromino_shapes_p(${l});
`,m+=`constraint lits_grid_p(${u}, ${d}, ${s}, ${g}..${h});
`,f.length&&(m+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const E of f){const C=r.getRegion(E),y=`constraint count_eq(${ve(C,$.LITS_SHADING)}, 1, 4);
`;m+=y}return m}const c2={toolId:v.LITS,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:l2};function u2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.BYOKC_GRID;let l="";return l+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,l+=`constraint byok_no_repeats_in_regions(${$.BOARD}, ${s});
`,l}const d2={toolId:v.BUILD_YOUR_OWN_KILLER_CAGES,meta:{description:"A cage is a set of orthogonally connected cells which do not contain repeated digits. Cages may not overlap each other.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:u2};function _2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(C=>C.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";const s=$.SHADED_BOUNDARIES_REGIONS,l=$.SHADED_BOUNDARIES_VERTICAL,u=$.SHADED_BOUNDARIES_HORIZONTAL,d=r.nRows,f=r.nCols,g=`0..${d-2}`,h=`0..${f-2}`;let m="";return m+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,m+=`array[${g}, COL_IDXS] of var bool: ${l};
`,m+=`array[ROW_IDXS, ${h}] of var bool: ${u};
`,m+=`constraint shaded_boundaries_two_regions_p(${s}, ${u}, ${l});
`,e.negative_constraints&&!!e.negative_constraints[v.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN]&&(m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_vertical_p(${$.BOARD}, ${l});
`,m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_horizontal_p(${$.BOARD}, ${u});
`,m+=`constraint shaded_boundaries_adjacent_sum_is_even_boundary_region_p(${$.BOARD}, ${s});
`),m}const f2={toolId:v.SHADED_BOUNDARIES,negative_constraints:[{toolId:v.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN,description:"Shade the boundary between adjacent digits if and only if they sum to an even number."}],meta:{description:"Shade the boundary between adjacent. Shaded boundaries must divide the grid into exactly 2 regions. There may be shaded boundaries that lie within a region without fully dividing it, as allowed by other rules.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:_2};function g2(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.STAR_BATTLE;let l="";return l+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,l+=Qd(2,1,s),l+=Zd(2,1,s),l+=Ll(n,2,1,s),l+=`
% Star battle stars can't touch orthogonally or diagonally
`,l+=`constraint star_battle_no_touching_p(${s});
`,l}const h2={toolId:v.STAR_BATTLE,meta:{description:"Each row, column, and 3x3 box contains exactly 2 stars. Stars can't be within a kings move (in chess) from each other.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:g2};function v2(){const t=$.STAR_BATTLE;return`constraint one_star_per_galaxy_p(${$.GALAXY_REGIONS}, ${t});
`}const p2={toolId:v.ONE_STAR_PER_GALAXY,meta:{description:"Every galaxy contains exactly 1 star.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:v2};function m2(t){let e="";return e+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,e=Zt(e,`${t}`),e}function E2(t){let e="";return e+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,e=Zt(e,`${t}`),e}function b2(t){let e="";return e+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,e=Zt(e,`${t}`),e}function C2(t){let e="";return e+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,e=Zt(e,`${t}`),e}function w2(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=Zt(n,`${e}`),n}function qt(t,e,n){return t*n+e+1}function y2(t){const e=t.grid;function n(l,u){const d=[],f=qt(l.r,l.c,e.nCols);for(let g=-1;g<=1;g++){const h=qt(u.r+g,u.c,e.nCols);d.push([f,h]),d.push([h,f])}return d}function r(l,u){const d=[],f=qt(l.r,l.c,e.nCols);for(let g=-1;g<=1;g++){const h=qt(u.r,u.c+g,e.nCols);d.push([f,h]),d.push([h,f])}return d}const i=[],s=t.elementsDict.get(v.MAZE_WALL);if(!s||!s.constraints)return i;for(const l of Object.values(s.constraints)){const u=l.coords;if(u.length===1){const d=u[0],g=ul(d).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let h=qt(g[0].r,g[0].c,e.nCols),m=qt(g[3].r,g[3].c,e.nCols);i.push([h,m]),i.push([m,h]),h=qt(g[1].r,g[1].c,e.nCols),m=qt(g[2].r,g[2].c,e.nCols),i.push([h,m]),i.push([m,h])}for(let d=0;d<u.length-1;d++){const f=mO(Bv(u[d],u[d+1]),.5),h=dl(f).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0);if(h.length!==2)continue;const[m,E]=h;if(m.r===E.r){let C=n(m,E);i.push(...C),C=n(E,m),i.push(...C)}else if(m.c===E.c){let C=r(m,E);i.push(...C),C=r(E,m),i.push(...C)}}}return i}function I2(t){const e=t.grid,n=[],i=t.elementsDict.get(v.ONE_WAY_DOOR);if(!i||!i.constraints)return n;for(const o of Object.values(i.constraints)){const l=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,d]=l,f=o.value,g=qt(u.r,u.c,e.nCols),h=qt(d.r,d.c,e.nCols);f==="<"?n.push([g,h]):f===">"&&n.push([h,g])}return n}function O2(t){const e=[];for(const n of t.getAllCells()){const r=qt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const s=qt(o.r,o.c,t.nCols);e.push([r,s])}}return e}function x2(t){const e=t.grid,n=[],r=[],o=t.elementsDict.get(v.TELEPORT),s=o?Object.values(o):[];let l=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const d=Dl(s);let f=1;for(const g of d.values())if(!(g.length<=1)){for(const[h,m]of g.flatMap((E,C)=>g.slice(C+1).map(w=>[E,w]))){const E=qt(h.cell.r,h.cell.c,e.nCols),C=qt(m.cell.r,m.cell.c,e.nCols);n.push([E,C]),n.push([C,E]),u[h.cell.r][h.cell.c]=f,u[m.cell.r][m.cell.c]=f}for(const h of g){const m=qt(h.cell.r,h.cell.c,e.nCols);r.push(m)}f++}l=d.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:l}}function A2(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(U=>U.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s="",l=O2(r);const u=y2(n),d=I2(n);u.push(...d);const f=n.elementsDict;l=l.filter(U=>!u.some(H=>U[0]===H[0]&&U[1]===H[1]));const g=x2(n);if(g.tp_edges.length){l.push(...g.tp_edges);const U=Pv(g.tp_arr),H=g.tp_count;s+=`
% teleports grid
`,s+=`array[ROW_IDXS, COL_IDXS] of 0..${H}: teleports = array2d(ROW_IDXS, COL_IDXS, ${U});
`}t.edge_list=l,console.log(l);const h=r.nRows*r.nCols,m=l.length,E="["+l.map(U=>U[0]).join(",")+"]",C="["+l.map(U=>U[1]).join(",")+"]";s+=`array[int] of int: dpath_from = ${E};
`,s+=`array[int] of int: dpath_to = ${C};
`,s+=`var 1..${h}: dpath_source;
`,s+=`var 1..${h}: dpath_target;
`,s+=`array[1..${h}] of var bool: dpath_ns;
`,s+=`array[1..${m}] of var bool: dpath_es;
`,s+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,s+=`
% Direct Path no crossings
`;for(let U=0;U<r.nRows-1;U++)for(let H=0;H<r.nCols-1;H++){const re=r.getCell(U,H),te=r.getCell(U,H+1),oe=r.getCell(U+1,H),se=r.getCell(U+1,H+1);if(!re||!te||!oe||!se)continue;const we=qt(re.r,re.c,r.nCols),Z=qt(te.r,te.c,r.nCols),ye=qt(oe.r,oe.c,r.nCols),be=qt(se.r,se.c,r.nCols),Oe=[[we,be],[be,we],[Z,ye],[ye,Z]].map(Ae=>l.findIndex(De=>Ae[0]===De[0]&&Ae[1]===De[1])).filter(Ae=>Ae!==-1);if(Oe.length){const Ae=Oe.map(De=>`dpath_es[${De+1}]`).join(",");s+=`constraint sum([${Ae}]) <= 1;
`}}const w=f.get(v.TELEPORT),y=w?Object.values(w):[];if(g.tp_count>0){s+=`
% At most 1 edge per teleporter
`;for(const U of y){const H=U.cell,re=r.getCell(H.r,H.c);if(!re)continue;const te=r.getNeighboorCells(re),oe=qt(re.r,re.c,r.nCols),se=[];for(const Z of te){if(y.some(Ie=>Ie.cell.r===Z.r&&Ie.cell.c==Z.c&&Ie.value===U.value))continue;const be=qt(Z.r,Z.c,r.nCols);se.push([oe,be]),se.push([be,oe])}const we=se.map(Z=>l.findIndex(ye=>Z[0]===ye[0]&&Z[1]===ye[1])).filter(Z=>Z!==-1);if(we.length){const Z=we.map(ye=>`dpath_es[${ye+1}]`).join(",");s+=`constraint sum([${Z}]) <= 1;
`}}}if(!e.negative_constraints)return s;const x=!!e.negative_constraints[v.DIRECTED_PATH_IS_PARITY_LINE],N=!!e.negative_constraints[v.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS],T=!!e.negative_constraints[v.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME],G=!!e.negative_constraints[v.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME],K=!!e.negative_constraints[v.DIRECTED_PATH_IS_REGION_SUM_LINE];return T&&(s+=m2(v.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME)),x&&(s+=C2(v.DIRECTED_PATH_IS_PARITY_LINE)),N&&(s+=E2(v.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS)),G&&(s+=w2(n,v.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME)),K&&(s+=b2(v.DIRECTED_PATH_IS_REGION_SUM_LINE)),s}const S2={toolId:v.MAZE_DIRECTED_PATH,negative_constraints:[{toolId:v.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,description:"Any two adjacent cells along the correct path must sum to a prime number."},{toolId:v.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4."},{toolId:v.DIRECTED_PATH_IS_PARITY_LINE,description:"The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit."},{toolId:v.DIRECTED_PATH_IS_REGION_SUM_LINE,description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum."},{toolId:v.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number."}],meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:A2},D2={toolId:v.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[z.GLOBAL_CONSTRAINT,z.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},L2={toolId:v.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[z.GLOBAL_CONSTRAINT,z.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}};function R2(t){let e="";return e+=`constraint connect_four_draw_p(${$.CONNECT_FOUR});
`,e=Zt(e,`${t}`),e}function N2(t){let e="";return e+=`constraint connect_four_adjacent_reds_different_parity_p(${$.BOARD}, ${$.CONNECT_FOUR});
`,e=Zt(e,`${t}`),e}function k2(t){let e="";return e+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${$.BOARD}, ${$.CONNECT_FOUR}, 3);
`,e=Zt(e,`${t}`),e}function T2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(g=>g.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s="connect_four";let l=`
% ${i}
`;if(l+=`% 1 - Red, 2 - Yellow
`,l+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${s};
`,!e.negative_constraints)return l;const u=!!e.negative_constraints[v.CONNECT_FOUR_DRAW],d=!!e.negative_constraints[v.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3],f=!!e.negative_constraints[v.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY];return u&&(l+=R2(v.CONNECT_FOUR_DRAW)),d&&(l+=k2(v.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3)),f&&(l+=N2(v.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY)),l}const M2={toolId:v.CONNECT_FOUR,negative_constraints:[{toolId:v.CONNECT_FOUR_DRAW,description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow."},{toolId:v.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit)."},{toolId:v.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,description:"Two orthogonally adjacent yellow discs must have a difference of at least 3."}],meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:T2};function $2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(C=>C.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.GALAXY_REGIONS,l=$.GALAXY_SIZES,u=r.nCols*r.nRows;let d=`
% ${i}
`;if(d+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${s};
`,d+=`constraint galaxy_restrict_numbering_p(${s});
`,d+=`array[0..${u}] of var 0..${u}: ${l};
`,d+=`constraint galaxy_sizes_p(${s}, ${l});
`,d+=`constraint gallaxy_connected_regions_p(${s});
`,!e.negative_constraints)return d;const f=!!e.negative_constraints[v.EVERY_CELL_BELONGS_TO_A_GALAXY],g=!!e.negative_constraints[v.TWO_SYMMETRIC_GALAXIES],h=!!e.negative_constraints[v.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY],m=!!e.negative_constraints[v.ONE_GALAXY_IS_A_GERMAN_WHISPERS],E=!!e.negative_constraints[v.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY];return f&&(d+=`
% ${v.EVERY_CELL_BELONGS_TO_A_GALAXY}
`,d+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`),h&&(d+=`
% ${v.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY}
`,d+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`),g&&(d+=`
% ${v.TWO_SYMMETRIC_GALAXIES}
`,d+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`),m&&(d+=`
% ${v.ONE_GALAXY_IS_A_GERMAN_WHISPERS}
`,d+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`),E&&(d+=`
% ${v.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY}
`,d+=`constraint no_repeats_in_galaxy_p(board, galaxy_regions);
`),d}const U2={toolId:v.GALAXIES,negative_constraints:[{toolId:v.EVERY_CELL_BELONGS_TO_A_GALAXY,description:"Every cell in the grid belongs to a galaxy."},{toolId:v.DIGITS_DO_NOT_REPEAT_IN_A_GALAXY,description:"Digits do not repeat in each galaxy."},{toolId:v.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,description:"No 2x2 area may belong entirely to one galaxy."},{toolId:v.TWO_SYMMETRIC_GALAXIES,description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"},{toolId:v.ONE_GALAXY_IS_A_GERMAN_WHISPERS,description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5."}],meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:$2};function G2(t,e){const n=t.grid;let r=`
% ${e}
`;const i=$.YIN_YANG;for(const[o,s]of Qr(n)){const l=Se(o),u=Se(s),d=`${i}[${o.r},${o.c}]`,f=`${i}[${s.r},${s.c}]`,g=`constraint (${d} == 1 /\\ ${f} == 1) -> abs(${l} - ${u}) >= 5;
`;r+=g}return r}function F2(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(d=>i.region!==null&&d.region===i.region),s=Ve(i,$.BOARD),l=Ve(i,$.YIN_YANG),u=ve(o,$.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${s}, ${l}, ${u});
`}return n=Zt(n,`${e}`),n}function z2(t){let e=`
% ${t}
`;return e+=`constraint yin_yang_identical_digits_diagonally_belong_to_same_region_p(${$.BOARD}, ${$.YIN_YANG});
`,e}function P2(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(f=>f.outside))return console.warn(`${i} not implemented when there are cells outisde the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,s+=`constraint yin_yang_p(yin_yang);
`,e.negative_constraints&&(!!e.negative_constraints[v.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]&&(s+=F2(n,v.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED)),!!e.negative_constraints[v.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]&&(s+=G2(n,v.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS)),!!e.negative_constraints[v.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION]&&(s+=z2(v.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION))),s}const B2={toolId:v.YIN_YANG,negative_constraints:[{toolId:v.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded)."},{toolId:v.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5."},{toolId:v.YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION,description:"Identical digits which see each other by a bishops move (diagonally) must be the same color."}],meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:P2};function H2(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,e}function W2(t){let e=`
% ${t}
`;return e+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,e}function Y2(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function j2(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function K2(t,e){if(t.puzzle.grid.getAllCells().some(s=>s.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o=`
% ${e}
`;return o+=`constraint loop_parity_p(board, cell_center_loop);
`,o}function V2(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(E=>E.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=e.negative_constraints,l=s?!!s[v.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:!1;let u=`
% ${i}
`;if(u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,u+=`constraint cell_center_loop_p(cell_center_loop, ${l});
`,!s)return u;const d=!!s[v.NOT_LOOP_SIZED_REGIONS],f=!!s[v.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS],g=!!s[v.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES],h=!!s[v.MODULAR_LOOP],m=!!s[v.LOOP_PARITY];return f&&(u+=W2(v.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS)),g&&(u+=H2(v.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES)),d&&(u+=Y2(t,v.NOT_LOOP_SIZED_REGIONS)),h&&(u+=j2(t,v.MODULAR_LOOP)),m&&(u+=K2(t,v.LOOP_PARITY)),u}const q2={toolId:v.CELL_CENTER_LOOP_NO_TOUCHING,negative_constraints:[{toolId:v.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally."},{toolId:v.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit."},{toolId:v.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,description:"Adjacent cells along a loop differ by 5 or more."},{toolId:v.NOT_LOOP_SIZED_REGIONS,description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N."},{toolId:v.MODULAR_LOOP,description:"Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}."},{toolId:v.LOOP_PARITY,description:"Digits along the loop must alternate between odd and even."}],meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:V2};function X2(t){let e="";return e+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,e=Zt(e,`${t}`),e}function Z2(t){let e="";return e+=`constraint cave_walls_are_even_p(board, cave_shading);
`,e=Zt(e,`${t}`),e}function Q2(t){let e="";return e+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,e=Zt(e,`${t}`),e}function J2(t){let e="";return e+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,e=Zt(e,`${t}`),e}function eL(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.LITS_SHADING,s=$.LITS_REGIONS,l=$.CAVE_REGIONS;let u=`
% ${e}
`;u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${s};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${s});
`,u+=`constraint lits_region_and_ids_p(${l}, ${s});
`,u+=`constraint lits_4_per_region_p(${l}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${s});
`;const d=r.getUsedRegions();d.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const f of d){const g=r.getRegion(f),m=`constraint count_eq(${ve(g,$.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function tL(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.CAVE_SHADING,s=$.BOARD_REGIONS,l="renban_cave_regions";let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint renban_cave_regions_p(${o}, ${s}, ${l});
`,u+=`constraint renban_caves_p(${$.BOARD}, ${l});
`,u}function nL(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.BOARD,s=$.CAVE_REGIONS;let l=`
% ${e}
`;return l+=`constraint cave_wall_suguru_p(${o}, ${s});
`,l}function rL(t,e){if(t.puzzle.grid.getAllCells().some(d=>d.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=$.BOARD,s=$.CAVE_SHADING,l=$.CAVE_CELLS_FILLOMINO_REGIONS;let u=`
% ${e}
`;return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_cells_fillomino_p(${o}, ${s}, ${l});
`,u}function iL(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(y=>y.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.CAVE_SHADING,l=$.CAVE_REGIONS;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=`array[ROW_IDXS, COL_IDXS] of var int: ${l};
`,u+=`constraint cave_p(${s}, ${l});
`,e.negative_constraints&&(!!e.negative_constraints[v.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]&&(u+=Q2(v.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED)),!!e.negative_constraints[v.CAVE_CELLS_ARE_ODD]&&(u+=X2(v.CAVE_CELLS_ARE_ODD)),!!e.negative_constraints[v.CAVE_WALLS_ARE_EVEN]&&(u+=Z2(v.CAVE_WALLS_ARE_EVEN)),!!e.negative_constraints[v.CAVE_LITS]&&(u+=eL(t,v.CAVE_LITS)),!!e.negative_constraints[v.RENBAN_CAVES]&&(u+=tL(t,v.RENBAN_CAVES)),!!e.negative_constraints[v.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]&&(u+=J2(v.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE)),!!e.negative_constraints[v.CAVE_WALL_SUGURU]&&(u+=nL(t,v.CAVE_WALL_SUGURU)),!!e.negative_constraints[v.CAVE_CELLS_FILLOMINO]&&(u+=rL(t,v.CAVE_CELLS_FILLOMINO))),u}const oL={toolId:v.CAVE,negative_constraints:[{toolId:v.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells."},{toolId:v.CAVE_WALLS_ARE_EVEN,description:"Cave walls must contain even digits."},{toolId:v.CAVE_CELLS_ARE_ODD,description:"Cave cells must contain odd digits."},{toolId:v.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,description:"There is exactly one digit that does not appear anywhere in the cave."},{toolId:v.RENBAN_CAVES,description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell."},{toolId:v.CAVE_LITS,description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."},{toolId:v.CAVE_WALL_SUGURU,description:"Each orthogonally connected group of shaded (wall) cells contains the digits 1-N (where N is the size of the group). Suguru digits may not repeat in a row, column, or shaded group."},{toolId:v.CAVE_CELLS_FILLOMINO,description:"Divide unshaded cells into polyominoes and fill each cell with a digit equal to the size of its polyomino. Polyominoes of the same size may not share an edge."}],meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[z.LOCAL_ELEMENT,z.UNDETERMINED_REGIONS_CONSTRAINT]},solver_func:iL},Ye=[z.LINE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.LINE_TOOL,z.LOCAL_ELEMENT],Jr=[z.LINE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.DOUBLE_ENDED_LINE_CONSTRAINT,z.LINE_TOOL,z.LOCAL_ELEMENT],Ws={description:"",usage:Fe(),tags:[],categories:Ye},$t={type:fe.LINE,allowSelfIntersection:!0},tn={type:fe.LINE,allowSelfIntersection:!1};function sL(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function zl(t,e,n=!1){let r=Ft(t,e.cells);return n&&(r=[...new Set(r)]),Ct(r)}function aL(t,e,n,r=!1){const o=`[${zl(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function bt(t,e,n,r=!1){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=aL(s,l,n,r);i+=u}return i}function lL(t,e,n,r,i,o=""){var h;const l=`[${zl(e,r).join(",")}]`,u=(h=r.value)!=null&&h.length?r.value:o,d=sL(t,u,n);if(!d)return"";const f=d[1];let g=d[0];return g+=`constraint ${i}(${l}, ${f});
`,g}function fr(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=lL(t,s,l,u,n,r);i+=d}return i}function cL(t,e,n,r=""){let o=e.cells.map(h=>t.getCell(h.r,h.c)).filter(h=>!!h),s=!1;o.length>2&&o[0]===o[o.length-1]&&(o=o.slice(0,-1),s=!0);const u=`[${Ct(o).join(",")}]`;let d=e.value;d||(d=r);const f=parseInt(d);return`constraint ${n}(${u}, ${f}, ${s});
`}function s_(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const[l,u]of Object.entries(o)){const d=cL(s,u,n,r);i+=d}return i}function uL(t,e,n){const r=t.puzzle.grid,i=Ft(r,e.cells),o=ve(i,$.VALUES_GRID);return`constraint ${n}(${o});
`}function a_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=uL(t,o,n);r+=s}return r}function gp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function dL(t,e){return bt(t,e,"strictly_increasing")}const _L={inputOptions:tn,toolId:v.THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ws,description:"Numbers along a thermometer must increase from the bulb end."},solver_func:dL};function fL(t,e){return fr(t,e,"custom_thermo_p")}const gL={inputOptions:{type:fe.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:v.CUSTOM_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ws,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."},solver_func:fL};function hL(t,e){return bt(t,e,"fuzzy_thermo_p")}const vL={inputOptions:tn,toolId:v.FUZZY_THERMOMETER,shape:{type:W.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Ws,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."},solver_func:hL};function pL(t,e){return bt(t,e,"increasing")}const mL={inputOptions:tn,toolId:v.SLOW_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ws,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."},solver_func:pL};function EL(t,e,n){const r=Ft(t,n.cells);let i="";const o=[];for(let l=0;l<r.length;l++){const u=r[l],d=t.getRow(u.r),f=ve(d,$.BOARD),g=`cycle_${e}_${l}`;o.push(g);const h=u.c+1;i+=`var int: ${g} = cycle_order_f(${f}, ${h});
`}const s="["+o.join(",")+"]";return i+=`constraint strictly_increasing(${s});
`,i}function bL(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const[o,s]of Object.entries(r)){const l=EL(i,o,s);n+=l}return n}const CL={inputOptions:tn,toolId:v.ROW_CYCLE_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ws,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."},solver_func:bL};function wL(t,e){return bt(t,e,"palindrome")}const yL={inputOptions:$t,toolId:v.PALINDROME,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Fe(),tags:[],categories:Ye},solver_func:wL};function IL(t,e){let n=bt(t,e,"renban",!0);if(!e.negative_constraints||!!!e.negative_constraints[v.DISTINCT_RENBANS])return n;const i=e.constraints;if(!i)return n;const o=[...Object.entries(i)],s=t.puzzle.grid;for(const[l,u]of e_(o,2)){const d=Ft(s,l[1].cells),f=Ft(s,u[1].cells),g=ve(d,$.BOARD),h=ve(f,$.BOARD);n+=`constraint distinct_renbans_p(${g}, ${h});
`}return n}const OL={inputOptions:$t,toolId:v.RENBAN_LINE,negative_constraints:[{toolId:v.DISTINCT_RENBANS,description:"No two renban lines can contain exactly the same set of digits. (Eg if one length three line contains the digits 345, no other length three line can contain those exact digits. However a length four line containing 2345 or a length three line containing 456 would both be acceptable.)"}],shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Fe(),tags:[],categories:Ye},solver_func:IL};function xL(t,e){return bt(t,e,"double_renban_p",!0)}const AL={inputOptions:$t,toolId:v.DOUBLE_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Fe(),tags:[],categories:Ye},solver_func:xL};function SL(t,e){return bt(t,e,"renrenbanban_p",!0)}const DL={inputOptions:$t,toolId:v.RENRENBANBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Fe(),tags:[],categories:Ye},solver_func:SL};function LL(t,e){return s_(t,e,"n_consecutive_renban_line_p")}const RL={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.N_CONSECUTIVE_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Ye},solver_func:LL};function NL(t,e){return bt(t,e,"knabner_p",!0)}const kL={inputOptions:$t,toolId:v.NABNER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Fe(),tags:[],categories:Ye},solver_func:NL};function TL(t,e){return fr(t,e,"whispers","5")}const ML={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Fe(),tags:[],categories:Ye},solver_func:TL};function $L(t,e){return fr(t,e,"whispers","4")}const UL={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:v.DUTCH_WHISPERS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Fe(),tags:[],categories:Ye},solver_func:$L};function GL(t,e){return fr(t,e,"maximum_adjacent_difference_line_p","2")}const FL={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:v.MAXIMUM_ADJACENT_DIFFERENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Fe(),tags:[],categories:Ye},solver_func:GL};function zL(t,e){return fr(t,e,"renban_or_whispers_p","5")}const PL={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.RENBAN_OR_WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Fe(),tags:[],categories:Ye},solver_func:zL};function BL(t,e){return bt(t,e,"renban_or_nabner_line_p",!0)}const HL={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.RENBAN_OR_NABNER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Fe(),tags:[],categories:Ye},solver_func:BL};function WL(t,e){return bt(t,e,"out_of_order_consecutive_line_p")}const YL={inputOptions:tn,toolId:v.OUT_OF_ORDER_CONSECUTIVE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Fe(),tags:[],categories:Ye},solver_func:WL};function jL(t,e){return bt(t,e,"index_line_p")}const KL={inputOptions:tn,toolId:v.INDEX_LINE,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Fe(),tags:[],categories:Ye},solver_func:jL};function VL(t,e){return bt(t,e,"alldifferent",!0)}const qL={inputOptions:$t,toolId:v.UNIQUE_VALUES_LINE,shape:{type:W.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Fe(),tags:[],categories:Ye},solver_func:VL};function XL(t,e,n,r){let i="";const o=Ft(e,r.cells),s=gp(o);if(!s.length)return"";const l=`sum_line_${n}`;i+=`var int: ${l};
`;for(const u of s){const f=`constraint sum(${ve(u,$.BOARD)}) == ${l};
`;i+=f}return i}function ZL(t,e){return ze(t,e,XL)}const QL={inputOptions:$t,toolId:v.REGION_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Fe(),tags:[],categories:Ye},solver_func:ZL};function JL(t,e){return fr(t,e,"sum_line_p")}const eR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:v.SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Fe(),tags:[],categories:Ye},solver_func:JL};function tR(t,e){return bt(t,e,"arithmetic_sequence_line_p")}const nR={inputOptions:tn,toolId:v.ARITHMETIC_SEQUENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Fe(),tags:[],categories:Ye},solver_func:tR};function rR(t,e){return bt(t,e,"same_parity_line_p")}const iR={inputOptions:$t,toolId:v.SAME_PARITY_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Fe(),tags:[],categories:Ye},solver_func:rR};function oR(t,e){return fr(t,e,"modular_line_p","3")}const sR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:v.MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Fe(),tags:[],categories:Ye},solver_func:oR};function aR(t,e){return fr(t,e,"unimodular_line_p","3")}const lR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:v.UNIMODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Fe(),tags:[],categories:Ye},solver_func:aR};function cR(t,e){return fr(t,e,"modular_or_unimodular_line_p","3")}const uR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:v.MODULAR_OR_UNIMODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Fe(),tags:[],categories:Ye},solver_func:cR};function dR(t,e){return bt(t,e,"odd_even_oscillator_line_p")}const _R={inputOptions:$t,toolId:v.ODD_EVEN_OSCILLATOR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:Fe(),tags:[],categories:Ye},solver_func:dR};function fR(t,e){return fr(t,e,"high_low_oscillator_line_p","5")}const gR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.HIGH_LOW_OSCILLATOR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Fe(),tags:[],categories:Ye},solver_func:fR};function hR(t,e,n,r){return`constraint entropic_line_p(${`[${zl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function vR(t,e){return ze(t,e,hR)}const pR={inputOptions:$t,toolId:v.ENTROPIC_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Fe(),tags:[],categories:Ye},solver_func:vR};function mR(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${zl(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function ER(t,e){return ze(t,e,mR)}const bR={inputOptions:$t,toolId:v.ENTROPIC_OR_MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Fe(),tags:[],categories:Ye},solver_func:ER},CR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.INDEXING_COLUMN_IS_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Fe(),tags:[],categories:Ye}},wR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.INDEXING_ROW_IS_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Fe(),tags:[],categories:Ye}};function yR(t,e){return bt(t,e,"repeated_digits_line_p")}const IR={inputOptions:tn,toolId:v.REPEATED_DIGITS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Fe(),tags:[],categories:Ye},solver_func:yR};function OR(t,e){return bt(t,e,"superfuzzy_arrow_p")}const xR={inputOptions:tn,toolId:v.SUPERFUZZY_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Fe(),tags:[],categories:Ye},solver_func:OR};function AR(t,e){return bt(t,e,"ambiguous_arrow_p",!0)}const SR={inputOptions:$t,toolId:v.AMBIGUOUS_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Fe(),tags:[],categories:Ye},solver_func:AR};function DR(t,e){return bt(t,e,"headless_arrow_p")}const LR={inputOptions:tn,toolId:v.HEADLESS_ARROW,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Fe(),tags:[],categories:Ye},solver_func:DR};function RR(t,e){return bt(t,e,"xv_line_p")}const NR={inputOptions:$t,toolId:v.XV_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Fe(),tags:[],categories:Ye},solver_func:RR};function kR(t,e){const n=Ft(t,e.cells);function r(d){const f=[];let g=null;for(const h of d)h.r!=g?(f.push([h]),g=h.r):f[f.length-1].push(h);return f}const i=r(n);if(i.length<2)return"";const o=i[0],l=`[${Ct(o).join(",")}]`;let u="";for(let d=1;d<i.length;d++){const f=i[d],h=`[${Ct(f).join(",")}]`;u+=`constraint sum(${h}) == sum(${l});
`}return u}function TR(t,e){let n="";const r=e.constraints;if(!r)return n;const i=t.puzzle.grid;for(const o of Object.values(r)){const s=kR(i,o);n+=s}return n}const MR={inputOptions:tn,toolId:v.ROW_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Fe(),tags:[],categories:Ye},solver_func:TR};function $R(t,e){return fr(t,e,"at_least_x_line_p","10")}const UR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:v.AT_LEAST_X_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Fe(),tags:[],categories:Ye},solver_func:$R};function GR(t,e){return s_(t,e,"n_consecutive_fuzzy_sum_line_p")}const FR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:v.N_CONSECUTIVE_FUZZY_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Fe(),tags:[],categories:Ye},solver_func:GR};v.ADJACENT_CELL_SUM_IS_PRIME_LINE,W.LINE,Fe();function zR(t,e){return fr(t,e,"product_line_p")}const PR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:v.PRODUCT_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Fe(),tags:[],categories:Ye},solver_func:zR};function BR(t,e){return bt(t,e,"adjacent_multiples_line_p")}const HR={inputOptions:$t,toolId:v.ADJACENT_MULTIPLES_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Fe(),tags:[],categories:Ye},solver_func:BR};function WR(t,e){return bt(t,e,"adjacent_differences_count_line_p")}const YR={inputOptions:$t,toolId:v.ADJACENT_DIFFERENCES_COUNT_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Fe(),tags:[],categories:Ye},solver_func:WR};function jR(t,e){return bt(t,e,"look_and_say_line_p",!0)}const KR={inputOptions:tn,toolId:v.LOOK_AND_SAY_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Fe(),tags:[],categories:Ye},solver_func:jR};function VR(t,e){return bt(t,e,"zipper_line_p")}const qR={inputOptions:tn,toolId:v.ZIPPER_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Fe(),tags:[],categories:Ye},solver_func:VR};function XR(t,e){return s_(t,e,"segmented_sum_line_p")}const ZR={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:v.SEGMENTED_SUM_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Fe(),tags:[],categories:Ye},solver_func:XR};function QR(t,e){return bt(t,e,"segmented_sum_and_renban_line_p")}const JR={inputOptions:{type:fe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:v.SEGMENTED_SUM_AND_RENBAN_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Fe(),tags:[],categories:Ye},solver_func:QR};function eN(t,e){return bt(t,e,"adjacent_cells_are_multiples_of_difference_line_p",!1)}const tN={inputOptions:{type:fe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:v.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Fe(),tags:[],categories:Ye},solver_func:eN};v.THERMO_OR_AVERAGE_ARROW,W.THERMO_WITH_CIRCLE,Fe();function nN(t,e,n,r){const i=Ft(e,r.cells),o=gp(i);if(o.sort((d,f)=>f.length-d.length),o.length<=1)return"";let s="";const l=o[0],u=ve(l,$.VALUES_GRID);for(const d of o.slice(1)){const f=ve(d,$.VALUES_GRID),g=`constraint subset_p(${u}, ${f});
`;s+=g}return s}function rN(t,e){return ze(t,e,nN)}const iN={inputOptions:tn,toolId:v.INDEXER_CELLS_REGION_SUBSET_LINE,shape:{type:W.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Fe(),tags:[],categories:Ye},solver_func:rN};function oN(t,e){return bt(t,e,"peapods_p")}const sN={inputOptions:tn,toolId:v.PEAPODS,shape:{type:W.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Fe(),tags:[],categories:Ye},solver_func:oN};function aN(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,$.VALUES_GRID),s=ve(i,$.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${s});
`}function lN(t,e){return ze(t,e,aN)}const cN={inputOptions:tn,toolId:v.GOLDILOCKS_ZONE_REGION_SUM,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Fe(),tags:[],categories:Ye},solver_func:lN};function uN(t,e){return a_(t,e,"strictly_increasing")}const dN={inputOptions:tn,toolId:v.DOUBLERS_THERMOMETER,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Fe(),tags:[],categories:Ye},solver_func:uN};function _N(t,e){return bt(t,e,"between_line_p")}const fN={inputOptions:$t,toolId:v.BETWEEN_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Fe(),tags:[],categories:Jr},solver_func:_N},gN={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:v.LOCKOUT_LINE,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Fe(),tags:[],categories:Jr}};function hN(t,e){return bt(t,e,"tightrope_line_p")}const vN={inputOptions:$t,toolId:v.TIGHTROPE_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Fe(),tags:[],categories:Jr},solver_func:hN};function pN(t,e){return bt(t,e,"parity_count_line_p")}const mN={inputOptions:$t,toolId:v.PARITY_COUNT_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Fe(),tags:[],categories:Jr},solver_func:pN};function EN(t,e){return bt(t,e,"double_arrow_p")}const bN={inputOptions:$t,toolId:v.DOUBLE_ARROW_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Fe(),categories:Jr},solver_func:EN};function CN(t,e){return bt(t,e,"product_of_ends_equals_sum_of_line_p")}const wN={inputOptions:$t,toolId:v.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Fe(),tags:[],categories:Jr},solver_func:CN};function yN(t,e){return bt(t,e,"split_peas_p")}const IN={inputOptions:$t,toolId:v.SPLIT_PEAS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Fe(),tags:[],categories:Jr},solver_func:yN};function ON(t,e){return a_(t,e,"between_line_p")}const xN={inputOptions:$t,toolId:v.DOUBLERS_BETWEEN_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Fe(),tags:[],categories:Jr},solver_func:ON};function AN(t,e){return a_(t,e,"double_arrow_p")}const SN={inputOptions:$t,toolId:v.DOUBLERS_DOUBLE_ARROW_LINE,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Fe(),tags:[],categories:Jr},solver_func:AN};function DN(t,e,n,r,i=""){const o=t.puzzle.grid,s=Ft(o,n.cells),l=ve(s,$.BOARD),u=ve(s,$.YIN_YANG);let d=n.value;d||(d=i);const f=parseInt(d);return`constraint ${r}(${l}, ${u}, ${f});
`}function hp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;for(const[s,l]of Object.entries(o)){const u=DN(t,s,l,n,r);i+=u}return i}function LN(t,e,n){const r=Ft(t,e.cells),i=ve(r,$.BOARD),o=ve(r,$.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function Pl(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=LN(o,s,n);r+=l}return r}function RN(t,e){return hp(t,e,"yin_yang_shaded_whispers_line_p","5")}const NN={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:v.YIN_YANG_SHADED_WHISPERS_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Fe(),tags:[],categories:Ye},solver_func:RN};function kN(t,e){return Pl(t,e,"yin_yang_unshaded_entropic_line_p")}const TN={inputOptions:$t,toolId:v.YIN_YANG_UNSHADED_ENTROPIC_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Fe(),tags:[],categories:Ye},solver_func:kN};function MN(t,e){return hp(t,e,"yin_yang_unshaded_modular_line_p","3")}const $N={inputOptions:{type:fe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:v.YIN_YANG_UNSHADED_MODULAR_LINE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Fe(),tags:[],categories:Ye},solver_func:MN};function UN(t,e){return Pl(t,e,"yin_yang_californian_mountaint_snake_p")}const GN={inputOptions:{type:fe.LINE,allowSelfIntersection:!1},toolId:v.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along the red line, each run of cells with the same yin yang shading contains a non-repeating set of consecutive digits in any order. Along the red line, digits in each pair of adjacent cells with different yin yang shading must differ by at least 5.",usage:Fe(),tags:[],categories:Ye},solver_func:UN};function FN(t,e){const n=t.grid,i=t.elementsDict.get(v.YIN_YANG_REGION_SUM_LINE);if(!i||!i.constraints)return"";let o=`
% ${e}
`;for(const s of Object.values(i.constraints)){const u=s.cells.map(f=>n.getCell(f.r,f.c)).filter(f=>!!f),d=ve(u,$.YIN_YANG);o+=`constraint count_unique_values(${d}) >= 2;
`}return o}function zN(t,e){let n=Pl(t,e,"yin_yang_region_sum_line_p");return e.negative_constraints&&!!e.negative_constraints[v.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]&&(n+=FN(t.puzzle,v.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE)),n}const PN={inputOptions:$t,toolId:v.YIN_YANG_REGION_SUM_LINE,negative_constraints:[{toolId:v.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,description:"All lines must cross colours at least once."}],shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Fe(),tags:[],categories:Ye},solver_func:zN};function BN(t,e){return Pl(t,e,"yin_yang_indexing_line_coloring_p")}const HN={inputOptions:tn,toolId:v.YIN_YANG_INDEXING_LINE_COLORING,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Fe(),tags:[],categories:Ye},solver_func:BN},Po=[z.OUTSIDE_CORNER_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.OUTSIDE_CORNER_TOOL,z.OUTSIDE_DIRECTION_TOOL,z.LOCAL_ELEMENT],Bo={type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.CORNER};function WN(t,e){return _r(t,e,"little_killer_sum_p")}const YN={inputOptions:Bo,toolId:v.LITTLE_KILLER_SUM,shape:zt,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Mo(),tags:[],categories:Po},solver_func:WN};function jN(t,e){return _r(t,e,"little_killer_product_p")}const KN={inputOptions:Bo,toolId:v.LITTLE_KILLER_PRODUCT,shape:zt,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Mo(),tags:[],categories:Po},solver_func:jN},VN={inputOptions:Bo,toolId:v.LITTLE_KILLER_LOOK_AND_SAY,shape:zt,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Mo(),tags:[],categories:Po}};function qN(t,e){return _r(t,e,"x_omit_little_killer_sum_p")}const XN={inputOptions:Bo,toolId:v.X_OMIT_LITTLE_KILLER_SUM,shape:zt,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Mo(),tags:[],categories:Po},solver_func:qN},ZN={inputOptions:Bo,toolId:v.LITTLE_KILLER_REGION_SUM_PRODUCT,shape:zt,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Mo(),tags:[],categories:Po}};function QN(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=ve(s,$.VALUES_GRID),u=r.value;if(u){const d=parseInt(u);return`constraint little_killer_sum_p(${l}, ${d});
`}return""}function JN(t,e){return ze(t,e,QN)}const ek={inputOptions:Bo,toolId:v.NEGATORS_LITTLE_KILLER_SUM,shape:zt,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Mo(),tags:[],categories:Po},solver_func:JN},nn=[z.OUTSIDE_EDGE_CONSTRAINT,z.LOCAL_CONSTRAINT,z.TYPABLE_TOOL,z.OUTSIDE_EDGE_TOOL,z.OUTSIDE_DIRECTION_TOOL,z.LOCAL_ELEMENT],Jn={type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.EDGE};function tk(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Hs(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,f=Math.min(...d),g=Math.max(...d),h=Ei(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];return E+=`constraint sandwich_sum_p(${l}, ${m}, ${f}, ${g});
`,E}function nk(t,e){return ze(t,e,tk)}const rk={inputOptions:Jn,toolId:v.SANDWICH_SUM,shape:zt,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:en(),tags:[],categories:nn},solver_func:nk};function ik(t,e){let n="";const r=e.constraints;if(!r)return"";const i=t.puzzle.grid,o="mystery_sandwich_a",s="mystery_sandwich_b";n+=`var int: ${o};
`,n+=`var int: ${s};
`,n+=`constraint member(ALLOWED_DIGITS, ${o});
`,n+=`constraint member(ALLOWED_DIGITS, ${s});
`,n+=`constraint ${o} <= ${s};
`;for(const l of Object.values(r)){const u=l.cell,d=i.getCell(u.r,u.c),g=`[${Hs(i,l).join(",")}]`,h=l.value??"",m=Ei(t,h,u,d);if(!m)continue;const E=m[1];n+=m[0],n+=`constraint sandwich_sum_p(${g}, ${E}, ${o}, ${s});
`}return n}const ok={inputOptions:{...Jn,cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.MYSTERY_SANDWICH_SUM,shape:zt,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:en(),tags:[],categories:nn},solver_func:ik};function sk(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),l=`[${Hs(e,r).join(",")}]`,u=r.value,d=t.puzzle.valid_digits,f=Math.min(...d),g=Math.max(...d),h=Ei(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];const C=`var_bool_${n}_0`,w=`var_bool_${n}_1`;return E+=`var bool: ${C} = sandwich_sum_p(${l}, ${m}, ${f}, ${g});
`,E+=`var bool: ${w} = x_sum_p(${l}, ${m});
`,E+=`constraint 'xor'(${C}, ${w});
`,E}function ak(t,e){return ze(t,e,sk)}const lk={inputOptions:Jn,toolId:v.SANDWICH_SUM_XOR_X_SUM,shape:zt,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:en(),tags:[],categories:nn},solver_func:ak};function ck(t,e){return _r(t,e,"x_sum_p")}const uk={inputOptions:Jn,toolId:v.X_SUM,shape:zt,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:en(),tags:[],categories:nn},solver_func:ck};function dk(t,e){return _r(t,e,"shortsighted_x_sum_p")}const _k={inputOptions:Jn,toolId:v.SHORTSIGHTED_X_SUM,shape:zt,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:en(),tags:[],categories:nn},solver_func:dk};function fk(t,e){return _r(t,e,"shifted_x_sum_p")}const gk={inputOptions:Jn,toolId:v.SHIFTED_X_SUM,shape:zt,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:en(),tags:[],categories:nn},solver_func:fk};function hk(t,e){return _r(t,e,"broken_x_sum_p")}const vk={inputOptions:Jn,toolId:v.BROKEN_X_SUM,shape:zt,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:en(),tags:[],categories:nn},solver_func:hk};function pk(t,e){return _r(t,e,"x_sum_skyscrapers_p")}const mk={inputOptions:Jn,toolId:v.X_SUM_SKYSCRAPERS,shape:zt,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:en(),tags:[],categories:nn},solver_func:pk};function Ek(t,e){return _r(t,e,"battlefield_p")}const bk={inputOptions:Jn,toolId:v.BATTLEFIELD,shape:zt,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:en(),tags:[],categories:nn},solver_func:Ek};function Ck(t,e){return _r(t,e,"skyscrapers_p")}const wk={inputOptions:Jn,toolId:v.SKYSCRAPERS,shape:zt,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:en(),tags:[],categories:nn},solver_func:Ck};function yk(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=Hs(e,r),l=`[${s.join(",")}]`,u=s[0],d=r.value,f=Ei(t,d,i,o);if(!f)return"";const g=f[1];let h=f[0];return h+=`constraint x_index_p(${l}, ${u}, ${g});
`,h}function Ik(t,e){return ze(t,e,yk)}const Ok={inputOptions:Jn,toolId:v.X_INDEX,shape:zt,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:en(),tags:[],categories:nn},solver_func:Ik};function xk(t,e){return _r(t,e,"rising_streak_p")}const Ak={inputOptions:Jn,toolId:v.RISING_STREAK,shape:zt,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:en(),tags:[],categories:nn},solver_func:xk};function Sk(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=ve(s,$.BOARD),u=ve(s,$.YIN_YANG),d=r.value;if(d){const f=parseInt(d);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${l}, ${u}, ${f});
`}return""}function Dk(t,e){return ze(t,e,Sk)}const Lk={inputOptions:Jn,toolId:v.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,shape:zt,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:en(),tags:[],categories:nn},solver_func:Dk};function Rk(t,e){return _r(t,e,"outside_consecutive_sum_p")}const Nk={inputOptions:{type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.OUTSIDE_CONSECUTIVE_SUM,shape:zt,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:en(),tags:[],categories:nn},solver_func:Rk};function kk(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=ve(s,$.BOARD),u=ve(s,$.CELL_CENTER_LOOP),d=r.value;if(d){const f=parseInt(d);return`constraint loopwhiches_p(${l}, ${u}, ${f});
`}return""}function Tk(t,e){return ze(t,e,kk)}const Mk={inputOptions:{type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.LOOPWICHES,shape:zt,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:en(),tags:[],categories:nn},solver_func:Tk};function $k(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=r.direction,l=e.getCellsInDirection(i.r,i.c,s),u=ve(l,$.BOARD),d=ve(l,$.UNKNOWN_REGIONS),f=r.value,g=Ei(t,f,i,o);if(!g)return"";const h=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${d}, ${h});
`,m}function Uk(t,e){return ze(t,e,$k)}const Gk={inputOptions:{type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,shape:zt,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:en(),tags:[],categories:nn},solver_func:Uk};function Fk(t,e,n,r){const i=r.cell,o=r.direction,s=e.getCellsInDirection(i.r,i.c,o),l=s[0],u=Ve(l,$.BOARD),d=ve(s,$.UNKNOWN_REGIONS);return`constraint chaos_construction_x_index_region_p(${u}, ${d});
`}function zk(t,e){return ze(t,e,Fk)}const Pk={inputOptions:{type:fe.OUTSIDE_DIRECTION,defaultValue:"",cornerOrEdge:Dt.CORNER_OR_EDGE},toolId:v.CHAOS_CONSTRUCTION_X_INDEX_REGION,shape:zt,meta:{description:"Clues outside the grid indicate the first N cells pointing in that direction are in the same region - followed by a region border - where N is the first digit seen by the clue.",usage:en(),tags:[],categories:nn},solver_func:zk};function Bk(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=r.direction,l=e.getCellsInDirection(i.r,i.c,s),u=ve(l,$.BOARD),d=ve(l,$.UNKNOWN_REGIONS),f=r.value,g=Ei(t,f,i,o);if(!g)return"";const h=g[1];let m=g[0];return m+=`constraint chaos_construction_x_sum_region_borders_p(${u}, ${d}, ${h});
`,m}function Hk(t,e){return ze(t,e,Bk)}const Wk={inputOptions:{type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.EDGE},toolId:v.CHAOS_CONSTRUCTION_X_SUM_REGION_BORDERS,shape:zt,meta:{description:"A number outside the grid gives the sum of the first M cells of the row/column from that direction. M is the number of region borders in that row/column.**",usage:en(),tags:[],categories:nn},solver_func:Hk};function Yk(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),s=r.direction,l=e.getCellsInDirection(i.r,i.c,s),u=ve(l,$.PENTOMINO_REGIONS),d=r.value,f=Ei(t,d,i,o);if(!f)return"";const g=f[1];let h=f[0];return h+=`constraint pentomino_border_count_p(${u}, ${g});
`,h}function jk(t,e){return ze(t,e,Yk)}const Kk={inputOptions:{type:fe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>mi(t,e,pi),defaultValue:"",cornerOrEdge:Dt.EDGE},toolId:v.PENTOMINO_BORDER_COUNT,shape:zt,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:en(),tags:[],categories:nn},solver_func:jk};function Vk(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Se(i);return`constraint ${n}(${o});
`}function vp(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=Vk(o,s,n);r+=l}return r}const qk={allow_var:!0,allow_interval:!0,allow_int_list:!1};function l_(t,e,n,r=qk){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Xk(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const s=Se(o);let l=e.value;if(l||(l=r),!l)return"";const u=parseInt(l);return`constraint ${n}(${s}, ${u});
`}function pp(t,e,n,r=""){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=Xk(s,l,n,r);i+=u}return i}function Bl(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const s=Se(o),u=Sl(t,o).map(g=>ve(g,n)),d=Ve(o,n);return`constraint ${r}(${u.join(", ")}, ${d}, ${s});
`}function c_(t,e,n,r){let i="";const o=e.constraints;if(!o)return i;const s=t.puzzle.grid;for(const l of Object.values(o)){const u=Bl(s,l,n,r);i+=u}return i}const je=[z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.SINGLE_CELL_SHAPE_TOOL,z.LOCAL_ELEMENT],Ki=[z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.SINGLE_CELL_COLOR_TOOL,z.LOCAL_ELEMENT],Ys={type:W.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Tr={type:W.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Hl(t,e=3){return hi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Zk(t){return t===""||t==="1"||t==="2"||t==="3"}function js(t,e,n){return vi(t,e,n)}const Ze={type:fe.SINGLE_CELL},ei={type:fe.SINGLE_CELL,valueUpdater:(t,e)=>js(t,e,Hl),defaultValue:""};function Qk(t,e){return vp(t,e,"odd_p")}const Jk={inputOptions:Ze,toolId:v.ODD,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:je},solver_func:Qk};function eT(t,e){return vp(t,e,"even_p")}const tT={inputOptions:Ze,toolId:v.EVEN,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:je},solver_func:eT};function mp(t,e,n){const r=e.constraints,i=Object.values(r);let o="";const s=i.map(u=>u.cell),l=new Set(s.map(u=>t.getCell(u.r,u.c)).filter(u=>!!u));for(const u of i){const d=u.cell,f=t.getCell(d.r,d.c);if(!f)continue;const g=Se(f),h=t.getOrthogonallyAdjacentCells(f).filter(C=>!l.has(C)),m=ve(h,$.BOARD),E=`constraint ${n}(${m}, ${g});
`;o+=E}return o}function nT(t,e){const n=t.puzzle.grid;return mp(n,e,"minimum_p")}const rT={inputOptions:Ze,toolId:v.MINIMUM,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:Ki},solver_func:nT};function iT(t,e){const n=t.puzzle.grid;return mp(n,e,"maximum_p")}const oT={inputOptions:Ze,toolId:v.MAXIMUM,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:Ki},solver_func:iT};function sT(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Se(i),s=t.getNeighboorCells(i),l=ve(s,$.BOARD);return`constraint ${n}(${l}) == ${o};
`}function Ep(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=sT(o,s,n);r+=l}return r}function aT(t,e){return Ep(t,e,"odd_count")}const lT={inputOptions:Ze,toolId:v.ODD_MINESWEEPER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je},solver_func:aT};function cT(t,e){return Ep(t,e,"even_count")}const uT={inputOptions:Ze,toolId:v.EVEN_MINESWEEPER,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:je},solver_func:cT};function dT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getNeighboorCells(o);l.push(o);const u=ve(l,$.BOARD);return`constraint count_same_parity_p(${s}, ${u});
`}function _T(t,e){return ze(t,e,dT)}const fT={inputOptions:Ze,toolId:v.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:je},solver_func:_T};function gT(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Se(i),[s,l,u,d]=Xd(t,i);return`constraint ${n}(${o}, ${s}, ${l}, ${u}, ${d});
`}function u_(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=gT(o,s,n);r+=l}return r}function hT(t,e){return u_(t,e,"is_watchtower_p")}const vT={inputOptions:Ze,toolId:v.WATCHTOWER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je},solver_func:hT};function pT(t,e){return u_(t,e,"is_not_watchtower_p")}const mT={inputOptions:Ze,toolId:v.NOT_WATCHTOWER,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:je},solver_func:pT};function ET(t,e){return u_(t,e,"farsight_p")}const bT={inputOptions:ei,toolId:v.FARSIGHT,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:je},solver_func:ET};function CT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),[l,u,d,f]=Xd(e,o);return`constraint radar_p(${s}, ${l}, ${u}, ${d}, ${f}, 9);
`}function wT(t,e){let n=ze(t,e,CT);if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_RADARS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${v.ALL_RADARS_GIVEN}
`;for(const s of o.getAllCells()){if(Uo(i,s))continue;const u=Se(s),[d,f,g,h]=Xd(o,s),m=`constraint not radar_p(${u}, ${d}, ${f}, ${g}, ${h}, 9);
`;n+=m}return n}const yT={inputOptions:{type:fe.SINGLE_CELL,valueUpdater:(t,e)=>js(t,e,Hl),defaultValue:"9"},toolId:v.RADAR,negative_constraints:[{toolId:v.ALL_RADARS_GIVEN,description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."}],shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:je},solver_func:wT};function IT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${ve(l,$.BOARD)}, ${s});
`}function OT(t,e){return ze(t,e,IT)}const xT={inputOptions:Ze,toolId:v.ORTHOGONAL_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:je},solver_func:OT};function AT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=e.getRow(o.r),l=ve(s,$.BOARD),u=o.c+1;return`constraint indexing_column_p(${l}, ${u});
`}function ST(t,e){let n=ze(t,e,AT);if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_INDEXING_COLUMN_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${v.ALL_INDEXING_COLUMN_GIVEN}
`;for(const s of o.getAllCells()){if(Uo(i,s))continue;const u=o.getRow(s.r),d=ve(u,$.BOARD),f=s.c+1,g=`constraint not indexing_column_p(${d}, ${f});
`;n+=g}return n}const DT={inputOptions:Ze,toolId:v.INDEXING_COLUMN,negative_constraints:[{toolId:v.ALL_INDEXING_COLUMN_GIVEN,description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given."}],shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Ki},solver_func:ST};function LT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=e.getCol(o.c),l=ve(s,$.BOARD),u=o.r+1;return`constraint indexing_column_p(${l}, ${u});
`}function RT(t,e){let n=ze(t,e,LT);if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_INDEXING_ROW_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${v.ALL_INDEXING_ROW_GIVEN}
`;for(const s of o.getAllCells()){if(Uo(i,s))continue;const u=o.getCol(s.c),d=ve(u,$.BOARD),f=s.r+1,g=`constraint not indexing_column_p(${d}, ${f});
`;n+=g}return n}const NT={inputOptions:Ze,toolId:v.INDEXING_ROW,negative_constraints:[{toolId:v.ALL_INDEXING_ROW_GIVEN,description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given."}],shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:Ki},solver_func:RT};function kT(t,e){return pp(t,e,"low_digit_p","5")}const TT={inputOptions:Ze,toolId:v.LOW_DIGIT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:Ki},solver_func:kT};function MT(t,e){return pp(t,e,"high_digit_p","5")}const $T={inputOptions:Ze,toolId:v.HIGH_DIGIT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:Ki},solver_func:MT};function UT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=o.r+1,u=o.c+1;if(o.region!==null){const f=o.region+1;return`constraint ${s} == ${l} \\/ ${s} == ${u} \\/ ${s} == ${f};
`}return`constraint ${s} == ${l} \\/ ${s} == ${u};
`}function GT(t,e){return ze(t,e,UT)}const FT={inputOptions:Ze,toolId:v.FRIENDLY_CELL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:Ki},solver_func:GT};function zT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${ve(l,$.BOARD)}, ${s});
`}function PT(t,e){return ze(t,e,zT)}const BT={inputOptions:Ze,toolId:v.DIAGONALLY_ADJACENT_SUM,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:je},solver_func:PT};function HT(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const s=e.getCell(i.r-1,i.c),l=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),d=e.getCell(i.r,i.c+1);if(!s||!l||!u||!d)return"";const f=Se(s),g=Se(l),h=Se(u),m=Se(d);return`constraint groups_opposite_parity_p([${f},${g}], [${h},${m}]);
`}function WT(t,e){return ze(t,e,HT)}const YT={inputOptions:Ze,toolId:v.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:je},solver_func:WT};function jT(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getRow(o.r),u=e.getCol(o.c),d=ve(l,$.BOARD),f=ve(u,$.BOARD),[g,h]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${d}, ${f}, ${g}, ${h}, ${s});
`}function KT(t,e){return ze(t,e,jT)}const VT={inputOptions:Ze,toolId:v.SANDWICH_ROW_COL_COUNT,shape:Tr,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:je},solver_func:KT};function qT(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(f=>f.cell),l=new Set(s.map(f=>n.getCell(f.r,f.c)).filter(f=>!!f)),d=`${Ct([...l]).join(`,
	`)}`;return o+=`array[int] of var int: counting_circles = [
	${d}
];
`,o+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,o}const XT={inputOptions:Ze,toolId:v.COUNTING_CIRCLES,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:je},solver_func:qT};function ZT(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(m=>m.cell),l=new Set(s.map(m=>n.getCell(m.r,m.c)).filter(m=>!!m)),u=n.getAllCells().filter(m=>!l.has(m)),f=`${Ct([...l]).join(`,
	`)}`,h=`${Ct([...u]).join(`,
	`)}`;return o+=`array[int] of var int: reverse_counting_circles = [
	${f}
];
`,o+=`array[int] of var int: not_reverse_counting_circles = [
	${h}
];
`,o+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,o}const QT={inputOptions:Ze,toolId:v.REVERSE_COUNTING_CIRCLES,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:je},solver_func:ZT};function JT(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(h=>h.cell),l=new Set(s.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),d=`${Ct([...l]).join(`,
	`)}`,g=`${$o([...l],$.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;o+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${$.COUNTING_CIRCLES_COLORS};
`,o+=`array[int] of var int: colored_counting_circles = [
	${d}
];
`,o+=`array[int] of var int: counting_circles_colors = [
	${g}
];
`,o+=`constraint colored_counting_circles_adjacent_p(${$.COUNTING_CIRCLES_COLORS});
`,o+=`
% cells without circles
`;for(const h of n.getAllCells()){if(l.has(h))continue;const m=Ve(h,$.COUNTING_CIRCLES_COLORS);o+=`constraint ${m} == 0;
`}for(const h of i){const m=h.cell,E=n.getCell(m.r,m.c);if(!E)continue;const C=Se(E),w=Ve(E,$.COUNTING_CIRCLES_COLORS),y=h.value;y?o+=`constraint ${w} == ${y};
`:o+=`constraint ${w} != 0;
`,o+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${C}, ${w}) == ${C};
`}return o+=`
`,o}const e5={inputOptions:{type:fe.SINGLE_CELL,valueUpdater:(t,e)=>js(t,e,Zk),defaultValue:""},toolId:v.COLORED_COUNTING_CIRCLES,shape:Tr,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:je},solver_func:JT};function t5(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(f=>f.cell),l=new Set(s.map(f=>n.getCell(f.r,f.c)).filter(f=>!!f)),d=`${Ct([...l]).join(`,
	`)}`;return o+=`array[int] of var int: unique_cells = [
	${d}
];
`,o+=`constraint alldifferent(unique_cells);
`,o}const n5={inputOptions:Ze,toolId:v.UNIQUE_CELLS,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:je},solver_func:t5};function r5(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Se(i),l=Sl(t,i).map(d=>ve(d,$.BOARD));return`constraint ${n}(${l.join(", ")}, ${o});
`}function bp(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const o of Object.values(i)){const s=r5(t,o,n);r+=s}return r}function i5(t,e){const n=t.puzzle.grid;return bp(n,e,"seen_even_count_p")}const o5={inputOptions:Ze,toolId:v.SEEN_EVEN_COUNT,shape:Ys,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je},solver_func:i5};function s5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getCellsByKnightMove(o),u=ve(l,$.BOARD),d=r.value??"5",f=l_(t,d,n);if(!f)return"";let g="";const h=f[1];return g+=f[0],g+=`constraint cell_knights_whisper_p(${s}, ${u}, ${h});
`,g}function a5(t,e){return ze(t,e,s5)}const l5={inputOptions:{type:fe.SINGLE_CELL,valueUpdater:(t,e)=>js(t,e,Hl),defaultValue:"5"},toolId:v.CELL_KNIGHT_WHISPERS,shape:Tr,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:je},solver_func:a5};function c5(t,e){const n=t.puzzle.grid;return bp(n,e,"seen_odd_count_p")}const u5={inputOptions:Ze,toolId:v.SEEN_ODD_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:je},solver_func:c5};function d5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),d=e.getCol(o.c),f=ve(u,$.TWO_CONTIGUOUS_REGIONS),g=ve(d,$.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${f}, ${g}, ${s}, ${l});
`}function _5(t,e){return ze(t,e,d5)}const f5={inputOptions:Ze,toolId:v.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:je},solver_func:_5};function g5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getRow(o.r),u=e.getCol(o.c),d=ve(l,$.UNKNOWN_REGIONS),f=ve(u,$.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${d}, ${f}, ${s});
`}function h5(t,e){return ze(t,e,g5)}const v5={inputOptions:Ze,toolId:v.SEEN_REGION_BORDERS_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:je},solver_func:h5};function p5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Ve(o,$.NURIMISAKI),l=e.getOrthogonallyAdjacentCells(o);let d=`constraint nurimisaki_unshaded_endpoint_p(${ve(l,$.NURIMISAKI)}, ${s});
`;return d+=Bl(e,r,$.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),d}function m5(t,e){let n=ze(t,e,p5);if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${v.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}
`;for(const s of o.getAllCells()){if(Uo(i,s))continue;const u=Ve(s,$.NURIMISAKI),d=o.getOrthogonallyAdjacentCells(s),g=`constraint not nurimisaki_unshaded_endpoint_p(${ve(d,$.NURIMISAKI)}, ${u});
`;n+=g}return n}const E5={inputOptions:Ze,toolId:v.NURIMISAKI_UNSHADED_ENDPOINTS,negative_constraints:[{toolId:v.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."}],shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:je},solver_func:m5};function b5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=Ve(o,$.SASHIGANE),u=Ve(o,$.SASHIGANE_BENDS);let d=`constraint sashigane_bend_region_count_p(${s}, ${l}, sashigane);
`;return d+=`constraint ${u} = true;
`,d}function C5(t,e){return ze(t,e,b5)}const w5={inputOptions:Ze,toolId:v.SASHIGANE_BEND_REGION_COUNT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:je},solver_func:C5};function y5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Ve(o,$.SASHIGANE),l=r.value;if(!l)return"";const u=parseInt(l);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${s}) == ${u};
`}function I5(t,e){return ze(t,e,y5)}const O5={inputOptions:ei,toolId:v.SASHIGANE_REGION_SUM,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:je},solver_func:I5};function x5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Ve(o,$.CELL_CENTER_LOOP)} == 1;
`:""}function A5(t,e){return ze(t,e,x5)}const S5={inputOptions:Ze,toolId:v.CELL_ON_THE_LOOP,shape:Ys,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:je},solver_func:A5};function D5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Ve(o,$.CELL_CENTER_LOOP)} == 0;
`:""}function L5(t,e){return ze(t,e,D5)}const R5={inputOptions:Ze,toolId:v.CELL_NOT_ON_THE_LOOP,shape:Tr,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:je},solver_func:L5};function N5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint sum(${ve(u,$.CELL_CENTER_LOOP)}) == ${s};
`}function k5(t,e){return ze(t,e,N5)}const T5={inputOptions:Ze,toolId:v.COUNT_LOOP_NEIGHBOUR_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:je},solver_func:k5},M5={inputOptions:ei,toolId:v.TWILIGHT_CAVE_FILLOMINO_CLUE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:je}};function $5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=Ve(o,$.CAVE_SHADING),u=Sl(e,o),d=[];for(const g of u){const h=ve(g,$.CAVE_SHADING);d.push(h)}return`constraint cave_clue_p(${s}, ${l}, ${d[0]}, ${d[1]}, ${d[2]}, ${d[3]});
`}function U5(t,e){return ze(t,e,$5)}const G5={inputOptions:Ze,toolId:v.CAVE_CLUE,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:je},solver_func:U5};function F5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=Ve(o,$.CAVE_SHADING),u=Ve(o,$.CAVE_REGIONS),d=Sl(e,o),f=[];for(const h of d){const m=ve(h,$.CAVE_SHADING);f.push(m)}return`constraint cave_shaded_region_size_unshaded_seen_orthogonally_clue_p(${s}, ${l}, ${u}, ${$.CAVE_REGIONS}, ${f[0]}, ${f[1]}, ${f[2]}, ${f[3]});
`}function z5(t,e){return ze(t,e,F5)}const P5={inputOptions:Ze,toolId:v.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,shape:Tr,meta:{description:"An unshaded circled clue (cave) indicates the total number of unshaded cells seen in the four orthogonal directions, including the clue cell. A shaded circle clue (wall) indicates the size of the shaded region.",tags:[],categories:je},solver_func:z5};function B5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=r.value;if(!s)return"";const l=parseInt(s);let u="";const d=Se(o),f=Ve(o,$.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),h=ve(g,$.BOARD),m=ve(g,$.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${f});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${d});
`;const E=e.getCellsByKnightMove(o),C=ve(E,$.BOARD),w=ve(E,$.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${C}, ${w}, ${f});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${d});
`;const y=[Te.NE,Te.NW,Te.SE,Te.SW],x=[];for(const G of y)e.getCellsInDirection(o.r,o.c,G).forEach(U=>x.push(U));const N=ve(x,$.BOARD),T=ve(x,$.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${N}, ${T}, ${f});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${d});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${l};
`,u}function H5(t,e){return ze(t,e,B5)}const W5={inputOptions:ei,toolId:v.CHAOS_CONSTRUCTION_CHESS_SUMS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:je},solver_func:H5};function Y5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=r.value;if(!s)return"";const l=parseInt(s);let u="";const d=Se(o),f=Ve(o,$.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),h=ve(g,$.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${f}) >= ${l};
`;const m=[Te.N,Te.S,Te.E,Te.W],E=[];for(const C of m){const w=e.getCellsInDirection(o.r,o.c,C);if(!w.length)continue;const y=ve(w,$.BOARD),x=ve(w,$.UNKNOWN_REGIONS),N=`in_arrow_${n}_${C}`,T=`in_arrow_${n}_${C}[1]`;E.push(T),u+=`array[index_set(${y})] of var bool: ${N};
`,u+=`constraint chaos_construction_arrow_knots_p(${y}, ${x}, ${N}, ${d}, ${f});
`}return u+=`constraint sum([${E.join(",")}]) == ${l};
`,u}function j5(t,e){return ze(t,e,Y5)}const K5={inputOptions:ei,toolId:v.CHAOS_CONSTRUCTION_ARROW_KNOTS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:je},solver_func:j5};function V5(t,e,n,r){return Bl(e,r,$.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function q5(t,e){return ze(t,e,V5)}const X5={inputOptions:ei,toolId:v.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,shape:Tr,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:je},solver_func:q5};function Z5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=Ve(o,$.UNKNOWN_REGIONS),d=[...e.getNeighboorCells(o)],f=ve(d,$.UNKNOWN_REGIONS);return`constraint chaos_construction_neighbour_cells_same_region_count_p(${s}, ${l}, ${f});
`}function Q5(t,e){return ze(t,e,Z5)}const J5={inputOptions:Ze,toolId:v.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT,shape:Tr,meta:{description:"A digit in a circle shows the amount of cells touching it, orthogonally and diagonally, not including itself, which are part of the same region.",tags:[],categories:je},solver_func:Q5};function e3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function t3(t,e){return ze(t,e,e3)}const n3={inputOptions:Ze,toolId:v.DIRECTED_PATH_START,shape:{type:W.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:je},solver_func:t3};function r3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function i3(t,e){return ze(t,e,r3)}const o3={inputOptions:Ze,toolId:v.DIRECTED_PATH_END,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:je},solver_func:i3};function s3(t,e){let n="";const r=e.constraints,i=Dl(Object.values(r)),o=t.puzzle.grid;for(const d of i.values())if(!(d.length<=1))for(const[f,g]of d.flatMap((h,m)=>d.slice(m+1).map(E=>[h,E]))){const h=f.cell,m=g.cell,E=o.getCell(h.r,h.c),C=o.getCell(m.r,m.c);if(!E||!C)continue;const w=Ve(E,$.BOARD),y=Ve(C,$.BOARD);n+=`constraint ${w} == ${y};
`}const l=[...i.values()].map(d=>d[0].cell).map(d=>o.getCell(d.r,d.c)).filter(d=>d!==void 0),u=ve(l,$.BOARD);return n+=`constraint alldifferent(${u});
`,n}const a3={inputOptions:ei,toolId:v.TELEPORT,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:je},solver_func:s3};function l3(t,e){let n="";const r=e.constraints,i=t.puzzle.grid,o=Object.values(r).map(d=>d.cell),s=new Set(o.map(d=>i.getCell(d.r,d.c)).filter(d=>!!d)),l=ve([...s],$.NURIKABE_REGIONS);n+=`constraint all_different(${l});
`;let u=0;for(const[d,f]of Object.entries(r)){const g=f.cell,h=i.getCell(g.r,g.c);if(!h)continue;const m=f.value;if(!m)continue;const E=l_(t,m,d);if(!E)continue;const C=E[1];n+=E[0];const w=Ve(h,$.NURIKABE_REGIONS);n+=`constraint nurikabe_island_product_of_sum_and_size_p(${$.BOARD}, ${$.NURIKABE_REGIONS}, ${w}, ${C});
`,u+=1}return n+=`constraint count_unique_values(array1d(${$.NURIKABE_REGIONS})) == ${u+1};
`,n}const c3={inputOptions:ei,toolId:v.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:je},solver_func:l3};function u3(t,e,n,r){return Bl(e,r,$.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function d3(t,e){return ze(t,e,u3)}const _3={inputOptions:Ze,toolId:v.NURIKABE_SEEN_WATERWAY_CELLS,shape:{...Ys,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:je},solver_func:d3};function f3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=Ve(o,$.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${$.NURIKABE_REGIONS}, ${l}, ${s});
`}function g3(t,e){return ze(t,e,f3)}const h3={inputOptions:Ze,toolId:v.NURIKABE_ISLAND_SIZE_CELL,shape:Tr,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:je},solver_func:g3};function v3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${Ve(o,$.CONNECT_FOUR)});
`:""}function p3(t,e){return ze(t,e,v3)}const m3={inputOptions:Ze,toolId:v.CONNECT_FOUR_YELLOW,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:je},solver_func:p3};function E3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${Ve(o,$.CONNECT_FOUR)});
`:""}function b3(t,e){return ze(t,e,E3)}const C3={inputOptions:Ze,toolId:v.CONENCT_FOUR_RED,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:je},solver_func:b3};function w3(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(g=>g.cell),l=new Set(s.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),d=`${$o([...l],$.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_size_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_size_clues);
`;for(const g of Object.values(r)){const h=g.cell,m=n.getCell(h.r,h.c);if(!m)continue;const E=Se(m),C=Ve(m,$.SHIKAKU_REGIONS),w=Ve(m,$.SHIKAKU_WIDTH),y=Ve(m,$.SHIKAKU_HEIGHT);o+=`constraint shikaku_region_size_p(${$.SHIKAKU_REGIONS}, ${C}, ${E}, ${w}, ${y});
`}return e.negative_constraints&&!!e.negative_constraints[v.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE]&&(o+=`
% ${v.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${$.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`),o}const y3={inputOptions:Ze,toolId:v.SHIKAKU_REGION_SIZE,negative_constraints:[{toolId:v.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,description:"Each shikaku region contains exactly one circle where a digit in a circle indicates the number of cells in its region."}],shape:Tr,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:je},solver_func:w3};function I3(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";const s=i.map(h=>h.cell),l=new Set(s.map(h=>n.getCell(h.r,h.c)).filter(h=>!!h)),d=`${$o([...l],$.SHIKAKU_REGIONS).join(`,
	`)}`;o+=`array[int] of var int: shikaku_region_sum_clues = [
	${d}
];
`,o+=`constraint alldifferent(shikaku_region_sum_clues);
`;const f={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[h,m]of Object.entries(r)){const E=m.cell,C=n.getCell(E.r,E.c);if(!C)continue;const w=Ve(C,$.SHIKAKU_REGIONS),y=m.value??"",x=l_(t,y,h,f);if(!x)continue;const N=x[1];o+=x[0],o+=`constraint shikaku_region_sum_p(${$.BOARD}, ${$.SHIKAKU_REGIONS}, ${w}, ${N});
`}return e.negative_constraints&&!!e.negative_constraints[v.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE]&&(o+=`
% ${v.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE}
`,o+=`constraint shikaku_each_region_contains_one_circle_p(${$.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`),o}const O3={inputOptions:{type:fe.SINGLE_CELL,valueUpdater:(t,e)=>js(t,e,Hl),defaultValue:"?"},toolId:v.SHIKAKU_REGION_SUM,negative_constraints:[{toolId:v.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,description:"Each shikaku region contains exactly one shikaku region sum clue, and each clue indicates the sum of the digits in its shikaku region."}],shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:je},solver_func:I3};function x3(t,e){const n=t.puzzle.grid,r=e.constraints,i=Object.values(r);let o="";for(const[s,l]of i.entries()){const u=l.cell,d=n.getCell(u.r,u.c);if(!d)continue;const f=Se(d),g=Ve(d,$.BYOKC_GRID);o+=`constraint ${g} == ${s+1};
`,o+=`constraint byok_cage_cell_size_p(${$.BYOKC_GRID}, ${f}, ${g});
`}return o}const A3={inputOptions:Ze,toolId:v.BYOK_CAGE_SIZE,shape:Tr,meta:{description:"Circles appear in cages and count the total number of cells in that cage. All circles are given.",tags:[],categories:je},solver_func:x3};function S3(t,e){const n=t.puzzle.grid,r=e.constraints;let i="";for(const s of Object.values(r)){const l=s.cell,u=n.getCell(l.r,l.c);if(!u)continue;const d=Ve(u,$.BYOKC_GRID);i+=`constraint byok_not_cage_cell_p(${d});
`}if(!e.negative_constraints)return i;if(!!e.negative_constraints[v.ALL_SQUARES_GIVEN]){i+=`
% ${v.ALL_SQUARES_GIVEN}
`;for(const s of n.getAllCells()){if(Uo(r,s))continue;const d=`constraint ${Ve(s,$.BYOKC_GRID)} > 0;
`;i+=d}}return i}const D3={inputOptions:Ze,toolId:v.BYOK_NOT_CAGE_CELL,negative_constraints:[{toolId:v.ALL_SQUARES_GIVEN,description:"All such squares are given."}],shape:Ys,meta:{description:"Squares indicate that a cell is not in any cage.",tags:[],categories:je},solver_func:S3};function L3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${Ve(o,$.YIN_YANG)} == 1;
`:""}function R3(t,e){return ze(t,e,L3)}const N3={inputOptions:Ze,toolId:v.YIN_YANG_SHADED_CELL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"var(--constraint-color-gray)"}},meta:{description:"Grey shaded cells are shaded yin yang cells.",tags:[],categories:je},solver_func:R3};function k3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getNeighboorCells(o),u=[o,...l];return`constraint yin_yang_minesweeper_p(${ve(u,$.YIN_YANG)}, ${s});
`}function T3(t,e){return ze(t,e,k3)}const M3={inputOptions:Ze,toolId:v.YIN_YANG_MINESWEEPER,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:je},solver_func:T3};function $3(t,e){return c_(t,e,$.YIN_YANG,"yin_yang_seen_unshaded_p")}const U3={inputOptions:Ze,toolId:v.YIN_YANG_SEEN_UNSHADED_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je},solver_func:$3};function G3(t,e){return c_(t,e,$.YIN_YANG,"yin_yang_seen_shaded_p")}const F3={inputOptions:Ze,toolId:v.YIN_YANG_SEEN_SHADED_CELLS,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:je},solver_func:G3};function z3(t,e){return c_(t,e,$.YIN_YANG,"yin_yang_seen_same_shade_p")}const P3={inputOptions:Ze,toolId:v.YIN_YANG_SEEN_SAME_SHADE_CELLS,shape:Ys,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:je},solver_func:z3};function B3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=Ve(o,$.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),d=ve(u,$.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${s}, ${l}, ${d});
`}function H3(t,e){return ze(t,e,B3)}const W3={inputOptions:Ze,toolId:v.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:je},solver_func:H3};function Y3(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const s=Se(o),l=e.getNeighboorCells(o);return`constraint count(${ve(l,$.YIN_YANG)}, 1) == ${s};
`}function j3(t,e){return ze(t,e,Y3)}const K3={inputOptions:Ze,toolId:v.YIN_YANG_SHADED_NEIGHBOURS_COUNT,shape:{type:W.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:je},solver_func:j3};function V3(t,e){let n=`
% ${e.tool_id}
`;const r=e.constraints,i=Dl(Object.values(r)),o=t.puzzle.grid;for(const s of i.values()){if(s.length<=1)continue;const u=s.map(f=>f.cell).map(f=>o.getCell(f.r,f.c)).filter(f=>f!==void 0),d=ve(u,$.YIN_YANG);n+=`constraint all_equal(${d});
`}return n}const q3={inputOptions:ei,toolId:v.YIN_YANG_LABELED_SHADE_CELL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"Cells in cages with the same label have the yin yang shading.",tags:[],categories:je},solver_func:V3},Wl=[z.SINGLE_CELL_ARROW_TOOL,z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT],Yl={type:fe.SINGLE_CELL_ARROW,cornerOrEdge:Dt.CORNER_OR_EDGE};function jl(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=n(o,s);r+=l}return r}function X3(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const s=ve(o,$.SASHIGANE),l=ve(o,$.SASHIGANE_BENDS),u=Se(r),d=Ve(r,$.SASHIGANE);let f=`constraint sashigane_arrow_points_to_bend_p(${u}, ${d}, ${s}, ${l});
`;return f+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,f}function Z3(t,e){return jl(t,e,X3)}const Q3={inputOptions:Yl,toolId:v.SASHIGANE_ARROW_POINTS_TO_BEND,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Wl},solver_func:Z3};function J3(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+Ct(o).join(",")+"]",u=ve(o,$.CELL_CENTER_LOOP),d=Se(r);return`constraint thermo_sightline_loop_arrow_p(${l}, ${u}, ${d});
`}function eM(t,e){return jl(t,e,J3)}const tM={inputOptions:Yl,toolId:v.THERMO_SIGHTLINE_LOOP_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Wl},solver_func:eM};function nM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),l="["+Ct(o).join(",")+"]",u=ve(o,$.CELL_CENTER_LOOP),d=Se(r);return`constraint internal_loop_skyscrapers_p(${l}, ${u}, ${d});
`}function rM(t,e){return jl(t,e,nM)}const iM={inputOptions:Yl,toolId:v.INTERNAL_LOOP_SKYSCRAPERS,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell on the loop represents a skyscraper with a height equal to its value (non-loop cells are not skyscrapers). A digit in a clued cell gives the number of skyscrapers visible in the indicated direction (not including the cell itself), where skyscrapers block the view of skyscrapers with the same or lower height behind them. The clued cell may or may not be on the loop.",tags:[],categories:Wl},solver_func:rM};function oM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),s=Se(r);return`constraint skyscrapers_p(${ve(o,$.BOARD)}, ${s});
`}function sM(t,e){return jl(t,e,oM)}const aM={inputOptions:Yl,toolId:v.SKYSCRAPERS_ARROW,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"A digit on an arrow indicates the number of visible digits in that direction. A digit is visible only if it is greater than all digits between it and the arrow.",tags:[],categories:Wl},solver_func:sM},lM={inputOptions:{type:fe.SINGLE_CELL},toolId:v.FOG_LIGHTS,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:[z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT,z.FOG_TOOL]}},cM={toolId:v.CUSTOM_FOG_CLEARING,negative_constraints:[{toolId:v.FOG_CLEARING_ITSELF,description:"On cell input, clear itself."},{toolId:v.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS,description:"On cell input, clear orthogonal neighbours."},{toolId:v.FOG_CLEARING_DIAGONAL_NEIGHBOURS,description:"On cell input, clear diagonal neighbours."},{toolId:v.FOG_CLEARING_CONTAINING_ROW,description:"On cell input, clear containing row."},{toolId:v.FOG_CLEARING_CONTAINING_COLUMN,description:"On cell input, clear containing column."},{toolId:v.FOG_CLEARING_KNIGHTS_MOVE,description:"On cell input, clear cells a knight's move away."}],meta:{description:"",tags:[],categories:[z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT,z.FOG_TOOL]}},Nn=[z.SINGLE_CELL_CONSTRAINT,z.LOCAL_CONSTRAINT,z.SINGLE_CELL_MULTIARROW_TOOL,z.LOCAL_ELEMENT],gr={type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},kn={type:fe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Dt.CORNER_OR_EDGE};function Tn(t,e,n){let r="";const i=e.constraints;if(!i)return r;const o=t.puzzle.grid;for(const s of Object.values(i)){const l=n(o,s);r+=l}return r}function uM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=Ve(r,$.GALAXY_REGIONS),s=e.directions,l=[];for(const d of s){const f=t.getCellsInDirection(r.r,r.c,d),h=`count(${ve(f,$.GALAXY_REGIONS)}, ${o})`;l.push(h)}return l.length?`constraint ${l.join(" + ")} = ${i};
`:""}function dM(t,e){return Tn(t,e,uM)}const _M={inputOptions:kn,toolId:v.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,shape:gr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:Nn},solver_func:dM};function fM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=Ve(r,$.YIN_YANG),s=e.directions,l=[];for(const d of s){const f=t.getCellsInDirection(r.r,r.c,d),g=ve(f,$.YIN_YANG),h=ve(f,$.FILLOMINO_REGIONS);l.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${h})`)}return l.length?`constraint ${l.join(" + ")} == ${i};
`:""}function gM(t,e){return Tn(t,e,fM)}const hM={inputOptions:kn,toolId:v.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,shape:gr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:Nn},solver_func:gM};function vM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${ve(d,$.CELL_CENTER_LOOP)})`;s.push(g)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function pM(t,e){return Tn(t,e,vM)}const mM={inputOptions:kn,toolId:v.LOOP_CELL_COUNT_ARROWS,shape:gr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:Nn},solver_func:pM};function EM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=Ve(r,$.YIN_YANG),s=e.directions;let l="";for(const u of s){const d=t.getCellsInDirection(r.r,r.c,u),f=ve(d,$.BOARD),g=ve(d,$.YIN_YANG);l+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${f}, ${g}) == ${i};
`}return l}function bM(t,e){return Tn(t,e,EM)}const CM={inputOptions:kn,toolId:v.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,shape:gr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:Nn},solver_func:bM};function wM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=ve(u,$.YIN_YANG);s+=`constraint count(${d}, 1) == ${i};
`}return s}function yM(t,e){let n=Tn(t,e,wM);if(!e.negative_constraints||!!!e.negative_constraints[v.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN])return n;const i=e.constraints,o=t.puzzle.grid;n+=`
% ${v.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN}
`;for(const s of o.getAllCells()){const l=Uo(i,s),u=l?l.directions:[],d=Se(s),f=[Te.E,Te.N,Te.S,Te.W];for(const g of f){if(u.includes(g))continue;const h=o.getCellsInDirection(s.r,s.c,g),m=ve(h,$.YIN_YANG);n+=`constraint count(${m}, 1) != ${d};
`}}return n}const IM={inputOptions:kn,toolId:v.YIN_YANG_COUNT_SHADED_CELLS,negative_constraints:[{toolId:v.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given."}],shape:gr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:Nn},solver_func:yM};function OM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),g=`count(${ve(d,$.YIN_YANG)}, 1)`;s.push(g)}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function xM(t,e){return Tn(t,e,OM)}const AM={inputOptions:kn,toolId:v.YIN_YANG_COMBINED_SHADED_CELLS_COUNT_EXCEPT_ITSELF,shape:gr,meta:{description:"The digit in a cell with one or more arrows is equal to the total number of shaded cells that appear in the indicated directions combined (not including the arrow cell itself).",tags:[],categories:Nn},solver_func:xM};function SM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=Ve(r,$.UNKNOWN_REGIONS),s=e.directions,l=[];for(const f of s){const g=t.getCellsInDirection(r.r,r.c,f),h=ve(g,$.UNKNOWN_REGIONS);l.push(h)}return`constraint ${l.map(f=>`count_different(${f}, ${o})`).join(" + ")} == ${i};
`}function DM(t,e){return Tn(t,e,SM)}const LM={inputOptions:kn,toolId:v.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,shape:gr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:Nn},solver_func:DM};function RM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=Ve(r,$.UNKNOWN_REGIONS),s=e.directions,l=[];for(const f of s){const g=t.getCellsInDirection(r.r,r.c,f),h=ve(g,$.UNKNOWN_REGIONS);l.push(h)}return`constraint ${l.map(f=>`count_uninterrupted(${f}, ${o})`).join(" + ")} + 1 == ${i};
`}function NM(t,e){return Tn(t,e,RM)}const kM={inputOptions:kn,toolId:v.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS,shape:gr,meta:{description:"A digit in a cell with arrow(s) gives the total number of cells in the same region as the arrow cell in all indicated directions combined (this count includes the arrow cell itself.) Cells in different regions to the arrow cell immediately block vision (and therefore prevent any cells further along the arrow's path in that direction from contributing to the arrow cell's count).",tags:[],categories:Nn},solver_func:NM};function TM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),d=ve(u,$.BOARD);s+=`constraint cold_arrows_p(${d}, ${i});
`}return s}function MM(t,e){return Tn(t,e,TM)}const $M={inputOptions:kn,toolId:v.COLD_ARROWS,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:Nn},solver_func:MM};function UM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=e.directions;let s="";for(const l of o){const u=t.getCellsInDirection(r.r,r.c,l),f="["+Ct(u).join(",")+"]";s+=`constraint hot_arrows_p(${f}, ${i});
`}return s}function GM(t,e){return Tn(t,e,UM)}const FM={inputOptions:kn,toolId:v.HOT_ARROWS,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:Nn},solver_func:GM};function zM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u),g=`count(${ve(d,$.NURIKABE_SHADING)}, 1)`;s.push(g)}return`constraint ${s.join(" + ")} = ${i};
`}function PM(t,e){return Tn(t,e,zM)}const BM={inputOptions:kn,toolId:v.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,shape:gr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:Nn},solver_func:PM};function HM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=Ve(r,$.CONNECT_FOUR),s=e.directions,l=[];for(const f of s){const g=t.getCellsInDirection(r.r,r.c,f);l.push(...g)}return l.length===0?"":`constraint count(${ve(l,$.CONNECT_FOUR)}, ${o}) == ${i};
`}function WM(t,e){return Tn(t,e,HM)}const YM={inputOptions:kn,toolId:v.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,shape:gr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:Nn},solver_func:WM};function jM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=Ve(r,$.UNKNOWN_REGIONS),s=e.directions;let l="";for(const u of s){const d=t.getCellsInDirection(r.r,r.c,u),f=ve(d,$.UNKNOWN_REGIONS);l+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${f});
`}return l}function KM(t,e){return Tn(t,e,jM)}const VM={inputOptions:kn,toolId:v.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,shape:gr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:Nn},solver_func:KM};function qM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Se(r),o=e.directions,s=[];for(const u of o){const d=t.getCellsInDirection(r.r,r.c,u);if(d.length!=0){if(u===Te.N||u===Te.S){const f=u===Te.N?0:-1,h=`count(${"["+d.map(m=>`${$.SHADED_BOUNDARIES_VERTICAL}[${m.r+f}, ${m.c}]`).join(",")+"]"}, true)`;s.push(h)}if(u===Te.E||u===Te.W){const f=u==Te.W?0:-1,h=`count(${"["+d.map(m=>`${$.SHADED_BOUNDARIES_HORIZONTAL}[${m.r}, ${m.c+f}]`).join(",")+"]"}, true)`;s.push(h)}}}return s.length?`constraint ${s.join(" + ")} = ${i};
`:""}function XM(t,e){return Tn(t,e,qM)}const ZM={inputOptions:kn,toolId:v.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS,shape:gr,meta:{description:"A digit in a cell with one or more arrows indicates the total number of shaded boundaries in the directions of all arrows combined.",tags:[],categories:Nn},solver_func:XM};function QM(t,e){if(t===void 0||hi(t,{maxLength:10,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0}))return t}const JM={type:fe.VALUE_TOOL,defaultValue:"",valueUpdater:QM};function e$(t,e,n,r){const i=n.value;if(!i)return"";const o=parseInt(i);return`constraint ${r}(board, ${o});
`}function d_(t,e,n){let r="";const i=e.constraints;if(!i)return r;for(const[o,s]of Object.entries(i)){const l=e$(t,o,s,n);r+=l}return r}function t$(t,e){return d_(t,e,"forbidden_adjacent_sum_p")}const n$={inputOptions:JM,toolId:v.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUED_GLOBAL_CONSTRAINT]},solver_func:t$};function r$(t,e){return d_(t,e,"minimum_diagonally_adjacent_difference")}const i$={toolId:v.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUED_GLOBAL_CONSTRAINT]},solver_func:r$};function o$(t,e){return d_(t,e,"forbidden_knight_sum_p")}const s$={toolId:v.FORBIDDEN_KNIGHT_SUM,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUED_GLOBAL_CONSTRAINT]},solver_func:o$};function a$(t,e,n,r){const i=r.value;if(!i)return"";const o=parseInt(i),s=[...e.getUsedRegions()];s.sort();const l=s.length;return`constraint lits_max_tetromino_sum_p(${$.BOARD}, ${$.LITS_GRID}, ${o}, 0..${l});
`}function l$(t,e){return ze(t,e,a$)}const c$={toolId:v.LITS_MAX_TETROMINO_SUM,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUED_GLOBAL_CONSTRAINT]},solver_func:l$};v.VAMPIRE_AND_PREY,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;v.MARKED_CELLS,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;function u$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,s+=Eo(n,1,!0,$.DOUBLERS),s+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,s}const d$={toolId:v.DOUBLERS,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]},solver_func:u$};function _$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s="negators_grid";let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,l+=Eo(n,1,!0,$.NEGATORS),l+=`
constraint one_of_each_digit_p(board, ${s}, ALLOWED_DIGITS);
`,l+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${s});
`,l}const f$={toolId:v.NEGATORS,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]},solver_func:_$};v.HOT_CELLS,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;v.COLD_CELLS,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;v.DECREMENT_FOUNTAIN,z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT;function g$(t,e){const r=t.puzzle.grid,i=e.tool_id;if(r.getAllCells().some(l=>l.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";let s=`
% ${i}
`;return s+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,s+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,s}const h$={toolId:v.NEXUS,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]},solver_func:g$};function v$(t,e){const n=t.puzzle,r=n.grid,i=e.tool_id;if(r.getAllCells().some(u=>u.outside))return console.warn(`${i} not implemented when there are cells outside the grid.`),"";const s=$.INDEXER_CELLS_GRID;let l=`
% ${i}
`;return l+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,l+=Eo(n,2,!0,s),l+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,l+=`constraint indexer_cells_p(board, ${s}, values_grid);
`,l}const p$={toolId:v.INDEXER_CELLS,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[z.LOCAL_ELEMENT,z.VALUE_MODIFIER_CONSTRAINT]},solver_func:v$},m$=[z.CORNER_LINE_CONSTRAINT,z.CORNER_LINE_TOOL,z.LOCAL_CONSTRAINT,z.LOCAL_ELEMENT],E$={inputOptions:{type:fe.CORNER_LINE},toolId:v.MAZE_WALL,shape:{type:W.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:m$}};function b$(t){if(t===void 0||hi(t,{maxLength:30,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0}))return t}const C$={type:fe.VALUE_TOOL,defaultValue:"",valueUpdater:b$};function w$(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};return t.getOrSetSharedVar(e,n,r)}function y$(t,e,n,r){const i=r.value,o=r.name;if(!i)return"";const s=o.length?o:`var_${n}`,l=w$(t,i,s);return l?l[0]:""}function I$(t,e){return ze(t,e,y$)}const O$={inputOptions:C$,toolId:v.VARIABLE_CONSTRAINT,meta:{description:"Create global variables with given values.",tags:[],categories:[z.LOCAL_ELEMENT,z.OTHER_CONSTRAINTS]},solver_func:I$},Bt={[v.GIVEN]:zx,[v.DIGIT]:Px,[v.REGIONS]:Bx,[v.OUTSIDE]:jx,[v.CORNER_PM]:Hx,[v.CENTER_PM]:Wx,[v.HIGHLIGHTS]:Yx,[v.PEN_TOOL]:Kx,[v.SUDOKU_RULES_DO_NOT_APPLY]:RS,[v.LEAVE_EMPTY_CELLS_EMPTY]:kS,[v.LITS]:c2,[v.HEXED_SUDOKU]:TS,[v.FILLOMINO]:a2,[v.ANTIKNIGHT]:$S,[v.ANTI_LONG_KNIGHT]:zS,[v.ANTIKING]:BS,[v.ANTI_GIRAFFE]:GS,[v.DISJOINT_GROUPS]:WS,[v.TANGO]:jS,[v.NONCONSECUTIVE]:VS,[v.NONRATIO]:XS,[v.ANTI_ENTROPY]:eD,[v.GLOBAL_ENTROPY]:nD,[v.GLOBAL_INDEXING_COLUMN]:iD,[v.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:sD,[v.NOT_ALL_ODD_IN_A_2X2_SQUARE]:lD,[v.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:QS,[v.CONSECUTIVE_CLOSE_NEIGHBORS]:uD,[v.NEGATIVE_DIAGONAL]:gD,[v.POSITIVE_DIAGONAL]:vD,[v.NEGATIVE_ANTIDIAGONAL]:mD,[v.POSITIVE_ANTIDIAGONAL]:bD,[v.PARITY_MIRROR_NEGATIVE_DIAGONAL]:wD,[v.PARITY_MIRROR_POSITIVE_DIAGONAL]:ID,[v.DOUBLERS]:d$,[v.NEGATORS]:f$,[v.NEXUS]:h$,[v.INDEXER_CELLS]:p$,[v.CHAOS_CONSTRUCTION]:SD,[v.NUMBERED_CHAOS_CONSTRUCTION]:LD,[v.CHAOS_CONSTRUCTION_SUGURU]:ND,[v.YIN_YANG]:B2,[v.NURIMISAKI]:MD,[v.NURIKABE]:GD,[v.BUILD_YOUR_OWN_KILLER_CAGES]:d2,[v.SHADED_BOUNDARIES]:f2,[v.YIN_YANG_CHAOS_CONSTRUCTION_FULLY_SHADED_OR_FULLY_UNSHADED]:_D,[v.TWO_CONTIGUOUS_REGIONS]:zD,[v.SASHIGANE]:BD,[v.NORINORI]:WD,[v.SHIKAKU]:KD,[v.GOLDILOCKS_ZONE]:ZD,[v.CELL_CENTER_LOOP_NO_TOUCHING]:q2,[v.CAVE]:oL,[v.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:JD,[v.GALAXIES]:U2,[v.STAR_BATTLE]:h2,[v.ONE_STAR_PER_GALAXY]:p2,[v.PENTOMINO_TILLING]:r2,[v.LITS_BLACK_WHITE_STAR_BATTLE]:o2,[v.NORINORI_STAR_BATTLE]:qD,[v.MAZE_DIRECTED_PATH]:S2,[v.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:D2,[v.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:L2,[v.CONNECT_FOUR]:M2,[v.ODD]:Jk,[v.EVEN]:tT,[v.MINIMUM]:rT,[v.MAXIMUM]:oT,[v.ODD_MINESWEEPER]:lT,[v.EVEN_MINESWEEPER]:uT,[v.WATCHTOWER]:vT,[v.NOT_WATCHTOWER]:mT,[v.FARSIGHT]:bT,[v.RADAR]:yT,[v.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:fT,[v.ORTHOGONAL_SUM]:xT,[v.DIAGONALLY_ADJACENT_SUM]:BT,[v.INDEXING_COLUMN]:DT,[v.INDEXING_ROW]:NT,[v.LOW_DIGIT]:TT,[v.HIGH_DIGIT]:$T,[v.FRIENDLY_CELL]:FT,[v.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:YT,[v.SANDWICH_ROW_COL_COUNT]:VT,[v.COUNTING_CIRCLES]:XT,[v.REVERSE_COUNTING_CIRCLES]:QT,[v.COLORED_COUNTING_CIRCLES]:e5,[v.UNIQUE_CELLS]:n5,[v.SEEN_EVEN_COUNT]:o5,[v.SEEN_ODD_COUNT]:u5,[v.CELL_KNIGHT_WHISPERS]:l5,[v.YIN_YANG_SHADED_CELL]:N3,[v.YIN_YANG_MINESWEEPER]:M3,[v.YIN_YANG_SEEN_UNSHADED_CELLS]:U3,[v.YIN_YANG_SEEN_SHADED_CELLS]:F3,[v.YIN_YANG_SEEN_SAME_SHADE_CELLS]:P3,[v.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:W3,[v.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:K3,[v.YIN_YANG_LABELED_SHADE_CELL]:q3,[v.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:f5,[v.SEEN_REGION_BORDERS_COUNT]:v5,[v.NURIMISAKI_UNSHADED_ENDPOINTS]:E5,[v.SASHIGANE_BEND_REGION_COUNT]:w5,[v.SASHIGANE_REGION_SUM]:O5,[v.CELL_ON_THE_LOOP]:S5,[v.CELL_NOT_ON_THE_LOOP]:R5,[v.COUNT_LOOP_NEIGHBOUR_CELLS]:T5,[v.CAVE_CLUE]:G5,[v.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE]:P5,[v.TWILIGHT_CAVE_FILLOMINO_CLUE]:M5,[v.YIN_YANG_FILLOMINO_PARITY]:t2,[v.SHIKAKU_REGION_SIZE]:y3,[v.SHIKAKU_REGION_SUM]:O3,[v.CHAOS_CONSTRUCTION_CHESS_SUMS]:W5,[v.CHAOS_CONSTRUCTION_ARROW_KNOTS]:K5,[v.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:X5,[v.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT]:J5,[v.BYOK_CAGE_SIZE]:A3,[v.BYOK_NOT_CAGE_CELL]:D3,[v.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:c3,[v.DIRECTED_PATH_START]:n3,[v.DIRECTED_PATH_END]:o3,[v.TELEPORT]:a3,[v.CONNECT_FOUR_YELLOW]:m3,[v.CONENCT_FOUR_RED]:C3,[v.SASHIGANE_ARROW_POINTS_TO_BEND]:Q3,[v.THERMO_SIGHTLINE_LOOP_ARROW]:tM,[v.INTERNAL_LOOP_SKYSCRAPERS]:iM,[v.SKYSCRAPERS_ARROW]:aM,[v.HOT_ARROWS]:FM,[v.COLD_ARROWS]:$M,[v.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:LM,[v.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS]:kM,[v.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:CM,[v.YIN_YANG_COUNT_SHADED_CELLS]:IM,[v.YIN_YANG_COMBINED_SHADED_CELLS_COUNT_EXCEPT_ITSELF]:AM,[v.LOOP_CELL_COUNT_ARROWS]:mM,[v.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:hM,[v.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:_M,[v.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:BM,[v.NURIKABE_SEEN_WATERWAY_CELLS]:_3,[v.NURIKABE_ISLAND_SIZE_CELL]:h3,[v.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:YM,[v.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:VM,[v.SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS]:ZM,[v.DIFFERENCE]:BA,[v.RATIO]:zA,[v.XV]:KA,[v.EDGE_INEQUALITY]:qA,[v.EDGE_SUM]:WA,[v.EDGE_PRODUCT]:XA,[v.EDGE_MODULO]:QA,[v.EDGE_FACTOR]:eS,[v.XY_DIFFERENCES]:rS,[v.YIN_YANG_WHITE_KROPKI]:lS,[v.YIN_YANG_KROPKI]:sS,[v.FILLOMINO_REGION_BORDER]:fS,[v.UNKNOWN_REGION_BORDER]:dS,[v.CHAOS_CONSTRUCTION_SUGURU_BORDER]:hS,[v.EDGE_CAVE_ONE_OF_EACH]:pS,[v.ONE_WAY_DOOR]:mS,[v.QUADRUPLE]:_A,[v.CORNER_SUM]:gA,[v.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:vA,[v.CORNER_EVEN_COUNT]:mA,[v.PRODUCT_SQUARE]:xA,[v.EQUAL_DIAGONAL_DIFFERENCES]:SA,[v.DIFFERENT_CORNER_DIAGONAL_SUMS]:LA,[v.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS]:CA,[v.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_SAME_REGION]:IA,[v.THERMOMETER]:_L,[v.FUZZY_THERMOMETER]:vL,[v.SLOW_THERMOMETER]:mL,[v.CUSTOM_THERMOMETER]:gL,[v.ROW_CYCLE_THERMOMETER]:CL,[v.PALINDROME]:yL,[v.RENBAN_LINE]:OL,[v.DOUBLE_RENBAN_LINE]:AL,[v.RENRENBANBAN_LINE]:DL,[v.N_CONSECUTIVE_RENBAN_LINE]:RL,[v.NABNER_LINE]:kL,[v.WHISPERS_LINE]:ML,[v.DUTCH_WHISPERS]:UL,[v.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:FL,[v.RENBAN_OR_WHISPERS_LINE]:PL,[v.RENBAN_OR_NABNER_LINE]:HL,[v.OUT_OF_ORDER_CONSECUTIVE_LINE]:YL,[v.INDEX_LINE]:KL,[v.UNIQUE_VALUES_LINE]:qL,[v.REPEATED_DIGITS_LINE]:IR,[v.REGION_SUM_LINE]:QL,[v.SUM_LINE]:eR,[v.XV_LINE]:NR,[v.ROW_SUM_LINE]:MR,[v.AT_LEAST_X_LINE]:UR,[v.SUPERFUZZY_ARROW]:xR,[v.AMBIGUOUS_ARROW]:SR,[v.HEADLESS_ARROW]:LR,[v.N_CONSECUTIVE_FUZZY_SUM_LINE]:FR,[v.PRODUCT_LINE]:PR,[v.ADJACENT_MULTIPLES_LINE]:HR,[v.ADJACENT_DIFFERENCES_COUNT_LINE]:YR,[v.LOOK_AND_SAY_LINE]:KR,[v.ARITHMETIC_SEQUENCE_LINE]:nR,[v.ZIPPER_LINE]:qR,[v.SEGMENTED_SUM_LINE]:ZR,[v.SEGMENTED_SUM_AND_RENBAN_LINE]:JR,[v.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:tN,[v.SAME_PARITY_LINE]:iR,[v.MODULAR_LINE]:sR,[v.UNIMODULAR_LINE]:lR,[v.MODULAR_OR_UNIMODULAR_LINE]:uR,[v.ODD_EVEN_OSCILLATOR_LINE]:_R,[v.HIGH_LOW_OSCILLATOR_LINE]:gR,[v.ENTROPIC_LINE]:pR,[v.ENTROPIC_OR_MODULAR_LINE]:bR,[v.INDEXING_COLUMN_IS_X_LINE]:CR,[v.INDEXING_ROW_IS_X_LINE]:wR,[v.INDEXER_CELLS_REGION_SUBSET_LINE]:iN,[v.PEAPODS]:sN,[v.YIN_YANG_INDEXING_LINE_COLORING]:HN,[v.YIN_YANG_SHADED_WHISPERS_LINE]:NN,[v.YIN_YANG_UNSHADED_ENTROPIC_LINE]:TN,[v.YIN_YANG_UNSHADED_MODULAR_LINE]:$N,[v.YIN_YANG_REGION_SUM_LINE]:PN,[v.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE]:GN,[v.GOLDILOCKS_ZONE_REGION_SUM]:cN,[v.BETWEEN_LINE]:fN,[v.LOCKOUT_LINE]:gN,[v.PARITY_COUNT_LINE]:mN,[v.TIGHTROPE_LINE]:vN,[v.DOUBLE_ARROW_LINE]:bN,[v.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:wN,[v.SPLIT_PEAS]:IN,[v.DOUBLERS_THERMOMETER]:dN,[v.DOUBLERS_BETWEEN_LINE]:xN,[v.DOUBLERS_DOUBLE_ARROW_LINE]:SN,[v.ARROW]:SO,[v.CHAOS_CONSTRUCTION_ARROW]:$O,[v.AVERAGE_ARROW]:RO,[v.BULBOUS_ARROW]:kO,[v.LOOP_POINTER_ARROW]:FO,[v.MAZE_WALL]:E$,[v.KILLER_CAGE]:ix,[v.UNIQUE_DIGITS_CAGE]:ax,[v.INVERTED_KILLER_CAGE]:ux,[v.SUM_CAGE]:_x,[v.SUM_CAGE_LOOK_AND_SAY]:gx,[v.PARITY_BALANCE_CAGE]:vx,[v.DIVISIBLE_KILLER_CAGE]:mx,[v.SPOTLIGHT_CAGE]:bx,[v.PUTTERIA_CAGE]:Cx,[v.MULTISET_CAGE]:yx,[v.VAULTED_CAGE]:Ox,[v.VAULTED_KILLER_CAGE]:Sx,[v.YIN_YANG_ANTITHESIS_KILLER_CAGE]:Rx,[v.YIN_YANG_BREAKEVEN_KILLER_CAGE]:kx,[v.DOUBLERS_KILLER_CAGE]:$x,[v.NEGATORS_KILLER_CAGE]:Fx,[v.CLONE_REGION]:sA,[v.SANDWICH_SUM]:rk,[v.MYSTERY_SANDWICH_SUM]:ok,[v.X_SUM]:uk,[v.SHORTSIGHTED_X_SUM]:_k,[v.SHIFTED_X_SUM]:gk,[v.BROKEN_X_SUM]:vk,[v.X_SUM_SKYSCRAPERS]:mk,[v.BATTLEFIELD]:bk,[v.SKYSCRAPERS]:wk,[v.X_INDEX]:Ok,[v.SANDWICH_SUM_XOR_X_SUM]:lk,[v.RISING_STREAK]:Ak,[v.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:Lk,[v.OUTSIDE_CONSECUTIVE_SUM]:Nk,[v.LOOPWICHES]:Mk,[v.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:Gk,[v.CHAOS_CONSTRUCTION_X_INDEX_REGION]:Pk,[v.CHAOS_CONSTRUCTION_X_SUM_REGION_BORDERS]:Wk,[v.PENTOMINO_BORDER_COUNT]:Kk,[v.LITTLE_KILLER_SUM]:YN,[v.LITTLE_KILLER_PRODUCT]:KN,[v.LITTLE_KILLER_LOOK_AND_SAY]:VN,[v.LITTLE_KILLER_REGION_SUM_PRODUCT]:ZN,[v.X_OMIT_LITTLE_KILLER_SUM]:XN,[v.NEGATORS_LITTLE_KILLER_SUM]:ek,[v.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER]:Qx,[v.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:eA,[v.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:rA,[v.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:n$,[v.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:i$,[v.FORBIDDEN_KNIGHT_SUM]:s$,[v.LITS_MAX_TETROMINO_SUM]:c$,[v.VARIABLE_CONSTRAINT]:O$,[v.FOG_LIGHTS]:lM,[v.CUSTOM_FOG_CLEARING]:cM,[v.COSMETIC_CELL_CENTER_SHAPE]:bS,[v.COSMETIC_CELL_ARROW]:CS,[v.COSMETIC_CELL_MULTI_ARROW]:wS,[v.COSMETIC_EDGE]:yS,[v.COSMETIC_CORNER]:IS,[v.COSMETIC_LINE]:OS,[v.COSMETIC_LINE_WITH_CIRCLE_ENDS]:xS,[v.COSMETIC_LINE_WITH_POLYGON_ENDS]:AS,[v.COSMETIC_ARROW]:DS,[v.COSMETIC_CAGE]:SS,[v.COSMETIC_OUTSIDE_DIRECTION]:LS};function Xr(t){return Array.isArray?Array.isArray(t):yp(t)==="[object Array]"}function x$(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function A$(t){return t==null?"":x$(t)}function Rr(t){return typeof t=="string"}function Cp(t){return typeof t=="number"}function S$(t){return t===!0||t===!1||D$(t)&&yp(t)=="[object Boolean]"}function wp(t){return typeof t=="object"}function D$(t){return wp(t)&&t!==null}function Wn(t){return t!=null}function Mu(t){return!t.trim().length}function yp(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const L$="Incorrect 'index' type",R$=t=>`Invalid value for key ${t}`,N$=t=>`Pattern length exceeds max of ${t}.`,k$=t=>`Missing ${t} property in key`,T$=t=>`Property 'weight' in key '${t}' must be a positive integer`,xh=Object.prototype.hasOwnProperty;class M${constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Ip(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ip(t){let e=null,n=null,r=null,i=1,o=null;if(Rr(t)||Xr(t))r=t,e=Ah(t),n=nd(t);else{if(!xh.call(t,"name"))throw new Error(k$("name"));const s=t.name;if(r=s,xh.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(T$(s));e=Ah(s),n=nd(s),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Ah(t){return Xr(t)?t:t.split(".")}function nd(t){return Xr(t)?t.join("."):t}function $$(t,e){let n=[],r=!1;const i=(o,s,l)=>{if(Wn(o))if(!s[l])n.push(o);else{let u=s[l];const d=o[u];if(!Wn(d))return;if(l===s.length-1&&(Rr(d)||Cp(d)||S$(d)))n.push(A$(d));else if(Xr(d)){r=!0;for(let f=0,g=d.length;f<g;f+=1)i(d[f],s,l+1)}else s.length&&i(d,s,l+1)}};return i(t,Rr(e)?e.split("."):e,0),r?n:n[0]}const U$={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},G$={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},F$={location:0,threshold:.6,distance:100},z$={useExtendedSearch:!1,getFn:$$,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var et={...G$,...U$,...F$,...z$};const P$=/[^ ]+/g;function B$(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(P$).length;if(n.has(o))return n.get(o);const s=1/Math.pow(o,.5*t),l=parseFloat(Math.round(s*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class __{constructor({getFn:e=et.getFn,fieldNormWeight:n=et.fieldNormWeight}={}){this.norm=B$(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Rr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Rr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Wn(e)||Mu(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Wn(s)){if(Xr(s)){let l=[];const u=[{nestedArrIndex:-1,value:s}];for(;u.length;){const{nestedArrIndex:d,value:f}=u.pop();if(Wn(f))if(Rr(f)&&!Mu(f)){let g={v:f,i:d,n:this.norm.get(f)};l.push(g)}else Xr(f)&&f.forEach((g,h)=>{u.push({nestedArrIndex:h,value:g})})}r.$[o]=l}else if(Rr(s)&&!Mu(s)){let l={v:s,n:this.norm.get(s)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Op(t,e,{getFn:n=et.getFn,fieldNormWeight:r=et.fieldNormWeight}={}){const i=new __({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Ip)),i.setSources(e),i.create(),i}function H$(t,{getFn:e=et.getFn,fieldNormWeight:n=et.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new __({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ka(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=et.distance,ignoreLocation:o=et.ignoreLocation}={}){const s=e/t.length;if(o)return s;const l=Math.abs(r-n);return i?s+l/i:l?1:s}function W$(t=[],e=et.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let s=t.length;o<s;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Ui=32;function Y$(t,e,n,{location:r=et.location,distance:i=et.distance,threshold:o=et.threshold,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,includeMatches:u=et.includeMatches,ignoreLocation:d=et.ignoreLocation}={}){if(e.length>Ui)throw new Error(N$(Ui));const f=e.length,g=t.length,h=Math.max(0,Math.min(r,g));let m=o,E=h;const C=l>1||u,w=C?Array(g):[];let y;for(;(y=t.indexOf(e,E))>-1;){let U=Ka(e,{currentLocation:y,expectedLocation:h,distance:i,ignoreLocation:d});if(m=Math.min(U,m),E=y+f,C){let H=0;for(;H<f;)w[y+H]=1,H+=1}}E=-1;let x=[],N=1,T=f+g;const G=1<<f-1;for(let U=0;U<f;U+=1){let H=0,re=T;for(;H<re;)Ka(e,{errors:U,currentLocation:h+re,expectedLocation:h,distance:i,ignoreLocation:d})<=m?H=re:T=re,re=Math.floor((T-H)/2+H);T=re;let te=Math.max(1,h-re+1),oe=s?g:Math.min(h+re,g)+f,se=Array(oe+2);se[oe+1]=(1<<U)-1;for(let Z=oe;Z>=te;Z-=1){let ye=Z-1,be=n[t.charAt(ye)];if(C&&(w[ye]=+!!be),se[Z]=(se[Z+1]<<1|1)&be,U&&(se[Z]|=(x[Z+1]|x[Z])<<1|1|x[Z+1]),se[Z]&G&&(N=Ka(e,{errors:U,currentLocation:ye,expectedLocation:h,distance:i,ignoreLocation:d}),N<=m)){if(m=N,E=ye,E<=h)break;te=Math.max(1,2*h-E)}}if(Ka(e,{errors:U+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:d})>m)break;x=se}const K={isMatch:E>=0,score:Math.max(.001,N)};if(C){const U=W$(w,l);U.length?u&&(K.indices=U):K.isMatch=!1}return K}function j$(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class xp{constructor(e,{location:n=et.location,threshold:r=et.threshold,distance:i=et.distance,includeMatches:o=et.includeMatches,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,isCaseSensitive:u=et.isCaseSensitive,ignoreLocation:d=et.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(h,m)=>{this.chunks.push({pattern:h,alphabet:j$(h),startIndex:m})},g=this.pattern.length;if(g>Ui){let h=0;const m=g%Ui,E=g-m;for(;h<E;)f(this.pattern.substr(h,Ui),h),h+=Ui;if(m){const C=g-Ui;f(this.pattern.substr(C),C)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:u,ignoreLocation:d}=this.options;let f=[],g=0,h=!1;this.chunks.forEach(({pattern:E,alphabet:C,startIndex:w})=>{const{isMatch:y,score:x,indices:N}=Y$(e,E,C,{location:i+w,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:d});y&&(h=!0),g+=x,y&&N&&(f=[...f,...N])});let m={isMatch:h,score:h?g/this.chunks.length:1};return h&&r&&(m.indices=f),m}}class bi{constructor(e){this.pattern=e}static isMultiMatch(e){return Sh(e,this.multiRegex)}static isSingleMatch(e){return Sh(e,this.singleRegex)}search(){}}function Sh(t,e){const n=t.match(e);return n?n[1]:null}class K$ extends bi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class V$ extends bi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class q$ extends bi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class X$ extends bi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Z$ extends bi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Q$ extends bi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ap extends bi{constructor(e,{location:n=et.location,threshold:r=et.threshold,distance:i=et.distance,includeMatches:o=et.includeMatches,findAllMatches:s=et.findAllMatches,minMatchCharLength:l=et.minMatchCharLength,isCaseSensitive:u=et.isCaseSensitive,ignoreLocation:d=et.ignoreLocation}={}){super(e),this._bitapSearch=new xp(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Sp extends bi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const rd=[K$,Sp,q$,X$,Q$,Z$,V$,Ap],Dh=rd.length,J$=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,eU="|";function tU(t,e={}){return t.split(eU).map(n=>{let r=n.trim().split(J$).filter(o=>o&&!!o.trim()),i=[];for(let o=0,s=r.length;o<s;o+=1){const l=r[o];let u=!1,d=-1;for(;!u&&++d<Dh;){const f=rd[d];let g=f.isMultiMatch(l);g&&(i.push(new f(g,e)),u=!0)}if(!u)for(d=-1;++d<Dh;){const f=rd[d];let g=f.isSingleMatch(l);if(g){i.push(new f(g,e));break}}}return i})}const nU=new Set([Ap.type,Sp.type]);class rU{constructor(e,{isCaseSensitive:n=et.isCaseSensitive,includeMatches:r=et.includeMatches,minMatchCharLength:i=et.minMatchCharLength,ignoreLocation:o=et.ignoreLocation,findAllMatches:s=et.findAllMatches,location:l=et.location,threshold:u=et.threshold,distance:d=et.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:s,ignoreLocation:o,location:l,threshold:u,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=tU(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,s=[],l=0;for(let u=0,d=n.length;u<d;u+=1){const f=n[u];s.length=0,o=0;for(let g=0,h=f.length;g<h;g+=1){const m=f[g],{isMatch:E,indices:C,score:w}=m.search(e);if(E){if(o+=1,l+=w,r){const y=m.constructor.type;nU.has(y)?s=[...s,...C]:s.push(C)}}else{l=0,o=0,s.length=0;break}}if(o){let g={isMatch:!0,score:l/o};return r&&(g.indices=s),g}}return{isMatch:!1,score:1}}}const id=[];function iU(...t){id.push(...t)}function od(t,e){for(let n=0,r=id.length;n<r;n+=1){let i=id[n];if(i.condition(t,e))return new i(t,e)}return new xp(t,e)}const hl={AND:"$and",OR:"$or"},sd={PATH:"$path",PATTERN:"$val"},ad=t=>!!(t[hl.AND]||t[hl.OR]),oU=t=>!!t[sd.PATH],sU=t=>!Xr(t)&&wp(t)&&!ad(t),Lh=t=>({[hl.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Dp(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const s=oU(i);if(!s&&o.length>1&&!ad(i))return r(Lh(i));if(sU(i)){const u=s?i[sd.PATH]:o[0],d=s?i[sd.PATTERN]:i[u];if(!Rr(d))throw new Error(R$(u));const f={keyId:nd(u),pattern:d};return n&&(f.searcher=od(d,e)),f}let l={children:[],operator:o[0]};return o.forEach(u=>{const d=i[u];Xr(d)&&d.forEach(f=>{l.children.push(r(f))})}),l};return ad(t)||(t=Lh(t)),r(t)}function aU(t,{ignoreFieldNorm:e=et.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:s})=>{const l=i?i.weight:null;r*=Math.pow(s===0&&l?Number.EPSILON:s,(l||1)*(e?1:o))}),n.score=r})}function lU(t,e){const n=t.matches;e.matches=[],Wn(n)&&n.forEach(r=>{if(!Wn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let s={indices:i,value:o};r.key&&(s.key=r.key.src),r.idx>-1&&(s.refIndex=r.idx),e.matches.push(s)})}function cU(t,e){e.score=t.score}function uU(t,e,{includeMatches:n=et.includeMatches,includeScore:r=et.includeScore}={}){const i=[];return n&&i.push(lU),r&&i.push(cU),t.map(o=>{const{idx:s}=o,l={item:e[s],refIndex:s};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Ho{constructor(e,n={},r){this.options={...et,...n},this.options.useExtendedSearch,this._keyStore=new M$(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof __))throw new Error(L$);this._myIndex=n||Op(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Wn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:s,ignoreFieldNorm:l}=this.options;let u=Rr(e)?Rr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return aU(u,{ignoreFieldNorm:l}),o&&u.sort(s),Cp(n)&&n>-1&&(u=u.slice(0,n)),uU(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=od(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:s,n:l})=>{if(!Wn(o))return;const{isMatch:u,score:d,indices:f}=n.searchIn(o);u&&i.push({item:o,idx:s,matches:[{score:d,value:o,norm:l,indices:f}]})}),i}_searchLogical(e){const n=Dp(e,this.options),r=(l,u,d)=>{if(!l.children){const{keyId:g,searcher:h}=l,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:h});return m&&m.length?[{idx:d,item:u,matches:m}]:[]}const f=[];for(let g=0,h=l.children.length;g<h;g+=1){const m=l.children[g],E=r(m,u,d);if(E.length)f.push(...E);else if(l.operator===hl.AND)return[]}return f},i=this._myIndex.records,o={},s=[];return i.forEach(({$:l,i:u})=>{if(Wn(l)){let d=r(n,l,u);d.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},s.push(o[u])),d.forEach(({matches:f})=>{o[u].matches.push(...f)}))}}),s}_searchObjectList(e){const n=od(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:s,i:l})=>{if(!Wn(s))return;let u=[];r.forEach((d,f)=>{u.push(...this._findMatches({key:d,value:s[f],searcher:n}))}),u.length&&o.push({idx:l,item:s,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Wn(n))return[];let i=[];if(Xr(n))n.forEach(({v:o,i:s,n:l})=>{if(!Wn(o))return;const{isMatch:u,score:d,indices:f}=r.searchIn(o);u&&i.push({score:d,key:e,value:o,idx:s,norm:l,indices:f})});else{const{v:o,n:s}=n,{isMatch:l,score:u,indices:d}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:s,indices:d})}return i}}Ho.version="7.0.0";Ho.createIndex=Op;Ho.parseIndex=H$;Ho.config=et;Ho.parseQuery=Dp;iU(rU);function Kl(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function dU(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function _U(t){return new Ho(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function fU(t,e,n){const r=dU(e,n);return t.length===0?r:_U(r).search(t).map(i=>i.item)}function gU(t,e){return Kl(t,e).shape}function un(t,e){const n=gU(t,e);return n?Ju(n):void 0}function Vl(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Jd(e)}function hU(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return xO(e)}function vU(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Ks(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Jd(i)})}function pU(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Jd(o)})})}function Lp(t,e){const n=t[e];if(n!==void 0&&typeof n!="string")throw Error(`${e} entry must be a string, if present at all: ${n}`);return n}function Mr(t){return Lp(t,"value")}function Rp(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Fv(e)}function mU(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Fv(r)})}function EU(t,e){const n=t.shape;return n===void 0?void 0:{...un(e,Bt),...n}}function Np(t,e,n){return{toolId:t,cells:e,value:n}}function bU(t,e){const n=Ks(e,"cells"),r=Mr(e);return Np(t,n,r)}function kp(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,s)=>Je(o,e)&&s>=r)}function CU(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Gs(r[i-1],e)))return t;const s=kp(t.cells,e,n);return s>=0?r.length=s+1:r.push(e),{...t,cells:r}}function Tp(t,e){return{toolId:t,cells:e,lines:[]}}function wU(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),cl(n),{...t,cells:n};const r=n.some(o=>Je(o,e)),i=n.some(o=>Gs(o,e));return n.length>0&&!r&&i?(n.push(e),cl(n),{...t,cells:n}):t}function yU(t,e,n){const r=t.cells.some(d=>Je(d,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return ld(t,e);const o=t.lines[i-1],s=o.length;if(s===0&&!r)return t;if(s===0&&r)return ld(t,e);const l=kp(o,e,!1);return(o.length===0?!0:Gs(o[s-1],e))?l>=0?(o.length=l+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function ld(t,e){return t.cells.some(r=>Je(r,e))?{...t,lines:[...t.lines,[e]]}:t}function IU(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function OU(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function xU(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function AU(t,e){const n=Ks(e,"cells"),r=pU(e),i=Tp(t,n);return i.lines=r,i}function Mp(t,e,n=""){return{toolId:t,cells:e,value:n}}function SU(t,e,n=!1){const r=Hv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function DU(t,e){return{...t,value:e}}function LU(t,e){const n=Ks(e,"cells"),r=Mr(e);return Mp(t,n,r)}function cd(t,e,n){return{toolId:t,cells:e,value:n}}function RU(t,e){const n=Ks(e,"cells"),r=Mr(e);return cd(t,n,r)}function ud(t,e,n){return{toolId:t,cells:e,value:n}}function NU(t,e){const n=Ks(e,"cells"),r=Mr(e);return ud(t,n,r)}function dd(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function kU(t,e){const n=Vl(e),r=Rp(e),i=Mr(e);return dd(t,n,r,i)}function _d(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function TU(t,e){const n=Vl(e),r=Mr(e);return _d(t,n,r)}function fd(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function MU(t,e){const n=Vl(e),r=Rp(e);return fd(t,n,r)}function gd(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function $U(t,e){const n=Vl(e),r=mU(e),i=gd(t,n,Te.N);return i.directions=r,i}function hd(t,e,n=""){return{toolId:t,cell:e,value:n}}function UU(t,e){const n=hU(e),r=Mr(e);return hd(t,n,r)}function $p(t,e=""){return{toolId:t,value:e}}function GU(t,e){const n=Mr(e);return $p(t,n)}function FU(t,e,n=""){return{toolId:t,coords:e,value:n}}function zU(t,e){const n=vU(e,"coords"),r=Mr(e);return FU(t,n,r)}function Up(t="",e=""){return{toolId:v.VARIABLE_CONSTRAINT,name:t,value:e}}function PU(t){const e=Lp(t,"name"),n=Mr(t);return Up(e,n)}function Wo(t,e){return{...t,value:e}}function BU(t,e){return{...t,name:e}}class Yo extends Map{addToDict(e){if(this.has(e))return;const n={tool_id:e,constraints:{}};this.set(e,n)}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r||!r.constraints)return null;const i=r.constraints[n];return i||null}getConstraint2(e){for(const n of this.values()){if(!n.constraints)continue;const r=n.constraints[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const i=this.get(e);!i||!i.constraints||(i.constraints[n]=r)}setElement(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);!r||!r.constraints||r.constraints[n]&&delete r.constraints[n]}updateConstraint(e,n,r){const i=this.get(e);!i||!i.constraints||i.constraints[n]&&(i.constraints[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];if(r.constraints)for(const s of Object.values(r.constraints))i.push(VU(s));const o={tool_id:n,constraints:i};if(r.negative_constraints)for(const[s,l]of Object.entries(r.negative_constraints))l&&(o.negative_constraints||(o.negative_constraints={}),o.negative_constraints[s]=l);e[n]=o}return e}static fromJson(e){const n=new Yo;if(!e)return n;for(const r of Object.values(e)){const i=r.tool_id;if(typeof i!="string")throw TypeError("tool_id_str must be of type string.");const o=KI(i);if(o===void 0||!Object.keys(Bt).includes(o))continue;n.addToDict(o);const s=n.get(o);if(!s)continue;const l=r.negative_constraints;if(l){s.negative_constraints={};for(const[d,f]of Object.entries(l))s.negative_constraints[d]=f}const u=r.constraints;for(const d of u){let f=null;if(VI(o,Ol)?f=TU(o,d):Hi(o)?f=MU(o,d):Lo(o)?f=$U(o,d):Ro(o)?f=NU(o,d):Ts(o)?f=RU(o,d):No(o)?f=bU(o,d):Uv(o)?f=zU(o,d):ko(o)?f=AU(o,d):To(o)?f=LU(o,d):Zr(o)?f=kU(o,d):Yd(o)?f=GU(o,d):o===v.VARIABLE_CONSTRAINT?f=PU(d):Ms(o)&&(f=UU(o,d)),f!==null){const g=At.uniqueId(),h=EU(d,o);f.shape=h,n.addConstraint(o,g,f)}}}return n}}function bo(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=i[0];if(Je(o.cell,n))return[s,o]}return null}function Rh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(n.every(l=>o.cells.some(u=>Je(l,u))))return i}return null}function Nh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=o.cells[o.cells.length-1];if(Je(n,s))return i}return null}function HU(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Je(l,n)))return[i[0],o]}return null}function WU(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints))if(i[1].cells.some(l=>Je(l,n)))return i;return null}function kh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Je(l,n)))return[i[0],o]}return null}function YU(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const[i,o]of Object.entries(r.constraints)){const s=o,l=s.lines.findIndex(u=>u.some((d,f)=>Je(d,n)&&f>0));if(l>=0)return{id:i,arrow:s,matchLineIdx:l}}return null}function Th(t,e,n,r){const i=t.get(e);if(!i||!i.constraints)return null;for(const o of Object.entries(i.constraints)){const s=o[1],l=o[0];if(Je(n,s.cell)&&r===s.direction)return[l,s]}return null}function Mh(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1],s=i[0];if(Je(n,o.cell))return[s,o]}return null}function jU(t,e,n){const r=t.get(e);if(!r||!r.constraints)return null;for(const i of Object.entries(r.constraints)){const o=i[1];if(o.cells.some(l=>Je(l,n))||o.cells2.some(l=>Je(l,n)))return[i[0],o]}return null}function KU(t,e){const n=t.get(e),r=new Set;if(!n||!n.constraints)return r;for(const i of Object.entries(n.constraints)){const o=i[1];r.add(o.value)}return r}function VU(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ya(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ya(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Ya(i)));e.lines=n}if("cell"in t){const n=Ya(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"name"in t&&t.name&&(e.name=t.name),"shape"in t&&t.shape){const n=un(t.toolId,Bt),r=XI(t.shape,n);r&&(e.shape=r)}return e}const $h={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function qU(t){return t in $h?$h[t]:null}function Gp(t,e,n){if(n===null)return null;const r=qU(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function $u(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class XU{constructor(e,n){pe(this,"r");pe(this,"c");pe(this,"outside",!1);pe(this,"value",null);pe(this,"given",!1);pe(this,"region",null);pe(this,"centerMarks",[]);pe(this,"cornerMarks",[]);pe(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=$u(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=$u(this.cornerMarks,e))}enterHighlight(e){this.highlights=$u(this.highlights,e)}enterCell(e,n,r=!1){n===v.GIVEN?this.enterGiven(e,r):n===v.DIGIT?this.enterValue(e,r):n===v.CORNER_PM?this.enterCornerPM(e):n===v.CENTER_PM?this.enterCenterPM(e):n===v.HIGHLIGHTS?this.enterHighlight(e):n===v.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Gp(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class jo{constructor(e,n){pe(this,"nCols");pe(this,"nRows");pe(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let s=0;s<n;s++){const l=new XU(i,s);if(r){const u=Gp(i,s,e);l.region=u}o.push(l)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,s]=[e.r+i[0],e.c+i[1]],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],s=e.c+i[1],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],s=e.c+i[1],l=this.getCell(o,s);l&&!l.outside&&n.push(l)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return qv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(l=>l===o))return n;for(const l of i){const u=this.getRegion(l);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:s}=Fs(r);let[l,u]=[e+o,n+s];for(;0<=l&&l<this.nRows&&0<=u&&u<this.nCols;){const d=this.grid[l][u];i.push(d),[l,u]=[l+o,u+s]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const s=this.getCell(r,o);if(!s)continue;const l=s==null?void 0:s.toJson(n);i.push(l)}e.push(i)}return e}static fromJSON(e,n,r){const i=new jo(e,n);for(let o=0;o<e;o++)for(let s=0;s<n;s++){const l=r[o][s],u=i.getCell(o,s);u&&Object.assign(u,l)}return i}}function ZU(t){const e=t.grid,n=t.elementsDict,r={};r.puzzleInfo=t.puzzleMeta,r.nRows=e.nRows,r.nCols=e.nCols;const i=Math.min(e.nRows,e.nCols),o=At.range(1,i+1);t.valid_digits&&!tx(o,t.valid_digits)&&(r.valid_digits=t.valid_digits),r.grid=e.toJSON(),t.solution&&(r.solution=t.solution);const s=n.toJSON();return Object.keys(s).length&&(r.elements=s),r}function QU(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo;let i={};r&&(i=r);const o=t.valid_digits,s=t.grid,l=jo.fromJSON(e,n,s),u=Math.min(l.nRows,l.nRows);let d=At.range(1,u+1);o!==void 0&&(d=o);const f=t.solution,g=t.elements,h=Yo.fromJson(g);return{puzzleMeta:i,solution:f,grid:l,valid_digits:d,elementsDict:h}}function m7(){const t=new jo(9,9),e=new Yo;return{grid:t,solution:void 0,valid_digits:At.range(1,10),puzzleMeta:{},elementsDict:e}}var ys=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(ys||{});const JU=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),eG=()=>({type:"CLEAR"}),tG=t=>({type:"DRAG",payload:t}),vd=t=>({type:"SET",payload:t}),nG=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),f_=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Lr=(t,e,n)=>{const r=[...t];return cl(r),{cells:r,lastCell:e,mode:n}};function rG(t,e,n){if(e===null)return f_();if(n==="RESETTING")return Lr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Je(e,i));if(n==="SELECTING")return r!==-1?t:Lr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),Lr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Lr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),Lr(i,null,"DESELECTING")}return t}function iG(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Je(e,r));if(t.mode==="SELECTING")return n!==-1?t:Lr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Lr(r,null,t.mode)}return t}function oG(t,e){return{...t,cells:e}}function sG(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Je(e,i))!==-1?Lr([...t.cells],e,"SELECTING"):Lr([...t.cells,e],e,"SELECTING"):Lr([e],e,t.mode)}function Fp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return f_();case"SET":return oG(t,e.payload);case"CLICK":return rG(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return iG(t,e.payload);case"ARROW_KEY":return sG(t,e.payload.cell,e.payload.selectionMode);default:return t}}function po(t,e){return Je(t.p1,e.p1)&&Je(t.p2,e.p2)||Je(t.p1,e.p2)&&Je(t.p2,e.p1)}function aG(t,e){return Je(t.p1,e.p2)&&Je(t.p2,e.p1)}function zp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Je(t,e)}class ql{constructor(){pe(this,"edgeMarkers",[]);pe(this,"cellMarkers",[]);pe(this,"lineMarkers",[]);pe(this,"draftLine",[]);pe(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Je(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Je(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Je(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Je(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Je(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Je(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Je(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Je(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Je(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Je(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>po(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>po(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&aG(r,e)&&this.draftLine.splice(n,1)}onDrag(e){zp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>po(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>po(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new ql;return Object.assign(e,this),e}}const Uh=t=>({type:"ADD_EDGE_MARKER",payload:t}),Gh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Va=t=>({type:"ADD_CELL_MARKER",payload:t}),lG=t=>({type:"SET_CELL_MARKERS",payload:t}),Fh=t=>({type:"REMOVE_CELL_MARKER",payload:t}),cG=t=>({type:"DRAG",payload:t}),yo=t=>({type:"ADD_LINE_MARKERS",payload:t}),zh=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),g_=()=>({type:"RESET"});function uG(t,e){switch(e.type){case"RESET":return new ql;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Pp(){return{_undoStack:[],_redoStack:[]}}const Ko=Lt(Pp());function dG(){Ko.update(()=>Pp())}function Bn(t,e=!0){Ko.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function _G(t,e=!0){Ko.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Bp(){Ko.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Hp(){Ko.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const vl=Lt(new ql);function Cr(t){vl.update(e=>uG(e,t))}const pl=Lt(1);function Mi(t,e){return{execute:()=>{Cr(t)},unExecute:()=>{Cr(e)}}}const Pi=Lt(f_());function ho(t){t&&Pi.update(e=>Fp(e,t))}function Ph(t){t&&Pi.update(e=>Fp(e,t))}function fG(t,e){return{execute:()=>{Ph(t)},unExecute:()=>{Ph(e)}}}const Io=Lt(null),Xl=Lt(Do.SETTING),pd=Lt(!1),on=Lt(v.DIGIT),Wp=Lt(v.DIGIT),h_=Lt(At.range(1,10)),hn=Lt(new jo(9,9)),Yn=Lt(Ne(hn).getAllCells()),$r=Lt({}),at=Lt(new Yo),Wt=Lt(null),Vo=Lt(void 0),Zl=Lt(void 0);function gG(t){$r.update(()=>t)}function qo(t){Wt.update(()=>t)}function v_(t){Vo.update(()=>t)}function kr(t){Ne(on)!==t&&(on.update(()=>t),qo(null))}function hG(){const t=Ne(Wp);t&&kr(t)}function md(t){Wp.update(()=>t)}function vG(t){Ne(on)===t&&kr(v.DIGIT)}function pG(t){at.update(e=>(e.removeFromDict(t),e)),v_(void 0)}function Xt(t,e,n){at.update(r=>(r.updateConstraint(t,e,n),r)),qo({id:e,constraint:n})}function Uu(t){const e=Ne(Wt);if(t=t?{...t}:void 0,v_(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Xt(r,e.id,n)}function Ci(t,e){const r=Ne(at).get(e);if(!r||!r.constraints)return;const i=r.constraints[t];i&&qo({id:t,constraint:i})}function mG(t,e,n){const r=new jo(t,e);hn.update(()=>r),h_.update(()=>n),at.update(()=>new Yo),$r.update(()=>({})),p_(void 0),Yn.update(()=>r.getAllCells())}function EG(t){hn.update(()=>t.grid),$r.update(()=>t.puzzleMeta),p_(t.solution),h_.update(()=>t.valid_digits),at.update(()=>t.elementsDict),Yn.update(()=>t.grid.getAllCells())}function Yp(){const t=Ne(hn);t.resetValues(),hn.update(()=>t),Yn.update(()=>t.getAllCells()),Cr(g_())}function ml(){dG(),Cr(g_()),kr(v.DIGIT);const t=eG();ho(t),v_(void 0),qo(null)}const bG=qn(at,t=>{for(const e of t.values()){const n=e.tool_id;if(n===v.FOG_LIGHTS||n===v.CUSTOM_FOG_CLEARING)return!0}return!1}),wi=qn([Ln,bG,Xl,on],([t,e,n,r])=>{const i=t.hideFog,o=e,s=r,l=s===v.DIGIT||s===v.CORNER_PM||s===v.CENTER_PM||s===v.HIGHLIGHTS||s===v.PEN_TOOL;return!i&&o&&(l||n===Do.SOLVING)});qn([Ln,Xl],([t,e])=>!t.hideFog&&e===Do.SETTING);const Vs=qn([hn,$r,at,Zl,h_],([t,e,n,r,i])=>({grid:t,solution:r,puzzleMeta:e,valid_digits:i,elementsDict:n}));function p_(t){Zl.update(()=>t)}const m_=Lt(!1);if(typeof window<"u"){const t=()=>m_.set(window.matchMedia("(orientation: portrait)").matches);t(),window.addEventListener("resize",t)}var CG=ce('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function wG(t,e){let n=M(e,"title",8),r=M(e,"closeCb",8);var i=CG(),o=Y(i),s=Y(o,!0);P(o);var l=F(o,2);P(i),J(()=>rt(s,n())),Re("click",l,function(...u){var d;(d=r())==null||d.apply(this,u)}),D(t,i)}var yG=ce('<dialog class="svelte-1suym9f"><div class="svelte-1suym9f"><!> <div class="modal-content-wrapper svelte-1suym9f"><div class="modal-content svelte-1suym9f"><!></div></div></div></dialog>');function yi(t,e){ae(e,!1);const n=We(),r=()=>ge(m_,"$isPortraitStore",n),i=A();let o=M(e,"showModal",12),s=M(e,"title",8),l=A();function u(){o(!1),_(l).close()}L(()=>(_(l),V(o())),()=>{_(l)&&o()&&_(l).showModal()}),L(()=>(_(l),V(o())),()=>{_(l)&&!o()&&_(l).close()}),L(()=>r(),()=>{I(i,r())}),Ce();var d=yG(),f=Y(d),g=Y(f);wG(g,{get title(){return s()},closeCb:u});var h=F(g,2),m=Y(h),E=Y(m);Ot(E,e,"default",{}),P(m),P(h),P(f),P(d),qr(d,C=>I(l,C),()=>_(l)),J(()=>Et(d,"mobile-layout",_(i))),Re("click",f,Cn(function(C){GI.call(this,e,C)})),Re("close",d,()=>{o(!1)}),Re("click",d,UI(Cn(()=>_(l).close()))),D(t,d),le()}var IG=ce('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function OG(t,e){ae(e,!1);let n=M(e,"searchPattern",12,""),r=M(e,"showModal",8),i=A(null);L(()=>(V(r()),_(i)),()=>{r()&&_(i)&&_(i).focus()}),Ce();var o=IG(),s=F(Y(o),2);cn(s),S(s,"spellcheck",!1),qr(s,l=>I(i,l),()=>_(i)),P(o),cr(s,n),D(t,o),le()}var xG=ce('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function AG(t,e){let n=M(e,"showModal",12),r=M(e,"searchPattern",12,""),i=M(e,"title",8);yi(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,s)=>{var l=xG(),u=Y(l);OG(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var d=F(u,2),f=Y(d),g=Y(f);Ot(g,e,"default",{}),P(f),P(d),P(l),D(o,l)},$$slots:{default:!0},$$legacy:!0})}var SG=ce('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function jp(t,e){let n=M(e,"isOpen",8,!0);var r=SG(),i=Y(r);Ot(i,e,"default",{}),P(r),J(()=>{S(r,"aria-expanded",n()),Et(r,"closed",!n())}),D(t,r)}var DG=ce('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),LG=ce('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Gi(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0),i=M(e,"isCollapsible",8,!1);var o=Ee(),s=ee(o);{var l=d=>{var f=DG(),g=Y(f),h=Y(g),m=Y(h,!0);P(h),P(g);var E=F(g,2),C=Y(E);Ot(C,e,"default",{}),P(E),P(f),J(()=>rt(m,n())),D(d,f)},u=d=>{var f=LG(),g=Y(f),h=Y(g),m=Y(h,!0);P(h),P(g);var E=F(g,2),C=Y(E);Ot(C,e,"default",{});var w=F(C,2);P(E),P(f),J(()=>{rt(m,n()),Et(w,"open",r())}),Re("click",f,()=>r(!r())),D(d,f)};Q(s,d=>{i()?d(u,!1):d(l)})}D(t,o)}var RG=ce('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),NG=ce('<ol class="svelte-cd45on"></ol>'),kG=ce("<!> <!>",1);function TG(t,e){ae(e,!1);const n=A();let r=M(e,"category",8),i=M(e,"addTool",8),o=M(e,"searchResults",8),s=A(!0);L(()=>(V(o()),V(r())),()=>{I(n,o().filter(f=>{var g,h;return(h=(g=f.info.meta)==null?void 0:g.categories)==null?void 0:h.includes(r())}))}),Ce(),he();var l=Ee(),u=ee(l);{var d=f=>{var g=kG(),h=ee(g);Gi(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return _(s)},set isOpen(E){I(s,E)},$$legacy:!0});var m=F(h,2);jp(m,{get isOpen(){return _(s)},children:(E,C)=>{var w=NG();Qe(w,5,()=>_(n),mt,(y,x)=>{let N=()=>_(x).key,T=()=>_(x).info;var G=RG(),K=Y(G),U=Y(K,!0);P(K),P(G),J(()=>{var H;S(K,"title",(H=T().meta)==null?void 0:H.description),rt(U,N())}),Re("click",K,()=>{i()(N())}),D(y,G)}),P(w),D(E,w)},$$slots:{default:!0}}),D(f,g)};Q(u,f=>{_(n).length&&f(d)})}D(t,l),le()}function MG(t,e){ae(e,!1);const n=A();let r=M(e,"searchPattern",8,""),i=M(e,"addTool",8),o=M(e,"categories",8),s=M(e,"filterFunc",8),l=M(e,"elementHandlers",8);L(()=>(V(r()),V(s()),V(l())),()=>{I(n,fU(r(),s(),l()))}),Ce(),he();var u=Ee(),d=ee(u);Qe(d,1,o,mt,(f,g)=>{TG(f,{get category(){return _(g)},get searchResults(){return _(n)},get addTool(){return i()}})}),D(t,u),le()}var $G=ce('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Ql(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8);var i=$G();S(i,"tabindex",0);var o=Y(i),s=Y(o);Ot(s,e,"add-button",{}),P(o);var l=F(o,2),u=Y(l),d=Y(u);Ot(d,e,"title-icon",{}),P(u);var f=F(u);P(l);var g=F(l,2),h=Y(g);P(g),P(i),J(()=>{rt(f,` ${r()??""}`),Et(h,"open",n())}),Re("click",i,()=>n(!n())),Re("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),D(t,i)}var UG=ce('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Element"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function GG(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8),i=M(e,"showModal",12);function o(){i(!i())}Ql(t,{get title(){return r()},get isOpen(){return n()},set isOpen(s){n(s)},$$slots:{"add-button":(s,l)=>{var u=UG();Re("click",u,Cn(()=>o())),D(s,u)},"title-icon":(s,l)=>{var u=Ee(),d=ee(u);Ot(d,e,"title-icon",{}),D(s,u)}},$$legacy:!0})}var FG=ce('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),zG=ce('<div class="panel-container svelte-hixu4"><!> <!></div>');function Jl(t,e){let n=M(e,"isOpen",8,!0);var r=zG(),i=Y(r);Ot(i,e,"panel-header",{});var o=F(i,2);jp(o,{get isOpen(){return n()},children:(s,l)=>{var u=FG(),d=Y(u);Ot(d,e,"panel-content",{}),P(u),D(s,u)},$$slots:{default:!0}}),P(r),D(t,r)}var PG=ce("<!> <!>",1);function BG(t,e){ae(e,!1);let n=M(e,"categories",8),r=M(e,"title",8),i=M(e,"onAddTool",8),o=M(e,"elementHandlerFilterFunc",8),s=M(e,"elementHandlers",8),l=A(!0),u=A(!1),d=A("");const f=g=>{I(u,!1),I(l,!0),i()(g)};he(),Jl(t,{get isOpen(){return _(l)},set isOpen(g){I(l,g)},$$slots:{"panel-header":(g,h)=>{var m=PG(),E=ee(m);GG(E,{get title(){return r()},get isOpen(){return _(l)},set isOpen(w){I(l,w)},get showModal(){return _(u)},set showModal(w){I(u,w)},$$slots:{"title-icon":(w,y)=>{var x=Ee(),N=ee(x);Ot(N,e,"title-icon",{}),D(w,x)}},$$legacy:!0});var C=F(E,2);AG(C,{get title(){return r()},get showModal(){return _(u)},set showModal(w){I(u,w)},get searchPattern(){return _(d)},set searchPattern(w){I(d,w)},children:(w,y)=>{MG(w,{get searchPattern(){return _(d)},get categories(){return n()},get filterFunc(){return o()},addTool:f,get elementHandlers(){return s()}})},$$slots:{default:!0},$$legacy:!0}),D(g,m)},"panel-content":(g,h)=>{var m=Ee(),E=ee(m);Ot(E,e,"panel-content",{}),D(g,m)}},$$legacy:!0}),le()}var HG=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function WG(t){var e=HG();D(t,e)}var $i=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_ELEMENT="REMOVE_ELEMENT",t.RESTORE_ELEMENT="RESTORE_ELEMENT",t.ENABLE_DISABLE_ELEMENT="ENABLE_DISABLE_ELEMENT",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))($i||{});const E_=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),b_=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),YG=t=>({type:"REMOVE_ELEMENT",payload:{tool:t}}),jG=(t,e)=>({type:"RESTORE_ELEMENT",payload:{tool:t,constraints:e}}),Bh=(t,e)=>({type:"ENABLE_DISABLE_ELEMENT",payload:{tool:t,value:e}}),Hh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function KG(t){at.update(e=>(e.addToDict(t),e))}function qs(t,e){const n=Ne(Vo);n&&(e.shape={...n}),at.update(r=>(r.addConstraint(e.toolId,t,e),r)),qo({id:t,constraint:e})}function C_(t,e){e&&at.update(n=>(n.removeConstraint(t,e),n))}function Kp(t,e){at.update(n=>(n.setElement(t,e),n))}function VG(t,e){at.update(n=>{const r=n.get(t);return r&&(r.disabled=e,n.setElement(t,r)),n})}function Wh(t){t.type===$i.ADD_LOCAL_CONSTRAINT?qs(t.payload.id,t.payload.constraint):t.type===$i.REMOVE_LOCAL_CONSTRAINT?C_(t.payload.tool,t.payload.id):t.type===$i.REMOVE_ELEMENT?pG(t.payload.tool):t.type===$i.RESTORE_ELEMENT?Kp(t.payload.tool,t.payload.constraints):t.type===$i.UPDATE_LOCAL_CONSTRAINT?Xt(t.payload.tool,t.payload.constraintId,t.payload.constraint):t.type===$i.ENABLE_DISABLE_ELEMENT&&VG(t.payload.tool,t.payload.value)}function Oo(t,e){return{execute:()=>{Wh(t)},unExecute:()=>{Wh(e)}}}var qG=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Vp(t){var e=qG();D(t,e)}var XG=ce('<label class="checkbox-label svelte-19ijzh9"><span class="checkbox svelte-19ijzh9"><input type="checkbox" class="svelte-19ijzh9"> <div class="check-container svelte-19ijzh9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path></svg></div></span> <span> </span></label>');function ZG(t,e){ae(e,!1);const n=We(),r=()=>ge(at,"$elementsDictStore",n),i=A(),o=A();let s=M(e,"tool_id",8),l=M(e,"neg_tool_id",8),u=M(e,"description",8);function d(){_(i)&&(_(i).negative_constraints||Sr(i,_(i).negative_constraints={}),Sr(i,_(i).negative_constraints[l()]=!_(o)),Kp(s(),_(i)),I(o,!_(o)))}L(()=>(r(),V(s())),()=>{I(i,r().get(s()))}),L(()=>(_(i),V(l())),()=>{var C;I(o,(C=_(i))!=null&&C.negative_constraints?!!_(i).negative_constraints[l()]:!1)}),Ce(),he();var f=XG(),g=Y(f),h=Y(g);Vr(2),P(g);var m=F(g,2),E=Y(m,!0);P(m),P(f),J(()=>{S(f,"title",u()),Et(g,"checked",_(o)),Et(h,"checked",_(o)),rt(E,l())}),Re("click",h,d),D(t,f),le()}var QG=ce('<div class="constraint-button svelte-11echl7"><div class="left-side svelte-11echl7"> </div> <div class="right-side svelte-11echl7"><button class="remove-constraint-button svelte-11echl7"><!></button></div></div>');function JG(t,e){ae(e,!1);const n=We(),r=()=>ge(Io,"$svgRefStore",n),i=()=>ge(at,"$elementsDictStore",n),o=()=>ge(Wt,"$currentConstraintStore",n),s=A();let l=M(e,"constraint_id",8),u=M(e,"tool_id",8);function d(){Ci(l(),u()),r()&&r().focus()}function f(){const y=i().getConstraint(u(),l());if(!y)return;const x=b_(l(),u()),N=E_(l(),y),T=Oo(x,N);Bn(T)}L(()=>o(),()=>{var y;I(s,(y=o())==null?void 0:y.id)}),Ce(),he();var g=QG(),h=Y(g),m=Y(h);P(h);var E=F(h,2),C=Y(E),w=Y(C);Vp(w),P(C),P(E),P(g),J(()=>{Et(g,"active",l()===_(s)),rt(m,`ID: ${l()??""}`)}),Re("click",C,Cn(f)),Re("click",g,d),D(t,g),le()}var eF=ce('<div class="constraint-list-wrapper svelte-1tm1tdz"><div class="constraint-list svelte-1tm1tdz"></div></div>');function tF(t,e){ae(e,!1);const n=We(),r=()=>ge(at,"$elementsDictStore",n),i=A();let o=M(e,"tool_id",8);L(()=>(r(),V(o())),()=>{I(i,r().get(o()))}),Ce(),he();var s=Ee(),l=ee(s);{var u=d=>{var f=eF(),g=Y(f);Qe(g,5,()=>Object.entries(_(i).constraints),h=>h[0],(h,m)=>{JG(h,{get constraint_id(){return _(m)[0]},get tool_id(){return o()}})}),P(g),P(f),D(d,f)};Q(l,d=>{_(i)&&_(i).constraints&&Object.entries(_(i).constraints).length&&d(u)})}D(t,s),le()}function Yh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const s=new Set(o.highlights);return n.difference(s).size===0}).map(o=>o.toCoords())}function nF(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function jh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const s=new Set(o.cornerMarks);return n.difference(s).size===0}).map(o=>o.toCoords())}function Kh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const s=new Set(o.centerMarks);return n.difference(s).size===0}).map(o=>o.toCoords())}function rF(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===v.HIGHLIGHTS&&i.highlights.length?Yh(i,e):i.value!==null?nF(i,e):n===v.CORNER_PM&&i.cornerMarks.length?jh(i,e):n===v.CENTER_PM&&i.centerMarks.length?Kh(i,e):i.cornerMarks.length?jh(i,e):i.centerMarks.length?Kh(i,e):i.highlights.length?Yh(i,e):r:r}function Kn(t,e,n,r=!1){if(!(t&&e))return;const i=E_(t,e),o=b_(t,n),s=Oo(i,o);Bn(s,r)}function wr(t,e,n,r=!0){if(!(t&&e))return;const i=b_(t,n),o=E_(t,e),s=Oo(i,o);Bn(s,r)}function Ed(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Hh(r,t,n),s=Hh(r,t,e),l=Oo(o,s);Bn(l,i)}class Ue{constructor(e,n){pe(this,"x");pe(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Ue(this.x+e.x,this.y+e.y)}subtract(e){return new Ue(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Ue(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Ue(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function qp(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const wn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Ue(i.x,i.y)};function Qa(t,e){const n=Rl(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function iF(t,e){const n=Rl(t),r=new Ue(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Ja(t,e){const n=Rl(t),r=CO(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),s=o.indexOf(Math.min(...o)),l=r[s],u=o[s];return e===void 0||u<e?{corner:l,dist:u,idx:s}:null}function el(t,e){const n=Rl(t),r=wO(n),o=r.map(d=>new Ue(d.c,d.r)).map(d=>d.distance(t)),s=o.indexOf(Math.min(...o)),l=r[s],u=o[s];return e===void 0||u<e?{edge:l,dist:u,idx:s}:null}function As(t,e,n){const r=Qa(t);if(!r)return null;const i=el(t);if(!i)return null;const o=Ja(t);if(!o)return null;const s=iF(t);if(!s)return null;let l,u;e===Dt.CORNER?(l=o.corner,u="corner"):e===Dt.EDGE?(l=i.edge,u="edge"):e===Dt.CELL_CENTER?(l=s.cellCenter,u="cell center"):e===Dt.CORNER_OR_EDGE?o.dist<i.dist?(l=o.corner,u="corner"):(l=i.edge,u="edge"):e===Dt.CORNER_OR_CENTER?o.dist<s.dist?(l=o.corner,u="corner"):(l=s.cellCenter,u="cell center"):e===Dt.EDGE_OR_CENTER?i.dist<s.dist?(l=i.edge,u="edge"):(l=s.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<s.dist?(l=i.edge,u="edge"):o.dist<i.dist&&o.dist<s.dist?(l=o.corner,u="corner"):(l=s.cellCenter,u="cell center");const f=new Ue(l.c,l.r).subtract(t).length(),g=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:s.cellCenter,edge:i.edge,corner:o.corner,dist:f,closest:l,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:g}}class Xo{constructor(e=.4){pe(this,"onTap",null);pe(this,"onDragStart",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onMove",null);pe(this,"_prevPoint",null);pe(this,"_prevCell",null);pe(this,"_lastPointerDownTime",0);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_tapCount",0);pe(this,"_lastTapPosition",null);pe(this,"_lastTapTime",0);pe(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;this._prevPoint=r;const i=Qa(r);if(!i)return;const o=i.cell;this._prevCell=o,this._lastPointerDownTime=e.timeStamp;const s={event:e,cell:o,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){const r=wn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=Qa(r,i);if(!o)return;const s=o.cell;if(this._prevCell&&Je(this._prevCell,s))return;this._prevCell=s,this._prevPoint=r,this._isTap=!1;const l={event:e,cell:s,tapCount:this._tapCount};this.onMove&&this.onMove(l),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(l)}pointerUp(e,n){this._prevCell=null,this._prevPoint=null,this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=wn(e,n);if(!r)return;const i=Qa(r,void 0);if(!i)return;const o=i.cell;let s=0;this._lastTapPosition&&(s=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const l=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,l>0&&l<300&&s<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function oF(t,e,n,r){const i=new Xo,o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null,u=null,d=!1,f=!1,g=Pn.DYNAMIC;function h(E){d=!1;const C=E.cell;if(Gt(E.cell,o)){if(g===Pn.DYNAMIC){const y=Ne(at),x=YU(y,n,C);if(x){const T=xU(x.arrow,x.matchLineIdx);Ed(x.id,x.arrow,T,n,!0),f=!0;return}const N=kh(y,n,C);if(!N)d=!0,g=Pn.EDIT_BULB,u=null,s=null;else{g=Pn.EDIT_ARROWS,u=N[0],s=N[1],s=ld(s,C),Xt(n,u,s);return}}if(g===Pn.EDIT_BULB&&!u){u=At.uniqueId(),s=Tp(n,[C]),qs(u,s);return}else g===Pn.EDIT_BULB&&u&&s?(s=wU(s,C),Xt(n,u,s)):g===Pn.EDIT_ARROWS&&u&&s&&(s=yU(s,C,r==null?void 0:r.allowSelfIntersection),Xt(n,u,s))}}return i.onDragStart=E=>{g=Pn.DYNAMIC,h(E)},i.onDrag=E=>{h(E)},i.onDragEnd=()=>{if(f){f=!1;return}g===Pn.EDIT_ARROWS&&u&&s?IU(s)?(s=OU(s),Xt(n,u,s)):(Ed(u,l,s,n),l=s):g===Pn.EDIT_BULB&&(Kn(u,s,n),l=s),g=Pn.DYNAMIC},i.onTap=E=>{if(d)return;const C=E.cell,w=Ne(at);if(kh(w,n,C)){wr(u,s,n);return}},{pointerDown:E=>{E.button===0&&i.pointerDown(E,t)},pointerMove:E=>{i.pointerMove(E,t)},pointerUp:E=>{i.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function sF(t,e,n,r){const i=new Xo,o={nRows:e.nRows,nCols:e.nCols},s=(r==null?void 0:r.allowSelfIntersection)??!1;let l=null,u=null;function d(h){return!!Gt(h.cell,o)}function f(h){if(!u||!l)throw"UNREACHABLE";const m=h.cell;d(h)&&(l=CU(l,m,s),Xt(n,u,l))}return i.onDragStart=h=>{const m=Ne(jt);d(h)&&m!==Me.DELETE&&(u=At.uniqueId(),l=Np(n,[],r==null?void 0:r.defaultValue),qs(u,l),f(h))},i.onDrag=h=>{f(h)},i.onDragEnd=()=>{u&&l&&l.cells.length<=1?C_(n,u):u&&l&&Kn(u,l,n,!1),u=null},i.onTap=h=>{if(Ne(jt)===Me.ADD_EDIT)return;const E=h.cell,C=Ne(at),w=WU(C,n,E);if(w){const[y,x]=w;wr(y,x,n)}},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:()=>{},keyUp:()=>{}}}const aF=qn(at,t=>{const e=[];for(const[n,r]of t.entries())WI(n)&&e.push(r);return e});function Zo(t){return qn(at,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push(o);return r})}const w_=Zo(Wd),Xp=qn(w_,t=>t.find(n=>n.tool_id===v.FOG_LIGHTS)),lF=qn(at,t=>{for(const e of t.values())if(e.tool_id===v.CUSTOM_FOG_CLEARING)return e}),cF=qn(w_,t=>{const e=t.find(r=>r.tool_id===v.MINIMUM);return e?e.constraints:{}}),uF=qn(w_,t=>{const e=t.find(r=>r.tool_id===v.MAXIMUM);return e?e.constraints:{}}),dF=Zo(Ro),_F=Zo(Ms),fF=Zo(Ts),gF=Zo(Uv),hF=Zo(zI),tl=Lt(void 0),nl=Lt(void 0),rl=Lt(void 0),il=Lt(void 0),ol=Lt(void 0),Is=Lt(void 0),sl=Lt(void 0);qn([at,on],([t,e])=>{const n=e;return t.get(n)});function vF(t,e,n,r){const i=new Xo,o={nRows:e.nRows,nCols:e.nCols};function s(d){const f=Ne(at),g=d.cell;if(!Gt(d.cell,o))return;let m=Ne(jt);const E=bo(f,n,g);if(m===Me.DYNAMIC&&(m=E?Me.DELETE:Me.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&bo(f,r.oppositeConstraintId,g)))if(E&&m===Me.DELETE){const[C,w]=E;wr(C,w,n)}else if(!E&&m===Me.ADD_EDIT){const C=_d(n,g,r==null?void 0:r.defaultValue),w=At.uniqueId();Kn(w,C,n,!0)}else E&&m===Me.ADD_EDIT&&Ci(E[0],n)}i.onDragStart=d=>{s(d)},i.onDrag=d=>{s(d)},i.onMove=d=>{if(!Gt(d.cell,o)){tl.set(void 0);return}const g=_d(n,d.cell,r==null?void 0:r.defaultValue),h=Ne(Vo);h&&(g.shape={...h});const m=Ne(jt),E=Ne(at),C=bo(E,n,d.cell);if(!C&&m===Me.DELETE){tl.set(void 0);return}let w="add",y;C&&(m===Me.DELETE||m===Me.DYNAMIC)&&(w="remove",y=C[0]);const x={tool:g,match_id:y,mode:w};tl.set(x)};function l(d){const f=Ne(Wt);if(!f)return;let g=f.constraint;const h=f.id;if(g.value===void 0||!Fo(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(g==null?void 0:g.value,d.key);m!==void 0&&m!==g.value&&(g=Wo(g,m),Xt(n,h,g))}return{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class ec{constructor(e){pe(this,"onDragStart",null);pe(this,"onMove",null);pe(this,"feature");pe(this,"_prevCoord",null);pe(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=wn(e,n);if(!r)return;const i=As(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=As(r,this.feature);if(!i||this._prevCoord&&Je(i.closest,this._prevCoord)&&this._prevCellCoord&&Je(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function pF(t,e,n,r){const i=(r==null?void 0:r.targets)??Dt.CLOSEST,o=new ec(i),s={nRows:e.nRows,nCols:e.nCols};function l(f){const g=Ne(at),h=f.cell,m=f.closest;let E=Ne(jt);if(!Gt(h,s))return;const w=Mh(g,n,m);if(E===Me.DYNAMIC&&(E=w?Me.DELETE:Me.ADD_EDIT),w&&E===Me.DELETE){const y=w[0];wr(y,w[1],n)}else if(!w&&E===Me.ADD_EDIT){const y=hd(n,m,""),x=At.uniqueId();Kn(x,y,n,!0)}else w&&E===Me.ADD_EDIT&&Ci(w[0],n)}function u(f){const g=Ne(Wt);if(!g)return;let h=g.constraint;const m=g.id;if(h.value===void 0||!Fo(f.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,f.key);E!==void 0&&E!==h.value&&(h=Wo(h,E),Xt(n,m,h))}return o.onDragStart=f=>{l(f)},o.onMove=f=>{if(!Gt(f.cell,s)){sl.set(void 0);return}const h=Ne(jt),m=hd(n,f.closest,""),E=Ne(Vo);E&&(m.shape={...E});const C=Ne(at),w=Mh(C,n,f.closest);if(!w&&h===Me.DELETE){sl.set(void 0);return}let y="add",x;w&&(h===Me.DYNAMIC||h===Me.DELETE)&&(y="remove",x=w[0]);const N={tool:m,match_id:x,mode:y};sl.set(N)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:()=>{},keyDown:f=>{u(f)},keyUp:()=>{}}}function mF(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Dt.CORNER_OR_EDGE,o=new ec(i),s={nRows:e.nRows,nCols:e.nCols};function l(f){const g=Ne(at),h=f.cell,m=f.direction,E=wo(m);if(Gt(h,s))return;const w=Ch(h,E);if(!Gt(w,s))return;let x=Ne(jt);const N=Th(g,n,h,E);if(x===Me.DYNAMIC&&(x=N?Me.DELETE:Me.ADD_EDIT),N&&x===Me.DELETE){const[T,G]=N;wr(T,G,n)}else if(!N&&x===Me.ADD_EDIT){const T=dd(n,h,E,""),G=At.uniqueId();Kn(G,T,n,!0)}else N&&x===Me.ADD_EDIT&&Ci(N[0],n)}function u(f){const g=Ne(Wt);if(!g)return;let h=g.constraint;const m=g.id;if(h.value===void 0||!Fo(f.key)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,f.key);E!==void 0&&E!==h.value&&(h=Wo(h,E),Xt(n,m,h))}return o.onDragStart=f=>{l(f)},o.onMove=f=>{if(Gt(f.cell,s)){Is.set(void 0);return}const h=wo(f.direction),m=Ch(f.cell,h);if(!Gt(m,s)){Is.set(void 0);return}const C=Ne(jt),w=Ne(at);if(!Th(w,n,f.cell,h)&&C===Me.DELETE){Is.set(void 0);return}const x=dd(n,f.cell,h,"");Is.set(x)},{pointerDown:f=>{f.button===0&&o.pointerDown(f,t)},pointerMove:f=>{o.pointerMove(f,t)},pointerUp:()=>{},keyDown:f=>{u(f)},keyUp:()=>{}}}function EF(t,e,n,r){const i=new Xo,o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null;function u(g){const h=Ne(at),m=g.cell;if(!Gt(g.cell,o))return;let C=Ne(jt);const w=HU(h,n,m);if(w&&(g.event.shiftKey||C===Me.ADD_EDIT)&&(l=w[0],s=w[1],qo({id:l,constraint:s}),C=Me.ADD_EDIT),C===Me.DYNAMIC&&(C=w?Me.DELETE:Me.ADD_EDIT),w&&C===Me.DELETE){wr(w[0],w[1],n);return}if(!s&&C===Me.ADD_EDIT){s=Mp(n,[m]),l=At.uniqueId(),qs(l,s);return}else if(s&&l&&C===Me.ADD_EDIT){const y=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;s=SU(s,m,y),Xt(n,l,s);return}}function d(g){const h=Ne(Wt);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!Fo(g.key)||!(r!=null&&r.valueUpdater))return;const C=r.valueUpdater(m==null?void 0:m.value,g.key);C!==void 0&&C!==m.value&&(m=DU(m,C),Xt(n,E,m))}return i.onDragStart=g=>{l=null,s=null,u(g)},i.onDrag=g=>{u(g)},i.onDragEnd=()=>{l&&s&&Kn(l,s,n,!1),l=null},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{d(g)},keyUp:()=>{}}}var Er=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Er||{});const bF=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Zp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),CF=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),wF=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),yF=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),IF=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Gu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),OF=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Fu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),tc=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function xF(t,e,n){if(e===v.DIGIT){const r=t.map(s=>s.value),i=bF(t,n),o=Zp(t,r);return[i,o]}if(e===v.GIVEN){const r=t.map(l=>l.value),i=t.map(l=>l.given),o=CF(t,n),s=wF(t,r,i);return[o,s]}if(e===v.REGIONS){const r=t.map(s=>s.region),i=yF(t,n),o=IF(t,r);return[i,o]}if(e===v.HIGHLIGHTS&&n!==null){const r=Fu(t,n),i=Fu(t,n);return[r,i]}if(e===v.HIGHLIGHTS&&n===null){const r=t.map(s=>s.highlights),i=Fu(t,n),o=tc(t,r);return[i,o]}if((e===v.CORNER_PM||e===v.CENTER_PM)&&n!==null){const r=Gu(t,n,e),i=Gu(t,n,e);return[r,i]}if((e===v.CORNER_PM||e===v.CENTER_PM)&&n===null){let r=[];e===v.CORNER_PM?r=t.map(s=>s.cornerMarks):r=t.map(s=>s.centerMarks);const i=Gu(t,n,e),o=OF(t,r,e);return[i,o]}}function ps(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Yn.update(i=>i)}function xo(t){switch(t.type){case Er.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ps(e,v.DIGIT,n,!0);break}case Er.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ps(e,v.GIVEN,n,!0);break}case Er.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ps(e,v.REGIONS,n,!0);break}case Er.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ps(e,v.HIGHLIGHTS,n,!0);break}case Er.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ps(e,r,n,!0);break}case Er.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Yn.update(r=>r);break}case Er.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Yn.update(i=>i);break}case Er.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Yn.update(r=>r);break}case Er.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Yn.update(r=>r);break}case Er.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===v.CENTER_PM?e[i].centerMarks=r[i]:n===v.CORNER_PM&&(e[i].cornerMarks=r[i]);Yn.update(i=>i);break}}}function AF(t,e){return{execute:()=>{xo(t)},unExecute:()=>{xo(e)}}}const fo=new Xo;function Vh(t,e){return t.shiftKey?ys.SELECTING:t.ctrlKey||t.metaKey||e?ys.DYNAMIC:t.altKey?ys.DESELECTING:ys.RESETTING}function bd(t,e,n,r,i=!1){switch(e){case v.GIVEN:return t.filter(s=>n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&(s.value!==r||!s.given));case v.DIGIT:return t.filter(s=>!(i&&s.given)&&(n==="any"&&s.value!==null||n==="empty"&&s.value===null||n==="equal"&&s.value===r||n==="different"&&s.value!==r));case v.CORNER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.cornerMarks.length||n==="empty"&&!s.cornerMarks.length||n==="equal"&&s.cornerMarks.includes(r)||n==="different"&&!s.cornerMarks.includes(r)));case v.CENTER_PM:return t.filter(s=>!(i&&s.given)&&s.value===null&&(n==="any"&&s.centerMarks.length||n==="empty"&&!s.centerMarks.length||n==="equal"&&s.centerMarks.includes(r)||n==="different"&&!s.centerMarks.includes(r)));case v.HIGHLIGHTS:return t.filter(s=>n==="any"&&s.highlights.length||n==="empty"&&!s.highlights.length||n==="equal"&&s.highlights.includes(r)||n==="different"&&!s.highlights.includes(r))}return t}function SF(t,e){const n=[e,v.DIGIT,v.CORNER_PM,v.CENTER_PM,v.HIGHLIGHTS],r=i=>i===v.CORNER_PM||i===v.CENTER_PM||i===v.DIGIT;for(const i of n){const o=bd(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function zu(t,e,n,r){const i=xF(e,n,r);if(i){const o=i[0],s=i[1],l=AF(o,s),u=vd(t),f=[fG(u,u),l];_G(f)}}function DF(t,e,n){const r=[v.DIGIT,v.CORNER_PM,v.CENTER_PM,v.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};fo.onTap=m=>{if(m.tapCount!==2)return;const C=Gt(m.cell,i)?m.cell:null;if(!C)return;const w=rF(C,e,n),y=vd(w);ho(y)},fo.onDragStart=m=>{const E=Gt(m.cell,i),C=Ne(pd),w=Vh(m.event,C),y=E?m.cell:null,x=JU(y,w);ho(x)},fo.onDrag=m=>{const C=Gt(m.cell,i)?m.cell:null,w=tG(C);ho(w)};function o(m){if(!HO(m))return!1;const E=e.getAllCells().map(w=>({r:w.r,c:w.c})),C=vd(E);return ho(C),!0}function s(m){if(!VO(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=XO(m);return kr(E),!0}return m.type==="keyup"?(hG(),!0):!1}function l(m){if(!KO(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),C=r[(E+1)%r.length];return kr(C),md(C),!0}else{const E=qO(m.code);return kr(E),md(E),!0}}function u(m){if(!QO(m))return!1;const E=Ne(Pi).lastCell;let C=null;if(E!==null){const[x,N]=JO(m),[T,G]=[wh(E.r+N,0,i.nRows-1),wh(E.c+x,0,i.nCols-1)];C={r:T,c:G}}else C={r:0,c:0};const w=Vh(m,!1),y=nG(C,w);return ho(y),!0}function d(m){const E=jO(m);if(E===void 0)return!1;const C=Ne(Pi).cells,w=[];if(C.forEach(y=>{const x=e.getCell(y.r,y.c);x&&w.push(x)}),E===null){const{tool:y,cells:x}=SF(w,n);if(x.length)return zu(C,x,y,E),!0}else{let y=bd(w,n,"different",E,!0);if(y.length)return zu(C,y,n,E),!0;if(y=bd(w,n,"equal",E,!0),y.length)return zu(C,y,n,E),!0}return!1}function f(m){return m.repeat?!1:d(m.key)}const g=At.throttle(m=>{fo.pointerMove(m,t)},10);return{pointerDown(m){m.button===0&&fo.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){fo.pointerUp(m,t)},keyUp(m){s(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||f(m)||s(m)||l(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){d(m.currentTarget.value)}}}function LF(t,e,n,r){const i=[Te.N,Te.NE,Te.E,Te.SE,Te.S,Te.SW,Te.W,Te.NW],o=new ec(r.cornerOrEdge),s={nRows:e.nRows,nCols:e.nCols};let l=null,u=null;function d(h){const m=Ne(at),E=h.cell;if(!Gt(h.cell,s))return;let w=Ne(jt);h.event.altKey&&(w=Me.DELETE);const y=bo(m,n,E),x=wo(h.direction);!y&&w!==Me.DELETE?(l=fd(n,E,x),u=At.uniqueId(),Kn(u,l,n,!0)):y&&(y[1].direction===x&&w===Me.ADD_EDIT?([u,l]=y,Ci(y[0],n)):y[1].direction===x&&w===Me.DYNAMIC||w===Me.DELETE?wr(y[0],y[1],n):(u=y[0],l={...y[1],direction:x},Xt(n,y[0],l)))}function f(h){if(!WO(h))return;const m=Ne(Wt);if(!m)return;const E=m.id,C=m.constraint;if(!Hi(C.toolId))return;const y=(i.indexOf(C.direction)+1)%i.length;l={...C,direction:i[y]},Xt(n,E,l)}return o.onDragStart=h=>{d(h)},o.onMove=h=>{if(!Gt(h.cell,s)){nl.set(void 0);return}const E=wo(h.direction),C=fd(n,h.cell,E),w=Ne(jt),y=Ne(at),x=bo(y,n,h.cell);if(!x&&w===Me.DELETE){nl.set(void 0);return}let N="add",T;x&&(w===Me.DELETE||x[1].direction===E&&w===Me.DYNAMIC)&&(N="remove",T=x[0]);const G={tool:C,match_id:T,mode:N};nl.set(G)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:()=>{},keyDown:h=>{f(h)},keyUp:()=>{}}}function RF(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function NF(t,e,n,r){const i=new ec(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let s=null,l=null;function u(f){const g=Ne(at),h=f.cell;if(!Gt(f.cell,o))return;let E=Ne(jt);E===Me.DYNAMIC&&f.event.altKey&&(E=Me.DELETE);const C=wo(f.direction),w=bo(g,n,h);if(!w&&E!==Me.DELETE)s=gd(n,h,C),l=At.uniqueId(),Kn(l,s,n,!0);else if(w)if(w[1].directions.includes(C)&&E!==Me.DELETE&&([l,s]=w,Ci(w[0],n)),w&&E===Me.DELETE)wr(w[0],w[1],n);else{const y=RF(w[1].directions,C);y.length>0?(l=w[0],s={...w[1],directions:y},Xt(n,w[0],s)):wr(w[0],w[1],n)}}return i.onDragStart=f=>{u(f)},i.onMove=f=>{if(!Gt(f.cell,o)){rl.set(void 0);return}const h=wo(f.direction),m=gd(n,f.cell,h);if(Ne(jt)===Me.DELETE){rl.set(void 0);return}rl.set(m)},{pointerDown:f=>{f.button===0&&i.pointerDown(f,t)},pointerMove:f=>{i.pointerMove(f,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class kF{constructor(e){pe(this,"onDragStart",null);pe(this,"onMove",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onTap",null);pe(this,"_prevCoord",null);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_margin",.35);this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const i=el(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=el(r,this._margin);if(!i||this._prevCoord&&Je(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=wn(e,n);if(!r)return;const i=el(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function TF(t,e,n,r){const i=new kF,o={nRows:e.nRows,nCols:e.nCols};function s(d){const f=Ne(at),g=d.coord;let h=Ne(jt);const m=dl(g);if(!m.every(w=>Gt(w,o)))return;let C=null;if(C=Rh(f,n,m),h===Me.DYNAMIC&&(h=C?Me.DELETE:Me.ADD_EDIT),C&&h===Me.DELETE){const w=C[0];wr(w,C[1],n)}else if(!C&&h===Me.ADD_EDIT){const w=(r==null?void 0:r.defaultValue)??"",y=ud(n,m,w),x=At.uniqueId();Kn(x,y,n,!0)}else C&&h===Me.ADD_EDIT&&Ci(C[0],n)}function l(d){const f=Ne(Wt);if(!f)return;let g=f.constraint;const h=f.id;if(g.value===void 0||!Fo(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(g==null?void 0:g.value,d.key);m!==void 0&&m!==g.value&&(g=Wo(g,m),Xt(n,h,g))}return i.onDragStart=d=>{s(d)},i.onMove=d=>{if(!Gt(d.coord,o)){il.set(void 0);return}const g=Ne(jt),h=dl(d.coord),m=(r==null?void 0:r.defaultValue)??"",E=ud(n,h,m),C=Ne(Vo);C&&(E.shape={...C});const w=Ne(at),y=Rh(w,n,h);if(!y&&g===Me.DELETE){il.set(void 0);return}let x="add",N;y&&(g===Me.DYNAMIC||g===Me.DELETE)&&(x="remove",N=y[0]);const T={tool:E,match_id:N,mode:x};il.set(T)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class MF{constructor(){pe(this,"onDragStart",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onTap",null);pe(this,"onMove",null);pe(this,"_prevCoord",null);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,s=Ja(r,o);if(!s)return;this._prevCoord=s.corner;const l={event:e,coord:s.corner};this.onDragStart&&this.onDragStart(l)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=Ja(r,this._margin);if(!i||this._prevCoord&&Je(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=wn(e,n);if(!r)return;const i=Ja(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function $F(t,e,n,r){const i=new MF,o={nRows:e.nRows,nCols:e.nCols};function s(d){const f=Ne(at),g=d.coord;let h=Ne(jt);const m=ul(g);if(!m.every(w=>Gt(w,o)))return;let C=null;if(C=Nh(f,n,g),h===Me.DYNAMIC&&(h=C?Me.DELETE:Me.ADD_EDIT),C&&h===Me.DELETE){const w=C[0];wr(w,C[1],n)}else if(!C&&h===Me.ADD_EDIT){const w=cd(n,m,r==null?void 0:r.defaultValue),y=At.uniqueId();Kn(y,w,n,!0)}else C&&h===Me.ADD_EDIT&&Ci(C[0],n)}function l(d){const f=Ne(Wt);if(!f)return;let g=f.constraint;const h=f.id;if(g.value===void 0||!Fo(d.key)||!(r!=null&&r.valueUpdater))return;const m=r.valueUpdater(g==null?void 0:g.value,d.key);m!==void 0&&m!==g.value&&(g=Wo(g,m),Xt(n,h,g))}return i.onDragStart=d=>{s(d)},i.onMove=d=>{if(!Gt(d.coord,o)){ol.set(void 0);return}const g=Ne(jt),h=ul(d.coord),m=cd(n,h,r==null?void 0:r.defaultValue),E=Ne(Vo);E&&(m.shape={...E});const C=Ne(at),w=Nh(C,n,d.coord);if(!w&&g===Me.DELETE){ol.set(void 0);return}let y="add",x;w&&(g===Me.DYNAMIC||g===Me.DELETE)&&(y="remove",x=w[0]);const N={tool:m,match_id:x,mode:y};ol.set(N)},{pointerDown:d=>{d.button===0&&i.pointerDown(d,t)},pointerMove:d=>{i.pointerMove(d,t)},pointerUp:d=>{i.pointerUp(d,t)},keyDown:d=>{l(d)},keyUp:()=>{}}}class UF{constructor(){pe(this,"onDragStart",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onTap",null);pe(this,"_prevType",null);pe(this,"_isDown",!1);pe(this,"_isTap",!1);pe(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const i=As(r,Dt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=wn(e,n);if(!r)return;const i=As(r,Dt.CLOSEST);if(!i||this._prevCoords&&Je(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&zp(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=wn(e,n);if(!r)return;const i=As(r,Dt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&Je(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function GF(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new UF;return r.onTap=o=>{const s=o.coords,l=Ne(pl),u=Ne(vl);if(o.type==="cell center"){if(!EO(s,n))return;const f=u.getCellMarker(s);if(f)if(f.marker==="X"){const g={...s,colorId:l,marker:"O"},h=Va(g),m=Va(f),E=Mi(h,m);Bn(E)}else{const g=Fh(s),h=Va(f),m=Mi(g,h);Bn(m)}else{const g={...s,colorId:l,marker:"X"},h=Va(g),m=Fh(s),E=Mi(h,m);Bn(E)}}else if(o.type==="edge"){const d=u.getEdgeMarker(s);if(d){const f=Gh(s),g=Uh(d),h=Mi(f,g);Bn(h)}else{const f={...s,colorId:l},g=Uh(f),h=Gh(s),m=Mi(g,h);Bn(m)}}},r.onDrag=o=>{const s=o.coords,l=Ne(pl);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:s,colorId:l},d=cG(u);Cr(d)}},r.onDragEnd=()=>{const o=Ne(vl);if(o.mode==="add"){const s=o.draftLine.filter(l=>!o.lineMarkers.some(u=>po(l,u)));if(s.length){const l=yo(s),u=zh(s),d=Mi(l,u);Bn(d)}}else{const s=o.lineMarkers.filter(l=>o.draftLine.some(u=>po(l,u)));if(s.length){const l=zh(s),u=yo(s),d=Mi(l,u);Bn(d)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function FF(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function zF(t,e){const n=Hv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function PF(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function BF(t){for(let e=0;;e++){const n=PF(e);if(!t.has(n))return n}}function HF(t,e,n){const r=new Xo,i={nRows:e.nRows,nCols:e.nCols};let o=null,s=null,l=null,u=null,d="cells2",f=Ne(jt);function g(m){const E=Ne(at),C=m.cell;if(!Gt(m.cell,i))return;const y=jU(E,n,C);if(y?(l=y[0],o=y[1],f===Dn.DYNAMIC&&(f=Dn.MOVE),f===Dn.MOVE&&(f=Dn.MOVE,u=C,d=o.cells2.some(N=>Je(N,C))?"cells2":"cells")):f===Dn.DYNAMIC&&(f=Dn.SELECT),f===Dn.SELECT&&l===null){l=At.uniqueId();const x=KU(E,n),N=BF(x);o=FF(n,[C],N),qs(l,o);return}else if(f===Dn.SELECT&&l&&o){o=zF(o,C),Xt(n,l,o);return}else if(f===Dn.MOVE&&l&&o&&u){const x={r:C.r-u.r,c:C.c-u.c},T=(d==="cells2"?o.cells2:o.cells).map(K=>({r:K.r+x.r,c:K.c+x.c}));if(!T.every(K=>Gt(K,i)))return;d==="cells"?o={...o,cells:T}:o={...o,cells2:T},u=C,Xt(n,l,o)}}return r.onDragStart=m=>{f=Ne(jt),l=null,o=null,u=null,g(m)},r.onDrag=m=>{g(m)},r.onDragEnd=()=>{l&&o&&(f===Dn.SELECT?Kn(l,o,n):f===Dn.MOVE&&Ed(l,s,o,n),s=o)},r.onTap=()=>{l&&f!==Dn.SELECT&&(C_(n,l),l=null,o=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function WF(t){if(t.type===fe.SELECTION)return function(n,r,i){return DF(n,r,i)};if(t.type===fe.SINGLE_CELL){let e=function(r,i,o){return vF(r,i,o,n)};const n=t;return e}else if(t.type===fe.SINGLE_CELL_ARROW){let e=function(r,i,o){return LF(r,i,o,n)};const n=t;return e}else if(t.type===fe.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return NF(r,i,o,n)};const n=t;return e}else if(t.type===fe.EDGE){let e=function(r,i,o){return TF(r,i,o,n)};const n=t;return e}else if(t.type===fe.CORNER){let e=function(r,i,o){return $F(r,i,o,n)};const n=t;return e}else if(t.type===fe.LINE){let e=function(r,i,o){return sF(r,i,o,n)};const n=t;return e}else if(t.type===fe.ARROW){let e=function(r,i,o){return oF(r,i,o,n)};const n=t;return e}else if(t.type===fe.CAGE){let e=function(r,i,o){return EF(r,i,o,n)};const n=t;return e}else{if(t.type===fe.CLONE)return function(n,r,i){return HF(n,r,i)};if(t.type===fe.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return pF(r,i,o,n)};const n=t;return e}else if(t.type===fe.OUTSIDE_DIRECTION){let e=function(r,i,o){return mF(r,i,o,n)};const n=t;return e}else if(t.type===fe.PEN)return function(n,r){return GF(n,r)}}}const Qp=qn([Io,hn,on],([t,e,n])=>{const r=Kl(n,Bt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?WF(i):void 0;return o?o(t,e,n):void 0}),jt=Lt(void 0);var YF=ce('<button class="form-button svelte-lzdz6g"> </button>'),jF=ce('<button class="form-button radio-button svelte-lzdz6g" role="switch"> </button>'),KF=ce('<div class="tool-buttons svelte-lzdz6g"></div>');function VF(t,e){ae(e,!1);const n=We(),r=()=>ge(jt,"$toolModeStore",n),i=A(),o=A();let s=M(e,"tool_id",8);function l(h){Co(jt,h)}function u(){if(Yd(s())){const h=At.uniqueId(),m=$p(s(),"");Kn(h,m,s(),!0)}else if(s()===v.VARIABLE_CONSTRAINT){const h=At.uniqueId(),m=Up("","");Kn(h,m,s(),!0)}}Co(jt,aO(s())),L(()=>V(s()),()=>{I(i,sO(s()))}),L(()=>r(),()=>{I(o,r())}),Ce(),he();var d=Ee(),f=ee(d);{var g=h=>{var m=KF();Qe(m,5,()=>Object.values(_(i)),mt,(E,C)=>{var w=Ee(),y=ee(w);{var x=T=>{var G=YF(),K=Y(G,!0);P(G),J(()=>rt(K,_(C))),Re("click",G,u),D(T,G)},N=T=>{var G=jF(),K=Y(G,!0);P(G),J(()=>{S(G,"aria-checked",_(C)===_(o)),Et(G,"selected",_(C)===_(o)),rt(K,_(C))}),Re("click",G,()=>l(_(C))),D(T,G)};Q(y,T=>{_(C)===qd.CREATE?T(x):T(N,!1)})}D(E,w)}),P(m),D(h,m)};Q(f,h=>{_(i)&&h(g)})}D(t,d),le()}var qF=ce('<div class="value-editor svelte-1lvt8yv">Name: <input class="text-input" type="text"></div>'),XF=ce('<div class="value-editor svelte-1lvt8yv">Value: <input class="text-input" type="text"></div>'),ZF=ce('<div class="editor-wrapper svelte-1lvt8yv"><div class="editor svelte-1lvt8yv"><div class="bool-constraints-container svelte-1lvt8yv"><!></div> <div class="value-editor-container svelte-1lvt8yv"><!> <!></div> <!> <!></div></div>');function QF(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A();let s=M(e,"tool_id",8);const l=Bt[s()],u=l.negative_constraints,d=!!(u&&Object.keys(u).length>0),g=$v(s())||d;function h(y){if(!_(i))return;const N=y.target.value,T=l.inputOptions;if(!T||T.type!==fe.VALUE_TOOL&&T.type!==fe.CAGE&&T.type!==fe.LINE&&T.type!==fe.EDGE&&T.type!==fe.CORNER&&T.type!==fe.OUTSIDE_DIRECTION)return;const G=T.valueUpdater;if(!G)return;const K=G(N,"");if(K===void 0)return;const U=Wo(_(i).constraint,K);Xt(s(),_(i).id,U)}function m(y){if(!_(i))return;const N=y.target.value;if(!l.inputOptions)return;const G=BU(_(i).constraint,N);Xt(s(),_(i).id,G)}L(()=>r(),()=>{I(i,r())}),L(()=>_(i),()=>{var y;I(o,(y=_(i))==null?void 0:y.constraint)}),Ce(),he();var E=Ee(),C=ee(E);{var w=y=>{var x=ZF(),N=Y(x),T=Y(N),G=Y(T);{var K=Z=>{var ye=Ee(),be=ee(ye);Qe(be,1,()=>u,mt,(Ie,Oe)=>{ZG(Ie,{get tool_id(){return s()},get neg_tool_id(){return _(Oe).toolId},get description(){return _(Oe).description}})}),D(Z,ye)};Q(G,Z=>{u&&Z(K)})}P(T);var U=F(T,2),H=Y(U);{var re=Z=>{var ye=qF(),be=F(Y(ye));cn(be),S(be,"spellcheck",!1),P(ye),J(()=>Qu(be,_(o).name)),Re("change",be,Ie=>m(Ie)),D(Z,ye)};Q(H,Z=>{_(o)&&Object.hasOwn(_(o),"name")&&Z(re)})}var te=F(H,2);{var oe=Z=>{var ye=XF(),be=F(Y(ye));cn(be),S(be,"spellcheck",!1),P(ye),J(()=>Qu(be,_(o).value)),Re("input",be,Ie=>h(Ie)),D(Z,ye)};Q(te,Z=>{var ye;((ye=_(o))==null?void 0:ye.value)!==void 0&&Z(oe)})}P(U);var se=F(U,2);VF(se,{get tool_id(){return s()}});var we=F(se,2);tF(we,{get tool_id(){return s()}}),P(N),P(x),D(y,x)};Q(C,y=>{g&&y(w)})}D(t,E),le()}var JF=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.57-122Q451-122 430-142.88q-21-20.89-21-50.21 0-28.84 20.84-50.38Q450.67-265 479.93-265q30.07 0 50.57 21.5Q551-221.99 551-193q0 29-20.43 50t-50 21Zm0-287Q451-409 430-429.84q-21-20.83-21-50.09 0-30.07 20.84-50.57 20.83-20.5 50.09-20.5 30.07 0 50.57 20.43t20.5 50Q551-451 530.57-430t-50 21Zm0-286Q451-695 430-716.21q-21-21.22-21-51 0-29.79 20.84-50.62 20.83-20.84 50.09-20.84 30.07 0 50.57 20.93t20.5 50.72q0 29.78-20.43 50.9-20.43 21.12-50 21.12Z"></path></svg>');function e8(t){var e=JF();D(t,e)}var t8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.12-330q70.88 0 120.38-49.62t49.5-120.5q0-70.88-49.62-120.38T479.88-670Q409-670 359.5-620.38T310-499.88q0 70.88 49.62 120.38t120.5 49.5Zm-.12-74q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 227q-154 0-278-90T17-500q61-143 185-233t278-90q154 0 278 90t185 233q-61 143-185 233t-278 90Zm0-323Zm-.08 240q120.45 0 221.27-65.5Q802-391 855-500q-53-109-153.73-174.5Q600.53-740 480.08-740t-221.27 65.5Q158-609 104-500q54 109 154.73 174.5Q359.47-260 479.92-260Z"></path></svg>');function n8(t){var e=t8();D(t,e)}var r8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m634-432-77-76q21-44-12.5-69t-62.5-6l-70-71q15-8 33-12t35-4q71 0 120.5 49.5T650-500q0 16-4 36t-12 32Zm148 150-55-56q44-35 76.5-77t52.5-85q-52-110-150.5-175T490-740q-42 0-82 7t-59 16l-66-66q35-16 92.5-28T485-823q147 0 272 85t186 238q-25 66-67.5 121.5T782-282Zm25 227L653-207q-35 14-80 22t-93 8q-151 0-276.5-85.5T17-500q18-51 55-103t86-100L35-824l50-52 769 769-47 52ZM216-646q-36 29-66 68.5T104-500q52 111 153 175.5T488-260q27 0 55.5-3t44.5-11l-64-64q-8 4-20.5 6t-23.5 2q-70 0-120-49t-50-121q0-11 1.5-23t4.5-21L216-646Zm323 128Zm-137 69Z"></path></svg>');function i8(t){var e=r8();D(t,e)}var o8=ce('<button class="dropdown-button svelte-16fwln9"><div class="icon-wrapper svelte-16fwln9"><!></div> </button>'),s8=ce('<button class="dropdown-button svelte-16fwln9"><div class="icon-wrapper svelte-16fwln9"><!></div> Delete</button>'),a8=ce('<div class="popup-container svelte-16fwln9"><div class="dropdown-menu svelte-16fwln9"><!> <!></div></div>'),l8=ce('<div class="dropdown-container svelte-16fwln9"><button class="form-button icon header-button svelte-16fwln9"><!></button></div> <!>',1);function c8(t,e){ae(e,!1);let n=M(e,"display",8,!1),r=M(e,"disabled",8,!1),i=M(e,"deleteElementCb",8,null),o=M(e,"enableDisableElementCb",8,null),s=A(!1),l=A(),u=A(),d=A(),f=A({top:0,left:0,width:0});function g(){if(_(d)&&_(s)){const N=_(d).getBoundingClientRect();I(f,{top:N.bottom+window.scrollY+4,left:N.left+window.scrollX,width:Math.max(160,N.width)})}}async function h(){I(s,!_(s)),_(s)&&(await AI(),g())}function m(){I(s,!1)}function E(N){const T=N.target;if(_(s)&&_(l)&&T&&!_(l).contains(T)&&!_(d).contains(T))return N.preventDefault(),N.stopPropagation(),N.stopImmediatePropagation(),m(),console.log("handleClickOutside"),!1}function C(){_(s)&&g()}xd(()=>{const N=document.getElementById("App")||document.body;return I(u,document.createElement("div")),Sr(u,_(u).style.position="absolute"),Sr(u,_(u).style.top="0"),Sr(u,_(u).style.left="0"),Sr(u,_(u).style.bottom="0"),Sr(u,_(u).style.right="0"),Sr(u,_(u).style.zIndex="9000"),Sr(u,_(u).style.pointerEvents="none"),N.appendChild(_(u)),document.addEventListener("click",E,{capture:!0,passive:!1}),document.addEventListener("pointerdown",E,{capture:!0,passive:!1}),window.addEventListener("resize",C),window.addEventListener("scroll",C,!0),()=>{document.removeEventListener("click",E,{capture:!0}),document.addEventListener("pointerdown",E,{capture:!0}),window.removeEventListener("resize",C),window.removeEventListener("scroll",C,!0),_(u)&&_(u).parentNode&&_(u).parentNode.removeChild(_(u))}}),L(()=>(_(u),_(l),_(s)),()=>{_(u)&&_(l)&&(_(s)?_(u).appendChild(_(l)):_(l).parentNode===_(u)&&_(u).removeChild(_(l)))}),Ce(),he();var w=Ee(),y=ee(w);{var x=N=>{var T=l8(),G=ee(T),K=Y(G),U=Y(K);e8(U),P(K),qr(K,te=>I(d,te),()=>_(d)),P(G);var H=F(G,2);{var re=te=>{var oe=a8(),se=Y(oe),we=Y(se);{var Z=Ie=>{var Oe=o8(),Ae=Y(Oe),De=Y(Ae);{var Ge=ct=>{n8(ct)},ot=ct=>{i8(ct)};Q(De,ct=>{r()?ct(Ge):ct(ot,!1)})}P(Ae);var lt=F(Ae);P(Oe),J(()=>rt(lt,` ${(r()?"Enable":"Disable")??""}`)),Re("click",Oe,Cn(()=>{o()(),m()})),D(Ie,Oe)};Q(we,Ie=>{o()&&Ie(Z)})}var ye=F(we,2);{var be=Ie=>{var Oe=s8(),Ae=Y(Oe),De=Y(Ae);Vp(De),P(Ae),Vr(),P(Oe),Re("click",Oe,Cn(()=>{i()(),m()})),D(Ie,Oe)};Q(ye,Ie=>{i()&&Ie(be)})}P(se),P(oe),qr(oe,Ie=>I(l,Ie),()=>_(l)),J(()=>S(se,"style",`top: ${_(f).top??""}px; left: ${_(f).left??""}px; min-width: ${_(f).width??""}px;`)),D(te,oe)};Q(H,te=>{_(s)&&te(re)})}Re("click",K,Cn(h)),D(N,T)};Q(y,N=>{n()&&N(x)})}D(t,w),le()}var u8=ce('<div class="element-button-wrapper svelte-13wvr2"><div class="constraints-ui svelte-13wvr2"><div class="header svelte-13wvr2"><div class="element-icon-container svelte-13wvr2"></div> <div class="name-container svelte-13wvr2"><span class="element-name svelte-13wvr2"></span></div> <!></div> <!></div></div>');function Pu(t,e){ae(e,!1);const n=We(),r=()=>ge(at,"$elementsDictStore",n),i=()=>ge(on,"$toolStore",n),o=A(),s=A(),l=A();let u=M(e,"tool_id",8),d=M(e,"elementHandlers",8);const f=!!d()[u()].permanent;let g=A(!1),h=u();function m(){_(g)?kr(v.DIGIT):_(l)||kr(u())}function E(){vG(u());const te=r().get(u());if(!te)return;const oe=YG(u()),se=jG(u(),te),we=Oo(oe,se);Bn(we)}function C(){const te=Bh(u(),!_(l)),oe=Bh(u(),_(l)),se=Oo(te,oe);Bn(se),_(l)||kr(v.DIGIT)}function w(){var we,Z;const te=(we=_(o).meta)==null?void 0:we.description,oe=((Z=_(o).meta)==null?void 0:Z.usage)??oO(u());let se;return te&&te.length&&(se=te),oe.length&&(se?se=se+`

`+oe:se=oe),se}L(()=>(V(u()),V(d())),()=>{I(o,Kl(u(),d()))}),L(()=>(r(),V(u())),()=>{I(s,r().get(u()))}),L(()=>_(s),()=>{var te;I(l,!!((te=_(s))!=null&&te.disabled))}),L(()=>(V(u()),i()),()=>{I(g,u()===i())}),Ce(),he();var y=u8(),x=Y(y);Et(x,"clickable",!0);var N=Y(x);J(()=>S(N,"title",w()));var T=F(Y(N),2),G=Y(T);G.textContent=h,P(T);var K=F(T,2);{var U=te=>{c8(te,{display:!f,deleteElementCb:E,get disabled(){return _(l)},enableDisableElementCb:C})};Q(K,te=>{f||te(U)})}P(N);var H=F(N,2);{var re=te=>{QF(te,{get tool_id(){return u()}})};Q(H,te=>{_(g)&&te(re)})}P(x),P(y),J(()=>{var te;Et(x,"selected",_(g)),Et(x,"disabled",(te=_(s))==null?void 0:te.disabled)}),Re("click",N,m),D(t,y),le()}var d8=ce("<!> <!> <!>",1);function _8(t,e){ae(e,!1);const n=We(),r=()=>ge(at,"$elementsDictStore",n),i=A();let o=M(e,"elementHandlers",8);const s=jI,l=u=>{KG(u),kr(u)};L(()=>(r(),z),()=>{I(i,(u,d)=>{var h;const f=r().has(u);return!!((h=d.meta)!=null&&h.categories.includes(z.LOCAL_ELEMENT))&&!f})}),Ce(),he(),BG(t,{title:"Elements",onAddTool:l,categories:s,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,d)=>{WG(u)},"panel-content":(u,d)=>{var f=d8(),g=ee(f);Pu(g,{get tool_id(){return v.GIVEN},get elementHandlers(){return o()}});var h=F(g,2);Pu(h,{get tool_id(){return v.REGIONS},get elementHandlers(){return o()}});var m=F(h,2);Qe(m,1,()=>r().entries(),([E,C])=>E,(E,C)=>{let w=()=>_(C)[0];var y=Ee(),x=ee(y);{var N=T=>{Pu(T,{get tool_id(){return w()},get elementHandlers(){return o()}})};Q(x,T=>{HI(w())&&T(N)})}D(E,y)}),D(u,f)}}}),le()}var f8=ce('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function Ss(t,e){let n=M(e,"name",8);var r=f8(),i=Y(r),o=Y(i,!0);P(i);var s=F(i,2);Ot(s,e,"default",{}),P(r),J(()=>rt(o,n())),D(t,r)}var g8=ce('<input class="control-slider svelte-1rsuho6" type="range">');function h8(t,e){ae(e,!1);let n=M(e,"min",8),r=M(e,"max",8),i=M(e,"value",12),o=M(e,"step",24,()=>(r()-n())/10),s=M(e,"onChangeCb",8,void 0),l=M(e,"onInputCb",8,void 0);he();var u=g8();cn(u),J(()=>{S(u,"min",n()),S(u,"max",r()),S(u,"step",o())}),cr(u,i),Re("change",u,()=>{s()&&s()(i())}),Re("input",u,()=>{l()&&l()(i())}),D(t,u),le()}function ui(t,e){let n=M(e,"name",8),r=M(e,"value",12),i=M(e,"min",8),o=M(e,"max",8),s=M(e,"step",24,()=>(o()-i())/10),l=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);Ss(t,{get name(){return`${n()??""}: ${r()??""}`},children:(d,f)=>{h8(d,{get min(){return i()},get max(){return o()},get step(){return s()},get onChangeCb(){return l()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var v8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function p8(t){var e=v8();D(t,e)}var m8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function E8(t){var e=m8();D(t,e)}var b8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function C8(t){var e=b8();D(t,e)}var w8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function y8(t){var e=w8();D(t,e)}var I8=ce('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function O8(t,e){ae(e,!1);const n=[];let r=M(e,"value",8),i=M(e,"selectedShape",12),o=M(e,"title",8),s=M(e,"updateShapeCb",8,void 0);he();var l=I8(),u=Y(l);cn(u);var d,f=F(u,2);Ot(f,e,"default",{}),P(l),J(()=>{S(l,"title",o()),Et(l,"active",r()===i()),d!==(d=r())&&(u.value=(u.__value=r())==null?"":r())}),Ad(n,[],u,()=>(r(),i()),i),Re("change",u,()=>s()&&s()(r())),D(t,l),le()}var x8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function A8(t){var e=x8(),n=Y(e);S(n,"cx",480),S(n,"cy",-480),S(n,"rx",480),S(n,"ry",300),P(e),D(t,e)}var S8=ce('<div class="icon-wrapper svelte-18euf14"><!></div>'),D8=ce('<div class="radio-container svelte-18euf14"></div>');function L8(t,e){ae(e,!1);let n=M(e,"name",8),r=M(e,"selectedShape",8),i=M(e,"possibleShapes",8),o=M(e,"updateShapeCb",8,void 0);const s=new Map([[W.CIRCLE,C8],[W.ELLIPSE,A8],[W.SQUARE,E8],[W.RECTANGLE,p8],[W.POLYGON,y8]]);he(),Ss(t,{get name(){return n()},children:(l,u)=>{var d=D8();Qe(d,5,i,mt,(f,g)=>{O8(f,{get title(){return _(g)},get value(){return _(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(h,m)=>{var E=Ee(),C=ee(E);{var w=y=>{var x=S8(),N=Y(x);Od(N,()=>s.get(_(g)),(T,G)=>{G(T,{})}),P(x),D(y,x)};Q(C,y=>{s.has(_(g))&&y(w)})}D(h,E)},$$slots:{default:!0}})}),P(d),D(l,d)},$$slots:{default:!0}}),le()}var R8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function N8(t){var e=R8();D(t,e)}var k8=ce('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function al(t,e){ae(e,!1);const n=A();let r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0),o=A(void 0);function s(m){const E=Tu(m);E&&i()&&i()(E)}L(()=>V(r()),()=>{I(n,r())}),L(()=>(_(n),Tu),()=>{td(_(n))&&I(o,Tu(_(n)))}),Ce(),he();var l=k8(),u=Y(l);const d=gt(()=>Vv(_(n)));var f=Y(u);cn(f),P(u);var g=F(u,2),h=F(Y(g),2);cn(h),S(h,"spellcheck",!1),S(h,"maxlength",30),P(g),P(l),J(()=>{S(u,"style",`--choosen-color: ${_(o)??""}`),Et(u,"transparent",_(d))}),cr(f,()=>_(n),m=>I(n,m)),Re("change",f,()=>s(_(n))),cr(h,()=>_(n),m=>I(n,m)),Re("input",h,()=>s(_(n))),D(t,l),le()}var T8=ce('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),M8=ce("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function $8(t,e){ae(e,!1);const n=We(),r=()=>ge(on,"$toolStore",n),i=()=>ge(Wt,"$currentConstraintStore",n),o=A(),s=A(),l=A();let u=A(!0),d=M(e,"elementHandlers",8);function f(w,y){const x=(w==null?void 0:w.shape)??(y?Ju(y):void 0);return Uu(x),x}function g(w,y){_(l)&&(Sr(l,_(l)[w]=y),Uu(_(l)))}function h(){_(s)&&(I(l,Ju(_(s))),Uu(_(l)))}function m(w){return w&&[W.CIRCLE,W.SQUARE,W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(w)}function E(w){return w&&[W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(w)}function C(w){return w&&[W.ELLIPSE,W.RECTANGLE].includes(w)}L(()=>(r(),V(d())),()=>{I(o,Kl(r(),d()))}),L(()=>_(o),()=>{I(s,_(o).shape)}),L(()=>(i(),_(s)),()=>{var w;I(l,f(((w=i())==null?void 0:w.constraint)??null,_(s)))}),Ce(),he(),Jl(t,{get isOpen(){return _(u)},set isOpen(w){I(u,w)},$$slots:{"panel-header":(w,y)=>{Ql(w,{slot:"panel-header",title:"Shape Editor",get isOpen(){return _(u)},set isOpen(x){I(u,x)},$$slots:{"title-icon":(x,N)=>{N8(x)}},$$legacy:!0})},"panel-content":(w,y)=>{var x=Ee(),N=ee(x);{var T=G=>{var K=M8(),U=ee(K);{var H=Be=>{var xe=T8();Re("click",xe,h),D(Be,xe)};Q(U,Be=>{qI(_(s))&&Be(H)})}var re=F(U,2);{var te=Be=>{L8(Be,{get possibleShapes(){return _(s).allowedTypes},name:"Shape",get selectedShape(){return _(l).type},updateShapeCb:xe=>g("type",xe)})};Q(re,Be=>{var xe;_(s).allowedTypes&&_(s).allowedTypes.length&&((xe=_(l))!=null&&xe.type)&&Be(te)})}var oe=F(re,2);{var se=Be=>{var xe=gt(()=>_(s).n.lb??3),ke=gt(()=>_(s).n.ub??10);ui(Be,{name:"Number of Sides",get value(){return _(l).n},get min(){return _(xe)},get max(){return _(ke)},step:1,onChangeCb:He=>g("n",He)})};Q(oe,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.n)!==void 0&&((He=(ke=_(s))==null?void 0:ke.n)!=null&&He.editable)&&E(_(l).type)&&Be(se)})}var we=F(oe,2);{var Z=Be=>{var xe=gt(()=>_(s).r.lb??0),ke=gt(()=>_(s).r.ub??1),He=gt(()=>_(s).r.step??.05);ui(Be,{name:"Radius",get value(){return _(l).r},get min(){return _(xe)},get max(){return _(ke)},get step(){return _(He)},onChangeCb:Tt=>g("r",Tt)})};Q(we,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.r)!==void 0&&((He=(ke=_(s))==null?void 0:ke.r)!=null&&He.editable)&&m(_(l).type)&&Be(Z)})}var ye=F(we,2);{var be=Be=>{var xe=gt(()=>_(s).width.lb??0),ke=gt(()=>_(s).width.ub??1),He=gt(()=>_(s).width.step??.05);ui(Be,{name:"Width",get value(){return _(l).width},get min(){return _(xe)},get max(){return _(ke)},get step(){return _(He)},onChangeCb:Tt=>g("width",Tt)})};Q(ye,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.width)!==void 0&&((He=(ke=_(s))==null?void 0:ke.width)!=null&&He.editable)&&C(_(l).type)&&Be(be)})}var Ie=F(ye,2);{var Oe=Be=>{var xe=gt(()=>_(s).height.lb??0),ke=gt(()=>_(s).height.ub??1),He=gt(()=>_(s).height.step??.05);ui(Be,{name:"Height",get value(){return _(l).height},get min(){return _(xe)},get max(){return _(ke)},get step(){return _(He)},onChangeCb:Tt=>g("height",Tt)})};Q(Ie,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.height)!==void 0&&((He=(ke=_(s))==null?void 0:ke.height)!=null&&He.editable)&&C(_(l).type)&&Be(Oe)})}var Ae=F(Ie,2);{var De=Be=>{var xe=gt(()=>_(s).angle.lb??0),ke=gt(()=>_(s).angle.ub??360),He=gt(()=>_(s).angle.step??15);ui(Be,{name:"Angle",get value(){return _(l).angle},get min(){return _(xe)},get max(){return _(ke)},get step(){return _(He)},onChangeCb:Tt=>g("angle",Tt)})};Q(Ae,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.angle)!==void 0&&((He=(ke=_(s))==null?void 0:ke.angle)!=null&&He.editable)&&Be(De)})}var Ge=F(Ae,2);{var ot=Be=>{var xe=gt(()=>_(s).inset.lb??0),ke=gt(()=>_(s).inset.ub??.5),He=gt(()=>_(s).inset.step??.01);ui(Be,{name:"Inset",get value(){return _(l).inset},get min(){return _(xe)},get max(){return _(ke)},get step(){return _(He)},onChangeCb:Tt=>g("inset",Tt)})};Q(Ge,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.inset)!==void 0&&((He=(ke=_(s))==null?void 0:ke.inset)!=null&&He.editable)&&Be(ot)})}var lt=F(Ge,2);{var ct=Be=>{Ss(Be,{name:"Stroke",children:(xe,ke)=>{al(xe,{get value(){return _(l).stroke},onChangeCb:He=>g("stroke",He)})},$$slots:{default:!0}})};Q(lt,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.stroke)!==void 0&&((He=(ke=_(s))==null?void 0:ke.stroke)!=null&&He.editable)&&Be(ct)})}var _t=F(lt,2);{var wt=Be=>{var xe=gt(()=>_(s).strokeWidth.lb??0),ke=gt(()=>_(s).strokeWidth.ub??.8),He=gt(()=>_(s).strokeWidth.step??.01);ui(Be,{name:"Stroke Width",get value(){return _(l).strokeWidth},get min(){return _(xe)},get max(){return _(ke)},get step(){return _(He)},onChangeCb:Tt=>g("strokeWidth",Tt)})};Q(_t,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.strokeWidth)!==void 0&&((He=(ke=_(s))==null?void 0:ke.strokeWidth)!=null&&He.editable)&&Be(wt)})}var yt=F(_t,2);{var yn=Be=>{var xe=gt(()=>_(s).strokeDasharray.lb??0),ke=gt(()=>_(s).strokeDasharray.ub??1),He=gt(()=>_(s).strokeDasharray.step??.01);ui(Be,{name:"Stroke Dasharray",get value(){return _(l).strokeDasharray},get min(){return _(xe)},get max(){return _(ke)},get step(){return _(He)},onChangeCb:Tt=>g("strokeDasharray",Tt)})};Q(yt,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.strokeDasharray)!==void 0&&((He=(ke=_(s))==null?void 0:ke.strokeDasharray)!=null&&He.editable)&&Be(yn)})}var dn=F(yt,2);{var yr=Be=>{Ss(Be,{name:"Fill",children:(xe,ke)=>{al(xe,{get value(){return _(l).fill},onChangeCb:He=>g("fill",He)})},$$slots:{default:!0}})};Q(dn,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.fill)!==void 0&&((He=(ke=_(s))==null?void 0:ke.fill)!=null&&He.editable)&&Be(yr)})}var Ir=F(dn,2);{var Ur=Be=>{Ss(Be,{name:"Font Color",children:(xe,ke)=>{al(xe,{get value(){return _(l).fontColor},onChangeCb:He=>g("fontColor",He)})},$$slots:{default:!0}})};Q(Ir,Be=>{var xe,ke,He;((xe=_(l))==null?void 0:xe.fontColor)!==void 0&&((He=(ke=_(s))==null?void 0:ke.fontColor)!=null&&He.editable)&&Be(Ur)})}D(G,K)};Q(N,G=>{_(s)&&G(T)})}D(w,x)}},$$legacy:!0}),le()}var U8=ce('<button class="form-button icon menu-button svelte-1hqabbm"><div class="icon-wrapper svelte-1hqabbm"><!></div></button>');function Xs(t,e){let n=M(e,"clickCb",8),r=M(e,"title",8);var i=U8(),o=Y(i),s=Y(o);Ot(s,e,"default",{}),P(o),P(i),J(()=>S(i,"title",r())),Re("click",i,Cn(function(...l){var u;(u=n())==null||u.apply(this,l)})),D(t,i)}var G8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function F8(t){var e=G8();D(t,e)}var z8=ce('<div class="buttons-container svelte-kc00rw"><!></div>');function y_(t,e){var n=z8(),r=Y(n);Ot(r,e,"default",{}),P(n),D(t,n)}var P8=ce('<button class="generate-button svelte-uogiuu">Auto-Generate</button>'),B8=ce('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),H8=ce('<div class="edit-puzzle-meta-content svelte-uogiuu"><!> <input class="text-input input-title" type="text" placeholder="Title"> <!> <input class="text-input input-authors" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="text-input input-ruleset" placeholder="Ruleset"></textarea> <!> <input class="text-input input-ctc-link" type="text" placeholder="CTC Link"> <!> <input class="text-input input-ctc-youtube-link" type="text" placeholder="CTC Youtube Link"> <!></div>');function W8(t,e){ae(e,!1);const n=We(),r=()=>ge($r,"$puzzleMetaStore",n),i=()=>ge(at,"$elementsDictStore",n);let o=M(e,"showModal",12,!1),s=A(""),l=A(""),u=A(""),d=A(""),f=A("");function g(){o(!1)}function h(){const w=_(l)?m(_(l)):["Anonymous"],x={title:_(s)?_(s):"Sudoku",authors:w,ruleset:_(u),ctcYoutubeUrl:_(d),ctcUrl:_(f)};gG(x),o(!1)}function m(w){return w.split(/\s*[;]\s*/)}function E(){var T,G,K;let w="";const y=Bt,x=i();!x.get(v.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules apply.

`:w+=`Sudoku rules do not apply.

`;for(const[U,H]of x.entries()){if(U===v.SUDOKU_RULES_DO_NOT_APPLY)continue;const re=y[U],te=((T=re.menu)==null?void 0:T.name)??re.toolId,oe=(G=re.meta)==null?void 0:G.description;if(w+=`**${te}**: ${oe}

`,!!H.negative_constraints)for(const[se,we]of Object.entries(H.negative_constraints)){if(!we)continue;const Z=(K=re.negative_constraints)==null?void 0:K.find(Ie=>Ie.toolId===se);if(!Z)continue;const ye=se,be=Z.description;w+=` - **${ye}**: ${be}

`}}return w.trim()}function C(){const w=E();I(u,w)}L(()=>(V(o()),r(),fl),()=>{if(!o()){const w=r().authors;I(s,r().title??""),I(l,w?fl(w,"; ","; "):""),I(u,r().ruleset??""),I(d,r().ctcYoutubeUrl??""),I(f,r().ctcUrl??"")}}),Ce(),he(),yi(t,{title:"Edit Puzzle Meta",get showModal(){return o()},set showModal(w){o(w)},children:(w,y)=>{var x=H8(),N=Y(x);Gi(N,{title:"Title"});var T=F(N,2);cn(T);var G=F(T,2);Gi(G,{title:"Authors"});var K=F(G,2);cn(K);var U=F(K,2);Gi(U,{title:"Ruleset",children:(Z,ye)=>{var be=P8();Re("click",be,C),D(Z,be)},$$slots:{default:!0}});var H=F(U,2);fI(H),S(H,"rows",8);var re=F(H,2);Gi(re,{title:"CTC Link"});var te=F(re,2);cn(te);var oe=F(te,2);Gi(oe,{title:"CTC Youtube Link"});var se=F(oe,2);cn(se);var we=F(se,2);y_(we,{children:(Z,ye)=>{var be=B8(),Ie=ee(be),Oe=F(Ie,2);Re("click",Ie,h),Re("click",Oe,g),D(Z,be)},$$slots:{default:!0}}),P(x),cr(T,()=>_(s),Z=>I(s,Z)),cr(K,()=>_(l),Z=>I(l,Z)),cr(H,()=>_(u),Z=>I(u,Z)),cr(te,()=>_(f),Z=>I(f,Z)),cr(se,()=>_(d),Z=>I(d,Z)),D(w,x)},$$slots:{default:!0},$$legacy:!0}),le()}var Y8=ce("<!> <!>",1);function j8(t){let e=A(!1);function n(){I(e,!0)}var r=Y8(),i=ee(r);Xs(i,{title:"Edit Puzzle Meta",clickCb:n,children:(s,l)=>{F8(s)},$$slots:{default:!0}});var o=F(i,2);W8(o,{get showModal(){return _(e)},set showModal(s){I(e,s)},$$legacy:!0}),D(t,r)}var K8=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function V8(t){var e=K8();D(t,e)}function q8(t,e){for(const[n,r]of t.entries()){if(!Zr(n))continue;if(Object.values(r.constraints).some(o=>!Gt(o.cell,e)))return!0}return!1}function X8(t,e,n,r){const i=n.zoom_factor;if(r<1){const o=e.x+e.width/2,s=e.y+e.height/2,l=e.width/i,u=e.height/i,d=o-l/2,f=s-u/2;return{x:d,y:f,height:u,width:l}}else if(r>1){const o=e.width/i,s=e.height/i,l=t.x,u=t.width,d=t.y,f=t.height,g=e.x+e.width/2,h=e.y+e.height/2,m=(g+n.point.x)/2,E=(h+n.point.y)/2;let C=m-o/2,w=E-s/2;return C<l&&(C=l),w<d&&(w=d),C+o>u&&(C=u-o),w+s>f&&(w=f-s),{x:C,y:w,height:s,width:o}}return e}const Ao=Lt(1),Zs=qn([at,on,hn],([t,e,n])=>{const r={nRows:n.nRows,nCols:n.nCols},i=q8(t,r),o=Zr(e),s=i||o?1:.2,l=-s,u=-s,d=r.nCols+2*s,f=r.nRows+2*s;return{x:l,y:u,width:d,height:f}}),Qs=Lt(Ne(Zs));function I_(){Ao.set(1),Qs.set(Ne(Zs))}function Z8(t){if(!t.ctrl)return;const e=Ne(Ao),n=.5,r=2,i=t.zoom_factor;let o=e*i;if(o=Math.max(n,Math.min(r,o)),Ao.set(o),o===e)return;const s=Ne(Zs);Qs.update(l=>X8(s,l,t,o))}function Q8(t){if(t.ctrl)return;const e=Ne(Ao),n=Ne(Zs);if(e<1)return;const r=-(t.delta>0?1:t.delta<0?-1:0),i=n.y,o=i+n.height;Qs.update(s=>{const l=.5*r*e;let u=s.y+l;return u<i&&(u=i),u+s.height>o&&(u=o-s.height),{x:s.x,y:u,height:s.height,width:s.width}})}function J8(t){const e=Ne(Ao),n=Ne(Zs);if(e<1)return;const r=t.point,i=n.x,o=i+n.width,s=n.y,l=s+n.height;Qs.update(u=>{let d=u.x-.012/e*r.x,f=u.y-.012*1/e*r.y;return f<s&&(f=s),f+u.height>l&&(f=l-u.height),d<i&&(d=i),d+u.width>o&&(d=o-u.width),{x:d,y:f,height:u.height,width:u.width}})}var ez=ce('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function tz(t,e){ae(e,!1);let n=A(null),r=A(null);function i(){var o;(o=_(n))==null||o.click()}L(()=>(_(r),ml),()=>{if(_(r)&&_(r).length){const o=_(r)[0],s=new FileReader;s.readAsText(o),s.onload=function(l){if(l.target||alert(s.error),l.target&&l.target.result){const u=l.target.result;if(typeof u!="string")return;const d=JSON.parse(u),f=QU(d);console.log(f),EG(f),I_(),ml()}},s.onerror=function(){alert(s.error)}}}),Ce(),he(),Xs(t,{title:"Open Puzzle",clickCb:i,children:(o,s)=>{var l=ez(),u=ee(l);V8(u);var d=F(u,2);qr(d,f=>I(n,f),()=>_(n)),$I(d,()=>_(r),f=>I(r,f)),D(o,l)},$$slots:{default:!0}}),le()}var nz=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function rz(t){var e=nz();D(t,e)}var iz=ce('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function qh(t,e){ae(e,!1);let n=M(e,"name",8),r=M(e,"min",8),i=M(e,"max",8),o=M(e,"value",12),s=M(e,"step",24,()=>(i()-r())/10),l=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);he();var d=iz(),f=Y(d),g=Y(f);P(f);var h=F(f,2);cn(h),P(d),J(()=>{rt(g,`${n()??""}: ${o()??""}`),S(h,"min",r()),S(h,"max",i()),S(h,"step",s())}),cr(h,o),Re("change",h,()=>{l()&&l()(o())}),Re("input",h,()=>{u()&&u()(o())}),D(t,d),le()}var oz=ce('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),sz=ce('<div class="new-puzzle-content svelte-1boysdf"><!> <!> <!> <input class="text-input" type="text"> <!></div>');function az(t,e){ae(e,!1);let n=M(e,"showModal",12,!1);const r=4,i=20;let o=A(9),s=A(9),l=A(""),u=A(At.range(1,10));function d(){n(!1)}function f(){ml(),mG(_(s),_(o),_(u).sort()),I_(),n(!1)}function g(E){return E.map(w=>String(w)).join(",")}function h(){const E=Math.min(Math.max(_(s),_(o)),9);I(u,At.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&I(u,E.replaceAll(" ","").split(",").map(Number))}he(),yi(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,C)=>{var w=sz(),y=Y(w);qh(y,{name:"Width",min:r,max:i,step:1,onInputCb:h,get value(){return _(o)},set value(U){I(o,U)},$$legacy:!0});var x=F(y,2);qh(x,{name:"Height",min:r,max:i,step:1,onInputCb:h,get value(){return _(s)},set value(U){I(s,U)},$$legacy:!0});var N=F(x,2),T=gt(()=>`Allowed Digits (for the solver): ${g(_(u))}`);Gi(N,{get title(){return _(T)}});var G=F(N,2);cn(G),J(()=>S(G,"placeholder",g(_(u))));var K=F(G,2);y_(K,{children:(U,H)=>{var re=oz(),te=ee(re),oe=F(te,2);Re("click",te,f),Re("click",oe,d),D(U,re)},$$slots:{default:!0}}),P(w),cr(G,()=>_(l),U=>I(l,U)),Re("input",G,()=>m(_(l))),D(E,w)},$$slots:{default:!0},$$legacy:!0}),le()}var lz=ce("<!> <!>",1);function cz(t){let e=A(!1);function n(){I(e,!0)}var r=lz(),i=ee(r);Xs(i,{title:"New Puzzle",clickCb:n,children:(s,l)=>{rz(s)},$$slots:{default:!0}});var o=F(i,2);az(o,{get showModal(){return _(e)},set showModal(s){I(e,s)},$$legacy:!0}),D(t,r)}var uz=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function dz(t){var e=uz();D(t,e)}var _z=ce("<button> </button>"),fz=ce('<div class="tab-panel svelte-1cn515q"><!></div>'),gz=ce('<div class="tabbed-menu svelte-1cn515q"><div class="tab-header svelte-1cn515q"></div> <div class="tab-content svelte-1cn515q"></div></div>');function Jp(t,e){let n=M(e,"tabs",24,()=>[]),r=M(e,"activeTab",12,0);function i(u){r(u)}var o=gz(),s=Y(o);Qe(s,5,n,mt,(u,d,f)=>{var g=_z(),h=Y(g,!0);P(g),J(()=>{hv(g,`tab-button ${(r()===f?"active":"")??""} svelte-1cn515q`),rt(h,_(d).label)}),Re("click",g,()=>i(f)),D(u,g)}),P(s);var l=F(s,2);Qe(l,5,n,mt,(u,d,f)=>{var g=Ee(),h=ee(g);{var m=E=>{var C=fz(),w=Y(C);Od(w,()=>_(d).component,(y,x)=>{x(y,RI(()=>_(d).props||{}))}),P(C),D(E,C)};Q(h,E=>{r()===f&&_(d).component&&E(m)})}D(u,g)}),P(l),P(o),D(t,o)}var hz=ce('<div class="tab-container svelte-1051sg0"><div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div> <div class="form-row"><button class="form-button form-modal-button">Download PNG</button> <button class="form-button form-modal-button">Download SVG</button></div></div>');function vz(t,e){ae(e,!1);const n=We(),r=()=>ge(Io,"$svgRefStore",n),i=()=>ge($r,"$puzzleMetaStore",n),o=A(),s=A();function l(x){const N=getComputedStyle(x);let T="";for(let G of N){const K=N.getPropertyValue(G);K&&(T+=`${G}:${K};`)}return T}function u(x){const N=x.cloneNode(!0);(N instanceof SVGElement||N instanceof HTMLElement)&&(N.style.cssText=l(x));const T=x.childNodes;for(let G=0;G<T.length;G++){const K=T[G];if(K instanceof Element){const U=u(K);N.replaceChild(U,N.childNodes[G])}}return N}function d(x,N="sudoku_by_anonymous"){if(!x)return;const T=u(x),K=new XMLSerializer().serializeToString(T),U=new Image,H=new Blob([K],{type:"image/svg+xml;charset=utf-8"}),re=URL.createObjectURL(H);U.onload=()=>{const te=x.getBoundingClientRect(),oe=te.width,se=te.height,we=document.createElement("canvas"),Z=window.devicePixelRatio||1;we.width=oe*Z,we.height=se*Z;const ye=we.getContext("2d");ye&&(ye.scale(Z,Z),ye.drawImage(U,0,0,oe,se),we.toBlob(be=>{if(!be)return;const Ie=URL.createObjectURL(be),Oe=document.createElement("a");Oe.href=Ie,Oe.download=`${N}.png`,Oe.click(),URL.revokeObjectURL(Ie)}))},U.src=re}function f(x,N="sudoku_by_anonymous"){if(!x)return;const T=u(x);let K=new XMLSerializer().serializeToString(T);K.includes("<?xml")||(K=`<?xml version="1.0" standalone="no"?>\r
`+K);const U=new Blob([K],{type:"image/svg+xml"}),H=URL.createObjectURL(U),re=document.createElement("a");re.href=H,re.download=`${N}.svg`,re.click(),URL.revokeObjectURL(H)}const g=1;L(()=>r(),()=>{I(o,r())}),L(()=>i(),()=>{I(s,gl(i()))}),Ce(),he();var h=hz(),m=Y(h),E=Y(m);S(E,"width",400*g),S(E,"height",300*g),P(m);var C=F(m,2),w=Y(C),y=F(w,2);P(C),P(h),Re("click",w,()=>d(_(o),_(s))),Re("click",y,()=>f(_(o),_(s))),D(t,h),le()}var pz=ce('<div class="tab-container svelte-1051sg0"><div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div> <div class="form-row"><button class="form-button form-modal-button">Download JSON</button> <button class="form-button form-modal-button">Copy Link</button></div></div>');function mz(t,e){ae(e,!1);const n=We(),r=()=>ge(Vs,"$puzzleStore",n),i=()=>ge($r,"$puzzleMetaStore",n),o=A(),s=w=>{const y=ZU(r());return JSON.stringify(y,null,w)},l=(w="sudoku_by_anonymous")=>{function y(N,T,G){var K=document.createElement("a"),U=new Blob([N],{type:G});K.href=URL.createObjectURL(U),K.download=T,K.click(),URL.revokeObjectURL(K.href)}const x=s(2);y(x,`${w}.json`,"text/plain")},u=()=>{const w=s(0),y=ex(w),x=`${window.location.host}/encpuzzle/${y}`;navigator.clipboard.writeText(x)},d=1;L(()=>i(),()=>{I(o,gl(i()))}),Ce(),he();var f=pz(),g=Y(f),h=Y(g);S(h,"width",400*d),S(h,"height",300*d),P(g);var m=F(g,2),E=Y(m),C=F(E,2);P(m),P(f),Re("click",E,()=>l(_(o))),Re("click",C,u),D(t,f),le()}var Ez=ce('<div class="save-puzzle-content svelte-mre2mf"><!></div>');function bz(t,e){let n=M(e,"showModal",12,!1);const r=[{label:"Project",component:mz},{label:"Image",component:vz}];yi(t,{title:"Save Puzzle",get showModal(){return n()},set showModal(i){n(i)},children:(i,o)=>{var s=Ez(),l=Y(s);Jp(l,{tabs:r}),P(s),D(i,s)},$$slots:{default:!0},$$legacy:!0})}var Cz=ce("<!> <!>",1);function wz(t){let e=A(!1);function n(){I(e,!0)}var r=Cz(),i=ee(r);Xs(i,{title:"Save Puzzle",clickCb:n,children:(s,l)=>{dz(s)},$$slots:{default:!0}});var o=F(i,2);bz(o,{get showModal(){return _(e)},set showModal(s){I(e,s)},$$legacy:!0}),D(t,r)}var yz=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function em(t){var e=yz();D(t,e)}var Iz=ce('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function Oz(t,e){let n=M(e,"value",8),r=M(e,"onClickCb",8),i=M(e,"disabled",8,!1);var o=Iz(),s=Y(o);cn(s),Vr(2),P(o),J(()=>{Et(o,"disabled",i()),NI(s,n()),s.disabled=i()}),Re("change",s,function(...l){var u;(u=r())==null||u.apply(this,l)}),D(t,o)}var xz=ce('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Fi(t,e){ae(e,!1);let n=M(e,"value",8),r=M(e,"name",8),i=M(e,"updateCb",8,void 0),o=M(e,"disabled",8,!1);function s(){o()||i()&&i()(!n())}he();var l=xz(),u=Y(l);Oz(u,{get value(){return n()},onClickCb:s,get disabled(){return o()}});var d=F(u,2),f=Y(d,!0);P(d),P(l),J(()=>{Et(l,"disabled",o()),rt(f,r())}),Re("click",d,Cn(s)),D(t,l),le()}var Az=ce('<div class="settings-tab-layout"><!> <!> <!></div>');function Sz(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=A();L(()=>r(),()=>{I(i,r())}),Ce(),he();var o=Az(),s=Y(o);Fi(s,{name:"Check Conflicts",get value(){return _(i).checkConflicts},updateCb:d=>lr("checkConflicts",d)});var l=F(s,2);Fi(l,{name:"Highlight Pencilmark Conflicts",get value(){return _(i).highlightPencilmarkConflicts},updateCb:d=>lr("highlightPencilmarkConflicts",d)});var u=F(l,2);Fi(u,{name:"Highlight Cells Seen By Selection",get value(){return _(i).highlightCellsSeenBySelection},updateCb:d=>lr("highlightCellsSeenBySelection",d)}),P(o),D(t,o),le()}var Dz=ce('<div class="settings-tab-layout"><!> <!> <!> <!> <button class="form-button form-modal-button">Restore default settings</button></div>');function Lz(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=A();L(()=>r(),()=>{I(i,r())}),Ce(),he();var o=Dz(),s=Y(o);Fi(s,{get value(){return _(i).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:g=>lr("darkMode",g)});var l=F(s,2);Fi(l,{get value(){return _(i).penToolActive},name:"Pen Tool",updateCb:g=>lr("penToolActive",g)});var u=F(l,2);Fi(u,{disabled:!0,get value(){return _(i).letterToolActive},name:"Letter Tool",updateCb:g=>lr("letterToolActive",g)});var d=F(u,2);Fi(d,{name:"Show Solution",get value(){return _(i).showSolution},updateCb:g=>lr("showSolution",g)});var f=F(d,2);P(o),Re("click",f,function(...g){var h;(h=SI)==null||h.apply(this,g)}),D(t,o),le()}var Rz=ce('<div class="setting-color-name svelte-1dih2k"> </div> <div class="picker-container svelte-1dih2k"><!></div>',1);function ms(t,e){let n=M(e,"name",8),r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0);var o=Rz(),s=ee(o),l=Y(s,!0);P(s);var u=F(s,2),d=Y(u);al(d,{get value(){return r()},get onChangeCb(){return i()}}),P(u),J(()=>rt(l,n())),D(t,o)}var Nz=ce('<div class="settings-tab-layout"><div class="grid svelte-169jaiw"><!> <!> <!> <!> <!></div></div>');function kz(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=A();L(()=>r(),()=>{I(i,r())}),Ce(),he();var o=Nz(),s=Y(o),l=Y(s);ms(l,{name:"Non-given value color:",get value(){return _(i).non_given_color},onChangeCb:h=>{lr("non_given_color",h)}});var u=F(l,2);ms(u,{name:"Seen cells color:",get value(){return _(i).seen_cells_color},onChangeCb:h=>{lr("seen_cells_color",h)}});var d=F(u,2);ms(d,{name:"Selection color:",get value(){return _(i).selection_color},onChangeCb:h=>{lr("selection_color",h)}});var f=F(d,2);ms(f,{name:"Conflicting cells color:",get value(){return _(i).conflict_cells_color},onChangeCb:h=>{lr("conflict_cells_color",h)}});var g=F(f,2);ms(g,{name:"Conflicting pencilmarks color:",get value(){return _(i).conflict_marks_color},onChangeCb:h=>{lr("conflict_marks_color",h)}}),P(s),P(o),D(t,o),le()}var Tz=ce('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function bn(t,e){let n=M(e,"description",8);var r=Tz(),i=Y(r),o=Y(i,!0);P(i);var s=F(i,2),l=Y(s);Ot(l,e,"default",{}),P(s),P(r),J(()=>rt(o,n())),D(t,r)}var Mz=ce('<div class="shortcut svelte-1cgt5u5"> </div>');function gn(t,e){let n=M(e,"shortcut",8);var r=Mz(),i=Y(r,!0);P(r),J(()=>rt(i,n())),D(t,r)}var $z=ce('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function qa(t,e){let n=M(e,"title",8);var r=$z(),i=Y(r),o=Y(i,!0);P(i);var s=F(i,2);Ot(s,e,"default",{}),P(r),J(()=>rt(o,n())),D(t,r)}var Uz=ce("<!> <!> <!> <!>",1),Gz=ce("<!> or <!>",1),Fz=ce("<!> <!> <!> <!> <!> <!> <!> <!>",1),zz=ce("<!> <!>",1),Pz=ce('<div class="settings-tab-layout"><!> <!> <!> <!></div>');function Bz(t){var e=Pz(),n=Y(e);qa(n,{title:"General",children:(s,l)=>{bn(s,{description:"Toggle Darkmode",children:(u,d)=>{gn(u,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var r=F(n,2);qa(r,{title:"Selection",children:(s,l)=>{var u=Uz(),d=ee(u);bn(d,{description:"Select cells",children:(m,E)=>{gn(m,{shortcut:"click/drag"})},$$slots:{default:!0}});var f=F(d,2);bn(f,{description:"Add to current selection",children:(m,E)=>{gn(m,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var g=F(f,2);bn(g,{description:"Remove from current selection",children:(m,E)=>{gn(m,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var h=F(g,2);bn(h,{description:"Add or remove from current selection",children:(m,E)=>{gn(m,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),D(s,u)},$$slots:{default:!0}});var i=F(r,2);qa(i,{title:"Change Tool",children:(s,l)=>{var u=Fz(),d=ee(u);bn(d,{description:"Cycle Tool",children:(y,x)=>{gn(y,{shortcut:"Space"})},$$slots:{default:!0}});var f=F(d,2);bn(f,{description:"Change to Digit Tool",children:(y,x)=>{gn(y,{shortcut:"Z"})},$$slots:{default:!0}});var g=F(f,2);bn(g,{description:"Change to Corner Pencilmark Tool",children:(y,x)=>{gn(y,{shortcut:"X"})},$$slots:{default:!0}});var h=F(g,2);bn(h,{description:"Change to Center Pencilmark Tool",children:(y,x)=>{gn(y,{shortcut:"C"})},$$slots:{default:!0}});var m=F(h,2);bn(m,{description:"Change to Highlights Tool",children:(y,x)=>{gn(y,{shortcut:"V"})},$$slots:{default:!0}});var E=F(m,2);bn(E,{description:"Quickshift To Corner Pencilmark Tool",children:(y,x)=>{gn(y,{shortcut:"Shift"})},$$slots:{default:!0}});var C=F(E,2);bn(C,{description:"Quickshift To Center Pencilmark Tool",children:(y,x)=>{gn(y,{shortcut:"Ctrl"})},$$slots:{default:!0}});var w=F(C,2);bn(w,{description:"Quickshift To Highlights Tool",children:(y,x)=>{var N=Gz(),T=ee(N);gn(T,{shortcut:"Shift + Ctrl"});var G=F(T,2);gn(G,{shortcut:"Alt"}),D(y,N)},$$slots:{default:!0}}),D(s,u)},$$slots:{default:!0}});var o=F(i,2);qa(o,{title:"Undo/Redo",children:(s,l)=>{var u=zz(),d=ee(u);bn(d,{description:"Undo",children:(g,h)=>{gn(g,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var f=F(d,2);bn(f,{description:"Redo",children:(g,h)=>{gn(g,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),D(s,u)},$$slots:{default:!0}}),P(e),D(t,e)}var Hz=ce('<div class="settings-content svelte-heebuf"><!></div>');function tm(t,e){let n=M(e,"showModal",12,!1);const r=[{label:"Display",component:kz},{label:"Gameplay",component:Sz},{label:"Shortcuts",component:Bz},{label:"Other",component:Lz}];yi(t,{title:"Settings",get showModal(){return n()},set showModal(i){n(i)},children:(i,o)=>{var s=Hz(),l=Y(s);Jp(l,{tabs:r}),P(s),D(i,s)},$$slots:{default:!0},$$legacy:!0})}var Wz=ce("<!> <!>",1);function Yz(t){let e=A(!1);function n(){I(e,!0)}var r=Wz(),i=ee(r);Xs(i,{title:"Settings",clickCb:n,children:(s,l)=>{em(s)},$$slots:{default:!0}});var o=F(i,2);tm(o,{get showModal(){return _(e)},set showModal(s){I(e,s)},$$legacy:!0}),D(t,r)}var jz=ce('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function Kz(t){var e=jz(),n=Y(e);cz(n);var r=F(n,2);wz(r);var i=F(r,2);tz(i,{});var o=F(i,2);j8(o);var s=F(o,2);Yz(s),P(e),D(t,e)}var Vz=ce('<button class="entry-panel-button svelte-yhctjt" title="Set current cell values as the puzzle solution">Set Solution</button>');function qz(t,e){ae(e,!1);let n=A(!1);function r(){const i=Ne(hn),o=[];for(let s=0;s<i.nRows;s++){const l=[];for(let u=0;u<i.nCols;u++){const d=i.getCell(s,u);if(!d)continue;const f=d.value;l.push(f)}o.push(l)}p_(o)}he(),Jl(t,{get isOpen(){return _(n)},set isOpen(i){I(n,i)},$$slots:{"panel-header":(i,o)=>{Ql(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return _(n)},set isOpen(s){I(n,s)},$$legacy:!0})},"panel-content":(i,o)=>{var s=Vz();Re("click",s,r),D(i,s)}},$$legacy:!0}),le()}function Xz(t){const e=t.elementsDict;if(!!e.get(v.SUDOKU_RULES_DO_NOT_APPLY))return"";const r=t.grid;let i="";i+=`
% row constraints (digits do not repeat on rows)
`;const o=r.nRows;for(let u=0;u<o;u++){const d=r.getRow(u),f=Ct(d),g=mo(f);i+=g}i+=`
% col constraints (digits do not repeat on cols)
`;const s=r.nCols;for(let u=0;u<s;u++){const d=r.getCol(u),f=Ct(d),g=mo(f);i+=g}if(!!!e.get(v.CHAOS_CONSTRUCTION)){i+=`
% region constraints (digits do not repeat on regions)
`;const u=r.getUsedRegions();for(const d of u){const f=r.getRegion(d),g=Ct(f),h=mo(g);i+=h}}return i}function Zz(t){const e=t.elementsDict,n=v.HEXED_SUDOKU,r=e.get(n);if(!r||r.disabled)return"";let i=`
% ${n}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}function Qz(){return`
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

function array[int] of tuple(int, int): orth_adjacent_idxs_in_bounds(
    int: r,
    int: c,
    array[int, int] of var int: grid
) = let {
    array[int] of tuple(int, int): idxs = orth_adjacent_idxs(r,c);
} in
    [idx | idx in idxs where in_bounds_2d(idx.1, idx.2, grid)];

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

function var int: conditional_skyscrapers_f(
    array[int] of var int: arr,
    array[int] of var $$T: labels,
    var $$T: label
) = let {
    constraint assert(index_set(arr) = index_set(labels), "Arrays must have same index set")
} in (
    sum(i in index_set(arr)) (
        bool2int(
            labels[i] == label
            /\\ forall(j in index_set(arr)
                where j < i /\\ labels[j] == label
            )(arr[j] < arr[i])
        )
    )
);

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
    
predicate different_corner_diagonal_sums_p(array[int] of var int: arr) =
    assert(length(arr) == 4, "Array must have length 4.") /\\
    arr[1] + arr[4] != arr[2] + arr[3];

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

predicate distinct_renbans_p(
    array[int] of var int: arr1,
    array[int] of var int: arr2
) = let {
    set of int: idxs1 = index_set(arr1);
    set of int: idxs2 = index_set(arr2);
} in (
    if length(idxs1) == length(idxs2) then
        exists(ele1 in arr1)(not member(arr2, ele1)) \\/
        exists(ele2 in arr2)(not member(arr1, ele2))
    else
        true
    endif
);

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

% sum of the first x elements
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

predicate chaos_construction_x_sum_region_borders_p(
    array[int] of var int: cell_vars,
    array[int] of var int: regions,
    var int: val
) = let {
    var int: border_count = count_transitions_f(regions)
} in (
    assert(index_sets_agree(cell_vars, regions), "cell_vars and regions must have the same indexes") /\\
    x_sum_f(cell_vars, border_count) == val
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
    /\\ forall (r in rows, c in cols where c > min(cols)) (
        (shading[r,c] = 1 /\\ shading[r, c - 1] = 1) -> abs(grid[r,c] - grid[r, c-1]) >= 5
    ) /\\
    % adjacent shaded cells must be german whispers (vertical adjacent)
    forall (r in rows, c in cols where r > min(rows)) (
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

predicate yin_yang_run_of_n_renban_p(
    array[int] of var int: arr, 
    array[int] of var 0..1: labels,
    int: n
) = let {
    set of int: idxs = index_set(arr);
    int: l = length(idxs);
    int: min_i = min(idxs);
    int: a = n - 1;
} in (
    % run of n cells with the same label are all different
    if n <= l then
        forall(i in idxs where i > min_i+(n-2))(
            all_equal(labels[i-(n-1)..i]) -> all_different(arr[i-(n-1)..i])
        )
    else
        true
    endif

    % each cell pair in a run of n cells with the same label sandwiched between two cells
    % with different labels must have a a distance <= n - 1
    /\\ if n <= l - 2 then
        forall(i in idxs where i > min_i + a /\\ i < max(idxs))(
            (labels[i-n] != labels[i-n+1]) /\\ all_equal(labels[i-a..i]) /\\ (labels[i] != labels[i+1]) -> forall(j in i-a..i, k in i-a..i where k>j)(
                abs(arr[j] - arr[k]) <= a
            )
        )
    else
        true
    endif

    % start of the line
    /\\ if (all_equal(labels[min_i..min_i+n-1]) /\\ labels[min_i+n] != labels[min_i+n-1]) then
        forall(j in min_i..min_i+n-1, k in min_i..min_i+n-1 where k>j)(
            abs(arr[j] - arr[k]) <= a
        )
    else
        true
    endif
);

predicate yin_yang_californian_mountaint_snake_p(
    array[int] of var int: arr, 
    array[int] of var 0..1: labels
) = let {
    set of int: idxs = index_set(arr);
    int: n = length(idxs);
    int: min_i = min(idxs);
    array[idxs] of var int: regions_arr;
    constraint regions_arr[min_i] = 1;
    constraint forall(i in idxs where i > min_i)(
        if labels[i] == labels[i-1] then
        regions_arr[i] == regions_arr[i-1]
        else
        regions_arr[i] == regions_arr[i-1]+1
    endif
    );
    
    array[idxs] of var int: regions_sizes;
    constraint forall(i in idxs)(
        regions_sizes[i] = count_eq(regions_arr, regions_arr[i])
    );
    
} in (
    % Along the red line, each run of cells with the same yin yang shading contains a non-repeating 
    % set of consecutive digits in any order. Along the red line, digits in each pair of adjacent cells 
    % with different yin yang shading must differ by at least 5.
    % Ensure arrays have same size
    assert(index_sets_agree(arr, labels), "arr and labels must have the same indexes")
    % digits in each pair of adjacent cells with different yin yang shading must differ by at least 5.
    /\\ forall(i in idxs where i > min_i)(
        (labels[i-1] != labels[i]) -> abs(arr[i] - arr[i-1]) >= 5
    )

    % each run of cells with the same yin yang shading contains
    % a non-repeating set of consecutive digits in any order

    % two adjacent cells with the same label are different
    % yin_yang_run_of_n_renban_p is redundant but reduces solving time significantly
    /\\ yin_yang_run_of_n_renban_p(arr, labels, 2)
    % three adjacent cells with the same label are different
    /\\ yin_yang_run_of_n_renban_p(arr, labels, 3)
    % four adjacent cells with the same label are different
    /\\ yin_yang_run_of_n_renban_p(arr, labels, 4)
    % five adjacent cells with the same label are different
    /\\ yin_yang_run_of_n_renban_p(arr, labels, 5)

    % cells in the same region have different values
    /\\ forall(i1 in idxs, i2 in idxs where i2 > i1)(
        regions_arr[i1] == regions_arr[i2] -> arr[i1] != arr[i2]
    )
    /\\ forall(i1 in idxs, i2 in idxs where i2 > i1)(
        regions_arr[i1] == regions_arr[i2] -> abs(arr[i1] - arr[i2]) < regions_sizes[i1]
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

predicate chaos_construction_no_2x2_belongs_to_one_region_p(
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in forall(r in rows where r < max(rows), c in cols where c < max(cols))(
    not all_equal([regions[r,c], regions[r,c+1], regions[r+1,c], regions[r+1,c+1]])
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

predicate chaos_construction_neighbour_cells_same_region_count_p(
	var int: cell_val,
    var int: cell_region,
	array[int] of var int: neighbour_regions
) = let {
    set of int: idxs1 = index_set(neighbour_regions);
} in (
    cell_val = count(neighbour_regions, cell_region)
);

predicate chaos_construction_regions_count(
    array[int] of var int: region_vars,
    var int: count
) = (
    count == count_unique_values(region_vars) /\\
    (if count == 1 then
        all_equal(region_vars)
    else
        true
    endif)
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

predicate loop_parity_p(
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
                different_parity_p(grid[i,j], grid[i,j+1]))
        ) /\\
        % Down neighbor
        (i < max(index_set_1of2(grid)) ->
            (labels[i,j] = 1 /\\ labels[i+1,j] = 1 ->
                different_parity_p(grid[i,j], grid[i+1,j]))
        )
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

predicate internal_loop_skyscrapers_p(
    array[int] of var int: cell_vars,
    array[int] of var int: loop_vars,
    var int: value
) = (
    value == conditional_skyscrapers_f(cell_vars, loop_vars, 1)
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
    /\\ direction_vars[tip_var] = circle_var
    % pointed cell is on the loop
    /\\ direction_loop_vars[tip_var] = 1
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
    % rotationally symmetric
    forall(r in rows, c in cols)(
        (regions[r, c] = 1 \\/ regions[r, c] = 2) /\\
        regions[r, c] = regions[max_r-r+min_r, max_c-c+min_c]
    )
    /\\ connected_region(regions, 1) 
    /\\ connected_region(regions, 2)
    % fix galaxy numbering
    /\\ regions[min_r, min_c] = 1
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

predicate no_repeats_in_galaxy_p(
    array[int, int] of var int: grid,
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    assert(index_sets_agree(grid, regions), "grid and regions must have the same indexes.")
    /\\ forall(r in rows, c in cols)(
        forall(r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
            regions[r,c] == regions[r2,c2] /\\ regions[r,c] != 0 /\\ regions[r2,c2] != 0 -> grid[r,c] != grid[r2,c2]
        )
    )
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

predicate all_galaxy_centers_given_p(
    array[int, int] of var int: regions,
    int: max_galaxy_id
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions); 
} in (
    forall(r in rows, c in cols)(
        regions[r,c] <= max_galaxy_id
    )
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

predicate one_star_per_galaxy_p(
    array[int, int] of var int: regions,
    array[int, int] of var int: star_battle,    
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    assert(index_sets_agree(regions, star_battle), "regions and star_battle must have the same indexes.")
    /\\ forall(r in rows, c in cols, r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
        star_battle[r,c] == 1 /\\ star_battle[r2,c2] == 1 /\\ regions[r,c] != 0 /\\ regions[r2,c2] != 0 -> regions[r,c] != regions[r2,c2]
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

predicate global_entropy_p(
    array[int,int] of var int: grid
) = let {
    int: rows = max(index_set_1of2(grid));
    int: cols = max(index_set_2of2(grid));
    set of int: low_group = {1,2,3};
    set of int: middle_group = {4,5,6};
    set of int: high_group = {7,8,9};
} in (
    forall(r in 1..rows-1, c in 1..cols-1) (
        let {
            % Extract the 2x2 box starting at position (r,c)
            array[1..4] of var int: box = [grid[r,c], grid[r,c+1], grid[r+1,c], grid[r+1,c+1]];
            
            % Check if each group is present in the box
            var bool: has_low = exists(i in 1..4)(box[i] in low_group);
            var bool: has_middle = exists(i in 1..4)(box[i] in middle_group);
            var bool: has_high = exists(i in 1..4)(box[i] in high_group);
        } in
        has_low /\\ has_middle /\\ has_high
    )
);

predicate not_all_odd_in_2x2_square_p(
    array[int,int] of var int: grid
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    int: max_r = max(rows);
    int: max_c = max(cols);
} in (
    forall(r in rows, c in cols where r<max_r /\\ c<max_c) (
        % For each 2x2 square starting at position (r,c),
        % at least one cell must be even (i.e., not all can be odd)
        not (grid[r,c] mod 2 = 1 /\\ 
            grid[r,c+1] mod 2 = 1 /\\ 
            grid[r+1,c] mod 2 = 1 /\\ 
            grid[r+1,c+1] mod 2 = 1)
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

predicate consecutive_close_neighbors_p(
    array[int,int] of var int: grid
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    forall(r in rows, c in cols) (
        % For each cell, at least one orthogonal neighbor must be consecutive
        exists(dr in {-1, 0, 1}, dc in {-1, 0, 1} where (abs(dr) + abs(dc) = 1) /\\ in_bounds_2d(r+dr,c+dc,grid)) (
            abs(grid[r + dr, c + dc] - grid[r, c]) = 1
        )
    )
);

predicate yin_yang_chaos_construction_same_shading_p(
    array[int,int] of var int: regions,
    array[int,int] of var 0..1: shading
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in (
    assert(index_sets_agree(regions, shading), "regions and shading must have the same indexes.") /\\
    forall(r1 in rows, c1 in cols, r2 in rows, c2 in cols where is_after(r1,c1,r2,c2)) (
        (regions[r1,c1] = regions[r2,c2] -> shading[r1,c1] = shading[r2,c2])
    )
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

`+`predicate byok_no_repeats_in_regions(
    array[int, int] of var int: grid,
    array[int, int] of var int: byok_grid,
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, byok_grid), "grid and byok_grid must have the same indexes")
    /\\ forall(r in rows, c in cols, r2 in rows, c2 in cols where is_after(r,c,r2,c2))(
        byok_grid[r,c] != 0 /\\ byok_grid[r2,c2] != 0 /\\ byok_grid[r,c] == byok_grid[r2,c2] -> grid[r,c] != grid[r2,c2]
    )
);

predicate byok_not_cage_cell_p(
    var int: byok_var
) = (byok_var == 0);

predicate byok_cage_cell_size_p(
    array[int, int] of var int: byok_grid,
    var int: cell_var,
    var int: byok_var,
) = (
    count_eq(array1d(byok_grid), byok_var, cell_var)
    % connected region
    /\\ connected_region(byok_grid, byok_var)
);

function array[1..4] of var int: polyomino_bounding_box_f(
    array[int, int] of var int: byokc_grid, 
    var int: byok_var
) = let {
    % Get grid dimensions
    set of int: rows = index_set_1of2(byokc_grid);
    set of int: cols = index_set_2of2(byokc_grid);
    
    % Handle special cases explicitly
    var bool: is_empty = not exists(r in rows, c in cols)(byokc_grid[r, c] = byok_var);
  
    % Find bounding box of the polyomino
    var int: min_row = if is_empty then 0 else 
                       min([r | r in rows, c in cols where byokc_grid[r, c] = byok_var]) 
                   endif;
    var int: max_row = if is_empty then 0 else 
                       max([r | r in rows, c in cols where byokc_grid[r, c] = byok_var]) 
                   endif;
    var int: min_col = if is_empty then 0 else 
                       min([c | r in rows, c in cols where byokc_grid[r, c] = byok_var]) 
                   endif;
    var int: max_col = if is_empty then 0 else 
                       max([c | r in rows, c in cols where byokc_grid[r, c] = byok_var]) 
                   endif;
} in (
    [min_row, max_row, min_col, max_col]
);

`+`predicate shaded_boundaries_two_regions_p(
    array[int, int] of var 0..1: shaded_boundaries_grid,
    array[int, int] of var bool: shaded_boundaries_horizontal,
    array[int, int] of var bool: shaded_boundaries_vertical
) = let {
    set of int: rows = index_set_1of2(shaded_boundaries_grid);
    set of int: cols = index_set_2of2(shaded_boundaries_grid);

    int: width = max(cols) - min(cols) + 1;
    int: height = max(rows) - min(rows) + 1;
  
    % Calculate number of edges
    int: num_edges = (width-1)*height + (height-1)*width;    

    % Create nodes array (flattened grid)
    array[1..width*height] of var bool: ns0 = 
        [shaded_boundaries_grid[r,c] = 0 | r in rows, c in cols];
    array[1..width*height] of var bool: ns1 = 
        [shaded_boundaries_grid[r,c] = 1 | r in rows, c in cols];

    array[1..num_edges] of int: from = grid_to_graph_from_edges(shaded_boundaries_grid);
    array[1..num_edges] of int: to = grid_to_graph_to_edges(shaded_boundaries_grid);

    array[1..num_edges] of var bool: flat_edges = array1d(shaded_boundaries_horizontal) ++ 
        [shaded_boundaries_vertical[r,c] | c in index_set_2of2(shaded_boundaries_vertical), r in index_set_1of2(shaded_boundaries_vertical)];

    % edges
    array[1..num_edges] of var bool: es0 = [((not flat_edges[edge_id]) /\\ ns0[from[edge_id]] /\\ ns0[to[edge_id]]) | edge_id in 1..num_edges];
    array[1..num_edges] of var bool: es1 = [((not flat_edges[edge_id]) /\\ ns1[from[edge_id]] /\\ ns1[to[edge_id]]) | edge_id in 1..num_edges];
} in (
    exists(val in array1d(shaded_boundaries_grid))(val == 0)
    /\\ exists(val in array1d(shaded_boundaries_grid))(val == 1)
    /\\ connected(from, to, ns0, es0)
    /\\ connected(from, to, ns1, es1)
    /\\ connected_region(shaded_boundaries_grid, 0)
    /\\ connected_region(shaded_boundaries_grid, 1)
);

predicate shaded_boundaries_adjacent_sum_is_even_boundary_region_p(
    array[int, int] of var int: grid,
    array[int, int] of var 0..1: shaded_boundaries_grid
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
} in (
    assert(index_sets_agree(grid, shaded_boundaries_grid), "grid and shaded_boundaries_grid must have the same indexes")
    
    % if adjacent sum is odd they must be in the same region
    % (horiz adjacent)
    /\\ forall (r in rows, c in cols where c > min(cols)) (
        (grid[r,c] + grid[r, c - 1]) mod 2 == 1 -> shaded_boundaries_grid[r,c] == shaded_boundaries_grid[r,c-1]
    )
    % (vertical adjacent)
    /\\ forall (r in rows, c in cols where r > min(rows)) (
        (grid[r,c] + grid[r-1, c]) mod 2 == 1 -> shaded_boundaries_grid[r,c] == shaded_boundaries_grid[r-1,c]
    )
    
    % if there's a region boundary then it must be even
    % (horiz adjacent)
    /\\ forall (r in rows, c in cols where c > min(cols)) (
        shaded_boundaries_grid[r,c] != shaded_boundaries_grid[r,c-1] -> (grid[r,c] + grid[r, c - 1]) mod 2 == 0
    )
    % (vertical adjacent)
    /\\ forall (r in rows, c in cols where r > min(rows)) (
        shaded_boundaries_grid[r,c] != shaded_boundaries_grid[r-1,c] -> (grid[r,c] + grid[r-1, c]) mod 2 == 0
    )
);

predicate shaded_boundaries_adjacent_sum_is_even_boundary_vertical_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: shaded_boundaries_vertical
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    set of int: b_rows = index_set_1of2(shaded_boundaries_vertical);
    set of int: b_cols = index_set_2of2(shaded_boundaries_vertical);
} in (
    assert(cols == b_cols, "index_set_2of2(grid) and index_set_2of2(shaded_boundaries_vertical) must agree.")
    /\\ forall(c in cols, r in rows where r > min(rows))(
        ((grid[r,c] + grid[r-1, c]) mod 2 == 0 -> shaded_boundaries_vertical[r-1, c] = 1)
        /\\ ((grid[r,c] + grid[r-1, c]) mod 2 == 1 -> shaded_boundaries_vertical[r-1, c] = 0)
    )
);

predicate shaded_boundaries_adjacent_sum_is_even_boundary_horizontal_p(
    array[int, int] of var int: grid,
    array[int, int] of var bool: shaded_boundaries_horizontal
) = let {
    set of int: rows = index_set_1of2(grid);
    set of int: cols = index_set_2of2(grid);
    set of int: b_rows = index_set_1of2(shaded_boundaries_horizontal);
    set of int: b_cols = index_set_2of2(shaded_boundaries_horizontal);
} in (
    assert(rows == b_rows, "index_set_1of2(grid) and index_set_1of2(shaded_boundaries_horizontal) must agree.")
    /\\ forall(r in rows, c in cols where c > min(cols))(
        ((grid[r,c] + grid[r, c-1]) mod 2 == 0 -> shaded_boundaries_horizontal[r, c-1] = 1) 
        /\\ ((grid[r,c] + grid[r, c-1]) mod 2 == 1 -> shaded_boundaries_horizontal[r, c-1] = 0)
    )
);

`}function Jz(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${Se(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function eP(t,e){let n="";const i=t.puzzle.elementsDict;for(const[o,s]of i.entries()){if(s.disabled)continue;const u=e[o].solver_func;if(!u)continue;let d=u(t,s);d=Zt(d,`${o}`),n+=d}return n}function nm(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new hO(t),[o,s]=[n.nRows,n.nCols],l=o*s;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(Qz());let d=`1..${Math.max(o,s)}`;const f=t.elementsDict,g=!!f.get(v.FILLOMINO),h=!!f.get(v.HEXED_SUDOKU);return g?d=`1..${l}`:h?r=[...At.range(1,16)]:r&&(d="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${s-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${d};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),pO(i,n),i.add(Jz(t)),i.add(Xz(t)),i.add(Zz(t)),i.add(eP(i,Bt)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Xh=encodeURIComponent("4.4.2");let Dr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const zi=[];let Bu;function Os(){if(!Bu){const e=`importScripts(${JSON.stringify(Dr.workerURL)});`;Bu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Bu);t.postMessage({wasmURL:Dr.wasmURL?Dr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Xh}`,Dr.workerURL).toString(),dataURL:Dr.dataURL?Dr.dataURL.toString():new URL(`./minizinc.data?version=${Xh}`,Dr.workerURL).toString()}),zi.push({worker:t,runCount:0})}function rm(){for(;zi.length<Dr.numWorkers;)Os()}async function tP(t){if(Dr={...Dr,...t},zi.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");rm(),await Promise.race(zi.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class O_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new O_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){rm();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:s,runCount:l}=zi.pop();return s.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:s,runCount:l+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:s}=this._run(["--model-check-only"],i.options),l=[];o.onmessage=u=>{switch(u.data.type){case"error":l.push(u.data);break;case"exit":s<10?zi.push({worker:o,runCount:s}):(o.terminate(),Os()),n(l)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:s}=this._run(["--model-interface-only"],i.options),l=[];let u=null;o.onmessage=d=>{switch(d.data.type){case"error":l.push(d.data);break;case"interface":u=d.data;break;case"exit":s<10?zi.push({worker:o,runCount:s}):(o.terminate(),Os()),d.data.code===0?n(u):r(l)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:s}=this._run(o,n.options,[i]);Os();let l={},u=!1,d=null;return s.onmessage=f=>{if(l[f.data.type])for(const g of l[f.data.type])g(f.data);switch(f.data.type){case"exit":s.terminate(),u=!0,l={};break;case"error":d||(d=f.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,s.terminate(),l.exit)for(const f of l.exit)f({type:"exit",code:null});l={}}},on(f,g){l[f]?l[f].add(g):l[f]=new Set([g])},off(f,g){l[f]&&l[f].delete(g)},then(f,g){const h=m=>{if(m.code===0)f(m.outputFiles[i]);else{const E=d?{message:d.message,...m}:m;if(!g)throw E;g(E)}};l.exit?l.exit.add(h):l.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Os();let o=null,s={},l=!1,u=null,d={},f="UNKNOWN";return i.onmessage=g=>{if(s[g.data.type])for(const h of s[g.data.type])h(g.data);switch(g.data.type){case"exit":i.terminate(),l=!0,s={};break;case"error":o||(o=g.data);break;case"statistics":d={...d,...g.data.statistics};break;case"solution":u=g.data,f="SATISFIED";break;case"status":f=g.data.status}},{isRunning:()=>!l,cancel(){if(!l){if(l=!0,i.terminate(),s.exit)for(const g of s.exit)g({type:"exit",code:null});s={}}},on(g,h){s[g]?s[g].add(h):s[g]=new Set([h])},off(g,h){s[g]&&s[g].delete(h)},then(g,h){const m=E=>{if(E.code===0)g({status:f,solution:u,statistics:d});else{const C=o?{message:o.message,...E}:E;if(!h)throw C;h(C)}};s.exit?s.exit.add(m):s.exit=new Set([m])}}}}var nP=ce('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function rP(t,e){ae(e,!1);const n=We(),r=()=>ge($r,"$puzzleMetaStore",n);let i=M(e,"showModal",12,!1);function o(g,h,m){var E=document.createElement("a"),C=new Blob([g],{type:m});E.href=URL.createObjectURL(C),E.download=h,E.click(),URL.revokeObjectURL(E.href)}function s(){const g=Ne(Vs);return nm(g).model_str}function l(){const g=s();navigator.clipboard.writeText(g)}function u(){const g=s(),h=bh(g);navigator.clipboard.writeText(h)}function d(){const g=gl(r()),h=s();o(h,`${g}.mzn`,"text/plain")}function f(){const g=gl(r()),h=s(),m=bh(h);o(m,`${g}.mzn`,"text/plain")}he(),yi(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,h)=>{var m=nP(),E=Y(m),C=F(E,2),w=F(C,2),y=F(w,2),x=F(y,2),N=F(Y(x));S(N,"href","https://play.minizinc.dev/"),Vr(),P(x),P(m),Re("click",E,l),Re("click",C,u),Re("click",w,d),Re("click",y,f),D(g,m)},$$slots:{default:!0},$$legacy:!0}),le()}function Qo(t,e,n){const r=[],i=[];for(let s=0;s<t.length;s++){const l=t[s];for(let u=0;u<l.length;u++){const d=e.getCell(s,u);if(!d)continue;const f=Number(l[u]),g=n.get(f);g!==void 0&&(r.push(d),i.push([g]))}}const o=tc(r,i);xo(o)}function iP(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const E=[];i.push(E),s(h,m,t[h][m])}function s(h,m,E){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==E||(r[h][m]=!0,i[i.length-1].push([h,m]),s(h+1,m,E),s(h-1,m,E),s(h,m+1,E),s(h,m-1,E))}const l=Array(i.length).fill(0).map(()=>new Set);function u(h,m){for(const[E,C]of h)for(const[w,y]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=E+w,N=C+y;if(m.some(([T,G])=>T===x&&G===N))return!0}return!1}for(let h=0;h<i.length;h++)for(let m=h+1;m<i.length;m++)u(i[h],i[m])&&(l[h].add(m),l[m].add(h));const d=[1,4,7,9],f=new Array(i.length).fill(0);function g(h,m){for(const E of l[h])if(f[E]===m)return!1;return!0}for(let h=0;h<i.length;h++)for(const m of d)if(g(h,m)){f[h]=m;break}for(let h=0;h<i.length;h++)for(const[m,E]of i[h])o[m][E]=f[h];return o}function oP(t,e){const n=e.grid,i=!!e.elementsDict.get(v.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const o=t.board;if(o===void 0)return;const s=[],l=[];for(let d=0;d<o.length;d++){const f=o[d];for(let g=0;g<f.length;g++){const h=n.getCell(d,g);if(!h||h.given||i&&!h.given&&h.value===null)continue;const m=f[g];s.push(h),l.push(m)}}const u=Zp(s,l);xo(u)}function sP(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading",$.SHADED_BOUNDARIES_REGIONS],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Qo(o,e,r);return}}}function aP(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Qo(o,e,r);return}}}function lP(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let s=0;s<n.length;s++){const l=n[s];for(let u=0;u<l.length;u++){const d=e.getCell(s,u);if(!d)continue;r.push(d);const f=l[u];i.push([f])}}const o=tc(r,i);xo(o)}function cP(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Qo(n,e,new Map([[0,4],[1,7],[2,9]]))}function uP(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Qo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function dP(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Qo(n,e,new Map([[1,7],[2,4],[3,9]]))}function _P(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Qo(n,e,new Map([[1,7],[2,8]]))}function fP(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,s]=[e.nRows,e.nCols],l=3,u=[];for(let f=0;f<i.length;f++){const g=i[f];for(let h=0;h<g.length-1;h++){const m=e.getCell(f,h),E=e.getCell(f,h+1);if(!m||!E)continue;const C=g[h],w=g[h+1];if(C===w)continue;const y={colorId:l,p1:{r:f,c:h+1},p2:{r:f+1,c:h+1}};u.push(y)}}for(let f=0;f<s;f++)for(let g=0;g<o-1;g++){const h=e.getCell(g,f),m=e.getCell(g+1,f);if(!h||!m)continue;const E=i[g][f],C=i[g+1][f];if(E===C)continue;const w={colorId:l,p1:{r:g+1,c:f},p2:{r:g+1,c:f+1}};u.push(w)}const d=yo(u);Cr(d);return}}function gP(t){if(t===void 0)return;const e=4,n=[],r=$.SHADED_BOUNDARIES_HORIZONTAL,i=t[r];if(i)for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){if(!u[d])continue;const g={colorId:e,p1:{r:l,c:d+1},p2:{r:l+1,c:d+1}};n.push(g)}}const o=$.SHADED_BOUNDARIES_VERTICAL,s=t[o];if(s)for(let l=0;l<s.length;l++){const u=s[l];for(let d=0;d<u.length;d++){if(!u[d])continue;const g={colorId:e,p1:{r:l+1,c:d},p2:{r:l+1,c:d+1}};n.push(g)}}if(n.length){const l=yo(n);Cr(l)}}function hP(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const f=e.getCell(l,d);if(f)for(const g of e.getOrthogonallyAdjacentCells(f)){if(!g||!(g.r>f.r||g.c>f.c))continue;const h=i[f.r][f.c],m=i[g.r][g.c];if(!(h===1&&m===1))continue;const E={colorId:4,p1:{r:f.r+.5,c:f.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(E)}}}const s=yo(o);Cr(s);return}}function vP(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions",$.BYOKC_GRID];for(const r of n){const i=t[r];if(i===void 0)continue;const o=iP(i);if(!o)return;const s=[],l=[];for(let d=0;d<o.length;d++){const f=o[d];for(let g=0;g<f.length;g++){const h=e.getCell(d,g);if(!h)continue;s.push(h);const m=f[g];l.push([m])}}const u=tc(s,l);xo(u);return}}function pP(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let l=0;l<i.length;l++){const u=i[l];for(let d=0;d<u.length;d++){const f=e.getCell(l,d);if(!f)continue;const g=i[f.r][f.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:f.r+.5,c:f.c+.5};o.push(m)}}const s=lG(o);Cr(s);return}}function mP(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let l=0;l<n.length;l++){if(!n[l])continue;const d=r[l],[f,g]=d,[h,m]=[Math.floor((f-1)/i.nCols),(f-1)%i.nCols],[E,C]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!Gs({r:h,c:m},{r:E,c:C}))continue;const x={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:E+.5,c:C+.5}};o.push(x)}const s=yo(o);Cr(s)}function EP(t,e){const n=e.puzzle,r=n.grid;Cr(g_()),oP(t,n),lP(t,r),fP(t,r),cP(t,r),uP(t,r),hP(t,r),aP(t,r),vP(t,r),sP(t,r),pP(t,r),dP(t,r),mP(t,e),_P(t,r),gP(t)}function bP(){const{subscribe:t,set:e}=Lt(0),n=100;let r=Date.now(),i,o=0,s=!1;return{subscribe:t,start:()=>{s||(s=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{s&&(s=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{s=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:s,elapsedTime:o})}}var CP=ce('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function wP(t,e){ae(e,!1);const n=We(),r=()=>ge(Vs,"$puzzleStore",n),i=()=>ge(hn,"$gridStore",n),o=()=>ge(y,"$timer",n),s=A(),l=A(),u=A(),d=A();let f=A(!0),g=A(!1),h=A(null),m=A(100),E=A("100"),C=A(null),w=A("IDLE");const y=bP();function x(H){return H===null?"":String(H)}function N(H){const re=Math.floor(H/6e4),te=Math.floor(H%6e4/1e3),oe=Math.floor(H%1e3/100),se=te.toString().padStart(2,"0");return`${re}:${se}.${oe}`}function T(){I(g,!0)}function G(H){const re=parseInt(H);typeof re=="number"&&re>=1&&I(m,re)}async function K(){I(C,0),I(w,"SOLVING...");const H=new O_;Yp();const re=nm(_(s));H.addFile("test.mzn",re.model_str),y.reset(),y.start(),I(h,H.solve({options:{solver:"chuffed","num-solutions":_(m)}})),_(h).on("solution",te=>{const oe=te.output.json;te.type==="solution"&&_(C)!==null&&I(C,_(C)+1),EP(oe,re)}),_(h).on("error",te=>{I(u,"Solve"),I(w,"ERROR"),console.log(te.message),y.stop(),_(h)&&_(h).cancel()}),_(h).on("warning",te=>{I(w,"WARNING"),console.log(te.message)}),_(h).then(te=>{I(w,te.status),I(u,"Solve"),y.stop()})}function U(){_(h)===null||!_(h).isRunning()?K():_(h)!==null&&_(h).isRunning()&&(I(w,"IDLE"),I(u,"Solve"),y.stop(),_(h).cancel())}L(()=>r(),()=>{I(s,r())}),L(()=>i(),()=>{I(l,i())}),L(()=>{},()=>{I(u,"Solve")}),L(()=>o(),()=>{I(d,o())}),L(()=>_(h),()=>{_(h)&&(_(h)!==null&&_(h).isRunning()?I(u,"Stop"):I(u,"Solve"))}),Ce(),he(),Jl(t,{get isOpen(){return _(f)},set isOpen(H){I(f,H)},$$slots:{"panel-header":(H,re)=>{Ql(H,{slot:"panel-header",title:"Solver",get isOpen(){return _(f)},set isOpen(te){I(f,te)},$$legacy:!0})},"panel-content":(H,re)=>{var te=CP(),oe=ee(te),se=F(oe,2);rP(se,{get showModal(){return _(g)},set showModal(_t){I(g,_t)},$$legacy:!0});var we=F(se,2),Z=Y(we,!0);P(we);var ye=F(we,2),be=Y(ye,!0);P(ye);var Ie=F(ye,2),Oe=Y(Ie);cn(Oe),S(Oe,"min",1),S(Oe,"max",200),S(Oe,"step",1),P(Ie);var Ae=F(Ie,2),De=Y(Ae,!0);J(()=>rt(De,`Solution Count: ${x(_(C))}`)),P(Ae);var Ge=F(Ae,2),ot=Y(Ge,!0);J(()=>rt(ot,`Elapsed Time: ${N(_(d))}`)),P(Ge);var lt=F(Ge,2),ct=Y(lt,!0);P(lt),J(()=>{rt(Z,_(u)),rt(be,`Max. Solutions: ${_(m)}`),rt(ct,`Status: ${_(w)}`)}),Re("click",oe,T),Re("click",we,U),cr(Oe,()=>_(E),_t=>I(E,_t)),Re("input",Oe,()=>G(_(E))),D(H,te)}},$$legacy:!0}),le()}var yP=ce('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!></div></div>');function IP(t){var e=yP(),n=Y(e);Kz(n);var r=F(n,2),i=Y(r);wP(i,{});var o=F(i,2);_8(o,{elementHandlers:Bt});var s=F(o,2);$8(s,{elementHandlers:Bt});var l=F(s,2);qz(l,{}),P(r),P(e),D(t,e)}var OP=ne('<path class="cursor svelte-zsq70u"></path>');function xP(t,e){ae(e,!1);const n=We(),r=()=>ge(on,"$toolStore",n),i=()=>ge(Pi,"$selectionStore",n),o=A(),s=A(),l=.25;function u(f){if(!f)return"";const[g,h]=[f.c,f.r];return`M${g},${h}L${g+l},${h}L${g},${h+l}Z`}L(()=>r(),()=>{I(o,jd(r()))}),L(()=>i(),()=>{I(s,u(i().lastCell))}),Ce(),he();var d=OP();J(()=>{S(d,"d",_(s)),S(d,"visibility",_(o)?"visible":"hidden")}),D(t,d),le()}var AP=ne('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function SP(t,e){ae(e,!1);let n=M(e,"gridShape",8);he();var r=AP(),i=Y(r);S(i,"x",0),S(i,"y",0),P(r),J(()=>{S(i,"width",n().nCols),S(i,"height",n().nRows)}),D(t,r),le()}var DP=ne('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),LP=ne('<g class="grid-lines"></g>');function RP(t,e){ae(e,!1);const n=We(),r=()=>ge(hn,"$gridStore",n),i=A();L(()=>r(),()=>{I(i,r().getAllCells())}),Ce(),he();var o=LP();Qe(o,5,()=>_(i),mt,(s,l)=>{var u=DP();S(u,"width",1),S(u,"height",1),J(()=>{S(u,"x",_(l).c),S(u,"y",_(l).r)}),D(s,u)}),P(o),D(t,o),le()}function NP(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function kP(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let s=e.get(r);s===void 0&&(s=new Set,e.set(r,s)),s.add(i)}for(const r of t){const i=NP(r),o=i.length;for(let s=0;s<o;s++){const l=i[s%o],u=i[(s+1)%o],d=JSON.stringify(l),f=JSON.stringify(u);n(d,f)}}return e}function TP(t,e=0,n=!1){const r=[],i=kP(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const s=Array.from(i.entries()).find(E=>E[1].size===1);if(s===void 0)throw new Error("No corner with single adjacency found");const[l,u]=s;let d=JSON.parse(l);const f=Array.from(u)[0];let g=JSON.parse(f),h=f;const m=[];do{const E=i.get(h);if(E===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const C=new Ue(d.c,d.r),w=new Ue(g.c,g.r);let y=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,N=null;for(const se of E){const we=JSON.parse(se),Z=new Ue(we.c,we.r),ye=w.subtract(C),be=Z.subtract(w),Ie=ye.perpDotProduct(be);y<Ie!=n&&(y=Ie,N=we,x=se)}if(n&&E.size>1&&o.add(h),N===null||x===null)throw new Error("Corner with no adjacencies found");E.delete(x),E.size<=0&&i.delete(h);const T=e*(g.c-d.c),G=e*(N.c-g.c),K=e*(d.r-g.r),U=e*(g.r-N.r),H=U+y*G,re=T+y*K,te=new Ue(g.c+H,g.r+re),oe=4;o.has(h)?(m.push(new Ue(te.x-oe*T,te.y-oe*G)),m.push(new Ue(te.x-oe*K,te.y-oe*U))):m.push(te),d=g,g=N,h=x}while(h!==f);r.push(m)}return r}function So(t,e=0,n=!1){return TP(t,e,n).map(o=>Jo(o,!0)).join("")}const MP=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5)];function $P(t,e,n=MP){if(e===1)return n;const r=[],i=n.length,o=0,s=360/e,l=t*s+o,u=(t+1)*s+o,d=l/(360/i),f=u/(360/i),g=Math.floor(d)%i,h=Math.ceil(d)%i,m=n[g].lerp(n[h],d%1),E=Math.floor(f)%i,C=Math.ceil(f)%i,w=n[E].lerp(n[C],f%1);r.push(m);for(let x=Math.ceil(d);x<=Math.floor(f);x++)r.push(n[x%i]);r.push(w);const y=new Ue(0,0);return r.push(y),r}function im(t,e,n=new Ue(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),s=r?t:t/o,l=[];for(let u=0;u<e;u++){const d=s*Math.cos(u/e*2*Math.PI+i*2*Math.PI),f=s*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Ue(d,f));l.push(g)}return l}function Jo(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function fi(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(f=>new Ue(f.x,f.y));if(r&&o.length>1){const f=o[o.length-1];for(let h=0;h<o.length-1;h++)if(f.equals(o[h])){o.push(o[h+1]);break}const g=o[0];for(let h=1;h<o.length;h++)if(g.equals(o[h])){o.unshift(o[h-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let f=o[1].subtract(o[0]);f=f.normalise(),f=f.scale(e),o[0]=o[0].add(f)}if(n){const f=o.length;let g=o[f-2].subtract(o[f-1]);g=g.normalise(),g=g.scale(n),o[f-1]=o[f-1].add(g)}}if(!i)return Jo(o);const s=o[0],l=["M",`${s.x},${s.y}`],u=o.length;for(let f=2;f<u;f++){const g=o[f-2],h=o[f-1],m=o[f];let E=g.subtract(h).normalise();E=E.scale(i),E=E.add(h);let C=m.subtract(h).normalise();C=C.scale(i),C=C.add(h),l.push(`L${E.x},${E.y} Q ${h.x},${h.y} ${C.x},${C.y}`)}const d=o[u-1];return l.push(`L${d.x},${d.y}`),l.join(" ")}function El(t,e={}){const n=nc(t);return fi(n,e)}function Vn(t){return new Ue(t.c+.5,t.r+.5)}function nc(t){return t.map(n=>Vn(n))}function UP(t){const e=Math.min(...t.map(s=>s.r)),n=Math.max(...t.map(s=>s.r)),r=Math.min(...t.map(s=>s.c)),i=Math.max(...t.map(s=>s.c));return{x:r,y:e,width:i+1,height:n+1}}const GP=[new Ue(-.5,-.5),new Ue(.5,-.5),new Ue(.5,.5),new Ue(-.5,.5),new Ue(0,-.5),new Ue(0,.5),new Ue(-.5,0),new Ue(.5,0)];function FP(t,e){const n=GP[t];return n.subtract(n.scale(e))}function om(t,e){const n=[new Ue(t.c-e,t.r-e),new Ue(t.c+e,t.r+e)],r=[new Ue(t.c-e,t.r+e),new Ue(t.c+e,t.r-e)];return[n,r].map(o=>Jo(o,!1)).join("")}const zP=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function rc(t,e="none"){return zP.get(t)||e}function PP(t,e,n){let r=[];function o(l,u){return l.map(d=>d.rotate(u*Math.PI/180))}let s=[];return t==="max"?s=[new Ue(-.12,-.32),new Ue(0,-.4),new Ue(.12,-.32)]:s=[new Ue(-.12,-.4),new Ue(0,-.32),new Ue(.12,-.4)],r=[s,o(s,90),o(s,180),o(s,270)],r=r.map(l=>l.map(u=>{const d=new Ue(n+.5,e+.5);return u.add(d)})),r}function x_(t,e){const n=[new Ue(-t,0),new Ue(0,0),new Ue(0,t)],i={[Te.NE]:0,[Te.E]:Math.PI/4,[Te.SE]:Math.PI/2,[Te.S]:3*Math.PI/4,[Te.SW]:Math.PI,[Te.W]:5*Math.PI/4,[Te.NW]:3*Math.PI/2,[Te.N]:7*Math.PI/4}[e];return n.map(s=>s.rotate(i))}function BP(t,e){const r=Fs(e),i=new Ue(r.c,r.r).normalise().scale(.3),o=Vn(t),s=o.subtract(i),l=o.add(i);return[s,l]}function HP(t,e){const r=BP(t,e);let i=x_(.2,e);i=i.map(u=>u.add(r[1]));const o=fi(r),s=fi(i);return o+s}function WP(t,e){const r=Fs(e),i=new Ue(r.c,r.r),s=Vn(t).add(i.scale(.4));return[s.subtract(i.normalise().scale(.2)),s]}function Hu(t,e){const r=WP(t,e);let i=x_(.1,e);i=i.map(u=>u.add(r[1]));const o=fi(r),s=fi(i);return o+s}var YP=ne('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),jP=ne('<g class="regions-border"></g>');function KP(t,e){ae(e,!1);const n=We(),r=()=>ge(Yn,"$cellsStore",n),i=A(),o=A();function s(u,d){return u.filter(h=>h.region===d).map(h=>({r:h.r,c:h.c}))}L(()=>r(),()=>{I(i,r())}),L(()=>_(i),()=>{I(o,new Set(_(i).map(u=>u.region).filter(u=>u!==null)))}),Ce(),he();var l=jP();Qe(l,5,()=>_(o),mt,(u,d)=>{var f=YP();J(()=>S(f,"d",So(s(_(i),_(d)),0,!1))),J(()=>S(f,"id",`region-${_(d)??""}`)),D(u,f)}),P(l),D(t,l),le()}var VP=ne('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse"><rect></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-5l2s5m" mask="url(#selection-mask)"></path></g>');function qP(t,e){ae(e,!1);const n=We(),r=()=>ge(Pi,"$selectionStore",n),i=()=>ge(on,"$toolStore",n),o=()=>ge(Ln,"$settingsStore",n),s=A(),l=A(),u=A(),d=A(),f=A();let g=M(e,"gridShape",8);const h=.1,m=.05,E="#080808",C="#b2b2b2";L(()=>r(),()=>{I(s,r().cells)}),L(()=>_(s),()=>{I(l,So(_(s),0))}),L(()=>_(s),()=>{I(u,So(_(s),h))}),L(()=>i(),()=>{I(d,jd(i()))}),L(()=>o(),()=>{I(f,o().selection_color)}),Ce(),he();var w=VP(),y=Y(w),x=Y(y);S(x,"stdDeviation",m),Vr(),P(y);var N=F(y);S(N,"x",0),S(N,"y",0);var T=Y(N);S(T,"x",0),S(T,"y",0),S(T,"fill",C);var G=F(T);S(G,"fill",E),P(N);var K=F(N);P(w),J(()=>{S(w,"visibility",_(d)?"visible":"hidden"),S(N,"width",g().nCols),S(N,"height",g().nRows),S(T,"width",g().nCols),S(T,"height",g().nRows),S(G,"d",_(u)),S(K,"d",_(l)),S(K,"fill",_(f))}),D(t,w),le()}var XP=ne('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function ZP(t,e){ae(e,!1);const n=A(),r=A();let i=M(e,"grid",8);L(()=>V(i()),()=>{I(n,i().getAllCells().map(l=>({r:l.r,c:l.c})))}),L(()=>_(n),()=>{I(r,So(_(n),0))}),Ce(),he();var o=XP(),s=Y(o);P(o),J(()=>S(s,"d",_(r))),D(t,o),le()}function QP(t,e){const n=t.getRow(e.r);return new Set(n)}function JP(t,e){const n=t.getCol(e.c);return new Set(n)}function e4(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function t4(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function n4(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function r4(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function i4(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function o4(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function s4(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),s=o.length,l=[o[0],o[s-1]],u=o.slice(1,s-1),d=l.findIndex(g=>g===e);if(d!==-1){if(r=new Set([...r,...u]),u.length>0){const g=l.filter((h,m)=>m!==d);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...l])),r}function a4(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function l4(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const l=o.filter(u=>u!==e);return l.length&&(r=new Set([...r,...l])),r}function c4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(!!e.get(v.ANTIKNIGHT)&&(r=r.union(t4(t,i))),!!e.get(v.ANTIKING)&&(r=r.union(n4(t,i))),!!e.get(v.DISJOINT_GROUPS)&&(r=r.union(r4(t,i))),!!e.get(v.NEGATIVE_DIAGONAL)&&(r=r.union(o4(t,i))),!!e.get(v.POSITIVE_DIAGONAL)&&(r=r.union(i4(t,i)))),r}function Wu(t,e,n,r,i){if(e.tool_id!==r||!e.constraints)return i;for(const o of Object.values(e.constraints)){const s=l4(t,n,o);i=new Set([...i,...s])}return i}function u4(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;for(const o of e.values()){const s=o.tool_id;if(o.constraints){if(s===v.BETWEEN_LINE)for(const l of Object.values(o.constraints)){const u=s4(t,i,l);r=new Set([...r,...u])}else if(s===v.RENBAN_LINE)for(const l of Object.values(o.constraints)){const u=a4(t,i,l);r=new Set([...r,...u])}r=Wu(t,o,i,v.KILLER_CAGE,r),r=Wu(t,o,i,v.PARITY_BALANCE_CAGE,r),r=Wu(t,o,i,v.SPOTLIGHT_CAGE,r)}}return r}function sm(t,e){let n=new Set;const r=t.grid,i=t.elementsDict;!i.get(v.SUDOKU_RULES_DO_NOT_APPLY)&&(n=new Set([...QP(r,e),...JP(r,e),...e4(r,e)])),n=new Set([...n,...c4(r,i,e)]),n=new Set([...n,...u4(r,i,e)]);const s=r.getCell(e.r,e.c);return s&&n.delete(s),n}function d4(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(sm(t,o));const r=n.reduce((o,s)=>o.intersection(s)),i=[];for(const o of r)i.push(o.toCoords());return i}var _4=ne('<tspan class="svelte-fb40hv"> </tspan>'),f4=ne('<g class="center-marks-group"><text class="center-mark svelte-fb40hv" dominant-baseline="central"></text></g>');function g4(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=A(),o=A();let s=M(e,"cell",8),l=M(e,"seen_values",8);const u=.25;function d(m){return l().find(C=>C===m)!==void 0}L(()=>V(s()),()=>{I(i,Vn({r:s().r,c:s().c}))}),L(()=>r(),()=>{I(o,r().non_given_color)}),Ce(),he();var f=Ee(),g=ee(f);{var h=m=>{var E=f4(),C=Y(E);S(C,"font-size",u),Qe(C,5,()=>s().centerMarks,mt,(w,y)=>{var x=_4();const N=gt(()=>d(_(y)));J(()=>Et(x,"conflict",_(N)));var T=Y(x,!0);P(x),J(()=>rt(T,_(y))),D(w,x)}),P(C),P(E),J(()=>{S(C,"x",_(i).x),S(C,"y",_(i).y),S(C,"textLength",s().centerMarks.length>5?"0.9":void 0),S(C,"fill",_(o))}),D(m,E)};Q(g,m=>{s().centerMarks.length&&m(h)})}D(t,f),le()}var h4=ne('<text class="corner-mark svelte-r25lu9" dominant-baseline="central"> </text>'),v4=ne('<g class="corner-marks-group"></g>');function p4(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=A(),o=A();let s=M(e,"cell",8),l=M(e,"seen_values",8);const u=.25,d=.28;function f(C){const w=C.cornerMarks.slice(0,8),y=Vn({r:C.r,c:C.c});return w.map((x,N)=>{const T=FP(N,d);return{pos:y.add(T),value:x,idx:N}})}function g(C){return l().find(y=>y===C)!==void 0}L(()=>r(),()=>{I(i,r().conflict_marks_color)}),L(()=>r(),()=>{I(o,r().non_given_color)}),Ce(),he();var h=Ee(),m=ee(h);{var E=C=>{var w=v4();Qe(w,5,()=>f(s()),mt,(y,x)=>{let N=()=>_(x).pos,T=()=>_(x).value;var G=h4();S(G,"font-size",u),J(()=>S(G,"fill",g(T())?_(i):_(o)));var K=Y(G,!0);P(G),J(()=>{S(G,"x",N().x),S(G,"y",N().y),rt(K,T())}),D(y,G)}),P(w),D(C,w)};Q(m,C=>{s().cornerMarks.length&&C(E)})}D(t,h),le()}var m4=ne('<text class="cell-region svelte-129e584" dominant-baseline="central"> </text>');function E4(t,e){ae(e,!1);const n=A();let r=M(e,"cell",8);const i=.8,o=400;L(()=>V(r()),()=>{I(n,Vn({r:r().r,c:r().c}))}),Ce(),he();var s=Ee(),l=ee(s);{var u=d=>{var f=m4();S(f,"font-size",i),S(f,"font-weight",o);var g=Y(f,!0);P(f),J(()=>{S(f,"x",_(n).x),S(f,"y",_(n).y),rt(g,r().region)}),D(d,f)};Q(l,d=>{r().region!==null&&d(u)})}D(t,s),le()}var b4=ne('<text class="cell-value svelte-1p0g0b7" dominant-baseline="central"> </text>'),C4=ne("<!><!>",1),w4=ne('<g class="cell-values cell-digit-outline svelte-1p0g0b7"><!></g>');function y4(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=()=>ge(Vs,"$puzzleStore",n),o=()=>ge(wi,"$enableFogMaskStore",n),s=()=>ge(on,"$toolStore",n),l=A(),u=A(),d=A(),f=A(),g=A(),h=A(),m=A(),E=A(),C=A();let w=M(e,"cell",8);const y=.8,x=400;function N(U,H){if(!U)return[];let te=[...sm(_(g),H.toCoords())].map(oe=>oe.value).filter(oe=>oe!==null);return te=[...new Set(te)],te}L(()=>V(w()),()=>{I(l,w().value)}),L(()=>V(w()),()=>{I(u,w().given)}),L(()=>V(w()),()=>{I(d,Vn({r:w().r,c:w().c}))}),L(()=>r(),()=>{I(f,r().highlightPencilmarkConflicts)}),L(()=>i(),()=>{I(g,i())}),L(()=>r(),()=>{I(h,r().showSolution)}),L(()=>(_(u),r()),()=>{I(m,_(u)?"var(--cell-given-color)":r().non_given_color)}),L(()=>(_(f),V(w())),()=>{I(E,N(_(f),w()))}),L(()=>(V(w()),o()),()=>{I(C,w().given&&o())}),Ce(),he();var T=Ee(),G=ee(T);{var K=U=>{var H=w4(),re=Y(H);{var te=se=>{E4(se,{get cell(){return w()}})},oe=se=>{var we=Ee(),Z=ee(we);{var ye=Ie=>{var Oe=b4();S(Oe,"font-size",y),S(Oe,"font-weight",x);var Ae=Y(Oe,!0);P(Oe),J(()=>{S(Oe,"x",_(d).x),S(Oe,"y",_(d).y),S(Oe,"fill",_(m)),Et(Oe,"given",_(u)),rt(Ae,_(l))}),D(Ie,Oe)},be=Ie=>{var Oe=C4(),Ae=ee(Oe);p4(Ae,{get cell(){return w()},get seen_values(){return _(E)}});var De=F(Ae);g4(De,{get cell(){return w()},get seen_values(){return _(E)}}),D(Ie,Oe)};Q(Z,Ie=>{_(l)!==null?Ie(ye):Ie(be,!1)},!0)}D(se,we)};Q(re,se=>{s()===v.REGIONS?se(te):se(oe,!1)})}P(H),J(()=>Et(H,"hide-given",_(C))),D(U,H)};Q(G,U=>{_(h)||U(K)})}D(t,T),le()}var I4=ne("<path></path>"),O4=ne('<g class="highlights-group svelte-vxfrnh"></g>');function x4(t,e){ae(e,!1);const n=We(),r=()=>ge(on,"$toolStore",n);let i=M(e,"cell",8);function o(d){const f=Vn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let C=$P(E,g);C=C.map(y=>y.add(f));const w=Jo(C,!0);return{colorId:m,d:w}})}he();var s=Ee(),l=ee(s);{var u=d=>{var f=Ee(),g=ee(f);{var h=m=>{var E=O4();Qe(E,5,()=>o(i()),mt,(C,w)=>{let y=()=>_(w).colorId,x=()=>_(w).d;var N=I4();J(()=>{ks(N,`highlight-wedge color-${y()??""} svelte-vxfrnh`),S(N,"d",x())}),D(C,N)}),P(E),D(m,E)};Q(g,m=>{i().highlights.length&&m(h)})}D(d,f)};Q(l,d=>{r()!==v.REGIONS&&d(u)})}D(t,s),le()}var A4=ne('<path class="cell-marker" fill="none"></path>'),S4=ne('<circle fill="none" opacity="0.9"></circle>');function D4(t,e){ae(e,!1);const n=A(),r=A();let i=M(e,"marker",8);const o=.3,s=.08;L(()=>V(i()),()=>{I(n,om(i(),o))}),L(()=>V(i()),()=>{I(r,rc(i().colorId,"black"))}),Ce(),he();var l=Ee(),u=ee(l);{var d=g=>{var h=A4();S(h,"stroke-width",s),J(()=>{S(h,"d",_(n)),S(h,"stroke",_(r))}),D(g,h)},f=g=>{var h=S4();S(h,"r",o),S(h,"stroke-width",s),J(()=>{ks(h,`cell-marker color-${i().colorId??""}`),S(h,"cx",i().c),S(h,"cy",i().r),S(h,"stroke",_(r))}),D(g,h)};Q(u,g=>{i().marker==="X"?g(d):g(f,!1)})}D(t,l),le()}var L4=ne('<g class="cell-markers"></g>');function R4(t,e){let n=M(e,"markers",8);var r=L4();Qe(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{D4(i,{get marker(){return _(o)}})}),P(r),D(t,r)}var N4=ne('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function k4(t,e){ae(e,!1);const n=A();let r=M(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(f=>[new Ue(f.p1.c,f.p1.r),new Ue(f.p2.c,f.p2.r)]).flat()}function s(u){const d=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?rc(d,"black"):"darkred"}L(()=>V(r()),()=>{I(n,Jo(o(r().draftLine)))}),Ce(),he();var l=N4();J(()=>S(l,"stroke",s(r()))),S(l,"stroke-width",i),S(l,"opacity",.5),J(()=>S(l,"d",_(n))),D(t,l),le()}var T4=ne('<path fill="none" opacity="0.9"></path>');function M4(t,e){ae(e,!1);const n=A(),r=A();let i=M(e,"marker",8);const o=.08,s=.04;L(()=>V(i()),()=>{I(n,om(i(),o))}),L(()=>V(i()),()=>{I(r,rc(i().colorId,"black"))}),Ce(),he();var l=T4();S(l,"stroke-width",s),J(()=>{S(l,"d",_(n)),ks(l,`edge-marker color-${i().colorId??""}`),S(l,"stroke",_(r))}),D(t,l),le()}var $4=ne('<g class="edge-markers"></g>');function U4(t,e){let n=M(e,"markers",8);var r=$4();Qe(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{M4(i,{get marker(){return _(o)}})}),P(r),D(t,r)}var G4=ne('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),F4=ne('<g class="line-markers svelte-yha19m"></g>');function z4(t,e){ae(e,!1);let n=M(e,"lineMarkers",8);const r=.09;function i(l){return JSON.stringify(l)}function o(l){return rc(l,"black")}he();var s=F4();Qe(s,5,n,l=>i(l),(l,u)=>{var d=G4();S(d,"stroke-width",r),J(()=>S(d,"stroke",o(_(u).colorId))),J(()=>{S(d,"x1",_(u).p1.c),S(d,"y1",_(u).p1.r),S(d,"x2",_(u).p2.c),S(d,"y2",_(u).p2.r),ks(d,`line-marker color-${_(u).colorId??""} svelte-yha19m`)}),D(l,d)}),P(s),D(t,s),le()}var P4=ne('<g class="pen-tool"><!><!><!><!></g>');function B4(t,e){ae(e,!1);const n=We(),r=()=>ge(vl,"$penToolStore",n),i=A();L(()=>r(),()=>{I(i,{draftLine:r().draftLine,mode:r().mode})}),Ce(),he();var o=P4(),s=Y(o);z4(s,{get lineMarkers(){return r().lineMarkers}});var l=F(s);U4(l,{get markers(){return r().edgeMarkers}});var u=F(l);R4(u,{get markers(){return r().cellMarkers}});var d=F(u);k4(d,{get draftLineMarker(){return _(i)}}),P(o),D(t,o),le()}var H4=ne("<path></path>");function Kr(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A(),u=A(),d=A();let f=M(e,"cells",8),g=M(e,"shape",8,Kd);const h="square";L(()=>V(g()),()=>{I(n,g().inset??.06)}),L(()=>V(g()),()=>{I(r,g().stroke??"black")}),L(()=>V(g()),()=>{I(i,g().strokeWidth??.03)}),L(()=>V(g()),()=>{I(o,g().strokeDasharray??.08)}),L(()=>V(g()),()=>{I(s,g().fill??"none")}),L(()=>V(g()),()=>{I(l,g().connectDiag??!0)}),L(()=>(V(f()),_(n),_(l)),()=>{I(u,So(f(),_(n),_(l)))}),L(()=>V(g()),()=>{I(d,g().strokeLinejoin??"miter")}),Ce(),he();var m=H4();S(m,"stroke-linecap",h),J(()=>{S(m,"d",_(u)),S(m,"stroke",_(r)),S(m,"stroke-width",_(i)),S(m,"fill",_(s)),S(m,"stroke-dasharray",_(o)),S(m,"stroke-linejoin",_(d))}),D(t,m),le()}var W4=ne('<g class="seen-cells-layer svelte-dqmhr7"><!></g>');function Y4(t,e){ae(e,!1);const n=We(),r=()=>ge(Pi,"$selectionStore",n),i=()=>ge(Ln,"$settingsStore",n),o=()=>ge(Vs,"$puzzleStore",n),s=()=>ge(on,"$toolStore",n),l=()=>ge(wi,"$enableFogMaskStore",n),u=A(),d=A(),f=A(),g=A(),h=A(),m=A(),E=A();function C(N,T){return N.length?d4(_(f),N):[]}L(()=>r(),()=>{I(u,r().cells)}),L(()=>i(),()=>{I(d,i().highlightCellsSeenBySelection)}),L(()=>o(),()=>{I(f,o())}),L(()=>s(),()=>{I(g,jd(s()))}),L(()=>i(),()=>{I(h,i().seen_cells_color)}),L(()=>_(h),()=>{I(m,{type:W.CAGE,strokeWidth:0,stroke:"none",fill:_(h),inset:.15,connectDiag:!1})}),L(()=>l(),()=>{I(E,l())}),Ce(),he();var w=Ee(),y=ee(w);{var x=N=>{var T=W4(),G=Y(T),K=gt(()=>C(_(u),_(f)));Kr(G,{get cells(){return _(K)},get shape(){return _(m)}}),P(T),J(()=>S(T,"mask",_(E)?"url(#fog-mask-fog)":null)),D(N,T)};Q(y,N=>{_(d)&&_(g)&&N(x)})}D(t,w),le()}function ic(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...qv(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function j4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...ic(r))}return new Set(e)}function K4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...ic(r))}return new Set(e)}function V4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...ic(r))}return new Set(e)}function q4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(s=>s.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function X4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(s=>s.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function Z4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(s=>s.value!==null).filter(s=>s.value!==null&&r.value!==null&&Math.abs(r.value-s.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function Q4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=ic(i);o.length&&e.push(...o)}return new Set(e)}function J4(t,e){let n=new Set;if(!e.get(v.SUDOKU_RULES_DO_NOT_APPLY)){const u=new Set([...j4(t),...K4(t),...V4(t)]);n=n.union(u)}return!!e.get(v.ANTIKNIGHT)&&(n=n.union(q4(t))),!!e.get(v.ANTIKING)&&(n=n.union(X4(t))),!!e.get(v.NONCONSECUTIVE)&&(n=n.union(Z4(t))),!!e.get(v.DISJOINT_GROUPS)&&(n=n.union(Q4(t))),n}function e6(t,e){return[...new Set([...J4(t,e)])]}var t6=ne('<rect class="conflict svelte-d9qu4j"></rect>'),n6=ne('<g class="conflicts-layer"></g>');function r6(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=()=>ge(hn,"$gridStore",n),o=()=>ge(at,"$elementsDictStore",n),s=()=>ge(Yn,"$cellsStore",n),l=()=>ge(wi,"$enableFogMaskStore",n),u=A(),d=A(),f=A(),g=A(),h=A(),m=A();W.CAGE;function E(x){return e6(_(d),_(f)).map(G=>G.toCoords())}L(()=>r(),()=>{I(u,r().checkConflicts)}),L(()=>i(),()=>{I(d,i())}),L(()=>o(),()=>{I(f,o())}),L(()=>s(),()=>{I(g,s())}),L(()=>l(),()=>{I(h,l())}),L(()=>r(),()=>{I(m,r().conflict_cells_color)}),Ce(),he();var C=Ee(),w=ee(C);{var y=x=>{var N=n6();Qe(N,5,()=>E(_(g)),mt,(T,G)=>{var K=t6();S(K,"width",1),S(K,"height",1),J(()=>{S(K,"x",_(G).c),S(K,"y",_(G).r),S(K,"fill",_(m))}),D(T,K)}),P(N),J(()=>S(N,"mask",_(h)?"url(#fog-mask-fog)":null)),D(x,N)};Q(w,x=>{_(u)&&x(y)})}D(t,C),le()}var i6=ne('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function o6(t,e){ae(e,!1);const n=A();let r=M(e,"r",8),i=M(e,"c",8),o=M(e,"val",8);const s=.8,l=400;L(()=>(V(r()),V(i())),()=>{I(n,Vn({r:r(),c:i()}))}),Ce(),he();var u=Ee(),d=ee(u);{var f=g=>{var h=i6();S(h,"font-size",s),S(h,"font-weight",l);var m=Y(h,!0);P(h),J(()=>{S(h,"x",_(n).x),S(h,"y",_(n).y),rt(m,o())}),D(g,h)};Q(d,g=>{o()!==null&&g(f)})}D(t,u),le()}var s6=ne('<g class="solution-layer"></g>');function a6(t,e){ae(e,!1);const n=We(),r=()=>ge(Zl,"$solutionStore",n),i=()=>ge(Ln,"$settingsStore",n),o=()=>ge(Xl,"$gameModeStore",n),s=A(),l=A(),u=A();L(()=>r(),()=>{I(s,r())}),L(()=>i(),()=>{I(l,i().showSolution)}),L(()=>o(),()=>{I(u,o())}),Ce(),he();var d=Ee(),f=ee(d);{var g=h=>{var m=s6();Qe(m,5,()=>_(s),mt,(E,C,w)=>{var y=Ee(),x=ee(y);Qe(x,1,()=>_(C),mt,(N,T,G)=>{o6(N,{r:w,c:G,get val(){return _(T)}})}),D(E,y)}),P(m),D(h,m)};Q(f,h=>{_(s)&&_(l)&&_(u)===Do.SETTING&&h(g)})}D(t,d),le()}var l6=ne('<g class="element-group"></g>'),c6=ne("<g></g>");function Xa(t,e){ae(e,!1);const n=We(),r=()=>ge(wi,"$enableFogMaskStore",n),i=A();let o=M(e,"elements",8),s=M(e,"g_name",8),l=M(e,"Component",8);L(()=>r(),()=>{I(i,r())}),Ce();var u=c6();Qe(u,5,o,mt,(d,f)=>{var g=Ee(),h=ee(g);{var m=E=>{var C=l6();Qe(C,5,()=>Object.entries(_(f).constraints),w=>w[0],(w,y)=>{l()(w,{get tool(){return _(y)[1]},get c_id(){return _(y)[0]}})}),P(C),J(()=>S(C,"data-toolId",_(f).tool_id)),D(E,C)};Q(h,E=>{!_(f).disabled&&_(f).constraints&&E(m)})}D(d,g)}),P(u),J(()=>{ks(u,kI(s())),S(u,"mask",_(i)?"url(#fog-mask-fog)":null)}),D(t,u),le()}var u6=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),d6=ne('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),_6=ne('<g class="quadruple-text"><!></g>');function f6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A();let l=M(e,"cornerTool",8);const u=l().cells,d=new Ue(u[u.length-1].c,u[u.length-1].r),f=un(l().toolId,Bt)??ed;L(()=>V(l()),()=>{I(n,l().value)}),L(()=>V(l()),()=>{I(r,l().shape??f)}),L(()=>_(r),()=>{var E;I(i,((E=_(r))==null?void 0:E.fontSize)??.2)}),L(()=>_(r),()=>{var E;I(o,((E=_(r))==null?void 0:E.fontColor)??"black")}),L(()=>_(n),()=>{var E;I(s,_(n)?(E=_(n))==null?void 0:E.split(","):[])}),Ce(),he();var g=Ee(),h=ee(g);{var m=E=>{var C=_6(),w=Y(C);{var y=N=>{var T=u6(),G=Y(T,!0);J(()=>rt(G,_(s).join(" "))),P(T),J(()=>{S(T,"x",d.x),S(T,"y",d.y),S(T,"font-size",_(i)),S(T,"fill",_(o))}),D(N,T)},x=N=>{var T=d6(),G=ee(T),K=Y(G,!0);J(()=>rt(K,_(s).slice(0,2).join(" "))),P(G);var U=F(G),H=Y(U,!0);J(()=>rt(H,_(s).slice(2).join(" "))),P(U),J(()=>{S(G,"x",d.x),S(G,"y",d.y),S(G,"dy",-_(i)/2),S(G,"font-size",_(i)),S(G,"fill",_(o)),S(U,"x",d.x),S(U,"y",d.y),S(U,"dy",_(i)/2),S(U,"font-size",_(i)),S(U,"fill",_(o))}),D(N,T)};Q(w,N=>{_(s).length<=2?N(y):N(x,!1)})}P(C),J(()=>S(C,"data-count",_(s).length)),D(E,C)};Q(h,E=>{_(n)&&E(m)})}D(t,g),le()}var g6=ne("<circle></circle>");function br(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A();let u=M(e,"x",8),d=M(e,"y",8),f=M(e,"shape",8);L(()=>V(f()),()=>{I(n,f().r??.35)}),L(()=>V(f()),()=>{I(r,f().stroke??"black")}),L(()=>V(f()),()=>{var h;I(i,(h=f())==null?void 0:h.opacity)}),L(()=>V(f()),()=>{I(o,f().strokeWidth??.02)}),L(()=>V(f()),()=>{I(s,f().fill??"none")}),L(()=>V(f()),()=>{I(l,f().strokeDasharray??0)}),Ce(),he();var g=g6();J(()=>{S(g,"cx",u()),S(g,"cy",d()),S(g,"r",_(n)),S(g,"stroke",_(r)),S(g,"stroke-width",_(o)),S(g,"fill",_(s)),S(g,"opacity",_(i)),S(g,"stroke-dasharray",_(l))}),D(t,g),le()}var h6=ne("<ellipse></ellipse>");function v6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A(),u=A();let d=M(e,"cx",8),f=M(e,"cy",8),g=M(e,"shape",8);L(()=>V(g()),()=>{I(n,g().width??.5)}),L(()=>V(g()),()=>{I(r,g().height??.5)}),L(()=>V(g()),()=>{I(i,g().stroke??"black")}),L(()=>V(g()),()=>{var m;I(o,(m=g())==null?void 0:m.opacity)}),L(()=>V(g()),()=>{I(s,g().strokeWidth??.02)}),L(()=>V(g()),()=>{I(l,g().fill??"none")}),L(()=>V(g()),()=>{I(u,g().angle??0)}),Ce(),he();var h=h6();J(()=>{S(h,"cx",d()),S(h,"cy",f()),S(h,"rx",_(n)/2),S(h,"ry",_(r)/2),S(h,"stroke",_(i)),S(h,"stroke-width",_(s)),S(h,"fill",_(l)),S(h,"opacity",_(o)),S(h,"transform",`rotate(${_(u)}, ${d()}, ${f()} )`)}),D(t,h),le()}var p6=ne("<polygon></polygon>");function bl(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A(),u=A(),d=A();let f=M(e,"cx",8),g=M(e,"cy",8),h=M(e,"shape",8);L(()=>V(h()),()=>{I(n,h().n??3)}),L(()=>V(h()),()=>{I(r,h().r??.5)}),L(()=>(_(r),_(n),V(f()),V(g())),()=>{I(i,im(_(r),_(n),new Ue(f(),g())))}),L(()=>_(i),()=>{I(o,_(i).map(E=>`${E.x},${E.y}`).join(" "))}),L(()=>V(h()),()=>{I(s,h().stroke??"black")}),L(()=>V(h()),()=>{I(l,h().strokeWidth??.02)}),L(()=>V(h()),()=>{I(u,h().fill??"none")}),L(()=>V(h()),()=>{I(d,h().angle??0)}),Ce(),he();var m=p6();J(()=>{S(m,"points",_(o)),S(m,"stroke",_(s)),S(m,"stroke-width",_(l)),S(m,"fill",_(u)),S(m,"transform",`rotate(${_(d)}, ${f()}, ${g()} )`)}),D(t,m),le()}var m6=ne("<rect></rect>");function E6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A(),u=A();let d=M(e,"cx",8),f=M(e,"cy",8),g=M(e,"shape",8);L(()=>V(g()),()=>{I(n,g().width??.5)}),L(()=>V(g()),()=>{I(r,g().height??.5)}),L(()=>(V(d()),_(n)),()=>{I(i,d()-_(n)/2)}),L(()=>(V(f()),_(r)),()=>{I(o,f()-_(r)/2)}),L(()=>V(g()),()=>{I(s,g().stroke||"black")}),L(()=>V(g()),()=>{I(l,g().strokeWidth||.023)}),L(()=>V(g()),()=>{I(u,g().fill||"none")}),Ce(),he();var h=m6();J(()=>{S(h,"x",_(i)),S(h,"y",_(o)),S(h,"width",_(n)),S(h,"height",_(r)),S(h,"stroke",_(s)),S(h,"stroke-width",_(l)),S(h,"fill",_(u))}),D(t,h),le()}var b6=ne("<rect></rect>");function C6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A();let m=M(e,"cx",8),E=M(e,"cy",8),C=M(e,"shape",8);L(()=>V(C()),()=>{I(n,C().r??.5)}),L(()=>(V(m()),_(n)),()=>{I(r,m()-_(n))}),L(()=>(V(E()),_(n)),()=>{I(i,E()-_(n))}),L(()=>_(n),()=>{I(o,2*_(n))}),L(()=>_(n),()=>{I(s,2*_(n))}),L(()=>V(C()),()=>{I(l,C().stroke??"black")}),L(()=>V(C()),()=>{I(u,C().strokeWidth??.02)}),L(()=>V(C()),()=>{I(d,C().fill??"none")}),L(()=>V(C()),()=>{I(f,C().angle??0)}),L(()=>V(C()),()=>{I(g,C().strokeDasharray??0)}),L(()=>V(C()),()=>{I(h,C().opacity??1)}),Ce(),he();var w=b6();J(()=>{S(w,"x",_(r)),S(w,"y",_(i)),S(w,"width",_(o)),S(w,"height",_(s)),S(w,"stroke",_(l)),S(w,"stroke-width",_(u)),S(w,"fill",_(d)),S(w,"transform",`rotate(${_(f)}, ${m()}, ${E()})`),S(w,"stroke-dasharray",_(g)),S(w,"opacity",_(h))}),D(t,w),le()}function Nr(t,e){ae(e,!1);const n=A();let r=M(e,"cx",8),i=M(e,"cy",8),o=M(e,"shape",8);L(()=>(V(o()),W),()=>{var f;I(n,((f=o())==null?void 0:f.type)??W.CIRCLE)}),Ce(),he();var s=Ee(),l=ee(s);{var u=f=>{br(f,{get x(){return r()},get y(){return i()},get shape(){return o()}})},d=f=>{var g=Ee(),h=ee(g);{var m=C=>{v6(C,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=C=>{var w=Ee(),y=ee(w);{var x=T=>{C6(T,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},N=T=>{var G=Ee(),K=ee(G);{var U=re=>{E6(re,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},H=re=>{var te=Ee(),oe=ee(te);{var se=Z=>{bl(Z,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},we=Z=>{br(Z,{get x(){return r()},get y(){return i()},get shape(){return o()}})};Q(oe,Z=>{_(n)===W.POLYGON?Z(se):Z(we,!1)},!0)}D(re,te)};Q(K,re=>{_(n)===W.RECTANGLE?re(U):re(H,!1)},!0)}D(T,G)};Q(y,T=>{_(n)===W.SQUARE?T(x):T(N,!1)},!0)}D(C,w)};Q(h,C=>{_(n)===W.ELLIPSE?C(m):C(E,!1)},!0)}D(f,g)};Q(l,f=>{_(n)===W.CIRCLE?f(u):f(d,!1)})}D(t,s),le()}var w6=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),y6=ne('<g class="corner-tool"><!><!><!></g>');function am(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function C(N,T){return T===W.TEXT_ONLY?N.value?N.value:"-":N.value??""}L(()=>r(),()=>{var N;I(i,(N=r())==null?void 0:N.id)}),L(()=>(V(m()),ed),()=>{I(o,un(m().toolId,Bt)??ed)}),L(()=>(V(m()),_(o)),()=>{I(s,m().shape??_(o))}),L(()=>(_(s),W),()=>{var N;I(l,((N=_(s))==null?void 0:N.type)??W.CIRCLE)}),L(()=>_(s),()=>{var N;I(u,((N=_(s))==null?void 0:N.fontSize)??.2)}),L(()=>_(s),()=>{var N;I(d,((N=_(s))==null?void 0:N.fontColor)??"black")}),L(()=>_(s),()=>{I(f,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),L(()=>V(m()),()=>{I(g,m().cells)}),L(()=>_(g),()=>{I(h,new Ue(_(g)[_(g).length-1].c,_(g)[_(g).length-1].r))}),Ce(),he();var w=Ee(),y=ee(w);{var x=N=>{var T=y6(),G=Y(T);{var K=oe=>{Nr(oe,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(f)}})};Q(G,oe=>{E()&&E()===_(i)&&oe(K)})}var U=F(G);Nr(U,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(s)}});var H=F(U);{var re=oe=>{f6(oe,{get cornerTool(){return m()}})},te=oe=>{var se=w6(),we=Y(se,!0);J(()=>rt(we,C(m(),_(l)))),P(se),J(()=>{S(se,"x",_(h).x),S(se,"y",_(h).y),S(se,"font-size",_(u)),S(se,"fill",_(d))}),D(oe,se)};Q(H,oe=>{m().toolId===v.QUADRUPLE?oe(re):oe(te,!1)})}P(T),D(N,T)};Q(y,N=>{_(g).length===4&&N(x)})}D(t,w),le()}var I6=ne('<g class="corner-tool"><!></g>');function O6(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=I6(),d=Y(u);am(d,{get tool(){return n()},get c_id(){return r()}}),P(u),J(()=>S(u,"id",`c-${r()}`)),D(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}D(t,i)}var x6=ne('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function Ns(t,e){ae(e,!1);const n=A();let r=M(e,"value",8,""),i=M(e,"fontSize",8,.2),o=M(e,"x",8),s=M(e,"y",8),l=M(e,"position",8,"TL"),u=M(e,"fontColor",8,"var(--text-primary-color)"),d=M(e,"fontWeight",8,400),f=A(null),g=A(null);function h(x,N,T){const G=["TL","TR"].includes(T),U=["TL","BL"].includes(T)?x+.05:x,H=N;return new Ue(U,H)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function E(x){return["TL","TR"].includes(x)?"text-before-edge":""}TI(()=>{if(!_(f)||!_(g))return;const x=_(f).getBBox();_(g).setAttribute("x",String(x.x)),_(g).setAttribute("y",String(x.y+x.height*.1)),_(g).setAttribute("width",String(x.width)),_(g).setAttribute("height",String(x.height*.8))}),L(()=>(V(o()),V(s()),V(l())),()=>{I(n,h(o(),s(),l()))}),Ce(),he();var C=Ee(),w=ee(C);{var y=x=>{var N=x6(),T=ee(N);qr(T,U=>I(g,U),()=>_(g));var G=F(T);J(()=>S(G,"text-anchor",m(l()))),J(()=>S(G,"dominant-baseline",E(l())));var K=Y(G,!0);P(G),qr(G,U=>I(f,U),()=>_(f)),J(()=>{var U,H;S(G,"x",(U=_(n))==null?void 0:U.x),S(G,"y",(H=_(n))==null?void 0:H.y),S(G,"font-size",i()),S(G,"fill",u()),S(G,"font-weight",d()),rt(K,r())}),D(x,N)};Q(w,x=>{r().length&&x(y)})}D(t,C),le()}var A6=ne('<text text-anchor="middle" dominant-baseline="central"> </text>'),S6=ne("<!><!><!>",1);function lm(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function C(U,H){return H===W.TEXT_ONLY?U.value?U.value:"-":U.value??""}L(()=>r(),()=>{var U;I(i,(U=r())==null?void 0:U.id)}),L(()=>(V(m()),ll),()=>{I(o,un(m().toolId,Bt)??ll)}),L(()=>(V(m()),_(o)),()=>{I(s,m().shape??_(o))}),L(()=>_(s),()=>{I(l,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),L(()=>V(m()),()=>{I(u,m().cell)}),L(()=>(_(s),W),()=>{var U;I(d,((U=_(s))==null?void 0:U.type)||W.CIRCLE)}),L(()=>_(s),()=>{var U;I(f,((U=_(s))==null?void 0:U.fontSize)??.2)}),L(()=>_(s),()=>{var U;I(g,((U=_(s))==null?void 0:U.fontColor)??"black")}),L(()=>_(u),()=>{I(h,_(u).r%1===.5&&_(u).c%1===.5)}),Ce(),he();var w=S6(),y=ee(w);{var x=U=>{Nr(U,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(l)}})};Q(y,U=>{E()===_(i)&&U(x)})}var N=F(y);Nr(N,{get cx(){return _(u).c},get cy(){return _(u).r},get shape(){return _(s)}});var T=F(N);{var G=U=>{var H=gt(()=>C(m(),_(d))),re=gt(()=>Math.floor(_(u).c)),te=gt(()=>Math.floor(_(u).r));Ns(U,{get value(){return _(H)},get x(){return _(re)},get y(){return _(te)},position:"TL",get fontColor(){return _(g)}})},K=U=>{var H=A6(),re=Y(H,!0);J(()=>rt(re,C(m(),_(d)))),P(H),J(()=>{S(H,"x",_(u).c),S(H,"y",_(u).r),S(H,"font-size",_(f)),S(H,"fill",_(g))}),D(U,H)};Q(T,U=>{_(h)?U(G):U(K,!1)})}D(t,w),le()}var D6=ne('<g class="center-corner-or-edge-tool"><!></g>');function L6(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=D6(),d=Y(u);lm(d,{get tool(){return n()},get c_id(){return r()}}),P(u),J(()=>S(u,"id",`c-${r()}`)),D(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}D(t,i)}var R6=ne('<rect stroke="none" fill="#5373ea80"></rect>'),N6=ne('<rect stroke="none" fill="#5373ea66"></rect>'),k6=ne('<path fill="none" stroke-linecap="round"></path><!>',1),T6=ne('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function Zh(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=()=>ge(hn,"$gridStore",n),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A(),m=A(),E=A(),C=A();let w=M(e,"tool",8),y=M(e,"c_id",8,void 0);const x=.03;function N(Z){return Z.value&&Z.value.length?Z.value:"-"}function T(Z,ye){const be=Fs(ye),Ie=new Ue(be.c,be.r).scale(.5),Oe=Vn(Z),Ae=Oe.add(Ie.scale(.5)),De=Oe.add(Ie.scale(.8));return[Ae,De]}function G(Z,ye){const Ie=T(Z,ye);let Oe=x_(.08,ye);Oe=Oe.map(ot=>ot.add(Ie[1]));const Ae=fi(Ie),De=fi(Oe);return Ae+De}L(()=>r(),()=>{var Z;I(o,(Z=r())==null?void 0:Z.id)}),L(()=>V(w()),()=>{I(s,w().cell)}),L(()=>_(s),()=>{I(l,Vn(_(s)))}),L(()=>(i(),V(w())),()=>{I(u,i().getCellsInDirection(w().cell.r,w().cell.c,w().direction))}),L(()=>(V(w()),mh),()=>{I(d,un(w().toolId,Bt)??mh)}),L(()=>(V(w()),_(d)),()=>{I(f,w().shape??_(d))}),L(()=>_(f),()=>{var Z;I(g,((Z=_(f))==null?void 0:Z.fontSize)??.5)}),L(()=>_(f),()=>{var Z;I(h,((Z=_(f))==null?void 0:Z.fontColor)??"var(--text-primary-color)")}),L(()=>_(f),()=>{var Z;I(m,((Z=_(f))==null?void 0:Z.stroke)??"var(--text-primary-color)")}),L(()=>_(f),()=>{I(E,{..._(f),stroke:"var(--constraint-selected-color)",strokeWidth:x+.07})}),L(()=>(_(s),V(w())),()=>{I(C,G(_(s),w().direction))}),Ce(),he();var K=T6(),U=Y(K);{var H=Z=>{var ye=Ee(),be=ee(ye);Qe(be,1,()=>_(u),mt,(Ie,Oe)=>{var Ae=R6();S(Ae,"width",1),S(Ae,"height",1),J(()=>{S(Ae,"x",_(Oe).c),S(Ae,"y",_(Oe).r)}),D(Ie,Ae)}),D(Z,ye)};Q(U,Z=>{y()===void 0&&Z(H)})}var re=F(U);{var te=Z=>{var ye=k6(),be=ee(ye),Ie=F(be);Qe(Ie,1,()=>_(u),mt,(Oe,Ae)=>{var De=N6();S(De,"width",1),S(De,"height",1),J(()=>{S(De,"x",_(Ae).c),S(De,"y",_(Ae).r)}),D(Oe,De)}),J(()=>{S(be,"d",_(C)),S(be,"stroke",_(E).stroke),S(be,"stroke-width",_(E).strokeWidth)}),D(Z,ye)};Q(re,Z=>{y()&&y()===_(o)&&Z(te)})}var oe=F(re);S(oe,"stroke-width",x);var se=F(oe),we=Y(se,!0);J(()=>rt(we,N(w()))),P(se),P(K),J(()=>{S(oe,"d",_(C)),S(oe,"stroke",_(m)),S(se,"x",_(l).x),S(se,"y",_(l).y),S(se,"font-size",_(g)),S(se,"fill",_(h))}),D(t,K),le()}var M6=ne('<g class="outside-direction-tool"><!></g>'),$6=ne('<g class="outside-direction-preview"><!></g>');function cm(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=u=>{var d=M6(),f=Y(d);Zh(f,{get tool(){return n()},get c_id(){return r()}}),P(d),J(()=>S(d,"data-id",`${r()}`)),D(u,d)},l=u=>{var d=$6();S(d,"opacity",.5);var f=Y(d);Zh(f,{get tool(){return n()}}),P(d),D(u,d)};Q(o,u=>{r()!==void 0?u(s):u(l,!1)})}D(t,i)}var U6=ne('<path fill="none"></path>');function di(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A();let u=M(e,"linePoints",8),d=M(e,"shape",8,void 0);const f="round",g="round";L(()=>V(d()),()=>{var m;I(n,((m=d())==null?void 0:m.stroke)??"gray")}),L(()=>V(d()),()=>{var m;I(r,((m=d())==null?void 0:m.strokeWidth)??.1)}),L(()=>V(d()),()=>{var m;I(i,((m=d())==null?void 0:m.strokeDasharray)??0)}),L(()=>V(d()),()=>{var m;I(o,((m=d())==null?void 0:m.strokeDashoffset)??0)}),L(()=>V(d()),()=>{var m,E,C,w,y,x,N,T;I(s,{shortenHead:((E=(m=d())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((w=(C=d())==null?void 0:C.linePathOptions)==null?void 0:w.shortenTail)??.2,bezierRounding:((x=(y=d())==null?void 0:y.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:((T=(N=d())==null?void 0:N.linePathOptions)==null?void 0:T.closeLoops)??!1})}),L(()=>(V(u()),_(s)),()=>{I(l,fi(u(),_(s)))}),Ce(),he();var h=U6();S(h,"stroke-linejoin",f),S(h,"stroke-linecap",g),J(()=>{S(h,"d",_(l)),S(h,"stroke",_(n)),S(h,"stroke-width",_(r)),S(h,"stroke-dasharray",_(i)),S(h,"stroke-dashoffset",_(o))}),D(t,h),le()}var G6=ce("<!> <!> <!>",1);function F6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A();let l=M(e,"linePoints",8),u=M(e,"shape",8);function d(w){const y=At.cloneDeep(w);return y.r=y.r||.2,y.strokeWidth=0,y.opacity=1,y}L(()=>V(l()),()=>{I(n,l().length)}),L(()=>(_(n),V(l())),()=>{I(r,_(n)>1&&l()[0].equals(l()[_(n)-1]))}),L(()=>(_(n),V(l())),()=>{I(i,_(n)>=0?l()[0]:void 0)}),L(()=>(_(n),V(l())),()=>{I(o,_(n)>=0?l()[_(n)-1]:void 0)}),L(()=>V(u()),()=>{I(s,d(u()))}),Ce(),he();var f=G6(),g=ee(f);di(g,{get linePoints(){return l()},get shape(){return u()}});var h=F(g,2);{var m=w=>{br(w,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(s)}})};Q(h,w=>{!_(r)&&_(i)&&w(m)})}var E=F(h,2);{var C=w=>{br(w,{get x(){return _(o).x},get y(){return _(o).y},get shape(){return _(s)}})};Q(E,w=>{!_(r)&&_(o)&&w(C)})}D(t,f),le()}var z6=ne('<g class="corner-line-tool"><!></g>');function P6(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let s=M(e,"tool",8);const l=un(s().toolId,Bt)??Us;L(()=>(V(s()),Ue),()=>{I(n,s().coords.map(h=>new Ue(h.c,h.r)))}),L(()=>V(s()),()=>{I(r,s().shape??l)}),L(()=>(_(r),W),()=>{var h;I(i,((h=_(r))==null?void 0:h.type)||W.LINE)}),L(()=>_(r),()=>{var h;I(o,((h=_(r))==null?void 0:h.opacity)??1)}),Ce(),he();var u=z6(),d=Y(u);{var f=h=>{F6(h,{get linePoints(){return _(n)},get shape(){return _(r)}})},g=h=>{di(h,{get linePoints(){return _(n)},get shape(){return _(r)}})};Q(d,h=>{_(i)===W.MAZE_WALL?h(f):h(g,!1)})}P(u),J(()=>S(u,"opacity",_(o))),D(t,u),le()}var B6=ne('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Qh(t,e){ae(e,!1);const n=A(),r=A(),i=A();let o=M(e,"shape",8),s=M(e,"coords",8);const[l,u]=s(),d=u.c,f=l.c===u.c?u.c+1:u.c,g=u.r,h=l.r===u.r?u.r+1:u.r;L(()=>V(o()),()=>{I(n,o().stroke??"black")}),L(()=>V(o()),()=>{var E;I(r,(E=o())==null?void 0:E.opacity)}),L(()=>V(o()),()=>{I(i,o().strokeWidth??.02)}),Ce(),he();var m=B6();S(m,"x1",d),S(m,"x2",f),S(m,"y1",g),S(m,"y2",h),J(()=>{S(m,"stroke",_(n)),S(m,"stroke-width",_(i)),S(m,"opacity",_(r))}),D(t,m),le()}var H6=ne("<!><!>",1),W6=ne("<!><!>",1),Y6=ne("<!><!>",1),j6=ne("<!><!>",1),K6=ne('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function um(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function C(T,G){return G===W.TEXT_ONLY?T.value?T.value:"-":T.value??""}function w(T){if(T!==v.EDGE_INEQUALITY&&T!==v.ONE_WAY_DOOR)return 0;const G=Vn(_(g)[0]);return Vn(_(g)[1]).subtract(G).angle()/(2*Math.PI)*360}L(()=>r(),()=>{var T;I(i,(T=r())==null?void 0:T.id)}),L(()=>(V(m()),ll),()=>{I(o,un(m().toolId,Bt)??ll)}),L(()=>(V(m()),_(o)),()=>{I(s,m().shape??_(o))}),L(()=>(_(s),W),()=>{var T;I(l,((T=_(s))==null?void 0:T.type)||W.CIRCLE)}),L(()=>_(s),()=>{var T;I(u,((T=_(s))==null?void 0:T.fontSize)??.2)}),L(()=>_(s),()=>{var T;I(d,((T=_(s))==null?void 0:T.fontColor)??"black")}),L(()=>_(s),()=>{I(f,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),L(()=>V(m()),()=>{I(g,m().cells)}),L(()=>_(g),()=>{I(h,qp(nc(_(g))))}),Ce(),he();var y=Ee(),x=ee(y);{var N=T=>{var G=K6(),K=ee(G);{var U=oe=>{var se=H6(),we=ee(se);{var Z=be=>{br(be,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(f)}})};Q(we,be=>{E()&&E()===_(i)&&be(Z)})}var ye=F(we);br(ye,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(s)}}),D(oe,se)},H=oe=>{var se=Ee(),we=ee(se);{var Z=be=>{var Ie=W6(),Oe=ee(Ie);{var Ae=Ge=>{br(Ge,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(f)}})};Q(Oe,Ge=>{E()&&E()===_(i)&&Ge(Ae)})}var De=F(Oe);br(De,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(s)}}),D(be,Ie)},ye=be=>{var Ie=Ee(),Oe=ee(Ie);{var Ae=Ge=>{var ot=Y6(),lt=ee(ot);{var ct=wt=>{Qh(wt,{get coords(){return _(g)},get shape(){return _(f)}})};Q(lt,wt=>{E()&&E()===_(i)&&wt(ct)})}var _t=F(lt);Qh(_t,{get coords(){return _(g)},get shape(){return _(s)}}),D(Ge,ot)},De=Ge=>{var ot=j6(),lt=ee(ot);{var ct=wt=>{Nr(wt,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(f)}})};Q(lt,wt=>{E()&&E()===_(i)&&wt(ct)})}var _t=F(lt);Nr(_t,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(s)}}),D(Ge,ot)};Q(Oe,Ge=>{_(l)===W.BORDER_LINE?Ge(Ae):Ge(De,!1)},!0)}D(be,Ie)};Q(we,be=>{_(l)===W.TEXT_ONLY?be(Z):be(ye,!1)},!0)}D(oe,se)};Q(K,oe=>{m().toolId===v.EDGE_INEQUALITY||m().toolId===v.ONE_WAY_DOOR?oe(U):oe(H,!1)})}var re=F(K);J(()=>S(re,"transform",`rotate(${w(m().toolId)}, ${_(h).x}, ${_(h).y} )`));var te=Y(re,!0);J(()=>rt(te,C(m(),_(l)))),P(re),J(()=>{S(re,"x",_(h).x),S(re,"y",_(h).y),S(re,"font-size",_(u)),S(re,"fill",_(d))}),D(T,G)};Q(x,T=>{_(g).length===2&&T(N)})}D(t,y),le()}var V6=ne('<g class="edge-tool"><!></g>');function q6(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=V6(),d=Y(u);um(d,{get tool(){return n()},get c_id(){return r()}}),P(u),J(()=>S(u,"id",`c-${r()}`)),D(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}D(t,i)}var X6=ne('<path fill="none" stroke-linecap="round"></path>'),Z6=ne('<path fill="none" stroke-linecap="round"></path>'),Q6=ne('<path fill="none" stroke-linecap="round"></path>'),J6=ne("<!><!><!>",1);function Jh(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A();let d=M(e,"tool",8),f=M(e,"c_id",8,void 0);L(()=>r(),()=>{var y;I(i,(y=r())==null?void 0:y.id)}),L(()=>(V(d()),ph),()=>{I(o,un(d().toolId,Bt)??ph)}),L(()=>(V(d()),_(o)),()=>{I(s,d().shape??_(o))}),L(()=>_(s),()=>{I(l,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.03:.03})}),L(()=>_(s),()=>{I(u,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.05:.05})}),Ce(),he();var g=J6(),h=ee(g);{var m=y=>{var x=Ee(),N=ee(x);Qe(N,1,()=>d().directions,mt,(T,G)=>{var K=X6();J(()=>S(K,"d",Hu(d().cell,_(G)))),J(()=>{S(K,"stroke",_(l).stroke),S(K,"stroke-width",_(l).strokeWidth)}),D(T,K)}),D(y,x)};Q(h,y=>{y(m)})}var E=F(h);{var C=y=>{var x=Ee(),N=ee(x);Qe(N,1,()=>d().directions,mt,(T,G)=>{var K=Z6();J(()=>S(K,"d",Hu(d().cell,_(G)))),J(()=>{S(K,"stroke",_(u).stroke),S(K,"stroke-width",_(u).strokeWidth)}),D(T,K)}),D(y,x)};Q(E,y=>{f()&&f()===_(i)&&y(C)})}var w=F(E);Qe(w,1,()=>d().directions,mt,(y,x)=>{var N=Q6();J(()=>S(N,"d",Hu(d().cell,_(x)))),J(()=>{S(N,"stroke",_(s).stroke),S(N,"stroke-width",_(s).strokeWidth)}),D(y,N)}),D(t,g),le()}var eB=ne('<g class="single-cell-multi-arrow-tool"><!></g>'),tB=ne('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function dm(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=u=>{var d=eB(),f=Y(d);Jh(f,{get tool(){return n()},get c_id(){return r()}}),P(d),J(()=>S(d,"data-id",`${r()}`)),D(u,d)},l=u=>{var d=tB();S(d,"opacity",.5);var f=Y(d);Jh(f,{get tool(){return n()}}),P(d),D(u,d)};Q(o,u=>{r()!==void 0?u(s):u(l,!1)})}D(t,i)}var nB=ne('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function rB(t,e){ae(e,!1);const n=A();let r=M(e,"tool",8);M(e,"c_id",8,void 0),L(()=>V(r()),()=>{I(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),Ce(),he();var i=nB();J(()=>S(i,"transform",`translate(${_(n).x} ${_(n).y})`)),D(t,i),le()}var iB=ne('<g class="fog-lights-layer svelte-17myswq"></g>');function oB(t,e){ae(e,!1);const n=We(),r=()=>ge(on,"$toolStore",n),i=()=>ge(wi,"$enableFogMaskStore",n),o=A(),s=A(),l=A();let u=M(e,"element",8);L(()=>r(),()=>{I(o,r())}),L(()=>i(),()=>{I(s,!i())}),L(()=>V(u()),()=>{var h;I(l,(h=u())==null?void 0:h.constraints)}),Ce(),he();var d=Ee(),f=ee(d);{var g=h=>{var m=iB();Qe(m,5,()=>Object.entries(_(l)),E=>E[0],(E,C)=>{rB(E,{get tool(){return _(C)[1]},get c_id(){return _(C)[0]}})}),P(m),J(()=>Et(m,"inactive",_(o)!==v.FOG_LIGHTS)),D(h,m)};Q(f,h=>{var m;_(s)&&!((m=u())!=null&&m.disabled)&&_(l)&&h(g)})}D(t,d),le()}var sB=ne('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function oc(t,e){ae(e,!1);const n=A(),r=A(),i=A();let o=M(e,"cx",8),s=M(e,"cy",8),l=M(e,"c_id",8);L(()=>V(l()),()=>{I(n,document.getElementById(`c-${l()}`))}),L(()=>_(n),()=>{var g;I(r,(g=_(n))==null?void 0:g.getBBox())}),L(()=>_(r),()=>{I(i,_(r)?Math.max(_(r).width,_(r).height):void 0)}),Ce();var u=Ee(),d=ee(u);{var f=g=>{var h=sB(),m=Y(h);S(m,"stroke-width",.6),P(h),J(()=>S(h,"transform",`translate(${o()}, ${s()}) scale(${_(i)*.6})`)),D(g,h)};Q(d,g=>{_(i)&&g(f)})}D(t,u),le()}var aB=ne('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),lB=ne('<g class="edge-tool-preview"><!></g>');function cB(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A();let l=M(e,"tool_preview",8);L(()=>V(l()),()=>{I(n,l().tool)}),L(()=>V(l()),()=>{I(r,l().mode)}),L(()=>V(l()),()=>{I(i,l().match_id)}),L(()=>_(n),()=>{I(o,_(n).cells)}),L(()=>_(o),()=>{I(s,qp(nc(_(o))))}),Ce(),he();var u=Ee(),d=ee(u);{var f=h=>{var m=aB();S(m,"opacity",.5);var E=Y(m);oc(E,{get cx(){return _(s).x},get cy(){return _(s).y},get c_id(){return _(i)}}),P(m),D(h,m)},g=h=>{var m=lB();S(m,"opacity",.5);var E=Y(m);um(E,{get tool(){return _(n)}}),P(m),D(h,m)};Q(d,h=>{_(r)==="remove"&&_(i)?h(f):h(g,!1)})}D(t,u),le()}var uB=ne('<g class="corner-tool-remove-preview"><!></g>'),dB=ne('<g class="corner-tool-preview"><!></g>');function _B(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A();let l=M(e,"tool_preview",8);L(()=>V(l()),()=>{I(n,l().tool)}),L(()=>V(l()),()=>{I(r,l().mode)}),L(()=>V(l()),()=>{I(i,l().match_id)}),L(()=>_(n),()=>{I(o,_(n).cells)}),L(()=>_(o),()=>{I(s,new Ue(_(o)[_(o).length-1].c,_(o)[_(o).length-1].r))}),Ce(),he();var u=Ee(),d=ee(u);{var f=h=>{var m=uB();S(m,"opacity",.5);var E=Y(m);oc(E,{get cx(){return _(s).x},get cy(){return _(s).y},get c_id(){return _(i)}}),P(m),D(h,m)},g=h=>{var m=dB();S(m,"opacity",.5);var E=Y(m);am(E,{get tool(){return _(n)}}),P(m),D(h,m)};Q(d,h=>{_(r)==="remove"&&_(i)?h(f):h(g,!1)})}D(t,u),le()}var fB=ne('<path fill="none" stroke-linecap="round"></path>'),gB=ne('<path fill="none" stroke-linecap="round"></path>'),hB=ne('<!><!><path fill="none" stroke-linecap="round"></path>',1);function _m(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A();let h=M(e,"tool",8),m=M(e,"c_id",8,void 0);L(()=>r(),()=>{var T;I(i,(T=r())==null?void 0:T.id)}),L(()=>(V(h()),vh),()=>{I(o,un(h().toolId,Bt)??vh)}),L(()=>(V(h()),_(o)),()=>{I(s,h().shape??_(o))}),L(()=>_(s),()=>{I(l,_(s).strokeWidth??.1)}),L(()=>_(s),()=>{I(u,_(s).stroke??"black")}),L(()=>_(s),()=>{I(d,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.05:.05})}),L(()=>_(s),()=>{I(f,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),L(()=>V(h()),()=>{I(g,HP(h().cell,h().direction))}),Ce(),he();var E=hB(),C=ee(E);{var w=T=>{var G=fB();J(()=>{S(G,"d",_(g)),S(G,"stroke",_(d).stroke),S(G,"stroke-width",_(d).strokeWidth)}),D(T,G)};Q(C,T=>{T(w)})}var y=F(C);{var x=T=>{var G=gB();J(()=>{S(G,"d",_(g)),S(G,"stroke",_(f).stroke),S(G,"stroke-width",_(f).strokeWidth)}),D(T,G)};Q(y,T=>{m()&&m()===_(i)&&T(x)})}var N=F(y);J(()=>{S(N,"d",_(g)),S(N,"stroke",_(u)),S(N,"stroke-width",_(l))}),D(t,E),le()}var vB=ne('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),pB=ne('<g class="single-cell-arrow-tool-preview"><!></g>');function mB(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let s=M(e,"tool_preview",8);L(()=>V(s()),()=>{I(n,s().tool)}),L(()=>V(s()),()=>{I(r,s().mode)}),L(()=>V(s()),()=>{I(i,s().match_id)}),L(()=>_(n),()=>{I(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),Ce(),he();var l=Ee(),u=ee(l);{var d=g=>{var h=vB();S(h,"opacity",.5);var m=Y(h);oc(m,{get cx(){return _(o).x},get cy(){return _(o).y},get c_id(){return _(i)}}),P(h),D(g,h)},f=g=>{var h=pB();S(h,"opacity",.5);var m=Y(h);_m(m,{get tool(){return _(n)}}),P(h),D(g,h)};Q(u,g=>{_(r)==="remove"&&_(i)?g(d):g(f,!1)})}D(t,l),le()}var EB=ce("<!> <!>",1);function fm(t,e){ae(e,!1);const n=A(),r=A();let i=M(e,"cells",8),o=M(e,"shape",8,Kd),s=M(e,"value",8,void 0);L(()=>V(i()),()=>{I(n,i()[0])}),L(()=>_(n),()=>{I(r,new Ue(_(n).c,_(n).r))}),Ce(),he();var l=EB(),u=ee(l);Kr(u,{get cells(){return i()},get shape(){return o()}});var d=F(u,2);{var f=g=>{Ns(g,{get value(){return s()},get x(){return _(r).x},get y(){return _(r).y},position:"TL"})};Q(d,g=>{s()&&s().length&&g(f)})}D(t,l),le()}var bB=ne('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function ev(t,e){ae(e,!1);const n=We(),r=()=>ge(cF,"$minimumConstraintsStore",n),i=()=>ge(uF,"$maximumConstraintsStore",n),o=A(),s=A(),l=A();let u=M(e,"coord",8),d=M(e,"minOrMax",8);function f(w,y){const x=[!0,!0,!0,!0];let N=[[0,-1],[1,0],[0,1],[-1,0]];for(let T=0;T<N.length;T++){let G=N[T];const K={r:w.r+G[1],c:w.c+G[0]};x[T]=!Object.values(y).some(U=>Je(K,U.cell))}return x}function g(w,y){let x=PP(d(),w.r,w.c);const N=f(w,y);return x=x.filter((G,K)=>N[K]),x.map(G=>Jo(G,!1)).join("")}function h(w,y){return d()==="max"?y:w}L(()=>V(u()),()=>{I(o,u().c)}),L(()=>V(u()),()=>{I(s,u().r)}),L(()=>(r(),i()),()=>{I(l,h(r(),i()))}),Ce(),he();var m=bB(),E=Y(m);S(E,"width",1),S(E,"height",1);var C=F(E);J(()=>S(C,"d",g(u(),_(l)))),P(m),J(()=>{S(E,"x",_(o)),S(E,"y",_(s))}),D(t,m),le()}var CB=ne("<circle></circle>");function wB(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A();let u=M(e,"x",8),d=M(e,"y",8),f=M(e,"value",8),g=M(e,"shape",8);L(()=>V(g()),()=>{I(n,g().r??.35)}),L(()=>V(g()),()=>{I(r,g().stroke??"black")}),L(()=>V(g()),()=>{var m;I(i,(m=g())==null?void 0:m.opacity)}),L(()=>V(g()),()=>{I(o,g().strokeWidth??.02)}),L(()=>V(f()),()=>{I(s,f()==="1"?"var(--constraint-color-red)":f()==="2"?"var(--constraint-color-green)":f()==="3"?"var(--constraint-color-blue)":"none")}),L(()=>V(g()),()=>{I(l,g().strokeDasharray??0)}),Ce(),he();var h=CB();J(()=>{S(h,"cx",u()),S(h,"cy",d()),S(h,"r",_(n)),S(h,"stroke",_(r)),S(h,"stroke-width",_(o)),S(h,"fill",_(s)),S(h,"opacity",_(i)),S(h,"stroke-dasharray",_(l))}),D(t,h),le()}var yB=ne("<!><!>",1),IB=ne("<!><!>",1),OB=ne("<!><!><!>",1),xB=ne('<g class="single-cell-tool"><!><!></g>');function gm(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);L(()=>r(),()=>{var G;I(i,(G=r())==null?void 0:G.id)}),L(()=>(V(m()),hh),()=>{I(o,un(m().toolId,Bt)??hh)}),L(()=>(V(m()),_(o)),()=>{I(s,m().shape??_(o))}),L(()=>(_(s),W),()=>{var G;I(l,((G=_(s))==null?void 0:G.type)||W.CIRCLE)}),L(()=>_(s),()=>{I(u,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.06:.06})}),L(()=>_(s),()=>{I(d,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),L(()=>V(m()),()=>{I(f,{x:m().cell.c+.5,y:m().cell.r+.5})}),L(()=>V(m()),()=>{I(g,new Ue(m().cell.c,m().cell.r))}),L(()=>V(m()),()=>{I(h,m().value)}),Ce(),he();var C=xB(),w=Y(C);{var y=G=>{ev(G,{get coord(){return m().cell},minOrMax:"min"})},x=G=>{var K=Ee(),U=ee(K);{var H=te=>{ev(te,{get coord(){return m().cell},minOrMax:"max"})},re=te=>{var oe=Ee(),se=ee(oe);{var we=ye=>{var be=yB(),Ie=ee(be);{var Oe=De=>{Nr(De,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(d)}})};Q(Ie,De=>{E()&&E()===_(i)&&De(Oe)})}var Ae=F(Ie);wB(Ae,{get x(){return _(f).x},get y(){return _(f).y},get value(){return _(h)},get shape(){return _(s)}}),D(ye,be)},Z=ye=>{var be=Ee(),Ie=ee(be);{var Oe=De=>{var Ge=IB(),ot=ee(Ge);{var lt=wt=>{var yt=gt(()=>[m().cell]);Kr(wt,{get cells(){return _(yt)},get shape(){return _(d)}})};Q(ot,wt=>{E()&&E()===_(i)&&wt(lt)})}var ct=F(ot),_t=gt(()=>[m().cell]);fm(ct,{get cells(){return _(_t)},get shape(){return _(s)},get value(){return m().value}}),D(De,Ge)},Ae=De=>{var Ge=OB(),ot=ee(Ge);{var lt=yt=>{Nr(yt,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(u)}})};Q(ot,yt=>{yt(lt)})}var ct=F(ot);{var _t=yt=>{Nr(yt,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(d)}})};Q(ct,yt=>{E()&&E()===_(i)&&yt(_t)})}var wt=F(ct);Nr(wt,{get cx(){return _(f).x},get cy(){return _(f).y},get shape(){return _(s)}}),D(De,Ge)};Q(Ie,De=>{_(l)===W.CAGE?De(Oe):De(Ae,!1)},!0)}D(ye,be)};Q(se,ye=>{m().toolId===v.COLORED_COUNTING_CIRCLES?ye(we):ye(Z,!1)},!0)}D(te,oe)};Q(U,te=>{m().toolId===v.MAXIMUM?te(H):te(re,!1)},!0)}D(G,K)};Q(w,G=>{m().toolId===v.MINIMUM?G(y):G(x,!1)})}var N=F(w);{var T=G=>{Ns(G,{get value(){return _(h)},get x(){return _(g).x},get y(){return _(g).y},position:"TL"})};Q(N,G=>{_(l)!==W.CAGE&&m().toolId!==v.COLORED_COUNTING_CIRCLES&&_(h)&&G(T)})}P(C),J(()=>S(C,"data-id",`${E()}`)),D(t,C),le()}var AB=ne('<g class="single-cell-tool-preview"><!></g>');function SB(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let s=M(e,"tool_preview",8);L(()=>V(s()),()=>{I(n,s().tool)}),L(()=>V(s()),()=>{I(r,s().mode)}),L(()=>V(s()),()=>{I(i,s().match_id)}),L(()=>_(n),()=>{I(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),Ce(),he();var l=AB();S(l,"opacity",.5);var u=Y(l);gm(u,{get tool(){return _(n)}}),P(l),D(t,l),le()}var DB=ne('<g class="single-cell-arrow-tool"><!></g>');function LB(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=DB(),d=Y(u);_m(d,{get tool(){return n()},get c_id(){return r()}}),P(u),J(()=>S(u,"id",`c-${r()}`)),D(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}D(t,i)}var RB=ne('<g class="single-cell-tool"><!></g>');function NB(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=Ee(),o=ee(i);{var s=l=>{var u=RB(),d=Y(u);gm(d,{get tool(){return n()},get c_id(){return r()}}),P(u),J(()=>S(u,"id",`c-${r()}`)),D(l,u)};Q(o,l=>{r()!==void 0&&l(s)})}D(t,i)}function kB(t,e){ae(e,!1);let n=M(e,"tool",8),r=M(e,"c_id",8);he();var i=Ee(),o=ee(i);{var s=l=>{var u=Ee(),d=ee(u);{var f=h=>{LB(h,{get tool(){return n()},get c_id(){return r()}})},g=h=>{var m=Ee(),E=ee(m);{var C=y=>{dm(y,{get tool(){return n()},get c_id(){return r()}})},w=y=>{var x=Ee(),N=ee(x);{var T=G=>{NB(G,{get tool(){return n()},get c_id(){return r()}})};Q(N,G=>{n().type==="SIMPLE"&&G(T)},!0)}D(y,x)};Q(E,y=>{n().type==="MULTIARROW"?y(C):y(w,!1)},!0)}D(h,m)};Q(d,h=>{n().type==="ARROW"?h(f):h(g,!1)})}D(l,u)};Q(o,l=>{n().toolId!==v.FOG_LIGHTS&&l(s)})}D(t,i),le()}var TB=ce("<!> <!> <!>",1);function Yu(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let s=M(e,"linePoints",8),l=M(e,"shape",8,Us);function u(w){var N;const y=At.cloneDeep(w);y.r=y.r||.2;const x=y.r;return y.strokeDasharray=w.strokeDasharray,y.opacity=1,y.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(N=y.linePathOptions)==null?void 0:N.bezierRounding},y}L(()=>V(s()),()=>{I(n,s().length)}),L(()=>(_(n),V(s())),()=>{I(r,_(n)>=0?s()[0]:void 0)}),L(()=>(_(n),V(s())),()=>{I(i,_(n)>=0?s()[_(n)-1]:void 0)}),L(()=>V(l()),()=>{I(o,u(l()))}),Ce(),he();var d=TB(),f=ee(d);{var g=w=>{br(w,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})};Q(f,w=>{_(r)&&w(g)})}var h=F(f,2);{var m=w=>{di(w,{get linePoints(){return s()},get shape(){return _(o)}})};Q(h,w=>{_(n)>1&&w(m)})}var E=F(h,2);{var C=w=>{br(w,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(o)}})};Q(E,w=>{_(i)&&w(C)})}D(t,d),le()}var MB=ce("<!> <!> <!>",1);function ju(t,e){ae(e,!1);const n=A(),r=A(),i=A();let o=M(e,"linePoints",8),s=M(e,"shape",12,Us);const l=4,u=.5;function d(T,G){const K=G.r??u,U=G.n??l,H=G.angle??0,re=im(K,U,new Ue(0,0),!0,0),te=(U+(T-H/360)*U%U)%U,oe=Math.floor(te)%U,se=Math.ceil(te)%U;return re[oe].lerp(re[se],te%1).length()}function f(T){if(_(n)<=1)return 0;const G=o()[0],U=o()[1].subtract(G).angle()/(2*Math.PI);return d(U,T)}function g(T){if(_(n)<=1)return 0;const G=o()[_(n)-1],U=o()[_(n)-2].subtract(G).angle()/(2*Math.PI);return d(U,T)}function h(T){var K;const G=At.cloneDeep(T);return G.r=G.r||u,G.opacity=1,G.linePathOptions={shortenHead:f(G),shortenTail:g(G),bezierRounding:(K=G.linePathOptions)==null?void 0:K.bezierRounding},G}L(()=>V(o()),()=>{I(n,o().length)}),L(()=>(_(n),V(o())),()=>{I(r,_(n)>=0?o()[0]:void 0)}),L(()=>(_(n),V(o())),()=>{I(i,_(n)>=0?o()[_(n)-1]:void 0)}),L(()=>V(s()),()=>{s(h(s()))}),Ce(),he();var m=MB(),E=ee(m);{var C=T=>{bl(T,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return s()}})};Q(E,T=>{_(r)&&T(C)})}var w=F(E,2);{var y=T=>{di(T,{get linePoints(){return o()},get shape(){return s()}})};Q(w,T=>{_(n)>1&&T(y)})}var x=F(w,2);{var N=T=>{bl(T,{get cx(){return _(i).x},get cy(){return _(i).y},get shape(){return s()}})};Q(x,T=>{_(i)&&T(N)})}D(t,m),le()}var $B=ce("<!> <!>",1);function Ku(t,e){ae(e,!1);const n=A();let r=M(e,"linePoints",8),i=M(e,"shape",8,Us);function o(m){var w,y,x;const E=At.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const C=E.r;return E.linePathOptions={shortenHead:((w=E.linePathOptions)==null?void 0:w.shortenHead)||C,shortenTail:(y=E.linePathOptions)==null?void 0:y.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}function s(m){var w,y,x;const E=At.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const C=E.r;return E.linePathOptions={shortenHead:((w=E.linePathOptions)==null?void 0:w.shortenHead)||C,shortenTail:(y=E.linePathOptions)==null?void 0:y.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}L(()=>V(r()),()=>{I(n,r().length>0?r()[0]:void 0)}),Ce(),he();var l=$B(),u=ee(l);{var d=m=>{var E=gt(()=>o(i()));di(m,{get linePoints(){return r()},get shape(){return _(E)}})};Q(u,m=>{r().length>1&&m(d)})}var f=F(u,2);{var g=m=>{var E=gt(()=>o(i()));br(m,{get x(){return _(n).x},get y(){return _(n).y},get shape(){return _(E)}})},h=m=>{var E=Ee(),C=ee(E);{var w=y=>{var x=gt(()=>s(i()));bl(y,{get cx(){return _(n).x},get cy(){return _(n).y},get shape(){return _(x)}})};Q(C,y=>{_(n)&&y(w)},!0)}D(m,E)};Q(f,m=>{_(n)&&i().type===W.THERMO_WITH_CIRCLE?m(g):m(h,!1)})}D(t,l),le()}var UB=ne("<!><!><!>",1),GB=ne("<!><!><!>",1),FB=ne("<!><!><!>",1),zB=ne("<!><!><!>",1),PB=ne('<g class="line-tool"><!></g>');function BB(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A();let g=M(e,"tool",8),h=M(e,"c_id",8);const m=un(g().toolId,Bt)??Us;L(()=>r(),()=>{var x;I(i,(x=r())==null?void 0:x.id)}),L(()=>V(g()),()=>{I(o,nc(g().cells))}),L(()=>V(g()),()=>{I(s,g().shape??m)}),L(()=>(_(s),W),()=>{var x;I(l,((x=_(s))==null?void 0:x.type)||W.LINE)}),L(()=>_(s),()=>{var x;I(u,((x=_(s))==null?void 0:x.opacity)??1)}),L(()=>_(s),()=>{I(d,{..._(s),stroke:"var(--grid-background-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.06:.06})}),L(()=>_(s),()=>{I(f,{..._(s),stroke:"var(--constraint-selected-color)",strokeWidth:_(s).strokeWidth?_(s).strokeWidth+.07:.07})}),Ce(),he();var E=PB(),C=Y(E);{var w=x=>{var N=UB(),T=ee(N);{var G=re=>{Yu(re,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(T,re=>{re(G)})}var K=F(T);{var U=re=>{Yu(re,{get linePoints(){return _(o)},get shape(){return _(f)}})};Q(K,re=>{h()===_(i)&&re(U)})}var H=F(K);Yu(H,{get linePoints(){return _(o)},get shape(){return _(s)}}),D(x,N)},y=x=>{var N=Ee(),T=ee(N);{var G=U=>{var H=GB(),re=ee(H);{var te=Z=>{ju(Z,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(re,Z=>{Z(te)})}var oe=F(re);{var se=Z=>{ju(Z,{get linePoints(){return _(o)},get shape(){return _(f)}})};Q(oe,Z=>{h()===_(i)&&Z(se)})}var we=F(oe);ju(we,{get linePoints(){return _(o)},get shape(){return _(s)}}),D(U,H)},K=U=>{var H=Ee(),re=ee(H);{var te=se=>{var we=FB(),Z=ee(we);{var ye=Ae=>{Ku(Ae,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,Ae=>{Ae(ye)})}var be=F(Z);{var Ie=Ae=>{Ku(Ae,{get linePoints(){return _(o)},get shape(){return _(f)}})};Q(be,Ae=>{h()===_(i)&&Ae(Ie)})}var Oe=F(be);Ku(Oe,{get linePoints(){return _(o)},get shape(){return _(s)}}),D(se,we)},oe=se=>{var we=zB(),Z=ee(we);{var ye=Ae=>{di(Ae,{get linePoints(){return _(o)},get shape(){return _(d)}})};Q(Z,Ae=>{Ae(ye)})}var be=F(Z);{var Ie=Ae=>{di(Ae,{get linePoints(){return _(o)},get shape(){return _(f)}})};Q(be,Ae=>{h()===_(i)&&Ae(Ie)})}var Oe=F(be);di(Oe,{get linePoints(){return _(o)},get shape(){return _(s)}}),D(se,we)};Q(re,se=>{_(l)===W.THERMO_WITH_CIRCLE||_(l)===W.THERMO_WITH_POLYGON?se(te):se(oe,!1)},!0)}D(U,H)};Q(T,U=>{_(l)===W.LINE_WITH_POLYGON_ENDS?U(G):U(K,!1)},!0)}D(x,N)};Q(C,x=>{_(l)===W.LINE_WITH_CIRCLE_ENDS?x(w):x(y,!1)})}P(E),J(()=>S(E,"opacity",_(u))),D(t,E),le()}var HB=ne('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function hm(t,e){let n=M(e,"l",8,.2),r=M(e,"id",8),i=M(e,"strokeWidth",8),o=M(e,"stroke",8,"black");const s=.5,l=`M${s-n()},${s-n()} L${s},${s} L${s-n()},${s+n()}`;var u=HB();S(u,"viewBox","0 0 1 1"),S(u,"refX",s),S(u,"refY",s),S(u,"markerWidth",1),S(u,"markerHeight",1);var d=Y(u);S(d,"d",l),P(u),J(()=>{S(u,"id",r()),S(d,"stroke-width",i()),S(d,"stroke",o())}),D(t,u)}var WB=ne('<path class="arrow-line" fill="none"></path>'),YB=ne("<!><!><!>",1);function jB(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A();let m=M(e,"tool",8),E=M(e,"arrowId",8);const C=un(m().toolId,Bt)??Gv,w="round",y="round",x=crypto.randomUUID(),N=`arrow-marker-${E()}-${x}`;L(()=>V(m()),()=>{I(n,m().shape??C)}),L(()=>_(n),()=>{var H;I(r,((H=_(n))==null?void 0:H.r)??.4)}),L(()=>_(n),()=>{var H;I(i,((H=_(n))==null?void 0:H.stroke)??"gray")}),L(()=>_(n),()=>{var H;I(o,((H=_(n))==null?void 0:H.strokeWidth)??.1)}),L(()=>_(n),()=>{var H;I(s,((H=_(n))==null?void 0:H.strokeDasharray)??0)}),L(()=>_(n),()=>{var H;I(l,((H=_(n))==null?void 0:H.opacity)??.8)}),L(()=>(_(r),_(n)),()=>{var H,re,te,oe;I(u,{shortenHead:_(r),shortenTail:((re=(H=_(n))==null?void 0:H.linePathOptions)==null?void 0:re.shortenTail)??.2,bezierRounding:((oe=(te=_(n))==null?void 0:te.linePathOptions)==null?void 0:oe.bezierRounding)??.4})}),L(()=>_(n),()=>{var H;I(d,((H=_(n))==null?void 0:H.fill)??"none")}),L(()=>_(n),()=>{var H;I(f,((H=_(n))==null?void 0:H.inset)??.2)}),L(()=>_(f),()=>{I(g,{...C,strokeDasharray:0,strokeLinejoin:"round",inset:_(f)})}),L(()=>V(m()),()=>{I(h,El(m().cells))}),Ce(),he();var T=YB(),G=ee(T);hm(G,{id:N,l:.2,get strokeWidth(){return _(o)},get stroke(){return _(i)}});var K=F(G);Kr(K,{get cells(){return m().cells},get shape(){return _(g)}});var U=F(K);Qe(U,1,()=>m().lines,mt,(H,re)=>{var te=Ee(),oe=ee(te);{var se=we=>{var Z=WB();J(()=>S(Z,"d",El(_(re),_(u)))),S(Z,"stroke-linejoin",w),S(Z,"stroke-linecap",y),S(Z,"marker-end",`url(#${N??""})`),J(()=>{S(Z,"stroke",_(i)),S(Z,"stroke-width",_(o)),S(Z,"opacity",_(l)),S(Z,"stroke-dasharray",_(s))}),D(we,Z)};Q(oe,we=>{_(re).length>1&&we(se)})}D(H,te)}),D(t,T),le()}var KB=ne('<path class="arrow-line" fill="none"></path>'),VB=ne('<mask maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><path class="arrow-bulb svelte-8t4zyo" stroke="white" fill="none"></path><path class="arrow-bulb svelte-8t4zyo" stroke="black" fill="none"></path></mask><!><path class="arrow-bulb svelte-8t4zyo"></path><!>',1);function Vu(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A(),s=A(),l=A(),u=A();let d=M(e,"tool",8),f=M(e,"c_id",8),g=M(e,"shape",8);const h="round",m="round",E=crypto.randomUUID(),C=`arrow-mask-${f()}-${E}`,w=`arrow-marker-${f()}-${E}`;L(()=>V(g()),()=>{var H;I(n,((H=g())==null?void 0:H.r)??.4)}),L(()=>V(g()),()=>{var H;I(r,((H=g())==null?void 0:H.stroke)??"gray")}),L(()=>V(g()),()=>{var H;I(i,((H=g())==null?void 0:H.strokeWidth)??.1)}),L(()=>V(g()),()=>{var H;I(o,((H=g())==null?void 0:H.strokeDasharray)??0)}),L(()=>(_(n),V(g())),()=>{var H,re,te,oe;I(s,{shortenHead:_(n),shortenTail:((re=(H=g())==null?void 0:H.linePathOptions)==null?void 0:re.shortenTail)??.2,bezierRounding:((oe=(te=g())==null?void 0:te.linePathOptions)==null?void 0:oe.bezierRounding)??.4})}),L(()=>V(d()),()=>{I(l,El(d().cells))}),L(()=>V(d()),()=>{I(u,UP(d().cells))}),Ce(),he();var y=VB(),x=ee(y);S(x,"id",C);var N=Y(x),T=F(N);P(x);var G=F(x);hm(G,{id:w,l:.2,get strokeWidth(){return _(i)},get stroke(){return _(r)}});var K=F(G);S(K,"mask",`url(#${C??""})`);var U=F(K);Qe(U,1,()=>d().lines,mt,(H,re)=>{var te=Ee(),oe=ee(te);{var se=we=>{var Z=KB();J(()=>S(Z,"d",El(_(re),_(s)))),S(Z,"stroke-linejoin",h),S(Z,"stroke-linecap",m),S(Z,"marker-end",`url(#${w??""})`),J(()=>{S(Z,"stroke",_(r)),S(Z,"stroke-width",_(i)),S(Z,"stroke-dasharray",_(o))}),D(we,Z)};Q(oe,we=>{_(re).length>1&&we(se)})}D(H,te)}),J(()=>{S(x,"x",_(u).x),S(x,"y",_(u).y),S(x,"width",_(u).width),S(x,"height",_(u).height),S(N,"stroke-width",2*_(n)+_(i)),S(N,"d",_(l)),S(T,"stroke-width",2*_(n)-_(i)),S(T,"d",_(l)),S(K,"d",_(l)),S(K,"stroke-width",2*_(n)+_(i)),S(K,"stroke",_(r))}),D(t,y),le()}var qB=ne("<!><!><!>",1),XB=ne('<g class="arrow-tool"><!></g>');function ZB(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A();let u=M(e,"tool",8),d=M(e,"c_id",8);const f=un(u().toolId,Bt)??Gv;L(()=>V(u()),()=>{I(i,u().shape??f)}),L(()=>_(i),()=>{I(o,{..._(i),stroke:"var(--grid-background-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.06:.06})}),L(()=>_(i),()=>{I(s,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),L(()=>r(),()=>{var C;I(l,(C=r())==null?void 0:C.id)}),Ce(),he();var g=XB(),h=Y(g);{var m=C=>{jB(C,{get tool(){return u()},get arrowId(){return d()}})},E=C=>{var w=qB(),y=ee(w);{var x=K=>{Vu(K,{get tool(){return u()},get c_id(){return d()},get shape(){return _(o)}})};Q(y,K=>{K(x)})}var N=F(y);{var T=K=>{Vu(K,{get tool(){return u()},get c_id(){return d()},get shape(){return _(s)}})};Q(N,K=>{d()===_(l)&&K(T)})}var G=F(N);Vu(G,{get tool(){return u()},get c_id(){return d()},get shape(){return _(i)}}),D(C,w)};Q(h,C=>{_(i).type===W.BULBOUS_ARROW?C(m):C(E,!1)})}P(g),D(t,g),le()}var QB=ne('<g class="cage-tool"><!><!></g>');function JB(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A();let l=M(e,"tool",8),u=M(e,"c_id",8);const d=un(l().toolId,Bt)??Kd;L(()=>V(l()),()=>{I(i,l().shape??d)}),L(()=>r(),()=>{var E;I(o,(E=r())==null?void 0:E.id)}),L(()=>_(i),()=>{I(s,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),Ce(),he();var f=QB(),g=Y(f);{var h=E=>{Kr(E,{get cells(){return l().cells},get shape(){return _(s)}})};Q(g,E=>{u()===_(o)&&E(h)})}var m=F(g);fm(m,{get cells(){return l().cells},get shape(){return _(i)},get value(){return l().value}}),P(f),D(t,f),le()}var eH=ne("<!><!>",1),tH=ne('<g class="clone-tool"><!><!><!><!><!></g>');function nH(t,e){ae(e,!1);const n=We(),r=()=>ge(Wt,"$currentConstraintStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A(),m=A();let E=M(e,"tool",8),C=M(e,"c_id",8);const w=un(E().toolId,Bt)??ZI,y=800,x=E().value;L(()=>r(),()=>{var te;I(i,(te=r())==null?void 0:te.id)}),L(()=>V(E()),()=>{I(o,E().shape??w)}),L(()=>_(o),()=>{I(s,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),L(()=>_(o),()=>{I(l,_(o).inset??.15)}),L(()=>_(o),()=>{I(u,_(o).strokeWidth??.07)}),L(()=>_(o),()=>{I(d,_(o).fontColor??_(o).stroke??"black")}),L(()=>V(E()),()=>{I(f,E().cells[E().cells.length-1])}),L(()=>V(E()),()=>{I(g,E().cells2[E().cells2.length-1])}),L(()=>(_(f),_(l)),()=>{I(h,new Ue(_(f).c+1-_(l)-.05,_(f).r+1-_(l)-.05))}),L(()=>(_(g),_(l)),()=>{I(m,new Ue(_(g).c+1-_(l)-.05,_(g).r+1-_(l)-.05))}),Ce(),he();var N=tH(),T=Y(N);{var G=te=>{var oe=eH(),se=ee(oe);Kr(se,{get cells(){return E().cells},get shape(){return _(s)}});var we=F(se);Kr(we,{get cells(){return E().cells2},get shape(){return _(s)}}),D(te,oe)};Q(T,te=>{C()===_(i)&&te(G)})}var K=F(T);Kr(K,{get cells(){return E().cells},get shape(){return _(o)}});var U=F(K);Ns(U,{value:x,get x(){return _(h).x},get y(){return _(h).y},position:"BR",get fontColor(){return _(d)},fontWeight:y});var H=F(U);Kr(H,{get cells(){return E().cells2},get shape(){return _(o)}});var re=F(H);Ns(re,{value:x,get x(){return _(m).x},get y(){return _(m).y},position:"BR",get fontColor(){return _(d)},fontWeight:y}),P(N),D(t,N),le()}var rH=ne('<g class="element-group"><!></g>'),iH=ne('<g class="underlay-layer"></g>');function oH(t,e){ae(e,!1);const n=We(),r=()=>ge(aF,"$underlayElementsStore",n),i=()=>ge(wi,"$enableFogMaskStore",n),o=A(),s=A();L(()=>r(),()=>{I(o,r())}),L(()=>i(),()=>{I(s,i())}),Ce(),he();var l=iH();Qe(l,5,()=>_(o),mt,(u,d)=>{var f=Ee(),g=ee(f);{var h=m=>{var E=rH(),C=Y(E);{var w=x=>{var N=Ee(),T=ee(N);Qe(T,1,()=>Object.entries(_(d).constraints),G=>G[0],(G,K)=>{kB(G,{get tool(){return _(K)[1]},get c_id(){return _(K)[0]}})}),D(x,N)},y=x=>{var N=Ee(),T=ee(N);{var G=U=>{var H=Ee(),re=ee(H);Qe(re,1,()=>Object.entries(_(d).constraints),te=>te[0],(te,oe)=>{BB(te,{get tool(){return _(oe)[1]},get c_id(){return _(oe)[0]}})}),D(U,H)},K=U=>{var H=Ee(),re=ee(H);{var te=se=>{var we=Ee(),Z=ee(we);Qe(Z,1,()=>Object.entries(_(d).constraints),ye=>ye[0],(ye,be)=>{ZB(ye,{get tool(){return _(be)[1]},get c_id(){return _(be)[0]}})}),D(se,we)},oe=se=>{var we=Ee(),Z=ee(we);{var ye=Ie=>{var Oe=Ee(),Ae=ee(Oe);Qe(Ae,1,()=>Object.entries(_(d).constraints),De=>De[0],(De,Ge)=>{JB(De,{get tool(){return _(Ge)[1]},get c_id(){return _(Ge)[0]}})}),D(Ie,Oe)},be=Ie=>{var Oe=Ee(),Ae=ee(Oe);{var De=ot=>{var lt=Ee(),ct=ee(lt);Qe(ct,1,()=>Object.entries(_(d).constraints),_t=>_t[0],(_t,wt)=>{nH(_t,{get tool(){return _(wt)[1]},get c_id(){return _(wt)[0]}})}),D(ot,lt)},Ge=ot=>{var lt=Ee(),ct=ee(lt);{var _t=wt=>{var yt=Ee(),yn=ee(yt);Qe(yn,1,()=>Object.entries(_(d).constraints),dn=>dn[0],(dn,yr)=>{cm(dn,{get tool(){return _(yr)[1]},get c_id(){return _(yr)[0]}})}),D(wt,yt)};Q(ct,wt=>{Zr(_(d).tool_id)&&wt(_t)},!0)}D(ot,lt)};Q(Ae,ot=>{$s(_(d).tool_id)?ot(De):ot(Ge,!1)},!0)}D(Ie,Oe)};Q(Z,Ie=>{To(_(d).tool_id)?Ie(ye):Ie(be,!1)},!0)}D(se,we)};Q(re,se=>{ko(_(d).tool_id)?se(te):se(oe,!1)},!0)}D(U,H)};Q(T,U=>{No(_(d).tool_id)?U(G):U(K,!1)},!0)}D(x,N)};Q(C,x=>{Wd(_(d).tool_id)?x(w):x(y,!1)})}P(E),J(()=>S(E,"data-toolId",_(d).tool_id)),D(m,E)};Q(g,m=>{!_(d).disabled&&_(d).constraints&&m(h)})}D(u,f)}),P(l),J(()=>S(l,"mask",_(s)?"url(#fog-mask-fog)":null)),D(t,l),le()}var sH=ne('<g class="center-corner-or-edge-tool-remove-preview svelte-1mo54mm"><!></g>'),aH=ne('<g class="center-corner-or-edge-tool-preview"><!></g>');function lH(t,e){ae(e,!1);const n=A(),r=A(),i=A(),o=A();let s=M(e,"tool_preview",8);L(()=>V(s()),()=>{I(n,s().tool)}),L(()=>V(s()),()=>{I(r,s().mode)}),L(()=>V(s()),()=>{I(i,s().match_id)}),L(()=>_(n),()=>{I(o,_(n).cell)}),Ce(),he();var l=Ee(),u=ee(l);{var d=g=>{var h=sH();S(h,"opacity",.5);var m=Y(h);oc(m,{get cx(){return _(o).c},get cy(){return _(o).r},get c_id(){return _(i)}}),P(h),D(g,h)},f=g=>{var h=aH();S(h,"opacity",.5);var m=Y(h);lm(m,{get tool(){return _(n)}}),P(h),D(g,h)};Q(u,g=>{_(r)==="remove"&&_(i)?g(d):g(f,!1)})}D(t,l),le()}var cH=ne('<line class="positive-diagonal"></line>'),uH=ne('<line class="negative-diagonal"></line>'),dH=ne('<g class="element-group"><!></g>');function _H(t,e){ae(e,!1);const n=We(),r=()=>ge(hn,"$gridStore",n),i=A(),o=A(),s=A(),l=A(),u=A(),d=A(),f=A(),g=A(),h=A(),m=A();let E=M(e,"element",8);const C=0,w=0,y=0,x=0;L(()=>V(E()),()=>{I(i,E().tool_id)}),L(()=>(V(E()),Eh),()=>{I(o,un(E().tool_id,Bt)??Eh)}),L(()=>_(o),()=>{var U;I(s,((U=_(o))==null?void 0:U.strokeWidth)??.02)}),L(()=>_(o),()=>{var U;I(l,((U=_(o))==null?void 0:U.stroke)??"black")}),L(()=>r(),()=>{I(u,r())}),L(()=>(_(i),v),()=>{I(d,_(i)===v.POSITIVE_DIAGONAL||_(i)===v.POSITIVE_ANTIDIAGONAL||_(i)===v.PARITY_MIRROR_POSITIVE_DIAGONAL)}),L(()=>_(u),()=>{I(f,_(u).nCols)}),L(()=>_(u),()=>{I(g,_(u).nRows)}),L(()=>_(u),()=>{I(h,_(u).nCols)}),L(()=>_(u),()=>{I(m,_(u).nRows)}),Ce(),he();var N=dH(),T=Y(N);{var G=U=>{var H=cH();S(H,"x2",x),S(H,"y1",y),J(()=>{S(H,"x1",_(f)),S(H,"y2",_(g)),S(H,"stroke",_(l)),S(H,"stroke-width",_(s))}),D(U,H)},K=U=>{var H=uH();S(H,"x1",C),S(H,"y1",w),J(()=>{S(H,"x2",_(h)),S(H,"y2",_(m)),S(H,"stroke",_(l)),S(H,"stroke-width",_(s))}),D(U,H)};Q(T,U=>{_(d)?U(G):U(K,!1)})}P(N),J(()=>S(N,"data-toolId",E().tool_id)),D(t,N),le()}function fH(t,e){ae(e,!1);const n=We(),r=()=>ge(hF,"$diagonalElementsStore",n),i=A();L(()=>r(),()=>{I(i,r())}),Ce();var o=Ee(),s=ee(o);Qe(s,1,()=>_(i),mt,(l,u)=>{var d=Ee(),f=ee(d);{var g=h=>{_H(h,{get element(){return _(u)}})};Q(f,h=>{_(u).disabled||h(g)})}D(l,d)}),D(t,o),le()}var gH=ne('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function hH(t){var e=gH(),n=Y(e);S(n,"opacity",.5),P(e),D(t,e)}var vH=ne('<mask id="fog-mask-fog" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" class="svelte-1qi1v0f"><rect class="fog-mask-white svelte-1qi1v0f"></rect><g class="fog-mask-black svelte-1qi1v0f"><use href="#fog-edge"></use></g></mask>'),pH=ne('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge"><use class="fog-edge-1 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-2 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-3 svelte-1qi1v0f" href="#fog-shape"></use><use class="fog-edge-4 svelte-1qi1v0f" href="#fog-shape"></use><use href="#fog-shape"></use></g><!><mask id="fog-mask-light" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1qi1v0f"></rect><rect class="fog-mask-black svelte-1qi1v0f" mask="url(#fog-mask-fog)"></rect></mask></defs>');function mH(t,e){ae(e,!1);const n=We(),r=()=>ge(wi,"$enableFogMaskStore",n),i=()=>ge(Zl,"$solutionStore",n),o=()=>ge(hn,"$gridStore",n),s=()=>ge(Xp,"$fogLightsStore",n),l=()=>ge(lF,"$customFogClearingStore",n),u=()=>ge(Yn,"$cellsStore",n),d=A(),f=A(),g=A(),h=A(),m=A(),E=A(),C=A(),w=A();let y=M(e,"gridShape",8);function x(Ae){const De=[];if(!Ae)return De;const Ge=Ae.constraints;for(const ot of Object.entries(Ge)){const lt=ot[1].cell,ct=_(g).getCell(lt.r,lt.c);ct&&De.push(ct)}return De}function N(Ae){const De=[];for(const Ge of Ae)Ge.value!==null&&!Ge.given&&De.push(Ge);return De}function T(Ae,De){const Ge=[];if(De)for(const ot of Ae){const lt=De[ot.r][ot.c];lt!==null&&ot.value===lt&&!ot.given&&Ge.push(ot)}return Ge}function G(Ae,De,Ge){const ot=x(De);let lt=new Set(Ae);lt=lt.difference(new Set(ot));let ct=N(Ae);_(f)&&(ct=T(ct,_(f)));const _t=Ge==null?void 0:Ge.negative_constraints;if(_t){const yt=new Set;!!_t[v.FOG_CLEARING_ITSELF]&&ct.forEach(xe=>yt.add(xe)),!!_t[v.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS]&&ct.forEach(xe=>_(g).getOrthogonallyAdjacentCells(xe).forEach(ke=>yt.add(ke))),!!_t[v.FOG_CLEARING_DIAGONAL_NEIGHBOURS]&&ct.forEach(xe=>_(g).getDiagonallyAdjacentCells(xe).forEach(ke=>yt.add(ke))),!!_t[v.FOG_CLEARING_CONTAINING_ROW]&&ct.forEach(xe=>_(g).getRow(xe.r).forEach(ke=>yt.add(ke))),!!_t[v.FOG_CLEARING_CONTAINING_COLUMN]&&ct.forEach(xe=>_(g).getCol(xe.c).forEach(ke=>yt.add(ke))),!!_t[v.FOG_CLEARING_KNIGHTS_MOVE]&&ct.forEach(xe=>_(g).getCellsByKnightMove(xe).forEach(ke=>yt.add(ke))),lt=lt.difference(yt)}return[...lt].map(yt=>yt.toCoords())}L(()=>r(),()=>{I(d,!r())}),L(()=>i(),()=>{I(f,i())}),L(()=>o(),()=>{I(g,o())}),L(()=>s(),()=>{I(h,s())}),L(()=>l(),()=>{I(m,l())}),L(()=>u(),()=>{I(C,u())}),L(()=>(_(C),_(h),_(m)),()=>{I(w,G(_(C),_(h),_(m)))}),L(()=>_(w),()=>{I(E,So(_(w),0))}),Ce(),he();var K=pH(),U=Y(K),H=Y(U);P(U);var re=F(U),te=Y(re);S(te,"stroke-width",.4);var oe=F(te);S(oe,"stroke-width",.3);var se=F(oe);S(se,"stroke-width",.2);var we=F(se);S(we,"stroke-width",.1),Vr(),P(re);var Z=F(re);{var ye=Ae=>{var De=vH();S(De,"x",0),S(De,"y",0);var Ge=Y(De);S(Ge,"x",0),S(Ge,"y",0),Vr(),P(De),J(()=>{S(De,"width",y().nCols),S(De,"height",y().nRows),Et(De,"disabled",_(d)),S(Ge,"width",y().nCols),S(Ge,"height",y().nRows)}),D(Ae,De)};Q(Z,Ae=>{_(d)||Ae(ye)})}var be=F(Z);S(be,"x",0),S(be,"y",0);var Ie=Y(be);S(Ie,"x",0),S(Ie,"y",0);var Oe=F(Ie);S(Oe,"x",0),S(Oe,"y",0),P(be),P(K),J(()=>{S(H,"d",_(E)),S(be,"width",y().nCols),S(be,"height",y().nRows),S(Ie,"width",y().nCols),S(Ie,"height",y().nRows),S(Oe,"width",y().nCols),S(Oe,"height",y().nRows)}),D(t,K),le()}var EH=ne('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function bH(t,e){ae(e,!1);const n=We(),r=()=>ge(wi,"$enableFogMaskStore",n),i=A();let o=M(e,"gridShape",8);L(()=>r(),()=>{I(i,r())}),Ce(),he();var s=EH(),l=Y(s);S(l,"x",0),S(l,"y",0),P(s),J(()=>{S(l,"width",o().nCols),S(l,"height",o().nRows)}),D(t,s),le()}var CH=ne('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!><!></svg>');function wH(t,e){ae(e,!1);const n=We(),r=()=>ge(hn,"$gridStore",n),i=()=>ge(Qs,"$boundingBoxStore",n),o=()=>ge(Yn,"$cellsStore",n),s=()=>ge(Xp,"$fogLightsStore",n),l=()=>ge(gF,"$cornerLineToolsStore",n),u=()=>ge(dF,"$edgeToolsStore",n),d=()=>ge(fF,"$cornerToolsStore",n),f=()=>ge(_F,"$centerCornerOrEdgeToolsStore",n),g=()=>ge(on,"$toolStore",n),h=()=>ge(Is,"$outsideDirectionToolPreviewStore",n),m=()=>ge(tl,"$simpleCellToolPreviewStore",n),E=()=>ge(nl,"$singleCellArrowPreviewStore",n),C=()=>ge(rl,"$singleCellMultiArrowPreviewStore",n),w=()=>ge(il,"$edgeToolPreviewStore",n),y=()=>ge(ol,"$cornerToolPreviewStore",n),x=()=>ge(sl,"$centerCornerOrEdgeToolPreviewStore",n),N=A(),T=A(),G=A();let K=M(e,"svgRef",12,null);function U(tt){return`${tt.x} ${tt.y} ${tt.width} ${tt.height}`}L(()=>r(),()=>{I(N,r())}),L(()=>_(N),()=>{I(T,{nRows:_(N).nRows,nCols:_(N).nCols})}),L(()=>i(),()=>{I(G,i())}),Ce(),he();var H=CH();J(()=>S(H,"viewBox",U(_(G))));var re=Y(H);hH(re);var te=F(re);mH(te,{get gridShape(){return _(T)}});var oe=F(te);ZP(oe,{get grid(){return r()}});var se=F(oe);bH(se,{get gridShape(){return _(T)}});var we=F(se);SP(we,{get gridShape(){return _(T)}});var Z=F(we);Qe(Z,5,o,mt,(tt,es)=>{x4(tt,{get cell(){return _(es)}})}),P(Z);var ye=F(Z);Y4(ye,{});var be=F(ye);oB(be,{get element(){return s()}});var Ie=F(be);oH(Ie,{});var Oe=F(Ie);fH(Oe,{});var Ae=F(Oe);RP(Ae,{});var De=F(Ae);KP(De,{});var Ge=F(De);Xa(Ge,{get elements(){return l()},g_name:"corner-line-tools-layer",Component:P6});var ot=F(Ge);qP(ot,{get gridShape(){return _(T)}});var lt=F(ot);xP(lt,{});var ct=F(lt);Xa(ct,{get elements(){return u()},g_name:"edge-tools-layer",Component:q6});var _t=F(ct);Xa(_t,{get elements(){return d()},g_name:"corner-tools-layer",Component:O6});var wt=F(_t);Xa(wt,{get elements(){return f()},g_name:"center-corner-edge-tools-layer",Component:L6});var yt=F(wt);B4(yt,{});var yn=F(yt);Qe(yn,5,o,mt,(tt,es)=>{y4(tt,{get cell(){return _(es)}})}),P(yn);var dn=F(yn);a6(dn,{});var yr=F(dn);r6(yr,{});var Ir=F(yr);{var Ur=tt=>{cm(tt,{get tool(){return h()}})};Q(Ir,tt=>{Zr(g())&&h()&&tt(Ur)})}var Be=F(Ir);{var xe=tt=>{SB(tt,{get tool_preview(){return m()}})};Q(Be,tt=>{xl(g())&&g()!==v.FOG_LIGHTS&&m()&&tt(xe)})}var ke=F(Be);{var He=tt=>{mB(tt,{get tool_preview(){return E()}})};Q(ke,tt=>{Hi(g())&&E()&&tt(He)})}var Tt=F(ke);{var ta=tt=>{dm(tt,{get tool(){return C()}})};Q(Tt,tt=>{Lo(g())&&C()&&tt(ta)})}var na=F(Tt);{var Ii=tt=>{cB(tt,{get tool_preview(){return w()}})};Q(na,tt=>{Ro(g())&&w()&&tt(Ii)})}var In=F(na);{var Oi=tt=>{_B(tt,{get tool_preview(){return y()}})};Q(In,tt=>{Ts(g())&&y()&&tt(Oi)})}var qi=F(In);{var lc=tt=>{lH(tt,{get tool_preview(){return x()}})};Q(qi,tt=>{Ms(g())&&x()&&tt(lc)})}P(H),qr(H,tt=>K(tt),()=>K()),D(t,H),le()}function yH(t){return zO(t)?(DI(),!0):!1}function IH(t){return PO(t)?(Bp(),!0):!1}function OH(t){return BO(t)?(Hp(),!0):!1}function qu(t){(yH(t)||IH(t)||OH(t))&&(t.stopImmediatePropagation(),t.preventDefault())}function xH(t,e){if(!e)return;const n=wn(t,e);if(!n)return;const r=t.ctrlKey,i=-t.deltaY,o=i>0?1.1:i<0?1/1.1:0;return{event:t,point:n,ctrl:r,zoom_factor:o,delta:i}}class AH{constructor(){pe(this,"onTap",null);pe(this,"onDragStart",null);pe(this,"onDrag",null);pe(this,"onDragEnd",null);pe(this,"onMove",null);pe(this,"onWheel",null);pe(this,"_isDown",!1);pe(this,"_lastPoint",null);pe(this,"_pointerId",null)}pointerDown(e,n){if(e.button!==1||!n)return;const r=new Ue(e.clientX,e.clientY);if(r&&(this._pointerId=e.pointerId,e.currentTarget instanceof Element&&e.currentTarget.setPointerCapture(e.pointerId),this._isDown=!0,this._lastPoint=r,this.onDragStart)){const i={event:e,point:r};this.onDragStart(i)}}pointerMove(e,n){if(!this._isDown||this._pointerId!==null&&e.pointerId!==this._pointerId||!n)return;const r=new Ue(e.clientX,e.clientY);if(!r||!this._lastPoint)return;const i=r.subtract(this._lastPoint),o={event:e,point:i};this._lastPoint=r,this.onDrag&&this.onDrag(o)}pointerUp(e){this._pointerId!==null&&e.pointerId!==this._pointerId||e.button===1&&(this._pointerId!==null&&e.currentTarget instanceof Element&&e.currentTarget.releasePointerCapture(this._pointerId),this._isDown&&(this._isDown=!1,this.onDragEnd&&this.onDragEnd()),this._lastPoint=null,this._pointerId=null)}wheel(e,n){const r=xH(e,n);r&&this.onWheel&&this.onWheel(r)}}const go=new AH;function SH(t){go.onDrag=r=>{J8(r)},go.onWheel=r=>{Z8(r),Q8(r)};const e=At.throttle(r=>{go.pointerMove(r,t)},10);return{pointerDown(r){r.button===1&&r.preventDefault(),go.pointerDown(r,t)},pointerMove(r){e(r)},pointerUp(r){go.pointerUp(r)},keyUp(){},keyDown(){},wheelEvent(r){go.wheel(r,t)}}}var DH=ce('<button class="form-button zoom-reset svelte-11c686j">Reset zoom</button>'),LH=ce('<div class="board-container svelte-11c686j" tabindex="-1"><!> <!></div>');function RH(t,e){ae(e,!1);const n=We(),r=()=>ge(Qp,"$InputHandlerStore",n),i=()=>ge(Io,"$svgRefStore",n),o=()=>ge(Ao,"$currentScaleStore",n),s=A(),l=A();let u=A(null);function d(y){return x=>{y&&_(s)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===_(u))&&y(x)}}function f(){I_()}L(()=>r(),()=>{I(s,r())}),L(()=>i(),()=>{I(l,SH(i()))}),Ce(),he();var g=LH();Re("keydown",Lu,function(...y){qu==null||qu.apply(this,y)});var h=_h(()=>{var y;return d((y=_(s))==null?void 0:y.keyDown)});Re("keydown",Lu,function(...y){var x;(x=_(h))==null||x.apply(this,y)});var m=_h(()=>{var y;return d((y=_(s))==null?void 0:y.keyUp)});Re("keyup",Lu,function(...y){var x;(x=_(m))==null||x.apply(this,y)});var E=Y(g);wH(E,{get svgRef(){return _v(),i()},set svgRef(y){Co(Io,y)},$$legacy:!0});var C=F(E,2);{var w=y=>{var x=DH();Re("click",x,_o(Cn(f)),!0),D(y,x)};Q(C,y=>{o()!==1&&y(w)})}P(g),qr(g,y=>I(u,y),()=>_(u)),Re("pointerdown",g,_o(y=>{_(l).pointerDown(y)}),!0),Re("pointermove",g,y=>{_(l).pointerMove(y)},!0),Re("pointerup",g,y=>{_(l).pointerUp(y)},!0),Re("pointercancel",g,y=>{_(l).pointerUp(y)},!0),Re("wheel",g,_o(Cn(y=>{y.currentTarget.focus(),_(l).wheelEvent&&_(l).wheelEvent(y)})),!0),Re("pointerdown",g,_o(Cn(y=>{var x;y.currentTarget.focus(),(x=_(s))==null||x.pointerDown(y)})),!0),Re("pointermove",g,_o(Cn(y=>{var x;y.currentTarget.focus(),(x=_(s))==null||x.pointerMove(y)})),!0),Re("pointerup",g,_o(Cn(y=>{var x;y.currentTarget.focus(),(x=_(s))==null||x.pointerUp(y)})),!0),D(t,g),le()}var NH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-222 130-470l68-68 180 180 383-383 68 68-451 451Z"></path></svg>');function kH(t){var e=NH();D(t,e)}var TH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function MH(t){var e=TH();D(t,e)}var $H=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function UH(t){var e=$H();D(t,e)}var GH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function FH(t){var e=GH();D(t,e)}var zH=ce('<div class="controls-aux-pad svelte-1vhd5kf"><button class="entry-panel-button controls-aux-button undo svelte-1vhd5kf" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-1vhd5kf" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-1vhd5kf" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-1vhd5kf" title="Select"><!></button></div>');function PH(t,e){ae(e,!1);const n=We(),r=()=>ge(Ko,"$commandHistoryStore",n),i=()=>ge(pd,"$selectOnStore",n),o=A(),s=A();function l(){Bp()}function u(){Hp()}function d(){console.log("check")}function f(){Co(pd,!i())}L(()=>r(),()=>{I(o,r()._undoStack.length===0)}),L(()=>r(),()=>{I(s,r()._redoStack.length===0)}),Ce(),he();var g=zH(),h=Y(g),m=Y(h);FH(m),P(h);var E=F(h,2),C=Y(E);MH(C),P(E);var w=F(E,2);w.disabled=!0;var y=Y(w);kH(y),P(w);var x=F(w,2),N=Y(x);UH(N),P(x),P(g),J(()=>{h.disabled=_(o),E.disabled=_(s),S(x,"aria-checked",i()),Et(x,"active",i())}),Re("click",h,l),Re("click",E,u),Re("click",w,d),Re("click",x,f),D(t,g),le()}var BH=ce('<label class="entry-panel-label number-pad-button number-pad-selector svelte-15wmkv0"><input type="radio" class="svelte-15wmkv0"> <div class="selector-color svelte-15wmkv0"></div></label>'),HH=ce('<button class="entry-panel-button number-pad-button svelte-15wmkv0"><div class="digit-button-text svelte-15wmkv0"> </div> <div class="digit-button-color svelte-15wmkv0"></div></button>'),WH=ce('<button role="switch" class="entry-panel-button letter-button svelte-15wmkv0" value="Letter"><span class="num svelte-15wmkv0">9</span>/<span class="letter svelte-15wmkv0">A</span></button>'),YH=ce('<div class="number-pad svelte-15wmkv0"><!> <!>  <button class="entry-panel-button delete-button svelte-15wmkv0" value="Delete"><svg class="icon svelte-15wmkv0" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function jH(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n),i=()=>ge(pl,"$penColorStore",n),o=()=>ge(Qp,"$InputHandlerStore",n),s=A(),l=A(),u=[];let d=M(e,"selectedTool",8);const f=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let h=A(!1);function m(U){return U?g:f}function E(U){return[v.DIGIT,v.CENTER_PM,v.CORNER_PM,v.GIVEN].includes(U)}function C(U){const H=U.currentTarget;if(!H)return;const re=H.getAttribute("aria-checked");I(h,re!=="true")}L(()=>r(),()=>{I(s,r().penToolActive)}),L(()=>r(),()=>{I(l,r().letterToolActive)}),Ce(),he();var w=YH(),y=Y(w);{var x=U=>{var H=Ee(),re=ee(H);Qe(re,1,()=>f,mt,(te,oe)=>{var se=BH(),we=Y(se);cn(we);var Z;Vr(2),P(se),J(()=>{S(se,"data-value",_(oe)),Et(se,"active",i()===_(oe)),Z!==(Z=_(oe))&&(we.value=(we.__value=_(oe))==null?"":_(oe))}),Ad(u,[],we,()=>(_(oe),i()),ye=>Co(pl,ye)),D(te,se)}),D(U,H)},N=U=>{var H=Ee(),re=ee(H);Qe(re,1,()=>m(_(h)),mt,(te,oe)=>{var se=HH(),we=Y(se),Z=Y(we,!0);P(we),Vr(2),P(se),J(()=>{Qu(se,_(oe)),rt(Z,_(oe))}),Re("click",se,function(...ye){var be;(be=o()&&o().padClick)==null||be.apply(this,ye)}),D(te,se)}),D(U,H)};Q(y,U=>{d()===v.PEN_TOOL&&_(s)?U(x):U(N,!1)})}var T=F(y,2);{var G=U=>{var H=WH();J(()=>{S(H,"aria-checked",_(h)),Et(H,"letter-checked",_(h)),Et(H,"num-checked",!_(h))}),Re("click",H,C),D(U,H)};Q(T,U=>{_(l)&&E(d())&&U(G)})}var K=F(T,2);P(w),J(()=>{Et(w,"digit",d()===v.DIGIT),Et(w,"center",d()===v.CENTER_PM),Et(w,"corner",d()===v.CORNER_PM),Et(w,"color",d()===v.HIGHLIGHTS),Et(w,"pen",d()===v.PEN_TOOL),Et(K,"letter-tool",_(l))}),Re("click",K,function(...U){var H;(H=o()&&o().padClick)==null||H.apply(this,U)}),D(t,w),le()}var KH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function VH(t){var e=KH();D(t,e)}var qH=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function XH(t){var e=qH();D(t,e)}var ZH=ce('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Es(t,e){ae(e,!1);const n=[];let r=M(e,"selectedTool",12),i=M(e,"value",8),o=M(e,"title",8,void 0);function s(){md(i())}he();var l=ZH(),u=Y(l);cn(u);var d,f=F(u,2);Ot(f,e,"default",{}),P(l),J(()=>{S(l,"title",o()),Et(l,"active",i()===r()),d!==(d=i())&&(u.value=(u.__value=i())==null?"":i())}),Ad(n,[],u,()=>(i(),r()),r),Re("change",u,s),D(t,l),le()}var QH=ce('<span aria-hidden="true">1</span>'),JH=ce('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),eW=ce('<span aria-hidden="true" style="font-size: 50%">123</span>'),tW=ce('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),nW=ce('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),rW=ce('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function iW(t,e){ae(e,!1);const n=We(),r=()=>ge(Ln,"$settingsStore",n);let i=M(e,"selectedTool",12);he();var o=rW(),s=Y(o);Es(s,{get value(){return v.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=QH();D(h,E)},$$slots:{default:!0},$$legacy:!0});var l=F(s,2);Es(l,{get value(){return v.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=JH();D(h,E)},$$slots:{default:!0},$$legacy:!0});var u=F(l,2);Es(u,{get value(){return v.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=eW();D(h,E)},$$slots:{default:!0},$$legacy:!0});var d=F(u,2);Es(d,{get value(){return v.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=tW(),C=Y(E);VH(C),P(E),D(h,E)},$$slots:{default:!0},$$legacy:!0});var f=F(d,2);{var g=h=>{Es(h,{get value(){return v.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var C=nW(),w=Y(C);XH(w),P(C),D(m,C)},$$slots:{default:!0},$$legacy:!0})};Q(f,h=>{r().penToolActive&&h(g)})}P(o),D(t,o),le()}var oW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function sW(t){var e=oW();D(t,e)}var aW=ce('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function sc(t,e){let n=M(e,"title",8,void 0),r=M(e,"clickCb",8,void 0);var i=aW(),o=Y(i),s=Y(o);Ot(s,e,"default",{}),P(o),P(i),J(()=>S(i,"title",n())),Re("click",i,function(...l){var u;(u=r())==null||u.apply(this,l)}),D(t,i)}var lW=ce('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),cW=ce('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function uW(t,e){ae(e,!1);let n=M(e,"showModal",12,!1);function r(){n(!1)}function i(){Yp(),ml(),n(!1)}he(),yi(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,s)=>{var l=cW(),u=F(Y(l),2);y_(u,{children:(d,f)=>{var g=lW(),h=ee(g),m=F(h,2);Re("click",h,i),Re("click",m,r),D(d,g)},$$slots:{default:!0}}),P(l),D(o,l)},$$slots:{default:!0},$$legacy:!0}),le()}var dW=ce("<!> <!>",1);function _W(t){let e=A(!1);function n(){I(e,!0)}var r=dW(),i=ee(r);sc(i,{title:"Restart",clickCb:n,children:(s,l)=>{sW(s)},$$slots:{default:!0}});var o=F(i,2);uW(o,{get showModal(){return _(e)},set showModal(s){I(e,s)},$$legacy:!0}),D(t,r)}var fW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function gW(t){var e=fW();D(t,e)}var hW=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function vW(t){var e=hW();D(t,e)}function pW(t){let e=A(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),I(e,!_(e))}sc(t,{title:"Fullscreen",clickCb:o,children:(s,l)=>{var u=Ee(),d=ee(u);{var f=h=>{vW(h)},g=h=>{gW(h)};Q(d,h=>{_(e)?h(f):h(g,!1)})}D(s,u)},$$slots:{default:!0}})}function vm(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"renderers",8),i=M(e,"options",8);he();var o=Ee(),s=ee(o);{var l=u=>{var d=Ee(),f=ee(d);Od(f,()=>r()[n().type],(g,h)=>{h(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var C=Ee(),w=ee(C);{var y=N=>{Cl(N,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},x=N=>{var T=gI();J(()=>rt(T,n().raw)),D(N,T)};Q(w,N=>{"tokens"in n()&&n().tokens?N(y):N(x,!1)})}D(m,C)},$$slots:{default:!0}})}),D(u,d)};Q(s,u=>{r()[n().type]&&u(l)})}D(t,o),le()}function Cl(t,e){let n=M(e,"tokens",8),r=M(e,"renderers",8),i=M(e,"options",8);var o=Ee(),s=ee(o);{var l=u=>{var d=Ee(),f=ee(d);Qe(f,1,n,mt,(g,h)=>{vm(g,{get token(){return _(h)},get renderers(){return r()},get options(){return i()}})}),D(u,d)};Q(s,u=>{n()&&u(l)})}D(t,o)}function pm(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function mm(t){return t.startsWith("/")||t.startsWith("#")}function mW(t,e){return e.slug(t).replace(/--+/g,"-")}function EW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;let o=A();L(()=>(V(n()),V(r())),()=>{I(o,mW(n().text,r().slugger))}),Ce(),he();var s=Ee(),l=ee(s);return gv(l,()=>`h${n().depth}`,!1,(u,d)=>{let f;J(()=>f=fv(u,f,{id:_(o)},void 0,u.namespaceURI===yd,u.nodeName.includes("-")));var g=Ee(),h=ee(g);Ot(h,e,"default",{}),D(d,g)}),D(t,s),st(e,"renderers",i),le({renderers:i})}var bW=ce("<blockquote><!></blockquote>");function CW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=bW(),s=Y(o);return Ot(s,e,"default",{}),P(o),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}function wW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8),o=A();L(()=>V(n()),()=>{I(o,n().ordered?"ol":"ul")}),Ce(),he();var s=Ee(),l=ee(s);gv(l,()=>_(o),!1,(u,d)=>{let f;J(()=>f=fv(u,f,{start:n().start||1},void 0,u.namespaceURI===yd,u.nodeName.includes("-")));var g=Ee(),h=ee(g);Qe(h,1,()=>n().items,mt,(m,E)=>{var C=gt(()=>({..._(E)}));vm(m,{get token(){return _(C)},get options(){return r()},get renderers(){return i()}})}),D(d,g)}),D(t,s),le()}var yW=ce("<li><!></li>");function IW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=yW(),s=Y(o);return Ot(s,e,"default",{}),P(o),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var OW=ce("<br>");function xW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=OW();return D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var AW=ce("<pre><code> </code></pre>");function SW(t,e){ae(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=AW(),s=Y(o),l=Y(s,!0);return P(s),P(o),J(()=>{hv(s,`lang-${n().lang}`),rt(l,n().text)}),D(t,o),st(e,"options",r),st(e,"renderers",i),le({options:r,renderers:i})}var DW=ce("<code> </code>");function LW(t,e){ae(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=DW(),s=Y(o,!0);return J(()=>rt(s,n().raw.slice(1,n().raw.length-1))),P(o),D(t,o),st(e,"options",r),st(e,"renderers",i),le({options:r,renderers:i})}var RW=ce('<th scope="col"><!></th>'),NW=ce("<td><!></td>"),kW=ce("<tr></tr>"),TW=ce("<table><thead><tr></tr></thead><tbody></tbody></table>");function MW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8);he();var o=TW(),s=Y(o),l=Y(s);Qe(l,5,()=>n().header,mt,(d,f)=>{var g=RW(),h=Y(g);Cl(h,{get tokens(){return _(f).tokens},get options(){return r()},get renderers(){return i()}}),P(g),D(d,g)}),P(l),P(s);var u=F(s);Qe(u,5,()=>n().rows,mt,(d,f)=>{var g=kW();Qe(g,5,()=>_(f),mt,(h,m)=>{var E=NW(),C=Y(E);Cl(C,{get tokens(){return _(m).tokens},get options(){return r()},get renderers(){return i()}}),P(E),D(h,E)}),P(g),D(d,g)}),P(u),P(o),D(t,o),le()}function $W(t,e){ae(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=Ee(),s=ee(o);return MI(s,()=>n().text),D(t,o),st(e,"options",r),st(e,"renderers",i),le({options:r,renderers:i})}var UW=ce("<p><!></p>");function GW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=UW(),s=Y(o);return Ot(s,e,"default",{}),P(o),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var FW=ce("<a><!></a>");function zW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=FW();J(()=>S(o,"href",mm(n().href)?pm(r().baseUrl,n().href):n().href));var s=Y(o);return Ot(s,e,"default",{}),P(o),J(()=>S(o,"title",n().title)),D(t,o),st(e,"renderers",i),le({renderers:i})}function PW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ee(),s=ee(o);return Ot(s,e,"default",{}),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var BW=ce("<dfn><!></dfn>");function HW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=BW(),s=Y(o);return Ot(s,e,"default",{}),P(o),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var WW=ce("<del><!></del>");function YW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=WW(),s=Y(o);return Ot(s,e,"default",{}),P(o),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var jW=ce("<em><!></em>");function KW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=jW(),s=Y(o);return Ot(s,e,"default",{}),P(o),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var VW=ce("<hr>");function qW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=VW();return D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var XW=ce("<strong><!></strong>");function ZW(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=XW(),s=Y(o);return Ot(s,e,"default",{}),P(o),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}var QW=ce('<img class="markdown-image svelte-z38cge">');function JW(t,e){ae(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=QW();return J(()=>S(o,"src",mm(n().href)?pm(r().baseUrl,n().href):n().href)),J(()=>{S(o,"title",n().title),S(o,"alt",n().text)}),D(t,o),st(e,"renderers",i),le({renderers:i})}function tv(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Ee(),s=ee(o);return Ot(s,e,"default",{}),D(t,o),st(e,"token",n),st(e,"options",r),st(e,"renderers",i),le({token:n,options:r,renderers:i})}const e9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,t9=Object.hasOwnProperty;class n9{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=r9(e,n===!0);const o=i;for(;t9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function r9(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(e9,"").replace(/ /g,"-"))}function A_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Vi=A_();function Em(t){Vi=t}const bm=/[&<>"']/,i9=new RegExp(bm.source,"g"),Cm=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,o9=new RegExp(Cm.source,"g"),s9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nv=t=>s9[t];function Hn(t,e){if(e){if(bm.test(t))return t.replace(i9,nv)}else if(Cm.test(t))return t.replace(o9,nv);return t}const a9=/(^|[^\[])\^/g;function Nt(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let s=typeof o=="string"?o:o.source;return s=s.replace(a9,"$1"),n=n.replace(i,s),r},getRegex:()=>new RegExp(n,e)};return r}function rv(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Ds={exec:()=>null};function iv(t,e){const n=t.replace(/\|/g,(o,s,l)=>{let u=!1,d=s;for(;--d>=0&&l[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function bs(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function l9(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function ov(t,e,n,r){const i=e.href,o=e.title?Hn(e.title):null,s=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:n,href:i,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,l}return{type:"image",raw:n,href:i,title:o,text:Hn(s)}}function c9(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[s]=o;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class wl{constructor(e){pe(this,"options");pe(this,"rules");pe(this,"lexer");this.options=e||Vi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:bs(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=c9(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=bs(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:bs(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=bs(n[0],`
`).split(`
`),i="",o="";const s=[];for(;r.length>0;){let l=!1;const u=[];let d;for(d=0;d<r.length;d++)if(/^ {0,3}>/.test(r[d]))u.push(r[d]),l=!0;else if(!l)u.push(r[d]);else break;r=r.slice(d);const f=u.join(`
`),g=f.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${f}`:f,o=o?`${o}
${g}`:g;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,s,!0),this.lexer.state.top=h,r.length===0)break;const m=s[s.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,C=E.raw+`
`+r.join(`
`),w=this.blockquote(C);s[s.length-1]=w,i=i.substring(0,i.length-E.raw.length)+w.raw,o=o.substring(0,o.length-E.text.length)+w.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,C=E.raw+`
`+r.join(`
`),w=this.list(C);s[s.length-1]=w,i=i.substring(0,i.length-m.raw.length)+w.raw,o=o.substring(0,o.length-E.raw.length)+w.raw,r=C.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l=!1;for(;e;){let u=!1,d="",f="";if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;d=n[0],e=e.substring(d.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,y=>" ".repeat(3*y.length)),h=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,f=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,f=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(h)&&(d+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const y=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),N=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),T=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const K=e.split(`
`,1)[0];let U;if(h=K,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),U=h):U=h.replace(/\t/g,"    "),N.test(h)||T.test(h)||G.test(h)||y.test(h)||x.test(h))break;if(U.search(/[^ ]/)>=E||!h.trim())f+=`
`+U.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||N.test(g)||T.test(g)||x.test(g))break;f+=`
`+h}!m&&!h.trim()&&(m=!0),d+=K+`
`,e=e.substring(K.length+1),g=U.slice(E)}}o.loose||(l?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(d)&&(l=!0));let C=null,w;this.options.gfm&&(C=/^\[[ xX]\] /.exec(f),C&&(w=C[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:d,task:!!C,checked:w,loose:!1,text:f,tokens:[]}),o.raw+=d}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const d=o.items[u].tokens.filter(g=>g.type==="space"),f=d.length>0&&d.some(g=>/\n.*\n/.test(g.raw));o.loose=f}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=iv(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(let l=0;l<r.length;l++)s.header.push({text:r[l],tokens:this.lexer.inline(r[l]),header:!0,align:s.align[l]});for(const l of o)s.rows.push(iv(l,s.header.length).map((u,d)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:s.align[d]})));return s}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Hn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=bs(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=l9(n[2],"()");if(s>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],o=s[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),ov(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return ov(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let l,u,d=s,f=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+s);(i=g.exec(n))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(u=[...l].length,i[3]||i[4]){d+=u;continue}else if((i[5]||i[6])&&s%3&&!((s+u)%3)){f+=u;continue}if(d-=u,d>0)continue;u=Math.min(u,u+d+f);const h=[...i[0]][0].length,m=e.slice(0,s+i.index+h+u);if(Math.min(s,u)%2){const C=m.slice(1,-1);return{type:"em",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Hn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Hn(n[1]),i="mailto:"+r):(r=Hn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Hn(n[0]),o="mailto:"+i;else{let s;do s=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(s!==n[0]);i=Hn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Hn(n[0]),{type:"text",raw:n[0],text:r}}}}const u9=/^(?:[ \t]*(?:\n|$))+/,d9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,_9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Js=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,f9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wm=/(?:[*+-]|\d{1,9}[.)])/,ym=Nt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,wm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),S_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,g9=/^[^\n]+/,D_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,h9=Nt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",D_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),v9=Nt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,wm).getRegex(),ac="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",L_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,p9=Nt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",L_).replace("tag",ac).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Im=Nt(S_).replace("hr",Js).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ac).getRegex(),m9=Nt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Im).getRegex(),R_={blockquote:m9,code:d9,def:h9,fences:_9,heading:f9,hr:Js,html:p9,lheading:ym,list:v9,newline:u9,paragraph:Im,table:Ds,text:g9},sv=Nt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Js).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ac).getRegex(),E9={...R_,table:sv,paragraph:Nt(S_).replace("hr",Js).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",sv).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ac).getRegex()},b9={...R_,html:Nt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",L_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ds,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Nt(S_).replace("hr",Js).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ym).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Om=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,C9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,xm=/^( {2,}|\\)\n(?!\s*$)/,w9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ea="\\p{P}\\p{S}",y9=Nt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ea).getRegex(),I9=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,O9=Nt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ea).getRegex(),x9=Nt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ea).getRegex(),A9=Nt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ea).getRegex(),S9=Nt(/\\([punct])/,"gu").replace(/punct/g,ea).getRegex(),D9=Nt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),L9=Nt(L_).replace("(?:-->|$)","-->").getRegex(),R9=Nt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",L9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),yl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,N9=Nt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",yl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Am=Nt(/^!?\[(label)\]\[(ref)\]/).replace("label",yl).replace("ref",D_).getRegex(),Sm=Nt(/^!?\[(ref)\](?:\[\])?/).replace("ref",D_).getRegex(),k9=Nt("reflink|nolink(?!\\()","g").replace("reflink",Am).replace("nolink",Sm).getRegex(),N_={_backpedal:Ds,anyPunctuation:S9,autolink:D9,blockSkip:I9,br:xm,code:C9,del:Ds,emStrongLDelim:O9,emStrongRDelimAst:x9,emStrongRDelimUnd:A9,escape:Om,link:N9,nolink:Sm,punctuation:y9,reflink:Am,reflinkSearch:k9,tag:R9,text:w9,url:Ds},T9={...N_,link:Nt(/^!?\[(label)\]\((.*?)\)/).replace("label",yl).getRegex(),reflink:Nt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",yl).getRegex()},Cd={...N_,escape:Nt(Om).replace("])","~|])").getRegex(),url:Nt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},M9={...Cd,br:Nt(xm).replace("{2,}","*").getRegex(),text:Nt(Cd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Za={normal:R_,gfm:E9,pedantic:b9},Cs={normal:N_,gfm:Cd,breaks:M9,pedantic:T9};class jn{constructor(e){pe(this,"tokens");pe(this,"options");pe(this,"state");pe(this,"tokenizer");pe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Vi,this.options.tokenizer=this.options.tokenizer||new wl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Za.normal,inline:Cs.normal};this.options.pedantic?(n.block=Za.pedantic,n.inline=Cs.pedantic):this.options.gfm&&(n.block=Za.gfm,this.options.breaks?n.inline=Cs.breaks:n.inline=Cs.gfm),this.tokenizer.rules=n}static get rules(){return{block:Za,inline:Cs}}static lex(e,n){return new jn(n).lex(e)}static lexInline(e,n){return new jn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const u=e.slice(1);let d;this.options.extensions.startBlock.forEach(f=>{d=f.call({lexer:this},u),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,s=e,l,u,d;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)f.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(d=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>(r=f.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,s,d)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const g=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},g),typeof h=="number"&&h>=0&&(f=Math.min(f,h))}),f<1/0&&f>=0&&(o=e.substring(0,f+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(d=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return n}}class Il{constructor(e){pe(this,"options");pe(this,"parser");this.options=e||Vi}space(e){return""}code({text:e,lang:n,escaped:r}){var s;const i=(s=(n||"").match(/^\S*/))==null?void 0:s[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Hn(i)+'">'+(r?o:Hn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Hn(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let i="";for(let l=0;l<e.items.length;l++){const u=e.items[l];i+=this.listitem(u)}const o=n?"ol":"ul",s=n&&r!==1?' start="'+r+'"':"";return"<"+o+s+`>
`+i+"</"+o+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let o=0;o<e.header.length;o++)r+=this.tablecell(e.header[o]);n+=this.tablerow({text:r});let i="";for(let o=0;o<e.rows.length;o++){const s=e.rows[o];r="";for(let l=0;l<s.length;l++)r+=this.tablecell(s[l]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=rv(e);if(o===null)return i;e=o;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image({href:e,title:n,text:r}){const i=rv(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class k_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class ur{constructor(e){pe(this,"options");pe(this,"renderer");pe(this,"textRenderer");this.options=e||Vi,this.options.renderer=this.options.renderer||new Il,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new k_}static parse(e,n){return new ur(n).parse(e)}static parseInline(e,n){return new ur(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=o,u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){r+=u||"";continue}}const s=o;switch(s.type){case"space":{r+=this.renderer.space(s);continue}case"hr":{r+=this.renderer.hr(s);continue}case"heading":{r+=this.renderer.heading(s);continue}case"code":{r+=this.renderer.code(s);continue}case"table":{r+=this.renderer.table(s);continue}case"blockquote":{r+=this.renderer.blockquote(s);continue}case"list":{r+=this.renderer.list(s);continue}case"html":{r+=this.renderer.html(s);continue}case"paragraph":{r+=this.renderer.paragraph(s);continue}case"text":{let l=s,u=this.renderer.text(l);for(;i+1<e.length&&e[i+1].type==="text";)l=e[++i],u+=`
`+this.renderer.text(l);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=l||"";continue}}const s=o;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return r}}class Ls{constructor(e){pe(this,"options");pe(this,"block");this.options=e||Vi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?jn.lex:jn.lexInline}provideParser(){return this.block?ur.parse:ur.parseInline}}pe(Ls,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class $9{constructor(...e){pe(this,"defaults",A_());pe(this,"options",this.setOptions);pe(this,"parse",this.parseMarkdown(!0));pe(this,"parseInline",this.parseMarkdown(!1));pe(this,"Parser",ur);pe(this,"Renderer",Il);pe(this,"TextRenderer",k_);pe(this,"Lexer",jn);pe(this,"Tokenizer",wl);pe(this,"Hooks",Ls);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const s of e)switch(r=r.concat(n.call(this,s)),s.type){case"table":{const l=s;for(const u of l.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of l.rows)for(const d of u)r=r.concat(this.walkTokens(d.tokens,n));break}case"list":{const l=s;r=r.concat(this.walkTokens(l.items,n));break}default:{const l=s;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[l.type]?this.defaults.extensions.childTokens[l.type].forEach(u=>{const d=l[u].flat(1/0);r=r.concat(this.walkTokens(d,n))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const s=n.renderers[o.name];s?n.renderers[o.name]=function(...l){let u=o.renderer.apply(this,l);return u===!1&&(u=s.apply(this,l)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=n[o.level];s?s.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new Il(this.defaults);for(const s in r.renderer){if(!(s in o))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const l=s,u=r.renderer[l],d=o[l];o[l]=(...f)=>{let g=u.apply(o,f);return g===!1&&(g=d.apply(o,f)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new wl(this.defaults);for(const s in r.tokenizer){if(!(s in o))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,u=r.tokenizer[l],d=o[l];o[l]=(...f)=>{let g=u.apply(o,f);return g===!1&&(g=d.apply(o,f)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new Ls;for(const s in r.hooks){if(!(s in o))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const l=s,u=r.hooks[l],d=o[l];Ls.passThroughHooks.has(s)?o[l]=f=>{if(this.defaults.async)return Promise.resolve(u.call(o,f)).then(h=>d.call(o,h));const g=u.call(o,f);return d.call(o,g)}:o[l]=(...f)=>{let g=u.apply(o,f);return g===!1&&(g=d.apply(o,f)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(l){let u=[];return u.push(s.call(this,l)),o&&(u=u.concat(o.call(this,l))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return jn.lex(e,n??this.defaults)}parser(e,n){return ur.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},s={...this.defaults,...o},l=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&o.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const u=s.hooks?s.hooks.provideLexer():e?jn.lex:jn.lexInline,d=s.hooks?s.hooks.provideParser():e?ur.parse:ur.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(f=>u(f,s)).then(f=>s.hooks?s.hooks.processAllTokens(f):f).then(f=>s.walkTokens?Promise.all(this.walkTokens(f,s.walkTokens)).then(()=>f):f).then(f=>d(f,s)).then(f=>s.hooks?s.hooks.postprocess(f):f).catch(l);try{s.hooks&&(r=s.hooks.preprocess(r));let f=u(r,s);s.hooks&&(f=s.hooks.processAllTokens(f)),s.walkTokens&&this.walkTokens(f,s.walkTokens);let g=d(f,s);return s.hooks&&(g=s.hooks.postprocess(g)),g}catch(f){return l(f)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Hn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Bi=new $9;function Rt(t,e){return Bi.parse(t,e)}Rt.options=Rt.setOptions=function(t){return Bi.setOptions(t),Rt.defaults=Bi.defaults,Em(Rt.defaults),Rt};Rt.getDefaults=A_;Rt.defaults=Vi;Rt.use=function(...t){return Bi.use(...t),Rt.defaults=Bi.defaults,Em(Rt.defaults),Rt};Rt.walkTokens=function(t,e){return Bi.walkTokens(t,e)};Rt.parseInline=Bi.parseInline;Rt.Parser=ur;Rt.parser=ur.parse;Rt.Renderer=Il;Rt.TextRenderer=k_;Rt.Lexer=jn;Rt.lexer=jn.lex;Rt.Tokenizer=wl;Rt.Hooks=Ls;Rt.parse=Rt;Rt.options;Rt.setOptions;Rt.use;Rt.walkTokens;Rt.parseInline;ur.parse;jn.lex;function U9(t){return new jn().lex(t)}const G9=()=>({heading:EW,blockquote:CW,list:wW,list_item:IW,br:xW,code:SW,codespan:LW,table:MW,html:$W,paragraph:GW,link:zW,text:PW,def:HW,del:YW,em:KW,hr:qW,strong:ZW,image:JW,space:tv,escape:tv}),F9=()=>({baseUrl:"/",slugger:new n9});function z9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},xd(()=>{console.warn=t})}function Dm(t,e){ae(e,!1),z9();let n=M(e,"source",8),r=M(e,"options",24,()=>({})),i=M(e,"renderers",24,()=>({})),o=A(),s=A(),l=A();L(()=>(V(n()),V(i()),V(r())),()=>{I(o,U9(n())),I(s,{...G9(),...i()}),I(l,{...F9(),...r()})}),Ce(),he(),Cl(t,{get tokens(){return _(o)},get renderers(){return _(s)},get options(){return _(l)}}),le()}var P9=ce('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),B9=ce('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),H9=ce('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function W9(t,e){ae(e,!1);const n=We(),r=()=>ge($r,"$puzzleMetaStore",n),i=A();let o=M(e,"showModal",12,!1);function s(u){return u?fl(u," & ",", "):"Anonymous"}function l(u){return u&&u.length?u:"No ruleset provided."}L(()=>r(),()=>{I(i,r())}),Ce(),he(),yi(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,d)=>{var f=H9(),g=Y(f),h=Y(g,!0);P(g);var m=F(g,2),E=Y(m);J(()=>rt(E,`by ${s(_(i).authors)??""}`)),P(m);var C=F(m,2),w=Y(C),y=gt(()=>l(_(i).ruleset));Dm(w,{get source(){return _(y)}}),P(C);var x=F(C,2);{var N=K=>{var U=P9(),H=F(ee(U),2);J(()=>S(H,"href",_(i).ctcUrl)),D(K,U)};Q(x,K=>{var U,H;(H=(U=_(i))==null?void 0:U.ctcUrl)!=null&&H.length&&K(N)})}var T=F(x,2);{var G=K=>{var U=B9(),H=F(ee(U),2);J(()=>S(H,"href",_(i).ctcYoutubeUrl)),D(K,U)};Q(T,K=>{var U,H;(H=(U=_(i))==null?void 0:U.ctcYoutubeUrl)!=null&&H.length&&K(G)})}P(f),J(()=>{var K;return rt(h,((K=_(i))==null?void 0:K.title)||"Puzzle")}),D(u,f)},$$slots:{default:!0},$$legacy:!0}),le()}var Y9=ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function j9(t){var e=Y9();D(t,e)}var K9=ce("<!> <!>",1);function V9(t){let e=A(!1);function n(){I(e,!0)}var r=K9(),i=ee(r);sc(i,{title:"Rules",clickCb:n,children:(s,l)=>{j9(s)},$$slots:{default:!0}});var o=F(i,2);W9(o,{get showModal(){return _(e)},set showModal(s){I(e,s)},$$legacy:!0}),D(t,r)}var q9=ce("<!> <!>",1);function X9(t){let e=A(!1);function n(){I(e,!0)}var r=q9(),i=ee(r);sc(i,{title:"Settings",clickCb:n,children:(s,l)=>{em(s)},$$slots:{default:!0}});var o=F(i,2);tm(o,{get showModal(){return _(e)},set showModal(s){I(e,s)},$$legacy:!0}),D(t,r)}var Z9=ce('<div class="info-settings-pad svelte-5cm3gs"><!> <!> <!> <!></div>');function Q9(t){var e=Z9(),n=Y(e);X9(n);var r=F(n,2);V9(r);var i=F(r,2);pW(i);var o=F(i,2);_W(o),P(e),D(t,e)}var J9=ce('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!> <!></div></div></div>');function e7(t,e){ae(e,!1);const n=We(),r=()=>ge(Io,"$svgRefStore",n),i=()=>ge($r,"$puzzleMetaStore",n),o=()=>ge(on,"$toolStore",n),s=A(),l=A();function u(){r()&&r().focus()}function d(oe){return oe?fl(oe," & ",", "):"Anonymous"}function f(oe){return oe&&oe.length?oe:"Normal sudoku rules apply."}L(()=>i(),()=>{I(s,i().title??"Sudoku")}),L(()=>i(),()=>{I(l,d(i().authors))}),Ce(),he();var g=J9(),h=Y(g),m=Y(h),E=Y(m),C=Y(E,!0);P(E);var w=F(E,2),y=Y(w);P(w),P(m);var x=F(m,2),N=Y(x),T=gt(()=>f(i().ruleset));Dm(N,{get source(){return _(T)}}),P(x),P(h);var G=F(h,2),K=Y(G);Q9(K);var U=F(K,2),H=Y(U);PH(H,{});var re=F(H,2);jH(re,{get selectedTool(){return o()}});var te=F(re,2);iW(te,{get selectedTool(){return _v(),o()},set selectedTool(oe){Co(on,oe)},$$legacy:!0}),P(U),P(G),P(g),J(()=>{rt(C,_(s)),rt(y,`by ${_(l)??""}`)}),Re("click",G,Cn(()=>{u()})),D(t,g),le()}var t7=ce('<div class="left-panel svelte-55o7hb"><!></div>'),n7=ce('<div class="game svelte-55o7hb"><!> <div class="center-panel svelte-55o7hb"><!></div> <div class="right-panel svelte-55o7hb"><!></div></div>');function E7(t,e){ae(e,!1);const n=We(),r=()=>ge(Xl,"$gameModeStore",n),i=()=>ge(m_,"$isPortraitStore",n),o=A(),s=A();xd(async()=>{const E=window.location.origin,C=fh===""?E:`${E}/${fh}`;try{await tP({workerURL:`${C}/minizinc-worker.js`,wasmURL:`${C}/minizinc.wasm`,dataURL:`${C}/minizinc.data`})}catch(w){const y="Failed to initialize MiniZinc: "+w.message;console.log(y)}}),L(()=>r(),()=>{I(o,r())}),L(()=>i(),()=>{I(s,i())}),Ce(),he();var l=n7(),u=Y(l);{var d=E=>{var C=t7(),w=Y(C);IP(w),P(C),D(E,C)};Q(u,E=>{_(o)===Do.SETTING&&E(d)})}var f=F(u,2),g=Y(f);RH(g,{}),P(f);var h=F(f,2),m=Y(h);e7(m,{}),P(h),P(l),J(()=>{Et(l,"desktop-layout",!_(s)),Et(l,"mobile-layout",_(s))}),D(t,l),le()}export{E7 as G,I_ as a,m7 as b,p7 as d,QU as p,ml as r,EG as s};
