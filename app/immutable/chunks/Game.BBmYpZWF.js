var TO=Object.defineProperty;var DO=(t,e,n)=>e in t?TO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ce=(t,e,n)=>DO(t,typeof e!="symbol"?e+"":e,n);import{c as Nu,o as kO,p as GO,q as sd,a as S,t as de,s as ee,u as Ge,d as ye,v as MO,m as UO}from"./disclose-version.eswIe671.js";import{i as he}from"./legacy.CBYIjwbu.js";import{l as Bh,h as an,k as Cs,y as Wh,v as hs,R as $O,V as FO,U as PO,g as xu,i as zh,K as Yh,a0 as HO,j as BO,u as Kg,B as WO,aJ as ad,z as zO,x as YO,a2 as ld,ar as jh,A as Vg,aK as jO,a3 as KO,a8 as VO,m as XO,c as V,r as B,t as te,p as ce,s as U,a as ue,Z as _,al as Qe,aL as D,aM as we,av as Z,_ as y,$ as N,f as se,aN as qO,aC as Di,aO as au,ak as Xg}from"./utils.Bp9j5Uj0.js";import{s as Ye,i as ne,a as Ee,b as Os,m as Kh}from"./store.D4OU4dvo.js";import{s as ui,u as ZO,a as QO,b as JO,c as ew,e as tw,f as nw,g as rw,h as iw,t as ow}from"./global.BCa6xGgH.js";import{e as et,i as It}from"./each.BoOPhUgK.js";import{i as sw,p as M}from"./props.DtgsZciY.js";import{w as kt,g as tt,d as di}from"./index.DYJKv3QC.js";import{r as ln,a as Vh,s as L,c as aw,b as lw,d as Xh}from"./attributes.CiNh_L_I.js";import{b as ki,c as qh}from"./this.DLpfsf4C.js";import{s as at}from"./render.CTsB0KRz.js";import{a as cw,o as Zh}from"./index-client.BnGHJMPg.js";import{b as qg}from"./paths.DoiMU1z3.js";function uw(t,e,n,r,i){var o=t,a="",c;Bh(()=>{if(a===(a=e()??"")){an&&Cs();return}c!==void 0&&(Yh(c),c=void 0),a!==""&&(c=Wh(()=>{if(an){hs.data;for(var u=Cs(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=$O(u);if(u===null)throw FO(),PO;Nu(hs,f),o=xu(u);return}var g=a+"",p=kO(g);Nu(zh(p),p.lastChild),o.before(p)}))})}function vt(t,e,n,r,i){var c;an&&Cs();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function Qh(t,e,n,r,i,o){let a=an;an&&Cs();var c,u,f=null;an&&hs.nodeType===1&&(f=hs,Cs());var g=an?hs:t,p;Bh(()=>{const h=e()||null;var m=h==="svg"?ad:null;h!==c&&(p&&(h===null?zO(p,()=>{p=null,u=null}):h===u?YO(p):Yh(p)),h&&h!==u&&(p=Wh(()=>{if(f=an?f:m?document.createElementNS(m,h):document.createElement(h),Nu(f,f),r){an&&GO(h)&&f.append(document.createComment(""));var E=an?zh(f):f.appendChild(BO());an&&(E===null?Kg(!1):xu(E)),r(f,E)}WO.nodes_end=f,g.before(f)})),c=h,c&&(u=c))},HO),a&&(Kg(!0),xu(g))}function ws(t,e,n){var r=t.__className,i=Jh(e);an&&t.getAttribute("class")===i?t.__className=i:(r!==i||an&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function dw(t,e,n){var r=t.__className,i=Jh(e);an&&t.className===i?t.__className=i:(r!==i||an&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function Jh(t,e){return(t??"")+""}function Lt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function er(t,e,n=e){var r=jO();sd(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=cu(t)?uu(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(an&&t.defaultValue!==t.value||KO(e)==null&&t.value)&&n(cu(t)?uu(t.value):t.value),ld(()=>{var i=e();cu(t)&&i===uu(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const lu=new Set;function cl(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),sd(n,"change",()=>{var f=n.__value;o&&(f=Zg(a,f,n.checked)),i(f)},()=>i(o?[]:null)),ld(()=>{var f=r();if(an&&n.defaultChecked!==n.checked){c=!0;return}o?(f=f||[],n.checked=f.includes(n.__value)):n.checked=sw(n.__value,f)}),jh(()=>{var f=a.indexOf(n);f!==-1&&a.splice(f,1)}),lu.has(a)||(lu.add(a),Vg(()=>{a.sort((f,g)=>f.compareDocumentPosition(g)===4?-1:1),lu.delete(a)})),Vg(()=>{if(c){var f;if(o)f=Zg(a,f,n.checked);else{var g=a.find(p=>p.checked);f=g==null?void 0:g.__value}i(f)}})}function Zg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function cu(t){var e=t.type;return e==="number"||e==="range"}function uu(t){return t===""?null:+t}function _w(t,e,n=e){sd(t,"change",()=>{n(t.files)}),ld(()=>{t.files=e()})}function nt(t,e,n){var r=VO(t,e);r&&r.set&&(t[e]=n,jh(()=>{t[e]=null}))}function fw(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function rr(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function du(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function gw(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=XO(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var Io=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(Io||{}),cd=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t))(cd||{}),ev=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(ev||{}),tv=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(tv||{}),nv=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(nv||{}),rv=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(rv||{}),iv=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(iv||{}),ov=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(ov||{}),sv=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(sv||{}),av=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(av||{}),lv=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(lv||{}),ul=(t=>(t.FOG_LIGHTS="Fog Lights",t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(ul||{}),ud=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(ud||{}),dd=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(dd||{}),_d=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(_d||{}),fd=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(fd||{}),gd=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(gd||{}),hd=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(hd||{}),vd=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(vd||{}),pd=(t=>(t.CLONE_REGION="Clone Region",t))(pd||{}),md=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(md||{}),Ed=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Ed||{}),Cd=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Cd||{}),Id=(t=>(t.MAZE_WALL="Maze Wall",t))(Id||{}),bd=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(bd||{}),Od=(t=>(t.COSMETIC_CELL_CENTER_SHAPE="Cosmetic Cell Center Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Od||{}),cv=(t=>(t.PEN_TOOL="Pen Tool",t))(cv||{});const wd={...ev,...tv,...nv,...ov,...sv,...iv,...av,...lv,...rv},uv={...ul,...ud,...dd,..._d,...fd,...gd,...hd,...vd,...pd,...md,...Ed,...Cd,...Id,...bd},d={...cd,...wd,...uv,...Od,...cv};var T=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_ELEMENT="Local Element",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(T||{});function hw(t){return Object.values(wd).includes(t)}function vw(t){return Object.values(uv).includes(t)}function pw(t){return Object.values(Od).includes(t)}function mw(t){return vw(t)||pw(t)}function dv(t){return Object.values(ul).includes(t)||t===d.COSMETIC_CELL_CENTER_SHAPE}function dl(t){return Object.values(ud).includes(t)||t===d.COSMETIC_CELL_ARROW}function _l(t){return Object.values(dd).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function yd(t){return dv(t)||dl(t)||_l(t)}function fl(t){return Object.values(_d).includes(t)||t===d.COSMETIC_EDGE}function Ld(t){return Object.values(fd).includes(t)||t===d.COSMETIC_CORNER}function gl(t){return Object.values(gd).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function hl(t){return Object.values(hd).includes(t)||t===d.COSMETIC_ARROW}function vl(t){return Object.values(vd).includes(t)||t===d.COSMETIC_CAGE}function _v(t){return Object.values(Cd).includes(t)}function fv(t){return Object.values(Id).includes(t)}function Ad(t){return Object.values(pd).includes(t)}function xi(t){const e=Object.values(md),n=Object.values(Ed);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function Ew(t){return Object.values(bd).includes(t)}function Sd(t){return Object.values(cd).includes(t)}function Cw(t){return xi(t)||yd(t)||gl(t)||hl(t)||vl(t)||Ad(t)}const Iw=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],bw=[...Iw,"Cosmetic Tool"],Ow=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function gv(t){for(const e of Object.values(d))if(e===t)return e}function hv(t,e){return Object.values(e).includes(t)}var W=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(W||{});function vn(t,e,n){n!==void 0&&(t[e]=n)}function ww(t){var e,n,r,i,o,a,c,u,f,g,p,h,m,E,I;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(f=t.strokeWidth)!=null&&f.editable||(g=t.strokeDasharray)!=null&&g.editable||(p=t.strokeDashoffset)!=null&&p.editable||(h=t.fontSize)!=null&&h.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(I=t.displayValue)!=null&&I.editable)}function Ru(t){var n,r,i,o,a,c,u,f,g,p,h,m,E,I,b,w,A,k,G,F,z,H,j;const e={type:t.type};return vn(e,"n",(n=t.n)==null?void 0:n.value),vn(e,"r",(r=t.r)==null?void 0:r.value),vn(e,"height",(i=t.height)==null?void 0:i.value),vn(e,"width",(o=t.width)==null?void 0:o.value),vn(e,"inset",(a=t.inset)==null?void 0:a.value),vn(e,"angle",(c=t.angle)==null?void 0:c.value),vn(e,"fill",(u=t.fill)==null?void 0:u.value),vn(e,"stroke",(f=t.stroke)==null?void 0:f.value),vn(e,"strokeWidth",(g=t.strokeWidth)==null?void 0:g.value),vn(e,"strokeDasharray",(p=t.strokeDasharray)==null?void 0:p.value),vn(e,"strokeDashoffset",(h=t.strokeDashoffset)==null?void 0:h.value),vn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),vn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),vn(e,"opacity",(I=t.opacity)==null?void 0:I.value),vn(e,"displayValue",(b=t.displayValue)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(A=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:A.value,shortenTail:(G=(k=t.linePathOptions)==null?void 0:k.shortenTail)==null?void 0:G.value,bezierRounding:(z=(F=t.linePathOptions)==null?void 0:F.bezierRounding)==null?void 0:z.value,closeLoops:(j=(H=t.linePathOptions)==null?void 0:H.closeLoops)==null?void 0:j.value}),e}function yw(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const Qg={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},Jg={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},eh={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Tu={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Du={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ys={type:"Line",strokeWidth:.125,stroke:"gray"},Nd={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},vv={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},Lw={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},th={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var P=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(P||{});const pl=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,Ln=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,bo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,Aw=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,en=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Oo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,xd=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,De=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Sw=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,Nw=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,xw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,wo=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Rw=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,Tw=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,Dw=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function kw(t){return dl(t)?Sw():_l(t)?Nw():t===d.XV?Tw():fl(t)?xw():vl(t)?pl():hl(t)?bo():xi(t)?Aw():gl(t)?De():Ad(t)?Dw():""}var me=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(me||{}),At=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(At||{}),Qn=(t=>(t.DYNAMIC="Dynamic",t.EDIT_BULB="Edit Bulb",t.EDIT_ARROWS="Edit Arrows",t.DELETE="Delete",t))(Qn||{}),ct=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(ct||{}),Jn=(t=>(t.DYNAMIC="Dynamic",t.SELECT="Select",t.MOVE="Move",t.DELETE="Delete",t))(Jn||{}),ii=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(ii||{}),co=(t=>(t.DYNAMIC="Dynamic",t.ADD_EDIT="Add/Edit",t.DELETE="Delete",t))(co||{});const Ls=[T.ARROW_CONSTRAINT,T.LOCAL_CONSTRAINT,T.ARROW_TOOL,T.LOCAL_ELEMENT],Gw={inputOptions:{type:me.ARROW},toolId:d.ARROW,order:P.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:bo(),tags:[],categories:Ls}},Mw={inputOptions:{type:me.ARROW},toolId:d.AVERAGE_ARROW,order:P.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:bo(),tags:[],categories:Ls}},Uw={inputOptions:{type:me.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:P.ARROW_TOOLS,shape:{type:W.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:bo(),tags:[],categories:Ls}};me.ARROW,d.SQUARE_ROOT_ARROW,P.ARROW_TOOLS,W.LINE,bo();const $w={inputOptions:{type:me.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:P.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:bo(),tags:[],categories:Ls}};function Fw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function Pw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function Hw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function Bw(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function Ww(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const zw={Delete:null,Backspace:null};function Yw(t,e=10){if(t in zw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function jw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function Kw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function Vw(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function Xw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function pv(t){return t==="Backspace"}function yo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||pv(t.key))}function qw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function Zw(t){return qw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function Qw(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Pi(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,f=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${f.source}$`,"i").test(t))}function Ur(t,e,n){if(t===void 0)return t;let r=t;return pv(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Rd=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CAGE_TOOL,T.LOCAL_ELEMENT],An=[T.CAGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CAGE_TOOL,T.LOCAL_ELEMENT];function mv(t,e=5){return Pi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ev(t,e,n){return Ur(t,e,n)}const Cn={type:W.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},ml={type:me.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},Sn={...ml,valueUpdater:(t,e)=>Ev(t,e,mv)},Jw={inputOptions:Sn,toolId:d.KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:Ln(),tags:[],categories:An}},ey={inputOptions:Sn,toolId:d.UNIQUE_DIGITS_CAGE,order:P.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:Ln(),tags:[],categories:An}},ty={inputOptions:Sn,toolId:d.INVERTED_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:Ln(),tags:[],categories:An}},ny={inputOptions:Sn,toolId:d.SUM_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:Ln(),tags:[],categories:An}},ry={inputOptions:ml,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:pl(),tags:[],categories:Rd}},iy={inputOptions:ml,toolId:d.PARITY_BALANCE_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:pl(),tags:[],categories:Rd}},oy={inputOptions:Sn,toolId:d.DIVISIBLE_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:Ln(),tags:[],categories:An}},sy={inputOptions:Sn,toolId:d.SPOTLIGHT_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:Ln(),tags:[],categories:An}},ay={inputOptions:ml,toolId:d.PUTTERIA_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:pl(),tags:[],categories:Rd}};d.KILLER_CAGE_LOOK_AND_SAY,P.CAGE_TOOLS,Ln();const ly={inputOptions:Sn,toolId:d.MULTISET_CAGE,order:P.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:Ln(),tags:[],categories:An}},cy={inputOptions:Sn,toolId:d.VAULTED_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:Ln(),tags:[],categories:An}};d.AQUARIUM_CAGE,P.CAGE_TOOLS,Ln();const uy={inputOptions:Sn,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:Ln(),tags:[],categories:An}},dy={inputOptions:Sn,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:Ln(),tags:[],categories:An}},_y={inputOptions:Sn,toolId:d.DOUBLERS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:Ln(),tags:[],categories:An}},fy={inputOptions:Sn,toolId:d.NEGATORS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:Cn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:Ln(),tags:[],categories:An}},gy={inputOptions:{type:me.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},hy={inputOptions:{type:me.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[T.CELL_INPUT_TOOL]}},vy={inputOptions:{type:me.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[T.CELL_INPUT_TOOL]}},py={inputOptions:{type:me.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},my={inputOptions:{type:me.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[T.CELL_INPUT_TOOL]}},Ey={inputOptions:{type:me.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[T.CELL_INPUT_TOOL]}},Cy={inputOptions:{type:me.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[T.CELL_INPUT_TOOL]}},Iy={inputOptions:{type:me.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},by={type:me.CENTER_CORNER_OR_EDGE,targets:At.CLOSEST},Td=[T.LOCAL_CONSTRAINT,T.CENTER_CORNER_EDGE_CONSTRAINT,T.LOCAL_ELEMENT];d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,P.OUTSIDE_TOOLS,W.CIRCLE,xd();const Oy={inputOptions:{type:me.CENTER_CORNER_OR_EDGE,targets:At.CLOSEST,valueUpdater:(t,e)=>Ur(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:P.OUTSIDE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:xd(),tags:[],categories:Td}},wy={inputOptions:{type:me.CENTER_CORNER_OR_EDGE,targets:At.CORNER_OR_EDGE,valueUpdater:(t,e)=>Ur(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:P.OUTSIDE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:xd(),tags:[],categories:Td}},yy={inputOptions:{type:me.CLONE},toolId:d.CLONE_REGION,order:P.CAGE_TOOLS,shape:{type:W.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[T.CLONE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT]}},El=[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.CORNER_TOOL,T.LOCAL_ELEMENT],Dd=[T.CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.CORNER_TOOL,T.LOCAL_ELEMENT];function Cv(t,e=3){return Pi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Iv(t,e,n){return Ur(t,e,n)}function Ly(t,e){function n(){return!0}return Ur(t,e,n)}const kd={type:me.CORNER,defaultValue:"",valueUpdater:(t,e)=>Iv(t,e,Cv)},Ay={inputOptions:{type:me.CORNER,valueUpdater:(t,e)=>Ly(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:P.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Rw(),categories:Dd}},Sy={inputOptions:kd,toolId:d.CORNER_SUM,order:P.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:wo(),categories:Dd}},Ny={inputOptions:{type:me.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:P.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:wo(),categories:El}},xy={inputOptions:kd,toolId:d.CORNER_EVEN_COUNT,order:P.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:wo(),categories:El}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,P.CORNER_TOOLS,W.CIRCLE,wo();const Ry={inputOptions:{type:me.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:P.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:wo(),categories:El}},Ty={inputOptions:{type:me.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:P.CORNER_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:wo(),categories:El}},Cl=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.EDGE_TOOL,T.LOCAL_ELEMENT],Bn=[T.EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.EDGE_TOOL,T.LOCAL_ELEMENT],As=.15,bv=.02,_i={type:W.CIRCLE,r:{editable:!0,value:As,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:bv,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Gd={type:W.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function Dy(t,e=1){return Pi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Ov(t,e=3){return Pi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ky(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Md(t,e,n){return Ur(t,e,n)}function Gy(t,e){return t===void 0?"V":ky(e)?e.toUpperCase():t}function My(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function wv(t,e){return t===void 0?"<":My(e)?e:t}const Lo={type:me.EDGE,valueUpdater:(t,e)=>Md(t,e,Ov)},Uy={inputOptions:{type:me.EDGE,valueUpdater:(t,e)=>Md(t,e,Dy)},toolId:d.RATIO,order:P.EDGE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:As},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Bn}},$y={inputOptions:Lo,toolId:d.DIFFERENCE,order:P.EDGE_TOOLS,shape:_i,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Bn}},Fy={inputOptions:Lo,toolId:d.EDGE_SUM,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Bn}},Py={inputOptions:{type:me.EDGE,defaultValue:"V",valueUpdater:Gy},toolId:d.XV,order:P.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:As},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Bn}},Hy={inputOptions:{type:me.EDGE,valueUpdater:wv,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:P.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Bn}},By={inputOptions:Lo,toolId:d.EDGE_PRODUCT,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Bn}},Wy={inputOptions:Lo,toolId:d.EDGE_MODULO,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Bn}},zy={inputOptions:Lo,toolId:d.EDGE_FACTOR,order:P.EDGE_TOOLS,shape:{..._i,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Bn}},Yy={inputOptions:{type:me.EDGE},toolId:d.XY_DIFFERENCES,order:P.EDGE_TOOLS,shape:{type:W.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:As},strokeWidth:{editable:!1,value:bv,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Bn}},jy={inputOptions:{type:me.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:P.EDGE_TOOLS,shape:_i,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Bn}},Ky={inputOptions:{type:me.EDGE},toolId:d.YIN_YANG_KROPKI,order:P.EDGE_TOOLS,shape:{type:W.CIRCLE,r:{editable:!1,value:As},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Bn}},Vy={inputOptions:{type:me.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:P.EDGE_TOOLS,shape:Gd,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Cl}},Xy={inputOptions:{type:me.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:P.EDGE_TOOLS,shape:Gd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Cl}},qy={inputOptions:{type:me.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:P.EDGE_TOOLS,shape:Gd,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Cl}},Zy={inputOptions:{type:me.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:P.EDGE_TOOLS,shape:_i,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Cl}},Qy={inputOptions:{type:me.EDGE,valueUpdater:wv,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:P.EDGE_TOOLS,shape:{type:W.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Bn}};d.CUSTOM_EDGE_CONSTRAINT,P.EDGE_TOOLS;const Ao=[T.OUTSIDE_CORNER_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_CORNER_TOOL,T.OUTSIDE_DIRECTION_TOOL,T.LOCAL_ELEMENT];function Jy(t,e=5){return Pi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function yv(t,e,n){return Ur(t,e,n)}const So={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},No={type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>yv(t,e,Jy),defaultValue:"",cornerOrEdge:At.CORNER},eL={inputOptions:No,toolId:d.LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:Oo(),tags:[],categories:Ao}},tL={inputOptions:No,toolId:d.LITTLE_KILLER_PRODUCT,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:Oo(),tags:[],categories:Ao}},nL={inputOptions:No,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:Oo(),tags:[],categories:Ao}},rL={inputOptions:No,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:Oo(),tags:[],categories:Ao}},iL={inputOptions:No,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:Oo(),tags:[],categories:Ao}},oL={inputOptions:No,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:So,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:Oo(),tags:[],categories:Ao}},tn=[T.OUTSIDE_EDGE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.TYPABLE_TOOL,T.OUTSIDE_EDGE_TOOL,T.OUTSIDE_DIRECTION_TOOL,T.LOCAL_ELEMENT];function xo(t,e=5){return Pi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ss(t,e,n){return Ur(t,e,n)}const nn={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Nn={type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:At.EDGE},sL={inputOptions:Nn,toolId:d.SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:en(),tags:[],categories:tn}},aL={inputOptions:{...Nn,cornerOrEdge:At.CORNER_OR_EDGE},toolId:d.MYSTERY_SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:en(),tags:[],categories:tn}},lL={inputOptions:Nn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:en(),tags:[],categories:tn}},cL={inputOptions:Nn,toolId:d.X_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:en(),tags:[],categories:tn}},uL={inputOptions:Nn,toolId:d.SHORTSIGHTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:en(),tags:[],categories:tn}},dL={inputOptions:Nn,toolId:d.SHIFTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:en(),tags:[],categories:tn}},_L={inputOptions:Nn,toolId:d.BROKEN_X_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:en(),tags:[],categories:tn}},fL={inputOptions:Nn,toolId:d.X_SUM_SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:en(),tags:[],categories:tn}},gL={inputOptions:Nn,toolId:d.BATTLEFIELD,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:en(),tags:[],categories:tn}},hL={inputOptions:Nn,toolId:d.SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:en(),tags:[],categories:tn}},vL={inputOptions:Nn,toolId:d.X_INDEX,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:en(),tags:[],categories:tn}},pL={inputOptions:Nn,toolId:d.RISING_STREAK,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:en(),tags:[],categories:tn}};d.ROW_OR_COLUMN_RANK,P.OUTSIDE_TOOLS,en();const mL={inputOptions:Nn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:en(),tags:[],categories:tn}},EL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:At.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:en(),tags:[],categories:tn}},CL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:At.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:en(),tags:[],categories:tn}},IL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:At.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:en(),tags:[],categories:tn}},bL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ss(t,e,xo),defaultValue:"",cornerOrEdge:At.EDGE},toolId:d.PENTOMINO_BORDER_COUNT,order:P.OUTSIDE_TOOLS,shape:nn,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:en(),tags:[],categories:tn}},OL={inputOptions:{type:me.SINGLE_CELL},toolId:d.COSMETIC_CELL_CENTER_SHAPE,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},wL={inputOptions:{type:me.SINGLE_CELL_ARROW,cornerOrEdge:At.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},yL={inputOptions:{type:me.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:At.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},LL={inputOptions:{type:me.EDGE,valueUpdater:(t,e)=>Md(t,e,Ov),defaultValue:""},toolId:d.COSMETIC_EDGE,order:P.EDGE_TOOLS,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.LOCAL_ELEMENT]}},AL={inputOptions:{type:me.CORNER,valueUpdater:(t,e)=>Iv(t,e,Cv),defaultValue:""},toolId:d.COSMETIC_CORNER,order:P.CORNER_TOOLS,shape:{type:W.CIRCLE,allowedTypes:[W.CIRCLE,W.ELLIPSE,W.SQUARE,W.RECTANGLE,W.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.LOCAL_ELEMENT]}},SL={inputOptions:{type:me.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},NL={inputOptions:{type:me.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},xL={inputOptions:{type:me.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_ELEMENT]}},RL={inputOptions:{type:me.CAGE,valueUpdater:(t,e)=>Ev(t,e,mv),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:P.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.LOCAL_ELEMENT]}},TL={inputOptions:{type:me.ARROW},toolId:d.COSMETIC_ARROW,order:P.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT]}},DL={inputOptions:{type:me.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>yv(t,e,xo),defaultValue:"",cornerOrEdge:At.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:P.ARROW_TOOLS,shape:{type:W.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[T.COSMETIC_TOOL,T.TYPABLE_TOOL,T.OUTSIDE_DIRECTION_TOOL,T.LOCAL_ELEMENT]}},Ro=[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT,T.DIAGONAL_CONSTRAINT],kL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},GL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},ML={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},UL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},$L={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},FL={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},PL={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},HL={toolId:d.ANTI_LONG_KNIGHT,order:0,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},BL={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},WL={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},zL={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},YL={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},jL={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},KL={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:Ro}},VL={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:Ro}},XL={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:Ro}},qL={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:Ro}},ZL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:Ro}},QL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:Ro}},JL={toolId:d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,order:0,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},eA={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},tA={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},nA={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.SIMPLE_GLOBAL_CONSTRAINT]}},rA={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},iA={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},oA={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},sA={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},aA={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},lA={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},cA={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},uA={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},dA={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},_A={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},fA={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}};d.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT;d.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT;const gA={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},hA={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},vA={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.NEGATIVE_CONSTRAINT]}},pA={toolId:d.CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},mA={toolId:d.NUMBERED_CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},EA={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},CA={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},IA={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},bA={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},OA={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},wA={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},yA={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},LA={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},AA={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},SA={toolId:d.NORINORI,order:0,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},NA={toolId:d.SHIKAKU,order:0,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},xA={toolId:d.SHIKAKU_NO_REPEATS_IN_REGION,order:0,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},RA={toolId:d.NORINORI_STAR_BATTLE,order:0,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},TA={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},DA={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},kA={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},GA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},MA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},UA={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},$A={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_LOOP_CONSTRAINTS]}},FA={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},PA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},HA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},BA={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},WA={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},zA={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},YA={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},jA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},KA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},VA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},XA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},qA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},ZA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},QA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},JA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},eS={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CAVE_CONSTRAINTS]}},tS={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},nS={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},rS={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},iS={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},oS={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},sS={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_GALAXY_CONSTRAINTS]}},aS={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},lS={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},cS={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.UNDETERMINED_REGIONS_CONSTRAINT]}},uS={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},dS={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},_S={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},fS={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Pe=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LINE_TOOL,T.LOCAL_ELEMENT],$r=[T.LINE_CONSTRAINT,T.LOCAL_CONSTRAINT,T.DOUBLE_ENDED_LINE_CONSTRAINT,T.LINE_TOOL,T.LOCAL_ELEMENT],Ns={description:"",usage:De(),tags:[],categories:Pe},xt={type:me.LINE,allowSelfIntersection:!0},Zt={type:me.LINE,allowSelfIntersection:!1},gS={inputOptions:Zt,toolId:d.THERMOMETER,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Numbers along a thermometer must increase from the bulb end."}},hS={inputOptions:{type:me.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},vS={inputOptions:Zt,toolId:d.FUZZY_THERMOMETER,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},pS={inputOptions:Zt,toolId:d.SLOW_THERMOMETER,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},mS={inputOptions:Zt,toolId:d.ROW_CYCLE_THERMOMETER,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Ns,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},ES={inputOptions:xt,toolId:d.PALINDROME,order:P.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:De(),tags:[],categories:Pe}},CS={inputOptions:xt,toolId:d.RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:De(),tags:[],categories:Pe}},IS={inputOptions:xt,toolId:d.DOUBLE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:De(),tags:[],categories:Pe}},bS={inputOptions:xt,toolId:d.RENRENBANBAN_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:De(),tags:[],categories:Pe}},OS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Pe}},wS={inputOptions:xt,toolId:d.NABNER_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},yS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:De(),tags:[],categories:Pe}},LS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:De(),tags:[],categories:Pe}},AS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:De(),tags:[],categories:Pe}},SS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:De(),tags:[],categories:Pe}},NS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:De(),tags:[],categories:Pe}},xS={inputOptions:Zt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:De(),tags:[],categories:Pe}},RS={inputOptions:Zt,toolId:d.INDEX_LINE,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:De(),tags:[],categories:Pe}},TS={inputOptions:xt,toolId:d.UNIQUE_VALUES_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:De(),tags:[],categories:Pe}},DS={inputOptions:xt,toolId:d.REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:De(),tags:[],categories:Pe}},kS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:De(),tags:[],categories:Pe}},GS={inputOptions:Zt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:De(),tags:[],categories:Pe}},MS={inputOptions:xt,toolId:d.SAME_PARITY_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:De(),tags:[],categories:Pe}},US={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},$S={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:De(),tags:[],categories:Pe}},FS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:De(),tags:[],categories:Pe}},PS={inputOptions:xt,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:De(),tags:[],categories:Pe}},HS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:De(),tags:[],categories:Pe}},BS={inputOptions:xt,toolId:d.ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:De(),tags:[],categories:Pe}},WS={inputOptions:xt,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:De(),tags:[],categories:Pe}},zS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:De(),tags:[],categories:Pe}},YS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:De(),tags:[],categories:Pe}},jS={inputOptions:Zt,toolId:d.REPEATED_DIGITS_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:De(),tags:[],categories:Pe}},KS={inputOptions:Zt,toolId:d.SUPERFUZZY_ARROW,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:De(),tags:[],categories:Pe}},VS={inputOptions:xt,toolId:d.AMBIGUOUS_ARROW,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:De(),tags:[],categories:Pe}},XS={inputOptions:Zt,toolId:d.HEADLESS_ARROW,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:De(),tags:[],categories:Pe}},qS={inputOptions:xt,toolId:d.XV_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:De(),tags:[],categories:Pe}},ZS={inputOptions:Zt,toolId:d.ROW_SUM_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:De(),tags:[],categories:Pe}},QS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:De(),tags:[],categories:Pe}},JS={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:De(),tags:[],categories:Pe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,P.LINE_TOOLS,W.LINE,De();const eN={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:De(),tags:[],categories:Pe}},tN={inputOptions:xt,toolId:d.ADJACENT_MULTIPLES_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:De(),tags:[],categories:Pe}},nN={inputOptions:xt,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:De(),tags:[],categories:Pe}},rN={inputOptions:Zt,toolId:d.LOOK_AND_SAY_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:De(),tags:[],categories:Pe}},iN={inputOptions:Zt,toolId:d.ZIPPER_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:De(),tags:[],categories:Pe}},oN={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:De(),tags:[],categories:Pe}},sN={inputOptions:{type:me.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:De(),tags:[],categories:Pe}},aN={inputOptions:{type:me.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:De(),tags:[],categories:Pe}};d.THERMO_OR_AVERAGE_ARROW,P.LINE_TOOLS,W.THERMO_WITH_CIRCLE,De();const lN={inputOptions:Zt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:De(),tags:[],categories:Pe}},cN={inputOptions:Zt,toolId:d.PEAPODS,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:De(),tags:[],categories:Pe}},uN={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:De(),tags:[],categories:Pe}},dN={inputOptions:xt,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:De(),tags:[],categories:Pe}},_N={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:De(),tags:[],categories:Pe}},fN={inputOptions:xt,toolId:d.YIN_YANG_REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:De(),tags:[],categories:Pe}},gN={inputOptions:Zt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:De(),tags:[],categories:Pe}},hN={inputOptions:Zt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:P.LINE_TOOLS,shape:{type:W.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:De(),tags:[],categories:Pe}},vN={inputOptions:xt,toolId:d.BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:De(),tags:[],categories:$r}},pN={inputOptions:{type:me.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:De(),tags:[],categories:$r}},mN={inputOptions:xt,toolId:d.TIGHTROPE_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:De(),tags:[],categories:$r}},EN={inputOptions:xt,toolId:d.PARITY_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:De(),tags:[],categories:$r}},CN={inputOptions:xt,toolId:d.DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:De(),categories:$r}},IN={inputOptions:xt,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:De(),tags:[],categories:$r}},bN={inputOptions:xt,toolId:d.SPLIT_PEAS,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:De(),tags:[],categories:$r}},ON={inputOptions:Zt,toolId:d.DOUBLERS_THERMOMETER,order:P.LINE_TOOLS,shape:{type:W.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:De(),tags:[],categories:Pe}},wN={inputOptions:xt,toolId:d.DOUBLERS_BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:$r}},yN={inputOptions:xt,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:W.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:De(),tags:[],categories:$r}},ze=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_SHAPE_TOOL,T.LOCAL_ELEMENT],fi=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_COLOR_TOOL,T.LOCAL_ELEMENT],Lv=[T.SINGLE_CELL_ARROW_TOOL,T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT],Il={type:W.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Hi={type:W.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function bl(t,e=3){return Pi(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function LN(t){return t===""||t==="1"||t==="2"||t==="3"}function xs(t,e,n){return Ur(t,e,n)}const Ve={type:me.SINGLE_CELL},gi={type:me.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,bl),defaultValue:""},Av={type:me.SINGLE_CELL_ARROW,cornerOrEdge:At.CORNER_OR_EDGE},AN={inputOptions:Ve,toolId:d.ODD,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:ze}},SN={inputOptions:Ve,toolId:d.EVEN,order:P.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:ze}},NN={inputOptions:Ve,toolId:d.MINIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:fi}},xN={inputOptions:Ve,toolId:d.MAXIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:fi}};d.PRIME_CELL,P.CELL_COLOR_TOOL;const RN={inputOptions:Ve,toolId:d.ODD_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},TN={inputOptions:Ve,toolId:d.EVEN_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:ze}},DN={inputOptions:Ve,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:ze}},kN={inputOptions:Ve,toolId:d.WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},GN={inputOptions:Ve,toolId:d.NOT_WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:ze}},MN={inputOptions:gi,toolId:d.FARSIGHT,order:P.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:ze}},UN={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,bl),defaultValue:"9"},toolId:d.RADAR,order:P.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:ze}},$N={inputOptions:Ve,toolId:d.ORTHOGONAL_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:ze}},FN={inputOptions:Ve,toolId:d.INDEXING_COLUMN,order:P.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:fi}},PN={inputOptions:Ve,toolId:d.INDEXING_ROW,order:P.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:fi}},HN={inputOptions:Ve,toolId:d.LOW_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.3)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:fi}},BN={inputOptions:Ve,toolId:d.HIGH_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.3)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:fi}},WN={inputOptions:Ve,toolId:d.FRIENDLY_CELL,order:P.CELL_COLOR_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:fi}},zN={inputOptions:Ve,toolId:d.DIAGONALLY_ADJACENT_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:ze}},YN={inputOptions:Ve,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:ze}},jN={inputOptions:Ve,toolId:d.SANDWICH_ROW_COL_COUNT,order:P.CELL_SHAPE_TOOL,shape:Hi,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:ze}},KN={inputOptions:Ve,toolId:d.COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:ze}},VN={inputOptions:Ve,toolId:d.REVERSE_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:ze}},XN={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,LN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:Hi,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:ze}},qN={inputOptions:Ve,toolId:d.UNIQUE_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:ze}},ZN={inputOptions:Ve,toolId:d.SEEN_EVEN_COUNT,order:P.CELL_SHAPE_TOOL,shape:Il,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},QN={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,bl),defaultValue:"5"},toolId:d.CELL_KNIGHT_WHISPERS,order:P.CELL_SHAPE_TOOL,shape:Hi,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:ze}},JN={inputOptions:Ve,toolId:d.SEEN_ODD_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:ze}},ex={inputOptions:Ve,toolId:d.YIN_YANG_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:ze}},tx={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},nx={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:ze}},rx={inputOptions:Ve,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:P.CELL_SHAPE_TOOL,shape:Il,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:ze}},ix={inputOptions:Ve,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:W.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:ze}},ox={inputOptions:Ve,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:ze}},sx={inputOptions:Ve,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:ze}},ax={inputOptions:Ve,toolId:d.SEEN_REGION_BORDERS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:ze}},lx={inputOptions:Ve,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:ze}},cx={inputOptions:Ve,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:ze}},ux={inputOptions:Av,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:P.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:Lv}},dx={inputOptions:Av,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:Lv}},_x={inputOptions:gi,toolId:d.SASHIGANE_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:ze}},fx={inputOptions:Ve,toolId:d.CELL_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Il,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:ze}},gx={inputOptions:Ve,toolId:d.CELL_NOT_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Hi,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:ze}},hx={inputOptions:Ve,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:ze}},vx={inputOptions:gi,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:ze}},px={inputOptions:Ve,toolId:d.CAVE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:ze}},mx={inputOptions:gi,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:ze}},Ex={inputOptions:gi,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:ze}},Cx={inputOptions:gi,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:Hi,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:ze}},Ix={inputOptions:Ve,toolId:d.DIRECTED_PATH_START,order:P.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:ze}},bx={inputOptions:Ve,toolId:d.DIRECTED_PATH_END,order:P.CELL_SHAPE_TOOL,shape:{type:W.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:ze}},Ox={inputOptions:gi,toolId:d.TELEPORT,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:ze}},wx={inputOptions:gi,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:ze}},yx={inputOptions:Ve,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:P.CELL_SHAPE_TOOL,shape:{...Il,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:ze}},Lx={inputOptions:Ve,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:P.CELL_SHAPE_TOOL,shape:Hi,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:ze}},Ax={inputOptions:Ve,toolId:d.CONNECT_FOUR_YELLOW,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:ze}},Sx={inputOptions:Ve,toolId:d.CONENCT_FOUR_RED,order:P.CELL_SHAPE_TOOL,shape:{type:W.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:ze}},Nx={inputOptions:Ve,toolId:d.SHIKAKU_REGION_SIZE,order:P.CELL_SHAPE_TOOL,shape:Hi,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:ze}},xx={inputOptions:{type:me.SINGLE_CELL,valueUpdater:(t,e)=>xs(t,e,bl),defaultValue:"?"},toolId:d.SHIKAKU_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:W.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:ze}},Rx={inputOptions:Ve,toolId:d.FOG_LIGHTS,order:P.CELL_SHAPE_TOOL,meta:{description:"Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.",tags:[],categories:ze}},_r=[T.SINGLE_CELL_CONSTRAINT,T.LOCAL_CONSTRAINT,T.SINGLE_CELL_MULTIARROW_TOOL,T.LOCAL_ELEMENT],Fr={type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},fr={type:me.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:At.CORNER_OR_EDGE},Tx={inputOptions:fr,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:_r}},Dx={inputOptions:fr,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:_r}},kx={inputOptions:fr,toolId:d.LOOP_CELL_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:_r}},Gx={inputOptions:fr,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:_r}},Mx={inputOptions:fr,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:_r}},Ux={inputOptions:fr,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:_r}},$x={inputOptions:fr,toolId:d.COLD_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:_r}},Fx={inputOptions:fr,toolId:d.HOT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:W.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:_r}},Px={inputOptions:fr,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:_r}},Hx={inputOptions:fr,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:_r}},Bx={inputOptions:fr,toolId:d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Fr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:_r}},Wx={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},zx={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},Yx={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}},jx={toolId:d.LITS_MAX_TETROMINO_SUM,order:0,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[T.LOCAL_CONSTRAINT,T.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const Kx={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},Vx={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT;const Xx={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},qx={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[T.GLOBAL_CONSTRAINT,T.VALUE_MODIFIER_CONSTRAINT]}},Zx=[T.CORNER_LINE_CONSTRAINT,T.CORNER_LINE_TOOL,T.LOCAL_CONSTRAINT,T.LOCAL_ELEMENT],Qx={inputOptions:{type:me.CORNER_LINE},toolId:d.MAZE_WALL,order:P.EDGE_TOOLS,shape:{type:W.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:Zx}},Ht={[d.GIVEN]:gy,[d.DIGIT]:hy,[d.REGIONS]:vy,[d.OUTSIDE]:Cy,[d.CORNER_PM]:py,[d.CENTER_PM]:my,[d.HIGHLIGHTS]:Ey,[d.PEN_TOOL]:Iy,[d.SUDOKU_RULES_DO_NOT_APPLY]:kL,[d.LEAVE_EMPTY_CELLS_EMPTY]:GL,[d.LITS]:$L,[d.HEXED_SUDOKU]:ML,[d.FILLOMINO]:UL,[d.ANTIKNIGHT]:FL,[d.ANTI_LONG_KNIGHT]:HL,[d.ANTIKING]:BL,[d.ANTI_GIRAFFE]:PL,[d.DISJOINT_GROUPS]:WL,[d.TANGO]:zL,[d.NONCONSECUTIVE]:YL,[d.NONRATIO]:jL,[d.ANTI_ENTROPY]:eA,[d.GLOBAL_INDEXING_COLUMN]:tA,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:nA,[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:JL,[d.NEGATIVE_DIAGONAL]:KL,[d.POSITIVE_DIAGONAL]:VL,[d.NEGATIVE_ANTIDIAGONAL]:XL,[d.POSITIVE_ANTIDIAGONAL]:qL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:ZL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:QL,[d.ALL_RATIOS_GIVEN]:rA,[d.ALL_DIFFERENCES_GIVEN]:iA,[d.ALL_X_GIVEN]:oA,[d.ALL_V_GIVEN]:sA,[d.ALL_XV_GIVEN]:aA,[d.ALL_RADARS_GIVEN]:lA,[d.ALL_XY_DIFFERENCES_GIVEN]:cA,[d.ALL_INDEXING_COLUMN_GIVEN]:uA,[d.ALL_INDEXING_ROW_GIVEN]:dA,[d.ALL_YIN_YANG_KROPKI_GIVEN]:_A,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:fA,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:hA,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:vA,[d.CAVE_CELLS_ARE_ODD]:QA,[d.CAVE_WALLS_ARE_EVEN]:ZA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:XA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:qA,[d.DOUBLERS]:Kx,[d.NEGATORS]:Vx,[d.NEXUS]:Xx,[d.INDEXER_CELLS]:qx,[d.CHAOS_CONSTRUCTION]:pA,[d.NUMBERED_CHAOS_CONSTRUCTION]:mA,[d.CHAOS_CONSTRUCTION_SUGURU]:EA,[d.YIN_YANG]:CA,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:IA,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:bA,[d.NURIMISAKI]:OA,[d.NURIKABE]:wA,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:yA,[d.TWO_CONTIGUOUS_REGIONS]:LA,[d.SASHIGANE]:AA,[d.NORINORI]:SA,[d.SHIKAKU]:NA,[d.SHIKAKU_NO_REPEATS_IN_REGION]:xA,[d.GOLDILOCKS_ZONE]:TA,[d.CELL_CENTER_LOOP_NO_TOUCHING]:DA,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:kA,[d.NOT_LOOP_SIZED_REGIONS]:UA,[d.MODULAR_LOOP]:$A,[d.CAVE]:KA,[d.CAVE_LITS]:JA,[d.RENBAN_CAVES]:eS,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:VA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:gA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:GA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:MA,[d.GALAXIES]:nS,[d.TWO_SYMMETRIC_GALAXIES]:oS,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:rS,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:iS,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:sS,[d.PENTOMINO_TILLING]:aS,[d.TILLING_NO_EMPTY_CELLS]:lS,[d.LITS_BLACK_WHITE_STAR_BATTLE]:cS,[d.NORINORI_STAR_BATTLE]:RA,[d.MAZE_DIRECTED_PATH]:FA,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:PA,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:zA,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:HA,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:WA,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:YA,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:jA,[d.DIRECTED_PATH_IS_PARITY_LINE]:BA,[d.CONNECT_FOUR]:uS,[d.CONNECT_FOUR_DRAW]:dS,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:_S,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:fS,[d.FOG_LIGHTS]:Rx,[d.ODD]:AN,[d.EVEN]:SN,[d.MINIMUM]:NN,[d.MAXIMUM]:xN,[d.ODD_MINESWEEPER]:RN,[d.EVEN_MINESWEEPER]:TN,[d.WATCHTOWER]:kN,[d.NOT_WATCHTOWER]:GN,[d.FARSIGHT]:MN,[d.RADAR]:UN,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:DN,[d.ORTHOGONAL_SUM]:$N,[d.DIAGONALLY_ADJACENT_SUM]:zN,[d.INDEXING_COLUMN]:FN,[d.INDEXING_ROW]:PN,[d.LOW_DIGIT]:HN,[d.HIGH_DIGIT]:BN,[d.FRIENDLY_CELL]:WN,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:YN,[d.SANDWICH_ROW_COL_COUNT]:jN,[d.COUNTING_CIRCLES]:KN,[d.REVERSE_COUNTING_CIRCLES]:VN,[d.COLORED_COUNTING_CIRCLES]:XN,[d.UNIQUE_CELLS]:qN,[d.SEEN_EVEN_COUNT]:ZN,[d.SEEN_ODD_COUNT]:JN,[d.CELL_KNIGHT_WHISPERS]:QN,[d.YIN_YANG_MINESWEEPER]:ex,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:tx,[d.YIN_YANG_SEEN_SHADED_CELLS]:nx,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:rx,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:ix,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:ox,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:sx,[d.SEEN_REGION_BORDERS_COUNT]:ax,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:lx,[d.SASHIGANE_BEND_REGION_COUNT]:cx,[d.SASHIGANE_REGION_SUM]:_x,[d.CELL_ON_THE_LOOP]:fx,[d.CELL_NOT_ON_THE_LOOP]:gx,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:hx,[d.CAVE_CLUE]:px,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:vx,[d.YIN_YANG_FILLOMINO_PARITY]:tS,[d.SHIKAKU_REGION_SIZE]:Nx,[d.SHIKAKU_REGION_SUM]:xx,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:mx,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:Ex,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:Cx,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:wx,[d.DIRECTED_PATH_START]:Ix,[d.DIRECTED_PATH_END]:bx,[d.TELEPORT]:Ox,[d.CONNECT_FOUR_YELLOW]:Ax,[d.CONENCT_FOUR_RED]:Sx,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:ux,[d.THERMO_SIGHTLINE_LOOP_ARROW]:dx,[d.HOT_ARROWS]:Fx,[d.COLD_ARROWS]:$x,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:Ux,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:Gx,[d.YIN_YANG_COUNT_SHADED_CELLS]:Mx,[d.LOOP_CELL_COUNT_ARROWS]:kx,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:Dx,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:Tx,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:Px,[d.NURIKABE_SEEN_WATERWAY_CELLS]:yx,[d.NURIKABE_ISLAND_SIZE_CELL]:Lx,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:Hx,[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:Bx,[d.DIFFERENCE]:$y,[d.RATIO]:Uy,[d.XV]:Py,[d.EDGE_INEQUALITY]:Hy,[d.EDGE_SUM]:Fy,[d.EDGE_PRODUCT]:By,[d.EDGE_MODULO]:Wy,[d.EDGE_FACTOR]:zy,[d.XY_DIFFERENCES]:Yy,[d.YIN_YANG_WHITE_KROPKI]:jy,[d.YIN_YANG_KROPKI]:Ky,[d.FILLOMINO_REGION_BORDER]:Vy,[d.UNKNOWN_REGION_BORDER]:Xy,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:qy,[d.EDGE_CAVE_ONE_OF_EACH]:Zy,[d.ONE_WAY_DOOR]:Qy,[d.QUADRUPLE]:Ay,[d.CORNER_SUM]:Sy,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:Ny,[d.CORNER_EVEN_COUNT]:xy,[d.PRODUCT_SQUARE]:Ry,[d.EQUAL_DIAGONAL_DIFFERENCES]:Ty,[d.THERMOMETER]:gS,[d.FUZZY_THERMOMETER]:vS,[d.SLOW_THERMOMETER]:pS,[d.CUSTOM_THERMOMETER]:hS,[d.ROW_CYCLE_THERMOMETER]:mS,[d.PALINDROME]:ES,[d.RENBAN_LINE]:CS,[d.DOUBLE_RENBAN_LINE]:IS,[d.RENRENBANBAN_LINE]:bS,[d.N_CONSECUTIVE_RENBAN_LINE]:OS,[d.NABNER_LINE]:wS,[d.WHISPERS_LINE]:yS,[d.DUTCH_WHISPERS]:LS,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:AS,[d.RENBAN_OR_WHISPERS_LINE]:SS,[d.RENBAN_OR_NABNER_LINE]:NS,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:xS,[d.INDEX_LINE]:RS,[d.UNIQUE_VALUES_LINE]:TS,[d.REPEATED_DIGITS_LINE]:jS,[d.REGION_SUM_LINE]:DS,[d.SUM_LINE]:kS,[d.XV_LINE]:qS,[d.ROW_SUM_LINE]:ZS,[d.AT_LEAST_X_LINE]:QS,[d.SUPERFUZZY_ARROW]:KS,[d.AMBIGUOUS_ARROW]:VS,[d.HEADLESS_ARROW]:XS,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:JS,[d.PRODUCT_LINE]:eN,[d.ADJACENT_MULTIPLES_LINE]:tN,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:nN,[d.LOOK_AND_SAY_LINE]:rN,[d.ARITHMETIC_SEQUENCE_LINE]:GS,[d.ZIPPER_LINE]:iN,[d.SEGMENTED_SUM_LINE]:oN,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:sN,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:aN,[d.SAME_PARITY_LINE]:MS,[d.MODULAR_LINE]:US,[d.UNIMODULAR_LINE]:$S,[d.MODULAR_OR_UNIMODULAR_LINE]:FS,[d.ODD_EVEN_OSCILLATOR_LINE]:PS,[d.HIGH_LOW_OSCILLATOR_LINE]:HS,[d.ENTROPIC_LINE]:BS,[d.ENTROPIC_OR_MODULAR_LINE]:WS,[d.INDEXING_COLUMN_IS_X_LINE]:zS,[d.INDEXING_ROW_IS_X_LINE]:YS,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:lN,[d.PEAPODS]:cN,[d.YIN_YANG_INDEXING_LINE_COLORING]:gN,[d.YIN_YANG_SHADED_WHISPERS_LINE]:uN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:dN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:_N,[d.YIN_YANG_REGION_SUM_LINE]:fN,[d.GOLDILOCKS_ZONE_REGION_SUM]:hN,[d.BETWEEN_LINE]:vN,[d.LOCKOUT_LINE]:pN,[d.PARITY_COUNT_LINE]:EN,[d.TIGHTROPE_LINE]:mN,[d.DOUBLE_ARROW_LINE]:CN,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:IN,[d.SPLIT_PEAS]:bN,[d.DOUBLERS_THERMOMETER]:ON,[d.DOUBLERS_BETWEEN_LINE]:wN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:yN,[d.ARROW]:Gw,[d.CHAOS_CONSTRUCTION_ARROW]:$w,[d.AVERAGE_ARROW]:Mw,[d.BULBOUS_ARROW]:Uw,[d.MAZE_WALL]:Qx,[d.KILLER_CAGE]:Jw,[d.UNIQUE_DIGITS_CAGE]:ey,[d.INVERTED_KILLER_CAGE]:ty,[d.SUM_CAGE]:ny,[d.SUM_CAGE_LOOK_AND_SAY]:ry,[d.PARITY_BALANCE_CAGE]:iy,[d.DIVISIBLE_KILLER_CAGE]:oy,[d.SPOTLIGHT_CAGE]:sy,[d.PUTTERIA_CAGE]:ay,[d.MULTISET_CAGE]:ly,[d.VAULTED_CAGE]:cy,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:uy,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:dy,[d.DOUBLERS_KILLER_CAGE]:_y,[d.NEGATORS_KILLER_CAGE]:fy,[d.CLONE_REGION]:yy,[d.SANDWICH_SUM]:sL,[d.MYSTERY_SANDWICH_SUM]:aL,[d.X_SUM]:cL,[d.SHORTSIGHTED_X_SUM]:uL,[d.SHIFTED_X_SUM]:dL,[d.BROKEN_X_SUM]:_L,[d.X_SUM_SKYSCRAPERS]:fL,[d.BATTLEFIELD]:gL,[d.SKYSCRAPERS]:hL,[d.X_INDEX]:vL,[d.SANDWICH_SUM_XOR_X_SUM]:lL,[d.RISING_STREAK]:pL,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:mL,[d.OUTSIDE_CONSECUTIVE_SUM]:EL,[d.LOOPWICHES]:CL,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:IL,[d.PENTOMINO_BORDER_COUNT]:bL,[d.LITTLE_KILLER_SUM]:eL,[d.LITTLE_KILLER_PRODUCT]:tL,[d.LITTLE_KILLER_LOOK_AND_SAY]:nL,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:iL,[d.X_OMIT_LITTLE_KILLER_SUM]:rL,[d.NEGATORS_LITTLE_KILLER_SUM]:oL,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Oy,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:wy,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:Wx,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:zx,[d.FORBIDDEN_KNIGHT_SUM]:Yx,[d.LITS_MAX_TETROMINO_SUM]:jx,[d.COSMETIC_CELL_CENTER_SHAPE]:OL,[d.COSMETIC_CELL_ARROW]:wL,[d.COSMETIC_CELL_MULTI_ARROW]:yL,[d.COSMETIC_EDGE]:LL,[d.COSMETIC_CORNER]:AL,[d.COSMETIC_LINE]:SL,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:NL,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:xL,[d.COSMETIC_ARROW]:TL,[d.COSMETIC_CAGE]:RL,[d.COSMETIC_OUTSIDE_DIRECTION]:DL};class Gi extends Map{constructor(){super()}setConstraint(e,n){return hw(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Gi;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Gi;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=gv(r);o!==void 0&&hv(o,wd)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var Fe=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Fe||{});function Sv(t){if(!(t in Fe))throw Error(" not a key in DIRECTION");return Fe[t]}function Ke(t,e){return t.r===e.r&&t.c===e.c}function Nv(t,e){return{r:t.r+e.r,c:t.c+e.c}}function Jx(t,e){return{r:t.r*e,c:t.c*e}}function eR(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Rs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ke(t,e)}function tR(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Ka(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Ut(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Ol(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function nR(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function Va(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function rR(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const iR=new Map([[6,Fe.N],[2,Fe.S],[0,Fe.E],[4,Fe.W],[7,Fe.NE],[5,Fe.NW],[1,Fe.SE],[3,Fe.SW]]);function vo(t){t=t%8;const e=iR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const oR=new Map([[Fe.N,{r:-1,c:0}],[Fe.S,{r:1,c:0}],[Fe.E,{r:0,c:1}],[Fe.W,{r:0,c:-1}],[Fe.NE,{r:-1,c:1}],[Fe.NW,{r:-1,c:-1}],[Fe.SE,{r:1,c:1}],[Fe.SW,{r:1,c:-1}]]);function Ts(t){const e=oR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function nh(t,e){const n=Ts(e);return Nv(t,n)}function Xa(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function xv(t,e,n=!1){const r=t.some(o=>Ke(o,e)),i=n?t.some(o=>Rs(o,e)):t.some(o=>tR(o,e));if(!r&&i){const o=[...t,e];return Ka(o),o}return t}function Ga(t){return`R${t.r+1}C${t.c+1}`}function Ud(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_s={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var sR=_s.exports,rh;function aR(){return rh||(rh=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,g="__lodash_placeholder__",p=1,h=2,m=4,E=1,I=2,b=1,w=2,A=4,k=8,G=16,F=32,z=64,H=128,j=256,J=512,ae=30,Q="...",re=800,ge=16,oe=1,pe=2,Ne=3,xe=1/0,Oe=9007199254740991,Ie=17976931348623157e292,je=NaN,qe=4294967295,bt=qe-1,Rt=qe>>>1,Kt=[["ary",H],["bind",b],["bindKey",w],["curry",k],["curryRight",G],["flip",J],["partial",F],["partialRight",z],["rearg",j]],Gt="[object Arguments]",$t="[object Array]",rn="[object AsyncFunction]",hr="[object Boolean]",Wn="[object Date]",ji="[object DOMException]",wr="[object Error]",yr="[object Function]",$e="[object GeneratorFunction]",Le="[object Map]",Me="[object Number]",Ue="[object Null]",Tt="[object Object]",Ho="[object Promise]",Wl="[object Proxy]",Yr="[object RegExp]",xn="[object Set]",mi="[object String]",Ki="[object Symbol]",rt="[object Undefined]",Rn="[object WeakMap]",js="[object WeakSet]",jr="[object ArrayBuffer]",Tn="[object DataView]",Bo="[object Float32Array]",Wo="[object Float64Array]",zo="[object Int8Array]",Yo="[object Int16Array]",zl="[object Int32Array]",Yl="[object Uint8Array]",jl="[object Uint8ClampedArray]",Kl="[object Uint16Array]",Vl="[object Uint32Array]",Jp=/\b__p \+= '';/g,em=/\b(__p \+=) '' \+/g,tm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,p_=/&(?:amp|lt|gt|quot|#39);/g,m_=/[&<>"']/g,nm=RegExp(p_.source),rm=RegExp(m_.source),im=/<%-([\s\S]+?)%>/g,om=/<%([\s\S]+?)%>/g,E_=/<%=([\s\S]+?)%>/g,sm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,am=/^\w*$/,lm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xl=/[\\^$.*+?()[\]{}|]/g,cm=RegExp(Xl.source),ql=/^\s+/,um=/\s/,dm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_m=/\{\n\/\* \[wrapped with (.+)\] \*/,fm=/,? & /,gm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hm=/[()=,{}\[\]\/\s]/,vm=/\\(\\)?/g,pm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C_=/\w*$/,mm=/^[-+]0x[0-9a-f]+$/i,Em=/^0b[01]+$/i,Cm=/^\[object .+?Constructor\]$/,Im=/^0o[0-7]+$/i,bm=/^(?:0|[1-9]\d*)$/,Om=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ks=/($^)/,wm=/['\n\r\u2028\u2029\\]/g,Vs="\\ud800-\\udfff",ym="\\u0300-\\u036f",Lm="\\ufe20-\\ufe2f",Am="\\u20d0-\\u20ff",I_=ym+Lm+Am,b_="\\u2700-\\u27bf",O_="a-z\\xdf-\\xf6\\xf8-\\xff",Sm="\\xac\\xb1\\xd7\\xf7",Nm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xm="\\u2000-\\u206f",Rm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",w_="A-Z\\xc0-\\xd6\\xd8-\\xde",y_="\\ufe0e\\ufe0f",L_=Sm+Nm+xm+Rm,Zl="['’]",Tm="["+Vs+"]",A_="["+L_+"]",Xs="["+I_+"]",S_="\\d+",Dm="["+b_+"]",N_="["+O_+"]",x_="[^"+Vs+L_+S_+b_+O_+w_+"]",Ql="\\ud83c[\\udffb-\\udfff]",km="(?:"+Xs+"|"+Ql+")",R_="[^"+Vs+"]",Jl="(?:\\ud83c[\\udde6-\\uddff]){2}",ec="[\\ud800-\\udbff][\\udc00-\\udfff]",Vi="["+w_+"]",T_="\\u200d",D_="(?:"+N_+"|"+x_+")",Gm="(?:"+Vi+"|"+x_+")",k_="(?:"+Zl+"(?:d|ll|m|re|s|t|ve))?",G_="(?:"+Zl+"(?:D|LL|M|RE|S|T|VE))?",M_=km+"?",U_="["+y_+"]?",Mm="(?:"+T_+"(?:"+[R_,Jl,ec].join("|")+")"+U_+M_+")*",Um="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$m="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$_=U_+M_+Mm,Fm="(?:"+[Dm,Jl,ec].join("|")+")"+$_,Pm="(?:"+[R_+Xs+"?",Xs,Jl,ec,Tm].join("|")+")",Hm=RegExp(Zl,"g"),Bm=RegExp(Xs,"g"),tc=RegExp(Ql+"(?="+Ql+")|"+Pm+$_,"g"),Wm=RegExp([Vi+"?"+N_+"+"+k_+"(?="+[A_,Vi,"$"].join("|")+")",Gm+"+"+G_+"(?="+[A_,Vi+D_,"$"].join("|")+")",Vi+"?"+D_+"+"+k_,Vi+"+"+G_,$m,Um,S_,Fm].join("|"),"g"),zm=RegExp("["+T_+Vs+I_+y_+"]"),Ym=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,jm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Km=-1,Dt={};Dt[Bo]=Dt[Wo]=Dt[zo]=Dt[Yo]=Dt[zl]=Dt[Yl]=Dt[jl]=Dt[Kl]=Dt[Vl]=!0,Dt[Gt]=Dt[$t]=Dt[jr]=Dt[hr]=Dt[Tn]=Dt[Wn]=Dt[wr]=Dt[yr]=Dt[Le]=Dt[Me]=Dt[Tt]=Dt[Yr]=Dt[xn]=Dt[mi]=Dt[Rn]=!1;var Nt={};Nt[Gt]=Nt[$t]=Nt[jr]=Nt[Tn]=Nt[hr]=Nt[Wn]=Nt[Bo]=Nt[Wo]=Nt[zo]=Nt[Yo]=Nt[zl]=Nt[Le]=Nt[Me]=Nt[Tt]=Nt[Yr]=Nt[xn]=Nt[mi]=Nt[Ki]=Nt[Yl]=Nt[jl]=Nt[Kl]=Nt[Vl]=!0,Nt[wr]=Nt[yr]=Nt[Rn]=!1;var Vm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Xm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Zm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qm=parseFloat,Jm=parseInt,F_=typeof Ma=="object"&&Ma&&Ma.Object===Object&&Ma,e1=typeof self=="object"&&self&&self.Object===Object&&self,on=F_||e1||Function("return this")(),nc=e&&!e.nodeType&&e,Ei=nc&&!0&&t&&!t.nodeType&&t,P_=Ei&&Ei.exports===nc,rc=P_&&F_.process,zn=function(){try{var X=Ei&&Ei.require&&Ei.require("util").types;return X||rc&&rc.binding&&rc.binding("util")}catch{}}(),H_=zn&&zn.isArrayBuffer,B_=zn&&zn.isDate,W_=zn&&zn.isMap,z_=zn&&zn.isRegExp,Y_=zn&&zn.isSet,j_=zn&&zn.isTypedArray;function Dn(X,le,ie){switch(ie.length){case 0:return X.call(le);case 1:return X.call(le,ie[0]);case 2:return X.call(le,ie[0],ie[1]);case 3:return X.call(le,ie[0],ie[1],ie[2])}return X.apply(le,ie)}function t1(X,le,ie,Re){for(var Ze=-1,mt=X==null?0:X.length;++Ze<mt;){var Vt=X[Ze];le(Re,Vt,ie(Vt),X)}return Re}function Yn(X,le){for(var ie=-1,Re=X==null?0:X.length;++ie<Re&&le(X[ie],ie,X)!==!1;);return X}function n1(X,le){for(var ie=X==null?0:X.length;ie--&&le(X[ie],ie,X)!==!1;);return X}function K_(X,le){for(var ie=-1,Re=X==null?0:X.length;++ie<Re;)if(!le(X[ie],ie,X))return!1;return!0}function Kr(X,le){for(var ie=-1,Re=X==null?0:X.length,Ze=0,mt=[];++ie<Re;){var Vt=X[ie];le(Vt,ie,X)&&(mt[Ze++]=Vt)}return mt}function qs(X,le){var ie=X==null?0:X.length;return!!ie&&Xi(X,le,0)>-1}function ic(X,le,ie){for(var Re=-1,Ze=X==null?0:X.length;++Re<Ze;)if(ie(le,X[Re]))return!0;return!1}function Mt(X,le){for(var ie=-1,Re=X==null?0:X.length,Ze=Array(Re);++ie<Re;)Ze[ie]=le(X[ie],ie,X);return Ze}function Vr(X,le){for(var ie=-1,Re=le.length,Ze=X.length;++ie<Re;)X[Ze+ie]=le[ie];return X}function oc(X,le,ie,Re){var Ze=-1,mt=X==null?0:X.length;for(Re&&mt&&(ie=X[++Ze]);++Ze<mt;)ie=le(ie,X[Ze],Ze,X);return ie}function r1(X,le,ie,Re){var Ze=X==null?0:X.length;for(Re&&Ze&&(ie=X[--Ze]);Ze--;)ie=le(ie,X[Ze],Ze,X);return ie}function sc(X,le){for(var ie=-1,Re=X==null?0:X.length;++ie<Re;)if(le(X[ie],ie,X))return!0;return!1}var i1=ac("length");function o1(X){return X.split("")}function s1(X){return X.match(gm)||[]}function V_(X,le,ie){var Re;return ie(X,function(Ze,mt,Vt){if(le(Ze,mt,Vt))return Re=mt,!1}),Re}function Zs(X,le,ie,Re){for(var Ze=X.length,mt=ie+(Re?1:-1);Re?mt--:++mt<Ze;)if(le(X[mt],mt,X))return mt;return-1}function Xi(X,le,ie){return le===le?m1(X,le,ie):Zs(X,X_,ie)}function a1(X,le,ie,Re){for(var Ze=ie-1,mt=X.length;++Ze<mt;)if(Re(X[Ze],le))return Ze;return-1}function X_(X){return X!==X}function q_(X,le){var ie=X==null?0:X.length;return ie?cc(X,le)/ie:je}function ac(X){return function(le){return le==null?n:le[X]}}function lc(X){return function(le){return X==null?n:X[le]}}function Z_(X,le,ie,Re,Ze){return Ze(X,function(mt,Vt,yt){ie=Re?(Re=!1,mt):le(ie,mt,Vt,yt)}),ie}function l1(X,le){var ie=X.length;for(X.sort(le);ie--;)X[ie]=X[ie].value;return X}function cc(X,le){for(var ie,Re=-1,Ze=X.length;++Re<Ze;){var mt=le(X[Re]);mt!==n&&(ie=ie===n?mt:ie+mt)}return ie}function uc(X,le){for(var ie=-1,Re=Array(X);++ie<X;)Re[ie]=le(ie);return Re}function c1(X,le){return Mt(le,function(ie){return[ie,X[ie]]})}function Q_(X){return X&&X.slice(0,nf(X)+1).replace(ql,"")}function kn(X){return function(le){return X(le)}}function dc(X,le){return Mt(le,function(ie){return X[ie]})}function jo(X,le){return X.has(le)}function J_(X,le){for(var ie=-1,Re=X.length;++ie<Re&&Xi(le,X[ie],0)>-1;);return ie}function ef(X,le){for(var ie=X.length;ie--&&Xi(le,X[ie],0)>-1;);return ie}function u1(X,le){for(var ie=X.length,Re=0;ie--;)X[ie]===le&&++Re;return Re}var d1=lc(Vm),_1=lc(Xm);function f1(X){return"\\"+Zm[X]}function g1(X,le){return X==null?n:X[le]}function qi(X){return zm.test(X)}function h1(X){return Ym.test(X)}function v1(X){for(var le,ie=[];!(le=X.next()).done;)ie.push(le.value);return ie}function _c(X){var le=-1,ie=Array(X.size);return X.forEach(function(Re,Ze){ie[++le]=[Ze,Re]}),ie}function tf(X,le){return function(ie){return X(le(ie))}}function Xr(X,le){for(var ie=-1,Re=X.length,Ze=0,mt=[];++ie<Re;){var Vt=X[ie];(Vt===le||Vt===g)&&(X[ie]=g,mt[Ze++]=ie)}return mt}function Qs(X){var le=-1,ie=Array(X.size);return X.forEach(function(Re){ie[++le]=Re}),ie}function p1(X){var le=-1,ie=Array(X.size);return X.forEach(function(Re){ie[++le]=[Re,Re]}),ie}function m1(X,le,ie){for(var Re=ie-1,Ze=X.length;++Re<Ze;)if(X[Re]===le)return Re;return-1}function E1(X,le,ie){for(var Re=ie+1;Re--;)if(X[Re]===le)return Re;return Re}function Zi(X){return qi(X)?I1(X):i1(X)}function sr(X){return qi(X)?b1(X):o1(X)}function nf(X){for(var le=X.length;le--&&um.test(X.charAt(le)););return le}var C1=lc(qm);function I1(X){for(var le=tc.lastIndex=0;tc.test(X);)++le;return le}function b1(X){return X.match(tc)||[]}function O1(X){return X.match(Wm)||[]}var w1=function X(le){le=le==null?on:Qi.defaults(on.Object(),le,Qi.pick(on,jm));var ie=le.Array,Re=le.Date,Ze=le.Error,mt=le.Function,Vt=le.Math,yt=le.Object,fc=le.RegExp,y1=le.String,jn=le.TypeError,Js=ie.prototype,L1=mt.prototype,Ji=yt.prototype,ea=le["__core-js_shared__"],ta=L1.toString,Ct=Ji.hasOwnProperty,A1=0,rf=function(){var s=/[^.]+$/.exec(ea&&ea.keys&&ea.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),na=Ji.toString,S1=ta.call(yt),N1=on._,x1=fc("^"+ta.call(Ct).replace(Xl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ra=P_?le.Buffer:n,qr=le.Symbol,ia=le.Uint8Array,of=ra?ra.allocUnsafe:n,oa=tf(yt.getPrototypeOf,yt),sf=yt.create,af=Ji.propertyIsEnumerable,sa=Js.splice,lf=qr?qr.isConcatSpreadable:n,Ko=qr?qr.iterator:n,Ci=qr?qr.toStringTag:n,aa=function(){try{var s=yi(yt,"defineProperty");return s({},"",{}),s}catch{}}(),R1=le.clearTimeout!==on.clearTimeout&&le.clearTimeout,T1=Re&&Re.now!==on.Date.now&&Re.now,D1=le.setTimeout!==on.setTimeout&&le.setTimeout,la=Vt.ceil,ca=Vt.floor,gc=yt.getOwnPropertySymbols,k1=ra?ra.isBuffer:n,cf=le.isFinite,G1=Js.join,M1=tf(yt.keys,yt),Xt=Vt.max,cn=Vt.min,U1=Re.now,$1=le.parseInt,uf=Vt.random,F1=Js.reverse,hc=yi(le,"DataView"),Vo=yi(le,"Map"),vc=yi(le,"Promise"),eo=yi(le,"Set"),Xo=yi(le,"WeakMap"),qo=yi(yt,"create"),ua=Xo&&new Xo,to={},P1=Li(hc),H1=Li(Vo),B1=Li(vc),W1=Li(eo),z1=Li(Xo),da=qr?qr.prototype:n,Zo=da?da.valueOf:n,df=da?da.toString:n;function x(s){if(Pt(s)&&!Je(s)&&!(s instanceof ut)){if(s instanceof Kn)return s;if(Ct.call(s,"__wrapped__"))return _g(s)}return new Kn(s)}var no=function(){function s(){}return function(l){if(!Ft(l))return{};if(sf)return sf(l);s.prototype=l;var v=new s;return s.prototype=n,v}}();function _a(){}function Kn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}x.templateSettings={escape:im,evaluate:om,interpolate:E_,variable:"",imports:{_:x}},x.prototype=_a.prototype,x.prototype.constructor=x,Kn.prototype=no(_a.prototype),Kn.prototype.constructor=Kn;function ut(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=qe,this.__views__=[]}function Y1(){var s=new ut(this.__wrapped__);return s.__actions__=In(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=In(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=In(this.__views__),s}function j1(){if(this.__filtered__){var s=new ut(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function K1(){var s=this.__wrapped__.value(),l=this.__dir__,v=Je(s),C=l<0,O=v?s.length:0,R=o0(0,O,this.__views__),$=R.start,Y=R.end,q=Y-$,_e=C?Y:$-1,fe=this.__iteratees__,ve=fe.length,Se=0,ke=cn(q,this.__takeCount__);if(!v||!C&&O==q&&ke==q)return Gf(s,this.__actions__);var Be=[];e:for(;q--&&Se<ke;){_e+=l;for(var ot=-1,We=s[_e];++ot<ve;){var lt=fe[ot],_t=lt.iteratee,Un=lt.type,hn=_t(We);if(Un==pe)We=hn;else if(!hn){if(Un==oe)continue e;break e}}Be[Se++]=We}return Be}ut.prototype=no(_a.prototype),ut.prototype.constructor=ut;function Ii(s){var l=-1,v=s==null?0:s.length;for(this.clear();++l<v;){var C=s[l];this.set(C[0],C[1])}}function V1(){this.__data__=qo?qo(null):{},this.size=0}function X1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function q1(s){var l=this.__data__;if(qo){var v=l[s];return v===u?n:v}return Ct.call(l,s)?l[s]:n}function Z1(s){var l=this.__data__;return qo?l[s]!==n:Ct.call(l,s)}function Q1(s,l){var v=this.__data__;return this.size+=this.has(s)?0:1,v[s]=qo&&l===n?u:l,this}Ii.prototype.clear=V1,Ii.prototype.delete=X1,Ii.prototype.get=q1,Ii.prototype.has=Z1,Ii.prototype.set=Q1;function Lr(s){var l=-1,v=s==null?0:s.length;for(this.clear();++l<v;){var C=s[l];this.set(C[0],C[1])}}function J1(){this.__data__=[],this.size=0}function eE(s){var l=this.__data__,v=fa(l,s);if(v<0)return!1;var C=l.length-1;return v==C?l.pop():sa.call(l,v,1),--this.size,!0}function tE(s){var l=this.__data__,v=fa(l,s);return v<0?n:l[v][1]}function nE(s){return fa(this.__data__,s)>-1}function rE(s,l){var v=this.__data__,C=fa(v,s);return C<0?(++this.size,v.push([s,l])):v[C][1]=l,this}Lr.prototype.clear=J1,Lr.prototype.delete=eE,Lr.prototype.get=tE,Lr.prototype.has=nE,Lr.prototype.set=rE;function Ar(s){var l=-1,v=s==null?0:s.length;for(this.clear();++l<v;){var C=s[l];this.set(C[0],C[1])}}function iE(){this.size=0,this.__data__={hash:new Ii,map:new(Vo||Lr),string:new Ii}}function oE(s){var l=ya(this,s).delete(s);return this.size-=l?1:0,l}function sE(s){return ya(this,s).get(s)}function aE(s){return ya(this,s).has(s)}function lE(s,l){var v=ya(this,s),C=v.size;return v.set(s,l),this.size+=v.size==C?0:1,this}Ar.prototype.clear=iE,Ar.prototype.delete=oE,Ar.prototype.get=sE,Ar.prototype.has=aE,Ar.prototype.set=lE;function bi(s){var l=-1,v=s==null?0:s.length;for(this.__data__=new Ar;++l<v;)this.add(s[l])}function cE(s){return this.__data__.set(s,u),this}function uE(s){return this.__data__.has(s)}bi.prototype.add=bi.prototype.push=cE,bi.prototype.has=uE;function ar(s){var l=this.__data__=new Lr(s);this.size=l.size}function dE(){this.__data__=new Lr,this.size=0}function _E(s){var l=this.__data__,v=l.delete(s);return this.size=l.size,v}function fE(s){return this.__data__.get(s)}function gE(s){return this.__data__.has(s)}function hE(s,l){var v=this.__data__;if(v instanceof Lr){var C=v.__data__;if(!Vo||C.length<i-1)return C.push([s,l]),this.size=++v.size,this;v=this.__data__=new Ar(C)}return v.set(s,l),this.size=v.size,this}ar.prototype.clear=dE,ar.prototype.delete=_E,ar.prototype.get=fE,ar.prototype.has=gE,ar.prototype.set=hE;function _f(s,l){var v=Je(s),C=!v&&Ai(s),O=!v&&!C&&ti(s),R=!v&&!C&&!O&&so(s),$=v||C||O||R,Y=$?uc(s.length,y1):[],q=Y.length;for(var _e in s)(l||Ct.call(s,_e))&&!($&&(_e=="length"||O&&(_e=="offset"||_e=="parent")||R&&(_e=="buffer"||_e=="byteLength"||_e=="byteOffset")||Rr(_e,q)))&&Y.push(_e);return Y}function ff(s){var l=s.length;return l?s[Ac(0,l-1)]:n}function vE(s,l){return La(In(s),Oi(l,0,s.length))}function pE(s){return La(In(s))}function pc(s,l,v){(v!==n&&!lr(s[l],v)||v===n&&!(l in s))&&Sr(s,l,v)}function Qo(s,l,v){var C=s[l];(!(Ct.call(s,l)&&lr(C,v))||v===n&&!(l in s))&&Sr(s,l,v)}function fa(s,l){for(var v=s.length;v--;)if(lr(s[v][0],l))return v;return-1}function mE(s,l,v,C){return Zr(s,function(O,R,$){l(C,O,v(O),$)}),C}function gf(s,l){return s&&pr(l,Qt(l),s)}function EE(s,l){return s&&pr(l,On(l),s)}function Sr(s,l,v){l=="__proto__"&&aa?aa(s,l,{configurable:!0,enumerable:!0,value:v,writable:!0}):s[l]=v}function mc(s,l){for(var v=-1,C=l.length,O=ie(C),R=s==null;++v<C;)O[v]=R?n:Qc(s,l[v]);return O}function Oi(s,l,v){return s===s&&(v!==n&&(s=s<=v?s:v),l!==n&&(s=s>=l?s:l)),s}function Vn(s,l,v,C,O,R){var $,Y=l&p,q=l&h,_e=l&m;if(v&&($=O?v(s,C,O,R):v(s)),$!==n)return $;if(!Ft(s))return s;var fe=Je(s);if(fe){if($=a0(s),!Y)return In(s,$)}else{var ve=un(s),Se=ve==yr||ve==$e;if(ti(s))return $f(s,Y);if(ve==Tt||ve==Gt||Se&&!O){if($=q||Se?{}:rg(s),!Y)return q?qE(s,EE($,s)):XE(s,gf($,s))}else{if(!Nt[ve])return O?s:{};$=l0(s,ve,Y)}}R||(R=new ar);var ke=R.get(s);if(ke)return ke;R.set(s,$),Tg(s)?s.forEach(function(We){$.add(Vn(We,l,v,We,s,R))}):xg(s)&&s.forEach(function(We,lt){$.set(lt,Vn(We,l,v,lt,s,R))});var Be=_e?q?$c:Uc:q?On:Qt,ot=fe?n:Be(s);return Yn(ot||s,function(We,lt){ot&&(lt=We,We=s[lt]),Qo($,lt,Vn(We,l,v,lt,s,R))}),$}function CE(s){var l=Qt(s);return function(v){return hf(v,s,l)}}function hf(s,l,v){var C=v.length;if(s==null)return!C;for(s=yt(s);C--;){var O=v[C],R=l[O],$=s[O];if($===n&&!(O in s)||!R($))return!1}return!0}function vf(s,l,v){if(typeof s!="function")throw new jn(a);return os(function(){s.apply(n,v)},l)}function Jo(s,l,v,C){var O=-1,R=qs,$=!0,Y=s.length,q=[],_e=l.length;if(!Y)return q;v&&(l=Mt(l,kn(v))),C?(R=ic,$=!1):l.length>=i&&(R=jo,$=!1,l=new bi(l));e:for(;++O<Y;){var fe=s[O],ve=v==null?fe:v(fe);if(fe=C||fe!==0?fe:0,$&&ve===ve){for(var Se=_e;Se--;)if(l[Se]===ve)continue e;q.push(fe)}else R(l,ve,C)||q.push(fe)}return q}var Zr=Wf(vr),pf=Wf(Cc,!0);function IE(s,l){var v=!0;return Zr(s,function(C,O,R){return v=!!l(C,O,R),v}),v}function ga(s,l,v){for(var C=-1,O=s.length;++C<O;){var R=s[C],$=l(R);if($!=null&&(Y===n?$===$&&!Mn($):v($,Y)))var Y=$,q=R}return q}function bE(s,l,v,C){var O=s.length;for(v=it(v),v<0&&(v=-v>O?0:O+v),C=C===n||C>O?O:it(C),C<0&&(C+=O),C=v>C?0:kg(C);v<C;)s[v++]=l;return s}function mf(s,l){var v=[];return Zr(s,function(C,O,R){l(C,O,R)&&v.push(C)}),v}function sn(s,l,v,C,O){var R=-1,$=s.length;for(v||(v=u0),O||(O=[]);++R<$;){var Y=s[R];l>0&&v(Y)?l>1?sn(Y,l-1,v,C,O):Vr(O,Y):C||(O[O.length]=Y)}return O}var Ec=zf(),Ef=zf(!0);function vr(s,l){return s&&Ec(s,l,Qt)}function Cc(s,l){return s&&Ef(s,l,Qt)}function ha(s,l){return Kr(l,function(v){return Tr(s[v])})}function wi(s,l){l=Jr(l,s);for(var v=0,C=l.length;s!=null&&v<C;)s=s[mr(l[v++])];return v&&v==C?s:n}function Cf(s,l,v){var C=l(s);return Je(s)?C:Vr(C,v(s))}function fn(s){return s==null?s===n?rt:Ue:Ci&&Ci in yt(s)?i0(s):p0(s)}function Ic(s,l){return s>l}function OE(s,l){return s!=null&&Ct.call(s,l)}function wE(s,l){return s!=null&&l in yt(s)}function yE(s,l,v){return s>=cn(l,v)&&s<Xt(l,v)}function bc(s,l,v){for(var C=v?ic:qs,O=s[0].length,R=s.length,$=R,Y=ie(R),q=1/0,_e=[];$--;){var fe=s[$];$&&l&&(fe=Mt(fe,kn(l))),q=cn(fe.length,q),Y[$]=!v&&(l||O>=120&&fe.length>=120)?new bi($&&fe):n}fe=s[0];var ve=-1,Se=Y[0];e:for(;++ve<O&&_e.length<q;){var ke=fe[ve],Be=l?l(ke):ke;if(ke=v||ke!==0?ke:0,!(Se?jo(Se,Be):C(_e,Be,v))){for($=R;--$;){var ot=Y[$];if(!(ot?jo(ot,Be):C(s[$],Be,v)))continue e}Se&&Se.push(Be),_e.push(ke)}}return _e}function LE(s,l,v,C){return vr(s,function(O,R,$){l(C,v(O),R,$)}),C}function es(s,l,v){l=Jr(l,s),s=ag(s,l);var C=s==null?s:s[mr(qn(l))];return C==null?n:Dn(C,s,v)}function If(s){return Pt(s)&&fn(s)==Gt}function AE(s){return Pt(s)&&fn(s)==jr}function SE(s){return Pt(s)&&fn(s)==Wn}function ts(s,l,v,C,O){return s===l?!0:s==null||l==null||!Pt(s)&&!Pt(l)?s!==s&&l!==l:NE(s,l,v,C,ts,O)}function NE(s,l,v,C,O,R){var $=Je(s),Y=Je(l),q=$?$t:un(s),_e=Y?$t:un(l);q=q==Gt?Tt:q,_e=_e==Gt?Tt:_e;var fe=q==Tt,ve=_e==Tt,Se=q==_e;if(Se&&ti(s)){if(!ti(l))return!1;$=!0,fe=!1}if(Se&&!fe)return R||(R=new ar),$||so(s)?eg(s,l,v,C,O,R):n0(s,l,q,v,C,O,R);if(!(v&E)){var ke=fe&&Ct.call(s,"__wrapped__"),Be=ve&&Ct.call(l,"__wrapped__");if(ke||Be){var ot=ke?s.value():s,We=Be?l.value():l;return R||(R=new ar),O(ot,We,v,C,R)}}return Se?(R||(R=new ar),r0(s,l,v,C,O,R)):!1}function xE(s){return Pt(s)&&un(s)==Le}function Oc(s,l,v,C){var O=v.length,R=O,$=!C;if(s==null)return!R;for(s=yt(s);O--;){var Y=v[O];if($&&Y[2]?Y[1]!==s[Y[0]]:!(Y[0]in s))return!1}for(;++O<R;){Y=v[O];var q=Y[0],_e=s[q],fe=Y[1];if($&&Y[2]){if(_e===n&&!(q in s))return!1}else{var ve=new ar;if(C)var Se=C(_e,fe,q,s,l,ve);if(!(Se===n?ts(fe,_e,E|I,C,ve):Se))return!1}}return!0}function bf(s){if(!Ft(s)||_0(s))return!1;var l=Tr(s)?x1:Cm;return l.test(Li(s))}function RE(s){return Pt(s)&&fn(s)==Yr}function TE(s){return Pt(s)&&un(s)==xn}function DE(s){return Pt(s)&&Ta(s.length)&&!!Dt[fn(s)]}function Of(s){return typeof s=="function"?s:s==null?wn:typeof s=="object"?Je(s)?Lf(s[0],s[1]):yf(s):Yg(s)}function wc(s){if(!is(s))return M1(s);var l=[];for(var v in yt(s))Ct.call(s,v)&&v!="constructor"&&l.push(v);return l}function kE(s){if(!Ft(s))return v0(s);var l=is(s),v=[];for(var C in s)C=="constructor"&&(l||!Ct.call(s,C))||v.push(C);return v}function yc(s,l){return s<l}function wf(s,l){var v=-1,C=bn(s)?ie(s.length):[];return Zr(s,function(O,R,$){C[++v]=l(O,R,$)}),C}function yf(s){var l=Pc(s);return l.length==1&&l[0][2]?og(l[0][0],l[0][1]):function(v){return v===s||Oc(v,s,l)}}function Lf(s,l){return Bc(s)&&ig(l)?og(mr(s),l):function(v){var C=Qc(v,s);return C===n&&C===l?Jc(v,s):ts(l,C,E|I)}}function va(s,l,v,C,O){s!==l&&Ec(l,function(R,$){if(O||(O=new ar),Ft(R))GE(s,l,$,v,va,C,O);else{var Y=C?C(zc(s,$),R,$+"",s,l,O):n;Y===n&&(Y=R),pc(s,$,Y)}},On)}function GE(s,l,v,C,O,R,$){var Y=zc(s,v),q=zc(l,v),_e=$.get(q);if(_e){pc(s,v,_e);return}var fe=R?R(Y,q,v+"",s,l,$):n,ve=fe===n;if(ve){var Se=Je(q),ke=!Se&&ti(q),Be=!Se&&!ke&&so(q);fe=q,Se||ke||Be?Je(Y)?fe=Y:Bt(Y)?fe=In(Y):ke?(ve=!1,fe=$f(q,!0)):Be?(ve=!1,fe=Ff(q,!0)):fe=[]:ss(q)||Ai(q)?(fe=Y,Ai(Y)?fe=Gg(Y):(!Ft(Y)||Tr(Y))&&(fe=rg(q))):ve=!1}ve&&($.set(q,fe),O(fe,q,C,R,$),$.delete(q)),pc(s,v,fe)}function Af(s,l){var v=s.length;if(v)return l+=l<0?v:0,Rr(l,v)?s[l]:n}function Sf(s,l,v){l.length?l=Mt(l,function(R){return Je(R)?function($){return wi($,R.length===1?R[0]:R)}:R}):l=[wn];var C=-1;l=Mt(l,kn(He()));var O=wf(s,function(R,$,Y){var q=Mt(l,function(_e){return _e(R)});return{criteria:q,index:++C,value:R}});return l1(O,function(R,$){return VE(R,$,v)})}function ME(s,l){return Nf(s,l,function(v,C){return Jc(s,C)})}function Nf(s,l,v){for(var C=-1,O=l.length,R={};++C<O;){var $=l[C],Y=wi(s,$);v(Y,$)&&ns(R,Jr($,s),Y)}return R}function UE(s){return function(l){return wi(l,s)}}function Lc(s,l,v,C){var O=C?a1:Xi,R=-1,$=l.length,Y=s;for(s===l&&(l=In(l)),v&&(Y=Mt(s,kn(v)));++R<$;)for(var q=0,_e=l[R],fe=v?v(_e):_e;(q=O(Y,fe,q,C))>-1;)Y!==s&&sa.call(Y,q,1),sa.call(s,q,1);return s}function xf(s,l){for(var v=s?l.length:0,C=v-1;v--;){var O=l[v];if(v==C||O!==R){var R=O;Rr(O)?sa.call(s,O,1):xc(s,O)}}return s}function Ac(s,l){return s+ca(uf()*(l-s+1))}function $E(s,l,v,C){for(var O=-1,R=Xt(la((l-s)/(v||1)),0),$=ie(R);R--;)$[C?R:++O]=s,s+=v;return $}function Sc(s,l){var v="";if(!s||l<1||l>Oe)return v;do l%2&&(v+=s),l=ca(l/2),l&&(s+=s);while(l);return v}function st(s,l){return Yc(sg(s,l,wn),s+"")}function FE(s){return ff(ao(s))}function PE(s,l){var v=ao(s);return La(v,Oi(l,0,v.length))}function ns(s,l,v,C){if(!Ft(s))return s;l=Jr(l,s);for(var O=-1,R=l.length,$=R-1,Y=s;Y!=null&&++O<R;){var q=mr(l[O]),_e=v;if(q==="__proto__"||q==="constructor"||q==="prototype")return s;if(O!=$){var fe=Y[q];_e=C?C(fe,q,Y):n,_e===n&&(_e=Ft(fe)?fe:Rr(l[O+1])?[]:{})}Qo(Y,q,_e),Y=Y[q]}return s}var Rf=ua?function(s,l){return ua.set(s,l),s}:wn,HE=aa?function(s,l){return aa(s,"toString",{configurable:!0,enumerable:!1,value:tu(l),writable:!0})}:wn;function BE(s){return La(ao(s))}function Xn(s,l,v){var C=-1,O=s.length;l<0&&(l=-l>O?0:O+l),v=v>O?O:v,v<0&&(v+=O),O=l>v?0:v-l>>>0,l>>>=0;for(var R=ie(O);++C<O;)R[C]=s[C+l];return R}function WE(s,l){var v;return Zr(s,function(C,O,R){return v=l(C,O,R),!v}),!!v}function pa(s,l,v){var C=0,O=s==null?C:s.length;if(typeof l=="number"&&l===l&&O<=Rt){for(;C<O;){var R=C+O>>>1,$=s[R];$!==null&&!Mn($)&&(v?$<=l:$<l)?C=R+1:O=R}return O}return Nc(s,l,wn,v)}function Nc(s,l,v,C){var O=0,R=s==null?0:s.length;if(R===0)return 0;l=v(l);for(var $=l!==l,Y=l===null,q=Mn(l),_e=l===n;O<R;){var fe=ca((O+R)/2),ve=v(s[fe]),Se=ve!==n,ke=ve===null,Be=ve===ve,ot=Mn(ve);if($)var We=C||Be;else _e?We=Be&&(C||Se):Y?We=Be&&Se&&(C||!ke):q?We=Be&&Se&&!ke&&(C||!ot):ke||ot?We=!1:We=C?ve<=l:ve<l;We?O=fe+1:R=fe}return cn(R,bt)}function Tf(s,l){for(var v=-1,C=s.length,O=0,R=[];++v<C;){var $=s[v],Y=l?l($):$;if(!v||!lr(Y,q)){var q=Y;R[O++]=$===0?0:$}}return R}function Df(s){return typeof s=="number"?s:Mn(s)?je:+s}function Gn(s){if(typeof s=="string")return s;if(Je(s))return Mt(s,Gn)+"";if(Mn(s))return df?df.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Qr(s,l,v){var C=-1,O=qs,R=s.length,$=!0,Y=[],q=Y;if(v)$=!1,O=ic;else if(R>=i){var _e=l?null:e0(s);if(_e)return Qs(_e);$=!1,O=jo,q=new bi}else q=l?[]:Y;e:for(;++C<R;){var fe=s[C],ve=l?l(fe):fe;if(fe=v||fe!==0?fe:0,$&&ve===ve){for(var Se=q.length;Se--;)if(q[Se]===ve)continue e;l&&q.push(ve),Y.push(fe)}else O(q,ve,v)||(q!==Y&&q.push(ve),Y.push(fe))}return Y}function xc(s,l){return l=Jr(l,s),s=ag(s,l),s==null||delete s[mr(qn(l))]}function kf(s,l,v,C){return ns(s,l,v(wi(s,l)),C)}function ma(s,l,v,C){for(var O=s.length,R=C?O:-1;(C?R--:++R<O)&&l(s[R],R,s););return v?Xn(s,C?0:R,C?R+1:O):Xn(s,C?R+1:0,C?O:R)}function Gf(s,l){var v=s;return v instanceof ut&&(v=v.value()),oc(l,function(C,O){return O.func.apply(O.thisArg,Vr([C],O.args))},v)}function Rc(s,l,v){var C=s.length;if(C<2)return C?Qr(s[0]):[];for(var O=-1,R=ie(C);++O<C;)for(var $=s[O],Y=-1;++Y<C;)Y!=O&&(R[O]=Jo(R[O]||$,s[Y],l,v));return Qr(sn(R,1),l,v)}function Mf(s,l,v){for(var C=-1,O=s.length,R=l.length,$={};++C<O;){var Y=C<R?l[C]:n;v($,s[C],Y)}return $}function Tc(s){return Bt(s)?s:[]}function Dc(s){return typeof s=="function"?s:wn}function Jr(s,l){return Je(s)?s:Bc(s,l)?[s]:dg(Et(s))}var zE=st;function ei(s,l,v){var C=s.length;return v=v===n?C:v,!l&&v>=C?s:Xn(s,l,v)}var Uf=R1||function(s){return on.clearTimeout(s)};function $f(s,l){if(l)return s.slice();var v=s.length,C=of?of(v):new s.constructor(v);return s.copy(C),C}function kc(s){var l=new s.constructor(s.byteLength);return new ia(l).set(new ia(s)),l}function YE(s,l){var v=l?kc(s.buffer):s.buffer;return new s.constructor(v,s.byteOffset,s.byteLength)}function jE(s){var l=new s.constructor(s.source,C_.exec(s));return l.lastIndex=s.lastIndex,l}function KE(s){return Zo?yt(Zo.call(s)):{}}function Ff(s,l){var v=l?kc(s.buffer):s.buffer;return new s.constructor(v,s.byteOffset,s.length)}function Pf(s,l){if(s!==l){var v=s!==n,C=s===null,O=s===s,R=Mn(s),$=l!==n,Y=l===null,q=l===l,_e=Mn(l);if(!Y&&!_e&&!R&&s>l||R&&$&&q&&!Y&&!_e||C&&$&&q||!v&&q||!O)return 1;if(!C&&!R&&!_e&&s<l||_e&&v&&O&&!C&&!R||Y&&v&&O||!$&&O||!q)return-1}return 0}function VE(s,l,v){for(var C=-1,O=s.criteria,R=l.criteria,$=O.length,Y=v.length;++C<$;){var q=Pf(O[C],R[C]);if(q){if(C>=Y)return q;var _e=v[C];return q*(_e=="desc"?-1:1)}}return s.index-l.index}function Hf(s,l,v,C){for(var O=-1,R=s.length,$=v.length,Y=-1,q=l.length,_e=Xt(R-$,0),fe=ie(q+_e),ve=!C;++Y<q;)fe[Y]=l[Y];for(;++O<$;)(ve||O<R)&&(fe[v[O]]=s[O]);for(;_e--;)fe[Y++]=s[O++];return fe}function Bf(s,l,v,C){for(var O=-1,R=s.length,$=-1,Y=v.length,q=-1,_e=l.length,fe=Xt(R-Y,0),ve=ie(fe+_e),Se=!C;++O<fe;)ve[O]=s[O];for(var ke=O;++q<_e;)ve[ke+q]=l[q];for(;++$<Y;)(Se||O<R)&&(ve[ke+v[$]]=s[O++]);return ve}function In(s,l){var v=-1,C=s.length;for(l||(l=ie(C));++v<C;)l[v]=s[v];return l}function pr(s,l,v,C){var O=!v;v||(v={});for(var R=-1,$=l.length;++R<$;){var Y=l[R],q=C?C(v[Y],s[Y],Y,v,s):n;q===n&&(q=s[Y]),O?Sr(v,Y,q):Qo(v,Y,q)}return v}function XE(s,l){return pr(s,Hc(s),l)}function qE(s,l){return pr(s,tg(s),l)}function Ea(s,l){return function(v,C){var O=Je(v)?t1:mE,R=l?l():{};return O(v,s,He(C,2),R)}}function ro(s){return st(function(l,v){var C=-1,O=v.length,R=O>1?v[O-1]:n,$=O>2?v[2]:n;for(R=s.length>3&&typeof R=="function"?(O--,R):n,$&&gn(v[0],v[1],$)&&(R=O<3?n:R,O=1),l=yt(l);++C<O;){var Y=v[C];Y&&s(l,Y,C,R)}return l})}function Wf(s,l){return function(v,C){if(v==null)return v;if(!bn(v))return s(v,C);for(var O=v.length,R=l?O:-1,$=yt(v);(l?R--:++R<O)&&C($[R],R,$)!==!1;);return v}}function zf(s){return function(l,v,C){for(var O=-1,R=yt(l),$=C(l),Y=$.length;Y--;){var q=$[s?Y:++O];if(v(R[q],q,R)===!1)break}return l}}function ZE(s,l,v){var C=l&b,O=rs(s);function R(){var $=this&&this!==on&&this instanceof R?O:s;return $.apply(C?v:this,arguments)}return R}function Yf(s){return function(l){l=Et(l);var v=qi(l)?sr(l):n,C=v?v[0]:l.charAt(0),O=v?ei(v,1).join(""):l.slice(1);return C[s]()+O}}function io(s){return function(l){return oc(Wg(Bg(l).replace(Hm,"")),s,"")}}function rs(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var v=no(s.prototype),C=s.apply(v,l);return Ft(C)?C:v}}function QE(s,l,v){var C=rs(s);function O(){for(var R=arguments.length,$=ie(R),Y=R,q=oo(O);Y--;)$[Y]=arguments[Y];var _e=R<3&&$[0]!==q&&$[R-1]!==q?[]:Xr($,q);if(R-=_e.length,R<v)return qf(s,l,Ca,O.placeholder,n,$,_e,n,n,v-R);var fe=this&&this!==on&&this instanceof O?C:s;return Dn(fe,this,$)}return O}function jf(s){return function(l,v,C){var O=yt(l);if(!bn(l)){var R=He(v,3);l=Qt(l),v=function(Y){return R(O[Y],Y,O)}}var $=s(l,v,C);return $>-1?O[R?l[$]:$]:n}}function Kf(s){return xr(function(l){var v=l.length,C=v,O=Kn.prototype.thru;for(s&&l.reverse();C--;){var R=l[C];if(typeof R!="function")throw new jn(a);if(O&&!$&&wa(R)=="wrapper")var $=new Kn([],!0)}for(C=$?C:v;++C<v;){R=l[C];var Y=wa(R),q=Y=="wrapper"?Fc(R):n;q&&Wc(q[0])&&q[1]==(H|k|F|j)&&!q[4].length&&q[9]==1?$=$[wa(q[0])].apply($,q[3]):$=R.length==1&&Wc(R)?$[Y]():$.thru(R)}return function(){var _e=arguments,fe=_e[0];if($&&_e.length==1&&Je(fe))return $.plant(fe).value();for(var ve=0,Se=v?l[ve].apply(this,_e):fe;++ve<v;)Se=l[ve].call(this,Se);return Se}})}function Ca(s,l,v,C,O,R,$,Y,q,_e){var fe=l&H,ve=l&b,Se=l&w,ke=l&(k|G),Be=l&J,ot=Se?n:rs(s);function We(){for(var lt=arguments.length,_t=ie(lt),Un=lt;Un--;)_t[Un]=arguments[Un];if(ke)var hn=oo(We),$n=u1(_t,hn);if(C&&(_t=Hf(_t,C,O,ke)),R&&(_t=Bf(_t,R,$,ke)),lt-=$n,ke&&lt<_e){var Wt=Xr(_t,hn);return qf(s,l,Ca,We.placeholder,v,_t,Wt,Y,q,_e-lt)}var cr=ve?v:this,kr=Se?cr[s]:s;return lt=_t.length,Y?_t=m0(_t,Y):Be&&lt>1&&_t.reverse(),fe&&q<lt&&(_t.length=q),this&&this!==on&&this instanceof We&&(kr=ot||rs(kr)),kr.apply(cr,_t)}return We}function Vf(s,l){return function(v,C){return LE(v,s,l(C),{})}}function Ia(s,l){return function(v,C){var O;if(v===n&&C===n)return l;if(v!==n&&(O=v),C!==n){if(O===n)return C;typeof v=="string"||typeof C=="string"?(v=Gn(v),C=Gn(C)):(v=Df(v),C=Df(C)),O=s(v,C)}return O}}function Gc(s){return xr(function(l){return l=Mt(l,kn(He())),st(function(v){var C=this;return s(l,function(O){return Dn(O,C,v)})})})}function ba(s,l){l=l===n?" ":Gn(l);var v=l.length;if(v<2)return v?Sc(l,s):l;var C=Sc(l,la(s/Zi(l)));return qi(l)?ei(sr(C),0,s).join(""):C.slice(0,s)}function JE(s,l,v,C){var O=l&b,R=rs(s);function $(){for(var Y=-1,q=arguments.length,_e=-1,fe=C.length,ve=ie(fe+q),Se=this&&this!==on&&this instanceof $?R:s;++_e<fe;)ve[_e]=C[_e];for(;q--;)ve[_e++]=arguments[++Y];return Dn(Se,O?v:this,ve)}return $}function Xf(s){return function(l,v,C){return C&&typeof C!="number"&&gn(l,v,C)&&(v=C=n),l=Dr(l),v===n?(v=l,l=0):v=Dr(v),C=C===n?l<v?1:-1:Dr(C),$E(l,v,C,s)}}function Oa(s){return function(l,v){return typeof l=="string"&&typeof v=="string"||(l=Zn(l),v=Zn(v)),s(l,v)}}function qf(s,l,v,C,O,R,$,Y,q,_e){var fe=l&k,ve=fe?$:n,Se=fe?n:$,ke=fe?R:n,Be=fe?n:R;l|=fe?F:z,l&=~(fe?z:F),l&A||(l&=-4);var ot=[s,l,O,ke,ve,Be,Se,Y,q,_e],We=v.apply(n,ot);return Wc(s)&&lg(We,ot),We.placeholder=C,cg(We,s,l)}function Mc(s){var l=Vt[s];return function(v,C){if(v=Zn(v),C=C==null?0:cn(it(C),292),C&&cf(v)){var O=(Et(v)+"e").split("e"),R=l(O[0]+"e"+(+O[1]+C));return O=(Et(R)+"e").split("e"),+(O[0]+"e"+(+O[1]-C))}return l(v)}}var e0=eo&&1/Qs(new eo([,-0]))[1]==xe?function(s){return new eo(s)}:iu;function Zf(s){return function(l){var v=un(l);return v==Le?_c(l):v==xn?p1(l):c1(l,s(l))}}function Nr(s,l,v,C,O,R,$,Y){var q=l&w;if(!q&&typeof s!="function")throw new jn(a);var _e=C?C.length:0;if(_e||(l&=-97,C=O=n),$=$===n?$:Xt(it($),0),Y=Y===n?Y:it(Y),_e-=O?O.length:0,l&z){var fe=C,ve=O;C=O=n}var Se=q?n:Fc(s),ke=[s,l,v,C,O,fe,ve,R,$,Y];if(Se&&h0(ke,Se),s=ke[0],l=ke[1],v=ke[2],C=ke[3],O=ke[4],Y=ke[9]=ke[9]===n?q?0:s.length:Xt(ke[9]-_e,0),!Y&&l&(k|G)&&(l&=-25),!l||l==b)var Be=ZE(s,l,v);else l==k||l==G?Be=QE(s,l,Y):(l==F||l==(b|F))&&!O.length?Be=JE(s,l,v,C):Be=Ca.apply(n,ke);var ot=Se?Rf:lg;return cg(ot(Be,ke),s,l)}function Qf(s,l,v,C){return s===n||lr(s,Ji[v])&&!Ct.call(C,v)?l:s}function Jf(s,l,v,C,O,R){return Ft(s)&&Ft(l)&&(R.set(l,s),va(s,l,n,Jf,R),R.delete(l)),s}function t0(s){return ss(s)?n:s}function eg(s,l,v,C,O,R){var $=v&E,Y=s.length,q=l.length;if(Y!=q&&!($&&q>Y))return!1;var _e=R.get(s),fe=R.get(l);if(_e&&fe)return _e==l&&fe==s;var ve=-1,Se=!0,ke=v&I?new bi:n;for(R.set(s,l),R.set(l,s);++ve<Y;){var Be=s[ve],ot=l[ve];if(C)var We=$?C(ot,Be,ve,l,s,R):C(Be,ot,ve,s,l,R);if(We!==n){if(We)continue;Se=!1;break}if(ke){if(!sc(l,function(lt,_t){if(!jo(ke,_t)&&(Be===lt||O(Be,lt,v,C,R)))return ke.push(_t)})){Se=!1;break}}else if(!(Be===ot||O(Be,ot,v,C,R))){Se=!1;break}}return R.delete(s),R.delete(l),Se}function n0(s,l,v,C,O,R,$){switch(v){case Tn:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case jr:return!(s.byteLength!=l.byteLength||!R(new ia(s),new ia(l)));case hr:case Wn:case Me:return lr(+s,+l);case wr:return s.name==l.name&&s.message==l.message;case Yr:case mi:return s==l+"";case Le:var Y=_c;case xn:var q=C&E;if(Y||(Y=Qs),s.size!=l.size&&!q)return!1;var _e=$.get(s);if(_e)return _e==l;C|=I,$.set(s,l);var fe=eg(Y(s),Y(l),C,O,R,$);return $.delete(s),fe;case Ki:if(Zo)return Zo.call(s)==Zo.call(l)}return!1}function r0(s,l,v,C,O,R){var $=v&E,Y=Uc(s),q=Y.length,_e=Uc(l),fe=_e.length;if(q!=fe&&!$)return!1;for(var ve=q;ve--;){var Se=Y[ve];if(!($?Se in l:Ct.call(l,Se)))return!1}var ke=R.get(s),Be=R.get(l);if(ke&&Be)return ke==l&&Be==s;var ot=!0;R.set(s,l),R.set(l,s);for(var We=$;++ve<q;){Se=Y[ve];var lt=s[Se],_t=l[Se];if(C)var Un=$?C(_t,lt,Se,l,s,R):C(lt,_t,Se,s,l,R);if(!(Un===n?lt===_t||O(lt,_t,v,C,R):Un)){ot=!1;break}We||(We=Se=="constructor")}if(ot&&!We){var hn=s.constructor,$n=l.constructor;hn!=$n&&"constructor"in s&&"constructor"in l&&!(typeof hn=="function"&&hn instanceof hn&&typeof $n=="function"&&$n instanceof $n)&&(ot=!1)}return R.delete(s),R.delete(l),ot}function xr(s){return Yc(sg(s,n,hg),s+"")}function Uc(s){return Cf(s,Qt,Hc)}function $c(s){return Cf(s,On,tg)}var Fc=ua?function(s){return ua.get(s)}:iu;function wa(s){for(var l=s.name+"",v=to[l],C=Ct.call(to,l)?v.length:0;C--;){var O=v[C],R=O.func;if(R==null||R==s)return O.name}return l}function oo(s){var l=Ct.call(x,"placeholder")?x:s;return l.placeholder}function He(){var s=x.iteratee||nu;return s=s===nu?Of:s,arguments.length?s(arguments[0],arguments[1]):s}function ya(s,l){var v=s.__data__;return d0(l)?v[typeof l=="string"?"string":"hash"]:v.map}function Pc(s){for(var l=Qt(s),v=l.length;v--;){var C=l[v],O=s[C];l[v]=[C,O,ig(O)]}return l}function yi(s,l){var v=g1(s,l);return bf(v)?v:n}function i0(s){var l=Ct.call(s,Ci),v=s[Ci];try{s[Ci]=n;var C=!0}catch{}var O=na.call(s);return C&&(l?s[Ci]=v:delete s[Ci]),O}var Hc=gc?function(s){return s==null?[]:(s=yt(s),Kr(gc(s),function(l){return af.call(s,l)}))}:ou,tg=gc?function(s){for(var l=[];s;)Vr(l,Hc(s)),s=oa(s);return l}:ou,un=fn;(hc&&un(new hc(new ArrayBuffer(1)))!=Tn||Vo&&un(new Vo)!=Le||vc&&un(vc.resolve())!=Ho||eo&&un(new eo)!=xn||Xo&&un(new Xo)!=Rn)&&(un=function(s){var l=fn(s),v=l==Tt?s.constructor:n,C=v?Li(v):"";if(C)switch(C){case P1:return Tn;case H1:return Le;case B1:return Ho;case W1:return xn;case z1:return Rn}return l});function o0(s,l,v){for(var C=-1,O=v.length;++C<O;){var R=v[C],$=R.size;switch(R.type){case"drop":s+=$;break;case"dropRight":l-=$;break;case"take":l=cn(l,s+$);break;case"takeRight":s=Xt(s,l-$);break}}return{start:s,end:l}}function s0(s){var l=s.match(_m);return l?l[1].split(fm):[]}function ng(s,l,v){l=Jr(l,s);for(var C=-1,O=l.length,R=!1;++C<O;){var $=mr(l[C]);if(!(R=s!=null&&v(s,$)))break;s=s[$]}return R||++C!=O?R:(O=s==null?0:s.length,!!O&&Ta(O)&&Rr($,O)&&(Je(s)||Ai(s)))}function a0(s){var l=s.length,v=new s.constructor(l);return l&&typeof s[0]=="string"&&Ct.call(s,"index")&&(v.index=s.index,v.input=s.input),v}function rg(s){return typeof s.constructor=="function"&&!is(s)?no(oa(s)):{}}function l0(s,l,v){var C=s.constructor;switch(l){case jr:return kc(s);case hr:case Wn:return new C(+s);case Tn:return YE(s,v);case Bo:case Wo:case zo:case Yo:case zl:case Yl:case jl:case Kl:case Vl:return Ff(s,v);case Le:return new C;case Me:case mi:return new C(s);case Yr:return jE(s);case xn:return new C;case Ki:return KE(s)}}function c0(s,l){var v=l.length;if(!v)return s;var C=v-1;return l[C]=(v>1?"& ":"")+l[C],l=l.join(v>2?", ":" "),s.replace(dm,`{
/* [wrapped with `+l+`] */
`)}function u0(s){return Je(s)||Ai(s)||!!(lf&&s&&s[lf])}function Rr(s,l){var v=typeof s;return l=l??Oe,!!l&&(v=="number"||v!="symbol"&&bm.test(s))&&s>-1&&s%1==0&&s<l}function gn(s,l,v){if(!Ft(v))return!1;var C=typeof l;return(C=="number"?bn(v)&&Rr(l,v.length):C=="string"&&l in v)?lr(v[l],s):!1}function Bc(s,l){if(Je(s))return!1;var v=typeof s;return v=="number"||v=="symbol"||v=="boolean"||s==null||Mn(s)?!0:am.test(s)||!sm.test(s)||l!=null&&s in yt(l)}function d0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Wc(s){var l=wa(s),v=x[l];if(typeof v!="function"||!(l in ut.prototype))return!1;if(s===v)return!0;var C=Fc(v);return!!C&&s===C[0]}function _0(s){return!!rf&&rf in s}var f0=ea?Tr:su;function is(s){var l=s&&s.constructor,v=typeof l=="function"&&l.prototype||Ji;return s===v}function ig(s){return s===s&&!Ft(s)}function og(s,l){return function(v){return v==null?!1:v[s]===l&&(l!==n||s in yt(v))}}function g0(s){var l=xa(s,function(C){return v.size===f&&v.clear(),C}),v=l.cache;return l}function h0(s,l){var v=s[1],C=l[1],O=v|C,R=O<(b|w|H),$=C==H&&v==k||C==H&&v==j&&s[7].length<=l[8]||C==(H|j)&&l[7].length<=l[8]&&v==k;if(!(R||$))return s;C&b&&(s[2]=l[2],O|=v&b?0:A);var Y=l[3];if(Y){var q=s[3];s[3]=q?Hf(q,Y,l[4]):Y,s[4]=q?Xr(s[3],g):l[4]}return Y=l[5],Y&&(q=s[5],s[5]=q?Bf(q,Y,l[6]):Y,s[6]=q?Xr(s[5],g):l[6]),Y=l[7],Y&&(s[7]=Y),C&H&&(s[8]=s[8]==null?l[8]:cn(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=O,s}function v0(s){var l=[];if(s!=null)for(var v in yt(s))l.push(v);return l}function p0(s){return na.call(s)}function sg(s,l,v){return l=Xt(l===n?s.length-1:l,0),function(){for(var C=arguments,O=-1,R=Xt(C.length-l,0),$=ie(R);++O<R;)$[O]=C[l+O];O=-1;for(var Y=ie(l+1);++O<l;)Y[O]=C[O];return Y[l]=v($),Dn(s,this,Y)}}function ag(s,l){return l.length<2?s:wi(s,Xn(l,0,-1))}function m0(s,l){for(var v=s.length,C=cn(l.length,v),O=In(s);C--;){var R=l[C];s[C]=Rr(R,v)?O[R]:n}return s}function zc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var lg=ug(Rf),os=D1||function(s,l){return on.setTimeout(s,l)},Yc=ug(HE);function cg(s,l,v){var C=l+"";return Yc(s,c0(C,E0(s0(C),v)))}function ug(s){var l=0,v=0;return function(){var C=U1(),O=ge-(C-v);if(v=C,O>0){if(++l>=re)return arguments[0]}else l=0;return s.apply(n,arguments)}}function La(s,l){var v=-1,C=s.length,O=C-1;for(l=l===n?C:l;++v<l;){var R=Ac(v,O),$=s[R];s[R]=s[v],s[v]=$}return s.length=l,s}var dg=g0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(lm,function(v,C,O,R){l.push(O?R.replace(vm,"$1"):C||v)}),l});function mr(s){if(typeof s=="string"||Mn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Li(s){if(s!=null){try{return ta.call(s)}catch{}try{return s+""}catch{}}return""}function E0(s,l){return Yn(Kt,function(v){var C="_."+v[0];l&v[1]&&!qs(s,C)&&s.push(C)}),s.sort()}function _g(s){if(s instanceof ut)return s.clone();var l=new Kn(s.__wrapped__,s.__chain__);return l.__actions__=In(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function C0(s,l,v){(v?gn(s,l,v):l===n)?l=1:l=Xt(it(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var O=0,R=0,$=ie(la(C/l));O<C;)$[R++]=Xn(s,O,O+=l);return $}function I0(s){for(var l=-1,v=s==null?0:s.length,C=0,O=[];++l<v;){var R=s[l];R&&(O[C++]=R)}return O}function b0(){var s=arguments.length;if(!s)return[];for(var l=ie(s-1),v=arguments[0],C=s;C--;)l[C-1]=arguments[C];return Vr(Je(v)?In(v):[v],sn(l,1))}var O0=st(function(s,l){return Bt(s)?Jo(s,sn(l,1,Bt,!0)):[]}),w0=st(function(s,l){var v=qn(l);return Bt(v)&&(v=n),Bt(s)?Jo(s,sn(l,1,Bt,!0),He(v,2)):[]}),y0=st(function(s,l){var v=qn(l);return Bt(v)&&(v=n),Bt(s)?Jo(s,sn(l,1,Bt,!0),n,v):[]});function L0(s,l,v){var C=s==null?0:s.length;return C?(l=v||l===n?1:it(l),Xn(s,l<0?0:l,C)):[]}function A0(s,l,v){var C=s==null?0:s.length;return C?(l=v||l===n?1:it(l),l=C-l,Xn(s,0,l<0?0:l)):[]}function S0(s,l){return s&&s.length?ma(s,He(l,3),!0,!0):[]}function N0(s,l){return s&&s.length?ma(s,He(l,3),!0):[]}function x0(s,l,v,C){var O=s==null?0:s.length;return O?(v&&typeof v!="number"&&gn(s,l,v)&&(v=0,C=O),bE(s,l,v,C)):[]}function fg(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var O=v==null?0:it(v);return O<0&&(O=Xt(C+O,0)),Zs(s,He(l,3),O)}function gg(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var O=C-1;return v!==n&&(O=it(v),O=v<0?Xt(C+O,0):cn(O,C-1)),Zs(s,He(l,3),O,!0)}function hg(s){var l=s==null?0:s.length;return l?sn(s,1):[]}function R0(s){var l=s==null?0:s.length;return l?sn(s,xe):[]}function T0(s,l){var v=s==null?0:s.length;return v?(l=l===n?1:it(l),sn(s,l)):[]}function D0(s){for(var l=-1,v=s==null?0:s.length,C={};++l<v;){var O=s[l];C[O[0]]=O[1]}return C}function vg(s){return s&&s.length?s[0]:n}function k0(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var O=v==null?0:it(v);return O<0&&(O=Xt(C+O,0)),Xi(s,l,O)}function G0(s){var l=s==null?0:s.length;return l?Xn(s,0,-1):[]}var M0=st(function(s){var l=Mt(s,Tc);return l.length&&l[0]===s[0]?bc(l):[]}),U0=st(function(s){var l=qn(s),v=Mt(s,Tc);return l===qn(v)?l=n:v.pop(),v.length&&v[0]===s[0]?bc(v,He(l,2)):[]}),$0=st(function(s){var l=qn(s),v=Mt(s,Tc);return l=typeof l=="function"?l:n,l&&v.pop(),v.length&&v[0]===s[0]?bc(v,n,l):[]});function F0(s,l){return s==null?"":G1.call(s,l)}function qn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function P0(s,l,v){var C=s==null?0:s.length;if(!C)return-1;var O=C;return v!==n&&(O=it(v),O=O<0?Xt(C+O,0):cn(O,C-1)),l===l?E1(s,l,O):Zs(s,X_,O,!0)}function H0(s,l){return s&&s.length?Af(s,it(l)):n}var B0=st(pg);function pg(s,l){return s&&s.length&&l&&l.length?Lc(s,l):s}function W0(s,l,v){return s&&s.length&&l&&l.length?Lc(s,l,He(v,2)):s}function z0(s,l,v){return s&&s.length&&l&&l.length?Lc(s,l,n,v):s}var Y0=xr(function(s,l){var v=s==null?0:s.length,C=mc(s,l);return xf(s,Mt(l,function(O){return Rr(O,v)?+O:O}).sort(Pf)),C});function j0(s,l){var v=[];if(!(s&&s.length))return v;var C=-1,O=[],R=s.length;for(l=He(l,3);++C<R;){var $=s[C];l($,C,s)&&(v.push($),O.push(C))}return xf(s,O),v}function jc(s){return s==null?s:F1.call(s)}function K0(s,l,v){var C=s==null?0:s.length;return C?(v&&typeof v!="number"&&gn(s,l,v)?(l=0,v=C):(l=l==null?0:it(l),v=v===n?C:it(v)),Xn(s,l,v)):[]}function V0(s,l){return pa(s,l)}function X0(s,l,v){return Nc(s,l,He(v,2))}function q0(s,l){var v=s==null?0:s.length;if(v){var C=pa(s,l);if(C<v&&lr(s[C],l))return C}return-1}function Z0(s,l){return pa(s,l,!0)}function Q0(s,l,v){return Nc(s,l,He(v,2),!0)}function J0(s,l){var v=s==null?0:s.length;if(v){var C=pa(s,l,!0)-1;if(lr(s[C],l))return C}return-1}function eC(s){return s&&s.length?Tf(s):[]}function tC(s,l){return s&&s.length?Tf(s,He(l,2)):[]}function nC(s){var l=s==null?0:s.length;return l?Xn(s,1,l):[]}function rC(s,l,v){return s&&s.length?(l=v||l===n?1:it(l),Xn(s,0,l<0?0:l)):[]}function iC(s,l,v){var C=s==null?0:s.length;return C?(l=v||l===n?1:it(l),l=C-l,Xn(s,l<0?0:l,C)):[]}function oC(s,l){return s&&s.length?ma(s,He(l,3),!1,!0):[]}function sC(s,l){return s&&s.length?ma(s,He(l,3)):[]}var aC=st(function(s){return Qr(sn(s,1,Bt,!0))}),lC=st(function(s){var l=qn(s);return Bt(l)&&(l=n),Qr(sn(s,1,Bt,!0),He(l,2))}),cC=st(function(s){var l=qn(s);return l=typeof l=="function"?l:n,Qr(sn(s,1,Bt,!0),n,l)});function uC(s){return s&&s.length?Qr(s):[]}function dC(s,l){return s&&s.length?Qr(s,He(l,2)):[]}function _C(s,l){return l=typeof l=="function"?l:n,s&&s.length?Qr(s,n,l):[]}function Kc(s){if(!(s&&s.length))return[];var l=0;return s=Kr(s,function(v){if(Bt(v))return l=Xt(v.length,l),!0}),uc(l,function(v){return Mt(s,ac(v))})}function mg(s,l){if(!(s&&s.length))return[];var v=Kc(s);return l==null?v:Mt(v,function(C){return Dn(l,n,C)})}var fC=st(function(s,l){return Bt(s)?Jo(s,l):[]}),gC=st(function(s){return Rc(Kr(s,Bt))}),hC=st(function(s){var l=qn(s);return Bt(l)&&(l=n),Rc(Kr(s,Bt),He(l,2))}),vC=st(function(s){var l=qn(s);return l=typeof l=="function"?l:n,Rc(Kr(s,Bt),n,l)}),pC=st(Kc);function mC(s,l){return Mf(s||[],l||[],Qo)}function EC(s,l){return Mf(s||[],l||[],ns)}var CC=st(function(s){var l=s.length,v=l>1?s[l-1]:n;return v=typeof v=="function"?(s.pop(),v):n,mg(s,v)});function Eg(s){var l=x(s);return l.__chain__=!0,l}function IC(s,l){return l(s),s}function Aa(s,l){return l(s)}var bC=xr(function(s){var l=s.length,v=l?s[0]:0,C=this.__wrapped__,O=function(R){return mc(R,s)};return l>1||this.__actions__.length||!(C instanceof ut)||!Rr(v)?this.thru(O):(C=C.slice(v,+v+(l?1:0)),C.__actions__.push({func:Aa,args:[O],thisArg:n}),new Kn(C,this.__chain__).thru(function(R){return l&&!R.length&&R.push(n),R}))});function OC(){return Eg(this)}function wC(){return new Kn(this.value(),this.__chain__)}function yC(){this.__values__===n&&(this.__values__=Dg(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function LC(){return this}function AC(s){for(var l,v=this;v instanceof _a;){var C=_g(v);C.__index__=0,C.__values__=n,l?O.__wrapped__=C:l=C;var O=C;v=v.__wrapped__}return O.__wrapped__=s,l}function SC(){var s=this.__wrapped__;if(s instanceof ut){var l=s;return this.__actions__.length&&(l=new ut(this)),l=l.reverse(),l.__actions__.push({func:Aa,args:[jc],thisArg:n}),new Kn(l,this.__chain__)}return this.thru(jc)}function NC(){return Gf(this.__wrapped__,this.__actions__)}var xC=Ea(function(s,l,v){Ct.call(s,v)?++s[v]:Sr(s,v,1)});function RC(s,l,v){var C=Je(s)?K_:IE;return v&&gn(s,l,v)&&(l=n),C(s,He(l,3))}function TC(s,l){var v=Je(s)?Kr:mf;return v(s,He(l,3))}var DC=jf(fg),kC=jf(gg);function GC(s,l){return sn(Sa(s,l),1)}function MC(s,l){return sn(Sa(s,l),xe)}function UC(s,l,v){return v=v===n?1:it(v),sn(Sa(s,l),v)}function Cg(s,l){var v=Je(s)?Yn:Zr;return v(s,He(l,3))}function Ig(s,l){var v=Je(s)?n1:pf;return v(s,He(l,3))}var $C=Ea(function(s,l,v){Ct.call(s,v)?s[v].push(l):Sr(s,v,[l])});function FC(s,l,v,C){s=bn(s)?s:ao(s),v=v&&!C?it(v):0;var O=s.length;return v<0&&(v=Xt(O+v,0)),Da(s)?v<=O&&s.indexOf(l,v)>-1:!!O&&Xi(s,l,v)>-1}var PC=st(function(s,l,v){var C=-1,O=typeof l=="function",R=bn(s)?ie(s.length):[];return Zr(s,function($){R[++C]=O?Dn(l,$,v):es($,l,v)}),R}),HC=Ea(function(s,l,v){Sr(s,v,l)});function Sa(s,l){var v=Je(s)?Mt:wf;return v(s,He(l,3))}function BC(s,l,v,C){return s==null?[]:(Je(l)||(l=l==null?[]:[l]),v=C?n:v,Je(v)||(v=v==null?[]:[v]),Sf(s,l,v))}var WC=Ea(function(s,l,v){s[v?0:1].push(l)},function(){return[[],[]]});function zC(s,l,v){var C=Je(s)?oc:Z_,O=arguments.length<3;return C(s,He(l,4),v,O,Zr)}function YC(s,l,v){var C=Je(s)?r1:Z_,O=arguments.length<3;return C(s,He(l,4),v,O,pf)}function jC(s,l){var v=Je(s)?Kr:mf;return v(s,Ra(He(l,3)))}function KC(s){var l=Je(s)?ff:FE;return l(s)}function VC(s,l,v){(v?gn(s,l,v):l===n)?l=1:l=it(l);var C=Je(s)?vE:PE;return C(s,l)}function XC(s){var l=Je(s)?pE:BE;return l(s)}function qC(s){if(s==null)return 0;if(bn(s))return Da(s)?Zi(s):s.length;var l=un(s);return l==Le||l==xn?s.size:wc(s).length}function ZC(s,l,v){var C=Je(s)?sc:WE;return v&&gn(s,l,v)&&(l=n),C(s,He(l,3))}var QC=st(function(s,l){if(s==null)return[];var v=l.length;return v>1&&gn(s,l[0],l[1])?l=[]:v>2&&gn(l[0],l[1],l[2])&&(l=[l[0]]),Sf(s,sn(l,1),[])}),Na=T1||function(){return on.Date.now()};function JC(s,l){if(typeof l!="function")throw new jn(a);return s=it(s),function(){if(--s<1)return l.apply(this,arguments)}}function bg(s,l,v){return l=v?n:l,l=s&&l==null?s.length:l,Nr(s,H,n,n,n,n,l)}function Og(s,l){var v;if(typeof l!="function")throw new jn(a);return s=it(s),function(){return--s>0&&(v=l.apply(this,arguments)),s<=1&&(l=n),v}}var Vc=st(function(s,l,v){var C=b;if(v.length){var O=Xr(v,oo(Vc));C|=F}return Nr(s,C,l,v,O)}),wg=st(function(s,l,v){var C=b|w;if(v.length){var O=Xr(v,oo(wg));C|=F}return Nr(l,C,s,v,O)});function yg(s,l,v){l=v?n:l;var C=Nr(s,k,n,n,n,n,n,l);return C.placeholder=yg.placeholder,C}function Lg(s,l,v){l=v?n:l;var C=Nr(s,G,n,n,n,n,n,l);return C.placeholder=Lg.placeholder,C}function Ag(s,l,v){var C,O,R,$,Y,q,_e=0,fe=!1,ve=!1,Se=!0;if(typeof s!="function")throw new jn(a);l=Zn(l)||0,Ft(v)&&(fe=!!v.leading,ve="maxWait"in v,R=ve?Xt(Zn(v.maxWait)||0,l):R,Se="trailing"in v?!!v.trailing:Se);function ke(Wt){var cr=C,kr=O;return C=O=n,_e=Wt,$=s.apply(kr,cr),$}function Be(Wt){return _e=Wt,Y=os(lt,l),fe?ke(Wt):$}function ot(Wt){var cr=Wt-q,kr=Wt-_e,jg=l-cr;return ve?cn(jg,R-kr):jg}function We(Wt){var cr=Wt-q,kr=Wt-_e;return q===n||cr>=l||cr<0||ve&&kr>=R}function lt(){var Wt=Na();if(We(Wt))return _t(Wt);Y=os(lt,ot(Wt))}function _t(Wt){return Y=n,Se&&C?ke(Wt):(C=O=n,$)}function Un(){Y!==n&&Uf(Y),_e=0,C=q=O=Y=n}function hn(){return Y===n?$:_t(Na())}function $n(){var Wt=Na(),cr=We(Wt);if(C=arguments,O=this,q=Wt,cr){if(Y===n)return Be(q);if(ve)return Uf(Y),Y=os(lt,l),ke(q)}return Y===n&&(Y=os(lt,l)),$}return $n.cancel=Un,$n.flush=hn,$n}var eI=st(function(s,l){return vf(s,1,l)}),tI=st(function(s,l,v){return vf(s,Zn(l)||0,v)});function nI(s){return Nr(s,J)}function xa(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new jn(a);var v=function(){var C=arguments,O=l?l.apply(this,C):C[0],R=v.cache;if(R.has(O))return R.get(O);var $=s.apply(this,C);return v.cache=R.set(O,$)||R,$};return v.cache=new(xa.Cache||Ar),v}xa.Cache=Ar;function Ra(s){if(typeof s!="function")throw new jn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function rI(s){return Og(2,s)}var iI=zE(function(s,l){l=l.length==1&&Je(l[0])?Mt(l[0],kn(He())):Mt(sn(l,1),kn(He()));var v=l.length;return st(function(C){for(var O=-1,R=cn(C.length,v);++O<R;)C[O]=l[O].call(this,C[O]);return Dn(s,this,C)})}),Xc=st(function(s,l){var v=Xr(l,oo(Xc));return Nr(s,F,n,l,v)}),Sg=st(function(s,l){var v=Xr(l,oo(Sg));return Nr(s,z,n,l,v)}),oI=xr(function(s,l){return Nr(s,j,n,n,n,l)});function sI(s,l){if(typeof s!="function")throw new jn(a);return l=l===n?l:it(l),st(s,l)}function aI(s,l){if(typeof s!="function")throw new jn(a);return l=l==null?0:Xt(it(l),0),st(function(v){var C=v[l],O=ei(v,0,l);return C&&Vr(O,C),Dn(s,this,O)})}function lI(s,l,v){var C=!0,O=!0;if(typeof s!="function")throw new jn(a);return Ft(v)&&(C="leading"in v?!!v.leading:C,O="trailing"in v?!!v.trailing:O),Ag(s,l,{leading:C,maxWait:l,trailing:O})}function cI(s){return bg(s,1)}function uI(s,l){return Xc(Dc(l),s)}function dI(){if(!arguments.length)return[];var s=arguments[0];return Je(s)?s:[s]}function _I(s){return Vn(s,m)}function fI(s,l){return l=typeof l=="function"?l:n,Vn(s,m,l)}function gI(s){return Vn(s,p|m)}function hI(s,l){return l=typeof l=="function"?l:n,Vn(s,p|m,l)}function vI(s,l){return l==null||hf(s,l,Qt(l))}function lr(s,l){return s===l||s!==s&&l!==l}var pI=Oa(Ic),mI=Oa(function(s,l){return s>=l}),Ai=If(function(){return arguments}())?If:function(s){return Pt(s)&&Ct.call(s,"callee")&&!af.call(s,"callee")},Je=ie.isArray,EI=H_?kn(H_):AE;function bn(s){return s!=null&&Ta(s.length)&&!Tr(s)}function Bt(s){return Pt(s)&&bn(s)}function CI(s){return s===!0||s===!1||Pt(s)&&fn(s)==hr}var ti=k1||su,II=B_?kn(B_):SE;function bI(s){return Pt(s)&&s.nodeType===1&&!ss(s)}function OI(s){if(s==null)return!0;if(bn(s)&&(Je(s)||typeof s=="string"||typeof s.splice=="function"||ti(s)||so(s)||Ai(s)))return!s.length;var l=un(s);if(l==Le||l==xn)return!s.size;if(is(s))return!wc(s).length;for(var v in s)if(Ct.call(s,v))return!1;return!0}function wI(s,l){return ts(s,l)}function yI(s,l,v){v=typeof v=="function"?v:n;var C=v?v(s,l):n;return C===n?ts(s,l,n,v):!!C}function qc(s){if(!Pt(s))return!1;var l=fn(s);return l==wr||l==ji||typeof s.message=="string"&&typeof s.name=="string"&&!ss(s)}function LI(s){return typeof s=="number"&&cf(s)}function Tr(s){if(!Ft(s))return!1;var l=fn(s);return l==yr||l==$e||l==rn||l==Wl}function Ng(s){return typeof s=="number"&&s==it(s)}function Ta(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Oe}function Ft(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function Pt(s){return s!=null&&typeof s=="object"}var xg=W_?kn(W_):xE;function AI(s,l){return s===l||Oc(s,l,Pc(l))}function SI(s,l,v){return v=typeof v=="function"?v:n,Oc(s,l,Pc(l),v)}function NI(s){return Rg(s)&&s!=+s}function xI(s){if(f0(s))throw new Ze(o);return bf(s)}function RI(s){return s===null}function TI(s){return s==null}function Rg(s){return typeof s=="number"||Pt(s)&&fn(s)==Me}function ss(s){if(!Pt(s)||fn(s)!=Tt)return!1;var l=oa(s);if(l===null)return!0;var v=Ct.call(l,"constructor")&&l.constructor;return typeof v=="function"&&v instanceof v&&ta.call(v)==S1}var Zc=z_?kn(z_):RE;function DI(s){return Ng(s)&&s>=-9007199254740991&&s<=Oe}var Tg=Y_?kn(Y_):TE;function Da(s){return typeof s=="string"||!Je(s)&&Pt(s)&&fn(s)==mi}function Mn(s){return typeof s=="symbol"||Pt(s)&&fn(s)==Ki}var so=j_?kn(j_):DE;function kI(s){return s===n}function GI(s){return Pt(s)&&un(s)==Rn}function MI(s){return Pt(s)&&fn(s)==js}var UI=Oa(yc),$I=Oa(function(s,l){return s<=l});function Dg(s){if(!s)return[];if(bn(s))return Da(s)?sr(s):In(s);if(Ko&&s[Ko])return v1(s[Ko]());var l=un(s),v=l==Le?_c:l==xn?Qs:ao;return v(s)}function Dr(s){if(!s)return s===0?s:0;if(s=Zn(s),s===xe||s===-1/0){var l=s<0?-1:1;return l*Ie}return s===s?s:0}function it(s){var l=Dr(s),v=l%1;return l===l?v?l-v:l:0}function kg(s){return s?Oi(it(s),0,qe):0}function Zn(s){if(typeof s=="number")return s;if(Mn(s))return je;if(Ft(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Ft(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=Q_(s);var v=Em.test(s);return v||Im.test(s)?Jm(s.slice(2),v?2:8):mm.test(s)?je:+s}function Gg(s){return pr(s,On(s))}function FI(s){return s?Oi(it(s),-9007199254740991,Oe):s===0?s:0}function Et(s){return s==null?"":Gn(s)}var PI=ro(function(s,l){if(is(l)||bn(l)){pr(l,Qt(l),s);return}for(var v in l)Ct.call(l,v)&&Qo(s,v,l[v])}),Mg=ro(function(s,l){pr(l,On(l),s)}),ka=ro(function(s,l,v,C){pr(l,On(l),s,C)}),HI=ro(function(s,l,v,C){pr(l,Qt(l),s,C)}),BI=xr(mc);function WI(s,l){var v=no(s);return l==null?v:gf(v,l)}var zI=st(function(s,l){s=yt(s);var v=-1,C=l.length,O=C>2?l[2]:n;for(O&&gn(l[0],l[1],O)&&(C=1);++v<C;)for(var R=l[v],$=On(R),Y=-1,q=$.length;++Y<q;){var _e=$[Y],fe=s[_e];(fe===n||lr(fe,Ji[_e])&&!Ct.call(s,_e))&&(s[_e]=R[_e])}return s}),YI=st(function(s){return s.push(n,Jf),Dn(Ug,n,s)});function jI(s,l){return V_(s,He(l,3),vr)}function KI(s,l){return V_(s,He(l,3),Cc)}function VI(s,l){return s==null?s:Ec(s,He(l,3),On)}function XI(s,l){return s==null?s:Ef(s,He(l,3),On)}function qI(s,l){return s&&vr(s,He(l,3))}function ZI(s,l){return s&&Cc(s,He(l,3))}function QI(s){return s==null?[]:ha(s,Qt(s))}function JI(s){return s==null?[]:ha(s,On(s))}function Qc(s,l,v){var C=s==null?n:wi(s,l);return C===n?v:C}function eb(s,l){return s!=null&&ng(s,l,OE)}function Jc(s,l){return s!=null&&ng(s,l,wE)}var tb=Vf(function(s,l,v){l!=null&&typeof l.toString!="function"&&(l=na.call(l)),s[l]=v},tu(wn)),nb=Vf(function(s,l,v){l!=null&&typeof l.toString!="function"&&(l=na.call(l)),Ct.call(s,l)?s[l].push(v):s[l]=[v]},He),rb=st(es);function Qt(s){return bn(s)?_f(s):wc(s)}function On(s){return bn(s)?_f(s,!0):kE(s)}function ib(s,l){var v={};return l=He(l,3),vr(s,function(C,O,R){Sr(v,l(C,O,R),C)}),v}function ob(s,l){var v={};return l=He(l,3),vr(s,function(C,O,R){Sr(v,O,l(C,O,R))}),v}var sb=ro(function(s,l,v){va(s,l,v)}),Ug=ro(function(s,l,v,C){va(s,l,v,C)}),ab=xr(function(s,l){var v={};if(s==null)return v;var C=!1;l=Mt(l,function(R){return R=Jr(R,s),C||(C=R.length>1),R}),pr(s,$c(s),v),C&&(v=Vn(v,p|h|m,t0));for(var O=l.length;O--;)xc(v,l[O]);return v});function lb(s,l){return $g(s,Ra(He(l)))}var cb=xr(function(s,l){return s==null?{}:ME(s,l)});function $g(s,l){if(s==null)return{};var v=Mt($c(s),function(C){return[C]});return l=He(l),Nf(s,v,function(C,O){return l(C,O[0])})}function ub(s,l,v){l=Jr(l,s);var C=-1,O=l.length;for(O||(O=1,s=n);++C<O;){var R=s==null?n:s[mr(l[C])];R===n&&(C=O,R=v),s=Tr(R)?R.call(s):R}return s}function db(s,l,v){return s==null?s:ns(s,l,v)}function _b(s,l,v,C){return C=typeof C=="function"?C:n,s==null?s:ns(s,l,v,C)}var Fg=Zf(Qt),Pg=Zf(On);function fb(s,l,v){var C=Je(s),O=C||ti(s)||so(s);if(l=He(l,4),v==null){var R=s&&s.constructor;O?v=C?new R:[]:Ft(s)?v=Tr(R)?no(oa(s)):{}:v={}}return(O?Yn:vr)(s,function($,Y,q){return l(v,$,Y,q)}),v}function gb(s,l){return s==null?!0:xc(s,l)}function hb(s,l,v){return s==null?s:kf(s,l,Dc(v))}function vb(s,l,v,C){return C=typeof C=="function"?C:n,s==null?s:kf(s,l,Dc(v),C)}function ao(s){return s==null?[]:dc(s,Qt(s))}function pb(s){return s==null?[]:dc(s,On(s))}function mb(s,l,v){return v===n&&(v=l,l=n),v!==n&&(v=Zn(v),v=v===v?v:0),l!==n&&(l=Zn(l),l=l===l?l:0),Oi(Zn(s),l,v)}function Eb(s,l,v){return l=Dr(l),v===n?(v=l,l=0):v=Dr(v),s=Zn(s),yE(s,l,v)}function Cb(s,l,v){if(v&&typeof v!="boolean"&&gn(s,l,v)&&(l=v=n),v===n&&(typeof l=="boolean"?(v=l,l=n):typeof s=="boolean"&&(v=s,s=n)),s===n&&l===n?(s=0,l=1):(s=Dr(s),l===n?(l=s,s=0):l=Dr(l)),s>l){var C=s;s=l,l=C}if(v||s%1||l%1){var O=uf();return cn(s+O*(l-s+Qm("1e-"+((O+"").length-1))),l)}return Ac(s,l)}var Ib=io(function(s,l,v){return l=l.toLowerCase(),s+(v?Hg(l):l)});function Hg(s){return eu(Et(s).toLowerCase())}function Bg(s){return s=Et(s),s&&s.replace(Om,d1).replace(Bm,"")}function bb(s,l,v){s=Et(s),l=Gn(l);var C=s.length;v=v===n?C:Oi(it(v),0,C);var O=v;return v-=l.length,v>=0&&s.slice(v,O)==l}function Ob(s){return s=Et(s),s&&rm.test(s)?s.replace(m_,_1):s}function wb(s){return s=Et(s),s&&cm.test(s)?s.replace(Xl,"\\$&"):s}var yb=io(function(s,l,v){return s+(v?"-":"")+l.toLowerCase()}),Lb=io(function(s,l,v){return s+(v?" ":"")+l.toLowerCase()}),Ab=Yf("toLowerCase");function Sb(s,l,v){s=Et(s),l=it(l);var C=l?Zi(s):0;if(!l||C>=l)return s;var O=(l-C)/2;return ba(ca(O),v)+s+ba(la(O),v)}function Nb(s,l,v){s=Et(s),l=it(l);var C=l?Zi(s):0;return l&&C<l?s+ba(l-C,v):s}function xb(s,l,v){s=Et(s),l=it(l);var C=l?Zi(s):0;return l&&C<l?ba(l-C,v)+s:s}function Rb(s,l,v){return v||l==null?l=0:l&&(l=+l),$1(Et(s).replace(ql,""),l||0)}function Tb(s,l,v){return(v?gn(s,l,v):l===n)?l=1:l=it(l),Sc(Et(s),l)}function Db(){var s=arguments,l=Et(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var kb=io(function(s,l,v){return s+(v?"_":"")+l.toLowerCase()});function Gb(s,l,v){return v&&typeof v!="number"&&gn(s,l,v)&&(l=v=n),v=v===n?qe:v>>>0,v?(s=Et(s),s&&(typeof l=="string"||l!=null&&!Zc(l))&&(l=Gn(l),!l&&qi(s))?ei(sr(s),0,v):s.split(l,v)):[]}var Mb=io(function(s,l,v){return s+(v?" ":"")+eu(l)});function Ub(s,l,v){return s=Et(s),v=v==null?0:Oi(it(v),0,s.length),l=Gn(l),s.slice(v,v+l.length)==l}function $b(s,l,v){var C=x.templateSettings;v&&gn(s,l,v)&&(l=n),s=Et(s),l=ka({},l,C,Qf);var O=ka({},l.imports,C.imports,Qf),R=Qt(O),$=dc(O,R),Y,q,_e=0,fe=l.interpolate||Ks,ve="__p += '",Se=fc((l.escape||Ks).source+"|"+fe.source+"|"+(fe===E_?pm:Ks).source+"|"+(l.evaluate||Ks).source+"|$","g"),ke="//# sourceURL="+(Ct.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Km+"]")+`
`;s.replace(Se,function(We,lt,_t,Un,hn,$n){return _t||(_t=Un),ve+=s.slice(_e,$n).replace(wm,f1),lt&&(Y=!0,ve+=`' +
__e(`+lt+`) +
'`),hn&&(q=!0,ve+=`';
`+hn+`;
__p += '`),_t&&(ve+=`' +
((__t = (`+_t+`)) == null ? '' : __t) +
'`),_e=$n+We.length,We}),ve+=`';
`;var Be=Ct.call(l,"variable")&&l.variable;if(!Be)ve=`with (obj) {
`+ve+`
}
`;else if(hm.test(Be))throw new Ze(c);ve=(q?ve.replace(Jp,""):ve).replace(em,"$1").replace(tm,"$1;"),ve="function("+(Be||"obj")+`) {
`+(Be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(Y?", __e = _.escape":"")+(q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ve+`return __p
}`;var ot=zg(function(){return mt(R,ke+"return "+ve).apply(n,$)});if(ot.source=ve,qc(ot))throw ot;return ot}function Fb(s){return Et(s).toLowerCase()}function Pb(s){return Et(s).toUpperCase()}function Hb(s,l,v){if(s=Et(s),s&&(v||l===n))return Q_(s);if(!s||!(l=Gn(l)))return s;var C=sr(s),O=sr(l),R=J_(C,O),$=ef(C,O)+1;return ei(C,R,$).join("")}function Bb(s,l,v){if(s=Et(s),s&&(v||l===n))return s.slice(0,nf(s)+1);if(!s||!(l=Gn(l)))return s;var C=sr(s),O=ef(C,sr(l))+1;return ei(C,0,O).join("")}function Wb(s,l,v){if(s=Et(s),s&&(v||l===n))return s.replace(ql,"");if(!s||!(l=Gn(l)))return s;var C=sr(s),O=J_(C,sr(l));return ei(C,O).join("")}function zb(s,l){var v=ae,C=Q;if(Ft(l)){var O="separator"in l?l.separator:O;v="length"in l?it(l.length):v,C="omission"in l?Gn(l.omission):C}s=Et(s);var R=s.length;if(qi(s)){var $=sr(s);R=$.length}if(v>=R)return s;var Y=v-Zi(C);if(Y<1)return C;var q=$?ei($,0,Y).join(""):s.slice(0,Y);if(O===n)return q+C;if($&&(Y+=q.length-Y),Zc(O)){if(s.slice(Y).search(O)){var _e,fe=q;for(O.global||(O=fc(O.source,Et(C_.exec(O))+"g")),O.lastIndex=0;_e=O.exec(fe);)var ve=_e.index;q=q.slice(0,ve===n?Y:ve)}}else if(s.indexOf(Gn(O),Y)!=Y){var Se=q.lastIndexOf(O);Se>-1&&(q=q.slice(0,Se))}return q+C}function Yb(s){return s=Et(s),s&&nm.test(s)?s.replace(p_,C1):s}var jb=io(function(s,l,v){return s+(v?" ":"")+l.toUpperCase()}),eu=Yf("toUpperCase");function Wg(s,l,v){return s=Et(s),l=v?n:l,l===n?h1(s)?O1(s):s1(s):s.match(l)||[]}var zg=st(function(s,l){try{return Dn(s,n,l)}catch(v){return qc(v)?v:new Ze(v)}}),Kb=xr(function(s,l){return Yn(l,function(v){v=mr(v),Sr(s,v,Vc(s[v],s))}),s});function Vb(s){var l=s==null?0:s.length,v=He();return s=l?Mt(s,function(C){if(typeof C[1]!="function")throw new jn(a);return[v(C[0]),C[1]]}):[],st(function(C){for(var O=-1;++O<l;){var R=s[O];if(Dn(R[0],this,C))return Dn(R[1],this,C)}})}function Xb(s){return CE(Vn(s,p))}function tu(s){return function(){return s}}function qb(s,l){return s==null||s!==s?l:s}var Zb=Kf(),Qb=Kf(!0);function wn(s){return s}function nu(s){return Of(typeof s=="function"?s:Vn(s,p))}function Jb(s){return yf(Vn(s,p))}function eO(s,l){return Lf(s,Vn(l,p))}var tO=st(function(s,l){return function(v){return es(v,s,l)}}),nO=st(function(s,l){return function(v){return es(s,v,l)}});function ru(s,l,v){var C=Qt(l),O=ha(l,C);v==null&&!(Ft(l)&&(O.length||!C.length))&&(v=l,l=s,s=this,O=ha(l,Qt(l)));var R=!(Ft(v)&&"chain"in v)||!!v.chain,$=Tr(s);return Yn(O,function(Y){var q=l[Y];s[Y]=q,$&&(s.prototype[Y]=function(){var _e=this.__chain__;if(R||_e){var fe=s(this.__wrapped__),ve=fe.__actions__=In(this.__actions__);return ve.push({func:q,args:arguments,thisArg:s}),fe.__chain__=_e,fe}return q.apply(s,Vr([this.value()],arguments))})}),s}function rO(){return on._===this&&(on._=N1),this}function iu(){}function iO(s){return s=it(s),st(function(l){return Af(l,s)})}var oO=Gc(Mt),sO=Gc(K_),aO=Gc(sc);function Yg(s){return Bc(s)?ac(mr(s)):UE(s)}function lO(s){return function(l){return s==null?n:wi(s,l)}}var cO=Xf(),uO=Xf(!0);function ou(){return[]}function su(){return!1}function dO(){return{}}function _O(){return""}function fO(){return!0}function gO(s,l){if(s=it(s),s<1||s>Oe)return[];var v=qe,C=cn(s,qe);l=He(l),s-=qe;for(var O=uc(C,l);++v<s;)l(v);return O}function hO(s){return Je(s)?Mt(s,mr):Mn(s)?[s]:In(dg(Et(s)))}function vO(s){var l=++A1;return Et(s)+l}var pO=Ia(function(s,l){return s+l},0),mO=Mc("ceil"),EO=Ia(function(s,l){return s/l},1),CO=Mc("floor");function IO(s){return s&&s.length?ga(s,wn,Ic):n}function bO(s,l){return s&&s.length?ga(s,He(l,2),Ic):n}function OO(s){return q_(s,wn)}function wO(s,l){return q_(s,He(l,2))}function yO(s){return s&&s.length?ga(s,wn,yc):n}function LO(s,l){return s&&s.length?ga(s,He(l,2),yc):n}var AO=Ia(function(s,l){return s*l},1),SO=Mc("round"),NO=Ia(function(s,l){return s-l},0);function xO(s){return s&&s.length?cc(s,wn):0}function RO(s,l){return s&&s.length?cc(s,He(l,2)):0}return x.after=JC,x.ary=bg,x.assign=PI,x.assignIn=Mg,x.assignInWith=ka,x.assignWith=HI,x.at=BI,x.before=Og,x.bind=Vc,x.bindAll=Kb,x.bindKey=wg,x.castArray=dI,x.chain=Eg,x.chunk=C0,x.compact=I0,x.concat=b0,x.cond=Vb,x.conforms=Xb,x.constant=tu,x.countBy=xC,x.create=WI,x.curry=yg,x.curryRight=Lg,x.debounce=Ag,x.defaults=zI,x.defaultsDeep=YI,x.defer=eI,x.delay=tI,x.difference=O0,x.differenceBy=w0,x.differenceWith=y0,x.drop=L0,x.dropRight=A0,x.dropRightWhile=S0,x.dropWhile=N0,x.fill=x0,x.filter=TC,x.flatMap=GC,x.flatMapDeep=MC,x.flatMapDepth=UC,x.flatten=hg,x.flattenDeep=R0,x.flattenDepth=T0,x.flip=nI,x.flow=Zb,x.flowRight=Qb,x.fromPairs=D0,x.functions=QI,x.functionsIn=JI,x.groupBy=$C,x.initial=G0,x.intersection=M0,x.intersectionBy=U0,x.intersectionWith=$0,x.invert=tb,x.invertBy=nb,x.invokeMap=PC,x.iteratee=nu,x.keyBy=HC,x.keys=Qt,x.keysIn=On,x.map=Sa,x.mapKeys=ib,x.mapValues=ob,x.matches=Jb,x.matchesProperty=eO,x.memoize=xa,x.merge=sb,x.mergeWith=Ug,x.method=tO,x.methodOf=nO,x.mixin=ru,x.negate=Ra,x.nthArg=iO,x.omit=ab,x.omitBy=lb,x.once=rI,x.orderBy=BC,x.over=oO,x.overArgs=iI,x.overEvery=sO,x.overSome=aO,x.partial=Xc,x.partialRight=Sg,x.partition=WC,x.pick=cb,x.pickBy=$g,x.property=Yg,x.propertyOf=lO,x.pull=B0,x.pullAll=pg,x.pullAllBy=W0,x.pullAllWith=z0,x.pullAt=Y0,x.range=cO,x.rangeRight=uO,x.rearg=oI,x.reject=jC,x.remove=j0,x.rest=sI,x.reverse=jc,x.sampleSize=VC,x.set=db,x.setWith=_b,x.shuffle=XC,x.slice=K0,x.sortBy=QC,x.sortedUniq=eC,x.sortedUniqBy=tC,x.split=Gb,x.spread=aI,x.tail=nC,x.take=rC,x.takeRight=iC,x.takeRightWhile=oC,x.takeWhile=sC,x.tap=IC,x.throttle=lI,x.thru=Aa,x.toArray=Dg,x.toPairs=Fg,x.toPairsIn=Pg,x.toPath=hO,x.toPlainObject=Gg,x.transform=fb,x.unary=cI,x.union=aC,x.unionBy=lC,x.unionWith=cC,x.uniq=uC,x.uniqBy=dC,x.uniqWith=_C,x.unset=gb,x.unzip=Kc,x.unzipWith=mg,x.update=hb,x.updateWith=vb,x.values=ao,x.valuesIn=pb,x.without=fC,x.words=Wg,x.wrap=uI,x.xor=gC,x.xorBy=hC,x.xorWith=vC,x.zip=pC,x.zipObject=mC,x.zipObjectDeep=EC,x.zipWith=CC,x.entries=Fg,x.entriesIn=Pg,x.extend=Mg,x.extendWith=ka,ru(x,x),x.add=pO,x.attempt=zg,x.camelCase=Ib,x.capitalize=Hg,x.ceil=mO,x.clamp=mb,x.clone=_I,x.cloneDeep=gI,x.cloneDeepWith=hI,x.cloneWith=fI,x.conformsTo=vI,x.deburr=Bg,x.defaultTo=qb,x.divide=EO,x.endsWith=bb,x.eq=lr,x.escape=Ob,x.escapeRegExp=wb,x.every=RC,x.find=DC,x.findIndex=fg,x.findKey=jI,x.findLast=kC,x.findLastIndex=gg,x.findLastKey=KI,x.floor=CO,x.forEach=Cg,x.forEachRight=Ig,x.forIn=VI,x.forInRight=XI,x.forOwn=qI,x.forOwnRight=ZI,x.get=Qc,x.gt=pI,x.gte=mI,x.has=eb,x.hasIn=Jc,x.head=vg,x.identity=wn,x.includes=FC,x.indexOf=k0,x.inRange=Eb,x.invoke=rb,x.isArguments=Ai,x.isArray=Je,x.isArrayBuffer=EI,x.isArrayLike=bn,x.isArrayLikeObject=Bt,x.isBoolean=CI,x.isBuffer=ti,x.isDate=II,x.isElement=bI,x.isEmpty=OI,x.isEqual=wI,x.isEqualWith=yI,x.isError=qc,x.isFinite=LI,x.isFunction=Tr,x.isInteger=Ng,x.isLength=Ta,x.isMap=xg,x.isMatch=AI,x.isMatchWith=SI,x.isNaN=NI,x.isNative=xI,x.isNil=TI,x.isNull=RI,x.isNumber=Rg,x.isObject=Ft,x.isObjectLike=Pt,x.isPlainObject=ss,x.isRegExp=Zc,x.isSafeInteger=DI,x.isSet=Tg,x.isString=Da,x.isSymbol=Mn,x.isTypedArray=so,x.isUndefined=kI,x.isWeakMap=GI,x.isWeakSet=MI,x.join=F0,x.kebabCase=yb,x.last=qn,x.lastIndexOf=P0,x.lowerCase=Lb,x.lowerFirst=Ab,x.lt=UI,x.lte=$I,x.max=IO,x.maxBy=bO,x.mean=OO,x.meanBy=wO,x.min=yO,x.minBy=LO,x.stubArray=ou,x.stubFalse=su,x.stubObject=dO,x.stubString=_O,x.stubTrue=fO,x.multiply=AO,x.nth=H0,x.noConflict=rO,x.noop=iu,x.now=Na,x.pad=Sb,x.padEnd=Nb,x.padStart=xb,x.parseInt=Rb,x.random=Cb,x.reduce=zC,x.reduceRight=YC,x.repeat=Tb,x.replace=Db,x.result=ub,x.round=SO,x.runInContext=X,x.sample=KC,x.size=qC,x.snakeCase=kb,x.some=ZC,x.sortedIndex=V0,x.sortedIndexBy=X0,x.sortedIndexOf=q0,x.sortedLastIndex=Z0,x.sortedLastIndexBy=Q0,x.sortedLastIndexOf=J0,x.startCase=Mb,x.startsWith=Ub,x.subtract=NO,x.sum=xO,x.sumBy=RO,x.template=$b,x.times=gO,x.toFinite=Dr,x.toInteger=it,x.toLength=kg,x.toLower=Fb,x.toNumber=Zn,x.toSafeInteger=FI,x.toString=Et,x.toUpper=Pb,x.trim=Hb,x.trimEnd=Bb,x.trimStart=Wb,x.truncate=zb,x.unescape=Yb,x.uniqueId=vO,x.upperCase=jb,x.upperFirst=eu,x.each=Cg,x.eachRight=Ig,x.first=vg,ru(x,function(){var s={};return vr(x,function(l,v){Ct.call(x.prototype,v)||(s[v]=l)}),s}(),{chain:!1}),x.VERSION=r,Yn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){x[s].placeholder=x}),Yn(["drop","take"],function(s,l){ut.prototype[s]=function(v){v=v===n?1:Xt(it(v),0);var C=this.__filtered__&&!l?new ut(this):this.clone();return C.__filtered__?C.__takeCount__=cn(v,C.__takeCount__):C.__views__.push({size:cn(v,qe),type:s+(C.__dir__<0?"Right":"")}),C},ut.prototype[s+"Right"]=function(v){return this.reverse()[s](v).reverse()}}),Yn(["filter","map","takeWhile"],function(s,l){var v=l+1,C=v==oe||v==Ne;ut.prototype[s]=function(O){var R=this.clone();return R.__iteratees__.push({iteratee:He(O,3),type:v}),R.__filtered__=R.__filtered__||C,R}}),Yn(["head","last"],function(s,l){var v="take"+(l?"Right":"");ut.prototype[s]=function(){return this[v](1).value()[0]}}),Yn(["initial","tail"],function(s,l){var v="drop"+(l?"":"Right");ut.prototype[s]=function(){return this.__filtered__?new ut(this):this[v](1)}}),ut.prototype.compact=function(){return this.filter(wn)},ut.prototype.find=function(s){return this.filter(s).head()},ut.prototype.findLast=function(s){return this.reverse().find(s)},ut.prototype.invokeMap=st(function(s,l){return typeof s=="function"?new ut(this):this.map(function(v){return es(v,s,l)})}),ut.prototype.reject=function(s){return this.filter(Ra(He(s)))},ut.prototype.slice=function(s,l){s=it(s);var v=this;return v.__filtered__&&(s>0||l<0)?new ut(v):(s<0?v=v.takeRight(-s):s&&(v=v.drop(s)),l!==n&&(l=it(l),v=l<0?v.dropRight(-l):v.take(l-s)),v)},ut.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},ut.prototype.toArray=function(){return this.take(qe)},vr(ut.prototype,function(s,l){var v=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),O=x[C?"take"+(l=="last"?"Right":""):l],R=C||/^find/.test(l);O&&(x.prototype[l]=function(){var $=this.__wrapped__,Y=C?[1]:arguments,q=$ instanceof ut,_e=Y[0],fe=q||Je($),ve=function(lt){var _t=O.apply(x,Vr([lt],Y));return C&&Se?_t[0]:_t};fe&&v&&typeof _e=="function"&&_e.length!=1&&(q=fe=!1);var Se=this.__chain__,ke=!!this.__actions__.length,Be=R&&!Se,ot=q&&!ke;if(!R&&fe){$=ot?$:new ut(this);var We=s.apply($,Y);return We.__actions__.push({func:Aa,args:[ve],thisArg:n}),new Kn(We,Se)}return Be&&ot?s.apply(this,Y):(We=this.thru(ve),Be?C?We.value()[0]:We.value():We)})}),Yn(["pop","push","shift","sort","splice","unshift"],function(s){var l=Js[s],v=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);x.prototype[s]=function(){var O=arguments;if(C&&!this.__chain__){var R=this.value();return l.apply(Je(R)?R:[],O)}return this[v](function($){return l.apply(Je($)?$:[],O)})}}),vr(ut.prototype,function(s,l){var v=x[l];if(v){var C=v.name+"";Ct.call(to,C)||(to[C]=[]),to[C].push({name:l,func:v})}}),to[Ca(n,w).name]=[{name:"wrapper",func:n}],ut.prototype.clone=Y1,ut.prototype.reverse=j1,ut.prototype.value=K1,x.prototype.at=bC,x.prototype.chain=OC,x.prototype.commit=wC,x.prototype.next=yC,x.prototype.plant=AC,x.prototype.reverse=SC,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=NC,x.prototype.first=x.prototype.head,Ko&&(x.prototype[Ko]=LC),x},Qi=w1();Ei?((Ei.exports=Qi)._=Qi,nc._=Qi):on._=Qi}).call(sR)}(_s,_s.exports)),_s.exports}var St=aR();function Mr(t){return Array.isArray?Array.isArray(t):Dv(t)==="[object Array]"}function lR(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function cR(t){return t==null?"":lR(t)}function Ir(t){return typeof t=="string"}function Rv(t){return typeof t=="number"}function uR(t){return t===!0||t===!1||dR(t)&&Dv(t)=="[object Boolean]"}function Tv(t){return typeof t=="object"}function dR(t){return Tv(t)&&t!==null}function Pn(t){return t!=null}function _u(t){return!t.trim().length}function Dv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const _R="Incorrect 'index' type",fR=t=>`Invalid value for key ${t}`,gR=t=>`Pattern length exceeds max of ${t}.`,hR=t=>`Missing ${t} property in key`,vR=t=>`Property 'weight' in key '${t}' must be a positive integer`,ih=Object.prototype.hasOwnProperty;class pR{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=kv(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function kv(t){let e=null,n=null,r=null,i=1,o=null;if(Ir(t)||Mr(t))r=t,e=oh(t),n=ku(t);else{if(!ih.call(t,"name"))throw new Error(hR("name"));const a=t.name;if(r=a,ih.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(vR(a));e=oh(a),n=ku(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function oh(t){return Mr(t)?t:t.split(".")}function ku(t){return Mr(t)?t.join("."):t}function mR(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Pn(o))if(!a[c])n.push(o);else{let u=a[c];const f=o[u];if(!Pn(f))return;if(c===a.length-1&&(Ir(f)||Rv(f)||uR(f)))n.push(cR(f));else if(Mr(f)){r=!0;for(let g=0,p=f.length;g<p;g+=1)i(f[g],a,c+1)}else a.length&&i(f,a,c+1)}};return i(t,Ir(e)?e.split("."):e,0),r?n:n[0]}const ER={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},CR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},IR={location:0,threshold:.6,distance:100},bR={useExtendedSearch:!1,getFn:mR,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Xe={...CR,...ER,...IR,...bR};const OR=/[^ ]+/g;function wR(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(OR).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class $d{constructor({getFn:e=Xe.getFn,fieldNormWeight:n=Xe.fieldNormWeight}={}){this.norm=wR(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Ir(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Ir(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Pn(e)||_u(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Pn(a)){if(Mr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:g}=u.pop();if(Pn(g))if(Ir(g)&&!_u(g)){let p={v:g,i:f,n:this.norm.get(g)};c.push(p)}else Mr(g)&&g.forEach((p,h)=>{u.push({nestedArrIndex:h,value:p})})}r.$[o]=c}else if(Ir(a)&&!_u(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Gv(t,e,{getFn:n=Xe.getFn,fieldNormWeight:r=Xe.fieldNormWeight}={}){const i=new $d({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(kv)),i.setSources(e),i.create(),i}function yR(t,{getFn:e=Xe.getFn,fieldNormWeight:n=Xe.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new $d({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ua(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Xe.distance,ignoreLocation:o=Xe.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function LR(t=[],e=Xe.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Ni=32;function AR(t,e,n,{location:r=Xe.location,distance:i=Xe.distance,threshold:o=Xe.threshold,findAllMatches:a=Xe.findAllMatches,minMatchCharLength:c=Xe.minMatchCharLength,includeMatches:u=Xe.includeMatches,ignoreLocation:f=Xe.ignoreLocation}={}){if(e.length>Ni)throw new Error(gR(Ni));const g=e.length,p=t.length,h=Math.max(0,Math.min(r,p));let m=o,E=h;const I=c>1||u,b=I?Array(p):[];let w;for(;(w=t.indexOf(e,E))>-1;){let H=Ua(e,{currentLocation:w,expectedLocation:h,distance:i,ignoreLocation:f});if(m=Math.min(H,m),E=w+g,I){let j=0;for(;j<g;)b[w+j]=1,j+=1}}E=-1;let A=[],k=1,G=g+p;const F=1<<g-1;for(let H=0;H<g;H+=1){let j=0,J=G;for(;j<J;)Ua(e,{errors:H,currentLocation:h+J,expectedLocation:h,distance:i,ignoreLocation:f})<=m?j=J:G=J,J=Math.floor((G-j)/2+j);G=J;let ae=Math.max(1,h-J+1),Q=a?p:Math.min(h+J,p)+g,re=Array(Q+2);re[Q+1]=(1<<H)-1;for(let oe=Q;oe>=ae;oe-=1){let pe=oe-1,Ne=n[t.charAt(pe)];if(I&&(b[pe]=+!!Ne),re[oe]=(re[oe+1]<<1|1)&Ne,H&&(re[oe]|=(A[oe+1]|A[oe])<<1|1|A[oe+1]),re[oe]&F&&(k=Ua(e,{errors:H,currentLocation:pe,expectedLocation:h,distance:i,ignoreLocation:f}),k<=m)){if(m=k,E=pe,E<=h)break;ae=Math.max(1,2*h-E)}}if(Ua(e,{errors:H+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:f})>m)break;A=re}const z={isMatch:E>=0,score:Math.max(.001,k)};if(I){const H=LR(b,c);H.length?u&&(z.indices=H):z.isMatch=!1}return z}function SR(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Mv{constructor(e,{location:n=Xe.location,threshold:r=Xe.threshold,distance:i=Xe.distance,includeMatches:o=Xe.includeMatches,findAllMatches:a=Xe.findAllMatches,minMatchCharLength:c=Xe.minMatchCharLength,isCaseSensitive:u=Xe.isCaseSensitive,ignoreLocation:f=Xe.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const g=(h,m)=>{this.chunks.push({pattern:h,alphabet:SR(h),startIndex:m})},p=this.pattern.length;if(p>Ni){let h=0;const m=p%Ni,E=p-m;for(;h<E;)g(this.pattern.substr(h,Ni),h),h+=Ni;if(m){const I=p-Ni;g(this.pattern.substr(I),I)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options;let g=[],p=0,h=!1;this.chunks.forEach(({pattern:E,alphabet:I,startIndex:b})=>{const{isMatch:w,score:A,indices:k}=AR(e,E,I,{location:i+b,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});w&&(h=!0),p+=A,w&&k&&(g=[...g,...k])});let m={isMatch:h,score:h?p/this.chunks.length:1};return h&&r&&(m.indices=g),m}}class hi{constructor(e){this.pattern=e}static isMultiMatch(e){return sh(e,this.multiRegex)}static isSingleMatch(e){return sh(e,this.singleRegex)}search(){}}function sh(t,e){const n=t.match(e);return n?n[1]:null}class NR extends hi{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class xR extends hi{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class RR extends hi{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class TR extends hi{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class DR extends hi{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class kR extends hi{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Uv extends hi{constructor(e,{location:n=Xe.location,threshold:r=Xe.threshold,distance:i=Xe.distance,includeMatches:o=Xe.includeMatches,findAllMatches:a=Xe.findAllMatches,minMatchCharLength:c=Xe.minMatchCharLength,isCaseSensitive:u=Xe.isCaseSensitive,ignoreLocation:f=Xe.ignoreLocation}={}){super(e),this._bitapSearch=new Mv(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class $v extends hi{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Gu=[NR,$v,RR,TR,kR,DR,xR,Uv],ah=Gu.length,GR=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,MR="|";function UR(t,e={}){return t.split(MR).map(n=>{let r=n.trim().split(GR).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,f=-1;for(;!u&&++f<ah;){const g=Gu[f];let p=g.isMultiMatch(c);p&&(i.push(new g(p,e)),u=!0)}if(!u)for(f=-1;++f<ah;){const g=Gu[f];let p=g.isSingleMatch(c);if(p){i.push(new g(p,e));break}}}return i})}const $R=new Set([Uv.type,$v.type]);class FR{constructor(e,{isCaseSensitive:n=Xe.isCaseSensitive,includeMatches:r=Xe.includeMatches,minMatchCharLength:i=Xe.minMatchCharLength,ignoreLocation:o=Xe.ignoreLocation,findAllMatches:a=Xe.findAllMatches,location:c=Xe.location,threshold:u=Xe.threshold,distance:f=Xe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=UR(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,f=n.length;u<f;u+=1){const g=n[u];a.length=0,o=0;for(let p=0,h=g.length;p<h;p+=1){const m=g[p],{isMatch:E,indices:I,score:b}=m.search(e);if(E){if(o+=1,c+=b,r){const w=m.constructor.type;$R.has(w)?a=[...a,...I]:a.push(I)}}else{c=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:c/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const Mu=[];function PR(...t){Mu.push(...t)}function Uu(t,e){for(let n=0,r=Mu.length;n<r;n+=1){let i=Mu[n];if(i.condition(t,e))return new i(t,e)}return new Mv(t,e)}const qa={AND:"$and",OR:"$or"},$u={PATH:"$path",PATTERN:"$val"},Fu=t=>!!(t[qa.AND]||t[qa.OR]),HR=t=>!!t[$u.PATH],BR=t=>!Mr(t)&&Tv(t)&&!Fu(t),lh=t=>({[qa.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Fv(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=HR(i);if(!a&&o.length>1&&!Fu(i))return r(lh(i));if(BR(i)){const u=a?i[$u.PATH]:o[0],f=a?i[$u.PATTERN]:i[u];if(!Ir(f))throw new Error(fR(u));const g={keyId:ku(u),pattern:f};return n&&(g.searcher=Uu(f,e)),g}let c={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];Mr(f)&&f.forEach(g=>{c.children.push(r(g))})}),c};return Fu(t)||(t=lh(t)),r(t)}function WR(t,{ignoreFieldNorm:e=Xe.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function zR(t,e){const n=t.matches;e.matches=[],Pn(n)&&n.forEach(r=>{if(!Pn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function YR(t,e){e.score=t.score}function jR(t,e,{includeMatches:n=Xe.includeMatches,includeScore:r=Xe.includeScore}={}){const i=[];return n&&i.push(zR),r&&i.push(YR),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class To{constructor(e,n={},r){this.options={...Xe,...n},this.options.useExtendedSearch,this._keyStore=new pR(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof $d))throw new Error(_R);this._myIndex=n||Gv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Pn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=Ir(e)?Ir(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return WR(u,{ignoreFieldNorm:c}),o&&u.sort(a),Rv(n)&&n>-1&&(u=u.slice(0,n)),jR(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Uu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Pn(o))return;const{isMatch:u,score:f,indices:g}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:c,indices:g}]})}),i}_searchLogical(e){const n=Fv(e,this.options),r=(c,u,f)=>{if(!c.children){const{keyId:p,searcher:h}=c,m=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:h});return m&&m.length?[{idx:f,item:u,matches:m}]:[]}const g=[];for(let p=0,h=c.children.length;p<h;p+=1){const m=c.children[p],E=r(m,u,f);if(E.length)g.push(...E);else if(c.operator===qa.AND)return[]}return g},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Pn(c)){let f=r(n,c,u);f.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),f.forEach(({matches:g})=>{o[u].matches.push(...g)}))}}),a}_searchObjectList(e){const n=Uu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Pn(a))return;let u=[];r.forEach((f,g)=>{u.push(...this._findMatches({key:f,value:a[g],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Pn(n))return[];let i=[];if(Mr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Pn(o))return;const{isMatch:u,score:f,indices:g}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:c,indices:g})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:f}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}To.version="7.0.0";To.createIndex=Gv;To.parseIndex=yR;To.config=Xe;To.parseQuery=Fv;PR(FR);function Mi(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function KR(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function VR(t){return new To(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function XR(t,e,n){const r=KR(e,n);return t.length===0?r:VR(r).search(t).map(i=>i.item)}function qR(t,e){return Mi(t,e).shape}function _n(t,e){const n=qR(t,e);return n?Ru(n):void 0}function Ds(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return Ud(e)}function ZR(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function ks(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return Ud(i)})}function QR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return Ud(o)})})}function Pr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function Pv(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Sv(e)}function JR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Sv(r)})}function eT(t,e){const n=t.shape;return n===void 0?void 0:{..._n(e,Ht),...n}}function Hv(t,e,n){return{toolId:t,cells:e,value:n}}function tT(t,e){const n=ks(e,"cells"),r=Pr(e);return Hv(t,n,r)}function Bv(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>Ke(o,e)&&a>=r)}function nT(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Rs(r[i-1],e)))return t;const a=Bv(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function Wv(t,e){return{toolId:t,cells:e,lines:[]}}function rT(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Ka(n),{...t,cells:n};const r=n.some(o=>Ke(o,e)),i=n.some(o=>Rs(o,e));return n.length>0&&!r&&i?(n.push(e),Ka(n),{...t,cells:n}):t}function iT(t,e,n){const r=t.cells.some(f=>Ke(f,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return Pu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return Pu(t,e);const c=Bv(o,e,!1);return(o.length===0?!0:Rs(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function Pu(t,e){return t.cells.some(r=>Ke(r,e))?{...t,lines:[...t.lines,[e]]}:t}function oT(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function sT(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function aT(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function lT(t,e){const n=ks(e,"cells"),r=QR(e),i=Wv(t,n);return i.lines=r,i}function zv(t,e,n=""){return{toolId:t,cells:e,value:n}}function cT(t,e,n=!1){const r=xv(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function uT(t,e){return{...t,value:e}}function dT(t,e){const n=ks(e,"cells"),r=Pr(e);return zv(t,n,r)}function Hu(t,e,n){return{toolId:t,cells:e,value:n}}function _T(t,e){const n=ks(e,"cells"),r=Pr(e);return Hu(t,n,r)}function Bu(t,e,n){return{toolId:t,cells:e,value:n}}function fT(t,e){const n=ks(e,"cells"),r=Pr(e);return Bu(t,n,r)}function Wu(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function gT(t,e){const n=Ds(e),r=Pv(e),i=Pr(e);return Wu(t,n,r,i)}function zu(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function hT(t,e){const n=Ds(e),r=Pr(e);return zu(t,n,r)}function Yu(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function vT(t,e){const n=Ds(e),r=Pv(e);return Yu(t,n,r)}function ju(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function pT(t,e){const n=Ds(e),r=JR(e),i=ju(t,n,Fe.N);return i.directions=r,i}function Yv(t,e,n=""){return{toolId:t,cell:e,value:n}}function mT(t,e){const n=Ds(e),r=Pr(e);return Yv(t,n,r)}function ET(t,e=""){return{toolId:t,value:e}}function CT(t,e){const n=Pr(e);return ET(t,n)}function IT(t,e,n=""){return{toolId:t,coords:e,value:n}}function bT(t,e){const n=ZR(e,"coords"),r=Pr(e);return IT(t,n,r)}function Gs(t,e){return{...t,value:e}}class Do extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){this.get(e)||this.addToDict(e);const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(NT(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new Do;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=gv(r);if(o===void 0||!Object.keys(Ht).includes(o))continue;const a=i;for(const c of a){let u=null;if(hv(o,ul)?u=hT(o,c):dl(o)?u=vT(o,c):_l(o)?u=pT(o,c):fl(o)?u=fT(o,c):Ld(o)?u=_T(o,c):gl(o)?u=tT(o,c):fv(o)?u=bT(o,c):hl(o)?u=lT(o,c):vl(o)?u=dT(o,c):xi(o)?u=gT(o,c):Ew(o)?u=CT(o,c):_v(o)&&(u=mT(o,c)),u!==null){n.addToDict(o);const f=St.uniqueId(),g=eT(c,o);u.shape=g,n.addConstraint(o,f,u)}}}return n}}function go(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ke(o.cell,n))return[a,o]}return null}function ch(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>Ke(c,u))))return i}return null}function uh(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(Ke(n,a))return i}return null}function dh(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n)))return[i[0],o]}return null}function OT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Ke(c,n)))return i;return null}function _h(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n)))return[i[0],o]}return null}function wT(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((f,g)=>Ke(f,n)&&g>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function yT(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(Ke(n,a.cell)&&r===a.direction)return c}return null}function LT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ke(n,o.cell))return a}return null}function AT(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n))||o.cells2.some(c=>Ke(c,n)))return[i[0],o]}return null}function ST(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function NT(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ga(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ga(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Ga(i)));e.lines=n}if("cell"in t){const n=Ga(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=_n(t.toolId,Ht),r=yw(t.shape,n);r&&(e.shape=r)}return e}function fh(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function jv(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function Ku(t){const e=new Option().style;return e.color=t,e.color!==""}function fu(t){return jv(t)||Ku(t)?t:Ku(`#${t}`)?`#${t}`:void 0}function Za(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function Kv(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Qa(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function xT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const gh={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function RT(t){return t in gh?gh[t]:null}function Vv(t,e,n){if(n===null)return null;const r=RT(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function gu(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class TT{constructor(e,n){Ce(this,"r");Ce(this,"c");Ce(this,"outside",!1);Ce(this,"value",null);Ce(this,"given",!1);Ce(this,"region",null);Ce(this,"centerMarks",[]);Ce(this,"cornerMarks",[]);Ce(this,"highlights",[]);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=gu(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=gu(this.cornerMarks,e))}enterHighlight(e){this.highlights=gu(this.highlights,e)}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==Vv(this.r,this.c,e)&&(n.region=this.region),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class ko{constructor(e,n){Ce(this,"nCols");Ce(this,"nRows");Ce(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new TT(i,a);if(r){const u=Vv(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return Kv(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=Ts(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const f=this.grid[c][u];i.push(f),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new ko(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function DT(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=St.range(1,o+1);t.valid_digits&&!xT(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function kT(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=ko.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=St.range(1,c+1);i!==void 0&&(u=i);const f=t.solution,g=t.local_constraints,p=Do.fromJson(g),h=t.bool_constraints,m=Gi.fromJson(h);return{puzzleMeta:r,solution:f,grid:a,valid_digits:u,localConstraints:p,globalConstraints:m}}function M7(){const t=new ko(9,9),e=new Do,n=new Gi;return{grid:t,solution:void 0,valid_digits:St.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var fs=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(fs||{});const GT=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),MT=()=>({type:"CLEAR"}),UT=t=>({type:"DRAG",payload:t}),Vu=t=>({type:"SET",payload:t}),$T=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),Fd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),Cr=(t,e,n)=>{const r=[...t];return Ka(r),{cells:r,lastCell:e,mode:n}};function FT(t,e,n){if(e===null)return Fd();if(n==="RESETTING")return Cr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ke(e,i));if(n==="SELECTING")return r!==-1?t:Cr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),Cr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return Cr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),Cr(i,null,"DESELECTING")}return t}function PT(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ke(e,r));if(t.mode==="SELECTING")return n!==-1?t:Cr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),Cr(r,null,t.mode)}return t}function HT(t,e){return{...t,cells:e}}function BT(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ke(e,i))!==-1?Cr([...t.cells],e,"SELECTING"):Cr([...t.cells,e],e,"SELECTING"):Cr([e],e,t.mode)}function Xv(t,e){switch(e==null?void 0:e.type){case"CLEAR":return Fd();case"SET":return HT(t,e.payload);case"CLICK":return FT(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return PT(t,e.payload);case"ARROW_KEY":return BT(t,e.payload.cell,e.payload.selectionMode);default:return t}}function fo(t,e){return Ke(t.p1,e.p1)&&Ke(t.p2,e.p2)||Ke(t.p1,e.p2)&&Ke(t.p2,e.p1)}function WT(t,e){return Ke(t.p1,e.p2)&&Ke(t.p2,e.p1)}function qv(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ke(t,e)}class wl{constructor(){Ce(this,"edgeMarkers",[]);Ce(this,"cellMarkers",[]);Ce(this,"lineMarkers",[]);Ce(this,"draftLine",[]);Ce(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ke(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ke(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ke(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ke(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ke(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ke(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ke(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ke(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ke(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ke(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>fo(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>fo(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&WT(r,e)&&this.draftLine.splice(n,1)}onDrag(e){qv(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>fo(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>fo(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new wl;return Object.assign(e,this),e}}const hh=t=>({type:"ADD_EDGE_MARKER",payload:t}),vh=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),$a=t=>({type:"ADD_CELL_MARKER",payload:t}),zT=t=>({type:"SET_CELL_MARKERS",payload:t}),ph=t=>({type:"REMOVE_CELL_MARKER",payload:t}),YT=t=>({type:"DRAG",payload:t}),Is=t=>({type:"ADD_LINE_MARKERS",payload:t}),mh=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),Pd=()=>({type:"RESET"});function jT(t,e){switch(e.type){case"RESET":return new wl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Zv(){return{_undoStack:[],_redoStack:[]}}const Go=kt(Zv());function KT(){Go.update(()=>Zv())}function mn(t,e=!0){Go.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function VT(t,e=!0){Go.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Qv(){Go.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Jv(){Go.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ja=kt(new wl);function Or(t){Ja.update(e=>jT(e,t))}const el=kt(1);function Si(t,e){return{execute:()=>{Or(t)},unExecute:()=>{Or(e)}}}const Ui=kt(Fd());function uo(t){t&&Ui.update(e=>Xv(e,t))}function Eh(t){t&&Ui.update(e=>Xv(e,t))}function XT(t,e){return{execute:()=>{Eh(t)},unExecute:()=>{Eh(e)}}}const po=kt(null),yl=kt(Io.SETTING),Xu=kt(!1),Jt=kt(d.DIGIT),ep=kt(d.DIGIT),Hd=kt(St.range(1,10)),En=kt(new ko(9,9)),tr=kt(tt(En).getAllCells()),Hr=kt({}),Br=kt(new Gi),ht=kt(new Do),Yt=kt(null),Ms=kt(void 0),Ll=kt(void 0);function qT(t){Hr.update(()=>t)}function Mo(t){Yt.update(()=>t)}function Bd(t){Ms.update(()=>t)}function si(t){tt(Jt)!==t&&(Jt.update(()=>t),Mo(null))}function ZT(){const t=tt(ep);t&&si(t)}function qu(t){ep.update(()=>t)}function QT(t){tt(Jt)===t&&si(d.DIGIT)}function JT(t){ht.update(e=>(e.removeFromDict(t),e)),Bd(void 0)}function qt(t,e,n){ht.update(r=>(r.updateConstraint(t,e,n),r)),Mo({id:e,constraint:n})}function hu(t){const e=tt(Yt);if(t=t?{...t}:void 0,Bd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;qt(r,e.id,n)}function eD(t,e){const r=tt(ht).get(e);if(!r)return;const i=r[t];i&&Mo({id:t,constraint:i})}function tD(t,e,n){const r=new ko(t,e);En.update(()=>r),Hd.update(()=>n),ht.update(()=>new Do),Br.update(()=>new Gi),Hr.update(()=>({})),Wd(void 0),tr.update(()=>r.getAllCells())}function nD(t){En.update(()=>t.grid),Hr.update(()=>t.puzzleMeta),Wd(t.solution),Hd.update(()=>t.valid_digits),ht.update(()=>t.localConstraints),Br.update(()=>t.globalConstraints),tr.update(()=>t.grid.getAllCells())}function tp(){const t=tt(En);t.resetValues(),En.update(()=>t),tr.update(()=>t.getAllCells()),Or(Pd())}function tl(){KT(),Or(Pd()),si(d.DIGIT);const t=MT();uo(t),Bd(void 0),Mo(null)}const np=di([ui,Jt,yl],([t,e,n])=>{const r=t.hideFog;return e===d.FOG_LIGHTS&&!r&&n===Io.SETTING}),Us=di([En,Hr,Br,ht,Ll,Hd],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function Wd(t){Ll.update(()=>t)}var rp=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(rp||{});const Ba=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),ip=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function rD(t,e){Br.update(n=>n.setConstraint(t,e))}function iD(t){Br.update(e=>e.removeConstraint(t))}function Ch(t){t.type===rp.REMOVE_GLOBAL_CONSTRAINT?iD(t.payload):rD(t.payload.tool,t.payload.value)}function Zu(t,e){return{execute:()=>{Ch(t)},unExecute:()=>{Ch(e)}}}var oD=de('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function sD(t,e){let n=M(e,"value",8,!1);var r=oD(),i=V(r);ln(i),B(r),te(()=>Vh(i,n())),S(t,r)}var aD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function op(t){var e=aD();S(t,e)}var lD=de('<button class="remove-button svelte-17rdl63"><!></button>');function cD(t,e){let n=M(e,"onTrash",8,()=>{});var r=lD(),i=V(r);op(i),B(r),Ge("click",r,rr(function(...o){var a;(a=n())==null||a.apply(this,o)})),S(t,r)}var uD=de('<input type="radio" class="radio-select-button svelte-3561wl">'),dD=de('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function nl(t,e){var J,ae;ce(e,!1);const n=Ye(),r=()=>Ee(Jt,"$toolStore",n),i=[];let o=M(e,"elementInfo",8),a=M(e,"onClick",12,void 0),c=M(e,"onTrash",8,void 0);const u=o().toolId,f=o().permanent??!1,g=((J=o().menu)==null?void 0:J.name)??o().toolId,p=!((ae=o().meta)!=null&&ae.categories.includes(T.GLOBAL_CONSTRAINT)),h=`label-${g}`;p&&a(()=>{si(u)});function m(){var oe,pe;const Q=(oe=o().meta)==null?void 0:oe.description,re=((pe=o().meta)==null?void 0:pe.usage)??kw(u);let ge;return Q&&Q.length&&(ge=Q),re.length&&(ge?ge=ge+`

`+re:ge=re),ge}he();var E=dD(),I=V(E);{var b=Q=>{var re=uD();ln(re),L(re,"id",h),re.value=(re.__value=u)==null?"":u,cl(i,[],re,()=>r(),ge=>Os(Jt,ge)),S(Q,re)};ne(I,Q=>{p&&Q(b)})}var w=U(I,2);te(()=>L(w,"title",m())),L(w,"aria-labelledby",h);var A=V(w),k=V(A),G=V(k);{var F=Q=>{cD(Q,{get onTrash(){return c()}})};ne(G,Q=>{f||Q(F)})}B(k);var z=U(k,2);L(z,"for",h),z.textContent=g,B(A);var H=U(A,2),j=V(H);vt(j,e,"default",{}),B(H),B(w),B(E),te(()=>Lt(E,"checked",u===r())),Ge("click",w,rr(function(...Q){var re;(re=a())==null||re.apply(this,Q)})),S(t,E),ue()}function _D(t,e){ce(e,!1);let n=M(e,"toolId",8),r=M(e,"value",8,!1),i=M(e,"elementHandlers",8);const o=()=>{const u=Ba(n(),!r()),f=Ba(n(),r()),g=Zu(u,f);mn(g)},a=()=>{const u=ip(n()),f=Ba(n(),r()),g=Zu(u,f);mn(g)};he();var c=Qe(()=>Mi(n(),i()));nl(t,{get elementInfo(){return _(c)},onClick:o,onTrash:a,children:(u,f)=>{sD(u,{get value(){return r()}})},$$slots:{default:!0}}),ue()}var fD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function gD(t){var e=fD();S(t,e)}var hD=de('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function vD(t,e){let n=M(e,"title",8),r=M(e,"closeCb",8);var i=hD(),o=V(i),a=V(o,!0);B(o);var c=U(o,2);B(i),te(()=>at(a,n())),Ge("click",c,function(...u){var f;(f=r())==null||f.apply(this,u)}),S(t,i)}var pD=de('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Wr(t,e){ce(e,!1);let n=M(e,"showModal",12),r=M(e,"title",8),i=N();function o(){n(!1),_(i).close()}D(()=>(_(i),Z(n())),()=>{_(i)&&n()&&_(i).showModal()}),D(()=>(_(i),Z(n())),()=>{_(i)&&!n()&&_(i).close()}),we();var a=pD(),c=V(a),u=V(c);vD(u,{get title(){return r()},closeCb:o});var f=U(u,2),g=V(f),p=V(g);vt(p,e,"default",{}),B(g),B(f),B(c),B(a),ki(a,h=>y(i,h),()=>_(i)),Ge("click",c,rr(function(h){gw.call(this,e,h)})),Ge("close",a,()=>{n(!1)}),Ge("click",a,fw(rr(()=>_(i).close()))),S(t,a),ue()}var mD=de('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function ED(t,e){ce(e,!1);let n=M(e,"searchPattern",12,""),r=M(e,"showModal",8),i=N(null);D(()=>(Z(r()),_(i)),()=>{r()&&_(i)&&_(i).focus()}),we();var o=mD(),a=U(V(o),2);ln(a),L(a,"spellcheck",!1),ki(a,c=>y(i,c),()=>_(i)),B(o),er(a,n),S(t,o),ue()}var CD=de('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function ID(t,e){let n=M(e,"showModal",12),r=M(e,"searchPattern",12,""),i=M(e,"title",8);Wr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=CD(),u=V(c);ED(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(h){r(h)},$$legacy:!0});var f=U(u,2),g=V(f),p=V(g);vt(p,e,"default",{}),B(g),B(f),B(c),S(o,c)},$$slots:{default:!0},$$legacy:!0})}var bD=de('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function Al(t,e){let n=M(e,"isOpen",8,!0);var r=bD(),i=V(r);vt(i,e,"default",{}),B(r),te(()=>{L(r,"aria-expanded",n()),Lt(r,"closed",!n())}),S(t,r)}var OD=de('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),wD=de('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function oi(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0),i=M(e,"isCollapsible",8,!1);var o=ye(),a=se(o);{var c=f=>{var g=OD(),p=V(g),h=V(p),m=V(h,!0);B(h),B(p);var E=U(p,2),I=V(E);vt(I,e,"default",{}),B(E),B(g),te(()=>at(m,n())),S(f,g)},u=f=>{var g=wD(),p=V(g),h=V(p),m=V(h,!0);B(h),B(p);var E=U(p,2),I=V(E);vt(I,e,"default",{});var b=U(I,2);B(E),B(g),te(()=>{at(m,n()),Lt(b,"open",r())}),Ge("click",g,()=>r(!r())),S(f,g)};ne(a,f=>{i()?f(u,!1):f(c)})}S(t,o)}var yD=de('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),LD=de('<ol class="svelte-cd45on"></ol>'),AD=de("<!> <!>",1);function SD(t,e){ce(e,!1);const n=N();let r=M(e,"category",8),i=M(e,"addTool",8),o=M(e,"searchResults",8),a=N(!0);D(()=>(Z(o()),Z(r())),()=>{y(n,o().filter(g=>{var p,h;return(h=(p=g.info.meta)==null?void 0:p.categories)==null?void 0:h.includes(r())}))}),we(),he();var c=ye(),u=se(c);{var f=g=>{var p=AD(),h=se(p);oi(h,{get title(){return r()},isCollapsible:!0,get isOpen(){return _(a)},set isOpen(E){y(a,E)},$$legacy:!0});var m=U(h,2);Al(m,{get isOpen(){return _(a)},children:(E,I)=>{var b=LD();et(b,5,()=>_(n),It,(w,A)=>{let k=()=>_(A).key,G=()=>_(A).info;var F=yD(),z=V(F),H=V(z,!0);B(z),B(F),te(()=>{var j;L(z,"title",(j=G().meta)==null?void 0:j.description),at(H,k())}),Ge("click",z,()=>{i()(k())}),S(w,F)}),B(b),S(E,b)},$$slots:{default:!0}}),S(g,p)};ne(u,g=>{_(n).length&&g(f)})}S(t,c),ue()}function ND(t,e){ce(e,!1);const n=N();let r=M(e,"searchPattern",8,""),i=M(e,"addTool",8),o=M(e,"categories",8),a=M(e,"filterFunc",8),c=M(e,"elementHandlers",8);D(()=>(Z(r()),Z(a()),Z(c())),()=>{y(n,XR(r(),a(),c()))}),we(),he();var u=ye(),f=se(u);et(f,1,o,It,(g,p)=>{SD(g,{get category(){return _(p)},get searchResults(){return _(n)},get addTool(){return i()}})}),S(t,u),ue()}var xD=de('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function Sl(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8);var i=xD();L(i,"tabindex",0);var o=V(i),a=V(o);vt(a,e,"add-button",{}),B(o);var c=U(o,2),u=V(c),f=V(u);vt(f,e,"title-icon",{}),B(u);var g=U(u);B(c);var p=U(c,2),h=V(p);B(p),B(i),te(()=>{at(g,` ${r()??""}`),Lt(h,"open",n())}),Ge("click",i,()=>n(!n())),Ge("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),S(t,i)}var RD=de('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function TD(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8),i=M(e,"showModal",12);function o(){i(!i())}Sl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=RD();Ge("click",u,rr(()=>o())),S(a,u)},"title-icon":(a,c)=>{var u=ye(),f=se(u);vt(f,e,"title-icon",{}),S(a,u)}},$$legacy:!0})}var DD=de('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),kD=de('<div class="panel-container svelte-hixu4"><!> <!></div>');function Nl(t,e){let n=M(e,"isOpen",8,!0);var r=kD(),i=V(r);vt(i,e,"panel-header",{});var o=U(i,2);Al(o,{get isOpen(){return n()},children:(a,c)=>{var u=DD(),f=V(u);vt(f,e,"panel-content",{}),B(u),S(a,u)},$$slots:{default:!0}}),B(r),S(t,r)}var GD=de("<!> <!>",1);function sp(t,e){ce(e,!1);let n=M(e,"categories",8),r=M(e,"title",8),i=M(e,"onAddTool",8),o=M(e,"elementHandlerFilterFunc",8),a=M(e,"elementHandlers",8),c=N(!0),u=N(!1),f=N("");const g=p=>{y(u,!1),y(c,!0),i()(p)};he(),Nl(t,{get isOpen(){return _(c)},set isOpen(p){y(c,p)},$$slots:{"panel-header":(p,h)=>{var m=GD(),E=se(m);TD(E,{get title(){return r()},get isOpen(){return _(c)},set isOpen(b){y(c,b)},get showModal(){return _(u)},set showModal(b){y(u,b)},$$slots:{"title-icon":(b,w)=>{var A=ye(),k=se(A);vt(k,e,"title-icon",{}),S(b,A)}},$$legacy:!0});var I=U(E,2);ID(I,{get title(){return r()},get showModal(){return _(u)},set showModal(b){y(u,b)},get searchPattern(){return _(f)},set searchPattern(b){y(f,b)},children:(b,w)=>{ND(b,{get searchPattern(){return _(f)},get categories(){return n()},get filterFunc(){return o()},addTool:g,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),S(p,m)},"panel-content":(p,h)=>{var m=ye(),E=se(m);vt(E,e,"panel-content",{}),S(p,m)}},$$legacy:!0}),ue()}function MD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Br,"$globalConstraintsStore",n),i=N();let o=M(e,"elementHandlers",8);const a=Ow,c=u=>{const f=Ba(u,!0),g=ip(u),p=Zu(f,g);mn(p)};D(()=>r(),()=>{y(i,(u,f)=>{var h;const g=!!((h=f.meta)!=null&&h.categories.includes(T.GLOBAL_CONSTRAINT)),p=r().has(u);return g&&!p})}),we(),he(),sp(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,f)=>{gD(u)},"panel-content":(u,f)=>{var g=ye(),p=se(g);et(p,1,()=>r().entries(),([h,m])=>h,(h,m)=>{let E=()=>_(m)[0],I=()=>_(m)[1];_D(h,{get toolId(){return E()},get value(){return I()},get elementHandlers(){return o()}})}),S(u,g)}}}),ue()}var _o=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(_o||{});const zd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),Yd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),UD=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),$D=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Ih=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function FD(t){ht.update(e=>(e.addToDict(t),e))}function vi(t,e){const n=tt(Ms);n&&(e.shape={...n}),ht.update(r=>(r.addConstraint(e.toolId,t,e),r)),Mo({id:t,constraint:e})}function $i(t,e){e&&ht.update(n=>(n.removeConstraint(t,e),n))}function PD(t,e){ht.update(n=>(n.setConstraints(t,e),n))}function bh(t){t.type===_o.ADD_LOCAL_CONSTRAINT?vi(t.payload.id,t.payload.constraint):t.type===_o.REMOVE_LOCAL_CONSTRAINT?$i(t.payload.tool,t.payload.id):t.type===_o.REMOVE_LOCAL_CONSTRAINT_GROUP?JT(t.payload.tool):t.type===_o.RESTORE_LOCAL_CONSTRAINT_GROUP?PD(t.payload.tool,t.payload.constraints):t.type===_o.UPDATE_LOCAL_CONSTRAINT&&qt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function $s(t,e){return{execute:()=>{bh(t)},unExecute:()=>{bh(e)}}}function HD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ht,"$localConstraintsStore",n);let i=M(e,"toolId",8),o=M(e,"elementHandlers",8);const a=()=>{QT(i());const u=r().get(i());if(!u)return;const f=UD(i()),g=$D(i(),u),p=$s(f,g);mn(p)};he();var c=Qe(()=>Mi(i(),o()));nl(t,{get elementInfo(){return _(c)},onTrash:a}),ue()}var BD=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function WD(t){var e=BD();S(t,e)}var zD=de('<div class="constraint-button svelte-fgm6t3"><div class="left-side svelte-fgm6t3"> </div> <div class="right-side svelte-fgm6t3"><button class="remove-constraint-button svelte-fgm6t3"><!></button></div></div>');function YD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(po,"$svgRefStore",n),i=()=>Ee(ht,"$localConstraintsStore",n),o=()=>Ee(Yt,"$currentConstraintStore",n),a=N();let c=M(e,"constraintId",8),u=M(e,"toolId",8);function f(){eD(c(),u()),r()&&r().focus()}function g(){const w=i().getConstraint(u(),c());if(!w)return;const A=Yd(c(),u()),k=zd(c(),w),G=$s(A,k);mn(G)}D(()=>o(),()=>{var w;y(a,(w=o())==null?void 0:w.id)}),we(),he();var p=zD(),h=V(p),m=V(h);B(h);var E=U(h,2),I=V(E),b=V(I);op(b),B(I),B(E),B(p),te(()=>{Lt(p,"active",c()===_(a)),at(m,`ID: ${c()??""}`)}),Ge("click",I,rr(g)),Ge("click",p,f),S(t,p),ue()}var jD=de('<div class="constraint-list svelte-w5npcu"></div>');function KD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ht,"$localConstraintsStore",n),i=()=>Ee(Jt,"$toolStore",n),o=N();let a=M(e,"toolId",8);D(()=>(r(),Z(a())),()=>{y(o,r().get(a()))}),we(),he();var c=ye(),u=se(c);{var f=g=>{var p=Qe(()=>a()===i());Al(g,{get isOpen(){return _(p)},children:(h,m)=>{var E=jD();et(E,5,()=>Object.entries(_(o)),I=>I[0],(I,b)=>{YD(I,{get constraintId(){return _(b)[0]},get toolId(){return a()}})}),B(E),S(h,E)},$$slots:{default:!0}})};ne(u,g=>{_(o)&&Object.entries(_(o)).length&&g(f)})}S(t,c),ue()}var VD=de("<!> <!>",1),XD=de("<!> <!> <!>",1);function qD(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ht,"$localConstraintsStore",n),i=N();let o=M(e,"elementHandlers",8);const a=bw,c=u=>{FD(u),si(u)};D(()=>(r(),T),()=>{y(i,(u,f)=>{var h;const g=r().has(u);return!!((h=f.meta)!=null&&h.categories.includes(T.LOCAL_ELEMENT))&&!g})}),we(),he(),sp(t,{title:"Local Elements",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return _(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,f)=>{WD(u)},"panel-content":(u,f)=>{var g=XD(),p=se(g),h=Qe(()=>Mi(d.GIVEN,o()));nl(p,{get elementInfo(){return _(h)}});var m=U(p,2),E=Qe(()=>Mi(d.REGIONS,o()));nl(m,{get elementInfo(){return _(E)}});var I=U(m,2);et(I,1,()=>r().entries(),([b,w])=>b,(b,w)=>{let A=()=>_(w)[0];var k=ye(),G=se(k);{var F=z=>{var H=VD(),j=se(H);HD(j,{get toolId(){return A()},get elementHandlers(){return o()}});var J=U(j,2);KD(J,{get toolId(){return A()}}),S(z,H)};ne(G,z=>{mw(A())&&z(F)})}S(b,k)}),S(u,g)}}}),ue()}var ZD=de('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function vu(t,e){ce(e,!1);const n=N();let r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0),o=N(void 0);function a(m){const E=fu(m);E&&i()&&i()(E)}D(()=>Z(r()),()=>{y(n,r())}),D(()=>(_(n),fu),()=>{Ku(_(n))&&y(o,fu(_(n)))}),we(),he();var c=ZD(),u=V(c);const f=Qe(()=>jv(_(n)));var g=V(u);ln(g),B(u);var p=U(u,2),h=U(V(p),2);ln(h),L(h,"spellcheck",!1),L(h,"maxlength",30),B(p),B(c),te(()=>{L(u,"style",`--choosen-color: ${_(o)??""}`),Lt(u,"transparent",_(f))}),er(g,()=>_(n),m=>y(n,m)),Ge("change",g,()=>a(_(n))),er(h,()=>_(n),m=>y(n,m)),Ge("input",h,()=>a(_(n))),S(t,c),ue()}var QD=de('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function vs(t,e){let n=M(e,"name",8);var r=QD(),i=V(r),o=V(i,!0);B(i);var a=U(i,2);vt(a,e,"default",{}),B(r),te(()=>at(o,n())),S(t,r)}var JD=de('<input class="control-slider svelte-1rsuho6" type="range">');function e2(t,e){ce(e,!1);let n=M(e,"min",8),r=M(e,"max",8),i=M(e,"value",12),o=M(e,"step",24,()=>(r()-n())/10),a=M(e,"onChangeCb",8,void 0),c=M(e,"onInputCb",8,void 0);he();var u=JD();ln(u),te(()=>{L(u,"min",n()),L(u,"max",r()),L(u,"step",o())}),er(u,i),Ge("change",u,()=>{a()&&a()(i())}),Ge("input",u,()=>{c()&&c()(i())}),S(t,u),ue()}function ni(t,e){let n=M(e,"name",8),r=M(e,"value",12),i=M(e,"min",8),o=M(e,"max",8),a=M(e,"step",24,()=>(o()-i())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);vs(t,{get name(){return`${n()??""}: ${r()??""}`},children:(f,g)=>{e2(f,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(p){r(p)},$$legacy:!0})},$$slots:{default:!0}})}var t2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function n2(t){var e=t2();S(t,e)}var r2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function i2(t){var e=r2();S(t,e)}var o2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function s2(t){var e=o2();S(t,e)}var a2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function l2(t){var e=a2();S(t,e)}var c2=de('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function u2(t,e){ce(e,!1);const n=[];let r=M(e,"value",8),i=M(e,"selectedShape",12),o=M(e,"title",8),a=M(e,"updateShapeCb",8,void 0);he();var c=c2(),u=V(c);ln(u);var f,g=U(u,2);vt(g,e,"default",{}),B(c),te(()=>{L(c,"title",o()),Lt(c,"active",r()===i()),f!==(f=r())&&(u.value=(u.__value=r())==null?"":r())}),cl(n,[],u,()=>(r(),i()),i),Ge("change",u,()=>a()&&a()(r())),S(t,c),ue()}var d2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function _2(t){var e=d2(),n=V(e);L(n,"cx",480),L(n,"cy",-480),L(n,"rx",480),L(n,"ry",300),B(e),S(t,e)}var f2=de('<div class="icon-wrapper svelte-18euf14"><!></div>'),g2=de('<div class="radio-container svelte-18euf14"></div>');function h2(t,e){ce(e,!1);let n=M(e,"name",8),r=M(e,"selectedShape",8),i=M(e,"possibleShapes",8),o=M(e,"updateShapeCb",8,void 0);const a=new Map([[W.CIRCLE,s2],[W.ELLIPSE,_2],[W.SQUARE,i2],[W.RECTANGLE,n2],[W.POLYGON,l2]]);he(),vs(t,{get name(){return n()},children:(c,u)=>{var f=g2();et(f,5,i,It,(g,p)=>{u2(g,{get title(){return _(p)},get value(){return _(p)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(h,m)=>{var E=ye(),I=se(E);{var b=w=>{var A=f2(),k=V(A);qh(k,()=>a.get(_(p)),(G,F)=>{F(G,{})}),B(A),S(w,A)};ne(I,w=>{a.has(_(p))&&w(b)})}S(h,E)},$$slots:{default:!0}})}),B(f),S(c,f)},$$slots:{default:!0}}),ue()}var v2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function p2(t){var e=v2();S(t,e)}var m2=de('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),E2=de("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function C2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Jt,"$toolStore",n),i=()=>Ee(Yt,"$currentConstraintStore",n),o=N(),a=N(),c=N();let u=N(!0),f=M(e,"elementHandlers",8);function g(b,w){const A=(b==null?void 0:b.shape)??(w?Ru(w):void 0);return hu(A),A}function p(b,w){_(c)&&(qO(c,_(c)[b]=w),hu(_(c)))}function h(){_(a)&&(y(c,Ru(_(a))),hu(_(c)))}function m(b){return b&&[W.CIRCLE,W.SQUARE,W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function E(b){return b&&[W.POLYGON,W.LINE_WITH_POLYGON_ENDS].includes(b)}function I(b){return b&&[W.ELLIPSE,W.RECTANGLE].includes(b)}D(()=>(r(),Z(f())),()=>{y(o,Mi(r(),f()))}),D(()=>_(o),()=>{y(a,_(o).shape)}),D(()=>(i(),_(a)),()=>{var b;y(c,g(((b=i())==null?void 0:b.constraint)??null,_(a)))}),we(),he(),Nl(t,{get isOpen(){return _(u)},set isOpen(b){y(u,b)},$$slots:{"panel-header":(b,w)=>{Sl(b,{slot:"panel-header",title:"Shape Editor",get isOpen(){return _(u)},set isOpen(A){y(u,A)},$$slots:{"title-icon":(A,k)=>{p2(A)}},$$legacy:!0})},"panel-content":(b,w)=>{var A=ye(),k=se(A);{var G=F=>{var z=E2(),H=se(z);{var j=$e=>{var Le=m2();Ge("click",Le,h),S($e,Le)};ne(H,$e=>{ww(_(a))&&$e(j)})}var J=U(H,2);{var ae=$e=>{h2($e,{get possibleShapes(){return _(a).allowedTypes},name:"Shape",get selectedShape(){return _(c).type},updateShapeCb:Le=>p("type",Le)})};ne(J,$e=>{var Le;_(a).allowedTypes&&_(a).allowedTypes.length&&((Le=_(c))!=null&&Le.type)&&$e(ae)})}var Q=U(J,2);{var re=$e=>{var Le=Qe(()=>_(a).n.lb??3),Me=Qe(()=>_(a).n.ub??10);ni($e,{name:"Number of Sides",get value(){return _(c).n},get min(){return _(Le)},get max(){return _(Me)},step:1,onChangeCb:Ue=>p("n",Ue)})};ne(Q,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.n)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.n)!=null&&Ue.editable)&&E(_(c).type)&&$e(re)})}var ge=U(Q,2);{var oe=$e=>{var Le=Qe(()=>_(a).r.lb??0),Me=Qe(()=>_(a).r.ub??1),Ue=Qe(()=>_(a).r.step??.05);ni($e,{name:"Radius",get value(){return _(c).r},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Tt=>p("r",Tt)})};ne(ge,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.r)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.r)!=null&&Ue.editable)&&m(_(c).type)&&$e(oe)})}var pe=U(ge,2);{var Ne=$e=>{var Le=Qe(()=>_(a).width.lb??0),Me=Qe(()=>_(a).width.ub??1),Ue=Qe(()=>_(a).width.step??.05);ni($e,{name:"Width",get value(){return _(c).width},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Tt=>p("width",Tt)})};ne(pe,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.width)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.width)!=null&&Ue.editable)&&I(_(c).type)&&$e(Ne)})}var xe=U(pe,2);{var Oe=$e=>{var Le=Qe(()=>_(a).height.lb??0),Me=Qe(()=>_(a).height.ub??1),Ue=Qe(()=>_(a).height.step??.05);ni($e,{name:"Height",get value(){return _(c).height},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Tt=>p("height",Tt)})};ne(xe,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.height)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.height)!=null&&Ue.editable)&&I(_(c).type)&&$e(Oe)})}var Ie=U(xe,2);{var je=$e=>{var Le=Qe(()=>_(a).angle.lb??0),Me=Qe(()=>_(a).angle.ub??360),Ue=Qe(()=>_(a).angle.step??15);ni($e,{name:"Angle",get value(){return _(c).angle},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Tt=>p("angle",Tt)})};ne(Ie,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.angle)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.angle)!=null&&Ue.editable)&&$e(je)})}var qe=U(Ie,2);{var bt=$e=>{var Le=Qe(()=>_(a).inset.lb??0),Me=Qe(()=>_(a).inset.ub??.5),Ue=Qe(()=>_(a).inset.step??.01);ni($e,{name:"Inset",get value(){return _(c).inset},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Tt=>p("inset",Tt)})};ne(qe,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.inset)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.inset)!=null&&Ue.editable)&&$e(bt)})}var Rt=U(qe,2);{var Kt=$e=>{vs($e,{name:"Stroke",children:(Le,Me)=>{vu(Le,{get value(){return _(c).stroke},onChangeCb:Ue=>p("stroke",Ue)})},$$slots:{default:!0}})};ne(Rt,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.stroke)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.stroke)!=null&&Ue.editable)&&$e(Kt)})}var Gt=U(Rt,2);{var $t=$e=>{var Le=Qe(()=>_(a).strokeWidth.lb??0),Me=Qe(()=>_(a).strokeWidth.ub??.8),Ue=Qe(()=>_(a).strokeWidth.step??.01);ni($e,{name:"Stroke Width",get value(){return _(c).strokeWidth},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Tt=>p("strokeWidth",Tt)})};ne(Gt,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.strokeWidth)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.strokeWidth)!=null&&Ue.editable)&&$e($t)})}var rn=U(Gt,2);{var hr=$e=>{var Le=Qe(()=>_(a).strokeDasharray.lb??0),Me=Qe(()=>_(a).strokeDasharray.ub??1),Ue=Qe(()=>_(a).strokeDasharray.step??.01);ni($e,{name:"Stroke Dasharray",get value(){return _(c).strokeDasharray},get min(){return _(Le)},get max(){return _(Me)},get step(){return _(Ue)},onChangeCb:Tt=>p("strokeDasharray",Tt)})};ne(rn,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.strokeDasharray)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.strokeDasharray)!=null&&Ue.editable)&&$e(hr)})}var Wn=U(rn,2);{var ji=$e=>{vs($e,{name:"Fill",children:(Le,Me)=>{vu(Le,{get value(){return _(c).fill},onChangeCb:Ue=>p("fill",Ue)})},$$slots:{default:!0}})};ne(Wn,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.fill)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.fill)!=null&&Ue.editable)&&$e(ji)})}var wr=U(Wn,2);{var yr=$e=>{vs($e,{name:"Font Color",children:(Le,Me)=>{vu(Le,{get value(){return _(c).fontColor},onChangeCb:Ue=>p("fontColor",Ue)})},$$slots:{default:!0}})};ne(wr,$e=>{var Le,Me,Ue;((Le=_(c))==null?void 0:Le.fontColor)!==void 0&&((Ue=(Me=_(a))==null?void 0:Me.fontColor)!=null&&Ue.editable)&&$e(yr)})}S(F,z)};ne(k,F=>{_(a)&&F(G)})}S(b,A)}},$$legacy:!0}),ue()}var I2=de('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Fs(t,e){let n=M(e,"clickCb",8),r=M(e,"title",8);var i=I2(),o=V(i),a=V(o);vt(a,e,"default",{}),B(o),B(i),te(()=>L(i,"title",r())),Ge("click",i,rr(function(...c){var u;(u=n())==null||u.apply(this,c)})),S(t,i)}var b2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function O2(t){var e=b2();S(t,e)}var w2=de('<div class="buttons-container svelte-kc00rw"><!></div>');function xl(t,e){var n=w2(),r=V(n);vt(r,e,"default",{}),B(n),S(t,n)}var y2=de('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),L2=de('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),A2=de('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function S2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Hr,"$puzzleMetaStore",n),i=()=>Ee(Br,"$globalConstraintsStore",n),o=()=>Ee(ht,"$localConstraintsStore",n);let a=M(e,"showModal",12,!1),c=N(""),u=N(""),f=N(""),g=N(""),p=N("");function h(){a(!1)}function m(){const w=_(u)?E(_(u)):["Anonymous"],k={title:_(c)?_(c):"Sudoku",authors:w,ruleset:_(f),ctcYoutubeUrl:_(g),ctcUrl:_(p)};qT(k),a(!1)}function E(w){return w.split(/\s*[;]\s*/)}function I(){var z,H,j,J;let w="";const A=Ht,k=i();!!k.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ae,Q]of k.entries())if(ae!==d.SUDOKU_RULES_DO_NOT_APPLY&&Q){const re=A[ae],ge=((z=re.menu)==null?void 0:z.name)??re.toolId,oe=(H=re.meta)==null?void 0:H.description;w+=`**${ge}**: ${oe}

`}const F=o();for(const[ae,Q]of F.entries())if(Object.keys(Q).length>0){const ge=A[ae],oe=((j=ge.menu)==null?void 0:j.name)??ge.toolId,pe=(J=ge.meta)==null?void 0:J.description;w+=`**${oe}**: ${pe}

`}return w.trim()}function b(){const w=I();y(f,w)}D(()=>(Z(a()),r(),Za),()=>{if(!a()){const w=r().authors;y(c,r().title??""),y(u,w?Za(w,"; ","; "):""),y(f,r().ruleset??""),y(g,r().ctcYoutubeUrl??""),y(p,r().ctcUrl??"")}}),we(),he(),Wr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,A)=>{var k=A2(),G=V(k);oi(G,{title:"Title"});var F=U(G,2);ln(F);var z=U(F,2);oi(z,{title:"Authors"});var H=U(z,2);ln(H);var j=U(H,2);oi(j,{title:"Ruleset",children:(pe,Ne)=>{var xe=y2();Ge("click",xe,b),S(pe,xe)},$$slots:{default:!0}});var J=U(j,2);MO(J),L(J,"rows",8);var ae=U(J,2);oi(ae,{title:"CTC Link"});var Q=U(ae,2);ln(Q);var re=U(Q,2);oi(re,{title:"CTC Youtube Link"});var ge=U(re,2);ln(ge);var oe=U(ge,2);xl(oe,{children:(pe,Ne)=>{var xe=L2(),Oe=se(xe),Ie=U(Oe,2);Ge("click",Oe,m),Ge("click",Ie,h),S(pe,xe)},$$slots:{default:!0}}),B(k),er(F,()=>_(c),pe=>y(c,pe)),er(H,()=>_(u),pe=>y(u,pe)),er(J,()=>_(f),pe=>y(f,pe)),er(Q,()=>_(p),pe=>y(p,pe)),er(ge,()=>_(g),pe=>y(g,pe)),S(w,k)},$$slots:{default:!0},$$legacy:!0}),ue()}var N2=de("<!> <!>",1);function x2(t){let e=N(!1);function n(){y(e,!0)}var r=N2(),i=se(r);Fs(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{O2(a)},$$slots:{default:!0}});var o=U(i,2);S2(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var R2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function T2(t){var e=R2();S(t,e)}var D2=de('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function k2(t,e){ce(e,!1);let n=N(null),r=N(null);function i(){var o;(o=_(n))==null||o.click()}D(()=>(_(r),tl),()=>{if(_(r)&&_(r).length){const o=_(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const f=JSON.parse(u),g=kT(f);console.log(g),nD(g),tl()}},a.onerror=function(){alert(a.error)}}}),we(),he(),Fs(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=D2(),u=se(c);T2(u);var f=U(u,2);ki(f,g=>y(n,g),()=>_(n)),_w(f,()=>_(r),g=>y(r,g)),S(o,c)},$$slots:{default:!0}}),ue()}var G2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function M2(t){var e=G2();S(t,e)}var U2=de('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Oh(t,e){ce(e,!1);let n=M(e,"name",8),r=M(e,"min",8),i=M(e,"max",8),o=M(e,"value",12),a=M(e,"step",24,()=>(i()-r())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);he();var f=U2(),g=V(f),p=V(g);B(g);var h=U(g,2);ln(h),B(f),te(()=>{at(p,`${n()??""}: ${o()??""}`),L(h,"min",r()),L(h,"max",i()),L(h,"step",a())}),er(h,o),Ge("change",h,()=>{c()&&c()(o())}),Ge("input",h,()=>{u()&&u()(o())}),S(t,f),ue()}var $2=de('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),F2=de('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function P2(t,e){ce(e,!1);let n=M(e,"showModal",12,!1);const r=4,i=20;let o=N(9),a=N(9),c=N(""),u=N(St.range(1,10));function f(){n(!1)}function g(){tl(),tD(_(a),_(o),_(u).sort()),n(!1)}function p(E){return E.map(b=>String(b)).join(",")}function h(){const E=Math.min(Math.max(_(a),_(o)),9);y(u,St.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&y(u,E.replaceAll(" ","").split(",").map(Number))}he(),Wr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,I)=>{var b=F2(),w=V(b);Oh(w,{name:"Width",min:r,max:i,step:1,onInputCb:h,get value(){return _(o)},set value(H){y(o,H)},$$legacy:!0});var A=U(w,2);Oh(A,{name:"Height",min:r,max:i,step:1,onInputCb:h,get value(){return _(a)},set value(H){y(a,H)},$$legacy:!0});var k=U(A,2),G=Qe(()=>`Allowed Digits (for the solver): ${p(_(u))}`);oi(k,{get title(){return _(G)}});var F=U(k,2);ln(F),te(()=>L(F,"placeholder",p(_(u))));var z=U(F,2);xl(z,{children:(H,j)=>{var J=$2(),ae=se(J),Q=U(ae,2);Ge("click",ae,g),Ge("click",Q,f),S(H,J)},$$slots:{default:!0}}),B(b),er(F,()=>_(c),H=>y(c,H)),Ge("input",F,()=>m(_(c))),S(E,b)},$$slots:{default:!0},$$legacy:!0}),ue()}var H2=de("<!> <!>",1);function B2(t){let e=N(!1);function n(){y(e,!0)}var r=H2(),i=se(r);Fs(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{M2(a)},$$slots:{default:!0}});var o=U(i,2);P2(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var W2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function z2(t){var e=W2();S(t,e)}var Y2=de('<button class="modal-button">Cancel</button>'),j2=de('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function K2(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(po,"$svgRefStore",n),i=()=>Ee(Hr,"$puzzleMetaStore",n),o=()=>Ee(Us,"$puzzleStore",n),a=N();let c=M(e,"showModal",12,!1);function u(b){const w=getComputedStyle(b);let A="";for(let k of w){const G=w.getPropertyValue(k);G&&(A+=`${k}:${G};`)}return A}function f(b){const w=b.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(b));const A=b.childNodes;for(let k=0;k<A.length;k++){const G=A[k];if(G instanceof Element){const F=f(G);w.replaceChild(F,w.childNodes[k])}}return w}function g(b){if(!b)return;const w=f(b),A=Qa(i()),G=new XMLSerializer().serializeToString(w),F=new Image,z=new Blob([G],{type:"image/svg+xml;charset=utf-8"}),H=URL.createObjectURL(z);F.onload=()=>{const j=b.getBoundingClientRect(),J=j.width,ae=j.height,Q=document.createElement("canvas"),re=window.devicePixelRatio||1;Q.width=J*re,Q.height=ae*re;const ge=Q.getContext("2d");ge&&(ge.scale(re,re),ge.drawImage(F,0,0,J,ae),Q.toBlob(oe=>{if(!oe)return;const pe=URL.createObjectURL(oe),Ne=document.createElement("a");Ne.href=pe,Ne.download=A,Ne.click(),URL.revokeObjectURL(pe)}))},F.src=H}function p(b,w="download.svg"){if(!b)return;const A=f(b);let G=new XMLSerializer().serializeToString(A);G.includes("<?xml")||(G=`<?xml version="1.0" standalone="no"?>\r
`+G);const F=new Blob([G],{type:"image/svg+xml"}),z=URL.createObjectURL(F),H=document.createElement("a");H.href=z,H.download=w,H.click(),URL.revokeObjectURL(z)}const h=b=>{const w=DT(o());return JSON.stringify(w,null,b)},m=()=>{function b(k,G,F){var z=document.createElement("a"),H=new Blob([k],{type:F});z.href=URL.createObjectURL(H),z.download=G,z.click(),URL.revokeObjectURL(z.href)}const w=h(2),A=Qa(i());b(w,`${A}.json`,"text/plain")};function E(){c(!1)}const I=1;D(()=>r(),()=>{y(a,r())}),we(),he(),Wr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(b){c(b)},children:(b,w)=>{var A=j2(),k=V(A),G=V(k),F=V(G),z=U(F,2),H=U(z,2);B(G);var j=U(G,2),J=U(V(j),2),ae=V(J);L(ae,"width",400*I),L(ae,"height",300*I),B(J),B(j),B(k);var Q=U(k,2);xl(Q,{children:(re,ge)=>{var oe=Y2();Ge("click",oe,E),S(re,oe)},$$slots:{default:!0}}),B(A),Ge("click",F,m),Ge("click",z,()=>g(_(a))),Ge("click",H,()=>p(_(a))),S(b,A)},$$slots:{default:!0},$$legacy:!0}),ue()}var V2=de("<!> <!>",1);function X2(t){let e=N(!1);function n(){y(e,!0)}var r=V2(),i=se(r);Fs(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{z2(a)},$$slots:{default:!0}});var o=U(i,2);K2(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var q2=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function ap(t){var e=q2();S(t,e)}var Z2=de('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),Q2=de('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Fa(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0);var i=Q2(),o=V(i);oi(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=U(o,2);Al(a,{get isOpen(){return r()},children:(c,u)=>{var f=Z2(),g=V(f);vt(g,e,"default",{}),B(f),S(c,f)},$$slots:{default:!0}}),B(i),S(t,i)}var J2=de('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function ek(t,e){let n=M(e,"value",8),r=M(e,"onClickCb",8),i=M(e,"disabled",8,!1);var o=J2(),a=V(o);ln(a),Di(2),B(o),te(()=>{Lt(o,"disabled",i()),Vh(a,n()),a.disabled=i()}),Ge("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),S(t,o)}var tk=de('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function ri(t,e){ce(e,!1);let n=M(e,"value",8),r=M(e,"name",8),i=M(e,"updateCb",8,void 0),o=M(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}he();var c=tk(),u=V(c);ek(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var f=U(u,2),g=V(f,!0);B(f),B(c),te(()=>{Lt(c,"disabled",o()),at(g,r())}),Ge("click",f,rr(a)),S(t,c),ue()}var nk=de("<!> <!>",1),rk=de("<!> <!> <!>",1),ik=de("<!> <!>",1),ok=de('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function lp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ui,"$settingsStore",n),i=()=>Ee(yl,"$gameModeStore",n),o=N();let a=M(e,"showModal",12,!1);D(()=>r(),()=>{y(o,r())}),we(),he(),Wr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var f=ok(),g=V(f);Fa(g,{title:"General",children:(I,b)=>{ri(I,{get value(){return _(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:ZO})},$$slots:{default:!0}});var p=U(g,2);Fa(p,{title:"Tools",children:(I,b)=>{var w=nk(),A=se(w);ri(A,{get value(){return _(o).penToolActive},name:"Pen Tool",updateCb:QO});var k=U(A,2);ri(k,{disabled:!0,get value(){return _(o).letterToolActive},name:"Letter Tool",updateCb:JO}),S(I,w)},$$slots:{default:!0}});var h=U(p,2);Fa(h,{title:"Gameplay",children:(I,b)=>{var w=rk(),A=se(w);ri(A,{name:"Check Conflicts",get value(){return _(o).checkConflicts},updateCb:ew});var k=U(A,2);ri(k,{name:"Highlight Pencilmark Conflicts",get value(){return _(o).highlightPencilmarkConflicts},updateCb:tw});var G=U(k,2);ri(G,{name:"Highlight Cells Seen By Selection",get value(){return _(o).highlightCellsSeenBySelection},updateCb:nw}),S(I,w)},$$slots:{default:!0}});var m=U(h,2);{var E=I=>{Fa(I,{title:"Setting Mode Display",children:(b,w)=>{var A=ik(),k=se(A);ri(k,{name:"Hide Fog",get value(){return _(o).hideFog},updateCb:rw});var G=U(k,2);ri(G,{name:"Show Solution",get value(){return _(o).showSolution},updateCb:iw}),S(b,A)},$$slots:{default:!0}})};ne(m,I=>{i()===Io.SETTING&&I(E)})}B(f),S(c,f)},$$slots:{default:!0},$$legacy:!0}),ue()}var sk=de("<!> <!>",1);function ak(t){let e=N(!1);function n(){y(e,!0)}var r=sk(),i=se(r);Fs(i,{title:"Settings",clickCb:n,children:(a,c)=>{ap(a)},$$slots:{default:!0}});var o=U(i,2);lp(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var lk=de('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function ck(t){var e=lk(),n=V(e);B2(n);var r=U(n,2);X2(r);var i=U(r,2);k2(i,{});var o=U(i,2);x2(o);var a=U(o,2);ak(a),B(e),S(t,e)}var uk=de('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function dk(t,e){ce(e,!1);let n=N(!1);function r(){const i=tt(En),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const f=i.getCell(a,u);if(!f)continue;const g=f.value;c.push(g)}o.push(c)}Wd(o)}he(),Nl(t,{get isOpen(){return _(n)},set isOpen(i){y(n,i)},$$slots:{"panel-header":(i,o)=>{Sl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return _(n)},set isOpen(a){y(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=uk();Ge("click",a,r),S(i,a)}},$$legacy:!0}),ue()}const _k={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function fk(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function gk(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function hk(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function vk(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function cp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function pk(t,e){const n=gk(t);if(n)return{type:"number",parsed:parseInt(n)};const r=hk(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=vk(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=fk(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=cp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var K=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(K||{});function gt(t,e){return`${e}[${t.r},${t.c}]`}function Bi(t,e){return t.map(r=>gt(r,e))}function be(t,e){return"["+Bi(t,e).join(",")+"]"}function Ae(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function dt(t){return t.map(n=>Ae(n))}function Ri(t){return`constraint alldifferent([${t.join(",")}]);
`}function ft(t,e){return t&&(t=`
% ${e}
`+t),t}function Rl(t,e){const n=[Fe.N,Fe.S,Fe.W,Fe.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function jd(t,e,n=void 0){n||(n=[Fe.N,Fe.S,Fe.W,Fe.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+dt(o).join(",")+"]";r.push(a)}return r}function Tl(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class mk{constructor(e){Ce(this,"model_str","");Ce(this,"used_vars");Ce(this,"puzzle");Ce(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=_k){const i=pk(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],f=c.lower_bound[1];o+=`constraint ${n} ${f} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],f=c.upper_bound[1];o+=`constraint ${n} ${f} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const c=i.parsed,u="["+c.join(",")+"]";for(const f of c){const g=parseInt(f);Number.isNaN(g)&&!this.hasVariable(f)&&(o+=`var int: ${f};
`,this.addVariable(f))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function Ek(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,f=0,g=0;for(let w=0;w<e.length;w++){const A=e[w].trim(),k=A.match(r),G=A.match(i),F=A.match(o),z=A.match(a);if(!c&&(k||G||F||z)){c={name:(k||G||F||z)[1],startLine:w,content:[e[w]],type:k?"function":G?"predicate":F?"test":"variable"},u=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,f=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[w]),u+=(A.match(/\(/g)||[]).length-(A.match(/\)/g)||[]).length,f+=(A.match(/\{/g)||[]).length-(A.match(/\}/g)||[]).length,g+=(A.match(/\[/g)||[]).length-(A.match(/\]/g)||[]).length,u===0&&f===0&&g===0&&A.endsWith(";"))){n[c.name]={...c,endLine:w};let H=c.startLine;for(;H>0&&e[H-1].trim().startsWith("%");)H-=1;n[c.name].startLine=H,c=null}}function p(w){const A=[],k=w.match(r),G=w.match(i),F=w.match(o);for(const z of Object.keys(n)){const H=n[z].type;if(H==="function"||H==="test"||H==="predicate"){if(k||G||F)continue;new RegExp(`\\b${z}\\s*\\(`,"g").test(w)&&A.push(z)}else if(H==="variable"){const j=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${z}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(w.match(j))continue;new RegExp(`\\b${z}\\b`,"g").test(w)&&A.push(z)}}return A}const h=new Set;for(const w of e)p(w).forEach(k=>h.add(k));console.log("usedDefinitions",h);const m=Object.values(n).filter(w=>!h.has(w.name)).map(w=>({start:w.startLine,end:w.endLine}));m.sort((w,A)=>A.start-w.start);const E=[...e];for(const w of m)E.splice(w.start,w.end-w.start+1);const I=[];let b=!1;for(const w of E)w.trim()===""?b||(I.push(w),b=!0):(I.push(w),b=!1);return I.join(`
`)}function wh(t){let e=t,n=e.length;for(;e=Ek(e),e.length!=n;)n=e.length;return e}function up(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function Ck(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let f=0;f<e.nCols;f++){const g=e.getCell(c,f);!g||g.region===null?u.push(r-1):u.push(g.region)}o.push(u)}const a=up(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function Kd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function jt(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function Ik(t,e){const r=t.grid.getPositiveDiagonal(),i=dt(r);let o=Ri(i);return o=`
% Positive Diagonal Constraint
`+o,o}function bk(t,e){const r=t.grid.getNegativeDiagonal(),i=dt(r);let o=Ri(i);return o=`
% Negative Diagonal Constraint
`+o,o}function Ok(t,e){const r=t.grid.getPositiveDiagonal(),o="["+dt(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function wk(t,e){const r=t.grid.getNegativeDiagonal(),o="["+dt(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function yk(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let g=0;g<u;g++){const p=n.getCell(g,f),h=n.getCell(u,f+(u-g));if(!p||!h)continue;const m=Ae(p),E=Ae(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=b}}return o}function Lk(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,f]=[c.r,c.c];for(let g=0;g<u;g++){const p=n.getCell(g,f),h=n.getCell(u,f-(u-g));if(!p||!h)continue;const m=Ae(p),E=Ae(h),b=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=b}}return o}function Ak(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),f=`constraint alldifferent(${`[${dt(a).join(",")}]`});
`;r+=f}return r}function Sk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(p=>p.r+p.c>=i.r+i.c),c=Ae(i),f=`[${dt(a).join(",")}]`,g=`constraint different_from_group_p(${c}, ${f});
`;r+=g}return r}function Nk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(p=>p.r>=i.r||p.c>=i.c),c=Ae(i),f=`[${dt(a).join(",")}]`,g=`constraint different_from_group_p(${c}, ${f});
`;r+=g}return r}function xk(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=ft(n,`${e}`),n}function Rk(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=ft(n,`${e}`),n}function Tk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=ft(n,`${e}`),n}function Dk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=ft(n,`${e}`),n}function*zr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function kk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of zr(n)){const a=Ae(i),c=Ae(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function Gk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of zr(n)){const a=Ae(i),c=Ae(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function Mk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${dt(o).join(",")}]`,u=i.c+1,f=`constraint indexing_column_p(${c}, ${u});
`;r+=f}return r}function Uk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function $k(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function Fk(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=ft(n,`${e}`),n}function pu(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,f=new Set(u.map(p=>n.getCell(p.r,p.c)).filter(p=>!!p)),g=c.value;(e===d.ALL_V_GIVEN&&(g==="v"||g==="V")||e===d.ALL_X_GIVEN&&(g==="x"||g==="X")||e===d.ALL_XV_GIVEN)&&o.push(f)}let a="";for(const[c,u]of zr(n)){if(o.find(h=>h.has(c)&&h.has(u)))continue;const g=Ae(c),p=Ae(u);if(e===d.ALL_V_GIVEN){const h=`constraint ${g} + ${p} != 5;
`;a+=h}else if(e===d.ALL_X_GIVEN){const h=`constraint ${g} + ${p} != 10;
`;a+=h}else{const h=`constraint ${g} + ${p} != 5 /\\ (${g} + ${p} != 10);
`;a+=h}}return a=ft(a,`${e}`),a}function mo(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function Pk(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=mo(n,i);let a="";for(const[c,u]of zr(n)){if(o.find(E=>E.has(c)&&E.has(u)))continue;const g=Ae(c),p=Ae(u);let h="";if(c.r==u.r){const I=n.getRow(c.r)[0];h=Ae(I)}else if(c.c==u.c){const I=n.getCol(c.c)[0];h=Ae(I)}if(!h)continue;const m=`constraint abs(${g} - ${p}) != ${h};
`;a+=m}return a=ft(a,`${e}`),a}function Hk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=mo(n,i);a=[...a,...mo(n,o)];let c=[];i&&(c=Object.values(i).map(g=>g.value).map(g=>g||"1"));const u=[...new Set(c)];let f="";for(const[g,p]of zr(n)){if(a.find(I=>I.has(g)&&I.has(p)))continue;const m=Ae(g),E=Ae(p);for(const I of u){const b=parseInt(I),w=`constraint abs(${m} - ${E}) != ${b};
`;f+=w}}return f=ft(f,`${e}`),f}function Bk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=mo(n,i);a=[...a,...mo(n,o)];let c=[];i&&(c=Object.values(i).map(g=>g.value).map(g=>g||"2"));const u=[...new Set(c)];let f="";for(const[g,p]of zr(n)){if(a.find(I=>I.has(g)&&I.has(p)))continue;const m=Ae(g),E=Ae(p);for(const I of u){const b=parseInt(I),w=`constraint not ratio_p(${m}, ${E}, ${b});
`;f+=w}}return f=ft(f,`${e}`),f}function Wk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=mo(n,i);let a="";for(const[c,u]of zr(n)){if(o.find(I=>I.has(c)&&I.has(u)))continue;const g=Ae(c),p=Ae(u),h=gt(c,K.YIN_YANG),m=gt(u,K.YIN_YANG),E=`constraint not yin_yang_kropki_p(${g}, ${p}, ${h}, ${m});
`;a+=E}return a=ft(a,`${e}`),a}function zk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,f){return u.find(g=>g.cell.r===f.r&&g.cell.c===f.c)}let c="";for(const u of n.getAllCells()){const f=a(o,u),g=f?f.directions:[],p=Ae(u),h=[Fe.E,Fe.N,Fe.S,Fe.W];for(const m of h){if(g.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),I=be(E,K.YIN_YANG);c+=`constraint count(${I}, 1) != ${p};
`}}return c=ft(c,`${e}`),c}function Vd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function Yk(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=Vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=n.getRow(c.r),p=`[${dt(f).join(",")}]`,h=c.c+1,m=`constraint not indexing_column_p(${p}, ${h});
`;a+=m}return a=ft(a,`${e}`),a}function jk(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=Vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=Ae(c),[g,p,h,m]=jd(n,c),E=`constraint not radar_p(${f}, ${g}, ${p}, ${h}, ${m}, 9);
`;a+=E}return a=ft(a,`${e}`),a}function Kk(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=Vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const f=`nurimisaki[${c.r},${c.c}]`,h=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${f});
`;a+=h}return a=ft(a,`${e}`),a}function Vk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of zr(n)){const a=Ae(i),c=Ae(o),u=`nurimisaki[${i.r},${i.c}]`,f=`nurimisaki[${o.r},${o.c}]`,g=`constraint (${u} == 0 /\\ ${f} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=g}return r}function Xk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g),f=be(u,K.YIN_YANG);o+=`constraint count_unique_values(${f}) >= 2;
`}return o}function qk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=K.YIN_YANG;for(const[o,a]of zr(n)){const c=Ae(o),u=Ae(a),f=`${i}[${o.r},${o.c}]`,g=`${i}[${a.r},${a.c}]`,p=`constraint (${f} == 1 /\\ ${g} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=p}return r}function Zk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=ft(n,`${e}`),n}function Qk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=ft(n,`${e}`),n}function Jk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=ft(n,`${e}`),n}function e3(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=ft(n,`${e}`),n}function t3(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=ft(n,`${e}`),n}function n3(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=ft(n,`${e}`),n}function r3(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=ft(n,`${e}`),n}function i3(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=ft(n,`${e}`),n}function o3(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=ft(n,`${e}`),n}function s3(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=ft(n,`${e}`),n}function a3(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(f=>i.region!==null&&f.region===i.region),a=gt(i,K.BOARD),c=gt(i,K.YIN_YANG),u=be(o,K.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=ft(n,`${e}`),n}function l3(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=ft(n,`${e}`),n}function c3(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=ft(n,`${e}`),n}function u3(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=ft(n,`${e}`),n}function d3(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=ft(n,`${e}`),n}function _3(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=ft(n,`${e}`),n}function f3(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=ft(n,`${e}`),n}function g3(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=ft(n,`${e}`),n}function h3(t,e){let n="";const r=t.grid,i=t.grid.getUsedRegions();for(const o of i){const a=r.getRegion(o),c=[...new Set(a.map(f=>f.r))],u=[...new Set(a.map(f=>f.c))];for(const f of u){const g=a.filter(h=>h.c===f),p=be(g,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${p});
`}for(const f of c){const g=a.filter(h=>h.r===f),p=be(g,K.BOARD);n+=`constraint entropy_and_modularity_set_p(${p});
`}}return n=ft(n,`${e}`),n}function v3(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),f=dt(u),g=Ri(f);r+=g}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),f=dt(u),g=Ri(f);r+=g}if(!e.get(d.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const f=n.getRegion(u),g=dt(f),p=Ri(g);r+=p}}return r}function p3(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const m3=new Map([[d.POSITIVE_DIAGONAL,Ik],[d.NEGATIVE_DIAGONAL,bk],[d.POSITIVE_ANTIDIAGONAL,Ok],[d.NEGATIVE_ANTIDIAGONAL,wk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,yk],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,Lk],[d.ANTIKING,Sk],[d.ANTIKNIGHT,Nk],[d.ANTI_LONG_KNIGHT,Rk],[d.ANTI_GIRAFFE,xk],[d.DISJOINT_GROUPS,Ak],[d.TANGO,Tk],[d.NONCONSECUTIVE,kk],[d.NONRATIO,Gk],[d.ANTI_ENTROPY,Dk],[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,h3],[d.GLOBAL_INDEXING_COLUMN,Mk],[d.ALL_V_GIVEN,pu],[d.ALL_X_GIVEN,pu],[d.ALL_XV_GIVEN,pu],[d.ALL_DIFFERENCES_GIVEN,Hk],[d.ALL_RATIOS_GIVEN,Bk],[d.ALL_XY_DIFFERENCES_GIVEN,Pk],[d.ALL_YIN_YANG_KROPKI_GIVEN,Wk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,zk],[d.ALL_INDEXING_COLUMN_GIVEN,Yk],[d.ALL_RADARS_GIVEN,jk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Kk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Vk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Xk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,Fk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,Uk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,$k],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Zk],[d.CAVE_CELLS_ARE_ODD,Jk],[d.CAVE_WALLS_ARE_EVEN,e3],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,t3],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,n3],[d.YIN_YANG_FILLOMINO_PARITY,Qk],[d.TWO_SYMMETRIC_GALAXIES,o3],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,r3],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,i3],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,s3],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,a3],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,qk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,l3],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,g3],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,c3],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,u3],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,d3],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,_3],[d.DIRECTED_PATH_IS_PARITY_LINE,f3]]);function E3(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=m3.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function Xd(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return dt(r)}function qd(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${dt(n.slice(1)).join(",")}]`}function dp(t,e,n,r){let i="";const a="["+Xd(e,r).join(",")+"]";for(const c of r.lines){const u=qd(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function C3(t,e,n,r){let i="";const o=Xd(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const g=`constraint average_arrow_p(${qd(e,u)}, ${a});
`;i+=g}}return i}function I3(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=be(o,K.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f));for(const u of c){if(u.length<=1)continue;const f=be(u.slice(1),K.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${f});
`}return i+=dp(t,e,n,r),i}function b3(t,e,n,r){let i="";const a="["+Xd(e,r).join(",")+"]",c=r.lines;for(const u of c){const f=qd(e,u),g=`constraint bulbous_arrow_p(${a}, ${f});
`;i+=g}return i}const O3=new Map([[d.ARROW,dp],[d.AVERAGE_ARROW,C3],[d.BULBOUS_ARROW,b3],[d.CHAOS_CONSTRUCTION_ARROW,I3]]);function w3(t,e,n,r){let i="";const o=O3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function li(t,e){const n=jt(t,e.cells);return dt(n)}function _p(t,e,n){const i=`[${li(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Dl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Zd(t,e,n,r,i){const a=`[${li(e,r).join(",")}]`,c=r.value,u=Dl(t,c,n);if(!u)return"";const f=u[1];let g=u[0];return g+=`constraint ${i}(${a}, ${f});
`,g}function y3(t,e,n,r){const i=li(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ri(i);const c=Dl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint killer_cage(${o}, ${u});
`,f}function L3(t,e,n,r){const i=li(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ri(i);const c=Dl(t,a,n);if(!c)return"";const u=c[1];let f=c[0];return f+=`constraint inverted_killer_cage_p(${o}, ${u});
`,f}function A3(t,e,n,r){return Zd(t,e,n,r,"sum_cage_p")}function S3(t,e,n,r){return _p(e,r,"parity_balance_cage_p")}function N3(t,e,n,r){return _p(e,r,"sum_cage_look_and_say_p")}function x3(t,e,n,r){return Zd(t,e,n,r,"divisible_killer_cage_p")}function R3(t,e,n,r){return Zd(t,e,n,r,"spotlight_cage_p")}function T3(t,e,n,r){const o=`[${li(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function D3(t,e,n,r){const o=`[${li(e,r).join(",")}]`,a=r.value;let c="";const u=Dl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const f=r.cells,g=jt(e,f),p=[];for(const m of g)e.getOrthogonallyAdjacentCells(m).forEach(I=>{!g.includes(I)&&!p.includes(I)&&p.push(I)});const h=be(p,K.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${h});
`,c}function fp(t,e,n,r,i){const o=jt(e,r.cells),a=be(o,K.BOARD),c=be(o,K.YIN_YANG),u=r.value;if(u){const f=parseInt(u);return`constraint ${i}(${a}, ${c}, ${f});
`}return""}function k3(t,e,n,r){return fp(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function G3(t,e,n,r){return fp(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function M3(t,e,n,r){const i=jt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function U3(t,e,n,r){const i=jt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function $3(t,e){let n="";const r=Kd(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(f=>[c,f]))){const u=`[${li(t,o).join(",")}]`,g=`[${li(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${g});
`}return n}const F3=new Map([[d.KILLER_CAGE,y3],[d.INVERTED_KILLER_CAGE,L3],[d.SUM_CAGE,A3],[d.PARITY_BALANCE_CAGE,S3],[d.SUM_CAGE_LOOK_AND_SAY,N3],[d.DIVISIBLE_KILLER_CAGE,x3],[d.SPOTLIGHT_CAGE,R3],[d.UNIQUE_DIGITS_CAGE,T3],[d.VAULTED_CAGE,D3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,k3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,G3],[d.DOUBLERS_KILLER_CAGE,M3],[d.NEGATORS_KILLER_CAGE,U3]]);function P3(t,e,n,r){let i="";const o=F3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=$3(e,a);i+=c}return i}function H3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),f=Math.floor(r+c);return t.getCell(u,f)}function B3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=H3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function W3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],f=u.cell,g=c+1,[p,h,m]=B3(e,f),E=be(p,K.GALAXY_REGIONS),I=be(h,K.GALAXY_REGIONS),b=be(m,K.GALAXY_REGIONS);r+=`% galaxy ${g}
`,r+=`constraint galaxy_center_p(${E}, ${I}, ${b}, ${g});
`,r+=`constraint connected_region(${K.GALAXY_REGIONS}, ${g});
`;const w=u.value;if(!w)continue;const A=parseInt(w);r+=`constraint galaxy_sum_p(${K.BOARD}, ${K.GALAXY_REGIONS}, ${A}, ${g});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${K.GALAXY_REGIONS}, ${a});
`,r}function z3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Y3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=z3(t,c,n);if(!u)return"";const f=u[1];let g=u[0],p=[];if(o%1===0&&a%1===0?p=Va(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(p=Xa(i).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0)),!p.length)return"";const h=be(p,K.BOARD),m=be(p,K.YIN_YANG);return g+=`constraint conditional_sum_f(${h}, ${m}, 1) == ${f};
`,g}const j3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,Y3]]),K3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,W3]]);function V3(t,e,n,r){let i="";const o=K3.get(n),a=j3.get(n);if(a)for(const[c,u]of Object.entries(r)){const f=a(t,e,c,u);i+=f}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function yh(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return dt(n)}function X3(t,e){const r="["+yh(t,e.cells).join(",")+"]",o="["+yh(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const q3=new Map([[d.CLONE_REGION,X3]]);function Z3(t,e,n,r){return Tl(e,n,r,q3)}function Qd(t,e){const n=jt(t,e.cells);return dt(n)}function Jd(t,e,n){const i=`[${Qd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function gp(t,e,n,r=""){const o=`[${Qd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function Q3(t,e,n,r){const o=`[${Qd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=cp(a);if(!c)return"";let u="";for(const g of c){const p=parseInt(g);Number.isNaN(p)&&!t.hasVariable(g)&&(u+=`var int: ${g};
`,t.addVariable(g))}const f="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${f});
`,u}function J3(t,e,n,r){return gp(e,r,"corner_sum_p")}function e5(t,e,n,r){return gp(e,r,"corner_even_count_p")}function t5(t,e,n,r){return Jd(e,r,"corner_sum_of_three_equals_the_other_p")}function n5(t,e,n,r){return Jd(e,r,"equal_diagonal_differences_p")}function r5(t,e,n,r){return Jd(e,r,"product_square_p")}const i5=new Map([[d.QUADRUPLE,Q3],[d.CORNER_SUM,J3],[d.CORNER_EVEN_COUNT,e5],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,t5],[d.PRODUCT_SQUARE,r5],[d.EQUAL_DIAGONAL_DIFFERENCES,n5]]);function o5(t,e,n,r){let i="";const o=i5.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function kl(t,e){const n=jt(t,e.cells);return dt(n)}function s5(t,e,n){const r=kl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function a5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Gl(t,e,n,r,i,o=""){var m;const a=kl(e,r),[c,u]=a,f=(m=r.value)!=null&&m.length?r.value:o,g=a5(t,f,n);if(!g)return"";const p=g[1];let h=g[0];return h+=`constraint ${i}(${c}, ${u}, ${p});
`,h}function l5(t,e,n,r){const i=kl(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function c5(t,e,n,r){return Gl(t,e,n,r,"ratio_p","2")}function u5(t,e,n,r){return Gl(t,e,n,r,"abs_difference","1")}function Lh(t,e,n,r){const i=kl(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function d5(t,e,n,r){return Gl(t,e,n,r,"edge_sum_p")}function _5(t,e,n,r){return Gl(t,e,n,r,"edge_modulo_p")}function f5(t,e,n,r){return s5(e,r,"edge_factor_p")}function g5(t,e,n,r){const i=jt(e,r.cells),[o,a]=dt(i),[c,u]=i;let f="";if(c.r==u.r){const h=e.getRow(c.r)[0];f=Ae(h)}else if(c.c==u.c){const h=e.getCol(c.c)[0];f=Ae(h)}return f?`constraint abs(${o} - ${a}) == ${f};
`:""}function h5(t,e,n,r){const i=jt(e,r.cells),[o,a]=dt(i),c=Bi(i,K.YIN_YANG),[u,f]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${f});
`}function v5(t,e,n,r){const i=jt(e,r.cells),[o,a]=dt(i),c=Bi(i,K.YIN_YANG),[u,f]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${f});
`}function Ml(t,e,n){const r=jt(t,e.cells),i=Bi(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function p5(t,e,n,r){return Ml(e,r,K.UNKNOWN_REGIONS)}function m5(t,e,n,r){return Ml(e,r,K.FILLOMINO_REGIONS)}function E5(t,e,n,r){return Ml(e,r,K.SUGURU_REGIONS)}function C5(t,e,n,r){return Ml(e,r,K.CAVE_SHADING)}const I5=new Map([[d.XV,l5],[d.DIFFERENCE,u5],[d.RATIO,c5],[d.EDGE_INEQUALITY,Lh],[d.ONE_WAY_DOOR,Lh],[d.EDGE_SUM,d5],[d.EDGE_MODULO,_5],[d.EDGE_FACTOR,f5],[d.XY_DIFFERENCES,g5],[d.YIN_YANG_KROPKI,h5],[d.YIN_YANG_WHITE_KROPKI,v5],[d.FILLOMINO_REGION_BORDER,m5],[d.UNKNOWN_REGION_BORDER,p5],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,E5],[d.EDGE_CAVE_ONE_OF_EACH,C5]]);function b5(t,e,n,r){let i="";const o=I5.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function O5(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Ps(t,e,n=!1){let r=jt(t,e.cells);return n&&(r=[...new Set(r)]),dt(r)}function pt(t,e,n,r=!1){const o=`[${Ps(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function gr(t,e,n,r,i,o=""){var h;const c=`[${Ps(e,r).join(",")}]`,u=(h=r.value)!=null&&h.length?r.value:o,f=O5(t,u,n);if(!f)return"";const g=f[1];let p=f[0];return p+=`constraint ${i}(${c}, ${g});
`,p}function e_(t,e,n){let i=e.cells.map(p=>t.getCell(p.r,p.c)).filter(p=>!!p),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${dt(i).join(",")}]`,u=e.value;if(!u)return"";const f=parseInt(u);return`constraint ${n}(${c}, ${f}, ${o});
`}function w5(t,e,n,r){return pt(e,r,"renban",!0)}function y5(t,e,n,r){return pt(e,r,"double_renban_p",!0)}function L5(t,e,n,r){return pt(e,r,"renrenbanban_p",!0)}function A5(t,e,n,r){return pt(e,r,"knabner_p",!0)}function S5(t,e,n,r){return pt(e,r,"renban_or_nabner_line_p",!0)}function N5(t,e,n,r){return pt(e,r,"out_of_order_consecutive_line_p")}function x5(t,e,n,r){return gr(t,e,n,r,"whispers","5")}function R5(t,e,n,r){return`constraint whispers(${`[${Ps(e,r).join(",")}]`}, 4);
`}function T5(t,e,n,r){return pt(e,r,"strictly_increasing")}function D5(t,e,n,r){return pt(e,r,"fuzzy_thermo_p")}function k5(t,e,n,r){return pt(e,r,"increasing")}function G5(t,e,n,r){return gr(t,e,n,r,"custom_thermo_p")}function M5(t,e,n,r){return pt(e,r,"palindrome")}function U5(t,e,n,r){return gr(t,e,n,r,"sum_line_p")}function $5(t,e,n,r){return pt(e,r,"xv_line_p")}function F5(t,e,n,r){return gr(t,e,n,r,"at_least_x_line_p","10")}function P5(t,e,n,r){return gr(t,e,n,r,"product_line_p")}function H5(t,e,n,r){return gr(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function B5(t,e,n,r){return pt(e,r,"adjacent_multiples_line_p")}function W5(t,e,n,r){return pt(e,r,"index_line_p")}function z5(t,e,n,r){return pt(e,r,"zipper_line_p")}function Y5(t,e,n,r){return e_(e,r,"segmented_sum_line_p")}function j5(t,e,n,r){return pt(e,r,"segmented_sum_and_renban_line_p")}function K5(t,e,n,r){return e_(e,r,"n_consecutive_renban_line_p")}function V5(t,e,n,r){return e_(e,r,"n_consecutive_fuzzy_sum_line_p")}function X5(t,e,n,r){const i=jt(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const f=i[u],g=e.getRow(f.r),p=be(g,K.BOARD),h=`cycle_${n}_${u}`;a.push(h);const m=f.c+1;o+=`var int: ${h} = cycle_order_f(${p}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function q5(t,e,n,r){return pt(e,r,"adjacent_differences_count_line_p")}function Z5(t,e,n,r){return pt(e,r,"same_parity_line_p")}function Q5(t,e,n,r){return gr(t,e,n,r,"renban_or_whispers_p","5")}function J5(t,e,n,r){return pt(e,r,"alldifferent",!0)}function eG(t,e,n,r){return pt(e,r,"repeated_digits_line_p")}function tG(t,e,n,r){return pt(e,r,"superfuzzy_arrow_p")}function nG(t,e,n,r){return pt(e,r,"ambiguous_arrow_p",!0)}function rG(t,e,n,r){return pt(e,r,"headless_arrow_p")}function iG(t,e,n,r){return gr(t,e,n,r,"unimodular_line_p","3")}function oG(t,e,n,r){return gr(t,e,n,r,"modular_line_p","3")}function sG(t,e,n,r){return gr(t,e,n,r,"modular_or_unimodular_line_p","3")}function aG(t,e,n,r){return pt(e,r,"arithmetic_sequence_line_p")}function lG(t,e,n,r){return pt(e,r,"odd_even_oscillator_line_p")}function cG(t,e,n,r){return gr(t,e,n,r,"high_low_oscillator_line_p","5")}function uG(t,e,n,r){return pt(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function dG(t,e,n,r){return pt(e,r,"look_and_say_line_p",!0)}function _G(t,e,n,r){const i=jt(e,r.cells);function o(p){const h=[];let m=null;for(const E of p)E.r!=m?(h.push([E]),m=E.r):h[h.length-1].push(E);return h}const a=o(i);if(a.length<2)return"";const c=a[0],f=`[${dt(c).join(",")}]`;let g="";for(let p=1;p<a.length;p++){const h=a[p],E=`[${dt(h).join(",")}]`;g+=`constraint sum(${E}) == sum(${f});
`}return g}function fG(t,e,n,r){return pt(e,r,"between_line_p")}function gG(t,e,n,r){return pt(e,r,"tightrope_line_p")}function hG(t,e,n,r){return pt(e,r,"double_arrow_p")}function vG(t,e,n,r){return pt(e,r,"split_peas_p")}function pG(t,e,n,r){return pt(e,r,"parity_count_line_p")}function mG(t,e,n,r){return pt(e,r,"product_of_ends_equals_sum_of_line_p")}function hp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function EG(t,e,n,r){let i="";const o=jt(e,r.cells),a=hp(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const g=`constraint sum(${be(u,K.BOARD)}) == ${c};
`;i+=g}return i}function CG(t,e,n,r){return`constraint entropic_line_p(${`[${Ps(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function IG(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Ps(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function bG(t,e,n,r){return pt(e,r,"peapods_p")}function OG(t,e,n,r){const i=jt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function wG(t,e,n,r){const i=jt(e,r.cells),o=be(i,K.BOARD),a=be(i,K.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function t_(t,e,n){const r=jt(t,e.cells),i=be(r,K.BOARD),o=be(r,K.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function yG(t,e,n,r){return t_(e,r,"yin_yang_unshaded_entropic_line_p")}function LG(t,e,n,r){return t_(e,r,"yin_yang_indexing_line_coloring_p")}function AG(t,e,n,r){return t_(e,r,"yin_yang_region_sum_line_p")}function SG(t,e,n,r){const i=jt(e,r.cells),o=be(i,K.VALUES_GRID),a=be(i,K.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function n_(t,e,n){const r=jt(t,e.cells),i=be(r,K.VALUES_GRID);return`constraint ${n}(${i});
`}function NG(t,e,n,r){return n_(e,r,"between_line_p")}function xG(t,e,n,r){return n_(e,r,"double_arrow_p")}function RG(t,e,n,r){return n_(e,r,"strictly_increasing")}function TG(t,e,n,r){const i=jt(e,r.cells),o=hp(i);if(o.sort((f,g)=>g.length-f.length),o.length<=1)return"";let a="";const c=o[0],u=be(c,K.VALUES_GRID);for(const f of o.slice(1)){const g=be(f,K.VALUES_GRID),p=`constraint subset_p(${u}, ${g});
`;a+=p}return a}const DG=new Map([[d.THERMOMETER,T5],[d.FUZZY_THERMOMETER,D5],[d.SLOW_THERMOMETER,k5],[d.CUSTOM_THERMOMETER,G5],[d.RENBAN_LINE,w5],[d.DOUBLE_RENBAN_LINE,y5],[d.RENRENBANBAN_LINE,L5],[d.NABNER_LINE,A5],[d.WHISPERS_LINE,x5],[d.DUTCH_WHISPERS,R5],[d.RENBAN_OR_WHISPERS_LINE,Q5],[d.RENBAN_OR_NABNER_LINE,S5],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,N5],[d.N_CONSECUTIVE_RENBAN_LINE,K5],[d.PALINDROME,M5],[d.SUM_LINE,U5],[d.PRODUCT_LINE,P5],[d.XV_LINE,$5],[d.AT_LEAST_X_LINE,F5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,H5],[d.SAME_PARITY_LINE,Z5],[d.ADJACENT_MULTIPLES_LINE,B5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,q5],[d.LOOK_AND_SAY_LINE,dG],[d.ROW_SUM_LINE,_G],[d.INDEX_LINE,W5],[d.ZIPPER_LINE,z5],[d.SEGMENTED_SUM_LINE,Y5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,j5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,V5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,uG],[d.SUPERFUZZY_ARROW,tG],[d.AMBIGUOUS_ARROW,nG],[d.HEADLESS_ARROW,rG],[d.ARITHMETIC_SEQUENCE_LINE,aG],[d.ODD_EVEN_OSCILLATOR_LINE,lG],[d.HIGH_LOW_OSCILLATOR_LINE,cG],[d.UNIQUE_VALUES_LINE,J5],[d.REPEATED_DIGITS_LINE,eG],[d.UNIMODULAR_LINE,iG],[d.MODULAR_LINE,oG],[d.MODULAR_OR_UNIMODULAR_LINE,sG],[d.REGION_SUM_LINE,EG],[d.ENTROPIC_LINE,CG],[d.ENTROPIC_OR_MODULAR_LINE,IG],[d.ROW_CYCLE_THERMOMETER,X5],[d.PEAPODS,bG],[d.BETWEEN_LINE,fG],[d.TIGHTROPE_LINE,gG],[d.DOUBLE_ARROW_LINE,hG],[d.SPLIT_PEAS,vG],[d.PARITY_COUNT_LINE,pG],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,mG],[d.DOUBLERS_THERMOMETER,RG],[d.DOUBLERS_BETWEEN_LINE,NG],[d.DOUBLERS_DOUBLE_ARROW_LINE,xG],[d.INDEXER_CELLS_REGION_SUBSET_LINE,TG],[d.YIN_YANG_SHADED_WHISPERS_LINE,OG],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,yG],[d.YIN_YANG_UNSHADED_MODULAR_LINE,wG],[d.YIN_YANG_REGION_SUM_LINE,AG],[d.YIN_YANG_INDEXING_LINE_COLORING,LG],[d.GOLDILOCKS_ZONE_REGION_SUM,SG]]);function kG(t,e,n,r){let i="";const o=DG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Hs(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return dt(i)}function Wi(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function or(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,n).join(",")}]`,u=n.value,f=Wi(t,u,i,o);if(!f)return"";const g=f[1];let p=f[0];return p+=`constraint ${r}(${c}, ${g});
`,p}function GG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,g=Math.min(...f),p=Math.max(...f),h=Wi(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${g}, ${p});
`,E}function MG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${Hs(e,r).join(",")}]`,u=r.value,f=t.puzzle.valid_digits,g=Math.min(...f),p=Math.max(...f),h=Wi(t,u,i,o);if(!h)return"";const m=h[1];let E=h[0];const I=`var_bool_${n}_0`,b=`var_bool_${n}_1`;return E+=`var bool: ${I} = sandwich_sum_p(${c}, ${m}, ${g}, ${p});
`,E+=`var bool: ${b} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${I}, ${b});
`,E}function UG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=Hs(e,r),c=`[${a.join(",")}]`,u=a[0],f=r.value,g=Wi(t,f,i,o);if(!g)return"";const p=g[1];let h=g[0];return h+=`constraint x_index_p(${c}, ${u}, ${p});
`,h}function $G(t,e,n,r){return or(t,e,r,"x_sum_p")}function FG(t,e,n,r){return or(t,e,r,"shortsighted_x_sum_p")}function PG(t,e,n,r){return or(t,e,r,"broken_x_sum_p")}function HG(t,e,n,r){return or(t,e,r,"shifted_x_sum_p")}function BG(t,e,n,r){return or(t,e,r,"skyscrapers_p")}function WG(t,e,n,r){return or(t,e,r,"x_sum_skyscrapers_p")}function zG(t,e,n,r){return or(t,e,r,"battlefield_p")}function YG(t,e,n,r){return or(t,e,r,"rising_streak_p")}function jG(t,e,n,r){return or(t,e,r,"outside_consecutive_sum_p")}function KG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=be(a,K.BOARD),u=be(a,K.CELL_CENTER_LOOP),f=r.value;if(f){const g=parseInt(f);return`constraint loopwhiches_p(${c}, ${u}, ${g});
`}return""}function VG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=be(c,K.BOARD),f=be(c,K.UNKNOWN_REGIONS),g=r.value,p=Wi(t,g,i,o);if(!p)return"";const h=p[1];let m=p[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${f}, ${h});
`,m}function XG(t,e,n,r){return or(t,e,r,"little_killer_sum_p")}function qG(t,e,n,r){return or(t,e,r,"little_killer_product_p")}function ZG(t,e,n,r){return or(t,e,r,"x_omit_little_killer_sum_p")}function QG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=be(a,K.BOARD),u=be(a,K.YIN_YANG),f=r.value;if(f){const g=parseInt(f);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${g});
`}return""}function JG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=be(a,K.VALUES_GRID),u=r.value;if(u){const f=parseInt(u);return`constraint little_killer_sum_p(${c}, ${f});
`}return""}function eM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=be(c,K.PENTOMINO_REGIONS),f=r.value,g=Wi(t,f,i,o);if(!g)return"";const p=g[1];let h=g[0];return h+=`constraint pentomino_border_count_p(${u}, ${p});
`,h}function tM(t,e,n){let r="";const i="mystery_sandwich_a",o="mystery_sandwich_b";r+=`var int: ${i};
`,r+=`var int: ${o};
`,r+=`constraint member(ALLOWED_DIGITS, ${i});
`,r+=`constraint member(ALLOWED_DIGITS, ${o});
`,r+=`constraint ${i} <= ${o};
`;for(const a of Object.values(n)){const c=a.cell,u=e.getCell(c.r,c.c),g=`[${Hs(e,a).join(",")}]`,p=a.value??"",h=Wi(t,p,c,u);if(!h)continue;const m=h[1];r+=h[0],r+=`constraint sandwich_sum_p(${g}, ${m}, ${i}, ${o});
`}return r}const nM=new Map([[d.SANDWICH_SUM,GG],[d.X_SUM,$G],[d.SHORTSIGHTED_X_SUM,FG],[d.BROKEN_X_SUM,PG],[d.SHIFTED_X_SUM,HG],[d.SKYSCRAPERS,BG],[d.X_SUM_SKYSCRAPERS,WG],[d.X_INDEX,UG],[d.BATTLEFIELD,zG],[d.SANDWICH_SUM_XOR_X_SUM,MG],[d.RISING_STREAK,YG],[d.OUTSIDE_CONSECUTIVE_SUM,jG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,QG],[d.LOOPWICHES,KG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,VG],[d.PENTOMINO_BORDER_COUNT,eM],[d.LITTLE_KILLER_SUM,XG],[d.LITTLE_KILLER_PRODUCT,qG],[d.X_OMIT_LITTLE_KILLER_SUM,ZG],[d.NEGATORS_LITTLE_KILLER_SUM,JG]]),rM=new Map([[d.MYSTERY_SANDWICH_SUM,tM]]);function iM(t,e,n,r){let i="";const o=nM.get(n),a=rM.get(n);if(o)for(const[c,u]of Object.entries(r)){const f=o(t,e,c,u);i+=f}else if(a){const c=a(t,e,r);i+=c}return i}function oM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=be(o,K.SASHIGANE),c=be(o,K.SASHIGANE_BENDS),u=Ae(r),f=gt(r,K.SASHIGANE);let g=`constraint sashigane_arrow_points_to_bend_p(${u}, ${f}, ${a}, ${c});
`;return g+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,g}function sM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+dt(o).join(",")+"]",u=be(o,K.CELL_CENTER_LOOP),f=Ae(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${f});
`}const aM=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,oM],[d.THERMO_SIGHTLINE_LOOP_ARROW,sM]]);function lM(t,e,n,r){return Tl(e,n,r,aM)}function vp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Ae(i);return`constraint ${n}(${o});
`}const cM={allow_var:!0,allow_interval:!0,allow_int_list:!1};function r_(t,e,n,r=cM){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function pp(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Ae(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function Uo(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),u=Rl(t,o).map(p=>be(p,n)),f=gt(o,n);return`constraint ${r}(${u.join(", ")}, ${f}, ${a});
`}function uM(t,e,n,r){return vp(e,r,"odd_p")}function dM(t,e,n,r){return vp(e,r,"even_p")}function _M(t,e,n,r){return pp(e,r,"low_digit_p","5")}function fM(t,e,n,r){return pp(e,r,"high_digit_p","5")}function mp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Ae(i),a=t.getNeighboorCells(i),c=be(a,K.BOARD);return`constraint ${n}(${c}) == ${o};
`}function gM(t,e,n,r){return mp(e,r,"odd_count")}function hM(t,e,n,r){return mp(e,r,"even_count")}function vM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o);c.push(o);const u=be(c,K.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function pM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${be(c,K.BOARD)}, ${a});
`}function mM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${be(c,K.BOARD)}, ${a});
`}function EM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=be(a,K.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function CM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=be(a,K.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function IM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=o.r+1,u=o.c+1;if(o.region!==null){const g=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${g};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function bM(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),f=e.getCell(i.r,i.c+1);if(!a||!c||!u||!f)return"";const g=Ae(a),p=Ae(c),h=Ae(u),m=Ae(f);return`constraint groups_opposite_parity_p([${g},${p}], [${h},${m}]);
`}function i_(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Ae(i),[a,c,u,f]=jd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${f});
`}function OM(t,e,n,r){return i_(e,r,"is_watchtower_p")}function wM(t,e,n,r){return i_(e,r,"is_not_watchtower_p")}function yM(t,e,n,r){return i_(e,r,"farsight_p")}function LM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),[c,u,f,g]=jd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${f}, ${g}, 9);
`}function AM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getRow(o.r),u="["+dt(c).join(",")+"]",f=e.getCol(o.c),g="["+dt(f).join(",")+"]",[p,h]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${g}, ${p}, ${h}, ${a});
`}function Ep(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,f=t.getCell(u.r,u.c);if(!f)continue;const g=Ae(f),p=t.getOrthogonallyAdjacentCells(f).filter(E=>!a.has(E)),h=be(p,K.BOARD),m=`constraint ${n}(${h}, ${g});
`;i+=m}return i}function SM(t,e,n){return Ep(e,n,"maximum_p")}function NM(t,e,n){return Ep(e,n,"minimum_p")}function xM(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${dt([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function RM(t,e,n){const r=Object.values(n);let i="";const o=r.map(h=>h.cell),a=new Set(o.map(h=>e.getCell(h.r,h.c)).filter(h=>!!h)),c=e.getAllCells().filter(h=>!a.has(h)),f=`${dt([...a]).join(`,
	`)}`,p=`${dt([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${f}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${p}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function TM(t,e,n){const r=Object.values(n);let i="";const o=r.map(p=>p.cell),a=new Set(o.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p)),u=`${dt([...a]).join(`,
	`)}`,g=`${Bi([...a],K.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${K.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${g}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${K.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const p of e.getAllCells()){if(a.has(p))continue;const h=gt(p,K.COUNTING_CIRCLES_COLORS);i+=`constraint ${h} == 0;
`}for(const p of r){const h=p.cell,m=e.getCell(h.r,h.c);if(!m)continue;const E=Ae(m),I=gt(m,K.COUNTING_CIRCLES_COLORS),b=p.value;b?i+=`constraint ${I} == ${b};
`:i+=`constraint ${I} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${I}) == ${E};
`}return i+=`
`,i}function DM(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${dt([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function kM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o);return`constraint seen_even_count_p(${Rl(e,o).map(g=>be(g,K.BOARD)).join(", ")}, ${a});
`}function GM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o);return`constraint seen_odd_count_p(${Rl(e,o).map(g=>be(g,K.BOARD)).join(", ")}, ${a});
`}function MM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getCellsByKnightMove(o),u=be(c,K.BOARD),f=r.value??"5",g=r_(t,f,n);if(!g)return"";let p="";const h=g[1];return p+=g[0],p+=`constraint cell_knights_whisper_p(${a}, ${u}, ${h});
`,p}function UM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${be(u,K.YIN_YANG)}, ${a});
`}function $M(t,e,n,r){return Uo(e,r,K.YIN_YANG,"yin_yang_seen_unshaded_p")}function FM(t,e,n,r){return Uo(e,r,K.YIN_YANG,"yin_yang_seen_shaded_p")}function PM(t,e,n,r){return Uo(e,r,K.YIN_YANG,"yin_yang_seen_same_shade_p")}function HM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=gt(o,K.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),f=be(u,K.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${f});
`}function BM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o);return`constraint count(${be(c,K.YIN_YANG)}, 1) == ${a};
`}function WM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),f=e.getCol(o.c),g=be(u,K.TWO_CONTIGUOUS_REGIONS),p=be(f,K.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${g}, ${p}, ${a}, ${c});
`}function zM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getRow(o.r),u=e.getCol(o.c),f=be(c,K.UNKNOWN_REGIONS),g=be(u,K.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${f}, ${g}, ${a});
`}function YM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let f=`constraint nurimisaki_unshaded_endpoint_p(${be(c,K.NURIMISAKI)}, ${a});
`;return f+=Uo(e,r,K.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),f}function jM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=gt(o,K.SASHIGANE),u=gt(o,K.SASHIGANE_BENDS);let f=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return f+=`constraint ${u} = true;
`,f}function KM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=gt(o,K.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function VM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${gt(o,K.CELL_CENTER_LOOP)} == 1;
`:""}function XM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${gt(o,K.CELL_CENTER_LOOP)} == 0;
`:""}function qM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${be(u,K.CELL_CENTER_LOOP)}) == ${a};
`}function ZM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=gt(o,K.CAVE_SHADING),u=Rl(e,o),f=[];for(const p of u){const h=be(p,K.CAVE_SHADING);f.push(h)}return`constraint cave_clue_p(${a}, ${c}, ${f[0]}, ${f[1]}, ${f[2]}, ${f[3]});
`}function QM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=Ae(o),g=gt(o,K.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const p=e.getNeighboorCells(o),h=be(p,K.BOARD),m=be(p,K.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${h}, ${m}, ${g});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${f});
`;const E=e.getCellsByKnightMove(o),I=be(E,K.BOARD),b=be(E,K.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${I}, ${b}, ${g});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${f});
`;const w=[Fe.NE,Fe.NW,Fe.SE,Fe.SW],A=[];for(const F of w)e.getCellsInDirection(o.r,o.c,F).forEach(H=>A.push(H));const k=be(A,K.BOARD),G=be(A,K.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${G}, ${g});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${f});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function JM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const f=Ae(o),g=gt(o,K.UNKNOWN_REGIONS),p=e.getOrthogonallyAdjacentCells(o),h=be(p,K.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${h}, ${g}) >= ${c};
`;const m=[Fe.N,Fe.S,Fe.E,Fe.W],E=[];for(const I of m){const b=e.getCellsInDirection(o.r,o.c,I);if(!b.length)continue;const w=be(b,K.BOARD),A=be(b,K.UNKNOWN_REGIONS),k=`in_arrow_${n}_${I}`,G=`in_arrow_${n}_${I}[1]`;E.push(G),u+=`array[index_set(${w})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${A}, ${k}, ${f}, ${g});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function eU(t,e,n,r){return Uo(e,r,K.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function tU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function nU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function rU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${gt(o,K.CONNECT_FOUR)});
`:""}function iU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${gt(o,K.CONNECT_FOUR)});
`:""}function oU(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const f=a.value;if(!f)continue;const g=r_(t,f,o);if(!g)continue;const p=g[1];r+=g[0];const h=gt(u,K.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${K.BOARD}, ${K.NURIKABE_REGIONS}, ${h}, ${p});
`,i+=1}return r+=`constraint count_unique_values(array1d(${K.NURIKABE_REGIONS})) == ${i+1};
`,r}function sU(t,e,n,r){return Uo(e,r,K.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function aU(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Ae(o),c=gt(o,K.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${K.NURIKABE_REGIONS}, ${c}, ${a});
`}function lU(t,e,n){let r="";const i=Kd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[f,g]of u.flatMap((p,h)=>u.slice(h+1).map(m=>[p,m]))){const p=f.cell,h=g.cell,m=e.getCell(p.r,p.c),E=e.getCell(h.r,h.c);if(!m||!E)continue;const I=gt(m,K.BOARD),b=gt(E,K.BOARD);r+=`constraint ${I} == ${b};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=be(a,K.BOARD);return r+=`constraint alldifferent(${c});
`,r}function cU(t,e,n){const r=Object.values(n);let i="";const o=r.map(f=>f.cell),a=new Set(o.map(f=>e.getCell(f.r,f.c)).filter(f=>!!f)),u=`${Bi([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const f of Object.values(n)){const g=f.cell,p=e.getCell(g.r,g.c);if(!p)continue;const h=Ae(p),m=gt(p,K.SHIKAKU_REGIONS),E=gt(p,K.SHIKAKU_WIDTH),I=gt(p,K.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${K.SHIKAKU_REGIONS}, ${m}, ${h}, ${E}, ${I});
`}return i}function uU(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${Bi([...a],K.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${K.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const f={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[g,p]of Object.entries(n)){const h=p.cell,m=e.getCell(h.r,h.c);if(!m)continue;const E=gt(m,K.SHIKAKU_REGIONS),I=p.value??"",b=r_(t,I,g,f);if(!b)continue;const w=b[1];i+=b[0],i+=`constraint shikaku_region_sum_p(${K.BOARD}, ${K.SHIKAKU_REGIONS}, ${E}, ${w});
`}return i}const dU=new Map([[d.ODD,uM],[d.EVEN,dM],[d.LOW_DIGIT,_M],[d.HIGH_DIGIT,fM],[d.ODD_MINESWEEPER,gM],[d.EVEN_MINESWEEPER,hM],[d.DIAGONALLY_ADJACENT_SUM,mM],[d.ORTHOGONAL_SUM,pM],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,vM],[d.FRIENDLY_CELL,IM],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,bM],[d.WATCHTOWER,OM],[d.NOT_WATCHTOWER,wM],[d.FARSIGHT,yM],[d.RADAR,LM],[d.INDEXING_COLUMN,EM],[d.INDEXING_ROW,CM],[d.SANDWICH_ROW_COL_COUNT,AM],[d.SEEN_EVEN_COUNT,kM],[d.SEEN_ODD_COUNT,GM],[d.CELL_KNIGHT_WHISPERS,MM],[d.YIN_YANG_MINESWEEPER,UM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,$M],[d.YIN_YANG_SEEN_SHADED_CELLS,FM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,PM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,HM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,BM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,WM],[d.SEEN_REGION_BORDERS_COUNT,zM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,YM],[d.NURIKABE_SEEN_WATERWAY_CELLS,sU],[d.NURIKABE_ISLAND_SIZE_CELL,aU],[d.SASHIGANE_BEND_REGION_COUNT,jM],[d.SASHIGANE_REGION_SUM,KM],[d.CELL_ON_THE_LOOP,VM],[d.CELL_NOT_ON_THE_LOOP,XM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,qM],[d.CAVE_CLUE,ZM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,QM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,JM],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,eU],[d.DIRECTED_PATH_START,tU],[d.DIRECTED_PATH_END,nU],[d.CONENCT_FOUR_RED,rU],[d.CONNECT_FOUR_YELLOW,iU]]),_U=new Map([[d.MAXIMUM,SM],[d.MINIMUM,NM],[d.COUNTING_CIRCLES,xM],[d.REVERSE_COUNTING_CIRCLES,RM],[d.COLORED_COUNTING_CIRCLES,TM],[d.UNIQUE_CELLS,DM],[d.SHIKAKU_REGION_SIZE,cU],[d.SHIKAKU_REGION_SUM,uU],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,oU],[d.TELEPORT,lU]]);function fU(t,e,n,r){let i="";const o=dU.get(n),a=_U.get(n);if(o)for(const[c,u]of Object.entries(r)){const f=o(t,e,c,u);i+=f}else if(a){const c=a(t,e,r);i+=c}return i}function gU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=gt(r,K.UNKNOWN_REGIONS),a=e.directions,c=[];for(const g of a){const p=t.getCellsInDirection(r.r,r.c,g),h=be(p,K.UNKNOWN_REGIONS);c.push(h)}return`constraint ${c.map(g=>`count_different(${g}, ${o})`).join(" + ")} == ${i};
`}function hU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=gt(r,K.YIN_YANG),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),g=be(f,K.BOARD),p=be(f,K.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${g}, ${p}) == ${i};
`}return c}function vU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),f=be(u,K.YIN_YANG);a+=`constraint count(${f}, 1) == ${i};
`}return a}function pU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=gt(r,K.YIN_YANG),a=e.directions,c=[];for(const f of a){const g=t.getCellsInDirection(r.r,r.c,f),p=be(g,K.YIN_YANG),h=be(g,K.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${p}, ${h})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function mU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions,a=[];for(const u of o){const f=t.getCellsInDirection(r.r,r.c,u),p=`count(${be(f,K.NURIKABE_SHADING)}, 1)`;a.push(p)}return`constraint ${a.join(" + ")} = ${i};
`}function EU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions,a=[];for(const u of o){const f=t.getCellsInDirection(r.r,r.c,u),p=`count_loop_vars_f(${be(f,K.CELL_CENTER_LOOP)})`;a.push(p)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function CU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=gt(r,K.GALAXY_REGIONS),a=e.directions,c=[];for(const f of a){const g=t.getCellsInDirection(r.r,r.c,f),h=`count(${be(g,K.GALAXY_REGIONS)}, ${o})`;c.push(h)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function IU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),g="["+dt(u).join(",")+"]";a+=`constraint hot_arrows_p(${g}, ${i});
`}return a}function bU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),f=be(u,K.BOARD);a+=`constraint cold_arrows_p(${f}, ${i});
`}return a}function OU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=gt(r,K.CONNECT_FOUR),a=e.directions,c=[];for(const g of a){const p=t.getCellsInDirection(r.r,r.c,g);c.push(...p)}return c.length===0?"":`constraint count(${be(c,K.CONNECT_FOUR)}, ${o}) == ${i};
`}function wU(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Ae(r),o=gt(r,K.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const f=t.getCellsInDirection(r.r,r.c,u),g=be(f,K.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${g});
`}return c}const yU=new Map([[d.HOT_ARROWS,IU],[d.COLD_ARROWS,bU],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,gU],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,hU],[d.LOOP_CELL_COUNT_ARROWS,EU],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,pU],[d.YIN_YANG_COUNT_SHADED_CELLS,vU],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,CU],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,mU],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,OU],[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,wU]]);function LU(t,e,n,r){return Tl(e,n,r,yU)}function AU(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function SU(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function NU(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}function xU(t,e){const n=e.value;if(!n)return"";const r=parseInt(n),i=[...t.getUsedRegions()];i.sort();const o=i.length;return`constraint lits_max_tetromino_sum_p(${K.BOARD}, ${K.LITS_GRID}, ${r}, 0..${o});
`}const RU=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,AU],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,SU],[d.FORBIDDEN_KNIGHT_SUM,NU],[d.LITS_MAX_TETROMINO_SUM,xU]]);function TU(t,e,n,r){return Tl(e,n,r,RU)}const DU=[V3,fU,lM,LU,b5,o5,kG,w3,P3,iM,Z3,TU];function kU(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of DU){let u=c(e,i,o,a);u=ft(u,`${o}`),n+=u}return n}function GU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function MU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function UU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function $U(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function FU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function PU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows),a=St.range(1,o+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${o}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${o});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function HU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=K.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=St.range(1,a+1);let u="";const f="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${o};
`,u+=`constraint numbered_chaos_construction_p(${K.BOARD}, ${o}, ${f}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${K.BOARD}, ${o}, ALLOWED_DIGITS, ${f});
`,u}function BU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function WU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function zU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function YU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function jU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function Cp(t,e,n){let r="";return r+=`% Exactly ${t} per row 
`,r+=`constraint exactly_n_per_row_p(${n}, ${e}, ${t});
`,r}function Ip(t,e,n){let r="";return r+=`
% Exactly ${t} per column 
`,r+=`constraint exactly_n_per_column_p(${n}, ${e}, ${t});
`,r}function o_(t,e,n,r){const i=t.grid;let o="";if(!t.globalConstraints.get(d.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const f of u){const g=i.getRegion(f),p=be(g,r);o+=`constraint count_eq(${p}, ${n}, ${e});
`}}return o}function ho(t,e,n,r){let i=Cp(e,n,r);return i+=Ip(e,n,r),i+=o_(t,e,n,r),i}function KU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=ho(n,1,!0,K.DOUBLERS),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function VU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=ho(n,1,!0,K.NEGATORS),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function XU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function qU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=ho(n,2,!0,o),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function ZU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${K.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${K.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${o}, ${K.SHIKAKU_WIDTH}, ${K.SHIKAKU_HEIGHT});
`,a}function QU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${K.BOARD}, ${K.SHIKAKU_REGIONS});
`,o}function JU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function e8(t,e){if(t.puzzle.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.CAVE_SHADING,a=K.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${K.BOARD}, ${c});
`,u}function t8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.GALAXY_REGIONS,a=K.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function n8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function r8(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function i8(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=12,a=K.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function o8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.LITS_GRID,u=K.BOARD_REGIONS,f=[...r.getUsedRegions()];f.sort();const g=Math.min(...f),p=Math.max(...f);let h="";h+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,h+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,h+=`array[ROW_IDXS, COL_IDXS] of var 0..${f.length}: ${c};
`,h+=`constraint lits_shading_p(${o});
`,h+=`constraint lits_shading_ids_p(${o}, ${a});
`,h+=`constraint lits_region_and_ids_p(${u}, ${a});
`,h+=`constraint lits_tetromino_shapes_p(${a});
`,h+=`constraint lits_grid_p(${c}, ${u}, ${o}, ${g}..${p});
`,f.length&&(h+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of f){const E=r.getRegion(m),b=`constraint count_eq(${be(E,K.LITS_SHADING)}, 1, 4);
`;h+=b}return h}function s8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,a+=`constraint norinori_p(${K.BOARD_REGIONS}, ${o});
`,r.getUsedRegions().size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`),a+=o_(n,2,1,K.NORINORI_SHADING),a}function a8(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(g=>g.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.LITS_REGIONS,c=K.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const f=r.getUsedRegions();f.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const g of f){const p=r.getRegion(g),m=`constraint count_eq(${be(p,K.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function l8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(f=>f.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.LITS_SHADING,a=K.STAR_BATTLE,c=K.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
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
`,u}function c8(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=K.NORINORI_SHADING,a=K.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=Ip(2,1,a),c+=Cp(2,1,a),c+=o_(n,1,1,a),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${o}, ${a});
`,c}function zt(t,e,n){return t*n+e+1}function u8(t){const e=t.grid;function n(c,u){const f=[],g=zt(c.r,c.c,e.nCols);for(let p=-1;p<=1;p++){const h=zt(u.r+p,u.c,e.nCols);f.push([g,h]),f.push([h,g])}return f}function r(c,u){const f=[],g=zt(c.r,c.c,e.nCols);for(let p=-1;p<=1;p++){const h=zt(u.r,u.c+p,e.nCols);f.push([g,h]),f.push([h,g])}return f}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const f=u[0],p=Va(f).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let h=zt(p[0].r,p[0].c,e.nCols),m=zt(p[3].r,p[3].c,e.nCols);i.push([h,m]),i.push([m,h]),h=zt(p[1].r,p[1].c,e.nCols),m=zt(p[2].r,p[2].c,e.nCols),i.push([h,m]),i.push([m,h])}for(let f=0;f<u.length-1;f++){const g=Jx(Nv(u[f],u[f+1]),.5),h=Xa(g).map(I=>e.getCell(I.r,I.c)).filter(I=>I!==void 0);if(h.length!==2)continue;const[m,E]=h;if(m.r===E.r){let I=n(m,E);i.push(...I),I=n(E,m),i.push(...I)}else if(m.c===E.c){let I=r(m,E);i.push(...I),I=r(E,m),i.push(...I)}}}return i}function d8(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,f]=c,g=o.value,p=zt(u.r,u.c,e.nCols),h=zt(f.r,f.c,e.nCols);g==="<"?n.push([p,h]):g===">"&&n.push([h,p])}return n}function _8(t){const e=[];for(const n of t.getAllCells()){const r=zt(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=zt(o.r,o.c,t.nCols);e.push([r,a])}}return e}function f8(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const f=Kd(a);let g=1;for(const p of f.values())if(!(p.length<=1)){for(const[h,m]of p.flatMap((E,I)=>p.slice(I+1).map(b=>[E,b]))){const E=zt(h.cell.r,h.cell.c,e.nCols),I=zt(m.cell.r,m.cell.c,e.nCols);n.push([E,I]),n.push([I,E]),u[h.cell.r][h.cell.c]=g,u[m.cell.r][m.cell.c]=g}for(const h of p){const m=zt(h.cell.r,h.cell.c,e.nCols);r.push(m)}g++}c=f.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function g8(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=_8(r);const c=u8(n),u=d8(n);c.push(...u);const f=n.localConstraints;a=a.filter(w=>!c.some(A=>w[0]===A[0]&&w[1]===A[1]));const g=f8(n);if(g.tp_edges.length){a.push(...g.tp_edges);const w=up(g.tp_arr),A=g.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${A}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const p=r.nRows*r.nCols,h=a.length,m="["+a.map(w=>w[0]).join(",")+"]",E="["+a.map(w=>w[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${E};
`,o+=`var 1..${p}: dpath_source;
`,o+=`var 1..${p}: dpath_target;
`,o+=`array[1..${p}] of var bool: dpath_ns;
`,o+=`array[1..${h}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let A=0;A<r.nCols-1;A++){const k=r.getCell(w,A),G=r.getCell(w,A+1),F=r.getCell(w+1,A),z=r.getCell(w+1,A+1);if(!k||!G||!F||!z)continue;const H=zt(k.r,k.c,r.nCols),j=zt(G.r,G.c,r.nCols),J=zt(F.r,F.c,r.nCols),ae=zt(z.r,z.c,r.nCols),re=[[H,ae],[ae,H],[j,J],[J,j]].map(ge=>a.findIndex(oe=>ge[0]===oe[0]&&ge[1]===oe[1])).filter(ge=>ge!==-1);if(re.length){const ge=re.map(oe=>`dpath_es[${oe+1}]`).join(",");o+=`constraint sum([${ge}]) <= 1;
`}}const I=f.get(d.TELEPORT),b=I?Object.values(I):[];if(g.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const w of b){const A=w.cell,k=r.getCell(A.r,A.c);if(!k)continue;const G=r.getNeighboorCells(k),F=zt(k.r,k.c,r.nCols),z=[];for(const j of G){if(b.some(Q=>Q.cell.r===j.r&&Q.cell.c==j.c&&Q.value===w.value))continue;const ae=zt(j.r,j.c,r.nCols);z.push([F,ae]),z.push([ae,F])}const H=z.map(j=>a.findIndex(J=>j[0]===J[0]&&j[1]===J[1])).filter(j=>j!==-1);if(H.length){const j=H.map(J=>`dpath_es[${J+1}]`).join(",");o+=`constraint sum([${j}]) <= 1;
`}}}return o}function h8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function v8(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function p8(t,e){let n="";return n+=`constraint connect_four_draw_p(${K.CONNECT_FOUR});
`,n}function m8(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${K.BOARD}, ${K.CONNECT_FOUR});
`,n}function E8(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${K.BOARD}, ${K.CONNECT_FOUR}, 3);
`,n}const C8=new Map([[d.FILLOMINO,XU],[d.CAVE,JU],[d.GALAXIES,t8],[d.YIN_YANG,GU],[d.SHIKAKU,ZU],[d.SHIKAKU_NO_REPEATS_IN_REGION,QU],[d.NORINORI,s8],[d.NURIMISAKI,MU],[d.NURIKABE,UU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,$U],[d.TWO_CONTIGUOUS_REGIONS,FU],[d.CHAOS_CONSTRUCTION,PU],[d.NUMBERED_CHAOS_CONSTRUCTION,HU],[d.SASHIGANE,BU],[d.CELL_CENTER_LOOP_NO_TOUCHING,WU],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,zU],[d.NOT_LOOP_SIZED_REGIONS,YU],[d.MODULAR_LOOP,jU],[d.DOUBLERS,KU],[d.NEGATORS,VU],[d.GOLDILOCKS_ZONE,r8],[d.NEXUS,n8],[d.INDEXER_CELLS,qU],[d.PENTOMINO_TILLING,i8],[d.LITS,o8],[d.CAVE_LITS,a8],[d.LITS_BLACK_WHITE_STAR_BATTLE,l8],[d.NORINORI_STAR_BATTLE,c8],[d.RENBAN_CAVES,e8],[d.MAZE_DIRECTED_PATH,g8],[d.CHAOS_CONSTRUCTION_SUGURU,h8],[d.CONNECT_FOUR,v8],[d.CONNECT_FOUR_DRAW,p8],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,m8],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,E8]]);function I8(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=C8.get(i);if(!a)continue;let c=a(t,i);c=ft(c,`${i}`),e+=c}return e}function b8(){return`
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

`}function O8(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${Ae(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function bp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new mk(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(b8());let f=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?f=`1..${c}`:t.globalConstraints.get(d.HEXED_SUDOKU)?r=[...St.range(1,16)]:r&&(f="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${f};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),Ck(i,n),i.add(O8(t)),i.add(v3(t)),i.add(p3(t)),i.add(I8(i)),i.add(kU(t,i)),i.add(E3(t)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Ah=encodeURIComponent("4.4.2");let Er={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ti=[];let mu;function gs(){if(!mu){const e=`importScripts(${JSON.stringify(Er.workerURL)});`;mu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(mu);t.postMessage({wasmURL:Er.wasmURL?Er.wasmURL.toString():new URL(`./minizinc.wasm?version=${Ah}`,Er.workerURL).toString(),dataURL:Er.dataURL?Er.dataURL.toString():new URL(`./minizinc.data?version=${Ah}`,Er.workerURL).toString()}),Ti.push({worker:t,runCount:0})}function Op(){for(;Ti.length<Er.numWorkers;)gs()}async function w8(t){if(Er={...Er,...t},Ti.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Op(),await Promise.race(Ti.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class s_{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new s_;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Op();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Ti.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Ti.push({worker:o,runCount:a}):(o.terminate(),gs()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=f=>{switch(f.data.type){case"error":c.push(f.data);break;case"interface":u=f.data;break;case"exit":a<10?Ti.push({worker:o,runCount:a}):(o.terminate(),gs()),f.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);gs();let c={},u=!1,f=null;return a.onmessage=g=>{if(c[g.data.type])for(const p of c[g.data.type])p(g.data);switch(g.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":f||(f=g.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const g of c.exit)g({type:"exit",code:null});c={}}},on(g,p){c[g]?c[g].add(p):c[g]=new Set([p])},off(g,p){c[g]&&c[g].delete(p)},then(g,p){const h=m=>{if(m.code===0)g(m.outputFiles[i]);else{const E=f?{message:f.message,...m}:m;if(!p)throw E;p(E)}};c.exit?c.exit.add(h):c.exit=new Set([h])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);gs();let o=null,a={},c=!1,u=null,f={},g="UNKNOWN";return i.onmessage=p=>{if(a[p.data.type])for(const h of a[p.data.type])h(p.data);switch(p.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=p.data);break;case"statistics":f={...f,...p.data.statistics};break;case"solution":u=p.data,g="SATISFIED";break;case"status":g=p.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const p of a.exit)p({type:"exit",code:null});a={}}},on(p,h){a[p]?a[p].add(h):a[p]=new Set([h])},off(p,h){a[p]&&a[p].delete(h)},then(p,h){const m=E=>{if(E.code===0)p({status:g,solution:u,statistics:f});else{const I=o?{message:o.message,...E}:E;if(!h)throw I;h(I)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var y8=de('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function L8(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Hr,"$puzzleMetaStore",n);let i=M(e,"showModal",12,!1);function o(p,h,m){var E=document.createElement("a"),I=new Blob([p],{type:m});E.href=URL.createObjectURL(I),E.download=h,E.click(),URL.revokeObjectURL(E.href)}function a(){const p=tt(Us);return bp(p).model_str}function c(){const p=a();navigator.clipboard.writeText(p)}function u(){const p=a(),h=wh(p);navigator.clipboard.writeText(h)}function f(){const p=Qa(r()),h=a();o(h,`${p}.mzn`,"text/plain")}function g(){const p=Qa(r()),h=a(),m=wh(h);o(m,`${p}.mzn`,"text/plain")}he(),Wr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(p){i(p)},children:(p,h)=>{var m=y8(),E=V(m),I=U(E,2),b=U(I,2),w=U(b,2),A=U(w,2),k=U(V(A));L(k,"href","https://play.minizinc.dev/"),Di(),B(A),B(m),Ge("click",E,c),Ge("click",I,u),Ge("click",b,f),Ge("click",w,g),S(p,m)},$$slots:{default:!0},$$legacy:!0}),ue()}var ur=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(ur||{});const A8=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),wp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),S8=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),N8=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),x8=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),R8=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),Eu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),T8=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),Cu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),Ul=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function D8(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=A8(t,n),o=wp(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=S8(t,n),a=N8(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=x8(t,n),o=R8(t,r);return[i,o]}if(e===d.HIGHLIGHTS&&n!==null){const r=Cu(t,n),i=Cu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=Cu(t,n),o=Ul(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=Eu(t,n,e),i=Eu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=Eu(t,n,e),o=T8(t,r,e);return[i,o]}}function as(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),tr.update(i=>i)}function Eo(t){switch(t.type){case ur.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;as(e,d.DIGIT,n,!0);break}case ur.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;as(e,d.GIVEN,n,!0);break}case ur.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;as(e,d.REGIONS,n,!0);break}case ur.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;as(e,d.HIGHLIGHTS,n,!0);break}case ur.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;as(e,r,n,!0);break}case ur.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];tr.update(r=>r);break}case ur.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];tr.update(i=>i);break}case ur.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];tr.update(r=>r);break}case ur.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];tr.update(r=>r);break}case ur.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);tr.update(i=>i);break}}}function k8(t,e){return{execute:()=>{Eo(t)},unExecute:()=>{Eo(e)}}}function $o(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;const g=Number(c[u]),p=n.get(g);p!==void 0&&(r.push(f),i.push([p]))}}const o=Ul(r,i);Eo(o)}function G8(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let h=0;h<e;h++)for(let m=0;m<n;m++)if(!r[h][m]){const E=[];i.push(E),a(h,m,t[h][m])}function a(h,m,E){h<0||h>=e||m<0||m>=n||r[h][m]||t[h][m]!==E||(r[h][m]=!0,i[i.length-1].push([h,m]),a(h+1,m,E),a(h-1,m,E),a(h,m+1,E),a(h,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(h,m){for(const[E,I]of h)for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const A=E+b,k=I+w;if(m.some(([G,F])=>G===A&&F===k))return!0}return!1}for(let h=0;h<i.length;h++)for(let m=h+1;m<i.length;m++)u(i[h],i[m])&&(c[h].add(m),c[m].add(h));const f=[1,4,7,9],g=new Array(i.length).fill(0);function p(h,m){for(const E of c[h])if(g[E]===m)return!1;return!0}for(let h=0;h<i.length;h++)for(const m of f)if(p(h,m)){g[h]=m;break}for(let h=0;h<i.length;h++)for(const[m,E]of i[h])o[m][E]=g[h];return o}function M8(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const f=i[u];for(let g=0;g<f.length;g++){const p=n.getCell(u,g);if(!p||p.given||r&&!p.given&&p.value===null)continue;const h=f[g];o.push(p),a.push(h)}}const c=wp(o,a);Eo(c)}function U8(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){$o(o,e,r);return}}}function $8(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){$o(o,e,r);return}}}function F8(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const f=e.getCell(a,u);if(!f)continue;r.push(f);const g=c[u];i.push([g])}}const o=Ul(r,i);Eo(o)}function P8(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;$o(n,e,new Map([[0,4],[1,7],[2,9]]))}function H8(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;$o(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function B8(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;$o(n,e,new Map([[1,7],[2,4],[3,9]]))}function W8(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;$o(n,e,new Map([[1,7],[2,8]]))}function z8(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let g=0;g<i.length;g++){const p=i[g];for(let h=0;h<p.length-1;h++){const m=e.getCell(g,h),E=e.getCell(g,h+1);if(!m||!E)continue;const I=p[h],b=p[h+1];if(I===b)continue;const w={colorId:c,p1:{r:g,c:h+1},p2:{r:g+1,c:h+1}};u.push(w)}}for(let g=0;g<a;g++)for(let p=0;p<o-1;p++){const h=e.getCell(p,g),m=e.getCell(p+1,g);if(!h||!m)continue;const E=i[p][g],I=i[p+1][g];if(E===I)continue;const b={colorId:c,p1:{r:p+1,c:g},p2:{r:p+1,c:g+1}};u.push(b)}const f=Is(u);Or(f);return}}function Y8(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const g=e.getCell(c,f);if(g)for(const p of e.getOrthogonallyAdjacentCells(g)){if(!p||!(p.r>g.r||p.c>g.c))continue;const h=i[g.r][g.c],m=i[p.r][p.c];if(!(h===1&&m===1))continue;const E={colorId:4,p1:{r:g.r+.5,c:g.c+.5},p2:{r:p.r+.5,c:p.c+.5}};o.push(E)}}}const a=Is(o);Or(a);return}}function j8(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=G8(i);if(!o)return;const a=[],c=[];for(let f=0;f<o.length;f++){const g=o[f];for(let p=0;p<g.length;p++){const h=e.getCell(f,p);if(!h)continue;a.push(h);const m=g[p];c.push([m])}}const u=Ul(a,c);Eo(u);return}}function K8(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let f=0;f<u.length;f++){const g=e.getCell(c,f);if(!g)continue;const p=i[g.r][g.c];if(p===0)continue;const m={colorId:p===1?1:3,marker:"X",r:g.r+.5,c:g.c+.5};o.push(m)}}const a=zT(o);Or(a);return}}function V8(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const f=r[c],[g,p]=f,[h,m]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols],[E,I]=[Math.floor((p-1)/i.nCols),(p-1)%i.nCols];if(!Rs({r:h,c:m},{r:E,c:I}))continue;const A={colorId:4,p1:{r:h+.5,c:m+.5},p2:{r:E+.5,c:I+.5}};o.push(A)}const a=Is(o);Or(a)}function X8(t,e){const n=e.puzzle,r=n.grid;Or(Pd()),M8(t,n),F8(t,r),z8(t,r),P8(t,r),H8(t,r),Y8(t,r),$8(t,r),j8(t,r),U8(t,r),K8(t,r),B8(t,r),V8(t,e),W8(t,r)}function q8(){const{subscribe:t,set:e}=kt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var Z8=de('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function Q8(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Us,"$puzzleStore",n),i=()=>Ee(En,"$gridStore",n),o=()=>Ee(w,"$timer",n),a=N(),c=N(),u=N(),f=N();let g=N(!0),p=N(!1),h=N(null),m=N(100),E=N("100"),I=N(null),b=N("IDLE");const w=q8();function A(j){return j===null?"":String(j)}function k(j){const J=Math.floor(j/6e4),ae=Math.floor(j%6e4/1e3),Q=Math.floor(j%1e3/100),re=ae.toString().padStart(2,"0");return`${J}:${re}.${Q}`}function G(){y(p,!0)}function F(j){const J=parseInt(j);typeof J=="number"&&J>=1&&y(m,J)}async function z(){y(I,0),y(b,"SOLVING...");const j=new s_;tp();const J=bp(_(a));j.addFile("test.mzn",J.model_str),w.reset(),w.start(),y(h,j.solve({options:{solver:"chuffed","num-solutions":_(m)}})),_(h).on("solution",ae=>{const Q=ae.output.json;ae.type==="solution"&&_(I)!==null&&y(I,_(I)+1),X8(Q,J)}),_(h).on("error",ae=>{y(u,"Solve"),y(b,"ERROR"),console.log(ae.message),w.stop(),_(h)&&_(h).cancel()}),_(h).on("warning",ae=>{y(b,"WARNING"),console.log(ae.message)}),_(h).then(ae=>{y(b,ae.status),y(u,"Solve"),w.stop()})}function H(){_(h)===null||!_(h).isRunning()?z():_(h)!==null&&_(h).isRunning()&&(y(b,"IDLE"),y(u,"Solve"),w.stop(),_(h).cancel())}D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i())}),D(()=>{},()=>{y(u,"Solve")}),D(()=>o(),()=>{y(f,o())}),D(()=>_(h),()=>{_(h)&&(_(h)!==null&&_(h).isRunning()?y(u,"Stop"):y(u,"Solve"))}),we(),he(),Nl(t,{get isOpen(){return _(g)},set isOpen(j){y(g,j)},$$slots:{"panel-header":(j,J)=>{Sl(j,{slot:"panel-header",title:"Solver",get isOpen(){return _(g)},set isOpen(ae){y(g,ae)},$$legacy:!0})},"panel-content":(j,J)=>{var ae=Z8(),Q=se(ae),re=U(Q,2);L8(re,{get showModal(){return _(p)},set showModal(Gt){y(p,Gt)},$$legacy:!0});var ge=U(re,2),oe=V(ge,!0);B(ge);var pe=U(ge,2),Ne=V(pe,!0);B(pe);var xe=U(pe,2),Oe=V(xe);ln(Oe),L(Oe,"min",1),L(Oe,"max",200),L(Oe,"step",1),B(xe);var Ie=U(xe,2),je=V(Ie,!0);te(()=>at(je,`Solution Count: ${A(_(I))}`)),B(Ie);var qe=U(Ie,2),bt=V(qe,!0);te(()=>at(bt,`Elapsed Time: ${k(_(f))}`)),B(qe);var Rt=U(qe,2),Kt=V(Rt,!0);B(Rt),te(()=>{at(oe,_(u)),at(Ne,`Max. Solutions: ${_(m)}`),at(Kt,`Status: ${_(b)}`)}),Ge("click",Q,G),Ge("click",ge,H),er(Oe,()=>_(E),Gt=>y(E,Gt)),Ge("input",Oe,()=>F(_(E))),S(j,ae)}},$$legacy:!0}),ue()}var J8=de('<div class="setting-panel svelte-msen07"><!> <div class="container svelte-msen07"><!> <!> <!> <!> <!></div></div>');function e$(t){var e=J8(),n=V(e);ck(n);var r=U(n,2),i=V(r);Q8(i,{});var o=U(i,2);MD(o,{elementHandlers:Ht});var a=U(o,2);qD(a,{elementHandlers:Ht});var c=U(a,2);C2(c,{elementHandlers:Ht});var u=U(c,2);dk(u,{}),B(r),B(e),S(t,e)}class Te{constructor(e,n){Ce(this,"x");Ce(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Te(this.x+e.x,this.y+e.y)}subtract(e){return new Te(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Te(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Te(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function yp(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const yn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Te(i.x,i.y)};function Wa(t,e){const n=Ol(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return e===void 0||i<e?{cell:n,dist:i}:null}function t$(t,e){const n=Ol(t),r=new Te(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function za(t,e){const n=Ol(t),r=nR(n),o=r.map(f=>new Te(f.c,f.r)).map(f=>f.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function Ya(t,e){const n=Ol(t),r=rR(n),o=r.map(f=>new Te(f.c,f.r)).map(f=>f.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function ps(t,e,n){const r=Wa(t);if(!r)return null;const i=Ya(t);if(!i)return null;const o=za(t);if(!o)return null;const a=t$(t);if(!a)return null;let c,u;e===At.CORNER?(c=o.corner,u="corner"):e===At.EDGE?(c=i.edge,u="edge"):e===At.CELL_CENTER?(c=a.cellCenter,u="cell center"):e===At.CORNER_OR_EDGE?o.dist<i.dist?(c=o.corner,u="corner"):(c=i.edge,u="edge"):e===At.CORNER_OR_CENTER?o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center"):e===At.EDGE_OR_CENTER?i.dist<a.dist?(c=i.edge,u="edge"):(c=a.cellCenter,u="cell center"):i.dist<o.dist&&i.dist<a.dist?(c=i.edge,u="edge"):o.dist<i.dist&&o.dist<a.dist?(c=o.corner,u="corner"):(c=a.cellCenter,u="cell center");const g=new Te(c.c,c.r).subtract(t).length(),p=u==="edge"?2*i.idx:2*o.idx+1;return{cell:r.cell,cellCenter:a.cellCenter,edge:i.edge,corner:o.corner,dist:g,closest:c,type:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:p}}class Fo{constructor(e=.4){Ce(this,"onTap",null);Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onMove",null);Ce(this,"_prevPoint",null);Ce(this,"_prevCell",null);Ce(this,"_lastPointerDownTime",0);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_tapCount",0);Ce(this,"_lastTapPosition",null);Ce(this,"_lastTapTime",0);Ce(this,"_drag_margin");this._drag_margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=yn(e,n);if(!i)return;this._prevPoint=i;const o=r?void 0:this._drag_margin,a=Wa(i,o);if(!a)return;const c=a.cell;this._prevCell=c,this._lastPointerDownTime=e.timeStamp;const u={event:e,cell:c,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(u)}pointerMove(e,n){const r=yn(e,n);if(!r)return;let i;this._isDown&&(i=this._drag_margin);const o=Wa(r,i);if(!o)return;const a=o.cell;if(this._prevCell&&Ke(this._prevCell,a))return;this._prevCell=a,this._prevPoint=r,this._isTap=!1;const c={event:e,cell:a,tapCount:this._tapCount};this.onMove&&this.onMove(c),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(c)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=yn(e,n);if(!r)return;const i=Wa(r,void 0);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Sh(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function n$(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Nh(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function xh(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function r$(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Sh(i,e):i.value!==null?n$(i,e):n===d.CORNER_PM&&i.cornerMarks.length?Nh(i,e):n===d.CENTER_PM&&i.centerMarks.length?xh(i,e):i.cornerMarks.length?Nh(i,e):i.centerMarks.length?xh(i,e):i.highlights.length?Sh(i,e):r:r}function pi(t,e,n,r=!1){if(!(t&&e))return;const i=zd(t,e),o=Yd(t,n),a=$s(i,o);mn(a,r)}function zi(t,e,n,r=!0){if(!(t&&e))return;const i=Yd(t,n),o=zd(t,e),a=$s(i,o);mn(a,r)}function Qu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Ih(r,t,n),a=Ih(r,t,e),c=$s(o,a);mn(c,i)}function i$(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,f=!1,g=!1,p=Qn.DYNAMIC;function h(E){f=!1;const I=E.cell;if(Ut(E.cell,o)){if(p===Qn.DYNAMIC){const w=tt(ht),A=wT(w,n,I);if(A){const G=aT(A.arrow,A.matchLineIdx);Qu(A.id,A.arrow,G,n,!0),g=!0;return}const k=_h(w,n,I);if(!k)f=!0,p=Qn.EDIT_BULB,u=null,a=null;else{p=Qn.EDIT_ARROWS,u=k[0],a=k[1],a=Pu(a,I),qt(n,u,a);return}}if(p===Qn.EDIT_BULB&&!u){u=St.uniqueId(),a=Wv(n,[I]),vi(u,a);return}else p===Qn.EDIT_BULB&&u&&a?(a=rT(a,I),qt(n,u,a)):p===Qn.EDIT_ARROWS&&u&&a&&(a=iT(a,I,r==null?void 0:r.allowSelfIntersection),qt(n,u,a))}}return i.onDragStart=E=>{p=Qn.DYNAMIC,h(E)},i.onDrag=E=>{h(E)},i.onDragEnd=()=>{if(g){g=!1;return}p===Qn.EDIT_ARROWS&&u&&a?oT(a)?(a=sT(a),qt(n,u,a)):(Qu(u,c,a,n),c=a):p===Qn.EDIT_BULB&&(pi(u,a,n),c=a),p=Qn.DYNAMIC},i.onTap=E=>{if(f)return;const I=E.cell,b=tt(ht);if(_h(b,n,I)){zi(u,a,n);return}},{pointerDown:E=>{E.button===0&&i.pointerDown(E,t)},pointerMove:E=>{i.pointerMove(E,t)},pointerUp:E=>{i.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function o$(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function f(p){if(!u||!c)throw"UNREACHABLE";const h=p.cell;Ut(p.cell,o)&&(c=nT(c,h,a),qt(n,u,c))}return i.onDragStart=p=>{u=St.uniqueId(),c=Hv(n,[],r==null?void 0:r.defaultValue),vi(u,c),f(p)},i.onDrag=p=>{f(p)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?$i(n,u):u&&c&&pi(u,c,n,!1),u=null},i.onTap=p=>{const h=p.cell,m=tt(ht),E=OT(m,n,h);if(E){const[I,b]=E;zi(I,b,n)}},{pointerDown:p=>{p.button===0&&i.pointerDown(p,t)},pointerMove:p=>{i.pointerMove(p,t)},pointerUp:p=>{i.pointerUp(p,t)},keyDown:()=>{},keyUp:()=>{}}}const s$=di(ht,t=>{const e=[];for(const[n,r]of t.entries())Cw(n)&&e.push({toolId:n,constraints:r});return e});function Bs(t){return di(ht,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,constraints:o});return r})}const a_=Bs(yd),Lp=di(a_,t=>{const e=t.find(r=>r.toolId===d.FOG_LIGHTS);return e?e.constraints:{}}),a$=di(a_,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.constraints:{}}),l$=di(a_,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.constraints:{}}),c$=Bs(fl),u$=Bs(_v),d$=Bs(Ld),_$=Bs(fv),Ju=kt(void 0),ed=kt(void 0),td=kt(void 0),nd=kt(void 0),rd=kt(void 0),ja=kt(void 0);function f$(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols};let a=ct.DYNAMIC;function c(g){const p=tt(ht),h=g.cell;if(!Ut(g.cell,o))return;const E=go(p,n,h);if(a===ct.DYNAMIC&&(a=E?ct.DELETE:ct.ADD_EDIT),!(r!=null&&r.oppositeConstraintId&&go(p,r.oppositeConstraintId,h))){if(E&&a===ct.DELETE){const[I,b]=E;zi(I,b,n)}else if(!E&&a===ct.ADD_EDIT){const I=zu(n,h,r==null?void 0:r.defaultValue),b=St.uniqueId();pi(b,I,n,!0)}}}i.onDragStart=g=>{a=ct.DYNAMIC,c(g)},i.onDrag=g=>{c(g)},i.onDragEnd=()=>{a=ct.DYNAMIC},i.onMove=g=>{if(!Ut(g.cell,o)){Ju.set(void 0);return}const h=zu(n,g.cell,r==null?void 0:r.defaultValue),m=tt(Ms);m&&(h.shape={...m});const E=tt(ht),I=go(E,n,g.cell);let b="add",w;I&&(a===ct.DELETE||a===ct.DYNAMIC)&&(b="remove",w=I[0]);const A={tool:h,match_id:w,mode:b};Ju.set(A)};function u(g){const p=tt(Yt);if(!p)return;let h=p.constraint;const m=p.id;if(h.value===void 0||!yo(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Gs(h,E),qt(n,m,h))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{u(g)},keyUp:()=>{}}}class $l{constructor(e){Ce(this,"onDragStart",null);Ce(this,"onMove",null);Ce(this,"feature");Ce(this,"_prevCoord",null);Ce(this,"_prevCellCoord",null);this.feature=e}pointerDown(e,n){const r=yn(e,n);if(!r)return;const i=ps(r,this.feature);if(!i)return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=yn(e,n);if(!r)return;const i=ps(r,this.feature);if(!i||this._prevCoord&&Ke(i.closest,this._prevCoord)&&this._prevCellCoord&&Ke(this._prevCellCoord,i.cell))return;const o={event:e,...i};this._prevCoord=i.closest,this._prevCellCoord=i.cell,this.onMove&&this.onMove(o)}}function g$(t,e,n,r){const i=(r==null?void 0:r.targets)??At.CLOSEST,o=new $l(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(h){const m=tt(ht),E=h.cell,I=h.closest;if(!Ut(E,a))return;const w=LT(m,n,I);if(w){$i(n,w);return}c=Yv(n,I,""),u=St.uniqueId(),vi(u,c)}function g(h){const m=tt(Yt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!yo(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=Gs(E,b),qt(n,I,E))}return o.onDragStart=h=>{f(h)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:h=>{g(h)},keyUp:()=>{}}}function h$(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??At.CORNER_OR_EDGE,o=new $l(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function f(h){const m=tt(ht),E=h.cell,I=h.direction,b=vo(I);if(Ut(E,a))return;const A=nh(E,b);if(!Ut(A,a))return;const G=yT(m,n,E,b);if(G){$i(n,G);return}c=Wu(n,E,b,""),u=St.uniqueId(),vi(u,c)}function g(h){const m=tt(Yt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!yo(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=Gs(E,b),qt(n,I,E))}return o.onDragStart=h=>{f(h)},o.onMove=h=>{if(Ut(h.cell,a)){ja.set(void 0);return}const E=vo(h.direction),I=nh(h.cell,E);if(!Ut(I,a)){ja.set(void 0);return}const w=Wu(n,h.cell,E,"");ja.set(w)},{pointerDown:h=>{h.button===0&&o.pointerDown(h,t)},pointerMove:h=>{o.pointerMove(h,t)},pointerUp:()=>{},keyDown:h=>{g(h)},keyUp:()=>{}}}function v$(t,e,n,r){const i=new Fo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=ct.DYNAMIC;function f(h){const m=tt(ht),E=h.cell;if(Ut(h.cell,o)){if(h.event.shiftKey){const b=dh(m,n,E);b&&(c=b[0],a=b[1],Mo({id:c,constraint:a}),u=ct.ADD_EDIT)}if(u===ct.DYNAMIC){const b=dh(m,n,E);if(u=b?ct.DELETE:ct.ADD_EDIT,b){zi(b[0],b[1],n);return}}if(!a&&u===ct.ADD_EDIT){a=zv(n,[E]),c=St.uniqueId(),vi(c,a);return}else if(a&&c&&u===ct.ADD_EDIT){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=cT(a,E,b),qt(n,c,a);return}}}function g(h){const m=tt(Yt);if(!m)return;let E=m.constraint;const I=m.id;if(E.value===void 0||!yo(h)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(E==null?void 0:E.value,h.key);b!==void 0&&b!==E.value&&(E=uT(E,b),qt(n,I,E))}return i.onDragStart=h=>{c=null,a=null,u=ct.DYNAMIC,f(h)},i.onDrag=h=>{f(h)},i.onDragEnd=()=>{c&&a&&pi(c,a,n,!1),c=null},{pointerDown:h=>{h.button===0&&i.pointerDown(h,t)},pointerMove:h=>{i.pointerMove(h,t)},pointerUp:h=>{i.pointerUp(h,t)},keyDown:h=>{g(h)},keyUp:()=>{}}}const lo=new Fo;function Rh(t,e){return t.shiftKey?fs.SELECTING:t.ctrlKey||t.metaKey||e?fs.DYNAMIC:t.altKey?fs.DESELECTING:fs.RESETTING}function id(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r))}return t}function p$(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=id(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function Iu(t,e,n,r){const i=D8(e,n,r);if(i){const o=i[0],a=i[1],c=k8(o,a),u=Vu(t),g=[XT(u,u),c];VT(g)}}function m$(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};lo.onTap=m=>{if(m.tapCount!==2)return;const I=Ut(m.cell,i)?m.cell:null;if(!I)return;const b=r$(I,e,n),w=Vu(b);uo(w)},lo.onDragStart=m=>{const E=Ut(m.cell,i),I=tt(Xu),b=Rh(m.event,I),w=E?m.cell:null,A=GT(w,b);uo(A)},lo.onDrag=m=>{const I=Ut(m.cell,i)?m.cell:null,b=UT(I);uo(b)};function o(m){if(!Bw(m))return!1;const E=e.getAllCells().map(b=>({r:b.r,c:b.c})),I=Vu(E);return uo(I),!0}function a(m){if(!Kw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=Xw(m);return si(E),!0}return m.type==="keyup"?(ZT(),!0):!1}function c(m){if(!jw(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),I=r[(E+1)%r.length];return si(I),qu(I),!0}else{const E=Vw(m.code);return si(E),qu(E),!0}}function u(m){if(!Zw(m))return!1;const E=tt(Ui).lastCell;let I=null;if(E!==null){const[A,k]=Qw(m),[G,F]=[fh(E.r+k,0,i.nRows-1),fh(E.c+A,0,i.nCols-1)];I={r:G,c:F}}else I={r:0,c:0};const b=Rh(m,!1),w=$T(I,b);return uo(w),!0}function f(m){const E=Yw(m);if(E===void 0)return!1;const I=tt(Ui).cells,b=[];if(I.forEach(w=>{const A=e.getCell(w.r,w.c);A&&b.push(A)}),E===null){const{tool:w,cells:A}=p$(b,n);if(A.length)return Iu(I,A,w,E),!0}else{let w=id(b,n,"different",E,!0);if(w.length)return Iu(I,w,n,E),!0;if(w=id(b,n,"equal",E,!0),w.length)return Iu(I,w,n,E),!0}return!1}function g(m){return m.repeat?!1:f(m.key)}const p=St.throttle(m=>{lo.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&lo.pointerDown(m,t)},pointerMove(m){p(m)},pointerUp(m){lo.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||g(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){f(m.currentTarget.value)}}}function E$(t,e,n,r){const i=[Fe.N,Fe.NE,Fe.E,Fe.SE,Fe.S,Fe.SW,Fe.W,Fe.NW],o=new $l(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,f=ii.DYNAMIC;function g(m){const E=tt(ht),I=m.cell;if(!Ut(m.cell,a))return;m.event.altKey&&(f=ii.DELETE);const w=go(E,n,I),A=vo(m.direction);if(w){[u,c]=w,c.direction===A||f===ii.DELETE?zi(u,c,n):(c={...c,direction:A},qt(n,u,c));return}else f!==ii.DELETE&&(c=Yu(n,I,A),u=St.uniqueId(),pi(u,c,n,!0))}function p(m){if(!c||!u||!Ww(m))return;const I=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[I]},qt(n,u,c)}return o.onDragStart=m=>{f=ii.DYNAMIC,g(m),f=ii.DYNAMIC},o.onMove=m=>{if(!Ut(m.cell,a)){ed.set(void 0);return}const I=vo(m.direction),b=Yu(n,m.cell,I),w=tt(ht),A=go(w,n,m.cell);let k="add",G;A&&A[1].direction===I&&f===ii.DYNAMIC&&(k="remove",G=A[0]);const F={tool:b,match_id:G,mode:k};ed.set(F)},{pointerDown:m=>{m.button===0&&o.pointerDown(m,t)},pointerMove:m=>{o.pointerMove(m,t)},pointerUp:()=>{},keyDown:m=>{p(m)},keyUp:()=>{}}}function C$(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function I$(t,e,n,r){const i=new $l(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=co.DYNAMIC;function f(p){const h=tt(ht),m=p.cell;if(!Ut(p.cell,o))return;p.event.altKey&&(u=co.DELETE);const I=vo(p.direction),b=go(h,n,m);if(b){if(c=b[0],a=b[1],u===co.DELETE)$i(n,b[0]);else{const w=C$(a.directions,I);w.length?(a={...a,directions:w},qt(n,c,a)):$i(n,c)}return}else u!==co.DELETE&&(a=ju(n,m,I),c=St.uniqueId(),vi(c,a))}return i.onDragStart=p=>{u=co.DYNAMIC,f(p)},i.onMove=p=>{if(!Ut(p.cell,o)){td.set(void 0);return}const m=vo(p.direction),E=ju(n,p.cell,m);td.set(E)},{pointerDown:p=>{p.button===0&&i.pointerDown(p,t)},pointerMove:p=>{i.pointerMove(p,t)},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class b${constructor(){Ce(this,"onDragStart",null);Ce(this,"onMove",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"_prevCoord",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=yn(e,n);if(!r)return;const i=Ya(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){const r=yn(e,n);if(!r)return;const i=Ya(r,this._margin);if(!i||this._prevCoord&&Ke(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=yn(e,n);if(!r)return;const i=Ya(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function O$(t,e,n,r){const i=new b$,o={nRows:e.nRows,nCols:e.nCols};let a=ct.DYNAMIC;function c(g){const p=tt(ht),h=g.coord,m=Xa(h);if(!m.every(b=>Ut(b,o)))return;let I=null;if(a===ct.DYNAMIC&&(I=ch(p,n,m),a=I?ct.DELETE:ct.ADD_EDIT),I&&a===ct.DELETE){const b=I[0];zi(b,I[1],n)}else if(a===ct.ADD_EDIT){const b=(r==null?void 0:r.defaultValue)??"",w=Bu(n,m,b),A=St.uniqueId();pi(A,w,n,!0)}a=ct.DYNAMIC}function u(g){const p=tt(Yt);if(!p)return;let h=p.constraint;const m=p.id;if(h.value===void 0||!yo(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Gs(h,E),qt(n,m,h))}return i.onDragStart=g=>{a=ct.DYNAMIC,c(g)},i.onMove=g=>{if(!Ut(g.coord,o)){nd.set(void 0);return}const h=Xa(g.coord),m=(r==null?void 0:r.defaultValue)??"",E=Bu(n,h,m),I=tt(Ms);I&&(E.shape={...I});const b=tt(ht),w=ch(b,n,h);let A="add",k;w&&a===ct.DYNAMIC&&(A="remove",k=w[0]);const G={tool:E,match_id:k,mode:A};nd.set(G)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{u(g)},keyUp:()=>{}}}class w${constructor(){Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"onMove",null);Ce(this,"_prevCoord",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=yn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=za(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){const r=yn(e,n);if(!r)return;const i=za(r,this._margin);if(!i||this._prevCoord&&Ke(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this.onMove&&this.onMove(o),this._isDown&&(this._isTap=!1),this._isDown&&this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=yn(e,n);if(!r)return;const i=za(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function y$(t,e,n,r){const i=new w$,o={nRows:e.nRows,nCols:e.nCols};let a=ct.DYNAMIC;function c(g){const p=tt(ht),h=g.coord,m=Va(h);if(!m.every(b=>Ut(b,o)))return;let I=null;if(a===ct.DYNAMIC&&(I=uh(p,n,h),a=I?ct.DELETE:ct.ADD_EDIT),I&&a===ct.DELETE){const b=I[0];zi(b,I[1],n);return}else if(a===ct.ADD_EDIT){const b=Hu(n,m,r==null?void 0:r.defaultValue),w=St.uniqueId();pi(w,b,n,!0)}}function u(g){const p=tt(Yt);if(!p)return;let h=p.constraint;const m=p.id;if(h.value===void 0||!yo(g)||!(r!=null&&r.valueUpdater))return;const E=r.valueUpdater(h==null?void 0:h.value,g.key);E!==void 0&&E!==h.value&&(h=Gs(h,E),qt(n,m,h))}return i.onDragStart=g=>{a=ct.DYNAMIC,c(g),a=ct.DYNAMIC},i.onMove=g=>{if(!Ut(g.coord,o)){rd.set(void 0);return}const h=Va(g.coord),m=Hu(n,h,r==null?void 0:r.defaultValue),E=tt(Ms);E&&(m.shape={...E});const I=tt(ht),b=uh(I,n,g.coord);let w="add",A;b&&a===ct.DYNAMIC&&(w="remove",A=b[0]);const k={tool:m,match_id:A,mode:w};rd.set(k)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{u(g)},keyUp:()=>{}}}class L${constructor(){Ce(this,"onDragStart",null);Ce(this,"onDrag",null);Ce(this,"onDragEnd",null);Ce(this,"onTap",null);Ce(this,"_prevType",null);Ce(this,"_isDown",!1);Ce(this,"_isTap",!1);Ce(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=yn(e,n);if(!r)return;const i=ps(r,At.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._prevType=i.type,this._prevCoords=i.closest,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=yn(e,n);if(!r)return;const i=ps(r,At.CLOSEST);if(!i||this._prevCoords&&Ke(this._prevCoords,i.closest))return;this._isTap=!1;const o={coords:i.closest,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&qv(this._prevCoords,i.closest)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.closest}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=yn(e,n);if(!r)return;const i=ps(r,At.CLOSEST);if(!i)return;const o={coords:i.closest,type:i.type};this._isTap&&this._prevCoords&&Ke(this._prevCoords,i.closest)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function A$(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new L$;return r.onTap=o=>{const a=o.coords,c=tt(el),u=tt(Ja);if(o.type==="cell center"){if(!eR(a,n))return;const g=u.getCellMarker(a);if(g)if(g.marker==="X"){const p={...a,colorId:c,marker:"O"},h=$a(p),m=$a(g),E=Si(h,m);mn(E)}else{const p=ph(a),h=$a(g),m=Si(p,h);mn(m)}else{const p={...a,colorId:c,marker:"X"},h=$a(p),m=ph(a),E=Si(h,m);mn(E)}}else if(o.type==="edge"){const f=u.getEdgeMarker(a);if(f){const g=vh(a),p=hh(f),h=Si(g,p);mn(h)}else{const g={...a,colorId:c},p=hh(g),h=vh(a),m=Si(p,h);mn(m)}}},r.onDrag=o=>{const a=o.coords,c=tt(el);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},f=YT(u);Or(f)}},r.onDragEnd=()=>{const o=tt(Ja);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>fo(c,u)));if(a.length){const c=Is(a),u=mh(a),f=Si(c,u);mn(f)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>fo(c,u)));if(a.length){const c=mh(a),u=Is(a),f=Si(c,u);mn(f)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function S$(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function N$(t,e){const n=xv(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function x$(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function R$(t){for(let e=0;;e++){const n=x$(e);if(!t.has(n))return n}}function T$(t,e,n){const r=new Fo,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,f="cells2",g=Jn.DYNAMIC;function p(m){const E=tt(ht),I=m.cell;if(!Ut(m.cell,i))return;const w=AT(E,n,I);if(g===Jn.DYNAMIC&&(w?(c=w[0],o=w[1],g=Jn.MOVE,u=I,f=o.cells2.some(k=>Ke(k,I))?"cells2":"cells"):g=Jn.SELECT),g===Jn.SELECT&&c===null){c=St.uniqueId();const A=ST(E,n),k=R$(A);o=S$(n,[I],k),vi(c,o);return}else if(g===Jn.SELECT&&c&&o){o=N$(o,I),qt(n,c,o);return}else if(g===Jn.MOVE&&c&&o&&u){const A={r:I.r-u.r,c:I.c-u.c},G=(f==="cells2"?o.cells2:o.cells).map(z=>({r:z.r+A.r,c:z.c+A.c}));if(!G.every(z=>Ut(z,i)))return;f==="cells"?o={...o,cells:G}:o={...o,cells2:G},u=I,qt(n,c,o)}}return r.onDragStart=m=>{c=null,o=null,g=Jn.DYNAMIC,u=null,p(m)},r.onDrag=m=>{p(m)},r.onDragEnd=()=>{c&&o&&(g===Jn.SELECT?pi(c,o,n):g===Jn.MOVE&&Qu(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==Jn.SELECT&&($i(n,c),c=null,o=null)},{pointerDown:m=>{m.button===0&&r.pointerDown(m,t)},pointerMove:m=>{r.pointerMove(m,t)},pointerUp:m=>{r.pointerUp(m,t)},keyDown:()=>{},keyUp:()=>{}}}function D$(t){if(t.type===me.SELECTION)return function(n,r,i){return m$(n,r,i)};if(t.type===me.SINGLE_CELL){let e=function(r,i,o){return f$(r,i,o,n)};const n=t;return e}else if(t.type===me.SINGLE_CELL_ARROW){let e=function(r,i,o){return E$(r,i,o,n)};const n=t;return e}else if(t.type===me.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return I$(r,i,o,n)};const n=t;return e}else if(t.type===me.EDGE){let e=function(r,i,o){return O$(r,i,o,n)};const n=t;return e}else if(t.type===me.CORNER){let e=function(r,i,o){return y$(r,i,o,n)};const n=t;return e}else if(t.type===me.LINE){let e=function(r,i,o){return o$(r,i,o,n)};const n=t;return e}else if(t.type===me.ARROW){let e=function(r,i,o){return i$(r,i,o,n)};const n=t;return e}else if(t.type===me.CAGE){let e=function(r,i,o){return v$(r,i,o,n)};const n=t;return e}else{if(t.type===me.CLONE)return function(n,r,i){return T$(n,r,i)};if(t.type===me.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return g$(r,i,o,n)};const n=t;return e}else if(t.type===me.OUTSIDE_DIRECTION){let e=function(r,i,o){return h$(r,i,o,n)};const n=t;return e}else if(t.type===me.PEN)return function(n,r){return A$(n,r)}}}const Ap=di([po,En,Jt],([t,e,n])=>{const r=Mi(n,Ht);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?D$(i):void 0;return o?o(t,e,n):void 0});var k$=ee('<path class="cursor svelte-zsq70u"></path>');function G$(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Jt,"$toolStore",n),i=()=>Ee(Ui,"$selectionStore",n),o=N(),a=N(),c=.25;function u(g){if(!g)return"";const[p,h]=[g.c,g.r];return`M${p},${h}L${p+c},${h}L${p},${h+c}Z`}D(()=>r(),()=>{y(o,Sd(r()))}),D(()=>i(),()=>{y(a,u(i().lastCell))}),we(),he();var f=k$();te(()=>{L(f,"d",_(a)),L(f,"visibility",_(o)?"visible":"hidden")}),S(t,f),ue()}var M$=ee('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function U$(t,e){ce(e,!1);let n=M(e,"gridShape",8);he();var r=M$(),i=V(r);L(i,"x",0),L(i,"y",0),B(r),te(()=>{L(i,"width",n().nCols),L(i,"height",n().nRows)}),S(t,r),ue()}var $$=ee('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),F$=ee('<g class="grid-lines"></g>');function P$(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(En,"$gridStore",n),i=N();D(()=>r(),()=>{y(i,r().getAllCells())}),we(),he();var o=F$();et(o,5,()=>_(i),It,(a,c)=>{var u=$$();L(u,"width",1),L(u,"height",1),te(()=>{L(u,"x",_(c).c),L(u,"y",_(c).r)}),S(a,u)}),B(o),S(t,o),ue()}function H$(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function B$(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=H$(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],f=JSON.stringify(c),g=JSON.stringify(u);n(f,g)}}return e}function W$(t,e=0,n=!1){const r=[],i=B$(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let f=JSON.parse(c);const g=Array.from(u)[0];let p=JSON.parse(g),h=g;const m=[];do{const E=i.get(h);if(E===void 0)throw new Error(`Corner with no adjacencies found ${h}`);const I=new Te(f.c,f.r),b=new Te(p.c,p.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,A=null,k=null;for(const re of E){const ge=JSON.parse(re),oe=new Te(ge.c,ge.r),pe=b.subtract(I),Ne=oe.subtract(b),xe=pe.perpDotProduct(Ne);w<xe!=n&&(w=xe,k=ge,A=re)}if(n&&E.size>1&&o.add(h),k===null||A===null)throw new Error("Corner with no adjacencies found");E.delete(A),E.size<=0&&i.delete(h);const G=e*(p.c-f.c),F=e*(k.c-p.c),z=e*(f.r-p.r),H=e*(p.r-k.r),j=H+w*F,J=G+w*z,ae=new Te(p.c+j,p.r+J),Q=4;o.has(h)?(m.push(new Te(ae.x-Q*G,ae.y-Q*F)),m.push(new Te(ae.x-Q*z,ae.y-Q*H))):m.push(ae),f=p,p=k,h=A}while(h!==g);r.push(m)}return r}function Co(t,e=0,n=!1){return W$(t,e,n).map(o=>Po(o,!0)).join("")}const z$=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5)];function Y$(t,e,n=z$){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,f=c/(360/i),g=u/(360/i),p=Math.floor(f)%i,h=Math.ceil(f)%i,m=n[p].lerp(n[h],f%1),E=Math.floor(g)%i,I=Math.ceil(g)%i,b=n[E].lerp(n[I],g%1);r.push(m);for(let A=Math.ceil(f);A<=Math.floor(g);A++)r.push(n[A%i]);r.push(b);const w=new Te(0,0);return r.push(w),r}function Sp(t,e,n=new Te(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const f=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),g=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),p=n.add(new Te(f,g));c.push(p)}return c}function Po(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function ci(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(g=>new Te(g.x,g.y));if(r&&o.length>1){const g=o[o.length-1];for(let h=0;h<o.length-1;h++)if(g.equals(o[h])){o.push(o[h+1]);break}const p=o[0];for(let h=1;h<o.length;h++)if(p.equals(o[h])){o.unshift(o[h-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let g=o[1].subtract(o[0]);g=g.normalise(),g=g.scale(e),o[0]=o[0].add(g)}if(n){const g=o.length;let p=o[g-2].subtract(o[g-1]);p=p.normalise(),p=p.scale(n),o[g-1]=o[g-1].add(p)}}if(!i)return Po(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let g=2;g<u;g++){const p=o[g-2],h=o[g-1],m=o[g];let E=p.subtract(h).normalise();E=E.scale(i),E=E.add(h);let I=m.subtract(h).normalise();I=I.scale(i),I=I.add(h),c.push(`L${E.x},${E.y} Q ${h.x},${h.y} ${I.x},${I.y}`)}const f=o[u-1];return c.push(`L${f.x},${f.y}`),c.join(" ")}function rl(t,e={}){const n=Fl(t);return ci(n,e)}function ir(t){return new Te(t.c+.5,t.r+.5)}function Fl(t){return t.map(n=>ir(n))}const j$=[new Te(-.5,-.5),new Te(.5,-.5),new Te(.5,.5),new Te(-.5,.5),new Te(0,-.5),new Te(0,.5),new Te(-.5,0),new Te(.5,0)];function K$(t,e){const n=j$[t];return n.subtract(n.scale(e))}function Np(t,e){const n=[new Te(t.c-e,t.r-e),new Te(t.c+e,t.r+e)],r=[new Te(t.c-e,t.r+e),new Te(t.c+e,t.r-e)];return[n,r].map(o=>Po(o,!1)).join("")}const V$=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function Pl(t,e="none"){return V$.get(t)||e}function X$(t,e,n){let r=[];function o(c,u){return c.map(f=>f.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Te(-.12,-.32),new Te(0,-.4),new Te(.12,-.32)]:a=[new Te(-.12,-.4),new Te(0,-.32),new Te(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const f=new Te(n+.5,e+.5);return u.add(f)})),r}function l_(t,e){const n=[new Te(-t,0),new Te(0,0),new Te(0,t)],i={[Fe.NE]:0,[Fe.E]:Math.PI/4,[Fe.SE]:Math.PI/2,[Fe.S]:3*Math.PI/4,[Fe.SW]:Math.PI,[Fe.W]:5*Math.PI/4,[Fe.NW]:3*Math.PI/2,[Fe.N]:7*Math.PI/4}[e];return n.map(a=>a.rotate(i))}function q$(t,e){const r=Ts(e),i=new Te(r.c,r.r).normalise().scale(.3),o=ir(t),a=o.subtract(i),c=o.add(i);return[a,c]}function Z$(t,e){const r=q$(t,e);let i=l_(.2,e);i=i.map(u=>u.add(r[1]));const o=ci(r),a=ci(i);return o+a}function Q$(t,e){const r=Ts(e),i=new Te(r.c,r.r),a=ir(t).add(i.scale(.4));return[a.subtract(i.normalise().scale(.2)),a]}function bu(t,e){const r=Q$(t,e);let i=l_(.1,e);i=i.map(u=>u.add(r[1]));const o=ci(r),a=ci(i);return o+a}var J$=ee('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),eF=ee('<g class="regions-border"></g>');function tF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(tr,"$cellsStore",n),i=N(),o=N();function a(u,f){return u.filter(h=>h.region===f).map(h=>({r:h.r,c:h.c}))}D(()=>r(),()=>{y(i,r())}),D(()=>_(i),()=>{y(o,new Set(_(i).map(u=>u.region).filter(u=>u!==null)))}),we(),he();var c=eF();et(c,5,()=>_(o),It,(u,f)=>{var g=J$();te(()=>L(g,"d",Co(a(_(i),_(f)),0,!1))),te(()=>L(g,"id",`region-${_(f)??""}`)),S(u,g)}),B(c),S(t,c),ue()}var nF=ee('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function rF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Ui,"$selectionStore",n),i=()=>Ee(Jt,"$toolStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),g=N();let p=M(e,"boundingBox",8);const h=.06,m=.05,E="#080808",I="#b2b2b2";D(()=>Z(p()),()=>{y(o,p().x)}),D(()=>Z(p()),()=>{y(a,p().y)}),D(()=>r(),()=>{y(c,r().cells)}),D(()=>_(c),()=>{y(u,Co(_(c),0))}),D(()=>_(c),()=>{y(f,Co(_(c),h))}),D(()=>i(),()=>{y(g,Sd(i()))}),we(),he();var b=nF(),w=V(b),A=V(w);L(A,"stdDeviation",m),Di(),B(w);var k=U(w),G=V(k);L(G,"fill",I);var F=U(G);L(F,"fill",E),B(k);var z=U(k);B(b),te(()=>{L(b,"visibility",_(g)?"visible":"hidden"),L(k,"x",_(o)),L(k,"y",_(a)),L(G,"x",_(o)),L(G,"y",_(a)),L(F,"d",_(f)),L(z,"d",_(u))}),S(t,b),ue()}var iF=ee('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function oF(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"grid",8);D(()=>Z(i()),()=>{y(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>_(n),()=>{y(r,Co(_(n),0))}),we(),he();var o=iF(),a=V(o);B(o),te(()=>L(a,"d",_(r))),S(t,o),ue()}function sF(t,e){const n=t.getRow(e.r);return new Set(n)}function aF(t,e){const n=t.getCol(e.c);return new Set(n)}function lF(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function cF(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function uF(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function dF(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function _F(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function fF(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function gF(t,e,n){let r=new Set;const o=n.cells.map(p=>t.getCell(p.r,p.c)).filter(p=>p!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),f=c.findIndex(p=>p===e);if(f!==-1){if(r=new Set([...r,...u]),u.length>0){const p=c.filter((h,m)=>m!==f);r=new Set([...r,...p])}return r}return u.findIndex(p=>p===e)!==-1&&(r=new Set([...r,...c])),r}function hF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function vF(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function pF(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(cF(t,i))),e.get(d.ANTIKING)&&(r=r.union(uF(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(dF(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(fF(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(_F(t,i)))),r}function Ou(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=vF(t,n,c);i=new Set([...i,...u])}return i}function mF(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],f=gF(t,i,u);r=new Set([...r,...f])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],f=hF(t,i,u);r=new Set([...r,...f])}return r=Ou(t,e,i,d.KILLER_CAGE,r),r=Ou(t,e,i,d.PARITY_BALANCE_CAGE,r),r=Ou(t,e,i,d.SPOTLIGHT_CAGE,r),r}function xp(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...sF(i,e),...aF(i,e),...lF(i,e)])),n=new Set([...n,...pF(i,r,e)]),n=new Set([...n,...mF(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function EF(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(xp(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var CF=ee('<tspan class="svelte-xct9ah"> </tspan>'),IF=ee('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function bF(t,e){ce(e,!1);const n=N();let r=M(e,"cell",8),i=M(e,"seen_values",8);const o=.25;function a(g){return i().find(h=>h===g)!==void 0}D(()=>Z(r()),()=>{y(n,ir({r:r().r,c:r().c}))}),we(),he();var c=ye(),u=se(c);{var f=g=>{var p=IF(),h=V(p);L(h,"font-size",o),et(h,5,()=>r().centerMarks,It,(m,E)=>{var I=CF();const b=Qe(()=>a(_(E)));te(()=>Lt(I,"conflict",_(b)));var w=V(I,!0);B(I),te(()=>at(w,_(E))),S(m,I)}),B(h),B(p),te(()=>{L(h,"x",_(n).x),L(h,"y",_(n).y),L(h,"textLength",r().centerMarks.length>5?"0.9":void 0)}),S(g,p)};ne(u,g=>{r().centerMarks.length&&g(f)})}S(t,c),ue()}var OF=ee('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),wF=ee('<g class="corner-marks-group"></g>');function yF(t,e){ce(e,!1);let n=M(e,"cell",8),r=M(e,"seen_values",8);const i=.25,o=.28;function a(p){const h=p.cornerMarks.slice(0,8),m=ir({r:p.r,c:p.c});return h.map((E,I)=>{const b=K$(I,o);return{pos:m.add(b),value:E,idx:I}})}function c(p){return r().find(m=>m===p)!==void 0}he();var u=ye(),f=se(u);{var g=p=>{var h=wF();et(h,5,()=>a(n()),It,(m,E)=>{let I=()=>_(E).pos,b=()=>_(E).value;var w=OF();L(w,"font-size",i);const A=Qe(()=>c(b()));var k=V(w,!0);B(w),te(()=>{L(w,"x",I().x),L(w,"y",I().y),Lt(w,"conflict",_(A)),at(k,b())}),S(m,w)}),B(h),S(p,h)};ne(f,p=>{n().cornerMarks.length&&p(g)})}S(t,u),ue()}var LF=ee('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),AF=ee('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),SF=ee("<!><!>",1),NF=ee('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function xF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ui,"$settingsStore",n),i=()=>Ee(Us,"$puzzleStore",n),o=()=>Ee(Jt,"$toolStore",n),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N();let m=M(e,"cell",8);const E=.8,I=400;function b(G,F){if(!G)return[];let H=[...xp(_(g),F.toCoords())].map(j=>j.value).filter(j=>j!==null);return H=[...new Set(H)],H}D(()=>Z(m()),()=>{y(a,m().value)}),D(()=>Z(m()),()=>{y(c,m().given)}),D(()=>Z(m()),()=>{y(u,ir({r:m().r,c:m().c}))}),D(()=>r(),()=>{y(f,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{y(g,i())}),D(()=>r(),()=>{y(p,r().showSolution)}),D(()=>(_(f),Z(m())),()=>{y(h,b(_(f),m()))}),we(),he();var w=ye(),A=se(w);{var k=G=>{var F=NF(),z=V(F);{var H=J=>{var ae=ye(),Q=se(ae);{var re=ge=>{var oe=LF();L(oe,"font-size",E),L(oe,"font-weight",I);var pe=V(oe,!0);B(oe),te(()=>{L(oe,"x",_(u).x),L(oe,"y",_(u).y),at(pe,m().region)}),S(ge,oe)};ne(Q,ge=>{m().region!==null&&ge(re)})}S(J,ae)},j=J=>{var ae=ye(),Q=se(ae);{var re=oe=>{var pe=AF();L(pe,"font-size",E),L(pe,"font-weight",I);var Ne=V(pe,!0);B(pe),te(()=>{L(pe,"x",_(u).x),L(pe,"y",_(u).y),Lt(pe,"given",_(c)),at(Ne,_(a))}),S(oe,pe)},ge=oe=>{var pe=SF(),Ne=se(pe);yF(Ne,{get cell(){return m()},get seen_values(){return _(h)}});var xe=U(Ne);bF(xe,{get cell(){return m()},get seen_values(){return _(h)}}),S(oe,pe)};ne(Q,oe=>{_(a)!==null?oe(re):oe(ge,!1)},!0)}S(J,ae)};ne(z,J=>{o()===d.REGIONS?J(H):J(j,!1)})}B(F),te(()=>Lt(F,"hide-given",m().given)),S(G,F)};ne(A,G=>{_(p)||G(k)})}S(t,w),ue()}var RF=ee("<path></path>"),TF=ee('<g class="highlights-group"></g>');function DF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Jt,"$toolStore",n);let i=M(e,"cell",8);function o(f){const g=ir({r:i().r,c:i().c}),p=i().highlights.length;return i().highlights.map((m,E)=>{let I=Y$(E,p);I=I.map(w=>w.add(g));const b=Po(I,!0);return{colorId:m,d:b}})}he();var a=ye(),c=se(a);{var u=f=>{var g=ye(),p=se(g);{var h=m=>{var E=TF();et(E,5,()=>o(i()),It,(I,b)=>{let w=()=>_(b).colorId,A=()=>_(b).d;var k=RF();te(()=>{ws(k,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),L(k,"d",A())}),S(I,k)}),B(E),S(m,E)};ne(p,m=>{i().highlights.length&&m(h)})}S(f,g)};ne(c,f=>{r()!==d.REGIONS&&f(u)})}S(t,a),ue()}var kF=ee('<path class="cell-marker" fill="none"></path>'),GF=ee('<circle fill="none" opacity="0.9"></circle>');function MF(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"marker",8);const o=.3,a=.08;D(()=>Z(i()),()=>{y(n,Np(i(),o))}),D(()=>Z(i()),()=>{y(r,Pl(i().colorId,"black"))}),we(),he();var c=ye(),u=se(c);{var f=p=>{var h=kF();L(h,"stroke-width",a),te(()=>{L(h,"d",_(n)),L(h,"stroke",_(r))}),S(p,h)},g=p=>{var h=GF();L(h,"r",o),L(h,"stroke-width",a),te(()=>{ws(h,`cell-marker color-${i().colorId??""}`),L(h,"cx",i().c),L(h,"cy",i().r),L(h,"stroke",_(r))}),S(p,h)};ne(u,p=>{i().marker==="X"?p(f):p(g,!1)})}S(t,c),ue()}var UF=ee('<g class="cell-markers"></g>');function $F(t,e){let n=M(e,"markers",8);var r=UF();et(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{MF(i,{get marker(){return _(o)}})}),B(r),S(t,r)}var FF=ee('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function PF(t,e){ce(e,!1);const n=N();let r=M(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(g=>[new Te(g.p1.c,g.p1.r),new Te(g.p2.c,g.p2.r)]).flat()}function a(u){const f=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?Pl(f,"black"):"darkred"}D(()=>Z(r()),()=>{y(n,Po(o(r().draftLine)))}),we(),he();var c=FF();te(()=>L(c,"stroke",a(r()))),L(c,"stroke-width",i),L(c,"opacity",.5),te(()=>L(c,"d",_(n))),S(t,c),ue()}var HF=ee('<path fill="none" opacity="0.9"></path>');function BF(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"marker",8);const o=.08,a=.04;D(()=>Z(i()),()=>{y(n,Np(i(),o))}),D(()=>Z(i()),()=>{y(r,Pl(i().colorId,"black"))}),we(),he();var c=HF();L(c,"stroke-width",a),te(()=>{L(c,"d",_(n)),ws(c,`edge-marker color-${i().colorId??""}`),L(c,"stroke",_(r))}),S(t,c),ue()}var WF=ee('<g class="edge-markers"></g>');function zF(t,e){let n=M(e,"markers",8);var r=WF();et(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{BF(i,{get marker(){return _(o)}})}),B(r),S(t,r)}var YF=ee('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),jF=ee('<g class="line-markers svelte-yha19m"></g>');function KF(t,e){ce(e,!1);let n=M(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return Pl(c,"black")}he();var a=jF();et(a,5,n,c=>i(c),(c,u)=>{var f=YF();L(f,"stroke-width",r),te(()=>L(f,"stroke",o(_(u).colorId))),te(()=>{L(f,"x1",_(u).p1.c),L(f,"y1",_(u).p1.r),L(f,"x2",_(u).p2.c),L(f,"y2",_(u).p2.r),ws(f,`line-marker color-${_(u).colorId??""} svelte-yha19m`)}),S(c,f)}),B(a),S(t,a),ue()}var VF=ee('<g class="pen-tool"><!><!><!><!></g>');function XF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Ja,"$penToolStore",n),i=N();D(()=>r(),()=>{y(i,{draftLine:r().draftLine,mode:r().mode})}),we(),he();var o=VF(),a=V(o);KF(a,{get lineMarkers(){return r().lineMarkers}});var c=U(a);zF(c,{get markers(){return r().edgeMarkers}});var u=U(c);$F(u,{get markers(){return r().cellMarkers}});var f=U(u);PF(f,{get draftLineMarker(){return _(i)}}),B(o),S(t,o),ue()}var qF=ee("<path></path>");function Gr(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let g=M(e,"cells",8),p=M(e,"shape",8,Nd);const h="square";D(()=>Z(p()),()=>{y(n,p().inset??.06)}),D(()=>Z(p()),()=>{y(r,p().stroke??"black")}),D(()=>Z(p()),()=>{y(i,p().strokeWidth??.03)}),D(()=>Z(p()),()=>{y(o,p().strokeDasharray??.08)}),D(()=>Z(p()),()=>{y(a,p().fill??"none")}),D(()=>Z(p()),()=>{y(c,p().connectDiag??!0)}),D(()=>(Z(g()),_(n),_(c)),()=>{y(u,Co(g(),_(n),_(c)))}),D(()=>Z(p()),()=>{y(f,p().strokeLinejoin??"miter")}),we(),he();var m=qF();L(m,"stroke-linecap",h),te(()=>{L(m,"d",_(u)),L(m,"stroke",_(r)),L(m,"stroke-width",_(i)),L(m,"fill",_(a)),L(m,"stroke-dasharray",_(o)),L(m,"stroke-linejoin",_(f))}),S(t,m),ue()}var ZF=ee('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function QF(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Ui,"$selectionStore",n),i=()=>Ee(ui,"$settingsStore",n),o=()=>Ee(Us,"$puzzleStore",n),a=()=>Ee(Jt,"$toolStore",n),c=N(),u=N(),f=N(),g=N(),p={type:W.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function h(b,w){return b.length?EF(_(f),b):[]}D(()=>r(),()=>{y(c,r().cells)}),D(()=>i(),()=>{y(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(g,Sd(a()))}),we(),he();var m=ye(),E=se(m);{var I=b=>{var w=ZF(),A=V(w),k=Qe(()=>h(_(c),_(f)));Gr(A,{get cells(){return _(k)},shape:p}),B(w),S(b,w)};ne(E,b=>{_(u)&&_(g)&&b(I)})}S(t,m),ue()}function Hl(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...Kv(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function JF(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...Hl(r))}return new Set(e)}function eP(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...Hl(r))}return new Set(e)}function tP(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...Hl(r))}return new Set(e)}function nP(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function rP(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function iP(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function oP(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=Hl(i);o.length&&e.push(...o)}return new Set(e)}function sP(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...JF(t),...eP(t),...tP(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(nP(t))),e.get(d.ANTIKING)&&(n=n.union(rP(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(iP(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(oP(t))),n}function aP(t,e){return[...new Set([...sP(t,e)])]}var lP=ee('<rect class="conflict svelte-4mp6ok"></rect>'),cP=ee('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function uP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ui,"$settingsStore",n),i=()=>Ee(En,"$gridStore",n),o=()=>Ee(Br,"$globalConstraintsStore",n),a=()=>Ee(tr,"$cellsStore",n),c=N(),u=N(),f=N(),g=N();W.CAGE;function p(I){return aP(_(u),_(f)).map(A=>A.toCoords())}D(()=>r(),()=>{y(c,r().checkConflicts)}),D(()=>i(),()=>{y(u,i())}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(g,a())}),we(),he();var h=ye(),m=se(h);{var E=I=>{var b=cP();et(b,5,()=>p(_(g)),It,(w,A)=>{var k=lP();L(k,"width",1),L(k,"height",1),te(()=>{L(k,"x",_(A).c),L(k,"y",_(A).r)}),S(w,k)}),B(b),S(I,b)};ne(m,I=>{_(c)&&I(E)})}S(t,h),ue()}var dP=ee('<line class="diag svelte-ylotlw"></line>'),_P=ee('<line class="antidiag svelte-ylotlw"></line>'),fP=ee('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),gP=ee('<line class="diag svelte-ylotlw"></line>'),hP=ee('<line class="antidiag svelte-ylotlw"></line>'),vP=ee('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),pP=ee('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function mP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Br,"$globalConstraintsStore",n),i=()=>Ee(En,"$gridStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N(),m=N(),E=N(),I=N(),b=N(),w=0,A=0,k=0,G=0;D(()=>r(),()=>{y(o,r())}),D(()=>(_(o),d),()=>{y(a,!!_(o).get(d.POSITIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(c,!!_(o).get(d.NEGATIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(u,!!_(o).get(d.NEGATIVE_ANTIDIAGONAL))}),D(()=>(_(o),d),()=>{y(f,!!_(o).get(d.POSITIVE_ANTIDIAGONAL))}),D(()=>(_(o),d),()=>{y(g,!!_(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),D(()=>(_(o),d),()=>{y(p,!!_(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),D(()=>i(),()=>{y(h,i())}),D(()=>_(h),()=>{y(m,_(h).nCols)}),D(()=>_(h),()=>{y(E,_(h).nRows)}),D(()=>_(h),()=>{y(I,_(h).nCols)}),D(()=>_(h),()=>{y(b,_(h).nRows)}),we(),he();var F=pP(),z=V(F);{var H=Oe=>{var Ie=dP();L(Ie,"x1",w),L(Ie,"y1",A),te(()=>{L(Ie,"x2",_(I)),L(Ie,"y2",_(b))}),S(Oe,Ie)};ne(z,Oe=>{_(c)&&Oe(H)})}var j=U(z);{var J=Oe=>{var Ie=_P();L(Ie,"x1",w),L(Ie,"y1",A),te(()=>{L(Ie,"x2",_(I)),L(Ie,"y2",_(b))}),S(Oe,Ie)};ne(j,Oe=>{_(u)&&Oe(J)})}var ae=U(j);{var Q=Oe=>{var Ie=fP();L(Ie,"x1",w),L(Ie,"y1",A),te(()=>{L(Ie,"x2",_(I)),L(Ie,"y2",_(b))}),S(Oe,Ie)};ne(ae,Oe=>{_(g)&&Oe(Q)})}var re=U(ae);{var ge=Oe=>{var Ie=gP();L(Ie,"x2",G),L(Ie,"y1",k),te(()=>{L(Ie,"x1",_(m)),L(Ie,"y2",_(E))}),S(Oe,Ie)};ne(re,Oe=>{_(a)&&Oe(ge)})}var oe=U(re);{var pe=Oe=>{var Ie=hP();L(Ie,"x2",G),L(Ie,"y1",k),te(()=>{L(Ie,"x1",_(m)),L(Ie,"y2",_(E))}),S(Oe,Ie)};ne(oe,Oe=>{_(f)&&Oe(pe)})}var Ne=U(oe);{var xe=Oe=>{var Ie=vP();L(Ie,"x2",G),L(Ie,"y1",k),te(()=>{L(Ie,"x1",_(m)),L(Ie,"y2",_(E))}),S(Oe,Ie)};ne(Ne,Oe=>{_(p)&&Oe(xe)})}B(F),S(t,F),ue()}var EP=ee('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1cxyg7s"><use class="fog-edge-1 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-2 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-3 svelte-1cxyg7s" href="#fog-shape"></use><use class="fog-edge-4 svelte-1cxyg7s" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1cxyg7s"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1cxyg7s"><rect class="fog-mask-white svelte-1cxyg7s"></rect><g class="fog-mask-black svelte-1cxyg7s"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1cxyg7s"></rect><rect class="fog-mask-black svelte-1cxyg7s" mask="url(#fog-mask-fog)"></rect></mask></defs>');function CP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(np,"$showFogStore",n),i=()=>Ee(Ll,"$solutionStore",n),o=()=>Ee(En,"$gridStore",n),a=()=>Ee(Lp,"$fogLightsStore",n),c=N(),u=N(),f=N(),g=N(),p=N(),h=N();let m=M(e,"boundingBox",8),E=M(e,"gridShape",8);function I(oe){const pe=[];if(!oe)return pe;for(const Ne of Object.entries(oe)){const xe=Ne[1].cell,Oe=_(f).getCell(xe.r,xe.c);Oe&&pe.push(Oe)}return pe}function b(oe,pe){const Ne=I(pe);return[...oe.getAllCells().filter(je=>!Ne.includes(je))].map(je=>je.toCoords())}D(()=>r(),()=>{y(c,r())}),D(()=>i(),()=>{y(u,i())}),D(()=>o(),()=>{y(f,o())}),D(()=>a(),()=>{y(g,a())}),D(()=>(_(f),_(g)),()=>{y(p,b(_(f),_(g)))}),D(()=>_(p),()=>{y(h,Co(_(p),0))}),we(),he();var w=EP(),A=V(w),k=V(A);B(A);var G=U(A),F=V(G);L(F,"stroke-width",.4);var z=U(F);L(z,"stroke-width",.3);var H=U(z);L(H,"stroke-width",.2);var j=U(H);L(j,"stroke-width",.1),Di(),B(G);var J=U(G),ae=V(J);Di(),B(J);var Q=U(J),re=V(Q),ge=U(re);L(ge,"x",0),L(ge,"y",0),B(Q),B(w),te(()=>{L(k,"d",_(h)),Lt(G,"disabled",!_(c)),Lt(J,"disabled",!_(c)),L(ae,"x",m().x),L(ae,"y",m().y),L(ae,"width",m().width),L(ae,"height",m().height),L(re,"x",m().x),L(re,"y",m().y),L(re,"width",m().width),L(re,"height",m().height),L(ge,"width",E().nCols),L(ge,"height",E().nRows)}),S(t,w),ue()}var IP=ee('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function bP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(np,"$showFogStore",n),i=N();let o=M(e,"gridShape",8);D(()=>r(),()=>{y(i,r())}),we(),he();var a=IP(),c=V(a);L(c,"x",0),L(c,"y",0),B(a),te(()=>{L(a,"visibility",_(i)?"visible":"hidden"),L(c,"width",o().nCols),L(c,"height",o().nRows)}),S(t,a),ue()}var OP=ee('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function wP(t,e){ce(e,!1);const n=N();let r=M(e,"r",8),i=M(e,"c",8),o=M(e,"val",8);const a=.8,c=400;D(()=>(Z(r()),Z(i())),()=>{y(n,ir({r:r(),c:i()}))}),we(),he();var u=ye(),f=se(u);{var g=p=>{var h=OP();L(h,"font-size",a),L(h,"font-weight",c);var m=V(h,!0);B(h),te(()=>{L(h,"x",_(n).x),L(h,"y",_(n).y),at(m,o())}),S(p,h)};ne(f,p=>{o()!==null&&p(g)})}S(t,u),ue()}var yP=ee('<g class="solution-layer"></g>');function LP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Ll,"$solutionStore",n),i=()=>Ee(ui,"$settingsStore",n),o=()=>Ee(yl,"$gameModeStore",n),a=N(),c=N(),u=N();D(()=>r(),()=>{y(a,r())}),D(()=>i(),()=>{y(c,i().showSolution)}),D(()=>o(),()=>{y(u,o())}),we(),he();var f=ye(),g=se(f);{var p=h=>{var m=yP();et(m,5,()=>_(a),It,(E,I,b)=>{var w=ye(),A=se(w);et(A,1,()=>_(I),It,(k,G,F)=>{wP(k,{r:b,c:F,get val(){return _(G)}})}),S(E,w)}),B(m),S(h,m)};ne(g,h=>{_(a)&&_(c)&&_(u)===Io.SETTING&&h(p)})}S(t,f),ue()}var AP=ee('<g class="element-group"></g>'),SP=ee('<g mask="url(#fog-mask-fog)"></g>');function Pa(t,e){let n=M(e,"elements",8),r=M(e,"g_name",8),i=M(e,"Component",8);var o=SP();et(o,5,n,It,(a,c)=>{let u=()=>_(c).toolId,f=()=>_(c).constraints;var g=AP();et(g,5,()=>Object.entries(f()),p=>p[0],(p,h)=>{i()(p,{get tool(){return _(h)[1]},get c_id(){return _(h)[0]}})}),B(g),te(()=>L(g,"data-toolId",u())),S(a,g)}),B(o),te(()=>ws(o,aw(r()))),S(t,o)}var NP=ee('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),xP=ee('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),RP=ee('<g class="quadruple-text"><!></g>');function TP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"cornerTool",8);const u=c().cells,f=new Te(u[u.length-1].c,u[u.length-1].r),g=_n(c().toolId,Ht)??Du;D(()=>Z(c()),()=>{y(n,c().value)}),D(()=>Z(c()),()=>{y(r,c().shape??g)}),D(()=>_(r),()=>{var E;y(i,((E=_(r))==null?void 0:E.fontSize)??.2)}),D(()=>_(r),()=>{var E;y(o,((E=_(r))==null?void 0:E.fontColor)??"black")}),D(()=>_(n),()=>{var E;y(a,_(n)?(E=_(n))==null?void 0:E.split(","):[])}),we(),he();var p=ye(),h=se(p);{var m=E=>{var I=RP(),b=V(I);{var w=k=>{var G=NP(),F=V(G,!0);te(()=>at(F,_(a).join(" "))),B(G),te(()=>{L(G,"x",f.x),L(G,"y",f.y),L(G,"font-size",_(i)),L(G,"fill",_(o))}),S(k,G)},A=k=>{var G=xP(),F=se(G),z=V(F,!0);te(()=>at(z,_(a).slice(0,2).join(" "))),B(F);var H=U(F),j=V(H,!0);te(()=>at(j,_(a).slice(2).join(" "))),B(H),te(()=>{L(F,"x",f.x),L(F,"y",f.y),L(F,"dy",-_(i)/2),L(F,"font-size",_(i)),L(F,"fill",_(o)),L(H,"x",f.x),L(H,"y",f.y),L(H,"dy",_(i)/2),L(H,"font-size",_(i)),L(H,"fill",_(o))}),S(k,G)};ne(b,k=>{_(a).length<=2?k(w):k(A,!1)})}B(I),te(()=>L(I,"data-count",_(a).length)),S(E,I)};ne(h,E=>{_(n)&&E(m)})}S(t,p),ue()}var DP=ee("<circle></circle>");function dr(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"x",8),f=M(e,"y",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{y(n,g().r??.35)}),D(()=>Z(g()),()=>{y(r,g().stroke??"black")}),D(()=>Z(g()),()=>{var h;y(i,(h=g())==null?void 0:h.opacity)}),D(()=>Z(g()),()=>{y(o,g().strokeWidth??.02)}),D(()=>Z(g()),()=>{y(a,g().fill??"none")}),D(()=>Z(g()),()=>{y(c,g().strokeDasharray??0)}),we(),he();var p=DP();te(()=>{L(p,"cx",u()),L(p,"cy",f()),L(p,"r",_(n)),L(p,"stroke",_(r)),L(p,"stroke-width",_(o)),L(p,"fill",_(a)),L(p,"opacity",_(i)),L(p,"stroke-dasharray",_(c))}),S(t,p),ue()}var kP=ee("<ellipse></ellipse>");function GP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=M(e,"cx",8),g=M(e,"cy",8),p=M(e,"shape",8);D(()=>Z(p()),()=>{y(n,p().width??.5)}),D(()=>Z(p()),()=>{y(r,p().height??.5)}),D(()=>Z(p()),()=>{y(i,p().stroke??"black")}),D(()=>Z(p()),()=>{var m;y(o,(m=p())==null?void 0:m.opacity)}),D(()=>Z(p()),()=>{y(a,p().strokeWidth??.02)}),D(()=>Z(p()),()=>{y(c,p().fill??"none")}),D(()=>Z(p()),()=>{y(u,p().angle??0)}),we(),he();var h=kP();te(()=>{L(h,"cx",f()),L(h,"cy",g()),L(h,"rx",_(n)/2),L(h,"ry",_(r)/2),L(h,"stroke",_(i)),L(h,"stroke-width",_(a)),L(h,"fill",_(c)),L(h,"opacity",_(o)),L(h,"transform",`rotate(${_(u)}, ${f()}, ${g()} )`)}),S(t,h),ue()}var MP=ee("<polygon></polygon>");function il(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N();let g=M(e,"cx",8),p=M(e,"cy",8),h=M(e,"shape",8);D(()=>Z(h()),()=>{y(n,h().n??3)}),D(()=>Z(h()),()=>{y(r,h().r??.5)}),D(()=>(_(r),_(n),Z(g()),Z(p())),()=>{y(i,Sp(_(r),_(n),new Te(g(),p())))}),D(()=>_(i),()=>{y(o,_(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>Z(h()),()=>{y(a,h().stroke??"black")}),D(()=>Z(h()),()=>{y(c,h().strokeWidth??.02)}),D(()=>Z(h()),()=>{y(u,h().fill??"none")}),D(()=>Z(h()),()=>{y(f,h().angle??0)}),we(),he();var m=MP();te(()=>{L(m,"points",_(o)),L(m,"stroke",_(a)),L(m,"stroke-width",_(c)),L(m,"fill",_(u)),L(m,"transform",`rotate(${_(f)}, ${g()}, ${p()} )`)}),S(t,m),ue()}var UP=ee("<rect></rect>");function $P(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N();let f=M(e,"cx",8),g=M(e,"cy",8),p=M(e,"shape",8);D(()=>Z(p()),()=>{y(n,p().width??.5)}),D(()=>Z(p()),()=>{y(r,p().height??.5)}),D(()=>(Z(f()),_(n)),()=>{y(i,f()-_(n)/2)}),D(()=>(Z(g()),_(r)),()=>{y(o,g()-_(r)/2)}),D(()=>Z(p()),()=>{y(a,p().stroke||"black")}),D(()=>Z(p()),()=>{y(c,p().strokeWidth||.023)}),D(()=>Z(p()),()=>{y(u,p().fill||"none")}),we(),he();var h=UP();te(()=>{L(h,"x",_(i)),L(h,"y",_(o)),L(h,"width",_(n)),L(h,"height",_(r)),L(h,"stroke",_(a)),L(h,"stroke-width",_(c)),L(h,"fill",_(u))}),S(t,h),ue()}var FP=ee("<rect></rect>");function PP(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N();let m=M(e,"cx",8),E=M(e,"cy",8),I=M(e,"shape",8);D(()=>Z(I()),()=>{y(n,I().r??.5)}),D(()=>(Z(m()),_(n)),()=>{y(r,m()-_(n))}),D(()=>(Z(E()),_(n)),()=>{y(i,E()-_(n))}),D(()=>_(n),()=>{y(o,2*_(n))}),D(()=>_(n),()=>{y(a,2*_(n))}),D(()=>Z(I()),()=>{y(c,I().stroke??"black")}),D(()=>Z(I()),()=>{y(u,I().strokeWidth??.02)}),D(()=>Z(I()),()=>{y(f,I().fill??"none")}),D(()=>Z(I()),()=>{y(g,I().angle??0)}),D(()=>Z(I()),()=>{y(p,I().strokeDasharray??0)}),D(()=>Z(I()),()=>{y(h,I().opacity??1)}),we(),he();var b=FP();te(()=>{L(b,"x",_(r)),L(b,"y",_(i)),L(b,"width",_(o)),L(b,"height",_(a)),L(b,"stroke",_(c)),L(b,"stroke-width",_(u)),L(b,"fill",_(f)),L(b,"transform",`rotate(${_(g)}, ${m()}, ${E()})`),L(b,"stroke-dasharray",_(p)),L(b,"opacity",_(h))}),S(t,b),ue()}function br(t,e){ce(e,!1);const n=N();let r=M(e,"cx",8),i=M(e,"cy",8),o=M(e,"shape",8);D(()=>(Z(o()),W),()=>{var g;y(n,((g=o())==null?void 0:g.type)??W.CIRCLE)}),we(),he();var a=ye(),c=se(a);{var u=g=>{dr(g,{get x(){return r()},get y(){return i()},get shape(){return o()}})},f=g=>{var p=ye(),h=se(p);{var m=I=>{GP(I,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=I=>{var b=ye(),w=se(b);{var A=G=>{PP(G,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},k=G=>{var F=ye(),z=se(F);{var H=J=>{$P(J,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},j=J=>{var ae=ye(),Q=se(ae);{var re=oe=>{il(oe,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},ge=oe=>{dr(oe,{get x(){return r()},get y(){return i()},get shape(){return o()}})};ne(Q,oe=>{_(n)===W.POLYGON?oe(re):oe(ge,!1)},!0)}S(J,ae)};ne(z,J=>{_(n)===W.RECTANGLE?J(H):J(j,!1)},!0)}S(G,F)};ne(w,G=>{_(n)===W.SQUARE?G(A):G(k,!1)},!0)}S(I,b)};ne(h,I=>{_(n)===W.ELLIPSE?I(m):I(E,!1)},!0)}S(g,p)};ne(c,g=>{_(n)===W.CIRCLE?g(u):g(f,!1)})}S(t,a),ue()}var HP=ee('<text text-anchor="middle" dominant-baseline="central"> </text>'),BP=ee('<g class="corner-tool"><!><!><!></g>');function Rp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function I(k,G){return G===W.TEXT_ONLY?k.value?k.value:"-":k.value??""}D(()=>r(),()=>{var k;y(i,(k=r())==null?void 0:k.id)}),D(()=>(Z(m()),Du),()=>{y(o,_n(m().toolId,Ht)??Du)}),D(()=>(Z(m()),_(o)),()=>{y(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var k;y(c,((k=_(a))==null?void 0:k.type)??W.CIRCLE)}),D(()=>_(a),()=>{var k;y(u,((k=_(a))==null?void 0:k.fontSize)??.2)}),D(()=>_(a),()=>{var k;y(f,((k=_(a))==null?void 0:k.fontColor)??"black")}),D(()=>_(a),()=>{y(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(m()),()=>{y(p,m().cells)}),D(()=>_(p),()=>{y(h,new Te(_(p)[_(p).length-1].c,_(p)[_(p).length-1].r))}),we(),he();var b=ye(),w=se(b);{var A=k=>{var G=BP(),F=V(G);{var z=Q=>{br(Q,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(g)}})};ne(F,Q=>{E()&&E()===_(i)&&Q(z)})}var H=U(F);br(H,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(a)}});var j=U(H);{var J=Q=>{TP(Q,{get cornerTool(){return m()}})},ae=Q=>{var re=HP(),ge=V(re,!0);te(()=>at(ge,I(m(),_(c)))),B(re),te(()=>{L(re,"x",_(h).x),L(re,"y",_(h).y),L(re,"font-size",_(u)),L(re,"fill",_(f))}),S(Q,re)};ne(j,Q=>{m().toolId===d.QUADRUPLE?Q(J):Q(ae,!1)})}B(G),S(k,G)};ne(w,k=>{_(p).length===4&&k(A)})}S(t,b),ue()}var WP=ee('<g class="corner-tool"><!></g>');function zP(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=WP(),f=V(u);Rp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}var YP=ee('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function bs(t,e){ce(e,!1);const n=N();let r=M(e,"value",8,""),i=M(e,"fontSize",8,.2),o=M(e,"x",8),a=M(e,"y",8),c=M(e,"position",8,"TL"),u=M(e,"fontColor",8,"var(--text-primary-color)"),f=M(e,"fontWeight",8,400),g=N(null),p=N(null);function h(A,k,G){const F=["TL","TR"].includes(G),H=["TL","BL"].includes(G)?A+.05:A,j=k;return new Te(H,j)}function m(A){return["TL","BL"].includes(A)?"start":"end"}function E(A){return["TL","TR"].includes(A)?"text-before-edge":""}cw(()=>{if(!_(g)||!_(p))return;const A=_(g).getBBox();_(p).setAttribute("x",String(A.x)),_(p).setAttribute("y",String(A.y+A.height*.1)),_(p).setAttribute("width",String(A.width)),_(p).setAttribute("height",String(A.height*.8))}),D(()=>(Z(o()),Z(a()),Z(c())),()=>{y(n,h(o(),a(),c()))}),we(),he();var I=ye(),b=se(I);{var w=A=>{var k=YP(),G=se(k);ki(G,H=>y(p,H),()=>_(p));var F=U(G);te(()=>L(F,"text-anchor",m(c()))),te(()=>L(F,"dominant-baseline",E(c())));var z=V(F,!0);B(F),ki(F,H=>y(g,H),()=>_(g)),te(()=>{var H,j;L(F,"x",(H=_(n))==null?void 0:H.x),L(F,"y",(j=_(n))==null?void 0:j.y),L(F,"font-size",i()),L(F,"fill",u()),L(F,"font-weight",f()),at(z,r())}),S(A,k)};ne(b,A=>{r().length&&A(w)})}S(t,I),ue()}var jP=ee('<text text-anchor="middle" dominant-baseline="central"> </text>'),KP=ee('<g class="center-corner-or-edge-tool"><!><!><!></g>');function VP(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N();let h=M(e,"tool",8),m=M(e,"c_id",8);const E=h().cell,I=_n(h().toolId,Ht)??Tu;function b(j,J){return J===W.TEXT_ONLY?j.value?j.value:"-":j.value??""}D(()=>r(),()=>{var j;y(i,(j=r())==null?void 0:j.id)}),D(()=>Z(h()),()=>{y(o,h().shape??I)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>{},()=>{y(c,E)}),D(()=>(_(o),W),()=>{var j;y(u,((j=_(o))==null?void 0:j.type)||W.CIRCLE)}),D(()=>_(o),()=>{var j;y(f,((j=_(o))==null?void 0:j.fontSize)??.2)}),D(()=>_(o),()=>{var j;y(g,((j=_(o))==null?void 0:j.fontColor)??"black")}),D(()=>_(c),()=>{y(p,_(c).r%1===.5&&_(c).c%1===.5)}),we(),he();var w=KP(),A=V(w);{var k=j=>{br(j,{get cx(){return _(c).c},get cy(){return _(c).r},get shape(){return _(a)}})};ne(A,j=>{m()===_(i)&&j(k)})}var G=U(A);br(G,{get cx(){return _(c).c},get cy(){return _(c).r},get shape(){return _(o)}});var F=U(G);{var z=j=>{var J=Qe(()=>b(h(),_(u))),ae=Qe(()=>Math.floor(_(c).c)),Q=Qe(()=>Math.floor(_(c).r));bs(j,{get value(){return _(J)},get x(){return _(ae)},get y(){return _(Q)},position:"TL",get fontColor(){return _(g)}})},H=j=>{var J=jP(),ae=V(J,!0);te(()=>at(ae,b(h(),_(u)))),B(J),te(()=>{L(J,"x",_(c).c),L(J,"y",_(c).r),L(J,"font-size",_(f)),L(J,"fill",_(g))}),S(j,J)};ne(F,j=>{_(p)?j(z):j(H,!1)})}B(w),S(t,w),ue()}var XP=ee('<rect stroke="none" fill="#5373ea80"></rect>'),qP=ee('<rect stroke="none" fill="#5373ea66"></rect>'),ZP=ee('<path fill="none" stroke-linecap="round"></path><!>',1),QP=ee('<g class="outside-direction-tool"><!><!><path fill="none" stroke-linecap="round"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function Th(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=()=>Ee(En,"$gridStore",n),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N(),m=N(),E=N(),I=N();let b=M(e,"tool",8),w=M(e,"c_id",8,void 0);const A=.03;function k(oe){return oe.value&&oe.value.length?oe.value:"-"}function G(oe,pe){const Ne=Ts(pe),xe=new Te(Ne.c,Ne.r).scale(.5),Oe=ir(oe),Ie=Oe.add(xe.scale(.5)),je=Oe.add(xe.scale(.8));return[Ie,je]}function F(oe,pe){const xe=G(oe,pe);let Oe=l_(.08,pe);Oe=Oe.map(bt=>bt.add(xe[1]));const Ie=ci(xe),je=ci(Oe);return Ie+je}D(()=>r(),()=>{var oe;y(o,(oe=r())==null?void 0:oe.id)}),D(()=>Z(b()),()=>{y(a,b().cell)}),D(()=>_(a),()=>{y(c,ir(_(a)))}),D(()=>(i(),Z(b())),()=>{y(u,i().getCellsInDirection(b().cell.r,b().cell.c,b().direction))}),D(()=>(Z(b()),th),()=>{y(f,_n(b().toolId,Ht)??th)}),D(()=>(Z(b()),_(f)),()=>{y(g,b().shape??_(f))}),D(()=>_(g),()=>{var oe;y(p,((oe=_(g))==null?void 0:oe.fontSize)??.5)}),D(()=>_(g),()=>{var oe;y(h,((oe=_(g))==null?void 0:oe.fontColor)??"var(--text-primary-color)")}),D(()=>_(g),()=>{var oe;y(m,((oe=_(g))==null?void 0:oe.stroke)??"var(--text-primary-color)")}),D(()=>_(g),()=>{y(E,{..._(g),stroke:"var(--constraint-selected-color)",strokeWidth:A+.07})}),D(()=>(_(a),Z(b())),()=>{y(I,F(_(a),b().direction))}),we(),he();var z=QP(),H=V(z);{var j=oe=>{var pe=ye(),Ne=se(pe);et(Ne,1,()=>_(u),It,(xe,Oe)=>{var Ie=XP();L(Ie,"width",1),L(Ie,"height",1),te(()=>{L(Ie,"x",_(Oe).c),L(Ie,"y",_(Oe).r)}),S(xe,Ie)}),S(oe,pe)};ne(H,oe=>{w()===void 0&&oe(j)})}var J=U(H);{var ae=oe=>{var pe=ZP(),Ne=se(pe),xe=U(Ne);et(xe,1,()=>_(u),It,(Oe,Ie)=>{var je=qP();L(je,"width",1),L(je,"height",1),te(()=>{L(je,"x",_(Ie).c),L(je,"y",_(Ie).r)}),S(Oe,je)}),te(()=>{L(Ne,"d",_(I)),L(Ne,"stroke",_(E).stroke),L(Ne,"stroke-width",_(E).strokeWidth)}),S(oe,pe)};ne(J,oe=>{w()&&w()===_(o)&&oe(ae)})}var Q=U(J);L(Q,"stroke-width",A);var re=U(Q),ge=V(re,!0);te(()=>at(ge,k(b()))),B(re),B(z),te(()=>{L(Q,"d",_(I)),L(Q,"stroke",_(m)),L(re,"x",_(c).x),L(re,"y",_(c).y),L(re,"font-size",_(p)),L(re,"fill",_(h))}),S(t,z),ue()}var JP=ee('<g class="outside-direction-tool"><!></g>'),e4=ee('<g class="outside-direction-preview"><!></g>');function Tp(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=u=>{var f=JP(),g=V(f);Th(g,{get tool(){return n()},get c_id(){return r()}}),B(f),te(()=>L(f,"data-id",`${r()}`)),S(u,f)},c=u=>{var f=e4();L(f,"opacity",.5);var g=V(f);Th(g,{get tool(){return n()}}),B(f),S(u,f)};ne(o,u=>{r()!==void 0?u(a):u(c,!1)})}S(t,i)}var t4=ee('<path fill="none"></path>');function ai(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"linePoints",8),f=M(e,"shape",8,void 0);const g="round",p="round";D(()=>Z(f()),()=>{var m;y(n,((m=f())==null?void 0:m.stroke)??"gray")}),D(()=>Z(f()),()=>{var m;y(r,((m=f())==null?void 0:m.strokeWidth)??.1)}),D(()=>Z(f()),()=>{var m;y(i,((m=f())==null?void 0:m.strokeDasharray)??0)}),D(()=>Z(f()),()=>{var m;y(o,((m=f())==null?void 0:m.strokeDashoffset)??0)}),D(()=>Z(f()),()=>{var m,E,I,b,w,A,k,G;y(a,{shortenHead:((E=(m=f())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((b=(I=f())==null?void 0:I.linePathOptions)==null?void 0:b.shortenTail)??.2,bezierRounding:((A=(w=f())==null?void 0:w.linePathOptions)==null?void 0:A.bezierRounding)??.2,closeLoops:((G=(k=f())==null?void 0:k.linePathOptions)==null?void 0:G.closeLoops)??!1})}),D(()=>(Z(u()),_(a)),()=>{y(c,ci(u(),_(a)))}),we(),he();var h=t4();L(h,"stroke-linejoin",g),L(h,"stroke-linecap",p),te(()=>{L(h,"d",_(c)),L(h,"stroke",_(n)),L(h,"stroke-width",_(r)),L(h,"stroke-dasharray",_(i)),L(h,"stroke-dashoffset",_(o))}),S(t,h),ue()}var n4=de("<!> <!> <!>",1);function r4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"linePoints",8),u=M(e,"shape",8);function f(b){const w=St.cloneDeep(b);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}D(()=>Z(c()),()=>{y(n,c().length)}),D(()=>(_(n),Z(c())),()=>{y(r,_(n)>1&&c()[0].equals(c()[_(n)-1]))}),D(()=>(_(n),Z(c())),()=>{y(i,_(n)>=0?c()[0]:void 0)}),D(()=>(_(n),Z(c())),()=>{y(o,_(n)>=0?c()[_(n)-1]:void 0)}),D(()=>Z(u()),()=>{y(a,f(u()))}),we(),he();var g=n4(),p=se(g);ai(p,{get linePoints(){return c()},get shape(){return u()}});var h=U(p,2);{var m=b=>{dr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(a)}})};ne(h,b=>{!_(r)&&_(i)&&b(m)})}var E=U(h,2);{var I=b=>{dr(b,{get x(){return _(o).x},get y(){return _(o).y},get shape(){return _(a)}})};ne(E,b=>{!_(r)&&_(o)&&b(I)})}S(t,g),ue()}var i4=ee('<g class="corner-line-tool"><!></g>');function o4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"tool",8);const c=_n(a().toolId,Ht)??ys;D(()=>(Z(a()),Te),()=>{y(n,a().coords.map(h=>new Te(h.c,h.r)))}),D(()=>Z(a()),()=>{y(r,a().shape??c)}),D(()=>(_(r),W),()=>{var h;y(i,((h=_(r))==null?void 0:h.type)||W.LINE)}),D(()=>_(r),()=>{var h;y(o,((h=_(r))==null?void 0:h.opacity)??1)}),we(),he();var u=i4(),f=V(u);{var g=h=>{r4(h,{get linePoints(){return _(n)},get shape(){return _(r)}})},p=h=>{ai(h,{get linePoints(){return _(n)},get shape(){return _(r)}})};ne(f,h=>{_(i)===W.MAZE_WALL?h(g):h(p,!1)})}B(u),te(()=>L(u,"opacity",_(o))),S(t,u),ue()}var s4=ee('<line stroke-linecap="butt" class="svelte-yr67cf"></line>');function Dh(t,e){ce(e,!1);const n=N(),r=N(),i=N();let o=M(e,"shape",8),a=M(e,"coords",8);const[c,u]=a(),f=u.c,g=c.c===u.c?u.c+1:u.c,p=u.r,h=c.r===u.r?u.r+1:u.r;D(()=>Z(o()),()=>{y(n,o().stroke??"black")}),D(()=>Z(o()),()=>{var E;y(r,(E=o())==null?void 0:E.opacity)}),D(()=>Z(o()),()=>{y(i,o().strokeWidth??.02)}),we(),he();var m=s4();L(m,"x1",f),L(m,"x2",g),L(m,"y1",p),L(m,"y2",h),te(()=>{L(m,"stroke",_(n)),L(m,"stroke-width",_(i)),L(m,"opacity",_(r))}),S(t,m),ue()}var a4=ee("<!><!>",1),l4=ee("<!><!>",1),c4=ee("<!><!>",1),u4=ee("<!><!>",1),d4=ee('<!><text text-anchor="middle" dominant-baseline="central"> </text>',1);function Dp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);function I(G,F){return F===W.TEXT_ONLY?G.value?G.value:"-":G.value??""}function b(G){if(G!==d.EDGE_INEQUALITY&&G!==d.ONE_WAY_DOOR)return 0;const F=ir(_(p)[0]);return ir(_(p)[1]).subtract(F).angle()/(2*Math.PI)*360}D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>(Z(m()),Tu),()=>{y(o,_n(m().toolId,Ht)??Tu)}),D(()=>(Z(m()),_(o)),()=>{y(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var G;y(c,((G=_(a))==null?void 0:G.type)||W.CIRCLE)}),D(()=>_(a),()=>{var G;y(u,((G=_(a))==null?void 0:G.fontSize)??.2)}),D(()=>_(a),()=>{var G;y(f,((G=_(a))==null?void 0:G.fontColor)??"black")}),D(()=>_(a),()=>{y(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(m()),()=>{y(p,m().cells)}),D(()=>_(p),()=>{y(h,yp(Fl(_(p))))}),we(),he();var w=ye(),A=se(w);{var k=G=>{var F=d4(),z=se(F);{var H=Q=>{var re=a4(),ge=se(re);{var oe=Ne=>{dr(Ne,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(g)}})};ne(ge,Ne=>{E()&&E()===_(i)&&Ne(oe)})}var pe=U(ge);dr(pe,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(a)}}),S(Q,re)},j=Q=>{var re=ye(),ge=se(re);{var oe=Ne=>{var xe=l4(),Oe=se(xe);{var Ie=qe=>{dr(qe,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(g)}})};ne(Oe,qe=>{E()&&E()===_(i)&&qe(Ie)})}var je=U(Oe);dr(je,{get x(){return _(h).x},get y(){return _(h).y},get shape(){return _(a)}}),S(Ne,xe)},pe=Ne=>{var xe=ye(),Oe=se(xe);{var Ie=qe=>{var bt=c4(),Rt=se(bt);{var Kt=$t=>{Dh($t,{get coords(){return _(p)},get shape(){return _(g)}})};ne(Rt,$t=>{E()&&E()===_(i)&&$t(Kt)})}var Gt=U(Rt);Dh(Gt,{get coords(){return _(p)},get shape(){return _(a)}}),S(qe,bt)},je=qe=>{var bt=u4(),Rt=se(bt);{var Kt=$t=>{br($t,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(g)}})};ne(Rt,$t=>{E()&&E()===_(i)&&$t(Kt)})}var Gt=U(Rt);br(Gt,{get cx(){return _(h).x},get cy(){return _(h).y},get shape(){return _(a)}}),S(qe,bt)};ne(Oe,qe=>{_(c)===W.BORDER_LINE?qe(Ie):qe(je,!1)},!0)}S(Ne,xe)};ne(ge,Ne=>{_(c)===W.TEXT_ONLY?Ne(oe):Ne(pe,!1)},!0)}S(Q,re)};ne(z,Q=>{m().toolId===d.EDGE_INEQUALITY||m().toolId===d.ONE_WAY_DOOR?Q(H):Q(j,!1)})}var J=U(z);te(()=>L(J,"transform",`rotate(${b(m().toolId)}, ${_(h).x}, ${_(h).y} )`));var ae=V(J,!0);te(()=>at(ae,I(m(),_(c)))),B(J),te(()=>{L(J,"x",_(h).x),L(J,"y",_(h).y),L(J,"font-size",_(u)),L(J,"fill",_(f))}),S(G,F)};ne(A,G=>{_(p).length===2&&G(k)})}S(t,w),ue()}var _4=ee('<g class="edge-tool"><!></g>');function f4(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=_4(),f=V(u);Dp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}var g4=ee('<path fill="none" stroke-linecap="round"></path>'),h4=ee('<path fill="none" stroke-linecap="round"></path>'),v4=ee('<path fill="none" stroke-linecap="round"></path>'),p4=ee("<!><!><!>",1);function kh(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N();let f=M(e,"tool",8),g=M(e,"c_id",8,void 0);D(()=>r(),()=>{var w;y(i,(w=r())==null?void 0:w.id)}),D(()=>(Z(f()),eh),()=>{y(o,_n(f().toolId,Ht)??eh)}),D(()=>(Z(f()),_(o)),()=>{y(a,f().shape??_(o))}),D(()=>_(a),()=>{y(c,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.03:.03})}),D(()=>_(a),()=>{y(u,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),we(),he();var p=p4(),h=se(p);{var m=w=>{var A=ye(),k=se(A);et(k,1,()=>f().directions,It,(G,F)=>{var z=g4();te(()=>L(z,"d",bu(f().cell,_(F)))),te(()=>{L(z,"stroke",_(c).stroke),L(z,"stroke-width",_(c).strokeWidth)}),S(G,z)}),S(w,A)};ne(h,w=>{w(m)})}var E=U(h);{var I=w=>{var A=ye(),k=se(A);et(k,1,()=>f().directions,It,(G,F)=>{var z=h4();te(()=>L(z,"d",bu(f().cell,_(F)))),te(()=>{L(z,"stroke",_(u).stroke),L(z,"stroke-width",_(u).strokeWidth)}),S(G,z)}),S(w,A)};ne(E,w=>{g()&&g()===_(i)&&w(I)})}var b=U(E);et(b,1,()=>f().directions,It,(w,A)=>{var k=v4();te(()=>L(k,"d",bu(f().cell,_(A)))),te(()=>{L(k,"stroke",_(a).stroke),L(k,"stroke-width",_(a).strokeWidth)}),S(w,k)}),S(t,p),ue()}var m4=ee('<g class="single-cell-multi-arrow-tool"><!></g>'),E4=ee('<g class="single-cell-multi-arrow-tool-preview"><!></g>');function kp(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=u=>{var f=m4(),g=V(f);kh(g,{get tool(){return n()},get c_id(){return r()}}),B(f),te(()=>L(f,"data-id",`${r()}`)),S(u,f)},c=u=>{var f=E4();L(f,"opacity",.5);var g=V(f);kh(g,{get tool(){return n()}}),B(f),S(u,f)};ne(o,u=>{r()!==void 0?u(a):u(c,!1)})}S(t,i)}var C4=ee('<defs class="bulb-defs"><g id="fog-bulb" transform="translate(-0.4 -0.4) scale(0.04)"><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="#ff0c" stroke="none"></path><path d="M7.83 13.67a4.29 4.29 0 0 1 2.18-8.02 4.29 4.29 0 0 1 2.18 8.02" fill="none" stroke="#000" stroke-width="0.5"></path><path d="M7.83 13.67v3.44m4.36-.73v-2.71m-4.36 3.44 4.36-.71m0-1.44-4.36.72m4.36-2.01-4.36.58z" fill="none" stroke="#000" stroke-width="0.5"></path></g></defs>');function I4(t){var e=C4(),n=V(e);L(n,"opacity",.5),B(e),S(t,e)}var b4=ee('<g class="fog-lights"><use href="#fog-bulb"></use></g>');function O4(t,e){ce(e,!1);const n=N();let r=M(e,"tool",8);M(e,"c_id",8,void 0),D(()=>Z(r()),()=>{y(n,{x:r().cell.c+.5,y:r().cell.r+.5})}),we(),he();var i=b4();te(()=>L(i,"transform",`translate(${_(n).x} ${_(n).y})`)),S(t,i),ue()}var w4=ee('<g class="fog-lights-layer svelte-1t48yul"></g>');function y4(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Jt,"$toolStore",n),i=N();let o=M(e,"element",8);D(()=>r(),()=>{y(i,r())}),we(),he();var a=w4();et(a,5,()=>Object.entries(o()),c=>c[0],(c,u)=>{O4(c,{get tool(){return _(u)[1]},get c_id(){return _(u)[0]}})}),B(a),te(()=>Lt(a,"inactive",_(i)!==d.FOG_LIGHTS)),S(t,a),ue()}var L4=ee('<g><path d="M-1,-1 L 1,1 M-1,1 L 1,-1" class="svelte-z97mbr"></path></g>');function c_(t,e){ce(e,!1);const n=N(),r=N(),i=N();let o=M(e,"cx",8),a=M(e,"cy",8),c=M(e,"c_id",8);D(()=>Z(c()),()=>{y(n,document.getElementById(`c-${c()}`))}),D(()=>_(n),()=>{var p;y(r,(p=_(n))==null?void 0:p.getBBox())}),D(()=>_(r),()=>{y(i,_(r)?Math.max(_(r).width,_(r).height):void 0)}),we();var u=ye(),f=se(u);{var g=p=>{var h=L4(),m=V(h);L(m,"stroke-width",.6),B(h),te(()=>L(h,"transform",`translate(${o()}, ${a()}) scale(${_(i)*.6})`)),S(p,h)};ne(f,p=>{_(i)&&p(g)})}S(t,u),ue()}var A4=ee('<g class="edge-tool-remove-preview svelte-pilba0"><!></g>'),S4=ee('<g class="edge-tool-preview"><!></g>');function N4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"tool_preview",8);D(()=>Z(c()),()=>{y(n,c().tool)}),D(()=>Z(c()),()=>{y(r,c().mode)}),D(()=>Z(c()),()=>{y(i,c().match_id)}),D(()=>_(n),()=>{y(o,_(n).cells)}),D(()=>_(o),()=>{y(a,yp(Fl(_(o))))}),we(),he();var u=ye(),f=se(u);{var g=h=>{var m=A4();L(m,"opacity",.5);var E=V(m);c_(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),B(m),S(h,m)},p=h=>{var m=S4();L(m,"opacity",.5);var E=V(m);Dp(E,{get tool(){return _(n)}}),B(m),S(h,m)};ne(f,h=>{_(r)==="remove"&&_(i)?h(g):h(p,!1)})}S(t,u),ue()}var x4=ee('<g class="corner-tool-remove-preview"><!></g>'),R4=ee('<g class="corner-tool-preview"><!></g>');function T4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N();let c=M(e,"tool_preview",8);D(()=>Z(c()),()=>{y(n,c().tool)}),D(()=>Z(c()),()=>{y(r,c().mode)}),D(()=>Z(c()),()=>{y(i,c().match_id)}),D(()=>_(n),()=>{y(o,_(n).cells)}),D(()=>_(o),()=>{y(a,new Te(_(o)[_(o).length-1].c,_(o)[_(o).length-1].r))}),we(),he();var u=ye(),f=se(u);{var g=h=>{var m=x4();L(m,"opacity",.5);var E=V(m);c_(E,{get cx(){return _(a).x},get cy(){return _(a).y},get c_id(){return _(i)}}),B(m),S(h,m)},p=h=>{var m=R4();L(m,"opacity",.5);var E=V(m);Rp(E,{get tool(){return _(n)}}),B(m),S(h,m)};ne(f,h=>{_(r)==="remove"&&_(i)?h(g):h(p,!1)})}S(t,u),ue()}var D4=ee('<path fill="none" stroke-linecap="round"></path>'),k4=ee('<path fill="none" stroke-linecap="round"></path>'),G4=ee('<!><!><path fill="none" stroke-linecap="round"></path>',1);function Gp(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N();let h=M(e,"tool",8),m=M(e,"c_id",8,void 0);D(()=>r(),()=>{var G;y(i,(G=r())==null?void 0:G.id)}),D(()=>(Z(h()),Jg),()=>{y(o,_n(h().toolId,Ht)??Jg)}),D(()=>(Z(h()),_(o)),()=>{y(a,h().shape??_(o))}),D(()=>_(a),()=>{y(c,_(a).strokeWidth??.1)}),D(()=>_(a),()=>{y(u,_(a).stroke??"black")}),D(()=>_(a),()=>{y(f,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.05:.05})}),D(()=>_(a),()=>{y(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(h()),()=>{y(p,Z$(h().cell,h().direction))}),we(),he();var E=G4(),I=se(E);{var b=G=>{var F=D4();te(()=>{L(F,"d",_(p)),L(F,"stroke",_(f).stroke),L(F,"stroke-width",_(f).strokeWidth)}),S(G,F)};ne(I,G=>{G(b)})}var w=U(I);{var A=G=>{var F=k4();te(()=>{L(F,"d",_(p)),L(F,"stroke",_(g).stroke),L(F,"stroke-width",_(g).strokeWidth)}),S(G,F)};ne(w,G=>{m()&&m()===_(i)&&G(A)})}var k=U(w);te(()=>{L(k,"d",_(p)),L(k,"stroke",_(u)),L(k,"stroke-width",_(c))}),S(t,E),ue()}var M4=ee('<g class="single-cell-arrow-tool-remove-preview"><!></g>'),U4=ee('<g class="single-cell-arrow-tool-preview"><!></g>');function $4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"tool_preview",8);D(()=>Z(a()),()=>{y(n,a().tool)}),D(()=>Z(a()),()=>{y(r,a().mode)}),D(()=>Z(a()),()=>{y(i,a().match_id)}),D(()=>_(n),()=>{y(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),we(),he();var c=ye(),u=se(c);{var f=p=>{var h=M4();L(h,"opacity",.5);var m=V(h);c_(m,{get cx(){return _(o).x},get cy(){return _(o).y},get c_id(){return _(i)}}),B(h),S(p,h)},g=p=>{var h=U4();L(h,"opacity",.5);var m=V(h);Gp(m,{get tool(){return _(n)}}),B(h),S(p,h)};ne(u,p=>{_(r)==="remove"&&_(i)?p(f):p(g,!1)})}S(t,c),ue()}var F4=de("<!> <!>",1);function Mp(t,e){ce(e,!1);const n=N(),r=N();let i=M(e,"cells",8),o=M(e,"shape",8,Nd),a=M(e,"value",8,void 0);D(()=>Z(i()),()=>{y(n,i()[0])}),D(()=>_(n),()=>{y(r,new Te(_(n).c,_(n).r))}),we(),he();var c=F4(),u=se(c);Gr(u,{get cells(){return i()},get shape(){return o()}});var f=U(u,2);{var g=p=>{bs(p,{get value(){return a()},get x(){return _(r).x},get y(){return _(r).y},position:"TL"})};ne(f,p=>{a()&&a().length&&p(g)})}S(t,c),ue()}var P4=ee('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Gh(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(a$,"$minimumConstraintsStore",n),i=()=>Ee(l$,"$maximumConstraintsStore",n),o=N(),a=N(),c=N();let u=M(e,"coord",8),f=M(e,"minOrMax",8);function g(b,w){const A=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let G=0;G<k.length;G++){let F=k[G];const z={r:b.r+F[1],c:b.c+F[0]};A[G]=!Object.values(w).some(H=>Ke(z,H.cell))}return A}function p(b,w){let A=X$(f(),b.r,b.c);const k=g(b,w);return A=A.filter((F,z)=>k[z]),A.map(F=>Po(F,!1)).join("")}function h(b,w){return f()==="max"?w:b}D(()=>Z(u()),()=>{y(o,u().c)}),D(()=>Z(u()),()=>{y(a,u().r)}),D(()=>(r(),i()),()=>{y(c,h(r(),i()))}),we(),he();var m=P4(),E=V(m);L(E,"width",1),L(E,"height",1);var I=U(E);te(()=>L(I,"d",p(u(),_(c)))),B(m),te(()=>{L(E,"x",_(o)),L(E,"y",_(a))}),S(t,m),ue()}var H4=ee("<circle></circle>");function B4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"x",8),f=M(e,"y",8),g=M(e,"value",8),p=M(e,"shape",8);D(()=>Z(p()),()=>{y(n,p().r??.35)}),D(()=>Z(p()),()=>{y(r,p().stroke??"black")}),D(()=>Z(p()),()=>{var m;y(i,(m=p())==null?void 0:m.opacity)}),D(()=>Z(p()),()=>{y(o,p().strokeWidth??.02)}),D(()=>Z(g()),()=>{y(a,g()==="1"?"var(--constraint-color-red)":g()==="2"?"var(--constraint-color-green)":g()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>Z(p()),()=>{y(c,p().strokeDasharray??0)}),we(),he();var h=H4();te(()=>{L(h,"cx",u()),L(h,"cy",f()),L(h,"r",_(n)),L(h,"stroke",_(r)),L(h,"stroke-width",_(o)),L(h,"fill",_(a)),L(h,"opacity",_(i)),L(h,"stroke-dasharray",_(c))}),S(t,h),ue()}var W4=ee("<!><!>",1),z4=ee("<!><!>",1),Y4=ee("<!><!><!>",1),j4=ee('<g class="single-cell-tool"><!><!></g>');function Up(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N();let m=M(e,"tool",8),E=M(e,"c_id",8,void 0);D(()=>r(),()=>{var F;y(i,(F=r())==null?void 0:F.id)}),D(()=>(Z(m()),Qg),()=>{y(o,_n(m().toolId,Ht)??Qg)}),D(()=>(Z(m()),_(o)),()=>{y(a,m().shape??_(o))}),D(()=>(_(a),W),()=>{var F;y(c,((F=_(a))==null?void 0:F.type)||W.CIRCLE)}),D(()=>_(a),()=>{y(u,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{y(f,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),D(()=>Z(m()),()=>{y(g,{x:m().cell.c+.5,y:m().cell.r+.5})}),D(()=>Z(m()),()=>{y(p,new Te(m().cell.c,m().cell.r))}),D(()=>Z(m()),()=>{y(h,m().value)}),we(),he();var I=j4(),b=V(I);{var w=F=>{Gh(F,{get coord(){return m().cell},minOrMax:"min"})},A=F=>{var z=ye(),H=se(z);{var j=ae=>{Gh(ae,{get coord(){return m().cell},minOrMax:"max"})},J=ae=>{var Q=ye(),re=se(Q);{var ge=pe=>{var Ne=W4(),xe=se(Ne);{var Oe=je=>{br(je,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(f)}})};ne(xe,je=>{E()&&E()===_(i)&&je(Oe)})}var Ie=U(xe);B4(Ie,{get x(){return _(g).x},get y(){return _(g).y},get value(){return _(h)},get shape(){return _(a)}}),S(pe,Ne)},oe=pe=>{var Ne=ye(),xe=se(Ne);{var Oe=je=>{var qe=z4(),bt=se(qe);{var Rt=$t=>{var rn=Qe(()=>[m().cell]);Gr($t,{get cells(){return _(rn)},get shape(){return _(f)}})};ne(bt,$t=>{E()&&E()===_(i)&&$t(Rt)})}var Kt=U(bt),Gt=Qe(()=>[m().cell]);Mp(Kt,{get cells(){return _(Gt)},get shape(){return _(a)},get value(){return m().value}}),S(je,qe)},Ie=je=>{var qe=Y4(),bt=se(qe);{var Rt=rn=>{br(rn,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(u)}})};ne(bt,rn=>{rn(Rt)})}var Kt=U(bt);{var Gt=rn=>{br(rn,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(f)}})};ne(Kt,rn=>{E()&&E()===_(i)&&rn(Gt)})}var $t=U(Kt);br($t,{get cx(){return _(g).x},get cy(){return _(g).y},get shape(){return _(a)}}),S(je,qe)};ne(xe,je=>{_(c)===W.CAGE?je(Oe):je(Ie,!1)},!0)}S(pe,Ne)};ne(re,pe=>{m().toolId===d.COLORED_COUNTING_CIRCLES?pe(ge):pe(oe,!1)},!0)}S(ae,Q)};ne(H,ae=>{m().toolId===d.MAXIMUM?ae(j):ae(J,!1)},!0)}S(F,z)};ne(b,F=>{m().toolId===d.MINIMUM?F(w):F(A,!1)})}var k=U(b);{var G=F=>{bs(F,{get value(){return _(h)},get x(){return _(p).x},get y(){return _(p).y},position:"TL"})};ne(k,F=>{_(c)!==W.CAGE&&m().toolId!==d.COLORED_COUNTING_CIRCLES&&_(h)&&F(G)})}B(I),te(()=>L(I,"data-id",`${E()}`)),S(t,I),ue()}var K4=ee('<g class="single-cell-tool-preview"><!></g>');function V4(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"tool_preview",8);D(()=>Z(a()),()=>{y(n,a().tool)}),D(()=>Z(a()),()=>{y(r,a().mode)}),D(()=>Z(a()),()=>{y(i,a().match_id)}),D(()=>_(n),()=>{y(o,{x:_(n).cell.c+.5,y:_(n).cell.r+.5})}),we(),he();var c=K4();L(c,"opacity",.5);var u=V(c);Up(u,{get tool(){return _(n)}}),B(c),S(t,c),ue()}var X4=ee('<g class="single-cell-arrow-tool"><!></g>');function q4(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=X4(),f=V(u);Gp(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}var Z4=ee('<g class="single-cell-tool"><!></g>');function Q4(t,e){let n=M(e,"tool",8),r=M(e,"c_id",8,void 0);var i=ye(),o=se(i);{var a=c=>{var u=Z4(),f=V(u);Up(f,{get tool(){return n()},get c_id(){return r()}}),B(u),te(()=>L(u,"id",`c-${r()}`)),S(c,u)};ne(o,c=>{r()!==void 0&&c(a)})}S(t,i)}function J4(t,e){ce(e,!1);let n=M(e,"tool",8),r=M(e,"c_id",8);he();var i=ye(),o=se(i);{var a=c=>{var u=ye(),f=se(u);{var g=h=>{q4(h,{get tool(){return n()},get c_id(){return r()}})},p=h=>{var m=ye(),E=se(m);{var I=w=>{kp(w,{get tool(){return n()},get c_id(){return r()}})},b=w=>{var A=ye(),k=se(A);{var G=F=>{Q4(F,{get tool(){return n()},get c_id(){return r()}})};ne(k,F=>{n().type==="SIMPLE"&&F(G)},!0)}S(w,A)};ne(E,w=>{n().type==="MULTIARROW"?w(I):w(b,!1)},!0)}S(h,m)};ne(f,h=>{n().type==="ARROW"?h(g):h(p,!1)})}S(c,u)};ne(o,c=>{n().toolId!==d.FOG_LIGHTS&&c(a)})}S(t,i),ue()}var e6=de("<!> <!> <!>",1);function wu(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N();let a=M(e,"linePoints",8),c=M(e,"shape",8,ys);function u(b){var k;const w=St.cloneDeep(b);w.r=w.r||.2;const A=w.r;return w.strokeDasharray=b.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:A,shortenTail:A,bezierRounding:(k=w.linePathOptions)==null?void 0:k.bezierRounding},w}D(()=>Z(a()),()=>{y(n,a().length)}),D(()=>(_(n),Z(a())),()=>{y(r,_(n)>=0?a()[0]:void 0)}),D(()=>(_(n),Z(a())),()=>{y(i,_(n)>=0?a()[_(n)-1]:void 0)}),D(()=>Z(c()),()=>{y(o,u(c()))}),we(),he();var f=e6(),g=se(f);{var p=b=>{dr(b,{get x(){return _(r).x},get y(){return _(r).y},get shape(){return _(o)}})};ne(g,b=>{_(r)&&b(p)})}var h=U(g,2);{var m=b=>{ai(b,{get linePoints(){return a()},get shape(){return _(o)}})};ne(h,b=>{_(n)>1&&b(m)})}var E=U(h,2);{var I=b=>{dr(b,{get x(){return _(i).x},get y(){return _(i).y},get shape(){return _(o)}})};ne(E,b=>{_(i)&&b(I)})}S(t,f),ue()}var t6=de("<!> <!> <!>",1);function yu(t,e){ce(e,!1);const n=N(),r=N(),i=N();let o=M(e,"linePoints",8),a=M(e,"shape",12,ys);const c=4,u=.5;function f(G,F){const z=F.r??u,H=F.n??c,j=F.angle??0,J=Sp(z,H,new Te(0,0),!0,0),ae=(H+(G-j/360)*H%H)%H,Q=Math.floor(ae)%H,re=Math.ceil(ae)%H;return J[Q].lerp(J[re],ae%1).length()}function g(G){if(_(n)<=1)return 0;const F=o()[0],H=o()[1].subtract(F).angle()/(2*Math.PI);return f(H,G)}function p(G){if(_(n)<=1)return 0;const F=o()[_(n)-1],H=o()[_(n)-2].subtract(F).angle()/(2*Math.PI);return f(H,G)}function h(G){var z;const F=St.cloneDeep(G);return F.r=F.r||u,F.opacity=1,F.linePathOptions={shortenHead:g(F),shortenTail:p(F),bezierRounding:(z=F.linePathOptions)==null?void 0:z.bezierRounding},F}D(()=>Z(o()),()=>{y(n,o().length)}),D(()=>(_(n),Z(o())),()=>{y(r,_(n)>=0?o()[0]:void 0)}),D(()=>(_(n),Z(o())),()=>{y(i,_(n)>=0?o()[_(n)-1]:void 0)}),D(()=>Z(a()),()=>{a(h(a()))}),we(),he();var m=t6(),E=se(m);{var I=G=>{il(G,{get cx(){return _(r).x},get cy(){return _(r).y},get shape(){return a()}})};ne(E,G=>{_(r)&&G(I)})}var b=U(E,2);{var w=G=>{ai(G,{get linePoints(){return o()},get shape(){return a()}})};ne(b,G=>{_(n)>1&&G(w)})}var A=U(b,2);{var k=G=>{il(G,{get cx(){return _(i).x},get cy(){return _(i).y},get shape(){return a()}})};ne(A,G=>{_(i)&&G(k)})}S(t,m),ue()}var n6=de("<!> <!>",1);function Lu(t,e){ce(e,!1);const n=N();let r=M(e,"linePoints",8),i=M(e,"shape",8,ys);function o(m){var b,w,A;const E=St.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}function a(m){var b,w,A;const E=St.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const I=E.r;return E.linePathOptions={shortenHead:((b=E.linePathOptions)==null?void 0:b.shortenHead)||I,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(A=E.linePathOptions)==null?void 0:A.bezierRounding},E}D(()=>Z(r()),()=>{y(n,r().length>0?r()[0]:void 0)}),we(),he();var c=n6(),u=se(c);{var f=m=>{var E=Qe(()=>o(i()));ai(m,{get linePoints(){return r()},get shape(){return _(E)}})};ne(u,m=>{r().length>1&&m(f)})}var g=U(u,2);{var p=m=>{var E=Qe(()=>o(i()));dr(m,{get x(){return _(n).x},get y(){return _(n).y},get shape(){return _(E)}})},h=m=>{var E=ye(),I=se(E);{var b=w=>{var A=Qe(()=>a(i()));il(w,{get cx(){return _(n).x},get cy(){return _(n).y},get shape(){return _(A)}})};ne(I,w=>{_(n)&&w(b)},!0)}S(m,E)};ne(g,m=>{_(n)&&i().type===W.THERMO_WITH_CIRCLE?m(p):m(h,!1)})}S(t,c),ue()}var r6=ee("<!><!><!>",1),i6=ee("<!><!><!>",1),o6=ee("<!><!><!>",1),s6=ee("<!><!><!>",1),a6=ee('<g class="line-tool"><!></g>');function l6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N();let p=M(e,"tool",8),h=M(e,"c_id",8);const m=_n(p().toolId,Ht)??ys;D(()=>r(),()=>{var A;y(i,(A=r())==null?void 0:A.id)}),D(()=>Z(p()),()=>{y(o,Fl(p().cells))}),D(()=>Z(p()),()=>{y(a,p().shape??m)}),D(()=>(_(a),W),()=>{var A;y(c,((A=_(a))==null?void 0:A.type)||W.LINE)}),D(()=>_(a),()=>{var A;y(u,((A=_(a))==null?void 0:A.opacity)??1)}),D(()=>_(a),()=>{y(f,{..._(a),stroke:"var(--grid-background-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.06:.06})}),D(()=>_(a),()=>{y(g,{..._(a),stroke:"var(--constraint-selected-color)",strokeWidth:_(a).strokeWidth?_(a).strokeWidth+.07:.07})}),we(),he();var E=a6(),I=V(E);{var b=A=>{var k=r6(),G=se(k);{var F=J=>{wu(J,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(G,J=>{J(F)})}var z=U(G);{var H=J=>{wu(J,{get linePoints(){return _(o)},get shape(){return _(g)}})};ne(z,J=>{h()===_(i)&&J(H)})}var j=U(z);wu(j,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(A,k)},w=A=>{var k=ye(),G=se(k);{var F=H=>{var j=i6(),J=se(j);{var ae=oe=>{yu(oe,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(J,oe=>{oe(ae)})}var Q=U(J);{var re=oe=>{yu(oe,{get linePoints(){return _(o)},get shape(){return _(g)}})};ne(Q,oe=>{h()===_(i)&&oe(re)})}var ge=U(Q);yu(ge,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(H,j)},z=H=>{var j=ye(),J=se(j);{var ae=re=>{var ge=o6(),oe=se(ge);{var pe=Ie=>{Lu(Ie,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(oe,Ie=>{Ie(pe)})}var Ne=U(oe);{var xe=Ie=>{Lu(Ie,{get linePoints(){return _(o)},get shape(){return _(g)}})};ne(Ne,Ie=>{h()===_(i)&&Ie(xe)})}var Oe=U(Ne);Lu(Oe,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(re,ge)},Q=re=>{var ge=s6(),oe=se(ge);{var pe=Ie=>{ai(Ie,{get linePoints(){return _(o)},get shape(){return _(f)}})};ne(oe,Ie=>{Ie(pe)})}var Ne=U(oe);{var xe=Ie=>{ai(Ie,{get linePoints(){return _(o)},get shape(){return _(g)}})};ne(Ne,Ie=>{h()===_(i)&&Ie(xe)})}var Oe=U(Ne);ai(Oe,{get linePoints(){return _(o)},get shape(){return _(a)}}),S(re,ge)};ne(J,re=>{_(c)===W.THERMO_WITH_CIRCLE||_(c)===W.THERMO_WITH_POLYGON?re(ae):re(Q,!1)},!0)}S(H,j)};ne(G,H=>{_(c)===W.LINE_WITH_POLYGON_ENDS?H(F):H(z,!1)},!0)}S(A,k)};ne(I,A=>{_(c)===W.LINE_WITH_CIRCLE_ENDS?A(b):A(w,!1)})}B(E),te(()=>L(E,"opacity",_(u))),S(t,E),ue()}var c6=ee('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter" stroke-linecap="round"></path></marker>');function $p(t,e){let n=M(e,"l",8,.2),r=M(e,"id",8),i=M(e,"strokeWidth",8),o=M(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=c6();L(u,"viewBox","0 0 1 1"),L(u,"refX",a),L(u,"refY",a),L(u,"markerWidth",1),L(u,"markerHeight",1);var f=V(u);L(f,"d",c),B(u),te(()=>{L(u,"id",r()),L(f,"stroke-width",i()),L(f,"stroke",o())}),S(t,u)}var u6=ee('<path class="arrow-line" fill="none"></path>'),d6=ee('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function _6(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N();let m=M(e,"tool",8),E=M(e,"arrowId",8);const I=_n(m().toolId,Ht)??vv,b="round",w="round",A=crypto.randomUUID(),k=`arrow-mask-${E()}-${A}`,G=`arrow-marker-${E()}-${A}`;D(()=>Z(m()),()=>{y(n,m().shape??I)}),D(()=>_(n),()=>{var Q;y(r,((Q=_(n))==null?void 0:Q.r)??.4)}),D(()=>_(n),()=>{var Q;y(i,((Q=_(n))==null?void 0:Q.stroke)??"gray")}),D(()=>_(n),()=>{var Q;y(o,((Q=_(n))==null?void 0:Q.strokeWidth)??.1)}),D(()=>_(n),()=>{var Q;y(a,((Q=_(n))==null?void 0:Q.strokeDasharray)??0)}),D(()=>_(n),()=>{var Q;y(c,((Q=_(n))==null?void 0:Q.opacity)??.8)}),D(()=>(_(r),_(n)),()=>{var Q,re,ge,oe;y(u,{shortenHead:_(r),shortenTail:((re=(Q=_(n))==null?void 0:Q.linePathOptions)==null?void 0:re.shortenTail)??.2,bezierRounding:((oe=(ge=_(n))==null?void 0:ge.linePathOptions)==null?void 0:oe.bezierRounding)??.4})}),D(()=>_(n),()=>{var Q;y(f,((Q=_(n))==null?void 0:Q.fill)??"none")}),D(()=>_(n),()=>{var Q;y(g,((Q=_(n))==null?void 0:Q.inset)??.2)}),D(()=>_(g),()=>{y(p,{...I,strokeDasharray:0,strokeLinejoin:"round",inset:_(g)})}),D(()=>Z(m()),()=>{y(h,rl(m().cells))}),we(),he();var F=d6(),z=se(F);L(z,"id",k);var H=U(V(z));B(z);var j=U(z);$p(j,{id:G,l:.2,get strokeWidth(){return _(o)},get stroke(){return _(i)}});var J=U(j);Gr(J,{get cells(){return m().cells},get shape(){return _(p)}});var ae=U(J);et(ae,1,()=>m().lines,It,(Q,re)=>{var ge=ye(),oe=se(ge);{var pe=Ne=>{var xe=u6();te(()=>L(xe,"d",rl(_(re),_(u)))),L(xe,"stroke-linejoin",b),L(xe,"stroke-linecap",w),L(xe,"marker-end",`url(#${G??""})`),te(()=>{L(xe,"stroke",_(i)),L(xe,"stroke-width",_(o)),L(xe,"opacity",_(c)),L(xe,"stroke-dasharray",_(a))}),S(Ne,xe)};ne(oe,Ne=>{_(re).length>1&&Ne(pe)})}S(Q,ge)}),te(()=>{L(H,"stroke-width",2*_(r)-_(o)),L(H,"d",_(h))}),S(t,F),ue()}var f6=ee('<path class="arrow-line" fill="none"></path>'),g6=ee('<mask maskUnits="userSpaceOnUse" x="0%" y="0%" width="100%" height="100%"><rect x="0%" y="0%" width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function Au(t,e){ce(e,!1);const n=N(),r=N(),i=N(),o=N(),a=N(),c=N();let u=M(e,"tool",8),f=M(e,"c_id",8),g=M(e,"shape",8);const p="round",h="round",m=crypto.randomUUID(),E=`arrow-mask-${f()}-${m}`,I=`arrow-marker-${f()}-${m}`;D(()=>Z(g()),()=>{var z;y(n,((z=g())==null?void 0:z.r)??.4)}),D(()=>Z(g()),()=>{var z;y(r,((z=g())==null?void 0:z.stroke)??"gray")}),D(()=>Z(g()),()=>{var z;y(i,((z=g())==null?void 0:z.strokeWidth)??.1)}),D(()=>Z(g()),()=>{var z;y(o,((z=g())==null?void 0:z.strokeDasharray)??0)}),D(()=>(_(n),Z(g())),()=>{var z,H,j,J;y(a,{shortenHead:_(n),shortenTail:((H=(z=g())==null?void 0:z.linePathOptions)==null?void 0:H.shortenTail)??.2,bezierRounding:((J=(j=g())==null?void 0:j.linePathOptions)==null?void 0:J.bezierRounding)??.4})}),D(()=>Z(u()),()=>{y(c,rl(u().cells))}),we(),he();var b=g6(),w=se(b);L(w,"id",E);var A=U(V(w));B(w);var k=U(w);$p(k,{id:I,l:.2,get strokeWidth(){return _(i)},get stroke(){return _(r)}});var G=U(k);L(G,"mask",`url(#${E??""})`);var F=U(G);et(F,1,()=>u().lines,It,(z,H)=>{var j=ye(),J=se(j);{var ae=Q=>{var re=f6();te(()=>L(re,"d",rl(_(H),_(a)))),L(re,"stroke-linejoin",p),L(re,"stroke-linecap",h),L(re,"marker-end",`url(#${I??""})`),te(()=>{L(re,"stroke",_(r)),L(re,"stroke-width",_(i)),L(re,"stroke-dasharray",_(o))}),S(Q,re)};ne(J,Q=>{_(H).length>1&&Q(ae)})}S(z,j)}),te(()=>{L(A,"stroke-width",2*_(n)-_(i)),L(A,"d",_(c)),L(G,"d",_(c)),L(G,"stroke-width",2*_(n)+_(i)),L(G,"stroke",_(r))}),S(t,b),ue()}var h6=ee("<!><!><!>",1),v6=ee('<g class="arrow-tool"><!></g>');function p6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N();let u=M(e,"tool",8),f=M(e,"c_id",8);const g=_n(u().toolId,Ht)??vv;D(()=>Z(u()),()=>{y(i,u().shape??g)}),D(()=>_(i),()=>{y(o,{..._(i),stroke:"var(--grid-background-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.06:.06})}),D(()=>_(i),()=>{y(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),D(()=>r(),()=>{var I;y(c,(I=r())==null?void 0:I.id)}),we(),he();var p=v6(),h=V(p);{var m=I=>{_6(I,{get tool(){return u()},get arrowId(){return f()}})},E=I=>{var b=h6(),w=se(b);{var A=z=>{Au(z,{get tool(){return u()},get c_id(){return f()},get shape(){return _(o)}})};ne(w,z=>{z(A)})}var k=U(w);{var G=z=>{Au(z,{get tool(){return u()},get c_id(){return f()},get shape(){return _(a)}})};ne(k,z=>{f()===_(c)&&z(G)})}var F=U(k);Au(F,{get tool(){return u()},get c_id(){return f()},get shape(){return _(i)}}),S(I,b)};ne(h,I=>{_(i).type===W.BULBOUS_ARROW?I(m):I(E,!1)})}B(p),S(t,p),ue()}var m6=ee('<g class="cage-tool"><!><!></g>');function E6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N();let c=M(e,"tool",8),u=M(e,"c_id",8);const f=_n(c().toolId,Ht)??Nd;D(()=>Z(c()),()=>{y(i,c().shape??f)}),D(()=>r(),()=>{var E;y(o,(E=r())==null?void 0:E.id)}),D(()=>_(i),()=>{y(a,{..._(i),stroke:"var(--constraint-selected-color)",strokeWidth:_(i).strokeWidth?_(i).strokeWidth+.07:.07})}),we(),he();var g=m6(),p=V(g);{var h=E=>{Gr(E,{get cells(){return c().cells},get shape(){return _(a)}})};ne(p,E=>{u()===_(o)&&E(h)})}var m=U(p);Mp(m,{get cells(){return c().cells},get shape(){return _(i)},get value(){return c().value}}),B(g),S(t,g),ue()}var C6=ee("<!><!>",1),I6=ee('<g class="clone-tool"><!><!><!><!><!></g>');function b6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Yt,"$currentConstraintStore",n),i=N(),o=N(),a=N(),c=N(),u=N(),f=N(),g=N(),p=N(),h=N(),m=N();let E=M(e,"tool",8),I=M(e,"c_id",8);const b=_n(E().toolId,Ht)??Lw,w=800,A=E().value;D(()=>r(),()=>{var ae;y(i,(ae=r())==null?void 0:ae.id)}),D(()=>Z(E()),()=>{y(o,E().shape??b)}),D(()=>_(o),()=>{y(a,{..._(o),stroke:"var(--constraint-selected-color)",strokeWidth:_(o).strokeWidth?_(o).strokeWidth+.07:.07})}),D(()=>_(o),()=>{y(c,_(o).inset??.15)}),D(()=>_(o),()=>{y(u,_(o).strokeWidth??.07)}),D(()=>_(o),()=>{y(f,_(o).fontColor??_(o).stroke??"black")}),D(()=>Z(E()),()=>{y(g,E().cells[E().cells.length-1])}),D(()=>Z(E()),()=>{y(p,E().cells2[E().cells2.length-1])}),D(()=>(_(g),_(c)),()=>{y(h,new Te(_(g).c+1-_(c)-.05,_(g).r+1-_(c)-.05))}),D(()=>(_(p),_(c)),()=>{y(m,new Te(_(p).c+1-_(c)-.05,_(p).r+1-_(c)-.05))}),we(),he();var k=I6(),G=V(k);{var F=ae=>{var Q=C6(),re=se(Q);Gr(re,{get cells(){return E().cells},get shape(){return _(a)}});var ge=U(re);Gr(ge,{get cells(){return E().cells2},get shape(){return _(a)}}),S(ae,Q)};ne(G,ae=>{I()===_(i)&&ae(F)})}var z=U(G);Gr(z,{get cells(){return E().cells},get shape(){return _(o)}});var H=U(z);bs(H,{value:A,get x(){return _(h).x},get y(){return _(h).y},position:"BR",get fontColor(){return _(f)},fontWeight:w});var j=U(H);Gr(j,{get cells(){return E().cells2},get shape(){return _(o)}});var J=U(j);bs(J,{value:A,get x(){return _(m).x},get y(){return _(m).y},position:"BR",get fontColor(){return _(f)},fontWeight:w}),B(k),S(t,k),ue()}var O6=ee('<g class="element-group"></g>'),w6=ee('<g class="element-group"></g>'),y6=ee('<g class="element-group"></g>'),L6=ee('<g class="element-group"></g>'),A6=ee('<g class="element-group"></g>'),S6=ee('<g class="element-group"></g>');function N6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(s$,"$underlayElementsStore",n),i=N();D(()=>r(),()=>{y(i,r())}),we(),he();var o=ye(),a=se(o);et(a,1,()=>_(i),It,(c,u)=>{var f=ye(),g=se(f);{var p=m=>{var E=O6();et(E,5,()=>Object.entries(_(u).constraints),I=>I[0],(I,b)=>{J4(I,{get tool(){return _(b)[1]},get c_id(){return _(b)[0]}})}),B(E),te(()=>L(E,"data-toolId",_(u).toolId)),S(m,E)},h=m=>{var E=ye(),I=se(E);{var b=A=>{var k=w6();et(k,5,()=>Object.entries(_(u).constraints),G=>G[0],(G,F)=>{l6(G,{get tool(){return _(F)[1]},get c_id(){return _(F)[0]}})}),B(k),te(()=>L(k,"data-toolId",_(u).toolId)),S(A,k)},w=A=>{var k=ye(),G=se(k);{var F=H=>{var j=y6();et(j,5,()=>Object.entries(_(u).constraints),J=>J[0],(J,ae)=>{p6(J,{get tool(){return _(ae)[1]},get c_id(){return _(ae)[0]}})}),B(j),te(()=>L(j,"data-toolId",_(u).toolId)),S(H,j)},z=H=>{var j=ye(),J=se(j);{var ae=re=>{var ge=L6();et(ge,5,()=>Object.entries(_(u).constraints),oe=>oe[0],(oe,pe)=>{E6(oe,{get tool(){return _(pe)[1]},get c_id(){return _(pe)[0]}})}),B(ge),te(()=>L(ge,"data-toolId",_(u).toolId)),S(re,ge)},Q=re=>{var ge=ye(),oe=se(ge);{var pe=xe=>{var Oe=A6();et(Oe,5,()=>Object.entries(_(u).constraints),Ie=>Ie[0],(Ie,je)=>{b6(Ie,{get tool(){return _(je)[1]},get c_id(){return _(je)[0]}})}),B(Oe),te(()=>L(Oe,"data-toolId",_(u).toolId)),S(xe,Oe)},Ne=xe=>{var Oe=ye(),Ie=se(Oe);{var je=qe=>{var bt=S6();et(bt,5,()=>Object.entries(_(u).constraints),Rt=>Rt[0],(Rt,Kt)=>{Tp(Rt,{get tool(){return _(Kt)[1]},get c_id(){return _(Kt)[0]}})}),B(bt),te(()=>L(bt,"data-toolId",_(u).toolId)),S(qe,bt)};ne(Ie,qe=>{xi(_(u).toolId)&&qe(je)},!0)}S(xe,Oe)};ne(oe,xe=>{Ad(_(u).toolId)?xe(pe):xe(Ne,!1)},!0)}S(re,ge)};ne(J,re=>{vl(_(u).toolId)?re(ae):re(Q,!1)},!0)}S(H,j)};ne(G,H=>{hl(_(u).toolId)?H(F):H(z,!1)},!0)}S(A,k)};ne(I,A=>{gl(_(u).toolId)?A(b):A(w,!1)},!0)}S(m,E)};ne(g,m=>{yd(_(u).toolId)?m(p):m(h,!1)})}S(c,f)}),S(t,o),ue()}var x6=ee('<svg id="board-svg" class="puzzle-board svelte-1t5bsl8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!><!><!><!><!><!><!></svg>');function R6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(En,"$gridStore",n),i=()=>Ee(ht,"$localConstraintsStore",n),o=()=>Ee(Jt,"$toolStore",n),a=()=>Ee(tr,"$cellsStore",n),c=()=>Ee(Lp,"$fogLightsStore",n),u=()=>Ee(_$,"$cornerLineToolsStore",n),f=()=>Ee(c$,"$edgeToolsStore",n),g=()=>Ee(d$,"$cornerToolsStore",n),p=()=>Ee(u$,"$centerCornerOrEdgeToolsStore",n),h=()=>Ee(Ju,"$simpleCellToolPreviewStore",n),m=()=>Ee(ed,"$singleCellArrowPreviewStore",n),E=()=>Ee(td,"$singleCellMultiArrowPreviewStore",n),I=()=>Ee(nd,"$edgeToolPreviewStore",n),b=()=>Ee(rd,"$cornerToolPreviewStore",n),w=()=>Ee(ja,"$outsideDirectionToolPreviewStore",n),A=N(),k=N(),G=N();let F=M(e,"svgRef",12,null);function z(){for(const[rt,Rn]of i().entries()){if(!xi(rt))continue;if(Object.entries(Rn).some(([jr,Tn])=>!Ut(Tn.cell,_(k))))return!0}return!1}function H(rt,Rn){const js=z(),jr=xi(Rn),Tn=js||jr?1:.2,Bo=-Tn,Wo=-Tn,zo=rt.nCols+2*Tn,Yo=rt.nRows+2*Tn;return{x:Bo,y:Wo,width:zo,height:Yo}}function j(rt){return`${rt.x} ${rt.y} ${rt.width} ${rt.height}`}D(()=>r(),()=>{y(A,r())}),D(()=>_(A),()=>{y(k,{nRows:_(A).nRows,nCols:_(A).nCols})}),D(()=>(_(k),o()),()=>{y(G,H(_(k),o()))}),we(),he();var J=x6();te(()=>L(J,"viewBox",j(_(G))));var ae=V(J);I4(ae);var Q=U(ae);CP(Q,{get boundingBox(){return _(G)},get gridShape(){return _(k)}});var re=U(Q);bP(re,{get gridShape(){return _(k)}});var ge=U(re);oF(ge,{get grid(){return r()}});var oe=U(ge);U$(oe,{get gridShape(){return _(k)}});var pe=U(oe);et(pe,5,a,It,(rt,Rn)=>{DF(rt,{get cell(){return _(Rn)}})}),B(pe);var Ne=U(pe);QF(Ne,{});var xe=U(Ne);y4(xe,{get element(){return c()}});var Oe=U(xe);N6(Oe,{});var Ie=U(Oe);P$(Ie,{});var je=U(Ie);mP(je,{});var qe=U(je);tF(qe,{});var bt=U(qe);Pa(bt,{get elements(){return u()},g_name:"corner-line-tools-layer",Component:o4});var Rt=U(bt);rF(Rt,{get boundingBox(){return _(G)}});var Kt=U(Rt);G$(Kt,{});var Gt=U(Kt);Pa(Gt,{get elements(){return f()},g_name:"edge-tools-layer",Component:f4});var $t=U(Gt);Pa($t,{get elements(){return g()},g_name:"corner-tools-layer",Component:zP});var rn=U($t);Pa(rn,{get elements(){return p()},g_name:"center-corner-edge-tools-layer",Component:VP});var hr=U(rn);XF(hr,{});var Wn=U(hr);et(Wn,5,a,It,(rt,Rn)=>{xF(rt,{get cell(){return _(Rn)}})}),B(Wn);var ji=U(Wn);LP(ji,{});var wr=U(ji);uP(wr,{});var yr=U(wr);{var $e=rt=>{V4(rt,{get tool_preview(){return h()}})};ne(yr,rt=>{dv(o())&&o()!==d.FOG_LIGHTS&&h()&&rt($e)})}var Le=U(yr);{var Me=rt=>{$4(rt,{get tool_preview(){return m()}})};ne(Le,rt=>{dl(o())&&m()&&rt(Me)})}var Ue=U(Le);{var Tt=rt=>{kp(rt,{get tool(){return E()}})};ne(Ue,rt=>{_l(o())&&E()&&rt(Tt)})}var Ho=U(Ue);{var Wl=rt=>{N4(rt,{get tool_preview(){return I()}})};ne(Ho,rt=>{fl(o())&&I()&&rt(Wl)})}var Yr=U(Ho);{var xn=rt=>{T4(rt,{get tool_preview(){return b()}})};ne(Yr,rt=>{Ld(o())&&b()&&rt(xn)})}var mi=U(Yr);{var Ki=rt=>{Tp(rt,{get tool(){return w()}})};ne(mi,rt=>{xi(o())&&w()&&rt(Ki)})}B(J),ki(J,rt=>F(rt),()=>F()),S(t,J),ue()}function T6(t){return Fw(t)?(ow(),!0):!1}function D6(t){return Pw(t)?(Qv(),!0):!1}function k6(t){return Hw(t)?(Jv(),!0):!1}function Su(t){(T6(t)||D6(t)||k6(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var G6=de('<div class="board-container svelte-m3kzqm" tabindex="-1"><!></div>');function M6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Ap,"$InputHandlerStore",n),i=()=>Ee(po,"$svgRefStore",n),o=N();let a=N(null);function c(h){return m=>{h&&_(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===_(a))&&h(m)}}D(()=>r(),()=>{y(o,r())}),we();var u=G6();Ge("keydown",au,function(...h){Su==null||Su.apply(this,h)});var f=Xg(()=>{var h;return c((h=_(o))==null?void 0:h.keyDown)});Ge("keydown",au,function(...h){var m;(m=_(f))==null||m.apply(this,h)});var g=Xg(()=>{var h;return c((h=_(o))==null?void 0:h.keyUp)});Ge("keyup",au,function(...h){var m;(m=_(g))==null||m.apply(this,h)});var p=V(u);R6(p,{get svgRef(){return Kh(),i()},set svgRef(h){Os(po,h)},$$legacy:!0}),B(u),ki(u,h=>y(a,h),()=>_(a)),Ge("pointerdown",u,du(rr(h=>{var m;h.currentTarget.focus(),(m=_(o))==null||m.pointerDown(h)})),!0),Ge("pointermove",u,du(rr(h=>{var m;h.currentTarget.focus(),(m=_(o))==null||m.pointerMove(h)})),!0),Ge("pointerup",u,du(rr(h=>{var m;h.currentTarget.focus(),(m=_(o))==null||m.pointerUp(h)})),!0),S(t,u),ue()}var U6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function $6(t){var e=U6();S(t,e)}var F6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function P6(t){var e=F6();S(t,e)}var H6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function B6(t){var e=H6();S(t,e)}var W6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function z6(t){var e=W6();S(t,e)}var Y6=de('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function j6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Go,"$commandHistoryStore",n),i=()=>Ee(Xu,"$selectOnStore",n),o=N(),a=N();function c(){Qv()}function u(){Jv()}function f(){console.log("check")}function g(){Os(Xu,!i())}D(()=>r(),()=>{y(o,r()._undoStack.length===0)}),D(()=>r(),()=>{y(a,r()._redoStack.length===0)}),we(),he();var p=Y6(),h=V(p),m=V(h);z6(m),B(h);var E=U(h,2),I=V(E);P6(I),B(E);var b=U(E,2);b.disabled=!0;var w=V(b);$6(w),B(b);var A=U(b,2),k=V(A);B6(k),B(A),B(p),te(()=>{h.disabled=_(o),E.disabled=_(a),L(A,"aria-checked",i()),Lt(A,"active",i())}),Ge("click",h,c),Ge("click",E,u),Ge("click",b,f),Ge("click",A,g),S(t,p),ue()}var K6=de('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),V6=de('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),X6=de('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),q6=de('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function Z6(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ui,"$settingsStore",n),i=()=>Ee(el,"$penColorStore",n),o=()=>Ee(Ap,"$InputHandlerStore",n),a=N(),c=N(),u=[];let f=M(e,"selectedTool",8);const g=[1,2,3,4,5,6,7,8,9,0],p=["A","B","C","D","E","F","G","H","I","O"];let h=N(!1);function m(H){return H?p:g}function E(H){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(H)}function I(H){const j=H.currentTarget;if(!j)return;const J=j.getAttribute("aria-checked");y(h,J!=="true")}D(()=>r(),()=>{y(a,r().penToolActive)}),D(()=>r(),()=>{y(c,r().letterToolActive)}),we(),he();var b=q6(),w=V(b);{var A=H=>{var j=ye(),J=se(j);et(J,1,()=>g,It,(ae,Q)=>{var re=K6(),ge=V(re);ln(ge);var oe;Di(2),B(re),te(()=>{L(re,"data-value",_(Q)),Lt(re,"active",i()===_(Q)),oe!==(oe=_(Q))&&(ge.value=(ge.__value=_(Q))==null?"":_(Q))}),cl(u,[],ge,()=>(_(Q),i()),pe=>Os(el,pe)),S(ae,re)}),S(H,j)},k=H=>{var j=ye(),J=se(j);et(J,1,()=>m(_(h)),It,(ae,Q)=>{var re=V6(),ge=V(re),oe=V(ge,!0);B(ge),Di(2),B(re),te(()=>{lw(re,_(Q)),at(oe,_(Q))}),Ge("click",re,function(...pe){var Ne;(Ne=o()&&o().padClick)==null||Ne.apply(this,pe)}),S(ae,re)}),S(H,j)};ne(w,H=>{f()===d.PEN_TOOL&&_(a)?H(A):H(k,!1)})}var G=U(w,2);{var F=H=>{var j=X6();te(()=>{L(j,"aria-checked",_(h)),Lt(j,"letter-checked",_(h)),Lt(j,"num-checked",!_(h))}),Ge("click",j,I),S(H,j)};ne(G,H=>{_(c)&&E(f())&&H(F)})}var z=U(G,2);B(b),te(()=>{Lt(b,"digit",f()===d.DIGIT),Lt(b,"center",f()===d.CENTER_PM),Lt(b,"corner",f()===d.CORNER_PM),Lt(b,"color",f()===d.HIGHLIGHTS),Lt(b,"pen",f()===d.PEN_TOOL),Lt(z,"letter-tool",_(c))}),Ge("click",z,function(...H){var j;(j=o()&&o().padClick)==null||j.apply(this,H)}),S(t,b),ue()}var Q6=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function J6(t){var e=Q6();S(t,e)}var e9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function t9(t){var e=e9();S(t,e)}var n9=de('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function ls(t,e){ce(e,!1);const n=[];let r=M(e,"selectedTool",12),i=M(e,"value",8),o=M(e,"title",8,void 0);function a(){qu(i())}he();var c=n9(),u=V(c);ln(u);var f,g=U(u,2);vt(g,e,"default",{}),B(c),te(()=>{L(c,"title",o()),Lt(c,"active",i()===r()),f!==(f=i())&&(u.value=(u.__value=i())==null?"":i())}),cl(n,[],u,()=>(i(),r()),r),Ge("change",u,a),S(t,c),ue()}var r9=de('<span aria-hidden="true">1</span>'),i9=de('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),o9=de('<span aria-hidden="true" style="font-size: 50%">123</span>'),s9=de('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),a9=de('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),l9=de('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function c9(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(ui,"$settingsStore",n);let i=M(e,"selectedTool",12);he();var o=l9(),a=V(o);ls(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=r9();S(h,E)},$$slots:{default:!0},$$legacy:!0});var c=U(a,2);ls(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=i9();S(h,E)},$$slots:{default:!0},$$legacy:!0});var u=U(c,2);ls(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=o9();S(h,E)},$$slots:{default:!0},$$legacy:!0});var f=U(u,2);ls(f,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(h){i(h)},children:(h,m)=>{var E=s9(),I=V(E);J6(I),B(E),S(h,E)},$$slots:{default:!0},$$legacy:!0});var g=U(f,2);{var p=h=>{ls(h,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var I=a9(),b=V(I);t9(b),B(I),S(m,I)},$$slots:{default:!0},$$legacy:!0})};ne(g,h=>{r().penToolActive&&h(p)})}B(o),S(t,o),ue()}var u9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function d9(t){var e=u9();S(t,e)}var _9=de('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ws(t,e){let n=M(e,"title",8,void 0),r=M(e,"clickCb",8,void 0);var i=_9(),o=V(i),a=V(o);vt(a,e,"default",{}),B(o),B(i),te(()=>L(i,"title",n())),Ge("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),S(t,i)}var f9=de('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),g9=de('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function h9(t,e){ce(e,!1);let n=M(e,"showModal",12,!1);function r(){n(!1)}function i(){tp(),tl(),n(!1)}he(),Wr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=g9(),u=U(V(c),2);xl(u,{children:(f,g)=>{var p=f9(),h=se(p),m=U(h,2);Ge("click",h,i),Ge("click",m,r),S(f,p)},$$slots:{default:!0}}),B(c),S(o,c)},$$slots:{default:!0},$$legacy:!0}),ue()}var v9=de("<!> <!>",1);function p9(t){let e=N(!1);function n(){y(e,!0)}var r=v9(),i=se(r);Ws(i,{title:"Restart",clickCb:n,children:(a,c)=>{d9(a)},$$slots:{default:!0}});var o=U(i,2);h9(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var m9=de('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function cs(t,e){let n=M(e,"title",8);var r=m9(),i=V(r),o=V(i,!0);B(i);var a=U(i,2);vt(a,e,"default",{}),B(r),te(()=>at(o,n())),S(t,r)}var E9=de('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function pn(t,e){let n=M(e,"description",8);var r=E9(),i=V(r),o=V(i,!0);B(i);var a=U(i,2),c=V(a);vt(c,e,"default",{}),B(a),B(r),te(()=>at(o,n())),S(t,r)}var C9=de('<div class="shortcut svelte-1cgt5u5"> </div>');function dn(t,e){let n=M(e,"shortcut",8);var r=C9(),i=V(r,!0);B(r),te(()=>at(i,n())),S(t,r)}var I9=de("<p></p>"),b9=de("<!> <!> <!> <!>",1),O9=de("<!> or <!>",1),w9=de("<!> <!> <!> <!> <!> <!> <!> <!>",1),y9=de("<!> <!>",1),L9=de('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function A9(t,e){let n=M(e,"showModal",12,!1);Wr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=L9(),a=V(o);cs(a,{title:"Setting Instructions",children:(p,h)=>{var m=I9();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",S(p,m)},$$slots:{default:!0}});var c=U(a,2);cs(c,{title:"General",children:(p,h)=>{pn(p,{description:"Toggle Darkmode",children:(m,E)=>{dn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=U(c,2);cs(u,{title:"Selection",children:(p,h)=>{var m=b9(),E=se(m);pn(E,{description:"Select cells",children:(A,k)=>{dn(A,{shortcut:"click/drag"})},$$slots:{default:!0}});var I=U(E,2);pn(I,{description:"Add to current selection",children:(A,k)=>{dn(A,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var b=U(I,2);pn(b,{description:"Remove from current selection",children:(A,k)=>{dn(A,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=U(b,2);pn(w,{description:"Add or remove from current selection",children:(A,k)=>{dn(A,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),S(p,m)},$$slots:{default:!0}});var f=U(u,2);cs(f,{title:"Change Tool",children:(p,h)=>{var m=w9(),E=se(m);pn(E,{description:"Cycle Tool",children:(z,H)=>{dn(z,{shortcut:"Space"})},$$slots:{default:!0}});var I=U(E,2);pn(I,{description:"Change to Digit Tool",children:(z,H)=>{dn(z,{shortcut:"Z"})},$$slots:{default:!0}});var b=U(I,2);pn(b,{description:"Change to Corner Pencilmark Tool",children:(z,H)=>{dn(z,{shortcut:"X"})},$$slots:{default:!0}});var w=U(b,2);pn(w,{description:"Change to Center Pencilmark Tool",children:(z,H)=>{dn(z,{shortcut:"C"})},$$slots:{default:!0}});var A=U(w,2);pn(A,{description:"Change to Highlights Tool",children:(z,H)=>{dn(z,{shortcut:"V"})},$$slots:{default:!0}});var k=U(A,2);pn(k,{description:"Quickshift To Corner Pencilmark Tool",children:(z,H)=>{dn(z,{shortcut:"Shift"})},$$slots:{default:!0}});var G=U(k,2);pn(G,{description:"Quickshift To Center Pencilmark Tool",children:(z,H)=>{dn(z,{shortcut:"Ctrl"})},$$slots:{default:!0}});var F=U(G,2);pn(F,{description:"Quickshift To Highlights Tool",children:(z,H)=>{var j=O9(),J=se(j);dn(J,{shortcut:"Shift + Ctrl"});var ae=U(J,2);dn(ae,{shortcut:"Alt"}),S(z,j)},$$slots:{default:!0}}),S(p,m)},$$slots:{default:!0}});var g=U(f,2);cs(g,{title:"Undo/Redo",children:(p,h)=>{var m=y9(),E=se(m);pn(E,{description:"Undo",children:(b,w)=>{dn(b,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var I=U(E,2);pn(I,{description:"Redo",children:(b,w)=>{dn(b,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),S(p,m)},$$slots:{default:!0}}),B(o),S(r,o)},$$slots:{default:!0},$$legacy:!0})}var S9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function N9(t){var e=S9();S(t,e)}var x9=de("<!> <!>",1);function R9(t){let e=N(!1);function n(){y(e,!0)}var r=x9(),i=se(r);Ws(i,{title:"Info",clickCb:n,children:(a,c)=>{N9(a)},$$slots:{default:!0}});var o=U(i,2);A9(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var T9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function D9(t){var e=T9();S(t,e)}var k9=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function G9(t){var e=k9();S(t,e)}function M9(t){let e=N(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),y(e,!_(e))}Ws(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=ye(),f=se(u);{var g=h=>{G9(h)},p=h=>{D9(h)};ne(f,h=>{_(e)?h(g):h(p,!1)})}S(a,u)},$$slots:{default:!0}})}function Fp(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"renderers",8),i=M(e,"options",8);he();var o=ye(),a=se(o);{var c=u=>{var f=ye(),g=se(f);qh(g,()=>r()[n().type],(p,h)=>{h(p,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var I=ye(),b=se(I);{var w=k=>{ol(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},A=k=>{var G=UO();te(()=>at(G,n().raw)),S(k,G)};ne(b,k=>{"tokens"in n()&&n().tokens?k(w):k(A,!1)})}S(m,I)},$$slots:{default:!0}})}),S(u,f)};ne(a,u=>{r()[n().type]&&u(c)})}S(t,o),ue()}function ol(t,e){let n=M(e,"tokens",8),r=M(e,"renderers",8),i=M(e,"options",8);var o=ye(),a=se(o);{var c=u=>{var f=ye(),g=se(f);et(g,1,n,It,(p,h)=>{Fp(p,{get token(){return _(h)},get renderers(){return r()},get options(){return i()}})}),S(u,f)};ne(a,u=>{n()&&u(c)})}S(t,o)}function Pp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function Hp(t){return t.startsWith("/")||t.startsWith("#")}function U9(t,e){return e.slug(t).replace(/--+/g,"-")}function $9(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;let o=N();D(()=>(Z(n()),Z(r())),()=>{y(o,U9(n().text,r().slugger))}),we(),he();var a=ye(),c=se(a);return Qh(c,()=>`h${n().depth}`,!1,(u,f)=>{let g;te(()=>g=Xh(u,g,{id:_(o)},void 0,u.namespaceURI===ad,u.nodeName.includes("-")));var p=ye(),h=se(p);vt(h,e,"default",{}),S(f,p)}),S(t,a),nt(e,"renderers",i),ue({renderers:i})}var F9=de("<blockquote><!></blockquote>");function P9(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=F9(),a=V(o);return vt(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}function H9(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8),o=N();D(()=>Z(n()),()=>{y(o,n().ordered?"ol":"ul")}),we(),he();var a=ye(),c=se(a);Qh(c,()=>_(o),!1,(u,f)=>{let g;te(()=>g=Xh(u,g,{start:n().start||1},void 0,u.namespaceURI===ad,u.nodeName.includes("-")));var p=ye(),h=se(p);et(h,1,()=>n().items,It,(m,E)=>{var I=Qe(()=>({..._(E)}));Fp(m,{get token(){return _(I)},get options(){return r()},get renderers(){return i()}})}),S(f,p)}),S(t,a),ue()}var B9=de("<li><!></li>");function W9(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=B9(),a=V(o);return vt(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var z9=de("<br>");function Y9(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=z9();return S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var j9=de("<pre><code> </code></pre>");function K9(t,e){ce(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=j9(),a=V(o),c=V(a,!0);return B(a),B(o),te(()=>{dw(a,`lang-${n().lang}`),at(c,n().text)}),S(t,o),nt(e,"options",r),nt(e,"renderers",i),ue({options:r,renderers:i})}var V9=de("<code> </code>");function X9(t,e){ce(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=V9(),a=V(o,!0);return te(()=>at(a,n().raw.slice(1,n().raw.length-1))),B(o),S(t,o),nt(e,"options",r),nt(e,"renderers",i),ue({options:r,renderers:i})}var q9=de('<th scope="col"><!></th>'),Z9=de("<td><!></td>"),Q9=de("<tr></tr>"),J9=de("<table><thead><tr></tr></thead><tbody></tbody></table>");function eH(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8);he();var o=J9(),a=V(o),c=V(a);et(c,5,()=>n().header,It,(f,g)=>{var p=q9(),h=V(p);ol(h,{get tokens(){return _(g).tokens},get options(){return r()},get renderers(){return i()}}),B(p),S(f,p)}),B(c),B(a);var u=U(a);et(u,5,()=>n().rows,It,(f,g)=>{var p=Q9();et(p,5,()=>_(g),It,(h,m)=>{var E=Z9(),I=V(E);ol(I,{get tokens(){return _(m).tokens},get options(){return r()},get renderers(){return i()}}),B(E),S(h,E)}),B(p),S(f,p)}),B(u),B(o),S(t,o),ue()}function tH(t,e){ce(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=ye(),a=se(o);return uw(a,()=>n().text),S(t,o),nt(e,"options",r),nt(e,"renderers",i),ue({options:r,renderers:i})}var nH=de("<p><!></p>");function rH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=nH(),a=V(o);return vt(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var iH=de("<a><!></a>");function oH(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=iH();te(()=>L(o,"href",Hp(n().href)?Pp(r().baseUrl,n().href):n().href));var a=V(o);return vt(a,e,"default",{}),B(o),te(()=>L(o,"title",n().title)),S(t,o),nt(e,"renderers",i),ue({renderers:i})}function sH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=ye(),a=se(o);return vt(a,e,"default",{}),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var aH=de("<dfn><!></dfn>");function lH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=aH(),a=V(o);return vt(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var cH=de("<del><!></del>");function uH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=cH(),a=V(o);return vt(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var dH=de("<em><!></em>");function _H(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=dH(),a=V(o);return vt(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var fH=de("<hr>");function gH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=fH();return S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var hH=de("<strong><!></strong>");function vH(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=hH(),a=V(o);return vt(a,e,"default",{}),B(o),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}var pH=de('<img class="markdown-image svelte-z38cge">');function mH(t,e){ce(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=pH();return te(()=>L(o,"src",Hp(n().href)?Pp(r().baseUrl,n().href):n().href)),te(()=>{L(o,"title",n().title),L(o,"alt",n().text)}),S(t,o),nt(e,"renderers",i),ue({renderers:i})}function Mh(t,e){ce(e,!1);const n=void 0,r=void 0,i=void 0;var o=ye(),a=se(o);return vt(a,e,"default",{}),S(t,o),nt(e,"token",n),nt(e,"options",r),nt(e,"renderers",i),ue({token:n,options:r,renderers:i})}const EH=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,CH=Object.hasOwnProperty;class IH{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=bH(e,n===!0);const o=i;for(;CH.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function bH(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(EH,"").replace(/ /g,"-"))}function u_(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Yi=u_();function Bp(t){Yi=t}const Wp=/[&<>"']/,OH=new RegExp(Wp.source,"g"),zp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,wH=new RegExp(zp.source,"g"),yH={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Uh=t=>yH[t];function Fn(t,e){if(e){if(Wp.test(t))return t.replace(OH,Uh)}else if(zp.test(t))return t.replace(wH,Uh);return t}const LH=/(^|[^\[])\^/g;function wt(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(LH,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function $h(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ms={exec:()=>null};function Fh(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,f=a;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function us(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function AH(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Ph(t,e,n,r){const i=e.href,o=e.title?Fn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:Fn(a)}}function SH(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class sl{constructor(e){Ce(this,"options");Ce(this,"rules");Ce(this,"lexer");this.options=e||Yi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:us(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=SH(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=us(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:us(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=us(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let f;for(f=0;f<r.length;f++)if(/^ {0,3}>/.test(r[f]))u.push(r[f]),c=!0;else if(!c)u.push(r[f]);else break;r=r.slice(f);const g=u.join(`
`),p=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${g}`:g,o=o?`${o}
${p}`:p;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,a,!0),this.lexer.state.top=h,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.blockquote(I);a[a.length-1]=b,i=i.substring(0,i.length-E.raw.length)+b.raw,o=o.substring(0,o.length-E.text.length)+b.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,I=E.raw+`
`+r.join(`
`),b=this.list(I);a[a.length-1]=b,i=i.substring(0,i.length-m.raw.length)+b.raw,o=o.substring(0,o.length-E.raw.length)+b.raw,r=I.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,f="",g="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;f=n[0],e=e.substring(f.length);let p=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),h=e.split(`
`,1)[0],m=!p.trim(),E=0;if(this.options.pedantic?(E=2,g=p.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,g=p.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(h)&&(f+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),F=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const z=e.split(`
`,1)[0];let H;if(h=z,this.options.pedantic?(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),H=h):H=h.replace(/\t/g,"    "),k.test(h)||G.test(h)||F.test(h)||w.test(h)||A.test(h))break;if(H.search(/[^ ]/)>=E||!h.trim())g+=`
`+H.slice(E);else{if(m||p.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(p)||G.test(p)||A.test(p))break;g+=`
`+h}!m&&!h.trim()&&(m=!0),f+=z+`
`,e=e.substring(z.length+1),p=H.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(f)&&(c=!0));let I=null,b;this.options.gfm&&(I=/^\[[ xX]\] /.exec(g),I&&(b=I[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:f,task:!!I,checked:b,loose:!1,text:g,tokens:[]}),o.raw+=f}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const f=o.items[u].tokens.filter(p=>p.type==="space"),g=f.length>0&&f.some(p=>/\n.*\n/.test(p.raw));o.loose=g}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Fh(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(Fh(c,a.header.length).map((u,f)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[f]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Fn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=us(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=AH(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Ph(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Ph(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,f=a,g=0;const p=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,n=n.slice(-1*e.length+a);(i=p.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){f+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){g+=u;continue}if(f-=u,f>0)continue;u=Math.min(u,u+f+g);const h=[...i[0]][0].length,m=e.slice(0,a+i.index+h+u);if(Math.min(a,u)%2){const I=m.slice(1,-1);return{type:"em",raw:m,text:I,tokens:this.lexer.inlineTokens(I)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Fn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Fn(n[1]),i="mailto:"+r):(r=Fn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Fn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Fn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Fn(n[0]),{type:"text",raw:n[0],text:r}}}}const NH=/^(?:[ \t]*(?:\n|$))+/,xH=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,RH=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,zs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,TH=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yp=/(?:[*+-]|\d{1,9}[.)])/,jp=wt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Yp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),d_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,DH=/^[^\n]+/,__=/(?!\s*\])(?:\\.|[^\[\]\\])+/,kH=wt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",__).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),GH=wt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Yp).getRegex(),Bl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",f_=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,MH=wt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",f_).replace("tag",Bl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Kp=wt(d_).replace("hr",zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bl).getRegex(),UH=wt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Kp).getRegex(),g_={blockquote:UH,code:xH,def:kH,fences:RH,heading:TH,hr:zs,html:MH,lheading:jp,list:GH,newline:NH,paragraph:Kp,table:ms,text:DH},Hh=wt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bl).getRegex(),$H={...g_,table:Hh,paragraph:wt(d_).replace("hr",zs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Hh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bl).getRegex()},FH={...g_,html:wt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",f_).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ms,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:wt(d_).replace("hr",zs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",jp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Vp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,PH=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Xp=/^( {2,}|\\)\n(?!\s*$)/,HH=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ys="\\p{P}\\p{S}",BH=wt(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ys).getRegex(),WH=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,zH=wt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ys).getRegex(),YH=wt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ys).getRegex(),jH=wt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ys).getRegex(),KH=wt(/\\([punct])/,"gu").replace(/punct/g,Ys).getRegex(),VH=wt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),XH=wt(f_).replace("(?:-->|$)","-->").getRegex(),qH=wt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",XH).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),al=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ZH=wt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",al).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qp=wt(/^!?\[(label)\]\[(ref)\]/).replace("label",al).replace("ref",__).getRegex(),Zp=wt(/^!?\[(ref)\](?:\[\])?/).replace("ref",__).getRegex(),QH=wt("reflink|nolink(?!\\()","g").replace("reflink",qp).replace("nolink",Zp).getRegex(),h_={_backpedal:ms,anyPunctuation:KH,autolink:VH,blockSkip:WH,br:Xp,code:PH,del:ms,emStrongLDelim:zH,emStrongRDelimAst:YH,emStrongRDelimUnd:jH,escape:Vp,link:ZH,nolink:Zp,punctuation:BH,reflink:qp,reflinkSearch:QH,tag:qH,text:HH,url:ms},JH={...h_,link:wt(/^!?\[(label)\]\((.*?)\)/).replace("label",al).getRegex(),reflink:wt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",al).getRegex()},od={...h_,escape:wt(Vp).replace("])","~|])").getRegex(),url:wt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},e7={...od,br:wt(Xp).replace("{2,}","*").getRegex(),text:wt(od.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ha={normal:g_,gfm:$H,pedantic:FH},ds={normal:h_,gfm:od,breaks:e7,pedantic:JH};class Hn{constructor(e){Ce(this,"tokens");Ce(this,"options");Ce(this,"state");Ce(this,"tokenizer");Ce(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Yi,this.options.tokenizer=this.options.tokenizer||new sl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ha.normal,inline:ds.normal};this.options.pedantic?(n.block=Ha.pedantic,n.inline=ds.pedantic):this.options.gfm&&(n.block=Ha.gfm,this.options.breaks?n.inline=ds.breaks:n.inline=ds.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ha,inline:ds}}static lex(e,n){return new Hn(n).lex(e)}static lexInline(e,n){return new Hn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let f;this.options.extensions.startBlock.forEach(g=>{f=g.call({lexer:this},u),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,f;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(f=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,f)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const p=e.slice(1);let h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},p),typeof h=="number"&&h>=0&&(g=Math.min(g,h))}),g<1/0&&g>=0&&(o=e.substring(0,g+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(f=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}}class ll{constructor(e){Ce(this,"options");Ce(this,"parser");this.options=e||Yi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Fn(i)+'">'+(r?o:Fn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Fn(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=$h(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=$h(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class v_{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class nr{constructor(e){Ce(this,"options");Ce(this,"renderer");Ce(this,"textRenderer");this.options=e||Yi,this.options.renderer=this.options.renderer||new ll,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new v_}static parse(e,n){return new nr(n).parse(e)}static parseInline(e,n){return new nr(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class Es{constructor(e){Ce(this,"options");Ce(this,"block");this.options=e||Yi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Hn.lex:Hn.lexInline}provideParser(){return this.block?nr.parse:nr.parseInline}}Ce(Es,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class t7{constructor(...e){Ce(this,"defaults",u_());Ce(this,"options",this.setOptions);Ce(this,"parse",this.parseMarkdown(!0));Ce(this,"parseInline",this.parseMarkdown(!1));Ce(this,"Parser",nr);Ce(this,"Renderer",ll);Ce(this,"TextRenderer",v_);Ce(this,"Lexer",Hn);Ce(this,"Tokenizer",sl);Ce(this,"Hooks",Es);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const f of u)r=r.concat(this.walkTokens(f.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const f=c[u].flat(1/0);r=r.concat(this.walkTokens(f,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new ll(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],f=o[c];o[c]=(...g)=>{let p=u.apply(o,g);return p===!1&&(p=f.apply(o,g)),p||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new sl(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],f=o[c];o[c]=(...g)=>{let p=u.apply(o,g);return p===!1&&(p=f.apply(o,g)),p}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new Es;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],f=o[c];Es.passThroughHooks.has(a)?o[c]=g=>{if(this.defaults.async)return Promise.resolve(u.call(o,g)).then(h=>f.call(o,h));const p=u.call(o,g);return f.call(o,p)}:o[c]=(...g)=>{let p=u.apply(o,g);return p===!1&&(p=f.apply(o,g)),p}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Hn.lex(e,n??this.defaults)}parser(e,n){return nr.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Hn.lex:Hn.lexInline,f=a.hooks?a.hooks.provideParser():e?nr.parse:nr.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(g=>u(g,a)).then(g=>a.hooks?a.hooks.processAllTokens(g):g).then(g=>a.walkTokens?Promise.all(this.walkTokens(g,a.walkTokens)).then(()=>g):g).then(g=>f(g,a)).then(g=>a.hooks?a.hooks.postprocess(g):g).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let g=u(r,a);a.hooks&&(g=a.hooks.processAllTokens(g)),a.walkTokens&&this.walkTokens(g,a.walkTokens);let p=f(g,a);return a.hooks&&(p=a.hooks.postprocess(p)),p}catch(g){return c(g)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Fn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Fi=new t7;function Ot(t,e){return Fi.parse(t,e)}Ot.options=Ot.setOptions=function(t){return Fi.setOptions(t),Ot.defaults=Fi.defaults,Bp(Ot.defaults),Ot};Ot.getDefaults=u_;Ot.defaults=Yi;Ot.use=function(...t){return Fi.use(...t),Ot.defaults=Fi.defaults,Bp(Ot.defaults),Ot};Ot.walkTokens=function(t,e){return Fi.walkTokens(t,e)};Ot.parseInline=Fi.parseInline;Ot.Parser=nr;Ot.parser=nr.parse;Ot.Renderer=ll;Ot.TextRenderer=v_;Ot.Lexer=Hn;Ot.lexer=Hn.lex;Ot.Tokenizer=sl;Ot.Hooks=Es;Ot.parse=Ot;Ot.options;Ot.setOptions;Ot.use;Ot.walkTokens;Ot.parseInline;nr.parse;Hn.lex;function n7(t){return new Hn().lex(t)}const r7=()=>({heading:$9,blockquote:P9,list:H9,list_item:W9,br:Y9,code:K9,codespan:X9,table:eH,html:tH,paragraph:rH,link:oH,text:sH,def:lH,del:uH,em:_H,hr:gH,strong:vH,image:mH,space:Mh,escape:Mh}),i7=()=>({baseUrl:"/",slugger:new IH});function o7(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},Zh(()=>{console.warn=t})}function Qp(t,e){ce(e,!1),o7();let n=M(e,"source",8),r=M(e,"options",24,()=>({})),i=M(e,"renderers",24,()=>({})),o=N(),a=N(),c=N();D(()=>(Z(n()),Z(i()),Z(r())),()=>{y(o,n7(n())),y(a,{...r7(),...i()}),y(c,{...i7(),...r()})}),we(),he(),ol(t,{get tokens(){return _(o)},get renderers(){return _(a)},get options(){return _(c)}}),ue()}var s7=de('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),a7=de('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),l7=de('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function c7(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(Hr,"$puzzleMetaStore",n),i=N();let o=M(e,"showModal",12,!1);function a(u){return u?Za(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{y(i,r())}),we(),he(),Wr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,f)=>{var g=l7(),p=V(g),h=V(p,!0);B(p);var m=U(p,2),E=V(m);te(()=>at(E,`by ${a(_(i).authors)??""}`)),B(m);var I=U(m,2),b=V(I),w=Qe(()=>c(_(i).ruleset));Qp(b,{get source(){return _(w)}}),B(I);var A=U(I,2);{var k=z=>{var H=s7(),j=U(se(H),2);te(()=>L(j,"href",_(i).ctcUrl)),S(z,H)};ne(A,z=>{var H,j;(j=(H=_(i))==null?void 0:H.ctcUrl)!=null&&j.length&&z(k)})}var G=U(A,2);{var F=z=>{var H=a7(),j=U(se(H),2);te(()=>L(j,"href",_(i).ctcYoutubeUrl)),S(z,H)};ne(G,z=>{var H,j;(j=(H=_(i))==null?void 0:H.ctcYoutubeUrl)!=null&&j.length&&z(F)})}B(g),te(()=>{var z;return at(h,((z=_(i))==null?void 0:z.title)||"Puzzle")}),S(u,g)},$$slots:{default:!0},$$legacy:!0}),ue()}var u7=ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function d7(t){var e=u7();S(t,e)}var _7=de("<!> <!>",1);function f7(t){let e=N(!1);function n(){y(e,!0)}var r=_7(),i=se(r);Ws(i,{title:"Rules",clickCb:n,children:(a,c)=>{d7(a)},$$slots:{default:!0}});var o=U(i,2);c7(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var g7=de("<!> <!>",1);function h7(t){let e=N(!1);function n(){y(e,!0)}var r=g7(),i=se(r);Ws(i,{title:"Settings",clickCb:n,children:(a,c)=>{ap(a)},$$slots:{default:!0}});var o=U(i,2);lp(o,{get showModal(){return _(e)},set showModal(a){y(e,a)},$$legacy:!0}),S(t,r)}var v7=de('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function p7(t){var e=v7(),n=V(e);h7(n);var r=U(n,2);f7(r);var i=U(r,2);M9(i);var o=U(i,2);R9(o);var a=U(o,2);p9(a),B(e),S(t,e)}var m7=de('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function E7(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(po,"$svgRefStore",n),i=()=>Ee(Hr,"$puzzleMetaStore",n),o=()=>Ee(Jt,"$toolStore",n),a=N(),c=N();function u(){r()&&r().focus()}function f(Q){return Q?Za(Q," & ",", "):"Anonymous"}function g(Q){return Q&&Q.length?Q:"Normal sudoku rules apply."}D(()=>i(),()=>{y(a,i().title??"Sudoku")}),D(()=>i(),()=>{y(c,f(i().authors))}),we(),he();var p=m7(),h=V(p),m=V(h),E=V(m),I=V(E,!0);B(E);var b=U(E,2),w=V(b);B(b),B(m);var A=U(m,2),k=V(A),G=Qe(()=>g(i().ruleset));Qp(k,{get source(){return _(G)}}),B(A),B(h);var F=U(h,2),z=V(F);p7(z);var H=U(z,2),j=V(H);Z6(j,{get selectedTool(){return o()}});var J=U(j,2);c9(J,{get selectedTool(){return Kh(),o()},set selectedTool(Q){Os(Jt,Q)},$$legacy:!0}),B(H);var ae=U(H,2);j6(ae,{}),B(F),B(p),te(()=>{at(I,_(a)),at(w,`by ${_(c)??""}`)}),Ge("click",F,rr(()=>{u()})),S(t,p),ue()}var C7=de('<div class="left-panel svelte-fwyvr2"><!></div>'),I7=de('<div class="game svelte-fwyvr2"><!> <div class="center-panel svelte-fwyvr2"><!></div> <div class="right-panel svelte-fwyvr2"><!></div></div>');function U7(t,e){ce(e,!1);const n=Ye(),r=()=>Ee(yl,"$gameModeStore",n),i=N();Zh(async()=>{const h=window.location.origin,m=qg===""?h:`${h}/${qg}`;try{await w8({workerURL:`${m}/minizinc-worker.js`,wasmURL:`${m}/minizinc.wasm`,dataURL:`${m}/minizinc.data`})}catch(E){const I="Failed to initialize MiniZinc: "+E.message;console.log(I)}}),D(()=>r(),()=>{y(i,r())}),we(),he();var o=I7(),a=V(o);{var c=h=>{var m=C7(),E=V(m);e$(E),B(m),S(h,m)};ne(a,h=>{_(i)===Io.SETTING&&h(c)})}var u=U(a,2),f=V(u);M6(f,{}),B(u);var g=U(u,2),p=V(g);E7(p,{}),B(g),B(o),S(t,o),ue()}export{U7 as G,M7 as b,kT as p,tl as r,nD as s};
