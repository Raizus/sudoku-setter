var KO=Object.defineProperty;var XO=(t,e,n)=>e in t?KO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>XO(t,typeof e!="symbol"?e+"":e,n);import{c as iu,o as qO,p as ZO,q as bu,a as R,s as ue,u as Me,t as ie,d as Se,v as QO,m as JO}from"./disclose-version.3svCrsF6.js";import{i as he}from"./legacy.B_57t12C.js";import{h as th,i as Vt,k as is,w as nh,u as qo,R as eI,V as tI,U as nI,j as ou,E as rh,D as ih,Z as rI,g as iI,q as _g,y as oI,aJ as Ou,x as sI,v as aI,$ as Iu,aq as oh,J as fg,aK as lI,a0 as cI,a6 as uI,l as dI,c as K,r as W,p as se,s as F,t as J,a as ae,a8 as h,ao as qe,aL as D,a5 as A,aM as Oe,ax as T,au as Z,f as de,aN as _I,aC as Zi,aO as Bc,an as gg}from"./utils.RIT-VyeY.js";import{s as it,i as fe,b as ds,a as Ee,m as sh}from"./store.NuZ8tbDJ.js";import{s as Jr,u as fI,a as gI,b as hI,c as pI,e as vI,f as mI,g as EI,h as CI,t as bI}from"./global.DsW0GPzn.js";import{e as st,i as Lt}from"./each.PbSqt-vc.js";import{i as OI,p as M}from"./props.C8fmRdit.js";import{w as Ht,g as ut,d as no}from"./index.6EGk5Kis.js";import{s as y,r as Kt,a as ah,c as II,b as wI,d as lh}from"./attributes.BKzmZSoT.js";import{s as nt}from"./render.B0SnzNQN.js";import{b as bi,c as ch}from"./this.Ddb0X6md.js";import{a as LI,o as uh}from"./index-client.BbVhJQV7.js";import{b as hg}from"./paths.Cr8bktup.js";function yI(t,e,n,r,i){var o=t,a="",c;th(()=>{if(a===(a=e()??"")){Vt&&is();return}c!==void 0&&(ih(c),c=void 0),a!==""&&(c=nh(()=>{if(Vt){qo.data;for(var u=is(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=eI(u);if(u===null)throw tI(),nI;iu(qo,_),o=ou(u);return}var p=a+"",g=qO(p);iu(rh(g),g.lastChild),o.before(g)}))})}function dt(t,e,n,r,i){var c;Vt&&is();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function dh(t,e,n,r,i,o){let a=Vt;Vt&&is();var c,u,_=null;Vt&&qo.nodeType===1&&(_=qo,is());var p=Vt?qo:t,g;th(()=>{const v=e()||null;var m=v==="svg"?Ou:null;v!==c&&(g&&(v===null?sI(g,()=>{g=null,u=null}):v===u?aI(g):ih(g)),v&&v!==u&&(g=nh(()=>{if(_=Vt?_:m?document.createElementNS(m,v):document.createElement(v),iu(_,_),r){Vt&&ZO(v)&&_.append(document.createComment(""));var C=Vt?rh(_):_.appendChild(iI());Vt&&(C===null?_g(!1):ou(C)),r(_,C)}oI.nodes_end=_,p.before(_)})),c=v,c&&(u=c))},rI),a&&(_g(!0),ou(p))}function Zr(t,e,n){var r=t.__className,i=_h(e);Vt&&t.getAttribute("class")===i?t.__className=i:(r!==i||Vt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function AI(t,e,n){var r=t.__className,i=_h(e);Vt&&t.className===i?t.__className=i:(r!==i||Vt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function _h(t,e){return(t??"")+""}function wt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function jn(t,e,n=e){var r=lI();bu(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=Wc(t)?zc(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(Vt&&t.defaultValue!==t.value||cI(e)==null&&t.value)&&n(Wc(t)?zc(t.value):t.value),Iu(()=>{var i=e();Wc(t)&&i===zc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Hc=new Set;function Wa(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),bu(n,"change",()=>{var _=n.__value;o&&(_=pg(a,_,n.checked)),i(_)},()=>i(o?[]:null)),Iu(()=>{var _=r();if(Vt&&n.defaultChecked!==n.checked){c=!0;return}o?(_=_||[],n.checked=_.includes(n.__value)):n.checked=OI(n.__value,_)}),oh(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),Hc.has(a)||(Hc.add(a),fg(()=>{a.sort((_,p)=>_.compareDocumentPosition(p)===4?-1:1),Hc.delete(a)})),fg(()=>{if(c){var _;if(o)_=pg(a,_,n.checked);else{var p=a.find(g=>g.checked);_=p==null?void 0:p.__value}i(_)}})}function pg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Wc(t){var e=t.type;return e==="number"||e==="range"}function zc(t){return t===""?null:+t}function NI(t,e,n=e){bu(t,"change",()=>{n(t.files)}),Iu(()=>{t.files=e()})}function Ze(t,e,n){var r=uI(t,e);r&&r.set&&(t[e]=n,oh(()=>{t[e]=null}))}function SI(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Kn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Yc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function xI(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=dI(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var ro=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(ro||{}),wu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(wu||{}),fh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(fh||{}),gh=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(gh||{}),hh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(hh||{}),ph=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(ph||{}),vh=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(vh||{}),mh=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(mh||{}),Eh=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(Eh||{}),Ch=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Ch||{}),bh=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(bh||{}),za=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(za||{}),Lu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Lu||{}),yu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t))(yu||{}),Au=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(Au||{}),Nu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Nu||{}),Su=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Su||{}),xu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(xu||{}),Ru=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Ru||{}),Tu=(t=>(t.CLONE_REGION="Clone Region",t))(Tu||{}),Du=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Du||{}),ku=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(ku||{}),Gu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Gu||{}),Mu=(t=>(t.MAZE_WALL="Maze Wall",t))(Mu||{}),Uu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Uu||{}),Fu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Fu||{}),Oh=(t=>(t.PEN_TOOL="Pen Tool",t))(Oh||{});const $u={...fh,...gh,...hh,...mh,...Eh,...vh,...Ch,...bh,...ph},Ih={...za,...Lu,...yu,...Au,...Nu,...Su,...xu,...Ru,...Tu,...Du,...ku,...Gu,...Mu,...Uu},d={...wu,...$u,...Ih,...Fu,...Oh};var S=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(S||{});function RI(t){return Object.values($u).includes(t)}function TI(t){return Object.values(Ih).includes(t)}function Pu(t){return Object.values(Lu).includes(t)||t===d.COSMETIC_CELL_ARROW}function Bu(t){return Object.values(yu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function DI(t){return Object.values(za).includes(t)||Pu(t)||Bu(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function Hu(t){return Object.values(Au).includes(t)||t===d.COSMETIC_EDGE}function wh(t){return Object.values(Nu).includes(t)||t===d.COSMETIC_CORNER}function Wu(t){return Object.values(Su).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function zu(t){return Object.values(xu).includes(t)||t===d.COSMETIC_ARROW}function Yu(t){return Object.values(Ru).includes(t)||t===d.COSMETIC_CAGE}function Lh(t){return Object.values(Gu).includes(t)}function yh(t){return Object.values(Mu).includes(t)}function Ah(t){return Object.values(Tu).includes(t)}function os(t){const e=Object.values(Du),n=Object.values(ku);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function kI(t){return Object.values(Uu).includes(t)}function GI(t){return Object.values(Fu).includes(t)}function ju(t){return Object.values(wu).includes(t)}const MI=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],UI=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function Nh(t){for(const e of Object.values(d))if(e===t)return e}function Sh(t,e){return Object.values(e).includes(t)}var $=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))($||{});function mn(t,e,n){n!==void 0&&(t[e]=n)}function FI(t){var e,n,r,i,o,a,c,u,_,p,g,v,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(p=t.strokeDasharray)!=null&&p.editable||(g=t.strokeDashoffset)!=null&&g.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function su(t){var n,r,i,o,a,c,u,_,p,g,v,m,C,b,O,w,x,k,U,z,Y,B;const e={type:t.type};return mn(e,"n",(n=t.n)==null?void 0:n.value),mn(e,"r",(r=t.r)==null?void 0:r.value),mn(e,"height",(i=t.height)==null?void 0:i.value),mn(e,"width",(o=t.width)==null?void 0:o.value),mn(e,"inset",(a=t.inset)==null?void 0:a.value),mn(e,"angle",(c=t.angle)==null?void 0:c.value),mn(e,"fill",(u=t.fill)==null?void 0:u.value),mn(e,"stroke",(_=t.stroke)==null?void 0:_.value),mn(e,"strokeWidth",(p=t.strokeWidth)==null?void 0:p.value),mn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),mn(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),mn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),mn(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),mn(e,"opacity",(b=t.opacity)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(O=t.linePathOptions)==null?void 0:O.shortenHead)==null?void 0:w.value,shortenTail:(k=(x=t.linePathOptions)==null?void 0:x.shortenTail)==null?void 0:k.value,bezierRounding:(z=(U=t.linePathOptions)==null?void 0:U.bezierRounding)==null?void 0:z.value,closeLoops:(B=(Y=t.linePathOptions)==null?void 0:Y.closeLoops)==null?void 0:B.value}),e}function $I(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const PI={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},BI={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},HI={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},xh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Rh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},_s={type:"Line",strokeWidth:.125,stroke:"gray"},Vu={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Ku={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},WI={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},zI={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var P=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(P||{});const Ya=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,En=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,io=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,YI=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,nn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,oo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Xu=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,xe=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,jI=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,VI=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,KI=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,so=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,XI=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,qI=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,ZI=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function QI(t){return Pu(t)?jI():Bu(t)?VI():t===d.XV?qI():Hu(t)?KI():Yu(t)?Ya():zu(t)?io():os(t)?YI():Wu(t)?xe():Ah(t)?ZI():""}var pe=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(pe||{}),It=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(It||{});const JI={inputOptions:{type:pe.ARROW},toolId:d.ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}},ew={inputOptions:{type:pe.ARROW},toolId:d.AVERAGE_ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}},tw={inputOptions:{type:pe.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:P.ARROW_TOOLS,shape:{type:$.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}};pe.ARROW,d.SQUARE_ROOT_ARROW,P.ARROW_TOOLS,$.LINE,io(),S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL;const nw={inputOptions:{type:pe.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}};function rw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function iw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function ow(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function sw(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function aw(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const lw={Delete:null,Backspace:null};function cw(t,e=10){if(t in lw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function uw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function dw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function _w(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function fw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Th(t){return t==="Backspace"}function ao(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Th(t.key))}function gw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function hw(t){return gw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function pw(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ai(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Nr(t,e,n){if(t===void 0)return t;let r=t;return Th(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const qu=[S.CAGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CAGE_TOOL],Cn=[S.CAGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CAGE_TOOL];function Dh(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function kh(t,e,n){return Nr(t,e,n)}const fn={type:$.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},ja={type:pe.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},bn={...ja,valueUpdater:(t,e)=>kh(t,e,Dh)},vw={inputOptions:bn,toolId:d.KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:En(),tags:[],categories:Cn}},mw={inputOptions:bn,toolId:d.UNIQUE_DIGITS_CAGE,order:P.CAGE_TOOLS,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:En(),tags:[],categories:Cn}},Ew={inputOptions:bn,toolId:d.INVERTED_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:En(),tags:[],categories:Cn}},Cw={inputOptions:bn,toolId:d.SUM_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:En(),tags:[],categories:Cn}},bw={inputOptions:ja,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Ya(),tags:[],categories:qu}},Ow={inputOptions:ja,toolId:d.PARITY_BALANCE_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Ya(),tags:[],categories:qu}},Iw={inputOptions:bn,toolId:d.DIVISIBLE_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:En(),tags:[],categories:Cn}},ww={inputOptions:bn,toolId:d.SPOTLIGHT_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:En(),tags:[],categories:Cn}},Lw={inputOptions:ja,toolId:d.PUTTERIA_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Ya(),tags:[],categories:qu}};d.KILLER_CAGE_LOOK_AND_SAY,P.CAGE_TOOLS,En();const yw={inputOptions:bn,toolId:d.MULTISET_CAGE,order:P.CAGE_TOOLS,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:En(),tags:[],categories:Cn}},Aw={inputOptions:bn,toolId:d.VAULTED_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:En(),tags:[],categories:Cn}};d.AQUARIUM_CAGE,P.CAGE_TOOLS,En();const Nw={inputOptions:bn,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:En(),tags:[],categories:Cn}},Sw={inputOptions:bn,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:En(),tags:[],categories:Cn}},xw={inputOptions:bn,toolId:d.DOUBLERS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:En(),tags:[],categories:Cn}},Rw={inputOptions:bn,toolId:d.NEGATORS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:En(),tags:[],categories:Cn}},Tw={inputOptions:{type:pe.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[S.CELL_INPUT_TOOL]}},Dw={inputOptions:{type:pe.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[S.CELL_INPUT_TOOL]}},kw={inputOptions:{type:pe.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[S.CELL_INPUT_TOOL]}},Gw={inputOptions:{type:pe.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[S.CELL_INPUT_TOOL]}},Mw={inputOptions:{type:pe.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[S.CELL_INPUT_TOOL]}},Uw={inputOptions:{type:pe.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[S.CELL_INPUT_TOOL]}},Fw={inputOptions:{type:pe.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[S.CELL_INPUT_TOOL]}},$w={inputOptions:{type:pe.SELECTION},toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[S.CELL_INPUT_TOOL]}},Pw={inputOptions:{type:pe.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},Bw={type:pe.CENTER_CORNER_OR_EDGE,targets:It.CLOSEST};d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,P.OUTSIDE_TOOLS,$.CIRCLE,Xu(),S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT;const Hw={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:It.CLOSEST,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:P.OUTSIDE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Xu(),tags:[],categories:[S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT]}},Ww={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:It.CORNER_OR_EDGE,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:P.OUTSIDE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Xu(),tags:[],categories:[S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT]}},zw={inputOptions:{type:pe.CLONE},toolId:d.CLONE_REGION,order:P.CAGE_TOOLS,shape:{type:$.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[S.CLONE_CONSTRAINT,S.LOCAL_CONSTRAINT]}};function Gh(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Mh(t,e,n){return Nr(t,e,n)}function Yw(t,e){function n(){return!0}return Nr(t,e,n)}const Zu={type:pe.CORNER,defaultValue:"",valueUpdater:(t,e)=>Mh(t,e,Gh)},jw={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>Yw(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:XI(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL]}},Vw={inputOptions:Zu,toolId:d.CORNER_SUM,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL]}},Kw={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Xw={inputOptions:Zu,toolId:d.CORNER_EVEN_COUNT,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,P.CORNER_TOOLS,$.CIRCLE,so(),S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL;const qw={inputOptions:{type:pe.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Zw={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Va=[S.EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.EDGE_TOOL],kn=[S.EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.EDGE_TOOL],fs=.15,Uh=.02,ei={type:$.CIRCLE,r:{editable:!0,value:fs,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Uh,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Qu={type:$.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function Qw(t,e=1){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Fh(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Jw(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Ju(t,e,n){return Nr(t,e,n)}function eL(t,e){return t===void 0?"V":Jw(e)?e.toUpperCase():t}function tL(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function $h(t,e){return t===void 0?"<":tL(e)?e:t}const lo={type:pe.EDGE,valueUpdater:(t,e)=>Ju(t,e,Fh)},nL={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Ju(t,e,Qw)},toolId:d.RATIO,order:P.EDGE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:kn}},rL={inputOptions:lo,toolId:d.DIFFERENCE,order:P.EDGE_TOOLS,shape:ei,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:kn}},iL={inputOptions:lo,toolId:d.EDGE_SUM,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:kn}},oL={inputOptions:{type:pe.EDGE,defaultValue:"V",valueUpdater:eL},toolId:d.XV,order:P.EDGE_TOOLS,shape:{type:$.TEXT_ONLY,r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:kn}},sL={inputOptions:{type:pe.EDGE,valueUpdater:$h,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:P.EDGE_TOOLS,shape:{type:$.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:kn}},aL={inputOptions:lo,toolId:d.EDGE_PRODUCT,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:kn}},lL={inputOptions:lo,toolId:d.EDGE_MODULO,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:kn}},cL={inputOptions:lo,toolId:d.EDGE_FACTOR,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:kn}},uL={inputOptions:{type:pe.EDGE},toolId:d.XY_DIFFERENCES,order:P.EDGE_TOOLS,shape:{type:$.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:Uh,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:kn}},dL={inputOptions:{type:pe.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:P.EDGE_TOOLS,shape:ei,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:kn}},_L={inputOptions:{type:pe.EDGE},toolId:d.YIN_YANG_KROPKI,order:P.EDGE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:kn}},fL={inputOptions:{type:pe.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:P.EDGE_TOOLS,shape:Qu,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Va}},gL={inputOptions:{type:pe.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:P.EDGE_TOOLS,shape:Qu,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Va}},hL={inputOptions:{type:pe.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:P.EDGE_TOOLS,shape:Qu,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Va}},pL={inputOptions:{type:pe.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:P.EDGE_TOOLS,shape:ei,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Va}},vL={inputOptions:{type:pe.EDGE,valueUpdater:$h,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:P.EDGE_TOOLS,shape:{type:$.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:kn}};d.CUSTOM_EDGE_CONSTRAINT,P.EDGE_TOOLS;const co=[S.OUTSIDE_CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_CORNER_TOOL,S.OUTSIDE_DIRECTION_TOOL];function mL(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ph(t,e,n){return Nr(t,e,n)}const uo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},_o={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ph(t,e,mL),defaultValue:"",cornerOrEdge:It.CORNER},EL={inputOptions:_o,toolId:d.LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:oo(),tags:[],categories:co}},CL={inputOptions:_o,toolId:d.LITTLE_KILLER_PRODUCT,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:oo(),tags:[],categories:co}},bL={inputOptions:_o,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:oo(),tags:[],categories:co}},OL={inputOptions:_o,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:oo(),tags:[],categories:co}},IL={inputOptions:_o,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:oo(),tags:[],categories:co}},wL={inputOptions:_o,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:oo(),tags:[],categories:co}},rn=[S.OUTSIDE_EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_EDGE_TOOL,S.OUTSIDE_DIRECTION_TOOL];function gs(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ka(t,e,n){return Nr(t,e,n)}const on={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Gn={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.EDGE},LL={inputOptions:Gn,toolId:d.SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:nn(),tags:[],categories:rn}},yL={inputOptions:Gn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:nn(),tags:[],categories:rn}},AL={inputOptions:Gn,toolId:d.X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:nn(),tags:[],categories:rn}},NL={inputOptions:Gn,toolId:d.SHORTSIGHTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:nn(),tags:[],categories:rn}},SL={inputOptions:Gn,toolId:d.SHIFTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:nn(),tags:[],categories:rn}},xL={inputOptions:Gn,toolId:d.BROKEN_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:nn(),tags:[],categories:rn}},RL={inputOptions:Gn,toolId:d.X_SUM_SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:nn(),tags:[],categories:rn}},TL={inputOptions:Gn,toolId:d.BATTLEFIELD,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:nn(),tags:[],categories:rn}},DL={inputOptions:Gn,toolId:d.SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:nn(),tags:[],categories:rn}},kL={inputOptions:Gn,toolId:d.X_INDEX,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:nn(),tags:[],categories:rn}},GL={inputOptions:Gn,toolId:d.RISING_STREAK,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:nn(),tags:[],categories:rn}};d.ROW_OR_COLUMN_RANK,P.OUTSIDE_TOOLS,nn();const ML={inputOptions:Gn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:nn(),tags:[],categories:rn}},UL={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:nn(),tags:[],categories:rn}},FL={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:nn(),tags:[],categories:rn}},$L={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:nn(),tags:[],categories:rn}},PL={inputOptions:{type:pe.SINGLE_CELL},toolId:d.COSMETIC_CELL_SHAPE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,allowedTypes:[$.CIRCLE,$.ELLIPSE,$.SQUARE,$.RECTANGLE,$.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},BL={inputOptions:{type:pe.SINGLE_CELL_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},HL={inputOptions:{type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},WL={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Ju(t,e,Fh),defaultValue:""},toolId:d.COSMETIC_EDGE,order:P.EDGE_TOOLS,shape:{type:$.CIRCLE,allowedTypes:[$.CIRCLE,$.ELLIPSE,$.SQUARE,$.RECTANGLE,$.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},zL={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>Mh(t,e,Gh),defaultValue:""},toolId:d.COSMETIC_CORNER,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,allowedTypes:[$.CIRCLE,$.ELLIPSE,$.SQUARE,$.RECTANGLE,$.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},YL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},jL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},VL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},KL={inputOptions:{type:pe.CAGE,valueUpdater:(t,e)=>kh(t,e,Dh),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:P.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},XL={inputOptions:{type:pe.ARROW},toolId:d.COSMETIC_ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.LOCAL_CONSTRAINT]}},qL={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ph(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_DIRECTION_TOOL]}},fo=[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT,S.DIAGONAL_CONSTRAINT],ZL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},QL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},JL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ey={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ty={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ny={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ry={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},iy={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},oy={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},sy={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ay={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ly={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},cy={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:fo}},uy={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:fo}},dy={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:fo}},_y={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:fo}},fy={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:fo}},gy={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:fo}},hy={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},py={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},vy={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},my={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ey={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Cy={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},by={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Oy={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Iy={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},wy={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ly={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},yy={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ay={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ny={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Sy={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},xy={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ry={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ty={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Dy={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},ky={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Gy={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},My={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Uy={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Fy={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},$y={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Py={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},By={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Hy={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Wy={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},zy={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Yy={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},jy={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Vy={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Ky={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Xy={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},qy={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Zy={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Qy={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Jy={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},eA={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},tA={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},nA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},rA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},iA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},oA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},sA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},aA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},lA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},cA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},uA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},dA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},_A={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},fA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},gA={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},hA={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},pA={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},vA={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},mA={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},EA={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},CA={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},bA={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},OA={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},IA={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Fe=[S.LINE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.LINE_TOOL],Sr=[S.LINE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.DOUBLE_ENDED_LINE_CONSTRAINT,S.LINE_TOOL],hs={description:"",usage:xe(),tags:[],categories:Fe},yt={type:pe.LINE,allowSelfIntersection:!0},Wt={type:pe.LINE,allowSelfIntersection:!1},wA={inputOptions:Wt,toolId:d.THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Numbers along a thermometer must increase from the bulb end."}},LA={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},yA={inputOptions:Wt,toolId:d.FUZZY_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},AA={inputOptions:Wt,toolId:d.SLOW_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},NA={inputOptions:Wt,toolId:d.ROW_CYCLE_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},SA={inputOptions:yt,toolId:d.PALINDROME,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:xe(),tags:[],categories:Fe}},xA={inputOptions:yt,toolId:d.RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:xe(),tags:[],categories:Fe}},RA={inputOptions:yt,toolId:d.DOUBLE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:xe(),tags:[],categories:Fe}},TA={inputOptions:yt,toolId:d.RENRENBANBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:xe(),tags:[],categories:Fe}},DA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Fe}},kA={inputOptions:yt,toolId:d.NABNER_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:xe(),tags:[],categories:Fe}},GA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:xe(),tags:[],categories:Fe}},MA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:xe(),tags:[],categories:Fe}},UA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:xe(),tags:[],categories:Fe}},FA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:xe(),tags:[],categories:Fe}},$A={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:xe(),tags:[],categories:Fe}},PA={inputOptions:Wt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:xe(),tags:[],categories:Fe}},BA={inputOptions:Wt,toolId:d.INDEX_LINE,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:xe(),tags:[],categories:Fe}},HA={inputOptions:yt,toolId:d.UNIQUE_VALUES_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:xe(),tags:[],categories:Fe}},WA={inputOptions:yt,toolId:d.REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:xe(),tags:[],categories:Fe}},zA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:xe(),tags:[],categories:Fe}},YA={inputOptions:Wt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:xe(),tags:[],categories:Fe}},jA={inputOptions:yt,toolId:d.SAME_PARITY_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:xe(),tags:[],categories:Fe}},VA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:xe(),tags:[],categories:Fe}},KA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:xe(),tags:[],categories:Fe}},XA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:xe(),tags:[],categories:Fe}},qA={inputOptions:yt,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:xe(),tags:[],categories:Fe}},ZA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:xe(),tags:[],categories:Fe}},QA={inputOptions:yt,toolId:d.ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:xe(),tags:[],categories:Fe}},JA={inputOptions:yt,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:xe(),tags:[],categories:Fe}},eN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:xe(),tags:[],categories:Fe}},tN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:xe(),tags:[],categories:Fe}},nN={inputOptions:Wt,toolId:d.REPEATED_DIGITS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:xe(),tags:[],categories:Fe}},rN={inputOptions:Wt,toolId:d.SUPERFUZZY_ARROW,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:xe(),tags:[],categories:Fe}},iN={inputOptions:yt,toolId:d.AMBIGUOUS_ARROW,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:xe(),tags:[],categories:Fe}},oN={inputOptions:Wt,toolId:d.HEADLESS_ARROW,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:xe(),tags:[],categories:Fe}},sN={inputOptions:yt,toolId:d.XV_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:xe(),tags:[],categories:Fe}},aN={inputOptions:Wt,toolId:d.ROW_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:xe(),tags:[],categories:Fe}},lN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:xe(),tags:[],categories:Fe}},cN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:xe(),tags:[],categories:Fe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,P.LINE_TOOLS,$.LINE,xe();const uN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:xe(),tags:[],categories:Fe}},dN={inputOptions:yt,toolId:d.ADJACENT_MULTIPLES_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:xe(),tags:[],categories:Fe}},_N={inputOptions:yt,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:xe(),tags:[],categories:Fe}},fN={inputOptions:Wt,toolId:d.LOOK_AND_SAY_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:xe(),tags:[],categories:Fe}},gN={inputOptions:Wt,toolId:d.ZIPPER_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:xe(),tags:[],categories:Fe}},hN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:xe(),tags:[],categories:Fe}},pN={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:xe(),tags:[],categories:Fe}},vN={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:xe(),tags:[],categories:Fe}};d.THERMO_OR_AVERAGE_ARROW,P.LINE_TOOLS,$.THERMO_WITH_CIRCLE,xe();const mN={inputOptions:Wt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:xe(),tags:[],categories:Fe}},EN={inputOptions:Wt,toolId:d.PEAPODS,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:xe(),tags:[],categories:Fe}},CN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:xe(),tags:[],categories:Fe}},bN={inputOptions:yt,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:xe(),tags:[],categories:Fe}},ON={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:xe(),tags:[],categories:Fe}},IN={inputOptions:yt,toolId:d.YIN_YANG_REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:xe(),tags:[],categories:Fe}},wN={inputOptions:Wt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:xe(),tags:[],categories:Fe}},LN={inputOptions:Wt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:xe(),tags:[],categories:Fe}},yN={inputOptions:yt,toolId:d.BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:xe(),tags:[],categories:Sr}},AN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:xe(),tags:[],categories:Sr}},NN={inputOptions:yt,toolId:d.TIGHTROPE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:xe(),tags:[],categories:Sr}},SN={inputOptions:yt,toolId:d.PARITY_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:xe(),tags:[],categories:Sr}},xN={inputOptions:yt,toolId:d.DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:xe(),categories:Sr}},RN={inputOptions:yt,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:xe(),tags:[],categories:Sr}},TN={inputOptions:yt,toolId:d.SPLIT_PEAS,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:xe(),tags:[],categories:Sr}},DN={inputOptions:Wt,toolId:d.DOUBLERS_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:xe(),tags:[],categories:Fe}},kN={inputOptions:yt,toolId:d.DOUBLERS_BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:xe(),tags:[],categories:Sr}},GN={inputOptions:yt,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:xe(),tags:[],categories:Sr}},We=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_SHAPE_TOOL],go=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_COLOR_TOOL],Xa={type:$.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},ps={type:$.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Bh(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function MN(t){return t===""||t==="1"||t==="2"||t==="3"}function ed(t,e,n){return Nr(t,e,n)}const Ke={type:pe.SINGLE_CELL},ti={type:pe.SINGLE_CELL,valueUpdater:(t,e)=>ed(t,e,Bh),defaultValue:""},Hh={type:pe.SINGLE_CELL_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},UN={inputOptions:Ke,toolId:d.ODD,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:We}},FN={inputOptions:Ke,toolId:d.EVEN,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:We}},$N={inputOptions:Ke,toolId:d.MINIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},PN={inputOptions:Ke,toolId:d.MAXIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}};d.PRIME_CELL,P.CELL_COLOR_TOOL;const BN={inputOptions:Ke,toolId:d.ODD_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},HN={inputOptions:Ke,toolId:d.EVEN_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},WN={inputOptions:Ke,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:We}},zN={inputOptions:Ke,toolId:d.WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},YN={inputOptions:Ke,toolId:d.NOT_WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},jN={inputOptions:ti,toolId:d.FARSIGHT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:We}},VN={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>ed(t,e,Bh),defaultValue:"9"},toolId:d.RADAR,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:We}},KN={inputOptions:Ke,toolId:d.ORTHOGONAL_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:We}},XN={inputOptions:Ke,toolId:d.INDEXING_COLUMN,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:go}},qN={inputOptions:Ke,toolId:d.INDEXING_ROW,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:go}},ZN={inputOptions:Ke,toolId:d.LOW_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:go}},QN={inputOptions:Ke,toolId:d.HIGH_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:go}},JN={inputOptions:Ke,toolId:d.FRIENDLY_CELL,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:go}},eS={inputOptions:Ke,toolId:d.DIAGONALLY_ADJACENT_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:We}},tS={inputOptions:Ke,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:We}},nS={inputOptions:Ke,toolId:d.SANDWICH_ROW_COL_COUNT,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:We}},rS={inputOptions:Ke,toolId:d.COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:We}},iS={inputOptions:Ke,toolId:d.REVERSE_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:We}},oS={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>ed(t,e,MN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:We}},sS={inputOptions:Ke,toolId:d.UNIQUE_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:We}},aS={inputOptions:Ke,toolId:d.SEEN_EVEN_COUNT,order:P.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},lS={inputOptions:Ke,toolId:d.SEEN_ODD_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},cS={inputOptions:Ke,toolId:d.YIN_YANG_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:We}},uS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},dS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},_S={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:P.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:We}},fS={inputOptions:Ke,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:We}},gS={inputOptions:Ke,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:We}},hS={inputOptions:Ke,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:We}},pS={inputOptions:Ke,toolId:d.SEEN_REGION_BORDERS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:We}},vS={inputOptions:Ke,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:We}},mS={inputOptions:Ke,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:We}},ES={inputOptions:Hh,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[S.SINGLE_CELL_ARROW_TOOL,S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},CS={inputOptions:Hh,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[S.SINGLE_CELL_ARROW_TOOL,S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},bS={inputOptions:ti,toolId:d.SASHIGANE_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:We}},OS={inputOptions:Ke,toolId:d.CELL_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:We}},IS={inputOptions:Ke,toolId:d.CELL_NOT_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:We}},wS={inputOptions:Ke,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:We}},LS={inputOptions:ti,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:We}},yS={inputOptions:Ke,toolId:d.CAVE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:We}},AS={inputOptions:ti,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:We}},NS={inputOptions:ti,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:We}},SS={inputOptions:ti,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:We}},xS={inputOptions:Ke,toolId:d.DIRECTED_PATH_START,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:We}},RS={inputOptions:Ke,toolId:d.DIRECTED_PATH_END,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:We}},TS={inputOptions:ti,toolId:d.TELEPORT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:We}},DS={inputOptions:ti,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:We}},kS={inputOptions:Ke,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:P.CELL_SHAPE_TOOL,shape:{...Xa,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:We}},GS={inputOptions:Ke,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:We}},MS={inputOptions:Ke,toolId:d.CONNECT_FOUR_YELLOW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:We}},US={inputOptions:Ke,toolId:d.CONENCT_FOUR_RED,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:We}},dr=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_MULTIARROW_TOOL],ni={type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},_r={type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},FS={inputOptions:_r,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:dr}},$S={inputOptions:_r,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:dr}},PS={inputOptions:_r,toolId:d.LOOP_CELL_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:dr}},BS={inputOptions:_r,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:dr}},HS={inputOptions:_r,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:dr}},WS={inputOptions:_r,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:dr}},zS={inputOptions:_r,toolId:d.COLD_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:dr}},YS={inputOptions:_r,toolId:d.HOT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:dr}},jS={inputOptions:_r,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:dr}},VS={inputOptions:_r,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:dr}},KS={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}},XS={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}},qS={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;const ZS={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},QS={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;const JS={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},ex={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},tx=[S.CORNER_LINE_CONSTRAINT,S.CORNER_LINE_TOOL,S.LOCAL_CONSTRAINT],nx={inputOptions:{type:pe.CORNER_LINE},toolId:d.MAZE_WALL,order:P.EDGE_TOOLS,shape:{type:$.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:tx}},Rt={[d.GIVEN]:Tw,[d.DIGIT]:Dw,[d.REGIONS]:kw,[d.OUTSIDE]:Fw,[d.CORNER_PM]:Gw,[d.CENTER_PM]:Mw,[d.HIGHLIGHTS]:Uw,[d.FOG]:$w,[d.PEN_TOOL]:Pw,[d.SUDOKU_RULES_DO_NOT_APPLY]:ZL,[d.LEAVE_EMPTY_CELLS_EMPTY]:QL,[d.LITS]:ty,[d.HEXED_SUDOKU]:JL,[d.FILLOMINO]:ey,[d.ANTIKNIGHT]:ny,[d.ANTIKING]:iy,[d.ANTI_GIRAFFE]:ry,[d.DISJOINT_GROUPS]:oy,[d.TANGO]:sy,[d.NONCONSECUTIVE]:ay,[d.NONRATIO]:ly,[d.ANTI_ENTROPY]:hy,[d.GLOBAL_INDEXING_COLUMN]:py,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:vy,[d.NEGATIVE_DIAGONAL]:cy,[d.POSITIVE_DIAGONAL]:uy,[d.NEGATIVE_ANTIDIAGONAL]:dy,[d.POSITIVE_ANTIDIAGONAL]:_y,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:fy,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:gy,[d.ALL_RATIOS_GIVEN]:my,[d.ALL_DIFFERENCES_GIVEN]:Ey,[d.ALL_X_GIVEN]:Cy,[d.ALL_V_GIVEN]:by,[d.ALL_XV_GIVEN]:Oy,[d.ALL_RADARS_GIVEN]:Iy,[d.ALL_XY_DIFFERENCES_GIVEN]:wy,[d.ALL_INDEXING_COLUMN_GIVEN]:Ly,[d.ALL_INDEXING_ROW_GIVEN]:yy,[d.ALL_YIN_YANG_KROPKI_GIVEN]:Ay,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:Ny,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:xy,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Ry,[d.CAVE_CELLS_ARE_ODD]:lA,[d.CAVE_WALLS_ARE_EVEN]:aA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:oA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:sA,[d.DOUBLERS]:ZS,[d.NEGATORS]:QS,[d.NEXUS]:JS,[d.INDEXER_CELLS]:ex,[d.UNKNOWN_REGIONS]:Ty,[d.CHAOS_CONSTRUCTION_SUGURU]:Dy,[d.YIN_YANG]:ky,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Gy,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:My,[d.NURIMISAKI]:Uy,[d.NURIKABE]:Fy,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:$y,[d.TWO_CONTIGUOUS_REGIONS]:Py,[d.SASHIGANE]:By,[d.GOLDILOCKS_ZONE]:Hy,[d.CELL_CENTER_LOOP_NO_TOUCHING]:Wy,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:zy,[d.NOT_LOOP_SIZED_REGIONS]:Vy,[d.MODULAR_LOOP]:Ky,[d.CAVE]:rA,[d.CAVE_LITS]:cA,[d.RENBAN_CAVES]:uA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:iA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:Sy,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:Yy,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:jy,[d.GALAXIES]:_A,[d.TWO_SYMMETRIC_GALAXIES]:hA,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:fA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:gA,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:pA,[d.PENTOMINO_TILLING]:vA,[d.TILLING_NO_EMPTY_CELLS]:mA,[d.LITS_BLACK_WHITE_STAR_BATTLE]:EA,[d.MAZE_DIRECTED_PATH]:Xy,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:qy,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:eA,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:Zy,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:Jy,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:tA,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:nA,[d.DIRECTED_PATH_IS_PARITY_LINE]:Qy,[d.CONNECT_FOUR]:CA,[d.CONNECT_FOUR_DRAW]:bA,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:OA,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:IA,[d.ODD]:UN,[d.EVEN]:FN,[d.MINIMUM]:$N,[d.MAXIMUM]:PN,[d.ODD_MINESWEEPER]:BN,[d.EVEN_MINESWEEPER]:HN,[d.WATCHTOWER]:zN,[d.NOT_WATCHTOWER]:YN,[d.FARSIGHT]:jN,[d.RADAR]:VN,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:WN,[d.ORTHOGONAL_SUM]:KN,[d.DIAGONALLY_ADJACENT_SUM]:eS,[d.INDEXING_COLUMN]:XN,[d.INDEXING_ROW]:qN,[d.LOW_DIGIT]:ZN,[d.HIGH_DIGIT]:QN,[d.FRIENDLY_CELL]:JN,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:tS,[d.SANDWICH_ROW_COL_COUNT]:nS,[d.COUNTING_CIRCLES]:rS,[d.REVERSE_COUNTING_CIRCLES]:iS,[d.COLORED_COUNTING_CIRCLES]:oS,[d.UNIQUE_CELLS]:sS,[d.SEEN_EVEN_COUNT]:aS,[d.SEEN_ODD_COUNT]:lS,[d.YIN_YANG_MINESWEEPER]:cS,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:uS,[d.YIN_YANG_SEEN_SHADED_CELLS]:dS,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:_S,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:fS,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:gS,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:hS,[d.SEEN_REGION_BORDERS_COUNT]:pS,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:vS,[d.SASHIGANE_BEND_REGION_COUNT]:mS,[d.SASHIGANE_REGION_SUM]:bS,[d.CELL_ON_THE_LOOP]:OS,[d.CELL_NOT_ON_THE_LOOP]:IS,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:wS,[d.CAVE_CLUE]:yS,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:LS,[d.YIN_YANG_FILLOMINO_PARITY]:dA,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:AS,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:NS,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:SS,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:DS,[d.DIRECTED_PATH_START]:xS,[d.DIRECTED_PATH_END]:RS,[d.TELEPORT]:TS,[d.CONNECT_FOUR_YELLOW]:MS,[d.CONENCT_FOUR_RED]:US,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:ES,[d.THERMO_SIGHTLINE_LOOP_ARROW]:CS,[d.HOT_ARROWS]:YS,[d.COLD_ARROWS]:zS,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:WS,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:BS,[d.YIN_YANG_COUNT_SHADED_CELLS]:HS,[d.LOOP_CELL_COUNT_ARROWS]:PS,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:$S,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:FS,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:jS,[d.NURIKABE_SEEN_WATERWAY_CELLS]:kS,[d.NURIKABE_ISLAND_SIZE_CELL]:GS,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:VS,[d.DIFFERENCE]:rL,[d.RATIO]:nL,[d.XV]:oL,[d.EDGE_INEQUALITY]:sL,[d.EDGE_SUM]:iL,[d.EDGE_PRODUCT]:aL,[d.EDGE_MODULO]:lL,[d.EDGE_FACTOR]:cL,[d.XY_DIFFERENCES]:uL,[d.YIN_YANG_WHITE_KROPKI]:dL,[d.YIN_YANG_KROPKI]:_L,[d.FILLOMINO_REGION_BORDER]:fL,[d.UNKNOWN_REGION_BORDER]:gL,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:hL,[d.EDGE_CAVE_ONE_OF_EACH]:pL,[d.ONE_WAY_DOOR]:vL,[d.QUADRUPLE]:jw,[d.CORNER_SUM]:Vw,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:Kw,[d.CORNER_EVEN_COUNT]:Xw,[d.PRODUCT_SQUARE]:qw,[d.EQUAL_DIAGONAL_DIFFERENCES]:Zw,[d.THERMOMETER]:wA,[d.FUZZY_THERMOMETER]:yA,[d.SLOW_THERMOMETER]:AA,[d.CUSTOM_THERMOMETER]:LA,[d.ROW_CYCLE_THERMOMETER]:NA,[d.PALINDROME]:SA,[d.RENBAN_LINE]:xA,[d.DOUBLE_RENBAN_LINE]:RA,[d.RENRENBANBAN_LINE]:TA,[d.N_CONSECUTIVE_RENBAN_LINE]:DA,[d.NABNER_LINE]:kA,[d.WHISPERS_LINE]:GA,[d.DUTCH_WHISPERS]:MA,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:UA,[d.RENBAN_OR_WHISPERS_LINE]:FA,[d.RENBAN_OR_NABNER_LINE]:$A,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:PA,[d.INDEX_LINE]:BA,[d.UNIQUE_VALUES_LINE]:HA,[d.REPEATED_DIGITS_LINE]:nN,[d.REGION_SUM_LINE]:WA,[d.SUM_LINE]:zA,[d.XV_LINE]:sN,[d.ROW_SUM_LINE]:aN,[d.AT_LEAST_X_LINE]:lN,[d.SUPERFUZZY_ARROW]:rN,[d.AMBIGUOUS_ARROW]:iN,[d.HEADLESS_ARROW]:oN,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:cN,[d.PRODUCT_LINE]:uN,[d.ADJACENT_MULTIPLES_LINE]:dN,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:_N,[d.LOOK_AND_SAY_LINE]:fN,[d.ARITHMETIC_SEQUENCE_LINE]:YA,[d.ZIPPER_LINE]:gN,[d.SEGMENTED_SUM_LINE]:hN,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:pN,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:vN,[d.SAME_PARITY_LINE]:jA,[d.MODULAR_LINE]:VA,[d.UNIMODULAR_LINE]:KA,[d.MODULAR_OR_UNIMODULAR_LINE]:XA,[d.ODD_EVEN_OSCILLATOR_LINE]:qA,[d.HIGH_LOW_OSCILLATOR_LINE]:ZA,[d.ENTROPIC_LINE]:QA,[d.ENTROPIC_OR_MODULAR_LINE]:JA,[d.INDEXING_COLUMN_IS_X_LINE]:eN,[d.INDEXING_ROW_IS_X_LINE]:tN,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:mN,[d.PEAPODS]:EN,[d.YIN_YANG_INDEXING_LINE_COLORING]:wN,[d.YIN_YANG_SHADED_WHISPERS_LINE]:CN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:bN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:ON,[d.YIN_YANG_REGION_SUM_LINE]:IN,[d.GOLDILOCKS_ZONE_REGION_SUM]:LN,[d.BETWEEN_LINE]:yN,[d.LOCKOUT_LINE]:AN,[d.PARITY_COUNT_LINE]:SN,[d.TIGHTROPE_LINE]:NN,[d.DOUBLE_ARROW_LINE]:xN,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:RN,[d.SPLIT_PEAS]:TN,[d.DOUBLERS_THERMOMETER]:DN,[d.DOUBLERS_BETWEEN_LINE]:kN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:GN,[d.ARROW]:JI,[d.CHAOS_CONSTRUCTION_ARROW]:nw,[d.AVERAGE_ARROW]:ew,[d.BULBOUS_ARROW]:tw,[d.MAZE_WALL]:nx,[d.KILLER_CAGE]:vw,[d.UNIQUE_DIGITS_CAGE]:mw,[d.INVERTED_KILLER_CAGE]:Ew,[d.SUM_CAGE]:Cw,[d.SUM_CAGE_LOOK_AND_SAY]:bw,[d.PARITY_BALANCE_CAGE]:Ow,[d.DIVISIBLE_KILLER_CAGE]:Iw,[d.SPOTLIGHT_CAGE]:ww,[d.PUTTERIA_CAGE]:Lw,[d.MULTISET_CAGE]:yw,[d.VAULTED_CAGE]:Aw,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:Nw,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:Sw,[d.DOUBLERS_KILLER_CAGE]:xw,[d.NEGATORS_KILLER_CAGE]:Rw,[d.CLONE_REGION]:zw,[d.SANDWICH_SUM]:LL,[d.X_SUM]:AL,[d.SHORTSIGHTED_X_SUM]:NL,[d.SHIFTED_X_SUM]:SL,[d.BROKEN_X_SUM]:xL,[d.X_SUM_SKYSCRAPERS]:RL,[d.BATTLEFIELD]:TL,[d.SKYSCRAPERS]:DL,[d.X_INDEX]:kL,[d.SANDWICH_SUM_XOR_X_SUM]:yL,[d.RISING_STREAK]:GL,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:ML,[d.OUTSIDE_CONSECUTIVE_SUM]:UL,[d.LOOPWICHES]:FL,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:$L,[d.LITTLE_KILLER_SUM]:EL,[d.LITTLE_KILLER_PRODUCT]:CL,[d.LITTLE_KILLER_LOOK_AND_SAY]:bL,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:IL,[d.X_OMIT_LITTLE_KILLER_SUM]:OL,[d.NEGATORS_LITTLE_KILLER_SUM]:wL,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Hw,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:Ww,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:KS,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:XS,[d.FORBIDDEN_KNIGHT_SUM]:qS,[d.COSMETIC_CELL_SHAPE]:PL,[d.COSMETIC_CELL_ARROW]:BL,[d.COSMETIC_CELL_MULTI_ARROW]:HL,[d.COSMETIC_EDGE]:WL,[d.COSMETIC_CORNER]:zL,[d.COSMETIC_LINE]:YL,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:jL,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:VL,[d.COSMETIC_ARROW]:XL,[d.COSMETIC_CAGE]:KL,[d.COSMETIC_OUTSIDE_DIRECTION]:qL};class Oi extends Map{constructor(){super()}setConstraint(e,n){return RI(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Oi;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Oi;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=Nh(r);o!==void 0&&Sh(o,$u)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var He=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(He||{});function Wh(t){if(!(t in He))throw Error(" not a key in DIRECTION");return He[t]}function Ve(t,e){return t.r===e.r&&t.c===e.c}function zh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function rx(t,e){return{r:t.r*e,c:t.c*e}}function ix(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function vs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ve(t,e)}function ox(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Sa(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Xt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function qa(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function sx(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function td(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function ax(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const lx=new Map([[6,He.N],[2,He.S],[0,He.E],[4,He.W],[7,He.NE],[5,He.NW],[1,He.SE],[3,He.SW]]);function nd(t){t=t%8;const e=lx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const cx=new Map([[He.N,{r:-1,c:0}],[He.S,{r:1,c:0}],[He.E,{r:0,c:1}],[He.W,{r:0,c:-1}],[He.NE,{r:-1,c:1}],[He.NW,{r:-1,c:-1}],[He.SE,{r:1,c:1}],[He.SW,{r:1,c:-1}]]);function Za(t){const e=cx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Yh(t,e){const n=Za(e);return zh(t,n)}function rd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function jh(t,e,n=!1){const r=t.some(o=>Ve(o,e)),i=n?t.some(o=>vs(o,e)):t.some(o=>ox(o,e));if(!r&&i){const o=[...t,e];return Sa(o),o}return t}function ba(t){return`R${t.r+1}C${t.c+1}`}function id(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var ux=Vo.exports,vg;function dx(){return vg||(vg=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,p="__lodash_placeholder__",g=1,v=2,m=4,C=1,b=2,O=1,w=2,x=4,k=8,U=16,z=32,Y=64,B=128,X=256,ee=512,ce=30,te="...",re=800,Ce=16,be=1,ge=2,Ue=3,Qe=1/0,Ne=9007199254740991,ye=17976931348623157e292,lt=NaN,Ye=4294967295,On=Ye-1,Mn=Ye>>>1,Gr=[["ary",B],["bind",O],["bindKey",w],["curry",k],["curryRight",U],["flip",ee],["partial",z],["partialRight",Y],["rearg",X]],Qt="[object Arguments]",hr="[object Array]",si="[object AsyncFunction]",rr="[object Boolean]",Un="[object Date]",xi="[object DOMException]",Mr="[object Error]",Dt="[object Function]",Te="[object GeneratorFunction]",Ie="[object Map]",ke="[object Number]",Re="[object Null]",At="[object Object]",Rs="[object Promise]",El="[object Proxy]",ai="[object RegExp]",Zn="[object Set]",wo="[object String]",Ts="[object Symbol]",fv="[object Undefined]",Lo="[object WeakMap]",gv="[object WeakSet]",yo="[object ArrayBuffer]",Ri="[object DataView]",Cl="[object Float32Array]",bl="[object Float64Array]",Ol="[object Int8Array]",Il="[object Int16Array]",wl="[object Int32Array]",Ll="[object Uint8Array]",yl="[object Uint8ClampedArray]",Al="[object Uint16Array]",Nl="[object Uint32Array]",hv=/\b__p \+= '';/g,pv=/\b(__p \+=) '' \+/g,vv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Md=/&(?:amp|lt|gt|quot|#39);/g,Ud=/[&<>"']/g,mv=RegExp(Md.source),Ev=RegExp(Ud.source),Cv=/<%-([\s\S]+?)%>/g,bv=/<%([\s\S]+?)%>/g,Fd=/<%=([\s\S]+?)%>/g,Ov=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Iv=/^\w*$/,wv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sl=/[\\^$.*+?()[\]{}|]/g,Lv=RegExp(Sl.source),xl=/^\s+/,yv=/\s/,Av=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Nv=/\{\n\/\* \[wrapped with (.+)\] \*/,Sv=/,? & /,xv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Rv=/[()=,{}\[\]\/\s]/,Tv=/\\(\\)?/g,Dv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$d=/\w*$/,kv=/^[-+]0x[0-9a-f]+$/i,Gv=/^0b[01]+$/i,Mv=/^\[object .+?Constructor\]$/,Uv=/^0o[0-7]+$/i,Fv=/^(?:0|[1-9]\d*)$/,$v=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ds=/($^)/,Pv=/['\n\r\u2028\u2029\\]/g,ks="\\ud800-\\udfff",Bv="\\u0300-\\u036f",Hv="\\ufe20-\\ufe2f",Wv="\\u20d0-\\u20ff",Pd=Bv+Hv+Wv,Bd="\\u2700-\\u27bf",Hd="a-z\\xdf-\\xf6\\xf8-\\xff",zv="\\xac\\xb1\\xd7\\xf7",Yv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",jv="\\u2000-\\u206f",Vv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Wd="A-Z\\xc0-\\xd6\\xd8-\\xde",zd="\\ufe0e\\ufe0f",Yd=zv+Yv+jv+Vv,Rl="['’]",Kv="["+ks+"]",jd="["+Yd+"]",Gs="["+Pd+"]",Vd="\\d+",Xv="["+Bd+"]",Kd="["+Hd+"]",Xd="[^"+ks+Yd+Vd+Bd+Hd+Wd+"]",Tl="\\ud83c[\\udffb-\\udfff]",qv="(?:"+Gs+"|"+Tl+")",qd="[^"+ks+"]",Dl="(?:\\ud83c[\\udde6-\\uddff]){2}",kl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="["+Wd+"]",Zd="\\u200d",Qd="(?:"+Kd+"|"+Xd+")",Zv="(?:"+Ti+"|"+Xd+")",Jd="(?:"+Rl+"(?:d|ll|m|re|s|t|ve))?",e_="(?:"+Rl+"(?:D|LL|M|RE|S|T|VE))?",t_=qv+"?",n_="["+zd+"]?",Qv="(?:"+Zd+"(?:"+[qd,Dl,kl].join("|")+")"+n_+t_+")*",Jv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",em="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",r_=n_+t_+Qv,tm="(?:"+[Xv,Dl,kl].join("|")+")"+r_,nm="(?:"+[qd+Gs+"?",Gs,Dl,kl,Kv].join("|")+")",rm=RegExp(Rl,"g"),im=RegExp(Gs,"g"),Gl=RegExp(Tl+"(?="+Tl+")|"+nm+r_,"g"),om=RegExp([Ti+"?"+Kd+"+"+Jd+"(?="+[jd,Ti,"$"].join("|")+")",Zv+"+"+e_+"(?="+[jd,Ti+Qd,"$"].join("|")+")",Ti+"?"+Qd+"+"+Jd,Ti+"+"+e_,em,Jv,Vd,tm].join("|"),"g"),sm=RegExp("["+Zd+ks+Pd+zd+"]"),am=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],cm=-1,Nt={};Nt[Cl]=Nt[bl]=Nt[Ol]=Nt[Il]=Nt[wl]=Nt[Ll]=Nt[yl]=Nt[Al]=Nt[Nl]=!0,Nt[Qt]=Nt[hr]=Nt[yo]=Nt[rr]=Nt[Ri]=Nt[Un]=Nt[Mr]=Nt[Dt]=Nt[Ie]=Nt[ke]=Nt[At]=Nt[ai]=Nt[Zn]=Nt[wo]=Nt[Lo]=!1;var Ot={};Ot[Qt]=Ot[hr]=Ot[yo]=Ot[Ri]=Ot[rr]=Ot[Un]=Ot[Cl]=Ot[bl]=Ot[Ol]=Ot[Il]=Ot[wl]=Ot[Ie]=Ot[ke]=Ot[At]=Ot[ai]=Ot[Zn]=Ot[wo]=Ot[Ts]=Ot[Ll]=Ot[yl]=Ot[Al]=Ot[Nl]=!0,Ot[Mr]=Ot[Dt]=Ot[Lo]=!1;var um={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},dm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_m={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},gm=parseFloat,hm=parseInt,i_=typeof Oa=="object"&&Oa&&Oa.Object===Object&&Oa,pm=typeof self=="object"&&self&&self.Object===Object&&self,Yt=i_||pm||Function("return this")(),Ml=e&&!e.nodeType&&e,li=Ml&&!0&&t&&!t.nodeType&&t,o_=li&&li.exports===Ml,Ul=o_&&i_.process,Fn=function(){try{var j=li&&li.require&&li.require("util").types;return j||Ul&&Ul.binding&&Ul.binding("util")}catch{}}(),s_=Fn&&Fn.isArrayBuffer,a_=Fn&&Fn.isDate,l_=Fn&&Fn.isMap,c_=Fn&&Fn.isRegExp,u_=Fn&&Fn.isSet,d_=Fn&&Fn.isTypedArray;function In(j,ne,Q){switch(Q.length){case 0:return j.call(ne);case 1:return j.call(ne,Q[0]);case 2:return j.call(ne,Q[0],Q[1]);case 3:return j.call(ne,Q[0],Q[1],Q[2])}return j.apply(ne,Q)}function vm(j,ne,Q,Ae){for(var je=-1,gt=j==null?0:j.length;++je<gt;){var $t=j[je];ne(Ae,$t,Q($t),j)}return Ae}function $n(j,ne){for(var Q=-1,Ae=j==null?0:j.length;++Q<Ae&&ne(j[Q],Q,j)!==!1;);return j}function mm(j,ne){for(var Q=j==null?0:j.length;Q--&&ne(j[Q],Q,j)!==!1;);return j}function __(j,ne){for(var Q=-1,Ae=j==null?0:j.length;++Q<Ae;)if(!ne(j[Q],Q,j))return!1;return!0}function Ur(j,ne){for(var Q=-1,Ae=j==null?0:j.length,je=0,gt=[];++Q<Ae;){var $t=j[Q];ne($t,Q,j)&&(gt[je++]=$t)}return gt}function Ms(j,ne){var Q=j==null?0:j.length;return!!Q&&Di(j,ne,0)>-1}function Fl(j,ne,Q){for(var Ae=-1,je=j==null?0:j.length;++Ae<je;)if(Q(ne,j[Ae]))return!0;return!1}function xt(j,ne){for(var Q=-1,Ae=j==null?0:j.length,je=Array(Ae);++Q<Ae;)je[Q]=ne(j[Q],Q,j);return je}function Fr(j,ne){for(var Q=-1,Ae=ne.length,je=j.length;++Q<Ae;)j[je+Q]=ne[Q];return j}function $l(j,ne,Q,Ae){var je=-1,gt=j==null?0:j.length;for(Ae&&gt&&(Q=j[++je]);++je<gt;)Q=ne(Q,j[je],je,j);return Q}function Em(j,ne,Q,Ae){var je=j==null?0:j.length;for(Ae&&je&&(Q=j[--je]);je--;)Q=ne(Q,j[je],je,j);return Q}function Pl(j,ne){for(var Q=-1,Ae=j==null?0:j.length;++Q<Ae;)if(ne(j[Q],Q,j))return!0;return!1}var Cm=Bl("length");function bm(j){return j.split("")}function Om(j){return j.match(xv)||[]}function f_(j,ne,Q){var Ae;return Q(j,function(je,gt,$t){if(ne(je,gt,$t))return Ae=gt,!1}),Ae}function Us(j,ne,Q,Ae){for(var je=j.length,gt=Q+(Ae?1:-1);Ae?gt--:++gt<je;)if(ne(j[gt],gt,j))return gt;return-1}function Di(j,ne,Q){return ne===ne?km(j,ne,Q):Us(j,g_,Q)}function Im(j,ne,Q,Ae){for(var je=Q-1,gt=j.length;++je<gt;)if(Ae(j[je],ne))return je;return-1}function g_(j){return j!==j}function h_(j,ne){var Q=j==null?0:j.length;return Q?Wl(j,ne)/Q:lt}function Bl(j){return function(ne){return ne==null?n:ne[j]}}function Hl(j){return function(ne){return j==null?n:j[ne]}}function p_(j,ne,Q,Ae,je){return je(j,function(gt,$t,bt){Q=Ae?(Ae=!1,gt):ne(Q,gt,$t,bt)}),Q}function wm(j,ne){var Q=j.length;for(j.sort(ne);Q--;)j[Q]=j[Q].value;return j}function Wl(j,ne){for(var Q,Ae=-1,je=j.length;++Ae<je;){var gt=ne(j[Ae]);gt!==n&&(Q=Q===n?gt:Q+gt)}return Q}function zl(j,ne){for(var Q=-1,Ae=Array(j);++Q<j;)Ae[Q]=ne(Q);return Ae}function Lm(j,ne){return xt(ne,function(Q){return[Q,j[Q]]})}function v_(j){return j&&j.slice(0,b_(j)+1).replace(xl,"")}function wn(j){return function(ne){return j(ne)}}function Yl(j,ne){return xt(ne,function(Q){return j[Q]})}function Ao(j,ne){return j.has(ne)}function m_(j,ne){for(var Q=-1,Ae=j.length;++Q<Ae&&Di(ne,j[Q],0)>-1;);return Q}function E_(j,ne){for(var Q=j.length;Q--&&Di(ne,j[Q],0)>-1;);return Q}function ym(j,ne){for(var Q=j.length,Ae=0;Q--;)j[Q]===ne&&++Ae;return Ae}var Am=Hl(um),Nm=Hl(dm);function Sm(j){return"\\"+fm[j]}function xm(j,ne){return j==null?n:j[ne]}function ki(j){return sm.test(j)}function Rm(j){return am.test(j)}function Tm(j){for(var ne,Q=[];!(ne=j.next()).done;)Q.push(ne.value);return Q}function jl(j){var ne=-1,Q=Array(j.size);return j.forEach(function(Ae,je){Q[++ne]=[je,Ae]}),Q}function C_(j,ne){return function(Q){return j(ne(Q))}}function $r(j,ne){for(var Q=-1,Ae=j.length,je=0,gt=[];++Q<Ae;){var $t=j[Q];($t===ne||$t===p)&&(j[Q]=p,gt[je++]=Q)}return gt}function Fs(j){var ne=-1,Q=Array(j.size);return j.forEach(function(Ae){Q[++ne]=Ae}),Q}function Dm(j){var ne=-1,Q=Array(j.size);return j.forEach(function(Ae){Q[++ne]=[Ae,Ae]}),Q}function km(j,ne,Q){for(var Ae=Q-1,je=j.length;++Ae<je;)if(j[Ae]===ne)return Ae;return-1}function Gm(j,ne,Q){for(var Ae=Q+1;Ae--;)if(j[Ae]===ne)return Ae;return Ae}function Gi(j){return ki(j)?Um(j):Cm(j)}function Qn(j){return ki(j)?Fm(j):bm(j)}function b_(j){for(var ne=j.length;ne--&&yv.test(j.charAt(ne)););return ne}var Mm=Hl(_m);function Um(j){for(var ne=Gl.lastIndex=0;Gl.test(j);)++ne;return ne}function Fm(j){return j.match(Gl)||[]}function $m(j){return j.match(om)||[]}var Pm=function j(ne){ne=ne==null?Yt:Mi.defaults(Yt.Object(),ne,Mi.pick(Yt,lm));var Q=ne.Array,Ae=ne.Date,je=ne.Error,gt=ne.Function,$t=ne.Math,bt=ne.Object,Vl=ne.RegExp,Bm=ne.String,Pn=ne.TypeError,$s=Q.prototype,Hm=gt.prototype,Ui=bt.prototype,Ps=ne["__core-js_shared__"],Bs=Hm.toString,vt=Ui.hasOwnProperty,Wm=0,O_=function(){var s=/[^.]+$/.exec(Ps&&Ps.keys&&Ps.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Hs=Ui.toString,zm=Bs.call(bt),Ym=Yt._,jm=Vl("^"+Bs.call(vt).replace(Sl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ws=o_?ne.Buffer:n,Pr=ne.Symbol,zs=ne.Uint8Array,I_=Ws?Ws.allocUnsafe:n,Ys=C_(bt.getPrototypeOf,bt),w_=bt.create,L_=Ui.propertyIsEnumerable,js=$s.splice,y_=Pr?Pr.isConcatSpreadable:n,No=Pr?Pr.iterator:n,ci=Pr?Pr.toStringTag:n,Vs=function(){try{var s=gi(bt,"defineProperty");return s({},"",{}),s}catch{}}(),Vm=ne.clearTimeout!==Yt.clearTimeout&&ne.clearTimeout,Km=Ae&&Ae.now!==Yt.Date.now&&Ae.now,Xm=ne.setTimeout!==Yt.setTimeout&&ne.setTimeout,Ks=$t.ceil,Xs=$t.floor,Kl=bt.getOwnPropertySymbols,qm=Ws?Ws.isBuffer:n,A_=ne.isFinite,Zm=$s.join,Qm=C_(bt.keys,bt),Pt=$t.max,Jt=$t.min,Jm=Ae.now,e1=ne.parseInt,N_=$t.random,t1=$s.reverse,Xl=gi(ne,"DataView"),So=gi(ne,"Map"),ql=gi(ne,"Promise"),Fi=gi(ne,"Set"),xo=gi(ne,"WeakMap"),Ro=gi(bt,"create"),qs=xo&&new xo,$i={},n1=hi(Xl),r1=hi(So),i1=hi(ql),o1=hi(Fi),s1=hi(xo),Zs=Pr?Pr.prototype:n,To=Zs?Zs.valueOf:n,S_=Zs?Zs.toString:n;function L(s){if(kt(s)&&!Xe(s)&&!(s instanceof ot)){if(s instanceof Bn)return s;if(vt.call(s,"__wrapped__"))return Rf(s)}return new Bn(s)}var Pi=function(){function s(){}return function(l){if(!Tt(l))return{};if(w_)return w_(l);s.prototype=l;var f=new s;return s.prototype=n,f}}();function Qs(){}function Bn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:Cv,evaluate:bv,interpolate:Fd,variable:"",imports:{_:L}},L.prototype=Qs.prototype,L.prototype.constructor=L,Bn.prototype=Pi(Qs.prototype),Bn.prototype.constructor=Bn;function ot(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ye,this.__views__=[]}function a1(){var s=new ot(this.__wrapped__);return s.__actions__=gn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=gn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=gn(this.__views__),s}function l1(){if(this.__filtered__){var s=new ot(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function c1(){var s=this.__wrapped__.value(),l=this.__dir__,f=Xe(s),E=l<0,I=f?s.length:0,N=bE(0,I,this.__views__),G=N.start,H=N.end,V=H-G,oe=E?H:G-1,le=this.__iteratees__,_e=le.length,we=0,Ge=Jt(V,this.__takeCount__);if(!f||!E&&I==V&&Ge==V)return J_(s,this.__actions__);var Pe=[];e:for(;V--&&we<Ge;){oe+=l;for(var et=-1,Be=s[oe];++et<_e;){var rt=le[et],ct=rt.iteratee,An=rt.type,ln=ct(Be);if(An==ge)Be=ln;else if(!ln){if(An==be)continue e;break e}}Pe[we++]=Be}return Pe}ot.prototype=Pi(Qs.prototype),ot.prototype.constructor=ot;function ui(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var E=s[l];this.set(E[0],E[1])}}function u1(){this.__data__=Ro?Ro(null):{},this.size=0}function d1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function _1(s){var l=this.__data__;if(Ro){var f=l[s];return f===u?n:f}return vt.call(l,s)?l[s]:n}function f1(s){var l=this.__data__;return Ro?l[s]!==n:vt.call(l,s)}function g1(s,l){var f=this.__data__;return this.size+=this.has(s)?0:1,f[s]=Ro&&l===n?u:l,this}ui.prototype.clear=u1,ui.prototype.delete=d1,ui.prototype.get=_1,ui.prototype.has=f1,ui.prototype.set=g1;function pr(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var E=s[l];this.set(E[0],E[1])}}function h1(){this.__data__=[],this.size=0}function p1(s){var l=this.__data__,f=Js(l,s);if(f<0)return!1;var E=l.length-1;return f==E?l.pop():js.call(l,f,1),--this.size,!0}function v1(s){var l=this.__data__,f=Js(l,s);return f<0?n:l[f][1]}function m1(s){return Js(this.__data__,s)>-1}function E1(s,l){var f=this.__data__,E=Js(f,s);return E<0?(++this.size,f.push([s,l])):f[E][1]=l,this}pr.prototype.clear=h1,pr.prototype.delete=p1,pr.prototype.get=v1,pr.prototype.has=m1,pr.prototype.set=E1;function vr(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var E=s[l];this.set(E[0],E[1])}}function C1(){this.size=0,this.__data__={hash:new ui,map:new(So||pr),string:new ui}}function b1(s){var l=da(this,s).delete(s);return this.size-=l?1:0,l}function O1(s){return da(this,s).get(s)}function I1(s){return da(this,s).has(s)}function w1(s,l){var f=da(this,s),E=f.size;return f.set(s,l),this.size+=f.size==E?0:1,this}vr.prototype.clear=C1,vr.prototype.delete=b1,vr.prototype.get=O1,vr.prototype.has=I1,vr.prototype.set=w1;function di(s){var l=-1,f=s==null?0:s.length;for(this.__data__=new vr;++l<f;)this.add(s[l])}function L1(s){return this.__data__.set(s,u),this}function y1(s){return this.__data__.has(s)}di.prototype.add=di.prototype.push=L1,di.prototype.has=y1;function Jn(s){var l=this.__data__=new pr(s);this.size=l.size}function A1(){this.__data__=new pr,this.size=0}function N1(s){var l=this.__data__,f=l.delete(s);return this.size=l.size,f}function S1(s){return this.__data__.get(s)}function x1(s){return this.__data__.has(s)}function R1(s,l){var f=this.__data__;if(f instanceof pr){var E=f.__data__;if(!So||E.length<i-1)return E.push([s,l]),this.size=++f.size,this;f=this.__data__=new vr(E)}return f.set(s,l),this.size=f.size,this}Jn.prototype.clear=A1,Jn.prototype.delete=N1,Jn.prototype.get=S1,Jn.prototype.has=x1,Jn.prototype.set=R1;function x_(s,l){var f=Xe(s),E=!f&&pi(s),I=!f&&!E&&Yr(s),N=!f&&!E&&!I&&zi(s),G=f||E||I||N,H=G?zl(s.length,Bm):[],V=H.length;for(var oe in s)(l||vt.call(s,oe))&&!(G&&(oe=="length"||I&&(oe=="offset"||oe=="parent")||N&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||br(oe,V)))&&H.push(oe);return H}function R_(s){var l=s.length;return l?s[ac(0,l-1)]:n}function T1(s,l){return _a(gn(s),_i(l,0,s.length))}function D1(s){return _a(gn(s))}function Zl(s,l,f){(f!==n&&!er(s[l],f)||f===n&&!(l in s))&&mr(s,l,f)}function Do(s,l,f){var E=s[l];(!(vt.call(s,l)&&er(E,f))||f===n&&!(l in s))&&mr(s,l,f)}function Js(s,l){for(var f=s.length;f--;)if(er(s[f][0],l))return f;return-1}function k1(s,l,f,E){return Br(s,function(I,N,G){l(E,I,f(I),G)}),E}function T_(s,l){return s&&or(l,zt(l),s)}function G1(s,l){return s&&or(l,pn(l),s)}function mr(s,l,f){l=="__proto__"&&Vs?Vs(s,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):s[l]=f}function Ql(s,l){for(var f=-1,E=l.length,I=Q(E),N=s==null;++f<E;)I[f]=N?n:Tc(s,l[f]);return I}function _i(s,l,f){return s===s&&(f!==n&&(s=s<=f?s:f),l!==n&&(s=s>=l?s:l)),s}function Hn(s,l,f,E,I,N){var G,H=l&g,V=l&v,oe=l&m;if(f&&(G=I?f(s,E,I,N):f(s)),G!==n)return G;if(!Tt(s))return s;var le=Xe(s);if(le){if(G=IE(s),!H)return gn(s,G)}else{var _e=en(s),we=_e==Dt||_e==Te;if(Yr(s))return nf(s,H);if(_e==At||_e==Qt||we&&!I){if(G=V||we?{}:Of(s),!H)return V?_E(s,G1(G,s)):dE(s,T_(G,s))}else{if(!Ot[_e])return I?s:{};G=wE(s,_e,H)}}N||(N=new Jn);var Ge=N.get(s);if(Ge)return Ge;N.set(s,G),Zf(s)?s.forEach(function(Be){G.add(Hn(Be,l,f,Be,s,N))}):Xf(s)&&s.forEach(function(Be,rt){G.set(rt,Hn(Be,l,f,rt,s,N))});var Pe=oe?V?mc:vc:V?pn:zt,et=le?n:Pe(s);return $n(et||s,function(Be,rt){et&&(rt=Be,Be=s[rt]),Do(G,rt,Hn(Be,l,f,rt,s,N))}),G}function M1(s){var l=zt(s);return function(f){return D_(f,s,l)}}function D_(s,l,f){var E=f.length;if(s==null)return!E;for(s=bt(s);E--;){var I=f[E],N=l[I],G=s[I];if(G===n&&!(I in s)||!N(G))return!1}return!0}function k_(s,l,f){if(typeof s!="function")throw new Pn(a);return Po(function(){s.apply(n,f)},l)}function ko(s,l,f,E){var I=-1,N=Ms,G=!0,H=s.length,V=[],oe=l.length;if(!H)return V;f&&(l=xt(l,wn(f))),E?(N=Fl,G=!1):l.length>=i&&(N=Ao,G=!1,l=new di(l));e:for(;++I<H;){var le=s[I],_e=f==null?le:f(le);if(le=E||le!==0?le:0,G&&_e===_e){for(var we=oe;we--;)if(l[we]===_e)continue e;V.push(le)}else N(l,_e,E)||V.push(le)}return V}var Br=lf(ir),G_=lf(ec,!0);function U1(s,l){var f=!0;return Br(s,function(E,I,N){return f=!!l(E,I,N),f}),f}function ea(s,l,f){for(var E=-1,I=s.length;++E<I;){var N=s[E],G=l(N);if(G!=null&&(H===n?G===G&&!yn(G):f(G,H)))var H=G,V=N}return V}function F1(s,l,f,E){var I=s.length;for(f=Je(f),f<0&&(f=-f>I?0:I+f),E=E===n||E>I?I:Je(E),E<0&&(E+=I),E=f>E?0:Jf(E);f<E;)s[f++]=l;return s}function M_(s,l){var f=[];return Br(s,function(E,I,N){l(E,I,N)&&f.push(E)}),f}function jt(s,l,f,E,I){var N=-1,G=s.length;for(f||(f=yE),I||(I=[]);++N<G;){var H=s[N];l>0&&f(H)?l>1?jt(H,l-1,f,E,I):Fr(I,H):E||(I[I.length]=H)}return I}var Jl=cf(),U_=cf(!0);function ir(s,l){return s&&Jl(s,l,zt)}function ec(s,l){return s&&U_(s,l,zt)}function ta(s,l){return Ur(l,function(f){return Or(s[f])})}function fi(s,l){l=Wr(l,s);for(var f=0,E=l.length;s!=null&&f<E;)s=s[sr(l[f++])];return f&&f==E?s:n}function F_(s,l,f){var E=l(s);return Xe(s)?E:Fr(E,f(s))}function sn(s){return s==null?s===n?fv:Re:ci&&ci in bt(s)?CE(s):DE(s)}function tc(s,l){return s>l}function $1(s,l){return s!=null&&vt.call(s,l)}function P1(s,l){return s!=null&&l in bt(s)}function B1(s,l,f){return s>=Jt(l,f)&&s<Pt(l,f)}function nc(s,l,f){for(var E=f?Fl:Ms,I=s[0].length,N=s.length,G=N,H=Q(N),V=1/0,oe=[];G--;){var le=s[G];G&&l&&(le=xt(le,wn(l))),V=Jt(le.length,V),H[G]=!f&&(l||I>=120&&le.length>=120)?new di(G&&le):n}le=s[0];var _e=-1,we=H[0];e:for(;++_e<I&&oe.length<V;){var Ge=le[_e],Pe=l?l(Ge):Ge;if(Ge=f||Ge!==0?Ge:0,!(we?Ao(we,Pe):E(oe,Pe,f))){for(G=N;--G;){var et=H[G];if(!(et?Ao(et,Pe):E(s[G],Pe,f)))continue e}we&&we.push(Pe),oe.push(Ge)}}return oe}function H1(s,l,f,E){return ir(s,function(I,N,G){l(E,f(I),N,G)}),E}function Go(s,l,f){l=Wr(l,s),s=yf(s,l);var E=s==null?s:s[sr(zn(l))];return E==null?n:In(E,s,f)}function $_(s){return kt(s)&&sn(s)==Qt}function W1(s){return kt(s)&&sn(s)==yo}function z1(s){return kt(s)&&sn(s)==Un}function Mo(s,l,f,E,I){return s===l?!0:s==null||l==null||!kt(s)&&!kt(l)?s!==s&&l!==l:Y1(s,l,f,E,Mo,I)}function Y1(s,l,f,E,I,N){var G=Xe(s),H=Xe(l),V=G?hr:en(s),oe=H?hr:en(l);V=V==Qt?At:V,oe=oe==Qt?At:oe;var le=V==At,_e=oe==At,we=V==oe;if(we&&Yr(s)){if(!Yr(l))return!1;G=!0,le=!1}if(we&&!le)return N||(N=new Jn),G||zi(s)?Ef(s,l,f,E,I,N):mE(s,l,V,f,E,I,N);if(!(f&C)){var Ge=le&&vt.call(s,"__wrapped__"),Pe=_e&&vt.call(l,"__wrapped__");if(Ge||Pe){var et=Ge?s.value():s,Be=Pe?l.value():l;return N||(N=new Jn),I(et,Be,f,E,N)}}return we?(N||(N=new Jn),EE(s,l,f,E,I,N)):!1}function j1(s){return kt(s)&&en(s)==Ie}function rc(s,l,f,E){var I=f.length,N=I,G=!E;if(s==null)return!N;for(s=bt(s);I--;){var H=f[I];if(G&&H[2]?H[1]!==s[H[0]]:!(H[0]in s))return!1}for(;++I<N;){H=f[I];var V=H[0],oe=s[V],le=H[1];if(G&&H[2]){if(oe===n&&!(V in s))return!1}else{var _e=new Jn;if(E)var we=E(oe,le,V,s,l,_e);if(!(we===n?Mo(le,oe,C|b,E,_e):we))return!1}}return!0}function P_(s){if(!Tt(s)||NE(s))return!1;var l=Or(s)?jm:Mv;return l.test(hi(s))}function V1(s){return kt(s)&&sn(s)==ai}function K1(s){return kt(s)&&en(s)==Zn}function X1(s){return kt(s)&&ma(s.length)&&!!Nt[sn(s)]}function B_(s){return typeof s=="function"?s:s==null?vn:typeof s=="object"?Xe(s)?z_(s[0],s[1]):W_(s):ug(s)}function ic(s){if(!$o(s))return Qm(s);var l=[];for(var f in bt(s))vt.call(s,f)&&f!="constructor"&&l.push(f);return l}function q1(s){if(!Tt(s))return TE(s);var l=$o(s),f=[];for(var E in s)E=="constructor"&&(l||!vt.call(s,E))||f.push(E);return f}function oc(s,l){return s<l}function H_(s,l){var f=-1,E=hn(s)?Q(s.length):[];return Br(s,function(I,N,G){E[++f]=l(I,N,G)}),E}function W_(s){var l=Cc(s);return l.length==1&&l[0][2]?wf(l[0][0],l[0][1]):function(f){return f===s||rc(f,s,l)}}function z_(s,l){return Oc(s)&&If(l)?wf(sr(s),l):function(f){var E=Tc(f,s);return E===n&&E===l?Dc(f,s):Mo(l,E,C|b)}}function na(s,l,f,E,I){s!==l&&Jl(l,function(N,G){if(I||(I=new Jn),Tt(N))Z1(s,l,G,f,na,E,I);else{var H=E?E(wc(s,G),N,G+"",s,l,I):n;H===n&&(H=N),Zl(s,G,H)}},pn)}function Z1(s,l,f,E,I,N,G){var H=wc(s,f),V=wc(l,f),oe=G.get(V);if(oe){Zl(s,f,oe);return}var le=N?N(H,V,f+"",s,l,G):n,_e=le===n;if(_e){var we=Xe(V),Ge=!we&&Yr(V),Pe=!we&&!Ge&&zi(V);le=V,we||Ge||Pe?Xe(H)?le=H:Gt(H)?le=gn(H):Ge?(_e=!1,le=nf(V,!0)):Pe?(_e=!1,le=rf(V,!0)):le=[]:Bo(V)||pi(V)?(le=H,pi(H)?le=eg(H):(!Tt(H)||Or(H))&&(le=Of(V))):_e=!1}_e&&(G.set(V,le),I(le,V,E,N,G),G.delete(V)),Zl(s,f,le)}function Y_(s,l){var f=s.length;if(f)return l+=l<0?f:0,br(l,f)?s[l]:n}function j_(s,l,f){l.length?l=xt(l,function(N){return Xe(N)?function(G){return fi(G,N.length===1?N[0]:N)}:N}):l=[vn];var E=-1;l=xt(l,wn($e()));var I=H_(s,function(N,G,H){var V=xt(l,function(oe){return oe(N)});return{criteria:V,index:++E,value:N}});return wm(I,function(N,G){return uE(N,G,f)})}function Q1(s,l){return V_(s,l,function(f,E){return Dc(s,E)})}function V_(s,l,f){for(var E=-1,I=l.length,N={};++E<I;){var G=l[E],H=fi(s,G);f(H,G)&&Uo(N,Wr(G,s),H)}return N}function J1(s){return function(l){return fi(l,s)}}function sc(s,l,f,E){var I=E?Im:Di,N=-1,G=l.length,H=s;for(s===l&&(l=gn(l)),f&&(H=xt(s,wn(f)));++N<G;)for(var V=0,oe=l[N],le=f?f(oe):oe;(V=I(H,le,V,E))>-1;)H!==s&&js.call(H,V,1),js.call(s,V,1);return s}function K_(s,l){for(var f=s?l.length:0,E=f-1;f--;){var I=l[f];if(f==E||I!==N){var N=I;br(I)?js.call(s,I,1):uc(s,I)}}return s}function ac(s,l){return s+Xs(N_()*(l-s+1))}function eE(s,l,f,E){for(var I=-1,N=Pt(Ks((l-s)/(f||1)),0),G=Q(N);N--;)G[E?N:++I]=s,s+=f;return G}function lc(s,l){var f="";if(!s||l<1||l>Ne)return f;do l%2&&(f+=s),l=Xs(l/2),l&&(s+=s);while(l);return f}function tt(s,l){return Lc(Lf(s,l,vn),s+"")}function tE(s){return R_(Yi(s))}function nE(s,l){var f=Yi(s);return _a(f,_i(l,0,f.length))}function Uo(s,l,f,E){if(!Tt(s))return s;l=Wr(l,s);for(var I=-1,N=l.length,G=N-1,H=s;H!=null&&++I<N;){var V=sr(l[I]),oe=f;if(V==="__proto__"||V==="constructor"||V==="prototype")return s;if(I!=G){var le=H[V];oe=E?E(le,V,H):n,oe===n&&(oe=Tt(le)?le:br(l[I+1])?[]:{})}Do(H,V,oe),H=H[V]}return s}var X_=qs?function(s,l){return qs.set(s,l),s}:vn,rE=Vs?function(s,l){return Vs(s,"toString",{configurable:!0,enumerable:!1,value:Gc(l),writable:!0})}:vn;function iE(s){return _a(Yi(s))}function Wn(s,l,f){var E=-1,I=s.length;l<0&&(l=-l>I?0:I+l),f=f>I?I:f,f<0&&(f+=I),I=l>f?0:f-l>>>0,l>>>=0;for(var N=Q(I);++E<I;)N[E]=s[E+l];return N}function oE(s,l){var f;return Br(s,function(E,I,N){return f=l(E,I,N),!f}),!!f}function ra(s,l,f){var E=0,I=s==null?E:s.length;if(typeof l=="number"&&l===l&&I<=Mn){for(;E<I;){var N=E+I>>>1,G=s[N];G!==null&&!yn(G)&&(f?G<=l:G<l)?E=N+1:I=N}return I}return cc(s,l,vn,f)}function cc(s,l,f,E){var I=0,N=s==null?0:s.length;if(N===0)return 0;l=f(l);for(var G=l!==l,H=l===null,V=yn(l),oe=l===n;I<N;){var le=Xs((I+N)/2),_e=f(s[le]),we=_e!==n,Ge=_e===null,Pe=_e===_e,et=yn(_e);if(G)var Be=E||Pe;else oe?Be=Pe&&(E||we):H?Be=Pe&&we&&(E||!Ge):V?Be=Pe&&we&&!Ge&&(E||!et):Ge||et?Be=!1:Be=E?_e<=l:_e<l;Be?I=le+1:N=le}return Jt(N,On)}function q_(s,l){for(var f=-1,E=s.length,I=0,N=[];++f<E;){var G=s[f],H=l?l(G):G;if(!f||!er(H,V)){var V=H;N[I++]=G===0?0:G}}return N}function Z_(s){return typeof s=="number"?s:yn(s)?lt:+s}function Ln(s){if(typeof s=="string")return s;if(Xe(s))return xt(s,Ln)+"";if(yn(s))return S_?S_.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Hr(s,l,f){var E=-1,I=Ms,N=s.length,G=!0,H=[],V=H;if(f)G=!1,I=Fl;else if(N>=i){var oe=l?null:pE(s);if(oe)return Fs(oe);G=!1,I=Ao,V=new di}else V=l?[]:H;e:for(;++E<N;){var le=s[E],_e=l?l(le):le;if(le=f||le!==0?le:0,G&&_e===_e){for(var we=V.length;we--;)if(V[we]===_e)continue e;l&&V.push(_e),H.push(le)}else I(V,_e,f)||(V!==H&&V.push(_e),H.push(le))}return H}function uc(s,l){return l=Wr(l,s),s=yf(s,l),s==null||delete s[sr(zn(l))]}function Q_(s,l,f,E){return Uo(s,l,f(fi(s,l)),E)}function ia(s,l,f,E){for(var I=s.length,N=E?I:-1;(E?N--:++N<I)&&l(s[N],N,s););return f?Wn(s,E?0:N,E?N+1:I):Wn(s,E?N+1:0,E?I:N)}function J_(s,l){var f=s;return f instanceof ot&&(f=f.value()),$l(l,function(E,I){return I.func.apply(I.thisArg,Fr([E],I.args))},f)}function dc(s,l,f){var E=s.length;if(E<2)return E?Hr(s[0]):[];for(var I=-1,N=Q(E);++I<E;)for(var G=s[I],H=-1;++H<E;)H!=I&&(N[I]=ko(N[I]||G,s[H],l,f));return Hr(jt(N,1),l,f)}function ef(s,l,f){for(var E=-1,I=s.length,N=l.length,G={};++E<I;){var H=E<N?l[E]:n;f(G,s[E],H)}return G}function _c(s){return Gt(s)?s:[]}function fc(s){return typeof s=="function"?s:vn}function Wr(s,l){return Xe(s)?s:Oc(s,l)?[s]:xf(ht(s))}var sE=tt;function zr(s,l,f){var E=s.length;return f=f===n?E:f,!l&&f>=E?s:Wn(s,l,f)}var tf=Vm||function(s){return Yt.clearTimeout(s)};function nf(s,l){if(l)return s.slice();var f=s.length,E=I_?I_(f):new s.constructor(f);return s.copy(E),E}function gc(s){var l=new s.constructor(s.byteLength);return new zs(l).set(new zs(s)),l}function aE(s,l){var f=l?gc(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.byteLength)}function lE(s){var l=new s.constructor(s.source,$d.exec(s));return l.lastIndex=s.lastIndex,l}function cE(s){return To?bt(To.call(s)):{}}function rf(s,l){var f=l?gc(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.length)}function of(s,l){if(s!==l){var f=s!==n,E=s===null,I=s===s,N=yn(s),G=l!==n,H=l===null,V=l===l,oe=yn(l);if(!H&&!oe&&!N&&s>l||N&&G&&V&&!H&&!oe||E&&G&&V||!f&&V||!I)return 1;if(!E&&!N&&!oe&&s<l||oe&&f&&I&&!E&&!N||H&&f&&I||!G&&I||!V)return-1}return 0}function uE(s,l,f){for(var E=-1,I=s.criteria,N=l.criteria,G=I.length,H=f.length;++E<G;){var V=of(I[E],N[E]);if(V){if(E>=H)return V;var oe=f[E];return V*(oe=="desc"?-1:1)}}return s.index-l.index}function sf(s,l,f,E){for(var I=-1,N=s.length,G=f.length,H=-1,V=l.length,oe=Pt(N-G,0),le=Q(V+oe),_e=!E;++H<V;)le[H]=l[H];for(;++I<G;)(_e||I<N)&&(le[f[I]]=s[I]);for(;oe--;)le[H++]=s[I++];return le}function af(s,l,f,E){for(var I=-1,N=s.length,G=-1,H=f.length,V=-1,oe=l.length,le=Pt(N-H,0),_e=Q(le+oe),we=!E;++I<le;)_e[I]=s[I];for(var Ge=I;++V<oe;)_e[Ge+V]=l[V];for(;++G<H;)(we||I<N)&&(_e[Ge+f[G]]=s[I++]);return _e}function gn(s,l){var f=-1,E=s.length;for(l||(l=Q(E));++f<E;)l[f]=s[f];return l}function or(s,l,f,E){var I=!f;f||(f={});for(var N=-1,G=l.length;++N<G;){var H=l[N],V=E?E(f[H],s[H],H,f,s):n;V===n&&(V=s[H]),I?mr(f,H,V):Do(f,H,V)}return f}function dE(s,l){return or(s,bc(s),l)}function _E(s,l){return or(s,Cf(s),l)}function oa(s,l){return function(f,E){var I=Xe(f)?vm:k1,N=l?l():{};return I(f,s,$e(E,2),N)}}function Bi(s){return tt(function(l,f){var E=-1,I=f.length,N=I>1?f[I-1]:n,G=I>2?f[2]:n;for(N=s.length>3&&typeof N=="function"?(I--,N):n,G&&an(f[0],f[1],G)&&(N=I<3?n:N,I=1),l=bt(l);++E<I;){var H=f[E];H&&s(l,H,E,N)}return l})}function lf(s,l){return function(f,E){if(f==null)return f;if(!hn(f))return s(f,E);for(var I=f.length,N=l?I:-1,G=bt(f);(l?N--:++N<I)&&E(G[N],N,G)!==!1;);return f}}function cf(s){return function(l,f,E){for(var I=-1,N=bt(l),G=E(l),H=G.length;H--;){var V=G[s?H:++I];if(f(N[V],V,N)===!1)break}return l}}function fE(s,l,f){var E=l&O,I=Fo(s);function N(){var G=this&&this!==Yt&&this instanceof N?I:s;return G.apply(E?f:this,arguments)}return N}function uf(s){return function(l){l=ht(l);var f=ki(l)?Qn(l):n,E=f?f[0]:l.charAt(0),I=f?zr(f,1).join(""):l.slice(1);return E[s]()+I}}function Hi(s){return function(l){return $l(lg(ag(l).replace(rm,"")),s,"")}}function Fo(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=Pi(s.prototype),E=s.apply(f,l);return Tt(E)?E:f}}function gE(s,l,f){var E=Fo(s);function I(){for(var N=arguments.length,G=Q(N),H=N,V=Wi(I);H--;)G[H]=arguments[H];var oe=N<3&&G[0]!==V&&G[N-1]!==V?[]:$r(G,V);if(N-=oe.length,N<f)return hf(s,l,sa,I.placeholder,n,G,oe,n,n,f-N);var le=this&&this!==Yt&&this instanceof I?E:s;return In(le,this,G)}return I}function df(s){return function(l,f,E){var I=bt(l);if(!hn(l)){var N=$e(f,3);l=zt(l),f=function(H){return N(I[H],H,I)}}var G=s(l,f,E);return G>-1?I[N?l[G]:G]:n}}function _f(s){return Cr(function(l){var f=l.length,E=f,I=Bn.prototype.thru;for(s&&l.reverse();E--;){var N=l[E];if(typeof N!="function")throw new Pn(a);if(I&&!G&&ua(N)=="wrapper")var G=new Bn([],!0)}for(E=G?E:f;++E<f;){N=l[E];var H=ua(N),V=H=="wrapper"?Ec(N):n;V&&Ic(V[0])&&V[1]==(B|k|z|X)&&!V[4].length&&V[9]==1?G=G[ua(V[0])].apply(G,V[3]):G=N.length==1&&Ic(N)?G[H]():G.thru(N)}return function(){var oe=arguments,le=oe[0];if(G&&oe.length==1&&Xe(le))return G.plant(le).value();for(var _e=0,we=f?l[_e].apply(this,oe):le;++_e<f;)we=l[_e].call(this,we);return we}})}function sa(s,l,f,E,I,N,G,H,V,oe){var le=l&B,_e=l&O,we=l&w,Ge=l&(k|U),Pe=l&ee,et=we?n:Fo(s);function Be(){for(var rt=arguments.length,ct=Q(rt),An=rt;An--;)ct[An]=arguments[An];if(Ge)var ln=Wi(Be),Nn=ym(ct,ln);if(E&&(ct=sf(ct,E,I,Ge)),N&&(ct=af(ct,N,G,Ge)),rt-=Nn,Ge&&rt<oe){var Mt=$r(ct,ln);return hf(s,l,sa,Be.placeholder,f,ct,Mt,H,V,oe-rt)}var tr=_e?f:this,wr=we?tr[s]:s;return rt=ct.length,H?ct=kE(ct,H):Pe&&rt>1&&ct.reverse(),le&&V<rt&&(ct.length=V),this&&this!==Yt&&this instanceof Be&&(wr=et||Fo(wr)),wr.apply(tr,ct)}return Be}function ff(s,l){return function(f,E){return H1(f,s,l(E),{})}}function aa(s,l){return function(f,E){var I;if(f===n&&E===n)return l;if(f!==n&&(I=f),E!==n){if(I===n)return E;typeof f=="string"||typeof E=="string"?(f=Ln(f),E=Ln(E)):(f=Z_(f),E=Z_(E)),I=s(f,E)}return I}}function hc(s){return Cr(function(l){return l=xt(l,wn($e())),tt(function(f){var E=this;return s(l,function(I){return In(I,E,f)})})})}function la(s,l){l=l===n?" ":Ln(l);var f=l.length;if(f<2)return f?lc(l,s):l;var E=lc(l,Ks(s/Gi(l)));return ki(l)?zr(Qn(E),0,s).join(""):E.slice(0,s)}function hE(s,l,f,E){var I=l&O,N=Fo(s);function G(){for(var H=-1,V=arguments.length,oe=-1,le=E.length,_e=Q(le+V),we=this&&this!==Yt&&this instanceof G?N:s;++oe<le;)_e[oe]=E[oe];for(;V--;)_e[oe++]=arguments[++H];return In(we,I?f:this,_e)}return G}function gf(s){return function(l,f,E){return E&&typeof E!="number"&&an(l,f,E)&&(f=E=n),l=Ir(l),f===n?(f=l,l=0):f=Ir(f),E=E===n?l<f?1:-1:Ir(E),eE(l,f,E,s)}}function ca(s){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=Yn(l),f=Yn(f)),s(l,f)}}function hf(s,l,f,E,I,N,G,H,V,oe){var le=l&k,_e=le?G:n,we=le?n:G,Ge=le?N:n,Pe=le?n:N;l|=le?z:Y,l&=~(le?Y:z),l&x||(l&=-4);var et=[s,l,I,Ge,_e,Pe,we,H,V,oe],Be=f.apply(n,et);return Ic(s)&&Af(Be,et),Be.placeholder=E,Nf(Be,s,l)}function pc(s){var l=$t[s];return function(f,E){if(f=Yn(f),E=E==null?0:Jt(Je(E),292),E&&A_(f)){var I=(ht(f)+"e").split("e"),N=l(I[0]+"e"+(+I[1]+E));return I=(ht(N)+"e").split("e"),+(I[0]+"e"+(+I[1]-E))}return l(f)}}var pE=Fi&&1/Fs(new Fi([,-0]))[1]==Qe?function(s){return new Fi(s)}:Fc;function pf(s){return function(l){var f=en(l);return f==Ie?jl(l):f==Zn?Dm(l):Lm(l,s(l))}}function Er(s,l,f,E,I,N,G,H){var V=l&w;if(!V&&typeof s!="function")throw new Pn(a);var oe=E?E.length:0;if(oe||(l&=-97,E=I=n),G=G===n?G:Pt(Je(G),0),H=H===n?H:Je(H),oe-=I?I.length:0,l&Y){var le=E,_e=I;E=I=n}var we=V?n:Ec(s),Ge=[s,l,f,E,I,le,_e,N,G,H];if(we&&RE(Ge,we),s=Ge[0],l=Ge[1],f=Ge[2],E=Ge[3],I=Ge[4],H=Ge[9]=Ge[9]===n?V?0:s.length:Pt(Ge[9]-oe,0),!H&&l&(k|U)&&(l&=-25),!l||l==O)var Pe=fE(s,l,f);else l==k||l==U?Pe=gE(s,l,H):(l==z||l==(O|z))&&!I.length?Pe=hE(s,l,f,E):Pe=sa.apply(n,Ge);var et=we?X_:Af;return Nf(et(Pe,Ge),s,l)}function vf(s,l,f,E){return s===n||er(s,Ui[f])&&!vt.call(E,f)?l:s}function mf(s,l,f,E,I,N){return Tt(s)&&Tt(l)&&(N.set(l,s),na(s,l,n,mf,N),N.delete(l)),s}function vE(s){return Bo(s)?n:s}function Ef(s,l,f,E,I,N){var G=f&C,H=s.length,V=l.length;if(H!=V&&!(G&&V>H))return!1;var oe=N.get(s),le=N.get(l);if(oe&&le)return oe==l&&le==s;var _e=-1,we=!0,Ge=f&b?new di:n;for(N.set(s,l),N.set(l,s);++_e<H;){var Pe=s[_e],et=l[_e];if(E)var Be=G?E(et,Pe,_e,l,s,N):E(Pe,et,_e,s,l,N);if(Be!==n){if(Be)continue;we=!1;break}if(Ge){if(!Pl(l,function(rt,ct){if(!Ao(Ge,ct)&&(Pe===rt||I(Pe,rt,f,E,N)))return Ge.push(ct)})){we=!1;break}}else if(!(Pe===et||I(Pe,et,f,E,N))){we=!1;break}}return N.delete(s),N.delete(l),we}function mE(s,l,f,E,I,N,G){switch(f){case Ri:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case yo:return!(s.byteLength!=l.byteLength||!N(new zs(s),new zs(l)));case rr:case Un:case ke:return er(+s,+l);case Mr:return s.name==l.name&&s.message==l.message;case ai:case wo:return s==l+"";case Ie:var H=jl;case Zn:var V=E&C;if(H||(H=Fs),s.size!=l.size&&!V)return!1;var oe=G.get(s);if(oe)return oe==l;E|=b,G.set(s,l);var le=Ef(H(s),H(l),E,I,N,G);return G.delete(s),le;case Ts:if(To)return To.call(s)==To.call(l)}return!1}function EE(s,l,f,E,I,N){var G=f&C,H=vc(s),V=H.length,oe=vc(l),le=oe.length;if(V!=le&&!G)return!1;for(var _e=V;_e--;){var we=H[_e];if(!(G?we in l:vt.call(l,we)))return!1}var Ge=N.get(s),Pe=N.get(l);if(Ge&&Pe)return Ge==l&&Pe==s;var et=!0;N.set(s,l),N.set(l,s);for(var Be=G;++_e<V;){we=H[_e];var rt=s[we],ct=l[we];if(E)var An=G?E(ct,rt,we,l,s,N):E(rt,ct,we,s,l,N);if(!(An===n?rt===ct||I(rt,ct,f,E,N):An)){et=!1;break}Be||(Be=we=="constructor")}if(et&&!Be){var ln=s.constructor,Nn=l.constructor;ln!=Nn&&"constructor"in s&&"constructor"in l&&!(typeof ln=="function"&&ln instanceof ln&&typeof Nn=="function"&&Nn instanceof Nn)&&(et=!1)}return N.delete(s),N.delete(l),et}function Cr(s){return Lc(Lf(s,n,kf),s+"")}function vc(s){return F_(s,zt,bc)}function mc(s){return F_(s,pn,Cf)}var Ec=qs?function(s){return qs.get(s)}:Fc;function ua(s){for(var l=s.name+"",f=$i[l],E=vt.call($i,l)?f.length:0;E--;){var I=f[E],N=I.func;if(N==null||N==s)return I.name}return l}function Wi(s){var l=vt.call(L,"placeholder")?L:s;return l.placeholder}function $e(){var s=L.iteratee||Mc;return s=s===Mc?B_:s,arguments.length?s(arguments[0],arguments[1]):s}function da(s,l){var f=s.__data__;return AE(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Cc(s){for(var l=zt(s),f=l.length;f--;){var E=l[f],I=s[E];l[f]=[E,I,If(I)]}return l}function gi(s,l){var f=xm(s,l);return P_(f)?f:n}function CE(s){var l=vt.call(s,ci),f=s[ci];try{s[ci]=n;var E=!0}catch{}var I=Hs.call(s);return E&&(l?s[ci]=f:delete s[ci]),I}var bc=Kl?function(s){return s==null?[]:(s=bt(s),Ur(Kl(s),function(l){return L_.call(s,l)}))}:$c,Cf=Kl?function(s){for(var l=[];s;)Fr(l,bc(s)),s=Ys(s);return l}:$c,en=sn;(Xl&&en(new Xl(new ArrayBuffer(1)))!=Ri||So&&en(new So)!=Ie||ql&&en(ql.resolve())!=Rs||Fi&&en(new Fi)!=Zn||xo&&en(new xo)!=Lo)&&(en=function(s){var l=sn(s),f=l==At?s.constructor:n,E=f?hi(f):"";if(E)switch(E){case n1:return Ri;case r1:return Ie;case i1:return Rs;case o1:return Zn;case s1:return Lo}return l});function bE(s,l,f){for(var E=-1,I=f.length;++E<I;){var N=f[E],G=N.size;switch(N.type){case"drop":s+=G;break;case"dropRight":l-=G;break;case"take":l=Jt(l,s+G);break;case"takeRight":s=Pt(s,l-G);break}}return{start:s,end:l}}function OE(s){var l=s.match(Nv);return l?l[1].split(Sv):[]}function bf(s,l,f){l=Wr(l,s);for(var E=-1,I=l.length,N=!1;++E<I;){var G=sr(l[E]);if(!(N=s!=null&&f(s,G)))break;s=s[G]}return N||++E!=I?N:(I=s==null?0:s.length,!!I&&ma(I)&&br(G,I)&&(Xe(s)||pi(s)))}function IE(s){var l=s.length,f=new s.constructor(l);return l&&typeof s[0]=="string"&&vt.call(s,"index")&&(f.index=s.index,f.input=s.input),f}function Of(s){return typeof s.constructor=="function"&&!$o(s)?Pi(Ys(s)):{}}function wE(s,l,f){var E=s.constructor;switch(l){case yo:return gc(s);case rr:case Un:return new E(+s);case Ri:return aE(s,f);case Cl:case bl:case Ol:case Il:case wl:case Ll:case yl:case Al:case Nl:return rf(s,f);case Ie:return new E;case ke:case wo:return new E(s);case ai:return lE(s);case Zn:return new E;case Ts:return cE(s)}}function LE(s,l){var f=l.length;if(!f)return s;var E=f-1;return l[E]=(f>1?"& ":"")+l[E],l=l.join(f>2?", ":" "),s.replace(Av,`{
/* [wrapped with `+l+`] */
`)}function yE(s){return Xe(s)||pi(s)||!!(y_&&s&&s[y_])}function br(s,l){var f=typeof s;return l=l??Ne,!!l&&(f=="number"||f!="symbol"&&Fv.test(s))&&s>-1&&s%1==0&&s<l}function an(s,l,f){if(!Tt(f))return!1;var E=typeof l;return(E=="number"?hn(f)&&br(l,f.length):E=="string"&&l in f)?er(f[l],s):!1}function Oc(s,l){if(Xe(s))return!1;var f=typeof s;return f=="number"||f=="symbol"||f=="boolean"||s==null||yn(s)?!0:Iv.test(s)||!Ov.test(s)||l!=null&&s in bt(l)}function AE(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Ic(s){var l=ua(s),f=L[l];if(typeof f!="function"||!(l in ot.prototype))return!1;if(s===f)return!0;var E=Ec(f);return!!E&&s===E[0]}function NE(s){return!!O_&&O_ in s}var SE=Ps?Or:Pc;function $o(s){var l=s&&s.constructor,f=typeof l=="function"&&l.prototype||Ui;return s===f}function If(s){return s===s&&!Tt(s)}function wf(s,l){return function(f){return f==null?!1:f[s]===l&&(l!==n||s in bt(f))}}function xE(s){var l=pa(s,function(E){return f.size===_&&f.clear(),E}),f=l.cache;return l}function RE(s,l){var f=s[1],E=l[1],I=f|E,N=I<(O|w|B),G=E==B&&f==k||E==B&&f==X&&s[7].length<=l[8]||E==(B|X)&&l[7].length<=l[8]&&f==k;if(!(N||G))return s;E&O&&(s[2]=l[2],I|=f&O?0:x);var H=l[3];if(H){var V=s[3];s[3]=V?sf(V,H,l[4]):H,s[4]=V?$r(s[3],p):l[4]}return H=l[5],H&&(V=s[5],s[5]=V?af(V,H,l[6]):H,s[6]=V?$r(s[5],p):l[6]),H=l[7],H&&(s[7]=H),E&B&&(s[8]=s[8]==null?l[8]:Jt(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=I,s}function TE(s){var l=[];if(s!=null)for(var f in bt(s))l.push(f);return l}function DE(s){return Hs.call(s)}function Lf(s,l,f){return l=Pt(l===n?s.length-1:l,0),function(){for(var E=arguments,I=-1,N=Pt(E.length-l,0),G=Q(N);++I<N;)G[I]=E[l+I];I=-1;for(var H=Q(l+1);++I<l;)H[I]=E[I];return H[l]=f(G),In(s,this,H)}}function yf(s,l){return l.length<2?s:fi(s,Wn(l,0,-1))}function kE(s,l){for(var f=s.length,E=Jt(l.length,f),I=gn(s);E--;){var N=l[E];s[E]=br(N,f)?I[N]:n}return s}function wc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var Af=Sf(X_),Po=Xm||function(s,l){return Yt.setTimeout(s,l)},Lc=Sf(rE);function Nf(s,l,f){var E=l+"";return Lc(s,LE(E,GE(OE(E),f)))}function Sf(s){var l=0,f=0;return function(){var E=Jm(),I=Ce-(E-f);if(f=E,I>0){if(++l>=re)return arguments[0]}else l=0;return s.apply(n,arguments)}}function _a(s,l){var f=-1,E=s.length,I=E-1;for(l=l===n?E:l;++f<l;){var N=ac(f,I),G=s[N];s[N]=s[f],s[f]=G}return s.length=l,s}var xf=xE(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(wv,function(f,E,I,N){l.push(I?N.replace(Tv,"$1"):E||f)}),l});function sr(s){if(typeof s=="string"||yn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function hi(s){if(s!=null){try{return Bs.call(s)}catch{}try{return s+""}catch{}}return""}function GE(s,l){return $n(Gr,function(f){var E="_."+f[0];l&f[1]&&!Ms(s,E)&&s.push(E)}),s.sort()}function Rf(s){if(s instanceof ot)return s.clone();var l=new Bn(s.__wrapped__,s.__chain__);return l.__actions__=gn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function ME(s,l,f){(f?an(s,l,f):l===n)?l=1:l=Pt(Je(l),0);var E=s==null?0:s.length;if(!E||l<1)return[];for(var I=0,N=0,G=Q(Ks(E/l));I<E;)G[N++]=Wn(s,I,I+=l);return G}function UE(s){for(var l=-1,f=s==null?0:s.length,E=0,I=[];++l<f;){var N=s[l];N&&(I[E++]=N)}return I}function FE(){var s=arguments.length;if(!s)return[];for(var l=Q(s-1),f=arguments[0],E=s;E--;)l[E-1]=arguments[E];return Fr(Xe(f)?gn(f):[f],jt(l,1))}var $E=tt(function(s,l){return Gt(s)?ko(s,jt(l,1,Gt,!0)):[]}),PE=tt(function(s,l){var f=zn(l);return Gt(f)&&(f=n),Gt(s)?ko(s,jt(l,1,Gt,!0),$e(f,2)):[]}),BE=tt(function(s,l){var f=zn(l);return Gt(f)&&(f=n),Gt(s)?ko(s,jt(l,1,Gt,!0),n,f):[]});function HE(s,l,f){var E=s==null?0:s.length;return E?(l=f||l===n?1:Je(l),Wn(s,l<0?0:l,E)):[]}function WE(s,l,f){var E=s==null?0:s.length;return E?(l=f||l===n?1:Je(l),l=E-l,Wn(s,0,l<0?0:l)):[]}function zE(s,l){return s&&s.length?ia(s,$e(l,3),!0,!0):[]}function YE(s,l){return s&&s.length?ia(s,$e(l,3),!0):[]}function jE(s,l,f,E){var I=s==null?0:s.length;return I?(f&&typeof f!="number"&&an(s,l,f)&&(f=0,E=I),F1(s,l,f,E)):[]}function Tf(s,l,f){var E=s==null?0:s.length;if(!E)return-1;var I=f==null?0:Je(f);return I<0&&(I=Pt(E+I,0)),Us(s,$e(l,3),I)}function Df(s,l,f){var E=s==null?0:s.length;if(!E)return-1;var I=E-1;return f!==n&&(I=Je(f),I=f<0?Pt(E+I,0):Jt(I,E-1)),Us(s,$e(l,3),I,!0)}function kf(s){var l=s==null?0:s.length;return l?jt(s,1):[]}function VE(s){var l=s==null?0:s.length;return l?jt(s,Qe):[]}function KE(s,l){var f=s==null?0:s.length;return f?(l=l===n?1:Je(l),jt(s,l)):[]}function XE(s){for(var l=-1,f=s==null?0:s.length,E={};++l<f;){var I=s[l];E[I[0]]=I[1]}return E}function Gf(s){return s&&s.length?s[0]:n}function qE(s,l,f){var E=s==null?0:s.length;if(!E)return-1;var I=f==null?0:Je(f);return I<0&&(I=Pt(E+I,0)),Di(s,l,I)}function ZE(s){var l=s==null?0:s.length;return l?Wn(s,0,-1):[]}var QE=tt(function(s){var l=xt(s,_c);return l.length&&l[0]===s[0]?nc(l):[]}),JE=tt(function(s){var l=zn(s),f=xt(s,_c);return l===zn(f)?l=n:f.pop(),f.length&&f[0]===s[0]?nc(f,$e(l,2)):[]}),eC=tt(function(s){var l=zn(s),f=xt(s,_c);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===s[0]?nc(f,n,l):[]});function tC(s,l){return s==null?"":Zm.call(s,l)}function zn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function nC(s,l,f){var E=s==null?0:s.length;if(!E)return-1;var I=E;return f!==n&&(I=Je(f),I=I<0?Pt(E+I,0):Jt(I,E-1)),l===l?Gm(s,l,I):Us(s,g_,I,!0)}function rC(s,l){return s&&s.length?Y_(s,Je(l)):n}var iC=tt(Mf);function Mf(s,l){return s&&s.length&&l&&l.length?sc(s,l):s}function oC(s,l,f){return s&&s.length&&l&&l.length?sc(s,l,$e(f,2)):s}function sC(s,l,f){return s&&s.length&&l&&l.length?sc(s,l,n,f):s}var aC=Cr(function(s,l){var f=s==null?0:s.length,E=Ql(s,l);return K_(s,xt(l,function(I){return br(I,f)?+I:I}).sort(of)),E});function lC(s,l){var f=[];if(!(s&&s.length))return f;var E=-1,I=[],N=s.length;for(l=$e(l,3);++E<N;){var G=s[E];l(G,E,s)&&(f.push(G),I.push(E))}return K_(s,I),f}function yc(s){return s==null?s:t1.call(s)}function cC(s,l,f){var E=s==null?0:s.length;return E?(f&&typeof f!="number"&&an(s,l,f)?(l=0,f=E):(l=l==null?0:Je(l),f=f===n?E:Je(f)),Wn(s,l,f)):[]}function uC(s,l){return ra(s,l)}function dC(s,l,f){return cc(s,l,$e(f,2))}function _C(s,l){var f=s==null?0:s.length;if(f){var E=ra(s,l);if(E<f&&er(s[E],l))return E}return-1}function fC(s,l){return ra(s,l,!0)}function gC(s,l,f){return cc(s,l,$e(f,2),!0)}function hC(s,l){var f=s==null?0:s.length;if(f){var E=ra(s,l,!0)-1;if(er(s[E],l))return E}return-1}function pC(s){return s&&s.length?q_(s):[]}function vC(s,l){return s&&s.length?q_(s,$e(l,2)):[]}function mC(s){var l=s==null?0:s.length;return l?Wn(s,1,l):[]}function EC(s,l,f){return s&&s.length?(l=f||l===n?1:Je(l),Wn(s,0,l<0?0:l)):[]}function CC(s,l,f){var E=s==null?0:s.length;return E?(l=f||l===n?1:Je(l),l=E-l,Wn(s,l<0?0:l,E)):[]}function bC(s,l){return s&&s.length?ia(s,$e(l,3),!1,!0):[]}function OC(s,l){return s&&s.length?ia(s,$e(l,3)):[]}var IC=tt(function(s){return Hr(jt(s,1,Gt,!0))}),wC=tt(function(s){var l=zn(s);return Gt(l)&&(l=n),Hr(jt(s,1,Gt,!0),$e(l,2))}),LC=tt(function(s){var l=zn(s);return l=typeof l=="function"?l:n,Hr(jt(s,1,Gt,!0),n,l)});function yC(s){return s&&s.length?Hr(s):[]}function AC(s,l){return s&&s.length?Hr(s,$e(l,2)):[]}function NC(s,l){return l=typeof l=="function"?l:n,s&&s.length?Hr(s,n,l):[]}function Ac(s){if(!(s&&s.length))return[];var l=0;return s=Ur(s,function(f){if(Gt(f))return l=Pt(f.length,l),!0}),zl(l,function(f){return xt(s,Bl(f))})}function Uf(s,l){if(!(s&&s.length))return[];var f=Ac(s);return l==null?f:xt(f,function(E){return In(l,n,E)})}var SC=tt(function(s,l){return Gt(s)?ko(s,l):[]}),xC=tt(function(s){return dc(Ur(s,Gt))}),RC=tt(function(s){var l=zn(s);return Gt(l)&&(l=n),dc(Ur(s,Gt),$e(l,2))}),TC=tt(function(s){var l=zn(s);return l=typeof l=="function"?l:n,dc(Ur(s,Gt),n,l)}),DC=tt(Ac);function kC(s,l){return ef(s||[],l||[],Do)}function GC(s,l){return ef(s||[],l||[],Uo)}var MC=tt(function(s){var l=s.length,f=l>1?s[l-1]:n;return f=typeof f=="function"?(s.pop(),f):n,Uf(s,f)});function Ff(s){var l=L(s);return l.__chain__=!0,l}function UC(s,l){return l(s),s}function fa(s,l){return l(s)}var FC=Cr(function(s){var l=s.length,f=l?s[0]:0,E=this.__wrapped__,I=function(N){return Ql(N,s)};return l>1||this.__actions__.length||!(E instanceof ot)||!br(f)?this.thru(I):(E=E.slice(f,+f+(l?1:0)),E.__actions__.push({func:fa,args:[I],thisArg:n}),new Bn(E,this.__chain__).thru(function(N){return l&&!N.length&&N.push(n),N}))});function $C(){return Ff(this)}function PC(){return new Bn(this.value(),this.__chain__)}function BC(){this.__values__===n&&(this.__values__=Qf(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function HC(){return this}function WC(s){for(var l,f=this;f instanceof Qs;){var E=Rf(f);E.__index__=0,E.__values__=n,l?I.__wrapped__=E:l=E;var I=E;f=f.__wrapped__}return I.__wrapped__=s,l}function zC(){var s=this.__wrapped__;if(s instanceof ot){var l=s;return this.__actions__.length&&(l=new ot(this)),l=l.reverse(),l.__actions__.push({func:fa,args:[yc],thisArg:n}),new Bn(l,this.__chain__)}return this.thru(yc)}function YC(){return J_(this.__wrapped__,this.__actions__)}var jC=oa(function(s,l,f){vt.call(s,f)?++s[f]:mr(s,f,1)});function VC(s,l,f){var E=Xe(s)?__:U1;return f&&an(s,l,f)&&(l=n),E(s,$e(l,3))}function KC(s,l){var f=Xe(s)?Ur:M_;return f(s,$e(l,3))}var XC=df(Tf),qC=df(Df);function ZC(s,l){return jt(ga(s,l),1)}function QC(s,l){return jt(ga(s,l),Qe)}function JC(s,l,f){return f=f===n?1:Je(f),jt(ga(s,l),f)}function $f(s,l){var f=Xe(s)?$n:Br;return f(s,$e(l,3))}function Pf(s,l){var f=Xe(s)?mm:G_;return f(s,$e(l,3))}var e0=oa(function(s,l,f){vt.call(s,f)?s[f].push(l):mr(s,f,[l])});function t0(s,l,f,E){s=hn(s)?s:Yi(s),f=f&&!E?Je(f):0;var I=s.length;return f<0&&(f=Pt(I+f,0)),Ea(s)?f<=I&&s.indexOf(l,f)>-1:!!I&&Di(s,l,f)>-1}var n0=tt(function(s,l,f){var E=-1,I=typeof l=="function",N=hn(s)?Q(s.length):[];return Br(s,function(G){N[++E]=I?In(l,G,f):Go(G,l,f)}),N}),r0=oa(function(s,l,f){mr(s,f,l)});function ga(s,l){var f=Xe(s)?xt:H_;return f(s,$e(l,3))}function i0(s,l,f,E){return s==null?[]:(Xe(l)||(l=l==null?[]:[l]),f=E?n:f,Xe(f)||(f=f==null?[]:[f]),j_(s,l,f))}var o0=oa(function(s,l,f){s[f?0:1].push(l)},function(){return[[],[]]});function s0(s,l,f){var E=Xe(s)?$l:p_,I=arguments.length<3;return E(s,$e(l,4),f,I,Br)}function a0(s,l,f){var E=Xe(s)?Em:p_,I=arguments.length<3;return E(s,$e(l,4),f,I,G_)}function l0(s,l){var f=Xe(s)?Ur:M_;return f(s,va($e(l,3)))}function c0(s){var l=Xe(s)?R_:tE;return l(s)}function u0(s,l,f){(f?an(s,l,f):l===n)?l=1:l=Je(l);var E=Xe(s)?T1:nE;return E(s,l)}function d0(s){var l=Xe(s)?D1:iE;return l(s)}function _0(s){if(s==null)return 0;if(hn(s))return Ea(s)?Gi(s):s.length;var l=en(s);return l==Ie||l==Zn?s.size:ic(s).length}function f0(s,l,f){var E=Xe(s)?Pl:oE;return f&&an(s,l,f)&&(l=n),E(s,$e(l,3))}var g0=tt(function(s,l){if(s==null)return[];var f=l.length;return f>1&&an(s,l[0],l[1])?l=[]:f>2&&an(l[0],l[1],l[2])&&(l=[l[0]]),j_(s,jt(l,1),[])}),ha=Km||function(){return Yt.Date.now()};function h0(s,l){if(typeof l!="function")throw new Pn(a);return s=Je(s),function(){if(--s<1)return l.apply(this,arguments)}}function Bf(s,l,f){return l=f?n:l,l=s&&l==null?s.length:l,Er(s,B,n,n,n,n,l)}function Hf(s,l){var f;if(typeof l!="function")throw new Pn(a);return s=Je(s),function(){return--s>0&&(f=l.apply(this,arguments)),s<=1&&(l=n),f}}var Nc=tt(function(s,l,f){var E=O;if(f.length){var I=$r(f,Wi(Nc));E|=z}return Er(s,E,l,f,I)}),Wf=tt(function(s,l,f){var E=O|w;if(f.length){var I=$r(f,Wi(Wf));E|=z}return Er(l,E,s,f,I)});function zf(s,l,f){l=f?n:l;var E=Er(s,k,n,n,n,n,n,l);return E.placeholder=zf.placeholder,E}function Yf(s,l,f){l=f?n:l;var E=Er(s,U,n,n,n,n,n,l);return E.placeholder=Yf.placeholder,E}function jf(s,l,f){var E,I,N,G,H,V,oe=0,le=!1,_e=!1,we=!0;if(typeof s!="function")throw new Pn(a);l=Yn(l)||0,Tt(f)&&(le=!!f.leading,_e="maxWait"in f,N=_e?Pt(Yn(f.maxWait)||0,l):N,we="trailing"in f?!!f.trailing:we);function Ge(Mt){var tr=E,wr=I;return E=I=n,oe=Mt,G=s.apply(wr,tr),G}function Pe(Mt){return oe=Mt,H=Po(rt,l),le?Ge(Mt):G}function et(Mt){var tr=Mt-V,wr=Mt-oe,dg=l-tr;return _e?Jt(dg,N-wr):dg}function Be(Mt){var tr=Mt-V,wr=Mt-oe;return V===n||tr>=l||tr<0||_e&&wr>=N}function rt(){var Mt=ha();if(Be(Mt))return ct(Mt);H=Po(rt,et(Mt))}function ct(Mt){return H=n,we&&E?Ge(Mt):(E=I=n,G)}function An(){H!==n&&tf(H),oe=0,E=V=I=H=n}function ln(){return H===n?G:ct(ha())}function Nn(){var Mt=ha(),tr=Be(Mt);if(E=arguments,I=this,V=Mt,tr){if(H===n)return Pe(V);if(_e)return tf(H),H=Po(rt,l),Ge(V)}return H===n&&(H=Po(rt,l)),G}return Nn.cancel=An,Nn.flush=ln,Nn}var p0=tt(function(s,l){return k_(s,1,l)}),v0=tt(function(s,l,f){return k_(s,Yn(l)||0,f)});function m0(s){return Er(s,ee)}function pa(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Pn(a);var f=function(){var E=arguments,I=l?l.apply(this,E):E[0],N=f.cache;if(N.has(I))return N.get(I);var G=s.apply(this,E);return f.cache=N.set(I,G)||N,G};return f.cache=new(pa.Cache||vr),f}pa.Cache=vr;function va(s){if(typeof s!="function")throw new Pn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function E0(s){return Hf(2,s)}var C0=sE(function(s,l){l=l.length==1&&Xe(l[0])?xt(l[0],wn($e())):xt(jt(l,1),wn($e()));var f=l.length;return tt(function(E){for(var I=-1,N=Jt(E.length,f);++I<N;)E[I]=l[I].call(this,E[I]);return In(s,this,E)})}),Sc=tt(function(s,l){var f=$r(l,Wi(Sc));return Er(s,z,n,l,f)}),Vf=tt(function(s,l){var f=$r(l,Wi(Vf));return Er(s,Y,n,l,f)}),b0=Cr(function(s,l){return Er(s,X,n,n,n,l)});function O0(s,l){if(typeof s!="function")throw new Pn(a);return l=l===n?l:Je(l),tt(s,l)}function I0(s,l){if(typeof s!="function")throw new Pn(a);return l=l==null?0:Pt(Je(l),0),tt(function(f){var E=f[l],I=zr(f,0,l);return E&&Fr(I,E),In(s,this,I)})}function w0(s,l,f){var E=!0,I=!0;if(typeof s!="function")throw new Pn(a);return Tt(f)&&(E="leading"in f?!!f.leading:E,I="trailing"in f?!!f.trailing:I),jf(s,l,{leading:E,maxWait:l,trailing:I})}function L0(s){return Bf(s,1)}function y0(s,l){return Sc(fc(l),s)}function A0(){if(!arguments.length)return[];var s=arguments[0];return Xe(s)?s:[s]}function N0(s){return Hn(s,m)}function S0(s,l){return l=typeof l=="function"?l:n,Hn(s,m,l)}function x0(s){return Hn(s,g|m)}function R0(s,l){return l=typeof l=="function"?l:n,Hn(s,g|m,l)}function T0(s,l){return l==null||D_(s,l,zt(l))}function er(s,l){return s===l||s!==s&&l!==l}var D0=ca(tc),k0=ca(function(s,l){return s>=l}),pi=$_(function(){return arguments}())?$_:function(s){return kt(s)&&vt.call(s,"callee")&&!L_.call(s,"callee")},Xe=Q.isArray,G0=s_?wn(s_):W1;function hn(s){return s!=null&&ma(s.length)&&!Or(s)}function Gt(s){return kt(s)&&hn(s)}function M0(s){return s===!0||s===!1||kt(s)&&sn(s)==rr}var Yr=qm||Pc,U0=a_?wn(a_):z1;function F0(s){return kt(s)&&s.nodeType===1&&!Bo(s)}function $0(s){if(s==null)return!0;if(hn(s)&&(Xe(s)||typeof s=="string"||typeof s.splice=="function"||Yr(s)||zi(s)||pi(s)))return!s.length;var l=en(s);if(l==Ie||l==Zn)return!s.size;if($o(s))return!ic(s).length;for(var f in s)if(vt.call(s,f))return!1;return!0}function P0(s,l){return Mo(s,l)}function B0(s,l,f){f=typeof f=="function"?f:n;var E=f?f(s,l):n;return E===n?Mo(s,l,n,f):!!E}function xc(s){if(!kt(s))return!1;var l=sn(s);return l==Mr||l==xi||typeof s.message=="string"&&typeof s.name=="string"&&!Bo(s)}function H0(s){return typeof s=="number"&&A_(s)}function Or(s){if(!Tt(s))return!1;var l=sn(s);return l==Dt||l==Te||l==si||l==El}function Kf(s){return typeof s=="number"&&s==Je(s)}function ma(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Ne}function Tt(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function kt(s){return s!=null&&typeof s=="object"}var Xf=l_?wn(l_):j1;function W0(s,l){return s===l||rc(s,l,Cc(l))}function z0(s,l,f){return f=typeof f=="function"?f:n,rc(s,l,Cc(l),f)}function Y0(s){return qf(s)&&s!=+s}function j0(s){if(SE(s))throw new je(o);return P_(s)}function V0(s){return s===null}function K0(s){return s==null}function qf(s){return typeof s=="number"||kt(s)&&sn(s)==ke}function Bo(s){if(!kt(s)||sn(s)!=At)return!1;var l=Ys(s);if(l===null)return!0;var f=vt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&Bs.call(f)==zm}var Rc=c_?wn(c_):V1;function X0(s){return Kf(s)&&s>=-9007199254740991&&s<=Ne}var Zf=u_?wn(u_):K1;function Ea(s){return typeof s=="string"||!Xe(s)&&kt(s)&&sn(s)==wo}function yn(s){return typeof s=="symbol"||kt(s)&&sn(s)==Ts}var zi=d_?wn(d_):X1;function q0(s){return s===n}function Z0(s){return kt(s)&&en(s)==Lo}function Q0(s){return kt(s)&&sn(s)==gv}var J0=ca(oc),eb=ca(function(s,l){return s<=l});function Qf(s){if(!s)return[];if(hn(s))return Ea(s)?Qn(s):gn(s);if(No&&s[No])return Tm(s[No]());var l=en(s),f=l==Ie?jl:l==Zn?Fs:Yi;return f(s)}function Ir(s){if(!s)return s===0?s:0;if(s=Yn(s),s===Qe||s===-1/0){var l=s<0?-1:1;return l*ye}return s===s?s:0}function Je(s){var l=Ir(s),f=l%1;return l===l?f?l-f:l:0}function Jf(s){return s?_i(Je(s),0,Ye):0}function Yn(s){if(typeof s=="number")return s;if(yn(s))return lt;if(Tt(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Tt(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=v_(s);var f=Gv.test(s);return f||Uv.test(s)?hm(s.slice(2),f?2:8):kv.test(s)?lt:+s}function eg(s){return or(s,pn(s))}function tb(s){return s?_i(Je(s),-9007199254740991,Ne):s===0?s:0}function ht(s){return s==null?"":Ln(s)}var nb=Bi(function(s,l){if($o(l)||hn(l)){or(l,zt(l),s);return}for(var f in l)vt.call(l,f)&&Do(s,f,l[f])}),tg=Bi(function(s,l){or(l,pn(l),s)}),Ca=Bi(function(s,l,f,E){or(l,pn(l),s,E)}),rb=Bi(function(s,l,f,E){or(l,zt(l),s,E)}),ib=Cr(Ql);function ob(s,l){var f=Pi(s);return l==null?f:T_(f,l)}var sb=tt(function(s,l){s=bt(s);var f=-1,E=l.length,I=E>2?l[2]:n;for(I&&an(l[0],l[1],I)&&(E=1);++f<E;)for(var N=l[f],G=pn(N),H=-1,V=G.length;++H<V;){var oe=G[H],le=s[oe];(le===n||er(le,Ui[oe])&&!vt.call(s,oe))&&(s[oe]=N[oe])}return s}),ab=tt(function(s){return s.push(n,mf),In(ng,n,s)});function lb(s,l){return f_(s,$e(l,3),ir)}function cb(s,l){return f_(s,$e(l,3),ec)}function ub(s,l){return s==null?s:Jl(s,$e(l,3),pn)}function db(s,l){return s==null?s:U_(s,$e(l,3),pn)}function _b(s,l){return s&&ir(s,$e(l,3))}function fb(s,l){return s&&ec(s,$e(l,3))}function gb(s){return s==null?[]:ta(s,zt(s))}function hb(s){return s==null?[]:ta(s,pn(s))}function Tc(s,l,f){var E=s==null?n:fi(s,l);return E===n?f:E}function pb(s,l){return s!=null&&bf(s,l,$1)}function Dc(s,l){return s!=null&&bf(s,l,P1)}var vb=ff(function(s,l,f){l!=null&&typeof l.toString!="function"&&(l=Hs.call(l)),s[l]=f},Gc(vn)),mb=ff(function(s,l,f){l!=null&&typeof l.toString!="function"&&(l=Hs.call(l)),vt.call(s,l)?s[l].push(f):s[l]=[f]},$e),Eb=tt(Go);function zt(s){return hn(s)?x_(s):ic(s)}function pn(s){return hn(s)?x_(s,!0):q1(s)}function Cb(s,l){var f={};return l=$e(l,3),ir(s,function(E,I,N){mr(f,l(E,I,N),E)}),f}function bb(s,l){var f={};return l=$e(l,3),ir(s,function(E,I,N){mr(f,I,l(E,I,N))}),f}var Ob=Bi(function(s,l,f){na(s,l,f)}),ng=Bi(function(s,l,f,E){na(s,l,f,E)}),Ib=Cr(function(s,l){var f={};if(s==null)return f;var E=!1;l=xt(l,function(N){return N=Wr(N,s),E||(E=N.length>1),N}),or(s,mc(s),f),E&&(f=Hn(f,g|v|m,vE));for(var I=l.length;I--;)uc(f,l[I]);return f});function wb(s,l){return rg(s,va($e(l)))}var Lb=Cr(function(s,l){return s==null?{}:Q1(s,l)});function rg(s,l){if(s==null)return{};var f=xt(mc(s),function(E){return[E]});return l=$e(l),V_(s,f,function(E,I){return l(E,I[0])})}function yb(s,l,f){l=Wr(l,s);var E=-1,I=l.length;for(I||(I=1,s=n);++E<I;){var N=s==null?n:s[sr(l[E])];N===n&&(E=I,N=f),s=Or(N)?N.call(s):N}return s}function Ab(s,l,f){return s==null?s:Uo(s,l,f)}function Nb(s,l,f,E){return E=typeof E=="function"?E:n,s==null?s:Uo(s,l,f,E)}var ig=pf(zt),og=pf(pn);function Sb(s,l,f){var E=Xe(s),I=E||Yr(s)||zi(s);if(l=$e(l,4),f==null){var N=s&&s.constructor;I?f=E?new N:[]:Tt(s)?f=Or(N)?Pi(Ys(s)):{}:f={}}return(I?$n:ir)(s,function(G,H,V){return l(f,G,H,V)}),f}function xb(s,l){return s==null?!0:uc(s,l)}function Rb(s,l,f){return s==null?s:Q_(s,l,fc(f))}function Tb(s,l,f,E){return E=typeof E=="function"?E:n,s==null?s:Q_(s,l,fc(f),E)}function Yi(s){return s==null?[]:Yl(s,zt(s))}function Db(s){return s==null?[]:Yl(s,pn(s))}function kb(s,l,f){return f===n&&(f=l,l=n),f!==n&&(f=Yn(f),f=f===f?f:0),l!==n&&(l=Yn(l),l=l===l?l:0),_i(Yn(s),l,f)}function Gb(s,l,f){return l=Ir(l),f===n?(f=l,l=0):f=Ir(f),s=Yn(s),B1(s,l,f)}function Mb(s,l,f){if(f&&typeof f!="boolean"&&an(s,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof s=="boolean"&&(f=s,s=n)),s===n&&l===n?(s=0,l=1):(s=Ir(s),l===n?(l=s,s=0):l=Ir(l)),s>l){var E=s;s=l,l=E}if(f||s%1||l%1){var I=N_();return Jt(s+I*(l-s+gm("1e-"+((I+"").length-1))),l)}return ac(s,l)}var Ub=Hi(function(s,l,f){return l=l.toLowerCase(),s+(f?sg(l):l)});function sg(s){return kc(ht(s).toLowerCase())}function ag(s){return s=ht(s),s&&s.replace($v,Am).replace(im,"")}function Fb(s,l,f){s=ht(s),l=Ln(l);var E=s.length;f=f===n?E:_i(Je(f),0,E);var I=f;return f-=l.length,f>=0&&s.slice(f,I)==l}function $b(s){return s=ht(s),s&&Ev.test(s)?s.replace(Ud,Nm):s}function Pb(s){return s=ht(s),s&&Lv.test(s)?s.replace(Sl,"\\$&"):s}var Bb=Hi(function(s,l,f){return s+(f?"-":"")+l.toLowerCase()}),Hb=Hi(function(s,l,f){return s+(f?" ":"")+l.toLowerCase()}),Wb=uf("toLowerCase");function zb(s,l,f){s=ht(s),l=Je(l);var E=l?Gi(s):0;if(!l||E>=l)return s;var I=(l-E)/2;return la(Xs(I),f)+s+la(Ks(I),f)}function Yb(s,l,f){s=ht(s),l=Je(l);var E=l?Gi(s):0;return l&&E<l?s+la(l-E,f):s}function jb(s,l,f){s=ht(s),l=Je(l);var E=l?Gi(s):0;return l&&E<l?la(l-E,f)+s:s}function Vb(s,l,f){return f||l==null?l=0:l&&(l=+l),e1(ht(s).replace(xl,""),l||0)}function Kb(s,l,f){return(f?an(s,l,f):l===n)?l=1:l=Je(l),lc(ht(s),l)}function Xb(){var s=arguments,l=ht(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var qb=Hi(function(s,l,f){return s+(f?"_":"")+l.toLowerCase()});function Zb(s,l,f){return f&&typeof f!="number"&&an(s,l,f)&&(l=f=n),f=f===n?Ye:f>>>0,f?(s=ht(s),s&&(typeof l=="string"||l!=null&&!Rc(l))&&(l=Ln(l),!l&&ki(s))?zr(Qn(s),0,f):s.split(l,f)):[]}var Qb=Hi(function(s,l,f){return s+(f?" ":"")+kc(l)});function Jb(s,l,f){return s=ht(s),f=f==null?0:_i(Je(f),0,s.length),l=Ln(l),s.slice(f,f+l.length)==l}function eO(s,l,f){var E=L.templateSettings;f&&an(s,l,f)&&(l=n),s=ht(s),l=Ca({},l,E,vf);var I=Ca({},l.imports,E.imports,vf),N=zt(I),G=Yl(I,N),H,V,oe=0,le=l.interpolate||Ds,_e="__p += '",we=Vl((l.escape||Ds).source+"|"+le.source+"|"+(le===Fd?Dv:Ds).source+"|"+(l.evaluate||Ds).source+"|$","g"),Ge="//# sourceURL="+(vt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++cm+"]")+`
`;s.replace(we,function(Be,rt,ct,An,ln,Nn){return ct||(ct=An),_e+=s.slice(oe,Nn).replace(Pv,Sm),rt&&(H=!0,_e+=`' +
__e(`+rt+`) +
'`),ln&&(V=!0,_e+=`';
`+ln+`;
__p += '`),ct&&(_e+=`' +
((__t = (`+ct+`)) == null ? '' : __t) +
'`),oe=Nn+Be.length,Be}),_e+=`';
`;var Pe=vt.call(l,"variable")&&l.variable;if(!Pe)_e=`with (obj) {
`+_e+`
}
`;else if(Rv.test(Pe))throw new je(c);_e=(V?_e.replace(hv,""):_e).replace(pv,"$1").replace(vv,"$1;"),_e="function("+(Pe||"obj")+`) {
`+(Pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(H?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var et=cg(function(){return gt(N,Ge+"return "+_e).apply(n,G)});if(et.source=_e,xc(et))throw et;return et}function tO(s){return ht(s).toLowerCase()}function nO(s){return ht(s).toUpperCase()}function rO(s,l,f){if(s=ht(s),s&&(f||l===n))return v_(s);if(!s||!(l=Ln(l)))return s;var E=Qn(s),I=Qn(l),N=m_(E,I),G=E_(E,I)+1;return zr(E,N,G).join("")}function iO(s,l,f){if(s=ht(s),s&&(f||l===n))return s.slice(0,b_(s)+1);if(!s||!(l=Ln(l)))return s;var E=Qn(s),I=E_(E,Qn(l))+1;return zr(E,0,I).join("")}function oO(s,l,f){if(s=ht(s),s&&(f||l===n))return s.replace(xl,"");if(!s||!(l=Ln(l)))return s;var E=Qn(s),I=m_(E,Qn(l));return zr(E,I).join("")}function sO(s,l){var f=ce,E=te;if(Tt(l)){var I="separator"in l?l.separator:I;f="length"in l?Je(l.length):f,E="omission"in l?Ln(l.omission):E}s=ht(s);var N=s.length;if(ki(s)){var G=Qn(s);N=G.length}if(f>=N)return s;var H=f-Gi(E);if(H<1)return E;var V=G?zr(G,0,H).join(""):s.slice(0,H);if(I===n)return V+E;if(G&&(H+=V.length-H),Rc(I)){if(s.slice(H).search(I)){var oe,le=V;for(I.global||(I=Vl(I.source,ht($d.exec(I))+"g")),I.lastIndex=0;oe=I.exec(le);)var _e=oe.index;V=V.slice(0,_e===n?H:_e)}}else if(s.indexOf(Ln(I),H)!=H){var we=V.lastIndexOf(I);we>-1&&(V=V.slice(0,we))}return V+E}function aO(s){return s=ht(s),s&&mv.test(s)?s.replace(Md,Mm):s}var lO=Hi(function(s,l,f){return s+(f?" ":"")+l.toUpperCase()}),kc=uf("toUpperCase");function lg(s,l,f){return s=ht(s),l=f?n:l,l===n?Rm(s)?$m(s):Om(s):s.match(l)||[]}var cg=tt(function(s,l){try{return In(s,n,l)}catch(f){return xc(f)?f:new je(f)}}),cO=Cr(function(s,l){return $n(l,function(f){f=sr(f),mr(s,f,Nc(s[f],s))}),s});function uO(s){var l=s==null?0:s.length,f=$e();return s=l?xt(s,function(E){if(typeof E[1]!="function")throw new Pn(a);return[f(E[0]),E[1]]}):[],tt(function(E){for(var I=-1;++I<l;){var N=s[I];if(In(N[0],this,E))return In(N[1],this,E)}})}function dO(s){return M1(Hn(s,g))}function Gc(s){return function(){return s}}function _O(s,l){return s==null||s!==s?l:s}var fO=_f(),gO=_f(!0);function vn(s){return s}function Mc(s){return B_(typeof s=="function"?s:Hn(s,g))}function hO(s){return W_(Hn(s,g))}function pO(s,l){return z_(s,Hn(l,g))}var vO=tt(function(s,l){return function(f){return Go(f,s,l)}}),mO=tt(function(s,l){return function(f){return Go(s,f,l)}});function Uc(s,l,f){var E=zt(l),I=ta(l,E);f==null&&!(Tt(l)&&(I.length||!E.length))&&(f=l,l=s,s=this,I=ta(l,zt(l)));var N=!(Tt(f)&&"chain"in f)||!!f.chain,G=Or(s);return $n(I,function(H){var V=l[H];s[H]=V,G&&(s.prototype[H]=function(){var oe=this.__chain__;if(N||oe){var le=s(this.__wrapped__),_e=le.__actions__=gn(this.__actions__);return _e.push({func:V,args:arguments,thisArg:s}),le.__chain__=oe,le}return V.apply(s,Fr([this.value()],arguments))})}),s}function EO(){return Yt._===this&&(Yt._=Ym),this}function Fc(){}function CO(s){return s=Je(s),tt(function(l){return Y_(l,s)})}var bO=hc(xt),OO=hc(__),IO=hc(Pl);function ug(s){return Oc(s)?Bl(sr(s)):J1(s)}function wO(s){return function(l){return s==null?n:fi(s,l)}}var LO=gf(),yO=gf(!0);function $c(){return[]}function Pc(){return!1}function AO(){return{}}function NO(){return""}function SO(){return!0}function xO(s,l){if(s=Je(s),s<1||s>Ne)return[];var f=Ye,E=Jt(s,Ye);l=$e(l),s-=Ye;for(var I=zl(E,l);++f<s;)l(f);return I}function RO(s){return Xe(s)?xt(s,sr):yn(s)?[s]:gn(xf(ht(s)))}function TO(s){var l=++Wm;return ht(s)+l}var DO=aa(function(s,l){return s+l},0),kO=pc("ceil"),GO=aa(function(s,l){return s/l},1),MO=pc("floor");function UO(s){return s&&s.length?ea(s,vn,tc):n}function FO(s,l){return s&&s.length?ea(s,$e(l,2),tc):n}function $O(s){return h_(s,vn)}function PO(s,l){return h_(s,$e(l,2))}function BO(s){return s&&s.length?ea(s,vn,oc):n}function HO(s,l){return s&&s.length?ea(s,$e(l,2),oc):n}var WO=aa(function(s,l){return s*l},1),zO=pc("round"),YO=aa(function(s,l){return s-l},0);function jO(s){return s&&s.length?Wl(s,vn):0}function VO(s,l){return s&&s.length?Wl(s,$e(l,2)):0}return L.after=h0,L.ary=Bf,L.assign=nb,L.assignIn=tg,L.assignInWith=Ca,L.assignWith=rb,L.at=ib,L.before=Hf,L.bind=Nc,L.bindAll=cO,L.bindKey=Wf,L.castArray=A0,L.chain=Ff,L.chunk=ME,L.compact=UE,L.concat=FE,L.cond=uO,L.conforms=dO,L.constant=Gc,L.countBy=jC,L.create=ob,L.curry=zf,L.curryRight=Yf,L.debounce=jf,L.defaults=sb,L.defaultsDeep=ab,L.defer=p0,L.delay=v0,L.difference=$E,L.differenceBy=PE,L.differenceWith=BE,L.drop=HE,L.dropRight=WE,L.dropRightWhile=zE,L.dropWhile=YE,L.fill=jE,L.filter=KC,L.flatMap=ZC,L.flatMapDeep=QC,L.flatMapDepth=JC,L.flatten=kf,L.flattenDeep=VE,L.flattenDepth=KE,L.flip=m0,L.flow=fO,L.flowRight=gO,L.fromPairs=XE,L.functions=gb,L.functionsIn=hb,L.groupBy=e0,L.initial=ZE,L.intersection=QE,L.intersectionBy=JE,L.intersectionWith=eC,L.invert=vb,L.invertBy=mb,L.invokeMap=n0,L.iteratee=Mc,L.keyBy=r0,L.keys=zt,L.keysIn=pn,L.map=ga,L.mapKeys=Cb,L.mapValues=bb,L.matches=hO,L.matchesProperty=pO,L.memoize=pa,L.merge=Ob,L.mergeWith=ng,L.method=vO,L.methodOf=mO,L.mixin=Uc,L.negate=va,L.nthArg=CO,L.omit=Ib,L.omitBy=wb,L.once=E0,L.orderBy=i0,L.over=bO,L.overArgs=C0,L.overEvery=OO,L.overSome=IO,L.partial=Sc,L.partialRight=Vf,L.partition=o0,L.pick=Lb,L.pickBy=rg,L.property=ug,L.propertyOf=wO,L.pull=iC,L.pullAll=Mf,L.pullAllBy=oC,L.pullAllWith=sC,L.pullAt=aC,L.range=LO,L.rangeRight=yO,L.rearg=b0,L.reject=l0,L.remove=lC,L.rest=O0,L.reverse=yc,L.sampleSize=u0,L.set=Ab,L.setWith=Nb,L.shuffle=d0,L.slice=cC,L.sortBy=g0,L.sortedUniq=pC,L.sortedUniqBy=vC,L.split=Zb,L.spread=I0,L.tail=mC,L.take=EC,L.takeRight=CC,L.takeRightWhile=bC,L.takeWhile=OC,L.tap=UC,L.throttle=w0,L.thru=fa,L.toArray=Qf,L.toPairs=ig,L.toPairsIn=og,L.toPath=RO,L.toPlainObject=eg,L.transform=Sb,L.unary=L0,L.union=IC,L.unionBy=wC,L.unionWith=LC,L.uniq=yC,L.uniqBy=AC,L.uniqWith=NC,L.unset=xb,L.unzip=Ac,L.unzipWith=Uf,L.update=Rb,L.updateWith=Tb,L.values=Yi,L.valuesIn=Db,L.without=SC,L.words=lg,L.wrap=y0,L.xor=xC,L.xorBy=RC,L.xorWith=TC,L.zip=DC,L.zipObject=kC,L.zipObjectDeep=GC,L.zipWith=MC,L.entries=ig,L.entriesIn=og,L.extend=tg,L.extendWith=Ca,Uc(L,L),L.add=DO,L.attempt=cg,L.camelCase=Ub,L.capitalize=sg,L.ceil=kO,L.clamp=kb,L.clone=N0,L.cloneDeep=x0,L.cloneDeepWith=R0,L.cloneWith=S0,L.conformsTo=T0,L.deburr=ag,L.defaultTo=_O,L.divide=GO,L.endsWith=Fb,L.eq=er,L.escape=$b,L.escapeRegExp=Pb,L.every=VC,L.find=XC,L.findIndex=Tf,L.findKey=lb,L.findLast=qC,L.findLastIndex=Df,L.findLastKey=cb,L.floor=MO,L.forEach=$f,L.forEachRight=Pf,L.forIn=ub,L.forInRight=db,L.forOwn=_b,L.forOwnRight=fb,L.get=Tc,L.gt=D0,L.gte=k0,L.has=pb,L.hasIn=Dc,L.head=Gf,L.identity=vn,L.includes=t0,L.indexOf=qE,L.inRange=Gb,L.invoke=Eb,L.isArguments=pi,L.isArray=Xe,L.isArrayBuffer=G0,L.isArrayLike=hn,L.isArrayLikeObject=Gt,L.isBoolean=M0,L.isBuffer=Yr,L.isDate=U0,L.isElement=F0,L.isEmpty=$0,L.isEqual=P0,L.isEqualWith=B0,L.isError=xc,L.isFinite=H0,L.isFunction=Or,L.isInteger=Kf,L.isLength=ma,L.isMap=Xf,L.isMatch=W0,L.isMatchWith=z0,L.isNaN=Y0,L.isNative=j0,L.isNil=K0,L.isNull=V0,L.isNumber=qf,L.isObject=Tt,L.isObjectLike=kt,L.isPlainObject=Bo,L.isRegExp=Rc,L.isSafeInteger=X0,L.isSet=Zf,L.isString=Ea,L.isSymbol=yn,L.isTypedArray=zi,L.isUndefined=q0,L.isWeakMap=Z0,L.isWeakSet=Q0,L.join=tC,L.kebabCase=Bb,L.last=zn,L.lastIndexOf=nC,L.lowerCase=Hb,L.lowerFirst=Wb,L.lt=J0,L.lte=eb,L.max=UO,L.maxBy=FO,L.mean=$O,L.meanBy=PO,L.min=BO,L.minBy=HO,L.stubArray=$c,L.stubFalse=Pc,L.stubObject=AO,L.stubString=NO,L.stubTrue=SO,L.multiply=WO,L.nth=rC,L.noConflict=EO,L.noop=Fc,L.now=ha,L.pad=zb,L.padEnd=Yb,L.padStart=jb,L.parseInt=Vb,L.random=Mb,L.reduce=s0,L.reduceRight=a0,L.repeat=Kb,L.replace=Xb,L.result=yb,L.round=zO,L.runInContext=j,L.sample=c0,L.size=_0,L.snakeCase=qb,L.some=f0,L.sortedIndex=uC,L.sortedIndexBy=dC,L.sortedIndexOf=_C,L.sortedLastIndex=fC,L.sortedLastIndexBy=gC,L.sortedLastIndexOf=hC,L.startCase=Qb,L.startsWith=Jb,L.subtract=YO,L.sum=jO,L.sumBy=VO,L.template=eO,L.times=xO,L.toFinite=Ir,L.toInteger=Je,L.toLength=Jf,L.toLower=tO,L.toNumber=Yn,L.toSafeInteger=tb,L.toString=ht,L.toUpper=nO,L.trim=rO,L.trimEnd=iO,L.trimStart=oO,L.truncate=sO,L.unescape=aO,L.uniqueId=TO,L.upperCase=lO,L.upperFirst=kc,L.each=$f,L.eachRight=Pf,L.first=Gf,Uc(L,function(){var s={};return ir(L,function(l,f){vt.call(L.prototype,f)||(s[f]=l)}),s}(),{chain:!1}),L.VERSION=r,$n(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){L[s].placeholder=L}),$n(["drop","take"],function(s,l){ot.prototype[s]=function(f){f=f===n?1:Pt(Je(f),0);var E=this.__filtered__&&!l?new ot(this):this.clone();return E.__filtered__?E.__takeCount__=Jt(f,E.__takeCount__):E.__views__.push({size:Jt(f,Ye),type:s+(E.__dir__<0?"Right":"")}),E},ot.prototype[s+"Right"]=function(f){return this.reverse()[s](f).reverse()}}),$n(["filter","map","takeWhile"],function(s,l){var f=l+1,E=f==be||f==Ue;ot.prototype[s]=function(I){var N=this.clone();return N.__iteratees__.push({iteratee:$e(I,3),type:f}),N.__filtered__=N.__filtered__||E,N}}),$n(["head","last"],function(s,l){var f="take"+(l?"Right":"");ot.prototype[s]=function(){return this[f](1).value()[0]}}),$n(["initial","tail"],function(s,l){var f="drop"+(l?"":"Right");ot.prototype[s]=function(){return this.__filtered__?new ot(this):this[f](1)}}),ot.prototype.compact=function(){return this.filter(vn)},ot.prototype.find=function(s){return this.filter(s).head()},ot.prototype.findLast=function(s){return this.reverse().find(s)},ot.prototype.invokeMap=tt(function(s,l){return typeof s=="function"?new ot(this):this.map(function(f){return Go(f,s,l)})}),ot.prototype.reject=function(s){return this.filter(va($e(s)))},ot.prototype.slice=function(s,l){s=Je(s);var f=this;return f.__filtered__&&(s>0||l<0)?new ot(f):(s<0?f=f.takeRight(-s):s&&(f=f.drop(s)),l!==n&&(l=Je(l),f=l<0?f.dropRight(-l):f.take(l-s)),f)},ot.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},ot.prototype.toArray=function(){return this.take(Ye)},ir(ot.prototype,function(s,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),I=L[E?"take"+(l=="last"?"Right":""):l],N=E||/^find/.test(l);I&&(L.prototype[l]=function(){var G=this.__wrapped__,H=E?[1]:arguments,V=G instanceof ot,oe=H[0],le=V||Xe(G),_e=function(rt){var ct=I.apply(L,Fr([rt],H));return E&&we?ct[0]:ct};le&&f&&typeof oe=="function"&&oe.length!=1&&(V=le=!1);var we=this.__chain__,Ge=!!this.__actions__.length,Pe=N&&!we,et=V&&!Ge;if(!N&&le){G=et?G:new ot(this);var Be=s.apply(G,H);return Be.__actions__.push({func:fa,args:[_e],thisArg:n}),new Bn(Be,we)}return Pe&&et?s.apply(this,H):(Be=this.thru(_e),Pe?E?Be.value()[0]:Be.value():Be)})}),$n(["pop","push","shift","sort","splice","unshift"],function(s){var l=$s[s],f=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",E=/^(?:pop|shift)$/.test(s);L.prototype[s]=function(){var I=arguments;if(E&&!this.__chain__){var N=this.value();return l.apply(Xe(N)?N:[],I)}return this[f](function(G){return l.apply(Xe(G)?G:[],I)})}}),ir(ot.prototype,function(s,l){var f=L[l];if(f){var E=f.name+"";vt.call($i,E)||($i[E]=[]),$i[E].push({name:l,func:f})}}),$i[sa(n,w).name]=[{name:"wrapper",func:n}],ot.prototype.clone=a1,ot.prototype.reverse=l1,ot.prototype.value=c1,L.prototype.at=FC,L.prototype.chain=$C,L.prototype.commit=PC,L.prototype.next=BC,L.prototype.plant=WC,L.prototype.reverse=zC,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=YC,L.prototype.first=L.prototype.head,No&&(L.prototype[No]=HC),L},Mi=Pm();li?((li.exports=Mi)._=Mi,Ml._=Mi):Yt._=Mi}).call(ux)}(Vo,Vo.exports)),Vo.exports}var St=dx();function yr(t){return Array.isArray?Array.isArray(t):Xh(t)==="[object Array]"}function _x(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function fx(t){return t==null?"":_x(t)}function cr(t){return typeof t=="string"}function Vh(t){return typeof t=="number"}function gx(t){return t===!0||t===!1||hx(t)&&Xh(t)=="[object Boolean]"}function Kh(t){return typeof t=="object"}function hx(t){return Kh(t)&&t!==null}function Rn(t){return t!=null}function jc(t){return!t.trim().length}function Xh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const px="Incorrect 'index' type",vx=t=>`Invalid value for key ${t}`,mx=t=>`Pattern length exceeds max of ${t}.`,Ex=t=>`Missing ${t} property in key`,Cx=t=>`Property 'weight' in key '${t}' must be a positive integer`,mg=Object.prototype.hasOwnProperty;class bx{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=qh(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function qh(t){let e=null,n=null,r=null,i=1,o=null;if(cr(t)||yr(t))r=t,e=Eg(t),n=au(t);else{if(!mg.call(t,"name"))throw new Error(Ex("name"));const a=t.name;if(r=a,mg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Cx(a));e=Eg(a),n=au(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Eg(t){return yr(t)?t:t.split(".")}function au(t){return yr(t)?t.join("."):t}function Ox(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Rn(o))if(!a[c])n.push(o);else{let u=a[c];const _=o[u];if(!Rn(_))return;if(c===a.length-1&&(cr(_)||Vh(_)||gx(_)))n.push(fx(_));else if(yr(_)){r=!0;for(let p=0,g=_.length;p<g;p+=1)i(_[p],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,cr(e)?e.split("."):e,0),r?n:n[0]}const Ix={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},wx={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Lx={location:0,threshold:.6,distance:100},yx={useExtendedSearch:!1,getFn:Ox,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ze={...wx,...Ix,...Lx,...yx};const Ax=/[^ ]+/g;function Nx(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Ax).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class od{constructor({getFn:e=ze.getFn,fieldNormWeight:n=ze.fieldNormWeight}={}){this.norm=Nx(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,cr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();cr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Rn(e)||jc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Rn(a)){if(yr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:p}=u.pop();if(Rn(p))if(cr(p)&&!jc(p)){let g={v:p,i:_,n:this.norm.get(p)};c.push(g)}else yr(p)&&p.forEach((g,v)=>{u.push({nestedArrIndex:v,value:g})})}r.$[o]=c}else if(cr(a)&&!jc(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Zh(t,e,{getFn:n=ze.getFn,fieldNormWeight:r=ze.fieldNormWeight}={}){const i=new od({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(qh)),i.setSources(e),i.create(),i}function Sx(t,{getFn:e=ze.getFn,fieldNormWeight:n=ze.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new od({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Ia(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=ze.distance,ignoreLocation:o=ze.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function xx(t=[],e=ze.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const mi=32;function Rx(t,e,n,{location:r=ze.location,distance:i=ze.distance,threshold:o=ze.threshold,findAllMatches:a=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,includeMatches:u=ze.includeMatches,ignoreLocation:_=ze.ignoreLocation}={}){if(e.length>mi)throw new Error(mx(mi));const p=e.length,g=t.length,v=Math.max(0,Math.min(r,g));let m=o,C=v;const b=c>1||u,O=b?Array(g):[];let w;for(;(w=t.indexOf(e,C))>-1;){let B=Ia(e,{currentLocation:w,expectedLocation:v,distance:i,ignoreLocation:_});if(m=Math.min(B,m),C=w+p,b){let X=0;for(;X<p;)O[w+X]=1,X+=1}}C=-1;let x=[],k=1,U=p+g;const z=1<<p-1;for(let B=0;B<p;B+=1){let X=0,ee=U;for(;X<ee;)Ia(e,{errors:B,currentLocation:v+ee,expectedLocation:v,distance:i,ignoreLocation:_})<=m?X=ee:U=ee,ee=Math.floor((U-X)/2+X);U=ee;let ce=Math.max(1,v-ee+1),te=a?g:Math.min(v+ee,g)+p,re=Array(te+2);re[te+1]=(1<<B)-1;for(let be=te;be>=ce;be-=1){let ge=be-1,Ue=n[t.charAt(ge)];if(b&&(O[ge]=+!!Ue),re[be]=(re[be+1]<<1|1)&Ue,B&&(re[be]|=(x[be+1]|x[be])<<1|1|x[be+1]),re[be]&z&&(k=Ia(e,{errors:B,currentLocation:ge,expectedLocation:v,distance:i,ignoreLocation:_}),k<=m)){if(m=k,C=ge,C<=v)break;ce=Math.max(1,2*v-C)}}if(Ia(e,{errors:B+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:_})>m)break;x=re}const Y={isMatch:C>=0,score:Math.max(.001,k)};if(b){const B=xx(O,c);B.length?u&&(Y.indices=B):Y.isMatch=!1}return Y}function Tx(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Qh{constructor(e,{location:n=ze.location,threshold:r=ze.threshold,distance:i=ze.distance,includeMatches:o=ze.includeMatches,findAllMatches:a=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,isCaseSensitive:u=ze.isCaseSensitive,ignoreLocation:_=ze.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(v,m)=>{this.chunks.push({pattern:v,alphabet:Tx(v),startIndex:m})},g=this.pattern.length;if(g>mi){let v=0;const m=g%mi,C=g-m;for(;v<C;)p(this.pattern.substr(v,mi),v),v+=mi;if(m){const b=g-mi;p(this.pattern.substr(b),b)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let p=[],g=0,v=!1;this.chunks.forEach(({pattern:C,alphabet:b,startIndex:O})=>{const{isMatch:w,score:x,indices:k}=Rx(e,C,b,{location:i+O,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(v=!0),g+=x,w&&k&&(p=[...p,...k])});let m={isMatch:v,score:v?g/this.chunks.length:1};return v&&r&&(m.indices=p),m}}class ri{constructor(e){this.pattern=e}static isMultiMatch(e){return Cg(e,this.multiRegex)}static isSingleMatch(e){return Cg(e,this.singleRegex)}search(){}}function Cg(t,e){const n=t.match(e);return n?n[1]:null}class Dx extends ri{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class kx extends ri{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Gx extends ri{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Mx extends ri{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ux extends ri{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Fx extends ri{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Jh extends ri{constructor(e,{location:n=ze.location,threshold:r=ze.threshold,distance:i=ze.distance,includeMatches:o=ze.includeMatches,findAllMatches:a=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,isCaseSensitive:u=ze.isCaseSensitive,ignoreLocation:_=ze.ignoreLocation}={}){super(e),this._bitapSearch=new Qh(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ep extends ri{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const lu=[Dx,ep,Gx,Mx,Fx,Ux,kx,Jh],bg=lu.length,$x=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Px="|";function Bx(t,e={}){return t.split(Px).map(n=>{let r=n.trim().split($x).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,_=-1;for(;!u&&++_<bg;){const p=lu[_];let g=p.isMultiMatch(c);g&&(i.push(new p(g,e)),u=!0)}if(!u)for(_=-1;++_<bg;){const p=lu[_];let g=p.isSingleMatch(c);if(g){i.push(new p(g,e));break}}}return i})}const Hx=new Set([Jh.type,ep.type]);class Wx{constructor(e,{isCaseSensitive:n=ze.isCaseSensitive,includeMatches:r=ze.includeMatches,minMatchCharLength:i=ze.minMatchCharLength,ignoreLocation:o=ze.ignoreLocation,findAllMatches:a=ze.findAllMatches,location:c=ze.location,threshold:u=ze.threshold,distance:_=ze.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=Bx(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const p=n[u];a.length=0,o=0;for(let g=0,v=p.length;g<v;g+=1){const m=p[g],{isMatch:C,indices:b,score:O}=m.search(e);if(C){if(o+=1,c+=O,r){const w=m.constructor.type;Hx.has(w)?a=[...a,...b]:a.push(b)}}else{c=0,o=0,a.length=0;break}}if(o){let g={isMatch:!0,score:c/o};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const cu=[];function zx(...t){cu.push(...t)}function uu(t,e){for(let n=0,r=cu.length;n<r;n+=1){let i=cu[n];if(i.condition(t,e))return new i(t,e)}return new Qh(t,e)}const xa={AND:"$and",OR:"$or"},du={PATH:"$path",PATTERN:"$val"},_u=t=>!!(t[xa.AND]||t[xa.OR]),Yx=t=>!!t[du.PATH],jx=t=>!yr(t)&&Kh(t)&&!_u(t),Og=t=>({[xa.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function tp(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=Yx(i);if(!a&&o.length>1&&!_u(i))return r(Og(i));if(jx(i)){const u=a?i[du.PATH]:o[0],_=a?i[du.PATTERN]:i[u];if(!cr(_))throw new Error(vx(u));const p={keyId:au(u),pattern:_};return n&&(p.searcher=uu(_,e)),p}let c={children:[],operator:o[0]};return o.forEach(u=>{const _=i[u];yr(_)&&_.forEach(p=>{c.children.push(r(p))})}),c};return _u(t)||(t=Og(t)),r(t)}function Vx(t,{ignoreFieldNorm:e=ze.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function Kx(t,e){const n=t.matches;e.matches=[],Rn(n)&&n.forEach(r=>{if(!Rn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function Xx(t,e){e.score=t.score}function qx(t,e,{includeMatches:n=ze.includeMatches,includeScore:r=ze.includeScore}={}){const i=[];return n&&i.push(Kx),r&&i.push(Xx),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class ho{constructor(e,n={},r){this.options={...ze,...n},this.options.useExtendedSearch,this._keyStore=new bx(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof od))throw new Error(px);this._myIndex=n||Zh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Rn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=cr(e)?cr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Vx(u,{ignoreFieldNorm:c}),o&&u.sort(a),Vh(n)&&n>-1&&(u=u.slice(0,n)),qx(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=uu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Rn(o))return;const{isMatch:u,score:_,indices:p}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:_,value:o,norm:c,indices:p}]})}),i}_searchLogical(e){const n=tp(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:v});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const p=[];for(let g=0,v=c.children.length;g<v;g+=1){const m=c.children[g],C=r(m,u,_);if(C.length)p.push(...C);else if(c.operator===xa.AND)return[]}return p},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Rn(c)){let _=r(n,c,u);_.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),_.forEach(({matches:p})=>{o[u].matches.push(...p)}))}}),a}_searchObjectList(e){const n=uu(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Rn(a))return;let u=[];r.forEach((_,p)=>{u.push(...this._findMatches({key:_,value:a[p],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Rn(n))return[];let i=[];if(yr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Rn(o))return;const{isMatch:u,score:_,indices:p}=r.searchIn(o);u&&i.push({score:_,key:e,value:o,idx:a,norm:c,indices:p})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:_})}return i}}ho.version="7.0.0";ho.createIndex=Zh;ho.parseIndex=Sx;ho.config=ze;ho.parseQuery=tp;zx(Wx);function qr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function Zx(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function Qx(t){return new ho(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function Jx(t,e,n){const r=Zx(e,n);return t.length===0?r:Qx(r).search(t).map(i=>i.item)}function eR(t,e){return qr(t,e).shape}function Zt(t,e){const n=eR(t,e);return n?su(n):void 0}function ms(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return id(e)}function tR(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Es(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return id(i)})}function nR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return id(o)})})}function xr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function np(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Wh(e)}function rR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Wh(r)})}function iR(t,e){const n=t.shape;return n===void 0?void 0:{...Zt(e,Rt),...n}}function rp(t,e,n){return{toolId:t,cells:e,value:n}}function oR(t,e){const n=Es(e,"cells"),r=xr(e);return rp(t,n,r)}function ip(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>Ve(o,e)&&a>=r)}function sR(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:vs(r[i-1],e)))return t;const a=ip(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function op(t,e){return{toolId:t,cells:e,lines:[]}}function aR(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Sa(n),{...t,cells:n};const r=n.some(o=>Ve(o,e)),i=n.some(o=>vs(o,e));return n.length>0&&!r&&i?(n.push(e),Sa(n),{...t,cells:n}):t}function lR(t,e,n){const r=t.cells.some(_=>Ve(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return fu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return fu(t,e);const c=ip(o,e,!1);return(o.length===0?!0:vs(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function fu(t,e){return t.cells.some(r=>Ve(r,e))?{...t,lines:[...t.lines,[e]]}:t}function cR(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function uR(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function dR(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function _R(t,e){const n=Es(e,"cells"),r=nR(e),i=op(t,n);return i.lines=r,i}function sp(t,e,n=""){return{toolId:t,cells:e,value:n}}function fR(t,e,n=!1){const r=jh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function gR(t,e){return{...t,value:e}}function hR(t,e){const n=Es(e,"cells"),r=xr(e);return sp(t,n,r)}function ap(t,e,n){return{toolId:t,cells:e,value:n}}function pR(t,e){const n=Es(e,"cells"),r=xr(e);return ap(t,n,r)}function lp(t,e,n){return{toolId:t,cells:e,value:n}}function vR(t,e){const n=Es(e,"cells"),r=xr(e);return lp(t,n,r)}function cp(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function mR(t,e){const n=ms(e),r=np(e),i=xr(e);return cp(t,n,r,i)}function up(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function ER(t,e){const n=ms(e),r=xr(e);return up(t,n,r)}function dp(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function CR(t,e){const n=ms(e),r=np(e);return dp(t,n,r)}function _p(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function bR(t,e){const n=ms(e),r=rR(e),i=_p(t,n,He.N);return i.directions=r,i}function fp(t,e,n=""){return{toolId:t,cell:e,value:n}}function OR(t,e){const n=ms(e),r=xr(e);return fp(t,n,r)}function IR(t,e=""){return{toolId:t,value:e}}function wR(t,e){const n=xr(e);return IR(t,n)}function LR(t,e,n=""){return{toolId:t,coords:e,value:n}}function yR(t,e){const n=tR(e,"coords"),r=xr(e);return LR(t,n,r)}function Cs(t,e){return{...t,value:e}}class po extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(GR(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new po;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=Nh(r);if(o===void 0||!Object.keys(Rt).includes(o))continue;const a=i;for(const c of a){let u=null;if(Sh(o,za)?u=ER(o,c):Pu(o)?u=CR(o,c):Bu(o)?u=bR(o,c):Hu(o)?u=vR(o,c):wh(o)?u=pR(o,c):Wu(o)?u=oR(o,c):yh(o)?u=yR(o,c):zu(o)?u=_R(o,c):Yu(o)?u=hR(o,c):os(o)?u=mR(o,c):kI(o)?u=wR(o,c):Lh(o)&&(u=OR(o,c)),u!==null){n.addToDict(o);const _=St.uniqueId(),p=iR(c,o);u.shape=p,n.addConstraint(o,_,u)}}}return n}}function Ra(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ve(o.cell,n))return[a,o]}return null}function AR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>Ve(c,u))))return i}return null}function NR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(Ve(n,a))return i}return null}function Ig(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ve(c,n)))return[i[0],o]}return null}function SR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Ve(c,n)))return i;return null}function wg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ve(c,n)))return[i[0],o]}return null}function xR(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((_,p)=>Ve(_,n)&&p>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function RR(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(Ve(n,a.cell)&&r===a.direction)return c}return null}function TR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ve(n,o.cell))return a}return null}function DR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ve(c,n))||o.cells2.some(c=>Ve(c,n)))return[i[0],o]}return null}function kR(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function GR(t){const e={};if("cells"in t){const n=t.cells.map(r=>ba(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ba(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>ba(i)));e.lines=n}if("cell"in t){const n=ba(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=Zt(t.toolId,Rt),r=$I(t.shape,n);r&&(e.shape=r)}return e}function Lg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function gp(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function gu(t){const e=new Option().style;return e.color=t,e.color!==""}function Vc(t){return gp(t)||gu(t)?t:gu(`#${t}`)?`#${t}`:void 0}function Ta(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function hp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Da(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function MR(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const yg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function UR(t){return t in yg?yg[t]:null}function pp(t,e,n){if(n===null)return null;const r=UR(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Kc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class FR{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);ve(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Kc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Kc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Kc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==pp(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class vo{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new FR(i,a);if(r){const u=pp(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return hp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=Za(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new vo(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function $R(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=St.range(1,o+1);t.valid_digits&&!MR(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function PR(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=vo.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=St.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,p=t.local_constraints,g=po.fromJson(p),v=t.bool_constraints,m=Oi.fromJson(v);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function Y9(){const t=new vo(9,9),e=new po,n=new Oi;return{grid:t,solution:void 0,valid_digits:St.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var Ko=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Ko||{});const BR=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),HR=()=>({type:"CLEAR"}),WR=t=>({type:"DRAG",payload:t}),hu=t=>({type:"SET",payload:t}),zR=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),sd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),lr=(t,e,n)=>{const r=[...t];return Sa(r),{cells:r,lastCell:e,mode:n}};function YR(t,e,n){if(e===null)return sd();if(n==="RESETTING")return lr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ve(e,i));if(n==="SELECTING")return r!==-1?t:lr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),lr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return lr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),lr(i,null,"DESELECTING")}return t}function jR(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ve(e,r));if(t.mode==="SELECTING")return n!==-1?t:lr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),lr(r,null,t.mode)}return t}function VR(t,e){return{...t,cells:e}}function KR(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ve(e,i))!==-1?lr([...t.cells],e,"SELECTING"):lr([...t.cells,e],e,"SELECTING"):lr([e],e,t.mode)}function vp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return sd();case"SET":return VR(t,e.payload);case"CLICK":return YR(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return jR(t,e.payload);case"ARROW_KEY":return KR(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Xi(t,e){return Ve(t.p1,e.p1)&&Ve(t.p2,e.p2)||Ve(t.p1,e.p2)&&Ve(t.p2,e.p1)}function XR(t,e){return Ve(t.p1,e.p2)&&Ve(t.p2,e.p1)}function mp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ve(t,e)}class Qa{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ve(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ve(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ve(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ve(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ve(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ve(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ve(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ve(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ve(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ve(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Xi(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>Xi(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&XR(r,e)&&this.draftLine.splice(n,1)}onDrag(e){mp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>Xi(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>Xi(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Qa;return Object.assign(e,this),e}}const Ag=t=>({type:"ADD_EDGE_MARKER",payload:t}),Ng=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),wa=t=>({type:"ADD_CELL_MARKER",payload:t}),qR=t=>({type:"SET_CELL_MARKERS",payload:t}),Sg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),ZR=t=>({type:"DRAG",payload:t}),ss=t=>({type:"ADD_LINE_MARKERS",payload:t}),xg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),ad=()=>({type:"RESET"});function QR(t,e){switch(e.type){case"RESET":return new Qa;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function Ep(){return{_undoStack:[],_redoStack:[]}}const mo=Ht(Ep());function JR(){mo.update(()=>Ep())}function un(t,e=!0){mo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function eT(t,e=!0){mo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Cp(){mo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function bp(){mo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const ka=Ht(new Qa);function ur(t){ka.update(e=>QR(e,t))}const Ga=Ht(1);function vi(t,e){return{execute:()=>{ur(t)},unExecute:()=>{ur(e)}}}const Ii=Ht(sd());function Vi(t){t&&Ii.update(e=>vp(e,t))}function Rg(t){t&&Ii.update(e=>vp(e,t))}function tT(t,e){return{execute:()=>{Rg(t)},unExecute:()=>{Rg(e)}}}const Qi=Ht(),Ja=Ht(ro.SETTING),pu=Ht(!1),qt=Ht(d.DIGIT),Op=Ht(d.DIGIT),ld=Ht(St.range(1,10)),_n=Ht(new vo(9,9)),dn=Ht(ut(_n).getAllCells()),Rr=Ht({}),Tr=Ht(new Oi),pt=Ht(new po),fr=Ht(null),Ip=Ht(void 0),el=Ht(void 0);function nT(t){Rr.update(()=>t)}function Eo(t){fr.update(()=>t)}function cd(t){Ip.update(()=>t)}function Lr(t){ut(qt)!==t&&(qt.update(()=>t),Eo(null))}function rT(){const t=ut(Op);t&&Lr(t)}function vu(t){Op.update(()=>t)}function iT(t){ut(qt)===t&&Lr(d.DIGIT)}function oT(t){pt.update(e=>(e.removeFromDict(t),e)),cd(void 0)}function Bt(t,e,n){pt.update(r=>(r.updateConstraint(t,e,n),r)),Eo({id:e,constraint:n})}function Xc(t){const e=ut(fr);if(t=t?{...t}:void 0,cd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Bt(r,e.id,n)}function sT(t,e){const r=ut(pt).get(e);if(!r)return;const i=r[t];i&&Eo({id:t,constraint:i})}function aT(t,e,n){const r=new vo(t,e);_n.update(()=>r),ld.update(()=>n),pt.update(()=>new po),Tr.update(()=>new Oi),Rr.update(()=>({})),ud(void 0),dn.update(()=>r.getAllCells())}function lT(t){_n.update(()=>t.grid),Rr.update(()=>t.puzzleMeta),ud(t.solution),ld.update(()=>t.valid_digits),pt.update(()=>t.localConstraints),Tr.update(()=>t.globalConstraints),dn.update(()=>t.grid.getAllCells())}function wp(){const t=ut(_n);t.resetValues(),_n.update(()=>t),dn.update(()=>t.getAllCells()),ur(ad())}function Ma(){JR(),ur(ad()),Lr(d.DIGIT);const t=HR();Vi(t),cd(void 0),Eo(null)}const Lp=no([Jr,qt,Ja],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===ro.SETTING}),bs=no([_n,Rr,Tr,pt,el,ld],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function ud(t){el.update(()=>t)}var Ki=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Ki||{});const dd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),_d=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),cT=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),uT=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Tg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function yp(t){pt.update(e=>(e.addToDict(t),e))}function ii(t,e){const n=ut(Ip);n&&(e.shape={...n}),pt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Eo({id:t,constraint:e})}function wi(t,e){e&&pt.update(n=>(n.removeConstraint(t,e),n))}function dT(t,e){pt.update(n=>(n.setConstraints(t,e),n))}function Dg(t){t.type===Ki.ADD_LOCAL_CONSTRAINT?ii(t.payload.id,t.payload.constraint):t.type===Ki.REMOVE_LOCAL_CONSTRAINT?wi(t.payload.tool,t.payload.id):t.type===Ki.REMOVE_LOCAL_CONSTRAINT_GROUP?oT(t.payload.tool):t.type===Ki.RESTORE_LOCAL_CONSTRAINT_GROUP?dT(t.payload.tool,t.payload.constraints):t.type===Ki.UPDATE_LOCAL_CONSTRAINT&&Bt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Os(t,e){return{execute:()=>{Dg(t)},unExecute:()=>{Dg(e)}}}var _T=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Ap(t){var e=_T();R(t,e)}var fT=ie('<button class="remove-button svelte-17rdl63"><!></button>');function gT(t,e){let n=M(e,"onTrash",8,()=>{});var r=fT(),i=K(r);Ap(i),W(r),Me("click",r,Kn(function(...o){var a;(a=n())==null||a.apply(this,o)})),R(t,r)}var hT=ie('<input type="radio" class="radio-select-button svelte-3561wl">'),pT=ie('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function Zo(t,e){var ee,ce;se(e,!1);const n=it(),r=()=>Ee(qt,"$toolStore",n),i=[];let o=M(e,"elementInfo",8),a=M(e,"onClick",12,void 0),c=M(e,"onTrash",8,void 0);const u=o().toolId,_=o().permanent??!1,p=((ee=o().menu)==null?void 0:ee.name)??o().toolId,g=!((ce=o().meta)!=null&&ce.categories.includes(S.GLOBAL_CONSTRAINT)),v=`label-${p}`;g&&a(()=>{Lr(u)});function m(){var be,ge;const te=(be=o().meta)==null?void 0:be.description,re=((ge=o().meta)==null?void 0:ge.usage)??QI(u);let Ce;return te&&te.length&&(Ce=te),re.length&&(Ce?Ce=Ce+`

`+re:Ce=re),Ce}he();var C=pT(),b=K(C);{var O=te=>{var re=hT();Kt(re),y(re,"id",v),re.value=(re.__value=u)==null?"":u,Wa(i,[],re,()=>r(),Ce=>ds(qt,Ce)),R(te,re)};fe(b,te=>{g&&te(O)})}var w=F(b,2);J(()=>y(w,"title",m())),y(w,"aria-labelledby",v);var x=K(w),k=K(x),U=K(k);{var z=te=>{gT(te,{get onTrash(){return c()}})};fe(U,te=>{_||te(z)})}W(k);var Y=F(k,2);y(Y,"for",v),Y.textContent=p,W(x);var B=F(x,2),X=K(B);dt(X,e,"default",{}),W(B),W(w),W(C),J(()=>wt(C,"checked",u===r())),Me("click",w,Kn(function(...te){var re;(re=a())==null||re.apply(this,te)})),R(t,C),ae()}function Np(t,e){se(e,!1);const n=it(),r=()=>Ee(pt,"$localConstraintsStore",n);let i=M(e,"toolId",8),o=M(e,"elementHandlers",8);const a=()=>{iT(i());const u=r().get(i());if(!u)return;const _=cT(i()),p=uT(i(),u),g=Os(_,p);un(g)};he();var c=qe(()=>qr(i(),o()));Zo(t,{get elementInfo(){return h(c)},onTrash:a}),ae()}var vT=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function mT(t){var e=vT();R(t,e)}var ET=ie('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function tl(t,e){let n=M(e,"isOpen",8,!0);var r=ET(),i=K(r);dt(i,e,"default",{}),W(r),J(()=>{y(r,"aria-expanded",n()),wt(r,"closed",!n())}),R(t,r)}var CT=ie('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function bT(t,e){se(e,!1);const n=it(),r=()=>Ee(Qi,"$svgRefStore",n),i=()=>Ee(pt,"$localConstraintsStore",n),o=()=>Ee(fr,"$currentConstraintStore",n),a=T();let c=M(e,"constraintId",8),u=M(e,"toolId",8);function _(){sT(c(),u()),r().focus()}function p(){const w=i().getConstraint(u(),c());if(!w)return;const x=_d(c(),u()),k=dd(c(),w),U=Os(x,k);un(U)}D(()=>o(),()=>{var w;A(a,(w=o())==null?void 0:w.id)}),Oe(),he();var g=CT(),v=K(g),m=K(v);W(v);var C=F(v,2),b=K(C),O=K(b);Ap(O),W(b),W(C),W(g),J(()=>{wt(g,"active",c()===h(a)),nt(m,`ID: ${c()??""}`)}),Me("click",b,Kn(p)),Me("click",g,_),R(t,g),ae()}var OT=ie('<div class="constraint-list svelte-w5npcu"></div>');function Sp(t,e){se(e,!1);const n=it(),r=()=>Ee(pt,"$localConstraintsStore",n),i=()=>Ee(qt,"$toolStore",n),o=T();let a=M(e,"toolId",8);D(()=>(r(),Z(a())),()=>{A(o,r().get(a()))}),Oe(),he();var c=Se(),u=de(c);{var _=p=>{var g=qe(()=>a()===i());tl(p,{get isOpen(){return h(g)},children:(v,m)=>{var C=OT();st(C,5,()=>Object.entries(h(o)),b=>b[0],(b,O)=>{bT(b,{get constraintId(){return h(O)[0]},get toolId(){return a()}})}),W(C),R(v,C)},$$slots:{default:!0}})};fe(u,p=>{h(o)&&Object.entries(h(o)).length&&p(_)})}R(t,c),ae()}var IT=ie('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function wT(t,e){let n=M(e,"title",8),r=M(e,"closeCb",8);var i=IT(),o=K(i),a=K(o,!0);W(o);var c=F(o,2);W(i),J(()=>nt(a,n())),Me("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),R(t,i)}var LT=ie('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Dr(t,e){se(e,!1);let n=M(e,"showModal",12),r=M(e,"title",8),i=T();function o(){n(!1),h(i).close()}D(()=>(h(i),Z(n())),()=>{h(i)&&n()&&h(i).showModal()}),D(()=>(h(i),Z(n())),()=>{h(i)&&!n()&&h(i).close()}),Oe();var a=LT(),c=K(a),u=K(c);wT(u,{get title(){return r()},closeCb:o});var _=F(u,2),p=K(_),g=K(p);dt(g,e,"default",{}),W(p),W(_),W(c),W(a),bi(a,v=>A(i,v),()=>h(i)),Me("click",c,Kn(function(v){xI.call(this,e,v)})),Me("close",a,()=>{n(!1)}),Me("click",a,SI(Kn(()=>h(i).close()))),R(t,a),ae()}var yT=ie('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function AT(t,e){se(e,!1);let n=M(e,"searchPattern",12,""),r=M(e,"showModal",8),i=T(null);D(()=>(Z(r()),h(i)),()=>{r()&&h(i)&&h(i).focus()}),Oe();var o=yT(),a=F(K(o),2);Kt(a),y(a,"spellcheck",!1),bi(a,c=>A(i,c),()=>h(i)),W(o),jn(a,n),R(t,o),ae()}var NT=ie('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function ST(t,e){let n=M(e,"showModal",12),r=M(e,"searchPattern",12,""),i=M(e,"title",8);Dr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=NT(),u=K(c);AT(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var _=F(u,2),p=K(_),g=K(p);dt(g,e,"default",{}),W(p),W(_),W(c),R(o,c)},$$slots:{default:!0},$$legacy:!0})}var xT=ie('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),RT=ie('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Xr(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0),i=M(e,"isCollapsible",8,!1);var o=Se(),a=de(o);{var c=_=>{var p=xT(),g=K(p),v=K(g),m=K(v,!0);W(v),W(g);var C=F(g,2),b=K(C);dt(b,e,"default",{}),W(C),W(p),J(()=>nt(m,n())),R(_,p)},u=_=>{var p=RT(),g=K(p),v=K(g),m=K(v,!0);W(v),W(g);var C=F(g,2),b=K(C);dt(b,e,"default",{});var O=F(b,2);W(C),W(p),J(()=>{nt(m,n()),wt(O,"open",r())}),Me("click",p,()=>r(!r())),R(_,p)};fe(a,_=>{i()?_(u,!1):_(c)})}R(t,o)}var TT=ie('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),DT=ie('<ol class="svelte-cd45on"></ol>'),kT=ie("<!> <!>",1);function GT(t,e){se(e,!1);const n=T();let r=M(e,"category",8),i=M(e,"addTool",8),o=M(e,"searchResults",8),a=T(!0);D(()=>(Z(o()),Z(r())),()=>{A(n,o().filter(p=>{var g,v;return(v=(g=p.info.meta)==null?void 0:g.categories)==null?void 0:v.includes(r())}))}),Oe(),he();var c=Se(),u=de(c);{var _=p=>{var g=kT(),v=de(g);Xr(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return h(a)},set isOpen(C){A(a,C)},$$legacy:!0});var m=F(v,2);tl(m,{get isOpen(){return h(a)},children:(C,b)=>{var O=DT();st(O,5,()=>h(n),Lt,(w,x)=>{let k=()=>h(x).key,U=()=>h(x).info;var z=TT(),Y=K(z),B=K(Y,!0);W(Y),W(z),J(()=>{var X;y(Y,"title",(X=U().meta)==null?void 0:X.description),nt(B,k())}),Me("click",Y,()=>{i()(k())}),R(w,z)}),W(O),R(C,O)},$$slots:{default:!0}}),R(p,g)};fe(u,p=>{h(n).length&&p(_)})}R(t,c),ae()}function MT(t,e){se(e,!1);const n=T();let r=M(e,"searchPattern",8,""),i=M(e,"addTool",8),o=M(e,"categories",8),a=M(e,"filterFunc",8),c=M(e,"elementHandlers",8);D(()=>(Z(r()),Z(a()),Z(c())),()=>{A(n,Jx(r(),a(),c()))}),Oe(),he();var u=Se(),_=de(u);st(_,1,o,Lt,(p,g)=>{GT(p,{get category(){return h(g)},get searchResults(){return h(n)},get addTool(){return i()}})}),R(t,u),ae()}var UT=ie('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function nl(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8);var i=UT();y(i,"tabindex",0);var o=K(i),a=K(o);dt(a,e,"add-button",{}),W(o);var c=F(o,2),u=K(c),_=K(u);dt(_,e,"title-icon",{}),W(u);var p=F(u);W(c);var g=F(c,2),v=K(g);W(g),W(i),J(()=>{nt(p,` ${r()??""}`),wt(v,"open",n())}),Me("click",i,()=>n(!n())),Me("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),R(t,i)}var FT=ie('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function $T(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8),i=M(e,"showModal",12);function o(){i(!i())}nl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=FT();Me("click",u,Kn(()=>o())),R(a,u)},"title-icon":(a,c)=>{var u=Se(),_=de(u);dt(_,e,"title-icon",{}),R(a,u)}},$$legacy:!0})}var PT=ie('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),BT=ie('<div class="panel-container svelte-hixu4"><!> <!></div>');function rl(t,e){let n=M(e,"isOpen",8,!0);var r=BT(),i=K(r);dt(i,e,"panel-header",{});var o=F(i,2);tl(o,{get isOpen(){return n()},children:(a,c)=>{var u=PT(),_=K(u);dt(_,e,"panel-content",{}),W(u),R(a,u)},$$slots:{default:!0}}),W(r),R(t,r)}var HT=ie("<!> <!>",1);function fd(t,e){se(e,!1);let n=M(e,"categories",8),r=M(e,"title",8),i=M(e,"onAddTool",8),o=M(e,"elementHandlerFilterFunc",8),a=M(e,"elementHandlers",8),c=T(!0),u=T(!1),_=T("");const p=g=>{A(u,!1),A(c,!0),i()(g)};he(),rl(t,{get isOpen(){return h(c)},set isOpen(g){A(c,g)},$$slots:{"panel-header":(g,v)=>{var m=HT(),C=de(m);$T(C,{get title(){return r()},get isOpen(){return h(c)},set isOpen(O){A(c,O)},get showModal(){return h(u)},set showModal(O){A(u,O)},$$slots:{"title-icon":(O,w)=>{var x=Se(),k=de(x);dt(k,e,"title-icon",{}),R(O,x)}},$$legacy:!0});var b=F(C,2);ST(b,{get title(){return r()},get showModal(){return h(u)},set showModal(O){A(u,O)},get searchPattern(){return h(_)},set searchPattern(O){A(_,O)},children:(O,w)=>{MT(O,{get searchPattern(){return h(_)},get categories(){return n()},get filterFunc(){return o()},addTool:p,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),R(g,m)},"panel-content":(g,v)=>{var m=Se(),C=de(m);dt(C,e,"panel-content",{}),R(g,m)}},$$legacy:!0}),ae()}var WT=ie("<!> <!>",1);function zT(t,e){se(e,!1);const n=it(),r=()=>Ee(pt,"$localConstraintsStore",n),i=T();let o=M(e,"elementHandlers",8);const a=[S.COSMETIC_TOOL],c=u=>{yp(u),Lr(u)};D(()=>(r(),S),()=>{A(i,(u,_)=>{var v;const p=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(S.COSMETIC_TOOL))&&!p})}),Oe(),he(),fd(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{mT(u)},"panel-content":(u,_)=>{var p=Se(),g=de(p);st(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>h(m)[0];var b=Se(),O=de(b);{var w=x=>{var k=WT(),U=de(k);Np(U,{get toolId(){return C()},get elementHandlers(){return o()}});var z=F(U,2);Sp(z,{get toolId(){return C()}}),R(x,k)};fe(O,x=>{GI(C())&&x(w)})}R(v,b)}),R(u,p)}}}),ae()}var xp=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(xp||{});const Aa=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Rp=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function YT(t,e){Tr.update(n=>n.setConstraint(t,e))}function jT(t){Tr.update(e=>e.removeConstraint(t))}function kg(t){t.type===xp.REMOVE_GLOBAL_CONSTRAINT?jT(t.payload):YT(t.payload.tool,t.payload.value)}function mu(t,e){return{execute:()=>{kg(t)},unExecute:()=>{kg(e)}}}var VT=ie('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function KT(t,e){let n=M(e,"value",8,!1);var r=VT(),i=K(r);Kt(i),W(r),J(()=>ah(i,n())),R(t,r)}function XT(t,e){se(e,!1);let n=M(e,"toolId",8),r=M(e,"value",8,!1),i=M(e,"elementHandlers",8);const o=()=>{const u=Aa(n(),!r()),_=Aa(n(),r()),p=mu(u,_);un(p)},a=()=>{const u=Rp(n()),_=Aa(n(),r()),p=mu(u,_);un(p)};he();var c=qe(()=>qr(n(),i()));Zo(t,{get elementInfo(){return h(c)},onClick:o,onTrash:a,children:(u,_)=>{KT(u,{get value(){return r()}})},$$slots:{default:!0}}),ae()}var qT=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function ZT(t){var e=qT();R(t,e)}function QT(t,e){se(e,!1);const n=it(),r=()=>Ee(Tr,"$globalConstraintsStore",n),i=T();let o=M(e,"elementHandlers",8);const a=UI,c=u=>{const _=Aa(u,!0),p=Rp(u),g=mu(_,p);un(g)};D(()=>r(),()=>{A(i,(u,_)=>{var v;const p=!!((v=_.meta)!=null&&v.categories.includes(S.GLOBAL_CONSTRAINT)),g=r().has(u);return p&&!g})}),Oe(),he(),fd(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{ZT(u)},"panel-content":(u,_)=>{var p=Se(),g=de(p);st(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let C=()=>h(m)[0],b=()=>h(m)[1];XT(v,{get toolId(){return C()},get value(){return b()},get elementHandlers(){return o()}})}),R(u,p)}}}),ae()}var JT=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function eD(t){var e=JT();R(t,e)}var tD=ie("<!> <!>",1),nD=ie("<!> <!> <!> <!>",1);function rD(t,e){se(e,!1);const n=it(),r=()=>Ee(pt,"$localConstraintsStore",n),i=T();let o=M(e,"elementHandlers",8);const a=MI,c=u=>{yp(u),Lr(u)};D(()=>(r(),S),()=>{A(i,(u,_)=>{var v;const p=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(S.LOCAL_CONSTRAINT))&&!p})}),Oe(),he(),fd(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{eD(u)},"panel-content":(u,_)=>{var p=nD(),g=de(p),v=qe(()=>qr(d.GIVEN,o()));Zo(g,{get elementInfo(){return h(v)}});var m=F(g,2),C=qe(()=>qr(d.REGIONS,o()));Zo(m,{get elementInfo(){return h(C)}});var b=F(m,2),O=qe(()=>qr(d.FOG,o()));Zo(b,{get elementInfo(){return h(O)}});var w=F(b,2);st(w,1,()=>r().entries(),([x,k])=>x,(x,k)=>{let U=()=>h(k)[0];var z=Se(),Y=de(z);{var B=X=>{var ee=tD(),ce=de(ee);Np(ce,{get toolId(){return U()},get elementHandlers(){return o()}});var te=F(ce,2);Sp(te,{get toolId(){return U()}}),R(X,ee)};fe(Y,X=>{TI(U())&&X(B)})}R(x,z)}),R(u,p)}}}),ae()}var iD=ie('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function qc(t,e){se(e,!1);const n=T();let r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0),o=T(void 0);function a(m){const C=Vc(m);C&&i()&&i()(C)}D(()=>Z(r()),()=>{A(n,r())}),D(()=>(h(n),Vc),()=>{gu(h(n))&&A(o,Vc(h(n)))}),Oe(),he();var c=iD(),u=K(c);const _=qe(()=>gp(h(n)));var p=K(u);Kt(p),W(u);var g=F(u,2),v=F(K(g),2);Kt(v),y(v,"spellcheck",!1),y(v,"maxlength",30),W(g),W(c),J(()=>{y(u,"style",`--choosen-color: ${h(o)??""}`),wt(u,"transparent",h(_))}),jn(p,()=>h(n),m=>A(n,m)),Me("change",p,()=>a(h(n))),jn(v,()=>h(n),m=>A(n,m)),Me("input",v,()=>a(h(n))),R(t,c),ae()}var oD=ie('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function Qo(t,e){let n=M(e,"name",8);var r=oD(),i=K(r),o=K(i,!0);W(i);var a=F(i,2);dt(a,e,"default",{}),W(r),J(()=>nt(o,n())),R(t,r)}var sD=ie('<input class="control-slider svelte-1rsuho6" type="range">');function aD(t,e){se(e,!1);let n=M(e,"min",8),r=M(e,"max",8),i=M(e,"value",12),o=M(e,"step",24,()=>(r()-n())/10),a=M(e,"onChangeCb",8,void 0),c=M(e,"onInputCb",8,void 0);he();var u=sD();Kt(u),J(()=>{y(u,"min",n()),y(u,"max",r()),y(u,"step",o())}),jn(u,i),Me("change",u,()=>{a()&&a()(i())}),Me("input",u,()=>{c()&&c()(i())}),R(t,u),ae()}function jr(t,e){let n=M(e,"name",8),r=M(e,"value",12),i=M(e,"min",8),o=M(e,"max",8),a=M(e,"step",24,()=>(o()-i())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);Qo(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,p)=>{aD(_,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var lD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function cD(t){var e=lD();R(t,e)}var uD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function dD(t){var e=uD();R(t,e)}var _D=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function fD(t){var e=_D();R(t,e)}var gD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function hD(t){var e=gD();R(t,e)}var pD=ie('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function vD(t,e){se(e,!1);const n=[];let r=M(e,"value",8),i=M(e,"selectedShape",12),o=M(e,"title",8),a=M(e,"updateShapeCb",8,void 0);he();var c=pD(),u=K(c);Kt(u);var _,p=F(u,2);dt(p,e,"default",{}),W(c),J(()=>{y(c,"title",o()),wt(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Wa(n,[],u,()=>(r(),i()),i),Me("change",u,()=>a()&&a()(r())),R(t,c),ae()}var mD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function ED(t){var e=mD(),n=K(e);y(n,"cx",480),y(n,"cy",-480),y(n,"rx",480),y(n,"ry",300),W(e),R(t,e)}var CD=ie('<div class="icon-wrapper svelte-18euf14"><!></div>'),bD=ie('<div class="radio-container svelte-18euf14"></div>');function OD(t,e){se(e,!1);let n=M(e,"name",8),r=M(e,"selectedShape",8),i=M(e,"possibleShapes",8),o=M(e,"updateShapeCb",8,void 0);const a=new Map([[$.CIRCLE,fD],[$.ELLIPSE,ED],[$.SQUARE,dD],[$.RECTANGLE,cD],[$.POLYGON,hD]]);he(),Qo(t,{get name(){return n()},children:(c,u)=>{var _=bD();st(_,5,i,Lt,(p,g)=>{vD(p,{get title(){return h(g)},get value(){return h(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var C=Se(),b=de(C);{var O=w=>{var x=CD(),k=K(x);ch(k,()=>a.get(h(g)),(U,z)=>{z(U,{})}),W(x),R(w,x)};fe(b,w=>{a.has(h(g))&&w(O)})}R(v,C)},$$slots:{default:!0}})}),W(_),R(c,_)},$$slots:{default:!0}}),ae()}var ID=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function wD(t){var e=ID();R(t,e)}var LD=ie('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),yD=ie("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function AD(t,e){se(e,!1);const n=it(),r=()=>Ee(qt,"$toolStore",n),i=()=>Ee(fr,"$currentConstraintStore",n),o=T(),a=T(),c=T();let u=T(!0),_=M(e,"elementHandlers",8);function p(O,w){const x=(O==null?void 0:O.shape)??(w?su(w):void 0);return Xc(x),x}function g(O,w){h(c)&&(_I(c,h(c)[O]=w),Xc(h(c)))}function v(){h(a)&&(A(c,su(h(a))),Xc(h(c)))}function m(O){return O&&[$.CIRCLE,$.SQUARE,$.POLYGON,$.LINE_WITH_POLYGON_ENDS].includes(O)}function C(O){return O&&[$.POLYGON,$.LINE_WITH_POLYGON_ENDS].includes(O)}function b(O){return O&&[$.ELLIPSE,$.RECTANGLE].includes(O)}D(()=>(r(),Z(_())),()=>{A(o,qr(r(),_()))}),D(()=>h(o),()=>{A(a,h(o).shape)}),D(()=>(i(),h(a)),()=>{var O;A(c,p(((O=i())==null?void 0:O.constraint)??null,h(a)))}),Oe(),he(),rl(t,{get isOpen(){return h(u)},set isOpen(O){A(u,O)},$$slots:{"panel-header":(O,w)=>{nl(O,{slot:"panel-header",title:"Shape Editor",get isOpen(){return h(u)},set isOpen(x){A(u,x)},$$slots:{"title-icon":(x,k)=>{wD(x)}},$$legacy:!0})},"panel-content":(O,w)=>{var x=Se(),k=de(x);{var U=z=>{var Y=yD(),B=de(Y);{var X=Te=>{var Ie=LD();Me("click",Ie,v),R(Te,Ie)};fe(B,Te=>{FI(h(a))&&Te(X)})}var ee=F(B,2);{var ce=Te=>{OD(Te,{get possibleShapes(){return h(a).allowedTypes},name:"Shape",get selectedShape(){return h(c).type},updateShapeCb:Ie=>g("type",Ie)})};fe(ee,Te=>{var Ie;h(a).allowedTypes&&h(a).allowedTypes.length&&((Ie=h(c))!=null&&Ie.type)&&Te(ce)})}var te=F(ee,2);{var re=Te=>{var Ie=qe(()=>h(a).n.lb??3),ke=qe(()=>h(a).n.ub??10);jr(Te,{name:"Number of Sides",get value(){return h(c).n},get min(){return h(Ie)},get max(){return h(ke)},step:1,onChangeCb:Re=>g("n",Re)})};fe(te,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.n)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.n)!=null&&Re.editable)&&C(h(c).type)&&Te(re)})}var Ce=F(te,2);{var be=Te=>{var Ie=qe(()=>h(a).r.lb??0),ke=qe(()=>h(a).r.ub??1),Re=qe(()=>h(a).r.step??.05);jr(Te,{name:"Radius",get value(){return h(c).r},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:At=>g("r",At)})};fe(Ce,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.r)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.r)!=null&&Re.editable)&&m(h(c).type)&&Te(be)})}var ge=F(Ce,2);{var Ue=Te=>{var Ie=qe(()=>h(a).width.lb??0),ke=qe(()=>h(a).width.ub??1),Re=qe(()=>h(a).width.step??.05);jr(Te,{name:"Width",get value(){return h(c).width},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:At=>g("width",At)})};fe(ge,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.width)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.width)!=null&&Re.editable)&&b(h(c).type)&&Te(Ue)})}var Qe=F(ge,2);{var Ne=Te=>{var Ie=qe(()=>h(a).height.lb??0),ke=qe(()=>h(a).height.ub??1),Re=qe(()=>h(a).height.step??.05);jr(Te,{name:"Height",get value(){return h(c).height},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:At=>g("height",At)})};fe(Qe,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.height)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.height)!=null&&Re.editable)&&b(h(c).type)&&Te(Ne)})}var ye=F(Qe,2);{var lt=Te=>{var Ie=qe(()=>h(a).angle.lb??0),ke=qe(()=>h(a).angle.ub??360),Re=qe(()=>h(a).angle.step??15);jr(Te,{name:"Angle",get value(){return h(c).angle},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:At=>g("angle",At)})};fe(ye,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.angle)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.angle)!=null&&Re.editable)&&Te(lt)})}var Ye=F(ye,2);{var On=Te=>{var Ie=qe(()=>h(a).inset.lb??0),ke=qe(()=>h(a).inset.ub??.5),Re=qe(()=>h(a).inset.step??.01);jr(Te,{name:"Inset",get value(){return h(c).inset},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:At=>g("inset",At)})};fe(Ye,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.inset)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.inset)!=null&&Re.editable)&&Te(On)})}var Mn=F(Ye,2);{var Gr=Te=>{Qo(Te,{name:"Stroke",children:(Ie,ke)=>{qc(Ie,{get value(){return h(c).stroke},onChangeCb:Re=>g("stroke",Re)})},$$slots:{default:!0}})};fe(Mn,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.stroke)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.stroke)!=null&&Re.editable)&&Te(Gr)})}var Qt=F(Mn,2);{var hr=Te=>{var Ie=qe(()=>h(a).strokeWidth.lb??0),ke=qe(()=>h(a).strokeWidth.ub??.8),Re=qe(()=>h(a).strokeWidth.step??.01);jr(Te,{name:"Stroke Width",get value(){return h(c).strokeWidth},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:At=>g("strokeWidth",At)})};fe(Qt,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.strokeWidth)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.strokeWidth)!=null&&Re.editable)&&Te(hr)})}var si=F(Qt,2);{var rr=Te=>{var Ie=qe(()=>h(a).strokeDasharray.lb??0),ke=qe(()=>h(a).strokeDasharray.ub??1),Re=qe(()=>h(a).strokeDasharray.step??.01);jr(Te,{name:"Stroke Dasharray",get value(){return h(c).strokeDasharray},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:At=>g("strokeDasharray",At)})};fe(si,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.strokeDasharray)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.strokeDasharray)!=null&&Re.editable)&&Te(rr)})}var Un=F(si,2);{var xi=Te=>{Qo(Te,{name:"Fill",children:(Ie,ke)=>{qc(Ie,{get value(){return h(c).fill},onChangeCb:Re=>g("fill",Re)})},$$slots:{default:!0}})};fe(Un,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.fill)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.fill)!=null&&Re.editable)&&Te(xi)})}var Mr=F(Un,2);{var Dt=Te=>{Qo(Te,{name:"Font Color",children:(Ie,ke)=>{qc(Ie,{get value(){return h(c).fontColor},onChangeCb:Re=>g("fontColor",Re)})},$$slots:{default:!0}})};fe(Mr,Te=>{var Ie,ke,Re;((Ie=h(c))==null?void 0:Ie.fontColor)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.fontColor)!=null&&Re.editable)&&Te(Dt)})}R(z,Y)};fe(k,z=>{h(a)&&z(U)})}R(O,x)}},$$legacy:!0}),ae()}var ND=ie('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Is(t,e){let n=M(e,"clickCb",8),r=M(e,"title",8);var i=ND(),o=K(i),a=K(o);dt(a,e,"default",{}),W(o),W(i),J(()=>y(i,"title",r())),Me("click",i,Kn(function(...c){var u;(u=n())==null||u.apply(this,c)})),R(t,i)}var SD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function xD(t){var e=SD();R(t,e)}var RD=ie('<div class="buttons-container svelte-kc00rw"><!></div>');function il(t,e){var n=RD(),r=K(n);dt(r,e,"default",{}),W(n),R(t,n)}var TD=ie('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),DD=ie('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),kD=ie('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function GD(t,e){se(e,!1);const n=it(),r=()=>Ee(Rr,"$puzzleMetaStore",n),i=()=>Ee(Tr,"$globalConstraintsStore",n),o=()=>Ee(pt,"$localConstraintsStore",n);let a=M(e,"showModal",12,!1),c=T(""),u=T(""),_=T(""),p=T(""),g=T("");function v(){a(!1)}function m(){const w=h(u)?C(h(u)):["Anonymous"],k={title:h(c)?h(c):"Sudoku",authors:w,ruleset:h(_),ctcYoutubeUrl:h(p),ctcUrl:h(g)};nT(k),a(!1)}function C(w){return w.split(/\s*[;]\s*/)}function b(){var Y,B,X,ee;let w="";const x=Rt,k=i();!!k.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ce,te]of k.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&te){const re=x[ce],Ce=((Y=re.menu)==null?void 0:Y.name)??re.toolId,be=(B=re.meta)==null?void 0:B.description;w+=`**${Ce}**: ${be}

`}const z=o();for(const[ce,te]of z.entries())if(Object.keys(te).length>0){const Ce=x[ce],be=((X=Ce.menu)==null?void 0:X.name)??Ce.toolId,ge=(ee=Ce.meta)==null?void 0:ee.description;w+=`**${be}**: ${ge}

`}return w.trim()}function O(){const w=b();A(_,w)}D(()=>(Z(a()),r(),Ta),()=>{if(!a()){const w=r().authors;A(c,r().title??""),A(u,w?Ta(w,"; ","; "):""),A(_,r().ruleset??""),A(p,r().ctcYoutubeUrl??""),A(g,r().ctcUrl??"")}}),Oe(),he(),Dr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,x)=>{var k=kD(),U=K(k);Xr(U,{title:"Title"});var z=F(U,2);Kt(z);var Y=F(z,2);Xr(Y,{title:"Authors"});var B=F(Y,2);Kt(B);var X=F(B,2);Xr(X,{title:"Ruleset",children:(ge,Ue)=>{var Qe=TD();Me("click",Qe,O),R(ge,Qe)},$$slots:{default:!0}});var ee=F(X,2);QO(ee),y(ee,"rows",8);var ce=F(ee,2);Xr(ce,{title:"CTC Link"});var te=F(ce,2);Kt(te);var re=F(te,2);Xr(re,{title:"CTC Youtube Link"});var Ce=F(re,2);Kt(Ce);var be=F(Ce,2);il(be,{children:(ge,Ue)=>{var Qe=DD(),Ne=de(Qe),ye=F(Ne,2);Me("click",Ne,m),Me("click",ye,v),R(ge,Qe)},$$slots:{default:!0}}),W(k),jn(z,()=>h(c),ge=>A(c,ge)),jn(B,()=>h(u),ge=>A(u,ge)),jn(ee,()=>h(_),ge=>A(_,ge)),jn(te,()=>h(g),ge=>A(g,ge)),jn(Ce,()=>h(p),ge=>A(p,ge)),R(w,k)},$$slots:{default:!0},$$legacy:!0}),ae()}var MD=ie("<!> <!>",1);function UD(t){let e=T(!1);function n(){A(e,!0)}var r=MD(),i=de(r);Is(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{xD(a)},$$slots:{default:!0}});var o=F(i,2);GD(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var FD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function $D(t){var e=FD();R(t,e)}var PD=ie('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function BD(t,e){se(e,!1);let n=T(null),r=T(null);function i(){var o;(o=h(n))==null||o.click()}D(()=>(h(r),Ma),()=>{if(h(r)&&h(r).length){const o=h(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),p=PR(_);console.log(p),lT(p),Ma()}},a.onerror=function(){alert(a.error)}}}),Oe(),he(),Is(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=PD(),u=de(c);$D(u);var _=F(u,2);bi(_,p=>A(n,p),()=>h(n)),NI(_,()=>h(r),p=>A(r,p)),R(o,c)},$$slots:{default:!0}}),ae()}var HD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function WD(t){var e=HD();R(t,e)}var zD=ie('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Gg(t,e){se(e,!1);let n=M(e,"name",8),r=M(e,"min",8),i=M(e,"max",8),o=M(e,"value",12),a=M(e,"step",24,()=>(i()-r())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);he();var _=zD(),p=K(_),g=K(p);W(p);var v=F(p,2);Kt(v),W(_),J(()=>{nt(g,`${n()??""}: ${o()??""}`),y(v,"min",r()),y(v,"max",i()),y(v,"step",a())}),jn(v,o),Me("change",v,()=>{c()&&c()(o())}),Me("input",v,()=>{u()&&u()(o())}),R(t,_),ae()}var YD=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),jD=ie('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function VD(t,e){se(e,!1);let n=M(e,"showModal",12,!1);const r=4,i=20;let o=T(9),a=T(9),c=T(""),u=T(St.range(1,10));function _(){n(!1)}function p(){Ma(),aT(h(a),h(o),h(u).sort()),n(!1)}function g(C){return C.map(O=>String(O)).join(",")}function v(){const C=Math.min(Math.max(h(a),h(o)),9);A(u,St.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&A(u,C.replaceAll(" ","").split(",").map(Number))}he(),Dr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,b)=>{var O=jD(),w=K(O);Gg(w,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return h(o)},set value(B){A(o,B)},$$legacy:!0});var x=F(w,2);Gg(x,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return h(a)},set value(B){A(a,B)},$$legacy:!0});var k=F(x,2),U=qe(()=>`Allowed Digits (for the solver): ${g(h(u))}`);Xr(k,{get title(){return h(U)}});var z=F(k,2);Kt(z),J(()=>y(z,"placeholder",g(h(u))));var Y=F(z,2);il(Y,{children:(B,X)=>{var ee=YD(),ce=de(ee),te=F(ce,2);Me("click",ce,p),Me("click",te,_),R(B,ee)},$$slots:{default:!0}}),W(O),jn(z,()=>h(c),B=>A(c,B)),Me("input",z,()=>m(h(c))),R(C,O)},$$slots:{default:!0},$$legacy:!0}),ae()}var KD=ie("<!> <!>",1);function XD(t){let e=T(!1);function n(){A(e,!0)}var r=KD(),i=de(r);Is(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{WD(a)},$$slots:{default:!0}});var o=F(i,2);VD(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var qD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function ZD(t){var e=qD();R(t,e)}var QD=ie('<button class="modal-button">Cancel</button>'),JD=ie('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function e2(t,e){se(e,!1);const n=it(),r=()=>Ee(Qi,"$svgRefStore",n),i=()=>Ee(Rr,"$puzzleMetaStore",n),o=()=>Ee(bs,"$puzzleStore",n),a=T();let c=M(e,"showModal",12,!1);function u(O){const w=getComputedStyle(O);let x="";for(let k of w){const U=w.getPropertyValue(k);U&&(x+=`${k}:${U};`)}return x}function _(O){const w=O.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(O));const x=O.childNodes;for(let k=0;k<x.length;k++){const U=x[k];if(U instanceof Element){const z=_(U);w.replaceChild(z,w.childNodes[k])}}return w}function p(O){const w=_(O),x=Da(i()),U=new XMLSerializer().serializeToString(w),z=new Image,Y=new Blob([U],{type:"image/svg+xml;charset=utf-8"}),B=URL.createObjectURL(Y);z.onload=()=>{const X=O.getBoundingClientRect(),ee=X.width,ce=X.height,te=document.createElement("canvas"),re=window.devicePixelRatio||1;te.width=ee*re,te.height=ce*re;const Ce=te.getContext("2d");Ce&&(Ce.scale(re,re),Ce.drawImage(z,0,0,ee,ce),te.toBlob(be=>{if(!be)return;const ge=URL.createObjectURL(be),Ue=document.createElement("a");Ue.href=ge,Ue.download=x,Ue.click(),URL.revokeObjectURL(ge)}))},z.src=B}function g(O,w="download.svg"){const x=_(O);let U=new XMLSerializer().serializeToString(x);U.includes("<?xml")||(U=`<?xml version="1.0" standalone="no"?>\r
`+U);const z=new Blob([U],{type:"image/svg+xml"}),Y=URL.createObjectURL(z),B=document.createElement("a");B.href=Y,B.download=w,B.click(),URL.revokeObjectURL(Y)}const v=()=>{const O=$R(o());return JSON.stringify(O,null,2)},m=()=>{function O(k,U,z){var Y=document.createElement("a"),B=new Blob([k],{type:z});Y.href=URL.createObjectURL(B),Y.download=U,Y.click(),URL.revokeObjectURL(Y.href)}const w=v(),x=Da(i());O(w,`${x}.json`,"text/plain")};function C(){c(!1)}const b=1;D(()=>r(),()=>{A(a,r())}),Oe(),he(),Dr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(O){c(O)},children:(O,w)=>{var x=JD(),k=K(x),U=K(k),z=K(U),Y=F(z,2),B=F(Y,2);W(U);var X=F(U,2),ee=F(K(X),2),ce=K(ee);y(ce,"width",400*b),y(ce,"height",300*b),W(ee),W(X),W(k);var te=F(k,2);il(te,{children:(re,Ce)=>{var be=QD();Me("click",be,C),R(re,be)},$$slots:{default:!0}}),W(x),Me("click",z,m),Me("click",Y,()=>p(h(a))),Me("click",B,()=>g(h(a))),R(O,x)},$$slots:{default:!0},$$legacy:!0}),ae()}var t2=ie("<!> <!>",1);function n2(t){let e=T(!1);function n(){A(e,!0)}var r=t2(),i=de(r);Is(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{ZD(a)},$$slots:{default:!0}});var o=F(i,2);e2(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var r2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function Tp(t){var e=r2();R(t,e)}var i2=ie('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),o2=ie('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function La(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0);var i=o2(),o=K(i);Xr(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=F(o,2);tl(a,{get isOpen(){return r()},children:(c,u)=>{var _=i2(),p=K(_);dt(p,e,"default",{}),W(_),R(c,_)},$$slots:{default:!0}}),W(i),R(t,i)}var s2=ie('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function a2(t,e){let n=M(e,"value",8),r=M(e,"onClickCb",8),i=M(e,"disabled",8,!1);var o=s2(),a=K(o);Kt(a),Zi(2),W(o),J(()=>{wt(o,"disabled",i()),ah(a,n()),a.disabled=i()}),Me("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,o)}var l2=ie('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Vr(t,e){se(e,!1);let n=M(e,"value",8),r=M(e,"name",8),i=M(e,"updateCb",8,void 0),o=M(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}he();var c=l2(),u=K(c);a2(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var _=F(u,2),p=K(_,!0);W(_),W(c),J(()=>{wt(c,"disabled",o()),nt(p,r())}),Me("click",_,Kn(a)),R(t,c),ae()}var c2=ie("<!> <!>",1),u2=ie("<!> <!> <!>",1),d2=ie("<!> <!>",1),_2=ie('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Dp(t,e){se(e,!1);const n=it(),r=()=>Ee(Jr,"$settingsStore",n),i=()=>Ee(Ja,"$gameModeStore",n),o=T();let a=M(e,"showModal",12,!1);D(()=>r(),()=>{A(o,r())}),Oe(),he(),Dr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=_2(),p=K(_);La(p,{title:"General",children:(b,O)=>{Vr(b,{get value(){return h(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:fI})},$$slots:{default:!0}});var g=F(p,2);La(g,{title:"Tools",children:(b,O)=>{var w=c2(),x=de(w);Vr(x,{get value(){return h(o).penToolActive},name:"Pen Tool",updateCb:gI});var k=F(x,2);Vr(k,{disabled:!0,get value(){return h(o).letterToolActive},name:"Letter Tool",updateCb:hI}),R(b,w)},$$slots:{default:!0}});var v=F(g,2);La(v,{title:"Gameplay",children:(b,O)=>{var w=u2(),x=de(w);Vr(x,{name:"Check Conflicts",get value(){return h(o).checkConflicts},updateCb:pI});var k=F(x,2);Vr(k,{name:"Highlight Pencilmark Conflicts",get value(){return h(o).highlightPencilmarkConflicts},updateCb:vI});var U=F(k,2);Vr(U,{name:"Highlight Cells Seen By Selection",get value(){return h(o).highlightCellsSeenBySelection},updateCb:mI}),R(b,w)},$$slots:{default:!0}});var m=F(v,2);{var C=b=>{La(b,{title:"Setting Mode Display",children:(O,w)=>{var x=d2(),k=de(x);Vr(k,{name:"Hide Fog",get value(){return h(o).hideFog},updateCb:EI});var U=F(k,2);Vr(U,{name:"Show Solution",get value(){return h(o).showSolution},updateCb:CI}),R(O,x)},$$slots:{default:!0}})};fe(m,b=>{i()===ro.SETTING&&b(C)})}W(_),R(c,_)},$$slots:{default:!0},$$legacy:!0}),ae()}var f2=ie("<!> <!>",1);function g2(t){let e=T(!1);function n(){A(e,!0)}var r=f2(),i=de(r);Is(i,{title:"Settings",clickCb:n,children:(a,c)=>{Tp(a)},$$slots:{default:!0}});var o=F(i,2);Dp(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var h2=ie('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function p2(t){var e=h2(),n=K(e);XD(n);var r=F(n,2);n2(r);var i=F(r,2);BD(i,{});var o=F(i,2);UD(o);var a=F(o,2);g2(a),W(e),R(t,e)}var v2=ie('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function m2(t,e){se(e,!1);let n=T(!1);function r(){const i=ut(_n),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const p=_.value;c.push(p)}o.push(c)}ud(o)}he(),rl(t,{get isOpen(){return h(n)},set isOpen(i){A(n,i)},$$slots:{"panel-header":(i,o)=>{nl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return h(n)},set isOpen(a){A(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=v2();Me("click",a,r),R(i,a)}},$$legacy:!0}),ae()}const E2={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function C2(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function b2(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function O2(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function kp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function I2(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=b2(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=O2(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=C2(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=kp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var q=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(q||{});function mt(t,e){return`${e}[${t.r},${t.c}]`}function ws(t,e){return t.map(r=>mt(r,e))}function me(t,e){return"["+ws(t,e).join(",")+"]"}function Le(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function at(t){return t.map(n=>Le(n))}function Ei(t){return`constraint alldifferent([${t.join(",")}]);
`}function _t(t,e){return t&&(t=`
% ${e}
`+t),t}function ol(t,e){const n=[He.N,He.S,He.W,He.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function gd(t,e,n=void 0){n||(n=[He.N,He.S,He.W,He.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+at(o).join(",")+"]";r.push(a)}return r}function sl(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class w2{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=E2){const i=I2(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];o+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];o+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[o,n]}}function L2(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/;let a=null,c=0,u=0;for(let b=0;b<e.length;b++){const O=e[b].trim(),w=O.match(r),x=O.match(i),k=O.match(o);if(w||x||k){a={name:(w||x||k)[1],startLine:b,content:[e[b]]},c=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length;continue}if(a&&(a.content.push(e[b]),c+=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u+=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length,c===0&&u===0&&O.endsWith(";"))){n[a.name]={startLine:a.startLine,endLine:b,name:a.name,content:a.content};let U=a.startLine;for(;U>0&&e[U-1].trim().startsWith("%");)U-=1;n[a.name].startLine=U,a=null}}const _=new Set;function p(b){const O=[];for(const w of Object.keys(n))!b.includes("function")&&!b.includes("predicate")&&!b.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(b)&&O.push(w);return O}for(const b of e)p(b).forEach(w=>_.add(w));const g=Object.values(n).filter(b=>!_.has(b.name)).map(b=>({start:b.startLine,end:b.endLine}));g.sort((b,O)=>O.start-b.start);const v=[...e];for(const b of g)v.splice(b.start,b.end-b.start+1);const m=[];let C=!1;for(const b of v)b.trim()===""?C||(m.push(b),C=!0):(m.push(b),C=!1);return m.join(`
`)}function Mg(t){let e=t,n=e.length;for(;e=L2(e),e.length!=n;)n=e.length;return e}const Ug=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function hd(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function y2(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const p=e.getCell(c,_);!p||p.region===null?u.push(r-1):u.push(p.region)}o.push(u)}const a=hd(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function pd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Ft(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function A2(t,e){const r=t.grid.getPositiveDiagonal(),i=at(r);let o=Ei(i);return o=`
% Positive Diagonal Constraint
`+o,o}function N2(t,e){const r=t.grid.getNegativeDiagonal(),i=at(r);let o=Ei(i);return o=`
% Negative Diagonal Constraint
`+o,o}function S2(t,e){const r=t.grid.getPositiveDiagonal(),o="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function x2(t,e){const r=t.grid.getNegativeDiagonal(),o="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function R2(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,_),v=n.getCell(u,_+(u-p));if(!g||!v)continue;const m=Le(g),C=Le(v),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;o+=O}}return o}function T2(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,_),v=n.getCell(u,_-(u-p));if(!g||!v)continue;const m=Le(g),C=Le(v),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;o+=O}}return o}function D2(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),_=`constraint alldifferent(${`[${at(a).join(",")}]`});
`;r+=_}return r}function k2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=Le(i),_=`[${at(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${_});
`;r+=p}return r}function G2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=Le(i),_=`[${at(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${_});
`;r+=p}return r}function M2(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=_t(n,`${e}`),n}function U2(t,e){let n="";return n+=`constraint tango_p(board);
`,n=_t(n,`${e}`),n}function F2(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=_t(n,`${e}`),n}function*kr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function $2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of kr(n)){const a=Le(i),c=Le(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function P2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of kr(n)){const a=Le(i),c=Le(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function B2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${at(o).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function H2(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function W2(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function z2(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=_t(n,`${e}`),n}function Zc(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),p=c.value;(e===d.ALL_V_GIVEN&&(p==="v"||p==="V")||e===d.ALL_X_GIVEN&&(p==="x"||p==="X")||e===d.ALL_XV_GIVEN)&&o.push(_)}let a="";for(const[c,u]of kr(n)){if(o.find(v=>v.has(c)&&v.has(u)))continue;const p=Le(c),g=Le(u);if(e===d.ALL_V_GIVEN){const v=`constraint ${p} + ${g} != 5;
`;a+=v}else if(e===d.ALL_X_GIVEN){const v=`constraint ${p} + ${g} != 10;
`;a+=v}else{const v=`constraint ${p} + ${g} != 5 /\\ (${p} + ${g} != 10);
`;a+=v}}return a=_t(a,`${e}`),a}function Ji(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function Y2(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=Ji(n,i);let a="";for(const[c,u]of kr(n)){if(o.find(C=>C.has(c)&&C.has(u)))continue;const p=Le(c),g=Le(u);let v="";if(c.r==u.r){const b=n.getRow(c.r)[0];v=Le(b)}else if(c.c==u.c){const b=n.getCol(c.c)[0];v=Le(b)}if(!v)continue;const m=`constraint abs(${p} - ${g}) != ${v};
`;a+=m}return a=_t(a,`${e}`),a}function j2(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=Ji(n,i);a=[...a,...Ji(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"1"));const u=[...new Set(c)];let _="";for(const[p,g]of kr(n)){if(a.find(b=>b.has(p)&&b.has(g)))continue;const m=Le(p),C=Le(g);for(const b of u){const O=parseInt(b),w=`constraint abs(${m} - ${C}) != ${O};
`;_+=w}}return _=_t(_,`${e}`),_}function V2(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=Ji(n,i);a=[...a,...Ji(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"2"));const u=[...new Set(c)];let _="";for(const[p,g]of kr(n)){if(a.find(b=>b.has(p)&&b.has(g)))continue;const m=Le(p),C=Le(g);for(const b of u){const O=parseInt(b),w=`constraint not ratio_p(${m}, ${C}, ${O});
`;_+=w}}return _=_t(_,`${e}`),_}function K2(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=Ji(n,i);let a="";for(const[c,u]of kr(n)){if(o.find(b=>b.has(c)&&b.has(u)))continue;const p=Le(c),g=Le(u),v=mt(c,q.YIN_YANG),m=mt(u,q.YIN_YANG),C=`constraint not yin_yang_kropki_p(${p}, ${g}, ${v}, ${m});
`;a+=C}return a=_t(a,`${e}`),a}function X2(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,_){return u.find(p=>p.cell.r===_.r&&p.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(o,u),p=_?_.directions:[],g=Le(u),v=[He.E,He.N,He.S,He.W];for(const m of v){if(p.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),b=me(C,q.YIN_YANG);c+=`constraint count(${b}, 1) != ${g};
`}}return c=_t(c,`${e}`),c}function vd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function q2(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=n.getRow(c.r),g=`[${at(_).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${g}, ${v});
`;a+=m}return a=_t(a,`${e}`),a}function Z2(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=Le(c),[p,g,v,m]=gd(n,c),C=`constraint not radar_p(${_}, ${p}, ${g}, ${v}, ${m}, 9);
`;a+=C}return a=_t(a,`${e}`),a}function Q2(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=v}return a=_t(a,`${e}`),a}function J2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of kr(n)){const a=Le(i),c=Le(o),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${o.r},${o.c}]`,p=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=p}return r}function ek(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(p=>n.getCell(p.r,p.c)).filter(p=>!!p),_=me(u,q.YIN_YANG);o+=`constraint count_unique_values(${_}) >= 2;
`}return o}function tk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=q.YIN_YANG;for(const[o,a]of kr(n)){const c=Le(o),u=Le(a),_=`${i}[${o.r},${o.c}]`,p=`${i}[${a.r},${a.c}]`,g=`constraint (${_} == 1 /\\ ${p} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function nk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=_t(n,`${e}`),n}function rk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=_t(n,`${e}`),n}function ik(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function ok(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function sk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=_t(n,`${e}`),n}function ak(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=_t(n,`${e}`),n}function lk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function ck(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function uk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function dk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=_t(n,`${e}`),n}function _k(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=mt(i,q.BOARD),c=mt(i,q.YIN_YANG),u=me(o,q.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=_t(n,`${e}`),n}function fk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function gk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function hk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function pk(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function vk(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=_t(n,`${e}`),n}function mk(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function Ek(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=_t(n,`${e}`),n}function Ck(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=at(u),p=Ei(_);r+=p}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),_=at(u),p=Ei(_);r+=p}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),p=at(_),g=Ei(p);r+=g}}return r}function bk(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const Ok=new Map([[d.POSITIVE_DIAGONAL,A2],[d.NEGATIVE_DIAGONAL,N2],[d.POSITIVE_ANTIDIAGONAL,S2],[d.NEGATIVE_ANTIDIAGONAL,x2],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,R2],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,T2],[d.ANTIKING,k2],[d.ANTIKNIGHT,G2],[d.ANTI_GIRAFFE,M2],[d.DISJOINT_GROUPS,D2],[d.TANGO,U2],[d.NONCONSECUTIVE,$2],[d.NONRATIO,P2],[d.ANTI_ENTROPY,F2],[d.GLOBAL_INDEXING_COLUMN,B2],[d.ALL_V_GIVEN,Zc],[d.ALL_X_GIVEN,Zc],[d.ALL_XV_GIVEN,Zc],[d.ALL_DIFFERENCES_GIVEN,j2],[d.ALL_RATIOS_GIVEN,V2],[d.ALL_XY_DIFFERENCES_GIVEN,Y2],[d.ALL_YIN_YANG_KROPKI_GIVEN,K2],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,X2],[d.ALL_INDEXING_COLUMN_GIVEN,q2],[d.ALL_RADARS_GIVEN,Z2],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,Q2],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,J2],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,ek],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,z2],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,H2],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,W2],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,nk],[d.CAVE_CELLS_ARE_ODD,ik],[d.CAVE_WALLS_ARE_EVEN,ok],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,sk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,ak],[d.YIN_YANG_FILLOMINO_PARITY,rk],[d.TWO_SYMMETRIC_GALAXIES,uk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,lk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,ck],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,dk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,_k],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,tk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,fk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Ek],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,gk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,hk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,pk],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,vk],[d.DIRECTED_PATH_IS_PARITY_LINE,mk]]);function Ik(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=Ok.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function md(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return at(r)}function Ed(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${at(n.slice(1)).join(",")}]`}function Gp(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]";for(const c of r.lines){const u=Ed(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function wk(t,e,n,r){let i="";const o=md(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const p=`constraint average_arrow_p(${Ed(e,u)}, ${a});
`;i+=p}}return i}function Lk(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=me(o,q.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=me(u.slice(1),q.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return i+=Gp(t,e,n,r),i}function yk(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=Ed(e,u),p=`constraint bulbous_arrow_p(${a}, ${_});
`;i+=p}return i}const Ak=new Map([[d.ARROW,Gp],[d.AVERAGE_ARROW,wk],[d.BULBOUS_ARROW,yk],[d.CHAOS_CONSTRUCTION_ARROW,Lk]]);function Nk(t,e,n,r){let i="";const o=Ak.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Qr(t,e){const n=Ft(t,e.cells);return at(n)}function Mp(t,e,n){const i=`[${Qr(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function al(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Cd(t,e,n,r,i){const a=`[${Qr(e,r).join(",")}]`,c=r.value,u=al(t,c,n);if(!u)return"";const _=u[1];let p=u[0];return p+=`constraint ${i}(${a}, ${_});
`,p}function Sk(t,e,n,r){const i=Qr(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=al(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${o}, ${u});
`,_}function xk(t,e,n,r){const i=Qr(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=al(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${o}, ${u});
`,_}function Rk(t,e,n,r){return Cd(t,e,n,r,"sum_cage_p")}function Tk(t,e,n,r){return Mp(e,r,"parity_balance_cage_p")}function Dk(t,e,n,r){return Mp(e,r,"sum_cage_look_and_say_p")}function kk(t,e,n,r){return Cd(t,e,n,r,"divisible_killer_cage_p")}function Gk(t,e,n,r){return Cd(t,e,n,r,"spotlight_cage_p")}function Mk(t,e,n,r){const o=`[${Qr(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function Uk(t,e,n,r){const o=`[${Qr(e,r).join(",")}]`,a=r.value;let c="";const u=al(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const _=r.cells,p=Ft(e,_),g=[];for(const m of p)e.getOrthogonallyAdjacentCells(m).forEach(b=>{!p.includes(b)&&!g.includes(b)&&g.push(b)});const v=me(g,q.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${v});
`,c}function Up(t,e,n,r,i){const o=Ft(e,r.cells),a=me(o,q.BOARD),c=me(o,q.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${a}, ${c}, ${_});
`}return""}function Fk(t,e,n,r){return Up(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function $k(t,e,n,r){return Up(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function Pk(t,e,n,r){const i=Ft(e,r.cells),o=me(i,q.BOARD),a=me(i,q.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function Bk(t,e,n,r){const i=Ft(e,r.cells),o=me(i,q.BOARD),a=me(i,q.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function Hk(t,e){let n="";const r=pd(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${Qr(t,o).join(",")}]`,p=`[${Qr(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${p});
`}return n}const Wk=new Map([[d.KILLER_CAGE,Sk],[d.INVERTED_KILLER_CAGE,xk],[d.SUM_CAGE,Rk],[d.PARITY_BALANCE_CAGE,Tk],[d.SUM_CAGE_LOOK_AND_SAY,Dk],[d.DIVISIBLE_KILLER_CAGE,kk],[d.SPOTLIGHT_CAGE,Gk],[d.UNIQUE_DIGITS_CAGE,Mk],[d.VAULTED_CAGE,Uk],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,Fk],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,$k],[d.DOUBLERS_KILLER_CAGE,Pk],[d.NEGATORS_KILLER_CAGE,Bk]]);function zk(t,e,n,r){let i="";const o=Wk.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=Hk(e,a);i+=c}return i}function Yk(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function jk(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=Yk(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function Vk(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,p=c+1,[g,v,m]=jk(e,_),C=me(g,q.GALAXY_REGIONS),b=me(v,q.GALAXY_REGIONS),O=me(m,q.GALAXY_REGIONS);r+=`% galaxy ${p}
`,r+=`constraint galaxy_center_p(${C}, ${b}, ${O}, ${p});
`,r+=`constraint connected_region(${q.GALAXY_REGIONS}, ${p});
`;const w=u.value;if(!w)continue;const x=parseInt(w);r+=`constraint galaxy_sum_p(${q.BOARD}, ${q.GALAXY_REGIONS}, ${x}, ${p});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${q.GALAXY_REGIONS}, ${a});
`,r}function Kk(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Xk(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=Kk(t,c,n);if(!u)return"";const _=u[1];let p=u[0],g=[];if(o%1===0&&a%1===0?g=td(i).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(g=rd(i).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0)),!g.length)return"";const v=me(g,q.BOARD),m=me(g,q.YIN_YANG);return p+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${_};
`,p}const qk=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,Xk]]),Zk=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,Vk]]);function Qk(t,e,n,r){let i="";const o=Zk.get(n),a=qk.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function Fg(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return at(n)}function Jk(t,e){const r="["+Fg(t,e.cells).join(",")+"]",o="["+Fg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const e3=new Map([[d.CLONE_REGION,Jk]]);function t3(t,e,n,r){return sl(e,n,r,e3)}function bd(t,e){const n=Ft(t,e.cells);return at(n)}function Od(t,e,n){const i=`[${bd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Fp(t,e,n,r=""){const o=`[${bd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function n3(t,e,n,r){const o=`[${bd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=kp(a);if(!c)return"";let u="";for(const p of c){const g=parseInt(p);Number.isNaN(g)&&!t.hasVariable(p)&&(u+=`var int: ${p};
`,t.addVariable(p))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${_});
`,u}function r3(t,e,n,r){return Fp(e,r,"corner_sum_p")}function i3(t,e,n,r){return Fp(e,r,"corner_even_count_p")}function o3(t,e,n,r){return Od(e,r,"corner_sum_of_three_equals_the_other_p")}function s3(t,e,n,r){return Od(e,r,"equal_diagonal_differences_p")}function a3(t,e,n,r){return Od(e,r,"product_square_p")}const l3=new Map([[d.QUADRUPLE,n3],[d.CORNER_SUM,r3],[d.CORNER_EVEN_COUNT,i3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,o3],[d.PRODUCT_SQUARE,a3],[d.EQUAL_DIAGONAL_DIFFERENCES,s3]]);function c3(t,e,n,r){let i="";const o=l3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function ll(t,e){const n=Ft(t,e.cells);return at(n)}function u3(t,e,n){const r=ll(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function d3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function cl(t,e,n,r,i,o=""){var m;const a=ll(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:o,p=d3(t,_,n);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint ${i}(${c}, ${u}, ${g});
`,v}function _3(t,e,n,r){const i=ll(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function f3(t,e,n,r){return cl(t,e,n,r,"ratio_p","2")}function g3(t,e,n,r){return cl(t,e,n,r,"abs_difference","1")}function $g(t,e,n,r){const i=ll(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function h3(t,e,n,r){return cl(t,e,n,r,"edge_sum_p")}function p3(t,e,n,r){return cl(t,e,n,r,"edge_modulo_p")}function v3(t,e,n,r){return u3(e,r,"edge_factor_p")}function m3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=at(i),[c,u]=i;let _="";if(c.r==u.r){const v=e.getRow(c.r)[0];_=Le(v)}else if(c.c==u.c){const v=e.getCol(c.c)[0];_=Le(v)}return _?`constraint abs(${o} - ${a}) == ${_};
`:""}function E3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=at(i),c=ws(i,q.YIN_YANG),[u,_]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${_});
`}function C3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=at(i),c=ws(i,q.YIN_YANG),[u,_]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${_});
`}function ul(t,e,n){const r=Ft(t,e.cells),i=ws(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function b3(t,e,n,r){return ul(e,r,q.UNKNOWN_REGIONS)}function O3(t,e,n,r){return ul(e,r,q.FILLOMINO_REGIONS)}function I3(t,e,n,r){return ul(e,r,q.SUGURU_REGIONS)}function w3(t,e,n,r){return ul(e,r,q.CAVE_SHADING)}const L3=new Map([[d.XV,_3],[d.DIFFERENCE,g3],[d.RATIO,f3],[d.EDGE_INEQUALITY,$g],[d.ONE_WAY_DOOR,$g],[d.EDGE_SUM,h3],[d.EDGE_MODULO,p3],[d.EDGE_FACTOR,v3],[d.XY_DIFFERENCES,m3],[d.YIN_YANG_KROPKI,E3],[d.YIN_YANG_WHITE_KROPKI,C3],[d.FILLOMINO_REGION_BORDER,O3],[d.UNKNOWN_REGION_BORDER,b3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,I3],[d.EDGE_CAVE_ONE_OF_EACH,w3]]);function y3(t,e,n,r){let i="";const o=L3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function A3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Ls(t,e,n=!1){let r=Ft(t,e.cells);return n&&(r=[...new Set(r)]),at(r)}function ft(t,e,n,r=!1){const o=`[${Ls(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function nr(t,e,n,r,i,o=""){var v;const c=`[${Ls(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,_=A3(t,u,n);if(!_)return"";const p=_[1];let g=_[0];return g+=`constraint ${i}(${c}, ${p});
`,g}function Id(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${at(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${o});
`}function N3(t,e,n,r){return ft(e,r,"renban",!0)}function S3(t,e,n,r){return ft(e,r,"double_renban_p",!0)}function x3(t,e,n,r){return ft(e,r,"renrenbanban_p",!0)}function R3(t,e,n,r){return ft(e,r,"knabner_p",!0)}function T3(t,e,n,r){return ft(e,r,"renban_or_nabner_line_p",!0)}function D3(t,e,n,r){return ft(e,r,"out_of_order_consecutive_line_p")}function k3(t,e,n,r){return nr(t,e,n,r,"whispers","5")}function G3(t,e,n,r){return`constraint whispers(${`[${Ls(e,r).join(",")}]`}, 4);
`}function M3(t,e,n,r){return ft(e,r,"strictly_increasing")}function U3(t,e,n,r){return ft(e,r,"fuzzy_thermo_p")}function F3(t,e,n,r){return ft(e,r,"increasing")}function $3(t,e,n,r){return nr(t,e,n,r,"custom_thermo_p")}function P3(t,e,n,r){return ft(e,r,"palindrome")}function B3(t,e,n,r){return nr(t,e,n,r,"sum_line_p")}function H3(t,e,n,r){return ft(e,r,"xv_line_p")}function W3(t,e,n,r){return nr(t,e,n,r,"at_least_x_line_p","10")}function z3(t,e,n,r){return nr(t,e,n,r,"product_line_p")}function Y3(t,e,n,r){return nr(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function j3(t,e,n,r){return ft(e,r,"adjacent_multiples_line_p")}function V3(t,e,n,r){return ft(e,r,"index_line_p")}function K3(t,e,n,r){return ft(e,r,"zipper_line_p")}function X3(t,e,n,r){return Id(e,r,"segmented_sum_line_p")}function q3(t,e,n,r){return ft(e,r,"segmented_sum_and_renban_line_p")}function Z3(t,e,n,r){return Id(e,r,"n_consecutive_renban_line_p")}function Q3(t,e,n,r){return Id(e,r,"n_consecutive_fuzzy_sum_line_p")}function J3(t,e,n,r){const i=Ft(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const _=i[u],p=e.getRow(_.r),g=me(p,q.BOARD),v=`cycle_${n}_${u}`;a.push(v);const m=_.c+1;o+=`var int: ${v} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function e5(t,e,n,r){return ft(e,r,"adjacent_differences_count_line_p")}function t5(t,e,n,r){return ft(e,r,"same_parity_line_p")}function n5(t,e,n,r){return nr(t,e,n,r,"renban_or_whispers_p","5")}function r5(t,e,n,r){return ft(e,r,"alldifferent",!0)}function i5(t,e,n,r){return ft(e,r,"repeated_digits_line_p")}function o5(t,e,n,r){return ft(e,r,"superfuzzy_arrow_p")}function s5(t,e,n,r){return ft(e,r,"ambiguous_arrow_p",!0)}function a5(t,e,n,r){return ft(e,r,"headless_arrow_p")}function l5(t,e,n,r){return nr(t,e,n,r,"unimodular_line_p","3")}function c5(t,e,n,r){return nr(t,e,n,r,"modular_line_p","3")}function u5(t,e,n,r){return nr(t,e,n,r,"modular_or_unimodular_line_p","3")}function d5(t,e,n,r){return ft(e,r,"arithmetic_sequence_line_p")}function _5(t,e,n,r){return ft(e,r,"odd_even_oscillator_line_p")}function f5(t,e,n,r){return nr(t,e,n,r,"high_low_oscillator_line_p","5")}function g5(t,e,n,r){return ft(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function h5(t,e,n,r){return ft(e,r,"look_and_say_line_p",!0)}function p5(t,e,n,r){const i=Ft(e,r.cells);function o(g){const v=[];let m=null;for(const C of g)C.r!=m?(v.push([C]),m=C.r):v[v.length-1].push(C);return v}const a=o(i);if(a.length<2)return"";const c=a[0],_=`[${at(c).join(",")}]`;let p="";for(let g=1;g<a.length;g++){const v=a[g],C=`[${at(v).join(",")}]`;p+=`constraint sum(${C}) == sum(${_});
`}return p}function v5(t,e,n,r){return ft(e,r,"between_line_p")}function m5(t,e,n,r){return ft(e,r,"tightrope_line_p")}function E5(t,e,n,r){return ft(e,r,"double_arrow_p")}function C5(t,e,n,r){return ft(e,r,"split_peas_p")}function b5(t,e,n,r){return ft(e,r,"parity_count_line_p")}function O5(t,e,n,r){return ft(e,r,"product_of_ends_equals_sum_of_line_p")}function $p(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function I5(t,e,n,r){let i="";const o=Ft(e,r.cells),a=$p(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const p=`constraint sum(${me(u,q.BOARD)}) == ${c};
`;i+=p}return i}function w5(t,e,n,r){return`constraint entropic_line_p(${`[${Ls(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function L5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Ls(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function y5(t,e,n,r){return ft(e,r,"peapods_p")}function A5(t,e,n,r){const i=Ft(e,r.cells),o=me(i,q.BOARD),a=me(i,q.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function N5(t,e,n,r){const i=Ft(e,r.cells),o=me(i,q.BOARD),a=me(i,q.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function wd(t,e,n){const r=Ft(t,e.cells),i=me(r,q.BOARD),o=me(r,q.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function S5(t,e,n,r){return wd(e,r,"yin_yang_unshaded_entropic_line_p")}function x5(t,e,n,r){return wd(e,r,"yin_yang_indexing_line_coloring_p")}function R5(t,e,n,r){return wd(e,r,"yin_yang_region_sum_line_p")}function T5(t,e,n,r){const i=Ft(e,r.cells),o=me(i,q.VALUES_GRID),a=me(i,q.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function Ld(t,e,n){const r=Ft(t,e.cells),i=me(r,q.VALUES_GRID);return`constraint ${n}(${i});
`}function D5(t,e,n,r){return Ld(e,r,"between_line_p")}function k5(t,e,n,r){return Ld(e,r,"double_arrow_p")}function G5(t,e,n,r){return Ld(e,r,"strictly_increasing")}function M5(t,e,n,r){const i=Ft(e,r.cells),o=$p(i);if(o.sort((_,p)=>p.length-_.length),o.length<=1)return"";let a="";const c=o[0],u=me(c,q.VALUES_GRID);for(const _ of o.slice(1)){const p=me(_,q.VALUES_GRID),g=`constraint subset_p(${u}, ${p});
`;a+=g}return a}const U5=new Map([[d.THERMOMETER,M3],[d.FUZZY_THERMOMETER,U3],[d.SLOW_THERMOMETER,F3],[d.CUSTOM_THERMOMETER,$3],[d.RENBAN_LINE,N3],[d.DOUBLE_RENBAN_LINE,S3],[d.RENRENBANBAN_LINE,x3],[d.NABNER_LINE,R3],[d.WHISPERS_LINE,k3],[d.DUTCH_WHISPERS,G3],[d.RENBAN_OR_WHISPERS_LINE,n5],[d.RENBAN_OR_NABNER_LINE,T3],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,D3],[d.N_CONSECUTIVE_RENBAN_LINE,Z3],[d.PALINDROME,P3],[d.SUM_LINE,B3],[d.PRODUCT_LINE,z3],[d.XV_LINE,H3],[d.AT_LEAST_X_LINE,W3],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,Y3],[d.SAME_PARITY_LINE,t5],[d.ADJACENT_MULTIPLES_LINE,j3],[d.ADJACENT_DIFFERENCES_COUNT_LINE,e5],[d.LOOK_AND_SAY_LINE,h5],[d.ROW_SUM_LINE,p5],[d.INDEX_LINE,V3],[d.ZIPPER_LINE,K3],[d.SEGMENTED_SUM_LINE,X3],[d.SEGMENTED_SUM_AND_RENBAN_LINE,q3],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,Q3],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,g5],[d.SUPERFUZZY_ARROW,o5],[d.AMBIGUOUS_ARROW,s5],[d.HEADLESS_ARROW,a5],[d.ARITHMETIC_SEQUENCE_LINE,d5],[d.ODD_EVEN_OSCILLATOR_LINE,_5],[d.HIGH_LOW_OSCILLATOR_LINE,f5],[d.UNIQUE_VALUES_LINE,r5],[d.REPEATED_DIGITS_LINE,i5],[d.UNIMODULAR_LINE,l5],[d.MODULAR_LINE,c5],[d.MODULAR_OR_UNIMODULAR_LINE,u5],[d.REGION_SUM_LINE,I5],[d.ENTROPIC_LINE,w5],[d.ENTROPIC_OR_MODULAR_LINE,L5],[d.ROW_CYCLE_THERMOMETER,J3],[d.PEAPODS,y5],[d.BETWEEN_LINE,v5],[d.TIGHTROPE_LINE,m5],[d.DOUBLE_ARROW_LINE,E5],[d.SPLIT_PEAS,C5],[d.PARITY_COUNT_LINE,b5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,O5],[d.DOUBLERS_THERMOMETER,G5],[d.DOUBLERS_BETWEEN_LINE,D5],[d.DOUBLERS_DOUBLE_ARROW_LINE,k5],[d.INDEXER_CELLS_REGION_SUBSET_LINE,M5],[d.YIN_YANG_SHADED_WHISPERS_LINE,A5],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,S5],[d.YIN_YANG_UNSHADED_MODULAR_LINE,N5],[d.YIN_YANG_REGION_SUM_LINE,R5],[d.YIN_YANG_INDEXING_LINE_COLORING,x5],[d.GOLDILOCKS_ZONE_REGION_SUM,T5]]);function F5(t,e,n,r){let i="";const o=U5.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function dl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return at(i)}function ys(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function qn(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${dl(e,n).join(",")}]`,u=n.value,_=ys(t,u,i,o);if(!_)return"";const p=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${p});
`,g}function $5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${dl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,p=Math.min(..._),g=Math.max(..._),v=ys(t,u,i,o);if(!v)return"";const m=v[1];let C=v[0];return C+=`constraint sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,C}function P5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${dl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,p=Math.min(..._),g=Math.max(..._),v=ys(t,u,i,o);if(!v)return"";const m=v[1];let C=v[0];const b=`var_bool_${n}_0`,O=`var_bool_${n}_1`;return C+=`var bool: ${b} = sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,C+=`var bool: ${O} = x_sum_p(${c}, ${m});
`,C+=`constraint 'xor'(${b}, ${O});
`,C}function B5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=dl(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,p=ys(t,_,i,o);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint x_index_p(${c}, ${u}, ${g});
`,v}function H5(t,e,n,r){return qn(t,e,r,"x_sum_p")}function W5(t,e,n,r){return qn(t,e,r,"shortsighted_x_sum_p")}function z5(t,e,n,r){return qn(t,e,r,"broken_x_sum_p")}function Y5(t,e,n,r){return qn(t,e,r,"shifted_x_sum_p")}function j5(t,e,n,r){return qn(t,e,r,"skyscrapers_p")}function V5(t,e,n,r){return qn(t,e,r,"x_sum_skyscrapers_p")}function K5(t,e,n,r){return qn(t,e,r,"battlefield_p")}function X5(t,e,n,r){return qn(t,e,r,"rising_streak_p")}function q5(t,e,n,r){return qn(t,e,r,"outside_consecutive_sum_p")}function Z5(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=me(a,q.BOARD),u=me(a,q.CELL_CENTER_LOOP),_=r.value;if(_){const p=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${p});
`}return""}function Q5(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=me(c,q.BOARD),_=me(c,q.UNKNOWN_REGIONS),p=r.value,g=ys(t,p,i,o);if(!g)return"";const v=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${v});
`,m}function J5(t,e,n,r){return qn(t,e,r,"little_killer_sum_p")}function eG(t,e,n,r){return qn(t,e,r,"little_killer_product_p")}function tG(t,e,n,r){return qn(t,e,r,"x_omit_little_killer_sum_p")}function nG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=me(a,q.BOARD),u=me(a,q.YIN_YANG),_=r.value;if(_){const p=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${p});
`}return""}function rG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=me(a,q.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}const iG=new Map([[d.SANDWICH_SUM,$5],[d.X_SUM,H5],[d.SHORTSIGHTED_X_SUM,W5],[d.BROKEN_X_SUM,z5],[d.SHIFTED_X_SUM,Y5],[d.SKYSCRAPERS,j5],[d.X_SUM_SKYSCRAPERS,V5],[d.X_INDEX,B5],[d.BATTLEFIELD,K5],[d.SANDWICH_SUM_XOR_X_SUM,P5],[d.RISING_STREAK,X5],[d.OUTSIDE_CONSECUTIVE_SUM,q5],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,nG],[d.LOOPWICHES,Z5],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,Q5],[d.LITTLE_KILLER_SUM,J5],[d.LITTLE_KILLER_PRODUCT,eG],[d.X_OMIT_LITTLE_KILLER_SUM,tG],[d.NEGATORS_LITTLE_KILLER_SUM,rG]]);function oG(t,e,n,r){let i="";const o=iG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function sG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=me(o,q.SASHIGANE),c=me(o,q.SASHIGANE_BENDS),u=Le(r),_=mt(r,q.SASHIGANE);let p=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return p+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,p}function aG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+at(o).join(",")+"]",u=me(o,q.CELL_CENTER_LOOP),_=Le(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const lG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,sG],[d.THERMO_SIGHTLINE_LOOP_ARROW,aG]]);function cG(t,e,n,r){return sl(e,n,r,lG)}function Pp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Le(i);return`constraint ${n}(${o});
`}function uG(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Bp(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Le(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function Co(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=Le(o),u=ol(t,o).map(g=>me(g,n)),_=mt(o,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function dG(t,e,n,r){return Pp(e,r,"odd_p")}function _G(t,e,n,r){return Pp(e,r,"even_p")}function fG(t,e,n,r){return Bp(e,r,"low_digit_p","5")}function gG(t,e,n,r){return Bp(e,r,"high_digit_p","5")}function Hp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Le(i),a=t.getNeighboorCells(i),c=me(a,q.BOARD);return`constraint ${n}(${c}) == ${o};
`}function hG(t,e,n,r){return Hp(e,r,"odd_count")}function pG(t,e,n,r){return Hp(e,r,"even_count")}function vG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getNeighboorCells(o);c.push(o);const u=me(c,q.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function mG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${me(c,q.BOARD)}, ${a});
`}function EG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${me(c,q.BOARD)}, ${a});
`}function CG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=me(a,q.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function bG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=me(a,q.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function OG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=o.r+1,u=o.c+1;if(o.region!==null){const p=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${p};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function IG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const p=Le(a),g=Le(c),v=Le(u),m=Le(_);return`constraint groups_opposite_parity_p([${p},${g}], [${v},${m}]);
`}function yd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=Le(i),[a,c,u,_]=gd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${_});
`}function wG(t,e,n,r){return yd(e,r,"is_watchtower_p")}function LG(t,e,n,r){return yd(e,r,"is_not_watchtower_p")}function yG(t,e,n,r){return yd(e,r,"farsight_p")}function AG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),[c,u,_,p]=gd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${p}, 9);
`}function NG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getRow(o.r),u="["+at(c).join(",")+"]",_=e.getCol(o.c),p="["+at(_).join(",")+"]",[g,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${p}, ${g}, ${v}, ${a});
`}function Wp(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const p=Le(_),g=t.getOrthogonallyAdjacentCells(_).filter(C=>!a.has(C)),v=me(g,q.BOARD),m=`constraint ${n}(${v}, ${p});
`;i+=m}return i}function SG(t,e,n){return Wp(e,n,"maximum_p")}function xG(t,e,n){return Wp(e,n,"minimum_p")}function RG(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function TG(t,e,n){const r=Object.values(n);let i="";const o=r.map(v=>v.cell),a=new Set(o.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v)),c=e.getAllCells().filter(v=>!a.has(v)),_=`${at([...a]).join(`,
	`)}`,g=`${at([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function DG(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${at([...a]).join(`,
	`)}`,p=`${ws([...a],q.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${q.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${p}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${q.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const v=mt(g,q.COUNTING_CIRCLES_COLORS);i+=`constraint ${v} == 0;
`}for(const g of r){const v=g.cell,m=e.getCell(v.r,v.c);if(!m)continue;const C=Le(m),b=mt(m,q.COUNTING_CIRCLES_COLORS),O=g.value;O?i+=`constraint ${b} == ${O};
`:i+=`constraint ${b} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${C}, ${b}) == ${C};
`}return i+=`
`,i}function kG(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function GG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o);return`constraint seen_even_count_p(${ol(e,o).map(p=>me(p,q.BOARD)).join(", ")}, ${a});
`}function MG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o);return`constraint seen_odd_count_p(${ol(e,o).map(p=>me(p,q.BOARD)).join(", ")}, ${a});
`}function UG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${me(u,q.YIN_YANG)}, ${a});
`}function FG(t,e,n,r){return Co(e,r,q.YIN_YANG,"yin_yang_seen_unshaded_p")}function $G(t,e,n,r){return Co(e,r,q.YIN_YANG,"yin_yang_seen_shaded_p")}function PG(t,e,n,r){return Co(e,r,q.YIN_YANG,"yin_yang_seen_same_shade_p")}function BG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=mt(o,q.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),_=me(u,q.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function HG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getNeighboorCells(o);return`constraint count(${me(c,q.YIN_YANG)}, 1) == ${a};
`}function WG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),_=e.getCol(o.c),p=me(u,q.TWO_CONTIGUOUS_REGIONS),g=me(_,q.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${p}, ${g}, ${a}, ${c});
`}function zG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getRow(o.r),u=e.getCol(o.c),_=me(c,q.UNKNOWN_REGIONS),p=me(u,q.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${p}, ${a});
`}function YG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let _=`constraint nurimisaki_unshaded_endpoint_p(${me(c,q.NURIMISAKI)}, ${a});
`;return _+=Co(e,r,q.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function jG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=mt(o,q.SASHIGANE),u=mt(o,q.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function VG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=mt(o,q.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function KG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${mt(o,q.CELL_CENTER_LOOP)} == 1;
`:""}function XG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${mt(o,q.CELL_CENTER_LOOP)} == 0;
`:""}function qG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${me(u,q.CELL_CENTER_LOOP)}) == ${a};
`}function ZG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=mt(o,q.CAVE_SHADING),u=ol(e,o),_=[];for(const g of u){const v=me(g,q.CAVE_SHADING);_.push(v)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function QG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Le(o),p=mt(o,q.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),v=me(g,q.BOARD),m=me(g,q.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${p});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(o),b=me(C,q.BOARD),O=me(C,q.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${b}, ${O}, ${p});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[He.NE,He.NW,He.SE,He.SW],x=[];for(const z of w)e.getCellsInDirection(o.r,o.c,z).forEach(B=>x.push(B));const k=me(x,q.BOARD),U=me(x,q.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${U}, ${p});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function JG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Le(o),p=mt(o,q.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),v=me(g,q.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${p}) >= ${c};
`;const m=[He.N,He.S,He.E,He.W],C=[];for(const b of m){const O=e.getCellsInDirection(o.r,o.c,b);if(!O.length)continue;const w=me(O,q.BOARD),x=me(O,q.UNKNOWN_REGIONS),k=`in_arrow_${n}_${b}`,U=`in_arrow_${n}_${b}[1]`;C.push(U),u+=`array[index_set(${w})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${x}, ${k}, ${_}, ${p});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}function eM(t,e,n,r){return Co(e,r,q.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function tM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function nM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function rM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${mt(o,q.CONNECT_FOUR)});
`:""}function iM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${mt(o,q.CONNECT_FOUR)});
`:""}function oM(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const p=uG(t,_,o);if(!p)continue;const g=p[1];r+=p[0];const v=mt(u,q.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${q.BOARD}, ${q.NURIKABE_REGIONS}, ${v}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${q.NURIKABE_REGIONS})) == ${i+1};
`,r}function sM(t,e,n,r){return Co(e,r,q.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function aM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=Le(o),c=mt(o,q.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${q.NURIKABE_REGIONS}, ${c}, ${a});
`}function lM(t,e,n){let r="";const i=pd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,p]of u.flatMap((g,v)=>u.slice(v+1).map(m=>[g,m]))){const g=_.cell,v=p.cell,m=e.getCell(g.r,g.c),C=e.getCell(v.r,v.c);if(!m||!C)continue;const b=mt(m,q.BOARD),O=mt(C,q.BOARD);r+=`constraint ${b} == ${O};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=me(a,q.BOARD);return r+=`constraint alldifferent(${c});
`,r}const cM=new Map([[d.ODD,dG],[d.EVEN,_G],[d.LOW_DIGIT,fG],[d.HIGH_DIGIT,gG],[d.ODD_MINESWEEPER,hG],[d.EVEN_MINESWEEPER,pG],[d.DIAGONALLY_ADJACENT_SUM,EG],[d.ORTHOGONAL_SUM,mG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,vG],[d.FRIENDLY_CELL,OG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,IG],[d.WATCHTOWER,wG],[d.NOT_WATCHTOWER,LG],[d.FARSIGHT,yG],[d.RADAR,AG],[d.INDEXING_COLUMN,CG],[d.INDEXING_ROW,bG],[d.SANDWICH_ROW_COL_COUNT,NG],[d.SEEN_EVEN_COUNT,GG],[d.SEEN_ODD_COUNT,MG],[d.YIN_YANG_MINESWEEPER,UG],[d.YIN_YANG_SEEN_UNSHADED_CELLS,FG],[d.YIN_YANG_SEEN_SHADED_CELLS,$G],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,PG],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,BG],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,HG],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,WG],[d.SEEN_REGION_BORDERS_COUNT,zG],[d.NURIMISAKI_UNSHADED_ENDPOINTS,YG],[d.NURIKABE_SEEN_WATERWAY_CELLS,sM],[d.NURIKABE_ISLAND_SIZE_CELL,aM],[d.SASHIGANE_BEND_REGION_COUNT,jG],[d.SASHIGANE_REGION_SUM,VG],[d.CELL_ON_THE_LOOP,KG],[d.CELL_NOT_ON_THE_LOOP,XG],[d.COUNT_LOOP_NEIGHBOUR_CELLS,qG],[d.CAVE_CLUE,ZG],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,QG],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,JG],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,eM],[d.DIRECTED_PATH_START,tM],[d.DIRECTED_PATH_END,nM],[d.CONENCT_FOUR_RED,rM],[d.CONNECT_FOUR_YELLOW,iM]]),uM=new Map([[d.MAXIMUM,SG],[d.MINIMUM,xG],[d.COUNTING_CIRCLES,RG],[d.REVERSE_COUNTING_CIRCLES,TG],[d.COLORED_COUNTING_CIRCLES,DG],[d.UNIQUE_CELLS,kG],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,oM],[d.TELEPORT,lM]]);function dM(t,e,n,r){let i="";const o=cM.get(n),a=uM.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function _M(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=mt(r,q.UNKNOWN_REGIONS),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p),v=me(g,q.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(p=>`count_different(${p}, ${o})`).join(" + ")} == ${i};
`}function fM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=mt(r,q.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),p=me(_,q.BOARD),g=me(_,q.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${p}, ${g}) == ${i};
`}return c}function gM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=me(u,q.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function hM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=mt(r,q.YIN_YANG),a=e.directions,c=[];for(const _ of a){const p=t.getCellsInDirection(r.r,r.c,_),g=me(p,q.YIN_YANG),v=me(p,q.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function pM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${me(_,q.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function vM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${me(_,q.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function mM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=mt(r,q.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const p=t.getCellsInDirection(r.r,r.c,_),v=`count(${me(p,q.GALAXY_REGIONS)}, ${o})`;c.push(v)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function EM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),p="["+at(u).join(",")+"]";a+=`constraint hot_arrows_p(${p}, ${i});
`}return a}function CM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=me(u,q.BOARD);a+=`constraint cold_arrows_p(${_}, ${i});
`}return a}function bM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),o=mt(r,q.CONNECT_FOUR),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p);c.push(...g)}return c.length===0?"":`constraint count(${me(c,q.CONNECT_FOUR)}, ${o}) == ${i};
`}const OM=new Map([[d.HOT_ARROWS,EM],[d.COLD_ARROWS,CM],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,_M],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,fM],[d.LOOP_CELL_COUNT_ARROWS,vM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,hM],[d.YIN_YANG_COUNT_SHADED_CELLS,gM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,mM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,pM],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,bM]]);function IM(t,e,n,r){return sl(e,n,r,OM)}function wM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function LM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function yM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const AM=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,wM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,LM],[d.FORBIDDEN_KNIGHT_SUM,yM]]);function NM(t,e,n,r){return sl(e,n,r,AM)}const SM=[Qk,dM,cG,IM,y3,c3,F5,Nk,zk,oG,t3,NM];function xM(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of SM){let u=c(e,i,o,a);u=_t(u,`${o}`),n+=u}return n}function RM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function TM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function DM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function kM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function GM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function MM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${o});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${o});
`,a}function UM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function FM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function $M(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function PM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function BM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function qi(t,e,n,r){const i=t.grid;let o="";o+=`% Exactly ${e} per row 
`;const a=i.nRows;for(let p=0;p<a;p++){const g=i.getRow(p),v=r(g);o+=`constraint count_eq(${v}, ${n}, ${e});
`}o+=`
% Exactly ${e} per column 
`;const c=i.nCols;for(let p=0;p<c;p++){const g=i.getCol(p),v=r(g);o+=`constraint count_eq(${v}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){o+=`
% Exactly ${e} per region 
`;const p=i.getUsedRegions();for(const g of p){const v=i.getRegion(g),m=r(v);o+=`constraint count_eq(${m}, ${n}, ${e});
`}}return o}function HM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=qi(n,1,!0,a=>me(a,q.DOUBLERS)),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function WM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=qi(n,1,!0,c=>me(c,q.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function zM(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function YM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=q.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=qi(n,2,!0,c=>me(c,o)),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function jM(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=q.CAVE_SHADING,a=q.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function VM(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=q.CAVE_SHADING,a=q.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${q.BOARD}, ${c});
`,u}function KM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=q.GALAXY_REGIONS,a=q.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function XM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function qM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function ZM(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Ug.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of Ug.entries()){const _=u.length,p=u[0].length,g=`pentomino_${c}`;a+=`array[1..${_}, 1..${p}] of 0..1: ${g} = ${hd(u)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${c});
`}return a}function QM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=q.LITS_SHADING,a=q.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,c+=`constraint lits_shading_p(${o});
`,c+=`constraint lits_shading_ids_p(${o}, ${a});
`,c+=`constraint lits_region_and_ids_p(${q.BOARD_REGIONS}, ${a});
`,c+=`constraint lits_tetromino_shapes_p(${a});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const _ of u){const p=r.getRegion(_),v=`constraint count_eq(${me(p,q.LITS_SHADING)}, 1, 4);
`;c+=v}return c}function JM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(p=>p.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=q.LITS_SHADING,a=q.LITS_REGIONS,c=q.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const p of _){const g=r.getRegion(p),m=`constraint count_eq(${me(g,q.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function eU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=q.LITS_SHADING,a=q.STAR_BATTLE,c=q.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=qi(n,2,1,_=>me(_,q.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=qi(n,1,1,_=>me(_,q.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=qi(n,1,2,_=>me(_,q.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${o}, ${c});
`,u}function Ut(t,e,n){return t*n+e+1}function tU(t){const e=t.grid;function n(c,u){const _=[],p=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Ut(u.r+g,u.c,e.nCols);_.push([p,v]),_.push([v,p])}return _}function r(c,u){const _=[],p=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Ut(u.r,u.c+g,e.nCols);_.push([p,v]),_.push([v,p])}return _}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=td(_).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0);let v=Ut(g[0].r,g[0].c,e.nCols),m=Ut(g[3].r,g[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Ut(g[1].r,g[1].c,e.nCols),m=Ut(g[2].r,g[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let _=0;_<u.length-1;_++){const p=rx(zh(u[_],u[_+1]),.5),v=rd(p).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0);if(v.length!==2)continue;const[m,C]=v;if(m.r===C.r){let b=n(m,C);i.push(...b),b=n(C,m),i.push(...b)}else if(m.c===C.c){let b=r(m,C);i.push(...b),b=r(C,m),i.push(...b)}}}return i}function nU(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,p=o.value,g=Ut(u.r,u.c,e.nCols),v=Ut(_.r,_.c,e.nCols);p==="<"?n.push([g,v]):p===">"&&n.push([v,g])}return n}function rU(t){const e=[];for(const n of t.getAllCells()){const r=Ut(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Ut(o.r,o.c,t.nCols);e.push([r,a])}}return e}function iU(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const _=pd(a);let p=1;for(const g of _.values())if(!(g.length<=1)){for(const[v,m]of g.flatMap((C,b)=>g.slice(b+1).map(O=>[C,O]))){const C=Ut(v.cell.r,v.cell.c,e.nCols),b=Ut(m.cell.r,m.cell.c,e.nCols);n.push([C,b]),n.push([b,C]),u[v.cell.r][v.cell.c]=p,u[m.cell.r][m.cell.c]=p}for(const v of g){const m=Ut(v.cell.r,v.cell.c,e.nCols);r.push(m)}p++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function oU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=rU(r);const c=tU(n),u=nU(n);c.push(...u);const _=n.localConstraints;a=a.filter(w=>!c.some(x=>w[0]===x[0]&&w[1]===x[1]));const p=iU(n);if(p.tp_edges.length){a.push(...p.tp_edges);const w=hd(p.tp_arr),x=p.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${x}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,v=a.length,m="["+a.map(w=>w[0]).join(",")+"]",C="["+a.map(w=>w[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${C};
`,o+=`var 1..${g}: dpath_source;
`,o+=`var 1..${g}: dpath_target;
`,o+=`array[1..${g}] of var bool: dpath_ns;
`,o+=`array[1..${v}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let x=0;x<r.nCols-1;x++){const k=r.getCell(w,x),U=r.getCell(w,x+1),z=r.getCell(w+1,x),Y=r.getCell(w+1,x+1);if(!k||!U||!z||!Y)continue;const B=Ut(k.r,k.c,r.nCols),X=Ut(U.r,U.c,r.nCols),ee=Ut(z.r,z.c,r.nCols),ce=Ut(Y.r,Y.c,r.nCols),re=[[B,ce],[ce,B],[X,ee],[ee,X]].map(Ce=>a.findIndex(be=>Ce[0]===be[0]&&Ce[1]===be[1])).filter(Ce=>Ce!==-1);if(re.length){const Ce=re.map(be=>`dpath_es[${be+1}]`).join(",");o+=`constraint sum([${Ce}]) <= 1;
`}}const b=_.get(d.TELEPORT),O=b?Object.values(b):[];if(p.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const w of O){const x=w.cell,k=r.getCell(x.r,x.c);if(!k)continue;const U=r.getNeighboorCells(k),z=Ut(k.r,k.c,r.nCols),Y=[];for(const X of U){if(O.some(te=>te.cell.r===X.r&&te.cell.c==X.c&&te.value===w.value))continue;const ce=Ut(X.r,X.c,r.nCols);Y.push([z,ce]),Y.push([ce,z])}const B=Y.map(X=>a.findIndex(ee=>X[0]===ee[0]&&X[1]===ee[1])).filter(X=>X!==-1);if(B.length){const X=B.map(ee=>`dpath_es[${ee+1}]`).join(",");o+=`constraint sum([${X}]) <= 1;
`}}}return o}function sU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function aU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function lU(t,e){let n="";return n+=`constraint connect_four_draw_p(${q.CONNECT_FOUR});
`,n}function cU(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${q.BOARD}, ${q.CONNECT_FOUR});
`,n}function uU(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${q.BOARD}, ${q.CONNECT_FOUR}, 3);
`,n}const dU=new Map([[d.FILLOMINO,zM],[d.CAVE,jM],[d.GALAXIES,KM],[d.YIN_YANG,RM],[d.NURIMISAKI,TM],[d.NURIKABE,DM],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,kM],[d.TWO_CONTIGUOUS_REGIONS,GM],[d.UNKNOWN_REGIONS,MM],[d.SASHIGANE,UM],[d.CELL_CENTER_LOOP_NO_TOUCHING,FM],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,$M],[d.NOT_LOOP_SIZED_REGIONS,PM],[d.MODULAR_LOOP,BM],[d.DOUBLERS,HM],[d.NEGATORS,WM],[d.GOLDILOCKS_ZONE,qM],[d.NEXUS,XM],[d.INDEXER_CELLS,YM],[d.PENTOMINO_TILLING,ZM],[d.LITS,QM],[d.CAVE_LITS,JM],[d.LITS_BLACK_WHITE_STAR_BATTLE,eU],[d.RENBAN_CAVES,VM],[d.MAZE_DIRECTED_PATH,oU],[d.CHAOS_CONSTRUCTION_SUGURU,sU],[d.CONNECT_FOUR,aU],[d.CONNECT_FOUR_DRAW,lU],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,cU],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,uU]]);function _U(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=dU.get(i);if(!a)continue;let c=a(t,i);c=_t(c,`${i}`),e+=c}return e}function fU(){return`
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

function array[int] of var bool: sandwich_bools(array[int] of var int: arr, int: a, int: b) =
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
    var $$T: label) =
    let {
        constraint assert(
            index_set(arr) = index_set(labels),
            "Arrays must have same index set"
        )
    } in
    sum(i in index_set(arr) where labels[i] == label)(arr[i]);

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

`+`predicate multisets_equal_p(array[int] of var int: arr1, array[int] of var int: arr2) =
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
    array[int] of var bool: row_bools = sandwich_bools(row_arr, 1, 9),
    array[int] of var bool: col_bools = sandwich_bools(col_arr, 1, 9),
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
        var int: odd_sum = sum(i in index_set(arr) where arr[i] mod 2 = 1)(arr[i]),
        var int: even_sum = sum(i in index_set(arr) where arr[i] mod 2 = 0)(arr[i])
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

`+`function var int: sandwich_sum(array[int] of var int: arr, int: a, int: b) =
    sum(i in index_set(arr)) (arr[i] * bool2int(sandwich_bools(arr, a, b)[i]));

predicate sandwich_sum_p(array[int] of var int: arr, var int: val, int: a, int: b) =
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

`+`function array[int] of var int: regions_idxs_f(array[int, int] of var int: regions, int: n_regions) =
  [first_idx(array1d(regions), reg_i) | reg_i in 0..(n_regions-1)];

predicate unknown_regions_ordering_p(array[int, int] of var int: regions, int: n_regions) = 
    let {
        array[int] of var int: regions_idxs = regions_idxs_f(regions, n_regions);
    } in (
        strictly_increasing(regions_idxs)
    );
    
predicate unknown_sudoku_regions_p(
    array[int, int] of var int: regions,
    int: n_regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
    array[int] of int: reg_idxs = [i | i in 0..(n_regions-1)];
} in (
    forall (reg_i in 0..(n_regions-1)) (
        connected_region(regions, reg_i)
        % each region has exactly n_regions cells
        /\\ count(array1d(regions), reg_i) = n_regions
        % order regions lexicographically
        /\\ value_precede_chain(reg_idxs, array1d(regions))
    )
);
    
predicate no_repeats_in_unknown_regions_p(
    array[int, int] of var int: grid, 
    array[int, int] of var int: regions,
    set of int: allowed_vals,
    int: n_regions
) =
    forall(reg_i in 0..(n_regions-1)) (
        % for each region, the counts of each digit is at most 1
        forall(val in allowed_vals) (
            conditional_count_f(array1d(grid), array1d(regions), val, reg_i) <= 1
        )
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
) =  let {
        set of int: rows = index_set_1of2(shading);
        set of int: cols = index_set_2of2(shading);
        int: n_rows = length(rows);
        int: n_cols = length(cols);
        int: g_size = n_rows * n_cols;
        array [rows, cols] of var 0..g_size: same_before;
        array[rows, cols] of var 0..g_size: when;
        array[int] of int: reg_idxs = [i | i in 1..g_size];
    } in
    % shaded cells (1 = loop) correspond to region 0
    forall(r in rows, c in cols) (
        shading[r,c] = 1 <-> regions[r, c] = 0
    ) /\\
    forall(r in rows, c in cols) (
        shading[r,c] = 0 <-> regions[r, c] != 0
    )
    % adjacent unshaded cells must belong to the same region (horiz adjacent)
    /\\ forall (r in rows, c in cols where c > 0) (
        let { 
            var int: id1 = regions[r, c - 1], 
            var int: id2 = regions[r, c] 
        } in (shading[r,c] = 0 /\\ shading[r, c - 1] = 0) -> id1 = id2
    ) /\\
    % adjacent shaded cells must belong to the same region (vertical adjacent)
    forall (r in rows, c in cols where r > 0) (
        let { var int: id1 = regions[r - 1, c], var int: id2 = regions[r, c] } in
        (shading[r,c] = 0 /\\ shading[r - 1, c] = 0) -> id1 = id2
    )
    % we need to remove ambiguity from the region numbering 
    % use the numbering each region by the id of the first element of that region
    % /\\ same_before_p(regions, same_before)
    /\\ forall (r in rows, c in cols) (
        if same_before[r,c] = 0 /\\ regions[r, c] != 0 then
            when[r,c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1
        else
            true
        endif
    )
    /\\ forall (r in rows, c in cols) (
        regions[r, c] = 0 -> when[r,c] = 0
    )
    /\\ forall (r in rows, c in cols) (
        regions[r, c] != 0 -> when[r,c] >= 1
    )
    % floodfilling
    % Each cell is either the "root" of an area or is an extension of a
    % neighbouring cell.
    /\\ forall (r in rows, c in cols) (
        ( when[r, c] = 0 ) \\/
        ( when[r, c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1 ) \\/
        ( when[r, c] > 1 /\\
            ( cave_joins(r, c, r - 1, c, when, regions) \\/
              cave_joins(r, c, r + 1, c, when, regions) \\/
              cave_joins(r, c, r, c - 1, when, regions) \\/ 
              cave_joins(r, c, r, c + 1, when, regions)
            )
        )
    )
    /\\ fillomino_restrict_floodfill_p(when, regions)
    /\\ forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
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

predicate fillomino_joins(
    int: r1, int: c1, int: r2, int: c2,
    array[int, int] of var int: grid,
    array[int, int] of var int: when,
    array[int, int] of var int: area) =
    if in_bounds_2d(r2, c2, grid) then
        when[r1, c1] = 1 + when[r2, c2] /\\ 
        area[r1, c1] = area[r2, c2] /\\ 
        grid[r1, c1] = grid[r2, c2]
    else
        false
    endif;

% restrict the floodfilling order to remove ambigous solutions
predicate fillomino_restrict_floodfill_p(
    array[int, int] of var int: when,
    array[int, int] of var int: area,
) = 
    let {
        set of int: rows = index_set_1of2(area);
        set of int: cols = index_set_2of2(area);
    } in (
        forall (r in rows, c in cols where when[r,c] > 1)(
            % when when[r, c] > 1, it is equal to the minimum adjacent element in the same region + 1
            when[r, c] = min([when[r+i, c+j] 
                | i in -1..1, j in -1..1 
                    where (
                        in_bounds_2d(r+i, c+j, when) /\\ 
                        orth_adjacent_2d(r,c,r+i,c+j) /\\
                        area[r,c] == area[r+i, c+j]
                    )
                ]) + 1
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
        grid[r,c] == 1 -> regions[r, c] = (r * n_cols + c + 1)
    )
    /\\ forall(r in rows, c in cols)(
        grid[r,c] == 1 -> forall(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            regions[r,c] != regions[t.1, t.2]
        )
    )

    % 4. small optimization to reduce search space
    /\\ forall(r in rows, c in cols) (
        forall(r2 in rows, c2 in cols) (
            abs(r2-r) + abs(c2-c) >= grid[r,c] -> regions[r, c] != (r2) * n_cols + c2 + 1
        )
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
    /\\ forall(r1 in rows, c1 in cols, r2 in rows, c2 in cols where orth_adjacent_2d(r1, c1, r2, c2)) (
        (regions[r1, c1] != regions[r2, c2]) = (grid[r1, c1] != grid[r2, c2])
    )

    % 8. Each region's size equals the count of its cells
    /\\ forall(r in rows, c in cols) (
        grid[r, c] = sum(r2 in rows, c2 in cols)(bool2int(regions[r2, c2] = regions[r, c]))
    )
    
    % floodfill - necessary to make sure each region is connected
    % root fix
    /\\ forall(r in rows, c in cols)(
        when[r,c] == 1 <-> regions[r, c] = (r * n_cols + c + 1)
    )
    %% Optimisation: the "when" label is actually the 'distance' of a cell in a
    %% region from the region "root".  This distance cannot be larger than the size
    %% of the region.
    /\\ forall (r in rows, c in cols) (
        when[r, c] <= size[regions[r, c]]
    )

    /\\ forall (r in rows, c in cols) (
        ( when[r, c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1 ) \\/  
        ( when[r, c] > 1 /\\ 
            ( fillomino_joins(r, c, r - 1, c, grid, when, regions) \\/ 
                fillomino_joins(r, c, r + 1, c, grid, when, regions) \\/
                fillomino_joins(r, c, r, c - 1, grid, when, regions) \\/ 
                fillomino_joins(r, c, r, c + 1, grid, when, regions)
            )
        )
    )

    %% restricts the floodfilling growth,
    %% by minimizing the distance of each node in the branching tree (each region) to the root
    %% this removes solutions with the same regions, but with different floodfilling (when array)
    /\\ fillomino_restrict_floodfill_p(when, regions)

    % all cells with a value equal to 2 must have exactly 1 neighbour equal to it
    /\\ forall(r in rows, c in cols where grid[r,c] == 2)(
        sum(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            grid[r,c] == grid[t.1,t.2]
        ) == 1
    )

    % all cells with a value greater than 2 must have at least 2 neighbour equal to it
    /\\ forall(r in rows, c in cols where grid[r,c] > 2)(
        exists(t in orth_adjacent_idxs(r,c) where in_bounds_2d(t.1, t.2, grid))(
            grid[r,c] == grid[t.1,t.2]
        )
    )
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

predicate cave_joins(
    int: r1, int: c1, int: r2, int: c2,
    array[int, int] of var int: when,
    array[int, int] of var int: regions) =
    if in_bounds_2d(r2, c2, regions) then
        when[r1, c1] = 1 + when[r2, c2] /\\ 
        regions[r1, c1] = regions[r2, c2]
    else
        false
    endif;

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
    % Symmetry breaking: canonical numbering of regions
    forall(r in rows, c in cols) (
        regions[r, c] <= (r * n_cols + c + 1)
    )

    /\\ same_before_p(regions, same_before)
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
        regions[r, c] != 0 -> when[r,c] >= 1
    )
    % floodfilling - Each cell is either the "root" of an area or is an extension of a
    % neighbouring cell.
    /\\ forall (r in rows, c in cols) (
        ( when[r, c] = 0 ) \\/
        ( when[r, c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1 ) \\/  
        ( when[r, c] > 1 /\\  
            ( cave_joins(r, c, r - 1, c, when, regions) \\/ 
              cave_joins(r, c, r + 1, c, when, regions) \\/
              cave_joins(r, c, r, c - 1, when, regions) \\/ 
              cave_joins(r, c, r, c + 1, when, regions)
            )
        )
    )
    /\\ fillomino_restrict_floodfill_p(when, regions)
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
    } in
    % we need to remove ambiguity from the region numbering 
    % use the numbering each region by the id of the first element of that region
    same_before_p(regions, same_before) /\\
    forall (r in rows, c in cols) (
        if same_before[r,c] = 0 /\\ regions[r, c] != 0 then
            when[r,c] = 1
        else
            true
        endif
    ) /\\
    forall (r in rows, c in cols) (
        regions[r, c] = 0 -> when[r,c] = 0
    ) /\\
    forall (r in rows, c in cols) (
        regions[r, c] != 0 -> when[r,c] >= 1
    ) /\\
    % floodfilling
    % Each cell is either the "root" of an area or is an extension of a
    % neighbouring cell.
    forall (r in rows, c in cols) (
        ( when[r, c] = 0 ) \\/
        ( when[r, c] = 1 /\\ same_before[r,c] == 0) \\/
        ( when[r, c] > 1 /\\  
            ( cave_joins(r, c, r - 1, c, when, regions) \\/ 
              cave_joins(r, c, r + 1, c, when, regions) \\/
              cave_joins(r, c, r, c - 1, when, regions) \\/ 
              cave_joins(r, c, r, c + 1, when, regions)
            )
        )
    ) /\\
    fillomino_restrict_floodfill_p(when, regions);

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

`+`predicate n_omino_same_shape_no_touching(
    array[int, int] of var int: regions,
    array[int, int] of var int: n_omino,
    int: target_n_omino,
    int: r,
    int: c,
) = forall(i in index_set_1of2(n_omino), j in index_set_2of2(n_omino))(
    % all adjacent cells that are not in the n-omino are not in the same region
    n_omino[i, j] != 0 -> (
        forall(delta in [(-1, 0), (1, 0), (0, -1), (0, 1)]) (
            let {
                int: om_r = i+delta.1;
                int: om_c = j+delta.2;
                bool: in_omino = in_bounds_2d(om_r, om_c, n_omino);
                int: reg_r = r+(i-1)+delta.1;
                int: reg_c = c+(j-1)+delta.2;
                bool: in_region = in_bounds_2d(reg_r, reg_c, regions);
            } in (
                if in_region then
                    ((in_omino /\\ n_omino[om_r, om_c] == 0) \\/ not in_omino) -> regions[reg_r, reg_c] != target_n_omino
                else
                    true
                endif
            )
        )
    )
);

predicate n_omino_is_placed_p(
    array[int, int] of var int: regions,
    array[int, int] of var int: n_omino,
    int: target_n_omino,
    int: r,
    int: c,
) = forall(i in index_set_1of2(n_omino), j in index_set_2of2(n_omino))(
    n_omino[i, j] != 0 -> regions[r+(i-1),c+(j-1)] = target_n_omino
);

predicate n_omino_place_p(
    array[int, int] of var int: n_omino_placement, 
    array[int, int] of var int: regions,
    array[int, int] of var int: n_omino,
    int: target_n_omino % a number for each n-omino starting at 1
) = let {
    set of int: rows = index_set_1of2(n_omino_placement);
    set of int: cols = index_set_2of2(n_omino_placement);
    int: min_r = min(rows);
    int: min_c = min(cols);
    int: max_r = max(rows);
    int: max_c = max(cols);
    int: n_omino_h = length(index_set_1of2(n_omino));
    int: n_omino_w = length(index_set_2of2(n_omino));
} in (
    forall(r in rows, c in cols where r <= max_r - n_omino_h + 1 /\\ c <= max_c - n_omino_w + 1)(
        % placing the n_omino on (r, c)
        n_omino_placement[r, c] == target_n_omino <-> n_omino_is_placed_p(regions, n_omino, target_n_omino, r, c)
    ) /\\ 
    forall(r in rows, c in cols where r <= max_r - n_omino_h + 1 /\\ c <= max_c - n_omino_w + 1)(
        % placing the n_omino on (r, c)
        n_omino_placement[r, c] == target_n_omino ->            
        % when placing the n-omino at (r,c), adjacent n-ominoes cannot have the same shape
        % each shape is encoded as an integer by target_n_omino
        n_omino_same_shape_no_touching(regions, n_omino, target_n_omino, r, c)
    )
);

predicate tilling_region_no_empty_cells_p(
    array[int, int] of var int: regions
) = let {
    set of int: rows = index_set_1of2(regions);
    set of int: cols = index_set_2of2(regions);
} in forall(r in rows, c in cols)(regions[r,c] != 0);

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
    assert(index_sets_agree(regions, ids_grid), "regions and ids_grid must have the same indexes.")
    % Shade one tetromino in each region. 
    % No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape.
    % if adjacent cells are in different regions than ids cannot be the same (unless they're both zero)
    /\\ forall (r in rows, c in cols where c > min(cols)) (
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r,c-1] } in (
            regions[r,c] != regions[r,c-1] -> ((id1 = 0 /\\ id2 = 0) \\/ (id1 != id2))
        )
    )
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
    /\\ forall(r in rows, c in cols where c>min(cols))(
        let { var int: id1 = ids_grid[r,c], var int: id2 = ids_grid[r,c-1] } in (
            (id1 != 0 /\\ id2 != 0 /\\ id1 == id2) -> 
                count_same_adjacent(ids_grid, r, c) + count_same_adjacent(ids_grid, r, c-1) > 2
        )
    )
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

predicate check_tetra_p(array[int] of var int: tetra, var int: val) = 
    if (all_equal(tetra) /\\ exists(id1 in tetra)(id1 != 0)) then 
        all_equal_to_p(tetra, val)
    else
        true
    endif;

predicate lits_o_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r < max(rows), c in cols where c < max(cols))(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r+1,c], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 5)
    )  
);

predicate lits_i_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows, c in cols where c <= max(cols) - 3)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r,c+3]];
        } in check_tetra_p(tetra, 2)
    ) /\\
    forall(r in rows where r <= max(rows) - 3, c in cols)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r+3,c]];
        } in check_tetra_p(tetra, 2)
    )
);

predicate lits_t_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 3)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c+1], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 3)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 3)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r+1,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 3)
    )
);

predicate lits_s_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 4)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 4)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r,c+1], ids_grid[r+1,c+1]];
        } in check_tetra_p(tetra, 4)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 4)
    )
);

predicate lits_l_tetra_p(
    array[int, int] of var int: ids_grid
) = let {
    set of int: rows = index_set_1of2(ids_grid);
    set of int: cols = index_set_2of2(ids_grid);
} in (
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r,c+2], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 1, c in cols where c <= max(cols) - 2)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c+2], ids_grid[r+1,c], ids_grid[r+1,c+1], ids_grid[r+1,c+2]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r,c+1]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r+1,c], ids_grid[r+2,c], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 1)
    ) /\\
    forall(r in rows where r <= max(cols) - 2, c in cols where c <= max(cols) - 1)(
        let {
            array[int] of var int: tetra = [ids_grid[r+2,c], ids_grid[r,c+1], ids_grid[r+1,c+1], ids_grid[r+2,c+1]];
        } in check_tetra_p(tetra, 1)
    ) 
);

predicate lits_tetromino_shapes_p(array[int, int] of var int: ids_grid) = (
    lits_l_tetra_p(ids_grid)
    /\\ lits_i_tetra_p(ids_grid)
    /\\ lits_t_tetra_p(ids_grid)
    /\\ lits_s_tetra_p(ids_grid)
);

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
    % Each cell is either the "root" of a region or is an extension of a
    % neighbouring cell.
    /\\ forall (r in rows, c in cols) (
        ( when[r, c] = 1 /\\ regions[r, c] = (r) * n_cols + c + 1 ) \\/  
        ( when[r, c] > 1 /\\ 
            ( cave_joins(r, c, r - 1, c, when, regions) \\/ 
                cave_joins(r, c, r + 1, c, when, regions) \\/
                cave_joins(r, c, r, c - 1, when, regions) \\/ 
                cave_joins(r, c, r, c + 1, when, regions)
            )
        )
    )
    % restricts the floodfilling growth,
    % by minimizing the distance of each node in the branching tree (each region) to the root
    % this removes solution with the same regions, but with different floodfilling (when array)
    /\\ fillomino_restrict_floodfill_p(when, regions)
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

`}function gU(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${Le(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function zp(t){const e=t.grid;let n=t.valid_digits;const r=new w2(t),[i,o]=[e.nRows,e.nCols],a=i*o;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(fU());let u=`1..${Math.max(i,o)}`;return!!t.globalConstraints.get(d.FILLOMINO)?u=`1..${a}`:t.globalConstraints.get(d.HEXED_SUDOKU)?n=[...St.range(1,16)]:n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${i-1};
`),r.add(`set of int: COL_IDXS = 0..${o-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),y2(r,e),r.add(gU(t)),r.add(Ck(t)),r.add(bk(t)),r.add(_U(r)),r.add(xM(t,r)),r.add(Ik(t)),r.add(`
solve satisfy;`),r}const Pg=encodeURIComponent("4.3.5");let ar={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ci=[];let Qc;function Xo(){if(!Qc){const e=`importScripts(${JSON.stringify(ar.workerURL)});`;Qc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Qc);t.postMessage({wasmURL:ar.wasmURL?ar.wasmURL.toString():new URL(`./minizinc.wasm?version=${Pg}`,ar.workerURL).toString(),dataURL:ar.dataURL?ar.dataURL.toString():new URL(`./minizinc.data?version=${Pg}`,ar.workerURL).toString()}),Ci.push({worker:t,runCount:0})}function Yp(){for(;Ci.length<ar.numWorkers;)Xo()}async function hU(t){if(ar={...ar,...t},Ci.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Yp(),await Promise.race(Ci.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Ad{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Ad;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Yp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Ci.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Ci.push({worker:o,runCount:a}):(o.terminate(),Xo()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["-c","--model-interface-only"],i.options),c=[];let u=null;o.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?Ci.push({worker:o,runCount:a}):(o.terminate(),Xo()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);Xo();let c={},u=!1,_=null;return a.onmessage=p=>{if(c[p.data.type])for(const g of c[p.data.type])g(p.data);switch(p.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=p.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const p of c.exit)p({type:"exit",code:null});c={}}},on(p,g){c[p]?c[p].add(g):c[p]=new Set([g])},off(p,g){c[p]&&c[p].delete(g)},then(p,g){const v=m=>{if(m.code===0)p(m.outputFiles[i]);else{const C=_?{message:_.message,...m}:m;if(!g)throw C;g(C)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Xo();let o=null,a={},c=!1,u=null,_={},p="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const v of a[g.data.type])v(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,p="SATISFIED";break;case"status":p=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,v){a[g]?a[g].add(v):a[g]=new Set([v])},off(g,v){a[g]&&a[g].delete(v)},then(g,v){const m=C=>{if(C.code===0)g({status:p,solution:u,statistics:_});else{const b=o?{message:o.message,...C}:C;if(!v)throw b;v(b)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var pU=ie('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function vU(t,e){se(e,!1);const n=it(),r=()=>Ee(Rr,"$puzzleMetaStore",n);let i=M(e,"showModal",12,!1);function o(g,v,m){var C=document.createElement("a"),b=new Blob([g],{type:m});C.href=URL.createObjectURL(b),C.download=v,C.click(),URL.revokeObjectURL(C.href)}function a(){const g=ut(bs);return zp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),v=Mg(g);navigator.clipboard.writeText(v)}function _(){const g=Da(r()),v=a();o(v,`${g}.mzn`,"text/plain")}function p(){const g=Da(r()),v=a(),m=Mg(v);o(m,`${g}.mzn`,"text/plain")}he(),Dr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,v)=>{var m=pU(),C=K(m),b=F(C,2),O=F(b,2),w=F(O,2);W(m),Me("click",C,c),Me("click",b,u),Me("click",O,_),Me("click",w,p),R(g,m)},$$slots:{default:!0},$$legacy:!0}),ae()}var Sn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Sn||{});const mU=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),jp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),EU=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),CU=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),bU=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),OU=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),IU=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),wU=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),Jc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),LU=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),eu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),_l=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function yU(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=mU(t,n),o=jp(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=EU(t,n),a=CU(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=bU(t,n),o=OU(t,r);return[i,o]}if(e===d.FOG){const r=t.map(c=>c.fog),o=IU(t,n===1),a=wU(t,r);return[o,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=eu(t,n),i=eu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=eu(t,n),o=_l(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=Jc(t,n,e),i=Jc(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=Jc(t,n,e),o=LU(t,r,e);return[i,o]}}function Ho(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),dn.update(i=>i)}function eo(t){switch(t.type){case Sn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.DIGIT,n,!0);break}case Sn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.GIVEN,n,!0);break}case Sn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.REGIONS,n,!0);break}case Sn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.HIGHLIGHTS,n,!0);break}case Sn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;Ho(e,r,n,!0);break}case Sn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];dn.update(r=>r);break}case Sn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];dn.update(i=>i);break}case Sn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];dn.update(r=>r);break}case Sn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];dn.update(r=>r);break}case Sn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);dn.update(i=>i);break}case Sn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),dn.update(r=>r);break}case Sn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];dn.update(r=>r);break}}}function AU(t,e){return{execute:()=>{eo(t)},unExecute:()=>{eo(e)}}}function bo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const p=Number(c[u]),g=n.get(p);g!==void 0&&(r.push(_),i.push([g]))}}const o=_l(r,i);eo(o)}function NU(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const C=[];i.push(C),a(v,m,t[v][m])}function a(v,m,C){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==C||(r[v][m]=!0,i[i.length-1].push([v,m]),a(v+1,m,C),a(v-1,m,C),a(v,m+1,C),a(v,m-1,C))}const c=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[C,b]of v)for(const[O,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=C+O,k=b+w;if(m.some(([U,z])=>U===x&&z===k))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(c[v].add(m),c[m].add(v));const _=[1,4,7,9],p=new Array(i.length).fill(0);function g(v,m){for(const C of c[v])if(p[C]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of _)if(g(v,m)){p[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,C]of i[v])o[m][C]=p[v];return o}function SU(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const _=i[u];for(let p=0;p<_.length;p++){const g=n.getCell(u,p);if(!g||g.given||r&&!g.given&&g.value===null)continue;const v=_[p];o.push(g),a.push(v)}}const c=jp(o,a);eo(c)}function xU(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){bo(o,e,r);return}}}function RU(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){bo(o,e,r);return}}}function TU(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const p=c[u];i.push([p+1])}}const o=_l(r,i);eo(o)}function DU(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;bo(n,e,new Map([[0,4],[1,7],[2,9]]))}function kU(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;bo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function GU(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;bo(n,e,new Map([[1,7],[2,4],[3,9]]))}function MU(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;bo(n,e,new Map([[1,7],[2,8]]))}function UU(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let p=0;p<i.length;p++){const g=i[p];for(let v=0;v<g.length-1;v++){const m=e.getCell(p,v),C=e.getCell(p,v+1);if(!m||!C)continue;const b=g[v],O=g[v+1];if(b===O)continue;const w={colorId:c,p1:{r:p,c:v+1},p2:{r:p+1,c:v+1}};u.push(w)}}for(let p=0;p<a;p++)for(let g=0;g<o-1;g++){const v=e.getCell(g,p),m=e.getCell(g+1,p);if(!v||!m)continue;const C=i[g][p],b=i[g+1][p];if(C===b)continue;const O={colorId:c,p1:{r:g+1,c:p},p2:{r:g+1,c:p+1}};u.push(O)}const _=ss(u);ur(_);return}}function FU(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const p=e.getCell(c,_);if(p)for(const g of e.getOrthogonallyAdjacentCells(p)){if(!g||!(g.r>p.r||g.c>p.c))continue;const v=i[p.r][p.c],m=i[g.r][g.c];if(!(v===1&&m===1))continue;const C={colorId:4,p1:{r:p.r+.5,c:p.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(C)}}}const a=ss(o);ur(a);return}}function $U(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=NU(i);if(!o)return;const a=[],c=[];for(let _=0;_<o.length;_++){const p=o[_];for(let g=0;g<p.length;g++){const v=e.getCell(_,g);if(!v)continue;a.push(v);const m=p[g];c.push([m])}}const u=_l(a,c);eo(u);return}}function PU(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const p=e.getCell(c,_);if(!p)continue;const g=i[p.r][p.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:p.r+.5,c:p.c+.5};o.push(m)}}const a=qR(o);ur(a);return}}function BU(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[p,g]=_,[v,m]=[Math.floor((p-1)/i.nCols),(p-1)%i.nCols],[C,b]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!vs({r:v,c:m},{r:C,c:b}))continue;const x={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:C+.5,c:b+.5}};o.push(x)}const a=ss(o);ur(a)}function HU(t,e){const n=e.puzzle,r=n.grid;ur(ad()),SU(t,n),TU(t,r),UU(t,r),DU(t,r),kU(t,r),FU(t,r),RU(t,r),$U(t,r),xU(t,r),PU(t,r),GU(t,r),BU(t,e),MU(t,r)}function WU(){const{subscribe:t,set:e}=Ht(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var zU=ie('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function YU(t,e){se(e,!1);const n=it(),r=()=>Ee(bs,"$puzzleStore",n),i=()=>Ee(_n,"$gridStore",n),o=()=>Ee(w,"$timer",n),a=T(),c=T(),u=T(),_=T();let p=T(!1),g=T(!1),v=T(null),m=T(100),C=T("100"),b=T(null),O=T("IDLE");const w=WU();function x(X){return X===null?"":String(X)}function k(X){const ee=Math.floor(X/6e4),ce=Math.floor(X%6e4/1e3),te=Math.floor(X%1e3/100),re=ce.toString().padStart(2,"0");return`${ee}:${re}.${te}`}function U(){A(g,!0)}function z(X){const ee=parseInt(X);typeof ee=="number"&&ee>=1&&A(m,ee)}async function Y(){A(b,0),A(O,"SOLVING...");const X=new Ad;wp();const ee=zp(h(a));X.addFile("test.mzn",ee.model_str),w.reset(),w.start(),A(v,X.solve({options:{solver:"chuffed","num-solutions":h(m)}})),h(v).on("solution",ce=>{const te=ce.output.json;ce.type==="solution"&&h(b)!==null&&A(b,h(b)+1),HU(te,ee)}),h(v).on("error",ce=>{A(u,"Solve"),A(O,"ERROR"),w.stop(),h(v)&&h(v).cancel()}),h(v).on("warning",ce=>{A(O,"WARNING"),console.log(ce.message)}),h(v).then(ce=>{A(O,ce.status),A(u,"Solve"),w.stop()})}function B(){h(v)===null||!h(v).isRunning()?Y():h(v)!==null&&h(v).isRunning()&&(A(O,"IDLE"),A(u,"Solve"),w.stop(),h(v).cancel())}D(()=>r(),()=>{A(a,r())}),D(()=>i(),()=>{A(c,i())}),D(()=>{},()=>{A(u,"Solve")}),D(()=>o(),()=>{A(_,o())}),D(()=>h(v),()=>{h(v)&&(h(v)!==null&&h(v).isRunning()?A(u,"Stop"):A(u,"Solve"))}),Oe(),he(),rl(t,{get isOpen(){return h(p)},set isOpen(X){A(p,X)},$$slots:{"panel-header":(X,ee)=>{nl(X,{slot:"panel-header",title:"Solver",get isOpen(){return h(p)},set isOpen(ce){A(p,ce)},$$legacy:!0})},"panel-content":(X,ee)=>{var ce=zU(),te=de(ce),re=F(te,2);vU(re,{get showModal(){return h(g)},set showModal(Qt){A(g,Qt)},$$legacy:!0});var Ce=F(re,2),be=K(Ce,!0);W(Ce);var ge=F(Ce,2),Ue=K(ge,!0);W(ge);var Qe=F(ge,2),Ne=K(Qe);Kt(Ne),y(Ne,"min",1),y(Ne,"max",200),y(Ne,"step",1),W(Qe);var ye=F(Qe,2),lt=K(ye,!0);J(()=>nt(lt,`Solution Count: ${x(h(b))}`)),W(ye);var Ye=F(ye,2),On=K(Ye,!0);J(()=>nt(On,`Elapsed Time: ${k(h(_))}`)),W(Ye);var Mn=F(Ye,2),Gr=K(Mn,!0);W(Mn),J(()=>{nt(be,h(u)),nt(Ue,`Max. Solutions: ${h(m)}`),nt(Gr,`Status: ${h(O)}`)}),Me("click",te,U),Me("click",Ce,B),jn(Ne,()=>h(C),Qt=>A(C,Qt)),Me("input",Ne,()=>z(h(C))),R(X,ce)}},$$legacy:!0}),ae()}var jU=ie('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!> <!></div></div>');function VU(t){var e=jU(),n=K(e),r=K(n);p2(r);var i=F(r,2);YU(i,{});var o=F(i,2);QT(o,{elementHandlers:Rt});var a=F(o,2);rD(a,{elementHandlers:Rt});var c=F(a,2);zT(c,{elementHandlers:Rt});var u=F(c,2);AD(u,{elementHandlers:Rt});var _=F(u,2);m2(_,{}),W(n),W(e),R(t,e)}class De{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new De(this.x+e.x,this.y+e.y)}subtract(e){return new De(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new De(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new De(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function KU(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Dn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new De(i.x,i.y)};function Na(t,e=!0,n=.5){const r=qa(t),i=new De(r.c+.5,r.r+.5),o=t.distance(i);return!e||o<n?{cell:r,dist:o}:null}function Vp(t,e){const n=qa(t),r=new De(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function Jo(t,e){const n=qa(t),r=sx(n),o=r.map(_=>new De(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function es(t,e){const n=qa(t),r=ax(n),o=r.map(_=>new De(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function tu(t,e=!0,n=.5){const r=es(t,void 0);if(!r)return null;const i=Jo(t,void 0);if(!i)return null;const o=Vp(t);if(!o)return null;const a=[o.cellCenter,r.edge,i.corner],u=a.map(b=>new De(b.c,b.r)).map(b=>b.distance(t)),_=Math.min(...u),p=u.findIndex(b=>b===_),g=a[p],m=["cell center","edge","corner"][p],C={cellCenter:o.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?C:null}class Oo{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Dn(e,n);if(!i)return;this._prevPoint=i;const o=Na(i,!r,this._margin);if(!o)return;const a=o.cell;this._prevCell=a,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:a,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=Na(r,!0,this._margin);if(!i)return;const o=i.cell;if(this._prevCell&&Ve(this._prevCell,o))return;this._prevCell=o,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:o,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Dn(e,n);if(!r)return;const i=Na(r,!1);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Bg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function XU(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Hg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Wg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function qU(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Bg(i,e):i.value!==null?XU(i,e):n===d.CORNER_PM&&i.cornerMarks.length?Hg(i,e):n===d.CENTER_PM&&i.centerMarks.length?Wg(i,e):i.cornerMarks.length?Hg(i,e):i.centerMarks.length?Wg(i,e):i.highlights.length?Bg(i,e):r:r}function oi(t,e,n,r=!1){if(!(t&&e))return;const i=dd(t,e),o=_d(t,n),a=Os(i,o);un(a,r)}function Ni(t,e,n,r=!0){if(!(t&&e))return;const i=_d(t,n),o=dd(t,e),a=Os(i,o);un(a,r)}function Eu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Tg(r,t,n),a=Tg(r,t,e),c=Os(o,a);un(c,i)}function ZU(t,e,n,r){const i=new Oo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,p=!1,g;(b=>{b.DYNAMIC="DYNAMIC",b.BULB="BULB",b.BODY="BODY"})(g||(g={}));let v="DYNAMIC";function m(b){_=!1;const O=b.cell;if(Xt(b.cell,o)){if(v==="DYNAMIC"){const x=ut(pt),k=xR(x,n,O);if(k){const z=dR(k.arrow,k.matchLineIdx);Eu(k.id,k.arrow,z,n,!0),p=!0;return}const U=wg(x,n,O);if(!U)_=!0,v="BULB",u=null,a=null;else{v="BODY",u=U[0],a=U[1],a=fu(a,O),Bt(n,u,a);return}}if(v==="BULB"&&!u){u=St.uniqueId(),a=op(n,[O]),ii(u,a);return}else v==="BULB"&&u&&a?(a=aR(a,O),Bt(n,u,a)):v==="BODY"&&u&&a&&(a=lR(a,O,r==null?void 0:r.allowSelfIntersection),Bt(n,u,a))}}return i.onDragStart=b=>{v="DYNAMIC",m(b)},i.onDrag=b=>{m(b)},i.onDragEnd=()=>{if(p){p=!1;return}v==="BODY"&&u&&a?cR(a)?(a=uR(a),Bt(n,u,a)):(Eu(u,c,a,n),c=a):v==="BULB"&&(oi(u,a,n),c=a),v="DYNAMIC"},i.onTap=b=>{if(_)return;const O=b.cell,w=ut(pt);if(wg(w,n,O)){Ni(u,a,n);return}},{pointerDown:b=>{b.button===0&&i.pointerDown(b,t)},pointerMove:b=>{i.pointerMove(b,t)},pointerUp:b=>{i.pointerUp(b,t)},keyDown:()=>{},keyUp:()=>{}}}function QU(t,e,n,r){const i=new Oo,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const v=g.cell;Xt(g.cell,o)&&(c=sR(c,v,a),Bt(n,u,c))}return i.onDragStart=g=>{u=St.uniqueId(),c=rp(n,[],r==null?void 0:r.defaultValue),ii(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?wi(n,u):u&&c&&oi(u,c,n,!1),u=null},i.onTap=g=>{const v=g.cell,m=ut(pt),C=SR(m,n,v);if(C){const[b,O]=C;Ni(b,O,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function JU(t,e,n,r){const i=new Oo,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ut(pt),m=g.cell;if(!Xt(g.cell,o))return;const b=Ra(v,n,m);if(c===0&&(c=b?2:1),!(r!=null&&r.oppositeConstraintId&&Ra(v,r.oppositeConstraintId,m))){if(b&&c===2){const[O,w]=b;Ni(O,w,n)}else if(c===1){const O=up(n,m,r==null?void 0:r.defaultValue),w=St.uniqueId();oi(w,O,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)};function _(g){const v=ut(fr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!ao(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(m==null?void 0:m.value,g.key);b!==void 0&&b!==m.value&&(m=Cs(m,b),Bt(n,C,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class fl{constructor(e){ve(this,"onDragStart",null);ve(this,"target");this.target=e}pointerDown(e,n){const r=Dn(e,n);if(!r)return;const i=es(r,void 0);if(!i)return;const o=Jo(r,void 0);if(!o)return;const a=Na(r,!1);if(!a)return;const c=Vp(r);if(!c)return;let u;this.target===It.CORNER?u=o.corner:this.target===It.EDGE?u=i.edge:this.target===It.CELL_CENTER?u=c.cellCenter:this.target===It.CORNER_OR_EDGE?o.dist<i.dist?u=o.corner:u=i.edge:this.target===It.CORNER_OR_CENTER?o.dist<c.dist?u=o.corner:u=c.cellCenter:this.target===It.EDGE_OR_CENTER?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<o.dist&&i.dist<c.dist?u=i.edge:o.dist<i.dist&&o.dist<c.dist?u=o.corner:u=c.cellCenter;let _=this.target===It.CORNER||this.target===It.CORNER_OR_CENTER?"corner":"edge";(this.target===It.CORNER_OR_EDGE||this.target===It.CLOSEST)&&o.dist<i.dist&&(_="corner");const p=_==="edge"?2*i.idx:2*o.idx+1,g={event:e,cell:a.cell,edge:i.edge,corner:o.corner,closest:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:p};this.onDragStart&&this.onDragStart(g)}}function eF(t,e,n,r){const i=(r==null?void 0:r.targets)??It.CLOSEST,o=new fl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=ut(pt),C=v.cell,b=v.closest;if(!Xt(C,a))return;const w=TR(m,n,b);if(w){wi(n,w);return}c=fp(n,b,""),u=St.uniqueId(),ii(u,c)}function p(v){const m=ut(fr);if(!m)return;let C=m.constraint;const b=m.id;if(C.value===void 0||!ao(v)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,v.key);O!==void 0&&O!==C.value&&(C=Cs(C,O),Bt(n,b,C))}return o.onDragStart=v=>{_(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{p(v)},keyUp:()=>{}}}function tF(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??It.CORNER_OR_EDGE,o=new fl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=ut(pt),C=v.cell,b=v.direction,O=nd(b);if(Xt(C,a))return;const x=Yh(C,O);if(!Xt(x,a))return;const U=RR(m,n,C,O);if(U){wi(n,U);return}c=cp(n,C,O,""),u=St.uniqueId(),ii(u,c)}function p(v){const m=ut(fr);if(!m)return;let C=m.constraint;const b=m.id;if(C.value===void 0||!ao(v)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,v.key);O!==void 0&&O!==C.value&&(C=Cs(C,O),Bt(n,b,C))}return o.onDragStart=v=>{_(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{p(v)},keyUp:()=>{}}}function nF(t,e,n,r){const i=new Oo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function p(m){const C=ut(pt),b=m.cell;if(Xt(m.cell,o)){if(m.event.shiftKey){const w=Ig(C,n,b);w&&(c=w[0],a=w[1],Eo({id:c,constraint:a}),_=1)}if(_===0){const w=Ig(C,n,b);if(_=w?2:1,w){Ni(w[0],w[1],n);return}}if(!a&&_===1){a=sp(n,[b]),c=St.uniqueId(),ii(c,a);return}else if(a&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=fR(a,b,w),Bt(n,c,a);return}}}function g(m){const C=ut(fr);if(!C)return;let b=C.constraint;const O=C.id;if(b.value===void 0||!ao(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(b==null?void 0:b.value,m.key);w!==void 0&&w!==b.value&&(b=gR(b,w),Bt(n,O,b))}return i.onDragStart=m=>{c=null,a=null,_=0,p(m)},i.onDrag=m=>{p(m)},i.onDragEnd=()=>{c&&a&&oi(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const ji=new Oo;function zg(t,e){return t.shiftKey?Ko.SELECTING:t.ctrlKey||t.metaKey||e?Ko.DYNAMIC:t.altKey?Ko.DESELECTING:Ko.RESETTING}function as(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const o=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===o||n==="different"&&c.fog!==o)}}return t}function rF(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=as(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function ts(t,e,n,r){const i=yU(e,n,r);if(i){const o=i[0],a=i[1],c=AU(o,a),u=hu(t),p=[tT(u,u),c];eT(p)}}function iF(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=as(e,r,"any",-1,!1);if(i.length)return ts(n,i,r,t),!0}else{const i=as(e,r,"different",t,!0);if(i.length)return ts(n,i,r,t),!0}return!1}function oF(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};ji.onTap=m=>{if(m.tapCount!==2)return;const b=Xt(m.cell,i)?m.cell:null;if(!b)return;const O=qU(b,e,n),w=hu(O);Vi(w)},ji.onDragStart=m=>{const C=Xt(m.cell,i),b=ut(pu),O=zg(m.event,b),w=C?m.cell:null,x=BR(w,O);Vi(x)},ji.onDrag=m=>{const b=Xt(m.cell,i)?m.cell:null,O=WR(b);Vi(O)};function o(m){if(!sw(m))return!1;const C=e.getAllCells().map(O=>({r:O.r,c:O.c})),b=hu(C);return Vi(b),!0}function a(m){if(!dw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=fw(m);return Lr(C),!0}return m.type==="keyup"?(rT(),!0):!1}function c(m){if(!uw(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),b=r[(C+1)%r.length];return Lr(b),vu(b),!0}else{const C=_w(m.code);return Lr(C),vu(C),!0}}function u(m){if(!hw(m))return!1;const C=ut(Ii).lastCell;let b=null;if(C!==null){const[x,k]=pw(m),[U,z]=[Lg(C.r+k,0,i.nRows-1),Lg(C.c+x,0,i.nCols-1)];b={r:U,c:z}}else b={r:0,c:0};const O=zg(m,!1),w=zR(b,O);return Vi(w),!0}function _(m){const C=cw(m);if(C===void 0)return!1;const b=ut(Ii).cells,O=[];if(b.forEach(w=>{const x=e.getCell(w.r,w.c);x&&O.push(x)}),n===d.FOG)return iF(C,O,b);if(C===null){const{tool:w,cells:x}=rF(O,n);if(x.length)return ts(b,x,w,C),!0}else{let w=as(O,n,"different",C,!0);if(w.length)return ts(b,w,n,C),!0;if(w=as(O,n,"equal",C,!0),w.length)return ts(b,w,n,C),!0}return!1}function p(m){return m.repeat?!1:_(m.key)}const g=St.throttle(m=>{ji.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&ji.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){ji.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||p(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function sF(t,e,n,r){const i=[He.N,He.NE,He.E,He.SE,He.S,He.SW,He.W,He.NW],o=new fl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let p=0;function g(C){const b=ut(pt),O=C.cell;if(!Xt(C.cell,a))return;C.event.altKey&&(p=2);const x=Ra(b,n,O),k=nd(C.direction);if(x){[u,c]=x,c.direction===k||p===2?Ni(u,c,n):(c={...c,direction:k},Bt(n,u,c));return}else p!==2&&(c=dp(n,O,k),u=St.uniqueId(),oi(u,c,n,!0))}function v(C){if(!c||!u||!aw(C))return;const O=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[O]},Bt(n,u,c)}return o.onDragStart=C=>{p=0,g(C)},{pointerDown:C=>{C.button===0&&o.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{v(C)},keyUp:()=>{}}}function aF(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function lF(t,e,n,r){const i=new fl(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function p(v){const m=ut(pt),C=v.cell;if(console.log(v),!Xt(v.cell,o))return;v.event.altKey&&(_=2);const O=nd(v.direction),w=Ra(m,n,C);if(w){if(c=w[0],a=w[1],_===2)wi(n,w[0]);else{const x=aF(a.directions,O);x.length?(a={...a,directions:x},Bt(n,c,a)):wi(n,c)}return}else _!==2&&(a=_p(n,C,O),c=St.uniqueId(),ii(c,a))}return i.onDragStart=v=>{_=0,p(v)},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class cF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Dn(e,n);if(!r)return;const i=es(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=es(r,this._margin);if(!i||this._prevCoord&&Ve(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Dn(e,n);if(!r)return;const i=es(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function uF(t,e,n,r){const i=new cF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ut(pt),m=g.coord,C=rd(m);if(!C.every(w=>Xt(w,o)))return;let O=null;if(c===0&&(O=AR(v,n,C),c=O?2:1),O&&c===2){const w=O[0];Ni(w,O[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",x=lp(n,C,w),k=St.uniqueId();oi(k,x,n,!0)}}function _(g){const v=ut(fr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!ao(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(m==null?void 0:m.value,g.key);b!==void 0&&b!==m.value&&(m=Cs(m,b),Bt(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class dF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Dn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=Jo(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=Jo(r,this._margin);if(!i||this._prevCoord&&Ve(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Dn(e,n);if(!r)return;const i=Jo(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function _F(t,e,n,r){const i=new dF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ut(pt),m=g.coord,C=td(m);if(!C.every(w=>Xt(w,o)))return;let O=null;if(c===0&&(O=NR(v,n,m),c=O?2:1),O&&c===2){const w=O[0];Ni(w,O[1],n);return}else if(c===1){const w=ap(n,C,r==null?void 0:r.defaultValue),x=St.uniqueId();oi(x,w,n,!0)}}function _(g){const v=ut(fr);if(!v)return;let m=v.constraint;const C=v.id;if(m.value===void 0||!ao(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(m==null?void 0:m.value,g.key);b!==void 0&&b!==m.value&&(m=Cs(m,b),Bt(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class fF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Dn(e,n);if(!r)return;const i=tu(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=tu(r,!1);if(!i||this._prevCoords&&Ve(this._prevCoords,i.target))return;this._isTap=!1;const o={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&mp(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Dn(e,n);if(!r)return;const i=tu(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&Ve(this._prevCoords,i.target)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function gF(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new fF;return r.onTap=o=>{const a=o.coords,c=ut(Ga),u=ut(ka);if(o.type==="cell center"){if(!ix(a,n))return;const p=u.getCellMarker(a);if(p)if(p.marker==="X"){const g={...a,colorId:c,marker:"O"},v=wa(g),m=wa(p),C=vi(v,m);un(C)}else{const g=Sg(a),v=wa(p),m=vi(g,v);un(m)}else{const g={...a,colorId:c,marker:"X"},v=wa(g),m=Sg(a),C=vi(v,m);un(C)}}else if(o.type==="edge"){const _=u.getEdgeMarker(a);if(_){const p=Ng(a),g=Ag(_),v=vi(p,g);un(v)}else{const p={...a,colorId:c},g=Ag(p),v=Ng(a),m=vi(g,v);un(m)}}},r.onDrag=o=>{const a=o.coords,c=ut(Ga);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},_=ZR(u);ur(_)}},r.onDragEnd=()=>{const o=ut(ka);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>Xi(c,u)));if(a.length){const c=ss(a),u=xg(a),_=vi(c,u);un(_)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>Xi(c,u)));if(a.length){const c=xg(a),u=ss(a),_=vi(c,u);un(_)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function hF(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function pF(t,e){const n=jh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function vF(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function mF(t){for(let e=0;;e++){const n=vF(e);if(!t.has(n))return n}}function EF(t,e,n){const r=new Oo,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,_="cells2",p;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(p||(p={}));let g=0;function v(C){const b=ut(pt),O=C.cell;if(!Xt(C.cell,i))return;const x=DR(b,n,O);if(g===0&&(x?(c=x[0],o=x[1],g=2,u=O,_=o.cells2.some(U=>Ve(U,O))?"cells2":"cells"):g=1),g===1&&c===null){c=St.uniqueId();const k=kR(b,n),U=mF(k);o=hF(n,[O],U),ii(c,o);return}else if(g===1&&c&&o){o=pF(o,O),Bt(n,c,o);return}else if(g===2&&c&&o&&u){const k={r:O.r-u.r,c:O.c-u.c},z=(_==="cells2"?o.cells2:o.cells).map(B=>({r:B.r+k.r,c:B.c+k.c}));if(!z.every(B=>Xt(B,i)))return;_==="cells"?o={...o,cells:z}:o={...o,cells2:z},u=O,Bt(n,c,o)}}return r.onDragStart=C=>{c=null,o=null,g=0,u=null,v(C)},r.onDrag=C=>{v(C)},r.onDragEnd=()=>{c&&o&&(g===1?oi(c,o,n):g===2&&Eu(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==1&&(wi(n,c),c=null,o=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}function CF(t){if(t.type===pe.SELECTION)return function(n,r,i){return oF(n,r,i)};if(t.type===pe.SINGLE_CELL){let e=function(r,i,o){return JU(r,i,o,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_ARROW){let e=function(r,i,o){return sF(r,i,o,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return lF(r,i,o,n)};const n=t;return e}else if(t.type===pe.EDGE){let e=function(r,i,o){return uF(r,i,o,n)};const n=t;return e}else if(t.type===pe.CORNER){let e=function(r,i,o){return _F(r,i,o,n)};const n=t;return e}else if(t.type===pe.LINE){let e=function(r,i,o){return QU(r,i,o,n)};const n=t;return e}else if(t.type===pe.ARROW){let e=function(r,i,o){return ZU(r,i,o,n)};const n=t;return e}else if(t.type===pe.CAGE){let e=function(r,i,o){return nF(r,i,o,n)};const n=t;return e}else{if(t.type===pe.CLONE)return function(n,r,i){return EF(n,r,i)};if(t.type===pe.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return eF(r,i,o,n)};const n=t;return e}else if(t.type===pe.OUTSIDE_DIRECTION){let e=function(r,i,o){return tF(r,i,o,n)};const n=t;return e}else if(t.type===pe.PEN)return function(n,r){return gF(n,r)}}}const Kp=no([Qi,_n,qt],([t,e,n])=>{const r=qr(n,Rt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}const i=r.inputOptions,o=i?CF(i):void 0;return o?o(t,e,n):void 0});var bF=ue('<path class="cursor svelte-zsq70u"></path>');function OF(t,e){se(e,!1);const n=it(),r=()=>Ee(qt,"$toolStore",n),i=()=>Ee(Ii,"$selectionStore",n),o=T(),a=T(),c=.25;function u(p){if(!p)return"";const[g,v]=[p.c,p.r];return`M${g},${v}L${g+c},${v}L${g},${v+c}Z`}D(()=>r(),()=>{A(o,ju(r()))}),D(()=>i(),()=>{A(a,u(i().lastCell))}),Oe(),he();var _=bF();J(()=>{y(_,"d",h(a)),y(_,"visibility",h(o)?"visible":"hidden")}),R(t,_),ae()}var IF=ue('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function wF(t,e){se(e,!1);let n=M(e,"gridShape",8);he();var r=IF(),i=K(r);y(i,"x",0),y(i,"y",0),W(r),J(()=>{y(i,"width",n().nCols),y(i,"height",n().nRows)}),R(t,r),ae()}var LF=ue('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),yF=ue('<g class="grid-lines"></g>');function AF(t,e){se(e,!1);const n=it(),r=()=>Ee(_n,"$gridStore",n),i=T();D(()=>r(),()=>{A(i,r().getAllCells())}),Oe(),he();var o=yF();st(o,5,()=>h(i),Lt,(a,c)=>{var u=LF();y(u,"width",1),y(u,"height",1),J(()=>{y(u,"x",h(c).c),y(u,"y",h(c).r)}),R(a,u)}),W(o),R(t,o),ae()}function NF(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function SF(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=NF(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],_=JSON.stringify(c),p=JSON.stringify(u);n(_,p)}}return e}function xF(t,e=0,n=!1){const r=[],i=SF(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(C=>C[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const p=Array.from(u)[0];let g=JSON.parse(p),v=p;const m=[];do{const C=i.get(v);if(C===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const b=new De(_.c,_.r),O=new De(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,k=null;for(const re of C){const Ce=JSON.parse(re),be=new De(Ce.c,Ce.r),ge=O.subtract(b),Ue=be.subtract(O),Qe=ge.perpDotProduct(Ue);w<Qe!=n&&(w=Qe,k=Ce,x=re)}if(n&&C.size>1&&o.add(v),k===null||x===null)throw new Error("Corner with no adjacencies found");C.delete(x),C.size<=0&&i.delete(v);const U=e*(g.c-_.c),z=e*(k.c-g.c),Y=e*(_.r-g.r),B=e*(g.r-k.r),X=B+w*z,ee=U+w*Y,ce=new De(g.c+X,g.r+ee),te=4;o.has(v)?(m.push(new De(ce.x-te*U,ce.y-te*z)),m.push(new De(ce.x-te*Y,ce.y-te*B))):m.push(ce),_=g,g=k,v=x}while(v!==p);r.push(m)}return r}function to(t,e=0,n=!1){return xF(t,e,n).map(o=>Io(o,!0)).join("")}const RF=[new De(-.5,-.5),new De(.5,-.5),new De(.5,.5),new De(-.5,.5)];function TF(t,e,n=RF){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,_=c/(360/i),p=u/(360/i),g=Math.floor(_)%i,v=Math.ceil(_)%i,m=n[g].lerp(n[v],_%1),C=Math.floor(p)%i,b=Math.ceil(p)%i,O=n[C].lerp(n[b],p%1);r.push(m);for(let x=Math.ceil(_);x<=Math.floor(p);x++)r.push(n[x%i]);r.push(O);const w=new De(0,0);return r.push(w),r}function Xp(t,e,n=new De(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),p=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new De(_,p));c.push(g)}return c}function Io(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function gl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(p=>new De(p.x,p.y));if(r&&o.length>1){const p=o[o.length-1];for(let v=0;v<o.length-1;v++)if(p.equals(o[v])){o.push(o[v+1]);break}const g=o[0];for(let v=1;v<o.length;v++)if(g.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let p=o[1].subtract(o[0]);p=p.normalise(),p=p.scale(e),o[0]=o[0].add(p)}if(n){const p=o.length;let g=o[p-2].subtract(o[p-1]);g=g.normalise(),g=g.scale(n),o[p-1]=o[p-1].add(g)}}if(!i)return Io(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let p=2;p<u;p++){const g=o[p-2],v=o[p-1],m=o[p];let C=g.subtract(v).normalise();C=C.scale(i),C=C.add(v);let b=m.subtract(v).normalise();b=b.scale(i),b=b.add(v),c.push(`L${C.x},${C.y} Q ${v.x},${v.y} ${b.x},${b.y}`)}const _=o[u-1];return c.push(`L${_.x},${_.y}`),c.join(" ")}function ls(t,e={}){const n=Ua(t);return gl(n,e)}function Xn(t){return new De(t.c+.5,t.r+.5)}function Ua(t){return t.map(n=>Xn(n))}const DF=[new De(-.5,-.5),new De(.5,-.5),new De(.5,.5),new De(-.5,.5),new De(0,-.5),new De(0,.5),new De(-.5,0),new De(.5,0)];function kF(t,e){const n=DF[t];return n.subtract(n.scale(e))}function qp(t,e){const n=[new De(t.c-e,t.r-e),new De(t.c+e,t.r+e)],r=[new De(t.c-e,t.r+e),new De(t.c+e,t.r-e)];return[n,r].map(o=>Io(o,!1)).join("")}const GF=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function hl(t,e="none"){return GF.get(t)||e}function MF(t,e,n){let r=[];function o(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new De(-.12,-.32),new De(0,-.4),new De(.12,-.32)]:a=[new De(-.12,-.4),new De(0,-.32),new De(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const _=new De(n+.5,e+.5);return u.add(_)})),r}var UF=ue('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),FF=ue('<g class="regions-border"></g>');function $F(t,e){se(e,!1);const n=it(),r=()=>Ee(dn,"$cellsStore",n),i=()=>Ee(_n,"$gridStore",n),o=T(),a=T();function c(_,p){return _.filter(m=>m.region===p).map(m=>({r:m.r,c:m.c}))}D(()=>r(),()=>{A(o,r())}),D(()=>i(),()=>{A(a,i().getUsedRegions())}),Oe(),he();var u=FF();st(u,5,()=>h(a),Lt,(_,p)=>{var g=UF();J(()=>y(g,"d",to(c(h(o),h(p)),0,!1))),J(()=>y(g,"id",`region-${h(p)??""}`)),R(_,g)}),W(u),R(t,u),ae()}var PF=ue('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function BF(t,e){se(e,!1);const n=it(),r=()=>Ee(Ii,"$selectionStore",n),i=()=>Ee(qt,"$toolStore",n),o=T(),a=T(),c=T(),u=T(),_=T(),p=T();let g=M(e,"boundingBox",8);const v=.06,m=.05,C="#080808",b="#b2b2b2";D(()=>Z(g()),()=>{A(o,g().x)}),D(()=>Z(g()),()=>{A(a,g().y)}),D(()=>r(),()=>{A(c,r().cells)}),D(()=>h(c),()=>{A(u,to(h(c),0))}),D(()=>h(c),()=>{A(_,to(h(c),v))}),D(()=>i(),()=>{A(p,ju(i()))}),Oe(),he();var O=PF(),w=K(O),x=K(w);y(x,"stdDeviation",m),Zi(),W(w);var k=F(w),U=K(k);y(U,"fill",b);var z=F(U);y(z,"fill",C),W(k);var Y=F(k);W(O),J(()=>{y(O,"visibility",h(p)?"visible":"hidden"),y(k,"x",h(o)),y(k,"y",h(a)),y(U,"x",h(o)),y(U,"y",h(a)),y(z,"d",h(_)),y(Y,"d",h(u))}),R(t,O),ae()}var HF=ue('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function WF(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"grid",8);D(()=>Z(i()),()=>{A(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>h(n),()=>{A(r,to(h(n),0))}),Oe(),he();var o=HF(),a=K(o);W(o),J(()=>y(a,"d",h(r))),R(t,o),ae()}function gr(t){return no(pt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,element:o});return r})}const Nd=gr(DI),zF=no(Nd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),YF=no(Nd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),jF=gr(Hu),VF=gr(Lh),KF=gr(wh),XF=gr(Wu),qF=gr(yh),ZF=gr(zu),QF=gr(Yu),JF=gr(Ah),e8=gr(os);var t8=ue('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function As(t,e){let n=M(e,"l",8,.2),r=M(e,"id",8),i=M(e,"strokeWidth",8),o=M(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=t8();y(u,"viewBox","0 0 1 1"),y(u,"refX",a),y(u,"refY",a),y(u,"markerWidth",1),y(u,"markerHeight",1);var _=K(u);y(_,"d",c),W(u),J(()=>{y(u,"id",r()),y(_,"stroke-width",i()),y(_,"stroke",o())}),R(t,u)}var n8=ue("<path></path>");function cs(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let p=M(e,"cells",8),g=M(e,"shape",8,Vu);const v="square";D(()=>Z(g()),()=>{A(n,g().inset??.06)}),D(()=>Z(g()),()=>{A(r,g().stroke??"black")}),D(()=>Z(g()),()=>{A(i,g().strokeWidth??.03)}),D(()=>Z(g()),()=>{A(o,g().strokeDasharray??.08)}),D(()=>Z(g()),()=>{A(a,g().fill??"none")}),D(()=>Z(g()),()=>{A(c,g().connectDiag??!0)}),D(()=>(Z(p()),h(n),h(c)),()=>{A(u,to(p(),h(n),h(c)))}),D(()=>Z(g()),()=>{A(_,g().strokeLinejoin??"miter")}),Oe(),he();var m=n8();y(m,"stroke-linecap",v),J(()=>{y(m,"d",h(u)),y(m,"stroke",h(r)),y(m,"stroke-width",h(i)),y(m,"fill",h(a)),y(m,"stroke-dasharray",h(o)),y(m,"stroke-linejoin",h(_))}),R(t,m),ae()}var r8=ue('<path class="arrow-line" fill="none"></path>'),i8=ue('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function o8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T(),m=T(),C=T();let b=M(e,"tool",8),O=M(e,"arrowId",8),w=M(e,"boundingBox",8);const x=Zt(b().toolId,Rt)??Ku,k="round",U="round",z=crypto.randomUUID(),Y=`arrow-mask-${O()}-${z}`,B=`arrow-marker-${O()}-${z}`;D(()=>Z(b()),()=>{A(n,b().shape??x)}),D(()=>Z(w()),()=>{A(r,w().x)}),D(()=>Z(w()),()=>{A(i,w().y)}),D(()=>h(n),()=>{var ge;A(o,((ge=h(n))==null?void 0:ge.r)??.4)}),D(()=>h(n),()=>{var ge;A(a,((ge=h(n))==null?void 0:ge.stroke)??"gray")}),D(()=>h(n),()=>{var ge;A(c,((ge=h(n))==null?void 0:ge.strokeWidth)??.1)}),D(()=>h(n),()=>{var ge;A(u,((ge=h(n))==null?void 0:ge.strokeDasharray)??0)}),D(()=>h(n),()=>{var ge;A(_,((ge=h(n))==null?void 0:ge.opacity)??.8)}),D(()=>(h(o),h(n)),()=>{var ge,Ue,Qe,Ne;A(p,{shortenHead:h(o),shortenTail:((Ue=(ge=h(n))==null?void 0:ge.linePathOptions)==null?void 0:Ue.shortenTail)??.2,bezierRounding:((Ne=(Qe=h(n))==null?void 0:Qe.linePathOptions)==null?void 0:Ne.bezierRounding)??.4})}),D(()=>h(n),()=>{var ge;A(g,((ge=h(n))==null?void 0:ge.fill)??"none")}),D(()=>h(n),()=>{var ge;A(v,((ge=h(n))==null?void 0:ge.inset)??.2)}),D(()=>h(v),()=>{A(m,{...x,strokeDasharray:0,strokeLinejoin:"round",inset:h(v)})}),D(()=>Z(b()),()=>{A(C,ls(b().cells))}),Oe(),he();var X=i8(),ee=de(X);y(ee,"id",Y);var ce=K(ee),te=F(ce);W(ee);var re=F(ee);As(re,{id:B,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var Ce=F(re);cs(Ce,{get cells(){return b().cells},get shape(){return h(m)}});var be=F(Ce);st(be,1,()=>b().lines,Lt,(ge,Ue)=>{var Qe=Se(),Ne=de(Qe);{var ye=lt=>{var Ye=r8();J(()=>y(Ye,"d",ls(h(Ue),h(p)))),y(Ye,"stroke-linejoin",k),y(Ye,"stroke-linecap",U),y(Ye,"marker-end",`url(#${B??""})`),J(()=>{y(Ye,"stroke",h(a)),y(Ye,"stroke-width",h(c)),y(Ye,"opacity",h(_)),y(Ye,"stroke-dasharray",h(u))}),R(lt,Ye)};fe(Ne,lt=>{h(Ue).length>1&&lt(ye)})}R(ge,Qe)}),J(()=>{y(ee,"x",h(r)),y(ee,"y",h(i)),y(ce,"x",h(r)),y(ce,"y",h(i)),y(te,"stroke-width",2*h(o)-h(c)),y(te,"d",h(C))}),R(t,X),ae()}var s8=ue('<path class="arrow-line" fill="none"></path>'),a8=ue('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function l8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T();let v=M(e,"tool",8),m=M(e,"arrowId",8),C=M(e,"boundingBox",8);const b=Zt(v().toolId,Rt)??Ku,O="round",w="round",x=crypto.randomUUID(),k=`arrow-mask-${m()}-${x}`,U=`arrow-marker-${m()}-${x}`;D(()=>Z(v()),()=>{A(n,v().shape??b)}),D(()=>Z(C()),()=>{A(r,C().x)}),D(()=>Z(C()),()=>{A(i,C().y)}),D(()=>h(n),()=>{var re;A(o,((re=h(n))==null?void 0:re.r)??.4)}),D(()=>h(n),()=>{var re;A(a,((re=h(n))==null?void 0:re.stroke)??"gray")}),D(()=>h(n),()=>{var re;A(c,((re=h(n))==null?void 0:re.strokeWidth)??.1)}),D(()=>h(n),()=>{var re;A(u,((re=h(n))==null?void 0:re.strokeDasharray)??0)}),D(()=>h(n),()=>{var re;A(_,((re=h(n))==null?void 0:re.opacity)??.8)}),D(()=>(h(o),h(n)),()=>{var re,Ce,be,ge;A(p,{shortenHead:h(o),shortenTail:((Ce=(re=h(n))==null?void 0:re.linePathOptions)==null?void 0:Ce.shortenTail)??.2,bezierRounding:((ge=(be=h(n))==null?void 0:be.linePathOptions)==null?void 0:ge.bezierRounding)??.4})}),D(()=>Z(v()),()=>{A(g,ls(v().cells))}),Oe(),he();var z=a8(),Y=de(z);y(Y,"id",k);var B=K(Y),X=F(B);W(Y);var ee=F(Y);As(ee,{id:U,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var ce=F(ee);y(ce,"mask",`url(#${k??""})`);var te=F(ce);st(te,1,()=>v().lines,Lt,(re,Ce)=>{var be=Se(),ge=de(be);{var Ue=Qe=>{var Ne=s8();J(()=>y(Ne,"d",ls(h(Ce),h(p)))),y(Ne,"stroke-linejoin",O),y(Ne,"stroke-linecap",w),y(Ne,"marker-end",`url(#${U??""})`),J(()=>{y(Ne,"stroke",h(a)),y(Ne,"stroke-width",h(c)),y(Ne,"opacity",h(_)),y(Ne,"stroke-dasharray",h(u))}),R(Qe,Ne)};fe(ge,Qe=>{h(Ce).length>1&&Qe(Ue)})}R(re,be)}),J(()=>{y(Y,"x",h(r)),y(Y,"y",h(i)),y(B,"x",h(r)),y(B,"y",h(i)),y(X,"stroke-width",2*h(o)-h(c)),y(X,"d",h(g)),y(ce,"d",h(g)),y(ce,"stroke-width",2*h(o)+h(c)),y(ce,"stroke",h(a))}),R(t,z),ae()}var c8=ue('<g class="arrow-tool"><!></g>');function u8(t,e){se(e,!1);const n=T();let r=M(e,"tool",8),i=M(e,"arrowId",8),o=M(e,"boundingBox",8);const a=Zt(r().toolId,Rt)??Ku;D(()=>Z(r()),()=>{A(n,r().shape??a)}),Oe(),he();var c=c8(),u=K(c);{var _=g=>{o8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return o()}})},p=g=>{l8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return o()}})};fe(u,g=>{h(n).type===$.BULBOUS_ARROW?g(_):g(p,!1)})}W(c),R(t,c),ae()}var d8=ue("<g></g>"),_8=ue('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function f8(t,e){se(e,!1);const n=it(),r=()=>Ee(ZF,"$arrowToolsStore",n),i=T();let o=M(e,"boundingBox",8);D(()=>r(),()=>{A(i,r())}),Oe();var a=_8();st(a,5,()=>h(i),Lt,(c,u)=>{let _=()=>h(u).toolId,p=()=>h(u).element;var g=d8();st(g,5,()=>Object.entries(p()),v=>v[0],(v,m)=>{u8(v,{get arrowId(){return h(m)[0]},get tool(){return h(m)[1]},get boundingBox(){return o()}})}),W(g),J(()=>Zr(g,`element-group ${_()}`)),R(c,g)}),W(a),R(t,a),ae()}var g8=ue('<!><path fill="none"></path>',1);function h8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8),u=M(e,"id",8);const _=c().cell,p=Zt(c().toolId,Rt)??BI,g=.3;function v(x,k){const U=Za(k),z=new De(U.c,U.r).normalise().scale(g),Y=Xn(x),B=Y.subtract(z),X=Y.add(z);return[B,X]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;D(()=>Z(c()),()=>{A(n,c().direction)}),D(()=>Z(c()),()=>{A(r,c().shape??p)}),D(()=>h(r),()=>{A(i,h(r).strokeWidth??.1)}),D(()=>h(r),()=>{A(o,h(r).stroke??"black")}),D(()=>h(n),()=>{A(a,gl(v(_,h(n))))}),Oe(),he();var b=g8(),O=de(b);As(O,{id:C,l:.15,get stroke(){return h(o)},get strokeWidth(){return h(i)}});var w=F(O);y(w,"marker-end",`url(#${C??""})`),J(()=>{y(w,"d",h(a)),y(w,"stroke",h(o)),y(w,"stroke-width",h(i))}),R(t,b),ae()}var p8=ue('<path fill="none"></path>'),v8=ue("<!><!>",1);function m8(t,e){se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"tool",8),a=M(e,"id",8);const c=o().cell,u=Zt(o().toolId,Rt)??HI,_=.2;function p(w,x){const k=Za(x),U=new De(k.c,k.r),Y=Xn(w).add(U.scale(.4));return[Y.subtract(U.normalise().scale(_)),Y]}function g(w){return gl(p(c,w))}const v=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${a()}-${v}`;D(()=>Z(o()),()=>{A(n,o().shape??u)}),D(()=>h(n),()=>{A(r,h(n).strokeWidth??.08)}),D(()=>h(n),()=>{A(i,h(n).stroke??"black")}),Oe(),he();var C=v8(),b=de(C);As(b,{id:m,l:.1,get stroke(){return h(i)},get strokeWidth(){return h(r)}});var O=F(b);st(O,1,()=>o().directions,Lt,(w,x)=>{var k=p8();J(()=>y(k,"d",g(h(x)))),y(k,"marker-end",`url(#${m??""})`),J(()=>{y(k,"stroke",h(i)),y(k,"stroke-width",h(r))}),R(w,k)}),R(t,C),ae()}var E8=ue('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function us(t,e){se(e,!1);const n=T();let r=M(e,"value",8,""),i=M(e,"fontSize",8,.2),o=M(e,"x",8),a=M(e,"y",8),c=M(e,"position",8,"TL"),u=M(e,"fontColor",8,"var(--text-primary-color)"),_=M(e,"fontWeight",8,400),p=T(null),g=T(null);function v(x,k,U){const z=["TL","TR"].includes(U),B=["TL","BL"].includes(U)?x+.05:x,X=k;return new De(B,X)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function C(x){return["TL","TR"].includes(x)?"text-before-edge":""}LI(()=>{if(!h(p)||!h(g))return;const x=h(p).getBBox();h(g).setAttribute("x",String(x.x)),h(g).setAttribute("y",String(x.y+x.height*.1)),h(g).setAttribute("width",String(x.width)),h(g).setAttribute("height",String(x.height*.8))}),D(()=>(Z(o()),Z(a()),Z(c())),()=>{A(n,v(o(),a(),c()))}),Oe(),he();var b=Se(),O=de(b);{var w=x=>{var k=E8(),U=de(k);bi(U,B=>A(g,B),()=>h(g));var z=F(U);J(()=>y(z,"text-anchor",m(c()))),J(()=>y(z,"dominant-baseline",C(c())));var Y=K(z,!0);W(z),bi(z,B=>A(p,B),()=>h(p)),J(()=>{var B,X;y(z,"x",(B=h(n))==null?void 0:B.x),y(z,"y",(X=h(n))==null?void 0:X.y),y(z,"font-size",i()),y(z,"fill",u()),y(z,"font-weight",_()),nt(Y,r())}),R(x,k)};fe(O,x=>{r().length&&x(w)})}R(t,b),ae()}var C8=ie("<!> <!>",1);function Zp(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"cells",8),o=M(e,"shape",8,Vu),a=M(e,"value",8,void 0);D(()=>Z(i()),()=>{A(n,i()[0])}),D(()=>h(n),()=>{A(r,new De(h(n).c,h(n).r))}),Oe(),he();var c=C8(),u=de(c);cs(u,{get cells(){return i()},get shape(){return o()}});var _=F(u,2);{var p=g=>{us(g,{get value(){return a()},get x(){return h(r).x},get y(){return h(r).y},position:"TL"})};fe(_,g=>{a()&&a().length&&g(p)})}R(t,c),ae()}var b8=ue("<rect></rect>");function O8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T();let m=M(e,"cx",8),C=M(e,"cy",8),b=M(e,"shape",8);D(()=>Z(b()),()=>{A(n,b().r??.5)}),D(()=>(Z(m()),h(n)),()=>{A(r,m()-h(n))}),D(()=>(Z(C()),h(n)),()=>{A(i,C()-h(n))}),D(()=>h(n),()=>{A(o,2*h(n))}),D(()=>h(n),()=>{A(a,2*h(n))}),D(()=>Z(b()),()=>{A(c,b().stroke??"black")}),D(()=>Z(b()),()=>{A(u,b().strokeWidth??.02)}),D(()=>Z(b()),()=>{A(_,b().fill??"none")}),D(()=>Z(b()),()=>{A(p,b().angle??0)}),D(()=>Z(b()),()=>{A(g,b().strokeDasharray??0)}),D(()=>Z(b()),()=>{A(v,b().opacity??1)}),Oe(),he();var O=b8();J(()=>{y(O,"x",h(r)),y(O,"y",h(i)),y(O,"width",h(o)),y(O,"height",h(a)),y(O,"stroke",h(c)),y(O,"stroke-width",h(u)),y(O,"fill",h(_)),y(O,"transform",`rotate(${h(p)}, ${m()}, ${C()})`),y(O,"stroke-dasharray",h(g)),y(O,"opacity",h(v))}),R(t,O),ae()}var I8=ue('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Yg(t,e){se(e,!1);const n=it(),r=()=>Ee(zF,"$minimumConstraintsStore",n),i=()=>Ee(YF,"$maximumConstraintsStore",n),o=T(),a=T(),c=T();let u=M(e,"coord",8),_=M(e,"minOrMax",8);function p(O,w){const x=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let U=0;U<k.length;U++){let z=k[U];const Y={r:O.r+z[1],c:O.c+z[0]};x[U]=!Object.values(w).some(B=>Ve(Y,B.cell))}return x}function g(O,w){let x=MF(_(),O.r,O.c);const k=p(O,w);return x=x.filter((z,Y)=>k[Y]),x.map(z=>Io(z,!1)).join("")}function v(O,w){return _()==="max"?w:O}D(()=>Z(u()),()=>{A(o,u().c)}),D(()=>Z(u()),()=>{A(a,u().r)}),D(()=>(r(),i()),()=>{A(c,v(r(),i()))}),Oe(),he();var m=I8(),C=K(m);y(C,"width",1),y(C,"height",1);var b=F(C);J(()=>y(b,"d",g(u(),h(c)))),W(m),J(()=>{y(C,"x",h(o)),y(C,"y",h(a))}),R(t,m),ae()}var w8=ue("<circle></circle>");function Ar(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"x",8),_=M(e,"y",8),p=M(e,"shape",8);D(()=>Z(p()),()=>{A(n,p().r??.35)}),D(()=>Z(p()),()=>{A(r,p().stroke??"black")}),D(()=>Z(p()),()=>{var v;A(i,(v=p())==null?void 0:v.opacity)}),D(()=>Z(p()),()=>{A(o,p().strokeWidth??.02)}),D(()=>Z(p()),()=>{A(a,p().fill??"none")}),D(()=>Z(p()),()=>{A(c,p().strokeDasharray??0)}),Oe(),he();var g=w8();J(()=>{y(g,"cx",u()),y(g,"cy",_()),y(g,"r",h(n)),y(g,"stroke",h(r)),y(g,"stroke-width",h(o)),y(g,"fill",h(a)),y(g,"opacity",h(i)),y(g,"stroke-dasharray",h(c))}),R(t,g),ae()}var L8=ue("<ellipse></ellipse>");function y8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T();let _=M(e,"cx",8),p=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().width??.5)}),D(()=>Z(g()),()=>{A(r,g().height??.5)}),D(()=>Z(g()),()=>{A(i,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;A(o,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{A(a,g().strokeWidth??.02)}),D(()=>Z(g()),()=>{A(c,g().fill??"none")}),D(()=>Z(g()),()=>{A(u,g().angle??0)}),Oe(),he();var v=L8();J(()=>{y(v,"cx",_()),y(v,"cy",p()),y(v,"rx",h(n)/2),y(v,"ry",h(r)/2),y(v,"stroke",h(i)),y(v,"stroke-width",h(a)),y(v,"fill",h(c)),y(v,"opacity",h(o)),y(v,"transform",`rotate(${h(u)}, ${_()}, ${p()} )`)}),R(t,v),ae()}var A8=ue("<polygon></polygon>");function Fa(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let p=M(e,"cx",8),g=M(e,"cy",8),v=M(e,"shape",8);D(()=>Z(v()),()=>{A(n,v().n??3)}),D(()=>Z(v()),()=>{A(r,v().r??.5)}),D(()=>(h(r),h(n),Z(p()),Z(g())),()=>{A(i,Xp(h(r),h(n),new De(p(),g())))}),D(()=>h(i),()=>{A(o,h(i).map(C=>`${C.x},${C.y}`).join(" "))}),D(()=>Z(v()),()=>{A(a,v().stroke??"black")}),D(()=>Z(v()),()=>{A(c,v().strokeWidth??.02)}),D(()=>Z(v()),()=>{A(u,v().fill??"none")}),D(()=>Z(v()),()=>{A(_,v().angle??0)}),Oe(),he();var m=A8();J(()=>{y(m,"points",h(o)),y(m,"stroke",h(a)),y(m,"stroke-width",h(c)),y(m,"fill",h(u)),y(m,"transform",`rotate(${h(_)}, ${p()}, ${g()} )`)}),R(t,m),ae()}var N8=ue("<rect></rect>");function S8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T();let _=M(e,"cx",8),p=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().width??.5)}),D(()=>Z(g()),()=>{A(r,g().height??.5)}),D(()=>(Z(_()),h(n)),()=>{A(i,_()-h(n)/2)}),D(()=>(Z(p()),h(r)),()=>{A(o,p()-h(r)/2)}),D(()=>Z(g()),()=>{A(a,g().stroke||"black")}),D(()=>Z(g()),()=>{A(c,g().strokeWidth||.023)}),D(()=>Z(g()),()=>{A(u,g().fill||"none")}),Oe(),he();var v=N8();J(()=>{y(v,"x",h(i)),y(v,"y",h(o)),y(v,"width",h(n)),y(v,"height",h(r)),y(v,"stroke",h(a)),y(v,"stroke-width",h(c)),y(v,"fill",h(u))}),R(t,v),ae()}function pl(t,e){se(e,!1);const n=T();let r=M(e,"cx",8),i=M(e,"cy",8),o=M(e,"shape",8);D(()=>(Z(o()),$),()=>{var p;A(n,((p=o())==null?void 0:p.type)??$.CIRCLE)}),Oe(),he();var a=Se(),c=de(a);{var u=p=>{Ar(p,{get x(){return r()},get y(){return i()},get shape(){return o()}})},_=p=>{var g=Se(),v=de(g);{var m=b=>{y8(b,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},C=b=>{var O=Se(),w=de(O);{var x=U=>{O8(U,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},k=U=>{var z=Se(),Y=de(z);{var B=ee=>{S8(ee,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},X=ee=>{var ce=Se(),te=de(ce);{var re=be=>{Fa(be,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},Ce=be=>{Ar(be,{get x(){return r()},get y(){return i()},get shape(){return o()}})};fe(te,be=>{h(n)===$.POLYGON?be(re):be(Ce,!1)},!0)}R(ee,ce)};fe(Y,ee=>{h(n)===$.RECTANGLE?ee(B):ee(X,!1)},!0)}R(U,z)};fe(w,U=>{h(n)===$.SQUARE?U(x):U(k,!1)},!0)}R(b,O)};fe(v,b=>{h(n)===$.ELLIPSE?b(m):b(C,!1)},!0)}R(p,g)};fe(c,p=>{h(n)===$.CIRCLE?p(u):p(_,!1)})}R(t,a),ae()}var x8=ue("<circle></circle>");function R8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"x",8),_=M(e,"y",8),p=M(e,"value",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().r??.35)}),D(()=>Z(g()),()=>{A(r,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;A(i,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{A(o,g().strokeWidth??.02)}),D(()=>Z(p()),()=>{A(a,p()==="1"?"var(--constraint-color-red)":p()==="2"?"var(--constraint-color-green)":p()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>Z(g()),()=>{A(c,g().strokeDasharray??0)}),Oe(),he();var v=x8();J(()=>{y(v,"cx",u()),y(v,"cy",_()),y(v,"r",h(n)),y(v,"stroke",h(r)),y(v,"stroke-width",h(o)),y(v,"fill",h(a)),y(v,"opacity",h(i)),y(v,"stroke-dasharray",h(c))}),R(t,v),ae()}var T8=ue('<g class="single-cell-tool"><!><!></g>');function D8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8),u=M(e,"id",8);const _=c().cell,p=Zt(c().toolId,Rt)??PI;D(()=>Z(c()),()=>{A(n,c().shape??p)}),D(()=>(h(n),$),()=>{var w;A(r,((w=h(n))==null?void 0:w.type)||$.CIRCLE)}),D(()=>{},()=>{A(i,{x:_.c+.5,y:_.r+.5})}),D(()=>De,()=>{A(o,new De(_.c,_.r))}),D(()=>Z(c()),()=>{A(a,c().value)}),Oe(),he();var g=T8(),v=K(g);{var m=w=>{Yg(w,{coord:_,minOrMax:"min"})},C=w=>{var x=Se(),k=de(x);{var U=Y=>{Yg(Y,{coord:_,minOrMax:"max"})},z=Y=>{var B=Se(),X=de(B);{var ee=te=>{R8(te,{get x(){return h(i).x},get y(){return h(i).y},get value(){return h(a)},get shape(){return h(n)}})},ce=te=>{var re=Se(),Ce=de(re);{var be=Ue=>{Zp(Ue,{cells:[_],get shape(){return h(n)},get value(){return c().value}})},ge=Ue=>{pl(Ue,{get cx(){return h(i).x},get cy(){return h(i).y},get shape(){return h(n)}})};fe(Ce,Ue=>{h(r)===$.CAGE?Ue(be):Ue(ge,!1)},!0)}R(te,re)};fe(X,te=>{c().toolId===d.COLORED_COUNTING_CIRCLES?te(ee):te(ce,!1)},!0)}R(Y,B)};fe(k,Y=>{c().toolId===d.MAXIMUM?Y(U):Y(z,!1)},!0)}R(w,x)};fe(v,w=>{c().toolId===d.MINIMUM?w(m):w(C,!1)})}var b=F(v);{var O=w=>{us(w,{get value(){return h(a)},get x(){return h(o).x},get y(){return h(o).y},position:"TL"})};fe(b,w=>{h(r)!==$.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&h(a)&&w(O)})}W(g),J(()=>y(g,"id",`constraint-${u()}`)),R(t,g),ae()}var k8=ue("<g></g>"),G8=ue('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function M8(t,e){se(e,!1);const n=it(),r=()=>Ee(Nd,"$singleCellToolsStore",n),i=T();D(()=>r(),()=>{A(i,r())}),Oe();var o=G8();st(o,5,()=>h(i),Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var p=k8();st(p,5,()=>Object.entries(_()),g=>g[0],(g,v)=>{var m=Se(),C=de(m);{var b=w=>{h8(w,{get tool(){return h(v)[1]},get id(){return h(v)[0]}})},O=w=>{var x=Se(),k=de(x);{var U=Y=>{m8(Y,{get tool(){return h(v)[1]},get id(){return h(v)[0]}})},z=Y=>{var B=Se(),X=de(B);{var ee=ce=>{D8(ce,{get tool(){return h(v)[1]},get id(){return h(v)[0]}})};fe(X,ce=>{h(v)[1].type==="SIMPLE"&&ce(ee)},!0)}R(Y,B)};fe(k,Y=>{h(v)[1].type==="MULTIARROW"?Y(U):Y(z,!1)},!0)}R(w,x)};fe(C,w=>{h(v)[1].type==="ARROW"?w(b):w(O,!1)})}R(g,m)}),W(p),J(()=>Zr(p,`element-group ${u()}`)),R(a,p)}),W(o),R(t,o),ae()}function U8(t,e){const n=t.getRow(e.r);return new Set(n)}function F8(t,e){const n=t.getCol(e.c);return new Set(n)}function $8(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function P8(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function B8(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function H8(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function W8(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function z8(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function Y8(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((v,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function j8(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function V8(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function K8(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(P8(t,i))),e.get(d.ANTIKING)&&(r=r.union(B8(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(H8(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(z8(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(W8(t,i)))),r}function nu(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=V8(t,n,c);i=new Set([...i,...u])}return i}function X8(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],_=Y8(t,i,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=j8(t,i,u);r=new Set([...r,..._])}return r=nu(t,e,i,d.KILLER_CAGE,r),r=nu(t,e,i,d.PARITY_BALANCE_CAGE,r),r=nu(t,e,i,d.SPOTLIGHT_CAGE,r),r}function Qp(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...U8(i,e),...F8(i,e),...$8(i,e)])),n=new Set([...n,...K8(i,r,e)]),n=new Set([...n,...X8(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function q8(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(Qp(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var Z8=ue('<tspan class="svelte-xct9ah"> </tspan>'),Q8=ue('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function J8(t,e){se(e,!1);const n=T();let r=M(e,"cell",8),i=M(e,"seen_values",8);const o=.25;function a(p){return i().find(v=>v===p)!==void 0}D(()=>Z(r()),()=>{A(n,Xn({r:r().r,c:r().c}))}),Oe(),he();var c=Se(),u=de(c);{var _=p=>{var g=Q8(),v=K(g);y(v,"font-size",o),st(v,5,()=>r().centerMarks,Lt,(m,C)=>{var b=Z8();const O=qe(()=>a(h(C)));J(()=>wt(b,"conflict",h(O)));var w=K(b,!0);W(b),J(()=>nt(w,h(C))),R(m,b)}),W(v),W(g),J(()=>{y(v,"x",h(n).x),y(v,"y",h(n).y),y(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),R(p,g)};fe(u,p=>{r().centerMarks.length&&p(_)})}R(t,c),ae()}var e4=ue('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),t4=ue('<g class="corner-marks-group"></g>');function n4(t,e){se(e,!1);let n=M(e,"cell",8),r=M(e,"seen_values",8);const i=.25,o=.28;function a(g){const v=g.cornerMarks.slice(0,8),m=Xn({r:g.r,c:g.c});return v.map((C,b)=>{const O=kF(b,o);return{pos:m.add(O),value:C,idx:b}})}function c(g){return r().find(m=>m===g)!==void 0}he();var u=Se(),_=de(u);{var p=g=>{var v=t4();st(v,5,()=>a(n()),Lt,(m,C)=>{let b=()=>h(C).pos,O=()=>h(C).value;var w=e4();y(w,"font-size",i);const x=qe(()=>c(O()));var k=K(w,!0);W(w),J(()=>{y(w,"x",b().x),y(w,"y",b().y),wt(w,"conflict",h(x)),nt(k,O())}),R(m,w)}),W(v),R(g,v)};fe(_,g=>{n().cornerMarks.length&&g(p)})}R(t,u),ae()}var r4=ue('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),i4=ue('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),o4=ue('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),s4=ue("<!><!>",1),a4=ue('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function l4(t,e){se(e,!1);const n=it(),r=()=>Ee(Jr,"$settingsStore",n),i=()=>Ee(bs,"$puzzleStore",n),o=()=>Ee(qt,"$toolStore",n),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T();let m=M(e,"cell",8);const C=.8,b=400;function O(z,Y){if(!z)return[];let X=[...Qp(h(p),Y.toCoords())].map(ee=>ee.value).filter(ee=>ee!==null);return X=[...new Set(X)],X}function w(z){return z?"1":"0"}D(()=>Z(m()),()=>{A(a,m().value)}),D(()=>Z(m()),()=>{A(c,m().given)}),D(()=>Z(m()),()=>{A(u,Xn({r:m().r,c:m().c}))}),D(()=>r(),()=>{A(_,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{A(p,i())}),D(()=>r(),()=>{A(g,r().showSolution)}),D(()=>(h(_),Z(m())),()=>{A(v,O(h(_),m()))}),Oe(),he();var x=Se(),k=de(x);{var U=z=>{var Y=a4(),B=K(Y);{var X=ce=>{var te=Se(),re=de(te);{var Ce=be=>{var ge=r4();y(ge,"font-size",C),y(ge,"font-weight",b);var Ue=K(ge,!0);W(ge),J(()=>{y(ge,"x",h(u).x),y(ge,"y",h(u).y),nt(Ue,m().region)}),R(be,ge)};fe(re,be=>{m().region!==null&&be(Ce)})}R(ce,te)},ee=ce=>{var te=Se(),re=de(te);{var Ce=ge=>{var Ue=Se(),Qe=de(Ue);{var Ne=ye=>{var lt=i4();y(lt,"font-size",C),y(lt,"font-weight",b);var Ye=K(lt,!0);J(()=>nt(Ye,w(m().fog))),W(lt),J(()=>{y(lt,"x",h(u).x),y(lt,"y",h(u).y)}),R(ye,lt)};fe(Qe,ye=>{m().fog!==null&&ye(Ne)})}R(ge,Ue)},be=ge=>{var Ue=Se(),Qe=de(Ue);{var Ne=lt=>{var Ye=o4();y(Ye,"font-size",C),y(Ye,"font-weight",b);var On=K(Ye,!0);W(Ye),J(()=>{y(Ye,"x",h(u).x),y(Ye,"y",h(u).y),wt(Ye,"given",h(c)),nt(On,h(a))}),R(lt,Ye)},ye=lt=>{var Ye=s4(),On=de(Ye);n4(On,{get cell(){return m()},get seen_values(){return h(v)}});var Mn=F(On);J8(Mn,{get cell(){return m()},get seen_values(){return h(v)}}),R(lt,Ye)};fe(Qe,lt=>{h(a)!==null?lt(Ne):lt(ye,!1)},!0)}R(ge,Ue)};fe(re,ge=>{o()===d.FOG?ge(Ce):ge(be,!1)},!0)}R(ce,te)};fe(B,ce=>{o()===d.REGIONS?ce(X):ce(ee,!1)})}W(Y),J(()=>wt(Y,"hide-given",m().given)),R(z,Y)};fe(k,z=>{h(g)||z(U)})}R(t,x),ae()}var c4=ue("<path></path>"),u4=ue('<g class="highlights-group"></g>');function d4(t,e){se(e,!1);const n=it(),r=()=>Ee(qt,"$toolStore",n);let i=M(e,"cell",8);function o(_){const p=Xn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,C)=>{let b=TF(C,g);b=b.map(w=>w.add(p));const O=Io(b,!0);return{colorId:m,d:O}})}he();var a=Se(),c=de(a);{var u=_=>{var p=Se(),g=de(p);{var v=m=>{var C=u4();st(C,5,()=>o(i()),Lt,(b,O)=>{let w=()=>h(O).colorId,x=()=>h(O).d;var k=c4();J(()=>{Zr(k,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),y(k,"d",x())}),R(b,k)}),W(C),R(m,C)};fe(g,m=>{i().highlights.length&&m(v)})}R(_,p)};fe(c,_=>{r()!==d.REGIONS&&_(u)})}R(t,a),ae()}var _4=ue('<path class="cell-marker" fill="none"></path>'),f4=ue('<circle fill="none" opacity="0.9"></circle>');function g4(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"marker",8);const o=.3,a=.08;D(()=>Z(i()),()=>{A(n,qp(i(),o))}),D(()=>Z(i()),()=>{A(r,hl(i().colorId,"black"))}),Oe(),he();var c=Se(),u=de(c);{var _=g=>{var v=_4();y(v,"stroke-width",a),J(()=>{y(v,"d",h(n)),y(v,"stroke",h(r))}),R(g,v)},p=g=>{var v=f4();y(v,"r",o),y(v,"stroke-width",a),J(()=>{Zr(v,`cell-marker color-${i().colorId??""}`),y(v,"cx",i().c),y(v,"cy",i().r),y(v,"stroke",h(r))}),R(g,v)};fe(u,g=>{i().marker==="X"?g(_):g(p,!1)})}R(t,c),ae()}var h4=ue('<g class="cell-markers"></g>');function p4(t,e){let n=M(e,"markers",8);var r=h4();st(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{g4(i,{get marker(){return h(o)}})}),W(r),R(t,r)}var v4=ue('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function m4(t,e){se(e,!1);const n=T();let r=M(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(p=>[new De(p.p1.c,p.p1.r),new De(p.p2.c,p.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?hl(_,"black"):"darkred"}D(()=>Z(r()),()=>{A(n,Io(o(r().draftLine)))}),Oe(),he();var c=v4();J(()=>y(c,"stroke",a(r()))),y(c,"stroke-width",i),y(c,"opacity",.5),J(()=>y(c,"d",h(n))),R(t,c),ae()}var E4=ue('<path fill="none" opacity="0.9"></path>');function C4(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"marker",8);const o=.08,a=.04;D(()=>Z(i()),()=>{A(n,qp(i(),o))}),D(()=>Z(i()),()=>{A(r,hl(i().colorId,"black"))}),Oe(),he();var c=E4();y(c,"stroke-width",a),J(()=>{y(c,"d",h(n)),Zr(c,`edge-marker color-${i().colorId??""}`),y(c,"stroke",h(r))}),R(t,c),ae()}var b4=ue('<g class="edge-markers"></g>');function O4(t,e){let n=M(e,"markers",8);var r=b4();st(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{C4(i,{get marker(){return h(o)}})}),W(r),R(t,r)}var I4=ue('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),w4=ue('<g class="line-markers svelte-yha19m"></g>');function L4(t,e){se(e,!1);let n=M(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return hl(c,"black")}he();var a=w4();st(a,5,n,c=>i(c),(c,u)=>{var _=I4();y(_,"stroke-width",r),J(()=>y(_,"stroke",o(h(u).colorId))),J(()=>{y(_,"x1",h(u).p1.c),y(_,"y1",h(u).p1.r),y(_,"x2",h(u).p2.c),y(_,"y2",h(u).p2.r),Zr(_,`line-marker color-${h(u).colorId??""} svelte-yha19m`)}),R(c,_)}),W(a),R(t,a),ae()}var y4=ue('<g class="pen-tool"><!><!><!><!></g>');function A4(t,e){se(e,!1);const n=it(),r=()=>Ee(ka,"$penToolStore",n),i=T();D(()=>r(),()=>{A(i,{draftLine:r().draftLine,mode:r().mode})}),Oe(),he();var o=y4(),a=K(o);L4(a,{get lineMarkers(){return r().lineMarkers}});var c=F(a);O4(c,{get markers(){return r().edgeMarkers}});var u=F(c);p4(u,{get markers(){return r().cellMarkers}});var _=F(u);m4(_,{get draftLineMarker(){return h(i)}}),W(o),R(t,o),ae()}var N4=ue('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function S4(t,e){se(e,!1);const n=it(),r=()=>Ee(Ii,"$selectionStore",n),i=()=>Ee(Jr,"$settingsStore",n),o=()=>Ee(bs,"$puzzleStore",n),a=()=>Ee(qt,"$toolStore",n),c=T(),u=T(),_=T(),p=T(),g={type:$.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(O,w){return O.length?q8(h(_),O):[]}D(()=>r(),()=>{A(c,r().cells)}),D(()=>i(),()=>{A(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{A(_,o())}),D(()=>a(),()=>{A(p,ju(a()))}),Oe(),he();var m=Se(),C=de(m);{var b=O=>{var w=N4(),x=K(w),k=qe(()=>v(h(c),h(_)));cs(x,{get cells(){return h(k)},shape:g}),W(w),R(O,w)};fe(C,O=>{h(u)&&h(p)&&O(b)})}R(t,m),ae()}function vl(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...hp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function x4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...vl(r))}return new Set(e)}function R4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...vl(r))}return new Set(e)}function T4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...vl(r))}return new Set(e)}function D4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function k4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function G4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function M4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=vl(i);o.length&&e.push(...o)}return new Set(e)}function U4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...x4(t),...R4(t),...T4(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(D4(t))),e.get(d.ANTIKING)&&(n=n.union(k4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(G4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(M4(t))),n}function F4(t,e){return[...new Set([...U4(t,e)])]}var $4=ue('<rect class="conflict svelte-4mp6ok"></rect>'),P4=ue('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function B4(t,e){se(e,!1);const n=it(),r=()=>Ee(Jr,"$settingsStore",n),i=()=>Ee(_n,"$gridStore",n),o=()=>Ee(Tr,"$globalConstraintsStore",n),a=()=>Ee(dn,"$cellsStore",n),c=T(),u=T(),_=T(),p=T();$.CAGE;function g(b){return F4(h(u),h(_)).map(x=>x.toCoords())}D(()=>r(),()=>{A(c,r().checkConflicts)}),D(()=>i(),()=>{A(u,i())}),D(()=>o(),()=>{A(_,o())}),D(()=>a(),()=>{A(p,a())}),Oe(),he();var v=Se(),m=de(v);{var C=b=>{var O=P4();st(O,5,()=>g(h(p)),Lt,(w,x)=>{var k=$4();y(k,"width",1),y(k,"height",1),J(()=>{y(k,"x",h(x).c),y(k,"y",h(x).r)}),R(w,k)}),W(O),R(b,O)};fe(m,b=>{h(c)&&b(C)})}R(t,v),ae()}var H4=ue('<line class="diag svelte-ylotlw"></line>'),W4=ue('<line class="antidiag svelte-ylotlw"></line>'),z4=ue('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),Y4=ue('<line class="diag svelte-ylotlw"></line>'),j4=ue('<line class="antidiag svelte-ylotlw"></line>'),V4=ue('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),K4=ue('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function X4(t,e){se(e,!1);const n=it(),r=()=>Ee(Tr,"$globalConstraintsStore",n),i=()=>Ee(_n,"$gridStore",n),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T(),m=T(),C=T(),b=T(),O=T(),w=0,x=0,k=0,U=0;D(()=>r(),()=>{A(o,r())}),D(()=>(h(o),d),()=>{A(a,!!h(o).get(d.POSITIVE_DIAGONAL))}),D(()=>(h(o),d),()=>{A(c,!!h(o).get(d.NEGATIVE_DIAGONAL))}),D(()=>(h(o),d),()=>{A(u,!!h(o).get(d.NEGATIVE_ANTIDIAGONAL))}),D(()=>(h(o),d),()=>{A(_,!!h(o).get(d.POSITIVE_ANTIDIAGONAL))}),D(()=>(h(o),d),()=>{A(p,!!h(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),D(()=>(h(o),d),()=>{A(g,!!h(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),D(()=>i(),()=>{A(v,i())}),D(()=>h(v),()=>{A(m,h(v).nCols)}),D(()=>h(v),()=>{A(C,h(v).nRows)}),D(()=>h(v),()=>{A(b,h(v).nCols)}),D(()=>h(v),()=>{A(O,h(v).nRows)}),Oe(),he();var z=K4(),Y=K(z);{var B=Ne=>{var ye=H4();y(ye,"x1",w),y(ye,"y1",x),J(()=>{y(ye,"x2",h(b)),y(ye,"y2",h(O))}),R(Ne,ye)};fe(Y,Ne=>{h(c)&&Ne(B)})}var X=F(Y);{var ee=Ne=>{var ye=W4();y(ye,"x1",w),y(ye,"y1",x),J(()=>{y(ye,"x2",h(b)),y(ye,"y2",h(O))}),R(Ne,ye)};fe(X,Ne=>{h(u)&&Ne(ee)})}var ce=F(X);{var te=Ne=>{var ye=z4();y(ye,"x1",w),y(ye,"y1",x),J(()=>{y(ye,"x2",h(b)),y(ye,"y2",h(O))}),R(Ne,ye)};fe(ce,Ne=>{h(p)&&Ne(te)})}var re=F(ce);{var Ce=Ne=>{var ye=Y4();y(ye,"x2",U),y(ye,"y1",k),J(()=>{y(ye,"x1",h(m)),y(ye,"y2",h(C))}),R(Ne,ye)};fe(re,Ne=>{h(a)&&Ne(Ce)})}var be=F(re);{var ge=Ne=>{var ye=j4();y(ye,"x2",U),y(ye,"y1",k),J(()=>{y(ye,"x1",h(m)),y(ye,"y2",h(C))}),R(Ne,ye)};fe(be,Ne=>{h(_)&&Ne(ge)})}var Ue=F(be);{var Qe=Ne=>{var ye=V4();y(ye,"x2",U),y(ye,"y1",k),J(()=>{y(ye,"x1",h(m)),y(ye,"y2",h(C))}),R(Ne,ye)};fe(Ue,Ne=>{h(g)&&Ne(Qe)})}W(z),R(t,z),ae()}var q4=ue('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function Z4(t,e){se(e,!1);const n=it(),r=()=>Ee(dn,"$cellsStore",n),i=()=>Ee(Lp,"$showFogStore",n),o=()=>Ee(el,"$solutionStore",n),a=()=>Ee(_n,"$gridStore",n),c=T(),u=T(),_=T(),p=T(),g=T(),v=T();let m=M(e,"boundingBox",8),C=M(e,"gridShape",8);function b(Ce){const be=Ce.filter(ye=>ye.fog);if(!h(g))return be.map(lt=>lt.toCoords());const ge=Ce.filter(ye=>ye.value===h(g)[ye.r][ye.c]);let Ue=new Set;for(const ye of ge){const lt=h(v).getNeighboorCells(ye);Ue=new Set([...lt,ye])}return[...new Set(be).difference(Ue)].map(ye=>ye.toCoords())}D(()=>r(),()=>{A(c,r())}),D(()=>h(c),()=>{A(u,b(h(c)))}),D(()=>h(u),()=>{A(_,to(h(u),0))}),D(()=>i(),()=>{A(p,i())}),D(()=>o(),()=>{A(g,o())}),D(()=>a(),()=>{A(v,a())}),Oe(),he();var O=q4(),w=K(O),x=K(w);W(w);var k=F(w),U=K(k);y(U,"stroke-width",.5);var z=F(U);y(z,"stroke-width",.375);var Y=F(z);y(Y,"stroke-width",.25);var B=F(Y);y(B,"stroke-width",.125),Zi(),W(k);var X=F(k),ee=K(X);Zi(),W(X);var ce=F(X),te=K(ce),re=F(te);y(re,"x",0),y(re,"y",0),W(ce),W(O),J(()=>{y(x,"d",h(_)),wt(k,"disabled",!h(p)),wt(X,"disabled",!h(p)),y(ee,"x",m().x),y(ee,"y",m().y),y(ee,"width",m().width),y(ee,"height",m().height),y(te,"x",m().x),y(te,"y",m().y),y(te,"width",m().width),y(te,"height",m().height),y(re,"width",C().nCols),y(re,"height",C().nRows)}),R(t,O),ae()}var Q4=ue('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function J4(t,e){se(e,!1);const n=it(),r=()=>Ee(Lp,"$showFogStore",n),i=T();let o=M(e,"gridShape",8);D(()=>r(),()=>{A(i,r())}),Oe(),he();var a=Q4(),c=K(a);y(c,"x",0),y(c,"y",0),W(a),J(()=>{y(a,"visibility",h(i)?"visible":"hidden"),y(c,"width",o().nCols),y(c,"height",o().nRows)}),R(t,a),ae()}var e$=ue('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function t$(t,e){se(e,!1);const n=T();let r=M(e,"r",8),i=M(e,"c",8),o=M(e,"val",8);const a=.8,c=400;D(()=>(Z(r()),Z(i())),()=>{A(n,Xn({r:r(),c:i()}))}),Oe(),he();var u=Se(),_=de(u);{var p=g=>{var v=e$();y(v,"font-size",a),y(v,"font-weight",c);var m=K(v,!0);W(v),J(()=>{y(v,"x",h(n).x),y(v,"y",h(n).y),nt(m,o())}),R(g,v)};fe(_,g=>{o()!==null&&g(p)})}R(t,u),ae()}var n$=ue('<g class="solution-layer"></g>');function r$(t,e){se(e,!1);const n=it(),r=()=>Ee(el,"$solutionStore",n),i=()=>Ee(Jr,"$settingsStore",n),o=()=>Ee(Ja,"$gameModeStore",n),a=T(),c=T(),u=T();D(()=>r(),()=>{A(a,r())}),D(()=>i(),()=>{A(c,i().showSolution)}),D(()=>o(),()=>{A(u,o())}),Oe(),he();var _=Se(),p=de(_);{var g=v=>{var m=n$();st(m,5,()=>h(a),Lt,(C,b,O)=>{var w=Se(),x=de(w);st(x,1,()=>h(b),Lt,(k,U,z)=>{t$(k,{r:O,c:z,get val(){return h(U)}})}),R(C,w)}),W(m),R(v,m)};fe(p,v=>{h(a)&&h(c)&&h(u)===ro.SETTING&&v(g)})}R(t,_),ae()}var i$=ue("<g></g>"),o$=ue('<g mask="url(#fog-mask-fog)"></g>');function Kr(t,e){let n=M(e,"elements",8),r=M(e,"g_name",8),i=M(e,"Component",8);var o=o$();st(o,5,n,Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var p=i$();st(p,5,()=>Object.entries(_()),g=>g[0],(g,v)=>{i()(g,{get tool(){return h(v)[1]}})}),W(p),J(()=>Zr(p,`element-group ${u()}`)),R(a,p)}),W(o),J(()=>Zr(o,II(r()))),R(t,o)}var s$=ue('<line class="svelte-yr67cf"></line>');function a$(t,e){se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"shape",8),a=M(e,"coords",8);const[c,u]=a(),_=u.c,p=c.c===u.c?u.c+1:u.c,g=u.r,v=c.r===u.r?u.r+1:u.r;D(()=>Z(o()),()=>{A(n,o().stroke??"black")}),D(()=>Z(o()),()=>{var C;A(r,(C=o())==null?void 0:C.opacity)}),D(()=>Z(o()),()=>{A(i,o().strokeWidth??.02)}),Oe(),he();var m=s$();y(m,"x1",_),y(m,"x2",p),y(m,"y1",g),y(m,"y2",v),J(()=>{y(m,"stroke",h(n)),y(m,"stroke-width",h(i)),y(m,"opacity",h(r))}),R(t,m),ae()}var l$=ue('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function c$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8);const u=c().cells,_=Zt(c().toolId,Rt)??xh;function p(b,O){return O===$.TEXT_ONLY?b.value?b.value:"-":b.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const b=Xn(u[0]);return Xn(u[1]).subtract(b).angle()/(2*Math.PI)*360}D(()=>Z(c()),()=>{A(n,c().shape??_)}),D(()=>Ua,()=>{A(r,KU(Ua(u)))}),D(()=>(h(n),$),()=>{var b;A(i,((b=h(n))==null?void 0:b.type)||$.CIRCLE)}),D(()=>h(n),()=>{var b;A(o,((b=h(n))==null?void 0:b.fontSize)??.2)}),D(()=>h(n),()=>{var b;A(a,((b=h(n))==null?void 0:b.fontColor)??"black")}),Oe(),he();var v=Se(),m=de(v);{var C=b=>{var O=l$(),w=K(O);{var x=Y=>{Ar(Y,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},k=Y=>{var B=Se(),X=de(B);{var ee=te=>{Ar(te,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},ce=te=>{var re=Se(),Ce=de(re);{var be=Ue=>{a$(Ue,{coords:u,get shape(){return h(n)}})},ge=Ue=>{pl(Ue,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return h(n)}})};fe(Ce,Ue=>{h(i)===$.BORDER_LINE?Ue(be):Ue(ge,!1)},!0)}R(te,re)};fe(X,te=>{h(i)===$.TEXT_ONLY?te(ee):te(ce,!1)},!0)}R(Y,B)};fe(w,Y=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?Y(x):Y(k,!1)})}var U=F(w);J(()=>y(U,"transform",`rotate(${g()}, ${h(r).x}, ${h(r).y} )`));var z=K(U,!0);J(()=>nt(z,p(c(),h(i)))),W(U),W(O),J(()=>{y(U,"x",h(r).x),y(U,"y",h(r).y),y(U,"font-size",h(o)),y(U,"fill",h(a))}),R(b,O)};fe(m,b=>{u.length===2&&b(C)})}R(t,v),ae()}var u$=ue('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),d$=ue('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),_$=ue('<g class="quadruple-text"><!></g>');function f$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"cornerTool",8);const u=c().cells,_=new De(u[u.length-1].c,u[u.length-1].r),p=Zt(c().toolId,Rt)??Rh;D(()=>Z(c()),()=>{A(n,c().value)}),D(()=>Z(c()),()=>{A(r,c().shape??p)}),D(()=>h(r),()=>{var C;A(i,((C=h(r))==null?void 0:C.fontSize)??.2)}),D(()=>h(r),()=>{var C;A(o,((C=h(r))==null?void 0:C.fontColor)??"black")}),D(()=>h(n),()=>{var C;A(a,h(n)?(C=h(n))==null?void 0:C.split(","):[])}),Oe(),he();var g=Se(),v=de(g);{var m=C=>{var b=_$(),O=K(b);{var w=k=>{var U=u$(),z=K(U,!0);J(()=>nt(z,h(a).join(" "))),W(U),J(()=>{y(U,"x",_.x),y(U,"y",_.y),y(U,"font-size",h(i)),y(U,"fill",h(o))}),R(k,U)},x=k=>{var U=d$(),z=de(U),Y=K(z,!0);J(()=>nt(Y,h(a).slice(0,2).join(" "))),W(z);var B=F(z),X=K(B,!0);J(()=>nt(X,h(a).slice(2).join(" "))),W(B),J(()=>{y(z,"x",_.x),y(z,"y",_.y),y(z,"dy",-h(i)/2),y(z,"font-size",h(i)),y(z,"fill",h(o)),y(B,"x",_.x),y(B,"y",_.y),y(B,"dy",h(i)/2),y(B,"font-size",h(i)),y(B,"fill",h(o))}),R(k,U)};fe(O,k=>{h(a).length<=2?k(w):k(x,!1)})}W(b),J(()=>y(b,"data-count",h(a).length)),R(C,b)};fe(v,C=>{h(n)&&C(m)})}R(t,g),ae()}var g$=ue('<text text-anchor="middle" dominant-baseline="central"> </text>'),h$=ue('<g class="corner-tool"><!><!></g>');function p$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T();let a=M(e,"tool",8);const c=a().cells,u=Zt(a().toolId,Rt)??Rh,_=new De(c[c.length-1].c,c[c.length-1].r);function p(C,b){return b===$.TEXT_ONLY?C.value?C.value:"-":C.value??""}D(()=>Z(a()),()=>{A(n,a().shape??u)}),D(()=>(h(n),$),()=>{var C;A(r,((C=h(n))==null?void 0:C.type)??$.CIRCLE)}),D(()=>h(n),()=>{var C;A(i,((C=h(n))==null?void 0:C.fontSize)??.2)}),D(()=>h(n),()=>{var C;A(o,((C=h(n))==null?void 0:C.fontColor)??"black")}),Oe(),he();var g=Se(),v=de(g);{var m=C=>{var b=h$(),O=K(b);pl(O,{get cx(){return _.x},get cy(){return _.y},get shape(){return h(n)}});var w=F(O);{var x=U=>{f$(U,{get cornerTool(){return a()}})},k=U=>{var z=g$(),Y=K(z,!0);J(()=>nt(Y,p(a(),h(r)))),W(z),J(()=>{y(z,"x",_.x),y(z,"y",_.y),y(z,"font-size",h(i)),y(z,"fill",h(o))}),R(U,z)};fe(w,U=>{a().toolId===d.QUADRUPLE?U(x):U(k,!1)})}W(b),R(C,b)};fe(v,C=>{c.length===4&&C(m)})}R(t,g),ae()}var v$=ue('<text text-anchor="middle" dominant-baseline="central"> </text>'),m$=ue('<g class="center-corner-or-edge-tool"><!><!></g>');function E$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"tool",8);const _=u().cell,p=Zt(u().toolId,Rt)??xh;function g(w,x){return x===$.TEXT_ONLY?w.value?w.value:"-":w.value??""}D(()=>Z(u()),()=>{A(n,u().shape??p)}),D(()=>{},()=>{A(r,_)}),D(()=>(h(n),$),()=>{var w;A(i,((w=h(n))==null?void 0:w.type)||$.CIRCLE)}),D(()=>h(n),()=>{var w;A(o,((w=h(n))==null?void 0:w.fontSize)??.2)}),D(()=>h(n),()=>{var w;A(a,((w=h(n))==null?void 0:w.fontColor)??"black")}),D(()=>h(r),()=>{A(c,h(r).r%1===.5&&h(r).c%1===.5)}),Oe(),he();var v=m$(),m=K(v);pl(m,{get cx(){return h(r).c},get cy(){return h(r).r},get shape(){return h(n)}});var C=F(m);{var b=w=>{var x=qe(()=>g(u(),h(i))),k=qe(()=>Math.floor(h(r).c)),U=qe(()=>Math.floor(h(r).r));us(w,{get value(){return h(x)},get x(){return h(k)},get y(){return h(U)},position:"TL",get fontColor(){return h(a)}})},O=w=>{var x=v$(),k=K(x,!0);J(()=>nt(k,g(u(),h(i)))),W(x),J(()=>{y(x,"x",h(r).c),y(x,"y",h(r).r),y(x,"font-size",h(o)),y(x,"fill",h(a))}),R(w,x)};fe(C,w=>{h(c)?w(b):w(O,!1)})}W(v),R(t,v),ae()}var C$=ue('<path fill="none"></path>');function Li(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"linePoints",8),_=M(e,"shape",8,void 0);const p="round",g="round";D(()=>Z(_()),()=>{var m;A(n,((m=_())==null?void 0:m.stroke)??"gray")}),D(()=>Z(_()),()=>{var m;A(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),D(()=>Z(_()),()=>{var m;A(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),D(()=>Z(_()),()=>{var m;A(o,((m=_())==null?void 0:m.strokeDashoffset)??0)}),D(()=>Z(_()),()=>{var m,C,b,O,w,x,k,U;A(a,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((O=(b=_())==null?void 0:b.linePathOptions)==null?void 0:O.shortenTail)??.2,bezierRounding:((x=(w=_())==null?void 0:w.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:((U=(k=_())==null?void 0:k.linePathOptions)==null?void 0:U.closeLoops)??!1})}),D(()=>(Z(u()),h(a)),()=>{A(c,gl(u(),h(a)))}),Oe(),he();var v=C$();y(v,"stroke-linejoin",p),y(v,"stroke-linecap",g),J(()=>{y(v,"d",h(c)),y(v,"stroke",h(n)),y(v,"stroke-width",h(r)),y(v,"stroke-dasharray",h(i)),y(v,"stroke-dashoffset",h(o))}),R(t,v),ae()}var b$=ie("<!> <!> <!>",1);function jg(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T();let a=M(e,"linePoints",8),c=M(e,"shape",8,_s);function u(O){var k;const w=St.cloneDeep(O);w.r=w.r||.2;const x=w.r;return w.strokeDasharray=O.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(k=w.linePathOptions)==null?void 0:k.bezierRounding},w}D(()=>Z(a()),()=>{A(n,a().length)}),D(()=>(h(n),Z(a())),()=>{A(r,h(n)>=0?a()[0]:void 0)}),D(()=>(h(n),Z(a())),()=>{A(i,h(n)>=0?a()[h(n)-1]:void 0)}),D(()=>Z(c()),()=>{A(o,u(c()))}),Oe(),he();var _=b$(),p=de(_);{var g=O=>{Ar(O,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(o)}})};fe(p,O=>{h(r)&&O(g)})}var v=F(p,2);{var m=O=>{Li(O,{get linePoints(){return a()},get shape(){return h(o)}})};fe(v,O=>{h(n)>1&&O(m)})}var C=F(v,2);{var b=O=>{Ar(O,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(o)}})};fe(C,O=>{h(i)&&O(b)})}R(t,_),ae()}var O$=ie("<!> <!> <!>",1);function Vg(t,e){se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"linePoints",8),a=M(e,"shape",12,_s);const c=4,u=.5;function _(U,z){const Y=z.r??u,B=z.n??c,X=z.angle??0,ee=Xp(Y,B,new De(0,0),!0,0),ce=(B+(U-X/360)*B%B)%B,te=Math.floor(ce)%B,re=Math.ceil(ce)%B;return ee[te].lerp(ee[re],ce%1).length()}function p(U){if(h(n)<=1)return 0;const z=o()[0],B=o()[1].subtract(z).angle()/(2*Math.PI);return _(B,U)}function g(U){if(h(n)<=1)return 0;const z=o()[h(n)-1],B=o()[h(n)-2].subtract(z).angle()/(2*Math.PI);return _(B,U)}function v(U){var Y;const z=St.cloneDeep(U);return z.r=z.r||u,z.opacity=1,z.linePathOptions={shortenHead:p(z),shortenTail:g(z),bezierRounding:(Y=z.linePathOptions)==null?void 0:Y.bezierRounding},z}D(()=>Z(o()),()=>{A(n,o().length)}),D(()=>(h(n),Z(o())),()=>{A(r,h(n)>=0?o()[0]:void 0)}),D(()=>(h(n),Z(o())),()=>{A(i,h(n)>=0?o()[h(n)-1]:void 0)}),D(()=>Z(a()),()=>{a(v(a()))}),Oe(),he();var m=O$(),C=de(m);{var b=U=>{Fa(U,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return a()}})};fe(C,U=>{h(r)&&U(b)})}var O=F(C,2);{var w=U=>{Li(U,{get linePoints(){return o()},get shape(){return a()}})};fe(O,U=>{h(n)>1&&U(w)})}var x=F(O,2);{var k=U=>{Fa(U,{get cx(){return h(i).x},get cy(){return h(i).y},get shape(){return a()}})};fe(x,U=>{h(i)&&U(k)})}R(t,m),ae()}var I$=ie("<!> <!>",1);function Kg(t,e){se(e,!1);const n=T();let r=M(e,"linePoints",8),i=M(e,"shape",8,_s);function o(m){var O,w,x;const C=St.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const b=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||b,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}function a(m){var O,w,x;const C=St.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const b=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||b,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}D(()=>Z(r()),()=>{A(n,r().length>0?r()[0]:void 0)}),Oe(),he();var c=I$(),u=de(c);{var _=m=>{var C=qe(()=>o(i()));Li(m,{get linePoints(){return r()},get shape(){return h(C)}})};fe(u,m=>{r().length>1&&m(_)})}var p=F(u,2);{var g=m=>{var C=qe(()=>o(i()));Ar(m,{get x(){return h(n).x},get y(){return h(n).y},get shape(){return h(C)}})},v=m=>{var C=Se(),b=de(C);{var O=w=>{var x=qe(()=>a(i()));Fa(w,{get cx(){return h(n).x},get cy(){return h(n).y},get shape(){return h(x)}})};fe(b,w=>{h(n)&&w(O)},!0)}R(m,C)};fe(p,m=>{h(n)&&i().type===$.THERMO_WITH_CIRCLE?m(g):m(v,!1)})}R(t,c),ae()}var w$=ue("<!><!>",1),L$=ue("<!><!>",1),y$=ue("<!><!>",1),A$=ue("<!><!>",1),N$=ue('<g class="line-tool"><!></g>');function S$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8);const u=Zt(c().toolId,Rt)??_s;D(()=>Z(c()),()=>{A(n,Ua(c().cells))}),D(()=>Z(c()),()=>{A(r,c().shape??u)}),D(()=>(h(r),$),()=>{var m;A(i,((m=h(r))==null?void 0:m.type)||$.LINE)}),D(()=>h(r),()=>{var m;A(o,((m=h(r))==null?void 0:m.opacity)??1)}),D(()=>h(r),()=>{A(a,{...h(r),stroke:"var(--grid-background-color)",strokeWidth:h(r).strokeWidth?h(r).strokeWidth+.08:.08})}),Oe(),he();var _=N$(),p=K(_);{var g=m=>{var C=w$(),b=de(C);{var O=x=>{jg(x,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(b,x=>{x(O)})}var w=F(b);jg(w,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(m,C)},v=m=>{var C=Se(),b=de(C);{var O=x=>{var k=L$(),U=de(k);{var z=B=>{Vg(B,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(U,B=>{B(z)})}var Y=F(U);Vg(Y,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(x,k)},w=x=>{var k=Se(),U=de(k);{var z=B=>{var X=y$(),ee=de(X);{var ce=re=>{Kg(re,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(ee,re=>{re(ce)})}var te=F(ee);Kg(te,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(B,X)},Y=B=>{var X=A$(),ee=de(X);{var ce=re=>{Li(re,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(ee,re=>{re(ce)})}var te=F(ee);Li(te,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(B,X)};fe(U,B=>{h(i)===$.THERMO_WITH_CIRCLE||h(i)===$.THERMO_WITH_POLYGON?B(z):B(Y,!1)},!0)}R(x,k)};fe(b,x=>{h(i)===$.LINE_WITH_POLYGON_ENDS?x(O):x(w,!1)},!0)}R(m,C)};fe(p,m=>{h(i)===$.LINE_WITH_CIRCLE_ENDS?m(g):m(v,!1)})}W(_),J(()=>y(_,"opacity",h(o))),R(t,_),ae()}var x$=ue('<g class="cage-tool"><!></g>');function R$(t,e){se(e,!1);const n=T();let r=M(e,"tool",8);const i=Zt(r().toolId,Rt)??Vu;D(()=>Z(r()),()=>{A(n,r().shape??i)}),Oe(),he();var o=x$(),a=K(o);Zp(a,{get cells(){return r().cells},get shape(){return h(n)},get value(){return r().value}}),W(o),R(t,o),ae()}var T$=ie("<!> <!> <!> <!>",1);function D$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let p=M(e,"tool",8);const g=Zt(p().toolId,Rt)??WI,v=800,m=p().value;D(()=>Z(p()),()=>{A(n,p().shape??g)}),D(()=>h(n),()=>{A(r,h(n).inset??.15)}),D(()=>h(n),()=>{A(i,h(n).strokeWidth??.07)}),D(()=>h(n),()=>{A(o,h(n).fontColor??h(n).stroke??"black")}),D(()=>Z(p()),()=>{A(a,p().cells[p().cells.length-1])}),D(()=>Z(p()),()=>{A(c,p().cells2[p().cells2.length-1])}),D(()=>(h(a),h(r)),()=>{A(u,new De(h(a).c+1-h(r)-.05,h(a).r+1-h(r)-.05))}),D(()=>(h(c),h(r)),()=>{A(_,new De(h(c).c+1-h(r)-.05,h(c).r+1-h(r)-.05))}),Oe(),he();var C=T$(),b=de(C);cs(b,{get cells(){return p().cells},get shape(){return h(n)}});var O=F(b,2);us(O,{value:m,get x(){return h(u).x},get y(){return h(u).y},position:"BR",get fontColor(){return h(o)},fontWeight:v});var w=F(O,2);cs(w,{get cells(){return p().cells2},get shape(){return h(n)}});var x=F(w,2);us(x,{value:m,get x(){return h(_).x},get y(){return h(_).y},position:"BR",get fontColor(){return h(o)},fontWeight:v}),R(t,C),ae()}var k$=ue('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function G$(t,e){var Y;se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"tool",8);const a=o().cell,c=o().direction,u=Yh(a,c),_=Xn(a),p=Zt(o().toolId,Rt)??zI,g=((Y=h(n))==null?void 0:Y.fontSize)??.5,v=.03;function m(B){return B.value&&B.value.length?B.value:"-"}function C(){const ee=Xn(u).subtract(_).length(),ce={shortenHead:.3*ee,shortenTail:.55*ee};return ls([a,u],ce)}const O=`outside-tool-arrow-marker-${crypto.randomUUID()}`;D(()=>Z(o()),()=>{A(n,o().shape??p)}),D(()=>h(n),()=>{var B;A(r,((B=h(n))==null?void 0:B.fontColor)??"var(--text-primary-color)")}),D(()=>h(n),()=>{var B;A(i,((B=h(n))==null?void 0:B.stroke)??"var(--text-primary-color)")}),Oe(),he();var w=k$(),x=K(w);As(x,{id:O,l:.07,strokeWidth:v,get stroke(){return h(i)}});var k=F(x);J(()=>y(k,"d",C())),y(k,"stroke-width",v),y(k,"marker-end",`url(#${O??""})`);var U=F(k);y(U,"font-size",g);var z=K(U,!0);J(()=>nt(z,m(o()))),W(U),W(w),J(()=>{y(k,"stroke",h(i)),y(U,"x",_.x),y(U,"y",_.y),y(U,"fill",h(r))}),R(t,w),ae()}var M$=ie("<!> <!> <!>",1);function U$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"linePoints",8),u=M(e,"shape",8);function _(O){const w=St.cloneDeep(O);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}D(()=>Z(c()),()=>{A(n,c().length)}),D(()=>(h(n),Z(c())),()=>{A(r,h(n)>1&&c()[0].equals(c()[h(n)-1]))}),D(()=>(h(n),Z(c())),()=>{A(i,h(n)>=0?c()[0]:void 0)}),D(()=>(h(n),Z(c())),()=>{A(o,h(n)>=0?c()[h(n)-1]:void 0)}),D(()=>Z(u()),()=>{A(a,_(u()))}),Oe(),he();var p=M$(),g=de(p);Li(g,{get linePoints(){return c()},get shape(){return u()}});var v=F(g,2);{var m=O=>{Ar(O,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(a)}})};fe(v,O=>{!h(r)&&h(i)&&O(m)})}var C=F(v,2);{var b=O=>{Ar(O,{get x(){return h(o).x},get y(){return h(o).y},get shape(){return h(a)}})};fe(C,O=>{!h(r)&&h(o)&&O(b)})}R(t,p),ae()}var F$=ue('<g class="corner-line-tool"><!></g>');function $$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T();let a=M(e,"tool",8);const c=Zt(a().toolId,Rt)??_s;D(()=>(Z(a()),De),()=>{A(n,a().coords.map(v=>new De(v.c,v.r)))}),D(()=>Z(a()),()=>{A(r,a().shape??c)}),D(()=>(h(r),$),()=>{var v;A(i,((v=h(r))==null?void 0:v.type)||$.LINE)}),D(()=>h(r),()=>{var v;A(o,((v=h(r))==null?void 0:v.opacity)??1)}),Oe(),he();var u=F$(),_=K(u);{var p=v=>{U$(v,{get linePoints(){return h(n)},get shape(){return h(r)}})},g=v=>{Li(v,{get linePoints(){return h(n)},get shape(){return h(r)}})};fe(_,v=>{h(i)===$.MAZE_WALL?v(p):v(g,!1)})}W(u),J(()=>y(u,"opacity",h(o))),R(t,u),ae()}var P$=ue('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function B$(t,e){se(e,!1);const n=it(),r=()=>Ee(_n,"$gridStore",n),i=()=>Ee(pt,"$localConstraintsStore",n),o=()=>Ee(qt,"$toolStore",n),a=()=>Ee(dn,"$cellsStore",n),c=()=>Ee(QF,"$cageToolsStore",n),u=()=>Ee(XF,"$lineToolsStore",n),_=()=>Ee(JF,"$cloneToolsStore",n),p=()=>Ee(qF,"$cornerLineToolsStore",n),g=()=>Ee(e8,"$outsideDirectionToolsStore",n),v=()=>Ee(jF,"$edgeToolsStore",n),m=()=>Ee(KF,"$cornerToolsStore",n),C=()=>Ee(VF,"$centerCornerOrEdgeToolsStore",n),b=T(),O=T(),w=T();let x=M(e,"svgRef",12,null);function k(){for(const[Dt,Te]of i().entries()){if(!os(Dt))continue;if(Object.entries(Te).some(([ke,Re])=>!Xt(Re.cell,h(O))))return!0}return!1}function U(Dt,Te){const Ie=k(),ke=os(Te),Re=Ie||ke?1:.2,At=-Re,Rs=-Re,El=Dt.nCols+2*Re,ai=Dt.nRows+2*Re;return{x:At,y:Rs,width:El,height:ai}}function z(Dt){return`${Dt.x} ${Dt.y} ${Dt.width} ${Dt.height}`}D(()=>r(),()=>{A(b,r())}),D(()=>h(b),()=>{A(O,{nRows:h(b).nRows,nCols:h(b).nCols})}),D(()=>(h(O),o()),()=>{A(w,U(h(O),o()))}),Oe(),he();var Y=P$();J(()=>y(Y,"viewBox",z(h(w))));var B=K(Y);Z4(B,{get boundingBox(){return h(w)},get gridShape(){return h(O)}});var X=F(B);J4(X,{get gridShape(){return h(O)}});var ee=F(X);WF(ee,{get grid(){return r()}});var ce=F(ee);wF(ce,{get gridShape(){return h(O)}});var te=F(ce);st(te,5,a,Lt,(Dt,Te)=>{d4(Dt,{get cell(){return h(Te)}})}),W(te);var re=F(te);S4(re,{});var Ce=F(re);M8(Ce,{});var be=F(Ce);Kr(be,{get elements(){return c()},g_name:"cage-tools-layer",Component:R$});var ge=F(be);Kr(ge,{get elements(){return u()},g_name:"line-tools-layer",Component:S$});var Ue=F(ge);Kr(Ue,{get elements(){return _()},g_name:"clone-tools-layer",Component:D$});var Qe=F(Ue);AF(Qe,{});var Ne=F(Qe);X4(Ne,{});var ye=F(Ne);$F(ye,{});var lt=F(ye);Kr(lt,{get elements(){return p()},g_name:"corner-line-tools-layer",Component:$$});var Ye=F(lt);f8(Ye,{get boundingBox(){return h(w)}});var On=F(Ye);Kr(On,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:G$});var Mn=F(On);BF(Mn,{get boundingBox(){return h(w)}});var Gr=F(Mn);OF(Gr,{});var Qt=F(Gr);Kr(Qt,{get elements(){return v()},g_name:"edge-tools-layer",Component:c$});var hr=F(Qt);Kr(hr,{get elements(){return m()},g_name:"corner-tools-layer",Component:p$});var si=F(hr);Kr(si,{get elements(){return C()},g_name:"center-corner-edge-tools-layer",Component:E$});var rr=F(si);A4(rr,{});var Un=F(rr);st(Un,5,a,Lt,(Dt,Te)=>{l4(Dt,{get cell(){return h(Te)}})}),W(Un);var xi=F(Un);r$(xi,{});var Mr=F(xi);B4(Mr,{}),W(Y),bi(Y,Dt=>x(Dt),()=>x()),R(t,Y),ae()}function H$(t){return rw(t)?(bI(),!0):!1}function W$(t){return iw(t)?(Cp(),!0):!1}function z$(t){return ow(t)?(bp(),!0):!1}function ru(t){(H$(t)||W$(t)||z$(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var Y$=ie('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function j$(t,e){se(e,!1);const n=it(),r=()=>Ee(Kp,"$InputHandlerStore",n),i=()=>Ee(Qi,"$svgRefStore",n),o=T();let a=T(null);function c(v){return m=>{v&&h(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===h(a))&&v(m)}}D(()=>r(),()=>{A(o,r())}),Oe();var u=Y$();Me("keydown",Bc,function(...v){ru==null||ru.apply(this,v)});var _=gg(()=>{var v;return c((v=h(o))==null?void 0:v.keyDown)});Me("keydown",Bc,function(...v){var m;(m=h(_))==null||m.apply(this,v)});var p=gg(()=>{var v;return c((v=h(o))==null?void 0:v.keyUp)});Me("keyup",Bc,function(...v){var m;(m=h(p))==null||m.apply(this,v)});var g=K(u);B$(g,{get svgRef(){return sh(),i()},set svgRef(v){ds(Qi,v)},$$legacy:!0}),W(u),bi(u,v=>A(a,v),()=>h(a)),Me("pointerdown",u,Yc(Kn(v=>{var m;v.currentTarget.focus(),(m=h(o))==null||m.pointerDown(v)})),!0),Me("pointermove",u,Yc(Kn(v=>{var m;v.currentTarget.focus(),(m=h(o))==null||m.pointerMove(v)})),!0),Me("pointerup",u,Yc(Kn(v=>{var m;v.currentTarget.focus(),(m=h(o))==null||m.pointerUp(v)})),!0),R(t,u),ae()}var V$=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function K$(t){var e=V$();R(t,e)}var X$=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function q$(t){var e=X$();R(t,e)}var Z$=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function Q$(t){var e=Z$();R(t,e)}var J$=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function e6(t){var e=J$();R(t,e)}var t6=ie('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function n6(t,e){se(e,!1);const n=it(),r=()=>Ee(mo,"$commandHistoryStore",n),i=()=>Ee(pu,"$selectOnStore",n),o=T(),a=T();function c(){Cp()}function u(){bp()}function _(){console.log("check")}function p(){ds(pu,!i())}D(()=>r(),()=>{A(o,r()._undoStack.length===0)}),D(()=>r(),()=>{A(a,r()._redoStack.length===0)}),Oe(),he();var g=t6(),v=K(g),m=K(v);e6(m),W(v);var C=F(v,2),b=K(C);q$(b),W(C);var O=F(C,2);O.disabled=!0;var w=K(O);K$(w),W(O);var x=F(O,2),k=K(x);Q$(k),W(x),W(g),J(()=>{v.disabled=h(o),C.disabled=h(a),y(x,"aria-checked",i()),wt(x,"active",i())}),Me("click",v,c),Me("click",C,u),Me("click",O,_),Me("click",x,p),R(t,g),ae()}var r6=ie('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),i6=ie('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),o6=ie('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),s6=ie('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function a6(t,e){se(e,!1);const n=it(),r=()=>Ee(Jr,"$settingsStore",n),i=()=>Ee(Ga,"$penColorStore",n),o=()=>Ee(Kp,"$InputHandlerStore",n),a=T(),c=T(),u=[];let _=M(e,"selectedTool",8);const p=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let v=T(!1);function m(B){return B?g:p}function C(B){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(B)}function b(B){const X=B.currentTarget;if(!X)return;const ee=X.getAttribute("aria-checked");A(v,ee!=="true")}D(()=>r(),()=>{A(a,r().penToolActive)}),D(()=>r(),()=>{A(c,r().letterToolActive)}),Oe(),he();var O=s6(),w=K(O);{var x=B=>{var X=Se(),ee=de(X);st(ee,1,()=>p,Lt,(ce,te)=>{var re=r6(),Ce=K(re);Kt(Ce);var be;Zi(2),W(re),J(()=>{y(re,"data-value",h(te)),wt(re,"active",i()===h(te)),be!==(be=h(te))&&(Ce.value=(Ce.__value=h(te))==null?"":h(te))}),Wa(u,[],Ce,()=>(h(te),i()),ge=>ds(Ga,ge)),R(ce,re)}),R(B,X)},k=B=>{var X=Se(),ee=de(X);st(ee,1,()=>m(h(v)),Lt,(ce,te)=>{var re=i6(),Ce=K(re),be=K(Ce,!0);W(Ce),Zi(2),W(re),J(()=>{wI(re,h(te)),nt(be,h(te))}),Me("click",re,function(...ge){var Ue;(Ue=o()&&o().padClick)==null||Ue.apply(this,ge)}),R(ce,re)}),R(B,X)};fe(w,B=>{_()===d.PEN_TOOL&&h(a)?B(x):B(k,!1)})}var U=F(w,2);{var z=B=>{var X=o6();J(()=>{y(X,"aria-checked",h(v)),wt(X,"letter-checked",h(v)),wt(X,"num-checked",!h(v))}),Me("click",X,b),R(B,X)};fe(U,B=>{h(c)&&C(_())&&B(z)})}var Y=F(U,2);W(O),J(()=>{wt(O,"digit",_()===d.DIGIT),wt(O,"center",_()===d.CENTER_PM),wt(O,"corner",_()===d.CORNER_PM),wt(O,"color",_()===d.HIGHLIGHTS),wt(O,"pen",_()===d.PEN_TOOL),wt(Y,"letter-tool",h(c))}),Me("click",Y,function(...B){var X;(X=o()&&o().padClick)==null||X.apply(this,B)}),R(t,O),ae()}var l6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function c6(t){var e=l6();R(t,e)}var u6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function d6(t){var e=u6();R(t,e)}var _6=ie('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Wo(t,e){se(e,!1);const n=[];let r=M(e,"selectedTool",12),i=M(e,"value",8),o=M(e,"title",8,void 0);function a(){vu(i())}he();var c=_6(),u=K(c);Kt(u);var _,p=F(u,2);dt(p,e,"default",{}),W(c),J(()=>{y(c,"title",o()),wt(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),Wa(n,[],u,()=>(i(),r()),r),Me("change",u,a),R(t,c),ae()}var f6=ie('<span aria-hidden="true">1</span>'),g6=ie('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),h6=ie('<span aria-hidden="true" style="font-size: 50%">123</span>'),p6=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),v6=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),m6=ie('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function E6(t,e){se(e,!1);const n=it(),r=()=>Ee(Jr,"$settingsStore",n);let i=M(e,"selectedTool",12);he();var o=m6(),a=K(o);Wo(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=f6();R(v,C)},$$slots:{default:!0},$$legacy:!0});var c=F(a,2);Wo(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=g6();R(v,C)},$$slots:{default:!0},$$legacy:!0});var u=F(c,2);Wo(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=h6();R(v,C)},$$slots:{default:!0},$$legacy:!0});var _=F(u,2);Wo(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var C=p6(),b=K(C);c6(b),W(C),R(v,C)},$$slots:{default:!0},$$legacy:!0});var p=F(_,2);{var g=v=>{Wo(v,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,C)=>{var b=v6(),O=K(b);d6(O),W(b),R(m,b)},$$slots:{default:!0},$$legacy:!0})};fe(p,v=>{r().penToolActive&&v(g)})}W(o),R(t,o),ae()}var C6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function b6(t){var e=C6();R(t,e)}var O6=ie('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ns(t,e){let n=M(e,"title",8,void 0),r=M(e,"clickCb",8,void 0);var i=O6(),o=K(i),a=K(o);dt(a,e,"default",{}),W(o),W(i),J(()=>y(i,"title",n())),Me("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,i)}var I6=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),w6=ie('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function L6(t,e){se(e,!1);let n=M(e,"showModal",12,!1);function r(){n(!1)}function i(){wp(),Ma(),n(!1)}he(),Dr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=w6(),u=F(K(c),2);il(u,{children:(_,p)=>{var g=I6(),v=de(g),m=F(v,2);Me("click",v,i),Me("click",m,r),R(_,g)},$$slots:{default:!0}}),W(c),R(o,c)},$$slots:{default:!0},$$legacy:!0}),ae()}var y6=ie("<!> <!>",1);function A6(t){let e=T(!1);function n(){A(e,!0)}var r=y6(),i=de(r);Ns(i,{title:"Restart",clickCb:n,children:(a,c)=>{b6(a)},$$slots:{default:!0}});var o=F(i,2);L6(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var N6=ie('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function zo(t,e){let n=M(e,"title",8);var r=N6(),i=K(r),o=K(i,!0);W(i);var a=F(i,2);dt(a,e,"default",{}),W(r),J(()=>nt(o,n())),R(t,r)}var S6=ie('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function cn(t,e){let n=M(e,"description",8);var r=S6(),i=K(r),o=K(i,!0);W(i);var a=F(i,2),c=K(a);dt(c,e,"default",{}),W(a),W(r),J(()=>nt(o,n())),R(t,r)}var x6=ie('<div class="shortcut svelte-1cgt5u5"> </div>');function tn(t,e){let n=M(e,"shortcut",8);var r=x6(),i=K(r,!0);W(r),J(()=>nt(i,n())),R(t,r)}var R6=ie("<p></p>"),T6=ie("<!> <!> <!> <!>",1),D6=ie("<!> or <!>",1),k6=ie("<!> <!> <!> <!> <!> <!> <!> <!>",1),G6=ie("<!> <!>",1),M6=ie('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function U6(t,e){let n=M(e,"showModal",12,!1);Dr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=M6(),a=K(o);zo(a,{title:"Setting Instructions",children:(g,v)=>{var m=R6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",R(g,m)},$$slots:{default:!0}});var c=F(a,2);zo(c,{title:"General",children:(g,v)=>{cn(g,{description:"Toggle Darkmode",children:(m,C)=>{tn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=F(c,2);zo(u,{title:"Selection",children:(g,v)=>{var m=T6(),C=de(m);cn(C,{description:"Select cells",children:(x,k)=>{tn(x,{shortcut:"click/drag"})},$$slots:{default:!0}});var b=F(C,2);cn(b,{description:"Add to current selection",children:(x,k)=>{tn(x,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var O=F(b,2);cn(O,{description:"Remove from current selection",children:(x,k)=>{tn(x,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=F(O,2);cn(w,{description:"Add or remove from current selection",children:(x,k)=>{tn(x,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var _=F(u,2);zo(_,{title:"Change Tool",children:(g,v)=>{var m=k6(),C=de(m);cn(C,{description:"Cycle Tool",children:(Y,B)=>{tn(Y,{shortcut:"Space"})},$$slots:{default:!0}});var b=F(C,2);cn(b,{description:"Change to Digit Tool",children:(Y,B)=>{tn(Y,{shortcut:"Z"})},$$slots:{default:!0}});var O=F(b,2);cn(O,{description:"Change to Corner Pencilmark Tool",children:(Y,B)=>{tn(Y,{shortcut:"X"})},$$slots:{default:!0}});var w=F(O,2);cn(w,{description:"Change to Center Pencilmark Tool",children:(Y,B)=>{tn(Y,{shortcut:"C"})},$$slots:{default:!0}});var x=F(w,2);cn(x,{description:"Change to Highlights Tool",children:(Y,B)=>{tn(Y,{shortcut:"V"})},$$slots:{default:!0}});var k=F(x,2);cn(k,{description:"Quickshift To Corner Pencilmark Tool",children:(Y,B)=>{tn(Y,{shortcut:"Shift"})},$$slots:{default:!0}});var U=F(k,2);cn(U,{description:"Quickshift To Center Pencilmark Tool",children:(Y,B)=>{tn(Y,{shortcut:"Ctrl"})},$$slots:{default:!0}});var z=F(U,2);cn(z,{description:"Quickshift To Highlights Tool",children:(Y,B)=>{var X=D6(),ee=de(X);tn(ee,{shortcut:"Shift + Ctrl"});var ce=F(ee,2);tn(ce,{shortcut:"Alt"}),R(Y,X)},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var p=F(_,2);zo(p,{title:"Undo/Redo",children:(g,v)=>{var m=G6(),C=de(m);cn(C,{description:"Undo",children:(O,w)=>{tn(O,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var b=F(C,2);cn(b,{description:"Redo",children:(O,w)=>{tn(O,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}}),W(o),R(r,o)},$$slots:{default:!0},$$legacy:!0})}var F6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function $6(t){var e=F6();R(t,e)}var P6=ie("<!> <!>",1);function B6(t){let e=T(!1);function n(){A(e,!0)}var r=P6(),i=de(r);Ns(i,{title:"Info",clickCb:n,children:(a,c)=>{$6(a)},$$slots:{default:!0}});var o=F(i,2);U6(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var H6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function W6(t){var e=H6();R(t,e)}var z6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function Y6(t){var e=z6();R(t,e)}function j6(t){let e=T(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),A(e,!h(e))}Ns(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=Se(),_=de(u);{var p=v=>{Y6(v)},g=v=>{W6(v)};fe(_,v=>{h(e)?v(p):v(g,!1)})}R(a,u)},$$slots:{default:!0}})}function Jp(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"renderers",8),i=M(e,"options",8);he();var o=Se(),a=de(o);{var c=u=>{var _=Se(),p=de(_);ch(p,()=>r()[n().type],(g,v)=>{v(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,C)=>{var b=Se(),O=de(b);{var w=k=>{$a(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},x=k=>{var U=JO();J(()=>nt(U,n().raw)),R(k,U)};fe(O,k=>{"tokens"in n()&&n().tokens?k(w):k(x,!1)})}R(m,b)},$$slots:{default:!0}})}),R(u,_)};fe(a,u=>{r()[n().type]&&u(c)})}R(t,o),ae()}function $a(t,e){let n=M(e,"tokens",8),r=M(e,"renderers",8),i=M(e,"options",8);var o=Se(),a=de(o);{var c=u=>{var _=Se(),p=de(_);st(p,1,n,Lt,(g,v)=>{Jp(g,{get token(){return h(v)},get renderers(){return r()},get options(){return i()}})}),R(u,_)};fe(a,u=>{n()&&u(c)})}R(t,o)}function ev(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function tv(t){return t.startsWith("/")||t.startsWith("#")}function V6(t,e){return e.slug(t).replace(/--+/g,"-")}function K6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;let o=T();D(()=>(Z(n()),Z(r())),()=>{A(o,V6(n().text,r().slugger))}),Oe(),he();var a=Se(),c=de(a);return dh(c,()=>`h${n().depth}`,!1,(u,_)=>{let p;J(()=>p=lh(u,p,{id:h(o)},void 0,u.namespaceURI===Ou,u.nodeName.includes("-")));var g=Se(),v=de(g);dt(v,e,"default",{}),R(_,g)}),R(t,a),Ze(e,"renderers",i),ae({renderers:i})}var X6=ie("<blockquote><!></blockquote>");function q6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=X6(),a=K(o);return dt(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}function Z6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8),o=T();D(()=>Z(n()),()=>{A(o,n().ordered?"ol":"ul")}),Oe(),he();var a=Se(),c=de(a);dh(c,()=>h(o),!1,(u,_)=>{let p;J(()=>p=lh(u,p,{start:n().start||1},void 0,u.namespaceURI===Ou,u.nodeName.includes("-")));var g=Se(),v=de(g);st(v,1,()=>n().items,Lt,(m,C)=>{var b=qe(()=>({...h(C)}));Jp(m,{get token(){return h(b)},get options(){return r()},get renderers(){return i()}})}),R(_,g)}),R(t,a),ae()}var Q6=ie("<li><!></li>");function J6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=Q6(),a=K(o);return dt(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var eP=ie("<br>");function tP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=eP();return R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var nP=ie("<pre><code> </code></pre>");function rP(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=nP(),a=K(o),c=K(a,!0);return W(a),W(o),J(()=>{AI(a,`lang-${n().lang}`),nt(c,n().text)}),R(t,o),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var iP=ie("<code> </code>");function oP(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=iP(),a=K(o,!0);return J(()=>nt(a,n().raw.slice(1,n().raw.length-1))),W(o),R(t,o),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var sP=ie('<th scope="col"><!></th>'),aP=ie("<td><!></td>"),lP=ie("<tr></tr>"),cP=ie("<table><thead><tr></tr></thead><tbody></tbody></table>");function uP(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8);he();var o=cP(),a=K(o),c=K(a);st(c,5,()=>n().header,Lt,(_,p)=>{var g=sP(),v=K(g);$a(v,{get tokens(){return h(p).tokens},get options(){return r()},get renderers(){return i()}}),W(g),R(_,g)}),W(c),W(a);var u=F(a);st(u,5,()=>n().rows,Lt,(_,p)=>{var g=lP();st(g,5,()=>h(p),Lt,(v,m)=>{var C=aP(),b=K(C);$a(b,{get tokens(){return h(m).tokens},get options(){return r()},get renderers(){return i()}}),W(C),R(v,C)}),W(g),R(_,g)}),W(u),W(o),R(t,o),ae()}function dP(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;he();var o=Se(),a=de(o);return yI(a,()=>n().text),R(t,o),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var _P=ie("<p><!></p>");function fP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=_P(),a=K(o);return dt(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var gP=ie("<a><!></a>");function hP(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=gP();J(()=>y(o,"href",tv(n().href)?ev(r().baseUrl,n().href):n().href));var a=K(o);return dt(a,e,"default",{}),W(o),J(()=>y(o,"title",n().title)),R(t,o),Ze(e,"renderers",i),ae({renderers:i})}function pP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=de(o);return dt(a,e,"default",{}),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var vP=ie("<dfn><!></dfn>");function mP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=vP(),a=K(o);return dt(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var EP=ie("<del><!></del>");function CP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=EP(),a=K(o);return dt(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var bP=ie("<em><!></em>");function OP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=bP(),a=K(o);return dt(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var IP=ie("<hr>");function wP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=IP();return R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var LP=ie("<strong><!></strong>");function yP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=LP(),a=K(o);return dt(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var AP=ie('<img class="markdown-image svelte-z38cge">');function NP(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;he();var o=AP();return J(()=>y(o,"src",tv(n().href)?ev(r().baseUrl,n().href):n().href)),J(()=>{y(o,"title",n().title),y(o,"alt",n().text)}),R(t,o),Ze(e,"renderers",i),ae({renderers:i})}function Xg(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=de(o);return dt(a,e,"default",{}),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}const SP=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,xP=Object.hasOwnProperty;class RP{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=TP(e,n===!0);const o=i;for(;xP.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function TP(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(SP,"").replace(/ /g,"-"))}function Sd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Si=Sd();function nv(t){Si=t}const rv=/[&<>"']/,DP=new RegExp(rv.source,"g"),iv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,kP=new RegExp(iv.source,"g"),GP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qg=t=>GP[t];function xn(t,e){if(e){if(rv.test(t))return t.replace(DP,qg)}else if(iv.test(t))return t.replace(kP,qg);return t}const MP=/(^|[^\[])\^/g;function Ct(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(MP,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Zg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ns={exec:()=>null};function Qg(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Yo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function UP(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Jg(t,e,n,r){const i=e.href,o=e.title?xn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:xn(a)}}function FP(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class Pa{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||Si}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Yo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=FP(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=Yo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Yo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Yo(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const p=u.join(`
`),g=p.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${p}`:p,o=o?`${o}
${g}`:g;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=v,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,b=C.raw+`
`+r.join(`
`),O=this.blockquote(b);a[a.length-1]=O,i=i.substring(0,i.length-C.raw.length)+O.raw,o=o.substring(0,o.length-C.text.length)+O.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,b=C.raw+`
`+r.join(`
`),O=this.list(b);a[a.length-1]=O,i=i.substring(0,i.length-m.raw.length)+O.raw,o=o.substring(0,o.length-C.raw.length)+O.raw,r=b.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",p="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),v=e.split(`
`,1)[0],m=!g.trim(),C=0;if(this.options.pedantic?(C=2,p=g.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,p=g.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(v)&&(_+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),U=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),z=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let B;if(v=Y,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),B=v):B=v.replace(/\t/g,"    "),k.test(v)||U.test(v)||z.test(v)||w.test(v)||x.test(v))break;if(B.search(/[^ ]/)>=C||!v.trim())p+=`
`+B.slice(C);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(g)||U.test(g)||x.test(g))break;p+=`
`+v}!m&&!v.trim()&&(m=!0),_+=Y+`
`,e=e.substring(Y.length+1),g=B.slice(C)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let b=null,O;this.options.gfm&&(b=/^\[[ xX]\] /.exec(p),b&&(O=b[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:_,task:!!b,checked:O,loose:!1,text:p,tokens:[]}),o.raw+=_}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const _=o.items[u].tokens.filter(g=>g.type==="space"),p=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));o.loose=p}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Qg(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(Qg(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:xn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Yo(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=UP(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Jg(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Jg(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,p=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){p+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+p);const v=[...i[0]][0].length,m=e.slice(0,a+i.index+v+u);if(Math.min(a,u)%2){const b=m.slice(1,-1);return{type:"em",raw:m,text:b,tokens:this.lexer.inlineTokens(b)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=xn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=xn(n[1]),i="mailto:"+r):(r=xn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=xn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=xn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=xn(n[0]),{type:"text",raw:n[0],text:r}}}}const $P=/^(?:[ \t]*(?:\n|$))+/,PP=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,BP=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ss=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,HP=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ov=/(?:[*+-]|\d{1,9}[.)])/,sv=Ct(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ov).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),xd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,WP=/^[^\n]+/,Rd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,zP=Ct(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),YP=Ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ov).getRegex(),ml="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Td=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,jP=Ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Td).replace("tag",ml).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),av=Ct(xd).replace("hr",Ss).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),VP=Ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",av).getRegex(),Dd={blockquote:VP,code:PP,def:zP,fences:BP,heading:HP,hr:Ss,html:jP,lheading:sv,list:YP,newline:$P,paragraph:av,table:ns,text:WP},eh=Ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ss).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),KP={...Dd,table:eh,paragraph:Ct(xd).replace("hr",Ss).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",eh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex()},XP={...Dd,html:Ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Td).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ns,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ct(xd).replace("hr",Ss).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,qP=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,cv=/^( {2,}|\\)\n(?!\s*$)/,ZP=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xs="\\p{P}\\p{S}",QP=Ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,xs).getRegex(),JP=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,e9=Ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,xs).getRegex(),t9=Ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,xs).getRegex(),n9=Ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,xs).getRegex(),r9=Ct(/\\([punct])/,"gu").replace(/punct/g,xs).getRegex(),i9=Ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),o9=Ct(Td).replace("(?:-->|$)","-->").getRegex(),s9=Ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",o9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ba=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,a9=Ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ba).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),uv=Ct(/^!?\[(label)\]\[(ref)\]/).replace("label",Ba).replace("ref",Rd).getRegex(),dv=Ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rd).getRegex(),l9=Ct("reflink|nolink(?!\\()","g").replace("reflink",uv).replace("nolink",dv).getRegex(),kd={_backpedal:ns,anyPunctuation:r9,autolink:i9,blockSkip:JP,br:cv,code:qP,del:ns,emStrongLDelim:e9,emStrongRDelimAst:t9,emStrongRDelimUnd:n9,escape:lv,link:a9,nolink:dv,punctuation:QP,reflink:uv,reflinkSearch:l9,tag:s9,text:ZP,url:ns},c9={...kd,link:Ct(/^!?\[(label)\]\((.*?)\)/).replace("label",Ba).getRegex(),reflink:Ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ba).getRegex()},Cu={...kd,escape:Ct(lv).replace("])","~|])").getRegex(),url:Ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},u9={...Cu,br:Ct(cv).replace("{2,}","*").getRegex(),text:Ct(Cu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ya={normal:Dd,gfm:KP,pedantic:XP},jo={normal:kd,gfm:Cu,breaks:u9,pedantic:c9};class Tn{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Si,this.options.tokenizer=this.options.tokenizer||new Pa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:ya.normal,inline:jo.normal};this.options.pedantic?(n.block=ya.pedantic,n.inline=jo.pedantic):this.options.gfm&&(n.block=ya.gfm,this.options.breaks?n.inline=jo.breaks:n.inline=jo.gfm),this.tokenizer.rules=n}static get rules(){return{block:ya,inline:jo}}static lex(e,n){return new Tn(n).lex(e)}static lexInline(e,n){return new Tn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(p=>{_=p.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,_;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)p.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(r=p.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const g=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},g),typeof v=="number"&&v>=0&&(p=Math.min(p,v))}),p<1/0&&p>=0&&(o=e.substring(0,p+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}}class Ha{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||Si}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+xn(i)+'">'+(r?o:xn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:xn(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Zg(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Zg(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Gd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Vn{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||Si,this.options.renderer=this.options.renderer||new Ha,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Gd}static parse(e,n){return new Vn(n).parse(e)}static parseInline(e,n){return new Vn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class rs{constructor(e){ve(this,"options");ve(this,"block");this.options=e||Si}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Tn.lex:Tn.lexInline}provideParser(){return this.block?Vn.parse:Vn.parseInline}}ve(rs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class d9{constructor(...e){ve(this,"defaults",Sd());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",Vn);ve(this,"Renderer",Ha);ve(this,"TextRenderer",Gd);ve(this,"Lexer",Tn);ve(this,"Tokenizer",Pa);ve(this,"Hooks",rs);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new Ha(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new Pa(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new rs;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=o[c];rs.passThroughHooks.has(a)?o[c]=p=>{if(this.defaults.async)return Promise.resolve(u.call(o,p)).then(v=>_.call(o,v));const g=u.call(o,p);return _.call(o,g)}:o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Tn.lex(e,n??this.defaults)}parser(e,n){return Vn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Tn.lex:Tn.lexInline,_=a.hooks?a.hooks.provideParser():e?Vn.parse:Vn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(p=>u(p,a)).then(p=>a.hooks?a.hooks.processAllTokens(p):p).then(p=>a.walkTokens?Promise.all(this.walkTokens(p,a.walkTokens)).then(()=>p):p).then(p=>_(p,a)).then(p=>a.hooks?a.hooks.postprocess(p):p).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let p=u(r,a);a.hooks&&(p=a.hooks.processAllTokens(p)),a.walkTokens&&this.walkTokens(p,a.walkTokens);let g=_(p,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(p){return c(p)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+xn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const yi=new d9;function Et(t,e){return yi.parse(t,e)}Et.options=Et.setOptions=function(t){return yi.setOptions(t),Et.defaults=yi.defaults,nv(Et.defaults),Et};Et.getDefaults=Sd;Et.defaults=Si;Et.use=function(...t){return yi.use(...t),Et.defaults=yi.defaults,nv(Et.defaults),Et};Et.walkTokens=function(t,e){return yi.walkTokens(t,e)};Et.parseInline=yi.parseInline;Et.Parser=Vn;Et.parser=Vn.parse;Et.Renderer=Ha;Et.TextRenderer=Gd;Et.Lexer=Tn;Et.lexer=Tn.lex;Et.Tokenizer=Pa;Et.Hooks=rs;Et.parse=Et;Et.options;Et.setOptions;Et.use;Et.walkTokens;Et.parseInline;Vn.parse;Tn.lex;function _9(t){return new Tn().lex(t)}const f9=()=>({heading:K6,blockquote:q6,list:Z6,list_item:J6,br:tP,code:rP,codespan:oP,table:uP,html:dP,paragraph:fP,link:hP,text:pP,def:mP,del:CP,em:OP,hr:wP,strong:yP,image:NP,space:Xg,escape:Xg}),g9=()=>({baseUrl:"/",slugger:new RP});function h9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},uh(()=>{console.warn=t})}function _v(t,e){se(e,!1),h9();let n=M(e,"source",8),r=M(e,"options",24,()=>({})),i=M(e,"renderers",24,()=>({})),o=T(),a=T(),c=T();D(()=>(Z(n()),Z(i()),Z(r())),()=>{A(o,_9(n())),A(a,{...f9(),...i()}),A(c,{...g9(),...r()})}),Oe(),he(),$a(t,{get tokens(){return h(o)},get renderers(){return h(a)},get options(){return h(c)}}),ae()}var p9=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),v9=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),m9=ie('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function E9(t,e){se(e,!1);const n=it(),r=()=>Ee(Rr,"$puzzleMetaStore",n),i=T();let o=M(e,"showModal",12,!1);function a(u){return u?Ta(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{A(i,r())}),Oe(),he(),Dr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,_)=>{var p=m9(),g=K(p),v=K(g,!0);W(g);var m=F(g,2),C=K(m);J(()=>nt(C,`by ${a(h(i).authors)??""}`)),W(m);var b=F(m,2),O=K(b),w=qe(()=>c(h(i).ruleset));_v(O,{get source(){return h(w)}}),W(b);var x=F(b,2);{var k=Y=>{var B=p9(),X=F(de(B),2);J(()=>y(X,"href",h(i).ctcUrl)),R(Y,B)};fe(x,Y=>{var B,X;(X=(B=h(i))==null?void 0:B.ctcUrl)!=null&&X.length&&Y(k)})}var U=F(x,2);{var z=Y=>{var B=v9(),X=F(de(B),2);J(()=>y(X,"href",h(i).ctcYoutubeUrl)),R(Y,B)};fe(U,Y=>{var B,X;(X=(B=h(i))==null?void 0:B.ctcYoutubeUrl)!=null&&X.length&&Y(z)})}W(p),J(()=>{var Y;return nt(v,((Y=h(i))==null?void 0:Y.title)||"Puzzle")}),R(u,p)},$$slots:{default:!0},$$legacy:!0}),ae()}var C9=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function b9(t){var e=C9();R(t,e)}var O9=ie("<!> <!>",1);function I9(t){let e=T(!1);function n(){A(e,!0)}var r=O9(),i=de(r);Ns(i,{title:"Rules",clickCb:n,children:(a,c)=>{b9(a)},$$slots:{default:!0}});var o=F(i,2);E9(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var w9=ie("<!> <!>",1);function L9(t){let e=T(!1);function n(){A(e,!0)}var r=w9(),i=de(r);Ns(i,{title:"Settings",clickCb:n,children:(a,c)=>{Tp(a)},$$slots:{default:!0}});var o=F(i,2);Dp(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var y9=ie('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function A9(t){var e=y9(),n=K(e);L9(n);var r=F(n,2);I9(r);var i=F(r,2);j6(i);var o=F(i,2);B6(o);var a=F(o,2);A6(a),W(e),R(t,e)}var N9=ie('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function S9(t,e){se(e,!1);const n=it(),r=()=>Ee(Qi,"$svgRefStore",n),i=()=>Ee(Rr,"$puzzleMetaStore",n),o=()=>Ee(qt,"$toolStore",n),a=T(),c=T();function u(){r().focus()}function _(te){return te?Ta(te," & ",", "):"Anonymous"}function p(te){return te&&te.length?te:"Normal sudoku rules apply."}D(()=>i(),()=>{A(a,i().title??"Sudoku")}),D(()=>i(),()=>{A(c,_(i().authors))}),Oe(),he();var g=N9(),v=K(g),m=K(v),C=K(m),b=K(C,!0);W(C);var O=F(C,2),w=K(O);W(O),W(m);var x=F(m,2),k=K(x),U=qe(()=>p(i().ruleset));_v(k,{get source(){return h(U)}}),W(x),W(v);var z=F(v,2),Y=K(z);A9(Y);var B=F(Y,2),X=K(B);a6(X,{get selectedTool(){return o()}});var ee=F(X,2);E6(ee,{get selectedTool(){return sh(),o()},set selectedTool(te){ds(qt,te)},$$legacy:!0}),W(B);var ce=F(B,2);n6(ce,{}),W(z),W(g),J(()=>{nt(b,h(a)),nt(w,`by ${h(c)??""}`)}),Me("click",z,Kn(()=>{u()})),R(t,g),ae()}var x9=ie('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function j9(t,e){se(e,!1);const n=it(),r=()=>Ee(Ja,"$gameModeStore",n),i=T();uh(async()=>{const m=window.location.origin,C=hg===""?m:`${m}/${hg}`;try{await hU({workerURL:`${C}/minizinc-worker.js`,wasmURL:`${C}/minizinc.wasm`,dataURL:`${C}/minizinc.data`})}catch(b){const O="Failed to initialize MiniZinc: "+b.message;console.log(O)}}),D(()=>r(),()=>{A(i,r())}),Oe(),he();var o=x9(),a=K(o),c=K(a);{var u=m=>{VU(m)};fe(c,m=>{h(i)===ro.SETTING&&m(u)})}var _=F(c,2),p=K(_);j$(p,{}),W(_);var g=F(_,2),v=K(g);S9(v,{}),W(g),W(a),W(o),R(t,o),ae()}export{j9 as G,Y9 as b,PR as p,Ma as r,lT as s};
