var ZI=Object.defineProperty;var QI=(t,e,n)=>e in t?ZI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var me=(t,e,n)=>QI(t,typeof e!="symbol"?e+"":e,n);import{c as su,o as JI,p as eb,q as bu,a as x,s as ue,u as Me,t as ie,d as Se,v as tb,m as nb}from"./disclose-version.MO2MFdNj.js";import{i as pe}from"./legacy.sN80Fe4S.js";import{l as th,h as Zt,k as ls,y as nh,v as es,R as rb,V as ib,U as ob,g as au,i as rh,F as ih,a0 as sb,j as ab,u as fg,A as lb,aJ as wu,z as cb,x as ub,a2 as yu,ar as oh,J as gg,aK as db,a3 as _b,a8 as fb,m as gb,c as V,r as z,p as ae,s as $,t as ee,a as le,Z as h,al as Ze,aL as k,_ as N,aM as Ie,$ as T,av as Z,f as de,aN as hb,aC as Oi,aO as Wc,ak as hg}from"./utils.DP-F0xIN.js";import{s as ot,i as fe,a as Ce,b as vs,m as sh}from"./store.LjYb6QFI.js";import{s as ei,u as pb,a as vb,b as mb,c as Eb,e as Cb,f as Ob,g as Ib,h as bb,t as wb}from"./global.B4-VKmM5.js";import{e as at,i as Lt}from"./each.BW2jvj41.js";import{i as yb,p as U}from"./props.DNCAbpfG.js";import{w as Bt,g as ut,d as oo}from"./index.C8uZp8ho.js";import{s as A,r as Qt,a as ah,c as Lb,b as Ab,d as lh}from"./attributes.H32U76MF.js";import{s as nt}from"./render.3Jdrsfl8.js";import{b as Ii,c as ch}from"./this.DYGG7ZR8.js";import{a as Nb,o as uh}from"./index-client.jiOaxa6s.js";import{b as pg}from"./paths.CZm29z5e.js";function Sb(t,e,n,r,i){var o=t,a="",c;th(()=>{if(a===(a=e()??"")){Zt&&ls();return}c!==void 0&&(ih(c),c=void 0),a!==""&&(c=nh(()=>{if(Zt){es.data;for(var u=ls(),_=u;u!==null&&(u.nodeType!==8||u.data!=="");)_=u,u=rb(u);if(u===null)throw ib(),ob;su(es,_),o=au(u);return}var p=a+"",g=JI(p);su(rh(g),g.lastChild),o.before(g)}))})}function ft(t,e,n,r,i){var c;Zt&&ls();var o=(c=e.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=e[n==="default"?"children":n],a=!0),o===void 0||o(t,a?()=>r:r)}function dh(t,e,n,r,i,o){let a=Zt;Zt&&ls();var c,u,_=null;Zt&&es.nodeType===1&&(_=es,ls());var p=Zt?es:t,g;th(()=>{const v=e()||null;var m=v==="svg"?wu:null;v!==c&&(g&&(v===null?cb(g,()=>{g=null,u=null}):v===u?ub(g):ih(g)),v&&v!==u&&(g=nh(()=>{if(_=Zt?_:m?document.createElementNS(m,v):document.createElement(v),su(_,_),r){Zt&&eb(v)&&_.append(document.createComment(""));var E=Zt?rh(_):_.appendChild(ab());Zt&&(E===null?fg(!1):au(E)),r(_,E)}lb.nodes_end=_,p.before(_)})),c=v,c&&(u=c))},sb),a&&(fg(!0),au(p))}function Qr(t,e,n){var r=t.__className,i=_h(e);Zt&&t.getAttribute("class")===i?t.__className=i:(r!==i||Zt&&t.getAttribute("class")!==i)&&(i===""?t.removeAttribute("class"):t.setAttribute("class",i),t.__className=i)}function Rb(t,e,n){var r=t.__className,i=_h(e);Zt&&t.className===i?t.__className=i:(r!==i||Zt&&t.className!==i)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i)}function _h(t,e){return(t??"")+""}function yt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function jn(t,e,n=e){var r=db();bu(t,"input",i=>{var o=i?t.defaultValue:t.value;if(o=Yc(t)?jc(o):o,n(o),r&&o!==(o=e())){var a=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=a,t.selectionEnd=Math.min(c,t.value.length))}}),(Zt&&t.defaultValue!==t.value||_b(e)==null&&t.value)&&n(Yc(t)?jc(t.value):t.value),yu(()=>{var i=e();Yc(t)&&i===jc(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}const zc=new Set;function Ka(t,e,n,r,i=r){var o=n.getAttribute("type")==="checkbox",a=t;let c=!1;if(e!==null)for(var u of e)a=a[u]??(a[u]=[]);a.push(n),bu(n,"change",()=>{var _=n.__value;o&&(_=vg(a,_,n.checked)),i(_)},()=>i(o?[]:null)),yu(()=>{var _=r();if(Zt&&n.defaultChecked!==n.checked){c=!0;return}o?(_=_||[],n.checked=_.includes(n.__value)):n.checked=yb(n.__value,_)}),oh(()=>{var _=a.indexOf(n);_!==-1&&a.splice(_,1)}),zc.has(a)||(zc.add(a),gg(()=>{a.sort((_,p)=>_.compareDocumentPosition(p)===4?-1:1),zc.delete(a)})),gg(()=>{if(c){var _;if(o)_=vg(a,_,n.checked);else{var p=a.find(g=>g.checked);_=p==null?void 0:p.__value}i(_)}})}function vg(t,e,n){for(var r=new Set,i=0;i<t.length;i+=1)t[i].checked&&r.add(t[i].__value);return n||r.delete(e),Array.from(r)}function Yc(t){var e=t.type;return e==="number"||e==="range"}function jc(t){return t===""?null:+t}function xb(t,e,n=e){bu(t,"change",()=>{n(t.files)}),yu(()=>{t.files=e()})}function Qe(t,e,n){var r=fb(t,e);r&&r.set&&(t[e]=n,oh(()=>{t[e]=null}))}function Tb(t){return function(...e){var n=e[0];n.target===this&&(t==null||t.apply(this,e))}}function Vn(t){return function(...e){var n=e[0];return n.stopPropagation(),t==null?void 0:t.apply(this,e)}}function Kc(t){return function(...e){var n=e[0];return n.preventDefault(),t==null?void 0:t.apply(this,e)}}function Db(t,e){var o;var n=(o=t.$$events)==null?void 0:o[e.type],r=gb(n)?n.slice():n==null?[]:[n];for(var i of r)i.call(this,e)}var so=(t=>(t[t.SETTING=0]="SETTING",t[t.SOLVING=1]="SOLVING",t))(so||{}),Lu=(t=>(t.GIVEN="Given Digit",t.DIGIT="Digit",t.CORNER_PM="Corner Pencilmarks",t.CENTER_PM="Center Pencilmarks",t.HIGHLIGHTS="Highlights",t.REGIONS="Regions",t.OUTSIDE="Outside",t.FOG="Fog",t))(Lu||{}),fh=(t=>(t.SUDOKU_RULES_DO_NOT_APPLY="Sudoku rules do not apply",t.LEAVE_EMPTY_CELLS_EMPTY="Leave Empty Cells Empty",t.LITS="LITS",t.HEXED_SUDOKU="Hexed Sudoku",t.FILLOMINO="Fillomino",t.ANTIKNIGHT="Antiknight",t.ANTI_LONG_KNIGHT="Anti-Long-Knight",t.ANTIKING="Antiking",t.ANTI_GIRAFFE="Anti-Giraffe",t.DISJOINT_GROUPS="Disjoint Groups",t.TANGO="Tango",t.NONCONSECUTIVE="Nonconsecutive",t.NONRATIO="Nonratio",t.ANTI_ENTROPY="Anti-Entropy",t.POSITIVE_DIAGONAL="Positive Diagonal",t.NEGATIVE_DIAGONAL="Negative Diagonal",t.POSITIVE_ANTIDIAGONAL="Positive Antidiagonal",t.NEGATIVE_ANTIDIAGONAL="Negative Antidiagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL="Odd/Even Parity Mirror Along Positive Diagonal",t.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL="Odd/Even Parity Mirror Along Negative Diagonal",t.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS="Box Rows And Columns Form Modularity and Entropy Sets",t.GLOBAL_ENTROPY="Global Entropy",t.GLOBAL_INDEXING_COLUMN="Global Indexing Column",t.GLOBAL_INDEXING_ROW="Global Indexing Row",t.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED="All Odd Digits Are Orthogonally Connected",t.NURIMISAKI_PATH_GERMAN_WHISPERS="Nurimisaki Path German Whispers",t.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE="Yin Yang Region Sum Lines Must Cross Colors At Least Once",t.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES="Adjacent Cells Along Loop Are Multiples",t.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS="Adjacent Cells Along Loop Are German Whispers",t))(fh||{}),gh=(t=>(t.ALL_GIVEN="All Given",t.ALL_CAGE_TOTALS_DIFFERENT="All Cage Totals Different",t.ADJACENT_CAGE_TOTALS_DIFFERENT="Adjacent Cage Totals Different",t.ALL_RATIOS_GIVEN="All Ratios Given",t.ALL_DIFFERENCES_GIVEN="All Differences Given",t.ALL_X_GIVEN="All X's Given",t.ALL_V_GIVEN="All V's Given",t.ALL_XV_GIVEN="All XV's Given",t.ALL_RADARS_GIVEN="All Radars Given",t.ALL_XY_DIFFERENCES_GIVEN="All XY Differences Given",t.ALL_INDEXING_COLUMN_GIVEN="All Indexing Column Given",t.ALL_INDEXING_ROW_GIVEN="All Indexing Row Given",t.ALL_YIN_YANG_KROPKI_GIVEN="All Yin Yang Kropki Given",t.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN="All Nurimisaki Unshaded Endpoints Given",t.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN="All Yin Yang Count Shaded Cells Given",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE="Shikaku Each Regions Contains One Size Circle",t.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE="Shikaku Each Regions Contains One Region Sum Clue",t))(gh||{}),hh=(t=>(t.VAMPIRE_AND_PREY="Vampire And Prey",t.MARKED_CELLS="Marked Cells",t.DOUBLERS="Doublers",t.NEGATORS="Negators",t.HOT_CELLS="Hot Cells",t.COLD_CELLS="Cold Cells",t.DECREMENT_FOUNTAIN="Decrement Fountain",t.NEXUS="Nexus",t.INDEXER_CELLS="Indexer Cells",t))(hh||{}),ph=(t=>(t.CHAOS_CONSTRUCTION="Chaos Construction",t.NUMBERED_CHAOS_CONSTRUCTION="Numbered Chaos Construction",t.CHAOS_CONSTRUCTION_SUGURU="Chaos Construction Suguru",t.YIN_YANG="Yin Yang",t.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED="Yin Yang Neighbour Greater Than One Within Region Shaded",t.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS="Yin Yang Shaded Cells Are German Whispers",t.NURIMISAKI="Nurimisaki",t.NURIKABE="Nurikabe",t.NURIKABE_NO_REPEATS_IN_ISLANDS="Nurikabe No Repeats In Islands",t.TWO_CONTIGUOUS_REGIONS="Two Contiguous Regions",t.SASHIGANE="Sashigane",t.NORINORI="Norinori",t.SHIKAKU="Shikaku",t.SHIKAKU_NO_REPEATS_IN_REGION="Shikaku No Repeats In Region",t.GOLDILOCKS_ZONE="Goldilocks Zone",t.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING="Twilight Cave Fillomino Region Shading",t.YIN_YANG_FILLOMINO_PARITY="Yin Yang Fillomino Parity",t.PENTOMINO_TILLING="Pentomino Tilling",t.TILLING_NO_EMPTY_CELLS="Tilling No Empty Cells",t.LITS_BLACK_WHITE_STAR_BATTLE="LITS Black And White Star Battle",t.NORINORI_STAR_BATTLE="Norinori Star Battle",t))(ph||{}),vh=(t=>(t.MAZE_DIRECTED_PATH="Directed Path",t.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME="Directed Path Adjacent Cells Sum Is Prime",t.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME="Directed Path Sum Of Cells Per Region Is Prime",t.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS="Directed Path Adjacent Cells Dutch Whispers",t.DIRECTED_PATH_IS_REGION_SUM_LINE="Directed Path Is Region Sum Line",t.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM="Directed Path Teleport Segments Sum",t.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS="Directed Path Teleport Renban Segments",t.DIRECTED_PATH_IS_PARITY_LINE="Directed Path Is Parity Line",t))(vh||{}),mh=(t=>(t.GALAXIES="Galaxies",t.TWO_SYMMETRIC_GALAXIES="Two Symmetric Galaxies",t.EVERY_CELL_BELONGS_TO_A_GALAXY="Every Cell Belongs To A Galaxy",t.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY="Galaxy 2x2 Does Not Belong To One Galaxy",t.ONE_GALAXY_IS_A_GERMAN_WHISPERS="One Galaxy Is A German Whispers",t))(mh||{}),Eh=(t=>(t.CAVE="Cave",t.CAVE_CELLS_ARE_ODD="Cave Cells Are Odd",t.CAVE_WALLS_ARE_EVEN="Cave Walls Are Even",t.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED="Cave 2x2 Not Fully Shaded or Unshaded",t.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE="One Digit Does Not Appear In The Cave",t.CAVE_LITS="Cave LITS",t.RENBAN_CAVES="Renban Caves",t))(Eh||{}),Ch=(t=>(t.CONNECT_FOUR="Connect Four",t.CONNECT_FOUR_ALL_FILLED="Connect Four All Filled",t.CONNECT_FOUR_DRAW="Connect Four Draw",t.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3="Connect Four Adjacent Yellows Minimum Difference At Least 3",t.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY="Connect Four Adjacent Reds Different Parity",t))(Ch||{}),Oh=(t=>(t.CELL_CENTER_LOOP_NO_TOUCHING="Cell Center Loop No Touching",t.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY="Cell Center Loop Can Touch Diagonally",t.NOT_LOOP_SIZED_REGIONS="Not Loop Sized Regions",t.MODULAR_LOOP="Modular Loop",t))(Oh||{}),Va=(t=>(t.ODD="Odd",t.EVEN="Even",t.MAXIMUM="Maximum",t.MINIMUM="Minimum",t.ODD_MINESWEEPER="Odd Minesweeper",t.EVEN_MINESWEEPER="Even Minesweeper",t.WATCHTOWER="Watchtower",t.NOT_WATCHTOWER="Not Watchtower",t.FARSIGHT="Farsight",t.RADAR="Radar",t.COUNT_SAME_PARITY_NEIGHBOUR_CELLS="Count Same Parity Neighbour Cells",t.ORTHOGONAL_SUM="Orthogonal Sum",t.INDEXING_COLUMN="Indexing Column",t.INDEXING_ROW="Indexing Row",t.LOW_DIGIT="Low Digit",t.HIGH_DIGIT="High Digit",t.FRIENDLY_CELL="Friendly Cell",t.DIAGONALLY_ADJACENT_SUM="Diagonally Adjacent Sum",t.PRIME_CELL="Prime Cell",t.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY="Adjacent Cells In Different Directions Have Opposite Parity",t.SNOWBALL="Snowball",t.SANDWICH_ROW_COL_COUNT="Sandwich Row Column Count",t.COUNTING_CIRCLES="Counting Circles",t.REVERSE_COUNTING_CIRCLES="Reverse Counting Circles",t.COLORED_COUNTING_CIRCLES="Colored Counting Circles",t.UNIQUE_CELLS="Unique Cells",t.SEEN_ODD_COUNT="Seen Odd Count",t.SEEN_EVEN_COUNT="Seen Even Count",t.CELL_KNIGHT_WHISPERS="Cell Knight Whispers",t.CELL_ON_THE_LOOP="Cell On The Loop",t.CELL_NOT_ON_THE_LOOP="Cell Not On The Loop",t.COUNT_LOOP_NEIGHBOUR_CELLS="Count Loop Neighbour Cells",t.YIN_YANG_MINESWEEPER="Yin Yang Minesweeper",t.YIN_YANG_SEEN_UNSHADED_CELLS="Yin Yang Seen Unshaded Cells",t.YIN_YANG_SEEN_SHADED_CELLS="Yin Yang Seen Shaded Cells",t.YIN_YANG_SEEN_SAME_SHADE_CELLS="Yin Yang Seen Same Shade Cells",t.YIN_YANG_ADJACENT_SAME_SHADE_COUNT="Yin Yang Adjacent Same Shade Count",t.YIN_YANG_SHADED_NEIGHBOURS_COUNT="Yin Yang Shaded Neighbours Count",t.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT="Two Contiguous Regions Row Column Opposite Set Count",t.SEEN_REGION_BORDERS_COUNT="Seen Region Borders Count",t.NURIMISAKI_UNSHADED_ENDPOINTS="Nurimisaki Unshaded Endpoints",t.SASHIGANE_BEND_REGION_COUNT="Sashigane Bend Region Count",t.SASHIGANE_REGION_SUM="Sashigane Region Sum",t.CAVE_CLUE="Cave Clue",t.CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF="Cave Unshaded Seen Count Including Itself",t.CAVE_UNSHADED_CELL="Cave Unshaded Cell",t.SHIKAKU_REGION_SIZE="Shikaku Region Size",t.SHIKAKU_REGION_SUM="Shikaku Region Sum",t.TWILIGHT_CAVE_FILLOMINO_CLUE="Twilight Cave Fillomino Clue",t.CHAOS_CONSTRUCTION_CHESS_SUMS="Chaos Construction Chess Sums",t.CHAOS_CONSTRUCTION_ARROW_KNOTS="Chaos Construction Arrow Knots",t.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT="Chaos Construction Seen Same Region Count",t.NURIKABE_SEEN_WATERWAY_CELLS="Nurikabe Seen Waterway Cells",t.NURIKABE_ISLAND_SIZE_CELL="Nurikabe Island Size Cell",t.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE="Nurikabe Island Product Of Sum And Size Clue",t.DIRECTED_PATH_START="Directed Path Start",t.DIRECTED_PATH_END="Directed Path End",t.TELEPORT="Teleport",t.CONNECT_FOUR_YELLOW="Connect Four Yellow",t.CONENCT_FOUR_RED="Connect Four Red",t))(Va||{}),Au=(t=>(t.SASHIGANE_ARROW_POINTS_TO_BEND="Sashigane Arrow Points To Bend",t.THERMO_SIGHTLINE_LOOP_ARROW="Thermo Sightline Loop Arrow",t))(Au||{}),Nu=(t=>(t.COLD_ARROWS="Cold Arrows",t.HOT_ARROWS="Hot Arrows",t.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS="Count Cells Not In The Same Region Arrows",t.YIN_YANG_COUNT_SHADED_CELLS="Yin Yang Count Shaded Cells",t.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR="Yin Yang Sum Of Cells Of Opposite Color",t.LOOP_CELL_COUNT_ARROWS="Loop Cell Count Arrows",t.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS="Yin Yang Count Unique Fillomino Same Shading Arrows",t.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS="Same Galaxy Unobstructed Count Arrows",t.NURIKABE_COUNT_ISLAND_CELLS_ARROWS="Nurikabe Count Island Cells Arrows",t.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR="Connect Four Count Cells Of Same Color",t.NEXT_NUMBERED_REGION_DISTANCE_ARROWS="Next Numbered Region Distance Arrows",t))(Nu||{}),Su=(t=>(t.RATIO="Ratio",t.DIFFERENCE="Difference",t.XV="XV",t.EDGE_INEQUALITY="Edge Inequality",t.EDGE_SUM="Edge Sum",t.EDGE_PRODUCT="Edge Product",t.EDGE_MODULO="Edge Modulo",t.EDGE_FACTOR="Edge Factor",t.XY_DIFFERENCES="XY Differences",t.YIN_YANG_KROPKI="Yin Yang Kropki",t.YIN_YANG_WHITE_KROPKI="Yin Yang White Kropki",t.FILLOMINO_REGION_BORDER="Fillomino Region Border",t.UNKNOWN_REGION_BORDER="Unknown Region Border",t.CHAOS_CONSTRUCTION_SUGURU_BORDER="Chaos Construction Suguru Border",t.EDGE_CAVE_ONE_OF_EACH="Edge Cave One Of Each",t.ONE_WAY_DOOR="One Way Door",t.CUSTOM_EDGE_CONSTRAINT="Custom Edge Constraint",t))(Su||{}),Ru=(t=>(t.QUADRUPLE="Quadruple",t.CORNER_SUM="Corner Sum",t.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER="Corner Sum of Three Equals The Other",t.CORNER_EVEN_COUNT="Corner Even Count",t.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS="Corner Cells Belong To Exactly Three Regions",t.CORNER_CELLS_BELONG_TO_SAME_REGION="Corner Cells Belong To Same Region",t.PRODUCT_SQUARE="Product Square",t.EQUAL_DIAGONAL_DIFFERENCES="Equal Diagonal Differences",t))(Ru||{}),xu=(t=>(t.THERMOMETER="Thermometer",t.SLOW_THERMOMETER="Slow Thermometer",t.CUSTOM_THERMOMETER="Custom Thermometer",t.FUZZY_THERMOMETER="Fuzzy Thermometer",t.ROW_CYCLE_THERMOMETER="Row Cycle Thermometer",t.PALINDROME="Palindrome",t.WHISPERS_LINE="Whispers Line",t.DUTCH_WHISPERS="Dutch Whispers",t.MAXIMUM_ADJACENT_DIFFERENCE_LINE="Maximum Adjacent Difference Line",t.RENBAN_LINE="Renban Line",t.DOUBLE_RENBAN_LINE="Double Renban Line",t.RENRENBANBAN_LINE="Renrenbanban Line",t.N_CONSECUTIVE_RENBAN_LINE="N-Consecutive Renban Line",t.NABNER_LINE="Nabner Line",t.RENBAN_OR_WHISPERS_LINE="Renban Or Whispers Line",t.RENBAN_OR_NABNER_LINE="Renban Or Nabner Line",t.OUT_OF_ORDER_CONSECUTIVE_LINE="Out Of Order Consecutive Line",t.INDEX_LINE="Index Line",t.UNIQUE_VALUES_LINE="Unique Values Line",t.REGION_SUM_LINE="Region Sum Line",t.ARITHMETIC_SEQUENCE_LINE="Arithmetic Sequence Line",t.SUM_LINE="Sum Line",t.XV_LINE="XV Line",t.ROW_SUM_LINE="Row Sum Line",t.AT_LEAST_X_LINE="At Least X Line",t.HEADLESS_ARROW="Headless Arrow",t.SUPERFUZZY_ARROW="Superfuzzy Arrow",t.AMBIGUOUS_ARROW="Ambiguous Arrow",t.N_CONSECUTIVE_FUZZY_SUM_LINE="N-Consecutive Fuzzy Sum Line",t.ADJACENT_CELL_SUM_IS_PRIME_LINE="Adjacent Cell Sum Is Prime Line",t.PRODUCT_LINE="Product Line",t.ADJACENT_MULTIPLES_LINE="Adjacent Multiples Line",t.ADJACENT_DIFFERENCES_COUNT_LINE="Adjacent Differences Count Line",t.ZIPPER_LINE="Zipper Line",t.SEGMENTED_SUM_LINE="Segmented Sum Line",t.SEGMENTED_SUM_AND_RENBAN_LINE="Segmented Sum And Renban Line",t.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE="Adjacent Cells Are Multiples of Difference Line",t.LOOK_AND_SAY_LINE="Look And Say Line",t.SAME_PARITY_LINE="Same Parity Line",t.MODULAR_LINE="Modular Line",t.UNIMODULAR_LINE="Unimodular Line",t.MODULAR_OR_UNIMODULAR_LINE="Modular Or Unimodular Line",t.ODD_EVEN_OSCILLATOR_LINE="Odd Even Oscillator Line",t.HIGH_LOW_OSCILLATOR_LINE="High Low Oscillator Line",t.ENTROPIC_LINE="Entropic Line",t.ENTROPIC_OR_MODULAR_LINE="Entropic Or Modular Line",t.INDEXING_COLUMN_IS_X_LINE="Indexing Column Is X Line",t.INDEXING_ROW_IS_X_LINE="Indexing Row Is X Line",t.REPEATED_DIGITS_LINE="Repeated Digits Line",t.N_REPEATED_DIGITS_LINE="N-Repeated Digits Line",t.THERMO_OR_AVERAGE_ARROW="Thermo Or Average Arrow",t.INDEXER_CELLS_REGION_SUBSET_LINE="Indexer Cells Region Subset Line",t.PEAPODS="Peapods",t.YIN_YANG_INDEXING_LINE_COLORING="Yin Yang Indexing Line Coloring",t.YIN_YANG_REGION_SUM_LINE="Yin Yang Region Sum Line",t.YIN_YANG_SHADED_WHISPERS_LINE="Yin Yang Shaded Whispers Line",t.YIN_YANG_UNSHADED_ENTROPIC_LINE="Yin Yang Unshaded Entropic Line",t.YIN_YANG_UNSHADED_MODULAR_LINE="Yin Yang Unshaded Modular Line",t.GOLDILOCKS_ZONE_REGION_SUM="Goldilocks Zone Region Sum",t.BETWEEN_LINE="Between Line",t.LOCKOUT_LINE="Lockout Line",t.TIGHTROPE_LINE="Tightrope Line",t.PARITY_COUNT_LINE="Parity Count Line",t.DOUBLE_ARROW_LINE="Double Arrow Line",t.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE="Product Of Ends Equals Sum Of Line",t.SPLIT_PEAS="Split Peas",t.DOUBLERS_THERMOMETER="Doublers Thermometer",t.DOUBLERS_BETWEEN_LINE="Doublers Between Line",t.DOUBLERS_DOUBLE_ARROW_LINE="Doublers Double Arrow Line",t))(xu||{}),Tu=(t=>(t.ARROW="Arrow",t.AVERAGE_ARROW="Average Arrow",t.BULBOUS_ARROW="Bulbous Arrow",t.SQUARE_ROOT_ARROW="Square Root Arrow",t.CHAOS_CONSTRUCTION_ARROW="Chaos Construction Arrow",t))(Tu||{}),Du=(t=>(t.KILLER_CAGE="Killer Cage",t.UNIQUE_DIGITS_CAGE="Unique Digits Cage",t.INVERTED_KILLER_CAGE="Inverted Killer Cage",t.SUM_CAGE="Sum Cage",t.KILLER_CAGE_LOOK_AND_SAY="Killer Cage Look And Say",t.SUM_CAGE_LOOK_AND_SAY="Sum Cage Look And Say",t.PARITY_BALANCE_CAGE="Parity Balance Cage",t.DIVISIBLE_KILLER_CAGE="Divisible Killer Cage",t.SPOTLIGHT_CAGE="Spotlight Cage",t.PUTTERIA_CAGE="Putteria Cage",t.AQUARIUM_CAGE="Aquarium Cage",t.MULTISET_CAGE="Multiset Cage",t.VAULTED_CAGE="Vaulted Cage",t.YIN_YANG_ANTITHESIS_KILLER_CAGE="Yin Yang Antithesis Killer Cage",t.YIN_YANG_BREAKEVEN_KILLER_CAGE="Yin Yang Breakeven Killer Cage",t.DOUBLERS_KILLER_CAGE="Doublers Killer Cage",t.NEGATORS_KILLER_CAGE="Negators Killer Cage",t))(Du||{}),ku=(t=>(t.CLONE_REGION="Clone Region",t))(ku||{}),Gu=(t=>(t.SANDWICH_SUM="Sandwich Sum",t.MYSTERY_SANDWICH_SUM="Mystery Sandwich Sum",t.X_SUM="X-Sum",t.SHORTSIGHTED_X_SUM="Shortsighted X-Sum",t.SHIFTED_X_SUM="Shifted X-Sum",t.X_SUM_SKYSCRAPERS="X-Sum Skyscrapers",t.BROKEN_X_SUM="Broken X-Sum",t.BATTLEFIELD="Battlefield",t.SKYSCRAPERS="Skyscrapers",t.X_INDEX="X-Index",t.SANDWICH_SUM_XOR_X_SUM="Sandwich Sum Xor X-Sum",t.RISING_STREAK="Rising Streak",t.ROW_OR_COLUMN_RANK="Row Or Column Rank",t.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED="Outside Edge Yin Yang Sum Of Shaded",t.X_SUM_REGION_BORDERS="X-Sum Region Borders",t.OUTSIDE_CONSECUTIVE_SUM="Outside Consecutive Sum",t.LOOPWICHES="Loopwhiches",t.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION="Chaos Construction Sum Of First Each Region",t.PENTOMINO_BORDER_COUNT="Pentomino Border Count",t))(Gu||{}),Mu=(t=>(t.LITTLE_KILLER_SUM="Little Killer Sum",t.LITTLE_KILLER_PRODUCT="Little Killer Product",t.LITTLE_KILLER_LOOK_AND_SAY="Little Killer Look And Say",t.LITTLE_KILLER_REGION_SUM_PRODUCT="Little Killer Region Sum Product",t.X_OMIT_LITTLE_KILLER_SUM="X-Omit Little Killer Sum",t.NEGATORS_LITTLE_KILLER_SUM="Negators Little Killer Sum",t))(Mu||{}),Uu=(t=>(t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER="Rotationally Symmetric Galaxy Center",t.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM="Rotationally Symmetric Galaxy Center Sum",t.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER="Yin Yang Sum Of Adjacent Shaded Edge Or Corner",t))(Uu||{}),Fu=(t=>(t.MAZE_WALL="Maze Wall",t))(Fu||{}),$u=(t=>(t.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM="Forbidden Orthogonally Adjacent Sum",t.FORBIDDEN_KNIGHT_SUM="Forbidden Knight Sum",t.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE="Minimum Diagonally Adjacent Difference",t.LITS_MAX_TETROMINO_SUM="LITS Max Tetromino Sum",t))($u||{}),Pu=(t=>(t.COSMETIC_CELL_SHAPE="Cosmetic Cell Shape",t.COSMETIC_CELL_ARROW="Cosmetic Cell Arrow",t.COSMETIC_CELL_MULTI_ARROW="Cosmetic Cell Multi Arrow",t.COSMETIC_EDGE="Cosmetic Edge",t.COSMETIC_DIRECTED_ADJACENT_CELLS="Cosmetic Directed Adjacent Cells",t.COSMETIC_CORNER="Cosmetic Corner",t.COSMETIC_LINE="Cosmetic Line",t.COSMETIC_LINE_WITH_POLYGON_ENDS="Cosmetic Line With Polygon Ends",t.COSMETIC_LINE_WITH_CIRCLE_ENDS="Cosmetic Line With Circle Ends",t.COSMETIC_ARROW="Cosmetic Arrow",t.COSMETIC_CAGE="Cosmetic Cage",t.COSMETIC_OUTSIDE_DIRECTION="Cosmetic Outside Direction",t))(Pu||{}),Ih=(t=>(t.PEN_TOOL="Pen Tool",t))(Ih||{});const Hu={...fh,...gh,...hh,...mh,...Eh,...vh,...Ch,...Oh,...ph},bh={...Va,...Au,...Nu,...Su,...Ru,...xu,...Tu,...Du,...ku,...Gu,...Mu,...Uu,...Fu,...$u},d={...Lu,...Hu,...bh,...Pu,...Ih};var S=(t=>(t.CELL_INPUT_TOOL="Cell Input Tool",t.GLOBAL_CONSTRAINT="Global Constraint",t.SIMPLE_GLOBAL_CONSTRAINT="Simple Global Constraint",t.NEGATIVE_CONSTRAINT="Negative Constraint",t.VALUE_MODIFIER_CONSTRAINT="Value Modifier Constraint",t.UNDETERMINED_REGIONS_CONSTRAINT="Undetermined Regions Constraint",t.GLOBAL_GALAXY_CONSTRAINTS="Global Galaxy Constraints",t.GLOBAL_CAVE_CONSTRAINTS="Global Cave Constraints",t.GLOBAL_DIRECTED_PATH_CONSTRAINTS="Global Directed Path Constraints",t.GLOBAL_CONNECT_FOUR_CONSTRAINTS="Global Connect Four Constraints",t.GLOBAL_LOOP_CONSTRAINTS="Global Loop Constraints",t.DIAGONAL_CONSTRAINT="Diagonal Constraint",t.LOCAL_CONSTRAINT="Local Constraint",t.SINGLE_CELL_CONSTRAINT="Single Cell Constraint",t.SINGLE_CELL_COLOR_TOOL="Single Cell Color Tool",t.SINGLE_CELL_SHAPE_TOOL="Single Cell Shape Tool",t.EDGE_CONSTRAINT="Edge Constraint",t.CORNER_CONSTRAINT="Corner Constraint",t.LINE_CONSTRAINT="Line Constraint",t.CORNER_LINE_CONSTRAINT="Corner Line Constraint",t.DOUBLE_ENDED_LINE_CONSTRAINT="Double Ended Line Constraint",t.ARROW_CONSTRAINT="Arrow Constraint",t.OUTSIDE_EDGE_CONSTRAINT="Outside Edge Constraint",t.OUTSIDE_CORNER_CONSTRAINT="Outside Corner Constraint",t.CAGE_CONSTRAINT="Cage Constraint",t.CLONE_CONSTRAINT="Clone Constraint",t.CENTER_CORNER_EDGE_CONSTRAINT="Center, Corner or Edge Constraint",t.VALUED_GLOBAL_CONSTRAINT="Valued Global Constraint",t.COSMETIC_TOOL="Cosmetic Tool",t.TYPABLE_TOOL="Typable Tool",t.SINGLE_CELL_ARROW_TOOL="Single Cell Arrow Tool",t.SINGLE_CELL_MULTIARROW_TOOL="Single Cell Multiarrow Tool",t.EDGE_TOOL="Edge Tool",t.CORNER_TOOL="Corner Tool",t.LINE_TOOL="Line Tool",t.CORNER_LINE_TOOL="Corner Line Tool",t.ARROW_TOOL="Arrow Tool",t.CAGE_TOOL="Cage Tool",t.OUTSIDE_EDGE_TOOL="Outside Edge Tool",t.OUTSIDE_CORNER_TOOL="Outside Corner Tool",t.OUTSIDE_DIRECTION_TOOL="Outside Direction Tool",t))(S||{});function kb(t){return Object.values(Hu).includes(t)}function Gb(t){return Object.values(bh).includes(t)}function Bu(t){return Object.values(Au).includes(t)||t===d.COSMETIC_CELL_ARROW}function Wu(t){return Object.values(Nu).includes(t)||t===d.COSMETIC_CELL_MULTI_ARROW}function Mb(t){return Object.values(Va).includes(t)||Bu(t)||Wu(t)||t===d.COSMETIC_CELL_SHAPE||t===d.COSMETIC_CELL_ARROW||t===d.COSMETIC_CELL_MULTI_ARROW}function zu(t){return Object.values(Su).includes(t)||t===d.COSMETIC_EDGE}function wh(t){return Object.values(Ru).includes(t)||t===d.COSMETIC_CORNER}function Yu(t){return Object.values(xu).includes(t)||t===d.COSMETIC_LINE||t===d.COSMETIC_LINE_WITH_POLYGON_ENDS||t===d.COSMETIC_LINE_WITH_CIRCLE_ENDS}function ju(t){return Object.values(Tu).includes(t)||t===d.COSMETIC_ARROW}function Ku(t){return Object.values(Du).includes(t)||t===d.COSMETIC_CAGE}function yh(t){return Object.values(Uu).includes(t)}function Lh(t){return Object.values(Fu).includes(t)}function Ah(t){return Object.values(ku).includes(t)}function cs(t){const e=Object.values(Gu),n=Object.values(Mu);return e.includes(t)||n.includes(t)||t===d.COSMETIC_OUTSIDE_DIRECTION}function Ub(t){return Object.values($u).includes(t)}function Fb(t){return Object.values(Pu).includes(t)}function Vu(t){return Object.values(Lu).includes(t)}const $b=["Single Cell Constraint","Edge Constraint","Corner Constraint","Line Constraint","Corner Line Constraint","Arrow Constraint","Cage Constraint","Clone Constraint","Outside Edge Constraint","Outside Corner Constraint","Center, Corner or Edge Constraint"],Pb=["Simple Global Constraint","Negative Constraint","Value Modifier Constraint","Undetermined Regions Constraint","Global Galaxy Constraints","Global Cave Constraints","Global Directed Path Constraints","Global Connect Four Constraints","Global Loop Constraints"];function Nh(t){for(const e of Object.values(d))if(e===t)return e}function Sh(t,e){return Object.values(e).includes(t)}var H=(t=>(t.CELL_ARROW="Cell Arrow",t.CELL_MULTI_ARROW="Cell Multi Arrow",t.ADJACENT_CELLS_ARROW="Adjacent Cells Arrow",t.CIRCLE="Circle",t.SQUARE="Square",t.ELLIPSE="Ellipse",t.RECTANGLE="Rectangle",t.POLYGON="Polygon",t.CAGE="Cage",t.BORDER_LINE="Border Line",t.LINE="Line",t.BULBOUS_ARROW="Bulbous Arrow",t.MAZE_WALL="Maze Wall",t.THERMO_WITH_CIRCLE="Thermo With Circle",t.THERMO_WITH_POLYGON="Thermo With Polygon",t.LINE_WITH_CIRCLE_ENDS="Line With Circle Ends",t.LINE_WITH_POLYGON_ENDS="Line With Polygon Ends",t.TEXT_ONLY="Text Only",t))(H||{});function un(t,e,n){n!==void 0&&(t[e]=n)}function Hb(t){var e,n,r,i,o,a,c,u,_,p,g,v,m,E,O;return!!((e=t.n)!=null&&e.editable||(n=t.r)!=null&&n.editable||(r=t.height)!=null&&r.editable||(i=t.width)!=null&&i.editable||(o=t.inset)!=null&&o.editable||(a=t.angle)!=null&&a.editable||(c=t.fill)!=null&&c.editable||(u=t.stroke)!=null&&u.editable||(_=t.strokeWidth)!=null&&_.editable||(p=t.strokeDasharray)!=null&&p.editable||(g=t.strokeDashoffset)!=null&&g.editable||(v=t.fontSize)!=null&&v.editable||(m=t.fontColor)!=null&&m.editable||(E=t.opacity)!=null&&E.editable||(O=t.displayValue)!=null&&O.editable)}function lu(t){var n,r,i,o,a,c,u,_,p,g,v,m,E,O,I,b,y,D,M,W,j,F,q;const e={type:t.type};return un(e,"n",(n=t.n)==null?void 0:n.value),un(e,"r",(r=t.r)==null?void 0:r.value),un(e,"height",(i=t.height)==null?void 0:i.value),un(e,"width",(o=t.width)==null?void 0:o.value),un(e,"inset",(a=t.inset)==null?void 0:a.value),un(e,"angle",(c=t.angle)==null?void 0:c.value),un(e,"fill",(u=t.fill)==null?void 0:u.value),un(e,"stroke",(_=t.stroke)==null?void 0:_.value),un(e,"strokeWidth",(p=t.strokeWidth)==null?void 0:p.value),un(e,"strokeDasharray",(g=t.strokeDasharray)==null?void 0:g.value),un(e,"strokeDashoffset",(v=t.strokeDashoffset)==null?void 0:v.value),un(e,"fontSize",(m=t.fontSize)==null?void 0:m.value),un(e,"fontColor",(E=t.fontColor)==null?void 0:E.value),un(e,"opacity",(O=t.opacity)==null?void 0:O.value),un(e,"displayValue",(I=t.displayValue)==null?void 0:I.value),t.linePathOptions&&(e.linePathOptions={shortenHead:(y=(b=t.linePathOptions)==null?void 0:b.shortenHead)==null?void 0:y.value,shortenTail:(M=(D=t.linePathOptions)==null?void 0:D.shortenTail)==null?void 0:M.value,bezierRounding:(j=(W=t.linePathOptions)==null?void 0:W.bezierRounding)==null?void 0:j.value,closeLoops:(q=(F=t.linePathOptions)==null?void 0:F.closeLoops)==null?void 0:q.value}),e}function Bb(t,e){const n={};if(e===void 0)return t;for(const i in t)i!=="linePathOptions"&&t[i]!==e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0}const Wb={type:"Circle",r:.35,strokeWidth:.02,stroke:"black"},zb={type:"Cell Arrow",strokeWidth:.1,stroke:"black"},Yb={type:"Cell Multi Arrow",strokeWidth:.08,stroke:"black"},Rh={type:"Circle",r:.15,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},xh={type:"Circle",r:.25,strokeWidth:.023,stroke:"black",fill:"var(--grid-background-color)"},ms={type:"Line",strokeWidth:.125,stroke:"gray"},Xu={type:"Cage",strokeWidth:.03,stroke:"black",fill:"none",strokeDasharray:.08,inset:.06,connectDiag:!0},qu={type:"Line",r:.3,strokeWidth:.03,stroke:"var(--constraint-color-gray)",fill:"none",linePathOptions:{shortenTail:.1,bezierRounding:.1}},jb={strokeWidth:.05,strokeDasharray:0,stroke:"var(--constraint-color-light-gray)",fill:"none",inset:.07},Kb={fontColor:"var(--text-primary-color)",stroke:"var(--text-primary-color)"};var P=(t=>(t[t.NONE=-1]="NONE",t[t.BACKGROUND=0]="BACKGROUND",t[t.OUTSIDE_CELLS_BACKGROUND=10]="OUTSIDE_CELLS_BACKGROUND",t[t.CELL_COLOR_TOOL=20]="CELL_COLOR_TOOL",t[t.HIGHLIGHTS=30]="HIGHLIGHTS",t[t.CELL_SHAPE_TOOL=40]="CELL_SHAPE_TOOL",t[t.CELLS_SEEN_BY_SELECTION=50]="CELLS_SEEN_BY_SELECTION",t[t.LINE_TOOLS=60]="LINE_TOOLS",t[t.ARROW_TOOLS=70]="ARROW_TOOLS",t[t.SELECTION=80]="SELECTION",t[t.GRID_LINES=100]="GRID_LINES",t[t.CAGE_TOOLS=110]="CAGE_TOOLS",t[t.OUTSIDE_TOOLS=120]="OUTSIDE_TOOLS",t[t.EDGE_TOOLS=130]="EDGE_TOOLS",t[t.CORNER_TOOLS=140]="CORNER_TOOLS",t[t.CENTER_PM=200]="CENTER_PM",t[t.CORNER_PM=210]="CORNER_PM",t[t.CELL_VALUES=220]="CELL_VALUES",t[t.CELL_CONFLICTS=230]="CELL_CONFLICTS",t[t.PEN_TOOL=240]="PEN_TOOL",t))(P||{});const Xa=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`,Cn=()=>`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`,ao=()=>`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`,Vb=()=>`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,jt=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,lo=()=>`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,Zu=()=>`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`,xe=()=>`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`,Xb=()=>`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`,qb=()=>`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`,Zb=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,co=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`,Qb=()=>`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`,Jb=()=>`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`,ew=()=>`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;function tw(t){return Bu(t)?Xb():Wu(t)?qb():t===d.XV?Jb():zu(t)?Zb():Ku(t)?Xa():ju(t)?ao():cs(t)?Vb():Yu(t)?xe():Ah(t)?ew():""}var ge=(t=>(t[t.SELECTION=0]="SELECTION",t[t.SINGLE_CELL=1]="SINGLE_CELL",t[t.SINGLE_CELL_ARROW=2]="SINGLE_CELL_ARROW",t[t.SINGLE_CELL_MULTI_ARROW=3]="SINGLE_CELL_MULTI_ARROW",t[t.EDGE=4]="EDGE",t[t.CORNER=5]="CORNER",t[t.LINE=6]="LINE",t[t.ARROW=7]="ARROW",t[t.CAGE=8]="CAGE",t[t.CLONE=9]="CLONE",t[t.CORNER_LINE=10]="CORNER_LINE",t[t.CENTER_CORNER_OR_EDGE=11]="CENTER_CORNER_OR_EDGE",t[t.OUTSIDE_DIRECTION=12]="OUTSIDE_DIRECTION",t[t.PEN=13]="PEN",t))(ge||{}),Et=(t=>(t[t.EDGE=0]="EDGE",t[t.CORNER=1]="CORNER",t[t.CELL_CENTER=2]="CELL_CENTER",t[t.CORNER_OR_EDGE=3]="CORNER_OR_EDGE",t[t.CORNER_OR_CENTER=4]="CORNER_OR_CENTER",t[t.EDGE_OR_CENTER=5]="EDGE_OR_CENTER",t[t.CLOSEST=6]="CLOSEST",t))(Et||{});const nw={inputOptions:{type:ge.ARROW},toolId:d.ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.",usage:ao(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}},rw={inputOptions:{type:ge.ARROW},toolId:d.AVERAGE_ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The digits along an arrow must average to the number in the connecting circle.",usage:ao(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}},iw={inputOptions:{type:ge.ARROW,allowSelfIntersection:!0},toolId:d.BULBOUS_ARROW,order:P.ARROW_TOOLS,shape:{type:H.BULBOUS_ARROW,r:{editable:!1,value:.3},inset:{editable:!1,value:.2},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeLinejoin:{editable:!1,value:"round"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"The sum of the digits in white bulb equals the sum of the digits on each attached arrow.",usage:ao(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}};ge.ARROW,d.SQUARE_ROOT_ARROW,P.ARROW_TOOLS,H.LINE,ao(),S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL;const ow={inputOptions:{type:ge.ARROW},toolId:d.CHAOS_CONSTRUCTION_ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.05},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.25}}},meta:{description:"Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.",usage:ao(),tags:[],categories:[S.ARROW_CONSTRAINT,S.LOCAL_CONSTRAINT,S.ARROW_TOOL]}};function sw(t){return t.altKey&&t.shiftKey&&!(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyD"}function aw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyZ"}function lw(t){return!t.altKey&&!t.shiftKey&&(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyY"}function cw(t){return(t.ctrlKey||t.metaKey)&&t.type==="keydown"&&!t.repeat&&t.code==="KeyA"&&!t.shiftKey}function uw(t){return t.altKey&&t.type==="keydown"&&t.code==="KeyR"}const dw={Delete:null,Backspace:null};function _w(t,e=10){if(t in dw)return null;const n=parseInt(t,e);if(!isNaN(n))return n}function fw(t){return!!(["KeyZ","KeyX","KeyC","KeyV"].includes(t.code)&&!t.repeat||t.code==="Space")}function gw(t){return t.repeat?!1:!!["Control","Shift","Alt"].includes(t.key)}function hw(t){const e={KeyZ:d.DIGIT,KeyX:d.CORNER_PM,KeyC:d.CENTER_PM,KeyV:d.HIGHLIGHTS};return t in e?e[t]:d.DIGIT}function pw(t){let e;return t.altKey?e=d.HIGHLIGHTS:t.shiftKey&&!t.ctrlKey?e=d.CORNER_PM:!t.shiftKey&&t.ctrlKey?e=d.CENTER_PM:e=d.HIGHLIGHTS,e}function Th(t){return t==="Backspace"}function uo(t){return!!(/^[0-9a-zA-Z<>\-,=]$/.test(t.key)||Th(t.key))}function vw(t){return["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(t.code)}function mw(t){return vw(t)||["KeyA","KeyW","KeyS","KeyD"].includes(t.code)}function Ew(t){const e={ArrowLeft:[-1,0],ArrowUp:[0,-1],ArrowRight:[1,0],ArrowDown:[0,1],KeyA:[-1,0],KeyW:[0,-1],KeyD:[1,0],KeyS:[0,1]},[n,r]=e[t.code];return[n,r]}function Ni(t,e){const n=(e==null?void 0:e.allowInequalities)??!0,r=(e==null?void 0:e.allowSymbolicVariables)??!0,i=(e==null?void 0:e.allowNegatives)??!0,o=(e==null?void 0:e.maxLength)??3;if(t.length>o)return!1;const a=n?/(?:<|>|>=|<=)?/:RegExp(""),c=i?/-?/:RegExp(""),u=/[a-zA-Z][a-zA-Z0-9]*?/,_=/[0-9]*/;return!!(r&&RegExp(`^${a.source}${u.source}$`,"i").test(t)||RegExp(`^${a.source}${c.source}${_.source}$`,"i").test(t))}function Nr(t,e,n){if(t===void 0)return t;let r=t;return Th(e)?r=t.slice(0,t.length-1):r=t+e,n(r)?r:t}const Qu=[S.CAGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CAGE_TOOL],On=[S.CAGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CAGE_TOOL];function Dh(t,e=5){return Ni(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function kh(t,e,n){return Nr(t,e,n)}const gn={type:H.CAGE,strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},strokeDasharray:{editable:!0,value:.08},inset:{editable:!0,value:.06,lb:0,ub:.5,step:.01}},qa={type:ge.CAGE,defaultValue:"",allowDiagonallyAdjacent:!0},In={...qa,valueUpdater:(t,e)=>kh(t,e,Dh)},Cw={inputOptions:In,toolId:d.KILLER_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).",usage:Cn(),tags:[],categories:On}},Ow={inputOptions:In,toolId:d.UNIQUE_DIGITS_CAGE,order:P.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.1},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"},strokeDasharray:{editable:!1,value:0},inset:{editable:!1,value:0}},meta:{description:"A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.",usage:Cn(),tags:[],categories:On}},Iw={inputOptions:In,toolId:d.INVERTED_KILLER_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).",usage:Cn(),tags:[],categories:On}},bw={inputOptions:In,toolId:d.SUM_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.",usage:Cn(),tags:[],categories:On}},ww={inputOptions:qa,toolId:d.SUM_CAGE_LOOK_AND_SAY,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).",usage:Xa(),tags:[],categories:Qu}},yw={inputOptions:qa,toolId:d.PARITY_BALANCE_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.",usage:Xa(),tags:[],categories:Qu}},Lw={inputOptions:In,toolId:d.DIVISIBLE_KILLER_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.",usage:Cn(),tags:[],categories:On}},Aw={inputOptions:In,toolId:d.SPOTLIGHT_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",usage:Cn(),tags:[],categories:On}},Nw={inputOptions:qa,toolId:d.PUTTERIA_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",usage:Xa(),tags:[],categories:Qu}};d.KILLER_CAGE_LOOK_AND_SAY,P.CAGE_TOOLS,Cn();const Sw={inputOptions:In,toolId:d.MULTISET_CAGE,order:P.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"rgba(46, 203, 255, 0.1)"},strokeDasharray:{editable:!1,value:.08},inset:{editable:!1,value:.07}},meta:{description:"Light blue cages with the same label have the same group of digits.",usage:Cn(),tags:[],categories:On}},Rw={inputOptions:In,toolId:d.VAULTED_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.",usage:Cn(),tags:[],categories:On}};d.AQUARIUM_CAGE,P.CAGE_TOOLS,Cn();const xw={inputOptions:In,toolId:d.YIN_YANG_ANTITHESIS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.",usage:Cn(),tags:[],categories:On}},Tw={inputOptions:In,toolId:d.YIN_YANG_BREAKEVEN_KILLER_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.",usage:Cn(),tags:[],categories:On}},Dw={inputOptions:In,toolId:d.DOUBLERS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).",usage:Cn(),tags:[],categories:On}},kw={inputOptions:In,toolId:d.NEGATORS_KILLER_CAGE,order:P.CAGE_TOOLS,shape:gn,meta:{description:"A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.",usage:Cn(),tags:[],categories:On}},Gw={inputOptions:{type:ge.SELECTION},toolId:d.GIVEN,order:0,permanent:!0,menu:{type:"select",name:"Given"},meta:{description:"",tags:[],categories:[S.CELL_INPUT_TOOL]}},Mw={inputOptions:{type:ge.SELECTION},toolId:d.DIGIT,order:0,permanent:!0,menu:{type:"select",name:"Digit"},meta:{description:"",tags:[],categories:[S.CELL_INPUT_TOOL]}},Uw={inputOptions:{type:ge.SELECTION},toolId:d.REGIONS,order:0,permanent:!0,menu:{type:"select",name:"Regions"},meta:{description:"Digits cannot repeat in each region.",tags:[],categories:[S.CELL_INPUT_TOOL]}},Fw={inputOptions:{type:ge.SELECTION},toolId:d.CORNER_PM,order:0,permanent:!0,menu:{type:"select",name:"Corner Pencilmarks"},meta:{description:"Corner Pencilmarks",tags:[],categories:[S.CELL_INPUT_TOOL]}},$w={inputOptions:{type:ge.SELECTION},toolId:d.CENTER_PM,order:0,permanent:!0,menu:{type:"select",name:"Center Pencilmarks"},meta:{description:"Center Pencilmarks",tags:[],categories:[S.CELL_INPUT_TOOL]}},Pw={inputOptions:{type:ge.SELECTION},toolId:d.HIGHLIGHTS,order:0,permanent:!0,menu:{type:"select",name:"Highlights"},meta:{description:"Highlights",tags:[],categories:[S.CELL_INPUT_TOOL]}},Hw={inputOptions:{type:ge.SELECTION},toolId:d.OUTSIDE,order:0,permanent:!0,menu:{type:"select",name:"Outside"},meta:{description:"Global constraints do not apply to outside cells (but local constraints might).",tags:[],categories:[S.CELL_INPUT_TOOL]}},Bw={inputOptions:{type:ge.SELECTION},toolId:d.FOG,order:0,permanent:!0,menu:{type:"select",name:"Set Fog"},meta:{description:"Cells are covered by fog.",tags:[],categories:[S.CELL_INPUT_TOOL]}},Ww={inputOptions:{type:ge.PEN},toolId:d.PEN_TOOL,order:0,permanent:!0,menu:{type:"select",name:"Pen Tool"},meta:{description:"Pen Tool",usage:`Click and drag between cell centers or cell corners to draw lines.
	Click on a cell edge of center to draw marks.`,tags:[],categories:[]}},zw={type:ge.CENTER_CORNER_OR_EDGE,targets:Et.CLOSEST};d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,P.OUTSIDE_TOOLS,H.CIRCLE,Zu(),S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT;const Yw={inputOptions:{type:ge.CENTER_CORNER_OR_EDGE,targets:Et.CLOSEST,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,order:P.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)",usage:Zu(),tags:[],categories:[S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT]}},jw={inputOptions:{type:ge.CENTER_CORNER_OR_EDGE,targets:Et.CORNER_OR_EDGE,valueUpdater:(t,e)=>Nr(t,e,()=>!0),defaultValue:""},toolId:d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,order:P.OUTSIDE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.02,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.",usage:Zu(),tags:[],categories:[S.LOCAL_CONSTRAINT,S.CENTER_CORNER_EDGE_CONSTRAINT]}},Kw={inputOptions:{type:ge.CLONE},toolId:d.CLONE_REGION,order:P.CAGE_TOOLS,shape:{type:H.CAGE,strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!1,value:0},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},fill:{editable:!1,value:"none"},inset:{editable:!1,value:.07}},meta:{description:"Clone regions contain the same digits in the same position.",tags:[],categories:[S.CLONE_CONSTRAINT,S.LOCAL_CONSTRAINT]}};function Gh(t,e=3){return Ni(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Mh(t,e,n){return Nr(t,e,n)}function Vw(t,e){function n(){return!0}return Nr(t,e,n)}const Ju={type:ge.CORNER,defaultValue:"",valueUpdater:(t,e)=>Mh(t,e,Gh)},Xw={inputOptions:{type:ge.CORNER,valueUpdater:(t,e)=>Vw(t,e),defaultValue:""},toolId:d.QUADRUPLE,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Digits in a circle appear at least once in the four surrounding cells.",tags:[],usage:Qb(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL]}},qw={inputOptions:Ju,toolId:d.CORNER_SUM,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],usage:co(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL]}},Zw={inputOptions:{type:ge.CORNER,defaultValue:""},toolId:d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.2},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.",tags:[],usage:co(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Qw={inputOptions:Ju,toolId:d.CORNER_EVEN_COUNT,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.25},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Numbers in circles show the amount of even numbers in the surrounding four cells.",tags:[],usage:co(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}};d.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,P.CORNER_TOOLS,H.CIRCLE,co(),S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.CORNER_TOOL;const Jw={inputOptions:{type:ge.CORNER,defaultValue:"X"},toolId:d.PRODUCT_SQUARE,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"var(--grid-background-color)"},fontSize:{editable:!1,value:.34}},meta:{description:"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",tags:[],usage:co(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},ey={inputOptions:{type:ge.CORNER,defaultValue:""},toolId:d.EQUAL_DIAGONAL_DIFFERENCES,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:.15},strokeWidth:{editable:!1,value:.023},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.",tags:[],usage:co(),categories:[S.CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.CORNER_TOOL]}},Za=[S.EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.EDGE_TOOL],Mn=[S.EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.EDGE_TOOL],Es=.15,Uh=.02,ti={type:H.CIRCLE,r:{editable:!0,value:Es,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:Uh,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},ed={type:H.BORDER_LINE,strokeWidth:{editable:!0,value:.1,lb:0,ub:1,step:.025},stroke:{editable:!0,value:"black"},opacity:{editable:!0,value:.9}};function ty(t,e=1){return Ni(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!1,allowNegatives:!1})}function Fh(t,e=3){return Ni(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function ny(t){return t.length>1?!1:!!/^[vVxX]$/.test(t)}function td(t,e,n){return Nr(t,e,n)}function ry(t,e){return t===void 0?"V":ny(e)?e.toUpperCase():t}function iy(t){return t.length>1?!1:!!/^[<>]$/.test(t)}function $h(t,e){return t===void 0?"<":iy(e)?e:t}const _o={type:ge.EDGE,valueUpdater:(t,e)=>td(t,e,Fh)},oy={inputOptions:{type:ge.EDGE,valueUpdater:(t,e)=>td(t,e,ty)},toolId:d.RATIO,order:P.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Es},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"black"},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.",tags:[],categories:Mn}},sy={inputOptions:_o,toolId:d.DIFFERENCE,order:P.EDGE_TOOLS,shape:ti,meta:{description:"Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.",tags:[],categories:Mn}},ay={inputOptions:_o,toolId:d.EDGE_SUM,order:P.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(96, 96, 255, 0.8)"}},meta:{description:"Cells separated by a transparent blue dot marked with an X have a fixed sum of X.",tags:[],categories:Mn}},ly={inputOptions:{type:ge.EDGE,defaultValue:"V",valueUpdater:ry},toolId:d.XV,order:P.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:Es},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.",tags:[],categories:Mn}},cy={inputOptions:{type:ge.EDGE,valueUpdater:$h,defaultValue:"<"},toolId:d.EDGE_INEQUALITY,order:P.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.3},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"An inequality sign that separates two cells points to the lower of the two digits.",tags:[],categories:Mn}},uy={inputOptions:_o,toolId:d.EDGE_PRODUCT,order:P.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(253, 79, 79, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.",tags:[],categories:Mn}},dy={inputOptions:_o,toolId:d.EDGE_MODULO,order:P.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(253, 175, 49, 0.5)"}},meta:{description:"Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.",tags:[],categories:Mn}},_y={inputOptions:_o,toolId:d.EDGE_FACTOR,order:P.EDGE_TOOLS,shape:{...ti,fill:{editable:!1,value:"rgba(251, 251, 40, 0.5)"}},meta:{description:"For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.",tags:[],categories:Mn}},fy={inputOptions:{type:ge.EDGE},toolId:d.XY_DIFFERENCES,order:P.EDGE_TOOLS,shape:{type:H.POLYGON,n:{editable:!1,value:4},r:{editable:!1,value:Es},strokeWidth:{editable:!1,value:Uh,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.",tags:[],categories:Mn}},gy={inputOptions:{type:ge.EDGE},toolId:d.YIN_YANG_WHITE_KROPKI,order:P.EDGE_TOOLS,shape:ti,meta:{description:"Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.",tags:[],categories:Mn}},hy={inputOptions:{type:ge.EDGE},toolId:d.YIN_YANG_KROPKI,order:P.EDGE_TOOLS,shape:{type:H.CIRCLE,r:{editable:!1,value:Es},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"lightblue"},opacity:{editable:!1,value:.2},fontColor:{editable:!1,value:"white"}},meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.",tags:[],categories:Mn}},py={inputOptions:{type:ge.EDGE},toolId:d.FILLOMINO_REGION_BORDER,order:P.EDGE_TOOLS,shape:ed,meta:{description:"A line in the border between cells indicates a fillomino region border.",tags:[],categories:Za}},vy={inputOptions:{type:ge.EDGE},toolId:d.UNKNOWN_REGION_BORDER,order:P.EDGE_TOOLS,shape:ed,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Za}},my={inputOptions:{type:ge.EDGE},toolId:d.CHAOS_CONSTRUCTION_SUGURU_BORDER,order:P.EDGE_TOOLS,shape:ed,meta:{description:"A line in the border between cells indicates a region border.",tags:[],categories:Za}},Ey={inputOptions:{type:ge.EDGE},toolId:d.EDGE_CAVE_ONE_OF_EACH,order:P.EDGE_TOOLS,shape:ti,meta:{description:"For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).",tags:[],categories:Za}},Cy={inputOptions:{type:ge.EDGE,valueUpdater:$h,defaultValue:"<"},toolId:d.ONE_WAY_DOOR,order:P.EDGE_TOOLS,shape:{type:H.TEXT_ONLY,r:{editable:!1,value:.1},strokeWidth:{editable:!1,value:0,lb:0,ub:1,step:.025},stroke:{editable:!1,value:"none"},fontSize:{editable:!1,value:.4},fontColor:{editable:!0,value:"darkblue"},fill:{editable:!1,value:"var(--grid-background-color)"}},meta:{description:"The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.",tags:[],categories:Mn}};d.CUSTOM_EDGE_CONSTRAINT,P.EDGE_TOOLS;const fo=[S.OUTSIDE_CORNER_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_CORNER_TOOL,S.OUTSIDE_DIRECTION_TOOL];function Oy(t,e=5){return Ni(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Ph(t,e,n){return Nr(t,e,n)}const go={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},ho={type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ph(t,e,Oy),defaultValue:"",cornerOrEdge:Et.CORNER},Iy={inputOptions:ho,toolId:d.LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:go,meta:{description:"A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.",usage:lo(),tags:[],categories:fo}},by={inputOptions:ho,toolId:d.LITTLE_KILLER_PRODUCT,order:P.OUTSIDE_TOOLS,shape:go,meta:{description:"A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.",usage:lo(),tags:[],categories:fo}},wy={inputOptions:ho,toolId:d.LITTLE_KILLER_LOOK_AND_SAY,order:P.OUTSIDE_TOOLS,shape:go,meta:{description:"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",usage:lo(),tags:[],categories:fo}},yy={inputOptions:ho,toolId:d.X_OMIT_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:go,meta:{description:"Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.",usage:lo(),tags:[],categories:fo}},Ly={inputOptions:ho,toolId:d.LITTLE_KILLER_REGION_SUM_PRODUCT,order:P.OUTSIDE_TOOLS,shape:go,meta:{description:"Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.",usage:lo(),tags:[],categories:fo}},Ay={inputOptions:ho,toolId:d.NEGATORS_LITTLE_KILLER_SUM,order:P.OUTSIDE_TOOLS,shape:go,meta:{description:"Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.",usage:lo(),tags:[],categories:fo}},Kt=[S.OUTSIDE_EDGE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_EDGE_TOOL,S.OUTSIDE_DIRECTION_TOOL];function po(t,e=5){return Ni(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function Cs(t,e,n){return Nr(t,e,n)}const Vt={fontColor:{editable:!0,value:"var(--text-primary-color)"},stroke:{editable:!0,value:"var(--text-primary-color)"}},bn={type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Cs(t,e,po),defaultValue:"",cornerOrEdge:Et.EDGE},Ny={inputOptions:bn,toolId:d.SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',usage:jt(),tags:[],categories:Kt}},Sy={inputOptions:{...bn,cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.MYSTERY_SANDWICH_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',usage:jt(),tags:[],categories:Kt}},Ry={inputOptions:bn,toolId:d.SANDWICH_SUM_XOR_X_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.",usage:jt(),tags:[],categories:Kt}},xy={inputOptions:bn,toolId:d.X_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.",usage:jt(),tags:[],categories:Kt}},Ty={inputOptions:bn,toolId:d.SHORTSIGHTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.",usage:jt(),tags:[],categories:Kt}},Dy={inputOptions:bn,toolId:d.SHIFTED_X_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).",usage:jt(),tags:[],categories:Kt}},ky={inputOptions:bn,toolId:d.BROKEN_X_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.",usage:jt(),tags:[],categories:Kt}},Gy={inputOptions:bn,toolId:d.X_SUM_SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.",usage:jt(),tags:[],categories:Kt}},My={inputOptions:bn,toolId:d.BATTLEFIELD,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",usage:jt(),tags:[],categories:Kt}},Uy={inputOptions:bn,toolId:d.SKYSCRAPERS,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A clue outside the grid indicates the number of skyscrapers seen from that side.",usage:jt(),tags:[],categories:Kt}},Fy={inputOptions:bn,toolId:d.X_INDEX,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.",usage:jt(),tags:[],categories:Kt}},$y={inputOptions:bn,toolId:d.RISING_STREAK,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",usage:jt(),tags:[],categories:Kt}};d.ROW_OR_COLUMN_RANK,P.OUTSIDE_TOOLS,jt();const Py={inputOptions:bn,toolId:d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.",usage:jt(),tags:[],categories:Kt}},Hy={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Cs(t,e,po),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.OUTSIDE_CONSECUTIVE_SUM,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.",usage:jt(),tags:[],categories:Kt}},By={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Cs(t,e,po),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.LOOPWICHES,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).",usage:jt(),tags:[],categories:Kt}},Wy={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Cs(t,e,po),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**",usage:jt(),tags:[],categories:Kt}},zy={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Cs(t,e,po),defaultValue:"",cornerOrEdge:Et.EDGE},toolId:d.PENTOMINO_BORDER_COUNT,order:P.OUTSIDE_TOOLS,shape:Vt,meta:{description:"Clues outside the grid indicate the number of borders between pentominoes present in that row or column.",usage:jt(),tags:[],categories:Kt}},Yy={inputOptions:{type:ge.SINGLE_CELL},toolId:d.COSMETIC_CELL_SHAPE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.3,lb:.01,ub:.5,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.6,lb:.01,ub:1,step:.01},height:{editable:!0,value:.6,lb:.01,ub:1,step:.01},strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},jy={inputOptions:{type:ge.SINGLE_CELL_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.05,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},Ky={inputOptions:{type:ge.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.COSMETIC_CELL_MULTI_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.04,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},Vy={inputOptions:{type:ge.EDGE,valueUpdater:(t,e)=>td(t,e,Fh),defaultValue:""},toolId:d.COSMETIC_EDGE,order:P.EDGE_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.15,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.2,lb:.01,ub:2,step:.01},height:{editable:!0,value:.2,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.02,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Edge"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},Xy={inputOptions:{type:ge.CORNER,valueUpdater:(t,e)=>Mh(t,e,Gh),defaultValue:""},toolId:d.COSMETIC_CORNER,order:P.CORNER_TOOLS,shape:{type:H.CIRCLE,allowedTypes:[H.CIRCLE,H.ELLIPSE,H.SQUARE,H.RECTANGLE,H.POLYGON],r:{editable:!0,value:.2,lb:.01,ub:1,step:.01},n:{editable:!0,value:3,lb:3,ub:10,step:1},width:{editable:!0,value:.4,lb:.01,ub:2,step:.01},height:{editable:!0,value:.4,lb:.01,ub:2,step:.01},angle:{editable:!0,value:0},strokeWidth:{editable:!0,value:.015,lb:0,ub:.5,step:.005},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"var(--grid-background-color)"}},menu:{type:"select",name:"Cosmetic Corner"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},qy={inputOptions:{type:ge.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.15},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.1},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},Zy={inputOptions:{type:ge.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_CIRCLE_ENDS,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Circle Ends"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},Qy={inputOptions:{type:ge.LINE,allowSelfIntersection:!0},toolId:d.COSMETIC_LINE_WITH_POLYGON_ENDS,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!0,value:4},r:{editable:!0,value:.35},angle:{editable:!0,value:0},stroke:{editable:!0,value:"black"},strokeWidth:{editable:!0,value:.03},strokeDasharray:{editable:!0,value:0},strokeDashoffset:{editable:!0,value:0},linePathOptions:{shortenHead:{editable:!0,value:.15},shortenTail:{editable:!0,value:.15},bezierRounding:{editable:!0,value:.15},closeLoops:{editable:!0,value:!0}}},menu:{type:"select",name:"Cosmetic Line With Polygon Ends"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL]}},Jy={inputOptions:{type:ge.CAGE,valueUpdater:(t,e)=>kh(t,e,Dh),defaultValue:"",allowDiagonallyAdjacent:!0},toolId:d.COSMETIC_CAGE,order:P.CAGE_TOOLS,shape:{strokeWidth:{editable:!0,value:.03,lb:0,ub:.5,step:.01},strokeDasharray:{editable:!0,value:.08},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"},inset:{editable:!0,value:.06}},menu:{type:"select",name:"Cosmetic Cage"},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.TYPABLE_TOOL]}},eL={inputOptions:{type:ge.ARROW},toolId:d.COSMETIC_ARROW,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.35,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.05,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.LOCAL_CONSTRAINT]}},tL={inputOptions:{type:ge.OUTSIDE_DIRECTION,valueUpdater:(t,e)=>Ph(t,e,po),defaultValue:"",cornerOrEdge:Et.CORNER_OR_EDGE},toolId:d.COSMETIC_OUTSIDE_DIRECTION,order:P.ARROW_TOOLS,shape:{type:H.LINE,r:{editable:!0,value:.3,lb:0,ub:1,step:.01},strokeWidth:{editable:!0,value:.04,lb:0,ub:.5,step:.01},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.2}}},meta:{description:"",tags:[],categories:[S.COSMETIC_TOOL,S.LOCAL_CONSTRAINT,S.TYPABLE_TOOL,S.OUTSIDE_DIRECTION_TOOL]}},vo=[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT,S.DIAGONAL_CONSTRAINT],nL={toolId:d.SUDOKU_RULES_DO_NOT_APPLY,order:0,meta:{description:"Sudoku rules do not apply.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},rL={toolId:d.LEAVE_EMPTY_CELLS_EMPTY,order:0,meta:{description:"This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},iL={toolId:d.HEXED_SUDOKU,order:0,meta:{description:"Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},oL={toolId:d.FILLOMINO,order:0,meta:{description:"Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},sL={toolId:d.LITS,order:0,meta:{description:"Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},aL={toolId:d.ANTIKNIGHT,order:0,meta:{description:"Cells that are a chess knight's move apart must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},lL={toolId:d.ANTI_GIRAFFE,order:0,meta:{description:"Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},cL={toolId:d.ANTI_LONG_KNIGHT,order:0,meta:{description:"Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},uL={toolId:d.ANTIKING,order:0,meta:{description:"Cells that are a chess king's move apart must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},dL={toolId:d.DISJOINT_GROUPS,order:0,meta:{description:"Cells that appear in the same position relative to their default regions must not contain the same number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},_L={toolId:d.TANGO,order:0,meta:{description:"No adjacent run of three cells may be all odd or all even, horizontally or vertically.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},fL={toolId:d.NONCONSECUTIVE,order:0,meta:{description:"Orthogonally adjacent cells must not contain consecutive numbers.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},gL={toolId:d.NONRATIO,order:0,meta:{description:"Orthogonally adjacent cells cannot be in 1:2 ratio.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},hL={toolId:d.NEGATIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the negative diagonal.",tags:[],categories:vo}},pL={toolId:d.POSITIVE_DIAGONAL,order:0,meta:{description:"Numbers must not repeat on the positive diagonal.",tags:[],categories:vo}},vL={toolId:d.NEGATIVE_ANTIDIAGONAL,order:0,meta:{description:"The negative diagonal containts only 3 different numbers.",tags:[],categories:vo}},mL={toolId:d.POSITIVE_ANTIDIAGONAL,order:0,meta:{description:"The positive diagonal containts only 3 different numbers.",tags:[],categories:vo}},EL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple negative diagonal.",tags:[],categories:vo}},CL={toolId:d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,order:0,meta:{description:"Odd/Even parity is reflected across the purple positive diagonal.",tags:[],categories:vo}},OL={toolId:d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,order:0,meta:{description:"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},IL={toolId:d.ANTI_ENTROPY,order:0,meta:{description:"Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},bL={toolId:d.GLOBAL_INDEXING_COLUMN,order:0,meta:{description:"Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},wL={toolId:d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,order:0,meta:{description:"All odd numbers must form an othogonally connected region at the end.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.SIMPLE_GLOBAL_CONSTRAINT]}},yL={toolId:d.ALL_RATIOS_GIVEN,order:0,meta:{description:"All Ratios are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},LL={toolId:d.ALL_DIFFERENCES_GIVEN,order:0,meta:{description:"All Differences are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},AL={toolId:d.ALL_X_GIVEN,order:0,meta:{description:"All X's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},NL={toolId:d.ALL_V_GIVEN,order:0,meta:{description:"All V's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},SL={toolId:d.ALL_XV_GIVEN,order:0,meta:{description:"All XV's are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},RL={toolId:d.ALL_RADARS_GIVEN,order:0,meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},xL={toolId:d.ALL_XY_DIFFERENCES_GIVEN,order:0,meta:{description:"If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},TL={toolId:d.ALL_INDEXING_COLUMN_GIVEN,order:0,meta:{description:"Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},DL={toolId:d.ALL_INDEXING_ROW_GIVEN,order:0,meta:{description:"Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},kL={toolId:d.ALL_YIN_YANG_KROPKI_GIVEN,order:0,meta:{description:"Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},GL={toolId:d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,order:0,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}};d.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT;d.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT;const ML={toolId:d.NURIMISAKI_PATH_GERMAN_WHISPERS,order:0,meta:{description:"Cells Along Nurimisaki Path Have A Difference Of At Least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},UL={toolId:d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,order:0,meta:{description:"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},FL={toolId:d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,order:0,meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.NEGATIVE_CONSTRAINT]}},$L={toolId:d.CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},PL={toolId:d.NUMBERED_CHAOS_CONSTRUCTION,order:0,meta:{description:"The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},HL={toolId:d.CHAOS_CONSTRUCTION_SUGURU,order:0,meta:{description:"In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},BL={toolId:d.YIN_YANG,order:0,meta:{description:"Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},WL={toolId:d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,order:0,meta:{description:"In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},zL={toolId:d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,order:0,meta:{description:"The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},YL={toolId:d.NURIMISAKI,order:0,meta:{description:"Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},jL={toolId:d.NURIKABE,order:0,meta:{description:"Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},KL={toolId:d.NURIKABE_NO_REPEATS_IN_ISLANDS,order:0,meta:{description:"Digits may not repeat within a nurikabe island.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},VL={toolId:d.TWO_CONTIGUOUS_REGIONS,order:0,meta:{description:"Divide the grid into two sets of contiguous cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},XL={toolId:d.SASHIGANE,order:0,meta:{description:"Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},qL={toolId:d.NORINORI,order:0,meta:{description:"Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},ZL={toolId:d.SHIKAKU,order:0,meta:{description:"Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},QL={toolId:d.SHIKAKU_NO_REPEATS_IN_REGION,order:0,meta:{description:"Digits cannot repeat within a shikaku region.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},JL={toolId:d.NORINORI_STAR_BATTLE,order:0,meta:{description:"Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},eA={toolId:d.GOLDILOCKS_ZONE,order:0,meta:{description:"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},tA={toolId:d.CELL_CENTER_LOOP_NO_TOUCHING,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},nA={toolId:d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,order:0,meta:{description:"Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},rA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,order:0,meta:{description:"For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},iA={toolId:d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,order:0,meta:{description:"Adjacent cells along a loop differ by 5 or more.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},oA={toolId:d.NOT_LOOP_SIZED_REGIONS,order:0,meta:{description:"Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},sA={toolId:d.MODULAR_LOOP,order:0,meta:{description:"Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_LOOP_CONSTRAINTS]}},aA={toolId:d.MAZE_DIRECTED_PATH,order:0,meta:{description:"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},lA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,order:0,meta:{description:"Any two adjacent cells along the correct path must sum to a prime number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},cA={toolId:d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,order:0,meta:{description:"The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},uA={toolId:d.DIRECTED_PATH_IS_PARITY_LINE,order:0,meta:{description:"the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},dA={toolId:d.DIRECTED_PATH_IS_REGION_SUM_LINE,order:0,meta:{description:"The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},_A={toolId:d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,order:0,meta:{description:"All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},fA={toolId:d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,order:0,meta:{description:"The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},gA={toolId:d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,order:0,meta:{description:"The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_DIRECTED_PATH_CONSTRAINTS]}},hA={toolId:d.CAVE,order:0,meta:{description:"Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},pA={toolId:d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,order:0,meta:{description:"Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},vA={toolId:d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,order:0,meta:{description:"No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},mA={toolId:d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,order:0,meta:{description:"There is exactly one digit that does not appear anywhere in the cave.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},EA={toolId:d.CAVE_WALLS_ARE_EVEN,order:0,meta:{description:"Cave walls must contain even digits.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},CA={toolId:d.CAVE_CELLS_ARE_ODD,order:0,meta:{description:"Cave cells must contain odd digits.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},OA={toolId:d.CAVE_LITS,order:0,meta:{description:"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},IA={toolId:d.RENBAN_CAVES,order:0,meta:{description:"Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CAVE_CONSTRAINTS]}},bA={toolId:d.YIN_YANG_FILLOMINO_PARITY,order:0,meta:{description:"All odd polyominoes are shaded, while all even polyominoes are unshaded.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},wA={toolId:d.GALAXIES,order:0,meta:{description:"Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},yA={toolId:d.EVERY_CELL_BELONGS_TO_A_GALAXY,order:0,meta:{description:"Every cell in the grid belongs to a galaxy.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},LA={toolId:d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,order:0,meta:{description:"No 2x2 area may belong entirely to one galaxy.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},AA={toolId:d.TWO_SYMMETRIC_GALAXIES,order:0,meta:{description:"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},NA={toolId:d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,order:0,meta:{description:"One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_GALAXY_CONSTRAINTS]}},SA={toolId:d.PENTOMINO_TILLING,order:0,meta:{description:"Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},RA={toolId:d.TILLING_NO_EMPTY_CELLS,order:0,meta:{description:"Every cell in the grid belongs to a tile.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},xA={toolId:d.LITS_BLACK_WHITE_STAR_BATTLE,order:0,meta:{description:"Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.UNDETERMINED_REGIONS_CONSTRAINT]}},TA={toolId:d.CONNECT_FOUR,order:0,meta:{description:"The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},DA={toolId:d.CONNECT_FOUR_DRAW,order:0,meta:{description:"The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},kA={toolId:d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,order:0,meta:{description:"Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},GA={toolId:d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,order:0,meta:{description:"Two orthogonally adjacent yellow discs must have a difference of at least 3.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.GLOBAL_CONNECT_FOUR_CONSTRAINTS]}},Fe=[S.LINE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.LINE_TOOL],Sr=[S.LINE_CONSTRAINT,S.LOCAL_CONSTRAINT,S.DOUBLE_ENDED_LINE_CONSTRAINT,S.LINE_TOOL],Os={description:"",usage:xe(),tags:[],categories:Fe},At={type:ge.LINE,allowSelfIntersection:!0},Wt={type:ge.LINE,allowSelfIntersection:!1},MA={inputOptions:Wt,toolId:d.THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Os,description:"Numbers along a thermometer must increase from the bulb end."}},UA={inputOptions:{type:ge.LINE,allowSelfIntersection:!1,defaultValue:"2"},toolId:d.CUSTOM_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Os,description:"Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed."}},FA={inputOptions:Wt,toolId:d.FUZZY_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!1,value:.2},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},shortenHead:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{...Os,description:"Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced."}},$A={inputOptions:Wt,toolId:d.SLOW_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Os,description:"Numbers along a slow thermometer must not decrease from the bulb to the tip(s)."}},PA={inputOptions:Wt,toolId:d.ROW_CYCLE_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:1},stroke:{editable:!1,value:"var(--constraint-color-light-blue)"},fill:{editable:!1,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{...Os,description:"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."}},HA={inputOptions:At,toolId:d.PALINDROME,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!0,value:.2}},meta:{description:"Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.",usage:xe(),tags:[],categories:Fe}},BA={inputOptions:At,toolId:d.RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).",usage:xe(),tags:[],categories:Fe}},WA={inputOptions:At,toolId:d.DOUBLE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.",usage:xe(),tags:[],categories:Fe}},zA={inputOptions:At,toolId:d.RENRENBANBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.",usage:xe(),tags:[],categories:Fe}},YA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.N_CONSECUTIVE_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.25},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).",tags:[],categories:Fe}},jA={inputOptions:At,toolId:d.NABNER_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Orange lines contain no repeated digits and no two digits on the same line can be consecutive.",usage:xe(),tags:[],categories:Fe}},KA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along a green line must have a difference of at least 5 (or X).",usage:xe(),tags:[],categories:Fe}},VA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.DUTCH_WHISPERS,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at least 4.",usage:xe(),tags:[],categories:Fe}},XA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"2"},toolId:d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).",usage:xe(),tags:[],categories:Fe}},qA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).",usage:xe(),tags:[],categories:Fe}},ZA={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.RENBAN_OR_NABNER_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.",usage:xe(),tags:[],categories:Fe}},QA={inputOptions:Wt,toolId:d.OUT_OF_ORDER_CONSECUTIVE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).",usage:xe(),tags:[],categories:Fe}},JA={inputOptions:Wt,toolId:d.INDEX_LINE,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.",usage:xe(),tags:[],categories:Fe}},eN={inputOptions:At,toolId:d.UNIQUE_VALUES_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!1,value:"var(--constraint-color-gray)"},strokeWidth:{editable:!1,value:.1}},meta:{description:"Along a grey line there are no repeated values.",usage:xe(),tags:[],categories:Fe}},tN={inputOptions:At,toolId:d.REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.",usage:xe(),tags:[],categories:Fe}},nN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits on a blue line sum to X.",usage:xe(),tags:[],categories:Fe}},rN={inputOptions:Wt,toolId:d.ARITHMETIC_SEQUENCE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a grey line must increase by the same amount, in the same direction.",usage:xe(),tags:[],categories:Fe}},iN={inputOptions:At,toolId:d.SAME_PARITY_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-pink)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On same parity pink lines, numbers are all odd or all even.",usage:xe(),tags:[],categories:Fe}},oN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:xe(),tags:[],categories:Fe}},sN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).",usage:xe(),tags:[],categories:Fe}},aN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.MODULAR_OR_UNIMODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.",usage:xe(),tags:[],categories:Fe}},lN={inputOptions:At,toolId:d.ODD_EVEN_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a red blue line alternate between odd and even numbers.",usage:xe(),tags:[],categories:Fe}},cN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.HIGH_LOW_OSCILLATOR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-red)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.",usage:xe(),tags:[],categories:Fe}},uN={inputOptions:At,toolId:d.ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.",usage:xe(),tags:[],categories:Fe}},dN={inputOptions:At,toolId:d.ENTROPIC_OR_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).",usage:xe(),tags:[],categories:Fe}},_N={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_COLUMN_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).",usage:xe(),tags:[],categories:Fe}},fN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.INDEXING_ROW_IS_X_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).",usage:xe(),tags:[],categories:Fe}},gN={inputOptions:Wt,toolId:d.REPEATED_DIGITS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).",usage:xe(),tags:[],categories:Fe}},hN={inputOptions:Wt,toolId:d.SUPERFUZZY_ARROW,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.",usage:xe(),tags:[],categories:Fe}},pN={inputOptions:At,toolId:d.AMBIGUOUS_ARROW,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.",usage:xe(),tags:[],categories:Fe}},vN={inputOptions:Wt,toolId:d.HEADLESS_ARROW,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"lime"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The digit on one end of each line is the sum of the other digits on that line.",usage:xe(),tags:[],categories:Fe}},mN={inputOptions:At,toolId:d.XV_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-yellow)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Neighboring digits along a yellow line must sum either to 5 or 10.",usage:xe(),tags:[],categories:Fe}},EN={inputOptions:Wt,toolId:d.ROW_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"teal"},linePathOptions:{shortenHead:{editable:!1,value:.1},shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits along a line sum to the same value for each row the line passes through.",usage:xe(),tags:[],categories:Fe}},CN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.AT_LEAST_X_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Adjacent digits along a gray line must sum to X or more (default X = 10).",usage:xe(),tags:[],categories:Fe}},ON={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.N_CONSECUTIVE_FUZZY_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.",usage:xe(),tags:[],categories:Fe}};d.ADJACENT_CELL_SUM_IS_PRIME_LINE,P.LINE_TOOLS,H.LINE,xe();const IN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:""},toolId:d.PRODUCT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"The product of all the digits on a line is X.",usage:xe(),tags:[],categories:Fe}},bN={inputOptions:At,toolId:d.ADJACENT_MULTIPLES_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"For any two adjacent digits along a gold line, one must be divisible by the other.",usage:xe(),tags:[],categories:Fe}},wN={inputOptions:At,toolId:d.ADJACENT_DIFFERENCES_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gold)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.",usage:xe(),tags:[],categories:Fe}},yN={inputOptions:Wt,toolId:d.LOOK_AND_SAY_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.1},stroke:{editable:!0,value:"var(--constraint-color-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.05},closeLoops:{editable:!1,value:!0}}},meta:{description:"Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.",usage:xe(),tags:[],categories:Fe}},LN={inputOptions:Wt,toolId:d.ZIPPER_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.",usage:xe(),tags:[],categories:Fe}},AN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"10"},toolId:d.SEGMENTED_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.",usage:xe(),tags:[],categories:Fe}},NN={inputOptions:{type:ge.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.SEGMENTED_SUM_AND_RENBAN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-gray)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.",usage:xe(),tags:[],categories:Fe}},SN={inputOptions:{type:ge.LINE,allowSelfIntersection:!1,defaultValue:""},toolId:d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.06},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.05},shortenTail:{editable:!1,value:.05},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).",usage:xe(),tags:[],categories:Fe}};d.THERMO_OR_AVERAGE_ARROW,P.LINE_TOOLS,H.THERMO_WITH_CIRCLE,xe();const RN={inputOptions:Wt,toolId:d.INDEXER_CELLS_REGION_SUBSET_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.15}},meta:{description:"All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.",usage:xe(),tags:[],categories:Fe}},xN={inputOptions:Wt,toolId:d.PEAPODS,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,stroke:{editable:!0,value:"darkseagreen"},strokeWidth:{editable:!0,value:.05},r:{editable:!1,value:.4},opacity:{editable:!1,value:.9},fill:{editable:!1,value:"none"}},meta:{description:"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",usage:xe(),tags:[],categories:Fe}},TN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"5"},toolId:d.YIN_YANG_SHADED_WHISPERS_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).",usage:xe(),tags:[],categories:Fe}},DN={inputOptions:At,toolId:d.YIN_YANG_UNSHADED_ENTROPIC_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).",usage:xe(),tags:[],categories:Fe}},kN={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"3"},toolId:d.YIN_YANG_UNSHADED_MODULAR_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-dark-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).",usage:xe(),tags:[],categories:Fe}},GN={inputOptions:At,toolId:d.YIN_YANG_REGION_SUM_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.",usage:xe(),tags:[],categories:Fe}},MN={inputOptions:Wt,toolId:d.YIN_YANG_INDEXING_LINE_COLORING,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_POLYGON,strokeWidth:{editable:!1,value:.1},n:{editable:!1,value:4},r:{editable:!1,value:.3},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.1},bezierRounding:{editable:!1,value:.1},closeLoops:{editable:!1,value:!1}}},meta:{description:"On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.",usage:xe(),tags:[],categories:Fe}},UN={inputOptions:Wt,toolId:d.GOLDILOCKS_ZONE_REGION_SUM,order:P.LINE_TOOLS,shape:{type:H.LINE,strokeWidth:{editable:!0,value:.15},stroke:{editable:!0,value:"var(--constraint-color-light-blue)"},linePathOptions:{shortenHead:{editable:!1,value:.15},shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.",usage:xe(),tags:[],categories:Fe}},FN={inputOptions:At,toolId:d.BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",usage:xe(),tags:[],categories:Sr}},$N={inputOptions:{type:ge.LINE,allowSelfIntersection:!0,defaultValue:"4"},toolId:d.LOCKOUT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-purple)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.",usage:xe(),tags:[],categories:Sr}},PN={inputOptions:At,toolId:d.TIGHTROPE_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"black"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.",usage:xe(),tags:[],categories:Sr}},HN={inputOptions:At,toolId:d.PARITY_COUNT_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.",usage:xe(),tags:[],categories:Sr}},BN={inputOptions:At,toolId:d.DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-dark-gray)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.",tags:[],usage:xe(),categories:Sr}},WN={inputOptions:At,toolId:d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_POLYGON_ENDS,n:{editable:!1,value:4},r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-orange)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.",usage:xe(),tags:[],categories:Sr}},zN={inputOptions:At,toolId:d.SPLIT_PEAS,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"lightgreen"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.",usage:xe(),tags:[],categories:Sr}},YN={inputOptions:Wt,toolId:d.DOUBLERS_THERMOMETER,order:P.LINE_TOOLS,shape:{type:H.THERMO_WITH_CIRCLE,strokeWidth:{editable:!1,value:.15},r:{editable:!1,value:.25},opacity:{editable:!1,value:.9},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"var(--constraint-color-gray)"},linePathOptions:{shortenTail:{editable:!1,value:.15},bezierRounding:{editable:!1,value:.15},closeLoops:{editable:!1,value:!0}}},meta:{description:"Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.",usage:xe(),tags:[],categories:Fe}},jN={inputOptions:At,toolId:d.DOUBLERS_BETWEEN_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",usage:xe(),tags:[],categories:Sr}},KN={inputOptions:At,toolId:d.DOUBLERS_DOUBLE_ARROW_LINE,order:P.LINE_TOOLS,shape:{type:H.LINE_WITH_CIRCLE_ENDS,r:{editable:!1,value:.35},strokeWidth:{editable:!0,value:.04},stroke:{editable:!0,value:"var(--constraint-color-green)"},linePathOptions:{bezierRounding:{editable:!1,value:.15}}},meta:{description:"The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.",usage:xe(),tags:[],categories:Sr}},We=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_SHAPE_TOOL],mo=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_COLOR_TOOL],Qa={type:H.SQUARE,strokeWidth:{editable:!0,value:.03},stroke:{editable:!0,value:"black"},r:{editable:!0,value:.35},fill:{editable:!0,value:"none"}},Si={type:H.CIRCLE,r:{editable:!0,value:.35},strokeWidth:{editable:!0,value:.02},stroke:{editable:!0,value:"black"},fill:{editable:!0,value:"none"}};function Ja(t,e=3){return Ni(t,{maxLength:e,allowSymbolicVariables:!0,allowInequalities:!0,allowNegatives:!0})}function VN(t){return t===""||t==="1"||t==="2"||t==="3"}function Is(t,e,n){return Nr(t,e,n)}const Ke={type:ge.SINGLE_CELL},ni={type:ge.SINGLE_CELL,valueUpdater:(t,e)=>Is(t,e,Ja),defaultValue:""},Hh={type:ge.SINGLE_CELL_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},XN={inputOptions:Ke,toolId:d.ODD,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is odd.",tags:[],categories:We}},qN={inputOptions:Ke,toolId:d.EVEN,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.3},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Cell value is even.",tags:[],categories:We}},ZN={inputOptions:Ke,toolId:d.MINIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is greater than orthogonally adjacent cells.",tags:[],categories:[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},QN={inputOptions:Ke,toolId:d.MAXIMUM,order:P.CELL_SHAPE_TOOL,meta:{description:"Cell value is lesser than orthogonally adjacent cells.",tags:[],categories:[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}};d.PRIME_CELL,P.CELL_COLOR_TOOL;const JN={inputOptions:Ke,toolId:d.ODD_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},eS={inputOptions:Ke,toolId:d.EVEN_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).",tags:[],categories:We}},tS={inputOptions:Ke,toolId:d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"blue"},r:{editable:!1,value:.3},fill:{editable:!1,value:"none"}},meta:{description:"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",tags:[],categories:We}},nS={inputOptions:Ke,toolId:d.WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},rS={inputOptions:Ke,toolId:d.NOT_WATCHTOWER,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',tags:[],categories:We}},iS={inputOptions:ni,toolId:d.FARSIGHT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.",tags:[],categories:We}},oS={inputOptions:{type:ge.SINGLE_CELL,valueUpdater:(t,e)=>Is(t,e,Ja),defaultValue:"9"},toolId:d.RADAR,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",tags:[],categories:We}},sS={inputOptions:Ke,toolId:d.ORTHOGONAL_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"var(--constraint-color-blue)"},fill:{editable:!1,value:"rgb(160, 160, 160)"}},meta:{description:"Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.",tags:[],categories:We}},aS={inputOptions:Ke,toolId:d.INDEXING_COLUMN,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:mo}},lS={inputOptions:Ke,toolId:d.INDEXING_ROW,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"},opacity:{editable:!1,value:.7}},meta:{description:"Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.",tags:[],categories:mo}},cS={inputOptions:Ke,toolId:d.LOW_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(40, 40, 155, 0.7)"}},meta:{description:"Cells colored blue are a low digit (<5).",tags:[],categories:mo}},uS={inputOptions:Ke,toolId:d.HIGH_DIGIT,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(155, 40, 40, 0.7)"}},meta:{description:"Cells colored red are a high digit (>5).",tags:[],categories:mo}},dS={inputOptions:Ke,toolId:d.FRIENDLY_CELL,order:P.CELL_COLOR_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:0},fill:{editable:!1,value:"rgba(64, 166, 64, 0.7)"}},meta:{description:"Cells marked green are friendly cells, i.e., they contain their row, column or box number.",tags:[],categories:mo}},_S={inputOptions:Ke,toolId:d.DIAGONALLY_ADJACENT_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-gray)"},fill:{editable:!1,value:"none"}},meta:{description:"Cells with circles contain the sum of all diagonally adjacent digits.",tags:[],categories:We}},fS={inputOptions:Ke,toolId:d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,r:{editable:!1,value:.35},strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"var(--constraint-color-green)"},fill:{editable:!1,value:"none"}},meta:{description:"For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.",tags:[],categories:We}},gS={inputOptions:Ke,toolId:d.SANDWICH_ROW_COL_COUNT,order:P.CELL_SHAPE_TOOL,shape:Si,meta:{description:"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",tags:[],categories:We}},hS={inputOptions:Ke,toolId:d.COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.",tags:[],categories:We}},pS={inputOptions:Ke,toolId:d.REVERSE_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A number appearing in a circle indicates how many times that number appears *outside* of circles.",tags:[],categories:We}},vS={inputOptions:{type:ge.SINGLE_CELL,valueUpdater:(t,e)=>Is(t,e,VN),defaultValue:""},toolId:d.COLORED_COUNTING_CIRCLES,order:P.CELL_SHAPE_TOOL,shape:Si,meta:{description:`Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,tags:[],categories:We}},mS={inputOptions:Ke,toolId:d.UNIQUE_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"lightsalmon"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Digits do not repeat on cells with hexagons on them.",tags:[],categories:We}},ES={inputOptions:Ke,toolId:d.SEEN_EVEN_COUNT,order:P.CELL_SHAPE_TOOL,shape:Qa,meta:{description:"Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},CS={inputOptions:{type:ge.SINGLE_CELL,valueUpdater:(t,e)=>Is(t,e,Ja),defaultValue:"5"},toolId:d.CELL_KNIGHT_WHISPERS,order:P.CELL_SHAPE_TOOL,shape:Si,meta:{description:"Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.",tags:[],categories:We}},OS={inputOptions:Ke,toolId:d.SEEN_ODD_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.",tags:[],categories:We}},IS={inputOptions:Ke,toolId:d.YIN_YANG_MINESWEEPER,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",tags:[],categories:We}},bS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_UNSHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},wS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.",tags:[],categories:We}},yS={inputOptions:Ke,toolId:d.YIN_YANG_SEEN_SAME_SHADE_CELLS,order:P.CELL_SHAPE_TOOL,shape:Qa,meta:{description:"A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.",tags:[],categories:We}},LS={inputOptions:Ke,toolId:d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.SQUARE,strokeWidth:{editable:!1,value:.04},angle:{editable:!1,value:45},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.25},fill:{editable:!1,value:"none"}},meta:{description:"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",tags:[],categories:We}},AS={inputOptions:Ke,toolId:d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:8},strokeWidth:{editable:!1,value:.03},angle:{editable:!1,value:22.5},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.",tags:[],categories:We}},NS={inputOptions:Ke,toolId:d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.",tags:[],categories:We}},SS={inputOptions:Ke,toolId:d.SEEN_REGION_BORDERS_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.",tags:[],categories:We}},RS={inputOptions:Ke,toolId:d.NURIMISAKI_UNSHADED_ENDPOINTS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",tags:[],categories:We}},xS={inputOptions:Ke,toolId:d.SASHIGANE_BEND_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"gray"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).",tags:[],categories:We}},TS={inputOptions:Hh,toolId:d.SASHIGANE_ARROW_POINTS_TO_BEND,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).",tags:[],categories:[S.SINGLE_CELL_ARROW_TOOL,S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},DS={inputOptions:Hh,toolId:d.THERMO_SIGHTLINE_LOOP_ARROW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!1,value:.05},stroke:{editable:!0,value:"gray"}},meta:{description:"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",tags:[],categories:[S.SINGLE_CELL_ARROW_TOOL,S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT]}},kS={inputOptions:ni,toolId:d.SASHIGANE_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",tags:[],categories:We}},GS={inputOptions:Ke,toolId:d.CELL_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Qa,meta:{description:"A black square indicates the cell is on the loop.",tags:[],categories:We}},MS={inputOptions:Ke,toolId:d.CELL_NOT_ON_THE_LOOP,order:P.CELL_SHAPE_TOOL,shape:Si,meta:{description:"A black circle indicates the cell is not on the loop.",tags:[],categories:We}},US={inputOptions:Ke,toolId:d.COUNT_LOOP_NEIGHBOUR_CELLS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},stroke:{editable:!1,value:"orange"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.",tags:[],categories:We}},FS={inputOptions:ni,toolId:d.TWILIGHT_CAVE_FILLOMINO_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:"If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).",tags:[],categories:We}},$S={inputOptions:Ke,toolId:d.CAVE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},r:{editable:!1,value:.35},stroke:{editable:!1,value:"var(--constraint-color-light-blue"},fill:{editable:!1,value:"none"}},meta:{description:"Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.",tags:[],categories:We}},PS={inputOptions:ni,toolId:d.CHAOS_CONSTRUCTION_CHESS_SUMS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:`A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,tags:[],categories:We}},HS={inputOptions:ni,toolId:d.CHAOS_CONSTRUCTION_ARROW_KNOTS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.02},r:{editable:!1,value:.4},stroke:{editable:!1,value:"black"},fill:{editable:!1,value:"none"}},meta:{description:`From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,tags:[],categories:We}},BS={inputOptions:ni,toolId:d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,order:P.CELL_SHAPE_TOOL,shape:Si,meta:{description:"The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.",tags:[],categories:We}},WS={inputOptions:Ke,toolId:d.DIRECTED_PATH_START,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:3},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"green"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A green triangle marks the start of a directed path.",tags:[],categories:We}},zS={inputOptions:Ke,toolId:d.DIRECTED_PATH_END,order:P.CELL_SHAPE_TOOL,shape:{type:H.POLYGON,n:{editable:!1,value:6},strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"red"},r:{editable:!1,value:.4},fill:{editable:!1,value:"none"}},meta:{description:"A red hexagon marks the end of a directed path.",tags:[],categories:We}},YS={inputOptions:ni,toolId:d.TELEPORT,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:.04},stroke:{editable:!1,value:"yellow"},r:{editable:!1,value:.35},fill:{editable:!1,value:"none"}},meta:{description:"Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.",tags:[],categories:We}},jS={inputOptions:ni,toolId:d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:'Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.',tags:[],categories:We}},KS={inputOptions:Ke,toolId:d.NURIKABE_SEEN_WATERWAY_CELLS,order:P.CELL_SHAPE_TOOL,shape:{...Qa,strokeDasharray:{editable:!1,value:.08}},meta:{description:"Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).",tags:[],categories:We}},VS={inputOptions:Ke,toolId:d.NURIKABE_ISLAND_SIZE_CELL,order:P.CELL_SHAPE_TOOL,shape:Si,meta:{description:"Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.",tags:[],categories:We}},XS={inputOptions:Ke,toolId:d.CONNECT_FOUR_YELLOW,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"yellow"}},meta:{description:"A yellow circle represents a yellow disc in connect four.",tags:[],categories:We}},qS={inputOptions:Ke,toolId:d.CONENCT_FOUR_RED,order:P.CELL_SHAPE_TOOL,shape:{type:H.CIRCLE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},r:{editable:!1,value:.35},fill:{editable:!1,value:"red"}},meta:{description:"A red circle represents a red disc in connect four.",tags:[],categories:We}},ZS={inputOptions:Ke,toolId:d.SHIKAKU_REGION_SIZE,order:P.CELL_SHAPE_TOOL,shape:Si,meta:{description:"Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.",tags:[],categories:We}},QS={inputOptions:{type:ge.SINGLE_CELL,valueUpdater:(t,e)=>Is(t,e,Ja),defaultValue:"?"},toolId:d.SHIKAKU_REGION_SUM,order:P.CELL_SHAPE_TOOL,shape:{type:H.CAGE,strokeWidth:{editable:!1,value:0},stroke:{editable:!1,value:"none"},fill:{editable:!1,value:"none"}},meta:{description:"Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.",tags:[],categories:We}},nr=[S.SINGLE_CELL_CONSTRAINT,S.LOCAL_CONSTRAINT,S.SINGLE_CELL_MULTIARROW_TOOL],Rr={type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"black"}},rr={type:ge.SINGLE_CELL_MULTI_ARROW,cornerOrEdge:Et.CORNER_OR_EDGE},JS={inputOptions:rr,toolId:d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",tags:[],categories:nr}},eR={inputOptions:rr,toolId:d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.",tags:[],categories:nr}},tR={inputOptions:rr,toolId:d.LOOP_CELL_COUNT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).",tags:[],categories:nr}},nR={inputOptions:rr,toolId:d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.",tags:[],categories:nr}},rR={inputOptions:rr,toolId:d.YIN_YANG_COUNT_SHADED_CELLS,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"Values in cells with arrows give the number of shaded cells in the indicated direction.",tags:[],categories:nr}},iR={inputOptions:rr,toolId:d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.",tags:[],categories:nr}},oR={inputOptions:rr,toolId:d.COLD_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-blue)"}},meta:{description:"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",tags:[],categories:nr}},sR={inputOptions:rr,toolId:d.HOT_ARROWS,order:P.CELL_SHAPE_TOOL,shape:{type:H.CELL_ARROW,strokeWidth:{editable:!0,value:.03,lb:.01,ub:.2,step:.01},stroke:{editable:!0,value:"var(--constraint-color-orange)"}},meta:{description:"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",tags:[],categories:nr}},aR={inputOptions:rr,toolId:d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.",tags:[],categories:nr}},lR={inputOptions:rr,toolId:d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",tags:[],categories:nr}},cR={inputOptions:rr,toolId:d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,order:P.CELL_SHAPE_TOOL,shape:Rr,meta:{description:"If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.",tags:[],categories:nr}},uR={toolId:d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,order:0,meta:{description:"Orthogonally adjacent cells may not sum to X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}},dR={toolId:d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,order:0,meta:{description:"Diagonal cell pairs (sharing a corner) must have a difference of at least X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}},_R={toolId:d.FORBIDDEN_KNIGHT_SUM,order:0,meta:{description:"Digits a knight's move apart cannot sum to X.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}},fR={toolId:d.LITS_MAX_TETROMINO_SUM,order:0,meta:{description:"Each tetromino must contain digits summing to less than 'X'.",tags:[],categories:[S.LOCAL_CONSTRAINT,S.VALUED_GLOBAL_CONSTRAINT]}};d.VAMPIRE_AND_PREY,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.MARKED_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;const gR={toolId:d.DOUBLERS,order:0,meta:{description:"The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},hR={toolId:d.NEGATORS,order:0,meta:{description:"The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}};d.HOT_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.COLD_CELLS,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;d.DECREMENT_FOUNTAIN,S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT;const pR={toolId:d.NEXUS,order:0,meta:{description:"One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},vR={toolId:d.INDEXER_CELLS,order:0,meta:{description:"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",tags:[],categories:[S.GLOBAL_CONSTRAINT,S.VALUE_MODIFIER_CONSTRAINT]}},mR=[S.CORNER_LINE_CONSTRAINT,S.CORNER_LINE_TOOL,S.LOCAL_CONSTRAINT],ER={inputOptions:{type:ge.CORNER_LINE},toolId:d.MAZE_WALL,order:P.EDGE_TOOLS,shape:{type:H.MAZE_WALL,r:{editable:!0,value:.13},strokeWidth:{editable:!0,value:.12},opacity:{editable:!0,value:1},stroke:{editable:!0,value:"darkblue"},fill:{editable:!0,value:"darkblue"},linePathOptions:{shortenHead:{editable:!1,value:0},shortenTail:{editable:!1,value:0},bezierRounding:{editable:!1,value:0},closeLoops:{editable:!1,value:!0}}},meta:{description:"Maze wall for directed paths.",tags:[],categories:mR}},xt={[d.GIVEN]:Gw,[d.DIGIT]:Mw,[d.REGIONS]:Uw,[d.OUTSIDE]:Hw,[d.CORNER_PM]:Fw,[d.CENTER_PM]:$w,[d.HIGHLIGHTS]:Pw,[d.FOG]:Bw,[d.PEN_TOOL]:Ww,[d.SUDOKU_RULES_DO_NOT_APPLY]:nL,[d.LEAVE_EMPTY_CELLS_EMPTY]:rL,[d.LITS]:sL,[d.HEXED_SUDOKU]:iL,[d.FILLOMINO]:oL,[d.ANTIKNIGHT]:aL,[d.ANTI_LONG_KNIGHT]:cL,[d.ANTIKING]:uL,[d.ANTI_GIRAFFE]:lL,[d.DISJOINT_GROUPS]:dL,[d.TANGO]:_L,[d.NONCONSECUTIVE]:fL,[d.NONRATIO]:gL,[d.ANTI_ENTROPY]:IL,[d.GLOBAL_INDEXING_COLUMN]:bL,[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]:wL,[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:OL,[d.NEGATIVE_DIAGONAL]:hL,[d.POSITIVE_DIAGONAL]:pL,[d.NEGATIVE_ANTIDIAGONAL]:vL,[d.POSITIVE_ANTIDIAGONAL]:mL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:EL,[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:CL,[d.ALL_RATIOS_GIVEN]:yL,[d.ALL_DIFFERENCES_GIVEN]:LL,[d.ALL_X_GIVEN]:AL,[d.ALL_V_GIVEN]:NL,[d.ALL_XV_GIVEN]:SL,[d.ALL_RADARS_GIVEN]:RL,[d.ALL_XY_DIFFERENCES_GIVEN]:xL,[d.ALL_INDEXING_COLUMN_GIVEN]:TL,[d.ALL_INDEXING_ROW_GIVEN]:DL,[d.ALL_YIN_YANG_KROPKI_GIVEN]:kL,[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN]:GL,[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN]:UL,[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE]:FL,[d.CAVE_CELLS_ARE_ODD]:CA,[d.CAVE_WALLS_ARE_EVEN]:EA,[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED]:vA,[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE]:mA,[d.DOUBLERS]:gR,[d.NEGATORS]:hR,[d.NEXUS]:pR,[d.INDEXER_CELLS]:vR,[d.CHAOS_CONSTRUCTION]:$L,[d.NUMBERED_CHAOS_CONSTRUCTION]:PL,[d.CHAOS_CONSTRUCTION_SUGURU]:HL,[d.YIN_YANG]:BL,[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED]:WL,[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS]:zL,[d.NURIMISAKI]:YL,[d.NURIKABE]:jL,[d.NURIKABE_NO_REPEATS_IN_ISLANDS]:KL,[d.TWO_CONTIGUOUS_REGIONS]:VL,[d.SASHIGANE]:XL,[d.NORINORI]:qL,[d.SHIKAKU]:ZL,[d.SHIKAKU_NO_REPEATS_IN_REGION]:QL,[d.GOLDILOCKS_ZONE]:eA,[d.CELL_CENTER_LOOP_NO_TOUCHING]:tA,[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]:nA,[d.NOT_LOOP_SIZED_REGIONS]:oA,[d.MODULAR_LOOP]:sA,[d.CAVE]:hA,[d.CAVE_LITS]:OA,[d.RENBAN_CAVES]:IA,[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]:pA,[d.NURIMISAKI_PATH_GERMAN_WHISPERS]:ML,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES]:rA,[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS]:iA,[d.GALAXIES]:wA,[d.TWO_SYMMETRIC_GALAXIES]:AA,[d.EVERY_CELL_BELONGS_TO_A_GALAXY]:yA,[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY]:LA,[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS]:NA,[d.PENTOMINO_TILLING]:SA,[d.TILLING_NO_EMPTY_CELLS]:RA,[d.LITS_BLACK_WHITE_STAR_BATTLE]:xA,[d.NORINORI_STAR_BATTLE]:JL,[d.MAZE_DIRECTED_PATH]:aA,[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME]:lA,[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME]:_A,[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS]:cA,[d.DIRECTED_PATH_IS_REGION_SUM_LINE]:dA,[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]:fA,[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]:gA,[d.DIRECTED_PATH_IS_PARITY_LINE]:uA,[d.CONNECT_FOUR]:TA,[d.CONNECT_FOUR_DRAW]:DA,[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY]:kA,[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3]:GA,[d.ODD]:XN,[d.EVEN]:qN,[d.MINIMUM]:ZN,[d.MAXIMUM]:QN,[d.ODD_MINESWEEPER]:JN,[d.EVEN_MINESWEEPER]:eS,[d.WATCHTOWER]:nS,[d.NOT_WATCHTOWER]:rS,[d.FARSIGHT]:iS,[d.RADAR]:oS,[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]:tS,[d.ORTHOGONAL_SUM]:sS,[d.DIAGONALLY_ADJACENT_SUM]:_S,[d.INDEXING_COLUMN]:aS,[d.INDEXING_ROW]:lS,[d.LOW_DIGIT]:cS,[d.HIGH_DIGIT]:uS,[d.FRIENDLY_CELL]:dS,[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:fS,[d.SANDWICH_ROW_COL_COUNT]:gS,[d.COUNTING_CIRCLES]:hS,[d.REVERSE_COUNTING_CIRCLES]:pS,[d.COLORED_COUNTING_CIRCLES]:vS,[d.UNIQUE_CELLS]:mS,[d.SEEN_EVEN_COUNT]:ES,[d.SEEN_ODD_COUNT]:OS,[d.CELL_KNIGHT_WHISPERS]:CS,[d.YIN_YANG_MINESWEEPER]:IS,[d.YIN_YANG_SEEN_UNSHADED_CELLS]:bS,[d.YIN_YANG_SEEN_SHADED_CELLS]:wS,[d.YIN_YANG_SEEN_SAME_SHADE_CELLS]:yS,[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]:LS,[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT]:AS,[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:NS,[d.SEEN_REGION_BORDERS_COUNT]:SS,[d.NURIMISAKI_UNSHADED_ENDPOINTS]:RS,[d.SASHIGANE_BEND_REGION_COUNT]:xS,[d.SASHIGANE_REGION_SUM]:kS,[d.CELL_ON_THE_LOOP]:GS,[d.CELL_NOT_ON_THE_LOOP]:MS,[d.COUNT_LOOP_NEIGHBOUR_CELLS]:US,[d.CAVE_CLUE]:$S,[d.TWILIGHT_CAVE_FILLOMINO_CLUE]:FS,[d.YIN_YANG_FILLOMINO_PARITY]:bA,[d.SHIKAKU_REGION_SIZE]:ZS,[d.SHIKAKU_REGION_SUM]:QS,[d.CHAOS_CONSTRUCTION_CHESS_SUMS]:PS,[d.CHAOS_CONSTRUCTION_ARROW_KNOTS]:HS,[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]:BS,[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]:jS,[d.DIRECTED_PATH_START]:WS,[d.DIRECTED_PATH_END]:zS,[d.TELEPORT]:YS,[d.CONNECT_FOUR_YELLOW]:XS,[d.CONENCT_FOUR_RED]:qS,[d.SASHIGANE_ARROW_POINTS_TO_BEND]:TS,[d.THERMO_SIGHTLINE_LOOP_ARROW]:DS,[d.HOT_ARROWS]:sR,[d.COLD_ARROWS]:oR,[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:iR,[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]:nR,[d.YIN_YANG_COUNT_SHADED_CELLS]:rR,[d.LOOP_CELL_COUNT_ARROWS]:tR,[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:eR,[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]:JS,[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]:aR,[d.NURIKABE_SEEN_WATERWAY_CELLS]:KS,[d.NURIKABE_ISLAND_SIZE_CELL]:VS,[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]:lR,[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]:cR,[d.DIFFERENCE]:sy,[d.RATIO]:oy,[d.XV]:ly,[d.EDGE_INEQUALITY]:cy,[d.EDGE_SUM]:ay,[d.EDGE_PRODUCT]:uy,[d.EDGE_MODULO]:dy,[d.EDGE_FACTOR]:_y,[d.XY_DIFFERENCES]:fy,[d.YIN_YANG_WHITE_KROPKI]:gy,[d.YIN_YANG_KROPKI]:hy,[d.FILLOMINO_REGION_BORDER]:py,[d.UNKNOWN_REGION_BORDER]:vy,[d.CHAOS_CONSTRUCTION_SUGURU_BORDER]:my,[d.EDGE_CAVE_ONE_OF_EACH]:Ey,[d.ONE_WAY_DOOR]:Cy,[d.QUADRUPLE]:Xw,[d.CORNER_SUM]:qw,[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]:Zw,[d.CORNER_EVEN_COUNT]:Qw,[d.PRODUCT_SQUARE]:Jw,[d.EQUAL_DIAGONAL_DIFFERENCES]:ey,[d.THERMOMETER]:MA,[d.FUZZY_THERMOMETER]:FA,[d.SLOW_THERMOMETER]:$A,[d.CUSTOM_THERMOMETER]:UA,[d.ROW_CYCLE_THERMOMETER]:PA,[d.PALINDROME]:HA,[d.RENBAN_LINE]:BA,[d.DOUBLE_RENBAN_LINE]:WA,[d.RENRENBANBAN_LINE]:zA,[d.N_CONSECUTIVE_RENBAN_LINE]:YA,[d.NABNER_LINE]:jA,[d.WHISPERS_LINE]:KA,[d.DUTCH_WHISPERS]:VA,[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE]:XA,[d.RENBAN_OR_WHISPERS_LINE]:qA,[d.RENBAN_OR_NABNER_LINE]:ZA,[d.OUT_OF_ORDER_CONSECUTIVE_LINE]:QA,[d.INDEX_LINE]:JA,[d.UNIQUE_VALUES_LINE]:eN,[d.REPEATED_DIGITS_LINE]:gN,[d.REGION_SUM_LINE]:tN,[d.SUM_LINE]:nN,[d.XV_LINE]:mN,[d.ROW_SUM_LINE]:EN,[d.AT_LEAST_X_LINE]:CN,[d.SUPERFUZZY_ARROW]:hN,[d.AMBIGUOUS_ARROW]:pN,[d.HEADLESS_ARROW]:vN,[d.N_CONSECUTIVE_FUZZY_SUM_LINE]:ON,[d.PRODUCT_LINE]:IN,[d.ADJACENT_MULTIPLES_LINE]:bN,[d.ADJACENT_DIFFERENCES_COUNT_LINE]:wN,[d.LOOK_AND_SAY_LINE]:yN,[d.ARITHMETIC_SEQUENCE_LINE]:rN,[d.ZIPPER_LINE]:LN,[d.SEGMENTED_SUM_LINE]:AN,[d.SEGMENTED_SUM_AND_RENBAN_LINE]:NN,[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:SN,[d.SAME_PARITY_LINE]:iN,[d.MODULAR_LINE]:oN,[d.UNIMODULAR_LINE]:sN,[d.MODULAR_OR_UNIMODULAR_LINE]:aN,[d.ODD_EVEN_OSCILLATOR_LINE]:lN,[d.HIGH_LOW_OSCILLATOR_LINE]:cN,[d.ENTROPIC_LINE]:uN,[d.ENTROPIC_OR_MODULAR_LINE]:dN,[d.INDEXING_COLUMN_IS_X_LINE]:_N,[d.INDEXING_ROW_IS_X_LINE]:fN,[d.INDEXER_CELLS_REGION_SUBSET_LINE]:RN,[d.PEAPODS]:xN,[d.YIN_YANG_INDEXING_LINE_COLORING]:MN,[d.YIN_YANG_SHADED_WHISPERS_LINE]:TN,[d.YIN_YANG_UNSHADED_ENTROPIC_LINE]:DN,[d.YIN_YANG_UNSHADED_MODULAR_LINE]:kN,[d.YIN_YANG_REGION_SUM_LINE]:GN,[d.GOLDILOCKS_ZONE_REGION_SUM]:UN,[d.BETWEEN_LINE]:FN,[d.LOCKOUT_LINE]:$N,[d.PARITY_COUNT_LINE]:HN,[d.TIGHTROPE_LINE]:PN,[d.DOUBLE_ARROW_LINE]:BN,[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]:WN,[d.SPLIT_PEAS]:zN,[d.DOUBLERS_THERMOMETER]:YN,[d.DOUBLERS_BETWEEN_LINE]:jN,[d.DOUBLERS_DOUBLE_ARROW_LINE]:KN,[d.ARROW]:nw,[d.CHAOS_CONSTRUCTION_ARROW]:ow,[d.AVERAGE_ARROW]:rw,[d.BULBOUS_ARROW]:iw,[d.MAZE_WALL]:ER,[d.KILLER_CAGE]:Cw,[d.UNIQUE_DIGITS_CAGE]:Ow,[d.INVERTED_KILLER_CAGE]:Iw,[d.SUM_CAGE]:bw,[d.SUM_CAGE_LOOK_AND_SAY]:ww,[d.PARITY_BALANCE_CAGE]:yw,[d.DIVISIBLE_KILLER_CAGE]:Lw,[d.SPOTLIGHT_CAGE]:Aw,[d.PUTTERIA_CAGE]:Nw,[d.MULTISET_CAGE]:Sw,[d.VAULTED_CAGE]:Rw,[d.YIN_YANG_ANTITHESIS_KILLER_CAGE]:xw,[d.YIN_YANG_BREAKEVEN_KILLER_CAGE]:Tw,[d.DOUBLERS_KILLER_CAGE]:Dw,[d.NEGATORS_KILLER_CAGE]:kw,[d.CLONE_REGION]:Kw,[d.SANDWICH_SUM]:Ny,[d.MYSTERY_SANDWICH_SUM]:Sy,[d.X_SUM]:xy,[d.SHORTSIGHTED_X_SUM]:Ty,[d.SHIFTED_X_SUM]:Dy,[d.BROKEN_X_SUM]:ky,[d.X_SUM_SKYSCRAPERS]:Gy,[d.BATTLEFIELD]:My,[d.SKYSCRAPERS]:Uy,[d.X_INDEX]:Fy,[d.SANDWICH_SUM_XOR_X_SUM]:Ry,[d.RISING_STREAK]:$y,[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]:Py,[d.OUTSIDE_CONSECUTIVE_SUM]:Hy,[d.LOOPWICHES]:By,[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]:Wy,[d.PENTOMINO_BORDER_COUNT]:zy,[d.LITTLE_KILLER_SUM]:Iy,[d.LITTLE_KILLER_PRODUCT]:by,[d.LITTLE_KILLER_LOOK_AND_SAY]:wy,[d.LITTLE_KILLER_REGION_SUM_PRODUCT]:Ly,[d.X_OMIT_LITTLE_KILLER_SUM]:yy,[d.NEGATORS_LITTLE_KILLER_SUM]:Ay,[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]:Yw,[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]:jw,[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]:uR,[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]:dR,[d.FORBIDDEN_KNIGHT_SUM]:_R,[d.LITS_MAX_TETROMINO_SUM]:fR,[d.COSMETIC_CELL_SHAPE]:Yy,[d.COSMETIC_CELL_ARROW]:jy,[d.COSMETIC_CELL_MULTI_ARROW]:Ky,[d.COSMETIC_EDGE]:Vy,[d.COSMETIC_CORNER]:Xy,[d.COSMETIC_LINE]:qy,[d.COSMETIC_LINE_WITH_CIRCLE_ENDS]:Zy,[d.COSMETIC_LINE_WITH_POLYGON_ENDS]:Qy,[d.COSMETIC_ARROW]:eL,[d.COSMETIC_CAGE]:Jy,[d.COSMETIC_OUTSIDE_DIRECTION]:tL};class bi extends Map{constructor(){super()}setConstraint(e,n){return kb(e)&&this.set(e,n),this}removeConstraint(e){return this.has(e)&&this.delete(e),this}toJSON(){const e={};for(const[n,r]of this.entries())r&&(e[n]=r);return e}copy(){const e=new bi;for(const[n,r]of this.entries())e.set(n,r);return e}static fromJson(e){const n=new bi;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=Nh(r);o!==void 0&&Sh(o,Hu)&&typeof i=="boolean"&&i&&n.setConstraint(o,i)}return n}}var Ue=(t=>(t.N="N",t.S="S",t.E="E",t.W="W",t.NE="NE",t.NW="NW",t.SE="SE",t.SW="SW",t))(Ue||{});function Bh(t){if(!(t in Ue))throw Error(" not a key in DIRECTION");return Ue[t]}function Xe(t,e){return t.r===e.r&&t.c===e.c}function Wh(t,e){return{r:t.r+e.r,c:t.c+e.c}}function CR(t,e){return{r:t.r*e,c:t.c*e}}function OR(t,e){return t.c>=0&&t.c<=e.nCols&&t.r>=0&&t.r<=e.nRows}function bs(t,e){return Math.abs(t.c-e.c)<=1&&Math.abs(t.r-e.r)<=1&&!Xe(t,e)}function IR(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return r<=1&&n<=1&&n!==r}function Da(t){t.sort((e,n)=>e.c-n.c).sort((e,n)=>e.r-n.r)}function Jt(t,e){return t.c>=0&&t.c<e.nCols&&t.r>=0&&t.r<e.nRows}function el(t){const e=Math.floor(t.y),n=Math.floor(t.x);return{r:e,c:n}}function bR(t){const e=[];return e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e}function nd(t){const e=[];return e.push({r:t.r-1,c:t.c-1}),e.push({r:t.r-1,c:t.c}),e.push({r:t.r,c:t.c-1}),e.push({r:t.r,c:t.c}),e}function wR(t){const e=[];return e.push({r:t.r+.5,c:t.c+1}),e.push({r:t.r+1,c:t.c+.5}),e.push({r:t.r+.5,c:t.c}),e.push({r:t.r,c:t.c+.5}),e}const yR=new Map([[6,Ue.N],[2,Ue.S],[0,Ue.E],[4,Ue.W],[7,Ue.NE],[5,Ue.NW],[1,Ue.SE],[3,Ue.SW]]);function rd(t){t=t%8;const e=yR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}const LR=new Map([[Ue.N,{r:-1,c:0}],[Ue.S,{r:1,c:0}],[Ue.E,{r:0,c:1}],[Ue.W,{r:0,c:-1}],[Ue.NE,{r:-1,c:1}],[Ue.NW,{r:-1,c:-1}],[Ue.SE,{r:1,c:1}],[Ue.SW,{r:1,c:-1}]]);function tl(t){const e=LR.get(t);if(e===void 0)throw Error("Direction is not valid");return e}function zh(t,e){const n=tl(e);return Wh(t,n)}function id(t){const e=[];return t.r%1===0&&t.c%1===.5?(e.push({r:t.r-1,c:Math.floor(t.c)}),e.push({r:t.r,c:Math.floor(t.c)})):t.r%1===.5&&t.c%1===0&&(e.push({r:Math.floor(t.r),c:t.c-1}),e.push({r:Math.floor(t.r),c:t.c})),e}function Yh(t,e,n=!1){const r=t.some(o=>Xe(o,e)),i=n?t.some(o=>bs(o,e)):t.some(o=>IR(o,e));if(!r&&i){const o=[...t,e];return Da(o),o}return t}function ya(t){return`R${t.r+1}C${t.c+1}`}function od(t){const e=t.split("R")[1].split("C"),n=parseInt(e[0])-1,r=parseInt(e[1])-1;return{r:n,c:r}}var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var AR=Zo.exports,mg;function NR(){return mg||(mg=1,function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",_=500,p="__lodash_placeholder__",g=1,v=2,m=4,E=1,O=2,I=1,b=2,y=4,D=8,M=16,W=32,j=64,F=128,q=256,J=512,oe=30,re="...",te=800,Ee=16,Oe=1,he=2,$e=3,ze=1/0,Ae=9007199254740991,Le=17976931348623157e292,rt=NaN,Ye=4294967295,zt=Ye-1,wn=Ye>>>1,Mr=[["ary",F],["bind",I],["bindKey",b],["curry",D],["curryRight",M],["flip",J],["partial",W],["partialRight",j],["rearg",q]],nn="[object Arguments]",hr="[object Array]",si="[object AsyncFunction]",or="[object Boolean]",Un="[object Date]",ki="[object DOMException]",Ur="[object Error]",Dt="[object Function]",De="[object GeneratorFunction]",be="[object Map]",ke="[object Number]",Te="[object Null]",Nt="[object Object]",Gs="[object Promise]",Ol="[object Proxy]",ai="[object RegExp]",Zn="[object Set]",No="[object String]",Ms="[object Symbol]",pv="[object Undefined]",So="[object WeakMap]",vv="[object WeakSet]",Ro="[object ArrayBuffer]",Gi="[object DataView]",Il="[object Float32Array]",bl="[object Float64Array]",wl="[object Int8Array]",yl="[object Int16Array]",Ll="[object Int32Array]",Al="[object Uint8Array]",Nl="[object Uint8ClampedArray]",Sl="[object Uint16Array]",Rl="[object Uint32Array]",mv=/\b__p \+= '';/g,Ev=/\b(__p \+=) '' \+/g,Cv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ud=/&(?:amp|lt|gt|quot|#39);/g,Fd=/[&<>"']/g,Ov=RegExp(Ud.source),Iv=RegExp(Fd.source),bv=/<%-([\s\S]+?)%>/g,wv=/<%([\s\S]+?)%>/g,$d=/<%=([\s\S]+?)%>/g,yv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Lv=/^\w*$/,Av=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xl=/[\\^$.*+?()[\]{}|]/g,Nv=RegExp(xl.source),Tl=/^\s+/,Sv=/\s/,Rv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,xv=/\{\n\/\* \[wrapped with (.+)\] \*/,Tv=/,? & /,Dv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,kv=/[()=,{}\[\]\/\s]/,Gv=/\\(\\)?/g,Mv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pd=/\w*$/,Uv=/^[-+]0x[0-9a-f]+$/i,Fv=/^0b[01]+$/i,$v=/^\[object .+?Constructor\]$/,Pv=/^0o[0-7]+$/i,Hv=/^(?:0|[1-9]\d*)$/,Bv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Us=/($^)/,Wv=/['\n\r\u2028\u2029\\]/g,Fs="\\ud800-\\udfff",zv="\\u0300-\\u036f",Yv="\\ufe20-\\ufe2f",jv="\\u20d0-\\u20ff",Hd=zv+Yv+jv,Bd="\\u2700-\\u27bf",Wd="a-z\\xdf-\\xf6\\xf8-\\xff",Kv="\\xac\\xb1\\xd7\\xf7",Vv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xv="\\u2000-\\u206f",qv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",zd="A-Z\\xc0-\\xd6\\xd8-\\xde",Yd="\\ufe0e\\ufe0f",jd=Kv+Vv+Xv+qv,Dl="['’]",Zv="["+Fs+"]",Kd="["+jd+"]",$s="["+Hd+"]",Vd="\\d+",Qv="["+Bd+"]",Xd="["+Wd+"]",qd="[^"+Fs+jd+Vd+Bd+Wd+zd+"]",kl="\\ud83c[\\udffb-\\udfff]",Jv="(?:"+$s+"|"+kl+")",Zd="[^"+Fs+"]",Gl="(?:\\ud83c[\\udde6-\\uddff]){2}",Ml="[\\ud800-\\udbff][\\udc00-\\udfff]",Mi="["+zd+"]",Qd="\\u200d",Jd="(?:"+Xd+"|"+qd+")",em="(?:"+Mi+"|"+qd+")",e_="(?:"+Dl+"(?:d|ll|m|re|s|t|ve))?",t_="(?:"+Dl+"(?:D|LL|M|RE|S|T|VE))?",n_=Jv+"?",r_="["+Yd+"]?",tm="(?:"+Qd+"(?:"+[Zd,Gl,Ml].join("|")+")"+r_+n_+")*",nm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",i_=r_+n_+tm,im="(?:"+[Qv,Gl,Ml].join("|")+")"+i_,om="(?:"+[Zd+$s+"?",$s,Gl,Ml,Zv].join("|")+")",sm=RegExp(Dl,"g"),am=RegExp($s,"g"),Ul=RegExp(kl+"(?="+kl+")|"+om+i_,"g"),lm=RegExp([Mi+"?"+Xd+"+"+e_+"(?="+[Kd,Mi,"$"].join("|")+")",em+"+"+t_+"(?="+[Kd,Mi+Jd,"$"].join("|")+")",Mi+"?"+Jd+"+"+e_,Mi+"+"+t_,rm,nm,Vd,im].join("|"),"g"),cm=RegExp("["+Qd+Fs+Hd+Yd+"]"),um=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,dm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],_m=-1,St={};St[Il]=St[bl]=St[wl]=St[yl]=St[Ll]=St[Al]=St[Nl]=St[Sl]=St[Rl]=!0,St[nn]=St[hr]=St[Ro]=St[or]=St[Gi]=St[Un]=St[Ur]=St[Dt]=St[be]=St[ke]=St[Nt]=St[ai]=St[Zn]=St[No]=St[So]=!1;var wt={};wt[nn]=wt[hr]=wt[Ro]=wt[Gi]=wt[or]=wt[Un]=wt[Il]=wt[bl]=wt[wl]=wt[yl]=wt[Ll]=wt[be]=wt[ke]=wt[Nt]=wt[ai]=wt[Zn]=wt[No]=wt[Ms]=wt[Al]=wt[Nl]=wt[Sl]=wt[Rl]=!0,wt[Ur]=wt[Dt]=wt[So]=!1;var fm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},gm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},vm=parseFloat,mm=parseInt,o_=typeof La=="object"&&La&&La.Object===Object&&La,Em=typeof self=="object"&&self&&self.Object===Object&&self,Xt=o_||Em||Function("return this")(),Fl=e&&!e.nodeType&&e,li=Fl&&!0&&t&&!t.nodeType&&t,s_=li&&li.exports===Fl,$l=s_&&o_.process,Fn=function(){try{var K=li&&li.require&&li.require("util").types;return K||$l&&$l.binding&&$l.binding("util")}catch{}}(),a_=Fn&&Fn.isArrayBuffer,l_=Fn&&Fn.isDate,c_=Fn&&Fn.isMap,u_=Fn&&Fn.isRegExp,d_=Fn&&Fn.isSet,__=Fn&&Fn.isTypedArray;function yn(K,ne,Q){switch(Q.length){case 0:return K.call(ne);case 1:return K.call(ne,Q[0]);case 2:return K.call(ne,Q[0],Q[1]);case 3:return K.call(ne,Q[0],Q[1],Q[2])}return K.apply(ne,Q)}function Cm(K,ne,Q,Ne){for(var Ve=-1,ht=K==null?0:K.length;++Ve<ht;){var $t=K[Ve];ne(Ne,$t,Q($t),K)}return Ne}function $n(K,ne){for(var Q=-1,Ne=K==null?0:K.length;++Q<Ne&&ne(K[Q],Q,K)!==!1;);return K}function Om(K,ne){for(var Q=K==null?0:K.length;Q--&&ne(K[Q],Q,K)!==!1;);return K}function f_(K,ne){for(var Q=-1,Ne=K==null?0:K.length;++Q<Ne;)if(!ne(K[Q],Q,K))return!1;return!0}function Fr(K,ne){for(var Q=-1,Ne=K==null?0:K.length,Ve=0,ht=[];++Q<Ne;){var $t=K[Q];ne($t,Q,K)&&(ht[Ve++]=$t)}return ht}function Ps(K,ne){var Q=K==null?0:K.length;return!!Q&&Ui(K,ne,0)>-1}function Pl(K,ne,Q){for(var Ne=-1,Ve=K==null?0:K.length;++Ne<Ve;)if(Q(ne,K[Ne]))return!0;return!1}function Rt(K,ne){for(var Q=-1,Ne=K==null?0:K.length,Ve=Array(Ne);++Q<Ne;)Ve[Q]=ne(K[Q],Q,K);return Ve}function $r(K,ne){for(var Q=-1,Ne=ne.length,Ve=K.length;++Q<Ne;)K[Ve+Q]=ne[Q];return K}function Hl(K,ne,Q,Ne){var Ve=-1,ht=K==null?0:K.length;for(Ne&&ht&&(Q=K[++Ve]);++Ve<ht;)Q=ne(Q,K[Ve],Ve,K);return Q}function Im(K,ne,Q,Ne){var Ve=K==null?0:K.length;for(Ne&&Ve&&(Q=K[--Ve]);Ve--;)Q=ne(Q,K[Ve],Ve,K);return Q}function Bl(K,ne){for(var Q=-1,Ne=K==null?0:K.length;++Q<Ne;)if(ne(K[Q],Q,K))return!0;return!1}var bm=Wl("length");function wm(K){return K.split("")}function ym(K){return K.match(Dv)||[]}function g_(K,ne,Q){var Ne;return Q(K,function(Ve,ht,$t){if(ne(Ve,ht,$t))return Ne=ht,!1}),Ne}function Hs(K,ne,Q,Ne){for(var Ve=K.length,ht=Q+(Ne?1:-1);Ne?ht--:++ht<Ve;)if(ne(K[ht],ht,K))return ht;return-1}function Ui(K,ne,Q){return ne===ne?Um(K,ne,Q):Hs(K,h_,Q)}function Lm(K,ne,Q,Ne){for(var Ve=Q-1,ht=K.length;++Ve<ht;)if(Ne(K[Ve],ne))return Ve;return-1}function h_(K){return K!==K}function p_(K,ne){var Q=K==null?0:K.length;return Q?Yl(K,ne)/Q:rt}function Wl(K){return function(ne){return ne==null?n:ne[K]}}function zl(K){return function(ne){return K==null?n:K[ne]}}function v_(K,ne,Q,Ne,Ve){return Ve(K,function(ht,$t,It){Q=Ne?(Ne=!1,ht):ne(Q,ht,$t,It)}),Q}function Am(K,ne){var Q=K.length;for(K.sort(ne);Q--;)K[Q]=K[Q].value;return K}function Yl(K,ne){for(var Q,Ne=-1,Ve=K.length;++Ne<Ve;){var ht=ne(K[Ne]);ht!==n&&(Q=Q===n?ht:Q+ht)}return Q}function jl(K,ne){for(var Q=-1,Ne=Array(K);++Q<K;)Ne[Q]=ne(Q);return Ne}function Nm(K,ne){return Rt(ne,function(Q){return[Q,K[Q]]})}function m_(K){return K&&K.slice(0,I_(K)+1).replace(Tl,"")}function Ln(K){return function(ne){return K(ne)}}function Kl(K,ne){return Rt(ne,function(Q){return K[Q]})}function xo(K,ne){return K.has(ne)}function E_(K,ne){for(var Q=-1,Ne=K.length;++Q<Ne&&Ui(ne,K[Q],0)>-1;);return Q}function C_(K,ne){for(var Q=K.length;Q--&&Ui(ne,K[Q],0)>-1;);return Q}function Sm(K,ne){for(var Q=K.length,Ne=0;Q--;)K[Q]===ne&&++Ne;return Ne}var Rm=zl(fm),xm=zl(gm);function Tm(K){return"\\"+pm[K]}function Dm(K,ne){return K==null?n:K[ne]}function Fi(K){return cm.test(K)}function km(K){return um.test(K)}function Gm(K){for(var ne,Q=[];!(ne=K.next()).done;)Q.push(ne.value);return Q}function Vl(K){var ne=-1,Q=Array(K.size);return K.forEach(function(Ne,Ve){Q[++ne]=[Ve,Ne]}),Q}function O_(K,ne){return function(Q){return K(ne(Q))}}function Pr(K,ne){for(var Q=-1,Ne=K.length,Ve=0,ht=[];++Q<Ne;){var $t=K[Q];($t===ne||$t===p)&&(K[Q]=p,ht[Ve++]=Q)}return ht}function Bs(K){var ne=-1,Q=Array(K.size);return K.forEach(function(Ne){Q[++ne]=Ne}),Q}function Mm(K){var ne=-1,Q=Array(K.size);return K.forEach(function(Ne){Q[++ne]=[Ne,Ne]}),Q}function Um(K,ne,Q){for(var Ne=Q-1,Ve=K.length;++Ne<Ve;)if(K[Ne]===ne)return Ne;return-1}function Fm(K,ne,Q){for(var Ne=Q+1;Ne--;)if(K[Ne]===ne)return Ne;return Ne}function $i(K){return Fi(K)?Pm(K):bm(K)}function Qn(K){return Fi(K)?Hm(K):wm(K)}function I_(K){for(var ne=K.length;ne--&&Sv.test(K.charAt(ne)););return ne}var $m=zl(hm);function Pm(K){for(var ne=Ul.lastIndex=0;Ul.test(K);)++ne;return ne}function Hm(K){return K.match(Ul)||[]}function Bm(K){return K.match(lm)||[]}var Wm=function K(ne){ne=ne==null?Xt:Pi.defaults(Xt.Object(),ne,Pi.pick(Xt,dm));var Q=ne.Array,Ne=ne.Date,Ve=ne.Error,ht=ne.Function,$t=ne.Math,It=ne.Object,Xl=ne.RegExp,zm=ne.String,Pn=ne.TypeError,Ws=Q.prototype,Ym=ht.prototype,Hi=It.prototype,zs=ne["__core-js_shared__"],Ys=Ym.toString,mt=Hi.hasOwnProperty,jm=0,b_=function(){var s=/[^.]+$/.exec(zs&&zs.keys&&zs.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),js=Hi.toString,Km=Ys.call(It),Vm=Xt._,Xm=Xl("^"+Ys.call(mt).replace(xl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ks=s_?ne.Buffer:n,Hr=ne.Symbol,Vs=ne.Uint8Array,w_=Ks?Ks.allocUnsafe:n,Xs=O_(It.getPrototypeOf,It),y_=It.create,L_=Hi.propertyIsEnumerable,qs=Ws.splice,A_=Hr?Hr.isConcatSpreadable:n,To=Hr?Hr.iterator:n,ci=Hr?Hr.toStringTag:n,Zs=function(){try{var s=gi(It,"defineProperty");return s({},"",{}),s}catch{}}(),qm=ne.clearTimeout!==Xt.clearTimeout&&ne.clearTimeout,Zm=Ne&&Ne.now!==Xt.Date.now&&Ne.now,Qm=ne.setTimeout!==Xt.setTimeout&&ne.setTimeout,Qs=$t.ceil,Js=$t.floor,ql=It.getOwnPropertySymbols,Jm=Ks?Ks.isBuffer:n,N_=ne.isFinite,e1=Ws.join,t1=O_(It.keys,It),Pt=$t.max,rn=$t.min,n1=Ne.now,r1=ne.parseInt,S_=$t.random,i1=Ws.reverse,Zl=gi(ne,"DataView"),Do=gi(ne,"Map"),Ql=gi(ne,"Promise"),Bi=gi(ne,"Set"),ko=gi(ne,"WeakMap"),Go=gi(It,"create"),ea=ko&&new ko,Wi={},o1=hi(Zl),s1=hi(Do),a1=hi(Ql),l1=hi(Bi),c1=hi(ko),ta=Hr?Hr.prototype:n,Mo=ta?ta.valueOf:n,R_=ta?ta.toString:n;function L(s){if(kt(s)&&!qe(s)&&!(s instanceof st)){if(s instanceof Hn)return s;if(mt.call(s,"__wrapped__"))return Tf(s)}return new Hn(s)}var zi=function(){function s(){}return function(l){if(!Tt(l))return{};if(y_)return y_(l);s.prototype=l;var f=new s;return s.prototype=n,f}}();function na(){}function Hn(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}L.templateSettings={escape:bv,evaluate:wv,interpolate:$d,variable:"",imports:{_:L}},L.prototype=na.prototype,L.prototype.constructor=L,Hn.prototype=zi(na.prototype),Hn.prototype.constructor=Hn;function st(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ye,this.__views__=[]}function u1(){var s=new st(this.__wrapped__);return s.__actions__=hn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=hn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=hn(this.__views__),s}function d1(){if(this.__filtered__){var s=new st(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function _1(){var s=this.__wrapped__.value(),l=this.__dir__,f=qe(s),C=l<0,w=f?s.length:0,R=wE(0,w,this.__views__),G=R.start,B=R.end,X=B-G,se=C?B:G-1,ce=this.__iteratees__,_e=ce.length,ye=0,Ge=rn(X,this.__takeCount__);if(!f||!C&&w==X&&Ge==X)return ef(s,this.__actions__);var He=[];e:for(;X--&&ye<Ge;){se+=l;for(var et=-1,Be=s[se];++et<_e;){var it=ce[et],ct=it.iteratee,Sn=it.type,cn=ct(Be);if(Sn==he)Be=cn;else if(!cn){if(Sn==Oe)continue e;break e}}He[ye++]=Be}return He}st.prototype=zi(na.prototype),st.prototype.constructor=st;function ui(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var C=s[l];this.set(C[0],C[1])}}function f1(){this.__data__=Go?Go(null):{},this.size=0}function g1(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function h1(s){var l=this.__data__;if(Go){var f=l[s];return f===u?n:f}return mt.call(l,s)?l[s]:n}function p1(s){var l=this.__data__;return Go?l[s]!==n:mt.call(l,s)}function v1(s,l){var f=this.__data__;return this.size+=this.has(s)?0:1,f[s]=Go&&l===n?u:l,this}ui.prototype.clear=f1,ui.prototype.delete=g1,ui.prototype.get=h1,ui.prototype.has=p1,ui.prototype.set=v1;function pr(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var C=s[l];this.set(C[0],C[1])}}function m1(){this.__data__=[],this.size=0}function E1(s){var l=this.__data__,f=ra(l,s);if(f<0)return!1;var C=l.length-1;return f==C?l.pop():qs.call(l,f,1),--this.size,!0}function C1(s){var l=this.__data__,f=ra(l,s);return f<0?n:l[f][1]}function O1(s){return ra(this.__data__,s)>-1}function I1(s,l){var f=this.__data__,C=ra(f,s);return C<0?(++this.size,f.push([s,l])):f[C][1]=l,this}pr.prototype.clear=m1,pr.prototype.delete=E1,pr.prototype.get=C1,pr.prototype.has=O1,pr.prototype.set=I1;function vr(s){var l=-1,f=s==null?0:s.length;for(this.clear();++l<f;){var C=s[l];this.set(C[0],C[1])}}function b1(){this.size=0,this.__data__={hash:new ui,map:new(Do||pr),string:new ui}}function w1(s){var l=ha(this,s).delete(s);return this.size-=l?1:0,l}function y1(s){return ha(this,s).get(s)}function L1(s){return ha(this,s).has(s)}function A1(s,l){var f=ha(this,s),C=f.size;return f.set(s,l),this.size+=f.size==C?0:1,this}vr.prototype.clear=b1,vr.prototype.delete=w1,vr.prototype.get=y1,vr.prototype.has=L1,vr.prototype.set=A1;function di(s){var l=-1,f=s==null?0:s.length;for(this.__data__=new vr;++l<f;)this.add(s[l])}function N1(s){return this.__data__.set(s,u),this}function S1(s){return this.__data__.has(s)}di.prototype.add=di.prototype.push=N1,di.prototype.has=S1;function Jn(s){var l=this.__data__=new pr(s);this.size=l.size}function R1(){this.__data__=new pr,this.size=0}function x1(s){var l=this.__data__,f=l.delete(s);return this.size=l.size,f}function T1(s){return this.__data__.get(s)}function D1(s){return this.__data__.has(s)}function k1(s,l){var f=this.__data__;if(f instanceof pr){var C=f.__data__;if(!Do||C.length<i-1)return C.push([s,l]),this.size=++f.size,this;f=this.__data__=new vr(C)}return f.set(s,l),this.size=f.size,this}Jn.prototype.clear=R1,Jn.prototype.delete=x1,Jn.prototype.get=T1,Jn.prototype.has=D1,Jn.prototype.set=k1;function x_(s,l){var f=qe(s),C=!f&&pi(s),w=!f&&!C&&jr(s),R=!f&&!C&&!w&&Vi(s),G=f||C||w||R,B=G?jl(s.length,zm):[],X=B.length;for(var se in s)(l||mt.call(s,se))&&!(G&&(se=="length"||w&&(se=="offset"||se=="parent")||R&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||Or(se,X)))&&B.push(se);return B}function T_(s){var l=s.length;return l?s[cc(0,l-1)]:n}function G1(s,l){return pa(hn(s),_i(l,0,s.length))}function M1(s){return pa(hn(s))}function Jl(s,l,f){(f!==n&&!er(s[l],f)||f===n&&!(l in s))&&mr(s,l,f)}function Uo(s,l,f){var C=s[l];(!(mt.call(s,l)&&er(C,f))||f===n&&!(l in s))&&mr(s,l,f)}function ra(s,l){for(var f=s.length;f--;)if(er(s[f][0],l))return f;return-1}function U1(s,l,f,C){return Br(s,function(w,R,G){l(C,w,f(w),G)}),C}function D_(s,l){return s&&ar(l,Yt(l),s)}function F1(s,l){return s&&ar(l,vn(l),s)}function mr(s,l,f){l=="__proto__"&&Zs?Zs(s,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):s[l]=f}function ec(s,l){for(var f=-1,C=l.length,w=Q(C),R=s==null;++f<C;)w[f]=R?n:kc(s,l[f]);return w}function _i(s,l,f){return s===s&&(f!==n&&(s=s<=f?s:f),l!==n&&(s=s>=l?s:l)),s}function Bn(s,l,f,C,w,R){var G,B=l&g,X=l&v,se=l&m;if(f&&(G=w?f(s,C,w,R):f(s)),G!==n)return G;if(!Tt(s))return s;var ce=qe(s);if(ce){if(G=LE(s),!B)return hn(s,G)}else{var _e=on(s),ye=_e==Dt||_e==De;if(jr(s))return rf(s,B);if(_e==Nt||_e==nn||ye&&!w){if(G=X||ye?{}:bf(s),!B)return X?hE(s,F1(G,s)):gE(s,D_(G,s))}else{if(!wt[_e])return w?s:{};G=AE(s,_e,B)}}R||(R=new Jn);var Ge=R.get(s);if(Ge)return Ge;R.set(s,G),Qf(s)?s.forEach(function(Be){G.add(Bn(Be,l,f,Be,s,R))}):qf(s)&&s.forEach(function(Be,it){G.set(it,Bn(Be,l,f,it,s,R))});var He=se?X?Cc:Ec:X?vn:Yt,et=ce?n:He(s);return $n(et||s,function(Be,it){et&&(it=Be,Be=s[it]),Uo(G,it,Bn(Be,l,f,it,s,R))}),G}function $1(s){var l=Yt(s);return function(f){return k_(f,s,l)}}function k_(s,l,f){var C=f.length;if(s==null)return!C;for(s=It(s);C--;){var w=f[C],R=l[w],G=s[w];if(G===n&&!(w in s)||!R(G))return!1}return!0}function G_(s,l,f){if(typeof s!="function")throw new Pn(a);return zo(function(){s.apply(n,f)},l)}function Fo(s,l,f,C){var w=-1,R=Ps,G=!0,B=s.length,X=[],se=l.length;if(!B)return X;f&&(l=Rt(l,Ln(f))),C?(R=Pl,G=!1):l.length>=i&&(R=xo,G=!1,l=new di(l));e:for(;++w<B;){var ce=s[w],_e=f==null?ce:f(ce);if(ce=C||ce!==0?ce:0,G&&_e===_e){for(var ye=se;ye--;)if(l[ye]===_e)continue e;X.push(ce)}else R(l,_e,C)||X.push(ce)}return X}var Br=cf(sr),M_=cf(nc,!0);function P1(s,l){var f=!0;return Br(s,function(C,w,R){return f=!!l(C,w,R),f}),f}function ia(s,l,f){for(var C=-1,w=s.length;++C<w;){var R=s[C],G=l(R);if(G!=null&&(B===n?G===G&&!Nn(G):f(G,B)))var B=G,X=R}return X}function H1(s,l,f,C){var w=s.length;for(f=Je(f),f<0&&(f=-f>w?0:w+f),C=C===n||C>w?w:Je(C),C<0&&(C+=w),C=f>C?0:eg(C);f<C;)s[f++]=l;return s}function U_(s,l){var f=[];return Br(s,function(C,w,R){l(C,w,R)&&f.push(C)}),f}function qt(s,l,f,C,w){var R=-1,G=s.length;for(f||(f=SE),w||(w=[]);++R<G;){var B=s[R];l>0&&f(B)?l>1?qt(B,l-1,f,C,w):$r(w,B):C||(w[w.length]=B)}return w}var tc=uf(),F_=uf(!0);function sr(s,l){return s&&tc(s,l,Yt)}function nc(s,l){return s&&F_(s,l,Yt)}function oa(s,l){return Fr(l,function(f){return Ir(s[f])})}function fi(s,l){l=zr(l,s);for(var f=0,C=l.length;s!=null&&f<C;)s=s[lr(l[f++])];return f&&f==C?s:n}function $_(s,l,f){var C=l(s);return qe(s)?C:$r(C,f(s))}function an(s){return s==null?s===n?pv:Te:ci&&ci in It(s)?bE(s):ME(s)}function rc(s,l){return s>l}function B1(s,l){return s!=null&&mt.call(s,l)}function W1(s,l){return s!=null&&l in It(s)}function z1(s,l,f){return s>=rn(l,f)&&s<Pt(l,f)}function ic(s,l,f){for(var C=f?Pl:Ps,w=s[0].length,R=s.length,G=R,B=Q(R),X=1/0,se=[];G--;){var ce=s[G];G&&l&&(ce=Rt(ce,Ln(l))),X=rn(ce.length,X),B[G]=!f&&(l||w>=120&&ce.length>=120)?new di(G&&ce):n}ce=s[0];var _e=-1,ye=B[0];e:for(;++_e<w&&se.length<X;){var Ge=ce[_e],He=l?l(Ge):Ge;if(Ge=f||Ge!==0?Ge:0,!(ye?xo(ye,He):C(se,He,f))){for(G=R;--G;){var et=B[G];if(!(et?xo(et,He):C(s[G],He,f)))continue e}ye&&ye.push(He),se.push(Ge)}}return se}function Y1(s,l,f,C){return sr(s,function(w,R,G){l(C,f(w),R,G)}),C}function $o(s,l,f){l=zr(l,s),s=Af(s,l);var C=s==null?s:s[lr(zn(l))];return C==null?n:yn(C,s,f)}function P_(s){return kt(s)&&an(s)==nn}function j1(s){return kt(s)&&an(s)==Ro}function K1(s){return kt(s)&&an(s)==Un}function Po(s,l,f,C,w){return s===l?!0:s==null||l==null||!kt(s)&&!kt(l)?s!==s&&l!==l:V1(s,l,f,C,Po,w)}function V1(s,l,f,C,w,R){var G=qe(s),B=qe(l),X=G?hr:on(s),se=B?hr:on(l);X=X==nn?Nt:X,se=se==nn?Nt:se;var ce=X==Nt,_e=se==Nt,ye=X==se;if(ye&&jr(s)){if(!jr(l))return!1;G=!0,ce=!1}if(ye&&!ce)return R||(R=new Jn),G||Vi(s)?Cf(s,l,f,C,w,R):OE(s,l,X,f,C,w,R);if(!(f&E)){var Ge=ce&&mt.call(s,"__wrapped__"),He=_e&&mt.call(l,"__wrapped__");if(Ge||He){var et=Ge?s.value():s,Be=He?l.value():l;return R||(R=new Jn),w(et,Be,f,C,R)}}return ye?(R||(R=new Jn),IE(s,l,f,C,w,R)):!1}function X1(s){return kt(s)&&on(s)==be}function oc(s,l,f,C){var w=f.length,R=w,G=!C;if(s==null)return!R;for(s=It(s);w--;){var B=f[w];if(G&&B[2]?B[1]!==s[B[0]]:!(B[0]in s))return!1}for(;++w<R;){B=f[w];var X=B[0],se=s[X],ce=B[1];if(G&&B[2]){if(se===n&&!(X in s))return!1}else{var _e=new Jn;if(C)var ye=C(se,ce,X,s,l,_e);if(!(ye===n?Po(ce,se,E|O,C,_e):ye))return!1}}return!0}function H_(s){if(!Tt(s)||xE(s))return!1;var l=Ir(s)?Xm:$v;return l.test(hi(s))}function q1(s){return kt(s)&&an(s)==ai}function Z1(s){return kt(s)&&on(s)==Zn}function Q1(s){return kt(s)&&Ia(s.length)&&!!St[an(s)]}function B_(s){return typeof s=="function"?s:s==null?mn:typeof s=="object"?qe(s)?Y_(s[0],s[1]):z_(s):dg(s)}function sc(s){if(!Wo(s))return t1(s);var l=[];for(var f in It(s))mt.call(s,f)&&f!="constructor"&&l.push(f);return l}function J1(s){if(!Tt(s))return GE(s);var l=Wo(s),f=[];for(var C in s)C=="constructor"&&(l||!mt.call(s,C))||f.push(C);return f}function ac(s,l){return s<l}function W_(s,l){var f=-1,C=pn(s)?Q(s.length):[];return Br(s,function(w,R,G){C[++f]=l(w,R,G)}),C}function z_(s){var l=Ic(s);return l.length==1&&l[0][2]?yf(l[0][0],l[0][1]):function(f){return f===s||oc(f,s,l)}}function Y_(s,l){return wc(s)&&wf(l)?yf(lr(s),l):function(f){var C=kc(f,s);return C===n&&C===l?Gc(f,s):Po(l,C,E|O)}}function sa(s,l,f,C,w){s!==l&&tc(l,function(R,G){if(w||(w=new Jn),Tt(R))eE(s,l,G,f,sa,C,w);else{var B=C?C(Lc(s,G),R,G+"",s,l,w):n;B===n&&(B=R),Jl(s,G,B)}},vn)}function eE(s,l,f,C,w,R,G){var B=Lc(s,f),X=Lc(l,f),se=G.get(X);if(se){Jl(s,f,se);return}var ce=R?R(B,X,f+"",s,l,G):n,_e=ce===n;if(_e){var ye=qe(X),Ge=!ye&&jr(X),He=!ye&&!Ge&&Vi(X);ce=X,ye||Ge||He?qe(B)?ce=B:Gt(B)?ce=hn(B):Ge?(_e=!1,ce=rf(X,!0)):He?(_e=!1,ce=of(X,!0)):ce=[]:Yo(X)||pi(X)?(ce=B,pi(B)?ce=tg(B):(!Tt(B)||Ir(B))&&(ce=bf(X))):_e=!1}_e&&(G.set(X,ce),w(ce,X,C,R,G),G.delete(X)),Jl(s,f,ce)}function j_(s,l){var f=s.length;if(f)return l+=l<0?f:0,Or(l,f)?s[l]:n}function K_(s,l,f){l.length?l=Rt(l,function(R){return qe(R)?function(G){return fi(G,R.length===1?R[0]:R)}:R}):l=[mn];var C=-1;l=Rt(l,Ln(Pe()));var w=W_(s,function(R,G,B){var X=Rt(l,function(se){return se(R)});return{criteria:X,index:++C,value:R}});return Am(w,function(R,G){return fE(R,G,f)})}function tE(s,l){return V_(s,l,function(f,C){return Gc(s,C)})}function V_(s,l,f){for(var C=-1,w=l.length,R={};++C<w;){var G=l[C],B=fi(s,G);f(B,G)&&Ho(R,zr(G,s),B)}return R}function nE(s){return function(l){return fi(l,s)}}function lc(s,l,f,C){var w=C?Lm:Ui,R=-1,G=l.length,B=s;for(s===l&&(l=hn(l)),f&&(B=Rt(s,Ln(f)));++R<G;)for(var X=0,se=l[R],ce=f?f(se):se;(X=w(B,ce,X,C))>-1;)B!==s&&qs.call(B,X,1),qs.call(s,X,1);return s}function X_(s,l){for(var f=s?l.length:0,C=f-1;f--;){var w=l[f];if(f==C||w!==R){var R=w;Or(w)?qs.call(s,w,1):_c(s,w)}}return s}function cc(s,l){return s+Js(S_()*(l-s+1))}function rE(s,l,f,C){for(var w=-1,R=Pt(Qs((l-s)/(f||1)),0),G=Q(R);R--;)G[C?R:++w]=s,s+=f;return G}function uc(s,l){var f="";if(!s||l<1||l>Ae)return f;do l%2&&(f+=s),l=Js(l/2),l&&(s+=s);while(l);return f}function tt(s,l){return Ac(Lf(s,l,mn),s+"")}function iE(s){return T_(Xi(s))}function oE(s,l){var f=Xi(s);return pa(f,_i(l,0,f.length))}function Ho(s,l,f,C){if(!Tt(s))return s;l=zr(l,s);for(var w=-1,R=l.length,G=R-1,B=s;B!=null&&++w<R;){var X=lr(l[w]),se=f;if(X==="__proto__"||X==="constructor"||X==="prototype")return s;if(w!=G){var ce=B[X];se=C?C(ce,X,B):n,se===n&&(se=Tt(ce)?ce:Or(l[w+1])?[]:{})}Uo(B,X,se),B=B[X]}return s}var q_=ea?function(s,l){return ea.set(s,l),s}:mn,sE=Zs?function(s,l){return Zs(s,"toString",{configurable:!0,enumerable:!1,value:Uc(l),writable:!0})}:mn;function aE(s){return pa(Xi(s))}function Wn(s,l,f){var C=-1,w=s.length;l<0&&(l=-l>w?0:w+l),f=f>w?w:f,f<0&&(f+=w),w=l>f?0:f-l>>>0,l>>>=0;for(var R=Q(w);++C<w;)R[C]=s[C+l];return R}function lE(s,l){var f;return Br(s,function(C,w,R){return f=l(C,w,R),!f}),!!f}function aa(s,l,f){var C=0,w=s==null?C:s.length;if(typeof l=="number"&&l===l&&w<=wn){for(;C<w;){var R=C+w>>>1,G=s[R];G!==null&&!Nn(G)&&(f?G<=l:G<l)?C=R+1:w=R}return w}return dc(s,l,mn,f)}function dc(s,l,f,C){var w=0,R=s==null?0:s.length;if(R===0)return 0;l=f(l);for(var G=l!==l,B=l===null,X=Nn(l),se=l===n;w<R;){var ce=Js((w+R)/2),_e=f(s[ce]),ye=_e!==n,Ge=_e===null,He=_e===_e,et=Nn(_e);if(G)var Be=C||He;else se?Be=He&&(C||ye):B?Be=He&&ye&&(C||!Ge):X?Be=He&&ye&&!Ge&&(C||!et):Ge||et?Be=!1:Be=C?_e<=l:_e<l;Be?w=ce+1:R=ce}return rn(R,zt)}function Z_(s,l){for(var f=-1,C=s.length,w=0,R=[];++f<C;){var G=s[f],B=l?l(G):G;if(!f||!er(B,X)){var X=B;R[w++]=G===0?0:G}}return R}function Q_(s){return typeof s=="number"?s:Nn(s)?rt:+s}function An(s){if(typeof s=="string")return s;if(qe(s))return Rt(s,An)+"";if(Nn(s))return R_?R_.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Wr(s,l,f){var C=-1,w=Ps,R=s.length,G=!0,B=[],X=B;if(f)G=!1,w=Pl;else if(R>=i){var se=l?null:EE(s);if(se)return Bs(se);G=!1,w=xo,X=new di}else X=l?[]:B;e:for(;++C<R;){var ce=s[C],_e=l?l(ce):ce;if(ce=f||ce!==0?ce:0,G&&_e===_e){for(var ye=X.length;ye--;)if(X[ye]===_e)continue e;l&&X.push(_e),B.push(ce)}else w(X,_e,f)||(X!==B&&X.push(_e),B.push(ce))}return B}function _c(s,l){return l=zr(l,s),s=Af(s,l),s==null||delete s[lr(zn(l))]}function J_(s,l,f,C){return Ho(s,l,f(fi(s,l)),C)}function la(s,l,f,C){for(var w=s.length,R=C?w:-1;(C?R--:++R<w)&&l(s[R],R,s););return f?Wn(s,C?0:R,C?R+1:w):Wn(s,C?R+1:0,C?w:R)}function ef(s,l){var f=s;return f instanceof st&&(f=f.value()),Hl(l,function(C,w){return w.func.apply(w.thisArg,$r([C],w.args))},f)}function fc(s,l,f){var C=s.length;if(C<2)return C?Wr(s[0]):[];for(var w=-1,R=Q(C);++w<C;)for(var G=s[w],B=-1;++B<C;)B!=w&&(R[w]=Fo(R[w]||G,s[B],l,f));return Wr(qt(R,1),l,f)}function tf(s,l,f){for(var C=-1,w=s.length,R=l.length,G={};++C<w;){var B=C<R?l[C]:n;f(G,s[C],B)}return G}function gc(s){return Gt(s)?s:[]}function hc(s){return typeof s=="function"?s:mn}function zr(s,l){return qe(s)?s:wc(s,l)?[s]:xf(pt(s))}var cE=tt;function Yr(s,l,f){var C=s.length;return f=f===n?C:f,!l&&f>=C?s:Wn(s,l,f)}var nf=qm||function(s){return Xt.clearTimeout(s)};function rf(s,l){if(l)return s.slice();var f=s.length,C=w_?w_(f):new s.constructor(f);return s.copy(C),C}function pc(s){var l=new s.constructor(s.byteLength);return new Vs(l).set(new Vs(s)),l}function uE(s,l){var f=l?pc(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.byteLength)}function dE(s){var l=new s.constructor(s.source,Pd.exec(s));return l.lastIndex=s.lastIndex,l}function _E(s){return Mo?It(Mo.call(s)):{}}function of(s,l){var f=l?pc(s.buffer):s.buffer;return new s.constructor(f,s.byteOffset,s.length)}function sf(s,l){if(s!==l){var f=s!==n,C=s===null,w=s===s,R=Nn(s),G=l!==n,B=l===null,X=l===l,se=Nn(l);if(!B&&!se&&!R&&s>l||R&&G&&X&&!B&&!se||C&&G&&X||!f&&X||!w)return 1;if(!C&&!R&&!se&&s<l||se&&f&&w&&!C&&!R||B&&f&&w||!G&&w||!X)return-1}return 0}function fE(s,l,f){for(var C=-1,w=s.criteria,R=l.criteria,G=w.length,B=f.length;++C<G;){var X=sf(w[C],R[C]);if(X){if(C>=B)return X;var se=f[C];return X*(se=="desc"?-1:1)}}return s.index-l.index}function af(s,l,f,C){for(var w=-1,R=s.length,G=f.length,B=-1,X=l.length,se=Pt(R-G,0),ce=Q(X+se),_e=!C;++B<X;)ce[B]=l[B];for(;++w<G;)(_e||w<R)&&(ce[f[w]]=s[w]);for(;se--;)ce[B++]=s[w++];return ce}function lf(s,l,f,C){for(var w=-1,R=s.length,G=-1,B=f.length,X=-1,se=l.length,ce=Pt(R-B,0),_e=Q(ce+se),ye=!C;++w<ce;)_e[w]=s[w];for(var Ge=w;++X<se;)_e[Ge+X]=l[X];for(;++G<B;)(ye||w<R)&&(_e[Ge+f[G]]=s[w++]);return _e}function hn(s,l){var f=-1,C=s.length;for(l||(l=Q(C));++f<C;)l[f]=s[f];return l}function ar(s,l,f,C){var w=!f;f||(f={});for(var R=-1,G=l.length;++R<G;){var B=l[R],X=C?C(f[B],s[B],B,f,s):n;X===n&&(X=s[B]),w?mr(f,B,X):Uo(f,B,X)}return f}function gE(s,l){return ar(s,bc(s),l)}function hE(s,l){return ar(s,Of(s),l)}function ca(s,l){return function(f,C){var w=qe(f)?Cm:U1,R=l?l():{};return w(f,s,Pe(C,2),R)}}function Yi(s){return tt(function(l,f){var C=-1,w=f.length,R=w>1?f[w-1]:n,G=w>2?f[2]:n;for(R=s.length>3&&typeof R=="function"?(w--,R):n,G&&ln(f[0],f[1],G)&&(R=w<3?n:R,w=1),l=It(l);++C<w;){var B=f[C];B&&s(l,B,C,R)}return l})}function cf(s,l){return function(f,C){if(f==null)return f;if(!pn(f))return s(f,C);for(var w=f.length,R=l?w:-1,G=It(f);(l?R--:++R<w)&&C(G[R],R,G)!==!1;);return f}}function uf(s){return function(l,f,C){for(var w=-1,R=It(l),G=C(l),B=G.length;B--;){var X=G[s?B:++w];if(f(R[X],X,R)===!1)break}return l}}function pE(s,l,f){var C=l&I,w=Bo(s);function R(){var G=this&&this!==Xt&&this instanceof R?w:s;return G.apply(C?f:this,arguments)}return R}function df(s){return function(l){l=pt(l);var f=Fi(l)?Qn(l):n,C=f?f[0]:l.charAt(0),w=f?Yr(f,1).join(""):l.slice(1);return C[s]()+w}}function ji(s){return function(l){return Hl(cg(lg(l).replace(sm,"")),s,"")}}function Bo(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=zi(s.prototype),C=s.apply(f,l);return Tt(C)?C:f}}function vE(s,l,f){var C=Bo(s);function w(){for(var R=arguments.length,G=Q(R),B=R,X=Ki(w);B--;)G[B]=arguments[B];var se=R<3&&G[0]!==X&&G[R-1]!==X?[]:Pr(G,X);if(R-=se.length,R<f)return pf(s,l,ua,w.placeholder,n,G,se,n,n,f-R);var ce=this&&this!==Xt&&this instanceof w?C:s;return yn(ce,this,G)}return w}function _f(s){return function(l,f,C){var w=It(l);if(!pn(l)){var R=Pe(f,3);l=Yt(l),f=function(B){return R(w[B],B,w)}}var G=s(l,f,C);return G>-1?w[R?l[G]:G]:n}}function ff(s){return Cr(function(l){var f=l.length,C=f,w=Hn.prototype.thru;for(s&&l.reverse();C--;){var R=l[C];if(typeof R!="function")throw new Pn(a);if(w&&!G&&ga(R)=="wrapper")var G=new Hn([],!0)}for(C=G?C:f;++C<f;){R=l[C];var B=ga(R),X=B=="wrapper"?Oc(R):n;X&&yc(X[0])&&X[1]==(F|D|W|q)&&!X[4].length&&X[9]==1?G=G[ga(X[0])].apply(G,X[3]):G=R.length==1&&yc(R)?G[B]():G.thru(R)}return function(){var se=arguments,ce=se[0];if(G&&se.length==1&&qe(ce))return G.plant(ce).value();for(var _e=0,ye=f?l[_e].apply(this,se):ce;++_e<f;)ye=l[_e].call(this,ye);return ye}})}function ua(s,l,f,C,w,R,G,B,X,se){var ce=l&F,_e=l&I,ye=l&b,Ge=l&(D|M),He=l&J,et=ye?n:Bo(s);function Be(){for(var it=arguments.length,ct=Q(it),Sn=it;Sn--;)ct[Sn]=arguments[Sn];if(Ge)var cn=Ki(Be),Rn=Sm(ct,cn);if(C&&(ct=af(ct,C,w,Ge)),R&&(ct=lf(ct,R,G,Ge)),it-=Rn,Ge&&it<se){var Mt=Pr(ct,cn);return pf(s,l,ua,Be.placeholder,f,ct,Mt,B,X,se-it)}var tr=_e?f:this,wr=ye?tr[s]:s;return it=ct.length,B?ct=UE(ct,B):He&&it>1&&ct.reverse(),ce&&X<it&&(ct.length=X),this&&this!==Xt&&this instanceof Be&&(wr=et||Bo(wr)),wr.apply(tr,ct)}return Be}function gf(s,l){return function(f,C){return Y1(f,s,l(C),{})}}function da(s,l){return function(f,C){var w;if(f===n&&C===n)return l;if(f!==n&&(w=f),C!==n){if(w===n)return C;typeof f=="string"||typeof C=="string"?(f=An(f),C=An(C)):(f=Q_(f),C=Q_(C)),w=s(f,C)}return w}}function vc(s){return Cr(function(l){return l=Rt(l,Ln(Pe())),tt(function(f){var C=this;return s(l,function(w){return yn(w,C,f)})})})}function _a(s,l){l=l===n?" ":An(l);var f=l.length;if(f<2)return f?uc(l,s):l;var C=uc(l,Qs(s/$i(l)));return Fi(l)?Yr(Qn(C),0,s).join(""):C.slice(0,s)}function mE(s,l,f,C){var w=l&I,R=Bo(s);function G(){for(var B=-1,X=arguments.length,se=-1,ce=C.length,_e=Q(ce+X),ye=this&&this!==Xt&&this instanceof G?R:s;++se<ce;)_e[se]=C[se];for(;X--;)_e[se++]=arguments[++B];return yn(ye,w?f:this,_e)}return G}function hf(s){return function(l,f,C){return C&&typeof C!="number"&&ln(l,f,C)&&(f=C=n),l=br(l),f===n?(f=l,l=0):f=br(f),C=C===n?l<f?1:-1:br(C),rE(l,f,C,s)}}function fa(s){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=Yn(l),f=Yn(f)),s(l,f)}}function pf(s,l,f,C,w,R,G,B,X,se){var ce=l&D,_e=ce?G:n,ye=ce?n:G,Ge=ce?R:n,He=ce?n:R;l|=ce?W:j,l&=~(ce?j:W),l&y||(l&=-4);var et=[s,l,w,Ge,_e,He,ye,B,X,se],Be=f.apply(n,et);return yc(s)&&Nf(Be,et),Be.placeholder=C,Sf(Be,s,l)}function mc(s){var l=$t[s];return function(f,C){if(f=Yn(f),C=C==null?0:rn(Je(C),292),C&&N_(f)){var w=(pt(f)+"e").split("e"),R=l(w[0]+"e"+(+w[1]+C));return w=(pt(R)+"e").split("e"),+(w[0]+"e"+(+w[1]-C))}return l(f)}}var EE=Bi&&1/Bs(new Bi([,-0]))[1]==ze?function(s){return new Bi(s)}:Pc;function vf(s){return function(l){var f=on(l);return f==be?Vl(l):f==Zn?Mm(l):Nm(l,s(l))}}function Er(s,l,f,C,w,R,G,B){var X=l&b;if(!X&&typeof s!="function")throw new Pn(a);var se=C?C.length:0;if(se||(l&=-97,C=w=n),G=G===n?G:Pt(Je(G),0),B=B===n?B:Je(B),se-=w?w.length:0,l&j){var ce=C,_e=w;C=w=n}var ye=X?n:Oc(s),Ge=[s,l,f,C,w,ce,_e,R,G,B];if(ye&&kE(Ge,ye),s=Ge[0],l=Ge[1],f=Ge[2],C=Ge[3],w=Ge[4],B=Ge[9]=Ge[9]===n?X?0:s.length:Pt(Ge[9]-se,0),!B&&l&(D|M)&&(l&=-25),!l||l==I)var He=pE(s,l,f);else l==D||l==M?He=vE(s,l,B):(l==W||l==(I|W))&&!w.length?He=mE(s,l,f,C):He=ua.apply(n,Ge);var et=ye?q_:Nf;return Sf(et(He,Ge),s,l)}function mf(s,l,f,C){return s===n||er(s,Hi[f])&&!mt.call(C,f)?l:s}function Ef(s,l,f,C,w,R){return Tt(s)&&Tt(l)&&(R.set(l,s),sa(s,l,n,Ef,R),R.delete(l)),s}function CE(s){return Yo(s)?n:s}function Cf(s,l,f,C,w,R){var G=f&E,B=s.length,X=l.length;if(B!=X&&!(G&&X>B))return!1;var se=R.get(s),ce=R.get(l);if(se&&ce)return se==l&&ce==s;var _e=-1,ye=!0,Ge=f&O?new di:n;for(R.set(s,l),R.set(l,s);++_e<B;){var He=s[_e],et=l[_e];if(C)var Be=G?C(et,He,_e,l,s,R):C(He,et,_e,s,l,R);if(Be!==n){if(Be)continue;ye=!1;break}if(Ge){if(!Bl(l,function(it,ct){if(!xo(Ge,ct)&&(He===it||w(He,it,f,C,R)))return Ge.push(ct)})){ye=!1;break}}else if(!(He===et||w(He,et,f,C,R))){ye=!1;break}}return R.delete(s),R.delete(l),ye}function OE(s,l,f,C,w,R,G){switch(f){case Gi:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case Ro:return!(s.byteLength!=l.byteLength||!R(new Vs(s),new Vs(l)));case or:case Un:case ke:return er(+s,+l);case Ur:return s.name==l.name&&s.message==l.message;case ai:case No:return s==l+"";case be:var B=Vl;case Zn:var X=C&E;if(B||(B=Bs),s.size!=l.size&&!X)return!1;var se=G.get(s);if(se)return se==l;C|=O,G.set(s,l);var ce=Cf(B(s),B(l),C,w,R,G);return G.delete(s),ce;case Ms:if(Mo)return Mo.call(s)==Mo.call(l)}return!1}function IE(s,l,f,C,w,R){var G=f&E,B=Ec(s),X=B.length,se=Ec(l),ce=se.length;if(X!=ce&&!G)return!1;for(var _e=X;_e--;){var ye=B[_e];if(!(G?ye in l:mt.call(l,ye)))return!1}var Ge=R.get(s),He=R.get(l);if(Ge&&He)return Ge==l&&He==s;var et=!0;R.set(s,l),R.set(l,s);for(var Be=G;++_e<X;){ye=B[_e];var it=s[ye],ct=l[ye];if(C)var Sn=G?C(ct,it,ye,l,s,R):C(it,ct,ye,s,l,R);if(!(Sn===n?it===ct||w(it,ct,f,C,R):Sn)){et=!1;break}Be||(Be=ye=="constructor")}if(et&&!Be){var cn=s.constructor,Rn=l.constructor;cn!=Rn&&"constructor"in s&&"constructor"in l&&!(typeof cn=="function"&&cn instanceof cn&&typeof Rn=="function"&&Rn instanceof Rn)&&(et=!1)}return R.delete(s),R.delete(l),et}function Cr(s){return Ac(Lf(s,n,Gf),s+"")}function Ec(s){return $_(s,Yt,bc)}function Cc(s){return $_(s,vn,Of)}var Oc=ea?function(s){return ea.get(s)}:Pc;function ga(s){for(var l=s.name+"",f=Wi[l],C=mt.call(Wi,l)?f.length:0;C--;){var w=f[C],R=w.func;if(R==null||R==s)return w.name}return l}function Ki(s){var l=mt.call(L,"placeholder")?L:s;return l.placeholder}function Pe(){var s=L.iteratee||Fc;return s=s===Fc?B_:s,arguments.length?s(arguments[0],arguments[1]):s}function ha(s,l){var f=s.__data__;return RE(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Ic(s){for(var l=Yt(s),f=l.length;f--;){var C=l[f],w=s[C];l[f]=[C,w,wf(w)]}return l}function gi(s,l){var f=Dm(s,l);return H_(f)?f:n}function bE(s){var l=mt.call(s,ci),f=s[ci];try{s[ci]=n;var C=!0}catch{}var w=js.call(s);return C&&(l?s[ci]=f:delete s[ci]),w}var bc=ql?function(s){return s==null?[]:(s=It(s),Fr(ql(s),function(l){return L_.call(s,l)}))}:Hc,Of=ql?function(s){for(var l=[];s;)$r(l,bc(s)),s=Xs(s);return l}:Hc,on=an;(Zl&&on(new Zl(new ArrayBuffer(1)))!=Gi||Do&&on(new Do)!=be||Ql&&on(Ql.resolve())!=Gs||Bi&&on(new Bi)!=Zn||ko&&on(new ko)!=So)&&(on=function(s){var l=an(s),f=l==Nt?s.constructor:n,C=f?hi(f):"";if(C)switch(C){case o1:return Gi;case s1:return be;case a1:return Gs;case l1:return Zn;case c1:return So}return l});function wE(s,l,f){for(var C=-1,w=f.length;++C<w;){var R=f[C],G=R.size;switch(R.type){case"drop":s+=G;break;case"dropRight":l-=G;break;case"take":l=rn(l,s+G);break;case"takeRight":s=Pt(s,l-G);break}}return{start:s,end:l}}function yE(s){var l=s.match(xv);return l?l[1].split(Tv):[]}function If(s,l,f){l=zr(l,s);for(var C=-1,w=l.length,R=!1;++C<w;){var G=lr(l[C]);if(!(R=s!=null&&f(s,G)))break;s=s[G]}return R||++C!=w?R:(w=s==null?0:s.length,!!w&&Ia(w)&&Or(G,w)&&(qe(s)||pi(s)))}function LE(s){var l=s.length,f=new s.constructor(l);return l&&typeof s[0]=="string"&&mt.call(s,"index")&&(f.index=s.index,f.input=s.input),f}function bf(s){return typeof s.constructor=="function"&&!Wo(s)?zi(Xs(s)):{}}function AE(s,l,f){var C=s.constructor;switch(l){case Ro:return pc(s);case or:case Un:return new C(+s);case Gi:return uE(s,f);case Il:case bl:case wl:case yl:case Ll:case Al:case Nl:case Sl:case Rl:return of(s,f);case be:return new C;case ke:case No:return new C(s);case ai:return dE(s);case Zn:return new C;case Ms:return _E(s)}}function NE(s,l){var f=l.length;if(!f)return s;var C=f-1;return l[C]=(f>1?"& ":"")+l[C],l=l.join(f>2?", ":" "),s.replace(Rv,`{
/* [wrapped with `+l+`] */
`)}function SE(s){return qe(s)||pi(s)||!!(A_&&s&&s[A_])}function Or(s,l){var f=typeof s;return l=l??Ae,!!l&&(f=="number"||f!="symbol"&&Hv.test(s))&&s>-1&&s%1==0&&s<l}function ln(s,l,f){if(!Tt(f))return!1;var C=typeof l;return(C=="number"?pn(f)&&Or(l,f.length):C=="string"&&l in f)?er(f[l],s):!1}function wc(s,l){if(qe(s))return!1;var f=typeof s;return f=="number"||f=="symbol"||f=="boolean"||s==null||Nn(s)?!0:Lv.test(s)||!yv.test(s)||l!=null&&s in It(l)}function RE(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function yc(s){var l=ga(s),f=L[l];if(typeof f!="function"||!(l in st.prototype))return!1;if(s===f)return!0;var C=Oc(f);return!!C&&s===C[0]}function xE(s){return!!b_&&b_ in s}var TE=zs?Ir:Bc;function Wo(s){var l=s&&s.constructor,f=typeof l=="function"&&l.prototype||Hi;return s===f}function wf(s){return s===s&&!Tt(s)}function yf(s,l){return function(f){return f==null?!1:f[s]===l&&(l!==n||s in It(f))}}function DE(s){var l=Ca(s,function(C){return f.size===_&&f.clear(),C}),f=l.cache;return l}function kE(s,l){var f=s[1],C=l[1],w=f|C,R=w<(I|b|F),G=C==F&&f==D||C==F&&f==q&&s[7].length<=l[8]||C==(F|q)&&l[7].length<=l[8]&&f==D;if(!(R||G))return s;C&I&&(s[2]=l[2],w|=f&I?0:y);var B=l[3];if(B){var X=s[3];s[3]=X?af(X,B,l[4]):B,s[4]=X?Pr(s[3],p):l[4]}return B=l[5],B&&(X=s[5],s[5]=X?lf(X,B,l[6]):B,s[6]=X?Pr(s[5],p):l[6]),B=l[7],B&&(s[7]=B),C&F&&(s[8]=s[8]==null?l[8]:rn(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=w,s}function GE(s){var l=[];if(s!=null)for(var f in It(s))l.push(f);return l}function ME(s){return js.call(s)}function Lf(s,l,f){return l=Pt(l===n?s.length-1:l,0),function(){for(var C=arguments,w=-1,R=Pt(C.length-l,0),G=Q(R);++w<R;)G[w]=C[l+w];w=-1;for(var B=Q(l+1);++w<l;)B[w]=C[w];return B[l]=f(G),yn(s,this,B)}}function Af(s,l){return l.length<2?s:fi(s,Wn(l,0,-1))}function UE(s,l){for(var f=s.length,C=rn(l.length,f),w=hn(s);C--;){var R=l[C];s[C]=Or(R,f)?w[R]:n}return s}function Lc(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var Nf=Rf(q_),zo=Qm||function(s,l){return Xt.setTimeout(s,l)},Ac=Rf(sE);function Sf(s,l,f){var C=l+"";return Ac(s,NE(C,FE(yE(C),f)))}function Rf(s){var l=0,f=0;return function(){var C=n1(),w=Ee-(C-f);if(f=C,w>0){if(++l>=te)return arguments[0]}else l=0;return s.apply(n,arguments)}}function pa(s,l){var f=-1,C=s.length,w=C-1;for(l=l===n?C:l;++f<l;){var R=cc(f,w),G=s[R];s[R]=s[f],s[f]=G}return s.length=l,s}var xf=DE(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(Av,function(f,C,w,R){l.push(w?R.replace(Gv,"$1"):C||f)}),l});function lr(s){if(typeof s=="string"||Nn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function hi(s){if(s!=null){try{return Ys.call(s)}catch{}try{return s+""}catch{}}return""}function FE(s,l){return $n(Mr,function(f){var C="_."+f[0];l&f[1]&&!Ps(s,C)&&s.push(C)}),s.sort()}function Tf(s){if(s instanceof st)return s.clone();var l=new Hn(s.__wrapped__,s.__chain__);return l.__actions__=hn(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function $E(s,l,f){(f?ln(s,l,f):l===n)?l=1:l=Pt(Je(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var w=0,R=0,G=Q(Qs(C/l));w<C;)G[R++]=Wn(s,w,w+=l);return G}function PE(s){for(var l=-1,f=s==null?0:s.length,C=0,w=[];++l<f;){var R=s[l];R&&(w[C++]=R)}return w}function HE(){var s=arguments.length;if(!s)return[];for(var l=Q(s-1),f=arguments[0],C=s;C--;)l[C-1]=arguments[C];return $r(qe(f)?hn(f):[f],qt(l,1))}var BE=tt(function(s,l){return Gt(s)?Fo(s,qt(l,1,Gt,!0)):[]}),WE=tt(function(s,l){var f=zn(l);return Gt(f)&&(f=n),Gt(s)?Fo(s,qt(l,1,Gt,!0),Pe(f,2)):[]}),zE=tt(function(s,l){var f=zn(l);return Gt(f)&&(f=n),Gt(s)?Fo(s,qt(l,1,Gt,!0),n,f):[]});function YE(s,l,f){var C=s==null?0:s.length;return C?(l=f||l===n?1:Je(l),Wn(s,l<0?0:l,C)):[]}function jE(s,l,f){var C=s==null?0:s.length;return C?(l=f||l===n?1:Je(l),l=C-l,Wn(s,0,l<0?0:l)):[]}function KE(s,l){return s&&s.length?la(s,Pe(l,3),!0,!0):[]}function VE(s,l){return s&&s.length?la(s,Pe(l,3),!0):[]}function XE(s,l,f,C){var w=s==null?0:s.length;return w?(f&&typeof f!="number"&&ln(s,l,f)&&(f=0,C=w),H1(s,l,f,C)):[]}function Df(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var w=f==null?0:Je(f);return w<0&&(w=Pt(C+w,0)),Hs(s,Pe(l,3),w)}function kf(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var w=C-1;return f!==n&&(w=Je(f),w=f<0?Pt(C+w,0):rn(w,C-1)),Hs(s,Pe(l,3),w,!0)}function Gf(s){var l=s==null?0:s.length;return l?qt(s,1):[]}function qE(s){var l=s==null?0:s.length;return l?qt(s,ze):[]}function ZE(s,l){var f=s==null?0:s.length;return f?(l=l===n?1:Je(l),qt(s,l)):[]}function QE(s){for(var l=-1,f=s==null?0:s.length,C={};++l<f;){var w=s[l];C[w[0]]=w[1]}return C}function Mf(s){return s&&s.length?s[0]:n}function JE(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var w=f==null?0:Je(f);return w<0&&(w=Pt(C+w,0)),Ui(s,l,w)}function e0(s){var l=s==null?0:s.length;return l?Wn(s,0,-1):[]}var t0=tt(function(s){var l=Rt(s,gc);return l.length&&l[0]===s[0]?ic(l):[]}),n0=tt(function(s){var l=zn(s),f=Rt(s,gc);return l===zn(f)?l=n:f.pop(),f.length&&f[0]===s[0]?ic(f,Pe(l,2)):[]}),r0=tt(function(s){var l=zn(s),f=Rt(s,gc);return l=typeof l=="function"?l:n,l&&f.pop(),f.length&&f[0]===s[0]?ic(f,n,l):[]});function i0(s,l){return s==null?"":e1.call(s,l)}function zn(s){var l=s==null?0:s.length;return l?s[l-1]:n}function o0(s,l,f){var C=s==null?0:s.length;if(!C)return-1;var w=C;return f!==n&&(w=Je(f),w=w<0?Pt(C+w,0):rn(w,C-1)),l===l?Fm(s,l,w):Hs(s,h_,w,!0)}function s0(s,l){return s&&s.length?j_(s,Je(l)):n}var a0=tt(Uf);function Uf(s,l){return s&&s.length&&l&&l.length?lc(s,l):s}function l0(s,l,f){return s&&s.length&&l&&l.length?lc(s,l,Pe(f,2)):s}function c0(s,l,f){return s&&s.length&&l&&l.length?lc(s,l,n,f):s}var u0=Cr(function(s,l){var f=s==null?0:s.length,C=ec(s,l);return X_(s,Rt(l,function(w){return Or(w,f)?+w:w}).sort(sf)),C});function d0(s,l){var f=[];if(!(s&&s.length))return f;var C=-1,w=[],R=s.length;for(l=Pe(l,3);++C<R;){var G=s[C];l(G,C,s)&&(f.push(G),w.push(C))}return X_(s,w),f}function Nc(s){return s==null?s:i1.call(s)}function _0(s,l,f){var C=s==null?0:s.length;return C?(f&&typeof f!="number"&&ln(s,l,f)?(l=0,f=C):(l=l==null?0:Je(l),f=f===n?C:Je(f)),Wn(s,l,f)):[]}function f0(s,l){return aa(s,l)}function g0(s,l,f){return dc(s,l,Pe(f,2))}function h0(s,l){var f=s==null?0:s.length;if(f){var C=aa(s,l);if(C<f&&er(s[C],l))return C}return-1}function p0(s,l){return aa(s,l,!0)}function v0(s,l,f){return dc(s,l,Pe(f,2),!0)}function m0(s,l){var f=s==null?0:s.length;if(f){var C=aa(s,l,!0)-1;if(er(s[C],l))return C}return-1}function E0(s){return s&&s.length?Z_(s):[]}function C0(s,l){return s&&s.length?Z_(s,Pe(l,2)):[]}function O0(s){var l=s==null?0:s.length;return l?Wn(s,1,l):[]}function I0(s,l,f){return s&&s.length?(l=f||l===n?1:Je(l),Wn(s,0,l<0?0:l)):[]}function b0(s,l,f){var C=s==null?0:s.length;return C?(l=f||l===n?1:Je(l),l=C-l,Wn(s,l<0?0:l,C)):[]}function w0(s,l){return s&&s.length?la(s,Pe(l,3),!1,!0):[]}function y0(s,l){return s&&s.length?la(s,Pe(l,3)):[]}var L0=tt(function(s){return Wr(qt(s,1,Gt,!0))}),A0=tt(function(s){var l=zn(s);return Gt(l)&&(l=n),Wr(qt(s,1,Gt,!0),Pe(l,2))}),N0=tt(function(s){var l=zn(s);return l=typeof l=="function"?l:n,Wr(qt(s,1,Gt,!0),n,l)});function S0(s){return s&&s.length?Wr(s):[]}function R0(s,l){return s&&s.length?Wr(s,Pe(l,2)):[]}function x0(s,l){return l=typeof l=="function"?l:n,s&&s.length?Wr(s,n,l):[]}function Sc(s){if(!(s&&s.length))return[];var l=0;return s=Fr(s,function(f){if(Gt(f))return l=Pt(f.length,l),!0}),jl(l,function(f){return Rt(s,Wl(f))})}function Ff(s,l){if(!(s&&s.length))return[];var f=Sc(s);return l==null?f:Rt(f,function(C){return yn(l,n,C)})}var T0=tt(function(s,l){return Gt(s)?Fo(s,l):[]}),D0=tt(function(s){return fc(Fr(s,Gt))}),k0=tt(function(s){var l=zn(s);return Gt(l)&&(l=n),fc(Fr(s,Gt),Pe(l,2))}),G0=tt(function(s){var l=zn(s);return l=typeof l=="function"?l:n,fc(Fr(s,Gt),n,l)}),M0=tt(Sc);function U0(s,l){return tf(s||[],l||[],Uo)}function F0(s,l){return tf(s||[],l||[],Ho)}var $0=tt(function(s){var l=s.length,f=l>1?s[l-1]:n;return f=typeof f=="function"?(s.pop(),f):n,Ff(s,f)});function $f(s){var l=L(s);return l.__chain__=!0,l}function P0(s,l){return l(s),s}function va(s,l){return l(s)}var H0=Cr(function(s){var l=s.length,f=l?s[0]:0,C=this.__wrapped__,w=function(R){return ec(R,s)};return l>1||this.__actions__.length||!(C instanceof st)||!Or(f)?this.thru(w):(C=C.slice(f,+f+(l?1:0)),C.__actions__.push({func:va,args:[w],thisArg:n}),new Hn(C,this.__chain__).thru(function(R){return l&&!R.length&&R.push(n),R}))});function B0(){return $f(this)}function W0(){return new Hn(this.value(),this.__chain__)}function z0(){this.__values__===n&&(this.__values__=Jf(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function Y0(){return this}function j0(s){for(var l,f=this;f instanceof na;){var C=Tf(f);C.__index__=0,C.__values__=n,l?w.__wrapped__=C:l=C;var w=C;f=f.__wrapped__}return w.__wrapped__=s,l}function K0(){var s=this.__wrapped__;if(s instanceof st){var l=s;return this.__actions__.length&&(l=new st(this)),l=l.reverse(),l.__actions__.push({func:va,args:[Nc],thisArg:n}),new Hn(l,this.__chain__)}return this.thru(Nc)}function V0(){return ef(this.__wrapped__,this.__actions__)}var X0=ca(function(s,l,f){mt.call(s,f)?++s[f]:mr(s,f,1)});function q0(s,l,f){var C=qe(s)?f_:P1;return f&&ln(s,l,f)&&(l=n),C(s,Pe(l,3))}function Z0(s,l){var f=qe(s)?Fr:U_;return f(s,Pe(l,3))}var Q0=_f(Df),J0=_f(kf);function eC(s,l){return qt(ma(s,l),1)}function tC(s,l){return qt(ma(s,l),ze)}function nC(s,l,f){return f=f===n?1:Je(f),qt(ma(s,l),f)}function Pf(s,l){var f=qe(s)?$n:Br;return f(s,Pe(l,3))}function Hf(s,l){var f=qe(s)?Om:M_;return f(s,Pe(l,3))}var rC=ca(function(s,l,f){mt.call(s,f)?s[f].push(l):mr(s,f,[l])});function iC(s,l,f,C){s=pn(s)?s:Xi(s),f=f&&!C?Je(f):0;var w=s.length;return f<0&&(f=Pt(w+f,0)),ba(s)?f<=w&&s.indexOf(l,f)>-1:!!w&&Ui(s,l,f)>-1}var oC=tt(function(s,l,f){var C=-1,w=typeof l=="function",R=pn(s)?Q(s.length):[];return Br(s,function(G){R[++C]=w?yn(l,G,f):$o(G,l,f)}),R}),sC=ca(function(s,l,f){mr(s,f,l)});function ma(s,l){var f=qe(s)?Rt:W_;return f(s,Pe(l,3))}function aC(s,l,f,C){return s==null?[]:(qe(l)||(l=l==null?[]:[l]),f=C?n:f,qe(f)||(f=f==null?[]:[f]),K_(s,l,f))}var lC=ca(function(s,l,f){s[f?0:1].push(l)},function(){return[[],[]]});function cC(s,l,f){var C=qe(s)?Hl:v_,w=arguments.length<3;return C(s,Pe(l,4),f,w,Br)}function uC(s,l,f){var C=qe(s)?Im:v_,w=arguments.length<3;return C(s,Pe(l,4),f,w,M_)}function dC(s,l){var f=qe(s)?Fr:U_;return f(s,Oa(Pe(l,3)))}function _C(s){var l=qe(s)?T_:iE;return l(s)}function fC(s,l,f){(f?ln(s,l,f):l===n)?l=1:l=Je(l);var C=qe(s)?G1:oE;return C(s,l)}function gC(s){var l=qe(s)?M1:aE;return l(s)}function hC(s){if(s==null)return 0;if(pn(s))return ba(s)?$i(s):s.length;var l=on(s);return l==be||l==Zn?s.size:sc(s).length}function pC(s,l,f){var C=qe(s)?Bl:lE;return f&&ln(s,l,f)&&(l=n),C(s,Pe(l,3))}var vC=tt(function(s,l){if(s==null)return[];var f=l.length;return f>1&&ln(s,l[0],l[1])?l=[]:f>2&&ln(l[0],l[1],l[2])&&(l=[l[0]]),K_(s,qt(l,1),[])}),Ea=Zm||function(){return Xt.Date.now()};function mC(s,l){if(typeof l!="function")throw new Pn(a);return s=Je(s),function(){if(--s<1)return l.apply(this,arguments)}}function Bf(s,l,f){return l=f?n:l,l=s&&l==null?s.length:l,Er(s,F,n,n,n,n,l)}function Wf(s,l){var f;if(typeof l!="function")throw new Pn(a);return s=Je(s),function(){return--s>0&&(f=l.apply(this,arguments)),s<=1&&(l=n),f}}var Rc=tt(function(s,l,f){var C=I;if(f.length){var w=Pr(f,Ki(Rc));C|=W}return Er(s,C,l,f,w)}),zf=tt(function(s,l,f){var C=I|b;if(f.length){var w=Pr(f,Ki(zf));C|=W}return Er(l,C,s,f,w)});function Yf(s,l,f){l=f?n:l;var C=Er(s,D,n,n,n,n,n,l);return C.placeholder=Yf.placeholder,C}function jf(s,l,f){l=f?n:l;var C=Er(s,M,n,n,n,n,n,l);return C.placeholder=jf.placeholder,C}function Kf(s,l,f){var C,w,R,G,B,X,se=0,ce=!1,_e=!1,ye=!0;if(typeof s!="function")throw new Pn(a);l=Yn(l)||0,Tt(f)&&(ce=!!f.leading,_e="maxWait"in f,R=_e?Pt(Yn(f.maxWait)||0,l):R,ye="trailing"in f?!!f.trailing:ye);function Ge(Mt){var tr=C,wr=w;return C=w=n,se=Mt,G=s.apply(wr,tr),G}function He(Mt){return se=Mt,B=zo(it,l),ce?Ge(Mt):G}function et(Mt){var tr=Mt-X,wr=Mt-se,_g=l-tr;return _e?rn(_g,R-wr):_g}function Be(Mt){var tr=Mt-X,wr=Mt-se;return X===n||tr>=l||tr<0||_e&&wr>=R}function it(){var Mt=Ea();if(Be(Mt))return ct(Mt);B=zo(it,et(Mt))}function ct(Mt){return B=n,ye&&C?Ge(Mt):(C=w=n,G)}function Sn(){B!==n&&nf(B),se=0,C=X=w=B=n}function cn(){return B===n?G:ct(Ea())}function Rn(){var Mt=Ea(),tr=Be(Mt);if(C=arguments,w=this,X=Mt,tr){if(B===n)return He(X);if(_e)return nf(B),B=zo(it,l),Ge(X)}return B===n&&(B=zo(it,l)),G}return Rn.cancel=Sn,Rn.flush=cn,Rn}var EC=tt(function(s,l){return G_(s,1,l)}),CC=tt(function(s,l,f){return G_(s,Yn(l)||0,f)});function OC(s){return Er(s,J)}function Ca(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new Pn(a);var f=function(){var C=arguments,w=l?l.apply(this,C):C[0],R=f.cache;if(R.has(w))return R.get(w);var G=s.apply(this,C);return f.cache=R.set(w,G)||R,G};return f.cache=new(Ca.Cache||vr),f}Ca.Cache=vr;function Oa(s){if(typeof s!="function")throw new Pn(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function IC(s){return Wf(2,s)}var bC=cE(function(s,l){l=l.length==1&&qe(l[0])?Rt(l[0],Ln(Pe())):Rt(qt(l,1),Ln(Pe()));var f=l.length;return tt(function(C){for(var w=-1,R=rn(C.length,f);++w<R;)C[w]=l[w].call(this,C[w]);return yn(s,this,C)})}),xc=tt(function(s,l){var f=Pr(l,Ki(xc));return Er(s,W,n,l,f)}),Vf=tt(function(s,l){var f=Pr(l,Ki(Vf));return Er(s,j,n,l,f)}),wC=Cr(function(s,l){return Er(s,q,n,n,n,l)});function yC(s,l){if(typeof s!="function")throw new Pn(a);return l=l===n?l:Je(l),tt(s,l)}function LC(s,l){if(typeof s!="function")throw new Pn(a);return l=l==null?0:Pt(Je(l),0),tt(function(f){var C=f[l],w=Yr(f,0,l);return C&&$r(w,C),yn(s,this,w)})}function AC(s,l,f){var C=!0,w=!0;if(typeof s!="function")throw new Pn(a);return Tt(f)&&(C="leading"in f?!!f.leading:C,w="trailing"in f?!!f.trailing:w),Kf(s,l,{leading:C,maxWait:l,trailing:w})}function NC(s){return Bf(s,1)}function SC(s,l){return xc(hc(l),s)}function RC(){if(!arguments.length)return[];var s=arguments[0];return qe(s)?s:[s]}function xC(s){return Bn(s,m)}function TC(s,l){return l=typeof l=="function"?l:n,Bn(s,m,l)}function DC(s){return Bn(s,g|m)}function kC(s,l){return l=typeof l=="function"?l:n,Bn(s,g|m,l)}function GC(s,l){return l==null||k_(s,l,Yt(l))}function er(s,l){return s===l||s!==s&&l!==l}var MC=fa(rc),UC=fa(function(s,l){return s>=l}),pi=P_(function(){return arguments}())?P_:function(s){return kt(s)&&mt.call(s,"callee")&&!L_.call(s,"callee")},qe=Q.isArray,FC=a_?Ln(a_):j1;function pn(s){return s!=null&&Ia(s.length)&&!Ir(s)}function Gt(s){return kt(s)&&pn(s)}function $C(s){return s===!0||s===!1||kt(s)&&an(s)==or}var jr=Jm||Bc,PC=l_?Ln(l_):K1;function HC(s){return kt(s)&&s.nodeType===1&&!Yo(s)}function BC(s){if(s==null)return!0;if(pn(s)&&(qe(s)||typeof s=="string"||typeof s.splice=="function"||jr(s)||Vi(s)||pi(s)))return!s.length;var l=on(s);if(l==be||l==Zn)return!s.size;if(Wo(s))return!sc(s).length;for(var f in s)if(mt.call(s,f))return!1;return!0}function WC(s,l){return Po(s,l)}function zC(s,l,f){f=typeof f=="function"?f:n;var C=f?f(s,l):n;return C===n?Po(s,l,n,f):!!C}function Tc(s){if(!kt(s))return!1;var l=an(s);return l==Ur||l==ki||typeof s.message=="string"&&typeof s.name=="string"&&!Yo(s)}function YC(s){return typeof s=="number"&&N_(s)}function Ir(s){if(!Tt(s))return!1;var l=an(s);return l==Dt||l==De||l==si||l==Ol}function Xf(s){return typeof s=="number"&&s==Je(s)}function Ia(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Ae}function Tt(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function kt(s){return s!=null&&typeof s=="object"}var qf=c_?Ln(c_):X1;function jC(s,l){return s===l||oc(s,l,Ic(l))}function KC(s,l,f){return f=typeof f=="function"?f:n,oc(s,l,Ic(l),f)}function VC(s){return Zf(s)&&s!=+s}function XC(s){if(TE(s))throw new Ve(o);return H_(s)}function qC(s){return s===null}function ZC(s){return s==null}function Zf(s){return typeof s=="number"||kt(s)&&an(s)==ke}function Yo(s){if(!kt(s)||an(s)!=Nt)return!1;var l=Xs(s);if(l===null)return!0;var f=mt.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&Ys.call(f)==Km}var Dc=u_?Ln(u_):q1;function QC(s){return Xf(s)&&s>=-9007199254740991&&s<=Ae}var Qf=d_?Ln(d_):Z1;function ba(s){return typeof s=="string"||!qe(s)&&kt(s)&&an(s)==No}function Nn(s){return typeof s=="symbol"||kt(s)&&an(s)==Ms}var Vi=__?Ln(__):Q1;function JC(s){return s===n}function eO(s){return kt(s)&&on(s)==So}function tO(s){return kt(s)&&an(s)==vv}var nO=fa(ac),rO=fa(function(s,l){return s<=l});function Jf(s){if(!s)return[];if(pn(s))return ba(s)?Qn(s):hn(s);if(To&&s[To])return Gm(s[To]());var l=on(s),f=l==be?Vl:l==Zn?Bs:Xi;return f(s)}function br(s){if(!s)return s===0?s:0;if(s=Yn(s),s===ze||s===-1/0){var l=s<0?-1:1;return l*Le}return s===s?s:0}function Je(s){var l=br(s),f=l%1;return l===l?f?l-f:l:0}function eg(s){return s?_i(Je(s),0,Ye):0}function Yn(s){if(typeof s=="number")return s;if(Nn(s))return rt;if(Tt(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=Tt(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=m_(s);var f=Fv.test(s);return f||Pv.test(s)?mm(s.slice(2),f?2:8):Uv.test(s)?rt:+s}function tg(s){return ar(s,vn(s))}function iO(s){return s?_i(Je(s),-9007199254740991,Ae):s===0?s:0}function pt(s){return s==null?"":An(s)}var oO=Yi(function(s,l){if(Wo(l)||pn(l)){ar(l,Yt(l),s);return}for(var f in l)mt.call(l,f)&&Uo(s,f,l[f])}),ng=Yi(function(s,l){ar(l,vn(l),s)}),wa=Yi(function(s,l,f,C){ar(l,vn(l),s,C)}),sO=Yi(function(s,l,f,C){ar(l,Yt(l),s,C)}),aO=Cr(ec);function lO(s,l){var f=zi(s);return l==null?f:D_(f,l)}var cO=tt(function(s,l){s=It(s);var f=-1,C=l.length,w=C>2?l[2]:n;for(w&&ln(l[0],l[1],w)&&(C=1);++f<C;)for(var R=l[f],G=vn(R),B=-1,X=G.length;++B<X;){var se=G[B],ce=s[se];(ce===n||er(ce,Hi[se])&&!mt.call(s,se))&&(s[se]=R[se])}return s}),uO=tt(function(s){return s.push(n,Ef),yn(rg,n,s)});function dO(s,l){return g_(s,Pe(l,3),sr)}function _O(s,l){return g_(s,Pe(l,3),nc)}function fO(s,l){return s==null?s:tc(s,Pe(l,3),vn)}function gO(s,l){return s==null?s:F_(s,Pe(l,3),vn)}function hO(s,l){return s&&sr(s,Pe(l,3))}function pO(s,l){return s&&nc(s,Pe(l,3))}function vO(s){return s==null?[]:oa(s,Yt(s))}function mO(s){return s==null?[]:oa(s,vn(s))}function kc(s,l,f){var C=s==null?n:fi(s,l);return C===n?f:C}function EO(s,l){return s!=null&&If(s,l,B1)}function Gc(s,l){return s!=null&&If(s,l,W1)}var CO=gf(function(s,l,f){l!=null&&typeof l.toString!="function"&&(l=js.call(l)),s[l]=f},Uc(mn)),OO=gf(function(s,l,f){l!=null&&typeof l.toString!="function"&&(l=js.call(l)),mt.call(s,l)?s[l].push(f):s[l]=[f]},Pe),IO=tt($o);function Yt(s){return pn(s)?x_(s):sc(s)}function vn(s){return pn(s)?x_(s,!0):J1(s)}function bO(s,l){var f={};return l=Pe(l,3),sr(s,function(C,w,R){mr(f,l(C,w,R),C)}),f}function wO(s,l){var f={};return l=Pe(l,3),sr(s,function(C,w,R){mr(f,w,l(C,w,R))}),f}var yO=Yi(function(s,l,f){sa(s,l,f)}),rg=Yi(function(s,l,f,C){sa(s,l,f,C)}),LO=Cr(function(s,l){var f={};if(s==null)return f;var C=!1;l=Rt(l,function(R){return R=zr(R,s),C||(C=R.length>1),R}),ar(s,Cc(s),f),C&&(f=Bn(f,g|v|m,CE));for(var w=l.length;w--;)_c(f,l[w]);return f});function AO(s,l){return ig(s,Oa(Pe(l)))}var NO=Cr(function(s,l){return s==null?{}:tE(s,l)});function ig(s,l){if(s==null)return{};var f=Rt(Cc(s),function(C){return[C]});return l=Pe(l),V_(s,f,function(C,w){return l(C,w[0])})}function SO(s,l,f){l=zr(l,s);var C=-1,w=l.length;for(w||(w=1,s=n);++C<w;){var R=s==null?n:s[lr(l[C])];R===n&&(C=w,R=f),s=Ir(R)?R.call(s):R}return s}function RO(s,l,f){return s==null?s:Ho(s,l,f)}function xO(s,l,f,C){return C=typeof C=="function"?C:n,s==null?s:Ho(s,l,f,C)}var og=vf(Yt),sg=vf(vn);function TO(s,l,f){var C=qe(s),w=C||jr(s)||Vi(s);if(l=Pe(l,4),f==null){var R=s&&s.constructor;w?f=C?new R:[]:Tt(s)?f=Ir(R)?zi(Xs(s)):{}:f={}}return(w?$n:sr)(s,function(G,B,X){return l(f,G,B,X)}),f}function DO(s,l){return s==null?!0:_c(s,l)}function kO(s,l,f){return s==null?s:J_(s,l,hc(f))}function GO(s,l,f,C){return C=typeof C=="function"?C:n,s==null?s:J_(s,l,hc(f),C)}function Xi(s){return s==null?[]:Kl(s,Yt(s))}function MO(s){return s==null?[]:Kl(s,vn(s))}function UO(s,l,f){return f===n&&(f=l,l=n),f!==n&&(f=Yn(f),f=f===f?f:0),l!==n&&(l=Yn(l),l=l===l?l:0),_i(Yn(s),l,f)}function FO(s,l,f){return l=br(l),f===n?(f=l,l=0):f=br(f),s=Yn(s),z1(s,l,f)}function $O(s,l,f){if(f&&typeof f!="boolean"&&ln(s,l,f)&&(l=f=n),f===n&&(typeof l=="boolean"?(f=l,l=n):typeof s=="boolean"&&(f=s,s=n)),s===n&&l===n?(s=0,l=1):(s=br(s),l===n?(l=s,s=0):l=br(l)),s>l){var C=s;s=l,l=C}if(f||s%1||l%1){var w=S_();return rn(s+w*(l-s+vm("1e-"+((w+"").length-1))),l)}return cc(s,l)}var PO=ji(function(s,l,f){return l=l.toLowerCase(),s+(f?ag(l):l)});function ag(s){return Mc(pt(s).toLowerCase())}function lg(s){return s=pt(s),s&&s.replace(Bv,Rm).replace(am,"")}function HO(s,l,f){s=pt(s),l=An(l);var C=s.length;f=f===n?C:_i(Je(f),0,C);var w=f;return f-=l.length,f>=0&&s.slice(f,w)==l}function BO(s){return s=pt(s),s&&Iv.test(s)?s.replace(Fd,xm):s}function WO(s){return s=pt(s),s&&Nv.test(s)?s.replace(xl,"\\$&"):s}var zO=ji(function(s,l,f){return s+(f?"-":"")+l.toLowerCase()}),YO=ji(function(s,l,f){return s+(f?" ":"")+l.toLowerCase()}),jO=df("toLowerCase");function KO(s,l,f){s=pt(s),l=Je(l);var C=l?$i(s):0;if(!l||C>=l)return s;var w=(l-C)/2;return _a(Js(w),f)+s+_a(Qs(w),f)}function VO(s,l,f){s=pt(s),l=Je(l);var C=l?$i(s):0;return l&&C<l?s+_a(l-C,f):s}function XO(s,l,f){s=pt(s),l=Je(l);var C=l?$i(s):0;return l&&C<l?_a(l-C,f)+s:s}function qO(s,l,f){return f||l==null?l=0:l&&(l=+l),r1(pt(s).replace(Tl,""),l||0)}function ZO(s,l,f){return(f?ln(s,l,f):l===n)?l=1:l=Je(l),uc(pt(s),l)}function QO(){var s=arguments,l=pt(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var JO=ji(function(s,l,f){return s+(f?"_":"")+l.toLowerCase()});function eI(s,l,f){return f&&typeof f!="number"&&ln(s,l,f)&&(l=f=n),f=f===n?Ye:f>>>0,f?(s=pt(s),s&&(typeof l=="string"||l!=null&&!Dc(l))&&(l=An(l),!l&&Fi(s))?Yr(Qn(s),0,f):s.split(l,f)):[]}var tI=ji(function(s,l,f){return s+(f?" ":"")+Mc(l)});function nI(s,l,f){return s=pt(s),f=f==null?0:_i(Je(f),0,s.length),l=An(l),s.slice(f,f+l.length)==l}function rI(s,l,f){var C=L.templateSettings;f&&ln(s,l,f)&&(l=n),s=pt(s),l=wa({},l,C,mf);var w=wa({},l.imports,C.imports,mf),R=Yt(w),G=Kl(w,R),B,X,se=0,ce=l.interpolate||Us,_e="__p += '",ye=Xl((l.escape||Us).source+"|"+ce.source+"|"+(ce===$d?Mv:Us).source+"|"+(l.evaluate||Us).source+"|$","g"),Ge="//# sourceURL="+(mt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++_m+"]")+`
`;s.replace(ye,function(Be,it,ct,Sn,cn,Rn){return ct||(ct=Sn),_e+=s.slice(se,Rn).replace(Wv,Tm),it&&(B=!0,_e+=`' +
__e(`+it+`) +
'`),cn&&(X=!0,_e+=`';
`+cn+`;
__p += '`),ct&&(_e+=`' +
((__t = (`+ct+`)) == null ? '' : __t) +
'`),se=Rn+Be.length,Be}),_e+=`';
`;var He=mt.call(l,"variable")&&l.variable;if(!He)_e=`with (obj) {
`+_e+`
}
`;else if(kv.test(He))throw new Ve(c);_e=(X?_e.replace(mv,""):_e).replace(Ev,"$1").replace(Cv,"$1;"),_e="function("+(He||"obj")+`) {
`+(He?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var et=ug(function(){return ht(R,Ge+"return "+_e).apply(n,G)});if(et.source=_e,Tc(et))throw et;return et}function iI(s){return pt(s).toLowerCase()}function oI(s){return pt(s).toUpperCase()}function sI(s,l,f){if(s=pt(s),s&&(f||l===n))return m_(s);if(!s||!(l=An(l)))return s;var C=Qn(s),w=Qn(l),R=E_(C,w),G=C_(C,w)+1;return Yr(C,R,G).join("")}function aI(s,l,f){if(s=pt(s),s&&(f||l===n))return s.slice(0,I_(s)+1);if(!s||!(l=An(l)))return s;var C=Qn(s),w=C_(C,Qn(l))+1;return Yr(C,0,w).join("")}function lI(s,l,f){if(s=pt(s),s&&(f||l===n))return s.replace(Tl,"");if(!s||!(l=An(l)))return s;var C=Qn(s),w=E_(C,Qn(l));return Yr(C,w).join("")}function cI(s,l){var f=oe,C=re;if(Tt(l)){var w="separator"in l?l.separator:w;f="length"in l?Je(l.length):f,C="omission"in l?An(l.omission):C}s=pt(s);var R=s.length;if(Fi(s)){var G=Qn(s);R=G.length}if(f>=R)return s;var B=f-$i(C);if(B<1)return C;var X=G?Yr(G,0,B).join(""):s.slice(0,B);if(w===n)return X+C;if(G&&(B+=X.length-B),Dc(w)){if(s.slice(B).search(w)){var se,ce=X;for(w.global||(w=Xl(w.source,pt(Pd.exec(w))+"g")),w.lastIndex=0;se=w.exec(ce);)var _e=se.index;X=X.slice(0,_e===n?B:_e)}}else if(s.indexOf(An(w),B)!=B){var ye=X.lastIndexOf(w);ye>-1&&(X=X.slice(0,ye))}return X+C}function uI(s){return s=pt(s),s&&Ov.test(s)?s.replace(Ud,$m):s}var dI=ji(function(s,l,f){return s+(f?" ":"")+l.toUpperCase()}),Mc=df("toUpperCase");function cg(s,l,f){return s=pt(s),l=f?n:l,l===n?km(s)?Bm(s):ym(s):s.match(l)||[]}var ug=tt(function(s,l){try{return yn(s,n,l)}catch(f){return Tc(f)?f:new Ve(f)}}),_I=Cr(function(s,l){return $n(l,function(f){f=lr(f),mr(s,f,Rc(s[f],s))}),s});function fI(s){var l=s==null?0:s.length,f=Pe();return s=l?Rt(s,function(C){if(typeof C[1]!="function")throw new Pn(a);return[f(C[0]),C[1]]}):[],tt(function(C){for(var w=-1;++w<l;){var R=s[w];if(yn(R[0],this,C))return yn(R[1],this,C)}})}function gI(s){return $1(Bn(s,g))}function Uc(s){return function(){return s}}function hI(s,l){return s==null||s!==s?l:s}var pI=ff(),vI=ff(!0);function mn(s){return s}function Fc(s){return B_(typeof s=="function"?s:Bn(s,g))}function mI(s){return z_(Bn(s,g))}function EI(s,l){return Y_(s,Bn(l,g))}var CI=tt(function(s,l){return function(f){return $o(f,s,l)}}),OI=tt(function(s,l){return function(f){return $o(s,f,l)}});function $c(s,l,f){var C=Yt(l),w=oa(l,C);f==null&&!(Tt(l)&&(w.length||!C.length))&&(f=l,l=s,s=this,w=oa(l,Yt(l)));var R=!(Tt(f)&&"chain"in f)||!!f.chain,G=Ir(s);return $n(w,function(B){var X=l[B];s[B]=X,G&&(s.prototype[B]=function(){var se=this.__chain__;if(R||se){var ce=s(this.__wrapped__),_e=ce.__actions__=hn(this.__actions__);return _e.push({func:X,args:arguments,thisArg:s}),ce.__chain__=se,ce}return X.apply(s,$r([this.value()],arguments))})}),s}function II(){return Xt._===this&&(Xt._=Vm),this}function Pc(){}function bI(s){return s=Je(s),tt(function(l){return j_(l,s)})}var wI=vc(Rt),yI=vc(f_),LI=vc(Bl);function dg(s){return wc(s)?Wl(lr(s)):nE(s)}function AI(s){return function(l){return s==null?n:fi(s,l)}}var NI=hf(),SI=hf(!0);function Hc(){return[]}function Bc(){return!1}function RI(){return{}}function xI(){return""}function TI(){return!0}function DI(s,l){if(s=Je(s),s<1||s>Ae)return[];var f=Ye,C=rn(s,Ye);l=Pe(l),s-=Ye;for(var w=jl(C,l);++f<s;)l(f);return w}function kI(s){return qe(s)?Rt(s,lr):Nn(s)?[s]:hn(xf(pt(s)))}function GI(s){var l=++jm;return pt(s)+l}var MI=da(function(s,l){return s+l},0),UI=mc("ceil"),FI=da(function(s,l){return s/l},1),$I=mc("floor");function PI(s){return s&&s.length?ia(s,mn,rc):n}function HI(s,l){return s&&s.length?ia(s,Pe(l,2),rc):n}function BI(s){return p_(s,mn)}function WI(s,l){return p_(s,Pe(l,2))}function zI(s){return s&&s.length?ia(s,mn,ac):n}function YI(s,l){return s&&s.length?ia(s,Pe(l,2),ac):n}var jI=da(function(s,l){return s*l},1),KI=mc("round"),VI=da(function(s,l){return s-l},0);function XI(s){return s&&s.length?Yl(s,mn):0}function qI(s,l){return s&&s.length?Yl(s,Pe(l,2)):0}return L.after=mC,L.ary=Bf,L.assign=oO,L.assignIn=ng,L.assignInWith=wa,L.assignWith=sO,L.at=aO,L.before=Wf,L.bind=Rc,L.bindAll=_I,L.bindKey=zf,L.castArray=RC,L.chain=$f,L.chunk=$E,L.compact=PE,L.concat=HE,L.cond=fI,L.conforms=gI,L.constant=Uc,L.countBy=X0,L.create=lO,L.curry=Yf,L.curryRight=jf,L.debounce=Kf,L.defaults=cO,L.defaultsDeep=uO,L.defer=EC,L.delay=CC,L.difference=BE,L.differenceBy=WE,L.differenceWith=zE,L.drop=YE,L.dropRight=jE,L.dropRightWhile=KE,L.dropWhile=VE,L.fill=XE,L.filter=Z0,L.flatMap=eC,L.flatMapDeep=tC,L.flatMapDepth=nC,L.flatten=Gf,L.flattenDeep=qE,L.flattenDepth=ZE,L.flip=OC,L.flow=pI,L.flowRight=vI,L.fromPairs=QE,L.functions=vO,L.functionsIn=mO,L.groupBy=rC,L.initial=e0,L.intersection=t0,L.intersectionBy=n0,L.intersectionWith=r0,L.invert=CO,L.invertBy=OO,L.invokeMap=oC,L.iteratee=Fc,L.keyBy=sC,L.keys=Yt,L.keysIn=vn,L.map=ma,L.mapKeys=bO,L.mapValues=wO,L.matches=mI,L.matchesProperty=EI,L.memoize=Ca,L.merge=yO,L.mergeWith=rg,L.method=CI,L.methodOf=OI,L.mixin=$c,L.negate=Oa,L.nthArg=bI,L.omit=LO,L.omitBy=AO,L.once=IC,L.orderBy=aC,L.over=wI,L.overArgs=bC,L.overEvery=yI,L.overSome=LI,L.partial=xc,L.partialRight=Vf,L.partition=lC,L.pick=NO,L.pickBy=ig,L.property=dg,L.propertyOf=AI,L.pull=a0,L.pullAll=Uf,L.pullAllBy=l0,L.pullAllWith=c0,L.pullAt=u0,L.range=NI,L.rangeRight=SI,L.rearg=wC,L.reject=dC,L.remove=d0,L.rest=yC,L.reverse=Nc,L.sampleSize=fC,L.set=RO,L.setWith=xO,L.shuffle=gC,L.slice=_0,L.sortBy=vC,L.sortedUniq=E0,L.sortedUniqBy=C0,L.split=eI,L.spread=LC,L.tail=O0,L.take=I0,L.takeRight=b0,L.takeRightWhile=w0,L.takeWhile=y0,L.tap=P0,L.throttle=AC,L.thru=va,L.toArray=Jf,L.toPairs=og,L.toPairsIn=sg,L.toPath=kI,L.toPlainObject=tg,L.transform=TO,L.unary=NC,L.union=L0,L.unionBy=A0,L.unionWith=N0,L.uniq=S0,L.uniqBy=R0,L.uniqWith=x0,L.unset=DO,L.unzip=Sc,L.unzipWith=Ff,L.update=kO,L.updateWith=GO,L.values=Xi,L.valuesIn=MO,L.without=T0,L.words=cg,L.wrap=SC,L.xor=D0,L.xorBy=k0,L.xorWith=G0,L.zip=M0,L.zipObject=U0,L.zipObjectDeep=F0,L.zipWith=$0,L.entries=og,L.entriesIn=sg,L.extend=ng,L.extendWith=wa,$c(L,L),L.add=MI,L.attempt=ug,L.camelCase=PO,L.capitalize=ag,L.ceil=UI,L.clamp=UO,L.clone=xC,L.cloneDeep=DC,L.cloneDeepWith=kC,L.cloneWith=TC,L.conformsTo=GC,L.deburr=lg,L.defaultTo=hI,L.divide=FI,L.endsWith=HO,L.eq=er,L.escape=BO,L.escapeRegExp=WO,L.every=q0,L.find=Q0,L.findIndex=Df,L.findKey=dO,L.findLast=J0,L.findLastIndex=kf,L.findLastKey=_O,L.floor=$I,L.forEach=Pf,L.forEachRight=Hf,L.forIn=fO,L.forInRight=gO,L.forOwn=hO,L.forOwnRight=pO,L.get=kc,L.gt=MC,L.gte=UC,L.has=EO,L.hasIn=Gc,L.head=Mf,L.identity=mn,L.includes=iC,L.indexOf=JE,L.inRange=FO,L.invoke=IO,L.isArguments=pi,L.isArray=qe,L.isArrayBuffer=FC,L.isArrayLike=pn,L.isArrayLikeObject=Gt,L.isBoolean=$C,L.isBuffer=jr,L.isDate=PC,L.isElement=HC,L.isEmpty=BC,L.isEqual=WC,L.isEqualWith=zC,L.isError=Tc,L.isFinite=YC,L.isFunction=Ir,L.isInteger=Xf,L.isLength=Ia,L.isMap=qf,L.isMatch=jC,L.isMatchWith=KC,L.isNaN=VC,L.isNative=XC,L.isNil=ZC,L.isNull=qC,L.isNumber=Zf,L.isObject=Tt,L.isObjectLike=kt,L.isPlainObject=Yo,L.isRegExp=Dc,L.isSafeInteger=QC,L.isSet=Qf,L.isString=ba,L.isSymbol=Nn,L.isTypedArray=Vi,L.isUndefined=JC,L.isWeakMap=eO,L.isWeakSet=tO,L.join=i0,L.kebabCase=zO,L.last=zn,L.lastIndexOf=o0,L.lowerCase=YO,L.lowerFirst=jO,L.lt=nO,L.lte=rO,L.max=PI,L.maxBy=HI,L.mean=BI,L.meanBy=WI,L.min=zI,L.minBy=YI,L.stubArray=Hc,L.stubFalse=Bc,L.stubObject=RI,L.stubString=xI,L.stubTrue=TI,L.multiply=jI,L.nth=s0,L.noConflict=II,L.noop=Pc,L.now=Ea,L.pad=KO,L.padEnd=VO,L.padStart=XO,L.parseInt=qO,L.random=$O,L.reduce=cC,L.reduceRight=uC,L.repeat=ZO,L.replace=QO,L.result=SO,L.round=KI,L.runInContext=K,L.sample=_C,L.size=hC,L.snakeCase=JO,L.some=pC,L.sortedIndex=f0,L.sortedIndexBy=g0,L.sortedIndexOf=h0,L.sortedLastIndex=p0,L.sortedLastIndexBy=v0,L.sortedLastIndexOf=m0,L.startCase=tI,L.startsWith=nI,L.subtract=VI,L.sum=XI,L.sumBy=qI,L.template=rI,L.times=DI,L.toFinite=br,L.toInteger=Je,L.toLength=eg,L.toLower=iI,L.toNumber=Yn,L.toSafeInteger=iO,L.toString=pt,L.toUpper=oI,L.trim=sI,L.trimEnd=aI,L.trimStart=lI,L.truncate=cI,L.unescape=uI,L.uniqueId=GI,L.upperCase=dI,L.upperFirst=Mc,L.each=Pf,L.eachRight=Hf,L.first=Mf,$c(L,function(){var s={};return sr(L,function(l,f){mt.call(L.prototype,f)||(s[f]=l)}),s}(),{chain:!1}),L.VERSION=r,$n(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){L[s].placeholder=L}),$n(["drop","take"],function(s,l){st.prototype[s]=function(f){f=f===n?1:Pt(Je(f),0);var C=this.__filtered__&&!l?new st(this):this.clone();return C.__filtered__?C.__takeCount__=rn(f,C.__takeCount__):C.__views__.push({size:rn(f,Ye),type:s+(C.__dir__<0?"Right":"")}),C},st.prototype[s+"Right"]=function(f){return this.reverse()[s](f).reverse()}}),$n(["filter","map","takeWhile"],function(s,l){var f=l+1,C=f==Oe||f==$e;st.prototype[s]=function(w){var R=this.clone();return R.__iteratees__.push({iteratee:Pe(w,3),type:f}),R.__filtered__=R.__filtered__||C,R}}),$n(["head","last"],function(s,l){var f="take"+(l?"Right":"");st.prototype[s]=function(){return this[f](1).value()[0]}}),$n(["initial","tail"],function(s,l){var f="drop"+(l?"":"Right");st.prototype[s]=function(){return this.__filtered__?new st(this):this[f](1)}}),st.prototype.compact=function(){return this.filter(mn)},st.prototype.find=function(s){return this.filter(s).head()},st.prototype.findLast=function(s){return this.reverse().find(s)},st.prototype.invokeMap=tt(function(s,l){return typeof s=="function"?new st(this):this.map(function(f){return $o(f,s,l)})}),st.prototype.reject=function(s){return this.filter(Oa(Pe(s)))},st.prototype.slice=function(s,l){s=Je(s);var f=this;return f.__filtered__&&(s>0||l<0)?new st(f):(s<0?f=f.takeRight(-s):s&&(f=f.drop(s)),l!==n&&(l=Je(l),f=l<0?f.dropRight(-l):f.take(l-s)),f)},st.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},st.prototype.toArray=function(){return this.take(Ye)},sr(st.prototype,function(s,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),w=L[C?"take"+(l=="last"?"Right":""):l],R=C||/^find/.test(l);w&&(L.prototype[l]=function(){var G=this.__wrapped__,B=C?[1]:arguments,X=G instanceof st,se=B[0],ce=X||qe(G),_e=function(it){var ct=w.apply(L,$r([it],B));return C&&ye?ct[0]:ct};ce&&f&&typeof se=="function"&&se.length!=1&&(X=ce=!1);var ye=this.__chain__,Ge=!!this.__actions__.length,He=R&&!ye,et=X&&!Ge;if(!R&&ce){G=et?G:new st(this);var Be=s.apply(G,B);return Be.__actions__.push({func:va,args:[_e],thisArg:n}),new Hn(Be,ye)}return He&&et?s.apply(this,B):(Be=this.thru(_e),He?C?Be.value()[0]:Be.value():Be)})}),$n(["pop","push","shift","sort","splice","unshift"],function(s){var l=Ws[s],f=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);L.prototype[s]=function(){var w=arguments;if(C&&!this.__chain__){var R=this.value();return l.apply(qe(R)?R:[],w)}return this[f](function(G){return l.apply(qe(G)?G:[],w)})}}),sr(st.prototype,function(s,l){var f=L[l];if(f){var C=f.name+"";mt.call(Wi,C)||(Wi[C]=[]),Wi[C].push({name:l,func:f})}}),Wi[ua(n,b).name]=[{name:"wrapper",func:n}],st.prototype.clone=u1,st.prototype.reverse=d1,st.prototype.value=_1,L.prototype.at=H0,L.prototype.chain=B0,L.prototype.commit=W0,L.prototype.next=z0,L.prototype.plant=j0,L.prototype.reverse=K0,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=V0,L.prototype.first=L.prototype.head,To&&(L.prototype[To]=Y0),L},Pi=Wm();li?((li.exports=Pi)._=Pi,Fl._=Pi):Xt._=Pi}).call(AR)}(Zo,Zo.exports)),Zo.exports}var bt=NR();function Lr(t){return Array.isArray?Array.isArray(t):Vh(t)==="[object Array]"}function SR(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function RR(t){return t==null?"":SR(t)}function dr(t){return typeof t=="string"}function jh(t){return typeof t=="number"}function xR(t){return t===!0||t===!1||TR(t)&&Vh(t)=="[object Boolean]"}function Kh(t){return typeof t=="object"}function TR(t){return Kh(t)&&t!==null}function Dn(t){return t!=null}function Vc(t){return!t.trim().length}function Vh(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const DR="Incorrect 'index' type",kR=t=>`Invalid value for key ${t}`,GR=t=>`Pattern length exceeds max of ${t}.`,MR=t=>`Missing ${t} property in key`,UR=t=>`Property 'weight' in key '${t}' must be a positive integer`,Eg=Object.prototype.hasOwnProperty;class FR{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Xh(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Xh(t){let e=null,n=null,r=null,i=1,o=null;if(dr(t)||Lr(t))r=t,e=Cg(t),n=cu(t);else{if(!Eg.call(t,"name"))throw new Error(MR("name"));const a=t.name;if(r=a,Eg.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(UR(a));e=Cg(a),n=cu(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function Cg(t){return Lr(t)?t:t.split(".")}function cu(t){return Lr(t)?t.join("."):t}function $R(t,e){let n=[],r=!1;const i=(o,a,c)=>{if(Dn(o))if(!a[c])n.push(o);else{let u=a[c];const _=o[u];if(!Dn(_))return;if(c===a.length-1&&(dr(_)||jh(_)||xR(_)))n.push(RR(_));else if(Lr(_)){r=!0;for(let p=0,g=_.length;p<g;p+=1)i(_[p],a,c+1)}else a.length&&i(_,a,c+1)}};return i(t,dr(e)?e.split("."):e,0),r?n:n[0]}const PR={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},HR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},BR={location:0,threshold:.6,distance:100},WR={useExtendedSearch:!1,getFn:$R,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var je={...HR,...PR,...BR,...WR};const zR=/[^ ]+/g;function YR(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(zR).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),c=parseFloat(Math.round(a*r)/r);return n.set(o,c),c},clear(){n.clear()}}}class sd{constructor({getFn:e=je.getFn,fieldNormWeight:n=je.fieldNormWeight}={}){this.norm=YR(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,dr(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();dr(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!Dn(e)||Vc(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Dn(a)){if(Lr(a)){let c=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:_,value:p}=u.pop();if(Dn(p))if(dr(p)&&!Vc(p)){let g={v:p,i:_,n:this.norm.get(p)};c.push(g)}else Lr(p)&&p.forEach((g,v)=>{u.push({nestedArrIndex:v,value:g})})}r.$[o]=c}else if(dr(a)&&!Vc(a)){let c={v:a,n:this.norm.get(a)};r.$[o]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function qh(t,e,{getFn:n=je.getFn,fieldNormWeight:r=je.fieldNormWeight}={}){const i=new sd({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Xh)),i.setSources(e),i.create(),i}function jR(t,{getFn:e=je.getFn,fieldNormWeight:n=je.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new sd({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function Aa(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=je.distance,ignoreLocation:o=je.ignoreLocation}={}){const a=e/t.length;if(o)return a;const c=Math.abs(r-n);return i?a+c/i:c?1:a}function KR(t=[],e=je.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let c=t[o];c&&r===-1?r=o:!c&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const mi=32;function VR(t,e,n,{location:r=je.location,distance:i=je.distance,threshold:o=je.threshold,findAllMatches:a=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,includeMatches:u=je.includeMatches,ignoreLocation:_=je.ignoreLocation}={}){if(e.length>mi)throw new Error(GR(mi));const p=e.length,g=t.length,v=Math.max(0,Math.min(r,g));let m=o,E=v;const O=c>1||u,I=O?Array(g):[];let b;for(;(b=t.indexOf(e,E))>-1;){let F=Aa(e,{currentLocation:b,expectedLocation:v,distance:i,ignoreLocation:_});if(m=Math.min(F,m),E=b+p,O){let q=0;for(;q<p;)I[b+q]=1,q+=1}}E=-1;let y=[],D=1,M=p+g;const W=1<<p-1;for(let F=0;F<p;F+=1){let q=0,J=M;for(;q<J;)Aa(e,{errors:F,currentLocation:v+J,expectedLocation:v,distance:i,ignoreLocation:_})<=m?q=J:M=J,J=Math.floor((M-q)/2+q);M=J;let oe=Math.max(1,v-J+1),re=a?g:Math.min(v+J,g)+p,te=Array(re+2);te[re+1]=(1<<F)-1;for(let Oe=re;Oe>=oe;Oe-=1){let he=Oe-1,$e=n[t.charAt(he)];if(O&&(I[he]=+!!$e),te[Oe]=(te[Oe+1]<<1|1)&$e,F&&(te[Oe]|=(y[Oe+1]|y[Oe])<<1|1|y[Oe+1]),te[Oe]&W&&(D=Aa(e,{errors:F,currentLocation:he,expectedLocation:v,distance:i,ignoreLocation:_}),D<=m)){if(m=D,E=he,E<=v)break;oe=Math.max(1,2*v-E)}}if(Aa(e,{errors:F+1,currentLocation:v,expectedLocation:v,distance:i,ignoreLocation:_})>m)break;y=te}const j={isMatch:E>=0,score:Math.max(.001,D)};if(O){const F=KR(I,c);F.length?u&&(j.indices=F):j.isMatch=!1}return j}function XR(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class Zh{constructor(e,{location:n=je.location,threshold:r=je.threshold,distance:i=je.distance,includeMatches:o=je.includeMatches,findAllMatches:a=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,isCaseSensitive:u=je.isCaseSensitive,ignoreLocation:_=je.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const p=(v,m)=>{this.chunks.push({pattern:v,alphabet:XR(v),startIndex:m})},g=this.pattern.length;if(g>mi){let v=0;const m=g%mi,E=g-m;for(;v<E;)p(this.pattern.substr(v,mi),v),v+=mi;if(m){const O=g-mi;p(this.pattern.substr(O),O)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let E={isMatch:!0,score:0};return r&&(E.indices=[[0,e.length-1]]),E}const{location:i,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:_}=this.options;let p=[],g=0,v=!1;this.chunks.forEach(({pattern:E,alphabet:O,startIndex:I})=>{const{isMatch:b,score:y,indices:D}=VR(e,E,O,{location:i+I,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:_});b&&(v=!0),g+=y,b&&D&&(p=[...p,...D])});let m={isMatch:v,score:v?g/this.chunks.length:1};return v&&r&&(m.indices=p),m}}class ri{constructor(e){this.pattern=e}static isMultiMatch(e){return Og(e,this.multiRegex)}static isSingleMatch(e){return Og(e,this.singleRegex)}search(){}}function Og(t,e){const n=t.match(e);return n?n[1]:null}class qR extends ri{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ZR extends ri{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class QR extends ri{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class JR extends ri{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ex extends ri{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class tx extends ri{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Qh extends ri{constructor(e,{location:n=je.location,threshold:r=je.threshold,distance:i=je.distance,includeMatches:o=je.includeMatches,findAllMatches:a=je.findAllMatches,minMatchCharLength:c=je.minMatchCharLength,isCaseSensitive:u=je.isCaseSensitive,ignoreLocation:_=je.ignoreLocation}={}){super(e),this._bitapSearch=new Zh(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:_})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Jh extends ri{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const uu=[qR,Jh,QR,JR,tx,ex,ZR,Qh],Ig=uu.length,nx=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,rx="|";function ix(t,e={}){return t.split(rx).map(n=>{let r=n.trim().split(nx).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const c=r[o];let u=!1,_=-1;for(;!u&&++_<Ig;){const p=uu[_];let g=p.isMultiMatch(c);g&&(i.push(new p(g,e)),u=!0)}if(!u)for(_=-1;++_<Ig;){const p=uu[_];let g=p.isSingleMatch(c);if(g){i.push(new p(g,e));break}}}return i})}const ox=new Set([Qh.type,Jh.type]);class sx{constructor(e,{isCaseSensitive:n=je.isCaseSensitive,includeMatches:r=je.includeMatches,minMatchCharLength:i=je.minMatchCharLength,ignoreLocation:o=je.ignoreLocation,findAllMatches:a=je.findAllMatches,location:c=je.location,threshold:u=je.threshold,distance:_=je.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:_},this.pattern=n?e:e.toLowerCase(),this.query=ix(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],c=0;for(let u=0,_=n.length;u<_;u+=1){const p=n[u];a.length=0,o=0;for(let g=0,v=p.length;g<v;g+=1){const m=p[g],{isMatch:E,indices:O,score:I}=m.search(e);if(E){if(o+=1,c+=I,r){const b=m.constructor.type;ox.has(b)?a=[...a,...O]:a.push(O)}}else{c=0,o=0,a.length=0;break}}if(o){let g={isMatch:!0,score:c/o};return r&&(g.indices=a),g}}return{isMatch:!1,score:1}}}const du=[];function ax(...t){du.push(...t)}function _u(t,e){for(let n=0,r=du.length;n<r;n+=1){let i=du[n];if(i.condition(t,e))return new i(t,e)}return new Zh(t,e)}const ka={AND:"$and",OR:"$or"},fu={PATH:"$path",PATTERN:"$val"},gu=t=>!!(t[ka.AND]||t[ka.OR]),lx=t=>!!t[fu.PATH],cx=t=>!Lr(t)&&Kh(t)&&!gu(t),bg=t=>({[ka.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ep(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=lx(i);if(!a&&o.length>1&&!gu(i))return r(bg(i));if(cx(i)){const u=a?i[fu.PATH]:o[0],_=a?i[fu.PATTERN]:i[u];if(!dr(_))throw new Error(kR(u));const p={keyId:cu(u),pattern:_};return n&&(p.searcher=_u(_,e)),p}let c={children:[],operator:o[0]};return o.forEach(u=>{const _=i[u];Lr(_)&&_.forEach(p=>{c.children.push(r(p))})}),c};return gu(t)||(t=bg(t)),r(t)}function ux(t,{ignoreFieldNorm:e=je.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const c=i?i.weight:null;r*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:o))}),n.score=r})}function dx(t,e){const n=t.matches;e.matches=[],Dn(n)&&n.forEach(r=>{if(!Dn(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function _x(t,e){e.score=t.score}function fx(t,e,{includeMatches:n=je.includeMatches,includeScore:r=je.includeScore}={}){const i=[];return n&&i.push(dx),r&&i.push(_x),t.map(o=>{const{idx:a}=o,c={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,c)}),c})}class Eo{constructor(e,n={},r){this.options={...je,...n},this.options.useExtendedSearch,this._keyStore=new FR(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof sd))throw new Error(DR);this._myIndex=n||qh(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Dn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;let u=dr(e)?dr(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ux(u,{ignoreFieldNorm:c}),o&&u.sort(a),jh(n)&&n>-1&&(u=u.slice(0,n)),fx(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=_u(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:c})=>{if(!Dn(o))return;const{isMatch:u,score:_,indices:p}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:_,value:o,norm:c,indices:p}]})}),i}_searchLogical(e){const n=ep(e,this.options),r=(c,u,_)=>{if(!c.children){const{keyId:g,searcher:v}=c,m=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:v});return m&&m.length?[{idx:_,item:u,matches:m}]:[]}const p=[];for(let g=0,v=c.children.length;g<v;g+=1){const m=c.children[g],E=r(m,u,_);if(E.length)p.push(...E);else if(c.operator===ka.AND)return[]}return p},i=this._myIndex.records,o={},a=[];return i.forEach(({$:c,i:u})=>{if(Dn(c)){let _=r(n,c,u);_.length&&(o[u]||(o[u]={idx:u,item:c,matches:[]},a.push(o[u])),_.forEach(({matches:p})=>{o[u].matches.push(...p)}))}}),a}_searchObjectList(e){const n=_u(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:c})=>{if(!Dn(a))return;let u=[];r.forEach((_,p)=>{u.push(...this._findMatches({key:_,value:a[p],searcher:n}))}),u.length&&o.push({idx:c,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!Dn(n))return[];let i=[];if(Lr(n))n.forEach(({v:o,i:a,n:c})=>{if(!Dn(o))return;const{isMatch:u,score:_,indices:p}=r.searchIn(o);u&&i.push({score:_,key:e,value:o,idx:a,norm:c,indices:p})});else{const{v:o,n:a}=n,{isMatch:c,score:u,indices:_}=r.searchIn(o);c&&i.push({score:u,key:e,value:o,norm:a,indices:_})}return i}}Eo.version="7.0.0";Eo.createIndex=qh;Eo.parseIndex=jR;Eo.config=je;Eo.parseQuery=ep;ax(sx);function Zr(t,e){const n=e[t];if(n===void 0)throw new Error(`ElementInfo for tool ${t} is not defined`);return n}function gx(t,e){return Object.entries(e).filter(r=>t(r[1].toolId,r[1])).map(r=>({key:r[1].toolId,info:r[1]}))}function hx(t){return new Eo(t,{keys:["info.meta.tags","info.meta.description","info.meta.categories","info.toolId"],ignoreLocation:!0,threshold:.2})}function px(t,e,n){const r=gx(e,n);return t.length===0?r:hx(r).search(t).map(i=>i.item)}function vx(t,e){return Zr(t,e).shape}function tn(t,e){const n=vx(t,e);return n?lu(n):void 0}function ws(t){const e=t.cell;if(typeof e!="string")throw Error("cell entry must be a string.");return od(e)}function mx(t,e){const n=t[e];if(!Array.isArray(n))throw Error("coords entry must be an array.");return n}function ys(t,e){const n=t[e];if(!Array.isArray(n))throw Error("cells entry must be an array.");return n.map(i=>{if(typeof i!="string")throw Error("cell must be string.");return od(i)})}function Ex(t){const e=t.lines;if(!Array.isArray(e))throw Error("lines entry must be an array.");return e.map(r=>{if(!Array.isArray(r))throw Error("line must be an array.");return r.map(o=>{if(typeof o!="string")throw Error("cell must be string.");return od(o)})})}function xr(t){const e=t.value;if(e!==void 0&&typeof e!="string")throw Error(`value entry must be a string, if present at all: ${e}`);return e}function tp(t){const e=t.direction;if(typeof e!="string")throw Error("direction entry must be a string.");return Bh(e)}function Cx(t){const e=t.directions;if(!Array.isArray(e))throw Error("directions entry must be an array.");return e.map(r=>{if(typeof r!="string")throw Error("direction must be string.");return Bh(r)})}function Ox(t,e){const n=t.shape;return n===void 0?void 0:{...tn(e,xt),...n}}function np(t,e,n){return{toolId:t,cells:e,value:n}}function Ix(t,e){const n=ys(e,"cells"),r=xr(e);return np(t,n,r)}function rp(t,e,n){const r=n?t.length-2:0;return t.findIndex((o,a)=>Xe(o,e)&&a>=r)}function bx(t,e,n){const r=[...t.cells],i=r.length;if(!(i===0?!0:bs(r[i-1],e)))return t;const a=rp(t.cells,e,n);return a>=0?r.length=a+1:r.push(e),{...t,cells:r}}function ip(t,e){return{toolId:t,cells:e,lines:[]}}function wx(t,e){const n=[...t.cells];if(n.length===0)return n.push(e),Da(n),{...t,cells:n};const r=n.some(o=>Xe(o,e)),i=n.some(o=>bs(o,e));return n.length>0&&!r&&i?(n.push(e),Da(n),{...t,cells:n}):t}function yx(t,e,n){const r=t.cells.some(_=>Xe(_,e)),i=t.lines.length;if(i===0&&!r)return t;if(i===0&&r)return hu(t,e);const o=t.lines[i-1],a=o.length;if(a===0&&!r)return t;if(a===0&&r)return hu(t,e);const c=rp(o,e,!1);return(o.length===0?!0:bs(o[a-1],e))?c>=0?(o.length=c+1,{...t,lines:[...t.lines.slice(0,i-1),o]}):!r||n?(o.push(e),{...t,lines:[...t.lines.slice(0,i-1),o]}):t:t}function hu(t,e){return t.cells.some(r=>Xe(r,e))?{...t,lines:[...t.lines,[e]]}:t}function Lx(t){const e=t.lines.length;return e<1?!1:t.lines[e-1].length<=1}function Ax(t){const e=t.lines.slice(0,-1);return{...t,lines:e}}function Nx(t,e){const n=[...t.lines];return n.splice(e,1),{...t,lines:n}}function Sx(t,e){const n=ys(e,"cells"),r=Ex(e),i=ip(t,n);return i.lines=r,i}function op(t,e,n=""){return{toolId:t,cells:e,value:n}}function Rx(t,e,n=!1){const r=Yh(t.cells,e,n);return r!==t.cells?{...t,cells:r}:t}function xx(t,e){return{...t,value:e}}function Tx(t,e){const n=ys(e,"cells"),r=xr(e);return op(t,n,r)}function sp(t,e,n){return{toolId:t,cells:e,value:n}}function Dx(t,e){const n=ys(e,"cells"),r=xr(e);return sp(t,n,r)}function ap(t,e,n){return{toolId:t,cells:e,value:n}}function kx(t,e){const n=ys(e,"cells"),r=xr(e);return ap(t,n,r)}function lp(t,e,n,r=""){return{toolId:t,cell:e,direction:n,value:r}}function Gx(t,e){const n=ws(e),r=tp(e),i=xr(e);return lp(t,n,r,i)}function cp(t,e,n){return{type:"SIMPLE",toolId:t,cell:e,value:n}}function Mx(t,e){const n=ws(e),r=xr(e);return cp(t,n,r)}function up(t,e,n){return{type:"ARROW",toolId:t,cell:e,direction:n}}function Ux(t,e){const n=ws(e),r=tp(e);return up(t,n,r)}function dp(t,e,n){return{type:"MULTIARROW",toolId:t,cell:e,directions:[n]}}function Fx(t,e){const n=ws(e),r=Cx(e),i=dp(t,n,Ue.N);return i.directions=r,i}function _p(t,e,n=""){return{toolId:t,cell:e,value:n}}function $x(t,e){const n=ws(e),r=xr(e);return _p(t,n,r)}function Px(t,e=""){return{toolId:t,value:e}}function Hx(t,e){const n=xr(e);return Px(t,n)}function Bx(t,e,n=""){return{toolId:t,coords:e,value:n}}function Wx(t,e){const n=mx(e,"coords"),r=xr(e);return Bx(t,n,r)}function Ls(t,e){return{...t,value:e}}class Co extends Map{addToDict(e){this.has(e)||this.set(e,{})}removeFromDict(e){this.get(e)!==void 0&&this.delete(e)}getConstraint(e,n){const r=this.get(e);if(!r)return null;const i=r[n];return i||null}getConstraint2(e){for(const n of this.values()){const r=n[e];if(r)return r}return null}addConstraint(e,n,r){const i=this.get(e);i&&(i[n]=r)}setConstraints(e,n){this.set(e,n)}removeConstraint(e,n){const r=this.get(e);r&&r[n]&&delete r[n]}updateConstraint(e,n,r){const i=this.get(e);i&&i[n]&&(i[n]=r)}toJSON(){const e={};for(const[n,r]of this.entries()){const i=[];for(const o of Object.values(r))i.push(Qx(o));i.length&&(e[n]=i)}return e}static fromJson(e){const n=new Co;if(!e)return n;for(const[r,i]of Object.entries(e)){const o=Nh(r);if(o===void 0||!Object.keys(xt).includes(o))continue;const a=i;for(const c of a){let u=null;if(Sh(o,Va)?u=Mx(o,c):Bu(o)?u=Ux(o,c):Wu(o)?u=Fx(o,c):zu(o)?u=kx(o,c):wh(o)?u=Dx(o,c):Yu(o)?u=Ix(o,c):Lh(o)?u=Wx(o,c):ju(o)?u=Sx(o,c):Ku(o)?u=Tx(o,c):cs(o)?u=Gx(o,c):Ub(o)?u=Hx(o,c):yh(o)&&(u=$x(o,c)),u!==null){n.addToDict(o);const _=bt.uniqueId(),p=Ox(c,o);u.shape=p,n.addConstraint(o,_,u)}}}return n}}function Ga(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Xe(o.cell,n))return[a,o]}return null}function zx(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(n.every(c=>o.cells.some(u=>Xe(c,u))))return i}return null}function Yx(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=o.cells[o.cells.length-1];if(Xe(n,a))return i}return null}function wg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Xe(c,n)))return[i[0],o]}return null}function jx(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r))if(i[1].cells.some(c=>Xe(c,n)))return i;return null}function yg(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Xe(c,n)))return[i[0],o]}return null}function Kx(t,e,n){const r=t.get(e);if(!r)return null;for(const[i,o]of Object.entries(r)){const a=o,c=a.lines.findIndex(u=>u.some((_,p)=>Xe(_,n)&&p>0));if(c>=0)return{id:i,arrow:a,matchLineIdx:c}}return null}function Vx(t,e,n,r){const i=t.get(e);if(!i)return null;for(const o of Object.entries(i)){const a=o[1],c=o[0];if(Xe(n,a.cell)&&r===a.direction)return c}return null}function Xx(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1],a=i[0];if(Xe(n,o.cell))return a}return null}function qx(t,e,n){const r=t.get(e);if(!r)return null;for(const i of Object.entries(r)){const o=i[1];if(o.cells.some(c=>Xe(c,n))||o.cells2.some(c=>Xe(c,n)))return[i[0],o]}return null}function Zx(t,e){const n=t.get(e),r=new Set;if(!n)return r;for(const i of Object.entries(n)){const o=i[1];r.add(o.value)}return r}function Qx(t){const e={};if("cells"in t){const n=t.cells.map(r=>ya(r));e.cells=n}if("cells2"in t){const n=t.cells2.map(r=>ya(r));e.cells2=n}if("lines"in t){const n=t.lines.map(r=>r.map(i=>ya(i)));e.lines=n}if("cell"in t){const n=ya(t.cell);e.cell=n}if("coords"in t){const n=t.coords;e.coords=n}if("direction"in t){const n=t.direction;e.direction=n}if("directions"in t){const n=t.directions;e.directions=n}if("value"in t&&t.value&&(e.value=t.value),"shape"in t&&t.shape){const n=tn(t.toolId,xt),r=Bb(t.shape,n);r&&(e.shape=r)}return e}function Lg(t,e,n){return t=Math.max(t,e),n!==void 0&&(t=Math.min(t,n)),t}function fp(t){const e=/^#?[0-9a-fA-f]{3}0$/.test(t),n=/^#?[0-9a-fA-f]{6}00$/.test(t);return e||n||t==="none"||t==="transparent"}function pu(t){const e=new Option().style;return e.color=t,e.color!==""}function Xc(t){return fp(t)||pu(t)?t:pu(`#${t}`)?`#${t}`:void 0}function Ma(t,e,n=", "){if(!t.length)return"";const r=t.map(i=>String(i));return r.length===1?r[0]:e?r.slice(0,-1).join(n)+`${e}${r.slice(-1)}`:r.join(n)}function gp(t){const e=new Map;for(const n of t){const r=e.get(n)||0;e.set(n,r+1)}return e}function Ua(t){const e=t.title?t.title:"sudoku",r=(t.authors?t.authors:["Anonymous"]).join("_");let i=`${e}_by_${r}`;return i=i.replaceAll(/[\W]/g,""),i}function Jx(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}const Ag={3:{w:3,h:1},4:{w:2,h:2},5:{w:5,h:1},6:{w:3,h:2},7:{w:7,h:1},8:{w:4,h:2},9:{w:3,h:3},10:{w:5,h:2},11:{w:11,h:1},12:{w:4,h:3},13:{w:13,h:1},14:{w:7,h:2},15:{w:5,h:3},16:{w:4,h:4}};function eT(t){return t in Ag?Ag[t]:null}function hp(t,e,n){if(n===null)return null;const r=eT(n);if(r===null)return null;const[i,o]=[r.h,r.w];return Math.floor(t/i)*i+Math.floor(e/o)}function qc(t,e){if(e===null)return[];const n=[...t],r=t.findIndex(i=>i===e);return r===-1?(n.push(e),n.sort(),n):(n.splice(r,1),n)}class tT{constructor(e,n){me(this,"r");me(this,"c");me(this,"outside",!1);me(this,"value",null);me(this,"given",!1);me(this,"region",null);me(this,"centerMarks",[]);me(this,"cornerMarks",[]);me(this,"highlights",[]);me(this,"fog",!1);this.r=e,this.c=n}formatCell(){return`R${this.r+1}C${this.c+1}`}enterGiven(e,n){if(e===null||n&&e===this.value&&this.given){this.value=null,this.given=!1;return}this.value=e,this.given=!0}enterValue(e,n){if(!this.given){if(e===null||n&&e===this.value){this.value=null;return}this.value=e}}enterRegion(e){if(this.outside)return;if(e===null||this.region===null){this.region=e;return}const n=Number(String(this.region)+String(e));this.region=n}enterCenterPM(e){this.value||(this.centerMarks=qc(this.centerMarks,e))}enterCornerPM(e){this.value||(this.cornerMarks=qc(this.cornerMarks,e))}enterHighlight(e){this.highlights=qc(this.highlights,e)}enterFog(e){this.fog=e}enterCell(e,n,r=!1){n===d.GIVEN?this.enterGiven(e,r):n===d.DIGIT?this.enterValue(e,r):n===d.CORNER_PM?this.enterCornerPM(e):n===d.CENTER_PM?this.enterCenterPM(e):n===d.HIGHLIGHTS?this.enterHighlight(e):n===d.REGIONS&&this.enterRegion(e)}toJson(e){const n={};return this.given&&(n.given=this.given),this.value!==null&&(n.value=this.value),this.region!==hp(this.r,this.c,e)&&(n.region=this.region),this.fog&&(n.fog=this.fog),this.cornerMarks.length&&(n.cornerMarks=this.cornerMarks),this.centerMarks.length&&(n.centerMarks=this.centerMarks),this.highlights.length&&(n.highlights=this.highlights),n}toCoords(){return{r:this.r,c:this.c}}}class Oo{constructor(e,n){me(this,"nCols");me(this,"nRows");me(this,"grid");this.nRows=e,this.nCols=n,this.grid=[];const r=e==n;for(let i=0;i<e;i++){const o=[];for(let a=0;a<n;a++){const c=new tT(i,a);if(r){const u=hp(i,a,e);c.region=u}o.push(c)}this.grid.push(o)}}getCell(e,n){if(!(e<0||e>=this.nRows||n<0||n>=this.nCols))return this.grid[e][n]}getAllCells(){return this.grid.flat()}getRow(e){const n=[];for(const r of this.grid[e])r.outside||n.push(r);return n}getCol(e){const n=[];for(const r of this.grid){const i=r[e];i.outside||n.push(i)}return n}getRegion(e){const n=[];if(e===null)return n;for(const r of this.getAllCells())r.region===e&&!r.outside&&n.push(r);return n}getCellsByKnightMove(e){const n=[],r=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const i of r){const[o,a]=[e.r+i[0],e.c+i[1]],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getOrthogonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,0],[0,-1],[0,1],[-1,0]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getDiagonallyAdjacentCells(e){const n=[];if(!e)return n;const r=[[1,1],[1,-1],[-1,1],[-1,-1]];for(const i of r){const o=e.r+i[0],a=e.c+i[1],c=this.getCell(o,a);c&&!c.outside&&n.push(c)}return n}getNeighboorCells(e){const n=[];return e&&(n.push(...this.getOrthogonallyAdjacentCells(e)),n.push(...this.getDiagonallyAdjacentCells(e))),n}getFilledCells(){return this.getAllCells().filter(n=>n.value!==null)}getUsedRegions(){const e=new Set;for(const n of this.getAllCells())n.region!==null&&e.add(n.region);return e}getRegionCounts(){const e=this.getAllCells().filter(r=>r.region!==null).map(r=>r.region);return gp(e)}getDisjointGroupIdx(e){return e.region===null?-1:this.getRegion(e.region).findIndex(n=>n===e)}getDisjointGroup(e){const n=[],r=this.getRegionCounts(),i=[...r.keys()].sort(),o=i.length;if(e<0||e>=o||![...r.values()].every(c=>c===o))return n;for(const c of i){const u=this.getRegion(c);n.push(u[e])}return n}getPositiveDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,this.nCols-n-1);r&&e.push(r)}return e}getNegativeDiagonal(){const e=[];if(this.nCols!==this.nRows)return e;for(let n=0;n<this.nRows;n++){const r=this.getCell(n,n);r&&e.push(r)}return e}getCellsInDirection(e,n,r){const i=[],{r:o,c:a}=tl(r);let[c,u]=[e+o,n+a];for(;0<=c&&c<this.nRows&&0<=u&&u<this.nCols;){const _=this.grid[c][u];i.push(_),[c,u]=[c+o,u+a]}return i}resetValues(){for(const e of this.getAllCells())e.centerMarks=[],e.cornerMarks=[],e.highlights=[],e.given||(e.value=null)}toJSON(){const e=[],n=this.nCols===this.nRows?this.nRows:null;for(let r=0;r<this.nRows;r++){const i=[];for(let o=0;o<this.nCols;o++){const a=this.getCell(r,o);if(!a)continue;const c=a==null?void 0:a.toJson(n);i.push(c)}e.push(i)}return e}static fromJSON(e,n,r){const i=new Oo(e,n);for(let o=0;o<e;o++)for(let a=0;a<n;a++){const c=r[o][a],u=i.getCell(o,a);u&&Object.assign(u,c)}return i}}function nT(t){const e=t.grid,n=t.localConstraints,r=t.globalConstraints,i={};i.puzzleInfo=t.puzzleMeta,i.nRows=e.nRows,i.nCols=e.nCols;const o=Math.min(e.nRows,e.nCols),a=bt.range(1,o+1);t.valid_digits&&!Jx(a,t.valid_digits)&&(i.valid_digits=t.valid_digits),i.grid=e.toJSON(),t.solution&&(i.solution=t.solution);const c=r.toJSON();Object.keys(c).length&&(i.bool_constraints=c);const u=n.toJSON();return Object.keys(u).length&&(i.local_constraints=u),i}function rT(t){const e=t.nRows,n=t.nCols,r=t.puzzleInfo,i=t.valid_digits,o=t.grid,a=Oo.fromJSON(e,n,o),c=Math.min(a.nRows,a.nRows);let u=bt.range(1,c+1);i!==void 0&&(u=i);const _=t.solution,p=t.local_constraints,g=Co.fromJson(p),v=t.bool_constraints,m=bi.fromJson(v);return{puzzleMeta:r,solution:_,grid:a,valid_digits:u,localConstraints:g,globalConstraints:m}}function LH(){const t=new Oo(9,9),e=new Co,n=new bi;return{grid:t,solution:void 0,valid_digits:bt.range(1,10),puzzleMeta:{},localConstraints:e,globalConstraints:n}}var Qo=(t=>(t.RESETTING="RESETTING",t.DYNAMIC="DYNAMIC",t.SELECTING="SELECTING",t.DESELECTING="DESELECTING",t))(Qo||{});const iT=(t,e)=>({type:"CLICK",payload:{cell:t,selectionMode:e}}),oT=()=>({type:"CLEAR"}),sT=t=>({type:"DRAG",payload:t}),vu=t=>({type:"SET",payload:t}),aT=(t,e)=>({type:"ARROW_KEY",payload:{cell:t,selectionMode:e}}),ad=()=>({cells:[],lastCell:null,mode:"DYNAMIC"}),ur=(t,e,n)=>{const r=[...t];return Da(r),{cells:r,lastCell:e,mode:n}};function lT(t,e,n){if(e===null)return ad();if(n==="RESETTING")return ur([e],e,"SELECTING");const r=t.cells.findIndex(i=>Xe(e,i));if(n==="SELECTING")return r!==-1?t:ur([...t.cells,e],e,n);if(n==="DESELECTING"){if(r===-1)return t;const i=[...t.cells];return i.splice(r,1),ur(i,null,n)}else if(n==="DYNAMIC"){if(r===-1)return ur([...t.cells,e],e,"SELECTING");const i=[...t.cells];return i.splice(r,1),ur(i,null,"DESELECTING")}return t}function cT(t,e){if(e===null)return t;const n=t.cells.findIndex(r=>Xe(e,r));if(t.mode==="SELECTING")return n!==-1?t:ur([...t.cells,e],null,t.mode);if(t.mode==="DESELECTING"){if(n===-1)return t;const r=[...t.cells];return r.splice(n,1),ur(r,null,t.mode)}return t}function uT(t,e){return{...t,cells:e}}function dT(t,e,n){return e===null?t:n==="SELECTING"?t.cells.findIndex(i=>Xe(e,i))!==-1?ur([...t.cells],e,"SELECTING"):ur([...t.cells,e],e,"SELECTING"):ur([e],e,t.mode)}function pp(t,e){switch(e==null?void 0:e.type){case"CLEAR":return ad();case"SET":return uT(t,e.payload);case"CLICK":return lT(t,e.payload.cell,e.payload.selectionMode);case"DRAG":return cT(t,e.payload);case"ARROW_KEY":return dT(t,e.payload.cell,e.payload.selectionMode);default:return t}}function Ji(t,e){return Xe(t.p1,e.p1)&&Xe(t.p2,e.p2)||Xe(t.p1,e.p2)&&Xe(t.p2,e.p1)}function _T(t,e){return Xe(t.p1,e.p2)&&Xe(t.p2,e.p1)}function vp(t,e){const n=Math.abs(t.r-e.r),r=Math.abs(t.c-e.c);return[0,1].includes(n)&&[0,1].includes(r)&&!Xe(t,e)}class nl{constructor(){me(this,"edgeMarkers",[]);me(this,"cellMarkers",[]);me(this,"lineMarkers",[]);me(this,"draftLine",[]);me(this,"mode","add")}hasEdgeMarker(e){return this.edgeMarkers.findIndex(r=>Xe(r,e))!==-1}getEdgeMarker(e){return this.edgeMarkers.find(r=>Xe(r,e))}getCellMarker(e){return this.cellMarkers.find(r=>Xe(r,e))}hasCellMarker(e){return this.cellMarkers.findIndex(r=>Xe(r,e))!==-1}removeEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Xe(i,e));return n===-1?null:this.edgeMarkers.splice(n,1)[0]}addEdgeMarker(e){const n=this.edgeMarkers.findIndex(i=>Xe(i,e));if(n===-1)return this.edgeMarkers.push(e),null;const r=this.edgeMarkers[n];return this.edgeMarkers[n]=e,r}removeCellMarker(e){const n=this.cellMarkers.findIndex(i=>Xe(i,e));return n===-1?null:this.cellMarkers.splice(n,1)[0]}addCellMarker(e){const n=this.cellMarkers.findIndex(i=>Xe(i,e));if(n===-1)return this.cellMarkers.push(e),null;const r=this.cellMarkers[n];return this.cellMarkers[n]=e,r}setCellMarkers(e){this.cellMarkers=e}onEdgeClick(e){const n=this.edgeMarkers.findIndex(r=>Xe(r,e));n===-1?this.edgeMarkers.push(e):this.edgeMarkers.splice(n,1)}onCenterClick(e,n){const r=this.cellMarkers.findIndex(i=>Xe(i,e));if(r===-1){const i={...e,colorId:n,marker:"X"};this.edgeMarkers.push(i)}else if(this.cellMarkers[r].marker==="X"){const o={...e,colorId:n,marker:"O"};this.cellMarkers[r]=o}else this.edgeMarkers.splice(r,1)}lineMarkerExists(e){return this.lineMarkers.findIndex(r=>Ji(r,e))!==-1}addToDraftLine(e){const n=this.draftLine.findIndex(i=>Ji(e,i)),r=this.draftLine[this.draftLine.length-1];n===-1&&(this.draftLine=[...this.draftLine,e]),n!==-1&&_T(r,e)&&this.draftLine.splice(n,1)}onDrag(e){vp(e.p1,e.p2)&&(this.lineMarkerExists(e)&&this.draftLine.length===0?this.mode="remove":this.draftLine.length===0&&(this.mode="add"),this.addToDraftLine(e))}addToLineMarkers(e){const n=[];for(const r of e)this.lineMarkers.findIndex(o=>Ji(o,r))===-1&&(this.lineMarkers.push(r),n.push(r));return n}removeFromLineMarkers(e){const n=[];for(const r of e){const i=this.lineMarkers.findIndex(o=>Ji(o,r));if(i!==-1){const o=this.lineMarkers.splice(i,1);n.push(o[0])}}return n}onDragEnd(){return this.draftLine=[],this.mode==="add"?this.removeFromLineMarkers(this.draftLine):this.removeFromLineMarkers(this.draftLine)}copy(){const e=new nl;return Object.assign(e,this),e}}const Ng=t=>({type:"ADD_EDGE_MARKER",payload:t}),Sg=t=>({type:"REMOVE_EDGE_MARKER",payload:t}),Na=t=>({type:"ADD_CELL_MARKER",payload:t}),fT=t=>({type:"SET_CELL_MARKERS",payload:t}),Rg=t=>({type:"REMOVE_CELL_MARKER",payload:t}),gT=t=>({type:"DRAG",payload:t}),us=t=>({type:"ADD_LINE_MARKERS",payload:t}),xg=t=>({type:"REMOVE_LINE_MARKERS",payload:t}),ld=()=>({type:"RESET"});function hT(t,e){switch(e.type){case"RESET":return new nl;case"ADD_EDGE_MARKER":{const n=t.copy();return n.addEdgeMarker(e.payload),n}case"REMOVE_EDGE_MARKER":{const n=t.copy();return n.removeEdgeMarker(e.payload),n}case"ADD_CELL_MARKER":{const n=t.copy();return n.addCellMarker(e.payload),n}case"SET_CELL_MARKERS":{const n=t.copy();return n.setCellMarkers(e.payload),n}case"REMOVE_CELL_MARKER":{const n=t.copy();return n.removeCellMarker(e.payload),n}case"DRAG":{const n=t.copy();return n.onDrag(e.payload),n}case"ADD_LINE_MARKERS":{const n=t.copy();return n.addToLineMarkers(e.payload),n.draftLine=[],n}case"REMOVE_LINE_MARKERS":{const n=t.copy();return n.removeFromLineMarkers(e.payload),n.draftLine=[],n}}return t}function mp(){return{_undoStack:[],_redoStack:[]}}const Io=Bt(mp());function pT(){Io.update(()=>mp())}function _n(t,e=!0){Io.update(n=>(e&&t.execute(),n._undoStack.push([t]),n._redoStack=[],n))}function vT(t,e=!0){Io.update(n=>{if(e)for(const r of t)r.execute();return n._undoStack.push(t),n._redoStack=[],n})}function Ep(){Io.update(t=>{const e=t._undoStack.pop();if(e){for(let n=e.length-1;n>=0;n--)e[n].unExecute();t._redoStack.push(e)}return t})}function Cp(){Io.update(t=>{const e=t._redoStack.pop();if(e){for(const n of e)n==null||n.execute();t._undoStack.push(e)}return t})}const Fa=Bt(new nl);function _r(t){Fa.update(e=>hT(e,t))}const $a=Bt(1);function vi(t,e){return{execute:()=>{_r(t)},unExecute:()=>{_r(e)}}}const wi=Bt(ad());function Zi(t){t&&wi.update(e=>pp(e,t))}function Tg(t){t&&wi.update(e=>pp(e,t))}function mT(t,e){return{execute:()=>{Tg(t)},unExecute:()=>{Tg(e)}}}const to=Bt(null),rl=Bt(so.SETTING),mu=Bt(!1),en=Bt(d.DIGIT),Op=Bt(d.DIGIT),cd=Bt(bt.range(1,10)),En=Bt(new Oo(9,9)),fn=Bt(ut(En).getAllCells()),Tr=Bt({}),Dr=Bt(new bi),vt=Bt(new Co),fr=Bt(null),Ip=Bt(void 0),il=Bt(void 0);function ET(t){Tr.update(()=>t)}function bo(t){fr.update(()=>t)}function ud(t){Ip.update(()=>t)}function yr(t){ut(en)!==t&&(en.update(()=>t),bo(null))}function CT(){const t=ut(Op);t&&yr(t)}function Eu(t){Op.update(()=>t)}function OT(t){ut(en)===t&&yr(d.DIGIT)}function IT(t){vt.update(e=>(e.removeFromDict(t),e)),ud(void 0)}function Ht(t,e,n){vt.update(r=>(r.updateConstraint(t,e,n),r)),bo({id:e,constraint:n})}function Zc(t){const e=ut(fr);if(t=t?{...t}:void 0,ud(t),!e)return;const n={...e.constraint,shape:t},r=e.constraint.toolId;Ht(r,e.id,n)}function bT(t,e){const r=ut(vt).get(e);if(!r)return;const i=r[t];i&&bo({id:t,constraint:i})}function wT(t,e,n){const r=new Oo(t,e);En.update(()=>r),cd.update(()=>n),vt.update(()=>new Co),Dr.update(()=>new bi),Tr.update(()=>({})),dd(void 0),fn.update(()=>r.getAllCells())}function yT(t){En.update(()=>t.grid),Tr.update(()=>t.puzzleMeta),dd(t.solution),cd.update(()=>t.valid_digits),vt.update(()=>t.localConstraints),Dr.update(()=>t.globalConstraints),fn.update(()=>t.grid.getAllCells())}function bp(){const t=ut(En);t.resetValues(),En.update(()=>t),fn.update(()=>t.getAllCells()),_r(ld())}function Pa(){pT(),_r(ld()),yr(d.DIGIT);const t=oT();Zi(t),ud(void 0),bo(null)}const wp=oo([ei,en,rl],([t,e,n])=>{const r=t.hideFog,i=e;return![d.FOG,d.REGIONS].includes(i)&&!r&&n===so.SETTING}),As=oo([En,Tr,Dr,vt,il,cd],([t,e,n,r,i,o])=>({grid:t,solution:i,puzzleMeta:e,valid_digits:o,globalConstraints:n,localConstraints:r}));function dd(t){il.update(()=>t)}var Qi=(t=>(t.ADD_LOCAL_CONSTRAINT="ADD_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT="REMOVE_LOCAL_CONSTRAINT",t.REMOVE_LOCAL_CONSTRAINT_GROUP="REMOVE_LOCAL_CONSTRAINT_GROUP",t.RESTORE_LOCAL_CONSTRAINT_GROUP="RESTORE_LOCAL_CONSTRAINT_GROUP",t.UPDATE_LOCAL_CONSTRAINT="UPDATE_LOCAL_CONSTRAINT",t))(Qi||{});const _d=(t,e)=>({type:"ADD_LOCAL_CONSTRAINT",payload:{id:t,constraint:e}}),fd=(t,e)=>({type:"REMOVE_LOCAL_CONSTRAINT",payload:{id:t,tool:e}}),LT=t=>({type:"REMOVE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t}}),AT=(t,e)=>({type:"RESTORE_LOCAL_CONSTRAINT_GROUP",payload:{tool:t,constraints:e}}),Dg=(t,e,n)=>({type:"UPDATE_LOCAL_CONSTRAINT",payload:{constraintId:e,constraint:n,tool:t}});function yp(t){vt.update(e=>(e.addToDict(t),e))}function ii(t,e){const n=ut(Ip);n&&(e.shape={...n}),vt.update(r=>(r.addConstraint(e.toolId,t,e),r)),bo({id:t,constraint:e})}function yi(t,e){e&&vt.update(n=>(n.removeConstraint(t,e),n))}function NT(t,e){vt.update(n=>(n.setConstraints(t,e),n))}function kg(t){t.type===Qi.ADD_LOCAL_CONSTRAINT?ii(t.payload.id,t.payload.constraint):t.type===Qi.REMOVE_LOCAL_CONSTRAINT?yi(t.payload.tool,t.payload.id):t.type===Qi.REMOVE_LOCAL_CONSTRAINT_GROUP?IT(t.payload.tool):t.type===Qi.RESTORE_LOCAL_CONSTRAINT_GROUP?NT(t.payload.tool,t.payload.constraints):t.type===Qi.UPDATE_LOCAL_CONSTRAINT&&Ht(t.payload.tool,t.payload.constraintId,t.payload.constraint)}function Ns(t,e){return{execute:()=>{kg(t)},unExecute:()=>{kg(e)}}}var ST=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M259.087-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-565.935h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm104.804-152.217h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399Z"></path></svg>');function Lp(t){var e=ST();x(t,e)}var RT=ie('<button class="remove-button svelte-17rdl63"><!></button>');function xT(t,e){let n=U(e,"onTrash",8,()=>{});var r=RT(),i=V(r);Lp(i),z(r),Me("click",r,Vn(function(...o){var a;(a=n())==null||a.apply(this,o)})),x(t,r)}var TT=ie('<input type="radio" class="radio-select-button svelte-3561wl">'),DT=ie('<div class="tool-button svelte-3561wl"><!>  <div class="button-content svelte-3561wl" role="button"><div class="button-content-left svelte-3561wl"><div class="remove-button-container svelte-3561wl"><!></div> <label class="tool-name svelte-3561wl"></label></div> <div class="button-content-right svelte-3561wl"><!></div></div></div>');function ts(t,e){var J,oe;ae(e,!1);const n=ot(),r=()=>Ce(en,"$toolStore",n),i=[];let o=U(e,"elementInfo",8),a=U(e,"onClick",12,void 0),c=U(e,"onTrash",8,void 0);const u=o().toolId,_=o().permanent??!1,p=((J=o().menu)==null?void 0:J.name)??o().toolId,g=!((oe=o().meta)!=null&&oe.categories.includes(S.GLOBAL_CONSTRAINT)),v=`label-${p}`;g&&a(()=>{yr(u)});function m(){var Oe,he;const re=(Oe=o().meta)==null?void 0:Oe.description,te=((he=o().meta)==null?void 0:he.usage)??tw(u);let Ee;return re&&re.length&&(Ee=re),te.length&&(Ee?Ee=Ee+`

`+te:Ee=te),Ee}pe();var E=DT(),O=V(E);{var I=re=>{var te=TT();Qt(te),A(te,"id",v),te.value=(te.__value=u)==null?"":u,Ka(i,[],te,()=>r(),Ee=>vs(en,Ee)),x(re,te)};fe(O,re=>{g&&re(I)})}var b=$(O,2);ee(()=>A(b,"title",m())),A(b,"aria-labelledby",v);var y=V(b),D=V(y),M=V(D);{var W=re=>{xT(re,{get onTrash(){return c()}})};fe(M,re=>{_||re(W)})}z(D);var j=$(D,2);A(j,"for",v),j.textContent=p,z(y);var F=$(y,2),q=V(F);ft(q,e,"default",{}),z(F),z(b),z(E),ee(()=>yt(E,"checked",u===r())),Me("click",b,Vn(function(...re){var te;(te=a())==null||te.apply(this,re)})),x(t,E),le()}function Ap(t,e){ae(e,!1);const n=ot(),r=()=>Ce(vt,"$localConstraintsStore",n);let i=U(e,"toolId",8),o=U(e,"elementHandlers",8);const a=()=>{OT(i());const u=r().get(i());if(!u)return;const _=LT(i()),p=AT(i(),u),g=Ns(_,p);_n(g)};pe();var c=Ze(()=>Zr(i(),o()));ts(t,{get elementInfo(){return h(c)},onTrash:a}),le()}var kT=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM620-40q-25 0-42.5-17.5T560-100v-240q0-25 17.5-42.5T620-400h240q25 0 42.5 17.5T920-340v240q0 25-17.5 42.5T860-40H620Zm95-632L288-246q7 12 10.5 25.5T302-192q0 45-32 77.5T192-82q-45 0-77.5-32.5T82-192q0-46 32.5-78t77.5-32q15 0 28.5 3.5T246-288l426-427q-7-12-10.5-25.5T658-768q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T768-658q-14 0-27.5-3.5T715-672Z"></path></svg>');function GT(t){var e=kT();x(t,e)}var MT=ie('<div class="collapsible-wrapper svelte-ip0q3o"><!></div>');function ol(t,e){let n=U(e,"isOpen",8,!0);var r=MT(),i=V(r);ft(i,e,"default",{}),z(r),ee(()=>{A(r,"aria-expanded",n()),yt(r,"closed",!n())}),x(t,r)}var UT=ie('<div class="constraint-button svelte-fgm6t3"><div class="left-side svelte-fgm6t3"> </div> <div class="right-side svelte-fgm6t3"><button class="remove-constraint-button svelte-fgm6t3"><!></button></div></div>');function FT(t,e){ae(e,!1);const n=ot(),r=()=>Ce(to,"$svgRefStore",n),i=()=>Ce(vt,"$localConstraintsStore",n),o=()=>Ce(fr,"$currentConstraintStore",n),a=T();let c=U(e,"constraintId",8),u=U(e,"toolId",8);function _(){bT(c(),u()),r()&&r().focus()}function p(){const b=i().getConstraint(u(),c());if(!b)return;const y=fd(c(),u()),D=_d(c(),b),M=Ns(y,D);_n(M)}k(()=>o(),()=>{var b;N(a,(b=o())==null?void 0:b.id)}),Ie(),pe();var g=UT(),v=V(g),m=V(v);z(v);var E=$(v,2),O=V(E),I=V(O);Lp(I),z(O),z(E),z(g),ee(()=>{yt(g,"active",c()===h(a)),nt(m,`ID: ${c()??""}`)}),Me("click",O,Vn(p)),Me("click",g,_),x(t,g),le()}var $T=ie('<div class="constraint-list svelte-w5npcu"></div>');function Np(t,e){ae(e,!1);const n=ot(),r=()=>Ce(vt,"$localConstraintsStore",n),i=()=>Ce(en,"$toolStore",n),o=T();let a=U(e,"toolId",8);k(()=>(r(),Z(a())),()=>{N(o,r().get(a()))}),Ie(),pe();var c=Se(),u=de(c);{var _=p=>{var g=Ze(()=>a()===i());ol(p,{get isOpen(){return h(g)},children:(v,m)=>{var E=$T();at(E,5,()=>Object.entries(h(o)),O=>O[0],(O,I)=>{FT(O,{get constraintId(){return h(I)[0]},get toolId(){return a()}})}),z(E),x(v,E)},$$slots:{default:!0}})};fe(u,p=>{h(o)&&Object.entries(h(o)).length&&p(_)})}x(t,c),le()}var PT=ie('<div class="modal-header svelte-1uo1nte"><span class="modal-title svelte-1uo1nte"> </span> <button class="modal-header-close svelte-1uo1nte">&#10005;</button></div>');function HT(t,e){let n=U(e,"title",8),r=U(e,"closeCb",8);var i=PT(),o=V(i),a=V(o,!0);z(o);var c=$(o,2);z(i),ee(()=>nt(a,n())),Me("click",c,function(...u){var _;(_=r())==null||_.apply(this,u)}),x(t,i)}var BT=ie('<dialog class="svelte-22o37t"><div class="svelte-22o37t"><!> <div class="modal-content-wrapper svelte-22o37t"><div class="modal-content svelte-22o37t"><!></div></div></div></dialog>');function kr(t,e){ae(e,!1);let n=U(e,"showModal",12),r=U(e,"title",8),i=T();function o(){n(!1),h(i).close()}k(()=>(h(i),Z(n())),()=>{h(i)&&n()&&h(i).showModal()}),k(()=>(h(i),Z(n())),()=>{h(i)&&!n()&&h(i).close()}),Ie();var a=BT(),c=V(a),u=V(c);HT(u,{get title(){return r()},closeCb:o});var _=$(u,2),p=V(_),g=V(p);ft(g,e,"default",{}),z(p),z(_),z(c),z(a),Ii(a,v=>N(i,v),()=>h(i)),Me("click",c,Vn(function(v){Db.call(this,e,v)})),Me("close",a,()=>{n(!1)}),Me("click",a,Tb(Vn(()=>h(i).close()))),x(t,a),le()}var WT=ie('<div class="search-input-container svelte-s0g5w7"><span class="icon-container svelte-s0g5w7"><svg class="icon svelte-s0g5w7" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"></path></svg></span> <input class="search-input svelte-s0g5w7" type="text"></div>');function zT(t,e){ae(e,!1);let n=U(e,"searchPattern",12,""),r=U(e,"showModal",8),i=T(null);k(()=>(Z(r()),h(i)),()=>{r()&&h(i)&&h(i).focus()}),Ie();var o=WT(),a=$(V(o),2);Qt(a),A(a,"spellcheck",!1),Ii(a,c=>N(i,c),()=>h(i)),z(o),jn(a,n),x(t,o),le()}var YT=ie('<div class="tool-selection-container svelte-fibcpm"><!> <div class="tools-list-container-wrapper svelte-fibcpm"><div class="tools-list-container svelte-fibcpm"><!></div></div></div>');function jT(t,e){let n=U(e,"showModal",12),r=U(e,"searchPattern",12,""),i=U(e,"title",8);kr(t,{get title(){return i()},get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=YT(),u=V(c);zT(u,{get showModal(){return n()},get searchPattern(){return r()},set searchPattern(v){r(v)},$$legacy:!0});var _=$(u,2),p=V(_),g=V(p);ft(g,e,"default",{}),z(p),z(_),z(c),x(o,c)},$$slots:{default:!0},$$legacy:!0})}var KT=ie('<div class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!></div></div>'),VT=ie('<button class="modal-section-header svelte-129a6wb"><div class="left-side svelte-129a6wb"><span class="section-title svelte-129a6wb"> </span></div> <div class="right-side svelte-129a6wb"><!> <div class="collapse-icon svelte-129a6wb">&#10095</div></div></button>');function qr(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0),i=U(e,"isCollapsible",8,!1);var o=Se(),a=de(o);{var c=_=>{var p=KT(),g=V(p),v=V(g),m=V(v,!0);z(v),z(g);var E=$(g,2),O=V(E);ft(O,e,"default",{}),z(E),z(p),ee(()=>nt(m,n())),x(_,p)},u=_=>{var p=VT(),g=V(p),v=V(g),m=V(v,!0);z(v),z(g);var E=$(g,2),O=V(E);ft(O,e,"default",{});var I=$(O,2);z(E),z(p),ee(()=>{nt(m,n()),yt(I,"open",r())}),Me("click",p,()=>r(!r())),x(_,p)};fe(a,_=>{i()?_(u,!1):_(c)})}x(t,o)}var XT=ie('<li class="svelte-cd45on"><button class="constraint-select svelte-cd45on"> </button></li>'),qT=ie('<ol class="svelte-cd45on"></ol>'),ZT=ie("<!> <!>",1);function QT(t,e){ae(e,!1);const n=T();let r=U(e,"category",8),i=U(e,"addTool",8),o=U(e,"searchResults",8),a=T(!0);k(()=>(Z(o()),Z(r())),()=>{N(n,o().filter(p=>{var g,v;return(v=(g=p.info.meta)==null?void 0:g.categories)==null?void 0:v.includes(r())}))}),Ie(),pe();var c=Se(),u=de(c);{var _=p=>{var g=ZT(),v=de(g);qr(v,{get title(){return r()},isCollapsible:!0,get isOpen(){return h(a)},set isOpen(E){N(a,E)},$$legacy:!0});var m=$(v,2);ol(m,{get isOpen(){return h(a)},children:(E,O)=>{var I=qT();at(I,5,()=>h(n),Lt,(b,y)=>{let D=()=>h(y).key,M=()=>h(y).info;var W=XT(),j=V(W),F=V(j,!0);z(j),z(W),ee(()=>{var q;A(j,"title",(q=M().meta)==null?void 0:q.description),nt(F,D())}),Me("click",j,()=>{i()(D())}),x(b,W)}),z(I),x(E,I)},$$slots:{default:!0}}),x(p,g)};fe(u,p=>{h(n).length&&p(_)})}x(t,c),le()}function JT(t,e){ae(e,!1);const n=T();let r=U(e,"searchPattern",8,""),i=U(e,"addTool",8),o=U(e,"categories",8),a=U(e,"filterFunc",8),c=U(e,"elementHandlers",8);k(()=>(Z(r()),Z(a()),Z(c())),()=>{N(n,px(r(),a(),c()))}),Ie(),pe();var u=Se(),_=de(u);at(_,1,o,Lt,(p,g)=>{QT(p,{get category(){return h(g)},get searchResults(){return h(n)},get addTool(){return i()}})}),x(t,u),le()}var e2=ie('<div role="button" class="panel-header svelte-sv995z" aria-keyshortcuts="Space Enter"><div class="add-button-container svelte-sv995z"><!></div> <span class="panel-header-title svelte-sv995z"><div class="title-icon-wrapper svelte-sv995z"><!></div> </span> <div class="panel-header-right svelte-sv995z"><span class="collapse-icon svelte-sv995z">&#10095</span></div></div>');function sl(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8);var i=e2();A(i,"tabindex",0);var o=V(i),a=V(o);ft(a,e,"add-button",{}),z(o);var c=$(o,2),u=V(c),_=V(u);ft(_,e,"title-icon",{}),z(u);var p=$(u);z(c);var g=$(c,2),v=V(g);z(g),z(i),ee(()=>{nt(p,` ${r()??""}`),yt(v,"open",n())}),Me("click",i,()=>n(!n())),Me("keydown",i,m=>{m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.currentTarget.click())}),x(t,i)}var t2=ie('<button slot="add-button" class="add-button svelte-ge2tx6" title="Add Constraint"><svg xmlns="http://www.w3.org/2000/svg" class="icon svelte-ge2tx6" viewBox="0 96 960 960"><path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"></path></svg></button>');function n2(t,e){let n=U(e,"isOpen",12),r=U(e,"title",8),i=U(e,"showModal",12);function o(){i(!i())}sl(t,{get title(){return r()},get isOpen(){return n()},set isOpen(a){n(a)},$$slots:{"add-button":(a,c)=>{var u=t2();Me("click",u,Vn(()=>o())),x(a,u)},"title-icon":(a,c)=>{var u=Se(),_=de(u);ft(_,e,"title-icon",{}),x(a,u)}},$$legacy:!0})}var r2=ie('<div class="panel-content-wrapper svelte-hixu4"><!></div>'),i2=ie('<div class="panel-container svelte-hixu4"><!> <!></div>');function al(t,e){let n=U(e,"isOpen",8,!0);var r=i2(),i=V(r);ft(i,e,"panel-header",{});var o=$(i,2);ol(o,{get isOpen(){return n()},children:(a,c)=>{var u=r2(),_=V(u);ft(_,e,"panel-content",{}),z(u),x(a,u)},$$slots:{default:!0}}),z(r),x(t,r)}var o2=ie("<!> <!>",1);function gd(t,e){ae(e,!1);let n=U(e,"categories",8),r=U(e,"title",8),i=U(e,"onAddTool",8),o=U(e,"elementHandlerFilterFunc",8),a=U(e,"elementHandlers",8),c=T(!0),u=T(!1),_=T("");const p=g=>{N(u,!1),N(c,!0),i()(g)};pe(),al(t,{get isOpen(){return h(c)},set isOpen(g){N(c,g)},$$slots:{"panel-header":(g,v)=>{var m=o2(),E=de(m);n2(E,{get title(){return r()},get isOpen(){return h(c)},set isOpen(I){N(c,I)},get showModal(){return h(u)},set showModal(I){N(u,I)},$$slots:{"title-icon":(I,b)=>{var y=Se(),D=de(y);ft(D,e,"title-icon",{}),x(I,y)}},$$legacy:!0});var O=$(E,2);jT(O,{get title(){return r()},get showModal(){return h(u)},set showModal(I){N(u,I)},get searchPattern(){return h(_)},set searchPattern(I){N(_,I)},children:(I,b)=>{JT(I,{get searchPattern(){return h(_)},get categories(){return n()},get filterFunc(){return o()},addTool:p,get elementHandlers(){return a()}})},$$slots:{default:!0},$$legacy:!0}),x(g,m)},"panel-content":(g,v)=>{var m=Se(),E=de(m);ft(E,e,"panel-content",{}),x(g,m)}},$$legacy:!0}),le()}var s2=ie("<!> <!>",1);function a2(t,e){ae(e,!1);const n=ot(),r=()=>Ce(vt,"$localConstraintsStore",n),i=T();let o=U(e,"elementHandlers",8);const a=[S.COSMETIC_TOOL],c=u=>{yp(u),yr(u)};k(()=>(r(),S),()=>{N(i,(u,_)=>{var v;const p=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(S.COSMETIC_TOOL))&&!p})}),Ie(),pe(),gd(t,{title:"Cosmetic Tools",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{GT(u)},"panel-content":(u,_)=>{var p=Se(),g=de(p);at(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>h(m)[0];var O=Se(),I=de(O);{var b=y=>{var D=s2(),M=de(D);Ap(M,{get toolId(){return E()},get elementHandlers(){return o()}});var W=$(M,2);Np(W,{get toolId(){return E()}}),x(y,D)};fe(I,y=>{Fb(E())&&y(b)})}x(v,O)}),x(u,p)}}}),le()}var Sp=(t=>(t.SET_GLOBAL_CONSTRAINT="SET_GLOBAL_CONSTRAINT",t.REMOVE_GLOBAL_CONSTRAINT="REMOVE_GLOBAL_CONSTRAINT",t))(Sp||{});const xa=(t,e)=>({type:"SET_GLOBAL_CONSTRAINT",payload:{tool:t,value:e}}),Rp=t=>({type:"REMOVE_GLOBAL_CONSTRAINT",payload:t});function l2(t,e){Dr.update(n=>n.setConstraint(t,e))}function c2(t){Dr.update(e=>e.removeConstraint(t))}function Gg(t){t.type===Sp.REMOVE_GLOBAL_CONSTRAINT?c2(t.payload):l2(t.payload.tool,t.payload.value)}function Cu(t,e){return{execute:()=>{Gg(t)},unExecute:()=>{Gg(e)}}}var u2=ie('<div class="checkbox-container"><input type="checkbox" class="svelte-18huu5t"></div>');function d2(t,e){let n=U(e,"value",8,!1);var r=u2(),i=V(r);Qt(i),z(r),ee(()=>ah(i,n())),x(t,r)}function _2(t,e){ae(e,!1);let n=U(e,"toolId",8),r=U(e,"value",8,!1),i=U(e,"elementHandlers",8);const o=()=>{const u=xa(n(),!r()),_=xa(n(),r()),p=Cu(u,_);_n(p)},a=()=>{const u=Rp(n()),_=xa(n(),r()),p=Cu(u,_);_n(p)};pe();var c=Ze(()=>Zr(n(),i()));ts(t,{get elementInfo(){return h(c)},onClick:o,onTrash:a,children:(u,_)=>{d2(u,{get value(){return r()}})},$$slots:{default:!0}}),le()}var f2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-100.001q-79.384 0-148.73-29.962-69.346-29.961-120.846-81.269-51.5-51.307-80.961-120.961-29.462-69.653-29.462-149.422 0-79.385 29.462-148.423 29.461-69.038 80.961-120.346 51.5-51.307 120.846-80.461 69.346-29.154 148.73-29.154 79.384 0 148.73 29.154 69.346 29.154 120.846 80.461 51.5 51.308 80.961 120.346Q859.999-561 859.999-481.615q0 79.769-29.462 149.422-29.461 69.654-80.961 120.961-51.5 51.308-120.846 81.269-69.346 29.962-148.73 29.962Zm0-43.384q37.308-40.231 61.385-87.308 24.077-47.077 39.461-110.308H379.769Q394.923-278.693 419-230.885q24.077 47.807 61 87.5Zm-63.46-8.154Q388.463-188 366.809-236.423q-21.654-48.424-34.039-104.578H173.539q38.384 77.539 96.462 122.463 58.077 44.923 146.539 66.999Zm127.92-.615q78.539-17.615 142.001-66.692t100-122.155H627.845q-14.923 56.308-36.077 104.347-21.154 48.039-47.308 84.5Zm-385.536-234.23h165.539q-3.77-27.385-4.847-50.423-1.077-23.039-1.077-44.808 0-24.231 1.385-45.847 1.385-21.615 5.154-46.769H158.924q-7.385 23.231-10.462 44.923-3.077 21.693-3.077 47.693 0 26.384 3.077 49 3.077 22.615 10.462 46.231Zm212.153 0h218.462q4.384-30.231 5.769-51.462 1.385-21.231 1.385-43.769 0-21.539-1.385-41.962-1.385-20.423-5.769-50.654H371.077q-4.385 30.231-5.77 50.654-1.384 20.423-1.384 41.962 0 22.538 1.384 43.769 1.385 21.231 5.77 51.462Zm263.845 0h166.154q7.385-23.616 10.462-46.231 3.077-22.616 3.077-49 0-26-3.077-47.693-3.077-21.692-10.462-44.923H635.922q3.385 33.077 4.769 53.885 1.385 20.807 1.385 38.731 0 22.384-1.692 44-1.693 21.615-5.462 51.231Zm-7.692-233.231h159.231q-35.307-76.692-97.808-125.193-62.5-48.5-145.193-64.038 28.077 37.769 49.039 84.808 20.962 47.039 34.731 104.423Zm-247.461 0h202.077q-13.307-56.461-39.5-106.538Q516.154-776.23 480-815.384q-33.923 31.231-57.269 77.154-23.347 45.923-42.962 118.615Zm-206.23 0h159.846q12.539-55.538 33.001-102.077 20.462-46.539 49.154-86.539-82.693 15.923-144.078 63.616-61.385 47.692-97.923 125Z"></path></svg>');function g2(t){var e=f2();x(t,e)}function h2(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Dr,"$globalConstraintsStore",n),i=T();let o=U(e,"elementHandlers",8);const a=Pb,c=u=>{const _=xa(u,!0),p=Rp(u),g=Cu(_,p);_n(g)};k(()=>r(),()=>{N(i,(u,_)=>{var v;const p=!!((v=_.meta)!=null&&v.categories.includes(S.GLOBAL_CONSTRAINT)),g=r().has(u);return p&&!g})}),Ie(),pe(),gd(t,{title:"Global Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{g2(u)},"panel-content":(u,_)=>{var p=Se(),g=de(p);at(g,1,()=>r().entries(),([v,m])=>v,(v,m)=>{let E=()=>h(m)[0],O=()=>h(m)[1];_2(v,{get toolId(){return E()},get value(){return O()},get elementHandlers(){return o()}})}),x(u,p)}}}),le()}var p2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');function v2(t){var e=p2();x(t,e)}var m2=ie("<!> <!>",1),E2=ie("<!> <!> <!> <!>",1);function C2(t,e){ae(e,!1);const n=ot(),r=()=>Ce(vt,"$localConstraintsStore",n),i=T();let o=U(e,"elementHandlers",8);const a=$b,c=u=>{yp(u),yr(u)};k(()=>(r(),S),()=>{N(i,(u,_)=>{var v;const p=r().has(u);return!!((v=_.meta)!=null&&v.categories.includes(S.LOCAL_CONSTRAINT))&&!p})}),Ie(),pe(),gd(t,{title:"Local Constraints",onAddTool:c,categories:a,get elementHandlerFilterFunc(){return h(i)},get elementHandlers(){return o()},$$slots:{"title-icon":(u,_)=>{v2(u)},"panel-content":(u,_)=>{var p=E2(),g=de(p),v=Ze(()=>Zr(d.GIVEN,o()));ts(g,{get elementInfo(){return h(v)}});var m=$(g,2),E=Ze(()=>Zr(d.REGIONS,o()));ts(m,{get elementInfo(){return h(E)}});var O=$(m,2),I=Ze(()=>Zr(d.FOG,o()));ts(O,{get elementInfo(){return h(I)}});var b=$(O,2);at(b,1,()=>r().entries(),([y,D])=>y,(y,D)=>{let M=()=>h(D)[0];var W=Se(),j=de(W);{var F=q=>{var J=m2(),oe=de(J);Ap(oe,{get toolId(){return M()},get elementHandlers(){return o()}});var re=$(oe,2);Np(re,{get toolId(){return M()}}),x(q,J)};fe(j,q=>{Gb(M())&&q(F)})}x(y,W)}),x(u,p)}}}),le()}var O2=ie('<div class="color-picker-container svelte-1xojqdm"><label class="color-picker-button-label svelte-1xojqdm"><input type="color" class="color-picker-button svelte-1xojqdm"></label> <label class="color-input-container svelte-1xojqdm"><div class="color-picker-hash svelte-1xojqdm">#</div> <input class="color-picker-input svelte-1xojqdm" type="text"></label></div>');function Qc(t,e){ae(e,!1);const n=T();let r=U(e,"value",8),i=U(e,"onChangeCb",8,void 0),o=T(void 0);function a(m){const E=Xc(m);E&&i()&&i()(E)}k(()=>Z(r()),()=>{N(n,r())}),k(()=>(h(n),Xc),()=>{pu(h(n))&&N(o,Xc(h(n)))}),Ie(),pe();var c=O2(),u=V(c);const _=Ze(()=>fp(h(n)));var p=V(u);Qt(p),z(u);var g=$(u,2),v=$(V(g),2);Qt(v),A(v,"spellcheck",!1),A(v,"maxlength",30),z(g),z(c),ee(()=>{A(u,"style",`--choosen-color: ${h(o)??""}`),yt(u,"transparent",h(_))}),jn(p,()=>h(n),m=>N(n,m)),Me("change",p,()=>a(h(n))),jn(v,()=>h(n),m=>N(n,m)),Me("input",v,()=>a(h(n))),x(t,c),le()}var I2=ie('<div class="property-block svelte-1nlm1x1"><span class="property-name svelte-1nlm1x1"> </span> <!></div>');function ns(t,e){let n=U(e,"name",8);var r=I2(),i=V(r),o=V(i,!0);z(i);var a=$(i,2);ft(a,e,"default",{}),z(r),ee(()=>nt(o,n())),x(t,r)}var b2=ie('<input class="control-slider svelte-1rsuho6" type="range">');function w2(t,e){ae(e,!1);let n=U(e,"min",8),r=U(e,"max",8),i=U(e,"value",12),o=U(e,"step",24,()=>(r()-n())/10),a=U(e,"onChangeCb",8,void 0),c=U(e,"onInputCb",8,void 0);pe();var u=b2();Qt(u),ee(()=>{A(u,"min",n()),A(u,"max",r()),A(u,"step",o())}),jn(u,i),Me("change",u,()=>{a()&&a()(i())}),Me("input",u,()=>{c()&&c()(i())}),x(t,u),le()}function Kr(t,e){let n=U(e,"name",8),r=U(e,"value",12),i=U(e,"min",8),o=U(e,"max",8),a=U(e,"step",24,()=>(o()-i())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);ns(t,{get name(){return`${n()??""}: ${r()??""}`},children:(_,p)=>{w2(_,{get min(){return i()},get max(){return o()},get step(){return a()},get onChangeCb(){return c()},get onInputCb(){return u()},get value(){return r()},set value(g){r(g)},$$legacy:!0})},$$slots:{default:!0}})}var y2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M74.022-154.022v-652.196h812.196v652.196H74.022Z"></path></svg>');function L2(t){var e=y2();x(t,e)}var A2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M234.022-234.022v-492.196h492.196v492.196H234.022Z"></path></svg>');function N2(t){var e=A2();x(t,e)}var S2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480.033-74.022q-83.468 0-157.541-31.878-74.073-31.879-129.393-87.199-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878Z"></path></svg>');function R2(t){var e=S2();x(t,e)}var x2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M269.609-115.935 59.217-480 269.61-844.065h420.782L900.783-480 690.391-115.935H269.609Z"></path></svg>');function T2(t){var e=x2();x(t,e)}var D2=ie('<label class="shape-panel-label svelte-1xyqbmo"><input type="radio" class="svelte-1xyqbmo"> <!></label>');function k2(t,e){ae(e,!1);const n=[];let r=U(e,"value",8),i=U(e,"selectedShape",12),o=U(e,"title",8),a=U(e,"updateShapeCb",8,void 0);pe();var c=D2(),u=V(c);Qt(u);var _,p=$(u,2);ft(p,e,"default",{}),z(c),ee(()=>{A(c,"title",o()),yt(c,"active",r()===i()),_!==(_=r())&&(u.value=(u.__value=r())==null?"":r())}),Ka(n,[],u,()=>(r(),i()),i),Me("change",u,()=>a()&&a()(r())),x(t,c),le()}var G2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><ellipse></ellipse></svg>');function M2(t){var e=G2(),n=V(e);A(n,"cx",480),A(n,"cy",-480),A(n,"rx",480),A(n,"ry",300),z(e),x(t,e)}var U2=ie('<div class="icon-wrapper svelte-18euf14"><!></div>'),F2=ie('<div class="radio-container svelte-18euf14"></div>');function $2(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"selectedShape",8),i=U(e,"possibleShapes",8),o=U(e,"updateShapeCb",8,void 0);const a=new Map([[H.CIRCLE,R2],[H.ELLIPSE,M2],[H.SQUARE,N2],[H.RECTANGLE,L2],[H.POLYGON,T2]]);pe(),ns(t,{get name(){return n()},children:(c,u)=>{var _=F2();at(_,5,i,Lt,(p,g)=>{k2(p,{get title(){return h(g)},get value(){return h(g)},get selectedShape(){return r()},get updateShapeCb(){return o()},children:(v,m)=>{var E=Se(),O=de(E);{var I=b=>{var y=U2(),D=V(y);ch(D,()=>a.get(h(g)),(M,W)=>{W(M,{})}),z(y),x(b,y)};fe(O,b=>{a.has(h(g))&&b(I)})}x(v,E)},$$slots:{default:!0}})}),z(_),x(c,_)},$$slots:{default:!0}}),le()}var P2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M215-117q-34 0-67-11.5T90-166q35-12 50-35t15-62q0-44 30.5-74.5T260-368q44 0 74.5 30.5T365-263q0 64-43.5 105T215-117Zm230-237-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Z"></path></svg>');function H2(t){var e=P2();x(t,e)}var B2=ie('<button class="reset-shape svelte-101d6gh">Reset to default</button>'),W2=ie("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function z2(t,e){ae(e,!1);const n=ot(),r=()=>Ce(en,"$toolStore",n),i=()=>Ce(fr,"$currentConstraintStore",n),o=T(),a=T(),c=T();let u=T(!0),_=U(e,"elementHandlers",8);function p(I,b){const y=(I==null?void 0:I.shape)??(b?lu(b):void 0);return Zc(y),y}function g(I,b){h(c)&&(hb(c,h(c)[I]=b),Zc(h(c)))}function v(){h(a)&&(N(c,lu(h(a))),Zc(h(c)))}function m(I){return I&&[H.CIRCLE,H.SQUARE,H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(I)}function E(I){return I&&[H.POLYGON,H.LINE_WITH_POLYGON_ENDS].includes(I)}function O(I){return I&&[H.ELLIPSE,H.RECTANGLE].includes(I)}k(()=>(r(),Z(_())),()=>{N(o,Zr(r(),_()))}),k(()=>h(o),()=>{N(a,h(o).shape)}),k(()=>(i(),h(a)),()=>{var I;N(c,p(((I=i())==null?void 0:I.constraint)??null,h(a)))}),Ie(),pe(),al(t,{get isOpen(){return h(u)},set isOpen(I){N(u,I)},$$slots:{"panel-header":(I,b)=>{sl(I,{slot:"panel-header",title:"Shape Editor",get isOpen(){return h(u)},set isOpen(y){N(u,y)},$$slots:{"title-icon":(y,D)=>{H2(y)}},$$legacy:!0})},"panel-content":(I,b)=>{var y=Se(),D=de(y);{var M=W=>{var j=W2(),F=de(j);{var q=De=>{var be=B2();Me("click",be,v),x(De,be)};fe(F,De=>{Hb(h(a))&&De(q)})}var J=$(F,2);{var oe=De=>{$2(De,{get possibleShapes(){return h(a).allowedTypes},name:"Shape",get selectedShape(){return h(c).type},updateShapeCb:be=>g("type",be)})};fe(J,De=>{var be;h(a).allowedTypes&&h(a).allowedTypes.length&&((be=h(c))!=null&&be.type)&&De(oe)})}var re=$(J,2);{var te=De=>{var be=Ze(()=>h(a).n.lb??3),ke=Ze(()=>h(a).n.ub??10);Kr(De,{name:"Number of Sides",get value(){return h(c).n},get min(){return h(be)},get max(){return h(ke)},step:1,onChangeCb:Te=>g("n",Te)})};fe(re,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.n)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.n)!=null&&Te.editable)&&E(h(c).type)&&De(te)})}var Ee=$(re,2);{var Oe=De=>{var be=Ze(()=>h(a).r.lb??0),ke=Ze(()=>h(a).r.ub??1),Te=Ze(()=>h(a).r.step??.05);Kr(De,{name:"Radius",get value(){return h(c).r},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:Nt=>g("r",Nt)})};fe(Ee,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.r)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.r)!=null&&Te.editable)&&m(h(c).type)&&De(Oe)})}var he=$(Ee,2);{var $e=De=>{var be=Ze(()=>h(a).width.lb??0),ke=Ze(()=>h(a).width.ub??1),Te=Ze(()=>h(a).width.step??.05);Kr(De,{name:"Width",get value(){return h(c).width},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:Nt=>g("width",Nt)})};fe(he,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.width)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.width)!=null&&Te.editable)&&O(h(c).type)&&De($e)})}var ze=$(he,2);{var Ae=De=>{var be=Ze(()=>h(a).height.lb??0),ke=Ze(()=>h(a).height.ub??1),Te=Ze(()=>h(a).height.step??.05);Kr(De,{name:"Height",get value(){return h(c).height},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:Nt=>g("height",Nt)})};fe(ze,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.height)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.height)!=null&&Te.editable)&&O(h(c).type)&&De(Ae)})}var Le=$(ze,2);{var rt=De=>{var be=Ze(()=>h(a).angle.lb??0),ke=Ze(()=>h(a).angle.ub??360),Te=Ze(()=>h(a).angle.step??15);Kr(De,{name:"Angle",get value(){return h(c).angle},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:Nt=>g("angle",Nt)})};fe(Le,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.angle)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.angle)!=null&&Te.editable)&&De(rt)})}var Ye=$(Le,2);{var zt=De=>{var be=Ze(()=>h(a).inset.lb??0),ke=Ze(()=>h(a).inset.ub??.5),Te=Ze(()=>h(a).inset.step??.01);Kr(De,{name:"Inset",get value(){return h(c).inset},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:Nt=>g("inset",Nt)})};fe(Ye,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.inset)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.inset)!=null&&Te.editable)&&De(zt)})}var wn=$(Ye,2);{var Mr=De=>{ns(De,{name:"Stroke",children:(be,ke)=>{Qc(be,{get value(){return h(c).stroke},onChangeCb:Te=>g("stroke",Te)})},$$slots:{default:!0}})};fe(wn,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.stroke)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.stroke)!=null&&Te.editable)&&De(Mr)})}var nn=$(wn,2);{var hr=De=>{var be=Ze(()=>h(a).strokeWidth.lb??0),ke=Ze(()=>h(a).strokeWidth.ub??.8),Te=Ze(()=>h(a).strokeWidth.step??.01);Kr(De,{name:"Stroke Width",get value(){return h(c).strokeWidth},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:Nt=>g("strokeWidth",Nt)})};fe(nn,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.strokeWidth)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.strokeWidth)!=null&&Te.editable)&&De(hr)})}var si=$(nn,2);{var or=De=>{var be=Ze(()=>h(a).strokeDasharray.lb??0),ke=Ze(()=>h(a).strokeDasharray.ub??1),Te=Ze(()=>h(a).strokeDasharray.step??.01);Kr(De,{name:"Stroke Dasharray",get value(){return h(c).strokeDasharray},get min(){return h(be)},get max(){return h(ke)},get step(){return h(Te)},onChangeCb:Nt=>g("strokeDasharray",Nt)})};fe(si,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.strokeDasharray)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.strokeDasharray)!=null&&Te.editable)&&De(or)})}var Un=$(si,2);{var ki=De=>{ns(De,{name:"Fill",children:(be,ke)=>{Qc(be,{get value(){return h(c).fill},onChangeCb:Te=>g("fill",Te)})},$$slots:{default:!0}})};fe(Un,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.fill)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.fill)!=null&&Te.editable)&&De(ki)})}var Ur=$(Un,2);{var Dt=De=>{ns(De,{name:"Font Color",children:(be,ke)=>{Qc(be,{get value(){return h(c).fontColor},onChangeCb:Te=>g("fontColor",Te)})},$$slots:{default:!0}})};fe(Ur,De=>{var be,ke,Te;((be=h(c))==null?void 0:be.fontColor)!==void 0&&((Te=(ke=h(a))==null?void 0:ke.fontColor)!=null&&Te.editable)&&De(Dt)})}x(W,j)};fe(D,W=>{h(a)&&W(M)})}x(I,y)}},$$legacy:!0}),le()}var Y2=ie('<button class="menu-button svelte-1xx9pud"><div class="icon-wrapper svelte-1xx9pud"><!></div></button>');function Ss(t,e){let n=U(e,"clickCb",8),r=U(e,"title",8);var i=Y2(),o=V(i),a=V(o);ft(a,e,"default",{}),z(o),z(i),ee(()=>A(i,"title",r())),Me("click",i,Vn(function(...c){var u;(u=n())==null||u.apply(this,c)})),x(t,i)}var j2=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"></path></svg>');function K2(t){var e=j2();x(t,e)}var V2=ie('<div class="buttons-container svelte-kc00rw"><!></div>');function ll(t,e){var n=V2(),r=V(n);ft(r,e,"default",{}),z(n),x(t,n)}var X2=ie('<button class="generate-button svelte-109b8le">Auto-Generate</button>'),q2=ie('<button class="modal-button">Apply</button> <button class="modal-button">Cancel</button>',1),Z2=ie('<div class="edit-puzzle-meta-content svelte-109b8le"><!> <input class="input-title svelte-109b8le" type="text" placeholder="Title"> <!> <input class="input-authors svelte-109b8le" type="text" placeholder="Authors (For multiple authors, separate them with a semi-colon)"> <!> <textarea class="input-ruleset svelte-109b8le" placeholder="Ruleset"></textarea> <!> <input class="input-ctc-link svelte-109b8le" type="text" placeholder="CTC Link"> <!> <input class="input-ctc-youtube-link svelte-109b8le" type="text" placeholder="CTC Youtube Link"> <!></div>');function Q2(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Tr,"$puzzleMetaStore",n),i=()=>Ce(Dr,"$globalConstraintsStore",n),o=()=>Ce(vt,"$localConstraintsStore",n);let a=U(e,"showModal",12,!1),c=T(""),u=T(""),_=T(""),p=T(""),g=T("");function v(){a(!1)}function m(){const b=h(u)?E(h(u)):["Anonymous"],D={title:h(c)?h(c):"Sudoku",authors:b,ruleset:h(_),ctcYoutubeUrl:h(p),ctcUrl:h(g)};ET(D),a(!1)}function E(b){return b.split(/\s*[;]\s*/)}function O(){var j,F,q,J;let b="";const y=xt,D=i();!!D.get(d.SUDOKU_RULES_DO_NOT_APPLY)?b+=`Sudoku rules do not apply.

`:b+=`Sudoku rules apply.

`;for(const[oe,re]of D.entries())if(oe!==d.SUDOKU_RULES_DO_NOT_APPLY&&re){const te=y[oe],Ee=((j=te.menu)==null?void 0:j.name)??te.toolId,Oe=(F=te.meta)==null?void 0:F.description;b+=`**${Ee}**: ${Oe}

`}const W=o();for(const[oe,re]of W.entries())if(Object.keys(re).length>0){const Ee=y[oe],Oe=((q=Ee.menu)==null?void 0:q.name)??Ee.toolId,he=(J=Ee.meta)==null?void 0:J.description;b+=`**${Oe}**: ${he}

`}return b.trim()}function I(){const b=O();N(_,b)}k(()=>(Z(a()),r(),Ma),()=>{if(!a()){const b=r().authors;N(c,r().title??""),N(u,b?Ma(b,"; ","; "):""),N(_,r().ruleset??""),N(p,r().ctcYoutubeUrl??""),N(g,r().ctcUrl??"")}}),Ie(),pe(),kr(t,{title:"Edit Puzzle Meta",get showModal(){return a()},set showModal(b){a(b)},children:(b,y)=>{var D=Z2(),M=V(D);qr(M,{title:"Title"});var W=$(M,2);Qt(W);var j=$(W,2);qr(j,{title:"Authors"});var F=$(j,2);Qt(F);var q=$(F,2);qr(q,{title:"Ruleset",children:(he,$e)=>{var ze=X2();Me("click",ze,I),x(he,ze)},$$slots:{default:!0}});var J=$(q,2);tb(J),A(J,"rows",8);var oe=$(J,2);qr(oe,{title:"CTC Link"});var re=$(oe,2);Qt(re);var te=$(re,2);qr(te,{title:"CTC Youtube Link"});var Ee=$(te,2);Qt(Ee);var Oe=$(Ee,2);ll(Oe,{children:(he,$e)=>{var ze=q2(),Ae=de(ze),Le=$(Ae,2);Me("click",Ae,m),Me("click",Le,v),x(he,ze)},$$slots:{default:!0}}),z(D),jn(W,()=>h(c),he=>N(c,he)),jn(F,()=>h(u),he=>N(u,he)),jn(J,()=>h(_),he=>N(_,he)),jn(re,()=>h(g),he=>N(g,he)),jn(Ee,()=>h(p),he=>N(p,he)),x(b,D)},$$slots:{default:!0},$$legacy:!0}),le()}var J2=ie("<!> <!>",1);function eD(t){let e=T(!1);function n(){N(e,!0)}var r=J2(),i=de(r);Ss(i,{title:"Edit Puzzle Meta",clickCb:n,children:(a,c)=>{K2(a)},$$slots:{default:!0}});var o=$(i,2);Q2(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var tD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M145.087-145.869q-31.507 0-55.362-23.856-23.856-23.855-23.856-55.362v-509.826q0-32.305 23.856-56.044 23.855-23.739 55.362-23.739h269.695L481-747.913h333.913q32.305 0 56.044 23.855 23.739 23.856 23.739 55.363H145.087v445.869l100.304-385.869h705.914l-102.478 391.39q-11.087 38.696-34.718 55.066-23.631 16.37-63.893 16.37H145.087Z"></path></svg>');function nD(t){var e=tD();x(t,e)}var rD=ie('<!> <input type="file" accept=".json" class="svelte-1jv3gq5">',1);function iD(t,e){ae(e,!1);let n=T(null),r=T(null);function i(){var o;(o=h(n))==null||o.click()}k(()=>(h(r),Pa),()=>{if(h(r)&&h(r).length){const o=h(r)[0],a=new FileReader;a.readAsText(o),a.onload=function(c){if(c.target||alert(a.error),c.target&&c.target.result){const u=c.target.result;if(typeof u!="string")return;const _=JSON.parse(u),p=rT(_);console.log(p),yT(p),Pa()}},a.onerror=function(){alert(a.error)}}}),Ie(),pe(),Ss(t,{title:"Open Puzzle",clickCb:i,children:(o,a)=>{var c=rD(),u=de(c);nD(u);var _=$(u,2);Ii(_,p=>N(n,p),()=>h(n)),xb(_,()=>h(r),p=>N(r,p)),x(o,c)},$$slots:{default:!0}}),le()}var oD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M106.218-145.869q-32.507 0-55.863-23.356-23.356-23.355-23.356-55.862v-509.826q0-32.74 23.356-56.262 23.356-23.521 55.863-23.521h747.564q32.664 0 55.941 23.521 23.278 23.522 23.278 56.262v509.826q0 32.507-23.278 55.862-23.277 23.356-55.941 23.356H106.218Zm0-79.218h747.564v-509.826H106.218v509.826ZM137.913-357h45.186v-170l112.988 170h45.826v-246h-45v170L184.609-603h-46.696v246Zm242.217 0h154.74v-46.13H430.13v-52.66h104.74v-45.404H430.13v-54.676h104.74V-603H380.13v246Zm239.522 0h170q14.45 0 24.225-9.487 9.775-9.488 9.775-23.513v-213H775.26v196h-50.173v-155h-45v155h-45.609v-196h-47.826v213q0 14.025 9.487 23.513Q605.627-357 619.652-357ZM106.218-225.087v-509.826 509.826Z"></path></svg>');function sD(t){var e=oD();x(t,e)}var aD=ie('<div class="slider-container svelte-1xwnqzn"><span class="slider-name svelte-1xwnqzn"> </span> <input class="control-slider svelte-1xwnqzn" type="range"></div>');function Mg(t,e){ae(e,!1);let n=U(e,"name",8),r=U(e,"min",8),i=U(e,"max",8),o=U(e,"value",12),a=U(e,"step",24,()=>(i()-r())/10),c=U(e,"onChangeCb",8,void 0),u=U(e,"onInputCb",8,void 0);pe();var _=aD(),p=V(_),g=V(p);z(p);var v=$(p,2);Qt(v),z(_),ee(()=>{nt(g,`${n()??""}: ${o()??""}`),A(v,"min",r()),A(v,"max",i()),A(v,"step",a())}),jn(v,o),Me("change",v,()=>{c()&&c()(o())}),Me("input",v,()=>{u()&&u()(o())}),x(t,_),le()}var lD=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),cD=ie('<div class="new-puzzle-content svelte-1gw86x0"><!> <!> <!> <input class="allowed-digits svelte-1gw86x0" type="text"> <!></div>');function uD(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);const r=4,i=20;let o=T(9),a=T(9),c=T(""),u=T(bt.range(1,10));function _(){n(!1)}function p(){Pa(),wT(h(a),h(o),h(u).sort()),n(!1)}function g(E){return E.map(I=>String(I)).join(",")}function v(){const E=Math.min(Math.max(h(a),h(o)),9);N(u,bt.range(1,E+1))}function m(E){/^-?\d+(?:,-?\d+)*$/.test(E)&&N(u,E.replaceAll(" ","").split(",").map(Number))}pe(),kr(t,{title:"New Puzzle",get showModal(){return n()},set showModal(E){n(E)},children:(E,O)=>{var I=cD(),b=V(I);Mg(b,{name:"Width",min:r,max:i,step:1,onInputCb:v,get value(){return h(o)},set value(F){N(o,F)},$$legacy:!0});var y=$(b,2);Mg(y,{name:"Height",min:r,max:i,step:1,onInputCb:v,get value(){return h(a)},set value(F){N(a,F)},$$legacy:!0});var D=$(y,2),M=Ze(()=>`Allowed Digits (for the solver): ${g(h(u))}`);qr(D,{get title(){return h(M)}});var W=$(D,2);Qt(W),ee(()=>A(W,"placeholder",g(h(u))));var j=$(W,2);ll(j,{children:(F,q)=>{var J=lD(),oe=de(J),re=$(oe,2);Me("click",oe,p),Me("click",re,_),x(F,J)},$$slots:{default:!0}}),z(I),jn(W,()=>h(c),F=>N(c,F)),Me("input",W,()=>m(h(c))),x(E,I)},$$slots:{default:!0},$$legacy:!0}),le()}var dD=ie("<!> <!>",1);function _D(t){let e=T(!1);function n(){N(e,!0)}var r=dD(),i=de(r);Ss(i,{title:"New Puzzle",clickCb:n,children:(a,c)=>{sD(a)},$$slots:{default:!0}});var o=$(i,2);uD(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var fD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M854.696-689.218v504.131q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-589.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h504.131l165.478 165.478ZM479.765-250.087q43.235 0 73.735-30.265t30.5-73.5q0-43.235-30.265-73.735-30.264-30.5-73.5-30.5-43.235 0-73.735 30.264-30.5 30.265-30.5 73.5 0 43.236 30.265 73.736 30.264 30.5 73.5 30.5ZM238.087-578.913h358v-143h-358v143Z"></path></svg>');function gD(t){var e=fD();x(t,e)}var hD=ie('<button class="modal-button">Cancel</button>'),pD=ie('<div class="save-puzzle-content svelte-1myhj34"><div class="save-puzzle-options svelte-1myhj34"><div class="column-left svelte-1myhj34"><button class="modal-button">Download JSON</button> <button class="modal-button">Download PNG</button> <button class="modal-button">Download SVG</button></div> <div class="column-right svelte-1myhj34"><span class="preview-header svelte-1myhj34">Board preview</span> <div id="puzzle-preview"><svg><use href="#board-svg" width="100%" height="100%"></use></svg></div></div></div> <!></div>');function vD(t,e){ae(e,!1);const n=ot(),r=()=>Ce(to,"$svgRefStore",n),i=()=>Ce(Tr,"$puzzleMetaStore",n),o=()=>Ce(As,"$puzzleStore",n),a=T();let c=U(e,"showModal",12,!1);function u(I){const b=getComputedStyle(I);let y="";for(let D of b){const M=b.getPropertyValue(D);M&&(y+=`${D}:${M};`)}return y}function _(I){const b=I.cloneNode(!0);(b instanceof SVGElement||b instanceof HTMLElement)&&(b.style.cssText=u(I));const y=I.childNodes;for(let D=0;D<y.length;D++){const M=y[D];if(M instanceof Element){const W=_(M);b.replaceChild(W,b.childNodes[D])}}return b}function p(I){if(!I)return;const b=_(I),y=Ua(i()),M=new XMLSerializer().serializeToString(b),W=new Image,j=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),F=URL.createObjectURL(j);W.onload=()=>{const q=I.getBoundingClientRect(),J=q.width,oe=q.height,re=document.createElement("canvas"),te=window.devicePixelRatio||1;re.width=J*te,re.height=oe*te;const Ee=re.getContext("2d");Ee&&(Ee.scale(te,te),Ee.drawImage(W,0,0,J,oe),re.toBlob(Oe=>{if(!Oe)return;const he=URL.createObjectURL(Oe),$e=document.createElement("a");$e.href=he,$e.download=y,$e.click(),URL.revokeObjectURL(he)}))},W.src=F}function g(I,b="download.svg"){if(!I)return;const y=_(I);let M=new XMLSerializer().serializeToString(y);M.includes("<?xml")||(M=`<?xml version="1.0" standalone="no"?>\r
`+M);const W=new Blob([M],{type:"image/svg+xml"}),j=URL.createObjectURL(W),F=document.createElement("a");F.href=j,F.download=b,F.click(),URL.revokeObjectURL(j)}const v=()=>{const I=nT(o());return JSON.stringify(I,null,2)},m=()=>{function I(D,M,W){var j=document.createElement("a"),F=new Blob([D],{type:W});j.href=URL.createObjectURL(F),j.download=M,j.click(),URL.revokeObjectURL(j.href)}const b=v(),y=Ua(i());I(b,`${y}.json`,"text/plain")};function E(){c(!1)}const O=1;k(()=>r(),()=>{N(a,r())}),Ie(),pe(),kr(t,{title:"Save Puzzle",get showModal(){return c()},set showModal(I){c(I)},children:(I,b)=>{var y=pD(),D=V(y),M=V(D),W=V(M),j=$(W,2),F=$(j,2);z(M);var q=$(M,2),J=$(V(q),2),oe=V(J);A(oe,"width",400*O),A(oe,"height",300*O),z(J),z(q),z(D);var re=$(D,2);ll(re,{children:(te,Ee)=>{var Oe=hD();Me("click",Oe,E),x(te,Oe)},$$slots:{default:!0}}),z(y),Me("click",W,m),Me("click",j,()=>p(h(a))),Me("click",F,()=>g(h(a))),x(I,y)},$$slots:{default:!0},$$legacy:!0}),le()}var mD=ie("<!> <!>",1);function ED(t){let e=T(!1);function n(){N(e,!0)}var r=mD(),i=de(r);Ss(i,{title:"Save Puzzle",clickCb:n,children:(a,c)=>{gD(a)},$$slots:{default:!0}});var o=$(i,2);vD(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var CD=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M375.565-65.869 354.999-196.39q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-121.956 56.261L61.347-364.522l111.391-81.261q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L61.347-596.043l106.001-186.045 123.087 55.696q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l20.566-132.652h208.87l20.566 131.652q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l122.522-55.696 105.435 186.045-111.957 79.826q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l111.957 80.261-106.001 187.175-122.522-56.261q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674L584.435-65.869h-208.87ZM478.87-350q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"></path></svg>');function xp(t){var e=CD();x(t,e)}var OD=ie('<div class="group-content-wrapper svelte-ye0bp8"><!></div>'),ID=ie('<div class="settings-group svelte-ye0bp8"><!> <!></div>');function Sa(t,e){let n=U(e,"title",8),r=U(e,"isOpen",12,!0);var i=ID(),o=V(i);qr(o,{get title(){return n()},isCollapsible:!0,get isOpen(){return r()},set isOpen(c){r(c)},$$legacy:!0});var a=$(o,2);ol(a,{get isOpen(){return r()},children:(c,u)=>{var _=OD(),p=V(_);ft(p,e,"default",{}),z(_),x(c,_)},$$slots:{default:!0}}),z(i),x(t,i)}var bD=ie('<label class="switch svelte-1qamvj1"><input type="checkbox" class="toggle svelte-1qamvj1"> <span class="slider round svelte-1qamvj1"></span></label>');function wD(t,e){let n=U(e,"value",8),r=U(e,"onClickCb",8),i=U(e,"disabled",8,!1);var o=bD(),a=V(o);Qt(a),Oi(2),z(o),ee(()=>{yt(o,"disabled",i()),ah(a,n()),a.disabled=i()}),Me("change",a,function(...c){var u;(u=r())==null||u.apply(this,c)}),x(t,o)}var yD=ie('<div class="settings-toggle svelte-1webjt1"><!> <span class="svelte-1webjt1"> </span></div>');function Vr(t,e){ae(e,!1);let n=U(e,"value",8),r=U(e,"name",8),i=U(e,"updateCb",8,void 0),o=U(e,"disabled",8,!1);function a(){o()||i()&&i()(!n())}pe();var c=yD(),u=V(c);wD(u,{get value(){return n()},onClickCb:a,get disabled(){return o()}});var _=$(u,2),p=V(_,!0);z(_),z(c),ee(()=>{yt(c,"disabled",o()),nt(p,r())}),Me("click",_,Vn(a)),x(t,c),le()}var LD=ie("<!> <!>",1),AD=ie("<!> <!> <!>",1),ND=ie("<!> <!>",1),SD=ie('<div class="settings-content svelte-1yz4j5j"><!> <!> <!> <!></div>');function Tp(t,e){ae(e,!1);const n=ot(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce(rl,"$gameModeStore",n),o=T();let a=U(e,"showModal",12,!1);k(()=>r(),()=>{N(o,r())}),Ie(),pe(),kr(t,{title:"Settings",get showModal(){return a()},set showModal(c){a(c)},children:(c,u)=>{var _=SD(),p=V(_);Sa(p,{title:"General",children:(O,I)=>{Vr(O,{get value(){return h(o).darkMode},name:"Darkmode (Alt+Shift+D)",updateCb:pb})},$$slots:{default:!0}});var g=$(p,2);Sa(g,{title:"Tools",children:(O,I)=>{var b=LD(),y=de(b);Vr(y,{get value(){return h(o).penToolActive},name:"Pen Tool",updateCb:vb});var D=$(y,2);Vr(D,{disabled:!0,get value(){return h(o).letterToolActive},name:"Letter Tool",updateCb:mb}),x(O,b)},$$slots:{default:!0}});var v=$(g,2);Sa(v,{title:"Gameplay",children:(O,I)=>{var b=AD(),y=de(b);Vr(y,{name:"Check Conflicts",get value(){return h(o).checkConflicts},updateCb:Eb});var D=$(y,2);Vr(D,{name:"Highlight Pencilmark Conflicts",get value(){return h(o).highlightPencilmarkConflicts},updateCb:Cb});var M=$(D,2);Vr(M,{name:"Highlight Cells Seen By Selection",get value(){return h(o).highlightCellsSeenBySelection},updateCb:Ob}),x(O,b)},$$slots:{default:!0}});var m=$(v,2);{var E=O=>{Sa(O,{title:"Setting Mode Display",children:(I,b)=>{var y=ND(),D=de(y);Vr(D,{name:"Hide Fog",get value(){return h(o).hideFog},updateCb:Ib});var M=$(D,2);Vr(M,{name:"Show Solution",get value(){return h(o).showSolution},updateCb:bb}),x(I,y)},$$slots:{default:!0}})};fe(m,O=>{i()===so.SETTING&&O(E)})}z(_),x(c,_)},$$slots:{default:!0},$$legacy:!0}),le()}var RD=ie("<!> <!>",1);function xD(t){let e=T(!1);function n(){N(e,!0)}var r=RD(),i=de(r);Ss(i,{title:"Settings",clickCb:n,children:(a,c)=>{xp(a)},$$slots:{default:!0}});var o=$(i,2);Tp(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var TD=ie('<div class="panel-container svelte-119c2ta"><!> <!> <!> <!> <!></div>');function DD(t){var e=TD(),n=V(e);_D(n);var r=$(n,2);ED(r);var i=$(r,2);iD(i,{});var o=$(i,2);eD(o);var a=$(o,2);xD(a),z(e),x(t,e)}var kD=ie('<button class="entry-panel-button svelte-yhctjt">Set Solution</button>');function GD(t,e){ae(e,!1);let n=T(!1);function r(){const i=ut(En),o=[];for(let a=0;a<i.nRows;a++){const c=[];for(let u=0;u<i.nCols;u++){const _=i.getCell(a,u);if(!_)continue;const p=_.value;c.push(p)}o.push(c)}dd(o)}pe(),al(t,{get isOpen(){return h(n)},set isOpen(i){N(n,i)},$$slots:{"panel-header":(i,o)=>{sl(i,{slot:"panel-header",title:"Other Tools",get isOpen(){return h(n)},set isOpen(a){N(n,a)},$$legacy:!0})},"panel-content":(i,o)=>{var a=kD();Me("click",a,r),x(i,a)}},$$legacy:!0}),le()}const MD={allow_var:!0,allow_int_list:!1,allow_interval:!1,allow_var_list:!1};function UD(t){t=t.trim();const e=/^(>|>=|<|<=)\s*(-?\d+)$/,n=/^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;let r=e.exec(t);if(r){const i=r[1],o=parseInt(r[2],10);if(i===">"||i===">=")return{lower_bound:[o,i]};if(i==="<"||i==="<=")return{upper_bound:[o,i]}}if(r=n.exec(t),r){const i=r[1],o=parseInt(r[2],10),a=parseInt(r[3],10),c=r[4];return{lower_bound:[o,i==="["?">=":">"],upper_bound:[a,c==="]"?"<=":"<"]}}return null}function FD(t){const e=/^(-?\d+)$/,n=t.match(e);return n?n[0]:null}function $D(t){const e=/^([a-zA-Z][a-zA-Z0-9]*)$/,n=t.match(e);return n?n[0]:null}function PD(t){return/^-?\d+(?:,-?\d+)*$/.test(t)?t.split(",").map(Number):null}function Dp(t){const e=/[a-zA-Z][a-zA-Z0-9]*/,n=/-?\d+/,r=new RegExp(`(?:${n.source}|${e.source})`);return new RegExp(`^${r.source}(?:,${r.source}\\s*)*$`).test(t)?t.split(","):null}function HD(t,e){const n=FD(t);if(n)return{type:"number",parsed:parseInt(n)};const r=$D(t);if(e.allow_var&&r)return{type:"variable",parsed:r};const i=PD(t);if(e.allow_int_list&&i)return{type:"number_list",parsed:i};const o=UD(t);if(e.allow_interval&&o)return{type:"interval",parsed:o};const a=Dp(t);return e.allow_var_list&&a?{type:"var_list",parsed:a}:null}var Y=(t=>(t.BOARD="board",t.BOARD_REGIONS="board_regions",t.YIN_YANG="yin_yang",t.NURIMISAKI="nurimisaki",t.NURIKABE_SHADING="nurikabe_shading",t.NURIKABE_REGIONS="nurikabe_regions",t.NORINORI_SHADING="norinori_shading",t.SHIKAKU_REGIONS="shikaku_regions",t.SHIKAKU_WIDTH="shikaku_width",t.SHIKAKU_HEIGHT="shikaku_height",t.UNKNOWN_REGIONS="unknown_regions",t.TWO_CONTIGUOUS_REGIONS="two_contiguous_regions",t.SUGURU_REGIONS="suguru_regions",t.DOUBLERS="doublers_grid",t.INDEXER_CELLS_GRID="indexer_cells_grid",t.NEGATORS="negators_grid",t.VALUES_GRID="values_grid",t.SASHIGANE="sashigane",t.SASHIGANE_BENDS="sashigane_bends",t.CELL_CENTER_LOOP="cell_center_loop",t.CAVE_SHADING="cave_shading",t.CAVE_REGIONS="cave_regions",t.FILLOMINO_REGIONS="fillomino_area",t.GALAXY_REGIONS="galaxy_regions",t.GALAXY_SIZES="galaxy_sizes",t.GOLDILOCKS_REGIONS="goldilocks_regions",t.LITS_SHADING="lits_shading",t.LITS_REGIONS="lits_regions",t.LITS_GRID="lits_grid",t.PENTOMINO_REGIONS="pentomino_regions",t.STAR_BATTLE="star_battle",t.LITS_WHITE_BLACK_STAR_BATTLE="lits_white_black_star_battle",t.COUNTING_CIRCLES_COLORS="counting_circles_colors_board",t.MAZE_DIRECTED_PATH="maze_directed_path",t.CONNECT_FOUR="connect_four",t))(Y||{});function _t(t,e){return`${e}[${t.r},${t.c}]`}function Ri(t,e){return t.map(r=>_t(r,e))}function ve(t,e){return"["+Ri(t,e).join(",")+"]"}function we(t){const[e,n]=[t.r,t.c];return`board[${e},${n}]`}function lt(t){return t.map(n=>we(n))}function Ei(t){return`constraint alldifferent([${t.join(",")}]);
`}function dt(t,e){return t&&(t=`
% ${e}
`+t),t}function cl(t,e){const n=[Ue.N,Ue.S,Ue.W,Ue.E],r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i);r.push(o)}return r}function hd(t,e,n=void 0){n||(n=[Ue.N,Ue.S,Ue.W,Ue.E]);const r=[];for(const i of n){const o=t.getCellsInDirection(e.r,e.c,i),a="["+lt(o).join(",")+"]";r.push(a)}return r}function ul(t,e,n,r){let i="";const o=r.get(e);if(o)for(const a of Object.values(n)){const c=o(t,a);i+=c}return i}class BD{constructor(e){me(this,"model_str","");me(this,"used_vars");me(this,"puzzle");me(this,"edge_list");this.puzzle=e,this.edge_list=[],this.used_vars=new Set}add(e){this.model_str+=e}hasVariable(e){return this.used_vars.has(e)}addVariable(e){this.used_vars.add(e)}getOrSetSharedVar(e,n,r=MD){const i=HD(e,r);if(!i)return null;if(i.type==="number"){const c=i.parsed;return["",String(c)]}let o="";if(i.type==="variable"){const c=i.parsed;return this.hasVariable(c)||(o+=`var int: ${c};
`,this.addVariable(c)),[o,c]}if(!n)return null;if(this.hasVariable(n)||(o+=`var int: ${n};
`,this.addVariable(n)),i.type==="interval"){const c=i.parsed;if(c.lower_bound){const u=c.lower_bound[0],_=c.lower_bound[1];o+=`constraint ${n} ${_} ${u};
`}if(c.upper_bound){const u=c.upper_bound[0],_=c.upper_bound[1];o+=`constraint ${n} ${_} ${u};
`}}if(i.type==="number_list"){const u="{"+i.parsed.join(",")+"}";o+=`constraint member(${u}, ${n});
`}if(i.type==="var_list"){const c=i.parsed,u="["+c.join(",")+"]";for(const _ of c){const p=parseInt(_);Number.isNaN(p)&&!this.hasVariable(_)&&(o+=`var int: ${_};
`,this.addVariable(_))}o+=`constraint member(${u}, ${n});
`}return[o,n]}}function WD(t){const e=t.split(`
`),n={},r=/^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/,i=/^predicate\s+(\w+)\s*\(/,o=/^test\s+(\w+)\s*\(/,a=/^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;let c=null,u=0,_=0,p=0;for(let b=0;b<e.length;b++){const y=e[b].trim(),D=y.match(r),M=y.match(i),W=y.match(o),j=y.match(a);if(!c&&(D||M||W||j)){c={name:(D||M||W||j)[1],startLine:b,content:[e[b]],type:D?"function":M?"predicate":W?"test":"variable"},u=(y.match(/\(/g)||[]).length-(y.match(/\)/g)||[]).length,_=(y.match(/\{/g)||[]).length-(y.match(/\}/g)||[]).length,p=(y.match(/\[/g)||[]).length-(y.match(/\]/g)||[]).length;continue}if(c&&(c.content.push(e[b]),u+=(y.match(/\(/g)||[]).length-(y.match(/\)/g)||[]).length,_+=(y.match(/\{/g)||[]).length-(y.match(/\}/g)||[]).length,p+=(y.match(/\[/g)||[]).length-(y.match(/\]/g)||[]).length,u===0&&_===0&&p===0&&y.endsWith(";"))){n[c.name]={...c,endLine:b};let F=c.startLine;for(;F>0&&e[F-1].trim().startsWith("%");)F-=1;n[c.name].startLine=F,c=null}}function g(b){const y=[],D=b.match(r),M=b.match(i),W=b.match(o);for(const j of Object.keys(n)){const F=n[j].type;if(F==="function"||F==="test"||F==="predicate"){if(D||M||W)continue;new RegExp(`\\b${j}\\s*\\(`,"g").test(b)&&y.push(j)}else if(F==="variable"){const q=new RegExp(`^(?:array|set|int|var)\\b.*?:\\s*${j}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`);if(b.match(q))continue;new RegExp(`\\b${j}\\b`,"g").test(b)&&y.push(j)}}return y}const v=new Set;for(const b of e)g(b).forEach(D=>v.add(D));console.log("usedDefinitions",v);const m=Object.values(n).filter(b=>!v.has(b.name)).map(b=>({start:b.startLine,end:b.endLine}));m.sort((b,y)=>y.start-b.start);const E=[...e];for(const b of m)E.splice(b.start,b.end-b.start+1);const O=[];let I=!1;for(const b of E)b.trim()===""?I||(O.push(b),I=!0):(O.push(b),I=!1);return O.join(`
`)}function Ug(t){let e=t,n=e.length;for(;e=WD(e),e.length!=n;)n=e.length;return e}function kp(t){return t.length===0?"[| |]":`[| ${t.map(r=>r.map(i=>i.toString()).join(", ")).map(r=>`${r}`).join(`
 |`)} |]`}function zD(t,e){const n=[...e.getUsedRegions()];if(n.length){const r=Math.min(...n),i=Math.max(...n),o=[];for(let c=0;c<e.nRows;c++){const u=[];for(let _=0;_<e.nCols;_++){const p=e.getCell(c,_);!p||p.region===null?u.push(r-1):u.push(p.region)}o.push(u)}const a=kp(o);t.add(`array[ROW_IDXS, COL_IDXS] of var ${r-1}..${i}: board_regions = array2d(ROW_IDXS, COL_IDXS, ${a});
`)}}function pd(t){const e=new Map;for(const n of t){const r=n.value??"",i=e.get(r);if(!i){e.set(r,[n]);continue}i.push(n)}return e}function Ft(t,e){return e.map(r=>t.getCell(r.r,r.c)).filter(r=>!!r)}function YD(t,e){const r=t.grid.getPositiveDiagonal(),i=lt(r);let o=Ei(i);return o=`
% Positive Diagonal Constraint
`+o,o}function jD(t,e){const r=t.grid.getNegativeDiagonal(),i=lt(r);let o=Ei(i);return o=`
% Negative Diagonal Constraint
`+o,o}function KD(t,e){const r=t.grid.getPositiveDiagonal(),o="["+lt(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function VD(t,e){const r=t.grid.getNegativeDiagonal(),o="["+lt(r).join(",")+"]";let a=`
% ${e}
`;return a+=`constraint count_unique_values(${o}) == 3;
`,a}function XD(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getPositiveDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,_),v=n.getCell(u,_+(u-p));if(!g||!v)continue;const m=we(g),E=we(v),I=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=I}}return o}function qD(t,e){const n=t.grid,[r,i]=[n.nRows,n.nCols];if(r!==i)return"";let o="";const a=n.getNegativeDiagonal();for(const c of a){const[u,_]=[c.r,c.c];for(let p=0;p<u;p++){const g=n.getCell(p,_),v=n.getCell(u,_-(u-p));if(!g||!v)continue;const m=we(g),E=we(v),I=`constraint is_unimodular_line(${`[${m}, ${E}]`}, 2);
`;o+=I}}return o}function ZD(t,e){const n=t.grid;let r=`
% ${e}
`;const i=[...n.getUsedRegions()].length;for(let o=0;o<i;o++){const a=n.getDisjointGroup(o),_=`constraint alldifferent(${`[${lt(a).join(",")}]`});
`;r+=_}return r}function QD(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getNeighboorCells(i).filter(g=>g.r+g.c>=i.r+i.c),c=we(i),_=`[${lt(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${_});
`;r+=p}return r}function JD(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const a=n.getCellsByKnightMove(i).filter(g=>g.r>=i.r||g.c>=i.c),c=we(i),_=`[${lt(a).join(",")}]`,p=`constraint different_from_group_p(${c}, ${_});
`;r+=p}return r}function ek(t,e){let n="";return n+=`constraint anti_giraffe_p(board);
`,n=dt(n,`${e}`),n}function tk(t,e){let n="";return n+=`constraint anti_long_knight_p(board);
`,n=dt(n,`${e}`),n}function nk(t,e){let n="";return n+=`constraint tango_p(board);
`,n=dt(n,`${e}`),n}function rk(t,e){let n="";return n+=`constraint anti_entropy_p(board);
`,n=dt(n,`${e}`),n}function*Gr(t){for(const e of t.getAllCells()){const n=t.getOrthogonallyAdjacentCells(e).filter(r=>r.r>=e.r||r.c>=e.c);for(const r of n)yield[e,r]}}function ik(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Gr(n)){const a=we(i),c=we(o),u=`constraint not consecutive_p(${a}, ${c});
`;r+=u}return r}function ok(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Gr(n)){const a=we(i),c=we(o),u=`constraint not ratio_p(${a}, ${c}, 2);
`;r+=u}return r}function sk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const i of n.getAllCells()){const o=n.getRow(i.r),c=`[${lt(o).join(",")}]`,u=i.c+1,_=`constraint indexing_column_p(${c}, ${u});
`;r+=_}return r}function ak(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);
`,n}function lk(t,e){let n=`
% ${e}
`;return n+=`constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);
`,n}function ck(t,e){let n="";return n+=`array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;
`,n+=`constraint odd_even_grid_p(board, even_odd_grid);
`,n+=`constraint connected_region(even_odd_grid, 1);
`,n=dt(n,`${e}`),n}function Jc(t,e){const n=t.grid,i=t.localConstraints.get(d.XV);if(!(e===d.ALL_V_GIVEN||e===d.ALL_X_GIVEN||e===d.ALL_XV_GIVEN))return"";const o=[];if(i)for(const c of Object.values(i)){const u=c.cells,_=new Set(u.map(g=>n.getCell(g.r,g.c)).filter(g=>!!g)),p=c.value;(e===d.ALL_V_GIVEN&&(p==="v"||p==="V")||e===d.ALL_X_GIVEN&&(p==="x"||p==="X")||e===d.ALL_XV_GIVEN)&&o.push(_)}let a="";for(const[c,u]of Gr(n)){if(o.find(v=>v.has(c)&&v.has(u)))continue;const p=we(c),g=we(u);if(e===d.ALL_V_GIVEN){const v=`constraint ${p} + ${g} != 5;
`;a+=v}else if(e===d.ALL_X_GIVEN){const v=`constraint ${p} + ${g} != 10;
`;a+=v}else{const v=`constraint ${p} + ${g} != 5 /\\ (${p} + ${g} != 10);
`;a+=v}}return a=dt(a,`${e}`),a}function no(t,e){const n=[];if(e)for(const r of Object.values(e)){const i=r.cells,o=new Set(i.map(a=>t.getCell(a.r,a.c)).filter(a=>!!a));n.push(o)}return n}function uk(t,e){const n=t.grid,i=t.localConstraints.get(d.XY_DIFFERENCES),o=no(n,i);let a="";for(const[c,u]of Gr(n)){if(o.find(E=>E.has(c)&&E.has(u)))continue;const p=we(c),g=we(u);let v="";if(c.r==u.r){const O=n.getRow(c.r)[0];v=we(O)}else if(c.c==u.c){const O=n.getCol(c.c)[0];v=we(O)}if(!v)continue;const m=`constraint abs(${p} - ${g}) != ${v};
`;a+=m}return a=dt(a,`${e}`),a}function dk(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.DIFFERENCE),o=r.get(d.RATIO);let a=no(n,i);a=[...a,...no(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"1"));const u=[...new Set(c)];let _="";for(const[p,g]of Gr(n)){if(a.find(O=>O.has(p)&&O.has(g)))continue;const m=we(p),E=we(g);for(const O of u){const I=parseInt(O),b=`constraint abs(${m} - ${E}) != ${I};
`;_+=b}}return _=dt(_,`${e}`),_}function _k(t,e){const n=t.grid,r=t.localConstraints,i=r.get(d.RATIO),o=r.get(d.DIFFERENCE);let a=no(n,i);a=[...a,...no(n,o)];let c=[];i&&(c=Object.values(i).map(p=>p.value).map(p=>p||"2"));const u=[...new Set(c)];let _="";for(const[p,g]of Gr(n)){if(a.find(O=>O.has(p)&&O.has(g)))continue;const m=we(p),E=we(g);for(const O of u){const I=parseInt(O),b=`constraint not ratio_p(${m}, ${E}, ${I});
`;_+=b}}return _=dt(_,`${e}`),_}function fk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_KROPKI),o=no(n,i);let a="";for(const[c,u]of Gr(n)){if(o.find(O=>O.has(c)&&O.has(u)))continue;const p=we(c),g=we(u),v=_t(c,Y.YIN_YANG),m=_t(u,Y.YIN_YANG),E=`constraint not yin_yang_kropki_p(${p}, ${g}, ${v}, ${m});
`;a+=E}return a=dt(a,`${e}`),a}function gk(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_COUNT_SHADED_CELLS),o=i?Object.values(i):[];function a(u,_){return u.find(p=>p.cell.r===_.r&&p.cell.c===_.c)}let c="";for(const u of n.getAllCells()){const _=a(o,u),p=_?_.directions:[],g=we(u),v=[Ue.E,Ue.N,Ue.S,Ue.W];for(const m of v){if(p.includes(m))continue;const E=n.getCellsInDirection(u.r,u.c,m),O=ve(E,Y.YIN_YANG);c+=`constraint count(${O}, 1) != ${g};
`}}return c=dt(c,`${e}`),c}function vd(t,e){const n=new Set;if(e)for(const r of Object.values(e)){const i=r.cell,o=t.getCell(i.r,i.c);o&&n.add(o)}return n}function hk(t,e){const n=t.grid,i=t.localConstraints.get(d.INDEXING_COLUMN),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=n.getRow(c.r),g=`[${lt(_).join(",")}]`,v=c.c+1,m=`constraint not indexing_column_p(${g}, ${v});
`;a+=m}return a=dt(a,`${e}`),a}function pk(t,e){const n=t.grid,i=t.localConstraints.get(d.RADAR),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=we(c),[p,g,v,m]=hd(n,c),E=`constraint not radar_p(${_}, ${p}, ${g}, ${v}, ${m}, 9);
`;a+=E}return a=dt(a,`${e}`),a}function vk(t,e){const n=t.grid,i=t.localConstraints.get(d.NURIMISAKI_UNSHADED_ENDPOINTS),o=vd(n,i);let a="";for(const c of n.getAllCells()){if(o.has(c))continue;const _=`nurimisaki[${c.r},${c.c}]`,v=`constraint not nurimisaki_unshaded_endpoint_p(${"["+n.getOrthogonallyAdjacentCells(c).map(m=>`nurimisaki[${m.r},${m.c}]`).join(", ")+"]"}, ${_});
`;a+=v}return a=dt(a,`${e}`),a}function mk(t,e){const n=t.grid;let r=`
% ${e}
`;for(const[i,o]of Gr(n)){const a=we(i),c=we(o),u=`nurimisaki[${i.r},${i.c}]`,_=`nurimisaki[${o.r},${o.c}]`,p=`constraint (${u} == 0 /\\ ${_} == 0) -> abs(${a} - ${c}) >= 5;
`;r+=p}return r}function Ek(t,e){const n=t.grid,i=t.localConstraints.get(d.YIN_YANG_REGION_SUM_LINE);if(!i)return"";let o=`
% ${e}
`;for(const a of Object.values(i)){const u=a.cells.map(p=>n.getCell(p.r,p.c)).filter(p=>!!p),_=ve(u,Y.YIN_YANG);o+=`constraint count_unique_values(${_}) >= 2;
`}return o}function Ck(t,e){const n=t.grid;let r=`
% ${e}
`;const i=Y.YIN_YANG;for(const[o,a]of Gr(n)){const c=we(o),u=we(a),_=`${i}[${o.r},${o.c}]`,p=`${i}[${a.r},${a.c}]`,g=`constraint (${_} == 1 /\\ ${p} == 1) -> abs(${c} - ${u}) >= 5;
`;r+=g}return r}function Ok(t,e){let n="";return n+=`constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);
`,n=dt(n,`${e}`),n}function Ik(t,e){let n="";return n+=`constraint yin_yang_fillomino_parity_p(board, yin_yang);
`,n=dt(n,`${e}`),n}function bk(t,e){let n="";return n+=`constraint cave_cells_are_odd_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function wk(t,e){let n="";return n+=`constraint cave_walls_are_even_p(board, cave_shading);
`,n=dt(n,`${e}`),n}function yk(t,e){let n="";return n+=`constraint shading_2x2_allowed_p(cave_shading, 1..3);
`,n=dt(n,`${e}`),n}function Lk(t,e){let n="";return n+=`constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);
`,n=dt(n,`${e}`),n}function Ak(t,e){let n="";return n+=`constraint every_cell_is_in_a_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Nk(t,e){let n="";return n+=`constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Sk(t,e){let n="";return n+=`constraint two_symmetric_galaxies_p(galaxy_regions);
`,n=dt(n,`${e}`),n}function Rk(t,e){let n="";return n+=`constraint one_galaxy_is_german_whispers(board, galaxy_regions);
`,n=dt(n,`${e}`),n}function xk(t,e){let n="";const r=t.grid;for(const i of r.getAllCells()){const o=r.getNeighboorCells(i).filter(_=>i.region!==null&&_.region===i.region),a=_t(i,Y.BOARD),c=_t(i,Y.YIN_YANG),u=ve(o,Y.BOARD);n+=`constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${a}, ${c}, ${u});
`}return n=dt(n,`${e}`),n}function Tk(t,e){let n="";return n+=`constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Dk(t,e){let n="";return n+=`constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function kk(t,e){let n="";return n+=`constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Gk(t,e){let n="";return n+=`constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);
`,n=dt(n,`${e}`),n}function Mk(t,e){let n="";const r=t.grid,o=[...t.grid.getUsedRegions()].map(c=>t.grid.getRegion(c).length),a=o.length?Math.max(...o):r.nCols*r.nRows;return n+=`constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${a});
`,n=dt(n,`${e}`),n}function Uk(t,e){let n="";return n+=`constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);
`,n=dt(n,`${e}`),n}function Fk(t,e){let n="";const o="{"+[...t.grid.getUsedRegions()].join(",")+"}";return n+=`constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${o});
`,n=dt(n,`${e}`),n}function $k(t,e){let n="";const r=t.grid,i=t.grid.getUsedRegions();for(const o of i){const a=r.getRegion(o),c=[...new Set(a.map(_=>_.r))],u=[...new Set(a.map(_=>_.c))];for(const _ of u){const p=a.filter(v=>v.c===_),g=ve(p,Y.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}for(const _ of c){const p=a.filter(v=>v.r===_),g=ve(p,Y.BOARD);n+=`constraint entropy_and_modularity_set_p(${g});
`}}return n=dt(n,`${e}`),n}function Pk(t){const e=t.globalConstraints;if(e.get(d.SUDOKU_RULES_DO_NOT_APPLY))return"";const n=t.grid;let r="";r+=`
% row constraints (digits do not repeat on rows)
`;const i=n.nRows;for(let c=0;c<i;c++){const u=n.getRow(c),_=lt(u),p=Ei(_);r+=p}r+=`
% col constraints (digits do not repeat on cols)
`;const o=n.nCols;for(let c=0;c<o;c++){const u=n.getCol(c),_=lt(u),p=Ei(_);r+=p}if(!e.get(d.CHAOS_CONSTRUCTION)){r+=`
% region constraints (digits do not repeat on regions)
`;const c=n.getUsedRegions();for(const u of c){const _=n.getRegion(u),p=lt(_),g=Ei(p);r+=g}}return r}function Hk(t){const e=d.HEXED_SUDOKU;if(!t.globalConstraints.get(e))return"";let i=`
% ${e}
`;return i+=`constraint hexed_sudoku_p(board, ALLOWED_DIGITS);
`,i}const Bk=new Map([[d.POSITIVE_DIAGONAL,YD],[d.NEGATIVE_DIAGONAL,jD],[d.POSITIVE_ANTIDIAGONAL,KD],[d.NEGATIVE_ANTIDIAGONAL,VD],[d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,XD],[d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,qD],[d.ANTIKING,QD],[d.ANTIKNIGHT,JD],[d.ANTI_LONG_KNIGHT,tk],[d.ANTI_GIRAFFE,ek],[d.DISJOINT_GROUPS,ZD],[d.TANGO,nk],[d.NONCONSECUTIVE,ik],[d.NONRATIO,ok],[d.ANTI_ENTROPY,rk],[d.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,$k],[d.GLOBAL_INDEXING_COLUMN,sk],[d.ALL_V_GIVEN,Jc],[d.ALL_X_GIVEN,Jc],[d.ALL_XV_GIVEN,Jc],[d.ALL_DIFFERENCES_GIVEN,dk],[d.ALL_RATIOS_GIVEN,_k],[d.ALL_XY_DIFFERENCES_GIVEN,uk],[d.ALL_YIN_YANG_KROPKI_GIVEN,fk],[d.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,gk],[d.ALL_INDEXING_COLUMN_GIVEN,hk],[d.ALL_RADARS_GIVEN,pk],[d.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,vk],[d.NURIMISAKI_PATH_GERMAN_WHISPERS,mk],[d.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,Ek],[d.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,ck],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,ak],[d.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,lk],[d.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,Ok],[d.CAVE_CELLS_ARE_ODD,bk],[d.CAVE_WALLS_ARE_EVEN,wk],[d.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,yk],[d.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,Lk],[d.YIN_YANG_FILLOMINO_PARITY,Ik],[d.TWO_SYMMETRIC_GALAXIES,Sk],[d.EVERY_CELL_BELONGS_TO_A_GALAXY,Ak],[d.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,Nk],[d.ONE_GALAXY_IS_A_GERMAN_WHISPERS,Rk],[d.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,xk],[d.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,Ck],[d.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,Tk],[d.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,Fk],[d.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,Dk],[d.DIRECTED_PATH_IS_REGION_SUM_LINE,kk],[d.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,Gk],[d.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,Mk],[d.DIRECTED_PATH_IS_PARITY_LINE,Uk]]);function Wk(t){let e="";const n=t.globalConstraints;for(const[r,i]of n.entries()){if(!i)continue;const o=Bk.get(r);if(!o)continue;const a=o(t,r);e+=a}return e}function md(t,e){const r=e.cells.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return lt(r)}function Ed(t,e){const n=e.map(o=>t.getCell(o.r,o.c)).filter(o=>!!o);return`[${lt(n.slice(1)).join(",")}]`}function Gp(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]";for(const c of r.lines){const u=Ed(e,c);i+=`constraint arrow_p(${a}, ${u});
`}return i}function zk(t,e,n,r){let i="";const o=md(e,r);if(o.length===1){const a=o[0],c=r.lines;for(const u of c){const p=`constraint average_arrow_p(${Ed(e,u)}, ${a});
`;i+=p}}return i}function Yk(t,e,n,r){let i="";const o=r.cells.map(u=>e.getCell(u.r,u.c)).filter(u=>!!u),a=ve(o,Y.UNKNOWN_REGIONS),c=r.lines.map(u=>u.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_));for(const u of c){if(u.length<=1)continue;const _=ve(u.slice(1),Y.UNKNOWN_REGIONS);i+=`constraint chaos_construction_arrow_p(${a}, ${_});
`}return i+=Gp(t,e,n,r),i}function jk(t,e,n,r){let i="";const a="["+md(e,r).join(",")+"]",c=r.lines;for(const u of c){const _=Ed(e,u),p=`constraint bulbous_arrow_p(${a}, ${_});
`;i+=p}return i}const Kk=new Map([[d.ARROW,Gp],[d.AVERAGE_ARROW,zk],[d.BULBOUS_ARROW,jk],[d.CHAOS_CONSTRUCTION_ARROW,Yk]]);function Vk(t,e,n,r){let i="";const o=Kk.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function Jr(t,e){const n=Ft(t,e.cells);return lt(n)}function Mp(t,e,n){const i=`[${Jr(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function dl(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!0},i=`cage_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Cd(t,e,n,r,i){const a=`[${Jr(e,r).join(",")}]`,c=r.value,u=dl(t,c,n);if(!u)return"";const _=u[1];let p=u[0];return p+=`constraint ${i}(${a}, ${_});
`,p}function Xk(t,e,n,r){const i=Jr(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=dl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint killer_cage(${o}, ${u});
`,_}function qk(t,e,n,r){const i=Jr(e,r),o=`[${i.join(",")}]`,a=r.value;if(!a)return Ei(i);const c=dl(t,a,n);if(!c)return"";const u=c[1];let _=c[0];return _+=`constraint inverted_killer_cage_p(${o}, ${u});
`,_}function Zk(t,e,n,r){return Cd(t,e,n,r,"sum_cage_p")}function Qk(t,e,n,r){return Mp(e,r,"parity_balance_cage_p")}function Jk(t,e,n,r){return Mp(e,r,"sum_cage_look_and_say_p")}function e3(t,e,n,r){return Cd(t,e,n,r,"divisible_killer_cage_p")}function t3(t,e,n,r){return Cd(t,e,n,r,"spotlight_cage_p")}function n3(t,e,n,r){const o=`[${Jr(e,r).join(",")}]`,a=r.value;if(a){const c=parseInt(a);return`constraint unique_values_cage_p(${o}, ${c}, ALLOWED_DIGITS);
`}return""}function r3(t,e,n,r){const o=`[${Jr(e,r).join(",")}]`,a=r.value;let c="";const u=dl(t,a,n);if(u){const m=u[1];c+=u[0],c+=`constraint sum(${o}) == ${m};
`}const _=r.cells,p=Ft(e,_),g=[];for(const m of p)e.getOrthogonallyAdjacentCells(m).forEach(O=>{!p.includes(O)&&!g.includes(O)&&g.push(O)});const v=ve(g,Y.BOARD);return c+=`constraint vaulted_cage_p(${o}, ${v});
`,c}function Up(t,e,n,r,i){const o=Ft(e,r.cells),a=ve(o,Y.BOARD),c=ve(o,Y.YIN_YANG),u=r.value;if(u){const _=parseInt(u);return`constraint ${i}(${a}, ${c}, ${_});
`}return""}function i3(t,e,n,r){return Up(t,e,n,r,"yin_yang_antithesis_killer_cage_p")}function o3(t,e,n,r){return Up(t,e,n,r,"yin_yang_breakeven_killer_cage_p")}function s3(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint doublers_killer_cage_p(${o}, ${a}, ${u});
`}return""}function a3(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.VALUES_GRID),c=r.value;if(c){const u=parseInt(c);return`constraint negators_killer_cage_p(${o}, ${a}, ${u});
`}return""}function l3(t,e){let n="";const r=pd(e);for(const i of r.values())if(!(i.length<=1))for(const[o,a]of i.flatMap((c,u)=>i.slice(u+1).map(_=>[c,_]))){const u=`[${Jr(t,o).join(",")}]`,p=`[${Jr(t,a).join(",")}]`;n+=`constraint multisets_equal_p(${u}, ${p});
`}return n}const c3=new Map([[d.KILLER_CAGE,Xk],[d.INVERTED_KILLER_CAGE,qk],[d.SUM_CAGE,Zk],[d.PARITY_BALANCE_CAGE,Qk],[d.SUM_CAGE_LOOK_AND_SAY,Jk],[d.DIVISIBLE_KILLER_CAGE,e3],[d.SPOTLIGHT_CAGE,t3],[d.UNIQUE_DIGITS_CAGE,n3],[d.VAULTED_CAGE,r3],[d.YIN_YANG_ANTITHESIS_KILLER_CAGE,i3],[d.YIN_YANG_BREAKEVEN_KILLER_CAGE,o3],[d.DOUBLERS_KILLER_CAGE,s3],[d.NEGATORS_KILLER_CAGE,a3]]);function u3(t,e,n,r){let i="";const o=c3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}else if(n===d.MULTISET_CAGE){const a=Object.values(r),c=l3(e,a);i+=c}return i}function d3(t,e,n,r){const i=e.r+.5,o=e.c+.5,a=n-i,c=r-o,u=Math.floor(n+a),_=Math.floor(r+c);return t.getCell(u,_)}function _3(t,e){const n=[],r=[],i=[];for(const o of t.getAllCells()){const a=d3(t,o,e.r,e.c);a&&!n.includes(a)?(n.push(o),r.push(a)):r.includes(o)||i.push(o)}return[n,r,i]}function f3(t,e,n){let r="";for(let c=0;c<n.length;c++){const u=n[c],_=u.cell,p=c+1,[g,v,m]=_3(e,_),E=ve(g,Y.GALAXY_REGIONS),O=ve(v,Y.GALAXY_REGIONS),I=ve(m,Y.GALAXY_REGIONS);r+=`% galaxy ${p}
`,r+=`constraint galaxy_center_p(${E}, ${O}, ${I}, ${p});
`,r+=`constraint connected_region(${Y.GALAXY_REGIONS}, ${p});
`;const b=u.value;if(!b)continue;const y=parseInt(b);r+=`constraint galaxy_sum_p(${Y.BOARD}, ${Y.GALAXY_REGIONS}, ${y}, ${p});
`}if(!n.length)return r;const i=e.nCols*e.nRows,a=`${n.length+1}..${i}`;return r+=`
constraint order_remaining_galaxies_p(${Y.GALAXY_REGIONS}, ${a});
`,r}function g3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`center_corner_edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function h3(t,e,n,r){const i=r.cell,[o,a]=[i.r,i.c],c=r.value,u=g3(t,c,n);if(!u)return"";const _=u[1];let p=u[0],g=[];if(o%1===0&&a%1===0?g=nd(i).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0):(o%1===.5&&a%1===0||o%1===0&&a%1===.5)&&(g=id(i).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0)),!g.length)return"";const v=ve(g,Y.BOARD),m=ve(g,Y.YIN_YANG);return p+=`constraint conditional_sum_f(${v}, ${m}, 1) == ${_};
`,p}const p3=new Map([[d.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,h3]]),v3=new Map([[d.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,f3]]);function m3(t,e,n,r){let i="";const o=v3.get(n),a=p3.get(n);if(a)for(const[c,u]of Object.entries(r)){const _=a(t,e,c,u);i+=_}else if(o){const c=Object.values(r),u=o(t,e,c);i+=u}return i}function Fg(t,e){const n=e.map(i=>t.getCell(i.r,i.c)).filter(i=>!!i);return lt(n)}function E3(t,e){const r="["+Fg(t,e.cells).join(",")+"]",o="["+Fg(t,e.cells2).join(",")+"]";return`constraint clone_region_p(${r}, ${o});
`}const C3=new Map([[d.CLONE_REGION,E3]]);function O3(t,e,n,r){return ul(e,n,r,C3)}function Od(t,e){const n=Ft(t,e.cells);return lt(n)}function Id(t,e,n){const i=`[${Od(t,e).join(",")}]`;return`constraint ${n}(${i});
`}function Fp(t,e,n,r=""){const o=`[${Od(t,e).join(",")}]`;let a=e.value;if(a||(a=r),a){const c=parseInt(a);return`constraint ${n}(${o}, ${c});
`}return""}function I3(t,e,n,r){const o=`[${Od(e,r).join(",")}]`,a=r.value;if(!a)return"";const c=Dp(a);if(!c)return"";let u="";for(const p of c){const g=parseInt(p);Number.isNaN(g)&&!t.hasVariable(p)&&(u+=`var int: ${p};
`,t.addVariable(p))}const _="["+c.join(",")+"]";return u+=`constraint quadruple_p(${o}, ${_});
`,u}function b3(t,e,n,r){return Fp(e,r,"corner_sum_p")}function w3(t,e,n,r){return Fp(e,r,"corner_even_count_p")}function y3(t,e,n,r){return Id(e,r,"corner_sum_of_three_equals_the_other_p")}function L3(t,e,n,r){return Id(e,r,"equal_diagonal_differences_p")}function A3(t,e,n,r){return Id(e,r,"product_square_p")}const N3=new Map([[d.QUADRUPLE,I3],[d.CORNER_SUM,b3],[d.CORNER_EVEN_COUNT,w3],[d.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,y3],[d.PRODUCT_SQUARE,A3],[d.EQUAL_DIAGONAL_DIFFERENCES,L3]]);function S3(t,e,n,r){let i="";const o=N3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function _l(t,e){const n=Ft(t,e.cells);return lt(n)}function R3(t,e,n){const r=_l(t,e),[i,o]=r;return`constraint ${n}(${i}, ${o});
`}function x3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`edge_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function fl(t,e,n,r,i,o=""){var m;const a=_l(e,r),[c,u]=a,_=(m=r.value)!=null&&m.length?r.value:o,p=x3(t,_,n);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint ${i}(${c}, ${u}, ${g});
`,v}function T3(t,e,n,r){const i=_l(e,r),[o,a]=i;return r.value==="V"||r.value==="v"?`constraint ${o} + ${a} = 5;
`:`constraint ${o} + ${a} = 10;
`}function D3(t,e,n,r){return fl(t,e,n,r,"ratio_p","2")}function k3(t,e,n,r){return fl(t,e,n,r,"abs_difference","1")}function $g(t,e,n,r){const i=_l(e,r),[o,a]=i,c=r.value;return c==="<"?`constraint ${o} < ${a};
`:c===">"?`constraint ${o} > ${a};
`:""}function G3(t,e,n,r){return fl(t,e,n,r,"edge_sum_p")}function M3(t,e,n,r){return fl(t,e,n,r,"edge_modulo_p")}function U3(t,e,n,r){return R3(e,r,"edge_factor_p")}function F3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=lt(i),[c,u]=i;let _="";if(c.r==u.r){const v=e.getRow(c.r)[0];_=we(v)}else if(c.c==u.c){const v=e.getCol(c.c)[0];_=we(v)}return _?`constraint abs(${o} - ${a}) == ${_};
`:""}function $3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=lt(i),c=Ri(i,Y.YIN_YANG),[u,_]=c;return`constraint yin_yang_kropki_p(${o}, ${a}, ${u}, ${_});
`}function P3(t,e,n,r){const i=Ft(e,r.cells),[o,a]=lt(i),c=Ri(i,Y.YIN_YANG),[u,_]=c;return`constraint yin_yang_white_kropki_p(${o}, ${a}, ${u}, ${_});
`}function gl(t,e,n){const r=Ft(t,e.cells),i=Ri(r,n),[o,a]=i;return`constraint ${o} != ${a};
`}function H3(t,e,n,r){return gl(e,r,Y.UNKNOWN_REGIONS)}function B3(t,e,n,r){return gl(e,r,Y.FILLOMINO_REGIONS)}function W3(t,e,n,r){return gl(e,r,Y.SUGURU_REGIONS)}function z3(t,e,n,r){return gl(e,r,Y.CAVE_SHADING)}const Y3=new Map([[d.XV,T3],[d.DIFFERENCE,k3],[d.RATIO,D3],[d.EDGE_INEQUALITY,$g],[d.ONE_WAY_DOOR,$g],[d.EDGE_SUM,G3],[d.EDGE_MODULO,M3],[d.EDGE_FACTOR,U3],[d.XY_DIFFERENCES,F3],[d.YIN_YANG_KROPKI,$3],[d.YIN_YANG_WHITE_KROPKI,P3],[d.FILLOMINO_REGION_BORDER,B3],[d.UNKNOWN_REGION_BORDER,H3],[d.CHAOS_CONSTRUCTION_SUGURU_BORDER,W3],[d.EDGE_CAVE_ONE_OF_EACH,z3]]);function j3(t,e,n,r){let i="";const o=Y3.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function K3(t,e,n){const r={allow_var:!0,allow_interval:!0,allow_int_list:!1},i=`line_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Rs(t,e,n=!1){let r=Ft(t,e.cells);return n&&(r=[...new Set(r)]),lt(r)}function gt(t,e,n,r=!1){const o=`[${Rs(t,e,r).join(",")}]`;return`constraint ${n}(${o});
`}function ir(t,e,n,r,i,o=""){var v;const c=`[${Rs(e,r).join(",")}]`,u=(v=r.value)!=null&&v.length?r.value:o,_=K3(t,u,n);if(!_)return"";const p=_[1];let g=_[0];return g+=`constraint ${i}(${c}, ${p});
`,g}function bd(t,e,n){let i=e.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>!!g),o=!1;i.length>2&&i[0]===i[i.length-1]&&(i=i.slice(0,-1),o=!0);const c=`[${lt(i).join(",")}]`,u=e.value;if(!u)return"";const _=parseInt(u);return`constraint ${n}(${c}, ${_}, ${o});
`}function V3(t,e,n,r){return gt(e,r,"renban",!0)}function X3(t,e,n,r){return gt(e,r,"double_renban_p",!0)}function q3(t,e,n,r){return gt(e,r,"renrenbanban_p",!0)}function Z3(t,e,n,r){return gt(e,r,"knabner_p",!0)}function Q3(t,e,n,r){return gt(e,r,"renban_or_nabner_line_p",!0)}function J3(t,e,n,r){return gt(e,r,"out_of_order_consecutive_line_p")}function e5(t,e,n,r){return ir(t,e,n,r,"whispers","5")}function t5(t,e,n,r){return`constraint whispers(${`[${Rs(e,r).join(",")}]`}, 4);
`}function n5(t,e,n,r){return gt(e,r,"strictly_increasing")}function r5(t,e,n,r){return gt(e,r,"fuzzy_thermo_p")}function i5(t,e,n,r){return gt(e,r,"increasing")}function o5(t,e,n,r){return ir(t,e,n,r,"custom_thermo_p")}function s5(t,e,n,r){return gt(e,r,"palindrome")}function a5(t,e,n,r){return ir(t,e,n,r,"sum_line_p")}function l5(t,e,n,r){return gt(e,r,"xv_line_p")}function c5(t,e,n,r){return ir(t,e,n,r,"at_least_x_line_p","10")}function u5(t,e,n,r){return ir(t,e,n,r,"product_line_p")}function d5(t,e,n,r){return ir(t,e,n,r,"maximum_adjacent_difference_line_p","2")}function _5(t,e,n,r){return gt(e,r,"adjacent_multiples_line_p")}function f5(t,e,n,r){return gt(e,r,"index_line_p")}function g5(t,e,n,r){return gt(e,r,"zipper_line_p")}function h5(t,e,n,r){return bd(e,r,"segmented_sum_line_p")}function p5(t,e,n,r){return gt(e,r,"segmented_sum_and_renban_line_p")}function v5(t,e,n,r){return bd(e,r,"n_consecutive_renban_line_p")}function m5(t,e,n,r){return bd(e,r,"n_consecutive_fuzzy_sum_line_p")}function E5(t,e,n,r){const i=Ft(e,r.cells);let o="";const a=[];for(let u=0;u<i.length;u++){const _=i[u],p=e.getRow(_.r),g=ve(p,Y.BOARD),v=`cycle_${n}_${u}`;a.push(v);const m=_.c+1;o+=`var int: ${v} = cycle_order_f(${g}, ${m});
`}const c="["+a.join(",")+"]";return o+=`constraint strictly_increasing(${c});
`,o}function C5(t,e,n,r){return gt(e,r,"adjacent_differences_count_line_p")}function O5(t,e,n,r){return gt(e,r,"same_parity_line_p")}function I5(t,e,n,r){return ir(t,e,n,r,"renban_or_whispers_p","5")}function b5(t,e,n,r){return gt(e,r,"alldifferent",!0)}function w5(t,e,n,r){return gt(e,r,"repeated_digits_line_p")}function y5(t,e,n,r){return gt(e,r,"superfuzzy_arrow_p")}function L5(t,e,n,r){return gt(e,r,"ambiguous_arrow_p",!0)}function A5(t,e,n,r){return gt(e,r,"headless_arrow_p")}function N5(t,e,n,r){return ir(t,e,n,r,"unimodular_line_p","3")}function S5(t,e,n,r){return ir(t,e,n,r,"modular_line_p","3")}function R5(t,e,n,r){return ir(t,e,n,r,"modular_or_unimodular_line_p","3")}function x5(t,e,n,r){return gt(e,r,"arithmetic_sequence_line_p")}function T5(t,e,n,r){return gt(e,r,"odd_even_oscillator_line_p")}function D5(t,e,n,r){return ir(t,e,n,r,"high_low_oscillator_line_p","5")}function k5(t,e,n,r){return gt(e,r,"adjacent_cells_are_multiples_of_difference_line_p",!1)}function G5(t,e,n,r){return gt(e,r,"look_and_say_line_p",!0)}function M5(t,e,n,r){const i=Ft(e,r.cells);function o(g){const v=[];let m=null;for(const E of g)E.r!=m?(v.push([E]),m=E.r):v[v.length-1].push(E);return v}const a=o(i);if(a.length<2)return"";const c=a[0],_=`[${lt(c).join(",")}]`;let p="";for(let g=1;g<a.length;g++){const v=a[g],E=`[${lt(v).join(",")}]`;p+=`constraint sum(${E}) == sum(${_});
`}return p}function U5(t,e,n,r){return gt(e,r,"between_line_p")}function F5(t,e,n,r){return gt(e,r,"tightrope_line_p")}function $5(t,e,n,r){return gt(e,r,"double_arrow_p")}function P5(t,e,n,r){return gt(e,r,"split_peas_p")}function H5(t,e,n,r){return gt(e,r,"parity_count_line_p")}function B5(t,e,n,r){return gt(e,r,"product_of_ends_equals_sum_of_line_p")}function $p(t){const e=[];if(!t.length)return e;let n=null,r=[];for(const i of t){const o=i.region;n!==o&&(r.length&&e.push(r),r=[]),r.push(i),n=o}return r.length&&e.push(r),e}function W5(t,e,n,r){let i="";const o=Ft(e,r.cells),a=$p(o);if(!a.length)return"";const c=`sum_line_${n}`;i+=`var int: ${c};
`;for(const u of a){const p=`constraint sum(${ve(u,Y.BOARD)}) == ${c};
`;i+=p}return i}function z5(t,e,n,r){return`constraint entropic_line_p(${`[${Rs(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9});
`}function Y5(t,e,n,r){return`constraint entropic_or_modular_line_p(${`[${Rs(e,r).join(",")}]`}, {1,2,3}, {4,5,6}, {7,8,9}, 3);
`}function j5(t,e,n,r){return gt(e,r,"peapods_p")}function K5(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.YIN_YANG);let c=r.value;c||(c="5");const u=parseInt(c);return`constraint yin_yang_shaded_whispers_line_p(${o}, ${a}, ${u});
`}function V5(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.BOARD),a=ve(i,Y.YIN_YANG);let c=r.value;c||(c="3");const u=parseInt(c);return`constraint yin_yang_unshaded_modular_line_p(${o}, ${a}, ${u});
`}function wd(t,e,n){const r=Ft(t,e.cells),i=ve(r,Y.BOARD),o=ve(r,Y.YIN_YANG);return`constraint ${n}(${i}, ${o});
`}function X5(t,e,n,r){return wd(e,r,"yin_yang_unshaded_entropic_line_p")}function q5(t,e,n,r){return wd(e,r,"yin_yang_indexing_line_coloring_p")}function Z5(t,e,n,r){return wd(e,r,"yin_yang_region_sum_line_p")}function Q5(t,e,n,r){const i=Ft(e,r.cells),o=ve(i,Y.VALUES_GRID),a=ve(i,Y.GOLDILOCKS_REGIONS);return`constraint goldilocks_zone_region_sum_p(${o}, ${a});
`}function yd(t,e,n){const r=Ft(t,e.cells),i=ve(r,Y.VALUES_GRID);return`constraint ${n}(${i});
`}function J5(t,e,n,r){return yd(e,r,"between_line_p")}function eG(t,e,n,r){return yd(e,r,"double_arrow_p")}function tG(t,e,n,r){return yd(e,r,"strictly_increasing")}function nG(t,e,n,r){const i=Ft(e,r.cells),o=$p(i);if(o.sort((_,p)=>p.length-_.length),o.length<=1)return"";let a="";const c=o[0],u=ve(c,Y.VALUES_GRID);for(const _ of o.slice(1)){const p=ve(_,Y.VALUES_GRID),g=`constraint subset_p(${u}, ${p});
`;a+=g}return a}const rG=new Map([[d.THERMOMETER,n5],[d.FUZZY_THERMOMETER,r5],[d.SLOW_THERMOMETER,i5],[d.CUSTOM_THERMOMETER,o5],[d.RENBAN_LINE,V3],[d.DOUBLE_RENBAN_LINE,X3],[d.RENRENBANBAN_LINE,q3],[d.NABNER_LINE,Z3],[d.WHISPERS_LINE,e5],[d.DUTCH_WHISPERS,t5],[d.RENBAN_OR_WHISPERS_LINE,I5],[d.RENBAN_OR_NABNER_LINE,Q3],[d.OUT_OF_ORDER_CONSECUTIVE_LINE,J3],[d.N_CONSECUTIVE_RENBAN_LINE,v5],[d.PALINDROME,s5],[d.SUM_LINE,a5],[d.PRODUCT_LINE,u5],[d.XV_LINE,l5],[d.AT_LEAST_X_LINE,c5],[d.MAXIMUM_ADJACENT_DIFFERENCE_LINE,d5],[d.SAME_PARITY_LINE,O5],[d.ADJACENT_MULTIPLES_LINE,_5],[d.ADJACENT_DIFFERENCES_COUNT_LINE,C5],[d.LOOK_AND_SAY_LINE,G5],[d.ROW_SUM_LINE,M5],[d.INDEX_LINE,f5],[d.ZIPPER_LINE,g5],[d.SEGMENTED_SUM_LINE,h5],[d.SEGMENTED_SUM_AND_RENBAN_LINE,p5],[d.N_CONSECUTIVE_FUZZY_SUM_LINE,m5],[d.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,k5],[d.SUPERFUZZY_ARROW,y5],[d.AMBIGUOUS_ARROW,L5],[d.HEADLESS_ARROW,A5],[d.ARITHMETIC_SEQUENCE_LINE,x5],[d.ODD_EVEN_OSCILLATOR_LINE,T5],[d.HIGH_LOW_OSCILLATOR_LINE,D5],[d.UNIQUE_VALUES_LINE,b5],[d.REPEATED_DIGITS_LINE,w5],[d.UNIMODULAR_LINE,N5],[d.MODULAR_LINE,S5],[d.MODULAR_OR_UNIMODULAR_LINE,R5],[d.REGION_SUM_LINE,W5],[d.ENTROPIC_LINE,z5],[d.ENTROPIC_OR_MODULAR_LINE,Y5],[d.ROW_CYCLE_THERMOMETER,E5],[d.PEAPODS,j5],[d.BETWEEN_LINE,U5],[d.TIGHTROPE_LINE,F5],[d.DOUBLE_ARROW_LINE,$5],[d.SPLIT_PEAS,P5],[d.PARITY_COUNT_LINE,H5],[d.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,B5],[d.DOUBLERS_THERMOMETER,tG],[d.DOUBLERS_BETWEEN_LINE,J5],[d.DOUBLERS_DOUBLE_ARROW_LINE,eG],[d.INDEXER_CELLS_REGION_SUBSET_LINE,nG],[d.YIN_YANG_SHADED_WHISPERS_LINE,K5],[d.YIN_YANG_UNSHADED_ENTROPIC_LINE,X5],[d.YIN_YANG_UNSHADED_MODULAR_LINE,V5],[d.YIN_YANG_REGION_SUM_LINE,Z5],[d.YIN_YANG_INDEXING_LINE_COLORING,q5],[d.GOLDILOCKS_ZONE_REGION_SUM,Q5]]);function iG(t,e,n,r){let i="";const o=rG.get(n);if(o)for(const[a,c]of Object.entries(r)){const u=o(t,e,a,c);i+=u}return i}function xs(t,e){const n=e.cell,r=e.direction,i=t.getCellsInDirection(n.r,n.c,r);return lt(i)}function xi(t,e,n,r){const i={allow_var:!0,allow_interval:!0,allow_int_list:!1};let o="";return(!r||r.outside)&&(o=`R${n.r}C${n.c}`,o=o.replace("-","m")),e||(e=o),t.getOrSetSharedVar(e,o,i)}function qn(t,e,n,r){const i=n.cell,o=e.getCell(i.r,i.c),c=`[${xs(e,n).join(",")}]`,u=n.value,_=xi(t,u,i,o);if(!_)return"";const p=_[1];let g=_[0];return g+=`constraint ${r}(${c}, ${p});
`,g}function oG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${xs(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,p=Math.min(..._),g=Math.max(..._),v=xi(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];return E+=`constraint sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,E}function sG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),c=`[${xs(e,r).join(",")}]`,u=r.value,_=t.puzzle.valid_digits,p=Math.min(..._),g=Math.max(..._),v=xi(t,u,i,o);if(!v)return"";const m=v[1];let E=v[0];const O=`var_bool_${n}_0`,I=`var_bool_${n}_1`;return E+=`var bool: ${O} = sandwich_sum_p(${c}, ${m}, ${p}, ${g});
`,E+=`var bool: ${I} = x_sum_p(${c}, ${m});
`,E+=`constraint 'xor'(${O}, ${I});
`,E}function aG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=xs(e,r),c=`[${a.join(",")}]`,u=a[0],_=r.value,p=xi(t,_,i,o);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint x_index_p(${c}, ${u}, ${g});
`,v}function lG(t,e,n,r){return qn(t,e,r,"x_sum_p")}function cG(t,e,n,r){return qn(t,e,r,"shortsighted_x_sum_p")}function uG(t,e,n,r){return qn(t,e,r,"broken_x_sum_p")}function dG(t,e,n,r){return qn(t,e,r,"shifted_x_sum_p")}function _G(t,e,n,r){return qn(t,e,r,"skyscrapers_p")}function fG(t,e,n,r){return qn(t,e,r,"x_sum_skyscrapers_p")}function gG(t,e,n,r){return qn(t,e,r,"battlefield_p")}function hG(t,e,n,r){return qn(t,e,r,"rising_streak_p")}function pG(t,e,n,r){return qn(t,e,r,"outside_consecutive_sum_p")}function vG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=ve(a,Y.BOARD),u=ve(a,Y.CELL_CENTER_LOOP),_=r.value;if(_){const p=parseInt(_);return`constraint loopwhiches_p(${c}, ${u}, ${p});
`}return""}function mG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=ve(c,Y.BOARD),_=ve(c,Y.UNKNOWN_REGIONS),p=r.value,g=xi(t,p,i,o);if(!g)return"";const v=g[1];let m=g[0];return m+=`constraint chaos_construction_sum_of_first_each_region_p(${u}, ${_}, ${v});
`,m}function EG(t,e,n,r){return qn(t,e,r,"little_killer_sum_p")}function CG(t,e,n,r){return qn(t,e,r,"little_killer_product_p")}function OG(t,e,n,r){return qn(t,e,r,"x_omit_little_killer_sum_p")}function IG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=ve(a,Y.BOARD),u=ve(a,Y.YIN_YANG),_=r.value;if(_){const p=parseInt(_);return`constraint outside_edge_yin_yang_sum_of_shaded_p(${c}, ${u}, ${p});
`}return""}function bG(t,e,n,r){const i=r.cell,o=r.direction,a=e.getCellsInDirection(i.r,i.c,o),c=ve(a,Y.VALUES_GRID),u=r.value;if(u){const _=parseInt(u);return`constraint little_killer_sum_p(${c}, ${_});
`}return""}function wG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c),a=r.direction,c=e.getCellsInDirection(i.r,i.c,a),u=ve(c,Y.PENTOMINO_REGIONS),_=r.value,p=xi(t,_,i,o);if(!p)return"";const g=p[1];let v=p[0];return v+=`constraint pentomino_border_count_p(${u}, ${g});
`,v}function yG(t,e,n){let r="";const i="mystery_sandwich_a",o="mystery_sandwich_b";r+=`var int: ${i};
`,r+=`var int: ${o};
`,r+=`constraint member(ALLOWED_DIGITS, ${i});
`,r+=`constraint member(ALLOWED_DIGITS, ${o});
`,r+=`constraint ${i} <= ${o};
`;for(const a of Object.values(n)){const c=a.cell,u=e.getCell(c.r,c.c),p=`[${xs(e,a).join(",")}]`,g=a.value??"",v=xi(t,g,c,u);if(!v)continue;const m=v[1];r+=v[0],r+=`constraint sandwich_sum_p(${p}, ${m}, ${i}, ${o});
`}return r}const LG=new Map([[d.SANDWICH_SUM,oG],[d.X_SUM,lG],[d.SHORTSIGHTED_X_SUM,cG],[d.BROKEN_X_SUM,uG],[d.SHIFTED_X_SUM,dG],[d.SKYSCRAPERS,_G],[d.X_SUM_SKYSCRAPERS,fG],[d.X_INDEX,aG],[d.BATTLEFIELD,gG],[d.SANDWICH_SUM_XOR_X_SUM,sG],[d.RISING_STREAK,hG],[d.OUTSIDE_CONSECUTIVE_SUM,pG],[d.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,IG],[d.LOOPWICHES,vG],[d.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,mG],[d.PENTOMINO_BORDER_COUNT,wG],[d.LITTLE_KILLER_SUM,EG],[d.LITTLE_KILLER_PRODUCT,CG],[d.X_OMIT_LITTLE_KILLER_SUM,OG],[d.NEGATORS_LITTLE_KILLER_SUM,bG]]),AG=new Map([[d.MYSTERY_SANDWICH_SUM,yG]]);function NG(t,e,n,r){let i="";const o=LG.get(n),a=AG.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function SG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction;let o=t.getCellsInDirection(r.r,r.c,i);o=[r,...o];const a=ve(o,Y.SASHIGANE),c=ve(o,Y.SASHIGANE_BENDS),u=we(r),_=_t(r,Y.SASHIGANE);let p=`constraint sashigane_arrow_points_to_bend_p(${u}, ${_}, ${a}, ${c});
`;return p+=`constraint count_same_adjacent(sashigane, ${r.r}, ${r.c}) == 1;
`,p}function RG(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=e.direction,o=t.getCellsInDirection(r.r,r.c,i),c="["+lt(o).join(",")+"]",u=ve(o,Y.CELL_CENTER_LOOP),_=we(r);return`constraint thermo_sightline_loop_arrow_p(${c}, ${u}, ${_});
`}const xG=new Map([[d.SASHIGANE_ARROW_POINTS_TO_BEND,SG],[d.THERMO_SIGHTLINE_LOOP_ARROW,RG]]);function TG(t,e,n,r){return ul(e,n,r,xG)}function Pp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i);return`constraint ${n}(${o});
`}const DG={allow_var:!0,allow_interval:!0,allow_int_list:!1};function Ld(t,e,n,r=DG){const i=`cell_var_${n}`;return t.getOrSetSharedVar(e,i,r)}function Hp(t,e,n,r=""){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o);let c=e.value;if(c||(c=r),!c)return"";const u=parseInt(c);return`constraint ${n}(${a}, ${u});
`}function wo(t,e,n,r){const i=e.cell,o=t.getCell(i.r,i.c);if(!o)return"";const a=we(o),u=cl(t,o).map(g=>ve(g,n)),_=_t(o,n);return`constraint ${r}(${u.join(", ")}, ${_}, ${a});
`}function kG(t,e,n,r){return Pp(e,r,"odd_p")}function GG(t,e,n,r){return Pp(e,r,"even_p")}function MG(t,e,n,r){return Hp(e,r,"low_digit_p","5")}function UG(t,e,n,r){return Hp(e,r,"high_digit_p","5")}function Bp(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),a=t.getNeighboorCells(i),c=ve(a,Y.BOARD);return`constraint ${n}(${c}) == ${o};
`}function FG(t,e,n,r){return Bp(e,r,"odd_count")}function $G(t,e,n,r){return Bp(e,r,"even_count")}function PG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);c.push(o);const u=ve(c,Y.BOARD);return`constraint count_same_parity_p(${a}, ${u});
`}function HG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getOrthogonallyAdjacentCells(o);return`constraint sum_p(${ve(c,Y.BOARD)}, ${a});
`}function BG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getDiagonallyAdjacentCells(o);return`constraint sum_p(${ve(c,Y.BOARD)}, ${a});
`}function WG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getRow(o.r),c=ve(a,Y.BOARD),u=o.c+1;return`constraint indexing_column_p(${c}, ${u});
`}function zG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=e.getCol(o.c),c=ve(a,Y.BOARD),u=o.r+1;return`constraint indexing_column_p(${c}, ${u});
`}function YG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=o.r+1,u=o.c+1;if(o.region!==null){const p=o.region+1;return`constraint ${a} == ${c} \\/ ${a} == ${u} \\/ ${a} == ${p};
`}return`constraint ${a} == ${c} \\/ ${a} == ${u};
`}function jG(t,e,n,r){const i=r.cell;if(!e.getCell(i.r,i.c))return"";const a=e.getCell(i.r-1,i.c),c=e.getCell(i.r+1,i.c),u=e.getCell(i.r,i.c-1),_=e.getCell(i.r,i.c+1);if(!a||!c||!u||!_)return"";const p=we(a),g=we(c),v=we(u),m=we(_);return`constraint groups_opposite_parity_p([${p},${g}], [${v},${m}]);
`}function Ad(t,e,n){const r=e.cell,i=t.getCell(r.r,r.c);if(!i)return"";const o=we(i),[a,c,u,_]=hd(t,i);return`constraint ${n}(${o}, ${a}, ${c}, ${u}, ${_});
`}function KG(t,e,n,r){return Ad(e,r,"is_watchtower_p")}function VG(t,e,n,r){return Ad(e,r,"is_not_watchtower_p")}function XG(t,e,n,r){return Ad(e,r,"farsight_p")}function qG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),[c,u,_,p]=hd(e,o);return`constraint radar_p(${a}, ${c}, ${u}, ${_}, ${p}, 9);
`}function ZG(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u="["+lt(c).join(",")+"]",_=e.getCol(o.c),p="["+lt(_).join(",")+"]",[g,v]=[o.r+1,o.c+1];return`constraint sandwich_row_col_count_p(${u}, ${p}, ${g}, ${v}, ${a});
`}function Wp(t,e,n){const r=Object.values(e);let i="";const o=r.map(c=>c.cell),a=new Set(o.map(c=>t.getCell(c.r,c.c)).filter(c=>!!c));for(const c of r){const u=c.cell,_=t.getCell(u.r,u.c);if(!_)continue;const p=we(_),g=t.getOrthogonallyAdjacentCells(_).filter(E=>!a.has(E)),v=ve(g,Y.BOARD),m=`constraint ${n}(${v}, ${p});
`;i+=m}return i}function QG(t,e,n){return Wp(e,n,"maximum_p")}function JG(t,e,n){return Wp(e,n,"minimum_p")}function eM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${lt([...a]).join(`,
	`)}`;return i+=`array[int] of var int: counting_circles = [
	${u}
];
`,i+=`constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);
`,i}function tM(t,e,n){const r=Object.values(n);let i="";const o=r.map(v=>v.cell),a=new Set(o.map(v=>e.getCell(v.r,v.c)).filter(v=>!!v)),c=e.getAllCells().filter(v=>!a.has(v)),_=`${lt([...a]).join(`,
	`)}`,g=`${lt([...c]).join(`,
	`)}`;return i+=`array[int] of var int: reverse_counting_circles = [
	${_}
];
`,i+=`array[int] of var int: not_reverse_counting_circles = [
	${g}
];
`,i+=`constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);
`,i}function nM(t,e,n){const r=Object.values(n);let i="";const o=r.map(g=>g.cell),a=new Set(o.map(g=>e.getCell(g.r,g.c)).filter(g=>!!g)),u=`${lt([...a]).join(`,
	`)}`,p=`${Ri([...a],Y.COUNTING_CIRCLES_COLORS).join(`,
	`)}`;i+=`array[ROW_IDXS, COL_IDXS] of var 0..3: ${Y.COUNTING_CIRCLES_COLORS};
`,i+=`array[int] of var int: colored_counting_circles = [
	${u}
];
`,i+=`array[int] of var int: counting_circles_colors = [
	${p}
];
`,i+=`constraint colored_counting_circles_adjacent_p(${Y.COUNTING_CIRCLES_COLORS});
`,i+=`
% cells without circles
`;for(const g of e.getAllCells()){if(a.has(g))continue;const v=_t(g,Y.COUNTING_CIRCLES_COLORS);i+=`constraint ${v} == 0;
`}for(const g of r){const v=g.cell,m=e.getCell(v.r,v.c);if(!m)continue;const E=we(m),O=_t(m,Y.COUNTING_CIRCLES_COLORS),I=g.value;I?i+=`constraint ${O} == ${I};
`:i+=`constraint ${O} != 0;
`,i+=`constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${E}, ${O}) == ${E};
`}return i+=`
`,i}function rM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${lt([...a]).join(`,
	`)}`;return i+=`array[int] of var int: unique_cells = [
	${u}
];
`,i+=`constraint alldifferent(unique_cells);
`,i}function iM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_even_count_p(${cl(e,o).map(p=>ve(p,Y.BOARD)).join(", ")}, ${a});
`}function oM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o);return`constraint seen_odd_count_p(${cl(e,o).map(p=>ve(p,Y.BOARD)).join(", ")}, ${a});
`}function sM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getCellsByKnightMove(o),u=ve(c,Y.BOARD),_=r.value??"5",p=Ld(t,_,n);if(!p)return"";let g="";const v=p[1];return g+=p[0],g+=`constraint cell_knights_whisper_p(${a}, ${u}, ${v});
`,g}function aM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint yin_yang_minesweeper_p(${ve(u,Y.YIN_YANG)}, ${a});
`}function lM(t,e,n,r){return wo(e,r,Y.YIN_YANG,"yin_yang_seen_unshaded_p")}function cM(t,e,n,r){return wo(e,r,Y.YIN_YANG,"yin_yang_seen_shaded_p")}function uM(t,e,n,r){return wo(e,r,Y.YIN_YANG,"yin_yang_seen_same_shade_p")}function dM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.YIN_YANG),u=e.getOrthogonallyAdjacentCells(o),_=ve(u,Y.YIN_YANG);return`constraint yin_yang_adjacent_same_shade_count_p(${a}, ${c}, ${_});
`}function _M(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o);return`constraint count(${ve(c,Y.YIN_YANG)}, 1) == ${a};
`}function fM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=`two_contiguous_regions[${o.r},${o.c}]`,u=e.getRow(o.r),_=e.getCol(o.c),p=ve(u,Y.TWO_CONTIGUOUS_REGIONS),g=ve(_,Y.TWO_CONTIGUOUS_REGIONS);return`constraint two_contiguous_regions_row_col_opposite_set_count_p(${p}, ${g}, ${a}, ${c});
`}function gM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getRow(o.r),u=e.getCol(o.c),_=ve(c,Y.UNKNOWN_REGIONS),p=ve(u,Y.UNKNOWN_REGIONS);return`constraint unknown_regions_seen_region_border_count_p(${_}, ${p}, ${a});
`}function hM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=`nurimisaki[${o.r},${o.c}]`,c=e.getOrthogonallyAdjacentCells(o);let _=`constraint nurimisaki_unshaded_endpoint_p(${ve(c,Y.NURIMISAKI)}, ${a});
`;return _+=wo(e,r,Y.NURIMISAKI,"nurimisaki_count_uninterrupted_unshaded_p"),_}function pM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.SASHIGANE),u=_t(o,Y.SASHIGANE_BENDS);let _=`constraint sashigane_bend_region_count_p(${a}, ${c}, sashigane);
`;return _+=`constraint ${u} = true;
`,_}function vM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=_t(o,Y.SASHIGANE),c=r.value;if(!c)return"";const u=parseInt(c);return`constraint conditional_sum_f(array1d(board), array1d(sashigane), ${a}) == ${u};
`}function mM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,Y.CELL_CENTER_LOOP)} == 1;
`:""}function EM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint ${_t(o,Y.CELL_CENTER_LOOP)} == 0;
`:""}function CM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=e.getNeighboorCells(o),u=[o,...c];return`constraint sum(${ve(u,Y.CELL_CENTER_LOOP)}) == ${a};
`}function OM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.CAVE_SHADING),u=cl(e,o),_=[];for(const g of u){const v=ve(g,Y.CAVE_SHADING);_.push(v)}return`constraint cave_clue_p(${a}, ${c}, ${_[0]}, ${_[1]}, ${_[2]}, ${_[3]});
`}function IM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=we(o),p=_t(o,Y.UNKNOWN_REGIONS);u+=`
% chess sum ${n}
`;const g=e.getNeighboorCells(o),v=ve(g,Y.BOARD),m=ve(g,Y.UNKNOWN_REGIONS);u+=`var int: king_sum_${n};
`,u+=`constraint king_sum_${n} = conditional_sum_f(${v}, ${m}, ${p});
`,u+=`var bool: king_${n};
`,u+=`constraint king_${n} = (king_sum_${n} == ${_});
`;const E=e.getCellsByKnightMove(o),O=ve(E,Y.BOARD),I=ve(E,Y.UNKNOWN_REGIONS);u+=`var int: knight_sum_${n};
`,u+=`constraint knight_sum_${n} = conditional_sum_f(${O}, ${I}, ${p});
`,u+=`var bool: knight_${n};
`,u+=`constraint knight_${n} = (knight_sum_${n} == ${_});
`;const b=[Ue.NE,Ue.NW,Ue.SE,Ue.SW],y=[];for(const W of b)e.getCellsInDirection(o.r,o.c,W).forEach(F=>y.push(F));const D=ve(y,Y.BOARD),M=ve(y,Y.UNKNOWN_REGIONS);return u+=`var int: bishop_sum_${n};
`,u+=`constraint bishop_sum_${n} = conditional_sum_f(${D}, ${M}, ${p});
`,u+=`var bool: bishop_${n};
`,u+=`constraint bishop_${n} = (bishop_sum_${n} == ${_});
`,u+=`constraint sum([king_${n}, knight_${n}, bishop_${n}]) == ${c};
`,u}function bM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=r.value;if(!a)return"";const c=parseInt(a);let u="";const _=we(o),p=_t(o,Y.UNKNOWN_REGIONS),g=e.getOrthogonallyAdjacentCells(o),v=ve(g,Y.UNKNOWN_REGIONS);u+=`
% arrow knot ${n}
`,u+=`constraint count_eq(${v}, ${p}) >= ${c};
`;const m=[Ue.N,Ue.S,Ue.E,Ue.W],E=[];for(const O of m){const I=e.getCellsInDirection(o.r,o.c,O);if(!I.length)continue;const b=ve(I,Y.BOARD),y=ve(I,Y.UNKNOWN_REGIONS),D=`in_arrow_${n}_${O}`,M=`in_arrow_${n}_${O}[1]`;E.push(M),u+=`array[index_set(${b})] of var bool: ${D};
`,u+=`constraint chaos_construction_arrow_knots_p(${b}, ${y}, ${D}, ${_}, ${p});
`}return u+=`constraint sum([${E.join(",")}]) == ${c};
`,u}function wM(t,e,n,r){return wo(e,r,Y.UNKNOWN_REGIONS,"chaos_costruction_seen_same_region_count_p")}function yM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_source == ${o.r*e.nCols+o.c+1};
`:""}function LM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint dpath_target == ${o.r*e.nCols+o.c+1};
`:""}function AM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_red_p(${_t(o,Y.CONNECT_FOUR)});
`:""}function NM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);return o?`constraint connect_four_yellow_p(${_t(o,Y.CONNECT_FOUR)});
`:""}function SM(t,e,n){let r="",i=0;for(const[o,a]of Object.entries(n)){const c=a.cell,u=e.getCell(c.r,c.c);if(!u)continue;const _=a.value;if(!_)continue;const p=Ld(t,_,o);if(!p)continue;const g=p[1];r+=p[0];const v=_t(u,Y.NURIKABE_REGIONS);r+=`constraint nurikabe_island_product_of_sum_and_size_p(${Y.BOARD}, ${Y.NURIKABE_REGIONS}, ${v}, ${g});
`,i+=1}return r+=`constraint count_unique_values(array1d(${Y.NURIKABE_REGIONS})) == ${i+1};
`,r}function RM(t,e,n,r){return wo(e,r,Y.NURIKABE_SHADING,"nurikabe_seen_waterway_cells_p")}function xM(t,e,n,r){const i=r.cell,o=e.getCell(i.r,i.c);if(!o)return"";const a=we(o),c=_t(o,Y.NURIKABE_REGIONS);return`constraint nurikabe_island_size_cell_p(${Y.NURIKABE_REGIONS}, ${c}, ${a});
`}function TM(t,e,n){let r="";const i=pd(Object.values(n));for(const u of i.values())if(!(u.length<=1))for(const[_,p]of u.flatMap((g,v)=>u.slice(v+1).map(m=>[g,m]))){const g=_.cell,v=p.cell,m=e.getCell(g.r,g.c),E=e.getCell(v.r,v.c);if(!m||!E)continue;const O=_t(m,Y.BOARD),I=_t(E,Y.BOARD);r+=`constraint ${O} == ${I};
`}const a=[...i.values()].map(u=>u[0].cell).map(u=>e.getCell(u.r,u.c)).filter(u=>u!==void 0),c=ve(a,Y.BOARD);return r+=`constraint alldifferent(${c});
`,r}function DM(t,e,n){const r=Object.values(n);let i="";const o=r.map(_=>_.cell),a=new Set(o.map(_=>e.getCell(_.r,_.c)).filter(_=>!!_)),u=`${Ri([...a],Y.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_size_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_size_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${Y.SHIKAKU_REGIONS}, shikaku_region_size_clues);
`;for(const _ of Object.values(n)){const p=_.cell,g=e.getCell(p.r,p.c);if(!g)continue;const v=we(g),m=_t(g,Y.SHIKAKU_REGIONS),E=_t(g,Y.SHIKAKU_WIDTH),O=_t(g,Y.SHIKAKU_HEIGHT);i+=`constraint shikaku_region_size_p(${Y.SHIKAKU_REGIONS}, ${m}, ${v}, ${E}, ${O});
`}return i}function kM(t,e,n){const r=Object.values(n);let i="";const o=r.map(p=>p.cell),a=new Set(o.map(p=>e.getCell(p.r,p.c)).filter(p=>!!p)),u=`${Ri([...a],Y.SHIKAKU_REGIONS).join(`,
	`)}`;i+=`array[int] of var int: shikaku_region_sum_clues = [
	${u}
];
`,i+=`constraint alldifferent(shikaku_region_sum_clues);
`,i+=`constraint shikaku_each_region_contains_one_circle_p(${Y.SHIKAKU_REGIONS}, shikaku_region_sum_clues);
`;const _={allow_var:!0,allow_interval:!0,allow_int_list:!0,allow_var_list:!0};for(const[p,g]of Object.entries(n)){const v=g.cell,m=e.getCell(v.r,v.c);if(!m)continue;const E=_t(m,Y.SHIKAKU_REGIONS),O=g.value??"",I=Ld(t,O,p,_);if(!I)continue;const b=I[1];i+=I[0],i+=`constraint shikaku_region_sum_p(${Y.BOARD}, ${Y.SHIKAKU_REGIONS}, ${E}, ${b});
`}return i}const GM=new Map([[d.ODD,kG],[d.EVEN,GG],[d.LOW_DIGIT,MG],[d.HIGH_DIGIT,UG],[d.ODD_MINESWEEPER,FG],[d.EVEN_MINESWEEPER,$G],[d.DIAGONALLY_ADJACENT_SUM,BG],[d.ORTHOGONAL_SUM,HG],[d.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,PG],[d.FRIENDLY_CELL,YG],[d.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,jG],[d.WATCHTOWER,KG],[d.NOT_WATCHTOWER,VG],[d.FARSIGHT,XG],[d.RADAR,qG],[d.INDEXING_COLUMN,WG],[d.INDEXING_ROW,zG],[d.SANDWICH_ROW_COL_COUNT,ZG],[d.SEEN_EVEN_COUNT,iM],[d.SEEN_ODD_COUNT,oM],[d.CELL_KNIGHT_WHISPERS,sM],[d.YIN_YANG_MINESWEEPER,aM],[d.YIN_YANG_SEEN_UNSHADED_CELLS,lM],[d.YIN_YANG_SEEN_SHADED_CELLS,cM],[d.YIN_YANG_SEEN_SAME_SHADE_CELLS,uM],[d.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,dM],[d.YIN_YANG_SHADED_NEIGHBOURS_COUNT,_M],[d.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,fM],[d.SEEN_REGION_BORDERS_COUNT,gM],[d.NURIMISAKI_UNSHADED_ENDPOINTS,hM],[d.NURIKABE_SEEN_WATERWAY_CELLS,RM],[d.NURIKABE_ISLAND_SIZE_CELL,xM],[d.SASHIGANE_BEND_REGION_COUNT,pM],[d.SASHIGANE_REGION_SUM,vM],[d.CELL_ON_THE_LOOP,mM],[d.CELL_NOT_ON_THE_LOOP,EM],[d.COUNT_LOOP_NEIGHBOUR_CELLS,CM],[d.CAVE_CLUE,OM],[d.CHAOS_CONSTRUCTION_CHESS_SUMS,IM],[d.CHAOS_CONSTRUCTION_ARROW_KNOTS,bM],[d.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,wM],[d.DIRECTED_PATH_START,yM],[d.DIRECTED_PATH_END,LM],[d.CONENCT_FOUR_RED,AM],[d.CONNECT_FOUR_YELLOW,NM]]),MM=new Map([[d.MAXIMUM,QG],[d.MINIMUM,JG],[d.COUNTING_CIRCLES,eM],[d.REVERSE_COUNTING_CIRCLES,tM],[d.COLORED_COUNTING_CIRCLES,nM],[d.UNIQUE_CELLS,rM],[d.SHIKAKU_REGION_SIZE,DM],[d.SHIKAKU_REGION_SUM,kM],[d.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,SM],[d.TELEPORT,TM]]);function UM(t,e,n,r){let i="";const o=GM.get(n),a=MM.get(n);if(o)for(const[c,u]of Object.entries(r)){const _=o(t,e,c,u);i+=_}else if(a){const c=a(t,e,r);i+=c}return i}function FM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.UNKNOWN_REGIONS),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p),v=ve(g,Y.UNKNOWN_REGIONS);c.push(v)}return`constraint ${c.map(p=>`count_different(${p}, ${o})`).join(" + ")} == ${i};
`}function $M(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.YIN_YANG),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),p=ve(_,Y.BOARD),g=ve(_,Y.YIN_YANG);c+=`constraint yin_yang_sum_of_opposite_color_f(${o}, ${p}, ${g}) == ${i};
`}return c}function PM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=ve(u,Y.YIN_YANG);a+=`constraint count(${_}, 1) == ${i};
`}return a}function HM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.YIN_YANG),a=e.directions,c=[];for(const _ of a){const p=t.getCellsInDirection(r.r,r.c,_),g=ve(p,Y.YIN_YANG),v=ve(p,Y.FILLOMINO_REGIONS);c.push(`yin_yang_count_unique_fillominoes_same_shading_f(${o}, ${g}, ${v})`)}return c.length?`constraint ${c.join(" + ")} == ${i};
`:""}function BM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count(${ve(_,Y.NURIKABE_SHADING)}, 1)`;a.push(g)}return`constraint ${a.join(" + ")} = ${i};
`}function WM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions,a=[];for(const u of o){const _=t.getCellsInDirection(r.r,r.c,u),g=`count_loop_vars_f(${ve(_,Y.CELL_CENTER_LOOP)})`;a.push(g)}return a.length?`constraint ${a.join(" + ")} = ${i};
`:""}function zM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.GALAXY_REGIONS),a=e.directions,c=[];for(const _ of a){const p=t.getCellsInDirection(r.r,r.c,_),v=`count(${ve(p,Y.GALAXY_REGIONS)}, ${o})`;c.push(v)}return c.length?`constraint ${c.join(" + ")} = ${i};
`:""}function YM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),p="["+lt(u).join(",")+"]";a+=`constraint hot_arrows_p(${p}, ${i});
`}return a}function jM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=e.directions;let a="";for(const c of o){const u=t.getCellsInDirection(r.r,r.c,c),_=ve(u,Y.BOARD);a+=`constraint cold_arrows_p(${_}, ${i});
`}return a}function KM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.CONNECT_FOUR),a=e.directions,c=[];for(const p of a){const g=t.getCellsInDirection(r.r,r.c,p);c.push(...g)}return c.length===0?"":`constraint count(${ve(c,Y.CONNECT_FOUR)}, ${o}) == ${i};
`}function VM(t,e){const n=e.cell,r=t.getCell(n.r,n.c);if(!r)return"";const i=we(r),o=_t(r,Y.UNKNOWN_REGIONS),a=e.directions;let c="";for(const u of a){const _=t.getCellsInDirection(r.r,r.c,u),p=ve(_,Y.UNKNOWN_REGIONS);c+=`constraint next_numbered_region_distance_arrow_p(${i}, ${o}, ${p});
`}return c}const XM=new Map([[d.HOT_ARROWS,YM],[d.COLD_ARROWS,jM],[d.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,FM],[d.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,$M],[d.LOOP_CELL_COUNT_ARROWS,WM],[d.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,HM],[d.YIN_YANG_COUNT_SHADED_CELLS,PM],[d.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,zM],[d.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,BM],[d.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,KM],[d.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,VM]]);function qM(t,e,n,r){return ul(e,n,r,XM)}function ZM(t,e){const n=e.value;return n?`constraint forbidden_adjacent_sum_p(board, ${parseInt(n)});
`:""}function QM(t,e){const n=e.value;return n?`constraint minimum_diagonally_adjacent_difference(board, ${parseInt(n)});
`:""}function JM(t,e){const n=e.value;return n?`constraint forbidden_knight_sum_p(board, ${parseInt(n)});
`:""}function eU(t,e){const n=e.value;if(!n)return"";const r=parseInt(n),i=[...t.getUsedRegions()];i.sort();const o=i.length;return`constraint lits_max_tetromino_sum_p(${Y.BOARD}, ${Y.LITS_GRID}, ${r}, 0..${o});
`}const tU=new Map([[d.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,ZM],[d.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,QM],[d.FORBIDDEN_KNIGHT_SUM,JM],[d.LITS_MAX_TETROMINO_SUM,eU]]);function nU(t,e,n,r){return ul(e,n,r,tU)}const rU=[m3,UM,TG,qM,j3,S3,iG,Vk,u3,NG,O3,nU];function iU(t,e){let n="";const r=t.localConstraints,i=t.grid;for(const[o,a]of r.entries())for(const c of rU){let u=c(e,i,o,a);u=dt(u,`${o}`),n+=u}return n}function oU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;
`,o+=`constraint yin_yang_p(yin_yang);
`,o}function sU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;
`,o+=`constraint nurimisaki_p(nurimisaki);
`,o}function aU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;
`,o+=`constraint nurikabe_p(nurikabe_shading, nurikabe_regions);
`,o}function lU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);
`,o}function cU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`
% Two Contiguous Regions
`,o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;
`,o+=`constraint two_contiguous_regions_p(two_contiguous_regions);
`,o}function uU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Math.max(r.nCols,r.nRows),a=bt.range(1,o+1);let c="";const u="["+a.join(",")+"]";return c+=`array[ROW_IDXS, COL_IDXS] of var 1..${o}: unknown_regions;
`,c+=`constraint chaos_construction_p(unknown_regions, ${u}, ${o});
`,c+=`constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${u});
`,c}function dU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(p=>p.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";const o=Y.UNKNOWN_REGIONS,a=Math.max(r.nCols,r.nRows),c=bt.range(1,a+1);let u="";const _="["+c.join(",")+"]";return u+=`array[ROW_IDXS, COL_IDXS] of var 1..${a}: ${o};
`,u+=`constraint numbered_chaos_construction_p(${Y.BOARD}, ${o}, ${_}, ${a});
`,u+=`constraint no_repeats_in_unknown_regions_p(${Y.BOARD}, ${o}, ALLOWED_DIGITS, ${_});
`,u}function _U(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: sashigane;
`,o+=`array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;
`,o+=`constraint sashigane_adjacency_p(sashigane);
`,o+=`constraint sashigane_bend_bools_p(sashigane, sashigane_bends);
`,o+=`constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);
`,o+=`constraint sashigane_links_to_bends(sashigane, sashigane_bends);
`,o}function fU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, true);
`,o}function gU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o}function hU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var int: loop_regions;
`,o+=`constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);
`,o+=`constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);
`,o}function pU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;
`,o+=`constraint cell_center_loop_p(cell_center_loop, false);
`,o+=`constraint modular_loop_p(board, cell_center_loop);
`,o}function zp(t,e,n,r){const i=t.grid;let o="";o+=`% Exactly ${e} per row 
`;const a=i.nRows;for(let c=0;c<a;c++){const u=i.getRow(c),_=r(u);o+=`constraint count_eq(${_}, ${n}, ${e});
`}return o}function Yp(t,e,n,r){const i=t.grid;let o="";o+=`
% Exactly ${e} per column 
`;const a=i.nCols;for(let c=0;c<a;c++){const u=i.getCol(c),_=r(u);o+=`constraint count_eq(${_}, ${n}, ${e});
`}return o}function jp(t,e,n,r){const i=t.grid;let o="";if(!t.globalConstraints.get(d.CHAOS_CONSTRUCTION)){o+=`
% Exactly ${e} per region 
`;const u=i.getUsedRegions();for(const _ of u){const p=i.getRegion(_),g=r(p);o+=`constraint count_eq(${g}, ${n}, ${e});
`}}return o}function eo(t,e,n,r){let i=zp(t,e,n,r);return i+=Yp(t,e,n,r),i+=jp(t,e,n,r),i}function vU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;
`,o+=eo(n,1,!0,a=>ve(a,Y.DOUBLERS)),o+=`
constraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);
`,o+=`array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);
`,o}function mU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="negators_grid";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=eo(n,1,!0,c=>ve(c,Y.NEGATORS)),a+=`
constraint one_of_each_digit_p(board, ${o}, ALLOWED_DIGITS);
`,a+=`array[int, int] of var int: values_grid = negators_value_grid_f(board, ${o});
`,a}function EU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="fillomino_area";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint fillomino_p(board, ${o});
`,a}function CU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.INDEXER_CELLS_GRID;let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var bool: ${o};
`,a+=eo(n,2,!0,c=>ve(c,o)),a+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,a+=`constraint indexer_cells_p(board, ${o}, values_grid);
`,a}function OU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.SHIKAKU_REGIONS;let a="";const c=r.nRows,u=r.nCols;return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${Y.SHIKAKU_HEIGHT};
`,a+=`array[ROW_IDXS, COL_IDXS] of var 0..${u}: ${Y.SHIKAKU_WIDTH};
`,a+=`constraint shikaku_p(${o}, ${Y.SHIKAKU_WIDTH}, ${Y.SHIKAKU_HEIGHT});
`,a}function IU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outisde the grid.`),"";let o="";return o+=`constraint shikaku_no_repeats_in_regions_p(${Y.BOARD}, ${Y.SHIKAKU_REGIONS});
`,o}function bU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.CAVE_SHADING,a=Y.CAVE_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,c+=`array[ROW_IDXS, COL_IDXS] of var int: ${a};
`,c+=`constraint cave_p(${o}, ${a});
`,c}function wU(t,e){if(t.puzzle.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.CAVE_SHADING,a=Y.BOARD_REGIONS,c="renban_cave_regions";let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var int: ${c};
`,u+=`constraint renban_cave_regions_p(${o}, ${a}, ${c});
`,u+=`constraint renban_caves_p(${Y.BOARD}, ${c});
`,u}function yU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.GALAXY_REGIONS,a=Y.GALAXY_SIZES,c=r.nCols*r.nRows;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..${c}: ${o};
`,u+=`constraint galaxy_restrict_numbering_p(${o});
`,u+=`array[0..${c}] of var 0..${c}: ${a};
`,u+=`constraint galaxy_sizes_p(${o}, ${a});
`,u+=`constraint adjacent_galaxies_not_size_leq_3_p(${o}, ${a});
`,u+=`constraint gallaxy_connected_regions_p(${o});
`,u}function LU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;
`,o+=`
constraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);
`,o}function AU(t,e){if(t.puzzle.grid.getAllCells().some(a=>a.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="";return o+=`array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;
`,o+=`array[ROW_IDXS, COL_IDXS] of var int: values_grid;
`,o+=`constraint goldilocks_zone_p(goldilocks_regions);
`,o+=`constraint goldilocks_values_p(board, values_grid, goldilocks_regions);
`,o}function NU(t,e){if(t.puzzle.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=12,a=Y.PENTOMINO_REGIONS;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..${o}: ${a};
`,c+=`constraint pentomino_tilling_p(${a});
`,c}function SU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(m=>m.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.LITS_SHADING,a=Y.LITS_REGIONS,c=Y.LITS_GRID,u=Y.BOARD_REGIONS,_=[...r.getUsedRegions()];_.sort();const p=Math.min(..._),g=Math.max(..._);let v="";v+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,v+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,v+=`array[ROW_IDXS, COL_IDXS] of var 0..${_.length}: ${c};
`,v+=`constraint lits_shading_p(${o});
`,v+=`constraint lits_shading_ids_p(${o}, ${a});
`,v+=`constraint lits_region_and_ids_p(${u}, ${a});
`,v+=`constraint lits_tetromino_shapes_p(${a});
`,v+=`constraint lits_grid_p(${c}, ${u}, ${o}, ${p}..${g});
`,_.length&&(v+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const m of _){const E=r.getRegion(m),I=`constraint count_eq(${ve(E,Y.LITS_SHADING)}, 1, 4);
`;v+=I}return v}function RU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.NORINORI_SHADING;let a="";a+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,a+=`constraint norinori_p(${Y.BOARD_REGIONS}, ${o});
`;const c=r.getUsedRegions();c.size&&(a+=`
% Exactly 2 shaded cells per region (known regions)
`);for(const u of c){const _=r.getRegion(u),g=`constraint count_eq(${ve(_,Y.NORINORI_SHADING)}, 1, 2);
`;a+=g}return a}function xU(t,e){const r=t.puzzle.grid;if(r.getAllCells().some(p=>p.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.LITS_SHADING,a=Y.LITS_REGIONS,c=Y.CAVE_REGIONS;let u="";u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${o};
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..4: ${a};
`,u+=`constraint lits_shading_p(${o});
`,u+=`constraint lits_shading_ids_p(${o}, ${a});
`,u+=`constraint lits_region_and_ids_p(${c}, ${a});
`,u+=`constraint lits_4_per_region_p(${c}, ${o});
`,u+=`constraint lits_tetromino_shapes_p(${a});
`;const _=r.getUsedRegions();_.size&&(u+=`
% Exactly 4 shaded cells per region (known regions)
`);for(const p of _){const g=r.getRegion(p),m=`constraint count_eq(${ve(g,Y.LITS_SHADING)}, 1, 4);
`;u+=m}return u}function TU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(_=>_.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.LITS_SHADING,a=Y.STAR_BATTLE,c=Y.LITS_WHITE_BLACK_STAR_BATTLE;let u="";return u+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,u+=eo(n,2,1,_=>ve(_,Y.STAR_BATTLE)),u+=`
% Star battle stars can't touch orthogonally or diagonally
`,u+=`constraint star_battle_no_touching_p(${a});
`,u+=`
`,u+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${c};
`,u+=`
% 1 white star per row, column, region
`,u+=eo(n,1,1,_=>ve(_,Y.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`
% 1 black star per row, column, region
`,u+=eo(n,1,2,_=>ve(_,Y.LITS_WHITE_BLACK_STAR_BATTLE)),u+=`constraint black_and_white_star_battle_p(${a}, ${c});
`,u+=`constraint lits_black_and_white_star_battle_p(${o}, ${c});
`,u}function DU(t,e){const n=t.puzzle;if(n.grid.getAllCells().some(u=>u.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o=Y.NORINORI_SHADING,a=Y.STAR_BATTLE;let c="";return c+=`array[ROW_IDXS, COL_IDXS] of var 0..1: ${a};
`,c+=Yp(n,2,1,u=>ve(u,a)),c+=zp(n,2,1,u=>ve(u,a)),c+=jp(n,1,1,u=>ve(u,a)),c+=`
% Star battle stars can't touch orthogonally or diagonally
`,c+=`constraint star_battle_no_touching_p(${a});
`,c+=`
% Stars cannot be placed on shaded Norinori cells
`,c+=`constraint norinori_star_battle_not_on_shaded_p(${o}, ${a});
`,c}function Ut(t,e,n){return t*n+e+1}function kU(t){const e=t.grid;function n(c,u){const _=[],p=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Ut(u.r+g,u.c,e.nCols);_.push([p,v]),_.push([v,p])}return _}function r(c,u){const _=[],p=Ut(c.r,c.c,e.nCols);for(let g=-1;g<=1;g++){const v=Ut(u.r,u.c+g,e.nCols);_.push([p,v]),_.push([v,p])}return _}const i=[],a=t.localConstraints.get(d.MAZE_WALL);if(a)for(const c of Object.values(a)){const u=c.coords;if(u.length===1){const _=u[0],g=nd(_).map(E=>e.getCell(E.r,E.c)).filter(E=>E!==void 0);let v=Ut(g[0].r,g[0].c,e.nCols),m=Ut(g[3].r,g[3].c,e.nCols);i.push([v,m]),i.push([m,v]),v=Ut(g[1].r,g[1].c,e.nCols),m=Ut(g[2].r,g[2].c,e.nCols),i.push([v,m]),i.push([m,v])}for(let _=0;_<u.length-1;_++){const p=CR(Wh(u[_],u[_+1]),.5),v=id(p).map(O=>e.getCell(O.r,O.c)).filter(O=>O!==void 0);if(v.length!==2)continue;const[m,E]=v;if(m.r===E.r){let O=n(m,E);i.push(...O),O=n(E,m),i.push(...O)}else if(m.c===E.c){let O=r(m,E);i.push(...O),O=r(E,m),i.push(...O)}}}return i}function GU(t){const e=t.grid,n=[],i=t.localConstraints.get(d.ONE_WAY_DOOR);if(i)for(const o of Object.values(i)){const c=o.cells.map(m=>e.getCell(m.r,m.c)).filter(m=>!!m),[u,_]=c,p=o.value,g=Ut(u.r,u.c,e.nCols),v=Ut(_.r,_.c,e.nCols);p==="<"?n.push([g,v]):p===">"&&n.push([v,g])}return n}function MU(t){const e=[];for(const n of t.getAllCells()){const r=Ut(n.r,n.c,t.nCols),i=t.getNeighboorCells(n);for(const o of i){const a=Ut(o.r,o.c,t.nCols);e.push([r,a])}}return e}function UU(t){const e=t.grid,n=[],r=[],o=t.localConstraints.get(d.TELEPORT),a=o?Object.values(o):[];let c=0;const u=Array.from(Array(e.nRows),()=>new Array(e.nRows).fill(0));if(o){const _=pd(a);let p=1;for(const g of _.values())if(!(g.length<=1)){for(const[v,m]of g.flatMap((E,O)=>g.slice(O+1).map(I=>[E,I]))){const E=Ut(v.cell.r,v.cell.c,e.nCols),O=Ut(m.cell.r,m.cell.c,e.nCols);n.push([E,O]),n.push([O,E]),u[v.cell.r][v.cell.c]=p,u[m.cell.r][m.cell.c]=p}for(const v of g){const m=Ut(v.cell.r,v.cell.c,e.nCols);r.push(m)}p++}c=_.size}return{tp_idxs:r,tp_edges:n,tp_arr:u,tp_count:c}}function FU(t,e){const n=t.puzzle,r=n.grid;if(r.getAllCells().some(b=>b.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";let o="",a=MU(r);const c=kU(n),u=GU(n);c.push(...u);const _=n.localConstraints;a=a.filter(b=>!c.some(y=>b[0]===y[0]&&b[1]===y[1]));const p=UU(n);if(p.tp_edges.length){a.push(...p.tp_edges);const b=kp(p.tp_arr),y=p.tp_count;o+=`
% teleports grid
`,o+=`array[ROW_IDXS, COL_IDXS] of 0..${y}: teleports = array2d(ROW_IDXS, COL_IDXS, ${b});
`}t.edge_list=a,console.log(a);const g=r.nRows*r.nCols,v=a.length,m="["+a.map(b=>b[0]).join(",")+"]",E="["+a.map(b=>b[1]).join(",")+"]";o+=`array[int] of int: dpath_from = ${m};
`,o+=`array[int] of int: dpath_to = ${E};
`,o+=`var 1..${g}: dpath_source;
`,o+=`var 1..${g}: dpath_target;
`,o+=`array[1..${g}] of var bool: dpath_ns;
`,o+=`array[1..${v}] of var bool: dpath_es;
`,o+=`constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);
`,o+=`
% Direct Path no crossings
`;for(let b=0;b<r.nRows-1;b++)for(let y=0;y<r.nCols-1;y++){const D=r.getCell(b,y),M=r.getCell(b,y+1),W=r.getCell(b+1,y),j=r.getCell(b+1,y+1);if(!D||!M||!W||!j)continue;const F=Ut(D.r,D.c,r.nCols),q=Ut(M.r,M.c,r.nCols),J=Ut(W.r,W.c,r.nCols),oe=Ut(j.r,j.c,r.nCols),te=[[F,oe],[oe,F],[q,J],[J,q]].map(Ee=>a.findIndex(Oe=>Ee[0]===Oe[0]&&Ee[1]===Oe[1])).filter(Ee=>Ee!==-1);if(te.length){const Ee=te.map(Oe=>`dpath_es[${Oe+1}]`).join(",");o+=`constraint sum([${Ee}]) <= 1;
`}}const O=_.get(d.TELEPORT),I=O?Object.values(O):[];if(p.tp_count>0){o+=`
% At most 1 edge per teleporter
`;for(const b of I){const y=b.cell,D=r.getCell(y.r,y.c);if(!D)continue;const M=r.getNeighboorCells(D),W=Ut(D.r,D.c,r.nCols),j=[];for(const q of M){if(I.some(re=>re.cell.r===q.r&&re.cell.c==q.c&&re.value===b.value))continue;const oe=Ut(q.r,q.c,r.nCols);j.push([W,oe]),j.push([oe,W])}const F=j.map(q=>a.findIndex(J=>q[0]===J[0]&&q[1]===J[1])).filter(q=>q!==-1);if(F.length){const q=F.map(J=>`dpath_es[${J+1}]`).join(",");o+=`constraint sum([${q}]) <= 1;
`}}}return o}function $U(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="suguru_regions";let a="";return a+=`array[ROW_IDXS, COL_IDXS] of var int: ${o};
`,a+=`constraint chaos_construction_suguru_p(board, ${o});
`,a}function PU(t,e){if(t.puzzle.grid.getAllCells().some(c=>c.outside))return console.warn(`${e} not implemented when there are cells outside the grid.`),"";const o="connect_four";let a=`% 1 - Red, 2 - Yellow
`;return a+=`array[ROW_IDXS, COL_IDXS] of var 0..2: ${o};
`,a}function HU(t,e){let n="";return n+=`constraint connect_four_draw_p(${Y.CONNECT_FOUR});
`,n}function BU(t,e){let n="";return n+=`constraint connect_four_adjacent_reds_different_parity_p(${Y.BOARD}, ${Y.CONNECT_FOUR});
`,n}function WU(t,e){let n="";return n+=`constraint connect_four_adjacent_yellows_difference_at_least_x_p(${Y.BOARD}, ${Y.CONNECT_FOUR}, 3);
`,n}const zU=new Map([[d.FILLOMINO,EU],[d.CAVE,bU],[d.GALAXIES,yU],[d.YIN_YANG,oU],[d.SHIKAKU,OU],[d.SHIKAKU_NO_REPEATS_IN_REGION,IU],[d.NORINORI,RU],[d.NURIMISAKI,sU],[d.NURIKABE,aU],[d.NURIKABE_NO_REPEATS_IN_ISLANDS,lU],[d.TWO_CONTIGUOUS_REGIONS,cU],[d.CHAOS_CONSTRUCTION,uU],[d.NUMBERED_CHAOS_CONSTRUCTION,dU],[d.SASHIGANE,_U],[d.CELL_CENTER_LOOP_NO_TOUCHING,fU],[d.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,gU],[d.NOT_LOOP_SIZED_REGIONS,hU],[d.MODULAR_LOOP,pU],[d.DOUBLERS,vU],[d.NEGATORS,mU],[d.GOLDILOCKS_ZONE,AU],[d.NEXUS,LU],[d.INDEXER_CELLS,CU],[d.PENTOMINO_TILLING,NU],[d.LITS,SU],[d.CAVE_LITS,xU],[d.LITS_BLACK_WHITE_STAR_BATTLE,TU],[d.NORINORI_STAR_BATTLE,DU],[d.RENBAN_CAVES,wU],[d.MAZE_DIRECTED_PATH,FU],[d.CHAOS_CONSTRUCTION_SUGURU,$U],[d.CONNECT_FOUR,PU],[d.CONNECT_FOUR_DRAW,HU],[d.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,BU],[d.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,WU]]);function YU(t){let e="";const r=t.puzzle.globalConstraints;for(const[i,o]of r.entries()){if(!o)continue;const a=zU.get(i);if(!a)continue;let c=a(t,i);c=dt(c,`${i}`),e+=c}return e}function jU(){return`
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

`}function KU(t){const e=t.grid;let n="";for(const r of e.getAllCells()){if(!(r.given&&r.value!==null))continue;const o=`constraint ${we(r)} = ${r.value};
`;n+=o}return n.length&&(n=`
% Given Digits
`+n),n}function Kp(t,e=!1){const n=t.grid;let r=t.valid_digits;const i=new BD(t),[o,a]=[n.nRows,n.nCols],c=o*a;i.add(`include "globals.mzn";
`),i.add(`include "alldifferent.mzn";

`),i.add(jU());let _=`1..${Math.max(o,a)}`;return!!t.globalConstraints.get(d.FILLOMINO)?_=`1..${c}`:t.globalConstraints.get(d.HEXED_SUDOKU)?r=[...bt.range(1,16)]:r&&(_="{"+r.join(",")+"}"),i.add(`set of int: ROW_IDXS = 0..${o-1};
`),i.add(`set of int: COL_IDXS = 0..${a-1};
`),i.add(`set of int: ALLOWED_DIGITS = ${_};
`),i.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;
`),zD(i,n),i.add(KU(t)),i.add(Pk(t)),i.add(Hk(t)),i.add(YU(i)),i.add(iU(t,i)),i.add(Wk(t)),e?i.add(`
solve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`):i.add(`
solve satisfy;`),i}const Pg=encodeURIComponent("4.4.2");let cr={workerURL:new URL(""+new URL("../assets/minizinc-worker.Bhztz4KQ.js?version=${t}",import.meta.url).href,import.meta.url),numWorkers:2};const Ci=[];let eu;function Jo(){if(!eu){const e=`importScripts(${JSON.stringify(cr.workerURL)});`;eu=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}const t=new Worker(eu);t.postMessage({wasmURL:cr.wasmURL?cr.wasmURL.toString():new URL(`./minizinc.wasm?version=${Pg}`,cr.workerURL).toString(),dataURL:cr.dataURL?cr.dataURL.toString():new URL(`./minizinc.data?version=${Pg}`,cr.workerURL).toString()}),Ci.push({worker:t,runCount:0})}function Vp(){for(;Ci.length<cr.numWorkers;)Jo()}async function VU(t){if(cr={...cr,...t},Ci.length>0)throw new Error("MiniZinc.init() called after library already used/initialised");Vp(),await Promise.race(Ci.map(e=>new Promise(n=>{e.worker.addEventListener("message",r=>{r.data.type==="ready"&&n()},{once:!0})})))}class Nd{constructor(){this.vfs={},this._toRun=[],this.unnamedCount=0}clone(){const e=new Nd;return e.vfs={...this.vfs},e._toRun=[...this.toRun],e.unnamedCount=this.unnamedCount,e}addString(e){let n=`_mzn_${this.unnamedCount++}.mzn`;for(;n in this.vfs;)n=`_mzn_${this.unnamedCount++}.mzn`;return this.addFile(n,e),n}addDznString(e){let n=`_dzn_${this.unnamedCount++}.dzn`;for(;n in this.vfs;)n=`_dzn_${this.unnamedCount++}.dzn`;return this.addFile(n,e),n}addJson(e){let n=`_json_${this.unnamedCount++}.json`;for(;n in this.vfs;)n=`_json_${this.unnamedCount++}.json`;return this.addFile(n,JSON.stringify(e)),n}addFile(e,n,r=!0){if(typeof n!="string"){if(e in this.vfs)return void this._addToRun(e,r);throw new Error("Missing file contents argument")}this.vfs[e]=n,this._addToRun(e,r)}_addToRun(e,n){n&&(e.endsWith(".mzn")||e.endsWith(".mzc")||e.endsWith(".dzn")||e.endsWith(".json")||e.endsWith(".mpc")||e.endsWith(".fzn"))&&this._toRun.indexOf(e)===-1&&this._toRun.push(e)}_run(e,n,r=null){Vp();const i=[];let o=this.vfs;if(n){let u=`_mzn_${this.unnamedCount++}.mpc`;for(;u in this.vfs;)u=`_mzn_${this.unnamedCount++}.mpc`;o={...this.vfs,[u]:JSON.stringify(n)},i.push(u)}let{worker:a,runCount:c}=Ci.pop();return a.postMessage({jsonStream:!0,files:o,args:[...i,...e,...this._toRun],outputFiles:r}),{worker:a,runCount:c+1}}check(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-check-only"],i.options),c=[];o.onmessage=u=>{switch(u.data.type){case"error":c.push(u.data);break;case"exit":a<10?Ci.push({worker:o,runCount:a}):(o.terminate(),Jo()),n(c)}}})}interface(e){return new Promise((n,r)=>{const i={...e},{worker:o,runCount:a}=this._run(["--model-interface-only"],i.options),c=[];let u=null;o.onmessage=_=>{switch(_.data.type){case"error":c.push(_.data);break;case"interface":u=_.data;break;case"exit":a<10?Ci.push({worker:o,runCount:a}):(o.terminate(),Jo()),_.data.code===0?n(u):r(c)}}})}compile(e){const n={...e};let r=0,i=`_fzn_${r++}.fzn`;for(;i in this.vfs;)i=`_fzn_${r++}.fzn`;const o=["-c","--fzn",i],{worker:a}=this._run(o,n.options,[i]);Jo();let c={},u=!1,_=null;return a.onmessage=p=>{if(c[p.data.type])for(const g of c[p.data.type])g(p.data);switch(p.data.type){case"exit":a.terminate(),u=!0,c={};break;case"error":_||(_=p.data)}},{isRunning:()=>!u,cancel(){if(!u){if(u=!0,a.terminate(),c.exit)for(const p of c.exit)p({type:"exit",code:null});c={}}},on(p,g){c[p]?c[p].add(g):c[p]=new Set([g])},off(p,g){c[p]&&c[p].delete(g)},then(p,g){const v=m=>{if(m.code===0)p(m.outputFiles[i]);else{const E=_?{message:_.message,...m}:m;if(!g)throw E;g(E)}};c.exit?c.exit.add(v):c.exit=new Set([v])}}}solve(e){const n={jsonOutput:!0,...e},r=["-i"];n.jsonOutput&&(r.push("--output-mode"),r.push("json"));const{worker:i}=this._run(r,n.options);Jo();let o=null,a={},c=!1,u=null,_={},p="UNKNOWN";return i.onmessage=g=>{if(a[g.data.type])for(const v of a[g.data.type])v(g.data);switch(g.data.type){case"exit":i.terminate(),c=!0,a={};break;case"error":o||(o=g.data);break;case"statistics":_={..._,...g.data.statistics};break;case"solution":u=g.data,p="SATISFIED";break;case"status":p=g.data.status}},{isRunning:()=>!c,cancel(){if(!c){if(c=!0,i.terminate(),a.exit)for(const g of a.exit)g({type:"exit",code:null});a={}}},on(g,v){a[g]?a[g].add(v):a[g]=new Set([v])},off(g,v){a[g]&&a[g].delete(v)},then(g,v){const m=E=>{if(E.code===0)g({status:p,solution:u,statistics:_});else{const O=o?{message:o.message,...E}:E;if(!v)throw O;v(O)}};a.exit?a.exit.add(m):a.exit=new Set([m])}}}}var XU=ie('<div class="new-puzzle-content svelte-1wi0dto"><button class="modal-button svelte-1wi0dto">Copy to clipboard</button> <button class="modal-button svelte-1wi0dto">Copy pruned version to clipboard</button> <button class="modal-button svelte-1wi0dto">Download Minizinc File</button> <button class="modal-button svelte-1wi0dto">Download Pruned Minizinc File</button> <p>Note: You can play with the minizinc model <a target="_blank" rel="noreferrer noopener">here</a>. Choose chuffed as the solver.</p></div>');function qU(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Tr,"$puzzleMetaStore",n);let i=U(e,"showModal",12,!1);function o(g,v,m){var E=document.createElement("a"),O=new Blob([g],{type:m});E.href=URL.createObjectURL(O),E.download=v,E.click(),URL.revokeObjectURL(E.href)}function a(){const g=ut(As);return Kp(g).model_str}function c(){const g=a();navigator.clipboard.writeText(g)}function u(){const g=a(),v=Ug(g);navigator.clipboard.writeText(v)}function _(){const g=Ua(r()),v=a();o(v,`${g}.mzn`,"text/plain")}function p(){const g=Ua(r()),v=a(),m=Ug(v);o(m,`${g}.mzn`,"text/plain")}pe(),kr(t,{title:"Minizinc File",get showModal(){return i()},set showModal(g){i(g)},children:(g,v)=>{var m=XU(),E=V(m),O=$(E,2),I=$(O,2),b=$(I,2),y=$(b,2),D=$(V(y));A(D,"href","https://play.minizinc.dev/"),Oi(),z(y),z(m),Me("click",E,c),Me("click",O,u),Me("click",I,_),Me("click",b,p),x(g,m)},$$slots:{default:!0},$$legacy:!0}),le()}var xn=(t=>(t.SET_CELLS_VALUE="SET_CELLS_VALUE",t.RESTORE_CELLS_VALUES="RESTORE_CELL_VALUES",t.SET_GIVENS="SET_GIVENS",t.RESTORE_GIVENS="RESTORE_GIVENS",t.SET_REGIONS="SET_REGIONS",t.RESTORE_REGIONS="RESTORE_REGIONS",t.SET_FOG="SET_FOG",t.RESTORE_FOG="RESTORE_FOG",t.SET_PENCILMARKS="SET_PENCILMARKS",t.RESTORE_PENCILMARKS="RESTORE_PENCILMARKS",t.SET_HIGHLIGHTS="SET_HIGHLIGHTS",t.RESTORE_HIGHLIGHTS="RESTORE_HIGHLIGHTS",t))(xn||{});const ZU=(t,e)=>({type:"SET_CELLS_VALUE",payload:{cells:t,value:e}}),Xp=(t,e)=>({type:"RESTORE_CELL_VALUES",payload:{cells:t,values:e}}),QU=(t,e)=>({type:"SET_GIVENS",payload:{cells:t,value:e}}),JU=(t,e,n)=>({type:"RESTORE_GIVENS",payload:{cells:t,values:e,givens:n}}),eF=(t,e)=>({type:"SET_REGIONS",payload:{cells:t,value:e}}),tF=(t,e)=>({type:"RESTORE_REGIONS",payload:{cells:t,values:e}}),nF=(t,e)=>({type:"SET_FOG",payload:{cells:t,value:e}}),rF=(t,e)=>({type:"RESTORE_FOG",payload:{cells:t,values:e}}),tu=(t,e,n)=>({type:"SET_PENCILMARKS",payload:{cells:t,tool:n,value:e}}),iF=(t,e,n)=>({type:"RESTORE_PENCILMARKS",payload:{cells:t,tool:n,values:e}}),nu=(t,e)=>({type:"SET_HIGHLIGHTS",payload:{cells:t,value:e}}),hl=(t,e)=>({type:"RESTORE_HIGHLIGHTS",payload:{cells:t,values:e}});function oF(t,e,n){if(e===d.DIGIT){const r=t.map(a=>a.value),i=ZU(t,n),o=Xp(t,r);return[i,o]}if(e===d.GIVEN){const r=t.map(c=>c.value),i=t.map(c=>c.given),o=QU(t,n),a=JU(t,r,i);return[o,a]}if(e===d.REGIONS){const r=t.map(a=>a.region),i=eF(t,n),o=tF(t,r);return[i,o]}if(e===d.FOG){const r=t.map(c=>c.fog),o=nF(t,n===1),a=rF(t,r);return[o,a]}if(e===d.HIGHLIGHTS&&n!==null){const r=nu(t,n),i=nu(t,n);return[r,i]}if(e===d.HIGHLIGHTS&&n===null){const r=t.map(a=>a.highlights),i=nu(t,n),o=hl(t,r);return[i,o]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n!==null){const r=tu(t,n,e),i=tu(t,n,e);return[r,i]}if((e===d.CORNER_PM||e===d.CENTER_PM)&&n===null){let r=[];e===d.CORNER_PM?r=t.map(a=>a.cornerMarks):r=t.map(a=>a.centerMarks);const i=tu(t,n,e),o=iF(t,r,e);return[i,o]}}function jo(t,e,n,r){t.forEach(i=>{i.enterCell(n,e,r)}),fn.update(i=>i)}function ro(t){switch(t.type){case xn.SET_CELLS_VALUE:{const e=t.payload.cells,n=t.payload.value;jo(e,d.DIGIT,n,!0);break}case xn.SET_GIVENS:{const e=t.payload.cells,n=t.payload.value;jo(e,d.GIVEN,n,!0);break}case xn.SET_REGIONS:{const e=t.payload.cells,n=t.payload.value;jo(e,d.REGIONS,n,!0);break}case xn.SET_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.value;jo(e,d.HIGHLIGHTS,n,!0);break}case xn.SET_PENCILMARKS:{const e=t.payload.cells,n=t.payload.value,r=t.payload.tool;jo(e,r,n,!0);break}case xn.RESTORE_CELLS_VALUES:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].value=n[r];fn.update(r=>r);break}case xn.RESTORE_GIVENS:{const e=t.payload.cells,n=t.payload.values,r=t.payload.givens;for(let i=0;i<e.length;i++)e[i].value=n[i],e[i].given=r[i];fn.update(i=>i);break}case xn.RESTORE_REGIONS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].region=n[r];fn.update(r=>r);break}case xn.RESTORE_HIGHLIGHTS:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].highlights=n[r];fn.update(r=>r);break}case xn.RESTORE_PENCILMARKS:{const e=t.payload.cells,n=t.payload.tool,r=t.payload.values;for(let i=0;i<e.length;i++)n===d.CENTER_PM?e[i].centerMarks=r[i]:n===d.CORNER_PM&&(e[i].cornerMarks=r[i]);fn.update(i=>i);break}case xn.SET_FOG:{const e=t.payload.cells,n=t.payload.value;e.forEach(r=>{r.fog=n}),fn.update(r=>r);break}case xn.RESTORE_FOG:{const e=t.payload.cells,n=t.payload.values;for(let r=0;r<e.length;r++)e[r].fog=n[r];fn.update(r=>r);break}}}function sF(t,e){return{execute:()=>{ro(t)},unExecute:()=>{ro(e)}}}function yo(t,e,n){const r=[],i=[];for(let a=0;a<t.length;a++){const c=t[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;const p=Number(c[u]),g=n.get(p);g!==void 0&&(r.push(_),i.push([g]))}}const o=hl(r,i);ro(o)}function aF(t){if(t.length===0||t[0].length===0)return[];const e=t.length,n=t[0].length,r=Array(e).fill(0).map(()=>Array(n).fill(!1)),i=[],o=Array(e).fill(0).map(()=>Array(n).fill(0));for(let v=0;v<e;v++)for(let m=0;m<n;m++)if(!r[v][m]){const E=[];i.push(E),a(v,m,t[v][m])}function a(v,m,E){v<0||v>=e||m<0||m>=n||r[v][m]||t[v][m]!==E||(r[v][m]=!0,i[i.length-1].push([v,m]),a(v+1,m,E),a(v-1,m,E),a(v,m+1,E),a(v,m-1,E))}const c=Array(i.length).fill(0).map(()=>new Set);function u(v,m){for(const[E,O]of v)for(const[I,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=E+I,D=O+b;if(m.some(([M,W])=>M===y&&W===D))return!0}return!1}for(let v=0;v<i.length;v++)for(let m=v+1;m<i.length;m++)u(i[v],i[m])&&(c[v].add(m),c[m].add(v));const _=[1,4,7,9],p=new Array(i.length).fill(0);function g(v,m){for(const E of c[v])if(p[E]===m)return!1;return!0}for(let v=0;v<i.length;v++)for(const m of _)if(g(v,m)){p[v]=m;break}for(let v=0;v<i.length;v++)for(const[m,E]of i[v])o[m][E]=p[v];return o}function lF(t,e){const n=e.grid,r=e.globalConstraints.get(d.LEAVE_EMPTY_CELLS_EMPTY);if(t===void 0)return;const i=t.board;if(i===void 0)return;const o=[],a=[];for(let u=0;u<i.length;u++){const _=i[u];for(let p=0;p<_.length;p++){const g=n.getCell(u,p);if(!g||g.given||r&&!g.given&&g.value===null)continue;const v=_[p];o.push(g),a.push(v)}}const c=Xp(o,a);ro(c)}function cF(t,e){if(t===void 0)return;const n=["yin_yang","norinori_shading","two_contiguous_regions","nurimisaki","nurikabe_shading","even_odd_grid","cave_shading"],r=new Map([[0,3],[1,1]]);for(const i of n){const o=t[i];if(o!==void 0){yo(o,e,r);return}}}function uF(t,e){if(t===void 0)return;const n=["doublers_grid","indexer_cells_grid","negators_grid","cell_center_loop","nexus"],r=new Map([[1,4],[0,1]]);for(const i of n){const o=t[i];if(o!==void 0){yo(o,e,r);return}}}function dF(t,e){if(t===void 0)return;const n=t.unknown_regions;if(n===void 0)return;const r=[],i=[];for(let a=0;a<n.length;a++){const c=n[a];for(let u=0;u<c.length;u++){const _=e.getCell(a,u);if(!_)continue;r.push(_);const p=c[u];i.push([p])}}const o=hl(r,i);ro(o)}function _F(t,e){if(t===void 0)return;const n=t.goldilocks_regions;if(n===void 0)return;yo(n,e,new Map([[0,4],[1,7],[2,9]]))}function fF(t,e){if(t===void 0)return;const n=t.lits_regions;if(n===void 0)return;yo(n,e,new Map([[0,1],[1,4],[2,5],[3,6],[4,7],[5,9]]))}function gF(t,e){if(t===void 0)return;const n=t.counting_circles_colors_board;if(n===void 0)return;yo(n,e,new Map([[1,7],[2,4],[3,9]]))}function hF(t,e){if(t===void 0)return;const n=t.connect_four;if(n===void 0)return;yo(n,e,new Map([[1,7],[2,8]]))}function pF(t,e){if(t===void 0)return;const n=["unknown_regions","sashigane","shikaku_regions","fillomino_area","galaxy_regions","suguru_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const[o,a]=[e.nRows,e.nCols],c=3,u=[];for(let p=0;p<i.length;p++){const g=i[p];for(let v=0;v<g.length-1;v++){const m=e.getCell(p,v),E=e.getCell(p,v+1);if(!m||!E)continue;const O=g[v],I=g[v+1];if(O===I)continue;const b={colorId:c,p1:{r:p,c:v+1},p2:{r:p+1,c:v+1}};u.push(b)}}for(let p=0;p<a;p++)for(let g=0;g<o-1;g++){const v=e.getCell(g,p),m=e.getCell(g+1,p);if(!v||!m)continue;const E=i[g][p],O=i[g+1][p];if(E===O)continue;const I={colorId:c,p1:{r:g+1,c:p},p2:{r:g+1,c:p+1}};u.push(I)}const _=us(u);_r(_);return}}function vF(t,e){if(t===void 0)return;const n=["cell_center_loop"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const p=e.getCell(c,_);if(p)for(const g of e.getOrthogonallyAdjacentCells(p)){if(!g||!(g.r>p.r||g.c>p.c))continue;const v=i[p.r][p.c],m=i[g.r][g.c];if(!(v===1&&m===1))continue;const E={colorId:4,p1:{r:p.r+.5,c:p.c+.5},p2:{r:g.r+.5,c:g.c+.5}};o.push(E)}}}const a=us(o);_r(a);return}}function mF(t,e){if(t===void 0)return;const n=["sashigane","cave_regions","fillomino_area","galaxy_regions","tilling_regions","region_labels","suguru_regions","shikaku_regions","pentomino_regions"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=aF(i);if(!o)return;const a=[],c=[];for(let _=0;_<o.length;_++){const p=o[_];for(let g=0;g<p.length;g++){const v=e.getCell(_,g);if(!v)continue;a.push(v);const m=p[g];c.push([m])}}const u=hl(a,c);ro(u);return}}function EF(t,e){if(t===void 0)return;const n=["lits_white_black_star_battle","star_battle"];for(const r of n){const i=t[r];if(i===void 0)continue;const o=[];for(let c=0;c<i.length;c++){const u=i[c];for(let _=0;_<u.length;_++){const p=e.getCell(c,_);if(!p)continue;const g=i[p.r][p.c];if(g===0)continue;const m={colorId:g===1?1:3,marker:"X",r:p.r+.5,c:p.c+.5};o.push(m)}}const a=fT(o);_r(a);return}}function CF(t,e){if(t===void 0)return;const n=t.dpath_es;if(n===void 0)return;const r=e.edge_list,i=e.puzzle.grid,o=[];for(let c=0;c<n.length;c++){if(!n[c])continue;const _=r[c],[p,g]=_,[v,m]=[Math.floor((p-1)/i.nCols),(p-1)%i.nCols],[E,O]=[Math.floor((g-1)/i.nCols),(g-1)%i.nCols];if(!bs({r:v,c:m},{r:E,c:O}))continue;const y={colorId:4,p1:{r:v+.5,c:m+.5},p2:{r:E+.5,c:O+.5}};o.push(y)}const a=us(o);_r(a)}function OF(t,e){const n=e.puzzle,r=n.grid;_r(ld()),lF(t,n),dF(t,r),pF(t,r),_F(t,r),fF(t,r),vF(t,r),uF(t,r),mF(t,r),cF(t,r),EF(t,r),gF(t,r),CF(t,e),hF(t,r)}function IF(){const{subscribe:t,set:e}=Bt(0),n=100;let r=Date.now(),i,o=0,a=!1;return{subscribe:t,start:()=>{a||(a=!0,r=Date.now()-o,i=setInterval(()=>{o=Date.now()-r,e(o)},n))},stop:()=>{a&&(a=!1,clearInterval(i),o=Date.now()-r)},reset:()=>{a=!1,clearInterval(i),o=0,e(0)},getStatus:()=>({isRunning:a,elapsedTime:o})}}var bF=ie('<button class="entry-panel-button svelte-hjxb6n">Minizinc File...</button> <!> <button class="entry-panel-button svelte-hjxb6n"> </button> <span class="text-field svelte-hjxb6n"> </span> <div class="input-container svelte-hjxb6n"><input type="number" class="svelte-hjxb6n"></div> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span> <span class="text-field svelte-hjxb6n"> </span>',1);function wF(t,e){ae(e,!1);const n=ot(),r=()=>Ce(As,"$puzzleStore",n),i=()=>Ce(En,"$gridStore",n),o=()=>Ce(b,"$timer",n),a=T(),c=T(),u=T(),_=T();let p=T(!0),g=T(!1),v=T(null),m=T(100),E=T("100"),O=T(null),I=T("IDLE");const b=IF();function y(q){return q===null?"":String(q)}function D(q){const J=Math.floor(q/6e4),oe=Math.floor(q%6e4/1e3),re=Math.floor(q%1e3/100),te=oe.toString().padStart(2,"0");return`${J}:${te}.${re}`}function M(){N(g,!0)}function W(q){const J=parseInt(q);typeof J=="number"&&J>=1&&N(m,J)}async function j(){N(O,0),N(I,"SOLVING...");const q=new Nd;bp();const J=Kp(h(a));q.addFile("test.mzn",J.model_str),b.reset(),b.start(),N(v,q.solve({options:{solver:"chuffed","num-solutions":h(m)}})),h(v).on("solution",oe=>{const re=oe.output.json;oe.type==="solution"&&h(O)!==null&&N(O,h(O)+1),OF(re,J)}),h(v).on("error",oe=>{N(u,"Solve"),N(I,"ERROR"),console.log(oe.message),b.stop(),h(v)&&h(v).cancel()}),h(v).on("warning",oe=>{N(I,"WARNING"),console.log(oe.message)}),h(v).then(oe=>{N(I,oe.status),N(u,"Solve"),b.stop()})}function F(){h(v)===null||!h(v).isRunning()?j():h(v)!==null&&h(v).isRunning()&&(N(I,"IDLE"),N(u,"Solve"),b.stop(),h(v).cancel())}k(()=>r(),()=>{N(a,r())}),k(()=>i(),()=>{N(c,i())}),k(()=>{},()=>{N(u,"Solve")}),k(()=>o(),()=>{N(_,o())}),k(()=>h(v),()=>{h(v)&&(h(v)!==null&&h(v).isRunning()?N(u,"Stop"):N(u,"Solve"))}),Ie(),pe(),al(t,{get isOpen(){return h(p)},set isOpen(q){N(p,q)},$$slots:{"panel-header":(q,J)=>{sl(q,{slot:"panel-header",title:"Solver",get isOpen(){return h(p)},set isOpen(oe){N(p,oe)},$$legacy:!0})},"panel-content":(q,J)=>{var oe=bF(),re=de(oe),te=$(re,2);qU(te,{get showModal(){return h(g)},set showModal(nn){N(g,nn)},$$legacy:!0});var Ee=$(te,2),Oe=V(Ee,!0);z(Ee);var he=$(Ee,2),$e=V(he,!0);z(he);var ze=$(he,2),Ae=V(ze);Qt(Ae),A(Ae,"min",1),A(Ae,"max",200),A(Ae,"step",1),z(ze);var Le=$(ze,2),rt=V(Le,!0);ee(()=>nt(rt,`Solution Count: ${y(h(O))}`)),z(Le);var Ye=$(Le,2),zt=V(Ye,!0);ee(()=>nt(zt,`Elapsed Time: ${D(h(_))}`)),z(Ye);var wn=$(Ye,2),Mr=V(wn,!0);z(wn),ee(()=>{nt(Oe,h(u)),nt($e,`Max. Solutions: ${h(m)}`),nt(Mr,`Status: ${h(I)}`)}),Me("click",re,M),Me("click",Ee,F),jn(Ae,()=>h(E),nn=>N(E,nn)),Me("input",Ae,()=>W(h(E))),x(q,oe)}},$$legacy:!0}),le()}var yF=ie('<div class="setting-panel-wrapper svelte-946yzv"><div class="setting-panel svelte-946yzv"><!> <!> <!> <!> <!> <!> <!></div></div>');function LF(t){var e=yF(),n=V(e),r=V(n);DD(r);var i=$(r,2);wF(i,{});var o=$(i,2);h2(o,{elementHandlers:xt});var a=$(o,2);C2(a,{elementHandlers:xt});var c=$(a,2);a2(c,{elementHandlers:xt});var u=$(c,2);z2(u,{elementHandlers:xt});var _=$(u,2);GD(_,{}),z(n),z(e),x(t,e)}class Re{constructor(e,n){me(this,"x");me(this,"y");this.x=e,this.y=n}equals(e){return this.x===e.x&&this.y==e.y}add(e){return new Re(this.x+e.x,this.y+e.y)}subtract(e){return new Re(this.x-e.x,this.y-e.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}scale(e){return new Re(e*this.x,e*this.y)}dotProduct(e){return this.x*e.x+this.y*e.y}normalise(){return this.scale(1/this.length())}distance(e){return this.subtract(e).length()}rotate(e){const n=Math.cos(e),r=Math.sin(e);return new Re(this.x*n-this.y*r,this.x*r+this.y*n)}angle(){return Math.atan2(this.y,this.x)}lerp(e,n){return this.scale(1-n).add(e.scale(n))}perpDotProduct(e){return this.x*e.y-this.y*e.x}}function AF(t){return t.reduce((n,r)=>n.add(r)).scale(1/t.length)}const Gn=(t,e)=>{if(!t||!e)return null;const n=e.createSVGPoint();n.x=t.clientX,n.y=t.clientY;const r=e.getScreenCTM();if(!r)return null;const i=n.matrixTransform(r.inverse());return new Re(i.x,i.y)};function Ta(t,e=!0,n=.5){const r=el(t),i=new Re(r.c+.5,r.r+.5),o=t.distance(i);return!e||o<n?{cell:r,dist:o}:null}function qp(t,e){const n=el(t),r=new Re(n.c+.5,n.r+.5),i=t.distance(r);return{cellCenter:{r:r.y,c:r.x},dist:i}}function rs(t,e){const n=el(t),r=bR(n),o=r.map(_=>new Re(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{corner:c,dist:u,idx:a}:null}function is(t,e){const n=el(t),r=wR(n),o=r.map(_=>new Re(_.c,_.r)).map(_=>_.distance(t)),a=o.indexOf(Math.min(...o)),c=r[a],u=o[a];return e===void 0||u<e?{edge:c,dist:u,idx:a}:null}function ru(t,e=!0,n=.5){const r=is(t,void 0);if(!r)return null;const i=rs(t,void 0);if(!i)return null;const o=qp(t);if(!o)return null;const a=[o.cellCenter,r.edge,i.corner],u=a.map(O=>new Re(O.c,O.r)).map(O=>O.distance(t)),_=Math.min(...u),p=u.findIndex(O=>O===_),g=a[p],m=["cell center","edge","corner"][p],E={cellCenter:o.cellCenter,edge:r.edge,corner:i.corner,dist:_,target:g,type:m};return!e||_<n?E:null}class Lo{constructor(e=.4){me(this,"onTap",null);me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onMove",null);me(this,"_prevPoint",null);me(this,"_prevCell",null);me(this,"_lastPointerDownTime",0);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_tapCount",0);me(this,"_lastTapPosition",null);me(this,"_lastTapTime",0);me(this,"_margin");this._margin=e}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=this._prevCell===null,i=Gn(e,n);if(!i)return;this._prevPoint=i;const o=Ta(i,!r,this._margin);if(!o)return;const a=o.cell;this._prevCell=a,this._lastPointerDownTime=e.timeStamp;const c={event:e,cell:a,tapCount:this._tapCount};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Gn(e,n);if(!r)return;const i=Ta(r,!0,this._margin);if(!i)return;const o=i.cell;if(this._prevCell&&Xe(this._prevCell,o))return;this._prevCell=o,this._prevPoint=r,this._isTap=!1;const a={event:e,cell:o,tapCount:this._tapCount};this.onDrag&&this.onDrag(a)}pointerUp(e,n){this._isDown&&(this._prevCell=null,this._prevPoint=null,this._isDown=!1,this.onDragEnd&&this.onDragEnd());const r=Gn(e,n);if(!r)return;const i=Ta(r,!1);if(!i)return;const o=i.cell;let a=0;this._lastTapPosition&&(a=r.distance(this._lastTapPosition)),this._lastTapPosition=r;const c=e.timeStamp-this._lastTapTime;if(this._lastTapTime=e.timeStamp,c>0&&c<300&&a<.25?this._tapCount+=1:this._tapCount=1,this._isTap&&this._tapCount===1){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}else if(this._isTap&&this._tapCount===2){const u={event:e,cell:o,tapCount:this._tapCount};this.onTap&&this.onTap(u)}}}function Hg(t,e){const n=new Set(t.highlights);return e.getAllCells().filter(o=>{const a=new Set(o.highlights);return n.difference(a).size===0}).map(o=>o.toCoords())}function NF(t,e){const n=t.value;return e.getAllCells().filter(o=>o.value===n).map(o=>o.toCoords())}function Bg(t,e){const n=new Set(t.cornerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.cornerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function Wg(t,e){const n=new Set(t.centerMarks);return e.getAllCells().filter(o=>{if(o.value!==null)return!1;const a=new Set(o.centerMarks);return n.difference(a).size===0}).map(o=>o.toCoords())}function SF(t,e,n){const r=[t],i=e.getCell(t.r,t.c);return i?n===d.HIGHLIGHTS&&i.highlights.length?Hg(i,e):i.value!==null?NF(i,e):n===d.CORNER_PM&&i.cornerMarks.length?Bg(i,e):n===d.CENTER_PM&&i.centerMarks.length?Wg(i,e):i.cornerMarks.length?Bg(i,e):i.centerMarks.length?Wg(i,e):i.highlights.length?Hg(i,e):r:r}function oi(t,e,n,r=!1){if(!(t&&e))return;const i=_d(t,e),o=fd(t,n),a=Ns(i,o);_n(a,r)}function Ti(t,e,n,r=!0){if(!(t&&e))return;const i=fd(t,n),o=_d(t,e),a=Ns(i,o);_n(a,r)}function Ou(t,e,n,r,i=!1){if(!(t&&n&&e))return;const o=Dg(r,t,n),a=Dg(r,t,e),c=Ns(o,a);_n(c,i)}function RF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u=null,_=!1,p=!1,g;(O=>{O.DYNAMIC="DYNAMIC",O.BULB="BULB",O.BODY="BODY"})(g||(g={}));let v="DYNAMIC";function m(O){_=!1;const I=O.cell;if(Jt(O.cell,o)){if(v==="DYNAMIC"){const y=ut(vt),D=Kx(y,n,I);if(D){const W=Nx(D.arrow,D.matchLineIdx);Ou(D.id,D.arrow,W,n,!0),p=!0;return}const M=yg(y,n,I);if(!M)_=!0,v="BULB",u=null,a=null;else{v="BODY",u=M[0],a=M[1],a=hu(a,I),Ht(n,u,a);return}}if(v==="BULB"&&!u){u=bt.uniqueId(),a=ip(n,[I]),ii(u,a);return}else v==="BULB"&&u&&a?(a=wx(a,I),Ht(n,u,a)):v==="BODY"&&u&&a&&(a=yx(a,I,r==null?void 0:r.allowSelfIntersection),Ht(n,u,a))}}return i.onDragStart=O=>{v="DYNAMIC",m(O)},i.onDrag=O=>{m(O)},i.onDragEnd=()=>{if(p){p=!1;return}v==="BODY"&&u&&a?Lx(a)?(a=Ax(a),Ht(n,u,a)):(Ou(u,c,a,n),c=a):v==="BULB"&&(oi(u,a,n),c=a),v="DYNAMIC"},i.onTap=O=>{if(_)return;const I=O.cell,b=ut(vt);if(yg(b,n,I)){Ti(u,a,n);return}},{pointerDown:O=>{O.button===0&&i.pointerDown(O,t)},pointerMove:O=>{i.pointerMove(O,t)},pointerUp:O=>{i.pointerUp(O,t)},keyDown:()=>{},keyUp:()=>{}}}function xF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols},a=(r==null?void 0:r.allowSelfIntersection)??!1;let c=null,u=null;function _(g){if(!u||!c)throw"UNREACHABLE";const v=g.cell;Jt(g.cell,o)&&(c=bx(c,v,a),Ht(n,u,c))}return i.onDragStart=g=>{u=bt.uniqueId(),c=np(n,[],r==null?void 0:r.defaultValue),ii(u,c),_(g)},i.onDrag=g=>{_(g)},i.onDragEnd=()=>{u&&c&&c.cells.length<=1?yi(n,u):u&&c&&oi(u,c,n,!1),u=null},i.onTap=g=>{const v=g.cell,m=ut(vt),E=jx(m,n,v);if(E){const[O,I]=E;Ti(O,I,n)}},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:()=>{},keyUp:()=>{}}}function TF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ut(vt),m=g.cell;if(!Jt(g.cell,o))return;const O=Ga(v,n,m);if(c===0&&(c=O?2:1),!(r!=null&&r.oppositeConstraintId&&Ga(v,r.oppositeConstraintId,m))){if(O&&c===2){const[I,b]=O;Ti(I,b,n)}else if(c===1){const I=cp(n,m,r==null?void 0:r.defaultValue),b=bt.uniqueId();oi(b,I,n,!0)}}}i.onDragStart=g=>{c=0,u(g)},i.onDrag=g=>{u(g)};function _(g){const v=ut(fr);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!uo(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=Ls(m,O),Ht(n,E,m))}return{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class pl{constructor(e){me(this,"onDragStart",null);me(this,"target");this.target=e}pointerDown(e,n){const r=Gn(e,n);if(!r)return;const i=is(r,void 0);if(!i)return;const o=rs(r,void 0);if(!o)return;const a=Ta(r,!1);if(!a)return;const c=qp(r);if(!c)return;let u;this.target===Et.CORNER?u=o.corner:this.target===Et.EDGE?u=i.edge:this.target===Et.CELL_CENTER?u=c.cellCenter:this.target===Et.CORNER_OR_EDGE?o.dist<i.dist?u=o.corner:u=i.edge:this.target===Et.CORNER_OR_CENTER?o.dist<c.dist?u=o.corner:u=c.cellCenter:this.target===Et.EDGE_OR_CENTER?i.dist<c.dist?u=i.edge:u=c.cellCenter:i.dist<o.dist&&i.dist<c.dist?u=i.edge:o.dist<i.dist&&o.dist<c.dist?u=o.corner:u=c.cellCenter;let _=this.target===Et.CORNER||this.target===Et.CORNER_OR_CENTER?"corner":"edge";(this.target===Et.CORNER_OR_EDGE||this.target===Et.CLOSEST)&&o.dist<i.dist&&(_="corner");const p=_==="edge"?2*i.idx:2*o.idx+1,g={event:e,cell:a.cell,edge:i.edge,corner:o.corner,closest:u,edgeIdx:i.idx,cornerIdx:o.idx,direction:p};this.onDragStart&&this.onDragStart(g)}}function DF(t,e,n,r){const i=(r==null?void 0:r.targets)??Et.CLOSEST,o=new pl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=ut(vt),E=v.cell,O=v.closest;if(!Jt(E,a))return;const b=Xx(m,n,O);if(b){yi(n,b);return}c=_p(n,O,""),u=bt.uniqueId(),ii(u,c)}function p(v){const m=ut(fr);if(!m)return;let E=m.constraint;const O=m.id;if(E.value===void 0||!uo(v)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(E==null?void 0:E.value,v.key);I!==void 0&&I!==E.value&&(E=Ls(E,I),Ht(n,O,E))}return o.onDragStart=v=>{_(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{p(v)},keyUp:()=>{}}}function kF(t,e,n,r){const i=(r==null?void 0:r.cornerOrEdge)??Et.CORNER_OR_EDGE,o=new pl(i),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null;function _(v){const m=ut(vt),E=v.cell,O=v.direction,I=rd(O);if(Jt(E,a))return;const y=zh(E,I);if(!Jt(y,a))return;const M=Vx(m,n,E,I);if(M){yi(n,M);return}c=lp(n,E,I,""),u=bt.uniqueId(),ii(u,c)}function p(v){const m=ut(fr);if(!m)return;let E=m.constraint;const O=m.id;if(E.value===void 0||!uo(v)||!(r!=null&&r.valueUpdater))return;const I=r.valueUpdater(E==null?void 0:E.value,v.key);I!==void 0&&I!==E.value&&(E=Ls(E,I),Ht(n,O,E))}return o.onDragStart=v=>{_(v)},{pointerDown:v=>{v.button===0&&o.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:v=>{p(v)},keyUp:()=>{}}}function GF(t,e,n,r){const i=new Lo,o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(m=>{m[m.DYNAMIC=0]="DYNAMIC",m[m.ADDING=1]="ADDING",m[m.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function p(m){const E=ut(vt),O=m.cell;if(Jt(m.cell,o)){if(m.event.shiftKey){const b=wg(E,n,O);b&&(c=b[0],a=b[1],bo({id:c,constraint:a}),_=1)}if(_===0){const b=wg(E,n,O);if(_=b?2:1,b){Ti(b[0],b[1],n);return}}if(!a&&_===1){a=op(n,[O]),c=bt.uniqueId(),ii(c,a);return}else if(a&&c&&_===1){const b=(r==null?void 0:r.allowDiagonallyAdjacent)??!1;a=Rx(a,O,b),Ht(n,c,a);return}}}function g(m){const E=ut(fr);if(!E)return;let O=E.constraint;const I=E.id;if(O.value===void 0||!uo(m)||!(r!=null&&r.valueUpdater))return;const b=r.valueUpdater(O==null?void 0:O.value,m.key);b!==void 0&&b!==O.value&&(O=xx(O,b),Ht(n,I,O))}return i.onDragStart=m=>{c=null,a=null,_=0,p(m)},i.onDrag=m=>{p(m)},i.onDragEnd=()=>{c&&a&&oi(c,a,n,!1),c=null},{pointerDown:m=>{m.button===0&&i.pointerDown(m,t)},pointerMove:m=>{i.pointerMove(m,t)},pointerUp:m=>{i.pointerUp(m,t)},keyDown:m=>{g(m)},keyUp:()=>{}}}const qi=new Lo;function zg(t,e){return t.shiftKey?Qo.SELECTING:t.ctrlKey||t.metaKey||e?Qo.DYNAMIC:t.altKey?Qo.DESELECTING:Qo.RESETTING}function ds(t,e,n,r,i=!1){switch(e){case d.GIVEN:return t.filter(a=>n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&(a.value!==r||!a.given));case d.DIGIT:return t.filter(a=>!(i&&a.given)&&(n==="any"&&a.value!==null||n==="empty"&&a.value===null||n==="equal"&&a.value===r||n==="different"&&a.value!==r));case d.CORNER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.cornerMarks.length||n==="empty"&&!a.cornerMarks.length||n==="equal"&&a.cornerMarks.includes(r)||n==="different"&&!a.cornerMarks.includes(r)));case d.CENTER_PM:return t.filter(a=>!(i&&a.given)&&a.value===null&&(n==="any"&&a.centerMarks.length||n==="empty"&&!a.centerMarks.length||n==="equal"&&a.centerMarks.includes(r)||n==="different"&&!a.centerMarks.includes(r)));case d.HIGHLIGHTS:return t.filter(a=>n==="any"&&a.highlights.length||n==="empty"&&!a.highlights.length||n==="equal"&&a.highlights.includes(r)||n==="different"&&!a.highlights.includes(r));case d.FOG:{const o=r===1;return t.filter(c=>n==="any"&&c.fog||n==="empty"&&!c.fog||n==="equal"&&c.fog===o||n==="different"&&c.fog!==o)}}return t}function MF(t,e){const n=[e,d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],r=i=>i===d.CORNER_PM||i===d.CENTER_PM||i===d.DIGIT;for(const i of n){const o=ds(t,i,"any",-1,r(i));if(o.length)return{tool:i,cells:o}}return{tool:e,cells:[]}}function os(t,e,n,r){const i=oF(e,n,r);if(i){const o=i[0],a=i[1],c=sF(o,a),u=vu(t),p=[mT(u,u),c];vT(p)}}function UF(t,e,n){const r=d.FOG;if(t!==null&&![0,1].includes(t))return!1;if(t===null){const i=ds(e,r,"any",-1,!1);if(i.length)return os(n,i,r,t),!0}else{const i=ds(e,r,"different",t,!0);if(i.length)return os(n,i,r,t),!0}return!1}function FF(t,e,n){const r=[d.DIGIT,d.CORNER_PM,d.CENTER_PM,d.HIGHLIGHTS],i={nRows:e.nRows,nCols:e.nCols};qi.onTap=m=>{if(m.tapCount!==2)return;const O=Jt(m.cell,i)?m.cell:null;if(!O)return;const I=SF(O,e,n),b=vu(I);Zi(b)},qi.onDragStart=m=>{const E=Jt(m.cell,i),O=ut(mu),I=zg(m.event,O),b=E?m.cell:null,y=iT(b,I);Zi(y)},qi.onDrag=m=>{const O=Jt(m.cell,i)?m.cell:null,I=sT(O);Zi(I)};function o(m){if(!cw(m))return!1;const E=e.getAllCells().map(I=>({r:I.r,c:I.c})),O=vu(E);return Zi(O),!0}function a(m){if(!gw(m)||!r.includes(n))return!1;if(m.type==="keydown"){const E=pw(m);return yr(E),!0}return m.type==="keyup"?(CT(),!0):!1}function c(m){if(!fw(m))return!1;if(m.code==="Space"){const E=r.indexOf(n),O=r[(E+1)%r.length];return yr(O),Eu(O),!0}else{const E=hw(m.code);return yr(E),Eu(E),!0}}function u(m){if(!mw(m))return!1;const E=ut(wi).lastCell;let O=null;if(E!==null){const[y,D]=Ew(m),[M,W]=[Lg(E.r+D,0,i.nRows-1),Lg(E.c+y,0,i.nCols-1)];O={r:M,c:W}}else O={r:0,c:0};const I=zg(m,!1),b=aT(O,I);return Zi(b),!0}function _(m){const E=_w(m);if(E===void 0)return!1;const O=ut(wi).cells,I=[];if(O.forEach(b=>{const y=e.getCell(b.r,b.c);y&&I.push(y)}),n===d.FOG)return UF(E,I,O);if(E===null){const{tool:b,cells:y}=MF(I,n);if(y.length)return os(O,y,b,E),!0}else{let b=ds(I,n,"different",E,!0);if(b.length)return os(O,b,n,E),!0;if(b=ds(I,n,"equal",E,!0),b.length)return os(O,b,n,E),!0}return!1}function p(m){return m.repeat?!1:_(m.key)}const g=bt.throttle(m=>{qi.pointerMove(m,t)},20);return{pointerDown(m){m.button===0&&qi.pointerDown(m,t)},pointerMove(m){g(m)},pointerUp(m){qi.pointerUp(m,t)},keyUp(m){a(m)&&(m.stopImmediatePropagation(),m.preventDefault())},keyDown(m){(o(m)||u(m)||p(m)||a(m)||c(m))&&(m.stopImmediatePropagation(),m.preventDefault())},padClick(m){_(m.currentTarget.value)}}}function $F(t,e,n,r){const i=[Ue.N,Ue.NE,Ue.E,Ue.SE,Ue.S,Ue.SW,Ue.W,Ue.NW],o=new pl(r.cornerOrEdge),a={nRows:e.nRows,nCols:e.nCols};let c=null,u=null,_;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.ADDING=1]="ADDING",E[E.REMOVING=2]="REMOVING"})(_||(_={}));let p=0;function g(E){const O=ut(vt),I=E.cell;if(!Jt(E.cell,a))return;E.event.altKey&&(p=2);const y=Ga(O,n,I),D=rd(E.direction);if(y){[u,c]=y,c.direction===D||p===2?Ti(u,c,n):(c={...c,direction:D},Ht(n,u,c));return}else p!==2&&(c=up(n,I,D),u=bt.uniqueId(),oi(u,c,n,!0))}function v(E){if(!c||!u||!uw(E))return;const I=(i.indexOf(c.direction)+1)%i.length;c={...c,direction:i[I]},Ht(n,u,c)}return o.onDragStart=E=>{p=0,g(E)},{pointerDown:E=>{E.button===0&&o.pointerDown(E,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:E=>{v(E)},keyUp:()=>{}}}function PF(t,e){t=[...t];const n=t.indexOf(e);return n!==-1?(t.splice(n,1),t):(t.push(e),t.sort(),t)}function HF(t,e,n,r){const i=new pl(r.cornerOrEdge),o={nRows:e.nRows,nCols:e.nCols};let a=null,c=null,u;(v=>{v[v.DYNAMIC=0]="DYNAMIC",v[v.ADDING=1]="ADDING",v[v.REMOVING=2]="REMOVING"})(u||(u={}));let _=0;function p(v){const m=ut(vt),E=v.cell;if(!Jt(v.cell,o))return;v.event.altKey&&(_=2);const I=rd(v.direction),b=Ga(m,n,E);if(b){if(c=b[0],a=b[1],_===2)yi(n,b[0]);else{const y=PF(a.directions,I);y.length?(a={...a,directions:y},Ht(n,c,a)):yi(n,c)}return}else _!==2&&(a=dp(n,E,I),c=bt.uniqueId(),ii(c,a))}return i.onDragStart=v=>{_=0,p(v)},{pointerDown:v=>{v.button===0&&i.pointerDown(v,t)},pointerMove:()=>{},pointerUp:()=>{},keyDown:()=>{},keyUp:()=>{}}}class BF{constructor(){me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onTap",null);me(this,"_prevCoord",null);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_margin",.35)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Gn(e,n);if(!r)return;const i=is(r,this._margin);if(!i)return;this._prevCoord=i.edge;const o={event:e,coord:i.edge};this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Gn(e,n);if(!r)return;const i=is(r,this._margin);if(!i||this._prevCoord&&Xe(i.edge,this._prevCoord))return;const o={event:e,coord:i.edge};this._prevCoord=i.edge,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Gn(e,n);if(!r)return;const i=is(r,this._margin);if(!i)return;const o={event:e,coord:i.edge};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function WF(t,e,n,r){const i=new BF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ut(vt),m=g.coord,E=id(m);if(!E.every(b=>Jt(b,o)))return;let I=null;if(c===0&&(I=zx(v,n,E),c=I?2:1),I&&c===2){const b=I[0];Ti(b,I[1],n)}else if(c===1){const b=(r==null?void 0:r.defaultValue)??"",y=ap(n,E,b),D=bt.uniqueId();oi(D,y,n,!0)}}function _(g){const v=ut(fr);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!uo(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=Ls(m,O),Ht(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class zF{constructor(){me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onTap",null);me(this,"onMove",null);me(this,"_prevCoord",null);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_margin",.5)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Gn(e,n);if(!r)return;const o=this._prevCoord===null?void 0:this._margin,a=rs(r,o);if(!a)return;this._prevCoord=a.corner;const c={event:e,coord:a.corner};this.onDragStart&&this.onDragStart(c)}pointerMove(e,n){if(!this._isDown)return;const r=Gn(e,n);if(!r)return;const i=rs(r,this._margin);if(!i||this._prevCoord&&Xe(i.corner,this._prevCoord))return;const o={event:e,coord:i.corner};this._prevCoord=i.corner,this._isTap=!1,this.onDrag&&this.onDrag(o)}pointerUp(e,n){const r=Gn(e,n);if(!r)return;const i=rs(r,this._margin);if(!i)return;const o={event:e,coord:i.corner};this._isDown&&(this._prevCoord=null,this._isDown=!1,this.onDrag&&this.onDrag(o)),this._isTap&&this.onTap&&this.onTap(o)}}function YF(t,e,n,r){const i=new zF,o={nRows:e.nRows,nCols:e.nCols};let a;(g=>{g[g.DYNAMIC=0]="DYNAMIC",g[g.ADDING=1]="ADDING",g[g.REMOVING=2]="REMOVING"})(a||(a={}));let c=0;function u(g){const v=ut(vt),m=g.coord,E=nd(m);if(!E.every(b=>Jt(b,o)))return;let I=null;if(c===0&&(I=Yx(v,n,m),c=I?2:1),I&&c===2){const b=I[0];Ti(b,I[1],n);return}else if(c===1){const b=sp(n,E,r==null?void 0:r.defaultValue),y=bt.uniqueId();oi(y,b,n,!0)}}function _(g){const v=ut(fr);if(!v)return;let m=v.constraint;const E=v.id;if(m.value===void 0||!uo(g)||!(r!=null&&r.valueUpdater))return;const O=r.valueUpdater(m==null?void 0:m.value,g.key);O!==void 0&&O!==m.value&&(m=Ls(m,O),Ht(n,E,m))}return i.onDragStart=g=>{c=0,u(g)},{pointerDown:g=>{g.button===0&&i.pointerDown(g,t)},pointerMove:g=>{i.pointerMove(g,t)},pointerUp:g=>{i.pointerUp(g,t)},keyDown:g=>{_(g)},keyUp:()=>{}}}class jF{constructor(){me(this,"onDragStart",null);me(this,"onDrag",null);me(this,"onDragEnd",null);me(this,"onTap",null);me(this,"_prevType",null);me(this,"_isDown",!1);me(this,"_isTap",!1);me(this,"_prevCoords",null)}pointerDown(e,n){this._isDown=!0,this._isTap=!0;const r=Gn(e,n);if(!r)return;const i=ru(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._prevType=i.type,this._prevCoords=i.target,this.onDragStart&&this.onDragStart(o)}pointerMove(e,n){if(!this._isDown)return;const r=Gn(e,n);if(!r)return;const i=ru(r,!1);if(!i||this._prevCoords&&Xe(this._prevCoords,i.target))return;this._isTap=!1;const o={coords:i.target,prevCoords:this._prevCoords,type:i.type};if(this._prevCoords&&vp(this._prevCoords,i.target)&&(i.type==="cell center"||i.type==="corner"))this.onDrag&&this.onDrag(o);else return;this._prevType=i.type,this._prevCoords=i.target}pointerUp(e,n){this._isDown&&(this.onDragEnd&&this.onDragEnd(),this._isDown=!1);const r=Gn(e,n);if(!r)return;const i=ru(r,!1);if(!i)return;const o={coords:i.target,type:i.type};this._isTap&&this._prevCoords&&Xe(this._prevCoords,i.target)&&(this.onTap&&this.onTap(o),this._isTap=!1),this._prevType=null,this._prevCoords=null}}function KF(t,e){const n={nRows:e.nRows,nCols:e.nCols},r=new jF;return r.onTap=o=>{const a=o.coords,c=ut($a),u=ut(Fa);if(o.type==="cell center"){if(!OR(a,n))return;const p=u.getCellMarker(a);if(p)if(p.marker==="X"){const g={...a,colorId:c,marker:"O"},v=Na(g),m=Na(p),E=vi(v,m);_n(E)}else{const g=Rg(a),v=Na(p),m=vi(g,v);_n(m)}else{const g={...a,colorId:c,marker:"X"},v=Na(g),m=Rg(a),E=vi(v,m);_n(E)}}else if(o.type==="edge"){const _=u.getEdgeMarker(a);if(_){const p=Sg(a),g=Ng(_),v=vi(p,g);_n(v)}else{const p={...a,colorId:c},g=Ng(p),v=Sg(a),m=vi(g,v);_n(m)}}},r.onDrag=o=>{const a=o.coords,c=ut($a);if(o.type==="cell center"||o.type==="corner"){const u={p1:o.prevCoords,p2:a,colorId:c},_=gT(u);_r(_)}},r.onDragEnd=()=>{const o=ut(Fa);if(o.mode==="add"){const a=o.draftLine.filter(c=>!o.lineMarkers.some(u=>Ji(c,u)));if(a.length){const c=us(a),u=xg(a),_=vi(c,u);_n(_)}}else{const a=o.lineMarkers.filter(c=>o.draftLine.some(u=>Ji(c,u)));if(a.length){const c=xg(a),u=us(a),_=vi(c,u);_n(_)}}},{blur(){},pointerDown(o){r.pointerDown(o,t)},pointerMove(o){r.pointerMove(o,t)},pointerUp(o){r.pointerUp(o,t)},keyDown(){},keyUp(){}}}function VF(t,e,n){return{toolId:t,cells:e,cells2:e,value:n}}function XF(t,e){const n=Yh(t.cells,e,!0);return n!==t.cells?{...t,cells:n,cells2:n}:t}function qF(t){t++;const e=[];for(;t>0;){t--;const n=t%26;t=Math.floor(t/26),e.unshift(String.fromCharCode(65+n))}return e.join("")}function ZF(t){for(let e=0;;e++){const n=qF(e);if(!t.has(n))return n}}function QF(t,e,n){const r=new Lo,i={nRows:e.nRows,nCols:e.nCols};let o=null,a=null,c=null,u=null,_="cells2",p;(E=>{E[E.DYNAMIC=0]="DYNAMIC",E[E.SELECTING=1]="SELECTING",E[E.MOVING=2]="MOVING"})(p||(p={}));let g=0;function v(E){const O=ut(vt),I=E.cell;if(!Jt(E.cell,i))return;const y=qx(O,n,I);if(g===0&&(y?(c=y[0],o=y[1],g=2,u=I,_=o.cells2.some(M=>Xe(M,I))?"cells2":"cells"):g=1),g===1&&c===null){c=bt.uniqueId();const D=Zx(O,n),M=ZF(D);o=VF(n,[I],M),ii(c,o);return}else if(g===1&&c&&o){o=XF(o,I),Ht(n,c,o);return}else if(g===2&&c&&o&&u){const D={r:I.r-u.r,c:I.c-u.c},W=(_==="cells2"?o.cells2:o.cells).map(F=>({r:F.r+D.r,c:F.c+D.c}));if(!W.every(F=>Jt(F,i)))return;_==="cells"?o={...o,cells:W}:o={...o,cells2:W},u=I,Ht(n,c,o)}}return r.onDragStart=E=>{c=null,o=null,g=0,u=null,v(E)},r.onDrag=E=>{v(E)},r.onDragEnd=()=>{c&&o&&(g===1?oi(c,o,n):g===2&&Ou(c,a,o,n),a=o)},r.onTap=()=>{c&&g!==1&&(yi(n,c),c=null,o=null)},{pointerDown:E=>{E.button===0&&r.pointerDown(E,t)},pointerMove:E=>{r.pointerMove(E,t)},pointerUp:E=>{r.pointerUp(E,t)},keyDown:()=>{},keyUp:()=>{}}}function JF(t){if(t.type===ge.SELECTION)return function(n,r,i){return FF(n,r,i)};if(t.type===ge.SINGLE_CELL){let e=function(r,i,o){return TF(r,i,o,n)};const n=t;return e}else if(t.type===ge.SINGLE_CELL_ARROW){let e=function(r,i,o){return $F(r,i,o,n)};const n=t;return e}else if(t.type===ge.SINGLE_CELL_MULTI_ARROW){let e=function(r,i,o){return HF(r,i,o,n)};const n=t;return e}else if(t.type===ge.EDGE){let e=function(r,i,o){return WF(r,i,o,n)};const n=t;return e}else if(t.type===ge.CORNER){let e=function(r,i,o){return YF(r,i,o,n)};const n=t;return e}else if(t.type===ge.LINE){let e=function(r,i,o){return xF(r,i,o,n)};const n=t;return e}else if(t.type===ge.ARROW){let e=function(r,i,o){return RF(r,i,o,n)};const n=t;return e}else if(t.type===ge.CAGE){let e=function(r,i,o){return GF(r,i,o,n)};const n=t;return e}else{if(t.type===ge.CLONE)return function(n,r,i){return QF(n,r,i)};if(t.type===ge.CENTER_CORNER_OR_EDGE){let e=function(r,i,o){return DF(r,i,o,n)};const n=t;return e}else if(t.type===ge.OUTSIDE_DIRECTION){let e=function(r,i,o){return kF(r,i,o,n)};const n=t;return e}else if(t.type===ge.PEN)return function(n,r){return KF(n,r)}}}const Zp=oo([to,En,en],([t,e,n])=>{const r=Zr(n,xt);if(r===void 0){console.warn(`Element handler for ${n} is not defined`);return}if(t===null)return;const i=r.inputOptions,o=i?JF(i):void 0;return o?o(t,e,n):void 0});var e8=ue('<path class="cursor svelte-zsq70u"></path>');function t8(t,e){ae(e,!1);const n=ot(),r=()=>Ce(en,"$toolStore",n),i=()=>Ce(wi,"$selectionStore",n),o=T(),a=T(),c=.25;function u(p){if(!p)return"";const[g,v]=[p.c,p.r];return`M${g},${v}L${g+c},${v}L${g},${v+c}Z`}k(()=>r(),()=>{N(o,Vu(r()))}),k(()=>i(),()=>{N(a,u(i().lastCell))}),Ie(),pe();var _=e8();ee(()=>{A(_,"d",h(a)),A(_,"visibility",h(o)?"visible":"hidden")}),x(t,_),le()}var n8=ue('<g class="grid-border"><rect fill="none" stroke="black" class="svelte-17ufefx"></rect></g>');function r8(t,e){ae(e,!1);let n=U(e,"gridShape",8);pe();var r=n8(),i=V(r);A(i,"x",0),A(i,"y",0),z(r),ee(()=>{A(i,"width",n().nCols),A(i,"height",n().nRows)}),x(t,r),le()}var i8=ue('<rect fill="none" stroke="black" class="svelte-trw5za"></rect>'),o8=ue('<g class="grid-lines"></g>');function s8(t,e){ae(e,!1);const n=ot(),r=()=>Ce(En,"$gridStore",n),i=T();k(()=>r(),()=>{N(i,r().getAllCells())}),Ie(),pe();var o=o8();at(o,5,()=>h(i),Lt,(a,c)=>{var u=i8();A(u,"width",1),A(u,"height",1),ee(()=>{A(u,"x",h(c).c),A(u,"y",h(c).r)}),x(a,u)}),z(o),x(t,o),le()}function a8(t){const e=[];return e.push({r:t.r,c:t.c}),e.push({r:t.r,c:t.c+1}),e.push({r:t.r+1,c:t.c+1}),e.push({r:t.r+1,c:t.c}),e}function l8(t){const e=new Map;function n(r,i){const o=e.get(i);if(o!=null&&o.has(r)){o.delete(r),o.size<=0&&e.delete(i);return}let a=e.get(r);a===void 0&&(a=new Set,e.set(r,a)),a.add(i)}for(const r of t){const i=a8(r),o=i.length;for(let a=0;a<o;a++){const c=i[a%o],u=i[(a+1)%o],_=JSON.stringify(c),p=JSON.stringify(u);n(_,p)}}return e}function c8(t,e=0,n=!1){const r=[],i=l8(t);if(i.size<=0)return r;const o=new Set;for(;i.size>0;){const a=Array.from(i.entries()).find(E=>E[1].size===1);if(a===void 0)throw new Error("No corner with single adjacency found");const[c,u]=a;let _=JSON.parse(c);const p=Array.from(u)[0];let g=JSON.parse(p),v=p;const m=[];do{const E=i.get(v);if(E===void 0)throw new Error(`Corner with no adjacencies found ${v}`);const O=new Re(_.c,_.r),I=new Re(g.c,g.r);let b=n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,y=null,D=null;for(const te of E){const Ee=JSON.parse(te),Oe=new Re(Ee.c,Ee.r),he=I.subtract(O),$e=Oe.subtract(I),ze=he.perpDotProduct($e);b<ze!=n&&(b=ze,D=Ee,y=te)}if(n&&E.size>1&&o.add(v),D===null||y===null)throw new Error("Corner with no adjacencies found");E.delete(y),E.size<=0&&i.delete(v);const M=e*(g.c-_.c),W=e*(D.c-g.c),j=e*(_.r-g.r),F=e*(g.r-D.r),q=F+b*W,J=M+b*j,oe=new Re(g.c+q,g.r+J),re=4;o.has(v)?(m.push(new Re(oe.x-re*M,oe.y-re*W)),m.push(new Re(oe.x-re*j,oe.y-re*F))):m.push(oe),_=g,g=D,v=y}while(v!==p);r.push(m)}return r}function io(t,e=0,n=!1){return c8(t,e,n).map(o=>Ao(o,!0)).join("")}const u8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5)];function d8(t,e,n=u8){if(e===1)return n;const r=[],i=n.length,o=0,a=360/e,c=t*a+o,u=(t+1)*a+o,_=c/(360/i),p=u/(360/i),g=Math.floor(_)%i,v=Math.ceil(_)%i,m=n[g].lerp(n[v],_%1),E=Math.floor(p)%i,O=Math.ceil(p)%i,I=n[E].lerp(n[O],p%1);r.push(m);for(let y=Math.ceil(_);y<=Math.floor(p);y++)r.push(n[y%i]);r.push(I);const b=new Re(0,0);return r.push(b),r}function Qp(t,e,n=new Re(0,0),r=!0,i=0){if(t<0)throw Error(`r = ${t} must be greater or equal than 0`);if(e<3)throw Error(`n = ${e} must be greater or equal to 3`);const o=Math.cos(Math.PI/e),a=r?t:t/o,c=[];for(let u=0;u<e;u++){const _=a*Math.cos(u/e*2*Math.PI+i*2*Math.PI),p=a*Math.sin(u/e*2*Math.PI+i*2*Math.PI),g=n.add(new Re(_,p));c.push(g)}return c}function Ao(t,e=!1){const n=e?"Z":"";return"M"+t.map(({x:i,y:o})=>`${i},${o}`).join("L")+n}function _s(t,{shortenHead:e,shortenTail:n,closeLoops:r,bezierRounding:i}={}){const o=t.map(p=>new Re(p.x,p.y));if(r&&o.length>1){const p=o[o.length-1];for(let v=0;v<o.length-1;v++)if(p.equals(o[v])){o.push(o[v+1]);break}const g=o[0];for(let v=1;v<o.length;v++)if(g.equals(o[v])){o.unshift(o[v-1]);break}}if(o.length===1)o.push(o[0]);else{if(e){let p=o[1].subtract(o[0]);p=p.normalise(),p=p.scale(e),o[0]=o[0].add(p)}if(n){const p=o.length;let g=o[p-2].subtract(o[p-1]);g=g.normalise(),g=g.scale(n),o[p-1]=o[p-1].add(g)}}if(!i)return Ao(o);const a=o[0],c=["M",`${a.x},${a.y}`],u=o.length;for(let p=2;p<u;p++){const g=o[p-2],v=o[p-1],m=o[p];let E=g.subtract(v).normalise();E=E.scale(i),E=E.add(v);let O=m.subtract(v).normalise();O=O.scale(i),O=O.add(v),c.push(`L${E.x},${E.y} Q ${v.x},${v.y} ${O.x},${O.y}`)}const _=o[u-1];return c.push(`L${_.x},${_.y}`),c.join(" ")}function fs(t,e={}){const n=Ha(t);return _s(n,e)}function Xn(t){return new Re(t.c+.5,t.r+.5)}function Ha(t){return t.map(n=>Xn(n))}const _8=[new Re(-.5,-.5),new Re(.5,-.5),new Re(.5,.5),new Re(-.5,.5),new Re(0,-.5),new Re(0,.5),new Re(-.5,0),new Re(.5,0)];function f8(t,e){const n=_8[t];return n.subtract(n.scale(e))}function Jp(t,e){const n=[new Re(t.c-e,t.r-e),new Re(t.c+e,t.r+e)],r=[new Re(t.c-e,t.r+e),new Re(t.c+e,t.r-e)];return[n,r].map(o=>Ao(o,!1)).join("")}const g8=new Map([[1,"hsl(0, 0%, 70%)"],[2,"hsl(0, 0%, 45%)"],[3,"hsl(0, 0%, 12%)"],[4,"hsl(109, 70%, 45%)"],[5,"hsl(295, 70%, 45%)"],[6,"hsl(22, 70%, 45%)"],[7,"hsl(2, 70%, 45%)"],[8,"hsl(60, 70%, 45%)"],[9,"hsl(210, 70%, 45%)"]]);function vl(t,e="none"){return g8.get(t)||e}function h8(t,e,n){let r=[];function o(c,u){return c.map(_=>_.rotate(u*Math.PI/180))}let a=[];return t==="max"?a=[new Re(-.12,-.32),new Re(0,-.4),new Re(.12,-.32)]:a=[new Re(-.12,-.4),new Re(0,-.32),new Re(.12,-.4)],r=[a,o(a,90),o(a,180),o(a,270)],r=r.map(c=>c.map(u=>{const _=new Re(n+.5,e+.5);return u.add(_)})),r}var p8=ue('<path class="region-border svelte-17ucj6g" fill="none" stroke="black"></path>'),v8=ue('<g class="regions-border"></g>');function m8(t,e){ae(e,!1);const n=ot(),r=()=>Ce(fn,"$cellsStore",n),i=T(),o=T();function a(u,_){return u.filter(v=>v.region===_).map(v=>({r:v.r,c:v.c}))}k(()=>r(),()=>{N(i,r())}),k(()=>h(i),()=>{N(o,new Set(h(i).map(u=>u.region).filter(u=>u!==null)))}),Ie(),pe();var c=v8();at(c,5,()=>h(o),Lt,(u,_)=>{var p=p8();ee(()=>A(p,"d",io(a(h(i),h(_)),0,!1))),ee(()=>A(p,"id",`region-${h(_)??""}`)),x(u,p)}),z(c),x(t,c),le()}var E8=ue('<g class="selection-layer"><filter id="selection-blur"><feGaussianBlur in="SourceGraphic"></feGaussianBlur><feComponentTransfer><feFuncR type="identity"></feFuncR><feFuncG type="identity"></feFuncG><feFuncB type="identity"></feFuncB><feFuncA type="linear" slope="20" intercept="-9.5"></feFuncA></feComponentTransfer></filter><mask id="selection-mask" maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%"></rect><path stroke="none" filter="url(#selection-blur)"></path></mask><path class="selection svelte-1twu8hz" mask="url(#selection-mask)"></path></g>');function C8(t,e){ae(e,!1);const n=ot(),r=()=>Ce(wi,"$selectionStore",n),i=()=>Ce(en,"$toolStore",n),o=T(),a=T(),c=T(),u=T(),_=T(),p=T();let g=U(e,"boundingBox",8);const v=.06,m=.05,E="#080808",O="#b2b2b2";k(()=>Z(g()),()=>{N(o,g().x)}),k(()=>Z(g()),()=>{N(a,g().y)}),k(()=>r(),()=>{N(c,r().cells)}),k(()=>h(c),()=>{N(u,io(h(c),0))}),k(()=>h(c),()=>{N(_,io(h(c),v))}),k(()=>i(),()=>{N(p,Vu(i()))}),Ie(),pe();var I=E8(),b=V(I),y=V(b);A(y,"stdDeviation",m),Oi(),z(b);var D=$(b),M=V(D);A(M,"fill",O);var W=$(M);A(W,"fill",E),z(D);var j=$(D);z(I),ee(()=>{A(I,"visibility",h(p)?"visible":"hidden"),A(D,"x",h(o)),A(D,"y",h(a)),A(M,"x",h(o)),A(M,"y",h(a)),A(W,"d",h(_)),A(j,"d",h(u))}),x(t,I),le()}var O8=ue('<g class="board-background svelte-15ftz42" mask="url(#fog-mask-fog)"><path class="svelte-15ftz42"></path></g>');function I8(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"grid",8);k(()=>Z(i()),()=>{N(n,i().getAllCells().map(c=>({r:c.r,c:c.c})))}),k(()=>h(n),()=>{N(r,io(h(n),0))}),Ie(),pe();var o=O8(),a=V(o);z(o),ee(()=>A(a,"d",h(r))),x(t,o),le()}function gr(t){return oo(vt,n=>{const r=[];for(const[i,o]of n.entries())t(i)&&r.push({toolId:i,element:o});return r})}const Sd=gr(Mb),b8=oo(Sd,t=>{const e=t.find(r=>r.toolId===d.MINIMUM);return e?e.element:{}}),w8=oo(Sd,t=>{const e=t.find(r=>r.toolId===d.MAXIMUM);return e?e.element:{}}),y8=gr(zu),L8=gr(yh),A8=gr(wh),N8=gr(Yu),S8=gr(Lh),R8=gr(ju),x8=gr(Ku),T8=gr(Ah),D8=gr(cs);var k8=ue('<marker markerUnits="userSpaceOnUse" orient="auto"><path fill="none" stroke-linejoin="miter"></path></marker>');function ml(t,e){let n=U(e,"l",8,.2),r=U(e,"id",8),i=U(e,"strokeWidth",8),o=U(e,"stroke",8,"black");const a=.5,c=`M${a-n()},${a-n()} L${a},${a} L${a-n()},${a+n()}`;var u=k8();A(u,"viewBox","0 0 1 1"),A(u,"refX",a),A(u,"refY",a),A(u,"markerWidth",1),A(u,"markerHeight",1);var _=V(u);A(_,"d",c),z(u),ee(()=>{A(u,"id",r()),A(_,"stroke-width",i()),A(_,"stroke",o())}),x(t,u)}var G8=ue("<path></path>");function gs(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let p=U(e,"cells",8),g=U(e,"shape",8,Xu);const v="square";k(()=>Z(g()),()=>{N(n,g().inset??.06)}),k(()=>Z(g()),()=>{N(r,g().stroke??"black")}),k(()=>Z(g()),()=>{N(i,g().strokeWidth??.03)}),k(()=>Z(g()),()=>{N(o,g().strokeDasharray??.08)}),k(()=>Z(g()),()=>{N(a,g().fill??"none")}),k(()=>Z(g()),()=>{N(c,g().connectDiag??!0)}),k(()=>(Z(p()),h(n),h(c)),()=>{N(u,io(p(),h(n),h(c)))}),k(()=>Z(g()),()=>{N(_,g().strokeLinejoin??"miter")}),Ie(),pe();var m=G8();A(m,"stroke-linecap",v),ee(()=>{A(m,"d",h(u)),A(m,"stroke",h(r)),A(m,"stroke-width",h(i)),A(m,"fill",h(a)),A(m,"stroke-dasharray",h(o)),A(m,"stroke-linejoin",h(_))}),x(t,m),le()}var M8=ue('<path class="arrow-line" fill="none"></path>'),U8=ue('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><!><!>',1);function F8(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T(),m=T(),E=T();let O=U(e,"tool",8),I=U(e,"arrowId",8),b=U(e,"boundingBox",8);const y=tn(O().toolId,xt)??qu,D="round",M="round",W=crypto.randomUUID(),j=`arrow-mask-${I()}-${W}`,F=`arrow-marker-${I()}-${W}`;k(()=>Z(O()),()=>{N(n,O().shape??y)}),k(()=>Z(b()),()=>{N(r,b().x)}),k(()=>Z(b()),()=>{N(i,b().y)}),k(()=>h(n),()=>{var he;N(o,((he=h(n))==null?void 0:he.r)??.4)}),k(()=>h(n),()=>{var he;N(a,((he=h(n))==null?void 0:he.stroke)??"gray")}),k(()=>h(n),()=>{var he;N(c,((he=h(n))==null?void 0:he.strokeWidth)??.1)}),k(()=>h(n),()=>{var he;N(u,((he=h(n))==null?void 0:he.strokeDasharray)??0)}),k(()=>h(n),()=>{var he;N(_,((he=h(n))==null?void 0:he.opacity)??.8)}),k(()=>(h(o),h(n)),()=>{var he,$e,ze,Ae;N(p,{shortenHead:h(o),shortenTail:(($e=(he=h(n))==null?void 0:he.linePathOptions)==null?void 0:$e.shortenTail)??.2,bezierRounding:((Ae=(ze=h(n))==null?void 0:ze.linePathOptions)==null?void 0:Ae.bezierRounding)??.4})}),k(()=>h(n),()=>{var he;N(g,((he=h(n))==null?void 0:he.fill)??"none")}),k(()=>h(n),()=>{var he;N(v,((he=h(n))==null?void 0:he.inset)??.2)}),k(()=>h(v),()=>{N(m,{...y,strokeDasharray:0,strokeLinejoin:"round",inset:h(v)})}),k(()=>Z(O()),()=>{N(E,fs(O().cells))}),Ie(),pe();var q=U8(),J=de(q);A(J,"id",j);var oe=V(J),re=$(oe);z(J);var te=$(J);ml(te,{id:F,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var Ee=$(te);gs(Ee,{get cells(){return O().cells},get shape(){return h(m)}});var Oe=$(Ee);at(Oe,1,()=>O().lines,Lt,(he,$e)=>{var ze=Se(),Ae=de(ze);{var Le=rt=>{var Ye=M8();ee(()=>A(Ye,"d",fs(h($e),h(p)))),A(Ye,"stroke-linejoin",D),A(Ye,"stroke-linecap",M),A(Ye,"marker-end",`url(#${F??""})`),ee(()=>{A(Ye,"stroke",h(a)),A(Ye,"stroke-width",h(c)),A(Ye,"opacity",h(_)),A(Ye,"stroke-dasharray",h(u))}),x(rt,Ye)};fe(Ae,rt=>{h($e).length>1&&rt(Le)})}x(he,ze)}),ee(()=>{A(J,"x",h(r)),A(J,"y",h(i)),A(oe,"x",h(r)),A(oe,"y",h(i)),A(re,"stroke-width",2*h(o)-h(c)),A(re,"d",h(E))}),x(t,q),le()}var $8=ue('<path class="arrow-line" fill="none"></path>'),P8=ue('<mask maskUnits="userSpaceOnUse" width="100%" height="100%"><rect width="100%" height="100%" fill="white"></rect><path class="arrow-bulb svelte-118qdii" stroke="black"></path></mask><!><path class="arrow-bulb svelte-118qdii"></path><!>',1);function H8(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T();let v=U(e,"tool",8),m=U(e,"arrowId",8),E=U(e,"boundingBox",8);const O=tn(v().toolId,xt)??qu,I="round",b="round",y=crypto.randomUUID(),D=`arrow-mask-${m()}-${y}`,M=`arrow-marker-${m()}-${y}`;k(()=>Z(v()),()=>{N(n,v().shape??O)}),k(()=>Z(E()),()=>{N(r,E().x)}),k(()=>Z(E()),()=>{N(i,E().y)}),k(()=>h(n),()=>{var te;N(o,((te=h(n))==null?void 0:te.r)??.4)}),k(()=>h(n),()=>{var te;N(a,((te=h(n))==null?void 0:te.stroke)??"gray")}),k(()=>h(n),()=>{var te;N(c,((te=h(n))==null?void 0:te.strokeWidth)??.1)}),k(()=>h(n),()=>{var te;N(u,((te=h(n))==null?void 0:te.strokeDasharray)??0)}),k(()=>h(n),()=>{var te;N(_,((te=h(n))==null?void 0:te.opacity)??.8)}),k(()=>(h(o),h(n)),()=>{var te,Ee,Oe,he;N(p,{shortenHead:h(o),shortenTail:((Ee=(te=h(n))==null?void 0:te.linePathOptions)==null?void 0:Ee.shortenTail)??.2,bezierRounding:((he=(Oe=h(n))==null?void 0:Oe.linePathOptions)==null?void 0:he.bezierRounding)??.4})}),k(()=>Z(v()),()=>{N(g,fs(v().cells))}),Ie(),pe();var W=P8(),j=de(W);A(j,"id",D);var F=V(j),q=$(F);z(j);var J=$(j);ml(J,{id:M,l:.2,get strokeWidth(){return h(c)},get stroke(){return h(a)}});var oe=$(J);A(oe,"mask",`url(#${D??""})`);var re=$(oe);at(re,1,()=>v().lines,Lt,(te,Ee)=>{var Oe=Se(),he=de(Oe);{var $e=ze=>{var Ae=$8();ee(()=>A(Ae,"d",fs(h(Ee),h(p)))),A(Ae,"stroke-linejoin",I),A(Ae,"stroke-linecap",b),A(Ae,"marker-end",`url(#${M??""})`),ee(()=>{A(Ae,"stroke",h(a)),A(Ae,"stroke-width",h(c)),A(Ae,"opacity",h(_)),A(Ae,"stroke-dasharray",h(u))}),x(ze,Ae)};fe(he,ze=>{h(Ee).length>1&&ze($e)})}x(te,Oe)}),ee(()=>{A(j,"x",h(r)),A(j,"y",h(i)),A(F,"x",h(r)),A(F,"y",h(i)),A(q,"stroke-width",2*h(o)-h(c)),A(q,"d",h(g)),A(oe,"d",h(g)),A(oe,"stroke-width",2*h(o)+h(c)),A(oe,"stroke",h(a))}),x(t,W),le()}var B8=ue('<g class="arrow-tool"><!></g>');function W8(t,e){ae(e,!1);const n=T();let r=U(e,"tool",8),i=U(e,"arrowId",8),o=U(e,"boundingBox",8);const a=tn(r().toolId,xt)??qu;k(()=>Z(r()),()=>{N(n,r().shape??a)}),Ie(),pe();var c=B8(),u=V(c);{var _=g=>{F8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return o()}})},p=g=>{H8(g,{get tool(){return r()},get arrowId(){return i()},get boundingBox(){return o()}})};fe(u,g=>{h(n).type===H.BULBOUS_ARROW?g(_):g(p,!1)})}z(c),x(t,c),le()}var z8=ue("<g></g>"),Y8=ue('<g class="arrow-tools-layer" mask="url(#fog-mask-fog)"></g>');function j8(t,e){ae(e,!1);const n=ot(),r=()=>Ce(R8,"$arrowToolsStore",n),i=T();let o=U(e,"boundingBox",8);k(()=>r(),()=>{N(i,r())}),Ie();var a=Y8();at(a,5,()=>h(i),Lt,(c,u)=>{let _=()=>h(u).toolId,p=()=>h(u).element;var g=z8();at(g,5,()=>Object.entries(p()),v=>v[0],(v,m)=>{W8(v,{get arrowId(){return h(m)[0]},get tool(){return h(m)[1]},get boundingBox(){return o()}})}),z(g),ee(()=>Qr(g,`element-group ${_()}`)),x(c,g)}),z(a),x(t,a),le()}var K8=ue('<path fill="none" stroke-linecap="round"></path>'),V8=ue('<!><path fill="none" stroke-linecap="round"></path>',1);function X8(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=U(e,"tool",8);U(e,"id",8);const _=u().cell,p=tn(u().toolId,xt)??zb;function g(D,M){const W=[new Re(-.2,0),new Re(0,0),new Re(0,D)],F={[Ue.NE]:0,[Ue.E]:Math.PI/4,[Ue.SE]:Math.PI/2,[Ue.S]:3*Math.PI/4,[Ue.SW]:Math.PI,[Ue.W]:5*Math.PI/4,[Ue.NW]:3*Math.PI/2,[Ue.N]:7*Math.PI/4}[M];return W.map(J=>J.rotate(F))}const v=.3;function m(D,M){const W=tl(M),j=new Re(W.c,W.r).normalise().scale(v),F=Xn(D),q=F.subtract(j),J=F.add(j);return[q,J]}function E(D,M){const j=m(D,M);let F=g(.2,M);F=F.map(re=>re.add(j[1]));const q=_s(j),J=_s(F);return q+J}k(()=>Z(u()),()=>{N(n,u().direction)}),k(()=>Z(u()),()=>{N(r,u().shape??p)}),k(()=>h(r),()=>{N(i,{...h(r),stroke:"var(--grid-background-color)",strokeWidth:h(r).strokeWidth?h(r).strokeWidth+.05:.05})}),k(()=>h(r),()=>{N(o,h(r).strokeWidth??.1)}),k(()=>h(r),()=>{N(a,h(r).stroke??"black")}),k(()=>h(n),()=>{N(c,E(_,h(n)))}),Ie(),pe();var O=V8(),I=de(O);{var b=D=>{var M=K8();ee(()=>{A(M,"d",h(c)),A(M,"stroke",h(i).stroke),A(M,"stroke-width",h(i).strokeWidth)}),x(D,M)};fe(I,D=>{D(b)})}var y=$(I);ee(()=>{A(y,"d",h(c)),A(y,"stroke",h(a)),A(y,"stroke-width",h(o))}),x(t,O),le()}var q8=ue('<path fill="none"></path>'),Z8=ue("<!><!>",1);function Q8(t,e){ae(e,!1);const n=T(),r=T(),i=T();let o=U(e,"tool",8),a=U(e,"id",8);const c=o().cell,u=tn(o().toolId,xt)??Yb,_=.2;function p(b,y){const D=tl(y),M=new Re(D.c,D.r),j=Xn(b).add(M.scale(.4));return[j.subtract(M.normalise().scale(_)),j]}function g(b){return _s(p(c,b))}const v=crypto.randomUUID(),m=`single-cell-multi-arrow-marker-${a()}-${v}`;k(()=>Z(o()),()=>{N(n,o().shape??u)}),k(()=>h(n),()=>{N(r,h(n).strokeWidth??.08)}),k(()=>h(n),()=>{N(i,h(n).stroke??"black")}),Ie(),pe();var E=Z8(),O=de(E);ml(O,{id:m,l:.1,get stroke(){return h(i)},get strokeWidth(){return h(r)}});var I=$(O);at(I,1,()=>o().directions,Lt,(b,y)=>{var D=q8();ee(()=>A(D,"d",g(h(y)))),A(D,"marker-end",`url(#${m??""})`),ee(()=>{A(D,"stroke",h(i)),A(D,"stroke-width",h(r))}),x(b,D)}),x(t,E),le()}var J8=ue('<rect class="masking-rect svelte-rti4am"></rect><text> </text>',1);function hs(t,e){ae(e,!1);const n=T();let r=U(e,"value",8,""),i=U(e,"fontSize",8,.2),o=U(e,"x",8),a=U(e,"y",8),c=U(e,"position",8,"TL"),u=U(e,"fontColor",8,"var(--text-primary-color)"),_=U(e,"fontWeight",8,400),p=T(null),g=T(null);function v(y,D,M){const W=["TL","TR"].includes(M),F=["TL","BL"].includes(M)?y+.05:y,q=D;return new Re(F,q)}function m(y){return["TL","BL"].includes(y)?"start":"end"}function E(y){return["TL","TR"].includes(y)?"text-before-edge":""}Nb(()=>{if(!h(p)||!h(g))return;const y=h(p).getBBox();h(g).setAttribute("x",String(y.x)),h(g).setAttribute("y",String(y.y+y.height*.1)),h(g).setAttribute("width",String(y.width)),h(g).setAttribute("height",String(y.height*.8))}),k(()=>(Z(o()),Z(a()),Z(c())),()=>{N(n,v(o(),a(),c()))}),Ie(),pe();var O=Se(),I=de(O);{var b=y=>{var D=J8(),M=de(D);Ii(M,F=>N(g,F),()=>h(g));var W=$(M);ee(()=>A(W,"text-anchor",m(c()))),ee(()=>A(W,"dominant-baseline",E(c())));var j=V(W,!0);z(W),Ii(W,F=>N(p,F),()=>h(p)),ee(()=>{var F,q;A(W,"x",(F=h(n))==null?void 0:F.x),A(W,"y",(q=h(n))==null?void 0:q.y),A(W,"font-size",i()),A(W,"fill",u()),A(W,"font-weight",_()),nt(j,r())}),x(y,D)};fe(I,y=>{r().length&&y(b)})}x(t,O),le()}var e$=ie("<!> <!>",1);function ev(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"cells",8),o=U(e,"shape",8,Xu),a=U(e,"value",8,void 0);k(()=>Z(i()),()=>{N(n,i()[0])}),k(()=>h(n),()=>{N(r,new Re(h(n).c,h(n).r))}),Ie(),pe();var c=e$(),u=de(c);gs(u,{get cells(){return i()},get shape(){return o()}});var _=$(u,2);{var p=g=>{hs(g,{get value(){return a()},get x(){return h(r).x},get y(){return h(r).y},position:"TL"})};fe(_,g=>{a()&&a().length&&g(p)})}x(t,c),le()}var t$=ue("<rect></rect>");function n$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T();let m=U(e,"cx",8),E=U(e,"cy",8),O=U(e,"shape",8);k(()=>Z(O()),()=>{N(n,O().r??.5)}),k(()=>(Z(m()),h(n)),()=>{N(r,m()-h(n))}),k(()=>(Z(E()),h(n)),()=>{N(i,E()-h(n))}),k(()=>h(n),()=>{N(o,2*h(n))}),k(()=>h(n),()=>{N(a,2*h(n))}),k(()=>Z(O()),()=>{N(c,O().stroke??"black")}),k(()=>Z(O()),()=>{N(u,O().strokeWidth??.02)}),k(()=>Z(O()),()=>{N(_,O().fill??"none")}),k(()=>Z(O()),()=>{N(p,O().angle??0)}),k(()=>Z(O()),()=>{N(g,O().strokeDasharray??0)}),k(()=>Z(O()),()=>{N(v,O().opacity??1)}),Ie(),pe();var I=t$();ee(()=>{A(I,"x",h(r)),A(I,"y",h(i)),A(I,"width",h(o)),A(I,"height",h(a)),A(I,"stroke",h(c)),A(I,"stroke-width",h(u)),A(I,"fill",h(_)),A(I,"transform",`rotate(${h(p)}, ${m()}, ${E()})`),A(I,"stroke-dasharray",h(g)),A(I,"opacity",h(v))}),x(t,I),le()}var r$=ue('<g class="minmax-constraint"><rect class="svelte-18eb0vk"></rect><path class="minmax-markers svelte-18eb0vk"></path></g>');function Yg(t,e){ae(e,!1);const n=ot(),r=()=>Ce(b8,"$minimumConstraintsStore",n),i=()=>Ce(w8,"$maximumConstraintsStore",n),o=T(),a=T(),c=T();let u=U(e,"coord",8),_=U(e,"minOrMax",8);function p(I,b){const y=[!0,!0,!0,!0];let D=[[0,-1],[1,0],[0,1],[-1,0]];for(let M=0;M<D.length;M++){let W=D[M];const j={r:I.r+W[1],c:I.c+W[0]};y[M]=!Object.values(b).some(F=>Xe(j,F.cell))}return y}function g(I,b){let y=h8(_(),I.r,I.c);const D=p(I,b);return y=y.filter((W,j)=>D[j]),y.map(W=>Ao(W,!1)).join("")}function v(I,b){return _()==="max"?b:I}k(()=>Z(u()),()=>{N(o,u().c)}),k(()=>Z(u()),()=>{N(a,u().r)}),k(()=>(r(),i()),()=>{N(c,v(r(),i()))}),Ie(),pe();var m=r$(),E=V(m);A(E,"width",1),A(E,"height",1);var O=$(E);ee(()=>A(O,"d",g(u(),h(c)))),z(m),ee(()=>{A(E,"x",h(o)),A(E,"y",h(a))}),x(t,m),le()}var i$=ue("<circle></circle>");function Ar(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=U(e,"x",8),_=U(e,"y",8),p=U(e,"shape",8);k(()=>Z(p()),()=>{N(n,p().r??.35)}),k(()=>Z(p()),()=>{N(r,p().stroke??"black")}),k(()=>Z(p()),()=>{var v;N(i,(v=p())==null?void 0:v.opacity)}),k(()=>Z(p()),()=>{N(o,p().strokeWidth??.02)}),k(()=>Z(p()),()=>{N(a,p().fill??"none")}),k(()=>Z(p()),()=>{N(c,p().strokeDasharray??0)}),Ie(),pe();var g=i$();ee(()=>{A(g,"cx",u()),A(g,"cy",_()),A(g,"r",h(n)),A(g,"stroke",h(r)),A(g,"stroke-width",h(o)),A(g,"fill",h(a)),A(g,"opacity",h(i)),A(g,"stroke-dasharray",h(c))}),x(t,g),le()}var o$=ue("<ellipse></ellipse>");function s$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T();let _=U(e,"cx",8),p=U(e,"cy",8),g=U(e,"shape",8);k(()=>Z(g()),()=>{N(n,g().width??.5)}),k(()=>Z(g()),()=>{N(r,g().height??.5)}),k(()=>Z(g()),()=>{N(i,g().stroke??"black")}),k(()=>Z(g()),()=>{var m;N(o,(m=g())==null?void 0:m.opacity)}),k(()=>Z(g()),()=>{N(a,g().strokeWidth??.02)}),k(()=>Z(g()),()=>{N(c,g().fill??"none")}),k(()=>Z(g()),()=>{N(u,g().angle??0)}),Ie(),pe();var v=o$();ee(()=>{A(v,"cx",_()),A(v,"cy",p()),A(v,"rx",h(n)/2),A(v,"ry",h(r)/2),A(v,"stroke",h(i)),A(v,"stroke-width",h(a)),A(v,"fill",h(c)),A(v,"opacity",h(o)),A(v,"transform",`rotate(${h(u)}, ${_()}, ${p()} )`)}),x(t,v),le()}var a$=ue("<polygon></polygon>");function Ba(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let p=U(e,"cx",8),g=U(e,"cy",8),v=U(e,"shape",8);k(()=>Z(v()),()=>{N(n,v().n??3)}),k(()=>Z(v()),()=>{N(r,v().r??.5)}),k(()=>(h(r),h(n),Z(p()),Z(g())),()=>{N(i,Qp(h(r),h(n),new Re(p(),g())))}),k(()=>h(i),()=>{N(o,h(i).map(E=>`${E.x},${E.y}`).join(" "))}),k(()=>Z(v()),()=>{N(a,v().stroke??"black")}),k(()=>Z(v()),()=>{N(c,v().strokeWidth??.02)}),k(()=>Z(v()),()=>{N(u,v().fill??"none")}),k(()=>Z(v()),()=>{N(_,v().angle??0)}),Ie(),pe();var m=a$();ee(()=>{A(m,"points",h(o)),A(m,"stroke",h(a)),A(m,"stroke-width",h(c)),A(m,"fill",h(u)),A(m,"transform",`rotate(${h(_)}, ${p()}, ${g()} )`)}),x(t,m),le()}var l$=ue("<rect></rect>");function c$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T();let _=U(e,"cx",8),p=U(e,"cy",8),g=U(e,"shape",8);k(()=>Z(g()),()=>{N(n,g().width??.5)}),k(()=>Z(g()),()=>{N(r,g().height??.5)}),k(()=>(Z(_()),h(n)),()=>{N(i,_()-h(n)/2)}),k(()=>(Z(p()),h(r)),()=>{N(o,p()-h(r)/2)}),k(()=>Z(g()),()=>{N(a,g().stroke||"black")}),k(()=>Z(g()),()=>{N(c,g().strokeWidth||.023)}),k(()=>Z(g()),()=>{N(u,g().fill||"none")}),Ie(),pe();var v=l$();ee(()=>{A(v,"x",h(i)),A(v,"y",h(o)),A(v,"width",h(n)),A(v,"height",h(r)),A(v,"stroke",h(a)),A(v,"stroke-width",h(c)),A(v,"fill",h(u))}),x(t,v),le()}function ps(t,e){ae(e,!1);const n=T();let r=U(e,"cx",8),i=U(e,"cy",8),o=U(e,"shape",8);k(()=>(Z(o()),H),()=>{var p;N(n,((p=o())==null?void 0:p.type)??H.CIRCLE)}),Ie(),pe();var a=Se(),c=de(a);{var u=p=>{Ar(p,{get x(){return r()},get y(){return i()},get shape(){return o()}})},_=p=>{var g=Se(),v=de(g);{var m=O=>{s$(O,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},E=O=>{var I=Se(),b=de(I);{var y=M=>{n$(M,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},D=M=>{var W=Se(),j=de(W);{var F=J=>{c$(J,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},q=J=>{var oe=Se(),re=de(oe);{var te=Oe=>{Ba(Oe,{get cx(){return r()},get cy(){return i()},get shape(){return o()}})},Ee=Oe=>{Ar(Oe,{get x(){return r()},get y(){return i()},get shape(){return o()}})};fe(re,Oe=>{h(n)===H.POLYGON?Oe(te):Oe(Ee,!1)},!0)}x(J,oe)};fe(j,J=>{h(n)===H.RECTANGLE?J(F):J(q,!1)},!0)}x(M,W)};fe(b,M=>{h(n)===H.SQUARE?M(y):M(D,!1)},!0)}x(O,I)};fe(v,O=>{h(n)===H.ELLIPSE?O(m):O(E,!1)},!0)}x(p,g)};fe(c,p=>{h(n)===H.CIRCLE?p(u):p(_,!1)})}x(t,a),le()}var u$=ue("<circle></circle>");function d$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=U(e,"x",8),_=U(e,"y",8),p=U(e,"value",8),g=U(e,"shape",8);k(()=>Z(g()),()=>{N(n,g().r??.35)}),k(()=>Z(g()),()=>{N(r,g().stroke??"black")}),k(()=>Z(g()),()=>{var m;N(i,(m=g())==null?void 0:m.opacity)}),k(()=>Z(g()),()=>{N(o,g().strokeWidth??.02)}),k(()=>Z(p()),()=>{N(a,p()==="1"?"var(--constraint-color-red)":p()==="2"?"var(--constraint-color-green)":p()==="3"?"var(--constraint-color-blue)":"none")}),k(()=>Z(g()),()=>{N(c,g().strokeDasharray??0)}),Ie(),pe();var v=u$();ee(()=>{A(v,"cx",u()),A(v,"cy",_()),A(v,"r",h(n)),A(v,"stroke",h(r)),A(v,"stroke-width",h(o)),A(v,"fill",h(a)),A(v,"opacity",h(i)),A(v,"stroke-dasharray",h(c))}),x(t,v),le()}var _$=ue("<!><!>",1),f$=ue('<g class="single-cell-tool"><!><!></g>');function g$(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=U(e,"tool",8),_=U(e,"id",8);const p=u().cell,g=tn(u().toolId,xt)??Wb;k(()=>Z(u()),()=>{N(n,u().shape??g)}),k(()=>h(n),()=>{N(r,{...h(n),stroke:"var(--grid-background-color)",strokeWidth:h(n).strokeWidth?h(n).strokeWidth+.06:.06})}),k(()=>(h(n),H),()=>{var y;N(i,((y=h(n))==null?void 0:y.type)||H.CIRCLE)}),k(()=>{},()=>{N(o,{x:p.c+.5,y:p.r+.5})}),k(()=>Re,()=>{N(a,new Re(p.c,p.r))}),k(()=>Z(u()),()=>{N(c,u().value)}),Ie(),pe();var v=f$(),m=V(v);{var E=y=>{Yg(y,{coord:p,minOrMax:"min"})},O=y=>{var D=Se(),M=de(D);{var W=F=>{Yg(F,{coord:p,minOrMax:"max"})},j=F=>{var q=Se(),J=de(q);{var oe=te=>{d$(te,{get x(){return h(o).x},get y(){return h(o).y},get value(){return h(c)},get shape(){return h(n)}})},re=te=>{var Ee=Se(),Oe=de(Ee);{var he=ze=>{ev(ze,{cells:[p],get shape(){return h(n)},get value(){return u().value}})},$e=ze=>{var Ae=_$(),Le=de(Ae);{var rt=zt=>{ps(zt,{get cx(){return h(o).x},get cy(){return h(o).y},get shape(){return h(r)}})};fe(Le,zt=>{zt(rt)})}var Ye=$(Le);ps(Ye,{get cx(){return h(o).x},get cy(){return h(o).y},get shape(){return h(n)}}),x(ze,Ae)};fe(Oe,ze=>{h(i)===H.CAGE?ze(he):ze($e,!1)},!0)}x(te,Ee)};fe(J,te=>{u().toolId===d.COLORED_COUNTING_CIRCLES?te(oe):te(re,!1)},!0)}x(F,q)};fe(M,F=>{u().toolId===d.MAXIMUM?F(W):F(j,!1)},!0)}x(y,D)};fe(m,y=>{u().toolId===d.MINIMUM?y(E):y(O,!1)})}var I=$(m);{var b=y=>{hs(y,{get value(){return h(c)},get x(){return h(a).x},get y(){return h(a).y},position:"TL"})};fe(I,y=>{h(i)!==H.CAGE&&u().toolId!==d.COLORED_COUNTING_CIRCLES&&h(c)&&y(b)})}z(v),ee(()=>A(v,"id",`constraint-${_()}`)),x(t,v),le()}var h$=ue("<g></g>"),p$=ue('<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)"></g>');function v$(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Sd,"$singleCellToolsStore",n),i=T();k(()=>r(),()=>{N(i,r())}),Ie();var o=p$();at(o,5,()=>h(i),Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var p=h$();at(p,5,()=>Object.entries(_()),g=>g[0],(g,v)=>{var m=Se(),E=de(m);{var O=b=>{X8(b,{get tool(){return h(v)[1]},get id(){return h(v)[0]}})},I=b=>{var y=Se(),D=de(y);{var M=j=>{Q8(j,{get tool(){return h(v)[1]},get id(){return h(v)[0]}})},W=j=>{var F=Se(),q=de(F);{var J=oe=>{g$(oe,{get tool(){return h(v)[1]},get id(){return h(v)[0]}})};fe(q,oe=>{h(v)[1].type==="SIMPLE"&&oe(J)},!0)}x(j,F)};fe(D,j=>{h(v)[1].type==="MULTIARROW"?j(M):j(W,!1)},!0)}x(b,y)};fe(E,b=>{h(v)[1].type==="ARROW"?b(O):b(I,!1)})}x(g,m)}),z(p),ee(()=>Qr(p,`element-group ${u()}`)),x(a,p)}),z(o),x(t,o),le()}function m$(t,e){const n=t.getRow(e.r);return new Set(n)}function E$(t,e){const n=t.getCol(e.c);return new Set(n)}function C$(t,e){const n=t.getCell(e.r,e.c),r=(n==null?void 0:n.region)??null,i=t.getRegion(r);return new Set(i)}function O$(t,e){const n=t.getCellsByKnightMove(e);return new Set(n)}function I$(t,e){const n=t.getNeighboorCells(e);return new Set(n)}function b$(t,e){const n=t.getDisjointGroupIdx(e),r=t.getDisjointGroup(n),i=new Set(r);return i.delete(e),i}function w$(t,e){const n=new Set,r=t.getPositiveDiagonal();return r.find(i=>i===e)?new Set(r):n}function y$(t,e){const n=new Set,r=t.getNegativeDiagonal();return r.find(i=>i===e)?new Set(r):n}function L$(t,e,n){let r=new Set;const o=n.cells.map(g=>t.getCell(g.r,g.c)).filter(g=>g!==void 0),a=o.length,c=[o[0],o[a-1]],u=o.slice(1,a-1),_=c.findIndex(g=>g===e);if(_!==-1){if(r=new Set([...r,...u]),u.length>0){const g=c.filter((v,m)=>m!==_);r=new Set([...r,...g])}return r}return u.findIndex(g=>g===e)!==-1&&(r=new Set([...r,...c])),r}function A$(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function N$(t,e,n){let r=new Set;const o=n.cells.map(u=>t.getCell(u.r,u.c)).filter(u=>u!==void 0);if(!o.find(u=>u===e))return r;const c=o.filter(u=>u!==e);return c.length&&(r=new Set([...r,...c])),r}function S$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);return i&&(e.get(d.ANTIKNIGHT)&&(r=r.union(O$(t,i))),e.get(d.ANTIKING)&&(r=r.union(I$(t,i))),e.get(d.DISJOINT_GROUPS)&&(r=r.union(b$(t,i))),e.get(d.NEGATIVE_DIAGONAL)&&(r=r.union(y$(t,i))),e.get(d.POSITIVE_DIAGONAL)&&(r=r.union(w$(t,i)))),r}function iu(t,e,n,r,i){const o=e.get(r);if(o)for(const a of Object.entries(o)){const c=a[1],u=N$(t,n,c);i=new Set([...i,...u])}return i}function R$(t,e,n){let r=new Set;const i=t.getCell(n.r,n.c);if(!i)return r;const o=e.get(d.BETWEEN_LINE);if(o)for(const c of Object.entries(o)){const u=c[1],_=L$(t,i,u);r=new Set([...r,..._])}const a=e.get(d.RENBAN_LINE);if(a)for(const c of Object.entries(a)){const u=c[1],_=A$(t,i,u);r=new Set([...r,..._])}return r=iu(t,e,i,d.KILLER_CAGE,r),r=iu(t,e,i,d.PARITY_BALANCE_CAGE,r),r=iu(t,e,i,d.SPOTLIGHT_CAGE,r),r}function tv(t,e){let n=new Set;const r=t.globalConstraints,i=t.grid,o=t.localConstraints;if(!r)return n;r.get(d.SUDOKU_RULES_DO_NOT_APPLY)||(n=new Set([...m$(i,e),...E$(i,e),...C$(i,e)])),n=new Set([...n,...S$(i,r,e)]),n=new Set([...n,...R$(i,o,e)]);const a=i.getCell(e.r,e.c);return a&&n.delete(a),n}function x$(t,e){const n=[];if(e.length==0)return[];for(const o of e)n.push(tv(t,o));const r=n.reduce((o,a)=>o.intersection(a)),i=[];for(const o of r)i.push(o.toCoords());return i}var T$=ue('<tspan class="svelte-xct9ah"> </tspan>'),D$=ue('<g class="center-marks-group"><text class="center-mark svelte-xct9ah" dominant-baseline="central"></text></g>');function k$(t,e){ae(e,!1);const n=T();let r=U(e,"cell",8),i=U(e,"seen_values",8);const o=.25;function a(p){return i().find(v=>v===p)!==void 0}k(()=>Z(r()),()=>{N(n,Xn({r:r().r,c:r().c}))}),Ie(),pe();var c=Se(),u=de(c);{var _=p=>{var g=D$(),v=V(g);A(v,"font-size",o),at(v,5,()=>r().centerMarks,Lt,(m,E)=>{var O=T$();const I=Ze(()=>a(h(E)));ee(()=>yt(O,"conflict",h(I)));var b=V(O,!0);z(O),ee(()=>nt(b,h(E))),x(m,O)}),z(v),z(g),ee(()=>{A(v,"x",h(n).x),A(v,"y",h(n).y),A(v,"textLength",r().centerMarks.length>5?"0.9":void 0)}),x(p,g)};fe(u,p=>{r().centerMarks.length&&p(_)})}x(t,c),le()}var G$=ue('<text class="corner-mark svelte-8kb3dx" dominant-baseline="central"> </text>'),M$=ue('<g class="corner-marks-group"></g>');function U$(t,e){ae(e,!1);let n=U(e,"cell",8),r=U(e,"seen_values",8);const i=.25,o=.28;function a(g){const v=g.cornerMarks.slice(0,8),m=Xn({r:g.r,c:g.c});return v.map((E,O)=>{const I=f8(O,o);return{pos:m.add(I),value:E,idx:O}})}function c(g){return r().find(m=>m===g)!==void 0}pe();var u=Se(),_=de(u);{var p=g=>{var v=M$();at(v,5,()=>a(n()),Lt,(m,E)=>{let O=()=>h(E).pos,I=()=>h(E).value;var b=G$();A(b,"font-size",i);const y=Ze(()=>c(I()));var D=V(b,!0);z(b),ee(()=>{A(b,"x",O().x),A(b,"y",O().y),yt(b,"conflict",h(y)),nt(D,I())}),x(m,b)}),z(v),x(g,v)};fe(_,g=>{n().cornerMarks.length&&g(p)})}x(t,u),le()}var F$=ue('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),$$=ue('<text class="cell-region svelte-pn6ftz" dominant-baseline="central"> </text>'),P$=ue('<text class="cell-value svelte-pn6ftz" dominant-baseline="central"> </text>'),H$=ue("<!><!>",1),B$=ue('<g class="cell-values cell-outline svelte-pn6ftz"><!></g>');function W$(t,e){ae(e,!1);const n=ot(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce(As,"$puzzleStore",n),o=()=>Ce(en,"$toolStore",n),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T();let m=U(e,"cell",8);const E=.8,O=400;function I(W,j){if(!W)return[];let q=[...tv(h(p),j.toCoords())].map(J=>J.value).filter(J=>J!==null);return q=[...new Set(q)],q}function b(W){return W?"1":"0"}k(()=>Z(m()),()=>{N(a,m().value)}),k(()=>Z(m()),()=>{N(c,m().given)}),k(()=>Z(m()),()=>{N(u,Xn({r:m().r,c:m().c}))}),k(()=>r(),()=>{N(_,r().highlightPencilmarkConflicts)}),k(()=>i(),()=>{N(p,i())}),k(()=>r(),()=>{N(g,r().showSolution)}),k(()=>(h(_),Z(m())),()=>{N(v,I(h(_),m()))}),Ie(),pe();var y=Se(),D=de(y);{var M=W=>{var j=B$(),F=V(j);{var q=oe=>{var re=Se(),te=de(re);{var Ee=Oe=>{var he=F$();A(he,"font-size",E),A(he,"font-weight",O);var $e=V(he,!0);z(he),ee(()=>{A(he,"x",h(u).x),A(he,"y",h(u).y),nt($e,m().region)}),x(Oe,he)};fe(te,Oe=>{m().region!==null&&Oe(Ee)})}x(oe,re)},J=oe=>{var re=Se(),te=de(re);{var Ee=he=>{var $e=Se(),ze=de($e);{var Ae=Le=>{var rt=$$();A(rt,"font-size",E),A(rt,"font-weight",O);var Ye=V(rt,!0);ee(()=>nt(Ye,b(m().fog))),z(rt),ee(()=>{A(rt,"x",h(u).x),A(rt,"y",h(u).y)}),x(Le,rt)};fe(ze,Le=>{m().fog!==null&&Le(Ae)})}x(he,$e)},Oe=he=>{var $e=Se(),ze=de($e);{var Ae=rt=>{var Ye=P$();A(Ye,"font-size",E),A(Ye,"font-weight",O);var zt=V(Ye,!0);z(Ye),ee(()=>{A(Ye,"x",h(u).x),A(Ye,"y",h(u).y),yt(Ye,"given",h(c)),nt(zt,h(a))}),x(rt,Ye)},Le=rt=>{var Ye=H$(),zt=de(Ye);U$(zt,{get cell(){return m()},get seen_values(){return h(v)}});var wn=$(zt);k$(wn,{get cell(){return m()},get seen_values(){return h(v)}}),x(rt,Ye)};fe(ze,rt=>{h(a)!==null?rt(Ae):rt(Le,!1)},!0)}x(he,$e)};fe(te,he=>{o()===d.FOG?he(Ee):he(Oe,!1)},!0)}x(oe,re)};fe(F,oe=>{o()===d.REGIONS?oe(q):oe(J,!1)})}z(j),ee(()=>yt(j,"hide-given",m().given)),x(W,j)};fe(D,W=>{h(g)||W(M)})}x(t,y),le()}var z$=ue("<path></path>"),Y$=ue('<g class="highlights-group"></g>');function j$(t,e){ae(e,!1);const n=ot(),r=()=>Ce(en,"$toolStore",n);let i=U(e,"cell",8);function o(_){const p=Xn({r:i().r,c:i().c}),g=i().highlights.length;return i().highlights.map((m,E)=>{let O=d8(E,g);O=O.map(b=>b.add(p));const I=Ao(O,!0);return{colorId:m,d:I}})}pe();var a=Se(),c=de(a);{var u=_=>{var p=Se(),g=de(p);{var v=m=>{var E=Y$();at(E,5,()=>o(i()),Lt,(O,I)=>{let b=()=>h(I).colorId,y=()=>h(I).d;var D=z$();ee(()=>{Qr(D,`highlight-wedge color-${b()??""} svelte-1ynpdsm`),A(D,"d",y())}),x(O,D)}),z(E),x(m,E)};fe(g,m=>{i().highlights.length&&m(v)})}x(_,p)};fe(c,_=>{r()!==d.REGIONS&&_(u)})}x(t,a),le()}var K$=ue('<path class="cell-marker" fill="none"></path>'),V$=ue('<circle fill="none" opacity="0.9"></circle>');function X$(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"marker",8);const o=.3,a=.08;k(()=>Z(i()),()=>{N(n,Jp(i(),o))}),k(()=>Z(i()),()=>{N(r,vl(i().colorId,"black"))}),Ie(),pe();var c=Se(),u=de(c);{var _=g=>{var v=K$();A(v,"stroke-width",a),ee(()=>{A(v,"d",h(n)),A(v,"stroke",h(r))}),x(g,v)},p=g=>{var v=V$();A(v,"r",o),A(v,"stroke-width",a),ee(()=>{Qr(v,`cell-marker color-${i().colorId??""}`),A(v,"cx",i().c),A(v,"cy",i().r),A(v,"stroke",h(r))}),x(g,v)};fe(u,g=>{i().marker==="X"?g(_):g(p,!1)})}x(t,c),le()}var q$=ue('<g class="cell-markers"></g>');function Z$(t,e){let n=U(e,"markers",8);var r=q$();at(r,5,n,i=>`${i.r}, ${i.c}, ${i.marker}`,(i,o)=>{X$(i,{get marker(){return h(o)}})}),z(r),x(t,r)}var Q$=ue('<path class="draft-line" fill="none" stroke-linejoin="round" stroke-linecap="round"></path>');function J$(t,e){ae(e,!1);const n=T();let r=U(e,"draftLineMarker",8);const i=.2;function o(u){return u.map(p=>[new Re(p.p1.c,p.p1.r),new Re(p.p2.c,p.p2.r)]).flat()}function a(u){const _=u.draftLine.length?u.draftLine[0].colorId:0;return u.mode==="add"?vl(_,"black"):"darkred"}k(()=>Z(r()),()=>{N(n,Ao(o(r().draftLine)))}),Ie(),pe();var c=Q$();ee(()=>A(c,"stroke",a(r()))),A(c,"stroke-width",i),A(c,"opacity",.5),ee(()=>A(c,"d",h(n))),x(t,c),le()}var e4=ue('<path fill="none" opacity="0.9"></path>');function t4(t,e){ae(e,!1);const n=T(),r=T();let i=U(e,"marker",8);const o=.08,a=.04;k(()=>Z(i()),()=>{N(n,Jp(i(),o))}),k(()=>Z(i()),()=>{N(r,vl(i().colorId,"black"))}),Ie(),pe();var c=e4();A(c,"stroke-width",a),ee(()=>{A(c,"d",h(n)),Qr(c,`edge-marker color-${i().colorId??""}`),A(c,"stroke",h(r))}),x(t,c),le()}var n4=ue('<g class="edge-markers"></g>');function r4(t,e){let n=U(e,"markers",8);var r=n4();at(r,5,n,i=>`${i.r}, ${i.c}`,(i,o)=>{t4(i,{get marker(){return h(o)}})}),z(r),x(t,r)}var i4=ue('<line fill="none" stroke-linejoin="round" stroke-linecap="round"></line>'),o4=ue('<g class="line-markers svelte-yha19m"></g>');function s4(t,e){ae(e,!1);let n=U(e,"lineMarkers",8);const r=.09;function i(c){return JSON.stringify(c)}function o(c){return vl(c,"black")}pe();var a=o4();at(a,5,n,c=>i(c),(c,u)=>{var _=i4();A(_,"stroke-width",r),ee(()=>A(_,"stroke",o(h(u).colorId))),ee(()=>{A(_,"x1",h(u).p1.c),A(_,"y1",h(u).p1.r),A(_,"x2",h(u).p2.c),A(_,"y2",h(u).p2.r),Qr(_,`line-marker color-${h(u).colorId??""} svelte-yha19m`)}),x(c,_)}),z(a),x(t,a),le()}var a4=ue('<g class="pen-tool"><!><!><!><!></g>');function l4(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Fa,"$penToolStore",n),i=T();k(()=>r(),()=>{N(i,{draftLine:r().draftLine,mode:r().mode})}),Ie(),pe();var o=a4(),a=V(o);s4(a,{get lineMarkers(){return r().lineMarkers}});var c=$(a);r4(c,{get markers(){return r().edgeMarkers}});var u=$(c);Z$(u,{get markers(){return r().cellMarkers}});var _=$(u);J$(_,{get draftLineMarker(){return h(i)}}),z(o),x(t,o),le()}var c4=ue('<g class="seen-cells-layer svelte-dqmhr7" mask="url(#fog-mask-fog)"><!></g>');function u4(t,e){ae(e,!1);const n=ot(),r=()=>Ce(wi,"$selectionStore",n),i=()=>Ce(ei,"$settingsStore",n),o=()=>Ce(As,"$puzzleStore",n),a=()=>Ce(en,"$toolStore",n),c=T(),u=T(),_=T(),p=T(),g={type:H.CAGE,strokeWidth:0,stroke:"none",fill:"hsl(60, 100%, 80%)",inset:.15,connectDiag:!1};function v(I,b){return I.length?x$(h(_),I):[]}k(()=>r(),()=>{N(c,r().cells)}),k(()=>i(),()=>{N(u,i().highlightCellsSeenBySelection)}),k(()=>o(),()=>{N(_,o())}),k(()=>a(),()=>{N(p,Vu(a()))}),Ie(),pe();var m=Se(),E=de(m);{var O=I=>{var b=c4(),y=V(b),D=Ze(()=>v(h(c),h(_)));gs(y,{get cells(){return h(D)},shape:g}),z(b),x(I,b)};fe(E,I=>{h(u)&&h(p)&&I(O)})}x(t,m),le()}function El(t){const e=[],n=t.map(o=>o.value).filter(o=>o!==null),i=[...gp(n).entries()].filter(([,o])=>o>1).map(([o])=>o);return e.push(...t.filter(o=>o.value!==null&&i.includes(o.value))),e}function d4(t){const e=[];for(let n=0;n<t.nRows;n++){const r=t.getRow(n);e.push(...El(r))}return new Set(e)}function _4(t){const e=[];for(let n=0;n<t.nCols;n++){const r=t.getCol(n);e.push(...El(r))}return new Set(e)}function f4(t){const e=[];for(const n of t.getUsedRegions()){const r=t.getRegion(n);e.push(...El(r))}return new Set(e)}function g4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getCellsByKnightMove(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function h4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getNeighboorCells(r).filter(a=>a.value===r.value);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function p4(t){const e=[],n=t.getFilledCells();for(const r of n){const o=t.getOrthogonallyAdjacentCells(r).filter(a=>a.value!==null).filter(a=>a.value!==null&&r.value!==null&&Math.abs(r.value-a.value)===1);o.length&&(e.push(r),e.push(...o))}return new Set(e)}function v4(t){const e=[],n=[...t.getUsedRegions()].length;for(let r=0;r<n;r++){const i=t.getDisjointGroup(r),o=El(i);o.length&&e.push(...o)}return new Set(e)}function m4(t,e){let n=new Set;if(!e.get(d.SUDOKU_RULES_DO_NOT_APPLY)){const i=new Set([...d4(t),..._4(t),...f4(t)]);n=n.union(i)}return e.get(d.ANTIKNIGHT)&&(n=n.union(g4(t))),e.get(d.ANTIKING)&&(n=n.union(h4(t))),e.get(d.NONCONSECUTIVE)&&(n=n.union(p4(t))),e.get(d.DISJOINT_GROUPS)&&(n=n.union(v4(t))),n}function E4(t,e){return[...new Set([...m4(t,e)])]}var C4=ue('<rect class="conflict svelte-4mp6ok"></rect>'),O4=ue('<g class="conflicts-layer" mask="url(#fog-mask-fog)"></g>');function I4(t,e){ae(e,!1);const n=ot(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce(En,"$gridStore",n),o=()=>Ce(Dr,"$globalConstraintsStore",n),a=()=>Ce(fn,"$cellsStore",n),c=T(),u=T(),_=T(),p=T();H.CAGE;function g(O){return E4(h(u),h(_)).map(y=>y.toCoords())}k(()=>r(),()=>{N(c,r().checkConflicts)}),k(()=>i(),()=>{N(u,i())}),k(()=>o(),()=>{N(_,o())}),k(()=>a(),()=>{N(p,a())}),Ie(),pe();var v=Se(),m=de(v);{var E=O=>{var I=O4();at(I,5,()=>g(h(p)),Lt,(b,y)=>{var D=C4();A(D,"width",1),A(D,"height",1),ee(()=>{A(D,"x",h(y).c),A(D,"y",h(y).r)}),x(b,D)}),z(I),x(O,I)};fe(m,O=>{h(c)&&O(E)})}x(t,v),le()}var b4=ue('<line class="diag svelte-ylotlw"></line>'),w4=ue('<line class="antidiag svelte-ylotlw"></line>'),y4=ue('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),L4=ue('<line class="diag svelte-ylotlw"></line>'),A4=ue('<line class="antidiag svelte-ylotlw"></line>'),N4=ue('<line class="odd-even-mirror-diag svelte-ylotlw"></line>'),S4=ue('<g class="diagonals-layer" mask="url(#fog-mask-fog)"><!><!><!><!><!><!></g>');function R4(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Dr,"$globalConstraintsStore",n),i=()=>Ce(En,"$gridStore",n),o=T(),a=T(),c=T(),u=T(),_=T(),p=T(),g=T(),v=T(),m=T(),E=T(),O=T(),I=T(),b=0,y=0,D=0,M=0;k(()=>r(),()=>{N(o,r())}),k(()=>(h(o),d),()=>{N(a,!!h(o).get(d.POSITIVE_DIAGONAL))}),k(()=>(h(o),d),()=>{N(c,!!h(o).get(d.NEGATIVE_DIAGONAL))}),k(()=>(h(o),d),()=>{N(u,!!h(o).get(d.NEGATIVE_ANTIDIAGONAL))}),k(()=>(h(o),d),()=>{N(_,!!h(o).get(d.POSITIVE_ANTIDIAGONAL))}),k(()=>(h(o),d),()=>{N(p,!!h(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL))}),k(()=>(h(o),d),()=>{N(g,!!h(o).get(d.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL))}),k(()=>i(),()=>{N(v,i())}),k(()=>h(v),()=>{N(m,h(v).nCols)}),k(()=>h(v),()=>{N(E,h(v).nRows)}),k(()=>h(v),()=>{N(O,h(v).nCols)}),k(()=>h(v),()=>{N(I,h(v).nRows)}),Ie(),pe();var W=S4(),j=V(W);{var F=Ae=>{var Le=b4();A(Le,"x1",b),A(Le,"y1",y),ee(()=>{A(Le,"x2",h(O)),A(Le,"y2",h(I))}),x(Ae,Le)};fe(j,Ae=>{h(c)&&Ae(F)})}var q=$(j);{var J=Ae=>{var Le=w4();A(Le,"x1",b),A(Le,"y1",y),ee(()=>{A(Le,"x2",h(O)),A(Le,"y2",h(I))}),x(Ae,Le)};fe(q,Ae=>{h(u)&&Ae(J)})}var oe=$(q);{var re=Ae=>{var Le=y4();A(Le,"x1",b),A(Le,"y1",y),ee(()=>{A(Le,"x2",h(O)),A(Le,"y2",h(I))}),x(Ae,Le)};fe(oe,Ae=>{h(p)&&Ae(re)})}var te=$(oe);{var Ee=Ae=>{var Le=L4();A(Le,"x2",M),A(Le,"y1",D),ee(()=>{A(Le,"x1",h(m)),A(Le,"y2",h(E))}),x(Ae,Le)};fe(te,Ae=>{h(a)&&Ae(Ee)})}var Oe=$(te);{var he=Ae=>{var Le=A4();A(Le,"x2",M),A(Le,"y1",D),ee(()=>{A(Le,"x1",h(m)),A(Le,"y2",h(E))}),x(Ae,Le)};fe(Oe,Ae=>{h(_)&&Ae(he)})}var $e=$(Oe);{var ze=Ae=>{var Le=N4();A(Le,"x2",M),A(Le,"y1",D),ee(()=>{A(Le,"x1",h(m)),A(Le,"y2",h(E))}),x(Ae,Le)};fe($e,Ae=>{h(g)&&Ae(ze)})}z(W),x(t,W),le()}var x4=ue('<defs id="fog-defs"><g id="fog-shape"><path class="fog-path"></path></g><g id="fog-edge" class="svelte-1sxtdci"><use class="fog-edge-1 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-2 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-3 svelte-1sxtdci" href="#fog-shape"></use><use class="fog-edge-4 svelte-1sxtdci" href="#fog-shape"></use><use href="#fog-shape" class="svelte-1sxtdci"></use></g><mask id="fog-mask-fog" maskUnits="userSpaceOnUse" class="svelte-1sxtdci"><rect class="fog-mask-white svelte-1sxtdci"></rect><g class="fog-mask-black svelte-1sxtdci"><use href="#fog-edge"></use></g></mask><mask id="fog-mask-light" maskUnits="userSpaceOnUse"><rect class="fog-mask-white svelte-1sxtdci"></rect><rect class="fog-mask-black svelte-1sxtdci" mask="url(#fog-mask-fog)"></rect></mask></defs>');function T4(t,e){ae(e,!1);const n=ot(),r=()=>Ce(fn,"$cellsStore",n),i=()=>Ce(wp,"$showFogStore",n),o=()=>Ce(il,"$solutionStore",n),a=()=>Ce(En,"$gridStore",n),c=T(),u=T(),_=T(),p=T(),g=T(),v=T();let m=U(e,"boundingBox",8),E=U(e,"gridShape",8);function O(Ee){const Oe=Ee.filter(Le=>Le.fog);if(!h(g))return Oe.map(rt=>rt.toCoords());const he=Ee.filter(Le=>Le.value===h(g)[Le.r][Le.c]);let $e=new Set;for(const Le of he){const rt=h(v).getNeighboorCells(Le);$e=new Set([...rt,Le])}return[...new Set(Oe).difference($e)].map(Le=>Le.toCoords())}k(()=>r(),()=>{N(c,r())}),k(()=>h(c),()=>{N(u,O(h(c)))}),k(()=>h(u),()=>{N(_,io(h(u),0))}),k(()=>i(),()=>{N(p,i())}),k(()=>o(),()=>{N(g,o())}),k(()=>a(),()=>{N(v,a())}),Ie(),pe();var I=x4(),b=V(I),y=V(b);z(b);var D=$(b),M=V(D);A(M,"stroke-width",.5);var W=$(M);A(W,"stroke-width",.375);var j=$(W);A(j,"stroke-width",.25);var F=$(j);A(F,"stroke-width",.125),Oi(),z(D);var q=$(D),J=V(q);Oi(),z(q);var oe=$(q),re=V(oe),te=$(re);A(te,"x",0),A(te,"y",0),z(oe),z(I),ee(()=>{A(y,"d",h(_)),yt(D,"disabled",!h(p)),yt(q,"disabled",!h(p)),A(J,"x",m().x),A(J,"y",m().y),A(J,"width",m().width),A(J,"height",m().height),A(re,"x",m().x),A(re,"y",m().y),A(re,"width",m().width),A(re,"height",m().height),A(te,"width",E().nCols),A(te,"height",E().nRows)}),x(t,I),le()}var D4=ue('<g class="fog-fogcover svelte-15d1wp4"><rect mask="url(#fog-mask-light)"></rect></g>');function k4(t,e){ae(e,!1);const n=ot(),r=()=>Ce(wp,"$showFogStore",n),i=T();let o=U(e,"gridShape",8);k(()=>r(),()=>{N(i,r())}),Ie(),pe();var a=D4(),c=V(a);A(c,"x",0),A(c,"y",0),z(a),ee(()=>{A(a,"visibility",h(i)?"visible":"hidden"),A(c,"width",o().nCols),A(c,"height",o().nRows)}),x(t,a),le()}var G4=ue('<text class="cell-solution cell-outline svelte-14ljh7e" dominant-baseline="central"> </text>');function M4(t,e){ae(e,!1);const n=T();let r=U(e,"r",8),i=U(e,"c",8),o=U(e,"val",8);const a=.8,c=400;k(()=>(Z(r()),Z(i())),()=>{N(n,Xn({r:r(),c:i()}))}),Ie(),pe();var u=Se(),_=de(u);{var p=g=>{var v=G4();A(v,"font-size",a),A(v,"font-weight",c);var m=V(v,!0);z(v),ee(()=>{A(v,"x",h(n).x),A(v,"y",h(n).y),nt(m,o())}),x(g,v)};fe(_,g=>{o()!==null&&g(p)})}x(t,u),le()}var U4=ue('<g class="solution-layer"></g>');function F4(t,e){ae(e,!1);const n=ot(),r=()=>Ce(il,"$solutionStore",n),i=()=>Ce(ei,"$settingsStore",n),o=()=>Ce(rl,"$gameModeStore",n),a=T(),c=T(),u=T();k(()=>r(),()=>{N(a,r())}),k(()=>i(),()=>{N(c,i().showSolution)}),k(()=>o(),()=>{N(u,o())}),Ie(),pe();var _=Se(),p=de(_);{var g=v=>{var m=U4();at(m,5,()=>h(a),Lt,(E,O,I)=>{var b=Se(),y=de(b);at(y,1,()=>h(O),Lt,(D,M,W)=>{M4(D,{r:I,c:W,get val(){return h(M)}})}),x(E,b)}),z(m),x(v,m)};fe(p,v=>{h(a)&&h(c)&&h(u)===so.SETTING&&v(g)})}x(t,_),le()}var $4=ue("<g></g>"),P4=ue('<g mask="url(#fog-mask-fog)"></g>');function Xr(t,e){let n=U(e,"elements",8),r=U(e,"g_name",8),i=U(e,"Component",8);var o=P4();at(o,5,n,Lt,(a,c)=>{let u=()=>h(c).toolId,_=()=>h(c).element;var p=$4();at(p,5,()=>Object.entries(_()),g=>g[0],(g,v)=>{i()(g,{get tool(){return h(v)[1]}})}),z(p),ee(()=>Qr(p,`element-group ${u()}`)),x(a,p)}),z(o),ee(()=>Qr(o,Lb(r()))),x(t,o)}var H4=ue('<line class="svelte-yr67cf"></line>');function B4(t,e){ae(e,!1);const n=T(),r=T(),i=T();let o=U(e,"shape",8),a=U(e,"coords",8);const[c,u]=a(),_=u.c,p=c.c===u.c?u.c+1:u.c,g=u.r,v=c.r===u.r?u.r+1:u.r;k(()=>Z(o()),()=>{N(n,o().stroke??"black")}),k(()=>Z(o()),()=>{var E;N(r,(E=o())==null?void 0:E.opacity)}),k(()=>Z(o()),()=>{N(i,o().strokeWidth??.02)}),Ie(),pe();var m=H4();A(m,"x1",_),A(m,"x2",p),A(m,"y1",g),A(m,"y2",v),ee(()=>{A(m,"stroke",h(n)),A(m,"stroke-width",h(i)),A(m,"opacity",h(r))}),x(t,m),le()}var W4=ue('<g class="edge-tool"><!><text text-anchor="middle" dominant-baseline="central"> </text></g>');function z4(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=U(e,"tool",8);const u=c().cells,_=tn(c().toolId,xt)??Rh;function p(O,I){return I===H.TEXT_ONLY?O.value?O.value:"-":O.value??""}function g(){if(c().toolId!==d.EDGE_INEQUALITY&&c().toolId!==d.ONE_WAY_DOOR)return 0;const O=Xn(u[0]);return Xn(u[1]).subtract(O).angle()/(2*Math.PI)*360}k(()=>Z(c()),()=>{N(n,c().shape??_)}),k(()=>Ha,()=>{N(r,AF(Ha(u)))}),k(()=>(h(n),H),()=>{var O;N(i,((O=h(n))==null?void 0:O.type)||H.CIRCLE)}),k(()=>h(n),()=>{var O;N(o,((O=h(n))==null?void 0:O.fontSize)??.2)}),k(()=>h(n),()=>{var O;N(a,((O=h(n))==null?void 0:O.fontColor)??"black")}),Ie(),pe();var v=Se(),m=de(v);{var E=O=>{var I=W4(),b=V(I);{var y=j=>{Ar(j,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},D=j=>{var F=Se(),q=de(F);{var J=re=>{Ar(re,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(n)}})},oe=re=>{var te=Se(),Ee=de(te);{var Oe=$e=>{B4($e,{coords:u,get shape(){return h(n)}})},he=$e=>{ps($e,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return h(n)}})};fe(Ee,$e=>{h(i)===H.BORDER_LINE?$e(Oe):$e(he,!1)},!0)}x(re,te)};fe(q,re=>{h(i)===H.TEXT_ONLY?re(J):re(oe,!1)},!0)}x(j,F)};fe(b,j=>{c().toolId===d.EDGE_INEQUALITY||c().toolId===d.ONE_WAY_DOOR?j(y):j(D,!1)})}var M=$(b);ee(()=>A(M,"transform",`rotate(${g()}, ${h(r).x}, ${h(r).y} )`));var W=V(M,!0);ee(()=>nt(W,p(c(),h(i)))),z(M),z(I),ee(()=>{A(M,"x",h(r).x),A(M,"y",h(r).y),A(M,"font-size",h(o)),A(M,"fill",h(a))}),x(O,I)};fe(m,O=>{u.length===2&&O(E)})}x(t,v),le()}var Y4=ue('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>'),j4=ue('<text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text><text text-anchor="middle" dominant-baseline="central" class="svelte-187bsl"> </text>',1),K4=ue('<g class="quadruple-text"><!></g>');function V4(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=U(e,"cornerTool",8);const u=c().cells,_=new Re(u[u.length-1].c,u[u.length-1].r),p=tn(c().toolId,xt)??xh;k(()=>Z(c()),()=>{N(n,c().value)}),k(()=>Z(c()),()=>{N(r,c().shape??p)}),k(()=>h(r),()=>{var E;N(i,((E=h(r))==null?void 0:E.fontSize)??.2)}),k(()=>h(r),()=>{var E;N(o,((E=h(r))==null?void 0:E.fontColor)??"black")}),k(()=>h(n),()=>{var E;N(a,h(n)?(E=h(n))==null?void 0:E.split(","):[])}),Ie(),pe();var g=Se(),v=de(g);{var m=E=>{var O=K4(),I=V(O);{var b=D=>{var M=Y4(),W=V(M,!0);ee(()=>nt(W,h(a).join(" "))),z(M),ee(()=>{A(M,"x",_.x),A(M,"y",_.y),A(M,"font-size",h(i)),A(M,"fill",h(o))}),x(D,M)},y=D=>{var M=j4(),W=de(M),j=V(W,!0);ee(()=>nt(j,h(a).slice(0,2).join(" "))),z(W);var F=$(W),q=V(F,!0);ee(()=>nt(q,h(a).slice(2).join(" "))),z(F),ee(()=>{A(W,"x",_.x),A(W,"y",_.y),A(W,"dy",-h(i)/2),A(W,"font-size",h(i)),A(W,"fill",h(o)),A(F,"x",_.x),A(F,"y",_.y),A(F,"dy",h(i)/2),A(F,"font-size",h(i)),A(F,"fill",h(o))}),x(D,M)};fe(I,D=>{h(a).length<=2?D(b):D(y,!1)})}z(O),ee(()=>A(O,"data-count",h(a).length)),x(E,O)};fe(v,E=>{h(n)&&E(m)})}x(t,g),le()}var X4=ue('<text text-anchor="middle" dominant-baseline="central"> </text>'),q4=ue('<g class="corner-tool"><!><!></g>');function Z4(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T();let a=U(e,"tool",8);const c=a().cells,u=tn(a().toolId,xt)??xh,_=new Re(c[c.length-1].c,c[c.length-1].r);function p(E,O){return O===H.TEXT_ONLY?E.value?E.value:"-":E.value??""}k(()=>Z(a()),()=>{N(n,a().shape??u)}),k(()=>(h(n),H),()=>{var E;N(r,((E=h(n))==null?void 0:E.type)??H.CIRCLE)}),k(()=>h(n),()=>{var E;N(i,((E=h(n))==null?void 0:E.fontSize)??.2)}),k(()=>h(n),()=>{var E;N(o,((E=h(n))==null?void 0:E.fontColor)??"black")}),Ie(),pe();var g=Se(),v=de(g);{var m=E=>{var O=q4(),I=V(O);ps(I,{get cx(){return _.x},get cy(){return _.y},get shape(){return h(n)}});var b=$(I);{var y=M=>{V4(M,{get cornerTool(){return a()}})},D=M=>{var W=X4(),j=V(W,!0);ee(()=>nt(j,p(a(),h(r)))),z(W),ee(()=>{A(W,"x",_.x),A(W,"y",_.y),A(W,"font-size",h(i)),A(W,"fill",h(o))}),x(M,W)};fe(b,M=>{a().toolId===d.QUADRUPLE?M(y):M(D,!1)})}z(O),x(E,O)};fe(v,E=>{c.length===4&&E(m)})}x(t,g),le()}var Q4=ue('<text text-anchor="middle" dominant-baseline="central"> </text>'),J4=ue('<g class="center-corner-or-edge-tool"><!><!></g>');function eP(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=U(e,"tool",8);const _=u().cell,p=tn(u().toolId,xt)??Rh;function g(b,y){return y===H.TEXT_ONLY?b.value?b.value:"-":b.value??""}k(()=>Z(u()),()=>{N(n,u().shape??p)}),k(()=>{},()=>{N(r,_)}),k(()=>(h(n),H),()=>{var b;N(i,((b=h(n))==null?void 0:b.type)||H.CIRCLE)}),k(()=>h(n),()=>{var b;N(o,((b=h(n))==null?void 0:b.fontSize)??.2)}),k(()=>h(n),()=>{var b;N(a,((b=h(n))==null?void 0:b.fontColor)??"black")}),k(()=>h(r),()=>{N(c,h(r).r%1===.5&&h(r).c%1===.5)}),Ie(),pe();var v=J4(),m=V(v);ps(m,{get cx(){return h(r).c},get cy(){return h(r).r},get shape(){return h(n)}});var E=$(m);{var O=b=>{var y=Ze(()=>g(u(),h(i))),D=Ze(()=>Math.floor(h(r).c)),M=Ze(()=>Math.floor(h(r).r));hs(b,{get value(){return h(y)},get x(){return h(D)},get y(){return h(M)},position:"TL",get fontColor(){return h(a)}})},I=b=>{var y=Q4(),D=V(y,!0);ee(()=>nt(D,g(u(),h(i)))),z(y),ee(()=>{A(y,"x",h(r).c),A(y,"y",h(r).r),A(y,"font-size",h(o)),A(y,"fill",h(a))}),x(b,y)};fe(E,b=>{h(c)?b(O):b(I,!1)})}z(v),x(t,v),le()}var tP=ue('<path fill="none"></path>');function Li(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T();let u=U(e,"linePoints",8),_=U(e,"shape",8,void 0);const p="round",g="round";k(()=>Z(_()),()=>{var m;N(n,((m=_())==null?void 0:m.stroke)??"gray")}),k(()=>Z(_()),()=>{var m;N(r,((m=_())==null?void 0:m.strokeWidth)??.1)}),k(()=>Z(_()),()=>{var m;N(i,((m=_())==null?void 0:m.strokeDasharray)??0)}),k(()=>Z(_()),()=>{var m;N(o,((m=_())==null?void 0:m.strokeDashoffset)??0)}),k(()=>Z(_()),()=>{var m,E,O,I,b,y,D,M;N(a,{shortenHead:((E=(m=_())==null?void 0:m.linePathOptions)==null?void 0:E.shortenHead)??.2,shortenTail:((I=(O=_())==null?void 0:O.linePathOptions)==null?void 0:I.shortenTail)??.2,bezierRounding:((y=(b=_())==null?void 0:b.linePathOptions)==null?void 0:y.bezierRounding)??.2,closeLoops:((M=(D=_())==null?void 0:D.linePathOptions)==null?void 0:M.closeLoops)??!1})}),k(()=>(Z(u()),h(a)),()=>{N(c,_s(u(),h(a)))}),Ie(),pe();var v=tP();A(v,"stroke-linejoin",p),A(v,"stroke-linecap",g),ee(()=>{A(v,"d",h(c)),A(v,"stroke",h(n)),A(v,"stroke-width",h(r)),A(v,"stroke-dasharray",h(i)),A(v,"stroke-dashoffset",h(o))}),x(t,v),le()}var nP=ie("<!> <!> <!>",1);function jg(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T();let a=U(e,"linePoints",8),c=U(e,"shape",8,ms);function u(I){var D;const b=bt.cloneDeep(I);b.r=b.r||.2;const y=b.r;return b.strokeDasharray=I.strokeDasharray,b.opacity=1,b.linePathOptions={shortenHead:y,shortenTail:y,bezierRounding:(D=b.linePathOptions)==null?void 0:D.bezierRounding},b}k(()=>Z(a()),()=>{N(n,a().length)}),k(()=>(h(n),Z(a())),()=>{N(r,h(n)>=0?a()[0]:void 0)}),k(()=>(h(n),Z(a())),()=>{N(i,h(n)>=0?a()[h(n)-1]:void 0)}),k(()=>Z(c()),()=>{N(o,u(c()))}),Ie(),pe();var _=nP(),p=de(_);{var g=I=>{Ar(I,{get x(){return h(r).x},get y(){return h(r).y},get shape(){return h(o)}})};fe(p,I=>{h(r)&&I(g)})}var v=$(p,2);{var m=I=>{Li(I,{get linePoints(){return a()},get shape(){return h(o)}})};fe(v,I=>{h(n)>1&&I(m)})}var E=$(v,2);{var O=I=>{Ar(I,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(o)}})};fe(E,I=>{h(i)&&I(O)})}x(t,_),le()}var rP=ie("<!> <!> <!>",1);function Kg(t,e){ae(e,!1);const n=T(),r=T(),i=T();let o=U(e,"linePoints",8),a=U(e,"shape",12,ms);const c=4,u=.5;function _(M,W){const j=W.r??u,F=W.n??c,q=W.angle??0,J=Qp(j,F,new Re(0,0),!0,0),oe=(F+(M-q/360)*F%F)%F,re=Math.floor(oe)%F,te=Math.ceil(oe)%F;return J[re].lerp(J[te],oe%1).length()}function p(M){if(h(n)<=1)return 0;const W=o()[0],F=o()[1].subtract(W).angle()/(2*Math.PI);return _(F,M)}function g(M){if(h(n)<=1)return 0;const W=o()[h(n)-1],F=o()[h(n)-2].subtract(W).angle()/(2*Math.PI);return _(F,M)}function v(M){var j;const W=bt.cloneDeep(M);return W.r=W.r||u,W.opacity=1,W.linePathOptions={shortenHead:p(W),shortenTail:g(W),bezierRounding:(j=W.linePathOptions)==null?void 0:j.bezierRounding},W}k(()=>Z(o()),()=>{N(n,o().length)}),k(()=>(h(n),Z(o())),()=>{N(r,h(n)>=0?o()[0]:void 0)}),k(()=>(h(n),Z(o())),()=>{N(i,h(n)>=0?o()[h(n)-1]:void 0)}),k(()=>Z(a()),()=>{a(v(a()))}),Ie(),pe();var m=rP(),E=de(m);{var O=M=>{Ba(M,{get cx(){return h(r).x},get cy(){return h(r).y},get shape(){return a()}})};fe(E,M=>{h(r)&&M(O)})}var I=$(E,2);{var b=M=>{Li(M,{get linePoints(){return o()},get shape(){return a()}})};fe(I,M=>{h(n)>1&&M(b)})}var y=$(I,2);{var D=M=>{Ba(M,{get cx(){return h(i).x},get cy(){return h(i).y},get shape(){return a()}})};fe(y,M=>{h(i)&&M(D)})}x(t,m),le()}var iP=ie("<!> <!>",1);function Vg(t,e){ae(e,!1);const n=T();let r=U(e,"linePoints",8),i=U(e,"shape",8,ms);function o(m){var I,b,y;const E=bt.cloneDeep(m);E.r=E.r||.3,E.opacity=1;const O=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||O,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(y=E.linePathOptions)==null?void 0:y.bezierRounding},E}function a(m){var I,b,y;const E=bt.cloneDeep(m);E.r=E.r||.3,E.opacity=1,E.strokeWidth=0;const O=E.r;return E.linePathOptions={shortenHead:((I=E.linePathOptions)==null?void 0:I.shortenHead)||O,shortenTail:(b=E.linePathOptions)==null?void 0:b.shortenTail,bezierRounding:(y=E.linePathOptions)==null?void 0:y.bezierRounding},E}k(()=>Z(r()),()=>{N(n,r().length>0?r()[0]:void 0)}),Ie(),pe();var c=iP(),u=de(c);{var _=m=>{var E=Ze(()=>o(i()));Li(m,{get linePoints(){return r()},get shape(){return h(E)}})};fe(u,m=>{r().length>1&&m(_)})}var p=$(u,2);{var g=m=>{var E=Ze(()=>o(i()));Ar(m,{get x(){return h(n).x},get y(){return h(n).y},get shape(){return h(E)}})},v=m=>{var E=Se(),O=de(E);{var I=b=>{var y=Ze(()=>a(i()));Ba(b,{get cx(){return h(n).x},get cy(){return h(n).y},get shape(){return h(y)}})};fe(O,b=>{h(n)&&b(I)},!0)}x(m,E)};fe(p,m=>{h(n)&&i().type===H.THERMO_WITH_CIRCLE?m(g):m(v,!1)})}x(t,c),le()}var oP=ue("<!><!>",1),sP=ue("<!><!>",1),aP=ue("<!><!>",1),lP=ue("<!><!>",1),cP=ue('<g class="line-tool"><!></g>');function uP(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=U(e,"tool",8);const u=tn(c().toolId,xt)??ms;k(()=>Z(c()),()=>{N(n,Ha(c().cells))}),k(()=>Z(c()),()=>{N(r,c().shape??u)}),k(()=>(h(r),H),()=>{var m;N(i,((m=h(r))==null?void 0:m.type)||H.LINE)}),k(()=>h(r),()=>{var m;N(o,((m=h(r))==null?void 0:m.opacity)??1)}),k(()=>h(r),()=>{N(a,{...h(r),stroke:"var(--grid-background-color)",strokeWidth:h(r).strokeWidth?h(r).strokeWidth+.06:.06})}),Ie(),pe();var _=cP(),p=V(_);{var g=m=>{var E=oP(),O=de(E);{var I=y=>{jg(y,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(O,y=>{y(I)})}var b=$(O);jg(b,{get linePoints(){return h(n)},get shape(){return h(r)}}),x(m,E)},v=m=>{var E=Se(),O=de(E);{var I=y=>{var D=sP(),M=de(D);{var W=F=>{Kg(F,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(M,F=>{F(W)})}var j=$(M);Kg(j,{get linePoints(){return h(n)},get shape(){return h(r)}}),x(y,D)},b=y=>{var D=Se(),M=de(D);{var W=F=>{var q=aP(),J=de(q);{var oe=te=>{Vg(te,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(J,te=>{te(oe)})}var re=$(J);Vg(re,{get linePoints(){return h(n)},get shape(){return h(r)}}),x(F,q)},j=F=>{var q=lP(),J=de(q);{var oe=te=>{Li(te,{get linePoints(){return h(n)},get shape(){return h(a)}})};fe(J,te=>{te(oe)})}var re=$(J);Li(re,{get linePoints(){return h(n)},get shape(){return h(r)}}),x(F,q)};fe(M,F=>{h(i)===H.THERMO_WITH_CIRCLE||h(i)===H.THERMO_WITH_POLYGON?F(W):F(j,!1)},!0)}x(y,D)};fe(O,y=>{h(i)===H.LINE_WITH_POLYGON_ENDS?y(I):y(b,!1)},!0)}x(m,E)};fe(p,m=>{h(i)===H.LINE_WITH_CIRCLE_ENDS?m(g):m(v,!1)})}z(_),ee(()=>A(_,"opacity",h(o))),x(t,_),le()}var dP=ue('<g class="cage-tool"><!></g>');function _P(t,e){ae(e,!1);const n=T();let r=U(e,"tool",8);const i=tn(r().toolId,xt)??Xu;k(()=>Z(r()),()=>{N(n,r().shape??i)}),Ie(),pe();var o=dP(),a=V(o);ev(a,{get cells(){return r().cells},get shape(){return h(n)},get value(){return r().value}}),z(o),x(t,o),le()}var fP=ie("<!> <!> <!> <!>",1);function gP(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T(),c=T(),u=T(),_=T();let p=U(e,"tool",8);const g=tn(p().toolId,xt)??jb,v=800,m=p().value;k(()=>Z(p()),()=>{N(n,p().shape??g)}),k(()=>h(n),()=>{N(r,h(n).inset??.15)}),k(()=>h(n),()=>{N(i,h(n).strokeWidth??.07)}),k(()=>h(n),()=>{N(o,h(n).fontColor??h(n).stroke??"black")}),k(()=>Z(p()),()=>{N(a,p().cells[p().cells.length-1])}),k(()=>Z(p()),()=>{N(c,p().cells2[p().cells2.length-1])}),k(()=>(h(a),h(r)),()=>{N(u,new Re(h(a).c+1-h(r)-.05,h(a).r+1-h(r)-.05))}),k(()=>(h(c),h(r)),()=>{N(_,new Re(h(c).c+1-h(r)-.05,h(c).r+1-h(r)-.05))}),Ie(),pe();var E=fP(),O=de(E);gs(O,{get cells(){return p().cells},get shape(){return h(n)}});var I=$(O,2);hs(I,{value:m,get x(){return h(u).x},get y(){return h(u).y},position:"BR",get fontColor(){return h(o)},fontWeight:v});var b=$(I,2);gs(b,{get cells(){return p().cells2},get shape(){return h(n)}});var y=$(b,2);hs(y,{value:m,get x(){return h(_).x},get y(){return h(_).y},position:"BR",get fontColor(){return h(o)},fontWeight:v}),x(t,E),le()}var hP=ue('<g class="outside-direction-tool"><!><path fill="none"></path><text text-anchor="middle" dominant-baseline="central"> </text></g>');function pP(t,e){var j;ae(e,!1);const n=T(),r=T(),i=T();let o=U(e,"tool",8);const a=o().cell,c=o().direction,u=zh(a,c),_=Xn(a),p=tn(o().toolId,xt)??Kb,g=((j=h(n))==null?void 0:j.fontSize)??.5,v=.03;function m(F){return F.value&&F.value.length?F.value:"-"}function E(){const J=Xn(u).subtract(_).length(),oe={shortenHead:.3*J,shortenTail:.55*J};return fs([a,u],oe)}const I=`outside-tool-arrow-marker-${crypto.randomUUID()}`;k(()=>Z(o()),()=>{N(n,o().shape??p)}),k(()=>h(n),()=>{var F;N(r,((F=h(n))==null?void 0:F.fontColor)??"var(--text-primary-color)")}),k(()=>h(n),()=>{var F;N(i,((F=h(n))==null?void 0:F.stroke)??"var(--text-primary-color)")}),Ie(),pe();var b=hP(),y=V(b);ml(y,{id:I,l:.07,strokeWidth:v,get stroke(){return h(i)}});var D=$(y);ee(()=>A(D,"d",E())),A(D,"stroke-width",v),A(D,"marker-end",`url(#${I??""})`);var M=$(D);A(M,"font-size",g);var W=V(M,!0);ee(()=>nt(W,m(o()))),z(M),z(b),ee(()=>{A(D,"stroke",h(i)),A(M,"x",_.x),A(M,"y",_.y),A(M,"fill",h(r))}),x(t,b),le()}var vP=ie("<!> <!> <!>",1);function mP(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T(),a=T();let c=U(e,"linePoints",8),u=U(e,"shape",8);function _(I){const b=bt.cloneDeep(I);return b.r=b.r||.2,b.strokeWidth=0,b.opacity=1,b}k(()=>Z(c()),()=>{N(n,c().length)}),k(()=>(h(n),Z(c())),()=>{N(r,h(n)>1&&c()[0].equals(c()[h(n)-1]))}),k(()=>(h(n),Z(c())),()=>{N(i,h(n)>=0?c()[0]:void 0)}),k(()=>(h(n),Z(c())),()=>{N(o,h(n)>=0?c()[h(n)-1]:void 0)}),k(()=>Z(u()),()=>{N(a,_(u()))}),Ie(),pe();var p=vP(),g=de(p);Li(g,{get linePoints(){return c()},get shape(){return u()}});var v=$(g,2);{var m=I=>{Ar(I,{get x(){return h(i).x},get y(){return h(i).y},get shape(){return h(a)}})};fe(v,I=>{!h(r)&&h(i)&&I(m)})}var E=$(v,2);{var O=I=>{Ar(I,{get x(){return h(o).x},get y(){return h(o).y},get shape(){return h(a)}})};fe(E,I=>{!h(r)&&h(o)&&I(O)})}x(t,p),le()}var EP=ue('<g class="corner-line-tool"><!></g>');function CP(t,e){ae(e,!1);const n=T(),r=T(),i=T(),o=T();let a=U(e,"tool",8);const c=tn(a().toolId,xt)??ms;k(()=>(Z(a()),Re),()=>{N(n,a().coords.map(v=>new Re(v.c,v.r)))}),k(()=>Z(a()),()=>{N(r,a().shape??c)}),k(()=>(h(r),H),()=>{var v;N(i,((v=h(r))==null?void 0:v.type)||H.LINE)}),k(()=>h(r),()=>{var v;N(o,((v=h(r))==null?void 0:v.opacity)??1)}),Ie(),pe();var u=EP(),_=V(u);{var p=v=>{mP(v,{get linePoints(){return h(n)},get shape(){return h(r)}})},g=v=>{Li(v,{get linePoints(){return h(n)},get shape(){return h(r)}})};fe(_,v=>{h(i)===H.MAZE_WALL?v(p):v(g,!1)})}z(u),ee(()=>A(u,"opacity",h(o))),x(t,u),le()}var OP=ue('<svg id="board-svg" class="puzzle-board" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" tabindex="-1"><!><!><!><!><g class="highlights-layer"></g><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><!><g class="cell-values-layer"></g><!><!></svg>');function IP(t,e){ae(e,!1);const n=ot(),r=()=>Ce(En,"$gridStore",n),i=()=>Ce(vt,"$localConstraintsStore",n),o=()=>Ce(en,"$toolStore",n),a=()=>Ce(fn,"$cellsStore",n),c=()=>Ce(x8,"$cageToolsStore",n),u=()=>Ce(N8,"$lineToolsStore",n),_=()=>Ce(T8,"$cloneToolsStore",n),p=()=>Ce(S8,"$cornerLineToolsStore",n),g=()=>Ce(D8,"$outsideDirectionToolsStore",n),v=()=>Ce(y8,"$edgeToolsStore",n),m=()=>Ce(A8,"$cornerToolsStore",n),E=()=>Ce(L8,"$centerCornerOrEdgeToolsStore",n),O=T(),I=T(),b=T();let y=U(e,"svgRef",12,null);function D(){for(const[Dt,De]of i().entries()){if(!cs(Dt))continue;if(Object.entries(De).some(([ke,Te])=>!Jt(Te.cell,h(I))))return!0}return!1}function M(Dt,De){const be=D(),ke=cs(De),Te=be||ke?1:.2,Nt=-Te,Gs=-Te,Ol=Dt.nCols+2*Te,ai=Dt.nRows+2*Te;return{x:Nt,y:Gs,width:Ol,height:ai}}function W(Dt){return`${Dt.x} ${Dt.y} ${Dt.width} ${Dt.height}`}k(()=>r(),()=>{N(O,r())}),k(()=>h(O),()=>{N(I,{nRows:h(O).nRows,nCols:h(O).nCols})}),k(()=>(h(I),o()),()=>{N(b,M(h(I),o()))}),Ie(),pe();var j=OP();ee(()=>A(j,"viewBox",W(h(b))));var F=V(j);T4(F,{get boundingBox(){return h(b)},get gridShape(){return h(I)}});var q=$(F);k4(q,{get gridShape(){return h(I)}});var J=$(q);I8(J,{get grid(){return r()}});var oe=$(J);r8(oe,{get gridShape(){return h(I)}});var re=$(oe);at(re,5,a,Lt,(Dt,De)=>{j$(Dt,{get cell(){return h(De)}})}),z(re);var te=$(re);u4(te,{});var Ee=$(te);v$(Ee,{});var Oe=$(Ee);Xr(Oe,{get elements(){return c()},g_name:"cage-tools-layer",Component:_P});var he=$(Oe);Xr(he,{get elements(){return u()},g_name:"line-tools-layer",Component:uP});var $e=$(he);Xr($e,{get elements(){return _()},g_name:"clone-tools-layer",Component:gP});var ze=$($e);s8(ze,{});var Ae=$(ze);R4(Ae,{});var Le=$(Ae);m8(Le,{});var rt=$(Le);Xr(rt,{get elements(){return p()},g_name:"corner-line-tools-layer",Component:CP});var Ye=$(rt);j8(Ye,{get boundingBox(){return h(b)}});var zt=$(Ye);Xr(zt,{get elements(){return g()},g_name:"outside-direction-tools-layer",Component:pP});var wn=$(zt);C8(wn,{get boundingBox(){return h(b)}});var Mr=$(wn);t8(Mr,{});var nn=$(Mr);Xr(nn,{get elements(){return v()},g_name:"edge-tools-layer",Component:z4});var hr=$(nn);Xr(hr,{get elements(){return m()},g_name:"corner-tools-layer",Component:Z4});var si=$(hr);Xr(si,{get elements(){return E()},g_name:"center-corner-edge-tools-layer",Component:eP});var or=$(si);l4(or,{});var Un=$(or);at(Un,5,a,Lt,(Dt,De)=>{W$(Dt,{get cell(){return h(De)}})}),z(Un);var ki=$(Un);F4(ki,{});var Ur=$(ki);I4(Ur,{}),z(j),Ii(j,Dt=>y(Dt),()=>y()),x(t,j),le()}function bP(t){return sw(t)?(wb(),!0):!1}function wP(t){return aw(t)?(Ep(),!0):!1}function yP(t){return lw(t)?(Cp(),!0):!1}function ou(t){(bP(t)||wP(t)||yP(t))&&(t.stopImmediatePropagation(),t.preventDefault())}var LP=ie('<div class="board-container svelte-uekbtq" tabindex="-1"><!></div>');function AP(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Zp,"$InputHandlerStore",n),i=()=>Ce(to,"$svgRefStore",n),o=T();let a=T(null);function c(v){return m=>{v&&h(o)!==null&&(document.activeElement===i()||document.activeElement===document.body||document.activeElement===h(a))&&v(m)}}k(()=>r(),()=>{N(o,r())}),Ie();var u=LP();Me("keydown",Wc,function(...v){ou==null||ou.apply(this,v)});var _=hg(()=>{var v;return c((v=h(o))==null?void 0:v.keyDown)});Me("keydown",Wc,function(...v){var m;(m=h(_))==null||m.apply(this,v)});var p=hg(()=>{var v;return c((v=h(o))==null?void 0:v.keyUp)});Me("keyup",Wc,function(...v){var m;(m=h(p))==null||m.apply(this,v)});var g=V(u);IP(g,{get svgRef(){return sh(),i()},set svgRef(v){vs(to,v)},$$legacy:!0}),z(u),Ii(u,v=>N(a,v),()=>h(a)),Me("pointerdown",u,Kc(Vn(v=>{var m;v.currentTarget.focus(),(m=h(o))==null||m.pointerDown(v)})),!0),Me("pointermove",u,Kc(Vn(v=>{var m;v.currentTarget.focus(),(m=h(o))==null||m.pointerMove(v)})),!0),Me("pointerup",u,Kc(Vn(v=>{var m;v.currentTarget.focus(),(m=h(o))==null||m.pointerUp(v)})),!0),x(t,u),le()}var NP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M378-232.434 140.434-470l57.131-57.131L378-346.696l383.435-383.435L818.566-673 378-232.434Z"></path></svg>');function SP(t){var e=NP();x(t,e)}var RP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"></path></svg>');function xP(t){var e=RP();x(t,e)}var TP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180h60Zm-60-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm60-165h-60q0-24.75 17.63-42.38Q155.25-840 180-840v60Zm105 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 660v-60h60v60h-60Zm0-660v-60h60v60h-60Zm165 600h60q0 24.75-17.62 42.37Q804.75-120 780-120v-60Zm0-105v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780h-60Z"></path></svg>');function DP(t){var e=TP();x(t,e)}var kP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"></path></svg>');function GP(t){var e=kP();x(t,e)}var MP=ie('<div class="controls-aux-pad svelte-nq2n5h"><button class="entry-panel-button controls-aux-button undo svelte-nq2n5h" title="Undo"><!></button> <button class="entry-panel-button controls-aux-button redo svelte-nq2n5h" title="Redo"><!></button> <button class="entry-panel-button controls-aux-button check svelte-nq2n5h" title="Check"><!></button> <button role="switch" class="controls-aux-switch controls-aux-button select svelte-nq2n5h" title="Select"><!></button></div>');function UP(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Io,"$commandHistoryStore",n),i=()=>Ce(mu,"$selectOnStore",n),o=T(),a=T();function c(){Ep()}function u(){Cp()}function _(){console.log("check")}function p(){vs(mu,!i())}k(()=>r(),()=>{N(o,r()._undoStack.length===0)}),k(()=>r(),()=>{N(a,r()._redoStack.length===0)}),Ie(),pe();var g=MP(),v=V(g),m=V(v);GP(m),z(v);var E=$(v,2),O=V(E);xP(O),z(E);var I=$(E,2);I.disabled=!0;var b=V(I);SP(b),z(I);var y=$(I,2),D=V(y);DP(D),z(y),z(g),ee(()=>{v.disabled=h(o),E.disabled=h(a),A(y,"aria-checked",i()),yt(y,"active",i())}),Me("click",v,c),Me("click",E,u),Me("click",I,_),Me("click",y,p),x(t,g),le()}var FP=ie('<label class="entry-panel-label number-pad-button number-pad-selector svelte-c0ai90"><input type="radio" class="svelte-c0ai90"> <div class="selector-color svelte-c0ai90"></div></label>'),$P=ie('<button class="entry-panel-button number-pad-button svelte-c0ai90"><div class="digit-button-text svelte-c0ai90"> </div> <div class="digit-button-color svelte-c0ai90"></div></button>'),PP=ie('<button role="switch" class="entry-panel-button letter-button svelte-c0ai90" value="Letter"><span class="num svelte-c0ai90">9</span>/<span class="letter svelte-c0ai90">A</span></button>'),HP=ie('<div class="number-pad svelte-c0ai90"><!> <!>  <button class="entry-panel-button delete-button svelte-c0ai90" value="Delete"><svg class="icon svelte-c0ai90" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" fill="currentColor"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z"></path></svg></button></div>');function BP(t,e){ae(e,!1);const n=ot(),r=()=>Ce(ei,"$settingsStore",n),i=()=>Ce($a,"$penColorStore",n),o=()=>Ce(Zp,"$InputHandlerStore",n),a=T(),c=T(),u=[];let _=U(e,"selectedTool",8);const p=[1,2,3,4,5,6,7,8,9,0],g=["A","B","C","D","E","F","G","H","I","O"];let v=T(!1);function m(F){return F?g:p}function E(F){return[d.DIGIT,d.CENTER_PM,d.CORNER_PM,d.GIVEN].includes(F)}function O(F){const q=F.currentTarget;if(!q)return;const J=q.getAttribute("aria-checked");N(v,J!=="true")}k(()=>r(),()=>{N(a,r().penToolActive)}),k(()=>r(),()=>{N(c,r().letterToolActive)}),Ie(),pe();var I=HP(),b=V(I);{var y=F=>{var q=Se(),J=de(q);at(J,1,()=>p,Lt,(oe,re)=>{var te=FP(),Ee=V(te);Qt(Ee);var Oe;Oi(2),z(te),ee(()=>{A(te,"data-value",h(re)),yt(te,"active",i()===h(re)),Oe!==(Oe=h(re))&&(Ee.value=(Ee.__value=h(re))==null?"":h(re))}),Ka(u,[],Ee,()=>(h(re),i()),he=>vs($a,he)),x(oe,te)}),x(F,q)},D=F=>{var q=Se(),J=de(q);at(J,1,()=>m(h(v)),Lt,(oe,re)=>{var te=$P(),Ee=V(te),Oe=V(Ee,!0);z(Ee),Oi(2),z(te),ee(()=>{Ab(te,h(re)),nt(Oe,h(re))}),Me("click",te,function(...he){var $e;($e=o()&&o().padClick)==null||$e.apply(this,he)}),x(oe,te)}),x(F,q)};fe(b,F=>{_()===d.PEN_TOOL&&h(a)?F(y):F(D,!1)})}var M=$(b,2);{var W=F=>{var q=PP();ee(()=>{A(q,"aria-checked",h(v)),yt(q,"letter-checked",h(v)),yt(q,"num-checked",!h(v))}),Me("click",q,O),x(F,q)};fe(M,F=>{h(c)&&E(_())&&F(W)})}var j=$(M,2);z(I),ee(()=>{yt(I,"digit",_()===d.DIGIT),yt(I,"center",_()===d.CENTER_PM),yt(I,"corner",_()===d.CORNER_PM),yt(I,"color",_()===d.HIGHLIGHTS),yt(I,"pen",_()===d.PEN_TOOL),yt(j,"letter-tool",h(c))}),Me("click",j,function(...F){var q;(q=o()&&o().padClick)==null||q.apply(this,F)}),x(t,I),le()}var WP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-74.022q-83.204 0-157.276-31.978-74.072-31.978-129.409-87.315Q137.978-248.652 106-322.719q-31.978-74.066-31.978-157.264 0-85.213 32.358-159.408 32.359-74.196 88.679-129.09 56.32-54.893 131.896-86.315 75.576-31.422 161.7-31.422 80.069 0 152.213 26.968 72.143 26.969 126.648 74.816 54.506 47.847 86.604 113.471t32.098 143.485q0 109.435-63.24 174.445-63.239 65.011-169.63 65.011h-70.935q-17.522 0-30.282 13.761-12.761 13.761-12.761 30.522 0 19.522 13.424 35.369 13.424 15.848 13.424 39.892 0 27.674-26.605 61.065Q513.009-74.022 480-74.022ZM249.152-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm124.924-168.326q20.12 0 35.12-15 15-15 15-35 0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.12 14.88-14.88 14.881-14.88 35 0 20.12 14.88 35.12 14.881 15 35 15Zm211.848 0q20.119 0 35.119-15t15-35q0-20.239-15-35.12-15-14.88-35-14.88-20.239 0-35.119 14.88-14.881 14.881-14.881 35 0 20.12 14.881 35.12 14.88 15 35 15ZM715.37-454q20 0 35-15t15-35q0-20-15-35t-35-15q-20.24 0-35.12 15-14.88 15-14.88 35t14.88 35q14.88 15 35.12 15Z"></path></svg>');function zP(t){var e=WP();x(t,e)}var YP=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');function jP(t){var e=YP();x(t,e)}var KP=ie('<label class="entry-panel-switch tool-pad-button svelte-w57h99"><input type="radio" class="svelte-w57h99"> <!></label>');function Ko(t,e){ae(e,!1);const n=[];let r=U(e,"selectedTool",12),i=U(e,"value",8),o=U(e,"title",8,void 0);function a(){Eu(i())}pe();var c=KP(),u=V(c);Qt(u);var _,p=$(u,2);ft(p,e,"default",{}),z(c),ee(()=>{A(c,"title",o()),yt(c,"active",i()===r()),_!==(_=i())&&(u.value=(u.__value=i())==null?"":i())}),Ka(n,[],u,()=>(i(),r()),r),Me("change",u,a),x(t,c),le()}var VP=ie('<span aria-hidden="true">1</span>'),XP=ie('<span aria-hidden="true" style="font-size: 50%"><span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span> <span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span> <span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span></span>'),qP=ie('<span aria-hidden="true" style="font-size: 50%">123</span>'),ZP=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),QP=ie('<div class="icon-wrapper svelte-o8e8fx"><!></div>'),JP=ie('<div class="tool-pad svelte-o8e8fx"><!> <!> <!> <!> <!></div>');function e6(t,e){ae(e,!1);const n=ot(),r=()=>Ce(ei,"$settingsStore",n);let i=U(e,"selectedTool",12);pe();var o=JP(),a=V(o);Ko(a,{get value(){return d.DIGIT},title:"Digit",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=VP();x(v,E)},$$slots:{default:!0},$$legacy:!0});var c=$(a,2);Ko(c,{get value(){return d.CORNER_PM},title:"Corner Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=XP();x(v,E)},$$slots:{default:!0},$$legacy:!0});var u=$(c,2);Ko(u,{get value(){return d.CENTER_PM},title:"Center Pencilmarks",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=qP();x(v,E)},$$slots:{default:!0},$$legacy:!0});var _=$(u,2);Ko(_,{get value(){return d.HIGHLIGHTS},title:"Highlights",get selectedTool(){return i()},set selectedTool(v){i(v)},children:(v,m)=>{var E=ZP(),O=V(E);zP(O),z(E),x(v,E)},$$slots:{default:!0},$$legacy:!0});var p=$(_,2);{var g=v=>{Ko(v,{get value(){return d.PEN_TOOL},title:"Pen Tool",get selectedTool(){return i()},set selectedTool(m){i(m)},children:(m,E)=>{var O=QP(),I=V(O);jP(I),z(O),x(m,O)},$$slots:{default:!0},$$legacy:!0})};fe(p,v=>{r().penToolActive&&v(g)})}z(o),x(t,o),le()}var t6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M451-107.304q-128.652-10.565-216.892-105.522-88.239-94.956-88.239-225.609 0-78.13 35.5-147.543 35.5-69.413 99.5-114.674l56.566 56.565q-52.609 32.435-82.478 87.957-29.87 55.521-29.87 117.695 0 98.305 64.587 169.609T451-187.087v79.783Zm60 0v-79.783q98.304-11.435 161.609-82.239 63.304-70.804 63.304-169.109 0-103.913-70.978-177.434-70.978-73.522-174.891-76.913h-21.696l62.261 62.826-47.522 47.522-152.783-152.784 152.783-153.349 47.522 47.522-68.479 68.479h22.261q138.522 0 234.914 98.022 96.391 98.022 96.391 236.109 0 130.653-88.022 225.609Q639.652-117.869 511-107.304Z"></path></svg>');function n6(t){var e=t6();x(t,e)}var r6=ie('<button class="controls-extra-button entry-panel-button settings svelte-1a25rn3"><div class="icon-wrapper svelte-1a25rn3"><!></div></button>');function Ts(t,e){let n=U(e,"title",8,void 0),r=U(e,"clickCb",8,void 0);var i=r6(),o=V(i),a=V(o);ft(a,e,"default",{}),z(o),z(i),ee(()=>A(i,"title",n())),Me("click",i,function(...c){var u;(u=r())==null||u.apply(this,c)}),x(t,i)}var i6=ie('<button class="modal-button">Confirm</button> <button class="modal-button">Cancel</button>',1),o6=ie('<div class="restart-content svelte-dqww3i"><h3 class="svelte-dqww3i">Are you sure you want to restart? All progress will be lost!</h3> <!></div>');function s6(t,e){ae(e,!1);let n=U(e,"showModal",12,!1);function r(){n(!1)}function i(){bp(),Pa(),n(!1)}pe(),kr(t,{title:"Restart Confirmation",get showModal(){return n()},set showModal(o){n(o)},children:(o,a)=>{var c=o6(),u=$(V(c),2);ll(u,{children:(_,p)=>{var g=i6(),v=de(g),m=$(v,2);Me("click",v,i),Me("click",m,r),x(_,g)},$$slots:{default:!0}}),z(c),x(o,c)},$$slots:{default:!0},$$legacy:!0}),le()}var a6=ie("<!> <!>",1);function l6(t){let e=T(!1);function n(){N(e,!0)}var r=a6(),i=de(r);Ts(i,{title:"Restart",clickCb:n,children:(a,c)=>{n6(a)},$$slots:{default:!0}});var o=$(i,2);s6(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var c6=ie('<div class="info-table svelte-35hg4d"><div class="info-table-title svelte-35hg4d"> </div> <!></div>');function Vo(t,e){let n=U(e,"title",8);var r=c6(),i=V(r),o=V(i,!0);z(i);var a=$(i,2);ft(a,e,"default",{}),z(r),ee(()=>nt(o,n())),x(t,r)}var u6=ie('<div class="info-shortcut-row svelte-yx55i8"><div class="description"> </div> <div class="shortcut-wrapper svelte-yx55i8"><!></div></div>');function dn(t,e){let n=U(e,"description",8);var r=u6(),i=V(r),o=V(i,!0);z(i);var a=$(i,2),c=V(a);ft(c,e,"default",{}),z(a),z(r),ee(()=>nt(o,n())),x(t,r)}var d6=ie('<div class="shortcut svelte-1cgt5u5"> </div>');function sn(t,e){let n=U(e,"shortcut",8);var r=d6(),i=V(r,!0);z(r),ee(()=>nt(i,n())),x(t,r)}var _6=ie("<p></p>"),f6=ie("<!> <!> <!> <!>",1),g6=ie("<!> or <!>",1),h6=ie("<!> <!> <!> <!> <!> <!> <!> <!>",1),p6=ie("<!> <!>",1),v6=ie('<div class="info-content svelte-1ql8c11"><!> <!> <!> <!> <!></div>');function m6(t,e){let n=U(e,"showModal",12,!1);kr(t,{title:"Info",get showModal(){return n()},set showModal(r){n(r)},children:(r,i)=>{var o=v6(),a=V(o);Vo(a,{title:"Setting Instructions",children:(g,v)=>{var m=_6();m.textContent="For typeable constraints like killer cages or sandwich sums you can use variables like 'x' which will be shared between all constraints. You can also use inequalities like '>=3' or '<5'. May not work for all constraints.",x(g,m)},$$slots:{default:!0}});var c=$(a,2);Vo(c,{title:"General",children:(g,v)=>{dn(g,{description:"Toggle Darkmode",children:(m,E)=>{sn(m,{shortcut:"Alt+Shift+D"})},$$slots:{default:!0}})},$$slots:{default:!0}});var u=$(c,2);Vo(u,{title:"Selection",children:(g,v)=>{var m=f6(),E=de(m);dn(E,{description:"Select cells",children:(y,D)=>{sn(y,{shortcut:"click/drag"})},$$slots:{default:!0}});var O=$(E,2);dn(O,{description:"Add to current selection",children:(y,D)=>{sn(y,{shortcut:"Shift+click/drag"})},$$slots:{default:!0}});var I=$(O,2);dn(I,{description:"Remove from current selection",children:(y,D)=>{sn(y,{shortcut:"Alt+click/drag"})},$$slots:{default:!0}});var b=$(I,2);dn(b,{description:"Add or remove from current selection",children:(y,D)=>{sn(y,{shortcut:"Ctrl+click/drag"})},$$slots:{default:!0}}),x(g,m)},$$slots:{default:!0}});var _=$(u,2);Vo(_,{title:"Change Tool",children:(g,v)=>{var m=h6(),E=de(m);dn(E,{description:"Cycle Tool",children:(j,F)=>{sn(j,{shortcut:"Space"})},$$slots:{default:!0}});var O=$(E,2);dn(O,{description:"Change to Digit Tool",children:(j,F)=>{sn(j,{shortcut:"Z"})},$$slots:{default:!0}});var I=$(O,2);dn(I,{description:"Change to Corner Pencilmark Tool",children:(j,F)=>{sn(j,{shortcut:"X"})},$$slots:{default:!0}});var b=$(I,2);dn(b,{description:"Change to Center Pencilmark Tool",children:(j,F)=>{sn(j,{shortcut:"C"})},$$slots:{default:!0}});var y=$(b,2);dn(y,{description:"Change to Highlights Tool",children:(j,F)=>{sn(j,{shortcut:"V"})},$$slots:{default:!0}});var D=$(y,2);dn(D,{description:"Quickshift To Corner Pencilmark Tool",children:(j,F)=>{sn(j,{shortcut:"Shift"})},$$slots:{default:!0}});var M=$(D,2);dn(M,{description:"Quickshift To Center Pencilmark Tool",children:(j,F)=>{sn(j,{shortcut:"Ctrl"})},$$slots:{default:!0}});var W=$(M,2);dn(W,{description:"Quickshift To Highlights Tool",children:(j,F)=>{var q=g6(),J=de(q);sn(J,{shortcut:"Shift + Ctrl"});var oe=$(J,2);sn(oe,{shortcut:"Alt"}),x(j,q)},$$slots:{default:!0}}),x(g,m)},$$slots:{default:!0}});var p=$(_,2);Vo(p,{title:"Undo/Redo",children:(g,v)=>{var m=p6(),E=de(m);dn(E,{description:"Undo",children:(I,b)=>{sn(I,{shortcut:"Ctrl+Z"})},$$slots:{default:!0}});var O=$(E,2);dn(O,{description:"Redo",children:(I,b)=>{sn(I,{shortcut:"Ctrl+Y"})},$$slots:{default:!0}}),x(g,m)},$$slots:{default:!0}}),z(o),x(r,o)},$$slots:{default:!0},$$legacy:!0})}var E6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M482.87-247q17.13 0 29.826-12.696 12.695-12.695 12.695-30.188t-12.695-29.826Q500-332.044 482.587-332.044q-17.413 0-29.826 12.288-12.413 12.289-12.413 30.154 0 17.211 12.486 29.906Q465.321-247 482.87-247Zm-39.522-146h67.478q0-24.87 6.5-46.37 6.5-21.5 38.804-48.369 29.87-23.739 42.587-49.423 12.718-25.683 12.718-56.644 0-54.629-33.538-87.477-33.537-32.847-90.767-32.847-50.695 0-90.174 26.76-39.478 26.761-57.608 72.106l62.043 23.308q11.566-28.565 32.71-43.783 21.144-15.217 47.769-15.217 28.63 0 47.51 16.325 18.88 16.324 18.88 42.713 0 19.918-12.152 38.853-12.152 18.935-34.326 37.108-28.869 24.87-43.652 52.105-14.782 27.235-14.782 70.852Zm36.73 327.131q-85.469 0-161.006-32.395-75.536-32.395-131.975-88.833-56.438-56.439-88.833-131.897-32.395-75.459-32.395-160.928 0-86.469 32.395-162.006 32.395-75.536 88.745-131.504 56.349-55.968 131.849-88.616 75.5-32.648 161.017-32.648 86.516 0 162.12 32.604 75.603 32.604 131.529 88.497t88.549 131.452Q894.696-566.584 894.696-480q0 85.547-32.648 161.075-32.648 75.527-88.616 131.896-55.968 56.37-131.426 88.765-75.459 32.395-161.928 32.395Z"></path></svg>');function C6(t){var e=E6();x(t,e)}var O6=ie("<!> <!>",1);function I6(t){let e=T(!1);function n(){N(e,!0)}var r=O6(),i=de(r);Ts(i,{title:"Info",clickCb:n,children:(a,c)=>{C6(a)},$$slots:{default:!0}});var o=$(i,2);m6(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var b6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M184.173-184.173v-218.436h79.218v139.218h139.218v79.218H184.173Zm0-373.218v-219.001h218.436v79.783H263.391v139.218h-79.218Zm373.218 373.218v-79.218h139.218v-139.218h79.783v218.436H557.391Zm139.218-373.218v-139.218H557.391v-79.783h219.001v219.001h-79.783Z"></path></svg>');function w6(t){var e=b6();x(t,e)}var y6=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M323.391-184.173v-139.218H184.173v-79.218h218.436v218.436h-79.218Zm234 0v-218.436h219.001v79.218H636.609v139.218h-79.218ZM184.173-557.391v-79.218h139.218v-139.783h79.218v219.001H184.173Zm373.218 0v-219.001h79.218v139.783h139.783v79.218H557.391Z"></path></svg>');function L6(t){var e=y6();x(t,e)}function A6(t){let e=T(!1);function n(){return document.fullscreenElement!=null}function r(){document.documentElement.requestFullscreen()}function i(){document.exitFullscreen()}function o(){n()?i():r(),N(e,!h(e))}Ts(t,{title:"Fullscreen",clickCb:o,children:(a,c)=>{var u=Se(),_=de(u);{var p=v=>{L6(v)},g=v=>{w6(v)};fe(_,v=>{h(e)?v(p):v(g,!1)})}x(a,u)},$$slots:{default:!0}})}function nv(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"renderers",8),i=U(e,"options",8);pe();var o=Se(),a=de(o);{var c=u=>{var _=Se(),p=de(_);ch(p,()=>r()[n().type],(g,v)=>{v(g,{get token(){return n()},get options(){return i()},get renderers(){return r()},children:(m,E)=>{var O=Se(),I=de(O);{var b=D=>{Wa(D,{get tokens(){return n().tokens},get renderers(){return r()},get options(){return i()}})},y=D=>{var M=nb();ee(()=>nt(M,n().raw)),x(D,M)};fe(I,D=>{"tokens"in n()&&n().tokens?D(b):D(y,!1)})}x(m,O)},$$slots:{default:!0}})}),x(u,_)};fe(a,u=>{r()[n().type]&&u(c)})}x(t,o),le()}function Wa(t,e){let n=U(e,"tokens",8),r=U(e,"renderers",8),i=U(e,"options",8);var o=Se(),a=de(o);{var c=u=>{var _=Se(),p=de(_);at(p,1,n,Lt,(g,v)=>{nv(g,{get token(){return h(v)},get renderers(){return r()},get options(){return i()}})}),x(u,_)};fe(a,u=>{n()&&u(c)})}x(t,o)}function rv(...t){return`/${t.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}`}function iv(t){return t.startsWith("/")||t.startsWith("#")}function N6(t,e){return e.slug(t).replace(/--+/g,"-")}function S6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;let o=T();k(()=>(Z(n()),Z(r())),()=>{N(o,N6(n().text,r().slugger))}),Ie(),pe();var a=Se(),c=de(a);return dh(c,()=>`h${n().depth}`,!1,(u,_)=>{let p;ee(()=>p=lh(u,p,{id:h(o)},void 0,u.namespaceURI===wu,u.nodeName.includes("-")));var g=Se(),v=de(g);ft(v,e,"default",{}),x(_,g)}),x(t,a),Qe(e,"renderers",i),le({renderers:i})}var R6=ie("<blockquote><!></blockquote>");function x6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=R6(),a=V(o);return ft(a,e,"default",{}),z(o),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}function T6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8),o=T();k(()=>Z(n()),()=>{N(o,n().ordered?"ol":"ul")}),Ie(),pe();var a=Se(),c=de(a);dh(c,()=>h(o),!1,(u,_)=>{let p;ee(()=>p=lh(u,p,{start:n().start||1},void 0,u.namespaceURI===wu,u.nodeName.includes("-")));var g=Se(),v=de(g);at(v,1,()=>n().items,Lt,(m,E)=>{var O=Ze(()=>({...h(E)}));nv(m,{get token(){return h(O)},get options(){return r()},get renderers(){return i()}})}),x(_,g)}),x(t,a),le()}var D6=ie("<li><!></li>");function k6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=D6(),a=V(o);return ft(a,e,"default",{}),z(o),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var G6=ie("<br>");function M6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=G6();return x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var U6=ie("<pre><code> </code></pre>");function F6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;pe();var o=U6(),a=V(o),c=V(a,!0);return z(a),z(o),ee(()=>{Rb(a,`lang-${n().lang}`),nt(c,n().text)}),x(t,o),Qe(e,"options",r),Qe(e,"renderers",i),le({options:r,renderers:i})}var $6=ie("<code> </code>");function P6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;pe();var o=$6(),a=V(o,!0);return ee(()=>nt(a,n().raw.slice(1,n().raw.length-1))),z(o),x(t,o),Qe(e,"options",r),Qe(e,"renderers",i),le({options:r,renderers:i})}var H6=ie('<th scope="col"><!></th>'),B6=ie("<td><!></td>"),W6=ie("<tr></tr>"),z6=ie("<table><thead><tr></tr></thead><tbody></tbody></table>");function Y6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8),i=U(e,"renderers",8);pe();var o=z6(),a=V(o),c=V(a);at(c,5,()=>n().header,Lt,(_,p)=>{var g=H6(),v=V(g);Wa(v,{get tokens(){return h(p).tokens},get options(){return r()},get renderers(){return i()}}),z(g),x(_,g)}),z(c),z(a);var u=$(a);at(u,5,()=>n().rows,Lt,(_,p)=>{var g=W6();at(g,5,()=>h(p),Lt,(v,m)=>{var E=B6(),O=V(E);Wa(O,{get tokens(){return h(m).tokens},get options(){return r()},get renderers(){return i()}}),z(E),x(v,E)}),z(g),x(_,g)}),z(u),z(o),x(t,o),le()}function j6(t,e){ae(e,!1);let n=U(e,"token",8);const r=void 0,i=void 0;pe();var o=Se(),a=de(o);return Sb(a,()=>n().text),x(t,o),Qe(e,"options",r),Qe(e,"renderers",i),le({options:r,renderers:i})}var K6=ie("<p><!></p>");function V6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=K6(),a=V(o);return ft(a,e,"default",{}),z(o),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var X6=ie("<a><!></a>");function q6(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;pe();var o=X6();ee(()=>A(o,"href",iv(n().href)?rv(r().baseUrl,n().href):n().href));var a=V(o);return ft(a,e,"default",{}),z(o),ee(()=>A(o,"title",n().title)),x(t,o),Qe(e,"renderers",i),le({renderers:i})}function Z6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=de(o);return ft(a,e,"default",{}),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var Q6=ie("<dfn><!></dfn>");function J6(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Q6(),a=V(o);return ft(a,e,"default",{}),z(o),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var e9=ie("<del><!></del>");function t9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=e9(),a=V(o);return ft(a,e,"default",{}),z(o),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var n9=ie("<em><!></em>");function r9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=n9(),a=V(o);return ft(a,e,"default",{}),z(o),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var i9=ie("<hr>");function o9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=i9();return x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var s9=ie("<strong><!></strong>");function a9(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=s9(),a=V(o);return ft(a,e,"default",{}),z(o),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}var l9=ie('<img class="markdown-image svelte-z38cge">');function c9(t,e){ae(e,!1);let n=U(e,"token",8),r=U(e,"options",8);const i=void 0;pe();var o=l9();return ee(()=>A(o,"src",iv(n().href)?rv(r().baseUrl,n().href):n().href)),ee(()=>{A(o,"title",n().title),A(o,"alt",n().text)}),x(t,o),Qe(e,"renderers",i),le({renderers:i})}function Xg(t,e){ae(e,!1);const n=void 0,r=void 0,i=void 0;var o=Se(),a=de(o);return ft(a,e,"default",{}),x(t,o),Qe(e,"token",n),Qe(e,"options",r),Qe(e,"renderers",i),le({token:n,options:r,renderers:i})}const u9=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,d9=Object.hasOwnProperty;class _9{constructor(){this.occurrences,this.reset()}slug(e,n){const r=this;let i=f9(e,n===!0);const o=i;for(;d9.call(r.occurrences,i);)r.occurrences[o]++,i=o+"-"+r.occurrences[o];return r.occurrences[i]=0,i}reset(){this.occurrences=Object.create(null)}}function f9(t,e){return typeof t!="string"?"":(e||(t=t.toLowerCase()),t.replace(u9,"").replace(/ /g,"-"))}function Rd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Di=Rd();function ov(t){Di=t}const sv=/[&<>"']/,g9=new RegExp(sv.source,"g"),av=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,h9=new RegExp(av.source,"g"),p9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qg=t=>p9[t];function Tn(t,e){if(e){if(sv.test(t))return t.replace(g9,qg)}else if(av.test(t))return t.replace(h9,qg);return t}const v9=/(^|[^\[])\^/g;function Ot(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const r={replace:(i,o)=>{let a=typeof o=="string"?o:o.source;return a=a.replace(v9,"$1"),n=n.replace(i,a),r},getRegex:()=>new RegExp(n,e)};return r}function Zg(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ss={exec:()=>null};function Qg(t,e){const n=t.replace(/\|/g,(o,a,c)=>{let u=!1,_=a;for(;--_>=0&&c[_]==="\\";)u=!u;return u?"|":" |"}),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Xo(t,e,n){const r=t.length;if(r===0)return"";let i=0;for(;i<r&&t.charAt(r-i-1)===e;)i++;return t.slice(0,r-i)}function m9(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return-1}function Jg(t,e,n,r){const i=e.href,o=e.title?Tn(e.title):null,a=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const c={type:"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,c}return{type:"image",raw:n,href:i,title:o,text:Tn(a)}}function E9(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[a]=o;return a.length>=r.length?i.slice(r.length):i}).join(`
`)}class za{constructor(e){me(this,"options");me(this,"rules");me(this,"lexer");this.options=e||Di}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Xo(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],i=E9(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const i=Xo(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:Xo(n[0],`
`)}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let r=Xo(n[0],`
`).split(`
`),i="",o="";const a=[];for(;r.length>0;){let c=!1;const u=[];let _;for(_=0;_<r.length;_++)if(/^ {0,3}>/.test(r[_]))u.push(r[_]),c=!0;else if(!c)u.push(r[_]);else break;r=r.slice(_);const p=u.join(`
`),g=p.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${p}`:p,o=o?`${o}
${g}`:g;const v=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,a,!0),this.lexer.state.top=v,r.length===0)break;const m=a[a.length-1];if((m==null?void 0:m.type)==="code")break;if((m==null?void 0:m.type)==="blockquote"){const E=m,O=E.raw+`
`+r.join(`
`),I=this.blockquote(O);a[a.length-1]=I,i=i.substring(0,i.length-E.raw.length)+I.raw,o=o.substring(0,o.length-E.text.length)+I.text;break}else if((m==null?void 0:m.type)==="list"){const E=m,O=E.raw+`
`+r.join(`
`),I=this.list(O);a[a.length-1]=I,i=i.substring(0,i.length-m.raw.length)+I.raw,o=o.substring(0,o.length-E.raw.length)+I.raw,r=O.substring(a[a.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:a,text:o}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r=n[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const a=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c=!1;for(;e;){let u=!1,_="",p="";if(!(n=a.exec(e))||this.rules.block.hr.test(e))break;_=n[0],e=e.substring(_.length);let g=n[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),v=e.split(`
`,1)[0],m=!g.trim(),E=0;if(this.options.pedantic?(E=2,p=g.trimStart()):m?E=n[1].length+1:(E=n[2].search(/[^ ]/),E=E>4?1:E,p=g.slice(E),E+=n[1].length),m&&/^[ \t]*$/.test(v)&&(_+=v+`
`,e=e.substring(v.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,E-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),D=new RegExp(`^ {0,${Math.min(3,E-1)}}(?:\`\`\`|~~~)`),M=new RegExp(`^ {0,${Math.min(3,E-1)}}#`),W=new RegExp(`^ {0,${Math.min(3,E-1)}}<[a-z].*>`,"i");for(;e;){const j=e.split(`
`,1)[0];let F;if(v=j,this.options.pedantic?(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),F=v):F=v.replace(/\t/g,"    "),D.test(v)||M.test(v)||W.test(v)||b.test(v)||y.test(v))break;if(F.search(/[^ ]/)>=E||!v.trim())p+=`
`+F.slice(E);else{if(m||g.replace(/\t/g,"    ").search(/[^ ]/)>=4||D.test(g)||M.test(g)||y.test(g))break;p+=`
`+v}!m&&!v.trim()&&(m=!0),_+=j+`
`,e=e.substring(j.length+1),g=F.slice(E)}}o.loose||(c?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(_)&&(c=!0));let O=null,I;this.options.gfm&&(O=/^\[[ xX]\] /.exec(p),O&&(I=O[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:_,task:!!O,checked:I,loose:!1,text:p,tokens:[]}),o.raw+=_}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const _=o.items[u].tokens.filter(g=>g.type==="space"),p=_.length>0&&_.some(g=>/\n.*\n/.test(g.raw));o.loose=p}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const r=Qg(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),o=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],a={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(const c of i)/^ *-+: *$/.test(c)?a.align.push("right"):/^ *:-+: *$/.test(c)?a.align.push("center"):/^ *:-+ *$/.test(c)?a.align.push("left"):a.align.push(null);for(let c=0;c<r.length;c++)a.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:a.align[c]});for(const c of o)a.rows.push(Qg(c,a.header.length).map((u,_)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:a.align[_]})));return a}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Tn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const a=Xo(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{const a=m9(n[2],"()");if(a>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+a;n[2]=n[2].substring(0,a),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],o="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],o=a[3])}else o=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),Jg(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const i=(r[2]||r[1]).replace(/\s+/g," "),o=n[i.toLowerCase()];if(!o){const a=r[0].charAt(0);return{type:"text",raw:a,text:a}}return Jg(r,o,r[0],this.lexer)}}emStrong(e,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const a=[...i[0]].length-1;let c,u,_=a,p=0;const g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+a);(i=g.exec(n))!=null;){if(c=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!c)continue;if(u=[...c].length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&a%3&&!((a+u)%3)){p+=u;continue}if(_-=u,_>0)continue;u=Math.min(u,u+_+p);const v=[...i[0]][0].length,m=e.slice(0,a+i.index+v+u);if(Math.min(a,u)%2){const O=m.slice(1,-1);return{type:"em",raw:m,text:O,tokens:this.lexer.inlineTokens(O)}}const E=m.slice(2,-2);return{type:"strong",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=Tn(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let r,i;return n[2]==="@"?(r=Tn(n[1]),i="mailto:"+r):(r=Tn(n[1]),i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let n;if(n=this.rules.inline.url.exec(e)){let i,o;if(n[2]==="@")i=Tn(n[0]),o="mailto:"+i;else{let a;do a=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(a!==n[0]);i=Tn(n[0]),n[1]==="www."?o="http://"+n[0]:o=n[0]}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let r;return this.lexer.state.inRawBlock?r=n[0]:r=Tn(n[0]),{type:"text",raw:n[0],text:r}}}}const C9=/^(?:[ \t]*(?:\n|$))+/,O9=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,I9=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ds=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,b9=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,lv=/(?:[*+-]|\d{1,9}[.)])/,cv=Ot(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,lv).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),xd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,w9=/^[^\n]+/,Td=/(?!\s*\])(?:\\.|[^\[\]\\])+/,y9=Ot(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Td).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),L9=Ot(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,lv).getRegex(),Cl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Dd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,A9=Ot("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Dd).replace("tag",Cl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),uv=Ot(xd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cl).getRegex(),N9=Ot(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",uv).getRegex(),kd={blockquote:N9,code:O9,def:y9,fences:I9,heading:b9,hr:Ds,html:A9,lheading:cv,list:L9,newline:C9,paragraph:uv,table:ss,text:w9},eh=Ot("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cl).getRegex(),S9={...kd,table:eh,paragraph:Ot(xd).replace("hr",Ds).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",eh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cl).getRegex()},R9={...kd,html:Ot(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Dd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ss,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ot(xd).replace("hr",Ds).replace("heading",` *#{1,6} *[^
]`).replace("lheading",cv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},dv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,x9=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_v=/^( {2,}|\\)\n(?!\s*$)/,T9=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ks="\\p{P}\\p{S}",D9=Ot(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ks).getRegex(),k9=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,G9=Ot(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ks).getRegex(),M9=Ot("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ks).getRegex(),U9=Ot("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ks).getRegex(),F9=Ot(/\\([punct])/,"gu").replace(/punct/g,ks).getRegex(),$9=Ot(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),P9=Ot(Dd).replace("(?:-->|$)","-->").getRegex(),H9=Ot("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",P9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ya=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,B9=Ot(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ya).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fv=Ot(/^!?\[(label)\]\[(ref)\]/).replace("label",Ya).replace("ref",Td).getRegex(),gv=Ot(/^!?\[(ref)\](?:\[\])?/).replace("ref",Td).getRegex(),W9=Ot("reflink|nolink(?!\\()","g").replace("reflink",fv).replace("nolink",gv).getRegex(),Gd={_backpedal:ss,anyPunctuation:F9,autolink:$9,blockSkip:k9,br:_v,code:x9,del:ss,emStrongLDelim:G9,emStrongRDelimAst:M9,emStrongRDelimUnd:U9,escape:dv,link:B9,nolink:gv,punctuation:D9,reflink:fv,reflinkSearch:W9,tag:H9,text:T9,url:ss},z9={...Gd,link:Ot(/^!?\[(label)\]\((.*?)\)/).replace("label",Ya).getRegex(),reflink:Ot(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ya).getRegex()},Iu={...Gd,escape:Ot(dv).replace("])","~|])").getRegex(),url:Ot(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Y9={...Iu,br:Ot(_v).replace("{2,}","*").getRegex(),text:Ot(Iu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ra={normal:kd,gfm:S9,pedantic:R9},qo={normal:Gd,gfm:Iu,breaks:Y9,pedantic:z9};class kn{constructor(e){me(this,"tokens");me(this,"options");me(this,"state");me(this,"tokenizer");me(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Di,this.options.tokenizer=this.options.tokenizer||new za,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Ra.normal,inline:qo.normal};this.options.pedantic?(n.block=Ra.pedantic,n.inline=qo.pedantic):this.options.gfm&&(n.block=Ra.gfm,this.options.breaks?n.inline=qo.breaks:n.inline=qo.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ra,inline:qo}}static lex(e,n){return new kn(n).lex(e)}static lexInline(e,n){return new kn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.options.pedantic&&(e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""));let i,o,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(i=c.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(p=>{_=p.call({lexer:this},u),typeof _=="number"&&_>=0&&(c=Math.min(c,_))}),c<1/0&&c>=0&&(a=e.substring(0,c+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){o=n[n.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,i,o,a=e,c,u,_;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)p.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(r=p.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),i=n[n.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,a,_)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),n.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const g=e.slice(1);let v;this.options.extensions.startInline.forEach(m=>{v=m.call({lexer:this},g),typeof v=="number"&&v>=0&&(p=Math.min(p,v))}),p<1/0&&p>=0&&(o=e.substring(0,p+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(_=r.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):n.push(r);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}}class ja{constructor(e){me(this,"options");me(this,"parser");this.options=e||Di}space(e){return""}code({text:e,lang:n,escaped:r}){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0],o=e.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Tn(i)+'">'+(r?o:Tn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:Tn(o,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${e}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:r}){const i=this.parser.parseInline(r),o=Zg(e);if(o===null)return i;e=o;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+i+"</a>",a}image({href:e,title:n,text:r}){const i=Zg(e);if(i===null)return r;e=i;let o=`<img src="${e}" alt="${r}"`;return n&&(o+=` title="${n}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):e.text}}class Md{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class Kn{constructor(e){me(this,"options");me(this,"renderer");me(this,"textRenderer");this.options=e||Di,this.options.renderer=this.options.renderer||new ja,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Md}static parse(e,n){return new Kn(n).parse(e)}static parseInline(e,n){return new Kn(n).parseInline(e)}parse(e,n=!0){let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=o,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const a=o;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let c=a,u=this.renderer.text(c);for(;i+1<e.length&&e[i+1].type==="text";)c=e[++i],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u}]}):r+=u;continue}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n){n=n||this.renderer;let r="";for(let i=0;i<e.length;i++){const o=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=c||"";continue}}const a=o;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}}class as{constructor(e){me(this,"options");me(this,"block");this.options=e||Di}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?kn.lex:kn.lexInline}provideParser(){return this.block?Kn.parse:Kn.parseInline}}me(as,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class j9{constructor(...e){me(this,"defaults",Rd());me(this,"options",this.setOptions);me(this,"parse",this.parseMarkdown(!0));me(this,"parseInline",this.parseMarkdown(!1));me(this,"Parser",Kn);me(this,"Renderer",ja);me(this,"TextRenderer",Md);me(this,"Lexer",kn);me(this,"Tokenizer",za);me(this,"Hooks",as);this.use(...e)}walkTokens(e,n){var i,o;let r=[];for(const a of e)switch(r=r.concat(n.call(this,a)),a.type){case"table":{const c=a;for(const u of c.header)r=r.concat(this.walkTokens(u.tokens,n));for(const u of c.rows)for(const _ of u)r=r.concat(this.walkTokens(_.tokens,n));break}case"list":{const c=a;r=r.concat(this.walkTokens(c.items,n));break}default:{const c=a;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[c.type]?this.defaults.extensions.childTokens[c.type].forEach(u=>{const _=c[u].flat(1/0);r=r.concat(this.walkTokens(_,n))}):c.tokens&&(r=r.concat(this.walkTokens(c.tokens,n)))}}return r}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const a=n.renderers[o.name];a?n.renderers[o.name]=function(...c){let u=o.renderer.apply(this,c);return u===!1&&(u=a.apply(this,c)),u}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=n[o.level];a?a.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),i.extensions=n),r.renderer){const o=this.defaults.renderer||new ja(this.defaults);for(const a in r.renderer){if(!(a in o))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const c=a,u=r.renderer[c],_=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new za(this.defaults);for(const a in r.tokenizer){if(!(a in o))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const c=a,u=r.tokenizer[c],_=o[c];o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new as;for(const a in r.hooks){if(!(a in o))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const c=a,u=r.hooks[c],_=o[c];as.passThroughHooks.has(a)?o[c]=p=>{if(this.defaults.async)return Promise.resolve(u.call(o,p)).then(v=>_.call(o,v));const g=u.call(o,p);return _.call(o,g)}:o[c]=(...p)=>{let g=u.apply(o,p);return g===!1&&(g=_.apply(o,p)),g}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,a=r.walkTokens;i.walkTokens=function(c){let u=[];return u.push(a.call(this,c)),o&&(u=u.concat(o.call(this,c))),u}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return kn.lex(e,n??this.defaults)}parser(e,n){return Kn.parse(e,n??this.defaults)}parseMarkdown(e){return(r,i)=>{const o={...i},a={...this.defaults,...o},c=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&o.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const u=a.hooks?a.hooks.provideLexer():e?kn.lex:kn.lexInline,_=a.hooks?a.hooks.provideParser():e?Kn.parse:Kn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then(p=>u(p,a)).then(p=>a.hooks?a.hooks.processAllTokens(p):p).then(p=>a.walkTokens?Promise.all(this.walkTokens(p,a.walkTokens)).then(()=>p):p).then(p=>_(p,a)).then(p=>a.hooks?a.hooks.postprocess(p):p).catch(c);try{a.hooks&&(r=a.hooks.preprocess(r));let p=u(r,a);a.hooks&&(p=a.hooks.processAllTokens(p)),a.walkTokens&&this.walkTokens(p,a.walkTokens);let g=_(p,a);return a.hooks&&(g=a.hooks.postprocess(g)),g}catch(p){return c(p)}}}onError(e,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Tn(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}}const Ai=new j9;function Ct(t,e){return Ai.parse(t,e)}Ct.options=Ct.setOptions=function(t){return Ai.setOptions(t),Ct.defaults=Ai.defaults,ov(Ct.defaults),Ct};Ct.getDefaults=Rd;Ct.defaults=Di;Ct.use=function(...t){return Ai.use(...t),Ct.defaults=Ai.defaults,ov(Ct.defaults),Ct};Ct.walkTokens=function(t,e){return Ai.walkTokens(t,e)};Ct.parseInline=Ai.parseInline;Ct.Parser=Kn;Ct.parser=Kn.parse;Ct.Renderer=ja;Ct.TextRenderer=Md;Ct.Lexer=kn;Ct.lexer=kn.lex;Ct.Tokenizer=za;Ct.Hooks=as;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;Kn.parse;kn.lex;function K9(t){return new kn().lex(t)}const V9=()=>({heading:S6,blockquote:x6,list:T6,list_item:k6,br:M6,code:F6,codespan:P6,table:Y6,html:j6,paragraph:V6,link:q6,text:Z6,def:J6,del:t9,em:r9,hr:o9,strong:a9,image:c9,space:Xg,escape:Xg}),X9=()=>({baseUrl:"/",slugger:new _9});function q9(){const t=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||t(e)},uh(()=>{console.warn=t})}function hv(t,e){ae(e,!1),q9();let n=U(e,"source",8),r=U(e,"options",24,()=>({})),i=U(e,"renderers",24,()=>({})),o=T(),a=T(),c=T();k(()=>(Z(n()),Z(i()),Z(r())),()=>{N(o,K9(n())),N(a,{...V9(),...i()}),N(c,{...X9(),...r()})}),Ie(),pe(),Wa(t,{get tokens(){return h(o)},get renderers(){return h(a)},get options(){return h(c)}}),le()}var Z9=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC puzzle link</a>',1),Q9=ie('<br> <a target="_blank" rel="noreferrer noopener">Visit CTC youtube link</a>',1),J9=ie('<div class="rules-content svelte-1hehzdd"><h3 class="title svelte-1hehzdd"> </h3> <h3 class="authors svelte-1hehzdd"> </h3> <div class="rules"><!></div> <!> <!></div>');function eH(t,e){ae(e,!1);const n=ot(),r=()=>Ce(Tr,"$puzzleMetaStore",n),i=T();let o=U(e,"showModal",12,!1);function a(u){return u?Ma(u," & ",", "):"Anonymous"}function c(u){return u&&u.length?u:"No ruleset provided."}k(()=>r(),()=>{N(i,r())}),Ie(),pe(),kr(t,{title:"Rules",get showModal(){return o()},set showModal(u){o(u)},children:(u,_)=>{var p=J9(),g=V(p),v=V(g,!0);z(g);var m=$(g,2),E=V(m);ee(()=>nt(E,`by ${a(h(i).authors)??""}`)),z(m);var O=$(m,2),I=V(O),b=Ze(()=>c(h(i).ruleset));hv(I,{get source(){return h(b)}}),z(O);var y=$(O,2);{var D=j=>{var F=Z9(),q=$(de(F),2);ee(()=>A(q,"href",h(i).ctcUrl)),x(j,F)};fe(y,j=>{var F,q;(q=(F=h(i))==null?void 0:F.ctcUrl)!=null&&q.length&&j(D)})}var M=$(y,2);{var W=j=>{var F=Q9(),q=$(de(F),2);ee(()=>A(q,"href",h(i).ctcYoutubeUrl)),x(j,F)};fe(M,j=>{var F,q;(q=(F=h(i))==null?void 0:F.ctcYoutubeUrl)!=null&&q.length&&j(W)})}z(p),ee(()=>{var j;return nt(v,((j=h(i))==null?void 0:j.title)||"Puzzle")}),x(u,p)},$$slots:{default:!0},$$legacy:!0}),le()}var tH=ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M185.087-105.869q-32.927 0-56.073-23.145-23.145-23.146-23.145-56.073v-589.826q0-33.16 23.145-56.472 23.146-23.311 56.073-23.311h190.869q8.392-35 37.087-57.5 28.696-22.5 66.957-22.5 38.261 0 66.957 22.5 28.695 22.5 37.087 57.5h190.869q33.16 0 56.472 23.311 23.311 23.312 23.311 56.472v589.826q0 32.927-23.311 56.073-23.312 23.145-56.472 23.145H185.087Zm100-179.218H551.87v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60Zm0-164.913h389.826v-60H285.087v60ZM480-793.609q15.96 0 27.176-11.215Q518.391-816.04 518.391-832q0-15.96-11.215-27.176Q495.96-870.391 480-870.391q-15.96 0-27.176 11.215Q441.609-847.96 441.609-832q0 15.96 11.215 27.176Q464.04-793.609 480-793.609Z"></path></svg>');function nH(t){var e=tH();x(t,e)}var rH=ie("<!> <!>",1);function iH(t){let e=T(!1);function n(){N(e,!0)}var r=rH(),i=de(r);Ts(i,{title:"Rules",clickCb:n,children:(a,c)=>{nH(a)},$$slots:{default:!0}});var o=$(i,2);eH(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var oH=ie("<!> <!>",1);function sH(t){let e=T(!1);function n(){N(e,!0)}var r=oH(),i=de(r);Ts(i,{title:"Settings",clickCb:n,children:(a,c)=>{xp(a)},$$slots:{default:!0}});var o=$(i,2);Tp(o,{get showModal(){return h(e)},set showModal(a){N(e,a)},$$legacy:!0}),x(t,r)}var aH=ie('<div class="controls-extra-pad svelte-bhmi1d"><!> <!> <!> <!> <!></div>');function lH(t){var e=aH(),n=V(e);sH(n);var r=$(n,2);iH(r);var i=$(r,2);A6(i);var o=$(i,2);I6(o);var a=$(o,2);l6(a),z(e),x(t,e)}var cH=ie('<div class="entry-panel-wrapper svelte-m8abhs"><div class="puzzle-info svelte-m8abhs"><div class="puzzle-header svelte-m8abhs"><div class="title"> </div> <div class="authors"> </div></div> <div class="puzzle-rules svelte-m8abhs"><!></div></div>  <div class="entry-panel svelte-m8abhs"><!> <div class="entry-subpanel1 svelte-m8abhs"><!> <!></div> <!></div></div>');function uH(t,e){ae(e,!1);const n=ot(),r=()=>Ce(to,"$svgRefStore",n),i=()=>Ce(Tr,"$puzzleMetaStore",n),o=()=>Ce(en,"$toolStore",n),a=T(),c=T();function u(){r()&&r().focus()}function _(re){return re?Ma(re," & ",", "):"Anonymous"}function p(re){return re&&re.length?re:"Normal sudoku rules apply."}k(()=>i(),()=>{N(a,i().title??"Sudoku")}),k(()=>i(),()=>{N(c,_(i().authors))}),Ie(),pe();var g=cH(),v=V(g),m=V(v),E=V(m),O=V(E,!0);z(E);var I=$(E,2),b=V(I);z(I),z(m);var y=$(m,2),D=V(y),M=Ze(()=>p(i().ruleset));hv(D,{get source(){return h(M)}}),z(y),z(v);var W=$(v,2),j=V(W);lH(j);var F=$(j,2),q=V(F);BP(q,{get selectedTool(){return o()}});var J=$(q,2);e6(J,{get selectedTool(){return sh(),o()},set selectedTool(re){vs(en,re)},$$legacy:!0}),z(F);var oe=$(F,2);UP(oe,{}),z(W),z(g),ee(()=>{nt(O,h(a)),nt(b,`by ${h(c)??""}`)}),Me("click",W,Vn(()=>{u()})),x(t,g),le()}var dH=ie('<div class="game-wrapper svelte-pcw6u0"><div class="game svelte-pcw6u0"><!> <div class="central-panel svelte-pcw6u0"><!></div> <div class="right-panel svelte-pcw6u0"><!></div></div></div>');function AH(t,e){ae(e,!1);const n=ot(),r=()=>Ce(rl,"$gameModeStore",n),i=T();uh(async()=>{const m=window.location.origin,E=pg===""?m:`${m}/${pg}`;try{await VU({workerURL:`${E}/minizinc-worker.js`,wasmURL:`${E}/minizinc.wasm`,dataURL:`${E}/minizinc.data`})}catch(O){const I="Failed to initialize MiniZinc: "+O.message;console.log(I)}}),k(()=>r(),()=>{N(i,r())}),Ie(),pe();var o=dH(),a=V(o),c=V(a);{var u=m=>{LF(m)};fe(c,m=>{h(i)===so.SETTING&&m(u)})}var _=$(c,2),p=V(_);AP(p,{}),z(_);var g=$(_,2),v=V(g);uH(v,{}),z(g),z(a),z(o),x(t,o),le()}export{AH as G,LH as b,rT as p,Pa as r,yT as s};
