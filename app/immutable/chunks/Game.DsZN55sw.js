var jO=Object.defineProperty;var VO=(t,e,n)=>e in t?jO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>VO(t,typeof e!="symbol"?e+"":e,n);import{c as iu,o as KO,p as XO,q as bu,a as R,s as de,u as Ue,t as re,d as Ne,v as qO,m as ZO}from"./disclose-version.3svCrsF6.js";import{i as ge}from"./legacy.B_57t12C.js";import{h as Jg,i as Vt,k as is,w as eh,u as qo,R as QO,V as JO,U as eI,j as ou,E as th,D as nh,Z as tI,g as nI,q as _g,y as rI,aJ as Ou,x as iI,v as oI,$ as Iu,aq as rh,J as fg,aK as sI,a0 as aI,a6 as lI,l as cI,c as K,r as W,p as se,s as F,t as J,a as ae,a8 as h,ao as qe,aL as D,a5 as A,aM as Oe,ax as T,au as Z,f as ue,aN as uI,aC as Zi,aO as Bc,an as gg}from"./utils.RIT-VyeY.js";import{s as it,i as he,b as ds,a as be,m as ih}from"./store.NuZ8tbDJ.js";import{s as Jr,u as dI,a as _I,b as fI,c as gI,e as hI,f as pI,g as vI,h as mI,t as EI}from"./global.DsW0GPzn.js";import{e as st,i as Lt}from"./each.PbSqt-vc.js";import{i as CI,p as M}from"./props.C8fmRdit.js";import{w as Ht,g as ut,d as no}from"./index.6EGk5Kis.js";import{s as y,r as Kt,a as oh,c as bI,b as OI,d as sh}from"./attributes.BKzmZSoT.js";import{s as nt}from"./render.B0SnzNQN.js";import{b as bi,c as ah}from"./this.Ddb0X6md.js";import{a as II,o as lh}from"./index-client.BbVhJQV7.js";import{b as hg}from"./paths.DsQVj1zm.js";function wI(t,e,n,r,i){var s=t,a="",c;Jg(()=>{if(a===(a=e()??"")){Vt&&is();return}c!==void 0&&(nh(c),c=void 0),a!==""&&(c=eh(()=>{if(Vt){qo.data;for(var u=is(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=QO(u);if(u===null)throw JO(),eI;iu(qo,_),s=ou(u);return}var v=a+"",g=KO(v);iu(th(g),g.lastChild),s.before(g)}))})}function dt(t,e,n,r,i){var c;Vt&&is();var s=(c=e.$$slots)==null?void 0:c[n],a=!1;s===!0&&(s=e[n==="default"?"children":n],a=!0),s===void 0||s(t,a?()=>r:r)}function ch(t,e,n,r,i,s){let a=Vt;Vt&&is();var c,u,_=null;Vt&&qo.nodeType===1&&(_=qo,is());var v=Vt?qo:t,g;Jg(()=>{const p=e()||null;var m=p==="svg"?Ou:null;p!==c&&(g&&(p===null?iI(g,()=>{g=null,u=null}):p===u?oI(g):nh(g)),p&&p!==u&&(g=eh(()=>{if(_=Vt?_:m?document.createElementNS(m,p):document.createElement(p),iu(_,_),r){Vt&&XO(p)&&_.append(document.createComment(""));var C=Vt?th(_):_.appendChild(nI());Vt&&(C===null?_g(!1):ou(C)),r(_,C)}rI.nodes_end=_,v.before(_)})),c=p,c&&(u=c))},tI),a&&(_g(!0),ou(v))}function Zr(t,e,n){var r=t.__className,i=uh(e);Vt&&t.getAttribute("class")===i?t.__className=i:(r!==i||Vt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function LI(t,e,n){var r=t.__className,i=uh(e);Vt&&t.className===i?t.__className=i:(r!==i||Vt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function uh(t,e){return(t??"")+""}function wt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function jn(t,e,n=e){var r=sI();bu(t,"input",i=>{var s=i?t.defaultValue:t.value;if(s=Wc(t)?zc(s):s,n(s),r&&s!==(s=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=s??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(Vt&&t.defaultValue!==t.value||aI(e)==null&&t.value)&&n(Wc(t)?zc(t.value):t.value),Iu(()=>{var i=e();Wc(t)&&i===zc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Hc=new Set;function Wa(t,e,n,r,i=r){var s=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),bu(n,"change",()=>{var _=n.__value;s&&(_=pg(a,_,n.checked)),i(_)},()=>i(s?[]:null)),Iu(()=>{var _=r();if(Vt&&n.defaultChecked!==n.checked){c=!0;return}s?(_=_||[],n.checked=_.includes(n.__value)):n.checked=CI(n.__value,_)}),rh(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),Hc.has(a)||(Hc.add(a),fg(()=>{a.sort((_,v)=>_.compareDocumentPosition(v)===4?-1:1),Hc.delete(a)})),fg(()=>{if(c){var _;if(s)_=pg(a,_,n.checked);else{var v=a.find(g=>g.checked);_=v==null?void 0:v.__value}i(_)}})}function pg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Wc(t){var e=t.type;return e==="number"||e==="range"}function zc(t){return t===""?null:+t}function yI(t,e,n=e){bu(t,"change",()=>{n(t.files)}),Iu(()=>{t.files=e()})}function Ze(t,e,n){var r=lI(t,e);r&&r.set&&(t[e]=n,rh(()=>{t[e]=null}))}function AI(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Kn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Yc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function NI(t,e){var s;var n=(s=t.$$events)==null?void 0:s[e.type],r=cI(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var ro=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(ro||{}),wu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(wu||{}),dh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(dh||{}),_h=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(_h||{}),fh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(fh||{}),gh=(t=>(t.UNKNOWN_REGIONS="Unknown Regions",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t))(gh||{}),hh=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(hh||{}),ph=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(ph||{}),vh=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(vh||{}),mh=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(mh||{}),Eh=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(Eh||{}),za=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(za||{}),Lu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Lu||{}),yu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t))(yu||{}),Au=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(Au||{}),Nu=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Nu||{}),Su=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(Su||{}),xu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(xu||{}),Ru=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Ru||{}),Tu=(t=>(t.CLONE_REGION="Clone Region",t))(Tu||{}),Du=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t))(Du||{}),ku=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(ku||{}),Gu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Gu||{}),Mu=(t=>(t.MAZE_WALL="Maze Wall",t))(Mu||{}),Uu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t))(Uu||{}),Fu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Fu||{}),Ch=(t=>(t.PEN_TOOL="Pen Tool",t))(Ch||{});const $u={...dh,..._h,...fh,...ph,...vh,...hh,...mh,...Eh,...gh},bh={...za,...Lu,...yu,...Au,...Nu,...Su,...xu,...Ru,...Tu,...Du,...ku,...Gu,...Mu,...Uu},d={...wu,...$u,...bh,...Fu,...Ch};var S=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(S||{});function SI(t){return Object.values($u).includes(t)}function xI(t){return Object.values(bh).includes(t)}function Pu(t){return Object.values(Lu).includes(t)||t===d.COSMETIC_CELL_ARROW}function Bu(t){return Object.values(yu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function RI(t){return Object.values(za).includes(t)||Pu(t)||Bu(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function Hu(t){return Object.values(Au).includes(t)||t===d.COSMETIC_EDGE}function Oh(t){return Object.values(Nu).includes(t)||t===d.COSMETIC_CORNER}function Wu(t){return Object.values(Su).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function zu(t){return Object.values(xu).includes(t)||t===d.COSMETIC_ARROW}function Yu(t){return Object.values(Ru).includes(t)||t===d.COSMETIC_CAGE}function Ih(t){return Object.values(Gu).includes(t)}function wh(t){return Object.values(Mu).includes(t)}function Lh(t){return Object.values(Tu).includes(t)}function os(t){const e=Object.values(Du),n=Object.values(ku);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function TI(t){return Object.values(Uu).includes(t)}function DI(t){return Object.values(Fu).includes(t)}function ju(t){return Object.values(wu).includes(t)}const kI=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],GI=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function yh(t){for(const e of Object.values(d))if(e===t)return e}function Ah(t,e){return Object.values(e).includes(t)}var $=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))($||{});function mn(t,e,n){n!==void 0&&(t[e]=n)}function MI(t){var e,n,r,i,s,a,c,u,_,v,g,p,m,C;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(s=t.inset)!=null&&s.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(v=t.strokeDasharray)!=null&&v.editable||(g=t.strokeDashoffset)!=null&&g.editable||(p=t.fontSize)!=null&&p.editable||(m=t.fontColor)!=null&&m.editable||(C=t.opacity)!=null&&C.editable)}function su(t){var n,r,i,s,a,c,u,_,v,g,p,m,C,b,O,w,x,k,U,z,Y,H;const e={type:t.type};return mn(e,"n",(n=t.n)==null?void 0:n.value),mn(e,"r",(r=t.r)==null?void 0:r.value),mn(e,"height",(i=t.height)==null?void 0:i.value),mn(e,"width",(s=t.width)==null?void 0:s.value),mn(e,"inset",(a=t.inset)==null?void 0:a.value),mn(e,"angle",(c=t.angle)==null?void 0:c.value),mn(e,"fill",(u=t.fill)==null?void 0:u.value),mn(e,"stroke",(_=t.stroke)==null?void 0:_.value),mn(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),mn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),mn(e,"strokeDashoffset",(p=t.strokeDashoffset)==null?void 0:p.value),mn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),mn(e,"fontColor",(C=t.fontColor)==null?void 0:C.value),mn(e,"opacity",(b=t.opacity)==null?void 0:b.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(w=(O=t.linePathOptions)==null?void 0:O.shortenHead)==null?void 0:w.value,shortenTail:(k=(x=t.linePathOptions)==null?void 0:x.shortenTail)==null?void 0:k.value,bezierRounding:(z=(U=t.linePathOptions)==null?void 0:U.bezierRounding)==null?void 0:z.value,closeLoops:(H=(Y=t.linePathOptions)==null?void 0:Y.closeLoops)==null?void 0:H.value}),e}function UI(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const FI={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},$I={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},PI={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Nh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},Sh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},_s={type:"Line",strokeWidth:.125,stroke:"gray"},Vu={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Ku={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},BI={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},HI={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var P=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(P||{});const Ya=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,En=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,io=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,WI=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,nn=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,oo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Xu=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Re=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,zI=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,YI=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,jI=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,so=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,VI=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,KI=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,XI=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function qI(t){return Pu(t)?zI():Bu(t)?YI():t===d.XV?KI():Hu(t)?jI():Yu(t)?Ya():zu(t)?io():os(t)?WI():Wu(t)?Re():Lh(t)?XI():""}var pe=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(pe||{}),It=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(It||{});const ZI={inputOptions:{type:pe.ARROW},toolId:d.ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}},QI={inputOptions:{type:pe.ARROW},toolId:d.AVERAGE_ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}},JI={inputOptions:{type:pe.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:P.ARROW_TOOLS,shape:{type:$.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}};pe.ARROW,d.SQUARE_ROOT_ARROW,P.ARROW_TOOLS,$.LINE,io(),S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL;const ew={inputOptions:{type:pe.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:io(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}};function tw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function nw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function rw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function iw(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function ow(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const sw={Delete:null,Backspace:null};function aw(t,e=10){if(t in sw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function lw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function cw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function uw(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function dw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function xh(t){return t==="Backspace"}function ao(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||xh(t.key))}function _w(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function fw(t){return _w(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function gw(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ai(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,s=(e==null?void 0:e.maxLength)??3;if(t.length>s)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Nr(t,e,n){if(t===void 0)return t;let r=t;return xh(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const qu=[S.CAGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CAGE_TOOL],Cn=[S.CAGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CAGE_TOOL];function Rh(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Th(t,e,n){return Nr(t,e,n)}const fn={type:$.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},ja={type:pe.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},bn={...ja,valueUpdater:(t,e)=>Th(t,e,Rh)},hw={inputOptions:bn,toolId:d.KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:En(),tags:[],categories:Cn}},pw={inputOptions:bn,toolId:d.UNIQUE_DIGITS_CAGE,order:P.CAGE_TOOLS,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:En(),tags:[],categories:Cn}},vw={inputOptions:bn,toolId:d.INVERTED_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:En(),tags:[],categories:Cn}},mw={inputOptions:bn,toolId:d.SUM_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:En(),tags:[],categories:Cn}},Ew={inputOptions:ja,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Ya(),tags:[],categories:qu}},Cw={inputOptions:ja,toolId:d.PARITY_BALANCE_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Ya(),tags:[],categories:qu}},bw={inputOptions:bn,toolId:d.DIVISIBLE_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:En(),tags:[],categories:Cn}},Ow={inputOptions:bn,toolId:d.SPOTLIGHT_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:En(),tags:[],categories:Cn}},Iw={inputOptions:ja,toolId:d.PUTTERIA_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Ya(),tags:[],categories:qu}};d.KILLER_CAGE_LOOK_AND_SAY,P.CAGE_TOOLS,En();const ww={inputOptions:bn,toolId:d.MULTISET_CAGE,order:P.CAGE_TOOLS,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:En(),tags:[],categories:Cn}},Lw={inputOptions:bn,toolId:d.VAULTED_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:En(),tags:[],categories:Cn}};d.AQUARIUM_CAGE,P.CAGE_TOOLS,En();const yw={inputOptions:bn,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:En(),tags:[],categories:Cn}},Aw={inputOptions:bn,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:En(),tags:[],categories:Cn}},Nw={inputOptions:bn,toolId:d.DOUBLERS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:En(),tags:[],categories:Cn}},Sw={inputOptions:bn,toolId:d.NEGATORS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:En(),tags:[],categories:Cn}},xw={inputOptions:{type:pe.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[S.CELL_INPUT_TOOL]}},Rw={inputOptions:{type:pe.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[S.CELL_INPUT_TOOL]}},Tw={inputOptions:{type:pe.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[S.CELL_INPUT_TOOL]}},Dw={inputOptions:{type:pe.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[S.CELL_INPUT_TOOL]}},kw={inputOptions:{type:pe.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[S.CELL_INPUT_TOOL]}},Gw={inputOptions:{type:pe.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[S.CELL_INPUT_TOOL]}},Mw={inputOptions:{type:pe.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[S.CELL_INPUT_TOOL]}},Uw={inputOptions:{type:pe.SELECTION},toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[S.CELL_INPUT_TOOL]}},Fw={inputOptions:{type:pe.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},$w={type:pe.CENTER_CORNER_OR_EDGE,targets:It.CLOSEST};d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,P.OUTSIDE_TOOLS,$.CIRCLE,Xu(),S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT;const Pw={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:It.CLOSEST,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:P.OUTSIDE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Xu(),tags:[],categories:[S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT]}},Bw={inputOptions:{type:pe.CENTER_CORNER_OR_EDGE,targets:It.CORNER_OR_EDGE,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:P.OUTSIDE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Xu(),tags:[],categories:[S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT]}},Hw={inputOptions:{type:pe.CLONE},toolId:d.CLONE_REGION,order:P.CAGE_TOOLS,shape:{type:$.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[S.CLONE_CONSTRAINT,S.LOCAL_CONSTRAINT]}};function Dh(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function kh(t,e,n){return Nr(t,e,n)}function Ww(t,e){function n(){return!0}return Nr(t,e,n)}const Zu={type:pe.CORNER,defaultValue:"",valueUpdater:(t,e)=>kh(t,e,Dh)},zw={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>Ww(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:VI(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL]}},Yw={inputOptions:Zu,toolId:d.CORNER_SUM,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL]}},jw={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Vw={inputOptions:Zu,toolId:d.CORNER_EVEN_COUNT,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,P.CORNER_TOOLS,$.CIRCLE,so(),S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL;const Kw={inputOptions:{type:pe.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Xw={inputOptions:{type:pe.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:so(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Va=[S.EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.EDGE_TOOL],kn=[S.EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.EDGE_TOOL],fs=.15,Gh=.02,ei={type:$.CIRCLE,r:{editable:!0,value:fs,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Gh,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Qu={type:$.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function qw(t,e=1){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Mh(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Zw(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function Ju(t,e,n){return Nr(t,e,n)}function Qw(t,e){return t===void 0?"V":Zw(e)?e.toUpperCase():t}function Jw(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Uh(t,e){return t===void 0?"<":Jw(e)?e:t}const lo={type:pe.EDGE,valueUpdater:(t,e)=>Ju(t,e,Mh)},eL={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Ju(t,e,qw)},toolId:d.RATIO,order:P.EDGE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:kn}},tL={inputOptions:lo,toolId:d.DIFFERENCE,order:P.EDGE_TOOLS,shape:ei,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:kn}},nL={inputOptions:lo,toolId:d.EDGE_SUM,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:kn}},rL={inputOptions:{type:pe.EDGE,defaultValue:"V",valueUpdater:Qw},toolId:d.XV,order:P.EDGE_TOOLS,shape:{type:$.TEXT_ONLY,r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:kn}},iL={inputOptions:{type:pe.EDGE,valueUpdater:Uh,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:P.EDGE_TOOLS,shape:{type:$.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:kn}},oL={inputOptions:lo,toolId:d.EDGE_PRODUCT,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:kn}},sL={inputOptions:lo,toolId:d.EDGE_MODULO,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:kn}},aL={inputOptions:lo,toolId:d.EDGE_FACTOR,order:P.EDGE_TOOLS,shape:{...ei,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:kn}},lL={inputOptions:{type:pe.EDGE},toolId:d.XY_DIFFERENCES,order:P.EDGE_TOOLS,shape:{type:$.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:Gh,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:kn}},cL={inputOptions:{type:pe.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:P.EDGE_TOOLS,shape:ei,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:kn}},uL={inputOptions:{type:pe.EDGE},toolId:d.YIN_YANG_KROPKI,order:P.EDGE_TOOLS,shape:{type:$.CIRCLE,r:{editable:!1,value:fs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:kn}},dL={inputOptions:{type:pe.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:P.EDGE_TOOLS,shape:Qu,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Va}},_L={inputOptions:{type:pe.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:P.EDGE_TOOLS,shape:Qu,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Va}},fL={inputOptions:{type:pe.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:P.EDGE_TOOLS,shape:Qu,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Va}},gL={inputOptions:{type:pe.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:P.EDGE_TOOLS,shape:ei,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Va}},hL={inputOptions:{type:pe.EDGE,valueUpdater:Uh,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:P.EDGE_TOOLS,shape:{type:$.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:kn}};d.CUSTOM_EDGE_CONSTRAINT,P.EDGE_TOOLS;const co=[S.OUTSIDE_CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_CORNER_TOOL,S.OUTSIDE_DIRECTION_TOOL];function pL(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Fh(t,e,n){return Nr(t,e,n)}const uo={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},_o={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fh(t,e,pL),defaultValue:"",cornerOrEdge:It.CORNER},vL={inputOptions:_o,toolId:d.LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:oo(),tags:[],categories:co}},mL={inputOptions:_o,toolId:d.LITTLE_KILLER_PRODUCT,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:oo(),tags:[],categories:co}},EL={inputOptions:_o,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:oo(),tags:[],categories:co}},CL={inputOptions:_o,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:oo(),tags:[],categories:co}},bL={inputOptions:_o,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:oo(),tags:[],categories:co}},OL={inputOptions:_o,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:uo,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:oo(),tags:[],categories:co}},rn=[S.OUTSIDE_EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_EDGE_TOOL,S.OUTSIDE_DIRECTION_TOOL];function gs(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ka(t,e,n){return Nr(t,e,n)}const on={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Gn={type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.EDGE},IL={inputOptions:Gn,toolId:d.SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:nn(),tags:[],categories:rn}},wL={inputOptions:Gn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:nn(),tags:[],categories:rn}},LL={inputOptions:Gn,toolId:d.X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:nn(),tags:[],categories:rn}},yL={inputOptions:Gn,toolId:d.SHORTSIGHTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:nn(),tags:[],categories:rn}},AL={inputOptions:Gn,toolId:d.SHIFTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:nn(),tags:[],categories:rn}},NL={inputOptions:Gn,toolId:d.BROKEN_X_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:nn(),tags:[],categories:rn}},SL={inputOptions:Gn,toolId:d.X_SUM_SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:nn(),tags:[],categories:rn}},xL={inputOptions:Gn,toolId:d.BATTLEFIELD,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:nn(),tags:[],categories:rn}},RL={inputOptions:Gn,toolId:d.SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:nn(),tags:[],categories:rn}},TL={inputOptions:Gn,toolId:d.X_INDEX,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:nn(),tags:[],categories:rn}},DL={inputOptions:Gn,toolId:d.RISING_STREAK,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:nn(),tags:[],categories:rn}};d.ROW_OR_COLUMN_RANK,P.OUTSIDE_TOOLS,nn();const kL={inputOptions:Gn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:nn(),tags:[],categories:rn}},GL={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:nn(),tags:[],categories:rn}},ML={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:nn(),tags:[],categories:rn}},UL={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ka(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:P.OUTSIDE_TOOLS,shape:on,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:nn(),tags:[],categories:rn}},FL={inputOptions:{type:pe.SINGLE_CELL},toolId:d.COSMETIC_CELL_SHAPE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,allowedTypes:[$.CIRCLE,$.ELLIPSE,$.SQUARE,$.RECTANGLE,$.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},$L={inputOptions:{type:pe.SINGLE_CELL_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},PL={inputOptions:{type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},BL={inputOptions:{type:pe.EDGE,valueUpdater:(t,e)=>Ju(t,e,Mh),defaultValue:""},toolId:d.COSMETIC_EDGE,order:P.EDGE_TOOLS,shape:{type:$.CIRCLE,allowedTypes:[$.CIRCLE,$.ELLIPSE,$.SQUARE,$.RECTANGLE,$.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},HL={inputOptions:{type:pe.CORNER,valueUpdater:(t,e)=>kh(t,e,Dh),defaultValue:""},toolId:d.COSMETIC_CORNER,order:P.CORNER_TOOLS,shape:{type:$.CIRCLE,allowedTypes:[$.CIRCLE,$.ELLIPSE,$.SQUARE,$.RECTANGLE,$.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},WL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},zL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},YL={inputOptions:{type:pe.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},jL={inputOptions:{type:pe.CAGE,valueUpdater:(t,e)=>Th(t,e,Rh),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:P.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},VL={inputOptions:{type:pe.ARROW},toolId:d.COSMETIC_ARROW,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.LOCAL_CONSTRAINT]}},KL={inputOptions:{type:pe.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Fh(t,e,gs),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:P.ARROW_TOOLS,shape:{type:$.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_DIRECTION_TOOL]}},fo=[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT,S.DIAGONAL_CONSTRAINT],XL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},qL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ZL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},QL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},JL={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ey={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ty={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ny={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ry={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},iy={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},oy={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},sy={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},ay={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:fo}},ly={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:fo}},cy={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:fo}},uy={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:fo}},dy={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:fo}},_y={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:fo}},fy={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},gy={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},hy={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},py={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},vy={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},my={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ey={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Cy={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},by={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Oy={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Iy={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},wy={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ly={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},yy={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ay={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Ny={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},Sy={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},xy={toolId:d.UNKNOWN_REGIONS,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Ry={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Ty={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Dy={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},ky={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Gy={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},My={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Uy={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Fy={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},$y={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},Py={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},By={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Hy={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Wy={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},zy={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Yy={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},jy={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},Vy={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Ky={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Xy={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},qy={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Zy={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Qy={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},Jy={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},eA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},tA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},nA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},rA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},iA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},oA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},sA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},aA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},lA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},cA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},uA={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},dA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},_A={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},fA={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},gA={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},hA={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},pA={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},vA={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},mA={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},EA={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},CA={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},bA={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Fe=[S.LINE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.LINE_TOOL],Sr=[S.LINE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.DOUBLE_ENDED_LINE_CONSTRAINT,S.LINE_TOOL],hs={description:"",usage:Re(),tags:[],categories:Fe},yt={type:pe.LINE,allowSelfIntersection:!0},Wt={type:pe.LINE,allowSelfIntersection:!1},OA={inputOptions:Wt,toolId:d.THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Numbers along a thermometer must increase from the bulb end."}},IA={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},wA={inputOptions:Wt,toolId:d.FUZZY_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},LA={inputOptions:Wt,toolId:d.SLOW_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},yA={inputOptions:Wt,toolId:d.ROW_CYCLE_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...hs,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},AA={inputOptions:yt,toolId:d.PALINDROME,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:Re(),tags:[],categories:Fe}},NA={inputOptions:yt,toolId:d.RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:Re(),tags:[],categories:Fe}},SA={inputOptions:yt,toolId:d.DOUBLE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:Re(),tags:[],categories:Fe}},xA={inputOptions:yt,toolId:d.RENRENBANBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:Re(),tags:[],categories:Fe}},RA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Fe}},TA={inputOptions:yt,toolId:d.NABNER_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:Re(),tags:[],categories:Fe}},DA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:Re(),tags:[],categories:Fe}},kA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:Re(),tags:[],categories:Fe}},GA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:Re(),tags:[],categories:Fe}},MA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:Re(),tags:[],categories:Fe}},UA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:Re(),tags:[],categories:Fe}},FA={inputOptions:Wt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:Re(),tags:[],categories:Fe}},$A={inputOptions:Wt,toolId:d.INDEX_LINE,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:Re(),tags:[],categories:Fe}},PA={inputOptions:yt,toolId:d.UNIQUE_VALUES_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:Re(),tags:[],categories:Fe}},BA={inputOptions:yt,toolId:d.REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:Re(),tags:[],categories:Fe}},HA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:Re(),tags:[],categories:Fe}},WA={inputOptions:Wt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:Re(),tags:[],categories:Fe}},zA={inputOptions:yt,toolId:d.SAME_PARITY_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:Re(),tags:[],categories:Fe}},YA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Re(),tags:[],categories:Fe}},jA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:Re(),tags:[],categories:Fe}},VA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:Re(),tags:[],categories:Fe}},KA={inputOptions:yt,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a light blue line alternate between odd and even numbers.",usage:Re(),tags:[],categories:Fe}},XA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:Re(),tags:[],categories:Fe}},qA={inputOptions:yt,toolId:d.ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:Re(),tags:[],categories:Fe}},ZA={inputOptions:yt,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:Re(),tags:[],categories:Fe}},QA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:Re(),tags:[],categories:Fe}},JA={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:Re(),tags:[],categories:Fe}},eN={inputOptions:Wt,toolId:d.REPEATED_DIGITS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:Re(),tags:[],categories:Fe}},tN={inputOptions:Wt,toolId:d.SUPERFUZZY_ARROW,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:Re(),tags:[],categories:Fe}},nN={inputOptions:yt,toolId:d.AMBIGUOUS_ARROW,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:Re(),tags:[],categories:Fe}},rN={inputOptions:Wt,toolId:d.HEADLESS_ARROW,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:Re(),tags:[],categories:Fe}},iN={inputOptions:yt,toolId:d.XV_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:Re(),tags:[],categories:Fe}},oN={inputOptions:Wt,toolId:d.ROW_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:Re(),tags:[],categories:Fe}},sN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:Re(),tags:[],categories:Fe}},aN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:Re(),tags:[],categories:Fe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,P.LINE_TOOLS,$.LINE,Re();const lN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:Re(),tags:[],categories:Fe}},cN={inputOptions:yt,toolId:d.ADJACENT_MULTIPLES_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:Re(),tags:[],categories:Fe}},uN={inputOptions:yt,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:Re(),tags:[],categories:Fe}},dN={inputOptions:Wt,toolId:d.LOOK_AND_SAY_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:Re(),tags:[],categories:Fe}},_N={inputOptions:Wt,toolId:d.ZIPPER_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:Re(),tags:[],categories:Fe}},fN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:Re(),tags:[],categories:Fe}},gN={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:Re(),tags:[],categories:Fe}},hN={inputOptions:{type:pe.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:Re(),tags:[],categories:Fe}};d.THERMO_OR_AVERAGE_ARROW,P.LINE_TOOLS,$.THERMO_WITH_CIRCLE,Re();const pN={inputOptions:Wt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:Re(),tags:[],categories:Fe}},vN={inputOptions:Wt,toolId:d.PEAPODS,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:Re(),tags:[],categories:Fe}},mN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:Re(),tags:[],categories:Fe}},EN={inputOptions:yt,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:Re(),tags:[],categories:Fe}},CN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:Re(),tags:[],categories:Fe}},bN={inputOptions:yt,toolId:d.YIN_YANG_REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:Re(),tags:[],categories:Fe}},ON={inputOptions:Wt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:Re(),tags:[],categories:Fe}},IN={inputOptions:Wt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:P.LINE_TOOLS,shape:{type:$.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:Re(),tags:[],categories:Fe}},wN={inputOptions:yt,toolId:d.BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:Re(),tags:[],categories:Sr}},LN={inputOptions:{type:pe.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:Re(),tags:[],categories:Sr}},yN={inputOptions:yt,toolId:d.TIGHTROPE_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:Re(),tags:[],categories:Sr}},AN={inputOptions:yt,toolId:d.PARITY_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:Re(),tags:[],categories:Sr}},NN={inputOptions:yt,toolId:d.DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:Re(),categories:Sr}},SN={inputOptions:yt,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:Re(),tags:[],categories:Sr}},xN={inputOptions:yt,toolId:d.SPLIT_PEAS,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:Re(),tags:[],categories:Sr}},RN={inputOptions:Wt,toolId:d.DOUBLERS_THERMOMETER,order:P.LINE_TOOLS,shape:{type:$.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:Re(),tags:[],categories:Fe}},TN={inputOptions:yt,toolId:d.DOUBLERS_BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:Re(),tags:[],categories:Sr}},DN={inputOptions:yt,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:$.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:Re(),tags:[],categories:Sr}},We=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_SHAPE_TOOL],go=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_COLOR_TOOL],Xa={type:$.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},ps={type:$.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function $h(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function kN(t){return t===""||t==="1"||t==="2"||t==="3"}function ed(t,e,n){return Nr(t,e,n)}const Ke={type:pe.SINGLE_CELL},ti={type:pe.SINGLE_CELL,valueUpdater:(t,e)=>ed(t,e,$h),defaultValue:""},Ph={type:pe.SINGLE_CELL_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},GN={inputOptions:Ke,toolId:d.ODD,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:We}},MN={inputOptions:Ke,toolId:d.EVEN,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:We}},UN={inputOptions:Ke,toolId:d.MINIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},FN={inputOptions:Ke,toolId:d.MAXIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}};d.PRIME_CELL,P.CELL_COLOR_TOOL;const $N={inputOptions:Ke,toolId:d.ODD_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},PN={inputOptions:Ke,toolId:d.EVEN_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},BN={inputOptions:Ke,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:We}},HN={inputOptions:Ke,toolId:d.WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},WN={inputOptions:Ke,toolId:d.NOT_WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},zN={inputOptions:ti,toolId:d.FARSIGHT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:We}},YN={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>ed(t,e,$h),defaultValue:"9"},toolId:d.RADAR,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:We}},jN={inputOptions:Ke,toolId:d.ORTHOGONAL_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:We}},VN={inputOptions:Ke,toolId:d.INDEXING_COLUMN,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:go}},KN={inputOptions:Ke,toolId:d.INDEXING_ROW,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:go}},XN={inputOptions:Ke,toolId:d.LOW_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:go}},qN={inputOptions:Ke,toolId:d.HIGH_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:go}},ZN={inputOptions:Ke,toolId:d.FRIENDLY_CELL,order:P.CELL_COLOR_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:go}},QN={inputOptions:Ke,toolId:d.DIAGONALLY_ADJACENT_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:We}},JN={inputOptions:Ke,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:We}},eS={inputOptions:Ke,toolId:d.SANDWICH_ROW_COL_COUNT,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:We}},tS={inputOptions:Ke,toolId:d.COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:We}},nS={inputOptions:Ke,toolId:d.REVERSE_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:We}},rS={inputOptions:{type:pe.SINGLE_CELL,valueUpdater:(t,e)=>ed(t,e,kN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:We}},iS={inputOptions:Ke,toolId:d.UNIQUE_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:We}},oS={inputOptions:Ke,toolId:d.SEEN_EVEN_COUNT,order:P.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},sS={inputOptions:Ke,toolId:d.SEEN_ODD_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},aS={inputOptions:Ke,toolId:d.YIN_YANG_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:We}},lS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},cS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},uS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:P.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:We}},dS={inputOptions:Ke,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:We}},_S={inputOptions:Ke,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:We}},fS={inputOptions:Ke,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:We}},gS={inputOptions:Ke,toolId:d.SEEN_REGION_BORDERS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:We}},hS={inputOptions:Ke,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:We}},pS={inputOptions:Ke,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:We}},vS={inputOptions:Ph,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[S.SINGLE_CELL_ARROW_TOOL,S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},mS={inputOptions:Ph,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[S.SINGLE_CELL_ARROW_TOOL,S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},ES={inputOptions:ti,toolId:d.SASHIGANE_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:We}},CS={inputOptions:Ke,toolId:d.CELL_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:We}},bS={inputOptions:Ke,toolId:d.CELL_NOT_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:We}},OS={inputOptions:Ke,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:We}},IS={inputOptions:ti,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:We}},wS={inputOptions:Ke,toolId:d.CAVE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:We}},LS={inputOptions:ti,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:We}},yS={inputOptions:ti,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:We}},AS={inputOptions:ti,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:We}},NS={inputOptions:Ke,toolId:d.DIRECTED_PATH_START,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:We}},SS={inputOptions:Ke,toolId:d.DIRECTED_PATH_END,order:P.CELL_SHAPE_TOOL,shape:{type:$.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:We}},xS={inputOptions:ti,toolId:d.TELEPORT,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:We}},RS={inputOptions:ti,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:$.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:We}},TS={inputOptions:Ke,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:P.CELL_SHAPE_TOOL,shape:{...Xa,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:We}},DS={inputOptions:Ke,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:P.CELL_SHAPE_TOOL,shape:ps,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:We}},kS={inputOptions:Ke,toolId:d.CONNECT_FOUR_YELLOW,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:We}},GS={inputOptions:Ke,toolId:d.CONENCT_FOUR_RED,order:P.CELL_SHAPE_TOOL,shape:{type:$.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:We}},dr=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_MULTIARROW_TOOL],ni={type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},_r={type:pe.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},MS={inputOptions:_r,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:dr}},US={inputOptions:_r,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:dr}},FS={inputOptions:_r,toolId:d.LOOP_CELL_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:dr}},$S={inputOptions:_r,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:dr}},PS={inputOptions:_r,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:dr}},BS={inputOptions:_r,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:dr}},HS={inputOptions:_r,toolId:d.COLD_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:dr}},WS={inputOptions:_r,toolId:d.HOT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:$.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:dr}},zS={inputOptions:_r,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:dr}},YS={inputOptions:_r,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:P.CELL_SHAPE_TOOL,shape:ni,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:dr}},jS={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}},VS={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}},KS={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;const XS={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},qS={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;const ZS={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},QS={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},JS=[S.CORNER_LINE_CONSTRAINT,S.CORNER_LINE_TOOL,S.LOCAL_CONSTRAINT],ex={inputOptions:{type:pe.CORNER_LINE},toolId:d.MAZE_WALL,order:P.EDGE_TOOLS,shape:{type:$.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:JS}},Rt={[d.GIVEN]:xw,[d.DIGIT]:Rw,[d.REGIONS]:Tw,[d.OUTSIDE]:Mw,[d.CORNER_PM]:Dw,[d.CENTER_PM]:kw,[d.HIGHLIGHTS]:Gw,[d.FOG]:Uw,[d.PEN_TOOL]:Fw,[d.SUDOKU_RULES_DO_NOT_APPLY]:XL,[d.LEAVE_EMPTY_CELLS_EMPTY]:qL,[d.LITS]:JL,[d.HEXED_SUDOKU]:ZL,[d.FILLOMINO]:QL,[d.ANTIKNIGHT]:ey,[d.ANTIKING]:ny,[d.ANTI_GIRAFFE]:ty,[d.DISJOINT_GROUPS]:ry,[d.TANGO]:iy,[d.NONCONSECUTIVE]:oy,[d.NONRATIO]:sy,[d.ANTI_ENTROPY]:fy,[d.GLOBAL_INDEXING_COLUMN]:gy,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:hy,[d.NEGATIVE_DIAGONAL]:ay,[d.POSITIVE_DIAGONAL]:ly,[d.NEGATIVE_ANTIDIAGONAL]:cy,[d.POSITIVE_ANTIDIAGONAL]:uy,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:dy,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:_y,[d.ALL_RATIOS_GIVEN]:py,[d.ALL_DIFFERENCES_GIVEN]:vy,[d.ALL_X_GIVEN]:my,[d.ALL_V_GIVEN]:Ey,[d.ALL_XV_GIVEN]:Cy,[d.ALL_RADARS_GIVEN]:by,[d.ALL_XY_DIFFERENCES_GIVEN]:Oy,[d.ALL_INDEXING_COLUMN_GIVEN]:Iy,[d.ALL_INDEXING_ROW_GIVEN]:wy,[d.ALL_YIN_YANG_KROPKI_GIVEN]:Ly,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:yy,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:Ny,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:Sy,[d.CAVE_CELLS_ARE_ODD]:sA,[d.CAVE_WALLS_ARE_EVEN]:oA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:rA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:iA,[d.DOUBLERS]:XS,[d.NEGATORS]:qS,[d.NEXUS]:ZS,[d.INDEXER_CELLS]:QS,[d.UNKNOWN_REGIONS]:xy,[d.CHAOS_CONSTRUCTION_SUGURU]:Ry,[d.YIN_YANG]:Ty,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:Dy,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:ky,[d.NURIMISAKI]:Gy,[d.NURIKABE]:My,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:Uy,[d.TWO_CONTIGUOUS_REGIONS]:Fy,[d.SASHIGANE]:$y,[d.GOLDILOCKS_ZONE]:Py,[d.CELL_CENTER_LOOP_NO_TOUCHING]:By,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:Hy,[d.NOT_LOOP_SIZED_REGIONS]:Yy,[d.MODULAR_LOOP]:jy,[d.CAVE]:tA,[d.CAVE_LITS]:aA,[d.RENBAN_CAVES]:lA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:nA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:Ay,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:Wy,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:zy,[d.GALAXIES]:uA,[d.TWO_SYMMETRIC_GALAXIES]:fA,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:dA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:_A,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:gA,[d.PENTOMINO_TILLING]:hA,[d.TILLING_NO_EMPTY_CELLS]:pA,[d.LITS_BLACK_WHITE_STAR_BATTLE]:vA,[d.MAZE_DIRECTED_PATH]:Vy,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:Ky,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:Qy,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:Xy,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:Zy,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:Jy,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:eA,[d.DIRECTED_PATH_IS_PARITY_LINE]:qy,[d.CONNECT_FOUR]:mA,[d.CONNECT_FOUR_DRAW]:EA,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:CA,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:bA,[d.ODD]:GN,[d.EVEN]:MN,[d.MINIMUM]:UN,[d.MAXIMUM]:FN,[d.ODD_MINESWEEPER]:$N,[d.EVEN_MINESWEEPER]:PN,[d.WATCHTOWER]:HN,[d.NOT_WATCHTOWER]:WN,[d.FARSIGHT]:zN,[d.RADAR]:YN,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:BN,[d.ORTHOGONAL_SUM]:jN,[d.DIAGONALLY_ADJACENT_SUM]:QN,[d.INDEXING_COLUMN]:VN,[d.INDEXING_ROW]:KN,[d.LOW_DIGIT]:XN,[d.HIGH_DIGIT]:qN,[d.FRIENDLY_CELL]:ZN,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:JN,[d.SANDWICH_ROW_COL_COUNT]:eS,[d.COUNTING_CIRCLES]:tS,[d.REVERSE_COUNTING_CIRCLES]:nS,[d.COLORED_COUNTING_CIRCLES]:rS,[d.UNIQUE_CELLS]:iS,[d.SEEN_EVEN_COUNT]:oS,[d.SEEN_ODD_COUNT]:sS,[d.YIN_YANG_MINESWEEPER]:aS,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:lS,[d.YIN_YANG_SEEN_SHADED_CELLS]:cS,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:uS,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:dS,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:_S,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:fS,[d.SEEN_REGION_BORDERS_COUNT]:gS,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:hS,[d.SASHIGANE_BEND_REGION_COUNT]:pS,[d.SASHIGANE_REGION_SUM]:ES,[d.CELL_ON_THE_LOOP]:CS,[d.CELL_NOT_ON_THE_LOOP]:bS,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:OS,[d.CAVE_CLUE]:wS,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:IS,[d.YIN_YANG_FILLOMINO_PARITY]:cA,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:LS,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:yS,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:AS,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:RS,[d.DIRECTED_PATH_START]:NS,[d.DIRECTED_PATH_END]:SS,[d.TELEPORT]:xS,[d.CONNECT_FOUR_YELLOW]:kS,[d.CONENCT_FOUR_RED]:GS,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:vS,[d.THERMO_SIGHTLINE_LOOP_ARROW]:mS,[d.HOT_ARROWS]:WS,[d.COLD_ARROWS]:HS,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:BS,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:$S,[d.YIN_YANG_COUNT_SHADED_CELLS]:PS,[d.LOOP_CELL_COUNT_ARROWS]:FS,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:US,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:MS,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:zS,[d.NURIKABE_SEEN_WATERWAY_CELLS]:TS,[d.NURIKABE_ISLAND_SIZE_CELL]:DS,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:YS,[d.DIFFERENCE]:tL,[d.RATIO]:eL,[d.XV]:rL,[d.EDGE_INEQUALITY]:iL,[d.EDGE_SUM]:nL,[d.EDGE_PRODUCT]:oL,[d.EDGE_MODULO]:sL,[d.EDGE_FACTOR]:aL,[d.XY_DIFFERENCES]:lL,[d.YIN_YANG_WHITE_KROPKI]:cL,[d.YIN_YANG_KROPKI]:uL,[d.FILLOMINO_REGION_BORDER]:dL,[d.UNKNOWN_REGION_BORDER]:_L,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:fL,[d.EDGE_CAVE_ONE_OF_EACH]:gL,[d.ONE_WAY_DOOR]:hL,[d.QUADRUPLE]:zw,[d.CORNER_SUM]:Yw,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:jw,[d.CORNER_EVEN_COUNT]:Vw,[d.PRODUCT_SQUARE]:Kw,[d.EQUAL_DIAGONAL_DIFFERENCES]:Xw,[d.THERMOMETER]:OA,[d.FUZZY_THERMOMETER]:wA,[d.SLOW_THERMOMETER]:LA,[d.CUSTOM_THERMOMETER]:IA,[d.ROW_CYCLE_THERMOMETER]:yA,[d.PALINDROME]:AA,[d.RENBAN_LINE]:NA,[d.DOUBLE_RENBAN_LINE]:SA,[d.RENRENBANBAN_LINE]:xA,[d.N_CONSECUTIVE_RENBAN_LINE]:RA,[d.NABNER_LINE]:TA,[d.WHISPERS_LINE]:DA,[d.DUTCH_WHISPERS]:kA,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:GA,[d.RENBAN_OR_WHISPERS_LINE]:MA,[d.RENBAN_OR_NABNER_LINE]:UA,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:FA,[d.INDEX_LINE]:$A,[d.UNIQUE_VALUES_LINE]:PA,[d.REPEATED_DIGITS_LINE]:eN,[d.REGION_SUM_LINE]:BA,[d.SUM_LINE]:HA,[d.XV_LINE]:iN,[d.ROW_SUM_LINE]:oN,[d.AT_LEAST_X_LINE]:sN,[d.SUPERFUZZY_ARROW]:tN,[d.AMBIGUOUS_ARROW]:nN,[d.HEADLESS_ARROW]:rN,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:aN,[d.PRODUCT_LINE]:lN,[d.ADJACENT_MULTIPLES_LINE]:cN,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:uN,[d.LOOK_AND_SAY_LINE]:dN,[d.ARITHMETIC_SEQUENCE_LINE]:WA,[d.ZIPPER_LINE]:_N,[d.SEGMENTED_SUM_LINE]:fN,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:gN,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:hN,[d.SAME_PARITY_LINE]:zA,[d.MODULAR_LINE]:YA,[d.UNIMODULAR_LINE]:jA,[d.MODULAR_OR_UNIMODULAR_LINE]:VA,[d.ODD_EVEN_OSCILLATOR_LINE]:KA,[d.HIGH_LOW_OSCILLATOR_LINE]:XA,[d.ENTROPIC_LINE]:qA,[d.ENTROPIC_OR_MODULAR_LINE]:ZA,[d.INDEXING_COLUMN_IS_X_LINE]:QA,[d.INDEXING_ROW_IS_X_LINE]:JA,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:pN,[d.PEAPODS]:vN,[d.YIN_YANG_INDEXING_LINE_COLORING]:ON,[d.YIN_YANG_SHADED_WHISPERS_LINE]:mN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:EN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:CN,[d.YIN_YANG_REGION_SUM_LINE]:bN,[d.GOLDILOCKS_ZONE_REGION_SUM]:IN,[d.BETWEEN_LINE]:wN,[d.LOCKOUT_LINE]:LN,[d.PARITY_COUNT_LINE]:AN,[d.TIGHTROPE_LINE]:yN,[d.DOUBLE_ARROW_LINE]:NN,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:SN,[d.SPLIT_PEAS]:xN,[d.DOUBLERS_THERMOMETER]:RN,[d.DOUBLERS_BETWEEN_LINE]:TN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:DN,[d.ARROW]:ZI,[d.CHAOS_CONSTRUCTION_ARROW]:ew,[d.AVERAGE_ARROW]:QI,[d.BULBOUS_ARROW]:JI,[d.MAZE_WALL]:ex,[d.KILLER_CAGE]:hw,[d.UNIQUE_DIGITS_CAGE]:pw,[d.INVERTED_KILLER_CAGE]:vw,[d.SUM_CAGE]:mw,[d.SUM_CAGE_LOOK_AND_SAY]:Ew,[d.PARITY_BALANCE_CAGE]:Cw,[d.DIVISIBLE_KILLER_CAGE]:bw,[d.SPOTLIGHT_CAGE]:Ow,[d.PUTTERIA_CAGE]:Iw,[d.MULTISET_CAGE]:ww,[d.VAULTED_CAGE]:Lw,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:yw,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:Aw,[d.DOUBLERS_KILLER_CAGE]:Nw,[d.NEGATORS_KILLER_CAGE]:Sw,[d.CLONE_REGION]:Hw,[d.SANDWICH_SUM]:IL,[d.X_SUM]:LL,[d.SHORTSIGHTED_X_SUM]:yL,[d.SHIFTED_X_SUM]:AL,[d.BROKEN_X_SUM]:NL,[d.X_SUM_SKYSCRAPERS]:SL,[d.BATTLEFIELD]:xL,[d.SKYSCRAPERS]:RL,[d.X_INDEX]:TL,[d.SANDWICH_SUM_XOR_X_SUM]:wL,[d.RISING_STREAK]:DL,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:kL,[d.OUTSIDE_CONSECUTIVE_SUM]:GL,[d.LOOPWICHES]:ML,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:UL,[d.LITTLE_KILLER_SUM]:vL,[d.LITTLE_KILLER_PRODUCT]:mL,[d.LITTLE_KILLER_LOOK_AND_SAY]:EL,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:bL,[d.X_OMIT_LITTLE_KILLER_SUM]:CL,[d.NEGATORS_LITTLE_KILLER_SUM]:OL,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Pw,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:Bw,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:jS,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:VS,[d.FORBIDDEN_KNIGHT_SUM]:KS,[d.COSMETIC_CELL_SHAPE]:FL,[d.COSMETIC_CELL_ARROW]:$L,[d.COSMETIC_CELL_MULTI_ARROW]:PL,[d.COSMETIC_EDGE]:BL,[d.COSMETIC_CORNER]:HL,[d.COSMETIC_LINE]:WL,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:zL,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:YL,[d.COSMETIC_ARROW]:VL,[d.COSMETIC_CAGE]:jL,[d.COSMETIC_OUTSIDE_DIRECTION]:KL};class Oi extends Map{constructor(){super()}setConstraint(e,n){return SI(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Oi;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Oi;if(!e)return n;for(const[r,i]of Object.entries(e)){const s=yh(r);s!==void 0&&Ah(s,$u)&&typeof i=="boolean"&&i&&n.setConstraint(s,i)}return n}}var He=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(He||{});function Bh(t){if(!(t in He))throw Error(" not a key in DIRECTION");return He[t]}function Ve(t,e){return t.r===e.r&&t.c===e.c}function Hh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function tx(t,e){return{r:t.r*e,c:t.c*e}}function nx(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function vs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ve(t,e)}function rx(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Sa(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Xt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function qa(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function ix(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function td(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function ox(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const sx=new Map([[6,He.N],[2,He.S],[0,He.E],[4,He.W],[7,He.NE],[5,He.NW],[1,He.SE],[3,He.SW]]);function nd(t){t=t%8;const e=sx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const ax=new Map([[He.N,{r:-1,c:0}],[He.S,{r:1,c:0}],[He.E,{r:0,c:1}],[He.W,{r:0,c:-1}],[He.NE,{r:-1,c:1}],[He.NW,{r:-1,c:-1}],[He.SE,{r:1,c:1}],[He.SW,{r:1,c:-1}]]);function Za(t){const e=ax.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Wh(t,e){const n=Za(e);return Hh(t,n)}function rd(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function zh(t,e,n=!1){const r=t.some(s=>Ve(s,e)),i=n?t.some(s=>vs(s,e)):t.some(s=>rx(s,e));if(!r&&i){const s=[...t,e];return Sa(s),s}return t}function ba(t){return`R${t.r+1}C${t.c+1}`}function id(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var lx=Vo.exports,vg;function cx(){return vg||(vg=1,function(t,e){(function(){var n,r="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,v="__lodash_placeholder__",g=1,p=2,m=4,C=1,b=2,O=1,w=2,x=4,k=8,U=16,z=32,Y=64,H=128,q=256,ne=512,ce=30,ee="...",ie=800,Ee=16,Ce=1,fe=2,xe=3,Qe=1/0,Se=9007199254740991,ye=17976931348623157e292,lt=NaN,Ye=4294967295,On=Ye-1,Mn=Ye>>>1,Gr=[["ary",H],["bind",O],["bindKey",w],["curry",k],["curryRight",U],["flip",ne],["partial",z],["partialRight",Y],["rearg",q]],Qt="[object Arguments]",hr="[object Array]",si="[object AsyncFunction]",rr="[object Boolean]",Un="[object Date]",xi="[object DOMException]",Mr="[object Error]",Dt="[object Function]",De="[object GeneratorFunction]",Ie="[object Map]",ke="[object Number]",Te="[object Null]",At="[object Object]",Rs="[object Promise]",El="[object Proxy]",ai="[object RegExp]",Zn="[object Set]",wo="[object String]",Ts="[object Symbol]",dv="[object Undefined]",Lo="[object WeakMap]",_v="[object WeakSet]",yo="[object ArrayBuffer]",Ri="[object DataView]",Cl="[object Float32Array]",bl="[object Float64Array]",Ol="[object Int8Array]",Il="[object Int16Array]",wl="[object Int32Array]",Ll="[object Uint8Array]",yl="[object Uint8ClampedArray]",Al="[object Uint16Array]",Nl="[object Uint32Array]",fv=/\b__p \+= '';/g,gv=/\b(__p \+=) '' \+/g,hv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Md=/&(?:amp|lt|gt|quot|#39);/g,Ud=/[&<>"']/g,pv=RegExp(Md.source),vv=RegExp(Ud.source),mv=/<%-([\s\S]+?)%>/g,Ev=/<%([\s\S]+?)%>/g,Fd=/<%=([\s\S]+?)%>/g,Cv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bv=/^\w*$/,Ov=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sl=/[\\^$.*+?()[\]{}|]/g,Iv=RegExp(Sl.source),xl=/^\s+/,wv=/\s/,Lv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,yv=/\{\n\/\* \[wrapped with (.+)\] \*/,Av=/,? & /,Nv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Sv=/[()=,{}\[\]\/\s]/,xv=/\\(\\)?/g,Rv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$d=/\w*$/,Tv=/^[-+]0x[0-9a-f]+$/i,Dv=/^0b[01]+$/i,kv=/^\[object .+?Constructor\]$/,Gv=/^0o[0-7]+$/i,Mv=/^(?:0|[1-9]\d*)$/,Uv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ds=/($^)/,Fv=/['\n\r\u2028\u2029\\]/g,ks="\\ud800-\\udfff",$v="\\u0300-\\u036f",Pv="\\ufe20-\\ufe2f",Bv="\\u20d0-\\u20ff",Pd=$v+Pv+Bv,Bd="\\u2700-\\u27bf",Hd="a-z\\xdf-\\xf6\\xf8-\\xff",Hv="\\xac\\xb1\\xd7\\xf7",Wv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zv="\\u2000-\\u206f",Yv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Wd="A-Z\\xc0-\\xd6\\xd8-\\xde",zd="\\ufe0e\\ufe0f",Yd=Hv+Wv+zv+Yv,Rl="['’]",jv="["+ks+"]",jd="["+Yd+"]",Gs="["+Pd+"]",Vd="\\d+",Vv="["+Bd+"]",Kd="["+Hd+"]",Xd="[^"+ks+Yd+Vd+Bd+Hd+Wd+"]",Tl="\\ud83c[\\udffb-\\udfff]",Kv="(?:"+Gs+"|"+Tl+")",qd="[^"+ks+"]",Dl="(?:\\ud83c[\\udde6-\\uddff]){2}",kl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="["+Wd+"]",Zd="\\u200d",Qd="(?:"+Kd+"|"+Xd+")",Xv="(?:"+Ti+"|"+Xd+")",Jd="(?:"+Rl+"(?:d|ll|m|re|s|t|ve))?",e_="(?:"+Rl+"(?:D|LL|M|RE|S|T|VE))?",t_=Kv+"?",n_="["+zd+"]?",qv="(?:"+Zd+"(?:"+[qd,Dl,kl].join("|")+")"+n_+t_+")*",Zv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",r_=n_+t_+qv,Jv="(?:"+[Vv,Dl,kl].join("|")+")"+r_,em="(?:"+[qd+Gs+"?",Gs,Dl,kl,jv].join("|")+")",tm=RegExp(Rl,"g"),nm=RegExp(Gs,"g"),Gl=RegExp(Tl+"(?="+Tl+")|"+em+r_,"g"),rm=RegExp([Ti+"?"+Kd+"+"+Jd+"(?="+[jd,Ti,"$"].join("|")+")",Xv+"+"+e_+"(?="+[jd,Ti+Qd,"$"].join("|")+")",Ti+"?"+Qd+"+"+Jd,Ti+"+"+e_,Qv,Zv,Vd,Jv].join("|"),"g"),im=RegExp("["+Zd+ks+Pd+zd+"]"),om=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,sm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],am=-1,Nt={};Nt[Cl]=Nt[bl]=Nt[Ol]=Nt[Il]=Nt[wl]=Nt[Ll]=Nt[yl]=Nt[Al]=Nt[Nl]=!0,Nt[Qt]=Nt[hr]=Nt[yo]=Nt[rr]=Nt[Ri]=Nt[Un]=Nt[Mr]=Nt[Dt]=Nt[Ie]=Nt[ke]=Nt[At]=Nt[ai]=Nt[Zn]=Nt[wo]=Nt[Lo]=!1;var Ot={};Ot[Qt]=Ot[hr]=Ot[yo]=Ot[Ri]=Ot[rr]=Ot[Un]=Ot[Cl]=Ot[bl]=Ot[Ol]=Ot[Il]=Ot[wl]=Ot[Ie]=Ot[ke]=Ot[At]=Ot[ai]=Ot[Zn]=Ot[wo]=Ot[Ts]=Ot[Ll]=Ot[yl]=Ot[Al]=Ot[Nl]=!0,Ot[Mr]=Ot[Dt]=Ot[Lo]=!1;var lm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},cm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},um={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},dm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},_m=parseFloat,fm=parseInt,i_=typeof Oa=="object"&&Oa&&Oa.Object===Object&&Oa,gm=typeof self=="object"&&self&&self.Object===Object&&self,Yt=i_||gm||Function("return this")(),Ml=e&&!e.nodeType&&e,li=Ml&&!0&&t&&!t.nodeType&&t,o_=li&&li.exports===Ml,Ul=o_&&i_.process,Fn=function(){try{var j=li&&li.require&&li.require("util").types;return j||Ul&&Ul.binding&&Ul.binding("util")}catch{}}(),s_=Fn&&Fn.isArrayBuffer,a_=Fn&&Fn.isDate,l_=Fn&&Fn.isMap,c_=Fn&&Fn.isRegExp,u_=Fn&&Fn.isSet,d_=Fn&&Fn.isTypedArray;function In(j,te,Q){switch(Q.length){case 0:return j.call(te);case 1:return j.call(te,Q[0]);case 2:return j.call(te,Q[0],Q[1]);case 3:return j.call(te,Q[0],Q[1],Q[2])}return j.apply(te,Q)}function hm(j,te,Q,Ae){for(var je=-1,gt=j==null?0:j.length;++je<gt;){var $t=j[je];te(Ae,$t,Q($t),j)}return Ae}function $n(j,te){for(var Q=-1,Ae=j==null?0:j.length;++Q<Ae&&te(j[Q],Q,j)!==!1;);return j}function pm(j,te){for(var Q=j==null?0:j.length;Q--&&te(j[Q],Q,j)!==!1;);return j}function __(j,te){for(var Q=-1,Ae=j==null?0:j.length;++Q<Ae;)if(!te(j[Q],Q,j))return!1;return!0}function Ur(j,te){for(var Q=-1,Ae=j==null?0:j.length,je=0,gt=[];++Q<Ae;){var $t=j[Q];te($t,Q,j)&&(gt[je++]=$t)}return gt}function Ms(j,te){var Q=j==null?0:j.length;return!!Q&&Di(j,te,0)>-1}function Fl(j,te,Q){for(var Ae=-1,je=j==null?0:j.length;++Ae<je;)if(Q(te,j[Ae]))return!0;return!1}function xt(j,te){for(var Q=-1,Ae=j==null?0:j.length,je=Array(Ae);++Q<Ae;)je[Q]=te(j[Q],Q,j);return je}function Fr(j,te){for(var Q=-1,Ae=te.length,je=j.length;++Q<Ae;)j[je+Q]=te[Q];return j}function $l(j,te,Q,Ae){var je=-1,gt=j==null?0:j.length;for(Ae&&gt&&(Q=j[++je]);++je<gt;)Q=te(Q,j[je],je,j);return Q}function vm(j,te,Q,Ae){var je=j==null?0:j.length;for(Ae&&je&&(Q=j[--je]);je--;)Q=te(Q,j[je],je,j);return Q}function Pl(j,te){for(var Q=-1,Ae=j==null?0:j.length;++Q<Ae;)if(te(j[Q],Q,j))return!0;return!1}var mm=Bl("length");function Em(j){return j.split("")}function Cm(j){return j.match(Nv)||[]}function f_(j,te,Q){var Ae;return Q(j,function(je,gt,$t){if(te(je,gt,$t))return Ae=gt,!1}),Ae}function Us(j,te,Q,Ae){for(var je=j.length,gt=Q+(Ae?1:-1);Ae?gt--:++gt<je;)if(te(j[gt],gt,j))return gt;return-1}function Di(j,te,Q){return te===te?Tm(j,te,Q):Us(j,g_,Q)}function bm(j,te,Q,Ae){for(var je=Q-1,gt=j.length;++je<gt;)if(Ae(j[je],te))return je;return-1}function g_(j){return j!==j}function h_(j,te){var Q=j==null?0:j.length;return Q?Wl(j,te)/Q:lt}function Bl(j){return function(te){return te==null?n:te[j]}}function Hl(j){return function(te){return j==null?n:j[te]}}function p_(j,te,Q,Ae,je){return je(j,function(gt,$t,bt){Q=Ae?(Ae=!1,gt):te(Q,gt,$t,bt)}),Q}function Om(j,te){var Q=j.length;for(j.sort(te);Q--;)j[Q]=j[Q].value;return j}function Wl(j,te){for(var Q,Ae=-1,je=j.length;++Ae<je;){var gt=te(j[Ae]);gt!==n&&(Q=Q===n?gt:Q+gt)}return Q}function zl(j,te){for(var Q=-1,Ae=Array(j);++Q<j;)Ae[Q]=te(Q);return Ae}function Im(j,te){return xt(te,function(Q){return[Q,j[Q]]})}function v_(j){return j&&j.slice(0,b_(j)+1).replace(xl,"")}function wn(j){return function(te){return j(te)}}function Yl(j,te){return xt(te,function(Q){return j[Q]})}function Ao(j,te){return j.has(te)}function m_(j,te){for(var Q=-1,Ae=j.length;++Q<Ae&&Di(te,j[Q],0)>-1;);return Q}function E_(j,te){for(var Q=j.length;Q--&&Di(te,j[Q],0)>-1;);return Q}function wm(j,te){for(var Q=j.length,Ae=0;Q--;)j[Q]===te&&++Ae;return Ae}var Lm=Hl(lm),ym=Hl(cm);function Am(j){return"\\"+dm[j]}function Nm(j,te){return j==null?n:j[te]}function ki(j){return im.test(j)}function Sm(j){return om.test(j)}function xm(j){for(var te,Q=[];!(te=j.next()).done;)Q.push(te.value);return Q}function jl(j){var te=-1,Q=Array(j.size);return j.forEach(function(Ae,je){Q[++te]=[je,Ae]}),Q}function C_(j,te){return function(Q){return j(te(Q))}}function $r(j,te){for(var Q=-1,Ae=j.length,je=0,gt=[];++Q<Ae;){var $t=j[Q];($t===te||$t===v)&&(j[Q]=v,gt[je++]=Q)}return gt}function Fs(j){var te=-1,Q=Array(j.size);return j.forEach(function(Ae){Q[++te]=Ae}),Q}function Rm(j){var te=-1,Q=Array(j.size);return j.forEach(function(Ae){Q[++te]=[Ae,Ae]}),Q}function Tm(j,te,Q){for(var Ae=Q-1,je=j.length;++Ae<je;)if(j[Ae]===te)return Ae;return-1}function Dm(j,te,Q){for(var Ae=Q+1;Ae--;)if(j[Ae]===te)return Ae;return Ae}function Gi(j){return ki(j)?Gm(j):mm(j)}function Qn(j){return ki(j)?Mm(j):Em(j)}function b_(j){for(var te=j.length;te--&&wv.test(j.charAt(te)););return te}var km=Hl(um);function Gm(j){for(var te=Gl.lastIndex=0;Gl.test(j);)++te;return te}function Mm(j){return j.match(Gl)||[]}function Um(j){return j.match(rm)||[]}var Fm=function j(te){te=te==null?Yt:Mi.defaults(Yt.Object(),te,Mi.pick(Yt,sm));var Q=te.Array,Ae=te.Date,je=te.Error,gt=te.Function,$t=te.Math,bt=te.Object,Vl=te.RegExp,$m=te.String,Pn=te.TypeError,$s=Q.prototype,Pm=gt.prototype,Ui=bt.prototype,Ps=te["__core-js_shared__"],Bs=Pm.toString,vt=Ui.hasOwnProperty,Bm=0,O_=function(){var o=/[^.]+$/.exec(Ps&&Ps.keys&&Ps.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Hs=Ui.toString,Hm=Bs.call(bt),Wm=Yt._,zm=Vl("^"+Bs.call(vt).replace(Sl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ws=o_?te.Buffer:n,Pr=te.Symbol,zs=te.Uint8Array,I_=Ws?Ws.allocUnsafe:n,Ys=C_(bt.getPrototypeOf,bt),w_=bt.create,L_=Ui.propertyIsEnumerable,js=$s.splice,y_=Pr?Pr.isConcatSpreadable:n,No=Pr?Pr.iterator:n,ci=Pr?Pr.toStringTag:n,Vs=function(){try{var o=gi(bt,"defineProperty");return o({},"",{}),o}catch{}}(),Ym=te.clearTimeout!==Yt.clearTimeout&&te.clearTimeout,jm=Ae&&Ae.now!==Yt.Date.now&&Ae.now,Vm=te.setTimeout!==Yt.setTimeout&&te.setTimeout,Ks=$t.ceil,Xs=$t.floor,Kl=bt.getOwnPropertySymbols,Km=Ws?Ws.isBuffer:n,A_=te.isFinite,Xm=$s.join,qm=C_(bt.keys,bt),Pt=$t.max,Jt=$t.min,Zm=Ae.now,Qm=te.parseInt,N_=$t.random,Jm=$s.reverse,Xl=gi(te,"DataView"),So=gi(te,"Map"),ql=gi(te,"Promise"),Fi=gi(te,"Set"),xo=gi(te,"WeakMap"),Ro=gi(bt,"create"),qs=xo&&new xo,$i={},e1=hi(Xl),t1=hi(So),n1=hi(ql),r1=hi(Fi),i1=hi(xo),Zs=Pr?Pr.prototype:n,To=Zs?Zs.valueOf:n,S_=Zs?Zs.toString:n;function L(o){if(kt(o)&&!Xe(o)&&!(o instanceof ot)){if(o instanceof Bn)return o;if(vt.call(o,"__wrapped__"))return Rf(o)}return new Bn(o)}var Pi=function(){function o(){}return function(l){if(!Tt(l))return{};if(w_)return w_(l);o.prototype=l;var f=new o;return o.prototype=n,f}}();function Qs(){}function Bn(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:mv,evaluate:Ev,interpolate:Fd,variable:"",imports:{_:L}},L.prototype=Qs.prototype,L.prototype.constructor=L,Bn.prototype=Pi(Qs.prototype),Bn.prototype.constructor=Bn;function ot(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ye,this.__views__=[]}function o1(){var o=new ot(this.__wrapped__);return o.__actions__=gn(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=gn(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=gn(this.__views__),o}function s1(){if(this.__filtered__){var o=new ot(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function a1(){var o=this.__wrapped__.value(),l=this.__dir__,f=Xe(o),E=l<0,I=f?o.length:0,N=EE(0,I,this.__views__),G=N.start,B=N.end,V=B-G,oe=E?B:G-1,le=this.__iteratees__,_e=le.length,we=0,Ge=Jt(V,this.__takeCount__);if(!f||!E&&I==V&&Ge==V)return J_(o,this.__actions__);var Pe=[];e:for(;V--&&we<Ge;){oe+=l;for(var et=-1,Be=o[oe];++et<_e;){var rt=le[et],ct=rt.iteratee,An=rt.type,ln=ct(Be);if(An==fe)Be=ln;else if(!ln){if(An==Ce)continue e;break e}}Pe[we++]=Be}return Pe}ot.prototype=Pi(Qs.prototype),ot.prototype.constructor=ot;function ui(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function l1(){this.__data__=Ro?Ro(null):{},this.size=0}function c1(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function u1(o){var l=this.__data__;if(Ro){var f=l[o];return f===u?n:f}return vt.call(l,o)?l[o]:n}function d1(o){var l=this.__data__;return Ro?l[o]!==n:vt.call(l,o)}function _1(o,l){var f=this.__data__;return this.size+=this.has(o)?0:1,f[o]=Ro&&l===n?u:l,this}ui.prototype.clear=l1,ui.prototype.delete=c1,ui.prototype.get=u1,ui.prototype.has=d1,ui.prototype.set=_1;function pr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function f1(){this.__data__=[],this.size=0}function g1(o){var l=this.__data__,f=Js(l,o);if(f<0)return!1;var E=l.length-1;return f==E?l.pop():js.call(l,f,1),--this.size,!0}function h1(o){var l=this.__data__,f=Js(l,o);return f<0?n:l[f][1]}function p1(o){return Js(this.__data__,o)>-1}function v1(o,l){var f=this.__data__,E=Js(f,o);return E<0?(++this.size,f.push([o,l])):f[E][1]=l,this}pr.prototype.clear=f1,pr.prototype.delete=g1,pr.prototype.get=h1,pr.prototype.has=p1,pr.prototype.set=v1;function vr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var E=o[l];this.set(E[0],E[1])}}function m1(){this.size=0,this.__data__={hash:new ui,map:new(So||pr),string:new ui}}function E1(o){var l=da(this,o).delete(o);return this.size-=l?1:0,l}function C1(o){return da(this,o).get(o)}function b1(o){return da(this,o).has(o)}function O1(o,l){var f=da(this,o),E=f.size;return f.set(o,l),this.size+=f.size==E?0:1,this}vr.prototype.clear=m1,vr.prototype.delete=E1,vr.prototype.get=C1,vr.prototype.has=b1,vr.prototype.set=O1;function di(o){var l=-1,f=o==null?0:o.length;for(this.__data__=new vr;++l<f;)this.add(o[l])}function I1(o){return this.__data__.set(o,u),this}function w1(o){return this.__data__.has(o)}di.prototype.add=di.prototype.push=I1,di.prototype.has=w1;function Jn(o){var l=this.__data__=new pr(o);this.size=l.size}function L1(){this.__data__=new pr,this.size=0}function y1(o){var l=this.__data__,f=l.delete(o);return this.size=l.size,f}function A1(o){return this.__data__.get(o)}function N1(o){return this.__data__.has(o)}function S1(o,l){var f=this.__data__;if(f instanceof pr){var E=f.__data__;if(!So||E.length<i-1)return E.push([o,l]),this.size=++f.size,this;f=this.__data__=new vr(E)}return f.set(o,l),this.size=f.size,this}Jn.prototype.clear=L1,Jn.prototype.delete=y1,Jn.prototype.get=A1,Jn.prototype.has=N1,Jn.prototype.set=S1;function x_(o,l){var f=Xe(o),E=!f&&pi(o),I=!f&&!E&&Yr(o),N=!f&&!E&&!I&&zi(o),G=f||E||I||N,B=G?zl(o.length,$m):[],V=B.length;for(var oe in o)(l||vt.call(o,oe))&&!(G&&(oe=="length"||I&&(oe=="offset"||oe=="parent")||N&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||br(oe,V)))&&B.push(oe);return B}function R_(o){var l=o.length;return l?o[ac(0,l-1)]:n}function x1(o,l){return _a(gn(o),_i(l,0,o.length))}function R1(o){return _a(gn(o))}function Zl(o,l,f){(f!==n&&!er(o[l],f)||f===n&&!(l in o))&&mr(o,l,f)}function Do(o,l,f){var E=o[l];(!(vt.call(o,l)&&er(E,f))||f===n&&!(l in o))&&mr(o,l,f)}function Js(o,l){for(var f=o.length;f--;)if(er(o[f][0],l))return f;return-1}function T1(o,l,f,E){return Br(o,function(I,N,G){l(E,I,f(I),G)}),E}function T_(o,l){return o&&or(l,zt(l),o)}function D1(o,l){return o&&or(l,pn(l),o)}function mr(o,l,f){l=="__proto__"&&Vs?Vs(o,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):o[l]=f}function Ql(o,l){for(var f=-1,E=l.length,I=Q(E),N=o==null;++f<E;)I[f]=N?n:Tc(o,l[f]);return I}function _i(o,l,f){return o===o&&(f!==n&&(o=o<=f?o:f),l!==n&&(o=o>=l?o:l)),o}function Hn(o,l,f,E,I,N){var G,B=l&g,V=l&p,oe=l&m;if(f&&(G=I?f(o,E,I,N):f(o)),G!==n)return G;if(!Tt(o))return o;var le=Xe(o);if(le){if(G=bE(o),!B)return gn(o,G)}else{var _e=en(o),we=_e==Dt||_e==De;if(Yr(o))return nf(o,B);if(_e==At||_e==Qt||we&&!I){if(G=V||we?{}:Of(o),!B)return V?uE(o,D1(G,o)):cE(o,T_(G,o))}else{if(!Ot[_e])return I?o:{};G=OE(o,_e,B)}}N||(N=new Jn);var Ge=N.get(o);if(Ge)return Ge;N.set(o,G),Zf(o)?o.forEach(function(Be){G.add(Hn(Be,l,f,Be,o,N))}):Xf(o)&&o.forEach(function(Be,rt){G.set(rt,Hn(Be,l,f,rt,o,N))});var Pe=oe?V?mc:vc:V?pn:zt,et=le?n:Pe(o);return $n(et||o,function(Be,rt){et&&(rt=Be,Be=o[rt]),Do(G,rt,Hn(Be,l,f,rt,o,N))}),G}function k1(o){var l=zt(o);return function(f){return D_(f,o,l)}}function D_(o,l,f){var E=f.length;if(o==null)return!E;for(o=bt(o);E--;){var I=f[E],N=l[I],G=o[I];if(G===n&&!(I in o)||!N(G))return!1}return!0}function k_(o,l,f){if(typeof o!="function")throw new Pn(a);return Po(function(){o.apply(n,f)},l)}function ko(o,l,f,E){var I=-1,N=Ms,G=!0,B=o.length,V=[],oe=l.length;if(!B)return V;f&&(l=xt(l,wn(f))),E?(N=Fl,G=!1):l.length>=i&&(N=Ao,G=!1,l=new di(l));e:for(;++I<B;){var le=o[I],_e=f==null?le:f(le);if(le=E||le!==0?le:0,G&&_e===_e){for(var we=oe;we--;)if(l[we]===_e)continue e;V.push(le)}else N(l,_e,E)||V.push(le)}return V}var Br=lf(ir),G_=lf(ec,!0);function G1(o,l){var f=!0;return Br(o,function(E,I,N){return f=!!l(E,I,N),f}),f}function ea(o,l,f){for(var E=-1,I=o.length;++E<I;){var N=o[E],G=l(N);if(G!=null&&(B===n?G===G&&!yn(G):f(G,B)))var B=G,V=N}return V}function M1(o,l,f,E){var I=o.length;for(f=Je(f),f<0&&(f=-f>I?0:I+f),E=E===n||E>I?I:Je(E),E<0&&(E+=I),E=f>E?0:Jf(E);f<E;)o[f++]=l;return o}function M_(o,l){var f=[];return Br(o,function(E,I,N){l(E,I,N)&&f.push(E)}),f}function jt(o,l,f,E,I){var N=-1,G=o.length;for(f||(f=wE),I||(I=[]);++N<G;){var B=o[N];l>0&&f(B)?l>1?jt(B,l-1,f,E,I):Fr(I,B):E||(I[I.length]=B)}return I}var Jl=cf(),U_=cf(!0);function ir(o,l){return o&&Jl(o,l,zt)}function ec(o,l){return o&&U_(o,l,zt)}function ta(o,l){return Ur(l,function(f){return Or(o[f])})}function fi(o,l){l=Wr(l,o);for(var f=0,E=l.length;o!=null&&f<E;)o=o[sr(l[f++])];return f&&f==E?o:n}function F_(o,l,f){var E=l(o);return Xe(o)?E:Fr(E,f(o))}function sn(o){return o==null?o===n?dv:Te:ci&&ci in bt(o)?mE(o):RE(o)}function tc(o,l){return o>l}function U1(o,l){return o!=null&&vt.call(o,l)}function F1(o,l){return o!=null&&l in bt(o)}function $1(o,l,f){return o>=Jt(l,f)&&o<Pt(l,f)}function nc(o,l,f){for(var E=f?Fl:Ms,I=o[0].length,N=o.length,G=N,B=Q(N),V=1/0,oe=[];G--;){var le=o[G];G&&l&&(le=xt(le,wn(l))),V=Jt(le.length,V),B[G]=!f&&(l||I>=120&&le.length>=120)?new di(G&&le):n}le=o[0];var _e=-1,we=B[0];e:for(;++_e<I&&oe.length<V;){var Ge=le[_e],Pe=l?l(Ge):Ge;if(Ge=f||Ge!==0?Ge:0,!(we?Ao(we,Pe):E(oe,Pe,f))){for(G=N;--G;){var et=B[G];if(!(et?Ao(et,Pe):E(o[G],Pe,f)))continue e}we&&we.push(Pe),oe.push(Ge)}}return oe}function P1(o,l,f,E){return ir(o,function(I,N,G){l(E,f(I),N,G)}),E}function Go(o,l,f){l=Wr(l,o),o=yf(o,l);var E=o==null?o:o[sr(zn(l))];return E==null?n:In(E,o,f)}function $_(o){return kt(o)&&sn(o)==Qt}function B1(o){return kt(o)&&sn(o)==yo}function H1(o){return kt(o)&&sn(o)==Un}function Mo(o,l,f,E,I){return o===l?!0:o==null||l==null||!kt(o)&&!kt(l)?o!==o&&l!==l:W1(o,l,f,E,Mo,I)}function W1(o,l,f,E,I,N){var G=Xe(o),B=Xe(l),V=G?hr:en(o),oe=B?hr:en(l);V=V==Qt?At:V,oe=oe==Qt?At:oe;var le=V==At,_e=oe==At,we=V==oe;if(we&&Yr(o)){if(!Yr(l))return!1;G=!0,le=!1}if(we&&!le)return N||(N=new Jn),G||zi(o)?Ef(o,l,f,E,I,N):pE(o,l,V,f,E,I,N);if(!(f&C)){var Ge=le&&vt.call(o,"__wrapped__"),Pe=_e&&vt.call(l,"__wrapped__");if(Ge||Pe){var et=Ge?o.value():o,Be=Pe?l.value():l;return N||(N=new Jn),I(et,Be,f,E,N)}}return we?(N||(N=new Jn),vE(o,l,f,E,I,N)):!1}function z1(o){return kt(o)&&en(o)==Ie}function rc(o,l,f,E){var I=f.length,N=I,G=!E;if(o==null)return!N;for(o=bt(o);I--;){var B=f[I];if(G&&B[2]?B[1]!==o[B[0]]:!(B[0]in o))return!1}for(;++I<N;){B=f[I];var V=B[0],oe=o[V],le=B[1];if(G&&B[2]){if(oe===n&&!(V in o))return!1}else{var _e=new Jn;if(E)var we=E(oe,le,V,o,l,_e);if(!(we===n?Mo(le,oe,C|b,E,_e):we))return!1}}return!0}function P_(o){if(!Tt(o)||yE(o))return!1;var l=Or(o)?zm:kv;return l.test(hi(o))}function Y1(o){return kt(o)&&sn(o)==ai}function j1(o){return kt(o)&&en(o)==Zn}function V1(o){return kt(o)&&ma(o.length)&&!!Nt[sn(o)]}function B_(o){return typeof o=="function"?o:o==null?vn:typeof o=="object"?Xe(o)?z_(o[0],o[1]):W_(o):ug(o)}function ic(o){if(!$o(o))return qm(o);var l=[];for(var f in bt(o))vt.call(o,f)&&f!="constructor"&&l.push(f);return l}function K1(o){if(!Tt(o))return xE(o);var l=$o(o),f=[];for(var E in o)E=="constructor"&&(l||!vt.call(o,E))||f.push(E);return f}function oc(o,l){return o<l}function H_(o,l){var f=-1,E=hn(o)?Q(o.length):[];return Br(o,function(I,N,G){E[++f]=l(I,N,G)}),E}function W_(o){var l=Cc(o);return l.length==1&&l[0][2]?wf(l[0][0],l[0][1]):function(f){return f===o||rc(f,o,l)}}function z_(o,l){return Oc(o)&&If(l)?wf(sr(o),l):function(f){var E=Tc(f,o);return E===n&&E===l?Dc(f,o):Mo(l,E,C|b)}}function na(o,l,f,E,I){o!==l&&Jl(l,function(N,G){if(I||(I=new Jn),Tt(N))X1(o,l,G,f,na,E,I);else{var B=E?E(wc(o,G),N,G+"",o,l,I):n;B===n&&(B=N),Zl(o,G,B)}},pn)}function X1(o,l,f,E,I,N,G){var B=wc(o,f),V=wc(l,f),oe=G.get(V);if(oe){Zl(o,f,oe);return}var le=N?N(B,V,f+"",o,l,G):n,_e=le===n;if(_e){var we=Xe(V),Ge=!we&&Yr(V),Pe=!we&&!Ge&&zi(V);le=V,we||Ge||Pe?Xe(B)?le=B:Gt(B)?le=gn(B):Ge?(_e=!1,le=nf(V,!0)):Pe?(_e=!1,le=rf(V,!0)):le=[]:Bo(V)||pi(V)?(le=B,pi(B)?le=eg(B):(!Tt(B)||Or(B))&&(le=Of(V))):_e=!1}_e&&(G.set(V,le),I(le,V,E,N,G),G.delete(V)),Zl(o,f,le)}function Y_(o,l){var f=o.length;if(f)return l+=l<0?f:0,br(l,f)?o[l]:n}function j_(o,l,f){l.length?l=xt(l,function(N){return Xe(N)?function(G){return fi(G,N.length===1?N[0]:N)}:N}):l=[vn];var E=-1;l=xt(l,wn($e()));var I=H_(o,function(N,G,B){var V=xt(l,function(oe){return oe(N)});return{criteria:V,index:++E,value:N}});return Om(I,function(N,G){return lE(N,G,f)})}function q1(o,l){return V_(o,l,function(f,E){return Dc(o,E)})}function V_(o,l,f){for(var E=-1,I=l.length,N={};++E<I;){var G=l[E],B=fi(o,G);f(B,G)&&Uo(N,Wr(G,o),B)}return N}function Z1(o){return function(l){return fi(l,o)}}function sc(o,l,f,E){var I=E?bm:Di,N=-1,G=l.length,B=o;for(o===l&&(l=gn(l)),f&&(B=xt(o,wn(f)));++N<G;)for(var V=0,oe=l[N],le=f?f(oe):oe;(V=I(B,le,V,E))>-1;)B!==o&&js.call(B,V,1),js.call(o,V,1);return o}function K_(o,l){for(var f=o?l.length:0,E=f-1;f--;){var I=l[f];if(f==E||I!==N){var N=I;br(I)?js.call(o,I,1):uc(o,I)}}return o}function ac(o,l){return o+Xs(N_()*(l-o+1))}function Q1(o,l,f,E){for(var I=-1,N=Pt(Ks((l-o)/(f||1)),0),G=Q(N);N--;)G[E?N:++I]=o,o+=f;return G}function lc(o,l){var f="";if(!o||l<1||l>Se)return f;do l%2&&(f+=o),l=Xs(l/2),l&&(o+=o);while(l);return f}function tt(o,l){return Lc(Lf(o,l,vn),o+"")}function J1(o){return R_(Yi(o))}function eE(o,l){var f=Yi(o);return _a(f,_i(l,0,f.length))}function Uo(o,l,f,E){if(!Tt(o))return o;l=Wr(l,o);for(var I=-1,N=l.length,G=N-1,B=o;B!=null&&++I<N;){var V=sr(l[I]),oe=f;if(V==="__proto__"||V==="constructor"||V==="prototype")return o;if(I!=G){var le=B[V];oe=E?E(le,V,B):n,oe===n&&(oe=Tt(le)?le:br(l[I+1])?[]:{})}Do(B,V,oe),B=B[V]}return o}var X_=qs?function(o,l){return qs.set(o,l),o}:vn,tE=Vs?function(o,l){return Vs(o,"toString",{configurable:!0,enumerable:!1,value:Gc(l),writable:!0})}:vn;function nE(o){return _a(Yi(o))}function Wn(o,l,f){var E=-1,I=o.length;l<0&&(l=-l>I?0:I+l),f=f>I?I:f,f<0&&(f+=I),I=l>f?0:f-l>>>0,l>>>=0;for(var N=Q(I);++E<I;)N[E]=o[E+l];return N}function rE(o,l){var f;return Br(o,function(E,I,N){return f=l(E,I,N),!f}),!!f}function ra(o,l,f){var E=0,I=o==null?E:o.length;if(typeof l=="number"&&l===l&&I<=Mn){for(;E<I;){var N=E+I>>>1,G=o[N];G!==null&&!yn(G)&&(f?G<=l:G<l)?E=N+1:I=N}return I}return cc(o,l,vn,f)}function cc(o,l,f,E){var I=0,N=o==null?0:o.length;if(N===0)return 0;l=f(l);for(var G=l!==l,B=l===null,V=yn(l),oe=l===n;I<N;){var le=Xs((I+N)/2),_e=f(o[le]),we=_e!==n,Ge=_e===null,Pe=_e===_e,et=yn(_e);if(G)var Be=E||Pe;else oe?Be=Pe&&(E||we):B?Be=Pe&&we&&(E||!Ge):V?Be=Pe&&we&&!Ge&&(E||!et):Ge||et?Be=!1:Be=E?_e<=l:_e<l;Be?I=le+1:N=le}return Jt(N,On)}function q_(o,l){for(var f=-1,E=o.length,I=0,N=[];++f<E;){var G=o[f],B=l?l(G):G;if(!f||!er(B,V)){var V=B;N[I++]=G===0?0:G}}return N}function Z_(o){return typeof o=="number"?o:yn(o)?lt:+o}function Ln(o){if(typeof o=="string")return o;if(Xe(o))return xt(o,Ln)+"";if(yn(o))return S_?S_.call(o):"";var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function Hr(o,l,f){var E=-1,I=Ms,N=o.length,G=!0,B=[],V=B;if(f)G=!1,I=Fl;else if(N>=i){var oe=l?null:gE(o);if(oe)return Fs(oe);G=!1,I=Ao,V=new di}else V=l?[]:B;e:for(;++E<N;){var le=o[E],_e=l?l(le):le;if(le=f||le!==0?le:0,G&&_e===_e){for(var we=V.length;we--;)if(V[we]===_e)continue e;l&&V.push(_e),B.push(le)}else I(V,_e,f)||(V!==B&&V.push(_e),B.push(le))}return B}function uc(o,l){return l=Wr(l,o),o=yf(o,l),o==null||delete o[sr(zn(l))]}function Q_(o,l,f,E){return Uo(o,l,f(fi(o,l)),E)}function ia(o,l,f,E){for(var I=o.length,N=E?I:-1;(E?N--:++N<I)&&l(o[N],N,o););return f?Wn(o,E?0:N,E?N+1:I):Wn(o,E?N+1:0,E?I:N)}function J_(o,l){var f=o;return f instanceof ot&&(f=f.value()),$l(l,function(E,I){return I.func.apply(I.thisArg,Fr([E],I.args))},f)}function dc(o,l,f){var E=o.length;if(E<2)return E?Hr(o[0]):[];for(var I=-1,N=Q(E);++I<E;)for(var G=o[I],B=-1;++B<E;)B!=I&&(N[I]=ko(N[I]||G,o[B],l,f));return Hr(jt(N,1),l,f)}function ef(o,l,f){for(var E=-1,I=o.length,N=l.length,G={};++E<I;){var B=E<N?l[E]:n;f(G,o[E],B)}return G}function _c(o){return Gt(o)?o:[]}function fc(o){return typeof o=="function"?o:vn}function Wr(o,l){return Xe(o)?o:Oc(o,l)?[o]:xf(ht(o))}var iE=tt;function zr(o,l,f){var E=o.length;return f=f===n?E:f,!l&&f>=E?o:Wn(o,l,f)}var tf=Ym||function(o){return Yt.clearTimeout(o)};function nf(o,l){if(l)return o.slice();var f=o.length,E=I_?I_(f):new o.constructor(f);return o.copy(E),E}function gc(o){var l=new o.constructor(o.byteLength);return new zs(l).set(new zs(o)),l}function oE(o,l){var f=l?gc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.byteLength)}function sE(o){var l=new o.constructor(o.source,$d.exec(o));return l.lastIndex=o.lastIndex,l}function aE(o){return To?bt(To.call(o)):{}}function rf(o,l){var f=l?gc(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.length)}function of(o,l){if(o!==l){var f=o!==n,E=o===null,I=o===o,N=yn(o),G=l!==n,B=l===null,V=l===l,oe=yn(l);if(!B&&!oe&&!N&&o>l||N&&G&&V&&!B&&!oe||E&&G&&V||!f&&V||!I)return 1;if(!E&&!N&&!oe&&o<l||oe&&f&&I&&!E&&!N||B&&f&&I||!G&&I||!V)return-1}return 0}function lE(o,l,f){for(var E=-1,I=o.criteria,N=l.criteria,G=I.length,B=f.length;++E<G;){var V=of(I[E],N[E]);if(V){if(E>=B)return V;var oe=f[E];return V*(oe=="desc"?-1:1)}}return o.index-l.index}function sf(o,l,f,E){for(var I=-1,N=o.length,G=f.length,B=-1,V=l.length,oe=Pt(N-G,0),le=Q(V+oe),_e=!E;++B<V;)le[B]=l[B];for(;++I<G;)(_e||I<N)&&(le[f[I]]=o[I]);for(;oe--;)le[B++]=o[I++];return le}function af(o,l,f,E){for(var I=-1,N=o.length,G=-1,B=f.length,V=-1,oe=l.length,le=Pt(N-B,0),_e=Q(le+oe),we=!E;++I<le;)_e[I]=o[I];for(var Ge=I;++V<oe;)_e[Ge+V]=l[V];for(;++G<B;)(we||I<N)&&(_e[Ge+f[G]]=o[I++]);return _e}function gn(o,l){var f=-1,E=o.length;for(l||(l=Q(E));++f<E;)l[f]=o[f];return l}function or(o,l,f,E){var I=!f;f||(f={});for(var N=-1,G=l.length;++N<G;){var B=l[N],V=E?E(f[B],o[B],B,f,o):n;V===n&&(V=o[B]),I?mr(f,B,V):Do(f,B,V)}return f}function cE(o,l){return or(o,bc(o),l)}function uE(o,l){return or(o,Cf(o),l)}function oa(o,l){return function(f,E){var I=Xe(f)?hm:T1,N=l?l():{};return I(f,o,$e(E,2),N)}}function Bi(o){return tt(function(l,f){var E=-1,I=f.length,N=I>1?f[I-1]:n,G=I>2?f[2]:n;for(N=o.length>3&&typeof N=="function"?(I--,N):n,G&&an(f[0],f[1],G)&&(N=I<3?n:N,I=1),l=bt(l);++E<I;){var B=f[E];B&&o(l,B,E,N)}return l})}function lf(o,l){return function(f,E){if(f==null)return f;if(!hn(f))return o(f,E);for(var I=f.length,N=l?I:-1,G=bt(f);(l?N--:++N<I)&&E(G[N],N,G)!==!1;);return f}}function cf(o){return function(l,f,E){for(var I=-1,N=bt(l),G=E(l),B=G.length;B--;){var V=G[o?B:++I];if(f(N[V],V,N)===!1)break}return l}}function dE(o,l,f){var E=l&O,I=Fo(o);function N(){var G=this&&this!==Yt&&this instanceof N?I:o;return G.apply(E?f:this,arguments)}return N}function uf(o){return function(l){l=ht(l);var f=ki(l)?Qn(l):n,E=f?f[0]:l.charAt(0),I=f?zr(f,1).join(""):l.slice(1);return E[o]()+I}}function Hi(o){return function(l){return $l(lg(ag(l).replace(tm,"")),o,"")}}function Fo(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=Pi(o.prototype),E=o.apply(f,l);return Tt(E)?E:f}}function _E(o,l,f){var E=Fo(o);function I(){for(var N=arguments.length,G=Q(N),B=N,V=Wi(I);B--;)G[B]=arguments[B];var oe=N<3&&G[0]!==V&&G[N-1]!==V?[]:$r(G,V);if(N-=oe.length,N<f)return hf(o,l,sa,I.placeholder,n,G,oe,n,n,f-N);var le=this&&this!==Yt&&this instanceof I?E:o;return In(le,this,G)}return I}function df(o){return function(l,f,E){var I=bt(l);if(!hn(l)){var N=$e(f,3);l=zt(l),f=function(B){return N(I[B],B,I)}}var G=o(l,f,E);return G>-1?I[N?l[G]:G]:n}}function _f(o){return Cr(function(l){var f=l.length,E=f,I=Bn.prototype.thru;for(o&&l.reverse();E--;){var N=l[E];if(typeof N!="function")throw new Pn(a);if(I&&!G&&ua(N)=="wrapper")var G=new Bn([],!0)}for(E=G?E:f;++E<f;){N=l[E];var B=ua(N),V=B=="wrapper"?Ec(N):n;V&&Ic(V[0])&&V[1]==(H|k|z|q)&&!V[4].length&&V[9]==1?G=G[ua(V[0])].apply(G,V[3]):G=N.length==1&&Ic(N)?G[B]():G.thru(N)}return function(){var oe=arguments,le=oe[0];if(G&&oe.length==1&&Xe(le))return G.plant(le).value();for(var _e=0,we=f?l[_e].apply(this,oe):le;++_e<f;)we=l[_e].call(this,we);return we}})}function sa(o,l,f,E,I,N,G,B,V,oe){var le=l&H,_e=l&O,we=l&w,Ge=l&(k|U),Pe=l&ne,et=we?n:Fo(o);function Be(){for(var rt=arguments.length,ct=Q(rt),An=rt;An--;)ct[An]=arguments[An];if(Ge)var ln=Wi(Be),Nn=wm(ct,ln);if(E&&(ct=sf(ct,E,I,Ge)),N&&(ct=af(ct,N,G,Ge)),rt-=Nn,Ge&&rt<oe){var Mt=$r(ct,ln);return hf(o,l,sa,Be.placeholder,f,ct,Mt,B,V,oe-rt)}var tr=_e?f:this,wr=we?tr[o]:o;return rt=ct.length,B?ct=TE(ct,B):Pe&&rt>1&&ct.reverse(),le&&V<rt&&(ct.length=V),this&&this!==Yt&&this instanceof Be&&(wr=et||Fo(wr)),wr.apply(tr,ct)}return Be}function ff(o,l){return function(f,E){return P1(f,o,l(E),{})}}function aa(o,l){return function(f,E){var I;if(f===n&&E===n)return l;if(f!==n&&(I=f),E!==n){if(I===n)return E;typeof f=="string"||typeof E=="string"?(f=Ln(f),E=Ln(E)):(f=Z_(f),E=Z_(E)),I=o(f,E)}return I}}function hc(o){return Cr(function(l){return l=xt(l,wn($e())),tt(function(f){var E=this;return o(l,function(I){return In(I,E,f)})})})}function la(o,l){l=l===n?" ":Ln(l);var f=l.length;if(f<2)return f?lc(l,o):l;var E=lc(l,Ks(o/Gi(l)));return ki(l)?zr(Qn(E),0,o).join(""):E.slice(0,o)}function fE(o,l,f,E){var I=l&O,N=Fo(o);function G(){for(var B=-1,V=arguments.length,oe=-1,le=E.length,_e=Q(le+V),we=this&&this!==Yt&&this instanceof G?N:o;++oe<le;)_e[oe]=E[oe];for(;V--;)_e[oe++]=arguments[++B];return In(we,I?f:this,_e)}return G}function gf(o){return function(l,f,E){return E&&typeof E!="number"&&an(l,f,E)&&(f=E=n),l=Ir(l),f===n?(f=l,l=0):f=Ir(f),E=E===n?l<f?1:-1:Ir(E),Q1(l,f,E,o)}}function ca(o){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=Yn(l),f=Yn(f)),o(l,f)}}function hf(o,l,f,E,I,N,G,B,V,oe){var le=l&k,_e=le?G:n,we=le?n:G,Ge=le?N:n,Pe=le?n:N;l|=le?z:Y,l&=~(le?Y:z),l&x||(l&=-4);var et=[o,l,I,Ge,_e,Pe,we,B,V,oe],Be=f.apply(n,et);return Ic(o)&&Af(Be,et),Be.placeholder=E,Nf(Be,o,l)}function pc(o){var l=$t[o];return function(f,E){if(f=Yn(f),E=E==null?0:Jt(Je(E),292),E&&A_(f)){var I=(ht(f)+"e").split("e"),N=l(I[0]+"e"+(+I[1]+E));return I=(ht(N)+"e").split("e"),+(I[0]+"e"+(+I[1]-E))}return l(f)}}var gE=Fi&&1/Fs(new Fi([,-0]))[1]==Qe?function(o){return new Fi(o)}:Fc;function pf(o){return function(l){var f=en(l);return f==Ie?jl(l):f==Zn?Rm(l):Im(l,o(l))}}function Er(o,l,f,E,I,N,G,B){var V=l&w;if(!V&&typeof o!="function")throw new Pn(a);var oe=E?E.length:0;if(oe||(l&=-97,E=I=n),G=G===n?G:Pt(Je(G),0),B=B===n?B:Je(B),oe-=I?I.length:0,l&Y){var le=E,_e=I;E=I=n}var we=V?n:Ec(o),Ge=[o,l,f,E,I,le,_e,N,G,B];if(we&&SE(Ge,we),o=Ge[0],l=Ge[1],f=Ge[2],E=Ge[3],I=Ge[4],B=Ge[9]=Ge[9]===n?V?0:o.length:Pt(Ge[9]-oe,0),!B&&l&(k|U)&&(l&=-25),!l||l==O)var Pe=dE(o,l,f);else l==k||l==U?Pe=_E(o,l,B):(l==z||l==(O|z))&&!I.length?Pe=fE(o,l,f,E):Pe=sa.apply(n,Ge);var et=we?X_:Af;return Nf(et(Pe,Ge),o,l)}function vf(o,l,f,E){return o===n||er(o,Ui[f])&&!vt.call(E,f)?l:o}function mf(o,l,f,E,I,N){return Tt(o)&&Tt(l)&&(N.set(l,o),na(o,l,n,mf,N),N.delete(l)),o}function hE(o){return Bo(o)?n:o}function Ef(o,l,f,E,I,N){var G=f&C,B=o.length,V=l.length;if(B!=V&&!(G&&V>B))return!1;var oe=N.get(o),le=N.get(l);if(oe&&le)return oe==l&&le==o;var _e=-1,we=!0,Ge=f&b?new di:n;for(N.set(o,l),N.set(l,o);++_e<B;){var Pe=o[_e],et=l[_e];if(E)var Be=G?E(et,Pe,_e,l,o,N):E(Pe,et,_e,o,l,N);if(Be!==n){if(Be)continue;we=!1;break}if(Ge){if(!Pl(l,function(rt,ct){if(!Ao(Ge,ct)&&(Pe===rt||I(Pe,rt,f,E,N)))return Ge.push(ct)})){we=!1;break}}else if(!(Pe===et||I(Pe,et,f,E,N))){we=!1;break}}return N.delete(o),N.delete(l),we}function pE(o,l,f,E,I,N,G){switch(f){case Ri:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case yo:return!(o.byteLength!=l.byteLength||!N(new zs(o),new zs(l)));case rr:case Un:case ke:return er(+o,+l);case Mr:return o.name==l.name&&o.message==l.message;case ai:case wo:return o==l+"";case Ie:var B=jl;case Zn:var V=E&C;if(B||(B=Fs),o.size!=l.size&&!V)return!1;var oe=G.get(o);if(oe)return oe==l;E|=b,G.set(o,l);var le=Ef(B(o),B(l),E,I,N,G);return G.delete(o),le;case Ts:if(To)return To.call(o)==To.call(l)}return!1}function vE(o,l,f,E,I,N){var G=f&C,B=vc(o),V=B.length,oe=vc(l),le=oe.length;if(V!=le&&!G)return!1;for(var _e=V;_e--;){var we=B[_e];if(!(G?we in l:vt.call(l,we)))return!1}var Ge=N.get(o),Pe=N.get(l);if(Ge&&Pe)return Ge==l&&Pe==o;var et=!0;N.set(o,l),N.set(l,o);for(var Be=G;++_e<V;){we=B[_e];var rt=o[we],ct=l[we];if(E)var An=G?E(ct,rt,we,l,o,N):E(rt,ct,we,o,l,N);if(!(An===n?rt===ct||I(rt,ct,f,E,N):An)){et=!1;break}Be||(Be=we=="constructor")}if(et&&!Be){var ln=o.constructor,Nn=l.constructor;ln!=Nn&&"constructor"in o&&"constructor"in l&&!(typeof ln=="function"&&ln instanceof ln&&typeof Nn=="function"&&Nn instanceof Nn)&&(et=!1)}return N.delete(o),N.delete(l),et}function Cr(o){return Lc(Lf(o,n,kf),o+"")}function vc(o){return F_(o,zt,bc)}function mc(o){return F_(o,pn,Cf)}var Ec=qs?function(o){return qs.get(o)}:Fc;function ua(o){for(var l=o.name+"",f=$i[l],E=vt.call($i,l)?f.length:0;E--;){var I=f[E],N=I.func;if(N==null||N==o)return I.name}return l}function Wi(o){var l=vt.call(L,"placeholder")?L:o;return l.placeholder}function $e(){var o=L.iteratee||Mc;return o=o===Mc?B_:o,arguments.length?o(arguments[0],arguments[1]):o}function da(o,l){var f=o.__data__;return LE(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Cc(o){for(var l=zt(o),f=l.length;f--;){var E=l[f],I=o[E];l[f]=[E,I,If(I)]}return l}function gi(o,l){var f=Nm(o,l);return P_(f)?f:n}function mE(o){var l=vt.call(o,ci),f=o[ci];try{o[ci]=n;var E=!0}catch{}var I=Hs.call(o);return E&&(l?o[ci]=f:delete o[ci]),I}var bc=Kl?function(o){return o==null?[]:(o=bt(o),Ur(Kl(o),function(l){return L_.call(o,l)}))}:$c,Cf=Kl?function(o){for(var l=[];o;)Fr(l,bc(o)),o=Ys(o);return l}:$c,en=sn;(Xl&&en(new Xl(new ArrayBuffer(1)))!=Ri||So&&en(new So)!=Ie||ql&&en(ql.resolve())!=Rs||Fi&&en(new Fi)!=Zn||xo&&en(new xo)!=Lo)&&(en=function(o){var l=sn(o),f=l==At?o.constructor:n,E=f?hi(f):"";if(E)switch(E){case e1:return Ri;case t1:return Ie;case n1:return Rs;case r1:return Zn;case i1:return Lo}return l});function EE(o,l,f){for(var E=-1,I=f.length;++E<I;){var N=f[E],G=N.size;switch(N.type){case"drop":o+=G;break;case"dropRight":l-=G;break;case"take":l=Jt(l,o+G);break;case"takeRight":o=Pt(o,l-G);break}}return{start:o,end:l}}function CE(o){var l=o.match(yv);return l?l[1].split(Av):[]}function bf(o,l,f){l=Wr(l,o);for(var E=-1,I=l.length,N=!1;++E<I;){var G=sr(l[E]);if(!(N=o!=null&&f(o,G)))break;o=o[G]}return N||++E!=I?N:(I=o==null?0:o.length,!!I&&ma(I)&&br(G,I)&&(Xe(o)||pi(o)))}function bE(o){var l=o.length,f=new o.constructor(l);return l&&typeof o[0]=="string"&&vt.call(o,"index")&&(f.index=o.index,f.input=o.input),f}function Of(o){return typeof o.constructor=="function"&&!$o(o)?Pi(Ys(o)):{}}function OE(o,l,f){var E=o.constructor;switch(l){case yo:return gc(o);case rr:case Un:return new E(+o);case Ri:return oE(o,f);case Cl:case bl:case Ol:case Il:case wl:case Ll:case yl:case Al:case Nl:return rf(o,f);case Ie:return new E;case ke:case wo:return new E(o);case ai:return sE(o);case Zn:return new E;case Ts:return aE(o)}}function IE(o,l){var f=l.length;if(!f)return o;var E=f-1;return l[E]=(f>1?"& ":"")+l[E],l=l.join(f>2?", ":" "),o.replace(Lv,`{
/* [wrapped with `+l+`] */
`)}function wE(o){return Xe(o)||pi(o)||!!(y_&&o&&o[y_])}function br(o,l){var f=typeof o;return l=l??Se,!!l&&(f=="number"||f!="symbol"&&Mv.test(o))&&o>-1&&o%1==0&&o<l}function an(o,l,f){if(!Tt(f))return!1;var E=typeof l;return(E=="number"?hn(f)&&br(l,f.length):E=="string"&&l in f)?er(f[l],o):!1}function Oc(o,l){if(Xe(o))return!1;var f=typeof o;return f=="number"||f=="symbol"||f=="boolean"||o==null||yn(o)?!0:bv.test(o)||!Cv.test(o)||l!=null&&o in bt(l)}function LE(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function Ic(o){var l=ua(o),f=L[l];if(typeof f!="function"||!(l in ot.prototype))return!1;if(o===f)return!0;var E=Ec(f);return!!E&&o===E[0]}function yE(o){return!!O_&&O_ in o}var AE=Ps?Or:Pc;function $o(o){var l=o&&o.constructor,f=typeof l=="function"&&l.prototype||Ui;return o===f}function If(o){return o===o&&!Tt(o)}function wf(o,l){return function(f){return f==null?!1:f[o]===l&&(l!==n||o in bt(f))}}function NE(o){var l=pa(o,function(E){return f.size===_&&f.clear(),E}),f=l.cache;return l}function SE(o,l){var f=o[1],E=l[1],I=f|E,N=I<(O|w|H),G=E==H&&f==k||E==H&&f==q&&o[7].length<=l[8]||E==(H|q)&&l[7].length<=l[8]&&f==k;if(!(N||G))return o;E&O&&(o[2]=l[2],I|=f&O?0:x);var B=l[3];if(B){var V=o[3];o[3]=V?sf(V,B,l[4]):B,o[4]=V?$r(o[3],v):l[4]}return B=l[5],B&&(V=o[5],o[5]=V?af(V,B,l[6]):B,o[6]=V?$r(o[5],v):l[6]),B=l[7],B&&(o[7]=B),E&H&&(o[8]=o[8]==null?l[8]:Jt(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=I,o}function xE(o){var l=[];if(o!=null)for(var f in bt(o))l.push(f);return l}function RE(o){return Hs.call(o)}function Lf(o,l,f){return l=Pt(l===n?o.length-1:l,0),function(){for(var E=arguments,I=-1,N=Pt(E.length-l,0),G=Q(N);++I<N;)G[I]=E[l+I];I=-1;for(var B=Q(l+1);++I<l;)B[I]=E[I];return B[l]=f(G),In(o,this,B)}}function yf(o,l){return l.length<2?o:fi(o,Wn(l,0,-1))}function TE(o,l){for(var f=o.length,E=Jt(l.length,f),I=gn(o);E--;){var N=l[E];o[E]=br(N,f)?I[N]:n}return o}function wc(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var Af=Sf(X_),Po=Vm||function(o,l){return Yt.setTimeout(o,l)},Lc=Sf(tE);function Nf(o,l,f){var E=l+"";return Lc(o,IE(E,DE(CE(E),f)))}function Sf(o){var l=0,f=0;return function(){var E=Zm(),I=Ee-(E-f);if(f=E,I>0){if(++l>=ie)return arguments[0]}else l=0;return o.apply(n,arguments)}}function _a(o,l){var f=-1,E=o.length,I=E-1;for(l=l===n?E:l;++f<l;){var N=ac(f,I),G=o[N];o[N]=o[f],o[f]=G}return o.length=l,o}var xf=NE(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(Ov,function(f,E,I,N){l.push(I?N.replace(xv,"$1"):E||f)}),l});function sr(o){if(typeof o=="string"||yn(o))return o;var l=o+"";return l=="0"&&1/o==-1/0?"-0":l}function hi(o){if(o!=null){try{return Bs.call(o)}catch{}try{return o+""}catch{}}return""}function DE(o,l){return $n(Gr,function(f){var E="_."+f[0];l&f[1]&&!Ms(o,E)&&o.push(E)}),o.sort()}function Rf(o){if(o instanceof ot)return o.clone();var l=new Bn(o.__wrapped__,o.__chain__);return l.__actions__=gn(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function kE(o,l,f){(f?an(o,l,f):l===n)?l=1:l=Pt(Je(l),0);var E=o==null?0:o.length;if(!E||l<1)return[];for(var I=0,N=0,G=Q(Ks(E/l));I<E;)G[N++]=Wn(o,I,I+=l);return G}function GE(o){for(var l=-1,f=o==null?0:o.length,E=0,I=[];++l<f;){var N=o[l];N&&(I[E++]=N)}return I}function ME(){var o=arguments.length;if(!o)return[];for(var l=Q(o-1),f=arguments[0],E=o;E--;)l[E-1]=arguments[E];return Fr(Xe(f)?gn(f):[f],jt(l,1))}var UE=tt(function(o,l){return Gt(o)?ko(o,jt(l,1,Gt,!0)):[]}),FE=tt(function(o,l){var f=zn(l);return Gt(f)&&(f=n),Gt(o)?ko(o,jt(l,1,Gt,!0),$e(f,2)):[]}),$E=tt(function(o,l){var f=zn(l);return Gt(f)&&(f=n),Gt(o)?ko(o,jt(l,1,Gt,!0),n,f):[]});function PE(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Je(l),Wn(o,l<0?0:l,E)):[]}function BE(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Je(l),l=E-l,Wn(o,0,l<0?0:l)):[]}function HE(o,l){return o&&o.length?ia(o,$e(l,3),!0,!0):[]}function WE(o,l){return o&&o.length?ia(o,$e(l,3),!0):[]}function zE(o,l,f,E){var I=o==null?0:o.length;return I?(f&&typeof f!="number"&&an(o,l,f)&&(f=0,E=I),M1(o,l,f,E)):[]}function Tf(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var I=f==null?0:Je(f);return I<0&&(I=Pt(E+I,0)),Us(o,$e(l,3),I)}function Df(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var I=E-1;return f!==n&&(I=Je(f),I=f<0?Pt(E+I,0):Jt(I,E-1)),Us(o,$e(l,3),I,!0)}function kf(o){var l=o==null?0:o.length;return l?jt(o,1):[]}function YE(o){var l=o==null?0:o.length;return l?jt(o,Qe):[]}function jE(o,l){var f=o==null?0:o.length;return f?(l=l===n?1:Je(l),jt(o,l)):[]}function VE(o){for(var l=-1,f=o==null?0:o.length,E={};++l<f;){var I=o[l];E[I[0]]=I[1]}return E}function Gf(o){return o&&o.length?o[0]:n}function KE(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var I=f==null?0:Je(f);return I<0&&(I=Pt(E+I,0)),Di(o,l,I)}function XE(o){var l=o==null?0:o.length;return l?Wn(o,0,-1):[]}var qE=tt(function(o){var l=xt(o,_c);return l.length&&l[0]===o[0]?nc(l):[]}),ZE=tt(function(o){var l=zn(o),f=xt(o,_c);return l===zn(f)?l=n:f.pop(),f.length&&f[0]===o[0]?nc(f,$e(l,2)):[]}),QE=tt(function(o){var l=zn(o),f=xt(o,_c);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===o[0]?nc(f,n,l):[]});function JE(o,l){return o==null?"":Xm.call(o,l)}function zn(o){var l=o==null?0:o.length;return l?o[l-1]:n}function eC(o,l,f){var E=o==null?0:o.length;if(!E)return-1;var I=E;return f!==n&&(I=Je(f),I=I<0?Pt(E+I,0):Jt(I,E-1)),l===l?Dm(o,l,I):Us(o,g_,I,!0)}function tC(o,l){return o&&o.length?Y_(o,Je(l)):n}var nC=tt(Mf);function Mf(o,l){return o&&o.length&&l&&l.length?sc(o,l):o}function rC(o,l,f){return o&&o.length&&l&&l.length?sc(o,l,$e(f,2)):o}function iC(o,l,f){return o&&o.length&&l&&l.length?sc(o,l,n,f):o}var oC=Cr(function(o,l){var f=o==null?0:o.length,E=Ql(o,l);return K_(o,xt(l,function(I){return br(I,f)?+I:I}).sort(of)),E});function sC(o,l){var f=[];if(!(o&&o.length))return f;var E=-1,I=[],N=o.length;for(l=$e(l,3);++E<N;){var G=o[E];l(G,E,o)&&(f.push(G),I.push(E))}return K_(o,I),f}function yc(o){return o==null?o:Jm.call(o)}function aC(o,l,f){var E=o==null?0:o.length;return E?(f&&typeof f!="number"&&an(o,l,f)?(l=0,f=E):(l=l==null?0:Je(l),f=f===n?E:Je(f)),Wn(o,l,f)):[]}function lC(o,l){return ra(o,l)}function cC(o,l,f){return cc(o,l,$e(f,2))}function uC(o,l){var f=o==null?0:o.length;if(f){var E=ra(o,l);if(E<f&&er(o[E],l))return E}return-1}function dC(o,l){return ra(o,l,!0)}function _C(o,l,f){return cc(o,l,$e(f,2),!0)}function fC(o,l){var f=o==null?0:o.length;if(f){var E=ra(o,l,!0)-1;if(er(o[E],l))return E}return-1}function gC(o){return o&&o.length?q_(o):[]}function hC(o,l){return o&&o.length?q_(o,$e(l,2)):[]}function pC(o){var l=o==null?0:o.length;return l?Wn(o,1,l):[]}function vC(o,l,f){return o&&o.length?(l=f||l===n?1:Je(l),Wn(o,0,l<0?0:l)):[]}function mC(o,l,f){var E=o==null?0:o.length;return E?(l=f||l===n?1:Je(l),l=E-l,Wn(o,l<0?0:l,E)):[]}function EC(o,l){return o&&o.length?ia(o,$e(l,3),!1,!0):[]}function CC(o,l){return o&&o.length?ia(o,$e(l,3)):[]}var bC=tt(function(o){return Hr(jt(o,1,Gt,!0))}),OC=tt(function(o){var l=zn(o);return Gt(l)&&(l=n),Hr(jt(o,1,Gt,!0),$e(l,2))}),IC=tt(function(o){var l=zn(o);return l=typeof l=="function"?l:n,Hr(jt(o,1,Gt,!0),n,l)});function wC(o){return o&&o.length?Hr(o):[]}function LC(o,l){return o&&o.length?Hr(o,$e(l,2)):[]}function yC(o,l){return l=typeof l=="function"?l:n,o&&o.length?Hr(o,n,l):[]}function Ac(o){if(!(o&&o.length))return[];var l=0;return o=Ur(o,function(f){if(Gt(f))return l=Pt(f.length,l),!0}),zl(l,function(f){return xt(o,Bl(f))})}function Uf(o,l){if(!(o&&o.length))return[];var f=Ac(o);return l==null?f:xt(f,function(E){return In(l,n,E)})}var AC=tt(function(o,l){return Gt(o)?ko(o,l):[]}),NC=tt(function(o){return dc(Ur(o,Gt))}),SC=tt(function(o){var l=zn(o);return Gt(l)&&(l=n),dc(Ur(o,Gt),$e(l,2))}),xC=tt(function(o){var l=zn(o);return l=typeof l=="function"?l:n,dc(Ur(o,Gt),n,l)}),RC=tt(Ac);function TC(o,l){return ef(o||[],l||[],Do)}function DC(o,l){return ef(o||[],l||[],Uo)}var kC=tt(function(o){var l=o.length,f=l>1?o[l-1]:n;return f=typeof f=="function"?(o.pop(),f):n,Uf(o,f)});function Ff(o){var l=L(o);return l.__chain__=!0,l}function GC(o,l){return l(o),o}function fa(o,l){return l(o)}var MC=Cr(function(o){var l=o.length,f=l?o[0]:0,E=this.__wrapped__,I=function(N){return Ql(N,o)};return l>1||this.__actions__.length||!(E instanceof ot)||!br(f)?this.thru(I):(E=E.slice(f,+f+(l?1:0)),E.__actions__.push({func:fa,args:[I],thisArg:n}),new Bn(E,this.__chain__).thru(function(N){return l&&!N.length&&N.push(n),N}))});function UC(){return Ff(this)}function FC(){return new Bn(this.value(),this.__chain__)}function $C(){this.__values__===n&&(this.__values__=Qf(this.value()));var o=this.__index__>=this.__values__.length,l=o?n:this.__values__[this.__index__++];return{done:o,value:l}}function PC(){return this}function BC(o){for(var l,f=this;f instanceof Qs;){var E=Rf(f);E.__index__=0,E.__values__=n,l?I.__wrapped__=E:l=E;var I=E;f=f.__wrapped__}return I.__wrapped__=o,l}function HC(){var o=this.__wrapped__;if(o instanceof ot){var l=o;return this.__actions__.length&&(l=new ot(this)),l=l.reverse(),l.__actions__.push({func:fa,args:[yc],thisArg:n}),new Bn(l,this.__chain__)}return this.thru(yc)}function WC(){return J_(this.__wrapped__,this.__actions__)}var zC=oa(function(o,l,f){vt.call(o,f)?++o[f]:mr(o,f,1)});function YC(o,l,f){var E=Xe(o)?__:G1;return f&&an(o,l,f)&&(l=n),E(o,$e(l,3))}function jC(o,l){var f=Xe(o)?Ur:M_;return f(o,$e(l,3))}var VC=df(Tf),KC=df(Df);function XC(o,l){return jt(ga(o,l),1)}function qC(o,l){return jt(ga(o,l),Qe)}function ZC(o,l,f){return f=f===n?1:Je(f),jt(ga(o,l),f)}function $f(o,l){var f=Xe(o)?$n:Br;return f(o,$e(l,3))}function Pf(o,l){var f=Xe(o)?pm:G_;return f(o,$e(l,3))}var QC=oa(function(o,l,f){vt.call(o,f)?o[f].push(l):mr(o,f,[l])});function JC(o,l,f,E){o=hn(o)?o:Yi(o),f=f&&!E?Je(f):0;var I=o.length;return f<0&&(f=Pt(I+f,0)),Ea(o)?f<=I&&o.indexOf(l,f)>-1:!!I&&Di(o,l,f)>-1}var e0=tt(function(o,l,f){var E=-1,I=typeof l=="function",N=hn(o)?Q(o.length):[];return Br(o,function(G){N[++E]=I?In(l,G,f):Go(G,l,f)}),N}),t0=oa(function(o,l,f){mr(o,f,l)});function ga(o,l){var f=Xe(o)?xt:H_;return f(o,$e(l,3))}function n0(o,l,f,E){return o==null?[]:(Xe(l)||(l=l==null?[]:[l]),f=E?n:f,Xe(f)||(f=f==null?[]:[f]),j_(o,l,f))}var r0=oa(function(o,l,f){o[f?0:1].push(l)},function(){return[[],[]]});function i0(o,l,f){var E=Xe(o)?$l:p_,I=arguments.length<3;return E(o,$e(l,4),f,I,Br)}function o0(o,l,f){var E=Xe(o)?vm:p_,I=arguments.length<3;return E(o,$e(l,4),f,I,G_)}function s0(o,l){var f=Xe(o)?Ur:M_;return f(o,va($e(l,3)))}function a0(o){var l=Xe(o)?R_:J1;return l(o)}function l0(o,l,f){(f?an(o,l,f):l===n)?l=1:l=Je(l);var E=Xe(o)?x1:eE;return E(o,l)}function c0(o){var l=Xe(o)?R1:nE;return l(o)}function u0(o){if(o==null)return 0;if(hn(o))return Ea(o)?Gi(o):o.length;var l=en(o);return l==Ie||l==Zn?o.size:ic(o).length}function d0(o,l,f){var E=Xe(o)?Pl:rE;return f&&an(o,l,f)&&(l=n),E(o,$e(l,3))}var _0=tt(function(o,l){if(o==null)return[];var f=l.length;return f>1&&an(o,l[0],l[1])?l=[]:f>2&&an(l[0],l[1],l[2])&&(l=[l[0]]),j_(o,jt(l,1),[])}),ha=jm||function(){return Yt.Date.now()};function f0(o,l){if(typeof l!="function")throw new Pn(a);return o=Je(o),function(){if(--o<1)return l.apply(this,arguments)}}function Bf(o,l,f){return l=f?n:l,l=o&&l==null?o.length:l,Er(o,H,n,n,n,n,l)}function Hf(o,l){var f;if(typeof l!="function")throw new Pn(a);return o=Je(o),function(){return--o>0&&(f=l.apply(this,arguments)),o<=1&&(l=n),f}}var Nc=tt(function(o,l,f){var E=O;if(f.length){var I=$r(f,Wi(Nc));E|=z}return Er(o,E,l,f,I)}),Wf=tt(function(o,l,f){var E=O|w;if(f.length){var I=$r(f,Wi(Wf));E|=z}return Er(l,E,o,f,I)});function zf(o,l,f){l=f?n:l;var E=Er(o,k,n,n,n,n,n,l);return E.placeholder=zf.placeholder,E}function Yf(o,l,f){l=f?n:l;var E=Er(o,U,n,n,n,n,n,l);return E.placeholder=Yf.placeholder,E}function jf(o,l,f){var E,I,N,G,B,V,oe=0,le=!1,_e=!1,we=!0;if(typeof o!="function")throw new Pn(a);l=Yn(l)||0,Tt(f)&&(le=!!f.leading,_e="maxWait"in f,N=_e?Pt(Yn(f.maxWait)||0,l):N,we="trailing"in f?!!f.trailing:we);function Ge(Mt){var tr=E,wr=I;return E=I=n,oe=Mt,G=o.apply(wr,tr),G}function Pe(Mt){return oe=Mt,B=Po(rt,l),le?Ge(Mt):G}function et(Mt){var tr=Mt-V,wr=Mt-oe,dg=l-tr;return _e?Jt(dg,N-wr):dg}function Be(Mt){var tr=Mt-V,wr=Mt-oe;return V===n||tr>=l||tr<0||_e&&wr>=N}function rt(){var Mt=ha();if(Be(Mt))return ct(Mt);B=Po(rt,et(Mt))}function ct(Mt){return B=n,we&&E?Ge(Mt):(E=I=n,G)}function An(){B!==n&&tf(B),oe=0,E=V=I=B=n}function ln(){return B===n?G:ct(ha())}function Nn(){var Mt=ha(),tr=Be(Mt);if(E=arguments,I=this,V=Mt,tr){if(B===n)return Pe(V);if(_e)return tf(B),B=Po(rt,l),Ge(V)}return B===n&&(B=Po(rt,l)),G}return Nn.cancel=An,Nn.flush=ln,Nn}var g0=tt(function(o,l){return k_(o,1,l)}),h0=tt(function(o,l,f){return k_(o,Yn(l)||0,f)});function p0(o){return Er(o,ne)}function pa(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new Pn(a);var f=function(){var E=arguments,I=l?l.apply(this,E):E[0],N=f.cache;if(N.has(I))return N.get(I);var G=o.apply(this,E);return f.cache=N.set(I,G)||N,G};return f.cache=new(pa.Cache||vr),f}pa.Cache=vr;function va(o){if(typeof o!="function")throw new Pn(a);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function v0(o){return Hf(2,o)}var m0=iE(function(o,l){l=l.length==1&&Xe(l[0])?xt(l[0],wn($e())):xt(jt(l,1),wn($e()));var f=l.length;return tt(function(E){for(var I=-1,N=Jt(E.length,f);++I<N;)E[I]=l[I].call(this,E[I]);return In(o,this,E)})}),Sc=tt(function(o,l){var f=$r(l,Wi(Sc));return Er(o,z,n,l,f)}),Vf=tt(function(o,l){var f=$r(l,Wi(Vf));return Er(o,Y,n,l,f)}),E0=Cr(function(o,l){return Er(o,q,n,n,n,l)});function C0(o,l){if(typeof o!="function")throw new Pn(a);return l=l===n?l:Je(l),tt(o,l)}function b0(o,l){if(typeof o!="function")throw new Pn(a);return l=l==null?0:Pt(Je(l),0),tt(function(f){var E=f[l],I=zr(f,0,l);return E&&Fr(I,E),In(o,this,I)})}function O0(o,l,f){var E=!0,I=!0;if(typeof o!="function")throw new Pn(a);return Tt(f)&&(E="leading"in f?!!f.leading:E,I="trailing"in f?!!f.trailing:I),jf(o,l,{leading:E,maxWait:l,trailing:I})}function I0(o){return Bf(o,1)}function w0(o,l){return Sc(fc(l),o)}function L0(){if(!arguments.length)return[];var o=arguments[0];return Xe(o)?o:[o]}function y0(o){return Hn(o,m)}function A0(o,l){return l=typeof l=="function"?l:n,Hn(o,m,l)}function N0(o){return Hn(o,g|m)}function S0(o,l){return l=typeof l=="function"?l:n,Hn(o,g|m,l)}function x0(o,l){return l==null||D_(o,l,zt(l))}function er(o,l){return o===l||o!==o&&l!==l}var R0=ca(tc),T0=ca(function(o,l){return o>=l}),pi=$_(function(){return arguments}())?$_:function(o){return kt(o)&&vt.call(o,"callee")&&!L_.call(o,"callee")},Xe=Q.isArray,D0=s_?wn(s_):B1;function hn(o){return o!=null&&ma(o.length)&&!Or(o)}function Gt(o){return kt(o)&&hn(o)}function k0(o){return o===!0||o===!1||kt(o)&&sn(o)==rr}var Yr=Km||Pc,G0=a_?wn(a_):H1;function M0(o){return kt(o)&&o.nodeType===1&&!Bo(o)}function U0(o){if(o==null)return!0;if(hn(o)&&(Xe(o)||typeof o=="string"||typeof o.splice=="function"||Yr(o)||zi(o)||pi(o)))return!o.length;var l=en(o);if(l==Ie||l==Zn)return!o.size;if($o(o))return!ic(o).length;for(var f in o)if(vt.call(o,f))return!1;return!0}function F0(o,l){return Mo(o,l)}function $0(o,l,f){f=typeof f=="function"?f:n;var E=f?f(o,l):n;return E===n?Mo(o,l,n,f):!!E}function xc(o){if(!kt(o))return!1;var l=sn(o);return l==Mr||l==xi||typeof o.message=="string"&&typeof o.name=="string"&&!Bo(o)}function P0(o){return typeof o=="number"&&A_(o)}function Or(o){if(!Tt(o))return!1;var l=sn(o);return l==Dt||l==De||l==si||l==El}function Kf(o){return typeof o=="number"&&o==Je(o)}function ma(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=Se}function Tt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function kt(o){return o!=null&&typeof o=="object"}var Xf=l_?wn(l_):z1;function B0(o,l){return o===l||rc(o,l,Cc(l))}function H0(o,l,f){return f=typeof f=="function"?f:n,rc(o,l,Cc(l),f)}function W0(o){return qf(o)&&o!=+o}function z0(o){if(AE(o))throw new je(s);return P_(o)}function Y0(o){return o===null}function j0(o){return o==null}function qf(o){return typeof o=="number"||kt(o)&&sn(o)==ke}function Bo(o){if(!kt(o)||sn(o)!=At)return!1;var l=Ys(o);if(l===null)return!0;var f=vt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&Bs.call(f)==Hm}var Rc=c_?wn(c_):Y1;function V0(o){return Kf(o)&&o>=-9007199254740991&&o<=Se}var Zf=u_?wn(u_):j1;function Ea(o){return typeof o=="string"||!Xe(o)&&kt(o)&&sn(o)==wo}function yn(o){return typeof o=="symbol"||kt(o)&&sn(o)==Ts}var zi=d_?wn(d_):V1;function K0(o){return o===n}function X0(o){return kt(o)&&en(o)==Lo}function q0(o){return kt(o)&&sn(o)==_v}var Z0=ca(oc),Q0=ca(function(o,l){return o<=l});function Qf(o){if(!o)return[];if(hn(o))return Ea(o)?Qn(o):gn(o);if(No&&o[No])return xm(o[No]());var l=en(o),f=l==Ie?jl:l==Zn?Fs:Yi;return f(o)}function Ir(o){if(!o)return o===0?o:0;if(o=Yn(o),o===Qe||o===-1/0){var l=o<0?-1:1;return l*ye}return o===o?o:0}function Je(o){var l=Ir(o),f=l%1;return l===l?f?l-f:l:0}function Jf(o){return o?_i(Je(o),0,Ye):0}function Yn(o){if(typeof o=="number")return o;if(yn(o))return lt;if(Tt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Tt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=v_(o);var f=Dv.test(o);return f||Gv.test(o)?fm(o.slice(2),f?2:8):Tv.test(o)?lt:+o}function eg(o){return or(o,pn(o))}function J0(o){return o?_i(Je(o),-9007199254740991,Se):o===0?o:0}function ht(o){return o==null?"":Ln(o)}var eb=Bi(function(o,l){if($o(l)||hn(l)){or(l,zt(l),o);return}for(var f in l)vt.call(l,f)&&Do(o,f,l[f])}),tg=Bi(function(o,l){or(l,pn(l),o)}),Ca=Bi(function(o,l,f,E){or(l,pn(l),o,E)}),tb=Bi(function(o,l,f,E){or(l,zt(l),o,E)}),nb=Cr(Ql);function rb(o,l){var f=Pi(o);return l==null?f:T_(f,l)}var ib=tt(function(o,l){o=bt(o);var f=-1,E=l.length,I=E>2?l[2]:n;for(I&&an(l[0],l[1],I)&&(E=1);++f<E;)for(var N=l[f],G=pn(N),B=-1,V=G.length;++B<V;){var oe=G[B],le=o[oe];(le===n||er(le,Ui[oe])&&!vt.call(o,oe))&&(o[oe]=N[oe])}return o}),ob=tt(function(o){return o.push(n,mf),In(ng,n,o)});function sb(o,l){return f_(o,$e(l,3),ir)}function ab(o,l){return f_(o,$e(l,3),ec)}function lb(o,l){return o==null?o:Jl(o,$e(l,3),pn)}function cb(o,l){return o==null?o:U_(o,$e(l,3),pn)}function ub(o,l){return o&&ir(o,$e(l,3))}function db(o,l){return o&&ec(o,$e(l,3))}function _b(o){return o==null?[]:ta(o,zt(o))}function fb(o){return o==null?[]:ta(o,pn(o))}function Tc(o,l,f){var E=o==null?n:fi(o,l);return E===n?f:E}function gb(o,l){return o!=null&&bf(o,l,U1)}function Dc(o,l){return o!=null&&bf(o,l,F1)}var hb=ff(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Hs.call(l)),o[l]=f},Gc(vn)),pb=ff(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Hs.call(l)),vt.call(o,l)?o[l].push(f):o[l]=[f]},$e),vb=tt(Go);function zt(o){return hn(o)?x_(o):ic(o)}function pn(o){return hn(o)?x_(o,!0):K1(o)}function mb(o,l){var f={};return l=$e(l,3),ir(o,function(E,I,N){mr(f,l(E,I,N),E)}),f}function Eb(o,l){var f={};return l=$e(l,3),ir(o,function(E,I,N){mr(f,I,l(E,I,N))}),f}var Cb=Bi(function(o,l,f){na(o,l,f)}),ng=Bi(function(o,l,f,E){na(o,l,f,E)}),bb=Cr(function(o,l){var f={};if(o==null)return f;var E=!1;l=xt(l,function(N){return N=Wr(N,o),E||(E=N.length>1),N}),or(o,mc(o),f),E&&(f=Hn(f,g|p|m,hE));for(var I=l.length;I--;)uc(f,l[I]);return f});function Ob(o,l){return rg(o,va($e(l)))}var Ib=Cr(function(o,l){return o==null?{}:q1(o,l)});function rg(o,l){if(o==null)return{};var f=xt(mc(o),function(E){return[E]});return l=$e(l),V_(o,f,function(E,I){return l(E,I[0])})}function wb(o,l,f){l=Wr(l,o);var E=-1,I=l.length;for(I||(I=1,o=n);++E<I;){var N=o==null?n:o[sr(l[E])];N===n&&(E=I,N=f),o=Or(N)?N.call(o):N}return o}function Lb(o,l,f){return o==null?o:Uo(o,l,f)}function yb(o,l,f,E){return E=typeof E=="function"?E:n,o==null?o:Uo(o,l,f,E)}var ig=pf(zt),og=pf(pn);function Ab(o,l,f){var E=Xe(o),I=E||Yr(o)||zi(o);if(l=$e(l,4),f==null){var N=o&&o.constructor;I?f=E?new N:[]:Tt(o)?f=Or(N)?Pi(Ys(o)):{}:f={}}return(I?$n:ir)(o,function(G,B,V){return l(f,G,B,V)}),f}function Nb(o,l){return o==null?!0:uc(o,l)}function Sb(o,l,f){return o==null?o:Q_(o,l,fc(f))}function xb(o,l,f,E){return E=typeof E=="function"?E:n,o==null?o:Q_(o,l,fc(f),E)}function Yi(o){return o==null?[]:Yl(o,zt(o))}function Rb(o){return o==null?[]:Yl(o,pn(o))}function Tb(o,l,f){return f===n&&(f=l,l=n),f!==n&&(f=Yn(f),f=f===f?f:0),l!==n&&(l=Yn(l),l=l===l?l:0),_i(Yn(o),l,f)}function Db(o,l,f){return l=Ir(l),f===n?(f=l,l=0):f=Ir(f),o=Yn(o),$1(o,l,f)}function kb(o,l,f){if(f&&typeof f!="boolean"&&an(o,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof o=="boolean"&&(f=o,o=n)),o===n&&l===n?(o=0,l=1):(o=Ir(o),l===n?(l=o,o=0):l=Ir(l)),o>l){var E=o;o=l,l=E}if(f||o%1||l%1){var I=N_();return Jt(o+I*(l-o+_m("1e-"+((I+"").length-1))),l)}return ac(o,l)}var Gb=Hi(function(o,l,f){return l=l.toLowerCase(),o+(f?sg(l):l)});function sg(o){return kc(ht(o).toLowerCase())}function ag(o){return o=ht(o),o&&o.replace(Uv,Lm).replace(nm,"")}function Mb(o,l,f){o=ht(o),l=Ln(l);var E=o.length;f=f===n?E:_i(Je(f),0,E);var I=f;return f-=l.length,f>=0&&o.slice(f,I)==l}function Ub(o){return o=ht(o),o&&vv.test(o)?o.replace(Ud,ym):o}function Fb(o){return o=ht(o),o&&Iv.test(o)?o.replace(Sl,"\\$&"):o}var $b=Hi(function(o,l,f){return o+(f?"-":"")+l.toLowerCase()}),Pb=Hi(function(o,l,f){return o+(f?" ":"")+l.toLowerCase()}),Bb=uf("toLowerCase");function Hb(o,l,f){o=ht(o),l=Je(l);var E=l?Gi(o):0;if(!l||E>=l)return o;var I=(l-E)/2;return la(Xs(I),f)+o+la(Ks(I),f)}function Wb(o,l,f){o=ht(o),l=Je(l);var E=l?Gi(o):0;return l&&E<l?o+la(l-E,f):o}function zb(o,l,f){o=ht(o),l=Je(l);var E=l?Gi(o):0;return l&&E<l?la(l-E,f)+o:o}function Yb(o,l,f){return f||l==null?l=0:l&&(l=+l),Qm(ht(o).replace(xl,""),l||0)}function jb(o,l,f){return(f?an(o,l,f):l===n)?l=1:l=Je(l),lc(ht(o),l)}function Vb(){var o=arguments,l=ht(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var Kb=Hi(function(o,l,f){return o+(f?"_":"")+l.toLowerCase()});function Xb(o,l,f){return f&&typeof f!="number"&&an(o,l,f)&&(l=f=n),f=f===n?Ye:f>>>0,f?(o=ht(o),o&&(typeof l=="string"||l!=null&&!Rc(l))&&(l=Ln(l),!l&&ki(o))?zr(Qn(o),0,f):o.split(l,f)):[]}var qb=Hi(function(o,l,f){return o+(f?" ":"")+kc(l)});function Zb(o,l,f){return o=ht(o),f=f==null?0:_i(Je(f),0,o.length),l=Ln(l),o.slice(f,f+l.length)==l}function Qb(o,l,f){var E=L.templateSettings;f&&an(o,l,f)&&(l=n),o=ht(o),l=Ca({},l,E,vf);var I=Ca({},l.imports,E.imports,vf),N=zt(I),G=Yl(I,N),B,V,oe=0,le=l.interpolate||Ds,_e="__p += '",we=Vl((l.escape||Ds).source+"|"+le.source+"|"+(le===Fd?Rv:Ds).source+"|"+(l.evaluate||Ds).source+"|$","g"),Ge="//# sourceURL="+(vt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++am+"]")+`
`;o.replace(we,function(Be,rt,ct,An,ln,Nn){return ct||(ct=An),_e+=o.slice(oe,Nn).replace(Fv,Am),rt&&(B=!0,_e+=`' +
__e(`+rt+`) +
'`),ln&&(V=!0,_e+=`';
`+ln+`;
__p += '`),ct&&(_e+=`' +
((__t = (`+ct+`)) == null ? '' : __t) +
'`),oe=Nn+Be.length,Be}),_e+=`';
`;var Pe=vt.call(l,"variable")&&l.variable;if(!Pe)_e=`with (obj) {
`+_e+`
}
`;else if(Sv.test(Pe))throw new je(c);_e=(V?_e.replace(fv,""):_e).replace(gv,"$1").replace(hv,"$1;"),_e="function("+(Pe||"obj")+`) {
`+(Pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var et=cg(function(){return gt(N,Ge+"return "+_e).apply(n,G)});if(et.source=_e,xc(et))throw et;return et}function Jb(o){return ht(o).toLowerCase()}function eO(o){return ht(o).toUpperCase()}function tO(o,l,f){if(o=ht(o),o&&(f||l===n))return v_(o);if(!o||!(l=Ln(l)))return o;var E=Qn(o),I=Qn(l),N=m_(E,I),G=E_(E,I)+1;return zr(E,N,G).join("")}function nO(o,l,f){if(o=ht(o),o&&(f||l===n))return o.slice(0,b_(o)+1);if(!o||!(l=Ln(l)))return o;var E=Qn(o),I=E_(E,Qn(l))+1;return zr(E,0,I).join("")}function rO(o,l,f){if(o=ht(o),o&&(f||l===n))return o.replace(xl,"");if(!o||!(l=Ln(l)))return o;var E=Qn(o),I=m_(E,Qn(l));return zr(E,I).join("")}function iO(o,l){var f=ce,E=ee;if(Tt(l)){var I="separator"in l?l.separator:I;f="length"in l?Je(l.length):f,E="omission"in l?Ln(l.omission):E}o=ht(o);var N=o.length;if(ki(o)){var G=Qn(o);N=G.length}if(f>=N)return o;var B=f-Gi(E);if(B<1)return E;var V=G?zr(G,0,B).join(""):o.slice(0,B);if(I===n)return V+E;if(G&&(B+=V.length-B),Rc(I)){if(o.slice(B).search(I)){var oe,le=V;for(I.global||(I=Vl(I.source,ht($d.exec(I))+"g")),I.lastIndex=0;oe=I.exec(le);)var _e=oe.index;V=V.slice(0,_e===n?B:_e)}}else if(o.indexOf(Ln(I),B)!=B){var we=V.lastIndexOf(I);we>-1&&(V=V.slice(0,we))}return V+E}function oO(o){return o=ht(o),o&&pv.test(o)?o.replace(Md,km):o}var sO=Hi(function(o,l,f){return o+(f?" ":"")+l.toUpperCase()}),kc=uf("toUpperCase");function lg(o,l,f){return o=ht(o),l=f?n:l,l===n?Sm(o)?Um(o):Cm(o):o.match(l)||[]}var cg=tt(function(o,l){try{return In(o,n,l)}catch(f){return xc(f)?f:new je(f)}}),aO=Cr(function(o,l){return $n(l,function(f){f=sr(f),mr(o,f,Nc(o[f],o))}),o});function lO(o){var l=o==null?0:o.length,f=$e();return o=l?xt(o,function(E){if(typeof E[1]!="function")throw new Pn(a);return[f(E[0]),E[1]]}):[],tt(function(E){for(var I=-1;++I<l;){var N=o[I];if(In(N[0],this,E))return In(N[1],this,E)}})}function cO(o){return k1(Hn(o,g))}function Gc(o){return function(){return o}}function uO(o,l){return o==null||o!==o?l:o}var dO=_f(),_O=_f(!0);function vn(o){return o}function Mc(o){return B_(typeof o=="function"?o:Hn(o,g))}function fO(o){return W_(Hn(o,g))}function gO(o,l){return z_(o,Hn(l,g))}var hO=tt(function(o,l){return function(f){return Go(f,o,l)}}),pO=tt(function(o,l){return function(f){return Go(o,f,l)}});function Uc(o,l,f){var E=zt(l),I=ta(l,E);f==null&&!(Tt(l)&&(I.length||!E.length))&&(f=l,l=o,o=this,I=ta(l,zt(l)));var N=!(Tt(f)&&"chain"in f)||!!f.chain,G=Or(o);return $n(I,function(B){var V=l[B];o[B]=V,G&&(o.prototype[B]=function(){var oe=this.__chain__;if(N||oe){var le=o(this.__wrapped__),_e=le.__actions__=gn(this.__actions__);return _e.push({func:V,args:arguments,thisArg:o}),le.__chain__=oe,le}return V.apply(o,Fr([this.value()],arguments))})}),o}function vO(){return Yt._===this&&(Yt._=Wm),this}function Fc(){}function mO(o){return o=Je(o),tt(function(l){return Y_(l,o)})}var EO=hc(xt),CO=hc(__),bO=hc(Pl);function ug(o){return Oc(o)?Bl(sr(o)):Z1(o)}function OO(o){return function(l){return o==null?n:fi(o,l)}}var IO=gf(),wO=gf(!0);function $c(){return[]}function Pc(){return!1}function LO(){return{}}function yO(){return""}function AO(){return!0}function NO(o,l){if(o=Je(o),o<1||o>Se)return[];var f=Ye,E=Jt(o,Ye);l=$e(l),o-=Ye;for(var I=zl(E,l);++f<o;)l(f);return I}function SO(o){return Xe(o)?xt(o,sr):yn(o)?[o]:gn(xf(ht(o)))}function xO(o){var l=++Bm;return ht(o)+l}var RO=aa(function(o,l){return o+l},0),TO=pc("ceil"),DO=aa(function(o,l){return o/l},1),kO=pc("floor");function GO(o){return o&&o.length?ea(o,vn,tc):n}function MO(o,l){return o&&o.length?ea(o,$e(l,2),tc):n}function UO(o){return h_(o,vn)}function FO(o,l){return h_(o,$e(l,2))}function $O(o){return o&&o.length?ea(o,vn,oc):n}function PO(o,l){return o&&o.length?ea(o,$e(l,2),oc):n}var BO=aa(function(o,l){return o*l},1),HO=pc("round"),WO=aa(function(o,l){return o-l},0);function zO(o){return o&&o.length?Wl(o,vn):0}function YO(o,l){return o&&o.length?Wl(o,$e(l,2)):0}return L.after=f0,L.ary=Bf,L.assign=eb,L.assignIn=tg,L.assignInWith=Ca,L.assignWith=tb,L.at=nb,L.before=Hf,L.bind=Nc,L.bindAll=aO,L.bindKey=Wf,L.castArray=L0,L.chain=Ff,L.chunk=kE,L.compact=GE,L.concat=ME,L.cond=lO,L.conforms=cO,L.constant=Gc,L.countBy=zC,L.create=rb,L.curry=zf,L.curryRight=Yf,L.debounce=jf,L.defaults=ib,L.defaultsDeep=ob,L.defer=g0,L.delay=h0,L.difference=UE,L.differenceBy=FE,L.differenceWith=$E,L.drop=PE,L.dropRight=BE,L.dropRightWhile=HE,L.dropWhile=WE,L.fill=zE,L.filter=jC,L.flatMap=XC,L.flatMapDeep=qC,L.flatMapDepth=ZC,L.flatten=kf,L.flattenDeep=YE,L.flattenDepth=jE,L.flip=p0,L.flow=dO,L.flowRight=_O,L.fromPairs=VE,L.functions=_b,L.functionsIn=fb,L.groupBy=QC,L.initial=XE,L.intersection=qE,L.intersectionBy=ZE,L.intersectionWith=QE,L.invert=hb,L.invertBy=pb,L.invokeMap=e0,L.iteratee=Mc,L.keyBy=t0,L.keys=zt,L.keysIn=pn,L.map=ga,L.mapKeys=mb,L.mapValues=Eb,L.matches=fO,L.matchesProperty=gO,L.memoize=pa,L.merge=Cb,L.mergeWith=ng,L.method=hO,L.methodOf=pO,L.mixin=Uc,L.negate=va,L.nthArg=mO,L.omit=bb,L.omitBy=Ob,L.once=v0,L.orderBy=n0,L.over=EO,L.overArgs=m0,L.overEvery=CO,L.overSome=bO,L.partial=Sc,L.partialRight=Vf,L.partition=r0,L.pick=Ib,L.pickBy=rg,L.property=ug,L.propertyOf=OO,L.pull=nC,L.pullAll=Mf,L.pullAllBy=rC,L.pullAllWith=iC,L.pullAt=oC,L.range=IO,L.rangeRight=wO,L.rearg=E0,L.reject=s0,L.remove=sC,L.rest=C0,L.reverse=yc,L.sampleSize=l0,L.set=Lb,L.setWith=yb,L.shuffle=c0,L.slice=aC,L.sortBy=_0,L.sortedUniq=gC,L.sortedUniqBy=hC,L.split=Xb,L.spread=b0,L.tail=pC,L.take=vC,L.takeRight=mC,L.takeRightWhile=EC,L.takeWhile=CC,L.tap=GC,L.throttle=O0,L.thru=fa,L.toArray=Qf,L.toPairs=ig,L.toPairsIn=og,L.toPath=SO,L.toPlainObject=eg,L.transform=Ab,L.unary=I0,L.union=bC,L.unionBy=OC,L.unionWith=IC,L.uniq=wC,L.uniqBy=LC,L.uniqWith=yC,L.unset=Nb,L.unzip=Ac,L.unzipWith=Uf,L.update=Sb,L.updateWith=xb,L.values=Yi,L.valuesIn=Rb,L.without=AC,L.words=lg,L.wrap=w0,L.xor=NC,L.xorBy=SC,L.xorWith=xC,L.zip=RC,L.zipObject=TC,L.zipObjectDeep=DC,L.zipWith=kC,L.entries=ig,L.entriesIn=og,L.extend=tg,L.extendWith=Ca,Uc(L,L),L.add=RO,L.attempt=cg,L.camelCase=Gb,L.capitalize=sg,L.ceil=TO,L.clamp=Tb,L.clone=y0,L.cloneDeep=N0,L.cloneDeepWith=S0,L.cloneWith=A0,L.conformsTo=x0,L.deburr=ag,L.defaultTo=uO,L.divide=DO,L.endsWith=Mb,L.eq=er,L.escape=Ub,L.escapeRegExp=Fb,L.every=YC,L.find=VC,L.findIndex=Tf,L.findKey=sb,L.findLast=KC,L.findLastIndex=Df,L.findLastKey=ab,L.floor=kO,L.forEach=$f,L.forEachRight=Pf,L.forIn=lb,L.forInRight=cb,L.forOwn=ub,L.forOwnRight=db,L.get=Tc,L.gt=R0,L.gte=T0,L.has=gb,L.hasIn=Dc,L.head=Gf,L.identity=vn,L.includes=JC,L.indexOf=KE,L.inRange=Db,L.invoke=vb,L.isArguments=pi,L.isArray=Xe,L.isArrayBuffer=D0,L.isArrayLike=hn,L.isArrayLikeObject=Gt,L.isBoolean=k0,L.isBuffer=Yr,L.isDate=G0,L.isElement=M0,L.isEmpty=U0,L.isEqual=F0,L.isEqualWith=$0,L.isError=xc,L.isFinite=P0,L.isFunction=Or,L.isInteger=Kf,L.isLength=ma,L.isMap=Xf,L.isMatch=B0,L.isMatchWith=H0,L.isNaN=W0,L.isNative=z0,L.isNil=j0,L.isNull=Y0,L.isNumber=qf,L.isObject=Tt,L.isObjectLike=kt,L.isPlainObject=Bo,L.isRegExp=Rc,L.isSafeInteger=V0,L.isSet=Zf,L.isString=Ea,L.isSymbol=yn,L.isTypedArray=zi,L.isUndefined=K0,L.isWeakMap=X0,L.isWeakSet=q0,L.join=JE,L.kebabCase=$b,L.last=zn,L.lastIndexOf=eC,L.lowerCase=Pb,L.lowerFirst=Bb,L.lt=Z0,L.lte=Q0,L.max=GO,L.maxBy=MO,L.mean=UO,L.meanBy=FO,L.min=$O,L.minBy=PO,L.stubArray=$c,L.stubFalse=Pc,L.stubObject=LO,L.stubString=yO,L.stubTrue=AO,L.multiply=BO,L.nth=tC,L.noConflict=vO,L.noop=Fc,L.now=ha,L.pad=Hb,L.padEnd=Wb,L.padStart=zb,L.parseInt=Yb,L.random=kb,L.reduce=i0,L.reduceRight=o0,L.repeat=jb,L.replace=Vb,L.result=wb,L.round=HO,L.runInContext=j,L.sample=a0,L.size=u0,L.snakeCase=Kb,L.some=d0,L.sortedIndex=lC,L.sortedIndexBy=cC,L.sortedIndexOf=uC,L.sortedLastIndex=dC,L.sortedLastIndexBy=_C,L.sortedLastIndexOf=fC,L.startCase=qb,L.startsWith=Zb,L.subtract=WO,L.sum=zO,L.sumBy=YO,L.template=Qb,L.times=NO,L.toFinite=Ir,L.toInteger=Je,L.toLength=Jf,L.toLower=Jb,L.toNumber=Yn,L.toSafeInteger=J0,L.toString=ht,L.toUpper=eO,L.trim=tO,L.trimEnd=nO,L.trimStart=rO,L.truncate=iO,L.unescape=oO,L.uniqueId=xO,L.upperCase=sO,L.upperFirst=kc,L.each=$f,L.eachRight=Pf,L.first=Gf,Uc(L,function(){var o={};return ir(L,function(l,f){vt.call(L.prototype,f)||(o[f]=l)}),o}(),{chain:!1}),L.VERSION=r,$n(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){L[o].placeholder=L}),$n(["drop","take"],function(o,l){ot.prototype[o]=function(f){f=f===n?1:Pt(Je(f),0);var E=this.__filtered__&&!l?new ot(this):this.clone();return E.__filtered__?E.__takeCount__=Jt(f,E.__takeCount__):E.__views__.push({size:Jt(f,Ye),type:o+(E.__dir__<0?"Right":"")}),E},ot.prototype[o+"Right"]=function(f){return this.reverse()[o](f).reverse()}}),$n(["filter","map","takeWhile"],function(o,l){var f=l+1,E=f==Ce||f==xe;ot.prototype[o]=function(I){var N=this.clone();return N.__iteratees__.push({iteratee:$e(I,3),type:f}),N.__filtered__=N.__filtered__||E,N}}),$n(["head","last"],function(o,l){var f="take"+(l?"Right":"");ot.prototype[o]=function(){return this[f](1).value()[0]}}),$n(["initial","tail"],function(o,l){var f="drop"+(l?"":"Right");ot.prototype[o]=function(){return this.__filtered__?new ot(this):this[f](1)}}),ot.prototype.compact=function(){return this.filter(vn)},ot.prototype.find=function(o){return this.filter(o).head()},ot.prototype.findLast=function(o){return this.reverse().find(o)},ot.prototype.invokeMap=tt(function(o,l){return typeof o=="function"?new ot(this):this.map(function(f){return Go(f,o,l)})}),ot.prototype.reject=function(o){return this.filter(va($e(o)))},ot.prototype.slice=function(o,l){o=Je(o);var f=this;return f.__filtered__&&(o>0||l<0)?new ot(f):(o<0?f=f.takeRight(-o):o&&(f=f.drop(o)),l!==n&&(l=Je(l),f=l<0?f.dropRight(-l):f.take(l-o)),f)},ot.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},ot.prototype.toArray=function(){return this.take(Ye)},ir(ot.prototype,function(o,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),E=/^(?:head|last)$/.test(l),I=L[E?"take"+(l=="last"?"Right":""):l],N=E||/^find/.test(l);I&&(L.prototype[l]=function(){var G=this.__wrapped__,B=E?[1]:arguments,V=G instanceof ot,oe=B[0],le=V||Xe(G),_e=function(rt){var ct=I.apply(L,Fr([rt],B));return E&&we?ct[0]:ct};le&&f&&typeof oe=="function"&&oe.length!=1&&(V=le=!1);var we=this.__chain__,Ge=!!this.__actions__.length,Pe=N&&!we,et=V&&!Ge;if(!N&&le){G=et?G:new ot(this);var Be=o.apply(G,B);return Be.__actions__.push({func:fa,args:[_e],thisArg:n}),new Bn(Be,we)}return Pe&&et?o.apply(this,B):(Be=this.thru(_e),Pe?E?Be.value()[0]:Be.value():Be)})}),$n(["pop","push","shift","sort","splice","unshift"],function(o){var l=$s[o],f=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",E=/^(?:pop|shift)$/.test(o);L.prototype[o]=function(){var I=arguments;if(E&&!this.__chain__){var N=this.value();return l.apply(Xe(N)?N:[],I)}return this[f](function(G){return l.apply(Xe(G)?G:[],I)})}}),ir(ot.prototype,function(o,l){var f=L[l];if(f){var E=f.name+"";vt.call($i,E)||($i[E]=[]),$i[E].push({name:l,func:f})}}),$i[sa(n,w).name]=[{name:"wrapper",func:n}],ot.prototype.clone=o1,ot.prototype.reverse=s1,ot.prototype.value=a1,L.prototype.at=MC,L.prototype.chain=UC,L.prototype.commit=FC,L.prototype.next=$C,L.prototype.plant=BC,L.prototype.reverse=HC,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=WC,L.prototype.first=L.prototype.head,No&&(L.prototype[No]=PC),L},Mi=Fm();li?((li.exports=Mi)._=Mi,Ml._=Mi):Yt._=Mi}).call(lx)}(Vo,Vo.exports)),Vo.exports}var St=cx();function yr(t){return Array.isArray?Array.isArray(t):Vh(t)==="[object Array]"}function ux(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function dx(t){return t==null?"":ux(t)}function cr(t){return typeof t=="string"}function Yh(t){return typeof t=="number"}function _x(t){return t===!0||t===!1||fx(t)&&Vh(t)=="[object Boolean]"}function jh(t){return typeof t=="object"}function fx(t){return jh(t)&&t!==null}function Rn(t){return t!=null}function jc(t){return!t.trim().length}function Vh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const gx="Incorrect 'index' type",hx=t=>`Invalid value for key ${t}`,px=t=>`Pattern length exceeds max of ${t}.`,vx=t=>`Missing ${t} property in key`,mx=t=>`Property 'weight' in key '${t}' must be a positive integer`,mg=Object.prototype.hasOwnProperty;class Ex{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Kh(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Kh(t){let e=null,n=null,r=null,i=1,s=null;if(cr(t)||yr(t))r=t,e=Eg(t),n=au(t);else{if(!mg.call(t,"name"))throw new Error(vx("name"));const a=t.name;if(r=a,mg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(mx(a));e=Eg(a),n=au(a),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Eg(t){return yr(t)?t:t.split(".")}function au(t){return yr(t)?t.join("."):t}function Cx(t,e){let n=[],r=!1;const i=(s,a,c)=>{if(Rn(s))if(!a[c])n.push(s);else{let u=a[c];const _=s[u];if(!Rn(_))return;if(c===a.length-1&&(cr(_)||Yh(_)||_x(_)))n.push(dx(_));else if(yr(_)){r=!0;for(let v=0,g=_.length;v<g;v+=1)i(_[v],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,cr(e)?e.split("."):e,0),r?n:n[0]}const bx={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ox={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Ix={location:0,threshold:.6,distance:100},wx={useExtendedSearch:!1,getFn:Cx,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ze={...Ox,...bx,...Ix,...wx};const Lx=/[^ ]+/g;function yx(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(Lx).length;if(n.has(s))return n.get(s);const a=1/Math.pow(s,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(s,c),c},clear(){n.clear()}}}class od{constructor({getFn:e=ze.getFn,fieldNormWeight:n=ze.fieldNormWeight}={}){this.norm=yx(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,cr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();cr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Rn(e)||jc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Rn(a)){if(yr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:v}=u.pop();if(Rn(v))if(cr(v)&&!jc(v)){let g={v,i:_,n:this.norm.get(v)};c.push(g)}else yr(v)&&v.forEach((g,p)=>{u.push({nestedArrIndex:p,value:g})})}r.$[s]=c}else if(cr(a)&&!jc(a)){let c={v:a,n:this.norm.get(a)};r.$[s]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Xh(t,e,{getFn:n=ze.getFn,fieldNormWeight:r=ze.fieldNormWeight}={}){const i=new od({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Kh)),i.setSources(e),i.create(),i}function Ax(t,{getFn:e=ze.getFn,fieldNormWeight:n=ze.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new od({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function Ia(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=ze.distance,ignoreLocation:s=ze.ignoreLocation}={}){const a=e/t.length;if(s)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function Nx(t=[],e=ze.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let a=t.length;s<a;s+=1){let c=t[s];c&&r===-1?r=s:!c&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const mi=32;function Sx(t,e,n,{location:r=ze.location,distance:i=ze.distance,threshold:s=ze.threshold,findAllMatches:a=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,includeMatches:u=ze.includeMatches,ignoreLocation:_=ze.ignoreLocation}={}){if(e.length>mi)throw new Error(px(mi));const v=e.length,g=t.length,p=Math.max(0,Math.min(r,g));let m=s,C=p;const b=c>1||u,O=b?Array(g):[];let w;for(;(w=t.indexOf(e,C))>-1;){let H=Ia(e,{currentLocation:w,expectedLocation:p,distance:i,ignoreLocation:_});if(m=Math.min(H,m),C=w+v,b){let q=0;for(;q<v;)O[w+q]=1,q+=1}}C=-1;let x=[],k=1,U=v+g;const z=1<<v-1;for(let H=0;H<v;H+=1){let q=0,ne=U;for(;q<ne;)Ia(e,{errors:H,currentLocation:p+ne,expectedLocation:p,distance:i,ignoreLocation:_})<=m?q=ne:U=ne,ne=Math.floor((U-q)/2+q);U=ne;let ce=Math.max(1,p-ne+1),ee=a?g:Math.min(p+ne,g)+v,ie=Array(ee+2);ie[ee+1]=(1<<H)-1;for(let Ce=ee;Ce>=ce;Ce-=1){let fe=Ce-1,xe=n[t.charAt(fe)];if(b&&(O[fe]=+!!xe),ie[Ce]=(ie[Ce+1]<<1|1)&xe,H&&(ie[Ce]|=(x[Ce+1]|x[Ce])<<1|1|x[Ce+1]),ie[Ce]&z&&(k=Ia(e,{errors:H,currentLocation:fe,expectedLocation:p,distance:i,ignoreLocation:_}),k<=m)){if(m=k,C=fe,C<=p)break;ce=Math.max(1,2*p-C)}}if(Ia(e,{errors:H+1,currentLocation:p,expectedLocation:p,distance:i,ignoreLocation:_})>m)break;x=ie}const Y={isMatch:C>=0,score:Math.max(.001,k)};if(b){const H=Nx(O,c);H.length?u&&(Y.indices=H):Y.isMatch=!1}return Y}function xx(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class qh{constructor(e,{location:n=ze.location,threshold:r=ze.threshold,distance:i=ze.distance,includeMatches:s=ze.includeMatches,findAllMatches:a=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,isCaseSensitive:u=ze.isCaseSensitive,ignoreLocation:_=ze.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(p,m)=>{this.chunks.push({pattern:p,alphabet:xx(p),startIndex:m})},g=this.pattern.length;if(g>mi){let p=0;const m=g%mi,C=g-m;for(;p<C;)v(this.pattern.substr(p,mi),p),p+=mi;if(m){const b=g-mi;v(this.pattern.substr(b),b)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let C={isMatch:!0,score:0};return r&&(C.indices=[[0,e.length-1]]),C}const{location:i,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let v=[],g=0,p=!1;this.chunks.forEach(({pattern:C,alphabet:b,startIndex:O})=>{const{isMatch:w,score:x,indices:k}=Sx(e,C,b,{location:i+O,distance:s,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(p=!0),g+=x,w&&k&&(v=[...v,...k])});let m={isMatch:p,score:p?g/this.chunks.length:1};return p&&r&&(m.indices=v),m}}class ri{constructor(e){this.pattern=e}static isMultiMatch(e){return Cg(e,this.multiRegex)}static isSingleMatch(e){return Cg(e,this.singleRegex)}search(){}}function Cg(t,e){const n=t.match(e);return n?n[1]:null}class Rx extends ri{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Tx extends ri{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Dx extends ri{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class kx extends ri{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Gx extends ri{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Mx extends ri{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Zh extends ri{constructor(e,{location:n=ze.location,threshold:r=ze.threshold,distance:i=ze.distance,includeMatches:s=ze.includeMatches,findAllMatches:a=ze.findAllMatches,minMatchCharLength:c=ze.minMatchCharLength,isCaseSensitive:u=ze.isCaseSensitive,ignoreLocation:_=ze.ignoreLocation}={}){super(e),this._bitapSearch=new qh(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Qh extends ri{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const lu=[Rx,Qh,Dx,kx,Mx,Gx,Tx,Zh],bg=lu.length,Ux=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Fx="|";function $x(t,e={}){return t.split(Fx).map(n=>{let r=n.trim().split(Ux).filter(s=>s&&!!s.trim()),i=[];for(let s=0,a=r.length;s<a;s+=1){const c=r[s];let u=!1,_=-1;for(;!u&&++_<bg;){const v=lu[_];let g=v.isMultiMatch(c);g&&(i.push(new v(g,e)),u=!0)}if(!u)for(_=-1;++_<bg;){const v=lu[_];let g=v.isSingleMatch(c);if(g){i.push(new v(g,e));break}}}return i})}const Px=new Set([Zh.type,Qh.type]);class Bx{constructor(e,{isCaseSensitive:n=ze.isCaseSensitive,includeMatches:r=ze.includeMatches,minMatchCharLength:i=ze.minMatchCharLength,ignoreLocation:s=ze.ignoreLocation,findAllMatches:a=ze.findAllMatches,location:c=ze.location,threshold:u=ze.threshold,distance:_=ze.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:s,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=$x(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let s=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const v=n[u];a.length=0,s=0;for(let g=0,p=v.length;g<p;g+=1){const m=v[g],{isMatch:C,indices:b,score:O}=m.search(e);if(C){if(s+=1,c+=O,r){const w=m.constructor.type;Px.has(w)?a=[...a,...b]:a.push(b)}}else{c=0,s=0,a.length=0;break}}if(s){let g={isMatch:!0,score:c/s};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const cu=[];function Hx(...t){cu.push(...t)}function uu(t,e){for(let n=0,r=cu.length;n<r;n+=1){let i=cu[n];if(i.condition(t,e))return new i(t,e)}return new qh(t,e)}const xa={AND:"$and",OR:"$or"},du={PATH:"$path",PATTERN:"$val"},_u=t=>!!(t[xa.AND]||t[xa.OR]),Wx=t=>!!t[du.PATH],zx=t=>!yr(t)&&jh(t)&&!_u(t),Og=t=>({[xa.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Jh(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const a=Wx(i);if(!a&&s.length>1&&!_u(i))return r(Og(i));if(zx(i)){const u=a?i[du.PATH]:s[0],_=a?i[du.PATTERN]:i[u];if(!cr(_))throw new Error(hx(u));const v={keyId:au(u),pattern:_};return n&&(v.searcher=uu(_,e)),v}let c={children:[],operator:s[0]};return s.forEach(u=>{const _=i[u];yr(_)&&_.forEach(v=>{c.children.push(r(v))})}),c};return _u(t)||(t=Og(t)),r(t)}function Yx(t,{ignoreFieldNorm:e=ze.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:s))}),n.score=r})}function jx(t,e){const n=t.matches;e.matches=[],Rn(n)&&n.forEach(r=>{if(!Rn(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let a={indices:i,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function Vx(t,e){e.score=t.score}function Kx(t,e,{includeMatches:n=ze.includeMatches,includeScore:r=ze.includeScore}={}){const i=[];return n&&i.push(jx),r&&i.push(Vx),t.map(s=>{const{idx:a}=s,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(s,c)}),c})}class ho{constructor(e,n={},r){this.options={...ze,...n},this.options.useExtendedSearch,this._keyStore=new Ex(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof od))throw new Error(gx);this._myIndex=n||Xh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Rn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:c}=this.options;let u=cr(e)?cr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Yx(u,{ignoreFieldNorm:c}),s&&u.sort(a),Yh(n)&&n>-1&&(u=u.slice(0,n)),Kx(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=uu(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:a,n:c})=>{if(!Rn(s))return;const{isMatch:u,score:_,indices:v}=n.searchIn(s);u&&i.push({item:s,idx:a,matches:[{score:_,value:s,norm:c,indices:v}]})}),i}_searchLogical(e){const n=Jh(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:p}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:p});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const v=[];for(let g=0,p=c.children.length;g<p;g+=1){const m=c.children[g],C=r(m,u,_);if(C.length)v.push(...C);else if(c.operator===xa.AND)return[]}return v},i=this._myIndex.records,s={},a=[];return i.forEach(({$:c,i:u})=>{if(Rn(c)){let _=r(n,c,u);_.length&&(s[u]||(s[u]={idx:u,item:c,matches:[]},a.push(s[u])),_.forEach(({matches:v})=>{s[u].matches.push(...v)}))}}),a}_searchObjectList(e){const n=uu(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:a,i:c})=>{if(!Rn(a))return;let u=[];r.forEach((_,v)=>{u.push(...this._findMatches({key:_,value:a[v],searcher:n}))}),u.length&&s.push({idx:c,item:a,matches:u})}),s}_findMatches({key:e,value:n,searcher:r}){if(!Rn(n))return[];let i=[];if(yr(n))n.forEach(({v:s,i:a,n:c})=>{if(!Rn(s))return;const{isMatch:u,score:_,indices:v}=r.searchIn(s);u&&i.push({score:_,key:e,value:s,idx:a,norm:c,indices:v})});else{const{v:s,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(s);c&&i.push({score:u,key:e,value:s,norm:a,indices:_})}return i}}ho.version="7.0.0";ho.createIndex=Xh;ho.parseIndex=Ax;ho.config=ze;ho.parseQuery=Jh;Hx(Bx);function qr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function Xx(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function qx(t){return new ho(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function Zx(t,e,n){const r=Xx(e,n);return t.length===0?r:qx(r).search(t).map(i=>i.item)}function Qx(t,e){return qr(t,e).shape}function Zt(t,e){const n=Qx(t,e);return n?su(n):void 0}function ms(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return id(e)}function Jx(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Es(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return id(i)})}function eR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(s=>{if(typeof s!="string")throw Error("cell must be string.");return id(s)})})}function xr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function ep(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Bh(e)}function tR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Bh(r)})}function nR(t,e){const n=t.shape;return n===void 0?void 0:{...Zt(e,Rt),...n}}function tp(t,e,n){return{toolId:t,cells:e,value:n}}function rR(t,e){const n=Es(e,"cells"),r=xr(e);return tp(t,n,r)}function np(t,e,n){const r=n?t.length-2:0;return t.findIndex((s,a)=>Ve(s,e)&&a>=r)}function iR(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:vs(r[i-1],e)))return t;const a=np(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function rp(t,e){return{toolId:t,cells:e,lines:[]}}function oR(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Sa(n),{...t,cells:n};const r=n.some(s=>Ve(s,e)),i=n.some(s=>vs(s,e));return n.length>0&&!r&&i?(n.push(e),Sa(n),{...t,cells:n}):t}function sR(t,e,n){const r=t.cells.some(_=>Ve(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return fu(t,e);const s=t.lines[i-1],a=s.length;if(a===0&&!r)return t;if(a===0&&r)return fu(t,e);const c=np(s,e,!1);return(s.length===0?!0:vs(s[a-1],e))?c>=0?(s.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),s]}):!r||n?(s.push(e),{...t,lines:[...t.lines.slice(0,i-1),s]}):t:t}function fu(t,e){return t.cells.some(r=>Ve(r,e))?{...t,lines:[...t.lines,[e]]}:t}function aR(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function lR(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function cR(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function uR(t,e){const n=Es(e,"cells"),r=eR(e),i=rp(t,n);return i.lines=r,i}function ip(t,e,n=""){return{toolId:t,cells:e,value:n}}function dR(t,e,n=!1){const r=zh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function _R(t,e){return{...t,value:e}}function fR(t,e){const n=Es(e,"cells"),r=xr(e);return ip(t,n,r)}function op(t,e,n){return{toolId:t,cells:e,value:n}}function gR(t,e){const n=Es(e,"cells"),r=xr(e);return op(t,n,r)}function sp(t,e,n){return{toolId:t,cells:e,value:n}}function hR(t,e){const n=Es(e,"cells"),r=xr(e);return sp(t,n,r)}function ap(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function pR(t,e){const n=ms(e),r=ep(e),i=xr(e);return ap(t,n,r,i)}function lp(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function vR(t,e){const n=ms(e),r=xr(e);return lp(t,n,r)}function cp(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function mR(t,e){const n=ms(e),r=ep(e);return cp(t,n,r)}function up(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function ER(t,e){const n=ms(e),r=tR(e),i=up(t,n,He.N);return i.directions=r,i}function dp(t,e,n=""){return{toolId:t,cell:e,value:n}}function CR(t,e){const n=ms(e),r=xr(e);return dp(t,n,r)}function bR(t,e=""){return{toolId:t,value:e}}function OR(t,e){const n=xr(e);return bR(t,n)}function IR(t,e,n=""){return{toolId:t,coords:e,value:n}}function wR(t,e){const n=Jx(e,"coords"),r=xr(e);return IR(t,n,r)}function Cs(t,e){return{...t,value:e}}class po extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const s of Object.values(r))i.push(DR(s));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new po;if(!e)return n;for(const[r,i]of Object.entries(e)){const s=yh(r);if(s===void 0||!Object.keys(Rt).includes(s))continue;const a=i;for(const c of a){let u=null;if(Ah(s,za)?u=vR(s,c):Pu(s)?u=mR(s,c):Bu(s)?u=ER(s,c):Hu(s)?u=hR(s,c):Oh(s)?u=gR(s,c):Wu(s)?u=rR(s,c):wh(s)?u=wR(s,c):zu(s)?u=uR(s,c):Yu(s)?u=fR(s,c):os(s)?u=pR(s,c):TI(s)?u=OR(s,c):Ih(s)&&(u=CR(s,c)),u!==null){n.addToDict(s);const _=St.uniqueId(),v=nR(c,s);u.shape=v,n.addConstraint(s,_,u)}}}return n}}function Ra(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1],a=i[0];if(Ve(s.cell,n))return[a,s]}return null}function LR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(n.every(c=>s.cells.some(u=>Ve(c,u))))return i}return null}function yR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1],a=s.cells[s.cells.length-1];if(Ve(n,a))return i}return null}function Ig(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(s.cells.some(c=>Ve(c,n)))return[i[0],s]}return null}function AR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Ve(c,n)))return i;return null}function wg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(s.cells.some(c=>Ve(c,n)))return[i[0],s]}return null}function NR(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,s]of Object.entries(r)){const a=s,c=a.lines.findIndex(u=>u.some((_,v)=>Ve(_,n)&&v>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function SR(t,e,n,r){const i=t.get(e);if(!i)return null;for(const s of Object.entries(i)){const a=s[1],c=s[0];if(Ve(n,a.cell)&&r===a.direction)return c}return null}function xR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1],a=i[0];if(Ve(n,s.cell))return a}return null}function RR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const s=i[1];if(s.cells.some(c=>Ve(c,n))||s.cells2.some(c=>Ve(c,n)))return[i[0],s]}return null}function TR(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const s=i[1];r.add(s.value)}return r}function DR(t){const e={};if("cells"in t){const n=t.cells.map(r=>ba(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ba(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>ba(i)));e.lines=n}if("cell"in t){const n=ba(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=Zt(t.toolId,Rt),r=UI(t.shape,n);r&&(e.shape=r)}return e}function Lg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function _p(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function gu(t){const e=new Option().style;return e.color=t,e.color!==""}function Vc(t){return _p(t)||gu(t)?t:gu(`#${t}`)?`#${t}`:void 0}function Ta(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function fp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Da(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function kR(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const yg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function GR(t){return t in yg?yg[t]:null}function gp(t,e,n){if(n===null)return null;const r=GR(n);if(r===null)return null;const[i,s]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/s)}function Kc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class MR{constructor(e,n){ve(this,"r");ve(this,"c");ve(this,"outside",!1);ve(this,"value",null);ve(this,"given",!1);ve(this,"region",null);ve(this,"centerMarks",[]);ve(this,"cornerMarks",[]);ve(this,"highlights",[]);ve(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){this.region=e,e!==null&&(this.outside=!1)}enterCenterPM(e){this.value||(this.centerMarks=Kc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Kc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Kc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==gp(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class vo{constructor(e,n){ve(this,"nCols");ve(this,"nRows");ve(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const s=[];for(let a=0;a<n;a++){const c=new MR(i,a);if(r){const u=gp(i,a,e);c.region=u}s.push(c)}this.grid.push(s)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[s,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const s=e.r+i[0],a=e.c+i[1],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const s=e.r+i[0],a=e.c+i[1],c=this.getCell(s,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return fp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),s=i.length;if(e<0||e>=s||![...r.values()].every(c=>c===s))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:s,c:a}=Za(r);let[c,u]=[e+s,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+s,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let s=0;s<this.nCols;s++){const a=this.getCell(r,s);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new vo(e,n);for(let s=0;s<e;s++)for(let a=0;a<n;a++){const c=r[s][a],u=i.getCell(s,a);u&&Object.assign(u,c)}return i}}function UR(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const s=Math.min(e.nRows,e.nCols),a=St.range(1,s+1);t.valid_digits&&!kR(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function FR(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,s=t.grid,a=vo.fromJSON(e,n,s),c=Math.min(a.nRows,a.nRows);let u=St.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,v=t.local_constraints,g=po.fromJson(v),p=t.bool_constraints,m=Oi.fromJson(p);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function B9(){const t=new vo(9,9),e=new po,n=new Oi;return{grid:t,solution:void 0,valid_digits:St.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var Ko=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Ko||{});const $R=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),PR=()=>({type:"CLEAR"}),BR=t=>({type:"DRAG",payload:t}),hu=t=>({type:"SET",payload:t}),HR=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),sd=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),lr=(t,e,n)=>{const r=[...t];return Sa(r),{cells:r,lastCell:e,mode:n}};function WR(t,e,n){if(e===null)return sd();if(n==="RESETTING")return lr([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ve(e,i));if(n==="SELECTING")return r!==-1?t:lr([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),lr(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return lr([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),lr(i,null,"DESELECTING")}return t}function zR(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ve(e,r));if(t.mode==="SELECTING")return n!==-1?t:lr([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),lr(r,null,t.mode)}return t}function YR(t,e){return{...t,cells:e}}function jR(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ve(e,i))!==-1?lr([...t.cells],e,"SELECTING"):lr([...t.cells,e],e,"SELECTING"):lr([e],e,t.mode)}function hp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return sd();case"SET":return YR(t,e.payload);case"CLICK":return WR(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return zR(t,e.payload);case"ARROW_KEY":return jR(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Xi(t,e){return Ve(t.p1,e.p1)&&Ve(t.p2,e.p2)||Ve(t.p1,e.p2)&&Ve(t.p2,e.p1)}function VR(t,e){return Ve(t.p1,e.p2)&&Ve(t.p2,e.p1)}function pp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ve(t,e)}class Qa{constructor(){ve(this,"edgeMarkers",[]);ve(this,"cellMarkers",[]);ve(this,"lineMarkers",[]);ve(this,"draftLine",[]);ve(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ve(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ve(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ve(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ve(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ve(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ve(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ve(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ve(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ve(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ve(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const s={...e,colorId:n,marker:"O"};this.cellMarkers[r]=s}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Xi(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>Xi(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&VR(r,e)&&this.draftLine.splice(n,1)}onDrag(e){pp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(s=>Xi(s,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(s=>Xi(s,r));if(i!==-1){const s=this.lineMarkers.splice(i,1);n.push(s[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Qa;return Object.assign(e,this),e}}const Ag=t=>({type:"ADD_EDGE_MARKER",payload:t}),Ng=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),wa=t=>({type:"ADD_CELL_MARKER",payload:t}),KR=t=>({type:"SET_CELL_MARKERS",payload:t}),Sg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),XR=t=>({type:"DRAG",payload:t}),ss=t=>({type:"ADD_LINE_MARKERS",payload:t}),xg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),ad=()=>({type:"RESET"});function qR(t,e){switch(e.type){case"RESET":return new Qa;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function vp(){return{_undoStack:[],_redoStack:[]}}const mo=Ht(vp());function ZR(){mo.update(()=>vp())}function un(t,e=!0){mo.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function QR(t,e=!0){mo.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function mp(){mo.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Ep(){mo.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const ka=Ht(new Qa);function ur(t){ka.update(e=>qR(e,t))}const Ga=Ht(1);function vi(t,e){return{execute:()=>{ur(t)},unExecute:()=>{ur(e)}}}const Ii=Ht(sd());function Vi(t){t&&Ii.update(e=>hp(e,t))}function Rg(t){t&&Ii.update(e=>hp(e,t))}function JR(t,e){return{execute:()=>{Rg(t)},unExecute:()=>{Rg(e)}}}const Qi=Ht(),Ja=Ht(ro.SETTING),pu=Ht(!1),qt=Ht(d.DIGIT),Cp=Ht(d.DIGIT),ld=Ht(St.range(1,10)),_n=Ht(new vo(9,9)),dn=Ht(ut(_n).getAllCells()),Rr=Ht({}),Tr=Ht(new Oi),pt=Ht(new po),fr=Ht(null),bp=Ht(void 0),el=Ht(void 0);function eT(t){Rr.update(()=>t)}function Eo(t){fr.update(()=>t)}function cd(t){bp.update(()=>t)}function Lr(t){ut(qt)!==t&&(qt.update(()=>t),Eo(null))}function tT(){const t=ut(Cp);t&&Lr(t)}function vu(t){Cp.update(()=>t)}function nT(t){ut(qt)===t&&Lr(d.DIGIT)}function rT(t){pt.update(e=>(e.removeFromDict(t),e)),cd(void 0)}function Bt(t,e,n){pt.update(r=>(r.updateConstraint(t,e,n),r)),Eo({id:e,constraint:n})}function Xc(t){const e=ut(fr);if(t=t?{...t}:void 0,cd(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Bt(r,e.id,n)}function iT(t,e){const r=ut(pt).get(e);if(!r)return;const i=r[t];i&&Eo({id:t,constraint:i})}function oT(t,e,n){const r=new vo(t,e);_n.update(()=>r),ld.update(()=>n),pt.update(()=>new po),Tr.update(()=>new Oi),Rr.update(()=>({})),ud(void 0),dn.update(()=>r.getAllCells())}function sT(t){_n.update(()=>t.grid),Rr.update(()=>t.puzzleMeta),ud(t.solution),ld.update(()=>t.valid_digits),pt.update(()=>t.localConstraints),Tr.update(()=>t.globalConstraints),dn.update(()=>t.grid.getAllCells())}function Op(){const t=ut(_n);t.resetValues(),_n.update(()=>t),dn.update(()=>t.getAllCells()),ur(ad())}function Ma(){ZR(),ur(ad()),Lr(d.DIGIT);const t=PR();Vi(t),cd(void 0),Eo(null)}const Ip=no([Jr,qt,Ja],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===ro.SETTING}),bs=no([_n,Rr,Tr,pt,el,ld],([t,e,n,r,i,s])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:s,globalConstraints:n,localConstraints:r}));function ud(t){el.update(()=>t)}var Ki=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Ki||{});const dd=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),_d=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),aT=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),lT=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Tg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function wp(t){pt.update(e=>(e.addToDict(t),e))}function ii(t,e){const n=ut(bp);n&&(e.shape={...n}),pt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Eo({id:t,constraint:e})}function wi(t,e){e&&pt.update(n=>(n.removeConstraint(t,e),n))}function cT(t,e){pt.update(n=>(n.setConstraints(t,e),n))}function Dg(t){t.type===Ki.ADD_LOCAL_CONSTRAINT?ii(t.payload.id,t.payload.constraint):t.type===Ki.REMOVE_LOCAL_CONSTRAINT?wi(t.payload.tool,t.payload.id):t.type===Ki.REMOVE_LOCAL_CONSTRAINT_GROUP?rT(t.payload.tool):t.type===Ki.RESTORE_LOCAL_CONSTRAINT_GROUP?cT(t.payload.tool,t.payload.constraints):t.type===Ki.UPDATE_LOCAL_CONSTRAINT&&Bt(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Os(t,e){return{execute:()=>{Dg(t)},unExecute:()=>{Dg(e)}}}var uT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Lp(t){var e=uT();R(t,e)}var dT=re('<button class="remove-button svelte-17rdl63"><!></button>');function _T(t,e){let n=M(e,"onTrash",8,()=>{});var r=dT(),i=K(r);Lp(i),W(r),Ue("click",r,Kn(function(...s){var a;(a=n())==null||a.apply(this,s)})),R(t,r)}var fT=re('<input type="radio" class="radio-select-button svelte-3561wl">'),gT=re('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function Zo(t,e){var ne,ce;se(e,!1);const n=it(),r=()=>be(qt,"$toolStore",n),i=[];let s=M(e,"elementInfo",8),a=M(e,"onClick",12,void 0),c=M(e,"onTrash",8,void 0);const u=s().toolId,_=s().permanent??!1,v=((ne=s().menu)==null?void 0:ne.name)??s().toolId,g=!((ce=s().meta)!=null&&ce.categories.includes(S.GLOBAL_CONSTRAINT)),p=`label-${v}`;g&&a(()=>{Lr(u)});function m(){var Ce,fe;const ee=(Ce=s().meta)==null?void 0:Ce.description,ie=((fe=s().meta)==null?void 0:fe.usage)??qI(u);let Ee;return ee&&ee.length&&(Ee=ee),ie.length&&(Ee?Ee=Ee+`

`+ie:Ee=ie),Ee}ge();var C=gT(),b=K(C);{var O=ee=>{var ie=fT();Kt(ie),y(ie,"id",p),ie.value=(ie.__value=u)==null?"":u,Wa(i,[],ie,()=>r(),Ee=>ds(qt,Ee)),R(ee,ie)};he(b,ee=>{g&&ee(O)})}var w=F(b,2);J(()=>y(w,"title",m())),y(w,"aria-labelledby",p);var x=K(w),k=K(x),U=K(k);{var z=ee=>{_T(ee,{get onTrash(){return c()}})};he(U,ee=>{_||ee(z)})}W(k);var Y=F(k,2);y(Y,"for",p),Y.textContent=v,W(x);var H=F(x,2),q=K(H);dt(q,e,"default",{}),W(H),W(w),W(C),J(()=>wt(C,"checked",u===r())),Ue("click",w,Kn(function(...ee){var ie;(ie=a())==null||ie.apply(this,ee)})),R(t,C),ae()}function yp(t,e){se(e,!1);const n=it(),r=()=>be(pt,"$localConstraintsStore",n);let i=M(e,"toolId",8),s=M(e,"elementHandlers",8);const a=()=>{nT(i());const u=r().get(i());if(!u)return;const _=aT(i()),v=lT(i(),u),g=Os(_,v);un(g)};ge();var c=qe(()=>qr(i(),s()));Zo(t,{get elementInfo(){return h(c)},onTrash:a}),ae()}var hT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function pT(t){var e=hT();R(t,e)}var vT=re('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function tl(t,e){let n=M(e,"isOpen",8,!0);var r=vT(),i=K(r);dt(i,e,"default",{}),W(r),J(()=>{y(r,"aria-expanded",n()),wt(r,"closed",!n())}),R(t,r)}var mT=re('<div class="constraint-button svelte-jwshaw"><div class="left-side svelte-jwshaw"> </div> <div class="right-side svelte-jwshaw"><button class="remove-constraint-button svelte-jwshaw"><!></button></div></div>');function ET(t,e){se(e,!1);const n=it(),r=()=>be(Qi,"$svgRefStore",n),i=()=>be(pt,"$localConstraintsStore",n),s=()=>be(fr,"$currentConstraintStore",n),a=T();let c=M(e,"constraintId",8),u=M(e,"toolId",8);function _(){iT(c(),u()),r().focus()}function v(){const w=i().getConstraint(u(),c());if(!w)return;const x=_d(c(),u()),k=dd(c(),w),U=Os(x,k);un(U)}D(()=>s(),()=>{var w;A(a,(w=s())==null?void 0:w.id)}),Oe(),ge();var g=mT(),p=K(g),m=K(p);W(p);var C=F(p,2),b=K(C),O=K(b);Lp(O),W(b),W(C),W(g),J(()=>{wt(g,"active",c()===h(a)),nt(m,`ID: ${c()??""}`)}),Ue("click",b,Kn(v)),Ue("click",g,_),R(t,g),ae()}var CT=re('<div class="constraint-list svelte-w5npcu"></div>');function Ap(t,e){se(e,!1);const n=it(),r=()=>be(pt,"$localConstraintsStore",n),i=()=>be(qt,"$toolStore",n),s=T();let a=M(e,"toolId",8);D(()=>(r(),Z(a())),()=>{A(s,r().get(a()))}),Oe(),ge();var c=Ne(),u=ue(c);{var _=v=>{var g=qe(()=>a()===i());tl(v,{get isOpen(){return h(g)},children:(p,m)=>{var C=CT();st(C,5,()=>Object.entries(h(s)),b=>b[0],(b,O)=>{ET(b,{get constraintId(){return h(O)[0]},get toolId(){return a()}})}),W(C),R(p,C)},$$slots:{default:!0}})};he(u,v=>{h(s)&&Object.entries(h(s)).length&&v(_)})}R(t,c),ae()}var bT=re('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function OT(t,e){let n=M(e,"title",8),r=M(e,"closeCb",8);var i=bT(),s=K(i),a=K(s,!0);W(s);var c=F(s,2);W(i),J(()=>nt(a,n())),Ue("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),R(t,i)}var IT=re('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function Dr(t,e){se(e,!1);let n=M(e,"showModal",12),r=M(e,"title",8),i=T();function s(){n(!1),h(i).close()}D(()=>(h(i),Z(n())),()=>{h(i)&&n()&&h(i).showModal()}),D(()=>(h(i),Z(n())),()=>{h(i)&&!n()&&h(i).close()}),Oe();var a=IT(),c=K(a),u=K(c);OT(u,{get title(){return r()},closeCb:s});var _=F(u,2),v=K(_),g=K(v);dt(g,e,"default",{}),W(v),W(_),W(c),W(a),bi(a,p=>A(i,p),()=>h(i)),Ue("click",c,Kn(function(p){NI.call(this,e,p)})),Ue("close",a,()=>{n(!1)}),Ue("click",a,AI(Kn(()=>h(i).close()))),R(t,a),ae()}var wT=re('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function LT(t,e){se(e,!1);let n=M(e,"searchPattern",12,""),r=M(e,"showModal",8),i=T(null);D(()=>(Z(r()),h(i)),()=>{r()&&h(i)&&h(i).focus()}),Oe();var s=wT(),a=F(K(s),2);Kt(a),y(a,"spellcheck",!1),bi(a,c=>A(i,c),()=>h(i)),W(s),jn(a,n),R(t,s),ae()}var yT=re('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function AT(t,e){let n=M(e,"showModal",12),r=M(e,"searchPattern",12,""),i=M(e,"title",8);Dr(t,{get title(){return i()},get showModal(){return n()},set showModal(s){n(s)},children:(s,a)=>{var c=yT(),u=K(c);LT(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(p){r(p)},$$legacy:!0});var _=F(u,2),v=K(_),g=K(v);dt(g,e,"default",{}),W(v),W(_),W(c),R(s,c)},$$slots:{default:!0},$$legacy:!0})}var NT=re('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),ST=re('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function Xr(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0),i=M(e,"isCollapsible",8,!1);var s=Ne(),a=ue(s);{var c=_=>{var v=NT(),g=K(v),p=K(g),m=K(p,!0);W(p),W(g);var C=F(g,2),b=K(C);dt(b,e,"default",{}),W(C),W(v),J(()=>nt(m,n())),R(_,v)},u=_=>{var v=ST(),g=K(v),p=K(g),m=K(p,!0);W(p),W(g);var C=F(g,2),b=K(C);dt(b,e,"default",{});var O=F(b,2);W(C),W(v),J(()=>{nt(m,n()),wt(O,"open",r())}),Ue("click",v,()=>r(!r())),R(_,v)};he(a,_=>{i()?_(u,!1):_(c)})}R(t,s)}var xT=re('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),RT=re('<ol class="svelte-cd45on"></ol>'),TT=re("<!> <!>",1);function DT(t,e){se(e,!1);const n=T();let r=M(e,"category",8),i=M(e,"addTool",8),s=M(e,"searchResults",8),a=T(!0);D(()=>(Z(s()),Z(r())),()=>{A(n,s().filter(v=>{var g,p;return(p=(g=v.info.meta)==null?void 0:g.categories)==null?void 0:p.includes(r())}))}),Oe(),ge();var c=Ne(),u=ue(c);{var _=v=>{var g=TT(),p=ue(g);Xr(p,{get title(){return r()},isCollapsible:!0,get isOpen(){return h(a)},set isOpen(C){A(a,C)},$$legacy:!0});var m=F(p,2);tl(m,{get isOpen(){return h(a)},children:(C,b)=>{var O=RT();st(O,5,()=>h(n),Lt,(w,x)=>{let k=()=>h(x).key,U=()=>h(x).info;var z=xT(),Y=K(z),H=K(Y,!0);W(Y),W(z),J(()=>{var q;y(Y,"title",(q=U().meta)==null?void 0:q.description),nt(H,k())}),Ue("click",Y,()=>{i()(k())}),R(w,z)}),W(O),R(C,O)},$$slots:{default:!0}}),R(v,g)};he(u,v=>{h(n).length&&v(_)})}R(t,c),ae()}function kT(t,e){se(e,!1);const n=T();let r=M(e,"searchPattern",8,""),i=M(e,"addTool",8),s=M(e,"categories",8),a=M(e,"filterFunc",8),c=M(e,"elementHandlers",8);D(()=>(Z(r()),Z(a()),Z(c())),()=>{A(n,Zx(r(),a(),c()))}),Oe(),ge();var u=Ne(),_=ue(u);st(_,1,s,Lt,(v,g)=>{DT(v,{get category(){return h(g)},get searchResults(){return h(n)},get addTool(){return i()}})}),R(t,u),ae()}var GT=re('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function nl(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8);var i=GT();y(i,"tabindex",0);var s=K(i),a=K(s);dt(a,e,"add-button",{}),W(s);var c=F(s,2),u=K(c),_=K(u);dt(_,e,"title-icon",{}),W(u);var v=F(u);W(c);var g=F(c,2),p=K(g);W(g),W(i),J(()=>{nt(v,` ${r()??""}`),wt(p,"open",n())}),Ue("click",i,()=>n(!n())),Ue("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),R(t,i)}var MT=re('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function UT(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8),i=M(e,"showModal",12);function s(){i(!i())}nl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=MT();Ue("click",u,Kn(()=>s())),R(a,u)},"title-icon":(a,c)=>{var u=Ne(),_=ue(u);dt(_,e,"title-icon",{}),R(a,u)}},$$legacy:!0})}var FT=re('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),$T=re('<div class="panel-container svelte-hixu4"><!> <!></div>');function rl(t,e){let n=M(e,"isOpen",8,!0);var r=$T(),i=K(r);dt(i,e,"panel-header",{});var s=F(i,2);tl(s,{get isOpen(){return n()},children:(a,c)=>{var u=FT(),_=K(u);dt(_,e,"panel-content",{}),W(u),R(a,u)},$$slots:{default:!0}}),W(r),R(t,r)}var PT=re("<!> <!>",1);function fd(t,e){se(e,!1);let n=M(e,"categories",8),r=M(e,"title",8),i=M(e,"onAddTool",8),s=M(e,"elementHandlerFilterFunc",8),a=M(e,"elementHandlers",8),c=T(!0),u=T(!1),_=T("");const v=g=>{A(u,!1),A(c,!0),i()(g)};ge(),rl(t,{get isOpen(){return h(c)},set isOpen(g){A(c,g)},$$slots:{"panel-header":(g,p)=>{var m=PT(),C=ue(m);UT(C,{get title(){return r()},get isOpen(){return h(c)},set isOpen(O){A(c,O)},get showModal(){return h(u)},set showModal(O){A(u,O)},$$slots:{"title-icon":(O,w)=>{var x=Ne(),k=ue(x);dt(k,e,"title-icon",{}),R(O,x)}},$$legacy:!0});var b=F(C,2);AT(b,{get title(){return r()},get showModal(){return h(u)},set showModal(O){A(u,O)},get searchPattern(){return h(_)},set searchPattern(O){A(_,O)},children:(O,w)=>{kT(O,{get searchPattern(){return h(_)},get categories(){return n()},get filterFunc(){return s()},addTool:v,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),R(g,m)},"panel-content":(g,p)=>{var m=Ne(),C=ue(m);dt(C,e,"panel-content",{}),R(g,m)}},$$legacy:!0}),ae()}var BT=re("<!> <!>",1);function HT(t,e){se(e,!1);const n=it(),r=()=>be(pt,"$localConstraintsStore",n),i=T();let s=M(e,"elementHandlers",8);const a=[S.COSMETIC_TOOL],c=u=>{wp(u),Lr(u)};D(()=>(r(),S),()=>{A(i,(u,_)=>{var p;const v=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(S.COSMETIC_TOOL))&&!v})}),Oe(),ge(),fd(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{pT(u)},"panel-content":(u,_)=>{var v=Ne(),g=ue(v);st(g,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let C=()=>h(m)[0];var b=Ne(),O=ue(b);{var w=x=>{var k=BT(),U=ue(k);yp(U,{get toolId(){return C()},get elementHandlers(){return s()}});var z=F(U,2);Ap(z,{get toolId(){return C()}}),R(x,k)};he(O,x=>{DI(C())&&x(w)})}R(p,b)}),R(u,v)}}}),ae()}var Np=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Np||{});const Aa=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Sp=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function WT(t,e){Tr.update(n=>n.setConstraint(t,e))}function zT(t){Tr.update(e=>e.removeConstraint(t))}function kg(t){t.type===Np.REMOVE_GLOBAL_CONSTRAINT?zT(t.payload):WT(t.payload.tool,t.payload.value)}function mu(t,e){return{execute:()=>{kg(t)},unExecute:()=>{kg(e)}}}var YT=re('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function jT(t,e){let n=M(e,"value",8,!1);var r=YT(),i=K(r);Kt(i),W(r),J(()=>oh(i,n())),R(t,r)}function VT(t,e){se(e,!1);let n=M(e,"toolId",8),r=M(e,"value",8,!1),i=M(e,"elementHandlers",8);const s=()=>{const u=Aa(n(),!r()),_=Aa(n(),r()),v=mu(u,_);un(v)},a=()=>{const u=Sp(n()),_=Aa(n(),r()),v=mu(u,_);un(v)};ge();var c=qe(()=>qr(n(),i()));Zo(t,{get elementInfo(){return h(c)},onClick:s,onTrash:a,children:(u,_)=>{jT(u,{get value(){return r()}})},$$slots:{default:!0}}),ae()}var KT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function XT(t){var e=KT();R(t,e)}function qT(t,e){se(e,!1);const n=it(),r=()=>be(Tr,"$globalConstraintsStore",n),i=T();let s=M(e,"elementHandlers",8);const a=GI,c=u=>{const _=Aa(u,!0),v=Sp(u),g=mu(_,v);un(g)};D(()=>r(),()=>{A(i,(u,_)=>{var p;const v=!!((p=_.meta)!=null&&p.categories.includes(S.GLOBAL_CONSTRAINT)),g=r().has(u);return v&&!g})}),Oe(),ge(),fd(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{XT(u)},"panel-content":(u,_)=>{var v=Ne(),g=ue(v);st(g,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let C=()=>h(m)[0],b=()=>h(m)[1];VT(p,{get toolId(){return C()},get value(){return b()},get elementHandlers(){return s()}})}),R(u,v)}}}),ae()}var ZT=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function QT(t){var e=ZT();R(t,e)}var JT=re("<!> <!>",1),eD=re("<!> <!> <!> <!>",1);function tD(t,e){se(e,!1);const n=it(),r=()=>be(pt,"$localConstraintsStore",n),i=T();let s=M(e,"elementHandlers",8);const a=kI,c=u=>{wp(u),Lr(u)};D(()=>(r(),S),()=>{A(i,(u,_)=>{var p;const v=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(S.LOCAL_CONSTRAINT))&&!v})}),Oe(),ge(),fd(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return s()},$$slots:{"title-icon":(u,_)=>{QT(u)},"panel-content":(u,_)=>{var v=eD(),g=ue(v),p=qe(()=>qr(d.GIVEN,s()));Zo(g,{get elementInfo(){return h(p)}});var m=F(g,2),C=qe(()=>qr(d.REGIONS,s()));Zo(m,{get elementInfo(){return h(C)}});var b=F(m,2),O=qe(()=>qr(d.FOG,s()));Zo(b,{get elementInfo(){return h(O)}});var w=F(b,2);st(w,1,()=>r().entries(),([x,k])=>x,(x,k)=>{let U=()=>h(k)[0];var z=Ne(),Y=ue(z);{var H=q=>{var ne=JT(),ce=ue(ne);yp(ce,{get toolId(){return U()},get elementHandlers(){return s()}});var ee=F(ce,2);Ap(ee,{get toolId(){return U()}}),R(q,ne)};he(Y,q=>{xI(U())&&q(H)})}R(x,z)}),R(u,v)}}}),ae()}var nD=re('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function qc(t,e){se(e,!1);const n=T();let r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0),s=T(void 0);function a(m){const C=Vc(m);C&&i()&&i()(C)}D(()=>Z(r()),()=>{A(n,r())}),D(()=>(h(n),Vc),()=>{gu(h(n))&&A(s,Vc(h(n)))}),Oe(),ge();var c=nD(),u=K(c);const _=qe(()=>_p(h(n)));var v=K(u);Kt(v),W(u);var g=F(u,2),p=F(K(g),2);Kt(p),y(p,"spellcheck",!1),y(p,"maxlength",30),W(g),W(c),J(()=>{y(u,"style",`--choosen-color: ${h(s)??""}`),wt(u,"transparent",h(_))}),jn(v,()=>h(n),m=>A(n,m)),Ue("change",v,()=>a(h(n))),jn(p,()=>h(n),m=>A(n,m)),Ue("input",p,()=>a(h(n))),R(t,c),ae()}var rD=re('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function Qo(t,e){let n=M(e,"name",8);var r=rD(),i=K(r),s=K(i,!0);W(i);var a=F(i,2);dt(a,e,"default",{}),W(r),J(()=>nt(s,n())),R(t,r)}var iD=re('<input class="control-slider svelte-1rsuho6" type="range">');function oD(t,e){se(e,!1);let n=M(e,"min",8),r=M(e,"max",8),i=M(e,"value",12),s=M(e,"step",24,()=>(r()-n())/10),a=M(e,"onChangeCb",8,void 0),c=M(e,"onInputCb",8,void 0);ge();var u=iD();Kt(u),J(()=>{y(u,"min",n()),y(u,"max",r()),y(u,"step",s())}),jn(u,i),Ue("change",u,()=>{a()&&a()(i())}),Ue("input",u,()=>{c()&&c()(i())}),R(t,u),ae()}function jr(t,e){let n=M(e,"name",8),r=M(e,"value",12),i=M(e,"min",8),s=M(e,"max",8),a=M(e,"step",24,()=>(s()-i())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);Qo(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,v)=>{oD(_,{get min(){return i()},get max(){return s()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var sD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function aD(t){var e=sD();R(t,e)}var lD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function cD(t){var e=lD();R(t,e)}var uD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function dD(t){var e=uD();R(t,e)}var _D=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function fD(t){var e=_D();R(t,e)}var gD=re('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function hD(t,e){se(e,!1);const n=[];let r=M(e,"value",8),i=M(e,"selectedShape",12),s=M(e,"title",8),a=M(e,"updateShapeCb",8,void 0);ge();var c=gD(),u=K(c);Kt(u);var _,v=F(u,2);dt(v,e,"default",{}),W(c),J(()=>{y(c,"title",s()),wt(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Wa(n,[],u,()=>(r(),i()),i),Ue("change",u,()=>a()&&a()(r())),R(t,c),ae()}var pD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function vD(t){var e=pD(),n=K(e);y(n,"cx",480),y(n,"cy",-480),y(n,"rx",480),y(n,"ry",300),W(e),R(t,e)}var mD=re('<div class="icon-wrapper svelte-18euf14"><!></div>'),ED=re('<div class="radio-container svelte-18euf14"></div>');function CD(t,e){se(e,!1);let n=M(e,"name",8),r=M(e,"selectedShape",8),i=M(e,"possibleShapes",8),s=M(e,"updateShapeCb",8,void 0);const a=new Map([[$.CIRCLE,dD],[$.ELLIPSE,vD],[$.SQUARE,cD],[$.RECTANGLE,aD],[$.POLYGON,fD]]);ge(),Qo(t,{get name(){return n()},children:(c,u)=>{var _=ED();st(_,5,i,Lt,(v,g)=>{hD(v,{get title(){return h(g)},get value(){return h(g)},get selectedShape(){return r()},get updateShapeCb(){return s()},children:(p,m)=>{var C=Ne(),b=ue(C);{var O=w=>{var x=mD(),k=K(x);ah(k,()=>a.get(h(g)),(U,z)=>{z(U,{})}),W(x),R(w,x)};he(b,w=>{a.has(h(g))&&w(O)})}R(p,C)},$$slots:{default:!0}})}),W(_),R(c,_)},$$slots:{default:!0}}),ae()}var bD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function OD(t){var e=bD();R(t,e)}var ID=re('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),wD=re("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function LD(t,e){se(e,!1);const n=it(),r=()=>be(qt,"$toolStore",n),i=()=>be(fr,"$currentConstraintStore",n),s=T(),a=T(),c=T();let u=T(!0),_=M(e,"elementHandlers",8);function v(O,w){const x=(O==null?void 0:O.shape)??(w?su(w):void 0);return Xc(x),x}function g(O,w){h(c)&&(uI(c,h(c)[O]=w),Xc(h(c)))}function p(){h(a)&&(A(c,su(h(a))),Xc(h(c)))}function m(O){return O&&[$.CIRCLE,$.SQUARE,$.POLYGON,$.LINE_WITH_POLYGON_ENDS].includes(O)}function C(O){return O&&[$.POLYGON,$.LINE_WITH_POLYGON_ENDS].includes(O)}function b(O){return O&&[$.ELLIPSE,$.RECTANGLE].includes(O)}D(()=>(r(),Z(_())),()=>{A(s,qr(r(),_()))}),D(()=>h(s),()=>{A(a,h(s).shape)}),D(()=>(i(),h(a)),()=>{var O;A(c,v(((O=i())==null?void 0:O.constraint)??null,h(a)))}),Oe(),ge(),rl(t,{get isOpen(){return h(u)},set isOpen(O){A(u,O)},$$slots:{"panel-header":(O,w)=>{nl(O,{slot:"panel-header",title:"Shape Editor",get isOpen(){return h(u)},set isOpen(x){A(u,x)},$$slots:{"title-icon":(x,k)=>{OD(x)}},$$legacy:!0})},"panel-content":(O,w)=>{var x=Ne(),k=ue(x);{var U=z=>{var Y=wD(),H=ue(Y);{var q=De=>{var Ie=ID();Ue("click",Ie,p),R(De,Ie)};he(H,De=>{MI(h(a))&&De(q)})}var ne=F(H,2);{var ce=De=>{CD(De,{get possibleShapes(){return h(a).allowedTypes},name:"Shape",get selectedShape(){return h(c).type},updateShapeCb:Ie=>g("type",Ie)})};he(ne,De=>{var Ie;h(a).allowedTypes&&h(a).allowedTypes.length&&((Ie=h(c))!=null&&Ie.type)&&De(ce)})}var ee=F(ne,2);{var ie=De=>{var Ie=qe(()=>h(a).n.lb??3),ke=qe(()=>h(a).n.ub??10);jr(De,{name:"Number of Sides",get value(){return h(c).n},get min(){return h(Ie)},get max(){return h(ke)},step:1,onChangeCb:Te=>g("n",Te)})};he(ee,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.n)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.n)!=null&&Te.editable)&&C(h(c).type)&&De(ie)})}var Ee=F(ee,2);{var Ce=De=>{var Ie=qe(()=>h(a).r.lb??0),ke=qe(()=>h(a).r.ub??1),Te=qe(()=>h(a).r.step??.05);jr(De,{name:"Radius",get value(){return h(c).r},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:At=>g("r",At)})};he(Ee,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.r)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.r)!=null&&Te.editable)&&m(h(c).type)&&De(Ce)})}var fe=F(Ee,2);{var xe=De=>{var Ie=qe(()=>h(a).width.lb??0),ke=qe(()=>h(a).width.ub??1),Te=qe(()=>h(a).width.step??.05);jr(De,{name:"Width",get value(){return h(c).width},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:At=>g("width",At)})};he(fe,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.width)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.width)!=null&&Te.editable)&&b(h(c).type)&&De(xe)})}var Qe=F(fe,2);{var Se=De=>{var Ie=qe(()=>h(a).height.lb??0),ke=qe(()=>h(a).height.ub??1),Te=qe(()=>h(a).height.step??.05);jr(De,{name:"Height",get value(){return h(c).height},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:At=>g("height",At)})};he(Qe,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.height)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.height)!=null&&Te.editable)&&b(h(c).type)&&De(Se)})}var ye=F(Qe,2);{var lt=De=>{var Ie=qe(()=>h(a).angle.lb??0),ke=qe(()=>h(a).angle.ub??360),Te=qe(()=>h(a).angle.step??15);jr(De,{name:"Angle",get value(){return h(c).angle},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:At=>g("angle",At)})};he(ye,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.angle)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.angle)!=null&&Te.editable)&&De(lt)})}var Ye=F(ye,2);{var On=De=>{var Ie=qe(()=>h(a).inset.lb??0),ke=qe(()=>h(a).inset.ub??.5),Te=qe(()=>h(a).inset.step??.01);jr(De,{name:"Inset",get value(){return h(c).inset},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:At=>g("inset",At)})};he(Ye,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.inset)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.inset)!=null&&Te.editable)&&De(On)})}var Mn=F(Ye,2);{var Gr=De=>{Qo(De,{name:"Stroke",children:(Ie,ke)=>{qc(Ie,{get value(){return h(c).stroke},onChangeCb:Te=>g("stroke",Te)})},$$slots:{default:!0}})};he(Mn,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.stroke)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.stroke)!=null&&Te.editable)&&De(Gr)})}var Qt=F(Mn,2);{var hr=De=>{var Ie=qe(()=>h(a).strokeWidth.lb??0),ke=qe(()=>h(a).strokeWidth.ub??.8),Te=qe(()=>h(a).strokeWidth.step??.01);jr(De,{name:"Stroke Width",get value(){return h(c).strokeWidth},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:At=>g("strokeWidth",At)})};he(Qt,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.strokeWidth)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.strokeWidth)!=null&&Te.editable)&&De(hr)})}var si=F(Qt,2);{var rr=De=>{var Ie=qe(()=>h(a).strokeDasharray.lb??0),ke=qe(()=>h(a).strokeDasharray.ub??1),Te=qe(()=>h(a).strokeDasharray.step??.01);jr(De,{name:"Stroke Dasharray",get value(){return h(c).strokeDasharray},get min(){return h(Ie)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:At=>g("strokeDasharray",At)})};he(si,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.strokeDasharray)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.strokeDasharray)!=null&&Te.editable)&&De(rr)})}var Un=F(si,2);{var xi=De=>{Qo(De,{name:"Fill",children:(Ie,ke)=>{qc(Ie,{get value(){return h(c).fill},onChangeCb:Te=>g("fill",Te)})},$$slots:{default:!0}})};he(Un,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.fill)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.fill)!=null&&Te.editable)&&De(xi)})}var Mr=F(Un,2);{var Dt=De=>{Qo(De,{name:"Font Color",children:(Ie,ke)=>{qc(Ie,{get value(){return h(c).fontColor},onChangeCb:Te=>g("fontColor",Te)})},$$slots:{default:!0}})};he(Mr,De=>{var Ie,ke,Te;((Ie=h(c))==null?void 0:Ie.fontColor)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.fontColor)!=null&&Te.editable)&&De(Dt)})}R(z,Y)};he(k,z=>{h(a)&&z(U)})}R(O,x)}},$$legacy:!0}),ae()}var yD=re('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Is(t,e){let n=M(e,"clickCb",8),r=M(e,"title",8);var i=yD(),s=K(i),a=K(s);dt(a,e,"default",{}),W(s),W(i),J(()=>y(i,"title",r())),Ue("click",i,Kn(function(...c){var u;(u=n())==null||u.apply(this,c)})),R(t,i)}var AD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function ND(t){var e=AD();R(t,e)}var SD=re('<div class="buttons-container svelte-kc00rw"><!></div>');function il(t,e){var n=SD(),r=K(n);dt(r,e,"default",{}),W(n),R(t,n)}var xD=re('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),RD=re('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),TD=re('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function DD(t,e){se(e,!1);const n=it(),r=()=>be(Rr,"$puzzleMetaStore",n),i=()=>be(Tr,"$globalConstraintsStore",n),s=()=>be(pt,"$localConstraintsStore",n);let a=M(e,"showModal",12,!1),c=T(""),u=T(""),_=T(""),v=T(""),g=T("");function p(){a(!1)}function m(){const w=h(u)?C(h(u)):["Anonymous"],k={title:h(c)?h(c):"Sudoku",authors:w,ruleset:h(_),ctcYoutubeUrl:h(v),ctcUrl:h(g)};eT(k),a(!1)}function C(w){return w.split(/\s*[;]\s*/)}function b(){var Y,H,q,ne;let w="";const x=Rt,k=i();!!k.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ce,ee]of k.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&ee){const ie=x[ce],Ee=((Y=ie.menu)==null?void 0:Y.name)??ie.toolId,Ce=(H=ie.meta)==null?void 0:H.description;w+=`**${Ee}**: ${Ce}

`}const z=s();for(const[ce,ee]of z.entries())if(Object.keys(ee).length>0){const Ee=x[ce],Ce=((q=Ee.menu)==null?void 0:q.name)??Ee.toolId,fe=(ne=Ee.meta)==null?void 0:ne.description;w+=`**${Ce}**: ${fe}

`}return w.trim()}function O(){const w=b();A(_,w)}D(()=>(Z(a()),r(),Ta),()=>{if(!a()){const w=r().authors;A(c,r().title??""),A(u,w?Ta(w,"; ","; "):""),A(_,r().ruleset??""),A(v,r().ctcYoutubeUrl??""),A(g,r().ctcUrl??"")}}),Oe(),ge(),Dr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,x)=>{var k=TD(),U=K(k);Xr(U,{title:"Title"});var z=F(U,2);Kt(z);var Y=F(z,2);Xr(Y,{title:"Authors"});var H=F(Y,2);Kt(H);var q=F(H,2);Xr(q,{title:"Ruleset",children:(fe,xe)=>{var Qe=xD();Ue("click",Qe,O),R(fe,Qe)},$$slots:{default:!0}});var ne=F(q,2);qO(ne),y(ne,"rows",8);var ce=F(ne,2);Xr(ce,{title:"CTC Link"});var ee=F(ce,2);Kt(ee);var ie=F(ee,2);Xr(ie,{title:"CTC Youtube Link"});var Ee=F(ie,2);Kt(Ee);var Ce=F(Ee,2);il(Ce,{children:(fe,xe)=>{var Qe=RD(),Se=ue(Qe),ye=F(Se,2);Ue("click",Se,m),Ue("click",ye,p),R(fe,Qe)},$$slots:{default:!0}}),W(k),jn(z,()=>h(c),fe=>A(c,fe)),jn(H,()=>h(u),fe=>A(u,fe)),jn(ne,()=>h(_),fe=>A(_,fe)),jn(ee,()=>h(g),fe=>A(g,fe)),jn(Ee,()=>h(v),fe=>A(v,fe)),R(w,k)},$$slots:{default:!0},$$legacy:!0}),ae()}var kD=re("<!> <!>",1);function GD(t){let e=T(!1);function n(){A(e,!0)}var r=kD(),i=ue(r);Is(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{ND(a)},$$slots:{default:!0}});var s=F(i,2);DD(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var MD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function UD(t){var e=MD();R(t,e)}var FD=re('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function $D(t,e){se(e,!1);let n=T(null),r=T(null);function i(){var s;(s=h(n))==null||s.click()}D(()=>(h(r),Ma),()=>{if(h(r)&&h(r).length){const s=h(r)[0],a=new FileReader;a.readAsText(s),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),v=FR(_);console.log(v),sT(v),Ma()}},a.onerror=function(){alert(a.error)}}}),Oe(),ge(),Is(t,{title:"Open Puzzle",clickCb:i,children:(s,a)=>{var c=FD(),u=ue(c);UD(u);var _=F(u,2);bi(_,v=>A(n,v),()=>h(n)),yI(_,()=>h(r),v=>A(r,v)),R(s,c)},$$slots:{default:!0}}),ae()}var PD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function BD(t){var e=PD();R(t,e)}var HD=re('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Gg(t,e){se(e,!1);let n=M(e,"name",8),r=M(e,"min",8),i=M(e,"max",8),s=M(e,"value",12),a=M(e,"step",24,()=>(i()-r())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);ge();var _=HD(),v=K(_),g=K(v);W(v);var p=F(v,2);Kt(p),W(_),J(()=>{nt(g,`${n()??""}: ${s()??""}`),y(p,"min",r()),y(p,"max",i()),y(p,"step",a())}),jn(p,s),Ue("change",p,()=>{c()&&c()(s())}),Ue("input",p,()=>{u()&&u()(s())}),R(t,_),ae()}var WD=re('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),zD=re('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function YD(t,e){se(e,!1);let n=M(e,"showModal",12,!1);const r=4,i=20;let s=T(9),a=T(9),c=T(""),u=T(St.range(1,10));function _(){n(!1)}function v(){Ma(),oT(h(a),h(s),h(u).sort()),n(!1)}function g(C){return C.map(O=>String(O)).join(",")}function p(){const C=Math.min(Math.max(h(a),h(s)),9);A(u,St.range(1,C+1))}function m(C){/^-?\d+(?:,-?\d+)*$/.test(C)&&A(u,C.replaceAll(" ","").split(",").map(Number))}ge(),Dr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(C){n(C)},children:(C,b)=>{var O=zD(),w=K(O);Gg(w,{name:"Width",min:r,max:i,step:1,onInputCb:p,get value(){return h(s)},set value(H){A(s,H)},$$legacy:!0});var x=F(w,2);Gg(x,{name:"Height",min:r,max:i,step:1,onInputCb:p,get value(){return h(a)},set value(H){A(a,H)},$$legacy:!0});var k=F(x,2),U=qe(()=>`Allowed Digits (for the solver): ${g(h(u))}`);Xr(k,{get title(){return h(U)}});var z=F(k,2);Kt(z),J(()=>y(z,"placeholder",g(h(u))));var Y=F(z,2);il(Y,{children:(H,q)=>{var ne=WD(),ce=ue(ne),ee=F(ce,2);Ue("click",ce,v),Ue("click",ee,_),R(H,ne)},$$slots:{default:!0}}),W(O),jn(z,()=>h(c),H=>A(c,H)),Ue("input",z,()=>m(h(c))),R(C,O)},$$slots:{default:!0},$$legacy:!0}),ae()}var jD=re("<!> <!>",1);function VD(t){let e=T(!1);function n(){A(e,!0)}var r=jD(),i=ue(r);Is(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{BD(a)},$$slots:{default:!0}});var s=F(i,2);YD(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var KD=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function XD(t){var e=KD();R(t,e)}var qD=re('<button class="modal-button">Cancel</button>'),ZD=re('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function QD(t,e){se(e,!1);const n=it(),r=()=>be(Qi,"$svgRefStore",n),i=()=>be(Rr,"$puzzleMetaStore",n),s=()=>be(bs,"$puzzleStore",n),a=T();let c=M(e,"showModal",12,!1);function u(O){const w=getComputedStyle(O);let x="";for(let k of w){const U=w.getPropertyValue(k);U&&(x+=`${k}:${U};`)}return x}function _(O){const w=O.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(O));const x=O.childNodes;for(let k=0;k<x.length;k++){const U=x[k];if(U instanceof Element){const z=_(U);w.replaceChild(z,w.childNodes[k])}}return w}function v(O){const w=_(O),x=Da(i()),U=new XMLSerializer().serializeToString(w),z=new Image,Y=new Blob([U],{type:"image/svg+xml;charset=utf-8"}),H=URL.createObjectURL(Y);z.onload=()=>{const q=O.getBoundingClientRect(),ne=q.width,ce=q.height,ee=document.createElement("canvas"),ie=window.devicePixelRatio||1;ee.width=ne*ie,ee.height=ce*ie;const Ee=ee.getContext("2d");Ee&&(Ee.scale(ie,ie),Ee.drawImage(z,0,0,ne,ce),ee.toBlob(Ce=>{if(!Ce)return;const fe=URL.createObjectURL(Ce),xe=document.createElement("a");xe.href=fe,xe.download=x,xe.click(),URL.revokeObjectURL(fe)}))},z.src=H}function g(O,w="download.svg"){const x=_(O);let U=new XMLSerializer().serializeToString(x);U.includes("<?xml")||(U=`<?xml version="1.0" standalone="no"?>\r
`+U);const z=new Blob([U],{type:"image/svg+xml"}),Y=URL.createObjectURL(z),H=document.createElement("a");H.href=Y,H.download=w,H.click(),URL.revokeObjectURL(Y)}const p=()=>{const O=UR(s());return JSON.stringify(O,null,2)},m=()=>{function O(k,U,z){var Y=document.createElement("a"),H=new Blob([k],{type:z});Y.href=URL.createObjectURL(H),Y.download=U,Y.click(),URL.revokeObjectURL(Y.href)}const w=p(),x=Da(i());O(w,`${x}.json`,"text/plain")};function C(){c(!1)}const b=1;D(()=>r(),()=>{A(a,r())}),Oe(),ge(),Dr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(O){c(O)},children:(O,w)=>{var x=ZD(),k=K(x),U=K(k),z=K(U),Y=F(z,2),H=F(Y,2);W(U);var q=F(U,2),ne=F(K(q),2),ce=K(ne);y(ce,"width",400*b),y(ce,"height",300*b),W(ne),W(q),W(k);var ee=F(k,2);il(ee,{children:(ie,Ee)=>{var Ce=qD();Ue("click",Ce,C),R(ie,Ce)},$$slots:{default:!0}}),W(x),Ue("click",z,m),Ue("click",Y,()=>v(h(a))),Ue("click",H,()=>g(h(a))),R(O,x)},$$slots:{default:!0},$$legacy:!0}),ae()}var JD=re("<!> <!>",1);function e2(t){let e=T(!1);function n(){A(e,!0)}var r=JD(),i=ue(r);Is(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{XD(a)},$$slots:{default:!0}});var s=F(i,2);QD(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var t2=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function xp(t){var e=t2();R(t,e)}var n2=re('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),r2=re('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function La(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0);var i=r2(),s=K(i);Xr(s,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=F(s,2);tl(a,{get isOpen(){return r()},children:(c,u)=>{var _=n2(),v=K(_);dt(v,e,"default",{}),W(_),R(c,_)},$$slots:{default:!0}}),W(i),R(t,i)}var i2=re('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function o2(t,e){let n=M(e,"value",8),r=M(e,"onClickCb",8),i=M(e,"disabled",8,!1);var s=i2(),a=K(s);Kt(a),Zi(2),W(s),J(()=>{wt(s,"disabled",i()),oh(a,n()),a.disabled=i()}),Ue("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,s)}var s2=re('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Vr(t,e){se(e,!1);let n=M(e,"value",8),r=M(e,"name",8),i=M(e,"updateCb",8,void 0),s=M(e,"disabled",8,!1);function a(){s()||i()&&i()(!n())}ge();var c=s2(),u=K(c);o2(u,{get value(){return n()},onClickCb:a,get disabled(){return s()}});var _=F(u,2),v=K(_,!0);W(_),W(c),J(()=>{wt(c,"disabled",s()),nt(v,r())}),Ue("click",_,Kn(a)),R(t,c),ae()}var a2=re("<!> <!>",1),l2=re("<!> <!> <!>",1),c2=re("<!> <!>",1),u2=re('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Rp(t,e){se(e,!1);const n=it(),r=()=>be(Jr,"$settingsStore",n),i=()=>be(Ja,"$gameModeStore",n),s=T();let a=M(e,"showModal",12,!1);D(()=>r(),()=>{A(s,r())}),Oe(),ge(),Dr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=u2(),v=K(_);La(v,{title:"General",children:(b,O)=>{Vr(b,{get value(){return h(s).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:dI})},$$slots:{default:!0}});var g=F(v,2);La(g,{title:"Tools",children:(b,O)=>{var w=a2(),x=ue(w);Vr(x,{get value(){return h(s).penToolActive},name:"Pen Tool",updateCb:_I});var k=F(x,2);Vr(k,{disabled:!0,get value(){return h(s).letterToolActive},name:"Letter Tool",updateCb:fI}),R(b,w)},$$slots:{default:!0}});var p=F(g,2);La(p,{title:"Gameplay",children:(b,O)=>{var w=l2(),x=ue(w);Vr(x,{name:"Check Conflicts",get value(){return h(s).checkConflicts},updateCb:gI});var k=F(x,2);Vr(k,{name:"Highlight Pencilmark Conflicts",get value(){return h(s).highlightPencilmarkConflicts},updateCb:hI});var U=F(k,2);Vr(U,{name:"Highlight Cells Seen By Selection",get value(){return h(s).highlightCellsSeenBySelection},updateCb:pI}),R(b,w)},$$slots:{default:!0}});var m=F(p,2);{var C=b=>{La(b,{title:"Setting Mode Display",children:(O,w)=>{var x=c2(),k=ue(x);Vr(k,{name:"Hide Fog",get value(){return h(s).hideFog},updateCb:vI});var U=F(k,2);Vr(U,{name:"Show Solution",get value(){return h(s).showSolution},updateCb:mI}),R(O,x)},$$slots:{default:!0}})};he(m,b=>{i()===ro.SETTING&&b(C)})}W(_),R(c,_)},$$slots:{default:!0},$$legacy:!0}),ae()}var d2=re("<!> <!>",1);function _2(t){let e=T(!1);function n(){A(e,!0)}var r=d2(),i=ue(r);Is(i,{title:"Settings",clickCb:n,children:(a,c)=>{xp(a)},$$slots:{default:!0}});var s=F(i,2);Rp(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var f2=re('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function g2(t){var e=f2(),n=K(e);VD(n);var r=F(n,2);e2(r);var i=F(r,2);$D(i,{});var s=F(i,2);GD(s);var a=F(s,2);_2(a),W(e),R(t,e)}var h2=re('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function p2(t,e){se(e,!1);let n=T(!1);function r(){const i=ut(_n),s=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const v=_.value;c.push(v)}s.push(c)}ud(s)}ge(),rl(t,{get isOpen(){return h(n)},set isOpen(i){A(n,i)},$$slots:{"panel-header":(i,s)=>{nl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return h(n)},set isOpen(a){A(n,a)},$$legacy:!0})},"panel-content":(i,s)=>{var a=h2();Ue("click",a,r),R(i,a)}},$$legacy:!0}),ae()}const v2={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function m2(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],s=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[s,i]};if(i==="<"||i==="<=")return{upper_bound:[s,i]}}if(r=n.exec(t),r){const i=r[1],s=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[s,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function E2(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function C2(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Tp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function b2(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=E2(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=C2(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const s=m2(t);if(e.allow_interval&&s)return{type:"interval",parsed:s};const a=Tp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var X=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(X||{});function mt(t,e){return`${e}[${t.r},${t.c}]`}function ws(t,e){return t.map(r=>mt(r,e))}function me(t,e){return"["+ws(t,e).join(",")+"]"}function Le(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function at(t){return t.map(n=>Le(n))}function Ei(t){return`constraint alldifferent([${t.join(",")}]);
`}function _t(t,e){return t&&(t=`
% ${e}
`+t),t}function ol(t,e){const n=[He.N,He.S,He.W,He.E],r=[];for(const i of n){const s=t.getCellsInDirection(e.r,e.c,i);r.push(s)}return r}function gd(t,e,n=void 0){n||(n=[He.N,He.S,He.W,He.E]);const r=[];for(const i of n){const s=t.getCellsInDirection(e.r,e.c,i),a="["+at(s).join(",")+"]";r.push(a)}return r}function sl(t,e,n,r){let i="";const s=r.get(e);if(s)for(const a of Object.values(n)){const c=s(t,a);i+=c}return i}class O2{constructor(e){ve(this,"model_str","");ve(this,"used_vars");ve(this,"puzzle");ve(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=v2){const i=b2(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let s="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(s+=`var int: ${c};
`,this.addVariable(c)),[s,c]}if(!n)return null;if(this.hasVariable(n)||(s+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];s+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];s+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";s+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[s,n]}}function I2(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,s=/^test\s+(\w+)\s*\(/;let a=null,c=0,u=0;for(let b=0;b<e.length;b++){const O=e[b].trim(),w=O.match(r),x=O.match(i),k=O.match(s);if(w||x||k){a={name:(w||x||k)[1],startLine:b,content:[e[b]]},c=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length;continue}if(a&&(a.content.push(e[b]),c+=(O.match(/\(/g)||[]).length-(O.match(/\)/g)||[]).length,u+=(O.match(/\{/g)||[]).length-(O.match(/\}/g)||[]).length,c===0&&u===0&&O.endsWith(";"))){n[a.name]={startLine:a.startLine,endLine:b,name:a.name,content:a.content};let U=a.startLine;for(;U>0&&e[U-1].trim().startsWith("%");)U-=1;n[a.name].startLine=U,a=null}}const _=new Set;function v(b){const O=[];for(const w of Object.keys(n))!b.includes("function")&&!b.includes("predicate")&&!b.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(b)&&O.push(w);return O}for(const b of e)v(b).forEach(w=>_.add(w));const g=Object.values(n).filter(b=>!_.has(b.name)).map(b=>({start:b.startLine,end:b.endLine}));g.sort((b,O)=>O.start-b.start);const p=[...e];for(const b of g)p.splice(b.start,b.end-b.start+1);const m=[];let C=!1;for(const b of p)b.trim()===""?C||(m.push(b),C=!0):(m.push(b),C=!1);return m.join(`
`)}function Mg(t){let e=t,n=e.length;for(;e=I2(e),e.length!=n;)n=e.length;return e}const Ug=new Map([[1,[[1],[1],[1],[1],[1]]],[2,[[0,1,0],[1,1,1],[0,1,0]]],[3,[[1,1,1],[0,1,0],[0,1,0]]],[4,[[1,0,1],[1,1,1]]],[5,[[1,0,0],[1,0,0],[1,1,1]]],[6,[[1,0,0],[1,1,0],[0,1,1]]],[7,[[1,1,0],[0,1,0],[0,1,1]]],[8,[[0,1,1],[1,1,0],[0,1,0]]],[9,[[1,0,0,0],[1,1,1,1]]],[10,[[1,1,0,0],[0,1,1,1]]],[11,[[1,1],[1,1],[1,0]]],[12,[[1,1,1,1],[0,1,0,0]]]]);function hd(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function w2(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),s=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const v=e.getCell(c,_);!v||v.region===null?u.push(r-1):u.push(v.region)}s.push(u)}const a=hd(s);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function pd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Ft(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function L2(t,e){const r=t.grid.getPositiveDiagonal(),i=at(r);let s=Ei(i);return s=`
% Positive Diagonal Constraint
`+s,s}function y2(t,e){const r=t.grid.getNegativeDiagonal(),i=at(r);let s=Ei(i);return s=`
% Negative Diagonal Constraint
`+s,s}function A2(t,e){const r=t.grid.getPositiveDiagonal(),s="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${s}) == 3;
`,a}function N2(t,e){const r=t.grid.getNegativeDiagonal(),s="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${s}) == 3;
`,a}function S2(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let s="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),p=n.getCell(u,_+(u-v));if(!g||!p)continue;const m=Le(g),C=Le(p),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;s+=O}}return s}function x2(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let s="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),p=n.getCell(u,_-(u-v));if(!g||!p)continue;const m=Le(g),C=Le(p),O=`constraint is_unimodular_line(${`[${m}, ${C}]`}, 2);
`;s+=O}}return s}function R2(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let s=0;s<i;s++){const a=n.getDisjointGroup(s),_=`constraint alldifferent(${`[${at(a).join(",")}]`});
`;r+=_}return r}function T2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=Le(i),_=`[${at(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function D2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=Le(i),_=`[${at(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function k2(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=_t(n,`${e}`),n}function G2(t,e){let n="";return n+=`constraint tango_p(board);
`,n=_t(n,`${e}`),n}function M2(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=_t(n,`${e}`),n}function*kr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function U2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,s]of kr(n)){const a=Le(i),c=Le(s),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function F2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,s]of kr(n)){const a=Le(i),c=Le(s),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function $2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const s=n.getRow(i.r),c=`[${at(s).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function P2(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function B2(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function H2(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=_t(n,`${e}`),n}function Zc(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const s=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&s.push(_)}let a="";for(const[c,u]of kr(n)){if(s.find(p=>p.has(c)&&p.has(u)))continue;const v=Le(c),g=Le(u);if(e===d.ALL_V_GIVEN){const p=`constraint ${v} + ${g} != 5;
`;a+=p}else if(e===d.ALL_X_GIVEN){const p=`constraint ${v} + ${g} != 10;
`;a+=p}else{const p=`constraint ${v} + ${g} != 5 /\\ (${v} + ${g} != 10);
`;a+=p}}return a=_t(a,`${e}`),a}function Ji(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,s=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(s)}return n}function W2(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),s=Ji(n,i);let a="";for(const[c,u]of kr(n)){if(s.find(C=>C.has(c)&&C.has(u)))continue;const v=Le(c),g=Le(u);let p="";if(c.r==u.r){const b=n.getRow(c.r)[0];p=Le(b)}else if(c.c==u.c){const b=n.getCol(c.c)[0];p=Le(b)}if(!p)continue;const m=`constraint abs(${v} - ${g}) != ${p};
`;a+=m}return a=_t(a,`${e}`),a}function z2(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),s=r.get(d.RATIO);let a=Ji(n,i);a=[...a,...Ji(n,s)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let _="";for(const[v,g]of kr(n)){if(a.find(b=>b.has(v)&&b.has(g)))continue;const m=Le(v),C=Le(g);for(const b of u){const O=parseInt(b),w=`constraint abs(${m} - ${C}) != ${O};
`;_+=w}}return _=_t(_,`${e}`),_}function Y2(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),s=r.get(d.DIFFERENCE);let a=Ji(n,i);a=[...a,...Ji(n,s)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let _="";for(const[v,g]of kr(n)){if(a.find(b=>b.has(v)&&b.has(g)))continue;const m=Le(v),C=Le(g);for(const b of u){const O=parseInt(b),w=`constraint not ratio_p(${m}, ${C}, ${O});
`;_+=w}}return _=_t(_,`${e}`),_}function j2(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),s=Ji(n,i);let a="";for(const[c,u]of kr(n)){if(s.find(b=>b.has(c)&&b.has(u)))continue;const v=Le(c),g=Le(u),p=mt(c,X.YIN_YANG),m=mt(u,X.YIN_YANG),C=`constraint not yin_yang_kropki_p(${v}, ${g}, ${p}, ${m});
`;a+=C}return a=_t(a,`${e}`),a}function V2(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),s=i?Object.values(i):[];function a(u,_){return u.find(v=>v.cell.r===_.r&&v.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(s,u),v=_?_.directions:[],g=Le(u),p=[He.E,He.N,He.S,He.W];for(const m of p){if(v.includes(m))continue;const C=n.getCellsInDirection(u.r,u.c,m),b=me(C,X.YIN_YANG);c+=`constraint count(${b}, 1) != ${g};
`}}return c=_t(c,`${e}`),c}function vd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,s=t.getCell(i.r,i.c);s&&n.add(s)}return n}function K2(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),s=vd(n,i);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=n.getRow(c.r),g=`[${at(_).join(",")}]`,p=c.c+1,m=`constraint not indexing_column_p(${g}, ${p});
`;a+=m}return a=_t(a,`${e}`),a}function X2(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),s=vd(n,i);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=Le(c),[v,g,p,m]=gd(n,c),C=`constraint not radar_p(${_}, ${v}, ${g}, ${p}, ${m}, 9);
`;a+=C}return a=_t(a,`${e}`),a}function q2(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),s=vd(n,i);let a="";for(const c of n.getAllCells()){if(s.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,p=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=p}return a=_t(a,`${e}`),a}function Z2(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,s]of kr(n)){const a=Le(i),c=Le(s),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${s.r},${s.c}]`,v=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=v}return r}function Q2(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let s=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),_=me(u,X.YIN_YANG);s+=`constraint count_unique_values(${_}) >= 2;
`}return s}function J2(t,e){const n=t.grid;let r=`
% ${e}
`;const i=X.YIN_YANG;for(const[s,a]of kr(n)){const c=Le(s),u=Le(a),_=`${i}[${s.r},${s.c}]`,v=`${i}[${a.r},${a.c}]`,g=`constraint (${_} == 1 /\\ ${v} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function ek(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=_t(n,`${e}`),n}function tk(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=_t(n,`${e}`),n}function nk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function rk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=_t(n,`${e}`),n}function ik(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=_t(n,`${e}`),n}function ok(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=_t(n,`${e}`),n}function sk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function ak(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function lk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=_t(n,`${e}`),n}function ck(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=_t(n,`${e}`),n}function uk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const s=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=mt(i,X.BOARD),c=mt(i,X.YIN_YANG),u=me(s,X.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=_t(n,`${e}`),n}function dk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function _k(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function fk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function gk(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=_t(n,`${e}`),n}function hk(t,e){let n="";const r=t.grid,s=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=s.length?Math.max(...s):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=_t(n,`${e}`),n}function pk(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=_t(n,`${e}`),n}function vk(t,e){let n="";const s="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${s});
`,n=_t(n,`${e}`),n}function mk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=at(u),v=Ei(_);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const s=n.nCols;for(let c=0;c<s;c++){const u=n.getCol(c),_=at(u),v=Ei(_);r+=v}if(!e.get(d.UNKNOWN_REGIONS)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),v=at(_),g=Ei(v);r+=g}}return r}function Ek(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const Ck=new Map([[d.POSITIVE_DIAGONAL,L2],[d.NEGATIVE_DIAGONAL,y2],[d.POSITIVE_ANTIDIAGONAL,A2],[d.NEGATIVE_ANTIDIAGONAL,N2],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,S2],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,x2],[d.ANTIKING,T2],[d.ANTIKNIGHT,D2],[d.ANTI_GIRAFFE,k2],[d.DISJOINT_GROUPS,R2],[d.TANGO,G2],[d.NONCONSECUTIVE,U2],[d.NONRATIO,F2],[d.ANTI_ENTROPY,M2],[d.GLOBAL_INDEXING_COLUMN,$2],[d.ALL_V_GIVEN,Zc],[d.ALL_X_GIVEN,Zc],[d.ALL_XV_GIVEN,Zc],[d.ALL_DIFFERENCES_GIVEN,z2],[d.ALL_RATIOS_GIVEN,Y2],[d.ALL_XY_DIFFERENCES_GIVEN,W2],[d.ALL_YIN_YANG_KROPKI_GIVEN,j2],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,V2],[d.ALL_INDEXING_COLUMN_GIVEN,K2],[d.ALL_RADARS_GIVEN,X2],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,q2],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,Z2],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Q2],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,H2],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,P2],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,B2],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,ek],[d.CAVE_CELLS_ARE_ODD,nk],[d.CAVE_WALLS_ARE_EVEN,rk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,ik],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,ok],[d.YIN_YANG_FILLOMINO_PARITY,tk],[d.TWO_SYMMETRIC_GALAXIES,lk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,sk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,ak],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,ck],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,uk],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,J2],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,dk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,vk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,_k],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,fk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,gk],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,hk],[d.DIRECTED_PATH_IS_PARITY_LINE,pk]]);function bk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const s=Ck.get(r);if(!s)continue;const a=s(t,r);e+=a}return e}function md(t,e){const r=e.cells.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return at(r)}function Ed(t,e){const n=e.map(s=>t.getCell(s.r,s.c)).filter(s=>!!s);return`[${at(n.slice(1)).join(",")}]`}function Dp(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]";for(const c of r.lines){const u=Ed(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function Ok(t,e,n,r){let i="";const s=md(e,r);if(s.length===1){const a=s[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${Ed(e,u)}, ${a});
`;i+=v}}return i}function Ik(t,e,n,r){let i="";const s=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=me(s,X.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=me(u.slice(1),X.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return i+=Dp(t,e,n,r),i}function wk(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=Ed(e,u),v=`constraint bulbous_arrow_p(${a}, ${_});
`;i+=v}return i}const Lk=new Map([[d.ARROW,Dp],[d.AVERAGE_ARROW,Ok],[d.BULBOUS_ARROW,wk],[d.CHAOS_CONSTRUCTION_ARROW,Ik]]);function yk(t,e,n,r){let i="";const s=Lk.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function Qr(t,e){const n=Ft(t,e.cells);return at(n)}function kp(t,e,n){const i=`[${Qr(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function al(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Cd(t,e,n,r,i){const a=`[${Qr(e,r).join(",")}]`,c=r.value,u=al(t,c,n);if(!u)return"";const _=u[1];let v=u[0];return v+=`constraint ${i}(${a}, ${_});
`,v}function Ak(t,e,n,r){const i=Qr(e,r),s=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=al(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${s}, ${u});
`,_}function Nk(t,e,n,r){const i=Qr(e,r),s=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=al(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${s}, ${u});
`,_}function Sk(t,e,n,r){return Cd(t,e,n,r,"sum_cage_p")}function xk(t,e,n,r){return kp(e,r,"parity_balance_cage_p")}function Rk(t,e,n,r){return kp(e,r,"sum_cage_look_and_say_p")}function Tk(t,e,n,r){return Cd(t,e,n,r,"divisible_killer_cage_p")}function Dk(t,e,n,r){return Cd(t,e,n,r,"spotlight_cage_p")}function kk(t,e,n,r){const s=`[${Qr(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${s}, ${c}, ALLOWED_DIGITS);
`}return""}function Gk(t,e,n,r){const s=`[${Qr(e,r).join(",")}]`,a=r.value;let c="";const u=al(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${s}) == ${m};
`}const _=r.cells,v=Ft(e,_),g=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(b=>{!v.includes(b)&&!g.includes(b)&&g.push(b)});const p=me(g,X.BOARD);return c+=`constraint vaulted_cage_p(${s}, ${p});
`,c}function Gp(t,e,n,r,i){const s=Ft(e,r.cells),a=me(s,X.BOARD),c=me(s,X.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${a}, ${c}, ${_});
`}return""}function Mk(t,e,n,r){return Gp(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function Uk(t,e,n,r){return Gp(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function Fk(t,e,n,r){const i=Ft(e,r.cells),s=me(i,X.BOARD),a=me(i,X.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${s}, ${a}, ${u});
`}return""}function $k(t,e,n,r){const i=Ft(e,r.cells),s=me(i,X.BOARD),a=me(i,X.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${s}, ${a}, ${u});
`}return""}function Pk(t,e){let n="";const r=pd(e);for(const i of r.values())if(!(i.length<=1))for(const[s,a]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${Qr(t,s).join(",")}]`,v=`[${Qr(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const Bk=new Map([[d.KILLER_CAGE,Ak],[d.INVERTED_KILLER_CAGE,Nk],[d.SUM_CAGE,Sk],[d.PARITY_BALANCE_CAGE,xk],[d.SUM_CAGE_LOOK_AND_SAY,Rk],[d.DIVISIBLE_KILLER_CAGE,Tk],[d.SPOTLIGHT_CAGE,Dk],[d.UNIQUE_DIGITS_CAGE,kk],[d.VAULTED_CAGE,Gk],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,Mk],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,Uk],[d.DOUBLERS_KILLER_CAGE,Fk],[d.NEGATORS_KILLER_CAGE,$k]]);function Hk(t,e,n,r){let i="";const s=Bk.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=Pk(e,a);i+=c}return i}function Wk(t,e,n,r){const i=e.r+.5,s=e.c+.5,a=n-i,c=r-s,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function zk(t,e){const n=[],r=[],i=[];for(const s of t.getAllCells()){const a=Wk(t,s,e.r,e.c);a&&!n.includes(a)?(n.push(s),r.push(a)):r.includes(s)||i.push(s)}return[n,r,i]}function Yk(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,v=c+1,[g,p,m]=zk(e,_),C=me(g,X.GALAXY_REGIONS),b=me(p,X.GALAXY_REGIONS),O=me(m,X.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${C}, ${b}, ${O}, ${v});
`,r+=`constraint connected_region(${X.GALAXY_REGIONS}, ${v});
`;const w=u.value;if(!w)continue;const x=parseInt(w);r+=`constraint galaxy_sum_p(${X.BOARD}, ${X.GALAXY_REGIONS}, ${x}, ${v});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${X.GALAXY_REGIONS}, ${a});
`,r}function jk(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Vk(t,e,n,r){const i=r.cell,[s,a]=[i.r,i.c],c=r.value,u=jk(t,c,n);if(!u)return"";const _=u[1];let v=u[0],g=[];if(s%1===0&&a%1===0?g=td(i).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0):(s%1===.5&&a%1===0||s%1===0&&a%1===.5)&&(g=rd(i).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0)),!g.length)return"";const p=me(g,X.BOARD),m=me(g,X.YIN_YANG);return v+=`constraint conditional_sum_f(${p}, ${m}, 1) == ${_};
`,v}const Kk=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,Vk]]),Xk=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,Yk]]);function qk(t,e,n,r){let i="";const s=Xk.get(n),a=Kk.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(s){const c=Object.values(r),u=s(t,e,c);i+=u}return i}function Fg(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return at(n)}function Zk(t,e){const r="["+Fg(t,e.cells).join(",")+"]",s="["+Fg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${s});
`}const Qk=new Map([[d.CLONE_REGION,Zk]]);function Jk(t,e,n,r){return sl(e,n,r,Qk)}function bd(t,e){const n=Ft(t,e.cells);return at(n)}function Od(t,e,n){const i=`[${bd(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Mp(t,e,n,r=""){const s=`[${bd(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${s}, ${c});
`}return""}function e3(t,e,n,r){const s=`[${bd(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=Tp(a);if(!c)return"";let u="";for(const v of c){const g=parseInt(v);Number.isNaN(g)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${s}, ${_});
`,u}function t3(t,e,n,r){return Mp(e,r,"corner_sum_p")}function n3(t,e,n,r){return Mp(e,r,"corner_even_count_p")}function r3(t,e,n,r){return Od(e,r,"corner_sum_of_three_equals_the_other_p")}function i3(t,e,n,r){return Od(e,r,"equal_diagonal_differences_p")}function o3(t,e,n,r){return Od(e,r,"product_square_p")}const s3=new Map([[d.QUADRUPLE,e3],[d.CORNER_SUM,t3],[d.CORNER_EVEN_COUNT,n3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,r3],[d.PRODUCT_SQUARE,o3],[d.EQUAL_DIAGONAL_DIFFERENCES,i3]]);function a3(t,e,n,r){let i="";const s=s3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function ll(t,e){const n=Ft(t,e.cells);return at(n)}function l3(t,e,n){const r=ll(t,e),[i,s]=r;return`constraint ${n}(${i}, ${s});
`}function c3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function cl(t,e,n,r,i,s=""){var m;const a=ll(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:s,v=c3(t,_,n);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint ${i}(${c}, ${u}, ${g});
`,p}function u3(t,e,n,r){const i=ll(e,r),[s,a]=i;return r.value==="V"||r.value==="v"?`constraint ${s} + ${a} = 5;
`:`constraint ${s} + ${a} = 10;
`}function d3(t,e,n,r){return cl(t,e,n,r,"ratio_p","2")}function _3(t,e,n,r){return cl(t,e,n,r,"abs_difference","1")}function $g(t,e,n,r){const i=ll(e,r),[s,a]=i,c=r.value;return c==="<"?`constraint ${s} < ${a};
`:c===">"?`constraint ${s} > ${a};
`:""}function f3(t,e,n,r){return cl(t,e,n,r,"edge_sum_p")}function g3(t,e,n,r){return cl(t,e,n,r,"edge_modulo_p")}function h3(t,e,n,r){return l3(e,r,"edge_factor_p")}function p3(t,e,n,r){const i=Ft(e,r.cells),[s,a]=at(i),[c,u]=i;let _="";if(c.r==u.r){const p=e.getRow(c.r)[0];_=Le(p)}else if(c.c==u.c){const p=e.getCol(c.c)[0];_=Le(p)}return _?`constraint abs(${s} - ${a}) == ${_};
`:""}function v3(t,e,n,r){const i=Ft(e,r.cells),[s,a]=at(i),c=ws(i,X.YIN_YANG),[u,_]=c;return`constraint yin_yang_kropki_p(${s}, ${a}, ${u}, ${_});
`}function m3(t,e,n,r){const i=Ft(e,r.cells),[s,a]=at(i),c=ws(i,X.YIN_YANG),[u,_]=c;return`constraint yin_yang_white_kropki_p(${s}, ${a}, ${u}, ${_});
`}function ul(t,e,n){const r=Ft(t,e.cells),i=ws(r,n),[s,a]=i;return`constraint ${s} != ${a};
`}function E3(t,e,n,r){return ul(e,r,X.UNKNOWN_REGIONS)}function C3(t,e,n,r){return ul(e,r,X.FILLOMINO_REGIONS)}function b3(t,e,n,r){return ul(e,r,X.SUGURU_REGIONS)}function O3(t,e,n,r){return ul(e,r,X.CAVE_SHADING)}const I3=new Map([[d.XV,u3],[d.DIFFERENCE,_3],[d.RATIO,d3],[d.EDGE_INEQUALITY,$g],[d.ONE_WAY_DOOR,$g],[d.EDGE_SUM,f3],[d.EDGE_MODULO,g3],[d.EDGE_FACTOR,h3],[d.XY_DIFFERENCES,p3],[d.YIN_YANG_KROPKI,v3],[d.YIN_YANG_WHITE_KROPKI,m3],[d.FILLOMINO_REGION_BORDER,C3],[d.UNKNOWN_REGION_BORDER,E3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,b3],[d.EDGE_CAVE_ONE_OF_EACH,O3]]);function w3(t,e,n,r){let i="";const s=I3.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function L3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Ls(t,e,n=!1){let r=Ft(t,e.cells);return n&&(r=[...new Set(r)]),at(r)}function ft(t,e,n,r=!1){const s=`[${Ls(t,e,r).join(",")}]`;return`constraint ${n}(${s});
`}function nr(t,e,n,r,i,s=""){var p;const c=`[${Ls(e,r).join(",")}]`,u=(p=r.value)!=null&&p.length?r.value:s,_=L3(t,u,n);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${i}(${c}, ${v});
`,g}function Id(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),s=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),s=!0);const c=`[${at(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${s});
`}function y3(t,e,n,r){return ft(e,r,"renban",!0)}function A3(t,e,n,r){return ft(e,r,"double_renban_p",!0)}function N3(t,e,n,r){return ft(e,r,"renrenbanban_p",!0)}function S3(t,e,n,r){return ft(e,r,"knabner_p",!0)}function x3(t,e,n,r){return ft(e,r,"renban_or_nabner_line_p",!0)}function R3(t,e,n,r){return ft(e,r,"out_of_order_consecutive_line_p")}function T3(t,e,n,r){return nr(t,e,n,r,"whispers","5")}function D3(t,e,n,r){return`constraint whispers(${`[${Ls(e,r).join(",")}]`}, 4);
`}function k3(t,e,n,r){return ft(e,r,"strictly_increasing")}function G3(t,e,n,r){return ft(e,r,"fuzzy_thermo_p")}function M3(t,e,n,r){return ft(e,r,"increasing")}function U3(t,e,n,r){return nr(t,e,n,r,"custom_thermo_p")}function F3(t,e,n,r){return ft(e,r,"palindrome")}function $3(t,e,n,r){return nr(t,e,n,r,"sum_line_p")}function P3(t,e,n,r){return ft(e,r,"xv_line_p")}function B3(t,e,n,r){return nr(t,e,n,r,"at_least_x_line_p","10")}function H3(t,e,n,r){return nr(t,e,n,r,"product_line_p")}function W3(t,e,n,r){return nr(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function z3(t,e,n,r){return ft(e,r,"adjacent_multiples_line_p")}function Y3(t,e,n,r){return ft(e,r,"index_line_p")}function j3(t,e,n,r){return ft(e,r,"zipper_line_p")}function V3(t,e,n,r){return Id(e,r,"segmented_sum_line_p")}function K3(t,e,n,r){return ft(e,r,"segmented_sum_and_renban_line_p")}function X3(t,e,n,r){return Id(e,r,"n_consecutive_renban_line_p")}function q3(t,e,n,r){return Id(e,r,"n_consecutive_fuzzy_sum_line_p")}function Z3(t,e,n,r){const i=Ft(e,r.cells);let s="";const a=[];for(let u=0;u<i.length;u++){const _=i[u],v=e.getRow(_.r),g=me(v,X.BOARD),p=`cycle_${n}_${u}`;a.push(p);const m=_.c+1;s+=`var int: ${p} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return s+=`constraint strictly_increasing(${c});
`,s}function Q3(t,e,n,r){return ft(e,r,"adjacent_differences_count_line_p")}function J3(t,e,n,r){return ft(e,r,"same_parity_line_p")}function e5(t,e,n,r){return nr(t,e,n,r,"renban_or_whispers_p","5")}function t5(t,e,n,r){return ft(e,r,"alldifferent",!0)}function n5(t,e,n,r){return ft(e,r,"repeated_digits_line_p")}function r5(t,e,n,r){return ft(e,r,"superfuzzy_arrow_p")}function i5(t,e,n,r){return ft(e,r,"ambiguous_arrow_p",!0)}function o5(t,e,n,r){return ft(e,r,"headless_arrow_p")}function s5(t,e,n,r){return nr(t,e,n,r,"unimodular_line_p","3")}function a5(t,e,n,r){return nr(t,e,n,r,"modular_line_p","3")}function l5(t,e,n,r){return nr(t,e,n,r,"modular_or_unimodular_line_p","3")}function c5(t,e,n,r){return ft(e,r,"arithmetic_sequence_line_p")}function u5(t,e,n,r){return ft(e,r,"odd_even_oscillator_line_p")}function d5(t,e,n,r){return nr(t,e,n,r,"high_low_oscillator_line_p","5")}function _5(t,e,n,r){return ft(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function f5(t,e,n,r){return ft(e,r,"look_and_say_line_p",!0)}function g5(t,e,n,r){const i=Ft(e,r.cells);function s(g){const p=[];let m=null;for(const C of g)C.r!=m?(p.push([C]),m=C.r):p[p.length-1].push(C);return p}const a=s(i);if(a.length<2)return"";const c=a[0],_=`[${at(c).join(",")}]`;let v="";for(let g=1;g<a.length;g++){const p=a[g],C=`[${at(p).join(",")}]`;v+=`constraint sum(${C}) == sum(${_});
`}return v}function h5(t,e,n,r){return ft(e,r,"between_line_p")}function p5(t,e,n,r){return ft(e,r,"tightrope_line_p")}function v5(t,e,n,r){return ft(e,r,"double_arrow_p")}function m5(t,e,n,r){return ft(e,r,"split_peas_p")}function E5(t,e,n,r){return ft(e,r,"parity_count_line_p")}function C5(t,e,n,r){return ft(e,r,"product_of_ends_equals_sum_of_line_p")}function Up(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const s=i.region;n!==s&&(r.length&&e.push(r),r=[]),r.push(i),n=s}return r.length&&e.push(r),e}function b5(t,e,n,r){let i="";const s=Ft(e,r.cells),a=Up(s);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const v=`constraint sum(${me(u,X.BOARD)}) == ${c};
`;i+=v}return i}function O5(t,e,n,r){return`constraint entropic_line_p(${`[${Ls(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function I5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Ls(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function w5(t,e,n,r){return ft(e,r,"peapods_p")}function L5(t,e,n,r){const i=Ft(e,r.cells),s=me(i,X.BOARD),a=me(i,X.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${s}, ${a}, ${u});
`}function y5(t,e,n,r){const i=Ft(e,r.cells),s=me(i,X.BOARD),a=me(i,X.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${s}, ${a}, ${u});
`}function wd(t,e,n){const r=Ft(t,e.cells),i=me(r,X.BOARD),s=me(r,X.YIN_YANG);return`constraint ${n}(${i}, ${s});
`}function A5(t,e,n,r){return wd(e,r,"yin_yang_unshaded_entropic_line_p")}function N5(t,e,n,r){return wd(e,r,"yin_yang_indexing_line_coloring_p")}function S5(t,e,n,r){return wd(e,r,"yin_yang_region_sum_line_p")}function x5(t,e,n,r){const i=Ft(e,r.cells),s=me(i,X.VALUES_GRID),a=me(i,X.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${s}, ${a});
`}function Ld(t,e,n){const r=Ft(t,e.cells),i=me(r,X.VALUES_GRID);return`constraint ${n}(${i});
`}function R5(t,e,n,r){return Ld(e,r,"between_line_p")}function T5(t,e,n,r){return Ld(e,r,"double_arrow_p")}function D5(t,e,n,r){return Ld(e,r,"strictly_increasing")}function k5(t,e,n,r){const i=Ft(e,r.cells),s=Up(i);if(s.sort((_,v)=>v.length-_.length),s.length<=1)return"";let a="";const c=s[0],u=me(c,X.VALUES_GRID);for(const _ of s.slice(1)){const v=me(_,X.VALUES_GRID),g=`constraint subset_p(${u}, ${v});
`;a+=g}return a}const G5=new Map([[d.THERMOMETER,k3],[d.FUZZY_THERMOMETER,G3],[d.SLOW_THERMOMETER,M3],[d.CUSTOM_THERMOMETER,U3],[d.RENBAN_LINE,y3],[d.DOUBLE_RENBAN_LINE,A3],[d.RENRENBANBAN_LINE,N3],[d.NABNER_LINE,S3],[d.WHISPERS_LINE,T3],[d.DUTCH_WHISPERS,D3],[d.RENBAN_OR_WHISPERS_LINE,e5],[d.RENBAN_OR_NABNER_LINE,x3],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,R3],[d.N_CONSECUTIVE_RENBAN_LINE,X3],[d.PALINDROME,F3],[d.SUM_LINE,$3],[d.PRODUCT_LINE,H3],[d.XV_LINE,P3],[d.AT_LEAST_X_LINE,B3],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,W3],[d.SAME_PARITY_LINE,J3],[d.ADJACENT_MULTIPLES_LINE,z3],[d.ADJACENT_DIFFERENCES_COUNT_LINE,Q3],[d.LOOK_AND_SAY_LINE,f5],[d.ROW_SUM_LINE,g5],[d.INDEX_LINE,Y3],[d.ZIPPER_LINE,j3],[d.SEGMENTED_SUM_LINE,V3],[d.SEGMENTED_SUM_AND_RENBAN_LINE,K3],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,q3],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,_5],[d.SUPERFUZZY_ARROW,r5],[d.AMBIGUOUS_ARROW,i5],[d.HEADLESS_ARROW,o5],[d.ARITHMETIC_SEQUENCE_LINE,c5],[d.ODD_EVEN_OSCILLATOR_LINE,u5],[d.HIGH_LOW_OSCILLATOR_LINE,d5],[d.UNIQUE_VALUES_LINE,t5],[d.REPEATED_DIGITS_LINE,n5],[d.UNIMODULAR_LINE,s5],[d.MODULAR_LINE,a5],[d.MODULAR_OR_UNIMODULAR_LINE,l5],[d.REGION_SUM_LINE,b5],[d.ENTROPIC_LINE,O5],[d.ENTROPIC_OR_MODULAR_LINE,I5],[d.ROW_CYCLE_THERMOMETER,Z3],[d.PEAPODS,w5],[d.BETWEEN_LINE,h5],[d.TIGHTROPE_LINE,p5],[d.DOUBLE_ARROW_LINE,v5],[d.SPLIT_PEAS,m5],[d.PARITY_COUNT_LINE,E5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,C5],[d.DOUBLERS_THERMOMETER,D5],[d.DOUBLERS_BETWEEN_LINE,R5],[d.DOUBLERS_DOUBLE_ARROW_LINE,T5],[d.INDEXER_CELLS_REGION_SUBSET_LINE,k5],[d.YIN_YANG_SHADED_WHISPERS_LINE,L5],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,A5],[d.YIN_YANG_UNSHADED_MODULAR_LINE,y5],[d.YIN_YANG_REGION_SUM_LINE,S5],[d.YIN_YANG_INDEXING_LINE_COLORING,N5],[d.GOLDILOCKS_ZONE_REGION_SUM,x5]]);function M5(t,e,n,r){let i="";const s=G5.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function dl(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return at(i)}function ys(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let s="";return(!r||r.outside)&&(s=`R${n.r}C${n.c}`,s=s.replace("-","m")),e||(e=s),t.getOrSetSharedVar(e,s,i)}function qn(t,e,n,r){const i=n.cell,s=e.getCell(i.r,i.c),c=`[${dl(e,n).join(",")}]`,u=n.value,_=ys(t,u,i,s);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${v});
`,g}function U5(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),c=`[${dl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),p=ys(t,u,i,s);if(!p)return"";const m=p[1];let C=p[0];return C+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C}function F5(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),c=`[${dl(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),p=ys(t,u,i,s);if(!p)return"";const m=p[1];let C=p[0];const b=`var_bool_${n}_0`,O=`var_bool_${n}_1`;return C+=`var bool: ${b} = sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,C+=`var bool: ${O} = x_sum_p(${c}, ${m});
`,C+=`constraint 'xor'(${b}, ${O});
`,C}function $5(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),a=dl(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,v=ys(t,_,i,s);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint x_index_p(${c}, ${u}, ${g});
`,p}function P5(t,e,n,r){return qn(t,e,r,"x_sum_p")}function B5(t,e,n,r){return qn(t,e,r,"shortsighted_x_sum_p")}function H5(t,e,n,r){return qn(t,e,r,"broken_x_sum_p")}function W5(t,e,n,r){return qn(t,e,r,"shifted_x_sum_p")}function z5(t,e,n,r){return qn(t,e,r,"skyscrapers_p")}function Y5(t,e,n,r){return qn(t,e,r,"x_sum_skyscrapers_p")}function j5(t,e,n,r){return qn(t,e,r,"battlefield_p")}function V5(t,e,n,r){return qn(t,e,r,"rising_streak_p")}function K5(t,e,n,r){return qn(t,e,r,"outside_consecutive_sum_p")}function X5(t,e,n,r){const i=r.cell,s=r.direction,a=e.getCellsInDirection(i.r,i.c,s),c=me(a,X.BOARD),u=me(a,X.CELL_CENTER_LOOP),_=r.value;if(_){const v=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${v});
`}return""}function q5(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=me(c,X.BOARD),_=me(c,X.UNKNOWN_REGIONS),v=r.value,g=ys(t,v,i,s);if(!g)return"";const p=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${p});
`,m}function Z5(t,e,n,r){return qn(t,e,r,"little_killer_sum_p")}function Q5(t,e,n,r){return qn(t,e,r,"little_killer_product_p")}function J5(t,e,n,r){return qn(t,e,r,"x_omit_little_killer_sum_p")}function eG(t,e,n,r){const i=r.cell,s=r.direction,a=e.getCellsInDirection(i.r,i.c,s),c=me(a,X.BOARD),u=me(a,X.YIN_YANG),_=r.value;if(_){const v=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${v});
`}return""}function tG(t,e,n,r){const i=r.cell,s=r.direction,a=e.getCellsInDirection(i.r,i.c,s),c=me(a,X.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}const nG=new Map([[d.SANDWICH_SUM,U5],[d.X_SUM,P5],[d.SHORTSIGHTED_X_SUM,B5],[d.BROKEN_X_SUM,H5],[d.SHIFTED_X_SUM,W5],[d.SKYSCRAPERS,z5],[d.X_SUM_SKYSCRAPERS,Y5],[d.X_INDEX,$5],[d.BATTLEFIELD,j5],[d.SANDWICH_SUM_XOR_X_SUM,F5],[d.RISING_STREAK,V5],[d.OUTSIDE_CONSECUTIVE_SUM,K5],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,eG],[d.LOOPWICHES,X5],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,q5],[d.LITTLE_KILLER_SUM,Z5],[d.LITTLE_KILLER_PRODUCT,Q5],[d.X_OMIT_LITTLE_KILLER_SUM,J5],[d.NEGATORS_LITTLE_KILLER_SUM,tG]]);function rG(t,e,n,r){let i="";const s=nG.get(n);if(s)for(const[a,c]of Object.entries(r)){const u=s(t,e,a,c);i+=u}return i}function iG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let s=t.getCellsInDirection(r.r,r.c,i);s=[r,...s];const a=me(s,X.SASHIGANE),c=me(s,X.SASHIGANE_BENDS),u=Le(r),_=mt(r,X.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function oG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,s=t.getCellsInDirection(r.r,r.c,i),c="["+at(s).join(",")+"]",u=me(s,X.CELL_CENTER_LOOP),_=Le(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const sG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,iG],[d.THERMO_SIGHTLINE_LOOP_ARROW,oG]]);function aG(t,e,n,r){return sl(e,n,r,sG)}function Fp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const s=Le(i);return`constraint ${n}(${s});
`}function lG(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function $p(t,e,n,r=""){const i=e.cell,s=t.getCell(i.r,i.c);if(!s)return"";const a=Le(s);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function Co(t,e,n,r){const i=e.cell,s=t.getCell(i.r,i.c);if(!s)return"";const a=Le(s),u=ol(t,s).map(g=>me(g,n)),_=mt(s,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function cG(t,e,n,r){return Fp(e,r,"odd_p")}function uG(t,e,n,r){return Fp(e,r,"even_p")}function dG(t,e,n,r){return $p(e,r,"low_digit_p","5")}function _G(t,e,n,r){return $p(e,r,"high_digit_p","5")}function Pp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const s=Le(i),a=t.getNeighboorCells(i),c=me(a,X.BOARD);return`constraint ${n}(${c}) == ${s};
`}function fG(t,e,n,r){return Pp(e,r,"odd_count")}function gG(t,e,n,r){return Pp(e,r,"even_count")}function hG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getNeighboorCells(s);c.push(s);const u=me(c,X.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function pG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getOrthogonallyAdjacentCells(s);return`constraint sum_p(${me(c,X.BOARD)}, ${a});
`}function vG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getDiagonallyAdjacentCells(s);return`constraint sum_p(${me(c,X.BOARD)}, ${a});
`}function mG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=e.getRow(s.r),c=me(a,X.BOARD),u=s.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function EG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=e.getCol(s.c),c=me(a,X.BOARD),u=s.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function CG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=s.r+1,u=s.c+1;if(s.region!==null){const v=s.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${v};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function bG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const v=Le(a),g=Le(c),p=Le(u),m=Le(_);return`constraint groups_opposite_parity_p([${v},${g}], [${p},${m}]);
`}function yd(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const s=Le(i),[a,c,u,_]=gd(t,i);return`constraint ${n}(${s}, ${a}, ${c}, ${u}, ${_});
`}function OG(t,e,n,r){return yd(e,r,"is_watchtower_p")}function IG(t,e,n,r){return yd(e,r,"is_not_watchtower_p")}function wG(t,e,n,r){return yd(e,r,"farsight_p")}function LG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),[c,u,_,v]=gd(e,s);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${v}, 9);
`}function yG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getRow(s.r),u="["+at(c).join(",")+"]",_=e.getCol(s.c),v="["+at(_).join(",")+"]",[g,p]=[s.r+1,s.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${g}, ${p}, ${a});
`}function Bp(t,e,n){const r=Object.values(e);let i="";const s=r.map(c=>c.cell),a=new Set(s.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const v=Le(_),g=t.getOrthogonallyAdjacentCells(_).filter(C=>!a.has(C)),p=me(g,X.BOARD),m=`constraint ${n}(${p}, ${v});
`;i+=m}return i}function AG(t,e,n){return Bp(e,n,"maximum_p")}function NG(t,e,n){return Bp(e,n,"minimum_p")}function SG(t,e,n){const r=Object.values(n);let i="";const s=r.map(_=>_.cell),a=new Set(s.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function xG(t,e,n){const r=Object.values(n);let i="";const s=r.map(p=>p.cell),a=new Set(s.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p)),c=e.getAllCells().filter(p=>!a.has(p)),_=`${at([...a]).join(`,
	`)}`,g=`${at([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function RG(t,e,n){const r=Object.values(n);let i="";const s=r.map(g=>g.cell),a=new Set(s.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${at([...a]).join(`,
	`)}`,v=`${ws([...a],X.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${X.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${X.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const p=mt(g,X.COUNTING_CIRCLES_COLORS);i+=`constraint ${p} == 0;
`}for(const g of r){const p=g.cell,m=e.getCell(p.r,p.c);if(!m)continue;const C=Le(m),b=mt(m,X.COUNTING_CIRCLES_COLORS),O=g.value;O?i+=`constraint ${b} == ${O};
`:i+=`constraint ${b} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${C}, ${b}) == ${C};
`}return i+=`
`,i}function TG(t,e,n){const r=Object.values(n);let i="";const s=r.map(_=>_.cell),a=new Set(s.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function DG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s);return`constraint seen_even_count_p(${ol(e,s).map(v=>me(v,X.BOARD)).join(", ")}, ${a});
`}function kG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s);return`constraint seen_odd_count_p(${ol(e,s).map(v=>me(v,X.BOARD)).join(", ")}, ${a});
`}function GG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getNeighboorCells(s),u=[s,...c];return`constraint yin_yang_minesweeper_p(${me(u,X.YIN_YANG)}, ${a});
`}function MG(t,e,n,r){return Co(e,r,X.YIN_YANG,"yin_yang_seen_unshaded_p")}function UG(t,e,n,r){return Co(e,r,X.YIN_YANG,"yin_yang_seen_shaded_p")}function FG(t,e,n,r){return Co(e,r,X.YIN_YANG,"yin_yang_seen_same_shade_p")}function $G(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=mt(s,X.YIN_YANG),u=e.getOrthogonallyAdjacentCells(s),_=me(u,X.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function PG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getNeighboorCells(s);return`constraint count(${me(c,X.YIN_YANG)}, 1) == ${a};
`}function BG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=`two_contiguous_regions[${s.r},${s.c}]`,u=e.getRow(s.r),_=e.getCol(s.c),v=me(u,X.TWO_CONTIGUOUS_REGIONS),g=me(_,X.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${g}, ${a}, ${c});
`}function HG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getRow(s.r),u=e.getCol(s.c),_=me(c,X.UNKNOWN_REGIONS),v=me(u,X.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${v}, ${a});
`}function WG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=`nurimisaki[${s.r},${s.c}]`,c=e.getOrthogonallyAdjacentCells(s);let _=`constraint nurimisaki_unshaded_endpoint_p(${me(c,X.NURIMISAKI)}, ${a});
`;return _+=Co(e,r,X.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function zG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=mt(s,X.SASHIGANE),u=mt(s,X.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function YG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=mt(s,X.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function jG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint ${mt(s,X.CELL_CENTER_LOOP)} == 1;
`:""}function VG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint ${mt(s,X.CELL_CENTER_LOOP)} == 0;
`:""}function KG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=e.getNeighboorCells(s),u=[s,...c];return`constraint sum(${me(u,X.CELL_CENTER_LOOP)}) == ${a};
`}function XG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=mt(s,X.CAVE_SHADING),u=ol(e,s),_=[];for(const g of u){const p=me(g,X.CAVE_SHADING);_.push(p)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function qG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Le(s),v=mt(s,X.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(s),p=me(g,X.BOARD),m=me(g,X.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${p}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const C=e.getCellsByKnightMove(s),b=me(C,X.BOARD),O=me(C,X.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${b}, ${O}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[He.NE,He.NW,He.SE,He.SW],x=[];for(const z of w)e.getCellsInDirection(s.r,s.c,z).forEach(H=>x.push(H));const k=me(x,X.BOARD),U=me(x,X.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${U}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function ZG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=Le(s),v=mt(s,X.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(s),p=me(g,X.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${p}, ${v}) >= ${c};
`;const m=[He.N,He.S,He.E,He.W],C=[];for(const b of m){const O=e.getCellsInDirection(s.r,s.c,b);if(!O.length)continue;const w=me(O,X.BOARD),x=me(O,X.UNKNOWN_REGIONS),k=`in_arrow_${n}_${b}`,U=`in_arrow_${n}_${b}[1]`;C.push(U),u+=`array[index_set(${w})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${x}, ${k}, ${_}, ${v});
`}return u+=`constraint sum([${C.join(",")}]) == ${c};
`,u}function QG(t,e,n,r){return Co(e,r,X.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function JG(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint dpath_source == ${s.r*e.nCols+s.c+1};
`:""}function eM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint dpath_target == ${s.r*e.nCols+s.c+1};
`:""}function tM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint connect_four_red_p(${mt(s,X.CONNECT_FOUR)});
`:""}function nM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);return s?`constraint connect_four_yellow_p(${mt(s,X.CONNECT_FOUR)});
`:""}function rM(t,e,n){let r="",i=0;for(const[s,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const v=lG(t,_,s);if(!v)continue;const g=v[1];r+=v[0];const p=mt(u,X.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${X.BOARD}, ${X.NURIKABE_REGIONS}, ${p}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${X.NURIKABE_REGIONS})) == ${i+1};
`,r}function iM(t,e,n,r){return Co(e,r,X.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function oM(t,e,n,r){const i=r.cell,s=e.getCell(i.r,i.c);if(!s)return"";const a=Le(s),c=mt(s,X.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${X.NURIKABE_REGIONS}, ${c}, ${a});
`}function sM(t,e,n){let r="";const i=pd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,v]of u.flatMap((g,p)=>u.slice(p+1).map(m=>[g,m]))){const g=_.cell,p=v.cell,m=e.getCell(g.r,g.c),C=e.getCell(p.r,p.c);if(!m||!C)continue;const b=mt(m,X.BOARD),O=mt(C,X.BOARD);r+=`constraint ${b} == ${O};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=me(a,X.BOARD);return r+=`constraint alldifferent(${c});
`,r}const aM=new Map([[d.ODD,cG],[d.EVEN,uG],[d.LOW_DIGIT,dG],[d.HIGH_DIGIT,_G],[d.ODD_MINESWEEPER,fG],[d.EVEN_MINESWEEPER,gG],[d.DIAGONALLY_ADJACENT_SUM,vG],[d.ORTHOGONAL_SUM,pG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,hG],[d.FRIENDLY_CELL,CG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,bG],[d.WATCHTOWER,OG],[d.NOT_WATCHTOWER,IG],[d.FARSIGHT,wG],[d.RADAR,LG],[d.INDEXING_COLUMN,mG],[d.INDEXING_ROW,EG],[d.SANDWICH_ROW_COL_COUNT,yG],[d.SEEN_EVEN_COUNT,DG],[d.SEEN_ODD_COUNT,kG],[d.YIN_YANG_MINESWEEPER,GG],[d.YIN_YANG_SEEN_UNSHADED_CELLS,MG],[d.YIN_YANG_SEEN_SHADED_CELLS,UG],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,FG],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,$G],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,PG],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,BG],[d.SEEN_REGION_BORDERS_COUNT,HG],[d.NURIMISAKI_UNSHADED_ENDPOINTS,WG],[d.NURIKABE_SEEN_WATERWAY_CELLS,iM],[d.NURIKABE_ISLAND_SIZE_CELL,oM],[d.SASHIGANE_BEND_REGION_COUNT,zG],[d.SASHIGANE_REGION_SUM,YG],[d.CELL_ON_THE_LOOP,jG],[d.CELL_NOT_ON_THE_LOOP,VG],[d.COUNT_LOOP_NEIGHBOUR_CELLS,KG],[d.CAVE_CLUE,XG],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,qG],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,ZG],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,QG],[d.DIRECTED_PATH_START,JG],[d.DIRECTED_PATH_END,eM],[d.CONENCT_FOUR_RED,tM],[d.CONNECT_FOUR_YELLOW,nM]]),lM=new Map([[d.MAXIMUM,AG],[d.MINIMUM,NG],[d.COUNTING_CIRCLES,SG],[d.REVERSE_COUNTING_CIRCLES,xG],[d.COLORED_COUNTING_CIRCLES,RG],[d.UNIQUE_CELLS,TG],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,rM],[d.TELEPORT,sM]]);function cM(t,e,n,r){let i="";const s=aM.get(n),a=lM.get(n);if(s)for(const[c,u]of Object.entries(r)){const _=s(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function uM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=mt(r,X.UNKNOWN_REGIONS),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v),p=me(g,X.UNKNOWN_REGIONS);c.push(p)}return`constraint ${c.map(v=>`count_different(${v}, ${s})`).join(" + ")} == ${i};
`}function dM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=mt(r,X.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),v=me(_,X.BOARD),g=me(_,X.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${s}, ${v}, ${g}) == ${i};
`}return c}function _M(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),_=me(u,X.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function fM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=mt(r,X.YIN_YANG),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),g=me(v,X.YIN_YANG),p=me(v,X.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${s}, ${g}, ${p})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function gM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=e.directions,a=[];for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${me(_,X.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function hM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=e.directions,a=[];for(const u of s){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${me(_,X.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function pM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=mt(r,X.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),p=`count(${me(v,X.GALAXY_REGIONS)}, ${s})`;c.push(p)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function vM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),v="["+at(u).join(",")+"]";a+=`constraint hot_arrows_p(${v}, ${i});
`}return a}function mM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=e.directions;let a="";for(const c of s){const u=t.getCellsInDirection(r.r,r.c,c),_=me(u,X.BOARD);a+=`constraint cold_arrows_p(${_}, ${i});
`}return a}function EM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=Le(r),s=mt(r,X.CONNECT_FOUR),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v);c.push(...g)}return c.length===0?"":`constraint count(${me(c,X.CONNECT_FOUR)}, ${s}) == ${i};
`}const CM=new Map([[d.HOT_ARROWS,vM],[d.COLD_ARROWS,mM],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,uM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,dM],[d.LOOP_CELL_COUNT_ARROWS,hM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,fM],[d.YIN_YANG_COUNT_SHADED_CELLS,_M],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,pM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,gM],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,EM]]);function bM(t,e,n,r){return sl(e,n,r,CM)}function OM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function IM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function wM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}const LM=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,OM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,IM],[d.FORBIDDEN_KNIGHT_SUM,wM]]);function yM(t,e,n,r){return sl(e,n,r,LM)}const AM=[qk,cM,aG,bM,w3,a3,M5,yk,Hk,rG,Jk,yM];function NM(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[s,a]of r.entries())for(const c of AM){let u=c(e,i,s,a);u=_t(u,`${s}`),n+=u}return n}function SM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,s+=`constraint yin_yang_p(yin_yang);
`,s}function xM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,s+=`constraint nurimisaki_p(nurimisaki);
`,s}function RM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,s+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,s}function TM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,s}function DM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`
% Two Contiguous Regions
`,s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,s+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,s}function kM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const s=Math.max(r.nCols,r.nRows);let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s-1}: unknown_regions;
`,a+=`constraint unknown_sudoku_regions_p(unknown_regions, ${s});
`,a+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${s});
`,a}function GM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,s+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,s+=`constraint sashigane_adjacency_p(sashigane);
`,s+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,s+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,s+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,s}function MM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, true);
`,s}function UM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, false);
`,s}function FM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,s+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,s+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,s}function $M(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,s+=`constraint cell_center_loop_p(cell_center_loop, false);
`,s+=`constraint modular_loop_p(board, cell_center_loop);
`,s}function qi(t,e,n,r){const i=t.grid;let s="";s+=`% Exactly ${e} per row 
`;const a=i.nRows;for(let v=0;v<a;v++){const g=i.getRow(v),p=r(g);s+=`constraint count_eq(${p}, ${n}, ${e});
`}s+=`
% Exactly ${e} per column 
`;const c=i.nCols;for(let v=0;v<c;v++){const g=i.getCol(v),p=r(g);s+=`constraint count_eq(${p}, ${n}, ${e});
`}if(!t.globalConstraints.get(d.UNKNOWN_REGIONS)){s+=`
% Exactly ${e} per region 
`;const v=i.getUsedRegions();for(const g of v){const p=i.getRegion(g),m=r(p);s+=`constraint count_eq(${m}, ${n}, ${e});
`}}return s}function PM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,s+=qi(n,1,!0,a=>me(a,X.DOUBLERS)),s+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,s+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,s}function BM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,a+=qi(n,1,!0,c=>me(c,X.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${s}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${s});
`,a}function HM(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,a+=`constraint fillomino_p(board, ${s});
`,a}function WM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=X.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${s};
`,a+=qi(n,2,!0,c=>me(c,s)),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${s}, values_grid);
`,a}function zM(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=X.CAVE_SHADING,a=X.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${s}, ${a});
`,c}function YM(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=X.CAVE_SHADING,a=X.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${s}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${X.BOARD}, ${c});
`,u}function jM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=X.GALAXY_REGIONS,a=X.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${s};
`,u+=`constraint galaxy_restrict_numbering_p(${s});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${s}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${s}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${s});
`,u}function VM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,s+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,s}function KM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="";return s+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,s+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,s+=`constraint goldilocks_zone_p(goldilocks_regions);
`,s+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,s}function XM(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=Ug.size;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: tilling_regions;
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${s}: tilling_placing_grid;
`,a+=`constraint count_different(array1d(tilling_placing_grid), 0) >= 5;
`;for(const[c,u]of Ug.entries()){const _=u.length,v=u[0].length,g=`pentomino_${c}`;a+=`array[1..${_}, 1..${v}] of 0..1: ${g} = ${hd(u)};
`,a+=`constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${g}, ${c});
`}return a}function qM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=X.LITS_SHADING,a=X.LITS_REGIONS;let c="";c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,c+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,c+=`constraint lits_shading_p(${s});
`,c+=`constraint lits_shading_ids_p(${s}, ${a});
`,c+=`constraint lits_region_and_ids_p(${X.BOARD_REGIONS}, ${a});
`,c+=`constraint lits_tetromino_shapes_p(${a});
`;const u=r.getUsedRegions();u.size&&(c+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const _ of u){const v=r.getRegion(_),p=`constraint count_eq(${me(v,X.LITS_SHADING)}, 1, 4);
`;c+=p}return c}function ZM(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=X.LITS_SHADING,a=X.LITS_REGIONS,c=X.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${s};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${s});
`,u+=`constraint lits_shading_ids_p(${s}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${s});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of _){const g=r.getRegion(v),m=`constraint count_eq(${me(g,X.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function QM(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s=X.LITS_SHADING,a=X.STAR_BATTLE,c=X.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=qi(n,2,1,_=>me(_,X.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=qi(n,1,1,_=>me(_,X.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=qi(n,1,2,_=>me(_,X.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${s}, ${c});
`,u}function Ut(t,e,n){return t*n+e+1}function JM(t){const e=t.grid;function n(c,u){const _=[],v=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const p=Ut(u.r+g,u.c,e.nCols);_.push([v,p]),_.push([p,v])}return _}function r(c,u){const _=[],v=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const p=Ut(u.r,u.c+g,e.nCols);_.push([v,p]),_.push([p,v])}return _}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=td(_).map(C=>e.getCell(C.r,C.c)).filter(C=>C!==void 0);let p=Ut(g[0].r,g[0].c,e.nCols),m=Ut(g[3].r,g[3].c,e.nCols);i.push([p,m]),i.push([m,p]),p=Ut(g[1].r,g[1].c,e.nCols),m=Ut(g[2].r,g[2].c,e.nCols),i.push([p,m]),i.push([m,p])}for(let _=0;_<u.length-1;_++){const v=tx(Hh(u[_],u[_+1]),.5),p=rd(v).map(b=>e.getCell(b.r,b.c)).filter(b=>b!==void 0);if(p.length!==2)continue;const[m,C]=p;if(m.r===C.r){let b=n(m,C);i.push(...b),b=n(C,m),i.push(...b)}else if(m.c===C.c){let b=r(m,C);i.push(...b),b=r(C,m),i.push(...b)}}}return i}function eU(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const s of Object.values(i)){const c=s.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,v=s.value,g=Ut(u.r,u.c,e.nCols),p=Ut(_.r,_.c,e.nCols);v==="<"?n.push([g,p]):v===">"&&n.push([p,g])}return n}function tU(t){const e=[];for(const n of t.getAllCells()){const r=Ut(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const s of i){const a=Ut(s.r,s.c,t.nCols);e.push([r,a])}}return e}function nU(t){const e=t.grid,n=[],r=[],s=t.localConstraints.get(d.TELEPORT),a=s?Object.values(s):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(s){const _=pd(a);let v=1;for(const g of _.values())if(!(g.length<=1)){for(const[p,m]of g.flatMap((C,b)=>g.slice(b+1).map(O=>[C,O]))){const C=Ut(p.cell.r,p.cell.c,e.nCols),b=Ut(m.cell.r,m.cell.c,e.nCols);n.push([C,b]),n.push([b,C]),u[p.cell.r][p.cell.c]=v,u[m.cell.r][m.cell.c]=v}for(const p of g){const m=Ut(p.cell.r,p.cell.c,e.nCols);r.push(m)}v++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function rU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let s="",a=tU(r);const c=JM(n),u=eU(n);c.push(...u);const _=n.localConstraints;a=a.filter(w=>!c.some(x=>w[0]===x[0]&&w[1]===x[1]));const v=nU(n);if(v.tp_edges.length){a.push(...v.tp_edges);const w=hd(v.tp_arr),x=v.tp_count;s+=`
% teleports grid
`,s+=`array[ROW_IDXS, COL_IDXS] of 0..${x}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,p=a.length,m="["+a.map(w=>w[0]).join(",")+"]",C="["+a.map(w=>w[1]).join(",")+"]";s+=`array[int] of int: dpath_from = ${m};
`,s+=`array[int] of int: dpath_to = ${C};
`,s+=`var 1..${g}: dpath_source;
`,s+=`var 1..${g}: dpath_target;
`,s+=`array[1..${g}] of var bool: dpath_ns;
`,s+=`array[1..${p}] of var bool: dpath_es;
`,s+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,s+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let x=0;x<r.nCols-1;x++){const k=r.getCell(w,x),U=r.getCell(w,x+1),z=r.getCell(w+1,x),Y=r.getCell(w+1,x+1);if(!k||!U||!z||!Y)continue;const H=Ut(k.r,k.c,r.nCols),q=Ut(U.r,U.c,r.nCols),ne=Ut(z.r,z.c,r.nCols),ce=Ut(Y.r,Y.c,r.nCols),ie=[[H,ce],[ce,H],[q,ne],[ne,q]].map(Ee=>a.findIndex(Ce=>Ee[0]===Ce[0]&&Ee[1]===Ce[1])).filter(Ee=>Ee!==-1);if(ie.length){const Ee=ie.map(Ce=>`dpath_es[${Ce+1}]`).join(",");s+=`constraint sum([${Ee}]) <= 1;
`}}const b=_.get(d.TELEPORT),O=b?Object.values(b):[];if(v.tp_count>0){s+=`
% At most 1 edge per teleporter
`;for(const w of O){const x=w.cell,k=r.getCell(x.r,x.c);if(!k)continue;const U=r.getNeighboorCells(k),z=Ut(k.r,k.c,r.nCols),Y=[];for(const q of U){if(O.some(ee=>ee.cell.r===q.r&&ee.cell.c==q.c&&ee.value===w.value))continue;const ce=Ut(q.r,q.c,r.nCols);Y.push([z,ce]),Y.push([ce,z])}const H=Y.map(q=>a.findIndex(ne=>q[0]===ne[0]&&q[1]===ne[1])).filter(q=>q!==-1);if(H.length){const q=H.map(ne=>`dpath_es[${ne+1}]`).join(",");s+=`constraint sum([${q}]) <= 1;
`}}}return s}function iU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${s};
`,a+=`constraint chaos_construction_suguru_p(board, ${s});
`,a}function oU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const s="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${s};
`,a}function sU(t,e){let n="";return n+=`constraint connect_four_draw_p(${X.CONNECT_FOUR});
`,n}function aU(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${X.BOARD}, ${X.CONNECT_FOUR});
`,n}function lU(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${X.BOARD}, ${X.CONNECT_FOUR}, 3);
`,n}const cU=new Map([[d.FILLOMINO,HM],[d.CAVE,zM],[d.GALAXIES,jM],[d.YIN_YANG,SM],[d.NURIMISAKI,xM],[d.NURIKABE,RM],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,TM],[d.TWO_CONTIGUOUS_REGIONS,DM],[d.UNKNOWN_REGIONS,kM],[d.SASHIGANE,GM],[d.CELL_CENTER_LOOP_NO_TOUCHING,MM],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,UM],[d.NOT_LOOP_SIZED_REGIONS,FM],[d.MODULAR_LOOP,$M],[d.DOUBLERS,PM],[d.NEGATORS,BM],[d.GOLDILOCKS_ZONE,KM],[d.NEXUS,VM],[d.INDEXER_CELLS,WM],[d.PENTOMINO_TILLING,XM],[d.LITS,qM],[d.CAVE_LITS,ZM],[d.LITS_BLACK_WHITE_STAR_BATTLE,QM],[d.RENBAN_CAVES,YM],[d.MAZE_DIRECTED_PATH,rU],[d.CHAOS_CONSTRUCTION_SUGURU,iU],[d.CONNECT_FOUR,oU],[d.CONNECT_FOUR_DRAW,sU],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,aU],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,lU]]);function uU(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,s]of r.entries()){if(!s)continue;const a=cU.get(i);if(!a)continue;let c=a(t,i);c=_t(c,`${i}`),e+=c}return e}function dU(){return`
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

`}function _U(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const s=`constraint ${Le(r)} = ${r.value};
`;n+=s}return n.length&&(n=`
% Given Digits
`+n),n}function Hp(t){const e=t.grid;let n=t.valid_digits;const r=new O2(t),[i,s]=[e.nRows,e.nCols],a=i*s;r.add(`include "globals.mzn";
`),r.add(`include "alldifferent.mzn";

`),r.add(dU());let u=`1..${Math.max(i,s)}`;return!!t.globalConstraints.get(d.FILLOMINO)?u=`1..${a}`:t.globalConstraints.get(d.HEXED_SUDOKU)?n=[...St.range(1,16)]:n&&(u="{"+n.join(",")+"}"),r.add(`set of int: ROW_IDXS = 0..${i-1};
`),r.add(`set of int: COL_IDXS = 0..${s-1};
`),r.add(`set of int: ALLOWED_DIGITS = ${u};
`),r.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),w2(r,e),r.add(_U(t)),r.add(mk(t)),r.add(Ek(t)),r.add(uU(r)),r.add(NM(t,r)),r.add(bk(t)),r.add(`
solve satisfy;`),r}const Pg=encodeURIComponent("4.3.5");let ar={workerURL:new URL(""+new URL("../assets/minizinc-worker.BI_6B-hN.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ci=[];let Qc;function Xo(){if(!Qc){const e=`importScripts(${JSON.stringify(ar.workerURL)});`;Qc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Qc);t.postMessage({wasmURL:ar.wasmURL?ar.wasmURL.toString():new URL(`./minizinc.wasm?version=${Pg}`,ar.workerURL).toString(),dataURL:ar.dataURL?ar.dataURL.toString():new URL(`./minizinc.data?version=${Pg}`,ar.workerURL).toString()}),Ci.push({worker:t,runCount:0})}function Wp(){for(;Ci.length<ar.numWorkers;)Xo()}async function fU(t){if(ar={...ar,...t},Ci.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Wp(),await Promise.race(Ci.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Ad{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Ad;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Wp();const i=[];let s=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;s={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Ci.pop();return a.postMessage({jsonStream:!0,files:s,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:s,runCount:a}=this._run(["--model-check-only"],i.options),c=[];s.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Ci.push({worker:s,runCount:a}):(s.terminate(),Xo()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:s,runCount:a}=this._run(["-c","--model-interface-only"],i.options),c=[];let u=null;s.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?Ci.push({worker:s,runCount:a}):(s.terminate(),Xo()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const s=["-c","--fzn",i],{worker:a}=this._run(s,n.options,[i]);Xo();let c={},u=!1,_=null;return a.onmessage=v=>{if(c[v.data.type])for(const g of c[v.data.type])g(v.data);switch(v.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,g){c[v]?c[v].add(g):c[v]=new Set([g])},off(v,g){c[v]&&c[v].delete(g)},then(v,g){const p=m=>{if(m.code===0)v(m.outputFiles[i]);else{const C=_?{message:_.message,...m}:m;if(!g)throw C;g(C)}};c.exit?c.exit.add(p):c.exit=new Set([p])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Xo();let s=null,a={},c=!1,u=null,_={},v="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const p of a[g.data.type])p(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":s||(s=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,v="SATISFIED";break;case"status":v=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,p){a[g]?a[g].add(p):a[g]=new Set([p])},off(g,p){a[g]&&a[g].delete(p)},then(g,p){const m=C=>{if(C.code===0)g({status:v,solution:u,statistics:_});else{const b=s?{message:s.message,...C}:C;if(!p)throw b;p(b)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var gU=re('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function hU(t,e){se(e,!1);const n=it(),r=()=>be(Rr,"$puzzleMetaStore",n);let i=M(e,"showModal",12,!1);function s(g,p,m){var C=document.createElement("a"),b=new Blob([g],{type:m});C.href=URL.createObjectURL(b),C.download=p,C.click(),URL.revokeObjectURL(C.href)}function a(){const g=ut(bs);return Hp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),p=Mg(g);navigator.clipboard.writeText(p)}function _(){const g=Da(r()),p=a();s(p,`${g}.mzn`,"text/plain")}function v(){const g=Da(r()),p=a(),m=Mg(p);s(m,`${g}.mzn`,"text/plain")}ge(),Dr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,p)=>{var m=gU(),C=K(m),b=F(C,2),O=F(b,2),w=F(O,2);W(m),Ue("click",C,c),Ue("click",b,u),Ue("click",O,_),Ue("click",w,v),R(g,m)},$$slots:{default:!0},$$legacy:!0}),ae()}var Sn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(Sn||{});const pU=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),zp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),vU=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),mU=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),EU=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),CU=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),bU=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),OU=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),Jc=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),IU=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),eu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),_l=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function wU(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=pU(t,n),s=zp(t,r);return[i,s]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),s=vU(t,n),a=mU(t,r,i);return[s,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=EU(t,n),s=CU(t,r);return[i,s]}if(e===d.FOG){const r=t.map(c=>c.fog),s=bU(t,n===1),a=OU(t,r);return[s,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=eu(t,n),i=eu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=eu(t,n),s=_l(t,r);return[i,s]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=Jc(t,n,e),i=Jc(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=Jc(t,n,e),s=IU(t,r,e);return[i,s]}}function Ho(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),dn.update(i=>i)}function eo(t){switch(t.type){case Sn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.DIGIT,n,!0);break}case Sn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.GIVEN,n,!0);break}case Sn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.REGIONS,n,!0);break}case Sn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;Ho(e,d.HIGHLIGHTS,n,!0);break}case Sn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;Ho(e,r,n,!0);break}case Sn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];dn.update(r=>r);break}case Sn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];dn.update(i=>i);break}case Sn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];dn.update(r=>r);break}case Sn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];dn.update(r=>r);break}case Sn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);dn.update(i=>i);break}case Sn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),dn.update(r=>r);break}case Sn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];dn.update(r=>r);break}}}function LU(t,e){return{execute:()=>{eo(t)},unExecute:()=>{eo(e)}}}function bo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const v=Number(c[u]),g=n.get(v);g!==void 0&&(r.push(_),i.push([g]))}}const s=_l(r,i);eo(s)}function yU(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],s=Array(e).fill(0).map(()=>Array(n).fill(0));for(let p=0;p<e;p++)for(let m=0;m<n;m++)if(!r[p][m]){const C=[];i.push(C),a(p,m,t[p][m])}function a(p,m,C){p<0||p>=e||m<0||m>=n||r[p][m]||t[p][m]!==C||(r[p][m]=!0,i[i.length-1].push([p,m]),a(p+1,m,C),a(p-1,m,C),a(p,m+1,C),a(p,m-1,C))}const c=Array(i.length).fill(0).map(()=>new Set);function u(p,m){for(const[C,b]of p)for(const[O,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=C+O,k=b+w;if(m.some(([U,z])=>U===x&&z===k))return!0}return!1}for(let p=0;p<i.length;p++)for(let m=p+1;m<i.length;m++)u(i[p],i[m])&&(c[p].add(m),c[m].add(p));const _=[1,4,7,9],v=new Array(i.length).fill(0);function g(p,m){for(const C of c[p])if(v[C]===m)return!1;return!0}for(let p=0;p<i.length;p++)for(const m of _)if(g(p,m)){v[p]=m;break}for(let p=0;p<i.length;p++)for(const[m,C]of i[p])s[m][C]=v[p];return s}function AU(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const s=[],a=[];for(let u=0;u<i.length;u++){const _=i[u];for(let v=0;v<_.length;v++){const g=n.getCell(u,v);if(!g||g.given||r&&!g.given&&g.value===null)continue;const p=_[v];s.push(g),a.push(p)}}const c=zp(s,a);eo(c)}function NU(t,e){if(t===void 0)return;const n=["yin_yang","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const s=t[i];if(s!==void 0){bo(s,e,r);return}}}function SU(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const s=t[i];if(s!==void 0){bo(s,e,r);return}}}function xU(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const v=c[u];i.push([v+1])}}const s=_l(r,i);eo(s)}function RU(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;bo(n,e,new Map([[0,4],[1,7],[2,9]]))}function TU(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;bo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function DU(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;bo(n,e,new Map([[1,7],[2,4],[3,9]]))}function kU(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;bo(n,e,new Map([[1,7],[2,8]]))}function GU(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","fillomino_area","galaxy_regions","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[s,a]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<i.length;v++){const g=i[v];for(let p=0;p<g.length-1;p++){const m=e.getCell(v,p),C=e.getCell(v,p+1);if(!m||!C)continue;const b=g[p],O=g[p+1];if(b===O)continue;const w={colorId:c,p1:{r:v,c:p+1},p2:{r:v+1,c:p+1}};u.push(w)}}for(let v=0;v<a;v++)for(let g=0;g<s-1;g++){const p=e.getCell(g,v),m=e.getCell(g+1,v);if(!p||!m)continue;const C=i[g][v],b=i[g+1][v];if(C===b)continue;const O={colorId:c,p1:{r:g+1,c:v},p2:{r:g+1,c:v+1}};u.push(O)}const _=ss(u);ur(_);return}}function MU(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const s=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(v)for(const g of e.getOrthogonallyAdjacentCells(v)){if(!g||!(g.r>v.r||g.c>v.c))continue;const p=i[v.r][v.c],m=i[g.r][g.c];if(!(p===1&&m===1))continue;const C={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:g.r+.5,c:g.c+.5}};s.push(C)}}}const a=ss(s);ur(a);return}}function UU(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const s=yU(i);if(!s)return;const a=[],c=[];for(let _=0;_<s.length;_++){const v=s[_];for(let g=0;g<v.length;g++){const p=e.getCell(_,g);if(!p)continue;a.push(p);const m=v[g];c.push([m])}}const u=_l(a,c);eo(u);return}}function FU(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const s=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(!v)continue;const g=i[v.r][v.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};s.push(m)}}const a=KR(s);ur(a);return}}function $U(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,s=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[v,g]=_,[p,m]=[Math.floor((v-1)/i.nCols),(v-1)%i.nCols],[C,b]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!vs({r:p,c:m},{r:C,c:b}))continue;const x={colorId:4,p1:{r:p+.5,c:m+.5},p2:{r:C+.5,c:b+.5}};s.push(x)}const a=ss(s);ur(a)}function PU(t,e){const n=e.puzzle,r=n.grid;ur(ad()),AU(t,n),xU(t,r),GU(t,r),RU(t,r),TU(t,r),MU(t,r),SU(t,r),UU(t,r),NU(t,r),FU(t,r),DU(t,r),$U(t,e),kU(t,r)}function BU(){const{subscribe:t,set:e}=Ht(0),n=100;let r=Date.now(),i,s=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-s,i=setInterval(()=>{s=Date.now()-r,e(s)},n))},stop:()=>{a&&(a=!1,clearInterval(i),s=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),s=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:s})}}var HU=re('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function WU(t,e){se(e,!1);const n=it(),r=()=>be(bs,"$puzzleStore",n),i=()=>be(_n,"$gridStore",n),s=()=>be(w,"$timer",n),a=T(),c=T(),u=T(),_=T();let v=T(!1),g=T(!1),p=T(null),m=T(100),C=T("100"),b=T(null),O=T("IDLE");const w=BU();function x(q){return q===null?"":String(q)}function k(q){const ne=Math.floor(q/6e4),ce=Math.floor(q%6e4/1e3),ee=Math.floor(q%1e3/100),ie=ce.toString().padStart(2,"0");return`${ne}:${ie}.${ee}`}function U(){A(g,!0)}function z(q){const ne=parseInt(q);typeof ne=="number"&&ne>=1&&A(m,ne)}async function Y(){A(b,0),A(O,"SOLVING...");const q=new Ad;Op();const ne=Hp(h(a));q.addFile("test.mzn",ne.model_str),w.reset(),w.start(),A(p,q.solve({options:{solver:"chuffed","num-solutions":h(m)}})),h(p).on("solution",ce=>{const ee=ce.output.json;ce.type==="solution"&&h(b)!==null&&A(b,h(b)+1),PU(ee,ne)}),h(p).on("error",ce=>{A(u,"Solve"),A(O,"ERROR"),w.stop(),h(p)&&h(p).cancel()}),h(p).on("warning",ce=>{A(O,"WARNING"),console.log(ce.message)}),h(p).then(ce=>{A(O,ce.status),A(u,"Solve"),w.stop()})}function H(){h(p)===null||!h(p).isRunning()?Y():h(p)!==null&&h(p).isRunning()&&(A(O,"IDLE"),A(u,"Solve"),w.stop(),h(p).cancel())}D(()=>r(),()=>{A(a,r())}),D(()=>i(),()=>{A(c,i())}),D(()=>{},()=>{A(u,"Solve")}),D(()=>s(),()=>{A(_,s())}),D(()=>h(p),()=>{h(p)&&(h(p)!==null&&h(p).isRunning()?A(u,"Stop"):A(u,"Solve"))}),Oe(),ge(),rl(t,{get isOpen(){return h(v)},set isOpen(q){A(v,q)},$$slots:{"panel-header":(q,ne)=>{nl(q,{slot:"panel-header",title:"Solver",get isOpen(){return h(v)},set isOpen(ce){A(v,ce)},$$legacy:!0})},"panel-content":(q,ne)=>{var ce=HU(),ee=ue(ce),ie=F(ee,2);hU(ie,{get showModal(){return h(g)},set showModal(Qt){A(g,Qt)},$$legacy:!0});var Ee=F(ie,2),Ce=K(Ee,!0);W(Ee);var fe=F(Ee,2),xe=K(fe,!0);W(fe);var Qe=F(fe,2),Se=K(Qe);Kt(Se),y(Se,"min",1),y(Se,"max",200),y(Se,"step",1),W(Qe);var ye=F(Qe,2),lt=K(ye,!0);J(()=>nt(lt,`Solution Count: ${x(h(b))}`)),W(ye);var Ye=F(ye,2),On=K(Ye,!0);J(()=>nt(On,`Elapsed Time: ${k(h(_))}`)),W(Ye);var Mn=F(Ye,2),Gr=K(Mn,!0);W(Mn),J(()=>{nt(Ce,h(u)),nt(xe,`Max. Solutions: ${h(m)}`),nt(Gr,`Status: ${h(O)}`)}),Ue("click",ee,U),Ue("click",Ee,H),jn(Se,()=>h(C),Qt=>A(C,Qt)),Ue("input",Se,()=>z(h(C))),R(q,ce)}},$$legacy:!0}),ae()}var zU=re('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!> <!></div></div>');function YU(t){var e=zU(),n=K(e),r=K(n);g2(r);var i=F(r,2);WU(i,{});var s=F(i,2);qT(s,{elementHandlers:Rt});var a=F(s,2);tD(a,{elementHandlers:Rt});var c=F(a,2);HT(c,{elementHandlers:Rt});var u=F(c,2);LD(u,{elementHandlers:Rt});var _=F(u,2);p2(_,{}),W(n),W(e),R(t,e)}class Me{constructor(e,n){ve(this,"x");ve(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Me(this.x+e.x,this.y+e.y)}subtract(e){return new Me(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Me(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Me(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function jU(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Dn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Me(i.x,i.y)};function Na(t,e=!0,n=.5){const r=qa(t),i=new Me(r.c+.5,r.r+.5),s=t.distance(i);return!e||s<n?{cell:r,dist:s}:null}function Yp(t,e=.5){const n=qa(t),r=new Me(n.c+.5,n.r+.5),i=t.distance(r),s={r:r.y,c:r.x};return e===void 0||i<e?{cellCenter:s,dist:i}:null}function Jo(t,e=.5){const n=qa(t),r=ix(n),s=r.map(_=>new Me(_.c,_.r)).map(_=>_.distance(t)),a=s.indexOf(Math.min(...s)),c=r[a],u=s[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function es(t,e=.5){const n=qa(t),r=ox(n),s=r.map(_=>new Me(_.c,_.r)).map(_=>_.distance(t)),a=s.indexOf(Math.min(...s)),c=r[a],u=s[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function tu(t,e=!0,n=.5){const r=es(t,void 0);if(!r)return null;const i=Jo(t,void 0);if(!i)return null;const s=Yp(t,void 0);if(!s)return null;const a=[s.cellCenter,r.edge,i.corner],u=a.map(b=>new Me(b.c,b.r)).map(b=>b.distance(t)),_=Math.min(...u),v=u.findIndex(b=>b===_),g=a[v],m=["cell center","edge","corner"][v],C={cellCenter:s.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?C:null}class Oo{constructor(e=.4){ve(this,"onTap",null);ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onMove",null);ve(this,"_prevPoint",null);ve(this,"_prevCell",null);ve(this,"_lastPointerDownTime",0);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_tapCount",0);ve(this,"_lastTapPosition",null);ve(this,"_lastTapTime",0);ve(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Dn(e,n);if(!i)return;this._prevPoint=i;const s=Na(i,!r,this._margin);if(!s)return;const a=s.cell;this._prevCell=a,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:a,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=Na(r,!0,this._margin);if(!i)return;const s=i.cell;if(this._prevCell&&Ve(this._prevCell,s))return;this._prevCell=s,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:s,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Dn(e,n);if(!r)return;const i=Na(r,!1);if(!i)return;const s=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:s,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:s,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Bg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(s=>{const a=new Set(s.highlights);return n.difference(a).size===0}).map(s=>s.toCoords())}function VU(t,e){const n=t.value;return e.getAllCells().filter(s=>s.value===n).map(s=>s.toCoords())}function Hg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(s=>{if(s.value!==null)return!1;const a=new Set(s.cornerMarks);return n.difference(a).size===0}).map(s=>s.toCoords())}function Wg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(s=>{if(s.value!==null)return!1;const a=new Set(s.centerMarks);return n.difference(a).size===0}).map(s=>s.toCoords())}function KU(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Bg(i,e):i.value!==null?VU(i,e):n===d.CORNER_PM&&i.cornerMarks.length?Hg(i,e):n===d.CENTER_PM&&i.centerMarks.length?Wg(i,e):i.cornerMarks.length?Hg(i,e):i.centerMarks.length?Wg(i,e):i.highlights.length?Bg(i,e):r:r}function oi(t,e,n,r=!1){if(!(t&&e))return;const i=dd(t,e),s=_d(t,n),a=Os(i,s);un(a,r)}function Ni(t,e,n,r=!0){if(!(t&&e))return;const i=_d(t,n),s=dd(t,e),a=Os(i,s);un(a,r)}function Eu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const s=Tg(r,t,n),a=Tg(r,t,e),c=Os(s,a);un(c,i)}function XU(t,e,n,r){const i=new Oo,s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,v=!1,g;(b=>{b.DYNAMIC="DYNAMIC",b.BULB="BULB",b.BODY="BODY"})(g||(g={}));let p="DYNAMIC";function m(b){_=!1;const O=b.cell;if(Xt(b.cell,s)){if(p==="DYNAMIC"){const x=ut(pt),k=NR(x,n,O);if(k){const z=cR(k.arrow,k.matchLineIdx);Eu(k.id,k.arrow,z,n,!0),v=!0;return}const U=wg(x,n,O);if(!U)_=!0,p="BULB",u=null,a=null;else{p="BODY",u=U[0],a=U[1],a=fu(a,O),Bt(n,u,a);return}}if(p==="BULB"&&!u){u=St.uniqueId(),a=rp(n,[O]),ii(u,a);return}else p==="BULB"&&u&&a?(a=oR(a,O),Bt(n,u,a)):p==="BODY"&&u&&a&&(a=sR(a,O,r==null?void 0:r.allowSelfIntersection),Bt(n,u,a))}}return i.onDragStart=b=>{p="DYNAMIC",m(b)},i.onDrag=b=>{m(b)},i.onDragEnd=()=>{if(v){v=!1;return}p==="BODY"&&u&&a?aR(a)?(a=lR(a),Bt(n,u,a)):(Eu(u,c,a,n),c=a):p==="BULB"&&(oi(u,a,n),c=a),p="DYNAMIC"},i.onTap=b=>{if(_)return;const O=b.cell,w=ut(pt);if(wg(w,n,O)){Ni(u,a,n);return}},{pointerDown:b=>{b.button===0&&i.pointerDown(b,t)},pointerMove:b=>{i.pointerMove(b,t)},pointerUp:b=>{i.pointerUp(b,t)},keyDown:()=>{},keyUp:()=>{}}}function qU(t,e,n,r){const i=new Oo,s={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const p=g.cell;Xt(g.cell,s)&&(c=iR(c,p,a),Bt(n,u,c))}return i.onDragStart=g=>{u=St.uniqueId(),c=tp(n,[],r==null?void 0:r.defaultValue),ii(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?wi(n,u):u&&c&&oi(u,c,n,!1),u=null},i.onTap=g=>{const p=g.cell,m=ut(pt),C=AR(m,n,p);if(C){const[b,O]=C;Ni(b,O,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function ZU(t,e,n,r){const i=new Oo,s={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=ut(pt),m=g.cell;if(!Xt(g.cell,s))return;const b=Ra(p,n,m);if(c===0&&(c=b?2:1),!(r!=null&&r.oppositeConstraintId&&Ra(p,r.oppositeConstraintId,m))){if(b&&c===2){const[O,w]=b;Ni(O,w,n)}else if(c===1){const O=lp(n,m,r==null?void 0:r.defaultValue),w=St.uniqueId();oi(w,O,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)};function _(g){const p=ut(fr);if(!p)return;let m=p.constraint;const C=p.id;if(m.value===void 0||!ao(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(m==null?void 0:m.value,g.key);b!==void 0&&b!==m.value&&(m=Cs(m,b),Bt(n,C,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class fl{constructor(e){ve(this,"onDragStart",null);ve(this,"target");this.target=e}pointerDown(e,n){const r=Dn(e,n);if(!r)return;const i=es(r,void 0);if(!i)return;const s=Jo(r,void 0);if(!s)return;const a=Na(r,!1);if(!a)return;const c=Yp(r,void 0);if(!c)return;let u;this.target===It.CORNER?u=s.corner:this.target===It.EDGE?u=i.edge:this.target===It.CELL_CENTER?u=c.cellCenter:this.target===It.CORNER_OR_EDGE?s.dist<i.dist?u=s.corner:u=i.edge:this.target===It.CORNER_OR_CENTER?s.dist<c.dist?u=s.corner:u=c.cellCenter:this.target===It.EDGE_OR_CENTER?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<s.dist&&i.dist<c.dist?u=i.edge:s.dist<i.dist&&s.dist<c.dist?u=s.corner:u=c.cellCenter;let _=this.target===It.CORNER||this.target===It.CORNER_OR_CENTER?"corner":"edge";(this.target===It.CORNER_OR_EDGE||this.target===It.CLOSEST)&&s.dist<i.dist&&(_="corner");const v=_==="edge"?2*i.idx:2*s.idx+1,g={event:e,cell:a.cell,edge:i.edge,corner:s.corner,closest:u,edgeIdx:i.idx,cornerIdx:s.idx,direction:v};this.onDragStart&&this.onDragStart(g)}}function QU(t,e,n,r){const i=(r==null?void 0:r.targets)??It.CLOSEST,s=new fl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=ut(pt),C=p.cell,b=p.closest;if(!Xt(C,a))return;const w=xR(m,n,b);if(w){wi(n,w);return}c=dp(n,b,""),u=St.uniqueId(),ii(u,c)}function v(p){const m=ut(fr);if(!m)return;let C=m.constraint;const b=m.id;if(C.value===void 0||!ao(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=Cs(C,O),Bt(n,b,C))}return s.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&s.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{v(p)},keyUp:()=>{}}}function JU(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??It.CORNER_OR_EDGE,s=new fl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=ut(pt),C=p.cell,b=p.direction,O=nd(b);if(Xt(C,a))return;const x=Wh(C,O);if(!Xt(x,a))return;const U=SR(m,n,C,O);if(U){wi(n,U);return}c=ap(n,C,O,""),u=St.uniqueId(),ii(u,c)}function v(p){const m=ut(fr);if(!m)return;let C=m.constraint;const b=m.id;if(C.value===void 0||!ao(p)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(C==null?void 0:C.value,p.key);O!==void 0&&O!==C.value&&(C=Cs(C,O),Bt(n,b,C))}return s.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&s.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{v(p)},keyUp:()=>{}}}function eF(t,e,n,r){const i=new Oo,s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(m){const C=ut(pt),b=m.cell;if(Xt(m.cell,s)){if(m.event.shiftKey){const w=Ig(C,n,b);w&&(c=w[0],a=w[1],Eo({id:c,constraint:a}),_=1)}if(_===0){const w=Ig(C,n,b);if(_=w?2:1,w){Ni(w[0],w[1],n);return}}if(!a&&_===1){a=ip(n,[b]),c=St.uniqueId(),ii(c,a);return}else if(a&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=dR(a,b,w),Bt(n,c,a);return}}}function g(m){const C=ut(fr);if(!C)return;let b=C.constraint;const O=C.id;if(b.value===void 0||!ao(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(b==null?void 0:b.value,m.key);w!==void 0&&w!==b.value&&(b=_R(b,w),Bt(n,O,b))}return i.onDragStart=m=>{c=null,a=null,_=0,v(m)},i.onDrag=m=>{v(m)},i.onDragEnd=()=>{c&&a&&oi(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const ji=new Oo;function zg(t,e){return t.shiftKey?Ko.SELECTING:t.ctrlKey||t.metaKey||e?Ko.DYNAMIC:t.altKey?Ko.DESELECTING:Ko.RESETTING}function as(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const s=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===s||n==="different"&&c.fog!==s)}}return t}function tF(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const s=as(t,i,"any",-1,r(i));if(s.length)return{tool:i,cells:s}}return{tool:e,cells:[]}}function ts(t,e,n,r){const i=wU(e,n,r);if(i){const s=i[0],a=i[1],c=LU(s,a),u=hu(t),v=[JR(u,u),c];QR(v)}}function nF(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=as(e,r,"any",-1,!1);if(i.length)return ts(n,i,r,t),!0}else{const i=as(e,r,"different",t,!0);if(i.length)return ts(n,i,r,t),!0}return!1}function rF(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};ji.onTap=m=>{if(m.tapCount!==2)return;const b=Xt(m.cell,i)?m.cell:null;if(!b)return;const O=KU(b,e,n),w=hu(O);Vi(w)},ji.onDragStart=m=>{const C=Xt(m.cell,i),b=ut(pu),O=zg(m.event,b),w=C?m.cell:null,x=$R(w,O);Vi(x)},ji.onDrag=m=>{const b=Xt(m.cell,i)?m.cell:null,O=BR(b);Vi(O)};function s(m){if(!iw(m))return!1;const C=e.getAllCells().map(O=>({r:O.r,c:O.c})),b=hu(C);return Vi(b),!0}function a(m){if(!cw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const C=dw(m);return Lr(C),!0}return m.type==="keyup"?(tT(),!0):!1}function c(m){if(!lw(m))return!1;if(m.code==="Space"){const C=r.indexOf(n),b=r[(C+1)%r.length];return Lr(b),vu(b),!0}else{const C=uw(m.code);return Lr(C),vu(C),!0}}function u(m){if(!fw(m))return!1;const C=ut(Ii).lastCell;let b=null;if(C!==null){const[x,k]=gw(m),[U,z]=[Lg(C.r+k,0,i.nRows-1),Lg(C.c+x,0,i.nCols-1)];b={r:U,c:z}}else b={r:0,c:0};const O=zg(m,!1),w=HR(b,O);return Vi(w),!0}function _(m){const C=aw(m);if(C===void 0)return!1;const b=ut(Ii).cells,O=[];if(b.forEach(w=>{const x=e.getCell(w.r,w.c);x&&O.push(x)}),n===d.FOG)return nF(C,O,b);if(C===null){const{tool:w,cells:x}=tF(O,n);if(x.length)return ts(b,x,w,C),!0}else{let w=as(O,n,"different",C,!0);if(w.length)return ts(b,w,n,C),!0;if(w=as(O,n,"equal",C,!0),w.length)return ts(b,w,n,C),!0}return!1}function v(m){return m.repeat?!1:_(m.key)}const g=St.throttle(m=>{ji.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&ji.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){ji.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(s(m)||u(m)||v(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function iF(t,e,n,r){const i=[He.N,He.NE,He.E,He.SE,He.S,He.SW,He.W,He.NW],s=new fl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.ADDING=1]="ADDING",C[C.REMOVING=2]="REMOVING"})(_||(_={}));let v=0;function g(C){const b=ut(pt),O=C.cell;if(!Xt(C.cell,a))return;C.event.altKey&&(v=2);const x=Ra(b,n,O),k=nd(C.direction);if(x){[u,c]=x,c.direction===k||v===2?Ni(u,c,n):(c={...c,direction:k},Bt(n,u,c));return}else v!==2&&(c=cp(n,O,k),u=St.uniqueId(),oi(u,c,n,!0))}function p(C){if(!c||!u||!ow(C))return;const O=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[O]},Bt(n,u,c)}return s.onDragStart=C=>{v=0,g(C)},{pointerDown:C=>{C.button===0&&s.pointerDown(C,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:C=>{p(C)},keyUp:()=>{}}}function oF(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function sF(t,e,n,r){const i=new fl(r.cornerOrEdge),s={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(p=>{p[p.DYNAMIC=0]="DYNAMIC",p[p.ADDING=1]="ADDING",p[p.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(p){const m=ut(pt),C=p.cell;if(!Xt(p.cell,s))return;p.event.altKey&&(_=2);const O=nd(p.direction),w=Ra(m,n,C);if(w){if(c=w[0],a=w[1],_===2)wi(n,w[0]);else{const x=oF(a.directions,O);x.length?(a={...a,directions:x},Bt(n,c,a)):wi(n,c)}return}else _!==2&&(a=up(n,C,O),c=St.uniqueId(),ii(c,a))}return i.onDragStart=p=>{_=0,v(p)},{pointerDown:p=>{p.button===0&&i.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class aF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Dn(e,n);if(!r)return;const i=es(r,this._margin);if(!i)return;this._prevCoord=i.edge;const s={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=es(r,this._margin);if(!i||this._prevCoord&&Ve(i.edge,this._prevCoord))return;const s={event:e,coord:i.edge};this._prevCoord=i.edge,this._isTap=!1,this.onDrag&&this.onDrag(s)}pointerUp(e,n){const r=Dn(e,n);if(!r)return;const i=es(r,this._margin);if(!i)return;const s={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(s)),this._isTap&&this.onTap&&this.onTap(s)}}function lF(t,e,n,r){const i=new aF,s={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=ut(pt),m=g.coord,C=rd(m);if(!C.every(w=>Xt(w,s)))return;let O=null;if(c===0&&(O=LR(p,n,C),c=O?2:1),O&&c===2){const w=O[0];Ni(w,O[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",x=sp(n,C,w),k=St.uniqueId();oi(k,x,n,!0)}}function _(g){const p=ut(fr);if(!p)return;let m=p.constraint;const C=p.id;if(m.value===void 0||!ao(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(m==null?void 0:m.value,g.key);b!==void 0&&b!==m.value&&(m=Cs(m,b),Bt(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class cF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"onMove",null);ve(this,"_prevCoord",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Dn(e,n);if(!r)return;const s=this._prevCoord===null?void 0:this._margin,a=Jo(r,s);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=Jo(r);if(!i||this._prevCoord&&Ve(i.corner,this._prevCoord))return;const s={event:e,coord:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(s)}pointerUp(e,n){const r=Dn(e,n);if(!r)return;const i=Jo(r);if(!i)return;const s={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(s)),this._isTap&&this.onTap&&this.onTap(s)}}function uF(t,e,n,r){const i=new cF,s={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=ut(pt),m=g.coord,C=td(m);if(!C.every(w=>Xt(w,s)))return;let O=null;if(c===0&&(O=yR(p,n,m),c=O?2:1),O&&c===2){const w=O[0];Ni(w,O[1],n);return}else if(c===1){const w=op(n,C,r==null?void 0:r.defaultValue),x=St.uniqueId();oi(x,w,n,!0)}}function _(g){const p=ut(fr);if(!p)return;let m=p.constraint;const C=p.id;if(m.value===void 0||!ao(g)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(m==null?void 0:m.value,g.key);b!==void 0&&b!==m.value&&(m=Cs(m,b),Bt(n,C,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class dF{constructor(){ve(this,"onDragStart",null);ve(this,"onDrag",null);ve(this,"onDragEnd",null);ve(this,"onTap",null);ve(this,"_prevType",null);ve(this,"_isDown",!1);ve(this,"_isTap",!1);ve(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Dn(e,n);if(!r)return;const i=tu(r,!1);if(!i)return;const s={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(s)}pointerMove(e,n){if(!this._isDown)return;const r=Dn(e,n);if(!r)return;const i=tu(r,!1);if(!i||this._prevCoords&&Ve(this._prevCoords,i.target))return;this._isTap=!1;const s={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&pp(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(s);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Dn(e,n);if(!r)return;const i=tu(r,!1);if(!i)return;const s={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&Ve(this._prevCoords,i.target)&&(this.onTap&&this.onTap(s),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function _F(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new dF;return r.onTap=s=>{const a=s.coords,c=ut(Ga),u=ut(ka);if(s.type==="cell center"){if(!nx(a,n))return;const v=u.getCellMarker(a);if(v)if(v.marker==="X"){const g={...a,colorId:c,marker:"O"},p=wa(g),m=wa(v),C=vi(p,m);un(C)}else{const g=Sg(a),p=wa(v),m=vi(g,p);un(m)}else{const g={...a,colorId:c,marker:"X"},p=wa(g),m=Sg(a),C=vi(p,m);un(C)}}else if(s.type==="edge"){const _=u.getEdgeMarker(a);if(_){const v=Ng(a),g=Ag(_),p=vi(v,g);un(p)}else{const v={...a,colorId:c},g=Ag(v),p=Ng(a),m=vi(g,p);un(m)}}},r.onDrag=s=>{const a=s.coords,c=ut(Ga);if(s.type==="cell center"||s.type==="corner"){const u={p1:s.prevCoords,p2:a,colorId:c},_=XR(u);ur(_)}},r.onDragEnd=()=>{const s=ut(ka);if(s.mode==="add"){const a=s.draftLine.filter(c=>!s.lineMarkers.some(u=>Xi(c,u)));if(a.length){const c=ss(a),u=xg(a),_=vi(c,u);un(_)}}else{const a=s.lineMarkers.filter(c=>s.draftLine.some(u=>Xi(c,u)));if(a.length){const c=xg(a),u=ss(a),_=vi(c,u);un(_)}}},{blur(){},pointerDown(s){r.pointerDown(s,t)},pointerMove(s){r.pointerMove(s,t)},pointerUp(s){r.pointerUp(s,t)},keyDown(){},keyUp(){}}}function fF(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function gF(t,e){const n=zh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function hF(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function pF(t){for(let e=0;;e++){const n=hF(e);if(!t.has(n))return n}}function vF(t,e,n){const r=new Oo,i={nRows:e.nRows,nCols:e.nCols};let s=null,a=null,c=null,u=null,_="cells2",v;(C=>{C[C.DYNAMIC=0]="DYNAMIC",C[C.SELECTING=1]="SELECTING",C[C.MOVING=2]="MOVING"})(v||(v={}));let g=0;function p(C){const b=ut(pt),O=C.cell;if(!Xt(C.cell,i))return;const x=RR(b,n,O);if(g===0&&(x?(c=x[0],s=x[1],g=2,u=O,_=s.cells2.some(U=>Ve(U,O))?"cells2":"cells"):g=1),g===1&&c===null){c=St.uniqueId();const k=TR(b,n),U=pF(k);s=fF(n,[O],U),ii(c,s);return}else if(g===1&&c&&s){s=gF(s,O),Bt(n,c,s);return}else if(g===2&&c&&s&&u){const k={r:O.r-u.r,c:O.c-u.c},z=(_==="cells2"?s.cells2:s.cells).map(H=>({r:H.r+k.r,c:H.c+k.c}));if(!z.every(H=>Xt(H,i)))return;_==="cells"?s={...s,cells:z}:s={...s,cells2:z},u=O,Bt(n,c,s)}}return r.onDragStart=C=>{c=null,s=null,g=0,u=null,p(C)},r.onDrag=C=>{p(C)},r.onDragEnd=()=>{c&&s&&(g===1?oi(c,s,n):g===2&&Eu(c,a,s,n),a=s)},r.onTap=()=>{c&&g!==1&&(wi(n,c),c=null,s=null)},{pointerDown:C=>{C.button===0&&r.pointerDown(C,t)},pointerMove:C=>{r.pointerMove(C,t)},pointerUp:C=>{r.pointerUp(C,t)},keyDown:()=>{},keyUp:()=>{}}}function mF(t){if(t.type===pe.SELECTION)return function(n,r,i){return rF(n,r,i)};if(t.type===pe.SINGLE_CELL){let e=function(r,i,s){return ZU(r,i,s,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_ARROW){let e=function(r,i,s){return iF(r,i,s,n)};const n=t;return e}else if(t.type===pe.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,s){return sF(r,i,s,n)};const n=t;return e}else if(t.type===pe.EDGE){let e=function(r,i,s){return lF(r,i,s,n)};const n=t;return e}else if(t.type===pe.CORNER){let e=function(r,i,s){return uF(r,i,s,n)};const n=t;return e}else if(t.type===pe.LINE){let e=function(r,i,s){return qU(r,i,s,n)};const n=t;return e}else if(t.type===pe.ARROW){let e=function(r,i,s){return XU(r,i,s,n)};const n=t;return e}else if(t.type===pe.CAGE){let e=function(r,i,s){return eF(r,i,s,n)};const n=t;return e}else{if(t.type===pe.CLONE)return function(n,r,i){return vF(n,r,i)};if(t.type===pe.CENTER_CORNER_OR_EDGE){let e=function(r,i,s){return QU(r,i,s,n)};const n=t;return e}else if(t.type===pe.OUTSIDE_DIRECTION){let e=function(r,i,s){return JU(r,i,s,n)};const n=t;return e}else if(t.type===pe.PEN)return function(n,r){return _F(n,r)}}}const jp=no([Qi,_n,qt],([t,e,n])=>{const r=qr(n,Rt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}const i=r.inputOptions,s=i?mF(i):void 0;return s?s(t,e,n):void 0});var EF=de('<path class="cursor svelte-zsq70u"></path>');function CF(t,e){se(e,!1);const n=it(),r=()=>be(qt,"$toolStore",n),i=()=>be(Ii,"$selectionStore",n),s=T(),a=T(),c=.25;function u(v){if(!v)return"";const[g,p]=[v.c,v.r];return`M${g},${p}L${g+c},${p}L${g},${p+c}Z`}D(()=>r(),()=>{A(s,ju(r()))}),D(()=>i(),()=>{A(a,u(i().lastCell))}),Oe(),ge();var _=EF();J(()=>{y(_,"d",h(a)),y(_,"visibility",h(s)?"visible":"hidden")}),R(t,_),ae()}var bF=de('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function OF(t,e){se(e,!1);let n=M(e,"gridShape",8);ge();var r=bF(),i=K(r);y(i,"x",0),y(i,"y",0),W(r),J(()=>{y(i,"width",n().nCols),y(i,"height",n().nRows)}),R(t,r),ae()}var IF=de('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),wF=de('<g class="grid-lines"></g>');function LF(t,e){se(e,!1);const n=it(),r=()=>be(_n,"$gridStore",n),i=T();D(()=>r(),()=>{A(i,r().getAllCells())}),Oe(),ge();var s=wF();st(s,5,()=>h(i),Lt,(a,c)=>{var u=IF();y(u,"width",1),y(u,"height",1),J(()=>{y(u,"x",h(c).c),y(u,"y",h(c).r)}),R(a,u)}),W(s),R(t,s),ae()}function yF(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function AF(t){const e=new Map;function n(r,i){const s=e.get(i);if(s!=null&&s.has(r)){s.delete(r),s.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=yF(r),s=i.length;for(let a=0;a<s;a++){const c=i[a%s],u=i[(a+1)%s],_=JSON.stringify(c),v=JSON.stringify(u);n(_,v)}}return e}function NF(t,e=0,n=!1){const r=[],i=AF(t);if(i.size<=0)return r;const s=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(C=>C[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const v=Array.from(u)[0];let g=JSON.parse(v),p=v;const m=[];do{const C=i.get(p);if(C===void 0)throw new Error(`Corner with no adjacencies found ${p}`);const b=new Me(_.c,_.r),O=new Me(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,k=null;for(const ie of C){const Ee=JSON.parse(ie),Ce=new Me(Ee.c,Ee.r),fe=O.subtract(b),xe=Ce.subtract(O),Qe=fe.perpDotProduct(xe);w<Qe!=n&&(w=Qe,k=Ee,x=ie)}if(n&&C.size>1&&s.add(p),k===null||x===null)throw new Error("Corner with no adjacencies found");C.delete(x),C.size<=0&&i.delete(p);const U=e*(g.c-_.c),z=e*(k.c-g.c),Y=e*(_.r-g.r),H=e*(g.r-k.r),q=H+w*z,ne=U+w*Y,ce=new Me(g.c+q,g.r+ne),ee=4;s.has(p)?(m.push(new Me(ce.x-ee*U,ce.y-ee*z)),m.push(new Me(ce.x-ee*Y,ce.y-ee*H))):m.push(ce),_=g,g=k,p=x}while(p!==v);r.push(m)}return r}function to(t,e=0,n=!1){return NF(t,e,n).map(s=>Io(s,!0)).join("")}const SF=[new Me(-.5,-.5),new Me(.5,-.5),new Me(.5,.5),new Me(-.5,.5)];function xF(t,e,n=SF){if(e===1)return n;const r=[],i=n.length,s=0,a=360/e,c=t*a+s,u=(t+1)*a+s,_=c/(360/i),v=u/(360/i),g=Math.floor(_)%i,p=Math.ceil(_)%i,m=n[g].lerp(n[p],_%1),C=Math.floor(v)%i,b=Math.ceil(v)%i,O=n[C].lerp(n[b],v%1);r.push(m);for(let x=Math.ceil(_);x<=Math.floor(v);x++)r.push(n[x%i]);r.push(O);const w=new Me(0,0);return r.push(w),r}function Vp(t,e,n=new Me(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const s=Math.cos(Math.PI/e),a=r?t:t/s,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),v=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Me(_,v));c.push(g)}return c}function Io(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:s})=>`${i},${s}`).join("L")+n}function gl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){if(r&&t.length>1){const _=t[t.length-1];for(let g=0;g<t.length-1;g++)if(_.equals(t[g])){t.push(t[g+1]);break}const v=t[0];for(let g=1;g<t.length;g++)if(v.equals(t[g])){t.unshift(t[g-1]);break}}if(t.length===1)t.push(t[0]);else{if(e){let _=t[1].subtract(t[0]);_=_.normalise(),_=_.scale(e),t[0]=t[0].add(_)}if(n){const _=t.length;let v=t[_-2].subtract(t[_-1]);v=v.normalise(),v=v.scale(n),t[_-1]=t[_-1].add(v)}}if(!i)return Io(t);const s=t[0],a=["M",`${s.x},${s.y}`],c=t.length;for(let _=2;_<c;_++){const v=t[_-2],g=t[_-1],p=t[_];let m=v.subtract(g).normalise();m=m.scale(i),m=m.add(g);let C=p.subtract(g).normalise();C=C.scale(i),C=C.add(g),a.push(`L${m.x},${m.y} Q ${g.x},${g.y} ${C.x},${C.y}`)}const u=t[c-1];return a.push(`L${u.x},${u.y}`),a.join(" ")}function ls(t,e={}){const n=Ua(t);return gl(n,e)}function Xn(t){return new Me(t.c+.5,t.r+.5)}function Ua(t){return t.map(n=>Xn(n))}const RF=[new Me(-.5,-.5),new Me(.5,-.5),new Me(.5,.5),new Me(-.5,.5),new Me(0,-.5),new Me(0,.5),new Me(-.5,0),new Me(.5,0)];function TF(t,e){const n=RF[t];return n.subtract(n.scale(e))}function Kp(t,e){const n=[new Me(t.c-e,t.r-e),new Me(t.c+e,t.r+e)],r=[new Me(t.c-e,t.r+e),new Me(t.c+e,t.r-e)];return[n,r].map(s=>Io(s,!1)).join("")}const DF=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function hl(t,e="none"){return DF.get(t)||e}function kF(t,e,n){let r=[];function s(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Me(-.12,-.32),new Me(0,-.4),new Me(.12,-.32)]:a=[new Me(-.12,-.4),new Me(0,-.32),new Me(.12,-.4)],r=[a,s(a,90),s(a,180),s(a,270)],r=r.map(c=>c.map(u=>{const _=new Me(n+.5,e+.5);return u.add(_)})),r}var GF=de('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),MF=de('<g class="regions-border"></g>');function UF(t,e){se(e,!1);const n=it(),r=()=>be(dn,"$cellsStore",n),i=()=>be(_n,"$gridStore",n),s=T(),a=T();function c(_,v){return _.filter(m=>m.region===v).map(m=>({r:m.r,c:m.c}))}D(()=>r(),()=>{A(s,r())}),D(()=>i(),()=>{A(a,i().getUsedRegions())}),Oe(),ge();var u=MF();st(u,5,()=>h(a),Lt,(_,v)=>{var g=GF();J(()=>y(g,"d",to(c(h(s),h(v)),0,!1))),J(()=>y(g,"id",`region-${h(v)??""}`)),R(_,g)}),W(u),R(t,u),ae()}var FF=de('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function $F(t,e){se(e,!1);const n=it(),r=()=>be(Ii,"$selectionStore",n),i=()=>be(qt,"$toolStore",n),s=T(),a=T(),c=T(),u=T(),_=T(),v=T();let g=M(e,"boundingBox",8);const p=.06,m=.05,C="#080808",b="#b2b2b2";D(()=>Z(g()),()=>{A(s,g().x)}),D(()=>Z(g()),()=>{A(a,g().y)}),D(()=>r(),()=>{A(c,r().cells)}),D(()=>h(c),()=>{A(u,to(h(c),0))}),D(()=>h(c),()=>{A(_,to(h(c),p))}),D(()=>i(),()=>{A(v,ju(i()))}),Oe(),ge();var O=FF(),w=K(O),x=K(w);y(x,"stdDeviation",m),Zi(),W(w);var k=F(w),U=K(k);y(U,"fill",b);var z=F(U);y(z,"fill",C),W(k);var Y=F(k);W(O),J(()=>{y(O,"visibility",h(v)?"visible":"hidden"),y(k,"x",h(s)),y(k,"y",h(a)),y(U,"x",h(s)),y(U,"y",h(a)),y(z,"d",h(_)),y(Y,"d",h(u))}),R(t,O),ae()}var PF=de('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function BF(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"grid",8);D(()=>Z(i()),()=>{A(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>h(n),()=>{A(r,to(h(n),0))}),Oe(),ge();var s=PF(),a=K(s);W(s),J(()=>y(a,"d",h(r))),R(t,s),ae()}function gr(t){return no(pt,n=>{const r=[];for(const[i,s]of n.entries())t(i)&&r.push({toolId:i,element:s});return r})}const Nd=gr(RI),HF=no(Nd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),WF=no(Nd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),zF=gr(Hu),YF=gr(Ih),jF=gr(Oh),VF=gr(Wu),KF=gr(wh),XF=gr(zu),qF=gr(Yu),ZF=gr(Lh),QF=gr(os);var JF=de('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function As(t,e){let n=M(e,"l",8,.2),r=M(e,"id",8),i=M(e,"strokeWidth",8),s=M(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=JF();y(u,"viewBox","0 0 1 1"),y(u,"refX",a),y(u,"refY",a),y(u,"markerWidth",1),y(u,"markerHeight",1);var _=K(u);y(_,"d",c),W(u),J(()=>{y(u,"id",r()),y(_,"stroke-width",i()),y(_,"stroke",s())}),R(t,u)}var e8=de("<path></path>");function cs(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T(),_=T();let v=M(e,"cells",8),g=M(e,"shape",8,Vu);const p="square";D(()=>Z(g()),()=>{A(n,g().inset??.06)}),D(()=>Z(g()),()=>{A(r,g().stroke??"black")}),D(()=>Z(g()),()=>{A(i,g().strokeWidth??.03)}),D(()=>Z(g()),()=>{A(s,g().strokeDasharray??.08)}),D(()=>Z(g()),()=>{A(a,g().fill??"none")}),D(()=>Z(g()),()=>{A(c,g().connectDiag??!0)}),D(()=>(Z(v()),h(n),h(c)),()=>{A(u,to(v(),h(n),h(c)))}),D(()=>Z(g()),()=>{A(_,g().strokeLinejoin??"miter")}),Oe(),ge();var m=e8();y(m,"stroke-linecap",p),J(()=>{y(m,"d",h(u)),y(m,"stroke",h(r)),y(m,"stroke-width",h(i)),y(m,"fill",h(a)),y(m,"stroke-dasharray",h(s)),y(m,"stroke-linejoin",h(_))}),R(t,m),ae()}var t8=de('<path class="arrow-line" fill="none"></path>'),n8=de('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function r8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T(),m=T(),C=T();let b=M(e,"tool",8),O=M(e,"arrowId",8),w=M(e,"boundingBox",8);const x=Zt(b().toolId,Rt)??Ku,k="round",U="round",z=crypto.randomUUID(),Y=`arrow-mask-${O()}-${z}`,H=`arrow-marker-${O()}-${z}`;D(()=>Z(b()),()=>{A(n,b().shape??x)}),D(()=>Z(w()),()=>{A(r,w().x)}),D(()=>Z(w()),()=>{A(i,w().y)}),D(()=>h(n),()=>{var fe;A(s,((fe=h(n))==null?void 0:fe.r)??.4)}),D(()=>h(n),()=>{var fe;A(a,((fe=h(n))==null?void 0:fe.stroke)??"gray")}),D(()=>h(n),()=>{var fe;A(c,((fe=h(n))==null?void 0:fe.strokeWidth)??.1)}),D(()=>h(n),()=>{var fe;A(u,((fe=h(n))==null?void 0:fe.strokeDasharray)??0)}),D(()=>h(n),()=>{var fe;A(_,((fe=h(n))==null?void 0:fe.opacity)??.8)}),D(()=>(h(s),h(n)),()=>{var fe,xe,Qe,Se;A(v,{shortenHead:h(s),shortenTail:((xe=(fe=h(n))==null?void 0:fe.linePathOptions)==null?void 0:xe.shortenTail)??.2,bezierRounding:((Se=(Qe=h(n))==null?void 0:Qe.linePathOptions)==null?void 0:Se.bezierRounding)??.4})}),D(()=>h(n),()=>{var fe;A(g,((fe=h(n))==null?void 0:fe.fill)??"none")}),D(()=>h(n),()=>{var fe;A(p,((fe=h(n))==null?void 0:fe.inset)??.2)}),D(()=>h(p),()=>{A(m,{...x,strokeDasharray:0,strokeLinejoin:"round",inset:h(p)})}),D(()=>Z(b()),()=>{A(C,ls(b().cells))}),Oe(),ge();var q=n8(),ne=ue(q);y(ne,"id",Y);var ce=K(ne),ee=F(ce);W(ne);var ie=F(ne);As(ie,{id:H,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var Ee=F(ie);cs(Ee,{get cells(){return b().cells},get shape(){return h(m)}});var Ce=F(Ee);st(Ce,1,()=>b().lines,Lt,(fe,xe)=>{var Qe=Ne(),Se=ue(Qe);{var ye=lt=>{var Ye=t8();J(()=>y(Ye,"d",ls(h(xe),h(v)))),y(Ye,"stroke-linejoin",k),y(Ye,"stroke-linecap",U),y(Ye,"marker-end",`url(#${H??""})`),J(()=>{y(Ye,"stroke",h(a)),y(Ye,"stroke-width",h(c)),y(Ye,"opacity",h(_)),y(Ye,"stroke-dasharray",h(u))}),R(lt,Ye)};he(Se,lt=>{h(xe).length>1&&lt(ye)})}R(fe,Qe)}),J(()=>{y(ne,"x",h(r)),y(ne,"y",h(i)),y(ce,"x",h(r)),y(ce,"y",h(i)),y(ee,"stroke-width",2*h(s)-h(c)),y(ee,"d",h(C))}),R(t,q),ae()}var i8=de('<path class="arrow-line" fill="none"></path>'),o8=de('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function s8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T();let p=M(e,"tool",8),m=M(e,"arrowId",8),C=M(e,"boundingBox",8);const b=Zt(p().toolId,Rt)??Ku,O="round",w="round",x=crypto.randomUUID(),k=`arrow-mask-${m()}-${x}`,U=`arrow-marker-${m()}-${x}`;D(()=>Z(p()),()=>{A(n,p().shape??b)}),D(()=>Z(C()),()=>{A(r,C().x)}),D(()=>Z(C()),()=>{A(i,C().y)}),D(()=>h(n),()=>{var ie;A(s,((ie=h(n))==null?void 0:ie.r)??.4)}),D(()=>h(n),()=>{var ie;A(a,((ie=h(n))==null?void 0:ie.stroke)??"gray")}),D(()=>h(n),()=>{var ie;A(c,((ie=h(n))==null?void 0:ie.strokeWidth)??.1)}),D(()=>h(n),()=>{var ie;A(u,((ie=h(n))==null?void 0:ie.strokeDasharray)??0)}),D(()=>h(n),()=>{var ie;A(_,((ie=h(n))==null?void 0:ie.opacity)??.8)}),D(()=>(h(s),h(n)),()=>{var ie,Ee,Ce,fe;A(v,{shortenHead:h(s),shortenTail:((Ee=(ie=h(n))==null?void 0:ie.linePathOptions)==null?void 0:Ee.shortenTail)??.2,bezierRounding:((fe=(Ce=h(n))==null?void 0:Ce.linePathOptions)==null?void 0:fe.bezierRounding)??.4})}),D(()=>Z(p()),()=>{A(g,ls(p().cells))}),Oe(),ge();var z=o8(),Y=ue(z);y(Y,"id",k);var H=K(Y),q=F(H);W(Y);var ne=F(Y);As(ne,{id:U,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var ce=F(ne);y(ce,"mask",`url(#${k??""})`);var ee=F(ce);st(ee,1,()=>p().lines,Lt,(ie,Ee)=>{var Ce=Ne(),fe=ue(Ce);{var xe=Qe=>{var Se=i8();J(()=>y(Se,"d",ls(h(Ee),h(v)))),y(Se,"stroke-linejoin",O),y(Se,"stroke-linecap",w),y(Se,"marker-end",`url(#${U??""})`),J(()=>{y(Se,"stroke",h(a)),y(Se,"stroke-width",h(c)),y(Se,"opacity",h(_)),y(Se,"stroke-dasharray",h(u))}),R(Qe,Se)};he(fe,Qe=>{h(Ee).length>1&&Qe(xe)})}R(ie,Ce)}),J(()=>{y(Y,"x",h(r)),y(Y,"y",h(i)),y(H,"x",h(r)),y(H,"y",h(i)),y(q,"stroke-width",2*h(s)-h(c)),y(q,"d",h(g)),y(ce,"d",h(g)),y(ce,"stroke-width",2*h(s)+h(c)),y(ce,"stroke",h(a))}),R(t,z),ae()}var a8=de('<g class="arrow-tool"><!></g>');function l8(t,e){se(e,!1);const n=T();let r=M(e,"tool",8),i=M(e,"arrowId",8),s=M(e,"boundingBox",8);const a=Zt(r().toolId,Rt)??Ku;D(()=>Z(r()),()=>{A(n,r().shape??a)}),Oe(),ge();var c=a8(),u=K(c);{var _=g=>{r8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return s()}})},v=g=>{s8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return s()}})};he(u,g=>{h(n).type===$.BULBOUS_ARROW?g(_):g(v,!1)})}W(c),R(t,c),ae()}var c8=de("<g></g>"),u8=de('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function d8(t,e){se(e,!1);const n=it(),r=()=>be(XF,"$arrowToolsStore",n),i=T();let s=M(e,"boundingBox",8);D(()=>r(),()=>{A(i,r())}),Oe();var a=u8();st(a,5,()=>h(i),Lt,(c,u)=>{let _=()=>h(u).toolId,v=()=>h(u).element;var g=c8();st(g,5,()=>Object.entries(v()),p=>p[0],(p,m)=>{l8(p,{get arrowId(){return h(m)[0]},get tool(){return h(m)[1]},get boundingBox(){return s()}})}),W(g),J(()=>Zr(g,`element-group ${_()}`)),R(c,g)}),W(a),R(t,a),ae()}var _8=de('<!><path fill="none"></path>',1);function f8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T();let c=M(e,"tool",8),u=M(e,"id",8);const _=c().cell,v=Zt(c().toolId,Rt)??$I,g=.3;function p(x,k){const U=Za(k),z=new Me(U.c,U.r).normalise().scale(g),Y=Xn(x),H=Y.subtract(z),q=Y.add(z);return[H,q]}const m=crypto.randomUUID(),C=`single-cell-arrow-marker-${u()}-${m}`;D(()=>Z(c()),()=>{A(n,c().direction)}),D(()=>Z(c()),()=>{A(r,c().shape??v)}),D(()=>h(r),()=>{A(i,h(r).strokeWidth??.1)}),D(()=>h(r),()=>{A(s,h(r).stroke??"black")}),D(()=>h(n),()=>{A(a,gl(p(_,h(n))))}),Oe(),ge();var b=_8(),O=ue(b);As(O,{id:C,l:.15,get stroke(){return h(s)},get strokeWidth(){return h(i)}});var w=F(O);y(w,"marker-end",`url(#${C??""})`),J(()=>{y(w,"d",h(a)),y(w,"stroke",h(s)),y(w,"stroke-width",h(i))}),R(t,b),ae()}var g8=de('<path fill="none"></path>'),h8=de("<!><!>",1);function p8(t,e){se(e,!1);const n=T(),r=T(),i=T();let s=M(e,"tool",8),a=M(e,"id",8);const c=s().cell,u=Zt(s().toolId,Rt)??PI,_=.2;function v(w,x){const k=Za(x),U=new Me(k.c,k.r),Y=Xn(w).add(U.scale(.4));return[Y.subtract(U.normalise().scale(_)),Y]}function g(w){return gl(v(c,w))}const p=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${a()}-${p}`;D(()=>Z(s()),()=>{A(n,s().shape??u)}),D(()=>h(n),()=>{A(r,h(n).strokeWidth??.08)}),D(()=>h(n),()=>{A(i,h(n).stroke??"black")}),Oe(),ge();var C=h8(),b=ue(C);As(b,{id:m,l:.1,get stroke(){return h(i)},get strokeWidth(){return h(r)}});var O=F(b);st(O,1,()=>s().directions,Lt,(w,x)=>{var k=g8();J(()=>y(k,"d",g(h(x)))),y(k,"marker-end",`url(#${m??""})`),J(()=>{y(k,"stroke",h(i)),y(k,"stroke-width",h(r))}),R(w,k)}),R(t,C),ae()}var v8=de('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function us(t,e){se(e,!1);const n=T();let r=M(e,"value",8,""),i=M(e,"fontSize",8,.2),s=M(e,"x",8),a=M(e,"y",8),c=M(e,"position",8,"TL"),u=M(e,"fontColor",8,"var(--text-primary-color)"),_=M(e,"fontWeight",8,400),v=T(null),g=T(null);function p(x,k,U){const z=["TL","TR"].includes(U),H=["TL","BL"].includes(U)?x+.05:x,q=k;return new Me(H,q)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function C(x){return["TL","TR"].includes(x)?"text-before-edge":""}II(()=>{if(!h(v)||!h(g))return;const x=h(v).getBBox();h(g).setAttribute("x",String(x.x)),h(g).setAttribute("y",String(x.y+x.height*.1)),h(g).setAttribute("width",String(x.width)),h(g).setAttribute("height",String(x.height*.8))}),D(()=>(Z(s()),Z(a()),Z(c())),()=>{A(n,p(s(),a(),c()))}),Oe(),ge();var b=Ne(),O=ue(b);{var w=x=>{var k=v8(),U=ue(k);bi(U,H=>A(g,H),()=>h(g));var z=F(U);J(()=>y(z,"text-anchor",m(c()))),J(()=>y(z,"dominant-baseline",C(c())));var Y=K(z,!0);W(z),bi(z,H=>A(v,H),()=>h(v)),J(()=>{var H,q;y(z,"x",(H=h(n))==null?void 0:H.x),y(z,"y",(q=h(n))==null?void 0:q.y),y(z,"font-size",i()),y(z,"fill",u()),y(z,"font-weight",_()),nt(Y,r())}),R(x,k)};he(O,x=>{r().length&&x(w)})}R(t,b),ae()}var m8=re("<!> <!>",1);function Xp(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"cells",8),s=M(e,"shape",8,Vu),a=M(e,"value",8,void 0);D(()=>Z(i()),()=>{A(n,i()[0])}),D(()=>h(n),()=>{A(r,new Me(h(n).c,h(n).r))}),Oe(),ge();var c=m8(),u=ue(c);cs(u,{get cells(){return i()},get shape(){return s()}});var _=F(u,2);{var v=g=>{us(g,{get value(){return a()},get x(){return h(r).x},get y(){return h(r).y},position:"TL"})};he(_,g=>{a()&&a().length&&g(v)})}R(t,c),ae()}var E8=de("<rect></rect>");function C8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T();let m=M(e,"cx",8),C=M(e,"cy",8),b=M(e,"shape",8);D(()=>Z(b()),()=>{A(n,b().r??.5)}),D(()=>(Z(m()),h(n)),()=>{A(r,m()-h(n))}),D(()=>(Z(C()),h(n)),()=>{A(i,C()-h(n))}),D(()=>h(n),()=>{A(s,2*h(n))}),D(()=>h(n),()=>{A(a,2*h(n))}),D(()=>Z(b()),()=>{A(c,b().stroke??"black")}),D(()=>Z(b()),()=>{A(u,b().strokeWidth??.02)}),D(()=>Z(b()),()=>{A(_,b().fill??"none")}),D(()=>Z(b()),()=>{A(v,b().angle??0)}),D(()=>Z(b()),()=>{A(g,b().strokeDasharray??0)}),D(()=>Z(b()),()=>{A(p,b().opacity??1)}),Oe(),ge();var O=E8();J(()=>{y(O,"x",h(r)),y(O,"y",h(i)),y(O,"width",h(s)),y(O,"height",h(a)),y(O,"stroke",h(c)),y(O,"stroke-width",h(u)),y(O,"fill",h(_)),y(O,"transform",`rotate(${h(v)}, ${m()}, ${C()})`),y(O,"stroke-dasharray",h(g)),y(O,"opacity",h(p))}),R(t,O),ae()}var b8=de('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Yg(t,e){se(e,!1);const n=it(),r=()=>be(HF,"$minimumConstraintsStore",n),i=()=>be(WF,"$maximumConstraintsStore",n),s=T(),a=T(),c=T();let u=M(e,"coord",8),_=M(e,"minOrMax",8);function v(O,w){const x=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let U=0;U<k.length;U++){let z=k[U];const Y={r:O.r+z[1],c:O.c+z[0]};x[U]=!Object.values(w).some(H=>Ve(Y,H.cell))}return x}function g(O,w){let x=kF(_(),O.r,O.c);const k=v(O,w);return x=x.filter((z,Y)=>k[Y]),x.map(z=>Io(z,!1)).join("")}function p(O,w){return _()==="max"?w:O}D(()=>Z(u()),()=>{A(s,u().c)}),D(()=>Z(u()),()=>{A(a,u().r)}),D(()=>(r(),i()),()=>{A(c,p(r(),i()))}),Oe(),ge();var m=b8(),C=K(m);y(C,"width",1),y(C,"height",1);var b=F(C);J(()=>y(b,"d",g(u(),h(c)))),W(m),J(()=>{y(C,"x",h(s)),y(C,"y",h(a))}),R(t,m),ae()}var O8=de("<circle></circle>");function Ar(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T();let u=M(e,"x",8),_=M(e,"y",8),v=M(e,"shape",8);D(()=>Z(v()),()=>{A(n,v().r??.35)}),D(()=>Z(v()),()=>{A(r,v().stroke??"black")}),D(()=>Z(v()),()=>{var p;A(i,(p=v())==null?void 0:p.opacity)}),D(()=>Z(v()),()=>{A(s,v().strokeWidth??.02)}),D(()=>Z(v()),()=>{A(a,v().fill??"none")}),D(()=>Z(v()),()=>{A(c,v().strokeDasharray??0)}),Oe(),ge();var g=O8();J(()=>{y(g,"cx",u()),y(g,"cy",_()),y(g,"r",h(n)),y(g,"stroke",h(r)),y(g,"stroke-width",h(s)),y(g,"fill",h(a)),y(g,"opacity",h(i)),y(g,"stroke-dasharray",h(c))}),R(t,g),ae()}var I8=de("<ellipse></ellipse>");function w8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T();let _=M(e,"cx",8),v=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().width??.5)}),D(()=>Z(g()),()=>{A(r,g().height??.5)}),D(()=>Z(g()),()=>{A(i,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;A(s,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{A(a,g().strokeWidth??.02)}),D(()=>Z(g()),()=>{A(c,g().fill??"none")}),D(()=>Z(g()),()=>{A(u,g().angle??0)}),Oe(),ge();var p=I8();J(()=>{y(p,"cx",_()),y(p,"cy",v()),y(p,"rx",h(n)/2),y(p,"ry",h(r)/2),y(p,"stroke",h(i)),y(p,"stroke-width",h(a)),y(p,"fill",h(c)),y(p,"opacity",h(s)),y(p,"transform",`rotate(${h(u)}, ${_()}, ${v()} )`)}),R(t,p),ae()}var L8=de("<polygon></polygon>");function Fa(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T(),_=T();let v=M(e,"cx",8),g=M(e,"cy",8),p=M(e,"shape",8);D(()=>Z(p()),()=>{A(n,p().n??3)}),D(()=>Z(p()),()=>{A(r,p().r??.5)}),D(()=>(h(r),h(n),Z(v()),Z(g())),()=>{A(i,Vp(h(r),h(n),new Me(v(),g())))}),D(()=>h(i),()=>{A(s,h(i).map(C=>`${C.x},${C.y}`).join(" "))}),D(()=>Z(p()),()=>{A(a,p().stroke??"black")}),D(()=>Z(p()),()=>{A(c,p().strokeWidth??.02)}),D(()=>Z(p()),()=>{A(u,p().fill??"none")}),D(()=>Z(p()),()=>{A(_,p().angle??0)}),Oe(),ge();var m=L8();J(()=>{y(m,"points",h(s)),y(m,"stroke",h(a)),y(m,"stroke-width",h(c)),y(m,"fill",h(u)),y(m,"transform",`rotate(${h(_)}, ${v()}, ${g()} )`)}),R(t,m),ae()}var y8=de("<rect></rect>");function A8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T();let _=M(e,"cx",8),v=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().width??.5)}),D(()=>Z(g()),()=>{A(r,g().height??.5)}),D(()=>(Z(_()),h(n)),()=>{A(i,_()-h(n)/2)}),D(()=>(Z(v()),h(r)),()=>{A(s,v()-h(r)/2)}),D(()=>Z(g()),()=>{A(a,g().stroke||"black")}),D(()=>Z(g()),()=>{A(c,g().strokeWidth||.023)}),D(()=>Z(g()),()=>{A(u,g().fill||"none")}),Oe(),ge();var p=y8();J(()=>{y(p,"x",h(i)),y(p,"y",h(s)),y(p,"width",h(n)),y(p,"height",h(r)),y(p,"stroke",h(a)),y(p,"stroke-width",h(c)),y(p,"fill",h(u))}),R(t,p),ae()}function pl(t,e){se(e,!1);const n=T();let r=M(e,"cx",8),i=M(e,"cy",8),s=M(e,"shape",8);D(()=>(Z(s()),$),()=>{var v;A(n,((v=s())==null?void 0:v.type)??$.CIRCLE)}),Oe(),ge();var a=Ne(),c=ue(a);{var u=v=>{Ar(v,{get x(){return r()},get y(){return i()},get shape(){return s()}})},_=v=>{var g=Ne(),p=ue(g);{var m=b=>{w8(b,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},C=b=>{var O=Ne(),w=ue(O);{var x=U=>{C8(U,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},k=U=>{var z=Ne(),Y=ue(z);{var H=ne=>{A8(ne,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},q=ne=>{var ce=Ne(),ee=ue(ce);{var ie=Ce=>{Fa(Ce,{get cx(){return r()},get cy(){return i()},get shape(){return s()}})},Ee=Ce=>{Ar(Ce,{get x(){return r()},get y(){return i()},get shape(){return s()}})};he(ee,Ce=>{h(n)===$.POLYGON?Ce(ie):Ce(Ee,!1)},!0)}R(ne,ce)};he(Y,ne=>{h(n)===$.RECTANGLE?ne(H):ne(q,!1)},!0)}R(U,z)};he(w,U=>{h(n)===$.SQUARE?U(x):U(k,!1)},!0)}R(b,O)};he(p,b=>{h(n)===$.ELLIPSE?b(m):b(C,!1)},!0)}R(v,g)};he(c,v=>{h(n)===$.CIRCLE?v(u):v(_,!1)})}R(t,a),ae()}var N8=de("<circle></circle>");function S8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T();let u=M(e,"x",8),_=M(e,"y",8),v=M(e,"value",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().r??.35)}),D(()=>Z(g()),()=>{A(r,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;A(i,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{A(s,g().strokeWidth??.02)}),D(()=>Z(v()),()=>{A(a,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>Z(g()),()=>{A(c,g().strokeDasharray??0)}),Oe(),ge();var p=N8();J(()=>{y(p,"cx",u()),y(p,"cy",_()),y(p,"r",h(n)),y(p,"stroke",h(r)),y(p,"stroke-width",h(s)),y(p,"fill",h(a)),y(p,"opacity",h(i)),y(p,"stroke-dasharray",h(c))}),R(t,p),ae()}var x8=de('<g class="single-cell-tool"><!><!></g>');function R8(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T();let c=M(e,"tool",8),u=M(e,"id",8);const _=c().cell,v=Zt(c().toolId,Rt)??FI;D(()=>Z(c()),()=>{A(n,c().shape??v)}),D(()=>(h(n),$),()=>{var w;A(r,((w=h(n))==null?void 0:w.type)||$.CIRCLE)}),D(()=>{},()=>{A(i,{x:_.c+.5,y:_.r+.5})}),D(()=>Me,()=>{A(s,new Me(_.c,_.r))}),D(()=>Z(c()),()=>{A(a,c().value)}),Oe(),ge();var g=x8(),p=K(g);{var m=w=>{Yg(w,{coord:_,minOrMax:"min"})},C=w=>{var x=Ne(),k=ue(x);{var U=Y=>{Yg(Y,{coord:_,minOrMax:"max"})},z=Y=>{var H=Ne(),q=ue(H);{var ne=ee=>{S8(ee,{get x(){return h(i).x},get y(){return h(i).y},get value(){return h(a)},get shape(){return h(n)}})},ce=ee=>{var ie=Ne(),Ee=ue(ie);{var Ce=xe=>{Xp(xe,{cells:[_],get shape(){return h(n)},get value(){return c().value}})},fe=xe=>{pl(xe,{get cx(){return h(i).x},get cy(){return h(i).y},get shape(){return h(n)}})};he(Ee,xe=>{h(r)===$.CAGE?xe(Ce):xe(fe,!1)},!0)}R(ee,ie)};he(q,ee=>{c().toolId===d.COLORED_COUNTING_CIRCLES?ee(ne):ee(ce,!1)},!0)}R(Y,H)};he(k,Y=>{c().toolId===d.MAXIMUM?Y(U):Y(z,!1)},!0)}R(w,x)};he(p,w=>{c().toolId===d.MINIMUM?w(m):w(C,!1)})}var b=F(p);{var O=w=>{us(w,{get value(){return h(a)},get x(){return h(s).x},get y(){return h(s).y},position:"TL"})};he(b,w=>{h(r)!==$.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&h(a)&&w(O)})}W(g),J(()=>y(g,"id",`constraint-${u()}`)),R(t,g),ae()}var T8=de("<g></g>"),D8=de('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function k8(t,e){se(e,!1);const n=it(),r=()=>be(Nd,"$singleCellToolsStore",n),i=T();D(()=>r(),()=>{A(i,r())}),Oe();var s=D8();st(s,5,()=>h(i),Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var v=T8();st(v,5,()=>Object.entries(_()),g=>g[0],(g,p)=>{var m=Ne(),C=ue(m);{var b=w=>{f8(w,{get tool(){return h(p)[1]},get id(){return h(p)[0]}})},O=w=>{var x=Ne(),k=ue(x);{var U=Y=>{p8(Y,{get tool(){return h(p)[1]},get id(){return h(p)[0]}})},z=Y=>{var H=Ne(),q=ue(H);{var ne=ce=>{R8(ce,{get tool(){return h(p)[1]},get id(){return h(p)[0]}})};he(q,ce=>{h(p)[1].type==="SIMPLE"&&ce(ne)},!0)}R(Y,H)};he(k,Y=>{h(p)[1].type==="MULTIARROW"?Y(U):Y(z,!1)},!0)}R(w,x)};he(C,w=>{h(p)[1].type==="ARROW"?w(b):w(O,!1)})}R(g,m)}),W(v),J(()=>Zr(v,`element-group ${u()}`)),R(a,v)}),W(s),R(t,s),ae()}function G8(t,e){const n=t.getRow(e.r);return new Set(n)}function M8(t,e){const n=t.getCol(e.c);return new Set(n)}function U8(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function F8(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function $8(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function P8(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function B8(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function H8(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function W8(t,e,n){let r=new Set;const s=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=s.length,c=[s[0],s[a-1]],u=s.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((p,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function z8(t,e,n){let r=new Set;const s=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!s.find(u=>u===e))return r;const c=s.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function Y8(t,e,n){let r=new Set;const s=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!s.find(u=>u===e))return r;const c=s.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function j8(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(F8(t,i))),e.get(d.ANTIKING)&&(r=r.union($8(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(P8(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(H8(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(B8(t,i)))),r}function nu(t,e,n,r,i){const s=e.get(r);if(s)for(const a of Object.entries(s)){const c=a[1],u=Y8(t,n,c);i=new Set([...i,...u])}return i}function V8(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const s=e.get(d.BETWEEN_LINE);if(s)for(const c of Object.entries(s)){const u=c[1],_=W8(t,i,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=z8(t,i,u);r=new Set([...r,..._])}return r=nu(t,e,i,d.KILLER_CAGE,r),r=nu(t,e,i,d.PARITY_BALANCE_CAGE,r),r=nu(t,e,i,d.SPOTLIGHT_CAGE,r),r}function qp(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,s=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...G8(i,e),...M8(i,e),...U8(i,e)])),n=new Set([...n,...j8(i,r,e)]),n=new Set([...n,...V8(i,s,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function K8(t,e){const n=[];if(e.length==0)return[];for(const s of e)n.push(qp(t,s));const r=n.reduce((s,a)=>s.intersection(a)),i=[];for(const s of r)i.push(s.toCoords());return i}var X8=de('<tspan class="svelte-xct9ah"> </tspan>'),q8=de('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function Z8(t,e){se(e,!1);const n=T();let r=M(e,"cell",8),i=M(e,"seen_values",8);const s=.25;function a(v){return i().find(p=>p===v)!==void 0}D(()=>Z(r()),()=>{A(n,Xn({r:r().r,c:r().c}))}),Oe(),ge();var c=Ne(),u=ue(c);{var _=v=>{var g=q8(),p=K(g);y(p,"font-size",s),st(p,5,()=>r().centerMarks,Lt,(m,C)=>{var b=X8();const O=qe(()=>a(h(C)));J(()=>wt(b,"conflict",h(O)));var w=K(b,!0);W(b),J(()=>nt(w,h(C))),R(m,b)}),W(p),W(g),J(()=>{y(p,"x",h(n).x),y(p,"y",h(n).y),y(p,"textLength",r().centerMarks.length>5?"0.9":void 0)}),R(v,g)};he(u,v=>{r().centerMarks.length&&v(_)})}R(t,c),ae()}var Q8=de('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),J8=de('<g class="corner-marks-group"></g>');function e4(t,e){se(e,!1);let n=M(e,"cell",8),r=M(e,"seen_values",8);const i=.25,s=.28;function a(g){const p=g.cornerMarks.slice(0,8),m=Xn({r:g.r,c:g.c});return p.map((C,b)=>{const O=TF(b,s);return{pos:m.add(O),value:C,idx:b}})}function c(g){return r().find(m=>m===g)!==void 0}ge();var u=Ne(),_=ue(u);{var v=g=>{var p=J8();st(p,5,()=>a(n()),Lt,(m,C)=>{let b=()=>h(C).pos,O=()=>h(C).value;var w=Q8();y(w,"font-size",i);const x=qe(()=>c(O()));var k=K(w,!0);W(w),J(()=>{y(w,"x",b().x),y(w,"y",b().y),wt(w,"conflict",h(x)),nt(k,O())}),R(m,w)}),W(p),R(g,p)};he(_,g=>{n().cornerMarks.length&&g(v)})}R(t,u),ae()}var t4=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),n4=de('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),r4=de('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),i4=de("<!><!>",1),o4=de('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function s4(t,e){se(e,!1);const n=it(),r=()=>be(Jr,"$settingsStore",n),i=()=>be(bs,"$puzzleStore",n),s=()=>be(qt,"$toolStore",n),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T();let m=M(e,"cell",8);const C=.8,b=400;function O(z,Y){if(!z)return[];let q=[...qp(h(v),Y.toCoords())].map(ne=>ne.value).filter(ne=>ne!==null);return q=[...new Set(q)],q}function w(z){return z?"1":"0"}D(()=>Z(m()),()=>{A(a,m().value)}),D(()=>Z(m()),()=>{A(c,m().given)}),D(()=>Z(m()),()=>{A(u,Xn({r:m().r,c:m().c}))}),D(()=>r(),()=>{A(_,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{A(v,i())}),D(()=>r(),()=>{A(g,r().showSolution)}),D(()=>(h(_),Z(m())),()=>{A(p,O(h(_),m()))}),Oe(),ge();var x=Ne(),k=ue(x);{var U=z=>{var Y=o4(),H=K(Y);{var q=ce=>{var ee=Ne(),ie=ue(ee);{var Ee=Ce=>{var fe=t4();y(fe,"font-size",C),y(fe,"font-weight",b);var xe=K(fe,!0);W(fe),J(()=>{y(fe,"x",h(u).x),y(fe,"y",h(u).y),nt(xe,m().region)}),R(Ce,fe)};he(ie,Ce=>{m().region!==null&&Ce(Ee)})}R(ce,ee)},ne=ce=>{var ee=Ne(),ie=ue(ee);{var Ee=fe=>{var xe=Ne(),Qe=ue(xe);{var Se=ye=>{var lt=n4();y(lt,"font-size",C),y(lt,"font-weight",b);var Ye=K(lt,!0);J(()=>nt(Ye,w(m().fog))),W(lt),J(()=>{y(lt,"x",h(u).x),y(lt,"y",h(u).y)}),R(ye,lt)};he(Qe,ye=>{m().fog!==null&&ye(Se)})}R(fe,xe)},Ce=fe=>{var xe=Ne(),Qe=ue(xe);{var Se=lt=>{var Ye=r4();y(Ye,"font-size",C),y(Ye,"font-weight",b);var On=K(Ye,!0);W(Ye),J(()=>{y(Ye,"x",h(u).x),y(Ye,"y",h(u).y),wt(Ye,"given",h(c)),nt(On,h(a))}),R(lt,Ye)},ye=lt=>{var Ye=i4(),On=ue(Ye);e4(On,{get cell(){return m()},get seen_values(){return h(p)}});var Mn=F(On);Z8(Mn,{get cell(){return m()},get seen_values(){return h(p)}}),R(lt,Ye)};he(Qe,lt=>{h(a)!==null?lt(Se):lt(ye,!1)},!0)}R(fe,xe)};he(ie,fe=>{s()===d.FOG?fe(Ee):fe(Ce,!1)},!0)}R(ce,ee)};he(H,ce=>{s()===d.REGIONS?ce(q):ce(ne,!1)})}W(Y),J(()=>wt(Y,"hide-given",m().given)),R(z,Y)};he(k,z=>{h(g)||z(U)})}R(t,x),ae()}var a4=de("<path></path>"),l4=de('<g class="highlights-group"></g>');function c4(t,e){se(e,!1);const n=it(),r=()=>be(qt,"$toolStore",n);let i=M(e,"cell",8);function s(_){const v=Xn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,C)=>{let b=xF(C,g);b=b.map(w=>w.add(v));const O=Io(b,!0);return{colorId:m,d:O}})}ge();var a=Ne(),c=ue(a);{var u=_=>{var v=Ne(),g=ue(v);{var p=m=>{var C=l4();st(C,5,()=>s(i()),Lt,(b,O)=>{let w=()=>h(O).colorId,x=()=>h(O).d;var k=a4();J(()=>{Zr(k,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),y(k,"d",x())}),R(b,k)}),W(C),R(m,C)};he(g,m=>{i().highlights.length&&m(p)})}R(_,v)};he(c,_=>{r()!==d.REGIONS&&_(u)})}R(t,a),ae()}var u4=de('<path class="cell-marker" fill="none"></path>'),d4=de('<circle fill="none" opacity="0.9"></circle>');function _4(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"marker",8);const s=.3,a=.08;D(()=>Z(i()),()=>{A(n,Kp(i(),s))}),D(()=>Z(i()),()=>{A(r,hl(i().colorId,"black"))}),Oe(),ge();var c=Ne(),u=ue(c);{var _=g=>{var p=u4();y(p,"stroke-width",a),J(()=>{y(p,"d",h(n)),y(p,"stroke",h(r))}),R(g,p)},v=g=>{var p=d4();y(p,"r",s),y(p,"stroke-width",a),J(()=>{Zr(p,`cell-marker color-${i().colorId??""}`),y(p,"cx",i().c),y(p,"cy",i().r),y(p,"stroke",h(r))}),R(g,p)};he(u,g=>{i().marker==="X"?g(_):g(v,!1)})}R(t,c),ae()}var f4=de('<g class="cell-markers"></g>');function g4(t,e){let n=M(e,"markers",8);var r=f4();st(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,s)=>{_4(i,{get marker(){return h(s)}})}),W(r),R(t,r)}var h4=de('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function p4(t,e){se(e,!1);const n=T();let r=M(e,"draftLineMarker",8);const i=.2;function s(u){return u.map(v=>[new Me(v.p1.c,v.p1.r),new Me(v.p2.c,v.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?hl(_,"black"):"darkred"}D(()=>Z(r()),()=>{A(n,Io(s(r().draftLine)))}),Oe(),ge();var c=h4();J(()=>y(c,"stroke",a(r()))),y(c,"stroke-width",i),y(c,"opacity",.5),J(()=>y(c,"d",h(n))),R(t,c),ae()}var v4=de('<path fill="none" opacity="0.9"></path>');function m4(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"marker",8);const s=.08,a=.04;D(()=>Z(i()),()=>{A(n,Kp(i(),s))}),D(()=>Z(i()),()=>{A(r,hl(i().colorId,"black"))}),Oe(),ge();var c=v4();y(c,"stroke-width",a),J(()=>{y(c,"d",h(n)),Zr(c,`edge-marker color-${i().colorId??""}`),y(c,"stroke",h(r))}),R(t,c),ae()}var E4=de('<g class="edge-markers"></g>');function C4(t,e){let n=M(e,"markers",8);var r=E4();st(r,5,n,i=>`${i.r}, ${i.c}`,(i,s)=>{m4(i,{get marker(){return h(s)}})}),W(r),R(t,r)}var b4=de('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),O4=de('<g class="line-markers svelte-yha19m"></g>');function I4(t,e){se(e,!1);let n=M(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function s(c){return hl(c,"black")}ge();var a=O4();st(a,5,n,c=>i(c),(c,u)=>{var _=b4();y(_,"stroke-width",r),J(()=>y(_,"stroke",s(h(u).colorId))),J(()=>{y(_,"x1",h(u).p1.c),y(_,"y1",h(u).p1.r),y(_,"x2",h(u).p2.c),y(_,"y2",h(u).p2.r),Zr(_,`line-marker color-${h(u).colorId??""} svelte-yha19m`)}),R(c,_)}),W(a),R(t,a),ae()}var w4=de('<g class="pen-tool"><!><!><!><!></g>');function L4(t,e){se(e,!1);const n=it(),r=()=>be(ka,"$penToolStore",n),i=T();D(()=>r(),()=>{A(i,{draftLine:r().draftLine,mode:r().mode})}),Oe(),ge();var s=w4(),a=K(s);I4(a,{get lineMarkers(){return r().lineMarkers}});var c=F(a);C4(c,{get markers(){return r().edgeMarkers}});var u=F(c);g4(u,{get markers(){return r().cellMarkers}});var _=F(u);p4(_,{get draftLineMarker(){return h(i)}}),W(s),R(t,s),ae()}var y4=de('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function A4(t,e){se(e,!1);const n=it(),r=()=>be(Ii,"$selectionStore",n),i=()=>be(Jr,"$settingsStore",n),s=()=>be(bs,"$puzzleStore",n),a=()=>be(qt,"$toolStore",n),c=T(),u=T(),_=T(),v=T(),g={type:$.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function p(O,w){return O.length?K8(h(_),O):[]}D(()=>r(),()=>{A(c,r().cells)}),D(()=>i(),()=>{A(u,i().highlightCellsSeenBySelection)}),D(()=>s(),()=>{A(_,s())}),D(()=>a(),()=>{A(v,ju(a()))}),Oe(),ge();var m=Ne(),C=ue(m);{var b=O=>{var w=y4(),x=K(w),k=qe(()=>p(h(c),h(_)));cs(x,{get cells(){return h(k)},shape:g}),W(w),R(O,w)};he(C,O=>{h(u)&&h(v)&&O(b)})}R(t,m),ae()}function vl(t){const e=[],n=t.map(s=>s.value).filter(s=>s!==null),i=[...fp(n).entries()].filter(([,s])=>s>1).map(([s])=>s);return e.push(...t.filter(s=>s.value!==null&&i.includes(s.value))),e}function N4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...vl(r))}return new Set(e)}function S4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...vl(r))}return new Set(e)}function x4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...vl(r))}return new Set(e)}function R4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function T4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getNeighboorCells(r).filter(a=>a.value===r.value);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function D4(t){const e=[],n=t.getFilledCells();for(const r of n){const s=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);s.length&&(e.push(r),e.push(...s))}return new Set(e)}function k4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),s=vl(i);s.length&&e.push(...s)}return new Set(e)}function G4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...N4(t),...S4(t),...x4(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(R4(t))),e.get(d.ANTIKING)&&(n=n.union(T4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(D4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(k4(t))),n}function M4(t,e){return[...new Set([...G4(t,e)])]}var U4=de('<rect class="conflict svelte-4mp6ok"></rect>'),F4=de('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function $4(t,e){se(e,!1);const n=it(),r=()=>be(Jr,"$settingsStore",n),i=()=>be(_n,"$gridStore",n),s=()=>be(Tr,"$globalConstraintsStore",n),a=()=>be(dn,"$cellsStore",n),c=T(),u=T(),_=T(),v=T();$.CAGE;function g(b){return M4(h(u),h(_)).map(x=>x.toCoords())}D(()=>r(),()=>{A(c,r().checkConflicts)}),D(()=>i(),()=>{A(u,i())}),D(()=>s(),()=>{A(_,s())}),D(()=>a(),()=>{A(v,a())}),Oe(),ge();var p=Ne(),m=ue(p);{var C=b=>{var O=F4();st(O,5,()=>g(h(v)),Lt,(w,x)=>{var k=U4();y(k,"width",1),y(k,"height",1),J(()=>{y(k,"x",h(x).c),y(k,"y",h(x).r)}),R(w,k)}),W(O),R(b,O)};he(m,b=>{h(c)&&b(C)})}R(t,p),ae()}var P4=de('<line class="diag svelte-ylotlw"></line>'),B4=de('<line class="antidiag svelte-ylotlw"></line>'),H4=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),W4=de('<line class="diag svelte-ylotlw"></line>'),z4=de('<line class="antidiag svelte-ylotlw"></line>'),Y4=de('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),j4=de('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function V4(t,e){se(e,!1);const n=it(),r=()=>be(Tr,"$globalConstraintsStore",n),i=()=>be(_n,"$gridStore",n),s=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T(),m=T(),C=T(),b=T(),O=T(),w=0,x=0,k=0,U=0;D(()=>r(),()=>{A(s,r())}),D(()=>(h(s),d),()=>{A(a,!!h(s).get(d.POSITIVE_DIAGONAL))}),D(()=>(h(s),d),()=>{A(c,!!h(s).get(d.NEGATIVE_DIAGONAL))}),D(()=>(h(s),d),()=>{A(u,!!h(s).get(d.NEGATIVE_ANTIDIAGONAL))}),D(()=>(h(s),d),()=>{A(_,!!h(s).get(d.POSITIVE_ANTIDIAGONAL))}),D(()=>(h(s),d),()=>{A(v,!!h(s).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),D(()=>(h(s),d),()=>{A(g,!!h(s).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),D(()=>i(),()=>{A(p,i())}),D(()=>h(p),()=>{A(m,h(p).nCols)}),D(()=>h(p),()=>{A(C,h(p).nRows)}),D(()=>h(p),()=>{A(b,h(p).nCols)}),D(()=>h(p),()=>{A(O,h(p).nRows)}),Oe(),ge();var z=j4(),Y=K(z);{var H=Se=>{var ye=P4();y(ye,"x1",w),y(ye,"y1",x),J(()=>{y(ye,"x2",h(b)),y(ye,"y2",h(O))}),R(Se,ye)};he(Y,Se=>{h(c)&&Se(H)})}var q=F(Y);{var ne=Se=>{var ye=B4();y(ye,"x1",w),y(ye,"y1",x),J(()=>{y(ye,"x2",h(b)),y(ye,"y2",h(O))}),R(Se,ye)};he(q,Se=>{h(u)&&Se(ne)})}var ce=F(q);{var ee=Se=>{var ye=H4();y(ye,"x1",w),y(ye,"y1",x),J(()=>{y(ye,"x2",h(b)),y(ye,"y2",h(O))}),R(Se,ye)};he(ce,Se=>{h(v)&&Se(ee)})}var ie=F(ce);{var Ee=Se=>{var ye=W4();y(ye,"x2",U),y(ye,"y1",k),J(()=>{y(ye,"x1",h(m)),y(ye,"y2",h(C))}),R(Se,ye)};he(ie,Se=>{h(a)&&Se(Ee)})}var Ce=F(ie);{var fe=Se=>{var ye=z4();y(ye,"x2",U),y(ye,"y1",k),J(()=>{y(ye,"x1",h(m)),y(ye,"y2",h(C))}),R(Se,ye)};he(Ce,Se=>{h(_)&&Se(fe)})}var xe=F(Ce);{var Qe=Se=>{var ye=Y4();y(ye,"x2",U),y(ye,"y1",k),J(()=>{y(ye,"x1",h(m)),y(ye,"y2",h(C))}),R(Se,ye)};he(xe,Se=>{h(g)&&Se(Qe)})}W(z),R(t,z),ae()}var K4=de('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function X4(t,e){se(e,!1);const n=it(),r=()=>be(dn,"$cellsStore",n),i=()=>be(Ip,"$showFogStore",n),s=()=>be(el,"$solutionStore",n),a=()=>be(_n,"$gridStore",n),c=T(),u=T(),_=T(),v=T(),g=T(),p=T();let m=M(e,"boundingBox",8),C=M(e,"gridShape",8);function b(Ee){const Ce=Ee.filter(ye=>ye.fog);if(!h(g))return Ce.map(lt=>lt.toCoords());const fe=Ee.filter(ye=>ye.value===h(g)[ye.r][ye.c]);let xe=new Set;for(const ye of fe){const lt=h(p).getNeighboorCells(ye);xe=new Set([...lt,ye])}return[...new Set(Ce).difference(xe)].map(ye=>ye.toCoords())}D(()=>r(),()=>{A(c,r())}),D(()=>h(c),()=>{A(u,b(h(c)))}),D(()=>h(u),()=>{A(_,to(h(u),0))}),D(()=>i(),()=>{A(v,i())}),D(()=>s(),()=>{A(g,s())}),D(()=>a(),()=>{A(p,a())}),Oe(),ge();var O=K4(),w=K(O),x=K(w);W(w);var k=F(w),U=K(k);y(U,"stroke-width",.5);var z=F(U);y(z,"stroke-width",.375);var Y=F(z);y(Y,"stroke-width",.25);var H=F(Y);y(H,"stroke-width",.125),Zi(),W(k);var q=F(k),ne=K(q);Zi(),W(q);var ce=F(q),ee=K(ce),ie=F(ee);y(ie,"x",0),y(ie,"y",0),W(ce),W(O),J(()=>{y(x,"d",h(_)),wt(k,"disabled",!h(v)),wt(q,"disabled",!h(v)),y(ne,"x",m().x),y(ne,"y",m().y),y(ne,"width",m().width),y(ne,"height",m().height),y(ee,"x",m().x),y(ee,"y",m().y),y(ee,"width",m().width),y(ee,"height",m().height),y(ie,"width",C().nCols),y(ie,"height",C().nRows)}),R(t,O),ae()}var q4=de('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function Z4(t,e){se(e,!1);const n=it(),r=()=>be(Ip,"$showFogStore",n),i=T();let s=M(e,"gridShape",8);D(()=>r(),()=>{A(i,r())}),Oe(),ge();var a=q4(),c=K(a);y(c,"x",0),y(c,"y",0),W(a),J(()=>{y(a,"visibility",h(i)?"visible":"hidden"),y(c,"width",s().nCols),y(c,"height",s().nRows)}),R(t,a),ae()}var Q4=de('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function J4(t,e){se(e,!1);const n=T();let r=M(e,"r",8),i=M(e,"c",8),s=M(e,"val",8);const a=.8,c=400;D(()=>(Z(r()),Z(i())),()=>{A(n,Xn({r:r(),c:i()}))}),Oe(),ge();var u=Ne(),_=ue(u);{var v=g=>{var p=Q4();y(p,"font-size",a),y(p,"font-weight",c);var m=K(p,!0);W(p),J(()=>{y(p,"x",h(n).x),y(p,"y",h(n).y),nt(m,s())}),R(g,p)};he(_,g=>{s()!==null&&g(v)})}R(t,u),ae()}var e$=de('<g class="solution-layer"></g>');function t$(t,e){se(e,!1);const n=it(),r=()=>be(el,"$solutionStore",n),i=()=>be(Jr,"$settingsStore",n),s=()=>be(Ja,"$gameModeStore",n),a=T(),c=T(),u=T();D(()=>r(),()=>{A(a,r())}),D(()=>i(),()=>{A(c,i().showSolution)}),D(()=>s(),()=>{A(u,s())}),Oe(),ge();var _=Ne(),v=ue(_);{var g=p=>{var m=e$();st(m,5,()=>h(a),Lt,(C,b,O)=>{var w=Ne(),x=ue(w);st(x,1,()=>h(b),Lt,(k,U,z)=>{J4(k,{r:O,c:z,get val(){return h(U)}})}),R(C,w)}),W(m),R(p,m)};he(v,p=>{h(a)&&h(c)&&h(u)===ro.SETTING&&p(g)})}R(t,_),ae()}var n$=de("<g></g>"),r$=de('<g mask="url(#fog-mask-fog)"></g>');function Kr(t,e){let n=M(e,"elements",8),r=M(e,"g_name",8),i=M(e,"Component",8);var s=r$();st(s,5,n,Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var v=n$();st(v,5,()=>Object.entries(_()),g=>g[0],(g,p)=>{i()(g,{get tool(){return h(p)[1]}})}),W(v),J(()=>Zr(v,`element-group ${u()}`)),R(a,v)}),W(s),J(()=>Zr(s,bI(r()))),R(t,s)}var i$=de('<line class="svelte-yr67cf"></line>');function o$(t,e){se(e,!1);const n=T(),r=T(),i=T();let s=M(e,"shape",8),a=M(e,"coords",8);const[c,u]=a(),_=u.c,v=c.c===u.c?u.c+1:u.c,g=u.r,p=c.r===u.r?u.r+1:u.r;D(()=>Z(s()),()=>{A(n,s().stroke??"black")}),D(()=>Z(s()),()=>{var C;A(r,(C=s())==null?void 0:C.opacity)}),D(()=>Z(s()),()=>{A(i,s().strokeWidth??.02)}),Oe(),ge();var m=i$();y(m,"x1",_),y(m,"x2",v),y(m,"y1",g),y(m,"y2",p),J(()=>{y(m,"stroke",h(n)),y(m,"stroke-width",h(i)),y(m,"opacity",h(r))}),R(t,m),ae()}var s$=de('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function a$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T();let c=M(e,"tool",8);const u=c().cells,_=Zt(c().toolId,Rt)??Nh;function v(b,O){return O===$.TEXT_ONLY?b.value?b.value:"-":b.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const b=Xn(u[0]);return Xn(u[1]).subtract(b).angle()/(2*Math.PI)*360}D(()=>Z(c()),()=>{A(n,c().shape??_)}),D(()=>Ua,()=>{A(r,jU(Ua(u)))}),D(()=>(h(n),$),()=>{var b;A(i,((b=h(n))==null?void 0:b.type)||$.CIRCLE)}),D(()=>h(n),()=>{var b;A(s,((b=h(n))==null?void 0:b.fontSize)??.2)}),D(()=>h(n),()=>{var b;A(a,((b=h(n))==null?void 0:b.fontColor)??"black")}),Oe(),ge();var p=Ne(),m=ue(p);{var C=b=>{var O=s$(),w=K(O);{var x=Y=>{Ar(Y,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},k=Y=>{var H=Ne(),q=ue(H);{var ne=ee=>{Ar(ee,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},ce=ee=>{var ie=Ne(),Ee=ue(ie);{var Ce=xe=>{o$(xe,{coords:u,get shape(){return h(n)}})},fe=xe=>{pl(xe,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return h(n)}})};he(Ee,xe=>{h(i)===$.BORDER_LINE?xe(Ce):xe(fe,!1)},!0)}R(ee,ie)};he(q,ee=>{h(i)===$.TEXT_ONLY?ee(ne):ee(ce,!1)},!0)}R(Y,H)};he(w,Y=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?Y(x):Y(k,!1)})}var U=F(w);J(()=>y(U,"transform",`rotate(${g()}, ${h(r).x}, ${h(r).y} )`));var z=K(U,!0);J(()=>nt(z,v(c(),h(i)))),W(U),W(O),J(()=>{y(U,"x",h(r).x),y(U,"y",h(r).y),y(U,"font-size",h(s)),y(U,"fill",h(a))}),R(b,O)};he(m,b=>{u.length===2&&b(C)})}R(t,p),ae()}var l$=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),c$=de('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),u$=de('<g class="quadruple-text"><!></g>');function d$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T();let c=M(e,"cornerTool",8);const u=c().cells,_=new Me(u[u.length-1].c,u[u.length-1].r),v=Zt(c().toolId,Rt)??Sh;D(()=>Z(c()),()=>{A(n,c().value)}),D(()=>Z(c()),()=>{A(r,c().shape??v)}),D(()=>h(r),()=>{var C;A(i,((C=h(r))==null?void 0:C.fontSize)??.2)}),D(()=>h(r),()=>{var C;A(s,((C=h(r))==null?void 0:C.fontColor)??"black")}),D(()=>h(n),()=>{var C;A(a,h(n)?(C=h(n))==null?void 0:C.split(","):[])}),Oe(),ge();var g=Ne(),p=ue(g);{var m=C=>{var b=u$(),O=K(b);{var w=k=>{var U=l$(),z=K(U,!0);J(()=>nt(z,h(a).join(" "))),W(U),J(()=>{y(U,"x",_.x),y(U,"y",_.y),y(U,"font-size",h(i)),y(U,"fill",h(s))}),R(k,U)},x=k=>{var U=c$(),z=ue(U),Y=K(z,!0);J(()=>nt(Y,h(a).slice(0,2).join(" "))),W(z);var H=F(z),q=K(H,!0);J(()=>nt(q,h(a).slice(2).join(" "))),W(H),J(()=>{y(z,"x",_.x),y(z,"y",_.y),y(z,"dy",-h(i)/2),y(z,"font-size",h(i)),y(z,"fill",h(s)),y(H,"x",_.x),y(H,"y",_.y),y(H,"dy",h(i)/2),y(H,"font-size",h(i)),y(H,"fill",h(s))}),R(k,U)};he(O,k=>{h(a).length<=2?k(w):k(x,!1)})}W(b),J(()=>y(b,"data-count",h(a).length)),R(C,b)};he(p,C=>{h(n)&&C(m)})}R(t,g),ae()}var _$=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),f$=de('<g class="corner-tool"><!><!></g>');function g$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T();let a=M(e,"tool",8);const c=a().cells,u=Zt(a().toolId,Rt)??Sh,_=new Me(c[c.length-1].c,c[c.length-1].r);function v(C,b){return b===$.TEXT_ONLY?C.value?C.value:"-":C.value??""}D(()=>Z(a()),()=>{A(n,a().shape??u)}),D(()=>(h(n),$),()=>{var C;A(r,((C=h(n))==null?void 0:C.type)??$.CIRCLE)}),D(()=>h(n),()=>{var C;A(i,((C=h(n))==null?void 0:C.fontSize)??.2)}),D(()=>h(n),()=>{var C;A(s,((C=h(n))==null?void 0:C.fontColor)??"black")}),Oe(),ge();var g=Ne(),p=ue(g);{var m=C=>{var b=f$(),O=K(b);pl(O,{get cx(){return _.x},get cy(){return _.y},get shape(){return h(n)}});var w=F(O);{var x=U=>{d$(U,{get cornerTool(){return a()}})},k=U=>{var z=_$(),Y=K(z,!0);J(()=>nt(Y,v(a(),h(r)))),W(z),J(()=>{y(z,"x",_.x),y(z,"y",_.y),y(z,"font-size",h(i)),y(z,"fill",h(s))}),R(U,z)};he(w,U=>{a().toolId===d.QUADRUPLE?U(x):U(k,!1)})}W(b),R(C,b)};he(p,C=>{c.length===4&&C(m)})}R(t,g),ae()}var h$=de('<text text-anchor="middle" dominant-baseline="central"> </text>'),p$=de('<g class="center-corner-or-edge-tool"><!><!></g>');function v$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T();let u=M(e,"tool",8);const _=u().cell,v=Zt(u().toolId,Rt)??Nh;function g(w,x){return x===$.TEXT_ONLY?w.value?w.value:"-":w.value??""}D(()=>Z(u()),()=>{A(n,u().shape??v)}),D(()=>{},()=>{A(r,_)}),D(()=>(h(n),$),()=>{var w;A(i,((w=h(n))==null?void 0:w.type)||$.CIRCLE)}),D(()=>h(n),()=>{var w;A(s,((w=h(n))==null?void 0:w.fontSize)??.2)}),D(()=>h(n),()=>{var w;A(a,((w=h(n))==null?void 0:w.fontColor)??"black")}),D(()=>h(r),()=>{A(c,h(r).r%1===.5&&h(r).c%1===.5)}),Oe(),ge();var p=p$(),m=K(p);pl(m,{get cx(){return h(r).c},get cy(){return h(r).r},get shape(){return h(n)}});var C=F(m);{var b=w=>{var x=qe(()=>g(u(),h(i))),k=qe(()=>Math.floor(h(r).c)),U=qe(()=>Math.floor(h(r).r));us(w,{get value(){return h(x)},get x(){return h(k)},get y(){return h(U)},position:"TL",get fontColor(){return h(a)}})},O=w=>{var x=h$(),k=K(x,!0);J(()=>nt(k,g(u(),h(i)))),W(x),J(()=>{y(x,"x",h(r).c),y(x,"y",h(r).r),y(x,"font-size",h(s)),y(x,"fill",h(a))}),R(w,x)};he(C,w=>{h(c)?w(b):w(O,!1)})}W(p),R(t,p),ae()}var m$=de('<path fill="none"></path>');function Li(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T();let u=M(e,"linePoints",8),_=M(e,"shape",8,void 0);const v="round",g="round";D(()=>Z(_()),()=>{var m;A(n,((m=_())==null?void 0:m.stroke)??"gray")}),D(()=>Z(_()),()=>{var m;A(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),D(()=>Z(_()),()=>{var m;A(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),D(()=>Z(_()),()=>{var m;A(s,((m=_())==null?void 0:m.strokeDashoffset)??0)}),D(()=>Z(_()),()=>{var m,C,b,O,w,x,k,U;A(a,{shortenHead:((C=(m=_())==null?void 0:m.linePathOptions)==null?void 0:C.shortenHead)??.2,shortenTail:((O=(b=_())==null?void 0:b.linePathOptions)==null?void 0:O.shortenTail)??.2,bezierRounding:((x=(w=_())==null?void 0:w.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:((U=(k=_())==null?void 0:k.linePathOptions)==null?void 0:U.closeLoops)??!1})}),D(()=>(Z(u()),h(a)),()=>{A(c,gl(u(),h(a)))}),Oe(),ge();var p=m$();y(p,"stroke-linejoin",v),y(p,"stroke-linecap",g),J(()=>{y(p,"d",h(c)),y(p,"stroke",h(n)),y(p,"stroke-width",h(r)),y(p,"stroke-dasharray",h(i)),y(p,"stroke-dashoffset",h(s))}),R(t,p),ae()}var E$=re("<!> <!> <!>",1);function C$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T();let a=M(e,"linePoints",8),c=M(e,"shape",8,_s);function u(O){var k;const w=St.cloneDeep(O);w.r=w.r||.2;const x=w.r;return w.strokeDasharray=O.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(k=w.linePathOptions)==null?void 0:k.bezierRounding},w}D(()=>Z(a()),()=>{A(n,a().length)}),D(()=>(h(n),Z(a())),()=>{A(r,h(n)>=0?a()[0]:void 0)}),D(()=>(h(n),Z(a())),()=>{A(i,h(n)>=0?a()[h(n)-1]:void 0)}),D(()=>Z(c()),()=>{A(s,u(c()))}),Oe(),ge();var _=E$(),v=ue(_);{var g=O=>{Ar(O,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(s)}})};he(v,O=>{h(r)&&O(g)})}var p=F(v,2);{var m=O=>{Li(O,{get linePoints(){return a()},get shape(){return h(s)}})};he(p,O=>{h(n)>1&&O(m)})}var C=F(p,2);{var b=O=>{Ar(O,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(s)}})};he(C,O=>{h(i)&&O(b)})}R(t,_),ae()}var b$=re("<!> <!> <!>",1);function O$(t,e){se(e,!1);const n=T(),r=T(),i=T();let s=M(e,"linePoints",8),a=M(e,"shape",12,_s);const c=4,u=.5;function _(U,z){const Y=z.r??u,H=z.n??c,q=z.angle??0,ne=Vp(Y,H,new Me(0,0),!0,0),ce=(H+(U-q/360)*H%H)%H,ee=Math.floor(ce)%H,ie=Math.ceil(ce)%H;return ne[ee].lerp(ne[ie],ce%1).length()}function v(U){if(h(n)<=1)return 0;const z=s()[0],H=s()[1].subtract(z).angle()/(2*Math.PI);return _(H,U)}function g(U){if(h(n)<=1)return 0;const z=s()[h(n)-1],H=s()[h(n)-2].subtract(z).angle()/(2*Math.PI);return _(H,U)}function p(U){var Y;const z=St.cloneDeep(U);return z.r=z.r||u,z.opacity=1,z.linePathOptions={shortenHead:v(z),shortenTail:g(z),bezierRounding:(Y=z.linePathOptions)==null?void 0:Y.bezierRounding},z}D(()=>Z(s()),()=>{A(n,s().length)}),D(()=>(h(n),Z(s())),()=>{A(r,h(n)>=0?s()[0]:void 0)}),D(()=>(h(n),Z(s())),()=>{A(i,h(n)>=0?s()[h(n)-1]:void 0)}),D(()=>Z(a()),()=>{a(p(a()))}),Oe(),ge();var m=b$(),C=ue(m);{var b=U=>{Fa(U,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return a()}})};he(C,U=>{h(r)&&U(b)})}var O=F(C,2);{var w=U=>{Li(U,{get linePoints(){return s()},get shape(){return a()}})};he(O,U=>{h(n)>1&&U(w)})}var x=F(O,2);{var k=U=>{Fa(U,{get cx(){return h(i).x},get cy(){return h(i).y},get shape(){return a()}})};he(x,U=>{h(i)&&U(k)})}R(t,m),ae()}var I$=re("<!> <!>",1);function jg(t,e){se(e,!1);const n=T();let r=M(e,"linePoints",8),i=M(e,"shape",8,_s);function s(m){var O,w,x;const C=St.cloneDeep(m);C.r=C.r||.3,C.opacity=1;const b=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||b,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}function a(m){var O,w,x;const C=St.cloneDeep(m);C.r=C.r||.3,C.opacity=1,C.strokeWidth=0;const b=C.r;return C.linePathOptions={shortenHead:((O=C.linePathOptions)==null?void 0:O.shortenHead)||b,shortenTail:(w=C.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=C.linePathOptions)==null?void 0:x.bezierRounding},C}D(()=>Z(r()),()=>{A(n,r().length>0?r()[0]:void 0)}),Oe(),ge();var c=I$(),u=ue(c);{var _=m=>{var C=qe(()=>s(i()));Li(m,{get linePoints(){return r()},get shape(){return h(C)}})};he(u,m=>{r().length>1&&m(_)})}var v=F(u,2);{var g=m=>{var C=qe(()=>s(i()));Ar(m,{get x(){return h(n).x},get y(){return h(n).y},get shape(){return h(C)}})},p=m=>{var C=Ne(),b=ue(C);{var O=w=>{var x=qe(()=>a(i()));Fa(w,{get cx(){return h(n).x},get cy(){return h(n).y},get shape(){return h(x)}})};he(b,w=>{h(n)&&w(O)},!0)}R(m,C)};he(v,m=>{h(n)&&i().type===$.THERMO_WITH_CIRCLE?m(g):m(p,!1)})}R(t,c),ae()}var w$=de('<g class="line-tool"><!></g>');function L$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T();let a=M(e,"tool",8);const c=Zt(a().toolId,Rt)??_s;D(()=>Z(a()),()=>{A(n,Ua(a().cells))}),D(()=>Z(a()),()=>{A(r,a().shape??c)}),D(()=>(h(r),$),()=>{var p;A(i,((p=h(r))==null?void 0:p.type)||$.LINE)}),D(()=>h(r),()=>{var p;A(s,((p=h(r))==null?void 0:p.opacity)??.8)}),Oe(),ge();var u=w$(),_=K(u);{var v=p=>{Li(p,{get linePoints(){return h(n)},get shape(){return h(r)}})},g=p=>{var m=Ne(),C=ue(m);{var b=w=>{C$(w,{get linePoints(){return h(n)},get shape(){return h(r)}})},O=w=>{var x=Ne(),k=ue(x);{var U=Y=>{O$(Y,{get linePoints(){return h(n)},get shape(){return h(r)}})},z=Y=>{var H=Ne(),q=ue(H);{var ne=ee=>{jg(ee,{get linePoints(){return h(n)},get shape(){return h(r)}})},ce=ee=>{var ie=Ne(),Ee=ue(ie);{var Ce=xe=>{jg(xe,{get linePoints(){return h(n)},get shape(){return h(r)}})},fe=xe=>{Li(xe,{get linePoints(){return h(n)},get shape(){return h(r)}})};he(Ee,xe=>{h(i)===$.THERMO_WITH_POLYGON?xe(Ce):xe(fe,!1)},!0)}R(ee,ie)};he(q,ee=>{h(i)===$.THERMO_WITH_CIRCLE?ee(ne):ee(ce,!1)},!0)}R(Y,H)};he(k,Y=>{h(i)===$.LINE_WITH_POLYGON_ENDS?Y(U):Y(z,!1)},!0)}R(w,x)};he(C,w=>{h(i)===$.LINE_WITH_CIRCLE_ENDS?w(b):w(O,!1)},!0)}R(p,m)};he(_,p=>{h(i)===$.LINE?p(v):p(g,!1)})}W(u),J(()=>y(u,"opacity",h(s))),R(t,u),ae()}var y$=de('<g class="cage-tool"><!></g>');function A$(t,e){se(e,!1);const n=T();let r=M(e,"tool",8);const i=Zt(r().toolId,Rt)??Vu;D(()=>Z(r()),()=>{A(n,r().shape??i)}),Oe(),ge();var s=y$(),a=K(s);Xp(a,{get cells(){return r().cells},get shape(){return h(n)},get value(){return r().value}}),W(s),R(t,s),ae()}var N$=re("<!> <!> <!> <!>",1);function S$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T(),c=T(),u=T(),_=T();let v=M(e,"tool",8);const g=Zt(v().toolId,Rt)??BI,p=800,m=v().value;D(()=>Z(v()),()=>{A(n,v().shape??g)}),D(()=>h(n),()=>{A(r,h(n).inset??.15)}),D(()=>h(n),()=>{A(i,h(n).strokeWidth??.07)}),D(()=>h(n),()=>{A(s,h(n).fontColor??h(n).stroke??"black")}),D(()=>Z(v()),()=>{A(a,v().cells[v().cells.length-1])}),D(()=>Z(v()),()=>{A(c,v().cells2[v().cells2.length-1])}),D(()=>(h(a),h(r)),()=>{A(u,new Me(h(a).c+1-h(r)-.05,h(a).r+1-h(r)-.05))}),D(()=>(h(c),h(r)),()=>{A(_,new Me(h(c).c+1-h(r)-.05,h(c).r+1-h(r)-.05))}),Oe(),ge();var C=N$(),b=ue(C);cs(b,{get cells(){return v().cells},get shape(){return h(n)}});var O=F(b,2);us(O,{value:m,get x(){return h(u).x},get y(){return h(u).y},position:"BR",get fontColor(){return h(s)},fontWeight:p});var w=F(O,2);cs(w,{get cells(){return v().cells2},get shape(){return h(n)}});var x=F(w,2);us(x,{value:m,get x(){return h(_).x},get y(){return h(_).y},position:"BR",get fontColor(){return h(s)},fontWeight:p}),R(t,C),ae()}var x$=de('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function R$(t,e){var Y;se(e,!1);const n=T(),r=T(),i=T();let s=M(e,"tool",8);const a=s().cell,c=s().direction,u=Wh(a,c),_=Xn(a),v=Zt(s().toolId,Rt)??HI,g=((Y=h(n))==null?void 0:Y.fontSize)??.5,p=.03;function m(H){return H.value&&H.value.length?H.value:"-"}function C(){const ne=Xn(u).subtract(_).length(),ce={shortenHead:.3*ne,shortenTail:.55*ne};return ls([a,u],ce)}const O=`outside-tool-arrow-marker-${crypto.randomUUID()}`;D(()=>Z(s()),()=>{A(n,s().shape??v)}),D(()=>h(n),()=>{var H;A(r,((H=h(n))==null?void 0:H.fontColor)??"var(--text-primary-color)")}),D(()=>h(n),()=>{var H;A(i,((H=h(n))==null?void 0:H.stroke)??"var(--text-primary-color)")}),Oe(),ge();var w=x$(),x=K(w);As(x,{id:O,l:.07,strokeWidth:p,get stroke(){return h(i)}});var k=F(x);J(()=>y(k,"d",C())),y(k,"stroke-width",p),y(k,"marker-end",`url(#${O??""})`);var U=F(k);y(U,"font-size",g);var z=K(U,!0);J(()=>nt(z,m(s()))),W(U),W(w),J(()=>{y(k,"stroke",h(i)),y(U,"x",_.x),y(U,"y",_.y),y(U,"fill",h(r))}),R(t,w),ae()}var T$=re("<!> <!> <!>",1);function D$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T(),a=T();let c=M(e,"linePoints",8),u=M(e,"shape",8);function _(O){const w=St.cloneDeep(O);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}D(()=>Z(c()),()=>{A(n,c().length)}),D(()=>(h(n),Z(c())),()=>{A(r,h(n)>1&&c()[0].equals(c()[h(n)-1]))}),D(()=>(h(n),Z(c())),()=>{A(i,h(n)>=0?c()[0]:void 0)}),D(()=>(h(n),Z(c())),()=>{A(s,h(n)>=0?c()[h(n)-1]:void 0)}),D(()=>Z(u()),()=>{A(a,_(u()))}),Oe(),ge();var v=T$(),g=ue(v);Li(g,{get linePoints(){return c()},get shape(){return u()}});var p=F(g,2);{var m=O=>{Ar(O,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(a)}})};he(p,O=>{!h(r)&&h(i)&&O(m)})}var C=F(p,2);{var b=O=>{Ar(O,{get x(){return h(s).x},get y(){return h(s).y},get shape(){return h(a)}})};he(C,O=>{!h(r)&&h(s)&&O(b)})}R(t,v),ae()}var k$=de('<g class="corner-line-tool"><!></g>');function G$(t,e){se(e,!1);const n=T(),r=T(),i=T(),s=T();let a=M(e,"tool",8);const c=Zt(a().toolId,Rt)??_s;D(()=>(Z(a()),Me),()=>{A(n,a().coords.map(p=>new Me(p.c,p.r)))}),D(()=>Z(a()),()=>{A(r,a().shape??c)}),D(()=>(h(r),$),()=>{var p;A(i,((p=h(r))==null?void 0:p.type)||$.LINE)}),D(()=>h(r),()=>{var p;A(s,((p=h(r))==null?void 0:p.opacity)??1)}),Oe(),ge();var u=k$(),_=K(u);{var v=p=>{D$(p,{get linePoints(){return h(n)},get shape(){return h(r)}})},g=p=>{Li(p,{get linePoints(){return h(n)},get shape(){return h(r)}})};he(_,p=>{h(i)===$.MAZE_WALL?p(v):p(g,!1)})}W(u),J(()=>y(u,"opacity",h(s))),R(t,u),ae()}var M$=de('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function U$(t,e){se(e,!1);const n=it(),r=()=>be(_n,"$gridStore",n),i=()=>be(pt,"$localConstraintsStore",n),s=()=>be(qt,"$toolStore",n),a=()=>be(dn,"$cellsStore",n),c=()=>be(qF,"$cageToolsStore",n),u=()=>be(VF,"$lineToolsStore",n),_=()=>be(ZF,"$cloneToolsStore",n),v=()=>be(KF,"$cornerLineToolsStore",n),g=()=>be(QF,"$outsideDirectionToolsStore",n),p=()=>be(zF,"$edgeToolsStore",n),m=()=>be(jF,"$cornerToolsStore",n),C=()=>be(YF,"$centerCornerOrEdgeToolsStore",n),b=T(),O=T(),w=T();let x=M(e,"svgRef",12,null);function k(){for(const[Dt,De]of i().entries()){if(!os(Dt))continue;if(Object.entries(De).some(([ke,Te])=>!Xt(Te.cell,h(O))))return!0}return!1}function U(Dt,De){const Ie=k(),ke=os(De),Te=Ie||ke?1:.2,At=-Te,Rs=-Te,El=Dt.nCols+2*Te,ai=Dt.nRows+2*Te;return{x:At,y:Rs,width:El,height:ai}}function z(Dt){return`${Dt.x} ${Dt.y} ${Dt.width} ${Dt.height}`}D(()=>r(),()=>{A(b,r())}),D(()=>h(b),()=>{A(O,{nRows:h(b).nRows,nCols:h(b).nCols})}),D(()=>(h(O),s()),()=>{A(w,U(h(O),s()))}),Oe(),ge();var Y=M$();J(()=>y(Y,"viewBox",z(h(w))));var H=K(Y);X4(H,{get boundingBox(){return h(w)},get gridShape(){return h(O)}});var q=F(H);Z4(q,{get gridShape(){return h(O)}});var ne=F(q);BF(ne,{get grid(){return r()}});var ce=F(ne);OF(ce,{get gridShape(){return h(O)}});var ee=F(ce);st(ee,5,a,Lt,(Dt,De)=>{c4(Dt,{get cell(){return h(De)}})}),W(ee);var ie=F(ee);A4(ie,{});var Ee=F(ie);k8(Ee,{});var Ce=F(Ee);Kr(Ce,{get elements(){return c()},g_name:"cage-tools-layer",Component:A$});var fe=F(Ce);Kr(fe,{get elements(){return u()},g_name:"line-tools-layer",Component:L$});var xe=F(fe);Kr(xe,{get elements(){return _()},g_name:"clone-tools-layer",Component:S$});var Qe=F(xe);LF(Qe,{});var Se=F(Qe);V4(Se,{});var ye=F(Se);UF(ye,{});var lt=F(ye);Kr(lt,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:G$});var Ye=F(lt);d8(Ye,{get boundingBox(){return h(w)}});var On=F(Ye);Kr(On,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:R$});var Mn=F(On);$F(Mn,{get boundingBox(){return h(w)}});var Gr=F(Mn);CF(Gr,{});var Qt=F(Gr);Kr(Qt,{get elements(){return p()},g_name:"edge-tools-layer",Component:a$});var hr=F(Qt);Kr(hr,{get elements(){return m()},g_name:"corner-tools-layer",Component:g$});var si=F(hr);Kr(si,{get elements(){return C()},g_name:"center-corner-edge-tools-layer",Component:v$});var rr=F(si);L4(rr,{});var Un=F(rr);st(Un,5,a,Lt,(Dt,De)=>{s4(Dt,{get cell(){return h(De)}})}),W(Un);var xi=F(Un);t$(xi,{});var Mr=F(xi);$4(Mr,{}),W(Y),bi(Y,Dt=>x(Dt),()=>x()),R(t,Y),ae()}function F$(t){return tw(t)?(EI(),!0):!1}function $$(t){return nw(t)?(mp(),!0):!1}function P$(t){return rw(t)?(Ep(),!0):!1}function ru(t){(F$(t)||$$(t)||P$(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var B$=re('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function H$(t,e){se(e,!1);const n=it(),r=()=>be(jp,"$InputHandlerStore",n),i=()=>be(Qi,"$svgRefStore",n),s=T();let a=T(null);function c(p){return m=>{p&&h(s)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===h(a))&&p(m)}}D(()=>r(),()=>{A(s,r())}),Oe();var u=B$();Ue("keydown",Bc,function(...p){ru==null||ru.apply(this,p)});var _=gg(()=>{var p;return c((p=h(s))==null?void 0:p.keyDown)});Ue("keydown",Bc,function(...p){var m;(m=h(_))==null||m.apply(this,p)});var v=gg(()=>{var p;return c((p=h(s))==null?void 0:p.keyUp)});Ue("keyup",Bc,function(...p){var m;(m=h(v))==null||m.apply(this,p)});var g=K(u);U$(g,{get svgRef(){return ih(),i()},set svgRef(p){ds(Qi,p)},$$legacy:!0}),W(u),bi(u,p=>A(a,p),()=>h(a)),Ue("pointerdown",u,Yc(Kn(p=>{var m;p.currentTarget.focus(),(m=h(s))==null||m.pointerDown(p)})),!0),Ue("pointermove",u,Yc(Kn(p=>{var m;p.currentTarget.focus(),(m=h(s))==null||m.pointerMove(p)})),!0),Ue("pointerup",u,Yc(Kn(p=>{var m;p.currentTarget.focus(),(m=h(s))==null||m.pointerUp(p)})),!0),R(t,u),ae()}var W$=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function z$(t){var e=W$();R(t,e)}var Y$=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function j$(t){var e=Y$();R(t,e)}var V$=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function K$(t){var e=V$();R(t,e)}var X$=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function q$(t){var e=X$();R(t,e)}var Z$=re('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function Q$(t,e){se(e,!1);const n=it(),r=()=>be(mo,"$commandHistoryStore",n),i=()=>be(pu,"$selectOnStore",n),s=T(),a=T();function c(){mp()}function u(){Ep()}function _(){console.log("check")}function v(){ds(pu,!i())}D(()=>r(),()=>{A(s,r()._undoStack.length===0)}),D(()=>r(),()=>{A(a,r()._redoStack.length===0)}),Oe(),ge();var g=Z$(),p=K(g),m=K(p);q$(m),W(p);var C=F(p,2),b=K(C);j$(b),W(C);var O=F(C,2);O.disabled=!0;var w=K(O);z$(w),W(O);var x=F(O,2),k=K(x);K$(k),W(x),W(g),J(()=>{p.disabled=h(s),C.disabled=h(a),y(x,"aria-checked",i()),wt(x,"active",i())}),Ue("click",p,c),Ue("click",C,u),Ue("click",O,_),Ue("click",x,v),R(t,g),ae()}var J$=re('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),e6=re('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),t6=re('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),n6=re('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function r6(t,e){se(e,!1);const n=it(),r=()=>be(Jr,"$settingsStore",n),i=()=>be(Ga,"$penColorStore",n),s=()=>be(jp,"$InputHandlerStore",n),a=T(),c=T(),u=[];let _=M(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let p=T(!1);function m(H){return H?g:v}function C(H){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(H)}function b(H){const q=H.currentTarget;if(!q)return;const ne=q.getAttribute("aria-checked");A(p,ne!=="true")}D(()=>r(),()=>{A(a,r().penToolActive)}),D(()=>r(),()=>{A(c,r().letterToolActive)}),Oe(),ge();var O=n6(),w=K(O);{var x=H=>{var q=Ne(),ne=ue(q);st(ne,1,()=>v,Lt,(ce,ee)=>{var ie=J$(),Ee=K(ie);Kt(Ee);var Ce;Zi(2),W(ie),J(()=>{y(ie,"data-value",h(ee)),wt(ie,"active",i()===h(ee)),Ce!==(Ce=h(ee))&&(Ee.value=(Ee.__value=h(ee))==null?"":h(ee))}),Wa(u,[],Ee,()=>(h(ee),i()),fe=>ds(Ga,fe)),R(ce,ie)}),R(H,q)},k=H=>{var q=Ne(),ne=ue(q);st(ne,1,()=>m(h(p)),Lt,(ce,ee)=>{var ie=e6(),Ee=K(ie),Ce=K(Ee,!0);W(Ee),Zi(2),W(ie),J(()=>{OI(ie,h(ee)),nt(Ce,h(ee))}),Ue("click",ie,function(...fe){var xe;(xe=s()&&s().padClick)==null||xe.apply(this,fe)}),R(ce,ie)}),R(H,q)};he(w,H=>{_()===d.PEN_TOOL&&h(a)?H(x):H(k,!1)})}var U=F(w,2);{var z=H=>{var q=t6();J(()=>{y(q,"aria-checked",h(p)),wt(q,"letter-checked",h(p)),wt(q,"num-checked",!h(p))}),Ue("click",q,b),R(H,q)};he(U,H=>{h(c)&&C(_())&&H(z)})}var Y=F(U,2);W(O),J(()=>{wt(O,"digit",_()===d.DIGIT),wt(O,"center",_()===d.CENTER_PM),wt(O,"corner",_()===d.CORNER_PM),wt(O,"color",_()===d.HIGHLIGHTS),wt(O,"pen",_()===d.PEN_TOOL),wt(Y,"letter-tool",h(c))}),Ue("click",Y,function(...H){var q;(q=s()&&s().padClick)==null||q.apply(this,H)}),R(t,O),ae()}var i6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function o6(t){var e=i6();R(t,e)}var s6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function a6(t){var e=s6();R(t,e)}var l6=re('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Wo(t,e){se(e,!1);const n=[];let r=M(e,"selectedTool",12),i=M(e,"value",8),s=M(e,"title",8,void 0);function a(){vu(i())}ge();var c=l6(),u=K(c);Kt(u);var _,v=F(u,2);dt(v,e,"default",{}),W(c),J(()=>{y(c,"title",s()),wt(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),Wa(n,[],u,()=>(i(),r()),r),Ue("change",u,a),R(t,c),ae()}var c6=re('<span aria-hidden="true">1</span>'),u6=re('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),d6=re('<span aria-hidden="true" style="font-size: 50%">123</span>'),_6=re('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),f6=re('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),g6=re('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function h6(t,e){se(e,!1);const n=it(),r=()=>be(Jr,"$settingsStore",n);let i=M(e,"selectedTool",12);ge();var s=g6(),a=K(s);Wo(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var C=c6();R(p,C)},$$slots:{default:!0},$$legacy:!0});var c=F(a,2);Wo(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var C=u6();R(p,C)},$$slots:{default:!0},$$legacy:!0});var u=F(c,2);Wo(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var C=d6();R(p,C)},$$slots:{default:!0},$$legacy:!0});var _=F(u,2);Wo(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var C=_6(),b=K(C);o6(b),W(C),R(p,C)},$$slots:{default:!0},$$legacy:!0});var v=F(_,2);{var g=p=>{Wo(p,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,C)=>{var b=f6(),O=K(b);a6(O),W(b),R(m,b)},$$slots:{default:!0},$$legacy:!0})};he(v,p=>{r().penToolActive&&p(g)})}W(s),R(t,s),ae()}var p6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function v6(t){var e=p6();R(t,e)}var m6=re('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ns(t,e){let n=M(e,"title",8,void 0),r=M(e,"clickCb",8,void 0);var i=m6(),s=K(i),a=K(s);dt(a,e,"default",{}),W(s),W(i),J(()=>y(i,"title",n())),Ue("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,i)}var E6=re('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),C6=re('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function b6(t,e){se(e,!1);let n=M(e,"showModal",12,!1);function r(){n(!1)}function i(){Op(),Ma(),n(!1)}ge(),Dr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(s){n(s)},children:(s,a)=>{var c=C6(),u=F(K(c),2);il(u,{children:(_,v)=>{var g=E6(),p=ue(g),m=F(p,2);Ue("click",p,i),Ue("click",m,r),R(_,g)},$$slots:{default:!0}}),W(c),R(s,c)},$$slots:{default:!0},$$legacy:!0}),ae()}var O6=re("<!> <!>",1);function I6(t){let e=T(!1);function n(){A(e,!0)}var r=O6(),i=ue(r);Ns(i,{title:"Restart",clickCb:n,children:(a,c)=>{v6(a)},$$slots:{default:!0}});var s=F(i,2);b6(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var w6=re('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function zo(t,e){let n=M(e,"title",8);var r=w6(),i=K(r),s=K(i,!0);W(i);var a=F(i,2);dt(a,e,"default",{}),W(r),J(()=>nt(s,n())),R(t,r)}var L6=re('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function cn(t,e){let n=M(e,"description",8);var r=L6(),i=K(r),s=K(i,!0);W(i);var a=F(i,2),c=K(a);dt(c,e,"default",{}),W(a),W(r),J(()=>nt(s,n())),R(t,r)}var y6=re('<div class="shortcut svelte-1cgt5u5"> </div>');function tn(t,e){let n=M(e,"shortcut",8);var r=y6(),i=K(r,!0);W(r),J(()=>nt(i,n())),R(t,r)}var A6=re("<p></p>"),N6=re("<!> <!> <!> <!>",1),S6=re("<!> or <!>",1),x6=re("<!> <!> <!> <!> <!> <!> <!> <!>",1),R6=re("<!> <!>",1),T6=re('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function D6(t,e){let n=M(e,"showModal",12,!1);Dr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var s=T6(),a=K(s);zo(a,{title:"Setting Instructions",children:(g,p)=>{var m=A6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",R(g,m)},$$slots:{default:!0}});var c=F(a,2);zo(c,{title:"General",children:(g,p)=>{cn(g,{description:"Toggle Darkmode",children:(m,C)=>{tn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=F(c,2);zo(u,{title:"Selection",children:(g,p)=>{var m=N6(),C=ue(m);cn(C,{description:"Select cells",children:(x,k)=>{tn(x,{shortcut:"click/drag"})},$$slots:{default:!0}});var b=F(C,2);cn(b,{description:"Add to current selection",children:(x,k)=>{tn(x,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var O=F(b,2);cn(O,{description:"Remove from current selection",children:(x,k)=>{tn(x,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=F(O,2);cn(w,{description:"Add or remove from current selection",children:(x,k)=>{tn(x,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var _=F(u,2);zo(_,{title:"Change Tool",children:(g,p)=>{var m=x6(),C=ue(m);cn(C,{description:"Cycle Tool",children:(Y,H)=>{tn(Y,{shortcut:"Space"})},$$slots:{default:!0}});var b=F(C,2);cn(b,{description:"Change to Digit Tool",children:(Y,H)=>{tn(Y,{shortcut:"Z"})},$$slots:{default:!0}});var O=F(b,2);cn(O,{description:"Change to Corner Pencilmark Tool",children:(Y,H)=>{tn(Y,{shortcut:"X"})},$$slots:{default:!0}});var w=F(O,2);cn(w,{description:"Change to Center Pencilmark Tool",children:(Y,H)=>{tn(Y,{shortcut:"C"})},$$slots:{default:!0}});var x=F(w,2);cn(x,{description:"Change to Highlights Tool",children:(Y,H)=>{tn(Y,{shortcut:"V"})},$$slots:{default:!0}});var k=F(x,2);cn(k,{description:"Quickshift To Corner Pencilmark Tool",children:(Y,H)=>{tn(Y,{shortcut:"Shift"})},$$slots:{default:!0}});var U=F(k,2);cn(U,{description:"Quickshift To Center Pencilmark Tool",children:(Y,H)=>{tn(Y,{shortcut:"Ctrl"})},$$slots:{default:!0}});var z=F(U,2);cn(z,{description:"Quickshift To Highlights Tool",children:(Y,H)=>{var q=S6(),ne=ue(q);tn(ne,{shortcut:"Shift + Ctrl"});var ce=F(ne,2);tn(ce,{shortcut:"Alt"}),R(Y,q)},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var v=F(_,2);zo(v,{title:"Undo/Redo",children:(g,p)=>{var m=R6(),C=ue(m);cn(C,{description:"Undo",children:(O,w)=>{tn(O,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var b=F(C,2);cn(b,{description:"Redo",children:(O,w)=>{tn(O,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}}),W(s),R(r,s)},$$slots:{default:!0},$$legacy:!0})}var k6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function G6(t){var e=k6();R(t,e)}var M6=re("<!> <!>",1);function U6(t){let e=T(!1);function n(){A(e,!0)}var r=M6(),i=ue(r);Ns(i,{title:"Info",clickCb:n,children:(a,c)=>{G6(a)},$$slots:{default:!0}});var s=F(i,2);D6(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var F6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function $6(t){var e=F6();R(t,e)}var P6=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function B6(t){var e=P6();R(t,e)}function H6(t){let e=T(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function s(){n()?i():r(),A(e,!h(e))}Ns(t,{title:"Fullscreen",clickCb:s,children:(a,c)=>{var u=Ne(),_=ue(u);{var v=p=>{B6(p)},g=p=>{$6(p)};he(_,p=>{h(e)?p(v):p(g,!1)})}R(a,u)},$$slots:{default:!0}})}function Zp(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"renderers",8),i=M(e,"options",8);ge();var s=Ne(),a=ue(s);{var c=u=>{var _=Ne(),v=ue(_);ah(v,()=>r()[n().type],(g,p)=>{p(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,C)=>{var b=Ne(),O=ue(b);{var w=k=>{$a(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},x=k=>{var U=ZO();J(()=>nt(U,n().raw)),R(k,U)};he(O,k=>{"tokens"in n()&&n().tokens?k(w):k(x,!1)})}R(m,b)},$$slots:{default:!0}})}),R(u,_)};he(a,u=>{r()[n().type]&&u(c)})}R(t,s),ae()}function $a(t,e){let n=M(e,"tokens",8),r=M(e,"renderers",8),i=M(e,"options",8);var s=Ne(),a=ue(s);{var c=u=>{var _=Ne(),v=ue(_);st(v,1,n,Lt,(g,p)=>{Zp(g,{get token(){return h(p)},get renderers(){return r()},get options(){return i()}})}),R(u,_)};he(a,u=>{n()&&u(c)})}R(t,s)}function Qp(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function Jp(t){return t.startsWith("/")||t.startsWith("#")}function W6(t,e){return e.slug(t).replace(/--+/g,"-")}function z6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;let s=T();D(()=>(Z(n()),Z(r())),()=>{A(s,W6(n().text,r().slugger))}),Oe(),ge();var a=Ne(),c=ue(a);return ch(c,()=>`h${n().depth}`,!1,(u,_)=>{let v;J(()=>v=sh(u,v,{id:h(s)},void 0,u.namespaceURI===Ou,u.nodeName.includes("-")));var g=Ne(),p=ue(g);dt(p,e,"default",{}),R(_,g)}),R(t,a),Ze(e,"renderers",i),ae({renderers:i})}var Y6=re("<blockquote><!></blockquote>");function j6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=Y6(),a=K(s);return dt(a,e,"default",{}),W(s),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}function V6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8),s=T();D(()=>Z(n()),()=>{A(s,n().ordered?"ol":"ul")}),Oe(),ge();var a=Ne(),c=ue(a);ch(c,()=>h(s),!1,(u,_)=>{let v;J(()=>v=sh(u,v,{start:n().start||1},void 0,u.namespaceURI===Ou,u.nodeName.includes("-")));var g=Ne(),p=ue(g);st(p,1,()=>n().items,Lt,(m,C)=>{var b=qe(()=>({...h(C)}));Zp(m,{get token(){return h(b)},get options(){return r()},get renderers(){return i()}})}),R(_,g)}),R(t,a),ae()}var K6=re("<li><!></li>");function X6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=K6(),a=K(s);return dt(a,e,"default",{}),W(s),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var q6=re("<br>");function Z6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=q6();return R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var Q6=re("<pre><code> </code></pre>");function J6(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;ge();var s=Q6(),a=K(s),c=K(a,!0);return W(a),W(s),J(()=>{LI(a,`lang-${n().lang}`),nt(c,n().text)}),R(t,s),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var eP=re("<code> </code>");function tP(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;ge();var s=eP(),a=K(s,!0);return J(()=>nt(a,n().raw.slice(1,n().raw.length-1))),W(s),R(t,s),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var nP=re('<th scope="col"><!></th>'),rP=re("<td><!></td>"),iP=re("<tr></tr>"),oP=re("<table><thead><tr></tr></thead><tbody></tbody></table>");function sP(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8);ge();var s=oP(),a=K(s),c=K(a);st(c,5,()=>n().header,Lt,(_,v)=>{var g=nP(),p=K(g);$a(p,{get tokens(){return h(v).tokens},get options(){return r()},get renderers(){return i()}}),W(g),R(_,g)}),W(c),W(a);var u=F(a);st(u,5,()=>n().rows,Lt,(_,v)=>{var g=iP();st(g,5,()=>h(v),Lt,(p,m)=>{var C=rP(),b=K(C);$a(b,{get tokens(){return h(m).tokens},get options(){return r()},get renderers(){return i()}}),W(C),R(p,C)}),W(g),R(_,g)}),W(u),W(s),R(t,s),ae()}function aP(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;ge();var s=Ne(),a=ue(s);return wI(a,()=>n().text),R(t,s),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var lP=re("<p><!></p>");function cP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=lP(),a=K(s);return dt(a,e,"default",{}),W(s),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var uP=re("<a><!></a>");function dP(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;ge();var s=uP();J(()=>y(s,"href",Jp(n().href)?Qp(r().baseUrl,n().href):n().href));var a=K(s);return dt(a,e,"default",{}),W(s),J(()=>y(s,"title",n().title)),R(t,s),Ze(e,"renderers",i),ae({renderers:i})}function _P(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=Ne(),a=ue(s);return dt(a,e,"default",{}),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var fP=re("<dfn><!></dfn>");function gP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=fP(),a=K(s);return dt(a,e,"default",{}),W(s),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var hP=re("<del><!></del>");function pP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=hP(),a=K(s);return dt(a,e,"default",{}),W(s),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var vP=re("<em><!></em>");function mP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=vP(),a=K(s);return dt(a,e,"default",{}),W(s),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var EP=re("<hr>");function CP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=EP();return R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var bP=re("<strong><!></strong>");function OP(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=bP(),a=K(s);return dt(a,e,"default",{}),W(s),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var IP=re('<img class="markdown-image svelte-z38cge">');function wP(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;ge();var s=IP();return J(()=>y(s,"src",Jp(n().href)?Qp(r().baseUrl,n().href):n().href)),J(()=>{y(s,"title",n().title),y(s,"alt",n().text)}),R(t,s),Ze(e,"renderers",i),ae({renderers:i})}function Vg(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var s=Ne(),a=ue(s);return dt(a,e,"default",{}),R(t,s),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}const LP=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,yP=Object.hasOwnProperty;class AP{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=NP(e,n===!0);const s=i;for(;yP.call(r.occurrences,i);)r.occurrences[s]++,i=s+"-"+r.occurrences[s];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function NP(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(LP,"").replace(/ /g,"-"))}function Sd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Si=Sd();function ev(t){Si=t}const tv=/[&<>"']/,SP=new RegExp(tv.source,"g"),nv=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,xP=new RegExp(nv.source,"g"),RP={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Kg=t=>RP[t];function xn(t,e){if(e){if(tv.test(t))return t.replace(SP,Kg)}else if(nv.test(t))return t.replace(xP,Kg);return t}const TP=/(^|[^\[])\^/g;function Ct(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(TP,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Xg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ns={exec:()=>null};function qg(t,e){const n=t.replace(/\|/g,(s,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Yo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function DP(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Zg(t,e,n,r){const i=e.href,s=e.title?xn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:s,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:s,text:xn(a)}}function kP(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[a]=s;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class Pa{constructor(e){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=e||Si}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Yo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=kP(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=Yo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Yo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Yo(n[0],`
`).split(`
`),i="",s="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const v=u.join(`
`),g=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${v}`:v,s=s?`${s}
${g}`:g;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=p,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const C=m,b=C.raw+`
`+r.join(`
`),O=this.blockquote(b);a[a.length-1]=O,i=i.substring(0,i.length-C.raw.length)+O.raw,s=s.substring(0,s.length-C.text.length)+O.text;break}else if((m==null?void 0:m.type)==="list"){const C=m,b=C.raw+`
`+r.join(`
`),O=this.list(b);a[a.length-1]=O,i=i.substring(0,i.length-m.raw.length)+O.raw,s=s.substring(0,s.length-C.raw.length)+O.raw,r=b.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:s}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,s={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",v="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),p=e.split(`
`,1)[0],m=!g.trim(),C=0;if(this.options.pedantic?(C=2,v=g.trimStart()):m?C=n[1].length+1:(C=n[2].search(/[^ ]/),C=C>4?1:C,v=g.slice(C),C+=n[1].length),m&&/^[ \t]*$/.test(p)&&(_+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),U=new RegExp(`^ {0,${Math.min(3,C-1)}}#`),z=new RegExp(`^ {0,${Math.min(3,C-1)}}<[a-z].*>`,"i");for(;e;){const Y=e.split(`
`,1)[0];let H;if(p=Y,this.options.pedantic?(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),H=p):H=p.replace(/\t/g,"    "),k.test(p)||U.test(p)||z.test(p)||w.test(p)||x.test(p))break;if(H.search(/[^ ]/)>=C||!p.trim())v+=`
`+H.slice(C);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(g)||U.test(g)||x.test(g))break;v+=`
`+p}!m&&!p.trim()&&(m=!0),_+=Y+`
`,e=e.substring(Y.length+1),g=H.slice(C)}}s.loose||(c?s.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let b=null,O;this.options.gfm&&(b=/^\[[ xX]\] /.exec(v),b&&(O=b[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:_,task:!!b,checked:O,loose:!1,text:v,tokens:[]}),s.raw+=_}s.items[s.items.length-1].raw=s.items[s.items.length-1].raw.trimEnd(),s.items[s.items.length-1].text=s.items[s.items.length-1].text.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const _=s.items[u].tokens.filter(g=>g.type==="space"),v=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));s.loose=v}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:s}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=qg(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),s=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of s)a.rows.push(qg(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:xn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Yo(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=DP(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Zg(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),s=n[i.toLowerCase()];if(!s){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Zg(r,s,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){v+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+v);const p=[...i[0]][0].length,m=e.slice(0,a+i.index+p+u);if(Math.min(a,u)%2){const b=m.slice(1,-1);return{type:"em",raw:m,text:b,tokens:this.lexer.inlineTokens(b)}}const C=m.slice(2,-2);return{type:"strong",raw:m,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),s=/^ /.test(r)&&/ $/.test(r);return i&&s&&(r=r.substring(1,r.length-1)),r=xn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=xn(n[1]),i="mailto:"+r):(r=xn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=xn(n[0]),s="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=xn(n[0]),n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=xn(n[0]),{type:"text",raw:n[0],text:r}}}}const GP=/^(?:[ \t]*(?:\n|$))+/,MP=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,UP=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ss=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,FP=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,rv=/(?:[*+-]|\d{1,9}[.)])/,iv=Ct(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,rv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),xd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$P=/^[^\n]+/,Rd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,PP=Ct(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),BP=Ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,rv).getRegex(),ml="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Td=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,HP=Ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Td).replace("tag",ml).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ov=Ct(xd).replace("hr",Ss).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),WP=Ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ov).getRegex(),Dd={blockquote:WP,code:MP,def:PP,fences:UP,heading:FP,hr:Ss,html:HP,lheading:iv,list:BP,newline:GP,paragraph:ov,table:ns,text:$P},Qg=Ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ss).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex(),zP={...Dd,table:Qg,paragraph:Ct(xd).replace("hr",Ss).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ml).getRegex()},YP={...Dd,html:Ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Td).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ns,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ct(xd).replace("hr",Ss).replace("heading",` *#{1,6} *[^
]`).replace("lheading",iv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},sv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,jP=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,av=/^( {2,}|\\)\n(?!\s*$)/,VP=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xs="\\p{P}\\p{S}",KP=Ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,xs).getRegex(),XP=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,qP=Ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,xs).getRegex(),ZP=Ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,xs).getRegex(),QP=Ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,xs).getRegex(),JP=Ct(/\\([punct])/,"gu").replace(/punct/g,xs).getRegex(),e9=Ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),t9=Ct(Td).replace("(?:-->|$)","-->").getRegex(),n9=Ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",t9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ba=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,r9=Ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ba).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),lv=Ct(/^!?\[(label)\]\[(ref)\]/).replace("label",Ba).replace("ref",Rd).getRegex(),cv=Ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rd).getRegex(),i9=Ct("reflink|nolink(?!\\()","g").replace("reflink",lv).replace("nolink",cv).getRegex(),kd={_backpedal:ns,anyPunctuation:JP,autolink:e9,blockSkip:XP,br:av,code:jP,del:ns,emStrongLDelim:qP,emStrongRDelimAst:ZP,emStrongRDelimUnd:QP,escape:sv,link:r9,nolink:cv,punctuation:KP,reflink:lv,reflinkSearch:i9,tag:n9,text:VP,url:ns},o9={...kd,link:Ct(/^!?\[(label)\]\((.*?)\)/).replace("label",Ba).getRegex(),reflink:Ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ba).getRegex()},Cu={...kd,escape:Ct(sv).replace("])","~|])").getRegex(),url:Ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},s9={...Cu,br:Ct(av).replace("{2,}","*").getRegex(),text:Ct(Cu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ya={normal:Dd,gfm:zP,pedantic:YP},jo={normal:kd,gfm:Cu,breaks:s9,pedantic:o9};class Tn{constructor(e){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Si,this.options.tokenizer=this.options.tokenizer||new Pa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:ya.normal,inline:jo.normal};this.options.pedantic?(n.block=ya.pedantic,n.inline=jo.pedantic):this.options.gfm&&(n.block=ya.gfm,this.options.breaks?n.inline=jo.breaks:n.inline=jo.gfm),this.tokenizer.rules=n}static get rules(){return{block:ya,inline:jo}}static lex(e,n){return new Tn(n).lex(e)}static lexInline(e,n){return new Tn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(v=>{_=v.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){s=n[n.length-1],r&&(s==null?void 0:s.type)==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,s,a=e,c,u,_;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},g),typeof p=="number"&&p>=0&&(v=Math.min(v,p))}),v<1/0&&v>=0&&(s=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(s)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Ha{constructor(e){ve(this,"options");ve(this,"parser");this.options=e||Si}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],s=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+xn(i)+'">'+(r?s:xn(s,!0))+`</code></pre>
`:"<pre><code>"+(r?s:xn(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){const n=e.ordered,r=e.start;let i="";for(let c=0;c<e.items.length;c++){const u=e.items[c];i+=this.listitem(u)}const s=n?"ol":"ul",a=n&&r!==1?' start="'+r+'"':"";return"<"+s+a+`>
`+i+"</"+s+`>
`}listitem(e){let n="";if(e.task){const r=this.checkbox({checked:!!e.checked});e.loose?e.tokens.length>0&&e.tokens[0].type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=r+" "+e.tokens[0].tokens[0].text)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):n+=r+" "}return n+=this.parser.parse(e.tokens,!!e.loose),`<li>${n}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",r="";for(let s=0;s<e.header.length;s++)r+=this.tablecell(e.header[s]);n+=this.tablerow({text:r});let i="";for(let s=0;s<e.rows.length;s++){const a=e.rows[s];r="";for(let c=0;c<a.length;c++)r+=this.tablecell(a[c]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const n=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),s=Xg(e);if(s===null)return i;e=s;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Xg(e);if(i===null)return r;e=i;let s=`<img src="${e}" alt="${r}"`;return n&&(s+=` title="${n}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Gd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Vn{constructor(e){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=e||Si,this.options.renderer=this.options.renderer||new Ha,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Gd}static parse(e,n){return new Vn(n).parse(e)}static parseInline(e,n){return new Vn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=s,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=s;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const c=this.options.extensions.renderers[s.type].call({parser:this},s);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=c||"";continue}}const a=s;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class rs{constructor(e){ve(this,"options");ve(this,"block");this.options=e||Si}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Tn.lex:Tn.lexInline}provideParser(){return this.block?Vn.parse:Vn.parseInline}}ve(rs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class a9{constructor(...e){ve(this,"defaults",Sd());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",Vn);ve(this,"Renderer",Ha);ve(this,"TextRenderer",Gd);ve(this,"Lexer",Tn);ve(this,"Tokenizer",Pa);ve(this,"Hooks",rs);this.use(...e)}walkTokens(e,n){var i,s;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const a=n.renderers[s.name];a?n.renderers[s.name]=function(...c){let u=s.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[s.level];a?a.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),i.extensions=n),r.renderer){const s=this.defaults.renderer||new Ha(this.defaults);for(const a in r.renderer){if(!(a in s))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=s[c];s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g||""}}i.renderer=s}if(r.tokenizer){const s=this.defaults.tokenizer||new Pa(this.defaults);for(const a in r.tokenizer){if(!(a in s))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=s[c];s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g}}i.tokenizer=s}if(r.hooks){const s=this.defaults.hooks||new rs;for(const a in r.hooks){if(!(a in s))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=s[c];rs.passThroughHooks.has(a)?s[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(s,v)).then(p=>_.call(s,p));const g=u.call(s,v);return _.call(s,g)}:s[c]=(...v)=>{let g=u.apply(s,v);return g===!1&&(g=_.apply(s,v)),g}}i.hooks=s}if(r.walkTokens){const s=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),s&&(u=u.concat(s.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Tn.lex(e,n??this.defaults)}parser(e,n){return Vn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const s={...i},a={...this.defaults,...s},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Tn.lex:Tn.lexInline,_=a.hooks?a.hooks.provideParser():e?Vn.parse:Vn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(v=>u(v,a)).then(v=>a.hooks?a.hooks.processAllTokens(v):v).then(v=>a.walkTokens?Promise.all(this.walkTokens(v,a.walkTokens)).then(()=>v):v).then(v=>_(v,a)).then(v=>a.hooks?a.hooks.postprocess(v):v).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let v=u(r,a);a.hooks&&(v=a.hooks.processAllTokens(v)),a.walkTokens&&this.walkTokens(v,a.walkTokens);let g=_(v,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+xn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const yi=new a9;function Et(t,e){return yi.parse(t,e)}Et.options=Et.setOptions=function(t){return yi.setOptions(t),Et.defaults=yi.defaults,ev(Et.defaults),Et};Et.getDefaults=Sd;Et.defaults=Si;Et.use=function(...t){return yi.use(...t),Et.defaults=yi.defaults,ev(Et.defaults),Et};Et.walkTokens=function(t,e){return yi.walkTokens(t,e)};Et.parseInline=yi.parseInline;Et.Parser=Vn;Et.parser=Vn.parse;Et.Renderer=Ha;Et.TextRenderer=Gd;Et.Lexer=Tn;Et.lexer=Tn.lex;Et.Tokenizer=Pa;Et.Hooks=rs;Et.parse=Et;Et.options;Et.setOptions;Et.use;Et.walkTokens;Et.parseInline;Vn.parse;Tn.lex;function l9(t){return new Tn().lex(t)}const c9=()=>({heading:z6,blockquote:j6,list:V6,list_item:X6,br:Z6,code:J6,codespan:tP,table:sP,html:aP,paragraph:cP,link:dP,text:_P,def:gP,del:pP,em:mP,hr:CP,strong:OP,image:wP,space:Vg,escape:Vg}),u9=()=>({baseUrl:"/",slugger:new AP});function d9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},lh(()=>{console.warn=t})}function uv(t,e){se(e,!1),d9();let n=M(e,"source",8),r=M(e,"options",24,()=>({})),i=M(e,"renderers",24,()=>({})),s=T(),a=T(),c=T();D(()=>(Z(n()),Z(i()),Z(r())),()=>{A(s,l9(n())),A(a,{...c9(),...i()}),A(c,{...u9(),...r()})}),Oe(),ge(),$a(t,{get tokens(){return h(s)},get renderers(){return h(a)},get options(){return h(c)}}),ae()}var _9=re('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),f9=re('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),g9=re('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function h9(t,e){se(e,!1);const n=it(),r=()=>be(Rr,"$puzzleMetaStore",n),i=T();let s=M(e,"showModal",12,!1);function a(u){return u?Ta(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{A(i,r())}),Oe(),ge(),Dr(t,{title:"Rules",get showModal(){return s()},set showModal(u){s(u)},children:(u,_)=>{var v=g9(),g=K(v),p=K(g,!0);W(g);var m=F(g,2),C=K(m);J(()=>nt(C,`by ${a(h(i).authors)??""}`)),W(m);var b=F(m,2),O=K(b),w=qe(()=>c(h(i).ruleset));uv(O,{get source(){return h(w)}}),W(b);var x=F(b,2);{var k=Y=>{var H=_9(),q=F(ue(H),2);J(()=>y(q,"href",h(i).ctcUrl)),R(Y,H)};he(x,Y=>{var H,q;(q=(H=h(i))==null?void 0:H.ctcUrl)!=null&&q.length&&Y(k)})}var U=F(x,2);{var z=Y=>{var H=f9(),q=F(ue(H),2);J(()=>y(q,"href",h(i).ctcYoutubeUrl)),R(Y,H)};he(U,Y=>{var H,q;(q=(H=h(i))==null?void 0:H.ctcYoutubeUrl)!=null&&q.length&&Y(z)})}W(v),J(()=>{var Y;return nt(p,((Y=h(i))==null?void 0:Y.title)||"Puzzle")}),R(u,v)},$$slots:{default:!0},$$legacy:!0}),ae()}var p9=de('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function v9(t){var e=p9();R(t,e)}var m9=re("<!> <!>",1);function E9(t){let e=T(!1);function n(){A(e,!0)}var r=m9(),i=ue(r);Ns(i,{title:"Rules",clickCb:n,children:(a,c)=>{v9(a)},$$slots:{default:!0}});var s=F(i,2);h9(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var C9=re("<!> <!>",1);function b9(t){let e=T(!1);function n(){A(e,!0)}var r=C9(),i=ue(r);Ns(i,{title:"Settings",clickCb:n,children:(a,c)=>{xp(a)},$$slots:{default:!0}});var s=F(i,2);Rp(s,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var O9=re('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function I9(t){var e=O9(),n=K(e);b9(n);var r=F(n,2);E9(r);var i=F(r,2);H6(i);var s=F(i,2);U6(s);var a=F(s,2);I6(a),W(e),R(t,e)}var w9=re('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function L9(t,e){se(e,!1);const n=it(),r=()=>be(Qi,"$svgRefStore",n),i=()=>be(Rr,"$puzzleMetaStore",n),s=()=>be(qt,"$toolStore",n),a=T(),c=T();function u(){r().focus()}function _(ee){return ee?Ta(ee," & ",", "):"Anonymous"}function v(ee){return ee&&ee.length?ee:"Normal sudoku rules apply."}D(()=>i(),()=>{A(a,i().title??"Sudoku")}),D(()=>i(),()=>{A(c,_(i().authors))}),Oe(),ge();var g=w9(),p=K(g),m=K(p),C=K(m),b=K(C,!0);W(C);var O=F(C,2),w=K(O);W(O),W(m);var x=F(m,2),k=K(x),U=qe(()=>v(i().ruleset));uv(k,{get source(){return h(U)}}),W(x),W(p);var z=F(p,2),Y=K(z);I9(Y);var H=F(Y,2),q=K(H);r6(q,{get selectedTool(){return s()}});var ne=F(q,2);h6(ne,{get selectedTool(){return ih(),s()},set selectedTool(ee){ds(qt,ee)},$$legacy:!0}),W(H);var ce=F(H,2);Q$(ce,{}),W(z),W(g),J(()=>{nt(b,h(a)),nt(w,`by ${h(c)??""}`)}),Ue("click",z,Kn(()=>{u()})),R(t,g),ae()}var y9=re('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function H9(t,e){se(e,!1);const n=it(),r=()=>be(Ja,"$gameModeStore",n),i=T();lh(async()=>{const m=window.location.origin,C=hg===""?m:`${m}/${hg}`;try{await fU({workerURL:`${C}/minizinc-worker.js`,wasmURL:`${C}/minizinc.wasm`,dataURL:`${C}/minizinc.data`})}catch(b){const O="Failed to initialize MiniZinc: "+b.message;console.log(O)}}),D(()=>r(),()=>{A(i,r())}),Oe(),ge();var s=y9(),a=K(s),c=K(a);{var u=m=>{YU(m)};he(c,m=>{h(i)===ro.SETTING&&m(u)})}var _=F(c,2),v=K(_);H$(v,{}),W(_);var g=F(_,2),p=K(g);L9(p,{}),W(g),W(a),W(s),R(t,s),ae()}export{H9 as G,B9 as b,FR as p,Ma as r,sT as s};
