var ZI=Object.defineProperty;var QI=(t,e,n)=>e in t?ZI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var me=(t,e,n)=>QI(t,typeof e!="symbol"?e+"":e,n);import{c as ou,o as JI,p as eb,q as Iu,a as R,s as ue,u as Me,t as ie,d as Se,v as tb,m as nb}from"./disclose-version.MO2MFdNj.js";import{i as pe}from"./legacy.sN80Fe4S.js";import{l as eh,h as Vt,k as ls,y as th,v as es,R as rb,V as ib,U as ob,g as su,i as nh,F as rh,a0 as sb,j as ab,u as _g,A as lb,aJ as bu,z as cb,x as ub,a2 as wu,ar as ih,J as fg,aK as db,a3 as _b,a8 as fb,m as gb,c as X,r as W,p as se,s as F,t as J,a as ae,Z as h,al as qe,aL as D,_ as A,aM as Ie,$ as T,av as Z,f as de,aN as hb,aC as Qi,aO as Bc,ak as gg}from"./utils.DP-F0xIN.js";import{s as it,i as fe,a as Ce,b as hs,m as oh}from"./store.LjYb6QFI.js";import{s as ei,u as pb,a as vb,b as mb,c as Eb,e as Cb,f as Ob,g as Ib,h as bb,t as wb}from"./global.B4-VKmM5.js";import{e as st,i as Lt}from"./each.BW2jvj41.js";import{i as yb,p as M}from"./props.DNCAbpfG.js";import{w as Bt,g as ut,d as ro}from"./index.C8uZp8ho.js";import{s as L,r as Kt,a as sh,c as Lb,b as Ab,d as ah}from"./attributes.H32U76MF.js";import{s as nt}from"./render.3Jdrsfl8.js";import{b as Oi,c as lh}from"./this.DYGG7ZR8.js";import{a as Nb,o as ch}from"./index-client.jiOaxa6s.js";import{b as hg}from"./paths.RAtmGiOb.js";function Sb(t,e,n,r,i){var o=t,a="",c;eh(()=>{if(a===(a=e()??"")){Vt&&ls();return}c!==void 0&&(rh(c),c=void 0),a!==""&&(c=th(()=>{if(Vt){es.data;for(var u=ls(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=rb(u);if(u===null)throw ib(),ob;ou(es,_),o=su(u);return}var v=a+"",g=JI(v);ou(nh(g),g.lastChild),o.before(g)}))})}function ft(t,e,n,r,i){var c;Vt&&ls();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function uh(t,e,n,r,i,o){let a=Vt;Vt&&ls();var c,u,_=null;Vt&&es.nodeType===1&&(_=es,ls());var v=Vt?es:t,g;eh(()=>{const p=e()||null;var m=p==="svg"?bu:null;p!==c&&(g&&(p===null?cb(g,()=>{g=null,u=null}):p===u?ub(g):rh(g)),p&&p!==u&&(g=th(()=>{if(_=Vt?_:m?document.createElementNS(m,p):document.createElement(p),ou(_,_),r){Vt&&eb(p)&&_.append(document.createComment(""));var E=Vt?nh(_):_.appendChild(ab());Vt&&(E===null?_g(!1):su(E)),r(_,E)}lb.nodes_end=_,v.before(_)})),c=p,c&&(u=c))},sb),a&&(_g(!0),su(v))}function Qr(t,e,n){var r=t.__className,i=dh(e);Vt&&t.getAttribute("class")===i?t.__className=i:(r!==i||Vt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function xb(t,e,n){var r=t.__className,i=dh(e);Vt&&t.className===i?t.__className=i:(r!==i||Vt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function dh(t,e){return(t??"")+""}function yt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function jn(t,e,n=e){var r=db();Iu(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=zc(t)?Yc(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(Vt&&t.defaultValue!==t.value||_b(e)==null&&t.value)&&n(zc(t)?Yc(t.value):t.value),wu(()=>{var i=e();zc(t)&&i===Yc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const Wc=new Set;function za(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),Iu(n,"change",()=>{var _=n.__value;o&&(_=pg(a,_,n.checked)),i(_)},()=>i(o?[]:null)),wu(()=>{var _=r();if(Vt&&n.defaultChecked!==n.checked){c=!0;return}o?(_=_||[],n.checked=_.includes(n.__value)):n.checked=yb(n.__value,_)}),ih(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),Wc.has(a)||(Wc.add(a),fg(()=>{a.sort((_,v)=>_.compareDocumentPosition(v)===4?-1:1),Wc.delete(a)})),fg(()=>{if(c){var _;if(o)_=pg(a,_,n.checked);else{var v=a.find(g=>g.checked);_=v==null?void 0:v.__value}i(_)}})}function pg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function zc(t){var e=t.type;return e==="number"||e==="range"}function Yc(t){return t===""?null:+t}function Rb(t,e,n=e){Iu(t,"change",()=>{n(t.files)}),wu(()=>{t.files=e()})}function Ze(t,e,n){var r=fb(t,e);r&&r.set&&(t[e]=n,ih(()=>{t[e]=null}))}function Tb(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Kn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function jc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Db(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=gb(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var io=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(io||{}),yu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(yu||{}),_h=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(_h||{}),fh=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t))(fh||{}),gh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(gh||{}),hh=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(hh||{}),ph=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(ph||{}),vh=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(vh||{}),mh=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(mh||{}),Eh=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Eh||{}),Ch=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(Ch||{}),Ya=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Ya||{}),Lu=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Lu||{}),Au=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(Au||{}),Nu=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(Nu||{}),Su=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Su||{}),xu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(xu||{}),Ru=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(Ru||{}),Tu=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Tu||{}),Du=(t=>(t.CLONE_REGION="Clone Region",t))(Du||{}),ku=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(ku||{}),Gu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Gu||{}),Mu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Mu||{}),Uu=(t=>(t.MAZE_WALL="Maze Wall",t))(Uu||{}),Fu=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))(Fu||{}),$u=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))($u||{}),Oh=(t=>(t.PEN_TOOL="Pen Tool",t))(Oh||{});const Pu={..._h,...fh,...gh,...vh,...mh,...ph,...Eh,...Ch,...hh},Ih={...Ya,...Lu,...Au,...Nu,...Su,...xu,...Ru,...Tu,...Du,...ku,...Gu,...Mu,...Uu,...Fu},d={...yu,...Pu,...Ih,...$u,...Oh};var N=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(N||{});function kb(t){return Object.values(Pu).includes(t)}function Gb(t){return Object.values(Ih).includes(t)}function Hu(t){return Object.values(Lu).includes(t)||t===d.COSMETIC_CELL_ARROW}function Bu(t){return Object.values(Au).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function Mb(t){return Object.values(Ya).includes(t)||Hu(t)||Bu(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function Wu(t){return Object.values(Nu).includes(t)||t===d.COSMETIC_EDGE}function bh(t){return Object.values(Su).includes(t)||t===d.COSMETIC_CORNER}function zu(t){return Object.values(xu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function Yu(t){return Object.values(Ru).includes(t)||t===d.COSMETIC_ARROW}function ju(t){return Object.values(Tu).includes(t)||t===d.COSMETIC_CAGE}function wh(t){return Object.values(Mu).includes(t)}function yh(t){return Object.values(Uu).includes(t)}function Lh(t){return Object.values(Du).includes(t)}function cs(t){const e=Object.values(ku),n=Object.values(Gu);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function Ub(t){return Object.values(Fu).includes(t)}function Fb(t){return Object.values($u).includes(t)}function Vu(t){return Object.values(yu).includes(t)}const $b=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Pb=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function Ah(t){for(const e of Object.values(d))if(e===t)return e}function Nh(t,e){return Object.values(e).includes(t)}var P=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(P||{});function cn(t,e,n){n!==void 0&&(t[e]=n)}function Hb(t){var e,n,r,i,o,a,c,u,_,v,g,p,m,E,O;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(v=t.strokeDasharray)!=null&&v.editable||(g=t.strokeDashoffset)!=null&&g.editable||(p=t.fontSize)!=null&&p.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(O=t.displayValue)!=null&&O.editable)}function au(t){var n,r,i,o,a,c,u,_,v,g,p,m,E,O,I,w,x,k,U,z,j,H,q;const e={type:t.type};return cn(e,"n",(n=t.n)==null?void 0:n.value),cn(e,"r",(r=t.r)==null?void 0:r.value),cn(e,"height",(i=t.height)==null?void 0:i.value),cn(e,"width",(o=t.width)==null?void 0:o.value),cn(e,"inset",(a=t.inset)==null?void 0:a.value),cn(e,"angle",(c=t.angle)==null?void 0:c.value),cn(e,"fill",(u=t.fill)==null?void 0:u.value),cn(e,"stroke",(_=t.stroke)==null?void 0:_.value),cn(e,"strokeWidth",(v=t.strokeWidth)==null?void 0:v.value),cn(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),cn(e,"strokeDashoffset",(p=t.strokeDashoffset)==null?void 0:p.value),cn(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),cn(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),cn(e,"opacity",(O=t.opacity)==null?void 0:O.value),cn(e,"displayValue",(I=t.displayValue)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(x=(w=t.linePathOptions)==null?void 0:w.shortenHead)==null?void 0:x.value,shortenTail:(U=(k=t.linePathOptions)==null?void 0:k.shortenTail)==null?void 0:U.value,bezierRounding:(j=(z=t.linePathOptions)==null?void 0:z.bezierRounding)==null?void 0:j.value,closeLoops:(q=(H=t.linePathOptions)==null?void 0:H.closeLoops)==null?void 0:q.value}),e}function Bb(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const Wb={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},zb={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},Yb={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Sh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},xh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ps={type:"Line",strokeWidth:.125,stroke:"gray"},Ku={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},Xu={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},jb={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},Vb={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var $=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))($||{});const ja=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,Cn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,oo=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,Kb=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Zt=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,so=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,qu=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,xe=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Xb=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,qb=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Zb=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,ao=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Qb=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,Jb=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,ew=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function tw(t){return Hu(t)?Xb():Bu(t)?qb():t===d.XV?Jb():Wu(t)?Zb():ju(t)?ja():Yu(t)?oo():cs(t)?Kb():zu(t)?xe():Lh(t)?ew():""}var ge=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(ge||{}),It=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(It||{});const nw={inputOptions:{type:ge.ARROW},toolId:d.ARROW,order:$.ARROW_TOOLS,shape:{type:P.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:oo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}},rw={inputOptions:{type:ge.ARROW},toolId:d.AVERAGE_ARROW,order:$.ARROW_TOOLS,shape:{type:P.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:oo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}},iw={inputOptions:{type:ge.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:$.ARROW_TOOLS,shape:{type:P.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:oo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}};ge.ARROW,d.SQUARE_ROOT_ARROW,$.ARROW_TOOLS,P.LINE,oo(),N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL;const ow={inputOptions:{type:ge.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:$.ARROW_TOOLS,shape:{type:P.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:oo(),tags:[],categories:[N.ARROW_CONSTRAINT,N.LOCAL_CONSTRAINT,N.ARROW_TOOL]}};function sw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function aw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function lw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function cw(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function uw(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const dw={Delete:null,Backspace:null};function _w(t,e=10){if(t in dw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function fw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function gw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function hw(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function pw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Rh(t){return t==="Backspace"}function lo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Rh(t.key))}function vw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function mw(t){return vw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function Ew(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ai(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Nr(t,e,n){if(t===void 0)return t;let r=t;return Rh(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Zu=[N.CAGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CAGE_TOOL],On=[N.CAGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CAGE_TOOL];function Th(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Dh(t,e,n){return Nr(t,e,n)}const fn={type:P.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},Va={type:ge.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},In={...Va,valueUpdater:(t,e)=>Dh(t,e,Th)},Cw={inputOptions:In,toolId:d.KILLER_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:Cn(),tags:[],categories:On}},Ow={inputOptions:In,toolId:d.UNIQUE_DIGITS_CAGE,order:$.CAGE_TOOLS,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:Cn(),tags:[],categories:On}},Iw={inputOptions:In,toolId:d.INVERTED_KILLER_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:Cn(),tags:[],categories:On}},bw={inputOptions:In,toolId:d.SUM_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:Cn(),tags:[],categories:On}},ww={inputOptions:Va,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:ja(),tags:[],categories:Zu}},yw={inputOptions:Va,toolId:d.PARITY_BALANCE_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:ja(),tags:[],categories:Zu}},Lw={inputOptions:In,toolId:d.DIVISIBLE_KILLER_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:Cn(),tags:[],categories:On}},Aw={inputOptions:In,toolId:d.SPOTLIGHT_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:Cn(),tags:[],categories:On}},Nw={inputOptions:Va,toolId:d.PUTTERIA_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:ja(),tags:[],categories:Zu}};d.KILLER_CAGE_LOOK_AND_SAY,$.CAGE_TOOLS,Cn();const Sw={inputOptions:In,toolId:d.MULTISET_CAGE,order:$.CAGE_TOOLS,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:Cn(),tags:[],categories:On}},xw={inputOptions:In,toolId:d.VAULTED_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:Cn(),tags:[],categories:On}};d.AQUARIUM_CAGE,$.CAGE_TOOLS,Cn();const Rw={inputOptions:In,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:Cn(),tags:[],categories:On}},Tw={inputOptions:In,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:Cn(),tags:[],categories:On}},Dw={inputOptions:In,toolId:d.DOUBLERS_KILLER_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:Cn(),tags:[],categories:On}},kw={inputOptions:In,toolId:d.NEGATORS_KILLER_CAGE,order:$.CAGE_TOOLS,shape:fn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:Cn(),tags:[],categories:On}},Gw={inputOptions:{type:ge.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[N.CELL_INPUT_TOOL]}},Mw={inputOptions:{type:ge.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[N.CELL_INPUT_TOOL]}},Uw={inputOptions:{type:ge.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[N.CELL_INPUT_TOOL]}},Fw={inputOptions:{type:ge.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[N.CELL_INPUT_TOOL]}},$w={inputOptions:{type:ge.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[N.CELL_INPUT_TOOL]}},Pw={inputOptions:{type:ge.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[N.CELL_INPUT_TOOL]}},Hw={inputOptions:{type:ge.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[N.CELL_INPUT_TOOL]}},Bw={inputOptions:{type:ge.SELECTION},toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[N.CELL_INPUT_TOOL]}},Ww={inputOptions:{type:ge.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},zw={type:ge.CENTER_CORNER_OR_EDGE,targets:It.CLOSEST};d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,$.OUTSIDE_TOOLS,P.CIRCLE,qu(),N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT;const Yw={inputOptions:{type:ge.CENTER_CORNER_OR_EDGE,targets:It.CLOSEST,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:$.OUTSIDE_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:qu(),tags:[],categories:[N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT]}},jw={inputOptions:{type:ge.CENTER_CORNER_OR_EDGE,targets:It.CORNER_OR_EDGE,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:$.OUTSIDE_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:qu(),tags:[],categories:[N.LOCAL_CONSTRAINT,N.CENTER_CORNER_EDGE_CONSTRAINT]}},Vw={inputOptions:{type:ge.CLONE},toolId:d.CLONE_REGION,order:$.CAGE_TOOLS,shape:{type:P.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[N.CLONE_CONSTRAINT,N.LOCAL_CONSTRAINT]}};function kh(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Gh(t,e,n){return Nr(t,e,n)}function Kw(t,e){function n(){return!0}return Nr(t,e,n)}const Qu={type:ge.CORNER,defaultValue:"",valueUpdater:(t,e)=>Gh(t,e,kh)},Xw={inputOptions:{type:ge.CORNER,valueUpdater:(t,e)=>Kw(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:$.CORNER_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Qb(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL]}},qw={inputOptions:Qu,toolId:d.CORNER_SUM,order:$.CORNER_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:ao(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL]}},Zw={inputOptions:{type:ge.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:$.CORNER_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:ao(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},Qw={inputOptions:Qu,toolId:d.CORNER_EVEN_COUNT,order:$.CORNER_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:ao(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,$.CORNER_TOOLS,P.CIRCLE,ao(),N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.CORNER_TOOL;const Jw={inputOptions:{type:ge.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:$.CORNER_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:ao(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},ey={inputOptions:{type:ge.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:$.CORNER_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:ao(),categories:[N.CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.CORNER_TOOL]}},Ka=[N.EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.EDGE_TOOL],Gn=[N.EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.EDGE_TOOL],vs=.15,Mh=.02,ti={type:P.CIRCLE,r:{editable:!0,value:vs,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Mh,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},Ju={type:P.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function ty(t,e=1){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Uh(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ny(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function ed(t,e,n){return Nr(t,e,n)}function ry(t,e){return t===void 0?"V":ny(e)?e.toUpperCase():t}function iy(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function Fh(t,e){return t===void 0?"<":iy(e)?e:t}const co={type:ge.EDGE,valueUpdater:(t,e)=>ed(t,e,Uh)},oy={inputOptions:{type:ge.EDGE,valueUpdater:(t,e)=>ed(t,e,ty)},toolId:d.RATIO,order:$.EDGE_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:vs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Gn}},sy={inputOptions:co,toolId:d.DIFFERENCE,order:$.EDGE_TOOLS,shape:ti,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Gn}},ay={inputOptions:co,toolId:d.EDGE_SUM,order:$.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Gn}},ly={inputOptions:{type:ge.EDGE,defaultValue:"V",valueUpdater:ry},toolId:d.XV,order:$.EDGE_TOOLS,shape:{type:P.TEXT_ONLY,r:{editable:!1,value:vs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Gn}},cy={inputOptions:{type:ge.EDGE,valueUpdater:Fh,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:$.EDGE_TOOLS,shape:{type:P.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Gn}},uy={inputOptions:co,toolId:d.EDGE_PRODUCT,order:$.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Gn}},dy={inputOptions:co,toolId:d.EDGE_MODULO,order:$.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Gn}},_y={inputOptions:co,toolId:d.EDGE_FACTOR,order:$.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Gn}},fy={inputOptions:{type:ge.EDGE},toolId:d.XY_DIFFERENCES,order:$.EDGE_TOOLS,shape:{type:P.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:vs},strokeWidth:{editable:!1,value:Mh,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Gn}},gy={inputOptions:{type:ge.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:$.EDGE_TOOLS,shape:ti,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Gn}},hy={inputOptions:{type:ge.EDGE},toolId:d.YIN_YANG_KROPKI,order:$.EDGE_TOOLS,shape:{type:P.CIRCLE,r:{editable:!1,value:vs},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Gn}},py={inputOptions:{type:ge.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:$.EDGE_TOOLS,shape:Ju,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Ka}},vy={inputOptions:{type:ge.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:$.EDGE_TOOLS,shape:Ju,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ka}},my={inputOptions:{type:ge.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:$.EDGE_TOOLS,shape:Ju,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Ka}},Ey={inputOptions:{type:ge.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:$.EDGE_TOOLS,shape:ti,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Ka}},Cy={inputOptions:{type:ge.EDGE,valueUpdater:Fh,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:$.EDGE_TOOLS,shape:{type:P.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Gn}};d.CUSTOM_EDGE_CONSTRAINT,$.EDGE_TOOLS;const uo=[N.OUTSIDE_CORNER_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_CORNER_TOOL,N.OUTSIDE_DIRECTION_TOOL];function Oy(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function $h(t,e,n){return Nr(t,e,n)}const _o={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},fo={type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>$h(t,e,Oy),defaultValue:"",cornerOrEdge:It.CORNER},Iy={inputOptions:fo,toolId:d.LITTLE_KILLER_SUM,order:$.OUTSIDE_TOOLS,shape:_o,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:so(),tags:[],categories:uo}},by={inputOptions:fo,toolId:d.LITTLE_KILLER_PRODUCT,order:$.OUTSIDE_TOOLS,shape:_o,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:so(),tags:[],categories:uo}},wy={inputOptions:fo,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:$.OUTSIDE_TOOLS,shape:_o,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:so(),tags:[],categories:uo}},yy={inputOptions:fo,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:$.OUTSIDE_TOOLS,shape:_o,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:so(),tags:[],categories:uo}},Ly={inputOptions:fo,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:$.OUTSIDE_TOOLS,shape:_o,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:so(),tags:[],categories:uo}},Ay={inputOptions:fo,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:$.OUTSIDE_TOOLS,shape:_o,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:so(),tags:[],categories:uo}},Qt=[N.OUTSIDE_EDGE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_EDGE_TOOL,N.OUTSIDE_DIRECTION_TOOL];function go(t,e=5){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ms(t,e,n){return Nr(t,e,n)}const Jt={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},Mn={type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>ms(t,e,go),defaultValue:"",cornerOrEdge:It.EDGE},Ny={inputOptions:Mn,toolId:d.SANDWICH_SUM,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:Zt(),tags:[],categories:Qt}},Sy={inputOptions:Mn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:Zt(),tags:[],categories:Qt}},xy={inputOptions:Mn,toolId:d.X_SUM,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:Zt(),tags:[],categories:Qt}},Ry={inputOptions:Mn,toolId:d.SHORTSIGHTED_X_SUM,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:Zt(),tags:[],categories:Qt}},Ty={inputOptions:Mn,toolId:d.SHIFTED_X_SUM,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:Zt(),tags:[],categories:Qt}},Dy={inputOptions:Mn,toolId:d.BROKEN_X_SUM,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:Zt(),tags:[],categories:Qt}},ky={inputOptions:Mn,toolId:d.X_SUM_SKYSCRAPERS,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:Zt(),tags:[],categories:Qt}},Gy={inputOptions:Mn,toolId:d.BATTLEFIELD,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:Zt(),tags:[],categories:Qt}},My={inputOptions:Mn,toolId:d.SKYSCRAPERS,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:Zt(),tags:[],categories:Qt}},Uy={inputOptions:Mn,toolId:d.X_INDEX,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:Zt(),tags:[],categories:Qt}},Fy={inputOptions:Mn,toolId:d.RISING_STREAK,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:Zt(),tags:[],categories:Qt}};d.ROW_OR_COLUMN_RANK,$.OUTSIDE_TOOLS,Zt();const $y={inputOptions:Mn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:Zt(),tags:[],categories:Qt}},Py={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>ms(t,e,go),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:Zt(),tags:[],categories:Qt}},Hy={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>ms(t,e,go),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:Zt(),tags:[],categories:Qt}},By={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>ms(t,e,go),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:Zt(),tags:[],categories:Qt}},Wy={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>ms(t,e,go),defaultValue:"",cornerOrEdge:It.EDGE},toolId:d.PENTOMINO_BORDER_COUNT,order:$.OUTSIDE_TOOLS,shape:Jt,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:Zt(),tags:[],categories:Qt}},zy={inputOptions:{type:ge.SINGLE_CELL},toolId:d.COSMETIC_CELL_SHAPE,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,allowedTypes:[P.CIRCLE,P.ELLIPSE,P.SQUARE,P.RECTANGLE,P.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},Yy={inputOptions:{type:ge.SINGLE_CELL_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:$.CELL_SHAPE_TOOL,shape:{type:P.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},jy={inputOptions:{type:ge.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:$.CELL_SHAPE_TOOL,shape:{type:P.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},Vy={inputOptions:{type:ge.EDGE,valueUpdater:(t,e)=>ed(t,e,Uh),defaultValue:""},toolId:d.COSMETIC_EDGE,order:$.EDGE_TOOLS,shape:{type:P.CIRCLE,allowedTypes:[P.CIRCLE,P.ELLIPSE,P.SQUARE,P.RECTANGLE,P.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},Ky={inputOptions:{type:ge.CORNER,valueUpdater:(t,e)=>Gh(t,e,kh),defaultValue:""},toolId:d.COSMETIC_CORNER,order:$.CORNER_TOOLS,shape:{type:P.CIRCLE,allowedTypes:[P.CIRCLE,P.ELLIPSE,P.SQUARE,P.RECTANGLE,P.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},Xy={inputOptions:{type:ge.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},qy={inputOptions:{type:ge.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},Zy={inputOptions:{type:ge.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL]}},Qy={inputOptions:{type:ge.CAGE,valueUpdater:(t,e)=>Dh(t,e,Th),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:$.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.TYPABLE_TOOL]}},Jy={inputOptions:{type:ge.ARROW},toolId:d.COSMETIC_ARROW,order:$.ARROW_TOOLS,shape:{type:P.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.LOCAL_CONSTRAINT]}},eL={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>$h(t,e,go),defaultValue:"",cornerOrEdge:It.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:$.ARROW_TOOLS,shape:{type:P.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[N.COSMETIC_TOOL,N.LOCAL_CONSTRAINT,N.TYPABLE_TOOL,N.OUTSIDE_DIRECTION_TOOL]}},ho=[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT,N.DIAGONAL_CONSTRAINT],tL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},nL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},rL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},iL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},oL={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},sL={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},aL={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},lL={toolId:d.ANTI_LONG_KNIGHT,order:0,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},cL={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},uL={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},dL={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},_L={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},fL={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},gL={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:ho}},hL={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:ho}},pL={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:ho}},vL={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:ho}},mL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:ho}},EL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:ho}},CL={toolId:d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,order:0,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},OL={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},IL={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},bL={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.SIMPLE_GLOBAL_CONSTRAINT]}},wL={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},yL={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},LL={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},AL={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},NL={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},SL={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},xL={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},RL={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},TL={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},DL={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},kL={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},GL={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},ML={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},UL={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.NEGATIVE_CONSTRAINT]}},FL={toolId:d.CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},$L={toolId:d.NUMBERED_CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},PL={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},HL={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},BL={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},WL={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},zL={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},YL={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},jL={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},VL={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},KL={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},XL={toolId:d.NORINORI,order:0,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},qL={toolId:d.SHIKAKU,order:0,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},ZL={toolId:d.SHIKAKU_NO_REPEATS_IN_REGION,order:0,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},QL={toolId:d.NORINORI_STAR_BATTLE,order:0,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},JL={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},eA={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},tA={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},nA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},rA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},iA={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},oA={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_LOOP_CONSTRAINTS]}},sA={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},aA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},lA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},cA={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},uA={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},dA={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},_A={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},fA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},gA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},hA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},pA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},vA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},mA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},EA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},CA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},OA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CAVE_CONSTRAINTS]}},IA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},bA={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},wA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},yA={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},LA={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},AA={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_GALAXY_CONSTRAINTS]}},NA={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},SA={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},xA={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.UNDETERMINED_REGIONS_CONSTRAINT]}},RA={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},TA={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},DA={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},kA={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Fe=[N.LINE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.LINE_TOOL],Sr=[N.LINE_CONSTRAINT,N.LOCAL_CONSTRAINT,N.DOUBLE_ENDED_LINE_CONSTRAINT,N.LINE_TOOL],Es={description:"",usage:xe(),tags:[],categories:Fe},At={type:ge.LINE,allowSelfIntersection:!0},Wt={type:ge.LINE,allowSelfIntersection:!1},GA={inputOptions:Wt,toolId:d.THERMOMETER,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Es,description:"Numbers along a thermometer must increase from the bulb end."}},MA={inputOptions:{type:ge.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Es,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},UA={inputOptions:Wt,toolId:d.FUZZY_THERMOMETER,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Es,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},FA={inputOptions:Wt,toolId:d.SLOW_THERMOMETER,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Es,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},$A={inputOptions:Wt,toolId:d.ROW_CYCLE_THERMOMETER,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Es,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},PA={inputOptions:At,toolId:d.PALINDROME,order:$.LINE_TOOLS,shape:{type:P.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:xe(),tags:[],categories:Fe}},HA={inputOptions:At,toolId:d.RENBAN_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:xe(),tags:[],categories:Fe}},BA={inputOptions:At,toolId:d.DOUBLE_RENBAN_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:xe(),tags:[],categories:Fe}},WA={inputOptions:At,toolId:d.RENRENBANBAN_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:xe(),tags:[],categories:Fe}},zA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Fe}},YA={inputOptions:At,toolId:d.NABNER_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:xe(),tags:[],categories:Fe}},jA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:xe(),tags:[],categories:Fe}},VA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:xe(),tags:[],categories:Fe}},KA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:xe(),tags:[],categories:Fe}},XA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:xe(),tags:[],categories:Fe}},qA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:xe(),tags:[],categories:Fe}},ZA={inputOptions:Wt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:xe(),tags:[],categories:Fe}},QA={inputOptions:Wt,toolId:d.INDEX_LINE,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:xe(),tags:[],categories:Fe}},JA={inputOptions:At,toolId:d.UNIQUE_VALUES_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:xe(),tags:[],categories:Fe}},eN={inputOptions:At,toolId:d.REGION_SUM_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:xe(),tags:[],categories:Fe}},tN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:xe(),tags:[],categories:Fe}},nN={inputOptions:Wt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:xe(),tags:[],categories:Fe}},rN={inputOptions:At,toolId:d.SAME_PARITY_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:xe(),tags:[],categories:Fe}},iN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:xe(),tags:[],categories:Fe}},oN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:xe(),tags:[],categories:Fe}},sN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:xe(),tags:[],categories:Fe}},aN={inputOptions:At,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:xe(),tags:[],categories:Fe}},lN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:xe(),tags:[],categories:Fe}},cN={inputOptions:At,toolId:d.ENTROPIC_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:xe(),tags:[],categories:Fe}},uN={inputOptions:At,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:xe(),tags:[],categories:Fe}},dN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:xe(),tags:[],categories:Fe}},_N={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:xe(),tags:[],categories:Fe}},fN={inputOptions:Wt,toolId:d.REPEATED_DIGITS_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:xe(),tags:[],categories:Fe}},gN={inputOptions:Wt,toolId:d.SUPERFUZZY_ARROW,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:xe(),tags:[],categories:Fe}},hN={inputOptions:At,toolId:d.AMBIGUOUS_ARROW,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:xe(),tags:[],categories:Fe}},pN={inputOptions:Wt,toolId:d.HEADLESS_ARROW,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:xe(),tags:[],categories:Fe}},vN={inputOptions:At,toolId:d.XV_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:xe(),tags:[],categories:Fe}},mN={inputOptions:Wt,toolId:d.ROW_SUM_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:xe(),tags:[],categories:Fe}},EN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:xe(),tags:[],categories:Fe}},CN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:xe(),tags:[],categories:Fe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,$.LINE_TOOLS,P.LINE,xe();const ON={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:xe(),tags:[],categories:Fe}},IN={inputOptions:At,toolId:d.ADJACENT_MULTIPLES_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:xe(),tags:[],categories:Fe}},bN={inputOptions:At,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:xe(),tags:[],categories:Fe}},wN={inputOptions:Wt,toolId:d.LOOK_AND_SAY_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:xe(),tags:[],categories:Fe}},yN={inputOptions:Wt,toolId:d.ZIPPER_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:xe(),tags:[],categories:Fe}},LN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:xe(),tags:[],categories:Fe}},AN={inputOptions:{type:ge.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:xe(),tags:[],categories:Fe}},NN={inputOptions:{type:ge.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:xe(),tags:[],categories:Fe}};d.THERMO_OR_AVERAGE_ARROW,$.LINE_TOOLS,P.THERMO_WITH_CIRCLE,xe();const SN={inputOptions:Wt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:xe(),tags:[],categories:Fe}},xN={inputOptions:Wt,toolId:d.PEAPODS,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:xe(),tags:[],categories:Fe}},RN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:xe(),tags:[],categories:Fe}},TN={inputOptions:At,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:xe(),tags:[],categories:Fe}},DN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:xe(),tags:[],categories:Fe}},kN={inputOptions:At,toolId:d.YIN_YANG_REGION_SUM_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:xe(),tags:[],categories:Fe}},GN={inputOptions:Wt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:xe(),tags:[],categories:Fe}},MN={inputOptions:Wt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:$.LINE_TOOLS,shape:{type:P.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:xe(),tags:[],categories:Fe}},UN={inputOptions:At,toolId:d.BETWEEN_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:xe(),tags:[],categories:Sr}},FN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:xe(),tags:[],categories:Sr}},$N={inputOptions:At,toolId:d.TIGHTROPE_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:xe(),tags:[],categories:Sr}},PN={inputOptions:At,toolId:d.PARITY_COUNT_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:xe(),tags:[],categories:Sr}},HN={inputOptions:At,toolId:d.DOUBLE_ARROW_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:xe(),categories:Sr}},BN={inputOptions:At,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:xe(),tags:[],categories:Sr}},WN={inputOptions:At,toolId:d.SPLIT_PEAS,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:xe(),tags:[],categories:Sr}},zN={inputOptions:Wt,toolId:d.DOUBLERS_THERMOMETER,order:$.LINE_TOOLS,shape:{type:P.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:xe(),tags:[],categories:Fe}},YN={inputOptions:At,toolId:d.DOUBLERS_BETWEEN_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:xe(),tags:[],categories:Sr}},jN={inputOptions:At,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:$.LINE_TOOLS,shape:{type:P.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:xe(),tags:[],categories:Sr}},We=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_SHAPE_TOOL],po=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_COLOR_TOOL],Xa={type:P.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Ni={type:P.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function td(t,e=3){return Ai(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function VN(t){return t===""||t==="1"||t==="2"||t==="3"}function qa(t,e,n){return Nr(t,e,n)}const je={type:ge.SINGLE_CELL},ni={type:ge.SINGLE_CELL,valueUpdater:(t,e)=>qa(t,e,td),defaultValue:""},Ph={type:ge.SINGLE_CELL_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},KN={inputOptions:je,toolId:d.ODD,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is odd.",tags:[],categories:We}},XN={inputOptions:je,toolId:d.EVEN,order:$.CELL_SHAPE_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Cell value is even.",tags:[],categories:We}},qN={inputOptions:je,toolId:d.MINIMUM,order:$.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},ZN={inputOptions:je,toolId:d.MAXIMUM,order:$.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}};d.PRIME_CELL,$.CELL_COLOR_TOOL;const QN={inputOptions:je,toolId:d.ODD_MINESWEEPER,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},JN={inputOptions:je,toolId:d.EVEN_MINESWEEPER,order:$.CELL_SHAPE_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},eS={inputOptions:je,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:We}},tS={inputOptions:je,toolId:d.WATCHTOWER,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},nS={inputOptions:je,toolId:d.NOT_WATCHTOWER,order:$.CELL_SHAPE_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},rS={inputOptions:ni,toolId:d.FARSIGHT,order:$.CELL_SHAPE_TOOL,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:We}},iS={inputOptions:{type:ge.SINGLE_CELL,valueUpdater:(t,e)=>qa(t,e,td),defaultValue:"9"},toolId:d.RADAR,order:$.CELL_SHAPE_TOOL,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:We}},oS={inputOptions:je,toolId:d.ORTHOGONAL_SUM,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgba(170, 170, 170, 0.6)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:We}},sS={inputOptions:je,toolId:d.INDEXING_COLUMN,order:$.CELL_COLOR_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:po}},aS={inputOptions:je,toolId:d.INDEXING_ROW,order:$.CELL_COLOR_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:po}},lS={inputOptions:je,toolId:d.LOW_DIGIT,order:$.CELL_COLOR_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:po}},cS={inputOptions:je,toolId:d.HIGH_DIGIT,order:$.CELL_COLOR_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:po}},uS={inputOptions:je,toolId:d.FRIENDLY_CELL,order:$.CELL_COLOR_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:po}},dS={inputOptions:je,toolId:d.DIAGONALLY_ADJACENT_SUM,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:We}},_S={inputOptions:je,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:We}},fS={inputOptions:je,toolId:d.SANDWICH_ROW_COL_COUNT,order:$.CELL_SHAPE_TOOL,shape:Ni,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:We}},gS={inputOptions:je,toolId:d.COUNTING_CIRCLES,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:We}},hS={inputOptions:je,toolId:d.REVERSE_COUNTING_CIRCLES,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:We}},pS={inputOptions:{type:ge.SINGLE_CELL,valueUpdater:(t,e)=>qa(t,e,VN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:$.CELL_SHAPE_TOOL,shape:Ni,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:We}},vS={inputOptions:je,toolId:d.UNIQUE_CELLS,order:$.CELL_SHAPE_TOOL,shape:{type:P.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:We}},mS={inputOptions:je,toolId:d.SEEN_EVEN_COUNT,order:$.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},ES={inputOptions:{type:ge.SINGLE_CELL,valueUpdater:(t,e)=>qa(t,e,td),defaultValue:"5"},toolId:d.CELL_KNIGHT_WHISPERS,order:$.CELL_SHAPE_TOOL,shape:Ni,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:We}},CS={inputOptions:je,toolId:d.SEEN_ODD_COUNT,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},OS={inputOptions:je,toolId:d.YIN_YANG_MINESWEEPER,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:We}},IS={inputOptions:je,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},bS={inputOptions:je,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},wS={inputOptions:je,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:$.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:We}},yS={inputOptions:je,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:$.CELL_SHAPE_TOOL,shape:{type:P.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:We}},LS={inputOptions:je,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:$.CELL_SHAPE_TOOL,shape:{type:P.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:We}},AS={inputOptions:je,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:We}},NS={inputOptions:je,toolId:d.SEEN_REGION_BORDERS_COUNT,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:We}},SS={inputOptions:je,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:We}},xS={inputOptions:je,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:We}},RS={inputOptions:Ph,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:$.CELL_SHAPE_TOOL,shape:{type:P.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[N.SINGLE_CELL_ARROW_TOOL,N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},TS={inputOptions:Ph,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:$.CELL_SHAPE_TOOL,shape:{type:P.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[N.SINGLE_CELL_ARROW_TOOL,N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT]}},DS={inputOptions:ni,toolId:d.SASHIGANE_REGION_SUM,order:$.CELL_SHAPE_TOOL,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:We}},kS={inputOptions:je,toolId:d.CELL_ON_THE_LOOP,order:$.CELL_SHAPE_TOOL,shape:Xa,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:We}},GS={inputOptions:je,toolId:d.CELL_NOT_ON_THE_LOOP,order:$.CELL_SHAPE_TOOL,shape:Ni,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:We}},MS={inputOptions:je,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:We}},US={inputOptions:ni,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:$.CELL_SHAPE_TOOL,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:We}},FS={inputOptions:je,toolId:d.CAVE_CLUE,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:We}},$S={inputOptions:ni,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:We}},PS={inputOptions:ni,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:We}},HS={inputOptions:ni,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:$.CELL_SHAPE_TOOL,shape:Ni,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:We}},BS={inputOptions:je,toolId:d.DIRECTED_PATH_START,order:$.CELL_SHAPE_TOOL,shape:{type:P.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:We}},WS={inputOptions:je,toolId:d.DIRECTED_PATH_END,order:$.CELL_SHAPE_TOOL,shape:{type:P.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:We}},zS={inputOptions:ni,toolId:d.TELEPORT,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:We}},YS={inputOptions:ni,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:$.CELL_SHAPE_TOOL,shape:{type:P.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:We}},jS={inputOptions:je,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:$.CELL_SHAPE_TOOL,shape:{...Xa,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:We}},VS={inputOptions:je,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:$.CELL_SHAPE_TOOL,shape:Ni,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:We}},KS={inputOptions:je,toolId:d.CONNECT_FOUR_YELLOW,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:We}},XS={inputOptions:je,toolId:d.CONENCT_FOUR_RED,order:$.CELL_SHAPE_TOOL,shape:{type:P.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:We}},qS={inputOptions:je,toolId:d.SHIKAKU_REGION_SIZE,order:$.CELL_SHAPE_TOOL,shape:Ni,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:We}},nr=[N.SINGLE_CELL_CONSTRAINT,N.LOCAL_CONSTRAINT,N.SINGLE_CELL_MULTIARROW_TOOL],xr={type:P.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},rr={type:ge.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:It.CORNER_OR_EDGE},ZS={inputOptions:rr,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:nr}},QS={inputOptions:rr,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:nr}},JS={inputOptions:rr,toolId:d.LOOP_CELL_COUNT_ARROWS,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:nr}},ex={inputOptions:rr,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:nr}},tx={inputOptions:rr,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:nr}},nx={inputOptions:rr,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:nr}},rx={inputOptions:rr,toolId:d.COLD_ARROWS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:nr}},ix={inputOptions:rr,toolId:d.HOT_ARROWS,order:$.CELL_SHAPE_TOOL,shape:{type:P.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:nr}},ox={inputOptions:rr,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:nr}},sx={inputOptions:rr,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:nr}},ax={inputOptions:rr,toolId:d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,order:$.CELL_SHAPE_TOOL,shape:xr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:nr}},lx={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},cx={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},ux={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}},dx={toolId:d.LITS_MAX_TETROMINO_SUM,order:0,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[N.LOCAL_CONSTRAINT,N.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;const _x={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}},fx={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT;const gx={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}},hx={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[N.GLOBAL_CONSTRAINT,N.VALUE_MODIFIER_CONSTRAINT]}},px=[N.CORNER_LINE_CONSTRAINT,N.CORNER_LINE_TOOL,N.LOCAL_CONSTRAINT],vx={inputOptions:{type:ge.CORNER_LINE},toolId:d.MAZE_WALL,order:$.EDGE_TOOLS,shape:{type:P.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:px}},Rt={[d.GIVEN]:Gw,[d.DIGIT]:Mw,[d.REGIONS]:Uw,[d.OUTSIDE]:Hw,[d.CORNER_PM]:Fw,[d.CENTER_PM]:$w,[d.HIGHLIGHTS]:Pw,[d.FOG]:Bw,[d.PEN_TOOL]:Ww,[d.SUDOKU_RULES_DO_NOT_APPLY]:tL,[d.LEAVE_EMPTY_CELLS_EMPTY]:nL,[d.LITS]:oL,[d.HEXED_SUDOKU]:rL,[d.FILLOMINO]:iL,[d.ANTIKNIGHT]:sL,[d.ANTI_LONG_KNIGHT]:lL,[d.ANTIKING]:cL,[d.ANTI_GIRAFFE]:aL,[d.DISJOINT_GROUPS]:uL,[d.TANGO]:dL,[d.NONCONSECUTIVE]:_L,[d.NONRATIO]:fL,[d.ANTI_ENTROPY]:OL,[d.GLOBAL_INDEXING_COLUMN]:IL,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:bL,[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:CL,[d.NEGATIVE_DIAGONAL]:gL,[d.POSITIVE_DIAGONAL]:hL,[d.NEGATIVE_ANTIDIAGONAL]:pL,[d.POSITIVE_ANTIDIAGONAL]:vL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:mL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:EL,[d.ALL_RATIOS_GIVEN]:wL,[d.ALL_DIFFERENCES_GIVEN]:yL,[d.ALL_X_GIVEN]:LL,[d.ALL_V_GIVEN]:AL,[d.ALL_XV_GIVEN]:NL,[d.ALL_RADARS_GIVEN]:SL,[d.ALL_XY_DIFFERENCES_GIVEN]:xL,[d.ALL_INDEXING_COLUMN_GIVEN]:RL,[d.ALL_INDEXING_ROW_GIVEN]:TL,[d.ALL_YIN_YANG_KROPKI_GIVEN]:DL,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:kL,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:ML,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:UL,[d.CAVE_CELLS_ARE_ODD]:EA,[d.CAVE_WALLS_ARE_EVEN]:mA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:pA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:vA,[d.DOUBLERS]:_x,[d.NEGATORS]:fx,[d.NEXUS]:gx,[d.INDEXER_CELLS]:hx,[d.CHAOS_CONSTRUCTION]:FL,[d.NUMBERED_CHAOS_CONSTRUCTION]:$L,[d.CHAOS_CONSTRUCTION_SUGURU]:PL,[d.YIN_YANG]:HL,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:BL,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:WL,[d.NURIMISAKI]:zL,[d.NURIKABE]:YL,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:jL,[d.TWO_CONTIGUOUS_REGIONS]:VL,[d.SASHIGANE]:KL,[d.NORINORI]:XL,[d.SHIKAKU]:qL,[d.SHIKAKU_NO_REPEATS_IN_REGION]:ZL,[d.GOLDILOCKS_ZONE]:JL,[d.CELL_CENTER_LOOP_NO_TOUCHING]:eA,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:tA,[d.NOT_LOOP_SIZED_REGIONS]:iA,[d.MODULAR_LOOP]:oA,[d.CAVE]:gA,[d.CAVE_LITS]:CA,[d.RENBAN_CAVES]:OA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:hA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:GL,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:nA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:rA,[d.GALAXIES]:bA,[d.TWO_SYMMETRIC_GALAXIES]:LA,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:wA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:yA,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:AA,[d.PENTOMINO_TILLING]:NA,[d.TILLING_NO_EMPTY_CELLS]:SA,[d.LITS_BLACK_WHITE_STAR_BATTLE]:xA,[d.NORINORI_STAR_BATTLE]:QL,[d.MAZE_DIRECTED_PATH]:sA,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:aA,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:dA,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:lA,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:uA,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:_A,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:fA,[d.DIRECTED_PATH_IS_PARITY_LINE]:cA,[d.CONNECT_FOUR]:RA,[d.CONNECT_FOUR_DRAW]:TA,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:DA,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:kA,[d.ODD]:KN,[d.EVEN]:XN,[d.MINIMUM]:qN,[d.MAXIMUM]:ZN,[d.ODD_MINESWEEPER]:QN,[d.EVEN_MINESWEEPER]:JN,[d.WATCHTOWER]:tS,[d.NOT_WATCHTOWER]:nS,[d.FARSIGHT]:rS,[d.RADAR]:iS,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:eS,[d.ORTHOGONAL_SUM]:oS,[d.DIAGONALLY_ADJACENT_SUM]:dS,[d.INDEXING_COLUMN]:sS,[d.INDEXING_ROW]:aS,[d.LOW_DIGIT]:lS,[d.HIGH_DIGIT]:cS,[d.FRIENDLY_CELL]:uS,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:_S,[d.SANDWICH_ROW_COL_COUNT]:fS,[d.COUNTING_CIRCLES]:gS,[d.REVERSE_COUNTING_CIRCLES]:hS,[d.COLORED_COUNTING_CIRCLES]:pS,[d.UNIQUE_CELLS]:vS,[d.SEEN_EVEN_COUNT]:mS,[d.SEEN_ODD_COUNT]:CS,[d.CELL_KNIGHT_WHISPERS]:ES,[d.YIN_YANG_MINESWEEPER]:OS,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:IS,[d.YIN_YANG_SEEN_SHADED_CELLS]:bS,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:wS,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:yS,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:LS,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:AS,[d.SEEN_REGION_BORDERS_COUNT]:NS,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:SS,[d.SASHIGANE_BEND_REGION_COUNT]:xS,[d.SASHIGANE_REGION_SUM]:DS,[d.CELL_ON_THE_LOOP]:kS,[d.CELL_NOT_ON_THE_LOOP]:GS,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:MS,[d.CAVE_CLUE]:FS,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:US,[d.YIN_YANG_FILLOMINO_PARITY]:IA,[d.SHIKAKU_REGION_SIZE]:qS,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:$S,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:PS,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:HS,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:YS,[d.DIRECTED_PATH_START]:BS,[d.DIRECTED_PATH_END]:WS,[d.TELEPORT]:zS,[d.CONNECT_FOUR_YELLOW]:KS,[d.CONENCT_FOUR_RED]:XS,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:RS,[d.THERMO_SIGHTLINE_LOOP_ARROW]:TS,[d.HOT_ARROWS]:ix,[d.COLD_ARROWS]:rx,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:nx,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:ex,[d.YIN_YANG_COUNT_SHADED_CELLS]:tx,[d.LOOP_CELL_COUNT_ARROWS]:JS,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:QS,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:ZS,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:ox,[d.NURIKABE_SEEN_WATERWAY_CELLS]:jS,[d.NURIKABE_ISLAND_SIZE_CELL]:VS,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:sx,[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:ax,[d.DIFFERENCE]:sy,[d.RATIO]:oy,[d.XV]:ly,[d.EDGE_INEQUALITY]:cy,[d.EDGE_SUM]:ay,[d.EDGE_PRODUCT]:uy,[d.EDGE_MODULO]:dy,[d.EDGE_FACTOR]:_y,[d.XY_DIFFERENCES]:fy,[d.YIN_YANG_WHITE_KROPKI]:gy,[d.YIN_YANG_KROPKI]:hy,[d.FILLOMINO_REGION_BORDER]:py,[d.UNKNOWN_REGION_BORDER]:vy,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:my,[d.EDGE_CAVE_ONE_OF_EACH]:Ey,[d.ONE_WAY_DOOR]:Cy,[d.QUADRUPLE]:Xw,[d.CORNER_SUM]:qw,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:Zw,[d.CORNER_EVEN_COUNT]:Qw,[d.PRODUCT_SQUARE]:Jw,[d.EQUAL_DIAGONAL_DIFFERENCES]:ey,[d.THERMOMETER]:GA,[d.FUZZY_THERMOMETER]:UA,[d.SLOW_THERMOMETER]:FA,[d.CUSTOM_THERMOMETER]:MA,[d.ROW_CYCLE_THERMOMETER]:$A,[d.PALINDROME]:PA,[d.RENBAN_LINE]:HA,[d.DOUBLE_RENBAN_LINE]:BA,[d.RENRENBANBAN_LINE]:WA,[d.N_CONSECUTIVE_RENBAN_LINE]:zA,[d.NABNER_LINE]:YA,[d.WHISPERS_LINE]:jA,[d.DUTCH_WHISPERS]:VA,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:KA,[d.RENBAN_OR_WHISPERS_LINE]:XA,[d.RENBAN_OR_NABNER_LINE]:qA,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:ZA,[d.INDEX_LINE]:QA,[d.UNIQUE_VALUES_LINE]:JA,[d.REPEATED_DIGITS_LINE]:fN,[d.REGION_SUM_LINE]:eN,[d.SUM_LINE]:tN,[d.XV_LINE]:vN,[d.ROW_SUM_LINE]:mN,[d.AT_LEAST_X_LINE]:EN,[d.SUPERFUZZY_ARROW]:gN,[d.AMBIGUOUS_ARROW]:hN,[d.HEADLESS_ARROW]:pN,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:CN,[d.PRODUCT_LINE]:ON,[d.ADJACENT_MULTIPLES_LINE]:IN,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:bN,[d.LOOK_AND_SAY_LINE]:wN,[d.ARITHMETIC_SEQUENCE_LINE]:nN,[d.ZIPPER_LINE]:yN,[d.SEGMENTED_SUM_LINE]:LN,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:AN,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:NN,[d.SAME_PARITY_LINE]:rN,[d.MODULAR_LINE]:iN,[d.UNIMODULAR_LINE]:oN,[d.MODULAR_OR_UNIMODULAR_LINE]:sN,[d.ODD_EVEN_OSCILLATOR_LINE]:aN,[d.HIGH_LOW_OSCILLATOR_LINE]:lN,[d.ENTROPIC_LINE]:cN,[d.ENTROPIC_OR_MODULAR_LINE]:uN,[d.INDEXING_COLUMN_IS_X_LINE]:dN,[d.INDEXING_ROW_IS_X_LINE]:_N,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:SN,[d.PEAPODS]:xN,[d.YIN_YANG_INDEXING_LINE_COLORING]:GN,[d.YIN_YANG_SHADED_WHISPERS_LINE]:RN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:TN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:DN,[d.YIN_YANG_REGION_SUM_LINE]:kN,[d.GOLDILOCKS_ZONE_REGION_SUM]:MN,[d.BETWEEN_LINE]:UN,[d.LOCKOUT_LINE]:FN,[d.PARITY_COUNT_LINE]:PN,[d.TIGHTROPE_LINE]:$N,[d.DOUBLE_ARROW_LINE]:HN,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:BN,[d.SPLIT_PEAS]:WN,[d.DOUBLERS_THERMOMETER]:zN,[d.DOUBLERS_BETWEEN_LINE]:YN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:jN,[d.ARROW]:nw,[d.CHAOS_CONSTRUCTION_ARROW]:ow,[d.AVERAGE_ARROW]:rw,[d.BULBOUS_ARROW]:iw,[d.MAZE_WALL]:vx,[d.KILLER_CAGE]:Cw,[d.UNIQUE_DIGITS_CAGE]:Ow,[d.INVERTED_KILLER_CAGE]:Iw,[d.SUM_CAGE]:bw,[d.SUM_CAGE_LOOK_AND_SAY]:ww,[d.PARITY_BALANCE_CAGE]:yw,[d.DIVISIBLE_KILLER_CAGE]:Lw,[d.SPOTLIGHT_CAGE]:Aw,[d.PUTTERIA_CAGE]:Nw,[d.MULTISET_CAGE]:Sw,[d.VAULTED_CAGE]:xw,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:Rw,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:Tw,[d.DOUBLERS_KILLER_CAGE]:Dw,[d.NEGATORS_KILLER_CAGE]:kw,[d.CLONE_REGION]:Vw,[d.SANDWICH_SUM]:Ny,[d.X_SUM]:xy,[d.SHORTSIGHTED_X_SUM]:Ry,[d.SHIFTED_X_SUM]:Ty,[d.BROKEN_X_SUM]:Dy,[d.X_SUM_SKYSCRAPERS]:ky,[d.BATTLEFIELD]:Gy,[d.SKYSCRAPERS]:My,[d.X_INDEX]:Uy,[d.SANDWICH_SUM_XOR_X_SUM]:Sy,[d.RISING_STREAK]:Fy,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:$y,[d.OUTSIDE_CONSECUTIVE_SUM]:Py,[d.LOOPWICHES]:Hy,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:By,[d.PENTOMINO_BORDER_COUNT]:Wy,[d.LITTLE_KILLER_SUM]:Iy,[d.LITTLE_KILLER_PRODUCT]:by,[d.LITTLE_KILLER_LOOK_AND_SAY]:wy,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:Ly,[d.X_OMIT_LITTLE_KILLER_SUM]:yy,[d.NEGATORS_LITTLE_KILLER_SUM]:Ay,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Yw,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:jw,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:lx,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:cx,[d.FORBIDDEN_KNIGHT_SUM]:ux,[d.LITS_MAX_TETROMINO_SUM]:dx,[d.COSMETIC_CELL_SHAPE]:zy,[d.COSMETIC_CELL_ARROW]:Yy,[d.COSMETIC_CELL_MULTI_ARROW]:jy,[d.COSMETIC_EDGE]:Vy,[d.COSMETIC_CORNER]:Ky,[d.COSMETIC_LINE]:Xy,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:qy,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:Zy,[d.COSMETIC_ARROW]:Jy,[d.COSMETIC_CAGE]:Qy,[d.COSMETIC_OUTSIDE_DIRECTION]:eL};class Ii extends Map{constructor(){super()}setConstraint(e,n){return kb(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new Ii;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new Ii;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=Ah(r);o!==void 0&&Nh(o,Pu)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var Be=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Be||{});function Hh(t){if(!(t in Be))throw Error(" not a key in DIRECTION");return Be[t]}function Ke(t,e){return t.r===e.r&&t.c===e.c}function Bh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function mx(t,e){return{r:t.r*e,c:t.c*e}}function Ex(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function Cs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Ke(t,e)}function Cx(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function xa(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Xt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function Za(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function Ox(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function nd(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function Ix(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const bx=new Map([[6,Be.N],[2,Be.S],[0,Be.E],[4,Be.W],[7,Be.NE],[5,Be.NW],[1,Be.SE],[3,Be.SW]]);function rd(t){t=t%8;const e=bx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const wx=new Map([[Be.N,{r:-1,c:0}],[Be.S,{r:1,c:0}],[Be.E,{r:0,c:1}],[Be.W,{r:0,c:-1}],[Be.NE,{r:-1,c:1}],[Be.NW,{r:-1,c:-1}],[Be.SE,{r:1,c:1}],[Be.SW,{r:1,c:-1}]]);function Qa(t){const e=wx.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function Wh(t,e){const n=Qa(e);return Bh(t,n)}function id(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function zh(t,e,n=!1){const r=t.some(o=>Ke(o,e)),i=n?t.some(o=>Cs(o,e)):t.some(o=>Cx(o,e));if(!r&&i){const o=[...t,e];return xa(o),o}return t}function Ia(t){return`R${t.r+1}C${t.c+1}`}function od(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var yx=Zo.exports,vg;function Lx(){return vg||(vg=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,v="__lodash_placeholder__",g=1,p=2,m=4,E=1,O=2,I=1,w=2,x=4,k=8,U=16,z=32,j=64,H=128,q=256,ee=512,ce=30,te="...",re=800,Ee=16,Oe=1,he=2,Ue=3,Qe=1/0,Ne=9007199254740991,Le=17976931348623157e292,lt=NaN,ze=4294967295,gn=ze-1,bn=ze>>>1,Mr=[["ary",H],["bind",I],["bindKey",w],["curry",k],["curryRight",U],["flip",ee],["partial",z],["partialRight",j],["rearg",q]],tn="[object Arguments]",hr="[object Array]",si="[object AsyncFunction]",or="[object Boolean]",Un="[object Date]",Ri="[object DOMException]",Ur="[object Error]",Dt="[object Function]",Te="[object GeneratorFunction]",be="[object Map]",ke="[object Number]",Re="[object Null]",Nt="[object Object]",Ts="[object Promise]",Cl="[object Proxy]",ai="[object RegExp]",Zn="[object Set]",No="[object String]",Ds="[object Symbol]",pv="[object Undefined]",So="[object WeakMap]",vv="[object WeakSet]",xo="[object ArrayBuffer]",Ti="[object DataView]",Ol="[object Float32Array]",Il="[object Float64Array]",bl="[object Int8Array]",wl="[object Int16Array]",yl="[object Int32Array]",Ll="[object Uint8Array]",Al="[object Uint8ClampedArray]",Nl="[object Uint16Array]",Sl="[object Uint32Array]",mv=/\b__p \+= '';/g,Ev=/\b(__p \+=) '' \+/g,Cv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Md=/&(?:amp|lt|gt|quot|#39);/g,Ud=/[&<>"']/g,Ov=RegExp(Md.source),Iv=RegExp(Ud.source),bv=/<%-([\s\S]+?)%>/g,wv=/<%([\s\S]+?)%>/g,Fd=/<%=([\s\S]+?)%>/g,yv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Lv=/^\w*$/,Av=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xl=/[\\^$.*+?()[\]{}|]/g,Nv=RegExp(xl.source),Rl=/^\s+/,Sv=/\s/,xv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Rv=/\{\n\/\* \[wrapped with (.+)\] \*/,Tv=/,? & /,Dv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,kv=/[()=,{}\[\]\/\s]/,Gv=/\\(\\)?/g,Mv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$d=/\w*$/,Uv=/^[-+]0x[0-9a-f]+$/i,Fv=/^0b[01]+$/i,$v=/^\[object .+?Constructor\]$/,Pv=/^0o[0-7]+$/i,Hv=/^(?:0|[1-9]\d*)$/,Bv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ks=/($^)/,Wv=/['\n\r\u2028\u2029\\]/g,Gs="\\ud800-\\udfff",zv="\\u0300-\\u036f",Yv="\\ufe20-\\ufe2f",jv="\\u20d0-\\u20ff",Pd=zv+Yv+jv,Hd="\\u2700-\\u27bf",Bd="a-z\\xdf-\\xf6\\xf8-\\xff",Vv="\\xac\\xb1\\xd7\\xf7",Kv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xv="\\u2000-\\u206f",qv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Wd="A-Z\\xc0-\\xd6\\xd8-\\xde",zd="\\ufe0e\\ufe0f",Yd=Vv+Kv+Xv+qv,Tl="['’]",Zv="["+Gs+"]",jd="["+Yd+"]",Ms="["+Pd+"]",Vd="\\d+",Qv="["+Hd+"]",Kd="["+Bd+"]",Xd="[^"+Gs+Yd+Vd+Hd+Bd+Wd+"]",Dl="\\ud83c[\\udffb-\\udfff]",Jv="(?:"+Ms+"|"+Dl+")",qd="[^"+Gs+"]",kl="(?:\\ud83c[\\udde6-\\uddff]){2}",Gl="[\\ud800-\\udbff][\\udc00-\\udfff]",Di="["+Wd+"]",Zd="\\u200d",Qd="(?:"+Kd+"|"+Xd+")",em="(?:"+Di+"|"+Xd+")",Jd="(?:"+Tl+"(?:d|ll|m|re|s|t|ve))?",e_="(?:"+Tl+"(?:D|LL|M|RE|S|T|VE))?",t_=Jv+"?",n_="["+zd+"]?",tm="(?:"+Zd+"(?:"+[qd,kl,Gl].join("|")+")"+n_+t_+")*",nm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",r_=n_+t_+tm,im="(?:"+[Qv,kl,Gl].join("|")+")"+r_,om="(?:"+[qd+Ms+"?",Ms,kl,Gl,Zv].join("|")+")",sm=RegExp(Tl,"g"),am=RegExp(Ms,"g"),Ml=RegExp(Dl+"(?="+Dl+")|"+om+r_,"g"),lm=RegExp([Di+"?"+Kd+"+"+Jd+"(?="+[jd,Di,"$"].join("|")+")",em+"+"+e_+"(?="+[jd,Di+Qd,"$"].join("|")+")",Di+"?"+Qd+"+"+Jd,Di+"+"+e_,rm,nm,Vd,im].join("|"),"g"),cm=RegExp("["+Zd+Gs+Pd+zd+"]"),um=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,dm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],_m=-1,St={};St[Ol]=St[Il]=St[bl]=St[wl]=St[yl]=St[Ll]=St[Al]=St[Nl]=St[Sl]=!0,St[tn]=St[hr]=St[xo]=St[or]=St[Ti]=St[Un]=St[Ur]=St[Dt]=St[be]=St[ke]=St[Nt]=St[ai]=St[Zn]=St[No]=St[So]=!1;var wt={};wt[tn]=wt[hr]=wt[xo]=wt[Ti]=wt[or]=wt[Un]=wt[Ol]=wt[Il]=wt[bl]=wt[wl]=wt[yl]=wt[be]=wt[ke]=wt[Nt]=wt[ai]=wt[Zn]=wt[No]=wt[Ds]=wt[Ll]=wt[Al]=wt[Nl]=wt[Sl]=!0,wt[Ur]=wt[Dt]=wt[So]=!1;var fm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},gm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},vm=parseFloat,mm=parseInt,i_=typeof ba=="object"&&ba&&ba.Object===Object&&ba,Em=typeof self=="object"&&self&&self.Object===Object&&self,Yt=i_||Em||Function("return this")(),Ul=e&&!e.nodeType&&e,li=Ul&&!0&&t&&!t.nodeType&&t,o_=li&&li.exports===Ul,Fl=o_&&i_.process,Fn=function(){try{var V=li&&li.require&&li.require("util").types;return V||Fl&&Fl.binding&&Fl.binding("util")}catch{}}(),s_=Fn&&Fn.isArrayBuffer,a_=Fn&&Fn.isDate,l_=Fn&&Fn.isMap,c_=Fn&&Fn.isRegExp,u_=Fn&&Fn.isSet,d_=Fn&&Fn.isTypedArray;function wn(V,ne,Q){switch(Q.length){case 0:return V.call(ne);case 1:return V.call(ne,Q[0]);case 2:return V.call(ne,Q[0],Q[1]);case 3:return V.call(ne,Q[0],Q[1],Q[2])}return V.apply(ne,Q)}function Cm(V,ne,Q,Ae){for(var Ve=-1,ht=V==null?0:V.length;++Ve<ht;){var $t=V[Ve];ne(Ae,$t,Q($t),V)}return Ae}function $n(V,ne){for(var Q=-1,Ae=V==null?0:V.length;++Q<Ae&&ne(V[Q],Q,V)!==!1;);return V}function Om(V,ne){for(var Q=V==null?0:V.length;Q--&&ne(V[Q],Q,V)!==!1;);return V}function __(V,ne){for(var Q=-1,Ae=V==null?0:V.length;++Q<Ae;)if(!ne(V[Q],Q,V))return!1;return!0}function Fr(V,ne){for(var Q=-1,Ae=V==null?0:V.length,Ve=0,ht=[];++Q<Ae;){var $t=V[Q];ne($t,Q,V)&&(ht[Ve++]=$t)}return ht}function Us(V,ne){var Q=V==null?0:V.length;return!!Q&&ki(V,ne,0)>-1}function $l(V,ne,Q){for(var Ae=-1,Ve=V==null?0:V.length;++Ae<Ve;)if(Q(ne,V[Ae]))return!0;return!1}function xt(V,ne){for(var Q=-1,Ae=V==null?0:V.length,Ve=Array(Ae);++Q<Ae;)Ve[Q]=ne(V[Q],Q,V);return Ve}function $r(V,ne){for(var Q=-1,Ae=ne.length,Ve=V.length;++Q<Ae;)V[Ve+Q]=ne[Q];return V}function Pl(V,ne,Q,Ae){var Ve=-1,ht=V==null?0:V.length;for(Ae&&ht&&(Q=V[++Ve]);++Ve<ht;)Q=ne(Q,V[Ve],Ve,V);return Q}function Im(V,ne,Q,Ae){var Ve=V==null?0:V.length;for(Ae&&Ve&&(Q=V[--Ve]);Ve--;)Q=ne(Q,V[Ve],Ve,V);return Q}function Hl(V,ne){for(var Q=-1,Ae=V==null?0:V.length;++Q<Ae;)if(ne(V[Q],Q,V))return!0;return!1}var bm=Bl("length");function wm(V){return V.split("")}function ym(V){return V.match(Dv)||[]}function f_(V,ne,Q){var Ae;return Q(V,function(Ve,ht,$t){if(ne(Ve,ht,$t))return Ae=ht,!1}),Ae}function Fs(V,ne,Q,Ae){for(var Ve=V.length,ht=Q+(Ae?1:-1);Ae?ht--:++ht<Ve;)if(ne(V[ht],ht,V))return ht;return-1}function ki(V,ne,Q){return ne===ne?Um(V,ne,Q):Fs(V,g_,Q)}function Lm(V,ne,Q,Ae){for(var Ve=Q-1,ht=V.length;++Ve<ht;)if(Ae(V[Ve],ne))return Ve;return-1}function g_(V){return V!==V}function h_(V,ne){var Q=V==null?0:V.length;return Q?zl(V,ne)/Q:lt}function Bl(V){return function(ne){return ne==null?n:ne[V]}}function Wl(V){return function(ne){return V==null?n:V[ne]}}function p_(V,ne,Q,Ae,Ve){return Ve(V,function(ht,$t,Ot){Q=Ae?(Ae=!1,ht):ne(Q,ht,$t,Ot)}),Q}function Am(V,ne){var Q=V.length;for(V.sort(ne);Q--;)V[Q]=V[Q].value;return V}function zl(V,ne){for(var Q,Ae=-1,Ve=V.length;++Ae<Ve;){var ht=ne(V[Ae]);ht!==n&&(Q=Q===n?ht:Q+ht)}return Q}function Yl(V,ne){for(var Q=-1,Ae=Array(V);++Q<V;)Ae[Q]=ne(Q);return Ae}function Nm(V,ne){return xt(ne,function(Q){return[Q,V[Q]]})}function v_(V){return V&&V.slice(0,O_(V)+1).replace(Rl,"")}function yn(V){return function(ne){return V(ne)}}function jl(V,ne){return xt(ne,function(Q){return V[Q]})}function Ro(V,ne){return V.has(ne)}function m_(V,ne){for(var Q=-1,Ae=V.length;++Q<Ae&&ki(ne,V[Q],0)>-1;);return Q}function E_(V,ne){for(var Q=V.length;Q--&&ki(ne,V[Q],0)>-1;);return Q}function Sm(V,ne){for(var Q=V.length,Ae=0;Q--;)V[Q]===ne&&++Ae;return Ae}var xm=Wl(fm),Rm=Wl(gm);function Tm(V){return"\\"+pm[V]}function Dm(V,ne){return V==null?n:V[ne]}function Gi(V){return cm.test(V)}function km(V){return um.test(V)}function Gm(V){for(var ne,Q=[];!(ne=V.next()).done;)Q.push(ne.value);return Q}function Vl(V){var ne=-1,Q=Array(V.size);return V.forEach(function(Ae,Ve){Q[++ne]=[Ve,Ae]}),Q}function C_(V,ne){return function(Q){return V(ne(Q))}}function Pr(V,ne){for(var Q=-1,Ae=V.length,Ve=0,ht=[];++Q<Ae;){var $t=V[Q];($t===ne||$t===v)&&(V[Q]=v,ht[Ve++]=Q)}return ht}function $s(V){var ne=-1,Q=Array(V.size);return V.forEach(function(Ae){Q[++ne]=Ae}),Q}function Mm(V){var ne=-1,Q=Array(V.size);return V.forEach(function(Ae){Q[++ne]=[Ae,Ae]}),Q}function Um(V,ne,Q){for(var Ae=Q-1,Ve=V.length;++Ae<Ve;)if(V[Ae]===ne)return Ae;return-1}function Fm(V,ne,Q){for(var Ae=Q+1;Ae--;)if(V[Ae]===ne)return Ae;return Ae}function Mi(V){return Gi(V)?Pm(V):bm(V)}function Qn(V){return Gi(V)?Hm(V):wm(V)}function O_(V){for(var ne=V.length;ne--&&Sv.test(V.charAt(ne)););return ne}var $m=Wl(hm);function Pm(V){for(var ne=Ml.lastIndex=0;Ml.test(V);)++ne;return ne}function Hm(V){return V.match(Ml)||[]}function Bm(V){return V.match(lm)||[]}var Wm=function V(ne){ne=ne==null?Yt:Ui.defaults(Yt.Object(),ne,Ui.pick(Yt,dm));var Q=ne.Array,Ae=ne.Date,Ve=ne.Error,ht=ne.Function,$t=ne.Math,Ot=ne.Object,Kl=ne.RegExp,zm=ne.String,Pn=ne.TypeError,Ps=Q.prototype,Ym=ht.prototype,Fi=Ot.prototype,Hs=ne["__core-js_shared__"],Bs=Ym.toString,mt=Fi.hasOwnProperty,jm=0,I_=function(){var s=/[^.]+$/.exec(Hs&&Hs.keys&&Hs.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Ws=Fi.toString,Vm=Bs.call(Ot),Km=Yt._,Xm=Kl("^"+Bs.call(mt).replace(xl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),zs=o_?ne.Buffer:n,Hr=ne.Symbol,Ys=ne.Uint8Array,b_=zs?zs.allocUnsafe:n,js=C_(Ot.getPrototypeOf,Ot),w_=Ot.create,y_=Fi.propertyIsEnumerable,Vs=Ps.splice,L_=Hr?Hr.isConcatSpreadable:n,To=Hr?Hr.iterator:n,ci=Hr?Hr.toStringTag:n,Ks=function(){try{var s=gi(Ot,"defineProperty");return s({},"",{}),s}catch{}}(),qm=ne.clearTimeout!==Yt.clearTimeout&&ne.clearTimeout,Zm=Ae&&Ae.now!==Yt.Date.now&&Ae.now,Qm=ne.setTimeout!==Yt.setTimeout&&ne.setTimeout,Xs=$t.ceil,qs=$t.floor,Xl=Ot.getOwnPropertySymbols,Jm=zs?zs.isBuffer:n,A_=ne.isFinite,e1=Ps.join,t1=C_(Ot.keys,Ot),Pt=$t.max,nn=$t.min,n1=Ae.now,r1=ne.parseInt,N_=$t.random,i1=Ps.reverse,ql=gi(ne,"DataView"),Do=gi(ne,"Map"),Zl=gi(ne,"Promise"),$i=gi(ne,"Set"),ko=gi(ne,"WeakMap"),Go=gi(Ot,"create"),Zs=ko&&new ko,Pi={},o1=hi(ql),s1=hi(Do),a1=hi(Zl),l1=hi($i),c1=hi(ko),Qs=Hr?Hr.prototype:n,Mo=Qs?Qs.valueOf:n,S_=Qs?Qs.toString:n;function y(s){if(kt(s)&&!Xe(s)&&!(s instanceof ot)){if(s instanceof Hn)return s;if(mt.call(s,"__wrapped__"))return Rf(s)}return new Hn(s)}var Hi=function(){function s(){}return function(l){if(!Tt(l))return{};if(w_)return w_(l);s.prototype=l;var f=new s;return s.prototype=n,f}}();function Js(){}function Hn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}y.templateSettings={escape:bv,evaluate:wv,interpolate:Fd,variable:"",imports:{_:y}},y.prototype=Js.prototype,y.prototype.constructor=y,Hn.prototype=Hi(Js.prototype),Hn.prototype.constructor=Hn;function ot(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ze,this.__views__=[]}function u1(){var s=new ot(this.__wrapped__);return s.__actions__=hn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=hn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=hn(this.__views__),s}function d1(){if(this.__filtered__){var s=new ot(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function _1(){var s=this.__wrapped__.value(),l=this.__dir__,f=Xe(s),C=l<0,b=f?s.length:0,S=w0(0,b,this.__views__),G=S.start,B=S.end,K=B-G,oe=C?B:G-1,le=this.__iteratees__,_e=le.length,ye=0,Ge=nn(K,this.__takeCount__);if(!f||!C&&b==K&&Ge==K)return J_(s,this.__actions__);var Pe=[];e:for(;K--&&ye<Ge;){oe+=l;for(var et=-1,He=s[oe];++et<_e;){var rt=le[et],ct=rt.iteratee,Nn=rt.type,ln=ct(He);if(Nn==he)He=ln;else if(!ln){if(Nn==Oe)continue e;break e}}Pe[ye++]=He}return Pe}ot.prototype=Hi(Js.prototype),ot.prototype.constructor=ot;function ui(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var C=s[l];this.set(C[0],C[1])}}function f1(){this.__data__=Go?Go(null):{},this.size=0}function g1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function h1(s){var l=this.__data__;if(Go){var f=l[s];return f===u?n:f}return mt.call(l,s)?l[s]:n}function p1(s){var l=this.__data__;return Go?l[s]!==n:mt.call(l,s)}function v1(s,l){var f=this.__data__;return this.size+=this.has(s)?0:1,f[s]=Go&&l===n?u:l,this}ui.prototype.clear=f1,ui.prototype.delete=g1,ui.prototype.get=h1,ui.prototype.has=p1,ui.prototype.set=v1;function pr(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var C=s[l];this.set(C[0],C[1])}}function m1(){this.__data__=[],this.size=0}function E1(s){var l=this.__data__,f=ea(l,s);if(f<0)return!1;var C=l.length-1;return f==C?l.pop():Vs.call(l,f,1),--this.size,!0}function C1(s){var l=this.__data__,f=ea(l,s);return f<0?n:l[f][1]}function O1(s){return ea(this.__data__,s)>-1}function I1(s,l){var f=this.__data__,C=ea(f,s);return C<0?(++this.size,f.push([s,l])):f[C][1]=l,this}pr.prototype.clear=m1,pr.prototype.delete=E1,pr.prototype.get=C1,pr.prototype.has=O1,pr.prototype.set=I1;function vr(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var C=s[l];this.set(C[0],C[1])}}function b1(){this.size=0,this.__data__={hash:new ui,map:new(Do||pr),string:new ui}}function w1(s){var l=_a(this,s).delete(s);return this.size-=l?1:0,l}function y1(s){return _a(this,s).get(s)}function L1(s){return _a(this,s).has(s)}function A1(s,l){var f=_a(this,s),C=f.size;return f.set(s,l),this.size+=f.size==C?0:1,this}vr.prototype.clear=b1,vr.prototype.delete=w1,vr.prototype.get=y1,vr.prototype.has=L1,vr.prototype.set=A1;function di(s){var l=-1,f=s==null?0:s.length;for(this.__data__=new vr;++l<f;)this.add(s[l])}function N1(s){return this.__data__.set(s,u),this}function S1(s){return this.__data__.has(s)}di.prototype.add=di.prototype.push=N1,di.prototype.has=S1;function Jn(s){var l=this.__data__=new pr(s);this.size=l.size}function x1(){this.__data__=new pr,this.size=0}function R1(s){var l=this.__data__,f=l.delete(s);return this.size=l.size,f}function T1(s){return this.__data__.get(s)}function D1(s){return this.__data__.has(s)}function k1(s,l){var f=this.__data__;if(f instanceof pr){var C=f.__data__;if(!Do||C.length<i-1)return C.push([s,l]),this.size=++f.size,this;f=this.__data__=new vr(C)}return f.set(s,l),this.size=f.size,this}Jn.prototype.clear=x1,Jn.prototype.delete=R1,Jn.prototype.get=T1,Jn.prototype.has=D1,Jn.prototype.set=k1;function x_(s,l){var f=Xe(s),C=!f&&pi(s),b=!f&&!C&&jr(s),S=!f&&!C&&!b&&Yi(s),G=f||C||b||S,B=G?Yl(s.length,zm):[],K=B.length;for(var oe in s)(l||mt.call(s,oe))&&!(G&&(oe=="length"||b&&(oe=="offset"||oe=="parent")||S&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||Or(oe,K)))&&B.push(oe);return B}function R_(s){var l=s.length;return l?s[lc(0,l-1)]:n}function G1(s,l){return fa(hn(s),_i(l,0,s.length))}function M1(s){return fa(hn(s))}function Ql(s,l,f){(f!==n&&!er(s[l],f)||f===n&&!(l in s))&&mr(s,l,f)}function Uo(s,l,f){var C=s[l];(!(mt.call(s,l)&&er(C,f))||f===n&&!(l in s))&&mr(s,l,f)}function ea(s,l){for(var f=s.length;f--;)if(er(s[f][0],l))return f;return-1}function U1(s,l,f,C){return Br(s,function(b,S,G){l(C,b,f(b),G)}),C}function T_(s,l){return s&&ar(l,zt(l),s)}function F1(s,l){return s&&ar(l,vn(l),s)}function mr(s,l,f){l=="__proto__"&&Ks?Ks(s,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):s[l]=f}function Jl(s,l){for(var f=-1,C=l.length,b=Q(C),S=s==null;++f<C;)b[f]=S?n:Dc(s,l[f]);return b}function _i(s,l,f){return s===s&&(f!==n&&(s=s<=f?s:f),l!==n&&(s=s>=l?s:l)),s}function Bn(s,l,f,C,b,S){var G,B=l&g,K=l&p,oe=l&m;if(f&&(G=b?f(s,C,b,S):f(s)),G!==n)return G;if(!Tt(s))return s;var le=Xe(s);if(le){if(G=L0(s),!B)return hn(s,G)}else{var _e=rn(s),ye=_e==Dt||_e==Te;if(jr(s))return nf(s,B);if(_e==Nt||_e==tn||ye&&!b){if(G=K||ye?{}:If(s),!B)return K?h0(s,F1(G,s)):g0(s,T_(G,s))}else{if(!wt[_e])return b?s:{};G=A0(s,_e,B)}}S||(S=new Jn);var Ge=S.get(s);if(Ge)return Ge;S.set(s,G),Zf(s)?s.forEach(function(He){G.add(Bn(He,l,f,He,s,S))}):Xf(s)&&s.forEach(function(He,rt){G.set(rt,Bn(He,l,f,rt,s,S))});var Pe=oe?K?Ec:mc:K?vn:zt,et=le?n:Pe(s);return $n(et||s,function(He,rt){et&&(rt=He,He=s[rt]),Uo(G,rt,Bn(He,l,f,rt,s,S))}),G}function $1(s){var l=zt(s);return function(f){return D_(f,s,l)}}function D_(s,l,f){var C=f.length;if(s==null)return!C;for(s=Ot(s);C--;){var b=f[C],S=l[b],G=s[b];if(G===n&&!(b in s)||!S(G))return!1}return!0}function k_(s,l,f){if(typeof s!="function")throw new Pn(a);return zo(function(){s.apply(n,f)},l)}function Fo(s,l,f,C){var b=-1,S=Us,G=!0,B=s.length,K=[],oe=l.length;if(!B)return K;f&&(l=xt(l,yn(f))),C?(S=$l,G=!1):l.length>=i&&(S=Ro,G=!1,l=new di(l));e:for(;++b<B;){var le=s[b],_e=f==null?le:f(le);if(le=C||le!==0?le:0,G&&_e===_e){for(var ye=oe;ye--;)if(l[ye]===_e)continue e;K.push(le)}else S(l,_e,C)||K.push(le)}return K}var Br=lf(sr),G_=lf(tc,!0);function P1(s,l){var f=!0;return Br(s,function(C,b,S){return f=!!l(C,b,S),f}),f}function ta(s,l,f){for(var C=-1,b=s.length;++C<b;){var S=s[C],G=l(S);if(G!=null&&(B===n?G===G&&!An(G):f(G,B)))var B=G,K=S}return K}function H1(s,l,f,C){var b=s.length;for(f=Je(f),f<0&&(f=-f>b?0:b+f),C=C===n||C>b?b:Je(C),C<0&&(C+=b),C=f>C?0:Jf(C);f<C;)s[f++]=l;return s}function M_(s,l){var f=[];return Br(s,function(C,b,S){l(C,b,S)&&f.push(C)}),f}function jt(s,l,f,C,b){var S=-1,G=s.length;for(f||(f=S0),b||(b=[]);++S<G;){var B=s[S];l>0&&f(B)?l>1?jt(B,l-1,f,C,b):$r(b,B):C||(b[b.length]=B)}return b}var ec=cf(),U_=cf(!0);function sr(s,l){return s&&ec(s,l,zt)}function tc(s,l){return s&&U_(s,l,zt)}function na(s,l){return Fr(l,function(f){return Ir(s[f])})}function fi(s,l){l=zr(l,s);for(var f=0,C=l.length;s!=null&&f<C;)s=s[lr(l[f++])];return f&&f==C?s:n}function F_(s,l,f){var C=l(s);return Xe(s)?C:$r(C,f(s))}function sn(s){return s==null?s===n?pv:Re:ci&&ci in Ot(s)?b0(s):M0(s)}function nc(s,l){return s>l}function B1(s,l){return s!=null&&mt.call(s,l)}function W1(s,l){return s!=null&&l in Ot(s)}function z1(s,l,f){return s>=nn(l,f)&&s<Pt(l,f)}function rc(s,l,f){for(var C=f?$l:Us,b=s[0].length,S=s.length,G=S,B=Q(S),K=1/0,oe=[];G--;){var le=s[G];G&&l&&(le=xt(le,yn(l))),K=nn(le.length,K),B[G]=!f&&(l||b>=120&&le.length>=120)?new di(G&&le):n}le=s[0];var _e=-1,ye=B[0];e:for(;++_e<b&&oe.length<K;){var Ge=le[_e],Pe=l?l(Ge):Ge;if(Ge=f||Ge!==0?Ge:0,!(ye?Ro(ye,Pe):C(oe,Pe,f))){for(G=S;--G;){var et=B[G];if(!(et?Ro(et,Pe):C(s[G],Pe,f)))continue e}ye&&ye.push(Pe),oe.push(Ge)}}return oe}function Y1(s,l,f,C){return sr(s,function(b,S,G){l(C,f(b),S,G)}),C}function $o(s,l,f){l=zr(l,s),s=Lf(s,l);var C=s==null?s:s[lr(zn(l))];return C==null?n:wn(C,s,f)}function $_(s){return kt(s)&&sn(s)==tn}function j1(s){return kt(s)&&sn(s)==xo}function V1(s){return kt(s)&&sn(s)==Un}function Po(s,l,f,C,b){return s===l?!0:s==null||l==null||!kt(s)&&!kt(l)?s!==s&&l!==l:K1(s,l,f,C,Po,b)}function K1(s,l,f,C,b,S){var G=Xe(s),B=Xe(l),K=G?hr:rn(s),oe=B?hr:rn(l);K=K==tn?Nt:K,oe=oe==tn?Nt:oe;var le=K==Nt,_e=oe==Nt,ye=K==oe;if(ye&&jr(s)){if(!jr(l))return!1;G=!0,le=!1}if(ye&&!le)return S||(S=new Jn),G||Yi(s)?Ef(s,l,f,C,b,S):O0(s,l,K,f,C,b,S);if(!(f&E)){var Ge=le&&mt.call(s,"__wrapped__"),Pe=_e&&mt.call(l,"__wrapped__");if(Ge||Pe){var et=Ge?s.value():s,He=Pe?l.value():l;return S||(S=new Jn),b(et,He,f,C,S)}}return ye?(S||(S=new Jn),I0(s,l,f,C,b,S)):!1}function X1(s){return kt(s)&&rn(s)==be}function ic(s,l,f,C){var b=f.length,S=b,G=!C;if(s==null)return!S;for(s=Ot(s);b--;){var B=f[b];if(G&&B[2]?B[1]!==s[B[0]]:!(B[0]in s))return!1}for(;++b<S;){B=f[b];var K=B[0],oe=s[K],le=B[1];if(G&&B[2]){if(oe===n&&!(K in s))return!1}else{var _e=new Jn;if(C)var ye=C(oe,le,K,s,l,_e);if(!(ye===n?Po(le,oe,E|O,C,_e):ye))return!1}}return!0}function P_(s){if(!Tt(s)||R0(s))return!1;var l=Ir(s)?Xm:$v;return l.test(hi(s))}function q1(s){return kt(s)&&sn(s)==ai}function Z1(s){return kt(s)&&rn(s)==Zn}function Q1(s){return kt(s)&&Ea(s.length)&&!!St[sn(s)]}function H_(s){return typeof s=="function"?s:s==null?mn:typeof s=="object"?Xe(s)?z_(s[0],s[1]):W_(s):ug(s)}function oc(s){if(!Wo(s))return t1(s);var l=[];for(var f in Ot(s))mt.call(s,f)&&f!="constructor"&&l.push(f);return l}function J1(s){if(!Tt(s))return G0(s);var l=Wo(s),f=[];for(var C in s)C=="constructor"&&(l||!mt.call(s,C))||f.push(C);return f}function sc(s,l){return s<l}function B_(s,l){var f=-1,C=pn(s)?Q(s.length):[];return Br(s,function(b,S,G){C[++f]=l(b,S,G)}),C}function W_(s){var l=Oc(s);return l.length==1&&l[0][2]?wf(l[0][0],l[0][1]):function(f){return f===s||ic(f,s,l)}}function z_(s,l){return bc(s)&&bf(l)?wf(lr(s),l):function(f){var C=Dc(f,s);return C===n&&C===l?kc(f,s):Po(l,C,E|O)}}function ra(s,l,f,C,b){s!==l&&ec(l,function(S,G){if(b||(b=new Jn),Tt(S))e0(s,l,G,f,ra,C,b);else{var B=C?C(yc(s,G),S,G+"",s,l,b):n;B===n&&(B=S),Ql(s,G,B)}},vn)}function e0(s,l,f,C,b,S,G){var B=yc(s,f),K=yc(l,f),oe=G.get(K);if(oe){Ql(s,f,oe);return}var le=S?S(B,K,f+"",s,l,G):n,_e=le===n;if(_e){var ye=Xe(K),Ge=!ye&&jr(K),Pe=!ye&&!Ge&&Yi(K);le=K,ye||Ge||Pe?Xe(B)?le=B:Gt(B)?le=hn(B):Ge?(_e=!1,le=nf(K,!0)):Pe?(_e=!1,le=rf(K,!0)):le=[]:Yo(K)||pi(K)?(le=B,pi(B)?le=eg(B):(!Tt(B)||Ir(B))&&(le=If(K))):_e=!1}_e&&(G.set(K,le),b(le,K,C,S,G),G.delete(K)),Ql(s,f,le)}function Y_(s,l){var f=s.length;if(f)return l+=l<0?f:0,Or(l,f)?s[l]:n}function j_(s,l,f){l.length?l=xt(l,function(S){return Xe(S)?function(G){return fi(G,S.length===1?S[0]:S)}:S}):l=[mn];var C=-1;l=xt(l,yn($e()));var b=B_(s,function(S,G,B){var K=xt(l,function(oe){return oe(S)});return{criteria:K,index:++C,value:S}});return Am(b,function(S,G){return f0(S,G,f)})}function t0(s,l){return V_(s,l,function(f,C){return kc(s,C)})}function V_(s,l,f){for(var C=-1,b=l.length,S={};++C<b;){var G=l[C],B=fi(s,G);f(B,G)&&Ho(S,zr(G,s),B)}return S}function n0(s){return function(l){return fi(l,s)}}function ac(s,l,f,C){var b=C?Lm:ki,S=-1,G=l.length,B=s;for(s===l&&(l=hn(l)),f&&(B=xt(s,yn(f)));++S<G;)for(var K=0,oe=l[S],le=f?f(oe):oe;(K=b(B,le,K,C))>-1;)B!==s&&Vs.call(B,K,1),Vs.call(s,K,1);return s}function K_(s,l){for(var f=s?l.length:0,C=f-1;f--;){var b=l[f];if(f==C||b!==S){var S=b;Or(b)?Vs.call(s,b,1):dc(s,b)}}return s}function lc(s,l){return s+qs(N_()*(l-s+1))}function r0(s,l,f,C){for(var b=-1,S=Pt(Xs((l-s)/(f||1)),0),G=Q(S);S--;)G[C?S:++b]=s,s+=f;return G}function cc(s,l){var f="";if(!s||l<1||l>Ne)return f;do l%2&&(f+=s),l=qs(l/2),l&&(s+=s);while(l);return f}function tt(s,l){return Lc(yf(s,l,mn),s+"")}function i0(s){return R_(ji(s))}function o0(s,l){var f=ji(s);return fa(f,_i(l,0,f.length))}function Ho(s,l,f,C){if(!Tt(s))return s;l=zr(l,s);for(var b=-1,S=l.length,G=S-1,B=s;B!=null&&++b<S;){var K=lr(l[b]),oe=f;if(K==="__proto__"||K==="constructor"||K==="prototype")return s;if(b!=G){var le=B[K];oe=C?C(le,K,B):n,oe===n&&(oe=Tt(le)?le:Or(l[b+1])?[]:{})}Uo(B,K,oe),B=B[K]}return s}var X_=Zs?function(s,l){return Zs.set(s,l),s}:mn,s0=Ks?function(s,l){return Ks(s,"toString",{configurable:!0,enumerable:!1,value:Mc(l),writable:!0})}:mn;function a0(s){return fa(ji(s))}function Wn(s,l,f){var C=-1,b=s.length;l<0&&(l=-l>b?0:b+l),f=f>b?b:f,f<0&&(f+=b),b=l>f?0:f-l>>>0,l>>>=0;for(var S=Q(b);++C<b;)S[C]=s[C+l];return S}function l0(s,l){var f;return Br(s,function(C,b,S){return f=l(C,b,S),!f}),!!f}function ia(s,l,f){var C=0,b=s==null?C:s.length;if(typeof l=="number"&&l===l&&b<=bn){for(;C<b;){var S=C+b>>>1,G=s[S];G!==null&&!An(G)&&(f?G<=l:G<l)?C=S+1:b=S}return b}return uc(s,l,mn,f)}function uc(s,l,f,C){var b=0,S=s==null?0:s.length;if(S===0)return 0;l=f(l);for(var G=l!==l,B=l===null,K=An(l),oe=l===n;b<S;){var le=qs((b+S)/2),_e=f(s[le]),ye=_e!==n,Ge=_e===null,Pe=_e===_e,et=An(_e);if(G)var He=C||Pe;else oe?He=Pe&&(C||ye):B?He=Pe&&ye&&(C||!Ge):K?He=Pe&&ye&&!Ge&&(C||!et):Ge||et?He=!1:He=C?_e<=l:_e<l;He?b=le+1:S=le}return nn(S,gn)}function q_(s,l){for(var f=-1,C=s.length,b=0,S=[];++f<C;){var G=s[f],B=l?l(G):G;if(!f||!er(B,K)){var K=B;S[b++]=G===0?0:G}}return S}function Z_(s){return typeof s=="number"?s:An(s)?lt:+s}function Ln(s){if(typeof s=="string")return s;if(Xe(s))return xt(s,Ln)+"";if(An(s))return S_?S_.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Wr(s,l,f){var C=-1,b=Us,S=s.length,G=!0,B=[],K=B;if(f)G=!1,b=$l;else if(S>=i){var oe=l?null:E0(s);if(oe)return $s(oe);G=!1,b=Ro,K=new di}else K=l?[]:B;e:for(;++C<S;){var le=s[C],_e=l?l(le):le;if(le=f||le!==0?le:0,G&&_e===_e){for(var ye=K.length;ye--;)if(K[ye]===_e)continue e;l&&K.push(_e),B.push(le)}else b(K,_e,f)||(K!==B&&K.push(_e),B.push(le))}return B}function dc(s,l){return l=zr(l,s),s=Lf(s,l),s==null||delete s[lr(zn(l))]}function Q_(s,l,f,C){return Ho(s,l,f(fi(s,l)),C)}function oa(s,l,f,C){for(var b=s.length,S=C?b:-1;(C?S--:++S<b)&&l(s[S],S,s););return f?Wn(s,C?0:S,C?S+1:b):Wn(s,C?S+1:0,C?b:S)}function J_(s,l){var f=s;return f instanceof ot&&(f=f.value()),Pl(l,function(C,b){return b.func.apply(b.thisArg,$r([C],b.args))},f)}function _c(s,l,f){var C=s.length;if(C<2)return C?Wr(s[0]):[];for(var b=-1,S=Q(C);++b<C;)for(var G=s[b],B=-1;++B<C;)B!=b&&(S[b]=Fo(S[b]||G,s[B],l,f));return Wr(jt(S,1),l,f)}function ef(s,l,f){for(var C=-1,b=s.length,S=l.length,G={};++C<b;){var B=C<S?l[C]:n;f(G,s[C],B)}return G}function fc(s){return Gt(s)?s:[]}function gc(s){return typeof s=="function"?s:mn}function zr(s,l){return Xe(s)?s:bc(s,l)?[s]:xf(pt(s))}var c0=tt;function Yr(s,l,f){var C=s.length;return f=f===n?C:f,!l&&f>=C?s:Wn(s,l,f)}var tf=qm||function(s){return Yt.clearTimeout(s)};function nf(s,l){if(l)return s.slice();var f=s.length,C=b_?b_(f):new s.constructor(f);return s.copy(C),C}function hc(s){var l=new s.constructor(s.byteLength);return new Ys(l).set(new Ys(s)),l}function u0(s,l){var f=l?hc(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.byteLength)}function d0(s){var l=new s.constructor(s.source,$d.exec(s));return l.lastIndex=s.lastIndex,l}function _0(s){return Mo?Ot(Mo.call(s)):{}}function rf(s,l){var f=l?hc(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.length)}function of(s,l){if(s!==l){var f=s!==n,C=s===null,b=s===s,S=An(s),G=l!==n,B=l===null,K=l===l,oe=An(l);if(!B&&!oe&&!S&&s>l||S&&G&&K&&!B&&!oe||C&&G&&K||!f&&K||!b)return 1;if(!C&&!S&&!oe&&s<l||oe&&f&&b&&!C&&!S||B&&f&&b||!G&&b||!K)return-1}return 0}function f0(s,l,f){for(var C=-1,b=s.criteria,S=l.criteria,G=b.length,B=f.length;++C<G;){var K=of(b[C],S[C]);if(K){if(C>=B)return K;var oe=f[C];return K*(oe=="desc"?-1:1)}}return s.index-l.index}function sf(s,l,f,C){for(var b=-1,S=s.length,G=f.length,B=-1,K=l.length,oe=Pt(S-G,0),le=Q(K+oe),_e=!C;++B<K;)le[B]=l[B];for(;++b<G;)(_e||b<S)&&(le[f[b]]=s[b]);for(;oe--;)le[B++]=s[b++];return le}function af(s,l,f,C){for(var b=-1,S=s.length,G=-1,B=f.length,K=-1,oe=l.length,le=Pt(S-B,0),_e=Q(le+oe),ye=!C;++b<le;)_e[b]=s[b];for(var Ge=b;++K<oe;)_e[Ge+K]=l[K];for(;++G<B;)(ye||b<S)&&(_e[Ge+f[G]]=s[b++]);return _e}function hn(s,l){var f=-1,C=s.length;for(l||(l=Q(C));++f<C;)l[f]=s[f];return l}function ar(s,l,f,C){var b=!f;f||(f={});for(var S=-1,G=l.length;++S<G;){var B=l[S],K=C?C(f[B],s[B],B,f,s):n;K===n&&(K=s[B]),b?mr(f,B,K):Uo(f,B,K)}return f}function g0(s,l){return ar(s,Ic(s),l)}function h0(s,l){return ar(s,Cf(s),l)}function sa(s,l){return function(f,C){var b=Xe(f)?Cm:U1,S=l?l():{};return b(f,s,$e(C,2),S)}}function Bi(s){return tt(function(l,f){var C=-1,b=f.length,S=b>1?f[b-1]:n,G=b>2?f[2]:n;for(S=s.length>3&&typeof S=="function"?(b--,S):n,G&&an(f[0],f[1],G)&&(S=b<3?n:S,b=1),l=Ot(l);++C<b;){var B=f[C];B&&s(l,B,C,S)}return l})}function lf(s,l){return function(f,C){if(f==null)return f;if(!pn(f))return s(f,C);for(var b=f.length,S=l?b:-1,G=Ot(f);(l?S--:++S<b)&&C(G[S],S,G)!==!1;);return f}}function cf(s){return function(l,f,C){for(var b=-1,S=Ot(l),G=C(l),B=G.length;B--;){var K=G[s?B:++b];if(f(S[K],K,S)===!1)break}return l}}function p0(s,l,f){var C=l&I,b=Bo(s);function S(){var G=this&&this!==Yt&&this instanceof S?b:s;return G.apply(C?f:this,arguments)}return S}function uf(s){return function(l){l=pt(l);var f=Gi(l)?Qn(l):n,C=f?f[0]:l.charAt(0),b=f?Yr(f,1).join(""):l.slice(1);return C[s]()+b}}function Wi(s){return function(l){return Pl(lg(ag(l).replace(sm,"")),s,"")}}function Bo(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=Hi(s.prototype),C=s.apply(f,l);return Tt(C)?C:f}}function v0(s,l,f){var C=Bo(s);function b(){for(var S=arguments.length,G=Q(S),B=S,K=zi(b);B--;)G[B]=arguments[B];var oe=S<3&&G[0]!==K&&G[S-1]!==K?[]:Pr(G,K);if(S-=oe.length,S<f)return hf(s,l,aa,b.placeholder,n,G,oe,n,n,f-S);var le=this&&this!==Yt&&this instanceof b?C:s;return wn(le,this,G)}return b}function df(s){return function(l,f,C){var b=Ot(l);if(!pn(l)){var S=$e(f,3);l=zt(l),f=function(B){return S(b[B],B,b)}}var G=s(l,f,C);return G>-1?b[S?l[G]:G]:n}}function _f(s){return Cr(function(l){var f=l.length,C=f,b=Hn.prototype.thru;for(s&&l.reverse();C--;){var S=l[C];if(typeof S!="function")throw new Pn(a);if(b&&!G&&da(S)=="wrapper")var G=new Hn([],!0)}for(C=G?C:f;++C<f;){S=l[C];var B=da(S),K=B=="wrapper"?Cc(S):n;K&&wc(K[0])&&K[1]==(H|k|z|q)&&!K[4].length&&K[9]==1?G=G[da(K[0])].apply(G,K[3]):G=S.length==1&&wc(S)?G[B]():G.thru(S)}return function(){var oe=arguments,le=oe[0];if(G&&oe.length==1&&Xe(le))return G.plant(le).value();for(var _e=0,ye=f?l[_e].apply(this,oe):le;++_e<f;)ye=l[_e].call(this,ye);return ye}})}function aa(s,l,f,C,b,S,G,B,K,oe){var le=l&H,_e=l&I,ye=l&w,Ge=l&(k|U),Pe=l&ee,et=ye?n:Bo(s);function He(){for(var rt=arguments.length,ct=Q(rt),Nn=rt;Nn--;)ct[Nn]=arguments[Nn];if(Ge)var ln=zi(He),Sn=Sm(ct,ln);if(C&&(ct=sf(ct,C,b,Ge)),S&&(ct=af(ct,S,G,Ge)),rt-=Sn,Ge&&rt<oe){var Mt=Pr(ct,ln);return hf(s,l,aa,He.placeholder,f,ct,Mt,B,K,oe-rt)}var tr=_e?f:this,wr=ye?tr[s]:s;return rt=ct.length,B?ct=U0(ct,B):Pe&&rt>1&&ct.reverse(),le&&K<rt&&(ct.length=K),this&&this!==Yt&&this instanceof He&&(wr=et||Bo(wr)),wr.apply(tr,ct)}return He}function ff(s,l){return function(f,C){return Y1(f,s,l(C),{})}}function la(s,l){return function(f,C){var b;if(f===n&&C===n)return l;if(f!==n&&(b=f),C!==n){if(b===n)return C;typeof f=="string"||typeof C=="string"?(f=Ln(f),C=Ln(C)):(f=Z_(f),C=Z_(C)),b=s(f,C)}return b}}function pc(s){return Cr(function(l){return l=xt(l,yn($e())),tt(function(f){var C=this;return s(l,function(b){return wn(b,C,f)})})})}function ca(s,l){l=l===n?" ":Ln(l);var f=l.length;if(f<2)return f?cc(l,s):l;var C=cc(l,Xs(s/Mi(l)));return Gi(l)?Yr(Qn(C),0,s).join(""):C.slice(0,s)}function m0(s,l,f,C){var b=l&I,S=Bo(s);function G(){for(var B=-1,K=arguments.length,oe=-1,le=C.length,_e=Q(le+K),ye=this&&this!==Yt&&this instanceof G?S:s;++oe<le;)_e[oe]=C[oe];for(;K--;)_e[oe++]=arguments[++B];return wn(ye,b?f:this,_e)}return G}function gf(s){return function(l,f,C){return C&&typeof C!="number"&&an(l,f,C)&&(f=C=n),l=br(l),f===n?(f=l,l=0):f=br(f),C=C===n?l<f?1:-1:br(C),r0(l,f,C,s)}}function ua(s){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=Yn(l),f=Yn(f)),s(l,f)}}function hf(s,l,f,C,b,S,G,B,K,oe){var le=l&k,_e=le?G:n,ye=le?n:G,Ge=le?S:n,Pe=le?n:S;l|=le?z:j,l&=~(le?j:z),l&x||(l&=-4);var et=[s,l,b,Ge,_e,Pe,ye,B,K,oe],He=f.apply(n,et);return wc(s)&&Af(He,et),He.placeholder=C,Nf(He,s,l)}function vc(s){var l=$t[s];return function(f,C){if(f=Yn(f),C=C==null?0:nn(Je(C),292),C&&A_(f)){var b=(pt(f)+"e").split("e"),S=l(b[0]+"e"+(+b[1]+C));return b=(pt(S)+"e").split("e"),+(b[0]+"e"+(+b[1]-C))}return l(f)}}var E0=$i&&1/$s(new $i([,-0]))[1]==Qe?function(s){return new $i(s)}:$c;function pf(s){return function(l){var f=rn(l);return f==be?Vl(l):f==Zn?Mm(l):Nm(l,s(l))}}function Er(s,l,f,C,b,S,G,B){var K=l&w;if(!K&&typeof s!="function")throw new Pn(a);var oe=C?C.length:0;if(oe||(l&=-97,C=b=n),G=G===n?G:Pt(Je(G),0),B=B===n?B:Je(B),oe-=b?b.length:0,l&j){var le=C,_e=b;C=b=n}var ye=K?n:Cc(s),Ge=[s,l,f,C,b,le,_e,S,G,B];if(ye&&k0(Ge,ye),s=Ge[0],l=Ge[1],f=Ge[2],C=Ge[3],b=Ge[4],B=Ge[9]=Ge[9]===n?K?0:s.length:Pt(Ge[9]-oe,0),!B&&l&(k|U)&&(l&=-25),!l||l==I)var Pe=p0(s,l,f);else l==k||l==U?Pe=v0(s,l,B):(l==z||l==(I|z))&&!b.length?Pe=m0(s,l,f,C):Pe=aa.apply(n,Ge);var et=ye?X_:Af;return Nf(et(Pe,Ge),s,l)}function vf(s,l,f,C){return s===n||er(s,Fi[f])&&!mt.call(C,f)?l:s}function mf(s,l,f,C,b,S){return Tt(s)&&Tt(l)&&(S.set(l,s),ra(s,l,n,mf,S),S.delete(l)),s}function C0(s){return Yo(s)?n:s}function Ef(s,l,f,C,b,S){var G=f&E,B=s.length,K=l.length;if(B!=K&&!(G&&K>B))return!1;var oe=S.get(s),le=S.get(l);if(oe&&le)return oe==l&&le==s;var _e=-1,ye=!0,Ge=f&O?new di:n;for(S.set(s,l),S.set(l,s);++_e<B;){var Pe=s[_e],et=l[_e];if(C)var He=G?C(et,Pe,_e,l,s,S):C(Pe,et,_e,s,l,S);if(He!==n){if(He)continue;ye=!1;break}if(Ge){if(!Hl(l,function(rt,ct){if(!Ro(Ge,ct)&&(Pe===rt||b(Pe,rt,f,C,S)))return Ge.push(ct)})){ye=!1;break}}else if(!(Pe===et||b(Pe,et,f,C,S))){ye=!1;break}}return S.delete(s),S.delete(l),ye}function O0(s,l,f,C,b,S,G){switch(f){case Ti:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case xo:return!(s.byteLength!=l.byteLength||!S(new Ys(s),new Ys(l)));case or:case Un:case ke:return er(+s,+l);case Ur:return s.name==l.name&&s.message==l.message;case ai:case No:return s==l+"";case be:var B=Vl;case Zn:var K=C&E;if(B||(B=$s),s.size!=l.size&&!K)return!1;var oe=G.get(s);if(oe)return oe==l;C|=O,G.set(s,l);var le=Ef(B(s),B(l),C,b,S,G);return G.delete(s),le;case Ds:if(Mo)return Mo.call(s)==Mo.call(l)}return!1}function I0(s,l,f,C,b,S){var G=f&E,B=mc(s),K=B.length,oe=mc(l),le=oe.length;if(K!=le&&!G)return!1;for(var _e=K;_e--;){var ye=B[_e];if(!(G?ye in l:mt.call(l,ye)))return!1}var Ge=S.get(s),Pe=S.get(l);if(Ge&&Pe)return Ge==l&&Pe==s;var et=!0;S.set(s,l),S.set(l,s);for(var He=G;++_e<K;){ye=B[_e];var rt=s[ye],ct=l[ye];if(C)var Nn=G?C(ct,rt,ye,l,s,S):C(rt,ct,ye,s,l,S);if(!(Nn===n?rt===ct||b(rt,ct,f,C,S):Nn)){et=!1;break}He||(He=ye=="constructor")}if(et&&!He){var ln=s.constructor,Sn=l.constructor;ln!=Sn&&"constructor"in s&&"constructor"in l&&!(typeof ln=="function"&&ln instanceof ln&&typeof Sn=="function"&&Sn instanceof Sn)&&(et=!1)}return S.delete(s),S.delete(l),et}function Cr(s){return Lc(yf(s,n,kf),s+"")}function mc(s){return F_(s,zt,Ic)}function Ec(s){return F_(s,vn,Cf)}var Cc=Zs?function(s){return Zs.get(s)}:$c;function da(s){for(var l=s.name+"",f=Pi[l],C=mt.call(Pi,l)?f.length:0;C--;){var b=f[C],S=b.func;if(S==null||S==s)return b.name}return l}function zi(s){var l=mt.call(y,"placeholder")?y:s;return l.placeholder}function $e(){var s=y.iteratee||Uc;return s=s===Uc?H_:s,arguments.length?s(arguments[0],arguments[1]):s}function _a(s,l){var f=s.__data__;return x0(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Oc(s){for(var l=zt(s),f=l.length;f--;){var C=l[f],b=s[C];l[f]=[C,b,bf(b)]}return l}function gi(s,l){var f=Dm(s,l);return P_(f)?f:n}function b0(s){var l=mt.call(s,ci),f=s[ci];try{s[ci]=n;var C=!0}catch{}var b=Ws.call(s);return C&&(l?s[ci]=f:delete s[ci]),b}var Ic=Xl?function(s){return s==null?[]:(s=Ot(s),Fr(Xl(s),function(l){return y_.call(s,l)}))}:Pc,Cf=Xl?function(s){for(var l=[];s;)$r(l,Ic(s)),s=js(s);return l}:Pc,rn=sn;(ql&&rn(new ql(new ArrayBuffer(1)))!=Ti||Do&&rn(new Do)!=be||Zl&&rn(Zl.resolve())!=Ts||$i&&rn(new $i)!=Zn||ko&&rn(new ko)!=So)&&(rn=function(s){var l=sn(s),f=l==Nt?s.constructor:n,C=f?hi(f):"";if(C)switch(C){case o1:return Ti;case s1:return be;case a1:return Ts;case l1:return Zn;case c1:return So}return l});function w0(s,l,f){for(var C=-1,b=f.length;++C<b;){var S=f[C],G=S.size;switch(S.type){case"drop":s+=G;break;case"dropRight":l-=G;break;case"take":l=nn(l,s+G);break;case"takeRight":s=Pt(s,l-G);break}}return{start:s,end:l}}function y0(s){var l=s.match(Rv);return l?l[1].split(Tv):[]}function Of(s,l,f){l=zr(l,s);for(var C=-1,b=l.length,S=!1;++C<b;){var G=lr(l[C]);if(!(S=s!=null&&f(s,G)))break;s=s[G]}return S||++C!=b?S:(b=s==null?0:s.length,!!b&&Ea(b)&&Or(G,b)&&(Xe(s)||pi(s)))}function L0(s){var l=s.length,f=new s.constructor(l);return l&&typeof s[0]=="string"&&mt.call(s,"index")&&(f.index=s.index,f.input=s.input),f}function If(s){return typeof s.constructor=="function"&&!Wo(s)?Hi(js(s)):{}}function A0(s,l,f){var C=s.constructor;switch(l){case xo:return hc(s);case or:case Un:return new C(+s);case Ti:return u0(s,f);case Ol:case Il:case bl:case wl:case yl:case Ll:case Al:case Nl:case Sl:return rf(s,f);case be:return new C;case ke:case No:return new C(s);case ai:return d0(s);case Zn:return new C;case Ds:return _0(s)}}function N0(s,l){var f=l.length;if(!f)return s;var C=f-1;return l[C]=(f>1?"& ":"")+l[C],l=l.join(f>2?", ":" "),s.replace(xv,`{
/* [wrapped with `+l+`] */
`)}function S0(s){return Xe(s)||pi(s)||!!(L_&&s&&s[L_])}function Or(s,l){var f=typeof s;return l=l??Ne,!!l&&(f=="number"||f!="symbol"&&Hv.test(s))&&s>-1&&s%1==0&&s<l}function an(s,l,f){if(!Tt(f))return!1;var C=typeof l;return(C=="number"?pn(f)&&Or(l,f.length):C=="string"&&l in f)?er(f[l],s):!1}function bc(s,l){if(Xe(s))return!1;var f=typeof s;return f=="number"||f=="symbol"||f=="boolean"||s==null||An(s)?!0:Lv.test(s)||!yv.test(s)||l!=null&&s in Ot(l)}function x0(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function wc(s){var l=da(s),f=y[l];if(typeof f!="function"||!(l in ot.prototype))return!1;if(s===f)return!0;var C=Cc(f);return!!C&&s===C[0]}function R0(s){return!!I_&&I_ in s}var T0=Hs?Ir:Hc;function Wo(s){var l=s&&s.constructor,f=typeof l=="function"&&l.prototype||Fi;return s===f}function bf(s){return s===s&&!Tt(s)}function wf(s,l){return function(f){return f==null?!1:f[s]===l&&(l!==n||s in Ot(f))}}function D0(s){var l=va(s,function(C){return f.size===_&&f.clear(),C}),f=l.cache;return l}function k0(s,l){var f=s[1],C=l[1],b=f|C,S=b<(I|w|H),G=C==H&&f==k||C==H&&f==q&&s[7].length<=l[8]||C==(H|q)&&l[7].length<=l[8]&&f==k;if(!(S||G))return s;C&I&&(s[2]=l[2],b|=f&I?0:x);var B=l[3];if(B){var K=s[3];s[3]=K?sf(K,B,l[4]):B,s[4]=K?Pr(s[3],v):l[4]}return B=l[5],B&&(K=s[5],s[5]=K?af(K,B,l[6]):B,s[6]=K?Pr(s[5],v):l[6]),B=l[7],B&&(s[7]=B),C&H&&(s[8]=s[8]==null?l[8]:nn(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=b,s}function G0(s){var l=[];if(s!=null)for(var f in Ot(s))l.push(f);return l}function M0(s){return Ws.call(s)}function yf(s,l,f){return l=Pt(l===n?s.length-1:l,0),function(){for(var C=arguments,b=-1,S=Pt(C.length-l,0),G=Q(S);++b<S;)G[b]=C[l+b];b=-1;for(var B=Q(l+1);++b<l;)B[b]=C[b];return B[l]=f(G),wn(s,this,B)}}function Lf(s,l){return l.length<2?s:fi(s,Wn(l,0,-1))}function U0(s,l){for(var f=s.length,C=nn(l.length,f),b=hn(s);C--;){var S=l[C];s[C]=Or(S,f)?b[S]:n}return s}function yc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var Af=Sf(X_),zo=Qm||function(s,l){return Yt.setTimeout(s,l)},Lc=Sf(s0);function Nf(s,l,f){var C=l+"";return Lc(s,N0(C,F0(y0(C),f)))}function Sf(s){var l=0,f=0;return function(){var C=n1(),b=Ee-(C-f);if(f=C,b>0){if(++l>=re)return arguments[0]}else l=0;return s.apply(n,arguments)}}function fa(s,l){var f=-1,C=s.length,b=C-1;for(l=l===n?C:l;++f<l;){var S=lc(f,b),G=s[S];s[S]=s[f],s[f]=G}return s.length=l,s}var xf=D0(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(Av,function(f,C,b,S){l.push(b?S.replace(Gv,"$1"):C||f)}),l});function lr(s){if(typeof s=="string"||An(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function hi(s){if(s!=null){try{return Bs.call(s)}catch{}try{return s+""}catch{}}return""}function F0(s,l){return $n(Mr,function(f){var C="_."+f[0];l&f[1]&&!Us(s,C)&&s.push(C)}),s.sort()}function Rf(s){if(s instanceof ot)return s.clone();var l=new Hn(s.__wrapped__,s.__chain__);return l.__actions__=hn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function $0(s,l,f){(f?an(s,l,f):l===n)?l=1:l=Pt(Je(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var b=0,S=0,G=Q(Xs(C/l));b<C;)G[S++]=Wn(s,b,b+=l);return G}function P0(s){for(var l=-1,f=s==null?0:s.length,C=0,b=[];++l<f;){var S=s[l];S&&(b[C++]=S)}return b}function H0(){var s=arguments.length;if(!s)return[];for(var l=Q(s-1),f=arguments[0],C=s;C--;)l[C-1]=arguments[C];return $r(Xe(f)?hn(f):[f],jt(l,1))}var B0=tt(function(s,l){return Gt(s)?Fo(s,jt(l,1,Gt,!0)):[]}),W0=tt(function(s,l){var f=zn(l);return Gt(f)&&(f=n),Gt(s)?Fo(s,jt(l,1,Gt,!0),$e(f,2)):[]}),z0=tt(function(s,l){var f=zn(l);return Gt(f)&&(f=n),Gt(s)?Fo(s,jt(l,1,Gt,!0),n,f):[]});function Y0(s,l,f){var C=s==null?0:s.length;return C?(l=f||l===n?1:Je(l),Wn(s,l<0?0:l,C)):[]}function j0(s,l,f){var C=s==null?0:s.length;return C?(l=f||l===n?1:Je(l),l=C-l,Wn(s,0,l<0?0:l)):[]}function V0(s,l){return s&&s.length?oa(s,$e(l,3),!0,!0):[]}function K0(s,l){return s&&s.length?oa(s,$e(l,3),!0):[]}function X0(s,l,f,C){var b=s==null?0:s.length;return b?(f&&typeof f!="number"&&an(s,l,f)&&(f=0,C=b),H1(s,l,f,C)):[]}function Tf(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var b=f==null?0:Je(f);return b<0&&(b=Pt(C+b,0)),Fs(s,$e(l,3),b)}function Df(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var b=C-1;return f!==n&&(b=Je(f),b=f<0?Pt(C+b,0):nn(b,C-1)),Fs(s,$e(l,3),b,!0)}function kf(s){var l=s==null?0:s.length;return l?jt(s,1):[]}function q0(s){var l=s==null?0:s.length;return l?jt(s,Qe):[]}function Z0(s,l){var f=s==null?0:s.length;return f?(l=l===n?1:Je(l),jt(s,l)):[]}function Q0(s){for(var l=-1,f=s==null?0:s.length,C={};++l<f;){var b=s[l];C[b[0]]=b[1]}return C}function Gf(s){return s&&s.length?s[0]:n}function J0(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var b=f==null?0:Je(f);return b<0&&(b=Pt(C+b,0)),ki(s,l,b)}function eE(s){var l=s==null?0:s.length;return l?Wn(s,0,-1):[]}var tE=tt(function(s){var l=xt(s,fc);return l.length&&l[0]===s[0]?rc(l):[]}),nE=tt(function(s){var l=zn(s),f=xt(s,fc);return l===zn(f)?l=n:f.pop(),f.length&&f[0]===s[0]?rc(f,$e(l,2)):[]}),rE=tt(function(s){var l=zn(s),f=xt(s,fc);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===s[0]?rc(f,n,l):[]});function iE(s,l){return s==null?"":e1.call(s,l)}function zn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function oE(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var b=C;return f!==n&&(b=Je(f),b=b<0?Pt(C+b,0):nn(b,C-1)),l===l?Fm(s,l,b):Fs(s,g_,b,!0)}function sE(s,l){return s&&s.length?Y_(s,Je(l)):n}var aE=tt(Mf);function Mf(s,l){return s&&s.length&&l&&l.length?ac(s,l):s}function lE(s,l,f){return s&&s.length&&l&&l.length?ac(s,l,$e(f,2)):s}function cE(s,l,f){return s&&s.length&&l&&l.length?ac(s,l,n,f):s}var uE=Cr(function(s,l){var f=s==null?0:s.length,C=Jl(s,l);return K_(s,xt(l,function(b){return Or(b,f)?+b:b}).sort(of)),C});function dE(s,l){var f=[];if(!(s&&s.length))return f;var C=-1,b=[],S=s.length;for(l=$e(l,3);++C<S;){var G=s[C];l(G,C,s)&&(f.push(G),b.push(C))}return K_(s,b),f}function Ac(s){return s==null?s:i1.call(s)}function _E(s,l,f){var C=s==null?0:s.length;return C?(f&&typeof f!="number"&&an(s,l,f)?(l=0,f=C):(l=l==null?0:Je(l),f=f===n?C:Je(f)),Wn(s,l,f)):[]}function fE(s,l){return ia(s,l)}function gE(s,l,f){return uc(s,l,$e(f,2))}function hE(s,l){var f=s==null?0:s.length;if(f){var C=ia(s,l);if(C<f&&er(s[C],l))return C}return-1}function pE(s,l){return ia(s,l,!0)}function vE(s,l,f){return uc(s,l,$e(f,2),!0)}function mE(s,l){var f=s==null?0:s.length;if(f){var C=ia(s,l,!0)-1;if(er(s[C],l))return C}return-1}function EE(s){return s&&s.length?q_(s):[]}function CE(s,l){return s&&s.length?q_(s,$e(l,2)):[]}function OE(s){var l=s==null?0:s.length;return l?Wn(s,1,l):[]}function IE(s,l,f){return s&&s.length?(l=f||l===n?1:Je(l),Wn(s,0,l<0?0:l)):[]}function bE(s,l,f){var C=s==null?0:s.length;return C?(l=f||l===n?1:Je(l),l=C-l,Wn(s,l<0?0:l,C)):[]}function wE(s,l){return s&&s.length?oa(s,$e(l,3),!1,!0):[]}function yE(s,l){return s&&s.length?oa(s,$e(l,3)):[]}var LE=tt(function(s){return Wr(jt(s,1,Gt,!0))}),AE=tt(function(s){var l=zn(s);return Gt(l)&&(l=n),Wr(jt(s,1,Gt,!0),$e(l,2))}),NE=tt(function(s){var l=zn(s);return l=typeof l=="function"?l:n,Wr(jt(s,1,Gt,!0),n,l)});function SE(s){return s&&s.length?Wr(s):[]}function xE(s,l){return s&&s.length?Wr(s,$e(l,2)):[]}function RE(s,l){return l=typeof l=="function"?l:n,s&&s.length?Wr(s,n,l):[]}function Nc(s){if(!(s&&s.length))return[];var l=0;return s=Fr(s,function(f){if(Gt(f))return l=Pt(f.length,l),!0}),Yl(l,function(f){return xt(s,Bl(f))})}function Uf(s,l){if(!(s&&s.length))return[];var f=Nc(s);return l==null?f:xt(f,function(C){return wn(l,n,C)})}var TE=tt(function(s,l){return Gt(s)?Fo(s,l):[]}),DE=tt(function(s){return _c(Fr(s,Gt))}),kE=tt(function(s){var l=zn(s);return Gt(l)&&(l=n),_c(Fr(s,Gt),$e(l,2))}),GE=tt(function(s){var l=zn(s);return l=typeof l=="function"?l:n,_c(Fr(s,Gt),n,l)}),ME=tt(Nc);function UE(s,l){return ef(s||[],l||[],Uo)}function FE(s,l){return ef(s||[],l||[],Ho)}var $E=tt(function(s){var l=s.length,f=l>1?s[l-1]:n;return f=typeof f=="function"?(s.pop(),f):n,Uf(s,f)});function Ff(s){var l=y(s);return l.__chain__=!0,l}function PE(s,l){return l(s),s}function ga(s,l){return l(s)}var HE=Cr(function(s){var l=s.length,f=l?s[0]:0,C=this.__wrapped__,b=function(S){return Jl(S,s)};return l>1||this.__actions__.length||!(C instanceof ot)||!Or(f)?this.thru(b):(C=C.slice(f,+f+(l?1:0)),C.__actions__.push({func:ga,args:[b],thisArg:n}),new Hn(C,this.__chain__).thru(function(S){return l&&!S.length&&S.push(n),S}))});function BE(){return Ff(this)}function WE(){return new Hn(this.value(),this.__chain__)}function zE(){this.__values__===n&&(this.__values__=Qf(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function YE(){return this}function jE(s){for(var l,f=this;f instanceof Js;){var C=Rf(f);C.__index__=0,C.__values__=n,l?b.__wrapped__=C:l=C;var b=C;f=f.__wrapped__}return b.__wrapped__=s,l}function VE(){var s=this.__wrapped__;if(s instanceof ot){var l=s;return this.__actions__.length&&(l=new ot(this)),l=l.reverse(),l.__actions__.push({func:ga,args:[Ac],thisArg:n}),new Hn(l,this.__chain__)}return this.thru(Ac)}function KE(){return J_(this.__wrapped__,this.__actions__)}var XE=sa(function(s,l,f){mt.call(s,f)?++s[f]:mr(s,f,1)});function qE(s,l,f){var C=Xe(s)?__:P1;return f&&an(s,l,f)&&(l=n),C(s,$e(l,3))}function ZE(s,l){var f=Xe(s)?Fr:M_;return f(s,$e(l,3))}var QE=df(Tf),JE=df(Df);function eC(s,l){return jt(ha(s,l),1)}function tC(s,l){return jt(ha(s,l),Qe)}function nC(s,l,f){return f=f===n?1:Je(f),jt(ha(s,l),f)}function $f(s,l){var f=Xe(s)?$n:Br;return f(s,$e(l,3))}function Pf(s,l){var f=Xe(s)?Om:G_;return f(s,$e(l,3))}var rC=sa(function(s,l,f){mt.call(s,f)?s[f].push(l):mr(s,f,[l])});function iC(s,l,f,C){s=pn(s)?s:ji(s),f=f&&!C?Je(f):0;var b=s.length;return f<0&&(f=Pt(b+f,0)),Ca(s)?f<=b&&s.indexOf(l,f)>-1:!!b&&ki(s,l,f)>-1}var oC=tt(function(s,l,f){var C=-1,b=typeof l=="function",S=pn(s)?Q(s.length):[];return Br(s,function(G){S[++C]=b?wn(l,G,f):$o(G,l,f)}),S}),sC=sa(function(s,l,f){mr(s,f,l)});function ha(s,l){var f=Xe(s)?xt:B_;return f(s,$e(l,3))}function aC(s,l,f,C){return s==null?[]:(Xe(l)||(l=l==null?[]:[l]),f=C?n:f,Xe(f)||(f=f==null?[]:[f]),j_(s,l,f))}var lC=sa(function(s,l,f){s[f?0:1].push(l)},function(){return[[],[]]});function cC(s,l,f){var C=Xe(s)?Pl:p_,b=arguments.length<3;return C(s,$e(l,4),f,b,Br)}function uC(s,l,f){var C=Xe(s)?Im:p_,b=arguments.length<3;return C(s,$e(l,4),f,b,G_)}function dC(s,l){var f=Xe(s)?Fr:M_;return f(s,ma($e(l,3)))}function _C(s){var l=Xe(s)?R_:i0;return l(s)}function fC(s,l,f){(f?an(s,l,f):l===n)?l=1:l=Je(l);var C=Xe(s)?G1:o0;return C(s,l)}function gC(s){var l=Xe(s)?M1:a0;return l(s)}function hC(s){if(s==null)return 0;if(pn(s))return Ca(s)?Mi(s):s.length;var l=rn(s);return l==be||l==Zn?s.size:oc(s).length}function pC(s,l,f){var C=Xe(s)?Hl:l0;return f&&an(s,l,f)&&(l=n),C(s,$e(l,3))}var vC=tt(function(s,l){if(s==null)return[];var f=l.length;return f>1&&an(s,l[0],l[1])?l=[]:f>2&&an(l[0],l[1],l[2])&&(l=[l[0]]),j_(s,jt(l,1),[])}),pa=Zm||function(){return Yt.Date.now()};function mC(s,l){if(typeof l!="function")throw new Pn(a);return s=Je(s),function(){if(--s<1)return l.apply(this,arguments)}}function Hf(s,l,f){return l=f?n:l,l=s&&l==null?s.length:l,Er(s,H,n,n,n,n,l)}function Bf(s,l){var f;if(typeof l!="function")throw new Pn(a);return s=Je(s),function(){return--s>0&&(f=l.apply(this,arguments)),s<=1&&(l=n),f}}var Sc=tt(function(s,l,f){var C=I;if(f.length){var b=Pr(f,zi(Sc));C|=z}return Er(s,C,l,f,b)}),Wf=tt(function(s,l,f){var C=I|w;if(f.length){var b=Pr(f,zi(Wf));C|=z}return Er(l,C,s,f,b)});function zf(s,l,f){l=f?n:l;var C=Er(s,k,n,n,n,n,n,l);return C.placeholder=zf.placeholder,C}function Yf(s,l,f){l=f?n:l;var C=Er(s,U,n,n,n,n,n,l);return C.placeholder=Yf.placeholder,C}function jf(s,l,f){var C,b,S,G,B,K,oe=0,le=!1,_e=!1,ye=!0;if(typeof s!="function")throw new Pn(a);l=Yn(l)||0,Tt(f)&&(le=!!f.leading,_e="maxWait"in f,S=_e?Pt(Yn(f.maxWait)||0,l):S,ye="trailing"in f?!!f.trailing:ye);function Ge(Mt){var tr=C,wr=b;return C=b=n,oe=Mt,G=s.apply(wr,tr),G}function Pe(Mt){return oe=Mt,B=zo(rt,l),le?Ge(Mt):G}function et(Mt){var tr=Mt-K,wr=Mt-oe,dg=l-tr;return _e?nn(dg,S-wr):dg}function He(Mt){var tr=Mt-K,wr=Mt-oe;return K===n||tr>=l||tr<0||_e&&wr>=S}function rt(){var Mt=pa();if(He(Mt))return ct(Mt);B=zo(rt,et(Mt))}function ct(Mt){return B=n,ye&&C?Ge(Mt):(C=b=n,G)}function Nn(){B!==n&&tf(B),oe=0,C=K=b=B=n}function ln(){return B===n?G:ct(pa())}function Sn(){var Mt=pa(),tr=He(Mt);if(C=arguments,b=this,K=Mt,tr){if(B===n)return Pe(K);if(_e)return tf(B),B=zo(rt,l),Ge(K)}return B===n&&(B=zo(rt,l)),G}return Sn.cancel=Nn,Sn.flush=ln,Sn}var EC=tt(function(s,l){return k_(s,1,l)}),CC=tt(function(s,l,f){return k_(s,Yn(l)||0,f)});function OC(s){return Er(s,ee)}function va(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Pn(a);var f=function(){var C=arguments,b=l?l.apply(this,C):C[0],S=f.cache;if(S.has(b))return S.get(b);var G=s.apply(this,C);return f.cache=S.set(b,G)||S,G};return f.cache=new(va.Cache||vr),f}va.Cache=vr;function ma(s){if(typeof s!="function")throw new Pn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function IC(s){return Bf(2,s)}var bC=c0(function(s,l){l=l.length==1&&Xe(l[0])?xt(l[0],yn($e())):xt(jt(l,1),yn($e()));var f=l.length;return tt(function(C){for(var b=-1,S=nn(C.length,f);++b<S;)C[b]=l[b].call(this,C[b]);return wn(s,this,C)})}),xc=tt(function(s,l){var f=Pr(l,zi(xc));return Er(s,z,n,l,f)}),Vf=tt(function(s,l){var f=Pr(l,zi(Vf));return Er(s,j,n,l,f)}),wC=Cr(function(s,l){return Er(s,q,n,n,n,l)});function yC(s,l){if(typeof s!="function")throw new Pn(a);return l=l===n?l:Je(l),tt(s,l)}function LC(s,l){if(typeof s!="function")throw new Pn(a);return l=l==null?0:Pt(Je(l),0),tt(function(f){var C=f[l],b=Yr(f,0,l);return C&&$r(b,C),wn(s,this,b)})}function AC(s,l,f){var C=!0,b=!0;if(typeof s!="function")throw new Pn(a);return Tt(f)&&(C="leading"in f?!!f.leading:C,b="trailing"in f?!!f.trailing:b),jf(s,l,{leading:C,maxWait:l,trailing:b})}function NC(s){return Hf(s,1)}function SC(s,l){return xc(gc(l),s)}function xC(){if(!arguments.length)return[];var s=arguments[0];return Xe(s)?s:[s]}function RC(s){return Bn(s,m)}function TC(s,l){return l=typeof l=="function"?l:n,Bn(s,m,l)}function DC(s){return Bn(s,g|m)}function kC(s,l){return l=typeof l=="function"?l:n,Bn(s,g|m,l)}function GC(s,l){return l==null||D_(s,l,zt(l))}function er(s,l){return s===l||s!==s&&l!==l}var MC=ua(nc),UC=ua(function(s,l){return s>=l}),pi=$_(function(){return arguments}())?$_:function(s){return kt(s)&&mt.call(s,"callee")&&!y_.call(s,"callee")},Xe=Q.isArray,FC=s_?yn(s_):j1;function pn(s){return s!=null&&Ea(s.length)&&!Ir(s)}function Gt(s){return kt(s)&&pn(s)}function $C(s){return s===!0||s===!1||kt(s)&&sn(s)==or}var jr=Jm||Hc,PC=a_?yn(a_):V1;function HC(s){return kt(s)&&s.nodeType===1&&!Yo(s)}function BC(s){if(s==null)return!0;if(pn(s)&&(Xe(s)||typeof s=="string"||typeof s.splice=="function"||jr(s)||Yi(s)||pi(s)))return!s.length;var l=rn(s);if(l==be||l==Zn)return!s.size;if(Wo(s))return!oc(s).length;for(var f in s)if(mt.call(s,f))return!1;return!0}function WC(s,l){return Po(s,l)}function zC(s,l,f){f=typeof f=="function"?f:n;var C=f?f(s,l):n;return C===n?Po(s,l,n,f):!!C}function Rc(s){if(!kt(s))return!1;var l=sn(s);return l==Ur||l==Ri||typeof s.message=="string"&&typeof s.name=="string"&&!Yo(s)}function YC(s){return typeof s=="number"&&A_(s)}function Ir(s){if(!Tt(s))return!1;var l=sn(s);return l==Dt||l==Te||l==si||l==Cl}function Kf(s){return typeof s=="number"&&s==Je(s)}function Ea(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Ne}function Tt(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function kt(s){return s!=null&&typeof s=="object"}var Xf=l_?yn(l_):X1;function jC(s,l){return s===l||ic(s,l,Oc(l))}function VC(s,l,f){return f=typeof f=="function"?f:n,ic(s,l,Oc(l),f)}function KC(s){return qf(s)&&s!=+s}function XC(s){if(T0(s))throw new Ve(o);return P_(s)}function qC(s){return s===null}function ZC(s){return s==null}function qf(s){return typeof s=="number"||kt(s)&&sn(s)==ke}function Yo(s){if(!kt(s)||sn(s)!=Nt)return!1;var l=js(s);if(l===null)return!0;var f=mt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&Bs.call(f)==Vm}var Tc=c_?yn(c_):q1;function QC(s){return Kf(s)&&s>=-9007199254740991&&s<=Ne}var Zf=u_?yn(u_):Z1;function Ca(s){return typeof s=="string"||!Xe(s)&&kt(s)&&sn(s)==No}function An(s){return typeof s=="symbol"||kt(s)&&sn(s)==Ds}var Yi=d_?yn(d_):Q1;function JC(s){return s===n}function eO(s){return kt(s)&&rn(s)==So}function tO(s){return kt(s)&&sn(s)==vv}var nO=ua(sc),rO=ua(function(s,l){return s<=l});function Qf(s){if(!s)return[];if(pn(s))return Ca(s)?Qn(s):hn(s);if(To&&s[To])return Gm(s[To]());var l=rn(s),f=l==be?Vl:l==Zn?$s:ji;return f(s)}function br(s){if(!s)return s===0?s:0;if(s=Yn(s),s===Qe||s===-1/0){var l=s<0?-1:1;return l*Le}return s===s?s:0}function Je(s){var l=br(s),f=l%1;return l===l?f?l-f:l:0}function Jf(s){return s?_i(Je(s),0,ze):0}function Yn(s){if(typeof s=="number")return s;if(An(s))return lt;if(Tt(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Tt(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=v_(s);var f=Fv.test(s);return f||Pv.test(s)?mm(s.slice(2),f?2:8):Uv.test(s)?lt:+s}function eg(s){return ar(s,vn(s))}function iO(s){return s?_i(Je(s),-9007199254740991,Ne):s===0?s:0}function pt(s){return s==null?"":Ln(s)}var oO=Bi(function(s,l){if(Wo(l)||pn(l)){ar(l,zt(l),s);return}for(var f in l)mt.call(l,f)&&Uo(s,f,l[f])}),tg=Bi(function(s,l){ar(l,vn(l),s)}),Oa=Bi(function(s,l,f,C){ar(l,vn(l),s,C)}),sO=Bi(function(s,l,f,C){ar(l,zt(l),s,C)}),aO=Cr(Jl);function lO(s,l){var f=Hi(s);return l==null?f:T_(f,l)}var cO=tt(function(s,l){s=Ot(s);var f=-1,C=l.length,b=C>2?l[2]:n;for(b&&an(l[0],l[1],b)&&(C=1);++f<C;)for(var S=l[f],G=vn(S),B=-1,K=G.length;++B<K;){var oe=G[B],le=s[oe];(le===n||er(le,Fi[oe])&&!mt.call(s,oe))&&(s[oe]=S[oe])}return s}),uO=tt(function(s){return s.push(n,mf),wn(ng,n,s)});function dO(s,l){return f_(s,$e(l,3),sr)}function _O(s,l){return f_(s,$e(l,3),tc)}function fO(s,l){return s==null?s:ec(s,$e(l,3),vn)}function gO(s,l){return s==null?s:U_(s,$e(l,3),vn)}function hO(s,l){return s&&sr(s,$e(l,3))}function pO(s,l){return s&&tc(s,$e(l,3))}function vO(s){return s==null?[]:na(s,zt(s))}function mO(s){return s==null?[]:na(s,vn(s))}function Dc(s,l,f){var C=s==null?n:fi(s,l);return C===n?f:C}function EO(s,l){return s!=null&&Of(s,l,B1)}function kc(s,l){return s!=null&&Of(s,l,W1)}var CO=ff(function(s,l,f){l!=null&&typeof l.toString!="function"&&(l=Ws.call(l)),s[l]=f},Mc(mn)),OO=ff(function(s,l,f){l!=null&&typeof l.toString!="function"&&(l=Ws.call(l)),mt.call(s,l)?s[l].push(f):s[l]=[f]},$e),IO=tt($o);function zt(s){return pn(s)?x_(s):oc(s)}function vn(s){return pn(s)?x_(s,!0):J1(s)}function bO(s,l){var f={};return l=$e(l,3),sr(s,function(C,b,S){mr(f,l(C,b,S),C)}),f}function wO(s,l){var f={};return l=$e(l,3),sr(s,function(C,b,S){mr(f,b,l(C,b,S))}),f}var yO=Bi(function(s,l,f){ra(s,l,f)}),ng=Bi(function(s,l,f,C){ra(s,l,f,C)}),LO=Cr(function(s,l){var f={};if(s==null)return f;var C=!1;l=xt(l,function(S){return S=zr(S,s),C||(C=S.length>1),S}),ar(s,Ec(s),f),C&&(f=Bn(f,g|p|m,C0));for(var b=l.length;b--;)dc(f,l[b]);return f});function AO(s,l){return rg(s,ma($e(l)))}var NO=Cr(function(s,l){return s==null?{}:t0(s,l)});function rg(s,l){if(s==null)return{};var f=xt(Ec(s),function(C){return[C]});return l=$e(l),V_(s,f,function(C,b){return l(C,b[0])})}function SO(s,l,f){l=zr(l,s);var C=-1,b=l.length;for(b||(b=1,s=n);++C<b;){var S=s==null?n:s[lr(l[C])];S===n&&(C=b,S=f),s=Ir(S)?S.call(s):S}return s}function xO(s,l,f){return s==null?s:Ho(s,l,f)}function RO(s,l,f,C){return C=typeof C=="function"?C:n,s==null?s:Ho(s,l,f,C)}var ig=pf(zt),og=pf(vn);function TO(s,l,f){var C=Xe(s),b=C||jr(s)||Yi(s);if(l=$e(l,4),f==null){var S=s&&s.constructor;b?f=C?new S:[]:Tt(s)?f=Ir(S)?Hi(js(s)):{}:f={}}return(b?$n:sr)(s,function(G,B,K){return l(f,G,B,K)}),f}function DO(s,l){return s==null?!0:dc(s,l)}function kO(s,l,f){return s==null?s:Q_(s,l,gc(f))}function GO(s,l,f,C){return C=typeof C=="function"?C:n,s==null?s:Q_(s,l,gc(f),C)}function ji(s){return s==null?[]:jl(s,zt(s))}function MO(s){return s==null?[]:jl(s,vn(s))}function UO(s,l,f){return f===n&&(f=l,l=n),f!==n&&(f=Yn(f),f=f===f?f:0),l!==n&&(l=Yn(l),l=l===l?l:0),_i(Yn(s),l,f)}function FO(s,l,f){return l=br(l),f===n?(f=l,l=0):f=br(f),s=Yn(s),z1(s,l,f)}function $O(s,l,f){if(f&&typeof f!="boolean"&&an(s,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof s=="boolean"&&(f=s,s=n)),s===n&&l===n?(s=0,l=1):(s=br(s),l===n?(l=s,s=0):l=br(l)),s>l){var C=s;s=l,l=C}if(f||s%1||l%1){var b=N_();return nn(s+b*(l-s+vm("1e-"+((b+"").length-1))),l)}return lc(s,l)}var PO=Wi(function(s,l,f){return l=l.toLowerCase(),s+(f?sg(l):l)});function sg(s){return Gc(pt(s).toLowerCase())}function ag(s){return s=pt(s),s&&s.replace(Bv,xm).replace(am,"")}function HO(s,l,f){s=pt(s),l=Ln(l);var C=s.length;f=f===n?C:_i(Je(f),0,C);var b=f;return f-=l.length,f>=0&&s.slice(f,b)==l}function BO(s){return s=pt(s),s&&Iv.test(s)?s.replace(Ud,Rm):s}function WO(s){return s=pt(s),s&&Nv.test(s)?s.replace(xl,"\\$&"):s}var zO=Wi(function(s,l,f){return s+(f?"-":"")+l.toLowerCase()}),YO=Wi(function(s,l,f){return s+(f?" ":"")+l.toLowerCase()}),jO=uf("toLowerCase");function VO(s,l,f){s=pt(s),l=Je(l);var C=l?Mi(s):0;if(!l||C>=l)return s;var b=(l-C)/2;return ca(qs(b),f)+s+ca(Xs(b),f)}function KO(s,l,f){s=pt(s),l=Je(l);var C=l?Mi(s):0;return l&&C<l?s+ca(l-C,f):s}function XO(s,l,f){s=pt(s),l=Je(l);var C=l?Mi(s):0;return l&&C<l?ca(l-C,f)+s:s}function qO(s,l,f){return f||l==null?l=0:l&&(l=+l),r1(pt(s).replace(Rl,""),l||0)}function ZO(s,l,f){return(f?an(s,l,f):l===n)?l=1:l=Je(l),cc(pt(s),l)}function QO(){var s=arguments,l=pt(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var JO=Wi(function(s,l,f){return s+(f?"_":"")+l.toLowerCase()});function eI(s,l,f){return f&&typeof f!="number"&&an(s,l,f)&&(l=f=n),f=f===n?ze:f>>>0,f?(s=pt(s),s&&(typeof l=="string"||l!=null&&!Tc(l))&&(l=Ln(l),!l&&Gi(s))?Yr(Qn(s),0,f):s.split(l,f)):[]}var tI=Wi(function(s,l,f){return s+(f?" ":"")+Gc(l)});function nI(s,l,f){return s=pt(s),f=f==null?0:_i(Je(f),0,s.length),l=Ln(l),s.slice(f,f+l.length)==l}function rI(s,l,f){var C=y.templateSettings;f&&an(s,l,f)&&(l=n),s=pt(s),l=Oa({},l,C,vf);var b=Oa({},l.imports,C.imports,vf),S=zt(b),G=jl(b,S),B,K,oe=0,le=l.interpolate||ks,_e="__p += '",ye=Kl((l.escape||ks).source+"|"+le.source+"|"+(le===Fd?Mv:ks).source+"|"+(l.evaluate||ks).source+"|$","g"),Ge="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++_m+"]")+`
`;s.replace(ye,function(He,rt,ct,Nn,ln,Sn){return ct||(ct=Nn),_e+=s.slice(oe,Sn).replace(Wv,Tm),rt&&(B=!0,_e+=`' +
__e(`+rt+`) +
'`),ln&&(K=!0,_e+=`';
`+ln+`;
__p += '`),ct&&(_e+=`' +
((__t = (`+ct+`)) == null ? '' : __t) +
'`),oe=Sn+He.length,He}),_e+=`';
`;var Pe=mt.call(l,"variable")&&l.variable;if(!Pe)_e=`with (obj) {
`+_e+`
}
`;else if(kv.test(Pe))throw new Ve(c);_e=(K?_e.replace(mv,""):_e).replace(Ev,"$1").replace(Cv,"$1;"),_e="function("+(Pe||"obj")+`) {
`+(Pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(K?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var et=cg(function(){return ht(S,Ge+"return "+_e).apply(n,G)});if(et.source=_e,Rc(et))throw et;return et}function iI(s){return pt(s).toLowerCase()}function oI(s){return pt(s).toUpperCase()}function sI(s,l,f){if(s=pt(s),s&&(f||l===n))return v_(s);if(!s||!(l=Ln(l)))return s;var C=Qn(s),b=Qn(l),S=m_(C,b),G=E_(C,b)+1;return Yr(C,S,G).join("")}function aI(s,l,f){if(s=pt(s),s&&(f||l===n))return s.slice(0,O_(s)+1);if(!s||!(l=Ln(l)))return s;var C=Qn(s),b=E_(C,Qn(l))+1;return Yr(C,0,b).join("")}function lI(s,l,f){if(s=pt(s),s&&(f||l===n))return s.replace(Rl,"");if(!s||!(l=Ln(l)))return s;var C=Qn(s),b=m_(C,Qn(l));return Yr(C,b).join("")}function cI(s,l){var f=ce,C=te;if(Tt(l)){var b="separator"in l?l.separator:b;f="length"in l?Je(l.length):f,C="omission"in l?Ln(l.omission):C}s=pt(s);var S=s.length;if(Gi(s)){var G=Qn(s);S=G.length}if(f>=S)return s;var B=f-Mi(C);if(B<1)return C;var K=G?Yr(G,0,B).join(""):s.slice(0,B);if(b===n)return K+C;if(G&&(B+=K.length-B),Tc(b)){if(s.slice(B).search(b)){var oe,le=K;for(b.global||(b=Kl(b.source,pt($d.exec(b))+"g")),b.lastIndex=0;oe=b.exec(le);)var _e=oe.index;K=K.slice(0,_e===n?B:_e)}}else if(s.indexOf(Ln(b),B)!=B){var ye=K.lastIndexOf(b);ye>-1&&(K=K.slice(0,ye))}return K+C}function uI(s){return s=pt(s),s&&Ov.test(s)?s.replace(Md,$m):s}var dI=Wi(function(s,l,f){return s+(f?" ":"")+l.toUpperCase()}),Gc=uf("toUpperCase");function lg(s,l,f){return s=pt(s),l=f?n:l,l===n?km(s)?Bm(s):ym(s):s.match(l)||[]}var cg=tt(function(s,l){try{return wn(s,n,l)}catch(f){return Rc(f)?f:new Ve(f)}}),_I=Cr(function(s,l){return $n(l,function(f){f=lr(f),mr(s,f,Sc(s[f],s))}),s});function fI(s){var l=s==null?0:s.length,f=$e();return s=l?xt(s,function(C){if(typeof C[1]!="function")throw new Pn(a);return[f(C[0]),C[1]]}):[],tt(function(C){for(var b=-1;++b<l;){var S=s[b];if(wn(S[0],this,C))return wn(S[1],this,C)}})}function gI(s){return $1(Bn(s,g))}function Mc(s){return function(){return s}}function hI(s,l){return s==null||s!==s?l:s}var pI=_f(),vI=_f(!0);function mn(s){return s}function Uc(s){return H_(typeof s=="function"?s:Bn(s,g))}function mI(s){return W_(Bn(s,g))}function EI(s,l){return z_(s,Bn(l,g))}var CI=tt(function(s,l){return function(f){return $o(f,s,l)}}),OI=tt(function(s,l){return function(f){return $o(s,f,l)}});function Fc(s,l,f){var C=zt(l),b=na(l,C);f==null&&!(Tt(l)&&(b.length||!C.length))&&(f=l,l=s,s=this,b=na(l,zt(l)));var S=!(Tt(f)&&"chain"in f)||!!f.chain,G=Ir(s);return $n(b,function(B){var K=l[B];s[B]=K,G&&(s.prototype[B]=function(){var oe=this.__chain__;if(S||oe){var le=s(this.__wrapped__),_e=le.__actions__=hn(this.__actions__);return _e.push({func:K,args:arguments,thisArg:s}),le.__chain__=oe,le}return K.apply(s,$r([this.value()],arguments))})}),s}function II(){return Yt._===this&&(Yt._=Km),this}function $c(){}function bI(s){return s=Je(s),tt(function(l){return Y_(l,s)})}var wI=pc(xt),yI=pc(__),LI=pc(Hl);function ug(s){return bc(s)?Bl(lr(s)):n0(s)}function AI(s){return function(l){return s==null?n:fi(s,l)}}var NI=gf(),SI=gf(!0);function Pc(){return[]}function Hc(){return!1}function xI(){return{}}function RI(){return""}function TI(){return!0}function DI(s,l){if(s=Je(s),s<1||s>Ne)return[];var f=ze,C=nn(s,ze);l=$e(l),s-=ze;for(var b=Yl(C,l);++f<s;)l(f);return b}function kI(s){return Xe(s)?xt(s,lr):An(s)?[s]:hn(xf(pt(s)))}function GI(s){var l=++jm;return pt(s)+l}var MI=la(function(s,l){return s+l},0),UI=vc("ceil"),FI=la(function(s,l){return s/l},1),$I=vc("floor");function PI(s){return s&&s.length?ta(s,mn,nc):n}function HI(s,l){return s&&s.length?ta(s,$e(l,2),nc):n}function BI(s){return h_(s,mn)}function WI(s,l){return h_(s,$e(l,2))}function zI(s){return s&&s.length?ta(s,mn,sc):n}function YI(s,l){return s&&s.length?ta(s,$e(l,2),sc):n}var jI=la(function(s,l){return s*l},1),VI=vc("round"),KI=la(function(s,l){return s-l},0);function XI(s){return s&&s.length?zl(s,mn):0}function qI(s,l){return s&&s.length?zl(s,$e(l,2)):0}return y.after=mC,y.ary=Hf,y.assign=oO,y.assignIn=tg,y.assignInWith=Oa,y.assignWith=sO,y.at=aO,y.before=Bf,y.bind=Sc,y.bindAll=_I,y.bindKey=Wf,y.castArray=xC,y.chain=Ff,y.chunk=$0,y.compact=P0,y.concat=H0,y.cond=fI,y.conforms=gI,y.constant=Mc,y.countBy=XE,y.create=lO,y.curry=zf,y.curryRight=Yf,y.debounce=jf,y.defaults=cO,y.defaultsDeep=uO,y.defer=EC,y.delay=CC,y.difference=B0,y.differenceBy=W0,y.differenceWith=z0,y.drop=Y0,y.dropRight=j0,y.dropRightWhile=V0,y.dropWhile=K0,y.fill=X0,y.filter=ZE,y.flatMap=eC,y.flatMapDeep=tC,y.flatMapDepth=nC,y.flatten=kf,y.flattenDeep=q0,y.flattenDepth=Z0,y.flip=OC,y.flow=pI,y.flowRight=vI,y.fromPairs=Q0,y.functions=vO,y.functionsIn=mO,y.groupBy=rC,y.initial=eE,y.intersection=tE,y.intersectionBy=nE,y.intersectionWith=rE,y.invert=CO,y.invertBy=OO,y.invokeMap=oC,y.iteratee=Uc,y.keyBy=sC,y.keys=zt,y.keysIn=vn,y.map=ha,y.mapKeys=bO,y.mapValues=wO,y.matches=mI,y.matchesProperty=EI,y.memoize=va,y.merge=yO,y.mergeWith=ng,y.method=CI,y.methodOf=OI,y.mixin=Fc,y.negate=ma,y.nthArg=bI,y.omit=LO,y.omitBy=AO,y.once=IC,y.orderBy=aC,y.over=wI,y.overArgs=bC,y.overEvery=yI,y.overSome=LI,y.partial=xc,y.partialRight=Vf,y.partition=lC,y.pick=NO,y.pickBy=rg,y.property=ug,y.propertyOf=AI,y.pull=aE,y.pullAll=Mf,y.pullAllBy=lE,y.pullAllWith=cE,y.pullAt=uE,y.range=NI,y.rangeRight=SI,y.rearg=wC,y.reject=dC,y.remove=dE,y.rest=yC,y.reverse=Ac,y.sampleSize=fC,y.set=xO,y.setWith=RO,y.shuffle=gC,y.slice=_E,y.sortBy=vC,y.sortedUniq=EE,y.sortedUniqBy=CE,y.split=eI,y.spread=LC,y.tail=OE,y.take=IE,y.takeRight=bE,y.takeRightWhile=wE,y.takeWhile=yE,y.tap=PE,y.throttle=AC,y.thru=ga,y.toArray=Qf,y.toPairs=ig,y.toPairsIn=og,y.toPath=kI,y.toPlainObject=eg,y.transform=TO,y.unary=NC,y.union=LE,y.unionBy=AE,y.unionWith=NE,y.uniq=SE,y.uniqBy=xE,y.uniqWith=RE,y.unset=DO,y.unzip=Nc,y.unzipWith=Uf,y.update=kO,y.updateWith=GO,y.values=ji,y.valuesIn=MO,y.without=TE,y.words=lg,y.wrap=SC,y.xor=DE,y.xorBy=kE,y.xorWith=GE,y.zip=ME,y.zipObject=UE,y.zipObjectDeep=FE,y.zipWith=$E,y.entries=ig,y.entriesIn=og,y.extend=tg,y.extendWith=Oa,Fc(y,y),y.add=MI,y.attempt=cg,y.camelCase=PO,y.capitalize=sg,y.ceil=UI,y.clamp=UO,y.clone=RC,y.cloneDeep=DC,y.cloneDeepWith=kC,y.cloneWith=TC,y.conformsTo=GC,y.deburr=ag,y.defaultTo=hI,y.divide=FI,y.endsWith=HO,y.eq=er,y.escape=BO,y.escapeRegExp=WO,y.every=qE,y.find=QE,y.findIndex=Tf,y.findKey=dO,y.findLast=JE,y.findLastIndex=Df,y.findLastKey=_O,y.floor=$I,y.forEach=$f,y.forEachRight=Pf,y.forIn=fO,y.forInRight=gO,y.forOwn=hO,y.forOwnRight=pO,y.get=Dc,y.gt=MC,y.gte=UC,y.has=EO,y.hasIn=kc,y.head=Gf,y.identity=mn,y.includes=iC,y.indexOf=J0,y.inRange=FO,y.invoke=IO,y.isArguments=pi,y.isArray=Xe,y.isArrayBuffer=FC,y.isArrayLike=pn,y.isArrayLikeObject=Gt,y.isBoolean=$C,y.isBuffer=jr,y.isDate=PC,y.isElement=HC,y.isEmpty=BC,y.isEqual=WC,y.isEqualWith=zC,y.isError=Rc,y.isFinite=YC,y.isFunction=Ir,y.isInteger=Kf,y.isLength=Ea,y.isMap=Xf,y.isMatch=jC,y.isMatchWith=VC,y.isNaN=KC,y.isNative=XC,y.isNil=ZC,y.isNull=qC,y.isNumber=qf,y.isObject=Tt,y.isObjectLike=kt,y.isPlainObject=Yo,y.isRegExp=Tc,y.isSafeInteger=QC,y.isSet=Zf,y.isString=Ca,y.isSymbol=An,y.isTypedArray=Yi,y.isUndefined=JC,y.isWeakMap=eO,y.isWeakSet=tO,y.join=iE,y.kebabCase=zO,y.last=zn,y.lastIndexOf=oE,y.lowerCase=YO,y.lowerFirst=jO,y.lt=nO,y.lte=rO,y.max=PI,y.maxBy=HI,y.mean=BI,y.meanBy=WI,y.min=zI,y.minBy=YI,y.stubArray=Pc,y.stubFalse=Hc,y.stubObject=xI,y.stubString=RI,y.stubTrue=TI,y.multiply=jI,y.nth=sE,y.noConflict=II,y.noop=$c,y.now=pa,y.pad=VO,y.padEnd=KO,y.padStart=XO,y.parseInt=qO,y.random=$O,y.reduce=cC,y.reduceRight=uC,y.repeat=ZO,y.replace=QO,y.result=SO,y.round=VI,y.runInContext=V,y.sample=_C,y.size=hC,y.snakeCase=JO,y.some=pC,y.sortedIndex=fE,y.sortedIndexBy=gE,y.sortedIndexOf=hE,y.sortedLastIndex=pE,y.sortedLastIndexBy=vE,y.sortedLastIndexOf=mE,y.startCase=tI,y.startsWith=nI,y.subtract=KI,y.sum=XI,y.sumBy=qI,y.template=rI,y.times=DI,y.toFinite=br,y.toInteger=Je,y.toLength=Jf,y.toLower=iI,y.toNumber=Yn,y.toSafeInteger=iO,y.toString=pt,y.toUpper=oI,y.trim=sI,y.trimEnd=aI,y.trimStart=lI,y.truncate=cI,y.unescape=uI,y.uniqueId=GI,y.upperCase=dI,y.upperFirst=Gc,y.each=$f,y.eachRight=Pf,y.first=Gf,Fc(y,function(){var s={};return sr(y,function(l,f){mt.call(y.prototype,f)||(s[f]=l)}),s}(),{chain:!1}),y.VERSION=r,$n(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){y[s].placeholder=y}),$n(["drop","take"],function(s,l){ot.prototype[s]=function(f){f=f===n?1:Pt(Je(f),0);var C=this.__filtered__&&!l?new ot(this):this.clone();return C.__filtered__?C.__takeCount__=nn(f,C.__takeCount__):C.__views__.push({size:nn(f,ze),type:s+(C.__dir__<0?"Right":"")}),C},ot.prototype[s+"Right"]=function(f){return this.reverse()[s](f).reverse()}}),$n(["filter","map","takeWhile"],function(s,l){var f=l+1,C=f==Oe||f==Ue;ot.prototype[s]=function(b){var S=this.clone();return S.__iteratees__.push({iteratee:$e(b,3),type:f}),S.__filtered__=S.__filtered__||C,S}}),$n(["head","last"],function(s,l){var f="take"+(l?"Right":"");ot.prototype[s]=function(){return this[f](1).value()[0]}}),$n(["initial","tail"],function(s,l){var f="drop"+(l?"":"Right");ot.prototype[s]=function(){return this.__filtered__?new ot(this):this[f](1)}}),ot.prototype.compact=function(){return this.filter(mn)},ot.prototype.find=function(s){return this.filter(s).head()},ot.prototype.findLast=function(s){return this.reverse().find(s)},ot.prototype.invokeMap=tt(function(s,l){return typeof s=="function"?new ot(this):this.map(function(f){return $o(f,s,l)})}),ot.prototype.reject=function(s){return this.filter(ma($e(s)))},ot.prototype.slice=function(s,l){s=Je(s);var f=this;return f.__filtered__&&(s>0||l<0)?new ot(f):(s<0?f=f.takeRight(-s):s&&(f=f.drop(s)),l!==n&&(l=Je(l),f=l<0?f.dropRight(-l):f.take(l-s)),f)},ot.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},ot.prototype.toArray=function(){return this.take(ze)},sr(ot.prototype,function(s,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),b=y[C?"take"+(l=="last"?"Right":""):l],S=C||/^find/.test(l);b&&(y.prototype[l]=function(){var G=this.__wrapped__,B=C?[1]:arguments,K=G instanceof ot,oe=B[0],le=K||Xe(G),_e=function(rt){var ct=b.apply(y,$r([rt],B));return C&&ye?ct[0]:ct};le&&f&&typeof oe=="function"&&oe.length!=1&&(K=le=!1);var ye=this.__chain__,Ge=!!this.__actions__.length,Pe=S&&!ye,et=K&&!Ge;if(!S&&le){G=et?G:new ot(this);var He=s.apply(G,B);return He.__actions__.push({func:ga,args:[_e],thisArg:n}),new Hn(He,ye)}return Pe&&et?s.apply(this,B):(He=this.thru(_e),Pe?C?He.value()[0]:He.value():He)})}),$n(["pop","push","shift","sort","splice","unshift"],function(s){var l=Ps[s],f=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);y.prototype[s]=function(){var b=arguments;if(C&&!this.__chain__){var S=this.value();return l.apply(Xe(S)?S:[],b)}return this[f](function(G){return l.apply(Xe(G)?G:[],b)})}}),sr(ot.prototype,function(s,l){var f=y[l];if(f){var C=f.name+"";mt.call(Pi,C)||(Pi[C]=[]),Pi[C].push({name:l,func:f})}}),Pi[aa(n,w).name]=[{name:"wrapper",func:n}],ot.prototype.clone=u1,ot.prototype.reverse=d1,ot.prototype.value=_1,y.prototype.at=HE,y.prototype.chain=BE,y.prototype.commit=WE,y.prototype.next=zE,y.prototype.plant=jE,y.prototype.reverse=VE,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=KE,y.prototype.first=y.prototype.head,To&&(y.prototype[To]=YE),y},Ui=Wm();li?((li.exports=Ui)._=Ui,Ul._=Ui):Yt._=Ui}).call(yx)}(Zo,Zo.exports)),Zo.exports}var bt=Lx();function Lr(t){return Array.isArray?Array.isArray(t):Vh(t)==="[object Array]"}function Ax(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Nx(t){return t==null?"":Ax(t)}function dr(t){return typeof t=="string"}function Yh(t){return typeof t=="number"}function Sx(t){return t===!0||t===!1||xx(t)&&Vh(t)=="[object Boolean]"}function jh(t){return typeof t=="object"}function xx(t){return jh(t)&&t!==null}function Tn(t){return t!=null}function Vc(t){return!t.trim().length}function Vh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Rx="Incorrect 'index' type",Tx=t=>`Invalid value for key ${t}`,Dx=t=>`Pattern length exceeds max of ${t}.`,kx=t=>`Missing ${t} property in key`,Gx=t=>`Property 'weight' in key '${t}' must be a positive integer`,mg=Object.prototype.hasOwnProperty;class Mx{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Kh(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Kh(t){let e=null,n=null,r=null,i=1,o=null;if(dr(t)||Lr(t))r=t,e=Eg(t),n=lu(t);else{if(!mg.call(t,"name"))throw new Error(kx("name"));const a=t.name;if(r=a,mg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Gx(a));e=Eg(a),n=lu(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Eg(t){return Lr(t)?t:t.split(".")}function lu(t){return Lr(t)?t.join("."):t}function Ux(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Tn(o))if(!a[c])n.push(o);else{let u=a[c];const _=o[u];if(!Tn(_))return;if(c===a.length-1&&(dr(_)||Yh(_)||Sx(_)))n.push(Nx(_));else if(Lr(_)){r=!0;for(let v=0,g=_.length;v<g;v+=1)i(_[v],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,dr(e)?e.split("."):e,0),r?n:n[0]}const Fx={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},$x={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Px={location:0,threshold:.6,distance:100},Hx={useExtendedSearch:!1,getFn:Ux,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ye={...$x,...Fx,...Px,...Hx};const Bx=/[^ ]+/g;function Wx(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Bx).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class sd{constructor({getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){this.norm=Wx(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,dr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();dr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Tn(e)||Vc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Tn(a)){if(Lr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:v}=u.pop();if(Tn(v))if(dr(v)&&!Vc(v)){let g={v,i:_,n:this.norm.get(v)};c.push(g)}else Lr(v)&&v.forEach((g,p)=>{u.push({nestedArrIndex:p,value:g})})}r.$[o]=c}else if(dr(a)&&!Vc(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Xh(t,e,{getFn:n=Ye.getFn,fieldNormWeight:r=Ye.fieldNormWeight}={}){const i=new sd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Kh)),i.setSources(e),i.create(),i}function zx(t,{getFn:e=Ye.getFn,fieldNormWeight:n=Ye.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new sd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function wa(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=Ye.distance,ignoreLocation:o=Ye.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function Yx(t=[],e=Ye.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const mi=32;function jx(t,e,n,{location:r=Ye.location,distance:i=Ye.distance,threshold:o=Ye.threshold,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,includeMatches:u=Ye.includeMatches,ignoreLocation:_=Ye.ignoreLocation}={}){if(e.length>mi)throw new Error(Dx(mi));const v=e.length,g=t.length,p=Math.max(0,Math.min(r,g));let m=o,E=p;const O=c>1||u,I=O?Array(g):[];let w;for(;(w=t.indexOf(e,E))>-1;){let H=wa(e,{currentLocation:w,expectedLocation:p,distance:i,ignoreLocation:_});if(m=Math.min(H,m),E=w+v,O){let q=0;for(;q<v;)I[w+q]=1,q+=1}}E=-1;let x=[],k=1,U=v+g;const z=1<<v-1;for(let H=0;H<v;H+=1){let q=0,ee=U;for(;q<ee;)wa(e,{errors:H,currentLocation:p+ee,expectedLocation:p,distance:i,ignoreLocation:_})<=m?q=ee:U=ee,ee=Math.floor((U-q)/2+q);U=ee;let ce=Math.max(1,p-ee+1),te=a?g:Math.min(p+ee,g)+v,re=Array(te+2);re[te+1]=(1<<H)-1;for(let Oe=te;Oe>=ce;Oe-=1){let he=Oe-1,Ue=n[t.charAt(he)];if(O&&(I[he]=+!!Ue),re[Oe]=(re[Oe+1]<<1|1)&Ue,H&&(re[Oe]|=(x[Oe+1]|x[Oe])<<1|1|x[Oe+1]),re[Oe]&z&&(k=wa(e,{errors:H,currentLocation:he,expectedLocation:p,distance:i,ignoreLocation:_}),k<=m)){if(m=k,E=he,E<=p)break;ce=Math.max(1,2*p-E)}}if(wa(e,{errors:H+1,currentLocation:p,expectedLocation:p,distance:i,ignoreLocation:_})>m)break;x=re}const j={isMatch:E>=0,score:Math.max(.001,k)};if(O){const H=Yx(I,c);H.length?u&&(j.indices=H):j.isMatch=!1}return j}function Vx(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class qh{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:o=Ye.includeMatches,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const v=(p,m)=>{this.chunks.push({pattern:p,alphabet:Vx(p),startIndex:m})},g=this.pattern.length;if(g>mi){let p=0;const m=g%mi,E=g-m;for(;p<E;)v(this.pattern.substr(p,mi),p),p+=mi;if(m){const O=g-mi;v(this.pattern.substr(O),O)}}else v(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let v=[],g=0,p=!1;this.chunks.forEach(({pattern:E,alphabet:O,startIndex:I})=>{const{isMatch:w,score:x,indices:k}=jx(e,E,O,{location:i+I,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});w&&(p=!0),g+=x,w&&k&&(v=[...v,...k])});let m={isMatch:p,score:p?g/this.chunks.length:1};return p&&r&&(m.indices=v),m}}class ri{constructor(e){this.pattern=e}static isMultiMatch(e){return Cg(e,this.multiRegex)}static isSingleMatch(e){return Cg(e,this.singleRegex)}search(){}}function Cg(t,e){const n=t.match(e);return n?n[1]:null}class Kx extends ri{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Xx extends ri{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class qx extends ri{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Zx extends ri{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Qx extends ri{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Jx extends ri{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Zh extends ri{constructor(e,{location:n=Ye.location,threshold:r=Ye.threshold,distance:i=Ye.distance,includeMatches:o=Ye.includeMatches,findAllMatches:a=Ye.findAllMatches,minMatchCharLength:c=Ye.minMatchCharLength,isCaseSensitive:u=Ye.isCaseSensitive,ignoreLocation:_=Ye.ignoreLocation}={}){super(e),this._bitapSearch=new qh(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Qh extends ri{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const cu=[Kx,Qh,qx,Zx,Jx,Qx,Xx,Zh],Og=cu.length,eR=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,tR="|";function nR(t,e={}){return t.split(tR).map(n=>{let r=n.trim().split(eR).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,_=-1;for(;!u&&++_<Og;){const v=cu[_];let g=v.isMultiMatch(c);g&&(i.push(new v(g,e)),u=!0)}if(!u)for(_=-1;++_<Og;){const v=cu[_];let g=v.isSingleMatch(c);if(g){i.push(new v(g,e));break}}}return i})}const rR=new Set([Zh.type,Qh.type]);class iR{constructor(e,{isCaseSensitive:n=Ye.isCaseSensitive,includeMatches:r=Ye.includeMatches,minMatchCharLength:i=Ye.minMatchCharLength,ignoreLocation:o=Ye.ignoreLocation,findAllMatches:a=Ye.findAllMatches,location:c=Ye.location,threshold:u=Ye.threshold,distance:_=Ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=nR(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const v=n[u];a.length=0,o=0;for(let g=0,p=v.length;g<p;g+=1){const m=v[g],{isMatch:E,indices:O,score:I}=m.search(e);if(E){if(o+=1,c+=I,r){const w=m.constructor.type;rR.has(w)?a=[...a,...O]:a.push(O)}}else{c=0,o=0,a.length=0;break}}if(o){let g={isMatch:!0,score:c/o};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const uu=[];function oR(...t){uu.push(...t)}function du(t,e){for(let n=0,r=uu.length;n<r;n+=1){let i=uu[n];if(i.condition(t,e))return new i(t,e)}return new qh(t,e)}const Ra={AND:"$and",OR:"$or"},_u={PATH:"$path",PATTERN:"$val"},fu=t=>!!(t[Ra.AND]||t[Ra.OR]),sR=t=>!!t[_u.PATH],aR=t=>!Lr(t)&&jh(t)&&!fu(t),Ig=t=>({[Ra.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Jh(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=sR(i);if(!a&&o.length>1&&!fu(i))return r(Ig(i));if(aR(i)){const u=a?i[_u.PATH]:o[0],_=a?i[_u.PATTERN]:i[u];if(!dr(_))throw new Error(Tx(u));const v={keyId:lu(u),pattern:_};return n&&(v.searcher=du(_,e)),v}let c={children:[],operator:o[0]};return o.forEach(u=>{const _=i[u];Lr(_)&&_.forEach(v=>{c.children.push(r(v))})}),c};return fu(t)||(t=Ig(t)),r(t)}function lR(t,{ignoreFieldNorm:e=Ye.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function cR(t,e){const n=t.matches;e.matches=[],Tn(n)&&n.forEach(r=>{if(!Tn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function uR(t,e){e.score=t.score}function dR(t,e,{includeMatches:n=Ye.includeMatches,includeScore:r=Ye.includeScore}={}){const i=[];return n&&i.push(cR),r&&i.push(uR),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class vo{constructor(e,n={},r){this.options={...Ye,...n},this.options.useExtendedSearch,this._keyStore=new Mx(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof sd))throw new Error(Rx);this._myIndex=n||Xh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Tn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=dr(e)?dr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return lR(u,{ignoreFieldNorm:c}),o&&u.sort(a),Yh(n)&&n>-1&&(u=u.slice(0,n)),dR(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=du(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Tn(o))return;const{isMatch:u,score:_,indices:v}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:_,value:o,norm:c,indices:v}]})}),i}_searchLogical(e){const n=Jh(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:p}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:p});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const v=[];for(let g=0,p=c.children.length;g<p;g+=1){const m=c.children[g],E=r(m,u,_);if(E.length)v.push(...E);else if(c.operator===Ra.AND)return[]}return v},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Tn(c)){let _=r(n,c,u);_.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),_.forEach(({matches:v})=>{o[u].matches.push(...v)}))}}),a}_searchObjectList(e){const n=du(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Tn(a))return;let u=[];r.forEach((_,v)=>{u.push(...this._findMatches({key:_,value:a[v],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Tn(n))return[];let i=[];if(Lr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Tn(o))return;const{isMatch:u,score:_,indices:v}=r.searchIn(o);u&&i.push({score:_,key:e,value:o,idx:a,norm:c,indices:v})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:_})}return i}}vo.version="7.0.0";vo.createIndex=Xh;vo.parseIndex=zx;vo.config=Ye;vo.parseQuery=Jh;oR(iR);function Zr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function _R(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function fR(t){return new vo(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function gR(t,e,n){const r=_R(e,n);return t.length===0?r:fR(r).search(t).map(i=>i.item)}function hR(t,e){return Zr(t,e).shape}function en(t,e){const n=hR(t,e);return n?au(n):void 0}function Os(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return od(e)}function pR(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function Is(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return od(i)})}function vR(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return od(o)})})}function Rr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function ep(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Hh(e)}function mR(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Hh(r)})}function ER(t,e){const n=t.shape;return n===void 0?void 0:{...en(e,Rt),...n}}function tp(t,e,n){return{toolId:t,cells:e,value:n}}function CR(t,e){const n=Is(e,"cells"),r=Rr(e);return tp(t,n,r)}function np(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>Ke(o,e)&&a>=r)}function OR(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:Cs(r[i-1],e)))return t;const a=np(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function rp(t,e){return{toolId:t,cells:e,lines:[]}}function IR(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),xa(n),{...t,cells:n};const r=n.some(o=>Ke(o,e)),i=n.some(o=>Cs(o,e));return n.length>0&&!r&&i?(n.push(e),xa(n),{...t,cells:n}):t}function bR(t,e,n){const r=t.cells.some(_=>Ke(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return gu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return gu(t,e);const c=np(o,e,!1);return(o.length===0?!0:Cs(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function gu(t,e){return t.cells.some(r=>Ke(r,e))?{...t,lines:[...t.lines,[e]]}:t}function wR(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function yR(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function LR(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function AR(t,e){const n=Is(e,"cells"),r=vR(e),i=rp(t,n);return i.lines=r,i}function ip(t,e,n=""){return{toolId:t,cells:e,value:n}}function NR(t,e,n=!1){const r=zh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function SR(t,e){return{...t,value:e}}function xR(t,e){const n=Is(e,"cells"),r=Rr(e);return ip(t,n,r)}function op(t,e,n){return{toolId:t,cells:e,value:n}}function RR(t,e){const n=Is(e,"cells"),r=Rr(e);return op(t,n,r)}function sp(t,e,n){return{toolId:t,cells:e,value:n}}function TR(t,e){const n=Is(e,"cells"),r=Rr(e);return sp(t,n,r)}function ap(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function DR(t,e){const n=Os(e),r=ep(e),i=Rr(e);return ap(t,n,r,i)}function lp(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function kR(t,e){const n=Os(e),r=Rr(e);return lp(t,n,r)}function cp(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function GR(t,e){const n=Os(e),r=ep(e);return cp(t,n,r)}function up(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function MR(t,e){const n=Os(e),r=mR(e),i=up(t,n,Be.N);return i.directions=r,i}function dp(t,e,n=""){return{toolId:t,cell:e,value:n}}function UR(t,e){const n=Os(e),r=Rr(e);return dp(t,n,r)}function FR(t,e=""){return{toolId:t,value:e}}function $R(t,e){const n=Rr(e);return FR(t,n)}function PR(t,e,n=""){return{toolId:t,coords:e,value:n}}function HR(t,e){const n=pR(e,"coords"),r=Rr(e);return PR(t,n,r)}function bs(t,e){return{...t,value:e}}class mo extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(qR(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new mo;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=Ah(r);if(o===void 0||!Object.keys(Rt).includes(o))continue;const a=i;for(const c of a){let u=null;if(Nh(o,Ya)?u=kR(o,c):Hu(o)?u=GR(o,c):Bu(o)?u=MR(o,c):Wu(o)?u=TR(o,c):bh(o)?u=RR(o,c):zu(o)?u=CR(o,c):yh(o)?u=HR(o,c):Yu(o)?u=AR(o,c):ju(o)?u=xR(o,c):cs(o)?u=DR(o,c):Ub(o)?u=$R(o,c):wh(o)&&(u=UR(o,c)),u!==null){n.addToDict(o);const _=bt.uniqueId(),v=ER(c,o);u.shape=v,n.addConstraint(o,_,u)}}}return n}}function Ta(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ke(o.cell,n))return[a,o]}return null}function BR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>Ke(c,u))))return i}return null}function WR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(Ke(n,a))return i}return null}function bg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n)))return[i[0],o]}return null}function zR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Ke(c,n)))return i;return null}function wg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n)))return[i[0],o]}return null}function YR(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((_,v)=>Ke(_,n)&&v>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function jR(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(Ke(n,a.cell)&&r===a.direction)return c}return null}function VR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Ke(n,o.cell))return a}return null}function KR(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Ke(c,n))||o.cells2.some(c=>Ke(c,n)))return[i[0],o]}return null}function XR(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function qR(t){const e={};if("cells"in t){const n=t.cells.map(r=>Ia(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>Ia(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>Ia(i)));e.lines=n}if("cell"in t){const n=Ia(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=en(t.toolId,Rt),r=Bb(t.shape,n);r&&(e.shape=r)}return e}function yg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function _p(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function hu(t){const e=new Option().style;return e.color=t,e.color!==""}function Kc(t){return _p(t)||hu(t)?t:hu(`#${t}`)?`#${t}`:void 0}function Da(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function fp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function ka(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function ZR(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Lg={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function QR(t){return t in Lg?Lg[t]:null}function gp(t,e,n){if(n===null)return null;const r=QR(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function Xc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class JR{constructor(e,n){me(this,"r");me(this,"c");me(this,"outside",!1);me(this,"value",null);me(this,"given",!1);me(this,"region",null);me(this,"centerMarks",[]);me(this,"cornerMarks",[]);me(this,"highlights",[]);me(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=Xc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=Xc(this.cornerMarks,e))}enterHighlight(e){this.highlights=Xc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==gp(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Eo{constructor(e,n){me(this,"nCols");me(this,"nRows");me(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new JR(i,a);if(r){const u=gp(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return fp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=Qa(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Eo(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function eT(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=bt.range(1,o+1);t.valid_digits&&!ZR(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function tT(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=Eo.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=bt.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,v=t.local_constraints,g=mo.fromJson(v),p=t.bool_constraints,m=Ii.fromJson(p);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function vH(){const t=new Eo(9,9),e=new mo,n=new Ii;return{grid:t,solution:void 0,valid_digits:bt.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var Qo=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Qo||{});const nT=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),rT=()=>({type:"CLEAR"}),iT=t=>({type:"DRAG",payload:t}),pu=t=>({type:"SET",payload:t}),oT=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),ad=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),ur=(t,e,n)=>{const r=[...t];return xa(r),{cells:r,lastCell:e,mode:n}};function sT(t,e,n){if(e===null)return ad();if(n==="RESETTING")return ur([e],e,"SELECTING");const r=t.cells.findIndex(i=>Ke(e,i));if(n==="SELECTING")return r!==-1?t:ur([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),ur(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return ur([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),ur(i,null,"DESELECTING")}return t}function aT(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Ke(e,r));if(t.mode==="SELECTING")return n!==-1?t:ur([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),ur(r,null,t.mode)}return t}function lT(t,e){return{...t,cells:e}}function cT(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Ke(e,i))!==-1?ur([...t.cells],e,"SELECTING"):ur([...t.cells,e],e,"SELECTING"):ur([e],e,t.mode)}function hp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return ad();case"SET":return lT(t,e.payload);case"CLICK":return sT(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return aT(t,e.payload);case"ARROW_KEY":return cT(t,e.payload.cell,e.payload.selectionMode);default:return t}}function qi(t,e){return Ke(t.p1,e.p1)&&Ke(t.p2,e.p2)||Ke(t.p1,e.p2)&&Ke(t.p2,e.p1)}function uT(t,e){return Ke(t.p1,e.p2)&&Ke(t.p2,e.p1)}function pp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Ke(t,e)}class Ja{constructor(){me(this,"edgeMarkers",[]);me(this,"cellMarkers",[]);me(this,"lineMarkers",[]);me(this,"draftLine",[]);me(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Ke(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Ke(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Ke(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Ke(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ke(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Ke(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ke(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Ke(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Ke(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Ke(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>qi(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>qi(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&uT(r,e)&&this.draftLine.splice(n,1)}onDrag(e){pp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>qi(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>qi(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new Ja;return Object.assign(e,this),e}}const Ag=t=>({type:"ADD_EDGE_MARKER",payload:t}),Ng=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),ya=t=>({type:"ADD_CELL_MARKER",payload:t}),dT=t=>({type:"SET_CELL_MARKERS",payload:t}),Sg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),_T=t=>({type:"DRAG",payload:t}),us=t=>({type:"ADD_LINE_MARKERS",payload:t}),xg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),ld=()=>({type:"RESET"});function fT(t,e){switch(e.type){case"RESET":return new Ja;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function vp(){return{_undoStack:[],_redoStack:[]}}const Co=Bt(vp());function gT(){Co.update(()=>vp())}function dn(t,e=!0){Co.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function hT(t,e=!0){Co.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function mp(){Co.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Ep(){Co.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Ga=Bt(new Ja);function _r(t){Ga.update(e=>fT(e,t))}const Ma=Bt(1);function vi(t,e){return{execute:()=>{_r(t)},unExecute:()=>{_r(e)}}}const bi=Bt(ad());function Ki(t){t&&bi.update(e=>hp(e,t))}function Rg(t){t&&bi.update(e=>hp(e,t))}function pT(t,e){return{execute:()=>{Rg(t)},unExecute:()=>{Rg(e)}}}const Ji=Bt(null),el=Bt(io.SETTING),vu=Bt(!1),qt=Bt(d.DIGIT),Cp=Bt(d.DIGIT),cd=Bt(bt.range(1,10)),En=Bt(new Eo(9,9)),_n=Bt(ut(En).getAllCells()),Tr=Bt({}),Dr=Bt(new Ii),vt=Bt(new mo),fr=Bt(null),Op=Bt(void 0),tl=Bt(void 0);function vT(t){Tr.update(()=>t)}function Oo(t){fr.update(()=>t)}function ud(t){Op.update(()=>t)}function yr(t){ut(qt)!==t&&(qt.update(()=>t),Oo(null))}function mT(){const t=ut(Cp);t&&yr(t)}function mu(t){Cp.update(()=>t)}function ET(t){ut(qt)===t&&yr(d.DIGIT)}function CT(t){vt.update(e=>(e.removeFromDict(t),e)),ud(void 0)}function Ht(t,e,n){vt.update(r=>(r.updateConstraint(t,e,n),r)),Oo({id:e,constraint:n})}function qc(t){const e=ut(fr);if(t=t?{...t}:void 0,ud(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Ht(r,e.id,n)}function OT(t,e){const r=ut(vt).get(e);if(!r)return;const i=r[t];i&&Oo({id:t,constraint:i})}function IT(t,e,n){const r=new Eo(t,e);En.update(()=>r),cd.update(()=>n),vt.update(()=>new mo),Dr.update(()=>new Ii),Tr.update(()=>({})),dd(void 0),_n.update(()=>r.getAllCells())}function bT(t){En.update(()=>t.grid),Tr.update(()=>t.puzzleMeta),dd(t.solution),cd.update(()=>t.valid_digits),vt.update(()=>t.localConstraints),Dr.update(()=>t.globalConstraints),_n.update(()=>t.grid.getAllCells())}function Ip(){const t=ut(En);t.resetValues(),En.update(()=>t),_n.update(()=>t.getAllCells()),_r(ld())}function Ua(){gT(),_r(ld()),yr(d.DIGIT);const t=rT();Ki(t),ud(void 0),Oo(null)}const bp=ro([ei,qt,el],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===io.SETTING}),ws=ro([En,Tr,Dr,vt,tl,cd],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function dd(t){tl.update(()=>t)}var Xi=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Xi||{});const _d=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),fd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),wT=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),yT=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Tg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function wp(t){vt.update(e=>(e.addToDict(t),e))}function ii(t,e){const n=ut(Op);n&&(e.shape={...n}),vt.update(r=>(r.addConstraint(e.toolId,t,e),r)),Oo({id:t,constraint:e})}function wi(t,e){e&&vt.update(n=>(n.removeConstraint(t,e),n))}function LT(t,e){vt.update(n=>(n.setConstraints(t,e),n))}function Dg(t){t.type===Xi.ADD_LOCAL_CONSTRAINT?ii(t.payload.id,t.payload.constraint):t.type===Xi.REMOVE_LOCAL_CONSTRAINT?wi(t.payload.tool,t.payload.id):t.type===Xi.REMOVE_LOCAL_CONSTRAINT_GROUP?CT(t.payload.tool):t.type===Xi.RESTORE_LOCAL_CONSTRAINT_GROUP?LT(t.payload.tool,t.payload.constraints):t.type===Xi.UPDATE_LOCAL_CONSTRAINT&&Ht(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function ys(t,e){return{execute:()=>{Dg(t)},unExecute:()=>{Dg(e)}}}var AT=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function yp(t){var e=AT();R(t,e)}var NT=ie('<button class="remove-button svelte-17rdl63"><!></button>');function ST(t,e){let n=M(e,"onTrash",8,()=>{});var r=NT(),i=X(r);yp(i),W(r),Me("click",r,Kn(function(...o){var a;(a=n())==null||a.apply(this,o)})),R(t,r)}var xT=ie('<input type="radio" class="radio-select-button svelte-3561wl">'),RT=ie('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ts(t,e){var ee,ce;se(e,!1);const n=it(),r=()=>Ce(qt,"$toolStore",n),i=[];let o=M(e,"elementInfo",8),a=M(e,"onClick",12,void 0),c=M(e,"onTrash",8,void 0);const u=o().toolId,_=o().permanent??!1,v=((ee=o().menu)==null?void 0:ee.name)??o().toolId,g=!((ce=o().meta)!=null&&ce.categories.includes(N.GLOBAL_CONSTRAINT)),p=`label-${v}`;g&&a(()=>{yr(u)});function m(){var Oe,he;const te=(Oe=o().meta)==null?void 0:Oe.description,re=((he=o().meta)==null?void 0:he.usage)??tw(u);let Ee;return te&&te.length&&(Ee=te),re.length&&(Ee?Ee=Ee+`

`+re:Ee=re),Ee}pe();var E=RT(),O=X(E);{var I=te=>{var re=xT();Kt(re),L(re,"id",p),re.value=(re.__value=u)==null?"":u,za(i,[],re,()=>r(),Ee=>hs(qt,Ee)),R(te,re)};fe(O,te=>{g&&te(I)})}var w=F(O,2);J(()=>L(w,"title",m())),L(w,"aria-labelledby",p);var x=X(w),k=X(x),U=X(k);{var z=te=>{ST(te,{get onTrash(){return c()}})};fe(U,te=>{_||te(z)})}W(k);var j=F(k,2);L(j,"for",p),j.textContent=v,W(x);var H=F(x,2),q=X(H);ft(q,e,"default",{}),W(H),W(w),W(E),J(()=>yt(E,"checked",u===r())),Me("click",w,Kn(function(...te){var re;(re=a())==null||re.apply(this,te)})),R(t,E),ae()}function Lp(t,e){se(e,!1);const n=it(),r=()=>Ce(vt,"$localConstraintsStore",n);let i=M(e,"toolId",8),o=M(e,"elementHandlers",8);const a=()=>{ET(i());const u=r().get(i());if(!u)return;const _=wT(i()),v=yT(i(),u),g=ys(_,v);dn(g)};pe();var c=qe(()=>Zr(i(),o()));ts(t,{get elementInfo(){return h(c)},onTrash:a}),ae()}var TT=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function DT(t){var e=TT();R(t,e)}var kT=ie('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function nl(t,e){let n=M(e,"isOpen",8,!0);var r=kT(),i=X(r);ft(i,e,"default",{}),W(r),J(()=>{L(r,"aria-expanded",n()),yt(r,"closed",!n())}),R(t,r)}var GT=ie('<div class="constraint-button svelte-fgm6t3"><div class="left-side svelte-fgm6t3"> </div> <div class="right-side svelte-fgm6t3"><button class="remove-constraint-button svelte-fgm6t3"><!></button></div></div>');function MT(t,e){se(e,!1);const n=it(),r=()=>Ce(Ji,"$svgRefStore",n),i=()=>Ce(vt,"$localConstraintsStore",n),o=()=>Ce(fr,"$currentConstraintStore",n),a=T();let c=M(e,"constraintId",8),u=M(e,"toolId",8);function _(){OT(c(),u()),r()&&r().focus()}function v(){const w=i().getConstraint(u(),c());if(!w)return;const x=fd(c(),u()),k=_d(c(),w),U=ys(x,k);dn(U)}D(()=>o(),()=>{var w;A(a,(w=o())==null?void 0:w.id)}),Ie(),pe();var g=GT(),p=X(g),m=X(p);W(p);var E=F(p,2),O=X(E),I=X(O);yp(I),W(O),W(E),W(g),J(()=>{yt(g,"active",c()===h(a)),nt(m,`ID: ${c()??""}`)}),Me("click",O,Kn(v)),Me("click",g,_),R(t,g),ae()}var UT=ie('<div class="constraint-list svelte-w5npcu"></div>');function Ap(t,e){se(e,!1);const n=it(),r=()=>Ce(vt,"$localConstraintsStore",n),i=()=>Ce(qt,"$toolStore",n),o=T();let a=M(e,"toolId",8);D(()=>(r(),Z(a())),()=>{A(o,r().get(a()))}),Ie(),pe();var c=Se(),u=de(c);{var _=v=>{var g=qe(()=>a()===i());nl(v,{get isOpen(){return h(g)},children:(p,m)=>{var E=UT();st(E,5,()=>Object.entries(h(o)),O=>O[0],(O,I)=>{MT(O,{get constraintId(){return h(I)[0]},get toolId(){return a()}})}),W(E),R(p,E)},$$slots:{default:!0}})};fe(u,v=>{h(o)&&Object.entries(h(o)).length&&v(_)})}R(t,c),ae()}var FT=ie('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function $T(t,e){let n=M(e,"title",8),r=M(e,"closeCb",8);var i=FT(),o=X(i),a=X(o,!0);W(o);var c=F(o,2);W(i),J(()=>nt(a,n())),Me("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),R(t,i)}var PT=ie('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function kr(t,e){se(e,!1);let n=M(e,"showModal",12),r=M(e,"title",8),i=T();function o(){n(!1),h(i).close()}D(()=>(h(i),Z(n())),()=>{h(i)&&n()&&h(i).showModal()}),D(()=>(h(i),Z(n())),()=>{h(i)&&!n()&&h(i).close()}),Ie();var a=PT(),c=X(a),u=X(c);$T(u,{get title(){return r()},closeCb:o});var _=F(u,2),v=X(_),g=X(v);ft(g,e,"default",{}),W(v),W(_),W(c),W(a),Oi(a,p=>A(i,p),()=>h(i)),Me("click",c,Kn(function(p){Db.call(this,e,p)})),Me("close",a,()=>{n(!1)}),Me("click",a,Tb(Kn(()=>h(i).close()))),R(t,a),ae()}var HT=ie('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function BT(t,e){se(e,!1);let n=M(e,"searchPattern",12,""),r=M(e,"showModal",8),i=T(null);D(()=>(Z(r()),h(i)),()=>{r()&&h(i)&&h(i).focus()}),Ie();var o=HT(),a=F(X(o),2);Kt(a),L(a,"spellcheck",!1),Oi(a,c=>A(i,c),()=>h(i)),W(o),jn(a,n),R(t,o),ae()}var WT=ie('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function zT(t,e){let n=M(e,"showModal",12),r=M(e,"searchPattern",12,""),i=M(e,"title",8);kr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=WT(),u=X(c);BT(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(p){r(p)},$$legacy:!0});var _=F(u,2),v=X(_),g=X(v);ft(g,e,"default",{}),W(v),W(_),W(c),R(o,c)},$$slots:{default:!0},$$legacy:!0})}var YT=ie('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),jT=ie('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function qr(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0),i=M(e,"isCollapsible",8,!1);var o=Se(),a=de(o);{var c=_=>{var v=YT(),g=X(v),p=X(g),m=X(p,!0);W(p),W(g);var E=F(g,2),O=X(E);ft(O,e,"default",{}),W(E),W(v),J(()=>nt(m,n())),R(_,v)},u=_=>{var v=jT(),g=X(v),p=X(g),m=X(p,!0);W(p),W(g);var E=F(g,2),O=X(E);ft(O,e,"default",{});var I=F(O,2);W(E),W(v),J(()=>{nt(m,n()),yt(I,"open",r())}),Me("click",v,()=>r(!r())),R(_,v)};fe(a,_=>{i()?_(u,!1):_(c)})}R(t,o)}var VT=ie('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),KT=ie('<ol class="svelte-cd45on"></ol>'),XT=ie("<!> <!>",1);function qT(t,e){se(e,!1);const n=T();let r=M(e,"category",8),i=M(e,"addTool",8),o=M(e,"searchResults",8),a=T(!0);D(()=>(Z(o()),Z(r())),()=>{A(n,o().filter(v=>{var g,p;return(p=(g=v.info.meta)==null?void 0:g.categories)==null?void 0:p.includes(r())}))}),Ie(),pe();var c=Se(),u=de(c);{var _=v=>{var g=XT(),p=de(g);qr(p,{get title(){return r()},isCollapsible:!0,get isOpen(){return h(a)},set isOpen(E){A(a,E)},$$legacy:!0});var m=F(p,2);nl(m,{get isOpen(){return h(a)},children:(E,O)=>{var I=KT();st(I,5,()=>h(n),Lt,(w,x)=>{let k=()=>h(x).key,U=()=>h(x).info;var z=VT(),j=X(z),H=X(j,!0);W(j),W(z),J(()=>{var q;L(j,"title",(q=U().meta)==null?void 0:q.description),nt(H,k())}),Me("click",j,()=>{i()(k())}),R(w,z)}),W(I),R(E,I)},$$slots:{default:!0}}),R(v,g)};fe(u,v=>{h(n).length&&v(_)})}R(t,c),ae()}function ZT(t,e){se(e,!1);const n=T();let r=M(e,"searchPattern",8,""),i=M(e,"addTool",8),o=M(e,"categories",8),a=M(e,"filterFunc",8),c=M(e,"elementHandlers",8);D(()=>(Z(r()),Z(a()),Z(c())),()=>{A(n,gR(r(),a(),c()))}),Ie(),pe();var u=Se(),_=de(u);st(_,1,o,Lt,(v,g)=>{qT(v,{get category(){return h(g)},get searchResults(){return h(n)},get addTool(){return i()}})}),R(t,u),ae()}var QT=ie('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function rl(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8);var i=QT();L(i,"tabindex",0);var o=X(i),a=X(o);ft(a,e,"add-button",{}),W(o);var c=F(o,2),u=X(c),_=X(u);ft(_,e,"title-icon",{}),W(u);var v=F(u);W(c);var g=F(c,2),p=X(g);W(g),W(i),J(()=>{nt(v,` ${r()??""}`),yt(p,"open",n())}),Me("click",i,()=>n(!n())),Me("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),R(t,i)}var JT=ie('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function e2(t,e){let n=M(e,"isOpen",12),r=M(e,"title",8),i=M(e,"showModal",12);function o(){i(!i())}rl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=JT();Me("click",u,Kn(()=>o())),R(a,u)},"title-icon":(a,c)=>{var u=Se(),_=de(u);ft(_,e,"title-icon",{}),R(a,u)}},$$legacy:!0})}var t2=ie('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),n2=ie('<div class="panel-container svelte-hixu4"><!> <!></div>');function il(t,e){let n=M(e,"isOpen",8,!0);var r=n2(),i=X(r);ft(i,e,"panel-header",{});var o=F(i,2);nl(o,{get isOpen(){return n()},children:(a,c)=>{var u=t2(),_=X(u);ft(_,e,"panel-content",{}),W(u),R(a,u)},$$slots:{default:!0}}),W(r),R(t,r)}var r2=ie("<!> <!>",1);function gd(t,e){se(e,!1);let n=M(e,"categories",8),r=M(e,"title",8),i=M(e,"onAddTool",8),o=M(e,"elementHandlerFilterFunc",8),a=M(e,"elementHandlers",8),c=T(!0),u=T(!1),_=T("");const v=g=>{A(u,!1),A(c,!0),i()(g)};pe(),il(t,{get isOpen(){return h(c)},set isOpen(g){A(c,g)},$$slots:{"panel-header":(g,p)=>{var m=r2(),E=de(m);e2(E,{get title(){return r()},get isOpen(){return h(c)},set isOpen(I){A(c,I)},get showModal(){return h(u)},set showModal(I){A(u,I)},$$slots:{"title-icon":(I,w)=>{var x=Se(),k=de(x);ft(k,e,"title-icon",{}),R(I,x)}},$$legacy:!0});var O=F(E,2);zT(O,{get title(){return r()},get showModal(){return h(u)},set showModal(I){A(u,I)},get searchPattern(){return h(_)},set searchPattern(I){A(_,I)},children:(I,w)=>{ZT(I,{get searchPattern(){return h(_)},get categories(){return n()},get filterFunc(){return o()},addTool:v,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),R(g,m)},"panel-content":(g,p)=>{var m=Se(),E=de(m);ft(E,e,"panel-content",{}),R(g,m)}},$$legacy:!0}),ae()}var i2=ie("<!> <!>",1);function o2(t,e){se(e,!1);const n=it(),r=()=>Ce(vt,"$localConstraintsStore",n),i=T();let o=M(e,"elementHandlers",8);const a=[N.COSMETIC_TOOL],c=u=>{wp(u),yr(u)};D(()=>(r(),N),()=>{A(i,(u,_)=>{var p;const v=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(N.COSMETIC_TOOL))&&!v})}),Ie(),pe(),gd(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{DT(u)},"panel-content":(u,_)=>{var v=Se(),g=de(v);st(g,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let E=()=>h(m)[0];var O=Se(),I=de(O);{var w=x=>{var k=i2(),U=de(k);Lp(U,{get toolId(){return E()},get elementHandlers(){return o()}});var z=F(U,2);Ap(z,{get toolId(){return E()}}),R(x,k)};fe(I,x=>{Fb(E())&&x(w)})}R(p,O)}),R(u,v)}}}),ae()}var Np=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Np||{});const Na=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Sp=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function s2(t,e){Dr.update(n=>n.setConstraint(t,e))}function a2(t){Dr.update(e=>e.removeConstraint(t))}function kg(t){t.type===Np.REMOVE_GLOBAL_CONSTRAINT?a2(t.payload):s2(t.payload.tool,t.payload.value)}function Eu(t,e){return{execute:()=>{kg(t)},unExecute:()=>{kg(e)}}}var l2=ie('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function c2(t,e){let n=M(e,"value",8,!1);var r=l2(),i=X(r);Kt(i),W(r),J(()=>sh(i,n())),R(t,r)}function u2(t,e){se(e,!1);let n=M(e,"toolId",8),r=M(e,"value",8,!1),i=M(e,"elementHandlers",8);const o=()=>{const u=Na(n(),!r()),_=Na(n(),r()),v=Eu(u,_);dn(v)},a=()=>{const u=Sp(n()),_=Na(n(),r()),v=Eu(u,_);dn(v)};pe();var c=qe(()=>Zr(n(),i()));ts(t,{get elementInfo(){return h(c)},onClick:o,onTrash:a,children:(u,_)=>{c2(u,{get value(){return r()}})},$$slots:{default:!0}}),ae()}var d2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function _2(t){var e=d2();R(t,e)}function f2(t,e){se(e,!1);const n=it(),r=()=>Ce(Dr,"$globalConstraintsStore",n),i=T();let o=M(e,"elementHandlers",8);const a=Pb,c=u=>{const _=Na(u,!0),v=Sp(u),g=Eu(_,v);dn(g)};D(()=>r(),()=>{A(i,(u,_)=>{var p;const v=!!((p=_.meta)!=null&&p.categories.includes(N.GLOBAL_CONSTRAINT)),g=r().has(u);return v&&!g})}),Ie(),pe(),gd(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{_2(u)},"panel-content":(u,_)=>{var v=Se(),g=de(v);st(g,1,()=>r().entries(),([p,m])=>p,(p,m)=>{let E=()=>h(m)[0],O=()=>h(m)[1];u2(p,{get toolId(){return E()},get value(){return O()},get elementHandlers(){return o()}})}),R(u,v)}}}),ae()}var g2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function h2(t){var e=g2();R(t,e)}var p2=ie("<!> <!>",1),v2=ie("<!> <!> <!> <!>",1);function m2(t,e){se(e,!1);const n=it(),r=()=>Ce(vt,"$localConstraintsStore",n),i=T();let o=M(e,"elementHandlers",8);const a=$b,c=u=>{wp(u),yr(u)};D(()=>(r(),N),()=>{A(i,(u,_)=>{var p;const v=r().has(u);return!!((p=_.meta)!=null&&p.categories.includes(N.LOCAL_CONSTRAINT))&&!v})}),Ie(),pe(),gd(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{h2(u)},"panel-content":(u,_)=>{var v=v2(),g=de(v),p=qe(()=>Zr(d.GIVEN,o()));ts(g,{get elementInfo(){return h(p)}});var m=F(g,2),E=qe(()=>Zr(d.REGIONS,o()));ts(m,{get elementInfo(){return h(E)}});var O=F(m,2),I=qe(()=>Zr(d.FOG,o()));ts(O,{get elementInfo(){return h(I)}});var w=F(O,2);st(w,1,()=>r().entries(),([x,k])=>x,(x,k)=>{let U=()=>h(k)[0];var z=Se(),j=de(z);{var H=q=>{var ee=p2(),ce=de(ee);Lp(ce,{get toolId(){return U()},get elementHandlers(){return o()}});var te=F(ce,2);Ap(te,{get toolId(){return U()}}),R(q,ee)};fe(j,q=>{Gb(U())&&q(H)})}R(x,z)}),R(u,v)}}}),ae()}var E2=ie('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Zc(t,e){se(e,!1);const n=T();let r=M(e,"value",8),i=M(e,"onChangeCb",8,void 0),o=T(void 0);function a(m){const E=Kc(m);E&&i()&&i()(E)}D(()=>Z(r()),()=>{A(n,r())}),D(()=>(h(n),Kc),()=>{hu(h(n))&&A(o,Kc(h(n)))}),Ie(),pe();var c=E2(),u=X(c);const _=qe(()=>_p(h(n)));var v=X(u);Kt(v),W(u);var g=F(u,2),p=F(X(g),2);Kt(p),L(p,"spellcheck",!1),L(p,"maxlength",30),W(g),W(c),J(()=>{L(u,"style",`--choosen-color: ${h(o)??""}`),yt(u,"transparent",h(_))}),jn(v,()=>h(n),m=>A(n,m)),Me("change",v,()=>a(h(n))),jn(p,()=>h(n),m=>A(n,m)),Me("input",p,()=>a(h(n))),R(t,c),ae()}var C2=ie('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ns(t,e){let n=M(e,"name",8);var r=C2(),i=X(r),o=X(i,!0);W(i);var a=F(i,2);ft(a,e,"default",{}),W(r),J(()=>nt(o,n())),R(t,r)}var O2=ie('<input class="control-slider svelte-1rsuho6" type="range">');function I2(t,e){se(e,!1);let n=M(e,"min",8),r=M(e,"max",8),i=M(e,"value",12),o=M(e,"step",24,()=>(r()-n())/10),a=M(e,"onChangeCb",8,void 0),c=M(e,"onInputCb",8,void 0);pe();var u=O2();Kt(u),J(()=>{L(u,"min",n()),L(u,"max",r()),L(u,"step",o())}),jn(u,i),Me("change",u,()=>{a()&&a()(i())}),Me("input",u,()=>{c()&&c()(i())}),R(t,u),ae()}function Vr(t,e){let n=M(e,"name",8),r=M(e,"value",12),i=M(e,"min",8),o=M(e,"max",8),a=M(e,"step",24,()=>(o()-i())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);ns(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,v)=>{I2(_,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var b2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function w2(t){var e=b2();R(t,e)}var y2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function L2(t){var e=y2();R(t,e)}var A2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function N2(t){var e=A2();R(t,e)}var S2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function x2(t){var e=S2();R(t,e)}var R2=ie('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function T2(t,e){se(e,!1);const n=[];let r=M(e,"value",8),i=M(e,"selectedShape",12),o=M(e,"title",8),a=M(e,"updateShapeCb",8,void 0);pe();var c=R2(),u=X(c);Kt(u);var _,v=F(u,2);ft(v,e,"default",{}),W(c),J(()=>{L(c,"title",o()),yt(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),za(n,[],u,()=>(r(),i()),i),Me("change",u,()=>a()&&a()(r())),R(t,c),ae()}var D2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function k2(t){var e=D2(),n=X(e);L(n,"cx",480),L(n,"cy",-480),L(n,"rx",480),L(n,"ry",300),W(e),R(t,e)}var G2=ie('<div class="icon-wrapper svelte-18euf14"><!></div>'),M2=ie('<div class="radio-container svelte-18euf14"></div>');function U2(t,e){se(e,!1);let n=M(e,"name",8),r=M(e,"selectedShape",8),i=M(e,"possibleShapes",8),o=M(e,"updateShapeCb",8,void 0);const a=new Map([[P.CIRCLE,N2],[P.ELLIPSE,k2],[P.SQUARE,L2],[P.RECTANGLE,w2],[P.POLYGON,x2]]);pe(),ns(t,{get name(){return n()},children:(c,u)=>{var _=M2();st(_,5,i,Lt,(v,g)=>{T2(v,{get title(){return h(g)},get value(){return h(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(p,m)=>{var E=Se(),O=de(E);{var I=w=>{var x=G2(),k=X(x);lh(k,()=>a.get(h(g)),(U,z)=>{z(U,{})}),W(x),R(w,x)};fe(O,w=>{a.has(h(g))&&w(I)})}R(p,E)},$$slots:{default:!0}})}),W(_),R(c,_)},$$slots:{default:!0}}),ae()}var F2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function $2(t){var e=F2();R(t,e)}var P2=ie('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),H2=ie("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function B2(t,e){se(e,!1);const n=it(),r=()=>Ce(qt,"$toolStore",n),i=()=>Ce(fr,"$currentConstraintStore",n),o=T(),a=T(),c=T();let u=T(!0),_=M(e,"elementHandlers",8);function v(I,w){const x=(I==null?void 0:I.shape)??(w?au(w):void 0);return qc(x),x}function g(I,w){h(c)&&(hb(c,h(c)[I]=w),qc(h(c)))}function p(){h(a)&&(A(c,au(h(a))),qc(h(c)))}function m(I){return I&&[P.CIRCLE,P.SQUARE,P.POLYGON,P.LINE_WITH_POLYGON_ENDS].includes(I)}function E(I){return I&&[P.POLYGON,P.LINE_WITH_POLYGON_ENDS].includes(I)}function O(I){return I&&[P.ELLIPSE,P.RECTANGLE].includes(I)}D(()=>(r(),Z(_())),()=>{A(o,Zr(r(),_()))}),D(()=>h(o),()=>{A(a,h(o).shape)}),D(()=>(i(),h(a)),()=>{var I;A(c,v(((I=i())==null?void 0:I.constraint)??null,h(a)))}),Ie(),pe(),il(t,{get isOpen(){return h(u)},set isOpen(I){A(u,I)},$$slots:{"panel-header":(I,w)=>{rl(I,{slot:"panel-header",title:"Shape Editor",get isOpen(){return h(u)},set isOpen(x){A(u,x)},$$slots:{"title-icon":(x,k)=>{$2(x)}},$$legacy:!0})},"panel-content":(I,w)=>{var x=Se(),k=de(x);{var U=z=>{var j=H2(),H=de(j);{var q=Te=>{var be=P2();Me("click",be,p),R(Te,be)};fe(H,Te=>{Hb(h(a))&&Te(q)})}var ee=F(H,2);{var ce=Te=>{U2(Te,{get possibleShapes(){return h(a).allowedTypes},name:"Shape",get selectedShape(){return h(c).type},updateShapeCb:be=>g("type",be)})};fe(ee,Te=>{var be;h(a).allowedTypes&&h(a).allowedTypes.length&&((be=h(c))!=null&&be.type)&&Te(ce)})}var te=F(ee,2);{var re=Te=>{var be=qe(()=>h(a).n.lb??3),ke=qe(()=>h(a).n.ub??10);Vr(Te,{name:"Number of Sides",get value(){return h(c).n},get min(){return h(be)},get max(){return h(ke)},step:1,onChangeCb:Re=>g("n",Re)})};fe(te,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.n)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.n)!=null&&Re.editable)&&E(h(c).type)&&Te(re)})}var Ee=F(te,2);{var Oe=Te=>{var be=qe(()=>h(a).r.lb??0),ke=qe(()=>h(a).r.ub??1),Re=qe(()=>h(a).r.step??.05);Vr(Te,{name:"Radius",get value(){return h(c).r},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:Nt=>g("r",Nt)})};fe(Ee,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.r)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.r)!=null&&Re.editable)&&m(h(c).type)&&Te(Oe)})}var he=F(Ee,2);{var Ue=Te=>{var be=qe(()=>h(a).width.lb??0),ke=qe(()=>h(a).width.ub??1),Re=qe(()=>h(a).width.step??.05);Vr(Te,{name:"Width",get value(){return h(c).width},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:Nt=>g("width",Nt)})};fe(he,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.width)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.width)!=null&&Re.editable)&&O(h(c).type)&&Te(Ue)})}var Qe=F(he,2);{var Ne=Te=>{var be=qe(()=>h(a).height.lb??0),ke=qe(()=>h(a).height.ub??1),Re=qe(()=>h(a).height.step??.05);Vr(Te,{name:"Height",get value(){return h(c).height},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:Nt=>g("height",Nt)})};fe(Qe,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.height)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.height)!=null&&Re.editable)&&O(h(c).type)&&Te(Ne)})}var Le=F(Qe,2);{var lt=Te=>{var be=qe(()=>h(a).angle.lb??0),ke=qe(()=>h(a).angle.ub??360),Re=qe(()=>h(a).angle.step??15);Vr(Te,{name:"Angle",get value(){return h(c).angle},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:Nt=>g("angle",Nt)})};fe(Le,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.angle)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.angle)!=null&&Re.editable)&&Te(lt)})}var ze=F(Le,2);{var gn=Te=>{var be=qe(()=>h(a).inset.lb??0),ke=qe(()=>h(a).inset.ub??.5),Re=qe(()=>h(a).inset.step??.01);Vr(Te,{name:"Inset",get value(){return h(c).inset},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:Nt=>g("inset",Nt)})};fe(ze,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.inset)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.inset)!=null&&Re.editable)&&Te(gn)})}var bn=F(ze,2);{var Mr=Te=>{ns(Te,{name:"Stroke",children:(be,ke)=>{Zc(be,{get value(){return h(c).stroke},onChangeCb:Re=>g("stroke",Re)})},$$slots:{default:!0}})};fe(bn,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.stroke)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.stroke)!=null&&Re.editable)&&Te(Mr)})}var tn=F(bn,2);{var hr=Te=>{var be=qe(()=>h(a).strokeWidth.lb??0),ke=qe(()=>h(a).strokeWidth.ub??.8),Re=qe(()=>h(a).strokeWidth.step??.01);Vr(Te,{name:"Stroke Width",get value(){return h(c).strokeWidth},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:Nt=>g("strokeWidth",Nt)})};fe(tn,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.strokeWidth)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.strokeWidth)!=null&&Re.editable)&&Te(hr)})}var si=F(tn,2);{var or=Te=>{var be=qe(()=>h(a).strokeDasharray.lb??0),ke=qe(()=>h(a).strokeDasharray.ub??1),Re=qe(()=>h(a).strokeDasharray.step??.01);Vr(Te,{name:"Stroke Dasharray",get value(){return h(c).strokeDasharray},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Re)},onChangeCb:Nt=>g("strokeDasharray",Nt)})};fe(si,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.strokeDasharray)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.strokeDasharray)!=null&&Re.editable)&&Te(or)})}var Un=F(si,2);{var Ri=Te=>{ns(Te,{name:"Fill",children:(be,ke)=>{Zc(be,{get value(){return h(c).fill},onChangeCb:Re=>g("fill",Re)})},$$slots:{default:!0}})};fe(Un,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.fill)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.fill)!=null&&Re.editable)&&Te(Ri)})}var Ur=F(Un,2);{var Dt=Te=>{ns(Te,{name:"Font Color",children:(be,ke)=>{Zc(be,{get value(){return h(c).fontColor},onChangeCb:Re=>g("fontColor",Re)})},$$slots:{default:!0}})};fe(Ur,Te=>{var be,ke,Re;((be=h(c))==null?void 0:be.fontColor)!==void 0&&((Re=(ke=h(a))==null?void 0:ke.fontColor)!=null&&Re.editable)&&Te(Dt)})}R(z,j)};fe(k,z=>{h(a)&&z(U)})}R(I,x)}},$$legacy:!0}),ae()}var W2=ie('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ls(t,e){let n=M(e,"clickCb",8),r=M(e,"title",8);var i=W2(),o=X(i),a=X(o);ft(a,e,"default",{}),W(o),W(i),J(()=>L(i,"title",r())),Me("click",i,Kn(function(...c){var u;(u=n())==null||u.apply(this,c)})),R(t,i)}var z2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function Y2(t){var e=z2();R(t,e)}var j2=ie('<div class="buttons-container svelte-kc00rw"><!></div>');function ol(t,e){var n=j2(),r=X(n);ft(r,e,"default",{}),W(n),R(t,n)}var V2=ie('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),K2=ie('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),X2=ie('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function q2(t,e){se(e,!1);const n=it(),r=()=>Ce(Tr,"$puzzleMetaStore",n),i=()=>Ce(Dr,"$globalConstraintsStore",n),o=()=>Ce(vt,"$localConstraintsStore",n);let a=M(e,"showModal",12,!1),c=T(""),u=T(""),_=T(""),v=T(""),g=T("");function p(){a(!1)}function m(){const w=h(u)?E(h(u)):["Anonymous"],k={title:h(c)?h(c):"Sudoku",authors:w,ruleset:h(_),ctcYoutubeUrl:h(v),ctcUrl:h(g)};vT(k),a(!1)}function E(w){return w.split(/\s*[;]\s*/)}function O(){var j,H,q,ee;let w="";const x=Rt,k=i();!!k.get(d.SUDOKU_RULES_DO_NOT_APPLY)?w+=`Sudoku rules do not apply.

`:w+=`Sudoku rules apply.

`;for(const[ce,te]of k.entries())if(ce!==d.SUDOKU_RULES_DO_NOT_APPLY&&te){const re=x[ce],Ee=((j=re.menu)==null?void 0:j.name)??re.toolId,Oe=(H=re.meta)==null?void 0:H.description;w+=`**${Ee}**: ${Oe}

`}const z=o();for(const[ce,te]of z.entries())if(Object.keys(te).length>0){const Ee=x[ce],Oe=((q=Ee.menu)==null?void 0:q.name)??Ee.toolId,he=(ee=Ee.meta)==null?void 0:ee.description;w+=`**${Oe}**: ${he}

`}return w.trim()}function I(){const w=O();A(_,w)}D(()=>(Z(a()),r(),Da),()=>{if(!a()){const w=r().authors;A(c,r().title??""),A(u,w?Da(w,"; ","; "):""),A(_,r().ruleset??""),A(v,r().ctcYoutubeUrl??""),A(g,r().ctcUrl??"")}}),Ie(),pe(),kr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(w){a(w)},children:(w,x)=>{var k=X2(),U=X(k);qr(U,{title:"Title"});var z=F(U,2);Kt(z);var j=F(z,2);qr(j,{title:"Authors"});var H=F(j,2);Kt(H);var q=F(H,2);qr(q,{title:"Ruleset",children:(he,Ue)=>{var Qe=V2();Me("click",Qe,I),R(he,Qe)},$$slots:{default:!0}});var ee=F(q,2);tb(ee),L(ee,"rows",8);var ce=F(ee,2);qr(ce,{title:"CTC Link"});var te=F(ce,2);Kt(te);var re=F(te,2);qr(re,{title:"CTC Youtube Link"});var Ee=F(re,2);Kt(Ee);var Oe=F(Ee,2);ol(Oe,{children:(he,Ue)=>{var Qe=K2(),Ne=de(Qe),Le=F(Ne,2);Me("click",Ne,m),Me("click",Le,p),R(he,Qe)},$$slots:{default:!0}}),W(k),jn(z,()=>h(c),he=>A(c,he)),jn(H,()=>h(u),he=>A(u,he)),jn(ee,()=>h(_),he=>A(_,he)),jn(te,()=>h(g),he=>A(g,he)),jn(Ee,()=>h(v),he=>A(v,he)),R(w,k)},$$slots:{default:!0},$$legacy:!0}),ae()}var Z2=ie("<!> <!>",1);function Q2(t){let e=T(!1);function n(){A(e,!0)}var r=Z2(),i=de(r);Ls(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{Y2(a)},$$slots:{default:!0}});var o=F(i,2);q2(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var J2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function eD(t){var e=J2();R(t,e)}var tD=ie('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function nD(t,e){se(e,!1);let n=T(null),r=T(null);function i(){var o;(o=h(n))==null||o.click()}D(()=>(h(r),Ua),()=>{if(h(r)&&h(r).length){const o=h(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),v=tT(_);console.log(v),bT(v),Ua()}},a.onerror=function(){alert(a.error)}}}),Ie(),pe(),Ls(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=tD(),u=de(c);eD(u);var _=F(u,2);Oi(_,v=>A(n,v),()=>h(n)),Rb(_,()=>h(r),v=>A(r,v)),R(o,c)},$$slots:{default:!0}}),ae()}var rD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function iD(t){var e=rD();R(t,e)}var oD=ie('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Gg(t,e){se(e,!1);let n=M(e,"name",8),r=M(e,"min",8),i=M(e,"max",8),o=M(e,"value",12),a=M(e,"step",24,()=>(i()-r())/10),c=M(e,"onChangeCb",8,void 0),u=M(e,"onInputCb",8,void 0);pe();var _=oD(),v=X(_),g=X(v);W(v);var p=F(v,2);Kt(p),W(_),J(()=>{nt(g,`${n()??""}: ${o()??""}`),L(p,"min",r()),L(p,"max",i()),L(p,"step",a())}),jn(p,o),Me("change",p,()=>{c()&&c()(o())}),Me("input",p,()=>{u()&&u()(o())}),R(t,_),ae()}var sD=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),aD=ie('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function lD(t,e){se(e,!1);let n=M(e,"showModal",12,!1);const r=4,i=20;let o=T(9),a=T(9),c=T(""),u=T(bt.range(1,10));function _(){n(!1)}function v(){Ua(),IT(h(a),h(o),h(u).sort()),n(!1)}function g(E){return E.map(I=>String(I)).join(",")}function p(){const E=Math.min(Math.max(h(a),h(o)),9);A(u,bt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&A(u,E.replaceAll(" ","").split(",").map(Number))}pe(),kr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,O)=>{var I=aD(),w=X(I);Gg(w,{name:"Width",min:r,max:i,step:1,onInputCb:p,get value(){return h(o)},set value(H){A(o,H)},$$legacy:!0});var x=F(w,2);Gg(x,{name:"Height",min:r,max:i,step:1,onInputCb:p,get value(){return h(a)},set value(H){A(a,H)},$$legacy:!0});var k=F(x,2),U=qe(()=>`Allowed Digits (for the solver): ${g(h(u))}`);qr(k,{get title(){return h(U)}});var z=F(k,2);Kt(z),J(()=>L(z,"placeholder",g(h(u))));var j=F(z,2);ol(j,{children:(H,q)=>{var ee=sD(),ce=de(ee),te=F(ce,2);Me("click",ce,v),Me("click",te,_),R(H,ee)},$$slots:{default:!0}}),W(I),jn(z,()=>h(c),H=>A(c,H)),Me("input",z,()=>m(h(c))),R(E,I)},$$slots:{default:!0},$$legacy:!0}),ae()}var cD=ie("<!> <!>",1);function uD(t){let e=T(!1);function n(){A(e,!0)}var r=cD(),i=de(r);Ls(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{iD(a)},$$slots:{default:!0}});var o=F(i,2);lD(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var dD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function _D(t){var e=dD();R(t,e)}var fD=ie('<button class="modal-button">Cancel</button>'),gD=ie('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function hD(t,e){se(e,!1);const n=it(),r=()=>Ce(Ji,"$svgRefStore",n),i=()=>Ce(Tr,"$puzzleMetaStore",n),o=()=>Ce(ws,"$puzzleStore",n),a=T();let c=M(e,"showModal",12,!1);function u(I){const w=getComputedStyle(I);let x="";for(let k of w){const U=w.getPropertyValue(k);U&&(x+=`${k}:${U};`)}return x}function _(I){const w=I.cloneNode(!0);(w instanceof SVGElement||w instanceof HTMLElement)&&(w.style.cssText=u(I));const x=I.childNodes;for(let k=0;k<x.length;k++){const U=x[k];if(U instanceof Element){const z=_(U);w.replaceChild(z,w.childNodes[k])}}return w}function v(I){if(!I)return;const w=_(I),x=ka(i()),U=new XMLSerializer().serializeToString(w),z=new Image,j=new Blob([U],{type:"image/svg+xml;charset=utf-8"}),H=URL.createObjectURL(j);z.onload=()=>{const q=I.getBoundingClientRect(),ee=q.width,ce=q.height,te=document.createElement("canvas"),re=window.devicePixelRatio||1;te.width=ee*re,te.height=ce*re;const Ee=te.getContext("2d");Ee&&(Ee.scale(re,re),Ee.drawImage(z,0,0,ee,ce),te.toBlob(Oe=>{if(!Oe)return;const he=URL.createObjectURL(Oe),Ue=document.createElement("a");Ue.href=he,Ue.download=x,Ue.click(),URL.revokeObjectURL(he)}))},z.src=H}function g(I,w="download.svg"){if(!I)return;const x=_(I);let U=new XMLSerializer().serializeToString(x);U.includes("<?xml")||(U=`<?xml version="1.0" standalone="no"?>\r
`+U);const z=new Blob([U],{type:"image/svg+xml"}),j=URL.createObjectURL(z),H=document.createElement("a");H.href=j,H.download=w,H.click(),URL.revokeObjectURL(j)}const p=()=>{const I=eT(o());return JSON.stringify(I,null,2)},m=()=>{function I(k,U,z){var j=document.createElement("a"),H=new Blob([k],{type:z});j.href=URL.createObjectURL(H),j.download=U,j.click(),URL.revokeObjectURL(j.href)}const w=p(),x=ka(i());I(w,`${x}.json`,"text/plain")};function E(){c(!1)}const O=1;D(()=>r(),()=>{A(a,r())}),Ie(),pe(),kr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(I){c(I)},children:(I,w)=>{var x=gD(),k=X(x),U=X(k),z=X(U),j=F(z,2),H=F(j,2);W(U);var q=F(U,2),ee=F(X(q),2),ce=X(ee);L(ce,"width",400*O),L(ce,"height",300*O),W(ee),W(q),W(k);var te=F(k,2);ol(te,{children:(re,Ee)=>{var Oe=fD();Me("click",Oe,E),R(re,Oe)},$$slots:{default:!0}}),W(x),Me("click",z,m),Me("click",j,()=>v(h(a))),Me("click",H,()=>g(h(a))),R(I,x)},$$slots:{default:!0},$$legacy:!0}),ae()}var pD=ie("<!> <!>",1);function vD(t){let e=T(!1);function n(){A(e,!0)}var r=pD(),i=de(r);Ls(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{_D(a)},$$slots:{default:!0}});var o=F(i,2);hD(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var mD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function xp(t){var e=mD();R(t,e)}var ED=ie('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),CD=ie('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function La(t,e){let n=M(e,"title",8),r=M(e,"isOpen",12,!0);var i=CD(),o=X(i);qr(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=F(o,2);nl(a,{get isOpen(){return r()},children:(c,u)=>{var _=ED(),v=X(_);ft(v,e,"default",{}),W(_),R(c,_)},$$slots:{default:!0}}),W(i),R(t,i)}var OD=ie('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function ID(t,e){let n=M(e,"value",8),r=M(e,"onClickCb",8),i=M(e,"disabled",8,!1);var o=OD(),a=X(o);Kt(a),Qi(2),W(o),J(()=>{yt(o,"disabled",i()),sh(a,n()),a.disabled=i()}),Me("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,o)}var bD=ie('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Kr(t,e){se(e,!1);let n=M(e,"value",8),r=M(e,"name",8),i=M(e,"updateCb",8,void 0),o=M(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}pe();var c=bD(),u=X(c);ID(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var _=F(u,2),v=X(_,!0);W(_),W(c),J(()=>{yt(c,"disabled",o()),nt(v,r())}),Me("click",_,Kn(a)),R(t,c),ae()}var wD=ie("<!> <!>",1),yD=ie("<!> <!> <!>",1),LD=ie("<!> <!>",1),AD=ie('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Rp(t,e){se(e,!1);const n=it(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce(el,"$gameModeStore",n),o=T();let a=M(e,"showModal",12,!1);D(()=>r(),()=>{A(o,r())}),Ie(),pe(),kr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=AD(),v=X(_);La(v,{title:"General",children:(O,I)=>{Kr(O,{get value(){return h(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:pb})},$$slots:{default:!0}});var g=F(v,2);La(g,{title:"Tools",children:(O,I)=>{var w=wD(),x=de(w);Kr(x,{get value(){return h(o).penToolActive},name:"Pen Tool",updateCb:vb});var k=F(x,2);Kr(k,{disabled:!0,get value(){return h(o).letterToolActive},name:"Letter Tool",updateCb:mb}),R(O,w)},$$slots:{default:!0}});var p=F(g,2);La(p,{title:"Gameplay",children:(O,I)=>{var w=yD(),x=de(w);Kr(x,{name:"Check Conflicts",get value(){return h(o).checkConflicts},updateCb:Eb});var k=F(x,2);Kr(k,{name:"Highlight Pencilmark Conflicts",get value(){return h(o).highlightPencilmarkConflicts},updateCb:Cb});var U=F(k,2);Kr(U,{name:"Highlight Cells Seen By Selection",get value(){return h(o).highlightCellsSeenBySelection},updateCb:Ob}),R(O,w)},$$slots:{default:!0}});var m=F(p,2);{var E=O=>{La(O,{title:"Setting Mode Display",children:(I,w)=>{var x=LD(),k=de(x);Kr(k,{name:"Hide Fog",get value(){return h(o).hideFog},updateCb:Ib});var U=F(k,2);Kr(U,{name:"Show Solution",get value(){return h(o).showSolution},updateCb:bb}),R(I,x)},$$slots:{default:!0}})};fe(m,O=>{i()===io.SETTING&&O(E)})}W(_),R(c,_)},$$slots:{default:!0},$$legacy:!0}),ae()}var ND=ie("<!> <!>",1);function SD(t){let e=T(!1);function n(){A(e,!0)}var r=ND(),i=de(r);Ls(i,{title:"Settings",clickCb:n,children:(a,c)=>{xp(a)},$$slots:{default:!0}});var o=F(i,2);Rp(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var xD=ie('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function RD(t){var e=xD(),n=X(e);uD(n);var r=F(n,2);vD(r);var i=F(r,2);nD(i,{});var o=F(i,2);Q2(o);var a=F(o,2);SD(a),W(e),R(t,e)}var TD=ie('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function DD(t,e){se(e,!1);let n=T(!1);function r(){const i=ut(En),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const v=_.value;c.push(v)}o.push(c)}dd(o)}pe(),il(t,{get isOpen(){return h(n)},set isOpen(i){A(n,i)},$$slots:{"panel-header":(i,o)=>{rl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return h(n)},set isOpen(a){A(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=TD();Me("click",a,r),R(i,a)}},$$legacy:!0}),ae()}const kD={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function GD(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function MD(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function UD(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Tp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function FD(t,e){const n=parseInt(t);if(typeof n=="number"&&!Number.isNaN(n))return{type:"number",parsed:n};const r=MD(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=UD(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=GD(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=Tp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var Y=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(Y||{});function _t(t,e){return`${e}[${t.r},${t.c}]`}function Io(t,e){return t.map(r=>_t(r,e))}function ve(t,e){return"["+Io(t,e).join(",")+"]"}function we(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function at(t){return t.map(n=>we(n))}function Ei(t){return`constraint alldifferent([${t.join(",")}]);
`}function dt(t,e){return t&&(t=`
% ${e}
`+t),t}function sl(t,e){const n=[Be.N,Be.S,Be.W,Be.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function hd(t,e,n=void 0){n||(n=[Be.N,Be.S,Be.W,Be.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+at(o).join(",")+"]";r.push(a)}return r}function al(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class $D{constructor(e){me(this,"model_str","");me(this,"used_vars");me(this,"puzzle");me(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=kD){const i=FD(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];o+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];o+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}return i.type==="var_list"?null:[o,n]}}function PD(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/;let a=null,c=0,u=0;for(let O=0;O<e.length;O++){const I=e[O].trim(),w=I.match(r),x=I.match(i),k=I.match(o);if(w||x||k){a={name:(w||x||k)[1],startLine:O,content:[e[O]]},c=(I.match(/\(/g)||[]).length-(I.match(/\)/g)||[]).length,u=(I.match(/\{/g)||[]).length-(I.match(/\}/g)||[]).length;continue}if(a&&(a.content.push(e[O]),c+=(I.match(/\(/g)||[]).length-(I.match(/\)/g)||[]).length,u+=(I.match(/\{/g)||[]).length-(I.match(/\}/g)||[]).length,c===0&&u===0&&I.endsWith(";"))){n[a.name]={startLine:a.startLine,endLine:O,name:a.name,content:a.content};let U=a.startLine;for(;U>0&&e[U-1].trim().startsWith("%");)U-=1;n[a.name].startLine=U,a=null}}const _=new Set;function v(O){const I=[];for(const w of Object.keys(n))!O.includes("function")&&!O.includes("predicate")&&!O.includes("test")&&new RegExp(`\\b${w}\\s*\\(`,"g").test(O)&&I.push(w);return I}for(const O of e)v(O).forEach(w=>_.add(w));const g=Object.values(n).filter(O=>!_.has(O.name)).map(O=>({start:O.startLine,end:O.endLine}));g.sort((O,I)=>I.start-O.start);const p=[...e];for(const O of g)p.splice(O.start,O.end-O.start+1);const m=[];let E=!1;for(const O of p)O.trim()===""?E||(m.push(O),E=!0):(m.push(O),E=!1);return m.join(`
`)}function Mg(t){let e=t,n=e.length;for(;e=PD(e),e.length!=n;)n=e.length;return e}function Dp(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function HD(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const v=e.getCell(c,_);!v||v.region===null?u.push(r-1):u.push(v.region)}o.push(u)}const a=Dp(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function pd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Ft(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function BD(t,e){const r=t.grid.getPositiveDiagonal(),i=at(r);let o=Ei(i);return o=`
% Positive Diagonal Constraint
`+o,o}function WD(t,e){const r=t.grid.getNegativeDiagonal(),i=at(r);let o=Ei(i);return o=`
% Negative Diagonal Constraint
`+o,o}function zD(t,e){const r=t.grid.getPositiveDiagonal(),o="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function YD(t,e){const r=t.grid.getNegativeDiagonal(),o="["+at(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function jD(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),p=n.getCell(u,_+(u-v));if(!g||!p)continue;const m=we(g),E=we(p),I=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=I}}return o}function VD(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let v=0;v<u;v++){const g=n.getCell(v,_),p=n.getCell(u,_-(u-v));if(!g||!p)continue;const m=we(g),E=we(p),I=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=I}}return o}function KD(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),_=`constraint alldifferent(${`[${at(a).join(",")}]`});
`;r+=_}return r}function XD(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=we(i),_=`[${at(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function qD(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=we(i),_=`[${at(a).join(",")}]`,v=`constraint different_from_group_p(${c}, ${_});
`;r+=v}return r}function ZD(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=dt(n,`${e}`),n}function QD(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=dt(n,`${e}`),n}function JD(t,e){let n="";return n+=`constraint tango_p(board);
`,n=dt(n,`${e}`),n}function ek(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=dt(n,`${e}`),n}function*Gr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function tk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Gr(n)){const a=we(i),c=we(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function nk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Gr(n)){const a=we(i),c=we(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function rk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${at(o).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function ik(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function ok(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function sk(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=dt(n,`${e}`),n}function Qc(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),v=c.value;(e===d.ALL_V_GIVEN&&(v==="v"||v==="V")||e===d.ALL_X_GIVEN&&(v==="x"||v==="X")||e===d.ALL_XV_GIVEN)&&o.push(_)}let a="";for(const[c,u]of Gr(n)){if(o.find(p=>p.has(c)&&p.has(u)))continue;const v=we(c),g=we(u);if(e===d.ALL_V_GIVEN){const p=`constraint ${v} + ${g} != 5;
`;a+=p}else if(e===d.ALL_X_GIVEN){const p=`constraint ${v} + ${g} != 10;
`;a+=p}else{const p=`constraint ${v} + ${g} != 5 /\\ (${v} + ${g} != 10);
`;a+=p}}return a=dt(a,`${e}`),a}function eo(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function ak(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=eo(n,i);let a="";for(const[c,u]of Gr(n)){if(o.find(E=>E.has(c)&&E.has(u)))continue;const v=we(c),g=we(u);let p="";if(c.r==u.r){const O=n.getRow(c.r)[0];p=we(O)}else if(c.c==u.c){const O=n.getCol(c.c)[0];p=we(O)}if(!p)continue;const m=`constraint abs(${v} - ${g}) != ${p};
`;a+=m}return a=dt(a,`${e}`),a}function lk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=eo(n,i);a=[...a,...eo(n,o)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"1"));const u=[...new Set(c)];let _="";for(const[v,g]of Gr(n)){if(a.find(O=>O.has(v)&&O.has(g)))continue;const m=we(v),E=we(g);for(const O of u){const I=parseInt(O),w=`constraint abs(${m} - ${E}) != ${I};
`;_+=w}}return _=dt(_,`${e}`),_}function ck(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=eo(n,i);a=[...a,...eo(n,o)];let c=[];i&&(c=Object.values(i).map(v=>v.value).map(v=>v||"2"));const u=[...new Set(c)];let _="";for(const[v,g]of Gr(n)){if(a.find(O=>O.has(v)&&O.has(g)))continue;const m=we(v),E=we(g);for(const O of u){const I=parseInt(O),w=`constraint not ratio_p(${m}, ${E}, ${I});
`;_+=w}}return _=dt(_,`${e}`),_}function uk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=eo(n,i);let a="";for(const[c,u]of Gr(n)){if(o.find(O=>O.has(c)&&O.has(u)))continue;const v=we(c),g=we(u),p=_t(c,Y.YIN_YANG),m=_t(u,Y.YIN_YANG),E=`constraint not yin_yang_kropki_p(${v}, ${g}, ${p}, ${m});
`;a+=E}return a=dt(a,`${e}`),a}function dk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,_){return u.find(v=>v.cell.r===_.r&&v.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(o,u),v=_?_.directions:[],g=we(u),p=[Be.E,Be.N,Be.S,Be.W];for(const m of p){if(v.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),O=ve(E,Y.YIN_YANG);c+=`constraint count(${O}, 1) != ${g};
`}}return c=dt(c,`${e}`),c}function vd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function _k(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=n.getRow(c.r),g=`[${at(_).join(",")}]`,p=c.c+1,m=`constraint not indexing_column_p(${g}, ${p});
`;a+=m}return a=dt(a,`${e}`),a}function fk(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=we(c),[v,g,p,m]=hd(n,c),E=`constraint not radar_p(${_}, ${v}, ${g}, ${p}, ${m}, 9);
`;a+=E}return a=dt(a,`${e}`),a}function gk(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,p=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=p}return a=dt(a,`${e}`),a}function hk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Gr(n)){const a=we(i),c=we(o),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${o.r},${o.c}]`,v=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=v}return r}function pk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(v=>n.getCell(v.r,v.c)).filter(v=>!!v),_=ve(u,Y.YIN_YANG);o+=`constraint count_unique_values(${_}) >= 2;
`}return o}function vk(t,e){const n=t.grid;let r=`
% ${e}
`;const i=Y.YIN_YANG;for(const[o,a]of Gr(n)){const c=we(o),u=we(a),_=`${i}[${o.r},${o.c}]`,v=`${i}[${a.r},${a.c}]`,g=`constraint (${_} == 1 /\\ ${v} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function mk(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=dt(n,`${e}`),n}function Ek(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=dt(n,`${e}`),n}function Ck(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function Ok(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function Ik(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=dt(n,`${e}`),n}function bk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=dt(n,`${e}`),n}function wk(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function yk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Lk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Ak(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=dt(n,`${e}`),n}function Nk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=_t(i,Y.BOARD),c=_t(i,Y.YIN_YANG),u=ve(o,Y.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=dt(n,`${e}`),n}function Sk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function xk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Rk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Tk(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Dk(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=dt(n,`${e}`),n}function kk(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Gk(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=dt(n,`${e}`),n}function Mk(t,e){let n="";const r=t.grid,i=t.grid.getUsedRegions();for(const o of i){const a=r.getRegion(o),c=[...new Set(a.map(_=>_.r))],u=[...new Set(a.map(_=>_.c))];for(const _ of u){const v=a.filter(p=>p.c===_),g=ve(v,Y.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}for(const _ of c){const v=a.filter(p=>p.r===_),g=ve(v,Y.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}}return n=dt(n,`${e}`),n}function Uk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=at(u),v=Ei(_);r+=v}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),_=at(u),v=Ei(_);r+=v}if(!e.get(d.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),v=at(_),g=Ei(v);r+=g}}return r}function Fk(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const $k=new Map([[d.POSITIVE_DIAGONAL,BD],[d.NEGATIVE_DIAGONAL,WD],[d.POSITIVE_ANTIDIAGONAL,zD],[d.NEGATIVE_ANTIDIAGONAL,YD],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,jD],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,VD],[d.ANTIKING,XD],[d.ANTIKNIGHT,qD],[d.ANTI_LONG_KNIGHT,QD],[d.ANTI_GIRAFFE,ZD],[d.DISJOINT_GROUPS,KD],[d.TANGO,JD],[d.NONCONSECUTIVE,tk],[d.NONRATIO,nk],[d.ANTI_ENTROPY,ek],[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,Mk],[d.GLOBAL_INDEXING_COLUMN,rk],[d.ALL_V_GIVEN,Qc],[d.ALL_X_GIVEN,Qc],[d.ALL_XV_GIVEN,Qc],[d.ALL_DIFFERENCES_GIVEN,lk],[d.ALL_RATIOS_GIVEN,ck],[d.ALL_XY_DIFFERENCES_GIVEN,ak],[d.ALL_YIN_YANG_KROPKI_GIVEN,uk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,dk],[d.ALL_INDEXING_COLUMN_GIVEN,_k],[d.ALL_RADARS_GIVEN,fk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,gk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,hk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,pk],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,sk],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,ik],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,ok],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,mk],[d.CAVE_CELLS_ARE_ODD,Ck],[d.CAVE_WALLS_ARE_EVEN,Ok],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,Ik],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,bk],[d.YIN_YANG_FILLOMINO_PARITY,Ek],[d.TWO_SYMMETRIC_GALAXIES,Lk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,wk],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,yk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Ak],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,Nk],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,vk],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,Sk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Gk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,xk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,Rk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,Tk],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,Dk],[d.DIRECTED_PATH_IS_PARITY_LINE,kk]]);function Pk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=$k.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function md(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return at(r)}function Ed(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${at(n.slice(1)).join(",")}]`}function kp(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]";for(const c of r.lines){const u=Ed(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function Hk(t,e,n,r){let i="";const o=md(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const v=`constraint average_arrow_p(${Ed(e,u)}, ${a});
`;i+=v}}return i}function Bk(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=ve(o,Y.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=ve(u.slice(1),Y.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return i+=kp(t,e,n,r),i}function Wk(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=Ed(e,u),v=`constraint bulbous_arrow_p(${a}, ${_});
`;i+=v}return i}const zk=new Map([[d.ARROW,kp],[d.AVERAGE_ARROW,Hk],[d.BULBOUS_ARROW,Wk],[d.CHAOS_CONSTRUCTION_ARROW,Bk]]);function Yk(t,e,n,r){let i="";const o=zk.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Jr(t,e){const n=Ft(t,e.cells);return at(n)}function Gp(t,e,n){const i=`[${Jr(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function ll(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Cd(t,e,n,r,i){const a=`[${Jr(e,r).join(",")}]`,c=r.value,u=ll(t,c,n);if(!u)return"";const _=u[1];let v=u[0];return v+=`constraint ${i}(${a}, ${_});
`,v}function jk(t,e,n,r){const i=Jr(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=ll(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${o}, ${u});
`,_}function Vk(t,e,n,r){const i=Jr(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=ll(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${o}, ${u});
`,_}function Kk(t,e,n,r){return Cd(t,e,n,r,"sum_cage_p")}function Xk(t,e,n,r){return Gp(e,r,"parity_balance_cage_p")}function qk(t,e,n,r){return Gp(e,r,"sum_cage_look_and_say_p")}function Zk(t,e,n,r){return Cd(t,e,n,r,"divisible_killer_cage_p")}function Qk(t,e,n,r){return Cd(t,e,n,r,"spotlight_cage_p")}function Jk(t,e,n,r){const o=`[${Jr(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function e3(t,e,n,r){const o=`[${Jr(e,r).join(",")}]`,a=r.value;let c="";const u=ll(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const _=r.cells,v=Ft(e,_),g=[];for(const m of v)e.getOrthogonallyAdjacentCells(m).forEach(O=>{!v.includes(O)&&!g.includes(O)&&g.push(O)});const p=ve(g,Y.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${p});
`,c}function Mp(t,e,n,r,i){const o=Ft(e,r.cells),a=ve(o,Y.BOARD),c=ve(o,Y.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${a}, ${c}, ${_});
`}return""}function t3(t,e,n,r){return Mp(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function n3(t,e,n,r){return Mp(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function r3(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function i3(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function o3(t,e){let n="";const r=pd(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${Jr(t,o).join(",")}]`,v=`[${Jr(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${v});
`}return n}const s3=new Map([[d.KILLER_CAGE,jk],[d.INVERTED_KILLER_CAGE,Vk],[d.SUM_CAGE,Kk],[d.PARITY_BALANCE_CAGE,Xk],[d.SUM_CAGE_LOOK_AND_SAY,qk],[d.DIVISIBLE_KILLER_CAGE,Zk],[d.SPOTLIGHT_CAGE,Qk],[d.UNIQUE_DIGITS_CAGE,Jk],[d.VAULTED_CAGE,e3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,t3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,n3],[d.DOUBLERS_KILLER_CAGE,r3],[d.NEGATORS_KILLER_CAGE,i3]]);function a3(t,e,n,r){let i="";const o=s3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=o3(e,a);i+=c}return i}function l3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function c3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=l3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function u3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,v=c+1,[g,p,m]=c3(e,_),E=ve(g,Y.GALAXY_REGIONS),O=ve(p,Y.GALAXY_REGIONS),I=ve(m,Y.GALAXY_REGIONS);r+=`% galaxy ${v}
`,r+=`constraint galaxy_center_p(${E}, ${O}, ${I}, ${v});
`,r+=`constraint connected_region(${Y.GALAXY_REGIONS}, ${v});
`;const w=u.value;if(!w)continue;const x=parseInt(w);r+=`constraint galaxy_sum_p(${Y.BOARD}, ${Y.GALAXY_REGIONS}, ${x}, ${v});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${Y.GALAXY_REGIONS}, ${a});
`,r}function d3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function _3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=d3(t,c,n);if(!u)return"";const _=u[1];let v=u[0],g=[];if(o%1===0&&a%1===0?g=nd(i).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(g=id(i).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0)),!g.length)return"";const p=ve(g,Y.BOARD),m=ve(g,Y.YIN_YANG);return v+=`constraint conditional_sum_f(${p}, ${m}, 1) == ${_};
`,v}const f3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,_3]]),g3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,u3]]);function h3(t,e,n,r){let i="";const o=g3.get(n),a=f3.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function Ug(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return at(n)}function p3(t,e){const r="["+Ug(t,e.cells).join(",")+"]",o="["+Ug(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const v3=new Map([[d.CLONE_REGION,p3]]);function m3(t,e,n,r){return al(e,n,r,v3)}function Od(t,e){const n=Ft(t,e.cells);return at(n)}function Id(t,e,n){const i=`[${Od(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Up(t,e,n,r=""){const o=`[${Od(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function E3(t,e,n,r){const o=`[${Od(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=Tp(a);if(!c)return"";let u="";for(const v of c){const g=parseInt(v);Number.isNaN(g)&&!t.hasVariable(v)&&(u+=`var int: ${v};
`,t.addVariable(v))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${_});
`,u}function C3(t,e,n,r){return Up(e,r,"corner_sum_p")}function O3(t,e,n,r){return Up(e,r,"corner_even_count_p")}function I3(t,e,n,r){return Id(e,r,"corner_sum_of_three_equals_the_other_p")}function b3(t,e,n,r){return Id(e,r,"equal_diagonal_differences_p")}function w3(t,e,n,r){return Id(e,r,"product_square_p")}const y3=new Map([[d.QUADRUPLE,E3],[d.CORNER_SUM,C3],[d.CORNER_EVEN_COUNT,O3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,I3],[d.PRODUCT_SQUARE,w3],[d.EQUAL_DIAGONAL_DIFFERENCES,b3]]);function L3(t,e,n,r){let i="";const o=y3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function cl(t,e){const n=Ft(t,e.cells);return at(n)}function A3(t,e,n){const r=cl(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function N3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function ul(t,e,n,r,i,o=""){var m;const a=cl(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:o,v=N3(t,_,n);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint ${i}(${c}, ${u}, ${g});
`,p}function S3(t,e,n,r){const i=cl(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function x3(t,e,n,r){return ul(t,e,n,r,"ratio_p","2")}function R3(t,e,n,r){return ul(t,e,n,r,"abs_difference","1")}function Fg(t,e,n,r){const i=cl(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function T3(t,e,n,r){return ul(t,e,n,r,"edge_sum_p")}function D3(t,e,n,r){return ul(t,e,n,r,"edge_modulo_p")}function k3(t,e,n,r){return A3(e,r,"edge_factor_p")}function G3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=at(i),[c,u]=i;let _="";if(c.r==u.r){const p=e.getRow(c.r)[0];_=we(p)}else if(c.c==u.c){const p=e.getCol(c.c)[0];_=we(p)}return _?`constraint abs(${o} - ${a}) == ${_};
`:""}function M3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=at(i),c=Io(i,Y.YIN_YANG),[u,_]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${_});
`}function U3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=at(i),c=Io(i,Y.YIN_YANG),[u,_]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${_});
`}function dl(t,e,n){const r=Ft(t,e.cells),i=Io(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function F3(t,e,n,r){return dl(e,r,Y.UNKNOWN_REGIONS)}function $3(t,e,n,r){return dl(e,r,Y.FILLOMINO_REGIONS)}function P3(t,e,n,r){return dl(e,r,Y.SUGURU_REGIONS)}function H3(t,e,n,r){return dl(e,r,Y.CAVE_SHADING)}const B3=new Map([[d.XV,S3],[d.DIFFERENCE,R3],[d.RATIO,x3],[d.EDGE_INEQUALITY,Fg],[d.ONE_WAY_DOOR,Fg],[d.EDGE_SUM,T3],[d.EDGE_MODULO,D3],[d.EDGE_FACTOR,k3],[d.XY_DIFFERENCES,G3],[d.YIN_YANG_KROPKI,M3],[d.YIN_YANG_WHITE_KROPKI,U3],[d.FILLOMINO_REGION_BORDER,$3],[d.UNKNOWN_REGION_BORDER,F3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,P3],[d.EDGE_CAVE_ONE_OF_EACH,H3]]);function W3(t,e,n,r){let i="";const o=B3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function z3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function As(t,e,n=!1){let r=Ft(t,e.cells);return n&&(r=[...new Set(r)]),at(r)}function gt(t,e,n,r=!1){const o=`[${As(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function ir(t,e,n,r,i,o=""){var p;const c=`[${As(e,r).join(",")}]`,u=(p=r.value)!=null&&p.length?r.value:o,_=z3(t,u,n);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${i}(${c}, ${v});
`,g}function bd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${at(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${o});
`}function Y3(t,e,n,r){return gt(e,r,"renban",!0)}function j3(t,e,n,r){return gt(e,r,"double_renban_p",!0)}function V3(t,e,n,r){return gt(e,r,"renrenbanban_p",!0)}function K3(t,e,n,r){return gt(e,r,"knabner_p",!0)}function X3(t,e,n,r){return gt(e,r,"renban_or_nabner_line_p",!0)}function q3(t,e,n,r){return gt(e,r,"out_of_order_consecutive_line_p")}function Z3(t,e,n,r){return ir(t,e,n,r,"whispers","5")}function Q3(t,e,n,r){return`constraint whispers(${`[${As(e,r).join(",")}]`}, 4);
`}function J3(t,e,n,r){return gt(e,r,"strictly_increasing")}function e5(t,e,n,r){return gt(e,r,"fuzzy_thermo_p")}function t5(t,e,n,r){return gt(e,r,"increasing")}function n5(t,e,n,r){return ir(t,e,n,r,"custom_thermo_p")}function r5(t,e,n,r){return gt(e,r,"palindrome")}function i5(t,e,n,r){return ir(t,e,n,r,"sum_line_p")}function o5(t,e,n,r){return gt(e,r,"xv_line_p")}function s5(t,e,n,r){return ir(t,e,n,r,"at_least_x_line_p","10")}function a5(t,e,n,r){return ir(t,e,n,r,"product_line_p")}function l5(t,e,n,r){return ir(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function c5(t,e,n,r){return gt(e,r,"adjacent_multiples_line_p")}function u5(t,e,n,r){return gt(e,r,"index_line_p")}function d5(t,e,n,r){return gt(e,r,"zipper_line_p")}function _5(t,e,n,r){return bd(e,r,"segmented_sum_line_p")}function f5(t,e,n,r){return gt(e,r,"segmented_sum_and_renban_line_p")}function g5(t,e,n,r){return bd(e,r,"n_consecutive_renban_line_p")}function h5(t,e,n,r){return bd(e,r,"n_consecutive_fuzzy_sum_line_p")}function p5(t,e,n,r){const i=Ft(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const _=i[u],v=e.getRow(_.r),g=ve(v,Y.BOARD),p=`cycle_${n}_${u}`;a.push(p);const m=_.c+1;o+=`var int: ${p} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function v5(t,e,n,r){return gt(e,r,"adjacent_differences_count_line_p")}function m5(t,e,n,r){return gt(e,r,"same_parity_line_p")}function E5(t,e,n,r){return ir(t,e,n,r,"renban_or_whispers_p","5")}function C5(t,e,n,r){return gt(e,r,"alldifferent",!0)}function O5(t,e,n,r){return gt(e,r,"repeated_digits_line_p")}function I5(t,e,n,r){return gt(e,r,"superfuzzy_arrow_p")}function b5(t,e,n,r){return gt(e,r,"ambiguous_arrow_p",!0)}function w5(t,e,n,r){return gt(e,r,"headless_arrow_p")}function y5(t,e,n,r){return ir(t,e,n,r,"unimodular_line_p","3")}function L5(t,e,n,r){return ir(t,e,n,r,"modular_line_p","3")}function A5(t,e,n,r){return ir(t,e,n,r,"modular_or_unimodular_line_p","3")}function N5(t,e,n,r){return gt(e,r,"arithmetic_sequence_line_p")}function S5(t,e,n,r){return gt(e,r,"odd_even_oscillator_line_p")}function x5(t,e,n,r){return ir(t,e,n,r,"high_low_oscillator_line_p","5")}function R5(t,e,n,r){return gt(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function T5(t,e,n,r){return gt(e,r,"look_and_say_line_p",!0)}function D5(t,e,n,r){const i=Ft(e,r.cells);function o(g){const p=[];let m=null;for(const E of g)E.r!=m?(p.push([E]),m=E.r):p[p.length-1].push(E);return p}const a=o(i);if(a.length<2)return"";const c=a[0],_=`[${at(c).join(",")}]`;let v="";for(let g=1;g<a.length;g++){const p=a[g],E=`[${at(p).join(",")}]`;v+=`constraint sum(${E}) == sum(${_});
`}return v}function k5(t,e,n,r){return gt(e,r,"between_line_p")}function G5(t,e,n,r){return gt(e,r,"tightrope_line_p")}function M5(t,e,n,r){return gt(e,r,"double_arrow_p")}function U5(t,e,n,r){return gt(e,r,"split_peas_p")}function F5(t,e,n,r){return gt(e,r,"parity_count_line_p")}function $5(t,e,n,r){return gt(e,r,"product_of_ends_equals_sum_of_line_p")}function Fp(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function P5(t,e,n,r){let i="";const o=Ft(e,r.cells),a=Fp(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const v=`constraint sum(${ve(u,Y.BOARD)}) == ${c};
`;i+=v}return i}function H5(t,e,n,r){return`constraint entropic_line_p(${`[${As(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function B5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${As(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function W5(t,e,n,r){return gt(e,r,"peapods_p")}function z5(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function Y5(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function wd(t,e,n){const r=Ft(t,e.cells),i=ve(r,Y.BOARD),o=ve(r,Y.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function j5(t,e,n,r){return wd(e,r,"yin_yang_unshaded_entropic_line_p")}function V5(t,e,n,r){return wd(e,r,"yin_yang_indexing_line_coloring_p")}function K5(t,e,n,r){return wd(e,r,"yin_yang_region_sum_line_p")}function X5(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.VALUES_GRID),a=ve(i,Y.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function yd(t,e,n){const r=Ft(t,e.cells),i=ve(r,Y.VALUES_GRID);return`constraint ${n}(${i});
`}function q5(t,e,n,r){return yd(e,r,"between_line_p")}function Z5(t,e,n,r){return yd(e,r,"double_arrow_p")}function Q5(t,e,n,r){return yd(e,r,"strictly_increasing")}function J5(t,e,n,r){const i=Ft(e,r.cells),o=Fp(i);if(o.sort((_,v)=>v.length-_.length),o.length<=1)return"";let a="";const c=o[0],u=ve(c,Y.VALUES_GRID);for(const _ of o.slice(1)){const v=ve(_,Y.VALUES_GRID),g=`constraint subset_p(${u}, ${v});
`;a+=g}return a}const eG=new Map([[d.THERMOMETER,J3],[d.FUZZY_THERMOMETER,e5],[d.SLOW_THERMOMETER,t5],[d.CUSTOM_THERMOMETER,n5],[d.RENBAN_LINE,Y3],[d.DOUBLE_RENBAN_LINE,j3],[d.RENRENBANBAN_LINE,V3],[d.NABNER_LINE,K3],[d.WHISPERS_LINE,Z3],[d.DUTCH_WHISPERS,Q3],[d.RENBAN_OR_WHISPERS_LINE,E5],[d.RENBAN_OR_NABNER_LINE,X3],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,q3],[d.N_CONSECUTIVE_RENBAN_LINE,g5],[d.PALINDROME,r5],[d.SUM_LINE,i5],[d.PRODUCT_LINE,a5],[d.XV_LINE,o5],[d.AT_LEAST_X_LINE,s5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,l5],[d.SAME_PARITY_LINE,m5],[d.ADJACENT_MULTIPLES_LINE,c5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,v5],[d.LOOK_AND_SAY_LINE,T5],[d.ROW_SUM_LINE,D5],[d.INDEX_LINE,u5],[d.ZIPPER_LINE,d5],[d.SEGMENTED_SUM_LINE,_5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,f5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,h5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,R5],[d.SUPERFUZZY_ARROW,I5],[d.AMBIGUOUS_ARROW,b5],[d.HEADLESS_ARROW,w5],[d.ARITHMETIC_SEQUENCE_LINE,N5],[d.ODD_EVEN_OSCILLATOR_LINE,S5],[d.HIGH_LOW_OSCILLATOR_LINE,x5],[d.UNIQUE_VALUES_LINE,C5],[d.REPEATED_DIGITS_LINE,O5],[d.UNIMODULAR_LINE,y5],[d.MODULAR_LINE,L5],[d.MODULAR_OR_UNIMODULAR_LINE,A5],[d.REGION_SUM_LINE,P5],[d.ENTROPIC_LINE,H5],[d.ENTROPIC_OR_MODULAR_LINE,B5],[d.ROW_CYCLE_THERMOMETER,p5],[d.PEAPODS,W5],[d.BETWEEN_LINE,k5],[d.TIGHTROPE_LINE,G5],[d.DOUBLE_ARROW_LINE,M5],[d.SPLIT_PEAS,U5],[d.PARITY_COUNT_LINE,F5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,$5],[d.DOUBLERS_THERMOMETER,Q5],[d.DOUBLERS_BETWEEN_LINE,q5],[d.DOUBLERS_DOUBLE_ARROW_LINE,Z5],[d.INDEXER_CELLS_REGION_SUBSET_LINE,J5],[d.YIN_YANG_SHADED_WHISPERS_LINE,z5],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,j5],[d.YIN_YANG_UNSHADED_MODULAR_LINE,Y5],[d.YIN_YANG_REGION_SUM_LINE,K5],[d.YIN_YANG_INDEXING_LINE_COLORING,V5],[d.GOLDILOCKS_ZONE_REGION_SUM,X5]]);function tG(t,e,n,r){let i="";const o=eG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function _l(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return at(i)}function bo(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function qn(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${_l(e,n).join(",")}]`,u=n.value,_=bo(t,u,i,o);if(!_)return"";const v=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${v});
`,g}function nG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${_l(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),p=bo(t,u,i,o);if(!p)return"";const m=p[1];let E=p[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,E}function rG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${_l(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,v=Math.min(..._),g=Math.max(..._),p=bo(t,u,i,o);if(!p)return"";const m=p[1];let E=p[0];const O=`var_bool_${n}_0`,I=`var_bool_${n}_1`;return E+=`var bool: ${O} = sandwich_sum_p(${c}, ${m}, ${v}, ${g});
`,E+=`var bool: ${I} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${O}, ${I});
`,E}function iG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=_l(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,v=bo(t,_,i,o);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint x_index_p(${c}, ${u}, ${g});
`,p}function oG(t,e,n,r){return qn(t,e,r,"x_sum_p")}function sG(t,e,n,r){return qn(t,e,r,"shortsighted_x_sum_p")}function aG(t,e,n,r){return qn(t,e,r,"broken_x_sum_p")}function lG(t,e,n,r){return qn(t,e,r,"shifted_x_sum_p")}function cG(t,e,n,r){return qn(t,e,r,"skyscrapers_p")}function uG(t,e,n,r){return qn(t,e,r,"x_sum_skyscrapers_p")}function dG(t,e,n,r){return qn(t,e,r,"battlefield_p")}function _G(t,e,n,r){return qn(t,e,r,"rising_streak_p")}function fG(t,e,n,r){return qn(t,e,r,"outside_consecutive_sum_p")}function gG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=ve(a,Y.BOARD),u=ve(a,Y.CELL_CENTER_LOOP),_=r.value;if(_){const v=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${v});
`}return""}function hG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=ve(c,Y.BOARD),_=ve(c,Y.UNKNOWN_REGIONS),v=r.value,g=bo(t,v,i,o);if(!g)return"";const p=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${p});
`,m}function pG(t,e,n,r){return qn(t,e,r,"little_killer_sum_p")}function vG(t,e,n,r){return qn(t,e,r,"little_killer_product_p")}function mG(t,e,n,r){return qn(t,e,r,"x_omit_little_killer_sum_p")}function EG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=ve(a,Y.BOARD),u=ve(a,Y.YIN_YANG),_=r.value;if(_){const v=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${v});
`}return""}function CG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=ve(a,Y.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}function OG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=ve(c,Y.PENTOMINO_REGIONS),_=r.value,v=bo(t,_,i,o);if(!v)return"";const g=v[1];let p=v[0];return p+=`constraint pentomino_border_count_p(${u}, ${g});
`,p}const IG=new Map([[d.SANDWICH_SUM,nG],[d.X_SUM,oG],[d.SHORTSIGHTED_X_SUM,sG],[d.BROKEN_X_SUM,aG],[d.SHIFTED_X_SUM,lG],[d.SKYSCRAPERS,cG],[d.X_SUM_SKYSCRAPERS,uG],[d.X_INDEX,iG],[d.BATTLEFIELD,dG],[d.SANDWICH_SUM_XOR_X_SUM,rG],[d.RISING_STREAK,_G],[d.OUTSIDE_CONSECUTIVE_SUM,fG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,EG],[d.LOOPWICHES,gG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,hG],[d.PENTOMINO_BORDER_COUNT,OG],[d.LITTLE_KILLER_SUM,pG],[d.LITTLE_KILLER_PRODUCT,vG],[d.X_OMIT_LITTLE_KILLER_SUM,mG],[d.NEGATORS_LITTLE_KILLER_SUM,CG]]);function bG(t,e,n,r){let i="";const o=IG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function wG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=ve(o,Y.SASHIGANE),c=ve(o,Y.SASHIGANE_BENDS),u=we(r),_=_t(r,Y.SASHIGANE);let v=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return v+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,v}function yG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+at(o).join(",")+"]",u=ve(o,Y.CELL_CENTER_LOOP),_=we(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const LG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,wG],[d.THERMO_SIGHTLINE_LOOP_ARROW,yG]]);function AG(t,e,n,r){return al(e,n,r,LG)}function $p(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i);return`constraint ${n}(${o});
`}function Pp(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Hp(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function wo(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o),u=sl(t,o).map(g=>ve(g,n)),_=_t(o,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function NG(t,e,n,r){return $p(e,r,"odd_p")}function SG(t,e,n,r){return $p(e,r,"even_p")}function xG(t,e,n,r){return Hp(e,r,"low_digit_p","5")}function RG(t,e,n,r){return Hp(e,r,"high_digit_p","5")}function Bp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),a=t.getNeighboorCells(i),c=ve(a,Y.BOARD);return`constraint ${n}(${c}) == ${o};
`}function TG(t,e,n,r){return Bp(e,r,"odd_count")}function DG(t,e,n,r){return Bp(e,r,"even_count")}function kG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);c.push(o);const u=ve(c,Y.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function GG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${ve(c,Y.BOARD)}, ${a});
`}function MG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${ve(c,Y.BOARD)}, ${a});
`}function UG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=ve(a,Y.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function FG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=ve(a,Y.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function $G(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=o.r+1,u=o.c+1;if(o.region!==null){const v=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${v};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function PG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const v=we(a),g=we(c),p=we(u),m=we(_);return`constraint groups_opposite_parity_p([${v},${g}], [${p},${m}]);
`}function Ld(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),[a,c,u,_]=hd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${_});
`}function HG(t,e,n,r){return Ld(e,r,"is_watchtower_p")}function BG(t,e,n,r){return Ld(e,r,"is_not_watchtower_p")}function WG(t,e,n,r){return Ld(e,r,"farsight_p")}function zG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),[c,u,_,v]=hd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${v}, 9);
`}function YG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u="["+at(c).join(",")+"]",_=e.getCol(o.c),v="["+at(_).join(",")+"]",[g,p]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${v}, ${g}, ${p}, ${a});
`}function Wp(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const v=we(_),g=t.getOrthogonallyAdjacentCells(_).filter(E=>!a.has(E)),p=ve(g,Y.BOARD),m=`constraint ${n}(${p}, ${v});
`;i+=m}return i}function jG(t,e,n){return Wp(e,n,"maximum_p")}function VG(t,e,n){return Wp(e,n,"minimum_p")}function KG(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function XG(t,e,n){const r=Object.values(n);let i="";const o=r.map(p=>p.cell),a=new Set(o.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p)),c=e.getAllCells().filter(p=>!a.has(p)),_=`${at([...a]).join(`,
	`)}`,g=`${at([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function qG(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${at([...a]).join(`,
	`)}`,v=`${Io([...a],Y.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${Y.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${v}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${Y.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const p=_t(g,Y.COUNTING_CIRCLES_COLORS);i+=`constraint ${p} == 0;
`}for(const g of r){const p=g.cell,m=e.getCell(p.r,p.c);if(!m)continue;const E=we(m),O=_t(m,Y.COUNTING_CIRCLES_COLORS),I=g.value;I?i+=`constraint ${O} == ${I};
`:i+=`constraint ${O} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${O}) == ${E};
`}return i+=`
`,i}function ZG(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${at([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function QG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_even_count_p(${sl(e,o).map(v=>ve(v,Y.BOARD)).join(", ")}, ${a});
`}function JG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_odd_count_p(${sl(e,o).map(v=>ve(v,Y.BOARD)).join(", ")}, ${a});
`}function eM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getCellsByKnightMove(o),u=ve(c,Y.BOARD),_=r.value??"5",v=Pp(t,_,n);if(!v)return"";let g="";const p=v[1];return g+=v[0],g+=`constraint cell_knights_whisper_p(${a}, ${u}, ${p});
`,g}function tM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${ve(u,Y.YIN_YANG)}, ${a});
`}function nM(t,e,n,r){return wo(e,r,Y.YIN_YANG,"yin_yang_seen_unshaded_p")}function rM(t,e,n,r){return wo(e,r,Y.YIN_YANG,"yin_yang_seen_shaded_p")}function iM(t,e,n,r){return wo(e,r,Y.YIN_YANG,"yin_yang_seen_same_shade_p")}function oM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),_=ve(u,Y.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function sM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);return`constraint count(${ve(c,Y.YIN_YANG)}, 1) == ${a};
`}function aM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),_=e.getCol(o.c),v=ve(u,Y.TWO_CONTIGUOUS_REGIONS),g=ve(_,Y.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${v}, ${g}, ${a}, ${c});
`}function lM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u=e.getCol(o.c),_=ve(c,Y.UNKNOWN_REGIONS),v=ve(u,Y.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${v}, ${a});
`}function cM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let _=`constraint nurimisaki_unshaded_endpoint_p(${ve(c,Y.NURIMISAKI)}, ${a});
`;return _+=wo(e,r,Y.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function uM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.SASHIGANE),u=_t(o,Y.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function dM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=_t(o,Y.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function _M(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,Y.CELL_CENTER_LOOP)} == 1;
`:""}function fM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,Y.CELL_CENTER_LOOP)} == 0;
`:""}function gM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${ve(u,Y.CELL_CENTER_LOOP)}) == ${a};
`}function hM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.CAVE_SHADING),u=sl(e,o),_=[];for(const g of u){const p=ve(g,Y.CAVE_SHADING);_.push(p)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function pM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=we(o),v=_t(o,Y.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),p=ve(g,Y.BOARD),m=ve(g,Y.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${p}, ${m}, ${v});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const E=e.getCellsByKnightMove(o),O=ve(E,Y.BOARD),I=ve(E,Y.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${O}, ${I}, ${v});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const w=[Be.NE,Be.NW,Be.SE,Be.SW],x=[];for(const z of w)e.getCellsInDirection(o.r,o.c,z).forEach(H=>x.push(H));const k=ve(x,Y.BOARD),U=ve(x,Y.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${k}, ${U}, ${v});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function vM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=we(o),v=_t(o,Y.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),p=ve(g,Y.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${p}, ${v}) >= ${c};
`;const m=[Be.N,Be.S,Be.E,Be.W],E=[];for(const O of m){const I=e.getCellsInDirection(o.r,o.c,O);if(!I.length)continue;const w=ve(I,Y.BOARD),x=ve(I,Y.UNKNOWN_REGIONS),k=`in_arrow_${n}_${O}`,U=`in_arrow_${n}_${O}[1]`;E.push(U),u+=`array[index_set(${w})] of var bool: ${k};
`,u+=`constraint chaos_construction_arrow_knots_p(${w}, ${x}, ${k}, ${_}, ${v});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function mM(t,e,n,r){return wo(e,r,Y.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function EM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function CM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function OM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${_t(o,Y.CONNECT_FOUR)});
`:""}function IM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${_t(o,Y.CONNECT_FOUR)});
`:""}function bM(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const v=Pp(t,_,o);if(!v)continue;const g=v[1];r+=v[0];const p=_t(u,Y.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${Y.BOARD}, ${Y.NURIKABE_REGIONS}, ${p}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${Y.NURIKABE_REGIONS})) == ${i+1};
`,r}function wM(t,e,n,r){return wo(e,r,Y.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function yM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${Y.NURIKABE_REGIONS}, ${c}, ${a});
`}function LM(t,e,n){let r="";const i=pd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,v]of u.flatMap((g,p)=>u.slice(p+1).map(m=>[g,m]))){const g=_.cell,p=v.cell,m=e.getCell(g.r,g.c),E=e.getCell(p.r,p.c);if(!m||!E)continue;const O=_t(m,Y.BOARD),I=_t(E,Y.BOARD);r+=`constraint ${O} == ${I};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=ve(a,Y.BOARD);return r+=`constraint alldifferent(${c});
`,r}function AM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${Io([...a],Y.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_clues);
`;for(const _ of Object.values(n)){const v=_.cell,g=e.getCell(v.r,v.c);if(!g)continue;const p=we(g),m=_t(g,Y.SHIKAKU_REGIONS),E=_t(g,Y.SHIKAKU_WIDTH),O=_t(g,Y.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${Y.SHIKAKU_REGIONS}, ${m}, ${p}, ${E}, ${O});
`}return i}const NM=new Map([[d.ODD,NG],[d.EVEN,SG],[d.LOW_DIGIT,xG],[d.HIGH_DIGIT,RG],[d.ODD_MINESWEEPER,TG],[d.EVEN_MINESWEEPER,DG],[d.DIAGONALLY_ADJACENT_SUM,MG],[d.ORTHOGONAL_SUM,GG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,kG],[d.FRIENDLY_CELL,$G],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,PG],[d.WATCHTOWER,HG],[d.NOT_WATCHTOWER,BG],[d.FARSIGHT,WG],[d.RADAR,zG],[d.INDEXING_COLUMN,UG],[d.INDEXING_ROW,FG],[d.SANDWICH_ROW_COL_COUNT,YG],[d.SEEN_EVEN_COUNT,QG],[d.SEEN_ODD_COUNT,JG],[d.CELL_KNIGHT_WHISPERS,eM],[d.YIN_YANG_MINESWEEPER,tM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,nM],[d.YIN_YANG_SEEN_SHADED_CELLS,rM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,iM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,oM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,sM],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,aM],[d.SEEN_REGION_BORDERS_COUNT,lM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,cM],[d.NURIKABE_SEEN_WATERWAY_CELLS,wM],[d.NURIKABE_ISLAND_SIZE_CELL,yM],[d.SASHIGANE_BEND_REGION_COUNT,uM],[d.SASHIGANE_REGION_SUM,dM],[d.CELL_ON_THE_LOOP,_M],[d.CELL_NOT_ON_THE_LOOP,fM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,gM],[d.CAVE_CLUE,hM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,pM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,vM],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,mM],[d.DIRECTED_PATH_START,EM],[d.DIRECTED_PATH_END,CM],[d.CONENCT_FOUR_RED,OM],[d.CONNECT_FOUR_YELLOW,IM]]),SM=new Map([[d.MAXIMUM,jG],[d.MINIMUM,VG],[d.COUNTING_CIRCLES,KG],[d.REVERSE_COUNTING_CIRCLES,XG],[d.COLORED_COUNTING_CIRCLES,qG],[d.UNIQUE_CELLS,ZG],[d.SHIKAKU_REGION_SIZE,AM],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,bM],[d.TELEPORT,LM]]);function xM(t,e,n,r){let i="";const o=NM.get(n),a=SM.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function RM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.UNKNOWN_REGIONS),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v),p=ve(g,Y.UNKNOWN_REGIONS);c.push(p)}return`constraint ${c.map(v=>`count_different(${v}, ${o})`).join(" + ")} == ${i};
`}function TM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),v=ve(_,Y.BOARD),g=ve(_,Y.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${v}, ${g}) == ${i};
`}return c}function DM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=ve(u,Y.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function kM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.YIN_YANG),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),g=ve(v,Y.YIN_YANG),p=ve(v,Y.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${p})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function GM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${ve(_,Y.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function MM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${ve(_,Y.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function UM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const v=t.getCellsInDirection(r.r,r.c,_),p=`count(${ve(v,Y.GALAXY_REGIONS)}, ${o})`;c.push(p)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function FM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),v="["+at(u).join(",")+"]";a+=`constraint hot_arrows_p(${v}, ${i});
`}return a}function $M(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=ve(u,Y.BOARD);a+=`constraint cold_arrows_p(${_}, ${i});
`}return a}function PM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.CONNECT_FOUR),a=e.directions,c=[];for(const v of a){const g=t.getCellsInDirection(r.r,r.c,v);c.push(...g)}return c.length===0?"":`constraint count(${ve(c,Y.CONNECT_FOUR)}, ${o}) == ${i};
`}function HM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),v=ve(_,Y.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${v});
`}return c}const BM=new Map([[d.HOT_ARROWS,FM],[d.COLD_ARROWS,$M],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,RM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,TM],[d.LOOP_CELL_COUNT_ARROWS,MM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,kM],[d.YIN_YANG_COUNT_SHADED_CELLS,DM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,UM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,GM],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,PM],[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,HM]]);function WM(t,e,n,r){return al(e,n,r,BM)}function zM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function YM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function jM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}function VM(t,e){const n=e.value;if(!n)return"";const r=parseInt(n),i=[...t.getUsedRegions()];i.sort();const o=i.length;return`constraint lits_max_tetromino_sum_p(${Y.BOARD}, ${Y.LITS_GRID}, ${r}, 0..${o});
`}const KM=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,zM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,YM],[d.FORBIDDEN_KNIGHT_SUM,jM],[d.LITS_MAX_TETROMINO_SUM,VM]]);function XM(t,e,n,r){return al(e,n,r,KM)}const qM=[h3,xM,AG,WM,W3,L3,tG,Yk,a3,bG,m3,XM];function ZM(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of qM){let u=c(e,i,o,a);u=dt(u,`${o}`),n+=u}return n}function QM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function JM(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function eU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function tU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function nU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function rU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows),a=bt.range(1,o+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${o}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${o});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function iU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Y.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=bt.range(1,a+1);let u="";const _="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${o};
`,u+=`constraint numbered_chaos_construction_p(${Y.BOARD}, ${o}, ${_}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${Y.BOARD}, ${o}, ALLOWED_DIGITS, ${_});
`,u}function oU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function sU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function aU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function lU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function cU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function zp(t,e,n,r){const i=t.grid;let o="";o+=`% Exactly ${e} per row 
`;const a=i.nRows;for(let c=0;c<a;c++){const u=i.getRow(c),_=r(u);o+=`constraint count_eq(${_}, ${n}, ${e});
`}return o}function Yp(t,e,n,r){const i=t.grid;let o="";o+=`
% Exactly ${e} per column 
`;const a=i.nCols;for(let c=0;c<a;c++){const u=i.getCol(c),_=r(u);o+=`constraint count_eq(${_}, ${n}, ${e});
`}return o}function jp(t,e,n,r){const i=t.grid;let o="";if(!t.globalConstraints.get(d.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const _ of u){const v=i.getRegion(_),g=r(v);o+=`constraint count_eq(${g}, ${n}, ${e});
`}}return o}function Zi(t,e,n,r){let i=zp(t,e,n,r);return i+=Yp(t,e,n,r),i+=jp(t,e,n,r),i}function uU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=Zi(n,1,!0,a=>ve(a,Y.DOUBLERS)),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function dU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=Zi(n,1,!0,c=>ve(c,Y.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function _U(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function fU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=Zi(n,2,!0,c=>ve(c,o)),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function gU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${Y.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${Y.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${o}, ${Y.SHIKAKU_WIDTH}, ${Y.SHIKAKU_HEIGHT});
`,a}function hU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${Y.BOARD}, ${Y.SHIKAKU_REGIONS});
`,o}function pU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.CAVE_SHADING,a=Y.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function vU(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.CAVE_SHADING,a=Y.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${Y.BOARD}, ${c});
`,u}function mU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.GALAXY_REGIONS,a=Y.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function EU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function CU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function OU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=12,a=Y.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function IU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.LITS_SHADING,a=Y.LITS_REGIONS,c=Y.LITS_GRID,u=Y.BOARD_REGIONS,_=[...r.getUsedRegions()];_.sort();const v=Math.min(..._),g=Math.max(..._);let p="";p+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,p+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,p+=`array[ROW_IDXS, COL_IDXS] of var 0..${_.length}: ${c};
`,p+=`constraint lits_shading_p(${o});
`,p+=`constraint lits_shading_ids_p(${o}, ${a});
`,p+=`constraint lits_region_and_ids_p(${u}, ${a});
`,p+=`constraint lits_tetromino_shapes_p(${a});
`,p+=`constraint lits_grid_p(${c}, ${u}, ${o}, ${v}..${g});
`,_.length&&(p+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of _){const E=r.getRegion(m),I=`constraint count_eq(${ve(E,Y.LITS_SHADING)}, 1, 4);
`;p+=I}return p}function bU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.NORINORI_SHADING;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,a+=`constraint norinori_p(${Y.BOARD_REGIONS}, ${o});
`;const c=r.getUsedRegions();c.size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`);for(const u of c){const _=r.getRegion(u),g=`constraint count_eq(${ve(_,Y.NORINORI_SHADING)}, 1, 2);
`;a+=g}return a}function wU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(v=>v.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.LITS_SHADING,a=Y.LITS_REGIONS,c=Y.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const v of _){const g=r.getRegion(v),m=`constraint count_eq(${ve(g,Y.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function yU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.LITS_SHADING,a=Y.STAR_BATTLE,c=Y.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=Zi(n,2,1,_=>ve(_,Y.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=Zi(n,1,1,_=>ve(_,Y.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=Zi(n,1,2,_=>ve(_,Y.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${o}, ${c});
`,u}function LU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.NORINORI_SHADING,a=Y.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=Yp(n,2,1,u=>ve(u,a)),c+=zp(n,2,1,u=>ve(u,a)),c+=jp(n,1,1,u=>ve(u,a)),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${o}, ${a});
`,c}function Ut(t,e,n){return t*n+e+1}function AU(t){const e=t.grid;function n(c,u){const _=[],v=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const p=Ut(u.r+g,u.c,e.nCols);_.push([v,p]),_.push([p,v])}return _}function r(c,u){const _=[],v=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const p=Ut(u.r,u.c+g,e.nCols);_.push([v,p]),_.push([p,v])}return _}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=nd(_).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let p=Ut(g[0].r,g[0].c,e.nCols),m=Ut(g[3].r,g[3].c,e.nCols);i.push([p,m]),i.push([m,p]),p=Ut(g[1].r,g[1].c,e.nCols),m=Ut(g[2].r,g[2].c,e.nCols),i.push([p,m]),i.push([m,p])}for(let _=0;_<u.length-1;_++){const v=mx(Bh(u[_],u[_+1]),.5),p=id(v).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0);if(p.length!==2)continue;const[m,E]=p;if(m.r===E.r){let O=n(m,E);i.push(...O),O=n(E,m),i.push(...O)}else if(m.c===E.c){let O=r(m,E);i.push(...O),O=r(E,m),i.push(...O)}}}return i}function NU(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,v=o.value,g=Ut(u.r,u.c,e.nCols),p=Ut(_.r,_.c,e.nCols);v==="<"?n.push([g,p]):v===">"&&n.push([p,g])}return n}function SU(t){const e=[];for(const n of t.getAllCells()){const r=Ut(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Ut(o.r,o.c,t.nCols);e.push([r,a])}}return e}function xU(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const _=pd(a);let v=1;for(const g of _.values())if(!(g.length<=1)){for(const[p,m]of g.flatMap((E,O)=>g.slice(O+1).map(I=>[E,I]))){const E=Ut(p.cell.r,p.cell.c,e.nCols),O=Ut(m.cell.r,m.cell.c,e.nCols);n.push([E,O]),n.push([O,E]),u[p.cell.r][p.cell.c]=v,u[m.cell.r][m.cell.c]=v}for(const p of g){const m=Ut(p.cell.r,p.cell.c,e.nCols);r.push(m)}v++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function RU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(w=>w.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=SU(r);const c=AU(n),u=NU(n);c.push(...u);const _=n.localConstraints;a=a.filter(w=>!c.some(x=>w[0]===x[0]&&w[1]===x[1]));const v=xU(n);if(v.tp_edges.length){a.push(...v.tp_edges);const w=Dp(v.tp_arr),x=v.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${x}: teleports = array2d(ROW_IDXS, COL_IDXS, ${w});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,p=a.length,m="["+a.map(w=>w[0]).join(",")+"]",E="["+a.map(w=>w[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${E};
`,o+=`var 1..${g}: dpath_source;
`,o+=`var 1..${g}: dpath_target;
`,o+=`array[1..${g}] of var bool: dpath_ns;
`,o+=`array[1..${p}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let w=0;w<r.nRows-1;w++)for(let x=0;x<r.nCols-1;x++){const k=r.getCell(w,x),U=r.getCell(w,x+1),z=r.getCell(w+1,x),j=r.getCell(w+1,x+1);if(!k||!U||!z||!j)continue;const H=Ut(k.r,k.c,r.nCols),q=Ut(U.r,U.c,r.nCols),ee=Ut(z.r,z.c,r.nCols),ce=Ut(j.r,j.c,r.nCols),re=[[H,ce],[ce,H],[q,ee],[ee,q]].map(Ee=>a.findIndex(Oe=>Ee[0]===Oe[0]&&Ee[1]===Oe[1])).filter(Ee=>Ee!==-1);if(re.length){const Ee=re.map(Oe=>`dpath_es[${Oe+1}]`).join(",");o+=`constraint sum([${Ee}]) <= 1;
`}}const O=_.get(d.TELEPORT),I=O?Object.values(O):[];if(v.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const w of I){const x=w.cell,k=r.getCell(x.r,x.c);if(!k)continue;const U=r.getNeighboorCells(k),z=Ut(k.r,k.c,r.nCols),j=[];for(const q of U){if(I.some(te=>te.cell.r===q.r&&te.cell.c==q.c&&te.value===w.value))continue;const ce=Ut(q.r,q.c,r.nCols);j.push([z,ce]),j.push([ce,z])}const H=j.map(q=>a.findIndex(ee=>q[0]===ee[0]&&q[1]===ee[1])).filter(q=>q!==-1);if(H.length){const q=H.map(ee=>`dpath_es[${ee+1}]`).join(",");o+=`constraint sum([${q}]) <= 1;
`}}}return o}function TU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function DU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function kU(t,e){let n="";return n+=`constraint connect_four_draw_p(${Y.CONNECT_FOUR});
`,n}function GU(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${Y.BOARD}, ${Y.CONNECT_FOUR});
`,n}function MU(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${Y.BOARD}, ${Y.CONNECT_FOUR}, 3);
`,n}const UU=new Map([[d.FILLOMINO,_U],[d.CAVE,pU],[d.GALAXIES,mU],[d.YIN_YANG,QM],[d.SHIKAKU,gU],[d.SHIKAKU_NO_REPEATS_IN_REGION,hU],[d.NORINORI,bU],[d.NURIMISAKI,JM],[d.NURIKABE,eU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,tU],[d.TWO_CONTIGUOUS_REGIONS,nU],[d.CHAOS_CONSTRUCTION,rU],[d.NUMBERED_CHAOS_CONSTRUCTION,iU],[d.SASHIGANE,oU],[d.CELL_CENTER_LOOP_NO_TOUCHING,sU],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,aU],[d.NOT_LOOP_SIZED_REGIONS,lU],[d.MODULAR_LOOP,cU],[d.DOUBLERS,uU],[d.NEGATORS,dU],[d.GOLDILOCKS_ZONE,CU],[d.NEXUS,EU],[d.INDEXER_CELLS,fU],[d.PENTOMINO_TILLING,OU],[d.LITS,IU],[d.CAVE_LITS,wU],[d.LITS_BLACK_WHITE_STAR_BATTLE,yU],[d.NORINORI_STAR_BATTLE,LU],[d.RENBAN_CAVES,vU],[d.MAZE_DIRECTED_PATH,RU],[d.CHAOS_CONSTRUCTION_SUGURU,TU],[d.CONNECT_FOUR,DU],[d.CONNECT_FOUR_DRAW,kU],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,GU],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,MU]]);function FU(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=UU.get(i);if(!a)continue;let c=a(t,i);c=dt(c,`${i}`),e+=c}return e}function $U(){return`
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

`}function PU(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${we(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function Vp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new $D(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add($U());let _=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?_=`1..${c}`:t.globalConstraints.get(d.HEXED_SUDOKU)?r=[...bt.range(1,16)]:r&&(_="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${_};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),HD(i,n),i.add(PU(t)),i.add(Uk(t)),i.add(Fk(t)),i.add(FU(i)),i.add(ZM(t,i)),i.add(Pk(t)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const $g=encodeURIComponent("4.4.2");let cr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ci=[];let Jc;function Jo(){if(!Jc){const e=`importScripts(${JSON.stringify(cr.workerURL)});`;Jc=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(Jc);t.postMessage({wasmURL:cr.wasmURL?cr.wasmURL.toString():new URL(`./minizinc.wasm?version=${$g}`,cr.workerURL).toString(),dataURL:cr.dataURL?cr.dataURL.toString():new URL(`./minizinc.data?version=${$g}`,cr.workerURL).toString()}),Ci.push({worker:t,runCount:0})}function Kp(){for(;Ci.length<cr.numWorkers;)Jo()}async function HU(t){if(cr={...cr,...t},Ci.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Kp(),await Promise.race(Ci.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Ad{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Ad;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Kp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Ci.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Ci.push({worker:o,runCount:a}):(o.terminate(),Jo()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?Ci.push({worker:o,runCount:a}):(o.terminate(),Jo()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);Jo();let c={},u=!1,_=null;return a.onmessage=v=>{if(c[v.data.type])for(const g of c[v.data.type])g(v.data);switch(v.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=v.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const v of c.exit)v({type:"exit",code:null});c={}}},on(v,g){c[v]?c[v].add(g):c[v]=new Set([g])},off(v,g){c[v]&&c[v].delete(g)},then(v,g){const p=m=>{if(m.code===0)v(m.outputFiles[i]);else{const E=_?{message:_.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(p):c.exit=new Set([p])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Jo();let o=null,a={},c=!1,u=null,_={},v="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const p of a[g.data.type])p(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,v="SATISFIED";break;case"status":v=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,p){a[g]?a[g].add(p):a[g]=new Set([p])},off(g,p){a[g]&&a[g].delete(p)},then(g,p){const m=E=>{if(E.code===0)g({status:v,solution:u,statistics:_});else{const O=o?{message:o.message,...E}:E;if(!p)throw O;p(O)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var BU=ie('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button></div>');function WU(t,e){se(e,!1);const n=it(),r=()=>Ce(Tr,"$puzzleMetaStore",n);let i=M(e,"showModal",12,!1);function o(g,p,m){var E=document.createElement("a"),O=new Blob([g],{type:m});E.href=URL.createObjectURL(O),E.download=p,E.click(),URL.revokeObjectURL(E.href)}function a(){const g=ut(ws);return Vp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),p=Mg(g);navigator.clipboard.writeText(p)}function _(){const g=ka(r()),p=a();o(p,`${g}.mzn`,"text/plain")}function v(){const g=ka(r()),p=a(),m=Mg(p);o(m,`${g}.mzn`,"text/plain")}pe(),kr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,p)=>{var m=BU(),E=X(m),O=F(E,2),I=F(O,2),w=F(I,2);W(m),Me("click",E,c),Me("click",O,u),Me("click",I,_),Me("click",w,v),R(g,m)},$$slots:{default:!0},$$legacy:!0}),ae()}var xn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(xn||{});const zU=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Xp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),YU=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),jU=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),VU=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),KU=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),XU=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),qU=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),eu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),ZU=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),tu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),fl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function QU(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=zU(t,n),o=Xp(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=YU(t,n),a=jU(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=VU(t,n),o=KU(t,r);return[i,o]}if(e===d.FOG){const r=t.map(c=>c.fog),o=XU(t,n===1),a=qU(t,r);return[o,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=tu(t,n),i=tu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=tu(t,n),o=fl(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=eu(t,n,e),i=eu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=eu(t,n,e),o=ZU(t,r,e);return[i,o]}}function jo(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),_n.update(i=>i)}function to(t){switch(t.type){case xn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;jo(e,d.DIGIT,n,!0);break}case xn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;jo(e,d.GIVEN,n,!0);break}case xn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;jo(e,d.REGIONS,n,!0);break}case xn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;jo(e,d.HIGHLIGHTS,n,!0);break}case xn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;jo(e,r,n,!0);break}case xn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];_n.update(r=>r);break}case xn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];_n.update(i=>i);break}case xn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];_n.update(r=>r);break}case xn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];_n.update(r=>r);break}case xn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);_n.update(i=>i);break}case xn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),_n.update(r=>r);break}case xn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];_n.update(r=>r);break}}}function JU(t,e){return{execute:()=>{to(t)},unExecute:()=>{to(e)}}}function yo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const v=Number(c[u]),g=n.get(v);g!==void 0&&(r.push(_),i.push([g]))}}const o=fl(r,i);to(o)}function eF(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let p=0;p<e;p++)for(let m=0;m<n;m++)if(!r[p][m]){const E=[];i.push(E),a(p,m,t[p][m])}function a(p,m,E){p<0||p>=e||m<0||m>=n||r[p][m]||t[p][m]!==E||(r[p][m]=!0,i[i.length-1].push([p,m]),a(p+1,m,E),a(p-1,m,E),a(p,m+1,E),a(p,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(p,m){for(const[E,O]of p)for(const[I,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=E+I,k=O+w;if(m.some(([U,z])=>U===x&&z===k))return!0}return!1}for(let p=0;p<i.length;p++)for(let m=p+1;m<i.length;m++)u(i[p],i[m])&&(c[p].add(m),c[m].add(p));const _=[1,4,7,9],v=new Array(i.length).fill(0);function g(p,m){for(const E of c[p])if(v[E]===m)return!1;return!0}for(let p=0;p<i.length;p++)for(const m of _)if(g(p,m)){v[p]=m;break}for(let p=0;p<i.length;p++)for(const[m,E]of i[p])o[m][E]=v[p];return o}function tF(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const _=i[u];for(let v=0;v<_.length;v++){const g=n.getCell(u,v);if(!g||g.given||r&&!g.given&&g.value===null)continue;const p=_[v];o.push(g),a.push(p)}}const c=Xp(o,a);to(c)}function nF(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){yo(o,e,r);return}}}function rF(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){yo(o,e,r);return}}}function iF(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const v=c[u];i.push([v])}}const o=fl(r,i);to(o)}function oF(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;yo(n,e,new Map([[0,4],[1,7],[2,9]]))}function sF(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;yo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function aF(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;yo(n,e,new Map([[1,7],[2,4],[3,9]]))}function lF(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;yo(n,e,new Map([[1,7],[2,8]]))}function cF(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let v=0;v<i.length;v++){const g=i[v];for(let p=0;p<g.length-1;p++){const m=e.getCell(v,p),E=e.getCell(v,p+1);if(!m||!E)continue;const O=g[p],I=g[p+1];if(O===I)continue;const w={colorId:c,p1:{r:v,c:p+1},p2:{r:v+1,c:p+1}};u.push(w)}}for(let v=0;v<a;v++)for(let g=0;g<o-1;g++){const p=e.getCell(g,v),m=e.getCell(g+1,v);if(!p||!m)continue;const E=i[g][v],O=i[g+1][v];if(E===O)continue;const I={colorId:c,p1:{r:g+1,c:v},p2:{r:g+1,c:v+1}};u.push(I)}const _=us(u);_r(_);return}}function uF(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(v)for(const g of e.getOrthogonallyAdjacentCells(v)){if(!g||!(g.r>v.r||g.c>v.c))continue;const p=i[v.r][v.c],m=i[g.r][g.c];if(!(p===1&&m===1))continue;const E={colorId:4,p1:{r:v.r+.5,c:v.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(E)}}}const a=us(o);_r(a);return}}function dF(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=eF(i);if(!o)return;const a=[],c=[];for(let _=0;_<o.length;_++){const v=o[_];for(let g=0;g<v.length;g++){const p=e.getCell(_,g);if(!p)continue;a.push(p);const m=v[g];c.push([m])}}const u=fl(a,c);to(u);return}}function _F(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const v=e.getCell(c,_);if(!v)continue;const g=i[v.r][v.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:v.r+.5,c:v.c+.5};o.push(m)}}const a=dT(o);_r(a);return}}function fF(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[v,g]=_,[p,m]=[Math.floor((v-1)/i.nCols),(v-1)%i.nCols],[E,O]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!Cs({r:p,c:m},{r:E,c:O}))continue;const x={colorId:4,p1:{r:p+.5,c:m+.5},p2:{r:E+.5,c:O+.5}};o.push(x)}const a=us(o);_r(a)}function gF(t,e){const n=e.puzzle,r=n.grid;_r(ld()),tF(t,n),iF(t,r),cF(t,r),oF(t,r),sF(t,r),uF(t,r),rF(t,r),dF(t,r),nF(t,r),_F(t,r),aF(t,r),fF(t,e),lF(t,r)}function hF(){const{subscribe:t,set:e}=Bt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var pF=ie('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function vF(t,e){se(e,!1);const n=it(),r=()=>Ce(ws,"$puzzleStore",n),i=()=>Ce(En,"$gridStore",n),o=()=>Ce(w,"$timer",n),a=T(),c=T(),u=T(),_=T();let v=T(!0),g=T(!1),p=T(null),m=T(100),E=T("100"),O=T(null),I=T("IDLE");const w=hF();function x(q){return q===null?"":String(q)}function k(q){const ee=Math.floor(q/6e4),ce=Math.floor(q%6e4/1e3),te=Math.floor(q%1e3/100),re=ce.toString().padStart(2,"0");return`${ee}:${re}.${te}`}function U(){A(g,!0)}function z(q){const ee=parseInt(q);typeof ee=="number"&&ee>=1&&A(m,ee)}async function j(){A(O,0),A(I,"SOLVING...");const q=new Ad;Ip();const ee=Vp(h(a));q.addFile("test.mzn",ee.model_str),w.reset(),w.start(),A(p,q.solve({options:{solver:"chuffed","num-solutions":h(m)}})),h(p).on("solution",ce=>{const te=ce.output.json;ce.type==="solution"&&h(O)!==null&&A(O,h(O)+1),gF(te,ee)}),h(p).on("error",ce=>{A(u,"Solve"),A(I,"ERROR"),console.log(ce.message),w.stop(),h(p)&&h(p).cancel()}),h(p).on("warning",ce=>{A(I,"WARNING"),console.log(ce.message)}),h(p).then(ce=>{A(I,ce.status),A(u,"Solve"),w.stop()})}function H(){h(p)===null||!h(p).isRunning()?j():h(p)!==null&&h(p).isRunning()&&(A(I,"IDLE"),A(u,"Solve"),w.stop(),h(p).cancel())}D(()=>r(),()=>{A(a,r())}),D(()=>i(),()=>{A(c,i())}),D(()=>{},()=>{A(u,"Solve")}),D(()=>o(),()=>{A(_,o())}),D(()=>h(p),()=>{h(p)&&(h(p)!==null&&h(p).isRunning()?A(u,"Stop"):A(u,"Solve"))}),Ie(),pe(),il(t,{get isOpen(){return h(v)},set isOpen(q){A(v,q)},$$slots:{"panel-header":(q,ee)=>{rl(q,{slot:"panel-header",title:"Solver",get isOpen(){return h(v)},set isOpen(ce){A(v,ce)},$$legacy:!0})},"panel-content":(q,ee)=>{var ce=pF(),te=de(ce),re=F(te,2);WU(re,{get showModal(){return h(g)},set showModal(tn){A(g,tn)},$$legacy:!0});var Ee=F(re,2),Oe=X(Ee,!0);W(Ee);var he=F(Ee,2),Ue=X(he,!0);W(he);var Qe=F(he,2),Ne=X(Qe);Kt(Ne),L(Ne,"min",1),L(Ne,"max",200),L(Ne,"step",1),W(Qe);var Le=F(Qe,2),lt=X(Le,!0);J(()=>nt(lt,`Solution Count: ${x(h(O))}`)),W(Le);var ze=F(Le,2),gn=X(ze,!0);J(()=>nt(gn,`Elapsed Time: ${k(h(_))}`)),W(ze);var bn=F(ze,2),Mr=X(bn,!0);W(bn),J(()=>{nt(Oe,h(u)),nt(Ue,`Max. Solutions: ${h(m)}`),nt(Mr,`Status: ${h(I)}`)}),Me("click",te,U),Me("click",Ee,H),jn(Ne,()=>h(E),tn=>A(E,tn)),Me("input",Ne,()=>z(h(E))),R(q,ce)}},$$legacy:!0}),ae()}var mF=ie('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!> <!></div></div>');function EF(t){var e=mF(),n=X(e),r=X(n);RD(r);var i=F(r,2);vF(i,{});var o=F(i,2);f2(o,{elementHandlers:Rt});var a=F(o,2);m2(a,{elementHandlers:Rt});var c=F(a,2);o2(c,{elementHandlers:Rt});var u=F(c,2);B2(u,{elementHandlers:Rt});var _=F(u,2);DD(_,{}),W(n),W(e),R(t,e)}class De{constructor(e,n){me(this,"x");me(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new De(this.x+e.x,this.y+e.y)}subtract(e){return new De(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new De(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new De(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function CF(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const kn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new De(i.x,i.y)};function Sa(t,e=!0,n=.5){const r=Za(t),i=new De(r.c+.5,r.r+.5),o=t.distance(i);return!e||o<n?{cell:r,dist:o}:null}function qp(t,e){const n=Za(t),r=new De(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function rs(t,e){const n=Za(t),r=Ox(n),o=r.map(_=>new De(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function is(t,e){const n=Za(t),r=Ix(n),o=r.map(_=>new De(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function nu(t,e=!0,n=.5){const r=is(t,void 0);if(!r)return null;const i=rs(t,void 0);if(!i)return null;const o=qp(t);if(!o)return null;const a=[o.cellCenter,r.edge,i.corner],u=a.map(O=>new De(O.c,O.r)).map(O=>O.distance(t)),_=Math.min(...u),v=u.findIndex(O=>O===_),g=a[v],m=["cell center","edge","corner"][v],E={cellCenter:o.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?E:null}class Lo{constructor(e=.4){me(this,"onTap",null);me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onMove",null);me(this,"_prevPoint",null);me(this,"_prevCell",null);me(this,"_lastPointerDownTime",0);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_tapCount",0);me(this,"_lastTapPosition",null);me(this,"_lastTapTime",0);me(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=kn(e,n);if(!i)return;this._prevPoint=i;const o=Sa(i,!r,this._margin);if(!o)return;const a=o.cell;this._prevCell=a,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:a,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const i=Sa(r,!0,this._margin);if(!i)return;const o=i.cell;if(this._prevCell&&Ke(this._prevCell,o))return;this._prevCell=o,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:o,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=kn(e,n);if(!r)return;const i=Sa(r,!1);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Pg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function OF(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Hg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Bg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function IF(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Pg(i,e):i.value!==null?OF(i,e):n===d.CORNER_PM&&i.cornerMarks.length?Hg(i,e):n===d.CENTER_PM&&i.centerMarks.length?Bg(i,e):i.cornerMarks.length?Hg(i,e):i.centerMarks.length?Bg(i,e):i.highlights.length?Pg(i,e):r:r}function oi(t,e,n,r=!1){if(!(t&&e))return;const i=_d(t,e),o=fd(t,n),a=ys(i,o);dn(a,r)}function Si(t,e,n,r=!0){if(!(t&&e))return;const i=fd(t,n),o=_d(t,e),a=ys(i,o);dn(a,r)}function Cu(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Tg(r,t,n),a=Tg(r,t,e),c=ys(o,a);dn(c,i)}function bF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,v=!1,g;(O=>{O.DYNAMIC="DYNAMIC",O.BULB="BULB",O.BODY="BODY"})(g||(g={}));let p="DYNAMIC";function m(O){_=!1;const I=O.cell;if(Xt(O.cell,o)){if(p==="DYNAMIC"){const x=ut(vt),k=YR(x,n,I);if(k){const z=LR(k.arrow,k.matchLineIdx);Cu(k.id,k.arrow,z,n,!0),v=!0;return}const U=wg(x,n,I);if(!U)_=!0,p="BULB",u=null,a=null;else{p="BODY",u=U[0],a=U[1],a=gu(a,I),Ht(n,u,a);return}}if(p==="BULB"&&!u){u=bt.uniqueId(),a=rp(n,[I]),ii(u,a);return}else p==="BULB"&&u&&a?(a=IR(a,I),Ht(n,u,a)):p==="BODY"&&u&&a&&(a=bR(a,I,r==null?void 0:r.allowSelfIntersection),Ht(n,u,a))}}return i.onDragStart=O=>{p="DYNAMIC",m(O)},i.onDrag=O=>{m(O)},i.onDragEnd=()=>{if(v){v=!1;return}p==="BODY"&&u&&a?wR(a)?(a=yR(a),Ht(n,u,a)):(Cu(u,c,a,n),c=a):p==="BULB"&&(oi(u,a,n),c=a),p="DYNAMIC"},i.onTap=O=>{if(_)return;const I=O.cell,w=ut(vt);if(wg(w,n,I)){Si(u,a,n);return}},{pointerDown:O=>{O.button===0&&i.pointerDown(O,t)},pointerMove:O=>{i.pointerMove(O,t)},pointerUp:O=>{i.pointerUp(O,t)},keyDown:()=>{},keyUp:()=>{}}}function wF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const p=g.cell;Xt(g.cell,o)&&(c=OR(c,p,a),Ht(n,u,c))}return i.onDragStart=g=>{u=bt.uniqueId(),c=tp(n,[],r==null?void 0:r.defaultValue),ii(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?wi(n,u):u&&c&&oi(u,c,n,!1),u=null},i.onTap=g=>{const p=g.cell,m=ut(vt),E=zR(m,n,p);if(E){const[O,I]=E;Si(O,I,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function yF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=ut(vt),m=g.cell;if(!Xt(g.cell,o))return;const O=Ta(p,n,m);if(c===0&&(c=O?2:1),!(r!=null&&r.oppositeConstraintId&&Ta(p,r.oppositeConstraintId,m))){if(O&&c===2){const[I,w]=O;Si(I,w,n)}else if(c===1){const I=lp(n,m,r==null?void 0:r.defaultValue),w=bt.uniqueId();oi(w,I,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)};function _(g){const p=ut(fr);if(!p)return;let m=p.constraint;const E=p.id;if(m.value===void 0||!lo(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=bs(m,O),Ht(n,E,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class gl{constructor(e){me(this,"onDragStart",null);me(this,"target");this.target=e}pointerDown(e,n){const r=kn(e,n);if(!r)return;const i=is(r,void 0);if(!i)return;const o=rs(r,void 0);if(!o)return;const a=Sa(r,!1);if(!a)return;const c=qp(r);if(!c)return;let u;this.target===It.CORNER?u=o.corner:this.target===It.EDGE?u=i.edge:this.target===It.CELL_CENTER?u=c.cellCenter:this.target===It.CORNER_OR_EDGE?o.dist<i.dist?u=o.corner:u=i.edge:this.target===It.CORNER_OR_CENTER?o.dist<c.dist?u=o.corner:u=c.cellCenter:this.target===It.EDGE_OR_CENTER?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<o.dist&&i.dist<c.dist?u=i.edge:o.dist<i.dist&&o.dist<c.dist?u=o.corner:u=c.cellCenter;let _=this.target===It.CORNER||this.target===It.CORNER_OR_CENTER?"corner":"edge";(this.target===It.CORNER_OR_EDGE||this.target===It.CLOSEST)&&o.dist<i.dist&&(_="corner");const v=_==="edge"?2*i.idx:2*o.idx+1,g={event:e,cell:a.cell,edge:i.edge,corner:o.corner,closest:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:v};this.onDragStart&&this.onDragStart(g)}}function LF(t,e,n,r){const i=(r==null?void 0:r.targets)??It.CLOSEST,o=new gl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=ut(vt),E=p.cell,O=p.closest;if(!Xt(E,a))return;const w=VR(m,n,O);if(w){wi(n,w);return}c=dp(n,O,""),u=bt.uniqueId(),ii(u,c)}function v(p){const m=ut(fr);if(!m)return;let E=m.constraint;const O=m.id;if(E.value===void 0||!lo(p)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(E==null?void 0:E.value,p.key);I!==void 0&&I!==E.value&&(E=bs(E,I),Ht(n,O,E))}return o.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&o.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{v(p)},keyUp:()=>{}}}function AF(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??It.CORNER_OR_EDGE,o=new gl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(p){const m=ut(vt),E=p.cell,O=p.direction,I=rd(O);if(Xt(E,a))return;const x=Wh(E,I);if(!Xt(x,a))return;const U=jR(m,n,E,I);if(U){wi(n,U);return}c=ap(n,E,I,""),u=bt.uniqueId(),ii(u,c)}function v(p){const m=ut(fr);if(!m)return;let E=m.constraint;const O=m.id;if(E.value===void 0||!lo(p)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(E==null?void 0:E.value,p.key);I!==void 0&&I!==E.value&&(E=bs(E,I),Ht(n,O,E))}return o.onDragStart=p=>{_(p)},{pointerDown:p=>{p.button===0&&o.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:p=>{v(p)},keyUp:()=>{}}}function NF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(m){const E=ut(vt),O=m.cell;if(Xt(m.cell,o)){if(m.event.shiftKey){const w=bg(E,n,O);w&&(c=w[0],a=w[1],Oo({id:c,constraint:a}),_=1)}if(_===0){const w=bg(E,n,O);if(_=w?2:1,w){Si(w[0],w[1],n);return}}if(!a&&_===1){a=ip(n,[O]),c=bt.uniqueId(),ii(c,a);return}else if(a&&c&&_===1){const w=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=NR(a,O,w),Ht(n,c,a);return}}}function g(m){const E=ut(fr);if(!E)return;let O=E.constraint;const I=E.id;if(O.value===void 0||!lo(m)||!(r!=null&&r.valueUpdater))return;const w=r.valueUpdater(O==null?void 0:O.value,m.key);w!==void 0&&w!==O.value&&(O=SR(O,w),Ht(n,I,O))}return i.onDragStart=m=>{c=null,a=null,_=0,v(m)},i.onDrag=m=>{v(m)},i.onDragEnd=()=>{c&&a&&oi(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const Vi=new Lo;function Wg(t,e){return t.shiftKey?Qo.SELECTING:t.ctrlKey||t.metaKey||e?Qo.DYNAMIC:t.altKey?Qo.DESELECTING:Qo.RESETTING}function ds(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const o=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===o||n==="different"&&c.fog!==o)}}return t}function SF(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=ds(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function os(t,e,n,r){const i=QU(e,n,r);if(i){const o=i[0],a=i[1],c=JU(o,a),u=pu(t),v=[pT(u,u),c];hT(v)}}function xF(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=ds(e,r,"any",-1,!1);if(i.length)return os(n,i,r,t),!0}else{const i=ds(e,r,"different",t,!0);if(i.length)return os(n,i,r,t),!0}return!1}function RF(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};Vi.onTap=m=>{if(m.tapCount!==2)return;const O=Xt(m.cell,i)?m.cell:null;if(!O)return;const I=IF(O,e,n),w=pu(I);Ki(w)},Vi.onDragStart=m=>{const E=Xt(m.cell,i),O=ut(vu),I=Wg(m.event,O),w=E?m.cell:null,x=nT(w,I);Ki(x)},Vi.onDrag=m=>{const O=Xt(m.cell,i)?m.cell:null,I=iT(O);Ki(I)};function o(m){if(!cw(m))return!1;const E=e.getAllCells().map(I=>({r:I.r,c:I.c})),O=pu(E);return Ki(O),!0}function a(m){if(!gw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=pw(m);return yr(E),!0}return m.type==="keyup"?(mT(),!0):!1}function c(m){if(!fw(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),O=r[(E+1)%r.length];return yr(O),mu(O),!0}else{const E=hw(m.code);return yr(E),mu(E),!0}}function u(m){if(!mw(m))return!1;const E=ut(bi).lastCell;let O=null;if(E!==null){const[x,k]=Ew(m),[U,z]=[yg(E.r+k,0,i.nRows-1),yg(E.c+x,0,i.nCols-1)];O={r:U,c:z}}else O={r:0,c:0};const I=Wg(m,!1),w=oT(O,I);return Ki(w),!0}function _(m){const E=_w(m);if(E===void 0)return!1;const O=ut(bi).cells,I=[];if(O.forEach(w=>{const x=e.getCell(w.r,w.c);x&&I.push(x)}),n===d.FOG)return xF(E,I,O);if(E===null){const{tool:w,cells:x}=SF(I,n);if(x.length)return os(O,x,w,E),!0}else{let w=ds(I,n,"different",E,!0);if(w.length)return os(O,w,n,E),!0;if(w=ds(I,n,"equal",E,!0),w.length)return os(O,w,n,E),!0}return!1}function v(m){return m.repeat?!1:_(m.key)}const g=bt.throttle(m=>{Vi.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&Vi.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){Vi.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||v(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function TF(t,e,n,r){const i=[Be.N,Be.NE,Be.E,Be.SE,Be.S,Be.SW,Be.W,Be.NW],o=new gl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(_||(_={}));let v=0;function g(E){const O=ut(vt),I=E.cell;if(!Xt(E.cell,a))return;E.event.altKey&&(v=2);const x=Ta(O,n,I),k=rd(E.direction);if(x){[u,c]=x,c.direction===k||v===2?Si(u,c,n):(c={...c,direction:k},Ht(n,u,c));return}else v!==2&&(c=cp(n,I,k),u=bt.uniqueId(),oi(u,c,n,!0))}function p(E){if(!c||!u||!uw(E))return;const I=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[I]},Ht(n,u,c)}return o.onDragStart=E=>{v=0,g(E)},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:E=>{p(E)},keyUp:()=>{}}}function DF(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function kF(t,e,n,r){const i=new gl(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(p=>{p[p.DYNAMIC=0]="DYNAMIC",p[p.ADDING=1]="ADDING",p[p.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function v(p){const m=ut(vt),E=p.cell;if(console.log(p),!Xt(p.cell,o))return;p.event.altKey&&(_=2);const I=rd(p.direction),w=Ta(m,n,E);if(w){if(c=w[0],a=w[1],_===2)wi(n,w[0]);else{const x=DF(a.directions,I);x.length?(a={...a,directions:x},Ht(n,c,a)):wi(n,c)}return}else _!==2&&(a=up(n,E,I),c=bt.uniqueId(),ii(c,a))}return i.onDragStart=p=>{_=0,v(p)},{pointerDown:p=>{p.button===0&&i.pointerDown(p,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class GF{constructor(){me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onTap",null);me(this,"_prevCoord",null);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=kn(e,n);if(!r)return;const i=is(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const i=is(r,this._margin);if(!i||this._prevCoord&&Ke(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=kn(e,n);if(!r)return;const i=is(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function MF(t,e,n,r){const i=new GF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=ut(vt),m=g.coord,E=id(m);if(!E.every(w=>Xt(w,o)))return;let I=null;if(c===0&&(I=BR(p,n,E),c=I?2:1),I&&c===2){const w=I[0];Si(w,I[1],n)}else if(c===1){const w=(r==null?void 0:r.defaultValue)??"",x=sp(n,E,w),k=bt.uniqueId();oi(k,x,n,!0)}}function _(g){const p=ut(fr);if(!p)return;let m=p.constraint;const E=p.id;if(m.value===void 0||!lo(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=bs(m,O),Ht(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class UF{constructor(){me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onTap",null);me(this,"onMove",null);me(this,"_prevCoord",null);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=kn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=rs(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const i=rs(r,this._margin);if(!i||this._prevCoord&&Ke(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=kn(e,n);if(!r)return;const i=rs(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function FF(t,e,n,r){const i=new UF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const p=ut(vt),m=g.coord,E=nd(m);if(!E.every(w=>Xt(w,o)))return;let I=null;if(c===0&&(I=WR(p,n,m),c=I?2:1),I&&c===2){const w=I[0];Si(w,I[1],n);return}else if(c===1){const w=op(n,E,r==null?void 0:r.defaultValue),x=bt.uniqueId();oi(x,w,n,!0)}}function _(g){const p=ut(fr);if(!p)return;let m=p.constraint;const E=p.id;if(m.value===void 0||!lo(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=bs(m,O),Ht(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class $F{constructor(){me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onTap",null);me(this,"_prevType",null);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=kn(e,n);if(!r)return;const i=nu(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=kn(e,n);if(!r)return;const i=nu(r,!1);if(!i||this._prevCoords&&Ke(this._prevCoords,i.target))return;this._isTap=!1;const o={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&pp(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=kn(e,n);if(!r)return;const i=nu(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&Ke(this._prevCoords,i.target)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function PF(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new $F;return r.onTap=o=>{const a=o.coords,c=ut(Ma),u=ut(Ga);if(o.type==="cell center"){if(!Ex(a,n))return;const v=u.getCellMarker(a);if(v)if(v.marker==="X"){const g={...a,colorId:c,marker:"O"},p=ya(g),m=ya(v),E=vi(p,m);dn(E)}else{const g=Sg(a),p=ya(v),m=vi(g,p);dn(m)}else{const g={...a,colorId:c,marker:"X"},p=ya(g),m=Sg(a),E=vi(p,m);dn(E)}}else if(o.type==="edge"){const _=u.getEdgeMarker(a);if(_){const v=Ng(a),g=Ag(_),p=vi(v,g);dn(p)}else{const v={...a,colorId:c},g=Ag(v),p=Ng(a),m=vi(g,p);dn(m)}}},r.onDrag=o=>{const a=o.coords,c=ut(Ma);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},_=_T(u);_r(_)}},r.onDragEnd=()=>{const o=ut(Ga);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>qi(c,u)));if(a.length){const c=us(a),u=xg(a),_=vi(c,u);dn(_)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>qi(c,u)));if(a.length){const c=xg(a),u=us(a),_=vi(c,u);dn(_)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function HF(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function BF(t,e){const n=zh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function WF(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function zF(t){for(let e=0;;e++){const n=WF(e);if(!t.has(n))return n}}function YF(t,e,n){const r=new Lo,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,_="cells2",v;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(v||(v={}));let g=0;function p(E){const O=ut(vt),I=E.cell;if(!Xt(E.cell,i))return;const x=KR(O,n,I);if(g===0&&(x?(c=x[0],o=x[1],g=2,u=I,_=o.cells2.some(U=>Ke(U,I))?"cells2":"cells"):g=1),g===1&&c===null){c=bt.uniqueId();const k=XR(O,n),U=zF(k);o=HF(n,[I],U),ii(c,o);return}else if(g===1&&c&&o){o=BF(o,I),Ht(n,c,o);return}else if(g===2&&c&&o&&u){const k={r:I.r-u.r,c:I.c-u.c},z=(_==="cells2"?o.cells2:o.cells).map(H=>({r:H.r+k.r,c:H.c+k.c}));if(!z.every(H=>Xt(H,i)))return;_==="cells"?o={...o,cells:z}:o={...o,cells2:z},u=I,Ht(n,c,o)}}return r.onDragStart=E=>{c=null,o=null,g=0,u=null,p(E)},r.onDrag=E=>{p(E)},r.onDragEnd=()=>{c&&o&&(g===1?oi(c,o,n):g===2&&Cu(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==1&&(wi(n,c),c=null,o=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function jF(t){if(t.type===ge.SELECTION)return function(n,r,i){return RF(n,r,i)};if(t.type===ge.SINGLE_CELL){let e=function(r,i,o){return yF(r,i,o,n)};const n=t;return e}else if(t.type===ge.SINGLE_CELL_ARROW){let e=function(r,i,o){return TF(r,i,o,n)};const n=t;return e}else if(t.type===ge.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return kF(r,i,o,n)};const n=t;return e}else if(t.type===ge.EDGE){let e=function(r,i,o){return MF(r,i,o,n)};const n=t;return e}else if(t.type===ge.CORNER){let e=function(r,i,o){return FF(r,i,o,n)};const n=t;return e}else if(t.type===ge.LINE){let e=function(r,i,o){return wF(r,i,o,n)};const n=t;return e}else if(t.type===ge.ARROW){let e=function(r,i,o){return bF(r,i,o,n)};const n=t;return e}else if(t.type===ge.CAGE){let e=function(r,i,o){return NF(r,i,o,n)};const n=t;return e}else{if(t.type===ge.CLONE)return function(n,r,i){return YF(n,r,i)};if(t.type===ge.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return LF(r,i,o,n)};const n=t;return e}else if(t.type===ge.OUTSIDE_DIRECTION){let e=function(r,i,o){return AF(r,i,o,n)};const n=t;return e}else if(t.type===ge.PEN)return function(n,r){return PF(n,r)}}}const Zp=ro([Ji,En,qt],([t,e,n])=>{const r=Zr(n,Rt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?jF(i):void 0;return o?o(t,e,n):void 0});var VF=ue('<path class="cursor svelte-zsq70u"></path>');function KF(t,e){se(e,!1);const n=it(),r=()=>Ce(qt,"$toolStore",n),i=()=>Ce(bi,"$selectionStore",n),o=T(),a=T(),c=.25;function u(v){if(!v)return"";const[g,p]=[v.c,v.r];return`M${g},${p}L${g+c},${p}L${g},${p+c}Z`}D(()=>r(),()=>{A(o,Vu(r()))}),D(()=>i(),()=>{A(a,u(i().lastCell))}),Ie(),pe();var _=VF();J(()=>{L(_,"d",h(a)),L(_,"visibility",h(o)?"visible":"hidden")}),R(t,_),ae()}var XF=ue('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function qF(t,e){se(e,!1);let n=M(e,"gridShape",8);pe();var r=XF(),i=X(r);L(i,"x",0),L(i,"y",0),W(r),J(()=>{L(i,"width",n().nCols),L(i,"height",n().nRows)}),R(t,r),ae()}var ZF=ue('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),QF=ue('<g class="grid-lines"></g>');function JF(t,e){se(e,!1);const n=it(),r=()=>Ce(En,"$gridStore",n),i=T();D(()=>r(),()=>{A(i,r().getAllCells())}),Ie(),pe();var o=QF();st(o,5,()=>h(i),Lt,(a,c)=>{var u=ZF();L(u,"width",1),L(u,"height",1),J(()=>{L(u,"x",h(c).c),L(u,"y",h(c).r)}),R(a,u)}),W(o),R(t,o),ae()}function e8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function t8(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=e8(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],_=JSON.stringify(c),v=JSON.stringify(u);n(_,v)}}return e}function n8(t,e=0,n=!1){const r=[],i=t8(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const v=Array.from(u)[0];let g=JSON.parse(v),p=v;const m=[];do{const E=i.get(p);if(E===void 0)throw new Error(`Corner with no adjacencies found ${p}`);const O=new De(_.c,_.r),I=new De(g.c,g.r);let w=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,x=null,k=null;for(const re of E){const Ee=JSON.parse(re),Oe=new De(Ee.c,Ee.r),he=I.subtract(O),Ue=Oe.subtract(I),Qe=he.perpDotProduct(Ue);w<Qe!=n&&(w=Qe,k=Ee,x=re)}if(n&&E.size>1&&o.add(p),k===null||x===null)throw new Error("Corner with no adjacencies found");E.delete(x),E.size<=0&&i.delete(p);const U=e*(g.c-_.c),z=e*(k.c-g.c),j=e*(_.r-g.r),H=e*(g.r-k.r),q=H+w*z,ee=U+w*j,ce=new De(g.c+q,g.r+ee),te=4;o.has(p)?(m.push(new De(ce.x-te*U,ce.y-te*z)),m.push(new De(ce.x-te*j,ce.y-te*H))):m.push(ce),_=g,g=k,p=x}while(p!==v);r.push(m)}return r}function no(t,e=0,n=!1){return n8(t,e,n).map(o=>Ao(o,!0)).join("")}const r8=[new De(-.5,-.5),new De(.5,-.5),new De(.5,.5),new De(-.5,.5)];function i8(t,e,n=r8){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,_=c/(360/i),v=u/(360/i),g=Math.floor(_)%i,p=Math.ceil(_)%i,m=n[g].lerp(n[p],_%1),E=Math.floor(v)%i,O=Math.ceil(v)%i,I=n[E].lerp(n[O],v%1);r.push(m);for(let x=Math.ceil(_);x<=Math.floor(v);x++)r.push(n[x%i]);r.push(I);const w=new De(0,0);return r.push(w),r}function Qp(t,e,n=new De(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),v=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new De(_,v));c.push(g)}return c}function Ao(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function hl(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(v=>new De(v.x,v.y));if(r&&o.length>1){const v=o[o.length-1];for(let p=0;p<o.length-1;p++)if(v.equals(o[p])){o.push(o[p+1]);break}const g=o[0];for(let p=1;p<o.length;p++)if(g.equals(o[p])){o.unshift(o[p-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let v=o[1].subtract(o[0]);v=v.normalise(),v=v.scale(e),o[0]=o[0].add(v)}if(n){const v=o.length;let g=o[v-2].subtract(o[v-1]);g=g.normalise(),g=g.scale(n),o[v-1]=o[v-1].add(g)}}if(!i)return Ao(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let v=2;v<u;v++){const g=o[v-2],p=o[v-1],m=o[v];let E=g.subtract(p).normalise();E=E.scale(i),E=E.add(p);let O=m.subtract(p).normalise();O=O.scale(i),O=O.add(p),c.push(`L${E.x},${E.y} Q ${p.x},${p.y} ${O.x},${O.y}`)}const _=o[u-1];return c.push(`L${_.x},${_.y}`),c.join(" ")}function _s(t,e={}){const n=Fa(t);return hl(n,e)}function Xn(t){return new De(t.c+.5,t.r+.5)}function Fa(t){return t.map(n=>Xn(n))}const o8=[new De(-.5,-.5),new De(.5,-.5),new De(.5,.5),new De(-.5,.5),new De(0,-.5),new De(0,.5),new De(-.5,0),new De(.5,0)];function s8(t,e){const n=o8[t];return n.subtract(n.scale(e))}function Jp(t,e){const n=[new De(t.c-e,t.r-e),new De(t.c+e,t.r+e)],r=[new De(t.c-e,t.r+e),new De(t.c+e,t.r-e)];return[n,r].map(o=>Ao(o,!1)).join("")}const a8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function pl(t,e="none"){return a8.get(t)||e}function l8(t,e,n){let r=[];function o(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new De(-.12,-.32),new De(0,-.4),new De(.12,-.32)]:a=[new De(-.12,-.4),new De(0,-.32),new De(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const _=new De(n+.5,e+.5);return u.add(_)})),r}var c8=ue('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),u8=ue('<g class="regions-border"></g>');function d8(t,e){se(e,!1);const n=it(),r=()=>Ce(_n,"$cellsStore",n),i=T(),o=T();function a(u,_){return u.filter(p=>p.region===_).map(p=>({r:p.r,c:p.c}))}D(()=>r(),()=>{A(i,r())}),D(()=>h(i),()=>{A(o,new Set(h(i).map(u=>u.region).filter(u=>u!==null)))}),Ie(),pe();var c=u8();st(c,5,()=>h(o),Lt,(u,_)=>{var v=c8();J(()=>L(v,"d",no(a(h(i),h(_)),0,!1))),J(()=>L(v,"id",`region-${h(_)??""}`)),R(u,v)}),W(c),R(t,c),ae()}var _8=ue('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function f8(t,e){se(e,!1);const n=it(),r=()=>Ce(bi,"$selectionStore",n),i=()=>Ce(qt,"$toolStore",n),o=T(),a=T(),c=T(),u=T(),_=T(),v=T();let g=M(e,"boundingBox",8);const p=.06,m=.05,E="#080808",O="#b2b2b2";D(()=>Z(g()),()=>{A(o,g().x)}),D(()=>Z(g()),()=>{A(a,g().y)}),D(()=>r(),()=>{A(c,r().cells)}),D(()=>h(c),()=>{A(u,no(h(c),0))}),D(()=>h(c),()=>{A(_,no(h(c),p))}),D(()=>i(),()=>{A(v,Vu(i()))}),Ie(),pe();var I=_8(),w=X(I),x=X(w);L(x,"stdDeviation",m),Qi(),W(w);var k=F(w),U=X(k);L(U,"fill",O);var z=F(U);L(z,"fill",E),W(k);var j=F(k);W(I),J(()=>{L(I,"visibility",h(v)?"visible":"hidden"),L(k,"x",h(o)),L(k,"y",h(a)),L(U,"x",h(o)),L(U,"y",h(a)),L(z,"d",h(_)),L(j,"d",h(u))}),R(t,I),ae()}var g8=ue('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function h8(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"grid",8);D(()=>Z(i()),()=>{A(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),D(()=>h(n),()=>{A(r,no(h(n),0))}),Ie(),pe();var o=g8(),a=X(o);W(o),J(()=>L(a,"d",h(r))),R(t,o),ae()}function gr(t){return ro(vt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,element:o});return r})}const Nd=gr(Mb),p8=ro(Nd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),v8=ro(Nd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),m8=gr(Wu),E8=gr(wh),C8=gr(bh),O8=gr(zu),I8=gr(yh),b8=gr(Yu),w8=gr(ju),y8=gr(Lh),L8=gr(cs);var A8=ue('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function Ns(t,e){let n=M(e,"l",8,.2),r=M(e,"id",8),i=M(e,"strokeWidth",8),o=M(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=A8();L(u,"viewBox","0 0 1 1"),L(u,"refX",a),L(u,"refY",a),L(u,"markerWidth",1),L(u,"markerHeight",1);var _=X(u);L(_,"d",c),W(u),J(()=>{L(u,"id",r()),L(_,"stroke-width",i()),L(_,"stroke",o())}),R(t,u)}var N8=ue("<path></path>");function fs(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let v=M(e,"cells",8),g=M(e,"shape",8,Ku);const p="square";D(()=>Z(g()),()=>{A(n,g().inset??.06)}),D(()=>Z(g()),()=>{A(r,g().stroke??"black")}),D(()=>Z(g()),()=>{A(i,g().strokeWidth??.03)}),D(()=>Z(g()),()=>{A(o,g().strokeDasharray??.08)}),D(()=>Z(g()),()=>{A(a,g().fill??"none")}),D(()=>Z(g()),()=>{A(c,g().connectDiag??!0)}),D(()=>(Z(v()),h(n),h(c)),()=>{A(u,no(v(),h(n),h(c)))}),D(()=>Z(g()),()=>{A(_,g().strokeLinejoin??"miter")}),Ie(),pe();var m=N8();L(m,"stroke-linecap",p),J(()=>{L(m,"d",h(u)),L(m,"stroke",h(r)),L(m,"stroke-width",h(i)),L(m,"fill",h(a)),L(m,"stroke-dasharray",h(o)),L(m,"stroke-linejoin",h(_))}),R(t,m),ae()}var S8=ue('<path class="arrow-line" fill="none"></path>'),x8=ue('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function R8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T(),m=T(),E=T();let O=M(e,"tool",8),I=M(e,"arrowId",8),w=M(e,"boundingBox",8);const x=en(O().toolId,Rt)??Xu,k="round",U="round",z=crypto.randomUUID(),j=`arrow-mask-${I()}-${z}`,H=`arrow-marker-${I()}-${z}`;D(()=>Z(O()),()=>{A(n,O().shape??x)}),D(()=>Z(w()),()=>{A(r,w().x)}),D(()=>Z(w()),()=>{A(i,w().y)}),D(()=>h(n),()=>{var he;A(o,((he=h(n))==null?void 0:he.r)??.4)}),D(()=>h(n),()=>{var he;A(a,((he=h(n))==null?void 0:he.stroke)??"gray")}),D(()=>h(n),()=>{var he;A(c,((he=h(n))==null?void 0:he.strokeWidth)??.1)}),D(()=>h(n),()=>{var he;A(u,((he=h(n))==null?void 0:he.strokeDasharray)??0)}),D(()=>h(n),()=>{var he;A(_,((he=h(n))==null?void 0:he.opacity)??.8)}),D(()=>(h(o),h(n)),()=>{var he,Ue,Qe,Ne;A(v,{shortenHead:h(o),shortenTail:((Ue=(he=h(n))==null?void 0:he.linePathOptions)==null?void 0:Ue.shortenTail)??.2,bezierRounding:((Ne=(Qe=h(n))==null?void 0:Qe.linePathOptions)==null?void 0:Ne.bezierRounding)??.4})}),D(()=>h(n),()=>{var he;A(g,((he=h(n))==null?void 0:he.fill)??"none")}),D(()=>h(n),()=>{var he;A(p,((he=h(n))==null?void 0:he.inset)??.2)}),D(()=>h(p),()=>{A(m,{...x,strokeDasharray:0,strokeLinejoin:"round",inset:h(p)})}),D(()=>Z(O()),()=>{A(E,_s(O().cells))}),Ie(),pe();var q=x8(),ee=de(q);L(ee,"id",j);var ce=X(ee),te=F(ce);W(ee);var re=F(ee);Ns(re,{id:H,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var Ee=F(re);fs(Ee,{get cells(){return O().cells},get shape(){return h(m)}});var Oe=F(Ee);st(Oe,1,()=>O().lines,Lt,(he,Ue)=>{var Qe=Se(),Ne=de(Qe);{var Le=lt=>{var ze=S8();J(()=>L(ze,"d",_s(h(Ue),h(v)))),L(ze,"stroke-linejoin",k),L(ze,"stroke-linecap",U),L(ze,"marker-end",`url(#${H??""})`),J(()=>{L(ze,"stroke",h(a)),L(ze,"stroke-width",h(c)),L(ze,"opacity",h(_)),L(ze,"stroke-dasharray",h(u))}),R(lt,ze)};fe(Ne,lt=>{h(Ue).length>1&&lt(Le)})}R(he,Qe)}),J(()=>{L(ee,"x",h(r)),L(ee,"y",h(i)),L(ce,"x",h(r)),L(ce,"y",h(i)),L(te,"stroke-width",2*h(o)-h(c)),L(te,"d",h(E))}),R(t,q),ae()}var T8=ue('<path class="arrow-line" fill="none"></path>'),D8=ue('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function k8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T();let p=M(e,"tool",8),m=M(e,"arrowId",8),E=M(e,"boundingBox",8);const O=en(p().toolId,Rt)??Xu,I="round",w="round",x=crypto.randomUUID(),k=`arrow-mask-${m()}-${x}`,U=`arrow-marker-${m()}-${x}`;D(()=>Z(p()),()=>{A(n,p().shape??O)}),D(()=>Z(E()),()=>{A(r,E().x)}),D(()=>Z(E()),()=>{A(i,E().y)}),D(()=>h(n),()=>{var re;A(o,((re=h(n))==null?void 0:re.r)??.4)}),D(()=>h(n),()=>{var re;A(a,((re=h(n))==null?void 0:re.stroke)??"gray")}),D(()=>h(n),()=>{var re;A(c,((re=h(n))==null?void 0:re.strokeWidth)??.1)}),D(()=>h(n),()=>{var re;A(u,((re=h(n))==null?void 0:re.strokeDasharray)??0)}),D(()=>h(n),()=>{var re;A(_,((re=h(n))==null?void 0:re.opacity)??.8)}),D(()=>(h(o),h(n)),()=>{var re,Ee,Oe,he;A(v,{shortenHead:h(o),shortenTail:((Ee=(re=h(n))==null?void 0:re.linePathOptions)==null?void 0:Ee.shortenTail)??.2,bezierRounding:((he=(Oe=h(n))==null?void 0:Oe.linePathOptions)==null?void 0:he.bezierRounding)??.4})}),D(()=>Z(p()),()=>{A(g,_s(p().cells))}),Ie(),pe();var z=D8(),j=de(z);L(j,"id",k);var H=X(j),q=F(H);W(j);var ee=F(j);Ns(ee,{id:U,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var ce=F(ee);L(ce,"mask",`url(#${k??""})`);var te=F(ce);st(te,1,()=>p().lines,Lt,(re,Ee)=>{var Oe=Se(),he=de(Oe);{var Ue=Qe=>{var Ne=T8();J(()=>L(Ne,"d",_s(h(Ee),h(v)))),L(Ne,"stroke-linejoin",I),L(Ne,"stroke-linecap",w),L(Ne,"marker-end",`url(#${U??""})`),J(()=>{L(Ne,"stroke",h(a)),L(Ne,"stroke-width",h(c)),L(Ne,"opacity",h(_)),L(Ne,"stroke-dasharray",h(u))}),R(Qe,Ne)};fe(he,Qe=>{h(Ee).length>1&&Qe(Ue)})}R(re,Oe)}),J(()=>{L(j,"x",h(r)),L(j,"y",h(i)),L(H,"x",h(r)),L(H,"y",h(i)),L(q,"stroke-width",2*h(o)-h(c)),L(q,"d",h(g)),L(ce,"d",h(g)),L(ce,"stroke-width",2*h(o)+h(c)),L(ce,"stroke",h(a))}),R(t,z),ae()}var G8=ue('<g class="arrow-tool"><!></g>');function M8(t,e){se(e,!1);const n=T();let r=M(e,"tool",8),i=M(e,"arrowId",8),o=M(e,"boundingBox",8);const a=en(r().toolId,Rt)??Xu;D(()=>Z(r()),()=>{A(n,r().shape??a)}),Ie(),pe();var c=G8(),u=X(c);{var _=g=>{R8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return o()}})},v=g=>{k8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return o()}})};fe(u,g=>{h(n).type===P.BULBOUS_ARROW?g(_):g(v,!1)})}W(c),R(t,c),ae()}var U8=ue("<g></g>"),F8=ue('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function $8(t,e){se(e,!1);const n=it(),r=()=>Ce(b8,"$arrowToolsStore",n),i=T();let o=M(e,"boundingBox",8);D(()=>r(),()=>{A(i,r())}),Ie();var a=F8();st(a,5,()=>h(i),Lt,(c,u)=>{let _=()=>h(u).toolId,v=()=>h(u).element;var g=U8();st(g,5,()=>Object.entries(v()),p=>p[0],(p,m)=>{M8(p,{get arrowId(){return h(m)[0]},get tool(){return h(m)[1]},get boundingBox(){return o()}})}),W(g),J(()=>Qr(g,`element-group ${_()}`)),R(c,g)}),W(a),R(t,a),ae()}var P8=ue('<!><path fill="none"></path>',1);function H8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8),u=M(e,"id",8);const _=c().cell,v=en(c().toolId,Rt)??zb,g=.3;function p(x,k){const U=Qa(k),z=new De(U.c,U.r).normalise().scale(g),j=Xn(x),H=j.subtract(z),q=j.add(z);return[H,q]}const m=crypto.randomUUID(),E=`single-cell-arrow-marker-${u()}-${m}`;D(()=>Z(c()),()=>{A(n,c().direction)}),D(()=>Z(c()),()=>{A(r,c().shape??v)}),D(()=>h(r),()=>{A(i,h(r).strokeWidth??.1)}),D(()=>h(r),()=>{A(o,h(r).stroke??"black")}),D(()=>h(n),()=>{A(a,hl(p(_,h(n))))}),Ie(),pe();var O=P8(),I=de(O);Ns(I,{id:E,l:.15,get stroke(){return h(o)},get strokeWidth(){return h(i)}});var w=F(I);L(w,"marker-end",`url(#${E??""})`),J(()=>{L(w,"d",h(a)),L(w,"stroke",h(o)),L(w,"stroke-width",h(i))}),R(t,O),ae()}var B8=ue('<path fill="none"></path>'),W8=ue("<!><!>",1);function z8(t,e){se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"tool",8),a=M(e,"id",8);const c=o().cell,u=en(o().toolId,Rt)??Yb,_=.2;function v(w,x){const k=Qa(x),U=new De(k.c,k.r),j=Xn(w).add(U.scale(.4));return[j.subtract(U.normalise().scale(_)),j]}function g(w){return hl(v(c,w))}const p=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${a()}-${p}`;D(()=>Z(o()),()=>{A(n,o().shape??u)}),D(()=>h(n),()=>{A(r,h(n).strokeWidth??.08)}),D(()=>h(n),()=>{A(i,h(n).stroke??"black")}),Ie(),pe();var E=W8(),O=de(E);Ns(O,{id:m,l:.1,get stroke(){return h(i)},get strokeWidth(){return h(r)}});var I=F(O);st(I,1,()=>o().directions,Lt,(w,x)=>{var k=B8();J(()=>L(k,"d",g(h(x)))),L(k,"marker-end",`url(#${m??""})`),J(()=>{L(k,"stroke",h(i)),L(k,"stroke-width",h(r))}),R(w,k)}),R(t,E),ae()}var Y8=ue('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function gs(t,e){se(e,!1);const n=T();let r=M(e,"value",8,""),i=M(e,"fontSize",8,.2),o=M(e,"x",8),a=M(e,"y",8),c=M(e,"position",8,"TL"),u=M(e,"fontColor",8,"var(--text-primary-color)"),_=M(e,"fontWeight",8,400),v=T(null),g=T(null);function p(x,k,U){const z=["TL","TR"].includes(U),H=["TL","BL"].includes(U)?x+.05:x,q=k;return new De(H,q)}function m(x){return["TL","BL"].includes(x)?"start":"end"}function E(x){return["TL","TR"].includes(x)?"text-before-edge":""}Nb(()=>{if(!h(v)||!h(g))return;const x=h(v).getBBox();h(g).setAttribute("x",String(x.x)),h(g).setAttribute("y",String(x.y+x.height*.1)),h(g).setAttribute("width",String(x.width)),h(g).setAttribute("height",String(x.height*.8))}),D(()=>(Z(o()),Z(a()),Z(c())),()=>{A(n,p(o(),a(),c()))}),Ie(),pe();var O=Se(),I=de(O);{var w=x=>{var k=Y8(),U=de(k);Oi(U,H=>A(g,H),()=>h(g));var z=F(U);J(()=>L(z,"text-anchor",m(c()))),J(()=>L(z,"dominant-baseline",E(c())));var j=X(z,!0);W(z),Oi(z,H=>A(v,H),()=>h(v)),J(()=>{var H,q;L(z,"x",(H=h(n))==null?void 0:H.x),L(z,"y",(q=h(n))==null?void 0:q.y),L(z,"font-size",i()),L(z,"fill",u()),L(z,"font-weight",_()),nt(j,r())}),R(x,k)};fe(I,x=>{r().length&&x(w)})}R(t,O),ae()}var j8=ie("<!> <!>",1);function ev(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"cells",8),o=M(e,"shape",8,Ku),a=M(e,"value",8,void 0);D(()=>Z(i()),()=>{A(n,i()[0])}),D(()=>h(n),()=>{A(r,new De(h(n).c,h(n).r))}),Ie(),pe();var c=j8(),u=de(c);fs(u,{get cells(){return i()},get shape(){return o()}});var _=F(u,2);{var v=g=>{gs(g,{get value(){return a()},get x(){return h(r).x},get y(){return h(r).y},position:"TL"})};fe(_,g=>{a()&&a().length&&g(v)})}R(t,c),ae()}var V8=ue("<rect></rect>");function K8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T();let m=M(e,"cx",8),E=M(e,"cy",8),O=M(e,"shape",8);D(()=>Z(O()),()=>{A(n,O().r??.5)}),D(()=>(Z(m()),h(n)),()=>{A(r,m()-h(n))}),D(()=>(Z(E()),h(n)),()=>{A(i,E()-h(n))}),D(()=>h(n),()=>{A(o,2*h(n))}),D(()=>h(n),()=>{A(a,2*h(n))}),D(()=>Z(O()),()=>{A(c,O().stroke??"black")}),D(()=>Z(O()),()=>{A(u,O().strokeWidth??.02)}),D(()=>Z(O()),()=>{A(_,O().fill??"none")}),D(()=>Z(O()),()=>{A(v,O().angle??0)}),D(()=>Z(O()),()=>{A(g,O().strokeDasharray??0)}),D(()=>Z(O()),()=>{A(p,O().opacity??1)}),Ie(),pe();var I=V8();J(()=>{L(I,"x",h(r)),L(I,"y",h(i)),L(I,"width",h(o)),L(I,"height",h(a)),L(I,"stroke",h(c)),L(I,"stroke-width",h(u)),L(I,"fill",h(_)),L(I,"transform",`rotate(${h(v)}, ${m()}, ${E()})`),L(I,"stroke-dasharray",h(g)),L(I,"opacity",h(p))}),R(t,I),ae()}var X8=ue('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function zg(t,e){se(e,!1);const n=it(),r=()=>Ce(p8,"$minimumConstraintsStore",n),i=()=>Ce(v8,"$maximumConstraintsStore",n),o=T(),a=T(),c=T();let u=M(e,"coord",8),_=M(e,"minOrMax",8);function v(I,w){const x=[!0,!0,!0,!0];let k=[[0,-1],[1,0],[0,1],[-1,0]];for(let U=0;U<k.length;U++){let z=k[U];const j={r:I.r+z[1],c:I.c+z[0]};x[U]=!Object.values(w).some(H=>Ke(j,H.cell))}return x}function g(I,w){let x=l8(_(),I.r,I.c);const k=v(I,w);return x=x.filter((z,j)=>k[j]),x.map(z=>Ao(z,!1)).join("")}function p(I,w){return _()==="max"?w:I}D(()=>Z(u()),()=>{A(o,u().c)}),D(()=>Z(u()),()=>{A(a,u().r)}),D(()=>(r(),i()),()=>{A(c,p(r(),i()))}),Ie(),pe();var m=X8(),E=X(m);L(E,"width",1),L(E,"height",1);var O=F(E);J(()=>L(O,"d",g(u(),h(c)))),W(m),J(()=>{L(E,"x",h(o)),L(E,"y",h(a))}),R(t,m),ae()}var q8=ue("<circle></circle>");function Ar(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"x",8),_=M(e,"y",8),v=M(e,"shape",8);D(()=>Z(v()),()=>{A(n,v().r??.35)}),D(()=>Z(v()),()=>{A(r,v().stroke??"black")}),D(()=>Z(v()),()=>{var p;A(i,(p=v())==null?void 0:p.opacity)}),D(()=>Z(v()),()=>{A(o,v().strokeWidth??.02)}),D(()=>Z(v()),()=>{A(a,v().fill??"none")}),D(()=>Z(v()),()=>{A(c,v().strokeDasharray??0)}),Ie(),pe();var g=q8();J(()=>{L(g,"cx",u()),L(g,"cy",_()),L(g,"r",h(n)),L(g,"stroke",h(r)),L(g,"stroke-width",h(o)),L(g,"fill",h(a)),L(g,"opacity",h(i)),L(g,"stroke-dasharray",h(c))}),R(t,g),ae()}var Z8=ue("<ellipse></ellipse>");function Q8(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T();let _=M(e,"cx",8),v=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().width??.5)}),D(()=>Z(g()),()=>{A(r,g().height??.5)}),D(()=>Z(g()),()=>{A(i,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;A(o,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{A(a,g().strokeWidth??.02)}),D(()=>Z(g()),()=>{A(c,g().fill??"none")}),D(()=>Z(g()),()=>{A(u,g().angle??0)}),Ie(),pe();var p=Z8();J(()=>{L(p,"cx",_()),L(p,"cy",v()),L(p,"rx",h(n)/2),L(p,"ry",h(r)/2),L(p,"stroke",h(i)),L(p,"stroke-width",h(a)),L(p,"fill",h(c)),L(p,"opacity",h(o)),L(p,"transform",`rotate(${h(u)}, ${_()}, ${v()} )`)}),R(t,p),ae()}var J8=ue("<polygon></polygon>");function $a(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let v=M(e,"cx",8),g=M(e,"cy",8),p=M(e,"shape",8);D(()=>Z(p()),()=>{A(n,p().n??3)}),D(()=>Z(p()),()=>{A(r,p().r??.5)}),D(()=>(h(r),h(n),Z(v()),Z(g())),()=>{A(i,Qp(h(r),h(n),new De(v(),g())))}),D(()=>h(i),()=>{A(o,h(i).map(E=>`${E.x},${E.y}`).join(" "))}),D(()=>Z(p()),()=>{A(a,p().stroke??"black")}),D(()=>Z(p()),()=>{A(c,p().strokeWidth??.02)}),D(()=>Z(p()),()=>{A(u,p().fill??"none")}),D(()=>Z(p()),()=>{A(_,p().angle??0)}),Ie(),pe();var m=J8();J(()=>{L(m,"points",h(o)),L(m,"stroke",h(a)),L(m,"stroke-width",h(c)),L(m,"fill",h(u)),L(m,"transform",`rotate(${h(_)}, ${v()}, ${g()} )`)}),R(t,m),ae()}var e$=ue("<rect></rect>");function t$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T();let _=M(e,"cx",8),v=M(e,"cy",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().width??.5)}),D(()=>Z(g()),()=>{A(r,g().height??.5)}),D(()=>(Z(_()),h(n)),()=>{A(i,_()-h(n)/2)}),D(()=>(Z(v()),h(r)),()=>{A(o,v()-h(r)/2)}),D(()=>Z(g()),()=>{A(a,g().stroke||"black")}),D(()=>Z(g()),()=>{A(c,g().strokeWidth||.023)}),D(()=>Z(g()),()=>{A(u,g().fill||"none")}),Ie(),pe();var p=e$();J(()=>{L(p,"x",h(i)),L(p,"y",h(o)),L(p,"width",h(n)),L(p,"height",h(r)),L(p,"stroke",h(a)),L(p,"stroke-width",h(c)),L(p,"fill",h(u))}),R(t,p),ae()}function vl(t,e){se(e,!1);const n=T();let r=M(e,"cx",8),i=M(e,"cy",8),o=M(e,"shape",8);D(()=>(Z(o()),P),()=>{var v;A(n,((v=o())==null?void 0:v.type)??P.CIRCLE)}),Ie(),pe();var a=Se(),c=de(a);{var u=v=>{Ar(v,{get x(){return r()},get y(){return i()},get shape(){return o()}})},_=v=>{var g=Se(),p=de(g);{var m=O=>{Q8(O,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=O=>{var I=Se(),w=de(I);{var x=U=>{K8(U,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},k=U=>{var z=Se(),j=de(z);{var H=ee=>{t$(ee,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},q=ee=>{var ce=Se(),te=de(ce);{var re=Oe=>{$a(Oe,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},Ee=Oe=>{Ar(Oe,{get x(){return r()},get y(){return i()},get shape(){return o()}})};fe(te,Oe=>{h(n)===P.POLYGON?Oe(re):Oe(Ee,!1)},!0)}R(ee,ce)};fe(j,ee=>{h(n)===P.RECTANGLE?ee(H):ee(q,!1)},!0)}R(U,z)};fe(w,U=>{h(n)===P.SQUARE?U(x):U(k,!1)},!0)}R(O,I)};fe(p,O=>{h(n)===P.ELLIPSE?O(m):O(E,!1)},!0)}R(v,g)};fe(c,v=>{h(n)===P.CIRCLE?v(u):v(_,!1)})}R(t,a),ae()}var n$=ue("<circle></circle>");function r$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"x",8),_=M(e,"y",8),v=M(e,"value",8),g=M(e,"shape",8);D(()=>Z(g()),()=>{A(n,g().r??.35)}),D(()=>Z(g()),()=>{A(r,g().stroke??"black")}),D(()=>Z(g()),()=>{var m;A(i,(m=g())==null?void 0:m.opacity)}),D(()=>Z(g()),()=>{A(o,g().strokeWidth??.02)}),D(()=>Z(v()),()=>{A(a,v()==="1"?"var(--constraint-color-red)":v()==="2"?"var(--constraint-color-green)":v()==="3"?"var(--constraint-color-blue)":"none")}),D(()=>Z(g()),()=>{A(c,g().strokeDasharray??0)}),Ie(),pe();var p=n$();J(()=>{L(p,"cx",u()),L(p,"cy",_()),L(p,"r",h(n)),L(p,"stroke",h(r)),L(p,"stroke-width",h(o)),L(p,"fill",h(a)),L(p,"opacity",h(i)),L(p,"stroke-dasharray",h(c))}),R(t,p),ae()}var i$=ue('<g class="single-cell-tool"><!><!></g>');function o$(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8),u=M(e,"id",8);const _=c().cell,v=en(c().toolId,Rt)??Wb;D(()=>Z(c()),()=>{A(n,c().shape??v)}),D(()=>(h(n),P),()=>{var w;A(r,((w=h(n))==null?void 0:w.type)||P.CIRCLE)}),D(()=>{},()=>{A(i,{x:_.c+.5,y:_.r+.5})}),D(()=>De,()=>{A(o,new De(_.c,_.r))}),D(()=>Z(c()),()=>{A(a,c().value)}),Ie(),pe();var g=i$(),p=X(g);{var m=w=>{zg(w,{coord:_,minOrMax:"min"})},E=w=>{var x=Se(),k=de(x);{var U=j=>{zg(j,{coord:_,minOrMax:"max"})},z=j=>{var H=Se(),q=de(H);{var ee=te=>{r$(te,{get x(){return h(i).x},get y(){return h(i).y},get value(){return h(a)},get shape(){return h(n)}})},ce=te=>{var re=Se(),Ee=de(re);{var Oe=Ue=>{ev(Ue,{cells:[_],get shape(){return h(n)},get value(){return c().value}})},he=Ue=>{vl(Ue,{get cx(){return h(i).x},get cy(){return h(i).y},get shape(){return h(n)}})};fe(Ee,Ue=>{h(r)===P.CAGE?Ue(Oe):Ue(he,!1)},!0)}R(te,re)};fe(q,te=>{c().toolId===d.COLORED_COUNTING_CIRCLES?te(ee):te(ce,!1)},!0)}R(j,H)};fe(k,j=>{c().toolId===d.MAXIMUM?j(U):j(z,!1)},!0)}R(w,x)};fe(p,w=>{c().toolId===d.MINIMUM?w(m):w(E,!1)})}var O=F(p);{var I=w=>{gs(w,{get value(){return h(a)},get x(){return h(o).x},get y(){return h(o).y},position:"TL"})};fe(O,w=>{h(r)!==P.CAGE&&c().toolId!==d.COLORED_COUNTING_CIRCLES&&h(a)&&w(I)})}W(g),J(()=>L(g,"id",`constraint-${u()}`)),R(t,g),ae()}var s$=ue("<g></g>"),a$=ue('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function l$(t,e){se(e,!1);const n=it(),r=()=>Ce(Nd,"$singleCellToolsStore",n),i=T();D(()=>r(),()=>{A(i,r())}),Ie();var o=a$();st(o,5,()=>h(i),Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var v=s$();st(v,5,()=>Object.entries(_()),g=>g[0],(g,p)=>{var m=Se(),E=de(m);{var O=w=>{H8(w,{get tool(){return h(p)[1]},get id(){return h(p)[0]}})},I=w=>{var x=Se(),k=de(x);{var U=j=>{z8(j,{get tool(){return h(p)[1]},get id(){return h(p)[0]}})},z=j=>{var H=Se(),q=de(H);{var ee=ce=>{o$(ce,{get tool(){return h(p)[1]},get id(){return h(p)[0]}})};fe(q,ce=>{h(p)[1].type==="SIMPLE"&&ce(ee)},!0)}R(j,H)};fe(k,j=>{h(p)[1].type==="MULTIARROW"?j(U):j(z,!1)},!0)}R(w,x)};fe(E,w=>{h(p)[1].type==="ARROW"?w(O):w(I,!1)})}R(g,m)}),W(v),J(()=>Qr(v,`element-group ${u()}`)),R(a,v)}),W(o),R(t,o),ae()}function c$(t,e){const n=t.getRow(e.r);return new Set(n)}function u$(t,e){const n=t.getCol(e.c);return new Set(n)}function d$(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function _$(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function f$(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function g$(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function h$(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function p$(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function v$(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((p,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function m$(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function E$(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function C$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(_$(t,i))),e.get(d.ANTIKING)&&(r=r.union(f$(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(g$(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(p$(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(h$(t,i)))),r}function ru(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=E$(t,n,c);i=new Set([...i,...u])}return i}function O$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],_=v$(t,i,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=m$(t,i,u);r=new Set([...r,..._])}return r=ru(t,e,i,d.KILLER_CAGE,r),r=ru(t,e,i,d.PARITY_BALANCE_CAGE,r),r=ru(t,e,i,d.SPOTLIGHT_CAGE,r),r}function tv(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...c$(i,e),...u$(i,e),...d$(i,e)])),n=new Set([...n,...C$(i,r,e)]),n=new Set([...n,...O$(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function I$(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(tv(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var b$=ue('<tspan class="svelte-xct9ah"> </tspan>'),w$=ue('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function y$(t,e){se(e,!1);const n=T();let r=M(e,"cell",8),i=M(e,"seen_values",8);const o=.25;function a(v){return i().find(p=>p===v)!==void 0}D(()=>Z(r()),()=>{A(n,Xn({r:r().r,c:r().c}))}),Ie(),pe();var c=Se(),u=de(c);{var _=v=>{var g=w$(),p=X(g);L(p,"font-size",o),st(p,5,()=>r().centerMarks,Lt,(m,E)=>{var O=b$();const I=qe(()=>a(h(E)));J(()=>yt(O,"conflict",h(I)));var w=X(O,!0);W(O),J(()=>nt(w,h(E))),R(m,O)}),W(p),W(g),J(()=>{L(p,"x",h(n).x),L(p,"y",h(n).y),L(p,"textLength",r().centerMarks.length>5?"0.9":void 0)}),R(v,g)};fe(u,v=>{r().centerMarks.length&&v(_)})}R(t,c),ae()}var L$=ue('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),A$=ue('<g class="corner-marks-group"></g>');function N$(t,e){se(e,!1);let n=M(e,"cell",8),r=M(e,"seen_values",8);const i=.25,o=.28;function a(g){const p=g.cornerMarks.slice(0,8),m=Xn({r:g.r,c:g.c});return p.map((E,O)=>{const I=s8(O,o);return{pos:m.add(I),value:E,idx:O}})}function c(g){return r().find(m=>m===g)!==void 0}pe();var u=Se(),_=de(u);{var v=g=>{var p=A$();st(p,5,()=>a(n()),Lt,(m,E)=>{let O=()=>h(E).pos,I=()=>h(E).value;var w=L$();L(w,"font-size",i);const x=qe(()=>c(I()));var k=X(w,!0);W(w),J(()=>{L(w,"x",O().x),L(w,"y",O().y),yt(w,"conflict",h(x)),nt(k,I())}),R(m,w)}),W(p),R(g,p)};fe(_,g=>{n().cornerMarks.length&&g(v)})}R(t,u),ae()}var S$=ue('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),x$=ue('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),R$=ue('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),T$=ue("<!><!>",1),D$=ue('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function k$(t,e){se(e,!1);const n=it(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce(ws,"$puzzleStore",n),o=()=>Ce(qt,"$toolStore",n),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T();let m=M(e,"cell",8);const E=.8,O=400;function I(z,j){if(!z)return[];let q=[...tv(h(v),j.toCoords())].map(ee=>ee.value).filter(ee=>ee!==null);return q=[...new Set(q)],q}function w(z){return z?"1":"0"}D(()=>Z(m()),()=>{A(a,m().value)}),D(()=>Z(m()),()=>{A(c,m().given)}),D(()=>Z(m()),()=>{A(u,Xn({r:m().r,c:m().c}))}),D(()=>r(),()=>{A(_,r().highlightPencilmarkConflicts)}),D(()=>i(),()=>{A(v,i())}),D(()=>r(),()=>{A(g,r().showSolution)}),D(()=>(h(_),Z(m())),()=>{A(p,I(h(_),m()))}),Ie(),pe();var x=Se(),k=de(x);{var U=z=>{var j=D$(),H=X(j);{var q=ce=>{var te=Se(),re=de(te);{var Ee=Oe=>{var he=S$();L(he,"font-size",E),L(he,"font-weight",O);var Ue=X(he,!0);W(he),J(()=>{L(he,"x",h(u).x),L(he,"y",h(u).y),nt(Ue,m().region)}),R(Oe,he)};fe(re,Oe=>{m().region!==null&&Oe(Ee)})}R(ce,te)},ee=ce=>{var te=Se(),re=de(te);{var Ee=he=>{var Ue=Se(),Qe=de(Ue);{var Ne=Le=>{var lt=x$();L(lt,"font-size",E),L(lt,"font-weight",O);var ze=X(lt,!0);J(()=>nt(ze,w(m().fog))),W(lt),J(()=>{L(lt,"x",h(u).x),L(lt,"y",h(u).y)}),R(Le,lt)};fe(Qe,Le=>{m().fog!==null&&Le(Ne)})}R(he,Ue)},Oe=he=>{var Ue=Se(),Qe=de(Ue);{var Ne=lt=>{var ze=R$();L(ze,"font-size",E),L(ze,"font-weight",O);var gn=X(ze,!0);W(ze),J(()=>{L(ze,"x",h(u).x),L(ze,"y",h(u).y),yt(ze,"given",h(c)),nt(gn,h(a))}),R(lt,ze)},Le=lt=>{var ze=T$(),gn=de(ze);N$(gn,{get cell(){return m()},get seen_values(){return h(p)}});var bn=F(gn);y$(bn,{get cell(){return m()},get seen_values(){return h(p)}}),R(lt,ze)};fe(Qe,lt=>{h(a)!==null?lt(Ne):lt(Le,!1)},!0)}R(he,Ue)};fe(re,he=>{o()===d.FOG?he(Ee):he(Oe,!1)},!0)}R(ce,te)};fe(H,ce=>{o()===d.REGIONS?ce(q):ce(ee,!1)})}W(j),J(()=>yt(j,"hide-given",m().given)),R(z,j)};fe(k,z=>{h(g)||z(U)})}R(t,x),ae()}var G$=ue("<path></path>"),M$=ue('<g class="highlights-group"></g>');function U$(t,e){se(e,!1);const n=it(),r=()=>Ce(qt,"$toolStore",n);let i=M(e,"cell",8);function o(_){const v=Xn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let O=i8(E,g);O=O.map(w=>w.add(v));const I=Ao(O,!0);return{colorId:m,d:I}})}pe();var a=Se(),c=de(a);{var u=_=>{var v=Se(),g=de(v);{var p=m=>{var E=M$();st(E,5,()=>o(i()),Lt,(O,I)=>{let w=()=>h(I).colorId,x=()=>h(I).d;var k=G$();J(()=>{Qr(k,`highlight-wedge color-${w()??""} svelte-1ynpdsm`),L(k,"d",x())}),R(O,k)}),W(E),R(m,E)};fe(g,m=>{i().highlights.length&&m(p)})}R(_,v)};fe(c,_=>{r()!==d.REGIONS&&_(u)})}R(t,a),ae()}var F$=ue('<path class="cell-marker" fill="none"></path>'),$$=ue('<circle fill="none" opacity="0.9"></circle>');function P$(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"marker",8);const o=.3,a=.08;D(()=>Z(i()),()=>{A(n,Jp(i(),o))}),D(()=>Z(i()),()=>{A(r,pl(i().colorId,"black"))}),Ie(),pe();var c=Se(),u=de(c);{var _=g=>{var p=F$();L(p,"stroke-width",a),J(()=>{L(p,"d",h(n)),L(p,"stroke",h(r))}),R(g,p)},v=g=>{var p=$$();L(p,"r",o),L(p,"stroke-width",a),J(()=>{Qr(p,`cell-marker color-${i().colorId??""}`),L(p,"cx",i().c),L(p,"cy",i().r),L(p,"stroke",h(r))}),R(g,p)};fe(u,g=>{i().marker==="X"?g(_):g(v,!1)})}R(t,c),ae()}var H$=ue('<g class="cell-markers"></g>');function B$(t,e){let n=M(e,"markers",8);var r=H$();st(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{P$(i,{get marker(){return h(o)}})}),W(r),R(t,r)}var W$=ue('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function z$(t,e){se(e,!1);const n=T();let r=M(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(v=>[new De(v.p1.c,v.p1.r),new De(v.p2.c,v.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?pl(_,"black"):"darkred"}D(()=>Z(r()),()=>{A(n,Ao(o(r().draftLine)))}),Ie(),pe();var c=W$();J(()=>L(c,"stroke",a(r()))),L(c,"stroke-width",i),L(c,"opacity",.5),J(()=>L(c,"d",h(n))),R(t,c),ae()}var Y$=ue('<path fill="none" opacity="0.9"></path>');function j$(t,e){se(e,!1);const n=T(),r=T();let i=M(e,"marker",8);const o=.08,a=.04;D(()=>Z(i()),()=>{A(n,Jp(i(),o))}),D(()=>Z(i()),()=>{A(r,pl(i().colorId,"black"))}),Ie(),pe();var c=Y$();L(c,"stroke-width",a),J(()=>{L(c,"d",h(n)),Qr(c,`edge-marker color-${i().colorId??""}`),L(c,"stroke",h(r))}),R(t,c),ae()}var V$=ue('<g class="edge-markers"></g>');function K$(t,e){let n=M(e,"markers",8);var r=V$();st(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{j$(i,{get marker(){return h(o)}})}),W(r),R(t,r)}var X$=ue('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),q$=ue('<g class="line-markers svelte-yha19m"></g>');function Z$(t,e){se(e,!1);let n=M(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return pl(c,"black")}pe();var a=q$();st(a,5,n,c=>i(c),(c,u)=>{var _=X$();L(_,"stroke-width",r),J(()=>L(_,"stroke",o(h(u).colorId))),J(()=>{L(_,"x1",h(u).p1.c),L(_,"y1",h(u).p1.r),L(_,"x2",h(u).p2.c),L(_,"y2",h(u).p2.r),Qr(_,`line-marker color-${h(u).colorId??""} svelte-yha19m`)}),R(c,_)}),W(a),R(t,a),ae()}var Q$=ue('<g class="pen-tool"><!><!><!><!></g>');function J$(t,e){se(e,!1);const n=it(),r=()=>Ce(Ga,"$penToolStore",n),i=T();D(()=>r(),()=>{A(i,{draftLine:r().draftLine,mode:r().mode})}),Ie(),pe();var o=Q$(),a=X(o);Z$(a,{get lineMarkers(){return r().lineMarkers}});var c=F(a);K$(c,{get markers(){return r().edgeMarkers}});var u=F(c);B$(u,{get markers(){return r().cellMarkers}});var _=F(u);z$(_,{get draftLineMarker(){return h(i)}}),W(o),R(t,o),ae()}var e4=ue('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function t4(t,e){se(e,!1);const n=it(),r=()=>Ce(bi,"$selectionStore",n),i=()=>Ce(ei,"$settingsStore",n),o=()=>Ce(ws,"$puzzleStore",n),a=()=>Ce(qt,"$toolStore",n),c=T(),u=T(),_=T(),v=T(),g={type:P.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function p(I,w){return I.length?I$(h(_),I):[]}D(()=>r(),()=>{A(c,r().cells)}),D(()=>i(),()=>{A(u,i().highlightCellsSeenBySelection)}),D(()=>o(),()=>{A(_,o())}),D(()=>a(),()=>{A(v,Vu(a()))}),Ie(),pe();var m=Se(),E=de(m);{var O=I=>{var w=e4(),x=X(w),k=qe(()=>p(h(c),h(_)));fs(x,{get cells(){return h(k)},shape:g}),W(w),R(I,w)};fe(E,I=>{h(u)&&h(v)&&I(O)})}R(t,m),ae()}function ml(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...fp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function n4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...ml(r))}return new Set(e)}function r4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...ml(r))}return new Set(e)}function i4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...ml(r))}return new Set(e)}function o4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function s4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function a4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function l4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=ml(i);o.length&&e.push(...o)}return new Set(e)}function c4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...n4(t),...r4(t),...i4(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(o4(t))),e.get(d.ANTIKING)&&(n=n.union(s4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(a4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(l4(t))),n}function u4(t,e){return[...new Set([...c4(t,e)])]}var d4=ue('<rect class="conflict svelte-4mp6ok"></rect>'),_4=ue('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function f4(t,e){se(e,!1);const n=it(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce(En,"$gridStore",n),o=()=>Ce(Dr,"$globalConstraintsStore",n),a=()=>Ce(_n,"$cellsStore",n),c=T(),u=T(),_=T(),v=T();P.CAGE;function g(O){return u4(h(u),h(_)).map(x=>x.toCoords())}D(()=>r(),()=>{A(c,r().checkConflicts)}),D(()=>i(),()=>{A(u,i())}),D(()=>o(),()=>{A(_,o())}),D(()=>a(),()=>{A(v,a())}),Ie(),pe();var p=Se(),m=de(p);{var E=O=>{var I=_4();st(I,5,()=>g(h(v)),Lt,(w,x)=>{var k=d4();L(k,"width",1),L(k,"height",1),J(()=>{L(k,"x",h(x).c),L(k,"y",h(x).r)}),R(w,k)}),W(I),R(O,I)};fe(m,O=>{h(c)&&O(E)})}R(t,p),ae()}var g4=ue('<line class="diag svelte-ylotlw"></line>'),h4=ue('<line class="antidiag svelte-ylotlw"></line>'),p4=ue('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),v4=ue('<line class="diag svelte-ylotlw"></line>'),m4=ue('<line class="antidiag svelte-ylotlw"></line>'),E4=ue('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),C4=ue('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function O4(t,e){se(e,!1);const n=it(),r=()=>Ce(Dr,"$globalConstraintsStore",n),i=()=>Ce(En,"$gridStore",n),o=T(),a=T(),c=T(),u=T(),_=T(),v=T(),g=T(),p=T(),m=T(),E=T(),O=T(),I=T(),w=0,x=0,k=0,U=0;D(()=>r(),()=>{A(o,r())}),D(()=>(h(o),d),()=>{A(a,!!h(o).get(d.POSITIVE_DIAGONAL))}),D(()=>(h(o),d),()=>{A(c,!!h(o).get(d.NEGATIVE_DIAGONAL))}),D(()=>(h(o),d),()=>{A(u,!!h(o).get(d.NEGATIVE_ANTIDIAGONAL))}),D(()=>(h(o),d),()=>{A(_,!!h(o).get(d.POSITIVE_ANTIDIAGONAL))}),D(()=>(h(o),d),()=>{A(v,!!h(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),D(()=>(h(o),d),()=>{A(g,!!h(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),D(()=>i(),()=>{A(p,i())}),D(()=>h(p),()=>{A(m,h(p).nCols)}),D(()=>h(p),()=>{A(E,h(p).nRows)}),D(()=>h(p),()=>{A(O,h(p).nCols)}),D(()=>h(p),()=>{A(I,h(p).nRows)}),Ie(),pe();var z=C4(),j=X(z);{var H=Ne=>{var Le=g4();L(Le,"x1",w),L(Le,"y1",x),J(()=>{L(Le,"x2",h(O)),L(Le,"y2",h(I))}),R(Ne,Le)};fe(j,Ne=>{h(c)&&Ne(H)})}var q=F(j);{var ee=Ne=>{var Le=h4();L(Le,"x1",w),L(Le,"y1",x),J(()=>{L(Le,"x2",h(O)),L(Le,"y2",h(I))}),R(Ne,Le)};fe(q,Ne=>{h(u)&&Ne(ee)})}var ce=F(q);{var te=Ne=>{var Le=p4();L(Le,"x1",w),L(Le,"y1",x),J(()=>{L(Le,"x2",h(O)),L(Le,"y2",h(I))}),R(Ne,Le)};fe(ce,Ne=>{h(v)&&Ne(te)})}var re=F(ce);{var Ee=Ne=>{var Le=v4();L(Le,"x2",U),L(Le,"y1",k),J(()=>{L(Le,"x1",h(m)),L(Le,"y2",h(E))}),R(Ne,Le)};fe(re,Ne=>{h(a)&&Ne(Ee)})}var Oe=F(re);{var he=Ne=>{var Le=m4();L(Le,"x2",U),L(Le,"y1",k),J(()=>{L(Le,"x1",h(m)),L(Le,"y2",h(E))}),R(Ne,Le)};fe(Oe,Ne=>{h(_)&&Ne(he)})}var Ue=F(Oe);{var Qe=Ne=>{var Le=E4();L(Le,"x2",U),L(Le,"y1",k),J(()=>{L(Le,"x1",h(m)),L(Le,"y2",h(E))}),R(Ne,Le)};fe(Ue,Ne=>{h(g)&&Ne(Qe)})}W(z),R(t,z),ae()}var I4=ue('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function b4(t,e){se(e,!1);const n=it(),r=()=>Ce(_n,"$cellsStore",n),i=()=>Ce(bp,"$showFogStore",n),o=()=>Ce(tl,"$solutionStore",n),a=()=>Ce(En,"$gridStore",n),c=T(),u=T(),_=T(),v=T(),g=T(),p=T();let m=M(e,"boundingBox",8),E=M(e,"gridShape",8);function O(Ee){const Oe=Ee.filter(Le=>Le.fog);if(!h(g))return Oe.map(lt=>lt.toCoords());const he=Ee.filter(Le=>Le.value===h(g)[Le.r][Le.c]);let Ue=new Set;for(const Le of he){const lt=h(p).getNeighboorCells(Le);Ue=new Set([...lt,Le])}return[...new Set(Oe).difference(Ue)].map(Le=>Le.toCoords())}D(()=>r(),()=>{A(c,r())}),D(()=>h(c),()=>{A(u,O(h(c)))}),D(()=>h(u),()=>{A(_,no(h(u),0))}),D(()=>i(),()=>{A(v,i())}),D(()=>o(),()=>{A(g,o())}),D(()=>a(),()=>{A(p,a())}),Ie(),pe();var I=I4(),w=X(I),x=X(w);W(w);var k=F(w),U=X(k);L(U,"stroke-width",.5);var z=F(U);L(z,"stroke-width",.375);var j=F(z);L(j,"stroke-width",.25);var H=F(j);L(H,"stroke-width",.125),Qi(),W(k);var q=F(k),ee=X(q);Qi(),W(q);var ce=F(q),te=X(ce),re=F(te);L(re,"x",0),L(re,"y",0),W(ce),W(I),J(()=>{L(x,"d",h(_)),yt(k,"disabled",!h(v)),yt(q,"disabled",!h(v)),L(ee,"x",m().x),L(ee,"y",m().y),L(ee,"width",m().width),L(ee,"height",m().height),L(te,"x",m().x),L(te,"y",m().y),L(te,"width",m().width),L(te,"height",m().height),L(re,"width",E().nCols),L(re,"height",E().nRows)}),R(t,I),ae()}var w4=ue('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function y4(t,e){se(e,!1);const n=it(),r=()=>Ce(bp,"$showFogStore",n),i=T();let o=M(e,"gridShape",8);D(()=>r(),()=>{A(i,r())}),Ie(),pe();var a=w4(),c=X(a);L(c,"x",0),L(c,"y",0),W(a),J(()=>{L(a,"visibility",h(i)?"visible":"hidden"),L(c,"width",o().nCols),L(c,"height",o().nRows)}),R(t,a),ae()}var L4=ue('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function A4(t,e){se(e,!1);const n=T();let r=M(e,"r",8),i=M(e,"c",8),o=M(e,"val",8);const a=.8,c=400;D(()=>(Z(r()),Z(i())),()=>{A(n,Xn({r:r(),c:i()}))}),Ie(),pe();var u=Se(),_=de(u);{var v=g=>{var p=L4();L(p,"font-size",a),L(p,"font-weight",c);var m=X(p,!0);W(p),J(()=>{L(p,"x",h(n).x),L(p,"y",h(n).y),nt(m,o())}),R(g,p)};fe(_,g=>{o()!==null&&g(v)})}R(t,u),ae()}var N4=ue('<g class="solution-layer"></g>');function S4(t,e){se(e,!1);const n=it(),r=()=>Ce(tl,"$solutionStore",n),i=()=>Ce(ei,"$settingsStore",n),o=()=>Ce(el,"$gameModeStore",n),a=T(),c=T(),u=T();D(()=>r(),()=>{A(a,r())}),D(()=>i(),()=>{A(c,i().showSolution)}),D(()=>o(),()=>{A(u,o())}),Ie(),pe();var _=Se(),v=de(_);{var g=p=>{var m=N4();st(m,5,()=>h(a),Lt,(E,O,I)=>{var w=Se(),x=de(w);st(x,1,()=>h(O),Lt,(k,U,z)=>{A4(k,{r:I,c:z,get val(){return h(U)}})}),R(E,w)}),W(m),R(p,m)};fe(v,p=>{h(a)&&h(c)&&h(u)===io.SETTING&&p(g)})}R(t,_),ae()}var x4=ue("<g></g>"),R4=ue('<g mask="url(#fog-mask-fog)"></g>');function Xr(t,e){let n=M(e,"elements",8),r=M(e,"g_name",8),i=M(e,"Component",8);var o=R4();st(o,5,n,Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var v=x4();st(v,5,()=>Object.entries(_()),g=>g[0],(g,p)=>{i()(g,{get tool(){return h(p)[1]}})}),W(v),J(()=>Qr(v,`element-group ${u()}`)),R(a,v)}),W(o),J(()=>Qr(o,Lb(r()))),R(t,o)}var T4=ue('<line class="svelte-yr67cf"></line>');function D4(t,e){se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"shape",8),a=M(e,"coords",8);const[c,u]=a(),_=u.c,v=c.c===u.c?u.c+1:u.c,g=u.r,p=c.r===u.r?u.r+1:u.r;D(()=>Z(o()),()=>{A(n,o().stroke??"black")}),D(()=>Z(o()),()=>{var E;A(r,(E=o())==null?void 0:E.opacity)}),D(()=>Z(o()),()=>{A(i,o().strokeWidth??.02)}),Ie(),pe();var m=T4();L(m,"x1",_),L(m,"x2",v),L(m,"y1",g),L(m,"y2",p),J(()=>{L(m,"stroke",h(n)),L(m,"stroke-width",h(i)),L(m,"opacity",h(r))}),R(t,m),ae()}var k4=ue('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function G4(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8);const u=c().cells,_=en(c().toolId,Rt)??Sh;function v(O,I){return I===P.TEXT_ONLY?O.value?O.value:"-":O.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const O=Xn(u[0]);return Xn(u[1]).subtract(O).angle()/(2*Math.PI)*360}D(()=>Z(c()),()=>{A(n,c().shape??_)}),D(()=>Fa,()=>{A(r,CF(Fa(u)))}),D(()=>(h(n),P),()=>{var O;A(i,((O=h(n))==null?void 0:O.type)||P.CIRCLE)}),D(()=>h(n),()=>{var O;A(o,((O=h(n))==null?void 0:O.fontSize)??.2)}),D(()=>h(n),()=>{var O;A(a,((O=h(n))==null?void 0:O.fontColor)??"black")}),Ie(),pe();var p=Se(),m=de(p);{var E=O=>{var I=k4(),w=X(I);{var x=j=>{Ar(j,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},k=j=>{var H=Se(),q=de(H);{var ee=te=>{Ar(te,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},ce=te=>{var re=Se(),Ee=de(re);{var Oe=Ue=>{D4(Ue,{coords:u,get shape(){return h(n)}})},he=Ue=>{vl(Ue,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return h(n)}})};fe(Ee,Ue=>{h(i)===P.BORDER_LINE?Ue(Oe):Ue(he,!1)},!0)}R(te,re)};fe(q,te=>{h(i)===P.TEXT_ONLY?te(ee):te(ce,!1)},!0)}R(j,H)};fe(w,j=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?j(x):j(k,!1)})}var U=F(w);J(()=>L(U,"transform",`rotate(${g()}, ${h(r).x}, ${h(r).y} )`));var z=X(U,!0);J(()=>nt(z,v(c(),h(i)))),W(U),W(I),J(()=>{L(U,"x",h(r).x),L(U,"y",h(r).y),L(U,"font-size",h(o)),L(U,"fill",h(a))}),R(O,I)};fe(m,O=>{u.length===2&&O(E)})}R(t,p),ae()}var M4=ue('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),U4=ue('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),F4=ue('<g class="quadruple-text"><!></g>');function $4(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"cornerTool",8);const u=c().cells,_=new De(u[u.length-1].c,u[u.length-1].r),v=en(c().toolId,Rt)??xh;D(()=>Z(c()),()=>{A(n,c().value)}),D(()=>Z(c()),()=>{A(r,c().shape??v)}),D(()=>h(r),()=>{var E;A(i,((E=h(r))==null?void 0:E.fontSize)??.2)}),D(()=>h(r),()=>{var E;A(o,((E=h(r))==null?void 0:E.fontColor)??"black")}),D(()=>h(n),()=>{var E;A(a,h(n)?(E=h(n))==null?void 0:E.split(","):[])}),Ie(),pe();var g=Se(),p=de(g);{var m=E=>{var O=F4(),I=X(O);{var w=k=>{var U=M4(),z=X(U,!0);J(()=>nt(z,h(a).join(" "))),W(U),J(()=>{L(U,"x",_.x),L(U,"y",_.y),L(U,"font-size",h(i)),L(U,"fill",h(o))}),R(k,U)},x=k=>{var U=U4(),z=de(U),j=X(z,!0);J(()=>nt(j,h(a).slice(0,2).join(" "))),W(z);var H=F(z),q=X(H,!0);J(()=>nt(q,h(a).slice(2).join(" "))),W(H),J(()=>{L(z,"x",_.x),L(z,"y",_.y),L(z,"dy",-h(i)/2),L(z,"font-size",h(i)),L(z,"fill",h(o)),L(H,"x",_.x),L(H,"y",_.y),L(H,"dy",h(i)/2),L(H,"font-size",h(i)),L(H,"fill",h(o))}),R(k,U)};fe(I,k=>{h(a).length<=2?k(w):k(x,!1)})}W(O),J(()=>L(O,"data-count",h(a).length)),R(E,O)};fe(p,E=>{h(n)&&E(m)})}R(t,g),ae()}var P4=ue('<text text-anchor="middle" dominant-baseline="central"> </text>'),H4=ue('<g class="corner-tool"><!><!></g>');function B4(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T();let a=M(e,"tool",8);const c=a().cells,u=en(a().toolId,Rt)??xh,_=new De(c[c.length-1].c,c[c.length-1].r);function v(E,O){return O===P.TEXT_ONLY?E.value?E.value:"-":E.value??""}D(()=>Z(a()),()=>{A(n,a().shape??u)}),D(()=>(h(n),P),()=>{var E;A(r,((E=h(n))==null?void 0:E.type)??P.CIRCLE)}),D(()=>h(n),()=>{var E;A(i,((E=h(n))==null?void 0:E.fontSize)??.2)}),D(()=>h(n),()=>{var E;A(o,((E=h(n))==null?void 0:E.fontColor)??"black")}),Ie(),pe();var g=Se(),p=de(g);{var m=E=>{var O=H4(),I=X(O);vl(I,{get cx(){return _.x},get cy(){return _.y},get shape(){return h(n)}});var w=F(I);{var x=U=>{$4(U,{get cornerTool(){return a()}})},k=U=>{var z=P4(),j=X(z,!0);J(()=>nt(j,v(a(),h(r)))),W(z),J(()=>{L(z,"x",_.x),L(z,"y",_.y),L(z,"font-size",h(i)),L(z,"fill",h(o))}),R(U,z)};fe(w,U=>{a().toolId===d.QUADRUPLE?U(x):U(k,!1)})}W(O),R(E,O)};fe(p,E=>{c.length===4&&E(m)})}R(t,g),ae()}var W4=ue('<text text-anchor="middle" dominant-baseline="central"> </text>'),z4=ue('<g class="center-corner-or-edge-tool"><!><!></g>');function Y4(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"tool",8);const _=u().cell,v=en(u().toolId,Rt)??Sh;function g(w,x){return x===P.TEXT_ONLY?w.value?w.value:"-":w.value??""}D(()=>Z(u()),()=>{A(n,u().shape??v)}),D(()=>{},()=>{A(r,_)}),D(()=>(h(n),P),()=>{var w;A(i,((w=h(n))==null?void 0:w.type)||P.CIRCLE)}),D(()=>h(n),()=>{var w;A(o,((w=h(n))==null?void 0:w.fontSize)??.2)}),D(()=>h(n),()=>{var w;A(a,((w=h(n))==null?void 0:w.fontColor)??"black")}),D(()=>h(r),()=>{A(c,h(r).r%1===.5&&h(r).c%1===.5)}),Ie(),pe();var p=z4(),m=X(p);vl(m,{get cx(){return h(r).c},get cy(){return h(r).r},get shape(){return h(n)}});var E=F(m);{var O=w=>{var x=qe(()=>g(u(),h(i))),k=qe(()=>Math.floor(h(r).c)),U=qe(()=>Math.floor(h(r).r));gs(w,{get value(){return h(x)},get x(){return h(k)},get y(){return h(U)},position:"TL",get fontColor(){return h(a)}})},I=w=>{var x=W4(),k=X(x,!0);J(()=>nt(k,g(u(),h(i)))),W(x),J(()=>{L(x,"x",h(r).c),L(x,"y",h(r).r),L(x,"font-size",h(o)),L(x,"fill",h(a))}),R(w,x)};fe(E,w=>{h(c)?w(O):w(I,!1)})}W(p),R(t,p),ae()}var j4=ue('<path fill="none"></path>');function yi(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=M(e,"linePoints",8),_=M(e,"shape",8,void 0);const v="round",g="round";D(()=>Z(_()),()=>{var m;A(n,((m=_())==null?void 0:m.stroke)??"gray")}),D(()=>Z(_()),()=>{var m;A(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),D(()=>Z(_()),()=>{var m;A(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),D(()=>Z(_()),()=>{var m;A(o,((m=_())==null?void 0:m.strokeDashoffset)??0)}),D(()=>Z(_()),()=>{var m,E,O,I,w,x,k,U;A(a,{shortenHead:((E=(m=_())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((I=(O=_())==null?void 0:O.linePathOptions)==null?void 0:I.shortenTail)??.2,bezierRounding:((x=(w=_())==null?void 0:w.linePathOptions)==null?void 0:x.bezierRounding)??.2,closeLoops:((U=(k=_())==null?void 0:k.linePathOptions)==null?void 0:U.closeLoops)??!1})}),D(()=>(Z(u()),h(a)),()=>{A(c,hl(u(),h(a)))}),Ie(),pe();var p=j4();L(p,"stroke-linejoin",v),L(p,"stroke-linecap",g),J(()=>{L(p,"d",h(c)),L(p,"stroke",h(n)),L(p,"stroke-width",h(r)),L(p,"stroke-dasharray",h(i)),L(p,"stroke-dashoffset",h(o))}),R(t,p),ae()}var V4=ie("<!> <!> <!>",1);function Yg(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T();let a=M(e,"linePoints",8),c=M(e,"shape",8,ps);function u(I){var k;const w=bt.cloneDeep(I);w.r=w.r||.2;const x=w.r;return w.strokeDasharray=I.strokeDasharray,w.opacity=1,w.linePathOptions={shortenHead:x,shortenTail:x,bezierRounding:(k=w.linePathOptions)==null?void 0:k.bezierRounding},w}D(()=>Z(a()),()=>{A(n,a().length)}),D(()=>(h(n),Z(a())),()=>{A(r,h(n)>=0?a()[0]:void 0)}),D(()=>(h(n),Z(a())),()=>{A(i,h(n)>=0?a()[h(n)-1]:void 0)}),D(()=>Z(c()),()=>{A(o,u(c()))}),Ie(),pe();var _=V4(),v=de(_);{var g=I=>{Ar(I,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(o)}})};fe(v,I=>{h(r)&&I(g)})}var p=F(v,2);{var m=I=>{yi(I,{get linePoints(){return a()},get shape(){return h(o)}})};fe(p,I=>{h(n)>1&&I(m)})}var E=F(p,2);{var O=I=>{Ar(I,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(o)}})};fe(E,I=>{h(i)&&I(O)})}R(t,_),ae()}var K4=ie("<!> <!> <!>",1);function jg(t,e){se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"linePoints",8),a=M(e,"shape",12,ps);const c=4,u=.5;function _(U,z){const j=z.r??u,H=z.n??c,q=z.angle??0,ee=Qp(j,H,new De(0,0),!0,0),ce=(H+(U-q/360)*H%H)%H,te=Math.floor(ce)%H,re=Math.ceil(ce)%H;return ee[te].lerp(ee[re],ce%1).length()}function v(U){if(h(n)<=1)return 0;const z=o()[0],H=o()[1].subtract(z).angle()/(2*Math.PI);return _(H,U)}function g(U){if(h(n)<=1)return 0;const z=o()[h(n)-1],H=o()[h(n)-2].subtract(z).angle()/(2*Math.PI);return _(H,U)}function p(U){var j;const z=bt.cloneDeep(U);return z.r=z.r||u,z.opacity=1,z.linePathOptions={shortenHead:v(z),shortenTail:g(z),bezierRounding:(j=z.linePathOptions)==null?void 0:j.bezierRounding},z}D(()=>Z(o()),()=>{A(n,o().length)}),D(()=>(h(n),Z(o())),()=>{A(r,h(n)>=0?o()[0]:void 0)}),D(()=>(h(n),Z(o())),()=>{A(i,h(n)>=0?o()[h(n)-1]:void 0)}),D(()=>Z(a()),()=>{a(p(a()))}),Ie(),pe();var m=K4(),E=de(m);{var O=U=>{$a(U,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return a()}})};fe(E,U=>{h(r)&&U(O)})}var I=F(E,2);{var w=U=>{yi(U,{get linePoints(){return o()},get shape(){return a()}})};fe(I,U=>{h(n)>1&&U(w)})}var x=F(I,2);{var k=U=>{$a(U,{get cx(){return h(i).x},get cy(){return h(i).y},get shape(){return a()}})};fe(x,U=>{h(i)&&U(k)})}R(t,m),ae()}var X4=ie("<!> <!>",1);function Vg(t,e){se(e,!1);const n=T();let r=M(e,"linePoints",8),i=M(e,"shape",8,ps);function o(m){var I,w,x;const E=bt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const O=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||O,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}function a(m){var I,w,x;const E=bt.cloneDeep(m);E.r=E.r||.3,E.opacity=1,E.strokeWidth=0;const O=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||O,shortenTail:(w=E.linePathOptions)==null?void 0:w.shortenTail,bezierRounding:(x=E.linePathOptions)==null?void 0:x.bezierRounding},E}D(()=>Z(r()),()=>{A(n,r().length>0?r()[0]:void 0)}),Ie(),pe();var c=X4(),u=de(c);{var _=m=>{var E=qe(()=>o(i()));yi(m,{get linePoints(){return r()},get shape(){return h(E)}})};fe(u,m=>{r().length>1&&m(_)})}var v=F(u,2);{var g=m=>{var E=qe(()=>o(i()));Ar(m,{get x(){return h(n).x},get y(){return h(n).y},get shape(){return h(E)}})},p=m=>{var E=Se(),O=de(E);{var I=w=>{var x=qe(()=>a(i()));$a(w,{get cx(){return h(n).x},get cy(){return h(n).y},get shape(){return h(x)}})};fe(O,w=>{h(n)&&w(I)},!0)}R(m,E)};fe(v,m=>{h(n)&&i().type===P.THERMO_WITH_CIRCLE?m(g):m(p,!1)})}R(t,c),ae()}var q4=ue("<!><!>",1),Z4=ue("<!><!>",1),Q4=ue("<!><!>",1),J4=ue("<!><!>",1),eP=ue('<g class="line-tool"><!></g>');function tP(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"tool",8);const u=en(c().toolId,Rt)??ps;D(()=>Z(c()),()=>{A(n,Fa(c().cells))}),D(()=>Z(c()),()=>{A(r,c().shape??u)}),D(()=>(h(r),P),()=>{var m;A(i,((m=h(r))==null?void 0:m.type)||P.LINE)}),D(()=>h(r),()=>{var m;A(o,((m=h(r))==null?void 0:m.opacity)??1)}),D(()=>h(r),()=>{A(a,{...h(r),stroke:"var(--grid-background-color)",strokeWidth:h(r).strokeWidth?h(r).strokeWidth+.08:.08})}),Ie(),pe();var _=eP(),v=X(_);{var g=m=>{var E=q4(),O=de(E);{var I=x=>{Yg(x,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(O,x=>{x(I)})}var w=F(O);Yg(w,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(m,E)},p=m=>{var E=Se(),O=de(E);{var I=x=>{var k=Z4(),U=de(k);{var z=H=>{jg(H,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(U,H=>{H(z)})}var j=F(U);jg(j,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(x,k)},w=x=>{var k=Se(),U=de(k);{var z=H=>{var q=Q4(),ee=de(q);{var ce=re=>{Vg(re,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(ee,re=>{re(ce)})}var te=F(ee);Vg(te,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(H,q)},j=H=>{var q=J4(),ee=de(q);{var ce=re=>{yi(re,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(ee,re=>{re(ce)})}var te=F(ee);yi(te,{get linePoints(){return h(n)},get shape(){return h(r)}}),R(H,q)};fe(U,H=>{h(i)===P.THERMO_WITH_CIRCLE||h(i)===P.THERMO_WITH_POLYGON?H(z):H(j,!1)},!0)}R(x,k)};fe(O,x=>{h(i)===P.LINE_WITH_POLYGON_ENDS?x(I):x(w,!1)},!0)}R(m,E)};fe(v,m=>{h(i)===P.LINE_WITH_CIRCLE_ENDS?m(g):m(p,!1)})}W(_),J(()=>L(_,"opacity",h(o))),R(t,_),ae()}var nP=ue('<g class="cage-tool"><!></g>');function rP(t,e){se(e,!1);const n=T();let r=M(e,"tool",8);const i=en(r().toolId,Rt)??Ku;D(()=>Z(r()),()=>{A(n,r().shape??i)}),Ie(),pe();var o=nP(),a=X(o);ev(a,{get cells(){return r().cells},get shape(){return h(n)},get value(){return r().value}}),W(o),R(t,o),ae()}var iP=ie("<!> <!> <!> <!>",1);function oP(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let v=M(e,"tool",8);const g=en(v().toolId,Rt)??jb,p=800,m=v().value;D(()=>Z(v()),()=>{A(n,v().shape??g)}),D(()=>h(n),()=>{A(r,h(n).inset??.15)}),D(()=>h(n),()=>{A(i,h(n).strokeWidth??.07)}),D(()=>h(n),()=>{A(o,h(n).fontColor??h(n).stroke??"black")}),D(()=>Z(v()),()=>{A(a,v().cells[v().cells.length-1])}),D(()=>Z(v()),()=>{A(c,v().cells2[v().cells2.length-1])}),D(()=>(h(a),h(r)),()=>{A(u,new De(h(a).c+1-h(r)-.05,h(a).r+1-h(r)-.05))}),D(()=>(h(c),h(r)),()=>{A(_,new De(h(c).c+1-h(r)-.05,h(c).r+1-h(r)-.05))}),Ie(),pe();var E=iP(),O=de(E);fs(O,{get cells(){return v().cells},get shape(){return h(n)}});var I=F(O,2);gs(I,{value:m,get x(){return h(u).x},get y(){return h(u).y},position:"BR",get fontColor(){return h(o)},fontWeight:p});var w=F(I,2);fs(w,{get cells(){return v().cells2},get shape(){return h(n)}});var x=F(w,2);gs(x,{value:m,get x(){return h(_).x},get y(){return h(_).y},position:"BR",get fontColor(){return h(o)},fontWeight:p}),R(t,E),ae()}var sP=ue('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function aP(t,e){var j;se(e,!1);const n=T(),r=T(),i=T();let o=M(e,"tool",8);const a=o().cell,c=o().direction,u=Wh(a,c),_=Xn(a),v=en(o().toolId,Rt)??Vb,g=((j=h(n))==null?void 0:j.fontSize)??.5,p=.03;function m(H){return H.value&&H.value.length?H.value:"-"}function E(){const ee=Xn(u).subtract(_).length(),ce={shortenHead:.3*ee,shortenTail:.55*ee};return _s([a,u],ce)}const I=`outside-tool-arrow-marker-${crypto.randomUUID()}`;D(()=>Z(o()),()=>{A(n,o().shape??v)}),D(()=>h(n),()=>{var H;A(r,((H=h(n))==null?void 0:H.fontColor)??"var(--text-primary-color)")}),D(()=>h(n),()=>{var H;A(i,((H=h(n))==null?void 0:H.stroke)??"var(--text-primary-color)")}),Ie(),pe();var w=sP(),x=X(w);Ns(x,{id:I,l:.07,strokeWidth:p,get stroke(){return h(i)}});var k=F(x);J(()=>L(k,"d",E())),L(k,"stroke-width",p),L(k,"marker-end",`url(#${I??""})`);var U=F(k);L(U,"font-size",g);var z=X(U,!0);J(()=>nt(z,m(o()))),W(U),W(w),J(()=>{L(k,"stroke",h(i)),L(U,"x",_.x),L(U,"y",_.y),L(U,"fill",h(r))}),R(t,w),ae()}var lP=ie("<!> <!> <!>",1);function cP(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=M(e,"linePoints",8),u=M(e,"shape",8);function _(I){const w=bt.cloneDeep(I);return w.r=w.r||.2,w.strokeWidth=0,w.opacity=1,w}D(()=>Z(c()),()=>{A(n,c().length)}),D(()=>(h(n),Z(c())),()=>{A(r,h(n)>1&&c()[0].equals(c()[h(n)-1]))}),D(()=>(h(n),Z(c())),()=>{A(i,h(n)>=0?c()[0]:void 0)}),D(()=>(h(n),Z(c())),()=>{A(o,h(n)>=0?c()[h(n)-1]:void 0)}),D(()=>Z(u()),()=>{A(a,_(u()))}),Ie(),pe();var v=lP(),g=de(v);yi(g,{get linePoints(){return c()},get shape(){return u()}});var p=F(g,2);{var m=I=>{Ar(I,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(a)}})};fe(p,I=>{!h(r)&&h(i)&&I(m)})}var E=F(p,2);{var O=I=>{Ar(I,{get x(){return h(o).x},get y(){return h(o).y},get shape(){return h(a)}})};fe(E,I=>{!h(r)&&h(o)&&I(O)})}R(t,v),ae()}var uP=ue('<g class="corner-line-tool"><!></g>');function dP(t,e){se(e,!1);const n=T(),r=T(),i=T(),o=T();let a=M(e,"tool",8);const c=en(a().toolId,Rt)??ps;D(()=>(Z(a()),De),()=>{A(n,a().coords.map(p=>new De(p.c,p.r)))}),D(()=>Z(a()),()=>{A(r,a().shape??c)}),D(()=>(h(r),P),()=>{var p;A(i,((p=h(r))==null?void 0:p.type)||P.LINE)}),D(()=>h(r),()=>{var p;A(o,((p=h(r))==null?void 0:p.opacity)??1)}),Ie(),pe();var u=uP(),_=X(u);{var v=p=>{cP(p,{get linePoints(){return h(n)},get shape(){return h(r)}})},g=p=>{yi(p,{get linePoints(){return h(n)},get shape(){return h(r)}})};fe(_,p=>{h(i)===P.MAZE_WALL?p(v):p(g,!1)})}W(u),J(()=>L(u,"opacity",h(o))),R(t,u),ae()}var _P=ue('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function fP(t,e){se(e,!1);const n=it(),r=()=>Ce(En,"$gridStore",n),i=()=>Ce(vt,"$localConstraintsStore",n),o=()=>Ce(qt,"$toolStore",n),a=()=>Ce(_n,"$cellsStore",n),c=()=>Ce(w8,"$cageToolsStore",n),u=()=>Ce(O8,"$lineToolsStore",n),_=()=>Ce(y8,"$cloneToolsStore",n),v=()=>Ce(I8,"$cornerLineToolsStore",n),g=()=>Ce(L8,"$outsideDirectionToolsStore",n),p=()=>Ce(m8,"$edgeToolsStore",n),m=()=>Ce(C8,"$cornerToolsStore",n),E=()=>Ce(E8,"$centerCornerOrEdgeToolsStore",n),O=T(),I=T(),w=T();let x=M(e,"svgRef",12,null);function k(){for(const[Dt,Te]of i().entries()){if(!cs(Dt))continue;if(Object.entries(Te).some(([ke,Re])=>!Xt(Re.cell,h(I))))return!0}return!1}function U(Dt,Te){const be=k(),ke=cs(Te),Re=be||ke?1:.2,Nt=-Re,Ts=-Re,Cl=Dt.nCols+2*Re,ai=Dt.nRows+2*Re;return{x:Nt,y:Ts,width:Cl,height:ai}}function z(Dt){return`${Dt.x} ${Dt.y} ${Dt.width} ${Dt.height}`}D(()=>r(),()=>{A(O,r())}),D(()=>h(O),()=>{A(I,{nRows:h(O).nRows,nCols:h(O).nCols})}),D(()=>(h(I),o()),()=>{A(w,U(h(I),o()))}),Ie(),pe();var j=_P();J(()=>L(j,"viewBox",z(h(w))));var H=X(j);b4(H,{get boundingBox(){return h(w)},get gridShape(){return h(I)}});var q=F(H);y4(q,{get gridShape(){return h(I)}});var ee=F(q);h8(ee,{get grid(){return r()}});var ce=F(ee);qF(ce,{get gridShape(){return h(I)}});var te=F(ce);st(te,5,a,Lt,(Dt,Te)=>{U$(Dt,{get cell(){return h(Te)}})}),W(te);var re=F(te);t4(re,{});var Ee=F(re);l$(Ee,{});var Oe=F(Ee);Xr(Oe,{get elements(){return c()},g_name:"cage-tools-layer",Component:rP});var he=F(Oe);Xr(he,{get elements(){return u()},g_name:"line-tools-layer",Component:tP});var Ue=F(he);Xr(Ue,{get elements(){return _()},g_name:"clone-tools-layer",Component:oP});var Qe=F(Ue);JF(Qe,{});var Ne=F(Qe);O4(Ne,{});var Le=F(Ne);d8(Le,{});var lt=F(Le);Xr(lt,{get elements(){return v()},g_name:"corner-line-tools-layer",Component:dP});var ze=F(lt);$8(ze,{get boundingBox(){return h(w)}});var gn=F(ze);Xr(gn,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:aP});var bn=F(gn);f8(bn,{get boundingBox(){return h(w)}});var Mr=F(bn);KF(Mr,{});var tn=F(Mr);Xr(tn,{get elements(){return p()},g_name:"edge-tools-layer",Component:G4});var hr=F(tn);Xr(hr,{get elements(){return m()},g_name:"corner-tools-layer",Component:B4});var si=F(hr);Xr(si,{get elements(){return E()},g_name:"center-corner-edge-tools-layer",Component:Y4});var or=F(si);J$(or,{});var Un=F(or);st(Un,5,a,Lt,(Dt,Te)=>{k$(Dt,{get cell(){return h(Te)}})}),W(Un);var Ri=F(Un);S4(Ri,{});var Ur=F(Ri);f4(Ur,{}),W(j),Oi(j,Dt=>x(Dt),()=>x()),R(t,j),ae()}function gP(t){return sw(t)?(wb(),!0):!1}function hP(t){return aw(t)?(mp(),!0):!1}function pP(t){return lw(t)?(Ep(),!0):!1}function iu(t){(gP(t)||hP(t)||pP(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var vP=ie('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function mP(t,e){se(e,!1);const n=it(),r=()=>Ce(Zp,"$InputHandlerStore",n),i=()=>Ce(Ji,"$svgRefStore",n),o=T();let a=T(null);function c(p){return m=>{p&&h(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===h(a))&&p(m)}}D(()=>r(),()=>{A(o,r())}),Ie();var u=vP();Me("keydown",Bc,function(...p){iu==null||iu.apply(this,p)});var _=gg(()=>{var p;return c((p=h(o))==null?void 0:p.keyDown)});Me("keydown",Bc,function(...p){var m;(m=h(_))==null||m.apply(this,p)});var v=gg(()=>{var p;return c((p=h(o))==null?void 0:p.keyUp)});Me("keyup",Bc,function(...p){var m;(m=h(v))==null||m.apply(this,p)});var g=X(u);fP(g,{get svgRef(){return oh(),i()},set svgRef(p){hs(Ji,p)},$$legacy:!0}),W(u),Oi(u,p=>A(a,p),()=>h(a)),Me("pointerdown",u,jc(Kn(p=>{var m;p.currentTarget.focus(),(m=h(o))==null||m.pointerDown(p)})),!0),Me("pointermove",u,jc(Kn(p=>{var m;p.currentTarget.focus(),(m=h(o))==null||m.pointerMove(p)})),!0),Me("pointerup",u,jc(Kn(p=>{var m;p.currentTarget.focus(),(m=h(o))==null||m.pointerUp(p)})),!0),R(t,u),ae()}var EP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function CP(t){var e=EP();R(t,e)}var OP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function IP(t){var e=OP();R(t,e)}var bP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function wP(t){var e=bP();R(t,e)}var yP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function LP(t){var e=yP();R(t,e)}var AP=ie('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function NP(t,e){se(e,!1);const n=it(),r=()=>Ce(Co,"$commandHistoryStore",n),i=()=>Ce(vu,"$selectOnStore",n),o=T(),a=T();function c(){mp()}function u(){Ep()}function _(){console.log("check")}function v(){hs(vu,!i())}D(()=>r(),()=>{A(o,r()._undoStack.length===0)}),D(()=>r(),()=>{A(a,r()._redoStack.length===0)}),Ie(),pe();var g=AP(),p=X(g),m=X(p);LP(m),W(p);var E=F(p,2),O=X(E);IP(O),W(E);var I=F(E,2);I.disabled=!0;var w=X(I);CP(w),W(I);var x=F(I,2),k=X(x);wP(k),W(x),W(g),J(()=>{p.disabled=h(o),E.disabled=h(a),L(x,"aria-checked",i()),yt(x,"active",i())}),Me("click",p,c),Me("click",E,u),Me("click",I,_),Me("click",x,v),R(t,g),ae()}var SP=ie('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),xP=ie('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),RP=ie('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),TP=ie('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function DP(t,e){se(e,!1);const n=it(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce(Ma,"$penColorStore",n),o=()=>Ce(Zp,"$InputHandlerStore",n),a=T(),c=T(),u=[];let _=M(e,"selectedTool",8);const v=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let p=T(!1);function m(H){return H?g:v}function E(H){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(H)}function O(H){const q=H.currentTarget;if(!q)return;const ee=q.getAttribute("aria-checked");A(p,ee!=="true")}D(()=>r(),()=>{A(a,r().penToolActive)}),D(()=>r(),()=>{A(c,r().letterToolActive)}),Ie(),pe();var I=TP(),w=X(I);{var x=H=>{var q=Se(),ee=de(q);st(ee,1,()=>v,Lt,(ce,te)=>{var re=SP(),Ee=X(re);Kt(Ee);var Oe;Qi(2),W(re),J(()=>{L(re,"data-value",h(te)),yt(re,"active",i()===h(te)),Oe!==(Oe=h(te))&&(Ee.value=(Ee.__value=h(te))==null?"":h(te))}),za(u,[],Ee,()=>(h(te),i()),he=>hs(Ma,he)),R(ce,re)}),R(H,q)},k=H=>{var q=Se(),ee=de(q);st(ee,1,()=>m(h(p)),Lt,(ce,te)=>{var re=xP(),Ee=X(re),Oe=X(Ee,!0);W(Ee),Qi(2),W(re),J(()=>{Ab(re,h(te)),nt(Oe,h(te))}),Me("click",re,function(...he){var Ue;(Ue=o()&&o().padClick)==null||Ue.apply(this,he)}),R(ce,re)}),R(H,q)};fe(w,H=>{_()===d.PEN_TOOL&&h(a)?H(x):H(k,!1)})}var U=F(w,2);{var z=H=>{var q=RP();J(()=>{L(q,"aria-checked",h(p)),yt(q,"letter-checked",h(p)),yt(q,"num-checked",!h(p))}),Me("click",q,O),R(H,q)};fe(U,H=>{h(c)&&E(_())&&H(z)})}var j=F(U,2);W(I),J(()=>{yt(I,"digit",_()===d.DIGIT),yt(I,"center",_()===d.CENTER_PM),yt(I,"corner",_()===d.CORNER_PM),yt(I,"color",_()===d.HIGHLIGHTS),yt(I,"pen",_()===d.PEN_TOOL),yt(j,"letter-tool",h(c))}),Me("click",j,function(...H){var q;(q=o()&&o().padClick)==null||q.apply(this,H)}),R(t,I),ae()}var kP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function GP(t){var e=kP();R(t,e)}var MP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function UP(t){var e=MP();R(t,e)}var FP=ie('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Vo(t,e){se(e,!1);const n=[];let r=M(e,"selectedTool",12),i=M(e,"value",8),o=M(e,"title",8,void 0);function a(){mu(i())}pe();var c=FP(),u=X(c);Kt(u);var _,v=F(u,2);ft(v,e,"default",{}),W(c),J(()=>{L(c,"title",o()),yt(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),za(n,[],u,()=>(i(),r()),r),Me("change",u,a),R(t,c),ae()}var $P=ie('<span aria-hidden="true">1</span>'),PP=ie('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),HP=ie('<span aria-hidden="true" style="font-size: 50%">123</span>'),BP=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),WP=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),zP=ie('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function YP(t,e){se(e,!1);const n=it(),r=()=>Ce(ei,"$settingsStore",n);let i=M(e,"selectedTool",12);pe();var o=zP(),a=X(o);Vo(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=$P();R(p,E)},$$slots:{default:!0},$$legacy:!0});var c=F(a,2);Vo(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=PP();R(p,E)},$$slots:{default:!0},$$legacy:!0});var u=F(c,2);Vo(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=HP();R(p,E)},$$slots:{default:!0},$$legacy:!0});var _=F(u,2);Vo(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(p){i(p)},children:(p,m)=>{var E=BP(),O=X(E);GP(O),W(E),R(p,E)},$$slots:{default:!0},$$legacy:!0});var v=F(_,2);{var g=p=>{Vo(p,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var O=WP(),I=X(O);UP(I),W(O),R(m,O)},$$slots:{default:!0},$$legacy:!0})};fe(v,p=>{r().penToolActive&&p(g)})}W(o),R(t,o),ae()}var jP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function VP(t){var e=jP();R(t,e)}var KP=ie('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ss(t,e){let n=M(e,"title",8,void 0),r=M(e,"clickCb",8,void 0);var i=KP(),o=X(i),a=X(o);ft(a,e,"default",{}),W(o),W(i),J(()=>L(i,"title",n())),Me("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),R(t,i)}var XP=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),qP=ie('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function ZP(t,e){se(e,!1);let n=M(e,"showModal",12,!1);function r(){n(!1)}function i(){Ip(),Ua(),n(!1)}pe(),kr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=qP(),u=F(X(c),2);ol(u,{children:(_,v)=>{var g=XP(),p=de(g),m=F(p,2);Me("click",p,i),Me("click",m,r),R(_,g)},$$slots:{default:!0}}),W(c),R(o,c)},$$slots:{default:!0},$$legacy:!0}),ae()}var QP=ie("<!> <!>",1);function JP(t){let e=T(!1);function n(){A(e,!0)}var r=QP(),i=de(r);Ss(i,{title:"Restart",clickCb:n,children:(a,c)=>{VP(a)},$$slots:{default:!0}});var o=F(i,2);ZP(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var e6=ie('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Ko(t,e){let n=M(e,"title",8);var r=e6(),i=X(r),o=X(i,!0);W(i);var a=F(i,2);ft(a,e,"default",{}),W(r),J(()=>nt(o,n())),R(t,r)}var t6=ie('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function un(t,e){let n=M(e,"description",8);var r=t6(),i=X(r),o=X(i,!0);W(i);var a=F(i,2),c=X(a);ft(c,e,"default",{}),W(a),W(r),J(()=>nt(o,n())),R(t,r)}var n6=ie('<div class="shortcut svelte-1cgt5u5"> </div>');function on(t,e){let n=M(e,"shortcut",8);var r=n6(),i=X(r,!0);W(r),J(()=>nt(i,n())),R(t,r)}var r6=ie("<p></p>"),i6=ie("<!> <!> <!> <!>",1),o6=ie("<!> or <!>",1),s6=ie("<!> <!> <!> <!> <!> <!> <!> <!>",1),a6=ie("<!> <!>",1),l6=ie('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function c6(t,e){let n=M(e,"showModal",12,!1);kr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=l6(),a=X(o);Ko(a,{title:"Setting Instructions",children:(g,p)=>{var m=r6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",R(g,m)},$$slots:{default:!0}});var c=F(a,2);Ko(c,{title:"General",children:(g,p)=>{un(g,{description:"Toggle Darkmode",children:(m,E)=>{on(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=F(c,2);Ko(u,{title:"Selection",children:(g,p)=>{var m=i6(),E=de(m);un(E,{description:"Select cells",children:(x,k)=>{on(x,{shortcut:"click/drag"})},$$slots:{default:!0}});var O=F(E,2);un(O,{description:"Add to current selection",children:(x,k)=>{on(x,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var I=F(O,2);un(I,{description:"Remove from current selection",children:(x,k)=>{on(x,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var w=F(I,2);un(w,{description:"Add or remove from current selection",children:(x,k)=>{on(x,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var _=F(u,2);Ko(_,{title:"Change Tool",children:(g,p)=>{var m=s6(),E=de(m);un(E,{description:"Cycle Tool",children:(j,H)=>{on(j,{shortcut:"Space"})},$$slots:{default:!0}});var O=F(E,2);un(O,{description:"Change to Digit Tool",children:(j,H)=>{on(j,{shortcut:"Z"})},$$slots:{default:!0}});var I=F(O,2);un(I,{description:"Change to Corner Pencilmark Tool",children:(j,H)=>{on(j,{shortcut:"X"})},$$slots:{default:!0}});var w=F(I,2);un(w,{description:"Change to Center Pencilmark Tool",children:(j,H)=>{on(j,{shortcut:"C"})},$$slots:{default:!0}});var x=F(w,2);un(x,{description:"Change to Highlights Tool",children:(j,H)=>{on(j,{shortcut:"V"})},$$slots:{default:!0}});var k=F(x,2);un(k,{description:"Quickshift To Corner Pencilmark Tool",children:(j,H)=>{on(j,{shortcut:"Shift"})},$$slots:{default:!0}});var U=F(k,2);un(U,{description:"Quickshift To Center Pencilmark Tool",children:(j,H)=>{on(j,{shortcut:"Ctrl"})},$$slots:{default:!0}});var z=F(U,2);un(z,{description:"Quickshift To Highlights Tool",children:(j,H)=>{var q=o6(),ee=de(q);on(ee,{shortcut:"Shift + Ctrl"});var ce=F(ee,2);on(ce,{shortcut:"Alt"}),R(j,q)},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}});var v=F(_,2);Ko(v,{title:"Undo/Redo",children:(g,p)=>{var m=a6(),E=de(m);un(E,{description:"Undo",children:(I,w)=>{on(I,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var O=F(E,2);un(O,{description:"Redo",children:(I,w)=>{on(I,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),R(g,m)},$$slots:{default:!0}}),W(o),R(r,o)},$$slots:{default:!0},$$legacy:!0})}var u6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function d6(t){var e=u6();R(t,e)}var _6=ie("<!> <!>",1);function f6(t){let e=T(!1);function n(){A(e,!0)}var r=_6(),i=de(r);Ss(i,{title:"Info",clickCb:n,children:(a,c)=>{d6(a)},$$slots:{default:!0}});var o=F(i,2);c6(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var g6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function h6(t){var e=g6();R(t,e)}var p6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function v6(t){var e=p6();R(t,e)}function m6(t){let e=T(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),A(e,!h(e))}Ss(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=Se(),_=de(u);{var v=p=>{v6(p)},g=p=>{h6(p)};fe(_,p=>{h(e)?p(v):p(g,!1)})}R(a,u)},$$slots:{default:!0}})}function nv(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"renderers",8),i=M(e,"options",8);pe();var o=Se(),a=de(o);{var c=u=>{var _=Se(),v=de(_);lh(v,()=>r()[n().type],(g,p)=>{p(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var O=Se(),I=de(O);{var w=k=>{Pa(k,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},x=k=>{var U=nb();J(()=>nt(U,n().raw)),R(k,U)};fe(I,k=>{"tokens"in n()&&n().tokens?k(w):k(x,!1)})}R(m,O)},$$slots:{default:!0}})}),R(u,_)};fe(a,u=>{r()[n().type]&&u(c)})}R(t,o),ae()}function Pa(t,e){let n=M(e,"tokens",8),r=M(e,"renderers",8),i=M(e,"options",8);var o=Se(),a=de(o);{var c=u=>{var _=Se(),v=de(_);st(v,1,n,Lt,(g,p)=>{nv(g,{get token(){return h(p)},get renderers(){return r()},get options(){return i()}})}),R(u,_)};fe(a,u=>{n()&&u(c)})}R(t,o)}function rv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function iv(t){return t.startsWith("/")||t.startsWith("#")}function E6(t,e){return e.slug(t).replace(/--+/g,"-")}function C6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;let o=T();D(()=>(Z(n()),Z(r())),()=>{A(o,E6(n().text,r().slugger))}),Ie(),pe();var a=Se(),c=de(a);return uh(c,()=>`h${n().depth}`,!1,(u,_)=>{let v;J(()=>v=ah(u,v,{id:h(o)},void 0,u.namespaceURI===bu,u.nodeName.includes("-")));var g=Se(),p=de(g);ft(p,e,"default",{}),R(_,g)}),R(t,a),Ze(e,"renderers",i),ae({renderers:i})}var O6=ie("<blockquote><!></blockquote>");function I6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=O6(),a=X(o);return ft(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}function b6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8),o=T();D(()=>Z(n()),()=>{A(o,n().ordered?"ol":"ul")}),Ie(),pe();var a=Se(),c=de(a);uh(c,()=>h(o),!1,(u,_)=>{let v;J(()=>v=ah(u,v,{start:n().start||1},void 0,u.namespaceURI===bu,u.nodeName.includes("-")));var g=Se(),p=de(g);st(p,1,()=>n().items,Lt,(m,E)=>{var O=qe(()=>({...h(E)}));nv(m,{get token(){return h(O)},get options(){return r()},get renderers(){return i()}})}),R(_,g)}),R(t,a),ae()}var w6=ie("<li><!></li>");function y6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=w6(),a=X(o);return ft(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var L6=ie("<br>");function A6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=L6();return R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var N6=ie("<pre><code> </code></pre>");function S6(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;pe();var o=N6(),a=X(o),c=X(a,!0);return W(a),W(o),J(()=>{xb(a,`lang-${n().lang}`),nt(c,n().text)}),R(t,o),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var x6=ie("<code> </code>");function R6(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;pe();var o=x6(),a=X(o,!0);return J(()=>nt(a,n().raw.slice(1,n().raw.length-1))),W(o),R(t,o),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var T6=ie('<th scope="col"><!></th>'),D6=ie("<td><!></td>"),k6=ie("<tr></tr>"),G6=ie("<table><thead><tr></tr></thead><tbody></tbody></table>");function M6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8),i=M(e,"renderers",8);pe();var o=G6(),a=X(o),c=X(a);st(c,5,()=>n().header,Lt,(_,v)=>{var g=T6(),p=X(g);Pa(p,{get tokens(){return h(v).tokens},get options(){return r()},get renderers(){return i()}}),W(g),R(_,g)}),W(c),W(a);var u=F(a);st(u,5,()=>n().rows,Lt,(_,v)=>{var g=k6();st(g,5,()=>h(v),Lt,(p,m)=>{var E=D6(),O=X(E);Pa(O,{get tokens(){return h(m).tokens},get options(){return r()},get renderers(){return i()}}),W(E),R(p,E)}),W(g),R(_,g)}),W(u),W(o),R(t,o),ae()}function U6(t,e){se(e,!1);let n=M(e,"token",8);const r=void 0,i=void 0;pe();var o=Se(),a=de(o);return Sb(a,()=>n().text),R(t,o),Ze(e,"options",r),Ze(e,"renderers",i),ae({options:r,renderers:i})}var F6=ie("<p><!></p>");function $6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=F6(),a=X(o);return ft(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var P6=ie("<a><!></a>");function H6(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;pe();var o=P6();J(()=>L(o,"href",iv(n().href)?rv(r().baseUrl,n().href):n().href));var a=X(o);return ft(a,e,"default",{}),W(o),J(()=>L(o,"title",n().title)),R(t,o),Ze(e,"renderers",i),ae({renderers:i})}function B6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=de(o);return ft(a,e,"default",{}),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var W6=ie("<dfn><!></dfn>");function z6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=W6(),a=X(o);return ft(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var Y6=ie("<del><!></del>");function j6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=Y6(),a=X(o);return ft(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var V6=ie("<em><!></em>");function K6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=V6(),a=X(o);return ft(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var X6=ie("<hr>");function q6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=X6();return R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var Z6=ie("<strong><!></strong>");function Q6(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=Z6(),a=X(o);return ft(a,e,"default",{}),W(o),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}var J6=ie('<img class="markdown-image svelte-z38cge">');function e9(t,e){se(e,!1);let n=M(e,"token",8),r=M(e,"options",8);const i=void 0;pe();var o=J6();return J(()=>L(o,"src",iv(n().href)?rv(r().baseUrl,n().href):n().href)),J(()=>{L(o,"title",n().title),L(o,"alt",n().text)}),R(t,o),Ze(e,"renderers",i),ae({renderers:i})}function Kg(t,e){se(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=de(o);return ft(a,e,"default",{}),R(t,o),Ze(e,"token",n),Ze(e,"options",r),Ze(e,"renderers",i),ae({token:n,options:r,renderers:i})}const t9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,n9=Object.hasOwnProperty;class r9{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=i9(e,n===!0);const o=i;for(;n9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function i9(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(t9,"").replace(/ /g,"-"))}function Sd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let xi=Sd();function ov(t){xi=t}const sv=/[&<>"']/,o9=new RegExp(sv.source,"g"),av=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,s9=new RegExp(av.source,"g"),a9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xg=t=>a9[t];function Rn(t,e){if(e){if(sv.test(t))return t.replace(o9,Xg)}else if(av.test(t))return t.replace(s9,Xg);return t}const l9=/(^|[^\[])\^/g;function Ct(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(l9,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function qg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ss={exec:()=>null};function Zg(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Xo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function c9(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Qg(t,e,n,r){const i=e.href,o=e.title?Rn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:Rn(a)}}function u9(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class Ha{constructor(e){me(this,"options");me(this,"rules");me(this,"lexer");this.options=e||xi}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Xo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=u9(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=Xo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Xo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Xo(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const v=u.join(`
`),g=v.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${v}`:v,o=o?`${o}
${g}`:g;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=p,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,O=E.raw+`
`+r.join(`
`),I=this.blockquote(O);a[a.length-1]=I,i=i.substring(0,i.length-E.raw.length)+I.raw,o=o.substring(0,o.length-E.text.length)+I.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,O=E.raw+`
`+r.join(`
`),I=this.list(O);a[a.length-1]=I,i=i.substring(0,i.length-m.raw.length)+I.raw,o=o.substring(0,o.length-E.raw.length)+I.raw,r=O.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",v="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),p=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,v=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,v=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(p)&&(_+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),U=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),z=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const j=e.split(`
`,1)[0];let H;if(p=j,this.options.pedantic?(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),H=p):H=p.replace(/\t/g,"    "),k.test(p)||U.test(p)||z.test(p)||w.test(p)||x.test(p))break;if(H.search(/[^ ]/)>=E||!p.trim())v+=`
`+H.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||k.test(g)||U.test(g)||x.test(g))break;v+=`
`+p}!m&&!p.trim()&&(m=!0),_+=j+`
`,e=e.substring(j.length+1),g=H.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let O=null,I;this.options.gfm&&(O=/^\[[ xX]\] /.exec(v),O&&(I=O[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:_,task:!!O,checked:I,loose:!1,text:v,tokens:[]}),o.raw+=_}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const _=o.items[u].tokens.filter(g=>g.type==="space"),v=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));o.loose=v}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Zg(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(Zg(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Rn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Xo(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=c9(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Qg(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Qg(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){v+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+v);const p=[...i[0]][0].length,m=e.slice(0,a+i.index+p+u);if(Math.min(a,u)%2){const O=m.slice(1,-1);return{type:"em",raw:m,text:O,tokens:this.lexer.inlineTokens(O)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Rn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Rn(n[1]),i="mailto:"+r):(r=Rn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Rn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Rn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Rn(n[0]),{type:"text",raw:n[0],text:r}}}}const d9=/^(?:[ \t]*(?:\n|$))+/,_9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,f9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,xs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,g9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,lv=/(?:[*+-]|\d{1,9}[.)])/,cv=Ct(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,lv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),xd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,h9=/^[^\n]+/,Rd=/(?!\s*\])(?:\\.|[^\[\]\\])+/,p9=Ct(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),v9=Ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,lv).getRegex(),El="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Td=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,m9=Ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Td).replace("tag",El).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),uv=Ct(xd).replace("hr",xs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",El).getRegex(),E9=Ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",uv).getRegex(),Dd={blockquote:E9,code:_9,def:p9,fences:f9,heading:g9,hr:xs,html:m9,lheading:cv,list:v9,newline:d9,paragraph:uv,table:ss,text:h9},Jg=Ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",xs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",El).getRegex(),C9={...Dd,table:Jg,paragraph:Ct(xd).replace("hr",xs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Jg).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",El).getRegex()},O9={...Dd,html:Ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Td).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ss,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ct(xd).replace("hr",xs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",cv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},dv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,I9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_v=/^( {2,}|\\)\n(?!\s*$)/,b9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Rs="\\p{P}\\p{S}",w9=Ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Rs).getRegex(),y9=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,L9=Ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Rs).getRegex(),A9=Ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Rs).getRegex(),N9=Ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Rs).getRegex(),S9=Ct(/\\([punct])/,"gu").replace(/punct/g,Rs).getRegex(),x9=Ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),R9=Ct(Td).replace("(?:-->|$)","-->").getRegex(),T9=Ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",R9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ba=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,D9=Ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ba).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fv=Ct(/^!?\[(label)\]\[(ref)\]/).replace("label",Ba).replace("ref",Rd).getRegex(),gv=Ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rd).getRegex(),k9=Ct("reflink|nolink(?!\\()","g").replace("reflink",fv).replace("nolink",gv).getRegex(),kd={_backpedal:ss,anyPunctuation:S9,autolink:x9,blockSkip:y9,br:_v,code:I9,del:ss,emStrongLDelim:L9,emStrongRDelimAst:A9,emStrongRDelimUnd:N9,escape:dv,link:D9,nolink:gv,punctuation:w9,reflink:fv,reflinkSearch:k9,tag:T9,text:b9,url:ss},G9={...kd,link:Ct(/^!?\[(label)\]\((.*?)\)/).replace("label",Ba).getRegex(),reflink:Ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ba).getRegex()},Ou={...kd,escape:Ct(dv).replace("])","~|])").getRegex(),url:Ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},M9={...Ou,br:Ct(_v).replace("{2,}","*").getRegex(),text:Ct(Ou.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Aa={normal:Dd,gfm:C9,pedantic:O9},qo={normal:kd,gfm:Ou,breaks:M9,pedantic:G9};class Dn{constructor(e){me(this,"tokens");me(this,"options");me(this,"state");me(this,"tokenizer");me(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||xi,this.options.tokenizer=this.options.tokenizer||new Ha,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Aa.normal,inline:qo.normal};this.options.pedantic?(n.block=Aa.pedantic,n.inline=qo.pedantic):this.options.gfm&&(n.block=Aa.gfm,this.options.breaks?n.inline=qo.breaks:n.inline=qo.gfm),this.tokenizer.rules=n}static get rules(){return{block:Aa,inline:qo}}static lex(e,n){return new Dn(n).lex(e)}static lexInline(e,n){return new Dn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(v=>{_=v.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,_;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)v.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},g),typeof p=="number"&&p>=0&&(v=Math.min(v,p))}),v<1/0&&v>=0&&(o=e.substring(0,v+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class Wa{constructor(e){me(this,"options");me(this,"parser");this.options=e||xi}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Rn(i)+'">'+(r?o:Rn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Rn(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=qg(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=qg(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Gd{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Vn{constructor(e){me(this,"options");me(this,"renderer");me(this,"textRenderer");this.options=e||xi,this.options.renderer=this.options.renderer||new Wa,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Gd}static parse(e,n){return new Vn(n).parse(e)}static parseInline(e,n){return new Vn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class as{constructor(e){me(this,"options");me(this,"block");this.options=e||xi}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?Dn.lex:Dn.lexInline}provideParser(){return this.block?Vn.parse:Vn.parseInline}}me(as,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class U9{constructor(...e){me(this,"defaults",Sd());me(this,"options",this.setOptions);me(this,"parse",this.parseMarkdown(!0));me(this,"parseInline",this.parseMarkdown(!1));me(this,"Parser",Vn);me(this,"Renderer",Wa);me(this,"TextRenderer",Gd);me(this,"Lexer",Dn);me(this,"Tokenizer",Ha);me(this,"Hooks",as);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new Wa(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=o[c];o[c]=(...v)=>{let g=u.apply(o,v);return g===!1&&(g=_.apply(o,v)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new Ha(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=o[c];o[c]=(...v)=>{let g=u.apply(o,v);return g===!1&&(g=_.apply(o,v)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new as;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=o[c];as.passThroughHooks.has(a)?o[c]=v=>{if(this.defaults.async)return Promise.resolve(u.call(o,v)).then(p=>_.call(o,p));const g=u.call(o,v);return _.call(o,g)}:o[c]=(...v)=>{let g=u.apply(o,v);return g===!1&&(g=_.apply(o,v)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Dn.lex(e,n??this.defaults)}parser(e,n){return Vn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?Dn.lex:Dn.lexInline,_=a.hooks?a.hooks.provideParser():e?Vn.parse:Vn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(v=>u(v,a)).then(v=>a.hooks?a.hooks.processAllTokens(v):v).then(v=>a.walkTokens?Promise.all(this.walkTokens(v,a.walkTokens)).then(()=>v):v).then(v=>_(v,a)).then(v=>a.hooks?a.hooks.postprocess(v):v).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let v=u(r,a);a.hooks&&(v=a.hooks.processAllTokens(v)),a.walkTokens&&this.walkTokens(v,a.walkTokens);let g=_(v,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(v){return c(v)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Rn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Li=new U9;function Et(t,e){return Li.parse(t,e)}Et.options=Et.setOptions=function(t){return Li.setOptions(t),Et.defaults=Li.defaults,ov(Et.defaults),Et};Et.getDefaults=Sd;Et.defaults=xi;Et.use=function(...t){return Li.use(...t),Et.defaults=Li.defaults,ov(Et.defaults),Et};Et.walkTokens=function(t,e){return Li.walkTokens(t,e)};Et.parseInline=Li.parseInline;Et.Parser=Vn;Et.parser=Vn.parse;Et.Renderer=Wa;Et.TextRenderer=Gd;Et.Lexer=Dn;Et.lexer=Dn.lex;Et.Tokenizer=Ha;Et.Hooks=as;Et.parse=Et;Et.options;Et.setOptions;Et.use;Et.walkTokens;Et.parseInline;Vn.parse;Dn.lex;function F9(t){return new Dn().lex(t)}const $9=()=>({heading:C6,blockquote:I6,list:b6,list_item:y6,br:A6,code:S6,codespan:R6,table:M6,html:U6,paragraph:$6,link:H6,text:B6,def:z6,del:j6,em:K6,hr:q6,strong:Q6,image:e9,space:Kg,escape:Kg}),P9=()=>({baseUrl:"/",slugger:new r9});function H9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},ch(()=>{console.warn=t})}function hv(t,e){se(e,!1),H9();let n=M(e,"source",8),r=M(e,"options",24,()=>({})),i=M(e,"renderers",24,()=>({})),o=T(),a=T(),c=T();D(()=>(Z(n()),Z(i()),Z(r())),()=>{A(o,F9(n())),A(a,{...$9(),...i()}),A(c,{...P9(),...r()})}),Ie(),pe(),Pa(t,{get tokens(){return h(o)},get renderers(){return h(a)},get options(){return h(c)}}),ae()}var B9=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),W9=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),z9=ie('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function Y9(t,e){se(e,!1);const n=it(),r=()=>Ce(Tr,"$puzzleMetaStore",n),i=T();let o=M(e,"showModal",12,!1);function a(u){return u?Da(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}D(()=>r(),()=>{A(i,r())}),Ie(),pe(),kr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,_)=>{var v=z9(),g=X(v),p=X(g,!0);W(g);var m=F(g,2),E=X(m);J(()=>nt(E,`by ${a(h(i).authors)??""}`)),W(m);var O=F(m,2),I=X(O),w=qe(()=>c(h(i).ruleset));hv(I,{get source(){return h(w)}}),W(O);var x=F(O,2);{var k=j=>{var H=B9(),q=F(de(H),2);J(()=>L(q,"href",h(i).ctcUrl)),R(j,H)};fe(x,j=>{var H,q;(q=(H=h(i))==null?void 0:H.ctcUrl)!=null&&q.length&&j(k)})}var U=F(x,2);{var z=j=>{var H=W9(),q=F(de(H),2);J(()=>L(q,"href",h(i).ctcYoutubeUrl)),R(j,H)};fe(U,j=>{var H,q;(q=(H=h(i))==null?void 0:H.ctcYoutubeUrl)!=null&&q.length&&j(z)})}W(v),J(()=>{var j;return nt(p,((j=h(i))==null?void 0:j.title)||"Puzzle")}),R(u,v)},$$slots:{default:!0},$$legacy:!0}),ae()}var j9=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function V9(t){var e=j9();R(t,e)}var K9=ie("<!> <!>",1);function X9(t){let e=T(!1);function n(){A(e,!0)}var r=K9(),i=de(r);Ss(i,{title:"Rules",clickCb:n,children:(a,c)=>{V9(a)},$$slots:{default:!0}});var o=F(i,2);Y9(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var q9=ie("<!> <!>",1);function Z9(t){let e=T(!1);function n(){A(e,!0)}var r=q9(),i=de(r);Ss(i,{title:"Settings",clickCb:n,children:(a,c)=>{xp(a)},$$slots:{default:!0}});var o=F(i,2);Rp(o,{get showModal(){return h(e)},set showModal(a){A(e,a)},$$legacy:!0}),R(t,r)}var Q9=ie('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function J9(t){var e=Q9(),n=X(e);Z9(n);var r=F(n,2);X9(r);var i=F(r,2);m6(i);var o=F(i,2);f6(o);var a=F(o,2);JP(a),W(e),R(t,e)}var eH=ie('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function tH(t,e){se(e,!1);const n=it(),r=()=>Ce(Ji,"$svgRefStore",n),i=()=>Ce(Tr,"$puzzleMetaStore",n),o=()=>Ce(qt,"$toolStore",n),a=T(),c=T();function u(){r()&&r().focus()}function _(te){return te?Da(te," & ",", "):"Anonymous"}function v(te){return te&&te.length?te:"Normal sudoku rules apply."}D(()=>i(),()=>{A(a,i().title??"Sudoku")}),D(()=>i(),()=>{A(c,_(i().authors))}),Ie(),pe();var g=eH(),p=X(g),m=X(p),E=X(m),O=X(E,!0);W(E);var I=F(E,2),w=X(I);W(I),W(m);var x=F(m,2),k=X(x),U=qe(()=>v(i().ruleset));hv(k,{get source(){return h(U)}}),W(x),W(p);var z=F(p,2),j=X(z);J9(j);var H=F(j,2),q=X(H);DP(q,{get selectedTool(){return o()}});var ee=F(q,2);YP(ee,{get selectedTool(){return oh(),o()},set selectedTool(te){hs(qt,te)},$$legacy:!0}),W(H);var ce=F(H,2);NP(ce,{}),W(z),W(g),J(()=>{nt(O,h(a)),nt(w,`by ${h(c)??""}`)}),Me("click",z,Kn(()=>{u()})),R(t,g),ae()}var nH=ie('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function mH(t,e){se(e,!1);const n=it(),r=()=>Ce(el,"$gameModeStore",n),i=T();ch(async()=>{const m=window.location.origin,E=hg===""?m:`${m}/${hg}`;try{await HU({workerURL:`${E}/minizinc-worker.js`,wasmURL:`${E}/minizinc.wasm`,dataURL:`${E}/minizinc.data`})}catch(O){const I="Failed to initialize MiniZinc: "+O.message;console.log(I)}}),D(()=>r(),()=>{A(i,r())}),Ie(),pe();var o=nH(),a=X(o),c=X(a);{var u=m=>{EF(m)};fe(c,m=>{h(i)===io.SETTING&&m(u)})}var _=F(c,2),v=X(_);mP(v,{}),W(_);var g=F(_,2),p=X(g);tH(p,{}),W(g),W(a),W(o),R(t,o),ae()}export{mH as G,vH as b,tT as p,Ua as r,bT as s};
