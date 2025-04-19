var AO=Object.defineProperty;var SO=(t,e,n)=>e in t?AO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ce=(t,e,n)=>SO(t,typeof e!="symbol"?e+"":e,n);import{c as wu,o as NO,p as xO,q as td,a as S,t as de,s as ee,u as Ge,d as ye,v as RO,m as TO}from"./disclose-version.eswIe671.js";import{i as he}from"./legacy.CBYIjwbu.js";import{l as Uh,h as sn,k as hs,y as $h,v as us,R as DO,V as kO,U as GO,g as yu,i as Fh,K as Ph,a0 as MO,j as UO,u as Bg,B as $O,aJ as nd,z as FO,x as PO,a2 as rd,ar as Hh,A as Wg,aK as HO,a3 as BO,a8 as WO,m as zO,c as V,r as B,t as te,p as ce,s as U,a as ue,Z as _,al as Qe,aL as D,aM as we,av as Z,_ as y,$ as N,f as se,aN as YO,aC as Ni,aO as nu,ak as zg}from"./utils.Bp9j5Uj0.js";import{s as Ye,i as ne,a as Ee,b as ms,m as Bh}from"./store.D4OU4dvo.js";import{s as si,u as jO,a as KO,b as VO,c as XO,e as qO,f as ZO,g as QO,h as JO,t as ew}from"./global.BCa6xGgH.js";import{e as et,i as Ct}from"./each.BoOPhUgK.js";import{i as tw,p as M}from"./props.DtgsZciY.js";import{w as Dt,g as tt,d as ai}from"./index.DYJKv3QC.js";import{r as an,a as Wh,s as L,c as nw,b as rw,d as zh}from"./attributes.CiNh_L_I.js";import{b as xi,c as Yh}from"./this.DLpfsf4C.js";import{s as at}from"./render.CTsB0KRz.js";import{a as iw,o as jh}from"./index-client.BnGHJMPg.js";import{b as Yg}from"./paths.B0r5VuEG.js";function ow(t,e,n,r,i){var o=t,a="",c;Uh(()=>{if(a===(a=e()??"")){sn&&hs();return}c!==void 0&&(Ph(c),c=void 0),a!==""&&(c=$h(()=>{if(sn){us.data;for(var u=hs(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=DO(u);if(u===null)throw kO(),GO;wu(us,f),o=yu(u);return}var p=a+"",g=NO(p);wu(Fh(g),g.lastChild),o.before(g)}))})}function ht(t,e,n,r,i){var c;sn&&hs();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function Kh(t,e,n,r,i,o){let a=sn;sn&&hs();var c,u,f=null;sn&&us.nodeType===1&&(f=us,hs());var p=sn?us:t,g;Uh(()=>{const h=e()||null;var m=h==="svg"?nd:null;h!==c&&(g&&(h===null?FO(g,()=>{g=null,u=null}):h===u?PO(g):Ph(g)),h&&h!==u&&(g=$h(()=>{if(f=sn?f:m?document.createElementNS(m,h):document.createElement(h),wu(f,f),r){sn&&xO(h)&&f.append(document.createComment(""));var E=sn?Fh(f):f.appendChild(UO());sn&&(E===null?Bg(!1):yu(E)),r(f,E)}$O.nodes_end=f,p.before(f)})),c=h,c&&(u=c))},MO),a&&(Bg(!0),yu(p))}function Es(t,e,n){var r=t.__className,i=Vh(e);sn&&t.getAttribute("class")===i?t.__className=i:(r!==i||sn&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function sw(t,e,n){var r=t.__className,i=Vh(e);sn&&t.className===i?t.__className=i:(r!==i||sn&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Vh(t,e){return(t??"")+""}function yt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Zn(t,e,n=e){var r=HO();td(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=iu(t)?ou(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(sn&&t.defaultValue!==t.value||BO(e)==null&&t.value)&&n(iu(t)?ou(t.value):t.value),rd(()=>{var i=e();iu(t)&&i===ou(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const ru=new Set;function il(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),td(n,"change",()=>{var f=n.__value;o&&(f=jg(a,f,n.checked)),i(f)},()=>i(o?[]:null)),rd(()=>{var f=r();if(sn&&n.defaultChecked!==n.checked){c=!0;return}o?(f=f||[],n.checked=f.includes(n.__value)):n.checked=tw(n.__value,f)}),Hh(()=>{var f=a.indexOf(n);f!==-1&&a.splice(f,1)}),ru.has(a)||(ru.add(a),Wg(()=>{a.sort((f,p)=>f.compareDocumentPosition(p)===4?-1:1),ru.delete(a)})),Wg(()=>{if(c){var f;if(o)f=jg(a,f,n.checked);else{var p=a.find(g=>g.checked);f=p==null?void 0:p.__value}i(f)}})}function jg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function iu(t){var e=t.type;return e==="number"||e==="range"}function ou(t){return t===""?null:+t}function aw(t,e,n=e){td(t,"change",()=>{n(t.files)}),rd(()=>{t.files=e()})}function nt(t,e,n){var r=WO(t,e);r&&r.set&&(t[e]=n,Hh(()=>{t[e]=null}))}function lw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function er(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function su(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function cw(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=zO(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var vo=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(vo||{}),id=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(id||{}),Xh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(Xh||{}),qh=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(qh||{}),Zh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(Zh||{}),Qh=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(Qh||{}),Jh=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(Jh||{}),ev=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(ev||{}),tv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(tv||{}),nv=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(nv||{}),rv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(rv||{}),ol=(t=>(t.FOG_LIGHTS="Fog Lights",t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(ol||{}),od=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(od||{}),sd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(sd||{}),ad=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(ad||{}),ld=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(ld||{}),cd=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(cd||{}),ud=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(ud||{}),dd=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(dd||{}),_d=(t=>(t.CLONE_REGION="Clone Region",t))(_d||{}),fd=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(fd||{}),gd=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(gd||{}),hd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(hd||{}),vd=(t=>(t.MAZE_WALL="Maze Wall",t))(vd||{}),pd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(pd||{}),md=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(md||{}),iv=(t=>(t.PEN_TOOL="Pen Tool",t))(iv||{});const Ed={...Xh,...qh,...Zh,...ev,...tv,...Jh,...nv,...rv,...Qh},ov={...ol,...od,...sd,...ad,...ld,...cd,...ud,...dd,..._d,...fd,...gd,...hd,...vd,...pd},d={...id,...Ed,...ov,...md,...iv};var T=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(T||{});function uw(t){return Object.values(Ed).includes(t)}function dw(t){return Object.values(ov).includes(t)}function _w(t){return Object.values(md).includes(t)}function fw(t){return dw(t)||_w(t)}function sv(t){return Object.values(ol).includes(t)||t===d.COSMETIC_CELL_CENTER_SHAPE}function sl(t){return Object.values(od).includes(t)||t===d.COSMETIC_CELL_ARROW}function al(t){return Object.values(sd).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function Cd(t){return sv(t)||sl(t)||al(t)}function ll(t){return Object.values(ad).includes(t)||t===d.COSMETIC_EDGE}function Id(t){return Object.values(ld).includes(t)||t===d.COSMETIC_CORNER}function cl(t){return Object.values(cd).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function ul(t){return Object.values(ud).includes(t)||t===d.COSMETIC_ARROW}function dl(t){return Object.values(dd).includes(t)||t===d.COSMETIC_CAGE}function av(t){return Object.values(hd).includes(t)}function lv(t){return Object.values(vd).includes(t)}function bd(t){return Object.values(_d).includes(t)}function Li(t){const e=Object.values(fd),n=Object.values(gd);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function gw(t){return Object.values(pd).includes(t)}function Od(t){return Object.values(id).includes(t)}function hw(t){return Li(t)||Cd(t)||cl(t)||ul(t)||dl(t)||bd(t)}const vw=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],pw=[...vw,"Cosmetic Tool"],mw=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function cv(t){for(const e of Object.values(d))if(e===t)return e}function uv(t,e){return Object.values(e).includes(t)}var W=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(W||{});function hn(t,e,n){n!==void 0&&(t[e]=n)}function Ew(t){var e,n,r,i,o,a,c,u,f,p,g,h,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(f=t.strokeWidth)!=null&&f.editable||(p=t.strokeDasharray)!=null&&p.editable||(g=t.strokeDashoffset)!=null&&g.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function Lu(t){var n,r,i,o,a,c,u,f,p,g,h,m,E,I,b,O,A,k,G,F,z,P,j;const e={type:t.type};return hn(e,"n",(n=t.n)==null?void 0:n.value),hn(e,"r",(r=t.r)==null?void 0:r.value),hn(e,"height",(i=t.height)==null?void 0:i.value),hn(e,"width",(o=t.width)==null?void 0:o.value),hn(e,"inset",(a=t.inset)==null?void 0:a.value),hn(e,"angle",(c=t.angle)==null?void 0:c.value),hn(e,"fill",(u=t.fill)==null?void 0:u.value),hn(e,"stroke",(f=t.stroke)==null?void 0:f.value),hn(e,"strokeWidth",(p=t.strokeWidth)==null?void 0:p.value),hn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),hn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),hn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),hn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),hn(e,"opacity",(I=t.opacity)==null?void 0:I.value),hn(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(O=t.linePathOptions)==null?void 0:O.shortenHead)==null?void 0:A.value,shortenTail:(G=(k=t.linePathOptions)==null?void 0:k.shortenTail)==null?void 0:G.value,bezierRounding:(z=(F=t.linePathOptions)==null?void 0:F.bezierRounding)==null?void 0:z.value,closeLoops:(j=(P=t.linePathOptions)==null?void 0:P.closeLoops)==null?void 0:j.value}),e}function Cw(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const Kg={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},Vg={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},Xg={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Au={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Su={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Cs={type:"Line",strokeWidth:.125,stroke:"gray"},wd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},dv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Iw={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},qg={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var H=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(H||{});const _l=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,yn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,po=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,bw=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Jt=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,mo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,yd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Ow=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,ww=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,yw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Eo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Lw=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,Aw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Sw=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function Nw(t){return sl(t)?Ow():al(t)?ww():t===d.XV?Aw():ll(t)?yw():dl(t)?_l():ul(t)?po():Li(t)?bw():cl(t)?De():bd(t)?Sw():""}var me=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(me||{}),Lt=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Lt||{});const Is=[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL,T.LOCAL_ELEMENT],xw={inputOptions:{type:me.ARROW},toolId:d.ARROW,order:H.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:po(),tags:[],categories:Is}},Rw={inputOptions:{type:me.ARROW},toolId:d.AVERAGE_ARROW,order:H.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:po(),tags:[],categories:Is}},Tw={inputOptions:{type:me.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:H.ARROW_TOOLS,shape:{type:W.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:po(),tags:[],categories:Is}};me.ARROW,d.SQUARE_ROOT_ARROW,H.ARROW_TOOLS,W.LINE,po();const Dw={inputOptions:{type:me.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:H.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:po(),tags:[],categories:Is}};function kw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function Gw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function Mw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function Uw(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function $w(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const Fw={Delete:null,Backspace:null};function Pw(t,e=10){if(t in Fw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function Hw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function Bw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function Ww(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function zw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function _v(t){return t==="Backspace"}function Co(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||_v(t.key))}function Yw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function jw(t){return Yw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function Kw(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Mi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,f=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${f.source}$`,"i").test(t))}function kr(t,e,n){if(t===void 0)return t;let r=t;return _v(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Ld=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CAGE_TOOL,T.LOCAL_ELEMENT],Ln=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CAGE_TOOL,T.LOCAL_ELEMENT];function fv(t,e=5){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function gv(t,e,n){return kr(t,e,n)}const En={type:W.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},fl={type:me.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},An={...fl,valueUpdater:(t,e)=>gv(t,e,fv)},Vw={inputOptions:An,toolId:d.KILLER_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:yn(),tags:[],categories:Ln}},Xw={inputOptions:An,toolId:d.UNIQUE_DIGITS_CAGE,order:H.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:yn(),tags:[],categories:Ln}},qw={inputOptions:An,toolId:d.INVERTED_KILLER_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:yn(),tags:[],categories:Ln}},Zw={inputOptions:An,toolId:d.SUM_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:yn(),tags:[],categories:Ln}},Qw={inputOptions:fl,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:H.CAGE_TOOLS,shape:En,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:_l(),tags:[],categories:Ld}},Jw={inputOptions:fl,toolId:d.PARITY_BALANCE_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:_l(),tags:[],categories:Ld}},ey={inputOptions:An,toolId:d.DIVISIBLE_KILLER_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:yn(),tags:[],categories:Ln}},ty={inputOptions:An,toolId:d.SPOTLIGHT_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:yn(),tags:[],categories:Ln}},ny={inputOptions:fl,toolId:d.PUTTERIA_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:_l(),tags:[],categories:Ld}};d.KILLER_CAGE_LOOK_AND_SAY,H.CAGE_TOOLS,yn();const ry={inputOptions:An,toolId:d.MULTISET_CAGE,order:H.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:yn(),tags:[],categories:Ln}},iy={inputOptions:An,toolId:d.VAULTED_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:yn(),tags:[],categories:Ln}};d.AQUARIUM_CAGE,H.CAGE_TOOLS,yn();const oy={inputOptions:An,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:yn(),tags:[],categories:Ln}},sy={inputOptions:An,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:yn(),tags:[],categories:Ln}},ay={inputOptions:An,toolId:d.DOUBLERS_KILLER_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:yn(),tags:[],categories:Ln}},ly={inputOptions:An,toolId:d.NEGATORS_KILLER_CAGE,order:H.CAGE_TOOLS,shape:En,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:yn(),tags:[],categories:Ln}},cy={inputOptions:{type:me.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},uy={inputOptions:{type:me.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},dy={inputOptions:{type:me.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[T.CELL_INPUT_TOOL]}},_y={inputOptions:{type:me.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},fy={inputOptions:{type:me.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},gy={inputOptions:{type:me.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[T.CELL_INPUT_TOOL]}},hy={inputOptions:{type:me.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[T.CELL_INPUT_TOOL]}},vy={inputOptions:{type:me.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},py={type:me.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST},Ad=[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT,T.LOCAL_ELEMENT];d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,H.OUTSIDE_TOOLS,W.CIRCLE,yd();const my={inputOptions:{type:me.CENTER_CORNER_OR_EDGE,targets:Lt.CLOSEST,valueUpdater:(t,e)=>kr(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:H.OUTSIDE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:yd(),tags:[],categories:Ad}},Ey={inputOptions:{type:me.CENTER_CORNER_OR_EDGE,targets:Lt.CORNER_OR_EDGE,valueUpdater:(t,e)=>kr(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:H.OUTSIDE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:yd(),tags:[],categories:Ad}},Cy={inputOptions:{type:me.CLONE},toolId:d.CLONE_REGION,order:H.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[T.CLONE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT]}},gl=[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL,T.LOCAL_ELEMENT],Sd=[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL,T.LOCAL_ELEMENT];function hv(t,e=3){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function vv(t,e,n){return kr(t,e,n)}function Iy(t,e){function n(){return!0}return kr(t,e,n)}const Nd={type:me.CORNER,defaultValue:"",valueUpdater:(t,e)=>vv(t,e,hv)},by={inputOptions:{type:me.CORNER,valueUpdater:(t,e)=>Iy(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:H.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Lw(),categories:Sd}},Oy={inputOptions:Nd,toolId:d.CORNER_SUM,order:H.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:Eo(),categories:Sd}},wy={inputOptions:{type:me.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:H.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:Eo(),categories:gl}},yy={inputOptions:Nd,toolId:d.CORNER_EVEN_COUNT,order:H.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:Eo(),categories:gl}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,H.CORNER_TOOLS,W.CIRCLE,Eo();const Ly={inputOptions:{type:me.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:H.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:Eo(),categories:gl}},Ay={inputOptions:{type:me.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:H.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:Eo(),categories:gl}},hl=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.EDGE_TOOL,T.LOCAL_ELEMENT],Hn=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.EDGE_TOOL,T.LOCAL_ELEMENT],bs=.15,pv=.02,li={type:W.CIRCLE,r:{editable:!0,value:bs,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:pv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},xd={type:W.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function Sy(t,e=1){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function mv(t,e=3){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ny(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Rd(t,e,n){return kr(t,e,n)}function xy(t,e){return t===void 0?"V":Ny(e)?e.toUpperCase():t}function Ry(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Ev(t,e){return t===void 0?"<":Ry(e)?e:t}const Io={type:me.EDGE,valueUpdater:(t,e)=>Rd(t,e,mv)},Ty={inputOptions:{type:me.EDGE,valueUpdater:(t,e)=>Rd(t,e,Sy)},toolId:d.RATIO,order:H.EDGE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:bs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Hn}},Dy={inputOptions:Io,toolId:d.DIFFERENCE,order:H.EDGE_TOOLS,shape:li,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Hn}},ky={inputOptions:Io,toolId:d.EDGE_SUM,order:H.EDGE_TOOLS,shape:{...li,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Hn}},Gy={inputOptions:{type:me.EDGE,defaultValue:"V",valueUpdater:xy},toolId:d.XV,order:H.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:bs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Hn}},My={inputOptions:{type:me.EDGE,valueUpdater:Ev,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:H.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Hn}},Uy={inputOptions:Io,toolId:d.EDGE_PRODUCT,order:H.EDGE_TOOLS,shape:{...li,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Hn}},$y={inputOptions:Io,toolId:d.EDGE_MODULO,order:H.EDGE_TOOLS,shape:{...li,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Hn}},Fy={inputOptions:Io,toolId:d.EDGE_FACTOR,order:H.EDGE_TOOLS,shape:{...li,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Hn}},Py={inputOptions:{type:me.EDGE},toolId:d.XY_DIFFERENCES,order:H.EDGE_TOOLS,shape:{type:W.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:bs},strokeWidth:{editable:!1,value:pv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Hn}},Hy={inputOptions:{type:me.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:H.EDGE_TOOLS,shape:li,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Hn}},By={inputOptions:{type:me.EDGE},toolId:d.YIN_YANG_KROPKI,order:H.EDGE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:bs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Hn}},Wy={inputOptions:{type:me.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:H.EDGE_TOOLS,shape:xd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:hl}},zy={inputOptions:{type:me.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:H.EDGE_TOOLS,shape:xd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:hl}},Yy={inputOptions:{type:me.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:H.EDGE_TOOLS,shape:xd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:hl}},jy={inputOptions:{type:me.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:H.EDGE_TOOLS,shape:li,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:hl}},Ky={inputOptions:{type:me.EDGE,valueUpdater:Ev,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:H.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Hn}};d.CUSTOM_EDGE_CONSTRAINT,H.EDGE_TOOLS;const bo=[T.OUTSIDE_CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_CORNER_TOOL,T.OUTSIDE_DIRECTION_TOOL,T.LOCAL_ELEMENT];function Vy(t,e=5){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Cv(t,e,n){return kr(t,e,n)}const Oo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},wo={type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Cv(t,e,Vy),defaultValue:"",cornerOrEdge:Lt.CORNER},Xy={inputOptions:wo,toolId:d.LITTLE_KILLER_SUM,order:H.OUTSIDE_TOOLS,shape:Oo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:mo(),tags:[],categories:bo}},qy={inputOptions:wo,toolId:d.LITTLE_KILLER_PRODUCT,order:H.OUTSIDE_TOOLS,shape:Oo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:mo(),tags:[],categories:bo}},Zy={inputOptions:wo,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:H.OUTSIDE_TOOLS,shape:Oo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:mo(),tags:[],categories:bo}},Qy={inputOptions:wo,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:H.OUTSIDE_TOOLS,shape:Oo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:mo(),tags:[],categories:bo}},Jy={inputOptions:wo,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:H.OUTSIDE_TOOLS,shape:Oo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:mo(),tags:[],categories:bo}},eL={inputOptions:wo,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:H.OUTSIDE_TOOLS,shape:Oo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:mo(),tags:[],categories:bo}},en=[T.OUTSIDE_EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_EDGE_TOOL,T.OUTSIDE_DIRECTION_TOOL,T.LOCAL_ELEMENT];function yo(t,e=5){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Os(t,e,n){return kr(t,e,n)}const tn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Sn={type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Os(t,e,yo),defaultValue:"",cornerOrEdge:Lt.EDGE},tL={inputOptions:Sn,toolId:d.SANDWICH_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:Jt(),tags:[],categories:en}},nL={inputOptions:{...Sn,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:d.MYSTERY_SANDWICH_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:Jt(),tags:[],categories:en}},rL={inputOptions:Sn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:Jt(),tags:[],categories:en}},iL={inputOptions:Sn,toolId:d.X_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:Jt(),tags:[],categories:en}},oL={inputOptions:Sn,toolId:d.SHORTSIGHTED_X_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:Jt(),tags:[],categories:en}},sL={inputOptions:Sn,toolId:d.SHIFTED_X_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:Jt(),tags:[],categories:en}},aL={inputOptions:Sn,toolId:d.BROKEN_X_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:Jt(),tags:[],categories:en}},lL={inputOptions:Sn,toolId:d.X_SUM_SKYSCRAPERS,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:Jt(),tags:[],categories:en}},cL={inputOptions:Sn,toolId:d.BATTLEFIELD,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:Jt(),tags:[],categories:en}},uL={inputOptions:Sn,toolId:d.SKYSCRAPERS,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:Jt(),tags:[],categories:en}},dL={inputOptions:Sn,toolId:d.X_INDEX,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:Jt(),tags:[],categories:en}},_L={inputOptions:Sn,toolId:d.RISING_STREAK,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:Jt(),tags:[],categories:en}};d.ROW_OR_COLUMN_RANK,H.OUTSIDE_TOOLS,Jt();const fL={inputOptions:Sn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:Jt(),tags:[],categories:en}},gL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Os(t,e,yo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:Jt(),tags:[],categories:en}},hL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Os(t,e,yo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:Jt(),tags:[],categories:en}},vL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Os(t,e,yo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:Jt(),tags:[],categories:en}},pL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Os(t,e,yo),defaultValue:"",cornerOrEdge:Lt.EDGE},toolId:d.PENTOMINO_BORDER_COUNT,order:H.OUTSIDE_TOOLS,shape:tn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:Jt(),tags:[],categories:en}},mL={inputOptions:{type:me.SINGLE_CELL},toolId:d.COSMETIC_CELL_CENTER_SHAPE,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},EL={inputOptions:{type:me.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:H.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},CL={inputOptions:{type:me.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:H.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},IL={inputOptions:{type:me.EDGE,valueUpdater:(t,e)=>Rd(t,e,mv),defaultValue:""},toolId:d.COSMETIC_EDGE,order:H.EDGE_TOOLS,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.LOCAL_ELEMENT]}},bL={inputOptions:{type:me.CORNER,valueUpdater:(t,e)=>vv(t,e,hv),defaultValue:""},toolId:d.COSMETIC_CORNER,order:H.CORNER_TOOLS,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.LOCAL_ELEMENT]}},OL={inputOptions:{type:me.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},wL={inputOptions:{type:me.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},yL={inputOptions:{type:me.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},LL={inputOptions:{type:me.CAGE,valueUpdater:(t,e)=>gv(t,e,fv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:H.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.LOCAL_ELEMENT]}},AL={inputOptions:{type:me.ARROW},toolId:d.COSMETIC_ARROW,order:H.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT]}},SL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Cv(t,e,yo),defaultValue:"",cornerOrEdge:Lt.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:H.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.OUTSIDE_DIRECTION_TOOL,T.LOCAL_ELEMENT]}},Lo=[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT,T.DIAGONAL_CONSTRAINT],NL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},xL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},RL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},TL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},DL={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},kL={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},GL={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ML={toolId:d.ANTI_LONG_KNIGHT,order:0,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},UL={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},$L={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},FL={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},PL={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},HL={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},BL={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Lo}},WL={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Lo}},zL={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Lo}},YL={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Lo}},jL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Lo}},KL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Lo}},VL={toolId:d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,order:0,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},XL={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},qL={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ZL={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},QL={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},JL={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},eA={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},tA={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},nA={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},rA={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},iA={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},oA={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},sA={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},aA={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},lA={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}};d.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT;d.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT;const cA={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},uA={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},dA={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},_A={toolId:d.CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},fA={toolId:d.NUMBERED_CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},gA={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},hA={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},vA={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},pA={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},mA={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},EA={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},CA={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},IA={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},bA={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},OA={toolId:d.NORINORI,order:0,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},wA={toolId:d.SHIKAKU,order:0,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},yA={toolId:d.SHIKAKU_NO_REPEATS_IN_REGION,order:0,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},LA={toolId:d.NORINORI_STAR_BATTLE,order:0,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},AA={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},SA={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},NA={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},xA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},RA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},TA={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},DA={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},kA={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},GA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},MA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},UA={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},$A={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},FA={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},PA={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},HA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},BA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},WA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},zA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},YA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},jA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},KA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},VA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},XA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},qA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},ZA={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},QA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},JA={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},eS={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},tS={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},nS={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},rS={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},iS={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},oS={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},sS={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},aS={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},lS={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Pe=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LINE_TOOL,T.LOCAL_ELEMENT],Gr=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.DOUBLE_ENDED_LINE_CONSTRAINT,T.LINE_TOOL,T.LOCAL_ELEMENT],ws={description:"",usage:De(),tags:[],categories:Pe},Nt={type:me.LINE,allowSelfIntersection:!0},qt={type:me.LINE,allowSelfIntersection:!1},cS={inputOptions:qt,toolId:d.THERMOMETER,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ws,description:"Numbers along a thermometer must increase from the bulb end."}},uS={inputOptions:{type:me.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ws,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},dS={inputOptions:qt,toolId:d.FUZZY_THERMOMETER,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...ws,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},_S={inputOptions:qt,toolId:d.SLOW_THERMOMETER,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ws,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},fS={inputOptions:qt,toolId:d.ROW_CYCLE_THERMOMETER,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...ws,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},gS={inputOptions:Nt,toolId:d.PALINDROME,order:H.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:Pe}},hS={inputOptions:Nt,toolId:d.RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:Pe}},vS={inputOptions:Nt,toolId:d.DOUBLE_RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:Pe}},pS={inputOptions:Nt,toolId:d.RENRENBANBAN_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:Pe}},mS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Pe}},ES={inputOptions:Nt,toolId:d.NABNER_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},CS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:Pe}},IS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:Pe}},bS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:Pe}},OS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:Pe}},wS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},yS={inputOptions:qt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:Pe}},LS={inputOptions:qt,toolId:d.INDEX_LINE,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:Pe}},AS={inputOptions:Nt,toolId:d.UNIQUE_VALUES_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:Pe}},SS={inputOptions:Nt,toolId:d.REGION_SUM_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:Pe}},NS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:Pe}},xS={inputOptions:qt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:Pe}},RS={inputOptions:Nt,toolId:d.SAME_PARITY_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:Pe}},TS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},DS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:Pe}},kS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:Pe}},GS={inputOptions:Nt,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:Pe}},MS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:Pe}},US={inputOptions:Nt,toolId:d.ENTROPIC_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:Pe}},$S={inputOptions:Nt,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:Pe}},FS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:Pe}},PS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:Pe}},HS={inputOptions:qt,toolId:d.REPEATED_DIGITS_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:Pe}},BS={inputOptions:qt,toolId:d.SUPERFUZZY_ARROW,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:Pe}},WS={inputOptions:Nt,toolId:d.AMBIGUOUS_ARROW,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:De(),tags:[],categories:Pe}},zS={inputOptions:qt,toolId:d.HEADLESS_ARROW,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:Pe}},YS={inputOptions:Nt,toolId:d.XV_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:Pe}},jS={inputOptions:qt,toolId:d.ROW_SUM_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:Pe}},KS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:Pe}},VS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:Pe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,H.LINE_TOOLS,W.LINE,De();const XS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:Pe}},qS={inputOptions:Nt,toolId:d.ADJACENT_MULTIPLES_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:Pe}},ZS={inputOptions:Nt,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:Pe}},QS={inputOptions:qt,toolId:d.LOOK_AND_SAY_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:Pe}},JS={inputOptions:qt,toolId:d.ZIPPER_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:Pe}},eN={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:Pe}},tN={inputOptions:{type:me.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:De(),tags:[],categories:Pe}},nN={inputOptions:{type:me.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:De(),tags:[],categories:Pe}};d.THERMO_OR_AVERAGE_ARROW,H.LINE_TOOLS,W.THERMO_WITH_CIRCLE,De();const rN={inputOptions:qt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:De(),tags:[],categories:Pe}},iN={inputOptions:qt,toolId:d.PEAPODS,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:De(),tags:[],categories:Pe}},oN={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:Pe}},sN={inputOptions:Nt,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:Pe}},aN={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},lN={inputOptions:Nt,toolId:d.YIN_YANG_REGION_SUM_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:Pe}},cN={inputOptions:qt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:Pe}},uN={inputOptions:qt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:H.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:Pe}},dN={inputOptions:Nt,toolId:d.BETWEEN_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:Gr}},_N={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:Gr}},fN={inputOptions:Nt,toolId:d.TIGHTROPE_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:Gr}},gN={inputOptions:Nt,toolId:d.PARITY_COUNT_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:Gr}},hN={inputOptions:Nt,toolId:d.DOUBLE_ARROW_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:Gr}},vN={inputOptions:Nt,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:Gr}},pN={inputOptions:Nt,toolId:d.SPLIT_PEAS,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:Gr}},mN={inputOptions:qt,toolId:d.DOUBLERS_THERMOMETER,order:H.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:Pe}},EN={inputOptions:Nt,toolId:d.DOUBLERS_BETWEEN_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Gr}},CN={inputOptions:Nt,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:H.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:Gr}},ze=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_SHAPE_TOOL,T.LOCAL_ELEMENT],ci=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_COLOR_TOOL,T.LOCAL_ELEMENT],Iv=[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT],vl={type:W.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Ui={type:W.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function pl(t,e=3){return Mi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function IN(t){return t===""||t==="1"||t==="2"||t==="3"}function ys(t,e,n){return kr(t,e,n)}const Ve={type:me.SINGLE_CELL},ui={type:me.SINGLE_CELL,valueUpdater:(t,e)=>ys(t,e,pl),defaultValue:""},bv={type:me.SINGLE_CELL_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},bN={inputOptions:Ve,toolId:d.ODD,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:ze}},ON={inputOptions:Ve,toolId:d.EVEN,order:H.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:ze}},wN={inputOptions:Ve,toolId:d.MINIMUM,order:H.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:ci}},yN={inputOptions:Ve,toolId:d.MAXIMUM,order:H.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:ci}};d.PRIME_CELL,H.CELL_COLOR_TOOL;const LN={inputOptions:Ve,toolId:d.ODD_MINESWEEPER,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},AN={inputOptions:Ve,toolId:d.EVEN_MINESWEEPER,order:H.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},SN={inputOptions:Ve,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ze}},NN={inputOptions:Ve,toolId:d.WATCHTOWER,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},xN={inputOptions:Ve,toolId:d.NOT_WATCHTOWER,order:H.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},RN={inputOptions:ui,toolId:d.FARSIGHT,order:H.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ze}},TN={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>ys(t,e,pl),defaultValue:"9"},toolId:d.RADAR,order:H.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ze}},DN={inputOptions:Ve,toolId:d.ORTHOGONAL_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ze}},kN={inputOptions:Ve,toolId:d.INDEXING_COLUMN,order:H.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:ci}},GN={inputOptions:Ve,toolId:d.INDEXING_ROW,order:H.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:ci}},MN={inputOptions:Ve,toolId:d.LOW_DIGIT,order:H.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:ci}},UN={inputOptions:Ve,toolId:d.HIGH_DIGIT,order:H.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:ci}},$N={inputOptions:Ve,toolId:d.FRIENDLY_CELL,order:H.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:ci}},FN={inputOptions:Ve,toolId:d.DIAGONALLY_ADJACENT_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ze}},PN={inputOptions:Ve,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ze}},HN={inputOptions:Ve,toolId:d.SANDWICH_ROW_COL_COUNT,order:H.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ze}},BN={inputOptions:Ve,toolId:d.COUNTING_CIRCLES,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ze}},WN={inputOptions:Ve,toolId:d.REVERSE_COUNTING_CIRCLES,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:ze}},zN={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>ys(t,e,IN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:H.CELL_SHAPE_TOOL,shape:Ui,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:ze}},YN={inputOptions:Ve,toolId:d.UNIQUE_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ze}},jN={inputOptions:Ve,toolId:d.SEEN_EVEN_COUNT,order:H.CELL_SHAPE_TOOL,shape:vl,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},KN={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>ys(t,e,pl),defaultValue:"5"},toolId:d.CELL_KNIGHT_WHISPERS,order:H.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:ze}},VN={inputOptions:Ve,toolId:d.SEEN_ODD_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},XN={inputOptions:Ve,toolId:d.YIN_YANG_MINESWEEPER,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ze}},qN={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},ZN={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},QN={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:H.CELL_SHAPE_TOOL,shape:vl,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ze}},JN={inputOptions:Ve,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ze}},ex={inputOptions:Ve,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:ze}},tx={inputOptions:Ve,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ze}},nx={inputOptions:Ve,toolId:d.SEEN_REGION_BORDERS_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ze}},rx={inputOptions:Ve,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ze}},ix={inputOptions:Ve,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ze}},ox={inputOptions:bv,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:H.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Iv}},sx={inputOptions:bv,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:H.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Iv}},ax={inputOptions:ui,toolId:d.SASHIGANE_REGION_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ze}},lx={inputOptions:Ve,toolId:d.CELL_ON_THE_LOOP,order:H.CELL_SHAPE_TOOL,shape:vl,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ze}},cx={inputOptions:Ve,toolId:d.CELL_NOT_ON_THE_LOOP,order:H.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ze}},ux={inputOptions:Ve,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ze}},dx={inputOptions:ui,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:H.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ze}},_x={inputOptions:Ve,toolId:d.CAVE_CLUE,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ze}},fx={inputOptions:ui,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ze}},gx={inputOptions:ui,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ze}},hx={inputOptions:ui,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:H.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:ze}},vx={inputOptions:Ve,toolId:d.DIRECTED_PATH_START,order:H.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:ze}},px={inputOptions:Ve,toolId:d.DIRECTED_PATH_END,order:H.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:ze}},mx={inputOptions:ui,toolId:d.TELEPORT,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:ze}},Ex={inputOptions:ui,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:H.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:ze}},Cx={inputOptions:Ve,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:H.CELL_SHAPE_TOOL,shape:{...vl,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:ze}},Ix={inputOptions:Ve,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:H.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:ze}},bx={inputOptions:Ve,toolId:d.CONNECT_FOUR_YELLOW,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:ze}},Ox={inputOptions:Ve,toolId:d.CONENCT_FOUR_RED,order:H.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:ze}},wx={inputOptions:Ve,toolId:d.SHIKAKU_REGION_SIZE,order:H.CELL_SHAPE_TOOL,shape:Ui,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:ze}},yx={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>ys(t,e,pl),defaultValue:"?"},toolId:d.SHIKAKU_REGION_SUM,order:H.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:ze}},Lx={inputOptions:Ve,toolId:d.FOG_LIGHTS,order:H.CELL_SHAPE_TOOL,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:ze}},cr=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_MULTIARROW_TOOL,T.LOCAL_ELEMENT],Mr={type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},ur={type:me.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Lt.CORNER_OR_EDGE},Ax={inputOptions:ur,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:cr}},Sx={inputOptions:ur,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:cr}},Nx={inputOptions:ur,toolId:d.LOOP_CELL_COUNT_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:cr}},xx={inputOptions:ur,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:cr}},Rx={inputOptions:ur,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:cr}},Tx={inputOptions:ur,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:cr}},Dx={inputOptions:ur,toolId:d.COLD_ARROWS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:cr}},kx={inputOptions:ur,toolId:d.HOT_ARROWS,order:H.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:cr}},Gx={inputOptions:ur,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:cr}},Mx={inputOptions:ur,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:cr}},Ux={inputOptions:ur,toolId:d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,order:H.CELL_SHAPE_TOOL,shape:Mr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:cr}},$x={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},Fx={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},Px={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},Hx={toolId:d.LITS_MAX_TETROMINO_SUM,order:0,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const Bx={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},Wx={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const zx={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},Yx={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},jx=[T.CORNER_LINE_CONSTRAINT,T.CORNER_LINE_TOOL,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT],Kx={inputOptions:{type:me.CORNER_LINE},toolId:d.MAZE_WALL,order:H.EDGE_TOOLS,shape:{type:W.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:jx}},Pt={[d.GIVEN]:cy,[d.DIGIT]:uy,[d.REGIONS]:dy,[d.OUTSIDE]:hy,[d.CORNER_PM]:_y,[d.CENTER_PM]:fy,[d.HIGHLIGHTS]:gy,[d.PEN_TOOL]:vy,[d.SUDOKU_RULES_DO_NOT_APPLY]:NL,[d.LEAVE_EMPTY_CELLS_EMPTY]:xL,[d.LITS]:DL,[d.HEXED_SUDOKU]:RL,[d.FILLOMINO]:TL,[d.ANTIKNIGHT]:kL,[d.ANTI_LONG_KNIGHT]:ML,[d.ANTIKING]:UL,[d.ANTI_GIRAFFE]:GL,[d.DISJOINT_GROUPS]:$L,[d.TANGO]:FL,[d.NONCONSECUTIVE]:PL,[d.NONRATIO]:HL,[d.ANTI_ENTROPY]:XL,[d.GLOBAL_INDEXING_COLUMN]:qL,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:ZL,[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:VL,[d.NEGATIVE_DIAGONAL]:BL,[d.POSITIVE_DIAGONAL]:WL,[d.NEGATIVE_ANTIDIAGONAL]:zL,[d.POSITIVE_ANTIDIAGONAL]:YL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:jL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:KL,[d.ALL_RATIOS_GIVEN]:QL,[d.ALL_DIFFERENCES_GIVEN]:JL,[d.ALL_X_GIVEN]:eA,[d.ALL_V_GIVEN]:tA,[d.ALL_XV_GIVEN]:nA,[d.ALL_RADARS_GIVEN]:rA,[d.ALL_XY_DIFFERENCES_GIVEN]:iA,[d.ALL_INDEXING_COLUMN_GIVEN]:oA,[d.ALL_INDEXING_ROW_GIVEN]:sA,[d.ALL_YIN_YANG_KROPKI_GIVEN]:aA,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:lA,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:uA,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:dA,[d.CAVE_CELLS_ARE_ODD]:KA,[d.CAVE_WALLS_ARE_EVEN]:jA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:zA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:YA,[d.DOUBLERS]:Bx,[d.NEGATORS]:Wx,[d.NEXUS]:zx,[d.INDEXER_CELLS]:Yx,[d.CHAOS_CONSTRUCTION]:_A,[d.NUMBERED_CHAOS_CONSTRUCTION]:fA,[d.CHAOS_CONSTRUCTION_SUGURU]:gA,[d.YIN_YANG]:hA,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:vA,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:pA,[d.NURIMISAKI]:mA,[d.NURIKABE]:EA,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:CA,[d.TWO_CONTIGUOUS_REGIONS]:IA,[d.SASHIGANE]:bA,[d.NORINORI]:OA,[d.SHIKAKU]:wA,[d.SHIKAKU_NO_REPEATS_IN_REGION]:yA,[d.GOLDILOCKS_ZONE]:AA,[d.CELL_CENTER_LOOP_NO_TOUCHING]:SA,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:NA,[d.NOT_LOOP_SIZED_REGIONS]:TA,[d.MODULAR_LOOP]:DA,[d.CAVE]:BA,[d.CAVE_LITS]:VA,[d.RENBAN_CAVES]:XA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:WA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:cA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:xA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:RA,[d.GALAXIES]:ZA,[d.TWO_SYMMETRIC_GALAXIES]:eS,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:QA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:JA,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:tS,[d.PENTOMINO_TILLING]:nS,[d.TILLING_NO_EMPTY_CELLS]:rS,[d.LITS_BLACK_WHITE_STAR_BATTLE]:iS,[d.NORINORI_STAR_BATTLE]:LA,[d.MAZE_DIRECTED_PATH]:kA,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:GA,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:FA,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:MA,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:$A,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:PA,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:HA,[d.DIRECTED_PATH_IS_PARITY_LINE]:UA,[d.CONNECT_FOUR]:oS,[d.CONNECT_FOUR_DRAW]:sS,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:aS,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:lS,[d.FOG_LIGHTS]:Lx,[d.ODD]:bN,[d.EVEN]:ON,[d.MINIMUM]:wN,[d.MAXIMUM]:yN,[d.ODD_MINESWEEPER]:LN,[d.EVEN_MINESWEEPER]:AN,[d.WATCHTOWER]:NN,[d.NOT_WATCHTOWER]:xN,[d.FARSIGHT]:RN,[d.RADAR]:TN,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:SN,[d.ORTHOGONAL_SUM]:DN,[d.DIAGONALLY_ADJACENT_SUM]:FN,[d.INDEXING_COLUMN]:kN,[d.INDEXING_ROW]:GN,[d.LOW_DIGIT]:MN,[d.HIGH_DIGIT]:UN,[d.FRIENDLY_CELL]:$N,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:PN,[d.SANDWICH_ROW_COL_COUNT]:HN,[d.COUNTING_CIRCLES]:BN,[d.REVERSE_COUNTING_CIRCLES]:WN,[d.COLORED_COUNTING_CIRCLES]:zN,[d.UNIQUE_CELLS]:YN,[d.SEEN_EVEN_COUNT]:jN,[d.SEEN_ODD_COUNT]:VN,[d.CELL_KNIGHT_WHISPERS]:KN,[d.YIN_YANG_MINESWEEPER]:XN,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:qN,[d.YIN_YANG_SEEN_SHADED_CELLS]:ZN,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:QN,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:JN,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:ex,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:tx,[d.SEEN_REGION_BORDERS_COUNT]:nx,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:rx,[d.SASHIGANE_BEND_REGION_COUNT]:ix,[d.SASHIGANE_REGION_SUM]:ax,[d.CELL_ON_THE_LOOP]:lx,[d.CELL_NOT_ON_THE_LOOP]:cx,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:ux,[d.CAVE_CLUE]:_x,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:dx,[d.YIN_YANG_FILLOMINO_PARITY]:qA,[d.SHIKAKU_REGION_SIZE]:wx,[d.SHIKAKU_REGION_SUM]:yx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:fx,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:gx,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:hx,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:Ex,[d.DIRECTED_PATH_START]:vx,[d.DIRECTED_PATH_END]:px,[d.TELEPORT]:mx,[d.CONNECT_FOUR_YELLOW]:bx,[d.CONENCT_FOUR_RED]:Ox,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:ox,[d.THERMO_SIGHTLINE_LOOP_ARROW]:sx,[d.HOT_ARROWS]:kx,[d.COLD_ARROWS]:Dx,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:Tx,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:xx,[d.YIN_YANG_COUNT_SHADED_CELLS]:Rx,[d.LOOP_CELL_COUNT_ARROWS]:Nx,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:Sx,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:Ax,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:Gx,[d.NURIKABE_SEEN_WATERWAY_CELLS]:Cx,[d.NURIKABE_ISLAND_SIZE_CELL]:Ix,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:Mx,[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:Ux,[d.DIFFERENCE]:Dy,[d.RATIO]:Ty,[d.XV]:Gy,[d.EDGE_INEQUALITY]:My,[d.EDGE_SUM]:ky,[d.EDGE_PRODUCT]:Uy,[d.EDGE_MODULO]:$y,[d.EDGE_FACTOR]:Fy,[d.XY_DIFFERENCES]:Py,[d.YIN_YANG_WHITE_KROPKI]:Hy,[d.YIN_YANG_KROPKI]:By,[d.FILLOMINO_REGION_BORDER]:Wy,[d.UNKNOWN_REGION_BORDER]:zy,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:Yy,[d.EDGE_CAVE_ONE_OF_EACH]:jy,[d.ONE_WAY_DOOR]:Ky,[d.QUADRUPLE]:by,[d.CORNER_SUM]:Oy,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:wy,[d.CORNER_EVEN_COUNT]:yy,[d.PRODUCT_SQUARE]:Ly,[d.EQUAL_DIAGONAL_DIFFERENCES]:Ay,[d.THERMOMETER]:cS,[d.FUZZY_THERMOMETER]:dS,[d.SLOW_THERMOMETER]:_S,[d.CUSTOM_THERMOMETER]:uS,[d.ROW_CYCLE_THERMOMETER]:fS,[d.PALINDROME]:gS,[d.RENBAN_LINE]:hS,[d.DOUBLE_RENBAN_LINE]:vS,[d.RENRENBANBAN_LINE]:pS,[d.N_CONSECUTIVE_RENBAN_LINE]:mS,[d.NABNER_LINE]:ES,[d.WHISPERS_LINE]:CS,[d.DUTCH_WHISPERS]:IS,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:bS,[d.RENBAN_OR_WHISPERS_LINE]:OS,[d.RENBAN_OR_NABNER_LINE]:wS,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:yS,[d.INDEX_LINE]:LS,[d.UNIQUE_VALUES_LINE]:AS,[d.REPEATED_DIGITS_LINE]:HS,[d.REGION_SUM_LINE]:SS,[d.SUM_LINE]:NS,[d.XV_LINE]:YS,[d.ROW_SUM_LINE]:jS,[d.AT_LEAST_X_LINE]:KS,[d.SUPERFUZZY_ARROW]:BS,[d.AMBIGUOUS_ARROW]:WS,[d.HEADLESS_ARROW]:zS,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:VS,[d.PRODUCT_LINE]:XS,[d.ADJACENT_MULTIPLES_LINE]:qS,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:ZS,[d.LOOK_AND_SAY_LINE]:QS,[d.ARITHMETIC_SEQUENCE_LINE]:xS,[d.ZIPPER_LINE]:JS,[d.SEGMENTED_SUM_LINE]:eN,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:tN,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:nN,[d.SAME_PARITY_LINE]:RS,[d.MODULAR_LINE]:TS,[d.UNIMODULAR_LINE]:DS,[d.MODULAR_OR_UNIMODULAR_LINE]:kS,[d.ODD_EVEN_OSCILLATOR_LINE]:GS,[d.HIGH_LOW_OSCILLATOR_LINE]:MS,[d.ENTROPIC_LINE]:US,[d.ENTROPIC_OR_MODULAR_LINE]:$S,[d.INDEXING_COLUMN_IS_X_LINE]:FS,[d.INDEXING_ROW_IS_X_LINE]:PS,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:rN,[d.PEAPODS]:iN,[d.YIN_YANG_INDEXING_LINE_COLORING]:cN,[d.YIN_YANG_SHADED_WHISPERS_LINE]:oN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:sN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:aN,[d.YIN_YANG_REGION_SUM_LINE]:lN,[d.GOLDILOCKS_ZONE_REGION_SUM]:uN,[d.BETWEEN_LINE]:dN,[d.LOCKOUT_LINE]:_N,[d.PARITY_COUNT_LINE]:gN,[d.TIGHTROPE_LINE]:fN,[d.DOUBLE_ARROW_LINE]:hN,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:vN,[d.SPLIT_PEAS]:pN,[d.DOUBLERS_THERMOMETER]:mN,[d.DOUBLERS_BETWEEN_LINE]:EN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:CN,[d.ARROW]:xw,[d.CHAOS_CONSTRUCTION_ARROW]:Dw,[d.AVERAGE_ARROW]:Rw,[d.BULBOUS_ARROW]:Tw,[d.MAZE_WALL]:Kx,[d.KILLER_CAGE]:Vw,[d.UNIQUE_DIGITS_CAGE]:Xw,[d.INVERTED_KILLER_CAGE]:qw,[d.SUM_CAGE]:Zw,[d.SUM_CAGE_LOOK_AND_SAY]:Qw,[d.PARITY_BALANCE_CAGE]:Jw,[d.DIVISIBLE_KILLER_CAGE]:ey,[d.SPOTLIGHT_CAGE]:ty,[d.PUTTERIA_CAGE]:ny,[d.MULTISET_CAGE]:ry,[d.VAULTED_CAGE]:iy,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:oy,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:sy,[d.DOUBLERS_KILLER_CAGE]:ay,[d.NEGATORS_KILLER_CAGE]:ly,[d.CLONE_REGION]:Cy,[d.SANDWICH_SUM]:tL,[d.MYSTERY_SANDWICH_SUM]:nL,[d.X_SUM]:iL,[d.SHORTSIGHTED_X_SUM]:oL,[d.SHIFTED_X_SUM]:sL,[d.BROKEN_X_SUM]:aL,[d.X_SUM_SKYSCRAPERS]:lL,[d.BATTLEFIELD]:cL,[d.SKYSCRAPERS]:uL,[d.X_INDEX]:dL,[d.SANDWICH_SUM_XOR_X_SUM]:rL,[d.RISING_STREAK]:_L,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:fL,[d.OUTSIDE_CONSECUTIVE_SUM]:gL,[d.LOOPWICHES]:hL,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:vL,[d.PENTOMINO_BORDER_COUNT]:pL,[d.LITTLE_KILLER_SUM]:Xy,[d.LITTLE_KILLER_PRODUCT]:qy,[d.LITTLE_KILLER_LOOK_AND_SAY]:Zy,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:Jy,[d.X_OMIT_LITTLE_KILLER_SUM]:Qy,[d.NEGATORS_LITTLE_KILLER_SUM]:eL,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:my,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:Ey,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:$x,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:Fx,[d.FORBIDDEN_KNIGHT_SUM]:Px,[d.LITS_MAX_TETROMINO_SUM]:Hx,[d.COSMETIC_CELL_CENTER_SHAPE]:mL,[d.COSMETIC_CELL_ARROW]:EL,[d.COSMETIC_CELL_MULTI_ARROW]:CL,[d.COSMETIC_EDGE]:IL,[d.COSMETIC_CORNER]:bL,[d.COSMETIC_LINE]:OL,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:wL,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:yL,[d.COSMETIC_ARROW]:AL,[d.COSMETIC_CAGE]:LL,[d.COSMETIC_OUTSIDE_DIRECTION]:SL};class Ri extends Map{constructor(){super()}setConstraint(e,n){return uw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Ri;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Ri;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=cv(r);o!==void 0&&uv(o,Ed)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var Fe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Fe||{});function Ov(t){if(!(t in Fe))throw Error(" not a key in DIRECTION");return Fe[t]}function Ke(t,e){return t.r===e.r&&t.c===e.c}function wv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function Vx(t,e){return{r:t.r*e,c:t.c*e}}function Xx(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Ls(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ke(t,e)}function qx(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ba(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Mt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function ml(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function Zx(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Wa(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function Qx(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const Jx=new Map([[6,Fe.N],[2,Fe.S],[0,Fe.E],[4,Fe.W],[7,Fe.NE],[5,Fe.NW],[1,Fe.SE],[3,Fe.SW]]);function uo(t){t=t%8;const e=Jx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const eR=new Map([[Fe.N,{r:-1,c:0}],[Fe.S,{r:1,c:0}],[Fe.E,{r:0,c:1}],[Fe.W,{r:0,c:-1}],[Fe.NE,{r:-1,c:1}],[Fe.NW,{r:-1,c:-1}],[Fe.SE,{r:1,c:1}],[Fe.SW,{r:1,c:-1}]]);function As(t){const e=eR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Zg(t,e){const n=As(e);return wv(t,n)}function za(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function yv(t,e,n=!1){const r=t.some(o=>Ke(o,e)),i=n?t.some(o=>Ls(o,e)):t.some(o=>qx(o,e));if(!r&&i){const o=[...t,e];return Ba(o),o}return t}function xa(t){return`R${t.r+1}C${t.c+1}`}function Td(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var tR=as.exports,Qg;function nR(){return Qg||(Qg=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,h=2,m=4,E=1,I=2,b=1,O=2,A=4,k=8,G=16,F=32,z=64,P=128,j=256,J=512,ae=30,Q="...",re=800,ge=16,oe=1,pe=2,Ne=3,xe=1/0,Oe=9007199254740991,Ie=17976931348623157e292,je=NaN,qe=4294967295,It=qe-1,xt=qe>>>1,jt=[["ary",P],["bind",b],["bindKey",O],["curry",k],["curryRight",G],["flip",J],["partial",F],["partialRight",z],["rearg",j]],kt="[object Arguments]",Ut="[object Array]",nn="[object AsyncFunction]",_r="[object Boolean]",Bn="[object Date]",Bi="[object DOMException]",Ir="[object Error]",br="[object Function]",$e="[object GeneratorFunction]",Le="[object Map]",Me="[object Number]",Ue="[object Null]",Rt="[object Object]",Mo="[object Promise]",$l="[object Proxy]",Br="[object RegExp]",Nn="[object Set]",gi="[object String]",Wi="[object Symbol]",rt="[object Undefined]",xn="[object WeakMap]",Hs="[object WeakSet]",Wr="[object ArrayBuffer]",Rn="[object DataView]",Uo="[object Float32Array]",$o="[object Float64Array]",Fo="[object Int8Array]",Po="[object Int16Array]",Fl="[object Int32Array]",Pl="[object Uint8Array]",Hl="[object Uint8ClampedArray]",Bl="[object Uint16Array]",Wl="[object Uint32Array]",Vp=/\b__p \+= '';/g,Xp=/\b(__p \+=) '' \+/g,qp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,__=/&(?:amp|lt|gt|quot|#39);/g,f_=/[&<>"']/g,Zp=RegExp(__.source),Qp=RegExp(f_.source),Jp=/<%-([\s\S]+?)%>/g,em=/<%([\s\S]+?)%>/g,g_=/<%=([\s\S]+?)%>/g,tm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nm=/^\w*$/,rm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zl=/[\\^$.*+?()[\]{}|]/g,im=RegExp(zl.source),Yl=/^\s+/,om=/\s/,sm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,am=/\{\n\/\* \[wrapped with (.+)\] \*/,lm=/,? & /,cm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,um=/[()=,{}\[\]\/\s]/,dm=/\\(\\)?/g,_m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,h_=/\w*$/,fm=/^[-+]0x[0-9a-f]+$/i,gm=/^0b[01]+$/i,hm=/^\[object .+?Constructor\]$/,vm=/^0o[0-7]+$/i,pm=/^(?:0|[1-9]\d*)$/,mm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Bs=/($^)/,Em=/['\n\r\u2028\u2029\\]/g,Ws="\\ud800-\\udfff",Cm="\\u0300-\\u036f",Im="\\ufe20-\\ufe2f",bm="\\u20d0-\\u20ff",v_=Cm+Im+bm,p_="\\u2700-\\u27bf",m_="a-z\\xdf-\\xf6\\xf8-\\xff",Om="\\xac\\xb1\\xd7\\xf7",wm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ym="\\u2000-\\u206f",Lm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",E_="A-Z\\xc0-\\xd6\\xd8-\\xde",C_="\\ufe0e\\ufe0f",I_=Om+wm+ym+Lm,jl="['’]",Am="["+Ws+"]",b_="["+I_+"]",zs="["+v_+"]",O_="\\d+",Sm="["+p_+"]",w_="["+m_+"]",y_="[^"+Ws+I_+O_+p_+m_+E_+"]",Kl="\\ud83c[\\udffb-\\udfff]",Nm="(?:"+zs+"|"+Kl+")",L_="[^"+Ws+"]",Vl="(?:\\ud83c[\\udde6-\\uddff]){2}",Xl="[\\ud800-\\udbff][\\udc00-\\udfff]",zi="["+E_+"]",A_="\\u200d",S_="(?:"+w_+"|"+y_+")",xm="(?:"+zi+"|"+y_+")",N_="(?:"+jl+"(?:d|ll|m|re|s|t|ve))?",x_="(?:"+jl+"(?:D|LL|M|RE|S|T|VE))?",R_=Nm+"?",T_="["+C_+"]?",Rm="(?:"+A_+"(?:"+[L_,Vl,Xl].join("|")+")"+T_+R_+")*",Tm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",D_=T_+R_+Rm,km="(?:"+[Sm,Vl,Xl].join("|")+")"+D_,Gm="(?:"+[L_+zs+"?",zs,Vl,Xl,Am].join("|")+")",Mm=RegExp(jl,"g"),Um=RegExp(zs,"g"),ql=RegExp(Kl+"(?="+Kl+")|"+Gm+D_,"g"),$m=RegExp([zi+"?"+w_+"+"+N_+"(?="+[b_,zi,"$"].join("|")+")",xm+"+"+x_+"(?="+[b_,zi+S_,"$"].join("|")+")",zi+"?"+S_+"+"+N_,zi+"+"+x_,Dm,Tm,O_,km].join("|"),"g"),Fm=RegExp("["+A_+Ws+v_+C_+"]"),Pm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Hm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Bm=-1,Tt={};Tt[Uo]=Tt[$o]=Tt[Fo]=Tt[Po]=Tt[Fl]=Tt[Pl]=Tt[Hl]=Tt[Bl]=Tt[Wl]=!0,Tt[kt]=Tt[Ut]=Tt[Wr]=Tt[_r]=Tt[Rn]=Tt[Bn]=Tt[Ir]=Tt[br]=Tt[Le]=Tt[Me]=Tt[Rt]=Tt[Br]=Tt[Nn]=Tt[gi]=Tt[xn]=!1;var St={};St[kt]=St[Ut]=St[Wr]=St[Rn]=St[_r]=St[Bn]=St[Uo]=St[$o]=St[Fo]=St[Po]=St[Fl]=St[Le]=St[Me]=St[Rt]=St[Br]=St[Nn]=St[gi]=St[Wi]=St[Pl]=St[Hl]=St[Bl]=St[Wl]=!0,St[Ir]=St[br]=St[xn]=!1;var Wm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},zm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ym={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},jm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Km=parseFloat,Vm=parseInt,k_=typeof Ra=="object"&&Ra&&Ra.Object===Object&&Ra,Xm=typeof self=="object"&&self&&self.Object===Object&&self,rn=k_||Xm||Function("return this")(),Zl=e&&!e.nodeType&&e,hi=Zl&&!0&&t&&!t.nodeType&&t,G_=hi&&hi.exports===Zl,Ql=G_&&k_.process,Wn=function(){try{var X=hi&&hi.require&&hi.require("util").types;return X||Ql&&Ql.binding&&Ql.binding("util")}catch{}}(),M_=Wn&&Wn.isArrayBuffer,U_=Wn&&Wn.isDate,$_=Wn&&Wn.isMap,F_=Wn&&Wn.isRegExp,P_=Wn&&Wn.isSet,H_=Wn&&Wn.isTypedArray;function Tn(X,le,ie){switch(ie.length){case 0:return X.call(le);case 1:return X.call(le,ie[0]);case 2:return X.call(le,ie[0],ie[1]);case 3:return X.call(le,ie[0],ie[1],ie[2])}return X.apply(le,ie)}function qm(X,le,ie,Re){for(var Ze=-1,pt=X==null?0:X.length;++Ze<pt;){var Kt=X[Ze];le(Re,Kt,ie(Kt),X)}return Re}function zn(X,le){for(var ie=-1,Re=X==null?0:X.length;++ie<Re&&le(X[ie],ie,X)!==!1;);return X}function Zm(X,le){for(var ie=X==null?0:X.length;ie--&&le(X[ie],ie,X)!==!1;);return X}function B_(X,le){for(var ie=-1,Re=X==null?0:X.length;++ie<Re;)if(!le(X[ie],ie,X))return!1;return!0}function zr(X,le){for(var ie=-1,Re=X==null?0:X.length,Ze=0,pt=[];++ie<Re;){var Kt=X[ie];le(Kt,ie,X)&&(pt[Ze++]=Kt)}return pt}function Ys(X,le){var ie=X==null?0:X.length;return!!ie&&Yi(X,le,0)>-1}function Jl(X,le,ie){for(var Re=-1,Ze=X==null?0:X.length;++Re<Ze;)if(ie(le,X[Re]))return!0;return!1}function Gt(X,le){for(var ie=-1,Re=X==null?0:X.length,Ze=Array(Re);++ie<Re;)Ze[ie]=le(X[ie],ie,X);return Ze}function Yr(X,le){for(var ie=-1,Re=le.length,Ze=X.length;++ie<Re;)X[Ze+ie]=le[ie];return X}function ec(X,le,ie,Re){var Ze=-1,pt=X==null?0:X.length;for(Re&&pt&&(ie=X[++Ze]);++Ze<pt;)ie=le(ie,X[Ze],Ze,X);return ie}function Qm(X,le,ie,Re){var Ze=X==null?0:X.length;for(Re&&Ze&&(ie=X[--Ze]);Ze--;)ie=le(ie,X[Ze],Ze,X);return ie}function tc(X,le){for(var ie=-1,Re=X==null?0:X.length;++ie<Re;)if(le(X[ie],ie,X))return!0;return!1}var Jm=nc("length");function e1(X){return X.split("")}function t1(X){return X.match(cm)||[]}function W_(X,le,ie){var Re;return ie(X,function(Ze,pt,Kt){if(le(Ze,pt,Kt))return Re=pt,!1}),Re}function js(X,le,ie,Re){for(var Ze=X.length,pt=ie+(Re?1:-1);Re?pt--:++pt<Ze;)if(le(X[pt],pt,X))return pt;return-1}function Yi(X,le,ie){return le===le?f1(X,le,ie):js(X,z_,ie)}function n1(X,le,ie,Re){for(var Ze=ie-1,pt=X.length;++Ze<pt;)if(Re(X[Ze],le))return Ze;return-1}function z_(X){return X!==X}function Y_(X,le){var ie=X==null?0:X.length;return ie?ic(X,le)/ie:je}function nc(X){return function(le){return le==null?n:le[X]}}function rc(X){return function(le){return X==null?n:X[le]}}function j_(X,le,ie,Re,Ze){return Ze(X,function(pt,Kt,wt){ie=Re?(Re=!1,pt):le(ie,pt,Kt,wt)}),ie}function r1(X,le){var ie=X.length;for(X.sort(le);ie--;)X[ie]=X[ie].value;return X}function ic(X,le){for(var ie,Re=-1,Ze=X.length;++Re<Ze;){var pt=le(X[Re]);pt!==n&&(ie=ie===n?pt:ie+pt)}return ie}function oc(X,le){for(var ie=-1,Re=Array(X);++ie<X;)Re[ie]=le(ie);return Re}function i1(X,le){return Gt(le,function(ie){return[ie,X[ie]]})}function K_(X){return X&&X.slice(0,Z_(X)+1).replace(Yl,"")}function Dn(X){return function(le){return X(le)}}function sc(X,le){return Gt(le,function(ie){return X[ie]})}function Ho(X,le){return X.has(le)}function V_(X,le){for(var ie=-1,Re=X.length;++ie<Re&&Yi(le,X[ie],0)>-1;);return ie}function X_(X,le){for(var ie=X.length;ie--&&Yi(le,X[ie],0)>-1;);return ie}function o1(X,le){for(var ie=X.length,Re=0;ie--;)X[ie]===le&&++Re;return Re}var s1=rc(Wm),a1=rc(zm);function l1(X){return"\\"+jm[X]}function c1(X,le){return X==null?n:X[le]}function ji(X){return Fm.test(X)}function u1(X){return Pm.test(X)}function d1(X){for(var le,ie=[];!(le=X.next()).done;)ie.push(le.value);return ie}function ac(X){var le=-1,ie=Array(X.size);return X.forEach(function(Re,Ze){ie[++le]=[Ze,Re]}),ie}function q_(X,le){return function(ie){return X(le(ie))}}function jr(X,le){for(var ie=-1,Re=X.length,Ze=0,pt=[];++ie<Re;){var Kt=X[ie];(Kt===le||Kt===p)&&(X[ie]=p,pt[Ze++]=ie)}return pt}function Ks(X){var le=-1,ie=Array(X.size);return X.forEach(function(Re){ie[++le]=Re}),ie}function _1(X){var le=-1,ie=Array(X.size);return X.forEach(function(Re){ie[++le]=[Re,Re]}),ie}function f1(X,le,ie){for(var Re=ie-1,Ze=X.length;++Re<Ze;)if(X[Re]===le)return Re;return-1}function g1(X,le,ie){for(var Re=ie+1;Re--;)if(X[Re]===le)return Re;return Re}function Ki(X){return ji(X)?v1(X):Jm(X)}function rr(X){return ji(X)?p1(X):e1(X)}function Z_(X){for(var le=X.length;le--&&om.test(X.charAt(le)););return le}var h1=rc(Ym);function v1(X){for(var le=ql.lastIndex=0;ql.test(X);)++le;return le}function p1(X){return X.match(ql)||[]}function m1(X){return X.match($m)||[]}var E1=function X(le){le=le==null?rn:Vi.defaults(rn.Object(),le,Vi.pick(rn,Hm));var ie=le.Array,Re=le.Date,Ze=le.Error,pt=le.Function,Kt=le.Math,wt=le.Object,lc=le.RegExp,C1=le.String,Yn=le.TypeError,Vs=ie.prototype,I1=pt.prototype,Xi=wt.prototype,Xs=le["__core-js_shared__"],qs=I1.toString,Et=Xi.hasOwnProperty,b1=0,Q_=function(){var s=/[^.]+$/.exec(Xs&&Xs.keys&&Xs.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Zs=Xi.toString,O1=qs.call(wt),w1=rn._,y1=lc("^"+qs.call(Et).replace(zl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qs=G_?le.Buffer:n,Kr=le.Symbol,Js=le.Uint8Array,J_=Qs?Qs.allocUnsafe:n,ea=q_(wt.getPrototypeOf,wt),ef=wt.create,tf=Xi.propertyIsEnumerable,ta=Vs.splice,nf=Kr?Kr.isConcatSpreadable:n,Bo=Kr?Kr.iterator:n,vi=Kr?Kr.toStringTag:n,na=function(){try{var s=Ii(wt,"defineProperty");return s({},"",{}),s}catch{}}(),L1=le.clearTimeout!==rn.clearTimeout&&le.clearTimeout,A1=Re&&Re.now!==rn.Date.now&&Re.now,S1=le.setTimeout!==rn.setTimeout&&le.setTimeout,ra=Kt.ceil,ia=Kt.floor,cc=wt.getOwnPropertySymbols,N1=Qs?Qs.isBuffer:n,rf=le.isFinite,x1=Vs.join,R1=q_(wt.keys,wt),Vt=Kt.max,ln=Kt.min,T1=Re.now,D1=le.parseInt,of=Kt.random,k1=Vs.reverse,uc=Ii(le,"DataView"),Wo=Ii(le,"Map"),dc=Ii(le,"Promise"),qi=Ii(le,"Set"),zo=Ii(le,"WeakMap"),Yo=Ii(wt,"create"),oa=zo&&new zo,Zi={},G1=bi(uc),M1=bi(Wo),U1=bi(dc),$1=bi(qi),F1=bi(zo),sa=Kr?Kr.prototype:n,jo=sa?sa.valueOf:n,sf=sa?sa.toString:n;function x(s){if(Ft(s)&&!Je(s)&&!(s instanceof ct)){if(s instanceof jn)return s;if(Et.call(s,"__wrapped__"))return ag(s)}return new jn(s)}var Qi=function(){function s(){}return function(l){if(!$t(l))return{};if(ef)return ef(l);s.prototype=l;var v=new s;return s.prototype=n,v}}();function aa(){}function jn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}x.templateSettings={escape:Jp,evaluate:em,interpolate:g_,variable:"",imports:{_:x}},x.prototype=aa.prototype,x.prototype.constructor=x,jn.prototype=Qi(aa.prototype),jn.prototype.constructor=jn;function ct(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=qe,this.__views__=[]}function P1(){var s=new ct(this.__wrapped__);return s.__actions__=Cn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=Cn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=Cn(this.__views__),s}function H1(){if(this.__filtered__){var s=new ct(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function B1(){var s=this.__wrapped__.value(),l=this.__dir__,v=Je(s),C=l<0,w=v?s.length:0,R=e0(0,w,this.__views__),$=R.start,Y=R.end,q=Y-$,_e=C?Y:$-1,fe=this.__iteratees__,ve=fe.length,Se=0,ke=ln(q,this.__takeCount__);if(!v||!C&&w==q&&ke==q)return xf(s,this.__actions__);var Be=[];e:for(;q--&&Se<ke;){_e+=l;for(var ot=-1,We=s[_e];++ot<ve;){var lt=fe[ot],dt=lt.iteratee,Mn=lt.type,gn=dt(We);if(Mn==pe)We=gn;else if(!gn){if(Mn==oe)continue e;break e}}Be[Se++]=We}return Be}ct.prototype=Qi(aa.prototype),ct.prototype.constructor=ct;function pi(s){var l=-1,v=s==null?0:s.length;for(this.clear();++l<v;){var C=s[l];this.set(C[0],C[1])}}function W1(){this.__data__=Yo?Yo(null):{},this.size=0}function z1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function Y1(s){var l=this.__data__;if(Yo){var v=l[s];return v===u?n:v}return Et.call(l,s)?l[s]:n}function j1(s){var l=this.__data__;return Yo?l[s]!==n:Et.call(l,s)}function K1(s,l){var v=this.__data__;return this.size+=this.has(s)?0:1,v[s]=Yo&&l===n?u:l,this}pi.prototype.clear=W1,pi.prototype.delete=z1,pi.prototype.get=Y1,pi.prototype.has=j1,pi.prototype.set=K1;function Or(s){var l=-1,v=s==null?0:s.length;for(this.clear();++l<v;){var C=s[l];this.set(C[0],C[1])}}function V1(){this.__data__=[],this.size=0}function X1(s){var l=this.__data__,v=la(l,s);if(v<0)return!1;var C=l.length-1;return v==C?l.pop():ta.call(l,v,1),--this.size,!0}function q1(s){var l=this.__data__,v=la(l,s);return v<0?n:l[v][1]}function Z1(s){return la(this.__data__,s)>-1}function Q1(s,l){var v=this.__data__,C=la(v,s);return C<0?(++this.size,v.push([s,l])):v[C][1]=l,this}Or.prototype.clear=V1,Or.prototype.delete=X1,Or.prototype.get=q1,Or.prototype.has=Z1,Or.prototype.set=Q1;function wr(s){var l=-1,v=s==null?0:s.length;for(this.clear();++l<v;){var C=s[l];this.set(C[0],C[1])}}function J1(){this.size=0,this.__data__={hash:new pi,map:new(Wo||Or),string:new pi}}function eE(s){var l=Ca(this,s).delete(s);return this.size-=l?1:0,l}function tE(s){return Ca(this,s).get(s)}function nE(s){return Ca(this,s).has(s)}function rE(s,l){var v=Ca(this,s),C=v.size;return v.set(s,l),this.size+=v.size==C?0:1,this}wr.prototype.clear=J1,wr.prototype.delete=eE,wr.prototype.get=tE,wr.prototype.has=nE,wr.prototype.set=rE;function mi(s){var l=-1,v=s==null?0:s.length;for(this.__data__=new wr;++l<v;)this.add(s[l])}function iE(s){return this.__data__.set(s,u),this}function oE(s){return this.__data__.has(s)}mi.prototype.add=mi.prototype.push=iE,mi.prototype.has=oE;function ir(s){var l=this.__data__=new Or(s);this.size=l.size}function sE(){this.__data__=new Or,this.size=0}function aE(s){var l=this.__data__,v=l.delete(s);return this.size=l.size,v}function lE(s){return this.__data__.get(s)}function cE(s){return this.__data__.has(s)}function uE(s,l){var v=this.__data__;if(v instanceof Or){var C=v.__data__;if(!Wo||C.length<i-1)return C.push([s,l]),this.size=++v.size,this;v=this.__data__=new wr(C)}return v.set(s,l),this.size=v.size,this}ir.prototype.clear=sE,ir.prototype.delete=aE,ir.prototype.get=lE,ir.prototype.has=cE,ir.prototype.set=uE;function af(s,l){var v=Je(s),C=!v&&Oi(s),w=!v&&!C&&Qr(s),R=!v&&!C&&!w&&no(s),$=v||C||w||R,Y=$?oc(s.length,C1):[],q=Y.length;for(var _e in s)(l||Et.call(s,_e))&&!($&&(_e=="length"||w&&(_e=="offset"||_e=="parent")||R&&(_e=="buffer"||_e=="byteLength"||_e=="byteOffset")||Sr(_e,q)))&&Y.push(_e);return Y}function lf(s){var l=s.length;return l?s[bc(0,l-1)]:n}function dE(s,l){return Ia(Cn(s),Ei(l,0,s.length))}function _E(s){return Ia(Cn(s))}function _c(s,l,v){(v!==n&&!or(s[l],v)||v===n&&!(l in s))&&yr(s,l,v)}function Ko(s,l,v){var C=s[l];(!(Et.call(s,l)&&or(C,v))||v===n&&!(l in s))&&yr(s,l,v)}function la(s,l){for(var v=s.length;v--;)if(or(s[v][0],l))return v;return-1}function fE(s,l,v,C){return Vr(s,function(w,R,$){l(C,w,v(w),$)}),C}function cf(s,l){return s&&gr(l,Zt(l),s)}function gE(s,l){return s&&gr(l,bn(l),s)}function yr(s,l,v){l=="__proto__"&&na?na(s,l,{configurable:!0,enumerable:!0,value:v,writable:!0}):s[l]=v}function fc(s,l){for(var v=-1,C=l.length,w=ie(C),R=s==null;++v<C;)w[v]=R?n:Kc(s,l[v]);return w}function Ei(s,l,v){return s===s&&(v!==n&&(s=s<=v?s:v),l!==n&&(s=s>=l?s:l)),s}function Kn(s,l,v,C,w,R){var $,Y=l&g,q=l&h,_e=l&m;if(v&&($=w?v(s,C,w,R):v(s)),$!==n)return $;if(!$t(s))return s;var fe=Je(s);if(fe){if($=n0(s),!Y)return Cn(s,$)}else{var ve=cn(s),Se=ve==br||ve==$e;if(Qr(s))return Df(s,Y);if(ve==Rt||ve==kt||Se&&!w){if($=q||Se?{}:Qf(s),!Y)return q?YE(s,gE($,s)):zE(s,cf($,s))}else{if(!St[ve])return w?s:{};$=r0(s,ve,Y)}}R||(R=new ir);var ke=R.get(s);if(ke)return ke;R.set(s,$),Ag(s)?s.forEach(function(We){$.add(Kn(We,l,v,We,s,R))}):yg(s)&&s.forEach(function(We,lt){$.set(lt,Kn(We,l,v,lt,s,R))});var Be=_e?q?Dc:Tc:q?bn:Zt,ot=fe?n:Be(s);return zn(ot||s,function(We,lt){ot&&(lt=We,We=s[lt]),Ko($,lt,Kn(We,l,v,lt,s,R))}),$}function hE(s){var l=Zt(s);return function(v){return uf(v,s,l)}}function uf(s,l,v){var C=v.length;if(s==null)return!C;for(s=wt(s);C--;){var w=v[C],R=l[w],$=s[w];if($===n&&!(w in s)||!R($))return!1}return!0}function df(s,l,v){if(typeof s!="function")throw new Yn(a);return es(function(){s.apply(n,v)},l)}function Vo(s,l,v,C){var w=-1,R=Ys,$=!0,Y=s.length,q=[],_e=l.length;if(!Y)return q;v&&(l=Gt(l,Dn(v))),C?(R=Jl,$=!1):l.length>=i&&(R=Ho,$=!1,l=new mi(l));e:for(;++w<Y;){var fe=s[w],ve=v==null?fe:v(fe);if(fe=C||fe!==0?fe:0,$&&ve===ve){for(var Se=_e;Se--;)if(l[Se]===ve)continue e;q.push(fe)}else R(l,ve,C)||q.push(fe)}return q}var Vr=$f(fr),_f=$f(hc,!0);function vE(s,l){var v=!0;return Vr(s,function(C,w,R){return v=!!l(C,w,R),v}),v}function ca(s,l,v){for(var C=-1,w=s.length;++C<w;){var R=s[C],$=l(R);if($!=null&&(Y===n?$===$&&!Gn($):v($,Y)))var Y=$,q=R}return q}function pE(s,l,v,C){var w=s.length;for(v=it(v),v<0&&(v=-v>w?0:w+v),C=C===n||C>w?w:it(C),C<0&&(C+=w),C=v>C?0:Ng(C);v<C;)s[v++]=l;return s}function ff(s,l){var v=[];return Vr(s,function(C,w,R){l(C,w,R)&&v.push(C)}),v}function on(s,l,v,C,w){var R=-1,$=s.length;for(v||(v=o0),w||(w=[]);++R<$;){var Y=s[R];l>0&&v(Y)?l>1?on(Y,l-1,v,C,w):Yr(w,Y):C||(w[w.length]=Y)}return w}var gc=Ff(),gf=Ff(!0);function fr(s,l){return s&&gc(s,l,Zt)}function hc(s,l){return s&&gf(s,l,Zt)}function ua(s,l){return zr(l,function(v){return Nr(s[v])})}function Ci(s,l){l=qr(l,s);for(var v=0,C=l.length;s!=null&&v<C;)s=s[hr(l[v++])];return v&&v==C?s:n}function hf(s,l,v){var C=l(s);return Je(s)?C:Yr(C,v(s))}function _n(s){return s==null?s===n?rt:Ue:vi&&vi in wt(s)?JE(s):_0(s)}function vc(s,l){return s>l}function mE(s,l){return s!=null&&Et.call(s,l)}function EE(s,l){return s!=null&&l in wt(s)}function CE(s,l,v){return s>=ln(l,v)&&s<Vt(l,v)}function pc(s,l,v){for(var C=v?Jl:Ys,w=s[0].length,R=s.length,$=R,Y=ie(R),q=1/0,_e=[];$--;){var fe=s[$];$&&l&&(fe=Gt(fe,Dn(l))),q=ln(fe.length,q),Y[$]=!v&&(l||w>=120&&fe.length>=120)?new mi($&&fe):n}fe=s[0];var ve=-1,Se=Y[0];e:for(;++ve<w&&_e.length<q;){var ke=fe[ve],Be=l?l(ke):ke;if(ke=v||ke!==0?ke:0,!(Se?Ho(Se,Be):C(_e,Be,v))){for($=R;--$;){var ot=Y[$];if(!(ot?Ho(ot,Be):C(s[$],Be,v)))continue e}Se&&Se.push(Be),_e.push(ke)}}return _e}function IE(s,l,v,C){return fr(s,function(w,R,$){l(C,v(w),R,$)}),C}function Xo(s,l,v){l=qr(l,s),s=ng(s,l);var C=s==null?s:s[hr(Xn(l))];return C==null?n:Tn(C,s,v)}function vf(s){return Ft(s)&&_n(s)==kt}function bE(s){return Ft(s)&&_n(s)==Wr}function OE(s){return Ft(s)&&_n(s)==Bn}function qo(s,l,v,C,w){return s===l?!0:s==null||l==null||!Ft(s)&&!Ft(l)?s!==s&&l!==l:wE(s,l,v,C,qo,w)}function wE(s,l,v,C,w,R){var $=Je(s),Y=Je(l),q=$?Ut:cn(s),_e=Y?Ut:cn(l);q=q==kt?Rt:q,_e=_e==kt?Rt:_e;var fe=q==Rt,ve=_e==Rt,Se=q==_e;if(Se&&Qr(s)){if(!Qr(l))return!1;$=!0,fe=!1}if(Se&&!fe)return R||(R=new ir),$||no(s)?Xf(s,l,v,C,w,R):ZE(s,l,q,v,C,w,R);if(!(v&E)){var ke=fe&&Et.call(s,"__wrapped__"),Be=ve&&Et.call(l,"__wrapped__");if(ke||Be){var ot=ke?s.value():s,We=Be?l.value():l;return R||(R=new ir),w(ot,We,v,C,R)}}return Se?(R||(R=new ir),QE(s,l,v,C,w,R)):!1}function yE(s){return Ft(s)&&cn(s)==Le}function mc(s,l,v,C){var w=v.length,R=w,$=!C;if(s==null)return!R;for(s=wt(s);w--;){var Y=v[w];if($&&Y[2]?Y[1]!==s[Y[0]]:!(Y[0]in s))return!1}for(;++w<R;){Y=v[w];var q=Y[0],_e=s[q],fe=Y[1];if($&&Y[2]){if(_e===n&&!(q in s))return!1}else{var ve=new ir;if(C)var Se=C(_e,fe,q,s,l,ve);if(!(Se===n?qo(fe,_e,E|I,C,ve):Se))return!1}}return!0}function pf(s){if(!$t(s)||a0(s))return!1;var l=Nr(s)?y1:hm;return l.test(bi(s))}function LE(s){return Ft(s)&&_n(s)==Br}function AE(s){return Ft(s)&&cn(s)==Nn}function SE(s){return Ft(s)&&Aa(s.length)&&!!Tt[_n(s)]}function mf(s){return typeof s=="function"?s:s==null?On:typeof s=="object"?Je(s)?If(s[0],s[1]):Cf(s):Pg(s)}function Ec(s){if(!Jo(s))return R1(s);var l=[];for(var v in wt(s))Et.call(s,v)&&v!="constructor"&&l.push(v);return l}function NE(s){if(!$t(s))return d0(s);var l=Jo(s),v=[];for(var C in s)C=="constructor"&&(l||!Et.call(s,C))||v.push(C);return v}function Cc(s,l){return s<l}function Ef(s,l){var v=-1,C=In(s)?ie(s.length):[];return Vr(s,function(w,R,$){C[++v]=l(w,R,$)}),C}function Cf(s){var l=Gc(s);return l.length==1&&l[0][2]?eg(l[0][0],l[0][1]):function(v){return v===s||mc(v,s,l)}}function If(s,l){return Uc(s)&&Jf(l)?eg(hr(s),l):function(v){var C=Kc(v,s);return C===n&&C===l?Vc(v,s):qo(l,C,E|I)}}function da(s,l,v,C,w){s!==l&&gc(l,function(R,$){if(w||(w=new ir),$t(R))xE(s,l,$,v,da,C,w);else{var Y=C?C(Fc(s,$),R,$+"",s,l,w):n;Y===n&&(Y=R),_c(s,$,Y)}},bn)}function xE(s,l,v,C,w,R,$){var Y=Fc(s,v),q=Fc(l,v),_e=$.get(q);if(_e){_c(s,v,_e);return}var fe=R?R(Y,q,v+"",s,l,$):n,ve=fe===n;if(ve){var Se=Je(q),ke=!Se&&Qr(q),Be=!Se&&!ke&&no(q);fe=q,Se||ke||Be?Je(Y)?fe=Y:Ht(Y)?fe=Cn(Y):ke?(ve=!1,fe=Df(q,!0)):Be?(ve=!1,fe=kf(q,!0)):fe=[]:ts(q)||Oi(q)?(fe=Y,Oi(Y)?fe=xg(Y):(!$t(Y)||Nr(Y))&&(fe=Qf(q))):ve=!1}ve&&($.set(q,fe),w(fe,q,C,R,$),$.delete(q)),_c(s,v,fe)}function bf(s,l){var v=s.length;if(v)return l+=l<0?v:0,Sr(l,v)?s[l]:n}function Of(s,l,v){l.length?l=Gt(l,function(R){return Je(R)?function($){return Ci($,R.length===1?R[0]:R)}:R}):l=[On];var C=-1;l=Gt(l,Dn(He()));var w=Ef(s,function(R,$,Y){var q=Gt(l,function(_e){return _e(R)});return{criteria:q,index:++C,value:R}});return r1(w,function(R,$){return WE(R,$,v)})}function RE(s,l){return wf(s,l,function(v,C){return Vc(s,C)})}function wf(s,l,v){for(var C=-1,w=l.length,R={};++C<w;){var $=l[C],Y=Ci(s,$);v(Y,$)&&Zo(R,qr($,s),Y)}return R}function TE(s){return function(l){return Ci(l,s)}}function Ic(s,l,v,C){var w=C?n1:Yi,R=-1,$=l.length,Y=s;for(s===l&&(l=Cn(l)),v&&(Y=Gt(s,Dn(v)));++R<$;)for(var q=0,_e=l[R],fe=v?v(_e):_e;(q=w(Y,fe,q,C))>-1;)Y!==s&&ta.call(Y,q,1),ta.call(s,q,1);return s}function yf(s,l){for(var v=s?l.length:0,C=v-1;v--;){var w=l[v];if(v==C||w!==R){var R=w;Sr(w)?ta.call(s,w,1):yc(s,w)}}return s}function bc(s,l){return s+ia(of()*(l-s+1))}function DE(s,l,v,C){for(var w=-1,R=Vt(ra((l-s)/(v||1)),0),$=ie(R);R--;)$[C?R:++w]=s,s+=v;return $}function Oc(s,l){var v="";if(!s||l<1||l>Oe)return v;do l%2&&(v+=s),l=ia(l/2),l&&(s+=s);while(l);return v}function st(s,l){return Pc(tg(s,l,On),s+"")}function kE(s){return lf(ro(s))}function GE(s,l){var v=ro(s);return Ia(v,Ei(l,0,v.length))}function Zo(s,l,v,C){if(!$t(s))return s;l=qr(l,s);for(var w=-1,R=l.length,$=R-1,Y=s;Y!=null&&++w<R;){var q=hr(l[w]),_e=v;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(w!=$){var fe=Y[q];_e=C?C(fe,q,Y):n,_e===n&&(_e=$t(fe)?fe:Sr(l[w+1])?[]:{})}Ko(Y,q,_e),Y=Y[q]}return s}var Lf=oa?function(s,l){return oa.set(s,l),s}:On,ME=na?function(s,l){return na(s,"toString",{configurable:!0,enumerable:!1,value:qc(l),writable:!0})}:On;function UE(s){return Ia(ro(s))}function Vn(s,l,v){var C=-1,w=s.length;l<0&&(l=-l>w?0:w+l),v=v>w?w:v,v<0&&(v+=w),w=l>v?0:v-l>>>0,l>>>=0;for(var R=ie(w);++C<w;)R[C]=s[C+l];return R}function $E(s,l){var v;return Vr(s,function(C,w,R){return v=l(C,w,R),!v}),!!v}function _a(s,l,v){var C=0,w=s==null?C:s.length;if(typeof l=="number"&&l===l&&w<=xt){for(;C<w;){var R=C+w>>>1,$=s[R];$!==null&&!Gn($)&&(v?$<=l:$<l)?C=R+1:w=R}return w}return wc(s,l,On,v)}function wc(s,l,v,C){var w=0,R=s==null?0:s.length;if(R===0)return 0;l=v(l);for(var $=l!==l,Y=l===null,q=Gn(l),_e=l===n;w<R;){var fe=ia((w+R)/2),ve=v(s[fe]),Se=ve!==n,ke=ve===null,Be=ve===ve,ot=Gn(ve);if($)var We=C||Be;else _e?We=Be&&(C||Se):Y?We=Be&&Se&&(C||!ke):q?We=Be&&Se&&!ke&&(C||!ot):ke||ot?We=!1:We=C?ve<=l:ve<l;We?w=fe+1:R=fe}return ln(R,It)}function Af(s,l){for(var v=-1,C=s.length,w=0,R=[];++v<C;){var $=s[v],Y=l?l($):$;if(!v||!or(Y,q)){var q=Y;R[w++]=$===0?0:$}}return R}function Sf(s){return typeof s=="number"?s:Gn(s)?je:+s}function kn(s){if(typeof s=="string")return s;if(Je(s))return Gt(s,kn)+"";if(Gn(s))return sf?sf.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Xr(s,l,v){var C=-1,w=Ys,R=s.length,$=!0,Y=[],q=Y;if(v)$=!1,w=Jl;else if(R>=i){var _e=l?null:XE(s);if(_e)return Ks(_e);$=!1,w=Ho,q=new mi}else q=l?[]:Y;e:for(;++C<R;){var fe=s[C],ve=l?l(fe):fe;if(fe=v||fe!==0?fe:0,$&&ve===ve){for(var Se=q.length;Se--;)if(q[Se]===ve)continue e;l&&q.push(ve),Y.push(fe)}else w(q,ve,v)||(q!==Y&&q.push(ve),Y.push(fe))}return Y}function yc(s,l){return l=qr(l,s),s=ng(s,l),s==null||delete s[hr(Xn(l))]}function Nf(s,l,v,C){return Zo(s,l,v(Ci(s,l)),C)}function fa(s,l,v,C){for(var w=s.length,R=C?w:-1;(C?R--:++R<w)&&l(s[R],R,s););return v?Vn(s,C?0:R,C?R+1:w):Vn(s,C?R+1:0,C?w:R)}function xf(s,l){var v=s;return v instanceof ct&&(v=v.value()),ec(l,function(C,w){return w.func.apply(w.thisArg,Yr([C],w.args))},v)}function Lc(s,l,v){var C=s.length;if(C<2)return C?Xr(s[0]):[];for(var w=-1,R=ie(C);++w<C;)for(var $=s[w],Y=-1;++Y<C;)Y!=w&&(R[w]=Vo(R[w]||$,s[Y],l,v));return Xr(on(R,1),l,v)}function Rf(s,l,v){for(var C=-1,w=s.length,R=l.length,$={};++C<w;){var Y=C<R?l[C]:n;v($,s[C],Y)}return $}function Ac(s){return Ht(s)?s:[]}function Sc(s){return typeof s=="function"?s:On}function qr(s,l){return Je(s)?s:Uc(s,l)?[s]:sg(mt(s))}var FE=st;function Zr(s,l,v){var C=s.length;return v=v===n?C:v,!l&&v>=C?s:Vn(s,l,v)}var Tf=L1||function(s){return rn.clearTimeout(s)};function Df(s,l){if(l)return s.slice();var v=s.length,C=J_?J_(v):new s.constructor(v);return s.copy(C),C}function Nc(s){var l=new s.constructor(s.byteLength);return new Js(l).set(new Js(s)),l}function PE(s,l){var v=l?Nc(s.buffer):s.buffer;return new s.constructor(v,s.byteOffset,s.byteLength)}function HE(s){var l=new s.constructor(s.source,h_.exec(s));return l.lastIndex=s.lastIndex,l}function BE(s){return jo?wt(jo.call(s)):{}}function kf(s,l){var v=l?Nc(s.buffer):s.buffer;return new s.constructor(v,s.byteOffset,s.length)}function Gf(s,l){if(s!==l){var v=s!==n,C=s===null,w=s===s,R=Gn(s),$=l!==n,Y=l===null,q=l===l,_e=Gn(l);if(!Y&&!_e&&!R&&s>l||R&&$&&q&&!Y&&!_e||C&&$&&q||!v&&q||!w)return 1;if(!C&&!R&&!_e&&s<l||_e&&v&&w&&!C&&!R||Y&&v&&w||!$&&w||!q)return-1}return 0}function WE(s,l,v){for(var C=-1,w=s.criteria,R=l.criteria,$=w.length,Y=v.length;++C<$;){var q=Gf(w[C],R[C]);if(q){if(C>=Y)return q;var _e=v[C];return q*(_e=="desc"?-1:1)}}return s.index-l.index}function Mf(s,l,v,C){for(var w=-1,R=s.length,$=v.length,Y=-1,q=l.length,_e=Vt(R-$,0),fe=ie(q+_e),ve=!C;++Y<q;)fe[Y]=l[Y];for(;++w<$;)(ve||w<R)&&(fe[v[w]]=s[w]);for(;_e--;)fe[Y++]=s[w++];return fe}function Uf(s,l,v,C){for(var w=-1,R=s.length,$=-1,Y=v.length,q=-1,_e=l.length,fe=Vt(R-Y,0),ve=ie(fe+_e),Se=!C;++w<fe;)ve[w]=s[w];for(var ke=w;++q<_e;)ve[ke+q]=l[q];for(;++$<Y;)(Se||w<R)&&(ve[ke+v[$]]=s[w++]);return ve}function Cn(s,l){var v=-1,C=s.length;for(l||(l=ie(C));++v<C;)l[v]=s[v];return l}function gr(s,l,v,C){var w=!v;v||(v={});for(var R=-1,$=l.length;++R<$;){var Y=l[R],q=C?C(v[Y],s[Y],Y,v,s):n;q===n&&(q=s[Y]),w?yr(v,Y,q):Ko(v,Y,q)}return v}function zE(s,l){return gr(s,Mc(s),l)}function YE(s,l){return gr(s,qf(s),l)}function ga(s,l){return function(v,C){var w=Je(v)?qm:fE,R=l?l():{};return w(v,s,He(C,2),R)}}function Ji(s){return st(function(l,v){var C=-1,w=v.length,R=w>1?v[w-1]:n,$=w>2?v[2]:n;for(R=s.length>3&&typeof R=="function"?(w--,R):n,$&&fn(v[0],v[1],$)&&(R=w<3?n:R,w=1),l=wt(l);++C<w;){var Y=v[C];Y&&s(l,Y,C,R)}return l})}function $f(s,l){return function(v,C){if(v==null)return v;if(!In(v))return s(v,C);for(var w=v.length,R=l?w:-1,$=wt(v);(l?R--:++R<w)&&C($[R],R,$)!==!1;);return v}}function Ff(s){return function(l,v,C){for(var w=-1,R=wt(l),$=C(l),Y=$.length;Y--;){var q=$[s?Y:++w];if(v(R[q],q,R)===!1)break}return l}}function jE(s,l,v){var C=l&b,w=Qo(s);function R(){var $=this&&this!==rn&&this instanceof R?w:s;return $.apply(C?v:this,arguments)}return R}function Pf(s){return function(l){l=mt(l);var v=ji(l)?rr(l):n,C=v?v[0]:l.charAt(0),w=v?Zr(v,1).join(""):l.slice(1);return C[s]()+w}}function eo(s){return function(l){return ec($g(Ug(l).replace(Mm,"")),s,"")}}function Qo(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var v=Qi(s.prototype),C=s.apply(v,l);return $t(C)?C:v}}function KE(s,l,v){var C=Qo(s);function w(){for(var R=arguments.length,$=ie(R),Y=R,q=to(w);Y--;)$[Y]=arguments[Y];var _e=R<3&&$[0]!==q&&$[R-1]!==q?[]:jr($,q);if(R-=_e.length,R<v)return Yf(s,l,ha,w.placeholder,n,$,_e,n,n,v-R);var fe=this&&this!==rn&&this instanceof w?C:s;return Tn(fe,this,$)}return w}function Hf(s){return function(l,v,C){var w=wt(l);if(!In(l)){var R=He(v,3);l=Zt(l),v=function(Y){return R(w[Y],Y,w)}}var $=s(l,v,C);return $>-1?w[R?l[$]:$]:n}}function Bf(s){return Ar(function(l){var v=l.length,C=v,w=jn.prototype.thru;for(s&&l.reverse();C--;){var R=l[C];if(typeof R!="function")throw new Yn(a);if(w&&!$&&Ea(R)=="wrapper")var $=new jn([],!0)}for(C=$?C:v;++C<v;){R=l[C];var Y=Ea(R),q=Y=="wrapper"?kc(R):n;q&&$c(q[0])&&q[1]==(P|k|F|j)&&!q[4].length&&q[9]==1?$=$[Ea(q[0])].apply($,q[3]):$=R.length==1&&$c(R)?$[Y]():$.thru(R)}return function(){var _e=arguments,fe=_e[0];if($&&_e.length==1&&Je(fe))return $.plant(fe).value();for(var ve=0,Se=v?l[ve].apply(this,_e):fe;++ve<v;)Se=l[ve].call(this,Se);return Se}})}function ha(s,l,v,C,w,R,$,Y,q,_e){var fe=l&P,ve=l&b,Se=l&O,ke=l&(k|G),Be=l&J,ot=Se?n:Qo(s);function We(){for(var lt=arguments.length,dt=ie(lt),Mn=lt;Mn--;)dt[Mn]=arguments[Mn];if(ke)var gn=to(We),Un=o1(dt,gn);if(C&&(dt=Mf(dt,C,w,ke)),R&&(dt=Uf(dt,R,$,ke)),lt-=Un,ke&&lt<_e){var Bt=jr(dt,gn);return Yf(s,l,ha,We.placeholder,v,dt,Bt,Y,q,_e-lt)}var sr=ve?v:this,Rr=Se?sr[s]:s;return lt=dt.length,Y?dt=f0(dt,Y):Be&&lt>1&&dt.reverse(),fe&&q<lt&&(dt.length=q),this&&this!==rn&&this instanceof We&&(Rr=ot||Qo(Rr)),Rr.apply(sr,dt)}return We}function Wf(s,l){return function(v,C){return IE(v,s,l(C),{})}}function va(s,l){return function(v,C){var w;if(v===n&&C===n)return l;if(v!==n&&(w=v),C!==n){if(w===n)return C;typeof v=="string"||typeof C=="string"?(v=kn(v),C=kn(C)):(v=Sf(v),C=Sf(C)),w=s(v,C)}return w}}function xc(s){return Ar(function(l){return l=Gt(l,Dn(He())),st(function(v){var C=this;return s(l,function(w){return Tn(w,C,v)})})})}function pa(s,l){l=l===n?" ":kn(l);var v=l.length;if(v<2)return v?Oc(l,s):l;var C=Oc(l,ra(s/Ki(l)));return ji(l)?Zr(rr(C),0,s).join(""):C.slice(0,s)}function VE(s,l,v,C){var w=l&b,R=Qo(s);function $(){for(var Y=-1,q=arguments.length,_e=-1,fe=C.length,ve=ie(fe+q),Se=this&&this!==rn&&this instanceof $?R:s;++_e<fe;)ve[_e]=C[_e];for(;q--;)ve[_e++]=arguments[++Y];return Tn(Se,w?v:this,ve)}return $}function zf(s){return function(l,v,C){return C&&typeof C!="number"&&fn(l,v,C)&&(v=C=n),l=xr(l),v===n?(v=l,l=0):v=xr(v),C=C===n?l<v?1:-1:xr(C),DE(l,v,C,s)}}function ma(s){return function(l,v){return typeof l=="string"&&typeof v=="string"||(l=qn(l),v=qn(v)),s(l,v)}}function Yf(s,l,v,C,w,R,$,Y,q,_e){var fe=l&k,ve=fe?$:n,Se=fe?n:$,ke=fe?R:n,Be=fe?n:R;l|=fe?F:z,l&=~(fe?z:F),l&A||(l&=-4);var ot=[s,l,w,ke,ve,Be,Se,Y,q,_e],We=v.apply(n,ot);return $c(s)&&rg(We,ot),We.placeholder=C,ig(We,s,l)}function Rc(s){var l=Kt[s];return function(v,C){if(v=qn(v),C=C==null?0:ln(it(C),292),C&&rf(v)){var w=(mt(v)+"e").split("e"),R=l(w[0]+"e"+(+w[1]+C));return w=(mt(R)+"e").split("e"),+(w[0]+"e"+(+w[1]-C))}return l(v)}}var XE=qi&&1/Ks(new qi([,-0]))[1]==xe?function(s){return new qi(s)}:Jc;function jf(s){return function(l){var v=cn(l);return v==Le?ac(l):v==Nn?_1(l):i1(l,s(l))}}function Lr(s,l,v,C,w,R,$,Y){var q=l&O;if(!q&&typeof s!="function")throw new Yn(a);var _e=C?C.length:0;if(_e||(l&=-97,C=w=n),$=$===n?$:Vt(it($),0),Y=Y===n?Y:it(Y),_e-=w?w.length:0,l&z){var fe=C,ve=w;C=w=n}var Se=q?n:kc(s),ke=[s,l,v,C,w,fe,ve,R,$,Y];if(Se&&u0(ke,Se),s=ke[0],l=ke[1],v=ke[2],C=ke[3],w=ke[4],Y=ke[9]=ke[9]===n?q?0:s.length:Vt(ke[9]-_e,0),!Y&&l&(k|G)&&(l&=-25),!l||l==b)var Be=jE(s,l,v);else l==k||l==G?Be=KE(s,l,Y):(l==F||l==(b|F))&&!w.length?Be=VE(s,l,v,C):Be=ha.apply(n,ke);var ot=Se?Lf:rg;return ig(ot(Be,ke),s,l)}function Kf(s,l,v,C){return s===n||or(s,Xi[v])&&!Et.call(C,v)?l:s}function Vf(s,l,v,C,w,R){return $t(s)&&$t(l)&&(R.set(l,s),da(s,l,n,Vf,R),R.delete(l)),s}function qE(s){return ts(s)?n:s}function Xf(s,l,v,C,w,R){var $=v&E,Y=s.length,q=l.length;if(Y!=q&&!($&&q>Y))return!1;var _e=R.get(s),fe=R.get(l);if(_e&&fe)return _e==l&&fe==s;var ve=-1,Se=!0,ke=v&I?new mi:n;for(R.set(s,l),R.set(l,s);++ve<Y;){var Be=s[ve],ot=l[ve];if(C)var We=$?C(ot,Be,ve,l,s,R):C(Be,ot,ve,s,l,R);if(We!==n){if(We)continue;Se=!1;break}if(ke){if(!tc(l,function(lt,dt){if(!Ho(ke,dt)&&(Be===lt||w(Be,lt,v,C,R)))return ke.push(dt)})){Se=!1;break}}else if(!(Be===ot||w(Be,ot,v,C,R))){Se=!1;break}}return R.delete(s),R.delete(l),Se}function ZE(s,l,v,C,w,R,$){switch(v){case Rn:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case Wr:return!(s.byteLength!=l.byteLength||!R(new Js(s),new Js(l)));case _r:case Bn:case Me:return or(+s,+l);case Ir:return s.name==l.name&&s.message==l.message;case Br:case gi:return s==l+"";case Le:var Y=ac;case Nn:var q=C&E;if(Y||(Y=Ks),s.size!=l.size&&!q)return!1;var _e=$.get(s);if(_e)return _e==l;C|=I,$.set(s,l);var fe=Xf(Y(s),Y(l),C,w,R,$);return $.delete(s),fe;case Wi:if(jo)return jo.call(s)==jo.call(l)}return!1}function QE(s,l,v,C,w,R){var $=v&E,Y=Tc(s),q=Y.length,_e=Tc(l),fe=_e.length;if(q!=fe&&!$)return!1;for(var ve=q;ve--;){var Se=Y[ve];if(!($?Se in l:Et.call(l,Se)))return!1}var ke=R.get(s),Be=R.get(l);if(ke&&Be)return ke==l&&Be==s;var ot=!0;R.set(s,l),R.set(l,s);for(var We=$;++ve<q;){Se=Y[ve];var lt=s[Se],dt=l[Se];if(C)var Mn=$?C(dt,lt,Se,l,s,R):C(lt,dt,Se,s,l,R);if(!(Mn===n?lt===dt||w(lt,dt,v,C,R):Mn)){ot=!1;break}We||(We=Se=="constructor")}if(ot&&!We){var gn=s.constructor,Un=l.constructor;gn!=Un&&"constructor"in s&&"constructor"in l&&!(typeof gn=="function"&&gn instanceof gn&&typeof Un=="function"&&Un instanceof Un)&&(ot=!1)}return R.delete(s),R.delete(l),ot}function Ar(s){return Pc(tg(s,n,ug),s+"")}function Tc(s){return hf(s,Zt,Mc)}function Dc(s){return hf(s,bn,qf)}var kc=oa?function(s){return oa.get(s)}:Jc;function Ea(s){for(var l=s.name+"",v=Zi[l],C=Et.call(Zi,l)?v.length:0;C--;){var w=v[C],R=w.func;if(R==null||R==s)return w.name}return l}function to(s){var l=Et.call(x,"placeholder")?x:s;return l.placeholder}function He(){var s=x.iteratee||Zc;return s=s===Zc?mf:s,arguments.length?s(arguments[0],arguments[1]):s}function Ca(s,l){var v=s.__data__;return s0(l)?v[typeof l=="string"?"string":"hash"]:v.map}function Gc(s){for(var l=Zt(s),v=l.length;v--;){var C=l[v],w=s[C];l[v]=[C,w,Jf(w)]}return l}function Ii(s,l){var v=c1(s,l);return pf(v)?v:n}function JE(s){var l=Et.call(s,vi),v=s[vi];try{s[vi]=n;var C=!0}catch{}var w=Zs.call(s);return C&&(l?s[vi]=v:delete s[vi]),w}var Mc=cc?function(s){return s==null?[]:(s=wt(s),zr(cc(s),function(l){return tf.call(s,l)}))}:eu,qf=cc?function(s){for(var l=[];s;)Yr(l,Mc(s)),s=ea(s);return l}:eu,cn=_n;(uc&&cn(new uc(new ArrayBuffer(1)))!=Rn||Wo&&cn(new Wo)!=Le||dc&&cn(dc.resolve())!=Mo||qi&&cn(new qi)!=Nn||zo&&cn(new zo)!=xn)&&(cn=function(s){var l=_n(s),v=l==Rt?s.constructor:n,C=v?bi(v):"";if(C)switch(C){case G1:return Rn;case M1:return Le;case U1:return Mo;case $1:return Nn;case F1:return xn}return l});function e0(s,l,v){for(var C=-1,w=v.length;++C<w;){var R=v[C],$=R.size;switch(R.type){case"drop":s+=$;break;case"dropRight":l-=$;break;case"take":l=ln(l,s+$);break;case"takeRight":s=Vt(s,l-$);break}}return{start:s,end:l}}function t0(s){var l=s.match(am);return l?l[1].split(lm):[]}function Zf(s,l,v){l=qr(l,s);for(var C=-1,w=l.length,R=!1;++C<w;){var $=hr(l[C]);if(!(R=s!=null&&v(s,$)))break;s=s[$]}return R||++C!=w?R:(w=s==null?0:s.length,!!w&&Aa(w)&&Sr($,w)&&(Je(s)||Oi(s)))}function n0(s){var l=s.length,v=new s.constructor(l);return l&&typeof s[0]=="string"&&Et.call(s,"index")&&(v.index=s.index,v.input=s.input),v}function Qf(s){return typeof s.constructor=="function"&&!Jo(s)?Qi(ea(s)):{}}function r0(s,l,v){var C=s.constructor;switch(l){case Wr:return Nc(s);case _r:case Bn:return new C(+s);case Rn:return PE(s,v);case Uo:case $o:case Fo:case Po:case Fl:case Pl:case Hl:case Bl:case Wl:return kf(s,v);case Le:return new C;case Me:case gi:return new C(s);case Br:return HE(s);case Nn:return new C;case Wi:return BE(s)}}function i0(s,l){var v=l.length;if(!v)return s;var C=v-1;return l[C]=(v>1?"& ":"")+l[C],l=l.join(v>2?", ":" "),s.replace(sm,`{
/* [wrapped with `+l+`] */
`)}function o0(s){return Je(s)||Oi(s)||!!(nf&&s&&s[nf])}function Sr(s,l){var v=typeof s;return l=l??Oe,!!l&&(v=="number"||v!="symbol"&&pm.test(s))&&s>-1&&s%1==0&&s<l}function fn(s,l,v){if(!$t(v))return!1;var C=typeof l;return(C=="number"?In(v)&&Sr(l,v.length):C=="string"&&l in v)?or(v[l],s):!1}function Uc(s,l){if(Je(s))return!1;var v=typeof s;return v=="number"||v=="symbol"||v=="boolean"||s==null||Gn(s)?!0:nm.test(s)||!tm.test(s)||l!=null&&s in wt(l)}function s0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function $c(s){var l=Ea(s),v=x[l];if(typeof v!="function"||!(l in ct.prototype))return!1;if(s===v)return!0;var C=kc(v);return!!C&&s===C[0]}function a0(s){return!!Q_&&Q_ in s}var l0=Xs?Nr:tu;function Jo(s){var l=s&&s.constructor,v=typeof l=="function"&&l.prototype||Xi;return s===v}function Jf(s){return s===s&&!$t(s)}function eg(s,l){return function(v){return v==null?!1:v[s]===l&&(l!==n||s in wt(v))}}function c0(s){var l=ya(s,function(C){return v.size===f&&v.clear(),C}),v=l.cache;return l}function u0(s,l){var v=s[1],C=l[1],w=v|C,R=w<(b|O|P),$=C==P&&v==k||C==P&&v==j&&s[7].length<=l[8]||C==(P|j)&&l[7].length<=l[8]&&v==k;if(!(R||$))return s;C&b&&(s[2]=l[2],w|=v&b?0:A);var Y=l[3];if(Y){var q=s[3];s[3]=q?Mf(q,Y,l[4]):Y,s[4]=q?jr(s[3],p):l[4]}return Y=l[5],Y&&(q=s[5],s[5]=q?Uf(q,Y,l[6]):Y,s[6]=q?jr(s[5],p):l[6]),Y=l[7],Y&&(s[7]=Y),C&P&&(s[8]=s[8]==null?l[8]:ln(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=w,s}function d0(s){var l=[];if(s!=null)for(var v in wt(s))l.push(v);return l}function _0(s){return Zs.call(s)}function tg(s,l,v){return l=Vt(l===n?s.length-1:l,0),function(){for(var C=arguments,w=-1,R=Vt(C.length-l,0),$=ie(R);++w<R;)$[w]=C[l+w];w=-1;for(var Y=ie(l+1);++w<l;)Y[w]=C[w];return Y[l]=v($),Tn(s,this,Y)}}function ng(s,l){return l.length<2?s:Ci(s,Vn(l,0,-1))}function f0(s,l){for(var v=s.length,C=ln(l.length,v),w=Cn(s);C--;){var R=l[C];s[C]=Sr(R,v)?w[R]:n}return s}function Fc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var rg=og(Lf),es=S1||function(s,l){return rn.setTimeout(s,l)},Pc=og(ME);function ig(s,l,v){var C=l+"";return Pc(s,i0(C,g0(t0(C),v)))}function og(s){var l=0,v=0;return function(){var C=T1(),w=ge-(C-v);if(v=C,w>0){if(++l>=re)return arguments[0]}else l=0;return s.apply(n,arguments)}}function Ia(s,l){var v=-1,C=s.length,w=C-1;for(l=l===n?C:l;++v<l;){var R=bc(v,w),$=s[R];s[R]=s[v],s[v]=$}return s.length=l,s}var sg=c0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(rm,function(v,C,w,R){l.push(w?R.replace(dm,"$1"):C||v)}),l});function hr(s){if(typeof s=="string"||Gn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function bi(s){if(s!=null){try{return qs.call(s)}catch{}try{return s+""}catch{}}return""}function g0(s,l){return zn(jt,function(v){var C="_."+v[0];l&v[1]&&!Ys(s,C)&&s.push(C)}),s.sort()}function ag(s){if(s instanceof ct)return s.clone();var l=new jn(s.__wrapped__,s.__chain__);return l.__actions__=Cn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function h0(s,l,v){(v?fn(s,l,v):l===n)?l=1:l=Vt(it(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var w=0,R=0,$=ie(ra(C/l));w<C;)$[R++]=Vn(s,w,w+=l);return $}function v0(s){for(var l=-1,v=s==null?0:s.length,C=0,w=[];++l<v;){var R=s[l];R&&(w[C++]=R)}return w}function p0(){var s=arguments.length;if(!s)return[];for(var l=ie(s-1),v=arguments[0],C=s;C--;)l[C-1]=arguments[C];return Yr(Je(v)?Cn(v):[v],on(l,1))}var m0=st(function(s,l){return Ht(s)?Vo(s,on(l,1,Ht,!0)):[]}),E0=st(function(s,l){var v=Xn(l);return Ht(v)&&(v=n),Ht(s)?Vo(s,on(l,1,Ht,!0),He(v,2)):[]}),C0=st(function(s,l){var v=Xn(l);return Ht(v)&&(v=n),Ht(s)?Vo(s,on(l,1,Ht,!0),n,v):[]});function I0(s,l,v){var C=s==null?0:s.length;return C?(l=v||l===n?1:it(l),Vn(s,l<0?0:l,C)):[]}function b0(s,l,v){var C=s==null?0:s.length;return C?(l=v||l===n?1:it(l),l=C-l,Vn(s,0,l<0?0:l)):[]}function O0(s,l){return s&&s.length?fa(s,He(l,3),!0,!0):[]}function w0(s,l){return s&&s.length?fa(s,He(l,3),!0):[]}function y0(s,l,v,C){var w=s==null?0:s.length;return w?(v&&typeof v!="number"&&fn(s,l,v)&&(v=0,C=w),pE(s,l,v,C)):[]}function lg(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var w=v==null?0:it(v);return w<0&&(w=Vt(C+w,0)),js(s,He(l,3),w)}function cg(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var w=C-1;return v!==n&&(w=it(v),w=v<0?Vt(C+w,0):ln(w,C-1)),js(s,He(l,3),w,!0)}function ug(s){var l=s==null?0:s.length;return l?on(s,1):[]}function L0(s){var l=s==null?0:s.length;return l?on(s,xe):[]}function A0(s,l){var v=s==null?0:s.length;return v?(l=l===n?1:it(l),on(s,l)):[]}function S0(s){for(var l=-1,v=s==null?0:s.length,C={};++l<v;){var w=s[l];C[w[0]]=w[1]}return C}function dg(s){return s&&s.length?s[0]:n}function N0(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var w=v==null?0:it(v);return w<0&&(w=Vt(C+w,0)),Yi(s,l,w)}function x0(s){var l=s==null?0:s.length;return l?Vn(s,0,-1):[]}var R0=st(function(s){var l=Gt(s,Ac);return l.length&&l[0]===s[0]?pc(l):[]}),T0=st(function(s){var l=Xn(s),v=Gt(s,Ac);return l===Xn(v)?l=n:v.pop(),v.length&&v[0]===s[0]?pc(v,He(l,2)):[]}),D0=st(function(s){var l=Xn(s),v=Gt(s,Ac);return l=typeof l=="function"?l:n,l&&v.pop(),v.length&&v[0]===s[0]?pc(v,n,l):[]});function k0(s,l){return s==null?"":x1.call(s,l)}function Xn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function G0(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var w=C;return v!==n&&(w=it(v),w=w<0?Vt(C+w,0):ln(w,C-1)),l===l?g1(s,l,w):js(s,z_,w,!0)}function M0(s,l){return s&&s.length?bf(s,it(l)):n}var U0=st(_g);function _g(s,l){return s&&s.length&&l&&l.length?Ic(s,l):s}function $0(s,l,v){return s&&s.length&&l&&l.length?Ic(s,l,He(v,2)):s}function F0(s,l,v){return s&&s.length&&l&&l.length?Ic(s,l,n,v):s}var P0=Ar(function(s,l){var v=s==null?0:s.length,C=fc(s,l);return yf(s,Gt(l,function(w){return Sr(w,v)?+w:w}).sort(Gf)),C});function H0(s,l){var v=[];if(!(s&&s.length))return v;var C=-1,w=[],R=s.length;for(l=He(l,3);++C<R;){var $=s[C];l($,C,s)&&(v.push($),w.push(C))}return yf(s,w),v}function Hc(s){return s==null?s:k1.call(s)}function B0(s,l,v){var C=s==null?0:s.length;return C?(v&&typeof v!="number"&&fn(s,l,v)?(l=0,v=C):(l=l==null?0:it(l),v=v===n?C:it(v)),Vn(s,l,v)):[]}function W0(s,l){return _a(s,l)}function z0(s,l,v){return wc(s,l,He(v,2))}function Y0(s,l){var v=s==null?0:s.length;if(v){var C=_a(s,l);if(C<v&&or(s[C],l))return C}return-1}function j0(s,l){return _a(s,l,!0)}function K0(s,l,v){return wc(s,l,He(v,2),!0)}function V0(s,l){var v=s==null?0:s.length;if(v){var C=_a(s,l,!0)-1;if(or(s[C],l))return C}return-1}function X0(s){return s&&s.length?Af(s):[]}function q0(s,l){return s&&s.length?Af(s,He(l,2)):[]}function Z0(s){var l=s==null?0:s.length;return l?Vn(s,1,l):[]}function Q0(s,l,v){return s&&s.length?(l=v||l===n?1:it(l),Vn(s,0,l<0?0:l)):[]}function J0(s,l,v){var C=s==null?0:s.length;return C?(l=v||l===n?1:it(l),l=C-l,Vn(s,l<0?0:l,C)):[]}function eC(s,l){return s&&s.length?fa(s,He(l,3),!1,!0):[]}function tC(s,l){return s&&s.length?fa(s,He(l,3)):[]}var nC=st(function(s){return Xr(on(s,1,Ht,!0))}),rC=st(function(s){var l=Xn(s);return Ht(l)&&(l=n),Xr(on(s,1,Ht,!0),He(l,2))}),iC=st(function(s){var l=Xn(s);return l=typeof l=="function"?l:n,Xr(on(s,1,Ht,!0),n,l)});function oC(s){return s&&s.length?Xr(s):[]}function sC(s,l){return s&&s.length?Xr(s,He(l,2)):[]}function aC(s,l){return l=typeof l=="function"?l:n,s&&s.length?Xr(s,n,l):[]}function Bc(s){if(!(s&&s.length))return[];var l=0;return s=zr(s,function(v){if(Ht(v))return l=Vt(v.length,l),!0}),oc(l,function(v){return Gt(s,nc(v))})}function fg(s,l){if(!(s&&s.length))return[];var v=Bc(s);return l==null?v:Gt(v,function(C){return Tn(l,n,C)})}var lC=st(function(s,l){return Ht(s)?Vo(s,l):[]}),cC=st(function(s){return Lc(zr(s,Ht))}),uC=st(function(s){var l=Xn(s);return Ht(l)&&(l=n),Lc(zr(s,Ht),He(l,2))}),dC=st(function(s){var l=Xn(s);return l=typeof l=="function"?l:n,Lc(zr(s,Ht),n,l)}),_C=st(Bc);function fC(s,l){return Rf(s||[],l||[],Ko)}function gC(s,l){return Rf(s||[],l||[],Zo)}var hC=st(function(s){var l=s.length,v=l>1?s[l-1]:n;return v=typeof v=="function"?(s.pop(),v):n,fg(s,v)});function gg(s){var l=x(s);return l.__chain__=!0,l}function vC(s,l){return l(s),s}function ba(s,l){return l(s)}var pC=Ar(function(s){var l=s.length,v=l?s[0]:0,C=this.__wrapped__,w=function(R){return fc(R,s)};return l>1||this.__actions__.length||!(C instanceof ct)||!Sr(v)?this.thru(w):(C=C.slice(v,+v+(l?1:0)),C.__actions__.push({func:ba,args:[w],thisArg:n}),new jn(C,this.__chain__).thru(function(R){return l&&!R.length&&R.push(n),R}))});function mC(){return gg(this)}function EC(){return new jn(this.value(),this.__chain__)}function CC(){this.__values__===n&&(this.__values__=Sg(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function IC(){return this}function bC(s){for(var l,v=this;v instanceof aa;){var C=ag(v);C.__index__=0,C.__values__=n,l?w.__wrapped__=C:l=C;var w=C;v=v.__wrapped__}return w.__wrapped__=s,l}function OC(){var s=this.__wrapped__;if(s instanceof ct){var l=s;return this.__actions__.length&&(l=new ct(this)),l=l.reverse(),l.__actions__.push({func:ba,args:[Hc],thisArg:n}),new jn(l,this.__chain__)}return this.thru(Hc)}function wC(){return xf(this.__wrapped__,this.__actions__)}var yC=ga(function(s,l,v){Et.call(s,v)?++s[v]:yr(s,v,1)});function LC(s,l,v){var C=Je(s)?B_:vE;return v&&fn(s,l,v)&&(l=n),C(s,He(l,3))}function AC(s,l){var v=Je(s)?zr:ff;return v(s,He(l,3))}var SC=Hf(lg),NC=Hf(cg);function xC(s,l){return on(Oa(s,l),1)}function RC(s,l){return on(Oa(s,l),xe)}function TC(s,l,v){return v=v===n?1:it(v),on(Oa(s,l),v)}function hg(s,l){var v=Je(s)?zn:Vr;return v(s,He(l,3))}function vg(s,l){var v=Je(s)?Zm:_f;return v(s,He(l,3))}var DC=ga(function(s,l,v){Et.call(s,v)?s[v].push(l):yr(s,v,[l])});function kC(s,l,v,C){s=In(s)?s:ro(s),v=v&&!C?it(v):0;var w=s.length;return v<0&&(v=Vt(w+v,0)),Sa(s)?v<=w&&s.indexOf(l,v)>-1:!!w&&Yi(s,l,v)>-1}var GC=st(function(s,l,v){var C=-1,w=typeof l=="function",R=In(s)?ie(s.length):[];return Vr(s,function($){R[++C]=w?Tn(l,$,v):Xo($,l,v)}),R}),MC=ga(function(s,l,v){yr(s,v,l)});function Oa(s,l){var v=Je(s)?Gt:Ef;return v(s,He(l,3))}function UC(s,l,v,C){return s==null?[]:(Je(l)||(l=l==null?[]:[l]),v=C?n:v,Je(v)||(v=v==null?[]:[v]),Of(s,l,v))}var $C=ga(function(s,l,v){s[v?0:1].push(l)},function(){return[[],[]]});function FC(s,l,v){var C=Je(s)?ec:j_,w=arguments.length<3;return C(s,He(l,4),v,w,Vr)}function PC(s,l,v){var C=Je(s)?Qm:j_,w=arguments.length<3;return C(s,He(l,4),v,w,_f)}function HC(s,l){var v=Je(s)?zr:ff;return v(s,La(He(l,3)))}function BC(s){var l=Je(s)?lf:kE;return l(s)}function WC(s,l,v){(v?fn(s,l,v):l===n)?l=1:l=it(l);var C=Je(s)?dE:GE;return C(s,l)}function zC(s){var l=Je(s)?_E:UE;return l(s)}function YC(s){if(s==null)return 0;if(In(s))return Sa(s)?Ki(s):s.length;var l=cn(s);return l==Le||l==Nn?s.size:Ec(s).length}function jC(s,l,v){var C=Je(s)?tc:$E;return v&&fn(s,l,v)&&(l=n),C(s,He(l,3))}var KC=st(function(s,l){if(s==null)return[];var v=l.length;return v>1&&fn(s,l[0],l[1])?l=[]:v>2&&fn(l[0],l[1],l[2])&&(l=[l[0]]),Of(s,on(l,1),[])}),wa=A1||function(){return rn.Date.now()};function VC(s,l){if(typeof l!="function")throw new Yn(a);return s=it(s),function(){if(--s<1)return l.apply(this,arguments)}}function pg(s,l,v){return l=v?n:l,l=s&&l==null?s.length:l,Lr(s,P,n,n,n,n,l)}function mg(s,l){var v;if(typeof l!="function")throw new Yn(a);return s=it(s),function(){return--s>0&&(v=l.apply(this,arguments)),s<=1&&(l=n),v}}var Wc=st(function(s,l,v){var C=b;if(v.length){var w=jr(v,to(Wc));C|=F}return Lr(s,C,l,v,w)}),Eg=st(function(s,l,v){var C=b|O;if(v.length){var w=jr(v,to(Eg));C|=F}return Lr(l,C,s,v,w)});function Cg(s,l,v){l=v?n:l;var C=Lr(s,k,n,n,n,n,n,l);return C.placeholder=Cg.placeholder,C}function Ig(s,l,v){l=v?n:l;var C=Lr(s,G,n,n,n,n,n,l);return C.placeholder=Ig.placeholder,C}function bg(s,l,v){var C,w,R,$,Y,q,_e=0,fe=!1,ve=!1,Se=!0;if(typeof s!="function")throw new Yn(a);l=qn(l)||0,$t(v)&&(fe=!!v.leading,ve="maxWait"in v,R=ve?Vt(qn(v.maxWait)||0,l):R,Se="trailing"in v?!!v.trailing:Se);function ke(Bt){var sr=C,Rr=w;return C=w=n,_e=Bt,$=s.apply(Rr,sr),$}function Be(Bt){return _e=Bt,Y=es(lt,l),fe?ke(Bt):$}function ot(Bt){var sr=Bt-q,Rr=Bt-_e,Hg=l-sr;return ve?ln(Hg,R-Rr):Hg}function We(Bt){var sr=Bt-q,Rr=Bt-_e;return q===n||sr>=l||sr<0||ve&&Rr>=R}function lt(){var Bt=wa();if(We(Bt))return dt(Bt);Y=es(lt,ot(Bt))}function dt(Bt){return Y=n,Se&&C?ke(Bt):(C=w=n,$)}function Mn(){Y!==n&&Tf(Y),_e=0,C=q=w=Y=n}function gn(){return Y===n?$:dt(wa())}function Un(){var Bt=wa(),sr=We(Bt);if(C=arguments,w=this,q=Bt,sr){if(Y===n)return Be(q);if(ve)return Tf(Y),Y=es(lt,l),ke(q)}return Y===n&&(Y=es(lt,l)),$}return Un.cancel=Mn,Un.flush=gn,Un}var XC=st(function(s,l){return df(s,1,l)}),qC=st(function(s,l,v){return df(s,qn(l)||0,v)});function ZC(s){return Lr(s,J)}function ya(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Yn(a);var v=function(){var C=arguments,w=l?l.apply(this,C):C[0],R=v.cache;if(R.has(w))return R.get(w);var $=s.apply(this,C);return v.cache=R.set(w,$)||R,$};return v.cache=new(ya.Cache||wr),v}ya.Cache=wr;function La(s){if(typeof s!="function")throw new Yn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function QC(s){return mg(2,s)}var JC=FE(function(s,l){l=l.length==1&&Je(l[0])?Gt(l[0],Dn(He())):Gt(on(l,1),Dn(He()));var v=l.length;return st(function(C){for(var w=-1,R=ln(C.length,v);++w<R;)C[w]=l[w].call(this,C[w]);return Tn(s,this,C)})}),zc=st(function(s,l){var v=jr(l,to(zc));return Lr(s,F,n,l,v)}),Og=st(function(s,l){var v=jr(l,to(Og));return Lr(s,z,n,l,v)}),eI=Ar(function(s,l){return Lr(s,j,n,n,n,l)});function tI(s,l){if(typeof s!="function")throw new Yn(a);return l=l===n?l:it(l),st(s,l)}function nI(s,l){if(typeof s!="function")throw new Yn(a);return l=l==null?0:Vt(it(l),0),st(function(v){var C=v[l],w=Zr(v,0,l);return C&&Yr(w,C),Tn(s,this,w)})}function rI(s,l,v){var C=!0,w=!0;if(typeof s!="function")throw new Yn(a);return $t(v)&&(C="leading"in v?!!v.leading:C,w="trailing"in v?!!v.trailing:w),bg(s,l,{leading:C,maxWait:l,trailing:w})}function iI(s){return pg(s,1)}function oI(s,l){return zc(Sc(l),s)}function sI(){if(!arguments.length)return[];var s=arguments[0];return Je(s)?s:[s]}function aI(s){return Kn(s,m)}function lI(s,l){return l=typeof l=="function"?l:n,Kn(s,m,l)}function cI(s){return Kn(s,g|m)}function uI(s,l){return l=typeof l=="function"?l:n,Kn(s,g|m,l)}function dI(s,l){return l==null||uf(s,l,Zt(l))}function or(s,l){return s===l||s!==s&&l!==l}var _I=ma(vc),fI=ma(function(s,l){return s>=l}),Oi=vf(function(){return arguments}())?vf:function(s){return Ft(s)&&Et.call(s,"callee")&&!tf.call(s,"callee")},Je=ie.isArray,gI=M_?Dn(M_):bE;function In(s){return s!=null&&Aa(s.length)&&!Nr(s)}function Ht(s){return Ft(s)&&In(s)}function hI(s){return s===!0||s===!1||Ft(s)&&_n(s)==_r}var Qr=N1||tu,vI=U_?Dn(U_):OE;function pI(s){return Ft(s)&&s.nodeType===1&&!ts(s)}function mI(s){if(s==null)return!0;if(In(s)&&(Je(s)||typeof s=="string"||typeof s.splice=="function"||Qr(s)||no(s)||Oi(s)))return!s.length;var l=cn(s);if(l==Le||l==Nn)return!s.size;if(Jo(s))return!Ec(s).length;for(var v in s)if(Et.call(s,v))return!1;return!0}function EI(s,l){return qo(s,l)}function CI(s,l,v){v=typeof v=="function"?v:n;var C=v?v(s,l):n;return C===n?qo(s,l,n,v):!!C}function Yc(s){if(!Ft(s))return!1;var l=_n(s);return l==Ir||l==Bi||typeof s.message=="string"&&typeof s.name=="string"&&!ts(s)}function II(s){return typeof s=="number"&&rf(s)}function Nr(s){if(!$t(s))return!1;var l=_n(s);return l==br||l==$e||l==nn||l==$l}function wg(s){return typeof s=="number"&&s==it(s)}function Aa(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Oe}function $t(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Ft(s){return s!=null&&typeof s=="object"}var yg=$_?Dn($_):yE;function bI(s,l){return s===l||mc(s,l,Gc(l))}function OI(s,l,v){return v=typeof v=="function"?v:n,mc(s,l,Gc(l),v)}function wI(s){return Lg(s)&&s!=+s}function yI(s){if(l0(s))throw new Ze(o);return pf(s)}function LI(s){return s===null}function AI(s){return s==null}function Lg(s){return typeof s=="number"||Ft(s)&&_n(s)==Me}function ts(s){if(!Ft(s)||_n(s)!=Rt)return!1;var l=ea(s);if(l===null)return!0;var v=Et.call(l,"constructor")&&l.constructor;return typeof v=="function"&&v instanceof v&&qs.call(v)==O1}var jc=F_?Dn(F_):LE;function SI(s){return wg(s)&&s>=-9007199254740991&&s<=Oe}var Ag=P_?Dn(P_):AE;function Sa(s){return typeof s=="string"||!Je(s)&&Ft(s)&&_n(s)==gi}function Gn(s){return typeof s=="symbol"||Ft(s)&&_n(s)==Wi}var no=H_?Dn(H_):SE;function NI(s){return s===n}function xI(s){return Ft(s)&&cn(s)==xn}function RI(s){return Ft(s)&&_n(s)==Hs}var TI=ma(Cc),DI=ma(function(s,l){return s<=l});function Sg(s){if(!s)return[];if(In(s))return Sa(s)?rr(s):Cn(s);if(Bo&&s[Bo])return d1(s[Bo]());var l=cn(s),v=l==Le?ac:l==Nn?Ks:ro;return v(s)}function xr(s){if(!s)return s===0?s:0;if(s=qn(s),s===xe||s===-1/0){var l=s<0?-1:1;return l*Ie}return s===s?s:0}function it(s){var l=xr(s),v=l%1;return l===l?v?l-v:l:0}function Ng(s){return s?Ei(it(s),0,qe):0}function qn(s){if(typeof s=="number")return s;if(Gn(s))return je;if($t(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=$t(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=K_(s);var v=gm.test(s);return v||vm.test(s)?Vm(s.slice(2),v?2:8):fm.test(s)?je:+s}function xg(s){return gr(s,bn(s))}function kI(s){return s?Ei(it(s),-9007199254740991,Oe):s===0?s:0}function mt(s){return s==null?"":kn(s)}var GI=Ji(function(s,l){if(Jo(l)||In(l)){gr(l,Zt(l),s);return}for(var v in l)Et.call(l,v)&&Ko(s,v,l[v])}),Rg=Ji(function(s,l){gr(l,bn(l),s)}),Na=Ji(function(s,l,v,C){gr(l,bn(l),s,C)}),MI=Ji(function(s,l,v,C){gr(l,Zt(l),s,C)}),UI=Ar(fc);function $I(s,l){var v=Qi(s);return l==null?v:cf(v,l)}var FI=st(function(s,l){s=wt(s);var v=-1,C=l.length,w=C>2?l[2]:n;for(w&&fn(l[0],l[1],w)&&(C=1);++v<C;)for(var R=l[v],$=bn(R),Y=-1,q=$.length;++Y<q;){var _e=$[Y],fe=s[_e];(fe===n||or(fe,Xi[_e])&&!Et.call(s,_e))&&(s[_e]=R[_e])}return s}),PI=st(function(s){return s.push(n,Vf),Tn(Tg,n,s)});function HI(s,l){return W_(s,He(l,3),fr)}function BI(s,l){return W_(s,He(l,3),hc)}function WI(s,l){return s==null?s:gc(s,He(l,3),bn)}function zI(s,l){return s==null?s:gf(s,He(l,3),bn)}function YI(s,l){return s&&fr(s,He(l,3))}function jI(s,l){return s&&hc(s,He(l,3))}function KI(s){return s==null?[]:ua(s,Zt(s))}function VI(s){return s==null?[]:ua(s,bn(s))}function Kc(s,l,v){var C=s==null?n:Ci(s,l);return C===n?v:C}function XI(s,l){return s!=null&&Zf(s,l,mE)}function Vc(s,l){return s!=null&&Zf(s,l,EE)}var qI=Wf(function(s,l,v){l!=null&&typeof l.toString!="function"&&(l=Zs.call(l)),s[l]=v},qc(On)),ZI=Wf(function(s,l,v){l!=null&&typeof l.toString!="function"&&(l=Zs.call(l)),Et.call(s,l)?s[l].push(v):s[l]=[v]},He),QI=st(Xo);function Zt(s){return In(s)?af(s):Ec(s)}function bn(s){return In(s)?af(s,!0):NE(s)}function JI(s,l){var v={};return l=He(l,3),fr(s,function(C,w,R){yr(v,l(C,w,R),C)}),v}function eb(s,l){var v={};return l=He(l,3),fr(s,function(C,w,R){yr(v,w,l(C,w,R))}),v}var tb=Ji(function(s,l,v){da(s,l,v)}),Tg=Ji(function(s,l,v,C){da(s,l,v,C)}),nb=Ar(function(s,l){var v={};if(s==null)return v;var C=!1;l=Gt(l,function(R){return R=qr(R,s),C||(C=R.length>1),R}),gr(s,Dc(s),v),C&&(v=Kn(v,g|h|m,qE));for(var w=l.length;w--;)yc(v,l[w]);return v});function rb(s,l){return Dg(s,La(He(l)))}var ib=Ar(function(s,l){return s==null?{}:RE(s,l)});function Dg(s,l){if(s==null)return{};var v=Gt(Dc(s),function(C){return[C]});return l=He(l),wf(s,v,function(C,w){return l(C,w[0])})}function ob(s,l,v){l=qr(l,s);var C=-1,w=l.length;for(w||(w=1,s=n);++C<w;){var R=s==null?n:s[hr(l[C])];R===n&&(C=w,R=v),s=Nr(R)?R.call(s):R}return s}function sb(s,l,v){return s==null?s:Zo(s,l,v)}function ab(s,l,v,C){return C=typeof C=="function"?C:n,s==null?s:Zo(s,l,v,C)}var kg=jf(Zt),Gg=jf(bn);function lb(s,l,v){var C=Je(s),w=C||Qr(s)||no(s);if(l=He(l,4),v==null){var R=s&&s.constructor;w?v=C?new R:[]:$t(s)?v=Nr(R)?Qi(ea(s)):{}:v={}}return(w?zn:fr)(s,function($,Y,q){return l(v,$,Y,q)}),v}function cb(s,l){return s==null?!0:yc(s,l)}function ub(s,l,v){return s==null?s:Nf(s,l,Sc(v))}function db(s,l,v,C){return C=typeof C=="function"?C:n,s==null?s:Nf(s,l,Sc(v),C)}function ro(s){return s==null?[]:sc(s,Zt(s))}function _b(s){return s==null?[]:sc(s,bn(s))}function fb(s,l,v){return v===n&&(v=l,l=n),v!==n&&(v=qn(v),v=v===v?v:0),l!==n&&(l=qn(l),l=l===l?l:0),Ei(qn(s),l,v)}function gb(s,l,v){return l=xr(l),v===n?(v=l,l=0):v=xr(v),s=qn(s),CE(s,l,v)}function hb(s,l,v){if(v&&typeof v!="boolean"&&fn(s,l,v)&&(l=v=n),v===n&&(typeof l=="boolean"?(v=l,l=n):typeof s=="boolean"&&(v=s,s=n)),s===n&&l===n?(s=0,l=1):(s=xr(s),l===n?(l=s,s=0):l=xr(l)),s>l){var C=s;s=l,l=C}if(v||s%1||l%1){var w=of();return ln(s+w*(l-s+Km("1e-"+((w+"").length-1))),l)}return bc(s,l)}var vb=eo(function(s,l,v){return l=l.toLowerCase(),s+(v?Mg(l):l)});function Mg(s){return Xc(mt(s).toLowerCase())}function Ug(s){return s=mt(s),s&&s.replace(mm,s1).replace(Um,"")}function pb(s,l,v){s=mt(s),l=kn(l);var C=s.length;v=v===n?C:Ei(it(v),0,C);var w=v;return v-=l.length,v>=0&&s.slice(v,w)==l}function mb(s){return s=mt(s),s&&Qp.test(s)?s.replace(f_,a1):s}function Eb(s){return s=mt(s),s&&im.test(s)?s.replace(zl,"\\$&"):s}var Cb=eo(function(s,l,v){return s+(v?"-":"")+l.toLowerCase()}),Ib=eo(function(s,l,v){return s+(v?" ":"")+l.toLowerCase()}),bb=Pf("toLowerCase");function Ob(s,l,v){s=mt(s),l=it(l);var C=l?Ki(s):0;if(!l||C>=l)return s;var w=(l-C)/2;return pa(ia(w),v)+s+pa(ra(w),v)}function wb(s,l,v){s=mt(s),l=it(l);var C=l?Ki(s):0;return l&&C<l?s+pa(l-C,v):s}function yb(s,l,v){s=mt(s),l=it(l);var C=l?Ki(s):0;return l&&C<l?pa(l-C,v)+s:s}function Lb(s,l,v){return v||l==null?l=0:l&&(l=+l),D1(mt(s).replace(Yl,""),l||0)}function Ab(s,l,v){return(v?fn(s,l,v):l===n)?l=1:l=it(l),Oc(mt(s),l)}function Sb(){var s=arguments,l=mt(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var Nb=eo(function(s,l,v){return s+(v?"_":"")+l.toLowerCase()});function xb(s,l,v){return v&&typeof v!="number"&&fn(s,l,v)&&(l=v=n),v=v===n?qe:v>>>0,v?(s=mt(s),s&&(typeof l=="string"||l!=null&&!jc(l))&&(l=kn(l),!l&&ji(s))?Zr(rr(s),0,v):s.split(l,v)):[]}var Rb=eo(function(s,l,v){return s+(v?" ":"")+Xc(l)});function Tb(s,l,v){return s=mt(s),v=v==null?0:Ei(it(v),0,s.length),l=kn(l),s.slice(v,v+l.length)==l}function Db(s,l,v){var C=x.templateSettings;v&&fn(s,l,v)&&(l=n),s=mt(s),l=Na({},l,C,Kf);var w=Na({},l.imports,C.imports,Kf),R=Zt(w),$=sc(w,R),Y,q,_e=0,fe=l.interpolate||Bs,ve="__p += '",Se=lc((l.escape||Bs).source+"|"+fe.source+"|"+(fe===g_?_m:Bs).source+"|"+(l.evaluate||Bs).source+"|$","g"),ke="//# sourceURL="+(Et.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Bm+"]")+`
`;s.replace(Se,function(We,lt,dt,Mn,gn,Un){return dt||(dt=Mn),ve+=s.slice(_e,Un).replace(Em,l1),lt&&(Y=!0,ve+=`' +
__e(`+lt+`) +
'`),gn&&(q=!0,ve+=`';
`+gn+`;
__p += '`),dt&&(ve+=`' +
((__t = (`+dt+`)) == null ? '' : __t) +
'`),_e=Un+We.length,We}),ve+=`';
`;var Be=Et.call(l,"variable")&&l.variable;if(!Be)ve=`with (obj) {
`+ve+`
}
`;else if(um.test(Be))throw new Ze(c);ve=(q?ve.replace(Vp,""):ve).replace(Xp,"$1").replace(qp,"$1;"),ve="function("+(Be||"obj")+`) {
`+(Be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(Y?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ve+`return __p
}`;var ot=Fg(function(){return pt(R,ke+"return "+ve).apply(n,$)});if(ot.source=ve,Yc(ot))throw ot;return ot}function kb(s){return mt(s).toLowerCase()}function Gb(s){return mt(s).toUpperCase()}function Mb(s,l,v){if(s=mt(s),s&&(v||l===n))return K_(s);if(!s||!(l=kn(l)))return s;var C=rr(s),w=rr(l),R=V_(C,w),$=X_(C,w)+1;return Zr(C,R,$).join("")}function Ub(s,l,v){if(s=mt(s),s&&(v||l===n))return s.slice(0,Z_(s)+1);if(!s||!(l=kn(l)))return s;var C=rr(s),w=X_(C,rr(l))+1;return Zr(C,0,w).join("")}function $b(s,l,v){if(s=mt(s),s&&(v||l===n))return s.replace(Yl,"");if(!s||!(l=kn(l)))return s;var C=rr(s),w=V_(C,rr(l));return Zr(C,w).join("")}function Fb(s,l){var v=ae,C=Q;if($t(l)){var w="separator"in l?l.separator:w;v="length"in l?it(l.length):v,C="omission"in l?kn(l.omission):C}s=mt(s);var R=s.length;if(ji(s)){var $=rr(s);R=$.length}if(v>=R)return s;var Y=v-Ki(C);if(Y<1)return C;var q=$?Zr($,0,Y).join(""):s.slice(0,Y);if(w===n)return q+C;if($&&(Y+=q.length-Y),jc(w)){if(s.slice(Y).search(w)){var _e,fe=q;for(w.global||(w=lc(w.source,mt(h_.exec(w))+"g")),w.lastIndex=0;_e=w.exec(fe);)var ve=_e.index;q=q.slice(0,ve===n?Y:ve)}}else if(s.indexOf(kn(w),Y)!=Y){var Se=q.lastIndexOf(w);Se>-1&&(q=q.slice(0,Se))}return q+C}function Pb(s){return s=mt(s),s&&Zp.test(s)?s.replace(__,h1):s}var Hb=eo(function(s,l,v){return s+(v?" ":"")+l.toUpperCase()}),Xc=Pf("toUpperCase");function $g(s,l,v){return s=mt(s),l=v?n:l,l===n?u1(s)?m1(s):t1(s):s.match(l)||[]}var Fg=st(function(s,l){try{return Tn(s,n,l)}catch(v){return Yc(v)?v:new Ze(v)}}),Bb=Ar(function(s,l){return zn(l,function(v){v=hr(v),yr(s,v,Wc(s[v],s))}),s});function Wb(s){var l=s==null?0:s.length,v=He();return s=l?Gt(s,function(C){if(typeof C[1]!="function")throw new Yn(a);return[v(C[0]),C[1]]}):[],st(function(C){for(var w=-1;++w<l;){var R=s[w];if(Tn(R[0],this,C))return Tn(R[1],this,C)}})}function zb(s){return hE(Kn(s,g))}function qc(s){return function(){return s}}function Yb(s,l){return s==null||s!==s?l:s}var jb=Bf(),Kb=Bf(!0);function On(s){return s}function Zc(s){return mf(typeof s=="function"?s:Kn(s,g))}function Vb(s){return Cf(Kn(s,g))}function Xb(s,l){return If(s,Kn(l,g))}var qb=st(function(s,l){return function(v){return Xo(v,s,l)}}),Zb=st(function(s,l){return function(v){return Xo(s,v,l)}});function Qc(s,l,v){var C=Zt(l),w=ua(l,C);v==null&&!($t(l)&&(w.length||!C.length))&&(v=l,l=s,s=this,w=ua(l,Zt(l)));var R=!($t(v)&&"chain"in v)||!!v.chain,$=Nr(s);return zn(w,function(Y){var q=l[Y];s[Y]=q,$&&(s.prototype[Y]=function(){var _e=this.__chain__;if(R||_e){var fe=s(this.__wrapped__),ve=fe.__actions__=Cn(this.__actions__);return ve.push({func:q,args:arguments,thisArg:s}),fe.__chain__=_e,fe}return q.apply(s,Yr([this.value()],arguments))})}),s}function Qb(){return rn._===this&&(rn._=w1),this}function Jc(){}function Jb(s){return s=it(s),st(function(l){return bf(l,s)})}var eO=xc(Gt),tO=xc(B_),nO=xc(tc);function Pg(s){return Uc(s)?nc(hr(s)):TE(s)}function rO(s){return function(l){return s==null?n:Ci(s,l)}}var iO=zf(),oO=zf(!0);function eu(){return[]}function tu(){return!1}function sO(){return{}}function aO(){return""}function lO(){return!0}function cO(s,l){if(s=it(s),s<1||s>Oe)return[];var v=qe,C=ln(s,qe);l=He(l),s-=qe;for(var w=oc(C,l);++v<s;)l(v);return w}function uO(s){return Je(s)?Gt(s,hr):Gn(s)?[s]:Cn(sg(mt(s)))}function dO(s){var l=++b1;return mt(s)+l}var _O=va(function(s,l){return s+l},0),fO=Rc("ceil"),gO=va(function(s,l){return s/l},1),hO=Rc("floor");function vO(s){return s&&s.length?ca(s,On,vc):n}function pO(s,l){return s&&s.length?ca(s,He(l,2),vc):n}function mO(s){return Y_(s,On)}function EO(s,l){return Y_(s,He(l,2))}function CO(s){return s&&s.length?ca(s,On,Cc):n}function IO(s,l){return s&&s.length?ca(s,He(l,2),Cc):n}var bO=va(function(s,l){return s*l},1),OO=Rc("round"),wO=va(function(s,l){return s-l},0);function yO(s){return s&&s.length?ic(s,On):0}function LO(s,l){return s&&s.length?ic(s,He(l,2)):0}return x.after=VC,x.ary=pg,x.assign=GI,x.assignIn=Rg,x.assignInWith=Na,x.assignWith=MI,x.at=UI,x.before=mg,x.bind=Wc,x.bindAll=Bb,x.bindKey=Eg,x.castArray=sI,x.chain=gg,x.chunk=h0,x.compact=v0,x.concat=p0,x.cond=Wb,x.conforms=zb,x.constant=qc,x.countBy=yC,x.create=$I,x.curry=Cg,x.curryRight=Ig,x.debounce=bg,x.defaults=FI,x.defaultsDeep=PI,x.defer=XC,x.delay=qC,x.difference=m0,x.differenceBy=E0,x.differenceWith=C0,x.drop=I0,x.dropRight=b0,x.dropRightWhile=O0,x.dropWhile=w0,x.fill=y0,x.filter=AC,x.flatMap=xC,x.flatMapDeep=RC,x.flatMapDepth=TC,x.flatten=ug,x.flattenDeep=L0,x.flattenDepth=A0,x.flip=ZC,x.flow=jb,x.flowRight=Kb,x.fromPairs=S0,x.functions=KI,x.functionsIn=VI,x.groupBy=DC,x.initial=x0,x.intersection=R0,x.intersectionBy=T0,x.intersectionWith=D0,x.invert=qI,x.invertBy=ZI,x.invokeMap=GC,x.iteratee=Zc,x.keyBy=MC,x.keys=Zt,x.keysIn=bn,x.map=Oa,x.mapKeys=JI,x.mapValues=eb,x.matches=Vb,x.matchesProperty=Xb,x.memoize=ya,x.merge=tb,x.mergeWith=Tg,x.method=qb,x.methodOf=Zb,x.mixin=Qc,x.negate=La,x.nthArg=Jb,x.omit=nb,x.omitBy=rb,x.once=QC,x.orderBy=UC,x.over=eO,x.overArgs=JC,x.overEvery=tO,x.overSome=nO,x.partial=zc,x.partialRight=Og,x.partition=$C,x.pick=ib,x.pickBy=Dg,x.property=Pg,x.propertyOf=rO,x.pull=U0,x.pullAll=_g,x.pullAllBy=$0,x.pullAllWith=F0,x.pullAt=P0,x.range=iO,x.rangeRight=oO,x.rearg=eI,x.reject=HC,x.remove=H0,x.rest=tI,x.reverse=Hc,x.sampleSize=WC,x.set=sb,x.setWith=ab,x.shuffle=zC,x.slice=B0,x.sortBy=KC,x.sortedUniq=X0,x.sortedUniqBy=q0,x.split=xb,x.spread=nI,x.tail=Z0,x.take=Q0,x.takeRight=J0,x.takeRightWhile=eC,x.takeWhile=tC,x.tap=vC,x.throttle=rI,x.thru=ba,x.toArray=Sg,x.toPairs=kg,x.toPairsIn=Gg,x.toPath=uO,x.toPlainObject=xg,x.transform=lb,x.unary=iI,x.union=nC,x.unionBy=rC,x.unionWith=iC,x.uniq=oC,x.uniqBy=sC,x.uniqWith=aC,x.unset=cb,x.unzip=Bc,x.unzipWith=fg,x.update=ub,x.updateWith=db,x.values=ro,x.valuesIn=_b,x.without=lC,x.words=$g,x.wrap=oI,x.xor=cC,x.xorBy=uC,x.xorWith=dC,x.zip=_C,x.zipObject=fC,x.zipObjectDeep=gC,x.zipWith=hC,x.entries=kg,x.entriesIn=Gg,x.extend=Rg,x.extendWith=Na,Qc(x,x),x.add=_O,x.attempt=Fg,x.camelCase=vb,x.capitalize=Mg,x.ceil=fO,x.clamp=fb,x.clone=aI,x.cloneDeep=cI,x.cloneDeepWith=uI,x.cloneWith=lI,x.conformsTo=dI,x.deburr=Ug,x.defaultTo=Yb,x.divide=gO,x.endsWith=pb,x.eq=or,x.escape=mb,x.escapeRegExp=Eb,x.every=LC,x.find=SC,x.findIndex=lg,x.findKey=HI,x.findLast=NC,x.findLastIndex=cg,x.findLastKey=BI,x.floor=hO,x.forEach=hg,x.forEachRight=vg,x.forIn=WI,x.forInRight=zI,x.forOwn=YI,x.forOwnRight=jI,x.get=Kc,x.gt=_I,x.gte=fI,x.has=XI,x.hasIn=Vc,x.head=dg,x.identity=On,x.includes=kC,x.indexOf=N0,x.inRange=gb,x.invoke=QI,x.isArguments=Oi,x.isArray=Je,x.isArrayBuffer=gI,x.isArrayLike=In,x.isArrayLikeObject=Ht,x.isBoolean=hI,x.isBuffer=Qr,x.isDate=vI,x.isElement=pI,x.isEmpty=mI,x.isEqual=EI,x.isEqualWith=CI,x.isError=Yc,x.isFinite=II,x.isFunction=Nr,x.isInteger=wg,x.isLength=Aa,x.isMap=yg,x.isMatch=bI,x.isMatchWith=OI,x.isNaN=wI,x.isNative=yI,x.isNil=AI,x.isNull=LI,x.isNumber=Lg,x.isObject=$t,x.isObjectLike=Ft,x.isPlainObject=ts,x.isRegExp=jc,x.isSafeInteger=SI,x.isSet=Ag,x.isString=Sa,x.isSymbol=Gn,x.isTypedArray=no,x.isUndefined=NI,x.isWeakMap=xI,x.isWeakSet=RI,x.join=k0,x.kebabCase=Cb,x.last=Xn,x.lastIndexOf=G0,x.lowerCase=Ib,x.lowerFirst=bb,x.lt=TI,x.lte=DI,x.max=vO,x.maxBy=pO,x.mean=mO,x.meanBy=EO,x.min=CO,x.minBy=IO,x.stubArray=eu,x.stubFalse=tu,x.stubObject=sO,x.stubString=aO,x.stubTrue=lO,x.multiply=bO,x.nth=M0,x.noConflict=Qb,x.noop=Jc,x.now=wa,x.pad=Ob,x.padEnd=wb,x.padStart=yb,x.parseInt=Lb,x.random=hb,x.reduce=FC,x.reduceRight=PC,x.repeat=Ab,x.replace=Sb,x.result=ob,x.round=OO,x.runInContext=X,x.sample=BC,x.size=YC,x.snakeCase=Nb,x.some=jC,x.sortedIndex=W0,x.sortedIndexBy=z0,x.sortedIndexOf=Y0,x.sortedLastIndex=j0,x.sortedLastIndexBy=K0,x.sortedLastIndexOf=V0,x.startCase=Rb,x.startsWith=Tb,x.subtract=wO,x.sum=yO,x.sumBy=LO,x.template=Db,x.times=cO,x.toFinite=xr,x.toInteger=it,x.toLength=Ng,x.toLower=kb,x.toNumber=qn,x.toSafeInteger=kI,x.toString=mt,x.toUpper=Gb,x.trim=Mb,x.trimEnd=Ub,x.trimStart=$b,x.truncate=Fb,x.unescape=Pb,x.uniqueId=dO,x.upperCase=Hb,x.upperFirst=Xc,x.each=hg,x.eachRight=vg,x.first=dg,Qc(x,function(){var s={};return fr(x,function(l,v){Et.call(x.prototype,v)||(s[v]=l)}),s}(),{chain:!1}),x.VERSION=r,zn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){x[s].placeholder=x}),zn(["drop","take"],function(s,l){ct.prototype[s]=function(v){v=v===n?1:Vt(it(v),0);var C=this.__filtered__&&!l?new ct(this):this.clone();return C.__filtered__?C.__takeCount__=ln(v,C.__takeCount__):C.__views__.push({size:ln(v,qe),type:s+(C.__dir__<0?"Right":"")}),C},ct.prototype[s+"Right"]=function(v){return this.reverse()[s](v).reverse()}}),zn(["filter","map","takeWhile"],function(s,l){var v=l+1,C=v==oe||v==Ne;ct.prototype[s]=function(w){var R=this.clone();return R.__iteratees__.push({iteratee:He(w,3),type:v}),R.__filtered__=R.__filtered__||C,R}}),zn(["head","last"],function(s,l){var v="take"+(l?"Right":"");ct.prototype[s]=function(){return this[v](1).value()[0]}}),zn(["initial","tail"],function(s,l){var v="drop"+(l?"":"Right");ct.prototype[s]=function(){return this.__filtered__?new ct(this):this[v](1)}}),ct.prototype.compact=function(){return this.filter(On)},ct.prototype.find=function(s){return this.filter(s).head()},ct.prototype.findLast=function(s){return this.reverse().find(s)},ct.prototype.invokeMap=st(function(s,l){return typeof s=="function"?new ct(this):this.map(function(v){return Xo(v,s,l)})}),ct.prototype.reject=function(s){return this.filter(La(He(s)))},ct.prototype.slice=function(s,l){s=it(s);var v=this;return v.__filtered__&&(s>0||l<0)?new ct(v):(s<0?v=v.takeRight(-s):s&&(v=v.drop(s)),l!==n&&(l=it(l),v=l<0?v.dropRight(-l):v.take(l-s)),v)},ct.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},ct.prototype.toArray=function(){return this.take(qe)},fr(ct.prototype,function(s,l){var v=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),w=x[C?"take"+(l=="last"?"Right":""):l],R=C||/^find/.test(l);w&&(x.prototype[l]=function(){var $=this.__wrapped__,Y=C?[1]:arguments,q=$ instanceof ct,_e=Y[0],fe=q||Je($),ve=function(lt){var dt=w.apply(x,Yr([lt],Y));return C&&Se?dt[0]:dt};fe&&v&&typeof _e=="function"&&_e.length!=1&&(q=fe=!1);var Se=this.__chain__,ke=!!this.__actions__.length,Be=R&&!Se,ot=q&&!ke;if(!R&&fe){$=ot?$:new ct(this);var We=s.apply($,Y);return We.__actions__.push({func:ba,args:[ve],thisArg:n}),new jn(We,Se)}return Be&&ot?s.apply(this,Y):(We=this.thru(ve),Be?C?We.value()[0]:We.value():We)})}),zn(["pop","push","shift","sort","splice","unshift"],function(s){var l=Vs[s],v=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);x.prototype[s]=function(){var w=arguments;if(C&&!this.__chain__){var R=this.value();return l.apply(Je(R)?R:[],w)}return this[v](function($){return l.apply(Je($)?$:[],w)})}}),fr(ct.prototype,function(s,l){var v=x[l];if(v){var C=v.name+"";Et.call(Zi,C)||(Zi[C]=[]),Zi[C].push({name:l,func:v})}}),Zi[ha(n,O).name]=[{name:"wrapper",func:n}],ct.prototype.clone=P1,ct.prototype.reverse=H1,ct.prototype.value=B1,x.prototype.at=pC,x.prototype.chain=mC,x.prototype.commit=EC,x.prototype.next=CC,x.prototype.plant=bC,x.prototype.reverse=OC,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=wC,x.prototype.first=x.prototype.head,Bo&&(x.prototype[Bo]=IC),x},Vi=E1();hi?((hi.exports=Vi)._=Vi,Zl._=Vi):rn._=Vi}).call(tR)}(as,as.exports)),as.exports}var At=nR();function Dr(t){return Array.isArray?Array.isArray(t):Sv(t)==="[object Array]"}function rR(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function iR(t){return t==null?"":rR(t)}function mr(t){return typeof t=="string"}function Lv(t){return typeof t=="number"}function oR(t){return t===!0||t===!1||sR(t)&&Sv(t)=="[object Boolean]"}function Av(t){return typeof t=="object"}function sR(t){return Av(t)&&t!==null}function Fn(t){return t!=null}function au(t){return!t.trim().length}function Sv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const aR="Incorrect 'index' type",lR=t=>`Invalid value for key ${t}`,cR=t=>`Pattern length exceeds max of ${t}.`,uR=t=>`Missing ${t} property in key`,dR=t=>`Property 'weight' in key '${t}' must be a positive integer`,Jg=Object.prototype.hasOwnProperty;class _R{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Nv(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Nv(t){let e=null,n=null,r=null,i=1,o=null;if(mr(t)||Dr(t))r=t,e=eh(t),n=Nu(t);else{if(!Jg.call(t,"name"))throw new Error(uR("name"));const a=t.name;if(r=a,Jg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(dR(a));e=eh(a),n=Nu(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function eh(t){return Dr(t)?t:t.split(".")}function Nu(t){return Dr(t)?t.join("."):t}function fR(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Fn(o))if(!a[c])n.push(o);else{let u=a[c];const f=o[u];if(!Fn(f))return;if(c===a.length-1&&(mr(f)||Lv(f)||oR(f)))n.push(iR(f));else if(Dr(f)){r=!0;for(let p=0,g=f.length;p<g;p+=1)i(f[p],a,c+1)}else a.length&&i(f,a,c+1)}};return i(t,mr(e)?e.split("."):e,0),r?n:n[0]}const gR={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},hR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},vR={location:0,threshold:.6,distance:100},pR={useExtendedSearch:!1,getFn:fR,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Xe={...hR,...gR,...vR,...pR};const mR=/[^ ]+/g;function ER(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(mR).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class Dd{constructor({getFn:e=Xe.getFn,fieldNormWeight:n=Xe.fieldNormWeight}={}){this.norm=ER(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,mr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();mr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Fn(e)||au(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Fn(a)){if(Dr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:p}=u.pop();if(Fn(p))if(mr(p)&&!au(p)){let g={v:p,i:f,n:this.norm.get(p)};c.push(g)}else Dr(p)&&p.forEach((g,h)=>{u.push({nestedArrIndex:h,value:g})})}r.$[o]=c}else if(mr(a)&&!au(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function xv(t,e,{getFn:n=Xe.getFn,fieldNormWeight:r=Xe.fieldNormWeight}={}){const i=new Dd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Nv)),i.setSources(e),i.create(),i}function CR(t,{getFn:e=Xe.getFn,fieldNormWeight:n=Xe.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Dd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ta(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Xe.distance,ignoreLocation:o=Xe.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function IR(t=[],e=Xe.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const yi=32;function bR(t,e,n,{location:r=Xe.location,distance:i=Xe.distance,threshold:o=Xe.threshold,findAllMatches:a=Xe.findAllMatches,minMatchCharLength:c=Xe.minMatchCharLength,includeMatches:u=Xe.includeMatches,ignoreLocation:f=Xe.ignoreLocation}={}){if(e.length>yi)throw new Error(cR(yi));const p=e.length,g=t.length,h=Math.max(0,Math.min(r,g));let m=o,E=h;const I=c>1||u,b=I?Array(g):[];let O;for(;(O=t.indexOf(e,E))>-1;){let P=Ta(e,{currentLocation:O,expectedLocation:h,distance:i,ignoreLocation:f});if(m=Math.min(P,m),E=O+p,I){let j=0;for(;j<p;)b[O+j]=1,j+=1}}E=-1;let A=[],k=1,G=p+g;const F=1<<p-1;for(let P=0;P<p;P+=1){let j=0,J=G;for(;j<J;)Ta(e,{errors:P,currentLocation:h+J,expectedLocation:h,distance:i,ignoreLocation:f})<=m?j=J:G=J,J=Math.floor((G-j)/2+j);G=J;let ae=Math.max(1,h-J+1),Q=a?g:Math.min(h+J,g)+p,re=Array(Q+2);re[Q+1]=(1<<P)-1;for(let oe=Q;oe>=ae;oe-=1){let pe=oe-1,Ne=n[t.charAt(pe)];if(I&&(b[pe]=+!!Ne),re[oe]=(re[oe+1]<<1|1)&Ne,P&&(re[oe]|=(A[oe+1]|A[oe])<<1|1|A[oe+1]),re[oe]&F&&(k=Ta(e,{errors:P,currentLocation:pe,expectedLocation:h,distance:i,ignoreLocation:f}),k<=m)){if(m=k,E=pe,E<=h)break;ae=Math.max(1,2*h-E)}}if(Ta(e,{errors:P+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:f})>m)break;A=re}const z={isMatch:E>=0,score:Math.max(.001,k)};if(I){const P=IR(b,c);P.length?u&&(z.indices=P):z.isMatch=!1}return z}function OR(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Rv{constructor(e,{location:n=Xe.location,threshold:r=Xe.threshold,distance:i=Xe.distance,includeMatches:o=Xe.includeMatches,findAllMatches:a=Xe.findAllMatches,minMatchCharLength:c=Xe.minMatchCharLength,isCaseSensitive:u=Xe.isCaseSensitive,ignoreLocation:f=Xe.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(h,m)=>{this.chunks.push({pattern:h,alphabet:OR(h),startIndex:m})},g=this.pattern.length;if(g>yi){let h=0;const m=g%yi,E=g-m;for(;h<E;)p(this.pattern.substr(h,yi),h),h+=yi;if(m){const I=g-yi;p(this.pattern.substr(I),I)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options;let p=[],g=0,h=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:O,score:A,indices:k}=bR(e,E,I,{location:i+b,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});O&&(h=!0),g+=A,O&&k&&(p=[...p,...k])});let m={isMatch:h,score:h?g/this.chunks.length:1};return h&&r&&(m.indices=p),m}}class di{constructor(e){this.pattern=e}static isMultiMatch(e){return th(e,this.multiRegex)}static isSingleMatch(e){return th(e,this.singleRegex)}search(){}}function th(t,e){const n=t.match(e);return n?n[1]:null}class wR extends di{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class yR extends di{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class LR extends di{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class AR extends di{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class SR extends di{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class NR extends di{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Tv extends di{constructor(e,{location:n=Xe.location,threshold:r=Xe.threshold,distance:i=Xe.distance,includeMatches:o=Xe.includeMatches,findAllMatches:a=Xe.findAllMatches,minMatchCharLength:c=Xe.minMatchCharLength,isCaseSensitive:u=Xe.isCaseSensitive,ignoreLocation:f=Xe.ignoreLocation}={}){super(e),this._bitapSearch=new Rv(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Dv extends di{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const xu=[wR,Dv,LR,AR,NR,SR,yR,Tv],nh=xu.length,xR=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,RR="|";function TR(t,e={}){return t.split(RR).map(n=>{let r=n.trim().split(xR).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,f=-1;for(;!u&&++f<nh;){const p=xu[f];let g=p.isMultiMatch(c);g&&(i.push(new p(g,e)),u=!0)}if(!u)for(f=-1;++f<nh;){const p=xu[f];let g=p.isSingleMatch(c);if(g){i.push(new p(g,e));break}}}return i})}const DR=new Set([Tv.type,Dv.type]);class kR{constructor(e,{isCaseSensitive:n=Xe.isCaseSensitive,includeMatches:r=Xe.includeMatches,minMatchCharLength:i=Xe.minMatchCharLength,ignoreLocation:o=Xe.ignoreLocation,findAllMatches:a=Xe.findAllMatches,location:c=Xe.location,threshold:u=Xe.threshold,distance:f=Xe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=TR(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,f=n.length;u<f;u+=1){const p=n[u];a.length=0,o=0;for(let g=0,h=p.length;g<h;g+=1){const m=p[g],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(o+=1,c+=b,r){const O=m.constructor.type;DR.has(O)?a=[...a,...I]:a.push(I)}}else{c=0,o=0,a.length=0;break}}if(o){let g={isMatch:!0,score:c/o};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const Ru=[];function GR(...t){Ru.push(...t)}function Tu(t,e){for(let n=0,r=Ru.length;n<r;n+=1){let i=Ru[n];if(i.condition(t,e))return new i(t,e)}return new Rv(t,e)}const Ya={AND:"$and",OR:"$or"},Du={PATH:"$path",PATTERN:"$val"},ku=t=>!!(t[Ya.AND]||t[Ya.OR]),MR=t=>!!t[Du.PATH],UR=t=>!Dr(t)&&Av(t)&&!ku(t),rh=t=>({[Ya.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function kv(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=MR(i);if(!a&&o.length>1&&!ku(i))return r(rh(i));if(UR(i)){const u=a?i[Du.PATH]:o[0],f=a?i[Du.PATTERN]:i[u];if(!mr(f))throw new Error(lR(u));const p={keyId:Nu(u),pattern:f};return n&&(p.searcher=Tu(f,e)),p}let c={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];Dr(f)&&f.forEach(p=>{c.children.push(r(p))})}),c};return ku(t)||(t=rh(t)),r(t)}function $R(t,{ignoreFieldNorm:e=Xe.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function FR(t,e){const n=t.matches;e.matches=[],Fn(n)&&n.forEach(r=>{if(!Fn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function PR(t,e){e.score=t.score}function HR(t,e,{includeMatches:n=Xe.includeMatches,includeScore:r=Xe.includeScore}={}){const i=[];return n&&i.push(FR),r&&i.push(PR),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class Ao{constructor(e,n={},r){this.options={...Xe,...n},this.options.useExtendedSearch,this._keyStore=new _R(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Dd))throw new Error(aR);this._myIndex=n||xv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Fn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=mr(e)?mr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return $R(u,{ignoreFieldNorm:c}),o&&u.sort(a),Lv(n)&&n>-1&&(u=u.slice(0,n)),HR(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Tu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Fn(o))return;const{isMatch:u,score:f,indices:p}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:c,indices:p}]})}),i}_searchLogical(e){const n=kv(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:g,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:h});return m&&m.length?[{idx:f,item:u,matches:m}]:[]}const p=[];for(let g=0,h=c.children.length;g<h;g+=1){const m=c.children[g],E=r(m,u,f);if(E.length)p.push(...E);else if(c.operator===Ya.AND)return[]}return p},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Fn(c)){let f=r(n,c,u);f.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),f.forEach(({matches:p})=>{o[u].matches.push(...p)}))}}),a}_searchObjectList(e){const n=Tu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Fn(a))return;let u=[];r.forEach((f,p)=>{u.push(...this._findMatches({key:f,value:a[p],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Fn(n))return[];let i=[];if(Dr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Fn(o))return;const{isMatch:u,score:f,indices:p}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:c,indices:p})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:f}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}Ao.version="7.0.0";Ao.createIndex=xv;Ao.parseIndex=CR;Ao.config=Xe;Ao.parseQuery=kv;GR(kR);function Ti(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function BR(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function WR(t){return new Ao(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function zR(t,e,n){const r=BR(e,n);return t.length===0?r:WR(r).search(t).map(i=>i.item)}function YR(t,e){return Ti(t,e).shape}function dn(t,e){const n=YR(t,e);return n?Lu(n):void 0}function Ss(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Td(e)}function jR(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Ns(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Td(i)})}function KR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Td(o)})})}function Ur(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function Gv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Ov(e)}function VR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Ov(r)})}function XR(t,e){const n=t.shape;return n===void 0?void 0:{...dn(e,Pt),...n}}function Mv(t,e,n){return{toolId:t,cells:e,value:n}}function qR(t,e){const n=Ns(e,"cells"),r=Ur(e);return Mv(t,n,r)}function Uv(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>Ke(o,e)&&a>=r)}function ZR(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Ls(r[i-1],e)))return t;const a=Uv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function $v(t,e){return{toolId:t,cells:e,lines:[]}}function QR(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ba(n),{...t,cells:n};const r=n.some(o=>Ke(o,e)),i=n.some(o=>Ls(o,e));return n.length>0&&!r&&i?(n.push(e),Ba(n),{...t,cells:n}):t}function JR(t,e,n){const r=t.cells.some(f=>Ke(f,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return Gu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return Gu(t,e);const c=Uv(o,e,!1);return(o.length===0?!0:Ls(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function Gu(t,e){return t.cells.some(r=>Ke(r,e))?{...t,lines:[...t.lines,[e]]}:t}function eT(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function tT(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function nT(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function rT(t,e){const n=Ns(e,"cells"),r=KR(e),i=$v(t,n);return i.lines=r,i}function Fv(t,e,n=""){return{toolId:t,cells:e,value:n}}function iT(t,e,n=!1){const r=yv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function oT(t,e){return{...t,value:e}}function sT(t,e){const n=Ns(e,"cells"),r=Ur(e);return Fv(t,n,r)}function Mu(t,e,n){return{toolId:t,cells:e,value:n}}function aT(t,e){const n=Ns(e,"cells"),r=Ur(e);return Mu(t,n,r)}function Uu(t,e,n){return{toolId:t,cells:e,value:n}}function lT(t,e){const n=Ns(e,"cells"),r=Ur(e);return Uu(t,n,r)}function $u(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function cT(t,e){const n=Ss(e),r=Gv(e),i=Ur(e);return $u(t,n,r,i)}function Fu(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function uT(t,e){const n=Ss(e),r=Ur(e);return Fu(t,n,r)}function Pu(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function dT(t,e){const n=Ss(e),r=Gv(e);return Pu(t,n,r)}function Hu(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function _T(t,e){const n=Ss(e),r=VR(e),i=Hu(t,n,Fe.N);return i.directions=r,i}function Pv(t,e,n=""){return{toolId:t,cell:e,value:n}}function fT(t,e){const n=Ss(e),r=Ur(e);return Pv(t,n,r)}function gT(t,e=""){return{toolId:t,value:e}}function hT(t,e){const n=Ur(e);return gT(t,n)}function vT(t,e,n=""){return{toolId:t,coords:e,value:n}}function pT(t,e){const n=jR(e,"coords"),r=Ur(e);return vT(t,n,r)}function xs(t,e){return{...t,value:e}}class So extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(wT(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new So;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=cv(r);if(o===void 0||!Object.keys(Pt).includes(o))continue;const a=i;for(const c of a){let u=null;if(uv(o,ol)?u=uT(o,c):sl(o)?u=dT(o,c):al(o)?u=_T(o,c):ll(o)?u=lT(o,c):Id(o)?u=aT(o,c):cl(o)?u=qR(o,c):lv(o)?u=pT(o,c):ul(o)?u=rT(o,c):dl(o)?u=sT(o,c):Li(o)?u=cT(o,c):gw(o)?u=hT(o,c):av(o)&&(u=fT(o,c)),u!==null){n.addToDict(o);const f=At.uniqueId(),p=XR(c,o);u.shape=p,n.addConstraint(o,f,u)}}}return n}}function lo(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ke(o.cell,n))return[a,o]}return null}function ih(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>Ke(c,u))))return i}return null}function oh(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(Ke(n,a))return i}return null}function sh(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n)))return[i[0],o]}return null}function mT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Ke(c,n)))return i;return null}function ah(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n)))return[i[0],o]}return null}function ET(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((f,p)=>Ke(f,n)&&p>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function CT(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(Ke(n,a.cell)&&r===a.direction)return c}return null}function IT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ke(n,o.cell))return a}return null}function bT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n))||o.cells2.some(c=>Ke(c,n)))return[i[0],o]}return null}function OT(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function wT(t){const e={};if("cells"in t){const n=t.cells.map(r=>xa(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>xa(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>xa(i)));e.lines=n}if("cell"in t){const n=xa(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=dn(t.toolId,Pt),r=Cw(t.shape,n);r&&(e.shape=r)}return e}function lh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function Hv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Bu(t){const e=new Option().style;return e.color=t,e.color!==""}function lu(t){return Hv(t)||Bu(t)?t:Bu(`#${t}`)?`#${t}`:void 0}function ja(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Bv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Ka(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function yT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const ch={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function LT(t){return t in ch?ch[t]:null}function Wv(t,e,n){if(n===null)return null;const r=LT(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function cu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class AT{constructor(e,n){Ce(this,"r");Ce(this,"c");Ce(this,"outside",!1);Ce(this,"value",null);Ce(this,"given",!1);Ce(this,"region",null);Ce(this,"centerMarks",[]);Ce(this,"cornerMarks",[]);Ce(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=cu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=cu(this.cornerMarks,e))}enterHighlight(e){this.highlights=cu(this.highlights,e)}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Wv(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class No{constructor(e,n){Ce(this,"nCols");Ce(this,"nRows");Ce(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new AT(i,a);if(r){const u=Wv(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Bv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=As(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const f=this.grid[c][u];i.push(f),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new No(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function ST(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=At.range(1,o+1);t.valid_digits&&!yT(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function NT(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=No.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=At.range(1,c+1);i!==void 0&&(u=i);const f=t.solution,p=t.local_constraints,g=So.fromJson(p),h=t.bool_constraints,m=Ri.fromJson(h);return{puzzleMeta:r,solution:f,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function x7(){const t=new No(9,9),e=new So,n=new Ri;return{grid:t,solution:void 0,valid_digits:At.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var ls=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(ls||{});const xT=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),RT=()=>({type:"CLEAR"}),TT=t=>({type:"DRAG",payload:t}),Wu=t=>({type:"SET",payload:t}),DT=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),kd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),pr=(t,e,n)=>{const r=[...t];return Ba(r),{cells:r,lastCell:e,mode:n}};function kT(t,e,n){if(e===null)return kd();if(n==="RESETTING")return pr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ke(e,i));if(n==="SELECTING")return r!==-1?t:pr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),pr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return pr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),pr(i,null,"DESELECTING")}return t}function GT(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ke(e,r));if(t.mode==="SELECTING")return n!==-1?t:pr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),pr(r,null,t.mode)}return t}function MT(t,e){return{...t,cells:e}}function UT(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ke(e,i))!==-1?pr([...t.cells],e,"SELECTING"):pr([...t.cells,e],e,"SELECTING"):pr([e],e,t.mode)}function zv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return kd();case"SET":return MT(t,e.payload);case"CLICK":return kT(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return GT(t,e.payload);case"ARROW_KEY":return UT(t,e.payload.cell,e.payload.selectionMode);default:return t}}function ao(t,e){return Ke(t.p1,e.p1)&&Ke(t.p2,e.p2)||Ke(t.p1,e.p2)&&Ke(t.p2,e.p1)}function $T(t,e){return Ke(t.p1,e.p2)&&Ke(t.p2,e.p1)}function Yv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ke(t,e)}class El{constructor(){Ce(this,"edgeMarkers",[]);Ce(this,"cellMarkers",[]);Ce(this,"lineMarkers",[]);Ce(this,"draftLine",[]);Ce(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ke(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ke(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ke(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ke(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ke(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ke(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ke(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ke(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ke(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ke(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>ao(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>ao(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&$T(r,e)&&this.draftLine.splice(n,1)}onDrag(e){Yv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>ao(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>ao(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new El;return Object.assign(e,this),e}}const uh=t=>({type:"ADD_EDGE_MARKER",payload:t}),dh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Da=t=>({type:"ADD_CELL_MARKER",payload:t}),FT=t=>({type:"SET_CELL_MARKERS",payload:t}),_h=t=>({type:"REMOVE_CELL_MARKER",payload:t}),PT=t=>({type:"DRAG",payload:t}),vs=t=>({type:"ADD_LINE_MARKERS",payload:t}),fh=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),Gd=()=>({type:"RESET"});function HT(t,e){switch(e.type){case"RESET":return new El;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function jv(){return{_undoStack:[],_redoStack:[]}}const xo=Dt(jv());function BT(){xo.update(()=>jv())}function pn(t,e=!0){xo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function WT(t,e=!0){xo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Kv(){xo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Vv(){xo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Va=Dt(new El);function Cr(t){Va.update(e=>HT(e,t))}const Xa=Dt(1);function wi(t,e){return{execute:()=>{Cr(t)},unExecute:()=>{Cr(e)}}}const Di=Dt(kd());function oo(t){t&&Di.update(e=>zv(e,t))}function gh(t){t&&Di.update(e=>zv(e,t))}function zT(t,e){return{execute:()=>{gh(t)},unExecute:()=>{gh(e)}}}const _o=Dt(null),Cl=Dt(vo.SETTING),zu=Dt(!1),Qt=Dt(d.DIGIT),Xv=Dt(d.DIGIT),Md=Dt(At.range(1,10)),mn=Dt(new No(9,9)),Qn=Dt(tt(mn).getAllCells()),$r=Dt({}),Fr=Dt(new Ri),gt=Dt(new So),zt=Dt(null),Rs=Dt(void 0),Il=Dt(void 0);function YT(t){$r.update(()=>t)}function Ro(t){zt.update(()=>t)}function Ud(t){Rs.update(()=>t)}function ni(t){tt(Qt)!==t&&(Qt.update(()=>t),Ro(null))}function jT(){const t=tt(Xv);t&&ni(t)}function Yu(t){Xv.update(()=>t)}function KT(t){tt(Qt)===t&&ni(d.DIGIT)}function VT(t){gt.update(e=>(e.removeFromDict(t),e)),Ud(void 0)}function Xt(t,e,n){gt.update(r=>(r.updateConstraint(t,e,n),r)),Ro({id:e,constraint:n})}function uu(t){const e=tt(zt);if(t=t?{...t}:void 0,Ud(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Xt(r,e.id,n)}function XT(t,e){const r=tt(gt).get(e);if(!r)return;const i=r[t];i&&Ro({id:t,constraint:i})}function qT(t,e,n){const r=new No(t,e);mn.update(()=>r),Md.update(()=>n),gt.update(()=>new So),Fr.update(()=>new Ri),$r.update(()=>({})),$d(void 0),Qn.update(()=>r.getAllCells())}function ZT(t){mn.update(()=>t.grid),$r.update(()=>t.puzzleMeta),$d(t.solution),Md.update(()=>t.valid_digits),gt.update(()=>t.localConstraints),Fr.update(()=>t.globalConstraints),Qn.update(()=>t.grid.getAllCells())}function qv(){const t=tt(mn);t.resetValues(),mn.update(()=>t),Qn.update(()=>t.getAllCells()),Cr(Gd())}function qa(){BT(),Cr(Gd()),ni(d.DIGIT);const t=RT();oo(t),Ud(void 0),Ro(null)}const Zv=ai([si,Qt,Cl],([t,e,n])=>{const r=t.hideFog;return e===d.FOG_LIGHTS&&!r&&n===vo.SETTING}),Ts=ai([mn,$r,Fr,gt,Il,Md],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function $d(t){Il.update(()=>t)}var Qv=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Qv||{});const Ua=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Jv=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function QT(t,e){Fr.update(n=>n.setConstraint(t,e))}function JT(t){Fr.update(e=>e.removeConstraint(t))}function hh(t){t.type===Qv.REMOVE_GLOBAL_CONSTRAINT?JT(t.payload):QT(t.payload.tool,t.payload.value)}function ju(t,e){return{execute:()=>{hh(t)},unExecute:()=>{hh(e)}}}var e2=de('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function t2(t,e){let n=M(e,"value",8,!1);var r=e2(),i=V(r);an(i),B(r),te(()=>Wh(i,n())),S(t,r)}var n2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function ep(t){var e=n2();S(t,e)}var r2=de('<button class="remove-button svelte-17rdl63"><!></button>');function i2(t,e){let n=M(e,"onTrash",8,()=>{});var r=r2(),i=V(r);ep(i),B(r),Ge("click",r,er(function(...o){var a;(a=n())==null||a.apply(this,o)})),S(t,r)}var o2=de('<input type="radio" class="radio-select-button svelte-3561wl">'),s2=de('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function Za(t,e){var J,ae;ce(e,!1);const n=Ye(),r=()=>Ee(Qt,"$toolStore",n),i=[];let o=M(e,"elementInfo",8),a=M(e,"onClick",12,void 0),c=M(e,"onTrash",8,void 0);const u=o().toolId,f=o().permanent??!1,p=((J=o().menu)==null?void 0:J.name)??o().toolId,g=!((ae=o().meta)!=null&&ae.categories.includes(T.GLOBAL_CONSTRAINT)),h=`label-${p}`;g&&a(()=>{ni(u)});function m(){var oe,pe;const Q=(oe=o().meta)==null?void 0:oe.description,re=((pe=o().meta)==null?void 0:pe.usage)??Nw(u);let ge;return Q&&Q.length&&(ge=Q),re.length&&(ge?ge=ge+`

`+re:ge=re),ge}he();var E=s2(),I=V(E);{var b=Q=>{var re=o2();an(re),L(re,"id",h),re.value=(re.__value=u)==null?"":u,il(i,[],re,()=>r(),ge=>ms(Qt,ge)),S(Q,re)};ne(I,Q=>{g&&Q(b)})}var O=U(I,2);te(()=>L(O,"title",m())),L(O,"aria-labelledby",h);var A=V(O),k=V(A),G=V(k);{var F=Q=>{i2(Q,{get onTrash(){return c()}})};ne(G,Q=>{f||Q(F)})}B(k);var z=U(k,2);L(z,"for",h),z.textContent=p,B(A);var P=U(A,2),j=V(P);ht(j,e,"default",{}),B(P),B(O),B(E),te(()=>yt(E,"checked",u===r())),Ge("click",O,er(function(...Q){var re;(re=a())==null||re.apply(this,Q)})),S(t,E),ue()}function a2(t,e){ce(e,!1);let n=M(e,"toolId",8),r=M(e,"value",8,!1),i=M(e,"elementHandlers",8);const o=()=>{const u=Ua(n(),!r()),f=Ua(n(),r()),p=ju(u,f);pn(p)},a=()=>{const u=Jv(n()),f=Ua(n(),r()),p=ju(u,f);pn(p)};he();var c=Qe(()=>Ti(n(),i()));Za(t,{get elementInfo(){return _(c)},onClick:o,onTrash:a,children:(u,f)=>{t2(u,{get value(){return r()}})},$$slots:{default:!0}}),ue()}var l2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function c2(t){var e=l2();S(t,e)}var u2=de('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function d2(t,e){let n=M(e,"title",8),r=M(e,"closeCb",8);var i=u2(),o=V(i),a=V(o,!0);B(o);var c=U(o,2);B(i),te(()=>at(a,n())),Ge("click",c,function(...u){var f;(f=r())==null||f.apply(this,u)}),S(t,i)}var _2=de('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Pr(t,e){ce(e,!1);let n=M(e,"showModal",12),r=M(e,"title",8),i=N();function o(){n(!1),_(i).close()}D(()=>(_(i),Z(n())),()=>{_(i)&&n()&&_(i).showModal()}),D(()=>(_(i),Z(n())),()=>{_(i)&&!n()&&_(i).close()}),we();var a=_2(),c=V(a),u=V(c);d2(u,{get title(){return r()},closeCb:o});var f=U(u,2),p=V(f),g=V(p);ht(g,e,"default",{}),B(p),B(f),B(c),B(a),xi(a,h=>y(i,h),()=>_(i)),Ge("click",c,er(function(h){cw.call(this,e,h)})),Ge("close",a,()=>{n(!1)}),Ge("click",a,lw(er(()=>_(i).close()))),S(t,a),ue()}var f2=de('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function g2(t,e){ce(e,!1);let n=M(e,"searchPattern",12,""),r=M(e,"showModal",8),i=N(null);D(()=>(Z(r()),_(i)),()=>{r()&&_(i)&&_(i).focus()}),we();var o=f2(),a=U(V(o),2);an(a),L(a,"spellcheck",!1),xi(a,c=>y(i,c),()=>_(i)),B(o),Zn(a,n),S(t,o),ue()}var h2=de('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function v2(t,e){let n=M(e,"showModal",12),r=M(e,"searchPattern",12,""),i=M(e,"title",8);Pr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=h2(),u=V(c);g2(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var f=U(u,2),p=V(f),g=V(p);ht(g,e,"default",{}),B(p),B(f),B(c),S(o,c)},$$slots:{default:!0},$$legacy:!0})}var p2=de('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function bl(t,e){let n=M(e,"isOpen",8,!0);var r=p2(),i=V(r);ht(i,e,"default",{}),B(r),te(()=>{L(r,"aria-expanded",n()),yt(r,"closed",!n())}),S(t,r)}var m2=de('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),E2=de('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function ti(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0),i=M(e,"isCollapsible",8,!1);var o=ye(),a=se(o);{var c=f=>{var p=m2(),g=V(p),h=V(g),m=V(h,!0);B(h),B(g);var E=U(g,2),I=V(E);ht(I,e,"default",{}),B(E),B(p),te(()=>at(m,n())),S(f,p)},u=f=>{var p=E2(),g=V(p),h=V(g),m=V(h,!0);B(h),B(g);var E=U(g,2),I=V(E);ht(I,e,"default",{});var b=U(I,2);B(E),B(p),te(()=>{at(m,n()),yt(b,"open",r())}),Ge("click",p,()=>r(!r())),S(f,p)};ne(a,f=>{i()?f(u,!1):f(c)})}S(t,o)}var C2=de('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),I2=de('<ol class="svelte-cd45on"></ol>'),b2=de("<!> <!>",1);function O2(t,e){ce(e,!1);const n=N();let r=M(e,"category",8),i=M(e,"addTool",8),o=M(e,"searchResults",8),a=N(!0);D(()=>(Z(o()),Z(r())),()=>{y(n,o().filter(p=>{var g,h;return(h=(g=p.info.meta)==null?void 0:g.categories)==null?void 0:h.includes(r())}))}),we(),he();var c=ye(),u=se(c);{var f=p=>{var g=b2(),h=se(g);ti(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return _(a)},set isOpen(E){y(a,E)},$$legacy:!0});var m=U(h,2);bl(m,{get isOpen(){return _(a)},children:(E,I)=>{var b=I2();et(b,5,()=>_(n),Ct,(O,A)=>{let k=()=>_(A).key,G=()=>_(A).info;var F=C2(),z=V(F),P=V(z,!0);B(z),B(F),te(()=>{var j;L(z,"title",(j=G().meta)==null?void 0:j.description),at(P,k())}),Ge("click",z,()=>{i()(k())}),S(O,F)}),B(b),S(E,b)},$$slots:{default:!0}}),S(p,g)};ne(u,p=>{_(n).length&&p(f)})}S(t,c),ue()}function w2(t,e){ce(e,!1);const n=N();let r=M(e,"searchPattern",8,""),i=M(e,"addTool",8),o=M(e,"categories",8),a=M(e,"filterFunc",8),c=M(e,"elementHandlers",8);D(()=>(Z(r()),Z(a()),Z(c())),()=>{y(n,zR(r(),a(),c()))}),we(),he();var u=ye(),f=se(u);et(f,1,o,Ct,(p,g)=>{O2(p,{get category(){return _(g)},get searchResults(){return _(n)},get addTool(){return i()}})}),S(t,u),ue()}var y2=de('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Ol(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8);var i=y2();L(i,"tabindex",0);var o=V(i),a=V(o);ht(a,e,"add-button",{}),B(o);var c=U(o,2),u=V(c),f=V(u);ht(f,e,"title-icon",{}),B(u);var p=U(u);B(c);var g=U(c,2),h=V(g);B(g),B(i),te(()=>{at(p,` ${r()??""}`),yt(h,"open",n())}),Ge("click",i,()=>n(!n())),Ge("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),S(t,i)}var L2=de('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function A2(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8),i=M(e,"showModal",12);function o(){i(!i())}Ol(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=L2();Ge("click",u,er(()=>o())),S(a,u)},"title-icon":(a,c)=>{var u=ye(),f=se(u);ht(f,e,"title-icon",{}),S(a,u)}},$$legacy:!0})}var S2=de('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),N2=de('<div class="panel-container svelte-hixu4"><!> <!></div>');function wl(t,e){let n=M(e,"isOpen",8,!0);var r=N2(),i=V(r);ht(i,e,"panel-header",{});var o=U(i,2);bl(o,{get isOpen(){return n()},children:(a,c)=>{var u=S2(),f=V(u);ht(f,e,"panel-content",{}),B(u),S(a,u)},$$slots:{default:!0}}),B(r),S(t,r)}var x2=de("<!> <!>",1);function tp(t,e){ce(e,!1);let n=M(e,"categories",8),r=M(e,"title",8),i=M(e,"onAddTool",8),o=M(e,"elementHandlerFilterFunc",8),a=M(e,"elementHandlers",8),c=N(!0),u=N(!1),f=N("");const p=g=>{y(u,!1),y(c,!0),i()(g)};he(),wl(t,{get isOpen(){return _(c)},set isOpen(g){y(c,g)},$$slots:{"panel-header":(g,h)=>{var m=x2(),E=se(m);A2(E,{get title(){return r()},get isOpen(){return _(c)},set isOpen(b){y(c,b)},get showModal(){return _(u)},set showModal(b){y(u,b)},$$slots:{"title-icon":(b,O)=>{var A=ye(),k=se(A);ht(k,e,"title-icon",{}),S(b,A)}},$$legacy:!0});var I=U(E,2);v2(I,{get title(){return r()},get showModal(){return _(u)},set showModal(b){y(u,b)},get searchPattern(){return _(f)},set searchPattern(b){y(f,b)},children:(b,O)=>{w2(b,{get searchPattern(){return _(f)},get categories(){return n()},get filterFunc(){return o()},addTool:p,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),S(g,m)},"panel-content":(g,h)=>{var m=ye(),E=se(m);ht(E,e,"panel-content",{}),S(g,m)}},$$legacy:!0}),ue()}function R2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Fr,"$globalConstraintsStore",n),i=N();let o=M(e,"elementHandlers",8);const a=mw,c=u=>{const f=Ua(u,!0),p=Jv(u),g=ju(f,p);pn(g)};D(()=>r(),()=>{y(i,(u,f)=>{var h;const p=!!((h=f.meta)!=null&&h.categories.includes(T.GLOBAL_CONSTRAINT)),g=r().has(u);return p&&!g})}),we(),he(),tp(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,f)=>{c2(u)},"panel-content":(u,f)=>{var p=ye(),g=se(p);et(g,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let E=()=>_(m)[0],I=()=>_(m)[1];a2(h,{get toolId(){return E()},get value(){return I()},get elementHandlers(){return o()}})}),S(u,p)}}}),ue()}var so=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(so||{});const Fd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Pd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),T2=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),D2=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),vh=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function k2(t){gt.update(e=>(e.addToDict(t),e))}function _i(t,e){const n=tt(Rs);n&&(e.shape={...n}),gt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Ro({id:t,constraint:e})}function ki(t,e){e&&gt.update(n=>(n.removeConstraint(t,e),n))}function G2(t,e){gt.update(n=>(n.setConstraints(t,e),n))}function ph(t){t.type===so.ADD_LOCAL_CONSTRAINT?_i(t.payload.id,t.payload.constraint):t.type===so.REMOVE_LOCAL_CONSTRAINT?ki(t.payload.tool,t.payload.id):t.type===so.REMOVE_LOCAL_CONSTRAINT_GROUP?VT(t.payload.tool):t.type===so.RESTORE_LOCAL_CONSTRAINT_GROUP?G2(t.payload.tool,t.payload.constraints):t.type===so.UPDATE_LOCAL_CONSTRAINT&&Xt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ds(t,e){return{execute:()=>{ph(t)},unExecute:()=>{ph(e)}}}function M2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(gt,"$localConstraintsStore",n);let i=M(e,"toolId",8),o=M(e,"elementHandlers",8);const a=()=>{KT(i());const u=r().get(i());if(!u)return;const f=T2(i()),p=D2(i(),u),g=Ds(f,p);pn(g)};he();var c=Qe(()=>Ti(i(),o()));Za(t,{get elementInfo(){return _(c)},onTrash:a}),ue()}var U2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function $2(t){var e=U2();S(t,e)}var F2=de('<div class="constraint-button svelte-fgm6t3"><div class="left-side svelte-fgm6t3"> </div> <div class="right-side svelte-fgm6t3"><button class="remove-constraint-button svelte-fgm6t3"><!></button></div></div>');function P2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(_o,"$svgRefStore",n),i=()=>Ee(gt,"$localConstraintsStore",n),o=()=>Ee(zt,"$currentConstraintStore",n),a=N();let c=M(e,"constraintId",8),u=M(e,"toolId",8);function f(){XT(c(),u()),r()&&r().focus()}function p(){const O=i().getConstraint(u(),c());if(!O)return;const A=Pd(c(),u()),k=Fd(c(),O),G=Ds(A,k);pn(G)}D(()=>o(),()=>{var O;y(a,(O=o())==null?void 0:O.id)}),we(),he();var g=F2(),h=V(g),m=V(h);B(h);var E=U(h,2),I=V(E),b=V(I);ep(b),B(I),B(E),B(g),te(()=>{yt(g,"active",c()===_(a)),at(m,`ID: ${c()??""}`)}),Ge("click",I,er(p)),Ge("click",g,f),S(t,g),ue()}var H2=de('<div class="constraint-list svelte-w5npcu"></div>');function B2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(gt,"$localConstraintsStore",n),i=()=>Ee(Qt,"$toolStore",n),o=N();let a=M(e,"toolId",8);D(()=>(r(),Z(a())),()=>{y(o,r().get(a()))}),we(),he();var c=ye(),u=se(c);{var f=p=>{var g=Qe(()=>a()===i());bl(p,{get isOpen(){return _(g)},children:(h,m)=>{var E=H2();et(E,5,()=>Object.entries(_(o)),I=>I[0],(I,b)=>{P2(I,{get constraintId(){return _(b)[0]},get toolId(){return a()}})}),B(E),S(h,E)},$$slots:{default:!0}})};ne(u,p=>{_(o)&&Object.entries(_(o)).length&&p(f)})}S(t,c),ue()}var W2=de("<!> <!>",1),z2=de("<!> <!> <!>",1);function Y2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(gt,"$localConstraintsStore",n),i=N();let o=M(e,"elementHandlers",8);const a=pw,c=u=>{k2(u),ni(u)};D(()=>(r(),T),()=>{y(i,(u,f)=>{var h;const p=r().has(u);return!!((h=f.meta)!=null&&h.categories.includes(T.LOCAL_ELEMENT))&&!p})}),we(),he(),tp(t,{title:"Local Elements",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,f)=>{$2(u)},"panel-content":(u,f)=>{var p=z2(),g=se(p),h=Qe(()=>Ti(d.GIVEN,o()));Za(g,{get elementInfo(){return _(h)}});var m=U(g,2),E=Qe(()=>Ti(d.REGIONS,o()));Za(m,{get elementInfo(){return _(E)}});var I=U(m,2);et(I,1,()=>r().entries(),([b,O])=>b,(b,O)=>{let A=()=>_(O)[0];var k=ye(),G=se(k);{var F=z=>{var P=W2(),j=se(P);M2(j,{get toolId(){return A()},get elementHandlers(){return o()}});var J=U(j,2);B2(J,{get toolId(){return A()}}),S(z,P)};ne(G,z=>{fw(A())&&z(F)})}S(b,k)}),S(u,p)}}}),ue()}var j2=de('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function du(t,e){ce(e,!1);const n=N();let r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0),o=N(void 0);function a(m){const E=lu(m);E&&i()&&i()(E)}D(()=>Z(r()),()=>{y(n,r())}),D(()=>(_(n),lu),()=>{Bu(_(n))&&y(o,lu(_(n)))}),we(),he();var c=j2(),u=V(c);const f=Qe(()=>Hv(_(n)));var p=V(u);an(p),B(u);var g=U(u,2),h=U(V(g),2);an(h),L(h,"spellcheck",!1),L(h,"maxlength",30),B(g),B(c),te(()=>{L(u,"style",`--choosen-color: ${_(o)??""}`),yt(u,"transparent",_(f))}),Zn(p,()=>_(n),m=>y(n,m)),Ge("change",p,()=>a(_(n))),Zn(h,()=>_(n),m=>y(n,m)),Ge("input",h,()=>a(_(n))),S(t,c),ue()}var K2=de('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ds(t,e){let n=M(e,"name",8);var r=K2(),i=V(r),o=V(i,!0);B(i);var a=U(i,2);ht(a,e,"default",{}),B(r),te(()=>at(o,n())),S(t,r)}var V2=de('<input class="control-slider svelte-1rsuho6" type="range">');function X2(t,e){ce(e,!1);let n=M(e,"min",8),r=M(e,"max",8),i=M(e,"value",12),o=M(e,"step",24,()=>(r()-n())/10),a=M(e,"onChangeCb",8,void 0),c=M(e,"onInputCb",8,void 0);he();var u=V2();an(u),te(()=>{L(u,"min",n()),L(u,"max",r()),L(u,"step",o())}),Zn(u,i),Ge("change",u,()=>{a()&&a()(i())}),Ge("input",u,()=>{c()&&c()(i())}),S(t,u),ue()}function Jr(t,e){let n=M(e,"name",8),r=M(e,"value",12),i=M(e,"min",8),o=M(e,"max",8),a=M(e,"step",24,()=>(o()-i())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);ds(t,{get name(){return`${n()??""}: ${r()??""}`},children:(f,p)=>{X2(f,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var q2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function Z2(t){var e=q2();S(t,e)}var Q2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function J2(t){var e=Q2();S(t,e)}var eD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function tD(t){var e=eD();S(t,e)}var nD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function rD(t){var e=nD();S(t,e)}var iD=de('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function oD(t,e){ce(e,!1);const n=[];let r=M(e,"value",8),i=M(e,"selectedShape",12),o=M(e,"title",8),a=M(e,"updateShapeCb",8,void 0);he();var c=iD(),u=V(c);an(u);var f,p=U(u,2);ht(p,e,"default",{}),B(c),te(()=>{L(c,"title",o()),yt(c,"active",r()===i()),f!==(f=r())&&(u.value=(u.__value=r())==null?"":r())}),il(n,[],u,()=>(r(),i()),i),Ge("change",u,()=>a()&&a()(r())),S(t,c),ue()}var sD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function aD(t){var e=sD(),n=V(e);L(n,"cx",480),L(n,"cy",-480),L(n,"rx",480),L(n,"ry",300),B(e),S(t,e)}var lD=de('<div class="icon-wrapper svelte-18euf14"><!></div>'),cD=de('<div class="radio-container svelte-18euf14"></div>');function uD(t,e){ce(e,!1);let n=M(e,"name",8),r=M(e,"selectedShape",8),i=M(e,"possibleShapes",8),o=M(e,"updateShapeCb",8,void 0);const a=new Map([[W.CIRCLE,tD],[W.ELLIPSE,aD],[W.SQUARE,J2],[W.RECTANGLE,Z2],[W.POLYGON,rD]]);he(),ds(t,{get name(){return n()},children:(c,u)=>{var f=cD();et(f,5,i,Ct,(p,g)=>{oD(p,{get title(){return _(g)},get value(){return _(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(h,m)=>{var E=ye(),I=se(E);{var b=O=>{var A=lD(),k=V(A);Yh(k,()=>a.get(_(g)),(G,F)=>{F(G,{})}),B(A),S(O,A)};ne(I,O=>{a.has(_(g))&&O(b)})}S(h,E)},$$slots:{default:!0}})}),B(f),S(c,f)},$$slots:{default:!0}}),ue()}var dD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function _D(t){var e=dD();S(t,e)}var fD=de('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),gD=de("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function hD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Qt,"$toolStore",n),i=()=>Ee(zt,"$currentConstraintStore",n),o=N(),a=N(),c=N();let u=N(!0),f=M(e,"elementHandlers",8);function p(b,O){const A=(b==null?void 0:b.shape)??(O?Lu(O):void 0);return uu(A),A}function g(b,O){_(c)&&(YO(c,_(c)[b]=O),uu(_(c)))}function h(){_(a)&&(y(c,Lu(_(a))),uu(_(c)))}function m(b){return b&&[W.CIRCLE,W.SQUARE,W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[W.ELLIPSE,W.RECTANGLE].includes(b)}D(()=>(r(),Z(f())),()=>{y(o,Ti(r(),f()))}),D(()=>_(o),()=>{y(a,_(o).shape)}),D(()=>(i(),_(a)),()=>{var b;y(c,p(((b=i())==null?void 0:b.constraint)??null,_(a)))}),we(),he(),wl(t,{get isOpen(){return _(u)},set isOpen(b){y(u,b)},$$slots:{"panel-header":(b,O)=>{Ol(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return _(u)},set isOpen(A){y(u,A)},$$slots:{"title-icon":(A,k)=>{_D(A)}},$$legacy:!0})},"panel-content":(b,O)=>{var A=ye(),k=se(A);{var G=F=>{var z=gD(),P=se(z);{var j=$e=>{var Le=fD();Ge("click",Le,h),S($e,Le)};ne(P,$e=>{Ew(_(a))&&$e(j)})}var J=U(P,2);{var ae=$e=>{uD($e,{get possibleShapes(){return _(a).allowedTypes},name:"Shape",get selectedShape(){return _(c).type},updateShapeCb:Le=>g("type",Le)})};ne(J,$e=>{var Le;_(a).allowedTypes&&_(a).allowedTypes.length&&((Le=_(c))!=null&&Le.type)&&$e(ae)})}var Q=U(J,2);{var re=$e=>{var Le=Qe(()=>_(a).n.lb??3),Me=Qe(()=>_(a).n.ub??10);Jr($e,{name:"Number of Sides",get value(){return _(c).n},get min(){return _(Le)},get max(){return _(Me)},step:1,onChangeCb:Ue=>g("n",Ue)})};ne(Q,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.n)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.n)!=null&&Ue.editable)&&E(_(c).type)&&$e(re)})}var ge=U(Q,2);{var oe=$e=>{var Le=Qe(()=>_(a).r.lb??0),Me=Qe(()=>_(a).r.ub??1),Ue=Qe(()=>_(a).r.step??.05);Jr($e,{name:"Radius",get value(){return _(c).r},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Rt=>g("r",Rt)})};ne(ge,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.r)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.r)!=null&&Ue.editable)&&m(_(c).type)&&$e(oe)})}var pe=U(ge,2);{var Ne=$e=>{var Le=Qe(()=>_(a).width.lb??0),Me=Qe(()=>_(a).width.ub??1),Ue=Qe(()=>_(a).width.step??.05);Jr($e,{name:"Width",get value(){return _(c).width},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Rt=>g("width",Rt)})};ne(pe,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.width)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.width)!=null&&Ue.editable)&&I(_(c).type)&&$e(Ne)})}var xe=U(pe,2);{var Oe=$e=>{var Le=Qe(()=>_(a).height.lb??0),Me=Qe(()=>_(a).height.ub??1),Ue=Qe(()=>_(a).height.step??.05);Jr($e,{name:"Height",get value(){return _(c).height},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Rt=>g("height",Rt)})};ne(xe,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.height)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.height)!=null&&Ue.editable)&&I(_(c).type)&&$e(Oe)})}var Ie=U(xe,2);{var je=$e=>{var Le=Qe(()=>_(a).angle.lb??0),Me=Qe(()=>_(a).angle.ub??360),Ue=Qe(()=>_(a).angle.step??15);Jr($e,{name:"Angle",get value(){return _(c).angle},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Rt=>g("angle",Rt)})};ne(Ie,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.angle)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.angle)!=null&&Ue.editable)&&$e(je)})}var qe=U(Ie,2);{var It=$e=>{var Le=Qe(()=>_(a).inset.lb??0),Me=Qe(()=>_(a).inset.ub??.5),Ue=Qe(()=>_(a).inset.step??.01);Jr($e,{name:"Inset",get value(){return _(c).inset},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Rt=>g("inset",Rt)})};ne(qe,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.inset)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.inset)!=null&&Ue.editable)&&$e(It)})}var xt=U(qe,2);{var jt=$e=>{ds($e,{name:"Stroke",children:(Le,Me)=>{du(Le,{get value(){return _(c).stroke},onChangeCb:Ue=>g("stroke",Ue)})},$$slots:{default:!0}})};ne(xt,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.stroke)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.stroke)!=null&&Ue.editable)&&$e(jt)})}var kt=U(xt,2);{var Ut=$e=>{var Le=Qe(()=>_(a).strokeWidth.lb??0),Me=Qe(()=>_(a).strokeWidth.ub??.8),Ue=Qe(()=>_(a).strokeWidth.step??.01);Jr($e,{name:"Stroke Width",get value(){return _(c).strokeWidth},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Rt=>g("strokeWidth",Rt)})};ne(kt,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.strokeWidth)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.strokeWidth)!=null&&Ue.editable)&&$e(Ut)})}var nn=U(kt,2);{var _r=$e=>{var Le=Qe(()=>_(a).strokeDasharray.lb??0),Me=Qe(()=>_(a).strokeDasharray.ub??1),Ue=Qe(()=>_(a).strokeDasharray.step??.01);Jr($e,{name:"Stroke Dasharray",get value(){return _(c).strokeDasharray},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Rt=>g("strokeDasharray",Rt)})};ne(nn,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.strokeDasharray)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.strokeDasharray)!=null&&Ue.editable)&&$e(_r)})}var Bn=U(nn,2);{var Bi=$e=>{ds($e,{name:"Fill",children:(Le,Me)=>{du(Le,{get value(){return _(c).fill},onChangeCb:Ue=>g("fill",Ue)})},$$slots:{default:!0}})};ne(Bn,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.fill)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.fill)!=null&&Ue.editable)&&$e(Bi)})}var Ir=U(Bn,2);{var br=$e=>{ds($e,{name:"Font Color",children:(Le,Me)=>{du(Le,{get value(){return _(c).fontColor},onChangeCb:Ue=>g("fontColor",Ue)})},$$slots:{default:!0}})};ne(Ir,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.fontColor)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.fontColor)!=null&&Ue.editable)&&$e(br)})}S(F,z)};ne(k,F=>{_(a)&&F(G)})}S(b,A)}},$$legacy:!0}),ue()}var vD=de('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function ks(t,e){let n=M(e,"clickCb",8),r=M(e,"title",8);var i=vD(),o=V(i),a=V(o);ht(a,e,"default",{}),B(o),B(i),te(()=>L(i,"title",r())),Ge("click",i,er(function(...c){var u;(u=n())==null||u.apply(this,c)})),S(t,i)}var pD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function mD(t){var e=pD();S(t,e)}var ED=de('<div class="buttons-container svelte-kc00rw"><!></div>');function yl(t,e){var n=ED(),r=V(n);ht(r,e,"default",{}),B(n),S(t,n)}var CD=de('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),ID=de('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),bD=de('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function OD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee($r,"$puzzleMetaStore",n),i=()=>Ee(Fr,"$globalConstraintsStore",n),o=()=>Ee(gt,"$localConstraintsStore",n);let a=M(e,"showModal",12,!1),c=N(""),u=N(""),f=N(""),p=N(""),g=N("");function h(){a(!1)}function m(){const O=_(u)?E(_(u)):["Anonymous"],k={title:_(c)?_(c):"Sudoku",authors:O,ruleset:_(f),ctcYoutubeUrl:_(p),ctcUrl:_(g)};YT(k),a(!1)}function E(O){return O.split(/\s*[;]\s*/)}function I(){var z,P,j,J;let O="";const A=Pt,k=i();!!k.get(d.SUDOKU_RULES_DO_NOT_APPLY)?O+=`Sudoku rules do not apply.

`:O+=`Sudoku rules apply.

`;for(const[ae,Q]of k.entries())if(ae!==d.SUDOKU_RULES_DO_NOT_APPLY&&Q){const re=A[ae],ge=((z=re.menu)==null?void 0:z.name)??re.toolId,oe=(P=re.meta)==null?void 0:P.description;O+=`**${ge}**: ${oe}

`}const F=o();for(const[ae,Q]of F.entries())if(Object.keys(Q).length>0){const ge=A[ae],oe=((j=ge.menu)==null?void 0:j.name)??ge.toolId,pe=(J=ge.meta)==null?void 0:J.description;O+=`**${oe}**: ${pe}

`}return O.trim()}function b(){const O=I();y(f,O)}D(()=>(Z(a()),r(),ja),()=>{if(!a()){const O=r().authors;y(c,r().title??""),y(u,O?ja(O,"; ","; "):""),y(f,r().ruleset??""),y(p,r().ctcYoutubeUrl??""),y(g,r().ctcUrl??"")}}),we(),he(),Pr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(O){a(O)},children:(O,A)=>{var k=bD(),G=V(k);ti(G,{title:"Title"});var F=U(G,2);an(F);var z=U(F,2);ti(z,{title:"Authors"});var P=U(z,2);an(P);var j=U(P,2);ti(j,{title:"Ruleset",children:(pe,Ne)=>{var xe=CD();Ge("click",xe,b),S(pe,xe)},$$slots:{default:!0}});var J=U(j,2);RO(J),L(J,"rows",8);var ae=U(J,2);ti(ae,{title:"CTC Link"});var Q=U(ae,2);an(Q);var re=U(Q,2);ti(re,{title:"CTC Youtube Link"});var ge=U(re,2);an(ge);var oe=U(ge,2);yl(oe,{children:(pe,Ne)=>{var xe=ID(),Oe=se(xe),Ie=U(Oe,2);Ge("click",Oe,m),Ge("click",Ie,h),S(pe,xe)},$$slots:{default:!0}}),B(k),Zn(F,()=>_(c),pe=>y(c,pe)),Zn(P,()=>_(u),pe=>y(u,pe)),Zn(J,()=>_(f),pe=>y(f,pe)),Zn(Q,()=>_(g),pe=>y(g,pe)),Zn(ge,()=>_(p),pe=>y(p,pe)),S(O,k)},$$slots:{default:!0},$$legacy:!0}),ue()}var wD=de("<!> <!>",1);function yD(t){let e=N(!1);function n(){y(e,!0)}var r=wD(),i=se(r);ks(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{mD(a)},$$slots:{default:!0}});var o=U(i,2);OD(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var LD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function AD(t){var e=LD();S(t,e)}var SD=de('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function ND(t,e){ce(e,!1);let n=N(null),r=N(null);function i(){var o;(o=_(n))==null||o.click()}D(()=>(_(r),qa),()=>{if(_(r)&&_(r).length){const o=_(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const f=JSON.parse(u),p=NT(f);console.log(p),ZT(p),qa()}},a.onerror=function(){alert(a.error)}}}),we(),he(),ks(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=SD(),u=se(c);AD(u);var f=U(u,2);xi(f,p=>y(n,p),()=>_(n)),aw(f,()=>_(r),p=>y(r,p)),S(o,c)},$$slots:{default:!0}}),ue()}var xD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function RD(t){var e=xD();S(t,e)}var TD=de('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function mh(t,e){ce(e,!1);let n=M(e,"name",8),r=M(e,"min",8),i=M(e,"max",8),o=M(e,"value",12),a=M(e,"step",24,()=>(i()-r())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);he();var f=TD(),p=V(f),g=V(p);B(p);var h=U(p,2);an(h),B(f),te(()=>{at(g,`${n()??""}: ${o()??""}`),L(h,"min",r()),L(h,"max",i()),L(h,"step",a())}),Zn(h,o),Ge("change",h,()=>{c()&&c()(o())}),Ge("input",h,()=>{u()&&u()(o())}),S(t,f),ue()}var DD=de('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),kD=de('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function GD(t,e){ce(e,!1);let n=M(e,"showModal",12,!1);const r=4,i=20;let o=N(9),a=N(9),c=N(""),u=N(At.range(1,10));function f(){n(!1)}function p(){qa(),qT(_(a),_(o),_(u).sort()),n(!1)}function g(E){return E.map(b=>String(b)).join(",")}function h(){const E=Math.min(Math.max(_(a),_(o)),9);y(u,At.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&y(u,E.replaceAll(" ","").split(",").map(Number))}he(),Pr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=kD(),O=V(b);mh(O,{name:"Width",min:r,max:i,step:1,onInputCb:h,get value(){return _(o)},set value(P){y(o,P)},$$legacy:!0});var A=U(O,2);mh(A,{name:"Height",min:r,max:i,step:1,onInputCb:h,get value(){return _(a)},set value(P){y(a,P)},$$legacy:!0});var k=U(A,2),G=Qe(()=>`Allowed Digits (for the solver): ${g(_(u))}`);ti(k,{get title(){return _(G)}});var F=U(k,2);an(F),te(()=>L(F,"placeholder",g(_(u))));var z=U(F,2);yl(z,{children:(P,j)=>{var J=DD(),ae=se(J),Q=U(ae,2);Ge("click",ae,p),Ge("click",Q,f),S(P,J)},$$slots:{default:!0}}),B(b),Zn(F,()=>_(c),P=>y(c,P)),Ge("input",F,()=>m(_(c))),S(E,b)},$$slots:{default:!0},$$legacy:!0}),ue()}var MD=de("<!> <!>",1);function UD(t){let e=N(!1);function n(){y(e,!0)}var r=MD(),i=se(r);ks(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{RD(a)},$$slots:{default:!0}});var o=U(i,2);GD(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var $D=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function FD(t){var e=$D();S(t,e)}var PD=de('<button class="modal-button">Cancel</button>'),HD=de('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function BD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(_o,"$svgRefStore",n),i=()=>Ee($r,"$puzzleMetaStore",n),o=()=>Ee(Ts,"$puzzleStore",n),a=N();let c=M(e,"showModal",12,!1);function u(b){const O=getComputedStyle(b);let A="";for(let k of O){const G=O.getPropertyValue(k);G&&(A+=`${k}:${G};`)}return A}function f(b){const O=b.cloneNode(!0);(O instanceof SVGElement||O instanceof HTMLElement)&&(O.style.cssText=u(b));const A=b.childNodes;for(let k=0;k<A.length;k++){const G=A[k];if(G instanceof Element){const F=f(G);O.replaceChild(F,O.childNodes[k])}}return O}function p(b){if(!b)return;const O=f(b),A=Ka(i()),G=new XMLSerializer().serializeToString(O),F=new Image,z=new Blob([G],{type:"image/svg+xml;charset=utf-8"}),P=URL.createObjectURL(z);F.onload=()=>{const j=b.getBoundingClientRect(),J=j.width,ae=j.height,Q=document.createElement("canvas"),re=window.devicePixelRatio||1;Q.width=J*re,Q.height=ae*re;const ge=Q.getContext("2d");ge&&(ge.scale(re,re),ge.drawImage(F,0,0,J,ae),Q.toBlob(oe=>{if(!oe)return;const pe=URL.createObjectURL(oe),Ne=document.createElement("a");Ne.href=pe,Ne.download=A,Ne.click(),URL.revokeObjectURL(pe)}))},F.src=P}function g(b,O="download.svg"){if(!b)return;const A=f(b);let G=new XMLSerializer().serializeToString(A);G.includes("<?xml")||(G=`<?xml version="1.0" standalone="no"?>\r
`+G);const F=new Blob([G],{type:"image/svg+xml"}),z=URL.createObjectURL(F),P=document.createElement("a");P.href=z,P.download=O,P.click(),URL.revokeObjectURL(z)}const h=b=>{const O=ST(o());return JSON.stringify(O,null,b)},m=()=>{function b(k,G,F){var z=document.createElement("a"),P=new Blob([k],{type:F});z.href=URL.createObjectURL(P),z.download=G,z.click(),URL.revokeObjectURL(z.href)}const O=h(2),A=Ka(i());b(O,`${A}.json`,"text/plain")};function E(){c(!1)}const I=1;D(()=>r(),()=>{y(a,r())}),we(),he(),Pr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,O)=>{var A=HD(),k=V(A),G=V(k),F=V(G),z=U(F,2),P=U(z,2);B(G);var j=U(G,2),J=U(V(j),2),ae=V(J);L(ae,"width",400*I),L(ae,"height",300*I),B(J),B(j),B(k);var Q=U(k,2);yl(Q,{children:(re,ge)=>{var oe=PD();Ge("click",oe,E),S(re,oe)},$$slots:{default:!0}}),B(A),Ge("click",F,m),Ge("click",z,()=>p(_(a))),Ge("click",P,()=>g(_(a))),S(b,A)},$$slots:{default:!0},$$legacy:!0}),ue()}var WD=de("<!> <!>",1);function zD(t){let e=N(!1);function n(){y(e,!0)}var r=WD(),i=se(r);ks(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{FD(a)},$$slots:{default:!0}});var o=U(i,2);BD(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var YD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function np(t){var e=YD();S(t,e)}var jD=de('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),KD=de('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function ka(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0);var i=KD(),o=V(i);ti(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=U(o,2);bl(a,{get isOpen(){return r()},children:(c,u)=>{var f=jD(),p=V(f);ht(p,e,"default",{}),B(f),S(c,f)},$$slots:{default:!0}}),B(i),S(t,i)}var VD=de('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function XD(t,e){let n=M(e,"value",8),r=M(e,"onClickCb",8),i=M(e,"disabled",8,!1);var o=VD(),a=V(o);an(a),Ni(2),B(o),te(()=>{yt(o,"disabled",i()),Wh(a,n()),a.disabled=i()}),Ge("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),S(t,o)}var qD=de('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function ei(t,e){ce(e,!1);let n=M(e,"value",8),r=M(e,"name",8),i=M(e,"updateCb",8,void 0),o=M(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}he();var c=qD(),u=V(c);XD(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var f=U(u,2),p=V(f,!0);B(f),B(c),te(()=>{yt(c,"disabled",o()),at(p,r())}),Ge("click",f,er(a)),S(t,c),ue()}var ZD=de("<!> <!>",1),QD=de("<!> <!> <!>",1),JD=de("<!> <!>",1),ek=de('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function rp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(si,"$settingsStore",n),i=()=>Ee(Cl,"$gameModeStore",n),o=N();let a=M(e,"showModal",12,!1);D(()=>r(),()=>{y(o,r())}),we(),he(),Pr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var f=ek(),p=V(f);ka(p,{title:"General",children:(I,b)=>{ei(I,{get value(){return _(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:jO})},$$slots:{default:!0}});var g=U(p,2);ka(g,{title:"Tools",children:(I,b)=>{var O=ZD(),A=se(O);ei(A,{get value(){return _(o).penToolActive},name:"Pen Tool",updateCb:KO});var k=U(A,2);ei(k,{disabled:!0,get value(){return _(o).letterToolActive},name:"Letter Tool",updateCb:VO}),S(I,O)},$$slots:{default:!0}});var h=U(g,2);ka(h,{title:"Gameplay",children:(I,b)=>{var O=QD(),A=se(O);ei(A,{name:"Check Conflicts",get value(){return _(o).checkConflicts},updateCb:XO});var k=U(A,2);ei(k,{name:"Highlight Pencilmark Conflicts",get value(){return _(o).highlightPencilmarkConflicts},updateCb:qO});var G=U(k,2);ei(G,{name:"Highlight Cells Seen By Selection",get value(){return _(o).highlightCellsSeenBySelection},updateCb:ZO}),S(I,O)},$$slots:{default:!0}});var m=U(h,2);{var E=I=>{ka(I,{title:"Setting Mode Display",children:(b,O)=>{var A=JD(),k=se(A);ei(k,{name:"Hide Fog",get value(){return _(o).hideFog},updateCb:QO});var G=U(k,2);ei(G,{name:"Show Solution",get value(){return _(o).showSolution},updateCb:JO}),S(b,A)},$$slots:{default:!0}})};ne(m,I=>{i()===vo.SETTING&&I(E)})}B(f),S(c,f)},$$slots:{default:!0},$$legacy:!0}),ue()}var tk=de("<!> <!>",1);function nk(t){let e=N(!1);function n(){y(e,!0)}var r=tk(),i=se(r);ks(i,{title:"Settings",clickCb:n,children:(a,c)=>{np(a)},$$slots:{default:!0}});var o=U(i,2);rp(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var rk=de('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function ik(t){var e=rk(),n=V(e);UD(n);var r=U(n,2);zD(r);var i=U(r,2);ND(i,{});var o=U(i,2);yD(o);var a=U(o,2);nk(a),B(e),S(t,e)}var ok=de('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function sk(t,e){ce(e,!1);let n=N(!1);function r(){const i=tt(mn),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const f=i.getCell(a,u);if(!f)continue;const p=f.value;c.push(p)}o.push(c)}$d(o)}he(),wl(t,{get isOpen(){return _(n)},set isOpen(i){y(n,i)},$$slots:{"panel-header":(i,o)=>{Ol(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return _(n)},set isOpen(a){y(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=ok();Ge("click",a,r),S(i,a)}},$$legacy:!0}),ue()}const ak={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function lk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function ck(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function uk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function dk(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function ip(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function _k(t,e){const n=ck(t);if(n)return{type:"number",parsed:parseInt(n)};const r=uk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=dk(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=lk(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=ip(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var K=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(K||{});function ft(t,e){return`${e}[${t.r},${t.c}]`}function $i(t,e){return t.map(r=>ft(r,e))}function be(t,e){return"["+$i(t,e).join(",")+"]"}function Ae(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function ut(t){return t.map(n=>Ae(n))}function Ai(t){return`constraint alldifferent([${t.join(",")}]);
`}function _t(t,e){return t&&(t=`
% ${e}
`+t),t}function Ll(t,e){const n=[Fe.N,Fe.S,Fe.W,Fe.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function Hd(t,e,n=void 0){n||(n=[Fe.N,Fe.S,Fe.W,Fe.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+ut(o).join(",")+"]";r.push(a)}return r}function Al(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class fk{constructor(e){Ce(this,"model_str","");Ce(this,"used_vars");Ce(this,"puzzle");Ce(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=ak){const i=_k(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],f=c.lower_bound[1];o+=`constraint ${n} ${f} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],f=c.upper_bound[1];o+=`constraint ${n} ${f} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const c=i.parsed,u="["+c.join(",")+"]";for(const f of c){const p=parseInt(f);Number.isNaN(p)&&!this.hasVariable(f)&&(o+=`var int: ${f};
`,this.addVariable(f))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function gk(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,f=0,p=0;for(let O=0;O<e.length;O++){const A=e[O].trim(),k=A.match(r),G=A.match(i),F=A.match(o),z=A.match(a);if(!c&&(k||G||F||z)){c={name:(k||G||F||z)[1],startLine:O,content:[e[O]],type:k?"function":G?"predicate":F?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,f=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,p=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[O]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,f+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,p+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&f===0&&p===0&&A.endsWith(";"))){n[c.name]={...c,endLine:O};let P=c.startLine;for(;P>0&&e[P-1].trim().startsWith("%");)P-=1;n[c.name].startLine=P,c=null}}function g(O){const A=[],k=O.match(r),G=O.match(i),F=O.match(o);for(const z of Object.keys(n)){const P=n[z].type;if(P==="function"||P==="test"||P==="predicate"){if(k||G||F)continue;new RegExp(`\\b${z}\\s*\\(`,"g").test(O)&&A.push(z)}else if(P==="variable"){const j=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${z}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(O.match(j))continue;new RegExp(`\\b${z}\\b`,"g").test(O)&&A.push(z)}}return A}const h=new Set;for(const O of e)g(O).forEach(k=>h.add(k));console.log("usedDefinitions",h);const m=Object.values(n).filter(O=>!h.has(O.name)).map(O=>({start:O.startLine,end:O.endLine}));m.sort((O,A)=>A.start-O.start);const E=[...e];for(const O of m)E.splice(O.start,O.end-O.start+1);const I=[];let b=!1;for(const O of E)O.trim()===""?b||(I.push(O),b=!0):(I.push(O),b=!1);return I.join(`
`)}function Eh(t){let e=t,n=e.length;for(;e=gk(e),e.length!=n;)n=e.length;return e}function op(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function hk(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let f=0;f<e.nCols;f++){const p=e.getCell(c,f);!p||p.region===null?u.push(r-1):u.push(p.region)}o.push(u)}const a=op(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Bd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Yt(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function vk(t,e){const r=t.grid.getPositiveDiagonal(),i=ut(r);let o=Ai(i);return o=`
% Positive Diagonal Constraint
`+o,o}function pk(t,e){const r=t.grid.getNegativeDiagonal(),i=ut(r);let o=Ai(i);return o=`
% Negative Diagonal Constraint
`+o,o}function mk(t,e){const r=t.grid.getPositiveDiagonal(),o="["+ut(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function Ek(t,e){const r=t.grid.getNegativeDiagonal(),o="["+ut(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function Ck(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,f),h=n.getCell(u,f+(u-p));if(!g||!h)continue;const m=Ae(g),E=Ae(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=b}}return o}function Ik(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,f),h=n.getCell(u,f-(u-p));if(!g||!h)continue;const m=Ae(g),E=Ae(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=b}}return o}function bk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),f=`constraint alldifferent(${`[${ut(a).join(",")}]`});
`;r+=f}return r}function Ok(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=Ae(i),f=`[${ut(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${f});
`;r+=p}return r}function wk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=Ae(i),f=`[${ut(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${f});
`;r+=p}return r}function yk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=_t(n,`${e}`),n}function Lk(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=_t(n,`${e}`),n}function Ak(t,e){let n="";return n+=`constraint tango_p(board);
`,n=_t(n,`${e}`),n}function Sk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=_t(n,`${e}`),n}function*Hr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function Nk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Hr(n)){const a=Ae(i),c=Ae(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function xk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Hr(n)){const a=Ae(i),c=Ae(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function Rk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${ut(o).join(",")}]`,u=i.c+1,f=`constraint indexing_column_p(${c}, ${u});
`;r+=f}return r}function Tk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function Dk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function kk(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=_t(n,`${e}`),n}function _u(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,f=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),p=c.value;(e===d.ALL_V_GIVEN&&(p==="v"||p==="V")||e===d.ALL_X_GIVEN&&(p==="x"||p==="X")||e===d.ALL_XV_GIVEN)&&o.push(f)}let a="";for(const[c,u]of Hr(n)){if(o.find(h=>h.has(c)&&h.has(u)))continue;const p=Ae(c),g=Ae(u);if(e===d.ALL_V_GIVEN){const h=`constraint ${p} + ${g} != 5;
`;a+=h}else if(e===d.ALL_X_GIVEN){const h=`constraint ${p} + ${g} != 10;
`;a+=h}else{const h=`constraint ${p} + ${g} != 5 /\\ (${p} + ${g} != 10);
`;a+=h}}return a=_t(a,`${e}`),a}function fo(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function Gk(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=fo(n,i);let a="";for(const[c,u]of Hr(n)){if(o.find(E=>E.has(c)&&E.has(u)))continue;const p=Ae(c),g=Ae(u);let h="";if(c.r==u.r){const I=n.getRow(c.r)[0];h=Ae(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];h=Ae(I)}if(!h)continue;const m=`constraint abs(${p} - ${g}) != ${h};
`;a+=m}return a=_t(a,`${e}`),a}function Mk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=fo(n,i);a=[...a,...fo(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"1"));const u=[...new Set(c)];let f="";for(const[p,g]of Hr(n)){if(a.find(I=>I.has(p)&&I.has(g)))continue;const m=Ae(p),E=Ae(g);for(const I of u){const b=parseInt(I),O=`constraint abs(${m} - ${E}) != ${b};
`;f+=O}}return f=_t(f,`${e}`),f}function Uk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=fo(n,i);a=[...a,...fo(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"2"));const u=[...new Set(c)];let f="";for(const[p,g]of Hr(n)){if(a.find(I=>I.has(p)&&I.has(g)))continue;const m=Ae(p),E=Ae(g);for(const I of u){const b=parseInt(I),O=`constraint not ratio_p(${m}, ${E}, ${b});
`;f+=O}}return f=_t(f,`${e}`),f}function $k(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=fo(n,i);let a="";for(const[c,u]of Hr(n)){if(o.find(I=>I.has(c)&&I.has(u)))continue;const p=Ae(c),g=Ae(u),h=ft(c,K.YIN_YANG),m=ft(u,K.YIN_YANG),E=`constraint not yin_yang_kropki_p(${p}, ${g}, ${h}, ${m});
`;a+=E}return a=_t(a,`${e}`),a}function Fk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,f){return u.find(p=>p.cell.r===f.r&&p.cell.c===f.c)}let c="";for(const u of n.getAllCells()){const f=a(o,u),p=f?f.directions:[],g=Ae(u),h=[Fe.E,Fe.N,Fe.S,Fe.W];for(const m of h){if(p.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),I=be(E,K.YIN_YANG);c+=`constraint count(${I}, 1) != ${g};
`}}return c=_t(c,`${e}`),c}function Wd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function Pk(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=Wd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=n.getRow(c.r),g=`[${ut(f).join(",")}]`,h=c.c+1,m=`constraint not indexing_column_p(${g}, ${h});
`;a+=m}return a=_t(a,`${e}`),a}function Hk(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=Wd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=Ae(c),[p,g,h,m]=Hd(n,c),E=`constraint not radar_p(${f}, ${p}, ${g}, ${h}, ${m}, 9);
`;a+=E}return a=_t(a,`${e}`),a}function Bk(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=Wd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=`nurimisaki[${c.r},${c.c}]`,h=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${f});
`;a+=h}return a=_t(a,`${e}`),a}function Wk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Hr(n)){const a=Ae(i),c=Ae(o),u=`nurimisaki[${i.r},${i.c}]`,f=`nurimisaki[${o.r},${o.c}]`,p=`constraint (${u} == 0 /\\ ${f} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=p}return r}function zk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(p=>n.getCell(p.r,p.c)).filter(p=>!!p),f=be(u,K.YIN_YANG);o+=`constraint count_unique_values(${f}) >= 2;
`}return o}function Yk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=K.YIN_YANG;for(const[o,a]of Hr(n)){const c=Ae(o),u=Ae(a),f=`${i}[${o.r},${o.c}]`,p=`${i}[${a.r},${a.c}]`,g=`constraint (${f} == 1 /\\ ${p} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function jk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=_t(n,`${e}`),n}function Kk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=_t(n,`${e}`),n}function Vk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function Xk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function qk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=_t(n,`${e}`),n}function Zk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=_t(n,`${e}`),n}function Qk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function Jk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function e3(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function t3(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=_t(n,`${e}`),n}function n3(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(f=>i.region!==null&&f.region===i.region),a=ft(i,K.BOARD),c=ft(i,K.YIN_YANG),u=be(o,K.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=_t(n,`${e}`),n}function r3(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function i3(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function o3(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function s3(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function a3(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=_t(n,`${e}`),n}function l3(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function c3(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=_t(n,`${e}`),n}function u3(t,e){let n="";const r=t.grid,i=t.grid.getUsedRegions();for(const o of i){const a=r.getRegion(o),c=[...new Set(a.map(f=>f.r))],u=[...new Set(a.map(f=>f.c))];for(const f of u){const p=a.filter(h=>h.c===f),g=be(p,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}for(const f of c){const p=a.filter(h=>h.r===f),g=be(p,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}}return n=_t(n,`${e}`),n}function d3(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),f=ut(u),p=Ai(f);r+=p}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),f=ut(u),p=Ai(f);r+=p}if(!e.get(d.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const f=n.getRegion(u),p=ut(f),g=Ai(p);r+=g}}return r}function _3(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const f3=new Map([[d.POSITIVE_DIAGONAL,vk],[d.NEGATIVE_DIAGONAL,pk],[d.POSITIVE_ANTIDIAGONAL,mk],[d.NEGATIVE_ANTIDIAGONAL,Ek],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,Ck],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,Ik],[d.ANTIKING,Ok],[d.ANTIKNIGHT,wk],[d.ANTI_LONG_KNIGHT,Lk],[d.ANTI_GIRAFFE,yk],[d.DISJOINT_GROUPS,bk],[d.TANGO,Ak],[d.NONCONSECUTIVE,Nk],[d.NONRATIO,xk],[d.ANTI_ENTROPY,Sk],[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,u3],[d.GLOBAL_INDEXING_COLUMN,Rk],[d.ALL_V_GIVEN,_u],[d.ALL_X_GIVEN,_u],[d.ALL_XV_GIVEN,_u],[d.ALL_DIFFERENCES_GIVEN,Mk],[d.ALL_RATIOS_GIVEN,Uk],[d.ALL_XY_DIFFERENCES_GIVEN,Gk],[d.ALL_YIN_YANG_KROPKI_GIVEN,$k],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,Fk],[d.ALL_INDEXING_COLUMN_GIVEN,Pk],[d.ALL_RADARS_GIVEN,Hk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Bk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Wk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,zk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,kk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,Tk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,Dk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,jk],[d.CAVE_CELLS_ARE_ODD,Vk],[d.CAVE_WALLS_ARE_EVEN,Xk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,qk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Zk],[d.YIN_YANG_FILLOMINO_PARITY,Kk],[d.TWO_SYMMETRIC_GALAXIES,e3],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,Qk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Jk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,t3],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,n3],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,Yk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,r3],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,c3],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,i3],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,o3],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,s3],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,a3],[d.DIRECTED_PATH_IS_PARITY_LINE,l3]]);function g3(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=f3.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function zd(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return ut(r)}function Yd(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${ut(n.slice(1)).join(",")}]`}function sp(t,e,n,r){let i="";const a="["+zd(e,r).join(",")+"]";for(const c of r.lines){const u=Yd(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function h3(t,e,n,r){let i="";const o=zd(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const p=`constraint average_arrow_p(${Yd(e,u)}, ${a});
`;i+=p}}return i}function v3(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=be(o,K.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f));for(const u of c){if(u.length<=1)continue;const f=be(u.slice(1),K.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${f});
`}return i+=sp(t,e,n,r),i}function p3(t,e,n,r){let i="";const a="["+zd(e,r).join(",")+"]",c=r.lines;for(const u of c){const f=Yd(e,u),p=`constraint bulbous_arrow_p(${a}, ${f});
`;i+=p}return i}const m3=new Map([[d.ARROW,sp],[d.AVERAGE_ARROW,h3],[d.BULBOUS_ARROW,p3],[d.CHAOS_CONSTRUCTION_ARROW,v3]]);function E3(t,e,n,r){let i="";const o=m3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function ii(t,e){const n=Yt(t,e.cells);return ut(n)}function ap(t,e,n){const i=`[${ii(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Sl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function jd(t,e,n,r,i){const a=`[${ii(e,r).join(",")}]`,c=r.value,u=Sl(t,c,n);if(!u)return"";const f=u[1];let p=u[0];return p+=`constraint ${i}(${a}, ${f});
`,p}function C3(t,e,n,r){const i=ii(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ai(i);const c=Sl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint killer_cage(${o}, ${u});
`,f}function I3(t,e,n,r){const i=ii(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ai(i);const c=Sl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint inverted_killer_cage_p(${o}, ${u});
`,f}function b3(t,e,n,r){return jd(t,e,n,r,"sum_cage_p")}function O3(t,e,n,r){return ap(e,r,"parity_balance_cage_p")}function w3(t,e,n,r){return ap(e,r,"sum_cage_look_and_say_p")}function y3(t,e,n,r){return jd(t,e,n,r,"divisible_killer_cage_p")}function L3(t,e,n,r){return jd(t,e,n,r,"spotlight_cage_p")}function A3(t,e,n,r){const o=`[${ii(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function S3(t,e,n,r){const o=`[${ii(e,r).join(",")}]`,a=r.value;let c="";const u=Sl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const f=r.cells,p=Yt(e,f),g=[];for(const m of p)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!p.includes(I)&&!g.includes(I)&&g.push(I)});const h=be(g,K.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${h});
`,c}function lp(t,e,n,r,i){const o=Yt(e,r.cells),a=be(o,K.BOARD),c=be(o,K.YIN_YANG),u=r.value;if(u){const f=parseInt(u);return`constraint ${i}(${a}, ${c}, ${f});
`}return""}function N3(t,e,n,r){return lp(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function x3(t,e,n,r){return lp(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function R3(t,e,n,r){const i=Yt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function T3(t,e,n,r){const i=Yt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function D3(t,e){let n="";const r=Bd(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(f=>[c,f]))){const u=`[${ii(t,o).join(",")}]`,p=`[${ii(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${p});
`}return n}const k3=new Map([[d.KILLER_CAGE,C3],[d.INVERTED_KILLER_CAGE,I3],[d.SUM_CAGE,b3],[d.PARITY_BALANCE_CAGE,O3],[d.SUM_CAGE_LOOK_AND_SAY,w3],[d.DIVISIBLE_KILLER_CAGE,y3],[d.SPOTLIGHT_CAGE,L3],[d.UNIQUE_DIGITS_CAGE,A3],[d.VAULTED_CAGE,S3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,N3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,x3],[d.DOUBLERS_KILLER_CAGE,R3],[d.NEGATORS_KILLER_CAGE,T3]]);function G3(t,e,n,r){let i="";const o=k3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=D3(e,a);i+=c}return i}function M3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),f=Math.floor(r+c);return t.getCell(u,f)}function U3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=M3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function $3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],f=u.cell,p=c+1,[g,h,m]=U3(e,f),E=be(g,K.GALAXY_REGIONS),I=be(h,K.GALAXY_REGIONS),b=be(m,K.GALAXY_REGIONS);r+=`% galaxy ${p}
`,r+=`constraint galaxy_center_p(${E}, ${I}, ${b}, ${p});
`,r+=`constraint connected_region(${K.GALAXY_REGIONS}, ${p});
`;const O=u.value;if(!O)continue;const A=parseInt(O);r+=`constraint galaxy_sum_p(${K.BOARD}, ${K.GALAXY_REGIONS}, ${A}, ${p});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${K.GALAXY_REGIONS}, ${a});
`,r}function F3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function P3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=F3(t,c,n);if(!u)return"";const f=u[1];let p=u[0],g=[];if(o%1===0&&a%1===0?g=Wa(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(g=za(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!g.length)return"";const h=be(g,K.BOARD),m=be(g,K.YIN_YANG);return p+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${f};
`,p}const H3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,P3]]),B3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,$3]]);function W3(t,e,n,r){let i="";const o=B3.get(n),a=H3.get(n);if(a)for(const[c,u]of Object.entries(r)){const f=a(t,e,c,u);i+=f}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function Ch(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return ut(n)}function z3(t,e){const r="["+Ch(t,e.cells).join(",")+"]",o="["+Ch(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const Y3=new Map([[d.CLONE_REGION,z3]]);function j3(t,e,n,r){return Al(e,n,r,Y3)}function Kd(t,e){const n=Yt(t,e.cells);return ut(n)}function Vd(t,e,n){const i=`[${Kd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function cp(t,e,n,r=""){const o=`[${Kd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function K3(t,e,n,r){const o=`[${Kd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=ip(a);if(!c)return"";let u="";for(const p of c){const g=parseInt(p);Number.isNaN(g)&&!t.hasVariable(p)&&(u+=`var int: ${p};
`,t.addVariable(p))}const f="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${f});
`,u}function V3(t,e,n,r){return cp(e,r,"corner_sum_p")}function X3(t,e,n,r){return cp(e,r,"corner_even_count_p")}function q3(t,e,n,r){return Vd(e,r,"corner_sum_of_three_equals_the_other_p")}function Z3(t,e,n,r){return Vd(e,r,"equal_diagonal_differences_p")}function Q3(t,e,n,r){return Vd(e,r,"product_square_p")}const J3=new Map([[d.QUADRUPLE,K3],[d.CORNER_SUM,V3],[d.CORNER_EVEN_COUNT,X3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,q3],[d.PRODUCT_SQUARE,Q3],[d.EQUAL_DIAGONAL_DIFFERENCES,Z3]]);function e5(t,e,n,r){let i="";const o=J3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Nl(t,e){const n=Yt(t,e.cells);return ut(n)}function t5(t,e,n){const r=Nl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function n5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function xl(t,e,n,r,i,o=""){var m;const a=Nl(e,r),[c,u]=a,f=(m=r.value)!=null&&m.length?r.value:o,p=n5(t,f,n);if(!p)return"";const g=p[1];let h=p[0];return h+=`constraint ${i}(${c}, ${u}, ${g});
`,h}function r5(t,e,n,r){const i=Nl(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function i5(t,e,n,r){return xl(t,e,n,r,"ratio_p","2")}function o5(t,e,n,r){return xl(t,e,n,r,"abs_difference","1")}function Ih(t,e,n,r){const i=Nl(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function s5(t,e,n,r){return xl(t,e,n,r,"edge_sum_p")}function a5(t,e,n,r){return xl(t,e,n,r,"edge_modulo_p")}function l5(t,e,n,r){return t5(e,r,"edge_factor_p")}function c5(t,e,n,r){const i=Yt(e,r.cells),[o,a]=ut(i),[c,u]=i;let f="";if(c.r==u.r){const h=e.getRow(c.r)[0];f=Ae(h)}else if(c.c==u.c){const h=e.getCol(c.c)[0];f=Ae(h)}return f?`constraint abs(${o} - ${a}) == ${f};
`:""}function u5(t,e,n,r){const i=Yt(e,r.cells),[o,a]=ut(i),c=$i(i,K.YIN_YANG),[u,f]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${f});
`}function d5(t,e,n,r){const i=Yt(e,r.cells),[o,a]=ut(i),c=$i(i,K.YIN_YANG),[u,f]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${f});
`}function Rl(t,e,n){const r=Yt(t,e.cells),i=$i(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function _5(t,e,n,r){return Rl(e,r,K.UNKNOWN_REGIONS)}function f5(t,e,n,r){return Rl(e,r,K.FILLOMINO_REGIONS)}function g5(t,e,n,r){return Rl(e,r,K.SUGURU_REGIONS)}function h5(t,e,n,r){return Rl(e,r,K.CAVE_SHADING)}const v5=new Map([[d.XV,r5],[d.DIFFERENCE,o5],[d.RATIO,i5],[d.EDGE_INEQUALITY,Ih],[d.ONE_WAY_DOOR,Ih],[d.EDGE_SUM,s5],[d.EDGE_MODULO,a5],[d.EDGE_FACTOR,l5],[d.XY_DIFFERENCES,c5],[d.YIN_YANG_KROPKI,u5],[d.YIN_YANG_WHITE_KROPKI,d5],[d.FILLOMINO_REGION_BORDER,f5],[d.UNKNOWN_REGION_BORDER,_5],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,g5],[d.EDGE_CAVE_ONE_OF_EACH,h5]]);function p5(t,e,n,r){let i="";const o=v5.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function m5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Gs(t,e,n=!1){let r=Yt(t,e.cells);return n&&(r=[...new Set(r)]),ut(r)}function vt(t,e,n,r=!1){const o=`[${Gs(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function dr(t,e,n,r,i,o=""){var h;const c=`[${Gs(e,r).join(",")}]`,u=(h=r.value)!=null&&h.length?r.value:o,f=m5(t,u,n);if(!f)return"";const p=f[1];let g=f[0];return g+=`constraint ${i}(${c}, ${p});
`,g}function Xd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${ut(i).join(",")}]`,u=e.value;if(!u)return"";const f=parseInt(u);return`constraint ${n}(${c}, ${f}, ${o});
`}function E5(t,e,n,r){return vt(e,r,"renban",!0)}function C5(t,e,n,r){return vt(e,r,"double_renban_p",!0)}function I5(t,e,n,r){return vt(e,r,"renrenbanban_p",!0)}function b5(t,e,n,r){return vt(e,r,"knabner_p",!0)}function O5(t,e,n,r){return vt(e,r,"renban_or_nabner_line_p",!0)}function w5(t,e,n,r){return vt(e,r,"out_of_order_consecutive_line_p")}function y5(t,e,n,r){return dr(t,e,n,r,"whispers","5")}function L5(t,e,n,r){return`constraint whispers(${`[${Gs(e,r).join(",")}]`}, 4);
`}function A5(t,e,n,r){return vt(e,r,"strictly_increasing")}function S5(t,e,n,r){return vt(e,r,"fuzzy_thermo_p")}function N5(t,e,n,r){return vt(e,r,"increasing")}function x5(t,e,n,r){return dr(t,e,n,r,"custom_thermo_p")}function R5(t,e,n,r){return vt(e,r,"palindrome")}function T5(t,e,n,r){return dr(t,e,n,r,"sum_line_p")}function D5(t,e,n,r){return vt(e,r,"xv_line_p")}function k5(t,e,n,r){return dr(t,e,n,r,"at_least_x_line_p","10")}function G5(t,e,n,r){return dr(t,e,n,r,"product_line_p")}function M5(t,e,n,r){return dr(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function U5(t,e,n,r){return vt(e,r,"adjacent_multiples_line_p")}function $5(t,e,n,r){return vt(e,r,"index_line_p")}function F5(t,e,n,r){return vt(e,r,"zipper_line_p")}function P5(t,e,n,r){return Xd(e,r,"segmented_sum_line_p")}function H5(t,e,n,r){return vt(e,r,"segmented_sum_and_renban_line_p")}function B5(t,e,n,r){return Xd(e,r,"n_consecutive_renban_line_p")}function W5(t,e,n,r){return Xd(e,r,"n_consecutive_fuzzy_sum_line_p")}function z5(t,e,n,r){const i=Yt(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const f=i[u],p=e.getRow(f.r),g=be(p,K.BOARD),h=`cycle_${n}_${u}`;a.push(h);const m=f.c+1;o+=`var int: ${h} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function Y5(t,e,n,r){return vt(e,r,"adjacent_differences_count_line_p")}function j5(t,e,n,r){return vt(e,r,"same_parity_line_p")}function K5(t,e,n,r){return dr(t,e,n,r,"renban_or_whispers_p","5")}function V5(t,e,n,r){return vt(e,r,"alldifferent",!0)}function X5(t,e,n,r){return vt(e,r,"repeated_digits_line_p")}function q5(t,e,n,r){return vt(e,r,"superfuzzy_arrow_p")}function Z5(t,e,n,r){return vt(e,r,"ambiguous_arrow_p",!0)}function Q5(t,e,n,r){return vt(e,r,"headless_arrow_p")}function J5(t,e,n,r){return dr(t,e,n,r,"unimodular_line_p","3")}function eG(t,e,n,r){return dr(t,e,n,r,"modular_line_p","3")}function tG(t,e,n,r){return dr(t,e,n,r,"modular_or_unimodular_line_p","3")}function nG(t,e,n,r){return vt(e,r,"arithmetic_sequence_line_p")}function rG(t,e,n,r){return vt(e,r,"odd_even_oscillator_line_p")}function iG(t,e,n,r){return dr(t,e,n,r,"high_low_oscillator_line_p","5")}function oG(t,e,n,r){return vt(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function sG(t,e,n,r){return vt(e,r,"look_and_say_line_p",!0)}function aG(t,e,n,r){const i=Yt(e,r.cells);function o(g){const h=[];let m=null;for(const E of g)E.r!=m?(h.push([E]),m=E.r):h[h.length-1].push(E);return h}const a=o(i);if(a.length<2)return"";const c=a[0],f=`[${ut(c).join(",")}]`;let p="";for(let g=1;g<a.length;g++){const h=a[g],E=`[${ut(h).join(",")}]`;p+=`constraint sum(${E}) == sum(${f});
`}return p}function lG(t,e,n,r){return vt(e,r,"between_line_p")}function cG(t,e,n,r){return vt(e,r,"tightrope_line_p")}function uG(t,e,n,r){return vt(e,r,"double_arrow_p")}function dG(t,e,n,r){return vt(e,r,"split_peas_p")}function _G(t,e,n,r){return vt(e,r,"parity_count_line_p")}function fG(t,e,n,r){return vt(e,r,"product_of_ends_equals_sum_of_line_p")}function up(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function gG(t,e,n,r){let i="";const o=Yt(e,r.cells),a=up(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const p=`constraint sum(${be(u,K.BOARD)}) == ${c};
`;i+=p}return i}function hG(t,e,n,r){return`constraint entropic_line_p(${`[${Gs(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function vG(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Gs(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function pG(t,e,n,r){return vt(e,r,"peapods_p")}function mG(t,e,n,r){const i=Yt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function EG(t,e,n,r){const i=Yt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function qd(t,e,n){const r=Yt(t,e.cells),i=be(r,K.BOARD),o=be(r,K.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function CG(t,e,n,r){return qd(e,r,"yin_yang_unshaded_entropic_line_p")}function IG(t,e,n,r){return qd(e,r,"yin_yang_indexing_line_coloring_p")}function bG(t,e,n,r){return qd(e,r,"yin_yang_region_sum_line_p")}function OG(t,e,n,r){const i=Yt(e,r.cells),o=be(i,K.VALUES_GRID),a=be(i,K.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function Zd(t,e,n){const r=Yt(t,e.cells),i=be(r,K.VALUES_GRID);return`constraint ${n}(${i});
`}function wG(t,e,n,r){return Zd(e,r,"between_line_p")}function yG(t,e,n,r){return Zd(e,r,"double_arrow_p")}function LG(t,e,n,r){return Zd(e,r,"strictly_increasing")}function AG(t,e,n,r){const i=Yt(e,r.cells),o=up(i);if(o.sort((f,p)=>p.length-f.length),o.length<=1)return"";let a="";const c=o[0],u=be(c,K.VALUES_GRID);for(const f of o.slice(1)){const p=be(f,K.VALUES_GRID),g=`constraint subset_p(${u}, ${p});
`;a+=g}return a}const SG=new Map([[d.THERMOMETER,A5],[d.FUZZY_THERMOMETER,S5],[d.SLOW_THERMOMETER,N5],[d.CUSTOM_THERMOMETER,x5],[d.RENBAN_LINE,E5],[d.DOUBLE_RENBAN_LINE,C5],[d.RENRENBANBAN_LINE,I5],[d.NABNER_LINE,b5],[d.WHISPERS_LINE,y5],[d.DUTCH_WHISPERS,L5],[d.RENBAN_OR_WHISPERS_LINE,K5],[d.RENBAN_OR_NABNER_LINE,O5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,w5],[d.N_CONSECUTIVE_RENBAN_LINE,B5],[d.PALINDROME,R5],[d.SUM_LINE,T5],[d.PRODUCT_LINE,G5],[d.XV_LINE,D5],[d.AT_LEAST_X_LINE,k5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,M5],[d.SAME_PARITY_LINE,j5],[d.ADJACENT_MULTIPLES_LINE,U5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,Y5],[d.LOOK_AND_SAY_LINE,sG],[d.ROW_SUM_LINE,aG],[d.INDEX_LINE,$5],[d.ZIPPER_LINE,F5],[d.SEGMENTED_SUM_LINE,P5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,H5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,W5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,oG],[d.SUPERFUZZY_ARROW,q5],[d.AMBIGUOUS_ARROW,Z5],[d.HEADLESS_ARROW,Q5],[d.ARITHMETIC_SEQUENCE_LINE,nG],[d.ODD_EVEN_OSCILLATOR_LINE,rG],[d.HIGH_LOW_OSCILLATOR_LINE,iG],[d.UNIQUE_VALUES_LINE,V5],[d.REPEATED_DIGITS_LINE,X5],[d.UNIMODULAR_LINE,J5],[d.MODULAR_LINE,eG],[d.MODULAR_OR_UNIMODULAR_LINE,tG],[d.REGION_SUM_LINE,gG],[d.ENTROPIC_LINE,hG],[d.ENTROPIC_OR_MODULAR_LINE,vG],[d.ROW_CYCLE_THERMOMETER,z5],[d.PEAPODS,pG],[d.BETWEEN_LINE,lG],[d.TIGHTROPE_LINE,cG],[d.DOUBLE_ARROW_LINE,uG],[d.SPLIT_PEAS,dG],[d.PARITY_COUNT_LINE,_G],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,fG],[d.DOUBLERS_THERMOMETER,LG],[d.DOUBLERS_BETWEEN_LINE,wG],[d.DOUBLERS_DOUBLE_ARROW_LINE,yG],[d.INDEXER_CELLS_REGION_SUBSET_LINE,AG],[d.YIN_YANG_SHADED_WHISPERS_LINE,mG],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,CG],[d.YIN_YANG_UNSHADED_MODULAR_LINE,EG],[d.YIN_YANG_REGION_SUM_LINE,bG],[d.YIN_YANG_INDEXING_LINE_COLORING,IG],[d.GOLDILOCKS_ZONE_REGION_SUM,OG]]);function NG(t,e,n,r){let i="";const o=SG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Ms(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return ut(i)}function Fi(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function nr(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${Ms(e,n).join(",")}]`,u=n.value,f=Fi(t,u,i,o);if(!f)return"";const p=f[1];let g=f[0];return g+=`constraint ${r}(${c}, ${p});
`,g}function xG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Ms(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,p=Math.min(...f),g=Math.max(...f),h=Fi(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,E}function RG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Ms(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,p=Math.min(...f),g=Math.max(...f),h=Fi(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,E+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function TG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Ms(e,r),c=`[${a.join(",")}]`,u=a[0],f=r.value,p=Fi(t,f,i,o);if(!p)return"";const g=p[1];let h=p[0];return h+=`constraint x_index_p(${c}, ${u}, ${g});
`,h}function DG(t,e,n,r){return nr(t,e,r,"x_sum_p")}function kG(t,e,n,r){return nr(t,e,r,"shortsighted_x_sum_p")}function GG(t,e,n,r){return nr(t,e,r,"broken_x_sum_p")}function MG(t,e,n,r){return nr(t,e,r,"shifted_x_sum_p")}function UG(t,e,n,r){return nr(t,e,r,"skyscrapers_p")}function $G(t,e,n,r){return nr(t,e,r,"x_sum_skyscrapers_p")}function FG(t,e,n,r){return nr(t,e,r,"battlefield_p")}function PG(t,e,n,r){return nr(t,e,r,"rising_streak_p")}function HG(t,e,n,r){return nr(t,e,r,"outside_consecutive_sum_p")}function BG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=be(a,K.BOARD),u=be(a,K.CELL_CENTER_LOOP),f=r.value;if(f){const p=parseInt(f);return`constraint loopwhiches_p(${c}, ${u}, ${p});
`}return""}function WG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=be(c,K.BOARD),f=be(c,K.UNKNOWN_REGIONS),p=r.value,g=Fi(t,p,i,o);if(!g)return"";const h=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${f}, ${h});
`,m}function zG(t,e,n,r){return nr(t,e,r,"little_killer_sum_p")}function YG(t,e,n,r){return nr(t,e,r,"little_killer_product_p")}function jG(t,e,n,r){return nr(t,e,r,"x_omit_little_killer_sum_p")}function KG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=be(a,K.BOARD),u=be(a,K.YIN_YANG),f=r.value;if(f){const p=parseInt(f);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${p});
`}return""}function VG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=be(a,K.VALUES_GRID),u=r.value;if(u){const f=parseInt(u);return`constraint little_killer_sum_p(${c}, ${f});
`}return""}function XG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=be(c,K.PENTOMINO_REGIONS),f=r.value,p=Fi(t,f,i,o);if(!p)return"";const g=p[1];let h=p[0];return h+=`constraint pentomino_border_count_p(${u}, ${g});
`,h}function qG(t,e,n){let r="";const i="mystery_sandwich_a",o="mystery_sandwich_b";r+=`var int: ${i};
`,r+=`var int: ${o};
`,r+=`constraint member(ALLOWED_DIGITS, ${i});
`,r+=`constraint member(ALLOWED_DIGITS, ${o});
`,r+=`constraint ${i} <= ${o};
`;for(const a of Object.values(n)){const c=a.cell,u=e.getCell(c.r,c.c),p=`[${Ms(e,a).join(",")}]`,g=a.value??"",h=Fi(t,g,c,u);if(!h)continue;const m=h[1];r+=h[0],r+=`constraint sandwich_sum_p(${p}, ${m}, ${i}, ${o});
`}return r}const ZG=new Map([[d.SANDWICH_SUM,xG],[d.X_SUM,DG],[d.SHORTSIGHTED_X_SUM,kG],[d.BROKEN_X_SUM,GG],[d.SHIFTED_X_SUM,MG],[d.SKYSCRAPERS,UG],[d.X_SUM_SKYSCRAPERS,$G],[d.X_INDEX,TG],[d.BATTLEFIELD,FG],[d.SANDWICH_SUM_XOR_X_SUM,RG],[d.RISING_STREAK,PG],[d.OUTSIDE_CONSECUTIVE_SUM,HG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,KG],[d.LOOPWICHES,BG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,WG],[d.PENTOMINO_BORDER_COUNT,XG],[d.LITTLE_KILLER_SUM,zG],[d.LITTLE_KILLER_PRODUCT,YG],[d.X_OMIT_LITTLE_KILLER_SUM,jG],[d.NEGATORS_LITTLE_KILLER_SUM,VG]]),QG=new Map([[d.MYSTERY_SANDWICH_SUM,qG]]);function JG(t,e,n,r){let i="";const o=ZG.get(n),a=QG.get(n);if(o)for(const[c,u]of Object.entries(r)){const f=o(t,e,c,u);i+=f}else if(a){const c=a(t,e,r);i+=c}return i}function eM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=be(o,K.SASHIGANE),c=be(o,K.SASHIGANE_BENDS),u=Ae(r),f=ft(r,K.SASHIGANE);let p=`constraint sashigane_arrow_points_to_bend_p(${u}, ${f}, ${a}, ${c});
`;return p+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,p}function tM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+ut(o).join(",")+"]",u=be(o,K.CELL_CENTER_LOOP),f=Ae(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${f});
`}const nM=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,eM],[d.THERMO_SIGHTLINE_LOOP_ARROW,tM]]);function rM(t,e,n,r){return Al(e,n,r,nM)}function dp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Ae(i);return`constraint ${n}(${o});
`}const iM={allow_var:!0,allow_interval:!0,allow_int_list:!1};function Qd(t,e,n,r=iM){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function _p(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Ae(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function To(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),u=Ll(t,o).map(g=>be(g,n)),f=ft(o,n);return`constraint ${r}(${u.join(", ")}, ${f}, ${a});
`}function oM(t,e,n,r){return dp(e,r,"odd_p")}function sM(t,e,n,r){return dp(e,r,"even_p")}function aM(t,e,n,r){return _p(e,r,"low_digit_p","5")}function lM(t,e,n,r){return _p(e,r,"high_digit_p","5")}function fp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Ae(i),a=t.getNeighboorCells(i),c=be(a,K.BOARD);return`constraint ${n}(${c}) == ${o};
`}function cM(t,e,n,r){return fp(e,r,"odd_count")}function uM(t,e,n,r){return fp(e,r,"even_count")}function dM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o);c.push(o);const u=be(c,K.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function _M(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${be(c,K.BOARD)}, ${a});
`}function fM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${be(c,K.BOARD)}, ${a});
`}function gM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=be(a,K.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function hM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=be(a,K.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function vM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=o.r+1,u=o.c+1;if(o.region!==null){const p=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${p};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function pM(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),f=e.getCell(i.r,i.c+1);if(!a||!c||!u||!f)return"";const p=Ae(a),g=Ae(c),h=Ae(u),m=Ae(f);return`constraint groups_opposite_parity_p([${p},${g}], [${h},${m}]);
`}function Jd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Ae(i),[a,c,u,f]=Hd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${f});
`}function mM(t,e,n,r){return Jd(e,r,"is_watchtower_p")}function EM(t,e,n,r){return Jd(e,r,"is_not_watchtower_p")}function CM(t,e,n,r){return Jd(e,r,"farsight_p")}function IM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),[c,u,f,p]=Hd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${f}, ${p}, 9);
`}function bM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getRow(o.r),u="["+ut(c).join(",")+"]",f=e.getCol(o.c),p="["+ut(f).join(",")+"]",[g,h]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${p}, ${g}, ${h}, ${a});
`}function gp(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,f=t.getCell(u.r,u.c);if(!f)continue;const p=Ae(f),g=t.getOrthogonallyAdjacentCells(f).filter(E=>!a.has(E)),h=be(g,K.BOARD),m=`constraint ${n}(${h}, ${p});
`;i+=m}return i}function OM(t,e,n){return gp(e,n,"maximum_p")}function wM(t,e,n){return gp(e,n,"minimum_p")}function yM(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${ut([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function LM(t,e,n){const r=Object.values(n);let i="";const o=r.map(h=>h.cell),a=new Set(o.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h)),c=e.getAllCells().filter(h=>!a.has(h)),f=`${ut([...a]).join(`,
	`)}`,g=`${ut([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${f}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function AM(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${ut([...a]).join(`,
	`)}`,p=`${$i([...a],K.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${K.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${p}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${K.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const h=ft(g,K.COUNTING_CIRCLES_COLORS);i+=`constraint ${h} == 0;
`}for(const g of r){const h=g.cell,m=e.getCell(h.r,h.c);if(!m)continue;const E=Ae(m),I=ft(m,K.COUNTING_CIRCLES_COLORS),b=g.value;b?i+=`constraint ${I} == ${b};
`:i+=`constraint ${I} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${I}) == ${E};
`}return i+=`
`,i}function SM(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${ut([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function NM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o);return`constraint seen_even_count_p(${Ll(e,o).map(p=>be(p,K.BOARD)).join(", ")}, ${a});
`}function xM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o);return`constraint seen_odd_count_p(${Ll(e,o).map(p=>be(p,K.BOARD)).join(", ")}, ${a});
`}function RM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getCellsByKnightMove(o),u=be(c,K.BOARD),f=r.value??"5",p=Qd(t,f,n);if(!p)return"";let g="";const h=p[1];return g+=p[0],g+=`constraint cell_knights_whisper_p(${a}, ${u}, ${h});
`,g}function TM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${be(u,K.YIN_YANG)}, ${a});
`}function DM(t,e,n,r){return To(e,r,K.YIN_YANG,"yin_yang_seen_unshaded_p")}function kM(t,e,n,r){return To(e,r,K.YIN_YANG,"yin_yang_seen_shaded_p")}function GM(t,e,n,r){return To(e,r,K.YIN_YANG,"yin_yang_seen_same_shade_p")}function MM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=ft(o,K.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),f=be(u,K.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${f});
`}function UM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o);return`constraint count(${be(c,K.YIN_YANG)}, 1) == ${a};
`}function $M(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),f=e.getCol(o.c),p=be(u,K.TWO_CONTIGUOUS_REGIONS),g=be(f,K.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${p}, ${g}, ${a}, ${c});
`}function FM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getRow(o.r),u=e.getCol(o.c),f=be(c,K.UNKNOWN_REGIONS),p=be(u,K.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${f}, ${p}, ${a});
`}function PM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let f=`constraint nurimisaki_unshaded_endpoint_p(${be(c,K.NURIMISAKI)}, ${a});
`;return f+=To(e,r,K.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),f}function HM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=ft(o,K.SASHIGANE),u=ft(o,K.SASHIGANE_BENDS);let f=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return f+=`constraint ${u} = true;
`,f}function BM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=ft(o,K.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function WM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${ft(o,K.CELL_CENTER_LOOP)} == 1;
`:""}function zM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${ft(o,K.CELL_CENTER_LOOP)} == 0;
`:""}function YM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${be(u,K.CELL_CENTER_LOOP)}) == ${a};
`}function jM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=ft(o,K.CAVE_SHADING),u=Ll(e,o),f=[];for(const g of u){const h=be(g,K.CAVE_SHADING);f.push(h)}return`constraint cave_clue_p(${a}, ${c}, ${f[0]}, ${f[1]}, ${f[2]}, ${f[3]});
`}function KM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=Ae(o),p=ft(o,K.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),h=be(g,K.BOARD),m=be(g,K.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${p});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${f});
`;const E=e.getCellsByKnightMove(o),I=be(E,K.BOARD),b=be(E,K.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${p});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${f});
`;const O=[Fe.NE,Fe.NW,Fe.SE,Fe.SW],A=[];for(const F of O)e.getCellsInDirection(o.r,o.c,F).forEach(P=>A.push(P));const k=be(A,K.BOARD),G=be(A,K.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${G}, ${p});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${f});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function VM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=Ae(o),p=ft(o,K.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),h=be(g,K.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${p}) >= ${c};
`;const m=[Fe.N,Fe.S,Fe.E,Fe.W],E=[];for(const I of m){const b=e.getCellsInDirection(o.r,o.c,I);if(!b.length)continue;const O=be(b,K.BOARD),A=be(b,K.UNKNOWN_REGIONS),k=`in_arrow_${n}_${I}`,G=`in_arrow_${n}_${I}[1]`;E.push(G),u+=`array[index_set(${O})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${O}, ${A}, ${k}, ${f}, ${p});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function XM(t,e,n,r){return To(e,r,K.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function qM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function ZM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function QM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${ft(o,K.CONNECT_FOUR)});
`:""}function JM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${ft(o,K.CONNECT_FOUR)});
`:""}function eU(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const f=a.value;if(!f)continue;const p=Qd(t,f,o);if(!p)continue;const g=p[1];r+=p[0];const h=ft(u,K.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${K.BOARD}, ${K.NURIKABE_REGIONS}, ${h}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${K.NURIKABE_REGIONS})) == ${i+1};
`,r}function tU(t,e,n,r){return To(e,r,K.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function nU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=ft(o,K.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${K.NURIKABE_REGIONS}, ${c}, ${a});
`}function rU(t,e,n){let r="";const i=Bd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[f,p]of u.flatMap((g,h)=>u.slice(h+1).map(m=>[g,m]))){const g=f.cell,h=p.cell,m=e.getCell(g.r,g.c),E=e.getCell(h.r,h.c);if(!m||!E)continue;const I=ft(m,K.BOARD),b=ft(E,K.BOARD);r+=`constraint ${I} == ${b};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=be(a,K.BOARD);return r+=`constraint alldifferent(${c});
`,r}function iU(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${$i([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const f of Object.values(n)){const p=f.cell,g=e.getCell(p.r,p.c);if(!g)continue;const h=Ae(g),m=ft(g,K.SHIKAKU_REGIONS),E=ft(g,K.SHIKAKU_WIDTH),I=ft(g,K.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${K.SHIKAKU_REGIONS}, ${m}, ${h}, ${E}, ${I});
`}return i}function oU(t,e,n){const r=Object.values(n);let i="";const o=r.map(p=>p.cell),a=new Set(o.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p)),u=`${$i([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const f={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[p,g]of Object.entries(n)){const h=g.cell,m=e.getCell(h.r,h.c);if(!m)continue;const E=ft(m,K.SHIKAKU_REGIONS),I=g.value??"",b=Qd(t,I,p,f);if(!b)continue;const O=b[1];i+=b[0],i+=`constraint shikaku_region_sum_p(${K.BOARD}, ${K.SHIKAKU_REGIONS}, ${E}, ${O});
`}return i}const sU=new Map([[d.ODD,oM],[d.EVEN,sM],[d.LOW_DIGIT,aM],[d.HIGH_DIGIT,lM],[d.ODD_MINESWEEPER,cM],[d.EVEN_MINESWEEPER,uM],[d.DIAGONALLY_ADJACENT_SUM,fM],[d.ORTHOGONAL_SUM,_M],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,dM],[d.FRIENDLY_CELL,vM],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,pM],[d.WATCHTOWER,mM],[d.NOT_WATCHTOWER,EM],[d.FARSIGHT,CM],[d.RADAR,IM],[d.INDEXING_COLUMN,gM],[d.INDEXING_ROW,hM],[d.SANDWICH_ROW_COL_COUNT,bM],[d.SEEN_EVEN_COUNT,NM],[d.SEEN_ODD_COUNT,xM],[d.CELL_KNIGHT_WHISPERS,RM],[d.YIN_YANG_MINESWEEPER,TM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,DM],[d.YIN_YANG_SEEN_SHADED_CELLS,kM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,GM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,MM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,UM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,$M],[d.SEEN_REGION_BORDERS_COUNT,FM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,PM],[d.NURIKABE_SEEN_WATERWAY_CELLS,tU],[d.NURIKABE_ISLAND_SIZE_CELL,nU],[d.SASHIGANE_BEND_REGION_COUNT,HM],[d.SASHIGANE_REGION_SUM,BM],[d.CELL_ON_THE_LOOP,WM],[d.CELL_NOT_ON_THE_LOOP,zM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,YM],[d.CAVE_CLUE,jM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,KM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,VM],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,XM],[d.DIRECTED_PATH_START,qM],[d.DIRECTED_PATH_END,ZM],[d.CONENCT_FOUR_RED,QM],[d.CONNECT_FOUR_YELLOW,JM]]),aU=new Map([[d.MAXIMUM,OM],[d.MINIMUM,wM],[d.COUNTING_CIRCLES,yM],[d.REVERSE_COUNTING_CIRCLES,LM],[d.COLORED_COUNTING_CIRCLES,AM],[d.UNIQUE_CELLS,SM],[d.SHIKAKU_REGION_SIZE,iU],[d.SHIKAKU_REGION_SUM,oU],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,eU],[d.TELEPORT,rU]]);function lU(t,e,n,r){let i="";const o=sU.get(n),a=aU.get(n);if(o)for(const[c,u]of Object.entries(r)){const f=o(t,e,c,u);i+=f}else if(a){const c=a(t,e,r);i+=c}return i}function cU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=ft(r,K.UNKNOWN_REGIONS),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p),h=be(g,K.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(p=>`count_different(${p}, ${o})`).join(" + ")} == ${i};
`}function uU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=ft(r,K.YIN_YANG),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),p=be(f,K.BOARD),g=be(f,K.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${p}, ${g}) == ${i};
`}return c}function dU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),f=be(u,K.YIN_YANG);a+=`constraint count(${f}, 1) == ${i};
`}return a}function _U(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=ft(r,K.YIN_YANG),a=e.directions,c=[];for(const f of a){const p=t.getCellsInDirection(r.r,r.c,f),g=be(p,K.YIN_YANG),h=be(p,K.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function fU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions,a=[];for(const u of o){const f=t.getCellsInDirection(r.r,r.c,u),g=`count(${be(f,K.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function gU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions,a=[];for(const u of o){const f=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${be(f,K.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function hU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=ft(r,K.GALAXY_REGIONS),a=e.directions,c=[];for(const f of a){const p=t.getCellsInDirection(r.r,r.c,f),h=`count(${be(p,K.GALAXY_REGIONS)}, ${o})`;c.push(h)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function vU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),p="["+ut(u).join(",")+"]";a+=`constraint hot_arrows_p(${p}, ${i});
`}return a}function pU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),f=be(u,K.BOARD);a+=`constraint cold_arrows_p(${f}, ${i});
`}return a}function mU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=ft(r,K.CONNECT_FOUR),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p);c.push(...g)}return c.length===0?"":`constraint count(${be(c,K.CONNECT_FOUR)}, ${o}) == ${i};
`}function EU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=ft(r,K.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),p=be(f,K.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${p});
`}return c}const CU=new Map([[d.HOT_ARROWS,vU],[d.COLD_ARROWS,pU],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,cU],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,uU],[d.LOOP_CELL_COUNT_ARROWS,gU],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,_U],[d.YIN_YANG_COUNT_SHADED_CELLS,dU],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,hU],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,fU],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,mU],[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,EU]]);function IU(t,e,n,r){return Al(e,n,r,CU)}function bU(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function OU(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function wU(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}function yU(t,e){const n=e.value;if(!n)return"";const r=parseInt(n),i=[...t.getUsedRegions()];i.sort();const o=i.length;return`constraint lits_max_tetromino_sum_p(${K.BOARD}, ${K.LITS_GRID}, ${r}, 0..${o});
`}const LU=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,bU],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,OU],[d.FORBIDDEN_KNIGHT_SUM,wU],[d.LITS_MAX_TETROMINO_SUM,yU]]);function AU(t,e,n,r){return Al(e,n,r,LU)}const SU=[W3,lU,rM,IU,p5,e5,NG,E3,G3,JG,j3,AU];function NU(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of SU){let u=c(e,i,o,a);u=_t(u,`${o}`),n+=u}return n}function xU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function RU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function TU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function DU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function kU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function GU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows),a=At.range(1,o+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${o}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${o});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function MU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(p=>p.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=K.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=At.range(1,a+1);let u="";const f="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${o};
`,u+=`constraint numbered_chaos_construction_p(${K.BOARD}, ${o}, ${f}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${K.BOARD}, ${o}, ALLOWED_DIGITS, ${f});
`,u}function UU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function $U(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function FU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function PU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function HU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function hp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function vp(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function e_(t,e,n,r){const i=t.grid;let o="";if(!t.globalConstraints.get(d.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const f of u){const p=i.getRegion(f),g=be(p,r);o+=`constraint count_eq(${g}, ${n}, ${e});
`}}return o}function co(t,e,n,r){let i=hp(e,n,r);return i+=vp(e,n,r),i+=e_(t,e,n,r),i}function BU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=co(n,1,!0,K.DOUBLERS),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function WU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=co(n,1,!0,K.NEGATORS),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function zU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function YU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=co(n,2,!0,o),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function jU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${K.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${K.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${o}, ${K.SHIKAKU_WIDTH}, ${K.SHIKAKU_HEIGHT});
`,a}function KU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${K.BOARD}, ${K.SHIKAKU_REGIONS});
`,o}function VU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function XU(t,e){if(t.puzzle.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${K.BOARD}, ${c});
`,u}function qU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.GALAXY_REGIONS,a=K.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function ZU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function QU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function JU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=12,a=K.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function e8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.LITS_GRID,u=K.BOARD_REGIONS,f=[...r.getUsedRegions()];f.sort();const p=Math.min(...f),g=Math.max(...f);let h="";h+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,h+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,h+=`array[ROW_IDXS, COL_IDXS] of var 0..${f.length}: ${c};
`,h+=`constraint lits_shading_p(${o});
`,h+=`constraint lits_shading_ids_p(${o}, ${a});
`,h+=`constraint lits_region_and_ids_p(${u}, ${a});
`,h+=`constraint lits_tetromino_shapes_p(${a});
`,h+=`constraint lits_grid_p(${c}, ${u}, ${o}, ${p}..${g});
`,f.length&&(h+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of f){const E=r.getRegion(m),b=`constraint count_eq(${be(E,K.LITS_SHADING)}, 1, 4);
`;h+=b}return h}function t8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,a+=`constraint norinori_p(${K.BOARD_REGIONS}, ${o});
`,r.getUsedRegions().size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`),a+=e_(n,2,1,K.NORINORI_SHADING),a}function n8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(p=>p.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const f=r.getUsedRegions();f.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const p of f){const g=r.getRegion(p),m=`constraint count_eq(${be(g,K.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function r8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.STAR_BATTLE,c=K.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=co(n,2,1,K.STAR_BATTLE),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=co(n,1,1,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`
% 1 black star per row, column, region
`,u+=co(n,1,2,K.LITS_WHITE_BLACK_STAR_BATTLE),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${o}, ${c});
`,u}function i8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING,a=K.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=vp(2,1,a),c+=hp(2,1,a),c+=e_(n,1,1,a),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${o}, ${a});
`,c}function Wt(t,e,n){return t*n+e+1}function o8(t){const e=t.grid;function n(c,u){const f=[],p=Wt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=Wt(u.r+g,u.c,e.nCols);f.push([p,h]),f.push([h,p])}return f}function r(c,u){const f=[],p=Wt(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const h=Wt(u.r,u.c+g,e.nCols);f.push([p,h]),f.push([h,p])}return f}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const f=u[0],g=Wa(f).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let h=Wt(g[0].r,g[0].c,e.nCols),m=Wt(g[3].r,g[3].c,e.nCols);i.push([h,m]),i.push([m,h]),h=Wt(g[1].r,g[1].c,e.nCols),m=Wt(g[2].r,g[2].c,e.nCols),i.push([h,m]),i.push([m,h])}for(let f=0;f<u.length-1;f++){const p=Vx(wv(u[f],u[f+1]),.5),h=za(p).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(h.length!==2)continue;const[m,E]=h;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function s8(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,f]=c,p=o.value,g=Wt(u.r,u.c,e.nCols),h=Wt(f.r,f.c,e.nCols);p==="<"?n.push([g,h]):p===">"&&n.push([h,g])}return n}function a8(t){const e=[];for(const n of t.getAllCells()){const r=Wt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Wt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function l8(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const f=Bd(a);let p=1;for(const g of f.values())if(!(g.length<=1)){for(const[h,m]of g.flatMap((E,I)=>g.slice(I+1).map(b=>[E,b]))){const E=Wt(h.cell.r,h.cell.c,e.nCols),I=Wt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[h.cell.r][h.cell.c]=p,u[m.cell.r][m.cell.c]=p}for(const h of g){const m=Wt(h.cell.r,h.cell.c,e.nCols);r.push(m)}p++}c=f.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function c8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(O=>O.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=a8(r);const c=o8(n),u=s8(n);c.push(...u);const f=n.localConstraints;a=a.filter(O=>!c.some(A=>O[0]===A[0]&&O[1]===A[1]));const p=l8(n);if(p.tp_edges.length){a.push(...p.tp_edges);const O=op(p.tp_arr),A=p.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${A}: teleports = array2d(ROW_IDXS, COL_IDXS, ${O});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,h=a.length,m="["+a.map(O=>O[0]).join(",")+"]",E="["+a.map(O=>O[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${E};
`,o+=`var 1..${g}: dpath_source;
`,o+=`var 1..${g}: dpath_target;
`,o+=`array[1..${g}] of var bool: dpath_ns;
`,o+=`array[1..${h}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let O=0;O<r.nRows-1;O++)for(let A=0;A<r.nCols-1;A++){const k=r.getCell(O,A),G=r.getCell(O,A+1),F=r.getCell(O+1,A),z=r.getCell(O+1,A+1);if(!k||!G||!F||!z)continue;const P=Wt(k.r,k.c,r.nCols),j=Wt(G.r,G.c,r.nCols),J=Wt(F.r,F.c,r.nCols),ae=Wt(z.r,z.c,r.nCols),re=[[P,ae],[ae,P],[j,J],[J,j]].map(ge=>a.findIndex(oe=>ge[0]===oe[0]&&ge[1]===oe[1])).filter(ge=>ge!==-1);if(re.length){const ge=re.map(oe=>`dpath_es[${oe+1}]`).join(",");o+=`constraint sum([${ge}]) <= 1;
`}}const I=f.get(d.TELEPORT),b=I?Object.values(I):[];if(p.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const O of b){const A=O.cell,k=r.getCell(A.r,A.c);if(!k)continue;const G=r.getNeighboorCells(k),F=Wt(k.r,k.c,r.nCols),z=[];for(const j of G){if(b.some(Q=>Q.cell.r===j.r&&Q.cell.c==j.c&&Q.value===O.value))continue;const ae=Wt(j.r,j.c,r.nCols);z.push([F,ae]),z.push([ae,F])}const P=z.map(j=>a.findIndex(J=>j[0]===J[0]&&j[1]===J[1])).filter(j=>j!==-1);if(P.length){const j=P.map(J=>`dpath_es[${J+1}]`).join(",");o+=`constraint sum([${j}]) <= 1;
`}}}return o}function u8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function d8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function _8(t,e){let n="";return n+=`constraint connect_four_draw_p(${K.CONNECT_FOUR});
`,n}function f8(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${K.BOARD}, ${K.CONNECT_FOUR});
`,n}function g8(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${K.BOARD}, ${K.CONNECT_FOUR}, 3);
`,n}const h8=new Map([[d.FILLOMINO,zU],[d.CAVE,VU],[d.GALAXIES,qU],[d.YIN_YANG,xU],[d.SHIKAKU,jU],[d.SHIKAKU_NO_REPEATS_IN_REGION,KU],[d.NORINORI,t8],[d.NURIMISAKI,RU],[d.NURIKABE,TU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,DU],[d.TWO_CONTIGUOUS_REGIONS,kU],[d.CHAOS_CONSTRUCTION,GU],[d.NUMBERED_CHAOS_CONSTRUCTION,MU],[d.SASHIGANE,UU],[d.CELL_CENTER_LOOP_NO_TOUCHING,$U],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,FU],[d.NOT_LOOP_SIZED_REGIONS,PU],[d.MODULAR_LOOP,HU],[d.DOUBLERS,BU],[d.NEGATORS,WU],[d.GOLDILOCKS_ZONE,QU],[d.NEXUS,ZU],[d.INDEXER_CELLS,YU],[d.PENTOMINO_TILLING,JU],[d.LITS,e8],[d.CAVE_LITS,n8],[d.LITS_BLACK_WHITE_STAR_BATTLE,r8],[d.NORINORI_STAR_BATTLE,i8],[d.RENBAN_CAVES,XU],[d.MAZE_DIRECTED_PATH,c8],[d.CHAOS_CONSTRUCTION_SUGURU,u8],[d.CONNECT_FOUR,d8],[d.CONNECT_FOUR_DRAW,_8],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,f8],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,g8]]);function v8(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=h8.get(i);if(!a)continue;let c=a(t,i);c=_t(c,`${i}`),e+=c}return e}function p8(){return`
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

`}function m8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${Ae(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function pp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new fk(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(p8());let f=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?f=`1..${c}`:t.globalConstraints.get(d.HEXED_SUDOKU)?r=[...At.range(1,16)]:r&&(f="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${f};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),hk(i,n),i.add(m8(t)),i.add(d3(t)),i.add(_3(t)),i.add(v8(i)),i.add(NU(t,i)),i.add(g3(t)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const bh=encodeURIComponent("4.4.2");let vr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Si=[];let fu;function cs(){if(!fu){const e=`importScripts(${JSON.stringify(vr.workerURL)});`;fu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(fu);t.postMessage({wasmURL:vr.wasmURL?vr.wasmURL.toString():new URL(`./minizinc.wasm?version=${bh}`,vr.workerURL).toString(),dataURL:vr.dataURL?vr.dataURL.toString():new URL(`./minizinc.data?version=${bh}`,vr.workerURL).toString()}),Si.push({worker:t,runCount:0})}function mp(){for(;Si.length<vr.numWorkers;)cs()}async function E8(t){if(vr={...vr,...t},Si.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");mp(),await Promise.race(Si.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class t_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new t_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){mp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Si.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Si.push({worker:o,runCount:a}):(o.terminate(),cs()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=f=>{switch(f.data.type){case"error":c.push(f.data);break;case"interface":u=f.data;break;case"exit":a<10?Si.push({worker:o,runCount:a}):(o.terminate(),cs()),f.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);cs();let c={},u=!1,f=null;return a.onmessage=p=>{if(c[p.data.type])for(const g of c[p.data.type])g(p.data);switch(p.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":f||(f=p.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const p of c.exit)p({type:"exit",code:null});c={}}},on(p,g){c[p]?c[p].add(g):c[p]=new Set([g])},off(p,g){c[p]&&c[p].delete(g)},then(p,g){const h=m=>{if(m.code===0)p(m.outputFiles[i]);else{const E=f?{message:f.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);cs();let o=null,a={},c=!1,u=null,f={},p="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const h of a[g.data.type])h(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=g.data);break;case"statistics":f={...f,...g.data.statistics};break;case"solution":u=g.data,p="SATISFIED";break;case"status":p=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,h){a[g]?a[g].add(h):a[g]=new Set([h])},off(g,h){a[g]&&a[g].delete(h)},then(g,h){const m=E=>{if(E.code===0)g({status:p,solution:u,statistics:f});else{const I=o?{message:o.message,...E}:E;if(!h)throw I;h(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var C8=de('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function I8(t,e){ce(e,!1);const n=Ye(),r=()=>Ee($r,"$puzzleMetaStore",n);let i=M(e,"showModal",12,!1);function o(g,h,m){var E=document.createElement("a"),I=new Blob([g],{type:m});E.href=URL.createObjectURL(I),E.download=h,E.click(),URL.revokeObjectURL(E.href)}function a(){const g=tt(Ts);return pp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),h=Eh(g);navigator.clipboard.writeText(h)}function f(){const g=Ka(r()),h=a();o(h,`${g}.mzn`,"text/plain")}function p(){const g=Ka(r()),h=a(),m=Eh(h);o(m,`${g}.mzn`,"text/plain")}he(),Pr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,h)=>{var m=C8(),E=V(m),I=U(E,2),b=U(I,2),O=U(b,2),A=U(O,2),k=U(V(A));L(k,"href","https://play.minizinc.dev/"),Ni(),B(A),B(m),Ge("click",E,c),Ge("click",I,u),Ge("click",b,f),Ge("click",O,p),S(g,m)},$$slots:{default:!0},$$legacy:!0}),ue()}var ar=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(ar||{});const b8=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Ep=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),O8=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),w8=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),y8=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),L8=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),gu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),A8=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),hu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Tl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function S8(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=b8(t,n),o=Ep(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=O8(t,n),a=w8(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=y8(t,n),o=L8(t,r);return[i,o]}if(e===d.HIGHLIGHTS&&n!==null){const r=hu(t,n),i=hu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=hu(t,n),o=Tl(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=gu(t,n,e),i=gu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=gu(t,n,e),o=A8(t,r,e);return[i,o]}}function ns(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),Qn.update(i=>i)}function go(t){switch(t.type){case ar.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;ns(e,d.DIGIT,n,!0);break}case ar.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;ns(e,d.GIVEN,n,!0);break}case ar.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;ns(e,d.REGIONS,n,!0);break}case ar.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;ns(e,d.HIGHLIGHTS,n,!0);break}case ar.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;ns(e,r,n,!0);break}case ar.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];Qn.update(r=>r);break}case ar.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];Qn.update(i=>i);break}case ar.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];Qn.update(r=>r);break}case ar.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];Qn.update(r=>r);break}case ar.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);Qn.update(i=>i);break}}}function N8(t,e){return{execute:()=>{go(t)},unExecute:()=>{go(e)}}}function Do(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;const p=Number(c[u]),g=n.get(p);g!==void 0&&(r.push(f),i.push([g]))}}const o=Tl(r,i);go(o)}function x8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const E=[];i.push(E),a(h,m,t[h][m])}function a(h,m,E){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==E||(r[h][m]=!0,i[i.length-1].push([h,m]),a(h+1,m,E),a(h-1,m,E),a(h,m+1,E),a(h,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(h,m){for(const[E,I]of h)for(const[b,O]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+b,k=I+O;if(m.some(([G,F])=>G===A&&F===k))return!0}return!1}for(let h=0;h<i.length;h++)for(let m=h+1;m<i.length;m++)u(i[h],i[m])&&(c[h].add(m),c[m].add(h));const f=[1,4,7,9],p=new Array(i.length).fill(0);function g(h,m){for(const E of c[h])if(p[E]===m)return!1;return!0}for(let h=0;h<i.length;h++)for(const m of f)if(g(h,m)){p[h]=m;break}for(let h=0;h<i.length;h++)for(const[m,E]of i[h])o[m][E]=p[h];return o}function R8(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const f=i[u];for(let p=0;p<f.length;p++){const g=n.getCell(u,p);if(!g||g.given||r&&!g.given&&g.value===null)continue;const h=f[p];o.push(g),a.push(h)}}const c=Ep(o,a);go(c)}function T8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){Do(o,e,r);return}}}function D8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){Do(o,e,r);return}}}function k8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;r.push(f);const p=c[u];i.push([p])}}const o=Tl(r,i);go(o)}function G8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;Do(n,e,new Map([[0,4],[1,7],[2,9]]))}function M8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;Do(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function U8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;Do(n,e,new Map([[1,7],[2,4],[3,9]]))}function $8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;Do(n,e,new Map([[1,7],[2,8]]))}function F8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let p=0;p<i.length;p++){const g=i[p];for(let h=0;h<g.length-1;h++){const m=e.getCell(p,h),E=e.getCell(p,h+1);if(!m||!E)continue;const I=g[h],b=g[h+1];if(I===b)continue;const O={colorId:c,p1:{r:p,c:h+1},p2:{r:p+1,c:h+1}};u.push(O)}}for(let p=0;p<a;p++)for(let g=0;g<o-1;g++){const h=e.getCell(g,p),m=e.getCell(g+1,p);if(!h||!m)continue;const E=i[g][p],I=i[g+1][p];if(E===I)continue;const b={colorId:c,p1:{r:g+1,c:p},p2:{r:g+1,c:p+1}};u.push(b)}const f=vs(u);Cr(f);return}}function P8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const p=e.getCell(c,f);if(p)for(const g of e.getOrthogonallyAdjacentCells(p)){if(!g||!(g.r>p.r||g.c>p.c))continue;const h=i[p.r][p.c],m=i[g.r][g.c];if(!(h===1&&m===1))continue;const E={colorId:4,p1:{r:p.r+.5,c:p.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(E)}}}const a=vs(o);Cr(a);return}}function H8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=x8(i);if(!o)return;const a=[],c=[];for(let f=0;f<o.length;f++){const p=o[f];for(let g=0;g<p.length;g++){const h=e.getCell(f,g);if(!h)continue;a.push(h);const m=p[g];c.push([m])}}const u=Tl(a,c);go(u);return}}function B8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const p=e.getCell(c,f);if(!p)continue;const g=i[p.r][p.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:p.r+.5,c:p.c+.5};o.push(m)}}const a=FT(o);Cr(a);return}}function W8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const f=r[c],[p,g]=f,[h,m]=[Math.floor((p-1)/i.nCols),(p-1)%i.nCols],[E,I]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!Ls({r:h,c:m},{r:E,c:I}))continue;const A={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(A)}const a=vs(o);Cr(a)}function z8(t,e){const n=e.puzzle,r=n.grid;Cr(Gd()),R8(t,n),k8(t,r),F8(t,r),G8(t,r),M8(t,r),P8(t,r),D8(t,r),H8(t,r),T8(t,r),B8(t,r),U8(t,r),W8(t,e),$8(t,r)}function Y8(){const{subscribe:t,set:e}=Dt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var j8=de('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function K8(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Ts,"$puzzleStore",n),i=()=>Ee(mn,"$gridStore",n),o=()=>Ee(O,"$timer",n),a=N(),c=N(),u=N(),f=N();let p=N(!0),g=N(!1),h=N(null),m=N(100),E=N("100"),I=N(null),b=N("IDLE");const O=Y8();function A(j){return j===null?"":String(j)}function k(j){const J=Math.floor(j/6e4),ae=Math.floor(j%6e4/1e3),Q=Math.floor(j%1e3/100),re=ae.toString().padStart(2,"0");return`${J}:${re}.${Q}`}function G(){y(g,!0)}function F(j){const J=parseInt(j);typeof J=="number"&&J>=1&&y(m,J)}async function z(){y(I,0),y(b,"SOLVING...");const j=new t_;qv();const J=pp(_(a));j.addFile("test.mzn",J.model_str),O.reset(),O.start(),y(h,j.solve({options:{solver:"chuffed","num-solutions":_(m)}})),_(h).on("solution",ae=>{const Q=ae.output.json;ae.type==="solution"&&_(I)!==null&&y(I,_(I)+1),z8(Q,J)}),_(h).on("error",ae=>{y(u,"Solve"),y(b,"ERROR"),console.log(ae.message),O.stop(),_(h)&&_(h).cancel()}),_(h).on("warning",ae=>{y(b,"WARNING"),console.log(ae.message)}),_(h).then(ae=>{y(b,ae.status),y(u,"Solve"),O.stop()})}function P(){_(h)===null||!_(h).isRunning()?z():_(h)!==null&&_(h).isRunning()&&(y(b,"IDLE"),y(u,"Solve"),O.stop(),_(h).cancel())}D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i())}),D(()=>{},()=>{y(u,"Solve")}),D(()=>o(),()=>{y(f,o())}),D(()=>_(h),()=>{_(h)&&(_(h)!==null&&_(h).isRunning()?y(u,"Stop"):y(u,"Solve"))}),we(),he(),wl(t,{get isOpen(){return _(p)},set isOpen(j){y(p,j)},$$slots:{"panel-header":(j,J)=>{Ol(j,{slot:"panel-header",title:"Solver",get isOpen(){return _(p)},set isOpen(ae){y(p,ae)},$$legacy:!0})},"panel-content":(j,J)=>{var ae=j8(),Q=se(ae),re=U(Q,2);I8(re,{get showModal(){return _(g)},set showModal(kt){y(g,kt)},$$legacy:!0});var ge=U(re,2),oe=V(ge,!0);B(ge);var pe=U(ge,2),Ne=V(pe,!0);B(pe);var xe=U(pe,2),Oe=V(xe);an(Oe),L(Oe,"min",1),L(Oe,"max",200),L(Oe,"step",1),B(xe);var Ie=U(xe,2),je=V(Ie,!0);te(()=>at(je,`Solution Count: ${A(_(I))}`)),B(Ie);var qe=U(Ie,2),It=V(qe,!0);te(()=>at(It,`Elapsed Time: ${k(_(f))}`)),B(qe);var xt=U(qe,2),jt=V(xt,!0);B(xt),te(()=>{at(oe,_(u)),at(Ne,`Max. Solutions: ${_(m)}`),at(jt,`Status: ${_(b)}`)}),Ge("click",Q,G),Ge("click",ge,P),Zn(Oe,()=>_(E),kt=>y(E,kt)),Ge("input",Oe,()=>F(_(E))),S(j,ae)}},$$legacy:!0}),ue()}var V8=de('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!></div></div>');function X8(t){var e=V8(),n=V(e),r=V(n);ik(r);var i=U(r,2);K8(i,{});var o=U(i,2);R2(o,{elementHandlers:Pt});var a=U(o,2);Y2(a,{elementHandlers:Pt});var c=U(a,2);hD(c,{elementHandlers:Pt});var u=U(c,2);sk(u,{}),B(n),B(e),S(t,e)}class Te{constructor(e,n){Ce(this,"x");Ce(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Te(this.x+e.x,this.y+e.y)}subtract(e){return new Te(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Te(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Te(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function Cp(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const wn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Te(i.x,i.y)};function $a(t,e){const n=ml(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function q8(t,e){const n=ml(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Fa(t,e){const n=ml(t),r=Zx(n),o=r.map(f=>new Te(f.c,f.r)).map(f=>f.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function Pa(t,e){const n=ml(t),r=Qx(n),o=r.map(f=>new Te(f.c,f.r)).map(f=>f.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function _s(t,e,n){const r=$a(t);if(!r)return null;const i=Pa(t);if(!i)return null;const o=Fa(t);if(!o)return null;const a=q8(t);if(!a)return null;let c,u;e===Lt.CORNER?(c=o.corner,u="corner"):e===Lt.EDGE?(c=i.edge,u="edge"):e===Lt.CELL_CENTER?(c=a.cellCenter,u="cell center"):e===Lt.CORNER_OR_EDGE?o.dist<i.dist?(c=o.corner,u="corner"):(c=i.edge,u="edge"):e===Lt.CORNER_OR_CENTER?o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center"):e===Lt.EDGE_OR_CENTER?i.dist<a.dist?(c=i.edge,u="edge"):(c=a.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<a.dist?(c=i.edge,u="edge"):o.dist<i.dist&&o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center");const p=new Te(c.c,c.r).subtract(t).length(),g=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:i.edge,corner:o.corner,dist:p,closest:c,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:g}}class ko{constructor(e=.4){Ce(this,"onTap",null);Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onMove",null);Ce(this,"_prevPoint",null);Ce(this,"_prevCell",null);Ce(this,"_lastPointerDownTime",0);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_tapCount",0);Ce(this,"_lastTapPosition",null);Ce(this,"_lastTapTime",0);Ce(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=wn(e,n);if(!i)return;this._prevPoint=i;const o=r?void 0:this._drag_margin,a=$a(i,o);if(!a)return;const c=a.cell;this._prevCell=c,this._lastPointerDownTime=e.timeStamp;const u={event:e,cell:c,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(u)}pointerMove(e,n){const r=wn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=$a(r,i);if(!o)return;const a=o.cell;if(this._prevCell&&Ke(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const c={event:e,cell:a,tapCount:this._tapCount};this.onMove&&this.onMove(c),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(c)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=wn(e,n);if(!r)return;const i=$a(r,void 0);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Oh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function Z8(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function wh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function yh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Q8(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Oh(i,e):i.value!==null?Z8(i,e):n===d.CORNER_PM&&i.cornerMarks.length?wh(i,e):n===d.CENTER_PM&&i.centerMarks.length?yh(i,e):i.cornerMarks.length?wh(i,e):i.centerMarks.length?yh(i,e):i.highlights.length?Oh(i,e):r:r}function fi(t,e,n,r=!1){if(!(t&&e))return;const i=Fd(t,e),o=Pd(t,n),a=Ds(i,o);pn(a,r)}function Pi(t,e,n,r=!0){if(!(t&&e))return;const i=Pd(t,n),o=Fd(t,e),a=Ds(i,o);pn(a,r)}function Ku(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=vh(r,t,n),a=vh(r,t,e),c=Ds(o,a);pn(c,i)}function J8(t,e,n,r){const i=new ko,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,f=!1,p=!1,g;(I=>{I.DYNAMIC="DYNAMIC",I.BULB="BULB",I.BODY="BODY"})(g||(g={}));let h="DYNAMIC";function m(I){f=!1;const b=I.cell;if(Mt(I.cell,o)){if(h==="DYNAMIC"){const A=tt(gt),k=ET(A,n,b);if(k){const F=nT(k.arrow,k.matchLineIdx);Ku(k.id,k.arrow,F,n,!0),p=!0;return}const G=ah(A,n,b);if(!G)f=!0,h="BULB",u=null,a=null;else{h="BODY",u=G[0],a=G[1],a=Gu(a,b),Xt(n,u,a);return}}if(h==="BULB"&&!u){u=At.uniqueId(),a=$v(n,[b]),_i(u,a);return}else h==="BULB"&&u&&a?(a=QR(a,b),Xt(n,u,a)):h==="BODY"&&u&&a&&(a=JR(a,b,r==null?void 0:r.allowSelfIntersection),Xt(n,u,a))}}return i.onDragStart=I=>{h="DYNAMIC",m(I)},i.onDrag=I=>{m(I)},i.onDragEnd=()=>{if(p){p=!1;return}h==="BODY"&&u&&a?eT(a)?(a=tT(a),Xt(n,u,a)):(Ku(u,c,a,n),c=a):h==="BULB"&&(fi(u,a,n),c=a),h="DYNAMIC"},i.onTap=I=>{if(f)return;const b=I.cell,O=tt(gt);if(ah(O,n,b)){Pi(u,a,n);return}},{pointerDown:I=>{I.button===0&&i.pointerDown(I,t)},pointerMove:I=>{i.pointerMove(I,t)},pointerUp:I=>{i.pointerUp(I,t)},keyDown:()=>{},keyUp:()=>{}}}function e$(t,e,n,r){const i=new ko,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function f(g){if(!u||!c)throw"UNREACHABLE";const h=g.cell;Mt(g.cell,o)&&(c=ZR(c,h,a),Xt(n,u,c))}return i.onDragStart=g=>{u=At.uniqueId(),c=Mv(n,[],r==null?void 0:r.defaultValue),_i(u,c),f(g)},i.onDrag=g=>{f(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?ki(n,u):u&&c&&fi(u,c,n,!1),u=null},i.onTap=g=>{const h=g.cell,m=tt(gt),E=mT(m,n,h);if(E){const[I,b]=E;Pi(I,b,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}const t$=ai(gt,t=>{const e=[];for(const[n,r]of t.entries())hw(n)&&e.push({toolId:n,constraints:r});return e});function Us(t){return ai(gt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,constraints:o});return r})}const n_=Us(Cd),Ip=ai(n_,t=>{const e=t.find(r=>r.toolId===d.FOG_LIGHTS);return e?e.constraints:{}}),n$=ai(n_,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.constraints:{}}),r$=ai(n_,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.constraints:{}}),i$=Us(ll),o$=Us(av),s$=Us(Id),a$=Us(lv),Vu=Dt(void 0),Xu=Dt(void 0),qu=Dt(void 0),Zu=Dt(void 0),Qu=Dt(void 0),Ha=Dt(void 0);function l$(t,e,n,r){const i=new ko,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const h=tt(gt),m=g.cell;if(!Mt(g.cell,o))return;const I=lo(h,n,m);if(c===0&&(c=I?2:1),!(r!=null&&r.oppositeConstraintId&&lo(h,r.oppositeConstraintId,m))){if(I&&c===2){const[b,O]=I;Pi(b,O,n)}else if(!I&&c===1){const b=Fu(n,m,r==null?void 0:r.defaultValue),O=At.uniqueId();fi(O,b,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)},i.onDragEnd=()=>{c=0},i.onMove=g=>{if(!Mt(g.cell,o)){Vu.set(void 0);return}const m=Fu(n,g.cell,r==null?void 0:r.defaultValue),E=tt(Rs);E&&(m.shape={...E});const I=tt(gt),b=lo(I,n,g.cell);let O="add",A;b&&(c===2||c===0)&&(O="remove",A=b[0]);const k={tool:m,match_id:A,mode:O};Vu.set(k)};function f(g){const h=tt(zt);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!Co(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=xs(m,I),Xt(n,E,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}class Dl{constructor(e){Ce(this,"onDragStart",null);Ce(this,"onMove",null);Ce(this,"feature");Ce(this,"_prevCoord",null);Ce(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=wn(e,n);if(!r)return;const i=_s(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=_s(r,this.feature);if(!i||this._prevCoord&&Ke(i.closest,this._prevCoord)&&this._prevCellCoord&&Ke(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function c$(t,e,n,r){const i=(r==null?void 0:r.targets)??Lt.CLOSEST,o=new Dl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(h){const m=tt(gt),E=h.cell,I=h.closest;if(!Mt(E,a))return;const O=IT(m,n,I);if(O){ki(n,O);return}c=Pv(n,I,""),u=At.uniqueId(),_i(u,c)}function p(h){const m=tt(zt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!Co(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=xs(E,b),Xt(n,I,E))}return o.onDragStart=h=>{f(h)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{p(h)},keyUp:()=>{}}}function u$(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Lt.CORNER_OR_EDGE,o=new Dl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(h){const m=tt(gt),E=h.cell,I=h.direction,b=uo(I);if(Mt(E,a))return;const A=Zg(E,b);if(!Mt(A,a))return;const G=CT(m,n,E,b);if(G){ki(n,G);return}c=$u(n,E,b,""),u=At.uniqueId(),_i(u,c)}function p(h){const m=tt(zt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!Co(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=xs(E,b),Xt(n,I,E))}return o.onDragStart=h=>{f(h)},o.onMove=h=>{if(Mt(h.cell,a)){Ha.set(void 0);return}const E=uo(h.direction),I=Zg(h.cell,E);if(!Mt(I,a)){Ha.set(void 0);return}const O=$u(n,h.cell,E,"");Ha.set(O)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:()=>{},keyDown:h=>{p(h)},keyUp:()=>{}}}function d$(t,e,n,r){const i=new ko,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function p(m){const E=tt(gt),I=m.cell;if(Mt(m.cell,o)){if(m.event.shiftKey){const O=sh(E,n,I);O&&(c=O[0],a=O[1],Ro({id:c,constraint:a}),f=1)}if(f===0){const O=sh(E,n,I);if(f=O?2:1,O){Pi(O[0],O[1],n);return}}if(!a&&f===1){a=Fv(n,[I]),c=At.uniqueId(),_i(c,a);return}else if(a&&c&&f===1){const O=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=iT(a,I,O),Xt(n,c,a);return}}}function g(m){const E=tt(zt);if(!E)return;let I=E.constraint;const b=E.id;if(I.value===void 0||!Co(m)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(I==null?void 0:I.value,m.key);O!==void 0&&O!==I.value&&(I=oT(I,O),Xt(n,b,I))}return i.onDragStart=m=>{c=null,a=null,f=0,p(m)},i.onDrag=m=>{p(m)},i.onDragEnd=()=>{c&&a&&fi(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const io=new ko;function Lh(t,e){return t.shiftKey?ls.SELECTING:t.ctrlKey||t.metaKey||e?ls.DYNAMIC:t.altKey?ls.DESELECTING:ls.RESETTING}function Ju(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function _$(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=Ju(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function vu(t,e,n,r){const i=S8(e,n,r);if(i){const o=i[0],a=i[1],c=N8(o,a),u=Wu(t),p=[zT(u,u),c];WT(p)}}function f$(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};io.onTap=m=>{if(m.tapCount!==2)return;const I=Mt(m.cell,i)?m.cell:null;if(!I)return;const b=Q8(I,e,n),O=Wu(b);oo(O)},io.onDragStart=m=>{const E=Mt(m.cell,i),I=tt(zu),b=Lh(m.event,I),O=E?m.cell:null,A=xT(O,b);oo(A)},io.onDrag=m=>{const I=Mt(m.cell,i)?m.cell:null,b=TT(I);oo(b)};function o(m){if(!Uw(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=Wu(E);return oo(I),!0}function a(m){if(!Bw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=zw(m);return ni(E),!0}return m.type==="keyup"?(jT(),!0):!1}function c(m){if(!Hw(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return ni(I),Yu(I),!0}else{const E=Ww(m.code);return ni(E),Yu(E),!0}}function u(m){if(!jw(m))return!1;const E=tt(Di).lastCell;let I=null;if(E!==null){const[A,k]=Kw(m),[G,F]=[lh(E.r+k,0,i.nRows-1),lh(E.c+A,0,i.nCols-1)];I={r:G,c:F}}else I={r:0,c:0};const b=Lh(m,!1),O=DT(I,b);return oo(O),!0}function f(m){const E=Pw(m);if(E===void 0)return!1;const I=tt(Di).cells,b=[];if(I.forEach(O=>{const A=e.getCell(O.r,O.c);A&&b.push(A)}),E===null){const{tool:O,cells:A}=_$(b,n);if(A.length)return vu(I,A,O,E),!0}else{let O=Ju(b,n,"different",E,!0);if(O.length)return vu(I,O,n,E),!0;if(O=Ju(b,n,"equal",E,!0),O.length)return vu(I,O,n,E),!0}return!1}function p(m){return m.repeat?!1:f(m.key)}const g=At.throttle(m=>{io.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&io.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){io.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||p(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){f(m.currentTarget.value)}}}function g$(t,e,n,r){const i=[Fe.N,Fe.NE,Fe.E,Fe.SE,Fe.S,Fe.SW,Fe.W,Fe.NW],o=new Dl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,f;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(f||(f={}));let p=0;function g(E){const I=tt(gt),b=E.cell;if(!Mt(E.cell,a))return;E.event.altKey&&(p=2);const A=lo(I,n,b),k=uo(E.direction);if(A){[u,c]=A,c.direction===k||p===2?Pi(u,c,n):(c={...c,direction:k},Xt(n,u,c));return}else p!==2&&(c=Pu(n,b,k),u=At.uniqueId(),fi(u,c,n,!0))}function h(E){if(!c||!u||!$w(E))return;const b=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[b]},Xt(n,u,c)}return o.onDragStart=E=>{p=0,g(E),p=0},o.onMove=E=>{if(!Mt(E.cell,a)){Xu.set(void 0);return}const b=uo(E.direction),O=Pu(n,E.cell,b),A=tt(gt),k=lo(A,n,E.cell);let G="add",F;k&&k[1].direction===b&&p===0&&(G="remove",F=k[0]);const z={tool:O,match_id:F,mode:G};Xu.set(z)},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:E=>{o.pointerMove(E,t)},pointerUp:()=>{},keyDown:E=>{h(E)},keyUp:()=>{}}}function h$(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function v$(t,e,n,r){const i=new Dl(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(h=>{h[h.DYNAMIC=0]="DYNAMIC",h[h.ADDING=1]="ADDING",h[h.REMOVING=2]="REMOVING"})(u||(u={}));let f=0;function p(h){const m=tt(gt),E=h.cell;if(!Mt(h.cell,o))return;h.event.altKey&&(f=2);const b=uo(h.direction),O=lo(m,n,E);if(O){if(c=O[0],a=O[1],f===2)ki(n,O[0]);else{const A=h$(a.directions,b);A.length?(a={...a,directions:A},Xt(n,c,a)):ki(n,c)}return}else f!==2&&(a=Hu(n,E,b),c=At.uniqueId(),_i(c,a))}return i.onDragStart=h=>{f=0,p(h)},i.onMove=h=>{if(!Mt(h.cell,o)){qu.set(void 0);return}const E=uo(h.direction),I=Hu(n,h.cell,E);qu.set(I)},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class p${constructor(){Ce(this,"onDragStart",null);Ce(this,"onMove",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"_prevCoord",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const i=Pa(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=Pa(r,this._margin);if(!i||this._prevCoord&&Ke(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=wn(e,n);if(!r)return;const i=Pa(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function m$(t,e,n,r){const i=new p$,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const h=tt(gt),m=g.coord,E=za(m);if(!E.every(O=>Mt(O,o)))return;let b=null;if(c===0&&(b=ih(h,n,E),c=b?2:1),b&&c===2){const O=b[0];Pi(O,b[1],n)}else if(c===1){const O=(r==null?void 0:r.defaultValue)??"",A=Uu(n,E,O),k=At.uniqueId();fi(k,A,n,!0)}c=0}function f(g){const h=tt(zt);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!Co(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=xs(m,I),Xt(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},i.onMove=g=>{if(!Mt(g.coord,o)){Zu.set(void 0);return}const m=za(g.coord),E=(r==null?void 0:r.defaultValue)??"",I=Uu(n,m,E),b=tt(Rs);b&&(I.shape={...b});const O=tt(gt),A=ih(O,n,m);let k="add",G;A&&c===0&&(k="remove",G=A[0]);const F={tool:I,match_id:G,mode:k};Zu.set(F)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}class E${constructor(){Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"onMove",null);Ce(this,"_prevCoord",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=Fa(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){const r=wn(e,n);if(!r)return;const i=Fa(r,this._margin);if(!i||this._prevCoord&&Ke(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=wn(e,n);if(!r)return;const i=Fa(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function C$(t,e,n,r){const i=new E$,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const h=tt(gt),m=g.coord,E=Wa(m);if(!E.every(O=>Mt(O,o)))return;let b=null;if(c===0&&(b=oh(h,n,m),c=b?2:1),b&&c===2){const O=b[0];Pi(O,b[1],n);return}else if(c===1){const O=Mu(n,E,r==null?void 0:r.defaultValue),A=At.uniqueId();fi(A,O,n,!0)}}function f(g){const h=tt(zt);if(!h)return;let m=h.constraint;const E=h.id;if(m.value===void 0||!Co(g)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(m==null?void 0:m.value,g.key);I!==void 0&&I!==m.value&&(m=xs(m,I),Xt(n,E,m))}return i.onDragStart=g=>{c=0,u(g),c=0},i.onMove=g=>{if(!Mt(g.coord,o)){Qu.set(void 0);return}const m=Wa(g.coord),E=Mu(n,m,r==null?void 0:r.defaultValue),I=tt(Rs);I&&(E.shape={...I});const b=tt(gt),O=oh(b,n,g.coord);let A="add",k;O&&c===0&&(A="remove",k=O[0]);const G={tool:E,match_id:k,mode:A};Qu.set(G)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{f(g)},keyUp:()=>{}}}class I${constructor(){Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"_prevType",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=wn(e,n);if(!r)return;const i=_s(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=wn(e,n);if(!r)return;const i=_s(r,Lt.CLOSEST);if(!i||this._prevCoords&&Ke(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&Yv(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=wn(e,n);if(!r)return;const i=_s(r,Lt.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&Ke(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function b$(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new I$;return r.onTap=o=>{const a=o.coords,c=tt(Xa),u=tt(Va);if(o.type==="cell center"){if(!Xx(a,n))return;const p=u.getCellMarker(a);if(p)if(p.marker==="X"){const g={...a,colorId:c,marker:"O"},h=Da(g),m=Da(p),E=wi(h,m);pn(E)}else{const g=_h(a),h=Da(p),m=wi(g,h);pn(m)}else{const g={...a,colorId:c,marker:"X"},h=Da(g),m=_h(a),E=wi(h,m);pn(E)}}else if(o.type==="edge"){const f=u.getEdgeMarker(a);if(f){const p=dh(a),g=uh(f),h=wi(p,g);pn(h)}else{const p={...a,colorId:c},g=uh(p),h=dh(a),m=wi(g,h);pn(m)}}},r.onDrag=o=>{const a=o.coords,c=tt(Xa);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},f=PT(u);Cr(f)}},r.onDragEnd=()=>{const o=tt(Va);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>ao(c,u)));if(a.length){const c=vs(a),u=fh(a),f=wi(c,u);pn(f)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>ao(c,u)));if(a.length){const c=fh(a),u=vs(a),f=wi(c,u);pn(f)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function O$(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function w$(t,e){const n=yv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function y$(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function L$(t){for(let e=0;;e++){const n=y$(e);if(!t.has(n))return n}}function A$(t,e,n){const r=new ko,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,f="cells2",p;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(p||(p={}));let g=0;function h(E){const I=tt(gt),b=E.cell;if(!Mt(E.cell,i))return;const A=bT(I,n,b);if(g===0&&(A?(c=A[0],o=A[1],g=2,u=b,f=o.cells2.some(G=>Ke(G,b))?"cells2":"cells"):g=1),g===1&&c===null){c=At.uniqueId();const k=OT(I,n),G=L$(k);o=O$(n,[b],G),_i(c,o);return}else if(g===1&&c&&o){o=w$(o,b),Xt(n,c,o);return}else if(g===2&&c&&o&&u){const k={r:b.r-u.r,c:b.c-u.c},F=(f==="cells2"?o.cells2:o.cells).map(P=>({r:P.r+k.r,c:P.c+k.c}));if(!F.every(P=>Mt(P,i)))return;f==="cells"?o={...o,cells:F}:o={...o,cells2:F},u=b,Xt(n,c,o)}}return r.onDragStart=E=>{c=null,o=null,g=0,u=null,h(E)},r.onDrag=E=>{h(E)},r.onDragEnd=()=>{c&&o&&(g===1?fi(c,o,n):g===2&&Ku(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==1&&(ki(n,c),c=null,o=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function S$(t){if(t.type===me.SELECTION)return function(n,r,i){return f$(n,r,i)};if(t.type===me.SINGLE_CELL){let e=function(r,i,o){return l$(r,i,o,n)};const n=t;return e}else if(t.type===me.SINGLE_CELL_ARROW){let e=function(r,i,o){return g$(r,i,o,n)};const n=t;return e}else if(t.type===me.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return v$(r,i,o,n)};const n=t;return e}else if(t.type===me.EDGE){let e=function(r,i,o){return m$(r,i,o,n)};const n=t;return e}else if(t.type===me.CORNER){let e=function(r,i,o){return C$(r,i,o,n)};const n=t;return e}else if(t.type===me.LINE){let e=function(r,i,o){return e$(r,i,o,n)};const n=t;return e}else if(t.type===me.ARROW){let e=function(r,i,o){return J8(r,i,o,n)};const n=t;return e}else if(t.type===me.CAGE){let e=function(r,i,o){return d$(r,i,o,n)};const n=t;return e}else{if(t.type===me.CLONE)return function(n,r,i){return A$(n,r,i)};if(t.type===me.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return c$(r,i,o,n)};const n=t;return e}else if(t.type===me.OUTSIDE_DIRECTION){let e=function(r,i,o){return u$(r,i,o,n)};const n=t;return e}else if(t.type===me.PEN)return function(n,r){return b$(n,r)}}}const bp=ai([_o,mn,Qt],([t,e,n])=>{const r=Ti(n,Pt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?S$(i):void 0;return o?o(t,e,n):void 0});var N$=ee('<path class="cursor svelte-zsq70u"></path>');function x$(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Qt,"$toolStore",n),i=()=>Ee(Di,"$selectionStore",n),o=N(),a=N(),c=.25;function u(p){if(!p)return"";const[g,h]=[p.c,p.r];return`M${g},${h}L${g+c},${h}L${g},${h+c}Z`}D(()=>r(),()=>{y(o,Od(r()))}),D(()=>i(),()=>{y(a,u(i().lastCell))}),we(),he();var f=N$();te(()=>{L(f,"d",_(a)),L(f,"visibility",_(o)?"visible":"hidden")}),S(t,f),ue()}var R$=ee('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function T$(t,e){ce(e,!1);let n=M(e,"gridShape",8);he();var r=R$(),i=V(r);L(i,"x",0),L(i,"y",0),B(r),te(()=>{L(i,"width",n().nCols),L(i,"height",n().nRows)}),S(t,r),ue()}var D$=ee('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),k$=ee('<g class="grid-lines"></g>');function G$(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(mn,"$gridStore",n),i=N();D(()=>r(),()=>{y(i,r().getAllCells())}),we(),he();var o=k$();et(o,5,()=>_(i),Ct,(a,c)=>{var u=D$();L(u,"width",1),L(u,"height",1),te(()=>{L(u,"x",_(c).c),L(u,"y",_(c).r)}),S(a,u)}),B(o),S(t,o),ue()}function M$(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function U$(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=M$(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],f=JSON.stringify(c),p=JSON.stringify(u);n(f,p)}}return e}function $$(t,e=0,n=!1){const r=[],i=U$(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let f=JSON.parse(c);const p=Array.from(u)[0];let g=JSON.parse(p),h=p;const m=[];do{const E=i.get(h);if(E===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new Te(f.c,f.r),b=new Te(g.c,g.r);let O=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,k=null;for(const re of E){const ge=JSON.parse(re),oe=new Te(ge.c,ge.r),pe=b.subtract(I),Ne=oe.subtract(b),xe=pe.perpDotProduct(Ne);O<xe!=n&&(O=xe,k=ge,A=re)}if(n&&E.size>1&&o.add(h),k===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(h);const G=e*(g.c-f.c),F=e*(k.c-g.c),z=e*(f.r-g.r),P=e*(g.r-k.r),j=P+O*F,J=G+O*z,ae=new Te(g.c+j,g.r+J),Q=4;o.has(h)?(m.push(new Te(ae.x-Q*G,ae.y-Q*F)),m.push(new Te(ae.x-Q*z,ae.y-Q*P))):m.push(ae),f=g,g=k,h=A}while(h!==p);r.push(m)}return r}function ho(t,e=0,n=!1){return $$(t,e,n).map(o=>Go(o,!0)).join("")}const F$=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5)];function P$(t,e,n=F$){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,f=c/(360/i),p=u/(360/i),g=Math.floor(f)%i,h=Math.ceil(f)%i,m=n[g].lerp(n[h],f%1),E=Math.floor(p)%i,I=Math.ceil(p)%i,b=n[E].lerp(n[I],p%1);r.push(m);for(let A=Math.ceil(f);A<=Math.floor(p);A++)r.push(n[A%i]);r.push(b);const O=new Te(0,0);return r.push(O),r}function Op(t,e,n=new Te(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const f=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),p=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Te(f,p));c.push(g)}return c}function Go(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function oi(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(p=>new Te(p.x,p.y));if(r&&o.length>1){const p=o[o.length-1];for(let h=0;h<o.length-1;h++)if(p.equals(o[h])){o.push(o[h+1]);break}const g=o[0];for(let h=1;h<o.length;h++)if(g.equals(o[h])){o.unshift(o[h-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let p=o[1].subtract(o[0]);p=p.normalise(),p=p.scale(e),o[0]=o[0].add(p)}if(n){const p=o.length;let g=o[p-2].subtract(o[p-1]);g=g.normalise(),g=g.scale(n),o[p-1]=o[p-1].add(g)}}if(!i)return Go(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let p=2;p<u;p++){const g=o[p-2],h=o[p-1],m=o[p];let E=g.subtract(h).normalise();E=E.scale(i),E=E.add(h);let I=m.subtract(h).normalise();I=I.scale(i),I=I.add(h),c.push(`L${E.x},${E.y} Q ${h.x},${h.y} ${I.x},${I.y}`)}const f=o[u-1];return c.push(`L${f.x},${f.y}`),c.join(" ")}function Qa(t,e={}){const n=kl(t);return oi(n,e)}function tr(t){return new Te(t.c+.5,t.r+.5)}function kl(t){return t.map(n=>tr(n))}const H$=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5),new Te(0,-.5),new Te(0,.5),new Te(-.5,0),new Te(.5,0)];function B$(t,e){const n=H$[t];return n.subtract(n.scale(e))}function wp(t,e){const n=[new Te(t.c-e,t.r-e),new Te(t.c+e,t.r+e)],r=[new Te(t.c-e,t.r+e),new Te(t.c+e,t.r-e)];return[n,r].map(o=>Go(o,!1)).join("")}const W$=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Gl(t,e="none"){return W$.get(t)||e}function z$(t,e,n){let r=[];function o(c,u){return c.map(f=>f.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Te(-.12,-.32),new Te(0,-.4),new Te(.12,-.32)]:a=[new Te(-.12,-.4),new Te(0,-.32),new Te(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const f=new Te(n+.5,e+.5);return u.add(f)})),r}function r_(t,e){const n=[new Te(-t,0),new Te(0,0),new Te(0,t)],i={[Fe.NE]:0,[Fe.E]:Math.PI/4,[Fe.SE]:Math.PI/2,[Fe.S]:3*Math.PI/4,[Fe.SW]:Math.PI,[Fe.W]:5*Math.PI/4,[Fe.NW]:3*Math.PI/2,[Fe.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}function Y$(t,e){const r=As(e),i=new Te(r.c,r.r).normalise().scale(.3),o=tr(t),a=o.subtract(i),c=o.add(i);return[a,c]}function j$(t,e){const r=Y$(t,e);let i=r_(.2,e);i=i.map(u=>u.add(r[1]));const o=oi(r),a=oi(i);return o+a}function K$(t,e){const r=As(e),i=new Te(r.c,r.r),a=tr(t).add(i.scale(.4));return[a.subtract(i.normalise().scale(.2)),a]}function pu(t,e){const r=K$(t,e);let i=r_(.1,e);i=i.map(u=>u.add(r[1]));const o=oi(r),a=oi(i);return o+a}var V$=ee('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),X$=ee('<g class="regions-border"></g>');function q$(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Qn,"$cellsStore",n),i=N(),o=N();function a(u,f){return u.filter(h=>h.region===f).map(h=>({r:h.r,c:h.c}))}D(()=>r(),()=>{y(i,r())}),D(()=>_(i),()=>{y(o,new Set(_(i).map(u=>u.region).filter(u=>u!==null)))}),we(),he();var c=X$();et(c,5,()=>_(o),Ct,(u,f)=>{var p=V$();te(()=>L(p,"d",ho(a(_(i),_(f)),0,!1))),te(()=>L(p,"id",`region-${_(f)??""}`)),S(u,p)}),B(c),S(t,c),ue()}var Z$=ee('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function Q$(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Di,"$selectionStore",n),i=()=>Ee(Qt,"$toolStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),p=N();let g=M(e,"boundingBox",8);const h=.06,m=.05,E="#080808",I="#b2b2b2";D(()=>Z(g()),()=>{y(o,g().x)}),D(()=>Z(g()),()=>{y(a,g().y)}),D(()=>r(),()=>{y(c,r().cells)}),D(()=>_(c),()=>{y(u,ho(_(c),0))}),D(()=>_(c),()=>{y(f,ho(_(c),h))}),D(()=>i(),()=>{y(p,Od(i()))}),we(),he();var b=Z$(),O=V(b),A=V(O);L(A,"stdDeviation",m),Ni(),B(O);var k=U(O),G=V(k);L(G,"fill",I);var F=U(G);L(F,"fill",E),B(k);var z=U(k);B(b),te(()=>{L(b,"visibility",_(p)?"visible":"hidden"),L(k,"x",_(o)),L(k,"y",_(a)),L(G,"x",_(o)),L(G,"y",_(a)),L(F,"d",_(f)),L(z,"d",_(u))}),S(t,b),ue()}var J$=ee('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function eF(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"grid",8);D(()=>Z(i()),()=>{y(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>_(n),()=>{y(r,ho(_(n),0))}),we(),he();var o=J$(),a=V(o);B(o),te(()=>L(a,"d",_(r))),S(t,o),ue()}function tF(t,e){const n=t.getRow(e.r);return new Set(n)}function nF(t,e){const n=t.getCol(e.c);return new Set(n)}function rF(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function iF(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function oF(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function sF(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function aF(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function lF(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function cF(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),f=c.findIndex(g=>g===e);if(f!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((h,m)=>m!==f);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function uF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function dF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function _F(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(iF(t,i))),e.get(d.ANTIKING)&&(r=r.union(oF(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(sF(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(lF(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(aF(t,i)))),r}function mu(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=dF(t,n,c);i=new Set([...i,...u])}return i}function fF(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],f=cF(t,i,u);r=new Set([...r,...f])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],f=uF(t,i,u);r=new Set([...r,...f])}return r=mu(t,e,i,d.KILLER_CAGE,r),r=mu(t,e,i,d.PARITY_BALANCE_CAGE,r),r=mu(t,e,i,d.SPOTLIGHT_CAGE,r),r}function yp(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...tF(i,e),...nF(i,e),...rF(i,e)])),n=new Set([...n,..._F(i,r,e)]),n=new Set([...n,...fF(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function gF(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(yp(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var hF=ee('<tspan class="svelte-xct9ah"> </tspan>'),vF=ee('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function pF(t,e){ce(e,!1);const n=N();let r=M(e,"cell",8),i=M(e,"seen_values",8);const o=.25;function a(p){return i().find(h=>h===p)!==void 0}D(()=>Z(r()),()=>{y(n,tr({r:r().r,c:r().c}))}),we(),he();var c=ye(),u=se(c);{var f=p=>{var g=vF(),h=V(g);L(h,"font-size",o),et(h,5,()=>r().centerMarks,Ct,(m,E)=>{var I=hF();const b=Qe(()=>a(_(E)));te(()=>yt(I,"conflict",_(b)));var O=V(I,!0);B(I),te(()=>at(O,_(E))),S(m,I)}),B(h),B(g),te(()=>{L(h,"x",_(n).x),L(h,"y",_(n).y),L(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),S(p,g)};ne(u,p=>{r().centerMarks.length&&p(f)})}S(t,c),ue()}var mF=ee('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),EF=ee('<g class="corner-marks-group"></g>');function CF(t,e){ce(e,!1);let n=M(e,"cell",8),r=M(e,"seen_values",8);const i=.25,o=.28;function a(g){const h=g.cornerMarks.slice(0,8),m=tr({r:g.r,c:g.c});return h.map((E,I)=>{const b=B$(I,o);return{pos:m.add(b),value:E,idx:I}})}function c(g){return r().find(m=>m===g)!==void 0}he();var u=ye(),f=se(u);{var p=g=>{var h=EF();et(h,5,()=>a(n()),Ct,(m,E)=>{let I=()=>_(E).pos,b=()=>_(E).value;var O=mF();L(O,"font-size",i);const A=Qe(()=>c(b()));var k=V(O,!0);B(O),te(()=>{L(O,"x",I().x),L(O,"y",I().y),yt(O,"conflict",_(A)),at(k,b())}),S(m,O)}),B(h),S(g,h)};ne(f,g=>{n().cornerMarks.length&&g(p)})}S(t,u),ue()}var IF=ee('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),bF=ee('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),OF=ee("<!><!>",1),wF=ee('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function yF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(si,"$settingsStore",n),i=()=>Ee(Ts,"$puzzleStore",n),o=()=>Ee(Qt,"$toolStore",n),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N();let m=M(e,"cell",8);const E=.8,I=400;function b(G,F){if(!G)return[];let P=[...yp(_(p),F.toCoords())].map(j=>j.value).filter(j=>j!==null);return P=[...new Set(P)],P}D(()=>Z(m()),()=>{y(a,m().value)}),D(()=>Z(m()),()=>{y(c,m().given)}),D(()=>Z(m()),()=>{y(u,tr({r:m().r,c:m().c}))}),D(()=>r(),()=>{y(f,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{y(p,i())}),D(()=>r(),()=>{y(g,r().showSolution)}),D(()=>(_(f),Z(m())),()=>{y(h,b(_(f),m()))}),we(),he();var O=ye(),A=se(O);{var k=G=>{var F=wF(),z=V(F);{var P=J=>{var ae=ye(),Q=se(ae);{var re=ge=>{var oe=IF();L(oe,"font-size",E),L(oe,"font-weight",I);var pe=V(oe,!0);B(oe),te(()=>{L(oe,"x",_(u).x),L(oe,"y",_(u).y),at(pe,m().region)}),S(ge,oe)};ne(Q,ge=>{m().region!==null&&ge(re)})}S(J,ae)},j=J=>{var ae=ye(),Q=se(ae);{var re=oe=>{var pe=bF();L(pe,"font-size",E),L(pe,"font-weight",I);var Ne=V(pe,!0);B(pe),te(()=>{L(pe,"x",_(u).x),L(pe,"y",_(u).y),yt(pe,"given",_(c)),at(Ne,_(a))}),S(oe,pe)},ge=oe=>{var pe=OF(),Ne=se(pe);CF(Ne,{get cell(){return m()},get seen_values(){return _(h)}});var xe=U(Ne);pF(xe,{get cell(){return m()},get seen_values(){return _(h)}}),S(oe,pe)};ne(Q,oe=>{_(a)!==null?oe(re):oe(ge,!1)},!0)}S(J,ae)};ne(z,J=>{o()===d.REGIONS?J(P):J(j,!1)})}B(F),te(()=>yt(F,"hide-given",m().given)),S(G,F)};ne(A,G=>{_(g)||G(k)})}S(t,O),ue()}var LF=ee("<path></path>"),AF=ee('<g class="highlights-group"></g>');function SF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Qt,"$toolStore",n);let i=M(e,"cell",8);function o(f){const p=tr({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let I=P$(E,g);I=I.map(O=>O.add(p));const b=Go(I,!0);return{colorId:m,d:b}})}he();var a=ye(),c=se(a);{var u=f=>{var p=ye(),g=se(p);{var h=m=>{var E=AF();et(E,5,()=>o(i()),Ct,(I,b)=>{let O=()=>_(b).colorId,A=()=>_(b).d;var k=LF();te(()=>{Es(k,`highlight-wedge color-${O()??""} svelte-1ynpdsm`),L(k,"d",A())}),S(I,k)}),B(E),S(m,E)};ne(g,m=>{i().highlights.length&&m(h)})}S(f,p)};ne(c,f=>{r()!==d.REGIONS&&f(u)})}S(t,a),ue()}var NF=ee('<path class="cell-marker" fill="none"></path>'),xF=ee('<circle fill="none" opacity="0.9"></circle>');function RF(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"marker",8);const o=.3,a=.08;D(()=>Z(i()),()=>{y(n,wp(i(),o))}),D(()=>Z(i()),()=>{y(r,Gl(i().colorId,"black"))}),we(),he();var c=ye(),u=se(c);{var f=g=>{var h=NF();L(h,"stroke-width",a),te(()=>{L(h,"d",_(n)),L(h,"stroke",_(r))}),S(g,h)},p=g=>{var h=xF();L(h,"r",o),L(h,"stroke-width",a),te(()=>{Es(h,`cell-marker color-${i().colorId??""}`),L(h,"cx",i().c),L(h,"cy",i().r),L(h,"stroke",_(r))}),S(g,h)};ne(u,g=>{i().marker==="X"?g(f):g(p,!1)})}S(t,c),ue()}var TF=ee('<g class="cell-markers"></g>');function DF(t,e){let n=M(e,"markers",8);var r=TF();et(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{RF(i,{get marker(){return _(o)}})}),B(r),S(t,r)}var kF=ee('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function GF(t,e){ce(e,!1);const n=N();let r=M(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(p=>[new Te(p.p1.c,p.p1.r),new Te(p.p2.c,p.p2.r)]).flat()}function a(u){const f=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Gl(f,"black"):"darkred"}D(()=>Z(r()),()=>{y(n,Go(o(r().draftLine)))}),we(),he();var c=kF();te(()=>L(c,"stroke",a(r()))),L(c,"stroke-width",i),L(c,"opacity",.5),te(()=>L(c,"d",_(n))),S(t,c),ue()}var MF=ee('<path fill="none" opacity="0.9"></path>');function UF(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"marker",8);const o=.08,a=.04;D(()=>Z(i()),()=>{y(n,wp(i(),o))}),D(()=>Z(i()),()=>{y(r,Gl(i().colorId,"black"))}),we(),he();var c=MF();L(c,"stroke-width",a),te(()=>{L(c,"d",_(n)),Es(c,`edge-marker color-${i().colorId??""}`),L(c,"stroke",_(r))}),S(t,c),ue()}var $F=ee('<g class="edge-markers"></g>');function FF(t,e){let n=M(e,"markers",8);var r=$F();et(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{UF(i,{get marker(){return _(o)}})}),B(r),S(t,r)}var PF=ee('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),HF=ee('<g class="line-markers svelte-yha19m"></g>');function BF(t,e){ce(e,!1);let n=M(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return Gl(c,"black")}he();var a=HF();et(a,5,n,c=>i(c),(c,u)=>{var f=PF();L(f,"stroke-width",r),te(()=>L(f,"stroke",o(_(u).colorId))),te(()=>{L(f,"x1",_(u).p1.c),L(f,"y1",_(u).p1.r),L(f,"x2",_(u).p2.c),L(f,"y2",_(u).p2.r),Es(f,`line-marker color-${_(u).colorId??""} svelte-yha19m`)}),S(c,f)}),B(a),S(t,a),ue()}var WF=ee('<g class="pen-tool"><!><!><!><!></g>');function zF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Va,"$penToolStore",n),i=N();D(()=>r(),()=>{y(i,{draftLine:r().draftLine,mode:r().mode})}),we(),he();var o=WF(),a=V(o);BF(a,{get lineMarkers(){return r().lineMarkers}});var c=U(a);FF(c,{get markers(){return r().edgeMarkers}});var u=U(c);DF(u,{get markers(){return r().cellMarkers}});var f=U(u);GF(f,{get draftLineMarker(){return _(i)}}),B(o),S(t,o),ue()}var YF=ee("<path></path>");function Tr(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let p=M(e,"cells",8),g=M(e,"shape",8,wd);const h="square";D(()=>Z(g()),()=>{y(n,g().inset??.06)}),D(()=>Z(g()),()=>{y(r,g().stroke??"black")}),D(()=>Z(g()),()=>{y(i,g().strokeWidth??.03)}),D(()=>Z(g()),()=>{y(o,g().strokeDasharray??.08)}),D(()=>Z(g()),()=>{y(a,g().fill??"none")}),D(()=>Z(g()),()=>{y(c,g().connectDiag??!0)}),D(()=>(Z(p()),_(n),_(c)),()=>{y(u,ho(p(),_(n),_(c)))}),D(()=>Z(g()),()=>{y(f,g().strokeLinejoin??"miter")}),we(),he();var m=YF();L(m,"stroke-linecap",h),te(()=>{L(m,"d",_(u)),L(m,"stroke",_(r)),L(m,"stroke-width",_(i)),L(m,"fill",_(a)),L(m,"stroke-dasharray",_(o)),L(m,"stroke-linejoin",_(f))}),S(t,m),ue()}var jF=ee('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function KF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Di,"$selectionStore",n),i=()=>Ee(si,"$settingsStore",n),o=()=>Ee(Ts,"$puzzleStore",n),a=()=>Ee(Qt,"$toolStore",n),c=N(),u=N(),f=N(),p=N(),g={type:W.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,O){return b.length?gF(_(f),b):[]}D(()=>r(),()=>{y(c,r().cells)}),D(()=>i(),()=>{y(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(p,Od(a()))}),we(),he();var m=ye(),E=se(m);{var I=b=>{var O=jF(),A=V(O),k=Qe(()=>h(_(c),_(f)));Tr(A,{get cells(){return _(k)},shape:g}),B(O),S(b,O)};ne(E,b=>{_(u)&&_(p)&&b(I)})}S(t,m),ue()}function Ml(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...Bv(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function VF(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Ml(r))}return new Set(e)}function XF(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Ml(r))}return new Set(e)}function qF(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Ml(r))}return new Set(e)}function ZF(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function QF(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function JF(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function eP(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Ml(i);o.length&&e.push(...o)}return new Set(e)}function tP(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...VF(t),...XF(t),...qF(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(ZF(t))),e.get(d.ANTIKING)&&(n=n.union(QF(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(JF(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(eP(t))),n}function nP(t,e){return[...new Set([...tP(t,e)])]}var rP=ee('<rect class="conflict svelte-4mp6ok"></rect>'),iP=ee('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function oP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(si,"$settingsStore",n),i=()=>Ee(mn,"$gridStore",n),o=()=>Ee(Fr,"$globalConstraintsStore",n),a=()=>Ee(Qn,"$cellsStore",n),c=N(),u=N(),f=N(),p=N();W.CAGE;function g(I){return nP(_(u),_(f)).map(A=>A.toCoords())}D(()=>r(),()=>{y(c,r().checkConflicts)}),D(()=>i(),()=>{y(u,i())}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(p,a())}),we(),he();var h=ye(),m=se(h);{var E=I=>{var b=iP();et(b,5,()=>g(_(p)),Ct,(O,A)=>{var k=rP();L(k,"width",1),L(k,"height",1),te(()=>{L(k,"x",_(A).c),L(k,"y",_(A).r)}),S(O,k)}),B(b),S(I,b)};ne(m,I=>{_(c)&&I(E)})}S(t,h),ue()}var sP=ee('<line class="diag svelte-ylotlw"></line>'),aP=ee('<line class="antidiag svelte-ylotlw"></line>'),lP=ee('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),cP=ee('<line class="diag svelte-ylotlw"></line>'),uP=ee('<line class="antidiag svelte-ylotlw"></line>'),dP=ee('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),_P=ee('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function fP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Fr,"$globalConstraintsStore",n),i=()=>Ee(mn,"$gridStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N(),m=N(),E=N(),I=N(),b=N(),O=0,A=0,k=0,G=0;D(()=>r(),()=>{y(o,r())}),D(()=>(_(o),d),()=>{y(a,!!_(o).get(d.POSITIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(c,!!_(o).get(d.NEGATIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(u,!!_(o).get(d.NEGATIVE_ANTIDIAGONAL))}),D(()=>(_(o),d),()=>{y(f,!!_(o).get(d.POSITIVE_ANTIDIAGONAL))}),D(()=>(_(o),d),()=>{y(p,!!_(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(g,!!_(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),D(()=>i(),()=>{y(h,i())}),D(()=>_(h),()=>{y(m,_(h).nCols)}),D(()=>_(h),()=>{y(E,_(h).nRows)}),D(()=>_(h),()=>{y(I,_(h).nCols)}),D(()=>_(h),()=>{y(b,_(h).nRows)}),we(),he();var F=_P(),z=V(F);{var P=Oe=>{var Ie=sP();L(Ie,"x1",O),L(Ie,"y1",A),te(()=>{L(Ie,"x2",_(I)),L(Ie,"y2",_(b))}),S(Oe,Ie)};ne(z,Oe=>{_(c)&&Oe(P)})}var j=U(z);{var J=Oe=>{var Ie=aP();L(Ie,"x1",O),L(Ie,"y1",A),te(()=>{L(Ie,"x2",_(I)),L(Ie,"y2",_(b))}),S(Oe,Ie)};ne(j,Oe=>{_(u)&&Oe(J)})}var ae=U(j);{var Q=Oe=>{var Ie=lP();L(Ie,"x1",O),L(Ie,"y1",A),te(()=>{L(Ie,"x2",_(I)),L(Ie,"y2",_(b))}),S(Oe,Ie)};ne(ae,Oe=>{_(p)&&Oe(Q)})}var re=U(ae);{var ge=Oe=>{var Ie=cP();L(Ie,"x2",G),L(Ie,"y1",k),te(()=>{L(Ie,"x1",_(m)),L(Ie,"y2",_(E))}),S(Oe,Ie)};ne(re,Oe=>{_(a)&&Oe(ge)})}var oe=U(re);{var pe=Oe=>{var Ie=uP();L(Ie,"x2",G),L(Ie,"y1",k),te(()=>{L(Ie,"x1",_(m)),L(Ie,"y2",_(E))}),S(Oe,Ie)};ne(oe,Oe=>{_(f)&&Oe(pe)})}var Ne=U(oe);{var xe=Oe=>{var Ie=dP();L(Ie,"x2",G),L(Ie,"y1",k),te(()=>{L(Ie,"x1",_(m)),L(Ie,"y2",_(E))}),S(Oe,Ie)};ne(Ne,Oe=>{_(g)&&Oe(xe)})}B(F),S(t,F),ue()}var gP=ee('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1cxyg7s"><use class="fog-edge-1 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-2 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-3 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-4 svelte-1cxyg7s" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1cxyg7s"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1cxyg7s"><rect class="fog-mask-white svelte-1cxyg7s"></rect><g class="fog-mask-black svelte-1cxyg7s"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1cxyg7s"></rect><rect class="fog-mask-black svelte-1cxyg7s" mask="url(#fog-mask-fog)"></rect></mask></defs>');function hP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Zv,"$showFogStore",n),i=()=>Ee(Il,"$solutionStore",n),o=()=>Ee(mn,"$gridStore",n),a=()=>Ee(Ip,"$fogLightsStore",n),c=N(),u=N(),f=N(),p=N(),g=N(),h=N();let m=M(e,"boundingBox",8),E=M(e,"gridShape",8);function I(oe){const pe=[];if(!oe)return pe;for(const Ne of Object.entries(oe)){const xe=Ne[1].cell,Oe=_(f).getCell(xe.r,xe.c);Oe&&pe.push(Oe)}return pe}function b(oe,pe){const Ne=I(pe);return[...oe.getAllCells().filter(je=>!Ne.includes(je))].map(je=>je.toCoords())}D(()=>r(),()=>{y(c,r())}),D(()=>i(),()=>{y(u,i())}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(p,a())}),D(()=>(_(f),_(p)),()=>{y(g,b(_(f),_(p)))}),D(()=>_(g),()=>{y(h,ho(_(g),0))}),we(),he();var O=gP(),A=V(O),k=V(A);B(A);var G=U(A),F=V(G);L(F,"stroke-width",.4);var z=U(F);L(z,"stroke-width",.3);var P=U(z);L(P,"stroke-width",.2);var j=U(P);L(j,"stroke-width",.1),Ni(),B(G);var J=U(G),ae=V(J);Ni(),B(J);var Q=U(J),re=V(Q),ge=U(re);L(ge,"x",0),L(ge,"y",0),B(Q),B(O),te(()=>{L(k,"d",_(h)),yt(G,"disabled",!_(c)),yt(J,"disabled",!_(c)),L(ae,"x",m().x),L(ae,"y",m().y),L(ae,"width",m().width),L(ae,"height",m().height),L(re,"x",m().x),L(re,"y",m().y),L(re,"width",m().width),L(re,"height",m().height),L(ge,"width",E().nCols),L(ge,"height",E().nRows)}),S(t,O),ue()}var vP=ee('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function pP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Zv,"$showFogStore",n),i=N();let o=M(e,"gridShape",8);D(()=>r(),()=>{y(i,r())}),we(),he();var a=vP(),c=V(a);L(c,"x",0),L(c,"y",0),B(a),te(()=>{L(a,"visibility",_(i)?"visible":"hidden"),L(c,"width",o().nCols),L(c,"height",o().nRows)}),S(t,a),ue()}var mP=ee('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function EP(t,e){ce(e,!1);const n=N();let r=M(e,"r",8),i=M(e,"c",8),o=M(e,"val",8);const a=.8,c=400;D(()=>(Z(r()),Z(i())),()=>{y(n,tr({r:r(),c:i()}))}),we(),he();var u=ye(),f=se(u);{var p=g=>{var h=mP();L(h,"font-size",a),L(h,"font-weight",c);var m=V(h,!0);B(h),te(()=>{L(h,"x",_(n).x),L(h,"y",_(n).y),at(m,o())}),S(g,h)};ne(f,g=>{o()!==null&&g(p)})}S(t,u),ue()}var CP=ee('<g class="solution-layer"></g>');function IP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Il,"$solutionStore",n),i=()=>Ee(si,"$settingsStore",n),o=()=>Ee(Cl,"$gameModeStore",n),a=N(),c=N(),u=N();D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i().showSolution)}),D(()=>o(),()=>{y(u,o())}),we(),he();var f=ye(),p=se(f);{var g=h=>{var m=CP();et(m,5,()=>_(a),Ct,(E,I,b)=>{var O=ye(),A=se(O);et(A,1,()=>_(I),Ct,(k,G,F)=>{EP(k,{r:b,c:F,get val(){return _(G)}})}),S(E,O)}),B(m),S(h,m)};ne(p,h=>{_(a)&&_(c)&&_(u)===vo.SETTING&&h(g)})}S(t,f),ue()}var bP=ee('<g class="element-group"></g>'),OP=ee('<g mask="url(#fog-mask-fog)"></g>');function Ga(t,e){let n=M(e,"elements",8),r=M(e,"g_name",8),i=M(e,"Component",8);var o=OP();et(o,5,n,Ct,(a,c)=>{let u=()=>_(c).toolId,f=()=>_(c).constraints;var p=bP();et(p,5,()=>Object.entries(f()),g=>g[0],(g,h)=>{i()(g,{get tool(){return _(h)[1]},get c_id(){return _(h)[0]}})}),B(p),te(()=>L(p,"data-toolId",u())),S(a,p)}),B(o),te(()=>Es(o,nw(r()))),S(t,o)}var wP=ee('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),yP=ee('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),LP=ee('<g class="quadruple-text"><!></g>');function AP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"cornerTool",8);const u=c().cells,f=new Te(u[u.length-1].c,u[u.length-1].r),p=dn(c().toolId,Pt)??Su;D(()=>Z(c()),()=>{y(n,c().value)}),D(()=>Z(c()),()=>{y(r,c().shape??p)}),D(()=>_(r),()=>{var E;y(i,((E=_(r))==null?void 0:E.fontSize)??.2)}),D(()=>_(r),()=>{var E;y(o,((E=_(r))==null?void 0:E.fontColor)??"black")}),D(()=>_(n),()=>{var E;y(a,_(n)?(E=_(n))==null?void 0:E.split(","):[])}),we(),he();var g=ye(),h=se(g);{var m=E=>{var I=LP(),b=V(I);{var O=k=>{var G=wP(),F=V(G,!0);te(()=>at(F,_(a).join(" "))),B(G),te(()=>{L(G,"x",f.x),L(G,"y",f.y),L(G,"font-size",_(i)),L(G,"fill",_(o))}),S(k,G)},A=k=>{var G=yP(),F=se(G),z=V(F,!0);te(()=>at(z,_(a).slice(0,2).join(" "))),B(F);var P=U(F),j=V(P,!0);te(()=>at(j,_(a).slice(2).join(" "))),B(P),te(()=>{L(F,"x",f.x),L(F,"y",f.y),L(F,"dy",-_(i)/2),L(F,"font-size",_(i)),L(F,"fill",_(o)),L(P,"x",f.x),L(P,"y",f.y),L(P,"dy",_(i)/2),L(P,"font-size",_(i)),L(P,"fill",_(o))}),S(k,G)};ne(b,k=>{_(a).length<=2?k(O):k(A,!1)})}B(I),te(()=>L(I,"data-count",_(a).length)),S(E,I)};ne(h,E=>{_(n)&&E(m)})}S(t,g),ue()}var SP=ee("<circle></circle>");function lr(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"x",8),f=M(e,"y",8),p=M(e,"shape",8);D(()=>Z(p()),()=>{y(n,p().r??.35)}),D(()=>Z(p()),()=>{y(r,p().stroke??"black")}),D(()=>Z(p()),()=>{var h;y(i,(h=p())==null?void 0:h.opacity)}),D(()=>Z(p()),()=>{y(o,p().strokeWidth??.02)}),D(()=>Z(p()),()=>{y(a,p().fill??"none")}),D(()=>Z(p()),()=>{y(c,p().strokeDasharray??0)}),we(),he();var g=SP();te(()=>{L(g,"cx",u()),L(g,"cy",f()),L(g,"r",_(n)),L(g,"stroke",_(r)),L(g,"stroke-width",_(o)),L(g,"fill",_(a)),L(g,"opacity",_(i)),L(g,"stroke-dasharray",_(c))}),S(t,g),ue()}var NP=ee("<ellipse></ellipse>");function xP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=M(e,"cx",8),p=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{y(n,g().width??.5)}),D(()=>Z(g()),()=>{y(r,g().height??.5)}),D(()=>Z(g()),()=>{y(i,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;y(o,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{y(a,g().strokeWidth??.02)}),D(()=>Z(g()),()=>{y(c,g().fill??"none")}),D(()=>Z(g()),()=>{y(u,g().angle??0)}),we(),he();var h=NP();te(()=>{L(h,"cx",f()),L(h,"cy",p()),L(h,"rx",_(n)/2),L(h,"ry",_(r)/2),L(h,"stroke",_(i)),L(h,"stroke-width",_(a)),L(h,"fill",_(c)),L(h,"opacity",_(o)),L(h,"transform",`rotate(${_(u)}, ${f()}, ${p()} )`)}),S(t,h),ue()}var RP=ee("<polygon></polygon>");function Ja(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let p=M(e,"cx",8),g=M(e,"cy",8),h=M(e,"shape",8);D(()=>Z(h()),()=>{y(n,h().n??3)}),D(()=>Z(h()),()=>{y(r,h().r??.5)}),D(()=>(_(r),_(n),Z(p()),Z(g())),()=>{y(i,Op(_(r),_(n),new Te(p(),g())))}),D(()=>_(i),()=>{y(o,_(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>Z(h()),()=>{y(a,h().stroke??"black")}),D(()=>Z(h()),()=>{y(c,h().strokeWidth??.02)}),D(()=>Z(h()),()=>{y(u,h().fill??"none")}),D(()=>Z(h()),()=>{y(f,h().angle??0)}),we(),he();var m=RP();te(()=>{L(m,"points",_(o)),L(m,"stroke",_(a)),L(m,"stroke-width",_(c)),L(m,"fill",_(u)),L(m,"transform",`rotate(${_(f)}, ${p()}, ${g()} )`)}),S(t,m),ue()}var TP=ee("<rect></rect>");function DP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=M(e,"cx",8),p=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{y(n,g().width??.5)}),D(()=>Z(g()),()=>{y(r,g().height??.5)}),D(()=>(Z(f()),_(n)),()=>{y(i,f()-_(n)/2)}),D(()=>(Z(p()),_(r)),()=>{y(o,p()-_(r)/2)}),D(()=>Z(g()),()=>{y(a,g().stroke||"black")}),D(()=>Z(g()),()=>{y(c,g().strokeWidth||.023)}),D(()=>Z(g()),()=>{y(u,g().fill||"none")}),we(),he();var h=TP();te(()=>{L(h,"x",_(i)),L(h,"y",_(o)),L(h,"width",_(n)),L(h,"height",_(r)),L(h,"stroke",_(a)),L(h,"stroke-width",_(c)),L(h,"fill",_(u))}),S(t,h),ue()}var kP=ee("<rect></rect>");function GP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N();let m=M(e,"cx",8),E=M(e,"cy",8),I=M(e,"shape",8);D(()=>Z(I()),()=>{y(n,I().r??.5)}),D(()=>(Z(m()),_(n)),()=>{y(r,m()-_(n))}),D(()=>(Z(E()),_(n)),()=>{y(i,E()-_(n))}),D(()=>_(n),()=>{y(o,2*_(n))}),D(()=>_(n),()=>{y(a,2*_(n))}),D(()=>Z(I()),()=>{y(c,I().stroke??"black")}),D(()=>Z(I()),()=>{y(u,I().strokeWidth??.02)}),D(()=>Z(I()),()=>{y(f,I().fill??"none")}),D(()=>Z(I()),()=>{y(p,I().angle??0)}),D(()=>Z(I()),()=>{y(g,I().strokeDasharray??0)}),D(()=>Z(I()),()=>{y(h,I().opacity??1)}),we(),he();var b=kP();te(()=>{L(b,"x",_(r)),L(b,"y",_(i)),L(b,"width",_(o)),L(b,"height",_(a)),L(b,"stroke",_(c)),L(b,"stroke-width",_(u)),L(b,"fill",_(f)),L(b,"transform",`rotate(${_(p)}, ${m()}, ${E()})`),L(b,"stroke-dasharray",_(g)),L(b,"opacity",_(h))}),S(t,b),ue()}function Er(t,e){ce(e,!1);const n=N();let r=M(e,"cx",8),i=M(e,"cy",8),o=M(e,"shape",8);D(()=>(Z(o()),W),()=>{var p;y(n,((p=o())==null?void 0:p.type)??W.CIRCLE)}),we(),he();var a=ye(),c=se(a);{var u=p=>{lr(p,{get x(){return r()},get y(){return i()},get shape(){return o()}})},f=p=>{var g=ye(),h=se(g);{var m=I=>{xP(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var b=ye(),O=se(b);{var A=G=>{GP(G,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},k=G=>{var F=ye(),z=se(F);{var P=J=>{DP(J,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},j=J=>{var ae=ye(),Q=se(ae);{var re=oe=>{Ja(oe,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},ge=oe=>{lr(oe,{get x(){return r()},get y(){return i()},get shape(){return o()}})};ne(Q,oe=>{_(n)===W.POLYGON?oe(re):oe(ge,!1)},!0)}S(J,ae)};ne(z,J=>{_(n)===W.RECTANGLE?J(P):J(j,!1)},!0)}S(G,F)};ne(O,G=>{_(n)===W.SQUARE?G(A):G(k,!1)},!0)}S(I,b)};ne(h,I=>{_(n)===W.ELLIPSE?I(m):I(E,!1)},!0)}S(p,g)};ne(c,p=>{_(n)===W.CIRCLE?p(u):p(f,!1)})}S(t,a),ue()}var MP=ee('<text text-anchor="middle" dominant-baseline="central"> </text>'),UP=ee('<g class="corner-tool"><!><!><!></g>');function Lp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function I(k,G){return G===W.TEXT_ONLY?k.value?k.value:"-":k.value??""}D(()=>r(),()=>{var k;y(i,(k=r())==null?void 0:k.id)}),D(()=>(Z(m()),Su),()=>{y(o,dn(m().toolId,Pt)??Su)}),D(()=>(Z(m()),_(o)),()=>{y(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var k;y(c,((k=_(a))==null?void 0:k.type)??W.CIRCLE)}),D(()=>_(a),()=>{var k;y(u,((k=_(a))==null?void 0:k.fontSize)??.2)}),D(()=>_(a),()=>{var k;y(f,((k=_(a))==null?void 0:k.fontColor)??"black")}),D(()=>_(a),()=>{y(p,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(m()),()=>{y(g,m().cells)}),D(()=>_(g),()=>{y(h,new Te(_(g)[_(g).length-1].c,_(g)[_(g).length-1].r))}),we(),he();var b=ye(),O=se(b);{var A=k=>{var G=UP(),F=V(G);{var z=Q=>{Er(Q,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(p)}})};ne(F,Q=>{E()&&E()===_(i)&&Q(z)})}var P=U(F);Er(P,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(a)}});var j=U(P);{var J=Q=>{AP(Q,{get cornerTool(){return m()}})},ae=Q=>{var re=MP(),ge=V(re,!0);te(()=>at(ge,I(m(),_(c)))),B(re),te(()=>{L(re,"x",_(h).x),L(re,"y",_(h).y),L(re,"font-size",_(u)),L(re,"fill",_(f))}),S(Q,re)};ne(j,Q=>{m().toolId===d.QUADRUPLE?Q(J):Q(ae,!1)})}B(G),S(k,G)};ne(O,k=>{_(g).length===4&&k(A)})}S(t,b),ue()}var $P=ee('<g class="corner-tool"><!></g>');function FP(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=$P(),f=V(u);Lp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}var PP=ee('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function ps(t,e){ce(e,!1);const n=N();let r=M(e,"value",8,""),i=M(e,"fontSize",8,.2),o=M(e,"x",8),a=M(e,"y",8),c=M(e,"position",8,"TL"),u=M(e,"fontColor",8,"var(--text-primary-color)"),f=M(e,"fontWeight",8,400),p=N(null),g=N(null);function h(A,k,G){const F=["TL","TR"].includes(G),P=["TL","BL"].includes(G)?A+.05:A,j=k;return new Te(P,j)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}iw(()=>{if(!_(p)||!_(g))return;const A=_(p).getBBox();_(g).setAttribute("x",String(A.x)),_(g).setAttribute("y",String(A.y+A.height*.1)),_(g).setAttribute("width",String(A.width)),_(g).setAttribute("height",String(A.height*.8))}),D(()=>(Z(o()),Z(a()),Z(c())),()=>{y(n,h(o(),a(),c()))}),we(),he();var I=ye(),b=se(I);{var O=A=>{var k=PP(),G=se(k);xi(G,P=>y(g,P),()=>_(g));var F=U(G);te(()=>L(F,"text-anchor",m(c()))),te(()=>L(F,"dominant-baseline",E(c())));var z=V(F,!0);B(F),xi(F,P=>y(p,P),()=>_(p)),te(()=>{var P,j;L(F,"x",(P=_(n))==null?void 0:P.x),L(F,"y",(j=_(n))==null?void 0:j.y),L(F,"font-size",i()),L(F,"fill",u()),L(F,"font-weight",f()),at(z,r())}),S(A,k)};ne(b,A=>{r().length&&A(O)})}S(t,I),ue()}var HP=ee('<text text-anchor="middle" dominant-baseline="central"> </text>'),BP=ee('<g class="center-corner-or-edge-tool"><!><!><!></g>');function WP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N();let h=M(e,"tool",8),m=M(e,"c_id",8);const E=h().cell,I=dn(h().toolId,Pt)??Au;function b(j,J){return J===W.TEXT_ONLY?j.value?j.value:"-":j.value??""}D(()=>r(),()=>{var j;y(i,(j=r())==null?void 0:j.id)}),D(()=>Z(h()),()=>{y(o,h().shape??I)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>{},()=>{y(c,E)}),D(()=>(_(o),W),()=>{var j;y(u,((j=_(o))==null?void 0:j.type)||W.CIRCLE)}),D(()=>_(o),()=>{var j;y(f,((j=_(o))==null?void 0:j.fontSize)??.2)}),D(()=>_(o),()=>{var j;y(p,((j=_(o))==null?void 0:j.fontColor)??"black")}),D(()=>_(c),()=>{y(g,_(c).r%1===.5&&_(c).c%1===.5)}),we(),he();var O=BP(),A=V(O);{var k=j=>{Er(j,{get cx(){return _(c).c},get cy(){return _(c).r},get shape(){return _(a)}})};ne(A,j=>{m()===_(i)&&j(k)})}var G=U(A);Er(G,{get cx(){return _(c).c},get cy(){return _(c).r},get shape(){return _(o)}});var F=U(G);{var z=j=>{var J=Qe(()=>b(h(),_(u))),ae=Qe(()=>Math.floor(_(c).c)),Q=Qe(()=>Math.floor(_(c).r));ps(j,{get value(){return _(J)},get x(){return _(ae)},get y(){return _(Q)},position:"TL",get fontColor(){return _(p)}})},P=j=>{var J=HP(),ae=V(J,!0);te(()=>at(ae,b(h(),_(u)))),B(J),te(()=>{L(J,"x",_(c).c),L(J,"y",_(c).r),L(J,"font-size",_(f)),L(J,"fill",_(p))}),S(j,J)};ne(F,j=>{_(g)?j(z):j(P,!1)})}B(O),S(t,O),ue()}var zP=ee('<rect stroke="none" fill="#5373ea80"></rect>'),YP=ee('<rect stroke="none" fill="#5373ea66"></rect>'),jP=ee('<path fill="none" stroke-linecap="round"></path><!>',1),KP=ee('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function Ah(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=()=>Ee(mn,"$gridStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N(),m=N(),E=N(),I=N();let b=M(e,"tool",8),O=M(e,"c_id",8,void 0);const A=.03;function k(oe){return oe.value&&oe.value.length?oe.value:"-"}function G(oe,pe){const Ne=As(pe),xe=new Te(Ne.c,Ne.r).scale(.5),Oe=tr(oe),Ie=Oe.add(xe.scale(.5)),je=Oe.add(xe.scale(.8));return[Ie,je]}function F(oe,pe){const xe=G(oe,pe);let Oe=r_(.08,pe);Oe=Oe.map(It=>It.add(xe[1]));const Ie=oi(xe),je=oi(Oe);return Ie+je}D(()=>r(),()=>{var oe;y(o,(oe=r())==null?void 0:oe.id)}),D(()=>Z(b()),()=>{y(a,b().cell)}),D(()=>_(a),()=>{y(c,tr(_(a)))}),D(()=>(i(),Z(b())),()=>{y(u,i().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),D(()=>(Z(b()),qg),()=>{y(f,dn(b().toolId,Pt)??qg)}),D(()=>(Z(b()),_(f)),()=>{y(p,b().shape??_(f))}),D(()=>_(p),()=>{var oe;y(g,((oe=_(p))==null?void 0:oe.fontSize)??.5)}),D(()=>_(p),()=>{var oe;y(h,((oe=_(p))==null?void 0:oe.fontColor)??"var(--text-primary-color)")}),D(()=>_(p),()=>{var oe;y(m,((oe=_(p))==null?void 0:oe.stroke)??"var(--text-primary-color)")}),D(()=>_(p),()=>{y(E,{..._(p),stroke:"var(--constraint-selected-color)",strokeWidth:A+.07})}),D(()=>(_(a),Z(b())),()=>{y(I,F(_(a),b().direction))}),we(),he();var z=KP(),P=V(z);{var j=oe=>{var pe=ye(),Ne=se(pe);et(Ne,1,()=>_(u),Ct,(xe,Oe)=>{var Ie=zP();L(Ie,"width",1),L(Ie,"height",1),te(()=>{L(Ie,"x",_(Oe).c),L(Ie,"y",_(Oe).r)}),S(xe,Ie)}),S(oe,pe)};ne(P,oe=>{O()===void 0&&oe(j)})}var J=U(P);{var ae=oe=>{var pe=jP(),Ne=se(pe),xe=U(Ne);et(xe,1,()=>_(u),Ct,(Oe,Ie)=>{var je=YP();L(je,"width",1),L(je,"height",1),te(()=>{L(je,"x",_(Ie).c),L(je,"y",_(Ie).r)}),S(Oe,je)}),te(()=>{L(Ne,"d",_(I)),L(Ne,"stroke",_(E).stroke),L(Ne,"stroke-width",_(E).strokeWidth)}),S(oe,pe)};ne(J,oe=>{O()&&O()===_(o)&&oe(ae)})}var Q=U(J);L(Q,"stroke-width",A);var re=U(Q),ge=V(re,!0);te(()=>at(ge,k(b()))),B(re),B(z),te(()=>{L(Q,"d",_(I)),L(Q,"stroke",_(m)),L(re,"x",_(c).x),L(re,"y",_(c).y),L(re,"font-size",_(g)),L(re,"fill",_(h))}),S(t,z),ue()}var VP=ee('<g class="outside-direction-tool"><!></g>'),XP=ee('<g class="outside-direction-preview"><!></g>');function Ap(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=u=>{var f=VP(),p=V(f);Ah(p,{get tool(){return n()},get c_id(){return r()}}),B(f),te(()=>L(f,"data-id",`${r()}`)),S(u,f)},c=u=>{var f=XP();L(f,"opacity",.5);var p=V(f);Ah(p,{get tool(){return n()}}),B(f),S(u,f)};ne(o,u=>{r()!==void 0?u(a):u(c,!1)})}S(t,i)}var qP=ee('<path fill="none"></path>');function ri(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"linePoints",8),f=M(e,"shape",8,void 0);const p="round",g="round";D(()=>Z(f()),()=>{var m;y(n,((m=f())==null?void 0:m.stroke)??"gray")}),D(()=>Z(f()),()=>{var m;y(r,((m=f())==null?void 0:m.strokeWidth)??.1)}),D(()=>Z(f()),()=>{var m;y(i,((m=f())==null?void 0:m.strokeDasharray)??0)}),D(()=>Z(f()),()=>{var m;y(o,((m=f())==null?void 0:m.strokeDashoffset)??0)}),D(()=>Z(f()),()=>{var m,E,I,b,O,A,k,G;y(a,{shortenHead:((E=(m=f())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=f())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((A=(O=f())==null?void 0:O.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((G=(k=f())==null?void 0:k.linePathOptions)==null?void 0:G.closeLoops)??!1})}),D(()=>(Z(u()),_(a)),()=>{y(c,oi(u(),_(a)))}),we(),he();var h=qP();L(h,"stroke-linejoin",p),L(h,"stroke-linecap",g),te(()=>{L(h,"d",_(c)),L(h,"stroke",_(n)),L(h,"stroke-width",_(r)),L(h,"stroke-dasharray",_(i)),L(h,"stroke-dashoffset",_(o))}),S(t,h),ue()}var ZP=de("<!> <!> <!>",1);function QP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"linePoints",8),u=M(e,"shape",8);function f(b){const O=At.cloneDeep(b);return O.r=O.r||.2,O.strokeWidth=0,O.opacity=1,O}D(()=>Z(c()),()=>{y(n,c().length)}),D(()=>(_(n),Z(c())),()=>{y(r,_(n)>1&&c()[0].equals(c()[_(n)-1]))}),D(()=>(_(n),Z(c())),()=>{y(i,_(n)>=0?c()[0]:void 0)}),D(()=>(_(n),Z(c())),()=>{y(o,_(n)>=0?c()[_(n)-1]:void 0)}),D(()=>Z(u()),()=>{y(a,f(u()))}),we(),he();var p=ZP(),g=se(p);ri(g,{get linePoints(){return c()},get shape(){return u()}});var h=U(g,2);{var m=b=>{lr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(a)}})};ne(h,b=>{!_(r)&&_(i)&&b(m)})}var E=U(h,2);{var I=b=>{lr(b,{get x(){return _(o).x},get y(){return _(o).y},get shape(){return _(a)}})};ne(E,b=>{!_(r)&&_(o)&&b(I)})}S(t,p),ue()}var JP=ee('<g class="corner-line-tool"><!></g>');function e4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"tool",8);const c=dn(a().toolId,Pt)??Cs;D(()=>(Z(a()),Te),()=>{y(n,a().coords.map(h=>new Te(h.c,h.r)))}),D(()=>Z(a()),()=>{y(r,a().shape??c)}),D(()=>(_(r),W),()=>{var h;y(i,((h=_(r))==null?void 0:h.type)||W.LINE)}),D(()=>_(r),()=>{var h;y(o,((h=_(r))==null?void 0:h.opacity)??1)}),we(),he();var u=JP(),f=V(u);{var p=h=>{QP(h,{get linePoints(){return _(n)},get shape(){return _(r)}})},g=h=>{ri(h,{get linePoints(){return _(n)},get shape(){return _(r)}})};ne(f,h=>{_(i)===W.MAZE_WALL?h(p):h(g,!1)})}B(u),te(()=>L(u,"opacity",_(o))),S(t,u),ue()}var t4=ee('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Sh(t,e){ce(e,!1);const n=N(),r=N(),i=N();let o=M(e,"shape",8),a=M(e,"coords",8);const[c,u]=a(),f=u.c,p=c.c===u.c?u.c+1:u.c,g=u.r,h=c.r===u.r?u.r+1:u.r;D(()=>Z(o()),()=>{y(n,o().stroke??"black")}),D(()=>Z(o()),()=>{var E;y(r,(E=o())==null?void 0:E.opacity)}),D(()=>Z(o()),()=>{y(i,o().strokeWidth??.02)}),we(),he();var m=t4();L(m,"x1",f),L(m,"x2",p),L(m,"y1",g),L(m,"y2",h),te(()=>{L(m,"stroke",_(n)),L(m,"stroke-width",_(i)),L(m,"opacity",_(r))}),S(t,m),ue()}var n4=ee("<!><!>",1),r4=ee("<!><!>",1),i4=ee("<!><!>",1),o4=ee("<!><!>",1),s4=ee('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function Sp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function I(G,F){return F===W.TEXT_ONLY?G.value?G.value:"-":G.value??""}function b(G){if(G!==d.EDGE_INEQUALITY&&G!==d.ONE_WAY_DOOR)return 0;const F=tr(_(g)[0]);return tr(_(g)[1]).subtract(F).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>(Z(m()),Au),()=>{y(o,dn(m().toolId,Pt)??Au)}),D(()=>(Z(m()),_(o)),()=>{y(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var G;y(c,((G=_(a))==null?void 0:G.type)||W.CIRCLE)}),D(()=>_(a),()=>{var G;y(u,((G=_(a))==null?void 0:G.fontSize)??.2)}),D(()=>_(a),()=>{var G;y(f,((G=_(a))==null?void 0:G.fontColor)??"black")}),D(()=>_(a),()=>{y(p,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(m()),()=>{y(g,m().cells)}),D(()=>_(g),()=>{y(h,Cp(kl(_(g))))}),we(),he();var O=ye(),A=se(O);{var k=G=>{var F=s4(),z=se(F);{var P=Q=>{var re=n4(),ge=se(re);{var oe=Ne=>{lr(Ne,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(p)}})};ne(ge,Ne=>{E()&&E()===_(i)&&Ne(oe)})}var pe=U(ge);lr(pe,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(a)}}),S(Q,re)},j=Q=>{var re=ye(),ge=se(re);{var oe=Ne=>{var xe=r4(),Oe=se(xe);{var Ie=qe=>{lr(qe,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(p)}})};ne(Oe,qe=>{E()&&E()===_(i)&&qe(Ie)})}var je=U(Oe);lr(je,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(a)}}),S(Ne,xe)},pe=Ne=>{var xe=ye(),Oe=se(xe);{var Ie=qe=>{var It=i4(),xt=se(It);{var jt=Ut=>{Sh(Ut,{get coords(){return _(g)},get shape(){return _(p)}})};ne(xt,Ut=>{E()&&E()===_(i)&&Ut(jt)})}var kt=U(xt);Sh(kt,{get coords(){return _(g)},get shape(){return _(a)}}),S(qe,It)},je=qe=>{var It=o4(),xt=se(It);{var jt=Ut=>{Er(Ut,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(p)}})};ne(xt,Ut=>{E()&&E()===_(i)&&Ut(jt)})}var kt=U(xt);Er(kt,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(a)}}),S(qe,It)};ne(Oe,qe=>{_(c)===W.BORDER_LINE?qe(Ie):qe(je,!1)},!0)}S(Ne,xe)};ne(ge,Ne=>{_(c)===W.TEXT_ONLY?Ne(oe):Ne(pe,!1)},!0)}S(Q,re)};ne(z,Q=>{m().toolId===d.EDGE_INEQUALITY||m().toolId===d.ONE_WAY_DOOR?Q(P):Q(j,!1)})}var J=U(z);te(()=>L(J,"transform",`rotate(${b(m().toolId)}, ${_(h).x}, ${_(h).y} )`));var ae=V(J,!0);te(()=>at(ae,I(m(),_(c)))),B(J),te(()=>{L(J,"x",_(h).x),L(J,"y",_(h).y),L(J,"font-size",_(u)),L(J,"fill",_(f))}),S(G,F)};ne(A,G=>{_(g).length===2&&G(k)})}S(t,O),ue()}var a4=ee('<g class="edge-tool"><!></g>');function l4(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=a4(),f=V(u);Sp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}var c4=ee('<path fill="none" stroke-linecap="round"></path>'),u4=ee('<path fill="none" stroke-linecap="round"></path>'),d4=ee('<path fill="none" stroke-linecap="round"></path>'),_4=ee("<!><!><!>",1);function Nh(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N();let f=M(e,"tool",8),p=M(e,"c_id",8,void 0);D(()=>r(),()=>{var O;y(i,(O=r())==null?void 0:O.id)}),D(()=>(Z(f()),Xg),()=>{y(o,dn(f().toolId,Pt)??Xg)}),D(()=>(Z(f()),_(o)),()=>{y(a,f().shape??_(o))}),D(()=>_(a),()=>{y(c,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.03:.03})}),D(()=>_(a),()=>{y(u,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),we(),he();var g=_4(),h=se(g);{var m=O=>{var A=ye(),k=se(A);et(k,1,()=>f().directions,Ct,(G,F)=>{var z=c4();te(()=>L(z,"d",pu(f().cell,_(F)))),te(()=>{L(z,"stroke",_(c).stroke),L(z,"stroke-width",_(c).strokeWidth)}),S(G,z)}),S(O,A)};ne(h,O=>{O(m)})}var E=U(h);{var I=O=>{var A=ye(),k=se(A);et(k,1,()=>f().directions,Ct,(G,F)=>{var z=u4();te(()=>L(z,"d",pu(f().cell,_(F)))),te(()=>{L(z,"stroke",_(u).stroke),L(z,"stroke-width",_(u).strokeWidth)}),S(G,z)}),S(O,A)};ne(E,O=>{p()&&p()===_(i)&&O(I)})}var b=U(E);et(b,1,()=>f().directions,Ct,(O,A)=>{var k=d4();te(()=>L(k,"d",pu(f().cell,_(A)))),te(()=>{L(k,"stroke",_(a).stroke),L(k,"stroke-width",_(a).strokeWidth)}),S(O,k)}),S(t,g),ue()}var f4=ee('<g class="single-cell-multi-arrow-tool"><!></g>'),g4=ee('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function Np(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=u=>{var f=f4(),p=V(f);Nh(p,{get tool(){return n()},get c_id(){return r()}}),B(f),te(()=>L(f,"data-id",`${r()}`)),S(u,f)},c=u=>{var f=g4();L(f,"opacity",.5);var p=V(f);Nh(p,{get tool(){return n()}}),B(f),S(u,f)};ne(o,u=>{r()!==void 0?u(a):u(c,!1)})}S(t,i)}var h4=ee('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function v4(t){var e=h4(),n=V(e);L(n,"opacity",.5),B(e),S(t,e)}var p4=ee('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function m4(t,e){ce(e,!1);const n=N();let r=M(e,"tool",8);M(e,"c_id",8,void 0),D(()=>Z(r()),()=>{y(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),we(),he();var i=p4();te(()=>L(i,"transform",`translate(${_(n).x} ${_(n).y})`)),S(t,i),ue()}var E4=ee('<g class="fog-lights-layer svelte-1t48yul"></g>');function C4(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Qt,"$toolStore",n),i=N();let o=M(e,"element",8);D(()=>r(),()=>{y(i,r())}),we(),he();var a=E4();et(a,5,()=>Object.entries(o()),c=>c[0],(c,u)=>{m4(c,{get tool(){return _(u)[1]},get c_id(){return _(u)[0]}})}),B(a),te(()=>yt(a,"inactive",_(i)!==d.FOG_LIGHTS)),S(t,a),ue()}var I4=ee('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function i_(t,e){ce(e,!1);const n=N(),r=N(),i=N();let o=M(e,"cx",8),a=M(e,"cy",8),c=M(e,"c_id",8);D(()=>Z(c()),()=>{y(n,document.getElementById(`c-${c()}`))}),D(()=>_(n),()=>{var g;y(r,(g=_(n))==null?void 0:g.getBBox())}),D(()=>_(r),()=>{y(i,_(r)?Math.max(_(r).width,_(r).height):void 0)}),we();var u=ye(),f=se(u);{var p=g=>{var h=I4(),m=V(h);L(m,"stroke-width",.6),B(h),te(()=>L(h,"transform",`translate(${o()}, ${a()}) scale(${_(i)*.6})`)),S(g,h)};ne(f,g=>{_(i)&&g(p)})}S(t,u),ue()}var b4=ee('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),O4=ee('<g class="edge-tool-preview"><!></g>');function w4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"tool_preview",8);D(()=>Z(c()),()=>{y(n,c().tool)}),D(()=>Z(c()),()=>{y(r,c().mode)}),D(()=>Z(c()),()=>{y(i,c().match_id)}),D(()=>_(n),()=>{y(o,_(n).cells)}),D(()=>_(o),()=>{y(a,Cp(kl(_(o))))}),we(),he();var u=ye(),f=se(u);{var p=h=>{var m=b4();L(m,"opacity",.5);var E=V(m);i_(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),B(m),S(h,m)},g=h=>{var m=O4();L(m,"opacity",.5);var E=V(m);Sp(E,{get tool(){return _(n)}}),B(m),S(h,m)};ne(f,h=>{_(r)==="remove"&&_(i)?h(p):h(g,!1)})}S(t,u),ue()}var y4=ee('<g class="corner-tool-remove-preview"><!></g>'),L4=ee('<g class="corner-tool-preview"><!></g>');function A4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"tool_preview",8);D(()=>Z(c()),()=>{y(n,c().tool)}),D(()=>Z(c()),()=>{y(r,c().mode)}),D(()=>Z(c()),()=>{y(i,c().match_id)}),D(()=>_(n),()=>{y(o,_(n).cells)}),D(()=>_(o),()=>{y(a,new Te(_(o)[_(o).length-1].c,_(o)[_(o).length-1].r))}),we(),he();var u=ye(),f=se(u);{var p=h=>{var m=y4();L(m,"opacity",.5);var E=V(m);i_(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),B(m),S(h,m)},g=h=>{var m=L4();L(m,"opacity",.5);var E=V(m);Lp(E,{get tool(){return _(n)}}),B(m),S(h,m)};ne(f,h=>{_(r)==="remove"&&_(i)?h(p):h(g,!1)})}S(t,u),ue()}var S4=ee('<path fill="none" stroke-linecap="round"></path>'),N4=ee('<path fill="none" stroke-linecap="round"></path>'),x4=ee('<!><!><path fill="none" stroke-linecap="round"></path>',1);function xp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N();let h=M(e,"tool",8),m=M(e,"c_id",8,void 0);D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>(Z(h()),Vg),()=>{y(o,dn(h().toolId,Pt)??Vg)}),D(()=>(Z(h()),_(o)),()=>{y(a,h().shape??_(o))}),D(()=>_(a),()=>{y(c,_(a).strokeWidth??.1)}),D(()=>_(a),()=>{y(u,_(a).stroke??"black")}),D(()=>_(a),()=>{y(f,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),D(()=>_(a),()=>{y(p,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(h()),()=>{y(g,j$(h().cell,h().direction))}),we(),he();var E=x4(),I=se(E);{var b=G=>{var F=S4();te(()=>{L(F,"d",_(g)),L(F,"stroke",_(f).stroke),L(F,"stroke-width",_(f).strokeWidth)}),S(G,F)};ne(I,G=>{G(b)})}var O=U(I);{var A=G=>{var F=N4();te(()=>{L(F,"d",_(g)),L(F,"stroke",_(p).stroke),L(F,"stroke-width",_(p).strokeWidth)}),S(G,F)};ne(O,G=>{m()&&m()===_(i)&&G(A)})}var k=U(O);te(()=>{L(k,"d",_(g)),L(k,"stroke",_(u)),L(k,"stroke-width",_(c))}),S(t,E),ue()}var R4=ee('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),T4=ee('<g class="single-cell-arrow-tool-preview"><!></g>');function D4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"tool_preview",8);D(()=>Z(a()),()=>{y(n,a().tool)}),D(()=>Z(a()),()=>{y(r,a().mode)}),D(()=>Z(a()),()=>{y(i,a().match_id)}),D(()=>_(n),()=>{y(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),we(),he();var c=ye(),u=se(c);{var f=g=>{var h=R4();L(h,"opacity",.5);var m=V(h);i_(m,{get cx(){return _(o).x},get cy(){return _(o).y},get c_id(){return _(i)}}),B(h),S(g,h)},p=g=>{var h=T4();L(h,"opacity",.5);var m=V(h);xp(m,{get tool(){return _(n)}}),B(h),S(g,h)};ne(u,g=>{_(r)==="remove"&&_(i)?g(f):g(p,!1)})}S(t,c),ue()}var k4=de("<!> <!>",1);function Rp(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"cells",8),o=M(e,"shape",8,wd),a=M(e,"value",8,void 0);D(()=>Z(i()),()=>{y(n,i()[0])}),D(()=>_(n),()=>{y(r,new Te(_(n).c,_(n).r))}),we(),he();var c=k4(),u=se(c);Tr(u,{get cells(){return i()},get shape(){return o()}});var f=U(u,2);{var p=g=>{ps(g,{get value(){return a()},get x(){return _(r).x},get y(){return _(r).y},position:"TL"})};ne(f,g=>{a()&&a().length&&g(p)})}S(t,c),ue()}var G4=ee('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function xh(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(n$,"$minimumConstraintsStore",n),i=()=>Ee(r$,"$maximumConstraintsStore",n),o=N(),a=N(),c=N();let u=M(e,"coord",8),f=M(e,"minOrMax",8);function p(b,O){const A=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let G=0;G<k.length;G++){let F=k[G];const z={r:b.r+F[1],c:b.c+F[0]};A[G]=!Object.values(O).some(P=>Ke(z,P.cell))}return A}function g(b,O){let A=z$(f(),b.r,b.c);const k=p(b,O);return A=A.filter((F,z)=>k[z]),A.map(F=>Go(F,!1)).join("")}function h(b,O){return f()==="max"?O:b}D(()=>Z(u()),()=>{y(o,u().c)}),D(()=>Z(u()),()=>{y(a,u().r)}),D(()=>(r(),i()),()=>{y(c,h(r(),i()))}),we(),he();var m=G4(),E=V(m);L(E,"width",1),L(E,"height",1);var I=U(E);te(()=>L(I,"d",g(u(),_(c)))),B(m),te(()=>{L(E,"x",_(o)),L(E,"y",_(a))}),S(t,m),ue()}var M4=ee("<circle></circle>");function U4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"x",8),f=M(e,"y",8),p=M(e,"value",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{y(n,g().r??.35)}),D(()=>Z(g()),()=>{y(r,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;y(i,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{y(o,g().strokeWidth??.02)}),D(()=>Z(p()),()=>{y(a,p()==="1"?"var(--constraint-color-red)":p()==="2"?"var(--constraint-color-green)":p()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>Z(g()),()=>{y(c,g().strokeDasharray??0)}),we(),he();var h=M4();te(()=>{L(h,"cx",u()),L(h,"cy",f()),L(h,"r",_(n)),L(h,"stroke",_(r)),L(h,"stroke-width",_(o)),L(h,"fill",_(a)),L(h,"opacity",_(i)),L(h,"stroke-dasharray",_(c))}),S(t,h),ue()}var $4=ee("<!><!>",1),F4=ee("<!><!>",1),P4=ee("<!><!><!>",1),H4=ee('<g class="single-cell-tool"><!><!></g>');function Tp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);D(()=>r(),()=>{var F;y(i,(F=r())==null?void 0:F.id)}),D(()=>(Z(m()),Kg),()=>{y(o,dn(m().toolId,Pt)??Kg)}),D(()=>(Z(m()),_(o)),()=>{y(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var F;y(c,((F=_(a))==null?void 0:F.type)||W.CIRCLE)}),D(()=>_(a),()=>{y(u,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{y(f,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(m()),()=>{y(p,{x:m().cell.c+.5,y:m().cell.r+.5})}),D(()=>Z(m()),()=>{y(g,new Te(m().cell.c,m().cell.r))}),D(()=>Z(m()),()=>{y(h,m().value)}),we(),he();var I=H4(),b=V(I);{var O=F=>{xh(F,{get coord(){return m().cell},minOrMax:"min"})},A=F=>{var z=ye(),P=se(z);{var j=ae=>{xh(ae,{get coord(){return m().cell},minOrMax:"max"})},J=ae=>{var Q=ye(),re=se(Q);{var ge=pe=>{var Ne=$4(),xe=se(Ne);{var Oe=je=>{Er(je,{get cx(){return _(p).x},get cy(){return _(p).y},get shape(){return _(f)}})};ne(xe,je=>{E()&&E()===_(i)&&je(Oe)})}var Ie=U(xe);U4(Ie,{get x(){return _(p).x},get y(){return _(p).y},get value(){return _(h)},get shape(){return _(a)}}),S(pe,Ne)},oe=pe=>{var Ne=ye(),xe=se(Ne);{var Oe=je=>{var qe=F4(),It=se(qe);{var xt=Ut=>{var nn=Qe(()=>[m().cell]);Tr(Ut,{get cells(){return _(nn)},get shape(){return _(f)}})};ne(It,Ut=>{E()&&E()===_(i)&&Ut(xt)})}var jt=U(It),kt=Qe(()=>[m().cell]);Rp(jt,{get cells(){return _(kt)},get shape(){return _(a)},get value(){return m().value}}),S(je,qe)},Ie=je=>{var qe=P4(),It=se(qe);{var xt=nn=>{Er(nn,{get cx(){return _(p).x},get cy(){return _(p).y},get shape(){return _(u)}})};ne(It,nn=>{nn(xt)})}var jt=U(It);{var kt=nn=>{Er(nn,{get cx(){return _(p).x},get cy(){return _(p).y},get shape(){return _(f)}})};ne(jt,nn=>{E()&&E()===_(i)&&nn(kt)})}var Ut=U(jt);Er(Ut,{get cx(){return _(p).x},get cy(){return _(p).y},get shape(){return _(a)}}),S(je,qe)};ne(xe,je=>{_(c)===W.CAGE?je(Oe):je(Ie,!1)},!0)}S(pe,Ne)};ne(re,pe=>{m().toolId===d.COLORED_COUNTING_CIRCLES?pe(ge):pe(oe,!1)},!0)}S(ae,Q)};ne(P,ae=>{m().toolId===d.MAXIMUM?ae(j):ae(J,!1)},!0)}S(F,z)};ne(b,F=>{m().toolId===d.MINIMUM?F(O):F(A,!1)})}var k=U(b);{var G=F=>{ps(F,{get value(){return _(h)},get x(){return _(g).x},get y(){return _(g).y},position:"TL"})};ne(k,F=>{_(c)!==W.CAGE&&m().toolId!==d.COLORED_COUNTING_CIRCLES&&_(h)&&F(G)})}B(I),te(()=>L(I,"data-id",`${E()}`)),S(t,I),ue()}var B4=ee('<g class="single-cell-tool-preview"><!></g>');function W4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"tool_preview",8);D(()=>Z(a()),()=>{y(n,a().tool)}),D(()=>Z(a()),()=>{y(r,a().mode)}),D(()=>Z(a()),()=>{y(i,a().match_id)}),D(()=>_(n),()=>{y(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),we(),he();var c=B4();L(c,"opacity",.5);var u=V(c);Tp(u,{get tool(){return _(n)}}),B(c),S(t,c),ue()}var z4=ee('<g class="single-cell-arrow-tool"><!></g>');function Y4(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=z4(),f=V(u);xp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}var j4=ee('<g class="single-cell-tool"><!></g>');function K4(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=j4(),f=V(u);Tp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}function V4(t,e){ce(e,!1);let n=M(e,"tool",8),r=M(e,"c_id",8);he();var i=ye(),o=se(i);{var a=c=>{var u=ye(),f=se(u);{var p=h=>{Y4(h,{get tool(){return n()},get c_id(){return r()}})},g=h=>{var m=ye(),E=se(m);{var I=O=>{Np(O,{get tool(){return n()},get c_id(){return r()}})},b=O=>{var A=ye(),k=se(A);{var G=F=>{K4(F,{get tool(){return n()},get c_id(){return r()}})};ne(k,F=>{n().type==="SIMPLE"&&F(G)},!0)}S(O,A)};ne(E,O=>{n().type==="MULTIARROW"?O(I):O(b,!1)},!0)}S(h,m)};ne(f,h=>{n().type==="ARROW"?h(p):h(g,!1)})}S(c,u)};ne(o,c=>{n().toolId!==d.FOG_LIGHTS&&c(a)})}S(t,i),ue()}var X4=de("<!> <!> <!>",1);function Eu(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"linePoints",8),c=M(e,"shape",8,Cs);function u(b){var k;const O=At.cloneDeep(b);O.r=O.r||.2;const A=O.r;return O.strokeDasharray=b.strokeDasharray,O.opacity=1,O.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(k=O.linePathOptions)==null?void 0:k.bezierRounding},O}D(()=>Z(a()),()=>{y(n,a().length)}),D(()=>(_(n),Z(a())),()=>{y(r,_(n)>=0?a()[0]:void 0)}),D(()=>(_(n),Z(a())),()=>{y(i,_(n)>=0?a()[_(n)-1]:void 0)}),D(()=>Z(c()),()=>{y(o,u(c()))}),we(),he();var f=X4(),p=se(f);{var g=b=>{lr(b,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})};ne(p,b=>{_(r)&&b(g)})}var h=U(p,2);{var m=b=>{ri(b,{get linePoints(){return a()},get shape(){return _(o)}})};ne(h,b=>{_(n)>1&&b(m)})}var E=U(h,2);{var I=b=>{lr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(o)}})};ne(E,b=>{_(i)&&b(I)})}S(t,f),ue()}var q4=de("<!> <!> <!>",1);function Cu(t,e){ce(e,!1);const n=N(),r=N(),i=N();let o=M(e,"linePoints",8),a=M(e,"shape",12,Cs);const c=4,u=.5;function f(G,F){const z=F.r??u,P=F.n??c,j=F.angle??0,J=Op(z,P,new Te(0,0),!0,0),ae=(P+(G-j/360)*P%P)%P,Q=Math.floor(ae)%P,re=Math.ceil(ae)%P;return J[Q].lerp(J[re],ae%1).length()}function p(G){if(_(n)<=1)return 0;const F=o()[0],P=o()[1].subtract(F).angle()/(2*Math.PI);return f(P,G)}function g(G){if(_(n)<=1)return 0;const F=o()[_(n)-1],P=o()[_(n)-2].subtract(F).angle()/(2*Math.PI);return f(P,G)}function h(G){var z;const F=At.cloneDeep(G);return F.r=F.r||u,F.opacity=1,F.linePathOptions={shortenHead:p(F),shortenTail:g(F),bezierRounding:(z=F.linePathOptions)==null?void 0:z.bezierRounding},F}D(()=>Z(o()),()=>{y(n,o().length)}),D(()=>(_(n),Z(o())),()=>{y(r,_(n)>=0?o()[0]:void 0)}),D(()=>(_(n),Z(o())),()=>{y(i,_(n)>=0?o()[_(n)-1]:void 0)}),D(()=>Z(a()),()=>{a(h(a()))}),we(),he();var m=q4(),E=se(m);{var I=G=>{Ja(G,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return a()}})};ne(E,G=>{_(r)&&G(I)})}var b=U(E,2);{var O=G=>{ri(G,{get linePoints(){return o()},get shape(){return a()}})};ne(b,G=>{_(n)>1&&G(O)})}var A=U(b,2);{var k=G=>{Ja(G,{get cx(){return _(i).x},get cy(){return _(i).y},get shape(){return a()}})};ne(A,G=>{_(i)&&G(k)})}S(t,m),ue()}var Z4=de("<!> <!>",1);function Iu(t,e){ce(e,!1);const n=N();let r=M(e,"linePoints",8),i=M(e,"shape",8,Cs);function o(m){var b,O,A;const E=At.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(O=E.linePathOptions)==null?void 0:O.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function a(m){var b,O,A;const E=At.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(O=E.linePathOptions)==null?void 0:O.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}D(()=>Z(r()),()=>{y(n,r().length>0?r()[0]:void 0)}),we(),he();var c=Z4(),u=se(c);{var f=m=>{var E=Qe(()=>o(i()));ri(m,{get linePoints(){return r()},get shape(){return _(E)}})};ne(u,m=>{r().length>1&&m(f)})}var p=U(u,2);{var g=m=>{var E=Qe(()=>o(i()));lr(m,{get x(){return _(n).x},get y(){return _(n).y},get shape(){return _(E)}})},h=m=>{var E=ye(),I=se(E);{var b=O=>{var A=Qe(()=>a(i()));Ja(O,{get cx(){return _(n).x},get cy(){return _(n).y},get shape(){return _(A)}})};ne(I,O=>{_(n)&&O(b)},!0)}S(m,E)};ne(p,m=>{_(n)&&i().type===W.THERMO_WITH_CIRCLE?m(g):m(h,!1)})}S(t,c),ue()}var Q4=ee("<!><!><!>",1),J4=ee("<!><!><!>",1),e6=ee("<!><!><!>",1),t6=ee("<!><!><!>",1),n6=ee('<g class="line-tool"><!></g>');function r6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N();let g=M(e,"tool",8),h=M(e,"c_id",8);const m=dn(g().toolId,Pt)??Cs;D(()=>r(),()=>{var A;y(i,(A=r())==null?void 0:A.id)}),D(()=>Z(g()),()=>{y(o,kl(g().cells))}),D(()=>Z(g()),()=>{y(a,g().shape??m)}),D(()=>(_(a),W),()=>{var A;y(c,((A=_(a))==null?void 0:A.type)||W.LINE)}),D(()=>_(a),()=>{var A;y(u,((A=_(a))==null?void 0:A.opacity)??1)}),D(()=>_(a),()=>{y(f,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{y(p,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),we(),he();var E=n6(),I=V(E);{var b=A=>{var k=Q4(),G=se(k);{var F=J=>{Eu(J,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(G,J=>{J(F)})}var z=U(G);{var P=J=>{Eu(J,{get linePoints(){return _(o)},get shape(){return _(p)}})};ne(z,J=>{h()===_(i)&&J(P)})}var j=U(z);Eu(j,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(A,k)},O=A=>{var k=ye(),G=se(k);{var F=P=>{var j=J4(),J=se(j);{var ae=oe=>{Cu(oe,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(J,oe=>{oe(ae)})}var Q=U(J);{var re=oe=>{Cu(oe,{get linePoints(){return _(o)},get shape(){return _(p)}})};ne(Q,oe=>{h()===_(i)&&oe(re)})}var ge=U(Q);Cu(ge,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(P,j)},z=P=>{var j=ye(),J=se(j);{var ae=re=>{var ge=e6(),oe=se(ge);{var pe=Ie=>{Iu(Ie,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(oe,Ie=>{Ie(pe)})}var Ne=U(oe);{var xe=Ie=>{Iu(Ie,{get linePoints(){return _(o)},get shape(){return _(p)}})};ne(Ne,Ie=>{h()===_(i)&&Ie(xe)})}var Oe=U(Ne);Iu(Oe,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(re,ge)},Q=re=>{var ge=t6(),oe=se(ge);{var pe=Ie=>{ri(Ie,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(oe,Ie=>{Ie(pe)})}var Ne=U(oe);{var xe=Ie=>{ri(Ie,{get linePoints(){return _(o)},get shape(){return _(p)}})};ne(Ne,Ie=>{h()===_(i)&&Ie(xe)})}var Oe=U(Ne);ri(Oe,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(re,ge)};ne(J,re=>{_(c)===W.THERMO_WITH_CIRCLE||_(c)===W.THERMO_WITH_POLYGON?re(ae):re(Q,!1)},!0)}S(P,j)};ne(G,P=>{_(c)===W.LINE_WITH_POLYGON_ENDS?P(F):P(z,!1)},!0)}S(A,k)};ne(I,A=>{_(c)===W.LINE_WITH_CIRCLE_ENDS?A(b):A(O,!1)})}B(E),te(()=>L(E,"opacity",_(u))),S(t,E),ue()}var i6=ee('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function Dp(t,e){let n=M(e,"l",8,.2),r=M(e,"id",8),i=M(e,"strokeWidth",8),o=M(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=i6();L(u,"viewBox","0 0 1 1"),L(u,"refX",a),L(u,"refY",a),L(u,"markerWidth",1),L(u,"markerHeight",1);var f=V(u);L(f,"d",c),B(u),te(()=>{L(u,"id",r()),L(f,"stroke-width",i()),L(f,"stroke",o())}),S(t,u)}var o6=ee('<path class="arrow-line" fill="none"></path>'),s6=ee('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function a6(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N();let m=M(e,"tool",8),E=M(e,"arrowId",8);const I=dn(m().toolId,Pt)??dv,b="round",O="round",A=crypto.randomUUID(),k=`arrow-mask-${E()}-${A}`,G=`arrow-marker-${E()}-${A}`;D(()=>Z(m()),()=>{y(n,m().shape??I)}),D(()=>_(n),()=>{var Q;y(r,((Q=_(n))==null?void 0:Q.r)??.4)}),D(()=>_(n),()=>{var Q;y(i,((Q=_(n))==null?void 0:Q.stroke)??"gray")}),D(()=>_(n),()=>{var Q;y(o,((Q=_(n))==null?void 0:Q.strokeWidth)??.1)}),D(()=>_(n),()=>{var Q;y(a,((Q=_(n))==null?void 0:Q.strokeDasharray)??0)}),D(()=>_(n),()=>{var Q;y(c,((Q=_(n))==null?void 0:Q.opacity)??.8)}),D(()=>(_(r),_(n)),()=>{var Q,re,ge,oe;y(u,{shortenHead:_(r),shortenTail:((re=(Q=_(n))==null?void 0:Q.linePathOptions)==null?void 0:re.shortenTail)??.2,bezierRounding:((oe=(ge=_(n))==null?void 0:ge.linePathOptions)==null?void 0:oe.bezierRounding)??.4})}),D(()=>_(n),()=>{var Q;y(f,((Q=_(n))==null?void 0:Q.fill)??"none")}),D(()=>_(n),()=>{var Q;y(p,((Q=_(n))==null?void 0:Q.inset)??.2)}),D(()=>_(p),()=>{y(g,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:_(p)})}),D(()=>Z(m()),()=>{y(h,Qa(m().cells))}),we(),he();var F=s6(),z=se(F);L(z,"id",k);var P=U(V(z));B(z);var j=U(z);Dp(j,{id:G,l:.2,get strokeWidth(){return _(o)},get stroke(){return _(i)}});var J=U(j);Tr(J,{get cells(){return m().cells},get shape(){return _(g)}});var ae=U(J);et(ae,1,()=>m().lines,Ct,(Q,re)=>{var ge=ye(),oe=se(ge);{var pe=Ne=>{var xe=o6();te(()=>L(xe,"d",Qa(_(re),_(u)))),L(xe,"stroke-linejoin",b),L(xe,"stroke-linecap",O),L(xe,"marker-end",`url(#${G??""})`),te(()=>{L(xe,"stroke",_(i)),L(xe,"stroke-width",_(o)),L(xe,"opacity",_(c)),L(xe,"stroke-dasharray",_(a))}),S(Ne,xe)};ne(oe,Ne=>{_(re).length>1&&Ne(pe)})}S(Q,ge)}),te(()=>{L(P,"stroke-width",2*_(r)-_(o)),L(P,"d",_(h))}),S(t,F),ue()}var l6=ee('<path class="arrow-line" fill="none"></path>'),c6=ee('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function bu(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"tool",8),f=M(e,"c_id",8),p=M(e,"shape",8);const g="round",h="round",m=crypto.randomUUID(),E=`arrow-mask-${f()}-${m}`,I=`arrow-marker-${f()}-${m}`;D(()=>Z(p()),()=>{var z;y(n,((z=p())==null?void 0:z.r)??.4)}),D(()=>Z(p()),()=>{var z;y(r,((z=p())==null?void 0:z.stroke)??"gray")}),D(()=>Z(p()),()=>{var z;y(i,((z=p())==null?void 0:z.strokeWidth)??.1)}),D(()=>Z(p()),()=>{var z;y(o,((z=p())==null?void 0:z.strokeDasharray)??0)}),D(()=>(_(n),Z(p())),()=>{var z,P,j,J;y(a,{shortenHead:_(n),shortenTail:((P=(z=p())==null?void 0:z.linePathOptions)==null?void 0:P.shortenTail)??.2,bezierRounding:((J=(j=p())==null?void 0:j.linePathOptions)==null?void 0:J.bezierRounding)??.4})}),D(()=>Z(u()),()=>{y(c,Qa(u().cells))}),we(),he();var b=c6(),O=se(b);L(O,"id",E);var A=U(V(O));B(O);var k=U(O);Dp(k,{id:I,l:.2,get strokeWidth(){return _(i)},get stroke(){return _(r)}});var G=U(k);L(G,"mask",`url(#${E??""})`);var F=U(G);et(F,1,()=>u().lines,Ct,(z,P)=>{var j=ye(),J=se(j);{var ae=Q=>{var re=l6();te(()=>L(re,"d",Qa(_(P),_(a)))),L(re,"stroke-linejoin",g),L(re,"stroke-linecap",h),L(re,"marker-end",`url(#${I??""})`),te(()=>{L(re,"stroke",_(r)),L(re,"stroke-width",_(i)),L(re,"stroke-dasharray",_(o))}),S(Q,re)};ne(J,Q=>{_(P).length>1&&Q(ae)})}S(z,j)}),te(()=>{L(A,"stroke-width",2*_(n)-_(i)),L(A,"d",_(c)),L(G,"d",_(c)),L(G,"stroke-width",2*_(n)+_(i)),L(G,"stroke",_(r))}),S(t,b),ue()}var u6=ee("<!><!><!>",1),d6=ee('<g class="arrow-tool"><!></g>');function _6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N();let u=M(e,"tool",8),f=M(e,"c_id",8);const p=dn(u().toolId,Pt)??dv;D(()=>Z(u()),()=>{y(i,u().shape??p)}),D(()=>_(i),()=>{y(o,{..._(i),stroke:"var(--grid-background-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.06:.06})}),D(()=>_(i),()=>{y(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;y(c,(I=r())==null?void 0:I.id)}),we(),he();var g=d6(),h=V(g);{var m=I=>{a6(I,{get tool(){return u()},get arrowId(){return f()}})},E=I=>{var b=u6(),O=se(b);{var A=z=>{bu(z,{get tool(){return u()},get c_id(){return f()},get shape(){return _(o)}})};ne(O,z=>{z(A)})}var k=U(O);{var G=z=>{bu(z,{get tool(){return u()},get c_id(){return f()},get shape(){return _(a)}})};ne(k,z=>{f()===_(c)&&z(G)})}var F=U(k);bu(F,{get tool(){return u()},get c_id(){return f()},get shape(){return _(i)}}),S(I,b)};ne(h,I=>{_(i).type===W.BULBOUS_ARROW?I(m):I(E,!1)})}B(g),S(t,g),ue()}var f6=ee('<g class="cage-tool"><!><!></g>');function g6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N();let c=M(e,"tool",8),u=M(e,"c_id",8);const f=dn(c().toolId,Pt)??wd;D(()=>Z(c()),()=>{y(i,c().shape??f)}),D(()=>r(),()=>{var E;y(o,(E=r())==null?void 0:E.id)}),D(()=>_(i),()=>{y(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),we(),he();var p=f6(),g=V(p);{var h=E=>{Tr(E,{get cells(){return c().cells},get shape(){return _(a)}})};ne(g,E=>{u()===_(o)&&E(h)})}var m=U(g);Rp(m,{get cells(){return c().cells},get shape(){return _(i)},get value(){return c().value}}),B(p),S(t,p),ue()}var h6=ee("<!><!>",1),v6=ee('<g class="clone-tool"><!><!><!><!><!></g>');function p6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(zt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),p=N(),g=N(),h=N(),m=N();let E=M(e,"tool",8),I=M(e,"c_id",8);const b=dn(E().toolId,Pt)??Iw,O=800,A=E().value;D(()=>r(),()=>{var ae;y(i,(ae=r())==null?void 0:ae.id)}),D(()=>Z(E()),()=>{y(o,E().shape??b)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>_(o),()=>{y(c,_(o).inset??.15)}),D(()=>_(o),()=>{y(u,_(o).strokeWidth??.07)}),D(()=>_(o),()=>{y(f,_(o).fontColor??_(o).stroke??"black")}),D(()=>Z(E()),()=>{y(p,E().cells[E().cells.length-1])}),D(()=>Z(E()),()=>{y(g,E().cells2[E().cells2.length-1])}),D(()=>(_(p),_(c)),()=>{y(h,new Te(_(p).c+1-_(c)-.05,_(p).r+1-_(c)-.05))}),D(()=>(_(g),_(c)),()=>{y(m,new Te(_(g).c+1-_(c)-.05,_(g).r+1-_(c)-.05))}),we(),he();var k=v6(),G=V(k);{var F=ae=>{var Q=h6(),re=se(Q);Tr(re,{get cells(){return E().cells},get shape(){return _(a)}});var ge=U(re);Tr(ge,{get cells(){return E().cells2},get shape(){return _(a)}}),S(ae,Q)};ne(G,ae=>{I()===_(i)&&ae(F)})}var z=U(G);Tr(z,{get cells(){return E().cells},get shape(){return _(o)}});var P=U(z);ps(P,{value:A,get x(){return _(h).x},get y(){return _(h).y},position:"BR",get fontColor(){return _(f)},fontWeight:O});var j=U(P);Tr(j,{get cells(){return E().cells2},get shape(){return _(o)}});var J=U(j);ps(J,{value:A,get x(){return _(m).x},get y(){return _(m).y},position:"BR",get fontColor(){return _(f)},fontWeight:O}),B(k),S(t,k),ue()}var m6=ee('<g class="element-group"></g>'),E6=ee('<g class="element-group"></g>'),C6=ee('<g class="element-group"></g>'),I6=ee('<g class="element-group"></g>'),b6=ee('<g class="element-group"></g>'),O6=ee('<g class="element-group"></g>');function w6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(t$,"$underlayElementsStore",n),i=N();D(()=>r(),()=>{y(i,r())}),we(),he();var o=ye(),a=se(o);et(a,1,()=>_(i),Ct,(c,u)=>{var f=ye(),p=se(f);{var g=m=>{var E=m6();et(E,5,()=>Object.entries(_(u).constraints),I=>I[0],(I,b)=>{V4(I,{get tool(){return _(b)[1]},get c_id(){return _(b)[0]}})}),B(E),te(()=>L(E,"data-toolId",_(u).toolId)),S(m,E)},h=m=>{var E=ye(),I=se(E);{var b=A=>{var k=E6();et(k,5,()=>Object.entries(_(u).constraints),G=>G[0],(G,F)=>{r6(G,{get tool(){return _(F)[1]},get c_id(){return _(F)[0]}})}),B(k),te(()=>L(k,"data-toolId",_(u).toolId)),S(A,k)},O=A=>{var k=ye(),G=se(k);{var F=P=>{var j=C6();et(j,5,()=>Object.entries(_(u).constraints),J=>J[0],(J,ae)=>{_6(J,{get tool(){return _(ae)[1]},get c_id(){return _(ae)[0]}})}),B(j),te(()=>L(j,"data-toolId",_(u).toolId)),S(P,j)},z=P=>{var j=ye(),J=se(j);{var ae=re=>{var ge=I6();et(ge,5,()=>Object.entries(_(u).constraints),oe=>oe[0],(oe,pe)=>{g6(oe,{get tool(){return _(pe)[1]},get c_id(){return _(pe)[0]}})}),B(ge),te(()=>L(ge,"data-toolId",_(u).toolId)),S(re,ge)},Q=re=>{var ge=ye(),oe=se(ge);{var pe=xe=>{var Oe=b6();et(Oe,5,()=>Object.entries(_(u).constraints),Ie=>Ie[0],(Ie,je)=>{p6(Ie,{get tool(){return _(je)[1]},get c_id(){return _(je)[0]}})}),B(Oe),te(()=>L(Oe,"data-toolId",_(u).toolId)),S(xe,Oe)},Ne=xe=>{var Oe=ye(),Ie=se(Oe);{var je=qe=>{var It=O6();et(It,5,()=>Object.entries(_(u).constraints),xt=>xt[0],(xt,jt)=>{Ap(xt,{get tool(){return _(jt)[1]},get c_id(){return _(jt)[0]}})}),B(It),te(()=>L(It,"data-toolId",_(u).toolId)),S(qe,It)};ne(Ie,qe=>{Li(_(u).toolId)&&qe(je)},!0)}S(xe,Oe)};ne(oe,xe=>{bd(_(u).toolId)?xe(pe):xe(Ne,!1)},!0)}S(re,ge)};ne(J,re=>{dl(_(u).toolId)?re(ae):re(Q,!1)},!0)}S(P,j)};ne(G,P=>{ul(_(u).toolId)?P(F):P(z,!1)},!0)}S(A,k)};ne(I,A=>{cl(_(u).toolId)?A(b):A(O,!1)},!0)}S(m,E)};ne(p,m=>{Cd(_(u).toolId)?m(g):m(h,!1)})}S(c,f)}),S(t,o),ue()}var y6=ee('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!></svg>');function L6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(mn,"$gridStore",n),i=()=>Ee(gt,"$localConstraintsStore",n),o=()=>Ee(Qt,"$toolStore",n),a=()=>Ee(Qn,"$cellsStore",n),c=()=>Ee(Ip,"$fogLightsStore",n),u=()=>Ee(a$,"$cornerLineToolsStore",n),f=()=>Ee(i$,"$edgeToolsStore",n),p=()=>Ee(s$,"$cornerToolsStore",n),g=()=>Ee(o$,"$centerCornerOrEdgeToolsStore",n),h=()=>Ee(Vu,"$simpleCellToolPreviewStore",n),m=()=>Ee(Xu,"$singleCellArrowPreviewStore",n),E=()=>Ee(qu,"$singleCellMultiArrowPreviewStore",n),I=()=>Ee(Zu,"$edgeToolPreviewStore",n),b=()=>Ee(Qu,"$cornerToolPreviewStore",n),O=()=>Ee(Ha,"$outsideDirectionToolPreviewStore",n),A=N(),k=N(),G=N();let F=M(e,"svgRef",12,null);function z(){for(const[rt,xn]of i().entries()){if(!Li(rt))continue;if(Object.entries(xn).some(([Wr,Rn])=>!Mt(Rn.cell,_(k))))return!0}return!1}function P(rt,xn){const Hs=z(),Wr=Li(xn),Rn=Hs||Wr?1:.2,Uo=-Rn,$o=-Rn,Fo=rt.nCols+2*Rn,Po=rt.nRows+2*Rn;return{x:Uo,y:$o,width:Fo,height:Po}}function j(rt){return`${rt.x} ${rt.y} ${rt.width} ${rt.height}`}D(()=>r(),()=>{y(A,r())}),D(()=>_(A),()=>{y(k,{nRows:_(A).nRows,nCols:_(A).nCols})}),D(()=>(_(k),o()),()=>{y(G,P(_(k),o()))}),we(),he();var J=y6();te(()=>L(J,"viewBox",j(_(G))));var ae=V(J);v4(ae);var Q=U(ae);hP(Q,{get boundingBox(){return _(G)},get gridShape(){return _(k)}});var re=U(Q);pP(re,{get gridShape(){return _(k)}});var ge=U(re);eF(ge,{get grid(){return r()}});var oe=U(ge);T$(oe,{get gridShape(){return _(k)}});var pe=U(oe);et(pe,5,a,Ct,(rt,xn)=>{SF(rt,{get cell(){return _(xn)}})}),B(pe);var Ne=U(pe);KF(Ne,{});var xe=U(Ne);C4(xe,{get element(){return c()}});var Oe=U(xe);w6(Oe,{});var Ie=U(Oe);G$(Ie,{});var je=U(Ie);fP(je,{});var qe=U(je);q$(qe,{});var It=U(qe);Ga(It,{get elements(){return u()},g_name:"corner-line-tools-layer",Component:e4});var xt=U(It);Q$(xt,{get boundingBox(){return _(G)}});var jt=U(xt);x$(jt,{});var kt=U(jt);Ga(kt,{get elements(){return f()},g_name:"edge-tools-layer",Component:l4});var Ut=U(kt);Ga(Ut,{get elements(){return p()},g_name:"corner-tools-layer",Component:FP});var nn=U(Ut);Ga(nn,{get elements(){return g()},g_name:"center-corner-edge-tools-layer",Component:WP});var _r=U(nn);zF(_r,{});var Bn=U(_r);et(Bn,5,a,Ct,(rt,xn)=>{yF(rt,{get cell(){return _(xn)}})}),B(Bn);var Bi=U(Bn);IP(Bi,{});var Ir=U(Bi);oP(Ir,{});var br=U(Ir);{var $e=rt=>{W4(rt,{get tool_preview(){return h()}})};ne(br,rt=>{sv(o())&&o()!==d.FOG_LIGHTS&&h()&&rt($e)})}var Le=U(br);{var Me=rt=>{D4(rt,{get tool_preview(){return m()}})};ne(Le,rt=>{sl(o())&&m()&&rt(Me)})}var Ue=U(Le);{var Rt=rt=>{Np(rt,{get tool(){return E()}})};ne(Ue,rt=>{al(o())&&E()&&rt(Rt)})}var Mo=U(Ue);{var $l=rt=>{w4(rt,{get tool_preview(){return I()}})};ne(Mo,rt=>{ll(o())&&I()&&rt($l)})}var Br=U(Mo);{var Nn=rt=>{A4(rt,{get tool_preview(){return b()}})};ne(Br,rt=>{Id(o())&&b()&&rt(Nn)})}var gi=U(Br);{var Wi=rt=>{Ap(rt,{get tool(){return O()}})};ne(gi,rt=>{Li(o())&&O()&&rt(Wi)})}B(J),xi(J,rt=>F(rt),()=>F()),S(t,J),ue()}function A6(t){return kw(t)?(ew(),!0):!1}function S6(t){return Gw(t)?(Kv(),!0):!1}function N6(t){return Mw(t)?(Vv(),!0):!1}function Ou(t){(A6(t)||S6(t)||N6(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var x6=de('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function R6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(bp,"$InputHandlerStore",n),i=()=>Ee(_o,"$svgRefStore",n),o=N();let a=N(null);function c(h){return m=>{h&&_(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===_(a))&&h(m)}}D(()=>r(),()=>{y(o,r())}),we();var u=x6();Ge("keydown",nu,function(...h){Ou==null||Ou.apply(this,h)});var f=zg(()=>{var h;return c((h=_(o))==null?void 0:h.keyDown)});Ge("keydown",nu,function(...h){var m;(m=_(f))==null||m.apply(this,h)});var p=zg(()=>{var h;return c((h=_(o))==null?void 0:h.keyUp)});Ge("keyup",nu,function(...h){var m;(m=_(p))==null||m.apply(this,h)});var g=V(u);L6(g,{get svgRef(){return Bh(),i()},set svgRef(h){ms(_o,h)},$$legacy:!0}),B(u),xi(u,h=>y(a,h),()=>_(a)),Ge("pointerdown",u,su(er(h=>{var m;h.currentTarget.focus(),(m=_(o))==null||m.pointerDown(h)})),!0),Ge("pointermove",u,su(er(h=>{var m;h.currentTarget.focus(),(m=_(o))==null||m.pointerMove(h)})),!0),Ge("pointerup",u,su(er(h=>{var m;h.currentTarget.focus(),(m=_(o))==null||m.pointerUp(h)})),!0),S(t,u),ue()}var T6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function D6(t){var e=T6();S(t,e)}var k6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function G6(t){var e=k6();S(t,e)}var M6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function U6(t){var e=M6();S(t,e)}var $6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function F6(t){var e=$6();S(t,e)}var P6=de('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function H6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(xo,"$commandHistoryStore",n),i=()=>Ee(zu,"$selectOnStore",n),o=N(),a=N();function c(){Kv()}function u(){Vv()}function f(){console.log("check")}function p(){ms(zu,!i())}D(()=>r(),()=>{y(o,r()._undoStack.length===0)}),D(()=>r(),()=>{y(a,r()._redoStack.length===0)}),we(),he();var g=P6(),h=V(g),m=V(h);F6(m),B(h);var E=U(h,2),I=V(E);G6(I),B(E);var b=U(E,2);b.disabled=!0;var O=V(b);D6(O),B(b);var A=U(b,2),k=V(A);U6(k),B(A),B(g),te(()=>{h.disabled=_(o),E.disabled=_(a),L(A,"aria-checked",i()),yt(A,"active",i())}),Ge("click",h,c),Ge("click",E,u),Ge("click",b,f),Ge("click",A,p),S(t,g),ue()}var B6=de('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),W6=de('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),z6=de('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),Y6=de('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function j6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(si,"$settingsStore",n),i=()=>Ee(Xa,"$penColorStore",n),o=()=>Ee(bp,"$InputHandlerStore",n),a=N(),c=N(),u=[];let f=M(e,"selectedTool",8);const p=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let h=N(!1);function m(P){return P?g:p}function E(P){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(P)}function I(P){const j=P.currentTarget;if(!j)return;const J=j.getAttribute("aria-checked");y(h,J!=="true")}D(()=>r(),()=>{y(a,r().penToolActive)}),D(()=>r(),()=>{y(c,r().letterToolActive)}),we(),he();var b=Y6(),O=V(b);{var A=P=>{var j=ye(),J=se(j);et(J,1,()=>p,Ct,(ae,Q)=>{var re=B6(),ge=V(re);an(ge);var oe;Ni(2),B(re),te(()=>{L(re,"data-value",_(Q)),yt(re,"active",i()===_(Q)),oe!==(oe=_(Q))&&(ge.value=(ge.__value=_(Q))==null?"":_(Q))}),il(u,[],ge,()=>(_(Q),i()),pe=>ms(Xa,pe)),S(ae,re)}),S(P,j)},k=P=>{var j=ye(),J=se(j);et(J,1,()=>m(_(h)),Ct,(ae,Q)=>{var re=W6(),ge=V(re),oe=V(ge,!0);B(ge),Ni(2),B(re),te(()=>{rw(re,_(Q)),at(oe,_(Q))}),Ge("click",re,function(...pe){var Ne;(Ne=o()&&o().padClick)==null||Ne.apply(this,pe)}),S(ae,re)}),S(P,j)};ne(O,P=>{f()===d.PEN_TOOL&&_(a)?P(A):P(k,!1)})}var G=U(O,2);{var F=P=>{var j=z6();te(()=>{L(j,"aria-checked",_(h)),yt(j,"letter-checked",_(h)),yt(j,"num-checked",!_(h))}),Ge("click",j,I),S(P,j)};ne(G,P=>{_(c)&&E(f())&&P(F)})}var z=U(G,2);B(b),te(()=>{yt(b,"digit",f()===d.DIGIT),yt(b,"center",f()===d.CENTER_PM),yt(b,"corner",f()===d.CORNER_PM),yt(b,"color",f()===d.HIGHLIGHTS),yt(b,"pen",f()===d.PEN_TOOL),yt(z,"letter-tool",_(c))}),Ge("click",z,function(...P){var j;(j=o()&&o().padClick)==null||j.apply(this,P)}),S(t,b),ue()}var K6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function V6(t){var e=K6();S(t,e)}var X6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function q6(t){var e=X6();S(t,e)}var Z6=de('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function rs(t,e){ce(e,!1);const n=[];let r=M(e,"selectedTool",12),i=M(e,"value",8),o=M(e,"title",8,void 0);function a(){Yu(i())}he();var c=Z6(),u=V(c);an(u);var f,p=U(u,2);ht(p,e,"default",{}),B(c),te(()=>{L(c,"title",o()),yt(c,"active",i()===r()),f!==(f=i())&&(u.value=(u.__value=i())==null?"":i())}),il(n,[],u,()=>(i(),r()),r),Ge("change",u,a),S(t,c),ue()}var Q6=de('<span aria-hidden="true">1</span>'),J6=de('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),e9=de('<span aria-hidden="true" style="font-size: 50%">123</span>'),t9=de('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),n9=de('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),r9=de('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function i9(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(si,"$settingsStore",n);let i=M(e,"selectedTool",12);he();var o=r9(),a=V(o);rs(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=Q6();S(h,E)},$$slots:{default:!0},$$legacy:!0});var c=U(a,2);rs(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=J6();S(h,E)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);rs(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=e9();S(h,E)},$$slots:{default:!0},$$legacy:!0});var f=U(u,2);rs(f,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=t9(),I=V(E);V6(I),B(E),S(h,E)},$$slots:{default:!0},$$legacy:!0});var p=U(f,2);{var g=h=>{rs(h,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=n9(),b=V(I);q6(b),B(I),S(m,I)},$$slots:{default:!0},$$legacy:!0})};ne(p,h=>{r().penToolActive&&h(g)})}B(o),S(t,o),ue()}var o9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function s9(t){var e=o9();S(t,e)}var a9=de('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function $s(t,e){let n=M(e,"title",8,void 0),r=M(e,"clickCb",8,void 0);var i=a9(),o=V(i),a=V(o);ht(a,e,"default",{}),B(o),B(i),te(()=>L(i,"title",n())),Ge("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),S(t,i)}var l9=de('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),c9=de('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function u9(t,e){ce(e,!1);let n=M(e,"showModal",12,!1);function r(){n(!1)}function i(){qv(),qa(),n(!1)}he(),Pr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=c9(),u=U(V(c),2);yl(u,{children:(f,p)=>{var g=l9(),h=se(g),m=U(h,2);Ge("click",h,i),Ge("click",m,r),S(f,g)},$$slots:{default:!0}}),B(c),S(o,c)},$$slots:{default:!0},$$legacy:!0}),ue()}var d9=de("<!> <!>",1);function _9(t){let e=N(!1);function n(){y(e,!0)}var r=d9(),i=se(r);$s(i,{title:"Restart",clickCb:n,children:(a,c)=>{s9(a)},$$slots:{default:!0}});var o=U(i,2);u9(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var f9=de('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function is(t,e){let n=M(e,"title",8);var r=f9(),i=V(r),o=V(i,!0);B(i);var a=U(i,2);ht(a,e,"default",{}),B(r),te(()=>at(o,n())),S(t,r)}var g9=de('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function vn(t,e){let n=M(e,"description",8);var r=g9(),i=V(r),o=V(i,!0);B(i);var a=U(i,2),c=V(a);ht(c,e,"default",{}),B(a),B(r),te(()=>at(o,n())),S(t,r)}var h9=de('<div class="shortcut svelte-1cgt5u5"> </div>');function un(t,e){let n=M(e,"shortcut",8);var r=h9(),i=V(r,!0);B(r),te(()=>at(i,n())),S(t,r)}var v9=de("<p></p>"),p9=de("<!> <!> <!> <!>",1),m9=de("<!> or <!>",1),E9=de("<!> <!> <!> <!> <!> <!> <!> <!>",1),C9=de("<!> <!>",1),I9=de('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function b9(t,e){let n=M(e,"showModal",12,!1);Pr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=I9(),a=V(o);is(a,{title:"Setting Instructions",children:(g,h)=>{var m=v9();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",S(g,m)},$$slots:{default:!0}});var c=U(a,2);is(c,{title:"General",children:(g,h)=>{vn(g,{description:"Toggle Darkmode",children:(m,E)=>{un(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=U(c,2);is(u,{title:"Selection",children:(g,h)=>{var m=p9(),E=se(m);vn(E,{description:"Select cells",children:(A,k)=>{un(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=U(E,2);vn(I,{description:"Add to current selection",children:(A,k)=>{un(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=U(I,2);vn(b,{description:"Remove from current selection",children:(A,k)=>{un(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var O=U(b,2);vn(O,{description:"Add or remove from current selection",children:(A,k)=>{un(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),S(g,m)},$$slots:{default:!0}});var f=U(u,2);is(f,{title:"Change Tool",children:(g,h)=>{var m=E9(),E=se(m);vn(E,{description:"Cycle Tool",children:(z,P)=>{un(z,{shortcut:"Space"})},$$slots:{default:!0}});var I=U(E,2);vn(I,{description:"Change to Digit Tool",children:(z,P)=>{un(z,{shortcut:"Z"})},$$slots:{default:!0}});var b=U(I,2);vn(b,{description:"Change to Corner Pencilmark Tool",children:(z,P)=>{un(z,{shortcut:"X"})},$$slots:{default:!0}});var O=U(b,2);vn(O,{description:"Change to Center Pencilmark Tool",children:(z,P)=>{un(z,{shortcut:"C"})},$$slots:{default:!0}});var A=U(O,2);vn(A,{description:"Change to Highlights Tool",children:(z,P)=>{un(z,{shortcut:"V"})},$$slots:{default:!0}});var k=U(A,2);vn(k,{description:"Quickshift To Corner Pencilmark Tool",children:(z,P)=>{un(z,{shortcut:"Shift"})},$$slots:{default:!0}});var G=U(k,2);vn(G,{description:"Quickshift To Center Pencilmark Tool",children:(z,P)=>{un(z,{shortcut:"Ctrl"})},$$slots:{default:!0}});var F=U(G,2);vn(F,{description:"Quickshift To Highlights Tool",children:(z,P)=>{var j=m9(),J=se(j);un(J,{shortcut:"Shift + Ctrl"});var ae=U(J,2);un(ae,{shortcut:"Alt"}),S(z,j)},$$slots:{default:!0}}),S(g,m)},$$slots:{default:!0}});var p=U(f,2);is(p,{title:"Undo/Redo",children:(g,h)=>{var m=C9(),E=se(m);vn(E,{description:"Undo",children:(b,O)=>{un(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=U(E,2);vn(I,{description:"Redo",children:(b,O)=>{un(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),S(g,m)},$$slots:{default:!0}}),B(o),S(r,o)},$$slots:{default:!0},$$legacy:!0})}var O9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function w9(t){var e=O9();S(t,e)}var y9=de("<!> <!>",1);function L9(t){let e=N(!1);function n(){y(e,!0)}var r=y9(),i=se(r);$s(i,{title:"Info",clickCb:n,children:(a,c)=>{w9(a)},$$slots:{default:!0}});var o=U(i,2);b9(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var A9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function S9(t){var e=A9();S(t,e)}var N9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function x9(t){var e=N9();S(t,e)}function R9(t){let e=N(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),y(e,!_(e))}$s(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=ye(),f=se(u);{var p=h=>{x9(h)},g=h=>{S9(h)};ne(f,h=>{_(e)?h(p):h(g,!1)})}S(a,u)},$$slots:{default:!0}})}function kp(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"renderers",8),i=M(e,"options",8);he();var o=ye(),a=se(o);{var c=u=>{var f=ye(),p=se(f);Yh(p,()=>r()[n().type],(g,h)=>{h(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=ye(),b=se(I);{var O=k=>{el(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=k=>{var G=TO();te(()=>at(G,n().raw)),S(k,G)};ne(b,k=>{"tokens"in n()&&n().tokens?k(O):k(A,!1)})}S(m,I)},$$slots:{default:!0}})}),S(u,f)};ne(a,u=>{r()[n().type]&&u(c)})}S(t,o),ue()}function el(t,e){let n=M(e,"tokens",8),r=M(e,"renderers",8),i=M(e,"options",8);var o=ye(),a=se(o);{var c=u=>{var f=ye(),p=se(f);et(p,1,n,Ct,(g,h)=>{kp(g,{get token(){return _(h)},get renderers(){return r()},get options(){return i()}})}),S(u,f)};ne(a,u=>{n()&&u(c)})}S(t,o)}function Gp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function Mp(t){return t.startsWith("/")||t.startsWith("#")}function T9(t,e){return e.slug(t).replace(/--+/g,"-")}function D9(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;let o=N();D(()=>(Z(n()),Z(r())),()=>{y(o,T9(n().text,r().slugger))}),we(),he();var a=ye(),c=se(a);return Kh(c,()=>`h${n().depth}`,!1,(u,f)=>{let p;te(()=>p=zh(u,p,{id:_(o)},void 0,u.namespaceURI===nd,u.nodeName.includes("-")));var g=ye(),h=se(g);ht(h,e,"default",{}),S(f,g)}),S(t,a),nt(e,"renderers",i),ue({renderers:i})}var k9=de("<blockquote><!></blockquote>");function G9(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=k9(),a=V(o);return ht(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}function M9(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8),o=N();D(()=>Z(n()),()=>{y(o,n().ordered?"ol":"ul")}),we(),he();var a=ye(),c=se(a);Kh(c,()=>_(o),!1,(u,f)=>{let p;te(()=>p=zh(u,p,{start:n().start||1},void 0,u.namespaceURI===nd,u.nodeName.includes("-")));var g=ye(),h=se(g);et(h,1,()=>n().items,Ct,(m,E)=>{var I=Qe(()=>({..._(E)}));kp(m,{get token(){return _(I)},get options(){return r()},get renderers(){return i()}})}),S(f,g)}),S(t,a),ue()}var U9=de("<li><!></li>");function $9(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=U9(),a=V(o);return ht(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var F9=de("<br>");function P9(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=F9();return S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var H9=de("<pre><code> </code></pre>");function B9(t,e){ce(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=H9(),a=V(o),c=V(a,!0);return B(a),B(o),te(()=>{sw(a,`lang-${n().lang}`),at(c,n().text)}),S(t,o),nt(e,"options",r),nt(e,"renderers",i),ue({options:r,renderers:i})}var W9=de("<code> </code>");function z9(t,e){ce(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=W9(),a=V(o,!0);return te(()=>at(a,n().raw.slice(1,n().raw.length-1))),B(o),S(t,o),nt(e,"options",r),nt(e,"renderers",i),ue({options:r,renderers:i})}var Y9=de('<th scope="col"><!></th>'),j9=de("<td><!></td>"),K9=de("<tr></tr>"),V9=de("<table><thead><tr></tr></thead><tbody></tbody></table>");function X9(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8);he();var o=V9(),a=V(o),c=V(a);et(c,5,()=>n().header,Ct,(f,p)=>{var g=Y9(),h=V(g);el(h,{get tokens(){return _(p).tokens},get options(){return r()},get renderers(){return i()}}),B(g),S(f,g)}),B(c),B(a);var u=U(a);et(u,5,()=>n().rows,Ct,(f,p)=>{var g=K9();et(g,5,()=>_(p),Ct,(h,m)=>{var E=j9(),I=V(E);el(I,{get tokens(){return _(m).tokens},get options(){return r()},get renderers(){return i()}}),B(E),S(h,E)}),B(g),S(f,g)}),B(u),B(o),S(t,o),ue()}function q9(t,e){ce(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=ye(),a=se(o);return ow(a,()=>n().text),S(t,o),nt(e,"options",r),nt(e,"renderers",i),ue({options:r,renderers:i})}var Z9=de("<p><!></p>");function Q9(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=Z9(),a=V(o);return ht(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var J9=de("<a><!></a>");function eH(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=J9();te(()=>L(o,"href",Mp(n().href)?Gp(r().baseUrl,n().href):n().href));var a=V(o);return ht(a,e,"default",{}),B(o),te(()=>L(o,"title",n().title)),S(t,o),nt(e,"renderers",i),ue({renderers:i})}function tH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=ye(),a=se(o);return ht(a,e,"default",{}),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var nH=de("<dfn><!></dfn>");function rH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=nH(),a=V(o);return ht(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var iH=de("<del><!></del>");function oH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=iH(),a=V(o);return ht(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var sH=de("<em><!></em>");function aH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=sH(),a=V(o);return ht(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var lH=de("<hr>");function cH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=lH();return S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var uH=de("<strong><!></strong>");function dH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=uH(),a=V(o);return ht(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var _H=de('<img class="markdown-image svelte-z38cge">');function fH(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=_H();return te(()=>L(o,"src",Mp(n().href)?Gp(r().baseUrl,n().href):n().href)),te(()=>{L(o,"title",n().title),L(o,"alt",n().text)}),S(t,o),nt(e,"renderers",i),ue({renderers:i})}function Rh(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=ye(),a=se(o);return ht(a,e,"default",{}),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}const gH=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,hH=Object.hasOwnProperty;class vH{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=pH(e,n===!0);const o=i;for(;hH.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function pH(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(gH,"").replace(/ /g,"-"))}function o_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Hi=o_();function Up(t){Hi=t}const $p=/[&<>"']/,mH=new RegExp($p.source,"g"),Fp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,EH=new RegExp(Fp.source,"g"),CH={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Th=t=>CH[t];function $n(t,e){if(e){if($p.test(t))return t.replace(mH,Th)}else if(Fp.test(t))return t.replace(EH,Th);return t}const IH=/(^|[^\[])\^/g;function Ot(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(IH,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Dh(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const fs={exec:()=>null};function kh(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,f=a;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function os(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function bH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Gh(t,e,n,r){const i=e.href,o=e.title?$n(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:$n(a)}}function OH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class tl{constructor(e){Ce(this,"options");Ce(this,"rules");Ce(this,"lexer");this.options=e||Hi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:os(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=OH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=os(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:os(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=os(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let f;for(f=0;f<r.length;f++)if(/^ {0,3}>/.test(r[f]))u.push(r[f]),c=!0;else if(!c)u.push(r[f]);else break;r=r.slice(f);const p=u.join(`
`),g=p.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${p}`:p,o=o?`${o}
${g}`:g;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=h,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,i=i.substring(0,i.length-E.raw.length)+b.raw,o=o.substring(0,o.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,o=o.substring(0,o.length-E.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,f="",p="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;f=n[0],e=e.substring(f.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,O=>" ".repeat(3*O.length)),h=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,p=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,p=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(h)&&(f+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const O=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),F=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const z=e.split(`
`,1)[0];let P;if(h=z,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),P=h):P=h.replace(/\t/g,"    "),k.test(h)||G.test(h)||F.test(h)||O.test(h)||A.test(h))break;if(P.search(/[^ ]/)>=E||!h.trim())p+=`
`+P.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(g)||G.test(g)||A.test(g))break;p+=`
`+h}!m&&!h.trim()&&(m=!0),f+=z+`
`,e=e.substring(z.length+1),g=P.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(f)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(p),I&&(b=I[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:f,task:!!I,checked:b,loose:!1,text:p,tokens:[]}),o.raw+=f}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const f=o.items[u].tokens.filter(g=>g.type==="space"),p=f.length>0&&f.some(g=>/\n.*\n/.test(g.raw));o.loose=p}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=kh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(kh(c,a.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[f]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:$n(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=os(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=bH(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Gh(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Gh(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,f=a,p=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){f+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){p+=u;continue}if(f-=u,f>0)continue;u=Math.min(u,u+f+p);const h=[...i[0]][0].length,m=e.slice(0,a+i.index+h+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=$n(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=$n(n[1]),i="mailto:"+r):(r=$n(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=$n(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=$n(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=$n(n[0]),{type:"text",raw:n[0],text:r}}}}const wH=/^(?:[ \t]*(?:\n|$))+/,yH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,LH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Fs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,AH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pp=/(?:[*+-]|\d{1,9}[.)])/,Hp=Ot(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Pp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),s_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,SH=/^[^\n]+/,a_=/(?!\s*\])(?:\\.|[^\[\]\\])+/,NH=Ot(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",a_).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),xH=Ot(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pp).getRegex(),Ul="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",l_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,RH=Ot("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",l_).replace("tag",Ul).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bp=Ot(s_).replace("hr",Fs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),TH=Ot(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bp).getRegex(),c_={blockquote:TH,code:yH,def:NH,fences:LH,heading:AH,hr:Fs,html:RH,lheading:Hp,list:xH,newline:wH,paragraph:Bp,table:fs,text:SH},Mh=Ot("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Fs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex(),DH={...c_,table:Mh,paragraph:Ot(s_).replace("hr",Fs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Mh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ul).getRegex()},kH={...c_,html:Ot(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",l_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:fs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ot(s_).replace("hr",Fs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Hp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Wp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,GH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,zp=/^( {2,}|\\)\n(?!\s*$)/,MH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ps="\\p{P}\\p{S}",UH=Ot(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ps).getRegex(),$H=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,FH=Ot(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ps).getRegex(),PH=Ot("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ps).getRegex(),HH=Ot("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ps).getRegex(),BH=Ot(/\\([punct])/,"gu").replace(/punct/g,Ps).getRegex(),WH=Ot(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zH=Ot(l_).replace("(?:-->|$)","-->").getRegex(),YH=Ot("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),nl=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,jH=Ot(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",nl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Yp=Ot(/^!?\[(label)\]\[(ref)\]/).replace("label",nl).replace("ref",a_).getRegex(),jp=Ot(/^!?\[(ref)\](?:\[\])?/).replace("ref",a_).getRegex(),KH=Ot("reflink|nolink(?!\\()","g").replace("reflink",Yp).replace("nolink",jp).getRegex(),u_={_backpedal:fs,anyPunctuation:BH,autolink:WH,blockSkip:$H,br:zp,code:GH,del:fs,emStrongLDelim:FH,emStrongRDelimAst:PH,emStrongRDelimUnd:HH,escape:Wp,link:jH,nolink:jp,punctuation:UH,reflink:Yp,reflinkSearch:KH,tag:YH,text:MH,url:fs},VH={...u_,link:Ot(/^!?\[(label)\]\((.*?)\)/).replace("label",nl).getRegex(),reflink:Ot(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",nl).getRegex()},ed={...u_,escape:Ot(Wp).replace("])","~|])").getRegex(),url:Ot(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},XH={...ed,br:Ot(zp).replace("{2,}","*").getRegex(),text:Ot(ed.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ma={normal:c_,gfm:DH,pedantic:kH},ss={normal:u_,gfm:ed,breaks:XH,pedantic:VH};class Pn{constructor(e){Ce(this,"tokens");Ce(this,"options");Ce(this,"state");Ce(this,"tokenizer");Ce(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Hi,this.options.tokenizer=this.options.tokenizer||new tl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ma.normal,inline:ss.normal};this.options.pedantic?(n.block=Ma.pedantic,n.inline=ss.pedantic):this.options.gfm&&(n.block=Ma.gfm,this.options.breaks?n.inline=ss.breaks:n.inline=ss.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ma,inline:ss}}static lex(e,n){return new Pn(n).lex(e)}static lexInline(e,n){return new Pn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let f;this.options.extensions.startBlock.forEach(p=>{f=p.call({lexer:this},u),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,f;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)p.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(f=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(r=p.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,f)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const g=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},g),typeof h=="number"&&h>=0&&(p=Math.min(p,h))}),p<1/0&&p>=0&&(o=e.substring(0,p+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(f=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}}class rl{constructor(e){Ce(this,"options");Ce(this,"parser");this.options=e||Hi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+$n(i)+'">'+(r?o:$n(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:$n(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Dh(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Dh(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class d_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Jn{constructor(e){Ce(this,"options");Ce(this,"renderer");Ce(this,"textRenderer");this.options=e||Hi,this.options.renderer=this.options.renderer||new rl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new d_}static parse(e,n){return new Jn(n).parse(e)}static parseInline(e,n){return new Jn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class gs{constructor(e){Ce(this,"options");Ce(this,"block");this.options=e||Hi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Pn.lex:Pn.lexInline}provideParser(){return this.block?Jn.parse:Jn.parseInline}}Ce(gs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class qH{constructor(...e){Ce(this,"defaults",o_());Ce(this,"options",this.setOptions);Ce(this,"parse",this.parseMarkdown(!0));Ce(this,"parseInline",this.parseMarkdown(!1));Ce(this,"Parser",Jn);Ce(this,"Renderer",rl);Ce(this,"TextRenderer",d_);Ce(this,"Lexer",Pn);Ce(this,"Tokenizer",tl);Ce(this,"Hooks",gs);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const f of u)r=r.concat(this.walkTokens(f.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const f=c[u].flat(1/0);r=r.concat(this.walkTokens(f,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new rl(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],f=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=f.apply(o,p)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new tl(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],f=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=f.apply(o,p)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new gs;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],f=o[c];gs.passThroughHooks.has(a)?o[c]=p=>{if(this.defaults.async)return Promise.resolve(u.call(o,p)).then(h=>f.call(o,h));const g=u.call(o,p);return f.call(o,g)}:o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=f.apply(o,p)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Pn.lex(e,n??this.defaults)}parser(e,n){return Jn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Pn.lex:Pn.lexInline,f=a.hooks?a.hooks.provideParser():e?Jn.parse:Jn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(p=>u(p,a)).then(p=>a.hooks?a.hooks.processAllTokens(p):p).then(p=>a.walkTokens?Promise.all(this.walkTokens(p,a.walkTokens)).then(()=>p):p).then(p=>f(p,a)).then(p=>a.hooks?a.hooks.postprocess(p):p).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let p=u(r,a);a.hooks&&(p=a.hooks.processAllTokens(p)),a.walkTokens&&this.walkTokens(p,a.walkTokens);let g=f(p,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(p){return c(p)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+$n(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Gi=new qH;function bt(t,e){return Gi.parse(t,e)}bt.options=bt.setOptions=function(t){return Gi.setOptions(t),bt.defaults=Gi.defaults,Up(bt.defaults),bt};bt.getDefaults=o_;bt.defaults=Hi;bt.use=function(...t){return Gi.use(...t),bt.defaults=Gi.defaults,Up(bt.defaults),bt};bt.walkTokens=function(t,e){return Gi.walkTokens(t,e)};bt.parseInline=Gi.parseInline;bt.Parser=Jn;bt.parser=Jn.parse;bt.Renderer=rl;bt.TextRenderer=d_;bt.Lexer=Pn;bt.lexer=Pn.lex;bt.Tokenizer=tl;bt.Hooks=gs;bt.parse=bt;bt.options;bt.setOptions;bt.use;bt.walkTokens;bt.parseInline;Jn.parse;Pn.lex;function ZH(t){return new Pn().lex(t)}const QH=()=>({heading:D9,blockquote:G9,list:M9,list_item:$9,br:P9,code:B9,codespan:z9,table:X9,html:q9,paragraph:Q9,link:eH,text:tH,def:rH,del:oH,em:aH,hr:cH,strong:dH,image:fH,space:Rh,escape:Rh}),JH=()=>({baseUrl:"/",slugger:new vH});function e7(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},jh(()=>{console.warn=t})}function Kp(t,e){ce(e,!1),e7();let n=M(e,"source",8),r=M(e,"options",24,()=>({})),i=M(e,"renderers",24,()=>({})),o=N(),a=N(),c=N();D(()=>(Z(n()),Z(i()),Z(r())),()=>{y(o,ZH(n())),y(a,{...QH(),...i()}),y(c,{...JH(),...r()})}),we(),he(),el(t,{get tokens(){return _(o)},get renderers(){return _(a)},get options(){return _(c)}}),ue()}var t7=de('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),n7=de('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),r7=de('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function i7(t,e){ce(e,!1);const n=Ye(),r=()=>Ee($r,"$puzzleMetaStore",n),i=N();let o=M(e,"showModal",12,!1);function a(u){return u?ja(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{y(i,r())}),we(),he(),Pr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,f)=>{var p=r7(),g=V(p),h=V(g,!0);B(g);var m=U(g,2),E=V(m);te(()=>at(E,`by ${a(_(i).authors)??""}`)),B(m);var I=U(m,2),b=V(I),O=Qe(()=>c(_(i).ruleset));Kp(b,{get source(){return _(O)}}),B(I);var A=U(I,2);{var k=z=>{var P=t7(),j=U(se(P),2);te(()=>L(j,"href",_(i).ctcUrl)),S(z,P)};ne(A,z=>{var P,j;(j=(P=_(i))==null?void 0:P.ctcUrl)!=null&&j.length&&z(k)})}var G=U(A,2);{var F=z=>{var P=n7(),j=U(se(P),2);te(()=>L(j,"href",_(i).ctcYoutubeUrl)),S(z,P)};ne(G,z=>{var P,j;(j=(P=_(i))==null?void 0:P.ctcYoutubeUrl)!=null&&j.length&&z(F)})}B(p),te(()=>{var z;return at(h,((z=_(i))==null?void 0:z.title)||"Puzzle")}),S(u,p)},$$slots:{default:!0},$$legacy:!0}),ue()}var o7=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function s7(t){var e=o7();S(t,e)}var a7=de("<!> <!>",1);function l7(t){let e=N(!1);function n(){y(e,!0)}var r=a7(),i=se(r);$s(i,{title:"Rules",clickCb:n,children:(a,c)=>{s7(a)},$$slots:{default:!0}});var o=U(i,2);i7(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var c7=de("<!> <!>",1);function u7(t){let e=N(!1);function n(){y(e,!0)}var r=c7(),i=se(r);$s(i,{title:"Settings",clickCb:n,children:(a,c)=>{np(a)},$$slots:{default:!0}});var o=U(i,2);rp(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var d7=de('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function _7(t){var e=d7(),n=V(e);u7(n);var r=U(n,2);l7(r);var i=U(r,2);R9(i);var o=U(i,2);L9(o);var a=U(o,2);_9(a),B(e),S(t,e)}var f7=de('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function g7(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(_o,"$svgRefStore",n),i=()=>Ee($r,"$puzzleMetaStore",n),o=()=>Ee(Qt,"$toolStore",n),a=N(),c=N();function u(){r()&&r().focus()}function f(Q){return Q?ja(Q," & ",", "):"Anonymous"}function p(Q){return Q&&Q.length?Q:"Normal sudoku rules apply."}D(()=>i(),()=>{y(a,i().title??"Sudoku")}),D(()=>i(),()=>{y(c,f(i().authors))}),we(),he();var g=f7(),h=V(g),m=V(h),E=V(m),I=V(E,!0);B(E);var b=U(E,2),O=V(b);B(b),B(m);var A=U(m,2),k=V(A),G=Qe(()=>p(i().ruleset));Kp(k,{get source(){return _(G)}}),B(A),B(h);var F=U(h,2),z=V(F);_7(z);var P=U(z,2),j=V(P);j6(j,{get selectedTool(){return o()}});var J=U(j,2);i9(J,{get selectedTool(){return Bh(),o()},set selectedTool(Q){ms(Qt,Q)},$$legacy:!0}),B(P);var ae=U(P,2);H6(ae,{}),B(F),B(g),te(()=>{at(I,_(a)),at(O,`by ${_(c)??""}`)}),Ge("click",F,er(()=>{u()})),S(t,g),ue()}var h7=de('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function R7(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Cl,"$gameModeStore",n),i=N();jh(async()=>{const m=window.location.origin,E=Yg===""?m:`${m}/${Yg}`;try{await E8({workerURL:`${E}/minizinc-worker.js`,wasmURL:`${E}/minizinc.wasm`,dataURL:`${E}/minizinc.data`})}catch(I){const b="Failed to initialize MiniZinc: "+I.message;console.log(b)}}),D(()=>r(),()=>{y(i,r())}),we(),he();var o=h7(),a=V(o),c=V(a);{var u=m=>{X8(m)};ne(c,m=>{_(i)===vo.SETTING&&m(u)})}var f=U(c,2),p=V(f);R6(p,{}),B(f);var g=U(f,2),h=V(g);g7(h,{}),B(g),B(a),B(o),S(t,o),ue()}export{R7 as G,x7 as b,NT as p,qa as r,ZT as s};
